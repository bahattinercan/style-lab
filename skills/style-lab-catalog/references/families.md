# Family bands (31 bands)

The **single source** of the band table is `kit/families.json`: 1–251 contiguous and non-overlapping.
`kit/build-gallery.mjs`, `kit/report.mjs`, `kit/build-catalog-doc.mjs` and `kit/apply-fragments.mjs` read this file;
`node kit/apply-fragments.mjs --check` verifies the integrity of the ranges.

The example slugs and the "3 typical uses" columns are this skill's interpretation; the band's name, range and
style count come from `kit/families.json` + the `styles/` folders.
Single-style bands are written as a single number (37 = 37–37 · 38 = 38–38 · 45 = 45–45).

| Band | Family | Styles | Example slugs | 3 typical uses |
|---|---|---|---|---|
| 01–07 | Plain | 7 | `minimalism` · `swiss-design` · `japandi` | corporate SaaS panel · long read/article · calm e-commerce |
| 08–12 | Surface | 5 | `glassmorphism` · `neumorphism` · `aurora-ui` | mobile settings screen · media player layer · gamified onboarding |
| 13–18 | Bold | 6 | `neo-brutalism` · `memphis` · `dopamine-ui` | event poster · young brand launch · sale/campaign page |
| 19–27 | Retro | 9 | `y2k` · `synthwave` · `art-deco` | music/game storefront · period campaign · exhibition poster |
| 28–34 | Artistic | 7 | `surrealism` · `scrapbook` · `dark-academia` | culture-arts project · personal portfolio · book/publication promo |
| 35–36 | Geometric | 2 | `bauhaus` · `constructivism` | cultural institution poster · architecture studio · conference program |
| 37 | Typographic | 1 | `kinetic-type` | typography showcase · font/agency presentation · conference home page |
| 38 | Organic | 1 | `organic-bio` | wellness/health product · sustainable brand · plant/food content |
| 39–40 | New Wave | 2 | `ai-native-mesh` · `scandinavian-dark` | AI product launch · long-session productivity tool · calm content reading |
| 41–44 | Timeless | 4 | `grand-tourer` · `utility` | luxury automotive/watch · corporate form and settings · technical documentation |
| 45 | Technical | 1 | `terminal-ui` | developer tool · log/console screen · CLI documentation |
| 46–55 | Data & Metrics | 10 | `telemetry-grid` · `trading-desk` · `vitals-triage` | operations panel · financial trading screen · patient/vitals monitoring |
| 56–65 | Industrial | 10 | `blueprint-drawing` · `mes-production-line` · `cockpit-avionics` | engineering drawing & site safety · MES/warehouse flow · energy (SCADA) & cockpit panel |
| 66–75 | Cultural & Regional | 10 | `nordic-folk` · `levant-calligraphy` · `persian-miniature` | museum/exhibition catalog · local craft brand · city/tourism promotion |
| 76–85 | Nature & Organic | 10 | `biophilic-botanical` · `topographic-terrain` · `coral-reef` | climate/environment project · outdoor brand · map/exploration product |
| 86–95 | Publishing & Typography | 10 | `literary-hardcover` · `broadsheet-daily` · `encyclopedia` | publisher/book reading · catalog & product list · academic reference |
| 96–105 | Motion & Optics | 10 | `kinetic-marquee` · `depth-parallax` · `holographic-layer` | brand manifesto hero · storefront/portfolio · launch teaser |
| 106–115 | Interaction | 10 | `command-palette` · `timeline-editor` · `kanban-flow` | tool/IDE interface · timeline editor · task board |
| 116–125 | Playful | 10 | `kids-playground` · `celebration-card` · `collectible-card` | kids/play product · festival and celebration flow · collection/storytelling |
| 126–135 | Material & Luxury | 10 | `marble-vein` · `leather-craft` · `letterpress-print` | jewelry/fashion storefront · boutique service · premium packaging |
| 136–145 | Experimental & Future | 10 | `speculative-scifi` · `agent-orchestration` · `quantum-lab` | concept/launch experiment · AI agent and data volume showcase · sci-fi/future narrative |
| 146–151 | Stage & Prestige | 6 | `noir-estate` · `agency-portfolio` · `product-launch` · `boutique-hotel` · `lookbook-editorial` · `dark-dashboard` | cinematic real estate/prestige · agency showcase · product launch · boutique hotel · editorial lookbook · dark product panel |
| 152–171 | Game & Interaction | 20 | `game-hud` · `game-sci-fi-cockpit` · `game-card-tcg` | in-game HUD/menu · esports/tournament page · card/collection showcase |
| 172–181 | Operations & Data | 10 | `incident-response` · `finops-cost` · `slo-budget` | incident response console · cost/reliability board · audit report |
| 182–191 | Commerce & Storefront | 10 | `grocery-delivery` · `luxury-atelier` · `electronics-spec` | grocery/delivery · boutique luxury storefront · technical product spec |
| 192–201 | Culture & Publishing | 10 | `museum-exhibition` · `film-festival` · `library-archive` | museum/exhibition · festival program · archive/catalog |
| 202–211 | Health & Science | 10 | `clinical-trial` · `mental-wellness` · `genomics-lab` | clinical protocol · appointment/form · laboratory panel |
| 212–221 | Learning & Gamification | 10 | `language-app` · `skill-tree` · `exam-prep` | language/code learning · curriculum map · exam preparation |
| 222–231 | Material & Craft | 10 | `terrazzo-stone` · `linocut-print` · `raw-steel` | material catalog · print workshop · industrial product |
| 232–241 | Typography Experiments | 10 | `variable-weight` · `justified-book` · `uppercase-only` | agency showcase · publisher page · cultural identity |
| 242–251 | Future & Speculative | 10 | `agent-console` · `quantum-dashboard` · `climate-model` | agent/automation console · model monitoring · scenario report |

Total: **31 bands · 251 styles**.

## Two labels, two jobs (do not mix them up)

| Field | Where | What it is for |
|---|---|---|
| **Band** (`kit/families.json`) | band table, gallery, report, fragment merging | Selection and classification. 21 bands, 1–145 contiguous. |
| **Motion family** (`tokens.json → motion.family`) | the `kit/motion-check.mjs` variety gate | Animation signature comparison. **Identical to the band name** (21 families); equality is verified by `check-schema` + the evidence command below. |

Practical consequence: band and motion family **carry the same name** (single source `kit/families.json`). In a new
style write the band name into the `motion.family` field; if you write something different, `node kit/check-schema.mjs`
and the evidence command below will warn/error.

## Verify the table is current

```bash
# band table ↔ catalog agreement (name + range + count)
node -e "const fs=require('fs');const f=require('./kit/families.json').families;const s=fs.readdirSync('styles').filter(x=>fs.statSync('styles/'+x).isDirectory()).map(x=>parseInt(x,10)).filter(Number.isFinite);let ok=true;for(const b of f){const n=s.filter(x=>x>=b.from&&x<=b.to).length;console.log(String(b.from).padStart(3)+'-'+String(b.to).padStart(3),b.name.padEnd(22),n);if(!n)ok=false}console.log(ok?'band tablosu tutarlı':'BOŞ BAND VAR')"

# fragments in sync with the kit files + range integrity
node kit/apply-fragments.mjs --check
```

## How to choose a band

Intent → the bands to look at first (pick 2–3 candidates, then narrow to a single style):

| Need | Bands to look at first |
|---|---|
| Calm, neutral, corporate | Plain (01–07) · New Wave (39–40) |
| Reading/long text | Plain (01–07) · Publishing & Typography (86–95) |
| Data/operations density | Data & Metrics (46–55) · Industrial (56–65) |
| Field/production use | Industrial (56–65) · Data & Metrics (46–55) |
| High energy, campaign | Bold (13–18) · Playful (116–125) |
| Cultural identity, craft | Cultural & Regional (66–75) · Material & Luxury (126–135) |
| Nature/climate narrative | Nature & Organic (76–85) · Organic (38) |
| Storefront, brand manifesto | Motion & Optics (96–105) · Bold (13–18) |
| Typography-led showcase | Typographic (37) · Publishing & Typography (86–95) |
| Tool/productivity interface | Interaction (106–115) · Technical (45) |
| Concept/experiment, future narrative | Experimental & Future (136–145) |

## Selection rules (dominant + garnish)

1. **One dominant style.** The screen's color, typography, radius and motion all come from a single style.
2. **At most 1 garnish.** The garnish lives only in its own `data-style` subtree and does **not** override the
   dominant style's variables.
3. Garnish candidate: the dominant style's `tokens.json → neighbors.compatible` list.
   A style in `neighbors.forbidden` conflicts with the identity — do not use it.
   `kit/check-schema.mjs` verifies that these slugs exist in the catalog.
4. Two styles from the same band are not placed side by side (signature and identity are too close); choose from
   different bands.
5. One sentence of justification: "Dominant X because <measurable reason>; garnish Y because <single layer>".

## Evidence: band = motion.family (single source)

```bash
# does every style's band match tokens.json motion.family?
node -e "const fs=require('fs');const F=require('./kit/families.json').families;const band=n=>F.find(f=>n>=f.from&&n<=f.to)?.name;let bad=[];for(const d of fs.readdirSync('styles').filter(x=>fs.statSync('styles/'+x).isDirectory())){const t=JSON.parse(fs.readFileSync('styles/'+d+'/tokens.json','utf8'));const b=band(parseInt(d,10));if(t.motion?.family!==b)bad.push(d+' :: '+(t.motion?.family||'-')+' ≠ '+b)}console.log(bad.length?'UYUMSUZ '+bad.length+'\n'+bad.join('\n'):'tutarlı: band = motion.family')"

# gates
node kit/motion-check.mjs | tail -3   # 21 families, 0 intra-family copies, signature 145/145
node kit/check-schema.mjs | tail -2   # 0 errors
```
