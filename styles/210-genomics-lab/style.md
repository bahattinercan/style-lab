# 210 · Genomics Lab

> **In one sentence:** Genomics lab: deep purple background, turquoise accent, sequencing table and mono base labels.

| | |
|---|---|
| **Feeling** | ileri teknoloji, hassas, "ACGT" |
| **Best for** | genomics/bioinformatics, sequencing panel, sample tracking |
| **Avoid** | a consumer storefront |
| **Difficulty** | medium · **Accessibility** | high — above AA, form errors programmatic |
| **Family** | Health & Science (202–211) · **Token** | `kit/tokens.css` → `[data-style="genomics-lab"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Genomics Lab shows data without ornament: base, quality, sample and date.

### What is not
- It is not a hospital brochure; form and state flow are decisive.
- Green is not mandatory; Contrast and calm rhythm are decisive.

### Where it comes from
Accessibility practice of clinical forms, patient information materials, and healthcare applications.

### Recognition test in 3 seconds
1. Is the body 16px and above?
2. Is the error message below the field?
3. Is the focus ring visible?

## Visual signature
- **Base strip:** ACGT letters in mono, no colour.
- **Sample table:** mono id, quality, date.
- **Turquoise accent:** the selected sample only.
- **Dark grid:** 24px background rule at 6%.
- **Typography:** IBM Plex Mono (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#45d6c8`; neutral scale `#0b0d14` → `#e8ecf7`.
- **Radius:** `2px` / `4px`; Corner 8–12px; form fields 10px. Sharp 0px corner remains harsh in clinical language.

## Mandatory rules

1. Quality metrics carry two decimals and a unit.
2. Sample ids are mono and unique.
3. No base colouring, for colour-blind readers.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b0d14` | page background | as a card background |
| `--bg-2` | `#10131c` | partition divider floor, table top | button background |
| `--surface` | `#141824` | kart, input, modal | full-page background |
| `--surface-2` | `#1c2130` | passive chip, hover background | primary button |
| `--ink` | `#e8ecf7` | title, body, icon | large background |
| `--ink-soft` | `#a4aec4` | secondary text, description | — |
| `--ink-faint` | `#7a859c` | decorative label, separator text | interactive text |
| `--accent` | `#45d6c8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04171a` | text above accent | non-accent background |
| `--line` | `rgba(232,236,247,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.43:1** · `ink-soft/bg` **8.72:1** · `ink-faint/bg` **5.23:1 (decorative)** · `accent-ink/accent` **10.24:1**.
- Trust color accent; Warning and error come from semantic tokens. Red is only for real risk.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 48px (mobile 30px) | 500 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.65 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Body 16px/1.65 — reading fatigue is kept low. Labels 13px, form help text 12px.
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

- Form 2 columns (mobile 1), content 8 columns. 20px inside card; line spacing 44px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Card surface is opaque; soft shadow single level. Focus ring over 3:1 on any surface.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 8–12px; form fields 10px. Sharp 0px corner remains harsh in clinical language.

## Bans

- A DNA helix illustration.
- An animated sequencing flow.
- Neon degrade.
- Using red decoratively.
- Illustration with health claim.
- Automatic focus changing.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.82:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; neutral geometry instead of medical symbol |
| photo | Natural light, people-oriented, no stethoscope cliche |
| illustration | Single line, calm; no anatomical details |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Randevu / landing | medium | One message + one CTA + trust line | `shots/01-page.png` |
| Form / intake | medium | 2 columns, label at the top, error at the bottom | `shots/01-page.png` |
| Result / measurement | high | Single largest number + reference range | `shots/01-page.png` |
| Plan/treatment | medium | Timeline + status | `shots/01-page.png` |
| Message/support | medium | Balloon 68ch sub, time tag mono | `shots/01-page.png` |
| Profil | low | Summary card + permissions | `shots/01-page.png` |
| information center | low | Article list, 17px body | `shots/01-page.png` |
| emergency | high | Single red block + wire number | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.43:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.72:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.23:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.24:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.82:1 | ≥ 3 | accent ring |
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
| Form korkutuyor | 8+ areas on one screen | Up to 4 fields per step |
| Warning not visible | Only color used | Add icon + text |
| The text is tiring | Line length 90ch | Reduce size to 66ch |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `lab-protocol` | Same level of seriousness; accent sharing is not allowed |
| garnish | `data-lineage` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `boutique-hotel` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Genomics | Genomics (Wikipedia) — sample/metric fields |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — base/sample identity |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — body family |

## AI brief

```text
Design a genomics lab panel: dark background, turquoise on the selected sample only, mono base strip and sample table.

Style: Genomics Lab (genomics-lab) · family: Health & Science (202–211)
Token: --bg #0b0d14 · --surface #141824 · --ink #e8ecf7 · --accent #45d6c8 · --line rgba(232,236,247,.14)
Radius: 2px / 4px · Typography: IBM Plex Mono / Inter / IBM Plex Mono
Required: Quality metrics carry two decimals and a unit. · Sample ids are mono and unique. · No base colouring, for colour-blind readers.
Banned: A DNA helix illustration. · An animated sequencing flow. · Neon degrade.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="genomics-lab"] {
  --bg: #0b0d14; --bg-2: #10131c;
  --surface: #141824; --surface-2: #1c2130;
  --ink: #e8ecf7; --ink-soft: #a4aec4; --ink-faint: #7a859c;
  --accent: #45d6c8; --accent-ink: #04171a;
  --line: rgba(232,236,247,.14);
  --danger: #e3392a;
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
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
