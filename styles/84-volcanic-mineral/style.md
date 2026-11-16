# 84 · Volcanic Mineral

> **In one sentence:** Bazalt siyahı keskin yüzeylerde her örneğin katman kalınlığı ve mineral yüzdesiyle kaydedildiği volkanik kesit arayüzü.

| | |
|---|---|
| **Feeling** | sert, keskin, yoğun, jeolojik |
| **Best for** | jeoloji/madencilik verisi, volkan izleme paneli, malzeme analizi, örnek kataloğu |
| **Avoid** | yumuşak marka deneyimi, çocuk/wellness, açık zemin pazarlama — keskin siyah burada "sert" değil "soğuk" olur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="volcanic-mineral"]` |
| **Composition** | `split` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Volcanic Mineral, arayüzü bir **jeolojik kesit** gibi kurar: her örnek bir kart, kartın üstünde mineral dağılımını gösteren 3px şerit, içinde katman kalınlıkları ve yüzde değerleri. Köşe yuvarlatma yoktur (radius 0–2px); yüzeyler bazalt gibi mat ve keskindir. Accent, kesitin içinden geçen **magma turuncusu**dur ve yalnız eylem/aktif/uyarı için kullanılır.

Üç kurucu karar: (1) **keskinlik** — 0px köşe, 1px çizgi, gölge neredeyse yok; (2) **geniş teknoloji yazısı** — Michroma 400 büyük harf başlık (fasetli, geniş), Space Grotesk gövde, Share Tech Mono ölçüm; (3) **iki hız** — giriş 680ms `cubic-bezier(1,0,.2,1)` anında kalkar ve sert durur; pin scrub 0.35 ile kesit ekranda sabitlenip kayar.

Bedeli: keskin siyah ekran uzun metinde yorar; bu yüzden gövde 15px Space Grotesk 500 ve 1.58 satır aralığı zorunludur. Uzun makale bu stile uygun değildir.

### What is not
- **Dark Academia (33) değildir:** parşömen/altın, serif ve sıcak loş ışıkla kurulur; burada bazalt siyahı, magma turuncusu, Michroma ve keskin kesit çizgileri var.
- **Scandinavian Dark (40) değildir:** o stil sessiz lüks için geniş boşluk ve ince hairline kullanır; Volcanic Mineral yoğun ve fasetlidir, radius 0'dır.
- **West African Pattern (71) değildir:** 71 desen ve altınla sıcak bir ritim kurar; 84 desensizdir, kesit şeması ve mineral yüzdeleriyle çalışır.
- **Acid Graphics (15) değildir:** 15 asit yeşiliyle provokasyon arar; burada tek magma turuncusu ve ölçüm disiplini var.

### Where it comes from
Jeoloji kesit çizimi ve volkan gözlemevi raporundan: örnek no, kaya türü, katman kalınlığı, mineral yüzdesi, sıcaklık. Bugün yeniden kullanılmasının nedeni: malzeme/jeoloji yazılımı çoğunlukla genel "dashboard" estetiğinde ve kesitin kendisini göstermiyor; kullanıcı katmanı ve yüzdeyi yan yana görmek istiyor. Klişeye dönüşmemesi için korunacak detay: **3px mineral şeridi** ve radius 0 kuralı.

### Recognition test in 3 seconds
1. Hiçbir köşe yuvarlatılmamış (0–2px); kenarlar keskin.
2. Kart üstünde 3px mineral şeridi ve sağ üstte ölçüm etiketi var.
3. Accent magma turuncusu; başka sıcak renk yok.
4. Başlıklar geniş, fasetli teknoloji yazısı (Michroma) büyük harf.
5. Her değer mono tabular ve birimli: `120 mm`, `%38`, `860 °C`.

## Visual signature
- **Keskin köşe:** radius 0 (kart, buton, input, chip), 2px yalnız yüzen katman (modal/menü).
- **Mineral şeridi:** kart üstünde 3px yüksekliğinde `--accent` %70 dolgu; kesitin mineral dağılımını temsil eder.
- **Geniş teknoloji başlık:** Michroma 400, H1 48px/1.02, `0.04em`, büyük harf; ağırlık yok, hiyerarşi punto + aralıkla.
- **Fasetli gölge:** yalnız modal/menüde `0 8px 22px -12px` — aşağı ve sert; panellerde gölge yok.
- **Magma halkası:** aktif örnek/kart `--shadow-hard` = 1px magma halkası (gölge değil).
- **Kesit ızgarası:** hero görselinde 15° eğimli 1px katman çizgileri, `--line` opaklığında.
- **Bazalt grain:** `--grain: .02`; fotoğrafın üstünde kullanılmaz.
- **Typography:** Michroma (display) + Space Grotesk (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#e0572a`; neutral scale `#14120f` → `#f0eae0`.
- **Radius:** `0px` / `2px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Keskin köşe: radius 0 (kart, buton, input) veya 2px (panel dışı yüzen katman); ara değer yok
2. Her kesit kaydı: örnek no + kaya türü + katman kalınlığı + mineral yüzdesi
3. Magma accent yalnız eylem/aktif/uyarı; ikinci sıcak renk yok
4. Katman şeridi: kart üstünde 3px, kesitin mineral dağılımını gösterir
5. Değerler mono tabular ve birimle (mm, %, °C); yüzde işareti ayrı sütunda değil değerle
6. Bazalt tozu grain .02 yalnız zemin katmanında

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#14120f` | page background | as a card background |
| `--bg-2` | `#0e0d0b` | partition divider floor, table top | button background |
| `--surface` | `#1c1916` | kart, input, modal | full-page background |
| `--surface-2` | `#26221d` | passive chip, hover background | primary button |
| `--ink` | `#f0eae0` | title, body, icon | large background |
| `--ink-soft` | `#b6a998` | secondary text, description | — |
| `--ink-faint` | `#877d6d` | decorative label, separator text | interactive text |
| `--accent` | `#e0572a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#120603` | text above accent | non-accent background |
| `--line` | `rgba(240,234,224,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.63:1** · `ink-soft/bg` **8.12:1** · `ink-faint/bg` **4.62:1 (decorative)** · `accent-ink/accent` **5.29:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 28px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 2px üstü radius, hap form, yumuşak gölge.
- Cam/blur, glow, gradient zemin/iç dolgu.
- Serif display, italik, sentetik kalın Michroma.
- Turuncu + kükürt sarısı yan yana; geniş accent dolgu.
- Sürekli titreşen lav/parçacık, bounce, yatay parallax.
- Büyük harf gövde, 13px altı metin.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.96:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 4/8 hero: solda künye, sağda kesit görseli + 15° katman çizgileri | `shots/01-page.png` |
| Dashboard | yüksek | örnek ızgarası + mineral dağılımı + sıcaklık profili | `shots/01-page.png` |
| Form | orta | örnek girişi: kaya türü, katman, mineral %, sıcaklık | `shots/01-page.png` |
| Liste / tablo | yüksek | 36px satır, mineral % mono sağa hizalı, örnek no | `shots/01-page.png` |
| Boş durum | düşük | "bu bölgede örnek yok" + yeni örnek ekle | `shots/01-page.png` |
| Onboarding | orta | 3 adım: saha seç → örnek ekle → kesit tanımla | `shots/01-page.png` |
| Pricing | orta | plan karşılaştırma; örnek/analiz limitleri | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, keskin köşe, tek eylem | `shots/01-page.png` |
| Modal | orta | kesit detayı: katman listesi + ölçümler | `shots/01-page.png` |
| Bildirim | orta | 36px toast, sol magma şerit, 3.5sn | `shots/01-page.png` |
| Hata | düşük | danger çerçeve + neden + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | saha listesi, birim sistemi (mm/cm/m), eşikler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.63:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.12:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.62:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.96:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94 | ≥ 60 target | thin text |

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
| "Oyun HUD'u" hissi | glow/neon eklendi | düz dolgu, glow yasak |
| Okunmuyor | 13px altı gövde | 15px Space Grotesk 500, 1.58 satır |
| Kesit dili kayboluyor | eğim farklı | tüm katman çizgileri 15° |
| Fazla turuncu | accent geniş alanda | accent yalnız eylem/şerit |
| Sertlik "ucuz" görünüyor | yuvarlak köşe karışmış | radius 0–2px sabit |
| Koyu modda katman görünmüyor | çizgi opaklığı düşük | koyu blokta %16 + grain artışı |
| Mobilde taşıyor | 12 kolon kesit | tek kolon + kart |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `machined-metal-panel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `frutiger-aero` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.usgs.gov/programs/VHP | USGS · Volcano Hazards Program — lav/bazalt ölçüm terminolojisi, tehlike seviyesi etiketleri |
| https://volcano.si.edu/ | Smithsonian · Global Volcanism Program — volkan kaydı künyesi, örnek numaralandırma |
| https://www.bgs.ac.uk/ | British Geological Survey — kaya türü sınıflandırması ve mineral yüzdesi sunumu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — koyu bazalt zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | www.w3.org — 1px kesit çizgisi ve odak halkası |

## AI brief

```text
Stil: Volcanic Mineral (styles/84-volcanic-mineral/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="volcanic-mineral"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, tek kesim) H1/H2 büyük harf; --font-body (Space Grotesk 500/700) gövde 15px/1.58;
  --font-mono (Share Tech Mono) etiket 10px +0.2em ve tüm ölçüm değerleri (tabular).
Yüzey: bazalt siyahı mat zemin, --grain .02. radius 0 (kart/buton/input/chip), --radius-lg 2px (modal/menü) — ara değer yok.
  Gölge yalnız modal/menüde sert ve aşağı; aktif örnekte gölge değil --shadow-hard (1px magma halka).
Renk: tek accent magma (--accent); accent üstü --accent-ink; turuncu + sarı yan yana yasak.
Kesit: her örnekte örnek no + kaya türü (chip) + katman kalınlığı + mineral yüzdesi; kart üstünde 3px mineral şeridi; çizgiler 15°.
Hareket: enter 0.68s cubic-bezier(1,0,.2,1) 12px stagger 0.15 · scroll top 74% 0.3s 64px once ·
  pin açık scrub 0.35 +240% · hover 460ms scale 1.006; prefers-reduced-motion zorunlu.
Yasak: yuvarlak köşe, hap buton, cam/blur, glow, gradient, serif display, titreşen lav, bounce.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Volcanic Mineral (volcanic-mineral) · family: Nature & Organic (76–85)
Token: --bg #14120f · --surface #1c1916 · --ink #f0eae0 · --accent #e0572a · --line rgba(240,234,224,.14)
Radius: 0px / 2px · Typography: Michroma / Space Grotesk / Share Tech Mono
Required: Keskin köşe: radius 0 (kart, buton, input) veya 2px (panel dışı yüzen katman); ara değer yok · Her kesit kaydı: örnek no + kaya türü + katman kalınlığı + mineral yüzdesi · Magma accent yalnız eylem/aktif/uyarı; ikinci sıcak renk yok
Banned: 2px üstü radius, hap form, yumuşak gölge. · Cam/blur, glow, gradient zemin/iç dolgu. · Serif display, italik, sentetik kalın Michroma.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="volcanic-mineral"] {
  --bg: #14120f; --bg-2: #0e0d0b;
  --surface: #1c1916; --surface-2: #26221d;
  --ink: #f0eae0; --ink-soft: #b6a998; --ink-faint: #877d6d;
  --accent: #e0572a; --accent-ink: #120603;
  --line: rgba(240,234,224,.14);
  --danger: #e73c2d;
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
  --shadow: 0 8px 22px -12px rgba(0,0,0,.9); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: 0;
}
```
