# Phase status — P0–P5

> **Date:** 2026-11-15 · **Branch:** `v6-tek-sayfa`
> **Scope:** The P0–P5 items open in this round were implemented. The final state is updated together with the gate outputs below.

This file records the acceptance criteria of each phase and the current evidence. Generated files are updated by the project generators, never by hand.

## P0 · Accessibility

The landing check uses the real layout partials, the real style body and the three-digit style folders. All 251 styles are scanned at the gate.

**Evidence:** `node kit/render/a11y-check.mjs --scene landing` · 251 styles, 0 critical violations, 0 negative `tabindex`.

## P1 · Page fitting and typography

- The `--fit` measurement tier is written into `tokens.json.layout.fit`; a normal render applies the stored tier. The layout and SPEC generators preserve this value.
- If there is overflow or clipping, the fit value is not persisted. All 251 scenes were re-measured and re-rendered.
- `h1` sizes moved to a CSS variable through `typography.scale.h1` / SPEC `scale.h1`. `type-scale.mjs` emits the inline variables with a safe length value; `scene.css` consumes them.

**Evidence:** `render-shots --measure --fit --jobs 2` · 251 scenes, 0 overflow, 0 errors. `node --test kit/lib/type-scale.test.mjs`.

## P2 · Palette model

- 251 token sources and 100 SPECs carry the `paletteSeeds` / `paletteTargets` fields.
- The OKLCH-based resolver hits the target contrast and produces accessible state colors.
- No warning was added to the debt baseline.

**Evidence:** `node kit/check-contrast.mjs --strict-soft` · 251 styles, 0 errors, 0 debt, 0 warnings.

## P3 · Single source and the legacy SPEC

- The entire `STYLES` object is generated from fragments. 45 shadow blocks and 994 dead lines were removed; two consecutive `apply-fragments --apply` runs are idempotent.
- The fields of the old 01–151 styles were extracted into `kit/specs/legacy-01-151.json`: prose fields and recipes come from `style.md`; token/layout/imagery fields from `tokens.json`; motif/body class/CSS from `shots.config.fragment.mjs`; the keywords array from `keywords.json`.
- The old family ranges map to the nearest shared recipe in `bands.json`. This mapping does not mean the old families and the new bands are identical.
- The four source files of every style are tracked by SHA-256. `add-style --check` compares every re-extracted field and source digest against the SPEC; the same check runs inside `gates.sh`.

**Evidence:** `node kit/add-style.mjs kit/specs/legacy-01-151.json --check` · 151 styles, 0 drift. `node kit/apply-fragments.mjs --check`.

## P4 · Composition variety

- `layouts.json` defines six section plans; every style's `sectionPlan` assignment is deterministic. Page sections are rendered in DOM order, not with CSS `order`, and follow the same order as the accessibility tree.
- The layout gate checks that every plan contains its nine section markers exactly once, and checks the plan distribution.
- All style pairs are compared with dHash over the visual baseline; the lowest accepted threshold is 24/256.

**Evidence:** `node kit/check-layout.mjs` · 6 plans, 16 hero/nav fingerprints. `node kit/check-distinctness.mjs` · 251 styles, 0 near pairs.

## P5 · Signature CSS escape gates

- `check-signature.mjs` catches hard-coded hex colors and self-overriding declarations; the linter is verified with a synthetic self-test.
- CSS normalization before render tidies duplicate declarations. The SPEC `extraCss` limit is 400 characters; the longest current value is 399 characters.

**Evidence:** `node kit/check-signature.mjs` · 251 styles, 0 findings. `node kit/check-signature.mjs --self-test`.

## Final verification

```bash
bash kit/gates.sh
```

**Result (2026-11-15):** `kapılar: temiz`. Legacy SPEC parity 151/151, visual signature 251/251 with 0 difference, 0 near pairs in distinctness. A11y 251/251, 0 critical violations; the sample overflow measurement found 0 overflow across 24 scenes; unit tests passed 11/11. Pixel regression was skipped with `↷` because `kit/render/.baseline/` is absent. `bash ~/.pi/agent/bin/verify.sh` could not find an automatic verification command because it does not recognise the stack; `kit/gates.sh` was therefore run by hand for this repo.
