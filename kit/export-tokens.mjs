#!/usr/bin/env node
/**
 * kit/export-tokens.mjs — katalog token'larını kullanılabilir biçimlere aktarır.
 *
 * Girdi (tek kaynak): kit/tokens.css (palet + koyu mod) ve styles/<nn-slug>/tokens.json
 * (tipografi, radius, boşluk, hareket, bileşen reçetesi).
 *
 * Çıktı (varsayılan: kit/dist/):
 *   tokens.all.css         tüm stiller, :root + [data-style] + [data-theme=dark] — doğrudan kopyalanabilir
 *   tailwind.theme.css     Tailwind v4 @theme (renk/font/radius/gölge) + 8 adım boşluk eşlemesi (yorumsatırı)
 *   figma.variables.json   Figma variables içe aktarma biçimi (Color System Light/Dark + Radius + Spacing + Typography)
 *   index.json             manifest: hangi stil, hangi dosya, kaç token
 *
 * Kullanım:
 *   node kit/export-tokens.mjs                     # hepsi, kit/dist/
 *   node kit/export-tokens.mjs --styles utility,minimalism
 *   node kit/export-tokens.mjs --out /tmp/out      # başka klasör
 *   node kit/export-tokens.mjs --check             # kit/dist güncel mi (kapı)
 *   node kit/export-tokens.mjs --split             # ayrıca stil başına dosyalar (dist/<slug>/)
 *
 * Not: renk ayrıştırma check-contrast.mjs ile aynı kuralları izler (hex 3/6/8, rgb[a]()).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseColor } from './color.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const TOKENS_CSS = path.join(ROOT, 'kit', 'tokens.css');
const STYLES_DIR = path.join(ROOT, 'styles');

const arg = (name, fallback = null) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
};
const CHECK = process.argv.includes('--check');
const SPLIT = process.argv.includes('--split');
const OUT_DIR = path.resolve(arg('out', path.join(ROOT, 'kit', 'dist')));
const ONLY = (arg('styles', '') || '').split(',').filter(Boolean);

const HEADER = '/* kit/export-tokens.mjs üretir — elle düzenlemeyin. Kaynak: kit/tokens.css + styles/<nn-slug>/tokens.json */';

/* ---------------------------------------------------------------- okuma */

/** tokens.css → { light: {slug: vars}, dark: {slug: vars} } */
function readTokensCss() {
  const css = fs.readFileSync(TOKENS_CSS, 'utf8');
  const light = {};
  const dark = {};
  for (const m of css.matchAll(/^\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    light[m[1]] = parseVars(m[2]);
  }
  for (const m of css.matchAll(/^\[data-theme="dark"\]\[data-style="([a-z0-9-]+)"\]\s*\{([\s\S]*?)^\}/gm)) {
    dark[m[1]] = parseVars(m[2]);
  }
  return { light, dark };
}

function parseVars(block) {
  const vars = {};
  for (const v of block.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) vars[v[1]] = v[2].trim();
  return vars;
}

function listStyles() {
  return fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .filter((name) => !ONLY.length || ONLY.includes(name) || ONLY.includes(name.replace(/^\d+-/, '')))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .map((dirName) => {
      const slug = dirName.replace(/^\d+-/, '');
      const jsonPath = path.join(STYLES_DIR, dirName, 'tokens.json');
      return {
        dirName,
        slug,
        num: dirName.match(/^(\d+)-/)?.[1] ?? dirName.slice(0, 2),
        tokens: fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : null,
      };
    });
}

/* ---------------------------------------------------------------- renk */

const round4 = (n) => Math.round(n * 10000) / 10000;
const figmaColor = (c) => ({ r: round4(c.r / 255), g: round4(c.g / 255), b: round4(c.b / 255), a: round4(c.a) });

/* --------------------------------------------------------------- CSS */

const COLOR_VARS = ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line'];

function styleCssBlock(style, vars) {
  const lines = [];
  const push = (group, keys) => {
    const present = keys.filter((k) => vars[k] !== undefined);
    if (!present.length) return;
    lines.push('  ' + present.map((k) => `--${k}: ${vars[k]};`).join(' '));
    void group;
  };
  push('renk', COLOR_VARS);
  push('radius', ['radius', 'radius-lg']);
  push('gölge', ['shadow', 'shadow-hard']);
  push('tipografi', ['font-display', 'font-body', 'font-mono', 'tracking']);
  push('yüzey', ['blur', 'grain']);
  if (lines.length === 0) return '';
  return `/* ${style.num} · ${style.tokens?.name ?? style.slug} */\n[data-style="${style.slug}"] {\n${lines.join('\n')}\n}\n`;
}

function darkCssBlock(style, vars) {
  if (!vars) return '';
  const lines = [];
  const present = COLOR_VARS.filter((k) => vars[k] !== undefined);
  if (!present.length) return '';
  lines.push('  ' + present.map((k) => `--${k}: ${vars[k]};`).join(' '));
  return `[data-theme="dark"][data-style="${style.slug}"] {\n${lines.join('\n')}\n}\n`;
}

function buildTokensCss(styles, css) {
  const root = parseVars(fs.readFileSync(TOKENS_CSS, 'utf8').match(/:root\s*\{([\s\S]*?)\n\}/)[1]);
  const rootLine = '  ' + COLOR_VARS.filter((k) => root[k]).map((k) => `--${k}: ${root[k]};`).join(' ');
  const parts = [
    HEADER,
    '',
    '/* varsayılan (fallback): değişken adları her stilde aynıdır, bileşenler stil değişince bozulmaz */',
    `:root {\n${rootLine}\n}`,
    '',
  ];
  for (const s of styles) {
    const light = css.light[s.slug];
    if (!light) continue;
    parts.push(styleCssBlock(s, light).trimEnd());
    const dark = css.dark[s.slug];
    if (dark) parts.push(darkCssBlock(s, dark).trimEnd());
    parts.push('');
  }
  return parts.join('\n').trimEnd() + '\n';
}

/* ---------------------------------------------------------- Tailwind v4 */

/** style-lab'ın 8 adımlı boşluğu Tailwind'in 4px tabanına birebir oturur. */
const SPACING_MAP = [
  ['--space-1', '4px', 'p-1'],
  ['--space-2', '8px', 'p-2'],
  ['--space-3', '12px', 'p-3'],
  ['--space-4', '16px', 'p-4'],
  ['--space-5', '24px', 'p-6'],
  ['--space-6', '32px', 'p-8'],
  ['--space-7', '48px', 'p-12'],
  ['--space-8', '64px', 'p-16'],
];

function buildTailwind(styles, css) {
  const out = [HEADER, '', '/* Kullanım: <html data-style="<slug>"> + bu dosyayı theme olarak yükle. */', ''];

  for (const s of styles) {
    const v = css.light[s.slug];
    if (!v) continue;
    const d = css.dark[s.slug] ?? null;
    out.push(`/* ---- ${s.num} · ${s.tokens?.name ?? s.slug} ---- */`);
    out.push(`@theme {`);
    for (const key of ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line']) {
      if (v[key]) out.push(`  --color-${key}: ${v[key]};`);
    }
    out.push(`  --radius-control: ${v.radius ?? '0px'};`);
    out.push(`  --radius-card: ${v['radius-lg'] ?? v.radius ?? '0px'};`);
    if (v.shadow) out.push(`  --shadow-control: ${v.shadow};`);
    out.push(`  --font-display: ${stripQuotes(v['font-display'])};`);
    out.push(`  --font-body: ${stripQuotes(v['font-body'])};`);
    out.push(`  --font-mono: ${stripQuotes(v['font-mono'])};`);
    out.push(`  --tracking-display: ${v.tracking ?? '0'};`);
    out.push('}');
    if (d) {
      out.push('');
      out.push('/* koyu mod: data-theme="dark" (Tailwind `dark:` değil, katalog kuralı) */');
      out.push(`[data-theme="dark"][data-style="${s.slug}"] {`);
      for (const key of ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line']) {
        if (d[key]) out.push(`  --color-${key}: ${d[key]};`);
      }
      out.push('}');
    }
    out.push('');
  }

  out.push('/* ---- boşluk: katalog ölçeği = Tailwind 4px tabanı');
  for (const [token, px, cls] of SPACING_MAP) out.push(`   ${token} ${px} → ${cls}`);
  out.push('   ---- */');
  out.push('');
  return out.join('\n');
}

const stripQuotes = (stack) =>
  String(stack ?? '')
    .split(',')
    .map((f) => f.trim().replace(/^["']|["']$/g, ''))
    .join(', ');

/* --------------------------------------------------------------- Figma */

function buildFigma(styles, css) {
  const colorVars = [];
  const floatVars = [];
  const stringVars = [];

  for (const s of styles) {
    const v = css.light[s.slug];
    if (!v) continue;
    const d = css.dark[s.slug] ?? null;
    const prefix = `${s.num} ${s.tokens?.name ?? s.slug}`;

    for (const key of ['bg', 'bg-2', 'surface', 'surface-2', 'ink', 'ink-soft', 'ink-faint', 'accent', 'accent-ink', 'line']) {
      const light = parseColor(v[key]);
      if (!light) continue;
      const values = { Light: figmaColor(light) };
      const darkColor = d ? parseColor(d[key]) : null;
      values.Dark = figmaColor(darkColor ?? light);
      colorVars.push({ name: `${s.slug}/${key}`, description: `${prefix} · ${key}`, type: 'COLOR', values });
    }

    for (const [key, raw] of [
      ['radius', v.radius],
      ['radius-lg', v['radius-lg']],
    ]) {
      const num = parseFloat(raw);
      if (!Number.isFinite(num)) continue;
      floatVars.push({ name: `${s.slug}/${key}`, description: `${prefix} · ${key}`, type: 'FLOAT', values: { 'Mode 1': num } });
    }

    const t = s.tokens;
    if (t?.typography?.scale) {
      for (const [key, raw] of Object.entries(t.typography.scale)) {
        const num = parseFloat(raw);
        if (!Number.isFinite(num)) continue;
        stringVars.push({
          name: `${s.slug}/type-${key}`,
          description: `${prefix} · ${key}`,
          type: 'STRING',
          values: { 'Mode 1': `${num}px` },
        });
      }
    }
  }

  const spacing = SPACING_MAP.map(([token, px]) => ({
    name: `spacing/${token.replace('--space-', '')}`,
    description: `${px}`,
    type: 'FLOAT',
    values: { 'Mode 1': parseFloat(px) },
  }));

  return {
    _readme:
      'Figma variables içe aktarma biçimi: collections[].variables[] = { name, type, values: { <mod adı>: değer } }. ' +
      'Color System iki modlu (Light/Dark); Radius/Spacing/Typography tek modlu. kit/export-tokens.mjs üretir.',
    generatedBy: 'kit/export-tokens.mjs',
    source: 'kit/tokens.css + styles/<nn-slug>/tokens.json',
    collections: [
      {
        name: 'Color System',
        modes: [{ name: 'Light' }, { name: 'Dark' }],
        variables: colorVars,
      },
      { name: 'Radius', modes: [{ name: 'Mode 1' }], variables: floatVars },
      { name: 'Spacing', modes: [{ name: 'Mode 1' }], variables: spacing },
      { name: 'Typography', modes: [{ name: 'Mode 1' }], variables: stringVars },
    ],
  };
}

/* ---------------------------------------------------------------- main */

function build() {
  const css = readTokensCss();
  const styles = listStyles();
  const files = new Map();

  files.set('tokens.all.css', buildTokensCss(styles, css));
  files.set('tailwind.theme.css', buildTailwind(styles, css));
  files.set('figma.variables.json', JSON.stringify(buildFigma(styles, css), null, 2) + '\n');

  const index = {
    generatedBy: 'kit/export-tokens.mjs',
    styles: styles.map((s) => ({
      num: s.num,
      slug: s.slug,
      name: s.tokens?.name ?? s.slug,
      dark: Boolean(css.dark[s.slug]),
      tokens: Object.keys(css.light[s.slug] ?? {}).length,
      files: {
        css: 'tokens.all.css',
        tailwind: 'tailwind.theme.css',
        figma: 'figma.variables.json',
      },
    })),
    counts: {
      styles: styles.length,
      withDark: styles.filter((s) => css.dark[s.slug]).length,
      variables: styles.length ? Object.keys(css.light[styles[0].slug] ?? {}).length : 0,
    },
  };
  files.set('index.json', JSON.stringify(index, null, 2) + '\n');

  if (SPLIT) {
    for (const s of styles) {
      const light = css.light[s.slug];
      if (!light) continue;
      const body = [
        HEADER,
        '',
        styleCssBlock(s, light).trimEnd(),
        css.dark[s.slug] ? darkCssBlock(s, css.dark[s.slug]).trimEnd() : '',
      ]
        .filter(Boolean)
        .join('\n');
      files.set(path.join(`${s.num}-${s.slug}`, 'tokens.css'), body + '\n');
    }
  }

  return { files, index };
}

function main() {
  const { files, index } = build();

  if (CHECK) {
    const stale = [];
    for (const [rel, content] of files) {
      const p = path.join(OUT_DIR, rel);
      if (!fs.existsSync(p)) stale.push(`${rel}: yok`);
      else if (fs.readFileSync(p, 'utf8') !== content) stale.push(`${rel}: güncel değil`);
    }
    if (stale.length) {
      console.log(`export: ${stale.length} dosya eksik/bayat`);
      for (const s of stale) console.log('  × ' + s);
      console.log('  → node kit/export-tokens.mjs');
      return 1;
    }
    console.log(`export: güncel (${index.counts.styles} stil · ${index.counts.withDark} koyu modlu · ${files.size} dosya)`);
    return 0;
  }

  for (const [rel, content] of files) {
    const p = path.join(OUT_DIR, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content);
  }
  const bytes = [...files.values()].reduce((n, c) => n + Buffer.byteLength(c), 0);
  console.log(
    `export: ${files.size} dosya · ${(bytes / 1024).toFixed(1)} KB → ${path.relative(ROOT, OUT_DIR)}` +
      ` · ${index.counts.styles} stil (${index.counts.withDark} koyu modlu)`,
  );
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exit(main());
}
