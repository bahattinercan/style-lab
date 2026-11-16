---
name: tasarim-kaynak-katalogu
description: >-
  Searches the frozen design resource catalog (refs/design-resources, 1249 records, 33 sections):
  finds free illustrations, mockups, stock photos, icon sets, fonts, color/accessibility tools and
  image compression services; filters by link health (dead links) and refreshes the catalog. Triggers:
  "find a mockup", "free illustration", "where do I get icons", "need stock photos", "color tool",
  "contrast checker tool", "where to get fonts", "image compression", "resource catalog", "dead link",
  "link health", "design resources", "search the catalog", "where do I find assets"; Turkish:
  "mockup bul", "ucretsiz illustrasyon", "nereden ikon", "stock fotograf lazim", "renk araci",
  "kontrast kontrolu araci", "font nereden", "gorsel sikistirma", "kaynak katalogu", "olu link",
  "link sagligi", "katalogda ara", "asset nerede bulurum".
---

# Design Resource Catalog

A **frozen** link index lives under `refs/design-resources/`: 1249 records · 33 sections ·
1063 unique domains (bradtraversy/design-resources-for-developers, 2026-10-18 snapshot).

This skill **finds assets and tools**. It does not choose styles, produce tokens or write code — that is
`style-lab-catalog`'s job. The visual language decision and asset procurement are separate questions; do not mix them.

## When to Use

- An **asset** is needed for a surface: illustration, mockup, stock photo, pattern/texture, icon, font.
- A **color/accessibility tool** is being looked for (contrast checker, palette generator, tone scale).
- An **image compression** or conversion service is needed (when a poster/deck output gets too large).
- The question is "is this link dead?" / "are the catalog records healthy?" (`--alive`, `linkcheck.mjs`).
- The user names a specific resource and asks where it is.

**Do not use for:** style/theme selection · setting up a design system · token generation · reading resource *code*
(there is no code in this catalog) · license legal advice (the user verifies the license).

## Decide in 30 seconds

| Need | Section |
|---|---|
| Free illustration, pattern, avatar | `UI Graphics` (47) |
| Device/product mockup, screenshot presentation | `Product & Image Mockups` (24) + `UI Graphics` |
| Stock photo / video / music | `Stock Photos` (40) · `Stock Videos` (10) |
| Icon set, icon font, logo, favicon | `Icons` (69) · `Icon Fonts` (22) · `Logos` (13) · `Favicons` (11) |
| Font pairing, typography scale | `Fonts` (47) |
| Contrast/palette tool | `Colors` (88) |
| Animation library (CSS/JS) | `CSS Animations` (28) · `Javascript Animation Libraries` (36) |
| Image compression | `Image Compression` (51) |
| Template, ready page skeleton | `HTML & CSS Templates` (31) |
| Gallery/inspiration | `Design Inspiration` (48) |

Section names are **English** and **framework-oriented** (React/Vue/Angular/Svelte are separate). Searching with
Search in English: the records use `color`, `font`, `icon`; translated keywords miss most entries.

## Procedure

### 1 · Search (the most common path)

```bash
# Run from the repository root.
node refs/design-resources/query.mjs --q mockup --alive                 # dead links filtered out
node refs/design-resources/query.mjs --section "Stock Photos" --alive --limit 10
node refs/design-resources/query.mjs --q "gradient" --json              # machine-readable
node refs/design-resources/query.mjs --sections                         # sections + record counts
```

The status column in the output: `ok` reachable · `bot` 403/429 (bot protection, **mostly alive**) ·
`OLU` definitely dead · `hata` 5xx/timeout · `?` never attempted.

### 2 · Bring the result to the user

- Say **what** the resource is in one line (the catalog description) and give the URL.
- If it is marked `bot`, note "the link opens in a browser, the automated check returned 403".
- Let the user choose: 3–5 candidates is enough, do not dump 20 records.

### 3 · When the catalog has nothing

The repo is closed (no new records) and the AI-era records are weak (7 records). If nothing comes up, search the
internet, but do **not add** what you find to the catalog — this snapshot is frozen; if a new resource is needed,
`readme.snapshot.md` is updated (the maintenance step below).

### 4 · Maintenance (on request)

```bash
node refs/design-resources/analyze.mjs      # readme.snapshot.md → rows.json (1249 records, ~0.2 s)
node refs/design-resources/linkcheck.mjs    # rows.json → link-health.json + dead link reports (~2 min)
node refs/design-resources/linkcheck.mjs --limit 100   # quick trial
```

## Pitfalls

- **403 ≠ dead.** Large sites such as Unsplash, Pexels and Pixabay return 403 to automated requests; do not treat the
  `bot` tag as dead and filter it out. The real dead criterion is 404/410/no DNS → `olu-linkler-kesin.md`.
- **The snapshot is CRLF.** If you write your own parser, strip `\r`; otherwise `^## (.+)$` catches no headings at all
  and every record falls into a single section (this happened).
- **Section names do not match.** `--section "Mockups"` will not work, `--section "Product & Image Mockups"` will; if
  unsure, get the list with `--sections`.
- **The `--alive` filter depends on `link-health.json`.** A stale file shows stale results; if suspicious, refresh with
  `linkcheck.mjs --limit 200`.
- **This is not a style resource.** The answer to "how do I do glassmorphism" is not here; go to `style-lab-catalog`
  and `styles/<slug>/style.md`.
- **License:** the catalog says "free" but the license type (CC0/MIT/commercial use) is not recorded. Tell the user this
  for commercial work.
- The dead link count **fluctuates by ±2** between runs; do not judge the catalog as rotten from a single run.

## Verification

```bash
node refs/design-resources/query.mjs --q mockup --alive --limit 3   # should return 3 results with a filled status column
node refs/design-resources/analyze.mjs | head -2                    # "kayit: 1249 | bolum: 33 | domain: 1063"
```

- If `analyze.mjs` reports a number other than 1249, `readme.snapshot.md` changed or the CRLF trap was hit.
- If `query.mjs --sections` lists the section names, `rows.json` is sound.
- In `linkcheck.mjs`, a "kesin olu" count in the 40–70 range is normal; if it is 300+, look for a network/proxy problem.
