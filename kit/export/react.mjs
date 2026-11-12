#!/usr/bin/env node
/**
 * kit/export/react.mjs — token'ları React/TS projesi için veri modülüne çevirir.
 *
 * Neden: CSS değişkenleri React'te yeterli, ama JS tarafında da (grafik renkleri, canvas,
 * inline style, test) aynı değerler gerekiyor. Bu emitter `tokens.json` + `dist/motion.json`'dan
 * bağımlılıksız bir ESM modülü üretir; `data-style`/`data-theme` sözleşmesini bozmaz.
 *
 * Çıktı (kit/dist/react/):
 *   styleLabTokens.js   — 145 stil × (açık + koyu) palet, tipografi, şekil, hareket
 *   styleLabTokens.d.ts — tip tanımları (TS tüketicileri için)
 *   README.md           — ThemeProvider reçetesi + kullanım
 *
 * Kullanım:
 *   node kit/export/react.mjs            # yaz
 *   node kit/export/react.mjs --check    # güncel mi?
 *   node kit/export/react.mjs --verify   # --check + modülü import edip tokens.json ile karşılaştır
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parsePx } from '../lib/tokens.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MOTION_JSON = path.join(ROOT, 'kit', 'dist', 'motion.json');
const OUT_DIR = path.join(ROOT, 'kit', 'dist', 'react');
const OUT_JS = path.join(OUT_DIR, 'styleLabTokens.js');
const OUT_DTS = path.join(OUT_DIR, 'styleLabTokens.d.ts');
const OUT_README = path.join(OUT_DIR, 'README.md');

const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check') || ARGV.includes('--verify');
const VERIFY = ARGV.includes('--verify');

const errors = [];

const styleDirs = () =>
  fs
    .readdirSync(STYLES_DIR)
    .filter((d) => /^\d{2,3}-/.test(d) && fs.existsSync(path.join(STYLES_DIR, d, 'tokens.json')))
    .sort();

const motionDoc = JSON.parse(fs.readFileSync(MOTION_JSON, 'utf8'));

const PALETTE_KEYS = ['bg', 'bg2', 'surface', 'surface2', 'ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line'];

/** CSS değişken adı: bg2 → --bg-2, inkSoft → --ink-soft */
const cssVar = (key) => `--${key.replace(/([A-Z0-9])/g, (m) => `-${m.toLowerCase()}`)}`;

function buildTokens() {
  const styles = {};

  for (const dir of styleDirs()) {
    const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
    const slug = tokens.slug;
    const p = tokens.palette ?? {};
    const dark = p.dark ?? {};

    const paletteOf = (source, label) => {
      const out = {};
      for (const key of PALETTE_KEYS) {
        if (source[key] == null) {
          errors.push(`${slug}: palette.${label}${key} yok`);
          continue;
        }
        out[key] = source[key];
      }
      return out;
    };

    const typo = tokens.typography ?? {};
    const motion = motionDoc.styles[slug];
    if (!motion) {
      errors.push(`${slug}: dist/motion.json içinde yok`);
      continue;
    }
    const seq = motion.sequences ?? {};

    styles[slug] = {
      num: tokens.num,
      name: tokens.name,
      family: motion.family ?? '',
      light: paletteOf(p, ''),
      dark: paletteOf(dark, 'dark.'),
      radius: tokens.shape?.radius ?? '0px',
      radiusLg: tokens.shape?.radiusLg ?? tokens.shape?.radius ?? '0px',
      shadow: tokens.elevation?.shadow ?? 'none',
      shadowHard: tokens.elevation?.shadowHard ?? 'none',
      spacing: tokens.spacing?.scale ?? [],
      fonts: { display: typo.display ?? '', body: typo.body ?? '', mono: typo.mono ?? '' },
      scale: typo.scale ?? {},
      weights: typo.weights ?? {},
      lineHeight: typo.lineHeight ?? {},
      tracking: typo.tracking ?? {},
      motion: {
        fastMs: motion.fastMs,
        baseMs: motion.baseMs,
        slowMs: motion.slowMs,
        easing: motion.curve?.css ?? null,
        easingPoints: motion.curve?.points ?? null,
        enter: {
          durationMs: seq.enter?.durationMs ?? null,
          easing: seq.enter?.curve?.css ?? motion.curve?.css ?? null,
          offsetY: seq.enter?.offsetYPx ?? 0,
          stagger: seq.enter?.stagger ?? 0,
        },
        scroll: {
          durationMs: seq.scroll?.durationMs ?? null,
          offsetY: seq.scroll?.offsetYPx ?? 0,
          triggerPercent: seq.scroll?.trigger?.topPercent ?? null,
          once: seq.scroll?.once ?? false,
        },
        hover: {
          durationMs: seq.hover?.durationMs ?? null,
          imageScale: seq.hover?.imageScale ?? 1,
        },
        pin: { enabled: seq.pin?.enabled ?? false, scrub: seq.pin?.scrub ?? null },
        reduced: motion.reduced ?? null,
      },
    };
  }

  return styles;
}

const tokens = buildTokens();

const header = `// GENERATED DOSYA — elle düzenlenmez.
// Kaynak: styles/<nn>-<slug>/tokens.json + kit/dist/motion.json
// Üretim: node kit/export/react.mjs · Doğrulama: node kit/export/react.mjs --verify
//
// CSS değişkenleri (kit/dist/tokens.all.css) tek başına yeterlidir; bu modül JS tarafında
// (grafik renkleri, canvas, inline style, test) aynı değerleri bağımlılıksız verir.
// ${Object.keys(tokens).length} stil · açık + koyu palet · normalize edilmiş hareket.

/** @typedef {'light'|'dark'} StyleLabTheme */

/** @type {Readonly<Record<string, any>>} */
export const styleLabTokens = `;

const body = JSON.stringify(tokens, null, 2); // JSON, geçerli JS nesne literal'idir: tırnak değiştirme yok (metinlerde kesme işareti var)

const helpers = `
/** Bir stilin paletini döndürür (koyu modda yalnız renkler değişir). */
export function styleLabPalette(slug, theme = 'light') {
  const style = styleLabTokens[slug];
  if (!style) throw new Error(\`style-lab: bilinmeyen stil "\${slug}" (\${Object.keys(styleLabTokens).length} stil var)\`);
  return theme === 'dark' ? style.dark : style.light;
}

/** Stili CSS değişkeni nesnesine çevirir: { '--bg': '#fafaf9', ... } */
export function styleLabCssVars(slug, theme = 'light') {
  const style = styleLabTokens[slug];
  if (!style) throw new Error(\`style-lab: bilinmeyen stil "\${slug}"\`);
  const palette = theme === 'dark' ? style.dark : style.light;
  const vars = {};
  for (const [key, value] of Object.entries(palette)) vars[\`--\${key.replace(/([A-Z0-9])/g, (m) => \`-\${m.toLowerCase()}\`)}\`] = value;
  vars['--radius'] = style.radius;
  vars['--radius-lg'] = style.radiusLg;
  vars['--shadow'] = style.shadow;
  vars['--shadow-hard'] = style.shadowHard;
  vars['--font-display'] = style.fonts.display;
  vars['--font-body'] = style.fonts.body;
  vars['--font-mono'] = style.fonts.mono;
  return vars;
}

/** <html> üzerinde stil/koyu mod uygular (SSR'de document yoksa sessizce atlar). */
export function applyStyleLab(slug, { theme = 'light', target = typeof document !== 'undefined' ? document.documentElement : null } = {}) {
  if (!target) return;
  target.setAttribute('data-style', slug);
  if (theme === 'dark') target.setAttribute('data-theme', 'dark');
  else target.removeAttribute('data-theme');
  target.style.colorScheme = theme;
}

/** Slug listesi (galeri/sidebar için). */
export const styleLabSlugs = Object.keys(styleLabTokens);
`;

const js = header + body + ';\n' + helpers;

const dts = `// GENERATED — node kit/export/react.mjs
export type StyleLabTheme = 'light' | 'dark';

export interface StyleLabPalette {
${PALETTE_KEYS.map((k) => `  ${k}: string;`).join('\n')}
}

export interface StyleLabMotion {
  fastMs: number;
  baseMs: number;
  slowMs: number;
  easing: string | null;
  easingPoints: number[] | null;
  enter: { durationMs: number | null; easing: string | null; offsetY: number; stagger: number };
  scroll: { durationMs: number | null; offsetY: number; triggerPercent: number | null; once: boolean };
  hover: { durationMs: number | null; imageScale: number };
  pin: { enabled: boolean; scrub: number | null };
  reduced: string | null;
}

export interface StyleLabStyle {
  num: string;
  name: string;
  family: string;
  light: StyleLabPalette;
  dark: StyleLabPalette;
  radius: string;
  radiusLg: string;
  shadow: string;
  shadowHard: string;
  spacing: string[];
  fonts: { display: string; body: string; mono: string };
  scale: Record<string, string>;
  weights: Record<string, number>;
  lineHeight: Record<string, number>;
  tracking: Record<string, string>;
  motion: StyleLabMotion;
}

export declare const styleLabTokens: Readonly<Record<string, StyleLabStyle>>;
export declare const styleLabSlugs: string[];
export declare function styleLabPalette(slug: string, theme?: StyleLabTheme): StyleLabPalette;
export declare function styleLabCssVars(slug: string, theme?: StyleLabTheme): Record<string, string>;
export declare function applyStyleLab(
  slug: string,
  options?: { theme?: StyleLabTheme; target?: Element | null },
): void;
`;

const readme = `# React çıktısı (style-lab)

GENERATED — \`node kit/export/react.mjs\` · ${Object.keys(tokens).length} stil

## 1 · CSS (asıl yol)

\`kit/dist/tokens.all.css\` dosyasını projeye al; kök elemanda \`data-style\` + \`data-theme\` kullan:

\`\`\`html
<html data-style="terminal-ui" data-theme="dark">
\`\`\`

Bileşen kodu **hard-coded renk/radius/gölge içermez**, yalnız \`var(--…)\` kullanır.
Tailwind kullanıyorsan \`kit/dist/tailwind.theme.css\` (v4 \`@theme\`).

## 2 · JS tarafı (opsiyonel)

Grafik/canvas/inline style için \`styleLabTokens.js\`:

\`\`\`js
import { styleLabTokens, styleLabPalette, styleLabCssVars, applyStyleLab } from './styleLabTokens.js';

const t = styleLabTokens['terminal-ui'];
chartTheme.color = t.light.accent;
document.body.style.cssText += Object.entries(styleLabCssVars('terminal-ui', 'dark'))
  .map(([k, v]) => \`\${k}:\${v}\`).join(';');
\`\`\`

## 3 · ThemeProvider reçetesi

Bu dosya **reçetedir**, üretilen kod değil: Next.js/Vite farkları (SSR, hydration) yüzünden
projeye göre uyarlanır. Bağımlılık eklemez.

\`\`\`tsx
'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { applyStyleLab, styleLabSlugs, type StyleLabTheme } from './styleLabTokens';

type Ctx = { slug: string; theme: StyleLabTheme; setSlug: (s: string) => void; toggleTheme: () => void };
const StyleLabContext = createContext<Ctx | null>(null);

export function StyleLabProvider({
  children,
  slug: initial = 'minimalism',
  theme: initialTheme = 'light',
}: { children: React.ReactNode; slug?: string; theme?: StyleLabTheme }) {
  const [slug, setSlugState] = useState(initial);
  const [theme, setTheme] = useState<StyleLabTheme>(initialTheme);

  useEffect(() => {
    const saved = localStorage.getItem('style-lab') as string | null;
    const savedTheme = localStorage.getItem('style-lab-theme') as StyleLabTheme | null;
    if (saved && styleLabSlugs.includes(saved)) setSlugState(saved);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    applyStyleLab(slug, { theme });
    localStorage.setItem('style-lab', slug);
    localStorage.setItem('style-lab-theme', theme);
  }, [slug, theme]);

  const setSlug = useCallback((s: string) => styleLabSlugs.includes(s) && setSlugState(s), []);
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return <StyleLabContext.Provider value={{ slug, theme, setSlug, toggleTheme }}>{children}</StyleLabContext.Provider>;
}

export function useStyleLab() {
  const ctx = useContext(StyleLabContext);
  if (!ctx) throw new Error('useStyleLab: StyleLabProvider içinde kullanılmalı');
  return ctx;
}
\`\`\`

## 4 · Hareket imzası

\`styleLabTokens[slug].motion\` normalize edilmiş değerleri taşır (ms + cubic-bezier noktaları).
CSS'te \`tokens.all.css\` zaten doğru süre/eğriyi verir; JS animasyonu (framer-motion, GSAP)
kullanılıyorsa **aynı** değerleri buradan al — varsayılan \`ease\`/\`300ms\` yazma.

\`prefers-reduced-motion\` zorunlu: \`motion.reduced\` alanı stilin reduced-motion politikasını taşır.

## Notlar

- Koyu mod yalnız 10 renk paletini değiştirir; tipografi/şekil/hareket aynıdır.
- \`--blur\`, \`--grain\`, \`--data-1…4\` CSS'te vardır; bu modülde yok (hedefe özgü katman).
- Değerler \`tokens.json\` ile birebir; \`--verify\` 145 stilin paletini karşılaştırır.
`;

const outputs = [
  [OUT_JS, js],
  [OUT_DTS, dts],
  [OUT_README, readme],
];

if (errors.length) {
  console.log(`react export · ${Object.keys(tokens).length} stil · ${errors.length} hata`);
  for (const e of errors.slice(0, 20)) console.log(`  ✗ ${e}`);
  if (!VERIFY) process.exit(1);
}

if (!CHECK) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [file, content] of outputs) fs.writeFileSync(file, content);
  console.log(`yazıldı: kit/dist/react/{styleLabTokens.js,styleLabTokens.d.ts,README.md} · ${Object.keys(tokens).length} stil`);
  process.exit(errors.length ? 1 : 0);
}

let dirty = 0;
for (const [file, content] of outputs) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  if (current !== content) {
    dirty++;
    console.log(`  ✗ güncel değil: ${path.relative(ROOT, file)}`);
  }
}
console.log(`react export · ${Object.keys(tokens).length} stil · ${dirty ? `${dirty} dosya eski` : 'senkron'}`);
if (dirty) {
  console.log('  düzelt: node kit/export/react.mjs');
  process.exit(1);
}
if (!VERIFY) process.exit(errors.length ? 1 : 0);

/* ---------- --verify: modülü gerçekten import et, tokens.json ile karşılaştır ---------- */
const mod = await import(pathToFileURL(OUT_JS).href + `?t=${Date.now()}`);
const problems = [];
let checked = 0;

for (const dir of styleDirs()) {
  const raw = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const slug = raw.slug;
  const t = mod.styleLabTokens[slug];
  if (!t) {
    problems.push(`${slug}: modülde yok`);
    continue;
  }
  for (const key of PALETTE_KEYS) {
    if (t.light[key] !== raw.palette[key]) problems.push(`${slug}: light.${key} ${t.light[key]} ≠ ${raw.palette[key]}`);
    if (raw.palette.dark?.[key] != null && t.dark[key] !== raw.palette.dark[key]) {
      problems.push(`${slug}: dark.${key} ${t.dark[key]} ≠ ${raw.palette.dark[key]}`);
    }
  }
  if (parsePx(t.radius) !== parsePx(raw.shape?.radius)) problems.push(`${slug}: radius uyuşmuyor`);
  if ((raw.spacing?.scale ?? []).length !== t.spacing.length) problems.push(`${slug}: spacing uzunluğu`);
  if (t.motion.enter.durationMs !== (motionDoc.styles[slug]?.sequences?.enter?.durationMs ?? null)) {
    problems.push(`${slug}: enter süresi motion.json ile uyuşmuyor`);
  }
  checked++;
}

// cssVars sözleşmesi: 10 renk + 4 şekil + 3 font = 17 anahtar
const vars = mod.styleLabCssVars('minimalism');
const expected = [...PALETTE_KEYS.map(cssVar), '--radius', '--radius-lg', '--shadow', '--shadow-hard', '--font-display', '--font-body', '--font-mono'];
for (const key of expected) if (!(key in vars)) problems.push(`styleLabCssVars: ${key} eksik`);
if (mod.styleLabSlugs.length !== Object.keys(mod.styleLabTokens).length) problems.push('styleLabSlugs uzunluğu uyuşmuyor');

console.log(`  ${problems.length ? '✗' : '✓'} import + parite (${checked} stil, ${expected.length} css değişkeni)`);
if (problems.length) {
  for (const p of problems.slice(0, 15)) console.log(`    ✗ ${p}`);
  if (problems.length > 15) console.log(`    … +${problems.length - 15}`);
  process.exit(1);
}
process.exit(errors.length ? 1 : 0);
