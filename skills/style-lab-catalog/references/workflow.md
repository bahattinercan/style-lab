# Adding a new style (v6 · one command)

The order to follow when adding a **new** style to the catalog. Do not enter this flow to apply an existing style
(`SKILL.md → Procedure`). Duration: writing the SPEC ≈ 15–25 min + generation (the command) ≈ 1 min + gates.

Source: `kit/specs/*.json` (SPEC). Generated: the five files under `styles/<nn>-<slug>/` + PNG +
gallery/index/report. Do not edit the generated files by hand; run the gates before committing.

---

## 1 · Band and number

- Turn the intent into 2–3 measurable criteria ("game HUD + dark + tabular numerals").
- Choose the band: `kit/families.json` (single source, **31 bands, 1–251 contiguous**) + `references/families.md`.
- If you open a new band, keep the range contiguous, add it to `kit/families.json`, write a template into
  `kit/specs/bands.json` **and** add the band to `kit/assign-content.mjs → BY_FAMILY` (only the existing 8 industry
  packages: saas, emlak, danismanlik, egitim, eticaret, dergi, ajans, saglik).
- Number + slug: the folder name is `<nn>-<slug>`, the slug is English kebab-case and unique.

```bash
ls styles | grep -E "^<nn>-|<slug>$" || echo "temiz"
```

## 2 · Write the SPEC (`kit/specs/<batch>.json`)

Copy the nearest existing SPEC and fill in the fields:

| Field | Rule |
|---|---|
| `num`, `slug`, `name`, `band` | band is a `kit/specs/bands.json` key |
| `tagline` | ≤ 170 characters, one sentence |
| `feeling`, `best`, `avoid` | plain string (an array is rejected by validation) |
| `palette` | 10 colors: bg, bg2, surface, surface2, ink, inkSoft, inkFaint, accent, accentInk, line |
| `fonts` | `[display, body, mono]` from the 29 families in `kit/fonts/fonts.css` |
| `radius` | `[radius, radiusLg]` |
| `signature` | ≥3 items; written into the `## Visual signature` section |
| `must` / `mustNot` | ≥3 items |
| `refs` | ≥3 `{label, url (https), use}` |
| `keywords` | 3 tags (gallery search) |
| `brief` | AI brief body (embedded into a code block) |
| `neighbors` | `compatible` / `forbidden`; the slugs must exist in the catalog or in the same batch |
| optional | `upper`, `tracking`, `scale`, `motif`, `shadow`, `grain`, `essence`, `origin`, `recognition`, `notThis`, `screens`, `traps`, `extraCss`, `industries`, `layout` |

**Contrast thresholds are measured during the build** (nothing is guessed): `ink/bg ≥ 4.5`,
`ink-soft/bg ≥ 4.5`, `accent-ink/accent ≥ 4.5`, focus ring `≥ 3`. Also, APCA Lc < 60 produces a warning.
Do not write dark mode or the `motion` field — schema v6 forbids them.

## 3 · Generate (one command)

```bash
node kit/add-style.mjs kit/specs/<batch>.json            # generate + render + index
node kit/add-style.mjs kit/specs/<batch>.json --dry      # validate only (writes no files)
node kit/add-style.mjs kit/specs/<batch>.json --check    # are the sources identical to the SPEC (drift)
node kit/add-style.mjs kit/specs/<batch>.json --no-render # sources + index, no PNG
```

Command order: validate → 5 sources (`tokens.json`, `token-block.css`, `style.md`,
`shots.config.fragment.mjs`, `keywords.json`) → `apply-fragments` → `assign-layouts` →
`assign-imagery` → `assign-content` → `render-shots` (single page) → `optimize-shots` →
`sync-shot-tables` → `build-gallery` → `export-tokens` → `build-slim-index` → `report` →
`composition-report` → `phash --write`.

## 4 · Verify

```bash
bash kit/gates.sh                                  # 27 steps, last line "kapılar: temiz"
node kit/check-schema.mjs                          # 0 errors
node kit/check-contrast.mjs --strict-soft          # 0 errors
node kit/check-layout.mjs                          # composition (25% fingerprint ceiling)
node kit/render/render-shots.mjs --styles <slug> --measure   # 0 issues
node kit/render/phash.mjs --check                  # 0 differences / 0 missing / 0 new
```

Visual QA: open `styles/<nn>-<slug>/shots/01-page.png`; if at least 2 of the `## Visual signature` items are not
visible, the `extraCss`/`motif` in the SPEC is weak — strengthen it and regenerate.

## 5 · Numbers and docs

- `docs/katalog.md` is generated: `node kit/build-catalog-doc.mjs` (gate: `--check`).
- Do not write number claims into the README/AGENTS; take the measurement from `kit/dist/report.md` and `docs/katalog.md`.
- Commit message: `feat(specs): <band> — N stil` or `feat(specs): <slug> stili`.

---

## Pitfalls (v6)

| Pitfall | Why | Fix |
|---|---|---|
| `avoid`/`best` written as an array | the SPEC schema expects a plain string | `"avoid": "dense tables, fast operation panels"` |
| A `neighbors` slug missing from the catalog | order/batch confusion | generate it in the same batch or pick an existing slug |
| A new band not added to `BY_FAMILY` | `assign-content` produces `undefined` | add the band to `kit/assign-content.mjs` |
| Trying to override the band CSS with `extraCss` | the band CSS is always injected first | write the style CSS on top of the band and raise specificity |
| Blank/single-column PNG | CDP viewport race (an old bug) | `render-shots` now verifies + re-captures; confirm with `--measure` |
| A `phash --write` warning | the baseline exists | write with `--force` (the command does this itself) |
