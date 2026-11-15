# Design Style Library (style-lab) · v6

> **Languages:** [English](README.md) · [Türkçe](README.tr.md)
> **Repository:** https://github.com/bahattinercan/style-lab
> **Gates:** `bash kit/gates.sh` (27 steps) · **Install hook:** `bash kit/install-hooks.sh`
> **Interactive:** `kit/gallery.html` (search · filter · drawer · compare) · `kit/live.html?style=<slug>`
> **Live site:** <https://bahattinercan.github.io/style-lab/> · **Catalog index:** [`docs/catalog.md`](docs/catalog.md) (251 styles, 31 families) · **Report:** `kit/dist/report.md`

A catalog against uniform design: **251 visual styles** in **31 family bands**. Every style ships
**one single-page mock-up** (1280×2400: nav, hero, three content sections, component grid,
form + data, CTA, footer), a token set, component recipes, pitfalls and an AI brief.

**v6 scope (deliberate reductions):**

| Kept | Removed |
|---|---|
| One long page per style (`01-page.png`) | 37 scene templates (dashboard, mobile, estate, …) |
| Light palette only | Dark mode (`palette.dark`, dark token block, dark scenes) |
| Static design (no animation) | Motion system (`motion.*`, motion lab/exports/checks) |
| CSS · Tailwind · Figma exports | Flutter/React token emitters |

Rationale and measurements: [`docs/v6-simplification-report.md`](docs/v6-simplification-report.md).

## Status

- 251/251 styles render a single page; **251 PNG, 172 MB total** (`du -ch styles/*/shots/01-page.png`).
- 251/251 on schema **v6** (`tokens.json` version 6, no `palette.dark`, no `motion`).
- 31 family bands, 1–251 contiguous (`kit/families.json`).
- 16 distinct `hero|nav` fingerprints; largest cluster 36 styles (**14%**), cap 25%.
- 0 contrast errors (`--strict-soft`), 19 documented soft warnings (decorative `--ink-faint`, low APCA in 3 very-dark palettes).
- Verification: `bash kit/gates.sh` → last line `kapılar: temiz`.

## Live site

<https://bahattinercan.github.io/style-lab/> — built by `node kit/build-site.mjs` and deployed by
`.github/workflows/pages.yml` on every push to `main`.

| Page | What it is |
|---|---|
| `/` | landing: counts from `kit/styles.index.json`, 8 featured styles, 31 family bands |
| `/kit/gallery.html` | the gallery: search, filters, pagination, drawer, lightbox, compare |
| `/katalog.html` | the catalog index (`docs/catalog.md` rendered, one link per style) |
| `/kit/live.html?style=<slug>` | the selected style's tokens applied to a static component page |

`_site/` is a build artifact (git-ignored). Cards load WebP derivatives
(`thumbs/<slug>@640.webp`, ~35 KB); the lightbox uses the `@1280` derivative and the original
PNG stays downloadable. Derivatives come from `node kit/build-thumbs.mjs` and are committed, so CI
never needs a browser.

```bash
node kit/build-thumbs.mjs        # PNG → WebP (640 / 1280) · --check for drift
node kit/build-site.mjs          # assemble _site/ · --check for asset integrity
node kit/check-site.mjs          # gate: headless smoke test over HTTP (landing, gallery, catalog, live)
```

## Folder map

```
style-lab/
├── README.md / README.tr.md      # this file (bilingual pair)
├── AGENTS.md                     # binding rules for agents working in this repo
├── docs/catalog.md               # generated index of 251 styles (build-catalog-doc.mjs)
├── docs/v6-simplification-report.md  # v6 decisions + measurements
├── playbook.md                   # design recipes (typography, spacing, color, a11y)
├── kit/
│   ├── specs/bands.json          # family band templates (shared prose/CSS)
│   ├── specs/*.json              # style SPECs → sources (100 v6 styles live here)
│   ├── add-style.mjs             # spec → 5 sources → assign → render → index (one command)
│   ├── lib/style-spec.mjs        # generator: tokens.json · token-block.css · style.md · fragment · keywords
│   ├── apply-fragments.mjs       # sources → kit/tokens.css + shots.config.mjs + gallery.data.mjs
│   ├── check-schema.mjs          # schema/parity gate
│   ├── check-contrast.mjs        # WCAG + APCA + focus ring
│   ├── check-layout.mjs          # composition diversity gate
│   ├── build-gallery.mjs         # gallery.html + styles.index.json
│   ├── build-thumbs.mjs          # PNG → WebP derivatives (kit/site/thumbs, committed)
│   ├── build-site.mjs            # _site/ assembler: landing, katalog.html, gallery copy, assets
│   ├── check-site.mjs            # headless smoke test of the built site over HTTP
│   ├── build-catalog-doc.mjs     # docs/catalog.md
│   ├── export-tokens.mjs         # dist/tokens.all.css · tailwind.theme.css · figma.variables.json
│   ├── render/
│   │   ├── page.html             # THE single page template
│   │   ├── scene.css             # page skeleton (.pg-*) + component classes
│   │   ├── partials/             # 8 hero × 5 nav partials
│   │   ├── render-shots.mjs      # page renderer (CDP, overflow measurement, empty-frame retry)
│   │   └── optimize-shots.mjs    # PNG quantisation (pixel-preserving)
│   ├── migrations/v6-*.mjs       # one-shot source migrations (v5 → v6)
│   └── gates.sh                  # 27-step verification gate
└── styles/<nn-slug>/
    ├── style.md                  # document (≥18 sections + AI brief)
    ├── tokens.json               # machine source (palette, typography, shape, spacing, components, refs)
    ├── token-block.css           # CSS variable block (source for apply-fragments)
    ├── shots.config.fragment.mjs # scene signature (motif + signature CSS)
    ├── keywords.json             # 3 gallery tags
    └── shots/01-page.png         # 1280×2400 single page (generated, never hand-edited)
```

## Pick in 10 seconds

| Need | Start with |
|---|---|
| Calm product UI | 01 minimalism · 02 swiss-design · 06 japandi · 168 game-puzzle-light |
| Maximum character | 13 neo-brutalism · 17 maximalism · 166 game-arcade-cabinet · 235 variable-weight |
| Trust / finance / ops | 172 incident-response · 173 finops-cost · 176 slo-budget · 181 regulatory-report |
| Retail / commerce | 182 grocery-delivery · 184 luxury-atelier · 187 wine-cellar · 189 electronics-spec |
| Games | 152 game-hud · 155 game-sci-fi-cockpit · 159 game-card-tcg · 165 game-sim-builder |
| Culture / editorial | 192 museum-exhibition · 194 film-festival · 232 condensed-news · 236 justified-book |
| Materials / craft | 222 terrazzo-stone · 223 linocut-print · 227 cast-concrete · 230 raw-steel |
| Future / research | 242 agent-console · 245 climate-model · 248 quantum-dashboard · 250 neural-canvas |

Full list with one-line identities: [`docs/catalog.md`](docs/catalog.md).

## Family bands (31)

| Band | Range | Band | Range |
|---|---|---|---|
| Sade | 1–7 | Endüstriyel | 56–65 |
| Yüzey | 8–12 | Kültürel & Bölgesel | 66–75 |
| Cesur | 13–18 | Doğa & Organik | 76–85 |
| Retro | 19–27 | Yayın & Tipografi | 86–95 |
| Sanatsal | 28–34 | Hareket & Optik | 96–105 |
| Geometrik | 35–36 | Etkileşim | 106–115 |
| Tipografik | 37 | Oyuncu | 116–125 |
| Organik | 38 | Materyal & Lüks | 126–135 |
| Yeni Dalga | 39–40 | Deneysel & Gelecek | 136–145 |
| Zamansız | 41–44 | Sahne & Prestij | 146–151 |
| Teknik | 45 | **Oyun & Etkileşim** | **152–171** |
| Veri & Gösterge | 46–55 | **Operasyon & Veri** | **172–181** |
| **Ticaret & Vitrin** | **182–191** | **Kültür & Yayın** | **192–201** |
| **Sağlık & Bilim** | **202–211** | **Öğrenme & Oyunlaştırma** | **212–221** |
| **Materyal & Zanaat** | **222–231** | **Tipografi Denemeleri** | **232–241** |
| **Gelecek & Spekülatif** | **242–251** | | |

Bold bands are the v6 additions (100 styles). Bands are defined once in `kit/families.json`;
`apply-fragments`, `build-gallery`, `report` and `build-catalog-doc` all read that file.

## How to use it

1. Open `kit/gallery.html` (works over `file://`; use a server for URL state/search tests).
2. Find a style, copy its `data-style` slug.
3. In your project: `<html data-style="game-hud">` + copy `kit/tokens.css` (or `kit/dist/tokens.all.css`).
4. Build components with the contract variables only: `--bg --bg-2 --surface --surface-2 --ink
   --ink-soft --ink-faint --accent --accent-ink --line --radius --radius-lg --shadow --font-* --space-*`.
5. Verify with `node kit/style-lint.mjs src --style <slug>` (no color/font/radius literals).

## Composition axis (schema v6)

Each `tokens.json` carries `layout: { hero, nav, density }` picked from `kit/render/layouts.json`
(8 heroes × 5 navs × 3 densities). `assign-layouts.mjs` scores slug + family + tags deterministically,
so adding a style never requires hand-picking a layout.

Gates: `check-layout.mjs` (no fingerprint above 25%, every archetype used, ≥3 distinct
`hero|nav` per family band) and `check-composition.mjs` (DOM isolation of neighbouring styles).

## Variable contract

20 variables, identical names in every style — a component never changes when the style does:

| Group | Variables |
|---|---|
| Surface | `--bg` `--bg-2` `--surface` `--surface-2` |
| Text | `--ink` `--ink-soft` `--ink-faint` |
| Accent | `--accent` `--accent-ink` |
| Line / shape | `--line` `--radius` `--radius-lg` |
| Depth | `--shadow` `--shadow-hard` |
| Type | `--font-display` `--font-body` `--font-mono` `--tracking` |
| Texture | `--blur` `--grain` |
| Spacing | `--space-1…8` (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64) |

Three copies must stay in parity (`check-schema.mjs`): `tokens.json` ⇄ `token-block.css` ⇄ `kit/tokens.css`.

## Verification (gates)

```bash
bash kit/gates.sh        # 31 steps: parity → catalog → assignments → measurement → exports → site → visual signature
```

Fast subsets:

```bash
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check     # source parity
node kit/check-contrast.mjs --strict-soft                            # WCAG + APCA
node kit/build-gallery.mjs --check && node kit/build-catalog-doc.mjs --check
node kit/render/render-shots.mjs --sample 8 --measure                 # layout overflow / clipped blocks
node kit/render/phash.mjs --check                                    # perceptual signature of 251 PNGs
```

"Done" means `bash kit/gates.sh` ends with `kapılar: temiz`. Commit hook runs the same gate
(`.git/hooks/pre-commit`); the full run can exceed a 120 s tool timeout, so run it separately.

## Token export

```bash
node kit/export-tokens.mjs            # kit/dist/*.css · figma.variables.json · index.json
node kit/export-tokens.mjs --check    # gate: are dist files current?
```

| File | Use |
|---|---|
| `kit/dist/tokens.all.css` | all 251 `[data-style]` blocks + `:root` fallback |
| `kit/dist/tailwind.theme.css` | `@theme` per style (Tailwind v4) |
| `kit/dist/figma.variables.json` | Figma variable collections (colour / radius / spacing / type) |
| `kit/dist/index.json`, `index.slim.json` | machine-readable catalog (slim = agent-friendly) |
| `kit/dist/report.md`, `composition.md` | measured catalog report |

## Auditing applied code (style-lint)

```bash
node kit/style-lint.mjs src --style terminal-ui            # errors + warnings
node kit/style-lint.mjs src --style terminal-ui --strict   # warnings fail too
node kit/style-lint.mjs --list-rules
```

Rules: `color-literal`, `font-literal`, `radius-literal`, `dart-color-literal`, `dart-font-literal`,
`dart-radius-literal`, `ink-faint-text`, `root-style-missing`. Generated files
(`tokens.css`, `tokens.all.css`, `tailwind.theme.css`, `node_modules`, `dist`, `.dart_tool`) are skipped.

## Adding a new style (v6: one command)

```bash
# 1) write a SPEC (see kit/specs/*.json) — palette, fonts, radius, signature, must/mustNot, refs, brief
# 2) generate everything:
node kit/add-style.mjs kit/specs/my-batch.json
```

The command validates the SPEC (contrast, fonts, neighbours, band), writes five sources, runs
`apply-fragments`, layout/imagery/content assignment, renders the page, syncs doc tables, and
refreshes gallery, index, exports, reports and the visual baseline. Flags:
`--dry` (validate only), `--check` (drift), `--no-render`, `--styles a,b`.

New family band: add a contiguous range to `kit/families.json`, add a template to
`kit/specs/bands.json`, then generate. `apply-fragments` fails on gaps/overlaps.

## For agents

1. Read `AGENTS.md` (binding), then `kit/dist/index.slim.json` for candidates.
2. `node kit/pick.mjs --intent "..." --limit 3` scores styles for an intent.
3. `kit/mcp-server.mjs` exposes `pick`, `style`, `tokens`, `shots`, `render`, `brief` over stdio MCP.
4. `node kit/brief.mjs --intent "..." --style <slug>` prints a copy-paste brief.

## Known limits

- Headless rendering uses SwiftShader: the screenshots do not measure GPU performance.
- `file://` blocks `history.replaceState`, so gallery URL-state tests need a server.
- Screens are a fixed 1280×2400 canvas — no responsive/mobile frames in v6.
- `optimize-shots.mjs` changes bytes, not pixels; `phash --check` guards the signature after re-encoding.
- Font coverage: 29 Google Fonts families are vendored; styles pick from that list only.

## License

Code and tokens: MIT (see `LICENSE`). Vendored fonts: OFL (`kit/fonts/LICENSES.md`).
Photography: Unsplash License (`kit/images/LICENSES.md`).
