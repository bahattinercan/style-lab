# 24 · Pixel Art

> **In one sentence:** 8-bit keskinliği: 0 radius, piksel font, sınırlı palet, kalın çerçeve ve blok gölge.

| | |
|---|---|
| **Feeling** | retro, oyun, net, "konsol menüsü" |
| **Best for** | oyun, indie ürün, etkinlik, nostalji kampanyası, topluluk aracı |
| **Avoid** | kurumsal B2B, uzun okuma, veri yoğun panel, erişilebilirlik kritik akış |
| **Difficulty** | orta (ölçek/okunurluk) · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="pixel-art"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Pixel art, düşük çözünürlük estetiğinin arayüze uygulanması: **0 radius**, **piksel display font** (Press Start 2P), **sınırlı palet** (5–6 renk), **kalın çerçeve** (2–4px) ve **blok gölge** (`4px 4px 0`). Her öğe "8-bit karo" gibi durur.

Kazandığı şey: anında nostalji ve oyun dili. Feda ettiği şey: metin okunurluğu — piksel font uzun metinde yorar.

### What is not
- **Neo-brutalism değildir.** Brutalism modern tipografi; pixel art piksel font + 0 radius.
- **Memphis değildir.** Memphis eğri/daire; pixel art blok ve ızgara.
- **Retro blog değildir.** Sadece "pixel font" yetmez: 0 radius + sınırlı palet + blok gölge gerekir.
- **Düşük kaliteli değildir.** Piksel grid hizalı ve kasıtlı olmalı; blur/gradient karakteri bozar.

### Where it comes from
8/16-bit konsol arayüzleri ve indie oyun sahnesi; 2020'lerde nostalji dalgasıyla ürün arayüzlerine girdi.

### Recognition test in 3 seconds
1. Tüm köşeler **0 radius** mu?
2. Display **piksel font** mu (Press Start 2P)?
3. Palet 5–6 renkle sınırlı mı?
4. Çerçeve 2–4px ve blok gölge (`4px 4px 0`) var mı?
5. Görseller/ikonlar piksel grid'e hizalı mı?

## Visual signature
- **Blok gölge:** `4px 4px 0 #0d0e17`; hover'da öğe gölge yönüne kayar.
- **Çift çerçeve:** `0 0 0 2px #f4f4f4, 0 0 0 4px #1a1c2c` (dış çerçeve).
- **Palet:** lacivert bg (#1a1c2c), koyu mavi kart (#29366f), mavi vurgu (#3b5dc9), krem metin (#f4f4f4), sarı accent (#ffcd75).
- **Piksel font:** Press Start 2P, uppercase, 9–30px arası (kademeli).
- **Doku:** yok — düz renk, keskin kenar.
- **Typography:** Press Start 2P (display) + Inter (body) + Silkscreen (mono label).
- **Colour discipline:** a single accent `#ffcd75`; neutral scale `#1a1c2c` → `#f4f4f4`.
- **Radius:** `0px` / `0px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **0 radius** — istisna yok.
2. **Piksel display** yalnız başlık/etiket; gövde sans (Inter) 15–16px.
3. **Sınırlı palet:** bg, surface, surface-2, ink, accent, line = 6 renk.
4. **Blok gölge:** `4px 4px 0` (küçük), `0 0 0 2px ink` çerçeve.
5. **Grid hizası:** görseller `image-rendering: pixelated`, ölçek tam sayı katı.
6. **Okunurluk:** piksel font ≥ 9px ve yalnız kısa metin (≤ 3 kelime).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1a1c2c` | page background | as a card background |
| `--bg-2` | `#23263a` | partition divider floor, table top | button background |
| `--surface` | `#29366f` | kart, input, modal | full-page background |
| `--surface-2` | `#3b5dc9` | passive chip, hover background | primary button |
| `--ink` | `#f4f4f4` | title, body, icon | large background |
| `--ink-soft` | `#c2c3c7` | secondary text, description | — |
| `--ink-faint` | `#8b8d98` | decorative label, separator text | interactive text |
| `--accent` | `#ffcd75` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1c2c` | text above accent | non-accent background |
| `--line` | `#f4f4f4` | all borders | text colour |

- Measured contrast: `ink/bg` **15.32:1** · `ink-soft/bg` **9.57:1** · `ink-faint/bg` **5.1:1 (decorative)** · `accent-ink/accent` **11.43:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Press Start 2P) | 30px (mobile 18px) | 700 | 1.1 | 0.01em |
| H2 | same | 18px | 600 | 1.2 | 0.01em |
| H3 | same | 12px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Silkscreen) | 9px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Numbers are taboos; score/timer areas are mono and right aligned. Title in uppercase, body in sentence order.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- The screen grid acts like a visible frame: a 1px accent border is placed between sections, no decorative lines are added.
- Section vertical space 64px desktop, 40px mobile; card padding 18px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are opaque; There is no glass/blur. Thin accent edge is used for status notification.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Radius, blur, gradient, yarı saydamlık.
- Piksel fontu gövde metninde (uzun paragraf).
- Piksel olmayan ölçek (1.5×, 1.25×) — görsel bozulur.
- 8'den fazla renk.
- İnce (1px) çerçeve.
- Anti-aliasing gerektiren ince ikonlar.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 11.43:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 28px pixel başlık, sprite görsel, tek sarı buton | `shots/01-page.png` |
| Dashboard | düşük | Karo KPI'lar, pixel sayı + Inter etiket | `shots/01-page.png` |
| Form | düşük | Keskin input, tek buton; pixel font yalnız etiket | `shots/01-page.png` |
| Liste/tablo | düşük | 2px ayırıcı, satır 44px | `shots/01-page.png` |
| Boş durum | yüksek | Sprite + `PRESS START` tarzı tek satır | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 sprite + 1 cümle | `shots/01-page.png` |
| Pricing | orta | 3 karo, orta karo sarı | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Piksel font minimum; sade form | `shots/01-page.png` |
| Modal | orta | Blok gölgeli karo | `shots/01-page.png` |
| Toast | orta | Sarı karo, 3sn | `shots/01-page.png` |
| Hata | orta | `!!` pixel + 16px Inter açıklama | `shots/01-page.png` |
| Profil/ayar | düşük | Karo liste, pixel başlık | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.32:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.57:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.1:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.43:1 | ≥ 4.5 | button text |
| focus ring/ground | 11.43:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.9 | ≥ 60 target | thin text |

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
| Okunmuyor | Piksel font gövdede | Gövde Inter 16px |
| Bulanık | Piksel olmayan ölçek | Tam sayı kat, `pixelated` |
| Karakter kaybı | Radius/gölge yumuşak | 0 radius + blok gölge |
| Dağınık | 8+ renk | 6 renk paleti |
| Ucuz | 1px çerçeve | 2–4px çerçeve |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Press+Start+2P | Press Start 2P — Piksel display |
| https://lospec.com/palette-list | Lospec — Sınırlı palet örnekleri |
| https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering | MDN image-rendering — pixelated kullanımı |

## AI brief

```text
Stil: Pixel Art (styles/24-pixel-art/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="pixel-art"]; hard-coded renk YASAK.
Kural: radius 0 (istisna yok), blur/gradient/yarı saydamlık yok, 6 renk paleti.
Tipografi: Press Start 2P yalnız başlık/etiket (≥9px, kısa metin); gövde Inter 16/1.6.
Yüzey: 2px ink çerçeve + blok gölge (4px 4px 0); hover'da öğe gölge yönüne kayar.
Görseller: pixelated, tam sayı ölçek.
Hareket: 80–240ms steps(2–4); sürekli animasyon yasak; reduced-motion'da blink kapanır.
Ödeme/giriş: piksel font minimum, sade form.
Çıktı: kod + tek paragraf not (ölçek hizası ve okunurluk önlemi).

Style: Pixel Art (pixel-art) · family: Retro (19–27)
Token: --bg #1a1c2c · --surface #29366f · --ink #f4f4f4 · --accent #ffcd75 · --line #f4f4f4
Radius: 0px / 0px · Typography: Press Start 2P / Inter / Silkscreen
Required: **0 radius** — istisna yok. · **Piksel display** yalnız başlık/etiket; gövde sans (Inter) 15–16px. · **Sınırlı palet:** bg, surface, surface-2, ink, accent, line = 6 renk.
Banned: Radius, blur, gradient, yarı saydamlık. · Piksel fontu gövde metninde (uzun paragraf). · Piksel olmayan ölçek (1.5×, 1.25×) — görsel bozulur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="pixel-art"] {
  --bg: #1a1c2c; --bg-2: #23263a;
  --surface: #29366f; --surface-2: #3b5dc9;
  --ink: #f4f4f4; --ink-soft: #c2c3c7; --ink-faint: #8b8d98;
  --accent: #ffcd75; --accent-ink: #1a1c2c;
  --line: #f4f4f4;
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: 0 0 0 2px #f4f4f4, 0 0 0 4px #1a1c2c; --shadow-hard: none;
  --font-display: "Press Start 2P", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Silkscreen", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
