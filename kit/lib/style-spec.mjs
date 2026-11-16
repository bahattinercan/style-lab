/**
 * kit/lib/style-spec.mjs — SPEC → style resources (v6 single page contract).
 *
 * Reason: adding new style was 8 steps and required three copies (tokens.json ⇄ token-block.css ⇄
 * tokens.css) was the place where manual synchronization was broken most frequently. Here are four sources from one SPEC
 * is produced; `kit/add-style.mjs` runs the remaining pipeline (assign, render, index).
 *
 * v6 agreement: NO dark mode (palette.dark), NO motion, scene one (01-page.png).*/
import { contrastRatio, contrastOnSurface, apcaContrast, parseColor } from '../color.mjs';
import { CORE_PALETTE_TARGETS, deriveCorePalette, deriveStatusColors } from './palette.mjs';

const hex = (v) => String(v).trim();

/** CSS variable names — token contract is fixed (does not add new style variables).*/
export const CSS_KEYS = [
  ['bg', 'bg'],
  ['bg2', 'bg-2'],
  ['surface', 'surface'],
  ['surface2', 'surface-2'],
  ['ink', 'ink'],
  ['inkSoft', 'ink-soft'],
  ['inkFaint', 'ink-faint'],
  ['accent', 'accent'],
  ['accentInk', 'accent-ink'],
  ['line', 'line'],
];

/**
 * v7 contract: token block increases from 20 variables to 28.
 * · --space-1…8 : vertical rhythm; Same eight steps in all styles (band can crush).
 * · --danger/-ok/-warn (+ -ink): status colors. Values from `kit/lib/palette.mjs` decoder
 * comes (4.5:1 target against the floor), can be crushed by the SPEC `status` field.
 * Cause: 161 styles were manually crushing `--danger`, 90 styles were falling into global #b42318; this is JSON
 * did not know the variables at all (machine source and CSS were parsed).*/
export const STATUS_KEYS = ['danger', 'dangerInk', 'ok', 'okInk', 'warn', 'warnInk'];
export const SPACE_SCALE = ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'];

/** Condition colors: from solvent (4.5:1 against background) if no SPEC paste.*/
export function statusOf(spec) {
  const p = spec.palette ?? {};
  if (spec.status) return { ...deriveStatusColors(p), ...spec.status };
  return deriveStatusColors(p);
}

/** CSS pairs: 20 cores + 8 spaces + 6 states = 34 declarations.*/
function contractPairs(spec) {
  const p = spec.palette;
  const status = statusOf(spec);
  const space = spec.space ?? SPACE_SCALE;
  return [
    ['--danger', status.danger],
    ['--danger-ink', status.dangerInk],
    ['--ok', status.ok],
    ['--ok-ink', status.okInk],
    ['--warn', status.warn],
    ['--warn-ink', status.warnInk],
    ...space.map((v, i) => [`--space-${i + 1}`, v]),
  ];
}

/** Rounding to thousandths: ensure that the measurements written on the report are uniform.*/
const r2 = (n) => Math.round(n * 100) / 100;

/** Palette meter: WCAG + APCA + focus ring. Door thresholds are applied during build.*/
export function inspectPalette(palette) {
  const p = palette;
  const focus = Math.max(contrastRatio(p.accent, p.bg), contrastRatio(p.accent, p.surface));
  return {
    body: r2(contrastRatio(p.ink, p.bg)),
    soft: r2(contrastRatio(p.inkSoft, p.bg)),
    faint: r2(contrastRatio(p.inkFaint, p.bg)),
    accentInk: r2(contrastRatio(p.accentInk, p.accent)),
    onSurface: r2(contrastOnSurface(p.ink, p.surface, p.bg)),
    focus: r2(focus),
    apca: Math.abs(apcaContrast(p.ink, p.bg) ?? 0),
  };
}

/** SPEC verification: errors (build stops) and warnings (reported).*/
export function validateSpec(spec, ctx) {
  const errors = [];
  const warnings = [];
  const need = (cond, msg) => {
    if (!cond) errors.push(msg);
  };

  need(/^\d{2,3}$/.test(String(spec.num ?? '')), `${spec.slug ?? '?'}: num must be 2–3 digits`);
  need(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(spec.slug ?? ''), `${spec.slug ?? '?'}: slug must be kebab-case`);
  need(typeof spec.name === 'string' && spec.name.trim().length > 1, `${spec.slug}: missing name`);
  need(typeof spec.tagline === 'string' && spec.tagline.length > 20, `${spec.slug}: missing/short tagline`);
  if (spec.tagline && spec.tagline.length > 170) warnings.push(`${spec.slug}: tagline is ${spec.tagline.length} characters (>170)`);

  const palette = spec.paletteSeeds
    ? deriveCorePalette(spec.paletteSeeds, spec.paletteTargets)
    : spec.palette ?? {};
  for (const [json] of CSS_KEYS) need(parseColor(palette[json]) !== null, `${spec.slug}: palette.${json} missing/invalid`);
  const fonts = spec.fonts ?? [];
  need(fonts.length === 3, `${spec.slug}: fonts must be the [display, body, mono] triple`);
  for (const f of fonts) if (ctx.fonts && !ctx.fonts.has(f)) errors.push(`${spec.slug}: font "${f}" is not in kit/fonts`);
  need(Array.isArray(spec.radius) && spec.radius.length === 2, `${spec.slug}: radius must be [radius, radiusLg]`);
  need(Array.isArray(spec.signature) && spec.signature.length >= 3, `${spec.slug}: signature ≥3 madde`);
  need(Array.isArray(spec.must) && spec.must.length >= 3, `${spec.slug}: must ≥3 madde`);
  need(Array.isArray(spec.mustNot) && spec.mustNot.length >= 3, `${spec.slug}: mustNot ≥3 madde`);
  need(Array.isArray(spec.refs) && spec.refs.length >= 3, `${spec.slug}: refs must have ≥3 entries`);
  for (const r of spec.refs ?? []) need(/^https:\/\//.test(r.url ?? ''), `${spec.slug}: refs url must be https (${r.url})`);
  need(Array.isArray(spec.keywords) && spec.keywords.length >= 3, `${spec.slug}: keywords ≥3`);
  need(typeof spec.brief === 'string' && spec.brief.length > 60, `${spec.slug}: missing/short brief`);
  need(typeof spec.feeling === 'string' && spec.feeling.length > 5, `${spec.slug}: feeling yok`);
  need(typeof spec.best === 'string' && spec.best.length > 5, `${spec.slug}: best yok`);
  need(typeof spec.avoid === 'string' && spec.avoid.length > 5, `${spec.slug}: avoid yok`);
  need(Boolean(ctx.band), `${spec.slug}: band "${spec.band}" is not in kit/specs/bands.json`);

  if (!errors.length) {
    const c = inspectPalette(palette);
    if (c.body < 4.5) errors.push(`${spec.slug}: ink/bg ${c.body}:1 < 4.5`);
    if (c.soft < 4.5) errors.push(`${spec.slug}: ink-soft/bg ${c.soft}:1 < 4.5 (--strict-soft)`);
    if (c.accentInk < 4.5) errors.push(`${spec.slug}: accent-ink/accent ${c.accentInk}:1 < 4.5`);
    if (c.focus < 3) errors.push(`${spec.slug}: focus ring accent/base ${c.focus}:1 < 3`);
    if (c.faint < 2.2) warnings.push(`${spec.slug}: ink-faint/bg ${c.faint}:1 is too low (decorative floor)`);
    if (c.apca < 60) warnings.push(`${spec.slug}: APCA ink/bg Lc ${c.apca} < 60`);
  }

  return { errors, warnings };
}

/*------------------------------------------------------------------------------- manufacturers*/

const dirOf = (spec) => `${spec.num}-${spec.slug}`;
const quoteStack = (family) =>
  /mono|code|courier|vt323|share tech|press start|silkscreen/i.test(family)
    ? `"${family}", ui-monospace, monospace`
    : `"${family}", system-ui, sans-serif`;

/** tokens.json — machine resource.*/
export function tokensJson(spec, ctx) {
  const p = spec.palette;
  const b = ctx.band;
  const [radius, radiusLg] = spec.radius;
  const fonts = spec.fonts;
  const scale = { ...b.scale, ...(spec.scale ?? {}) };
  const upper = Boolean(spec.upper);

  const cssPairs = [
    ...CSS_KEYS.map(([json, css]) => [`--${css}`, p[json]]),
    ...contractPairs(spec),
    ['--radius', radius],
    ['--radius-lg', radiusLg],
    ['--shadow', spec.shadow ?? b.shadow],
    ['--shadow-hard', spec.shadowHard ?? 'none'],
    ['--font-display', quoteStack(fonts[0])],
    ['--font-body', quoteStack(fonts[1])],
    ['--font-mono', quoteStack(fonts[2])],
    ['--tracking', spec.tracking ?? b.tracking],
    ['--blur', spec.blur ?? '0px'],
    ['--grain', String(spec.grain ?? 0)],
  ];
  const css = `[data-style="${spec.slug}"] { ${cssPairs.map(([k, v]) => `${k}: ${v};`).join(' ')} }`;

  return {
    slug: spec.slug,
    num: spec.num,
    name: spec.name,
    version: 6,
    css,
    palette: Object.fromEntries(CSS_KEYS.map(([json]) => [json, hex(p[json])])),
    paletteSeeds: spec.paletteSeeds ?? spec.palette,
    paletteTargets: spec.paletteTargets ?? CORE_PALETTE_TARGETS,
    status: statusOf(spec),
    typography: {
      display: fonts[0],
      body: fonts[1],
      mono: fonts[2],
      scale,
      weights: { body: 400, strong: 600, display: spec.displayWeight ?? b.displayWeight },
      lineHeight: { display: b.lineHeight.display, heading: b.lineHeight.heading, body: b.lineHeight.body },
      tracking: {
        display: spec.trackingDisplay ?? b.trackingDisplay,
        heading: spec.trackingHeading ?? b.trackingHeading,
        body: '0',
        label: b.trackingLabel,
      },
      measure: b.measure,
      case: upper ? 'upper' : 'mixed',
      forbidden: spec.forbiddenType ?? b.forbiddenType,
    },
    shape: {
      radius,
      radiusLg,
      border: `1px solid var(--line)`,
      rule: spec.radiusRule ?? b.radiusRule,
    },
    spacing: {
      unit: '4px',
      scale: b.spacing,
      sectionY: b.sectionY,
      cardPadding: b.cardPadding,
    },
    grid: b.grid,
    layout: spec.layout ?? { hero: 'split', nav: 'inline', density: 'balanced' },
    components: spec.components ?? b.components,
    imagery: {
      icons: b.dress.icons,
      photos: b.dress.photos,
      illustration: b.dress.illustration,
      texture: spec.texture ?? b.dress.texture,
      logo: b.dress.logo,
      photo: spec.photo ?? 'int-03.jpg',
      treatment: { mode: spec.photoMode ?? b.dress.mode, strength: spec.photoStrength ?? b.dress.strength },
    },
    must: spec.must,
    mustNot: spec.mustNot,
    neighbors: spec.neighbors ?? { compatible: [], forbidden: [] },
    refs: spec.refs,
    industries: spec.industries ?? ['saas'],
  };
}

/** token-block.css — the source block that apply-fragments reads.*/
export function tokenBlockCss(spec, ctx) {
  const p = spec.palette;
  const [radius, radiusLg] = spec.radius;
  const fonts = spec.fonts;
  const lines = [
    `/*${spec.num} · ${spec.name} — token block (source: styles/${dirOf(spec)}/tokens.json)*/`,
    '',
    `[data-style="${spec.slug}"] {`,
    `  --bg: ${p.bg}; --bg-2: ${p.bg2};`,
    `  --surface: ${p.surface}; --surface-2: ${p.surface2};`,
    `  --ink: ${p.ink}; --ink-soft: ${p.inkSoft}; --ink-faint: ${p.inkFaint};`,
    `  --accent: ${p.accent}; --accent-ink: ${p.accentInk};`,
    `  --line: ${p.line};`,
    ...contractPairs(spec).map(([k, v]) => `  ${k}: ${v};`),
    `  --radius: ${radius}; --radius-lg: ${radiusLg};`,
    `  --shadow: ${spec.shadow ?? ctx.band.shadow}; --shadow-hard: ${spec.shadowHard ?? 'none'};`,
    `  --font-display: ${quoteStack(fonts[0])};`,
    `  --font-body: ${quoteStack(fonts[1])};`,
    `  --font-mono: ${quoteStack(fonts[2])};`,
    `  --tracking: ${spec.tracking ?? ctx.band.tracking}; --blur: ${spec.blur ?? '0px'}; --grain: ${spec.grain ?? 0};`,
    '}',
    '',
  ];
  return lines.join('\n');
}

/** shots.config.fragment.mjs — scene signature (only var(--…) color).*/
export function fragmentModule(spec, ctx) {
  // Tape always enters CSS (family signature); The style overwrites the CSS with it.
  const extra = [ctx.band.extraCss ?? '', spec.extraCss ?? ''].filter(Boolean).join('\n');
  return `/**
 * ${spec.num} · ${spec.name} — render signature.
 * Color/typography/radius comes from kit/tokens.css; Only var(--...) is used here.*/
export const CONFIG = {
  motif: '${spec.motif ?? ctx.band.motif}',
  bodyClass: '${spec.bodyClass ?? ctx.band.bodyClass ?? ''}',
  extraCss: \`
${extra}
  \`,
};
`;
}

const row = (cells) => `| ${cells.join(' | ')} |`;
const table = (head, rows) => [row(head), row(head.map(() => '---')), ...rows.map(row)].join('\n');

/** style.md — human-reading document (ports look for section titles and meta table).*/
export function styleMarkdown(spec, ctx) {
  const b = ctx.band;
  const c = inspectPalette(spec.palette);
  const p = spec.palette;
  const scale = { ...b.scale, ...(spec.scale ?? {}) };
  const [radius, radiusLg] = spec.radius;
  const fonts = spec.fonts;
  const familyLabel = ctx.familyLabel;

  const colorNotes = {
    bg: 'page background',
    bg2: 'partition divider floor, table top',
    surface: 'kart, input, modal',
    surface2: 'passive chip, hover background',
    ink: 'title, body, icon',
    inkSoft: 'secondary text, description',
    inkFaint: 'decorative label, separator text',
    accent: 'primary action, active state',
    accentInk: 'text above accent',
    line: 'all borders',
  };
  const colorAvoid = {
    bg: 'as a card background',
    bg2: 'button background',
    surface: 'full-page background',
    surface2: 'primary button',
    ink: 'large background',
    inkFaint: 'interactive text',
    accent: 'wide background (with opacity 0.14)',
    accentInk: 'non-accent background',
    line: 'text colour',
  };

  const colorTable = table(
    ['Token', 'Value', 'Where to use', 'Where not to use'],
    CSS_KEYS.map(([json, css]) => [`\`--${css}\``, `\`${p[json]}\``, colorNotes[json], colorAvoid[json] ?? '—']),
  );

  const typeTable = table(
    ['Role', 'Family', 'Size', 'Weight', 'Line height', 'Tracking'],
    [
      ['Display / H1', `\`--font-display\` (${fonts[0]})`, `${scale.h1} (mobile ${scale.h1Mobile})`, String(spec.displayWeight ?? b.displayWeight), String(b.lineHeight.display), spec.trackingDisplay ?? b.trackingDisplay],
      ['H2', 'same', scale.h2, '600', String(b.lineHeight.heading), spec.trackingHeading ?? b.trackingHeading],
      ['H3', 'same', scale.h3, '600', '1.3', '0'],
      ['Body',`\`--font-body\` (${fonts[1]})`, scale.body, '400', String(b.lineHeight.body), '0'],
      ['Small body', 'same', scale.small, '400', '1.55', '0'],
      ['Label',`\`--font-mono\` (${fonts[2]})`, scale.label, '400', '1.2', b.trackingLabel],
      ['Button', `\`--font-body\``, scale.caption, '600', '1', '0'],
    ],
  );

  const screensTable = table(
    ['Screen', 'Density', 'Implementation', 'Image'],
    ctx.screens.map(([screen, d, recipe]) => [screen, d, recipe, '`shots/01-page.png`']),
  );

  const componentTable = table(
    ['Component', 'Height', 'Padding', 'Radius', 'Typography', 'Colour/shade', 'States'],
    Object.entries(spec.components ?? b.components).map(([key, value]) => [
      b.componentLabels[key] ?? key,
      value.h,
      value.pad,
      value.radius ?? radius,
      value.type,
      value.color,
      value.states,
    ]),
  );

  const trapTable = table(['Symptom', 'Cause', 'Fix'], ctx.traps);

  const dressTable = table(
    ['Item', 'Rule'],
    [
      ['icon', b.dress.icons],
      ['photo', b.dress.photos],
      ['illustration', b.dress.illustration],
      ['Texture', spec.texture ?? b.dress.texture],
      ['Logo', b.dress.logo],
    ],
  );

  const contrastTable = table(
    ['Pair', 'Ratio', 'Threshold', 'Note'],
    [
      ['`--ink` / `--bg`', `${c.body}:1`, '≥ 4.5', 'body text'],
      ['`--ink-soft` / `--bg`', `${c.soft}:1`, '≥ 4.5', 'secondary text'],
      ['`--ink-faint` / `--bg`', `${c.faint}:1`, '≥ 3 target', 'decorative only'],
      ['`--accent-ink` / `--accent`', `${c.accentInk}:1`, '≥ 4.5', 'button text'],
      ['focus ring/ground',`${c.focus}:1`, '≥ 3', 'accent ring'],
      ['APCA `--ink` / `--bg`', `Lc ${c.apca}`, '≥ 60 target', 'thin text'],
    ],
  );

  const tokenBlock = tokenBlockCss(spec, ctx)
    .split('\n')
    .slice(2)
    .join('\n')
    .trim();

  const md = `# ${spec.num} · ${spec.name}

> **In one sentence:** ${spec.tagline}

| | |
|---|---|
| **Feeling** | ${spec.feeling} |
| **Best for** | ${spec.best} |
| **Avoid** | ${spec.avoid} |
| **Difficulty** | ${spec.difficulty ?? b.defaultDifficulty} · **Accessibility** | ${spec.a11y ?? b.defaultA11y} |
| **Family** | ${familyLabel} · **Token** | \`kit/tokens.css\` → \`[data-style="${spec.slug}"]\` |
| **Composition** | \`${(spec.layout ?? { hero: 'split' }).hero}\` · \`${(spec.layout ?? { nav: 'inline' }).nav}\` · \`${(spec.layout ?? { density: 'balanced' }).density}\` (see \`kit/render/layouts.json\`) |
| **Images** | \`shots/01-page.png\` (single page · 1280×2400) |

## Essence

### What it is
${spec.essence ?? `${spec.name}, ${b.essenceTail}. ${spec.signature[0]}`}

### What is not
${(spec.notThis ?? b.notThis).map((x) => `- ${x}`).join('\n')}

### Where it comes from
${spec.origin ?? b.origin}

### Recognition test in 3 seconds
${(spec.recognition ?? b.recognition).map((q, i) => `${i + 1}. ${q}`).join('\n')}

## Visual signature
${spec.signature.map((x) => `- ${x}`).join('\n')}
- **Typography:** ${fonts[0]} (display) + ${fonts[1]} (body) + ${fonts[2]} (mono label).
- **Colour discipline:** a single accent \`${p.accent}\`; neutral scale \`${p.bg}\` → \`${p.ink}\`.
- **Radius:** \`${radius}\` / \`${radiusLg}\`; ${spec.radiusRule ?? b.radiusRule}

## Mandatory rules

${spec.must.map((x, i) => `${i + 1}. ${x}`).join('\n')}

## Color

${colorTable}

- Measured contrast: \`ink/bg\` **${c.body}:1** · \`ink-soft/bg\` **${c.soft}:1** · \`ink-faint/bg\` **${c.faint}:1 (decorative)** · \`accent-ink/accent\` **${c.accentInk}:1**.
- ${spec.colorNote ?? b.colorNote}
- Accent tinted by opacity: \`color-mix(in srgb, var(--accent) 14%, var(--surface))\` — never invent a second hex.

## Typography

${typeTable}

- ${spec.typeNote ?? b.typeNote}
- Measure: ${b.measure} (reading text), card text at most 52ch.
- ${spec.upper ? 'Headers uppercase: `text-transform: uppercase` + positive tracking; never body text.' : 'Headings are in sentence order (no uppercase); uppercase only on mono tags.'}

## Grid and space

${table(['Item', 'Value'], Object.entries({
  Columns: b.grid.columns,
  Gutter: b.grid.gutter,
  Container: b.grid.container,
  'Gap scale': `${b.spacing.map((s) => s.replace('px', '')).join(' · ')} (\`--space-1…8\`)`,
  Breakpoint: b.grid.breakpoints,
}))}

- ${spec.gridNote ?? b.gridNote}
- Section vertical space ${b.sectionY.desktop} desktop, ${b.sectionY.mobile} mobile; card padding ${b.cardPadding}.

## Surface and depth

${table(['Level', 'Token', 'Shadow', 'Usage'], b.elevation)}

- ${spec.surfaceNote ?? b.surfaceNote}
- Radius: \`${radius}\` (buton, input, chip), \`${radiusLg}\` (kart, modal). ${spec.radiusRule ?? b.radiusRule}

## Bans

${spec.mustNot.map((x) => `- ${x}`).join('\n')}
${b.extraBans.map((x) => `- ${x}`).join('\n')}

## Component recipes

${componentTable}

- Focus ring: \`:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }\`; ring ${c.focus}:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; ${b.touchNote}

## Visual language

${dressTable}

- Signature motif: \`motif-${spec.motif ?? b.motif}\` (in the scene template \`__MOTIF__\`).
- Visual hierarchy: ${b.hierarchy}

## Screen recipes

${screensTable}

## Accessibility

${contrastTable}

- \`--ink-faint\` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. ${b.a11yNote}

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| \`shots/01-page.png\` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

${trapTable}

## Neighboring styles

${table(['Direction', 'Style', 'Why'], [
  ...(spec.neighbors?.compatible ?? []).map((s) => ['garnish', `\`${s}\``, 'Same level of seriousness; accent sharing is not allowed']),
  ...(spec.neighbors?.forbidden ?? []).map((s) => ['Mixing',`\`${s}\``, 'Two different ornamental languages compete on the same screen']),
])}

## References

${table(['Source', 'for what'], spec.refs.map((r) => [`${r.url}`, `${r.label} — ${r.use}`]))}

## AI brief

\`\`\`text
${spec.brief}

Style: ${spec.name} (${spec.slug}) · family: ${familyLabel}
Token: --bg ${p.bg} · --surface ${p.surface} · --ink ${p.ink} · --accent ${p.accent} · --line ${p.line}
Radius: ${radius} / ${radiusLg} · Typography: ${fonts[0]} / ${fonts[1]} / ${fonts[2]}
Required: ${spec.must.slice(0, 3).join(' · ')}
Banned: ${spec.mustNot.slice(0, 3).join(' · ')}
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
\`\`\`

## Token

\`\`\`css
${tokenBlock}
\`\`\`
`;

  return md;
}

/** All files to generate: path → content.*/
export function buildStyle(spec, ctx) {
  const resolved = spec.paletteSeeds
    ? { ...spec, palette: deriveCorePalette(spec.paletteSeeds, spec.paletteTargets) }
    : spec;
  const dir = dirOf(resolved);
  const c = inspectPalette(resolved.palette);
  const styleCtx = {
    ...ctx,
    screens: resolved.screens ?? ctx.band.screens,
    traps: resolved.traps ?? ctx.band.traps,
  };
  return {
    files: {
      [`styles/${dir}/tokens.json`]: JSON.stringify(tokensJson(resolved, ctx), null, 2) + '\n',
      [`styles/${dir}/token-block.css`]: tokenBlockCss(resolved, ctx),
      [`styles/${dir}/shots.config.fragment.mjs`]: fragmentModule(resolved, ctx),
      [`styles/${dir}/keywords.json`]: JSON.stringify(resolved.keywords, null, 2) + '\n',
      [`styles/${dir}/style.md`]: styleMarkdown(resolved, styleCtx),
    },
    metrics:c,
  };
}

/* ---------------------------------------------------------------- family base */

/**
 * BASE_BAND — the template that each family band inherits (v6 single page).
 * Band file writes only the differences; the deep merge is done by `mergeBand`.
 */
export const BASE_BAND = {
  scale: { label: '11px', caption: '12px', small: '14px', body: '16px', h3: '20px', h2: '28px', h1: '54px', h1Mobile: '32px' },
  displayWeight: 600,
  tracking: '-0.01em',
  trackingDisplay: '-0.02em',
  trackingHeading: '-0.015em',
  trackingLabel: '0.14em',
  lineHeight: { display: 1.06, heading: 1.18, body: 1.6 },
  measure: '66ch',
  shadow: '0 1px 2px rgba(0,0,0,.14)',
  radiusRule: 'Corner radius no more than two values; Rounding over 20px is not used.',
  forbiddenType: ['intermediate point steps (18/22/26px)', 'more than three font weights', 'shadow on text'],
  spacing: ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'],
  sectionY: { desktop: '72px', mobile: '44px' },
  cardPadding: '20px',
  grid: { columns: '12 (content 8, form 4)', gutter: '24px (mobil 16px)', container: '1160px', breakpoints: '640 / 900 / 1200 px' },
  elevation: [
    ['Background', '--bg', 'none', 'page'],
    ['Kart', '--surface + 1px --line', '--shadow', 'content block'],
    ['floating', '--surface + --shadow + --line', '--shadow', 'modal, popover, toast'],
  ],
  components: {
    button: { h: '44px', pad: '0 20px', radius: null, type: '14/600', color: '--accent + --accent-ink', states: 'hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft' },
    buttonSecondary: { h: '44px', pad: '0 18px', radius: null, type: '14/600', color: 'transparent + 1px --line', states: 'hover: --surface-2' },
    input: { h: '44px', pad: '0 14px', radius: null, type: '14/400', color: '--surface + 1px --line', states: 'focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2' },
    card: { h: 'content', pad: '20px', radius: null, type: 'H3+14 body', color: '--surface + --line + --shadow', states: 'hover only on clickable card: edge --ink 18%' },
    chip: { h: '24px', pad: '0 10px', radius: '999px', type: '11/500 mono', color: '--surface-2 + --line', states: 'aktif: --accent + --accent-ink' },
    nav: { h: '64px', pad: '0 24px', radius: '—', type: '14/500', color: '--bg + alt 1px --line', states: 'active: --ink + 2px underline' },
    tableRow: { h: '52px', pad: '12px 16px', radius: '—', type: '14/400 number mono', color: 'underline 1px --line', states: 'hover: --surface-2 · selected: left 2px --accent' },
    modal: { h: 'content', pad: '28px', radius: null, type: 'H3+14 body', color: '--surface + --shadow', states: 'arka plan --bg %72 + 8px blur' },
    toast: { h: '44px', pad: '0 16px', radius: null, type: '13/500', color: '--ink background + --bg text', states: 'icon + single line, 4sec' },
    chart: { h: '—', pad: '—', radius: null, type: '11px mono axis', color: '--accent + 16% accent fill + --line reference', states: 'three series at most' },
  },
  componentLabels: {
    button: 'Button (primary)',
    buttonSecondary: 'Buton (ikincil)',
    input: 'Input',
    card: 'Kart',
    chip: 'Chip / badge',
    nav: 'Nav',
    tableRow: 'table row',
    modal: 'Modal',
    toast: 'Toast',
    chart: 'Grafik paleti',
  },
  dress: {
    icons: '1.5px line, 24px box; filler is only active',
    photos: 'Single subject, soft light, low saturation; Cropped with 12px radius',
    illustration: 'Not preferred; use line-art --ink-soft if needed',
    texture: 'None (--grain: 0)',
    logo: 'Monochrome --ink, at least 24px height',
    mode: 'plain',
    strength: 0,
  },
  motif: 'none',
  bodyClass: '',
  extraCss: '',
  colorNote: 'Accent alone carries action and state; It is used with 14% padding in graphics.',
  typeNote: 'Scale ratio 1.5× and above; intermediate steps are not used.',
  gridNote: 'The grid is not visible: no auxiliary line is added, alignment is established with space.',
  surfaceNote: 'Depth comes not from light but from distinction: 1px line + ground tone difference.',
  touchNote: 'The target is enlarged by padding on the icon buttons.',
  a11yNote: 'prefers-reduced-motion and prefers-contrast are supported.',
  hierarchy: 'Maximum one large image per page; the rest is text and data.',
  essenceTail: 'It is an ornamentation discipline that carries a single visual signature to its fullest.',
  notThis: ["Just copying the palette doesn't add style; scale and rhythm of space are also required.", 'A second accent color turns this style into another.'],
  origin: 'It derives from the intersection of print, architecture and screen traditions; reinterpreted with screen typography.',
  recognition: ['Is a single accent color dominant?', 'Are corner radii from the same family?', 'Is the hierarchy established by point jumping?'],
  screens: [
    ['Landing / hero', 'high', 'Single headline (2 lines), 3-item trust line, single primary CTA'],
    ['Chapter · three cards', 'medium', 'Equal height, 20px in-card padding, title H3'],
    ['Section · media + text', 'medium', 'One image + 3 items; signature motif in the image'],
    ['Component grid', 'high', 'Button/input/card/table same radius and edge language'],
    ['Form + data', 'medium', 'Two columns: form on the left, graphic on the right; label on top'],
    ['CTA + footer', 'low', 'One sentence + one button; footer 4 columns'],
  ],
  traps: [
    ['The page looks "unfinished"', 'There is emptiness, no hierarchy', 'Add at least two extreme points and a single strong focus'],
    ['Cards stick together', 'Shadow/edge separation is poor', 'Separate with 1px --line + --surface tone'],
    ['Text is unreadable', 'used on ink-soft background', 'Write the body with --ink; --ink-soft secondary only'],
    ['Colour feels arbitrary', 'Second accent added', 'Single accent; produce tone difference with color-mix'],
  ],
  defaultDifficulty: 'medium',
  defaultA11y: 'good',
  extraBans: ['Adding dark mode and theme switcher (v6 out of scope).', 'Adding animations, transitions and parallax (v6 out of scope).'],
};

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

/** Merges band differences deep into the base (sequences change entirely).*/
export function mergeBand(override) {
  const merge = (base, over) => {
    if (!isObj(base) || !isObj(over)) return over === undefined ? base : over;
    const out = { ...base };
    for (const [k, v] of Object.entries(over)) out[k] = isObj(v) && isObj(base[k]) ? merge(base[k], v) : v;
    return out;
  };
  return merge(BASE_BAND, override ?? {});
}
