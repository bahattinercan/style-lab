# style-lab v5 · Reference gallery analysis and improvement report

> **Date:** 2026-11-09 · **Scope:** Awwwards · Lapa Ninja · Minimal Gallery · Landing Love · Land-book · Httpster · Refero
> **Method:** the taxonomy of seven sites + repository measurement + visual inspection of 8 styles' landing renders and 4 styles' functional screens
> **Status:** report + **P6, P0 and P0.5 (shot storage) implemented** (see §0.1, §0.2) · **motion audit done, the M packages were added to the plan** (§2.4, §4.5) · `bash kit/gates.sh` 21 steps **clean**

## 0.1 · Implementation status (P6 + P0 complete, 2026-11-09)

| Package | Work | Evidence |
|---|---|---|
| P6 | `report.mjs --check` (stale report = error) | `exit 1` on a stale file, `✓` when current |
| P6 | `kit/dist/composition.md` + `composition-report.mjs` | uniformity index, family/archetype distribution |
| P6 | README/CI gate count reduced to a single source | `gates.sh` 21 steps, CI runs the same list |
| P0 | `kit/render/layouts.json` (8 hero · 5 nav · 3 density · 12 sections) | single source, justified |
| P0 | 13 partials (`partials/hero-*.html`, `nav-*.html`) + `landing.html`/`dark-landing.html` placeholders | template parity at the gate |
| P0 | `tokens.json` schema v3 → `layout { hero, nav, density }` (145/145) | `check-schema` clean |
| P0 | `assign-layouts.mjs` deterministic assignment (`--dry/--apply/--check`) | same input → same output, drift gate |
| P0 | `check-layout.mjs` + `--self-test` (5 synthetic violations + template test) | the rule set is not a no-op |
| P0 | 290 landing renders (light + dark) + PHash baseline renewed | `phash --check` 4495/4495 clean |
| P0 | A **Composition** line in all 145 `style.md` files | doc ↔ render consistent |

**Measurement (v4 → v5):** single fingerprint 100% → **16%** (23/145) · distinct `hero|nav` 1 → **16** ·
largest single hero 100% → **28%** (`split`) · average distinct heroes per family **2.9**.
All of it is reproducible with `node kit/check-layout.mjs --report` and `kit/dist/composition.md`.

Next: **Phase 2 · motion (M0–M5)** — the user's decision: the animation axis is the weakest link (§2.4).
Then: P2 (photos, approval: Unsplash/Pexels) → P1 (content) → P3 (sections) → P4 (flows) → P5 (discovery/MCP).

---

## 0.2 · Shot storage revision (P0.5, 2026-11-09)

**Decision:** 4495 PNGs left the repo; **4 core scenes × 145 = 580 PNGs** stay in the repo, the remaining
3915 images are generated under `kit/.shots-cache/` (gitignored). The site is **not published** (user decision).

| Metric | Before | After | Note |
|---|---|---|---|
| Tracked PNGs in the repo | 4495 · 1.29 GB | **580 · 167 MB** | `kit/shots.core.json` is the single source |
| `phash --check` | 54.6 s · 423 KB baseline | **~7 s · 56 KB** | full set: `--cache` |
| `kit/gallery.html` | 2.5 MB · 8993 `<img>` | **640 KB · 580 `<img>`** | scene chips down to 4 |
| Renderer | a new browser per frame · full set **34 min** | **one browser + CDP, 4 tabs · full set 9 min 50 s** (measured) | `kit/render/cdp-browser.mjs` |
| Determinism | `--virtual-time-budget` | `getAnimations()` freezing, 4000 ms | same input → **byte-identical output** (proven) |
| WebP | — | ready (`format:'webp'`, q88 ≈ **4×** smaller) | repo PNGs stay (phash decodes PNG) |
| `style.md` | 31 lines + references to missing files | **4 lines + "full set: render command"** | `sync-shot-tables` cleans it |

**Measurement (corrected):** my first estimate "34 min → 7 min" was made over PNG pages. On real HTML frames
the per-frame cost is 0.11–0.23 s; **the full set of 4495 frames = 589.8 s (9 min 50 s)**, tab parallelism
peaks at 4 tabs (2 → 4.7 s · 4 → 3.3 s · 8 → 6.0 s / 31 frames). Daily work on a single style: **~3 s**.

**Windows trap (worth recording):** opening the Chrome profile inside the repo (`kit/render/.tmp/…`) takes **30 s**
because of Defender scanning, and deleting the profile is expensive too; also `proc.kill()` leaves child processes
behind and locks the next round. Fix: a fresh profile in TEMP on every run, no deletion (`sweepOldProfiles` sweeps
anything older than an hour in the background), and on close `taskkill /T /F` on Windows (own PID tree only).

**What was lost:** full-set visual regression in CI (the 4 core scenes remain), static previews of 27 scenes in the
gallery (replaced by a "generate locally" flow), and per-scene references in the docs (scrubbed).

---

## 0 · Summary (one paragraph)

style-lab is **ahead of every reference gallery on token discipline**: 145 styles, light+dark palettes, a WCAG+APCA
gate, a motion signature, Flutter/React/Figma export. But those 145 styles **paint a single skeleton**: the same nav
(4 links + 2 buttons), the same split hero (copy on the left, mock panel on the right), the same logo strip, the same
8 "page" wireframe and **the same fictional SaaS content**. There is no axis called `layout`, there is **not a single
photograph** in the visual layer (none of the 31 templates contains an `<img>`), there is no section-level library and
no industry tag. In short, today's catalog is "145 colors from the same wire" — while what Awwwards rewards is
**a different composition per page**. The 6 packages below close that gap; the first two (composition axis + industry
content packages) change the catalog's credibility on their own.

## 0.3 · Motion phase (M0–M5) status

| Package | Status | Evidence |
|---|---|---|
| M0 · Measurement | ✅ | `kit/motion-audit.mjs` → `kit/dist/motion.md` (pattern distribution, archetype×pin, doc drift); `kit/motion/policy.json` (forbidden pattern + teachingOnly) wired to the lab gate |
| M1 · Vocabulary | ✅ | 16 patterns (`kit/render/motion/patterns.json`), `motion.choreography` schema v4 145/145, `assign-motion.mjs`, `build-motion-css.mjs`; ≥3 patterns per family, 30% ceiling, 6 synthetic violations in the self-test |
| M2 · Archetype × motion | ✅ | `kit/render/motion/archetypes.json` (sticky⇒pin-scrub, index⇒grid-stagger, type⇒line-mask preference); `live.html` is data-driven (`live-motion.js`, `data-motion` + `--mi/--ms/--mh`), fixed durations banned |
| M3 · Runtime | ✅ | `kit/render/motion-measure.mjs` (CDP): duration parity ±20ms/2%, **0** real animations under reduced, p95 frame ≤32ms; 6 styles sampled at the gate |
| M4 · Storyboard | ✅ | `kit/render/motion-strip.mjs` → 145 strips (5 frames + reduced, labelled in ms), `kit/.shots-cache/<dir>/27-motion.png` (~80 s) |
| M5 · Lab binding | ⚠️ partial | `lab-bindings.json` + gate (every pattern has a demo, no dead bindings), style picker present; **binding the demo durations to the style's tokens (M5b) is still open** |

**Measurement (before → after M1):** distinct motion fingerprints **10 → 55-60**, largest fingerprint
**51% → 5-7%**, `properties` limited to opacity+transform **110/145 → pattern-derived**, `choreography` coverage
**0 → 145/145**. `enter` distribution: fade-rise 20% · clip-curtain 17% · blur-in 17% · scale-settle 14% ·
line-mask 14% · letter-stagger 12% · split-slide 6%.

---

## 0.4 · P2 · Visual layer (2026-11-09)

| Work | Result |
|---|---|
| Source | `kit/images/` **24 frames** (7.1 MB); `INDEX.json`: source id, license, tags, usage note |
| Download/verify | `kit/fetch-images.mjs --all` / `--check` (size, orphan files, license record) |
| Assignment | `kit/assign-imagery.mjs`: family → photo pool + `treatment` (`plain/scrim/duotone/grain`) |
| Application | The `hero-fullbleed` + `hero-centered` partials carry `__PHOTO__`/`__PHOTO_ATTRS__`; scrim/duotone/grain layers in `scene.css` |
| Gate | `check-imagery.mjs`: 145/145 photo+treatment, `plain ⇒ strength 0`, photo mandatory in photographic archetypes, template placeholders |
| Measurement | 290 landings re-rendered in **41.8 s**; 18/24 photos in use (6 files as a spare pool) |

Two real bugs found along the way were fixed: (1) `Page.captureScreenshot` hung on a photographic page in a
background tab → `Page.bringToFront` before capture; (2) when the first paint was missed a 5–9 KB **blank frame**
was written → retry twice on captures under 14 KB. The caption was moved into a **surface chip** so small text does
not sit directly on the photo.

---

## 0.5 · P1 · Industry content layer (2026-11-09)

| Work | Result |
|---|---|
| Packages | `kit/content/` **8 industries** (saas · real estate · consulting · education · e-commerce · magazine · agency · health); each package has eyebrow/h1/lede/CTA/proofs/logos/tiles |
| Assignment | `kit/assign-content.mjs`: family pool + archetype rule (`fullbleed ⇒ real estate`, `type ⇒ magazine`) + balance (no dead package, 35% ceiling) |
| Templates | 8 hero partials + logo strip `__COPY_*__` placeholders; render-shots fills them from the package (`__COPY_H1_LINES__` splits into 3 lines for the type archetype) |
| Gate | `check-content.mjs`: 145/145 assignments, 8/8 packages live, text length limits (h1 ≤56), no literal demo copy, every placeholder has a counterpart |
| Measurement | 290 landings re-rendered in **44.5 s**; distribution: magazine 29 · real estate 27 · saas 23 · agency 22 · consulting 13 · e-commerce 13 · education 11 · health 7 |

Known flake: a single frame can be written blank (5 KB) during a heavy batch render. Two defences were added:
retry three times on captures under 14 KB + a blank-frame gate in `build-gallery` (`... boş/yarım render`).

---

## 0.6 · P3 · Section library (2026-11-09)

| Work | Result |
|---|---|
| Archetypes | `kit/render/sections.mjs` **12 sections** (hero, logo-wall, feature-trio, bento, how-it-works, testimonial, stats, pricing-table, faq, cta, footer, og-card) |
| Skeleton | `section.html` + `section.css` (colors only via var(--…), existing classes) |
| Render | `render-sections.mjs` → `kit/.shots-cache/<dir>/sections/<id>.png`; **145 × 12 = 1740** images, **4 min 49 s** |
| Viewer | `kit/sections.html?style=<slug>` (12 sections, shows the command when not generated) |
| Gate | `--measure`: horizontal overflow ≤2px, no out-of-viewport elements, no text under 9px; a blank frame is measured by **PNG color variety** (the size threshold was misleading: 5–8 KB plain sections are valid) |

Two bugs fixed along the way: (1) when the section HTMLs were written into a subdirectory the relative paths of
`section.css`/`tokens.css` did not resolve → styles silently disappeared (they are now written into `kit/render/`);
(2) copy placeholders were filled before the section body was embedded → the order was fixed.

---

## 0.7 · P4 · Flow strips (2026-11-09)

| Work | Result |
|---|---|
| Flows | `kit/render/flows.mjs` **3 flows × 3 steps**: onboarding (goal→team→invite), checkout (cart→payment→confirm), invite (role→message→send) |
| Skeleton | `flow.html` + `flow.css` (existing classes only + var(--…)) |
| Render | `render-flows.mjs` → `kit/.shots-cache/<dir>/flows/<id>.png`; **145 × 3 = 435** strips, **78 s** |
| Viewer | `kit/flows.html?style=<slug>`; gallery cards link `▦ bölüm` / `⇢ akış` |
| Gate | `--measure`: 3 steps mandatory, horizontal overflow ≤2px, no out-of-viewport step; blank frames measured by color variety |

Note: the "new functional screens" part of P4 (paywall, feed, table-filters, profile, search, integrations) and the
5-variant state matrix are open as **P4b** — they grow the main catalog scenes (31 → 38) and require a full render.

---

## 0.8 · P5 · Discovery and agent access (2026-11-09)

| Work | Result |
|---|---|
| Gallery filters | **family · industry (8) · tone (warm/cool/green/neutral) · scene** + search; cards link `▶ canlı` / `▦ bölüm` / `⇢ akış` |
| Brief | `kit/brief.mjs`: intent → style, industry/copy, layout, choreography, photo+treatment, token block, evidence paths, forbidden list, verification commands |
| MCP | `kit/mcp-server.mjs` (stdio JSON-RPC, no dependencies): `pick` · `style` · `tokens` · `shots` · `sections` · `flows` · `brief` |
| Gate | `brief --self-test` (mandatory sections + length), `mcp-server --self-test` (initialize · tools/list · pick · style · shots · brief) |

Remaining (P5b): a `render` tool in MCP (generate the selected scene and return its path) and source monitoring/telemetry.

---

## 0.9 · P4b + P5b + M5b · closing (2026-11-09)

| Work | Result |
|---|---|
| **P4b · functional scenes** | 6 new templates: `paywall` (blurred content + plan card), `feed` (3-column stream), `table-filters` (filter bar + bulk select + pagination), `profile` (bio + tabs), `search` (query + narrowing + highlighted results), `integrations` (catalog grid + connected/partial state). Catalog **31 → 37 scenes**; 145 × 6 = **864 new images**, 2 min 59 s |
| **State matrix** | `state.html` **5 variants**: empty · skeleton · error · 404 · **filled** (6 state chips + resolution CTAs). 145 re-renders, 46 s |
| **P5b · MCP render** | `kit/mcp-server.mjs` 8th tool: `render(slug, scene, force)` → generates the scene, returns its path. The self-test now verifies render too |
| **M5b · lab duration bound to tokens** | Demo durations are not raw literals: `calc(var(--mdspeed, 1) * 0.9s)` in CSS, `Math.round(900 * mdspeed())` in JS. `--mdspeed` = the style's enter duration / 900 ms (145 styles → **52 distinct multipliers**, y2k 0.44× · terminal-ui 0.40× · grand-tourer 0.73×) + a speed slider on the page. Gate: an unbound demo → error, a uniform map → error |

The CSS of the new scenes is at the end of `scene.css` (`.scene-paywall`…`.scene-integrations`, ~150 lines, only
`var(--…)`); state chips are `.chip.ok/.warn/.bad`. Along the way: missing icons (`chart`, `share`, `arrow-left`) were
caught and replaced with existing ones; the `states` scene renders via the `--scenes states` key (not by file name).


### 0.9b · Scene overflow gate and the real bugs it found (same round)

`render-shots.mjs --measure` was added: it opens each scene in CDP and measures **horizontal overflow >2px**, **blocks
clipped at the bottom** (panel/table/grid, below the viewport) and the count of text under 8.5px. Gate: `--sample 3 --measure`
(37 scenes × 3 styles). Full scan across 12 styles: **444 scenes · 0 issues** (small text counts as a warning — mono
styles such as log-stream and terminal-ui use 8px labels).

The three real bugs the gate caught:

| Bug | Root cause | Fix |
|---|---|---|
| The `optical-illusion` form scene overflows by 41px, the bottom row is clipped | the style uses 44px body typography + 44px button height, the form scene is 900px | **fitting** in the form/dark-form templates: once fonts are ready the overflow is measured and, if needed, the body is scaled once with `zoom` (nothing changes when there is no overflow) |
| `calibration-lab` dark landing overflows horizontally by 77px | the style's signature layer `.sig` (grid) overflows its own box, making the document scrollable | `body .sig { overflow: hidden }` — a decorative layer must not exceed the page bounds |
| Occasional **5 KB blank frames** in landing/dark-landing | paint race in a background tab; capture happens before the content is painted | `cdp-browser.captureOn`: if the frame size is below the threshold **retry 3 times**, then warn. The retry path was proven by forcing `CDP_MIN_BYTES` (`Warning: boş kare … — 3 deneme`) |

The form scene's rhythm was also pulled from 10px to 8px (on the first run `indian-block-print` overflowed by 12px).

The 580 affected core images were regenerated and the phash baseline updated (`--write --force`).

### 0.9c · Viewer path bug (reported by the user)

`kit/sections.html` and `kit/flows.html` looked for images at `../.shots-cache/...`; opened over `file://` from the
repo this resolved to `style-lab/.shots-cache/` instead of `kit/.shots-cache/`, and the page showed the "this section
has not been generated yet" box (12 sections and 3 flows were invisible). Fix: the path is now `.shots-cache/...`.
New gate `kit/check-viewers.mjs`: opens both viewers in CDP and verifies that the images **actually load**
(`naturalWidth > 0`, no missing box) — it waits for lazy loading. Gate count 37 → 38.

---

## 1 · Evidence base

| Source | What was read | Metric |
|---|---|---|
| land-book.com | home page taxonomy (Jina reader) | 6 top views + 13 page types |
| landing.love | `/effect/scroll-animation` + section pages | 19 section types, 1,467 scroll animations, 2,267 animated sites |
| lapa.ninja | home page + `/color` + about | 7,300+ landings, 15,000+ full-page images; filters: category · industry · **color** · platform · year · **old versions** |
| minimal.gallery | home page tag cloud | **36 industry/use-case tags** (including real estate, consulting, education, health, finance…) |
| httpster.net | home page + about | 3,116 sites; style/type tags (minimal, typographic, brutalist) |
| refero.design | home page taxonomy | 7 screen types · **16 task flows** · ~30 element patterns · industry list · **MCP** + research mode |
| awwwards.com | home page | Site of the Day + **jury score out of 10**, collections, agency directory, trend articles |
| . | 31 templates, 145 fragments, manifest, dist, gates | the §2 measurements below |

## 2 · Measured current state

### 2.1 What is genuinely strong (keep it)

| Property | Metric | Why it matters |
|---|---|---|
| Style count | 145 / 21 families | no gallery in the industry has this many systematically tagged styles |
| Scene coverage | 31 templates × 145 = **4,495 PNGs** | galleries show one screen; here the whole product surface exists |
| Dark mode | 145/145, debt 0 | none of the competitors has measurable dark mode coverage |
| Accessibility | WCAG + APCA + focus ring, `--strict-soft` | not a design suggestion but a **gate** |
| Motion | 145 distinct signatures, 0 intra-family copies, `--self-test` | it does not just say "animated", it measures it |
| Output contract | CSS · Tailwind · Figma · Flutter · React | galleries only *show*; this catalog *gives* |
| Auditing | a 16-step `kit/gates.sh` + CI | nobody but MCP has this |

### 2.2 Gaps (with numbers)

| # | Finding | Measurement | Reference comparison |
|---|---|---|---|
| B1 | ~~**Composition uniformity**~~ **→ closed (P0)** | v4: 145 styles on one skeleton (`scene.css:246-248`); v5: 8 hero × 5 nav, 16 fingerprints, index 16% | Awwwards/Land-book: a different composition per page |
| B2 | **Single content** | one brand/demo copy across all flat scenes ("Northwind", "Ürün ekibin için sakin bir çalışma alanı"); only the real estate package is separate (`estate*.html`) | Land-book/Refero: real product, real industry copy |
| B3 | **No visual layer** | **none** of the 31 templates has an `<img>`; the `imagery` field is prose only (`tokens.json → imagery.photos`) | all 7 sites are photo/video heavy; Httpster says "typography + photography" |
| B4 | **No section library** | no `section` archetype anywhere; a scene = a full page | Land-book's top "**Sections**" tab; landing.love's 19 section types (Hero 1657, Work 1195, Features 510, Footer 362…) |
| B5 | **No flows, only screens** | 8 "page" scenes + a 2×2 state board; onboarding/checkout steps inside one frame | Refero: **16 task flows** (sign-up, subscribe, cancel, booking, money transfer…) |
| B6 | **Weak discovery** | the gallery has search + 21 families + scene chips + ⇄ compare; **no color · industry · page type filter**, no export of a selection, no MCP for agents | Lapa: color/platform/year/old versions; Land-book: page type + Motion/OG/Headlines; Refero: MCP |
| B7 | ~~**Measurement gap**~~ **→ closed (P6)** | composition is now at the gate (`check-layout`), `report.md --check` catches staleness, gate count has a single source | Awwwards jury score (out of 10) = measured quality |
| B8 | **Motion vocabulary is monotone** | 110/145 styles are exactly `["opacity","transform"]`; 145/145 scroll = `offsetY + fade`. The gate measures **numeric** variety, not **pattern** variety | Landing Love: mask, curtain, split-line, parallax, pin, horizontal, 3D — 19 effect families |
| B9 | **Missing sequence types** | every style has only 4 sequences: `enter/scroll/pin/hover`; `page` and `reduced` in only 3 styles (the grand-tourer trio); no `exit`, `focus`, or state transitions | Refero: a flow = state transitions; Awwwards: page transitions are standard |
| B10 | **No archetype ↔ motion link** | composition now has 8 archetypes (P0) but motion is style-bound: pin in 8/13 `sticky` heroes, 0/12 in `centered` — coincidence, not a rule | `sticky`/`index`/`type` archetypes make the choreography **mandatory** |
| B11 | **Runtime is not measured** | `motion-check` reads the `tokens.json` prose; `live.html` durations are **hard-coded** (`countUp` 900ms, `.24s` hover) → "the live preview does not show the style's signature". The curve count is inconsistent too: README says "105", `motion.json` says "109 curve / 11 approximated / 30 steps" | — |
| B12 | **Presentation is static** | `shots/27-motion.png` is 3 fixed frames; no duration/comparison, no video/strip; the lab's 20 demos are **bound to no style** and exhibit patterns playbook §6.1 #10 forbids (custom cursor, horizontal scroll) | Landing Love: every entry is a **record** (video) + section tags |

### 2.4 Motion audit (measurement)

Counted over `kit/dist/motion.json` + 145 `tokens.json` (reproducible):

| Metric | Value | Reading |
|---|---|---|
| Styles | 145 | — |
| 9-parameter signature **fully unique** | 145/145 | numeric variety is real (v4's strength) |
| Sequence types | `enter · scroll · pin · hover` (145) · `page` + `reduced` (3) | no type variety |
| `properties` = `opacity + transform` | **110/145 (76%)** | the vocabulary is effectively two properties |
| `scroll` only `offsetY + fade` | **145/145** | scrub/progress/mask/parallax absent from tokens |
| `pin.enabled` | 51/145 (35%) | scattered independent of archetype |
| `enter.offsetY` | 37 distinct values, 50% of them 6–22px | the same scale |
| Distinct curves (normalized) | 109 curve · 11 approximated · 30 steps | README says "105" → **stale** |
| Fixed durations in the live preview | `live.html`: 900ms counter, `.24s` hover, IO `-18%` | the signature is **not applied** |
| Lab demo ↔ style binding | 20 demos · 0 style references | the lab is disconnected from the catalog |
| Playbook ↔ lab contradiction | §6.1 #10 "custom cursor, horizontal scroll, marquee>1 are forbidden" vs the lab demoing both | the doc contradicts its own laboratory |

**Reading:** the catalog claims "145 different animation signatures" and that is true — but the difference is **in the
numbers**. The choreography is single: they all do the same thing (a 6–28px fade from below) at different speeds.
What Awwwards/Landing Love sell is the opposite: **different motion languages** (mask, curtain, split-line, parallax
layers, pin+scrub, horizontal flow, 3D). So the motion axis fell into the same trap we fell into before composition:
parameter variety ≠ expressive variety.

### 2.3 Visual inspection notes (8 landings + 16 functional screens)

- When landings from 8 different families are placed side by side, the only distinguishing things are **color, font,
  border/shadow, motif**. Layout, hierarchy, CTA count and nav model are identical; the answer to "which style" is read
  from the liver's color.
- The functional screens (auth, pricing, checkout, states) are **good** — the pricing page looks like a real SaaS page
  with a comparison table + FAQ + "popular" badge. The problem is not quality: these screens are also on exactly the
  same skeleton across 145 styles.
- `12-page-states` is squeezed into 4 boxes; there is no empty/skeleton/partial/error/success separation as Refero shows.

## 3 · The one thing to take from each reference site

| Site | Working model | What to bring into style-lab |
|---|---|---|
| Awwwards | jury score + Site of the Day + collections | **a quality card per style** (contrast, hierarchy, motion budget, density) and an "award level" mark |
| Lapa Ninja | category + industry + **color** + platform + **old versions** | color/industry filters in the gallery; style version history (`styles/<slug>/CHANGELOG`) |
| Minimal Gallery | 36 industry tags | `tokens.json → industries[]` + a `kit/industries.json` dictionary |
| Landing Love | **section type** + effect taxonomy + video | a section library (P3) + tagging motion recipes with effect names |
| Land-book | Websites/**Sections**/Mobile/Motion/**OG Images**/**Headlines** | a section view, an OG card scene, a headline specimen |
| Httpster | typography/brutalist axis, few but sharp picks | a typography specimen scene; a "few and sharp" curator filter (`kit/pick.mjs` already exists) |
| Refero | real product screens + **flows** + element patterns + **MCP** | flow scenes (P4) + `kit/mcp-server.mjs` (P5) |

## 4 · v5 roadmap — design (P) + motion (M) packages

> The order is the dependency order: **P6 → P0 → M0 → M1 → M2 → M3 → M4 → M5 → P2 → P1 → P3 → P4 → P5**.
> Rationale: (1) improvement cannot be proven without measurement, (2) the motion vocabulary must come before the photo
> layer — mask/parallax patterns can be built without photos and settle into place when photos arrive, (3) the P1 content
> packages render in one pass once motion is done (to avoid regenerating 580 images instead of 290).
> Every package ships green at the gate on its own; none of them is "all at once".

### P6 · Close the measurement debt (half a day)

| Work | File | Acceptance |
|---|---|---|
| `report.md` staleness | `kit/report.mjs` + `kit/gates.sh` | `--check` mode: exit 1 when the dist report disagrees with the manifest; output 31/4495 |
| README ↔ CI gate count | `README.md`, `.github/workflows/gates.yml` | single source: the `gates.sh` step count; "step count: N" in exactly one place in the README |
| Composition measurement | `kit/composition-report.mjs` → `kit/dist/composition.md` | hero/nav/motif/content package distribution + a **uniformity index** (the share of the largest fingerprint) |

Verification: `bash kit/gates.sh`, `node kit/report.mjs --check`.

### P0 · Composition axis — the highest return (2–3 days)

**What:** `layout` becomes a first-class axis; a style now chooses **a skeleton**, not just color/font.

```
kit/render/layouts.json       # 8 hero + 5 nav archetypes (single source)
tokens.json → layout: { hero, nav, sectionOrder, density }   (schema v3)
kit/render/landing.html       # archetype CSS via data-layout="<hero>"
kit/render/partials/*.html    # centered-type · full-bleed-media · type-only · product-shot
                              # grid-index · split-reverse · sticky-scroll · split
```

| Archetype | When | Example styles |
|---|---|---|
`centered-type` | luxury, editorial, poster | 04, 03, 37 |
`full-bleed-media` | storefront, real estate, hotel | 41, 42, 127 |
`product-shot` | SaaS, tool, hardware | 01, 05, 46 |
`grid-index` | agency, portfolio, archive | 35, 36, 89 |
`type-only-poster` | typography, culture | 37, 86, 87 |
`split-reverse` | alternative rhythm | 13, 15 |
`sticky-scroll` | story, long page | 42, 136 |
`split` | default (today's) | the rest |

**Gate:** `kit/check-layout.mjs`
- ≥ 4 distinct `hero|nav` fingerprints per family,
- a single fingerprint ≤ 40 styles (145 today),
- `density` distribution: at least 1 sparse + 1 dense in every family,
- self-test: 2 synthetic violations proving the rule is not a no-op.

**Risk:** 145 landings re-rendered (~145 PNG × 2 sizes) → `optimize-shots --all --verify` is mandatory, renew the PHash baseline.

### M0 · Make motion measurable (half a day)

**What:** today's gate only looks at prose numbers; which *pattern* is used, and whether `live.html` actually applies
the signature, is not measured.

| Work | File | Acceptance |
|---|---|---|
| Vocabulary counting + pattern classification | `kit/motion-audit.mjs` → `kit/dist/motion.md` | pattern distribution over 145 styles (today: `fade+rise` 100%), archetype × pin table, curve count |
| Doc drift | `README.md`, `playbook.md` | the curve count comes from a single source (`motion.json → counts`); no hand-written number like "105" remains |
| Doc ↔ lab contradiction | `kit/build-motion-lab.mjs --check` | every pattern exhibited in the lab is on the playbook allow-list, or the playbook is updated with a rationale |
| Gate | `bash kit/gates.sh` | + 2 steps: `motion-audit --check`, `build-motion-lab --check` |

Verification: `node kit/motion-audit.mjs --check`, `node kit/build-motion-lab.mjs --check`.

### M1 · Motion vocabulary (patterns) — 2–3 days

**What:** the signature becomes **"what it does"** rather than "how many ms". `tokens.json → motion.choreography`:

```
motion: {
  choreography: {
    enter:  { pattern: 'mask-reveal' | 'line-mask' | 'clip-curtain' | 'fade-rise' |
                         'blur-in' | 'scale-settle' | 'letter-stagger' | 'split-slide', from, to },
    scroll: { pattern: 'reveal' | 'scrub' | 'pin' | 'grid-stagger' | 'parallax' |
                         'horizontal' | 'counter', range, once },
    hover:  { pattern: 'scale' | 'lift' | 'underline-draw' | 'invert' | 'tilt-3d' | 'magnetic' },
    page:   { pattern: 'crossfade' | 'curtain' | 'none' },       // optional, default crossfade
    reduced:{ strategy: 'opacity' | 'instant' | 'static-frame' }
  }
}
```

| Work | File | Acceptance |
|---|---|---|
| Pattern catalog (14 patterns, with metadata) | `kit/render/motion/patterns.json` | every pattern has `when`, `properties`, `measure` (expected delta at 50%), `reduced` |
| Pattern implementation (CSS + optional JS) | `kit/render/motion/<pattern>.css|.js` | single source; the lab and `live.html` use the **same** file |
| Choreography assignment for 145 styles | `kit/assign-motion.mjs` (`--dry/--apply/--check`) | family + archetype + typography rules; deterministic (same pattern as assign-layouts) |
| Schema + gate | `check-schema.mjs`, `motion-check.mjs` | ≥3 distinct `enter.pattern` per family; a single pattern ≤30% of styles; every pattern live in ≥3 styles (no dead patterns); the `properties` declaration agrees with the pattern |
| Family ↔ pattern fit | `motion-check.mjs` | e.g. `tilt-3d`/`magnetic` is an **error** in the `Plain` family, `steps/glitch` is free in `Retro` |

Verification: `node kit/motion-check.mjs --self-test` (5 synthetic violations), `node kit/assign-motion.mjs --check`.

### M2 · Archetype × motion matrix — 1–2 days

**What:** P0 split composition into 8 archetypes; unless motion is bound to the archetype, a `sticky` hero and a
`type` hero play the same fade (today: `centered` 0/12 pin, `sticky` 8/13 — coincidence, not a rule).

| Archetype | Mandatory scroll/enter beat | Rationale |
|---|---|---|
| `sticky` | `pin` or `scrub` **mandatory** | the point of a sticky narrative is being revealed by scrolling |
| `type` | `line-mask` or `letter-stagger` | poster typography must arrive line by line |
| `product` | `scale-settle` + `scrub` | the giant panel feels like it is "settling" |
| `index` | `grid-stagger` | the grid opens in stages |
| `fullbleed` | media `mask-reveal` | the media opens from the edge |
| `centered` | `fade-rise` or `blur-in` | calm, single message |
| `split` / `split-reverse` | `split-slide` (mirrored) | the two columns arrive from opposite directions |

| Work | File | Acceptance |
|---|---|---|
| Matrix + gate | `kit/render/motion/archetypes.json`, `motion-check.mjs` | 145/145 styles carry their archetype's mandatory beat (error = exit 1) |
| Data-driven `live.html` | `kit/build-gallery.mjs` → `kit/live-motion.js`; `live.html` | the page reads `window.STYLE_MOTION[slug]`; **no fixed duration literal** (gate: `motion-check --live`) |
| Live preview patterns | `live.html` | at least 4 patterns (mask, stagger, scrub/pin, hover) with the style's own values |

Verification: `node kit/motion-check.mjs --live`, plus a visual check in the browser at `kit/live.html?style=<slug>`.

### M3 · Runtime verification (2 days)

**What:** "tokens.json says so" is not enough; it must be **measured in the browser**.

| Work | File | Acceptance |
|---|---|---|
| `getAnimations()` parity | `kit/render/motion-measure.mjs` | over a 12-style sample, `duration/easing/delay` within ±2% of the tokens; the `properties` declaration matches the actual `transitionProperty` |
| reduced-motion | same | under `?motion=reduce` **0 running animations**, content visible in the first frame |
| Frame budget | same (CDP `Performance`/frame delta) | p95 ≤ **32ms** over the first 60 frames, long tasks ≤ 1 |
| Gate | `gates.sh` (sample 12) · `--all` manual/CI nightly | on failure the style and the metric are printed |

Verification: `node kit/render/motion-measure.mjs --sample 12`, `--all` ≥145.

### M4 · Presentation: storyboard strip + optional video (2–3 days)

**What:** the motion has to be **visible** in the catalog. Today's `27-motion.png` is 3 fixed frames; no duration.

| Work | File | Acceptance |
|---|---|---|
| Deterministic frame generation | `kit/render/motion-strip.mjs` | frames at t = 0/25/50/75/100% (rAF frozen, `--t` injected), labelled with ms + pattern above each |
| Strip scene | `styles/<slug>/shots/27-motion.png` | 5 frames + a **reduced-motion frame** (6th cell) |
| Video (optional) | `kit/render/motion-strip.mjs --webm` | WebM if `ffmpeg` exists; otherwise a clear message and the strip stays (**no new npm dependency**) |
| Gate | `check-schema.mjs` + `render/phash.mjs` | the strip exists for 145/145, labels within ±2% of the token duration |

### M5 · Bind the lab to the catalog (1–2 days)

**What:** the 20 demos are bound to no style today; the catalog does not state which pattern belongs to which style.

| Work | File | Acceptance |
|---|---|---|
| `tokensRef` + `styles[]` in the demo contract | `kit/motion/*.mjs` | every demo states which token field it consumes and 3 example styles |
| Mutual coverage gate | `build-motion-lab.mjs --check` | every pattern has ≥1 demo; every style's pattern exists in the lab; the `reduced` declaration is mandatory |
| Style picker | `motion-lab.html` | the demo plays with the selected style's tokens (same data as live.html) |

### P1 · Industry content packages (2 days)

**What:** the doc says "Best for: premium brand, hotel, jewelry" while the render shows SaaS. Content separates, the skeleton stays.

```
kit/content/{saas,emlak,danismanlik,egitim,e-ticaret,dergi,ajans,saglik}.json
kit/industries.json           # Turkish equivalents of Minimal Gallery's 36 tags + mapping
templates: __COPY:hero.h1__   # no hard-coded text remains
tokens.json → industries: ["emlak","otel","mucevher"]   (at most 3, the first is the mandatory render)
```

**Gate:** `kit/check-content.mjs` — no free text left in the template, the manifest records that every style was rendered
with its `industries[0]` package, and no forbidden pairing (e.g. `pixel-art` + `saglik-kurumsal`).

**Impact:** for the first time the catalog **genuinely** answers "how does this style look in real estate"; the real
estate package already existing halves the work.

### P2 · Visual layer (1 day + render)

**What:** CSS motifs stay, a license-clean photo layer is added on top.

```
kit/images/                   # 24 frames, 4:5 + 3:2 + 16:9
kit/images/INDEX.json         # source URL, license, ratio, average brightness, dominant color
kit/fetch-images.mjs --check  # missing/unattributed file = error
tokens.json → imagery.treatment: { overlay:'scrim|duotone|grain|none', strength }
```

**Gate:** `kit/check-imagery.mjs` — 4.5:1 for text over photo/surface in a scene that uses a photo, whether `grain`/`blur`
is actually applied (measured from the DOM), and whether attribution is complete.

**Impact:** today's renders read like "wireframes"; tokens such as `--grain`, `--blur` and duotone can only be tested with photos.

### P3 · Section library — the Land-book/landing.love counterpart (3–5 days)

**What:** a new view that produces **sections**, not full pages: `kit/sections.html?style=<slug>&section=<key>` → `styles/<slug>/sections/<key>.png`.

12 archetypes: `hero` · `logo-wall` · `feature-trio` · `bento` · `how-it-works` · `testimonial-wall` · `stats` · `pricing-table` · `faq` · `cta` · `footer` · `og-card` (1200×630).

**Gate:** `kit/check-sections.mjs` — 145×12 coverage, no overflow per section, contrast passes, `og-card` 1200×630.

**Storage warning:** 12 × 145 = 1,740 new images, adding **~40%** to the current 1.2 GB. Recommendation: section images
as **WebP** (quality 90) — keep PNG losslessness only for full-page scenes.

### P4 · Functional depth — the Refero counterpart (3 days)

New scenes: `paywall` · `feed` (activity/notifications) · `table-filters` · `profile` · `search` · `integrations` ·
`invite` · `empty-first-run`.
Flow strips: `flow-onboarding` (3 steps in one wide image) · `flow-checkout` (cart → payment → confirm) · `flow-invite`.
State matrix: 5 variants instead of the current 2×2 — empty · skeleton · partial · error · success.

**Gate:** `kit/check-flow.mjs` — token consistency across flow steps, ≥ 3 steps, and whether every step has a way back
and a trust element (the rule set is tied to playbook §7).

### P5 · Discovery and agent access (3 days)

| Work | Detail |
|---|---|
| Gallery filters | color (dominant hue × light/dark), industry (`industries[]`), page type (landing / portfolio / blog / e-commerce / pricing / signup) |
| View modes | **Web · Section · Mobile · Motion · OG** (Land-book's top tabs) |
| Selection → brief | the chosen 1 dominant + 1 garnish + industry → `brief.md` (agent input, same schema as the `pick.mjs` output) |
| `kit/mcp-server.mjs` | tools: `pick(intent)` · `style(slug)` · `tokens(slug,theme)` · `shots(slug,scene)` · `sections(slug)`; `--self-test` |

**Gate:** `node kit/mcp-server.mjs --self-test` + `build-gallery --check`.

## 5 · Acceptance criteria (v5's definition of "done")

1. **Uniformity index** (the share of the largest hero|nav fingerprint) **below 30%** — v4 100%, v5 **16%** ✅
2. **Industry coverage:** every family has renders in at least 3 different industries; `industries[]` filled for 145/145.
3. **Visual layer:** at least 60 styles use a photo layer; `imagery.treatment` is a measured value, not prose.
4. **Section library:** 145 × 12 = 1,740 sections, all passing the contrast + overflow gate.
5. **Flows:** at least 3 flow strips × 145 styles; every flow ≥ 3 steps.
6. **Gates:** `bash kit/gates.sh` green; new gates have self-tests; `dist/report.md --check` catches staleness.
7. **Agent path:** `node kit/pick.mjs --intent "premium emlak"` → an `mcp` call → `brief.md` all suggest the same slug.
8. **Motion vocabulary:** **≥3 distinct** `enter.pattern` per family; a single pattern ≤ **30%** of styles; every pattern
   live in ≥3 styles; the `fade-rise` monopoly is broken (100% today).
9. **Archetype ↔ motion:** 145/145 styles carry their archetype's mandatory beat (`sticky` ⇒ pin/scrub, `type` ⇒ line-mask, `index` ⇒ grid-stagger…).
10. **Runtime:** over a 12-style sample, animation durations are within **±2%** of the tokens; **0** running animations
    under `prefers-reduced-motion`; p95 frame ≤ **32ms**.
11. **Presentation:** 145 storyboard strips (`27-motion.png`, 5 frames + a reduced frame, labelled in ms); `live.html`
    contains **no fixed duration literal**.
12. **Lab ↔ catalog:** every pattern has ≥1 demo, every style's pattern is in the lab; **0** contradictions with the
    playbook forbidden list.

## 6 · Order (concrete) — Phase 1 complete, Phase 2 motion

**Phase 1 · complete (P6 + P0):** measurement debt + composition axis → 16 fingerprints, index 16%, `gates.sh` 21 steps clean.

**Phase 2 · motion (~9–12 days):**

| Day | Work | Command / evidence |
|---|---|---|
| 1 | M0: `motion-audit` + `dist/motion.md` + doc drift (curve count) | `node kit/motion-audit.mjs --check` |
| 2–4 | M1: a 14-pattern catalog + `motion.choreography` schema v4 + `assign-motion` | `node kit/assign-motion.mjs --apply` → `motion-check --self-test` |
| 5 | M1: choreography for 145 styles + gate (≥3 patterns per family, 30% ceiling) | `node kit/motion-check.mjs` |
| 6–7 | M2: archetype matrix + data-driven `live.html` | `node kit/motion-check.mjs --live` |
| 8–9 | M3: CDP measurement (parity + reduced + frame budget) | `node kit/render/motion-measure.mjs --sample 12` |
| 10–11 | M4: storyboard strip (5 frames + reduced) + `27-motion.png` renewal | `node kit/render/motion-strip.mjs --all` |
| 12 | M5: lab ↔ catalog coverage gate + style picker; baseline + gates | `node kit/build-motion-lab.mjs --check`, `phash --write`, `gates.sh` |

**Phase 3 · remaining design packages:** P2 (photos) → P1 (content) → P3 (sections) → P4 (flows) → P5 (discovery/MCP).

## 7 · Do-not-do list

- Adding a 146th style is **worthless right now**: the problem is not the style count but composition and content uniformity.
- Growing the scene count by adding scenes: 31 is already enough; what is missing is **depth** (flows, states, sections).
- A new target export (e.g. Vue/Svelte): until the existing 5 targets are tested, a new one is noise.
- Choosing photos by hand per scene: without `INDEX.json` + deterministic matching, 4,495 scenes go unmaintained.
- **"Diversifying" the motion signature by only tweaking duration/easing** — that was v4's mistake; writing new duration
  values before M1 builds the pattern axis is noise.
- Adding new demos to `motion-lab`: a demo is only worth it if it binds to a style's choreography (the M5 gate).
- A new npm dependency for video (ffmpeg/puppeteer): the strip + CDP is enough; a dependency is the last resort.

## 8 · Not verified

- `bash kit/gates.sh` **was run**: 21 steps clean (visual regression is skipped because the baseline directory is absent —
  same as in v4).
- Render quality was inspected by eye: light + dark variants of 8 archetypes, 5 nav models, 4 different families (with a
  contact sheet). No overflow/clipping seen; the **type scale and spacing rhythm** were not separately reviewed per archetype.
- `docs/katalog.md` was not regenerated (no layout column); a generation script should be added if wanted.
- **The motion findings come from reading files** (`kit/dist/motion.json` + 145 `tokens.json` + the `live.html`/`motion-lab.html`
  sources). No runtime measurement was **done** in the browser — the M3 package builds exactly that; so the finding "the live
  preview does not apply the signature" rests on fixed durations in the JS source and was not confirmed by observation on a device.
- Some of the reference sites returned 403 on direct fetch (Land-book, Lapa, Landing Love); their content was read through the
  Jina reader and search summaries. Screenshots were not examined.
