#!/usr/bin/env node
/**
 * kit/check-schema.mjs — schema v2 integrity gate (deepened version of build-gallery).
 *
 * build-gallery only checks "is there a file / is there a section / is the token text the same".
 * This gate looks at the **consistency** of the data:
 * - tokens.json required fields and scale contract (spacing 4…64, radius, typography)
 * - three copy parity: tokens.json palette/.css ⟺ token-block.css ⟺ tokens.css (no silent drift)
 * - scene coverage: single scene in manifest (01-page.png, 1280×2400)
 * - v6 convention: palette.dark and motion will not come back (dark mode + motion removed)
 * - are the neighboring style slugs in the catalogue, are there any contradictions?
 * - style.md: "In one sentence" length, meta table keys, AI brief code block, ≥3 https references
 * - must/mustNot ≥3, typography.forbidden full, refs format
 *
 * Usage:
 * node kit/check-schema.mjs [--json] [--strict]
 * If there is an error, exit 1. --strict warns also count as errors.*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pairsToMap, parsePairs, readBlock } from './lib/css-block.mjs';
import { CORE_PALETTE_TARGETS, deriveCorePalette } from './lib/palette.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MANIFEST = path.join(ROOT, 'kit', 'shots.manifest.json');
const TOKENS_CSS = path.join(ROOT, 'kit', 'tokens.css');
const CORE_JSON = path.join(ROOT, 'kit', 'shots.core.json');
/** Scenes that must be kept in the repo (kit/shots.core.json); the rest is kit/.shots-cache/ (generated).*/
const CORE_FILES = (() => {
  try {
    return JSON.parse(fs.readFileSync(CORE_JSON, 'utf8')).files ?? [];
  } catch {
    return [];
  }
})();
const LAYOUTS = (() => {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'render', 'layouts.json'), 'utf8'));
  } catch {
    return { heroes: [], navs: [], densities: [] };
  }
})();
const HERO_IDS = new Set(LAYOUTS.heroes.map((h) => h.id));
const NAV_IDS = new Set(LAYOUTS.navs.map((n) => n.id));
const DENSITY_IDS = new Set(LAYOUTS.densities.map((d) => d.id));
const JSON_OUT = process.argv.includes('--json');
const STRICT = process.argv.includes('--strict');

const CSS_KEY = {
  bg: 'bg',
  bg2: 'bg-2',
  surface: 'surface',
  surface2: 'surface-2',
  ink: 'ink',
  inkSoft: 'ink-soft',
  inkFaint: 'ink-faint',
  accent: 'accent',
  accentInk: 'accent-ink',
  line: 'line',
};
const SPACING_STEPS = ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'];
const REQUIRED_PALETTE = ['bg', 'bg2', 'surface', 'surface2', 'ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line'];
const REQUIRED_SCALE = ['label', 'caption', 'body', 'h2'];
const EXPECTED_SCALE = ['small', 'h3', 'h1', 'h1Mobile'];
const REQUIRED_COMPONENTS = ['button', 'input', 'card', 'nav', 'tableRow', 'toast'];
const EXPECTED_COMPONENTS = ['chip', 'modal', 'chart'];
const REQUIRED_META = ['Feeling', 'Best for', 'Avoid', 'Family'];

const errors = [];
const warnings = [];
const E = (m) => errors.push(m);
const W = (m) => warnings.push(m);

const read = (p) => fs.readFileSync(p, 'utf8');

function listStyles() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

/**
 * Reads three copies of a style: token-block.css (source) · tokens.css (generated) · tokens.json.css (digest).
 * Three of them stand in separate places; If parity is not checked, silent drift occurs.*/
function readTokenSources(dirName, slug, tokensCss) {
  const out = { fragmentLight: null, cssLight: null, jsonCssLight: null };

  const fragmentPath = path.join(STYLES_DIR, dirName, 'token-block.css');
  if (fs.existsSync(fragmentPath)) {
    const css = read(fragmentPath);
    const light = readBlock(css, `[data-style="${slug}"]`);
    if (light) out.fragmentLight = pairsToMap(parsePairs(light));
  }

  const cssLightBlock = readBlock(tokensCss, `\n[data-style="${slug}"]`) ?? readBlock(tokensCss, `[data-style="${slug}"]`);
  if (cssLightBlock) out.cssLight = pairsToMap(parsePairs(cssLightBlock));

  const jsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
  if (fs.existsSync(jsonPath)) {
    const t = JSON.parse(read(jsonPath));
    if (typeof t.css === 'string' && t.css.trim().startsWith('[')) {
      const block = readBlock(t.css, `[data-style="${slug}"]`);
      if (block) out.jsonCssLight = pairsToMap(parsePairs(block));
    }
  }

  return out;
}

/** compares two dictionaries; If there is a difference, it reports with E()*/
function compareVars(tag, label, a, b, keys) {
  let diffs = 0;
  for (const key of keys) {
    const va = a[key];
    const vb = b[key];
    if (va === undefined && vb === undefined) continue;
    if (va === undefined) {
      E(`${tag}: ${label} --${key} exists only in the second source (${vb})`);
      diffs++;
    } else if (vb === undefined) {
      E(`${tag}: ${label} --${key} exists only in the first source (${va})`);
      diffs++;
    } else if (String(va).replace(/\s+/g, ' ') !== String(vb).replace(/\s+/g, ' ')) {
      E(`${tag}: ${label} --${key}: "${va}" ≠ "${vb}"`);
      diffs++;
    }
  }
  return diffs;
}

function cssLightSlugs() {
  const css = read(TOKENS_CSS);
  const slugs = new Set();
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]/gm)) slugs.add(m[1]);
  return slugs;
}

function checkStyle(dirName, ctx) {
  const slug = dirName.replace(/^\d+-/, '');
  const dir = path.join(STYLES_DIR, dirName);
  const md = read(path.join(dir, 'style.md'));
  const jsonPath = path.join(dir, 'tokens.json');
  const tag = `${dirName}`;

  if (!ctx.light.has(slug)) E(`${tag}: no [data-style="${slug}"] block in kit/tokens.css`);

  /* ---- style.md ---- */
  const oneLine = md.match(/^>\s+\*\*In one sentence:\*\*\s+(.+)$/m);
  if (!oneLine) E(`${tag}/style.md: missing "**In one sentence:**" line`);
  else if (oneLine[1].trim().length > 170) {
    W(`${tag}/style.md: "in one sentence" is ${oneLine[1].trim().length} characters (>170) — shorten it`);
  }

  for (const key of REQUIRED_META) {
    if (!new RegExp(`^\\|\\s+\\*\\*${key}\\*\\*`, 'm').test(md)) {
      E(`${tag}/style.md: missing **${key}** row in the meta table`);
    }
  }
  if (!/\*\*Token\*\*/.test(md.slice(0, 4000))) E(`${tag}/style.md: missing **Token** link in the meta table`);

  const briefIdx = md.indexOf('## AI brief');
  if (briefIdx < 0) E(`${tag}/style.md: missing "## AI brief" section`);
  else {
    const rest = md.slice(briefIdx);
    if (!/```[\s\S]*?```/.test(rest)) E(`${tag}/style.md: AI brief has no copyable code block`);
  }

  const refsSection = md.split(/^## References$/m)[1]?.split(/^## /m)[0] ?? '';
  const refRows = refsSection.split('\n').filter((l) => /^\|\s*https?:\/\//.test(l.trim()));
  if (refRows.length < 3) E(`${tag}/style.md: "References" must contain at least 3 https rows (${refRows.length})`);

  /* ---- shots ---- */
  const shotsDir = path.join(dir, 'shots');
  const shots = fs.existsSync(shotsDir)
    ? fs.readdirSync(shotsDir).filter((f) => f.toLowerCase().endsWith('.png'))
    : [];
  const requiredScenes = CORE_FILES.length ? CORE_FILES : ctx.scenes;
  for (const scene of requiredScenes) {
    if (!shots.includes(scene)) E(`${tag}: missing shots/${scene} (required ${requiredScenes.length} scenes)`);
  }
  const extraShots = shots.filter((f) => !requiredScenes.includes(f));
  if (extraShots.length) W(`${tag}: ${extraShots.length} images in shots/ outside the contract (${extraShots.slice(0, 3).join(', ')})`);


  if (!fs.existsSync(jsonPath)) {
    E(`${tag}: missing tokens.json (schema v2 required)`);
    return { slug, scenes: shots.length };
  }
  const t = JSON.parse(read(jsonPath));

  if (t.slug !== slug) E(`${tag}: tokens.json slug "${t.slug}" does not match the folder`);
  if ((dirName.match(/^(\d+)-/)?.[1] ?? '') !== t.num && t.num !== dirName.slice(0, 2)) E(`${tag}: tokens.json num "${t.num}" does not match the folder prefix`);
  if (!t.name) E(`${tag}: tokens.json name is empty`);
  if (!(t.version >= 2)) E(`${tag}: tokens.json version ${t.version} — schema v2 expected`);

  /*---- scheme v3 · composition axis (layout) ----*/
  if (t.version >= 3) {
    const l = t.layout;
    if (!l || typeof l !== 'object') {
      E(`${tag}: tokens.json layout { hero, nav, density } is required for schema v3`);
    } else {
      if (!HERO_IDS.has(l.hero)) E(`${tag}: layout.hero "${l.hero}" is not in kit/render/layouts.json`);
      if (!NAV_IDS.has(l.nav)) E(`${tag}: layout.nav "${l.nav}" is not in kit/render/layouts.json`);
      if (!DENSITY_IDS.has(l.density)) E(`${tag}: layout.density "${l.density}" is not a valid density (${[...DENSITY_IDS].join('|')})`);
      const partial = path.join(ROOT, 'kit', 'render', 'partials', `hero-${l.hero}.html`);
      if (HERO_IDS.has(l.hero) && !fs.existsSync(partial)) E(`${tag}: no partial for layout.hero "${l.hero}" (${path.basename(partial)})`);
      const navPartial = path.join(ROOT, 'kit', 'render', 'partials', `nav-${l.nav}.html`);
      if (NAV_IDS.has(l.nav) && !fs.existsSync(navPartial)) E(`${tag}: no partial for layout.nav "${l.nav}" (${path.basename(navPartial)})`);
    }
  } else {
    W(`${tag}: schema v${t.version} — missing composition axis (layout); schema v3 expected`);
  }

  const palette = t.palette ?? {};
  for (const key of REQUIRED_PALETTE) if (!(key in palette)) E(`${tag}: palette.${key} missing`);
  const seeds = t.paletteSeeds ?? {};
  for (const key of REQUIRED_PALETTE) if (!(key in seeds)) E(`${tag}: paletteSeeds.${key} missing`);
  const targets = t.paletteTargets ?? {};
  for (const key of Object.keys(CORE_PALETTE_TARGETS)) {
    if (typeof targets[key] !== 'number' || targets[key] <= 0) E(`${tag}: paletteTargets.${key} must be a positive number`);
  }
  if (REQUIRED_PALETTE.every((key) => key in seeds)) {
    try {
      const derived = deriveCorePalette(seeds, targets);
      for (const key of REQUIRED_PALETTE) {
        if (derived[key] !== palette[key]) E(`${tag}: palette.${key} does not match the seed/target result (expected ${derived[key]})`);
      }
    } catch (error) {
      E(`${tag}: could not resolve the seed palette (${error.message})`);
    }
  }

  /*v6: removed dark mode and movement — if they come back, the door is red.*/
  if ('dark' in palette) E(`${tag}: palette.dark is banned in v6 (dark mode removed)`);
  if ('motion' in t) E(`${tag}: motion is banned in v6 (motion layer removed)`);

  /*---- three copy parity: token-block.css ⇄ tokens.css ⇄ tokens.json.css ----*/
  const src = readTokenSources(dirName, slug, ctx.tokensCss);
  if (!src.fragmentLight) {
    E(`${tag}: token-block.css missing or the light block is incomplete — the fragment must be the single source`);
  } else {
    // 1) tokens.json palette (machine source) ⇄ fragment
    const paletteVars = {};
    for (const key of Object.keys(CSS_KEY)) {
      const value = palette[key];
      if (value == null || typeof value !== 'string') continue;
      paletteVars[`--${CSS_KEY[key]}`] = value;
    }
    compareVars(tag, 'palette ⇄ token-block.css', paletteVars, src.fragmentLight, Object.keys(paletteVars));

    // 2) fragment ⇄ tokens.css (generated)
    if (src.cssLight) {
      const keys = new Set([...Object.keys(src.fragmentLight), ...Object.keys(src.cssLight)]);
      compareVars(tag, 'token-block.css ⇄ tokens.css', src.fragmentLight, src.cssLight, [...keys]);
    } else {
      E(`${tag}: no light block in tokens.css`);
    }

    // 3) tokens.json.css ⇄ fragment (third copy; only keys declared in json are checked)
    if (src.jsonCssLight) {
      compareVars(tag, 'tokens.json.css ⇄ token-block.css', src.jsonCssLight, src.fragmentLight, Object.keys(src.jsonCssLight));
    }

    // 4) shape.radius ⇄ fragment
    for (const [field, cssKey] of [['radius', '--radius'], ['radiusLg', '--radius-lg']]) {
      const expected = String(t.shape?.[field] ?? '');
      const actual = src.fragmentLight[cssKey];
      if (expected && actual && expected !== actual) E(`${tag}: shape.${field}=${expected} conflicts with token-block ${cssKey}: ${actual}`);
    }
  }

  const ty = t.typography ?? {};
  for (const k of ['display', 'body', 'mono']) if (!ty[k]) E(`${tag}: typography.${k} missing`);
  for (const k of REQUIRED_SCALE) if (!(ty.scale ?? {})[k]) E(`${tag}: typography.scale.${k} missing`);
  for (const k of EXPECTED_SCALE) if (!(ty.scale ?? {})[k]) W(`${tag}: typography.scale.${k} missing (expected scale)`);
  if (!Array.isArray(ty.forbidden) || ty.forbidden.length < 1) W(`${tag}: typography.forbidden is empty (the bans list must be written)`);
  if (!ty.measure) W(`${tag}: typography.measure missing`);

  const spacingScale = (t.spacing?.scale ?? []).map((s) => String(s).replace(/\s/g, ''));
  if (spacingScale.length !== SPACING_STEPS.length || spacingScale.some((v, i) => v !== SPACING_STEPS[i])) {
    W(`${tag}: spacing.scale differs from the eight-step contract (${spacingScale.join('/') || 'empty'})`);
  }

  const radius = String(t.shape?.radius ?? '');
  const radiusLg = String(t.shape?.radiusLg ?? '');
  if (!radius || !radiusLg) E(`${tag}: shape.radius / shape.radiusLg missing`);

  const comps = t.components ?? {};
  for (const k of REQUIRED_COMPONENTS) if (!comps[k]) E(`${tag}: components.${k} missing`);
  for (const k of EXPECTED_COMPONENTS) if (!comps[k]) W(`${tag}: components.${k} missing (recipe incomplete)`);

  for (const key of ['must', 'mustNot']) {
    const arr = t[key];
    if (!Array.isArray(arr) || arr.length < 3) E(`${tag}: ${key} must have at least 3 items`);
  }

  const nb = t.neighbors ?? {};
  for (const key of ['compatible', 'forbidden']) {
    const list = nb[key];
    if (!Array.isArray(list) || list.length < 2) {
      W(`${tag}: neighbors.${key} should list at least 2 slugs`);
      continue;
    }
    for (const other of list) {
      if (!ctx.slugs.has(other)) E(`${tag}: neighbors.${key} "${other}" is not in the catalog`);
    }
  }
  for (const other of nb.compatible ?? []) {
    if ((nb.forbidden ?? []).includes(other)) E(`${tag}: "${other}" is listed as both compatible and forbidden`);
  }

  const refs = t.refs ?? [];
  if (refs.length < 3) E(`${tag}: refs must have at least 3 entries (${refs.length})`);
  for (const r of refs) {
    if (!/^https:\/\//.test(r.url ?? '')) E(`${tag}: refs url must be https (${r.url})`);
    if (!r.label || !r.use) W(`${tag}: refs "${r.url}" is missing label/use`);
  }

  return { slug, scenes: shots.length };
}

function main() {
  const dirs = listStyles();
  if (!dirs.length) {
    console.log('scheme: no styles under styles/');
    return 1;
  }
  const manifest = JSON.parse(read(MANIFEST));
  const scenes = (manifest.scenes ?? []).map((s) => s.file);
  const slugs = new Set(dirs.map((d) => d.replace(/^\d+-/, '')));


  const ctx = { scenes, slugs, light: cssLightSlugs(), tokensCss: read(TOKENS_CSS) };
  const coverage = dirs.map((d) => checkStyle(d, ctx));

  // Blocks in tokens.css without a folder (dead token)
  for (const slug of ctx.light) {
    if (!slugs.has(slug)) E(`kit/tokens.css: block "${slug}" exists but the folder styles/${slug} is missing`);
  }

  const summary = {
    styles: dirs.length,
    scenes: scenes.length,
    slots: dirs.length * scenes.length,
    filled: coverage.reduce((n, c) => n + c.scenes, 0),
    errors,
    warnings,
  };

  if (JSON_OUT) {
    console.log(JSON.stringify(summary, null, 2));
    return errors.length || (STRICT && warnings.length) ? 1 : 0;
  }

  console.log(
    `schema gate · ${dirs.length} styles · ${scenes.length} scenes · ${summary.filled}/${summary.slots} filled`,
  );
  for (const w of warnings) console.log('  ! ' + w);
  for (const e of errors) console.log('  × ' + e);
  console.log(
    `\n${dirs.length} styles · ${errors.length} errors · ${warnings.length} warnings` +
      (errors.length === 0 && (!STRICT || warnings.length === 0) ? ' — clean' : ''),
  );
  return errors.length || (STRICT && warnings.length) ? 1 : 0;
}

process.exit(main());
