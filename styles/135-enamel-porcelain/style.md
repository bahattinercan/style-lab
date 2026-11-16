# 135 · Enamel Porcelain

> **In one sentence:** Mine ve porselen: sırlı beyaz yüzey, 6px yumuşak köşe, koyu mine yeşili kontur ve 0.44s parlak ama ölçülü giriş.

| | |
|---|---|
| **Feeling** | temiz · sırlı · rafine · soğuk |
| **Best for** | Porselen/mine ürün vitrini, sofra markası, butik otel, kuyumcu kataloğu |
| **Avoid** | Yoğun dashboard, endüstriyel panel, çocuk oyunu |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="enamel-porcelain"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Enamel Porcelain sırlı yüzeyi kurar: fildişi sır zemin, 6px yumuşak köşe, 1px koyu yeşil mine konturu ve ince Poiret One 40px display. Kazanılan şey rafinelik ve temizlik; feda edilen şey yoğunluk — ekran başına 1 ürün ve 1 detay notu.

Sır etkisi iki ışıkla verilir: üst kenarda 1px açık highlight ve kart altında 2px yumuşak gölge (`0 1px 2px`). Renk asla sır üstünde parlamaz; mine yeşili yalnız kontur, birincil buton ve aktif sekmede.

Hareket sırlı tok bir harekettir: 0.44s `cubic-bezier(.34,1.3,.64,1)` giriş, 10px kayma, 50ms stagger; hover 200ms ve 1.025. Pin yok — ürün sabit durur.

### What is not
- `glassmorphism` değildir: cam bulanık ve yarı saydamdır; burada yüzey opak porselen, blur 0.
- `liquid-glass` değildir: liquid-glass akışkan ve koyu camdır; burada sırlı beyaz ve koyu yeşil kontur var.
- `claymorphism` değildir: clay pastel yumuşak gölgeyle çalışır; burada 1px koyu yeşil kontur ve 2px gölge imzadır.
- `porcelain-glaze` değildir: 129 aynı malzeme ailesinden sırlı porseleni 14/28px radius ve kobalt-mavi aksanla kurar; burada 6/12px radius, fildişi zemin ve koyu yeşil mine konturu var.
- `enamel-porcelain` bir "beyaz minimal tema" değildir: koyu yeşil kontur ve sır highlight'ı olmadan uygulanmaz.

### Where it comes from
Kökeni 19. yüzyıl emaye tabelaları, Limoges mine işi ve eczane/hastane emayeleridir: fildişi sır zemin, koyu yeşil kontur yazı, az sayıda motif. Bugün sofra/otel markalarında geri döndü çünkü "hijyen + el işçiliği" aynı yüzeyde anlatılabiliyor. Klişeye düşmemek için korunması gereken detay: koyu yeşil mine renginin yalnız kontur/aksiyon olması, dolgu olmaması.

### Recognition test in 3 seconds
1. Porselen beyaz zemin; gövde ve başlık neredeyse aynı beyazlıkta.
2. 1px koyu yeşil kontur buton ve kartta; dolgu yalnız butonda.
3. 6px radius; 12px üstü yok.
4. Poiret One 40px display, çok ince; gövde Nunito 16px.
5. Üst kenarda 1px açık highlight (sır parlaması), başka parlama yok.

## Visual signature
- Poiret One 400 40px / 1.2 / 0.08em display (mobil 26px); gövde Nunito 16px / 1.66 / 62ch.
- Kobalt kontur: 1px `--accent` buton/kart kenarında; dolgu yalnız birincil butonda.
- Sır highlight: `inset 0 1px 0 var(--surface)` üst kenarda; gölge `0 1px 2px` yalnız kartta.
- Radius 6px (buton/input) / 12px (kart, görsel kabı).
- Ürün adı + malzeme satırı: mono 12px, "porselen · sırlı" biçiminde.
- Desen yok; tek süs 1px mine yeşili çizgi (bölüm ayırıcı, ekran başına 1).
- **Typography:** Poiret One (display) + Nunito (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#17543f`; neutral scale `#f8f6f0` → `#131a18`.
- **Radius:** `6px` / `12px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Poiret One 400 40px/1.2/0.08em display (mobil 26px); gövde Nunito 16px/1.66/62ch
2. Kobalt kontur 1px buton/kartta; dolgu yalnız birincil butonda, ekranın ≤%6'sı
3. Sır highlight 1px üst kenarda; kart gölgesi tek katman `0 1px 2px`
4. Radius 6/12px; 12px üstü yasak; blur/backdrop-filter yok
5. Malzeme satırı mono 12px ("porselen · sırlı")
6. Bölüm arası 92px (mobil 56px), kart içi 26px; ölçek 4·8·12·16·24·32·48·64
7. Desen yok; tek süs 1px mine yeşili çizgi (ekran başına 1)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f8f6f0` | page background | as a card background |
| `--bg-2` | `#efebe1` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#f2eee4` | passive chip, hover background | primary button |
| `--ink` | `#131a18` | title, body, icon | large background |
| `--ink-soft` | `#46514c` | secondary text, description | — |
| `--ink-faint` | `#757f7a` | decorative label, separator text | interactive text |
| `--accent` | `#17543f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f1faf4` | text above accent | non-accent background |
| `--line` | `rgba(19,26,24,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.35:1** · `ink-soft/bg` **7.65:1** · `ink-faint/bg` **3.83:1 (decorative)** · `accent-ink/accent` **8.3:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poiret One) | 26px (mobile 26px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
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
- Radius: `6px` (buton, input, chip), `12px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Altın/gold varak, ikinci renk, gradyan, renkli gölge
- Blur, cam yüzey, yarı saydam panel, 3+ katman gölge
- 12px üstü radius, tam yuvarlak buton (avatar dışında)
- Kobalt dolgu (geniş alan), neon, parlak lak
- Parallax, pin/scrub, marquee, sürekli döngü, overshoot 2.0 üstü
- Gövdede Poiret One, 16px altı gövde, gövdede majüskül
- Saf siyah metin (#000), saf beyaz olmayan gri zemin
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.69:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 40px Poiret One başlık + 6/12 ürün kabı (6px radius, sır highlight) | `shots/01-page.png` |
| Dashboard | düşük | Ürün listesi: 3 kart, 1px koyu yeşil kontur | `shots/01-page.png` |
| Form | düşük | 48px input, 6px radius, 1px line | `shots/01-page.png` |
| Liste / tablo | düşük | 52px satır, 1px hairline, mono malzeme | `shots/01-page.png` |
| Boş durum | orta | "koleksiyon boş" + tek çizgi motif + CTA | `shots/01-page.png` |
| Onboarding | orta | İki adım: seç → tamamla | `shots/01-page.png` |
| Pricing | orta | İki koleksiyon; kart yerine koyu yeşil konturlu sütun | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 380px, mono özet | `shots/01-page.png` |
| Modal | orta | 480px, 12px radius, sır highlight, 2px gölge | `shots/01-page.png` |
| Bildirim / toast | orta | Alt orta, 42px, mine yeşili zemin + accent-ink | `shots/01-page.png` |
| Hata | düşük | Tek cümle + ikincil buton, kontur korunur | `shots/01-page.png` |
| Profil / ayar | orta | Koleksiyon tercihleri + mono ölçü | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.35:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.65:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.83:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.3:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.69:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.1 | ≥ 60 target | thin text |

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
| Sayfa "cam" gibi | Blur veya yarı saydam yüzey eklenmiş | Opak porselen + 1px kontur |
| Kobalt "boya" olmuş | Dolgu olarak geniş alanda kullanılmış | Kobalt yalnız kontur/aksiyon (≤%6) |
| Display kayboluyor | Poiret One 40px altına inmiş veya 700 ağırlık denenmiş | 40px ve 400 ağırlık |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `marble-vein` | Same level of seriousness; accent sharing is not allowed |
| garnish | `optic-prism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `porcelain-glaze` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Poiret+One | Poiret One — Google Fonts — ince display, 400 ağırlık, 40px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde 16px/1.66 |
| https://en.wikipedia.org/wiki/Enamelware | Wikipedia — Enamelware — koyu yeşil kontur yazı ve fildişi sır zemin |
| https://en.wikipedia.org/wiki/Vitreous_enamel | Wikipedia — Vitreous enamel — sır highlight ve opak yüzey fiziği |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 — Non-text contrast — 1px kontur 3:1 eşiği |

## AI brief

```text
Stil: Enamel Porcelain (styles/135-enamel-porcelain/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="enamel-porcelain"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Poiret One yalnız başlıkta; --font-body Nunito gövdede; --font-mono malzeme etiketinde.
Yüzey: opak porselen + 1px koyu yeşil kontur + 1px sır highlight + tek 2px gölge; radius 6/12px; blur 0.
Izgara: 12 kolon, gutter 28px, ürün 6/12, bölüm ritmi 92px.
Hareket: enter 0.44s cubic-bezier(.34,1.3,.64,1) 10px / stagger 0.05; scroll top 87% 0.5s 12px once:true;
         hover 200ms scale 1.025; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur, altın varak, geniş yeşil dolgu, 12px+ radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Enamel Porcelain (enamel-porcelain) · family: Material & Luxury (126–135)
Token: --bg #f8f6f0 · --surface #fffdf8 · --ink #131a18 · --accent #17543f · --line rgba(19,26,24,.14)
Radius: 6px / 12px · Typography: Poiret One / Nunito / JetBrains Mono
Required: Poiret One 400 40px/1.2/0.08em display (mobil 26px); gövde Nunito 16px/1.66/62ch · Kobalt kontur 1px buton/kartta; dolgu yalnız birincil butonda, ekranın ≤%6'sı · Sır highlight 1px üst kenarda; kart gölgesi tek katman `0 1px 2px`
Banned: Altın/gold varak, ikinci renk, gradyan, renkli gölge · Blur, cam yüzey, yarı saydam panel, 3+ katman gölge · 12px üstü radius, tam yuvarlak buton (avatar dışında)
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="enamel-porcelain"] {
  --bg: #f8f6f0; --bg-2: #efebe1;
  --surface: #fffdf8; --surface-2: #f2eee4;
  --ink: #131a18; --ink-soft: #46514c; --ink-faint: #757f7a;
  --accent: #17543f; --accent-ink: #f1faf4;
  --line: rgba(19,26,24,.14);
  --danger: #d82c1f;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 6px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(19,24,32,.10); --shadow-hard: none;
  --font-display: "Poiret One", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.08em; --blur: 0px; --grain: 0;
}
```
