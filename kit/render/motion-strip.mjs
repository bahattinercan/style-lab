#!/usr/bin/env node
/**
 * kit/render/motion-strip.mjs — hareket storyboard'u (M4).
 *
 * Neden: katalogda hareketi gösteren tek şey statik bir levhaydı; süre/desen okunmuyordu.
 * Bu script stilin **kendi koreografisini** (enter deseni + süre/eğri/stagger) 5 karede
 * (0/25/50/75/100%) + reduced karesinde yakalar ve tek şerit PNG'ye dizer.
 *
 * Önemli: şerit `live.html`'e bağlı DEĞİL. Amaç desenin kendisini göstermek; bu yüzden
 * sözlükteki CSS'i (`kit/render/motion/patterns.css`) kullanan minimal bir sahne üretilir:
 *   data-motion=<desen> + `.mi` öğeleri + stilin `--mi-*` değişkenleri.
 *
 * Determinizm: her karede sayfa yeniden yüklenir, `.is-in` eklenir, tüm geçişler
 * `t = oran × süre` anına konup duraklatılır; gerçek zaman beklenmez.
 *
 * Çıktı: kit/.shots-cache/<dir>/27-motion.png (üretilen; repoda tutulmaz)
 *
 * Kullanım:
 *   node kit/render/motion-strip.mjs --styles y2k,terminal-ui
 *   node kit/render/motion-strip.mjs --all          # 145 stil (~4 dk)
 *   node kit/render/motion-strip.mjs --sample 6 --check
 *   node kit/render/motion-strip.mjs --sample 6 --check --ensure
 *
 * Bayraklar:
 *   --check      Şeritlerin varlığını ve geçerli boyutunu doğrular; eksik varsa üretir.
 *   --ensure     Kontrol sırasında eksik şerit varsa tarayıcıda üretip doğrular;
 *                tarayıcı açılamazsa ↷ ile görünür biçimde atlar (--check ile varsayılan).
 *   --no-ensure  Üretim yapmadan yalnız mevcut dosyaları denetler.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './cdp-browser.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CACHE_DIR = path.join(ROOT, 'kit', '.shots-cache');
const TMP = path.join(ROOT, 'kit', 'render', '.tmp-strip');

const ARGV = process.argv.slice(2);
const ALL = ARGV.includes('--all');
const CHECK = ARGV.includes('--check');
const ENSURE = ARGV.includes('--ensure') || (CHECK && !ARGV.includes('--no-ensure'));
const JSON_OUT = ARGV.includes('--json');
const MIN_STRIP_BYTES = 4096;
const SAMPLE = (() => {
  const i = ARGV.indexOf('--sample');
  return i >= 0 ? Number(ARGV[i + 1]) : 6;
})();
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  return i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : null;
})();

const motionSrc = fs.readFileSync(path.join(ROOT, 'kit', 'live-motion.js'), 'utf8');
const MOTION = JSON.parse(motionSrc.match(/window\.STYLE_MOTION = ([\s\S]*);\s*$/)[1]);

const allDirs = () =>
  fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

function targets() {
  const dirs = allDirs();
  if (ONLY) return dirs.filter((d) => ONLY.includes(d.replace(/^\d+-/, '')));
  if (ALL) return dirs;
  const step = Math.max(1, Math.floor(dirs.length / SAMPLE));
  const out = [];
  for (let i = 0; i < dirs.length && out.length < SAMPLE; i += step) out.push(dirs[i]);
  return out;
}

/** Şerit sahnesi: desenin kendisini gösteren 560×300 kutu. */
function stageHtml({ slug, pattern, enterMs, easeCss, offsetY, staggerMs, hoverPattern }) {
  const rel = (p) => path.relative(TMP, p).replace(/\\/g, '/');
  return `<!doctype html><html lang="tr" data-style="${slug}" data-motion="${pattern}" data-motion-hover="${hoverPattern}">
<meta charset="utf-8">
<link rel="stylesheet" href="${rel(path.join(ROOT, 'kit', 'tokens.css'))}">
<link rel="stylesheet" href="${rel(path.join(ROOT, 'kit', 'render', 'motion', 'patterns.css'))}">
<style>
  :root { --mi-dur: ${enterMs}ms; --mi-ease: ${easeCss}; --mi-offset: ${offsetY}px; --mi-stagger: ${staggerMs}ms;
          --ms-dur: ${enterMs}ms; --ms-ease: ${easeCss}; --mh-dur: ${enterMs}ms; --mh-ease: ${easeCss}; }
  html,body { margin:0; height:100%; background: var(--bg); color: var(--ink); }
  body { display:flex; align-items:center; justify-content:center; font-family: var(--font-body); }
  .stage { width: 520px; padding: 26px; border:1px solid var(--line); border-radius: var(--radius-lg); background: var(--surface); box-shadow: var(--shadow); overflow:hidden; }
  .mi-line { display:block; overflow:hidden; }
  h1 { margin:8px 0 10px; font-family: var(--font-display); font-size:34px; line-height:1.05; letter-spacing: var(--tracking); }
  h1 .mi-line > span { display:block; }
  .eyebrow { font-family: var(--font-mono); font-size:9px; letter-spacing:.2em; text-transform:uppercase; color: var(--ink-soft); }
  p { margin:0 0 14px; color: var(--ink-soft); font-size:13px; max-width:40ch; }
  .row { display:flex; gap:8px; }
  .btn { padding:8px 14px; border-radius: var(--radius); background: var(--accent); color: var(--accent-ink); font-size:12px; }
  .btn.ghost { background: transparent; border:1px solid var(--line); color: var(--ink); }
  .card { margin-top:14px; height:64px; border:1px solid var(--line); border-radius: var(--radius); background: var(--surface-2); }
  .card .ph { height:100%; background: linear-gradient(180deg, color-mix(in srgb, var(--ink) 26%, var(--surface-2)), var(--surface-2)); }
  .mh { cursor: default; }
</style>
<div class="stage">
  <span class="eyebrow mi" style="--mi-i:0">2.4 · ${pattern}</span>
  <h1>
    <span class="mi-line"><span class="mi" style="--mi-i:1">Sakin bir</span></span>
    <span class="mi-line"><span class="mi" style="--mi-i:2">çalışma alanı</span></span>
  </h1>
  <p class="mi" style="--mi-i:3">Koreografi stilin kendi deseniyle: süre, eğri ve kademe token'lardan gelir.</p>
  <div class="row">
    <span class="btn mi" style="--mi-i:4">Başla</span>
    <span class="btn ghost mi" style="--mi-i:5">Demo</span>
  </div>
  <div class="card mh ms"><div class="ph"></div></div>
</div>`;
}

/** Sayfayı yükle, `.is-in` ekle, tüm geçişleri `ratio × süre` anına dondur. */
const FREEZE_EXPR = (ratio, ms) => `(() => {
  const root = document.documentElement;
  root.classList.add('is-in');
  document.querySelectorAll('.stage').forEach((el) => el.classList.add('is-in'));
  for (const a of document.getAnimations()) {
    try { a.pause(); a.currentTime = ${ms} * ${ratio}; } catch {}
  }
  return document.getAnimations().length;
})()`;

const REDUCE_EXPR = `(() => {
  document.documentElement.classList.add('is-in');
  for (const a of document.getAnimations()) { try { a.currentTime = 10000; a.pause(); } catch {} }
  return true;
})()`;

function stripHtml(slug, frames, m) {
  const labels = ['%0', '%25', '%50', '%75', '%100'];
  const tiles = frames
    .map(
      (f, i) =>
        `<figure><img src="${path.basename(f)}"><figcaption><b>${labels[i]}</b><span>${Math.round((m.enter.durationMs * i) / 4)}ms</span></figcaption></figure>`,
    )
    .join('\n');
  return `<!doctype html><meta charset="utf-8"><style>
html,body{margin:0;background:#0e0f10;color:#e8e6e1;font:11px/1.4 ui-monospace,Consolas,monospace}
.head{display:flex;gap:12px;align-items:baseline;padding:8px 10px 4px;color:#9aa0a6}
.head b{color:#e8e6e1;font-weight:400}
.row{display:flex;gap:8px;padding:0 8px 8px}
figure{margin:0;flex:1}
figure.red img{filter:saturate(.55)}
img{display:block;width:100%;border:1px solid #2a2c2e}
figcaption{display:flex;justify-content:space-between;padding:4px 2px;color:#9aa0a6}
figcaption b{color:#e8e6e1;font-weight:400}
</style>
<div class="head"><b>${slug}</b><span>giriş · ${m.enter.pattern}</span><span>${m.enter.durationMs}ms</span><span>${m.enter.easeCss}</span><span>scroll · ${m.scroll.pattern}</span><span>hover · ${m.hover.pattern}</span></div>
<div class="row">${tiles}</div>`;
}

async function main() {
  const dirs = targets();
  let cdp = null;
  let skippedNoBrowser = null;
  const out = [];
  try {
    for (const dir of dirs) {
      const slug = dir.replace(/^\d+-/, '');
      const m = MOTION[slug];
      if (!m) {
        out.push({ slug, ok: false, error: 'live-motion kaydı yok' });
        continue;
      }
      const target = path.join(CACHE_DIR, dir, '27-motion.png');
      if (CHECK) {
        const existingBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
        if (existingBytes >= MIN_STRIP_BYTES) {
          out.push({ slug, ok: true, path: path.relative(ROOT, target), bytes: existingBytes });
          continue;
        }
        if (!ENSURE) {
          out.push({
            slug,
            ok: false,
            path: path.relative(ROOT, target),
            error: existingBytes > 0 ? `şerit geçersiz boyutta (${existingBytes} B)` : 'şerit yok',
          });
          continue;
        }
      }
      if (!cdp) {
        try {
          fs.mkdirSync(TMP, { recursive: true });
          cdp = await launch({ tabs: 2 });
        } catch (err) {
          if (CHECK && ENSURE) {
            skippedNoBrowser = err?.message || 'tarayıcı bulunamadı';
            break;
          }
          throw err;
        }
      }
      const stageFile = path.join(TMP, `${slug}-stage.html`);
      fs.writeFileSync(
        stageFile,
        stageHtml({
          slug,
          pattern: m.enter.pattern,
          enterMs: m.enter.durationMs,
          easeCss: m.enter.easeCss,
          offsetY: m.enter.offsetY,
          staggerMs: m.enter.staggerMs,
          hoverPattern: m.hover.pattern,
        }),
      );

      const frames = [];
      for (let i = 0; i < 5; i += 1) {
        const ratio = i / 4;
        const png = await cdp.captureWithEval(stageFile, {
          width: 620,
          height: 360,
          expression: FREEZE_EXPR(ratio, m.enter.durationMs),
        });
        const f = path.join(TMP, `${slug}-${i}.png`);
        fs.writeFileSync(f, png);
        frames.push(f);
      }
      // reduced: aynı sahne, animasyonlar son kareye alınmış (poster)
      const red = await cdp.captureWithEval(stageFile, {
        width: 620,
        height: 360,
        expression: REDUCE_EXPR,
        reducedMotion: 'reduce',
      });
      const redFile = path.join(TMP, `${slug}-reduce.png`);
      fs.writeFileSync(redFile, red);
      frames.push(redFile);

      const stripFile = path.join(TMP, `${slug}-strip.html`);
      fs.writeFileSync(stripFile, stripHtml(slug, frames, m));
      const strip = await cdp.capture(stripFile, { width: 1560, height: 300, freeze: false });
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, strip);
      const writtenBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
      const ok = writtenBytes >= MIN_STRIP_BYTES;
      out.push({
        slug,
        ok,
        generated: CHECK,
        path: path.relative(ROOT, target),
        bytes: writtenBytes,
        ...(ok ? {} : { error: `üretilen şerit geçersiz (${writtenBytes} B)` }),
      });
      for (const f of [...frames, stripFile, stageFile]) fs.rmSync(f, { force: true });
    }
  } finally {
    if (cdp) await cdp.close();
    fs.rmSync(TMP, { recursive: true, force: true });
  }

  if (skippedNoBrowser) {
    if (JSON_OUT) {
      console.log(
        JSON.stringify(
          { count: dirs.length, ok: out.filter((o) => o.ok).length, skipped: true, reason: skippedNoBrowser, out },
          null,
          2,
        ),
      );
    } else {
      console.log(`↷ hareket storyboard (cache yok, atlandı: ${skippedNoBrowser})`);
    }
    return 0;
  }

  if (JSON_OUT) console.log(JSON.stringify({ count: out.length, ok: out.filter((o) => o.ok).length, out }, null, 2));
  else {
    for (const o of out) {
      if (!o.ok) console.log(`× ${o.slug}: ${o.error ?? 'şerit yok'}`);
      else if (o.generated) console.log(`↻ ${o.slug}: eksik şerit üretildi (${o.bytes} B)`);
    }
    const generated = out.filter((o) => o.generated && o.ok).length;
    const genNote = generated > 0 ? ` (${generated} eksik üretildi)` : '';
    console.log(
      `motion-strip · ${out.length} stil · ${out.filter((o) => o.ok).length} şerit${genNote} · çıktı: kit/.shots-cache/<dir>/27-motion.png`,
    );
  }
  return out.some((o) => !o.ok) ? 1 : 0;
}

process.exit(await main());
