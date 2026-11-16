# 234 · Blackletter Modern

> **In one sentence:** Modern gothic: heavy serif heading, night background, a single blood colour and a plain body.

| | |
|---|---|
| **Feeling** | ancient, powerful, "seal" |
| **Best for** | event/club identity, beer/whisky label, culture programme |
| **Avoid** | children's education |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Typography Experiments (232–241) · **Token** | `kit/tokens.css` → `[data-style="blackletter-modern"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Blackletter Modern balances the weight of gothic lettering against a modern scale: heavy heading, calm body.

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
- **Heavy serif heading:** Cinzel 54px, wide letter spacing.
- **Single blood colour:** accent on the seal and CTA only.
- **Plain body:** EB Garamond 16px.
- **No borders:** nothing but hairlines.
- **Typography:** Cinzel (display) + EB Garamond (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#c43a2f`; neutral scale `#100e0c` → `#f2ece4`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Gothic headings in H1/H2 only.
2. The body stays serif and readable; no ornament.
3. Accent tek.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#100e0c` | page background | as a card background |
| `--bg-2` | `#15120f` | partition divider floor, table top | button background |
| `--surface` | `#1b1714` | kart, input, modal | full-page background |
| `--surface-2` | `#241f1b` | passive chip, hover background | primary button |
| `--ink` | `#f2ece4` | title, body, icon | large background |
| `--ink-soft` | `#bdb2a5` | secondary text, description | — |
| `--ink-faint` | `#8d8377` | decorative label, separator text | interactive text |
| `--accent` | `#c43a2f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6f4` | text above accent | non-accent background |
| `--line` | `rgba(242,236,228,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.41:1** · `ink-soft/bg` **9.24:1** · `ink-faint/bg` **5.18:1 (decorative)** · `accent-ink/accent` **4.92:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 72px (mobile 38px) | 700 | 0.98 | -0.035em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- A real blackletter face (unreadable).
- A four-colour medieval palette.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.66:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 16.41:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.24:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.18:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.92:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.66:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.6 | ≥ 60 target | thin text |

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
| garnish | `victorian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `theatre-season` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `kids-classroom` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Blackletter | Blackletter (Wikipedia) — letter tradition |
| https://fonts.google.com/specimen/Cinzel | Cinzel (Google Fonts) — gothic-inspired heading |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond (Google Fonts) — body |

## AI brief

```text
Design a modern gothic identity page: night background, heavy serif heading, a single blood colour, plain body.

Style: Blackletter Modern (blackletter-modern) · family: Typography Experiments (232–241)
Token: --bg #100e0c · --surface #1b1714 · --ink #f2ece4 · --accent #c43a2f · --line rgba(242,236,228,.15)
Radius: 0px / 2px · Typography: Cinzel / EB Garamond / Courier Prime
Required: Gothic headings in H1/H2 only. · The body stays serif and readable; no ornament. · Accent tek.
Banned: A real blackletter face (unreadable). · A four-colour medieval palette. · A rounded card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="blackletter-modern"] {
  --bg: #100e0c; --bg-2: #15120f;
  --surface: #1b1714; --surface-2: #241f1b;
  --ink: #f2ece4; --ink-soft: #bdb2a5; --ink-faint: #8d8377;
  --accent: #c43a2f; --accent-ink: #fdf6f4;
  --line: rgba(242,236,228,.15);
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
