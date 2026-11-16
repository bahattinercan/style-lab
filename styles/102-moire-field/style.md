# 102 · Moiré Field

> **In one sentence:** İki ince çizgi perdesinin üst üste bindirilmesiyle oluşan girişim desenini zemin sayan, orta ton gri üzerinde keskin köşe ve pixel başlıkla kurulmuş optik desen arayüzü.

| | |
|---|---|
| **Feeling** | optik, hesaplı, keskin, üretken |
| **Best for** | tasarım stüdyosu vitrini, sergi/etkinlik afişi, tipografi deneyi, jeneratif desen galerisi |
| **Avoid** | sağlık ve finans gibi sakinlik bekleyen ekranlar, uzun okuma metinleri, düşük çözünürlüklü mobil cihazlar |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="moire-field"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Moiré Field, arayüzün zeminini **girişim deseni** olarak kurar: iki çizgi perdesi farklı açılarla (4° ve 11°) üst üste bindirilir, kesişimlerinde büyüyen ölçekte yeni bir desen doğar. Sayfa orta ton gridir; metin her zaman desenin **üstündeki opak katmanda** durur.

Üç kurucu karar: (1) **iki perde kuralı** — üçüncü perde eklenmez; girişim ancak iki perdede okunur ve üçüncüsü deseni gürültüye çevirir; (2) **asal aralık** — perde çizgi aralıkları 3/5 veya 4/7 px gibi aralarında asal değerlerdir, böylece desen kendini tekrar etmeden büyür; (3) **keskin köşe** — radius daima 0; desen dik açıyla kesişir, yuvarlak köşe girişim çizgilerini keser.

Orta ton zemin bu stilin en riskli kararıdır: `--ink` neredeyse siyahtır ve kontrast 7.34:1'dir (açık temalı stillerin 16:1'ine göre düşük). Bu yüzden yalnız **kısa metin** kullanılır; uzun okuma bu stile uygun değildir. Display **Silkscreen**'dir: baskı ızgarası estetiği moiré'nin optik diliyle aynı ailedendir.

Bedeli: yoğun desen yorgunluk yapabilir. Bu yüzden perde opaklığı ≤ %18 ve desen yalnız **büyük yüzeylerde** (hero, bölüm arkaplanı) kullanılır; kart içleri düz zemindir.

### What is not
- **Type Experiment (93) değildir:** 93 açık zeminde Michroma display + grid motifle tipografik deney yapar; Moiré orta ton zemin + iki perde girişim + Silkscreen kullanır ve radius sıfırdır.
- **Swiss Design (02) değildir:** 02 beyaz zemin, 12 kolon ve 3px siyah kurala dayanır, desen yoktur; Moiré'de asıl taşıyıcı desendir.
- **Pixel Art (24) değildir:** 24 Press Start 2P + blok gölge ile oyun estetiği kurar; Moiré'de piksel yoktur, girişim çizgileri vardır.
- **Ethereal (29) değildir:** 29 yumuşak sis ve blur ile düşük kontrast kurar; Moiré keskin çizgi ve yüksek yerel kontrast kullanır.

### Where it comes from
Baskı öncesi tram hataları, televizyon ekranı girişimi, op-art (Bridget Riley, Victor Vasarely) ve jeneratif desen kültürü. Ekranda yeniden kullanılmasının nedeni: CSS'in `repeating-linear-gradient` ile iki perdeyi bedava üretebilmesi — desen artık görsel dosyası değil, kod. Klişeye dönüşmemesi için korunacak detay: perde aralıklarının aralarında asal olması ve metnin daima opak katmanda kalması.

### Recognition test in 3 seconds
1. Zemin orta ton gri; üzerinde iki farklı açıda ince çizgi perdesi var.
2. Kesişimlerde büyüyen girişim deseni görünür (moiré).
3. Hiçbir köşe yuvarlak değil: tüm yüzeyler keskin.
4. Başlık Silkscreen: geniş, bloklu, baskı ızgarası hissi.
5. Accent magenta yalnız girişim tepelerinde ve seçili öğede.

## Visual signature
- **İki perde:** `repeating-linear-gradient(4deg, … 0 1px, transparent 1px 5px)` + `(11deg, … 0 1px, transparent 1px 7px)`.
- **Perde opaklığı:** ≤ %18 sayfa zemini, %90 hero görsel içinde (küçük alan).
- **Girişim tepeleri:** accent magenta noktalar, 15px ve 21px iki ızgara üst üste.
- **Keskin köşe:** `--radius: 0px`, `--radius-lg: 0px`; `border-radius: 0 !important` sahne tarafında.
- **Kenarlık:** 1px `--ink` (yüksek kontrastlı baskı çizgisi), hairline gri değil.
- **Silkscreen başlık:** 38px, ağırlık 400, tracking 0.02em; paragrafta kullanılmaz.
- **Doku:** `--grain: 0` — desen zaten doku; ikinci doku eklenmez.
- **Typography:** Silkscreen (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#9c2e6e`; neutral scale `#b6b2ab` → `#12130f`.
- **Radius:** `0px` / `0px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. İki perde kuralı: iki çizgi ızgarası 4–7° farkla üst üste bindirilir
2. Perde aralıkları asal sayı benzeri (3/5 px veya 4/7 px) seçilir ki girişim okunsun
3. Zemin orta ton; metin her zaman opak katmanda, perdenin üstünde
4. Accent yalnız girişim tepe noktalarında (desen kesişimi, seçili öğe)
5. Radius daima 0; yuvarlak hiçbir köşe yok
6. Perde opaklığı ≤ %18; metin kontrastı ≥ 4.5 kalır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#b6b2ab` | page background | as a card background |
| `--bg-2` | `#9c9891` | partition divider floor, table top | button background |
| `--surface` | `#b1ada6` | kart, input, modal | full-page background |
| `--surface-2` | `#8e8a84` | passive chip, hover background | primary button |
| `--ink` | `#12130f` | title, body, icon | large background |
| `--ink-soft` | `#2b2c28` | secondary text, description | — |
| `--ink-faint` | `#45463f` | decorative label, separator text | interactive text |
| `--accent` | `#9c2e6e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(18,19,15,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **8.83:1** · `ink-soft/bg` **6.66:1** · `ink-faint/bg` **4.52:1 (decorative)** · `accent-ink/accent` **6.93:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Silkscreen) | 24px (mobile 24px) | 500 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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

- Üçüncü perde veya üç renkli desen.
- Saniyede 1+ desen kayması (optik rahatsızlık).
- Gradient, cam blur, gölge, iç gölge.
- Yuvarlak köşe / pill kontrol.
- Fotoğraf üzerine perde bindirme.
- Silkscreen ile paragraf yazmak.
- Uzun okuma metni (bu stil kısa metin dilidir).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.28:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | Perde paneli 8/4; başlık keskin, tek CTA | `shots/01-page.png` |
| Dashboard | düşük | Desen yalnız üst şeritte; tablolar düz zeminde | `shots/01-page.png` |
| Form | düşük | 36px alanlar, 1px ink kenar, radius 0 | `shots/01-page.png` |
| Liste / tablo | düşük | 32px satır, zebra yok, 1px ayırıcı | `shots/01-page.png` |
| Boş durum | orta | Boş desen alanı + "yeni desen üret" eylemi | `shots/01-page.png` |
| Onboarding | yüksek | Her adımda tek perde; metin opak kartta | `shots/01-page.png` |
| Pricing | orta | Plan kartları düz zemin; öne çıkan 1px ink + accent başlık | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, desen yok (odak formu) | `shots/01-page.png` |
| Modal | orta | %8 perde + opak metin katmanı | `shots/01-page.png` |
| Bildirim / toast | orta | Mono tek satır, keskin kenar | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + hata metni; perde kapanır | `shots/01-page.png` |
| Profil / ayar | orta | Perde yoğunluğu ve açı ayarı (4°–11°) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 8.83:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.66:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.52:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.93:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.28:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 61.7 | ≥ 60 target | thin text |

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
| Göz yoruyor | perde opaklığı yüksek | %18 üstüne çıkarma; büyük yüzeylerde kullan |
| Desen "kirli" | üçüncü perde eklendi | iki perdeye indir |
| Metin okunmuyor | perde metnin üstünde | metni opak katmana al |
| Moiré görünmüyor | perde aralıkları eşit | aralarında asal aralık (3/5, 4/7) |
| "Retro pixel" olmuş | Silkscreen gövdeye taşmış | Silkscreen yalnız başlık/etiket |
| Mobilde bayat | perde küçük ekranda | 390px'te perdeyi kapat |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `type-experiment` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Moir%C3%A9_pattern | Moiré pattern · Wikipedia — girişim deseni geometrisi ve aralık ilişkisi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient | MDN · repeating-linear-gradient — iki perde CSS kurulumu |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 · Three flashes — titreşim/flaş eşiği |
| https://www.awwwards.com/websites/generative/ | Awwwards · generative pattern — üretken desen ve op-art örnekleri |

## AI brief

```text
Stil: Moiré Field (styles/102-moire-field/style.md, tokens.json)
Token: sadece [data-style="moire-field"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Silkscreen 400 (yalnız başlık/etiket), gövde Inter 400/600, sayı JetBrains Mono.
  Ölçek 11/12/13/15/18/24/38; gövde ölçü 70ch ve kısa bloklar.
Yüzey: orta ton gri (#b6b2ab); radius DAİMA 0; ana kenarlık 1px var(--ink); gölge yok.
Imza: iki çizgi perdesi (4° / 11°, aralık 5px / 7px, opaklık <= .18) + girişim tepelerinde
  accent magenta noktalar; metin daima opak katmanda.
Renk: tek accent #9c2e6e; orta ton zemin nedeniyle ink-faint etkileşimli metinde kullanılmaz.
Hareket: enter .53s cubic-bezier(.37,0,.63,1) y4 stagger .025; scroll top 93% .47s y6 once;
  1 pin scrub 1.05 (+125%, desen açısı 4°->11°); hover 95ms; prefers-reduced-motion zorunlu.
Yasak: üçüncü perde, saniyede 1+ desen kayması, gradient/blur/gölge, yuvarlak köşe.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Moiré Field (moire-field) · family: Motion & Optics (96–105)
Token: --bg #b6b2ab · --surface #b1ada6 · --ink #12130f · --accent #9c2e6e · --line rgba(18,19,15,.22)
Radius: 0px / 0px · Typography: Silkscreen / Inter / JetBrains Mono
Required: İki perde kuralı: iki çizgi ızgarası 4–7° farkla üst üste bindirilir · Perde aralıkları asal sayı benzeri (3/5 px veya 4/7 px) seçilir ki girişim okunsun · Zemin orta ton; metin her zaman opak katmanda, perdenin üstünde
Banned: Üçüncü perde veya üç renkli desen. · Saniyede 1+ desen kayması (optik rahatsızlık). · Gradient, cam blur, gölge, iç gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="moire-field"] {
  --bg: #b6b2ab; --bg-2: #9c9891;
  --surface: #b1ada6; --surface-2: #8e8a84;
  --ink: #12130f; --ink-soft: #2b2c28; --ink-faint: #45463f;
  --accent: #9c2e6e; --accent-ink: #ffffff;
  --line: rgba(18,19,15,.22);
  --danger: #910000;
  --danger-ink: #ffffff;
  --ok: #005207;
  --ok-ink: #ffffff;
  --warn: #832300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Silkscreen", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
