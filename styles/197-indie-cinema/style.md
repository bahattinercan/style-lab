# 197 · Indie Cinema

> **In one sentence:** Independent cinema: black-white contrast, single yellow accent, release schedule and ticket note.

| | |
|---|---|
| **Feeling** | real, night, "two movies this week" |
| **Best for** | independent cinema, screening schedule, film club |
| **Avoid** | enterprise SaaS page |
| **Difficulty** | medium · **Accessibility** | iyi |
| **Family** | Culture & Publishing (192–201) · **Token** | `kit/tokens.css` → `[data-style="indie-cinema"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Indie Cinema reads the schedule like a ticket office: day, time, movie, price.

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
- **B/W contrast:** images in black and white, accent in yellow.
- **Calendar block:** day/time in mono, movie name in uppercase.
- **Ticket note:** mono 11px, bottom line.
- **Sharp corner:** 0–2px.
- **Typography:** Archivo Black (display) + Inter (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#f5d648`; neutral scale `#0e0e0e` → `#f5f5f3`.
- **Radius:** `0px` / `2px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Day, time and venue for each screening.
2. Ticket price and discount note.
3. Images are black and white (the only exception is the poster).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0e0e0e` | page background | as a card background |
| `--bg-2` | `#141414` | partition divider floor, table top | button background |
| `--surface` | `#1a1a1a` | kart, input, modal | full-page background |
| `--surface-2` | `#232323` | passive chip, hover background | primary button |
| `--ink` | `#f5f5f3` | title, body, icon | large background |
| `--ink-soft` | `#b4b4b0` | secondary text, description | — |
| `--ink-faint` | `#878783` | decorative label, separator text | interactive text |
| `--accent` | `#f5d648` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#141103` | text above accent | non-accent background |
| `--line` | `rgba(245,245,243,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.68:1** · `ink-soft/bg` **9.28:1** · `ink-faint/bg` **5.35:1 (decorative)** · `accent-ink/accent` **13.13:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 58px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 32px | 600 | 1.16 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headers uppercase: `text-transform: uppercase` + positive tracking; never body text.

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

- Colorful banner collage.
- Animasyonlu fragman.
- Round card.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 13.42:1 (≥ 3 on background/surface).
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
| `--ink` / `--bg` | 17.68:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.28:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.35:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 13.13:1 | ≥ 4.5 | button text |
| focus ring/ground | 13.42:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.9 | ≥ 60 target | thin text |

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
| garnish | `film-festival` | Same level of seriousness; accent sharing is not allowed |
| garnish | `punk-fanzine` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Independent_film | Independent cinema (Wikipedia) — display model |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black (Google Fonts) — poster title |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime (Google Fonts) — takvim notu |

## AI brief

```text
Design an independent cinema calendar: black-and-white, single yellow accent, mono day/time, bold movie names.

Style: Indie Cinema (indie-cinema) · family: Culture & Publishing (192–201)
Token: --bg #0e0e0e · --surface #1a1a1a · --ink #f5f5f3 · --accent #f5d648 · --line rgba(245,245,243,.16)
Radius: 0px / 2px · Typography: Archivo Black / Inter / Courier Prime
Required: Day, time and venue for each screening. · Ticket price and discount note. · Images are black and white (the only exception is the poster).
Banned: Colorful banner collage. · Animasyonlu fragman. · Round card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="indie-cinema"] {
  --bg: #0e0e0e; --bg-2: #141414;
  --surface: #1a1a1a; --surface-2: #232323;
  --ink: #f5f5f3; --ink-soft: #b4b4b0; --ink-faint: #878783;
  --accent: #f5d648; --accent-ink: #141103;
  --line: rgba(245,245,243,.16);
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
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
