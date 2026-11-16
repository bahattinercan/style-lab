# 145 · Zero Gravity

> **In one sentence:** Panellerin yerçekimi yokmuş gibi kademeli kaydığı, ince yörünge yaylarının ve yavaş geçişlerin hâkim olduğu buz mavisi orbital pano.

| | |
|---|---|
| **Feeling** | sakin, ağırlıksız, ferah, yavaş |
| **Best for** | uzay/iklim verisi vitrini, orbital görev sunumu, sakin teknoloji ürünü, immersive anlatı |
| **Avoid** | yoğun operasyon konsolu, muhasebe tablosu, hızlı oyun arayüzü |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="zero-gravity"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Zero Gravity, arayüzü **ağırlıksız bir istasyon içi** gibi kurar: kartlar dikeyde 4–8px kademeli kaymış durur, gölgeler hep aşağı düşer (yüzme hissi), her şey yavaş hareket eder (hover ≥ 480ms, giriş ≥ 1.0s). Zemin buz mavisi-beyaz, accent derin yeşildir; hiçbir köşe keskin değildir.

Üç kurucu karar: (1) **yavaşlık kuralı** — hız bu stilin karşıtıdır; 100ms altı geçiş yoktur, çünkü ağırlıksızlık ancak yavaşlıkta hissedilir; (2) **kademeli kayma** — kartlar sırayla 4/6/-4px kayar, ızgara hizası bozulmaz; (3) **ince yörünge** — 1.5px halka, ekran başına bir kez; süs değil yön göstergesi.

Display **Poiret One** (400): tel gibi ince geometrik harfler, geniş harf aralığıyla (0.06em) birlikte "havada duran" bir başlık üretir. Gövde Inter, etiketler IBM Plex Mono.

Bedeli: yavaş geçişler ve geniş boşluk yoğunluğu düşürür. Bu yüzden tablo yerine kart listesi kullanılır ve her kartta tek baskın değer bulunur.

### What is not
- **Ethereal (29) değildir:** 29 Cormorant + sisli düşük kontrastla rüya estetiğidir (radius 20, blob); Zero Gravity'de kontrast yüksektir (gövde 15.95:1), display Poiret One ve yapı kart/kayma düzenidir.
- **Liquid Glass (09) değildir:** 09 cam ve hap yüzeylerle sıvı yansıma kurar; burada blur yoktur (`--blur: 0`), yüzeyler opak ve mattır.
- **Japandi (06) değildir:** 06 sıcak kağıt ve doğal tonlarla sakinlik kurar; Zero Gravity soğuk buz mavisi + derin yeşil kullanır.
- **Minimalism (01) değildir:** 01 nötr ve hareketsizdir; burada hareketin kendisi imzadır (yavaş ama sürekli yüzme).

### Where it comes from
Uzay istasyonu iç mekânı (ağırlıksız modüller), orbital veri görselleştirme ve "sakin teknoloji" akımı. Ekranda yeniden kullanılmasının nedeni: hızlı animasyonların yorgunluğuna karşı **yavaş hareketin** dikkat toplaması. Klişeye dönüşmemesi için korunacak detay: kaymanın kademeli olması (rastgele değil) ve yörüngenin ince kalması.

### Recognition test in 3 seconds
1. Zemin buz mavisi-beyaz; accent derin yeşil, üçüncü renk yok.
2. Kartlar dikeyde kademeli kaymış; gölge hep aşağı.
3. Başlık Poiret One: tel gibi ince, geniş harf aralıklı.
4. Her köşe yuvarlak (28–36px); keskin köşe yok.
5. Hareket yavaş: buton hover'ı neredeyse bir saniye sürüyor.

## Visual signature
- **Kademeli kayma:** 2. kart `+6px`, 3. kart `-4px`; mobilde kayma kapanır.
- **Geniş gölge:** `0 30px 70px -48px`, tek katman; yön hep aşağı.
- **İnce yörünge:** 1.5px accent halka; hero ve sayfa zemininde bir kez.
- **Yüzen nav:** sayfadan 16px kopuk, 999px radius, hafif gölge.
- **Poiret One başlık:** 48px, 400, tracking 0.06em; kalınlaştırma yasak.
- **Doku:** `--grain .01` + çok soluk buz lekesi; gradient zemin yok.
- **Typography:** Poiret One (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#1d6b52`; neutral scale `#eef4f2` → `#0f1a19`.
- **Radius:** `28px` / `36px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Kartlar dikeyde 4–8px kademeli kayar; gölge yönü hep aşağı (yüzme hissi)
2. Radius 28/36px; hiçbir köşe keskin değil
3. Poiret One yalnız başlıkta ve 400; gövde Inter, etiket mono
4. Yörünge yayı ekran başına bir kez, ince 1.5px çizgi
5. Tüm hareket yavaş: hover ≥ 480ms, giriş ≥ 1.0s
6. Accent derin yeşil yalnız birincil eylem ve aktif yörünge

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eef4f2` | page background | as a card background |
| `--bg-2` | `#e3ecea` | partition divider floor, table top | button background |
| `--surface` | `#f8fbfa` | kart, input, modal | full-page background |
| `--surface-2` | `#dfe9e6` | passive chip, hover background | primary button |
| `--ink` | `#0f1a19` | title, body, icon | large background |
| `--ink-soft` | `#3f5450` | secondary text, description | — |
| `--ink-faint` | `#74857f` | decorative label, separator text | interactive text |
| `--accent` | `#1d6b52` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(15,26,25,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.95:1** · `ink-soft/bg` **7.27:1** · `ink-faint/bg` **3.49:1 (decorative)** · `accent-ink/accent` **6.41:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poiret One) | 28px (mobile 28px) | 500 | 1.06 | -0.02em |
| H2 | same | 27px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `28px` (buton, input, chip), `36px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Keskin köşe / 0 radius.
- Neon glow, gradient zemin, cam blur.
- 100ms altı geçişler (ağırlıksız ritmi bozar).
- Sürekli yüzme animasyonu (reduced-motion karşılığı yoksa).
- 36px üzeri radius.
- Poiret One üzerinde 600/700.
- Yoğun tablo ve 12'den fazla satır.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 28px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 28px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 28px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 28px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 28px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 28px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 28px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.15:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | Yörünge paneli 7/5; yüzen kart, ince halka, tek CTA | `shots/01-page.png` |
| Dashboard | orta | 3 yüzen kart; tablo yerine kart listesi | `shots/01-page.png` |
| Form | düşük | 46px alanlar, 28px radius, yavaş odak | `shots/01-page.png` |
| Liste / tablo | orta | 46px satır, boşluklu; satır hover'ı yavaş | `shots/01-page.png` |
| Boş durum | düşük | Boş halka + tek CTA, geniş boşluk | `shots/01-page.png` |
| Onboarding | orta | 3 adım, her adımda tek yüzen kart | `shots/01-page.png` |
| Pricing | orta | Plan kartları yüzen kademe; öne çıkan accent halka | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek yüzen panel, halka yok | `shots/01-page.png` |
| Modal | orta | Ortada yüzen modal, %35 örtü | `shots/01-page.png` |
| Bildirim / toast | düşük | Hap toast, yörünge yayı ile girer | `shots/01-page.png` |
| Hata | düşük | `--danger` halka + "yörünge dışı" metni | `shots/01-page.png` |
| Profil / ayar | orta | Hareket hızı (yavaş/normal), halka görünürlüğü | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.95:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.27:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.49:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.41:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.15:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.1 | ≥ 60 target | thin text |

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
| "Sisli" görünüyor | düşük kontrast + blur | kontrastı yükselt, blur'u kaldır |
| Hareket rahatsız | 100ms altı geçiş | 480ms+ hover, 1.0s+ giriş |
| Düzen dağınık | rastgele kayma | +6/−4px kademe kuralı |
| Kartlar yüzmüyor | gölge yönü karışık | gölge hep aşağı |
| Okunmuyor | Poiret One gövdede | Poiret yalnız başlık |
| Mobilde kayma | desktop kuralı korunmuş | 768 altında kayma kapat |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.grc.nasa.gov/www/k-12/airplane/orbit.html | NASA · Orbital mechanics — yörünge yayı ve hız dili |
| https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station | ESA · ISS research — ağırlıksız ortam metaforu |
| https://www.nngroup.com/articles/animation-duration/ | NN/g · Motion & easing — yavaş geçiş süreleri |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | WCAG 2.2 · Animation from interactions — hareketi kapatma zorunluluğu |

## AI brief

```text
Stil: Zero Gravity (styles/145-zero-gravity/style.md, tokens.json)
Token: sadece [data-style="zero-gravity"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Poiret One 400 (tracking .06em, yalnız başlık), gövde Inter 400/600,
  etiket IBM Plex Mono .2em. Ölçek 10/12/13/15/19/27/48; gövde ölçü 64ch.
Yüzey: buz mavisi-beyaz (#eef4f2); radius 28/36px, hap buton 999px; kartlar dikeyde 4-8px
  kademeli kayar, gölge hep aşağı (0 30px 70px -48px), tek katman.
Imza: ince yörünge halkası (1.5px, ekran başına 1) + yüzen nav (999px, sayfadan kopuk)
  + yavaş hareket (hover >= 480ms, giriş >= 1.0s).
Renk: tek accent #1d6b52 (eylem + aktif yörünge); alarm --danger, uyarı --warn.
Hareket: enter 1.08s cubic-bezier(.2,.7,.15,1) y36 stagger .14; scroll top 74% 1.05s y30 once;
  1 pin scrub 1.32 (+150%); hover 480ms scale 1.018; reduced-motion'da yüzme kapanır.
Yasak: keskin köşe, neon glow, gradient/blur, 100ms altı geçiş, 36px üstü radius, yoğun tablo.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Zero Gravity (zero-gravity) · family: Experimental & Future (136–145)
Token: --bg #eef4f2 · --surface #f8fbfa · --ink #0f1a19 · --accent #1d6b52 · --line rgba(15,26,25,.13)
Radius: 28px / 36px · Typography: Poiret One / Inter / IBM Plex Mono
Required: Kartlar dikeyde 4–8px kademeli kayar; gölge yönü hep aşağı (yüzme hissi) · Radius 28/36px; hiçbir köşe keskin değil · Poiret One yalnız başlıkta ve 400; gövde Inter, etiket mono
Banned: Keskin köşe / 0 radius. · Neon glow, gradient zemin, cam blur. · 100ms altı geçişler (ağırlıksız ritmi bozar).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="zero-gravity"] {
  --bg: #eef4f2; --bg-2: #e3ecea;
  --surface: #f8fbfa; --surface-2: #dfe9e6;
  --ink: #0f1a19; --ink-soft: #3f5450; --ink-faint: #74857f;
  --accent: #1d6b52; --accent-ink: #ffffff;
  --line: rgba(15,26,25,.13);
  --danger: #d5291c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 28px; --radius-lg: 36px;
  --shadow: 0 30px 70px -48px rgba(8,26,24,.6); --shadow-hard: none;
  --font-display: "Poiret One", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: 0;
}
```
