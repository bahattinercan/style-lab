# 244 · Bio Lab Interface

> **In one sentence:** Biology lab interface: dark green, acid accent, culture table and mono temperature.

| | |
|---|---|
| **Feeling** | alive, controlled, "37.0 °C" |
| **Best for** | biotechnology, culture tracking, lab automation |
| **Avoid** | a fashion campaign |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Future & Speculative (242–251) · **Token** | `kit/tokens.css` → `[data-style="bio-lab-interface"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Bio Lab Interface manages live samples through a table: temperature, pH, duration and status.

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
- **Culture table:** sample, temperature, duration in mono.
- **Acid green:** live/active samples only.
- **Dot texture:** cell-like, 6%.
- **Sharp panel:** 2–4px.
- **Typography:** Inter (display) + Inter (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#7ce86b`; neutral scale `#0a100d` → `#e9f4ec`.
- **Radius:** `2px` / `4px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Temperature, pH and duration on every sample.
2. Active state stated in text.
3. Units are mono.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a100d` | page background | as a card background |
| `--bg-2` | `#0e1511` | partition divider floor, table top | button background |
| `--surface` | `#121b16` | kart, input, modal | full-page background |
| `--surface-2` | `#1a251e` | passive chip, hover background | primary button |
| `--ink` | `#e9f4ec` | title, body, icon | large background |
| `--ink-soft` | `#a4bdaa` | secondary text, description | — |
| `--ink-faint` | `#7b9382` | decorative label, separator text | interactive text |
| `--accent` | `#7ce86b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#061505` | text above accent | non-accent background |
| `--line` | `rgba(233,244,236,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.03:1** · `ink-soft/bg` **9.55:1** · `ink-faint/bg` **5.8:1 (decorative)** · `accent-ink/accent` **12.18:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 54px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10.5px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- An animated cell.
- Neon degradeler.
- An unreadable 9px label.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 12.46:1 (≥ 3 on background/surface).
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
| `--ink` / `--bg` | 17.03:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.55:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.8:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 12.18:1 | ≥ 4.5 | button text |
| focus ring/ground | 12.46:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.4 | ≥ 60 target | thin text |

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
| garnish | `genomics-lab` | Same level of seriousness; accent sharing is not allowed |
| garnish | `lab-simulation` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `boutique-hotel` | Two different ornamental languages compete on the same screen |
| Mixing | `carnival-festival` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Biotechnology | Biotechnology (Wikipedia) — culture/measurement fields |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — body family |
| https://fonts.google.com/specimen/Share+Tech+Mono | Share Tech Mono (Google Fonts) — measurement |

## AI brief

```text
Design a biotech interface: dark green background, acid green on active samples only, mono measurements.

Style: Bio Lab Interface (bio-lab-interface) · family: Future & Speculative (242–251)
Token: --bg #0a100d · --surface #121b16 · --ink #e9f4ec · --accent #7ce86b · --line rgba(233,244,236,.14)
Radius: 2px / 4px · Typography: Inter / Inter / Share Tech Mono
Required: Temperature, pH and duration on every sample. · Active state stated in text. · Units are mono.
Banned: An animated cell. · Neon degradeler. · An unreadable 9px label.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="bio-lab-interface"] {
  --bg: #0a100d; --bg-2: #0e1511;
  --surface: #121b16; --surface-2: #1a251e;
  --ink: #e9f4ec; --ink-soft: #a4bdaa; --ink-faint: #7b9382;
  --accent: #7ce86b; --accent-ink: #061505;
  --line: rgba(233,244,236,.14);
  --danger: #e4392b;
  --danger-ink: #0b0d10;
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
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
