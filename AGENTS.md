# AGENTS.md Â· style-lab (v6)

## Project overview

A design style catalog: **251 styles**, **31 family bands**, **one long page per style** (1280Ã—2400)
mock-up + token set + component recipe + AI brief. Dark mode and animation were **removed in v6**.

Little code, lots of **data + generators**: the source files under `styles/<nn-slug>/` are compiled
one-way into HTML/CSS/PNG/JSON by the `kit/` scripts. No dependencies â€” `npm install` is not needed;
Node 22 plus an installed Chrome/Edge is enough.

**Source â†’ build chain**

```
kit/specs/*.json  â†’  kit/add-style.mjs  â†’  styles/<nn>/ {tokens.json, token-block.css, style.md,
                                            shots.config.fragment.mjs, keywords.json}
styles/<nn>/token-block.css + fragment + keywords
                  â†’  kit/apply-fragments.mjs  â†’  kit/tokens.css Â· kit/render/shots.config.mjs Â· kit/gallery.data.mjs
kit/tokens.css    â†’  kit/render/render-shots.mjs  â†’  styles/<nn>/shots/01-page.png
kit/styles.index.json â†’ kit/build-gallery.mjs â†’ kit/gallery.html Â· kit/dist/index.slim.json
kit/tokens.css    â†’  kit/export-tokens.mjs  â†’  kit/dist/{tokens.all.css, tailwind.theme.css, figma.variables.json}
styles/<nn>/shots/01-page.png â†’ kit/build-thumbs.mjs â†’ kit/site/thumbs/<nn>-01-page@640|1280.webp
kit/gallery.html + thumbs + fonts + PNG â†’ kit/build-site.mjs â†’ _site/ â†’ .github/workflows/pages.yml â†’ Pages
```

## Folder map

```
styles/<nn-slug>/    style.md Â· tokens.json Â· token-block.css Â· shots.config.fragment.mjs Â· keywords.json Â· motif.css (optional) Â· shots/
kit/                 generator + gate scripts (.mjs, all with a CLI)
kit/live/            GENERATED: one responsive real page per style (kit/build-live.mjs)
kit/specs/           bands.json (family templates) + style SPECs (the 100 v6 styles live here)
kit/lib/style-spec.mjs  SPEC â†’ source generator
kit/render/          page.html (the ONLY template), scene.css, partials/, CDP browser, layouts.json
kit/dist/            GENERATED output (never edited by hand)
kit/fonts/           29 Google Fonts families (woff2, OFL)
kit/images/gen/      generated artwork SVGs (optional; outside the Unsplash registry)
kit/site/thumbs/     GENERATED: card/full-size WebP derivatives + manifest.json (in the repo)
_site/               GENERATED site (git-ignored) â†’ GitHub Pages artifact
.github/workflows/   gates.yml (gates) Â· pages.yml (static site publishing)
docs/                catalog.md (generated) Â· v6-simplification-report.md Â· v5-revision-report.md Â· stage-lab-plan.md
playbook.md          design recipes
TESTING.md           opening + testing the site
```

## Non-negotiable rules

1. **Never edit a generated file.** `kit/tokens.css`, `kit/render/shots.config.mjs`,
   `kit/gallery.data.mjs`, `kit/gallery.html`, `kit/styles.index.json`, `kit/live-styles.js`,
   `kit/dist/**`, `kit/live/**`, `docs/catalog.md`, `styles/*/shots/**`, `kit/site/thumbs/**`, `_site/**` are generator output.
   Changes go into the source
   (`styles/*/tokens.json`, `token-block.css`, `style.md`, fragment, or `kit/specs/*.json`) and are
   produced with `--apply`/`add-style`. The `--check` gates catch hand edits as **drift**.
2. **If a source changed, run the build too**: `node kit/apply-fragments.mjs --apply` â†’
   `node kit/build-gallery.mjs` â†’ `node kit/export-tokens.mjs` â†’ `node kit/build-catalog-doc.mjs`.
   If `shots/01-page.png` was regenerated, **additionally** run `node kit/build-thumbs.mjs` (WebP
   derivatives); otherwise `build-thumbs --check` fails the gate with stale derivatives.
3. **The token contract is fixed.** Every style fills the same 20 variables (`--bg â€¦ --grain`, `--space-1â€¦8`).
   Do **not** add variables to the contract for a new style â€” fill in the missing ones.
4. **No dark mode (v6).** No `palette.dark`, no `[data-theme="dark"]` block, no dark scene.
   `check-schema` **errors** if it sees these fields. Do not add a theme switcher.
5. **No animation (v6).** The `motion` field, `@keyframes` and `animation:` declarations are forbidden;
   `check-schema` errors if it sees `motion`, and the migration stripped keyframes from band fragments.
6. **Contrast is measured, not guessed.** WCAG + APCA + focus ring 3:1. Thresholds are measured by
   `add-style` (SPEC validation: ink/bg â‰¥ 4.5, ink-soft/bg â‰¥ 4.5, accent-ink/accent â‰¥ 4.5, focus â‰¥ 3)
   and by `kit/check-contrast.mjs --strict-soft`. `kit/contrast-baseline.json` is a **debt ledger**:
   do **not** add entries to the baseline to pass the gate; fix the value.
7. **Composition variety.** `layout` comes from the archetypes in `kit/render/layouts.json`; never
   invent it by hand. Rule: no `hero|nav` fingerprint exceeds 25%, every archetype is used in â‰¥4
   styles, each family has at least 3 distinct fingerprints. Gate: `node kit/check-layout.mjs`.
8. **Single-scene policy.** The repo holds only `shots/01-page.png` (1280Ã—2400). Do not produce other
   scenes, do not use `.shots-cache`; `kit/shots.core.json` = `["01-page.png"]`.
9. **File paths are fragile.** `kit/gallery.html` works together with the `gallery.css`/`tokens.css`/
   `gallery.js` next to it; images use relative paths (`../styles/...`). Do not move files out of
   `kit/`, do not write absolute paths.
10. **Never invent numbers.** Claims like "251 styles", "251 PNGs", "31 families" come from the output
    of `bash kit/gates.sh` and `kit/dist/report.md` / `docs/catalog.md`. Do not put an unmeasured
    number into README/AGENTS.
11. **New style = one command.** Write a SPEC into `kit/specs/*.json` â†’ `node kit/add-style.mjs <file>`.
    The command generates the sources, assigns layouts/imagery/content, renders, and refreshes the
    index/report/baseline.
12. **One change = one purpose.** Do not rewrite the huge generated files (880 KB `styles.index.json`,
    780 KB `gallery.html`) for formatting reasons; it makes the diff unreadable.
13. **Commit message** `feat|fix|docs|test|chore(<area>): <what>` â€” area: render, gallery, schema,
    export, content, specs, docs. Existing history follows this (`fix(render): â€¦`).
14. **Documentation is English; code identifiers are English.** `AGENTS.md`, `playbook.md`,
    `TESTING.md`, `docs/**`, `skills/**` and commit messages are written in English. `README` is the
    only bilingual pair (`README.md` English + `README.tr.md` Turkish). `style.md` prose is still
    Turkish because it is generated from the Turkish prose in `kit/specs/*.json` â€” to make it English,
    translate the SPEC and re-run `add-style`, never the generated file.
15. **When adding an external resource**, record it in the `refs/design-resources` catalog and leave
    no dead links.
16. **A style's motif layer lives in its own `motif.css`; `scene.css` stays shared.**

## Commands

```bash
# Open the site (no server needed)
kit/gallery.html                    # works over file://; search/URL testing needs a server
kit/live.html?style=minimalism       # real responsive page (generated, works over file://)
kit/live.html?mode=tokens            # token/component specimen
python -m http.server 8000 --bind 127.0.0.1
# â†’ http://localhost:8000/kit/gallery.html Â· kit/live.html?style=game-hud

# Published site (GitHub Pages)
node kit/build-thumbs.mjs              # PNG â†’ WebP derivatives (card 640 / full 1280) Â· --check: stale?
node kit/build-site.mjs                # assemble _site/ Â· --check: asset integrity Â· --clean: from scratch
node kit/check-site.mjs                # smoke test: HTTP + headless browser (landing/gallery/catalog/live)
python -m http.server 8000 --directory _site --bind 127.0.0.1   # browse the built site locally

# Add a new style (SPEC â†’ everything)
node kit/add-style.mjs kit/specs/my-batch.json          # generate + render + index
node kit/add-style.mjs kit/specs/my-batch.json --dry    # validate only
node kit/add-style.mjs kit/specs/my-batch.json --check  # are sources identical to the SPEC?

# Single-style scene generation / visual regression
node kit/render/render-shots.mjs --styles <slug> --force --jobs 2
node kit/sync-shot-tables.mjs --write --styles <slug>
node kit/render/optimize-shots.mjs --styles <slug>
node kit/render/phash.mjs --write --force     # visual signature baseline
node kit/render/phash.mjs --check             # signature of the 251 PNGs

# Tokens / export / docs
node kit/export-tokens.mjs                    # dist/* (--check: up to date?)
node kit/build-gallery.mjs                    # gallery.html + styles.index.json
node kit/build-live.mjs                       # one real-page preview per style in kit/live/
node kit/build-live.mjs --check                # verify generated live pages
node kit/build-catalog-doc.mjs                # docs/catalog.md
node kit/report.mjs                           # dist/report.md
node kit/composition-report.mjs               # dist/composition.md

# Is the style really applied in a consuming project?
node kit/style-lint.mjs src --style <slug>
```

## Verification (agent gate)

This repo has no `package.json`; the verification gate is `kit/gates.sh`:

```bash
bash kit/gates.sh          # 38 steps, a few minutes: parity â†’ catalog â†’ assignments â†’ measurement â†’ export â†’ site â†’ visual signature
```

Quick subsets (by kind of change, not the full set):

```bash
# source / schema / tokens / fragments
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check && node kit/check-contrast.mjs --strict-soft
node kit/check-visual.mjs && node kit/check-visual.mjs --self-test
# web UI / gallery / docs
node kit/check-gallery-ui.mjs && node kit/build-gallery.mjs --check && node kit/build-catalog-doc.mjs --check
# composition
node kit/assign-layouts.mjs --check && node kit/check-layout.mjs
# published site
node kit/build-thumbs.mjs --check && node kit/build-site.mjs --check && node kit/check-site.mjs
# single-page overflow measurement + visual signature
node kit/render/render-shots.mjs --sample 8 --measure --cache-only && node kit/render/phash.mjs --check
```

**Definition of "done":** the last line of `bash kit/gates.sh` is `kapÄ±lar: temiz` **and** the output
of the command you ran has been shown. If a gate is red, fix it and **run the same command again**.
If it does not pass in 3 rounds, stop and present the reason + 2 options with âš ï¸.

**Exceptions (written into the output, never silently skipped):**
if `node` is missing, `gates.sh` skips the gates and warns (returns 0 â€” do not count that as "clean").
If `kit/render/.baseline/` is missing, pixel regression is skipped with `â†·`.
The Flutter SDK is not required (v6 has no flutter export).

The pre-commit gate is **installed**: `.git/hooks/pre-commit` â†’ `bash kit/gates.sh` (reinstall with
`bash kit/install-hooks.sh`). The full set can exceed the 120 s tool timeout: instead of bypassing the
hook with `--no-verify`, run `gates.sh` in a separate long run, show the output, then commit.

## Pitfalls

- **The `styles/` folder name is the slug source.** `152-game-hud` â†’ `game-hud`. Renaming the folder
  breaks the token block + gallery + index + PNG.
- **`kit/tokens.css` is never edited by hand**: the fix goes into `styles/<slug>/token-block.css`, then `--apply`.
- **`check-schema` enforces three-copy parity** json â‡„ fragment â‡„ css. Fixing only one breaks the gate.
- **`gallery.html` ~780 KB, `styles.index.json` ~880 KB** â€” do not open them with read/edit; pull fields with `node -e`.
- **`kit/families.json` must stay contiguous when adding a band** (a gap/overlap breaks `apply-fragments`).
- **`avoid`/`best`/`feeling` must be plain strings in the SPEC** (an array makes `add-style` error out).
- **`neighbors` slugs must exist in the catalog or in the same batch** (`check-schema` looks them up).
- **Headless render runs WebGL on SwiftShader** â€” it does not measure GPU FPS; not enough for a performance claim.
- **`replaceState` is blocked under `file://`** â€” testing URL state (filter/share) needs a server.
- **The pre-commit hook runs 38 steps (>120 s)** and hits the tool timeout; run the gate in a separate
  long command, show the clean output, then commit.
- **Blank-frame risk:** viewport races are possible in the CDP tab pool; `render-shots` now verifies
  `innerWidth`, checks the PNG dimensions, and re-captures a blank frame once (`kit/render/cdp-browser.mjs`).
- **The gates are static checks; they do not catch click behaviour.** `check-gallery-ui` covers the
  gallery; lightbox/search behaviour needs a manual headless Chrome + CDP round.
- **Run `phash --check` after `optimize-shots --all`**; if compression changed pixels, the signature drifts.

## Rule map

| Topic | File | When to read it |
|---|---|---|
| Style selection + token application procedure | `skills/style-lab-catalog/SKILL.md` | **Before** applying a style to an app |
| Familyâ†’use-case mapping | `skills/style-lab-catalog/references/families.md` | While narrowing down style candidates |
| New style / SPEC fields | `kit/specs/*.json` + `kit/lib/style-spec.mjs` | When adding a style |
| Index of the 251 styles | `docs/catalog.md` | When looking up a slug/tag |
| Design it, break the uniformity (recipe) | `playbook.md` Â§2â€“Â§5 | While designing a component/screen |
| Contrast + export contract | `playbook.md` Â§14â€“Â§16 | When changing color/accessibility/output targets |
| v6 decisions and measurements | `docs/v6-simplification-report.md` | In scope discussions |
| Opening, testing, troubleshooting the site | `TESTING.md` | When a page does not open / an image is blank |

---
_Verified (v6): `bash kit/gates.sh` â†’ `kapÄ±lar: temiz` (38 steps) Â· 251 styles Â· 251 single-page PNGs Â·
31 families Â· 16 distinct hero|nav fingerprints Â· contrast 0 errors / 19 soft warnings Â· phash 251/251 diff 0._

