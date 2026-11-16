# 71 · West African Pattern

> **In one sentence:** 8px dokuma şeritlerinin altın desen bloklarıyla kesildiği koyu zemin üzerinde, süsün yalnız bantlarda yaşadığı dokuma dili.

| | |
|---|---|
| **Feeling** | sıcak, ritmik, güçlü, törensel |
| **Best for** | zanaat/moda markası, kültür festivali vitrini, müzik/koleksiyon ürünü, yerel pazar platformu |
| **Avoid** | sağlık formu, finans uyum ekranı, 20+ satırlık yoğun tablo — desen katmanı veri okumasını yorar |
| **Difficulty** | orta (deseni bantta tutmak) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="west-african-pattern"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
West African Pattern, Batı Afrika şerit dokumasının (kente, asafo, adinkra damgaları) ekran karşılığıdır: koyu bir zemin, üstünde **8px'lik dokuma şeritleri** ve her beşinci bantta **24px'lik altın desen bloğu**. Süs ile bilgi kesin ayrılır: motif yalnız ayrılmış bantlarda (nav altı, kart üstü, ayırıcı, hero zemini) yaşar; gövde metninin arkasına hiçbir koşulda girmez. Stilin karakterini ayakta tutan tek kural bu ayrımdır.

Kazandığı şey: **ritim ve ağırlık**. 8px'lik tekrar, ekranda dokuma tezgâhının nabzını kurar; Archivo Black display ve tek altın vurgu bu ritmi törensel bir ciddiyete taşır. Feda ettiği şey: **yoğunluk ve yumuşaklık** — radius 0–2px, gölge yok; 72px bölüm ritmi veri ağır ekranlarda yer israf eder.

### What is not
- **Nordic Folk (66) değildir:** 66 açık keten zemin + madder kırmızısı + rosemaling bitkisel bandı kullanır; bu stil **koyu zemin + altın** ve **geometrik damga** (bitkisel kıvrım yok), radius 0–2px (66'da 6–10px).
- **Bohemian (30) değildir:** Bohemian deseni arka plana yayar ve organik radius kullanır; burada desen yalnız bantta, radius keskin, grain .02 (bohemian'da doku serbest).
- **Maximalism (17) değildir:** maximalism çok renk + katman yığar; burada **tek vurgu altın** ve nötr zemin var, desen katmanı %10–42 opaklıkla sınırlı.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası ve kobalt çini geometrisiyle **döşeme** kurar; bu stil **şerit dokuma** kurar (yatay bant tekrarı, döşeme modülü yok).
- **"Koyu tema + altın accent" jeneriği değildir:** accent'in işi süslemek değil, **bant ritmini kesmek**; her ekranda en az bir 24px desen bloğu görünmek zorunda.

### Where it comes from
Gana/Togo kente dokuması (ipek ve pamuk şeritlerin 8–10 cm'lik bantlar hâlinde dikilmesi), asafo bayrak aplikleri ve Akan adinkra damgaları aynı görsel grameri paylaşır: **dar tekrar + güçlü renk bloğu + sembolik damga**. Dijitalde 2020'lerde zanaat markaları ve kültür etkinlikleriyle geri döndü; nedeni ölçülebilir — desen CSS tekrarlı gradient ile kurulabildiği için yüksek çözünürlüklü görsel gerektirmez. Klişeye dönüşmemesi için korunacak detay: **8px şerit genişliğinin ve her beşinci 24px bloğun bozulmaması**.

### Recognition test in 3 seconds
1. Nav'ın hemen altında 12px yüksekliğinde tekrar eden altın/nötr dokuma bandı var.
2. Her kartın üst kenarında 8px'lik aynı bant desenini görüyorsun.
3. Başlıklar Archivo Black ile büyük harf ve çok kalın; radius yok denecek kadar keskin.
4. Ekranda tek doygun renk altın; gerisi sıcak koyu nötr skala.
5. Bir bantta 24×24px geometrik damga motifi tekrar ediyor.

## Visual signature
- **8px dokuma şeridi:** `repeating-linear-gradient(90deg, accent 0 8px, transparent 8px 16px, line 16px 24px, transparent 24px 40px)`; bant yüksekliği 8px (nav altında 12px).
- **24px desen bloğu:** her beşinci bant 24px genişliğinde altın blok; şerit içinde blok genişliği asla değişmez.
- **Adinkra damgası:** 24×24px, 2px çizgi, köşesiz; ekran başına en fazla 2 farklı damga, yalnız bant içinde.
- **Keskin geometri:** `--radius: 0px`, `--radius-lg: 2px`; hiçbir yüzeyde 2px üstü yuvarlaklık yok.
- **Archivo Black display:** 40px, büyük harf, tracking 0; alt başlıklar 26/20px aynı ailede.
- **Dokuma zebra:** tablo satırları 40px, `--surface` / `--surface-2` dönüşümlü; ilk sütunda 3px altın şerit (%35 opaklık).
- **Hover dili:** 210ms'de zemin %88'e koyulaşır ve öğe 2px sağa kayar ("atkı kayması"); görsel ölçek 1.022, gölge eklenmez.
- **Typography:** Archivo Black (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#d99a1f`; neutral scale `#17120f` → `#f3e7d3`.
- **Radius:** `0px` / `2px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Dokuma ritmi 8px: bant genişlikleri 8px ve her beşinci bant 24px desen bloğudur
2. Desen yalnız ayrılmış bantlarda (nav altı, kart üstü, ayırıcı); metin arkasında asla
3. Tek vurgu altın; desen katmanı %10–35 opaklıkta, bilgi taşımaz
4. Display Archivo Black, yalnız büyük harf ve 40px üstü
5. Ekran başına en fazla 2 damga motifi (24×24), tekrar eden şerit içinde
6. Radius en fazla 2px; gölge yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#17120f` | page background | as a card background |
| `--bg-2` | `#1e1713` | partition divider floor, table top | button background |
| `--surface` | `#241b16` | kart, input, modal | full-page background |
| `--surface-2` | `#2d221b` | passive chip, hover background | primary button |
| `--ink` | `#f3e7d3` | title, body, icon | large background |
| `--ink-soft` | `#c0ae93` | secondary text, description | — |
| `--ink-faint` | `#8d7f68` | decorative label, separator text | interactive text |
| `--accent` | `#d99a1f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1c1206` | text above accent | non-accent background |
| `--line` | `rgba(243,231,211,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.21:1** · `ink-soft/bg` **8.6:1** · `ink-faint/bg` **4.75:1 (decorative)** · `accent-ink/accent` **7.55:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 40px (mobile 27px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Desenli zemini gövde metninin arkasına koymak.
- Hazır ikon seti, emoji veya "etnik" stok illüstrasyon taklidi.
- Gradient, yumuşak gölge, cam yüzey, blur.
- Üçüncü bir doygun renk eklemek (altın + nötr zemin; durum renkleri hariç).
- El yazısı/script font; italik; 700+ gövde ağırlığı.
- Motifi rastgele serpiştirmek — her bant kendi tekrarına sahip olmalı.
- Uydurma kültürel sembol adı; eksik içerik `{{pattern}}` gibi işaretli yer tutucu olur.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 0px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 0px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 0px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.6:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 8/4 şerit bölünmesi, hero zemininde dikey dokuma, 40px Archivo Black | `shots/01-page.png` |
| Dashboard | düşük | 4 kart (üst bantlı) + çubuk grafik | `shots/01-page.png` |
| Form | düşük | 40px alanlar, sol şerit, tek kolon | `shots/01-page.png` |
| Liste / tablo | orta | 40px dokuma zebra, ilk sütunda altın şerit | `shots/01-page.png` |
| Boş durum | orta | boş bant + tek damga + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: koleksiyon → desen → ilk ürün | `shots/01-page.png` |
| Pricing | orta | 3 plan kartı üst bantlı, fiyat mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar kart, 40px alanlar, bant yalnız üstte | `shots/01-page.png` |
| Modal | orta | 2px altın çerçeve, üstte bant, 24px damga | `shots/01-page.png` |
| Bildirim / toast | orta | sol 8px bant, tek satır, 4000ms | `shots/01-page.png` |
| Hata | düşük | `--danger` sol şerit + damga; desen susturulur | `shots/01-page.png` |
| Profil / ayar | orta | tercih listesi 40px satır, dokuma zebra | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.21:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.6:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.75:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.55:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.6:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.4 | ≥ 60 target | thin text |

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
| Ekran "etnik desen kaplaması" gibi duruyor | desen gövde arkasına yayılmış | deseni bantlara hapset, opaklığı %10–42'de tut |
| Bant ritmi bozuk görünüyor | 8px/24px oranı bozulmuş | tek gradient formülü kullan, genişliği sabitle |
| Kart "yüzüyor" | gölge veya 8px radius eklenmiş | gölgeyi sil, radius'u 0–2px'e indir |
| Altın her yerde | accent üçüncü işi üstlenmiş | accent'i bant + birincil eylemle sınırla |
| Tipografi desenle yarışıyor | display 20px altına inmiş veya 700 gövde | display 20px taban, gövde 400 |
| Koyu modda desen patlıyor | bant opaklığı koyuda artırılmış | koyuda .34'e düşür |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `nordic-folk` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japanese-ma` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.metmuseum.org/toah/hd/kent/hd_kent.htm | The Metropolitan Museum · Kente cloth — kente şerit mantığı ve renk blokları |
| https://africa.si.edu/exhibits/adinkra/ | Smithsonian NMAfA · Adinkra symbols — adinkra damga geometrisi ve tekrar oranı |
| https://www.cooperhewitt.org/tag/african-textiles/ | Cooper Hewitt · African textiles — bant genişliği ritmi, tekrar oranı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — desen katmanı ile metin ayrımı |

## AI brief

```text
Stil: West African Pattern (styles/71-west-african-pattern/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="west-african-pattern"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black, büyük harf) başlıkta, --font-body (Jost) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 0px/2px; gölge YOK; katman ayrımı 1px --line + dokuma bandı.
Bant: 8px şerit, her beşinci bant 24px altın blok; yalnız nav altı, kart üstü, ayırıcı ve hero zemininde.
Bileşen: "Bileşen reçeteleri" birebir; buton 44px, input 40px sol şeritli, tablo satırı 40px dokuma zebra.
Hareket: enter 0.5s cubic-bezier(.7,.15,.3,1) 22px / stagger 0.055; scroll top 84% 0.58s 16px once:true;
         hover 210ms scale 1.022 + translateX(2px); pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (desen gövde arkasında, hazır ikon, gölge).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: West African Pattern (west-african-pattern) · family: Cultural & Regional (66–75)
Token: --bg #17120f · --surface #241b16 · --ink #f3e7d3 · --accent #d99a1f · --line rgba(243,231,211,.16)
Radius: 0px / 2px · Typography: Archivo Black / Jost / IBM Plex Mono
Required: Dokuma ritmi 8px: bant genişlikleri 8px ve her beşinci bant 24px desen bloğudur · Desen yalnız ayrılmış bantlarda (nav altı, kart üstü, ayırıcı); metin arkasında asla · Tek vurgu altın; desen katmanı %10–35 opaklıkta, bilgi taşımaz
Banned: Desenli zemini gövde metninin arkasına koymak. · Hazır ikon seti, emoji veya "etnik" stok illüstrasyon taklidi. · Gradient, yumuşak gölge, cam yüzey, blur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="west-african-pattern"] {
  --bg: #17120f; --bg-2: #1e1713;
  --surface: #241b16; --surface-2: #2d221b;
  --ink: #f3e7d3; --ink-soft: #c0ae93; --ink-faint: #8d7f68;
  --accent: #d99a1f; --accent-ink: #1c1206;
  --line: rgba(243,231,211,.16);
  --danger: #e73d2d;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
