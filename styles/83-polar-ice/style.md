# 83 · Polar Ice

> **In one sentence:** Buz plakası gibi keskin, yüksek anahtarlı bir zeminde her ölçümün etiket-değer-birim üçlüsüyle okunduğu kutup veri arayüzü.

| | |
|---|---|
| **Feeling** | soğuk, keskin, sessiz, ölçülü |
| **Best for** | iklim/buzul verisi, kutup istasyonu paneli, sensör & eşik izleme, bilimsel rapor |
| **Avoid** | sıcak marka deneyimi, etkinlik/oyun, duygusal onboarding — burada "soğuk" değil "mesafeli" olur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="polar-ice"]` |
| **Composition** | `split` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Polar Ice, arayüzü **buz plakası** gibi kurar: her panel ince bir çizgiyle ayrılmış, neredeyse gölgesiz bir plaka; içindeki her ölçüm etiket + değer + birim üçlüsü olarak durur. Zemin yüksek anahtardır (high-key) — neredeyse beyaz, soğuk mavi bir buz yüzeyi.

Üç kurucu karar: (1) **iki radius kuralı** — panel 10px, iç ölçüm kutusu 2px; arada değer yok, bu ikilik "plaka içinde plaka" hissini kurar; (2) **gölgesizlik** — ayrım 1px çizgi + 2px ton; gölge yalnız yüzen katmanda, buz da gölge yapmaz; (3) **keskin hareket** — giriş 320ms, `cubic-bezier(.15,1,.3,1)`: ani kırılma, hemen oturma; buz esnemez, yay yok.

Bedeli: düşük kontrastlı bir zemin üzerinde ince çizgi çok şey taşır; çizgi kalınlığı 2px'e çıkarsa dil "tablo"ya döner. 13px altı metin yasak.

### What is not
- **Glassmorphism (08) değildir:** cam/blur ve renkli ışık kırılması kullanır; Polar Ice'te `--blur: 0`, yüzeyler opak ve yalnız çizgiyle ayrılır.
- **Utility (44) değildir:** Utility genel ürün arayüzüdür, mavi accent ve 680px ölçüyle çalışır; burada buz mavisi accent, iki radius kuralı ve ölçüm üçlüsü vardır.
- **Frutiger Aero (25) değildir:** aero parlak cam, gradyan ve yuvarlak formlarla kurulur; Polar Ice mat, keskin ve gölgesizdir.
- **Lab Instrument (50) değildir:** 50 mikroskop/ölçüm cihazı panelidir ve Michroma ile kurulur; 83 kutup verisi dilidir, Space Grotesk + Space Mono kullanır.

### Where it comes from
Kutup araştırma istasyonlarının veri panolarından ve buz çekirdeği (ice core) raporlarından: sıcaklık, kalınlık, erime, çatlak; sabit sütunlu ölçüm tabloları. Bugün yeniden kullanılmasının nedeni: iklim verisi sunumu çoğu zaman "kurumsal rapor" estetiğine sıkışıyor; yüksek anahtar, soğuk ve sessiz bir dil verinin kendisini öne çıkarıyor. Klişeye dönüşmemesi için korunacak detay: **iki radius kuralı** ve cam/blur yasağı.

### Recognition test in 3 seconds
1. Zemin neredeyse beyaz-soğuk mavi; paneller ince 1px çizgiyle ayrılmış, gölge yok.
2. Panel köşesi 10px, iç kutular 2px — iki radius dışında değer yok.
3. Her ölçümde üstte 10px mono büyük harf etiket, yanda mono değer, sabit birim sütunu.
4. Accent buz mavisi; sıcak renk yalnız uyarı/hata durumunda.
5. Frost dokusu zeminin tamamında çok hafif; hiçbir yüzeyde parlama/cam efekti yok.

## Visual signature
- **İki radius:** panel/kart 10px, iç ölçüm kutusu/input 2px; buton 2px. Arada değer yok.
- **Gölgesiz plaka:** `1px solid var(--line)` + 2px açık ton; gölge yalnız modal/menüde.
- **Ölçüm üçlüsü:** etiket 10px `Space Mono` büyük harf `0.2em`, değer mono sağa hizalı, birim sabit sütunda.
- **Buz halkası:** seçili panel/aktif ölçüm `--shadow-hard` = 1px buz mavisi halka (gölge değil).
- **Kristal ızgara:** hero görselinde 24px aralıklı 1px altıgen/çapraz örgü, %14 opak.
- **Frost doku:** `--grain: .015` tüm zeminde; fotoğrafın üstünde kullanılmaz.
- **Eşik çizgisi:** grafiklerde 1px kesikli `--warn`; değer etiketi çizginin sağ ucunda mono 10px.
- **Typography:** Space Grotesk (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#096d8a`; neutral scale `#eaf3f8` → `#0e2733`.
- **Radius:** `2px` / `10px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her ölçüm üçlüsü: etiket (10px mono) + değer (mono, sağa hizalı) + birim (°C, m, km/s)
2. Katman ayrımı 1px çizgi + 2px ton; gölge yalnız yüzen katmanda
3. Panel köşesi 10px, iç ölçüm kutusu 2px: iki radius dışında değer yok
4. Buz mavisi accent yalnız eylem, seçim ve eşik; durum renkleri ayrı
5. Isı haritası ve çizgi grafiği aynı değer ölçeğini paylaşır; ölçek etiketi her zaman görünür
6. Frost doku .015: sayfa zemininde, fotoğrafın üstünde değil

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eaf3f8` | page background | as a card background |
| `--bg-2` | `#dceaf2` | partition divider floor, table top | button background |
| `--surface` | `#f9fcfe` | kart, input, modal | full-page background |
| `--surface-2` | `#eef5fa` | passive chip, hover background | primary button |
| `--ink` | `#0e2733` | title, body, icon | large background |
| `--ink-soft` | `#45626f` | secondary text, description | — |
| `--ink-faint` | `#6c8794` | decorative label, separator text | interactive text |
| `--accent` | `#096d8a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f2fbfd` | text above accent | non-accent background |
| `--line` | `rgba(14,39,51,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.76:1** · `ink-soft/bg` **5.78:1** · `ink-faint/bg` **3.38:1 (decorative)** · `accent-ink/accent` **5.61:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 26px (mobile 26px) | 400 | 1.08 | -0.02em |
| H2 | same | 24px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `10px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Cam/blur, `backdrop-filter`, buzlu cam efekti.
- Gradient zemin, parlama (glow), iç gölge.
- 10px üstü radius; 2px dışında ara radius.
- Sıcak turuncu accent; accent ile `--ok` yan yana.
- Büyük harf gövde, 13px altı metin, italik.
- Sürekli dönen kar tanesi, parallax, bounce.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.72:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 7/5 hero: solda başlık + tek CTA, sağda buz plakası görseli | `shots/01-page.png` |
| Dashboard | yüksek | 4×3 veri ızgarası + eşik çizgili grafik + son ölçümler | `shots/01-page.png` |
| Form | düşük | ölçüm girişi: değer + birim + istasyon + zaman | `shots/01-page.png` |
| Liste / tablo | yüksek | 34px satır, etiket–değer–birim, sabit birim sütunu | `shots/01-page.png` |
| Boş durum | düşük | "bu istasyonda ölçüm yok" + cihaz bağla | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: istasyon seç → sensör ekle → eşik belirle | `shots/01-page.png` |
| Pricing | orta | plan karşılaştırma; sensör/istasyon limitleri | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek plaka, 40px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | buz çekirdeği kesiti + ölçüm listesi | `shots/01-page.png` |
| Bildirim | düşük | 36px toast, sol buz şeridi, 3sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | istasyon listesi, birim sistemi, eşik değerleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.76:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.78:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.38:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.61:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.72:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.3 | ≥ 60 target | thin text |

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
| "Glassmorphism" kayması | blur/parlama eklendi | `--blur: 0`, opak yüzey |
| Ekran soluk | çok ince çizgi + düşük kontrast | 1px çizgi + `--ink` metin; `--ink-faint` yalnız birim |
| Plaka sınırı kayboluyor | tek ton | `--surface` + 2px açık `--bg` farkı |
| Ölçümler karışıyor | birim yok | sabit birim sütunu + tabular |
| Radius tutarsız | her bileşende farklı | yalnız 2px ve 10px |
| Koyu modda doku kayboluyor | grain düşük | koyu blokta `.03` |
| Mobilde taşıyor | 12 kolon tablo | yatay kaydırma + dondurulmuş birim sütunu |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `lab-instrument` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `wabi-sabi` | Two different ornamental languages compete on the same screen |
| Mixing | `bohemian` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://nsidc.org/ | NSIDC · National Snow and Ice Data Center — deniz buzu, kalınlık ve erime verisi sunumu |
| https://www.awi.de/en/ | Alfred Wegener Institute · polar araştırma — kutup istasyonu ölçüm terminolojisi |
| https://www.antarctica.gov.au/ | Australian Antarctic Division — istasyon verisi, harita ve sefer planı dili |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — ince çerçeve ve grafik çizgisi 3:1 ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | www.w3.org — gövde metni kontrast ölçütü |

## AI brief

```text
Stil: Polar Ice (styles/83-polar-ice/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="polar-ice"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Grotesk 700) H1/H2; --font-body (Inter 400/600) gövde 15px/1.6;
  --font-mono (Space Mono) etiket 10px +0.2em büyük harf ve tüm ölçüm değerleri (tabular).
Yüzey: yüksek anahtar buz zemini; ayrım 1px var(--line) + 2px ton farkı. radius YALNIZ iki değer:
  --radius 2px (buton/input/iç kutu), --radius-lg 10px (panel/modal). Gölge yalnız yüzen katmanda 1–2px.
Ölçüm: etiket (10px mono) + değer (13px mono, sağa hizalı) + birim (sabit 44px sütun, --ink-faint).
Renk: tek accent buz mavisi (--accent); accent üstü --accent-ink; sıcak renk yalnız durum.
Hareket: enter 0.32s cubic-bezier(.15,1,.3,1) 10px stagger 0.035 · scroll top 90% 0.42s 14px once:false ·
  pin kapalı · hover 100ms scale 1.010; prefers-reduced-motion zorunlu.
Yasak: cam/blur/backdrop-filter, gradient, glow, 10px üstü radius, sıcak accent, sürekli dönen kar tanesi, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Polar Ice (polar-ice) · family: Nature & Organic (76–85)
Token: --bg #eaf3f8 · --surface #f9fcfe · --ink #0e2733 · --accent #096d8a · --line rgba(14,39,51,.14)
Radius: 2px / 10px · Typography: Space Grotesk / Inter / Space Mono
Required: Her ölçüm üçlüsü: etiket (10px mono) + değer (mono, sağa hizalı) + birim (°C, m, km/s) · Katman ayrımı 1px çizgi + 2px ton; gölge yalnız yüzen katmanda · Panel köşesi 10px, iç ölçüm kutusu 2px: iki radius dışında değer yok
Banned: Cam/blur, `backdrop-filter`, buzlu cam efekti. · Gradient zemin, parlama (glow), iç gölge. · 10px üstü radius; 2px dışında ara radius.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="polar-ice"] {
  --bg: #eaf3f8; --bg-2: #dceaf2;
  --surface: #f9fcfe; --surface-2: #eef5fa;
  --ink: #0e2733; --ink-soft: #45626f; --ink-faint: #6c8794;
  --accent: #096d8a; --accent-ink: #f2fbfd;
  --line: rgba(14,39,51,.14);
  --danger: #d5281c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(14,39,51,.08); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -.02em; --blur: 0px; --grain: 0;
}
```
