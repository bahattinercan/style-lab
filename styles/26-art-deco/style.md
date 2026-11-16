# 26 · Art Deco

> **In one sentence:** Art Deco

| | |
|---|---|
| **Feeling** | lüks, törensel, geometrik, "grand hotel" |
| **Best for** | otel/restoran, etkinlik/davet, mücevher, premium marka, tiyatro |
| **Avoid** | yoğun panel, teknoloji aracı, çocuk ürünü, uzun okuma |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="art-deco"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Art Deco, 1925 Paris sergisinin geometrik lüksü: **simetri**, **altın hairline**, **ziggurat/şevron** motifleri, koyu yeşil-siyah zemin ve krem metin. Tipografi yüksek tracking'li serif (Cinzel). Süs **çizgiyle** yapılır, dolguyla değil.

Kazandığı şey: tören ve değer algısı. Feda ettiği şey: bilgi yoğunluğu ve modernlik; günlük araç arayüzü olarak ağır kalır.

### What is not
- **Luxury Typography değildir.** O seyrek ve sade; Art Deco **geometrik süs** kullanır.
- **Victorian değildir.** Victorian kıvrımlı/gravür; Deco düz çizgi ve simetri.
- **Maximalism değildir.** Deco desen değil **çizgi geometrisi**; en fazla 2 motif.
- **"Altın + siyah" değildir.** Simetri, hairline çerçeve ve ziggurat olmadan sadece lüks taklidi olur.

### Where it comes from
1925 Exposition Internationale, Chrysler Building, otel/tren afişleri. Bugün hospitality ve premium etkinliklerde kullanılıyor.

### Recognition test in 3 seconds
1. Yerleşim **simetrik** mi (merkez ekseni)?
2. Altın **hairline** çerçeve var mı (tek veya çift)?
3. Ziggurat/şevron geometrisi var mı?
4. Display yüksek tracking'li serif mi (Cinzel)?
5. Zemin koyu yeşil/siyah, metin krem mi?

## Visual signature
- **Altın hairline:** `--accent` 1px; çift çerçeve 6px boşlukla.
- **Şevron:** CSS `clip-path` ile üçgen/şevron şerit, tek renk.
- **Ziggurat:** kademeli yatay çizgiler (3–5 basamak).
- **Simetrik tipografi:** merkezlenmiş Cinzel başlık, geniş tracking.
- **Koyu zemin:** #0e1b17 yeşil-siyah; krem metin #ede3d2.
- **Grain .03:** baskı hissi, hafif.
- **Typography:** Cinzel (display) + Jost (body) + Courier New (mono label).
- **Colour discipline:** a single accent `#c8a24a`; neutral scale `#0e1b17` → `#ede3d2`.
- **Radius:** `0px` / `2px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Simetri:** hero, kart ve modal merkez eksende; asimetri yok.
2. **Çift çerçeve:** dış 1px + 6–8px boşluk + iç 1px altın hairline.
3. **Motif bütçesi:** ekran başına en fazla 2 geometrik motif (şevron, ziggurat, ışın).
4. **Altın metin değil:** altın yalnız çizgi/ikon/çerçeve; metin krem.
5. **Tracking:** display `0.22em`, etiket `0.3em`, uppercase.
6. **Radius 0–2px**; yumuşak köşe yok.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0e1b17` | page background | as a card background |
| `--bg-2` | `#14241e` | partition divider floor, table top | button background |
| `--surface` | `#12211c` | kart, input, modal | full-page background |
| `--surface-2` | `#18302a` | passive chip, hover background | primary button |
| `--ink` | `#ede3d2` | title, body, icon | large background |
| `--ink-soft` | `#bcb2a1` | secondary text, description | — |
| `--ink-faint` | `#8a8172` | decorative label, separator text | interactive text |
| `--accent` | `#c8a24a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0e1b17` | text above accent | non-accent background |
| `--line` | `rgba(200,162,74,.55)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.91:1** · `ink-soft/bg` **8.44:1** · `ink-faint/bg` **4.6:1 (decorative)** · `accent-ink/accent` **7.34:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 52px (mobile 30px) | 700 | 1.1 | 0.01em |
| H2 | same | 28px | 600 | 1.2 | 0.01em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Asimetrik yerleşim, 3+ motif.
- Altın rengi gövde metni (kontrast düşer).
- Gradient, blur, cam, gölge.
- Eğri/kıvrımlı süs (Victorian'a kayar).
- 4+ renk (yeşil, siyah, altın, krem yeter).
- Yoğun tabloda tam süs.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.34:1 (≥ 3 on background/surface).
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
| Landing/hero | çok yüksek | Merkezli 52px Cinzel, çift çerçeve panel, tek altın buton | `shots/01-page.png` |
| Dashboard | düşük | Süs kapanır; hairline ayırıcı + krem metin | `shots/01-page.png` |
| Form | düşük | 440px merkez, alt çizgili input | `shots/01-page.png` |
| Liste/tablo | düşük | Altın hairline, 54px satır | `shots/01-page.png` |
| Boş durum | orta | Merkezli tek cümle + altın hairline | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 simetrik panel | `shots/01-page.png` |
| Pricing | yüksek | 3 simetrik kart, orta kart altın çerçeve | `shots/01-page.png` |
| Giriş/ödeme | düşük | Sade merkezli form, altın hairline | `shots/01-page.png` |
| Modal | orta | Çift çerçeve, merkezli | `shots/01-page.png` |
| Toast | orta | Altın çerçeveli koyu kutu | `shots/01-page.png` |
| Hata | düşük | `--danger` hairline + 14px metin | `shots/01-page.png` |
| Profil/ayar | düşük | Simetrik liste, altın ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.91:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.44:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.6:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.34:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.34:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 89.2 | ≥ 60 target | thin text |

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
| "Altın tema" gibi | Simetri/çerçeve yok | Çift çerçeve + merkezleme |
| Okunmuyor | Altın metin | Krem metin, altın yalnız çizgi |
| Ağır | Her bölümde motif | Motif ≤ 2, süs çizgiyle |
| Victorian'a kaydı | Kıvrımlı süs | Düz çizgi/şevron |
| Mobilde taşma | 0.22em tracking + 52px | `clamp()` + tracking 0.12em |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `victorian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.metmuseum.org | The Met — Art Deco dönem objeleri |
| https://fonts.google.com/specimen/Cinzel | Cinzel — Display serif |
| https://en.wikipedia.org/wiki/Art_Deco | Wikipedia · Art Deco — Motif sözlüğü |

## AI brief

```text
Stil: Art Deco (styles/26-art-deco/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="art-deco"]; hard-coded renk YASAK.
Simetri: içerik merkez eksende; asimetri yok.
Çerçeve: dış 1px + 6–8px boşluk + iç 1px altın hairline (çift çerçeve).
Altın #c8a24a yalnız çizgi/ikon/çerçeve; METIN krem #ede3d2 (13.91:1). Altın metin yasak.
Tipografi: Cinzel uppercase 0.22em (52/1.15) + Jost gövde 16/1.7 (0.03em); etiket Courier 10 0.3em.
Motif: ≤ 2 geometrik (şevron, ziggurat, ışın); radius 0–2px; gölge/blur/gradient yok.
Hareket: 160–600ms ease-in-out (törensel); süs döngüsü yasak.
Yasak: asimetri, 3+ motif, altın metin, eğri/kıvrımlı süs, 4+ renk.
Çıktı: kod + tek paragraf not (simetri ve hairline disiplini).

Style: Art Deco (art-deco) · family: Retro (19–27)
Token: --bg #0e1b17 · --surface #12211c · --ink #ede3d2 · --accent #c8a24a · --line rgba(200,162,74,.55)
Radius: 0px / 2px · Typography: Cinzel / Jost / Courier New
Required: **Simetri:** hero, kart ve modal merkez eksende; asimetri yok. · **Çift çerçeve:** dış 1px + 6–8px boşluk + iç 1px altın hairline. · **Motif bütçesi:** ekran başına en fazla 2 geometrik motif (şevron, ziggurat, ışın).
Banned: Asimetrik yerleşim, 3+ motif. · Altın rengi gövde metni (kontrast düşer). · Gradient, blur, cam, gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="art-deco"] {
  --bg: #0e1b17; --bg-2: #14241e;
  --surface: #12211c; --surface-2: #18302a;
  --ink: #ede3d2; --ink-soft: #bcb2a1; --ink-faint: #8a8172;
  --accent: #c8a24a; --accent-ink: #0e1b17;
  --line: rgba(200,162,74,.55);
  --danger: #eb4232;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0.22em; --blur: 0px; --grain: 0;
}
```
