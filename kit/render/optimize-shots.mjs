#!/usr/bin/env node
/**
 * kit/render/optimize-shots.mjs — mevcut PNG ekran görüntülerini KAYIPSIZ optimize eder.
 *
 * Yöntem: PNG yeniden üretilmez; var olan dosya çözülür, filtre + zlib seçenekleri
 * denenir ve yalnızca DAHA KÜÇÜK olan sonuç yazılır. Piksel verisi birebir aynıdır
 * (lossless). Renk uzayı/gamma/ICC gibi kritik chunk'lar (iCCP, sRGB, gAMA, cHRM,
 * PLTE, tRNS, pHYs, tEXt…) orijinalinden bayt bayt kopyalanır — yalnızca IDAT gövdesi
 * yeniden sıkıştırılır. IHDR hiç değişmez (aynı boyut/renk tipi/bit derinliği).
 *
 * Neden gerekli: Edge/Chrome ekran görüntüleri her satırı filtre 0 (None) ile yazıyor;
 * düz renkli/az geçişli arayüzlerde Sub/Up/Paeth filtreleri + zlib seviye 9 ciddi
 * kazanç sağlıyor.
 *
 * Kullanım:
 *   node kit/render/optimize-shots.mjs --all                  # 45 stil, tüm shot'lar
 *   node kit/render/optimize-shots.mjs --styles minimalism,y2k
 *   node kit/render/optimize-shots.mjs --scenes 28-dark-dashboard,31-dark-mobile
 *   node kit/render/optimize-shots.mjs --all --dry            # yazmadan ölç
 *   node kit/render/optimize-shots.mjs --all --verify         # yalnız doğrula (yazmaz)
 *   node kit/render/optimize-shots.mjs --all --json           # tek satır JSON
 *   node kit/render/optimize-shots.mjs --styles y2k --json --jobs 8 --report rapor.md
 *
 * Bayraklar:
 *   --styles a,b   hedef stiller (slug veya "03-editorial-design" dizin adı)
 *   --all          tüm stiller (bayrak yoksa da tüm stiller)
 *   --dry          ölç, dosya yazma
 *   --verify       yalnız doğrulama: decode + piksel özeti + chunk bütünlüğü, yazmaz
 *   --json         tek satır JSON çıktısı (ilerleme stderr'e gider)
 *   --jobs N       paralel işçi sayısı [varsayılan: min(8, cpus)]
 *   --report <md>  markdown özet raporu yaz (repo dışında bir yol ver)
 *
 * Çıkış kodu: decode hatası, piksel farkı veya yazma hatası varsa 1; aksi halde 0.
 * Aynı komut aynı sonucu verir (deterministik); ikinci koşu "skipped" döner.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { isMainThread, parentPort, Worker } from 'node:worker_threads';
import { decodePng } from './png.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const SHOT_RE = /\.png$/i;
/** Bu boyutun üstünde pahalı filtre adayları (None/Avg) denenmez. */
const PLAN_FULL_LIMIT = 3 * 1024 * 1024;
const PLAN_MEDIUM_LIMIT = 512 * 1024;

const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const CHANNELS = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };
const FILTER_NAMES = ['none', 'sub', 'up', 'avg', 'paeth'];

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

function chunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([Buffer.from(type, 'ascii'), data])), 0);
  return Buffer.concat([head, data, crc]);
}

/** PNG'yi chunk'lara ayır → { ihdr, ihdrRaw, chunks, idat, firstIdat } */
function parsePng(buf) {
  if (buf.length < 8 || !buf.subarray(0, 8).equals(SIGNATURE)) throw new Error('PNG imzası geçersiz');
  const chunks = [];
  const idat = [];
  let ihdr = null;
  let ihdrRaw = null;
  let firstIdat = -1;
  let off = 8;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    if (off + 12 + len > buf.length) throw new Error(`${type} chunk gövdesi dosya sonunu aşıyor`);
    const data = Buffer.from(buf.subarray(off + 8, off + 8 + len));
    if (type === 'IHDR') {
      if (len !== 13) throw new Error('IHDR uzunluğu 13 değil');
      ihdr = {
        width: data.readUInt32BE(0),
        height: data.readUInt32BE(4),
        bitDepth: data[8],
        colorType: data[9],
        compression: data[10],
        filter: data[11],
        interlace: data[12],
      };
      ihdrRaw = data;
    } else if (type === 'IDAT') {
      if (firstIdat < 0) firstIdat = chunks.length;
      idat.push(data);
    }
    chunks.push({ type, data });
    off += 12 + len;
    if (type === 'IEND') break;
  }
  if (!ihdr) throw new Error('IHDR yok');
  if (!idat.length) throw new Error('IDAT yok');
  if (!chunks.some((c) => c.type === 'IEND')) throw new Error('IEND yok');
  return { ihdr, ihdrRaw, chunks, idat, firstIdat };
}

function geometry(ihdr) {
  const channels = CHANNELS[ihdr.colorType];
  if (!channels) throw new Error(`desteklenmeyen renk tipi: ${ihdr.colorType}`);
  const bitsPerPixel = channels * ihdr.bitDepth;
  return {
    channels,
    stride: Math.ceil((ihdr.width * bitsPerPixel) / 8),
    bpp: Math.max(1, Math.ceil(bitsPerPixel / 8)),
  };
}

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}

/** Filtreli ham satırları çöz → filtresiz piksel baytları. */
function unfilter(raw, ihdr, { stride, bpp }) {
  if (raw.length !== (stride + 1) * ihdr.height) {
    throw new Error(`IDAT boyutu beklenenle uyuşmuyor (${raw.length} ≠ ${(stride + 1) * ihdr.height})`);
  }
  const out = Buffer.alloc(stride * ihdr.height);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < ihdr.height; y++) {
    const base = y * (stride + 1);
    const filter = raw[base];
    if (filter > 4) throw new Error(`geçersiz satır filtresi: ${filter}`);
    const line = raw.subarray(base + 1, base + 1 + stride);
    const cur = out.subarray(y * stride, (y + 1) * stride);
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? cur[i - bpp] : 0;
      const b = prev[i];
      const x = line[i];
      cur[i] =
        filter === 0 ? x
        : filter === 1 ? (x + a) & 0xff
        : filter === 2 ? (x + b) & 0xff
        : filter === 3 ? (x + ((a + b) >> 1)) & 0xff
        : (x + paeth(a, b, i >= bpp ? prev[i - bpp] : 0)) & 0xff;
    }
    prev = cur;
  }
  return out;
}

function filterRow(type, cur, prev, bpp, stride, out, off) {
  if (type === 0) {
    cur.copy(out, off);
    return;
  }
  for (let i = 0; i < stride; i++) {
    const a = i >= bpp ? cur[i - bpp] : 0;
    const b = prev[i];
    const x = cur[i];
    out[off + i] =
      (type === 1 ? x - a
      : type === 2 ? x - b
      : type === 3 ? x - ((a + b) >> 1)
      : x - paeth(a, b, i >= bpp ? prev[i - bpp] : 0)) & 0xff;
  }
}

/**
 * Filtresiz piksel baytlarını yeniden filtrele.
 * mode: 'none' | 'sub' | 'up' | 'avg' | 'paeth' (sabit) | 'adaptive' (satır başına en iyi SAD)
 */
function buildFiltered(pixels, ihdr, { stride, bpp }, mode) {
  const raw = Buffer.alloc((stride + 1) * ihdr.height);
  const scratch = Buffer.alloc(stride);
  let prev = Buffer.alloc(stride);
  for (let y = 0; y < ihdr.height; y++) {
    const cur = pixels.subarray(y * stride, (y + 1) * stride);
    const base = y * (stride + 1);
    let type;
    if (mode === 'adaptive') {
      let bestSum = Infinity;
      type = 0;
      for (let t = 0; t < 5; t++) {
        filterRow(t, cur, prev, bpp, stride, scratch, 0);
        let sum = 0;
        for (let i = 0; i < stride; i++) {
          const v = scratch[i];
          sum += v < 128 ? v : 256 - v;
        }
        if (sum < bestSum) {
          bestSum = sum;
          type = t;
        }
      }
    } else {
      type = FILTER_NAMES.indexOf(mode);
    }
    raw[base] = type;
    filterRow(type, cur, prev, bpp, stride, raw, base + 1);
    prev = cur;
  }
  return raw;
}

function deflate9(raw, strategy = zlib.constants.Z_DEFAULT_STRATEGY) {
  return zlib.deflateSync(raw, { level: 9, memLevel: 9, windowBits: 15, strategy });
}

/**
 * En iyi IDAT akışını seç.
 * 1) her filtre planı için zlib varsayılan stratejisi,
 * 2) ardından en iyi iki akış için Z_FILTERED ve Z_RLE denemesi.
 * Seçim her zaman gerçek deflate boyutuna göre yapılır (tahmin yok).
 */
function bestIdat(raw, pixels, ihdr, geom, plans) {
  const streams = plans.map((plan) => ({
    plan,
    stream: plan === 'keep' ? raw : buildFiltered(pixels, ihdr, geom, plan),
  }));
  for (const s of streams) s.z = deflate9(s.stream);
  streams.sort((a, b) => a.z.length - b.z.length);

  let best = { plan: streams[0].plan, z: streams[0].z };
  for (const cand of streams.slice(0, 2)) {
    for (const [name, strategy] of [
      ['filtered', zlib.constants.Z_FILTERED],
      ['rle', zlib.constants.Z_RLE],
    ]) {
      const z = deflate9(cand.stream, strategy);
      if (z.length < best.z.length) best = { plan: `${cand.plan}+${name}`, z };
    }
  }
  return best;
}

/** IDAT dışındaki tüm chunk'ları bayt bayt koru, IDAT'ı yenisiyle değiştir. */
function assemble(parsed, idatData) {
  const parts = [SIGNATURE];
  parsed.chunks.forEach((c, i) => {
    if (c.type === 'IDAT') {
      if (i === parsed.firstIdat) parts.push(chunk('IDAT', idatData));
      return;
    }
    parts.push(chunk(c.type, c.data));
  });
  return Buffer.concat(parts);
}

/** Kit decoder → 8-bit/girişimsiz için; aksi halde dahili çözücü. */
function decodePixels(buf) {
  try {
    const img = decodePng(buf);
    return { via: 'png.mjs', width: img.width, height: img.height, channels: img.channels, pixels: img.pixels };
  } catch (err) {
    const parsed = parsePng(buf);
    if (parsed.ihdr.interlace !== 0) throw new Error(`girişimli PNG çözülemedi: ${err.message}`);
    const geom = geometry(parsed.ihdr);
    const raw = zlib.inflateSync(Buffer.concat(parsed.idat));
    return {
      via: 'dahili',
      width: parsed.ihdr.width,
      height: parsed.ihdr.height,
      channels: geom.channels,
      pixels: unfilter(raw, parsed.ihdr, geom),
    };
  }
}

/** width/height/channels + piksel baytları birebir aynı mı */
function samePixels(a, b) {
  if (a.width !== b.width || a.height !== b.height || a.channels !== b.channels) {
    return `boyut/kanal farkı (${a.width}×${a.height}×${a.channels} → ${b.width}×${b.height}×${b.channels})`;
  }
  if (!a.pixels.equals(b.pixels)) {
    let diff = 0;
    const n = Math.min(a.pixels.length, b.pixels.length);
    for (let i = 0; i < n; i++) if (a.pixels[i] !== b.pixels[i]) diff++;
    return `${diff} bayt piksel farkı`;
  }
  return null;
}

function candidatePlans(rawSize) {
  if (rawSize <= PLAN_MEDIUM_LIMIT) return ['keep', 'adaptive', 'sub', 'up', 'avg', 'paeth', 'none'];
  if (rawSize <= PLAN_FULL_LIMIT) return ['keep', 'adaptive', 'sub', 'up', 'paeth'];
  return ['keep', 'adaptive', 'sub'];
}

function pixelDigest(pixels) {
  return crypto.createHash('sha256').update(pixels).digest('hex').slice(0, 16);
}

/** Bozuk CRC'li chunk tiplerini döndür (--verify bütünlük kontrolü). */
function badChunkCrcs(buf) {
  const bad = [];
  let off = 8;
  while (off + 8 <= buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    if (off + 12 + len > buf.length) {
      bad.push(`${type}(taşma)`);
      break;
    }
    const expected = buf.readUInt32BE(off + 8 + len);
    const actual = crc32(buf.subarray(off + 4, off + 8 + len));
    if (expected !== actual) bad.push(type);
    off += 12 + len;
    if (type === 'IEND') break;
  }
  return bad;
}

/**
 * Tek dosyayı optimize et. Dönüş: { status, before, after, plan, ... }
 * status: optimized | would-optimize | skipped | mismatch | error
 */
function optimizeFile(file, rel, style, opts) {
  const out = { file: rel, style, status: 'skipped', before: 0, after: 0, plan: null, reason: null };
  let original = null;
  try {
    original = fs.readFileSync(file);
    out.before = original.length;
    out.after = original.length;

    if (opts.verify) {
      const parsed = parsePng(original);
      const img = decodePixels(original);
      out.status = 'verified';
      out.verify = {
        via: img.via,
        width: img.width,
        height: img.height,
        channels: img.channels,
        digest: pixelDigest(img.pixels),
        chunks: parsed.chunks.map((c) => c.type).join(','),
        badCrc: badChunkCrcs(original),
      };
      return out;
    }

    const parsed = parsePng(original);
    const { ihdr } = parsed;
    if (parsed.chunks.some((c) => c.type === 'acTL')) {
      out.reason = 'animasyonlu PNG (APNG)';
      return out;
    }
    const geom = geometry(ihdr);
    const raw = zlib.inflateSync(Buffer.concat(parsed.idat));
    const pixels = ihdr.interlace === 0 ? unfilter(raw, ihdr, geom) : null;
    const plans = ihdr.interlace === 0 ? candidatePlans(raw.length) : ['keep'];

    const best = bestIdat(raw, pixels, ihdr, geom, plans);
    out.plan = best.plan;

    const next = assemble(parsed, best.z);
    if (next.length >= out.before) {
      out.reason = 'daha küçük sonuç yok';
      return out;
    }

    // Yazmadan önce doğrula: piksel birebir aynı mı
    const a = decodePixels(original);
    const b = decodePixels(next);
    const diff = samePixels(a, b);
    if (diff) {
      out.status = 'mismatch';
      out.reason = diff;
      return out;
    }
    out.verifyVia = b.via;
    out.after = next.length;

    if (opts.dry) {
      out.status = 'would-optimize';
      return out;
    }

    fs.writeFileSync(file, next);
    // Diske yazılanı geri oku ve yeniden doğrula; fark varsa orijinali geri koy
    const c = decodePixels(fs.readFileSync(file));
    const afterDiff = samePixels(a, c);
    if (afterDiff) {
      fs.writeFileSync(file, original);
      out.status = 'mismatch';
      out.after = out.before;
      out.reason = `yazma sonrası fark: ${afterDiff}`;
      return out;
    }
    out.status = 'optimized';
    return out;
  } catch (err) {
    if (original && !opts.dry && !opts.verify) fs.writeFileSync(file, original);
    out.status = 'error';
    out.reason = err.message;
    if (original) out.after = original.length;
    return out;
  }
}

// ---------------------------------------------------------------- CLI

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
}

const FLAGS = ['all', 'dry', 'verify', 'json', 'help', 'h'];

function readOptions(argv) {
  const styles = (arg('styles') ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const jobsRaw = Number(arg('jobs', ''));
  return {
    styles,
    all: argv.includes('--all') || !styles.length,
    dry: argv.includes('--dry'),
    verify: argv.includes('--verify'),
    json: argv.includes('--json'),
    jobs: Number.isFinite(jobsRaw) && jobsRaw > 0 ? Math.floor(jobsRaw) : Math.min(8, os.cpus().length || 4),
    report: arg('report'),
  };
}

function showHelp() {
  console.log(`Kullanım:
  node kit/render/optimize-shots.mjs --all [--dry|--verify] [--json] [--jobs N] [--report md]
  node kit/render/optimize-shots.mjs --styles minimalism,y2k
  node kit/render/optimize-shots.mjs --scenes 28-dark-dashboard,31-dark-mobile

Seçenekler:
  --styles a,b   hedef stiller (slug veya <nn>-slug dizin adı)
  --scenes a,b   yalnız bu sahneler (dosya adı, .png'siz)
  --all          tüm stiller (bayrak yoksa varsayılan)
  --dry          ölç, dosya yazma
  --verify       yalnız doğrula (decode + piksel özeti), yazma
  --json         tek satır JSON çıktısı
  --jobs N       paralel işçi sayısı [varsayılan: min(8, cpus)]
  --report <md>  markdown özet raporu yaz
  -h, --help     bu yardım`);
}

function styleDirs(onlyStyles) {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .filter((name) => !onlyStyles.length || onlyStyles.includes(name) || onlyStyles.includes(name.replace(/^\d+-/, '')));
}

function collectFiles(dirs) {
  const sceneFilter = (arg('scenes') ?? '')
    .split(',')
    .map((s) => s.trim().replace(/\.png$/, ''))
    .filter(Boolean);
  const files = [];
  for (const dir of dirs) {
    const shotsDir = path.join(STYLES_DIR, dir, 'shots');
    if (!fs.existsSync(shotsDir)) continue;
    for (const name of fs.readdirSync(shotsDir).sort()) {
      if (!SHOT_RE.test(name)) continue;
      if (sceneFilter.length && !sceneFilter.includes(name.replace(/\.png$/, ''))) continue;
      const abs = path.join(shotsDir, name);
      if (!fs.statSync(abs).isFile()) continue;
      files.push({ abs, rel: `styles/${dir}/shots/${name}`, style: dir });
    }
  }
  return files;
}

function fmtMB(bytes) {
  return (bytes / 1048576).toFixed(2);
}

function summarize(results, meta) {
  const sum = (arr, k) => arr.reduce((a, r) => a + r[k], 0);
  const done = results.filter((r) => r.status === 'optimized' || r.status === 'would-optimize');
  const before = sum(results, 'before');
  const after = sum(results, 'after');
  const perStyle = new Map();
  for (const r of results) {
    const e = perStyle.get(r.style) ?? { style: r.style, files: 0, optimized: 0, before: 0, after: 0 };
    e.files++;
    if (r.status === 'optimized' || r.status === 'would-optimize') e.optimized++;
    e.before += r.before;
    e.after += r.after;
    perStyle.set(r.style, e);
  }
  const rows = results.map((r) => ({
    file: r.file,
    status: r.status,
    plan: r.plan,
    before: r.before,
    after: r.after,
    saved: r.before - r.after,
    pct: r.before ? +(((r.before - r.after) / r.before) * 100).toFixed(2) : 0,
    reason: r.reason ?? null,
  }));
  const changed = rows.filter((r) => r.status === 'optimized' || r.status === 'would-optimize');
  const bySaving = [...changed].sort((a, b) => b.saved - a.saved);
  const byPctBest = [...changed].sort((a, b) => b.pct - a.pct);
  const byPctWorst = [...changed].sort((a, b) => a.pct - b.pct);
  const planCount = {};
  for (const r of changed) planCount[r.plan] = (planCount[r.plan] ?? 0) + 1;
  const count = (s) => results.filter((r) => r.status === s).length;

  return {
    ok: count('error') === 0 && count('mismatch') === 0,
    mode: meta.verify ? 'verify' : meta.dry ? 'dry' : 'apply',
    root: ROOT,
    styles: meta.styles,
    files: {
      total: results.length,
      optimized: count('optimized'),
      wouldOptimize: count('would-optimize'),
      verified: count('verified'),
      skipped: count('skipped'),
      mismatch: count('mismatch'),
      errors: count('error'),
    },
    bytes: {
      before,
      after,
      saved: before - after,
      pct: before ? +(((before - after) / before) * 100).toFixed(2) : 0,
      beforeMB: +fmtMB(before),
      afterMB: +fmtMB(after),
      savedMB: +fmtMB(before - after),
    },
    plans: planCount,
    verify: {
      checked: count('optimized') + count('would-optimize') + count('verified') + count('mismatch'),
      mismatched: count('mismatch'),
      failed: count('error'),
    },
    top: {
      bestBytes: bySaving.slice(0, 5),
      bestPct: byPctBest.slice(0, 5),
      worstPct: byPctWorst.slice(0, 5),
    },
    perStyle: [...perStyle.values()]
      .map((e) => ({
        ...e,
        saved: e.before - e.after,
        pct: e.before ? +(((e.before - e.after) / e.before) * 100).toFixed(2) : 0,
      }))
      .sort((a, b) => parseInt(a.style, 10) - parseInt(b.style, 10)),
    rows,
  };
}

function printHuman(summary, opts, startMs) {
  const secs = ((Date.now() - startMs) / 1000).toFixed(1);
  const f = summary.files;
  console.log('');
  console.log(`PNG kayıpsız optimizasyon (${summary.mode}) · ${secs}s · ${f.total} dosya · ${opts.jobs} işçi`);
  console.log(
    `boyut ${summary.bytes.beforeMB} MB → ${summary.bytes.afterMB} MB  ` +
      `(-${summary.bytes.savedMB} MB, %${summary.bytes.pct})`,
  );
  console.log(
    `optimize ${f.optimized + f.wouldOptimize} · atlanan ${f.skipped} · ` +
      `doğrulama ${summary.verify.checked} (fark ${summary.verify.mismatched}, hata ${summary.verify.failed})`,
  );
  if (f.verified) console.log(`doğrulanan dosya: ${f.verified}`);
  const plans = Object.entries(summary.plans).sort((a, b) => b[1] - a[1]);
  if (plans.length) console.log(`filtre planları: ${plans.map(([k, v]) => `${k}=${v}`).join(' · ')}`);

  const kb = (n) => (n < 10240 ? (n / 1024).toFixed(1) : String(Math.round(n / 1024)));
  const line = (r) =>
    `${kb(r.saved).padStart(7)} KB %${String(r.pct).padStart(6)}  ${kb(r.before)} → ${kb(r.after)} KB  ${r.file} [${r.plan}]`;
  if (summary.top.bestBytes.length) {
    console.log('\nen iyi 5 (kazanç):');
    for (const r of summary.top.bestBytes) console.log('  ' + line(r));
  }
  if (summary.top.worstPct.length) {
    console.log('\nen kötü 5 (yüzde):');
    for (const r of summary.top.worstPct) console.log('  ' + line(r));
  }
  const problems = summary.rows.filter((r) => r.status === 'mismatch' || r.status === 'error');
  if (problems.length) {
    console.log('\nsorunlu dosyalar:');
    for (const r of problems) console.log(`  ${r.status}: ${r.file} · ${r.reason ?? ''}`);
  }
}

function markdownReport(summary, opts) {
  const f = summary.files;
  const lines = [
    '# PNG kayıpsız optimizasyon raporu',
    '',
    `- Mod: **${summary.mode}** · dosya: **${f.total}** · işçi: ${opts.jobs}`,
    `- Boyut: **${summary.bytes.beforeMB} MB → ${summary.bytes.afterMB} MB** ` +
      `(-${summary.bytes.savedMB} MB, **%${summary.bytes.pct}**)`,
    `- Optimize: **${f.optimized + f.wouldOptimize}** · atlanan: ${f.skipped} · hata: ${f.errors}`,
    `- Piksel doğrulama: **${summary.verify.checked}** dosya · fark: **${summary.verify.mismatched}** · hata: ${summary.verify.failed}`,
    `- Filtre planları: ${Object.entries(summary.plans).map(([k, v]) => `${k}=${v}`).join(', ') || '—'}`,
    '',
    '## En iyi 5 (bayt kazancı)',
    '',
    '| dosya | KB kazanç | % | plan |',
    '| --- | ---: | ---: | --- |',
  ];
  for (const r of summary.top.bestBytes) {
    lines.push(`| ${r.file} | ${(r.saved / 1024).toFixed(0)} | ${r.pct} | ${r.plan} |`);
  }
  lines.push('', '## En kötü 5 (yüzde)', '', '| dosya | KB kazanç | % | plan |', '| --- | ---: | ---: | --- |');
  for (const r of summary.top.worstPct) {
    lines.push(`| ${r.file} | ${(r.saved / 1024).toFixed(0)} | ${r.pct} | ${r.plan} |`);
  }
  lines.push('', '## Stil başına', '', '| stil | dosya | optimize | önce MB | sonra MB | kazanç MB | % |', '| --- | ---: | ---: | ---: | ---: | ---: | ---: |');
  for (const e of summary.perStyle) {
    lines.push(
      `| ${e.style} | ${e.files} | ${e.optimized} | ${(e.before / 1048576).toFixed(2)} | ` +
        `${(e.after / 1048576).toFixed(2)} | ${(e.saved / 1048576).toFixed(2)} | ${e.pct} |`,
    );
  }
  const problems = summary.rows.filter((r) => r.status === 'mismatch' || r.status === 'error');
  if (problems.length) {
    lines.push('', '## Sorunlu dosyalar', '');
    for (const r of problems) lines.push(`- \`${r.status}\` ${r.file} · ${r.reason ?? ''}`);
  }
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------- workers

function runWorker() {
  parentPort.on('message', (msg) => {
    if (msg?.type !== 'item') return;
    const r = optimizeFile(msg.item.abs, msg.item.rel, msg.item.style, msg.opts);
    parentPort.postMessage({ type: 'result', result: r });
  });
}

/** İşçi havuzu: büyük dosyalar önce dağıtılır, her işçi sıradaki işi kapar. */
async function runPool(files, opts, onResult) {
  const queue = [...files].sort((a, b) => b.size - a.size);
  const results = [];
  const size = Math.max(1, Math.min(opts.jobs, queue.length));
  const workers = Array.from({ length: size }, () => new Worker(new URL(import.meta.url), { workerData: null }));

  await Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
          const next = () => {
            const item = queue.shift();
            if (!item) {
              worker.removeAllListeners('message');
              worker.terminate().then(resolve, resolve);
              return;
            }
            worker.postMessage({ type: 'item', item: { abs: item.abs, rel: item.rel, style: item.style }, opts });
          };
          worker.on('message', (msg) => {
            if (msg?.type !== 'result') return;
            results.push(msg.result);
            onResult(msg.result);
            next();
          });
          worker.once('error', reject);
          next();
        }),
    ),
  );
  return results;
}

// ---------------------------------------------------------------- main

async function main() {
  if (!isMainThread) {
    runWorker();
    return;
  }

  const opts = readOptions(process.argv);
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showHelp();
    return;
  }

  const dirs = styleDirs(opts.all ? [] : opts.styles);
  if (!dirs.length) throw new Error('eşleşen stil yok');
  const files = collectFiles(dirs);
  if (!files.length) throw new Error('optimize edilecek PNG bulunamadı');

  const startMs = Date.now();
  const total = files.length;
  let done = 0;
  const progress = (r) => {
    done++;
    if (opts.json) return;
    process.stderr.write(`\r${String(done).padStart(4)}/${total}  ${r.status.padEnd(14)} ${r.file.slice(0, 52).padEnd(52)}`);
  };

  const withSize = files.map((f) => ({ ...f, size: fs.statSync(f.abs).size }));
  const results = await runPool(withSize, opts, progress);
  results.sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : 0));

  const summary = summarize(results, { styles: dirs, dry: opts.dry, verify: opts.verify });
  if (!opts.json) process.stderr.write('\n');

  if (opts.report) {
    fs.mkdirSync(path.dirname(path.resolve(opts.report)), { recursive: true });
    fs.writeFileSync(path.resolve(opts.report), markdownReport(summary, opts));
  }

  if (opts.json) {
    console.log(JSON.stringify(summary));
  } else {
    printHuman(summary, opts, startMs);
    if (opts.report) console.log(`\nrapor: ${path.resolve(opts.report)}`);
  }

  if (!summary.ok) process.exitCode = 1;
}

main().catch((err) => {
  console.error(`hata: ${err.message}`);
  process.exitCode = 1;
});
