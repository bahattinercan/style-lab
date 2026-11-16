# 51 · Atlas Console

> **In one sentence:** Haritayı arayüzün zemini sayan, koordinat şeridi ve katman disipliniyle çalışan lacivert saha konsolu; süsü pusula, ölçek ve lejantla değiştirir.

| | |
|---|---|
| **Feeling** | saha odaklı, ölçülü, serin, koordinatlı |
| **Best for** | saha operasyon konsolu, lojistik/kurye izleme, afet koordinasyonu, çoklu bölge yönetimi |
| **Avoid** | editoryal içerik, çocuk/wellness ürünü, vitrin e-ticareti — harita yoksa stil boş bir koyu panel olur |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="atlas-console"]` |
| **Composition** | `index` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Atlas Console, bir arayüzü **haritanın etrafına kurulmuş bir konsol** olarak ele alır: harita paneli sayfanın ortasında ve zeminin kendisidir; sol tarafta katman/varlık listesi, sağ tarafta lejant ve ölçek durur. Lacivert palet keyfi bir "dark mode" değil, vektör harita zemininin üstünde metnin ve pinlerin okunması için alınmış bir karardır.

Üç kurucu karar vardır. (1) **Koordinat şeridi**: her harita panelinin üst ve alt kenarında 1px çizgi üzerinde mono koordinat rakamları yürür; bu şerit stilin imzasıdır ve süs değil ölçüm aracıdır. (2) **Katman hiyerarşisi**: zemin, veri katmanı ve etiket katmanı birbirinden yalnızca 1px `--line` çizgisi ve yüzde 4 zemin farkıyla ayrılır; glow, blur veya renkli gradient yoktur. (3) **Tek accent = tek anlam**: çelik mavi accent yalnız "seçili / aktif rota" durumunu anlatır; alarm her zaman `--danger`, sönük durum `--ink-soft`.

Bedeli: bu stil ekranın yarısını haritaya verir. Harita olmayan bir sayfada (fiyatlandırma, makale) ritmi korumak için koordinat şeridi ve lejant rayı taşınır — stil, haritasız ekranda bile "ölçüm" hissini korumak zorundadır. Serif display (Cinzel) bu yüzden küçük tutulur: harita tipografisi bağırmaz.

### What is not
- **Trading Desk (47) değildir:** 47 grafit zemin + amber accent + Rajdhani ile fiyat/pozisyon panosu kurar, radius 2/4'tür; Atlas lacivert zemin + çelik mavi accent + Cinzel kullanır, radius 8/16'dır ve form dili koordinat şeridi/lejant rayıdır (47'de ticker ve emir defteri vardır).
- **Blueprint Drawing (56) değildir:** 56 cyanotype mavi zemin + cyan accent + keskin 0px köşe ile teknik çizim paftasıdır; Atlas'ta 8/16px yuvarlak panel ve ölçüm şeridi vardır, çizim ızgarası 8/64px değil 32px kartografik ızgaradır.
- **Terminal UI (45) değildir:** 45 tek mono aile + karakter ızgarası + 32px sabit satır kullanır; Atlas'ta tek mono yoktur (Inter gövde + IBM Plex Mono yalnız koordinat).
- **Telemetry Grid (46) değildir:** 46 açık zeminli, eşit hücreli hairline metrik ızgarasıdır; Atlas koyu ve asimetriktir (7/5 harita/liste bölünmesi).

### Where it comes from
Hidrografi/ofis haritaları (admiralty chart), harita odası estetiği (plotting table, asetat katmanlar) ve modern lojistik konsolları (Uber Base, Mapbox Studio, CARTO Dark Matter). Cinzel'in Roma kapital harfleri burada gravür başlık hissi verir; gövde sade kalır. Bugün yeniden kullanılmasının nedeni operasyon ekiplerinin aynı ekranda hem **konum** hem **durum** görmek istemesi. Klişeye dönüşmemesi için korunacak detay: koordinat şeridinin gerçekten rakam taşıması ve katman ayrımının tek çizgiyle kurulması — süs olarak "grid" basmak stili bozar.

### Recognition test in 3 seconds
1. Ekranın bir yarısı harita paneli; üst/alt kenarında mono koordinat rakamları var.
2. Zemin lacivert-siyah; hiçbir yerde glow, blur veya renkli gradient yok.
3. Pin üç durumdan biri: nötr (`--ink-soft`), seçili (çelik mavi accent), alarm (`--danger`).
4. Sağ üstte lejant rayı: 3 katman chip'i, seçili olan accent zeminli.
5. Başlıklar Cinzel (geniş harf aralıklı serif kapital), sayılar mono ve sağa hizalı.

## Visual signature
- **Kartografik ızgara:** 32px aralıklı 1px çizgi, `--line` ile; yalnız harita panelinde.
- **Koordinat şeridi:** 10px mono rakam, 8px harf aralığı, 1px üst/alt çizgi; şerit yüksekliği 20px.
- **Pin dili:** 10px dolu daire + 3px `--bg` halka + 1.5px accent halka; dokunma hedefi 44×44px.
- **Lejant rayı:** 3 chip, yükseklik 24px, radius 999px; seçili chip accent zemin + `--accent-ink` metin.
- **Katman ayrımı:** 1px `--line` + `--surface` içinde yüzde 4 açık ton; gölge yok (yalnız modalda `--shadow`).
- **Doku:** `--grain: .03` (harita kağıdı hissi), tarama çizgisi ve noise overlay yok.
- **Typography:** Cinzel (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#7fa8f0`; neutral scale `#0d1520` → `#e9eef6`.
- **Radius:** `8px` / `16px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Harita zeminin üstünde değil, arayüzün kendisidir: sol panel + harita + sağ lejant
2. Kenar koordinat şeridi her harita panelinde görünür (mono, 10px, 8px aralık)
3. Katman seçimi chip ile; seçili katman accent zemin + 2px alt çizgi
4. Pin üç durum: normal (ink-soft), seçili (accent), alarm (danger) — 44px dokunma halkası
5. Tüm sayısal değerler mono ve tabular-nums; ölçek çubuğu ekran başına bir kez
6. Koyu zemin zorunlu: eşik kontrastı ink/bg ≥ 4.5

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0d1520` | page background | as a card background |
| `--bg-2` | `#111b28` | partition divider floor, table top | button background |
| `--surface` | `#14202e` | kart, input, modal | full-page background |
| `--surface-2` | `#1a2836` | passive chip, hover background | primary button |
| `--ink` | `#e9eef6` | title, body, icon | large background |
| `--ink-soft` | `#a7b7cb` | secondary text, description | — |
| `--ink-faint` | `#7c8ea6` | decorative label, separator text | interactive text |
| `--accent` | `#7fa8f0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#081120` | text above accent | non-accent background |
| `--line` | `rgba(233,238,246,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.74:1** · `ink-soft/bg` **8.98:1** · `ink-faint/bg` **5.48:1 (decorative)** · `accent-ink/accent` **7.88:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 28px (mobile 28px) | 600 | 1.12 | -0.02em |
| H2 | same | 26px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.16em |
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
- Radius: `8px` (buton, input, chip), `16px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Açık (beyaz) zemin; bu stil lacivert saha konsoludur.
- Uydu fotoğrafı veya renkli arazi görselini arka plan yapmak.
- Neon glow, cam bulanıklık, renkli gradient atmosfer, iç gölge.
- 16px üzeri radius, yuvarlak pin balonu, gölgeli kart.
- İkiden fazla accent tonu; accent ile `--danger`'ı aynı hiyerarşide kullanmak.
- Amber/turuncu accent (bu stil çelik mavi kullanır — Trading Desk 47 ile karışır).
- Harita üstünde otomatik pan/parallax, sürekli dönen pusula.
- Dekoratif illüstrasyon ve emoji ile durum bildirimi.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.65:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Harita paneli sağda 7/5, solda tek cümle + 2 CTA; koordinat şeridi hero'da da görünür | `shots/01-page.png` |
| Dashboard | yüksek | Sol varlık listesi + orta harita + sağ lejant; KPI'lar liste üstünde 3 satır | `shots/01-page.png` |
| Form | düşük | Koordinat girişi mono, sağa hizalı; alan genişliği 320px | `shots/01-page.png` |
| Liste / tablo | yüksek | 40px satır, koordinat mono sağa hizalı, seçili satır sol 3px accent | `shots/01-page.png` |
| Boş durum | orta | Harita zemini boş bırakılmaz: nötr vektör arka plan + "bölge seç" eylemi | `shots/01-page.png` |
| Onboarding | yüksek | Adımlar sol şeritte 1-2-3, her adımda tek harita görevi | `shots/01-page.png` |
| Pricing | orta | Bölge sayısı tablosu; harita küçük önizleme olarak sağda | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Kimlik doğrulamada harita yok, yalnız koordinat şeridi dokusu | `shots/01-page.png` |
| Modal | orta | Varlık detayı yan panel; üstte koordinat, altta zaman damgalı olay listesi | `shots/01-page.png` |
| Bildirim / toast | orta | Tek satır: pin kimliği + durum + saat (mono) | `shots/01-page.png` |
| Hata | düşük | `--danger` pin + "bölgeye ulaşılamadı" metni; harita gri kalır | `shots/01-page.png` |
| Profil / ayar | orta | Katman varsayılanları, ölçek birimi, koordinat formatı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.74:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.98:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.48:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.88:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.65:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.7 | ≥ 60 target | thin text |

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
| "Oyun haritası" gibi görünüyor | neon pin + glow + gradient | accent'i tek tut, glow'u sil, pin 3 duruma indir |
| 47 ile karışıyor | amber accent + grafit zemin | accent çelik maviye, zemin laciverte sabitlenir |
| Harita okunmuyor | zemin ile pin aynı tonda | pin halkası `--bg` ile çevrelenir (3px) |
| Panel haritanın üstünde yüzüyor | gölge + cam blur | gölgeyi kaldır, 1px `--line` kullan |
| Koordinatlar kayıyor | oransal font + px genişlik | mono + `ch` birimi + sağa hizalama |
| Cinzel her yerde | display gövdeye taşmış | display yalnız h1/h2; gövde Inter |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://docs.mapbox.com/studio-manual/guides/ | Mapbox Studio · cartography — katman/lejant disiplini, harita tipografisi |
| https://baseweb.design/ | Uber Base · Design — koyu operasyon paneli, yoğun tablo satırı |
| https://carto.com/basemaps/ | CARTO · Dark Matter — koyu harita zemini ve kontrast hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text contrast — pin ve harita çizgisi kontrast ölçütü |

## AI brief

```text
Stil: Atlas Console (styles/51-atlas-console/style.md, tokens.json)
Token: sadece [data-style="atlas-console"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Cinzel 600 (tracking .06em, yalnız h1/h2), gövde Inter 400/600,
  sayı+koordinat IBM Plex Mono. Ölçek 10/12/15/19/26/48; gövde ölçü 66ch.
Yüzey: lacivert (#0d1520); katman ayrımı 1px var(--line) + %4 ton. Glow/blur/gradient yok.
  Radius: --radius 8px, --radius-lg 16px. Gölge yalnız modalda.
Imza: harita paneli en büyük yüzey; üst/alt kenarda 10px mono koordinat şeridi;
  sağ üstte 3 katmanlı lejant rayı; pin 3 durum (nötr/seçili/alarm) 44px hedef.
Renk: tek accent #7fa8f0 (seçim/aktif rota); alarm --danger, uyarı --warn, sağlıklı --ok.
Hareket: enter .44s cubic-bezier(.25,.46,.45,.94) y12 stagger .07; scroll top 78% .5s y18 once;
  1 pin scrub .6 (+90%, scale 1→1.04); hover 120ms scale 1.010; prefers-reduced-motion zorunlu.
Yasak: açık zemin, uydu fotoğrafı, amber accent, neon glow, 16px üstü radius, otomatik pan.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Atlas Console (atlas-console) · family: Data & Indicator (46–55)
Token: --bg #0d1520 · --surface #14202e · --ink #e9eef6 · --accent #7fa8f0 · --line rgba(233,238,246,.16)
Radius: 8px / 16px · Typography: Cinzel / Inter / IBM Plex Mono
Required: Harita zeminin üstünde değil, arayüzün kendisidir: sol panel + harita + sağ lejant · Kenar koordinat şeridi her harita panelinde görünür (mono, 10px, 8px aralık) · Katman seçimi chip ile; seçili katman accent zemin + 2px alt çizgi
Banned: Açık (beyaz) zemin; bu stil lacivert saha konsoludur. · Uydu fotoğrafı veya renkli arazi görselini arka plan yapmak. · Neon glow, cam bulanıklık, renkli gradient atmosfer, iç gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="atlas-console"] {
  --bg: #0d1520; --bg-2: #111b28;
  --surface: #14202e; --surface-2: #1a2836;
  --ink: #e9eef6; --ink-soft: #a7b7cb; --ink-faint: #7c8ea6;
  --accent: #7fa8f0; --accent-ink: #081120;
  --line: rgba(233,238,246,.16);
  --danger: #e83e2e;
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
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 18px 40px -32px rgba(4,8,14,.9); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: 0;
}
```
