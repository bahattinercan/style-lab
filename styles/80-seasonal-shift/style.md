# 80 · Mevsim Geçişi

> **In one sentence:** Bir mevsimden diğerine geçen arayüz: sıcak krem zemin, iki tonlu geçiş şeridi (pas turuncusu → yaprak yeşili), serif başlık ve tek yumuşak gölge.

| | |
|---|---|
| **Feeling** | geçici, sıcak, doğal, ritmik |
| **Best for** | mevsimsel kampanya, tarım/gıda ürünü, etkinlik takvimi, yaşam tarzı abonelik vitrini |
| **Avoid** | finans paneli, teknik dokümantasyon, güvenlik arayüzü — iki tonlu süs karar hızını düşürür |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="seasonal-shift"]` |
| **Composition** | `split` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Mevsim Geçişi, ekranı **iki mevsim arasındaki eşik** gibi kurar: sıcak krem zemin (`--bg` → `--bg-2` dikey gradyan), bölüm ve kart üstlerinde 3px iki tonlu şerit (pas turuncusu %55 → yaprak yeşili %40), serif başlık (EB Garamond) + sans gövde (Inter), tek yumuşak gölge. Tek renkli sadeliği feda eder; karşılığında **zaman/ritim okuması** kazanır.

Kurucu kararları üç tanedir. Birincisi **iki renk, iki mevsim**: accent (sonbahar) ve ok (ilkbahar) — üçüncü sıcak ton yok. İkincisi **şerit yön taşır**: gradyan soldan sağa akar, "geçiş" kelimesi görselde de okunur. Üçüncüsü **serif başlık + sans gövde**: anlatı sıcak, okunurluk nötr kalır.

Bedeli: iki tonlu süs, operasyonel ekranda dikkat dağıtır. Bu yüzden stilin doğal yeri vitrin, takvim ve kampanya; form/ödeme ekranlarında şerit kaldırılır.

### What is not
- **Japandi (06) değildir:** 06 tek sıcak nötr skalada kalır ve süs eklemez; 80'de **iki tonlu geçiş şeridi** imzadır.
- **Biyofilik Botanik (76) değildir:** 76 tek yeşil ailesi + yaprak köşesi kullanır; 80 iki mevsim rengi (pas + yeşil) ve standalone şerit kullanır, radius 8/16px.
- **Editorial Design (03) değildir:** 03 serif başlık + kolon ritmi ile baskı dili kurar, renk geçişi yok; 80 renk geçişini imza yapar.
- **Maximalism (17) değildir:** 17 çok renk/desen yığar; 80'de en fazla iki vurgu tonu ve tek şerit.

### Where it comes from
Fenoloji (mevsim geçişlerinin gözlemlenebilir eşikleri) ve sonbahar yaprak rengi skalasından; görsel olarak 1960-70'ler doğa takvimleri ve zanaat ambalajlarından. Bugün geri dönüyor çünkü mevsimsel ürünler (tarım aboneliği, etkinlik, moda koleksiyonu) "dönem" anlatmak zorunda. Klişeye dönmemesi için korunacak detay: **şeridin 3px'te kalması** ve iki renkten fazlasına çıkmaması.

### Recognition test in 3 seconds
1. Zemin sıcak krem; yukarıdan aşağı hafif koyulaşan gradyan var.
2. Nav ve kart üstlerinde 3px iki tonlu şerit (turuncu → yeşil) görünüyor.
3. Başlıklar serif (EB Garamond), gövde sans; iki farklı aile birlikte.
4. Buton 44px, radius 8px; gölge tek ve yumuşak.
5. Mevsim etiketleri mono ve büyük harf (İLKBAHAR → YAZ).

## Visual signature
- **İki tonlu geçiş şeridi:** 3px, `linear-gradient(90deg, accent %55, ok %40)`; nav altında `border-image`, kart üstünde `::before`.
- **Krem gradyan:** gövde `linear-gradient(180deg, --bg, --bg-2)` + hero görselinde 115° iki mevsim bölünmesi.
- **Nokta deseni:** hero görselinde 14px nokta ızgarası (ink %10) — tohum/toprak hissi.
- **Serif/sans eşleşmesi:** EB Garamond 50/32/21 (500) + Inter 16px/1.65.
- **Mevsim etiketi:** 11px mono, uppercase, `.08em`; ok işaretiyle (`→`).
- **Tek gölge:** `0 6px 20px rgba(42,32,24,.12)`; sert/ofset gölge yok.
- **Hareket imzası:** 570ms `cubic-bezier(.42,.12,.2,1)`, 22px — geçiş "döner", sıçramaz.
- **Typography:** EB Garamond (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#a4471f`; neutral scale `#f6efe2` → `#2a2018`.
- **Radius:** `8px` / `16px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Zemin sıcak krem (--bg); saf beyaz yok, gölge yumuşak tek katman
2. İki tonlu geçiş şeridi imza öğedir: accent (sonbahar) → ok (ilkbahar), 3px, nav ve kart üstünde
3. Radius 8px kontrol / 16px kart; hap radius yalnız chip
4. Serif display (EB Garamond) + sans gövde (Inter); iki display ailesi yok
5. Mevsim etiketi mono ve büyük harf; geçiş yönü okla veya sırayla belirtilir
6. Renk geçişi iki duraktan fazla olamaz (üçüncü sıcak ton yasak)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6efe2` | page background | as a card background |
| `--bg-2` | `#ede3d2` | partition divider floor, table top | button background |
| `--surface` | `#fdf9f1` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f0e4` | passive chip, hover background | primary button |
| `--ink` | `#2a2018` | title, body, icon | large background |
| `--ink-soft` | `#5c4c3d` | secondary text, description | — |
| `--ink-faint` | `#8a7b68` | decorative label, separator text | interactive text |
| `--accent` | `#a4471f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff6ec` | text above accent | non-accent background |
| `--line` | `rgba(42,32,24,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.93:1** · `ink-soft/bg` **7.18:1** · `ink-faint/bg` **3.59:1 (decorative)** · `accent-ink/accent` **5.61:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (EB Garamond) | 50px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
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
- Radius: `8px` (buton, input, chip), `16px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Neon/doygun turkuaz, mor geçişler.
- Saf beyaz zemin veya saf siyah bölüm.
- 0px keskin köşe, kalın 3px+ çerçeve.
- Geometrik sans display, ikinci serif.
- Ekran başına 1'den fazla sürekli yaprak/kar animasyonu.
- Aynı ekranda üçten fazla mevsim rengi.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.71:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | serif H1 + iki mevsim bölünmüş görsel + tek CTA | `shots/01-page.png` |
| Dashboard | düşük | şerit yok; iki ton yalnız grafik serisinde | `shots/01-page.png` |
| Form | düşük | 44px input, tek kolon; şerit kaldırılır | `shots/01-page.png` |
| Liste / tablo | düşük | 44px satır, mevsim sütunu mono etiket | `shots/01-page.png` |
| Boş durum | orta | iki tonlu yaprak illüstrasyonu + tek cümle | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adım bir mevsim dönemi | `shots/01-page.png` |
| Pricing | orta | üç kart; öne çıkan kartta iki tonlu şerit | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | şerit yok; yalnız krem zemin + tek CTA | `shots/01-page.png` |
| Modal | orta | üst şerit + mono mevsim etiketi | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, iki renkli nokta | `shots/01-page.png` |
| Hata | düşük | nokta `--danger`; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | iki kolon; mevsim tercihi chip ile | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.93:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.18:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.59:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.61:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.71:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.7 | ≥ 60 target | thin text |

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
| Ekran "sonbahar teması" gibi klişe | her yerde turuncu kullanılmış | accent yalnız şerit ve CTA'da |
| İki renk çatışıyor | üçüncü vurgu eklenmiş | accent + ok dışında vurgu yok |
| Serif başlık ağır | EB Garamond 700 kullanılmış | 500 sabit |
| Şerit gürültü yapıyor | operasyonel ekranda da bırakılmış | form/dashboard'da şeridi kaldır |
| Krem zemin "kirli" | grain %3 üstü + gölge katmanı | grain sabit, tek gölge |
| Mobilde taşma | 20px gutter korunmuş | 768 altı 16px gutter, tek kolon |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `y2k` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Season | Season — mevsim sınırları ve dönem adları |
| https://en.wikipedia.org/wiki/Autumn_leaf_color | Autumn leaf color — sonbahar ton skalası (klorofil → karoten) |
| https://en.wikipedia.org/wiki/Phenology | Phenology — geçiş zaman çizelgesi ve eşikler |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — krem zemin üstü metin kontrastı |

## AI brief

```text
Stil: Mevsim Geçişi (styles/80-seasonal-shift/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="seasonal-shift"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: krem dikey gradyan --bg → --bg-2; hero görselinde 115° iki mevsim bölünmesi + 14px nokta deseni.
Tipografi: --font-display EB Garamond 50/32/21 (500); --font-body Inter 16px/1.65;
  --font-mono JetBrains Mono 11px etiket (.08em, uppercase, geçiş yönü "→").
Yüzey: --bg / --surface + 1px var(--line) + 0 6px 20px / yüzen 0 16px 40px.
  Radius 8px kontrol, 16px kart, chip 999px.
Renk: iki vurgu — accent #a4471f (sonbahar) + ok (ilkbahar); üçüncü ton yok.
  ink/bg 13.93:1, ink-soft/bg 7.18:1, accent-ink/accent 5.61:1, ink-faint/bg 3.59:1 (dekoratif).
İmza: 3px iki tonlu geçiş şeridi (nav altı + kart üstü), soldan sağa accent → ok.
Hareket: enter 570ms cubic-bezier(.42,.12,.2,1) 22px stagger .075; scroll top 96% 570ms 44px once;
  pin yok; hover 220ms görsel 1.018. prefers-reduced-motion zorunlu.
Yasak: neon/mor geçiş, saf beyaz zemin, 0px köşe, kalın çerçeve, ikinci serif, >1 sürekli animasyon.
Çıktı: bileşen kodu + tek paragraf not (geçiş şeridini ve serif/sans eşleşmesini nereye koydun).

Style: Mevsim Geçişi (seasonal-shift) · family: Nature & Organic (76–85)
Token: --bg #f6efe2 · --surface #fdf9f1 · --ink #2a2018 · --accent #a4471f · --line rgba(42,32,24,.14)
Radius: 8px / 16px · Typography: EB Garamond / Inter / JetBrains Mono
Required: Zemin sıcak krem (--bg); saf beyaz yok, gölge yumuşak tek katman · İki tonlu geçiş şeridi imza öğedir: accent (sonbahar) → ok (ilkbahar), 3px, nav ve kart üstünde · Radius 8px kontrol / 16px kart; hap radius yalnız chip
Banned: Neon/doygun turkuaz, mor geçişler. · Saf beyaz zemin veya saf siyah bölüm. · 0px keskin köşe, kalın 3px+ çerçeve.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="seasonal-shift"] {
  --bg: #f6efe2; --bg-2: #ede3d2;
  --surface: #fdf9f1; --surface-2: #f7f0e4;
  --ink: #2a2018; --ink-soft: #5c4c3d; --ink-faint: #8a7b68;
  --accent: #a4471f; --accent-ink: #fff6ec;
  --line: rgba(42,32,24,.14);
  --danger: #d3261a;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b25100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 6px 20px rgba(42,32,24,.12); --shadow-hard: none;
  --font-display: "EB Garamond", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
