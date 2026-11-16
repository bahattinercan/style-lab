# 130 · Leather Craft

> **In one sentence:** Tabaklanmış deri gibi sıcak ve dokulu bir zeminde, dikiş çerçeveli kartlarda el işi emirlerini takip eden atölye arayüzü.

| | |
|---|---|
| **Feeling** | sıcak, dokulu, sabırlı, elle yapılmış |
| **Best for** | deri atölyesi iş takibi, el yapımı ürün kataloğu, tabak/çanta markası, zanaat okulu |
| **Avoid** | yüksek hızlı operasyon paneli, fintech, neon/oyun arayüzü — sıcak doku orada "yavaş" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="leather-craft"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Leather Craft, arayüzü **iş tezgâhı** gibi kurar: tabaklanmış tan zemini, dikiş çerçeveli kartlar, el aleti etiketleri ve sabırlı bir hareket. Her kart bir iş emridir: deri türü, kalınlık, dikiş sayısı, teslim tarihi.

Üç kurucu karar: (1) **dikiş çerçevesi** — kartın içinde 8px boşlukla 1px kesikli çizgi; bu stil "el yapımı" olduğunu düzenden değil dikişten okutur; (2) **en yoğun grain** — `--grain: .06`; deri tanesi zeminin kendisidir, fotoğrafın üstünde kullanılmaz; (3) **sabırlı hareket** — giriş 1080ms `cubic-bezier(.66,.02,.3,1)`; el işi gibi yavaş kalkar, yavaş oturur.

Bedeli: sıcak tan zemin ve yoğun doku, metin kontrastını daraltır; gövde 16px Lora ve `--ink` zorunludur, `--ink-faint` gövdede kullanılamaz. İkinci bir sıcak accent tonu eklenirse stil "deri" değil "toprak" okunur.

### What is not
- **Wabi-Sabi (07) değildir:** killi açık krem, yamuk kartlar ve kusur estetiği; Leather Craft hizalıdır, dikiş çerçevesi ve deri tanesi ile ayrışır (radius 7/16 vs 3/18, grain .06 vs .07, accent #7a3f1d vs #a85831).
- **Grand Tourer (41) değildir:** krem deri + krom hairline ve motor sporları dili; burada metal yok, dikiş ve tabaklama var.
- **Desert Sand (82) değildir:** kum + mor accent + 24/44 kumul radiusu; Leather Craft sıcak tan + kahve accent, 7/16 radius ve kesikli dikiş çerçevesi.
- **Nordic Folk (66) değildir:** krem + kırmızı nakış ve Fraunces/Lora; 130 dikiş çerçevesi, yoğun grain ve Share Tech Mono künye ile ayrışır (display ailesi Playfair Display vs Fraunces, accent hue 22° vs 5° ve radius 7/16 vs 6/10 → hiçbir eksen ortak değil).

### Where it comes from
Deri atölyesi ve tabaklama geleneğinden: deri türü (vejetal, vachetta, süet, pull-up), kalınlık, dikiş adımı, kalıp, teslim tarihi. Bugün yeniden kullanılmasının nedeni: el yapımı ürün satan atölyeler sipariş defterini kâğıtta tutuyor; dijital karşılığında **iş emri** dilini ve dikişi taşıyan bir arayüz istiyorlar. Klişeye dönüşmemesi için korunacak detay: **kesikli dikiş çerçevesi** ve gerçek kalınlık/dikiş verisi.

### Recognition test in 3 seconds
1. Zemin sıcak tan (deri), gözle görülür tanecikli doku var.
2. Kartların içinde 1px **kesikli dikiş çerçevesi**; başka yerde tekrar etmez.
3. Başlıklar Playfair Display 700 (yüksek kontrastlı serif), gövde Lora 16px; mono yalnız künye.
4. Accent koyu kahve (#7a3f1d); ikinci sıcak ton veya metal parlama yok.
5. Her kartta deri türü + kalınlık (mm) + dikiş sayısı + teslim tarihi.

## Visual signature
- **Dikiş çerçevesi:** kart içinde 8px boşlukla `1px dashed color-mix(--ink-soft 45%)`; yalnız kart/modal, tablo hücresinde yok.
- **Deri tanesi:** `--grain: .06` — katalogdaki en yoğun doku; yalnız zemin katmanında.
- **Kahve accent:** `#7a3f1d` yalnız eylem/seçim/uyarı; accent üstü metin `#f8ecda`.
- **El aleti etiketi:** kartın sol üstünde 10px Share Tech Mono büyük harf (`BIZ`, `İĞNE`, `TOKMAK`).
- **Kalınlık satırı:** sağ altta mono `1.8 mm · 24 dikiş`, birim ayrı ve `--ink-faint`.
- **Yüksek kontrastlı serif başlık:** Playfair Display 700, H1 50px/1.08, `-0.01em`; iki satırı geçmez.
- **Plaka gölgesi:** `0 6px 16px -10px` kısa ve yumuşak; perçin/metal parlaklık yok.
- **Typography:** Playfair Display (display) + Lora (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#7a3f1d`; neutral scale `#e3cba9` → `#2b1d12`.
- **Radius:** `7px` / `16px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her iş kaydı: deri türü + kalınlık (mm) + dikiş sayısı + teslim tarihi
2. Kart içinde 8px boşlukla 1px kesikli dikiş çerçevesi; başka yerde tekrar etmez
3. Deri tanesi grain .06 (en yoğun doku); fotoğrafın üstünde kullanılmaz
4. Başlık Playfair Display 700, gövde Lora 400 16px/1.66; mono yalnız ölçü/etiket
5. Radius 7px (kontrol) ve 16px (kart); hap buton yok
6. Deri accent yalnız eylem/seçim/uyarı; ikinci sıcak ton yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e3cba9` | page background | as a card background |
| `--bg-2` | `#d7bd98` | partition divider floor, table top | button background |
| `--surface` | `#f0e0c6` | kart, input, modal | full-page background |
| `--surface-2` | `#e9d5b7` | passive chip, hover background | primary button |
| `--ink` | `#2b1d12` | title, body, icon | large background |
| `--ink-soft` | `#5d452f` | secondary text, description | — |
| `--ink-faint` | `#7f6748` | decorative label, separator text | interactive text |
| `--accent` | `#7a3f1d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f8ecda` | text above accent | non-accent background |
| `--line` | `rgba(43,29,18,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **10.4:1** · `ink-soft/bg` **5.68:1** · `ink-faint/bg` **3.4:1 (decorative)** · `accent-ink/accent` **7.04:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `7px` (buton, input, chip), `16px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Metal perçin/parlama, gloss, cam/blur, gradient.
- 16px üstü radius, hap buton, yumuşak geniş gölge.
- İkinci sıcak accent tonu; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 15px altı gövde metni, italik başlık.
- Sürekli dikiş animasyonu, parallax, bounce.
- Grain'i fotoğraf veya tablo hücresi üstünde kullanmak.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 7px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 7px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 7px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 7px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 7px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 7px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 7px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.33:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 6/6 hero: solda başlık + tek CTA, sağda dikiş makro görseli | `shots/01-page.png` |
| Dashboard | orta | 4 KPI (açık iş, geciken, ort. kalınlık, teslim) + pano | `shots/01-page.png` |
| Form | düşük | iş emri: deri türü, kalınlık+mm, dikiş, teslim tarihi | `shots/01-page.png` |
| Liste / tablo | orta | 42px satır, tür chip'i, sağda mono kalınlık | `shots/01-page.png` |
| Boş durum | düşük | "tezgâhta iş yok" + yeni iş emri | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: atölye → deri türü → kalıp | `shots/01-page.png` |
| Pricing | orta | iki plan, iş/kalıp limitleri | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart, 46px alanlar, tek eylem | `shots/01-page.png` |
| Modal | orta | iş emri: kalıp, dikiş sayısı, teslim | `shots/01-page.png` |
| Bildirim | düşük | 42px toast, sol kahve şerit, 4.4sn | `shots/01-page.png` |
| Hata | düşük | kiremit çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | atölye listesi, birim (mm/inç), deri türleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 10.4:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.68:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.4:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.04:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.33:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 75 | ≥ 60 target | thin text |

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
| "Toprak boyası" hissi | ikinci sıcak accent | tek kahve accent, durumlar etiketle |
| Doku kirli | grain fotoğrafın üstünde | grain yalnız zemin katmanı |
| Kontrast düşük | `--ink-faint` gövdede | gövde `--ink`; yalnız birim/etiket soluk |
| Dikiş süs gibi | her yerde tekrar | yalnız kart/modal, ekran başına kart kadar |
| Kart sınırı kayboluyor | gölge + doku zayıf | 1px çizgi + kısa gölge + dikiş |
| Mobilde taşıyor | 42px satır + kalınlık | kart + alt satır |
| Koyu modda doku kayboluyor | grain düşük | koyu blokta `.075` + çizgi %16 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| garnish | `nordic-folk` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.britannica.com/technology/leather | Britannica · deri — tabaklama türleri ve deri terminolojisi |
| https://www.vam.ac.uk/collections/leather | V&A · deri işleri — dikiş, kalıp ve zanaat künyesi |
| https://ich.unesco.org/en/home | UNESCO · somut olmayan kültürel miras — el zanaatı kayıt dili ve usta-çırak aktarımı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — tan deri zemininde metin kontrastı |

## AI brief

```text
Stil: Leather Craft (styles/130-leather-craft/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="leather-craft"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 700) H1/H2; --font-body (Lora 400/600) gövde 16px/1.66;
  --font-mono (Share Tech Mono) künye 11px +0.14em ve kalınlık/dikiş değerleri (tabular).
Yüzey: sıcak tan deri + yoğun tanecik (--grain .06). Kart = dış 1px var(--line) + içeride 8px boşlukla 1px KESİKLİ dikiş çerçevesi.
  radius --radius 4px, --radius-lg 10px; hap buton yok; gölge kısa ve yumuşak.
Renk: tek accent koyu kahve (--accent), accent üstü --accent-ink; ikinci sıcak ton yasak.
Kayıt: deri türü chip'i + kalınlık mm + dikiş sayısı + teslim tarihi.
Hareket: enter 1.08s cubic-bezier(.66,.02,.3,1) 21px st.108 · scroll top 64% 0.93s 23px once ·
  pin açık scrub 0.68 +155% · hover 430ms scale 1.052; prefers-reduced-motion zorunlu.
Yasak: metal perçin/parlama, gloss, cam/blur, gradient, 16px üstü radius, ikinci accent, sürekli dikiş animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Leather Craft (leather-craft) · family: Material & Luxury (126–135)
Token: --bg #e3cba9 · --surface #f0e0c6 · --ink #2b1d12 · --accent #7a3f1d · --line rgba(43,29,18,.22)
Radius: 7px / 16px · Typography: Playfair Display / Lora / Share Tech Mono
Required: Her iş kaydı: deri türü + kalınlık (mm) + dikiş sayısı + teslim tarihi · Kart içinde 8px boşlukla 1px kesikli dikiş çerçevesi; başka yerde tekrar etmez · Deri tanesi grain .06 (en yoğun doku); fotoğrafın üstünde kullanılmaz
Banned: Metal perçin/parlama, gloss, cam/blur, gradient. · 16px üstü radius, hap buton, yumuşak geniş gölge. · İkinci sıcak accent tonu; accent'i dekorasyon olarak kullanmak.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="leather-craft"] {
  --bg: #e3cba9; --bg-2: #d7bd98;
  --surface: #f0e0c6; --surface-2: #e9d5b7;
  --ink: #2b1d12; --ink-soft: #5d452f; --ink-faint: #7f6748;
  --accent: #7a3f1d; --accent-ink: #f8ecda;
  --line: rgba(43,29,18,.22);
  --danger: #b50000;
  --danger-ink: #ffffff;
  --ok: #00671f;
  --ok-ink: #ffffff;
  --warn: #9a3900;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 7px; --radius-lg: 16px;
  --shadow: 0 6px 16px -10px rgba(43,29,18,.45); --shadow-hard: none;
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
}
```
