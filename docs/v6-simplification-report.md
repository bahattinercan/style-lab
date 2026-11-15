# v6 · single-page showcase — simplification report

> **Date:** 2026-11-14 · **Branch:** `v6-tek-sayfa` · **Scope:** the whole repository
> **Decided by:** the user (single page · no dark mode · no animation · 100 new styles including game styles)
> **Verification:** `bash kit/gates.sh` → `kapılar: temiz` (26 steps)

---

## 1 · What was asked, what was done

| Request | Implementation |
|---|---|
| "One page design per style" | The 37 scene templates were deleted; **`kit/render/page.html`** is the single template (1280×2400). **1 PNG** per style. |
| "Adding a style takes too long" | The 8-step flow became **one command**: `node kit/add-style.mjs kit/specs/<file>.json` (SPEC → 5 sources → assignments → render → index). |
| "No animation needed" | The `motion` field, `motion-*` scripts, motion lab/strip/measure, `dist/motion.*`, and the `@keyframes`/`animation` declarations in fragments were removed. |
| "I just want to see the style" | Dark mode (palette.dark, dark token block, dark scenes, dark-fill) was removed. Flutter/React token emitters are out of scope (CSS + Tailwind + Figma remain). |
| "Research 100 styles" | **100 new styles** (152–251) were added: 9 new family bands, among them **Game & Interaction (152–171, 20 styles)**. |

---

## 2 · Numbers (measured)

| Metric | v5 | v6 | Source |
|---|---|---|---|
| Styles | 151 | **251** | `kit/dist/report.md` |
| Family bands | 22 | **31** | `kit/families.json` |
| Images per style | 4 (in repo) / 37 (full) | **1** | `kit/shots.core.json` |
| PNGs in the repo | 604 | **251** | `kit/shots.manifest.json` |
| Total PNG size | 195.2 MiB | **223 MiB** | `du -ch styles/*/shots/01-page.png` |
| Gate steps | 38 | **26** | `grep -c '^run_gate' kit/gates.sh` |
| `hero|nav` fingerprints | 16 | **16** (largest cluster 14%) | `node kit/check-layout.mjs` |
| Contrast errors / debt | 0 / 0 | **0 / 0** (19 soft warnings) | `node kit/check-contrast.mjs --strict-soft` |
| Visual signature | 604/604 | **251/251, 0 difference** | `node kit/render/phash.mjs --check` |

Code deleted: 37 scene templates + estate/section/flow CSS + 9 motion scripts + dark-fill + 2 exporters
(~6,500 lines). Added: `kit/lib/style-spec.mjs` (generator), `kit/add-style.mjs` (single command),
`kit/specs/` (31 family templates + 100 SPECs), `kit/build-catalog-doc.mjs`, `kit/migrations/v6-*.mjs`.

---

## 3 · Single-page contract

`kit/render/page.html` — 1280×2400, sections from top to bottom:

1. **Nav** (5 partials: inline · pill · split · rail · utility)
2. **Hero** (8 partials: split · split-reverse · centered · type · fullbleed · product · index · sticky)
3. **Logo strip** (per-style copy)
4. **Three steps** (card grid)
5. **Media + text** (photo + 3 points + measurement bar)
6. **Metric band** (4 numbers)
7. **Component grid** (button/chip · input · card · table)
8. **Form + data** (2 columns: form, chart)
9. **CTA band**
10. **Footer** (4 columns + bottom line)

Fitting safety net: if the content exceeds 2400px the body is scaled once (`zoom`); if it does not, nothing changes.

> **2026-11-15 · removed:** the `zoom` safety net engaged in 251/251 styles (content median 2721px,
> visual type size median 7.9px). It was replaced by a vertical budget + `data-fit` tiers; details in
> `docs/style-generation-research.md` §5 P1. The overflow measurement now checks the fit tier, the zoom ban
> and the 10px type floor. Measurement gate: `node kit/render/render-shots.mjs --measure` → horizontal overflow, clipped blocks,
8.5px sub-minimum text (251 scenes, 0 issues).

---

## 4 · Adding a style: v5 → v6

**v5 (8 steps, ~15 min):** write style.md → copy the token block into `tokens.css` → `tokens.json` →
fragment → keywords → `apply-fragments` → `assign-*` → render → table sync → export/report.

**v6 (1 command):**

```bash
node kit/add-style.mjs kit/specs/my-batch.json
```

SPEC fields (`kit/specs/*.json`): `num slug name band tagline feeling best avoid palette[10]
fonts[3] radius[2] motif signature[] must[] mustNot[] refs[] keywords[] brief neighbors`,
optional `upper tracking scale essence origin recognition notThis screens traps extraCss`.

Command order: **validate** (contrast thresholds, font library, neighbour slugs, family band) →
**generate** (5 sources, three-copy parity preserved) → `apply-fragments` → `assign-layouts` →
`assign-imagery` → `assign-content` → `render-shots` → `optimize-shots` → `sync-shot-tables` →
`build-gallery` → `export-tokens` → `build-slim-index` → `report` → `composition-report` → `phash --write`.

Batch count: the 100 new styles were produced in 8 batches; after each batch things were fixed until
`check-schema` + `check-contrast` + `check-layout` were clean.

---

## 5 · Family bands (v6 additions)

| Band | Range | Styles | Examples |
|---|---|---|---|
| Game & Interaction | 152–171 | 20 | game-hud · game-racing · game-fantasy-rpg · game-sci-fi-cockpit · game-retro-console · game-esports-league · game-indie-pixel · game-card-tcg · game-survival-craft · game-mobile-casual · game-horror-occult · game-racing-neon · game-strategy-map · game-sim-builder · game-arcade-cabinet · game-stealth-tactical · game-puzzle-light · game-mmo-guild · game-franchise-sports · game-pinball-neon |
| Operations & Data | 172–181 | 10 | incident-response · finops-cost · fleet-dispatch · fraud-review · slo-budget · data-lineage · access-audit · release-train · support-inbox · regulatory-report |
| Commerce & Storefront | 182–191 | 10 | grocery-delivery · marketplace-multi · luxury-atelier · subscription-box · sneaker-drop · wine-cellar · furniture-studio · electronics-spec · pharmacy-store · farmers-market |
| Culture & Publishing | 192–201 | 10 | museum-exhibition · theatre-season · film-festival · public-radio · podcast-network · indie-cinema · library-archive · comic-bookstore · opera-house · street-festival |
| Health & Science | 202–211 | 10 | clinical-trial · lab-protocol · pharmacy-labels · physiotherapy · mental-wellness · nutrition-plan · dental-clinic · public-health · genomics-lab · veterinary-care |
| Learning & Gamification | 212–221 | 10 | language-app · skill-tree · university-portal · coding-bootcamp · kids-classroom · exam-prep · music-lesson · lab-simulation · peer-study · certificate-wallet |
| Material & Craft | 222–231 | 10 | terrazzo-stone · linocut-print · risograph-print · denim-textile · cork-oak · cast-concrete · enamel-jewel · hand-thrown-ceramic · raw-steel · recycled-paper |
| Typography Experiments | 232–241 | 10 | condensed-news · monospace-editorial · blackletter-modern · variable-weight · justified-book · stencil-display · uppercase-only · italic-accent · numerals-display · small-caps-ledger |
| Future & Speculative | 242–251 | 10 | agent-console · spatial-workspace · bio-lab-interface · climate-model · orbital-logistics · synthetic-media · quantum-dashboard · digital-twin · neural-canvas · post-screen-voice |

Every SPEC is grounded in real design references (stable sources such as Wikipedia/Google Fonts/MDN/W3C
in the `refs` field); palettes were measured into the thresholds, and none were written into baseline debt.

---

## 6 · Migration (v5 sources)

| Script | What it does | Scope |
|---|---|---|
| `kit/migrations/v6-strip.mjs` | Deletes `palette.dark` and `motion`, sets `version: 6`, removes the dark token block, strips the "## Hareket"/"## Koyu mod" sections from style.md, cleans `@keyframes`/`animation` from fragments | 151 styles · 460 files |
| `kit/migrations/v6-shots.mjs` | Converts the old scene references in style.md to `shots/01-page.png`, collapses the "Örnek görseller" table to a single line | 151 style.md |
| `kit/render/render-shots.mjs` | SCENES = the single `page` (1280×2400); `--measure`, blank-frame retry, viewport verification | 251 PNG |

---

## 7 · Gates (26 steps)

Parity: `apply-fragments --check` · `check-schema` · `check-contrast --strict-soft` ·
Catalog: `build-gallery --check` · `build-slim-index --check` · `sync-shot-tables --check` ·
Assignments: `assign-layouts/imagery/content --check` · `check-content` · `check-imagery` ·
`fetch-images --check` · `check-layout` (+ self-test) · `check-composition --browser` · `composition-report --check` ·
Measurement: `render-shots --sample 6 --measure` ·
Output: `export-tokens --check` · `fetch-fonts --check` · `report --check` ·
Tooling: `style-lint --self-test` · `check-gallery-ui` · `brief --self-test` · `mcp-server --self-test` ·
Visual: `phash --check` · pixel regression (when a baseline exists).

Removed gates (no replacement): `motion-check`, `assign-motion`, `build-motion-css`,
`motion-audit`, `build-motion-lab`, `render/motion-measure`, `render/motion-strip`,
`normalize-motion`, `check-viewers`, `render-sections`, `render-flows`, `export/flutter --verify`,
`export/react --verify`, `build-catalog` (replaced by `build-catalog-doc`).

---

## 8 · Known limits

- The single page is a fixed 1280×2400: no responsive/mobile frame.
- Dark mode and animation are out of scope; a consuming project that wants them builds its own theme.
- The Flutter/React token emitters were deleted; CSS/Tailwind/Figma export was accepted as sufficient.
- `--measure` only measures overflow/clipping/small text; color harmony and hierarchy are inspected by
  eye (`kit/qa/landing.png` board).
- The gate count is 26; when a feature is added, a gate must be added too (otherwise it is an unverified claim).
