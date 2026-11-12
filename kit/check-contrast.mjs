#!/usr/bin/env node
/**
 * kit/check-contrast.mjs — 34 paletin WCAG kontrast denetimi.
 *
 * Kullanım:
 *   node kit/check-contrast.mjs            # tablo + özet
 *   node kit/check-contrast.mjs --json     # makine-okur
 *   node kit/check-contrast.mjs --strict   # uyarıları da hata say (exit 1)
 *   node kit/check-contrast.mjs --strict-soft   # yalnız --ink-soft < 4.5 hatası
 *
 * Eşikler: gövde metni 4.5:1 · büyük metin 3:1 · acent üstü metin 4.5:1 · odak halkası 3:1 (non-text).
 * APCA (WCAG 3 taslağı) bilgi olarak ölçülür: |Lc| < 45 hata, < 60 uyarı, < 75 sessiz (tabloda görünür).
 * Odak halkası: --focus varsayılan olarak --accent'tir; halka hem --bg hem --surface üzerinde 3:1 olmalı.
 * Zorunlu (hata): --ink/--bg, --accent-ink/--accent.
 * Uyarı: --ink-soft/--bg, --ink-faint/--bg (dekoratif kabul edilir, 3:1 altı raporlanır).
 * --strict-soft yalnızca --ink-soft/--bg kapısını hata yapar; --ink-faint (dekoratif) uyarı olarak kalır.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { apcaContrast, contrastOnSurface, contrastRatio } from './color.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CSS = fs.readFileSync(path.join(ROOT, 'kit', 'tokens.css'), 'utf8');
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');
const STRICT_SOFT = process.argv.includes('--strict-soft');

/**
 * --strict-soft altında --ink-soft/--bg eşiğinin (4.5) altında kalması KABUL EDİLEN stiller.
 * skeuomorphism: 4.34:1 — malzeme dokusu (inset gölge/gravür) yumuşak mürekkebi bilinçli kıılar.
 */
const ALLOW_SOFT = ['skeuomorphism'];

function parseBlocks() {
  const blocks = [];
  const darkBlocks = [];
  const grab = (m) => {
    const vars = {};
    for (const v of m[2].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
    return { slug: m[1], vars };
  };
  for (const m of CSS.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) blocks.push(grab(m));
  for (const m of CSS.matchAll(/^\[data-theme="dark"\]\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) darkBlocks.push(grab(m));
  const rootMatch = CSS.match(/:root\s*\{([\s\S]*?)\n\}/);
  const root = {};
  if (rootMatch) for (const v of rootMatch[1].matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) root[v[1]] = v[2].trim();
  return { blocks, darkBlocks, root };
}

const { blocks, darkBlocks, root } = parseBlocks();

/** `var(--accent)` gibi tek seviye referansı çözer (odak halkası için). */
function resolveVar(value, vars) {
  const m = String(value ?? '').match(/^var\((--[a-z0-9-]+)\)$/i);
  return m ? vars[m[1]] : value;
}

/** Tek bir stil (açık ya da koyu) için eşik kontrolü; satır + hata/uyarı üretir. */
function evaluate(slug, v, tag) {
  const checks = {
    body: contrastRatio(v['ink'], v['bg']),
    soft: contrastRatio(v['ink-soft'], v['bg']),
    faint: contrastRatio(v['ink-faint'], v['bg']),
    accent: contrastRatio(v['accent-ink'], v['accent']),
    onSurface: contrastOnSurface(v['ink'], v['surface'], v['bg']),
    lcBody: apcaContrast(v['ink'], v['bg']),
    lcSoft: apcaContrast(v['ink-soft'], v['bg']),
    // --focus varsayılanı `var(--accent)`; stil ezmezse accent'e çözülür.
    // --surface yarı saydam olabilir (cam stilleri): önce --bg üzerine bindirilir.
    focusBg: contrastRatio(resolveVar(v['focus'], v) ?? v['accent'], v['bg']),
    focusSurface: contrastOnSurface(resolveVar(v['focus'], v) ?? v['accent'], v['surface'], v['bg']),
  };
  rows.push({ slug: slug + tag, ...checks });
  const known = baseline[slug] ?? {};
  const label = slug + tag;

  if (checks.body !== null && checks.body < 4.5) errors.push(`${label}: --ink/--bg ${checks.body.toFixed(2)}:1 < 4.5`);
  if (checks.accent !== null && checks.accent < 4.5) {
    const msg = `${label}: --accent-ink/--accent ${checks.accent.toFixed(2)}:1 < 4.5`;
    if (known.accent) debt.push(msg + ` — ${known.accent}`);
    else errors.push(msg);
  }
  if (checks.onSurface !== null && checks.onSurface < 4.5) warnings.push(`${label}: --ink/--surface ${checks.onSurface.toFixed(2)}:1 < 4.5`);
  if (checks.soft !== null && checks.soft < 4.5) {
    const msg = `${label}: --ink-soft/--bg ${checks.soft.toFixed(2)}:1 < 4.5`;
    if (ALLOW_SOFT.includes(slug)) {
      if (STRICT_SOFT) exceptions.push({ slug: label, soft: checks.soft });
      warnings.push(msg);
    } else if (STRICT_SOFT) {
      errors.push(msg);
    } else {
      warnings.push(msg);
    }
  }
  if (checks.faint !== null && checks.faint < 3) warnings.push(`${label}: --ink-faint/--bg ${checks.faint.toFixed(2)}:1 < 3 (dekoratif)`);

  // APCA: WCAG 2 oranından farklı olarak polariteye duyarlı; bilgi + kaba eşik
  const lc = checks.lcBody == null ? null : Math.abs(checks.lcBody);
  if (lc !== null && lc < 45) errors.push(`${label}: APCA --ink/--bg Lc ${lc} < 45 (gövde metni okunmaz)`);
  else if (lc !== null && lc < 60) warnings.push(`${label}: APCA --ink/--bg Lc ${lc} < 60 (WCAG geçse de APCA düşük)`);

  // Odak halkası: klavye görünürlüğü — hem zemin hem yüzey üzerinde 3:1
  const focusMin = Math.min(checks.focusBg ?? Infinity, checks.focusSurface ?? Infinity);
  if (Number.isFinite(focusMin) && focusMin < 3) {
    errors.push(`${label}: odak halkası (--focus/--accent) ${focusMin.toFixed(2)}:1 < 3 (bg veya surface üzerinde)`);
  }
}
const baselinePath = path.join(ROOT, 'kit', 'contrast-baseline.json');
const baseline = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath, 'utf8')) : {};
const rows = [];
const errors = [];
const warnings = [];
const debt = [];
const exceptions = [];

for (const b of blocks) {
  evaluate(b.slug, { ...root, ...b.vars }, '');
}

/* koyu mod: [data-theme=dark][data-style] blokları açık bloğun üzerine biner (CSS cascade) */
const lightBySlug = new Map(blocks.map((b) => [b.slug, b.vars]));
for (const d of darkBlocks) {
  evaluate(d.slug, { ...root, ...(lightBySlug.get(d.slug) ?? {}), ...d.vars }, ' (koyu)');
}

if (JSON_OUT) {
  console.log(JSON.stringify({ rows, errors, warnings, debt }, null, 2));
} else {
  const pad = (s, n) => String(s).padEnd(n);
  const num = (x) => (x === null ? '  —  ' : x.toFixed(2).padStart(5));
  console.log(`${pad('stil', 22)} ${pad('ink/bg', 8)} ${pad('soft', 8)} ${pad('faint', 8)} ${pad('acc-on', 8)} ${pad('ink/surf', 9)} ${pad('Lc', 6)} focus`);
  for (const r of rows) {
    const flag = r.body !== null && r.body < 4.5 ? ' ×' : '';
    console.log(
      `${pad(r.slug, 22)} ${num(r.body)}   ${num(r.soft).padStart(5)}   ${num(r.faint).padStart(5)}   ${num(r.accent).padStart(5)}   ${num(r.onSurface).padStart(5)}   ${String(r.lcBody == null ? '—' : Math.abs(r.lcBody)).padStart(5)}   ${num(r.focusBg)}${flag}`,
    );
  }
  console.log(`\n${rows.length} stil · ${errors.length} hata · ${debt.length} kabul edilmiş borç · ${warnings.length} uyarı`);
  if (STRICT_SOFT) {
    console.log('\nİstisna (--strict-soft · ALLOW_SOFT):');
    if (!exceptions.length) console.log('  — yok');
    for (const e of exceptions) {
      console.log(`  ✓ istisna: ${e.slug} (belgeli) — --ink-soft/--bg ${e.soft.toFixed(2)}:1 < 4.5, malzeme dokusu`);
    }
  }
  if (errors.length) {
    console.log('\nHata (erişilebilirlik kapısı):');
    for (const e of errors) console.log('  × ' + e);
  }
  if (debt.length) {
    console.log('\nKabul edilmiş kontrast borcu (kit/contrast-baseline.json):');
    for (const d of debt) console.log('  ~ ' + d);
  }
  if (warnings.length) {
    console.log('\nUyarı:');
    for (const w of warnings) console.log('  ! ' + w);
  }
}

if (errors.length || (STRICT && warnings.length)) process.exit(1);