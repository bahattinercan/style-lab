#!/usr/bin/env node
/**
 * kit/fetch-fonts.mjs — downloads the TTFs of font families used in the catalog.
 *
 * Cause: Flutter requires **TTF/OTF** under `pubspec.yaml → flutter.fonts`; in repo
 * there is only woff2 for web (kit/fonts). This script is from Google Fonts (OFL licensed)
 * Downloads TTF; system fonts (SF Pro, Segoe UI, Menlo…) are skipped and reported.
 *
 * Google Fonts returns TTF to legacy browser UA (modern UA returns woff2).
 *
 * Usage:
 * node kit/fetch-fonts.mjs --dry # what to download (no size estimate, list)
 * node kit/fetch-fonts.mjs # download (skips existing)
 * node kit/fetch-fonts.mjs --check # are the required TTFs on disk
 * node kit/fetch-fonts.mjs --force # re-download*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const OUT_DIR = path.join(ROOT, 'kit', 'fonts', 'ttf');
const INDEX = path.join(OUT_DIR, 'INDEX.json');
const UA = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';

const ARGV = process.argv.slice(2);
const DRY = ARGV.includes('--dry');
const CHECK = ARGV.includes('--check');
const FORCE = ARGV.includes('--force');

/** Families not available in Google Fonts/platform specific: not bundled, fallback required*/
const SYSTEM_FAMILIES = new Set([
  'Helvetica Neue',
  'SF Pro Display',
  'SF Pro Text',
  'SF Mono',
  'Segoe UI',
  'Menlo',
  'Consolas',
  'Courier New',
  'Geist',
  'Archivo Expanded',
  'Outrun',
]);

/** Families with different Google Fonts name (if any)*/
const GF_NAME = {
  'Archivo Black': 'Archivo Black',
  'Baloo 2': 'Baloo 2',
  'Press Start 2P': 'Press Start 2P',
  'IBM Plex Mono': 'IBM Plex Mono',
  'JetBrains Mono': 'JetBrains Mono',
  'Share Tech Mono': 'Share Tech Mono',
  'Space Grotesk': 'Space Grotesk',
  'Space Mono': 'Space Mono',
  'Playfair Display': 'Playfair Display',
  'Cormorant Garamond': 'Cormorant Garamond',
  'EB Garamond': 'EB Garamond',
  'Architects Daughter': 'Architects Daughter',
  'Poiret One': 'Poiret One',
  'Chakra Petch': 'Chakra Petch',
  'Courier Prime': 'Courier Prime',
  'Nunito Sans': 'Nunito Sans',
};

const fileFor = (family, weight) => `${family.replace(/\s+/g, '-')}-${weight}.ttf`;

function neededFonts() {
  const map = new Map();
  for (const dir of fs.readdirSync(STYLES_DIR)) {
    const p = path.join(STYLES_DIR, dir, 'tokens.json');
    if (!fs.existsSync(p)) continue;
    const typo = JSON.parse(fs.readFileSync(p, 'utf8')).typography ?? {};
    const w = typo.weights ?? {};
    const weights = [w.body ?? 400, w.strong ?? 600, w.display ?? 700].map((n) => Math.round(Number(n) / 100) * 100);
    for (const fam of [typo.display, typo.body, typo.mono]) {
      if (!fam) continue;
      if (!map.has(fam)) map.set(fam, new Set());
      for (const weight of weights) map.get(fam).add(weight);
    }
  }
  return map;
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

/** CSS2 → [{ weight, url }] (old UA vs TTF URLs)*/
function parseFaces(css) {
  const faces = [];
  for (const block of css.split('@font-face').slice(1)) {
    const weight = Number(block.match(/font-weight:\s*(\d+)/)?.[1] ?? 400);
    const url = block.match(/url\((https:[^)]+)\)/)?.[1];
    if (url) faces.push({ weight, url });
  }
  return faces;
}

const needed = neededFonts();
const bundled = [...needed.keys()].filter((f) => !SYSTEM_FAMILIES.has(f)).sort();
const skipped = [...needed.keys()].filter((f) => SYSTEM_FAMILIES.has(f)).sort();

if (DRY) {
  let total = 0;
  for (const fam of bundled) total += needed.get(fam).size;
  console.log(`paketlenecek: ${bundled.length} aile · ${total} TTF`);
  for (const fam of bundled) console.log(`  ${fam}: ${[...needed.get(fam)].sort().join(', ')}`);
  if (skipped.length) console.log(`atlanan (sistem fontu): ${skipped.join(', ')}`);
  process.exit(0);
}

if (CHECK) {
  const problems = [];
  if (!fs.existsSync(INDEX)) {
    console.log('  ✗ INDEX.json yok');
    console.log('fix: node kit/fetch-fonts.mjs');
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
  const indexed = new Set(Object.keys(index.families));

  // 1) Is every file reported in INDEX on disk and of reasonable size
  let fileCount = 0;
  for (const [fam, info] of Object.entries(index.families)) {
    for (const rel of Object.values(info.files)) {
      fileCount++;
      const abs = path.join(ROOT, rel);
      if (!fs.existsSync(abs) || fs.statSync(abs).size < 10_000) problems.push(`${fam}: ${path.basename(rel)} missing/too small`);
    }
  }

  // 2) scope: each family in the catalog must be either an embedded or conscious system font
  const uncovered = [...needed.keys()].filter((f) => !indexed.has(f) && !SYSTEM_FAMILIES.has(f));
  for (const f of uncovered) problems.push(`${f}: neither embedded nor a system font (silent fallback)`);

  const missingWeights = Object.entries(index.families).filter(([, i]) => (i.missingWeights ?? []).length).length;
  console.log(
    `font TTF · ${indexed.size} families · ${fileCount} files · ${uncovered.length} uncovered · ${missingWeights} families with a missing weight (accepted: not on Google Fonts)`,
  );
  if (problems.length) {
    for (const p of problems.slice(0, 8)) console.log(`  ✗ ${p}`);
    if (problems.length > 8) console.log(`  … +${problems.length - 8}`);
    console.log('fix: node kit/fetch-fonts.mjs');
    process.exit(1);
  }
  console.log('result: ok');
  process.exit(0);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const index = { generatedBy: 'kit/fetch-fonts.mjs', license: 'Google Fonts — SIL Open Font License (OFL)', source: 'https://fonts.google.com', families: {}, skippedSystem: skipped };
let downloaded = 0;
let reused = 0;
const failed = [];

for (const fam of bundled) {
  const gfName = GF_NAME[fam] ?? fam;
  const weights = [...needed.get(fam)].sort((a, b) => a - b);
  const files = {};

  // Single request per weight: if a weight is missing (e.g. Anton alone 400) the others will not be lost
  const missingWeights = [];
  for (const weight of weights) {
    const target = path.join(OUT_DIR, fileFor(fam, weight));
    if (!FORCE && fs.existsSync(target)) {
      reused++;
      continue;
    }
    try {
      const css = await fetchText(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(gfName)}:wght@${weight}`);
      const face = parseFaces(css)[0];
      if (!face) {
        missingWeights.push(weight);
        continue;
      }
      const buf = await fetchBuffer(face.url);
      fs.writeFileSync(target, buf);
      downloaded++;
    } catch {
      missingWeights.push(weight);
    }
  }

  for (const weight of weights) {
    const rel = `kit/fonts/ttf/${fileFor(fam, weight)}`;
    if (fs.existsSync(path.join(ROOT, rel))) files[weight] = rel;
  }
  if (Object.keys(files).length) {
    index.families[fam] = { googleFonts: gfName, files };
    if (missingWeights.length) index.families[fam].missingWeights = missingWeights;
  }
}

fs.writeFileSync(INDEX, JSON.stringify(index, null, 2) + '\n');

const totalBytes = Object.values(index.families)
  .flatMap((f) => Object.values(f.files))
  .reduce((n, rel) => n + (fs.existsSync(path.join(ROOT, rel)) ? fs.statSync(path.join(ROOT, rel)).size : 0), 0);

console.log(`font TTF · ${Object.keys(index.families).length} aile · indirilen ${downloaded} · mevcut ${reused} · ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
if (skipped.length) console.log(`  atlanan (sistem fontu, paketlenmez): ${skipped.join(', ')}`);
if (failed.length) {
  for (const f of failed) console.log(`  ✗ ${f}`);
  process.exit(1);
}
