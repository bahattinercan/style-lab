# 250 · Neural Canvas

> **In one sentence:** Neural network canvas: layer nodes, purple accent, thin connections and mono layer size.

| | |
|---|---|
| **Feeling** | exploratory, experimental, "layer 3: 512" |
| **Best for** | model visualisation, training monitor, research note |
| **Avoid** | muhasebe defteri |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Future & Speculative (242–251) · **Token** | `kit/tokens.css` → `[data-style="neural-canvas"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Neural Canvas shows the model layer by layer: size, activation and parameters.

### What is not
- Neon is not a sci-fi cliché; accent signal, ground calm.
- Dark background is not mandatory; Contrast and line language are decisive.

### Where it comes from
The visual language of space program interfaces, laboratory instrument panels, and system diagrams.

### Recognition test in 3 seconds
1. Was Accent used as a signal?
2. Are the technical labels mono?
3. Line instead of shadow?

## Visual signature
- **Layer nodes:** one column per layer, node count in mono.
- **Thin connection:** 1px at 20% opacity.
- **Purple accent:** the selected layer only.
- **Activation note:** a short mono label.
- **Typography:** Space Grotesk (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#a97bf0`; neutral scale `#0b0b12` → `#eeeaf7`.
- **Radius:** `2px` / `6px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Size and activation on every layer.
2. Connections show layer relationships, not decoration.
3. Parameter count in mono.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b0b12` | page background | as a card background |
| `--bg-2` | `#101018` | partition divider floor, table top | button background |
| `--surface` | `#15151f` | kart, input, modal | full-page background |
| `--surface-2` | `#1d1d29` | passive chip, hover background | primary button |
| `--ink` | `#eeeaf7` | title, body, icon | large background |
| `--ink-soft` | `#b0aac4` | secondary text, description | — |
| `--ink-faint` | `#847f99` | decorative label, separator text | interactive text |
| `--accent` | `#a97bf0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0c0618` | text above accent | non-accent background |
| `--line` | `rgba(238,234,247,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.57:1** · `ink-soft/bg` **8.77:1** · `ink-faint/bg` **5.11:1 (decorative)** · `accent-ink/accent` **6.43:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 54px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Animated training.
- An eight-colour node set.
- An unreadable label.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.33:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| System / landing | medium | Single sentence + measuring tape | `shots/01-page.png` |
| scheme | high | Diagram + mono label | `shots/01-page.png` |
| Data | high | Chart + unit + time | `shots/01-page.png` |
| control | medium | 3 keys + threshold | `shots/01-page.png` |
| Registration / access | low | single column form | `shots/01-page.png` |
| Report | medium | Summary + table | `shots/01-page.png` |
| road map | medium | timeline | `shots/01-page.png` |
| Contact | low | Form + address | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.57:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.77:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.11:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.43:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.33:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.2 | ≥ 60 target | thin text |

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
| science fiction cliché | neon everywhere | Reduce Accent to 10% space |
| Schema not read | label on top of each other | Move label out of line |
| Contrast is low | Accent text | Make text --ink, accent line |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `agent-console` | Same level of seriousness; accent sharing is not allowed |
| garnish | `volumetric-data` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `boutique-hotel` | Two different ornamental languages compete on the same screen |
| Mixing | `regulatory-report` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Neural_network_(machine_learning) | Artificial neural network (Wikipedia) — layer notion |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — heading family |
| https://fonts.google.com/specimen/JetBrains+Mono | JetBrains Mono (Google Fonts) — layer/parameters |

## AI brief

```text
Design a neural network canvas: dark background, layer columns, thin connections, mono size/parameters.

Style: Neural Canvas (neural-canvas) · family: Future & Speculative (242–251)
Token: --bg #0b0b12 · --surface #15151f · --ink #eeeaf7 · --accent #a97bf0 · --line rgba(238,234,247,.14)
Radius: 2px / 6px · Typography: Space Grotesk / Inter / JetBrains Mono
Required: Size and activation on every layer. · Connections show layer relationships, not decoration. · Parameter count in mono.
Banned: Animated training. · An eight-colour node set. · An unreadable label.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="neural-canvas"] {
  --bg: #0b0b12; --bg-2: #101018;
  --surface: #15151f; --surface-2: #1d1d29;
  --ink: #eeeaf7; --ink-soft: #b0aac4; --ink-faint: #847f99;
  --accent: #a97bf0; --accent-ink: #0c0618;
  --line: rgba(238,234,247,.14);
  --danger: #e23829;
  --danger-ink: #000000;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
