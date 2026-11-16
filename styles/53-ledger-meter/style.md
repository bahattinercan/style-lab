# 53 · Ledger Meter

> **In one sentence:** Faturayı defter gibi okuyan; her tutarı sağa hizalı tabular rakam ve çift kuralla toplayan, tek ağırlıklı eski stil serifle fildişi kağıt sıcaklığı veren kullanım panosu.

| | |
|---|---|
| **Feeling** | güvenilir, sıcak, kesin, muhasebe düzenli |
| **Best for** | fatura/kullanım paneli, abonelik yönetimi, kota ve limit ekranı, muhasebe raporu |
| **Avoid** | oyun/eğlence ürünü, düşük yoğunluklu vitrin landing — sayı olmayan ekranda serif başlık boşa çalışır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="ledger-meter"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Ledger Meter, fatura ve kullanım verisini **kağıt defter** metaforuyla kurar: 28px aralıklı defter çizgisi, sağa hizalı tabular rakamlar, toplam satırında 3px çift kural ve fildişi kağıt zemini. Display, **tek ağırlıklı** EB Garamond'dur (yalnız 400): eski stil rakamlar ve kalın serif yerine sakin bir gravür hissi verir. Gövde Inter, bütün sayılar JetBrains Mono ve tabular hizalıdır.

Üç kurucu karar: (1) **hizalama = dürüstlük** — her tutar aynı ondalık hizasında durur; hizası bozuk bir fiyat tablosu güven kaybıdır; (2) **çift kural hiyerarşisi** — toplam/alt toplam yalnız kalınlıkla ayrılır (1px → 3px double), renkle değil; (3) **accent muhasebe anlamı taşır** — mürekkep lacivert `--accent` yalnız toplam satırı ve birincil eylemi işaretler; "tahsil edildi" durumu `--ok` ile ayrı tutulur.

Bedeli: bu stil yoğundur ve serif tek ağırlık olduğu için hiyerarşi punto + kural kalınlığı ile kurulmalıdır. Her ekranda tek bir "özet cümle" (serif 29px) bulunur; kullanıcı sayıya değil sonuca önce bakar.

### What is not
- **Executive KPI (48) değildir:** 48 Fraunces (çok ağırlıklı serif) + Jost gövde + krem zemin + **yeşil** accent ile 4 vitrin KPI kurar, radius 0/3'tür ve pin yoktur; Ledger tek ağırlıklı EB Garamond + Inter + fildişi + **mürekkep lacivert** accent kullanır, radius 2/6 ve pin scrub 1.35 taşır. Karıştırıldığında bakılacak fark: accent rengi ve tablo/toplam satırı varlığı.
- **Nordic Folk (66) değildir:** 66 Fraunces + Lora + koyu kırmızı accent ile folklorik sıcaklık kurar; Ledger'da doku defter çizgisidir, accent laciverttir.
- **Editorial Design (03) değildir:** 03 serif ile editoryal anlatı kurar, sayı dili yoktur; Ledger'da serif yalnız başlık ve toplam satırında, gövde sans ve her yerde tablo vardır.
- **Skeuomorphism (34) değildir:** 34 bevel/gravür ve malzeme taklidi yapar; Ledger'da yalnız defter çizgisi ve fildişi zemin vardır, hiçbir bevel yoktur.

### Where it comes from
Çift girişli defter (double-entry bookkeeping), fatura koşum cetveli ve muhasebe defteri estetiği; modern karşılığı Stripe Invoicing, GOV.UK tablo deseni ve kurumsal fatura panelleri. EB Garamond'un eski stil rakamları burada "elle yazılmış cetvel" hissini taşır (tabular hizalama yine mono sütunda). Bugün yeniden kullanılmasının nedeni: abonelik/kullanım fiyatlandırmasının **açıklanabilir** olması gerekliliği — kullanıcı "neden bu tutar?" sorusunun cevabını tabloda görmelidir. Klişeye dönüşmemesi için korunacak detay: tablonun gerçekten hizalı olması ve defter çizgisinin metni kesmemesi (çizgi %6 opaklık).

### Recognition test in 3 seconds
1. Zemin fildişi; ekranda 28px aralıklı ince defter çizgileri var.
2. Başlık tek ağırlıklı eski stil serif (EB Garamond), gövde sans — iki aile yan yana.
3. Tüm tutarlar sağa hizalı ve ondalıkları alt alta.
4. Toplam satırı 3px çift kural ile ayrılmış ve mürekkep lacivert.
5. Radius 2–6px; hiçbir yerde yumuşak büyük köşe veya cam efekt yok.

## Visual signature
- **Defter çizgisi:** 28px aralıklı 1px çizgi, `--line` ile %55 opaklık; yalnız tablo/zemin arkasında.
- **Sayı hizası:** tüm tutarlar `--font-mono` + `font-variant-numeric: tabular-nums`, sağa hizalı, iki ondalık.
- **Çift kural:** toplam satırının üstünde `3px double var(--line)`, metin `--accent`.
- **Kota çubuğu:** 6px yükseklik, radius 2px, `--surface-2` ray + accent dolgu; eşik aşımı `--warn`.
- **Doku:** `--grain: .04` + defter çizgisi; doku metnin arkasında kalır, kontrastı düşürmez.
- **Başlık ağırlığı:** EB Garamond 400, satır aralığı 1.06; başlık asla 48px üstüne çıkmaz.
- **Typography:** EB Garamond (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#22456b`; neutral scale `#faf7ee` → `#1c1913`.
- **Radius:** `2px` / `6px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Tablolar defter çizgisine oturur: 34px satır, 28px doku ızgarası
2. Tüm tutarlar sağa hizalı, tabular-nums, iki ondalık; para birimi ayrı sütun
3. Toplamlar 3px double kural ile ayrılır ve accent metinle yazılır
4. Kullanım çubuğu tek satır: kullanılan / kota + yüzde; eşik aşımı warn
5. Başlıklar Fraunces (serif), gövde Inter, tüm sayılar mono
6. Fatura dönemi her ekranda görünür (üst sağ, mono)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf7ee` | page background | as a card background |
| `--bg-2` | `#f2ecdc` | partition divider floor, table top | button background |
| `--surface` | `#fffdf6` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f0e1` | passive chip, hover background | primary button |
| `--ink` | `#1c1913` | title, body, icon | large background |
| `--ink-soft` | `#56503f` | secondary text, description | — |
| `--ink-faint` | `#8a8068` | decorative label, separator text | interactive text |
| `--accent` | `#22456b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(28,25,19,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.37:1** · `ink-soft/bg` **7.5:1** · `ink-faint/bg` **3.65:1 (decorative)** · `accent-ink/accent` **9.85:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 29px (mobile 29px) | 600 | 1.12 | -0.02em |
| H2 | same | 29px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.55 | 0 |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- 6px üzeri radius, tam hap buton, yuvarlak kart.
- Gradient, cam/blur, bevel veya iç gölge (skeuomorphism değildir).
- EB Garamond üzerinde 600/700 (sentetik kalınlaştırma).
- Renkli kart zeminleri; accent'in dekoratif kullanımı.
- Hizasız/onlaksız sayı, `tabular-nums` olmadan tutar.
- Tutar sayaç animasyonu (0→değer).
- Süs ikonu/illüstrasyon; emoji ile durum bildirimi.
- Yeşil accent (Executive KPI 48 ile karışır — bu stil mürekkep lacivert kullanır).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.68:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Sol serif başlık + sağ fatura önizleme (kalem tablosu + çift kural toplam) | `shots/01-page.png` |
| Dashboard | yüksek | Üstte 3 özet kutusu (dönem, tutar, kota), altında kalem tablosu | `shots/01-page.png` |
| Form | düşük | Tutar alanları sağa hizalı mono; para birimi ayrı sütun | `shots/01-page.png` |
| Liste / tablo | yüksek | 34px satır, zebra, toplam satırı çift kural | `shots/01-page.png` |
| Boş durum | orta | "Bu dönem kullanım yok" + 0,00 satırı (tablo iskeleti korunur) | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: plan seç → limit belirle → ödeme yöntemi; her adımda tek tablo | `shots/01-page.png` |
| Pricing | orta | Plan karşılaştırma tablosu; fiyatlar sağa hizalı, öne çıkan plan çift kural | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, solda özet (serif), sağda form; toplam satırı görünür | `shots/01-page.png` |
| Modal | orta | Fatura detayı: üstte dönem, altta kalemler, en altta çift kural toplam | `shots/01-page.png` |
| Bildirim / toast | orta | "Tahsil edildi · ₺1.240,00" mono tek satır | `shots/01-page.png` |
| Hata | düşük | Tutar alanında `--danger` kenar + "geçersiz tutar" yardım satırı | `shots/01-page.png` |
| Profil / ayar | orta | Ödeme yöntemi, fatura e-postası, limit uyarı eşiği | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.37:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.5:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.85:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.68:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.6 | ≥ 60 target | thin text |

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
| "Excel ekranı" hissi | çizgi ve renk fazlalığı | defter çizgisini %55 opaklığa indir, zebrayı tek tona düşür |
| 48 ile karışıyor | krem zemin + yeşil accent + serif | accent mürekkep lacivert, serif tek ağırlık (EB Garamond 400) |
| Tutarlar kayıyor | oransal font | mono + tabular-nums + sağa hizalama |
| Toplam okunmuyor | renkli kutu + kalın yazı | çift kural + accent metin; kutu yok |
| Serif bulanık | 600/700 denendi | yalnız 400; hiyerarşiyi punto ve kural kalınlığı kurar |
| Mobilde tablo kırılıyor | tüm sütunlar sığdırılmış | yatay kaydırma + sabit tutar sütunu |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://docs.stripe.com/invoicing | Stripe Invoicing · docs — fatura kalemleri ve toplam hiyerarşisi |
| https://docs.stripe.com/billing/subscriptions/usage-based | Stripe · Usage-based billing — kullanım metreği ve kota eşiği dili |
| https://www.nngroup.com/articles/data-tables/ | Nielsen Norman · Data tables — sayısal sütun hizalama ve tarama ritmi |
| https://design-system.service.gov.uk/components/table/ | GOV.UK · Table pattern — toplam satırı ve sayı biçimi |

## AI brief

```text
Stil: Ledger Meter (styles/53-ledger-meter/style.md, tokens.json)
Token: sadece [data-style="ledger-meter"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display EB Garamond 400 (tek ağırlık, tracking -0.005em), gövde Inter 400/600,
  sayı JetBrains Mono. Ölçek 11/13/15/20/29/48; gövde ölçü 68ch; tutarlar tabular-nums ve sağa hizalı.
Yüzey: fildişi kağıt (#faf7ee); defter çizgisi 28px (%55 opaklık), radius 2px/6px,
  gölge yalnız modalda. Bevel/gradient/cam yok.
Imza: kalem tablosu + 3px double toplam kuralı (accent metin) + 6px kota çubuğu;
  zebra satır --surface-2; her ekranda tek serif özet cümlesi.
Renk: tek accent #22456b (mürekkep lacivert); --ok yalnız "tahsil edildi" durumu.
Hareket: enter .66s cubic-bezier(.65,0,.35,1) y20 stagger .09; scroll top 82% .72s y26 once;
  1 pin scrub 1.35 (+110%); hover 110ms (yalnız satır zemini); prefers-reduced-motion zorunlu.
Yasak: 6px üstü radius, gradient/cam/bevel, yeşil accent, serif 600/700, tutar sayaç animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Ledger Meter (ledger-meter) · family: Data & Indicator (46–55)
Token: --bg #faf7ee · --surface #fffdf6 · --ink #1c1913 · --accent #22456b · --line rgba(28,25,19,.13)
Radius: 2px / 6px · Typography: EB Garamond / Inter / JetBrains Mono
Required: Tablolar defter çizgisine oturur: 34px satır, 28px doku ızgarası · Tüm tutarlar sağa hizalı, tabular-nums, iki ondalık; para birimi ayrı sütun · Toplamlar 3px double kural ile ayrılır ve accent metinle yazılır
Banned: 6px üzeri radius, tam hap buton, yuvarlak kart. · Gradient, cam/blur, bevel veya iç gölge (skeuomorphism değildir). · EB Garamond üzerinde 600/700 (sentetik kalınlaştırma).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="ledger-meter"] {
  --bg: #faf7ee; --bg-2: #f2ecdc;
  --surface: #fffdf6; --surface-2: #f6f0e1;
  --ink: #1c1913; --ink-soft: #56503f; --ink-faint: #8a8068;
  --accent: #22456b; --accent-ink: #ffffff;
  --line: rgba(28,25,19,.13);
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
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 10px 24px -22px rgba(29,26,21,.55); --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
