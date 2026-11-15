# Research: improving the style generation code

> **Date:** 2026-11-15 · **Scope:** the `kit/` build chain + `styles/` sources · **Status:** research, no code changed
> **Method:** repository measurement (the commands below) + external source review (DTCG, Style Dictionary, Leonardo, OKLCH, Utopia, stylelint, VLM QA)
> **Starting state:** `bash kit/gates.sh` → 27 steps, gates clean; the proven defects were exactly where the gates **did not look**.

---

## 1 · Today's build chain (as is)

```
kit/specs/*.json ──add-style.mjs──▶ styles/<nn>/ {tokens.json, token-block.css, style.md, fragment, keywords}
     (100 styles only)                          │
                                                ├─ apply-fragments ─▶ kit/tokens.css · kit/render/shots.config.mjs
                                                ├─ assign-layouts / imagery / content ─▶ tokens.json fields
                                                └─ render-shots ─▶ styles/<nn>/shots/01-page.png (1280×2400)
kit/tokens.css ──export-tokens──▶ kit/dist/{tokens.all.css, tailwind.theme.css, figma.variables.json}
```

The generator `kit/lib/style-spec.mjs` (604 lines) produces 5 files from a single SPEC; `add-style.mjs` (202 lines)
runs the sequence. The chain's **strengths**: one command, a `--check` drift gate, measured contrast thresholds,
deterministic assignments, visual signature (dHash) regression, and it runs without npm.

The weakness: the chain **does not cover the whole catalog**, and the quality gates cannot see part of what they measure.

---

## 2 · Measured findings

| # | Finding | Measurement | Evidence |
|---|---|---|---|
| B1 | **The single page is fitted with "zoom", not by design** | **251/251 styles** overflow 2400px; `body.zoom` p10/p50/p90 = 0.808/0.882/0.931. Pre-zoom content is **p50 2721px** (p10 2578, p90 2972, max 3268) ⇒ median **−321px**, worst **−868px** over. Result: **smallest visual type size p50 7.9px** (p10 7.2, min 6.6), **53.9%** of text elements under 10px; **19 styles** still overflow past the 0.78 floor (bottom content clipped). Before zoom no style has a computed size under 8.5px ⇒ the whole defect is zoom-driven. | `kit/render/page.html:189-199`; measurement: §7 |
| B2 | **The gate could not see this defect (fixed with P0)** | The old measurement reported `0 issues · 0 warnings (small text)` for the same pages: `MEASURE_EXPR` only read `getComputedStyle().fontSize`; it did not compute the post-zoom visual size or the pre-zoom overflow. The new measurement reports **521 issues** on the same 251 pages (zoom<1, page overflow, visual size under 9px). | `kit/render/render-shots.mjs:307-365`, `:390-420` |
| B3 | **60% of the catalog is outside the generator** | 100 of 251 styles have a SPEC (152–251), 151 are hand-written (01–151). The legacy styles have all 5 sources but no generator ⇒ `add-style --check` verifies nothing for those 151 styles. | `ls kit/specs` vs `ls styles` |
| B4 | **45 duplicate style keys inside `shots.config.mjs`** | 297 keys / 252 unique; 45 keys are defined twice: in 26 of them the content is **different** (JS last-definition-wins ⇒ the earlier block is silently dead), in 19 it is an exact copy. The dead blocks total **994 lines**. Whoever edits that key changes nothing. | `kit/render/shots.config.mjs` (e.g. `cyberpunk` at 918 and 1498) |
| B5 | **The token contract is split in two** | The `tokens.json`/`css` contract is **20** variables (no spacing and no state color). Variable counts in the `tokens.css` blocks are {20, 21, 24, 25, 28} — 161 styles override `--danger`, 90 fall back to the global `#b42318`. The machine source (JSON) does not know the state color; `scene.css` `.field.err` uses `--danger` anyway. | `styles/*/tokens.json`, `kit/tokens.css:24-30`, `kit/render/scene.css:1096`, `kit/lib/style-spec.mjs:530` |
| B6 | **`extraCss` is a free-text escape hatch** | 18.5 KB of CSS across 100 SPECs, 185 characters on average, **213 distinct lines** (the same `h1 { font-size: 38px }` 12 times). **138 of 270** signature blocks contain a self-overriding declaration (327 in total): `h1 { font-size: 54px }` then `h1 { font-size: 38px }`. No gate parses this text. | `kit/specs/*.json → extraCss`, no `add-style` validation |
| B7 | **Non-token colors in old blocks** | 18 of the 270 signature blocks contain **69 hard-coded hex** values in total (all legacy: `skeuomorphism` 18, `frutiger-aero` 6, `glassmorphism` 6…). SPEC generation is clean (0 hex) ⇒ the leak is only in hand-written blocks. | `kit/render/shots.config.mjs` |
| B8 | **Near-duplicate styles** | dHash pairs across the 251 renders: neighbour distance median 61/256, but **4 pairs ≤ 4/256** (`skill-tree`≈`coding-bootcamp` 2, `marketplace-multi`≈`electronics-spec` 3, `pharmacy-store`≈`marketplace-multi` 4, `university-portal`≈`exam-prep` 4), 9 styles ≤16/256. No gate measures the distance between styles (phash only compares a style with its own baseline). | `kit/render/phash.mjs`, `kit/render/visual-baseline.json` |
| B9 | **The composition axis is almost fixed** | A single `page.html` (204 lines) ⇒ **identical section order** across 251 pages (logo, three steps, media, metric band, component, form+data, CTA, footer). Only hero/nav (8+5 partials, 16 fingerprints, largest 12%) and `density` change. | `kit/render/page.html`, `kit/render/layouts.json` |
| B10 | **Gate hygiene** | `node --test` appears **0 times** in `gates.sh` ⇒ `render-shots.test.mjs` and `cdp-browser.test.mjs` never run. `kit/render/a11y-check.mjs` (421 lines) is not wired to any gate. `build-gallery` scans `kit/render/*.html`; `.tmp-*.html` files left behind by `SHOTS_KEEP_TMP=1` **wrongly** break the gate. `TESTING.md` describes deleted pages (`motion-lab.html`, `sections.html`, `flows.html`) and "151 styles". | `kit/gates.sh`, `kit/build-gallery.mjs:263-270`, `TESTING.md` |
| B11 | **Exports are non-standard** | `figma.variables.json` uses its own format, `tailwind.theme.css` uses `@theme`, and there is no DTCG (`$value`/`$type`) output. Since 2025.10 DTCG is **stable v1**; Style Dictionary v5 reads DTCG directly. | `kit/export-tokens.mjs`, `kit/dist/*` |
| B12 | **Contrast debt is closed by hand** | 0 errors / 19 soft warnings (`skeuomorphism` ink-soft 4.34, 6 styles with ink-faint <3, 3 styles with APCA Lc <60). The palette is hand-written as 10 hex values; a value that misses the threshold is **fixed by a human**, the generator does not solve it. | `kit/check-contrast.mjs --strict-soft`, `kit/lib/style-spec.mjs:57-80` |

**Summary:** the problem is not "there is no generator"; there is one, but (a) it covers 40% of the catalog, (b) the
gates that measure the output's aesthetic/ergonomic correctness are weak, and (c) the hand-written escape hatches
(legacy CSS, `extraCss`) punch holes in the contract.

---

## 3 · External research (what others do)

| Topic | Current state | What it means for style-lab |
|---|---|---|
| **DTCG token format** | **Stable v1 (2025.10)** was published on 28 October 2025; `$value`, `$type`, `colorSpace`+`components` for color (interpolatable space, including `oklch`), and the `$schema` discussion is ongoing. Tools Studio/Style Dictionary/Figma plugins read this format. | A third export (`dist/tokens.dtcg.json`) opens the catalog to the tool ecosystem; the existing custom formats can stay. |
| **Style Dictionary v5** | Consumes DTCG directly, `outputReferences` preserves the `var(--…)` chain; the rule is "compiled CSS is a build artifact, never hand-edited". | Our `tokens.css` is already an artifact; if a DTCG output is provided, consuming projects can build their own SD pipeline. No new dependency is **needed** (the emitter can be written by hand). |
| **Primitive → semantic layering** | The common architecture: primitive (`blue-600`) → semantic (`color/text/link`) → component. Without a semantic layer, modes/exports do not scale. | `palette.bg/ink/accent` is already semantic; what is missing is **primitive ramps** (3–4 tones from the same hue) ⇒ `bg-2`, `surface-2`, `line` are invented by hand today. |
| **Leonardo (Adobe)** | Contrast-**targeted** palettes: every tone hits the requested WCAG/APCA ratio against the given ground **exactly** (binary search + HSLuv/OKLCH perceptual lightness). Spectrum was produced this way. | The fix for B12: instead of 10 hex values, targets in the SPEC (`body ≥4.5`, `soft ≥4.5`, `faint ≥3`, `accentInk ≥4.5`, focus ≥3); the generator **solves** the color. The 19 warnings and the manual fix loop disappear. |
| **OKLCH / perceptual ramp** | Deriving light/dark in sRGB inflates the mid tones; in OKLCH the same L step looks the same in every hue; the OKLCH L ↔ CIE Y ↔ WCAG luminance bridge is the standard approach for contrast. | The derivation of `bg-2/surface-2/line` becomes a formula; a "same family" tone ladder is guaranteed for all 31 families. |
| **APCA / WCAG 3** | APCA is **not an approved test**: WCAG 3 is a draft, the contrast algorithm is "undetermined"; compliance claims are still made with the WCAG 2.2 ratio. | The current approach (WCAG ratio = error, APCA = information) is right; APCA must not be turned into a threshold. |
| **Utopia / fluid scale** | Fluid typography/spacing between min and max viewport with `clamp()`; it calculates and reports WCAG 1.4.4 (200% zoom) violations. | The structural fix for B1: instead of a fixed px scale + zoom, a **budget-driven fluid scale** (2400px height = the design budget). |
| **stylelint token rules** | Firefox/Atlassian/Carbon: "no hard-coded color, use tokens", "no undefined token", "deprecated token warning". | We can write our own lint on the CSS-producing side (without npm): the same rules for `extraCss` + `token-block.css`. |
| **Visual QA (VLM)** | The approach: diff on **region crops** rather than full pages and let the model inspect; delete findings the model cannot point at; combine measurement + VLM. | A "visual claim" gate could be added to the catalog: cropped region + measurement; but deterministic measurement (B1/B8) must come first. |

Sources in §9.

---

## 4 · Target architecture (proposal)

```
SPEC (single source of truth, 251 styles)
  ├─ palette seed (hue/polarity/accent) + contrast targets
  │     └─ color solver (OKLCH ⇄ luminance) ─▶ 10 semantic + 4 state + ramp
  ├─ type/space scale (budget-driven, fluid) ─▶ tokens.json (DTCG $value) ─┬▶ token-block.css
  ├─ section plan (which section, which archetype)                        ├▶ dist/tokens.dtcg.json
  └─ signature CSS (structural knobs, not free text)                      └▶ dist/{tailwind, figma}
                                                                          │
page.html (assembled from the section plan) ─▶ render ─▶ 01-page.png ─▶ gates:
   fit (no zoom) · type floor · style-to-style distance · token discipline · tests
```

Five axes: **(1) coverage** (move the 151 legacy styles into SPECs), **(2) correct color** (solver), **(3) correct page**
(budget + fluid scale, no zoom), **(4) variety** (section plan + distance gate), **(5) gate honesty**
(measure what you see, state what you do not).

---

## 5 · Proposal packages

Effort: S ≤ half a day, M ≤ 2 days, L > 2 days (agent hours). Each package brings its own gate.

### P0 — Measurement honesty (S, low risk) — **DONE**

`--measure` now treats fitting as measurement input: `fitTier`, `pageOverflow`, `contentHeight`,
`minVisualFont`, `tinyVisual`. Thresholds: zoom banned (no zoom code remains in page.html), overflow > 2px =
error, type size < 10px = error. `--fit-json` emits a machine-readable dump. `gates.sh` now runs
`node --test kit/render/*.test.mjs` (4 tests) and the measurement sample went from 6 to **24**.

`kit/render/a11y-check.mjs` was **not wired**: it was written against the deleted scene templates, and since
`page.html` partials are injected at render time it sees no `<h1>` in the raw template (proven: it reports
"0 h1 elements" for minimalism). A status note was added to its header; re-wiring needs a step that resolves
partials. `build-gallery`'s template color scan already skips dot-prefixed temporary files.
`TESTING.md` has been brought to the v6 state (no motion-lab/sections/flows references).

### P1 — Fitting: budget instead of zoom (M, medium risk) — **DONE**
1. The zoom safety net in `page.html` is removed; section heights are budgeted (`--sec-y`, `--card-pad`, `--lede-max`).
2. Fluid typography: `--fs-h1: clamp(...)` per budget; the manual `h1 { font-size: … }` in `extraCss` moves to a **step token** (`--fs-h1`, `--fs-h2`, `--fs-body`).
3. Two-pass render: measure → if needed adjust the `--fit` variable (typography/spacing only) → capture. Visual scaling (zoom) is banned.

**Implemented (measurement):** the zoom safety net in `page.html` was deleted. In its place (a) a vertical budget:
nav 14px, hero 34/24, `.pg-sec` 30→18px, card 16→12px, media 244→196px, band 22→14px, cta 32→22px, footer
30→22px; (b) `data-fit` tiers — 1: spacing tightens + the logo strip drops, 2: the metric band drops too,
3: the three-step section drops too; (c) a type floor: 65 CSS + 81 fragment + 1 SPEC values between 8.5–9.5px
were pulled to 10px (the type size is never reduced by a tier).

After measurement: **0/251 overflowing · smallest type size 10px · text under 10px 0% · content 2400–2401px**.
Tier distribution: 0 → 79 styles, 1 → 120, 2 → 17, 3 → 35. PNG total 209 MB → **172 MB**.
The visual signature baseline was renewed (`phash --write`), `bash kit/gates.sh` → **kapılar: temiz**.

**Acceptance:** on 251/251 pages `zoom = 1`, content ≤ 2400px, visual type size ≥ 10px; the P0 gate is green;
`01-page.png` signatures are written to the new baseline.

**Measured budget (input for the P1 design):** today's distribution of the 2400px (sample: `minimalism` / `grand-tourer-oxblood`):

| Block | Today | Target | Note |
|---|---|---|---|
| nav | 62–72 | 56 | `padding: 20px` → 16px |
| hero (split/centered) | 600 | 480 | padding 54/40 → 36/26, copy gap 18 → 12, image max-y 40px shorter |
| hero (sticky/type) | 864 | ≤ 560 | the sticky hero is the biggest overflow source (in 8 styles) |
| pg-logos | 51 | 0–40 | can drop entirely in dense plans |
| pg-sec ×3 | 345 / 334 / 531 | 300 / 290 / 440 | `.pg-sec` padding 30 → 22; card padding 20 → 14; control height 44 → 36; gap 18 → 12 |
| pg-band | 102 | 86 | padding 22 → 16 |
| pg-form | 360 | 300 | input 44 → 36, card padding |
| pg-cta | 236 | 200 | padding |
| pg-foot + base | 169 | 140 | 4 columns tighter |

Total gain ≈ **−330px** ⇒ p50 (2721) fits, p90 (2972) does not. Two levers for the tail:
(1) a `--fit-y` multiplier (vertical padding/gap only, not typography) measured and written per style as 0.72–1;
(2) in the `density-dense` plan the `pg-logos` and `pg-band` sections drop and the component grid goes 2×2 → 1×4.
Both are wired to the `check-layout`/`check-composition` gates; the 19 clipped styles are closed with these two levers.

### P2 — Token contract v7 + palette solver (M–L, medium risk)
1. Contract: 20 → **28** variables (`--space-1…8`, `--danger/--ok/--warn` + `-ink`), `tokens.json` carries them; three-copy parity holds.
2. Palette solver: instead of SPEC `palette`, `seeds { bg, accent, polarity }` + targets; `ink/ink-soft/ink-faint/accent-ink/line` are produced via OKLCH L solving (the Leonardo idea, ~120 lines without npm).
3. `dist/tokens.dtcg.json` (DTCG 2025.10 `$value/$type`) — the existing exports stay.
4. `contrast-baseline.json` stays empty; the 19 warnings go to zero (either solved or a justified exception).

**Acceptance:** `check-contrast --strict-soft` 0 warnings; `tokens.json` has 28 variables; the DTCG output passes schema
validation; the legacy 151 styles' colors are **identical or within an accepted deviation** of the solver output.

### P3 — Coverage: move the 151 legacy styles into the generator (L, medium risk)
1. `kit/extract-spec.mjs`: produces a SPEC from `styles/<nn>/` + the `shots.config.mjs` block (reverse engineering), proven identical with `--check`.
2. The legacy blocks are **deleted** from `shots.config.mjs`; the file keeps only the `apply-fragments` region (994 dead lines + 45 duplicate keys gone).
3. `add-style --check` now covers 251/251.

**Acceptance:** 251 SPECs; 0 duplicate keys in `shots.config.mjs`; `phash --check` 251/251 zero difference (visual output
unchanged); gate clean.

### P4 — Variety (M, low risk)
1. Add a **section plan** axis to `layouts.json` (`sections: [logos, trio, media, band, comp, form, cta]` variants); `page.html` is assembled from the plan.
2. `check-layout` scope: the hero|nav fingerprint 25% ceiling + section plan distribution.
3. New gate: **style-to-style dHash distance ≥ 24/256** (9 styles violate it today; 4 pairs ≤4).

**Acceptance:** ≥ 6 section plans across 251 styles, none above 35%; the distance gate is green (the 9 close styles are
separated by design).

### P5 — Narrow the escape hatches (S–M)
1. `extraCss` is parsed: hex/`rgb(` banned, self-overriding declarations banned, allow-listed selector list (`h1,h2,h3,.brand,.chip,…`).
2. Repeated boilerplate (`h1 { font-size: … }`, `.pg-card { border-radius: … }`) moves to a SPEC knob (`typeScale`, `radiusPlan`) ⇒ ~18 KB of SPEC text and 327 overriding declarations deleted.

**Acceptance:** `check-signature` (new) 0 violations; `extraCss` ≤ 400 characters per SPEC; 138 broken blocks cleaned.

---

## 6 · Order and rationale

| Order | Package | Why here |
|---|---|---|
| 1 | **P0** | Fixing without measuring is blind; today's "clean" claim is refuted by B1/B2. Fast, no rollback needed. |
| 2 | **P1** | The only real defect the user sees: 7.7px text. The P0 gate turns it red, P1 turns it green. |
| 3 | **P2** | Color correctness + contract; without state colors and a spacing scale a consuming project is incomplete. |
| 4 | **P3** | Coverage: done once, every later refactor applies to all 251 styles at once. Must follow P2 (let the SPEC schema settle). |
| 5 | **P4** | Catalog value: the "same skeleton" feeling across 251 styles decreases; gate cost is low. |
| 6 | **P5** | Debt cleanup; almost free together with P3. |

**Total:** P0+P1 in one branch (~1 day) → a "clean and honest" catalog. P2+P3 in a second branch (~2–3 days) → "the
generator is the source of everything".

---

## 7 · Reproducing the measurement

```bash
# B1/B2: zoom + visual type size (whole catalog; ~6 min)
node kit/render/render-shots.mjs --measure --jobs 6 --fit-json > fit.json
# Summary lines: `ölçüm · 251 sahne · 521 sorun` and `sığdırma · zoom<1: 251/251 · en küçük görsel punto 6.6px`
# Quick look for a single style: --sample 6 --measure  (this is what the gate runs)
# For the section budget: load the .tmp-*-page.html file over CDP, set body.zoom=1, read the heights of main's children
# B4: duplicate keys (297 keys / 252 unique / 45 pairs / 26 different / 994 dead lines)
node -e "..."   # see the session that produced this report; rule: count ^ {2}'?slug'?: \{$ matches

# B5: variable count distribution {20,21,24,25,28}, --danger in 161 styles
grep -c -- '--danger' kit/tokens.css

# B8: style-to-style dHash distance (median 61/256, 4 pairs ≤4)
node kit/render/phash.mjs --check --json   # baseline: kit/render/visual-baseline.json

# B10: tests missing from the gate
grep -c 'node --test' kit/gates.sh   # 0
```

---

## 8 · Risks

- **P1 breaks the visual signature:** all 251 PNGs are regenerated, `phash --write` renews the baseline; the numbers in
  `docs/katalog.md`, `report.md`, `composition.md` and the README must be updated. Acceptance: new baseline + a single
  "render: fit" commit.
- **P2 changes legacy colors:** the solver output may deviate from today's hand-picked hex values. Rollback: keep the
  SPEC `palette` field, make `seeds` optional; freeze the old values with a `--legacy-palette` flag.
- **P3 reverse-engineering errors:** if the extracted SPEC does not match exactly, the visuals change. Acceptance test:
  `phash --check` 251/251 zero difference **and** `add-style --check` 0 drift; mismatched fields are reported, not forced.
- **Rule conflict:** `AGENTS.md` says "do not add variables to the token contract"; P2 deliberately proposes a **v7
  contract bump** ⇒ requires user approval + an `AGENTS.md` update.

---

## 9 · Sources

- Design Tokens Community Group — *Design Tokens specification stable v1 (2025.10)*: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- DTCG — *Color Module 2025.10* (`colorSpace`, `components`, `alpha`, `hex`): https://www.w3.org/community/reports/design-tokens/CG-FINAL-color-20251028/
- Style Dictionary v5 — migration + DTCG consumption + `outputReferences`: https://styledictionary.com/versions/v5/migration/
- Token architecture (primitive/semantic/component): https://gregsargent.com/articles/token-architecture-decisions · https://www.figma.com/resource-library/design-token-architecture/
- Adobe Leonardo — contrast-targeted palette generation: https://medium.com/@NateBaldwin/leonardo-an-open-source-contrast-based-color-generator-92d61b6521d2 · https://github.com/adobe/leonardo
- OKLCH ↔ WCAG luminance bridge (tonal-oklch): https://github.com/SashimiEthan/tonal-oklch
- APCA's WCAG 3 status (not an approved test): https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html · https://www.w3.org/TR/wcag-3.0/
- Utopia fluid typography/spacing + WCAG 1.4.4 check: https://utopia.fyi/type/calculator/ · https://github.com/trys/utopia-core
- stylelint token rules (`use-design-tokens`): https://firefox-source-docs.mozilla.org/code-quality/lint/linters/stylelint-plugin-mozilla/rules/use-design-tokens.html
- Combined VLM + measurement visual QA, the "cropped diff" approach: https://mizchi.github.io/vlmkit/ · https://uiverify.ai/blog/agent-visual-testing-cropped-diff
