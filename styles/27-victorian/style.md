# 27 · Victorian

> **In one sentence:** Gravür ve baskı mirası: çift kural çizgileri, süslü başlık, small caps ve kâğıt dokusu.

| | |
|---|---|
| **Feeling** | klasik, edebi, gizemli, "ciltlenmiş kitap" |
| **Best for** | yayın/dergi, kulüp/üyelik, gizem-temalı ürün, müze, davet |
| **Avoid** | modern SaaS paneli, çocuk, hızlı e-ticaret, yoğun veri |
| **Difficulty** | yüksek (yoğunluk/okunurluk dengesi) · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="victorian"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Victorian, 19. yüzyıl baskı dilinin arayüze taşınması: **çift kural çizgileri** (double rule), **süslü serif başlık** (Playfair), **serif gövde** (EB Garamond), **small caps**, **drop cap**, gravür illüstrasyon ve kâğıt dokusu. Süs çizgiyle ve tipografiyle yapılır.

Kazandığı şey: otorite, edebi atmosfer, hatırlanma. Feda ettiği şey: tarama hızı ve modernlik.

### What is not
- **Art Deco değildir.** Deco düz geometri ve simetri; Victorian **kıvrımlı/gravür** detay.
- **Dark Academia değildir.** O koyu ve mum ışığı; Victorian açık kâğıt üzerinde baskı.
- **Editorial değildir.** Editorial modern dergi ritmi; Victorian dönem süsü (çift kural, small caps).
- **"Serif font" değildir.** Çift kural + small caps + drop cap olmadan sadece klasik blog olur.

### Where it comes from
19. yüzyıl gazete/kitap baskısı, gravür illüstrasyon ve afiş tipografisi; gizem/edebiyat temalı ürünlerde ve müze yayınlarında kullanılıyor.

### Recognition test in 3 seconds
1. Çift kural çizgi (double rule) var mı?
2. Başlık süslü serif, gövde **serif** mi?
3. Small caps / drop cap kullanılmış mı?
4. Kâğıt dokusu (grain .06) görünüyor mu?
5. Süs **çizgi ve tipografi**, dolgu değil mi?

## Visual signature
- **Çift kural:** 3px double, `--line` (%45 siyah).
- **Ornament:** tek satır `❦` / `✳`; ekran başına 1.
- **Small caps etiket:** 10px, tracking `0.12em`.
- **Drop cap:** 44px EB Garamond, 3 satır.
- **Gravür illüstrasyon:** tek renk çizim, kâğıt zeminde.
- **Kâğıt grain .06.**
- **Typography:** Playfair Display (display) + EB Garamond (body) + Courier New (mono label).
- **Colour discipline:** a single accent `#5a1e2b`; neutral scale `#efe7d6` → `#1c1a17`.
- **Radius:** `0px` / `0px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Çift kural:** bölüm ayırıcı `3px double`; tek çizgi yalnız iç ayrımda.
2. **Serif ikilisi:** Playfair (display) + EB Garamond (gövde); sans yalnız etiket değil — etiket mono/Courier.
3. **Small caps:** etiket ve alt başlıklarda `font-variant: small-caps`, tracking `0.12em`.
4. **Drop cap:** yalnız açılış paragrafında, 3 satır.
5. **Radius 0**, gölge yok; ayrım çizgi ve boşlukla.
6. **Okunurluk:** gövde 17px/1.7, satır 66ch; süs metnin arkasında.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#efe7d6` | page background | as a card background |
| `--bg-2` | `#e5dbc5` | partition divider floor, table top | button background |
| `--surface` | `#f7f1e3` | kart, input, modal | full-page background |
| `--surface-2` | `#eae0cb` | passive chip, hover background | primary button |
| `--ink` | `#1c1a17` | title, body, icon | large background |
| `--ink-soft` | `#4f4940` | secondary text, description | — |
| `--ink-faint` | `#857c6e` | decorative label, separator text | interactive text |
| `--accent` | `#5a1e2b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f1e3` | text above accent | non-accent background |
| `--line` | `rgba(28,26,23,.45)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.11:1** · `ink-soft/bg` **7.24:1** · `ink-faint/bg` **3.34:1 (decorative)** · `accent-ink/accent` **11.26:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 50px (mobile 30px) | 700 | 1.1 | 0.01em |
| H2 | same | 28px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 17px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier New) | 10px | 400 | 1.2 | 0.2em |
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

- Sans-serif gövde (dönem hissi biter).
- 3+ süs öğesi aynı ekranda (çift kural + drop cap + ornament = fazla).
- Kalın (700+) display; Playfair 400–600 yeterli.
- Modern kart gölgeleri, gradient, cam.
- 12px altı gövde; dar satır aralığı.
- Yoğun tabloda ornament.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 11.26:1 (≥ 3 on background/surface).
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
| Landing/hero | yüksek | 50px Playfair, çift kural, drop cap, gravür görsel | `shots/01-page.png` |
| Dashboard | çok düşük | Kural çizgileri + serif başlık; süs yok | `shots/01-page.png` |
| Form | düşük | 480px, serif etiket, alt çizgili input | `shots/01-page.png` |
| Liste/tablo | düşük | 52px satır, ince kural | `shots/01-page.png` |
| Boş durum | orta | Ornament + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 gravür + 2 satır | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart accent çift çerçeve | `shots/01-page.png` |
| Giriş/ödeme | düşük | Sade form, kural çizgisi | `shots/01-page.png` |
| Modal | orta | Çift çerçeve, 32px padding | `shots/01-page.png` |
| Toast | orta | Bordo zemin + krem small caps | `shots/01-page.png` |
| Hata | düşük | `--danger` alt çizgi + 15px serif metin | `shots/01-page.png` |
| Profil/ayar | orta | 8/4 kolon, kural ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.11:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.24:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.34:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.26:1 | ≥ 4.5 | button text |
| focus ring/ground | 11.26:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.4 | ≥ 60 target | thin text |

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
| Okunmuyor | Serif 15px + dar satır | 17px/1.7, 66ch |
| Aşırı süslü | 4+ ornament | Ekran başına 1 ornament + 1 çift kural |
| "Klasik blog" gibi | Small caps/drop cap yok | Small caps etiket + drop cap |
| Modern kaçmış | Sans gövde / gölge | Serif gövde, gölge yok |
| Mobilde ağır | 50px sabit | `clamp()` 30px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.bl.uk | British Library — Dönem baskı örnekleri |
| https://fonts.google.com/specimen/Playfair+Display | Playfair Display — Display serif |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Gövde serif |

## AI brief

```text
Stil: Victorian (styles/27-victorian/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="victorian"]; hard-coded renk YASAK.
Tipografi: Playfair display 400–600 (50/1.12) + EB Garamond GÖVDE 17/1.7 (serif gövde zorunlu); etiket Courier 10 small-caps 0.12em.
Süs: bölüm başlarında 3px double kural; ekran başına 1 ornament; drop cap yalnız açılış paragrafında.
Renk: kâğıt #efe7d6 + bordo #5a1e2b (üstünde krem, 11.26:1); radius 0, gölge yok.
Doku: grain .06. Gövde 66ch.
Hareket: 140–500ms ease-out; süs animasyonu yasak.
Yasak: sans gövde, 700 display, gradient/gölge/cam, 12px altı gövde, yoğun tabloda ornament.
Çıktı: kod + tek paragraf not (süs bütçesi ve okunurluk).

Style: Victorian (victorian) · family: Retro (19–27)
Token: --bg #efe7d6 · --surface #f7f1e3 · --ink #1c1a17 · --accent #5a1e2b · --line rgba(28,26,23,.45)
Radius: 0px / 0px · Typography: Playfair Display / EB Garamond / Courier New
Required: **Çift kural:** bölüm ayırıcı `3px double`; tek çizgi yalnız iç ayrımda. · **Serif ikilisi:** Playfair (display) + EB Garamond (gövde); sans yalnız etiket değil — etiket mono/Courier. · **Small caps:** etiket ve alt başlıklarda `font-variant: small-caps`, tracking `0.12em`.
Banned: Sans-serif gövde (dönem hissi biter). · 3+ süs öğesi aynı ekranda (çift kural + drop cap + ornament = fazla). · Kalın (700+) display; Playfair 400–600 yeterli.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="victorian"] {
  --bg: #efe7d6; --bg-2: #e5dbc5;
  --surface: #f7f1e3; --surface-2: #eae0cb;
  --ink: #1c1a17; --ink-soft: #4f4940; --ink-faint: #857c6e;
  --accent: #5a1e2b; --accent-ink: #f7f1e3;
  --line: rgba(28,26,23,.45);
  --danger: #cd1d12;
  --danger-ink: #ffffff;
  --ok: #007931;
  --ok-ink: #ffffff;
  --warn: #ad4b00;
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
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: 0;
}
```
