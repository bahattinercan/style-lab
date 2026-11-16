# 212 · Language App

> **In one sentence:** Language learning app: vivid blue accent, daily streak, word card and a pronunciation line.

| | |
|---|---|
| **Feeling** | playful but disciplined, "five minutes" |
| **Best for** | language app, word card, daily drill |
| **Avoid** | an official audit report |
| **Difficulty** | easy · **Accessibility** | iyi |
| **Family** | Learning & Gamification (212–221) · **Token** | `kit/tokens.css` → `[data-style="language-app"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Language App shapes the daily five minutes: one word, one sentence, one pronunciation.

### What is not
- It is not a children's application; The same language applies to adult learning.
- Gamification is not about putting badges everywhere.

### Where it comes from
The digital equivalent of the lesson plan, workbook, and progress chart tradition.

### Recognition test in 3 seconds
1. Is there a progress indicator?
2. One target per step?
3. Is the time tag mono?

## Visual signature
- **Word card:** large word + translation + example sentence.
- **Daily streak:** seven-cell grid, accent fill.
- **Pronunciation line:** mono IPA.
- **Tek accent:** mavi, eylem ve ilerleme.
- **Typography:** Poppins (display) + Nunito (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#12558f`; neutral scale `#fbfdff` → `#111a24`.
- **Radius:** `12px` / `16px`; Card 14px, button 12px; Hot rolling is accepted in educational products, above 20px is prohibited.

## Mandatory rules

1. An example sentence and pronunciation on every card.
2. Seri bilgisi metinle.
3. Touch target ≥ 48px.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fbfdff` | page background | as a card background |
| `--bg-2` | `#eaf3fc` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f8fe` | passive chip, hover background | primary button |
| `--ink` | `#111a24` | title, body, icon | large background |
| `--ink-soft` | `#445565` | secondary text, description | — |
| `--ink-faint` | `#78899a` | decorative label, separator text | interactive text |
| `--accent` | `#12558f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6fbff` | text above accent | non-accent background |
| `--line` | `rgba(17,26,36,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.21:1** · `ink-soft/bg` **7.54:1** · `ink-faint/bg` **3.52:1 (decorative)** · `accent-ink/accent` **7.41:1**.
- With the accent of progress and success; error semantics. Color alone does not carry status, icon/text is added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 50px (mobile 30px) | 700 | 1.06 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Header 50px, body 16px. Course titles 20px/600; duration tag mono 11px.
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

- Course cards 3 columns; progress bar 6px. Form 2 column.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Cards are hot surface; shadow single level. Progress bar 6px, accent padding.
- Radius: `12px` (buton, input, chip), `16px` (kart, modal). Card 14px, button 12px; Hot rolling is accepted in educational products, above 20px is prohibited.

## Bans

- Animasyonlu konfeti.
- Red punishment states.
- A twelve-colour level set.
- Infinite serial printing.
- Punishment in red.
- Ses/animasyonlu kutlama.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 12px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 12px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 12px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 12px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 12px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 12px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 12px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.72:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 2px line, 24px; round tip |
| photo | Learning moment, natural light; no stock pose |
| illustration | Simple geometric, 3 colors |
| Texture | Nokta deseni %6 |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Kurs landing | medium | Single promise + curriculum list | `shots/01-page.png` |
| Ders | high | Left contents, right content 66ch | `shots/01-page.png` |
| exercise | high | One question + 4 options + feedback | `shots/01-page.png` |
| progress | medium | Weekly grid + number of series | `shots/01-page.png` |
| Sertifika | low | Single card, name + date | `shots/01-page.png` |
| Topluluk | medium | Stream + comment 68ch | `shots/01-page.png` |
| Settings | medium | Notice and language | `shots/01-page.png` |
| Payment | low | Single column 480px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.21:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.54:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.52:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.41:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.72:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 103 | ≥ 60 target | thin text |

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
| Rozet enflasyonu | Reward for every action | Reduce the reward to a single indicator per week |
| Ders uzuyor | 5+ blocks on one screen | Each screen is a single target |
| Progress uncertain | stick decorative | Add percentage + remaining step text |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `skill-tree` | Same level of seriousness; accent sharing is not allowed |
| garnish | `game-puzzle-light` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `access-audit` | Two different ornamental languages compete on the same screen |
| Mixing | `regulatory-report` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Language_acquisition | Language acquisition (Wikipedia) — drill loop |
| https://fonts.google.com/specimen/Poppins | Poppins (Google Fonts) — heading family |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — telaffuz |

## AI brief

```text
Design a language learning screen: light background, blue accent, word card, daily streak grid, mono pronunciation.

Style: Language App (language-app) · family: Learning & Gamification (212–221)
Token: --bg #fbfdff · --surface #ffffff · --ink #111a24 · --accent #12558f · --line rgba(17,26,36,.12)
Radius: 12px / 16px · Typography: Poppins / Nunito / Space Mono
Required: An example sentence and pronunciation on every card. · Seri bilgisi metinle. · Touch target ≥ 48px.
Banned: Animasyonlu konfeti. · Red punishment states. · A twelve-colour level set.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="language-app"] {
  --bg: #fbfdff; --bg-2: #eaf3fc;
  --surface: #ffffff; --surface-2: #f2f8fe;
  --ink: #111a24; --ink-soft: #445565; --ink-faint: #78899a;
  --accent: #12558f; --accent-ink: #f6fbff;
  --line: rgba(17,26,36,.12);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00873e;
  --ok-ink: #ffffff;
  --warn: #bc5900;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 12px; --radius-lg: 16px;
  --shadow: 0 2px 0 rgba(0,0,0,.12); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
