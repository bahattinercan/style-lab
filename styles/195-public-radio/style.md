# 195 · Public Radio

> **In one sentence:** Public radio: paper background, blue accent, program belt table and audio time information.

| | |
|---|---|
| **Feeling** | reliable, calm, "generation begins" |
| **Best for** | radio, podcast network, program guide |
| **Avoid** | hype music campaign |
| **Difficulty** | medium · **Accessibility** | iyi |
| **Family** | Culture & Publishing (192–201) · **Token** | `kit/tokens.css` → `[data-style="public-radio"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Public Radio shows the broadcast schedule like a schedule: when, who, how many minutes.

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
- **Generation table:** time range mono, program name serif.
- **Blue accent:** live broadcast label only.
- **Paper backdrop:** warm neutral; There is no gradient.
- **Duration information:** minutes mono.
- **Typography:** Lora (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#1b4f7a`; neutral scale `#fcfaf6` → `#15171b`.
- **Radius:** `2px` / `6px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Time range and duration in each program.
2. The live broadcast tag is written in text.
3. The listening link is one line.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fcfaf6` | page background | as a card background |
| `--bg-2` | `#f1ece2` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f3ec` | passive chip, hover background | primary button |
| `--ink` | `#15171b` | title, body, icon | large background |
| `--ink-soft` | `#484d55` | secondary text, description | — |
| `--ink-faint` | `#7c8189` | decorative label, separator text | interactive text |
| `--accent` | `#1b4f7a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6faff` | text above accent | non-accent background |
| `--line` | `rgba(21,23,27,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.21:1** · `ink-soft/bg` **8.16:1** · `ink-faint/bg` **3.76:1 (decorative)** · `accent-ink/accent` **8.19:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 58px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 32px | 600 | 1.16 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 17px | 400 | 1.68 | 0 |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Dalga formu animasyonu.
- Banner confusion.
- Round 12px+ card.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.59:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 17.21:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.16:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.76:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.19:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.59:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 101.8 | ≥ 60 target | thin text |

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
| garnish | `podcast-network` | Same level of seriousness; accent sharing is not allowed |
| garnish | `broadsheet-daily` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `game-pinball-neon` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Public_broadcasting | Public broadcasting (Wikipedia) — generation publishing |
| https://fonts.google.com/specimen/Lora | Lora (Google Fonts) — program name serif |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — hour/duration |

## AI brief

```text
Design public radio program guide: paper backdrop, serif program names, mono clock column, blue live label.

Style: Public Radio (public-radio) · family: Culture & Publishing (192–201)
Token: --bg #fcfaf6 · --surface #ffffff · --ink #15171b · --accent #1b4f7a · --line rgba(21,23,27,.14)
Radius: 2px / 6px · Typography: Lora / Inter / IBM Plex Mono
Required: Time range and duration in each program. · The live broadcast tag is written in text. · The listening link is one line.
Banned: Dalga formu animasyonu. · Banner confusion. · Round 12px+ card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="public-radio"] {
  --bg: #fcfaf6; --bg-2: #f1ece2;
  --surface: #ffffff; --surface-2: #f7f3ec;
  --ink: #15171b; --ink-soft: #484d55; --ink-faint: #7c8189;
  --accent: #1b4f7a; --accent-ink: #f6faff;
  --line: rgba(21,23,27,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00863c;
  --ok-ink: #ffffff;
  --warn: #b95800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
