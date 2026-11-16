# 155 · Sci-Fi Cockpit

> **In one sentence:** Cockpit panel language: wide-letter technical title, blue signal accent and gauge strips.

| | |
|---|---|
| **Feeling** | cold, measured, "system works" confidence |
| **Best for** | space/vehicle game HUD, system monitoring, telemetry |
| **Avoid** | hot brand languages, entertainment showcases |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Games & Interaction (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-sci-fi-cockpit"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
The Sci-Fi Cockpit maintains the measurement discipline of a cockpit: each display is tied to a threshold and changes color only in danger.

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
- **Extensive tracking:** 0.1em on Michroma head; tech label feeling.
- **Blue signal:** accent active system and measurement only; line instead of fill.
- **Measuring tape:** 4px high indicators, mono label on the right.
- **Sharp panel:** 2px corner, 1px border, no shadows.
- **Typography:** Michroma (display) + Rajdhani (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#4aa8ff`; neutral scale `#050a10` → `#d9ecff`.
- **Radius:** `2px` / `4px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Accent is used as a line/label, not as a broad background.
2. All measurements are written in units and time intervals.
3. Panel corner ≤ 4px; edge instead of shadow.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#050a10` | page background | as a card background |
| `--bg-2` | `#08121b` | partition divider floor, table top | button background |
| `--surface` | `#0b1622` | kart, input, modal | full-page background |
| `--surface-2` | `#101f2e` | passive chip, hover background | primary button |
| `--ink` | `#d9ecff` | title, body, icon | large background |
| `--ink-soft` | `#94b3cf` | secondary text, description | — |
| `--ink-faint` | `#6d8ca8` | decorative label, separator text | interactive text |
| `--accent` | `#4aa8ff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04121f` | text above accent | non-accent background |
| `--line` | `rgba(217,236,255,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.45:1** · `ink-soft/bg` **9.09:1** · `ink-faint/bg` **5.64:1 (decorative)** · `accent-ink/accent` **7.5:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 40px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Rajdhani) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Neon orange-blue mix.
- Animasyonlu tarama/parlama.
- Round 12px+ panel.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.88:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 16.45:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.09:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.64:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.88:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.8 | ≥ 60 target | thin text |

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
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Michroma | Michroma (Google Fonts) — teknik display ailesi |
| https://en.wikipedia.org/wiki/Flight_instruments | Flight instrument panel (Wikipedia) — indicator hierarchy |
| https://fonts.google.com/specimen/Share+Tech+Mono | Share Tech Mono (Google Fonts) — measurement label |

## AI brief

```text
Design spacecraft cockpit panel: wide tracking technical hood, blue signal accent only on measurement and active system, sharp panel.

Style: Sci-Fi Cockpit (game-sci-fi-cockpit) · family: Games & Interaction (152–171)
Token: --bg #050a10 · --surface #0b1622 · --ink #d9ecff · --accent #4aa8ff · --line rgba(217,236,255,.14)
Radius: 2px / 4px · Typography: Michroma / Rajdhani / Share Tech Mono
Required: Accent is used as a line/label, not as a broad background. · All measurements are written in units and time intervals. · Panel corner ≤ 4px; edge instead of shadow.
Banned: Neon orange-blue mix. · Animasyonlu tarama/parlama. · Round 12px+ panel.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="game-sci-fi-cockpit"] {
  --bg: #050a10; --bg-2: #08121b;
  --surface: #0b1622; --surface-2: #101f2e;
  --ink: #d9ecff; --ink-soft: #94b3cf; --ink-faint: #6d8ca8;
  --accent: #4aa8ff; --accent-ink: #04121f;
  --line: rgba(217,236,255,.14);
  --danger: #e13628;
  --danger-ink: #000000;
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
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Rajdhani", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.1em; --blur: 0px; --grain: 0;
}
```
