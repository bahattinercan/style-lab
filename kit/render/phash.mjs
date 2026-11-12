#!/usr/bin/env node
/**
 * kit/render/phash.mjs — ucuz görsel regresyon: piksel yerine algısal imza.
 *
 * Neden: 3915 PNG'nin baseline kopyası ≈1.2 GB. Bunun yerine her sahne için
 * 256 bitlik dHash (17×16 gri ızgara, yatay komşu karşılaştırması) + ortalama renk
 * saklanır (~370 KB JSON). Kaba bozulmayı (render hatası, stil kaybı, koyu mod kaçağı)
 * yakalar; piksel-piksel doğruluk için `pixel-diff.mjs` + `--write` baseline'ı kullanılır.
 *
 * Kullanım:
 *   node kit/render/phash.mjs --write              # baseline yaz (varsa --force)
 *   node kit/render/phash.mjs --check              # karşılaştır (hata varsa exit 1)
 *   node kit/render/phash.mjs --check --json
 *   node kit/render/phash.mjs --check --styles minimalism,ethereal
 *   node kit/render/phash.mjs --check --update <slug>   # kabul edilen değişiklik
 *   node kit/render/phash.mjs --self-test          # eşik duyarlılığını kanıtla
 *
 * Eşikler: Hamming mesafesi ≤ 8/256 bit, ortalama renk kanalı ≤ 10/255.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { decodePng } from './png.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const STYLES_DIR = path.join(ROOT, 'styles');
const BASELINE = path.join(HERE, 'visual-baseline.json');
/** --cache: kit/.shots-cache/ altındaki üretilen sahneleri de tara (varsayılan: yalnız repodaki çekirdek). */
const WITH_CACHE = process.argv.includes('--cache') || process.env.PHASH_CACHE === '1';
const CACHE_DIR = path.join(ROOT, 'kit', '.shots-cache');

const ARGV = process.argv.slice(2);
const WRITE = ARGV.includes('--write');
const CHECK = ARGV.includes('--check');
const FORCE = ARGV.includes('--force');
const JSON_OUT = ARGV.includes('--json');
const SELF_TEST = ARGV.includes('--self-test');
const argOf = (name) => {
  const i = ARGV.indexOf(name);
  return i < 0 ? null : (ARGV[i + 1] ?? null);
};
const ONLY = (() => {
  const v = argOf('--styles');
  if (!v) return null;
  const raw = v.split(',').map((s) => s.trim()).filter(Boolean);
  const resolved = new Set();
  for (const item of raw) {
    if (/^\d+$/.test(item)) {
      const dir = fs
        .readdirSync(STYLES_DIR)
        .find((d) => /^\d{2,3}-/.test(d) && parseInt(d, 10) === parseInt(item, 10));
      if (dir) resolved.add(dir.replace(/^\d+-/, ''));
    } else {
      resolved.add(item);
    }
  }
  return resolved;
})();

const HASH_MAX_DISTANCE = Number(argOf('--hash-tolerance') ?? 8);
const MEAN_MAX_DELTA = Number(argOf('--mean-tolerance') ?? 10);
const GRID = 17; // dHash: 17 sütun → 16 karşılaştırma
const ROWS = 16;

/* ---------- imza ---------- */

const hex = (bytes) => Buffer.from(bytes).toString('hex');

function popcount(buf) {
  let n = 0;
  for (const b of buf) {
    let v = b;
    while (v) {
      n += v & 1;
      v >>= 1;
    }
  }
  return n;
}

/**
 * PNG → { hash: 64 hex, mean: 6 hex }
 * hash: dHash 16×16 (yatay fark), mean: örneklenmiş ortalama RGB.
 */
export function signature(img) {
  const { width, height, channels, pixels } = img;
  const cellW = width / GRID;
  const cellH = height / ROWS;
  const gray = new Float64Array(GRID * ROWS);
  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;

  for (let gy = 0; gy < ROWS; gy++) {
    const y0 = Math.floor(gy * cellH);
    const y1 = Math.max(y0 + 1, Math.floor((gy + 1) * cellH));
    const stepY = Math.max(1, Math.floor((y1 - y0) / 6));
    for (let gx = 0; gx < GRID; gx++) {
      const x0 = Math.floor(gx * cellW);
      const x1 = Math.max(x0 + 1, Math.floor((gx + 1) * cellW));
      const stepX = Math.max(1, Math.floor((x1 - x0) / 6));
      let sum = 0;
      let count = 0;
      for (let y = y0; y < y1; y += stepY) {
        for (let x = x0; x < x1; x += stepX) {
          const i = (y * width + x) * channels;
          const cr = pixels[i];
          const cg = pixels[i + 1];
          const cb = pixels[i + 2];
          sum += 0.2126 * cr + 0.7152 * cg + 0.0722 * cb;
          count++;
          if (gy % 4 === 0 && gx % 4 === 0) {
            r += cr;
            g += cg;
            b += cb;
            n++;
          }
        }
      }
      gray[gy * GRID + gx] = sum / Math.max(1, count);
    }
  }

  // 16×16 = 256 bit: her satırda komşu hücre farkı
  const bits = new Uint8Array(32);
  let bit = 0;
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < GRID - 1; x++) {
      const left = gray[y * GRID + x];
      const right = gray[y * GRID + x + 1];
      if (right > left) bits[bit >> 3] |= 0x80 >> (bit & 7);
      bit++;
    }
  }

  const mean = [Math.round(r / Math.max(1, n)), Math.round(g / Math.max(1, n)), Math.round(b / Math.max(1, n))];
  return { hash: hex(bits), mean: hex(mean) };
}

function distance(a, b) {
  const [ha, ma] = a.split(':');
  const [hb, mb] = b.split(':');
  const hashDistance = popcount(Buffer.from(ha, 'hex').map((v, i) => v ^ Buffer.from(hb, 'hex')[i]));
  const meanA = Buffer.from(ma, 'hex');
  const meanB = Buffer.from(mb, 'hex');
  const meanDelta = Math.max(...[0, 1, 2].map((i) => Math.abs(meanA[i] - meanB[i])));
  return { hashDistance, meanDelta };
}

/* ---------- tarama ---------- */

function styleDirs() {
  return fs
    .readdirSync(STYLES_DIR)
    .filter((d) => /^\d{2,3}-/.test(d))
    .sort();
}

/** Sahne dosyaları: { file, path } — repodaki shots/ + (--cache) kit/.shots-cache/<dir>/. */
function shotsOf(dir) {
  const roots = [path.join(STYLES_DIR, dir, 'shots')];
  if (WITH_CACHE) roots.push(path.join(CACHE_DIR, dir));
  const out = [];
  const seen = new Set();
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const f of fs.readdirSync(root).filter((x) => x.toLowerCase().endsWith('.png')).sort()) {
      if (seen.has(f)) continue;
      seen.add(f);
      out.push({ file: f, path: path.join(root, f) });
    }
  }
  return out;
}

function computeAll({ verbose = false } = {}) {
  const out = {};
  let done = 0;
  let total = 0;
  for (const dir of styleDirs()) {
    const slug = dir.replace(/^\d+-/, '');
    if (ONLY && !ONLY.has(slug)) continue;
    total += shotsOf(dir).length;
  }
  for (const dir of styleDirs()) {
    const slug = dir.replace(/^\d+-/, '');
    if (ONLY && !ONLY.has(slug)) continue;
    const files = shotsOf(dir);
    if (!files.length) continue;
    out[slug] = {};
    for (const { file, path: shotPath } of files) {
      const img = decodePng(fs.readFileSync(shotPath));
      const sig = signature(img);
      out[slug][file] = `${sig.hash}:${sig.mean}`;
      done++;
      if (verbose && done % 250 === 0) process.stdout.write(`\r  ${done}/${total}`);
    }
  }
  if (verbose) process.stdout.write(`\r  ${done}/${total}\n`);
  return out;
}

const countOf = (tree) => Object.values(tree).reduce((n, files) => n + Object.keys(files).length, 0);

/* ---------- self-test ---------- */

function selfTest() {
  const first = shotsOf(styleDirs()[0]);
  const file = first[0]?.path;
  const base = decodePng(fs.readFileSync(file));
  const ref = `${signature(base).hash}:${signature(base).mean}`;
  const same = distance(ref, ref);

  const clone = (img) => ({ ...img, pixels: Buffer.from(img.pixels) });
  const brighten = clone(base);
  for (let i = 0; i < brighten.pixels.length; i += brighten.channels) {
    for (let c = 0; c < 3; c++) brighten.pixels[i + c] = Math.min(255, Math.round(brighten.pixels[i + c] * 1.15));
  }
  const inv = clone(base);
  for (let i = 0; i < inv.pixels.length; i += inv.channels) {
    for (let c = 0; c < 3; c++) inv.pixels[i + c] = 255 - inv.pixels[i + c];
  }
  const shift = clone(base);
  const shiftBy = 24;
  shift.pixels.fill(0);
  for (let y = 0; y < shift.height; y++) {
    for (let x = 0; x < shift.width; x++) {
      const sx = Math.min(shift.width - 1, x + shiftBy);
      const si = (y * shift.width + sx) * shift.channels;
      const di = (y * shift.width + x) * shift.channels;
      for (let c = 0; c < shift.channels; c++) shift.pixels[di + c] = base.pixels[si + c];
    }
  }

  const probes = [
    ['aynı görsel', same, false],
    ['%15 parlaklık', distance(ref, `${signature(brighten).hash}:${signature(brighten).mean}`), true],
    ['negatif', distance(ref, `${signature(inv).hash}:${signature(inv).mean}`), true],
    ['24px kayma', distance(ref, `${signature(shift).hash}:${signature(shift).mean}`), true],
  ];

  let failed = 0;
  for (const [label, d, shouldFlag] of probes) {
    const flagged = d.hashDistance > HASH_MAX_DISTANCE || d.meanDelta > MEAN_MAX_DELTA;
    const ok = flagged === shouldFlag;
    if (!ok) failed++;
    console.log(`  ${ok ? '✓' : '✗'} ${label}: hash ${d.hashDistance}/${256} · renk Δ${d.meanDelta} → ${flagged ? 'yakalandı' : 'geçti'}`);
  }
  console.log(failed ? `self-test: ${failed} başarısız` : 'self-test: eşikler ayırt ediyor');
  process.exit(failed ? 1 : 0);
}

if (SELF_TEST) selfTest();

/* ---------- ana akış ---------- */

if (!WRITE && !CHECK) {
  console.error('kullanım: node kit/render/phash.mjs --write | --check [--json] [--styles a,b] | --self-test');
  process.exit(2);
}

if (WRITE) {
  if (fs.existsSync(BASELINE) && !FORCE) {
    console.error(`baseline zaten var: ${path.relative(ROOT, BASELINE)} — üzerine yazmak için --force`);
    process.exit(2);
  }
  const tree = computeAll({ verbose: true });
  const doc = {
    generatedBy: 'kit/render/phash.mjs',
    algo: 'dhash-17x16+mean-rgb',
    thresholds: { hashDistance: HASH_MAX_DISTANCE, meanDelta: MEAN_MAX_DELTA },
    count: countOf(tree),
    styles: tree,
  };
  fs.writeFileSync(BASELINE, JSON.stringify(doc) + '\n');
  const kb = (fs.statSync(BASELINE).size / 1024).toFixed(0);
  console.log(`baseline yazıldı: kit/render/visual-baseline.json · ${doc.count} görsel · ${kb} KB`);
  process.exit(0);
}

if (!fs.existsSync(BASELINE)) {
  console.log('↷ görsel imza regresyonu (baseline yok, atlandı) — kurmak için: node kit/render/phash.mjs --write');
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
const current = computeAll({ verbose: process.env.PHASH_PROGRESS === '1' });
const failures = [];
let comparedCount = 0;
const missing = [];
const added = [];

for (const [slug, files] of Object.entries(baseline.styles)) {
  if (ONLY && !ONLY.has(slug)) continue;
  for (const [file, oldSig] of Object.entries(files)) {
    const sig = current[slug]?.[file];
    if (!sig) {
      missing.push(`${slug}/shots/${file}`);
      continue;
    }
    comparedCount++;
    const d = distance(oldSig, sig);
    if (d.hashDistance > HASH_MAX_DISTANCE || d.meanDelta > MEAN_MAX_DELTA) {
      failures.push({ slug, file, ...d });
    }
  }
}
for (const [slug, files] of Object.entries(current)) {
  for (const file of Object.keys(files)) {
    if (!baseline.styles[slug]?.[file]) added.push(`${slug}/shots/${file}`);
  }
}

const summary = { baseline: baseline.count, compared: comparedCount, failures: failures.length, missing: missing.length, added: added.length, scope: ONLY ? [...ONLY] : 'tümü' };

if (JSON_OUT) {
  console.log(JSON.stringify({ ...summary, details: failures }, null, 2));
} else {
  console.log(`görsel imza · ${summary.compared}/${summary.baseline} karşılaştırıldı · ${summary.failures} fark · ${summary.missing} eksik · ${summary.added} yeni`);
  for (const f of failures.slice(0, 15)) console.log(`  ✗ ${f.slug}/shots/${f.file} — hash ${f.hashDistance}/256 · renk Δ${f.meanDelta}`);
  if (failures.length > 15) console.log(`  … +${failures.length - 15}`);
  for (const m of missing.slice(0, 5)) console.log(`  ✗ eksik dosya: ${m}`);
  for (const a of added.slice(0, 5)) console.log(`  ! baseline'da yok: ${a}`);
}

const bad = failures.length + missing.length + added.length;
if (!bad) {
  console.log('sonuç: temiz');
  process.exit(0);
}
if (failures.length) console.log('  kabul edilen değişiklikse: node kit/render/phash.mjs --write --force');
process.exit(1);
