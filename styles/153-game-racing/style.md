# 153 · Game Racing

> **In one sentence:** Interface in speedometer language: narrow digits, warm accent, beveled cut and racing telemetry hierarchy.

| | |
|---|---|
| **Feeling** | speed, hot metal, "last lap" pressure |
| **Best for** | racing game menus, telemetry panel, sports broadcast graphic |
| **Avoid** | calm corporate form flows, long reading screens |
| **Difficulty** | medium · **Accessibility** | medium (warm accent safe in large print) |
| **Family** | Games & Interaction (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-racing"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Game Racing brings the display logic of the racing cockpit into the interface: each number is a decision (brake, gear, row) and each decision must be read at a glance.

### What is not
- Neon is not a ubiquitous theme; accent carries only case and action.
- Dark background alone does not make a play style; Numerical rhythm and sharp corners are required.
- Pixel font is not mandatory; software HUDs are also in this family.

### Where it comes from
Racing game menus, motorsport broadcast graphics and analog instrument panels.

### Recognition test in 3 seconds
1. Are the corners sharp (≤6px)?
2. Numbers taboos and mono?
3. Is the Accent number unique or used for the situation?

## Visual signature
- **Bevel crop:** 8–12px diagonal crop instead of corner; The button and the card share the same cutting angle.
- **Night figure:** Rajdhani's tight width keeps the score and runs count in one line.
- **Hot accent:** orange only speed/ranking accent; cold blue is not used as a second color.
- **Telemetry strip:** horizontal bars labeled thin and mono; It reads like an indicator, not a chart.
- **Racing typography:** header uppercase and wide tracking, body 15px quiet.
- **Typography:** Rajdhani (display) + Chakra Petch (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#ff6a2b`; neutral scale `#121010` → `#f5efe6`.
- **Radius:** `0px` / `6px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. The card and button cutout are cropped to the same diagonal angle (8–12px).
2. Accent is used only for speed, ranking and primary action.
3. All numeric fields mono or narrow display; decimal aligned.
4. Strip indicators are 6px high, background is `--surface-2`.
5. Contrast body ≥ 4.5:1.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#121010` | page background | as a card background |
| `--bg-2` | `#171313` | partition divider floor, table top | button background |
| `--surface` | `#1c1817` | kart, input, modal | full-page background |
| `--surface-2` | `#241f1d` | passive chip, hover background | primary button |
| `--ink` | `#f5efe6` | title, body, icon | large background |
| `--ink-soft` | `#b6a89c` | secondary text, description | — |
| `--ink-faint` | `#8a7c72` | decorative label, separator text | interactive text |
| `--accent` | `#ff6a2b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a0a03` | text above accent | non-accent background |
| `--line` | `rgba(245,239,230,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.59:1** · `ink-soft/bg` **8.19:1** · `ink-faint/bg` **4.7:1 (decorative)** · `accent-ink/accent` **6.75:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 50px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Chakra Petch) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
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

- The screen grid acts like a visible frame: a 1px accent border is placed between sections, no decorative lines are added.
- Section vertical space 64px desktop, 40px mobile; card padding 18px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are opaque; There is no glass/blur. Thin accent edge is used for status notification.
- Radius: `0px` (buton, input, chip), `6px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Animated speedometer or scrolling telemetry (v6 out of scope).
- Blue-orange complementary contrast stack.
- Serif or handwritten title.
- Rounded 12px+ card corner.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.64:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| HUD/in-game overlay | high | Score + status bar + single CTA; No overlays of more than 3 layers | `shots/01-page.png` |
| Menu / lobby | medium | Vertical list, accent left edge on selected row, 44px row | `shots/01-page.png` |
| Character / inventory | high | Grid 4-pack, rarity tag mono on each card | `shots/01-page.png` |
| quest | medium | Title + 2 line description + reward table | `shots/01-page.png` |
| Match end / score table | high | Right aligned numbers, hairline instead of zebra | `shots/01-page.png` |
| Settings | medium | Key + segment; each line 56px | `shots/01-page.png` |
| Store / battle pass | high | 3 column plan card, accent edge in the middle | `shots/01-page.png` |
| Form / account | low | Single column 480px, label 12px mono on top | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.59:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.19:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.7:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.64:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.4 | ≥ 60 target | thin text |

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
| The interface looks like a toy | Too much neon and shadow | Reduce Accent to 14% fill, reset shadow |
| Numbers are jumping | Proportional figure | font-variant-numeric: use tabular-nums |
| Menu not readable | Uppercase + low contrast | Keep uppercase in title, change body to sentence order |
| Cards glow uncontrollably | Edge accent 40%+ | Fix edge at 22%, hover at 34% |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `game-hud` | Same level of seriousness; accent sharing is not allowed |
| garnish | `sports-energy` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Rajdhani | Rajdhani (Google Fonts) — narrow display; number and title family |
| https://en.wikipedia.org/wiki/Telemetry | Racing telemetry (Wikipedia) — indicator and measurement hierarchy |
| https://www.gameuidatabase.com/ | Game UI Database — racing game menu references |

## AI brief

```text
Design racing game menu: lap, qualifying and time in the same lane; cards are cross-cut; accent orange only emphasis on speed. The numbers are tight and taboo. No animation, no flourishes.

Style: Game Racing (game-racing) · family: Games & Interaction (152–171)
Token: --bg #121010 · --surface #1c1817 · --ink #f5efe6 · --accent #ff6a2b · --line rgba(245,239,230,.14)
Radius: 0px / 6px · Typography: Rajdhani / Chakra Petch / Share Tech Mono
Required: The card and button cutout are cropped to the same diagonal angle (8–12px). · Accent is used only for speed, ranking and primary action. · All numeric fields mono or narrow display; decimal aligned.
Banned: Animated speedometer or scrolling telemetry (v6 out of scope). · Blue-orange complementary contrast stack. · Serif or handwritten title.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="game-racing"] {
  --bg: #121010; --bg-2: #171313;
  --surface: #1c1817; --surface-2: #241f1d;
  --ink: #f5efe6; --ink-soft: #b6a89c; --ink-faint: #8a7c72;
  --accent: #ff6a2b; --accent-ink: #1a0a03;
  --line: rgba(245,239,230,.14);
  --danger: #e53b2c;
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
  --radius: 0px; --radius-lg: 6px;
  --shadow: 0 1px 0 rgba(0,0,0,.4); --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
