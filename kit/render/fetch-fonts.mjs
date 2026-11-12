#!/usr/bin/env node
/**
 * kit/render/fetch-fonts.mjs — Google Fonts woff2 dosyalarını yerelleştirir.
 *
 * Neden: ekran görüntüsü Edge headless ile alınır; sistemde Inter/Playfair gibi
 * aileler yoksa tipografi Segoe UI'a düşer ve stil karşılaştırması bozulur.
 *
 * Kullanım:
 *   node kit/render/fetch-fonts.mjs          # eksik olanları indir
 *   node kit/render/fetch-fonts.mjs --force   # hepsini yeniden indir
 *
 * Çıktı:
 *   kit/fonts/<aile>-<ağırlık>-<subset>.woff2
 *   kit/fonts/fonts.css   (@font-face, yerel yollar)
 *   kit/fonts/LICENSES.md (OFL notu)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'kit', 'fonts');
const FORCE = process.argv.includes('--force');

const FAMILIES = {
  Inter: [400, 500, 600, 700],
  'Space Grotesk': [500, 700],
  Poppins: [400, 600],
  Jost: [400, 600],
  Nunito: [400, 700],
  'Baloo 2': [600],
  'Chakra Petch': [400, 600],
  Rajdhani: [500, 700],
  Michroma: [400],
  Anton: [400],
  'Archivo Black': [400],
  'Playfair Display': [400, 700],
  'Cormorant Garamond': [300, 500],
  'EB Garamond': [400],
  Lora: [400, 600],
  Fraunces: [400, 700],
  Cinzel: [400, 600],
  'Poiret One': [400],
  'JetBrains Mono': [400, 700],
  'IBM Plex Mono': [400],
  'Space Mono': [400, 700],
  'Share Tech Mono': [400],
  'Courier Prime': [400],
  'Press Start 2P': [400],
  Silkscreen: [400],
  'VT323': [400],
  Caveat: [400, 600],
  Kalam: [400],
  'Architects Daughter': [400],
};

const SUBSETS = ['latin', 'latin-ext'];
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

async function getCss(family, weights) {
  const spec = family.replace(/ /g, '+');
  const url = `https://fonts.googleapis.com/css2?family=${spec}:wght@${weights.join(';')}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${family}: HTTP ${res.status}`);
  return res.text();
}

function parseFaces(css) {
  // /* latin */ @font-face { font-family: 'X'; font-style: normal; font-weight: 400; src: url(..) format('woff2'); unicode-range: ...; }
  const faces = [];
  const re = /\/\*\s*([a-z-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/g;
  for (const m of css.matchAll(re)) {
    const subset = m[1];
    if (!SUBSETS.includes(subset)) continue;
    const body = m[2];
    const fam = body.match(/font-family:\s*'([^']+)'/)?.[1];
    const weight = body.match(/font-weight:\s*(\d+)/)?.[1];
    const style = body.match(/font-style:\s*([a-z]+)/)?.[1] ?? 'normal';
    const src = body.match(/url\((https:\/\/[^)]+\.woff2)\)/)?.[1];
    const range = body.match(/unicode-range:\s*([^;]+);/)?.[1];
    if (fam && weight && src) faces.push({ subset, fam, weight, style, src, range });
  }
  return faces;
}

async function download(url, dest) {
  if (!FORCE && fs.existsSync(dest)) return 'cached';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`indirilemedi ${url}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return `${(buf.length / 1024).toFixed(0)}KB`;
}

async function pool(items, limit, worker) {
  const queue = [...items];
  const out = [];
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (queue.length) {
        const item = queue.shift();
        out.push(await worker(item));
      }
    }),
  );
  return out;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const entries = Object.entries(FAMILIES);
  const allFaces = [];

  await pool(entries, 4, async ([family, weights]) => {
    const css = await getCss(family, weights);
    const faces = parseFaces(css);
    if (!faces.length) throw new Error(`${family}: @font-face bulunamadı`);
    for (const f of faces) allFaces.push(f);
    return faces.length;
  });

  const cssLines = [
    '/* kit/fonts/fonts.css — OTOMATİK ÜRETİLDİ: node kit/render/fetch-fonts.mjs',
    '   Google Fonts (OFL). Yeniden üretmek için scripti çalıştır; elle düzenleme. */',
    '',
  ];
  let bytes = 0;
  const unique = new Map();
  for (const f of allFaces) unique.set(`${slug(f.fam)}-${f.weight}-${f.subset}`, f);

  await pool([...unique.values()], 6, async (f) => {
    const file = `${slug(f.fam)}-${f.weight}-${f.subset}.woff2`;
    const dest = path.join(OUT, file);
    await download(f.src, dest);
    bytes += fs.statSync(dest).size;
    cssLines.push(
      `@font-face {`,
      `  font-family: '${f.fam}';`,
      `  font-style: ${f.style};`,
      `  font-weight: ${f.weight};`,
      `  font-display: swap;`,
      `  src: url('./${file}') format('woff2');`,
      f.range ? `  unicode-range: ${f.range};` : null,
      `}`,
      '',
    );
    return file;
  });

  fs.writeFileSync(path.join(OUT, 'fonts.css'), cssLines.filter(Boolean).join('\n'));
  fs.writeFileSync(
    path.join(OUT, 'LICENSES.md'),
    [
      '# Font lisansları',
      '',
      'Bu klasördeki `.woff2` dosyaları Google Fonts üzerinden indirildi ve',
      'SIL Open Font License 1.1 (OFL) ile dağıtılır. Ticari kullanım serbesttir;',
      'font dosyaları tek başına satılamaz. Aile listesi `kit/render/fetch-fonts.mjs`',
      'içindeki `FAMILIES` sabitindedir.',
      '',
      `- Aile: ${Object.keys(FAMILIES).length}`,
      `- Dosya: ${unique.size}`,
      '',
    ].join('\n'),
  );

  console.log(
    `${Object.keys(FAMILIES).length} aile · ${unique.size} woff2 · ${(bytes / 1024 / 1024).toFixed(2)} MB → kit/fonts/`,
  );
}

main().catch((err) => {
  console.error('HATA:', err.message);
  process.exit(1);
});
