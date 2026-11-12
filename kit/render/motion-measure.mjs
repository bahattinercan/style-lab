#!/usr/bin/env node
/**
 * kit/render/motion-measure.mjs — hareketi TARAYICIDA ölçer (M3).
 *
 * Neden: `motion-check.mjs` yalnız `tokens.json` prose'unu doğrular; "canlı önizleme stilin
 * imzasını uyguluyor mu" sorusu ölçülmüyordu. v5 öncesi `live.html` sabit süreler kullanıyordu
 * (sayaç 900ms, hover .24s). Bu script CDP ile `kit/live.html?style=<slug>` açar ve ölçer:
 *
 *   1) PARİTE     : hesaplanmış `transition-duration/delay` ↔ `window.STYLE_MOTION` (tokens) ±%2
 *   2) REDUCED    : `prefers-reduced-motion: reduce` altında çalışan animasyon sayısı = 0
 *   3) FRAME      : ilk 60 karede p95 frame süresi ≤ 32ms (jank bütçesi)
 *
 * Kullanım:
 *   node kit/render/motion-measure.mjs                 # 8 stil örneklem (kapı)
 *   node kit/render/motion-measure.mjs --sample 16
 *   node kit/render/motion-measure.mjs --all           # 145 stil (~2 dk)
 *   node kit/render/motion-measure.mjs --styles y2k,terminal-ui --json
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { launch } from './cdp-browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const LIVE = path.join(ROOT, 'kit', 'live.html');
const ARGV = process.argv.slice(2);
const JSON_OUT = ARGV.includes('--json');
const ALL = ARGV.includes('--all');
const SAMPLE = (() => {
  const i = ARGV.indexOf('--sample');
  return i >= 0 ? Number(ARGV[i + 1]) : 8;
})();
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  return i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : null;
})();

const TOLERANCE_MS = 20; // ±20ms veya ±%2 (hangisi büyükse)
const FRAME_P95_MS = 32;

const motionSrc = fs.readFileSync(path.join(ROOT, 'kit', 'live-motion.js'), 'utf8');
const MOTION = JSON.parse(motionSrc.match(/window\.STYLE_MOTION = ([\s\S]*);\s*$/)[1]);

function styleSlugs() {
  return fs
    .readdirSync(path.join(ROOT, 'styles'), { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'styles', d.name, 'tokens.json')))
    .map((d) => d.name.replace(/^\d+-/, ''))
    .sort();
}

/** Deterministik örneklem: her aileden bir stil (max N). */
function sampleSlugs(n) {
  const all = styleSlugs();
  if (ONLY) return ONLY;
  if (ALL) return all;
  if (n >= all.length) return all;
  const step = Math.max(1, Math.floor(all.length / n));
  const out = [];
  for (let i = 0; i < all.length && out.length < n; i += step) out.push(all[i]);
  return out;
}

const PARITY_EXPR = (slug) => `(() => {
  const m = (window.STYLE_MOTION || {})[${JSON.stringify(slug)}];
  const cs = (sel) => { const el = document.querySelector(sel); return el ? getComputedStyle(el) : null; };
  const ms = (v) => Math.max(...String(v).split(',').map((x) => {
    const s = x.trim(); return s.endsWith('ms') ? parseFloat(s) : parseFloat(s) * 1000;
  }).filter((x) => !Number.isNaN(x)));
  const card = cs('.card');
  const mask = cs('.mask > span');
  const ph = cs('.card .ph');
  return {
    dataMotion: document.documentElement.dataset.motion,
    expect: m,
    cardDur: card ? ms(card.transitionDuration) : null,
    maskDur: mask ? ms(mask.transitionDuration) : null,
    maskDelay: mask ? ms(mask.transitionDelay) : null,
    hoverDur: ph ? ms(ph.transitionDuration) : null,
    hoverScale: ph ? getComputedStyle(document.querySelector('.card .ph')).transform : null,
  };
})()`;

const REDUCED_EXPR = `(() => {
  /* 'running' tek başına yanıltıcı: 0.01ms'lik geçişler de Animation nesnesi üretir.
     Ölçüt: 1ms'den uzun süren ve çalışan animasyon (gerçek hareket). */
  const dur = (a) => { try { return a.effect?.getTiming?.().duration ?? 0; } catch { return 0; } };
  const real = document.getAnimations().filter((a) => a.playState === 'running' && Number(dur(a)) > 1);
  const running = real.length;
  const card = document.querySelector('.card');
  return {
    running,
    bodyReduce: document.body.classList.contains('reduce'),
    cardOpacity: card ? getComputedStyle(card).opacity : null,
  };
})()`;

const FRAME_EXPR = `new Promise((resolve) => {
  const deltas = [];
  let last = performance.now();
  const tick = (t) => {
    deltas.push(t - last);
    last = t;
    if (deltas.length < 60) requestAnimationFrame(tick);
    else {
      const s = deltas.slice(5).sort((a, b) => a - b);
      resolve({ p95: s[Math.floor(s.length * 0.95)] ?? 0, max: Math.max(...s) });
    }
  };
  requestAnimationFrame(tick);
})`;

const close = (a, b) => {
  const tol = Math.max(TOLERANCE_MS, Math.abs(b) * 0.02);
  return Math.abs(a - b) <= tol;
};

async function main() {
  const slugs = sampleSlugs(SAMPLE);
  const cdp = await launch({ tabs: 4 });
  const rows = [];
  try {
    for (const slug of slugs) {
      if (!MOTION[slug]) {
        rows.push({ slug, errors: ['live-motion.js kaydı yok'], warnings: [] });
        continue;
      }
      const errors = [];
      const warnings = [];

      const parity = await cdp.evaluate(LIVE, {
        expression: PARITY_EXPR(slug),
        query: `style=${slug}`,
        reducedMotion: 'no-preference',
      });
      const exp = parity?.expect ?? MOTION[slug];
      if (!parity) {
        errors.push('parite ölçülemedi (sayfa değerlendirilemedi)');
      } else {
        if (parity.dataMotion !== exp.enter.pattern) {
          errors.push(`data-motion "${parity.dataMotion}" ≠ beklenen "${exp.enter.pattern}"`);
        }
        if (!close(parity.maskDur ?? -1, exp.enter.durationMs)) {
          errors.push(`giriş süresi ${parity.maskDur}ms ≠ tokens ${exp.enter.durationMs}ms`);
        }
        if (!close(parity.cardDur ?? -1, exp.scroll.durationMs)) {
          errors.push(`scroll süresi ${parity.cardDur}ms ≠ tokens ${exp.scroll.durationMs}ms`);
        }
        if (!close(parity.hoverDur ?? -1, exp.hover.durationMs)) {
          errors.push(`hover süresi ${parity.hoverDur}ms ≠ tokens ${exp.hover.durationMs}ms`);
        }
      }

      const reduced = await cdp.evaluate(LIVE, {
        expression: REDUCED_EXPR,
        query: `style=${slug}&motion=reduce`,
        reducedMotion: 'reduce',
      });
      if (!reduced) errors.push('reduced ölçülemedi');
      else {
        if (reduced.running > 0) errors.push(`reduced altında ${reduced.running} animasyon çalışıyor`);
        if (reduced.cardOpacity !== '1') errors.push(`reduced altında kart opaklığı ${reduced.cardOpacity} (1 olmalı)`);
      }

      const frames = await cdp.evaluate(LIVE, {
        expression: FRAME_EXPR,
        query: `style=${slug}`,
        reducedMotion: 'no-preference',
      });
      if (frames && frames.p95 > FRAME_P95_MS) {
        warnings.push(`p95 frame ${frames.p95.toFixed(1)}ms > ${FRAME_P95_MS}ms`);
      }

      rows.push({ slug, errors, warnings, parity, reduced, frames });
    }
  } finally {
    await cdp.close();
  }

  const failed = rows.filter((r) => r.errors.length);
  if (JSON_OUT) {
    console.log(JSON.stringify({ total: rows.length, failed: failed.length, rows }, null, 2));
  } else {
    for (const r of rows) {
      const tag = r.errors.length ? '×' : '✓';
      const f = r.frames ? `p95 ${r.frames.p95.toFixed(1)}ms` : 'p95 —';
      console.log(`${tag} ${r.slug.padEnd(22)} ${f}${r.errors.length ? ' · ' + r.errors.join(' · ') : ''}`);
      for (const w of r.warnings) console.log(`    ! ${w}`);
    }
    console.log(
      `\nmotion-measure · ${rows.length} stil · ${failed.length} hata · eşik: süre ±${TOLERANCE_MS}ms/%2 · p95 ≤ ${FRAME_P95_MS}ms`,
    );
  }
  return failed.length ? 1 : 0;
}

process.exit(await main());
