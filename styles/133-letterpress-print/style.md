# 133 · Letterpress Print

> **In one sentence:** Letterpress mantığı: kabartma baskı izi, 2px radius yüzeyler ve 0.30s presleme girişi — tipografi kâğıda gömülür, ekran bunu taklit eder.

| | |
|---|---|
| **Feeling** | dokunsal · matbaa · kesin · editoryal |
| **Best for** | Bağımsız yayınevi, matbaa stüdyosu, edisyon satışı, tipografi stüdyosu |
| **Avoid** | Canlı dashboard, oyun arayüzü, hızlı checkout akışı |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="letterpress-print"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Letterpress Print baskı izini taklit eder: metin `text-shadow` ile 1px deboss ışığı alır, kart yüzeyinde 1px iç gölge (basınç izi) durur, Cinzel 46px majüskül başlık Lora 16.5px/1.7 gövdeyle eşleşir. Kazanılan şey fiziksel baskı hissi; feda edilen şey renk — indigo tek aksan.

Kâğıt dokusu tek katmandadır: 1px/6px yatay elyaf çizgisi %3 ve `--grain .03`. Radius 2px; gölge yoktur, derinlik deboss ve elyaf dokusundan gelir.

Hareket preslemedir: 0.30s `cubic-bezier(.7,0,.3,1)` giriş, yalnız 2px kayma, 35ms stagger (satır satır baskı). Pin yok — kâğıt kaymaz. Hover 110ms ve 1.005.

### What is not
- `broadsheet-daily` değildir: gazete masthead, keskin 0 radius ve kırmızı accent kullanır; burada indigo, 2px radius ve deboss izi var.
- `academic-paper` değildir: makale 8/3 kolon ve kenar notuyla çalışır; burada edisyon numarası ve baskı izi imzadır.
- `literary-hardcover` değildir: hardcover 64ch ve 1px hairline'lı kitap sayfasıdır; burada elyaf dokusu ve deboss baskı vardır.
- `letterpress-print` bir "vintage afiş" değildir: sepya ve distorziyon yok, yalnız 1px deboss ışığı var.

### Where it comes from
Kökeni 15. yüzyıl hareketli metal tip matbaası ve 20. yüzyıl özel baskı (fine press) atölyeleridir. Bugün bağımsız yayınevi ve edisyon satışlarında geri döndü çünkü dijitalde "basılmış" hissi nadir. Klişeye düşmemek için korunması gereken detay: deboss izinin 1px'te kalması ve elyaf dokusunun %3'ü geçmemesi.

### Recognition test in 3 seconds
1. Cinzel 46px majüskül başlık + Lora 16.5px/1.7 gövde.
2. Metinde 1px deboss ışığı (text-shadow 0 1px 0 açık ton).
3. Kartta 1px iç gölge; dış gölge yok.
4. Edisyon numarası mono 11px "No. 014 / 120".
5. 0.30s presleme girişi, 2px kayma; yumuşak yay yok.

## Visual signature
- Cinzel 600 46px / 1.12 / 0.06em başlık (mobil 28px); gövde Lora 16.5px / 1.7 / 58ch.
- Deboss: `text-shadow: 0 1px 0 color-mix(in srgb, var(--surface) 90%, transparent)` başlıkta; 1px, 2px yasak.
- Basınç izi: kartta `inset 0 1px 0 var(--line)` (1px iç gölge).
- Kâğıt elyafı: 1px/6px yatay çizgi %3 + grain .03.
- Edisyon etiketi: Courier Prime 11px, "No. 014 / 120" biçimi, sağ üstte.
- Radius 2px; buton ve kart aynı eğriyi paylaşır.
- **Typography:** Cinzel (display) + Lora (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#2a2c6b`; neutral scale `#f7f4ec` → `#191713`.
- **Radius:** `2px` / `4px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Cinzel 600 46px/1.12/0.06em başlık (mobil 28px); gövde Lora 16.5px/1.7/58ch
2. Deboss 1px text-shadow yalnız başlıkta; 2px ve renkli gölge yasak
3. Kartta 1px iç gölge (basınç izi); dış gölge yok
4. Kâğıt elyafı 1px/6px %3 + grain .03; başka doku yok
5. Radius 2/4px; 6px üstü yasak
6. Tek vurgu indigo #2a2c6b, ekranın ≤%6'sı, accent üstü daima --accent-ink
7. Edisyon etiketi Courier Prime 11px "No. 014 / 120"
8. Bölüm arası 84px (mobil 52px), kart içi 22px

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f4ec` | page background | as a card background |
| `--bg-2` | `#ece7db` | partition divider floor, table top | button background |
| `--surface` | `#fdfbf5` | kart, input, modal | full-page background |
| `--surface-2` | `#efeade` | passive chip, hover background | primary button |
| `--ink` | `#191713` | title, body, icon | large background |
| `--ink-soft` | `#4a453d` | secondary text, description | — |
| `--ink-faint` | `#7a746a` | decorative label, separator text | interactive text |
| `--accent` | `#2a2c6b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f3f2fb` | text above accent | non-accent background |
| `--line` | `rgba(25,23,19,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.28:1** · `ink-soft/bg` **8.65:1** · `ink-faint/bg` **4.21:1 (decorative)** · `accent-ink/accent` **11.31:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 28px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16.5px | 400 | 1.62 | 0 |
| Small body | same | 14.5px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Sepya/vintage filtre, riso çok renkli baskı, gradyan, parlak lak
- Blur, cam yüzey, 2px+ dış gölge, neon
- 6px üstü radius, tam yuvarlak buton
- Gövdede Cinzel veya büyük harf, 16.5px altı gövde
- Parallax, pin/scrub, marquee, sürekli döngü, yay/overshoot
- Saf siyah metin (#000), saf beyaz zemin (#fff)
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 12.14:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 46px Cinzel başlık (deboss) + 4/12 baskı bloğu + edisyon etiketi | `shots/01-page.png` |
| Dashboard | orta | Edisyon listesi: 44px satır, mono numara | `shots/01-page.png` |
| Form | düşük | 46px input, 2px radius, 1px iç gölge | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, 1px hairline, sağa hizalı mono | `shots/01-page.png` |
| Boş durum | orta | "baskı yok" + tek cümle + ikincil buton | `shots/01-page.png` |
| Onboarding | orta | Üç adım: diz → bas → kurut | `shots/01-page.png` |
| Pricing | orta | Üç edisyon paketi; 2px radius, 1px iç gölge | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 380px, mono sipariş özeti | `shots/01-page.png` |
| Modal | orta | 480px, 4px radius, 1px iç gölge | `shots/01-page.png` |
| Bildirim / toast | orta | Alt sol, 40px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | "baskı hatası" mono + tek cümle | `shots/01-page.png` |
| Profil / ayar | orta | Edisyon geçmişi + mono numara | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.28:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.65:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.21:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.31:1 | ≥ 4.5 | button text |
| focus ring/ground | 12.14:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.2 | ≥ 60 target | thin text |

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
| Deboss "blur gölge" olmuş | text-shadow 2px üstü veya renkli | 1px, açık ton, yalnız başlıkta |
| Sayfa "vintage" görünüyor | Sepya veya elyaf %5 üstü | Neutral kâğıt + elyaf %3 |
| Başlık 4 satıra kırılmış | Cinzel 46px üstü veya ölçü geniş | clamp + max-width 20ch |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `broadsheet-daily` | Same level of seriousness; accent sharing is not allowed |
| garnish | `literary-hardcover` | Same level of seriousness; accent sharing is not allowed |
| garnish | `academic-paper` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cinzel | Cinzel — Google Fonts — majüskül display, 600 ağırlık, 0.06em |
| https://fonts.google.com/specimen/Lora | Lora — Google Fonts — gövde serifi, 16.5px/1.7 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — edisyon numarası 11px |
| https://letterpresscommons.com/ | Letterpress Commons — baskı izi (deboss) ve kâğıt elyafı |
| https://en.wikipedia.org/wiki/Letterpress_printing | Wikipedia — Letterpress printing — metal tip ve basınç izi fiziği |

## AI brief

```text
Stil: Letterpress Print (styles/133-letterpress-print/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="letterpress-print"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Cinzel 600 başlıkta, --font-body Lora gövdede, --font-mono edisyon numarasında.
Yüzey: 1px kenar + 1px iç gölge (basınç izi); radius 2/4px; dış gölge yok.
Izgara: 12 kolon, gutter 24px, metin 7/12, bölüm ritmi 84px.
Hareket: enter 0.30s cubic-bezier(.7,0,.3,1) 2px / stagger 0.035; scroll top 90% 0.34s 6px once:true;
         hover 110ms scale 1.005; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya, blur, 2px+ gölge, 6px+ radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Letterpress Print (letterpress-print) · family: Material & Luxury (126–135)
Token: --bg #f7f4ec · --surface #fdfbf5 · --ink #191713 · --accent #2a2c6b · --line rgba(25,23,19,.16)
Radius: 2px / 4px · Typography: Cinzel / Lora / Courier Prime
Required: Cinzel 600 46px/1.12/0.06em başlık (mobil 28px); gövde Lora 16.5px/1.7/58ch · Deboss 1px text-shadow yalnız başlıkta; 2px ve renkli gölge yasak · Kartta 1px iç gölge (basınç izi); dış gölge yok
Banned: Sepya/vintage filtre, riso çok renkli baskı, gradyan, parlak lak · Blur, cam yüzey, 2px+ dış gölge, neon · 6px üstü radius, tam yuvarlak buton
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="letterpress-print"] {
  --bg: #f7f4ec; --bg-2: #ece7db;
  --surface: #fdfbf5; --surface-2: #efeade;
  --ink: #191713; --ink-soft: #4a453d; --ink-faint: #7a746a;
  --accent: #2a2c6b; --accent-ink: #f3f2fb;
  --line: rgba(25,23,19,.16);
  --danger: #d72a1e;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: inset 0 1px 0 var(--line); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: 0;
}
```
