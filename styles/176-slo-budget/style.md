# 176 · SLO Budget

> **In one sentence:** Error budget dashboard: blue threshold line, remaining budget indicator, and mono error rate columns.

| | |
|---|---|
| **Feeling** | restrained, cautionary, "budget running out" |
| **Best for** | reliability dashboard, SLO/SLA tracking, platform team |
| **Avoid** | marketing, long form |
| **Difficulty** | hard · **Accessibility** | iyi |
| **Family** | Operations & Data (172–181) · **Token** | `kit/tokens.css` → `[data-style="slo-budget"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
SLO Budget reduces abstract reliability to a single number: the remaining error budget and the services that consume it.

### What is not
- It is not a dashboard template; each block answers a decision question.
- Dark theme is not mandatory; Contrast and intensity are decisive.

### Where it comes from
The information-intensive tradition of NOC/SRE consoles, financial terminals and logistics operations displays.

### Recognition test in 3 seconds
1. Is the line height 40–44px?
2. Are the numbers right-aligned and taboo?
3. Maximum 3 series on the chart?

## Visual signature
- **Budget indicator:** single largest percentage + remaining minutes.
- **Threshold line:** two references (target/limit) in the chart.
- **Blue accent:** healthy; Amber is only subthreshold.
- **Dense table:** 44px row per service.
- **Typography:** Inter (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#37a3e0`; neutral scale `#0b1018` → `#e7eef8`.
- **Radius:** `6px` / `8px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. The target and boundary are labeled on the same chart.
2. Error rate two decimal, mono.
3. Color thresholds are also written in text.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b1018` | page background | as a card background |
| `--bg-2` | `#0f1621` | partition divider floor, table top | button background |
| `--surface` | `#131c28` | kart, input, modal | full-page background |
| `--surface-2` | `#1b2635` | passive chip, hover background | primary button |
| `--ink` | `#e7eef8` | title, body, icon | large background |
| `--ink-soft` | `#a2b1c4` | secondary text, description | — |
| `--ink-faint` | `#78879a` | decorative label, separator text | interactive text |
| `--accent` | `#37a3e0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#03121c` | text above accent | non-accent background |
| `--line` | `rgba(231,238,248,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.33:1** · `ink-soft/bg` **8.74:1** · `ink-faint/bg` **5.2:1 (decorative)** · `accent-ink/accent` **6.75:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 40px (mobile 26px) | 600 | 1.12 | -0.02em |
| H2 | same | 24px | 600 | 1.22 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10.5px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `6px` (buton, input, chip), `8px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Extreme color gradient heatmap.
- Animated percentage.
- More than four graphics.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.79:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Overview | high | 4 KPI + single time series; delta and time range on each KPI | `shots/01-page.png` |
| Olay / incident | high | Timeline + status tag; 1 row = 1 event | `shots/01-page.png` |
| Table / list | high | Filter bar + 40px row + right aligned number | `shots/01-page.png` |
| Service detail | high | Metric + log + threshold; 3 columns | `shots/01-page.png` |
| Settings / threshold | medium | Form 2 column, unit label mono on right | `shots/01-page.png` |
| empty status | low | One sentence + one button; no illustration | `shots/01-page.png` |
| Onboarding / connectivity | medium | 3 steps, single verification at each step | `shots/01-page.png` |
| Report / export | medium | Date range + format selection + summary | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.33:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.74:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.2:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.79:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.9 | ≥ 60 target | thin text |

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
| The screen is crowded but empty | The number of KPIs is high | Set a limit of 4 KPIs per screen |
| Table not read | Zebra + colored cell | Hairline instead of zebra; use color only for occasion |
| Chart is read incorrectly | Axis label missing | Write axis + unit + time range |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `incident-response` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `lookbook-editorial` | Two different ornamental languages compete on the same screen |
| Mixing | `carnival-festival` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://sre.google/workbook/table-of-contents/ | Google SRE Workbook · SLOs — error budget definition |
| https://fonts.google.com/specimen/Inter | Inter (Google Fonts) — body family |
| https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout | MDN · CSS Grid — board layout |

## AI brief

```text
Design SLO board: dark background, single large budget percentage, threshold line chart, mono error rate chart.

Style: SLO Budget (slo-budget) · family: Operations & Data (172–181)
Token: --bg #0b1018 · --surface #131c28 · --ink #e7eef8 · --accent #37a3e0 · --line rgba(231,238,248,.14)
Radius: 6px / 8px · Typography: Inter / Inter / Space Mono
Required: The target and boundary are labeled on the same chart. · Error rate two decimal, mono. · Color thresholds are also written in text.
Banned: Extreme color gradient heatmap. · Animated percentage. · More than four graphics.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="slo-budget"] {
  --bg: #0b1018; --bg-2: #0f1621;
  --surface: #131c28; --surface-2: #1b2635;
  --ink: #e7eef8; --ink-soft: #a2b1c4; --ink-faint: #78879a;
  --accent: #37a3e0; --accent-ink: #03121c;
  --line: rgba(231,238,248,.14);
  --danger: #e53a2b;
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
  --radius: 6px; --radius-lg: 8px;
  --shadow: 0 1px 0 rgba(0,0,0,.2); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
