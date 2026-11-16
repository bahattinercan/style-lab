#!/usr/bin/env node
/**
 * kit/check-content.mjs — sector content layer port (P1).
 *
 * Cause: 145 styles were being rendered with the same fictional SaaS text; One that says "Best: hotel/real estate"
 * style was showing task panel on the screen. With P1 you can add `industries[]` and a content pack to each style
 * (`kit/content/<id>.json`) assigned. This gate captures the silent drift:
 *
 * · assignment : industries[0] valid, package file exists, each package has ≥3 styles live (no dead packages)
 * · contract: packages carry mandatory fields; Text lengths are at a limit that will not overflow
 * · template : uses hero partials + landing logo strip `__COPY_*__` (no literal demo text)
 * · mapping : each placeholder in partials is in the set of keys provided by render-shots
 *
 * Usage: node kit/check-content.mjs [--json]*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const CONTENT_DIR = path.join(ROOT, 'kit', 'content');
const PARTIALS = path.join(ROOT, 'kit', 'render', 'partials');
const JSON_OUT = process.argv.includes('--json');

const errors = [];
const warnings = [];

const packFiles = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.json'));
const packs = new Map(packFiles.map((f) => [f.replace(/\.json$/, ''), JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8'))]));

const LIMITS = { h1: 56, lede: 120, eyebrow: 34, ctaPrimary: 26, ctaSecondary: 26, proof: 30, logo: 18, tile: 18 };
const REQUIRED = ['label', 'tags', 'hero', 'proofs', 'logos', 'logoLabel', 'tiles'];

for (const [id, p] of packs) {
  for (const key of REQUIRED) if (!(key in p)) errors.push(`kit/content/${id}.json: ${key} yok`);
  if (!Array.isArray(p.proofs) || p.proofs.length < 3) errors.push(`kit/content/${id}.json: proofs must be ≥3`);
  if (!Array.isArray(p.logos) || p.logos.length < 5) errors.push(`kit/content/${id}.json: logos must be ≥5`);
  if (!Array.isArray(p.tiles) || p.tiles.length < 4) errors.push(`kit/content/${id}.json: tiles must be ≥4`);
  for (const [field, max] of Object.entries(LIMITS)) {
    const val = field in (p.hero ?? {}) ? p.hero[field] : null;
    if (val && String(val).length > max) errors.push(`kit/content/${id}.json: hero.${field} is ${String(val).length} characters (>${max}) — overflow risk`);
  }
  for (const proof of p.proofs ?? []) if (proof.length > LIMITS.proof) warnings.push(`kit/content/${id}.json: proof "${proof}" uzun (>${LIMITS.proof})`);
  for (const logo of p.logos ?? []) if (logo.length > LIMITS.logo) warnings.push(`kit/content/${id}.json: logo "${logo}" uzun (>${LIMITS.logo})`);
}

// atama
const usage = new Map([...packs.keys()].map((id) => [id, 0]));
const styles = fs
  .readdirSync(STYLES_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'tokens.json')))
  .map((d) => ({ dirName: d.name, tokens: JSON.parse(fs.readFileSync(path.join(STYLES_DIR, d.name, 'tokens.json'), 'utf8')) }))
  .sort((a, b) => parseInt(a.dirName, 10) - parseInt(b.dirName, 10));

for (const s of styles) {
  const ind = s.tokens.industries;
  if (!Array.isArray(ind) || !ind.length) {
    errors.push(`${s.dirName}: industries[] yok — node kit/assign-content.mjs --apply`);
    continue;
  }
  if (!packs.has(ind[0])) errors.push(`${s.dirName}: no content pack for industries[0] "${ind[0]}"`);
  else usage.set(ind[0], usage.get(ind[0]) + 1);
  for (const id of ind) if (!packs.has(id)) errors.push(`${s.dirName}: industries[] "${id}" is undefined`);
}
for (const [id, n] of usage) if (n < 3) errors.push(`kit/content/${id}.json: used by ${n} styles only (dead pack, at least 3)`);

// templates: no literal demo text, placeholders must match
const COPY_RE = /__COPY_([A-Z0-9_]+)__/g;
const provided = new Set();
for (const [, key] of fs.readFileSync(path.join(ROOT, 'kit', 'render', 'render-shots.mjs'), 'utf8').matchAll(/__COPY_([A-Z0-9_]+)__:/g)) provided.add(key);
const partialFiles = fs.readdirSync(PARTIALS).filter((f) => /^hero-.*\.html$/.test(f));
const HARD_COPY = /Your product team|Start free|No card needed|Watch the demo|Sprint plan|Team workspace/;
for (const f of [...partialFiles, 'page.html']) {
  const p = f.endsWith('.html') && !f.startsWith('hero-') ? path.join(ROOT, 'kit', 'render', f) : path.join(PARTIALS, f);
  if (!fs.existsSync(p)) {
    errors.push(`missing template: ${path.relative(ROOT, p)}`);
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  if (HARD_COPY.test(html)) errors.push(`${path.relative(ROOT, p)}: literal demo copy left in place (use __COPY_*__)`);
  for (const [, key] of html.matchAll(COPY_RE)) {
    if (!provided.has(key)) errors.push(`${path.relative(ROOT, p)}: no render-shots value for __COPY_${key}__`);
  }
}
if (partialFiles.length < 8) errors.push(`${partialFiles.length} hero partials (8 archetypes expected)`);

const covered = [...usage.values()].filter((n) => n > 0).length;
if (JSON_OUT) console.log(JSON.stringify({ packs: packs.size, styles: styles.length, usage: [...usage], errors, warnings }, null, 2));
else {
  for (const w of warnings) console.log(`  ! ${w}`);
  for (const e of errors) console.log(`  × ${e}`);
  console.log(
    `content layer · ${styles.length} styles · ${covered}/${packs.size} sectors in use · ` +
      `${errors.length} errors · ${warnings.length} warnings${errors.length ? '' : ' — clean'}`,
  );
}
process.exit(errors.length ? 1 : 0);
