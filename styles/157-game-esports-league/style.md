# 157 · Esports League

> **In one sentence:** Broadcast graphic language: giant banner, purple accent, match card and right-aligned scoreboards.

| | |
|---|---|
| **Feeling** | competitive, high energy, "live broadcast" |
| **Best for** | esports league, tournament page, live score panel |
| **Avoid** | calm corporate product pages, long articles |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Games & Interaction (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-esports-league"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Esports League uses the hierarchy of a broadcast chart: the viewer must see who is ahead in two seconds.

### What is not
- Neon is not a ubiquitous theme; accent carries only case and action.
- Dark background alone does not make a play style; Numerical rhythm and sharp corners are required.
- Pixel font is not mandatory; software HUDs are also in this family.

### Where it comes from
The screen typography tradition of arcade cockpits, console HUDs, and PC game menus; After the 2010s, it became simpler with live broadcast and esports interfaces.

### Recognition test in 3 seconds
1. Are the corners sharp (≤6px)?
2. Numbers taboos and mono?
3. Is the Accent number unique or used for the situation?

## Visual signature
- **Giant display:** Anton 56px, tight line spacing, uppercase — poster effect.
- **Purple accent:** single energy color; Orange is not used as a rival color.
- **Match card:** two team blocks, VS in the middle, mono score at the bottom.
- **Scoreboard:** numbers aligned to the right, hairline instead of zebra.
- **Typography:** Anton (display) + Chakra Petch (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#b07cff`; neutral scale `#0d0b14` → `#f0ecff`.
- **Radius:** `0px` / `4px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Score and ranking numbers are tabular and right aligned.
2. Accent solo winner/live status and CTA.
3. Title in uppercase, body in sentence order.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0d0b14` | page background | as a card background |
| `--bg-2` | `#120f1c` | partition divider floor, table top | button background |
| `--surface` | `#171326` | kart, input, modal | full-page background |
| `--surface-2` | `#1f1a30` | passive chip, hover background | primary button |
| `--ink` | `#f0ecff` | title, body, icon | large background |
| `--ink-soft` | `#b2a8cf` | secondary text, description | — |
| `--ink-faint` | `#8b81a8` | decorative label, separator text | interactive text |
| `--accent` | `#b07cff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#120720` | text above accent | non-accent background |
| `--line` | `rgba(240,236,255,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.88:1** · `ink-soft/bg` **8.74:1** · `ink-faint/bg` **5.4:1 (decorative)** · `accent-ink/accent` **6.66:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 56px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Chakra Petch) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `0px` (buton, input, chip), `4px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Animated score transition.
- More than three team colors.
- Round 12px+ card.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.67:1 (≥ 3 on background/surface).
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
| `--ink` / `--bg` | 16.88:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.74:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.66:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.67:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.7 | ≥ 60 target | thin text |

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
| https://fonts.google.com/specimen/Anton | Anton (Google Fonts) — poster display ailesi |
| https://en.wikipedia.org/wiki/Esports | Esports (Wikipedia) — league/tournament structure |
| https://fonts.google.com/specimen/Space+Mono | Space Mono (Google Fonts) — score and tag |

## AI brief

```text
Design esports tournament page: giant uppercase header, purple accent lone winner and CTA, match card + right-aligned scoreboard.

Style: Esports League (game-esports-league) · family: Games & Interaction (152–171)
Token: --bg #0d0b14 · --surface #171326 · --ink #f0ecff · --accent #b07cff · --line rgba(240,236,255,.15)
Radius: 0px / 4px · Typography: Anton / Chakra Petch / Space Mono
Required: Score and ranking numbers are tabular and right aligned. · Accent solo winner/live status and CTA. · Title in uppercase, body in sentence order.
Banned: Animated score transition. · More than three team colors. · Round 12px+ card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="game-esports-league"] {
  --bg: #0d0b14; --bg-2: #120f1c;
  --surface: #171326; --surface-2: #1f1a30;
  --ink: #f0ecff; --ink-soft: #b2a8cf; --ink-faint: #8b81a8;
  --accent: #b07cff; --accent-ink: #120720;
  --line: rgba(240,236,255,.15);
  --danger: #e3382a;
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
  --radius: 0px; --radius-lg: 4px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Chakra Petch", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
