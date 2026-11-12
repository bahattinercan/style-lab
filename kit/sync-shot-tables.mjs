#!/usr/bin/env node
/**
 * kit/sync-shot-tables.mjs — style.md "Örnek görseller" tablosunu manifest ile eşitler.
 *
 * Neden: 34 dokümanın her birinde 16 sahnenin adı + neye bakılacağı aynı kaynaktan
 * (kit/shots.manifest.json) üretilmeli; elle yazımda dosya adı sapması oluyordu.
 *
 * Kullanım:
 *   node kit/sync-shot-tables.mjs --check   # sapma varsa exit 1 (dosya yazmaz)
 *   node kit/sync-shot-tables.mjs --write   # tabloları yeniden yazar
 *
 * Yazılan satırlar yalnızca O stilin shots/ klasöründe gerçekten var olan sahnelerdir:
 * koyu mod sahneleri (17, 18) her stilde üretilmiyor; olmayan satırı yazmak
 * build-gallery'nin doküman↔dosya kapısını kırar.
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
  landing: 'Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare.',
  dashboard: 'Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu.',
  mobile: '390 px dar ekran: başlık ölçeği, tek sütun, dokunma hedefi.',
  components: 'Renk, tipografi, yüzey, boşluk ritmi — temel levha.',
  form: 'Girdi karakteri: radius, kenarlık, odak halkası, doğrulama renkleri.',
  overlay: 'Katman dili: modal gölgesi, menü yüzeyi, toast hiyerarşisi.',
  data: 'Veri dili: tablo satır ritmi, grafik serileri (--data-1..4), lejant.',
  nav: 'Gezinme: aktif durum işareti, sekme çizgisi, footer ağırlığı.',
  pricing: 'Ticari sayfa: öne çıkan kart, fiyat ölçeği, karşılaştırma tablosu.',
  auth: 'Güven ekranı: süsün en düşük olduğu kare; hata ve odak durumları.',
  list: 'Uygulama kabuğu: filtre çubuğu, toplu işlem, yoğun tablo.',
  states: 'Dört durum: boş, iskelet, hata, 404 — aynı stil içinde tutarlılık.',
  settings: 'Form + anahtar yoğunluğu; "tehlike bölgesi" renk kullanımı.',
  checkout: 'Ödeme: süs ≤ .22, özet sütunu, doğrulama hatası vurgusu.',
  onboarding: 'Akış: adım göstergesi, seçenek kartı, geri/ileri dengesi.',
  article: 'Okuma: 680 px ölçü, içindekiler, alıntı ve başlık ritmi.',
  'estate-landing': 'Emlak landing: poster hero + künye şeridi, portföy rafı, sticky bölüm, galeri mozaik — 6 ilan kuralı.',
  'estate-detail': 'İlan detayı: galeri, künye, açıklama, kat planı, harita, yapışkan ajan paneli + 3 alanlı form.',
  'estate-map': 'Harita + filtre: sol filtre rayı, iğneli harita, hover kartı, mini sonuç listesi.',
  'estate-concierge': 'Concierge: 3 alanlı form, adım göstergesi, güven ve gizlilik blokları.',
  'mobile-estate': 'Mobil emlak: dikey poster hero, künye şeridi, 360° tur kartı, yapışkan ajan barı.',
  motion: 'Hareket levhası: giriş / scroll reveal / pin+scrub beatleri, süre ve eğri etiketleri.',
};

const STYLE_NOTE =
  'Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.';

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
  const first = present[0].file;
  const last = present[present.length - 1].file;
  const value = first === last ? `\`shots/${first}\`` : `\`shots/${first}\` … \`shots/${last}\``;
  return md.replace(/^\| \*\*Görseller\*\* \|.*$/m, `| **Görseller** | ${value} |`);
}

function replaceSection(md, table) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Örnek görseller\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };
  parts[idx] = ['## Örnek görseller', '', STYLE_NOTE, '', table, ''].join('\n');
  return { md: parts.join('\n').replace(/\n+$/, '\n'), ok: true };
}

/** Ekran reçetesi satırı → kanıtlayan görsel(ler). */
const SCREEN_SHOTS = [
  [/landing|hero/i, ['01-landing.png']],
  [/dashboard|panel/i, ['02-dashboard.png']],
  [/mobil alt|mobil/i, ['03-mobile.png']],
  [/form/i, ['05-components-form.png']],
  [/liste|tablo/i, ['11-page-list.png']],
  [/boş/i, ['12-page-states.png']],
  [/onboarding/i, ['15-page-onboarding.png']],
  [/pricing|fiyat/i, ['09-page-pricing.png']],
  [/giriş|ödeme|auth|checkout/i, ['10-page-auth.png', '14-page-checkout.png']],
  [/modal|diyalog/i, ['06-components-overlay.png']],
  [/toast|bildirim|uyarı/i, ['06-components-overlay.png']],
  [/hata|404/i, ['12-page-states.png']],
  [/profil|ayar|settings/i, ['13-page-settings.png']],
  [/makale|okuma|içerik/i, ['16-page-article.png']],
  [/veri|grafik|tablo veri/i, ['07-components-data.png']],
  [/gezinme|nav/i, ['08-components-nav.png']],
];

function shotForScreen(name) {
  for (const [re, files] of SCREEN_SHOTS) {
    if (re.test(name)) return files;
  }
  return [];
}

/** "## Ekran reçeteleri" tablosuna dördüncü kolon olarak kanıt görselini ekler. */
function upsertScreenTable(md, have) {
  const parts = md.split(/\n(?=## )/);
  const idx = parts.findIndex((p) => /^##\s+Ekran reçeteleri\s*(\n|$)/.test(p));
  if (idx === -1) return { md, ok: false };

  const lines = parts[idx].split('\n');
  const headAt = lines.findIndex((l) => l.trim().startsWith('|'));
  if (headAt === -1) return { md, ok: false };

  const cells = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
  const header = cells(lines[headAt]);
  const out = [];
  out.push(...lines.slice(0, headAt));
  out.push('| Ekran | Yoğunluk | Uygulama | Görsel |');
  out.push('|---|---|---|---|');

  for (let i = headAt + 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim().startsWith('|')) {
      out.push(...lines.slice(i));
      break;
    }
    const c = cells(line);
    if (c.length < 2) continue;
    const screen = c[0];
    const shots =
      shotForScreen(screen)
        .filter((f) => have.has(f))
        .map((f) => `\`shots/${f}\``)
        .join(' · ') || '—';
    out.push(`| ${screen} | ${c[1] ?? ''} | ${c[2] ?? ''} | ${shots} |`);
  }
  parts[idx] = out.join('\n');
  void header;
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
  const satirSayilari = new Map();
  for (const dirName of styleDirs()) {
    const file = path.join(STYLES_DIR, dirName, 'style.md');
    const before = fs.readFileSync(file, 'utf8');
    const present = existingScenes(dirName, scenes);
    const have = new Set(present.map((s) => s.file));
    satirSayilari.set(dirName, present.length);
    const res = replaceSection(before, tableFor(present));
    const scrub = (md) => {
      // çekirdek dışı sahneye yapılan atıflar: parantez içindeyse cümle kalmasın, tablo hücresinde "—"
      let out = md.replace(/\s*\(`shots\/([^`]+)`\)/g, (m, f) => (have.has(f) ? m : ''));
      out = out.replace(/`shots\/([^`]+)`/g, (m, f) => (have.has(f) ? m : '—'));
      return out;
    };
    if (res.ok) res.md = scrub(upsertMetaRow(res.md, present));
    if (!res.ok) {
      drift.push(`${dirName}: "## Örnek görseller" bölümü yok`);
      continue;
    }
    const res2 = upsertScreenTable(res.md, have);
    if (!res2.ok) {
      drift.push(`${dirName}: "## Ekran reçeteleri" tablosu yok`);
      continue;
    }
    if (res2.md === before) continue;
    changed++;
    if (WRITE) fs.writeFileSync(file, res2.md);
    else drift.push(`${dirName}: tablolar manifest ile eşleşmiyor`);
  }

  if (WRITE) {
    const dagilim = new Map();
    for (const n of satirSayilari.values()) dagilim.set(n, (dagilim.get(n) ?? 0) + 1);
    const ozet = [...dagilim.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([n, k]) => `${k} stil × ${n} satır`)
      .join(' · ');
    console.log(`${changed} dosya güncellendi · ${ozet} (yalnız o stilde var olan sahneler) + ekran reçetesi görsel kolonu`);
  } else if (drift.length) {
    console.log(`${drift.length} sapma:`);
    for (const d of drift.slice(0, 10)) console.log('  × ' + d);
    process.exit(1);
  } else {
    console.log('eşitleme: temiz (tüm style.md tabloları manifest ile aynı)');
  }
}

main();
