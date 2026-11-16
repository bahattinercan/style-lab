# 229 · Hand-thrown Ceramic

> **In one sentence:** Handmade ceramic: clay white background, glaze green accent, irregular edge and a mono kiln note.

| | |
|---|---|
| **Feeling** | warm, handmade, "one by one" |
| **Best for** | ceramic workshop, handmade product, limited batch |
| **Avoid** | an industrial panel |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Material & Craft (222–231) · **Token** | `kit/tokens.css` → `[data-style="hand-thrown-ceramic"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Hand-thrown Ceramic shows batch and kiln: no piece can be repeated.

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
- **Irregular edge:** corners differ by 8px radius (10/18).
- **Clay white:** warm background.
- **Glaze green:** the only accent.
- **Kiln note:** mono temperature and batch.
- **Typography:** Fraunces (display) + Lora (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#2f5d4a`; neutral scale `#faf7f1` → `#1d1811`.
- **Radius:** `10px` / `16px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Batch number and kiln temperature on every piece.
2. Volume and dimensions in mono ml/cm.
3. A single object per photo, soft shadow.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf7f1` | page background | as a card background |
| `--bg-2` | `#f1eade` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f1e6` | passive chip, hover background | primary button |
| `--ink` | `#1d1811` | title, body, icon | large background |
| `--ink-soft` | `#544b3c` | secondary text, description | — |
| `--ink-faint` | `#877b66` | decorative label, separator text | interactive text |
| `--accent` | `#2f5d4a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f5fdf9` | text above accent | non-accent background |
| `--line` | `rgba(29,24,17,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.49:1** · `ink-soft/bg` **8.02:1** · `ink-faint/bg` **3.88:1 (decorative)** · `accent-ink/accent` **7.29:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 52px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16px | 400 | 1.62 | 0 |
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
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- A flawless vector cube.
- Parlak seramik efekti.
- A five-colour glaze palette.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.42:1 (≥ 3 on background/surface).
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
| `--ink` / `--bg` | 16.49:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.02:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.88:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.42:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.8 | ≥ 60 target | thin text |

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
| garnish | `porcelain-glaze` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cork-oak` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `game-racing-neon` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Pottery | Pottery (Wikipedia) — kiln/batch notion |
| https://fonts.google.com/specimen/Fraunces | Fraunces (Google Fonts) — serif heading |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — kiln note |

## AI brief

```text
Design a ceramic workshop page: clay white background, glaze green accent, irregular corners, mono kiln note.

Style: Hand-thrown Ceramic (hand-thrown-ceramic) · family: Material & Craft (222–231)
Token: --bg #faf7f1 · --surface #fffdf8 · --ink #1d1811 · --accent #2f5d4a · --line rgba(29,24,17,.13)
Radius: 10px / 16px · Typography: Fraunces / Lora / Courier Prime
Required: Batch number and kiln temperature on every piece. · Volume and dimensions in mono ml/cm. · A single object per photo, soft shadow.
Banned: A flawless vector cube. · Parlak seramik efekti. · A five-colour glaze palette.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="hand-thrown-ceramic"] {
  --bg: #faf7f1; --bg-2: #f1eade;
  --surface: #fffdf8; --surface-2: #f7f1e6;
  --ink: #1d1811; --ink-soft: #544b3c; --ink-faint: #877b66;
  --accent: #2f5d4a; --accent-ink: #f5fdf9;
  --line: rgba(29,24,17,.13);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b75600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 1px 2px rgba(0,0,0,.16); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.03;
}
```
