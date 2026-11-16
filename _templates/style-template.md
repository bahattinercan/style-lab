#35 · Style Name

> **In one sentence:** The essence of this style — one sentence, no adjectives, a measurable claim.

| | |
|---|---|
| **Feeling** | 3–4 adjectives |
| **Best** | 2–4 products/display type |
| **Avoid** | where not to use (concrete sector/screen) |
| **Difficulty** | low/medium/high · **Accessibility** | good/medium/high risk |
| **Family** | Plain (01–07) · **Token** | `kit/tokens.css` → `[data-style="slug"]` |
| **Composition** | `hero` · `nav` · `density` (archetype justification: `kit/render/layouts.json`) |
| **Images** | `shots/01-landing.png` … `shots/04-components.png` |

## Essence

### What is it
2–3 paragraphs. The founding decisions of the style: what to sacrifice, what to gain. Not "how does it feel", but "which problem does it solve with which tool".

### What it is not
3–5 items. The adjacent styles with which it is most often confused and the **measurable** difference between them (radius, shadow, contrast, typography).

### Where does it come from
1 paragraph historical/cultural origin + why it is being used again today. What detail should be preserved so that the style is not considered "cliche"?

### Recognition test in 3 seconds
5 signs to look for when mixing — each with a visible detail on the screen:
1. …
2. …
3. …
4. …
5. …

## Visual signature
4–7 items, each **measurable** (value + how to apply). "Looks plain" is forbidden; "1px hairline, 10% opacity, section separator only" is correct.

## Color

| Token | Value | Where to use | Where not to use |
|---|---|---|---|
| `--bg` | | | |
| `--surface` | | | |
| `--ink` | | | |
| `--accent` | | | |
| `--line` | | | |

- Measured contrast: `ink / bg` = x.x:1 · `ink-soft / bg` = x.x:1 · `accent-ink / accent` = x.x:1.
- Single highlight rule / many color rule: which one applies, how many shades, for what purpose.
- Forbidden combination: …

## Typography

| Role | Family | Size | Weight | Line spacing | Tracking |
|---|---|---|---|---|---|
| Display/H1 | | | | | |
| H2 | | | | | |
| Body | | | | | |
| Label / mono | | | | | |

- Scale ratio: 1.25 / 1.5 / 1.7 — which digits are actually used (up to 6).
- Size suggestion: `h1 { font-size: clamp(...) }`.
- Body text maximum line length: xx ch.
- Weight rule: which weights are available, which are prohibited (e.g. 300 is not used).

## Grid and space

| Item | Value |
|---|---|
| Column | |
| Gutter | |
| Container width | |
| Space scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint behavior | |

- Asymmetry rule: how many sections per screen fall out of symmetry.
- Section rhythm: how many blocks can be aligned in a row (maximum...).

## Surface and depth

| Level | Token | Shadow | Usage |
|---|---|---|---|
| Ground | `--bg` / `--bg-2` | — | |
| Card | `--surface` | | |
| Floating layer | `--surface` + `--shadow` | | |

- Border formula: …
- Where does depth come from: light / offset / texture / none.
- Radius: `--radius` … `--radius-lg` … which in which component.

## Component recipes

| Component | Height | Padding | Radius | Typography | Color/shade | Situations |
|---|---|---|---|---|---|---|
| Button (primary) | | | | | | hover / active / focus / disabled / loading |
| Button (secondary) | | | | | | |
| Input | | | | | | default / focus / filled / error / disabled |
| Card | | | | | | |
| Chip/badge | | | | | | |
| Nav | | | | | | active / passive |
| Table row | | | | | | selected/hover |
| Modal / sheet | | | | | | |
| Toast | | | | | | |
| Graphics palette | | | | | | |

- Focus ring: `outline: 2px solid var(--accent); outline-offset: 2px` (write if there is an exception).
- Touch target: at least 44×44px — which component is visually small but enlarged with padding.

## Visual language

| Item | Rule |
|---|---|
| icon | line thickness, corner, size grid |
| Photo | which type, which tone, how much space |
| Illustration | yes/no, why |
| Texture | grain %, pattern, shadow |
| Logo area | how much space, which variant |

## Screen recipes

| Screen | Density | Application | Visual |
|---|---|---|---|
| Landing / hero | high | | `shots/01-landing.png` |
| Dashboard | low | | `shots/02-dashboard.png` |
| Form | low | | `shots/05-components-form.png` |
| List / table | low | | `shots/11-page-list.png` |
| Empty status | middle | | `shots/12-page-states.png` |
| Onboarding | high | | `shots/15-page-onboarding.png` |
| Pricing | middle | | `shots/09-page-pricing.png` |
| Login / payment | very low | | `shots/10-page-auth.png` · `shots/14-page-checkout.png` |
| Modal | middle | | `shots/06-components-overlay.png` |
| Notification / toast | middle | | `shots/06-components-overlay.png` |
| Error | low | | `shots/12-page-states.png` |
| Profile / setting | middle | | `shots/13-page-settings.png` |

> The `Image` column is refreshed from the manifest with `node kit/sync-shot-tables.mjs --write`; Do not edit manually.

## Hareket

| Status | Duration | Easing | Feature |
|---|---|---|---|
| Basma | | | |
| Transition / page | | | |
| Award / highlight | | | |

- `prefers-reduced-motion`: all durations 0.01ms, motion background stops.
- Moves prohibited in this style: …

## Dark mode

| Token | Open | Dark |
|---|---|---|
| `--bg` | | |
| `--surface` | | |
| `--ink` | | |
| `--accent` | | |

- What else changes in dark mode (shadow → border, blur reduction, saturation).
- `filter: invert()` forbidden; The palette is written by hand.

## Accessibility

- Measured risks: lowest contrast pair (value) and its correction.
- In this style `--ink-faint` is merely decorative; not interactive text.
- Motion/flare sensitivity: …
- `@supports` opaque fallback on glass/transparent surfaces.
- Focus visibility: solution on which surface the ring is weak.

## Sample images

| Visual | File | Look at what | How AI uses this |
|---|---|---|---|
| Landing | `shots/01-landing.png` | | |
| Dashboard | `shots/02-dashboard.png` | | |
| Mobile | `shots/03-mobile.png` | | |
| Components | `shots/04-components.png` | | |

## Tuzaklar

| Symptom | Why | Correction |
|---|---|---|
| | | |

## Neighboring styles

- **Compatible with:** `slug` — why (where to put it as a garnish).
- **Forbidden:** `slug` — why (which physics/grid conflicts).

## Referanslar

| Source | What to look for |
|---|---|
| https://… | |

## AI brief

Copy-paste; The implementing agent can use this block alone:

```
Style: <Name> (styles/NN-slug/style.md, tokens.json)
Token: only the kit/tokens.css [data-style="slug"] variables; hard-coded colour/shadow/radius is banned.
Typography: --font-display for headings (tracking --tracking), --font-body for body copy, --font-mono for labels.
Surface: 3 levels (--bg / --surface / --surface + --shadow); radius --radius and --radius-lg.
Component: the values in the "Component recipes" table verbatim, including state styles.
Banned: the "Traps" and "Bans" items.
Output: component code + a single paragraph note (which signature element you used where).
```

**Pre-delivery self-inspection**
- [ ] At least 2 of the signature elements of the style appear on the screen.
- [ ] No color/radius/shadow is hard-coded.
- [ ] Contrast: body ≥ 4.5:1, large text ≥ 3:1.
- [ ] Focus ring visible, touch target ≥ 44px.
- [ ] No bleed at 390px width.
- [ ] When `prefers-reduced-motion` is on, movement stops.
