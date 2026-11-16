# 59 · Üretim Hattı · MES

> **In one sentence:** Üretim hattının nabzını tek ekranda tutan operasyon arayüzü: açık gri zemin, tek katman gölge, durum renk kodu ve tabular sayaçlarla kurulmuş yoğun MES panosu.

| | |
|---|---|
| **Feeling** | çalışkan, ölçülü, sürekli, güvenilir |
| **Best for** | MES/üretim izleme, vardiya panosu, OEE ve hat verimliliği, depo-iş emri ekranları |
| **Avoid** | lüks vitrin, kampanya sayfası, duygusal onboarding — yoğunluk burada "kalabalık" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="mes-production-line"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
MES panosu, arayüzü **vardiya ekranı** gibi kurar: açık nötr gri zemin, beyaz kart, tek katman `0 1px 2px` gölge, her KPI'da 3px durum şeridi, tüm sayılar tabular mono. Süsü tamamen keser; karşılığında tarama hızı, hat karşılaştırması ve "şu an ne oluyor" cevabı kazanır.

Kurucu kararları üç tanedir. Birincisi **durum renk kodu sözleşmedir**: `--accent` çalışıyor, `--danger` durdu, `--warn` beklemede — üçü de ikon + metinle tekrarlanır. İkincisi **sayı hizası** önceliktir: tüm sayılar mono, `tabular-nums`, birim ayrı sütunda; sütunlar sağa dayalı. Üçüncüsü **gölge tek katmandır**: kart ayrımı 1px hairline, hover'da gölge büyümez.

Bedeli: karakter zayıftır — bu stil vitrin işi yapmaz. MES'i jenerik olmaktan kurtaran detay, **KPI kartlarının solundaki 3px durum şeridi** ve vardiya karşılaştırma etiketidir.

### What is not
- **Utility (44) değildir:** 44 tek vurgu mavi ve 8/12px radius ile "ürün arayüzü" dilidir; MES'te üç durum rengi, 4px radius ve 32px satır yüksekliğiyle **operasyon** dili vardır.
- **Terminal UI (45) değildir:** 45 koyu zemin ve tamamen mono tipografidir; MES açık zemin, Inter gövde ve yalnız sayaçlarda mono kullanır.
- **Bento Grid (05) değildir:** 05 değişken boyutlu kutularla vitrin kurar; MES'te kart genişliği 12 kolonun katıdır, keyfi boyut yok.
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype ve görünür ızgara; MES açık zemin ve ızgarasız (gölge tek katman).

### Where it comes from
ISA-95 katman modeli ve OEE/vardiya panolarından; fabrika terminallerinin (dokunmatik HMI, 24" kontrol odası ekranı) okunabilirlik pratiğinden. Bugün tekrar önemli çünkü uzaktan izleme ekranları çoğaldı ve en sık hata "dekoratif dashboard": okunmayan grafik, hizasız sayı. Klişeye dönmemesi için korunacak detay: **32px satır yüksekliği** ve durum şeridinin 3px'te kalması.

### Recognition test in 3 seconds
1. Her KPI kartının solunda 3px renkli şerit var (yeşil/kırmızı/amber).
2. Tüm sayılar mono ve sağa dayalı; birimler ayrı sütunda.
3. Kart ayrımı 1px hairline + çok hafif gölge; gölge hover'da büyümüyor.
4. Tablo satır yüksekliği 32px, ekranda 6+ satır görünüyor.
5. Radius 4px (kontrol) / 8px (kart); hiçbir buton hap biçiminde değil.

## Visual signature
- **Durum şeridi:** KPI kartının solunda 3px `--accent` / `--danger` / `--warn`; şerit uzunluğu kart yüksekliği kadar.
- **Tabular sayaç:** `.num` 28px mono 700, `font-variant-numeric: tabular-nums`, `.06em` birim etiketiyle.
- **Tek katman gölge:** `0 1px 2px rgba(23,32,28,.10)`; yüzen katmanda `0 8px 24px` — iki seviye, üçüncü yok.
- **Vardiya etiketi:** her KPI'da 11px mono üst etiket + `▲/▼ %x` karşılaştırma satırı.
- **Yoğun tablo:** 32px satır, 1px `--line` ayırıcı, hover'da `--surface-2`.
- **Durum noktası:** nav sağında 6px daire + mono etiket (ÇALIŞIYOR / DURDU).
- **Hareket imzası:** 440ms `cubic-bezier(.12,.94,.24,1)`, 20px, stagger 0.035 — sayaçlar "akar", sıçramaz.
- **Typography:** JetBrains Mono (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#0d7a4f`; neutral scale `#f2f4f3` → `#17201c`.
- **Radius:** `4px` / `8px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Durum renk kodu sabit: çalışıyor = --accent, durdu = --danger, beklemede = --warn; her zaman ikon + metinle
2. Tüm sayılar tabular-nums ve mono; birim sütunda ayrı
3. Satır yüksekliği 32px; yoğun tablo 6 satır/görünür alan hedefi
4. Gölge tek katman (0 1px 2px); kart ayrımı 1px hairline
5. Radius 4px kontrol / 8px kart; hap radius yok
6. Her KPI kartı bir önceki vardiya ile karşılaştırma etiketi taşır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2f4f3` | page background | as a card background |
| `--bg-2` | `#e8ebe9` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f9f8` | passive chip, hover background | primary button |
| `--ink` | `#17201c` | title, body, icon | large background |
| `--ink-soft` | `#4c5a53` | secondary text, description | — |
| `--ink-faint` | `#7d8a83` | decorative label, separator text | interactive text |
| `--accent` | `#0d7a4f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(23,32,28,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.09:1** · `ink-soft/bg` **6.57:1** · `ink-faint/bg` **3.26:1 (decorative)** · `accent-ink/accent` **5.37:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (JetBrains Mono) | 34px (mobile 24px) | 400 | 1.08 | -0.02em |
| H2 | same | 24px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
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
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Süs amaçlı gradyan, glow, cam.
- Orantılı (tabular olmayan) sayı, hizasız sütun.
- 12px üstü radius, hap buton.
- Ekran başına 1'den fazla sürekli hareket (konveyör animasyonu, akan şerit).
- Renk tek başına durum bildirimi.
- Serif display veya dekoratif illüstrasyon.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.37:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | başlık 34px mono, sağda canlı hat şeridi (3 satır KPI) | `shots/01-page.png` |
| Dashboard | **yüksek** | 4 KPI + hat tablosu + vardiya grafiği; süs sıfır | `shots/01-page.png` |
| Form | düşük | 36px input, etiket üstte 11px mono, tek kolon | `shots/01-page.png` |
| Liste / tablo | **yüksek** | 32px satır, 6+ satır görünür, toplu işlem çubuğu | `shots/01-page.png` |
| Boş durum | orta | "Vardiya kaydı yok" + tek eylem; durum şeridi nötr | `shots/01-page.png` |
| Onboarding | orta | 3 adım; her adımda tek karar, hat seçimi | `shots/01-page.png` |
| Pricing | orta | plan tablosu (satır bazlı), öne çıkan satır sol 3px accent | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | konvansiyon; yalnız odak halkası ve hairline | `shots/01-page.png` |
| Modal | orta | iş emri no başlıkta mono; tek gölge 8/24 | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, sol 3px durum şeridi + ikon | `shots/01-page.png` |
| Hata | düşük | `--danger` şerit + ikon + etiket; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | form + tehlike bölgesi kırmızı çerçeve | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.09:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.57:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.26:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.37:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.37:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.8 | ≥ 60 target | thin text |

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
| Ekran "dashboard şablonu" gibi | tüm kartlar aynı beyaz, durum yok | her KPI'ya 3px durum şeridi + karşılaştırma etiketi |
| Sayılar kayıyor | orantılı font veya mono olmayan rakam | `font-variant-numeric: tabular-nums` + mono |
| Gölge titriyor | hover'da gölge büyütülmüş | hover'da yalnız zemin `--surface-2` |
| Renk körlüğünde durum kayboluyor | yalnız şerit rengi | ikon + etiket ekle (ÇALIŞIYOR / DURDU) |
| Tablo 40px satıra çıkmış | padding şişmiş | 32px sabit, `padding: 4px 10px` |
| Pin kaydırırken tablo zıplıyor | iki ayrı rAF döngüsü | tek ScrollTrigger batch; ekran başına 1 pin |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `surrealism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Manufacturing_execution_system | Manufacturing execution system — ekran kapsamı ve KPI seti |
| https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard | ISA-95 — ISA-95 katman/terminoloji modeli |
| https://en.wikipedia.org/wiki/Overall_equipment_effectiveness | Overall equipment effectiveness — KPI tanımları ve birimler |
| https://www.ibm.com/design/language/data-visualization/ | IBM Design · data viz — grafik paleti ve eksen ritmi |

## AI brief

```text
Stil: Üretim Hattı · MES (styles/59-mes-production-line/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="mes-production-line"] değişkenleri; hard-coded renk/radius/gölge yasak.
Tipografi: --font-display JetBrains Mono 34/24/18 (700); --font-body Inter 15px/1.55;
  --font-mono JetBrains Mono 11–13px etiket/sayaç (.06em). Tüm sayılar tabular-nums.
Yüzey: --bg açık gri / --surface beyaz + 1px var(--line) + 0 1px 2px; yüzen katman 0 8px 24px.
  Radius 4px kontrol, 8px kart.
Renk: durum kodu accent #0d7a4f çalışıyor, --danger durdu, --warn beklemede — daima ikon + metin.
  ink/bg 15.09:1, ink-soft/bg 6.57:1, accent-ink/accent 5.37:1, ink-faint/bg 3.26:1 (dekoratif).
Bileşen: KPI kartı 16px padding + sol 3px durum şeridi + vardiya karşılaştırma etiketi; tablo satırı 32px.
Hareket: enter 440ms cubic-bezier(.12,.94,.24,1) 20px stagger .035; scroll top 76% 480ms 30px once;
  pin scrub 0.95 (+170%, ekran başına 1); hover 180ms görsel 1.016. prefers-reduced-motion zorunlu.
Yasak: gradyan/glow/cam, orantılı sayı, 12px üstü radius, ekran başına >1 sürekli hareket, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (durum şeridini ve sayaç hizasını nereye koydun).

Style: Üretim Hattı · MES (mes-production-line) · family: Industrial (56–65)
Token: --bg #f2f4f3 · --surface #ffffff · --ink #17201c · --accent #0d7a4f · --line rgba(23,32,28,.14)
Radius: 4px / 8px · Typography: JetBrains Mono / Inter / JetBrains Mono
Required: Durum renk kodu sabit: çalışıyor = --accent, durdu = --danger, beklemede = --warn; her zaman ikon + metinle · Tüm sayılar tabular-nums ve mono; birim sütunda ayrı · Satır yüksekliği 32px; yoğun tablo 6 satır/görünür alan hedefi
Banned: Süs amaçlı gradyan, glow, cam. · Orantılı (tabular olmayan) sayı, hizasız sütun. · 12px üstü radius, hap buton.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="mes-production-line"] {
  --bg: #f2f4f3; --bg-2: #e8ebe9;
  --surface: #ffffff; --surface-2: #f7f9f8;
  --ink: #17201c; --ink-soft: #4c5a53; --ink-faint: #7d8a83;
  --accent: #0d7a4f; --accent-ink: #ffffff;
  --line: rgba(23,32,28,.14);
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
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(23,32,28,.10); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
