#!/usr/bin/env node
/**
 * kit/apply-fragments.mjs — combines style fragments **idempotent** into shared files.
 *
 * Resources (in style folder):
 * styles/NN-slug/token-block.css → kit/tokens.css (light + dark blocks, in num order)
 * styles/NN-slug/shots.config.fragment.mjs → kit/render/shots.config.mjs (STYLES map)
 * styles/NN-slug/keywords.json → kit/gallery.data.mjs (KEYWORDS map)
 *
 * Generated regions stop between `apply-fragments:*` signs; second run
 * writes the same bytes (idempotent). Text outside the sign (existing blocks 1-45,
 * hand-written entries) are untouched.
 *
 * Families: kit/families.json single source; This script is 1-145 seamless/conflict-free
 * and build-gallery.mjs + verify that report.mjs read the file.
 *
 * Usage:
 * node kit/apply-fragments.mjs --check # synchronous? otherwise exit 1
 * node kit/apply-fragments.mjs --apply # write regions
 * node kit/apply-fragments.mjs --check --json # machine-readable output
 * node kit/apply-fragments.mjs --check --styles 96.97 # report these styles only
 *
 * Note: --styles only narrows the report/audit scope; --apply always applies to the region
 * regenerates entire fragments (partial writes would produce drift).*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parsePairs, readBlock } from './lib/css-block.mjs';
import { replaceObjectRegion } from './lib/object-region.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const KIT = path.join(ROOT, 'kit');
const TOKENS_CSS = path.join(KIT, 'tokens.css');
const SHOTS_CONFIG = path.join(KIT, 'render', 'shots.config.mjs');
const GALLERY_DATA = path.join(KIT, 'gallery.data.mjs');
const FAMILIES_JSON = path.join(KIT, 'families.json');
const FAMILY_CONSUMERS = [SHOTS_CONFIG.replace(/render[\\/]shots\.config\.mjs$/, 'build-gallery.mjs'), path.join(KIT, 'report.mjs')];

const ARGV = process.argv.slice(2);
const APPLY = ARGV.includes('--apply');
const CHECK = ARGV.includes('--check');
const JSON_OUT = ARGV.includes('--json');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  const list = (ARGV[i + 1] ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (/^\d+$/.test(s) ? String(parseInt(s, 10)) : s));
  return new Set(list);
})();

const MARKS = {
  light: ['/* >>> apply-fragments:light >>> */', '/* <<< apply-fragments:light <<< */'],
  styles: ['  /* >>> apply-fragments:styles >>> */', '  /* <<< apply-fragments:styles <<< */'],
  keywords: ['  /* >>> apply-fragments:keywords >>> */', '  /* <<< apply-fragments:keywords <<< */'],
};

/** The light block area goes right above the dark mode header, the dark block area goes at the end of the file.*/
const LIGHT_ANCHOR = '/*===========================================================\nDark mod palettes (data-theme=dark)';
const STYLES_ANCHOR = '\n};\n\nexport function configFor(slug) {';
const KEYWORDS_ANCHOR = '\n};\n\nexport const DEMOS = {';

const read = (p) => fs.readFileSync(p, 'utf8');

/* ---------------------------------------------------------------- exploration*/

function discoverStyles() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+-[a-z0-9-]+$/.test(d.name))
    .map((d) => ({ dirName: d.name, num: parseInt(d.name, 10), slug: d.name.replace(/^\d+-/, '') }))
    .sort((a, b) => a.num - b.num);
}

/*------------------------------------------------------------- parsing*/


function readConfigSource(frag) {
  const i = frag.indexOf('export const CONFIG = ');
  if (i < 0) throw new Error('export const CONFIG not found');
  const src = frag.slice(i + 'export const CONFIG = '.length).replace(/;\s*$/, '').trim();
  if (!src.startsWith('{') || !src.endsWith('}')) throw new Error('CONFIG is not an object immutable');
  return src;
}

function readTags(p) {
  const j = JSON.parse(read(p));
  const tags = Array.isArray(j) ? j : (j.labels ?? j.keywords ?? j.tags ?? null);
  if (!Array.isArray(tags) || tags.length === 0) throw new Error(`no tag array in keywords.json: ${path.basename(path.dirname(p))}`);
  return tags.map((t) => String(t));
}

function readFragment(style) {
  const dir = path.join(STYLES_DIR, style.dirName);
  const paths = {
    css: path.join(dir, 'token-block.css'),
    config: path.join(dir, 'shots.config.fragment.mjs'),
    keywords: path.join(dir, 'keywords.json'),
  };
  for (const p of Object.values(paths)) {
    if (!fs.existsSync(p)) throw new Error(`missing file: ${path.relative(ROOT, p)}`);
  }
  const css = read(paths.css);
  const light = readBlock(css, `[data-style="${style.slug}"]`);
  if (!light) throw new Error(`no light block: ${style.dirName}/token-block.css`);
  const tags = readTags(paths.keywords);
  return {
    ...style,
    lightPairs: parsePairs(light),
    config: readConfigSource(read(paths.config)),
    tags,
  };
}

/*---------------------------------------------------------------- production*/

function header(dirName) {
  const label = `${dirName} `;
  const width = Math.max(3, 66 - label.length);
  return `/* ---- ${label}${'-'.repeat(width)} */`;
}

function renderCssBlock(dirName, slug, pairs) {
  const selector = `[data-style="${slug}"]`;
  const body = pairs.map(([k, v]) => `  ${k}: ${v};`).join('\n');
  return `${header(dirName)}\n${selector} {\n${body}\n}`;
}

function renderStyleEntry(slug, src) {
  const inner = src.trim();
  const lines = inner
    .slice(1, -1)
    .replace(/^\n/, '')
    .replace(/\n$/, '')
    .split('\n');
  const out = [`  '${slug}': {`];
  for (const line of lines) {
    const t = line.replace(/\s+$/, '');
    out.push(t === '' ? '' : `  ${t}`);
  }
  out.push('  },');
  return out.join('\n');
}

function renderKeywordEntry(slug, tags) {
  const lines = tags.map((t) => `    ${JSON.stringify(t)},`);
  return [`  ${JSON.stringify(slug)}: [`, ...lines, '  ],'].join('\n');
}

function region([open, close], chunks) {
  return [open, ...chunks, close].join('\n');
}

/** When adding a new region to an object literal, if the last previous entry does not end with a comma, it completes the comma.*/
function ensureComma(head) {
  if (/,\s*$/.test(head)) return head;
  const m = head.match(/^([\s\S]*?\S)(\s*)$/);
  if (!m) return head;
  return `${m[1]},${m[2] || '\n'}`;
}

/** Updates the region between beacons; otherwise inserts before `anchor` (or at the end of the file). */
function upsertRegion(src, marks, content, anchor, gap, opts = {}) {
  const [open, close] = marks;
  const oi = src.indexOf(open);
  const ci = src.indexOf(close);
  const fix = (head) => (opts.comma ? ensureComma(head) : head);
  if (oi >= 0 && ci > oi) return fix(src.slice(0, oi)) + content + src.slice(ci + close.length);
  if (anchor === null) return `${fix(src.replace(/\s+$/, ''))}\n\n${content}\n`;
  const ai = src.indexOf(anchor);
  if (ai < 0) throw new Error(`missing insertion anchor: ${anchor.split('\n')[0]}`);
  return fix(src.slice(0, ai)) + content + gap + src.slice(ai);
}

/*------------------------------------------------------------------------------- family door*/

function checkFamilies() {
  const problems = [];
  let families = [];
  if (!fs.existsSync(FAMILIES_JSON)) {
    return { ok: false, problems: ['kit/families.json yok'], families, covered: 0 };
  }
  const j = JSON.parse(read(FAMILIES_JSON));
  families = (j.families ?? []).slice().sort((a, b) => a.from - b.from);
  if (!families.length) problems.push('families.json: families is empty');
  let expected = 1;
  for (const f of families) {
    if (!f.name) problems.push(`missing family name: ${JSON.stringify(f)}`);
    if (f.to < f.from) problems.push(`invalid range: ${f.name} ${f.from}-${f.to}`);
    if (f.from !== expected) {
      problems.push(
        f.from < expected
          ? `overlap: ${f.name} ${f.from}-${f.to} (the previous range runs to ${expected - 1})`
          : `gap: ${expected}-${f.from - 1} is not covered (${f.name} starts at ${f.from})`,
      );
    }
    expected = f.to + 1;
  }
  const covered = expected - 1;
  const nums = new Set(discoverStyles().map((s) => s.num));
  for (let n = 1; n <= covered; n += 1) if (!nums.has(n)) problems.push(`no style number ${n} in styles/`);
  const orphan = [...nums].filter((n) => n > covered);
  if (orphan.length) problems.push(`style numbers outside any family band: ${orphan.join(', ')}`);
  for (const p of FAMILY_CONSUMERS) {
    const rel = path.relative(ROOT, p);
    if (!fs.existsSync(p)) {
      problems.push(`${rel} yok`);
      continue;
    }
    if (!read(p).includes('families.json')) problems.push(`${rel} does not read families.json`);
  }
  return { ok: problems.length === 0, problems, families, covered };
}

/* ------------------------------------------------------------------ main */

/** v6: The old dark mode section at the end of tokens.css is purged in production (dark mode removed).*/
function stripDarkSection(css) {
  const i = css.indexOf('   Dark mode palettes (data-theme=dark)');
  if (i < 0) return css;
  const start = css.lastIndexOf('/* ===', i);
  if (start < 0) return css;
  return css.slice(0, start).replace(/\s*$/, '\n');
}

function main() {
  if (!APPLY && !CHECK) {
    console.log('usage: node kit/apply-fragments.mjs --check | --apply [--styles a,b] [--json]');
    return 0;
  }

  const styles = discoverStyles();
  const errors = [];
  const fragments = [];
  for (const s of styles) {
    const hasFragment = fs.existsSync(path.join(STYLES_DIR, s.dirName, 'token-block.css'));
    if (!hasFragment) continue;
    try {
      fragments.push(readFragment(s));
    } catch (e) {
      errors.push(`${s.dirName}: ${e.message}`);
    }
  }
  if (errors.length) {
    for (const e of errors) console.log(`× ${e}`);
    if (errors.length > 5) return 1;
  }

  const scoped = ONLY ? fragments.filter((f) => ONLY.has(f.slug) || ONLY.has(String(f.num))) : fragments;
  const unknown = ONLY ? [...ONLY].filter((x) => !fragments.some((f) => f.slug === x || String(f.num) === x)) : [];
  if (unknown.length) console.log(`! bilinmeyen --styles girdisi: ${unknown.join(', ')}`);

  const css = read(TOKENS_CSS);
  const shots = read(SHOTS_CONFIG);
  const gallery = read(GALLERY_DATA);

  const lightContent = region(MARKS.light, fragments.map((f) => renderCssBlock(f.dirName, f.slug, f.lightPairs)));
  const stylesContent = region(MARKS.styles, fragments.map((f) => renderStyleEntry(f.slug, f.config)));
  const keywordsContent = region(MARKS.keywords, fragments.map((f) => renderKeywordEntry(f.slug, f.tags)));

  const nextCss = stripDarkSection(upsertRegion(css, MARKS.light, lightContent, LIGHT_ANCHOR, '\n\n'));
  let nextShots = replaceObjectRegion(shots, 'export const STYLES = {', STYLES_ANCHOR, stylesContent);
  if (!nextShots.includes("import { normalizeCss } from '../lib/css-cascade.mjs';")) {
    nextShots = nextShots.replace('export const STYLES = {', "import { normalizeCss } from '../lib/css-cascade.mjs';\n\nexport const STYLES = {");
  }
  nextShots = nextShots.replace('return { ...DEFAULTS, ...(STYLES[slug] ?? {}) };', "const config = { ...DEFAULTS, ...(STYLES[slug] ?? {}) };\n  return { ...config, extraCss: normalizeCss(config.extraCss ?? '') };");
  const nextGallery = upsertRegion(gallery, MARKS.keywords, keywordsContent, KEYWORDS_ANCHOR, '\n', { comma: true });

  const braces = (s) => (s.match(/\{/g) ?? []).length - (s.match(/\}/g) ?? []).length;
  if (braces(nextCss) !== 0) {
    console.log(`× tokens.css brace balance is broken (difference ${braces(nextCss)}) — not written`);
    return 1;
  }

  const families = checkFamilies();
  for (const p of families.problems) console.log(`× families: ${p}`);

  const missing = { tokens: [], shots: [], keywords: [] };
  for (const f of scoped) {
    const light = renderCssBlock(f.dirName, f.slug, f.lightPairs);
    if (!css.includes(light)) missing.tokens.push(f.slug);
    if (!shots.includes(renderStyleEntry(f.slug, f.config))) missing.shots.push(f.slug);
    if (!gallery.includes(renderKeywordEntry(f.slug, f.tags))) missing.keywords.push(f.slug);
  }

  const report = {
    styles: styles.length,
    fragments: fragments.length,
    scoped: scoped.length,
    families: { count: families.families.length, covered: families.covered, ok: families.ok },
    files: {
      'kit/tokens.css': { synced: nextCss === css, missing: missing.tokens },
      'kit/render/shots.config.mjs': { synced: nextShots === shots, missing: missing.shots },
      'kit/gallery.data.mjs': { synced: nextGallery === gallery, missing: missing.keywords },
    },
    errors,
  };
  const inSync =
    errors.length === 0 &&
    families.ok &&
    report.files['kit/tokens.css'].synced &&
    report.files['kit/render/shots.config.mjs'].synced &&
    report.files['kit/gallery.data.mjs'].synced;

  if (APPLY) {
    const writes = [
      [TOKENS_CSS, css, nextCss],
      [SHOTS_CONFIG, shots, nextShots],
      [GALLERY_DATA, gallery, nextGallery],
    ];
    for (const [file, before, after] of writes) {
      if (before === after) continue;
      fs.writeFileSync(file, after);
    }
    if (JSON_OUT) {
      console.log(JSON.stringify({ ...report, applied: writes.filter(([, a, b]) => a !== b).map(([f]) => path.relative(ROOT, f)) }, null, 2));
    } else {
      console.log(`apply · ${fragments.length} fragments · ${styles.length} styles · ${families.families.length} families (1-${families.covered})`);
      for (const [file, before, after] of writes) {
        console.log(`  ${before === after ? 'did not change' : 'was written'} ${path.relative(ROOT, file)}`);
      }
    }
    return inSync ? 0 : errors.length ? 1 : 0;
  }

  if (JSON_OUT) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(`check · ${fragments.length} fragments · ${styles.length} styles · ${families.families.length} families (1-${families.covered})`);
    for (const [file, info] of Object.entries(report.files)) {
      const state = info.synced ? 'synced' : `MISSING (${info.missing.length})`;
      console.log(`  ${state.padEnd(16)} ${file}`);
      if (info.missing.length) console.log(`    ${info.missing.slice(0, 8).join(', ')}${info.missing.length > 8 ? ` … +${info.missing.length - 8}` : ''}`);
    }
    console.log(inSync ? 'result: clean' : 'result: not synchronous (--apply)');
  }
  return inSync ? 0 : 1;
}

process.exit(main());
