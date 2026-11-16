# refs/design-resources — frozen design resource catalog

Source: [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)
Source licence: [MIT — Copyright (c) 2020 Brad Traversy](LICENSE-upstream.txt).
Snapshot: **2026-10-18** (the upstream repo closed to new submissions on that date, so the frozen copy
does not go stale — only its links die).

**1249 records · 33 sections · 1063 unique domains.** There is **no** code, token or style documentation here — this is a link
directory. For styles and tokens use `styles/` and `playbook.md`; the value here is discovering **assets
(images/fonts/icons) and tools**.

## Usage

```bash
node refs/design-resources/query.mjs --q mockup --alive          # search + dead-link filter
node refs/design-resources/query.mjs --section "Stock Photos" --alive --limit 10
node refs/design-resources/query.mjs --sections                  # section list + record counts
node refs/design-resources/query.mjs --q illustration --json     # machine-readable
```

`--alive` reads link status from `link-health.json`; `ok` / `bot` (403 — bot protection, mostly healthy) pass,
`DEAD` / `error` are dropped.

## Maintenance

```bash
node refs/design-resources/analyze.mjs      # readme.snapshot.md → rows.json (1249 records, ~0.2 s)
node refs/design-resources/linkcheck.mjs    # rows.json → link-health.json + two dead-link reports (~2 min, 25 concurrent)
```

- To refresh the snapshot, overwrite `readme.snapshot.md`, then run `analyze.mjs` + `linkcheck.mjs`.
- The dead count moves **±2 between runs** (DNS/timeout noise); the trend matters, not a single run.
- The snapshot arrives with **CRLF**; without stripping `\r` the `^## (.+)$` regex matches no heading.

## Files

| File | Content |
|---|---|
| `readme.snapshot.md` | frozen source table (183 KB) |
| `rows.json` | 1249 parsed records: `section`, `name`, `url`, `desc` |
| `link-health.json` | `status` + `error` per URL (last run) |
| `olu-linkler.md` | everything problematic (dead + bot protection + timeout) |
| `olu-linkler-kesin.md` | 404/410/DNS failures only |
| `analyze.mjs` · `linkcheck.mjs` · `query.mjs` | parse / probe / search |
| `inceleme.md` | assessment of the catalog (what it is good for, what it is not) |

## Limits

- Sections are **framework-oriented** (React / Vue / Angular / Svelte separately) — there is no style-oriented reading.
- AI-era records are thin (7 entries); the repo is closed, so the gap keeps growing.
- Chrome/Firefox extensions are 62 records (5% of the total) — dead weight in this repo.
- 8 URLs repeat verbatim (`ant.design`, `heroicons.dev`, `splidejs.com`, `clarity.design`, …).
