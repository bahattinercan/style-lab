# Design Styles Library (style-lab) v6

> **Languages:** [English](README.md) · [Turkish](README.tr.md)
> **Repository:** https://github.com/bahattinercan/style-lab
> **Doors:** `bash kit/gates.sh` (31 steps) · **Hooks:** `bash kit/install-hooks.sh`
> **Interactive:** `kit/gallery.html` (search · filter · drawer · comparison) · `kit/live.html?style=<slug>`
> **Publication site:** <https://bahattinercan.github.io/style-lab/>
> **Catalog index:** [`docs/catalog.md`](docs/catalog.md) (251 styles, 31 families) · **Report:** `kit/dist/report.md`

Catalog versus monotonous design: **251 visual styles across 31 family bands**. **one long for each style
page mock-up** (1280×2400: navigation, hero, three sections, widget grid, form + data, CTA, footer),
Includes token set, component recipes, traps and **AI brief**.

**v6 scope (intentional simplification):**

| remaining | Removed |
|---|---|
| Single long page per style (`01-page.png`) | 37 scene templates (dashboard, mobile, real estate, …) |
| Open palette only | Dark mode (`palette.dark`, dark token block, dark scenes) |
| Static design (no animation) | Motion system (`motion.*`, motion lab/export/gates) |
| CSS · Tailwind · Figma export | Flutter/React token generators |

Rationale and measurements: [`docs/v6-simplification-report.md`](docs/v6-simplification-report.md).

## Status

- Produces 251/251 style single sheets; **251 PNG, 172 MB** (`du -ch styles/*/shots/01-page.png`).
- 251/251 style scheme in **v6** (`tokens.json` version 6; no `palette.dark` and `motion`).
- 31 family bands, 1–251 continuous (`kit/families.json`).
- 16 different `hero|nav` fingerprints; the most populated cluster is 36 styles (**14%**), the ceiling is 25%.
- 0 contrast errors (`--strict-soft`), 19 documented soft warnings (decorative `--ink-faint`, low APCA on 3 dark palettes).
- Publication site: <https://bahattinercan.github.io/style-lab/> (GitHub Pages, `_site/` artifact).
- Validation: `bash kit/gates.sh` → last line `gates: clean`.

## Publishing site

<https://bahattinercan.github.io/style-lab/> — Builds `node kit/build-site.mjs`, every push to `main`
`.github/workflows/pages.yml` pushes to GitHub Pages.

| Page | What |
|---|---|
| `/` | landing: numbers from `kit/styles.index.json`, 8 showcase styles, 31 family bands |
| `/kit/gallery.html` | gallery: search, filter, pagination, drawer, lightbox, comparison |
| `/katalog.html` | catalog index (`docs/catalog.md` HTML, one link per style) |
| `/kit/live.html?style=<slug>` | static component page with tokens of selected style |

`_site/` is a build output (does not go into git). Cards install WebP variant
(`thumbs/<slug>@640.webp`, ~35 KB); lightbox opens the `@1280` variant, the original PNG remains available for download.
Derivatives are built with `node kit/build-thumbs.mjs` and kept in the repo — it does not run a CI browser.

```bash
node kit/build-thumbs.mjs        # PNG → WebP (640 / 1280) · --check bayat türevi yakalar
node kit/build-site.mjs          # _site/ derle · --check varlık bütünlüğü
node kit/check-site.mjs          # kapı: derlenen siteyi HTTP üzerinden başsız tarayıcıda ölçer
```

## Folder map

```
style-lab/
├── README.md / README.tr.md      # bu dosya (iki dilli çift)
├── AGENTS.md                     # bu depoda çalışan ajanlar için bağlayıcı kurallar
├── docs/catalog.md               # 251 stilin üretilmiş indeksi (build-catalog-doc.mjs)
├── docs/v6-simplification-report.md  # v6 kararları + ölçümler
├── playbook.md                   # tasarım reçeteleri (tipografi, boşluk, renk, erişilebilirlik)
├── kit/
│   ├── specs/bands.json          # aile bandı şablonları (ortak prose/CSS)
│   ├── specs/*.json              # stil SPEC'leri → kaynaklar (100 v6 stili burada)
│   ├── add-style.mjs             # SPEC → 5 kaynak → atama → render → indeks (tek komut)
│   ├── lib/style-spec.mjs        # üreteç: tokens.json · token-block.css · style.md · fragment · keywords
│   ├── apply-fragments.mjs       # kaynaklar → kit/tokens.css + shots.config.mjs + gallery.data.mjs
│   ├── check-schema.mjs          # şema/parite kapısı
│   ├── check-contrast.mjs        # WCAG + APCA + odak halkası
│   ├── check-layout.mjs          # kompozisyon çeşitliliği kapısı
│   ├── build-gallery.mjs         # gallery.html + styles.index.json
│   ├── build-thumbs.mjs          # PNG → WebP türevleri (kit/site/thumbs, repoda)
│   ├── build-site.mjs            # _site/ derleyicisi: landing, katalog.html, galeri kopyası, varlıklar
│   ├── check-site.mjs            # derlenen sitenin başsız duman testi (HTTP)
│   ├── build-catalog-doc.mjs     # docs/catalog.md
│   ├── export-tokens.mjs         # dist/tokens.all.css · tailwind.theme.css · figma.variables.json
│   ├── render/page.html          # TEK sayfa şablonu
│   ├── render/scene.css          # sayfa iskeleti (.pg-*) + bileşen sınıfları
│   ├── render/partials/          # 8 hero × 5 nav parçası
│   ├── render/render-shots.mjs   # sayfa üreteci (CDP, taşma ölçümü, boş kare tekrarı)
│   ├── migrations/v6-*.mjs       # tek seferlik kaynak göçleri (v5 → v6)
│   └── gates.sh                  # 31 adımlı doğrulama kapısı
└── styles/<nn-slug>/
    ├── style.md                  # doküman (≥18 bölüm + AI brief)
    ├── tokens.json               # makine kaynağı (palet, tipografi, şekil, boşluk, bileşen, refs)
    ├── token-block.css           # CSS değişken bloğu (apply-fragments kaynağı)
    ├── shots.config.fragment.mjs # sahne imzası (motif + imza CSS)
    ├── keywords.json             # 3 galeri etiketi
    └── shots/01-page.png         # 1280×2400 tek sayfa (üretilir, elle düzenlenmez)
```

## Selection in 10 seconds

| Need | Start |
|---|---|
| Calm product interface | 01 minimalism · 02 swiss-design · 06 japandi · 168 game-puzzle-light |
| Maximum characters | 13 neo-brutalism · 17 maximalism · 166 game-arcade-cabinet · 235 variable-weight |
| Trust / finance / operations | 172 incident-response · 173 finops-cost · 176 slo-budget · 181 regulatory-report |
| Trade | 182 grocery-delivery · 184 luxury-atelier · 187 wine-cellar · 189 electronics-spec |
| Game | 152 game-hud · 155 game-sci-fi-cockpit · 159 game-card-tcg · 165 game-sim-builder |
| Culture / publishing | 192 museum-exhibition · 194 film-festival · 232 condensed-news · 236 justified-book |
| Material / craft | 222 terrazzo-stone · 223 linocut-print · 227 cast-concrete · 230 raw-steel |
| Future / research | 242 agent-console · 245 climate-model · 248 quantum-dashboard · 250 neural-canvas |

Full list, with one-sentence IDs: [`docs/catalog.md`](docs/catalog.md).

## Family tapes (31)

Bands are defined in a single source (`kit/families.json`); `apply-fragments`, `build-gallery`, `report`
and `build-catalog-doc` reads the same file. 1–151 v5 catalog (22 bands), **152–251 v6 additional bands** (9 bands,
100 styles): Game & Interaction (152–171, 20 styles) · Operations & Data (172–181) · Commerce & Storefront (182–191) ·
Culture & Broadcasting (192–201) · Health & Science (202–211) · Learning & Gamification (212–221) ·
Material & Craft (222–231) · Typography Essays (232–241) · Future & Speculative (242–251).

## How to use

1. Open `kit/gallery.html` (`file://` works; server required for URL status/search testing).
2. Find the style, copy the `data-style` slug.
3. In the project: copy `<html data-style="game-hud">` + `kit/tokens.css` (or `kit/dist/tokens.all.css`).
4. Install components with contract variables only: `--bg --bg-2 --surface --surface-2 --ink
   --ink-soft --ink-faint --accent --accent-ink --line --radius --radius-lg --shadow --font-* --space-*`.
5. Verify with `node kit/style-lint.mjs src --style <slug>` (no color/font/radius literal).

## Composition axis (scheme v6)

In each `tokens.json` field `layout: { hero, nav, density }` is selected from `kit/render/layouts.json`
(8 heroes × 5 nav × 3 density). `assign-layouts.mjs` slug + family + tags deterministic points;
When adding a new style, the layout is not selected manually.

Doors: `check-layout.mjs` (no fingerprint exceeds 25%, each archetype used, per family
at least 3 different `hero|nav`) and `check-composition.mjs` (DOM isolation of neighboring styles).

## Variable contract

20 variables, same names in each style — component code does not change when style changes:

| Group | Variables |
|---|---|
| Surface | `--bg` `--bg-2` `--surface` `--surface-2` |
| Text | `--ink` `--ink-soft` `--ink-faint` |
| Emphasis | `--accent` `--accent-ink` |
| Line / shape | `--line` `--radius` `--radius-lg` |
| Depth | `--shadow` `--shadow-hard` |
| Typography | `--font-display` `--font-body` `--font-mono` `--tracking` |
| Texture | `--blur` `--grain` |
| Space | `--space-1…8` (4 · 8 · 12 · 16 · 24 · 32 · 48 · 64) |

Three copies remain at par (`check-schema.mjs`): `tokens.json` ⇄ `token-block.css` ⇄ `kit/tokens.css`.

## Authentication (gates)

```bash
bash kit/gates.sh        # 31 adım: parite → katalog → atamalar → ölçüm → export → site → görsel imza
```

Quick subsets:

```bash
node kit/check-schema.mjs && node kit/apply-fragments.mjs --check     # kaynak paritesi
node kit/check-contrast.mjs --strict-soft                            # WCAG + APCA
node kit/build-gallery.mjs --check && node kit/build-catalog-doc.mjs --check
node kit/render/render-shots.mjs --sample 8 --measure                 # taşma / kırpılan blok
node kit/render/phash.mjs --check                                    # 251 PNG'nin görsel imzası
```

"Done" definition: `bash kit/gates.sh` last line `gates: clean`. Commit hook runs the same door
(`.git/hooks/pre-commit`); full run may exceed 120s tool timeout, run in separate long command.

## Token export

```bash
node kit/export-tokens.mjs            # kit/dist/*.css · figma.variables.json · index.json
node kit/export-tokens.mjs --check    # kapı: dist güncel mi?
```

| File | Usage |
|---|---|
| `kit/dist/tokens.all.css` | 251 `[data-style]` block + `:root` fallback |
| `kit/dist/tailwind.theme.css` | per style `@theme` (Tailwind v4) |
| `kit/dist/figma.variables.json` | Figma variable collections (color/radius/spacing/typography) |
| `kit/dist/index.json`, `index.slim.json` | machine-readable catalog (slim = agent friendly) |
| `kit/dist/report.md`, `composition.md` | measured catalog report |

## Checking implemented code (style-lint)

```bash
node kit/style-lint.mjs src --style terminal-ui            # hata + uyarı
node kit/style-lint.mjs src --style terminal-ui --strict   # uyarılar da hata
node kit/style-lint.mjs --list-rules
```

Rules: `color-literal`, `font-literal`, `radius-literal`, `dart-color-literal`, `dart-font-literal`,
`dart-radius-literal`, `ink-faint-text`, `root-style-missing`. Generated files
(`tokens.css`, `tokens.all.css`, `tailwind.theme.css`, `node_modules`, `dist`, `.dart_tool`) are skipped.

## Add new style (v6: single command)

```bash
# 1) SPEC yaz (bkz. kit/specs/*.json) — palet, fontlar, radius, imza, must/mustNot, refs, brief
# 2) her şeyi üret:
node kit/add-style.mjs kit/specs/my-batch.json
```

Command validates SPEC (contrast, font, adjacent, band), writes five resources, runs `apply-fragments`,
Makes layout/image/content assignments, renders the page, synchronizes document tables; gallery,
Refreshes index, exports, reports and visual baseline. Flags: `--dry` (validate only),
`--check` (drift), `--no-render`, `--styles a,b`.

New family band: seamless range to `kit/families.json`, template to `kit/specs/bands.json`, then generate.
`apply-fragments` returns red if it sees a gap/overlap.

## For agents

1. `AGENTS.md` (linker) → `kit/dist/index.slim.json` (candidates).
2. `node kit/pick.mjs --intent "..." --limit 3` points by intent.
3. `kit/mcp-server.mjs` provides `pick`, `style`, `tokens`, `shots`, `render`, `brief` via stdio MCP.
4. `node kit/brief.mjs --intent "..." --style <slug>` writes copyable brief.

## Known limits

- Headless rendering uses SwiftShader: screenshots do not measure GPU performance.
- `history.replaceState` is blocked under `file://`; gallery URL health test requests server.
- Screens are fixed 1280×2400 canvas — no responsive/mobile frames in v6.
- `optimize-shots.mjs` changes the byte, not the pixel; `phash --check` preserves the signature.
- Font coverage: 29 Google Fonts families localized; styles select from this list alone.

## Lisans

Code and tokens: MIT (`LICENSE`). Localized fonts: OFL (`kit/fonts/LICENSES.md`).
Photos: Unsplash License (`kit/images/LICENSES.md`).
