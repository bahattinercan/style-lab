# 188 · Furniture Studio

> **In one sentence:** Furniture studio: warm oak palette, large product photo, size chart and simple price line.

| | |
|---|---|
| **Feeling** | calm, tactile, "I will measure" |
| **Best for** | furniture/decoration, product detail, size selection |
| **Avoid** | hype drop, dark night theme |
| **Difficulty** | medium · **Accessibility** | iyi |
| **Family** | Commerce & Showcase (182–191) · **Token** | `kit/tokens.css` → `[data-style="furniture-studio"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Furniture Studio supports the purchasing decision with measurement: the photo is large, the numbers are clear.

### What is not
- It is not a showcase poster; The product grid and price hierarchy are decisive.
- Discount red is not used everywhere; One emphasis is enough.

### Where it comes from
The on-screen equivalent of printed catalogue, storefront and marketplace listing layouts.

### Recognition test in 3 seconds
1. Is the price eye in the first three seconds?
2. The only accent action color?
3. Is the product image box 4:5?

## Visual signature
- **Size table:** width/depth/height mm, mono.
- **Oak accent:** selected variant and price only.
- **Wide photo:** crop 4:3, shadow soft.
- **plain price:** single line, vat note mono.
- **Typography:** Jost (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#7a4b22`; neutral scale `#faf6f0` → `#1d1811`.
- **Radius:** `4px` / `8px`; Card 10–14px, button 6–10px; full circle only chip/badge.

## Mandatory rules

1. Dimensions mm and mono; fabric/color variant separate line.
2. Delivery time is written in text.
3. Photo ratio is 4:3, cropping is consistent.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf6f0` | page background | as a card background |
| `--bg-2` | `#f1e9dd` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f1e8` | passive chip, hover background | primary button |
| `--ink` | `#1d1811` | title, body, icon | large background |
| `--ink-soft` | `#544b40` | secondary text, description | — |
| `--ink-faint` | `#867b6d` | decorative label, separator text | interactive text |
| `--accent` | `#7a4b22` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf8f2` | text above accent | non-accent background |
| `--line` | `rgba(29,24,17,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.38:1** · `ink-soft/bg` **7.94:1** · `ink-faint/bg` **3.85:1 (decorative)** · `accent-ink/accent` **6.96:1**.
- Price and stock information is written with --ink, not accent; accent solo action (cart, buy).
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 44px (mobile 30px) | 600 | 1.06 | -0.02em |
| H2 | same | 26px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Price 26–32px display, currency 13px mono; product name 15px/600.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Product grid 3–4 columns; card ratio 4:5. Filter rail 240px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Cards are separated by light shadow; On hover, the shadow grows, the edge does not change.
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Card 10–14px, button 6–10px; full circle only chip/badge.

## Bans

- Animated 360° rotation.
- On iki varyant chip'i.
- Round 20px+ card.
- Stack of discount labels on price.
- More than four types of rosettes.
- Auto-playing image.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.35:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; basket/favorite full |
| photo | The product is single object, white/neutral backdrop, shadow is soft; 4:5 |
| illustration | Thin line only in category title |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Vitrin / landing | medium | Hero + 3 featured products; single CTA | `shots/01-page.png` |
| product grid | high | 3–4 columns, 4:5 image, price + single line description | `shots/01-page.png` |
| Product detail | medium | Gallery on the left, price + variant on the right | `shots/01-page.png` |
| basket | medium | Row 64px, piece stepper, subtotal right aligned | `shots/01-page.png` |
| Payment | low | Single column 480px, 3 fields, single button | `shots/01-page.png` |
| filter panel | high | Ray 240px, chips single line, reset | `shots/01-page.png` |
| Category/collection | medium | Title + description + grid | `shots/01-page.png` |
| Account / order | medium | Order card + status label | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.38:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.94:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.85:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.96:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.35:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.3 | ≥ 60 target | thin text |

- `--ink-faint` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. prefers-reduced-motion and prefers-contrast are supported.

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

| Symptom | Cause | Fix |
| --- | --- | --- |
| The product looks small | More card padding | Reduce padding to 12px, increase image to 86% of card |
| price disappears | Price in body size | Make price 26px+ display, currency mono |
| The showcase feels slow | Excess shadow/rosette | Lower the shadow to one level, keep the badge single |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `boutique-hotel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `game-racing-neon` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Furniture | Furniture (Wikipedia) — size/variant fields |
| https://fonts.google.com/specimen/Jost | Jost (Google Fonts) — title and body |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — size and price note |

## AI brief

```text
Design furniture product detail: warm floor, wide 4:3 photo, mono size chart, single accent price.

Style: Furniture Studio (furniture-studio) · family: Commerce & Showcase (182–191)
Token: --bg #faf6f0 · --surface #ffffff · --ink #1d1811 · --accent #7a4b22 · --line rgba(29,24,17,.13)
Radius: 4px / 8px · Typography: Jost / Jost / IBM Plex Mono
Required: Dimensions mm and mono; fabric/color variant separate line. · Delivery time is written in text. · Photo ratio is 4:3, cropping is consistent.
Banned: Animated 360° rotation. · On iki varyant chip'i. · Round 20px+ card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="furniture-studio"] {
  --bg: #faf6f0; --bg-2: #f1e9dd;
  --surface: #ffffff; --surface-2: #f7f1e8;
  --ink: #1d1811; --ink-soft: #544b40; --ink-faint: #867b6d;
  --accent: #7a4b22; --accent-ink: #fdf8f2;
  --line: rgba(29,24,17,.13);
  --danger: #d92c20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
