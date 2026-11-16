# 159 · Card TCG

> **In one sentence:** Trading card language: rarity frame, red seal, narrow column and mono imprint.

| | |
|---|---|
| **Feeling** | collection, touch request, "flip card" |
| **Best for** | card game, collectible gallery, limited edition showcase |
| **Avoid** | dense data panels, long forms |
| **Difficulty** | medium · **Accessibility** | medium |
| **Family** | Games & Interaction (152–171) · **Token** | `kit/tokens.css` → `[data-style="game-card-tcg"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Card TCG allows a card to be read in two seconds: name, rarity, number and rule follow the same column rhythm.

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
- **Rarity border:** card edge 1px accent 34%; As rarity increases, only edge opacity increases.
- **Red seal:** accent solo rarity and main action; There is no wide ground.
- **Narrow column:** card text 32ch, imprint mono 10.5px.
- **Paper texture:** 3% grain, on large surface only.
- **Typography:** Cinzel (display) + Lora (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#e0463c`; neutral scale `#171313` → `#f4e9dc`.
- **Radius:** `4px` / `10px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Card text does not exceed 34ch; imprint mono and taboos.
2. Rarity is written not only by edge opacity but also by the label.
3. Accent is not used as a wide ground.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#171313` | page background | as a card background |
| `--bg-2` | `#1d1918` | partition divider floor, table top | button background |
| `--surface` | `#241f1d` | kart, input, modal | full-page background |
| `--surface-2` | `#2e2825` | passive chip, hover background | primary button |
| `--ink` | `#f4e9dc` | title, body, icon | large background |
| `--ink-soft` | `#c0ae9c` | secondary text, description | — |
| `--ink-faint` | `#93847a` | decorative label, separator text | interactive text |
| `--accent` | `#e0463c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1c0805` | text above accent | non-accent background |
| `--line` | `rgba(244,233,220,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.4:1** · `ink-soft/bg` **8.58:1** · `ink-faint/bg` **5.11:1 (decorative)** · `accent-ink/accent` **4.7:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 42px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Spinning/shining card effect.
- More than four rarity colors.
- More than 3 points on the card.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.49:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
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
| `--ink` / `--bg` | 15.4:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.58:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.11:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.7:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.49:1 | ≥ 3 | accent ring |
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
| garnish | `collectible-card` | Same level of seriousness; accent sharing is not allowed |
| garnish | `game-fantasy-rpg` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `bento-grid` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Collectible_card_game | Trading card game (Wikipedia) — card and rarity structure |
| https://fonts.google.com/specimen/Cinzel | Cinzel (Google Fonts) — card title |
| https://fonts.google.com/specimen/Lora | Lora (Google Fonts) — body serif |

## AI brief

```text
Design trading card gallery: rarity frame, red seal accent, 32ch card text, mono imprint.

Style: Card TCG (game-card-tcg) · family: Games & Interaction (152–171)
Token: --bg #171313 · --surface #241f1d · --ink #f4e9dc · --accent #e0463c · --line rgba(244,233,220,.16)
Radius: 4px / 10px · Typography: Cinzel / Lora / IBM Plex Mono
Required: Card text does not exceed 34ch; imprint mono and taboos. · Rarity is written not only by edge opacity but also by the label. · Accent is not used as a wide ground.
Banned: Spinning/shining card effect. · More than four rarity colors. · More than 3 points on the card.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="game-card-tcg"] {
  --bg: #171313; --bg-2: #1d1918;
  --surface: #241f1d; --surface-2: #2e2825;
  --ink: #f4e9dc; --ink-soft: #c0ae9c; --ink-faint: #93847a;
  --accent: #e0463c; --accent-ink: #1c0805;
  --line: rgba(244,233,220,.16);
  --danger: #e83d2e;
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
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 0 0 1px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
