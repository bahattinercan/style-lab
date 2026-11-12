#!/usr/bin/env node
/**
 * kit/render/render-sections.mjs — bölüm kütüphanesi render'ı (P3).
 *
 * Her stil × 12 bölüm → `kit/.shots-cache/<dir>/sections/<id>.png` (üretilen; repoda tutulmaz).
 * İçerik: `tokens.json → industries[0]` paketi (P1) + stil token'ları + layout arketipi.
 *
 * Kullanım:
 *   node kit/render/render-sections.mjs --styles y2k,terminal-ui
 *   node kit/render/render-sections.mjs --all
 *   node kit/render/render-sections.mjs --sample 6 --check
 *   node kit/render/render-sections.mjs --sample 6 --check --ensure
 *   node kit/render/render-sections.mjs --styles y2k --measure   # taşma/kontrast ölçümü (CDP)
 *
 * Bayraklar:
 *   --check      Bölüm PNG'lerinin varlığını ve geçerli boyutunu doğrular; eksik varsa üretir.
 *   --ensure     Kontrol sırasında eksik bölüm varsa tarayıcıda üretip doğrular;
 *                tarayıcı açılamazsa ↷ ile görünür biçimde atlar (--check ile varsayılan).
 *   --no-ensure  Üretim yapmadan yalnız mevcut dosyaları denetler.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch } from './cdp-browser.mjs';
import { configFor } from './shots.config.mjs';
import { SECTIONS } from './sections.mjs';
import { decodePng } from './png.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CACHE = path.join(ROOT, 'kit', '.shots-cache');
const CONTENT = path.join(ROOT, 'kit', 'content');
// Şablonlar kit/render/ içinde: göreli yollar (../tokens.css, section.css) ancak burada çözülür.
// Alt dizine yazmak stilleri sessizce kaybettirir (ilk denemede tam olarak bu oldu).
const TMP = HERE;

const ARGV = process.argv.slice(2);
const ALL = ARGV.includes('--all');
const CHECK = ARGV.includes('--check');
const ENSURE = ARGV.includes('--ensure') || (CHECK && !ARGV.includes('--no-ensure'));
const MEASURE = ARGV.includes('--measure');
const JSON_OUT = ARGV.includes('--json');
const MIN_SECTION_BYTES = 1024;
const SAMPLE = (() => {
  const i = ARGV.indexOf('--sample');
  return i >= 0 ? Number(ARGV[i + 1]) : 6;
})();
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  return i >= 0 ? (ARGV[i + 1] ?? '').split(',').filter(Boolean) : null;
})();

const dirs = () =>
  fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

function targets() {
  const all = dirs();
  if (ONLY) return all.filter((d) => ONLY.includes(d.replace(/^\d+-/, '')));
  if (ALL) return all;
  const step = Math.max(1, Math.floor(all.length / SAMPLE));
  const out = [];
  for (let i = 0; i < all.length && out.length < SAMPLE; i += step) out.push(all[i]);
  return out;
}

/** Token değişkenlerini kit/tokens.css'ten okur (render-shots ile aynı kaynak). */
function tokenVars() {
  const css = fs.readFileSync(path.join(ROOT, 'kit', 'tokens.css'), 'utf8');
  const map = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    const vars = {};
    for (const v of m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
    map[m[1]] = vars;
  }
  return map;
}

function copyFor(dir) {
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const id = tokens.industries?.[0] ?? 'saas';
  const file = path.join(CONTENT, `${id}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
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

/** Boş kare tespiti: PNG'yi çöz, örneklenen piksellerde renk çeşitliliğine bak (boyut eşiği yanıltıcı). */
function isBlankPng(buf) {
  try {
    const img = decodePng(buf);
    const data = img.data ?? img.pixels;
    const ch = img.channels ?? 4;
    const seen = new Set();
    for (let y = 0; y < img.height; y += 17) {
      for (let x = 0; x < img.width; x += 17) {
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

const MEASURE_EXPR = `(() => {
  const de = document.documentElement;
  const overflowX = de.scrollWidth - de.clientWidth;
  const wrap = document.querySelector('.wrap');
  const nodes = [...document.querySelectorAll('.wrap *')].filter((el) => el.getBoundingClientRect().width > 0);
  const outside = nodes.filter((el) => { const r = el.getBoundingClientRect(); return r.right > de.clientWidth + 1 || r.left < -1; }).length;
  const tiny = nodes.filter((el) => { const s = getComputedStyle(el); return parseFloat(s.fontSize) < 9 && el.textContent.trim().length > 6; }).length;
  return { overflowX, outside, tiny, height: wrap ? Math.round(wrap.getBoundingClientRect().height) : 0 };
})()`;

async function main() {
  const tpl = fs.readFileSync(path.join(HERE, 'section.html'), 'utf8');
  const vars = tokenVars();
  const list = targets();
  let cdp = null;
  let skippedNoBrowser = null;
  const out = [];
  const problems = [];
  try {
    for (const dir of list) {
      const slug = dir.replace(/^\d+-/, '');
      const v = vars[slug] ?? {};
      const cfg = configFor(slug);
      const copy = copyFor(dir);
      const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
      for (const sec of SECTIONS) {
        const target = path.join(CACHE, dir, 'sections', `${sec.id}.png`);
        if (CHECK) {
          const existingBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
          if (existingBytes >= MIN_SECTION_BYTES) {
            out.push({ dir, section: sec.id, ok: true, bytes: existingBytes });
            continue;
          }
          if (!ENSURE) {
            out.push({ dir, section: sec.id, ok: false, bytes: existingBytes });
            problems.push(
              existingBytes > 0
                ? `${dir}/sections/${sec.id}.png geçersiz boyutta (${existingBytes} B)`
                : `${dir}/sections/${sec.id}.png yok`,
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
        // sıra önemli: gövde ÖNCE gömülür, copy SONRA doldurulur (bölüm metinleri de paketten gelir)
        const html = fillCopy(
          tpl
            .split('__SECTION_BODY__').join(sec.body)
            .split('__STYLE__').join(slug)
            .split('__BODY_CLASS__').join(cfg.bodyClass ?? '')
            .split('__SECTION_LABEL__').join(sec.label),
          copy,
        )
          .replace('<style id="extra"></style>', `<style>\n${cfg.extraCss ?? ''}\n${cfg.scenes?.['dark-landing'] ?? ''}\n</style>`);
        const file = path.join(TMP, `.tmp-section-${slug}-${sec.id}.html`);
        fs.writeFileSync(file, html);
        const width = sec.width ?? 1280;
        const height = sec.height ?? 420;

        if (MEASURE) {
          const m = await cdp.evaluate(file, { width, height, expression: MEASURE_EXPR });
          if (m.overflowX > 2) problems.push(`${slug}/${sec.id}: yatay taşma ${m.overflowX}px`);
          if (m.outside > 0) problems.push(`${slug}/${sec.id}: ${m.outside} öğe viewport dışında`);
          if (m.tiny > 0) problems.push(`${slug}/${sec.id}: ${m.tiny} öğe 9px altı metin`);
          out.push({ dir, section: sec.id, measured: m });
        } else {
          const png = await cdp.capture(file, { width, height, format: 'png' });
          fs.mkdirSync(path.dirname(target), { recursive: true });
          fs.writeFileSync(target, png);
          const writtenBytes = fs.existsSync(target) ? fs.statSync(target).size : 0;
          const blank = writtenBytes < MIN_SECTION_BYTES || isBlankPng(png);
          out.push({ dir, section: sec.id, ok: !blank, generated: CHECK, bytes: writtenBytes });
          if (blank) problems.push(`${slug}/${sec.id}: boş/geçersiz kare (${writtenBytes} B)`);
        }
        fs.rmSync(file, { force: true });
        void tokens;
        void v;
      }
      if (skippedNoBrowser) break;
    }
  } finally {
    if (cdp) await cdp.close();
    for (const f of fs.existsSync(TMP) ? fs.readdirSync(TMP) : []) {
      if (f.startsWith('.tmp-section-') && f.endsWith('.html')) fs.rmSync(path.join(TMP, f), { force: true });
    }
  }

  if (skippedNoBrowser) {
    if (JSON_OUT) {
      console.log(JSON.stringify({ count: out.length, skipped: true, reason: skippedNoBrowser, problems, out }, null, 2));
    } else {
      console.log(`↷ bölüm kütüphanesi (cache yok, atlandı: ${skippedNoBrowser})`);
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
      `bölüm kütüphanesi · ${list.length} stil × ${SECTIONS.length} bölüm = ${out.length} kayıt · ` +
        `${ok} ✓${genNote} · ${problems.length} sorun${MEASURE ? ' (ölçüm modu)' : ''}`,
    );
  }
  return problems.length ? 1 : 0;
}

process.exit(await main());
