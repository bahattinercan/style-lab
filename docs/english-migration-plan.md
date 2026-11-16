# Full English Migration Plan

## Objective

Make all human-readable project content in this repository English, including repository guidance, documentation, style descriptions, sample content, gallery and live-preview copy, and the content rendered from those sources. Preserve the catalog's meaning, visual identity, data contracts, and generated-file workflow.

This plan is a scope and execution proposal. No migration work is included in this document.

## Current state and migration principle

The repository contains both hand-maintained sources and generated outputs. Turkish content appears in source prose and data (including style SPECs, style source files, content packs, and gallery/demo copy), while some documentation is already English. Several generators read Turkish source values and emit generated Markdown, HTML, JSON, or CSS. Translating generated files alone would create drift and the next build would restore the source language.

Translation must therefore proceed from authoritative sources outward. Generated files are refreshed with their owning scripts; they are never translated by hand. A Turkish-looking slug, identifier, schema key, URL, proper name, font name, or quoted external label is not prose and must remain unchanged unless it is explicitly a user-facing label.

## Scope

### In scope

1. Repository instructions and entry-point documentation: `AGENTS.md`, `README.md`, `README.tr.md`, `TESTING.md`, `playbook.md`, and other maintained Markdown at the repository root.
2. Maintained documentation and project skills: `docs/*.md`, `skills/**/*.md`, `refs/design-resources/*.md`, templates, and other tracked human-written Markdown. Generated `docs/catalog.md` is updated only by its generator.
3. Style content sources for all catalog entries: authoritative SPEC prose in `kit/specs/*.json`, source descriptions under `styles/*/` (including `style.md`, keywords, token descriptions, and scene-fragment text where present), and any additional source-of-truth fields used to produce gallery briefs and metadata.
4. Shared sample content and taxonomy labels: `kit/content/*.json`, `kit/industries.json`, `kit/families.json`, shared band/spec data, demo fixtures, and corresponding user-visible labels in `kit/` source files.
5. User-facing interface and generated-site copy: gallery, live preview, viewer, landing/catalog templates and scripts, demo pages, accessible names, tooltips, placeholders, empty states, and browser-visible validation/error messages.
6. Human-readable source comments and generated reports when they are intended for repository users. Keep machine-readable interfaces and stable identifiers unchanged.
7. Any generator logic needed to emit English output from English source values, including canonical metadata headings/field labels and locale-sensitive copy.

### Out of scope

- Translating third-party content, external websites, URLs, font family names, trademarks, product names, or proper names.
- Renaming slugs, directories, files, schema keys, IDs, enum values, CSS variables/classes, CLI flags, environment variables, URL parameters, or exported token names. Such changes are API/data migrations and are not required for English prose.
- Editing screenshots, raster artwork, font binaries, or other binary assets. If an image contains baked-in Turkish text, record it as a separate asset follow-up rather than silently regenerating visual content during this text migration.
- Rewriting design concepts, changing style definitions, changing layouts/palettes, or otherwise altering visual intent beyond text-fit adjustments that are required to prevent clipping.
- Translating generated outputs by hand or changing generation architecture unnecessarily.

## Translation and compatibility rules

- Use clear, idiomatic English consistently in UI, documentation, and design briefs.
- Preserve meaning, level of specificity, examples, measurements, and constraints. Do not summarize long source passages as a shortcut.
- Keep machine-facing property names, IDs, paths, and references byte-for-byte stable unless a user-visible value is explicitly separated from them.
- Keep JSON structure, array ordering, CSS declarations, and layout signatures stable. Modify prose values only, except for narrowly scoped generator/template adjustments required to localize presentation labels.
- Preserve source-to-generated parity: translations belong in the source of truth and generated artifacts must match a fresh build.
- Treat `README.tr.md` as English content after migration; retain the filename for repository-path compatibility and add a short note that the legacy filename contains the English edition. Update README language links so they do not advertise Turkish as an available edition.
- Replace Turkish instructions in `AGENTS.md` with English while preserving every operational rule, command, and constraint.
- Do not translate the text inside external references or alter citations; translate only project-authored labels and descriptions around them.

## Work phases

### Phase 1 — Inventory and source mapping

- Enumerate tracked text files and locate Turkish human-readable text, including content without Turkish diacritics.
- For each generated artifact containing Turkish, trace its generator and identify the authoritative source fields.
- Build a source-to-output map covering style SPECs, style source folders, gallery metadata, content packs, documentation, demos, and site generation.
- Record deliberate exceptions such as proper names, IDs, and third-party labels so they are not reported as untranslated prose.

**Exit condition:** every Turkish text occurrence is either mapped to an editable source or documented as an explicit exception; all generated files with Turkish are mapped to a regeneration command.

### Phase 2 — Core guidance and documentation

- Translate repository instructions, README variants, testing instructions, playbook, maintained docs, skills, design-resource documentation, and templates.
- Update README language/navigation references and examples to reflect an English-only repository.
- Keep generated catalog/report documents for the later regeneration phase.

**Exit condition:** maintained documentation reads naturally in English and commands/paths remain valid.

### Phase 3 — Catalog and design-content sources

- Translate the prose in all authoritative style SPECs and any band/family source templates.
- Translate source style descriptions, keywords/tags, token commentary, scene/sample content, and user-facing metadata that does not flow from a SPEC.
- Translate shared sector/industry labels and content packs without changing their IDs or filenames.
- Translate demo and fixture copy that is presented to users; keep machine-oriented fixture values intact where tests depend on them.
- Update any generator field-to-label mapping needed to render English headings and metadata consistently.

**Exit condition:** each catalog entry's source prose, tags, metadata, and representative content is English, with stable identifiers and schema parity.

### Phase 4 — Application and site interface

- Translate shared gallery and live-preview templates, browser-visible strings, accessibility labels, tooltips, controls, demo content, and messages in maintained source files.
- Review all routes and generated pages for mixed-language strings and text overflow introduced by translation.
- Keep gallery filtering/search semantics and URL behavior unchanged.

**Exit condition:** all user-visible pages and interactions use English and retain their existing behavior and visual hierarchy.

### Phase 5 — Regenerate derived artifacts

- Run the repository's documented source-application and build scripts in dependency order, refreshing generated gallery data, catalog pages, exports, and site artifacts as applicable.
- Regenerate screenshots/thumbnails only if translated visible copy is rendered into the style screenshots and the existing screenshot workflow requires it. If screenshots change, update dependent derivatives and visual signatures using the documented commands.
- Never hand-edit generated files; inspect the resulting diff for unintended churn.

**Exit condition:** generated outputs are reproducible from translated sources, generated-file checks report no drift, and unrelated assets/data are unchanged.

### Phase 6 — Language audit and verification

- Run a repository-wide scan over tracked text sources and generated text outputs for Turkish-specific characters and a curated list of frequent Turkish words/phrases. Review matches manually to distinguish prose from proper names, identifiers, and third-party text.
- Inspect representative style pages from early, middle, late, and newly added catalog ranges, plus gallery, live preview, landing page, docs, and demos.
- Run the full repository gate: `bash kit/gates.sh`. Show the actual command output. If it fails, fix the cause and rerun the same command; do not report success from partial checks.
- Run relevant generator `--check` commands and the site's smoke check as part of the gate or separately if needed.
- Review `git diff --check`, generated-file drift, and the final changed-file list.

**Exit condition:** no unintentional Turkish project-authored prose remains, all required gates pass with visible output, and generated outputs are in sync.

## Acceptance criteria

1. Project-authored human-readable prose in tracked text files is English, including user-facing UI and generated content.
2. Any remaining non-English strings are explicitly attributable to proper names, third-party source material, machine identifiers, or documented exceptions.
3. All style records retain their existing slugs, schema shape, relationships, and design meaning.
4. Generated artifacts match the translated sources and the repository's checks report no drift.
5. The full `bash kit/gates.sh` command completes cleanly; its actual output is available for review.
6. The diff contains no unintended rendering, layout, palette, asset, or formatting changes.

## Risks and controls

| Risk | Control |
|---|---|
| Translating generated files directly causes drift | Translate authoritative sources, then run their generators. |
| Search misses Turkish without diacritics | Combine character scans with word/phrase scans, then manually review every match. |
| Translating IDs breaks references or URLs | Maintain a protected identifier list and compare IDs before/after. |
| Longer English labels cause clipping | Review rendered pages and make only minimal text-fit adjustments where needed. |
| Batch translations lose design nuance | Preserve constraints and examples; audit representative entries in every source batch. |
| Build output causes a large unrelated diff | Run generators in the documented order and inspect changed paths before accepting output. |
| Existing repository instructions conflict or contain stale counts | Preserve applicable rules, verify dynamic counts through project gates, and do not invent measurements. |

## Rollback

Keep the migration in reviewable phases and inspect each phase's diff before moving on. If a phase introduces schema, reference, rendering, or generated-output regressions, revert only that phase's changes, correct the source mapping or translation, regenerate affected outputs, and rerun the failing command. Do not use a broad reset that could discard pre-existing user changes.

## Proposed file groups

The exact file list will be finalized during Phase 1 from the tracked-file inventory. Expected groups include:

- Guidance/docs: `AGENTS.md`, `README.md`, `README.tr.md`, `TESTING.md`, `playbook.md`, `docs/*.md`, `skills/**/*.md`, `refs/design-resources/*.md`, `_templates/*.md`.
- Catalog sources: `kit/specs/*.json`, `styles/*/{style.md,tokens.json,token-block.css,shots.config.fragment.mjs,keywords.json}`, family and industry data.
- Product copy: `kit/content/*.json`, gallery/live/site/demo source templates and scripts, fixtures, and maintained UI strings in HTML/CSS/JS/MJS.
- Derived outputs: only those explicitly generated by the source files above, refreshed with the owning build scripts.


## Migration status (2026-11-16)

Phases 1–5 are done for every hand-maintained source outside the legacy catalog prose. The regenerated
outputs match their sources and every gate except the single-page fit measurement is green.

### Done

- Hand-maintained prose: `AGENTS.md`, `README.md`, `TESTING.md`, `playbook.md`, `docs/**`, `skills/**`,
  `refs/design-resources/**` (catalog review, link reports, helper scripts), `_templates/**`, `demo/**`,
  `.gitignore`, `.github/workflows/**`.
- Catalog sources: `kit/specs/*.json` (band and style SPECs including `legacy-01-151.json` meta fields),
  `kit/families.json` (31 English family names, band identifiers unchanged), `kit/content/*.json`
  (8 industry packs), `kit/industries.json`.
- Generators and gates: all `kit/**` sources — comments, CLI output, `style.md` template (English headings
  and meta labels), error messages, `kit/content` copy, gallery/live/viewer interface strings.
- Regeneration: 251 `style.md` files, `kit/tokens.css`, `gallery.html`, `styles.index.json`,
  `live/`, `dist/**`, `docs/catalog.md`, `kit/site/thumbs/**`, `_site/`, `kit/render/visual-baseline.json`.

### New verification

- `kit/check-language.mjs` — English-only regression gate: Turkish-specific letters plus a curated
  Turkish word list with inflections. Wired into `kit/gates.sh` as the `language check` step.
- `kit/extract-spec.mjs` — now reads the English `style.md` template (sections, meta labels, fenced
  brief) and subtracts the template's own boilerplate, so extraction stays idempotent.

### Documented exceptions (deliberately not translated)

- `README.tr.md` — the Turkish half of the bilingual README pair (AGENTS.md rule 14).
- Band ids (`kit/specs/bands.json` keys, `spec.band`) and industry ids (`kit/content/*`, `industries[]`)
  are data keys, not prose; renaming them is a schema migration.
- Diacritic normalisation tables in `kit/pick.mjs`, `kit/assign-layouts.mjs`, `kit/gallery.js`.
- `kit/migrations/v6-*.mjs` — historical migrations that match pre-v6 Turkish headings.
- Legacy style prose: `legacy-01-151.json` keeps its Turkish body text for the 151 oldest styles;
  `style.md` for those styles is generated from it with English headings, so the catalog reads mixed
  until the legacy SPEC prose is translated.

### Open work

1. **Legacy prose** — translate `kit/specs/legacy-01-151.json` (151 styles, 12 762 Turkish strings,
   ≈1.61 M characters), then regenerate `style.md` and rerun the pipeline.
2. **Single-page fit** — English copy is longer than the Turkish it replaced, so 51 of 251 pages exceed
   the 2400px contract by 16–173px after the fit tiers (`kit/render/render-shots.mjs --measure`).
   `--fit` refuses to persist a level while blocks are clipped, so the fix is per-style copy or spacing
   tuning, not a global switch.
