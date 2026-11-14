#!/usr/bin/env node
/**
 * kit/sync-shot-tables.mjs — style.md tablolarını manifest ile eşitler (v6: tek sayfa).
 *
 * Neden: her dokümanda görsel tablosu, meta satırı ve "Ekran reçeteleri" kanıt kolonu
 * aynı kaynaktan (kit/shots.manifest.json) üretilmeli; elle yazımda dosya adı sapması oluyordu.
 *
 * Kullanım:
 *   node kit/sync-shot-tables.mjs --check           # sapma varsa exit 1 (dosya yazmaz)
 *   node kit/sync-shot-tables.mjs --write           # tabloları yeniden yazar
 *   node kit/sync-shot-tables.mjs --write --styles minimalism,glassmorphism
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MANIFEST = path.join(ROOT, 'kit', 'shots.manifest.json');

const WRITE = process.argv.includes('--write');
const onlyArg = process.argv.indexOf('--styles');
const only =
  onlyArg >= 0 && process.argv[onlyArg + 1] && !process.argv[onlyArg + 1].startsWith('--')
    ? process.argv[onlyArg + 1].split(',')
    : [];

/** O stilin shots/ klasöründe gerçekten duran sahneler (sıra manifest sırası). */
function existingScenes(dirName, scenes) {
  return scenes.filter((s) => fs.existsSync(path.join(STYLES_DIR, dirName, 'shots', s.file)));
}

/** Sahne başına "neye bak" notu — kısa, ölçülebilir. */
const NOTES = {
  landing:
    '1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede.',
};

const STYLE_NOTE = 'Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.';

function styleDirs() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .filter((d) => !only.length || only.includes(d.replace(/^\d+-/, '')));
}

function tableFor(scenes) {
  const rows = scenes.map((s) => {
    const note = NOTES[s.key] ?? s.label;
    return `| \`shots/${s.file}\` | ${s.label} — ${note} |`;
  });
  return ['| Görsel | Neye bak |', '|---|---|', ...rows].join('\n');
}

/** Meta tablodaki **Görseller** satırını var olan çekirdek sahnelere göre yazar. */
function upsertMetaRow(md, present) {
  if (!present.length) return md;
  const value = `\`shots/${present[0].file}\` (tek sayfa · 1280×2400)`;
  return md.replace(/^\| \*\*Görseller\*\* \|.*$/m, `| **Görseller** | ${value} |`);
}

function replaceSection(md, table) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Örnek görseller\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };
  parts[idx] = ['## Örnek görseller', '', STYLE_NOTE, '', table, ''].join('\n');
  return { md: parts.join('\n').replace(/\n+$/, '\n'), ok: true };
}

/** "## Ekran reçeteleri" tablosunda kanıt görseli = tek sayfa. */
function upsertScreenTable(md, present) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Ekran reçeteleri\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };

  const lines = parts[idx].split('\n');
  const headAt = lines.findIndex((l) => l.trim().startsWith('|'));
  if (headAt === -1) return { md, ok: false };

  const cells = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
  const proof = present.length ? `\`shots/${present[0].file}\`` : '—';

  const out = [...lines.slice(0, headAt), '| Ekran | Yoğunluk | Uygulama | Görsel |', '|---|---|---|---|'];
  for (let i = headAt + 2; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim().startsWith('|')) {
      out.push(...lines.slice(i));
      break;
    }
    const c = cells(line);
    if (c.length < 2) continue;
    out.push(`| ${c[0]} | ${c[1] ?? ''} | ${c[2] ?? ''} | ${proof} |`);
  }
  parts[idx] = out.join('\n');
  return { md: parts.join('\n').replace(/\n+$/, '\n'), ok: true };
}

function main() {
  if (!fs.existsSync(MANIFEST)) {
    console.error('kit/shots.manifest.json yok — önce render çalıştır');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const scenes = manifest.scenes ?? [];

  let changed = 0;
  const drift = [];
  for (const dirName of styleDirs()) {
    const file = path.join(STYLES_DIR, dirName, 'style.md');
    const before = fs.readFileSync(file, 'utf8');
    const present = existingScenes(dirName, scenes);
    const have = new Set(present.map((s) => s.file));

    const res = replaceSection(before, tableFor(present));
    if (!res.ok) {
      drift.push(`${dirName}: "## Örnek görseller" bölümü yok`);
      continue;
    }
    // çekirdek dışı sahneye yapılan atıflar: tablo hücresinde "—", parantez içinde değilse silinir
    const scrub = (md) => {
      let out = md.replace(/\s*\(`shots\/([^`]+)`\)/g, (m, f) => (have.has(f) ? m : ''));
      out = out.replace(/`shots\/([^`]+)`/g, (m, f) => (have.has(f) ? m : '—'));
      return out;
    };
    let next = scrub(upsertMetaRow(res.md, present));

    const res2 = upsertScreenTable(next, present);
    if (!res2.ok) {
      drift.push(`${dirName}: "## Ekran reçeteleri" tablosu yok`);
      continue;
    }
    next = res2.md;
    if (next === before) continue;
    if (WRITE) {
      fs.writeFileSync(file, next);
      changed += 1;
    } else {
      drift.push(`${dirName}: tablolar manifest ile eşleşmiyor`);
    }
  }

  if (WRITE) {
    console.log(`${changed} dosya güncellendi · tek sayfa tablosu + ekran reçetesi görsel kolonu`);
    return;
  }
  if (drift.length) {
    console.log(`${drift.length} sapma:`);
    for (const d of drift.slice(0, 10)) console.log('  × ' + d);
    process.exit(1);
  }
  console.log('eşitleme: temiz (tüm style.md tabloları manifest ile aynı)');
}

main();
