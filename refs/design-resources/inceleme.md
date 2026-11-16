# design-resources-for-developers — review

> The dead-link count moves **±2 between runs** (DNS/timeout noise): 54 and 55 were measured.
> For the current number run `node refs/design-resources/linkcheck.mjs`; this document records the first review.

Snapshot: `readme.snapshot.md` (bradtraversy/design-resources-for-developers, commit 2026-10-18)
Commands: `node refs/design-resources/analyze.mjs` · `node refs/design-resources/linkcheck.mjs`

## What is this?

No code. A single `readme.md` (1671 lines, 183 KB) — a **link catalog** laid out as tables across 34 sections.
The repository **closed to new submissions on 2026-10-18** ("New resource submissions are currently paused").

## Numbers

| Measure | Value |
|---|---|
| Total records | 1249 |
| Sections | 34 |
| Unique domains | 1063 |
| URLs repeated verbatim | 8 (`ant.design`, `heroicons.dev`, `splidejs.com`, `clarity.design`, `arco.design`, `aos`, `lunacy`) |
| Link health | 1082 reachable · 167 problematic |
| Genuinely dead (404/410/no DNS) | **54 (4.3%)** |
| Bot protection (403/429/402) | 67 — mostly healthy |
| Timeouts / TLS failures | 13 + 11 |

## The fullest sections

```
104 Online Design Tools      47 UI Graphics            24 Product & Image Mockups
 88 Colors                   47 Fonts                  22 Icon Fonts
 86 Others                   44 Design Systems          18 Angular UI Libraries
 79 React UI Libraries       43 Vue UI Libraries        14 Javascript Chart Libraries
 69 Icons / UI Components    40 Stock Photos            13 Logos / Stock Music
 64 CSS Frameworks           38 Chrome Extensions      11 Favicons · 10 Stock Videos
 51 Image Compression        48 Design Inspiration       7 AI Graphic Design Tools
```

## Where the spread is thin

- **AI-era records are scarce**: 7 AI graphic tools, no AI/agent-friendly templates. Because the repo stopped in 2026, the gap keeps growing.
- **Chrome/Firefox extensions are 62 records** — 5% of the total; dead weight for a design catalog.
- **Sections are split by technology** (React/Vue/Angular/Svelte UI Libraries) — this does not fit a style-oriented view such as `STYLE-LAB`; one style is scattered across four sections.
- **Duplicate URLs** were left without cleanup (e.g. `ant.design` appears in both React and UI Components).

## Dead links — the 12 most annoying

| Section | Name | Status |
|---|---|---|
| Colors | PaletteForge, Color Hex Picker, CombineCOLORS, AiSeka | no DNS |
| Colors | Croma, Saruwakakun | 404 |
| React UI Libraries | Theme UI, Orbit, Recharts, Elemental UI | 404/DNS |
| Design Systems | Comet, Rizzo, Lexicon, Alta UI, Audi CI | 404/DNS |
| Icons | Cryptoicons (410), Evericons (404) | dead |
| Favicons | FaviconForge, FaviFiles | no DNS |
| Stock Photos | Picspree, scienceimage | no DNS |
| UI Components | Stitches, Bit components, Daemonites (double `http://` in the URL) | broken |

Full list: `olu-linkler-kesin.md` · raw data: `link-health.json`

## Running it

A single runnable PR validator. No app, no server, no `package.json`.

1. **Unit tests** — `python -m unittest discover .github/scripts -p "test_*.py"`
   → `Ran 14 tests ... OK` (Python 3.12.10, 0.019 s)
2. **End-to-end PR simulation** — (the script was not carried over; a one-off verification ran `validate_resource()` directly)
   `validate_resource()` was called on the real `readme.md` with six scenarios → **6/6 as expected**

| Scenario | Result |
|---|---|
| Valid contribution (single line added) | passed |
| Same name/URL again (Coolours) | rejected: `already listed` |
| Wrong section in the heading | rejected |
| Missing checklist item | rejected: `Missing confirmations: genuinely free` |
| `Link:` does not match the README URL | rejected |
| More than one line changed | rejected: `Only the single resource entry may change` |

The validator's real mode (`--merge` + `--event`) needs a two-parent merge commit and the GitHub event JSON; it was therefore run at function level rather than through the CLI.

## Verdict

- **Good as a catalog, absent as code**: it is not for producing design styles or tokens, it is for asking "which site was that for this job".
- **Second-hand as a source**: most of its 1063 domains are less current than the first-hand site. Your `STYLE-LAB.md` plus the `Styles` library is deeper than this repo.
- How to use it: keep `readme.md` as a greppable reference and carry a selection into the style library **only from the Colors + Fonts + Design Systems sections**.
