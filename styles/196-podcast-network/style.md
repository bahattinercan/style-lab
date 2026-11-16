# 196 · Podcast Network

> **In one sentence:** Podcast network: dark graphite, purple accent, episode list and mono time-rest metrics.

| | |
|---|---|
| **Feeling** | personal, rhythmic, "next chapter" |
| **Best for** | podcast network, episode archive, listening list |
| **Avoid** | an official audit report |
| **Difficulty** | medium · **Accessibility** | iyi |
| **Family** | Culture & Publishing (192–201) · **Token** | `kit/tokens.css` → `[data-style="podcast-network"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Podcast Network speeds up the listening decision: topic, duration and date in one line.

### What is not
- It is not a copy of the museum brochure; Screen readability is preserved.
- Serifs are not required; space and scale are decisive.

### Where it comes from
Typographic hierarchy of print program magazines, exhibition catalogs and theater posters.

### Recognition test in 3 seconds
1. Does the title span at least 3 lines?
2. Is the margin above 48px?
3. Was hairline used instead of shadow?

## Visual signature
- **Chapter list:** 56px row, while mono is on the right.
- **Purple accent:** play button and active section.
- **Imprint:** server name + date, 12px.
- **Rounded corner:** 8–10px, single level shadow.
- **Typography:** Space Grotesk (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#a37bf5`; neutral scale `#111114` → `#f0eef4`.
- **Radius:** `8px` / `10px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Duration and air date for each episode.
2. The play button is single, with text labeling.
3. The episode number is mono.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#111114` | page background | as a card background |
| `--bg-2` | `#16161b` | partition divider floor, table top | button background |
| `--surface` | `#1b1b21` | kart, input, modal | full-page background |
| `--surface-2` | `#24242c` | passive chip, hover background | primary button |
| `--ink` | `#f0eef4` | title, body, icon | large background |
| `--ink-soft` | `#b1adbb` | secondary text, description | — |
| `--ink-faint` | `#85818f` | decorative label, separator text | interactive text |
| `--accent` | `#a37bf5` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0d0618` | text above accent | non-accent background |
| `--line` | `rgba(240,238,244,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.37:1** · `ink-soft/bg` **8.58:1** · `ink-faint/bg` **4.97:1 (decorative)** · `accent-ink/accent` **6.35:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 58px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 32px | 600 | 1.16 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `8px` (buton, input, chip), `10px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Automatic sound.
- Infinite scroll chart.
- Ten colorful categories.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.02:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Program / etkinlik | medium | Date + venue + single CTA; mono label | `shots/01-page.png` |
| Archive / collection | high | Grid 3 columns, year and genre on each card | `shots/01-page.png` |
| Detay / makale | low | 68ch size, 17px body, quote block | `shots/01-page.png` |
| Takvim | high | Month grid, day cell 44px | `shots/01-page.png` |
| Ticket / registration | medium | Single column form + price summary | `shots/01-page.png` |
| About | low | Long text + imprint table | `shots/01-page.png` |
| Sponsor / support | medium | Logo ribbon single line | `shots/01-page.png` |
| Contact | low | Address + form, 2 columns | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.37:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.58:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.97:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.35:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.02:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.8 | ≥ 60 target | thin text |

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
| The page is falling apart like a magazine | Too many different alignments | Select and keep single asymmetry rule |
| Title gets crushed | Too much line spacing | keep line-height between 1.04–1.1 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `public-radio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `voice-first` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `regulatory-report` | Two different ornamental languages compete on the same screen |
| Mixing | `ledger-meter` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Podcast | Podcast (Wikipedia) — section/archive structure |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk (Google Fonts) — title family |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — duration/date |

## AI brief

```text
Design podcast network page: dark graphite background, purple accent playback, episode list, mono duration.

Style: Podcast Network (podcast-network) · family: Culture & Publishing (192–201)
Token: --bg #111114 · --surface #1b1b21 · --ink #f0eef4 · --accent #a37bf5 · --line rgba(240,238,244,.14)
Radius: 8px / 10px · Typography: Space Grotesk / Inter / Space Mono
Required: Duration and air date for each episode. · The play button is single, with text labeling. · The episode number is mono.
Banned: Automatic sound. · Infinite scroll chart. · Ten colorful categories.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="podcast-network"] {
  --bg: #111114; --bg-2: #16161b;
  --surface: #1b1b21; --surface-2: #24242c;
  --ink: #f0eef4; --ink-soft: #b1adbb; --ink-faint: #85818f;
  --accent: #a37bf5; --accent-ink: #0d0618;
  --line: rgba(240,238,244,.14);
  --danger: #e63b2c;
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
  --radius: 8px; --radius-lg: 10px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
