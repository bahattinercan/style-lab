# 62 · Warehouse Flow

> **In one sentence:** Raf, görev ve sevkiyatın tek satırda okunduğu, sarının yalnız "şimdi ne yapılacak" sorusunu yanıtladığı depo operasyon arayüzü.

| | |
|---|---|
| **Feeling** | hareketli, okunaklı, endüstriyel, acil |
| **Best for** | depo yönetimi (WMS), sevkiyat/tesisat takibi, sayım & stok sayfası, saha operasyon tableti |
| **Avoid** | lüks marka, sessiz okuma deneyimi, çocuk/wellness — burada yoğunluk "gürültü" olur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="warehouse-flow"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Warehouse Flow, depoyu bir **görev akışı** olarak çizer: her satır bir iş birimini (ürün + konum + miktar + durum) taşır, sarı yalnız o an yapılacak eylemi işaretler. Arayüz "bilgi göster" demez, "sıradaki işi göster" der: sayım, toplama, yükleme, teslim.

Üç kurucu karar: (1) **sert ofset** — kaldırılabilir öğe (kart, buton, etiket) 4px sert gölge alır, zemindeki panel almaz; böylece "elle taşınabilir" ile "sabit" ayrımı gölgeyle kurulur; (2) **tek doygun renk** — sarı accent dışında hiçbir doygun renk yok, durumlar `--ok`/`--warn`/`--danger` ile; (3) **eldivenli kullanım** — 44px hedef, 40px satır, 14px mono kod.

Bedeli: ekran kalabalıktır. Kalabalığın "dağınık" değil "operasyonel" görünmesini sağlayan şey **kutu disiplini** (2px radius, 1px çerçeve) ve satır numarası kolonudur.

### What is not
- **Bento Grid (05) değildir:** bento kart yığınıyla ritim kurar; burada satır/tablo ritmi vardır ve her kart 4px sert ofset taşır.
- **Neo-Brutalism (13) değildir:** neo-brutalism 2px+ siyah çerçeve ve pembe accent ile provokasyon arar; Warehouse Flow endüstriyel sarı + Archivo Black ile işlevsel kalır, radius 2px'tir.
- **Utility (44) değildir:** Utility sakin ürün arayüzüdür, gölge yoktur ve tek sütun ölçüyle çalışır; burada ofset gölge, durum şeritleri ve yoğun tablo var.
- **Terminal UI (45) değildir:** terminal koyu ve mono-tek ailedir; bu stil açık zemin, Archivo Black başlık ve Inter gövdedir.

### Where it comes from
Depo raf etiketleri, sevkiyat manifestoları ve forklift kabini uyarı dilinden: sarı-siyah şerit, büyük punto rakam, kutu içinde kod. Bugün yeniden kullanılmasının nedeni: WMS arayüzleri operatörün elinde tabletle, eldivenle ve ayakta kullanılıyor; küçük punto ve düşük kontrast sahada çalışmıyor. Klişeye dönüşmemesi için korunacak detay: **sert ofset gölgenin yalnız taşınabilir öğeye verilmesi** ve sarının metin rengi olarak kullanılmaması.

### Recognition test in 3 seconds
1. Butonlar ve kartlar **4px sağa-aşağı sert ofset gölge** taşıyor; paneller taşımıyor.
2. Tek doygun renk sarı; sarı yalnız dolgu, asla metin değil.
3. Tablo satırlarında solda kutu içinde sıra numarası, sağda durum chip'i var.
4. Başlıklar Archivo Black, sıkı satır aralığı (0.96), negatif tracking.
5. Her liste ekranında barkod tarama alanı ve canlı bekleyen iş sayacı görünüyor.

## Visual signature
- **Sert ofset:** `box-shadow: var(--shadow-hard)` = `4px 4px 0 rgba(23,21,15,.88)`; yalnız buton, kart, chip, modal. Panel ve tablo zemini gölgesiz.
- **Raf şeridi:** bölüm ayırıcı olarak 8px yüksekliğinde accent/siyah çapraz şerit bandı (hero ve landing altında bir kez).
- **Kutu numarası:** tablo satırının solunda 24×24px, 1px `--ink` çerçeveli, 11px mono sıra numarası.
- **Durum şeridi:** toast ve satır başında 6px dikey şerit; renk + metin etiketi birlikte.
- **Archivo Black blok başlık:** H1 56px/0.96, `-0.02em`; iki satırdan fazla kırılmaz (max 18ch).
- **Mono kod dili:** SKU, raf, sipariş no — hepsi 11–13px JetBrains Mono büyük harf, `0.1em` aralık, `--surface-2` zemin.
- **Kenarlık 2px:** nav alt çizgisi ve modal çerçevesi 2px `--ink`; geri kalan her şey 1px `--line`.
- **Typography:** Archivo Black (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#b98000`; neutral scale `#f3f1ec` → `#17150f`.
- **Radius:** `2px` / `8px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her satır bir iş birimini temsil eder: ürün + konum (raf/bin) + miktar + durum
2. Durum dörtlüsü (hazırlanıyor · yolda · gecikti · teslim) hem renk hem etiketle
3. Kaldırılabilir öğe (kart, buton, etiket) 4px sert ofset gölge alır; panel zeminde gölge yok
4. Sayı ve kodlar mono + tabular; SKU/bin etiketleri büyük harf
5. Dokunma hedefi 44px; satır yüksekliği 40px (depoda eldivenli kullanım)
6. Tarama (barkod) yolu her liste ekranında görünür: tek alan + kamera ikonu

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3f1ec` | page background | as a card background |
| `--bg-2` | `#e7e4dc` | partition divider floor, table top | button background |
| `--surface` | `#fcfbf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f0ede5` | passive chip, hover background | primary button |
| `--ink` | `#17150f` | title, body, icon | large background |
| `--ink-soft` | `#56523f` | secondary text, description | — |
| `--ink-faint` | `#807b66` | decorative label, separator text | interactive text |
| `--accent` | `#b98000` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1608` | text above accent | non-accent background |
| `--line` | `rgba(23,21,15,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.17:1** · `ink-soft/bg` **6.96:1** · `ink-faint/bg` **3.76:1 (decorative)** · `accent-ink/accent` **5.29:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `8px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 8px üstü radius, hap buton (999px), yumuşak gölge.
- Cam/blur, gradient zemin, grain.
- Serif/el yazısı display, italik, sentetik kalın Archivo Black.
- Büyük harf gövde metni; 12ch altı başlık ölçüsü.
- Sürekli kayan konveyör, sonsuz nabız, parallax.
- Sarı üzerine beyaz metin; sarı 1px çizgi.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.3:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 8/4 hero: Archivo Black başlık + sağda canlı sevkiyat rayı | `shots/01-page.png` |
| Dashboard | çok yüksek | 4 KPI + iş kuyruğu tablosu + raf doluluk çubukları | `shots/01-page.png` |
| Form | orta | tek sütun, barkod alanı, 44px hedefler | `shots/01-page.png` |
| Liste / tablo | çok yüksek | 40px satır, sıra kutusu, durum chip'i, toplu işlem çubuğu | `shots/01-page.png` |
| Boş durum | orta | "bekleyen iş yok" + sayaç sıfır + tarama başlat | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: depo seç → raf haritası → ilk sayım | `shots/01-page.png` |
| Pricing | orta | karşılaştırma tablosu, öne çıkan plan accent şeritli | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, 44px alanlar, hata durumu net | `shots/01-page.png` |
| Modal | orta | iş detayı: ürün, raf, miktar, son hareket | `shots/01-page.png` |
| Bildirim | orta | 44px toast + sol durum şeridi, 3.5sn | `shots/01-page.png` |
| Hata | düşük | kırmızı çerçeve + neden + tekrar dene | `shots/01-page.png` |
| Profil / ayar | orta | anahtar/değer listesi, 40px satır, depo seçici | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.17:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.96:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.76:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.3:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.6 | ≥ 60 target | thin text |

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
| "Ucuz afiş" hissi | her öğede 4px ofset | ofset yalnız taşınabilir öğede |
| Sarı okunmuyor | sarı metin kullanılmış | metin `--ink`/`--accent-ink`, sarı sadece dolgu |
| Ekran gürültülü | 3+ doygun renk | tek sarı + durum üçlüsü |
| Satırlar karışıyor | 32px altı satır | 40px satır + 1px ayırıcı |
| Sahada dokunamıyor | 36px buton | 44px hedef + eldiven payı |
| Başlık taşıyor | 18ch üstü metin | başlığı kısalt, mobilde 32px |
| Koyu modda ofset kayboluyor | siyah gölge siyah zeminde | koyu blokta gölge rengi `rgba(0,0,0,.55)` + 1px açık çizgi |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `wabi-sabi` | Two different ornamental languages compete on the same screen |
| Mixing | `art-deco` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.gs1.org/standards/barcodes-epcrfid-id-keys/gs1-general-specifications | GS1 · barkod ve kimlik anahtarları — SKU/SSCC etiket dili ve kod uzunluğu |
| https://www.sap.com/products/scm/extended-warehouse-management.html | SAP · Extended Warehouse Management — görev/raf/dalga kavramları ve durum modeli |
| https://www.dhl.com/global-en/home/insights-and-innovation.html | DHL · lojistik içgörüleri — sevkiyat durumu ve operasyon metrikleri dili |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 · Target Size (Minimum) — 44px dokunma hedefi ölçütü |
| https://www.iso.org/standard/77520.html | www.iso.org — ISO 7000 grafik sembolleri (depo/taşıma ikonları) |

## AI brief

```text
Stil: Warehouse Flow (styles/62-warehouse-flow/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="warehouse-flow"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black 400, tek ağırlık) yalnız H1/H2 ve modal başlığında; --font-body (Inter 400/600) gövde;
  --font-mono (JetBrains Mono) SKU/raf/sipariş kodları ve tablo sayıları (tabular).
  H1 56px/0.96 -0.02em max 18ch; gövde 15px/1.55; etiket 11px mono +0.12em büyük harf.
Yüzey: panel = 1px var(--line) gölgesiz; taşınabilir öğe (buton/kart/chip/modal) = 2px var(--ink) + var(--shadow-hard) 4px ofset.
  radius --radius 2px, --radius-lg 8px. Derinlik yalnız ofsetten; blur/cam yok.
Renk: tek doygun renk var(--accent) sarı, YALNIZ dolgu; dolgu üstü metin var(--accent-ink).
  Durumlar: hazırlanıyor / yolda / gecikti / teslim — renk + büyük harf etiket + 6px şerit.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; 44px dokunma hedefi, 40px tablo satırı.
Hareket: enter 0.30s cubic-bezier(.34,1.56,.64,1) 18px stagger 0.02 · scroll top 78% 0.5s 40px once:false ·
  pin açık scrub 0.65 +80% · hover 110ms scale 1.045; prefers-reduced-motion zorunlu.
Yasak: hap buton, yumuşak gölge, cam, sarı metin, sürekli kayan bant, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Warehouse Flow (warehouse-flow) · family: Industrial (56–65)
Token: --bg #f3f1ec · --surface #fcfbf8 · --ink #17150f · --accent #b98000 · --line rgba(23,21,15,.22)
Radius: 2px / 8px · Typography: Archivo Black / Inter / JetBrains Mono
Required: Her satır bir iş birimini temsil eder: ürün + konum (raf/bin) + miktar + durum · Durum dörtlüsü (hazırlanıyor · yolda · gecikti · teslim) hem renk hem etiketle · Kaldırılabilir öğe (kart, buton, etiket) 4px sert ofset gölge alır; panel zeminde gölge yok
Banned: 8px üstü radius, hap buton (999px), yumuşak gölge. · Cam/blur, gradient zemin, grain. · Serif/el yazısı display, italik, sentetik kalın Archivo Black.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="warehouse-flow"] {
  --bg: #f3f1ec; --bg-2: #e7e4dc;
  --surface: #fcfbf8; --surface-2: #f0ede5;
  --ink: #17150f; --ink-soft: #56523f; --ink-faint: #807b66;
  --accent: #b98000; --accent-ink: #1a1608;
  --line: rgba(23,21,15,.22);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 8px;
  --shadow: 0 1px 0 rgba(23,21,15,.10); --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.02em; --blur: 0px; --grain: 0;
}
```
