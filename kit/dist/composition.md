# Composition report

Production: `node kit/composition-report.mjs` source: `kit/render/layouts.json` + `styles/*/tokens.json`

> Why is there this report: the catalog varied the **color** of 145 styles, not the **skeleton**.
> Measure: hero|nav fingerprint. Target: uniformity index (share of most populated combination) **Below 30%**.

## 1 · Summary

| Measure | Value | Target |
|---|---|---|
| Style | 251 | — |
| Distinct hero|nav fingerprints | 16 | ≥ 12 |
| **Uniformity index** (busiest fingerprint) | 37/251 = %15 | <30% |
| Busiest single hero | split = 73/251 = %29 | <35% |
| Average distinct heroes per family | 3.1 | ≥ 2 |
| Archetypes in use | 8 hero · 5 nav · 3 densities | all |

## 2 · Hero arketipleri

| Archetype | When | Style | Examples |
|---|---|---|---|
| `split` · Split | copy on the left, product image on the right; balanced, neutral default | 73 (%29) | `glassmorphism`, `liquid-glass`, `frutiger-aero` |
| `split-reverse` · Split (ters) | image on left, copy on right; breaks the flow of reading, rhythm in brave families | 25 (%10) | `neo-brutalism`, `anti-design`, `acid-graphics` |
| `centered` · centered | single message + wide visual band; quiet, infrequent brands | 16 (%6) | `minimalism`, `japandi`, `wabi-sabi` |
| `type` · Pure typography | no visual; the title screen itself. Poster/magazine/agency display | 28 (%11) | `swiss-design`, `editorial-design`, `scrapbook` |
| `fullbleed` · full edge media | media bleeds to the left edge (no card), copy breathes on the right; showcase/luxury | 30 (%12) | `luxury-typography`, `art-deco`, `victorian` |
| `product` · product display | The copy is small at the top, the giant product panel is at the bottom; vehicle claim | 39 (%16) | `bento-grid`, `terminal-ui`, `telemetry-grid` |
| `index` · index grid | copy narrow on left, 2×2 job/record grid on right; portfolio, archive | 20 (%8) | `memphis`, `atlas-console`, `punk-fanzine` |
| `sticky` · sticky narrative | sticky copy on left, scrolling 3-panel story strip on right; long page | 20 (%8) | `constructivism`, `ai-native-mesh`, `grand-tourer-oxblood` |

## 3 · Nav arketipleri

| Archetype | When | Style | Examples |
|---|---|---|---|
| `inline` · inline | brand + links + two buttons; neutral default | 87 (%35) | `swiss-design`, `editorial-design`, `glassmorphism` |
| `pill` · floating pill | Links in the middle, disconnected from the page; surface/glass and showcase families | 43 (%17) | `luxury-typography`, `japandi`, `wabi-sabi` |
| `split` · divided | brand on the left, links on the right, single text CTA; editorial and typographic | 71 (%28) | `minimalism`, `claymorphism`, `memphis` |
| `utility` · auxiliary line | thin helper row at top, main navigation at bottom; enterprise, data, industry | 31 (%12) | `bento-grid`, `anti-design`, `acid-graphics` |
| `rail` · Yan ray | vertical navigation rail on the left; application feel, command palette, tool families | 19 (%8) | `telemetry-grid`, `experiment-split`, `vitals-triage` |

## 4 · Density

| Density | When | Style |
|---|---|---|
| `sparse` · rare | ≤5 items per screen, ample white space | 80 (%32) |
| `balanced` · balanced | standard information density | 77 (%31) |
| `dense` · intense | many items, small space, data sense | 94 (%37) |

## 5 · Family-based diversity

| Family | Style | Different hero | Different fingerprint | Dominant hero |
|---|---|---|---|---|
| Minimal | 7 | 4 | 5 | `centered` (3) |
| Surface | 5 | 2 | 3 | `centered` (3) |
| Bold | 6 | 2 | 3 | `split-reverse` (5) |
| Retro | 9 | 3 | 4 | `split-reverse` (6) |
| Art | 7 | 3 | 4 | `split` (5) |
| Geometric | 2 | 2 | 2 | `split` (1) |
| Typographic | 1 | 1 | 1 | `type` (1) |
| Organic | 1 | 1 | 1 | `centered` (1) |
| New Wave | 2 | 2 | 2 | `sticky` (1) |
| Timeless | 4 | 2 | 3 | `fullbleed` (2) |
| Technical | 1 | 1 | 1 | `product` (1) |
| Data & Indicator | 10 | 3 | 4 | `product` (8) |
| Industrial | 10 | 3 | 5 | `product` (5) |
| Cultural & Regional | 10 | 4 | 5 | `split` (7) |
| Nature & Organic | 10 | 3 | 4 | `split` (7) |
| Publication & Typography | 10 | 3 | 4 | `type` (8) |
| Motion & Optics | 10 | 3 | 4 | `sticky` (8) |
| Interactive | 10 | 4 | 8 | `product` (4) |
| Playful | 10 | 4 | 7 | `split-reverse` (3) |
| Material & Luxury | 10 | 3 | 4 | `fullbleed` (8) |
| Experimental & Future | 10 | 3 | 5 | `split` (6) |
| Stage & Prestige | 6 | 5 | 5 | `fullbleed` (2) |
| Games & Interaction | 20 | 4 | 6 | `split` (13) |
| Operations & Data | 10 | 3 | 4 | `product` (8) |
| Commerce & Showcase | 10 | 3 | 4 | `index` (6) |
| Culture & Publishing | 10 | 3 | 6 | `type` (5) |
| Health & Science | 10 | 3 | 4 | `split` (8) |
| Learning & Gamification | 10 | 3 | 4 | `split` (8) |
| Material & Craft | 10 | 3 | 4 | `fullbleed` (8) |
| Typography Experiments | 10 | 3 | 4 | `type` (8) |
| Future & Speculative | 10 | 5 | 7 | `split` (4) |

## 6 · Parmak izleri

| hero|nav | Style | Share |
|---|---|---|
| `split|split` | 37 | %15 |
| `split|inline` | 36 | %14 |
| `product|utility` | 20 | %8 |
| `product|rail` | 19 | %8 |
| `fullbleed|pill` | 17 | %7 |
| `type|split` | 16 | %6 |
| `split-reverse|inline` | 14 | %6 |
| `fullbleed|inline` | 13 | %5 |
| `type|inline` | 12 | %5 |
| `sticky|inline` | 12 | %5 |
| `split-reverse|utility` | 11 | %4 |
| `index|split` | 11 | %4 |
| `centered|pill` | 9 | %4 |
| `index|pill` | 9 | %4 |
| `sticky|pill` | 8 | %3 |
| `centered|split` | 7 | %3 |

## 7 · Remaining axes (not yet measured)

| Axis | Status | Plan |
|---|---|---|
| Content suite (industry) | single fictional SaaS + real estate | P1:`kit/content/*.json`, `tokens.json → industries[]`|
| Visual layer | 0`<img>`(CSS motif only) | P2:`kit/images/` + `imagery.treatment`|
| Section library | none | P3:`kit/sections.html` + 12 arketip |
| Flow strips | single frame | P4: onboarding/checkout/invite flows |
