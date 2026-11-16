# 19 · Y2K

> **In one sentence:** 2000'lerin kromu ve parlak plastiği: buz mavisi zemin, geniş harf aralıklı teknoid tipografi, cam-parlak yüzeyler.

| | |
|---|---|
| **Feeling** | nostaljik, parlak, teknolojik iyimser, "millennium" |
| **Best for** | moda/genç ürün, müzik, etkinlik, retro lansman, oyun eşlikçisi |
| **Avoid** | kurumsal finans, sağlık, uzun okuma, ciddi B2B |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="y2k"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Y2K (Year 2000) estetiği: **buz mavisi/beyaz** zemin, **krom ve parlak plastik** yüzeyler, **geniş harf aralıklı** teknoid tipografi (Michroma/Eurostile), **büyük radius** (20/28px), cam parlaklığı ve hafif blur. İyimser bir "gelecek geldi" hissi.

Kazandığı şey: nostalji + dikkat. Feda ettiği şey: okunurluk payı (parlaklık kontrastı yer).

### What is not
- **Frutiger Aero değildir.** Aero 2004–2010 doğa/su metaforu; Y2K daha metalik ve tipografi odaklı.
- **Glassmorphism değildir.** Cam orada katmandır; Y2K'de parlaklık **yüzeyin kendisi**dir.
- **Vaporwave değildir.** Vaporwave mor/pembe melankoli; Y2K mavi-beyaz ve neşeli.
- **"Parlak buton" değildir.** Geniş tracking, teknoid display ve krom kenar olmadan sadece "mavi tema" olur.

### Where it comes from
2000–2003 donanım arayüzleri (erken Mac OS X, Win XP Luna, MSN), krom logo modası. 2020'lerde moda/müzik ile geri döndü.

### Recognition test in 3 seconds
1. Zemin buz mavisi/beyaz mı (#eaf4ff)?
2. Display **geniş tracking'li teknoid** mi (Michroma)?
3. Yüzeylerde parlak highlight (inset beyaz) var mı?
4. Radius ≥ 20px mi?
5. Renkler soğuk (mavi/mor) ve metalik parlaklıkta mı?

## Visual signature
- **Krom kenar:** 1px `--line` (mavi %35) + `inset 0 1px 0 #fff`.
- **Buz mavisi katman:** `--bg-2` ikinci bölümde; gradient yok, tek ton.
- **Teknoid display:** Michroma, uppercase, geniş tracking, 48–56px.
- **Parlak buton:** gradient yerine düz accent + inset highlight.
- **Blur 10px:** cam panellerde hafif; abartma.
- **Typography:** Michroma (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#6f4de8`; neutral scale `#eaf4ff` → `#1b2340`.
- **Radius:** `20px` / `28px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Soğuk palet:** buz mavisi zemin + mor accent; sıcak renk yok.
2. **Parlak yüzey:** `inset 0 1px 0 #ffffff` her panelde; cam parlaklığı hissi.
3. **Geniş tracking:** display `0.01em`, etiket `0.18em`, uppercase.
4. **Radius 20/28px**; buton pill serbest.
5. **Tek accent (mor):** `#6f4de8` + beyaz metin (5.38:1).
6. **Kontrast tabanı:** gövde ≥ 4.5:1; parlak yüzeyde metin koyulaştırılır.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eaf4ff` | page background | as a card background |
| `--bg-2` | `#d9e9ff` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#e6f0ff` | passive chip, hover background | primary button |
| `--ink` | `#1b2340` | title, body, icon | large background |
| `--ink-soft` | `#4b557a` | secondary text, description | — |
| `--ink-faint` | `#838bac` | decorative label, separator text | interactive text |
| `--accent` | `#6f4de8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(90,120,220,.35)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.87:1** · `ink-soft/bg` **6.56:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **5.38:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 52px (mobile 30px) | 700 | 1.1 | 0.01em |
| H2 | same | 28px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `20px` (buton, input, chip), `28px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Toprak/sıcak palet, koyu zemin (koyu mod hariç).
- İnce tracking (Y2K karakteri kaybolur).
- Sert gölge, kalın siyah kontur.
- Parlak yüzey üstünde açık gri metin.
- 3+ parlak renk (krom + mor + mavi yeter).
- Yoğun tabloda tam parlaklık (okunmaz).
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 20px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 20px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 20px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 20px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 20px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 20px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 20px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.38:1 (≥ 3 on background/surface).
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
| Landing/hero | yüksek | 52px Michroma başlık, parlak panel, tek mor CTA, buz mavisi bant | `shots/01-page.png` |
| Dashboard | düşük | Parlaklık azalır; kartlar düz beyaz + krom kenar | `shots/01-page.png` |
| Form | düşük | 480px, pill buton, parlak input | `shots/01-page.png` |
| Liste/tablo | düşük | Düz beyaz, ince kenar | `shots/01-page.png` |
| Boş durum | orta | Parlak panel + tek cümle + pill buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 panel, ilerleme pill | `shots/01-page.png` |
| Pricing | orta | 3 parlak kart, orta kart mor kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Parlaklık ve blur kapanır | `shots/01-page.png` |
| Modal | orta | 28px radius + blur 10px | `shots/01-page.png` |
| Toast | orta | Mor pill + beyaz metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 13px metin | `shots/01-page.png` |
| Profil/ayar | orta | Kart listesi, krom ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.87:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.56:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.38:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.38:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 95 | ≥ 60 target | thin text |

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
| "Mavi tema" gibi | Geniş tracking + teknoid display yok | Michroma + 0.18em etiket |
| Okunmuyor | Parlak yüzey + açık metin | `--ink`, kontrast ≥ 4.5:1 |
| Ağır | Blur + glow her öğede | Blur ≤ 2 panel, glow tek |
| Kitsch | 4+ parlak renk | Krom + mor + buz mavisi |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `frutiger-aero` | Same level of seriousness; accent sharing is not allowed |
| garnish | `vaporwave` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `wabi-sabi` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.awwwards.com/websites/y2k/ | Awwwards · Y2K — Y2K örnekleri |
| https://fonts.google.com/specimen/Michroma | Michroma — Teknoid display |
| https://guidebookgallery.org | GUIdebook — 2000'ler OS arayüz arşivi |

## AI brief

```text
Stil: Y2K (styles/19-y2k/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="y2k"]; hard-coded renk YASAK.
Palet: buz mavisi #eaf4ff + beyaz + mor #6f4de8 (üstünde beyaz 5.38:1); sıcak renk yok.
Yüzey: her panelde inset 0 1px 0 #fff (krom parlaklık) + 1px mavi kenar; radius 20/28px; blur ≤ 2 panelde.
Tipografi: Michroma display uppercase 0.01em (52/1.1); Inter gövde 16/1.6; etiket mono 10 uppercase 0.18em.
Hareket: 120–300ms, hafif yay; sürekli parıltı yasak; reduced-motion'da yay kapanır.
Yoğun ekran (form/tablo/ödeme): parlaklık ve blur kapanır.
Çıktı: kod + tek paragraf not (parlaklık ve tracking disiplini).

Style: Y2K (y2k) · family: Retro (19–27)
Token: --bg #eaf4ff · --surface #ffffff · --ink #1b2340 · --accent #6f4de8 · --line rgba(90,120,220,.35)
Radius: 20px / 28px · Typography: Michroma / Inter / JetBrains Mono
Required: **Soğuk palet:** buz mavisi zemin + mor accent; sıcak renk yok. · **Parlak yüzey:** `inset 0 1px 0 #ffffff` her panelde; cam parlaklığı hissi. · **Geniş tracking:** display `0.01em`, etiket `0.18em`, uppercase.
Banned: Toprak/sıcak palet, koyu zemin (koyu mod hariç). · İnce tracking (Y2K karakteri kaybolur). · Sert gölge, kalın siyah kontur.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="y2k"] {
  --bg: #eaf4ff; --bg-2: #d9e9ff;
  --surface: #ffffff; --surface-2: #e6f0ff;
  --ink: #1b2340; --ink-soft: #4b557a; --ink-faint: #838bac;
  --accent: #6f4de8; --accent-ink: #ffffff;
  --line: rgba(90,120,220,.35);
  --danger: #d6291d;
  --danger-ink: #ffffff;
  --ok: #008137;
  --ok-ink: #ffffff;
  --warn: #b45300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 6px 18px rgba(120,150,255,.35), inset 0 1px 0 #ffffff; --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
