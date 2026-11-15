/**
 * kit/lib/style-spec.mjs — SPEC → stil kaynakları (v6 tek sayfa sözleşmesi).
 *
 * Neden: yeni stil eklemek 8 adımdı ve üç kopyanın (tokens.json ⇄ token-block.css ⇄
 * tokens.css) elle senkronu en sık kırılan yerdi. Burada tek SPEC'ten dört kaynak
 * üretilir; `kit/add-style.mjs` geri kalan boru hattını (atama, render, indeks) koşar.
 *
 * v6 sözleşmesi: koyu mod (palette.dark) YOK, hareket (motion) YOK, sahne tek (01-page.png).
 */
import { contrastRatio, contrastOnSurface, apcaContrast, parseColor } from '../color.mjs';
import { deriveStatusColors } from './palette.mjs';

const hex = (v) => String(v).trim();

/** CSS değişken adları — token sözleşmesi sabittir (yeni stil değişken eklemez). */
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
 * v7 sözleşmesi: token bloğu 20 değişkenden 28'e çıkar.
 *  · --space-1…8 : dikey ritim; tüm stillerde aynı sekiz adım (bant ezebilir).
 *  · --danger/-ok/-warn (+ -ink): durum renkleri. Değerler `kit/lib/palette.mjs` çözücüsünden
 *    gelir (zemine karşı 4.5:1 hedefi), SPEC `status` alanıyla ezilebilir.
 * Neden: 161 stil `--danger`'ı elle eziyor, 90 stil global #b42318'e düşüyordu; JSON bu
 * değişkenleri hiç bilmiyordu (makine kaynağı ile CSS ayrışmıştı).
 */
export const STATUS_KEYS = ['danger', 'dangerInk', 'ok', 'okInk', 'warn', 'warnInk'];
export const SPACE_SCALE = ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'];

/** Durum renkleri: SPEC ezmesi yoksa çözücüden (zemine karşı 4.5:1). */
export function statusOf(spec) {
  const p = spec.palette ?? {};
  if (spec.status) return { ...deriveStatusColors(p), ...spec.status };
  return deriveStatusColors(p);
}

/** CSS çiftleri: 20 çekirdek + 8 boşluk + 6 durum = 34 bildirim. */
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

/** Yüzde binlik yuvarlama: rapora yazılan ölçümler tek biçimli olsun. */
const r2 = (n) => Math.round(n * 100) / 100;

/** Paleti ölçer: WCAG + APCA + odak halkası. Kapı eşikleri build sırasında uygulanır. */
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

/** SPEC doğrulaması: hatalar (build durur) ve uyarılar (raporlanır). */
export function validateSpec(spec, ctx) {
  const errors = [];
  const warnings = [];
  const need = (cond, msg) => {
    if (!cond) errors.push(msg);
  };

  need(/^\d{2,3}$/.test(String(spec.num ?? '')), `${spec.slug ?? '?'}: num 2–3 haneli olmalı`);
  need(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(spec.slug ?? ''), `${spec.slug ?? '?'}: slug kebab-case olmalı`);
  need(typeof spec.name === 'string' && spec.name.trim().length > 1, `${spec.slug}: name yok`);
  need(typeof spec.tagline === 'string' && spec.tagline.length > 20, `${spec.slug}: tagline yok/kısa`);
  if (spec.tagline && spec.tagline.length > 170) warnings.push(`${spec.slug}: tagline ${spec.tagline.length} karakter (>170)`);

  const palette = spec.palette ?? {};
  for (const [json] of CSS_KEYS) need(parseColor(palette[json]) !== null, `${spec.slug}: palette.${json} eksik/geçersiz`);
  const fonts = spec.fonts ?? [];
  need(fonts.length === 3, `${spec.slug}: fonts [display, body, mono] üçlüsü olmalı`);
  for (const f of fonts) if (ctx.fonts && !ctx.fonts.has(f)) errors.push(`${spec.slug}: font "${f}" kit/fonts içinde yok`);
  need(Array.isArray(spec.radius) && spec.radius.length === 2, `${spec.slug}: radius [radius, radiusLg] olmalı`);
  need(Array.isArray(spec.signature) && spec.signature.length >= 3, `${spec.slug}: signature ≥3 madde`);
  need(Array.isArray(spec.must) && spec.must.length >= 3, `${spec.slug}: must ≥3 madde`);
  need(Array.isArray(spec.mustNot) && spec.mustNot.length >= 3, `${spec.slug}: mustNot ≥3 madde`);
  need(Array.isArray(spec.refs) && spec.refs.length >= 3, `${spec.slug}: refs ≥3 kayıt`);
  for (const r of spec.refs ?? []) need(/^https:\/\//.test(r.url ?? ''), `${spec.slug}: refs url https olmalı (${r.url})`);
  need(Array.isArray(spec.keywords) && spec.keywords.length >= 3, `${spec.slug}: keywords ≥3`);
  need(typeof spec.brief === 'string' && spec.brief.length > 60, `${spec.slug}: brief yok/kısa`);
  need(typeof spec.feeling === 'string' && spec.feeling.length > 5, `${spec.slug}: feeling yok`);
  need(typeof spec.best === 'string' && spec.best.length > 5, `${spec.slug}: best yok`);
  need(typeof spec.avoid === 'string' && spec.avoid.length > 5, `${spec.slug}: avoid yok`);
  need(Boolean(ctx.band), `${spec.slug}: band "${spec.band}" kit/specs/bands.json içinde yok`);

  if (!errors.length) {
    const c = inspectPalette(spec.palette);
    if (c.body < 4.5) errors.push(`${spec.slug}: ink/bg ${c.body}:1 < 4.5`);
    if (c.soft < 4.5) errors.push(`${spec.slug}: ink-soft/bg ${c.soft}:1 < 4.5 (--strict-soft)`);
    if (c.accentInk < 4.5) errors.push(`${spec.slug}: accent-ink/accent ${c.accentInk}:1 < 4.5`);
    if (c.focus < 3) errors.push(`${spec.slug}: odak halkası accent/base ${c.focus}:1 < 3`);
    if (c.faint < 2.2) warnings.push(`${spec.slug}: ink-faint/bg ${c.faint}:1 çok düşük (dekoratif sınırı)`);
    if (c.apca < 60) warnings.push(`${spec.slug}: APCA ink/bg Lc ${c.apca} < 60`);
  }

  return { errors, warnings };
}

/* --------------------------------------------------------------- üreticiler */

const dirOf = (spec) => `${spec.num}-${spec.slug}`;
const quoteStack = (family) =>
  /mono|code|courier|vt323|share tech|press start|silkscreen/i.test(family)
    ? `"${family}", ui-monospace, monospace`
    : `"${family}", system-ui, sans-serif`;

/** tokens.json — makine kaynağı. */
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

/** token-block.css — apply-fragments'ın okuduğu kaynak blok. */
export function tokenBlockCss(spec, ctx) {
  const p = spec.palette;
  const [radius, radiusLg] = spec.radius;
  const fonts = spec.fonts;
  const lines = [
    `/* ${spec.num} · ${spec.name} — token bloğu (kaynak: styles/${dirOf(spec)}/tokens.json) */`,
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

/** shots.config.fragment.mjs — sahne imzası (yalnız var(--…) renk). */
export function fragmentModule(spec, ctx) {
  // Bant CSS'i (aile imzası) her zaman girer; stil CSS'i onun üstüne yazar.
  const extra = [ctx.band.extraCss ?? '', spec.extraCss ?? ''].filter(Boolean).join('\n');
  return `/**
 * ${spec.num} · ${spec.name} — render imzası.
 * Renk/tipografi/radius kit/tokens.css'ten gelir; burada yalnız var(--...) kullanılır.
 */
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

/** style.md — insan okur doküman (kapılar bölüm başlıklarını ve meta tabloyu arar). */
export function styleMarkdown(spec, ctx) {
  const b = ctx.band;
  const c = inspectPalette(spec.palette);
  const p = spec.palette;
  const scale = { ...b.scale, ...(spec.scale ?? {}) };
  const [radius, radiusLg] = spec.radius;
  const fonts = spec.fonts;
  const familyLabel = ctx.familyLabel;

  const colorNotes = {
    bg: 'sayfa zemini',
    bg2: 'bölüm ayırıcı zemin, tablo başı',
    surface: 'kart, input, modal',
    surface2: 'pasif chip, hover zemini',
    ink: 'başlık, gövde, ikon',
    inkSoft: 'ikincil metin, açıklama',
    inkFaint: 'dekoratif etiket, ayırıcı metin',
    accent: 'birincil eylem, aktif durum',
    accentInk: 'accent üstü metin',
    line: 'tüm kenarlıklar',
  };
  const colorAvoid = {
    bg: 'kart zemini olarak',
    bg2: 'buton zemini',
    surface: 'tam sayfa zemin',
    surface2: 'birincil buton',
    ink: 'dev zemin',
    inkFaint: 'etkileşimli metin',
    accent: 'geniş zemin (opaklık 0.14 ile)',
    accentInk: 'accent olmayan zemin',
    line: 'metin rengi',
  };

  const colorTable = table(
    ['Token', 'Değer', 'Nerede kullanılır', 'Nerede kullanılmaz'],
    CSS_KEYS.map(([json, css]) => [`\`--${css}\``, `\`${p[json]}\``, colorNotes[json], colorAvoid[json] ?? '—']),
  );

  const typeTable = table(
    ['Rol', 'Aile', 'Boyut', 'Ağırlık', 'Satır aralığı', 'Tracking'],
    [
      ['Display / H1', `\`--font-display\` (${fonts[0]})`, `${scale.h1} (mobil ${scale.h1Mobile})`, String(spec.displayWeight ?? b.displayWeight), String(b.lineHeight.display), spec.trackingDisplay ?? b.trackingDisplay],
      ['H2', 'aynı', scale.h2, '600', String(b.lineHeight.heading), spec.trackingHeading ?? b.trackingHeading],
      ['H3', 'aynı', scale.h3, '600', '1.3', '0'],
      ['Gövde', `\`--font-body\` (${fonts[1]})`, scale.body, '400', String(b.lineHeight.body), '0'],
      ['Küçük gövde', 'aynı', scale.small, '400', '1.55', '0'],
      ['Etiket', `\`--font-mono\` (${fonts[2]})`, scale.label, '400', '1.2', b.trackingLabel],
      ['Buton', `\`--font-body\``, scale.caption, '600', '1', '0'],
    ],
  );

  const screensTable = table(
    ['Ekran', 'Yoğunluk', 'Uygulama', 'Görsel'],
    ctx.screens.map(([screen, d, recipe]) => [screen, d, recipe, '`shots/01-page.png`']),
  );

  const componentTable = table(
    ['Bileşen', 'Yükseklik', 'Padding', 'Radius', 'Tipografi', 'Renk / gölge', 'Durumlar'],
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

  const trapTable = table(['Belirti', 'Neden', 'Düzeltme'], ctx.traps);

  const dressTable = table(
    ['Öğe', 'Kural'],
    [
      ['İkon', b.dress.icons],
      ['Fotoğraf', b.dress.photos],
      ['İllüstrasyon', b.dress.illustration],
      ['Doku', spec.texture ?? b.dress.texture],
      ['Logo', b.dress.logo],
    ],
  );

  const contrastTable = table(
    ['Çift', 'Oran', 'Eşik', 'Not'],
    [
      ['`--ink` / `--bg`', `${c.body}:1`, '≥ 4.5', 'gövde metni'],
      ['`--ink-soft` / `--bg`', `${c.soft}:1`, '≥ 4.5', 'ikincil metin'],
      ['`--ink-faint` / `--bg`', `${c.faint}:1`, '≥ 3 hedef', 'yalnız dekoratif'],
      ['`--accent-ink` / `--accent`', `${c.accentInk}:1`, '≥ 4.5', 'buton metni'],
      ['odak halkası / zemin', `${c.focus}:1`, '≥ 3', 'accent halka'],
      ['APCA `--ink` / `--bg`', `Lc ${c.apca}`, '≥ 60 hedef', 'ince metin'],
    ],
  );

  const tokenBlock = tokenBlockCss(spec, ctx)
    .split('\n')
    .slice(2)
    .join('\n')
    .trim();

  const md = `# ${spec.num} · ${spec.name}

> **Bir cümlede:** ${spec.tagline}

| | |
|---|---|
| **Hissiyat** | ${spec.feeling} |
| **En iyi** | ${spec.best} |
| **Kaçın** | ${spec.avoid} |
| **Zorluk** | ${spec.difficulty ?? b.defaultDifficulty} · **Erişilebilirlik** | ${spec.a11y ?? b.defaultA11y} |
| **Aile** | ${familyLabel} · **Token** | \`kit/tokens.css\` → \`[data-style="${spec.slug}"]\` |
| **Kompozisyon** | \`${(spec.layout ?? { hero: 'split' }).hero}\` · \`${(spec.layout ?? { nav: 'inline' }).nav}\` · \`${(spec.layout ?? { density: 'balanced' }).density}\` (bkz. \`kit/render/layouts.json\`) |
| **Görseller** | \`shots/01-page.png\` (tek sayfa · 1280×2400) |

## Öz

### Nedir
${spec.essence ?? `${spec.name}, ${b.essenceTail}. ${spec.signature[0]}`}

### Ne değildir
${(spec.notThis ?? b.notThis).map((x) => `- ${x}`).join('\n')}

### Nereden gelir
${spec.origin ?? b.origin}

### 3 saniyede tanıma testi
${(spec.recognition ?? b.recognition).map((q, i) => `${i + 1}. ${q}`).join('\n')}

## Görsel imza
${spec.signature.map((x) => `- ${x}`).join('\n')}
- **Tipografi:** ${fonts[0]} (display) + ${fonts[1]} (gövde) + ${fonts[2]} (mono etiket).
- **Renk disiplini:** tek accent \`${p.accent}\`; nötr skala \`${p.bg}\` → \`${p.ink}\`.
- **Yarıçap:** \`${radius}\` / \`${radiusLg}\`; ${spec.radiusRule ?? b.radiusRule}

## Zorunlu kurallar

${spec.must.map((x, i) => `${i + 1}. ${x}`).join('\n')}

## Renk

${colorTable}

- Ölçülen kontrast: \`ink/bg\` **${c.body}:1** · \`ink-soft/bg\` **${c.soft}:1** · \`ink-faint/bg\` **${c.faint}:1 (dekoratif)** · \`accent-ink/accent\` **${c.accentInk}:1**.
- ${spec.colorNote ?? b.colorNote}
- Opaklıkla tonlanan accent: \`color-mix(in srgb, var(--accent) 14%, var(--surface))\` — ikinci bir hex uydurma.

## Tipografi

${typeTable}

- ${spec.typeNote ?? b.typeNote}
- Ölçü: ${b.measure} (okuma metni), kart metni en fazla 52ch.
- ${spec.upper ? 'Başlıklar uppercase: `text-transform: uppercase` + pozitif tracking; gövde metni asla.' : 'Başlıklar cümle düzeninde (uppercase yok); uppercase yalnız mono etiketlerde.'}

## Izgara ve boşluk

${table(['Öğe', 'Değer'], Object.entries({
  Kolon: b.grid.columns,
  Gutter: b.grid.gutter,
  Container: b.grid.container,
  'Boşluk ölçeği': `${b.spacing.map((s) => s.replace('px', '')).join(' · ')} (\`--space-1…8\`)`,
  Breakpoint: b.grid.breakpoints,
}))}

- ${spec.gridNote ?? b.gridNote}
- Bölüm dikey boşluğu masaüstü ${b.sectionY.desktop}, mobil ${b.sectionY.mobile}; kart içi padding ${b.cardPadding}.

## Yüzey ve derinlik

${table(['Seviye', 'Token', 'Gölge', 'Kullanım'], b.elevation)}

- ${spec.surfaceNote ?? b.surfaceNote}
- Radius: \`${radius}\` (buton, input, chip), \`${radiusLg}\` (kart, modal). ${spec.radiusRule ?? b.radiusRule}

## Yasaklar

${spec.mustNot.map((x) => `- ${x}`).join('\n')}
${b.extraBans.map((x) => `- ${x}`).join('\n')}

## Bileşen reçeteleri

${componentTable}

- Odak halkası: \`:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }\`; halka ${c.focus}:1 (zemin/surface üstünde ≥ 3).
- Dokunma hedefi en az 44×44px; ${b.touchNote}

## Görsel dil

${dressTable}

- İmza motif: \`motif-${spec.motif ?? b.motif}\` (sahne şablonunda \`__MOTIF__\`).
- Görsel hiyerarşi: ${b.hierarchy}

## Ekran reçeteleri

${screensTable}

## Erişilebilirlik

${contrastTable}

- \`--ink-faint\` yalnız dekoratif; gövde metni asla.
- Renk tek başına anlam taşımaz: durum her zaman metin/ikonla birlikte.
- Klavye sırası görsel sırayı izler; odak tuzağı yok. ${b.a11yNote}

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| \`shots/01-page.png\` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

${trapTable}

## Komşu stiller

${table(['Yön', 'Stil', 'Neden'], [
  ...(spec.neighbors?.compatible ?? []).map((s) => ['Garnitür', `\`${s}\``, 'Aynı ciddiyet seviyesi; accent paylaşımı yapılmaz']),
  ...(spec.neighbors?.forbidden ?? []).map((s) => ['Karıştırma', `\`${s}\``, 'İki farklı süs dili aynı ekranda rekabet eder']),
])}

## Referanslar

${table(['Kaynak', 'Ne için'], spec.refs.map((r) => [`${r.url}`, `${r.label} — ${r.use}`]))}

## AI brief

\`\`\`text
${spec.brief}

Stil: ${spec.name} (${spec.slug}) · aile: ${familyLabel}
Token: --bg ${p.bg} · --surface ${p.surface} · --ink ${p.ink} · --accent ${p.accent} · --line ${p.line}
Yarıçap: ${radius} / ${radiusLg} · Tipografi: ${fonts[0]} / ${fonts[1]} / ${fonts[2]}
Zorunlu: ${spec.must.slice(0, 3).join(' · ')}
Yasak: ${spec.mustNot.slice(0, 3).join(' · ')}
Çıktı: tek sayfa (nav, hero, 3 bölüm, bileşen ızgarası, form+veri, CTA, footer), 1280×2400.
Kural: renk yalnız var(--…) üzerinden; ikinci accent yok; koyu mod ve animasyon yok.
\`\`\`

## Token

\`\`\`css
${tokenBlock}
\`\`\`
`;

  return md;
}

/** Üretilecek tüm dosyalar: yol → içerik. */
export function buildStyle(spec, ctx) {
  const dir = dirOf(spec);
  const c = inspectPalette(spec.palette);
  const styleCtx = {
    ...ctx,
    screens: spec.screens ?? ctx.band.screens,
    traps: spec.traps ?? ctx.band.traps,
  };
  return {
    files: {
      [`styles/${dir}/tokens.json`]: JSON.stringify(tokensJson(spec, ctx), null, 2) + '\n',
      [`styles/${dir}/token-block.css`]: tokenBlockCss(spec, ctx),
      [`styles/${dir}/shots.config.fragment.mjs`]: fragmentModule(spec, ctx),
      [`styles/${dir}/keywords.json`]: JSON.stringify(spec.keywords, null, 2) + '\n',
      [`styles/${dir}/style.md`]: styleMarkdown(spec, styleCtx),
    },
    metrics: c,
  };
}

/* ---------------------------------------------------------------- aile tabanı */

/**
 * BASE_BAND — her aile bandının devraldığı şablon (v6 tek sayfa).
 * Band dosyası yalnız farkları yazar; derin birleştirme `mergeBand` ile yapılır.
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
  radiusRule: 'Köşe yarıçapı iki değerden fazla değil; 20px üzeri yuvarlatma kullanılmaz.',
  forbiddenType: ['ara punto basamakları (18/22/26px)', 'üçten fazla font ağırlığı', 'metin üzerinde gölge'],
  spacing: ['4px', '8px', '12px', '16px', '24px', '32px', '48px', '64px'],
  sectionY: { desktop: '72px', mobile: '44px' },
  cardPadding: '20px',
  grid: { columns: '12 (içerik 8, form 4)', gutter: '24px (mobil 16px)', container: '1160px', breakpoints: '640 / 900 / 1200 px' },
  elevation: [
    ['Zemin', '--bg', 'yok', 'sayfa'],
    ['Kart', '--surface + 1px --line', '--shadow', 'içerik bloğu'],
    ['Yüzen', '--surface + --shadow + --line', '--shadow', 'modal, popover, toast'],
  ],
  components: {
    button: { h: '44px', pad: '0 20px', radius: null, type: '14/600', color: '--accent + --accent-ink', states: 'hover: ton koyulaşır · active: 1px aşağı · focus: 2px --accent halka · disabled: --surface-2 + --ink-soft' },
    buttonSecondary: { h: '44px', pad: '0 18px', radius: null, type: '14/600', color: 'transparent + 1px --line', states: 'hover: --surface-2' },
    input: { h: '44px', pad: '0 14px', radius: null, type: '14/400', color: '--surface + 1px --line', states: 'focus: 2px --accent halka · error: --danger kenar + 12px açıklama · disabled: --bg-2' },
    card: { h: 'içerik', pad: '20px', radius: null, type: 'H3 + 14 gövde', color: '--surface + --line + --shadow', states: 'hover yalnız tıklanabilir kartta: kenar --ink %18' },
    chip: { h: '24px', pad: '0 10px', radius: '999px', type: '11/500 mono', color: '--surface-2 + --line', states: 'aktif: --accent + --accent-ink' },
    nav: { h: '64px', pad: '0 24px', radius: '—', type: '14/500', color: '--bg + alt 1px --line', states: 'aktif: --ink + 2px alt çizgi' },
    tableRow: { h: '52px', pad: '12px 16px', radius: '—', type: '14/400 · sayı mono', color: 'satır altı 1px --line', states: 'hover: --surface-2 · seçili: sol 2px --accent' },
    modal: { h: 'içerik', pad: '28px', radius: null, type: 'H3 + 14 gövde', color: '--surface + --shadow', states: 'arka plan --bg %72 + 8px blur' },
    toast: { h: '44px', pad: '0 16px', radius: null, type: '13/500', color: '--ink zemin + --bg metin', states: 'ikon + tek satır, 4sn' },
    chart: { h: '—', pad: '—', radius: null, type: 'eksen 11 mono', color: '--accent + accent %16 dolgu + --line referans', states: 'en fazla 3 seri' },
  },
  componentLabels: {
    button: 'Buton (birincil)',
    buttonSecondary: 'Buton (ikincil)',
    input: 'Input',
    card: 'Kart',
    chip: 'Chip / badge',
    nav: 'Nav',
    tableRow: 'Tablo satırı',
    modal: 'Modal',
    toast: 'Toast',
    chart: 'Grafik paleti',
  },
  dress: {
    icons: '1.5px çizgi, 24px kutu; dolgu yalnız aktif durumda',
    photos: 'Tek konu, yumuşak ışık, düşük doygunluk; 12px radius ile kırpılır',
    illustration: 'Tercih edilmez; gerekiyorsa line-art --ink-soft',
    texture: 'Yok (--grain: 0)',
    logo: 'Monokrom --ink, en az 24px yükseklik',
    mode: 'plain',
    strength: 0,
  },
  motif: 'none',
  bodyClass: '',
  extraCss: '',
  colorNote: 'Accent tek başına eylem ve durum taşır; grafiklerde %14 dolgu ile kullanılır.',
  typeNote: 'Ölçek oranı 1.5× ve üzeri; ara basamak kullanılmaz.',
  gridNote: 'Izgara görünmez: yardımcı çizgi eklenmez, hizalama boşlukla kurulur.',
  surfaceNote: 'Derinlik ışıktan değil ayrımdan gelir: 1px çizgi + zemin tonu farkı.',
  touchNote: 'ikon butonlarında padding ile hedef büyütülür.',
  a11yNote: 'prefers-reduced-motion ve prefers-contrast desteklenir.',
  hierarchy: 'Sayfada en fazla bir büyük görsel; gerisi metin ve veri.',
  essenceTail: 'tek bir görsel imzayı sonuna kadar taşıyan bir süsleme disiplinidir',
  notThis: ['Sadece paleti kopyalamak stili getirmez; ölçek ve boşluk ritmi de gerekir.', 'İkinci bir accent rengi bu stili başka bir stile çevirir.'],
  origin: 'Baskı, mimarlık ve ekran geleneklerinin kesişiminden türedi; ekran tipografisiyle yeniden yorumlandı.',
  recognition: ['Tek bir accent rengi mi baskın?', 'Köşe yarıçapları aynı aileden mi?', 'Hiyerarşi punto zıplamasıyla mı kurulmuş?'],
  screens: [
    ['Landing / hero', 'yüksek', 'Tek başlık (2 satır), 3 maddelik güven satırı, tek birincil CTA'],
    ['Bölüm · üç kart', 'orta', 'Eşit yükseklik, kart içi 20px padding, başlık H3'],
    ['Bölüm · medya + metin', 'orta', 'Bir görsel + 3 madde; görselde imza motif'],
    ['Bileşen ızgarası', 'yüksek', 'Buton/input/kart/tablo aynı yarıçap ve kenar dili'],
    ['Form + veri', 'orta', 'İki kolon: form solda, grafik sağda; etiket üstte'],
    ['CTA + footer', 'düşük', 'Tek cümle + tek buton; footer 4 kolon'],
  ],
  traps: [
    ['Sayfa "bitmemiş" görünüyor', 'Boşluk var, hiyerarşi yok', 'En az iki uç punto ve tek güçlü odak ekle'],
    ['Kartlar birbirine yapışıyor', 'Gölge/kenar ayrımı zayıf', '1px --line + --surface tonu ile ayır'],
    ['Metin okunmuyor', 'ink-soft zemin üstünde kullanılmış', 'Gövdeyi --ink ile yaz; --ink-soft yalnız ikincil'],
    ['Renk cıvıyor', 'İkinci accent eklenmiş', 'Tek accent; ton farkını color-mix ile üret'],
  ],
  defaultDifficulty: 'orta',
  defaultA11y: 'iyi',
  extraBans: ['Koyu mod ve tema değiştirici ekleme (v6 kapsam dışı).', 'Animasyon, geçiş ve parallax ekleme (v6 kapsam dışı).'],
};

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

/** Band farklarını tabana derin birleştirir (diziler bütünüyle değişir). */
export function mergeBand(override) {
  const merge = (base, over) => {
    if (!isObj(base) || !isObj(over)) return over === undefined ? base : over;
    const out = { ...base };
    for (const [k, v] of Object.entries(over)) out[k] = isObj(v) && isObj(base[k]) ? merge(base[k], v) : v;
    return out;
  };
  return merge(BASE_BAND, override ?? {});
}
