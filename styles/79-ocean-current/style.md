# 79 · Deniz & Akıntı

> **In one sentence:** Derin suyun katmanlarını taklit eden koyu arayüz: teal zemin, ince akıntı çizgileri, serif display ve tek turkuaz vurgunun taşıdığı yön bilgisi.

| | |
|---|---|
| **Feeling** | derin, akışkan, sakin-güçlü, yönlü |
| **Best for** | denizcilik/lojistik izleme, su altı araştırma, iklim-deniz paneli, dalış/tekne ürünü |
| **Avoid** | çocuk ürünü, hızlı tüketim vitrini, ödeme ekranı — koyu teal güven ekranında ağırlaşır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Nature & Organic (76–85) · **Token** | `kit/tokens.css` → `[data-style="ocean-current"]` |
| **Composition** | `split` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Deniz & Akıntı, ekranı **su kesiti** gibi kurar: koyu teal zemin katmanları (her katman 4–6 puan daha açık), üzerinde 1.5px eğri akıntı çizgileri ve yön okları; display serif (Cormorant Garamond), gövde serif (Lora), okuma satır aralığı 1.75. Renk çeşitliliğini feda eder; karşılığında **yön ve derinlik** okunurluğunu kazanır.

Kurucu kararları üç tanedir. Birincisi **tek parlak renk**: turkuaz accent yalnız akış/aktif durum içindir; ikinci neon yok, glow accent çizgisinde kalır. İkincisi **serif gövde**: 1.75 satır aralığıyla uzun metni su gibi akıtır — bu, listedeki en yüksek gövde satır aralığıdır. Üçüncüsü **akıntı yönü bilgi taşır**: her eğri çizgi bir akış yönü, oku da yönü gösterir; süs amaçlı eğri çizilmez.

Bedeli: koyu zemin + serif küçük puntoda zayıflar. Bu yüzden gövde 16px'in altına inmez ve `ink-soft` (9.06:1) en küçük metin rengidir.

### What is not
- **Cybercore (23) değildir:** 23 mono terminal + mor/pembe neon; 79 serif display + tek turkuaz, kutu/terminal dili yok.
- **Ethereal (29) değildir:** 29 sis ve düşük kontrastla rüya kurar; 79'da `ink-soft/bg` **9.06:1**, akıntı çizgileri keskin.
- **Ocean-current / Glassmorphism (08) değildir:** 79 cam kullanmaz; katman ayrımı parlaklık farkı + 1px çizgi.
- **Scandinavian Dark (40) değildir:** 40 sıcak nötr + Fraunces ile sakinlik; 79 soğuk teal + akıntı çizgisi imzası.

### Where it comes from
Oşinografi haritalarından (akıntı vektörleri, izotermler) ve klasik denizcilik yayıncılığından (serif başlık + ölçüm tablosu). Bugün geri dönüyor çünkü iklim/su verisi ürünleri "yön" anlatmak zorunda; oklar ve eğriler bunu tek bakışta verir. Klişeye dönmemesi için korunacak detay: **akıntının yön taşıması** ve **serif gövdenin 1.75 satır aralığıyla kalması**.

### Recognition test in 3 seconds
1. Zemin koyu teal; katmanlar arasında belirgin ama küçük parlaklık farkı var.
2. İnce eğri akıntı çizgileri ve yön okları görünüyor (1.5px, turkuaz).
3. Başlıklar serif; gövde de serif ve satır aralığı geniş.
4. Buton 46px, radius 6px; gölge yok, yalnız cam/modal katmanında gölge var.
5. Ekranda tek parlak renk: turkuaz; ikinci neon yok.

## Visual signature
- **Akıntı zemin çizgileri:** `repeating-linear-gradient(96deg, accent %7 0 1px, transparent 1px 46px)` — gövde zemini.
- **Katman parlaklığı:** `bg #0a2029` → `bg-2 #0e2833` → `surface #12323e` → `surface-2 #163a48` (her adım 4–6 puan).
- **Akıntı eğrileri:** `repeating-radial-gradient` (26px aralık, accent %20) hero görselinde; yön oku zorunlu.
- **Kart üst çizgisi:** 1.5px, soldan sağa sönen accent %40 (`::before`).
- **Serif ölçek:** Cormorant Garamond 56/36/24, Lora gövde 16px/1.75.
- **Cam yalnız nav:** blur 4px, opaklık %88 — su yüzeyi hissi, tam cam değil.
- **Hareket imzası:** 830ms `cubic-bezier(.35,.02,.25,1)`, 40px — su kütlesi gibi ağır gelir.
- **Typography:** Cormorant Garamond (display) + Lora (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#46d8c4`; neutral scale `#0a2029` → `#dff0f4`.
- **Radius:** `6px` / `16px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Zemin derin su (--bg teal); katmanlar arasında 4–6 puan parlaklık farkı
2. Akıntı çizgisi imza öğedir: 1.5px eğri hat + yön oku, en az bir bölümde görünür
3. Tek parlak renk: accent turkuaz; ikinci neon yok, glow yalnız accent çizgisinde
4. Serif display (Cormorant Garamond) + serif gövde (Lora); geometrik sans yalnız etikette yok
5. Gövde satır aralığı ≥ 1.7 (su hissi boşlukla kurulur)
6. Tüm ölçümler birimli: m, kn, °C, ‰

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a2029` | page background | as a card background |
| `--bg-2` | `#0e2833` | partition divider floor, table top | button background |
| `--surface` | `#12323e` | kart, input, modal | full-page background |
| `--surface-2` | `#163a48` | passive chip, hover background | primary button |
| `--ink` | `#dff0f4` | title, body, icon | large background |
| `--ink-soft` | `#a3c4cd` | secondary text, description | — |
| `--ink-faint` | `#6f939d` | decorative label, separator text | interactive text |
| `--accent` | `#46d8c4` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04211d` | text above accent | non-accent background |
| `--line` | `rgba(223,240,244,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.31:1** · `ink-soft/bg` **9.06:1** · `ink-faint/bg` **5.06:1 (decorative)** · `accent-ink/accent` **9.58:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 56px (mobile 34px) | 400 | 1.08 | -0.02em |
| H2 | same | 36px | 600 | 1.2 | -0.015em |
| H3 | same | 24px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 12px | 400 | 1.2 | 0.14em |
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
- Radius: `6px` (buton, input, chip), `16px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Saf siyah `#000` zemin.
- İkinci neon / renkli glow.
- Keskin 0px köşe, kalın 1.5px üstü çerçeve.
- Geometrik sans display.
- Sürekli akıntı animasyonu (ekran başına ≤1).
- Emoji ile durum bildirimi, renk-only yön göstergesi.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.49:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: sağda akıntı görseli, solda serif H1 + tek CTA | `shots/01-page.png` |
| Dashboard | orta | akıntı şeması + ölçüm tablosu; tek parlak renk | `shots/01-page.png` |
| Form | düşük | 46px input, etiket üstte 12px mono | `shots/01-page.png` |
| Liste / tablo | düşük | 42px satır, tabular değer, birim ayrı sütun | `shots/01-page.png` |
| Boş durum | orta | boş akıntı alanı + "veri akışı yok" mono etiketi | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: bölge → derinlik → eşik | `shots/01-page.png` |
| Pricing | orta | üç kart; öne çıkan kart accent üst çizgi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | akıntı çizgisi yok; yalnız odak halkası ve tek CTA | `shots/01-page.png` |
| Modal | orta | accent 1px çerçeve + derinlik etiketi (m) | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, 6px damla + 14px metin | `shots/01-page.png` |
| Hata | düşük | damla/çizgi `--danger`; zemin değişmez | `shots/01-page.png` |
| Profil / ayar | orta | iki kolon; ölçüm birimleri mono | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.31:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.06:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.06:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.58:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.49:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.2 | ≥ 60 target | thin text |

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
| Ekran "siyah boşluk" | katman farkı 2 puana inmiş | bg → surface 4–6 puan farkı koru |
| Neon oyun arayüzü | ikinci parlak renk eklenmiş | tek accent; diğer durumlar parlamaz |
| Serif okunmuyor | satır aralığı 1.5'e düşmüş | 1.75 sabit, ölçü ≤60ch |
| Akıntı süs gibi | oksuz eğri çizilmiş | her eğriye yön oku + etiket ekle |
| Kontrast düşük | accent metin olarak kullanılmış | accent dolgu/çizgi; metin `--ink` |
| Pin titriyor | iki ayrı rAF döngüsü | tek ScrollTrigger batch, ekran başına 1 pin |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `safety-signage` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Ocean_current | Ocean current — akıntı yönü, hız birimleri (kn) |
| https://en.wikipedia.org/wiki/Thermohaline_circulation | Thermohaline circulation — derinlik katmanları ve renk skalası |
| https://www.noaa.gov/education/resource-collections/ocean-coasts | NOAA · ocean data viz — ölçüm etiketleri ve lejant |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — teal zemin üstü metin kontrastı |

## AI brief

```text
Stil: Deniz & Akıntı (styles/79-ocean-current/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="ocean-current"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg derin teal + ince akıntı çizgileri (repeating-linear-gradient 96deg, accent %7, 46px).
Tipografi: --font-display Cormorant Garamond 56/36/24 (500); --font-body Lora 16px/1.75;
  --font-mono Courier Prime 12px etiket (.06em, uppercase).
Yüzey: --bg / --surface (1px var(--line) + 1.5px üst accent çizgisi, gölge yok) / yüzen + 0 16px 40px.
  Radius 6px kontrol, 16px kart, chip 999px.
Renk: tek parlak accent #46d8c4; --danger/--warn parlamaz.
  ink/bg 14.31:1, ink-soft/bg 9.06:1, accent-ink/accent 9.58:1, ink-faint/bg 5.06:1.
Akıntı: 1.5px eğri hat + yön oku zorunlu; katmanlar arası 4–6 puan parlaklık farkı.
Hareket: enter 830ms cubic-bezier(.35,.02,.25,1) 40px stagger .115; scroll top 71% 860ms 36px once;
  pin scrub 1.05 (+180%, ekran başına 1); hover 380ms görsel 1.022. prefers-reduced-motion zorunlu.
Yasak: saf siyah, ikinci neon, 0px köşe, kalın çerçeve, geometrik sans display, >1 sürekli akıntı animasyonu.
Çıktı: bileşen kodu + tek paragraf not (akıntı çizgisini ve yön okunu nereye koydun).

Style: Deniz & Akıntı (ocean-current) · family: Nature & Organic (76–85)
Token: --bg #0a2029 · --surface #12323e · --ink #dff0f4 · --accent #46d8c4 · --line rgba(223,240,244,.16)
Radius: 6px / 16px · Typography: Cormorant Garamond / Lora / Courier Prime
Required: Zemin derin su (--bg teal); katmanlar arasında 4–6 puan parlaklık farkı · Akıntı çizgisi imza öğedir: 1.5px eğri hat + yön oku, en az bir bölümde görünür · Tek parlak renk: accent turkuaz; ikinci neon yok, glow yalnız accent çizgisinde
Banned: Saf siyah `#000` zemin. · İkinci neon / renkli glow. · Keskin 0px köşe, kalın 1.5px üstü çerçeve.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="ocean-current"] {
  --bg: #0a2029; --bg-2: #0e2833;
  --surface: #12323e; --surface-2: #163a48;
  --ink: #dff0f4; --ink-soft: #a3c4cd; --ink-faint: #6f939d;
  --accent: #46d8c4; --accent-ink: #04211d;
  --line: rgba(223,240,244,.16);
  --danger: #f04636;
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
  --radius: 6px; --radius-lg: 16px;
  --shadow: 0 16px 40px rgba(3,12,16,.55); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .015em; --blur: 0px; --grain: 0;
}
```
