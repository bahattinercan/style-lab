#!/usr/bin/env node
/**
 * kit/build-gallery.mjs — generates from styles/<num-slug>/style.md files:
 * 1) kit/gallery.html (visual catalog + lightbox)
 * 2) kit/styles.index.json (AI entry point: summary of 34 styles)
 *
 * Usage:
 * node kit/build-gallery.mjs # generate
 * node kit/build-gallery.mjs --check # verify, exit 1 if there are errors
 *
 * Verification scope:
 * - there is style.md in each style folder, the title/token block is read
 * - style.md token block same as kit/tokens.css (no drift)
 * - shots/ contains at least 4 images
 * - If there is tokens.json (scheme v2) all mandatory sections are present
 * - Resolving styles/... links in README*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_DEMO, DEMOS, KEYWORDS } from './gallery.data.mjs';
import { galleryHtml } from './gallery.template.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');
const KIT_DIR = path.join(ROOT, 'kit');
const OUT_HTML = path.join(KIT_DIR, 'gallery.html');
const OUT_INDEX = path.join(KIT_DIR, 'styles.index.json');
const CHECK = process.argv.includes('--check');
const MIN_SHOTS = 1;
const MANIFEST_PATH = path.join(KIT_DIR, 'shots.manifest.json');
const MIN_PNG_BYTES = 12_000;
const SCENE_LABELS = (() => {
  try {
    const m = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    return Object.fromEntries((m.scenes ?? []).map((x) => [x.file, x.label]));
  } catch {
    return {};
  }
})();

/**
 * Family bands from a single source: kit/families.json (1-145 seamless, conflict-free).
 * Format: [name, first, last] — kit/apply-fragments.mjs validates this file.*/
const FAMILIES = (() => {
  const j = JSON.parse(fs.readFileSync(path.join(KIT_DIR, 'families.json'), 'utf8'));
  return (j.families ?? []).map((f) => [f.name, f.from, f.to]);
})();

/** v1 scheme: sections in all 34 styles today.*/
const CORE_SECTIONS = [
  'Visual signature',
  'Color',
  'Typography',
  'Surface and depth',
  'Token',
  'Screen recipes',
  'Traps',
  'Neighboring styles',
];

/** v2 schema: Additional sections sought in styles carrying tokens.json.*/
const V2_SECTIONS = [
  'Essence',
  'Mandatory rules',
  'Bans',
  'Component recipes',
  'Grid and space',
  'Visual language',
  'Accessibility',
  'Sample images',
  'References',
  'AI brief',
];

const CONTRACT = [
  ['--bg', 'page background'],
  ['--bg-2', 'secondary background'],
  ['--surface', 'card / panel'],
  ['--surface-2', 'secondary surface'],
  ['--ink', 'primary text'],
  ['--ink-soft', 'secondary text'],
  ['--ink-faint', 'faint / decorative text'],
  ['--accent', 'accent'],
  ['--accent-ink', 'text on accent'],
  ['--line', 'border'],
  ['--radius', 'corner'],
  ['--radius-lg', 'large corner'],
  ['--shadow', 'soft shadow'],
  ['--shadow-hard', 'hard shadow'],
  ['--font-display', 'title family'],
  ['--font-body', 'body family'],
  ['--font-mono', 'mono family'],
  ['--tracking', 'title letter spacing'],
  ['--blur', 'glass blur'],
  ['--grain', 'texture density'],
];

const failures = [];
const warnings = [];

function fail(msg) {
  failures.push(msg);
}

function warn(msg) {
  warnings.push(msg);
}

/* ---------------------------------------------------------------- okuma */

function listStyleDirs() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => fs.existsSync(path.join(STYLES_DIR, name, 'style.md')))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

function sectionsOf(md) {
  return [...md.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1].trim());
}

function parseStyle(dirName) {
  const file = path.join(STYLES_DIR, dirName, 'style.md');
  const md = fs.readFileSync(file, 'utf8');
  const head = md.match(/^#\s+(\d+)\s+·\s+(.+)$/m);
  if (!head) {
    fail(`${dirName}/style.md: missing the "# NN · Name" heading`);
    return null;
  }
  const slug = dirName.replace(/^\d+-/, '');
  const tag = md.match(/^>\s+\*\*In one sentence:\*\*\s+(.+)$/m);
  const meta = {};
  for (const m of md.matchAll(/^\|\s+\*\*(.+?)\*\*\s*\|(.+?)\|/gm)) {
    meta[m[1].trim()] = m[2].trim();
  }

  const declarations = md.matchAll(/\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)\}/g);
  let cssBlock = '';
  for (const decl of declarations) {
    if (decl[1] === slug) cssBlock = decl[2];
  }
  if (!cssBlock) fail(`${dirName}/style.md: no [data-style="${slug}"] block in the "Token" section`);

  const vars = {};
  for (const m of cssBlock.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
    vars[m[1]] = m[2].trim();
  }

  const shotsDir = path.join(STYLES_DIR, dirName, 'shots');
  const shots = fs.existsSync(shotsDir)
    ? fs.readdirSync(shotsDir).filter((f) => /\.(png|jpg|webp)$/i.test(f)).sort()
    : [];

  const tokensJsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
  const tokensJson = fs.existsSync(tokensJsonPath)
    ? JSON.parse(fs.readFileSync(tokensJsonPath, 'utf8'))
    : null;

  if (shots.length < MIN_SHOTS) {
    fail(`${dirName}: ${shots.length} images, at least ${MIN_SHOTS} expected (shots/)`);
  }

  const sections = sectionsOf(md);
  for (const s of CORE_SECTIONS) {
    if (!sections.some((x) => x.startsWith(s))) fail(`${dirName}/style.md: missing "${s}" section`);
  }
  if (tokensJson) {
    for (const s of V2_SECTIONS) {
      if (!sections.some((x) => x.startsWith(s))) fail(`${dirName}/style.md: missing v2 section "${s}"`);
    }
    for (const [key, val] of Object.entries(tokensJson.palette || {})) {
      const cssKey = key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());
      if (vars[cssKey] && vars[cssKey] !== val) {
        fail(`${dirName}: tokens.json ${key}=${val} conflicts with style.md ${vars[cssKey]}`);
      }
    }
  }

  return {
    dirName,
    num: head[1],
    name: head[2].trim(),
    slug,
    tag: tag ? tag[1].trim() : '',
    meta,
    md,
    vars,
    sections,
    shots,
    tokensJson,
  };
}

function tokensCssMap() {
  const css = fs.readFileSync(path.join(KIT_DIR, 'tokens.css'), 'utf8');
  const map = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    map[m[1]] = m[2];
  }
  return map;
}

const norm = (s) =>
  s
    .replace(/^\s*\[data-style="[a-z0-9-]+"\]\s*\{/, "")
    .replace(/\}\s*$/, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};:,])\s*/g, "$1")
    .trim();

function checkTokenDrift(styles) {
  const css = tokensCssMap();
  for (const s of styles) {
    const a = norm(s.tokensJson?.css ?? '');
    if (!a) continue; // the tokens.json css field is optional
    const b = norm(css[s.slug] ?? '');
    if (b && a !== b) fail(`${s.dirName}: the tokens.json css block differs from kit/tokens.css`);
  }
}

/** If manifest: scene count, size, blank frame and byte offset check.*/
function checkShotCatalog(styles) {
  if (!fs.existsSync(MANIFEST_PATH)) {
    warn('kit/shots.manifest.json missing — catalog check skipped (run render-shots)');
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const scenes = manifest.scenes ?? [];
  let filled = 0;
  let total = 0;
  for (const s of styles) {
    for (const sc of scenes) {
      total++;
      const png = path.join(STYLES_DIR, s.dirName, 'shots', sc.file);
      if (!fs.existsSync(png)) continue;
      filled++;
      const bytes = fs.statSync(png).size;
      if (bytes < MIN_PNG_BYTES) {
        fail(`${s.dirName}/shots/${sc.file}: ${(bytes / 1024).toFixed(0)} KB — blank/partial render`);
      }
      const rec = manifest.styles?.[s.slug]?.[sc.file];
      if (rec && Math.abs(rec.w - sc.w) + Math.abs(rec.h - sc.h) > 0) {
        fail(`${s.dirName}/shots/${sc.file}: manifest size ${rec.w}×${rec.h}, expected ${sc.w}×${sc.h}`);
      }
      if (rec && rec.bytes > 0 && Math.abs(rec.bytes - bytes) / rec.bytes > 0.4) {
        warn(`${s.dirName}/shots/${sc.file}: byte drift ${Math.round((Math.abs(rec.bytes - bytes) / rec.bytes) * 100)}% (rendered before fonts loaded?)`);
      }
    }
    // document ↔ file: Does every shot/xx.png mentioned in style.md really exist?
    for (const m of new Set([...s.md.matchAll(/shots\/([a-z0-9-]+\.png)/g)].map((x) => x[1]))) {
      if (!fs.existsSync(path.join(STYLES_DIR, s.dirName, 'shots', m))) {
        fail(`${s.dirName}/style.md: "${m}" does not exist in shots/`);
      }
    }
  }
  if (total) console.log(`catalog: ${filled}/${total} scenes filled (${scenes.length} scenes × ${styles.length} styles)`);
}

/** Hard-coded colors are prohibited in templates: all colors come via var(--…).*/
function checkTemplateColors() {
  const dir = path.join(ROOT, 'kit', 'render');
  if (!fs.existsSync(dir)) return;
  // Those starting with a dot are temporary render artifacts (.tmp-<slug>-page.html on gitignore),
  // It's not a template: don't let an unfinished round of renders accidentally break the door.
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.html') && !x.startsWith('.'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const hit = src.match(/#[0-9a-fA-F]{3,8}\b/);
    if (hit) fail(`kit/render/${f}: hard-coded colour "${hit[0]}" — use var(--…)`);
  }
}

/* --------------------------------------------------------------- render */

function familyOf(num) {
  const n = parseInt(num, 10);
  for (const [fam, lo, hi] of FAMILIES) if (n >= lo && n <= hi) return fam;
  return 'Other';
}

/** Hue bucket (exploration filter) from Accent color: warm / cool / green / neutral.*/
function hueBucket(hex) {
  const m = String(hex ?? '').trim().match(/^#?([0-9a-f]{6})$/i);
  if (!m) return 'notr';
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  if (sat < 0.16) return 'notr';
  let h = 0;
  if (max === r) h = ((g - b) / (max - min)) * 60;
  else if (max === g) h = (2 + (b - r) / (max - min)) * 60;
  else h = (4 + (r - g) / (max - min)) * 60;
  if (h < 0) h += 360;
  if (h < 55 || h >= 330) return 'sicak';
  if (h < 170) return 'yesil';
  return 'soguk';
}



function indexJson(styles) {
  return {
    schema: 2,
    count: styles.length,
    contract: CONTRACT.map(([name, use]) => ({ name, use })),
    families: FAMILIES.map(([name, lo, hi]) => ({ name, from: lo, to: hi })),
    styles: styles.map((s) => {
      const t = s.tokensJson;
      return {
        num: s.num,
        slug: s.slug,
        name: s.name,
        family: familyOf(s.num),
        tag: s.tag,
        tags: KEYWORDS[s.slug] ?? [],
        path: `styles/${s.dirName}/style.md`,
        tokens: fs.existsSync(path.join(STYLES_DIR, s.dirName, 'tokens.json'))
          ? `styles/${s.dirName}/tokens.json`
          : null,
        shots: s.shots.map((f) => `styles/${s.dirName}/shots/${f}`),
        palette: t?.palette ?? {
          bg: s.vars.bg,
          surface: s.vars.surface,
          ink: s.vars.ink,
          accent: s.vars.accent,
        },
        fonts: t?.typography ?? {
          display: s.vars['font-display'],
          body: s.vars['font-body'],
          mono: s.vars['font-mono'],
        },
        shape: t?.shape ?? { radius: s.vars.radius, radiusLg: s.vars['radius-lg'] },
        layout: t?.layout ?? null,
        must: t?.must ?? [],
        mustNot: t?.mustNot ?? [],
        neighbors: t?.neighbors ?? [],
        refs: t?.refs ?? [],
        docsReady: Boolean(t),
      };
    }),
  };
}

/* ------------------------------------------------------------ README QA */

function checkReadmeLinks() {
  for (const name of ['README.md', 'README.tr.md']) {
    const readme = path.join(ROOT, name);
    if (!fs.existsSync(readme)) continue;
    const md = fs.readFileSync(readme, 'utf8');
    for (const m of md.matchAll(/\]\((styles\/[^)\s]+)\)/g)) {
      if (!fs.existsSync(path.join(ROOT, m[1]))) fail(`${name}: broken link ${m[1]}`);
    }
  }
}

/* ----------------------------------------------------------------- main */

function main() {
  const onlyArg = process.argv.indexOf('--styles');
  const onlyStyles = onlyArg >= 0 && process.argv[onlyArg + 1] ? process.argv[onlyArg + 1].split(',') : [];

  const allDirs = listStyleDirs();
  const dirs = onlyStyles.length
    ? allDirs.filter((d) => onlyStyles.includes(d) || onlyStyles.includes(d.replace(/^\d+-/, '')))
    : allDirs;
  if (!dirs.length) {
    console.error('NN-slug/style.md not found under styles/');
    process.exit(1);
  }
  const flat = fs.readdirSync(STYLES_DIR).filter((f) => f.endsWith('.md'));
  if (flat.length) warn(`${flat.length} .md files sit in the styles/ root; they belong in a style folder`);

  const styles = dirs.map(parseStyle).filter(Boolean);
  checkTokenDrift(styles);
  checkShotCatalog(styles);
  checkTemplateColors();
  checkReadmeLinks();
  for (const f of ['gallery.css', 'gallery.js', 'live.html', 'live-styles.js', 'viewer-nav.js', 'viewer-lightbox.js']) {
    if (!fs.existsSync(path.join(KIT_DIR, f))) {
      fail(`kit/${f} is missing — the live preview breaks (node kit/build-gallery.mjs)`);
    }
  }

  const filtered = Boolean(onlyStyles.length);
  if (CHECK) {
    // In --check mode, no files are written (gallery/index is produced by separate command)
  } else {
    fs.writeFileSync(OUT_INDEX, JSON.stringify(indexJson(styles), null, 2) + '\n');
    const liveList = styles.map((x) => ({ num: x.num, slug: x.slug, name: x.name, family: familyOf(x.num) }));
    fs.writeFileSync(
      path.join(KIT_DIR, 'live-styles.js'),
      '/* kit/live-styles.js — node generates kit/build-gallery.mjs; manual editing */\nwindow.LIVE_STYLES =' +
        JSON.stringify(liveList, null, 2) +
        ';\n',
    );
    fs.writeFileSync(
      OUT_HTML,
      galleryHtml(styles, { families: FAMILIES, familyOf, hueBucket, KEYWORDS, DEMOS, DEFAULT_DEMO, sceneLabels: SCENE_LABELS }),
    );
  }

  const v2 = styles.filter((s) => s.tokensJson).length;
  const shots = styles.reduce((n, s) => n + s.shots.length, 0);
  console.log(
    `${styles.length} styles · ${shots} single-page images · ${v2} full schema (v6)` +
      (filtered ? ' (filtreli)' : '· kit/styles.index.json is up to date') +
      (CHECK ? '' : '· written kit/gallery.html + live-styles.js'),
  );
  if (warnings.length) {
    console.log('\nWarning:');
    for (const w of warnings) console.log('  ! ' + w);
  }
  if (failures.length) {
    console.log(`\n${failures.length} hata:`);
    for (const f of failures) console.log('  × ' + f);
    if (CHECK) process.exit(1);
    console.log('\n(production mode: files written; gate applied with --check)');
  } else {
    console.log('verification: clear');
  }
}

main();
