# 78 · Topografya & Arazi

> **In one sentence:** Araziyi pafta gibi okuyan arayüz: sıcak harita kâğıdı zemin, eş yükselti halkaları, 1px pafta çerçevesi ve her ölçünün birim taşıdığı düz, gölgesiz bilgi yüzeyi.

| | |
|---|---|
| **Feeling** | ölçülü, yere bağlı, keşifçi, kesin |
| **Best for** | arazi/harita ürünü, saha planlama, jeolojik-çevresel rapor, açık hava rota uygulaması |
| **Avoid** | lüks vitrin, eğlence uygulaması, hızlı tüketim landing'i — pafta dili burada "teknik" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="topographic-terrain"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Topografya & Arazi, ekranı bir **harita paftası** gibi kurar: sıcak bej kâğıt zemin, zeminde iki merkezden yayılan eş yükselti halkaları, her kartta 1px dış çerçeve + 6px iç çerçeve, ölçüler mono ve birimli (m, km, mm/yıl). Gölgeyi tamamen bırakır; karşılığında **okunabilir katman hiyerarşisi** ve arazi metaforunun doğal yönlendirmesini kazanır.

Kurucu kararları üç tanedir. Birincisi **gölge yoktur**: katman ayrımı 1px çerçeve + iç boşlukla kurulur, çünkü pafta düzdür. İkincisi **kontur anlam taşır**: her halka bir yükseklik değerine karşılık gelir; süs için halka çizmek stili bozar. Üçüncüsü **etiket mono ve büyük harftir**: pafta kenar bilgisi gibi, `.12em` tracking.

Bedeli: sıcak bej zemin doygun renkleri taşımaz. Bu yüzden tek vurgu (pas turuncusu) yalnız ölçüm ve rota için yanar.

### What is not
- **Blueprint Çizimi (56) değildir:** 56 soğuk cyanotype mavi + 64px çizim ızgarası kullanır; 78 sıcak bej kâğıt + **radyal kontur halkaları** kullanır.
- **Wabi-Sabi (07) değildir:** 07 kırık hiza ve düşük kontrastla "eskimiş" görünür; 78'de hiza kesin, `ink-soft/bg` **6.58:1**.
- **Utility (44) değildir:** 44 radius 8/12px ve mavi tek vurgudur; 78 radius 2/6px, pas turuncusu ve kontur imzası.
- **Scrapbook (31) değildir:** 31 kâğıt dokusunu kolaj için kullanır (eğik, dağınık); 78 kâğıdı ızgara disipliniyle kullanır.

### Where it comes from
USGS/ordinance survey pafta geleneğinden: eş yükselti aralığı, ölçek çubuğu, kenar bilgisi. Bugün geri dönüyor çünkü harita tabanlı ürünler (rota, arazi, afet) veri yoğunluğunu "katman" metaforuyla anlatmak zorunda; klişeye dönmemesi için korunacak detay **konturun anlam taşıması** ve **gölgenin hiç kullanılmaması**.

### Recognition test in 3 seconds
1. Zemin sıcak bej kâğıt; üstünde eşmerkezli ince halkalar seçilebiliyor.
2. Hiçbir kartta gölge yok; her yüzey 1px çerçeve + 6px iç çerçeve.
3. Köşeler keskin: 2px (kontrol) / 6px (kart); hap radius yok.
4. Etiketler mono, büyük harf, geniş tracking; değerler birimli (m, km, %).
5. Buton 40px ve mono büyük harf; vurgu rengi tek: pas turuncusu.

## Visual signature
- **Kontur halkaları:** iki `repeating-radial-gradient` (18px ve 42px aralık) — biri accent %26, biri ink %12; zemin ve hero görselinde.
- **Pafta çerçevesi:** kart `::after` ile `inset: 6px`, 1px ink %9; dış çerçeve 1px `--line`.
- **Ölçek çubuğu:** nav altında 3px yüksekliğinde hairline deseni (`inset 0 -3px 0 -2px var(--line)`).
- **Mono etiket:** 10px, `.12em`, uppercase; değer + birim aynı satırda.
- **Radius disiplini:** 2px kontrol, 6px kart — 8px üstü yok.
- **Gölgesizlik:** `--shadow: none`; yüzen katman accent 1px çerçeveyle ayrılır.
- **Hareket imzası:** 480ms `cubic-bezier(.5,.05,.3,1)`, 32px — pafta "oturur", yay yapmaz.
- **Typography:** Space Grotesk (display) + Jost (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#a34f24`; neutral scale `#ece6d8` → `#241f18`.
- **Radius:** `2px` / `6px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Eş yükselti (kontur) çizgisi imza öğedir: en az bir bölümde 1px halka dizisi görünür
2. Zemin harita kâğıdı (--bg sıcak bej); saf beyaz yok
3. Gölge yok; katman ayrımı 1px çerçeve + 6px iç boşluk
4. Radius 2px kontrol / 6px kart; 8px üstü yasak
5. Her veri bloğu birim/ölçek taşır (m, km, %, mm/yıl)
6. Etiketler mono büyük harf + .12em tracking

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ece6d8` | page background | as a card background |
| `--bg-2` | `#e2dac9` | partition divider floor, table top | button background |
| `--surface` | `#f7f3e8` | kart, input, modal | full-page background |
| `--surface-2` | `#f0eadc` | passive chip, hover background | primary button |
| `--ink` | `#241f18` | title, body, icon | large background |
| `--ink-soft` | `#574e3e` | secondary text, description | — |
| `--ink-faint` | `#857b64` | decorative label, separator text | interactive text |
| `--accent` | `#a34f24` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff8ef` | text above accent | non-accent background |
| `--line` | `rgba(36,31,24,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.14:1** · `ink-soft/bg` **6.58:1** · `ink-faint/bg` **3.37:1 (decorative)** · `accent-ink/accent` **5.38:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 46px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Yumuşak büyük gölge, cam, gradyan patlaması.
- 12px üstü radius, hap buton.
- Serif display, italik.
- Harita dışı doygun renk (turkuaz, mor, neon yeşil).
- Emoji ve dolu renkli ikon.
- Anlam taşımayan süs konturu.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 2px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 2px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 2px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.12:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + ölçü etiketleri, sağda kontur paftası | `shots/01-page.png` |
| Dashboard | düşük | pafta ızgarası + lejant; gölge yok | `shots/01-page.png` |
| Form | düşük | 40px input, mono etiket sağda; birim seçici chip | `shots/01-page.png` |
| Liste / tablo | düşük | 38px satır, tabular değer, sağa dayalı birim | `shots/01-page.png` |
| Boş durum | orta | boş pafta: iç çerçeve + "veri yok" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: bölge seç → katman ekle → ölçek belirle | `shots/01-page.png` |
| Pricing | orta | üç pafta; öne çıkan pafta accent iç çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | kontur yok; yalnız çerçeve ve tek CTA | `shots/01-page.png` |
| Modal | orta | accent 1px çerçeve + yükseklik etiketi | `shots/01-page.png` |
| Bildirim / toast | orta | sağ-alt, 2px accent ölçü çizgisi | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + mono not; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | lejant düzeni: sol etiket, sağ değer | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.14:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.58:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.37:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.38:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.12:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 88.7 | ≥ 60 target | thin text |

- `--ink-faint` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. prefers-reduced-motion and prefers-contrast are supported.

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

| Symptom | Cause | Fix |
| --- | --- | --- |
| "Kâğıt hissi" kayboluyor | zemin saf beyaz | `--bg` sıcak bej kullan |
| Hiyerarşi kayboluyor | her yüzey aynı çerçeve | iç çerçeveyi (6px inset) ekle, accent'i karara ayır |
| Kontur süs gibi | her bölüme halka eklenmiş | konturu tek bölümde ve değerle kullan |
| Pafta "kirli" | grain %4 üstü + fotoğraf dokusu | grain sabit, fotoğrafı düşük doygunlukta tut |
| Mobilde sıkışık | gutter 16px korunmuş | 768 altı 12px, iç çerçeve 4px |
| Okunmayan lejant | `--ink-faint` metin | lejant değeri `--ink-soft` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `blueprint-drawing` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Topographic_map | Topographic map — eş yükselti aralığı ve etiketleme |
| https://en.wikipedia.org/wiki/Contour_line | Contour line — kontur sıklığı ve diklik okuma |
| https://www.usgs.gov/programs/national-geospatial-program/topographic-maps | USGS · topo map symbols — sembol ve ölçek çubuğu sözlüğü |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — bej zemin üstü metin kontrastı |

## AI brief

```text
Stil: Topografya & Arazi (styles/78-topographic-terrain/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="topographic-terrain"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg harita kâğıdı + iki repeating-radial-gradient kontur halkası (18px accent %26, 42px ink %12).
Tipografi: --font-display Space Grotesk 46/30/20 (500, .01em); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10px etiket (.12em, uppercase).
Yüzey: gölge YOK; 1px var(--line) dış çerçeve + ::after inset 6px 1px ink %9 iç çerçeve.
  Radius 2px kontrol, 6px kart. Yüzen katman 1px accent çerçeve.
Renk: tek pas turuncusu accent #a34f24; lejant durumları metinle.
  ink/bg 13.14:1, ink-soft/bg 6.58:1, accent-ink/accent 5.38:1, ink-faint/bg 3.37:1 (kontur/not).
Bileşen: buton 40px mono uppercase; input 40px; chip 20px; odak 2px accent + 2px offset.
Hareket: enter 480ms cubic-bezier(.5,.05,.3,1) 32px stagger .05; scroll top 75% 520ms 34px once;
  pin scrub 0.7 (+130%, ekran başına 1); hover 150ms görsel 1.006. prefers-reduced-motion zorunlu.
Yasak: gölge, cam, 12px üstü radius, serif, italik, harita dışı doygun renk, süs konturu.
Çıktı: bileşen kodu + tek paragraf not (kontur halkasını ve iç çerçeveyi nereye koydun).

Style: Topografya & Arazi (topographic-terrain) · family: Nature & Organic (76–85)
Token: --bg #ece6d8 · --surface #f7f3e8 · --ink #241f18 · --accent #a34f24 · --line rgba(36,31,24,.16)
Radius: 2px / 6px · Typography: Space Grotesk / Jost / Share Tech Mono
Required: Eş yükselti (kontur) çizgisi imza öğedir: en az bir bölümde 1px halka dizisi görünür · Zemin harita kâğıdı (--bg sıcak bej); saf beyaz yok · Gölge yok; katman ayrımı 1px çerçeve + 6px iç boşluk
Banned: Yumuşak büyük gölge, cam, gradyan patlaması. · 12px üstü radius, hap buton. · Serif display, italik.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="topographic-terrain"] {
  --bg: #ece6d8; --bg-2: #e2dac9;
  --surface: #f7f3e8; --surface-2: #f0eadc;
  --ink: #241f18; --ink-soft: #574e3e; --ink-faint: #857b64;
  --accent: #a34f24; --accent-ink: #fff8ef;
  --line: rgba(36,31,24,.16);
  --danger: #cc1c11;
  --danger-ink: #ffffff;
  --ok: #007830;
  --ok-ink: #ffffff;
  --warn: #ab4b00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 0;
}
```
