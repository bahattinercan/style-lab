# 142 · Quantum Lab

> **In one sentence:** Kuantum ölçümlerini daktilo başlıklı, keskin köşeli bir laboratuvar defteri gibi sunan; olasılığı nokta bulutu ve çubuk histogramla konuşturan ölçüm arayüzü.

| | |
|---|---|
| **Feeling** | deneysel, kesin, ölçülü, laboratuvar sessizliğinde |
| **Best for** | kuantum/AR-GE panosu, ölçüm sonuç ekranı, bilimsel veri defteri, simülasyon raporu |
| **Avoid** | tüketici vitrini, eğlence uygulaması, yumuşak pastel marka sayfası |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="quantum-lab"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Quantum Lab, bir arayüzü **ölçüm defteri** olarak kurar: her satır bir ölçüm, her kart bir kubit durumu, her grafik bir olasılık dağılımıdır. Zemin orta ton gridir (laboratuvar tezgâhı), metin neredeyse siyahtır; köşe yoktur, kenarlık 1px mürekkeptir.

Üç kurucu karar: (1) **keskin köşe** — radius daima 0; deneysel ölçüm "yuvarlatılmış" görünmez; (2) **üç hane kuralı** — her olasılık 3 hane + `%` ve toplam 100 ± 0.5 satırı görünür, böylece veri kendi kendini denetler; (3) **opak veri** — nokta bulutu ve faz çemberi dekoratiftir, metin her zaman opak katmanda durur.

Display **Courier Prime**'dır: daktilo harfleri laboratuvar defteri hissini taşır, süs değil kayıt gibi okunur. Gövde Inter, sayılar JetBrains Mono.

Bedeli: orta ton zemin kontrast rezervini düşürür (`ink-soft/bg` = 4.86:1). Bu yüzden `--ink-faint` etkileşimli metinde kullanılmaz ve ikincil metin `--ink-soft` ile sınırlanır.

### What is not
- **Lab Instrument (50) değildir:** 50 Michroma + mavi ile enstrüman paneli kurar (radius 2/8, rings); Quantum'da Courier Prime, radius 0 ve histogram imzası vardır.
- **Calibration Lab (61) değildir:** 61 Jost + teal ile tolerans bandı estetiğidir (radius 3/6, grid); burada ölçüm dili olasılık dağılımıdır.
- **Type Experiment (93) değildir:** 93 Michroma ile tipografik deney yapar; Quantum'da tipografi kayıt aracıdır, deney konusu veridir.
- **Telemetry Grid (46) değildir:** 46 hairline metrik hücreleri kurar; Quantum'da 1px ink kenar ve histogram çubukları baskındır.

### Where it comes from
Kuantum bilişim laboratuvarları (kubit ölçüm kayıtları), deneysel fizik defterleri ve istatistiksel olasılık gösterimi (histogram, faz çemberi). Ekranda yeniden kullanılmasının nedeni: kuantum verisi **olasılık** olduğu için tek sayı değil dağılım göstermek zorunludur. Klişeye dönüşmemesi için korunacak detay: üç hane + toplam satırı ve radius 0.

### Recognition test in 3 seconds
1. Zemin orta gri; hiçbir köşe yuvarlak değil, kenarlıklar 1px siyah.
2. Başlık daktilo (Courier Prime): sabit genişlik, hafif mürekkep izi.
3. Ekranda histogram çubukları ve nokta bulutu var; çubuklar 1px çerçeveli.
4. Her yüzde 3 hane + `%`; altında toplam 100 satırı.
5. Accent mor yalnız "ölçülen durum" ve birincil eylemde.

## Visual signature
- **Sıfır radius:** `--radius: 0`, `--radius-lg: 0`; sahne tarafında `border-radius: 0 !important`.
- **1px mürekkep kenar:** kart ve input kenarı `--ink`; hairline yalnız ikincil ayırıcıda.
- **Olasılık bulutu:** 14px ve 22px iki nokta ızgarası (`--ink` + `--accent`), opaklık ≤ %50.
- **Histogram:** 6px çubuk, 18/42px aralık; iki katman (ink + accent) farklı yükseklikte.
- **Daktilo başlık:** Courier Prime 400, 40px, tracking 0.01em; paragrafta kullanılmaz.
- **Doku:** `--grain: 0`; doku nokta ızgarasından gelir.
- **Typography:** Courier Prime (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#5b3fa8`; neutral scale `#b3b1bb` → `#14121a`.
- **Radius:** `0px` / `0px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Her olasılık değeri 3 hane + birim (%); toplam 100 ± 0.5 kuralı görünür
2. Kubit durumu çip + renk + metin (|0⟩, |1⟩, süperpozisyon) üçlü kodlanır
3. Histogram çubukları 1px ink çerçeveli; eksen etiketi her zaman yazılı
4. Radius daima 0; ana kenarlık 1px ink
5. Metin her zaman opak katmanda; nokta bulutu dekoratif
6. Ölçüm sonucu ile teorik beklenti aynı ekranda yan yana

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#b3b1bb` | page background | as a card background |
| `--bg-2` | `#92909a` | partition divider floor, table top | button background |
| `--surface` | `#a6a4ae` | kart, input, modal | full-page background |
| `--surface-2` | `#86848e` | passive chip, hover background | primary button |
| `--ink` | `#14121a` | title, body, icon | large background |
| `--ink-soft` | `#2f2c38` | secondary text, description | — |
| `--ink-faint` | `#4a4753` | decorative label, separator text | interactive text |
| `--accent` | `#5b3fa8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(20,18,26,.24)` | all borders | text colour |

- Measured contrast: `ink/bg` **8.77:1** · `ink-soft/bg` **6.45:1** · `ink-faint/bg` **4.28:1 (decorative)** · `accent-ink/accent` **7.72:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Courier Prime) | 25px (mobile 25px) | 500 | 1.06 | -0.02em |
| H2 | same | 25px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Yuvarlak köşe / hap kontrol.
- Gölge, cam blur, gradient.
- 4+ haneli ondalık, birimsiz yüzde.
- Sürekli dönen faz animasyonu ve yükseklik animasyonu.
- Fotoğraf üzerine grafik bindirme.
- Courier Prime ile uzun paragraf.
- `--ink-faint` ile etkileşimli metin.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.65:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | Sol daktilo başlık, sağda histogram paneli + bulut | `shots/01-page.png` |
| Dashboard | yüksek | Kubit ızgarası 8/4, sağda olasılık paneli | `shots/01-page.png` |
| Form | düşük | Ölçüm parametreleri: devre, atış sayısı, gürültü | `shots/01-page.png` |
| Liste / tablo | yüksek | 32px satır, olasılık sağa hizalı 3 hane | `shots/01-page.png` |
| Boş durum | orta | Boş histogram iskeleti + "ölçüm başlat" | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: devre → atış → sonuç | `shots/01-page.png` |
| Pricing | orta | Hesaplama kotaları tablosu; birimli değerler | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, bulut yok, form odakta | `shots/01-page.png` |
| Modal | orta | Ölçüm detayı: histogram + toplam satırı | `shots/01-page.png` |
| Bildirim / toast | orta | "atış 1024 · sapma %0.8" mono | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + "gürültü eşiği aşıldı" | `shots/01-page.png` |
| Profil / ayar | orta | Gürültü modeli, atış sayısı, hane gösterimi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 8.77:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.45:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.28:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.72:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.65:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 61.6 | ≥ 60 target | thin text |

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
| "Excel" hissi | gri zemin + hairline | kenarlığı ink'e çek, histogram ekle |
| Veri güvenilmez | toplam satırı yok | 100 ± 0.5 satırını zorunlu kıl |
| Okunmuyor | ink-faint etkileşimde | `--ink-soft` kullan |
| Fazla süs | bulut opaklığı yüksek | ≤ %50 (koyuda %38) |
| "Klinik" değil "oyun" | radius/gölge eklendi | radius 0, gölge yok |
| Mobilde sıkışık | 8/4 korunmuş | 768 altında tek sütun |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `lab-instrument` | Same level of seriousness; accent sharing is not allowed |
| garnish | `calibration-lab` | Same level of seriousness; accent sharing is not allowed |
| garnish | `type-experiment` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://qiskit.org/learn/ | Qiskit · Bloch sphere — kubit durumu ve faz gösterimi |
| https://www.nist.gov/quantum-information-science | NIST · Quantum information — ölçüm ve olasılık dili |
| https://www.nngroup.com/articles/dashboards-preattentive/ | NN/g · Charts — histogram okunurluğu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast minimum — orta ton zeminde metin eşiği |

## AI brief

```text
Stil: Quantum Lab (styles/142-quantum-lab/style.md, tokens.json)
Token: sadece [data-style="quantum-lab"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Courier Prime 400 (yalnız başlık), gövde Inter 400/600, sayı JetBrains Mono.
  Ölçek 11/12/13/15/19/25/40; gövde ölçü 68ch; olasılıklar 3 hane + %.
Yüzey: orta gri tezgâh (#b3b1bb); radius DAİMA 0; ana kenarlık 1px var(--ink); gölge yok.
Imza: olasılık nokta bulutu (14/22px) + iki katmanlı histogram çubukları + toplam 100 satırı;
  kubit durumu çip + renk + metin (|0⟩, |1⟩, süperpozisyon).
Renk: tek accent #5b3fa8 (ölçülen durum); orta ton nedeniyle ink-faint etkileşimde yok.
Hareket: enter .29s cubic-bezier(.5,.05,.3,1) y0 stagger .035; scroll top 89% .35s y8 once;
  pin yok; hover 105ms scale 1.000; reduced-motion zorunlu.
Yasak: yuvarlak köşe, gölge/blur, 4+ hane ondalık, yükseklik animasyonu, fotoğraf üstü grafik.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Quantum Lab (quantum-lab) · family: Experimental & Future (136–145)
Token: --bg #b3b1bb · --surface #a6a4ae · --ink #14121a · --accent #5b3fa8 · --line rgba(20,18,26,.24)
Radius: 0px / 0px · Typography: Courier Prime / Inter / JetBrains Mono
Required: Her olasılık değeri 3 hane + birim (%); toplam 100 ± 0.5 kuralı görünür · Kubit durumu çip + renk + metin (|0⟩, |1⟩, süperpozisyon) üçlü kodlanır · Histogram çubukları 1px ink çerçeveli; eksen etiketi her zaman yazılı
Banned: Yuvarlak köşe / hap kontrol. · Gölge, cam blur, gradient. · 4+ haneli ondalık, birimsiz yüzde.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="quantum-lab"] {
  --bg: #b3b1bb; --bg-2: #92909a;
  --surface: #a6a4ae; --surface-2: #86848e;
  --ink: #14121a; --ink-soft: #2f2c38; --ink-faint: #4a4753;
  --accent: #5b3fa8; --accent-ink: #ffffff;
  --line: rgba(20,18,26,.24);
  --danger: #910000;
  --danger-ink: #ffffff;
  --ok: #005105;
  --ok-ink: #ffffff;
  --warn: #832200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Courier Prime", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
