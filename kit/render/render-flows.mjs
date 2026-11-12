#!/usr/bin/env node
/**
 * kit/render/render-flows.mjs — akış şeritleri (P4).
 *
 * Refero'nun asıl değeri ekran değil **akış**tır (kaydolma, ödeme, davet). Katalog 31 tek kare
 * gösteriyordu; burada 3 akış × 3 adım tek şeritte render edilir:
 *   kit/.shots-cache/<dir>/flows/<id>.png
 *
 * Kullanım:
 *   node kit/render/render-flows.mjs --styles y2k,terminal-ui
 *   node kit/render/render-flows.mjs --all
 *   node kit/render/render-flows.mjs --sample 4 --check
 *   node kit/render/render-flows.mjs --sample 4 --check --ensure
 *   node kit/render/render-flows.mjs --sample 4 --measure   # taşma/adım sayısı ölçümü (CDP)
 *
 * Bayraklar:
 *   --check      Akış PNG'lerinin varlığını ve geçerli boyutunu doğrular; eksik varsa üretir.
 *   --ensure     Kontrol sırasında eksik akış varsa tarayıcıda üretip doğrular;
 *                tarayıcı açılamazsa ↷ ile görünür biçimde atlar (--check ile varsayılan).
 *   --no-ensure  Üretim yapmadan yalnız mevcut dosyaları denetler.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './cdp-browser.mjs';
import { configFor } from './shots.config.mjs';
import { FLOWS } from './flows.mjs';
import { decodePng } from './png.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CACHE = path.join(ROOT, 'kit', '.shots-cache');
const CONTENT = path.join(ROOT, 'kit', 'content');

const ARGV = process.argv.slice(2);
const ALL = ARGV.includes('--all');
const CHECK = ARGV.includes('--check');
const ENSURE = ARGV.includes('--ensure') || (CHECK && !ARGV.includes('--no-ensure'));
const MEASURE = ARGV.includes('--measure');
const JSON_OUT = ARGV.includes('--json');
const MIN_FLOW_BYTES = 1024;
const SAMPLE = (() => {
  const i = ARGV.indexOf('--sample');
  return i >= 0 ? Number(ARGV[i + 1]) : 6;
})();
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  return i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : null;
})();

const allDirs = () =>
  fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

function targets() {
  const all = allDirs();
  if (ONLY) return all.filter((d) => ONLY.includes(d.replace(/^\d+-/, '')));
  if (ALL) return all;
  const step = Math.max(1, Math.floor(all.length / SAMPLE));
  const out = [];
  for (let i = 0; i < all.length && out.length < SAMPLE; i += step) out.push(all[i]);
  return out;
}

function copyFor(dir) {
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const id = tokens.industries?.[0] ?? 'saas';
  const f = path.join(CONTENT, `${id}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
}

function fillCopy(html, copy) {
  const map = {
    __COPY_EYEBROW__: copy?.hero?.eyebrow ?? '',
    __COPY_H1__: copy?.hero?.h1 ?? '',
    __COPY_LEDE__: copy?.hero?.lede ?? '',
    __COPY_CTA1__: copy?.hero?.ctaPrimary ?? '',
    __COPY_CTA2__: copy?.hero?.ctaSecondary ?? '',
    __COPY_PROOF1__: copy?.proofs?.[0] ?? '',
    __COPY_PROOF2__: copy?.proofs?.[1] ?? '',
    __COPY_PROOF3__: copy?.proofs?.[2] ?? '',
    __COPY_LOGO_LABEL__: copy?.logoLabel ?? '',
    __COPY_LOGO1__: copy?.logos?.[0] ?? '',
    __COPY_LOGO2__: copy?.logos?.[1] ?? '',
    __COPY_LOGO3__: copy?.logos?.[2] ?? '',
    __COPY_LOGO4__: copy?.logos?.[3] ?? '',
    __COPY_LOGO5__: copy?.logos?.[4] ?? '',
    __COPY_TILE1__: copy?.tiles?.[0]?.cap ?? '',
    __COPY_TILE2__: copy?.tiles?.[1]?.cap ?? '',
    __COPY_TILE3__: copy?.tiles?.[2]?.cap ?? '',
    __COPY_TILE4__: copy?.tiles?.[3]?.cap ?? '',
  };
  let out = html;
  for (const [k, v] of Object.entries(map)) out = out.split(k).join(v);
  return out;
}

/** Boş kare: PNG renk çeşitliliği (boyut eşiği yanıltıcı). */
function isBlankPng(buf) {
  try {
    const img = decodePng(buf);
    const data = img.data ?? img.pixels;
    const ch = img.channels ?? 4;
    const seen = new Set();
    for (let y = 0; y < img.height; y += 19) {
      for (let x = 0; x < img.width; x += 19) {
        const i = (y * img.width + x) * ch;
        seen.add(`${data[i]},${data[i + 1]},${data[i + 2]}`);
        if (seen.size > 6) return false;
      }
    }
    return seen.size <= 2;
  } catch {
    return false;
  }
}

const stepsHtml = (flow) =>
  flow.steps
    .map((s, i) => {
      const dots = [0, 1, 2].map((k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('');
      return (
        `<article class="f-step"><header><span class="f-n">0${i + 1}</span>` +
        `<h2>${s.title}</h2><span class="f-dots">${dots}</span></header>${s.body}</article>`
      );
    })
    .join('');

const MEASURE_EXPR = `(() => {
  const de = document.documentElement;
  const steps = [...document.querySelectorAll('.f-step')];
  const outside = steps.filter((el) => { const r = el.getBoundingClientRect(); return r.right > de.clientWidth + 1 || r.left < -1; }).length;
  return { steps: steps.length, overflowX: de.scrollWidth - de.clientWidth, outside };
})()`;

async function main() {
  const tpl = fs.readFileSync(path.join(HERE, 'flow.html'), 'utf8');
  const list = targets();
  let cdp = null;
  let skippedNoBrowser = null;
  const out = [];
  const problems = [];
  try {
    for (const dir of list) {
      const slug = dir.replace(/^\d+-/, '');
      const cfg = configFor(slug);
      const copy = copyFor(dir);
      for (const flow of FLOWS) {
        const target = path.join(CACHE, dir, 'flows', `${flow.id}.png`);
        if (CHECK) {
          const existingBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
          if (existingBytes >= MIN_FLOW_BYTES) {
            out.push({ dir, flow: flow.id, ok: true, bytes: existingBytes });
            continue;
          }
          if (!ENSURE) {
            out.push({ dir, flow: flow.id, ok: false, bytes: existingBytes });
            problems.push(
              existingBytes > 0
                ? `${dir}/flows/${flow.id}.png geçersiz boyutta (${existingBytes} B)`
                : `${dir}/flows/${flow.id}.png yok`,
            );
            continue;
          }
        }
        if (!cdp) {
          try {
            cdp = await launch({ tabs: 2 });
          } catch (err) {
            if (CHECK && ENSURE) {
              skippedNoBrowser = err?.message || 'tarayıcı bulunamadı';
              break;
            }
            throw err;
          }
        }
        const html = fillCopy(
          tpl
            .split('__FLOW_STEPS__').join(stepsHtml(flow))
            .split('__FLOW_ID__').join(flow.id)
            .split('__FLOW_LABEL__').join(flow.label)
            .split('__STYLE__').join(slug)
            .split('__BODY_CLASS__').join(cfg.bodyClass ?? ''),
          copy,
        ).replace('<style id="extra"></style>', `<style>\n${cfg.extraCss ?? ''}\n</style>`);
        const file = path.join(HERE, `.tmp-flow-${slug}-${flow.id}.html`);
        fs.writeFileSync(file, html);

        if (MEASURE) {
          const m = await cdp.evaluate(file, { width: flow.width, height: flow.height, expression: MEASURE_EXPR });
          if (m.overflowX > 2) problems.push(`${slug}/${flow.id}: yatay taşma ${m.overflowX}px`);
          if (m.outside) problems.push(`${slug}/${flow.id}: ${m.outside} adım viewport dışında`);
          if (m.steps !== 3) problems.push(`${slug}/${flow.id}: ${m.steps} adım (3 bekleniyor)`);
          out.push({ dir, flow: flow.id, measured: m });
        } else {
          const png = await cdp.capture(file, { width: flow.width, height: flow.height, format: 'png' });
          fs.mkdirSync(path.dirname(target), { recursive: true });
          fs.writeFileSync(target, png);
          const writtenBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
          const blank = writtenBytes < MIN_FLOW_BYTES || isBlankPng(png);
          out.push({ dir, flow: flow.id, ok: !blank, generated: CHECK, bytes: writtenBytes });
          if (blank) problems.push(`${slug}/${flow.id}: boş/geçersiz kare (${writtenBytes} B)`);
        }
        fs.rmSync(file, { force: true });
      }
      if (skippedNoBrowser) break;
    }
  } finally {
    if (cdp) await cdp.close();
    for (const f of fs.existsSync(HERE) ? fs.readdirSync(HERE) : []) {
      if (f.startsWith('.tmp-flow-')) fs.rmSync(path.join(HERE, f), { force: true });
    }
  }

  if (skippedNoBrowser) {
    if (JSON_OUT) {
      console.log(JSON.stringify({ count: out.length, skipped: true, reason: skippedNoBrowser, problems, out }, null, 2));
    } else {
      console.log(`↷ akış şeritleri (cache yok, atlandı: ${skippedNoBrowser})`);
    }
    return 0;
  }

  if (JSON_OUT) console.log(JSON.stringify({ count: out.length, problems, out }, null, 2));
  else {
    for (const p of problems.slice(0, 20)) console.log(`× ${p}`);
    const ok = out.filter((o) => o.ok !== false).length;
    const generated = out.filter((o) => o.generated && o.ok).length;
    const genNote = generated > 0 ? ` (${generated} eksik üretildi)` : '';
    console.log(
      `akış şeritleri · ${list.length} stil × ${FLOWS.length} akış = ${out.length} · ${ok} ✓${genNote} · ${problems.length} sorun` +
        (MEASURE ? ' (ölçüm)' : ''),
    );
  }
  return problems.length ? 1 : 0;
}

process.exit(await main());
