# 238 · Uppercase Only

> **In one sentence:** Uppercase only: wide tracking, short lines, one accent and architectural space.

| | |
|---|---|
| **Feeling** | commanding, crisp, "like a heading" |
| **Best for** | cultural institution, architecture office, event identity |
| **Avoid** | uzun okuma metni |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Typography Experiments (232–241) · **Token** | `kit/tokens.css` → `[data-style="uppercase-only"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Uppercase Only works with short, declarative sentences: long text is the enemy of this language.

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
- **All uppercase:** heading and body; 0.02em tracking for legibility.
- **Short line:** 42ch maximum.
- **Wide space:** 88px sections.
- **Single accent:** label only.
- **Typography:** Space Grotesk (display) + Space Grotesk (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#1f4b3a`; neutral scale `#f4f4f1` → `#101012`.
- **Radius:** `0px` / `0px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Line length never exceeds 42ch.
2. Tracking never drops below 0.02em.
3. Heading and body use the same family.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f4f1` | page background | as a card background |
| `--bg-2` | `#e8e8e3` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f0f0ec` | passive chip, hover background | primary button |
| `--ink` | `#101012` | title, body, icon | large background |
| `--ink-soft` | `#47474a` | secondary text, description | — |
| `--ink-faint` | `#78787b` | decorative label, separator text | interactive text |
| `--accent` | `#1f4b3a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6fdfa` | text above accent | non-accent background |
| `--line` | `rgba(16,16,18,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.25:1** · `ink-soft/bg` **8.4:1** · `ink-faint/bg` **3.99:1 (decorative)** · `accent-ink/accent` **9.57:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 72px (mobile 38px) | 700 | 0.98 | -0.035em |
| H2 | same | 32px | 600 | 1.08 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headers uppercase: `text-transform: uppercase` + positive tracking; never body text.

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

- Long paragraphs (eight lines or more).
- More than three sizes.
- A rounded card.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.88:1 (≥ 3 on background/surface).
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
| `--ink` / `--bg` | 17.25:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.4:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.99:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.57:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.88:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.8 | ≥ 60 target | thin text |

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
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `variable-weight` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `literary-hardcover` | Two different ornamental languages compete on the same screen |
| Mixing | `poetry-chapbook` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Letter_case | Letter case (Wikipedia) — uppercase legibility |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — tek aile |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — legibility criteria |

## AI brief

```text
Design an uppercase identity page: wide tracking, 42ch lines, architectural space, one accent.

Style: Uppercase Only (uppercase-only) · family: Typography Experiments (232–241)
Token: --bg #f4f4f1 · --surface #ffffff · --ink #101012 · --accent #1f4b3a · --line rgba(16,16,18,.16)
Radius: 0px / 0px · Typography: Space Grotesk / Space Grotesk / Space Mono
Required: Line length never exceeds 42ch. · Tracking never drops below 0.02em. · Heading and body use the same family.
Banned: Long paragraphs (eight lines or more). · More than three sizes. · A rounded card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="uppercase-only"] {
  --bg: #f4f4f1; --bg-2: #e8e8e3;
  --surface: #ffffff; --surface-2: #f0f0ec;
  --ink: #101012; --ink-soft: #47474a; --ink-faint: #78787b;
  --accent: #1f4b3a; --accent-ink: #f6fdfa;
  --line: rgba(16,16,18,.16);
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
