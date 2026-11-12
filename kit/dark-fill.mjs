#!/usr/bin/env node
/**
 * kit/dark-fill.mjs — yarım kalmış koyu mod paletlerini tamamlar ve tokens.css bloğunu yazar.
 *
 * Neden: 29 stilde tokens.json içinde `palette.dark` var ama yalnız bg/surface/ink/accent
 * dolu; eksik anahtarlar koyu blok yazılmadığı için hiç uygulanmamış. Bu araç eksikleri
 * **belgelenmiş formüllerle** türetir (uydurma değil), sonra kontrast kapısına bırakır.
 *
 * Formüller (açık → koyu):
 *   bg2      = mix(bg, ink, %6)          yüzeyin bir ton açığı
 *   surface2 = mix(surface, ink, %8)
 *   inkSoft  = mix(ink, bg, %30)         ikincil metin
 *   inkFaint = mix(ink, bg, %55)         dekoratif metin (≥3 hedefi garanti değil)
 *   line     = ink, %14 alfa
 *   accentInk = bg / #0d0d0d / #ffffff içinden accent'e karşı en yüksek kontrast (≥4.5 şart)
 *
 * Kullanım:
 *   node kit/dark-fill.mjs --styles swiss-design,bento-grid   # yaz
 *   node kit/dark-fill.mjs --all --dry                        # hiçbir şey yazma, plan göster
 *   node kit/dark-fill.mjs --all                              # tüm borçlu stiller
 *
 * Yazdıktan sonra: node kit/render/render-shots.mjs --styles <slug> --scene dark-landing --force
 *                  node kit/render/render-shots.mjs --styles <slug> --scene dark-form --force
 *                  kit/dark-baseline.json içinden slug'ı sil
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { contrastOnSurface, contrastRatio, parseColor } from './color.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const TOKENS_CSS = path.join(ROOT, 'kit', 'tokens.css');
const BASELINE = path.join(ROOT, 'kit', 'dark-baseline.json');

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
};
const DRY = process.argv.includes('--dry');
const ALL = process.argv.includes('--all');
const SYNC = process.argv.includes('--sync');
const ONLY = (arg('styles', '') || '').split(',').filter(Boolean);

const DARK_KEYS = ['bg', 'bg2', 'surface', 'surface2', 'ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line'];
const CSS_KEY = { bg: 'bg', bg2: 'bg-2', surface: 'surface', surface2: 'surface-2', ink: 'ink', inkSoft: 'ink-soft', inkFaint: 'ink-faint', accent: 'accent', accentInk: 'accent-ink', line: 'line' };

const toHex = (c) => '#' + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
const clamp = (v) => Math.max(0, Math.min(255, v));

/** İki rengi verilen oranda karıştırır (ağırlık ikinci renge). */
function mix(a, b, weight) {
  const A = parseColor(a);
  const B = parseColor(b);
  if (!A || !B) return a;
  return toHex({
    r: clamp(A.r * (1 - weight) + B.r * weight),
    g: clamp(A.g * (1 - weight) + B.g * weight),
    b: clamp(A.b * (1 - weight) + B.b * weight),
  });
}

function completeDark(dark) {
  const bg = dark.bg;
  const ink = dark.ink;
  const out = { ...dark };

  // koyu zeminde açık kalmış yüzey paleti → yüzeyi zeminden türet (yarı saydam yüzeylerde composite ile ölç)
  const surfaceContrast = contrastOnSurface(ink, out.surface, bg) ?? contrastRatio(ink, out.surface);
  if (surfaceContrast !== null && surfaceContrast < 4.5) {
    out.surface = mix(bg, ink, 0.06);
  }

  const surface = out.surface ?? mix(bg, ink, 0.06);
  out.surface = surface;
  out.bg2 ??= mix(bg, ink, 0.06);
  out.surface2 ??= mix(surface, ink, 0.08);
  out.inkSoft ??= mix(ink, bg, 0.3);
  out.inkFaint ??= mix(ink, bg, 0.55);
  const lineColor = parseColor(ink);
  out.line ??= lineColor ? `rgba(${Math.round(lineColor.r)},${Math.round(lineColor.g)},${Math.round(lineColor.b)},.14)` : 'rgba(255,255,255,.14)';

  // accent üstü metin: bilinen adaylar yetersizse accent tonunu eşiğe çek (kontrast kapısı şartı)
  const inkCandidates = () => [out.bg, '#0d0d0d', '#ffffff', mix(ink, out.bg, 0.8), mix(ink, out.bg, 0.6)];
  const bestInk = (accent) =>
    inkCandidates()
      .map((c) => ({ c, ratio: contrastRatio(c, accent) ?? 0 }))
      .sort((a, b) => b.ratio - a.ratio)[0];

  let accent = out.accent;
  let best = bestInk(accent);
  if (best.ratio < 4.5) {
    // accent'i zemine ve metne doğru kademeli kaydır, ilk geçen tonu al
    const shifts = [];
    for (let step = 1; step <= 6; step++) shifts.push(mix(accent, out.bg, step * 0.1));
    for (let step = 1; step <= 6; step++) shifts.push(mix(accent, out.ink, step * 0.1));
    for (const candidate of shifts) {
      const scored = bestInk(candidate);
      if (scored.ratio >= 4.5) {
        accent = candidate;
        best = scored;
        break;
      }
    }
  }
  out.accent = accent;
  out.accentInk = best.c;

  // sıralı ve eksiksiz nesne
  const ordered = {};
  for (const k of DARK_KEYS) ordered[k] = out[k];
  return ordered;
}

/** tokens.css içindeki AÇIK bloğun değişkenleri (accent gibi eksik alanların kaynağı). */
function readLightVars(css, slug) {
  const needle = `[data-style="${slug}"] {`;
  const start = css.indexOf(needle);
  if (start < 0) return {};
  const end = css.indexOf('\n}', start);
  if (end < 0) return {};
  const vars = {};
  for (const v of css.slice(start + needle.length, end).matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    vars[v[1]] = v[2].trim();
  }
  return vars;
}

function readBaseline() {
  if (!fs.existsSync(BASELINE)) return { slugs: {} };
  return JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
}

function darkBlockCss(slug, palette) {
  const lines = [];
  const push = (keys) => {
    const present = keys.filter((k) => palette[k] !== undefined).map((k) => `--${CSS_KEY[k]}: ${palette[k]};`);
    if (present.length) lines.push('  ' + present.join(' '));
  };
  push(['bg', 'bg2', 'surface', 'surface2']);
  push(['ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line']);
  return `/* ---- ${slug} ----------------------------------------------------- */\n[data-theme="dark"][data-style="${slug}"] {\n${lines.join('\n')}\n}\n`;
}

function upsertCssBlock(css, slug, block) {
  // başlık yorumu ne olursa olsun aynı slug'ın tüm koyu bloklarını temizle (çift blok birikmesin)
  const re = new RegExp(
    `(?:/\\*[^\\n]*\\*/\\n)?\\[data-theme="dark"\\]\\[data-style="${slug}"\\] \\{[\\s\\S]*?\\n\\}\\n?`,
    'g',
  );
  const stripped = css.replace(re, '').replace(/\n{3,}/g, '\n\n');
  const trimmed = stripped.replace(/\s+$/, '\n');
  return trimmed + '\n' + block;
}

/** CSS koyu bloğunu tokens.json palette.dark ile birebir eşitler (palet değiştirmez). */
function syncBlocks() {
  let css = fs.readFileSync(TOKENS_CSS, 'utf8');
  let touched = 0;
  for (const dirName of fs.readdirSync(STYLES_DIR)) {
    const jsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
    if (!fs.existsSync(jsonPath)) continue;
    const slug = dirName.replace(/^\d+-/, '');
    if (ONLY.length && !ONLY.includes(slug)) continue;
    const tokens = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const pal = tokens.palette?.dark;
    if (!pal) continue;
    css = upsertCssBlock(css, slug, darkBlockCss(slug, pal));
    touched++;
  }
  if (DRY) {
    console.log(`--sync --dry: ${touched} koyu blok yeniden yazılacaktı`);
    return 0;
  }
  fs.writeFileSync(TOKENS_CSS, css);
  console.log(`--sync: ${touched} koyu blok tokens.json palette.dark ile eşitlendi`);
  return 0;
}

function main() {
  if (SYNC) return syncBlocks();

  const baseline = readBaseline();
  const targets = ALL ? Object.keys(baseline.slugs ?? {}) : ONLY;
  if (!targets.length) {
    console.log('hedef yok: --styles a,b ya da --all ver');
    return 1;
  }

  let css = fs.readFileSync(TOKENS_CSS, 'utf8');
  const report = [];
  let failed = 0;

  for (const slug of targets) {
    const dirName = fs.readdirSync(STYLES_DIR).find((d) => d.replace(/^\d+-/, '') === slug);
    if (!dirName) {
      report.push(`✗ ${slug}: stil klasörü yok`);
      failed++;
      continue;
    }
    const jsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
    const tokens = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    const dark = tokens.palette?.dark;
    if (!dark) {
      report.push(`✗ ${slug}: palette.dark yok`);
      failed++;
      continue;
    }

    const lightVars = readLightVars(css, slug);
    const merged = { accent: lightVars.accent, accentInk: lightVars['accent-ink'], ...dark };
    const completed = completeDark(merged);
    const checks = {
      'ink/bg': contrastRatio(completed.ink, completed.bg),
      'ink-soft/bg': contrastRatio(completed.inkSoft, completed.bg),
      'accent-ink/accent': contrastRatio(completed.accentInk, completed.accent),
      'ink/surface': contrastRatio(completed.ink, completed.surface),
    };
    const bad = Object.entries(checks).filter(([, r]) => r !== null && r < 4.5);
    if (bad.length) {
      report.push(`✗ ${slug}: kontrast eşiği tutmadı — ${bad.map(([k, r]) => `${k} ${r.toFixed(2)}`).join(', ')}`);
      failed++;
      continue;
    }

    const changed = DARK_KEYS.filter((k) => dark[k] !== completed[k]);
    report.push(`✓ ${slug}: ${changed.length} anahtar türetildi (${changed.join(', ') || 'değişiklik yok'}) · en düşük ${Math.min(...Object.values(checks).filter(Boolean)).toFixed(2)}:1`);

    if (DRY) continue;

    tokens.palette.dark = completed;
    fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2) + '\n');
    css = upsertCssBlock(css, slug, darkBlockCss(slug, completed));

    if (baseline.slugs?.[slug]) delete baseline.slugs[slug];
  }

  if (!DRY && failed === 0) {
    fs.writeFileSync(TOKENS_CSS, css);
    fs.writeFileSync(BASELINE, JSON.stringify({ ...baseline, slugs: baseline.slugs ?? {} }, null, 2) + '\n');
  }

  for (const line of report) console.log('  ' + line);
  if (failed) {
    console.log(`\n${failed} stil yazılmadı (kontrast ya da eksik palet). Kalanlar yazıldı: ${targets.length - failed}.`);
  } else if (!DRY) {
    console.log('\nsonraki adım (her stil için):');
    console.log('  node kit/render/render-shots.mjs --styles <slug> --scene dark-landing --force');
    console.log('  node kit/render/render-shots.mjs --styles <slug> --scene dark-form --force');
    console.log('  node kit/check-schema.mjs && node kit/check-contrast.mjs --strict-soft');
  }
  return failed ? 1 : 0;
}

process.exit(main());
