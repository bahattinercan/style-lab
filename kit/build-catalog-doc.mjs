#!/usr/bin/env node
/**
 * kit/build-catalog-doc.mjs — docs/catalog.md üretir (okuma listesi).
 *
 * Neden: katalog indeksi elle güncelleniyordu; stil sayısı değişince (151 → 251)
 * doküman sessizce bayatlıyordu. Tek kaynak: kit/styles.index.json + kit/families.json.
 *
 * Kullanım:
 *   node kit/build-catalog-doc.mjs          # yaz
 *   node kit/build-catalog-doc.mjs --check  # güncel mi (bayatsa exit 1)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = path.join(ROOT, 'kit', 'styles.index.json');
const FAMILIES = path.join(ROOT, 'kit', 'families.json');
const OUT = path.join(ROOT, 'docs', 'catalog.md');
const CHECK = process.argv.includes('--check');

const index = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
const families = JSON.parse(fs.readFileSync(FAMILIES, 'utf8')).families ?? [];
const styles = index.styles ?? [];

const byNum = new Map(styles.map((s) => [Number(s.num), s]));

const lines = [];
lines.push(`# Katalog indeksi — ${styles.length} stil`);
lines.push('');
lines.push('Bu dosya **üretilmiş bir okuma listesidir**: `node kit/build-catalog-doc.mjs`.');
lines.push('Makine-okur kaynak `kit/styles.index.json`; tek gerçek kaynak');
lines.push('`styles/<nn-slug>/style.md` + `tokens.json` + `kit/families.json`.');
lines.push(`Aile bantları ${families[0]?.from ?? 1}–${families[families.length - 1]?.to ?? 0} kesintisizdir.`);
lines.push('');
lines.push('> Bir stili seçtikten sonra: `shots/01-page.png` (tek sayfa, 1280×2400) →');
lines.push('> `style.md` (§ Zorunlu kurallar, § Bileşen reçeteleri, § Tuzaklar) → `tokens.json` (palet + kompozisyon).');
lines.push('> Dokümanla görsel çelişirse **görsel kazanır**.');
lines.push('');

for (const f of families) {
  const inBand = styles
    .filter((s) => Number(s.num) >= f.from && Number(s.num) <= f.to)
    .sort((a, b) => Number(a.num) - Number(b.num));
  if (!inBand.length) continue;
  lines.push(`## ${f.name} (${f.from}–${f.to}) · ${inBand.length} stil`);
  lines.push('');
  lines.push('| # | Stil | Etiketler | Tek cümle |');
  lines.push('|---|---|---|---|');
  for (const s of inBand) {
    const tags = (s.tags ?? []).join(' · ');
    const tag = String(s.tag ?? '').replace(/\|/g, '\\|');
    lines.push(`| ${s.num} | [${s.name}](../styles/${s.num}-${s.slug}/style.md) | ${tags} | ${tag} |`);
  }
  lines.push('');
}

const missing = [...byNum.keys()].filter((n) => !families.some((f) => n >= f.from && n <= f.to));
if (missing.length) {
  lines.push(`> ⚠ ${missing.length} stil hiçbir aile bandında değil: ${missing.join(', ')}`);
  lines.push('');
}

const md = lines.join('\n');
if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;
  if (current !== md) {
    console.log(`× docs/catalog.md bayat — node kit/build-catalog-doc.mjs`);
    process.exit(1);
  }
  console.log(`✓ docs/catalog.md güncel (${styles.length} stil · ${families.length} aile)`);
  process.exit(0);
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md);
const kb = (Buffer.byteLength(md) / 1024).toFixed(1);
console.log(`docs/catalog.md yazıldı · ${styles.length} stil · ${families.length} aile · ${kb} KB`);
