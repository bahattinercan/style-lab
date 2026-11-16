# 25 · Frutiger Aero

> **In one sentence:** 2004–2010'un parlak teknolojisi: gök mavisi, cam-gloss butonlar, su damlası ve iyimserlik.

| | |
|---|---|
| **Feeling** | taze, parlak, iyimser, "yeni binyıl" |
| **Best for** | nostalji ürünü, kampanya, eğitim, çevre/su temalı marka, lansman |
| **Avoid** | kurumsal B2B, sağlık verisi, lüks, koyu arayüz |
| **Difficulty** | orta (parlaklık dozu) · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="frutiger-aero"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Frutiger Aero, 2000'ler ortasının teknoloji iyimserliği: **gökyüzü mavisi** zemin, **cam parlaklık** (inset beyaz highlight), **su/kabarcık** motifleri, yumuşak gradient'ler ve yuvarlak hatlı tipografi (Segoe UI). Her buton "taze ve temiz" görünür.

Kazandığı şey: anında nostalji + tazelik. Feda ettiği şey: ciddiyet ve kontrast payı (açık mavi üstünde ince metin kaybolur).

### What is not
- **Y2K değildir.** Y2K metalik/krom ve teknoid tipografi; Aero **organik** (su, gökyüzü, çimen).
- **Glassmorphism değildir.** Cam orada katman; Aero'da parlaklık **yüzeyin kendisi**.
- **"Mavi gradient" değildir.** Su/kabarcık motifi + gloss highlight + yuvarlak hat olmadan sadece mavi tema olur.
- **Flat design değildir.** Aero parlaklık ve hafif gradient ister.

### Where it comes from
Windows Vista/7 Aero, erken iPhone ve 2000'ler web 2.0 estetiği; 2020'lerde "aero revival" ile kampanyalarda döndü.

### Recognition test in 3 seconds
1. Zemin gökyüzü/su mavisi mi (#dff1ff)?
2. Butonlarda **cam gloss** (üstte beyaz highlight) var mı?
3. Su/kabarcık veya yaprak motifi var mı?
4. Radius 14–22px ve yumuşak mı?
5. Gradient yumuşak (sert değil) mi?

## Visual signature
- **Gloss buton:** `linear-gradient(180deg, #6fc0f0, #2f9be0)` + inset beyaz + mavi gölge.
- **Cam panel:** yarım saydam beyaz + blur 6px + 1px beyaz kenar.
- **Kabarcık motifi:** radial gradient daireler, opacity .18.
- **Yumuşak gradient:** zemin `#ffffff → #dff1ff → #c9e7ff`.
- **Yuvarlak tipografi:** Segoe UI, 600 ağırlık; keskin grotesk yok.
- **Typography:** Segoe UI (display) + Segoe UI (body) + Consolas (mono label).
- **Colour discipline:** a single accent `#2090d5`; neutral scale `#dff1ff` → `#0d2b45`.
- **Radius:** `14px` / `22px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Parlaklık üçlüsü:** dikey gradient + `inset 0 1px 0 #fff` + yumuşak mavi gölge.
2. **Gökyüzü paleti:** bg #dff1ff → bg-2 #bfe3ff; sıcak renk yok.
3. **Radius 14/22px**; buton pill serbest.
4. **Motif:** ekran başına 1 (kabarcık, su damlası veya yaprak); 2. motif yok.
5. **Metin kontrastı ≥ 4.5:1:** açık mavi üstünde `--ink` (#0d2b45).
6. **Blur ≤ 6px** ve yalnız cam panelde.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#dff1ff` | page background | as a card background |
| `--bg-2` | `#bfe3ff` | partition divider floor, table top | button background |
| `--surface` | `linear-gradient(180deg, #ffffff, #d6ecff)` | kart, input, modal | full-page background |
| `--surface-2` | `#eaf6ff` | passive chip, hover background | primary button |
| `--ink` | `#0d2b45` | title, body, icon | large background |
| `--ink-soft` | `#365a75` | secondary text, description | — |
| `--ink-faint` | `#6e8da6` | decorative label, separator text | interactive text |
| `--accent` | `#2090d5` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#06243e` | text above accent | non-accent background |
| `--line` | `rgba(255,255,255,.85)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.54:1** · `ink-soft/bg` **6.32:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **4.52:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Segoe UI) | 44px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Segoe UI) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Consolas) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Sert gölge, siyah kontur, 0 radius.
- Koyu zemin / neon.
- Açık mavi üstünde beyaz metin (kontrast 1.4:1).
- 3+ motif, 3+ gradient yönü.
- Yoğun tabloda gloss (okunmaz).
- Skeuomorphism'in ahşap/metal dokusu (bu stil cam/su).
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 14px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 14px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 14px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 14px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 14px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 14px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 14px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.02:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 44px başlık, kabarcık motifi, gloss CTA, cam panel | `shots/01-page.png` |
| Dashboard | düşük | Gloss azalır; beyaz kart + ince mavi kenar | `shots/01-page.png` |
| Form | düşük | 480px, yuvarlak input, tek gloss buton | `shots/01-page.png` |
| Liste/tablo | düşük | Beyaz zemin, açık mavi ayırıcı | `shots/01-page.png` |
| Boş durum | orta | Kabarcık illüstrasyonu + tek cümle | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 motif + cam panel | `shots/01-page.png` |
| Pricing | orta | 3 cam kart, orta kart accent kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Gloss minimum; sade beyaz form | `shots/01-page.png` |
| Modal | orta | Cam panel + blur 6px | `shots/01-page.png` |
| Toast | orta | Cam pill + koyu metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 13px metin | `shots/01-page.png` |
| Profil/ayar | orta | Beyaz kart listesi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.54:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.32:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.52:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.02:1 | ≥ 3 | accent ring |
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
| Okunmuyor | Açık mavi üstünde açık metin | `--ink` (#0d2b45) |
| Yapay/kitsch | 3+ motif, sert gradient | Motif 1, gradient yumuşak |
| "Mavi tema" gibi | Gloss ve yuvarlak tipografi yok | inset highlight + Segoe |
| Ağır | Gloss her öğede | Gloss yalnız buton/panel |
| Kurumsal güven kaybı | Ödeme ekranında gloss | O ekranlarda sadeleştir |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `y2k` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://aesthetics.fandom.com/wiki/Frutiger_Aero | Aesthetics Wiki · Frutiger Aero — Dönem dili ve motifler |
| https://fonts.google.com/specimen/Inter | Inter — Alternatif yuvarlak sans |
| https://guidebookgallery.org | GUIdebook — Vista/7 arayüz arşivi |

## AI brief

```text
Stil: Frutiger Aero (styles/25-frutiger-aero/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="frutiger-aero"]; hard-coded renk YASAK.
Parlaklık: dikey gradient + inset 0 1px 0 #fff + yumuşak mavi gölge; gloss yalnız buton/panel üst %35.
Palet: gökyüzü mavisi #dff1ff/#bfe3ff + beyaz; accent #2f9be0 (üstünde KOYU metin #0d2b45, 4.75:1).
Motif: ekran başına 1 (kabarcık/su/yaprak), opacity ≤ .18.
Tipografi: Segoe UI 600 display (44/1.15) + gövde 16/1.6; keskin grotesk yok.
Radius 14/22px; blur ≤ 6px (yalnız cam panel).
Yasak: sert gölge, siyah kontur, koyu zemin, açık mavi üstünde açık metin, 3+ motif.
Çıktı: kod + tek paragraf not (gloss dozu ve kontrast önlemi).

Style: Frutiger Aero (frutiger-aero) · family: Retro (19–27)
Token: --bg #dff1ff · --surface linear-gradient(180deg, #ffffff, #d6ecff) · --ink #0d2b45 · --accent #2090d5 · --line rgba(255,255,255,.85)
Radius: 14px / 22px · Typography: Segoe UI / Segoe UI / Consolas
Required: **Parlaklık üçlüsü:** dikey gradient + `inset 0 1px 0 #fff` + yumuşak mavi gölge. · **Gökyüzü paleti:** bg #dff1ff → bg-2 #bfe3ff; sıcak renk yok. · **Radius 14/22px**; buton pill serbest.
Banned: Sert gölge, siyah kontur, 0 radius. · Koyu zemin / neon. · Açık mavi üstünde beyaz metin (kontrast 1.4:1).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="frutiger-aero"] {
  --bg: #dff1ff; --bg-2: #bfe3ff;
  --surface: linear-gradient(180deg, #ffffff, #d6ecff); --surface-2: #eaf6ff;
  --ink: #0d2b45; --ink-soft: #365a75; --ink-faint: #6e8da6;
  --accent: #2090d5; --accent-ink: #06243e;
  --line: rgba(255,255,255,.85);
  --danger: #d22519;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b15000;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 8px 20px rgba(47,155,224,.28), inset 0 1px 0 #ffffff; --shadow-hard: none;
  --font-display: "Segoe UI", system-ui, sans-serif;
  --font-body: "Segoe UI", system-ui, sans-serif;
  --font-mono: "Consolas", system-ui, sans-serif;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
