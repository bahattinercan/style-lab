# 192 · Museum Exhibition

> **In one sentence:** Exhibit page: bone background, thin hairline, date-order imprint and wide margin.

| | |
|---|---|
| **Feeling** | calm, archived, "hall 2 on the right" |
| **Best for** | museum/gallery exhibition, collection, visit information |
| **Avoid** | campaign poster neon |
| **Difficulty** | medium · **Accessibility** | iyi |
| **Family** | Culture & Publishing (192–201) · **Token** | `kit/tokens.css` → `[data-style="museum-exhibition"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Museum Exhibition puts the work first: the interface acts like a thin imprint, it does not compete with the visual.

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
- **Date-sequence imprint:** mono, fixed column on the left.
- **Hairline:** section separator 1px, no shadow.
- **Wide border:** 56px, single asymmetry (7/5).
- **Dark red accent:** exhibition label only.
- **Typography:** Cormorant Garamond (display) + EB Garamond (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#7a2f2f`; neutral scale `#f7f5f0` → `#1a1917`.
- **Radius:** `0px` / `2px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Date range and hall number are in each section.
2. Text 68ch, title large scale.
3. Visual caption is mandatory.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f5f0` | page background | as a card background |
| `--bg-2` | `#efece4` | partition divider floor, table top | button background |
| `--surface` | `#fffdfa` | kart, input, modal | full-page background |
| `--surface-2` | `#f4f1ea` | passive chip, hover background | primary button |
| `--ink` | `#1a1917` | title, body, icon | large background |
| `--ink-soft` | `#514e48` | secondary text, description | — |
| `--ink-faint` | `#847f76` | decorative label, separator text | interactive text |
| `--accent` | `#7a2f2f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf7f7` | text above accent | non-accent background |
| `--line` | `rgba(26,25,23,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.12:1** · `ink-soft/bg` **7.61:1** · `ink-faint/bg` **3.65:1 (decorative)** · `accent-ink/accent` **8.71:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 58px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 32px | 600 | 1.16 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 17px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Animated gallery.
- Five colorful categories.
- Round corner.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.09:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 16.12:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.61:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.71:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.09:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.5 | ≥ 60 target | thin text |

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
| garnish | `museum-thesis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `library-archive` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `game-racing-neon` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond (Google Fonts) — title serif |
| https://en.wikipedia.org/wiki/Art_exhibition | Art exhibition (Wikipedia) — exhibition tag |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — date/sequence |

## AI brief

```text
Design a museum exhibition page: bone background, hairline separators, mono date-order byline, wide margin.

Style: Museum Exhibition (museum-exhibition) · family: Culture & Publishing (192–201)
Token: --bg #f7f5f0 · --surface #fffdfa · --ink #1a1917 · --accent #7a2f2f · --line rgba(26,25,23,.16)
Radius: 0px / 2px · Typography: Cormorant Garamond / EB Garamond / IBM Plex Mono
Required: Date range and hall number are in each section. · Text 68ch, title large scale. · Visual caption is mandatory.
Banned: Animated gallery. · Five colorful categories. · Round corner.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="museum-exhibition"] {
  --bg: #f7f5f0; --bg-2: #efece4;
  --surface: #fffdfa; --surface-2: #f4f1ea;
  --ink: #1a1917; --ink-soft: #514e48; --ink-faint: #847f76;
  --accent: #7a2f2f; --accent-ink: #fdf7f7;
  --line: rgba(26,25,23,.16);
  --danger: #d72b1e;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65400;
  --warn-ink: #ffffff;
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
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
