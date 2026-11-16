# 226 · Cork Oak

> **In one sentence:** Cork oak: warm brown background, grained texture, rounded edges and a mono production note.

| | |
|---|---|
| **Feeling** | natural, light, "tactile" |
| **Best for** | sustainable product, natural material, packaging |
| **Avoid** | neon teknoloji |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Material & Craft (222–231) · **Token** | `kit/tokens.css` → `[data-style="cork-oak"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Cork Oak conveys the lightness of the material: texture, thickness and traceability.

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
- **Grained texture:** in images only, 4% grain.
- **Rounded edge:** 8/14px, soft.
- **Coffee accent:** a single warm highlight.
- **Production note:** mono certificate code.
- **Typography:** Fraunces (display) + Nunito (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#6b4413`; neutral scale `#faf5ee` → `#1c1710`.
- **Radius:** `8px` / `14px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Sertifika/izlenebilirlik kodu mono.
2. Material thickness is stated.
3. Texture is never placed behind text.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf5ee` | page background | as a card background |
| `--bg-2` | `#f0e5d7` | partition divider floor, table top | button background |
| `--surface` | `#fffcf7` | kart, input, modal | full-page background |
| `--surface-2` | `#f7eddf` | passive chip, hover background | primary button |
| `--ink` | `#1c1710` | title, body, icon | large background |
| `--ink-soft` | `#544636` | secondary text, description | — |
| `--ink-faint` | `#87775f` | decorative label, separator text | interactive text |
| `--accent` | `#6b4413` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf9f3` | text above accent | non-accent background |
| `--line` | `rgba(28,23,16,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.42:1** · `ink-soft/bg` **8.39:1** · `ink-faint/bg` **4:1 (decorative)** · `accent-ink/accent` **8.13:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 52px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `8px` (buton, input, chip), `14px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- A fake wood pattern.
- A four-colour nature palette.
- Sharp 0px corners.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.34:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 16.42:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.39:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.13:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.34:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99 | ≥ 60 target | thin text |

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
| garnish | `wood-joinery` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terrazzo-stone` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `game-racing-neon` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Cork_(material) | Cork (material) (Wikipedia) — material properties |
| https://fonts.google.com/specimen/Fraunces | Fraunces (Google Fonts) — serif heading |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — production note |

## AI brief

```text
Design a cork material page: warm background, rounded edges, 4% grained texture, mono production code.

Style: Cork Oak (cork-oak) · family: Material & Craft (222–231)
Token: --bg #faf5ee · --surface #fffcf7 · --ink #1c1710 · --accent #6b4413 · --line rgba(28,23,16,.14)
Radius: 8px / 14px · Typography: Fraunces / Nunito / Space Mono
Required: Sertifika/izlenebilirlik kodu mono. · Material thickness is stated. · Texture is never placed behind text.
Banned: A fake wood pattern. · A four-colour nature palette. · Sharp 0px corners.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="cork-oak"] {
  --bg: #faf5ee; --bg-2: #f0e5d7;
  --surface: #fffcf7; --surface-2: #f7eddf;
  --ink: #1c1710; --ink-soft: #544636; --ink-faint: #87775f;
  --accent: #6b4413; --accent-ink: #fdf9f3;
  --line: rgba(28,23,16,.14);
  --danger: #d82c1f;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.04;
}
```
