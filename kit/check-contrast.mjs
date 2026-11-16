#!/usr/bin/env node
/**
 * kit/check-contrast.mjs — WCAG contrast check of 34 palettes.
 *
 * Usage:
 * node kit/check-contrast.mjs # table + summary
 * node kit/check-contrast.mjs --json # machine-reading
 * node kit/check-contrast.mjs --strict # count warnings as errors (exit 1)
 * node kit/check-contrast.mjs --strict-soft # only --ink-soft < 4.5 error
 *
 * Thresholds: body text 4.5:1 · large text 3:1 · above-agent text 4.5:1 · focus ring 3:1 (non-text).
 * APCA (draft WCAG 3) measured as information: |Lc| < 45 errors, < 60 warnings, < 75 silent (visible in the table).
 * Focus ring: --focus defaults to --accent; The ring should be 3:1 on both --bg and --surface.
 * Mandatory (error): --ink/--bg, --accent-ink/--accent.
 * Warning: --ink-soft/--bg, --ink-faint/--bg (considered decorative, reported below 3:1).
 * --strict-soft only errors the --ink-soft/--bg port; --ink-faint (decorative) remains warning.*/
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
 * Styles that are ACCEPTABLE to remain below the --ink-soft/--bg threshold (4.5) under --strict-soft.
 * skeuomorphism: 4.34:1 — material texture (inset shadow/engraving) makes soft ink conscious.*/
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

/** Resolves single level reference like `var(--accent)` (for focus ring).*/
function resolveVar(value, vars) {
  const m = String(value ?? '').match(/^var\((--[a-z0-9-]+)\)$/i);
  return m ? vars[m[1]] : value;
}

/** Threshold control for a single style (light or dark); line + produces an error/warning.*/
function evaluate(slug, v, tag) {
  const checks = {
    body: contrastRatio(v['ink'], v['bg']),
    soft: contrastRatio(v['ink-soft'], v['bg']),
    faint: contrastRatio(v['ink-faint'], v['bg']),
    accent: contrastRatio(v['accent-ink'], v['accent']),
    onSurface: contrastOnSurface(v['ink'], v['surface'], v['bg']),
    lcBody: apcaContrast(v['ink'], v['bg']),
    lcSoft: apcaContrast(v['ink-soft'], v['bg']),
    // --focus defaults to `var(--accent)`; If the style does not crush, it resolves to accent.
    // --surface can be translucent (glass styles): overlayed --bg first.
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

  // APCA: Unlike the WCAG 2 ratio, polarity sensitive; information + rough threshold
  const lc = checks.lcBody == null ? null : Math.abs(checks.lcBody);
  if (lc !== null && lc < 45) errors.push(`${label}: APCA --ink/--bg Lc ${lc} < 45 (body text unreadable)`);
  else if (lc !== null && lc < 60) warnings.push(`${label}: APCA --ink/--bg Lc ${lc} < 60 (passes WCAG but APCA is low)`);

  // Focus ring: keyboard visibility — 3:1 on both ground and surface
  const focusMin = Math.min(checks.focusBg ?? Infinity, checks.focusSurface ?? Infinity);
  if (Number.isFinite(focusMin) && focusMin < 3) {
    errors.push(`${label}: focus ring (--focus/--accent) ${focusMin.toFixed(2)}:1 < 3 (on bg or surface)`);
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

/*dark mode: [data-theme=dark][data-style] blocks overlap the light block (CSS cascade)*/
const lightBySlug = new Map(blocks.map((b) => [b.slug, b.vars]));
for (const d of darkBlocks) {
  evaluate(d.slug, { ...root, ...(lightBySlug.get(d.slug) ?? {}), ...d.vars }, ' (dark)');
}

if (JSON_OUT) {
  console.log(JSON.stringify({ rows, errors, warnings, debt }, null, 2));
} else {
  const pad = (s, n) => String(s).padEnd(n);
  const num = (x) => (x === null ? '  —  ' : x.toFixed(2).padStart(5));
  console.log(`${pad('style', 22)} ${pad('ink/bg', 8)} ${pad('soft', 8)} ${pad('faint', 8)} ${pad('acc-on', 8)} ${pad('ink/surf', 9)} ${pad('Lc', 6)} focus`);
  for (const r of rows) {
    const flag = r.body !== null && r.body < 4.5 ? ' ×' : '';
    console.log(
      `${pad(r.slug, 22)} ${num(r.body)}   ${num(r.soft).padStart(5)}   ${num(r.faint).padStart(5)}   ${num(r.accent).padStart(5)}   ${num(r.onSurface).padStart(5)}   ${String(r.lcBody == null ? '—' : Math.abs(r.lcBody)).padStart(5)}   ${num(r.focusBg)}${flag}`,
    );
  }
  console.log(`\n${rows.length} styles · ${errors.length} errors · ${debt.length} accepted debts · ${warnings.length} warnings`);
  if (STRICT_SOFT) {
    console.log('\nException (--strict-soft · ALLOW_SOFT):');
    if (!exceptions.length) console.log('  — yok');
    for (const e of exceptions) {
      console.log(`  ✓ exception: ${e.slug} (documented) — --ink-soft/--bg ${e.soft.toFixed(2)}:1 < 4.5, material texture`);
    }
  }
  if (errors.length) {
    console.log('\nError (accessibility port):');
    for (const e of errors) console.log('  × ' + e);
  }
  if (debt.length) {
    console.log('\nAccepted contrast debt (kit/contrast-baseline.json):');
    for (const d of debt) console.log('  ~ ' + d);
  }
  if (warnings.length) {
    console.log('\nWarning:');
    for (const w of warnings) console.log('  ! ' + w);
  }
}

if (errors.length || (STRICT && warnings.length)) process.exit(1);