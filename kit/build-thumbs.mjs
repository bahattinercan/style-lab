#!/usr/bin/env node
/**
 * kit/build-thumbs.mjs — yayın için WebP görsel türevleri (kart + tam boy).
 *
 * Neden: her stil 1280×2400 PNG (~830 KB). Galeri kartı bu boyutu yüklerse ilk ekran
 * ~10 MB olur. Bu script aynı kareyi iki WebP türevine indirir:
 *   kart  : 640×1200  (galeri ızgarası, çekmece, karşılaştırma)
 *   tam   : 1280×2400 (lightbox — orijinal çözünürlük)
 * Orijinal PNG silinmez; sitede "PNG indir" bağlantısı ona gider.
 *
 * Yöntem: bağımlılık yok. PNG bir HTML sayfasına hedef genişlikte konur, headless
 * Edge/Chrome (CDP) ekran görüntüsünü `format: webp` olarak yakalar. Yakalama, tarayıcı
 * ölçeklemesini kullandığı için ayrı bir resim kütüphanesi gerekmez.
 *
 * Kullanım:
 *   node kit/build-thumbs.mjs                 # eksik/bayat türevleri üret
 *   node kit/build-thumbs.mjs --force         # hepsini yeniden üret
 *   node kit/build-thumbs.mjs --check         # türevler kaynakla aynı mı (yazmaz)
 *   node kit/build-thumbs.mjs --styles game-hud,bento-grid
 *   node kit/build-thumbs.mjs --json          # tek satır özet
 *
 * Çıktı: kit/site/thumbs/<nn-slug>-<kaynak>@<genişlik>.webp + manifest.json
 * Manifest kaynağın sha256'sını tutar; --check bayat türevi bu yüzden yakalar
 * (mtime klonda korunmaz, hash korunur).
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { launch, findBrowser } from './render/cdp-browser.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const OUT_DIR = path.join(HERE, 'site', 'thumbs');
const TMP_DIR = path.join(HERE, '.tmp-thumbs');
const MANIFEST = path.join(OUT_DIR, 'manifest.json');
const SHOT = '01-page.png';
const SRC_W = 1280;
const SRC_H = 2400;

/** Türev tanımları — galeri `window.STYLE_LAB_SHOTS` ile aynı adları kullanır. */
const VARIANTS = [
  { key: '640', width: 640, quality: 78 },
  { key: '1280', width: 1280, quality: 82 },
];

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const opt = (name, fallback = null) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  if (hit) return hit.slice(name.length + 3);
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};

const FORCE = flag('force');
const CHECK = flag('check');
const JSON_OUT = flag('json');
const ONLY = (opt('styles') ?? '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');
const outName = (dir, variant) => `${dir}-${SHOT.replace(/\.png$/i, '')}@${variant.key}.webp`;

function styleDirs() {
  const all = fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort();
  if (!ONLY.length) return all;
  const picked = all.filter((d) => ONLY.includes(d) || ONLY.includes(d.replace(/^\d+-/, '')));
  const missing = ONLY.filter((s) => !picked.some((d) => d === s || d.replace(/^\d+-/, '') === s));
  if (missing.length) fail(`bilinmeyen stil: ${missing.join(', ')}`);
  return picked;
}

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  } catch {
    return { schema: 1, variants: VARIANTS.map((v) => v.key), files: {} };
  }
}

/** WebP başlığından genişlik/yükseklik (VP8 / VP8L / VP8X). */
function webpSize(buf) {
  if (!buf || buf.length < 30 || buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') {
    return null;
  }
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8 ') {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L') {
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === 'VP8X') {
    const w = buf.readUIntLE(24, 3) + 1;
    const h = buf.readUIntLE(27, 3) + 1;
    return { width: w, height: h };
  }
  return null;
}

/** Tek türev için geçici HTML: sayfa tam olarak hedef boyutta, kenar boşluğu yok. */
function writeTileHtml(dir, variant) {
  const height = Math.round((variant.width * SRC_H) / SRC_W);
  const src = path.resolve(STYLES_DIR, dir, 'shots', SHOT).replace(/\\/g, '/');
  const html =
    `<!doctype html><html><head><meta charset="utf-8"><style>` +
    `html,body{margin:0;padding:0;background:#fff;overflow:hidden}` +
    `img{display:block;width:${variant.width}px;height:${height}px;object-fit:fill}` +
    `</style></head><body><img src="file:///${src}" alt=""></body></html>`;
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const tmp = path.join(TMP_DIR, `${dir}@${variant.key}.html`);
  fs.writeFileSync(tmp, html);
  return { file: tmp, width: variant.width, height };
}

async function main() {
  const dirs = styleDirs();
  const prev = readManifest();
  const next = { schema: 1, variants: VARIANTS.map((v) => v.key), files: {} };
  const jobs = [];
  const problems = [];

  for (const dir of dirs) {
    const srcPath = path.join(STYLES_DIR, dir, 'shots', SHOT);
    if (!fs.existsSync(srcPath)) {
      problems.push(`${dir}: ${SHOT} yok — önce render et`);
      continue;
    }
    const srcBytes = fs.statSync(srcPath).size;
    const srcHash = sha256(fs.readFileSync(srcPath));
    for (const variant of VARIANTS) {
      const name = outName(dir, variant);
      const abs = path.join(OUT_DIR, name);
      const rec = { source: `${dir}/shots/${SHOT}`, sourceSha: srcHash, sourceBytes: srcBytes, variant: variant.key };
      const exists = fs.existsSync(abs) && fs.statSync(abs).size > 1024;
      const fresh = exists && prev.files?.[name]?.sourceSha === srcHash && prev.files?.[name]?.variant === variant.key;
      if (fresh && !FORCE) {
        next.files[name] = { ...rec, bytes: fs.statSync(abs).size };
        continue;
      }
      if (CHECK) {
        if (!exists) problems.push(`${name}: yok`);
        else {
          // Tanı bilgisi: hangi taraf kaymış (kaynak PNG mi, manifest mi) kısaca görünsün.
          const istenen = prev.files?.[name]?.sourceSha?.slice(0, 8) ?? 'kayıt yok';
          problems.push(`${name}: bayat (kaynak ${srcHash.slice(0, 8)} ≠ manifest ${istenen})`);
        }
        continue;
      }
      jobs.push({ dir, variant, name, abs, rec });
    }
  }

  if (CHECK) {
    const expected = new Set(dirs.flatMap((d) => VARIANTS.map((v) => outName(d, v))));
    for (const extra of Object.keys(prev.files ?? {})) {
      if (!expected.has(extra)) problems.push(`${extra}: artık üretilmiyor (sil)`);
    }
    if (problems.length) {
      console.error('✗ WebP türevleri güncel değil:');
      for (const p of problems.slice(0, 20)) console.error(`  - ${p}`);
      if (problems.length > 20) console.error(`  … ${problems.length - 20} tane daha`);
      console.error('  düzelt: node kit/build-thumbs.mjs');
      process.exit(1);
    }
    if (!JSON_OUT) console.log(`✓ WebP türevleri güncel (${dirs.length} stil × ${VARIANTS.length} boy)`);
    return;
  }

  if (!jobs.length) {
    if (!JSON_OUT) console.log(`✓ yapılacak iş yok (${dirs.length} stil × ${VARIANTS.length} boy güncel)`);
    for (const [name, rec] of Object.entries(prev.files ?? {})) next.files[name] ??= rec;
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(MANIFEST, JSON.stringify(next, null, 2) + '\n');
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browserPath = findBrowser();
  const tabs = Math.max(1, Math.min(Number(opt('jobs', Math.min(4, os.cpus().length))), 8));
  const started = Date.now();
  const cdp = await launch({ browserPath, tabs, keepProfile: true });
  let done = 0;
  let bytes = 0;
  try {
    const queue = [...jobs];
    const worker = async () => {
      for (;;) {
        const job = queue.shift();
        if (!job) return;
        const tile = writeTileHtml(job.dir, job.variant);
        const buf = await cdp.capture(tile.file, {
          width: tile.width,
          height: tile.height,
          format: 'webp',
          quality: job.variant.quality,
          freeze: false,
        });
        const size = webpSize(buf);
        if (!size || size.width !== tile.width) {
          throw new Error(`${job.name}: beklenmeyen WebP (${size ? `${size.width}×${size.height}` : 'başlık yok'})`);
        }
        fs.writeFileSync(job.abs, buf);
        next.files[job.name] = { ...job.rec, bytes: buf.length };
        done += 1;
        bytes += buf.length;
        if (!JSON_OUT && done % 25 === 0) {
          console.error(`  ${done}/${jobs.length} türev · ${(bytes / 1024 / 1024).toFixed(1)} MB`);
        }
        fs.rmSync(tile.file, { force: true });
      }
    };
    await Promise.all(Array.from({ length: tabs }, worker));
  } finally {
    await cdp.close();
    fs.rmSync(TMP_DIR, { recursive: true, force: true });
  }

  // üretilmeyen (taze bulunan) kayıtları koru
  for (const [name, rec] of Object.entries(prev.files ?? {})) {
    if (Object.keys(next.files).length && !next.files[name] && fs.existsSync(path.join(OUT_DIR, name))) next.files[name] = rec;
  }
  fs.writeFileSync(MANIFEST, JSON.stringify(next, null, 2) + '\n');

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  const summary = {
    styles: dirs.length,
    variants: VARIANTS.length,
    written: done,
    bytes,
    seconds: Number(seconds),
  };
  if (JSON_OUT) console.log(JSON.stringify(summary));
  else console.log(`✓ ${done} WebP türev · ${(bytes / 1024 / 1024).toFixed(1)} MB · ${seconds} s · ${tabs} sekme`);

  if (problems.length) {
    console.error('⚠ atlananlar:');
    for (const p of problems) console.error(`  - ${p}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`✗ ${err.message}`);
  process.exit(1);
});
