# 12 · Aurora UI

> **In one sentence:** Koyu zeminin üzerinde kuzey ışığı gibi akan renkli gradient katmanları; cam paneller gradient'i taşır.

| | |
|---|---|
| **Feeling** | ışıklı, akışkan, modern, "yeni teknoloji" |
| **Best for** | AI/veri ürünü landing'i, kripto, SaaS hero, etkinlik/lansman sayfası |
| **Avoid** | uzun okuma, düşük kontrastlı ofis ekranı, güç tasarrufu hedefli ürün, baskı/print |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Surface (8–12) · **Token** | `kit/tokens.css` → `[data-style="aurora-ui"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Aurora UI, koyu zemin üzerine yerleştirilmiş **bulanık renk bulutları** (mor, cyan, pembe) ve bunların üzerinde duran **cam panellerden** oluşur. Gradient statik değildir: yavaşça kayar (20s+ döngü) veya scroll'da hafifçe hareket eder. Amaç "canlı, ışıklı, geleceğe ait" bir ilk izlenim.

Kazandığı şey: modernlik ve ürün lansmanı enerjisi. Feda ettiği şey: uzun süreli okuma konforu ve performans.

### What is not
- **Glassmorphism değildir.** Cam orada katman iddiasıdır; aurora'da asıl öğe **zemin gradient**idir, cam ikincildir.
- **Synthwave değildir.** Synthwave ızgara + neon çizgi + 80'ler; aurora yumuşak ve nokta ışığı.
- **Gradient arka plan değildir.** Tek lineer gradient yeterli değil: 2–3 radyal blob + grain + cam katman gerekir.
- **"Mor gradient + beyaz yazı" değildir.** Kontrast yönetilmezse okunmaz; aurora bunu grain ve cam opaklığıyla çözer.

### Where it comes from
2021–2023'te AI ürünlerinin lansman dili olarak popülerleşti (aurora borealis metaforu). Bugün hâlâ landing/hero için güçlü, ama dashboard'da "2023 klişesi" riski taşır — bu yüzden **yoğunluk ekran başına düşürülmelidir**.

### Recognition test in 3 seconds
1. Koyu zemin üzerinde 2–3 yumuşak renk bulutu var mı?
2. Bulutların üstünde yarı saydam cam panel mi duruyor?
3. Grain (`.06`) var mı — banding'i kırıyor mu?
4. Accent tek (mor) ve metin tam opak beyaz mı?
5. Gradient **yavaş** mı (yorgunluk yapmayan hız)?

## Visual signature
- **Aurora katmanı:** `radial-gradient(40% 46% at 12% 8%, #12121c, transparent 62%)` + accent blob + cyan blob.
- **Cam panel:** beyaz %6 + blur 20px + 1px beyaz %14.
- **Mor gölge:** `0 20px 60px rgba(109,91,255,.25)` — paneller ışık saçar.
- **Grain .06:** tüm zeminde; gradyanın "dijital" görünümünü yumuşatır.
- **Tipografi:** Inter, `-0.02em`, 600 display; gradient metin yok, düz beyaz.
- **Yavaş sürüklenme:** blob'lar 24–40s döngüde 8–12px kayar.
- **Typography:** Inter (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#6d5bff`; neutral scale `#0a0a10` → `#f7f7fb`.
- **Radius:** `16px` / `24px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Blob katmanı:** 2–3 radyal gradient, opaklık ≤ .30, `blur(40px)`; ekran başına ≤ 3.
2. **Cam panel:** `--surface` (beyaz %6) + `backdrop-filter: blur(20px)` + 1px `--line`.
3. **Grain .06:** banding'i kırar; 8-bit ekranlarda zorunlu.
4. **Tam opak metin:** `--ink` (#f7f7fb); gradient üstünde yarı saydam metin yasak.
5. **Yavaş hareket:** blob döngüsü ≥ 24s, `linear`; `prefers-reduced-motion` ile durur.
6. **Accent tek:** `#6d5bff`; ikinci vurgu rengi yok (blob renkleri accent değil atmosfer).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a0a10` | page background | as a card background |
| `--bg-2` | `#12121c` | partition divider floor, table top | button background |
| `--surface` | `rgba(255,255,255,.06)` | kart, input, modal | full-page background |
| `--surface-2` | `rgba(255,255,255,.04)` | passive chip, hover background | primary button |
| `--ink` | `#f7f7fb` | title, body, icon | large background |
| `--ink-soft` | `rgba(247,247,251,.72)` | secondary text, description | — |
| `--ink-faint` | `rgba(247,247,251,.48)` | decorative label, separator text | interactive text |
| `--accent` | `#6d5bff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(255,255,255,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.47:1** · `ink-soft/bg` **9.62:1** · `ink-faint/bg` **4.74:1 (decorative)** · `accent-ink/accent` **4.57:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 56px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `16px` (buton, input, chip), `24px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Doygun neon çizgi/ızgara (synthwave'e kayma).
- Hızlı hareket eden gradient (baş dönmesi, performans).
- Gradient üstünde gradient metin (`background-clip: text` ile 3 renk).
- 4+ blob veya 3+ parlak renk; her bölümde farklı palet.
- Yoğun veri ekranında tam aurora (grafik okunmaz).
- `will-change` ile sürekli compositing (pil tüketimi).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 16px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 16px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 16px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 16px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 16px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 16px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 16px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.57:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 3 blob + cam hero panel, 56px başlık, tek accent CTA, altında logo şeridi | `shots/01-page.png` |
| Dashboard | düşük | Blob'lar sadece arka planda ve **opaklık .12**; cam yalnız nav + tek panel | `shots/01-page.png` |
| Form | çok düşük | Cam panel içinde tek sütun; gradient minimal | `shots/01-page.png` |
| Liste / tablo | düşük | Cam panel + satır altı beyaz %10; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Cam kart + tek cümle + accent buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına cam panel; blob rengi adıma göre değişir (tek palet içinde) | `shots/01-page.png` |
| Pricing | orta | 3 cam kolon, orta kolon accent kenar + glow | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Opak koyu kart, blob yok; güven için sade | `shots/01-page.png` |
| Modal | orta | Cam panel, blur 24px, backdrop %55 | `shots/01-page.png` |
| Bildirim / toast | orta | Cam pill, 4sn | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + açık metin | `shots/01-page.png` |
| Profil / ayar | orta | Cam sidebar + cam içerik (tek katman) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.47:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.62:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.74:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.57:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.57:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 102.6 | ≥ 60 target | thin text |

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
| Banding (şeritler) | Grain yok / 8-bit gradient | `--grain: .06` ekle |
| Göz yorgunluğu | 4+ blob, yüksek parlaklık | Blob ≤ 3, opaklık ≤ .30 |
| "2023 klişesi" | Aynı mor-pembe hero, değişmeyen düzen | Blob yerleşimini markaya özel kur; tipografi/düzenle ayrıştır |
| Metin okunmuyor | Yarı saydam metin / açık blob üstü | Metin opak, blob'u metnin arkasından çek |
| Pil tüketimi | Sürekli animasyon + blur | Blob animasyonu 1, `will-change` sadece gerektiğinde |
| Dashboard'da kaos | Tam aurora yoğun veride | Opaklık .12, cam yalnız nav |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `synthwave` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://stripe.com | Stripe — Koyu zemin + ışıklı gradient dengesi |
| https://linear.app | Linear — Gradient'in geri çekildiği örnek |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient | MDN radial-gradient — Blob katmanlarının kurulumu |

## AI brief

```text
Stil: Aurora UI (styles/12-aurora-ui/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="aurora-ui"]; hard-coded renk/blur YASAK.
Zemin: 2–3 radyal blob (mor #6d5bff, cyan #22d3ee, pembe #f472b6) opaklık ≤ .30 + blur(40px); grain .06 ZORUNLU.
Panel: --surface (beyaz %6) + backdrop-filter: blur(20px) + 1px rgba(255,255,255,.14) + mor glow gölge.
Metin: tam opak #f7f7fb; gradient text YASAK; 12px altı metin yok.
Accent: tek mor #6d5bff; accent üstü beyaz 4.57:1 → buton metni 14px/600, küçültme.
Hareket: blob 24–40s linear döngü (transform), geçişler 260ms; prefers-reduced-motion'da blob durur.
Yoğun ekran (dashboard/tablo/ödeme): blob opaklığı .12, cam yalnız nav → stil geri çekilir.
Yasak: neon ızgara/çizgi, 4+ blob, hızlı gradient, gradient metin, opak bar üstü sahte cam.
Çıktı: kod + tek paragraf not (blob sayısı, opaklık, grain ve kontrast önlemi).

Style: Aurora UI (aurora-ui) · family: Surface (8–12)
Token: --bg #0a0a10 · --surface rgba(255,255,255,.06) · --ink #f7f7fb · --accent #6d5bff · --line rgba(255,255,255,.14)
Radius: 16px / 24px · Typography: Inter / Inter / JetBrains Mono
Required: **Blob katmanı:** 2–3 radyal gradient, opaklık ≤ .30, `blur(40px)`; ekran başına ≤ 3. · **Cam panel:** `--surface` (beyaz %6) + `backdrop-filter: blur(20px)` + 1px `--line`. · **Grain .06:** banding'i kırar; 8-bit ekranlarda zorunlu.
Banned: Doygun neon çizgi/ızgara (synthwave'e kayma). · Hızlı hareket eden gradient (baş dönmesi, performans). · Gradient üstünde gradient metin (`background-clip: text` ile 3 renk).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="aurora-ui"] {
  --bg: #0a0a10; --bg-2: #12121c;
  --surface: rgba(255,255,255,.06); --surface-2: rgba(255,255,255,.04);
  --ink: #f7f7fb; --ink-soft: rgba(247,247,251,.72); --ink-faint: rgba(247,247,251,.48);
  --accent: #6d5bff; --accent-ink: #ffffff;
  --line: rgba(255,255,255,.14);
  --danger: #e23729;
  --danger-ink: #000000;
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
  --radius: 16px; --radius-lg: 24px;
  --shadow: 0 20px 60px rgba(109,91,255,.25); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
