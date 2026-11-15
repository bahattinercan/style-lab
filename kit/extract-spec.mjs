#!/usr/bin/env node
/** Extract source metadata for the original 151 styles into a drift-checkable legacy spec. */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES = path.join(ROOT, 'styles');
const OUT = path.join(ROOT, 'kit/specs/legacy-01-151.json');
const CHECK = process.argv.includes('--check');
const sha = (value) => createHash('sha256').update(value).digest('hex');
const read = (p) => fs.readFileSync(p, 'utf8');
const FAMILIES = JSON.parse(read(path.join(ROOT, 'kit/families.json'))).families;
const BANDS = new Set(Object.keys(JSON.parse(read(path.join(ROOT, 'kit/specs/bands.json')))).filter((key) => key !== '_readme'));

// Legacy aileler görsel yönelimle gruplanmıştı; dokuz v6 bandı ise ürün alanına göre.
// Aile aralıklarını en yakın ortak reçeteye eşleriz; eşleme birebir aile eşitliği iddiası değildir.
const BAND_BY_RANGE = [
  [1, 7, 'operasyon'], [8, 12, 'materyal'], [13, 18, 'materyal'],
  [19, 27, 'oyun'], [28, 34, 'kultur'], [35, 36, 'operasyon'],
  [37, 37, 'tipografi'], [38, 38, 'materyal'], [39, 40, 'gelecek'],
  [41, 44, 'ticaret'], [45, 55, 'operasyon'], [56, 65, 'materyal'],
  [66, 75, 'kultur'], [76, 85, 'materyal'], [86, 95, 'tipografi'],
  [96, 105, 'gelecek'], [106, 115, 'operasyon'], [116, 125, 'oyun'],
  [126, 135, 'materyal'], [136, 145, 'gelecek'], [146, 151, 'kultur'],
];

function section(md, title) {
  const lines = md.split(/\r?\n/);
  const index = lines.findIndex((line) => /^#{2,4}\s+/.test(line) && line.replace(/^#+\s+/, '').trim() === title);
  if (index < 0) return '';
  const level = lines[index].match(/^#+/)[0].length;
  let end = index + 1;
  while (end < lines.length && !new RegExp(`^#{1,${level}}\\s`).test(lines[end])) end += 1;
  return lines.slice(index + 1, end).join('\n').trim();
}

function tableRows(markdown) {
  return markdown.split(/\r?\n/)
    .filter((line) => /^\s*\|/.test(line) && !/^\s*\|\s*:?-{2,}/.test(line))
    .map((line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim()));
}

function bullets(markdown) {
  return markdown.split(/\r?\n/).map((line) => line.match(/^\s*[-*]\s+(.+)$/)?.[1]).filter(Boolean);
}

function numbered(markdown) {
  return markdown.split(/\r?\n/).map((line) => line.match(/^\s*\d+[.)]\s+(.+)$/)?.[1]).filter(Boolean);
}

function bandFor(num) {
  return BAND_BY_RANGE.find(([from, to]) => num >= from && num <= to)?.[2] ?? null;
}

function meta(md, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return md.match(new RegExp(`^\\| \\*\\*${escaped}\\*\\* \\| (.*?) \\|\\s*$`, 'm'))?.[1]?.trim() ?? '';
}

function extract(dir) {
  const tokensText = read(path.join(STYLES, dir, 'tokens.json'));
  const md = read(path.join(STYLES, dir, 'style.md'));
  const fragment = read(path.join(STYLES, dir, 'shots.config.fragment.mjs'));
  const keywordsText = read(path.join(STYLES, dir, 'keywords.json'));
  const tokens = JSON.parse(tokensText);
  const [, num, slug] = dir.match(/^(\d+)-(.+)$/) ?? [];
  if (!num || !slug || Number(num) > 151) return null;
  const numericNum = Number(num);
  const family = FAMILIES.find(({ from, to }) => numericNum >= from && numericNum <= to);
  const palette = tokens.palette;
  const fonts = [tokens.typography.display, tokens.typography.body, tokens.typography.mono];
  const sourceFiles = {
    'tokens.json': sha(tokensText),
    'style.md': sha(md),
    'shots.config.fragment.mjs': sha(fragment),
    'keywords.json': sha(keywordsText),
  };
  const briefBlock = section(md, 'AI brief').match(/```\s*\n([\s\S]*?)\n```/)?.[1]?.trim() ?? '';
  const essence = section(md, 'Nedir');
  const notThis = bullets(section(md, 'Ne değildir'));
  const signature = bullets(section(md, 'Görsel imza'));
  const recognition = numbered(section(md, '3 saniyede tanıma testi'));
  const origin = section(md, 'Nereden gelir');
  const must = numbered(section(md, 'Zorunlu kurallar'));
  const mustNot = bullets(section(md, 'Yasaklar'));
  const trapRows = tableRows(section(md, 'Tuzaklar')).slice(1);
  const screenRows = tableRows(section(md, 'Ekran reçeteleri')).slice(1);
  const refRows = tableRows(section(md, 'Referanslar')).slice(1);
  const refs = refRows.map(([source, use]) => {
    const url = source.match(/https?:\/\/[^\s)`]+/)?.[0] ?? '';
    const known = tokens.refs.find((ref) => ref.url === url);
    const label = known?.label ?? (source.replace(/`/g, '').replace(url, '').trim() || (url ? new URL(url).hostname : source));
    return { label, url, use: use?.replace(/`/g, '') ?? known?.use ?? '' };
  });
  const keywordData = JSON.parse(keywordsText);
  const keywords = Array.isArray(keywordData)
    ? keywordData
    : [...(keywordData.labels ?? []), ...(keywordData.synonyms ?? []), ...(keywordData.keywords ?? [])];
  const cssTracking = tokens.css.match(/--tracking:\s*([^;]+);/)?.[1]?.trim() ?? tokens.typography.tracking?.display ?? '';
  const style = {
    num, slug, name: tokens.name,
    band: bandFor(numericNum),
    family: family?.name ?? '',
    tagline: md.match(/^> \*\*Bir cümlede:\*\* (.+)$/m)?.[1] ?? tokens.name,
    feeling: meta(md, 'Hissiyat'), best: meta(md, 'En iyi'), avoid: meta(md, 'Kaçın'),
    difficulty: meta(md, 'Zorluk').split(' · ')[0] ?? '',
    a11y: meta(md, 'Erişilebilirlik'),
    palette, fonts, radius: [tokens.shape.radius, tokens.shape.radiusLg],
    upper: tokens.typography.case === 'upper',
    tracking: cssTracking,
    shadow: tokens.elevation?.shadow ?? 'none',
    scale: tokens.typography.scale,
    layout: tokens.layout, imagery: tokens.imagery, industries: tokens.industries,
    neighbors: tokens.neighbors, must: must.length ? must : tokens.must, mustNot: mustNot.length ? mustNot : tokens.mustNot,
    refs: refs.length ? refs : tokens.refs, keywords,
    typography: tokens.typography, shape: tokens.shape,
    essence, notThis, recognition, origin, traps: trapRows.map((row) => row.slice(0, 3)),
    screens: screenRows.map((row) => row.slice(0, 3)), signature: signature.length ? signature : numbered(section(md, 'Görsel imza')),
    motif: fragment.match(/motif:\s*'([^']*)'/)?.[1] ?? 'none',
    bodyClass: fragment.match(/bodyClass:\s*'([^']*)'/)?.[1] ?? '',
    extraCss: fragment.match(/extraCss:\s*`([\s\S]*?)`/)?.[1]?.trim() ?? '',
    sourceFiles,
    sourceHash: sha(JSON.stringify(sourceFiles)),
    brief: briefBlock,
  };
  return style;
}

const styles = fs.readdirSync(STYLES).filter((dir) => /^\d{2,3}-/.test(dir)).sort((a,b) => Number(a.split('-')[0]) - Number(b.split('-')[0])).map(extract).filter(Boolean);
if (styles.length !== 151) throw new Error(`151 eski stil bekleniyordu, bulundu: ${styles.length}`);
const malformed = styles.map((style) => ({
  style,
  missing: [
    ...(!style.family ? ['family'] : []),
    ...(!BANDS.has(style.band) ? ['band'] : []),
    ...['must', 'mustNot', 'refs', 'keywords', 'signature', 'notThis', 'recognition', 'traps', 'screens'].filter((key) => !Array.isArray(style[key]) || style[key].length === 0),
    ...['tagline', 'feeling', 'best', 'avoid', 'essence', 'origin', 'brief', 'motif'].filter((key) => typeof style[key] !== 'string' || !style[key].trim()),
  ],
})).filter(({ missing }) => missing.length);
if (malformed.length) throw new Error(`legacy SPEC alanları eksik/geçersiz: ${malformed.map(({ style, missing }) => `${style.num}-${style.slug}(${missing.join('/')})`).join(', ')}`);
if (CHECK) {
  const current = JSON.parse(read(OUT));
  const drift = styles.filter((style, index) => JSON.stringify(style) !== JSON.stringify(current.styles[index]));
  console.log(`legacy SPEC · ${styles.length} stil · ${drift.length} drift`);
  for (const item of drift.slice(0, 20)) console.log(`  × ${item.num}-${item.slug}`);
  process.exitCode = drift.length ? 1 : 0;
} else {
  fs.writeFileSync(OUT, `${JSON.stringify({ schema: 1, sourcePolicy: 'legacy-assets-hash-checked', styles }, null, 2)}\n`);
  console.log(`çıkarıldı · ${styles.length} stil · ${path.relative(ROOT, OUT)}`);
}
