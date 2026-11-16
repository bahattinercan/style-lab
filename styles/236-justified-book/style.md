# 236 · Justified Book

> **In one sentence:** Book typesetting: justified serif, 66ch measure, chapter number and a mono colophon.

| | |
|---|---|
| **Feeling** | literary, calm, "turn the page" |
| **Best for** | book/long read, publisher, literary magazine |
| **Avoid** | a fast dashboard |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Typography Experiments (232–241) · **Token** | `kit/tokens.css` → `[data-style="justified-book"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Justified Book sets the screen like a page: measure, justification and quiet hierarchy.

### What is not
- A heading is not typographic style alone; A grid and measurement are also required.
- It is not a pile of decorative fonts; One family is enough.

### Where it comes from
Experiments with Swiss typography, poster printing and editorial headlines.

### Recognition test in 3 seconds
1. Does the title span three lines?
2. Are there (shouldn't there be) more than two font families?
3. Is the corner radius 0?

## Visual signature
- **Justified:** `text-align: justify; hyphens: auto`.
- **66ch measure:** line length stays fixed.
- **Chapter number:** mono, top left.
- **Kolofon:** mono 11px, alt bilgi.
- **Typography:** Cormorant Garamond (display) + EB Garamond (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#5a2f6b`; neutral scale `#fbf8f1` → `#16130e`.
- **Radius:** `0px` / `0px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Body justified with hyphenation.
2. Chapter number and heading hierarchy.
3. Line height 1.65.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fbf8f1` | page background | as a card background |
| `--bg-2` | `#f2ece0` | partition divider floor, table top | button background |
| `--surface` | `#fffdf7` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f1e6` | passive chip, hover background | primary button |
| `--ink` | `#16130e` | title, body, icon | large background |
| `--ink-soft` | `#4d463b` | secondary text, description | — |
| `--ink-faint` | `#827a6a` | decorative label, separator text | interactive text |
| `--accent` | `#5a2f6b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fbf7fd` | text above accent | non-accent background |
| `--line` | `rgba(22,19,14,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.47:1** · `ink-soft/bg` **8.78:1** · `ink-faint/bg` **4.01:1 (decorative)** · `accent-ink/accent` **9.65:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 72px (mobile 38px) | 700 | 0.98 | -0.035em |
| H2 | same | 32px | 600 | 1.08 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 16px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Wide-screen body (90ch+).
- A card gallery.
- Rounded corners.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 0px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 0px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 0px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.05:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Poster hero | low | One title + one line description | `shots/01-page.png` |
| Manifesto | low | Long text, wide left space | `shots/01-page.png` |
| Dizin | high | Numbered line list, mono | `shots/01-page.png` |
| Makale | low | 62ch size, quote 32px | `shots/01-page.png` |
| Kolofon | low | imprint table | `shots/01-page.png` |
| Form | medium | Label on top, line input | `shots/01-page.png` |
| archive | high | Year + title, two columns | `shots/01-page.png` |
| Contact | low | Address + single line email | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.47:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.78:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.01:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.65:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.05:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 101 | ≥ 60 target | thin text |

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
| bears the title | no max-width | set 18ch limit |
| Text not readable | Size 90ch | reduce to 62ch |
| Hierarchy flat | Three intermediate points | Use two-point font |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `literary-hardcover` | Same level of seriousness; accent sharing is not allowed |
| garnish | `academic-paper` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `game-esports-league` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Justification_(typesetting) | Justification (typesetting) (Wikipedia) — typesetting rule |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — serif body |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — kolofon |

## AI brief

```text
Design a book page: justified serif body, 66ch measure, mono chapter number, colophon.

Style: Justified Book (justified-book) · family: Typography Experiments (232–241)
Token: --bg #fbf8f1 · --surface #fffdf7 · --ink #16130e · --accent #5a2f6b · --line rgba(22,19,14,.14)
Radius: 0px / 0px · Typography: Cormorant Garamond / EB Garamond / Courier Prime
Required: Body justified with hyphenation. · Chapter number and heading hierarchy. · Line height 1.65.
Banned: Wide-screen body (90ch+). · A card gallery. · Rounded corners.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="justified-book"] {
  --bg: #fbf8f1; --bg-2: #f2ece0;
  --surface: #fffdf7; --surface-2: #f6f1e6;
  --ink: #16130e; --ink-soft: #4d463b; --ink-faint: #827a6a;
  --accent: #5a2f6b; --accent-ink: #fbf7fd;
  --line: rgba(22,19,14,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b85600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
