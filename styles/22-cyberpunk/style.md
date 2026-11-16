# 22 · Cyberpunk

> **In one sentence:** Neon tabelaların altında kirli beton: sarı uyarı şeridi, cyan glow, HUD etiketleri ve mono veri.

| | |
|---|---|
| **Feeling** | distopik, teknik, tehlikeli, "gece şehri" |
| **Best for** | oyun, kripto/güvenlik ürünü, etkinlik, teknik demo, hacker teması |
| **Avoid** | sağlık, resmi kurum, aile/çocuk ürünü, ödeme güveni gereken akışlar |
| **Difficulty** | orta-yüksek (kaos kontrolü) · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="cyberpunk"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Cyberpunk, yüksek teknoloji + düşük yaşam: **siyah-kirli zemin**, **sarı uyarı şeridi**, **cyan glow** ve **mono veri** dili. Tipografi kondanse teknik (Chakra Petch) + mono gövde (IBM Plex Mono). Köşe yarıçapı neredeyse yok, kenarlar keskin.

Kazandığı şey: teknik otorite + atmosfer. Feda ettiği şey: güven ve sakinlik; yanlış sektörde "güvenilmez" algısı yaratır.

### What is not
- **Cybercore değildir.** Cybercore terminal/CLI (yeşil fosfor); cyberpunk sokak/neon.
- **Synthwave değildir.** Synthwave pembe nostalji; cyberpunk sarı-cyan ve kirli.
- **Acid graphics değildir.** Acid tek asit rengi; cyberpunk ikili neon + HUD.
- **"Siyah + neon" değildir.** Uyarı şeridi, HUD etiketleri ve mono veri olmadan sadece koyu tema olur.

### Where it comes from
William Gibson/Blade Runner görsel dili; 2020'lerde kripto/güvenlik ürünlerinin "hacker" estetiği.

### Recognition test in 3 seconds
1. Zemin siyah ve hafif "kirli" (grain .08) mi?
2. Neon sarı (uyarı) + cyan (glow) ikilisi var mı?
3. Sarı-siyah uyarı şeridi bir bantta mı?
4. Gövde mono mu (IBM Plex Mono)?
5. Kenarlar keskin (radius ≤ 6px) mi?

## Visual signature
- **Uyarı şeridi:** `repeating-linear-gradient(90deg, #f9f002 0 14px, #0b0b0f 14px 28px)`, 8px.
- **Cyan glow:** `0 0 16px rgba(5,217,232,.35)` — panel kenarı.
- **HUD etiket:** mono 9–10px, `0.16em`, köşe braketleri (opsiyonel).
- **Keskin köşe:** 2px buton, 6px panel.
- **Kir:** grain .08 + ince scanline.
- **Veri dili:** `[ OK ]`, `--flag`, `0x1F` gibi mono mikro metinler.
- **Typography:** Chakra Petch (display) + IBM Plex Mono (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#f9f002`; neutral scale `#0b0b0f` → `#f2f5f7`.
- **Radius:** `2px` / `6px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **İki neon rol:** sarı = uyarı/dikkat, cyan = teknik/bilgi; karıştırma.
2. **Uyarı şeridi:** yalnız 1 bantta (üst veya bölüm başı), 8px yükseklik.
3. **Mono gövde:** IBM Plex Mono 15px; başlık Chakra Petch uppercase.
4. **Radius ≤ 6px**; panel 6px, buton 2px.
5. **Kontrast tabanı:** gövde ≥ 4.5:1; glow metnin arkasında değil kenarında.
6. **Kir ölçülü:** grain .08 + 1 doku katmanı; fazlası okunurluğu bozar.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b0b0f` | page background | as a card background |
| `--bg-2` | `#15151d` | partition divider floor, table top | button background |
| `--surface` | `rgba(20,20,28,.85)` | kart, input, modal | full-page background |
| `--surface-2` | `#1b1b26` | passive chip, hover background | primary button |
| `--ink` | `#f2f5f7` | title, body, icon | large background |
| `--ink-soft` | `rgba(242,245,247,.76)` | secondary text, description | — |
| `--ink-faint` | `rgba(242,245,247,.5)` | decorative label, separator text | interactive text |
| `--accent` | `#f9f002` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0b0b0f` | text above accent | non-accent background |
| `--line` | `rgba(5,217,232,.55)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.94:1** · `ink-soft/bg` **10.4:1** · `ink-faint/bg` **4.97:1 (decorative)** · `accent-ink/accent` **16.36:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Chakra Petch) | 56px (mobile 32px) | 700 | 1.1 | 0.01em |
| H2 | same | 30px | 600 | 1.2 | 0.01em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (IBM Plex Mono) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 9px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Üçüncü neon (pembe/yeşil) — synthwave/acid'e kayar.
- Her öğede glow.
- Yuvarlak, yumuşak kartlar (radius > 6px).
- Açık zemin / gündüz modu.
- Strobe, hızlı yanıp sönme.
- Ödeme/giriş ekranında tam yoğunluk.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 16.36:1 (≥ 3 on background/surface).
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
| Landing/hero | çok yüksek | 56px Chakra Petch, uyarı şeridi, cyan glow panel, mono alt metin | `shots/01-page.png` |
| Dashboard | orta | HUD etiketleri + mono tablo; glow yalnız 1 panelde | `shots/01-page.png` |
| Form | düşük | Keskin kenar, tek sarı buton; şerit yok | `shots/01-page.png` |
| Liste/tablo | orta | Mono yoğun tablo, cyan ayırıcı | `shots/01-page.png` |
| Boş durum | orta | `[ NO DATA ]` mono + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 HUD panel | `shots/01-page.png` |
| Pricing | orta | 3 panel, orta panel sarı kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Şerit/glow kapanır; sade koyu form (güven) | `shots/01-page.png` |
| Modal | orta | Glow'lu panel, koyu backdrop | `shots/01-page.png` |
| Toast | orta | Sarı pill + siyah metin | `shots/01-page.png` |
| Hata | orta | `[ ERR ]` mono + sarı şerit | `shots/01-page.png` |
| Profil/ayar | düşük | Düz liste, mono etiket | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.94:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.4:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.97:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 16.36:1 | ≥ 4.5 | button text |
| focus ring/ground | 16.36:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.8 | ≥ 60 target | thin text |

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
| Kitsch/oyuncak | 3+ neon + yuvarlak kart | 2 neon, radius ≤ 6px |
| Okunmuyor | Mono 12px + glow | 15px taban, glow kenarda |
| Güven kaybı | Ödeme ekranında tam stil | O ekranlarda şerit/glow kapat |
| Kimlik kaybı | Şerit ve HUD yok | 1 uyarı şeridi + HUD etiket |
| Göz yorgunluğu | Scanline + grain + glow yoğun | Katman ≤ 2 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `synthwave` | Same level of seriousness; accent sharing is not allowed |
| garnish | `acid-graphics` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.awwwards.com/websites/cyberpunk/ | Awwwards · Cyberpunk — Uygulama örnekleri |
| https://fonts.google.com/specimen/Chakra+Petch | Chakra Petch — Kondanse teknik display |
| https://www.nngroup.com/articles/dark-mode/ | NN/g · Dark mode — Koyu tema kontrast notları |

## AI brief

```text
Stil: Cyberpunk (styles/22-cyberpunk/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="cyberpunk"]; hard-coded renk YASAK.
Neon rolleri: sarı #f9f002 = uyarı/CTA (üstünde SİYAH metin 16.36:1), cyan #05d9e8 = teknik/kenar; 3. neon yok.
Şerit: 8px sarı-siyah uyarı bandı, ekran başına 1.
Gövde: IBM Plex Mono 15/1.65; başlık Chakra Petch 700 uppercase 0.10em.
Yüzey: radius 2/6px, yarı saydam panel + cyan kenar + 0 0 16px cyan glow (ekran başına ≤ 3).
Kir: grain .08 + 1 scanline; doku abartma.
Hareket: 90–240ms, steps(3) serbest; strobe YASAK; reduced-motion'da glitch/scanline durur.
Ödeme/giriş: şerit ve glow kapalı (güven).
Çıktı: kod + tek paragraf not (neon rolleri ve okunurluk önlemi).

Style: Cyberpunk (cyberpunk) · family: Retro (19–27)
Token: --bg #0b0b0f · --surface rgba(20,20,28,.85) · --ink #f2f5f7 · --accent #f9f002 · --line rgba(5,217,232,.55)
Radius: 2px / 6px · Typography: Chakra Petch / IBM Plex Mono / Share Tech Mono
Required: **İki neon rol:** sarı = uyarı/dikkat, cyan = teknik/bilgi; karıştırma. · **Uyarı şeridi:** yalnız 1 bantta (üst veya bölüm başı), 8px yükseklik. · **Mono gövde:** IBM Plex Mono 15px; başlık Chakra Petch uppercase.
Banned: Üçüncü neon (pembe/yeşil) — synthwave/acid'e kayar. · Her öğede glow. · Yuvarlak, yumuşak kartlar (radius > 6px).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="cyberpunk"] {
  --bg: #0b0b0f; --bg-2: #15151d;
  --surface: rgba(20,20,28,.85); --surface-2: #1b1b26;
  --ink: #f2f5f7; --ink-soft: rgba(242,245,247,.76); --ink-faint: rgba(242,245,247,.5);
  --accent: #f9f002; --accent-ink: #0b0b0f;
  --line: rgba(5,217,232,.55);
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
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 0 16px rgba(5,217,232,.35); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.10em; --blur: 0px; --grain: 0;
}
```
