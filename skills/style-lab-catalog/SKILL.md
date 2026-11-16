---
name: style-lab-catalog
description: >-
  Picks 1 dominant + at most 1 garnish style from the style-lab catalog (v6: 251 styles, 31 family bands, one single page per style) by intent, applies its tokens from the [data-style] block, builds the composition archetype (hero/nav/density) and verifies with gates. Dark mode and animation do not exist in v6. Triggers: "which style", "pick a style", "apply tokens", "design system", "design a landing", "landing page", "dashboard look", "game style", "add a new style", "search styles"; Turkish: "stil seç", "hangi stil", "style-lab", "landing tasarla", "açılış sayfası", "dashboard görünümü", "oyun stili", "yeni stil ekle", "stil ara".
---

# style-lab Catalog (v6)

The catalog holds **251 styles in 31 family bands**; every style is rendered as **one long page** mock-up
(1280×2400, `styles/<nn>-<slug>/shots/01-page.png`). The dark mode and animation layers were removed in v6.

The single source is the `styles/<nn>-<slug>/` folder:

| File | Content |
|---|---|
| `style.md` | decisions: Essence · Visual signature · Mandatory rules · Forbidden · Component recipes · Pitfalls · AI brief |
| `tokens.json` | palette (10 colors), typography, shape, spacing, component recipes, `layout`, refs |
| `token-block.css` | the CSS block of the same tokens |
| `shots.config.fragment.mjs` | scene signature (motif + signature CSS) |
| `keywords.json` | gallery tags |
| `shots/01-page.png` | the single-page render (if it conflicts with the doc, **the image wins**) |

This skill **selects, reads, applies, verifies**. Writing `kit/` infrastructure (gates, render engine, export,
index generation) is not this skill's job.

## When to Use

- A **visual language has to be chosen** for a surface ("pick a style", "which style", "style-lab").
- A **page/screen is being designed** ("design a landing", "dashboard look", "set up a theme").
- **Catalog tokens are being applied** to an existing interface (color, typography, radius, shadow).
- A style is being looked up in newer bands such as **game/operations/commerce/culture** (152–251).
- A **new style** is being added to the catalog → `references/workflow.md` (one command).

**Do not use for:** non-style work (pure bug fix, data/text work) · `kit/` infrastructure changes
(separate maintenance work) · PNG render waves (teach the command, do not run it) · unmeasured taste debates.

**Boundary (precedence):** This skill chooses **what** you want (style + tokens). **How** to write it is owned by
`modern-web-guidance`: when coding platform mechanics such as `color-mix()`, `@property`, container queries or
`light-dark()`, run `npx -y modern-web-guidance@latest search "<2-5 words>"` → `retrieve "<id>"`. Do not change token
values based on MWG; MWG only supplies the mechanism.

## Decide in 30 seconds

| Intent | Band | Example slugs |
|---|---|---|
| Calm, corporate, readable | Plain (01–07) | `minimalism`, `swiss-design`, `japandi` |
| Data/operations density | Data & Metrics (46–55) · Operations & Data (172–181) | `telemetry-grid`, `incident-response`, `finops-cost` |
| Game / HUD / esports | Game & Interaction (152–171) | `game-hud`, `game-sci-fi-cockpit`, `game-esports-league` |
| Commerce / storefront | Commerce & Storefront (182–191) | `grocery-delivery`, `luxury-atelier`, `electronics-spec` |
| Culture / publishing | Culture & Publishing (192–201) | `museum-exhibition`, `film-festival`, `condensed-news` |
| Health / science | Health & Science (202–211) | `clinical-trial`, `mental-wellness`, `genomics-lab` |
| Learning | Learning & Gamification (212–221) | `language-app`, `skill-tree`, `exam-prep` |
| Material / craft | Material & Craft (222–231) | `terrazzo-stone`, `linocut-print`, `raw-steel` |
| Typography experiment | Typography Experiments (232–241) | `variable-weight`, `justified-book`, `uppercase-only` |
| Future / research | Future & Speculative (242–251) | `agent-console`, `quantum-dashboard`, `digital-twin` |

Full band table: `references/families.md` · style list: `docs/catalog.md` ·
machine-readable: `kit/styles.index.json`.

## Procedure

### 0 · Build the context (30 s)

```bash
node kit/pick.mjs --intent "long read + calm + corporate"     # 3 candidates + rationale + file paths
node kit/pick.mjs --intent "game hud" --limit 5
node kit/pick.mjs --families                                   # the 31 family bands
node -e "const i=require('./kit/dist/index.slim.json');console.log('styles:',i.count)"
```

Do **not** memorise catalog numbers; when a number is needed, `kit/dist/report.md` (`node kit/report.mjs`) produces it.
`kit/styles.index.json` is ~880 KB — an agent does not read it; use `pick` + `index.slim.json`.

### 1 · Choose the style (1 dominant + at most 1 garnish)

1. Turn the intent into 2–3 **measurable** criteria ("long read + calm + corporate").
2. `node kit/pick.mjs --intent "<intent>" --limit 3 --garnish` — read the candidates' **rationale** line.
3. Pick 2–3 candidate bands from `references/families.md`; narrow with `style.md → ## Essence`.
4. Choose **one as dominant**. If a garnish is needed, take it only from `tokens.json → neighbors.compatible`;
   `neighbors.forbidden` is **never used**.
5. Justify the choice in one sentence: "X is dominant because …; Y is garnish because …".

Garnish rule: it lives in a single subtree (`[data-style="Y"]` wrapper) and does not override the dominant style's
variables. 3+ styles is identity loss.

### 2 · Read (before applying, short)

1. `style.md` → `## Essence`, `## Visual signature`, `## Mandatory rules`, `## Forbidden`,
   `## Component recipes`, `## Pitfalls`, `## AI brief`.
2. `tokens.json` → `palette`, `typography`, `shape`, `spacing`, `grid`, `layout` (hero/nav/density),
   `components`, `must` / `mustNot`.
3. `shots/01-page.png` (single page: nav, hero, three sections, component grid, form+data, CTA, footer).

### 2b · Apply the composition archetype

A style carries **a skeleton**, not just color: `tokens.json → layout.hero | nav | density`.
Applying the tokens and falling back to the default split hero produces "the same site, different paint".

| `layout.hero` | What to build |
|---|---|
| `split` / `split-reverse` | copy + one visual panel; `reverse` moves the visual to the left |
| `centered` | a single centered message + a wide media band below |
| `type` | no visual; the heading is the screen (poster scale) |
| `fullbleed` | media bleeds to the left edge, copy breathes on the right |
| `product` | small copy on top, a giant product panel below |
| `index` | narrow copy on the left, a 2×2 work/entry grid on the right |
| `sticky` | sticky copy on the left, a scrolling 3-panel story on the right |

`nav`: `inline` · `pill` · `split` · `utility` · `rail` · `density`: `sparse | balanced | dense`.
Reference: `kit/render/partials/hero-<id>.html` + `nav-<id>.html`; rationale in `kit/render/layouts.json`.

### 3 · Apply the tokens

```html
<html data-style="game-hud">
```

```css
/* var(--…) only — NO hard-coded color/radius/shadow/font */
.card  { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.btn   { background: var(--accent); color: var(--accent-ink); border-radius: var(--radius); }
.muted { color: var(--ink-soft); }              /* --ink-faint is decorative only */
.focus:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
```

Source order: `kit/tokens.css → [data-style="<slug>"]` → (bundled) `kit/dist/tokens.all.css` ·
for Tailwind `kit/dist/tailwind.theme.css` · for Figma `kit/dist/figma.variables.json`
(single style: `node kit/export-tokens.mjs --styles <slug> --split`).

Contract variables (20): `--bg --bg-2 --surface --surface-2 --ink --ink-soft --ink-faint
--accent --accent-ink --line --radius --radius-lg --shadow --shadow-hard --font-display
--font-body --font-mono --tracking --blur --grain`. Extra: `--danger/--ok/--warn`,
`--space-1…8`, `--data-1…4`.

Component measurements are taken **verbatim** from the `## Component recipes` table; an "approximate" measurement
breaks the identity.

### 4 · Dark mode and animation (v6: out of scope)

- Do **not** add a theme switcher, a `data-theme="dark"` block or `palette.dark` — the catalog produces a light
  palette only. A consuming project that wants dark mode builds its own theme; it does not borrow colors from the catalog.
- Do not add animation/transitions. `@keyframes`, `animation:` and scroll-reveal libraries are not part of the v6
  contract. Interaction feedback is static (color/border/focus change).

### 5 · Verify

```bash
node kit/render/render-shots.mjs --styles <slug> --force     # single page (1280×2400)
node kit/render/optimize-shots.mjs --styles <slug>           # lossless compression
node kit/render/render-shots.mjs --styles <slug> --measure    # overflow / clipped block / small text
bash kit/gates.sh                                            # 27 steps: parity → catalog → assignment → measurement → export → signature
```

Individually: `node kit/check-schema.mjs` · `node kit/check-contrast.mjs --strict-soft` ·
`node kit/check-layout.mjs` · `node kit/sync-shot-tables.mjs --check` · `node kit/export-tokens.mjs --check` ·
`node kit/build-gallery.mjs --check` · `node kit/build-catalog-doc.mjs --check` · `node kit/render/phash.mjs --check`.

Is the code you wrote compatible with the catalog: `node kit/style-lint.mjs <dir> --style <slug>`
(color/font literal = error, radius = warning; `--strict` makes everything a gate). Rule list: `--list-rules`.

Open `styles/<slug>/shots/01-page.png`: if **at least 2** of the `## Visual signature` items are not visible, the
implementation is incomplete.

### 6 · New style (one command)

`references/workflow.md` — write a SPEC in `kit/specs/*.json` and run `node kit/add-style.mjs <file>`.
Do not enter this flow to apply an existing style.

## Pitfalls

| Pitfall | Why it happens | Correct way |
|---|---|---|
| Hard-coded `#hex`, `box-shadow`, `border-radius: 12px` | fast prototyping | `var(--…)` only; the component must not break when the style changes |
| 2+ garnishes | "so it looks richer" | 1 dominant + at most 1 garnish, in a single subtree |
| Mixing in a `neighbors.forbidden` style | the table was not consulted | `neighbors.compatible` only; `check-schema` catches it |
| Adding dark mode/animation | v5 habit | out of scope in v6; `check-schema` goes red on motion/dark |
| Editing `kit/tokens.css` / `shots.config.mjs` / `gallery.data.mjs` by hand | "let me write it here too" | These files are **generated**: write the source + `apply-fragments --apply` |
| Forgetting compression after render | PNGs grow | `optimize-shots --styles <slug>` + `phash --check` |
| Copying measurements from the image instead of the doc | the image is produced at 1280px | Measurements from the `style.md` tables; character from the image |
| Memorising a number from `styles.index.json` | the file is generated and changes | Measure the number with `node -e` or `kit/dist/report.md` |
| Skipping the gates and saying "done" | fast delivery | It does not count as done without the `bash kit/gates.sh` output |

## Verification

Before an implementation counts as "done":

- [ ] The choice is justified: 1 dominant + (if any) 1 garnish, from `neighbors.compatible`.
- [ ] `style.md` was read: Mandatory rules + Forbidden + Component recipes applied.
- [ ] Not a single color/radius/shadow/font literal in the code:
      `grep -nE "#[0-9a-fA-F]{3,8}|rgba?\(|border-radius: *[0-9]|box-shadow: *[0-9]" <file>`
- [ ] One attribute on the root: `data-style="<slug>"` (no theme attribute).
- [ ] No animation/`@keyframes`; interaction is static feedback.
- [ ] Contrast: body ≥ 4.5:1, large text ≥ 3:1, on accent ≥ 4.5:1 (`--strict-soft`).
- [ ] Focus ring visible, touch target ≥ 44px, no overflow at 390px.
- [ ] Composition: the screen was built per the `layout.hero` archetype; `node kit/check-layout.mjs` clean.
- [ ] `bash kit/gates.sh` → "gates: clean" (or the reason for the remaining error is written down).

References: `references/families.md` (31 bands) · `references/workflow.md` (new style, one command) ·
`docs/catalog.md` (251 styles) · `playbook.md` §2 selection, §5 tokens, §14–§16 contrast/export.
