# style-lab · opening and testing the site

This file is the single answer to "how do I open the site, and how do I test what".
No dependencies: `node` (22) plus an installed Chrome/Edge is enough. `npm install` is not needed.

## 1 · The fastest route (30 seconds)

Double-click the file:

```
kit/gallery.html
```

It works over `file://` — the data is embedded in the HTML, images use relative paths (`../styles/...`).
**Do not move files out of `kit/`**: `gallery.css`, `tokens.css` and `gallery.js` must stay next to it.
In this mode cards load the original PNG; WebP derivatives only kick in on the published site
(`kit/site-config.js`).

## 2 · Local server (recommended, for search/filter testing)

```bash
# Run from the repository root.
python -m http.server 8000 --bind 127.0.0.1
# → http://localhost:8000/kit/gallery.html
```

On Windows the `python3` alias may be broken; use `python`.
If the port is taken, write `8080` instead of `8000`. Press `Ctrl+C` in the terminal to stop.

## 3 · Pages

| What | Address | Content |
|---|---|---|
| Catalog | `kit/gallery.html` | 251 style cards · search · filters · drawer · shortlist · compare |
| Real style page | `kit/live.html?style=bento-grid` | the full responsive page generated from the same template, partials, content, and style CSS as the committed PNG |
| Token specimen | `kit/live.html?mode=tokens` | the component and typography specimen; style selector remains available |
| Catalog index | `docs/catalog.md` | one-line identity per style, for all 251 (generated) |

Run `node kit/build-live.mjs` after catalog changes to regenerate `kit/live/<num>-<slug>.html`; use `node kit/build-live.mjs --check` to detect drift. The style page works directly over `file://` without a server. `mode=tokens` keeps the original specimen.

The `style=` value is the folder name without its number: `01-minimalism` → `minimalism`,
`04-luxury-typography` → `luxury-typography`.

## 3.5 · The published site

<https://bahattinercan.github.io/style-lab/> — GitHub Pages. Its source is the `_site/` folder, which
is not in git; `kit/build-site.mjs` builds it and a push to `main` triggers `.github/workflows/pages.yml`.

```bash
node kit/build-thumbs.mjs   # PNG → WebP derivatives (kit/site/thumbs, kept in the repo)
node kit/build-site.mjs     # assemble _site/ (landing + katalog.html + gallery copy + images)
node kit/check-site.mjs     # smoke test: landing/gallery/catalog/live over HTTP

python -m http.server 8000 --directory _site --bind 127.0.0.1
# → http://localhost:8000/            landing
# → http://localhost:8000/kit/gallery.html
# → http://localhost:8000/katalog.html
```

In the built site card images are `thumbs/<dir>-01-page@640.webp`, the lightbox uses `@1280.webp`, and
the download link points at the original `styles/<dir>/shots/01-page.png`. `site-config.js` communicates
this mapping to `gallery.js`.

## 4 · Gallery shortcuts

| Key | Action |
|---|---|
| `/` | focus search (name, tag, `152`, `#152`, `152-171`) |
| `f` | filter panel |
| `j` `k` | move between cards |
| `Enter` | detail drawer |
| `c` | copy the `data-style` to the clipboard |
| `s` | add/remove from the shortlist |
| `[` `]` · ← → | previous / next page |
| `Esc` | close |

Card buttons: **⊕** tokens/brief/shots · **⧉** copy · **★** shortlist · **⇄** compare (2–4 styles).
The catalog is **paginated**: 60 cards per page, with `← 1 2 … 5 →` and `1–60 / 251` at the bottom.
The page is written into the URL (`?page=2`); changing filter/search returns to page 1.
Typing a number into the search box filters by number: `152` (single style), `#9`, `152-171` / `171..152`
(range, also reversed). Number + family/sector/tone chips work together.
Filter + search + scene selection are written into the URL → the link is shareable (`?q=152-171`). (Under
`file://` some browsers block `replaceState`; use the server from §2 to test URL state.)

## 5 · Automated gates

Full set (38 steps, a few minutes — including visual signature + headless measurement):

```bash
bash kit/gates.sh
```

Only the site-related ones:

```bash
node kit/check-gallery-ui.mjs      # gallery: cards, filters, drawer, mobile, URL state
node kit/build-gallery.mjs --check # is gallery.html in sync with the gallery data
node kit/build-thumbs.mjs --check  # are the WebP derivatives identical to the source PNG
node kit/build-site.mjs --check    # site assets: 2 WebP + PNG per style, do links resolve
node kit/check-site.mjs            # builds + measures in a browser over HTTP (landing/gallery/catalog/live)
node kit/check-composition.mjs --browser  # DOM composition (real browser)
node kit/render/render-shots.mjs --styles minimalism --measure --cache-only  # single style: overflow measurement
node kit/render/phash.mjs --check  # visual signature (251 PNGs)
```

If you changed the web UI, run **at least** `check-gallery-ui` + `build-gallery --check`.
If site/gallery images changed, run `build-thumbs` → `build-site --check` → `check-site`.
If the template changed, run `render-shots --styles <slug>` then `phash --check`.

## 6 · Choosing the browser manually

Headless gates look for Edge → Chrome in that order. For a different browser:

```bash
BROWSER="./browser/chrome" node kit/check-gallery-ui.mjs
```

Replace `./browser/chrome` with the path to your own browser executable.

## 7 · Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Page is unstyled, plain black text | Opened from outside `kit/` → `tokens.css` cannot be found. Use the `kit/gallery.html` path. |
| Card images are blank | If `styles/<slug>/shots/` is not in the repo, that page was never generated: `node kit/render/render-shots.mjs --styles <slug>` |
| Card image 404 in production | The WebP derivative is missing: `node kit/build-thumbs.mjs` → then `node kit/build-site.mjs` again |
| Production loads the card PNG | `_site/kit/site-config.js` is missing (the gallery copy was not converted) → `node kit/build-site.mjs --clean` |
| `build-thumbs --check` says stale | `shots/01-page.png` was regenerated → `node kit/build-thumbs.mjs` |
| `node: command not found` | Node 22 is required. `bash kit/gates.sh` skips the gates and warns when node is missing. |
| `görsel regresyon atlandı` | `kit/render/.baseline/` is missing → create it with `node kit/render/baseline.mjs --write` |
| Port 8000 is busy | `--port 8080` or `python -m http.server 8080` |

## 8 · Deliberate limits

- `_site/` is not in git; it is produced in Actions as a publishing artifact (~249 MB: 208 MB PNG + 37 MB WebP).
- `kit/site/thumbs/` is kept in the repo → CI can build the site without installing a browser.
- The visual regression baseline (`kit/render/.baseline/`) is not in the repo; when absent the gate is
  skipped with `↷`, which is not counted as a silent pass (the output shows `↷`).
- Gates run in headless Chromium with software WebGL (SwiftShader) — they do not measure GPU FPS.
- GitHub Pages limits: 1 GB site, 100 GB/month bandwidth. Because cards are WebP, full-page PNGs are
  requested only by the lightbox/download.

---

_Verified: `node kit/check-site.mjs` → landing + gallery 251 cards (webp, lazy 245, priority 6) +
catalog 251 rows + live · console clean._
