# 141 · Planetary Service

> **In one sentence:** Gezegen yörüngesindeki servis görevlerini eşmerkezli halkalar, mono telemetri ve fırlatma penceresi sayaçlarıyla tek koyu konsolda toplayan operasyon arayüzü.

| | |
|---|---|
| **Feeling** | görev odaklı, soğukkanlı, teknik, uzun soluklu |
| **Best for** | uydu/gezegen servis operasyonları, görev kontrol panosu, telemetri konsolu, yörünge planlama |
| **Avoid** | tüketici e-ticareti, çocuk/oyun ürünü, açık zeminli kurumsal vitrin — koyu konsol burada "boş" görünür |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="planetary-service"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Planetary Service, bir arayüzü **görev masası** olarak kurar: solda görev listesi, ortada yörünge panosu, sağda pencere (launch window) sayaçları. Ekranın her yerinde aynı soruya cevap aranır — *hangi cisim, hangi aşamada, ne zaman pencerede?*

Üç kurucu karar: (1) **eşmerkezli halka** — yörünge tek bir görsel öğeyle anlatılır; halka üzerinde en fazla üç cisim olur, fazlası okunurluğu bozar; (2) **mono telemetri** — bütün sayılar IBM Plex Mono ve tabular; birim (km, °, sn) her değerin yanında yazılır, çünkü görev kararı birimsiz veriyle verilmez; (3) **pencere önce** — kritik eşik yalnız renkle değil `T−…` sayacı ve metinle bildirilir.

Display **IBM Plex Mono** (600): başlık da teknik okunur, süs değil talimat gibi durur. Gövde Inter, etiketler yine mono.

Bedeli: bu stil ekranı yoğun kullanır; bu yüzden her panelde tek bir baskın sayı bulunur ve ikincil metrikler `--ink-soft` ile geri çekilir.

### What is not
- **Atlas Console (51) değildir:** 51 harita zeminli ve Cinzel başlıklıdır (radius 8/16); Planetary'de harita yoktur, yörünge halkası ve mono başlık vardır (radius 0).
- **Cockpit Avionics (65) değildir:** 65 Rajdhani + cyan ile uçuş göstergeleri kurar (2px radius, rings); burada display IBM Plex Mono, accent mavi ve radius 0'dır; ölçü birimi her değerde zorunludur.
- **Telemetry Grid (46) değildir:** 46 açık zeminli hairline metrik ızgarasıdır; Planetary koyu ve asimetriktir (8/4).
- **Cyberpunk (22) değildir:** 22 neon sarı ve HUD efektleri kullanır; burada accent tek mavi, glow yoktur.

### Where it comes from
Görev kontrol odaları (NASA/ESA flight dynamics), uydu servis (on-orbit servicing) operasyonları ve yer istasyonu konsolları. Ekranda yeniden kullanılmasının nedeni: servis görevlerinde kararın **zaman penceresi** üzerinden verilmesi — bu yüzden sayaç, listeden daha öndedir. Klişeye dönüşmemesi için korunacak detay: her değerin birimli olması ve yörünge halkasının gerçekten cisim taşıması.

### Recognition test in 3 seconds
1. Koyu lacivert zemin; ortada eşmerkezli halka ve üzerinde cisimler.
2. Başlıklar mono (IBM Plex Mono): harfler eşit genişlikte, hafif aralıklı.
3. Her sayının yanında birim var (km, °, sn); pencere sayacı `T−…` biçiminde.
4. Hiçbir köşe yuvarlak değil: paneller ve butonlar keskin (radius 0).
5. Accent mavi yalnız seçili cisim ve birincil eylemde.

## Visual signature
- **Eşmerkezli halka:** 2 halka (`--accent` + `--line`), merkezde 8px cisim noktası; ekran başına bir kez.
- **Telemetri ızgarası:** 24px aralıklı 1px çizgi, opaklık ≤ %70; yalnız yörünge panelinde.
- **Mono başlık:** 42px, ağırlık 600, tracking 0.04em; gövde Inter.
- **Pencere chip'i:** 22px yükseklik, radius 999px, mono 10px 0.12em; kritik eşikte accent zemin.
- **Gölge:** yalnız yüzen panelde `0 16px 36px -30px`; kartlarda gölge yok.
- **Doku:** `--grain .02` + 96px yıldız tozu (≤ %18).
- **Typography:** IBM Plex Mono (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#2f6bc4`; neutral scale `#0a1420` → `#e6eef7`.
- **Radius:** `0px` / `0px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Her görev satırı: görev kimliği (mono), aşama, pencere sayacı, UTC damgası
2. Yörünge halkası ekran başına bir kez; halka üzerinde en fazla 3 cisim
3. Tüm sayılar mono + tabular-nums; birim her değerin yanında
4. Pencere (launch window) kritik eşiği hem renk hem "T-…" metniyle gösterilir
5. Koyu zemin zorunlu; panel tonu ile zemin arasında en az bir basamak fark
6. Her ekranda tek canlı öğe (en fazla bir sayaç animasyonu)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a1420` | page background | as a card background |
| `--bg-2` | `#0e1a28` | partition divider floor, table top | button background |
| `--surface` | `#12202f` | kart, input, modal | full-page background |
| `--surface-2` | `#182a3c` | passive chip, hover background | primary button |
| `--ink` | `#e6eef7` | title, body, icon | large background |
| `--ink-soft` | `#a4b6c8` | secondary text, description | — |
| `--ink-faint` | `#75899e` | decorative label, separator text | interactive text |
| `--accent` | `#2f6bc4` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(230,238,247,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.82:1** · `ink-soft/bg` **8.91:1** · `ink-faint/bg` **5.14:1 (decorative)** · `accent-ink/accent` **5.22:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (IBM Plex Mono) | 26px (mobile 26px) | 500 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.62 | 0 |
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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Gezegen fotoğrafı/kolajı, NASA görsel duvarı.
- Neon glow, cam blur, gradient atmosfer.
- Yuvarlak köşe ve hap buton (radius daima 0).
- İkiden fazla accent tonu.
- Saniyede 1+ yanıp sönen uyarı.
- Birimsiz sayı ve saatsiz telemetri.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.55:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Yörünge paneli 8/4, solda tek cümle + pencere sayacı | `shots/01-page.png` |
| Dashboard | yüksek | Görev listesi + yörünge + sayaçlar; KPI'lar 3 satır | `shots/01-page.png` |
| Form | düşük | Görev tanımı: cisim, aşama, pencere; mono alanlar | `shots/01-page.png` |
| Liste / tablo | yüksek | 36px satır, zebra, sağda pencere sayacı | `shots/01-page.png` |
| Boş durum | orta | Boş halka + "görev planla" eylemi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: cisim → yörünge → pencere | `shots/01-page.png` |
| Pricing | orta | Servis kademeleri tablosu; her satırda birimli değer | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, halka yok; UTC saat görünür | `shots/01-page.png` |
| Modal | orta | Yörünge detayı: halka + aşama listesi | `shots/01-page.png` |
| Bildirim / toast | orta | UTC + görev kimliği mono tek satır | `shots/01-page.png` |
| Hata | düşük | `--danger` chip + "pencere kaçırıldı" metni | `shots/01-page.png` |
| Profil / ayar | orta | Birim sistemi, halka ölçeği, uyarı eşiği | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.82:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.91:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.14:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.22:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.55:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95.4 | ≥ 60 target | thin text |

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
| "Boş konsol" hissi | düşük yoğunluk | panele tek baskın sayı + birim ekle |
| Değer okunmuyor | birimsiz sayı | birim + tabular hizalama zorunlu |
| Halka süs gibi | cisim taşımıyor | halkaya en az bir cisim ve etiket koy |
| "Neon HUD" | glow + renkli halka | glow'u kaldır, tek accent |
| Renk körlüğünde belirsiz | yalnız renkli eşik | `T−…` metni + chip ekle |
| Mobilde taşma | 8/4 korunmuş | 768 altında tek sütun |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `atlas-console` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cockpit-avionics` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.nasa.gov/mission/iss/ | NASA · Mission Control — görev aşaması ve UTC damgası dili |
| https://www.esa.int/Enabling_Support/Operations/Ground_Systems_Engineering | ESA · Flight dynamics — pencere ve yörünge gösterimi |
| https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html | W3C · WCAG 2.2 Use of Color — uyarıyı renkle sınırlamama |
| https://www.ibm.com/design/language/data-visualization/ | IBM Design · Data viz — koyu zeminde seri renkleri |

## AI brief

```text
Stil: Planetary Service (styles/141-planetary-service/style.md, tokens.json)
Token: sadece [data-style="planetary-service"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display IBM Plex Mono 600 (tracking .04em), gövde Inter 400/600, sayı IBM Plex Mono.
  Ölçek 10/12/13/14/18/24/42; gövde ölçü 70ch; her değer birimli ve tabular.
Yüzey: koyu lacivert (#0a1420); radius 0 (keskin köşe); katman ayrımı 1px var(--line) + ton.
Imza: eşmerkezli yörünge halkası (ekran başına 1, en fazla 3 cisim) + 24px telemetri ızgarası
  + pencere chip'i (T−… sayacı); UTC damgası nav sağında mono.
Renk: tek accent #2f6bc4 (seçim/pencere); alarm --danger, uyarı --warn, nominal --ok.
Hareket: enter .57s cubic-bezier(.24,.72,.18,1) y22 stagger .06; scroll top 81% .67s y26 once;
  1 pin scrub .85 (+105%); hover 190ms scale 1.022; reduced-motion zorunlu.
Yasak: gezegen fotoğrafı, neon glow, yuvarlak köşe, birimsiz sayı, saniyede 1+ flaş.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Planetary Service (planetary-service) · family: Experimental & Future (136–145)
Token: --bg #0a1420 · --surface #12202f · --ink #e6eef7 · --accent #2f6bc4 · --line rgba(230,238,247,.15)
Radius: 0px / 0px · Typography: IBM Plex Mono / Inter / IBM Plex Mono
Required: Her görev satırı: görev kimliği (mono), aşama, pencere sayacı, UTC damgası · Yörünge halkası ekran başına bir kez; halka üzerinde en fazla 3 cisim · Tüm sayılar mono + tabular-nums; birim her değerin yanında
Banned: Gezegen fotoğrafı/kolajı, NASA görsel duvarı. · Neon glow, cam blur, gradient atmosfer. · Yuvarlak köşe ve hap buton (radius daima 0).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="planetary-service"] {
  --bg: #0a1420; --bg-2: #0e1a28;
  --surface: #12202f; --surface-2: #182a3c;
  --ink: #e6eef7; --ink-soft: #a4b6c8; --ink-faint: #75899e;
  --accent: #2f6bc4; --accent-ink: #ffffff;
  --line: rgba(230,238,247,.15);
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: 0 16px 36px -30px rgba(2,6,12,.95); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
