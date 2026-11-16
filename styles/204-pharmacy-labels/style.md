# 204 · Pharmacy Labels

> **In one sentence:** Medication label legibility: high contrast, large type, dosage table and an unmistakable warning band.

| | |
|---|---|
| **Feeling** | clear, safe, "twice a day" |
| **Best for** | medication instructions, dosage schedule, patient education |
| **Avoid** | a decorative luxury theme |
| **Difficulty** | medium · **Accessibility** | high — above AA, form errors programmatic |
| **Family** | Health & Science (202–211) · **Token** | `kit/tokens.css` → `[data-style="pharmacy-labels"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Pharmacy Labels makes legibility the only measure: large type, high contrast, clear warnings.

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
- **Large type:** 17px body, 24px dosage; type size is never reduced.
- **Red warning band:** critical warnings only.
- **Dosage table:** mono morning/noon/evening.
- **Maximum contrast:** ink above 18:1.
- **Typography:** Inter (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#8a1b1b`; neutral scale `#ffffff` → `#0f1317`.
- **Radius:** `4px` / `6px`; Corner 8–12px; form fields 10px. Sharp 0px corner remains harsh in clinical language.

## Mandatory rules

1. Dosage and frequency never fall below 17px.
2. The warning band uses both text and an icon.
3. Line length stays at 60ch for legibility.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | page background | as a card background |
| `--bg-2` | `#f2f4f6` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f8fa` | passive chip, hover background | primary button |
| `--ink` | `#0f1317` | title, body, icon | large background |
| `--ink-soft` | `#414a53` | secondary text, description | — |
| `--ink-faint` | `#71797f` | decorative label, separator text | interactive text |
| `--accent` | `#8a1b1b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff7f7` | text above accent | non-accent background |
| `--line` | `rgba(15,19,23,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.65:1** · `ink-soft/bg` **9.02:1** · `ink-faint/bg` **4.43:1 (decorative)** · `accent-ink/accent` **8.83:1**.
- Trust color accent; Warning and error come from semantic tokens. Red is only for real risk.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 48px (mobile 30px) | 500 | 1.08 | -0.02em |
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
- Radius: `4px` (buton, input, chip), `6px` (kart, modal). Corner 8–12px; form fields 10px. Sharp 0px corner remains harsh in clinical language.

## Bans

- A decorative graphic.
- Renkli gradyan.
- Legal text set in small type.
- Using red decoratively.
- Illustration with health claim.
- Automatic focus changing.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.32:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; neutral geometry instead of medical symbol |
| photo | Natural light, people-oriented, no stethoscope cliche |
| illustration | Single line, calm; no anatomical details |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 18.65:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.02:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.43:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.83:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.32:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 105.2 | ≥ 60 target | thin text |

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
| garnish | `pharmacy-store` | Same level of seriousness; accent sharing is not allowed |
| garnish | `nutrition-plan` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `game-horror-occult` | Two different ornamental languages compete on the same screen |
| Mixing | `synthwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Prescription_drug | Prescription drug (Wikipedia) — dosage/usage fields |
| https://www.w3.org/TR/WCAG22/ | WCAG 2.2 — contrast and type-size criteria |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono (Google Fonts) — dosage table |

## AI brief

```text
Design a medication instructions page: white background, 17px body, mono dosage table, red warning band.

Style: Pharmacy Labels (pharmacy-labels) · family: Health & Science (202–211)
Token: --bg #ffffff · --surface #ffffff · --ink #0f1317 · --accent #8a1b1b · --line rgba(15,19,23,.18)
Radius: 4px / 6px · Typography: Inter / Inter / IBM Plex Mono
Required: Dosage and frequency never fall below 17px. · The warning band uses both text and an icon. · Line length stays at 60ch for legibility.
Banned: A decorative graphic. · Renkli gradyan. · Legal text set in small type.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="pharmacy-labels"] {
  --bg: #ffffff; --bg-2: #f2f4f6;
  --surface: #ffffff; --surface-2: #f6f8fa;
  --ink: #0f1317; --ink-soft: #414a53; --ink-faint: #71797f;
  --accent: #8a1b1b; --accent-ink: #fff7f7;
  --line: rgba(15,19,23,.18);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #008940;
  --ok-ink: #000000;
  --warn: #bd5b00;
  --warn-ink: #000000;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 6px;
  --shadow: 0 1px 3px rgba(0,0,0,.10); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
