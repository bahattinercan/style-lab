# Stage layer plan — "the site is a stage" (stage-lab) · v2

> **What it is for:** a decision record + implementation plan for becoming able to produce
> WebGL/animated sites in the class of Lando Norris · Monolith · Bruno · Inkwell · Aurel · Ponpon · Unseen · Mat Voyce.
> **Status:** plan approved, no code written. **v2:** style `04-luxury-typography` locked, the style-contract conflict resolved.
> **Out of scope:** style-lab's 145-style catalog and its 38 gates **do not change**. This plan opens a new repo.

---

## 1 · Decision record (locked)

| # | Decision | Choice | Consequence |
|---|---|---|---|
| K1 | Where the code lives | **Sibling project `../stage-lab`** | npm/vite/three are free to use; style-lab stays dependency-free |
| K2 | Motion policy | **Free, unconditional** | The `kit/motion/policy.json` bans do not apply at the stage tier |
| K3 | First archetype | **`portrait-motif`** (Lando skeleton) | 5 beats + motif repetition |
| K4 | Output of this round | **This document only** | No code, gates unchanged |
| **K5** | **Style** | **`04-luxury-typography`** | Palette, typography, spacing and **the style's own motion bans** are binding → §3 |

### K1 rationale — why a sibling project
style-lab carries no `package.json` at the root; the kit runs on Node built-ins + headless Chrome (CDP).
A stage site wants the opposite: `three` + `@react-three/fiber` + `gsap` + `lenis` + `vite`. Pulling those
into style-lab would make the 38 gates npm-dependent.

| Repo | Role | Writes | Reads |
|---|---|---|---|
| `style-lab` | **data**: palette, typography, motion duration/easing, scene templates | only its own gates | — |
| `stage-lab` | **stage**: beat machine, WebGL, camera, audio | its own `npm run verify` | style-lab's `dist/` output + `tokens.json` |

**Contract (one-way):** `stage-lab` **never writes** to style-lab. The files it reads:

| File | What is taken |
|---|---|
| `kit/dist/tokens.all.css` | `[data-style]` variable sets (light + dark) |
| `kit/dist/tailwind.theme.css` | `@theme` (Tailwind v4) |
| `kit/dist/motion.json` | `durationMs`, `{kind, points}` easing, `offsetYPx` |
| `kit/dist/react/styleLabTokens.js` | typed tokens on the TS side |
| `kit/styles.index.json` | summary of the 145 styles + paths |
| **`styles/04-luxury-typography/tokens.json`** | **`must` · `mustNot` · `motion.forbidden` · `components` — the input of the style-contract gate** |
| **`styles/04-luxury-typography/style.md`** | composition + screen recipe (human-readable, not read by the gate) |

**Drift protection:** `tools/verify-contract.mjs` compares the SHA256 of 7 files against `contract.lock.json`.
If the style-lab export changed and stage-lab was not updated, `npm run verify` goes red. There is no reverse direction.

---

## 2 · Reference breakdown → 5 archetypes

| Archetype | Reference | Carrying idea | Core mechanic | Fit with `04` |
|---|---|---|---|---|
| `portrait-motif` | Lando Norris | helmet | cursor pokes motif pieces → motif repeats in 4+ places | ✅ (adapted, §3) |
| `single-object` | Monolith | single monolith | scroll → **camera** | ⚠️ camera must be locked, the motif rotates |
| `scroll-narrative` | Inkwell | the game itself | no nav, beat + physics | ⚠️ physics counts as "motion" → must be impulse-driven |
| `playable-world` | Bruno · Aurel | playable world | WASD + collision | ⚠️ hard with 04's sparse layout; defer |
| `kinetic-type` | Mat Voyce · Stas Bondar | letter | scale/axis + DrawSVG | ✅ natural fit (Cormorant 300 + DrawSVG) |

**Clear rule after K2:** the `policy.json` bans are gone, **`04`'s own bans are not.** They are two separate layers.

---

## 3 · Fitting `04`: 6 conflicts and their resolution

This section is the real work of v2. The Lando mechanic cannot be placed into `04`'s contract **as is**.

| # | Conflict | What `04` says | Source | Resolution |
|---|---|---|---|---|
| C1 | **Continuous animation** | `motion.forbidden`: "continuous animation" | if particles drift on their own it is a violation | **Motion comes from the user.** Particles move when the cursor pokes them, inertia falls to zero in 1.2s and they stop. Not "dust" but **"engraving shavings"** |
| C2 | **Parallax** | `motion.forbidden`: "parallax" | camera/layer sliding is banned | The camera is **fixed**. Depth is built with `clip-path` layers + `opacity` (`04` signature: `mask-wipe` / `clip-curtain`) |
| C3 | **Pin / scrub** | `pin.enabled: false`, `scroll.once: true` | the Monolith/Inkwell mechanic needs pinning | **Two channels:** DOM reveal = `once: true` (04 as-is); stage scrub = a separate channel, reversible. The override is **written down**, no silent override |
| C4 | **Bloom / glow** | "no shadow, gradient, glass, texture"; `--bg` is cream | bloom clips to white on a cream ground | **Bloom = 0.** No post; instead grain `.03` + a 1px `--line` vignette |
| C5 | **Gold** | "`--accent` is never used as text" (2.0:1); "gold only as hairline/icon/frame" | a filled gold mesh = large area | The motif **is a line**: `LineSegments` / 1px engraving. No filled gold surface; gold only in hairlines and a single accent point |
| C6 | **Density** | "1 heading + 1 paragraph + 1 CTA per screen", "≤2 sections", chip inflation banned | Lando's hall-of-fame grid | The `atlas` beat is **not a grid**: 3 sparse list rows, hairline dividers, serif numerals |

### 3.1 Three-layer precedence (this is the order when a conflict appears)

```
1. 04 style contract   (must / mustNot / motion.forbidden)
2. K2 stage exception  (policy.json bans are dropped)
3. Archetype mechanic  (Lando skeleton; adapted if it conflicts with the first two)
```

### 3.2 `04` profile (stage-lab side)

| Layer | Value | Source |
|---|---|---|
| Ground | `#f6f1e7` cream (`--bg`) | tokens.json |
| Display | Cormorant Garamond **300**, 64px / 1.1 / `0.01em` | typography.scale.h1 |
| Body | Jost 14 / 1.75 / `0.02em`, measure **46–54ch** | typography.measure |
| Micro label | 10px / 500 / uppercase / `0.3em`, color **`--ink`** (not gold) | must #3 + contrast |
| Hairline | 1px `rgba(26,24,21,.16)`; **gold `--accent` only as a line** | must #6 |
| Shape | radius **0**, shadow **none** (`--shadow: none`) | shape/elevation |
| Enter | **800ms** `cubic-bezier(.2,.7,.2,1)`, `opacity` + 24px, stagger 90ms | sequences.enter |
| Scroll reveal | **1000ms**, `top 80%`, `once: true` | sequences.scroll |
| Hover | **320ms**, `scale(1.015)` (image), `underline-draw` (link) | sequences.hover |
| Reward motion | hairline **0 → 40px**, 400ms `ease-in-out` | `04` motion table |
| Dark mode | `#12100e` ground, gold `#d8bb7d` | palette.dark |

**Stage default is light mode** (`04`'s signature cream paper). Dark mode is a separate profile: same code, different particle/bloom setting.

### 3.3 Typography ↔ stage bridge

- **FOUT is banned.** If the 64px Cormorant 300 jumps once, the luxury feel is over. `font-display: block` + preload;
  **the B0 preload beat waits for `document.fonts.ready`** → the stage opens together with the font.
- Motif and display in the same frame: `mix-blend-mode: multiply` is **not used** for text (too close to the
  shadow/gradient ban); instead the motif is an `opacity: .12` engraving layer and the text sits on top at full contrast.
- The hairline is derived from a part of the motif (the motif's horizontal cross-section = a 40px rule) → **motif repetition #3**.

---

## 4 · `portrait-motif` deep breakdown (K3 + K5)

### 4.1 Six beats (pulled to the 04 tempo)

| Beat | Duration / trigger | What happens | Technique | `04` fit |
|---|---|---|---|---|
| **B0 preload** | 0 – 1.2s | font + motif pieces assemble | `document.fonts.ready` + GSAP timeline | `clip-curtain` |
| **B1 hero** | scroll = 0 | engraving motif; cursor poke lifts shavings, **stops in 1.2s** | `InstancedMesh` 4k, inertia damping | C1 |
| **B2 story** | scroll 0 → .6 | 3 acts, **camera fixed**, motif opens with `clip-path` | GSAP scrub + `clip-path` | C2, C3 |
| **B3 atlas** | scroll .6 → .9 | 3 sparse list rows; row number in serif; a motif slice as the hairline (repetition #3) | DOM + hairline | C6 |
| **B4 footer** | scroll .9 → 1 | giant motif engraving, `opacity .08`, `clip-path` (repetition #4) | CSS clip + scrub | C2, C4 |

Motif repetition: nav micro drawing (#1) + hero (#2) + atlas hairline (#3) + footer (#4) → **4**.

### 4.2 Motif pipeline

```
motif.svg / motif.glb  →  tools/optimize-motif.mjs  →  public/motif/{mesh.glb, parts.json, og.webp}
```

- Per `04` the motif must carry **lines**: `LineSegments` (edges) are derived from the GLB; a filled surface only in
  the same tone as `--surface` / `--bg`, without shadows. Gold only in hairlines.
- GLB: Draco + KTX2, **≤ 1.5 MB**; part names go into `parts.json` (which part the cursor will detach).
- SVG fallback: without WebGL the **same motif** as SVG; no blank screen.
- Particle count 4k **not 10k**: 10k dust particles look "dirty" on a cream ground (`04`'s "no visible noise" rule).

### 4.3 Stack (pinned versions)

| Layer | Choice | Note |
|---|---|---|
| Build | Vite 6 + React 19 + TS strict | |
| 3D | `three` + `@react-three/fiber` + `@react-three/drei` | `LineSegments`, KTX2 loader |
| Timeline | `gsap` + `ScrollTrigger` | scrub channel separate; `CustomEase` brand curve |
| Smooth scroll | `lenis` | bound to the GSAP ticker |
| 2D micro-motion | `@rive-app/react-canvas` | hairline drawing + micro label |
| Post | **none** (bloom off) | C4; grain via CSS |
| Measurement | `playwright` + CDP | FPS, drawcall, LCP, long tasks |

---

## 5 · `stage-lab` architecture

```
../stage-lab/
├── contract.lock.json            # SHA256 of 7 style-lab files (tokens.json included)
├── tools/
│   ├── verify-contract.mjs       # drift gate
│   ├── check-style-contract.mjs  # 04 must/mustNot audit (code + config)
│   ├── optimize-motif.mjs        # GLB → line derivation + Draco/KTX2 + parts.json
│   └── measure.mjs               # playwright: FPS/drawcall/LCP/long task/interaction count
├── src/
│   ├── stage/
│   │   ├── beats.ts              # B0..B4, reads config, awaits fonts.ready
│   │   ├── scroll.ts             # Lenis + two channels: reveal(once) / scrub(reversible)
│   │   ├── scene.tsx             # R3F canvas, frameloop='demand', quality tier
│   │   └── motif.ts              # line motif loading + part map + SVG fallback
│   ├── archetypes/portrait-motif/
│   ├── ui/                       # nav (pill) · hero · atlas list · footer
│   └── styles/                   # tokens.all.css import + data-style="luxury-typography"
├── stage.config.json
└── verify: typecheck + lint + style-contract + build + verify-contract + measure
```

```json
{
  "style": "04-luxury-typography",
  "theme": "light",
  "motif": { "mesh": "public/motif/mesh.glb", "parts": "public/motif/parts.json", "svg": "public/motif/motif.svg" },
  "beats": ["preload", "hero", "story", "atlas", "footer"],
  "quality": { "particles": 4000, "bloom": 0, "edgesOnly": true, "dprMax": 1.75 },
  "scroll": { "reveal": { "once": true, "durationMs": 1000 }, "scrub": { "distanceVh": 300 } },
  "audio": { "enabled": false },
  "styleOverrides": {
    "motion.forbidden": ["fast transitions (under 100ms)"],
    "scroll.pin": { "enabled": true, "scrub": true, "rationale": "C3: scrub is user-driven, not autonomous motion" },
    "policy.forbidden": ["custom-cursor", "scroll-hijack", "pin"] 
  }
}
```

`styleOverrides` is a **required field**: without an override the gate applies `motion.forbidden` verbatim. No silent overrides.

---

## 6 · Acceptance criteria (measurable)

### Stage

| # | Criterion | Threshold | How |
|---|---|---|---|
| 1 | Motif repetition | ≥ **4** distinct sections | `measure.mjs` DOM query |
| 2 | Beat progression | 5 beats, scroll 0→1 | `window.__beats` telemetry |
| 3 | FPS (desktop, 4k) | p50 ≥ **55** · p95 ≥ **45** | CDP `Performance` |
| 4 | Drawcalls | ≤ **30** | `renderer.info.render.calls` |
| 5 | LCP (4G) | ≤ **2.5s** | Lighthouse |
| 6 | JS gzip | ≤ **450 KB** | vite build report |
| 7 | GLB | ≤ **1.5 MB** (Draco+KTX2) | file size |
| 8 | No WebGL | SVG motif, no blank screen | `--disable-webgl` |
| 9 | Inertia stops | with the cursor still, transform change after 1.5s = **0** | CDP: consecutive frame matrix diff |

### `04` style contract (new — the main gate of v2)

| # | Criterion | Threshold | How |
|---|---|---|---|
| 10 | Shadow | `box-shadow: none`, `text-shadow: none` | computed style scan |
| 11 | Gradient / glass | `gradient` / `backdrop-filter` = **0** matches | CSS scan |
| 12 | Radius | ≤ **2px** on every element | computed style |
| 13 | Display | family ⊇ Cormorant, weight ∈ {300,400}, size ≥ 52px | computed style |
| 14 | Heavy display | weight ≥ 600 on **no** display element | computed style |
| 15 | Body | ≥ 14px, line-height ≥ 1.7 | computed style |
| 16 | Gold text | `color: #c6a664` on **no** text node | computed style (contrast 2.0:1) |
| 17 | Micro label | `--ink`, 10px, uppercase, tracking ≥ `0.2em` | computed style |
| 18 | Sparsity | ≤ **3** interactive elements in the hero; ≤ **2** per section | DOM count |
| 19 | FOUT | **0** font swaps after preload | `document.fonts` observer |
| 20 | Contrast | `ink/bg` ≥ 15, `ink-soft/bg` ≥ 6.5, `ink-faint` **absent** from body | APCA/WCAG calculation |

**Gate:** `npm run verify` = `tsc --noEmit` → `eslint` → **`check-style-contract`** → `vite build` → `verify-contract` → `measure --all`

---

## 7 · Phases

### stage-lab

| Phase | Work | Counts as done |
|---|---|---|
| **S0** | skeleton: Vite+TS+R3F, `verify-contract`, `check-style-contract`, token import, empty canvas | `verify` green, `contract.lock.json` produced |
| **S1** | motif pipeline: line derivation + Draco/KTX2 + SVG fallback | motif GLB ≤ 1.5 MB, fallback works |
| **S2** | beat machine + **two-channel scroll** + `fonts.ready` wait | scroll 0→1, 5 beats, no FOUT |
| **S3** | engraving particles + cursor impulse + **inertia damping** | motion stops with the cursor still (criterion 9) |
| **S4** | UI: pill nav · hero · atlas list · footer + motif 4 repetitions | criteria 1 and 18 |
| **S5** | measurement + poster + 3 viewports + dark mode profile | `measure --all` within budget |
| **S6** | the remaining 4 archetypes (with `04` adaptations) | changing config changes the archetype |

### style-lab (the only touch from this plan)

| Phase | Work |
|---|---|
| **Z0** | this document (done) |
| **Z1** *(optional)* | add the 8 annual-winner rows to `docs/animasyon-referanslari.md` §2 |

`policy.json`, `gates.sh`, `playbook.md`, `styles/04-*` **do not change**.

---

## 8 · Deliberately accepted risks

| Risk | What happens | One-switch rollback |
|---|---|---|
| **Keyboard trap** | scroll lock + pin squeezes keyboard users | `a11y.escapeHatch: true` → static version |
| **Motion sensitivity** | `prefers-reduced-motion` is ignored | `a11y.respectReducedMotion: true` → poster |
| **Focus loss** | `cursor:none` + shadow DOM | `a11y.focusRing: true` → 1px `--accent`, offset 3px |
| **Performance** | 4k particles stutter on low-end devices | quality tier (4k → 1k → 0) |
| **Style drift** | as the stage grows, 04's bans get forgotten | the `check-style-contract` gate (criteria 10–19) |

The four `a11y.*` switches default to **`false`** (K2). The code path is written and tested; the gate does not
enforce it, `measure.mjs --a11y` reports it as information. The "static version" link still exists (one line of HTML).

---

## 9 · Rollback

- **stage-lab:** a new repo; if deleted, style-lab is unaffected. `git init` + first commit at the end of S0.
- **style-lab:** this plan is a single file (`docs/stage-lab-plani.md`); roll back with `git rm`. No gate was added.
- **If the contract breaks:** `verify-contract` goes red → `node kit/export-tokens.mjs --check` tells you which file drifted.

---

## 10 · Next round (proposal)

1. The `../stage-lab` skeleton (S0) — 8 files, `npm run verify` green.
2. **Motif inventory:** what is this project's single object instead of a helmet? Is it suitable for line/engraving
   derivation (closed volume, sharp edges)?
3. Brand copy: `04` wants 1 heading + 1 paragraph per screen → the copy for the 5 beats must be written **upfront**
   (the stage is built around the text, not the other way round).

---

## 11 · Implementation status (S0–S5 complete · 2026-11-09)

`../stage-lab` was created, first commit `2a48da1`. `npm run verify` is green, measurement **32/32**.

| Phase | Status | Evidence |
|---|---|---|
| S0 skeleton | ✅ | Vite 8 + React 19 + R3F 9 + TS strict · `contract.lock.json` (7 files) |
| S1 motif | ✅ | Procedural engraving seal: `motif.svg` + `parts.json`, 5 parts, hairline ratio 0.91 |
| S2 beat + scroll | ✅ | B0–B4, `fonts.ready` wait (FOUT 0), reveal `once` / scrub reversible |
| S3 dust + cursor | ✅ | 2.4k points, cursor impulse, inertia **0** in ~1 s (measured) |
| S4 UI | ✅ | Motif in 4 places: nav · canvas · atlas hairline · footer |
| S5 measurement | ✅ | `tools/measure.mjs` — shadow 0, gradient 0, radius 0, gold text 0, contrast 15.74:1 |
| S6 other archetypes | ✅ | 5/5 archetypes green in separate build+measurement (`npm run verify:archetypes`) |

### 11.1 Deliberate deviations from the plan

| # | Deviation | Rationale |
|---|---|---|
| 1 | `a11y.respectReducedMotion` + `focusRing` **on** (the plan said `false`) | §3.1 precedence: style contract > K2. `04` makes reduced-motion and the gold focus ring **mandatory**. `escapeHatch` stayed off |
| 2 | No GLB/Draco/KTX2 pipeline | The motif is procedural lines; a single source `motif-geometry.js` produces both the SVG and the `LineSegments`. `optimize-motif.mjs` kicks in once a real mesh arrives |
| 3 | **One style** extracted instead of 145 palettes (`tools/extract-tokens.mjs`) | CSS 116 KB → 15 KB. The rule holds: tokens still come from style-lab's generated output |
| 4 | No Rive and no audio | 2D micro-motion was built with CSS; `audio.enabled: false` |

### 11.2 Three real bugs the measurement caught

1. **The dust never stopped** — the force was tied to the cursor's *position*, so it kept pushing even with the cursor
   still. A direct violation of `04`'s "continuous animation" ban. Fix: the force applies only on frames where the
   cursor actually moved.
2. **The motif froze while scrolling** — `frameloop: 'demand'` with no `invalidate()` on progress change.
3. **The dust did not follow the motif** — particles were outside the `<group>` transform, so a separate calculation
   left the dust ring in place while the motif shrank. Fix: a single `lookState` + `localToWorld`/`worldToLocal`.

**Lesson:** the "stage criteria" are not only visual; had criteria 19–20 not caught these three bugs, the site would
have looked like it "works" while silently applying a banned technique.

### 11.3 "Frame production" ≠ FPS

Headless Chromium has no vsync; the measured number is frames produced per second (~180 in the measurement). It is not
real-device FPS — the report says so, and there is no "60fps" claim.

### 11.4 S6 — the other 4 archetypes (complete)

| Archetype | Reference | Mechanic | `04` adaptation |
|---|---|---|---|
| `portrait-motif` | Lando | motif + dust, cursor impulse | motion only from the cursor |
| `single-object` | Monolith | rotation = progress | **camera fixed** (C2), clip-curtain, no dust |
| `scroll-narrative` | Inkwell | narration without navigation | clip-curtain + scrub, no impulse |
| `playable-motif` | Bruno / Aurel | position via WASD | stops when keys are released (C1) |
| `kinetic-type` | Mat Voyce | letter = motif, no WebGL | 1px stroke engraving, rotates with `--stage-rot` |

**Measurement:** each archetype builds separately (`VITE_STAGE_ARCHETYPE`) and 33 criteria run. In an archetype with
no stage, the drawcall/particle criteria are `n/a` — no fake numbers are produced.

**2 design bugs found by eye (the criteria did not catch them):**

1. **The clip stayed in the middle of the story** → the seal looked half-cut. It was narrowed so the curtain opens
   while leaving the hero (p 0.02→0.20); the motif is whole once the story is entered.
2. **The `kinetic-type` letter was invisible** — the clip hid it and the fill was lost at 0.07 opacity. The clip was
   turned off and the letter became a **1px stroke engraving** (04: "no illustration, a thin engraving if needed").

**Lesson:** a criterion cannot say "the motif is visible"; only looking at the frame tells you *how much* visible.
A numeric gate and `--shot` must work together.
