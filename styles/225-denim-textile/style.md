# 225 · Denim Textile

> **In one sentence:** Denim texture: indigo blue, double-stitch line, linen background and a mono size table.

| | |
|---|---|
| **Feeling** | durable, everyday, "stitch mark" |
| **Best for** | textile/denim brand, size table, product detail |
| **Avoid** | luxury jewellery |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Material & Craft (222–231) · **Token** | `kit/tokens.css` → `[data-style="denim-textile"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Denim Textile explains durability through stitch lines and a measurement table.

### What is not
- Adding cardboard texture is not style alone.
- It is not skeuomorphism; There is texture, no imitation objects.

### Where it comes from
Material information of letterpress, ink, paper and metal printing workshops.

### Recognition test in 3 seconds
1. Is the tissue under 5%?
2. Is the hood slim and quiet?
3. Is the edge sharp?

## Visual signature
- **Double stitch:** a 1px divider plus a second rule 4px away.
- **Indigo accent:** size and CTA only.
- **Size table:** mono measurements, cm.
- **Sharp edge:** 2–4px.
- **Typography:** Space Grotesk (display) + Inter (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#1b3f6b`; neutral scale `#f2f4f7` → `#121821`.
- **Radius:** `2px` / `4px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Size table in cm and mono.
2. Fabric content is stated.
3. The stitch line stays decorative and never touches text.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f4f7` | page background | as a card background |
| `--bg-2` | `#e6eaf0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#eef1f6` | passive chip, hover background | primary button |
| `--ink` | `#121821` | title, body, icon | large background |
| `--ink-soft` | `#454e5c` | secondary text, description | — |
| `--ink-faint` | `#78818e` | decorative label, separator text | interactive text |
| `--accent` | `#1b3f6b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6faff` | text above accent | non-accent background |
| `--line` | `rgba(18,24,33,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.17:1** · `ink-soft/bg` **7.63:1** · `ink-faint/bg` **3.58:1 (decorative)** · `accent-ink/accent` **10.17:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 52px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
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

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- A pile of jeans icons.
- A five-colour wash palette.
- A rounded card.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 2px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 2px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 2px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.66:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Vitrin | medium | Macro texture + single title | `shots/01-page.png` |
| Numune / swatch | high | Grid 4 columns, label mono | `shots/01-page.png` |
| Detay | medium | Texture + imprint table | `shots/01-page.png` |
| Process | medium | 3 steps, numbered | `shots/01-page.png` |
| Order / request | low | Form 2 kolon | `shots/01-page.png` |
| archive | high | Year + material label | `shots/01-page.png` |
| workshop | low | Long text + photo | `shots/01-page.png` |
| Contact | low | Address + form | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.17:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.63:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.58:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.17:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.66:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.9 | ≥ 60 target | thin text |

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
| Texture is noisy | Grain above 10% | Reduce to 4%, use only on large surface |
| Title gets crushed | Texture behind text | Move text block to opaque surface |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `raw-steel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `boutique-hotel` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Denim | Denim (Wikipedia) — fabric/stitch context |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — heading family |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — size table |

## AI brief

```text
Design a denim product page: linen-blue background, double-stitch line, mono cm size table, indigo accent.

Style: Denim Textile (denim-textile) · family: Material & Craft (222–231)
Token: --bg #f2f4f7 · --surface #ffffff · --ink #121821 · --accent #1b3f6b · --line rgba(18,24,33,.14)
Radius: 2px / 4px · Typography: Space Grotesk / Inter / Courier Prime
Required: Size table in cm and mono. · Fabric content is stated. · The stitch line stays decorative and never touches text.
Banned: A pile of jeans icons. · A five-colour wash palette. · A rounded card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="denim-textile"] {
  --bg: #f2f4f7; --bg-2: #e6eaf0;
  --surface: #ffffff; --surface-2: #eef1f6;
  --ink: #121821; --ink-soft: #454e5c; --ink-faint: #78818e;
  --accent: #1b3f6b; --accent-ink: #f6faff;
  --line: rgba(18,24,33,.14);
  --danger: #d62a1d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
