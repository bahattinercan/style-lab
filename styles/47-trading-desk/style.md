# 47 · Trading Desk

> **In one sentence:** Fiyatın ve pozisyonun tek bakışta okunduğu, amber vurgulu grafit zeminde 24px satırlarla akan emir defteri arayüzü.

| | |
|---|---|
| **Feeling** | gergin, kesin, hızlı, soğukkanlı |
| **Best for** | trading/finans terminali, emir defteri, portföy izleme, kripto borsa paneli |
| **Avoid** | lüks marka vitrini, sağlık/kamu formu, çocuk ürünü — sürekli sayı ve keskin kontrast yorar |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="trading-desk"]` |
| **Composition** | `sticky` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Trading Desk, ekranı bir **işlem masası** gibi böler: üstte fiyat ve pozisyon, altında emir defteri ve grafik, en üstte kayan ticker bandı. Kurucu kararları üç tanedir. Birincisi **24px satır**: her satır aynı yükseklikte, rakamlar tabular, ondalık basamak sembole göre sabit; göz sütun boyunca kaymadan iner. İkincisi **tek sıcak vurgu**: grafit zeminin üstünde yalnız amber (`--accent`) dikkat çeker; alış/satış anlamı `--ok`/`--danger` ile ayrı bir kanaldan gelir. Üçüncüsü **gölgesiz katman**: derinlik yalnız zemin tonu ve 1px hairline ile kurulur, çünkü gölge veri yoğun ekranda kontrast kaybı üretir.

Bedeli: bu arayüz sakin değildir ve uzun okuma için uygun değildir. Kazancı: saniyede birkaç karar veren kullanıcı için **hiza disiplini** — 24px satır, sabit ondalık, 8px gutter, 2px radius.

### What is not
- **Terminal UI (45) değildir:** 45 karakter ızgarası ve tek mono ailedir; burada gövde Space Grotesk, rakam JetBrains Mono, başlık Rajdhani — üç aile üç iş.
- **Telemetry Grid (46) değildir:** 46 açık zeminli, 96px tile'lı ve durum-eşik odaklıdır; 47 koyu zeminli, 24px satırlı ve fiyat odaklıdır (asimetri kalıcı 5/4/3).
- **Cyberpunk (22) değildir:** 22'de neon çok renk ve parlaklık vardır; 47'de tek sıcak vurgu, sıfır parlama, sıfır blur.
- **Executive KPI (48) değildir:** 48 vitrin dilidir (serif, 64px rakam, geniş boşluk); 47 operasyon dilidir (26px rakam, 8px padding, dar boşluk).

### Where it comes from
1980'lerde Bloomberg ve Reuters dealing terminal'lerinin monokrom amber ekranlarından; bugün kripto borsalarının (order book + depth chart) ve profesyonel tradingView tarzı panellerin dili. Amber'in nedeni tarihseldir (monokrom CRT fosforu) ama işlevseldir: sıcak tek renk, soğuk veri grisinin içinde hızlı hedef olur. Klişeye dönüşmemesi için korunacak detay: **24px satır yüksekliğinin kırılmaması** ve yön kodunun renkten bağımsız da yazılması.

### Recognition test in 3 seconds
1. Ekranın ortasında iki yana yaslanmış bir emir defteri var: solda alış, sağda satış, arada derinlik çubuğu.
2. Tüm sayılar mono ve ondalık hizası bozulmuyor; satırlar 24px.
3. En üstte soldan sağa akan 28px ticker bandı: sembol + fiyat + ▲/▼ yüzde.
4. Kartlar neredeyse kare (2–4px radius), gölge yok; ayrım yalnız 1px hairline.
5. Tek sıcak renk amber; gerisi grafit grisi + alış yeşili / satış kırmızısı.

## Visual signature
- **24px satır ızgarası:** tablo satırı, emir defteri satırı ve ticker satırı aynı 24px yükseklikte; 8px gutter, 8px panel padding.
- **Amber tek vurgu:** `--accent #f2a33c`, yalnız aktif sekme, birincil eylem ve odak halkasında; metin üstünde `--accent-ink #171002` (9.07:1).
- **Derinlik çubuğu:** satır arka planında `linear-gradient(90deg, color-mix(...) 0 N%, transparent N%)`; alışta `--ok`, satışta `--danger`, opaklık %14.
- **Yön üçlüsü:** ▲/▼ işareti + renk + metin (`ALIŞ`/`SATIŞ`); ekran görüntüsü siyah-beyaz basılsa da yön okunur.
- **Ticker bandı:** 28px yükseklik, 12 sembol, 8 saniyede bir tek satır kayma (yalnız `transform`), hover'da durur.
- **Kart köşesi:** `--radius` 2px, `--radius-lg` 4px; hiçbir yüzeyde 4px üstü yuvarlaklık yok.
- **Hover dili:** 70ms'de zemin `--surface-2`'e kayar, görsel ölçek yalnız `1.004`; gölge/parlaklık artışı yok.
- **Typography:** Rajdhani (display) + Space Grotesk (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#f2a33c`; neutral scale `#101418` → `#e8eef2`.
- **Radius:** `2px` / `4px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her sayı mono + tabular; fiyat 2, hacim 0 ondalık — ondalık basamak sembole göre sabit
2. Alış/satış yönü ▲▼ işareti + renk + metin (`ALIŞ`/`SATIŞ`) üçlüsüyle yazılır
3. Emir defteri satır yüksekliği 24px, derinlik çubuğu satırın %0–100'ü
4. Ekranın üst yarısı daima fiyat + pozisyon; alt yarısı emir defteri + grafik
5. Ticker bandı en fazla 12 sembol; 8 saniyede bir, tek satır kayar
6. Klavye kısayolu (B/S/Esc) buton etiketinde görünür

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#101418` | page background | as a card background |
| `--bg-2` | `#151b20` | partition divider floor, table top | button background |
| `--surface` | `#161d23` | kart, input, modal | full-page background |
| `--surface-2` | `#1c242b` | passive chip, hover background | primary button |
| `--ink` | `#e8eef2` | title, body, icon | large background |
| `--ink-soft` | `#9fb3bf` | secondary text, description | — |
| `--ink-faint` | `#6f8593` | decorative label, separator text | interactive text |
| `--accent` | `#f2a33c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#171002` | text above accent | non-accent background |
| `--line` | `rgba(232,238,242,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.8:1** · `ink-soft/bg` **8.52:1** · `ink-faint/bg` **4.8:1 (decorative)** · `accent-ink/accent` **9.07:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 36px (mobile 24px) | 600 | 1.12 | -0.02em |
| H2 | same | 20px | 600 | 1.22 | -0.015em |
| H3 | same | 16px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 14px | 400 | 1.55 | 0 |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Yuvarlak kart, yumuşak gölge, `backdrop-filter` blur, cam yüzey.
- Gradient zemin veya gradient metin.
- Dekoratif illüstrasyon, büyük fotoğraf, emoji.
- Renk dışında kod taşımayan alış/satış gösterimi.
- Sürekli nabız atan gösterge, sayaç yuvarlanması, yumuşak ease-out.
- Ondalık basamağı değişen fiyat; birimsiz hacim.
- Uydurma fiyat/sembol; eksik veri `{{price}}` gibi işaretli yer tutucu olur.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.88:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | ticker bandı + 5/4/3 asimetri + canlı defter önizlemesi | `shots/01-page.png` |
| Dashboard | yüksek | üstte fiyat/pozisyon, altta defter + mum grafik | `shots/01-page.png` |
| Form | düşük | emir formu: sembol, miktar, tip; 28px alanlar, mono | `shots/01-page.png` |
| Liste / tablo | yüksek | pozisyon tablosu 24px satır, zebra, ▲▼ | `shots/01-page.png` |
| Boş durum | orta | "pozisyon yok" + tek CTA; boş defter iskeleti kalır | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: hesap → risk limiti → ilk emir; her adımda gerçek defter | `shots/01-page.png` |
| Pricing | orta | komisyon tablosu 24px satır | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | dar giriş kartı, 2FA alanı mono | `shots/01-page.png` |
| Modal | orta | emir onayı: 4 satır mono özet + tek tehlike butonu | `shots/01-page.png` |
| Bildirim / toast | orta | dolum/iptal, sağ alt, 2500ms | `shots/01-page.png` |
| Hata | düşük | "bağlantı yok" bandı + yeniden bağlan; veriler soluk ama okunur | `shots/01-page.png` |
| Profil / ayar | orta | risk limiti, kısayol tuşları, iki kolon | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.8:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.52:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.8:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.07:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.88:1 | ≥ 3 | accent ring |
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
| Sayılar sütun boyunca kayıyor | orantılı rakam veya farklı ondalık | `tabular-nums` + sembol başına sabit ondalık |
| Panel "oyuncak" görünüyor | radius 8px üstü veya gölge eklenmiş | 2/4px'e indir, gölgeyi sil |
| Emir defteri okunmuyor | derinlik çubuğu %14'ün üstünde | opaklığı %10–14 aralığında tut |
| Renk körü kullanıcı yönü kaçırıyor | yalnız renk kodu | ▲/▼ + `ALIŞ`/`SATIŞ` metni zorunlu |
| Ticker göz yoruyor | sürekli kayma veya 12'den fazla sembol | 8s aralık, hover'da dur, sembol sayısını 12'de tut |
| Ekran "terminal" gibi okunuyor | gövde metni de mono | gövde Space Grotesk, mono yalnız sayı/etiket |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `frutiger-aero` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.bloomberg.com/professional/products/bloomberg-terminal/ | Bloomberg Terminal — yoğun panel düzeni, klavye önceliği, amber vurgu |
| https://en.wikipedia.org/wiki/Order_book | Order book (Wikipedia) — bid/ask merdiveni ve derinlik gösterimi |
| https://www.tradingview.com/support/solutions/43000502610-chart-types/ | TradingView · Chart anatomy — mum gövde/fitil oranı, hacim yerleşimi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — grafik çizgisi ve derinlik çubuğu için 3:1 eşiği |

## AI brief

```text
Stil: Trading Desk (styles/47-trading-desk/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="trading-desk"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Rajdhani) başlıkta, --font-body (Space Grotesk) gövdede,
           --font-mono (JetBrains Mono) TÜM sayılarda — tabular-nums zorunlu.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 2px/4px; gölge YOK, ayrım 1px --line.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; satır yüksekliği 24px.
Izgara: kalıcı asimetri 5/4/3, gutter 8px, panel padding 8px.
Hareket: enter 0.22s cubic-bezier(.4,0,.1,1) 4px / stagger 0.015; scroll top 92% 0.26s 6px once:true;
         pin açık scrub 0.35 / +70%; hover 70ms scale 1.004. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradient, yuvarlak kart, renk-only yön kodu).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Trading Desk (trading-desk) · family: Data & Indicator (46–55)
Token: --bg #101418 · --surface #161d23 · --ink #e8eef2 · --accent #f2a33c · --line rgba(232,238,242,.14)
Radius: 2px / 4px · Typography: Rajdhani / Space Grotesk / JetBrains Mono
Required: Her sayı mono + tabular; fiyat 2, hacim 0 ondalık — ondalık basamak sembole göre sabit · Alış/satış yönü ▲▼ işareti + renk + metin (`ALIŞ`/`SATIŞ`) üçlüsüyle yazılır · Emir defteri satır yüksekliği 24px, derinlik çubuğu satırın %0–100'ü
Banned: Yuvarlak kart, yumuşak gölge, `backdrop-filter` blur, cam yüzey. · Gradient zemin veya gradient metin. · Dekoratif illüstrasyon, büyük fotoğraf, emoji.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="trading-desk"] {
  --bg: #101418; --bg-2: #151b20;
  --surface: #161d23; --surface-2: #1c242b;
  --ink: #e8eef2; --ink-soft: #9fb3bf; --ink-faint: #6f8593;
  --accent: #f2a33c; --accent-ink: #171002;
  --line: rgba(232,238,242,.14);
  --danger: #e83d2e;
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
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.015em; --blur: 0px; --grain: 0;
}
```
