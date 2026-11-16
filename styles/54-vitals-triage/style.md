# 54 · Vitals Triage

> **In one sentence:** Vital bulguları büyük yuvarlak kartlarda, triyaj seviyesini sol şerit ve metinle kodlayan; sıcak-soğuk klinik zeminli, nabız halkasıyla durumu hissettiren sağlık panosu.

| | |
|---|---|
| **Feeling** | şefkatli, dikkatli, hızlı okunur, sakin |
| **Best for** | klinik triyaj panosu, hasta/vital takip ekranı, sağlık çağrı merkezi, refakatçi (caregiver) uygulaması |
| **Avoid** | finansal işlem yoğun ekran, geliştirici aracı, lüks vitrin — yuvarlak yüzey veri yoğunluğunda yer kaybettirir |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="vitals-triage"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Vitals Triage, klinik bir ekranı **triyaj masası** gibi kurar: her hasta satırı solda 4px seviye şeridi taşır, vital kartları büyük yuvarlak yüzeylerde değer + birim + referans aralığı + ölçüm saati gösterir. Yuvarlak köşe (14/22px) burada bir moda değil, "sert olmayan ama net" bir okunurluk kararıdır: panik anında ekran tehdit etmemeli.

Üç kurucu karar: (1) **seviye = şerit + sayı + sözcük** — triyaj seviyesi yalnız renkle değil, sol şerit genişliğiyle ve "2 · Acil" metniyle kodlanır; (2) **vital kartı tek şablon** — değer 44px mono, birim 13px, referans aralığı 11px; her vital aynı şablonu kullanır ki göz tarama hızı düşmesin; (3) **tek animasyon hakkı** — yalnız nabız halkası (durum göstergesi) canlıdır; geri kalan hareket 0.24s'lik hızlı girişle sınırlıdır.

Bedeli: yumuşak yüzey ve geniş padding yoğunluğu azaltır. Bu yüzden liste ekranında kart değil **satır** kullanılır (52px, sol şerit) — yuvarlaklık yalnız kart düzeyinde kalır.

### What is not
- **Claymorphism (11) değildir:** 11 kil dokusu ve çift gölgeyle hacim kurar; burada gölge tek katman ve ≤ %35, doku yoktur.
- **Telemetry Grid (46) değildir:** 46 eşit hairline hücrelerle nötr metrik ızgarasıdır; Vitals'ta 22px radius, sol seviye şeridi ve triyaj sözlüğü vardır.
- **Ethereal (29) değildir:** 29 düşük kontrastlı sis estetiğidir; burada gövde kontrastı 15.71:1 — klinik okunurluk önceliklidir.
- **Dopamine UI (18) değildir:** 18 renkli, oyuncu, yüksek doygunluktadır; Vitals'ta tek accent (klinik kırmızı) ve nötr klinik zemin vardır.

### Where it comes from
Acil servis triyaj ölçekleri (ESI 5 seviye, Manchester, RETTS), hemşire gözlem kağıdı ve modern klinik arayüzler (NHS Design System, Apple Health). Bugün yeniden kullanılmasının nedeni: sağlık verisinin **panik anında** okunabilir olması gerekliliği — büyük rakam, sakin yüzey, tek renk vurgu. Klişeye dönüşmemesi için korunacak detay: her ölçümün yanında saat ve referans aralığı bulunması; "hasta fotoğrafı ile duygu" tuzağına düşmemek.

### Recognition test in 3 seconds
1. Vital kartları büyük ve yuvarlak (22px); değerler 44px mono, yanında birim var.
2. Triyaj satırlarında sol tarafta 4px renkli şerit ve "1–5 · sözcük" etiketi.
3. Kartlarda EKG/nabız çizgisi ve yumuşak bir halka; hareket yalnız burada.
4. Zemin soğuk klinik beyazı; accent kiremit kırmızısı, üçüncü renk yok.
5. Her ölçümün yanında saat (`14:32`) mono olarak yazılı.

## Visual signature
- **Seviye şeridi:** satır solunda 4px dolu şerit; seviye 1–2 `--danger`, 3 `--warn`, 4–5 `--ok`; şerit her zaman metinle birlikte.
- **Vital şablonu:** değer 44px mono (`tabular-nums`), birim 13px, referans aralığı 11px `--ink-soft`, saat 11px mono sağ üstte.
- **Nabız halkası:** 44×44px, 2px `--accent` yay; `reduced-motion` altında sabit yay (animasyon yok).
- **EKG çizgisi:** 2px `--accent`, 12px ızgarada; eşik dışı segment `--danger` ile bölünür, gradyan yok.
- **Gölge:** tek katman `0 16px 32px -26px`; iç gölge ve bevel yok.
- **Doku:** `--grain: 0`; yumuşaklık yüzey ve radius ile, doku ile değil.
- **Typography:** Baloo 2 (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#b3341f`; neutral scale `#f4f8f7` → `#10201f`.
- **Radius:** `14px` / `22px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her vital kartı: değer (büyük mono), birim, referans aralığı, ölçüm saati
2. Triyaj seviyesi sol 4px şerit + metin etiketi + seviye numarası; renk tek başına anlam taşımaz
3. Eşik dışı değer hem renk hem "yüksek/düşük" sözcüğüyle işaretlenir
4. Yuvarlak yüzey: kart 22px, kontrol 14px, buton 999px
5. Kritik uyarı ekranın üstünde tek satır, saat mono ve saniye hassasiyetinde
6. Boş/dolu durum aynı iskelet: kart + birincil eylem

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f8f7` | page background | as a card background |
| `--bg-2` | `#e8f1ef` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#eef5f3` | passive chip, hover background | primary button |
| `--ink` | `#10201f` | title, body, icon | large background |
| `--ink-soft` | `#47605d` | secondary text, description | — |
| `--ink-faint` | `#7d938f` | decorative label, separator text | interactive text |
| `--accent` | `#b3341f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(16,32,31,.11)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.71:1** · `ink-soft/bg` **6.33:1** · `ink-faint/bg` **3.05:1 (decorative)** · `accent-ink/accent` **6.13:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 28px (mobile 28px) | 600 | 1.12 | -0.02em |
| H2 | same | 27px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Kırmızı-yeşil tek başına ayrım; renk körlüğü güvenli kodlama zorunlu.
- Yanıp sönen alarm (>1/s) ve sürekli döngü (nabız halkası hariç).
- Fotoğraf/illüstrasyon ile duygu kurma; hasta kimliği gösteren görsel.
- 22px üzeri radius, sert siyah gölge, iç gölge/bevel.
- Neon tıbbi-tech mavisi, gradient zemin, cam efekt (blur ≤ 6px, yalnız sheet).
- Saatsiz ölçüm ve referans aralığı olmayan vital değeri.
- Emoji ile durum bildirimi.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 14px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 14px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 14px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 14px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 14px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 14px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 14px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.13:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Solda tek cümle + iki CTA, sağda vital kartı yığını (2 kart + halka) | `shots/01-page.png` |
| Dashboard | yüksek | Üstte 3 vital kartı, altta triyaj listesi (sol şerit + saat) | `shots/01-page.png` |
| Form | düşük | Vital girişi: büyük alanlar (48px), birim sabit, tek sütun | `shots/01-page.png` |
| Liste / tablo | yüksek | 52px satır, sol 4px seviye şeridi, sağda bekleme süresi mono | `shots/01-page.png` |
| Boş durum | orta | "Şu an bekleyen yok" + nabız halkası (sabit) + tek eylem | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: rol → vardiya → bildirim; her adımda tek seçenek grubu | `shots/01-page.png` |
| Pricing | orta | Klinik plan tablosu; seviye chip'leri ile kapsam gösterilir | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel; 48px alanlar, 3px odak halkası, hata sol şeritle | `shots/01-page.png` |
| Modal | orta | Hasta detayı sheet: kimlik, seviye chip'i, vital geçmişi | `shots/01-page.png` |
| Bildirim / toast | orta | "2 · Acil — oda 3 · 14:32" mono saatle, üst orta | `shots/01-page.png` |
| Hata | düşük | Kart içinde `--danger` sol şerit + "ölçüm alınamadı" + yeniden dene | `shots/01-page.png` |
| Profil / ayar | orta | Vardiya, bildirim eşiği, referans aralığı birimleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.71:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.33:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.05:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.13:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.13:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99 | ≥ 60 target | thin text |

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
| "Çocuk uygulaması" hissi | fazla yuvarlak + pastel çok renk | radius 22px'te sabit, accent tek, palet klinik |
| Kritik değer gözden kaçıyor | yalnız renk kullanılmış | sol şerit + "yüksek" sözcüğü + kalın mono değer |
| Kart yığını dağınık | farklı yükseklikte kartlar | tek şablon: değer/birim/aralık/saat satırları sabit |
| Okunmuyor | 300 ağırlık + düşük kontrast | 400 taban, ink-soft ≥ 6:1 |
| Alarm yoruyor | yanıp sönen kart | yalnız nabız halkası canlı, alarm statik şerit |
| Mobilde dokunulamıyor | 36px buton | 48px hedef, tek sütun |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `claymorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.ahrq.gov/patient-safety/settings/emergency-dept/esi.html | ESI · Emergency Severity Index handbook — 5 seviyeli triyaj ölçeği ve sözlüğü |
| https://service-manual.nhs.uk/design-system | NHS Digital · Design system — klinik arayüzde erişilebilirlik kararları |
| https://www.england.nhs.uk/statistics/statistical-work-areas/ae-waiting-times-and-activity/ | NHS · Triage in emergency departments — bekleme süresi metrikleri |
| https://developer.apple.com/design/human-interface-guidelines/healthkit | Apple · Health design guidance — vital kartı ve birim gösterimi |

## AI brief

```text
Stil: Vitals Triage (styles/54-vitals-triage/style.md, tokens.json)
Token: sadece [data-style="vitals-triage"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Baloo 2 600 (tracking -0.015em), gövde Nunito 400/700, etiket+sayı IBM Plex Mono.
  Ölçek 11/13/16/20/27/44; gövde ölçü 62ch; vital değeri 44px mono tabular.
Yüzey: klinik beyaz zemin, radius 14px/22px, tek katman yumuşak gölge (<= %35).
Imza: vital kartı tek şablon (değer + birim + referans aralığı + saat); triyaj satırında
  sol 4px seviye şeridi + numara + sözcük; tek canlı öğe nabız halkası.
Hareket: enter .24s cubic-bezier(.16,1,.3,1) y6 stagger .02; scroll top 92% .26s y4 once;
  pin yok; hover 150ms scale 1.025; reduced-motion'da halka sabit.
Yasak: kırmızı-yeşil tek başına ayrım, yanıp sönen alarm, fotoğraf, 22px üstü radius, gradient.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Vitals Triage (vitals-triage) · family: Data & Indicator (46–55)
Token: --bg #f4f8f7 · --surface #ffffff · --ink #10201f · --accent #b3341f · --line rgba(16,32,31,.11)
Radius: 14px / 22px · Typography: Baloo 2 / Nunito / IBM Plex Mono
Required: Her vital kartı: değer (büyük mono), birim, referans aralığı, ölçüm saati · Triyaj seviyesi sol 4px şerit + metin etiketi + seviye numarası; renk tek başına anlam taşımaz · Eşik dışı değer hem renk hem "yüksek/düşük" sözcüğüyle işaretlenir
Banned: Kırmızı-yeşil tek başına ayrım; renk körlüğü güvenli kodlama zorunlu. · Yanıp sönen alarm (>1/s) ve sürekli döngü (nabız halkası hariç). · Fotoğraf/illüstrasyon ile duygu kurma; hasta kimliği gösteren görsel.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="vitals-triage"] {
  --bg: #f4f8f7; --bg-2: #e8f1ef;
  --surface: #ffffff; --surface-2: #eef5f3;
  --ink: #10201f; --ink-soft: #47605d; --ink-faint: #7d938f;
  --accent: #b3341f; --accent-ink: #ffffff;
  --line: rgba(16,32,31,.11);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00833a;
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
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 16px 32px -26px rgba(16,32,31,.35); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.015em; --blur: 0px; --grain: 0;
}
```
