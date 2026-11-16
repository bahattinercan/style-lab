# 52 · Experiment Split

> **In one sentence:** Her kararı iki panelin yan yana kanıtıyla veren; kontrol/varyant ayrımını renk değil etiket, ölçü ve tek kez çizilen bölme çizgisiyle kuran deney masası.

| | |
|---|---|
| **Feeling** | ölçülü, kanıtçı, sakin, karşılaştırmalı |
| **Best for** | deney (A/B) paneli, ürün analitiği, fiyat/teklif testi, özellik bayrağı karşılaştırması |
| **Avoid** | lüks vitrin, editoryal anlatı, çocuk/oyun ürünü — karşılaştırma yoksa stil yarısını kaybeder |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="experiment-split"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Experiment Split, arayüzü **karşılaştırma masası** olarak kurar: bir ekranda iddia edilen her sayı, iki panelin (kontrol ve varyant) yan yana durmasıyla kanıtlanır. Panel genişlikleri 6/6 eşittir; ayrım 1px dikey çizgi ve sol 3px renk bandıyla kurulur. Yuvarlatılmış yüzeyler (10/16px) karşılaştırmayı "tehdit" gibi değil "tablo" gibi okutur.

Üç kurucu karar: (1) **iki panel kuralı** — karşılaştırma olmayan ekranda stil tek panele düşer ve o panel farklı bir zemin tonu (`--surface-2`) alır, böylece "ikinci panel nerede?" sorusu doğmaz; (2) **delta rozeti dil bilgisi** — `+%4.2`, `-1.8 pp`, `n=12.480` gibi etiketler mono ve her zaman işaret + iki hane taşır; renk tek başına anlam vermez; (3) **sessiz accent** — indigo accent yalnız varyantı ve birincil eylemi işaretler; sonuç (kazanan) yazıyla söylenir.

Bedeli: bu stil "vitrin" değildir; tek ürünlü bir landing'de boşluk hissi zayıftır. Bu yüzden karşılaştırma olmayan sayfalarda bile bir "önce/sonra" ya da "eşik/referans" ikilisi kurulur.

### What is not
- **Utility (44) değildir:** 44 ürün arayüzüdür, accent eylem rengidir, karşılaştırma kavramı yoktur; burada accent **varyant** kimliğidir.
- **Telemetry Grid (46) değildir:** 46 eşit hücreli metrik ızgarasıdır (tek eksen: değer); burada iki eksen ve iki panel vardır, tile 96px değil panel 320px+ yüksekliktedir.
- **Grand Tourer (41) değildir:** 41 lüks vitrin dilidir (serif display, geniş boşluk, tek konu); Experiment Split sans display + ölçüm etiketi kullanır.
- **Swiss Design (02) değildir:** 02 keskin köşe (0px radius) ve 3px siyah kural kullanır; burada 10/16px radius ve hairline çizgi var.

### Where it comes from
İstatistiksel deney kültürü (A/B testleri, feature flag'ler) ve ürün analitiği panelleri (Optimizely, Amplitude, Statsig). Bugün yeniden kullanılmasının nedeni: deney sonuçlarının **karar** olarak okunması gerekliliği — panel, grafik değil cümle üretir. Klişeye dönüşmemesi için korunacak detay: kontrol panelinin her zaman nötr kalması ve delta rozetinin işaretsiz yazılmaması.

### Recognition test in 3 seconds
1. Ekranda iki eşit panel var; birinin solunda 3px indigo bant, diğerinde nötr bant.
2. Paneller arasında tek dikey hairline çizgi; gölge yok.
3. Her sayının yanında örneklem (`n=…`) ya da güven aralığı etiketi var.
4. Delta rozetleri mono, işaretli (`+`/`−`) ve iki haneli.
5. Radius 10–16px; köşeler yumuşak ama butonlar hap değil.

## Visual signature
- **Bölme çizgisi:** 1px `--line`, paneller arası tam yükseklik; 900px altında yatay 1px'e döner.
- **Panel bandı:** sol kenarda 3px renk bandı — varyant `--accent`, kontrol `--ink-faint`.
- **Delta rozeti:** 26px yükseklik, radius 999px, mono 11px, 0.08em; pozitif accent, negatif `--danger`, nötr `--ink-soft`.
- **Örneklem satırı:** 11px mono, `n=12.480 · GA %95`, her panelin altında.
- **Gölge:** yalnız yüzen sonuç panelinde ve `0 12px 28px -24px` — kartlar gölgesiz.
- **Doku:** `--grain: 0`; ayrım için %4 opaklıkta 16px nokta ızgara yalnız hero panelinde.
- **Typography:** Space Grotesk (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#4b3ee8`; neutral scale `#f7f7fb` → `#15151f`.
- **Radius:** `10px` / `16px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her karşılaştırma iki panel: kontrol (nötr) ve varyant (accent) — etiketleri zorunlu
2. Bölme çizgisi 1px diagonal veya dikey; panel genişlikleri 6/6 eşit
3. Delta rozeti mono: işaret + iki hane + yüzde; renk tek başına anlam taşımaz
4. Örneklem ve güven aralığı her grafikte yazılır
5. Filtre çubuğu tek satır, sticky; tarih aralığı chip olarak
6. Karar anı (kazanan/berabere) tek büyük satır: 54px display + mono gerekçe

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f7fb` | page background | as a card background |
| `--bg-2` | `#eeeef6` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f2fa` | passive chip, hover background | primary button |
| `--ink` | `#15151f` | title, body, icon | large background |
| `--ink-soft` | `#55566b` | secondary text, description | — |
| `--ink-faint` | `#85869c` | decorative label, separator text | interactive text |
| `--accent` | `#4b3ee8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(21,21,31,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.96:1** · `ink-soft/bg` **6.71:1** · `ink-faint/bg` **3.34:1 (decorative)** · `accent-ink/accent` **6.66:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 32px (mobile 32px) | 600 | 1.12 | -0.02em |
| H2 | same | 29px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- İkiden fazla karşılaştırma rengi; kontrol için accent kullanmak.
- Gradient, 3B grafik, gölgeli kart, cam efekt.
- Sayı sayan sayaç animasyonu ve grafik "çizilme" animasyonu.
- 16px üzeri radius, tam hap buton (999px yalnız chip/rozet).
- Pasta grafikle karşılaştırma; eksen etiketsiz grafik.
- Kazananı yalnız renkle bildirmek.
- Örneklemsiz yüzde iddiası.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.66:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Solda iddia, sağda iki panel önizleme; bölme çizgisi hero'da görünür | `shots/01-page.png` |
| Dashboard | yüksek | Üstte deney listesi, altta seçili deneyin iki paneli + delta rozetleri | `shots/01-page.png` |
| Form | düşük | Deney kurulumu: tek sütun, hipotez alanı 64ch, metrik seçimi chip | `shots/01-page.png` |
| Liste / tablo | yüksek | Deney listesi 44px satır; durum chip'i, örneklem mono | `shots/01-page.png` |
| Boş durum | orta | "Henüz deney yok" + iki boş panel iskeleti (bölme çizgisi korunur) | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: hipotez → metrik → örneklem; her adımda tek panel | `shots/01-page.png` |
| Pricing | orta | Plan karşılaştırması iki panel mantığıyla; delta rozeti yok | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel; ikinci panel yerine mono güven satırı | `shots/01-page.png` |
| Modal | orta | Deney detayı: üstte hipotez, altta iki panel, en altta karar satırı | `shots/01-page.png` |
| Bildirim / toast | orta | "Varyant önde: +%4.2 · n=12.480" mono tek satır | `shots/01-page.png` |
| Hata | düşük | Panelde kesikli çerçeve + "veri alınamadı" + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | Varsayılan anlamlılık eşiği, örneklem uyarısı, birim seçimi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.96:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.71:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.34:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.66:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.66:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.2 | ≥ 60 target | thin text |

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
| "Reklam bannerı" hissi | iki renkli büyük paneller + gradient | accent'i banda indir, panel zeminini `--surface` yap |
| Sonuç okunmuyor | yalnız renkli rozet | rozete işaret + birim + örneklem ekle |
| Paneller eşit değil | grid 7/5'e kaymış | 6/6 sabitle, `minmax(0,1fr)` kullan |
| Rakamlar titriyor | oransal font + sayaç animasyonu | mono + `tabular-nums`, sayaç yok |
| Mobilde taşıyor | yatay iki panel korunmuş | 900px altında dikey yığın |
| Güven kaybı | örneklemsiz yüzde | `n=` ve güven aralığı zorunlu |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `synthwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.evanmiller.org/how-not-to-run-an-ab-test.html | Evan Miller · How Not To Run an A/B Test — karar cümlesi ve örneklem dilini kurma |
| https://www.optimizely.com/optimization-glossary/ab-testing/ | Optimizely · Experimentation glossary — kontrol/varyant terminolojisi |
| https://support.google.com/analytics/answer/1745147 | Google · A/B Testing best practices — istatistiksel anlamlılık sunumu |
| https://carbondesignsystem.com/data-visualization/getting-started/ | IBM Carbon · Data viz — iki serili grafik paleti ve eksen dili |

## AI brief

```text
Stil: Experiment Split (styles/52-experiment-split/style.md, tokens.json)
Token: sadece [data-style="experiment-split"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Space Grotesk 700 (tracking -0.025em), gövde Inter 400/600, sayı Space Mono.
  Ölçek 11/13/15/20/29/54; gövde ölçü 64ch.
Yüzey: iki eşit panel (6/6), aralarında 1px var(--line); sol kenarda 3px bant
  (kontrol --ink-faint, varyant --accent). Radius 10/16px; gölge yalnız sonuç panelinde.
Imza: delta rozeti (işaret + iki hane + birim, mono), örneklem satırı "n=… · GA %95",
  kontrol kesikli / varyant dolu grafik serisi.
Hareket: enter .32s cubic-bezier(.4,0,.2,1) y10 stagger .045; scroll top 86% .38s y14 once;
  pin yok; hover 180ms scale 1.005; prefers-reduced-motion zorunlu.
Yasak: üçüncü karşılaştırma rengi, gradient, sayaç animasyonu, hap buton, pasta grafik.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Experiment Split (experiment-split) · family: Data & Indicator (46–55)
Token: --bg #f7f7fb · --surface #ffffff · --ink #15151f · --accent #4b3ee8 · --line rgba(21,21,31,.10)
Radius: 10px / 16px · Typography: Space Grotesk / Inter / Space Mono
Required: Her karşılaştırma iki panel: kontrol (nötr) ve varyant (accent) — etiketleri zorunlu · Bölme çizgisi 1px diagonal veya dikey; panel genişlikleri 6/6 eşit · Delta rozeti mono: işaret + iki hane + yüzde; renk tek başına anlam taşımaz
Banned: İkiden fazla karşılaştırma rengi; kontrol için accent kullanmak. · Gradient, 3B grafik, gölgeli kart, cam efekt. · Sayı sayan sayaç animasyonu ve grafik "çizilme" animasyonu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="experiment-split"] {
  --bg: #f7f7fb; --bg-2: #eeeef6;
  --surface: #ffffff; --surface-2: #f2f2fa;
  --ink: #15151f; --ink-soft: #55566b; --ink-faint: #85869c;
  --accent: #4b3ee8; --accent-ink: #ffffff;
  --line: rgba(21,21,31,.10);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b75600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 12px 28px -24px rgba(21,21,31,.35); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.025em; --blur: 0px; --grain: 0;
}
```
