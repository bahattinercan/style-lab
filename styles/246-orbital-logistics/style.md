# 246 · Orbital Logistics

> **In one sentence:** Orbital logistics: night blue, orbit lines, manifest table and mono launch-window time.

| | |
|---|---|
| **Feeling** | operational space, "launch window" |
| **Best for** | space logistics, satellite operations, manifest planning |
| **Avoid** | market vitrini |
| **Difficulty** | hard · **Accessibility** | medium |
| **Family** | Future & Speculative (242–251) · **Token** | `kit/tokens.css` → `[data-style="orbital-logistics"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Orbital Logistics plans the launch window: what, when, to which orbit.

### What is not
- Neon is not a sci-fi cliché; accent signal, ground calm.
- Dark background is not mandatory; Contrast and line language are decisive.

### Where it comes from
The visual language of space program interfaces, laboratory instrument panels, and system diagrams.

### Recognition test in 3 seconds
1. Was Accent used as a signal?
2. Are the technical labels mono?
3. Line instead of shadow?

## Visual signature
- **Orbit lines:** concentric ellipses at 12%.
- **Manifest table:** payload, mass, window in mono.
- **Blue accent:** the active window only.
- **Pencere saati:** mono, UTC.
- **Typography:** Chakra Petch (display) + Rajdhani (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#5fa8ff`; neutral scale `#080b14` → `#e9eefb`.
- **Radius:** `2px` / `4px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Mass and target orbit for every payload.
2. Saatler UTC ve mono.
3. State stated in text.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#080b14` | page background | as a card background |
| `--bg-2` | `#0c101b` | partition divider floor, table top | button background |
| `--surface` | `#101623` | kart, input, modal | full-page background |
| `--surface-2` | `#182030` | passive chip, hover background | primary button |
| `--ink` | `#e9eefb` | title, body, icon | large background |
| `--ink-soft` | `#a5b0c9` | secondary text, description | — |
| `--ink-faint` | `#7b869e` | decorative label, separator text | interactive text |
| `--accent` | `#5fa8ff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04101f` | text above accent | non-accent background |
| `--line` | `rgba(233,238,251,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.93:1** · `ink-soft/bg` **9.04:1** · `ink-faint/bg` **5.38:1 (decorative)** · `accent-ink/accent` **7.76:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 54px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Rajdhani) | 15px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
- Measure: 66ch (reading text), card text at most 52ch.
- Headers uppercase: `text-transform: uppercase` + positive tracking; never body text.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- A photographic space backdrop.
- An animated orbit.
- An unreadable 9px.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.99:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| System / landing | medium | Single sentence + measuring tape | `shots/01-page.png` |
| scheme | high | Diagram + mono label | `shots/01-page.png` |
| Data | high | Chart + unit + time | `shots/01-page.png` |
| control | medium | 3 keys + threshold | `shots/01-page.png` |
| Registration / access | low | single column form | `shots/01-page.png` |
| Report | medium | Summary + table | `shots/01-page.png` |
| road map | medium | timeline | `shots/01-page.png` |
| Contact | low | Form + address | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.93:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.04:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.38:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.76:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.99:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.5 | ≥ 60 target | thin text |

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
| science fiction cliché | neon everywhere | Reduce Accent to 10% space |
| Schema not read | label on top of each other | Move label out of line |
| Contrast is low | Accent text | Make text --ink, accent line |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `fleet-dispatch` | Same level of seriousness; accent sharing is not allowed |
| garnish | `planetary-service` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `boutique-hotel` | Two different ornamental languages compete on the same screen |
| Mixing | `kids-classroom` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Orbital_mechanics | Orbital mechanics (Wikipedia) — orbit/window notion |
| https://fonts.google.com/specimen/Chakra+Petch | Chakra Petch (Google Fonts) — technical heading |
| https://fonts.google.com/specimen/Share+Tech+Mono | Share Tech Mono (Google Fonts) — manifest/saat |

## AI brief

```text
Design an orbital logistics manifest: night blue, orbit lines, mono UTC window, manifest table.

Style: Orbital Logistics (orbital-logistics) · family: Future & Speculative (242–251)
Token: --bg #080b14 · --surface #101623 · --ink #e9eefb · --accent #5fa8ff · --line rgba(233,238,251,.14)
Radius: 2px / 4px · Typography: Chakra Petch / Rajdhani / Share Tech Mono
Required: Mass and target orbit for every payload. · Saatler UTC ve mono. · State stated in text.
Banned: A photographic space backdrop. · An animated orbit. · An unreadable 9px.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="orbital-logistics"] {
  --bg: #080b14; --bg-2: #0c101b;
  --surface: #101623; --surface-2: #182030;
  --ink: #e9eefb; --ink-soft: #a5b0c9; --ink-faint: #7b869e;
  --accent: #5fa8ff; --accent-ink: #04101f;
  --line: rgba(233,238,251,.14);
  --danger: #e23729;
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
  --shadow: 0 0 0 1px color-mix(in srgb, var(--accent) 18%, transparent); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Rajdhani", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
