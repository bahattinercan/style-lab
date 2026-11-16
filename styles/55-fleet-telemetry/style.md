# 55 · Fleet Telemetry

> **In one sentence:** Binlerce cihazın bağlantısını kapsama ızgarası ve tek satırlık cihaz kimliğiyle okuyan; accent'in yalnız "bağlantı aktif" anlamına geldiği filo konsolu.

| | |
|---|---|
| **Feeling** | tetikte, teknik, sakin, izleyen |
| **Best for** | IoT filo kontrolü, cihaz filosu izleme, saha sensör ağı, uzaktan bakım/kumanda konsolu |
| **Avoid** | lüks vitrin, editoryal içerik, çocuk/wellness ürünü — sürekli sayı "gürültü" olarak okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="fleet-telemetry"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Fleet Telemetry, bir **cihaz filosunun bağlantı durumunu** tek ekranda tutar: her cihaz tek satırda kimlik + durum kodu + sinyal çubuğu + son görülme saati gösterir; üstte kapsama ızgarası (20px nokta/hex deseni) hangi hücrelerde cihaz olduğunu, altta telemetri şeridi (ticker) son uplink olaylarını akıtır. Tipografi telegraphic'tir: display **Share Tech Mono** (tek ağırlık), gövde Inter, sayı JetBrains Mono.

Üç kurucu karar: (1) **kapsama önce** — kullanıcı önce "hangi bölgede cihaz var/yok" sorusunu görür, sonra tek tek cihazları; ızgara deseni dekor değil, kapsama haritasıdır. (2) **satır = cihaz** — her cihaz tek satırda beş alan taşır (kimlik, durum, sinyal, batarya, son görülme); kart yığını yoktur, yoğunluk 36px satırdadır. (3) **tek accent tek anlam** — ahududu accent yalnız "bağlantı aktif / seçili cihaz"; uyarı `--warn`, arıza `--danger`, uykuda `--ink-soft`.

Bedeli: bu stil bir "vitrin" değildir; pazarlama sayfasında büyük başlık ve geniş boşluk beklenmemelidir. Dengeli görünmesini sağlayan tek şey **hizalı sütunlar ve tek renk disiplini**.

### What is not
- **Telemetry Grid (46) değildir:** 46 açık gri zeminde eşit hairline metrik hücreleri (12 tile, 24px ızgara, Chakra Petch) kurar ve **teal** accent kullanır; Fleet'te kapsama nokta ızgarası + 36px cihaz satırı + **ahududu** accent + Share Tech Mono vardır, radius 0/2'dir (46'da 4/10).
- **Machined Metal Panel (57) değildir:** 57 fırçalanmış metal dokusu, Michroma display ve bakır accent ile donanım paneli estetiğidir; Fleet'te doku yoktur (`--grain: .02`), accent ahudududur ve kapsama ızgarası vardır.
- **MES Production Line (59) değildir:** 59 üretim hattı nabzını yeşil accent + JetBrains Mono display ile verir; Fleet'te display Share Tech Mono, accent ahududu, dil "filo/bağlantı"dır (hat/istasyon değil).
- **Maintenance CMMS (63) değildir:** 63 koyu zeminli iş emri kâğıdıdır (Chakra Petch + turuncu); Fleet açık serin beyazdır.

### Where it comes from
Şebeke/haberleşme operasyon merkezleri (NOC), LoRaWAN/LTE-M cihaz konsolları (The Things Network, Chirpstack), filo telemetri panelleri (Samsara, Geotab) ve endüstriyel HMI ölçütleri (ISA-101). Bugün yeniden kullanılmasının nedeni: IoT filolarında asıl sorunun "kaç cihaz var" değil **"hangisi konuşmuyor"** olması. Klişeye dönüşmemesi için korunacak detay: her satırda son görülme saatinin bulunması ve kapsama ızgarasının gerçek veriyle dolması — süs olarak nokta deseni basmak stili bozar.

### Recognition test in 3 seconds
1. Zemin serin beyaz; üstte 20px nokta/hex kapsama ızgarası var.
2. Satırlar 36px ve beş alanlı: kimlik (mono), durum kodu, sinyal çubuğu, batarya, saat.
3. Display telegraphic mono (Share Tech Mono); başlık 36px, geniş harf aralıklı.
4. Accent ahududu-magenta ve yalnız "aktif/seçili" anlamında; başka yerde görünmüyor.
5. Altta tek satır telemetri şeridi (ticker) akıyor, duraklat düğmesi var.

## Visual signature
- **Kapsama ızgarası:** 20px aralıklı 1.4px nokta, `--line` ile; cihaz olan hücreler accent, boş hücreler nötr.
- **Cihaz satırı:** 36px yükseklik; kimlik 12px mono 0.04em, durum 11px büyük harf + nokta, sinyal 4 çubuk, saat 11px mono sağa hizalı.
- **Durum kodu:** üç harf + nokta + renk (ÇEVRİMİÇİ / BEKLEMEDE / ARIZA); nokta 6px, yalnız `currentColor`.
- **Ticker:** 28px yükseklik, 1px üst çizgi, 12px mono; duraklat/oynat ve `prefers-reduced-motion` desteği zorunlu.
- **Gölge:** tek katman `0 6px 14px -12px`; kenarlık her zaman 1px `--line`.
- **Doku:** `--grain: .02` (pano yüzeyi); tarama çizgisi, neon ve glow yok.
- **Typography:** Share Tech Mono (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#a8386f`; neutral scale `#f1f4f7` → `#101820`.
- **Radius:** `0px` / `2px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Kapsama ızgarası: 20px hex/nokta deseni; cihaz kimliği + sinyal + son görülme tek satır
2. Her cihaz satırı: kimlik (mono), durum LED'i, sinyal çubuğu, son görülme saati
3. Durum üç harfli kod + renk: ÇEVRİMİÇİ / BEKLEMEDE / ARIZA
4. Alt telemetri şeridi (ticker) ekran başına bir kez, duraklatılabilir
5. Tüm sayılar mono tabular; birim her değerin yanında
6. Serin beyaz zemin + tek ahududu accent; accent yalnız "bağlantı aktif" anlamına gelir

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1f4f7` | page background | as a card background |
| `--bg-2` | `#e6ebf0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#edf1f5` | passive chip, hover background | primary button |
| `--ink` | `#101820` | title, body, icon | large background |
| `--ink-soft` | `#47555f` | secondary text, description | — |
| `--ink-faint` | `#7b8892` | decorative label, separator text | interactive text |
| `--accent` | `#a8386f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(16,24,32,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.21:1** · `ink-soft/bg` **6.96:1** · `ink-faint/bg` **3.29:1 (decorative)** · `accent-ink/accent` **6.07:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Share Tech Mono) | 22px (mobile 22px) | 600 | 1.12 | -0.02em |
| H2 | same | 23px | 600 | 1.22 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Koyu cyber/neon konsol paleti (bu stil açık, serin beyaz).
- Amber/turuncu accent (başka endüstriyel stillerle karışır; bu stil ahududu kullanır).
- 2px üzeri radius veya yuvarlak pill kontrol (pano köşeleri keskin kalır).
- Cam blur, gradient panel, glow, bevel.
- Sürekli dönen gösterge, 3B animasyon, saniyede 1'den fazla flash.
- Durumu yalnız renkle kodlamak; saat olmadan "son görülme" göstermek.
- Süs illüstrasyon ve dekoratif ikon.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.07:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | Solda tek cümle + 2 CTA, sağda kapsama ızgarası + 3 cihaz satırı önizleme | `shots/01-page.png` |
| Dashboard | yüksek | Üstte kapsama paneli (8/4), altta cihaz tablosu + ticker | `shots/01-page.png` |
| Form | düşük | Cihaz ekleme: kimlik, bölge, profil; 36px alanlar tek sütun | `shots/01-page.png` |
| Liste / tablo | yüksek | 36px satır, zebra, sinyal çubukları, sağda son görülme | `shots/01-page.png` |
| Boş durum | orta | Boş kapsama ızgarası + "cihaz bağla" tek eylemi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: bölge → ağ → ilk cihaz; her adımda tek ızgara | `shots/01-page.png` |
| Pricing | orta | Cihaz sayısı kademeleri tablosu; kapsama küçük önizleme | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, 36px alanlar, hata sol şeritle | `shots/01-page.png` |
| Modal | orta | Cihaz detayı: kimlik, durum geçmişi (sparkline), komut düğmeleri | `shots/01-page.png` |
| Bildirim / toast | orta | "ARIZA · cihaz f-204 · 14:32" mono tek satır | `shots/01-page.png` |
| Hata | düşük | Satırda `--danger` nokta + durum kodu + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | Ağ profili, ölçüm aralığı, alarm eşiği, ticker tercihi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.21:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.96:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.29:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.07:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.07:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.8 | ≥ 60 target | thin text |

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
| "46 ile aynı" hissi | açık gri zemin + eşit hücreler | kapsama nokta ızgarası + 36px cihaz satırı; accent ahududuya sabit |
| Hangi cihaz susmuş okunmuyor | saat sütunu atlanmış | sağa hizalı mono "son görülme" her satırda zorunlu |
| Renk körlüğünde ayırt edilemiyor | yalnız renkli nokta | üç harfli durum kodu + nokta + renk |
| Ekran gürültülü | her satırda ikon + grafik | satırda en fazla 2 görsel öğe (nokta + çubuk) |
| Ticker baş ağrıtıyor | durdurulamıyor | duraklat düğmesi + reduced-motion'da dur |
| Mobilde kesiliyor | 5 alan sığdırılmış | saat sabit, kimlik ellipsis, batarya ikon-only |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.thethingsnetwork.org/docs/ | The Things Network · console — cihaz kimliği, sinyal ve son görülme düzeni |
| https://lora-alliance.org/resource_hub/ | LoRa Alliance · device telemetry — uplink/downlink ve kapsama göstergesi dili |
| https://www.isa.org/standards-and-publications/isa-standards/isa-101-standards | ISA-101 · HMI design standard — alarm ve renk kullanım ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | www.w3.org — ticker için duraklat ölçütü |

## AI brief

```text
Stil: Fleet Telemetry (styles/55-fleet-telemetry/style.md, tokens.json)
Token: sadece [data-style="fleet-telemetry"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Share Tech Mono 400 (telegraphic, yalnız h1/h2), gövde Inter 400/600,
  kimlik+saat JetBrains Mono. Ölçek 11/12/14/18/23/36; gövde ölçü 74ch.
Yüzey: serin beyaz (#f1f4f7); 1px var(--line), radius 0/2px (keskin pano), gölge yalnız yan panelde.
Imza: üstte 20px kapsama nokta ızgarası (cihaz olan hücreler accent); 36px cihaz satırı
  (kimlik / durum kodu / 4 çubuk sinyal / batarya / son görülme saati); altta tek satır
  telemetri şeridi + duraklat düğmesi.
Renk: tek accent #a8386f (aktif bağlantı / seçili); arıza --danger, uyarı --warn, çevrimiçi --ok.
Hareket: enter .88s cubic-bezier(.2,.8,.2,1) y14 stagger .06; scroll top 80% .6s y22 once;
  1 pin scrub .9 (+80%); hover 130ms scale 1.015; ticker duraklatılabilir; reduced-motion zorunlu.
Yasak: koyu cyber palet, amber accent, 2px üstü radius, cam/gradient, saniyede 1+ flash.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Fleet Telemetry (fleet-telemetry) · family: Data & Indicator (46–55)
Token: --bg #f1f4f7 · --surface #ffffff · --ink #101820 · --accent #a8386f · --line rgba(16,24,32,.13)
Radius: 0px / 2px · Typography: Share Tech Mono / Inter / JetBrains Mono
Required: Kapsama ızgarası: 20px hex/nokta deseni; cihaz kimliği + sinyal + son görülme tek satır · Her cihaz satırı: kimlik (mono), durum LED'i, sinyal çubuğu, son görülme saati · Durum üç harfli kod + renk: ÇEVRİMİÇİ / BEKLEMEDE / ARIZA
Banned: Koyu cyber/neon konsol paleti (bu stil açık, serin beyaz). · Amber/turuncu accent (başka endüstriyel stillerle karışır; bu stil ahududu kullanır). · 2px üzeri radius veya yuvarlak pill kontrol (pano köşeleri keskin kalır).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="fleet-telemetry"] {
  --bg: #f1f4f7; --bg-2: #e6ebf0;
  --surface: #ffffff; --surface-2: #edf1f5;
  --ink: #101820; --ink-soft: #47555f; --ink-faint: #7b8892;
  --accent: #a8386f; --accent-ink: #ffffff;
  --line: rgba(16,24,32,.13);
  --danger: #d62a1d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 6px 14px -12px rgba(16,19,23,.5); --shadow-hard: none;
  --font-display: "Share Tech Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
