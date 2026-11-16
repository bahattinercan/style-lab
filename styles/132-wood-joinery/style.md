# 132 · Wood Joinery

> **In one sentence:** Marangoz atölyesi mantığı: 1px geçme çizgileri, 4px radius yüzeyler ve 0.66s ölçülü giriş — ahşabın damarından çok birleşim noktaları önemlidir.

| | |
|---|---|
| **Feeling** | ölçülü · sıcak · zanaatkâr · sağlam |
| **Best for** | Mobilya markası, marangoz atölyesi, mimarlık detay sayfası, malzeme kataloğu |
| **Avoid** | Hızlı kampanya sayfası, klinik form, oyun vitrini |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="wood-joinery"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Wood Joinery ahşabı değil birleşimi gösterir: 1px geçme çizgileri (dowel/tenon), 4px radius yüzey, slate mavi accent ve 44px ölçü etiketleri. Kazanılan şey mühendislik güveni; feda edilen şey süs — damar dokusu tek katmanda, %3 opaklıkta kalır.

Izgara marangoz ölçüsüdür: 12 kolon, 32px gutter, 1240px container ve ekran başına 2 geçme hattı. Yüzeyler gölgesizdir; derinlik 1px çizgi ve 2 tonlu ahşap kademesinden gelir.

Hareket ölçülüdür: 0.66s `cubic-bezier(.22,.72,.24,1)` giriş, 20px kayma, 60ms stagger; hover 240ms ve 1.015. Pin yok — marangoz işi kaymaz, oturur.

### What is not
- `craft-handmade` değildir: craft el yazısı, kraft doku ve pin'li üretim sahnesiyle çalışır; burada geçme çizgisi, slate accent ve pin yok.
- `japandi` değildir: japandi Japonya–İskandinav sadeliğini 18px radius ve yumuşak geçişle kurar; burada 4px radius ve ölçü çizgileri var.
- `nordic-folk` değildir: nordic-folk nakış deseni kullanır; burada desen yok, yalnız geçme çizgisi.
- `wood-joinery` bir "rustik ahşap şablonu" değildir: ahşap dokusu %3'te durur, sepya fotoğraf yok.

### Where it comes from
Kökeni geleneksel ahşap geçme teknikleri (kırlangıç kuyruğu, zıvana) ve modern mobilya detay çizimleridir. Bugün butik mobilya ve mimarlık malzeme kataloglarında geri döndü çünkü "nasıl birleşiyor" sorusu kaliteyi anlatıyor. Klişeye düşmemek için korunması gereken detay: geçme çizgisinin gerçek birleşim noktasında olması.

### Recognition test in 3 seconds
1. Meşe zemin + slate mavi accent; ahşap dokusu yalnız %3.
2. 1px geçme çizgileri ekran başına en fazla 2.
3. Radius 4px; yuvarlak buton yok.
4. Ölçü etiketleri mono 12px, "2400×900×750" biçiminde.
5. 0.66s ölçülü giriş, 240ms hover — pin yok.

## Visual signature
- Fraunces 600 48px / 1.1 başlık (mobil 30px); gövde Jost 16.5px / 1.66 / 62ch.
- Geçme çizgisi: 1px `--line` dikey/yatay, ekran başına en fazla 2, kesişimde 4px kare boşluk.
- Ahşap damarı: 1px/9px yatay çizgi %3 opaklık, yalnız bölüm zemininde.
- Ölçü etiketi: Courier Prime 12px, "W×D×H" biçimi, `--ink-soft`.
- Radius 4px (kart/buton) / 8px (görsel kabı); 10px üstü yasak.
- Ürün görseli kabı: 1px kenar + 2px alt çizgi (tezgâh kenarı).
- **Typography:** Fraunces (display) + Jost (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#33546b`; neutral scale `#f0e9dc` → `#1f1c17`.
- **Radius:** `4px` / `8px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Fraunces 600 48px/1.1 başlık (mobil 30px); gövde Jost 16.5px/1.66/62ch
2. Geçme çizgisi 1px, ekran başına en fazla 2; kesişimde 4px boşluk
3. Ahşap damarı 1px/9px %3, yalnız bölüm zemininde; başka doku yok
4. Radius 4/8px; 10px üstü yasak; gölge yok
5. Tek vurgu slate mavi #33546b, ekranın ≤%7'si, accent üstü daima --accent-ink
6. Ölçü etiketi Courier Prime 12px "W×D×H"; bölüm arası 88px (mobil 56px)
7. Görsel kabında 1px kenar + 2px alt tezgâh çizgisi

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f0e9dc` | page background | as a card background |
| `--bg-2` | `#e6dccb` | partition divider floor, table top | button background |
| `--surface` | `#faf5ec` | kart, input, modal | full-page background |
| `--surface-2` | `#ece2d1` | passive chip, hover background | primary button |
| `--ink` | `#1f1c17` | title, body, icon | large background |
| `--ink-soft` | `#4f4a41` | secondary text, description | — |
| `--ink-faint` | `#7b7469` | decorative label, separator text | interactive text |
| `--accent` | `#33546b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4f8fa` | text above accent | non-accent background |
| `--line` | `rgba(31,28,23,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.06:1** · `ink-soft/bg` **7.28:1** · `ink-faint/bg` **3.83:1 (decorative)** · `accent-ink/accent` **7.5:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 30px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16.5px | 400 | 1.62 | 0 |
| Small body | same | 14.5px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 12px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

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

- Sepya/vintage filtre, gradyan, sıcak sarı-turuncu ikinci accent
- Yumuşak gölge, blur, cam yüzey, 10px üstü radius
- Nakış/desen, kolaj, çıkartma, emoji
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Gövdede el yazısı font, 16.5px altı gövde, 62ch üstü ölçü
- Saf siyah metin (#000), saf beyaz zemin (#fff)
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.38:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 48px başlık + 7/12 ürün kabı + geçme çizgisi | `shots/01-page.png` |
| Dashboard | orta | Sipariş listesi: 52px satır, mono ölçü | `shots/01-page.png` |
| Form | düşük | 48px input, 4px radius, 1px kenar | `shots/01-page.png` |
| Liste / tablo | orta | 52px satır, 1px hairline, mono ölçü kolonu | `shots/01-page.png` |
| Boş durum | orta | Tek kesit çizimi + "atölye boş" + CTA | `shots/01-page.png` |
| Onboarding | orta | Üç adım: ölç → kes → birleştir | `shots/01-page.png` |
| Pricing | orta | Üç atölye paketi; 1px kenar, gölge yok | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 400px, mono sipariş özeti | `shots/01-page.png` |
| Modal | orta | 520px, 8px radius, 1px kenar | `shots/01-page.png` |
| Bildirim / toast | orta | Alt sol, 44px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | Tek cümle + "ölçü hatası" mono etiket | `shots/01-page.png` |
| Profil / ayar | orta | Atölye profili + malzeme listesi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.06:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.28:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.83:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.38:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91.2 | ≥ 60 target | thin text |

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
| Sayfa "rustik" görünüyor | Sepya filtre veya ahşap dokusu %5 üstü | Doku %3, filtre yok |
| Geçme çizgisi süs gibi | Çizgi birleşim noktasında değil | Çizgiyi gerçek eklem hizasına taşı |
| Metin sıcak zeminle boğuşuyor | Gövde 16.5px altı veya ink-soft yerine faint | 16.5px + ink-soft |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `craft-handmade` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `marble-vein` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Fraunces | Fraunces — Google Fonts — display serif, 600 ağırlık, 48px |
| https://fonts.google.com/specimen/Jost | Jost — Google Fonts — gövde geometrik sans, 16.5px/1.66 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — ölçü etiketi 12px |
| https://www.finewoodworking.com/projects | Fine Woodworking — joinery — geçme tipleri ve detay çizimi |
| https://en.wikipedia.org/wiki/Dovetail_joint | Wikipedia — Dovetail joint — kırlangıç kuyruğu geometrisi |

## AI brief

```text
Stil: Wood Joinery (styles/132-wood-joinery/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="wood-joinery"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 600 başlıkta, --font-body Jost gövdede, --font-mono ölçü etiketinde.
Yüzey: --bg / --surface / --surface-2; radius 4/8px; gölge yok; 1px geçme çizgisi.
Izgara: 12 kolon, gutter 32px, ürün 7/12, bölüm ritmi 88px.
Hareket: enter 0.66s cubic-bezier(.22,.72,.24,1) 20px / stagger 0.06; scroll top 82% 0.8s 24px once:true;
         hover 240ms scale 1.015; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya, gölge, desen, 10px+ radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Wood Joinery (wood-joinery) · family: Material & Luxury (126–135)
Token: --bg #f0e9dc · --surface #faf5ec · --ink #1f1c17 · --accent #33546b · --line rgba(31,28,23,.16)
Radius: 4px / 8px · Typography: Fraunces / Jost / Courier Prime
Required: Fraunces 600 48px/1.1 başlık (mobil 30px); gövde Jost 16.5px/1.66/62ch · Geçme çizgisi 1px, ekran başına en fazla 2; kesişimde 4px boşluk · Ahşap damarı 1px/9px %3, yalnız bölüm zemininde; başka doku yok
Banned: Sepya/vintage filtre, gradyan, sıcak sarı-turuncu ikinci accent · Yumuşak gölge, blur, cam yüzey, 10px üstü radius · Nakış/desen, kolaj, çıkartma, emoji
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="wood-joinery"] {
  --bg: #f0e9dc; --bg-2: #e6dccb;
  --surface: #faf5ec; --surface-2: #ece2d1;
  --ink: #1f1c17; --ink-soft: #4f4a41; --ink-faint: #7b7469;
  --accent: #33546b; --accent-ink: #f4f8fa;
  --line: rgba(31,28,23,.16);
  --danger: #cf1f14;
  --danger-ink: #ffffff;
  --ok: #007a32;
  --ok-ink: #ffffff;
  --warn: #ae4d00;
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
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
