# Playbook · Breaking Uniform Design

This file answers the question that follows "which style": **how do I fit the style into an app, and how do I vary it without becoming uniform.**

---

## 1 · Why uniformity happens

| Cause | Symptom | Fix |
|---|---|---|
| One surface type | Every screen is the same white card with the same shadow | Define 3 surface levels: ground, card, floating layer (each behaves differently) |
| One type rhythm | Every heading 20px, every body 14px | Scale jump: 1.5–1.7× instead of 1.25× (14 → 21 → 32) |
| Color only means "brand" | No color outside the button | Let color **carry code**: state, category, priority |
| Symmetry obsession | Every section centered and equal | 1 asymmetric section per screen (7/5 or 8/4) |
| Ornament ban | Everything flat; no signature at all | 1 signature element: texture, hairline, custom corner, custom transition |
| One scale | Every heading at the same size | Two extreme sizes + a 1.5× scale ratio |

**Rule:** A screen must contain at least **one** "this belongs to the brand" element — one of the *Visual signature* items in the style file.

---

## 2 · Style selection and mixing

### 2.1 Single style (recommended start)
Pick 1 style that matches the product personality and take every token from it. The fastest and most consistent route.

### 2.2 Dominant + garnish (2 styles, upper limit)
- **Dominant 80%:** color, typography, surface, radius → from one style.
- **Garnish 20%:** in *one* layer only (e.g. hero image, nav, empty-state illustration).
- The garnish does not override the dominant's variables; it only carries `data-style` on its own component.
- **A wrapper carries a single attribute:** `<div data-style="liquid-glass">`. There are no compound
  selectors; `kit/check-composition.mjs --browser` measures that neighbouring styles do not bleed into
  each other in the DOM.

```
<html data-style="minimalism">          <!-- dominant -->
  <header data-style="liquid-glass">     <!-- garnish: nav only -->
  <main> ... minimalism tokens ... </main>
  <section data-style="editorial-design"><!-- garnish: story section only -->
</html>
```

### 2.3 Compatible / forbidden pairs

| Compatible | Why |
|---|---|
| minimalism + liquid-glass | glass reads as a single layer on a plain ground |
| swiss-design + bento-grid | both are grid discipline |
| editorial-design + luxury-typography | same serif family, different density |
| japandi + wabi-sabi | same warmth and texture language |
| neo-brutalism + memphis | both heavy outline + flat color |
| cybercore + cyberpunk | terminal + neon, same world |
| aurora-ui + glassmorphism | one is ground, the other is layer |
| claymorphism + dopamine-ui | pastel + vivid, same playful tone |

| Forbidden | Why |
|---|---|
| glassmorphism + neumorphism | two different light physics; both claim to be "the surface" |
| minimalism + maximalism | contradictory space policies |
| swiss-design + scrapbook | grid vs deliberate chaos |
| art-deco + pixel-art | conflicting resolution and era |
| 3+ styles | produces noise, not hierarchy |

**Rule:** If you want to add a 3rd style, delete the 2nd first.

---

## 3 · The 7 levers that break uniformity

1. **Surface hierarchy** — ground / card / floating layer. Three different shadows, different radii, different opacity.
2. **Typographic contrast** — two extremes on one screen: a very large heading + a very small label (11px tracked). Reduce the middle sizes.
3. **Color code** — color should carry information, not decoration (state, category, priority). Four tones in grayscale are enough.
4. **Texture** — 3–6% grain, 1px hairline, subtle inner shadow. It turns a flat surface into "material".
5. **Layout rhythm** — three sections should not align: one full width, one two columns, one narrow + airy.
6. **State trail** — press/focus/selection speak the same language everywhere; never more than 3 state tones.
7. **Signature element** — one, repeated, owned by the brand: corner bracket, hairline gold rule, hard shadow, glass nav, pixel icon.

---

## 4 · Style assignment per screen

Style intensity must follow the screen's job. "Showmanship" on an operational screen and "plainness" on a showcase screen are both mistakes.

| Screen | Style intensity | Application |
|---|---|---|
| Landing / hero | **high** | Full style: large heading, texture, gradient, signature element |
| Onboarding | high | One idea per page, strong illustration, single CTA |
| Empty state | medium-high | The style's character is most visible here; 1 sentence + 1 action |
| Dashboard | **low** | Neutral ground, style only in typography/radius/color code |
| List / table | low | Density leads; style lives in row rules and numeric typography |
| Form | low | Convention wins; style only in focus and borders |
| Payment / delete / login | **very low** | Style close to 0; trust and clarity |
| Notification / toast | medium | The style's color and radius language; one line, icon + text |
| Profile / settings | medium | Bento or section rhythm; minimal ornament |

**Practice:** In an app, `data-style` is chosen at page level; for exception screens define `data-style="plain"` (neutral).

---

## 5 · Token architecture

```
tokens.css        → the styles' variable sets ([data-style="..."])
components.css    → button, card, input, table: consumes var() only
app.css           → layout only (grid, spacing); carries no style information
```

Rules:
- **No hard-coded color/shadow/radius** in components; everything is `var(--...)`.
- At most 3 extra variables per style (e.g. `--shadow-hard`, `--grain`, `--blur`).
- When adding a component, check how it looks in every style by comparing in `kit/gallery.html`.
- Dark mode is out of scope in v6: only a light palette is generated; do not add a second theme block.

### Visual and motif recipe

- The scene keeps shared structure and base styling; a style adds its graphic motif in its own `motif.css`.
- The motif is a CSS-only layer over the scene, attached to the existing `.motif-<name>` hook.
- Motif color comes from `var(--...)` tokens; literal colors, animation, transitions, and `!important` are not allowed.
- Keep the motif decorative and within the 4 KB file limit so it cannot replace the style's content hierarchy.
- Generated SVG artwork uses `tokens.json` → `imagery.art` and is stored under `kit/images/gen/`.
- The artwork occupies the scene's media slot; it does not replace the motif layer or enter the Unsplash registry.
- `node kit/check-visual.mjs` checks the motif contract and SVG safety before integration.

---

### 5.1 Composition axis (schema v3) — the skeleton is a token too

Color and typography separate two styles; **the same skeleton** does not. When 145 styles share one
hero composition, the catalog becomes "145 paint jobs of the same site" (measured: in v4 a single
fingerprint = 100%). That is why composition moved to the token level: `tokens.json → layout { hero, nav, density }`.

| Axis | Archetypes | What changes |
|---|---|---|
| `hero` | split · split-reverse · centered · type · fullbleed · product · index · sticky | copy/media relationship, screen count, hierarchy |
| `nav` | inline · pill · split · utility · rail | navigation model (top row, pill, side rail…) |
| `density` | sparse · balanced · dense | items per screen and spacing |

Rules:
1. **Single source** `kit/render/layouts.json`; markup in `kit/render/partials/`; styles write CSS only.
2. Archetype selectors are qualified with `[data-layout]` / `[data-nav]` → the skeleton wins, inner element styles still apply.
3. Assignment is **deterministic** (`kit/assign-layouts.mjs`): slug + family + tags are scored, ties are broken by hash.
   No manual "feel"-based choice; if an exception is needed, add a rule to the dictionary first.
4. Ceilings are measured: one `hero|nav` ≤ 25%, one hero ≤ 35%, a family with ≥8 styles has ≥3 distinct heroes,
   every archetype lives in ≥4 styles (`kit/check-layout.mjs`, proven by `--self-test`).
5. Composition is not copied within a family: **the same `hero|nav` pair never repeats inside a family**, no exemptions.

Details: README § Composition axis · distribution: `kit/dist/composition.md`.

---

## 6 · Accessibility gate (mandatory in every style)

- [ ] Body text contrast ≥ 4.5:1, large text ≥ 3:1.
- [ ] `--ink-faint` is decorative only; never used for interactive text.
- [ ] Focus ring is visible: `:focus-visible { outline: 2px solid var(--focus, var(--accent)); outline-offset: 2px }`.
  The ring must be **≥ 3:1** on both `--bg` and `--surface` (non-text contrast). If accent does not clear
  this threshold, the `--focus` token is derived by mixing toward ink (this happens in 13 styles; accent was left untouched).
- [ ] APCA check: body text |Lc| ≥ 75 target, ≥ 60 acceptable, < 45 error. Read it together with the WCAG
  ratio — APCA is polarity-sensitive (light text on a dark ground does not score the same as the inverse).
- [ ] Touch target ≥ 44×44px (with padding even if the visual is smaller).
- [ ] Color never carries meaning alone (state + icon/label).
- [ ] No animation (v6): no auto-playing video/marquee/carousel.
- [ ] `prefers-reduced-transparency` is supported (opaque fallback on glass surfaces).
- [ ] Video ships with a `poster`; the LCP element is the poster, not the video.
- [ ] Opaque fallback on glass/transparent surfaces (`@supports`).
- [ ] In low-contrast styles (neumorphism, ethereal, japandi) the text layer is darkened separately.

---

## 7 · Performance budget

| Item | Limit | Note |
|---|---|---|
| `backdrop-filter` layers | ≤ 3 per screen | fall back to a static blur on mobile |
| Grain | SVG `feTurbulence`, once | do not use PNG textures |
| Font families | ≤ 3 (display + body + mono) | `font-display: swap`, subset |
| Image | ≤ 300 KB per viewport | WebP/AVIF + `srcset` |
| Continuous animation | ≤ 1 per screen | no animation outside `transform`/`opacity` |
| Shadow layers | ≤ 3 `box-shadow` | multi-layer glow is expensive on mobile |

---

## 8 · The 40-minute application recipe

The order for fitting a new style onto an existing app:

1. **5 min** — Pick the style from the README; read the style file's "Screen recipes" table.
2. **5 min** — Move the block from `kit/tokens.css` under `:root`; add `<html data-style="...">`.
3. **10 min** — Replace the hard-coded colors/radii/shadows in `components.css` with `var()`.
4. **5 min** — Pull the type scale to the ratios in the style file (size + tracking + line height).
5. **5 min** — Build the surface hierarchy: ground → card → floating layer; give each a different behavior.
6. **5 min** — Add the single signature element (texture, hairline, shadow language, glass nav).
7. **5 min** — Apply the state language: focus ring, press, selection (§6).
8. **QA** — §7 checklist + compare your component in `kit/gallery.html`.

---

## 9 · Single-screen QA checklist

- [ ] Is there a single dominant focus on the screen?
- [ ] Are there at least 2 extreme type sizes (11px label + 32px+ heading)?
- [ ] Are surfaces split into 3 levels, or is everything the same card?
- [ ] Does color carry information, or is it ornament?
- [ ] Is a signature element belonging to the style visible?
- [ ] Is there overflow/overlap at 390px width?
- [ ] Did contrast and the focus ring pass?
- [ ] Would the same screen work with another style (is the token contract sound)?

---

## 10 · Common mistakes

| Mistake | Result | Fix |
|---|---|---|
| Applying the style to each component separately | Inconsistent radius/shadow | One `data-style` + tokens |
| Letting the garnish style override the dominant's variables | Identity loss | The garnish stays inside its own subtree |
| Same intensity on every screen | Exhausting or lifeless | §4 matrix |
| Changing only the color | "Same design, different paint" | Typography + surface + spacing must change too |
| 4+ fonts / 3+ radii | Clutter | 1 scale, 2 radii |
| Changing the palette with a filter | Colors get poisoned | Write the palette from tokens |
| Leaving the style in Figma | It gets lost in code | Put the tokens in the repo |

---

## 11 · Prompt template for agents/automated generation

Short version (the `## AI brief` block in the style file is more detailed; if they conflict, the AI brief wins):

```
Style: <slug> — files: styles/<nn-slug>/style.md + tokens.json + shots/
Rules:
- Use only the <slug> variables in kit/tokens.css; never write hard-coded color/shadow/radius.
- Typography: --font-display for headings, --font-body for body, --font-mono for labels, --tracking on headings.
- Surfaces: 3 levels (bg / surface / surface+shadow), radius --radius and --radius-lg.
- Components: the measurements in style.md § Component recipes, exactly.
- Composition: playbook §5 + style.md § Visual signature; no animation (v6).
- Forbidden: style.md § Forbidden and § Pitfalls.
- Accessibility: the playbook §7 checklist must pass.
- Output: component code + a short note (which signature element you used where).
```

---

## 12 · New style flow (v6 · one command)

> In v5 this was 8 steps (~15 min) and manual three-copy sync was the most frequent breakage. In v6 it is one SPEC + one command.

1. Copy a file from `kit/specs/*.json` as a template; write into the SPEC: `num`, `slug`, `name`, `band`,
   `tagline`, `feeling/best/avoid`, `palette` (10 colors), `fonts` (3 families from the `kit/fonts` list),
   `radius` (2 values), `motif`, `signature` (≥3), `must` / `mustNot` (≥3), `refs` (≥3 https),
   `keywords` (3), `brief`, `neighbors`.
2. `node kit/add-style.mjs kit/specs/<file>.json` — contrast/font/neighbour/band are validated; five sources
   (`tokens.json`, `token-block.css`, `style.md`, `shots.config.fragment.mjs`, `keywords.json`) are written.
3. The same command runs `apply-fragments` → layout/imagery/content assignments → single-page render →
   doc tables → gallery, index, export, report, visual baseline.
4. Fix until `bash kit/gates.sh` is clean. If you open a new family, add a contiguous range to
   `kit/families.json` and a template to `kit/specs/bands.json`; `apply-fragments` goes red on a gap/overlap.

Acceptance: the last line of `add-style` is `bitti · N stil hazır`, the last line of `bash kit/gates.sh` is
`kapılar: temiz`, `node kit/check-schema.mjs` reports 0 errors, `node kit/check-contrast.mjs --strict-soft`
reports 0 errors.

---

## 13 · AI application protocol (style → code)

This section is the order to follow when someone says "let the AI build a design with this library".
The goal is to produce applicable code that preserves the style's **identity**, not "the same design with different colors".

### 14.1 Reading order (building context)

1. `kit/styles.index.json` → pick the style (family, tags, `docsReady`).
2. `styles/<nn-slug>/style.md` → in order: **§ Mandatory rules → § Forbidden → § Component recipes → § Screen recipes → § Pitfalls**.
3. `styles/<nn-slug>/tokens.json` → palette, scale, layout, must/mustNot (reference this while generating code).
4. `styles/<nn-slug>/shots/01…04` → open the image. If the doc and the image conflict, **the image wins**; fix the
   conflict (in `docsReady` styles the images are generated from the tokens, so they are consistent).

### 14.2 Decision matrix (how much style on which screen)

| Screen | Intensity | Instruction to the AI |
|---|---|---|
| Landing / hero | high | Full style: display typography, signature element, texture/gradient/layering allowed (respecting the forbidden list) |
| Dashboard / table | low | Style only in typography + radius + color code; add no ornament |
| Form / payment / login | very low | Convention wins; style only in the focus ring and borders |
| Empty state / onboarding | medium-high | The style's character shows here: 1 sentence + 1 action + signature element |

### 14.3 Generation rules

- Component code consumes **only** `var(--…)`; no color/shadow/radius literal is ever written.
- Three surface levels are built: `--bg` → `--surface` (+`--line`) → floating layer (+`--shadow`). If the style says "no shadow", the floating layer is separated by a 1px rule instead.
- Typography: display + body + mono roles are distinct; the type scale is chosen from the steps in the style file, no intermediate steps invented.
- Composition: playbook §5 + style file § Visual signature; no animation (v6).
- If the style is "dark based", do not invent a light theme; if a second theme is needed use the `dark`/`light` block in tokens.json, never `filter: invert()`.
- Garnish usage: at most 1 secondary style and in one layer only (`data-style` in the subtree); it must not override the dominant style's variables.

### 14.4 Pre-delivery self-check (the AI applies this to its own output)

- [ ] At least 2 of the style's signature items are visible on the screen (style.md § Visual signature).
- [ ] No hard-coded color/shadow/radius — verify with grep (`#[0-9a-f]{3,6}`, `box-shadow:`, `border-radius:`).
- [ ] Nothing from the forbidden list was used.
- [ ] Contrast: body ≥ 4.5:1, large text ≥ 3:1 (with the values from style.md § Accessibility).
- [ ] Focus ring visible, touch target ≥ 44×44px.
- [ ] No overflow/overlap at 390px width.
- [ ] No auto-playing motion (v6).
- [ ] Did you compare the code you wrote with the logic of `kit/gallery.html`: the same component, and does it hold up when the style changes?

### 14.5 Common mistakes (AI-specific)

| Mistake | Symptom | Fix |
|---|---|---|
| Copying only the tokens | "Same design, different paint" | Apply the type scale + surface + spacing rhythm too |
| Applying the style to each component separately | Inconsistent radius/shadow | One `data-style` + token layer |
| Full intensity on every screen | Exhausting, or unsafe (payment screen) | §14.2 matrix |
| Copying from the image without reading the doc | Wrong measurements (images are produced at 1280px) | Take measurements from the style.md tables; take only *character* from the image |
| Skipping the forbidden list | The style's identity breaks (e.g. adding a shadow in neumorphism) | Read the § Forbidden list before producing output |

### 14.6 Quick command summary

```bash
node kit/build-gallery.mjs --check      # schema/link/image/token sync check
node kit/check-contrast.mjs             # WCAG report (debts in the baseline)
node kit/render/render-shots.mjs        # generate missing images (--styles <slug> --force)
node kit/render/fetch-fonts.mjs         # re-download fonts (for offline render)
```

## 14 · Accepted contrast warnings

`node kit/check-contrast.mjs` reports **0 errors**. The remaining 15 warnings are deliberate design
decisions and are **not written** to `kit/contrast-baseline.json` — because these are not text but
decorative elements (grid rule, divider, icon outline, faint label).

**Rule:** `--ink-faint` is **never used as body text.** Only in these places:
- decorative rule/divider/grid that does not require ≥ 3:1,
- icon outline in a passive state,
- `aria-hidden` labels (e.g. technical measurement notes).

Text always uses `--ink` (body) or `--ink-soft` (caption, ≥ 4.5:1).

| Style | Token | Measured | Where it is used |
|---|---|---|---|
| 01 minimalism | `--ink-faint` | 2.53:1 | section label, hairline |
| 04 luxury-typography | `--ink-faint` | 2.76:1 | mini label, rule |
| 05 bento-grid | `--ink-faint` | 2.43:1 | tile label |
| 06 japandi | `--ink-faint` | 2.98:1 | label, divider |
| 07 wabi-sabi | `--ink-faint` | 2.87:1 | label, rule |
| 10 neumorphism | `--ink-faint` | 2.52:1 | inset surface label |
| 11 claymorphism | `--ink-faint` | 3.00:1 | soft label |
| 19 y2k | `--ink-faint` | 2.70:1 | label on chrome |
| 25 frutiger-aero | `--ink-faint` | 2.94:1 | label on glossy surface |
| 28 surrealism | `--ink-faint` | 2.76:1 | scale note |
| 29 ethereal | `--ink-faint` | 2.85:1 | label on mist |
| 30 bohemian | `--ink-faint` | 2.99:1 | label on texture |
| 31 scrapbook | `--ink-faint` | 2.95:1 | note under handwriting |
| 34 skeuomorphism | `--ink-faint` | 2.26:1 | label on bevel |
| 34 skeuomorphism | `--ink-soft` | 4.34:1 | **not body text** — ≥18px only |

**Skeuomorphism exception:** because the material texture eats contrast, `--ink-soft` stays at 4.34:1;
in this style body text always uses `--ink` (8.41:1). When adding a new style, target `--ink-soft` ≥ 4.5:1;
if it drops below, add a row to this table and state why.

## 15 · Token export contract

`kit/dist/` is generated output and is not edited by hand; `node kit/export-tokens.mjs` writes it and
`--check` verifies freshness at the gate.

| Output | Contract |
|---|---|
| `tokens.all.css` | `:root` fallback + `[data-style]` per style + `[data-theme=dark]` where present; variable names identical to `kit/tokens.css` |
| `tailwind.theme.css` | Tailwind v4 `@theme`: `--color-*`, `--font-*`, `--radius-control/card`, `--shadow-control`; the 8-step spacing maps to `p-1…p-16` (4px base) |
| `figma.variables.json` | `collections[]`: `Color System` (with Light/Dark modes), `Radius`, `Spacing`, `Typography`; every variable is `{ name, type, values: { <mode>: value } }` |
| `index.json` | Per style: `dark` status, token count, file paths |

Rule: when a token is added, first update `kit/tokens.css` + `styles/<slug>/tokens.json`, then run the
export. The reverse direction (hand-editing dist) is caught at the `token export güncel` gate step.

## 16 · Contract check (style-lint)

Producing tokens is not enough; the consuming code must be **measured** against them. `kit/style-lint.mjs`
scans code for the chosen style and turns the catalog from a reference into a contract:

```bash
node kit/style-lint.mjs src --style terminal-ui --strict   # this one in CI
```

| Rule class | Why it is an error | How to fix it |
|---|---|---|
| Color literal (`#fff`, `rgba()`, `Color(0x…)`) | the screen does not change when the style changes | `var(--accent)` / `context.styleLab.accent` |
| Off-style font | identity is lost (each style carries a single font family) | `var(--font-display)` / `t.typography` |
| Radius literal | the corner language detaches from the style contract | `var(--radius)` / `var(--radius-lg)` |
| `--ink-faint` as text | contrast drops, unreadable | `var(--ink-soft)` |
| No `data-style` | no token is applied at all | `data-style="<slug>"` on the root element |

The warning/error split is deliberate: color and font break **identity** (error); radius can often carry
a reasonable exception (warning). With `--strict` warnings become gates too — enable it on a new project,
use it like a debt ledger on an old one.
