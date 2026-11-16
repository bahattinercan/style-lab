# 05 · Bento Grid

> **In one sentence:** Değişken boyutlu modüler kutular; her kutu tek bir cevap verir, ızgara "her şey yerinde" hissini kurar.

| | |
|---|---|
| **Feeling** | düzenli, taranabilir, ürün vitrini, "kontrol paneli" |
| **Best for** | dashboard, özellik vitrini, ürün landing'i, kişisel ana ekran |
| **Avoid** | uzun okuma, tek akışlı form, ağır anlatı sayfası |
| **Difficulty** | orta (mobil kırılganlığı) · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="bento-grid"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Bento, Japon yemek kutusu düzeninin arayüze uyarlanması: **değişken boyutlu kartlar**, **sabit gutter**, **yüksek radius**, **yumuşak gölge**. Her kutu bağımsız bir "mini cevap" taşır (sayı, grafik, durum, eylem) ve göz ızgarayı tarayarak bilgiyi toplar.

Kazandığı şey: taranabilirlik ve vitrin etkisi. Feda ettiği şey: akış — bento okutmaz, gösterir.

### What is not
- **Dashboard değildir.** Dashboard işlevsel yoğunluk; bento **vitrin** düzenidir, boşluk ve radius ile nefes alır.
- **Minimalism değildir.** Minimalizm gölgeyi reddeder; bento yumuşak gölge ve büyük radius kullanır.
- **Masonry değildir.** Masonry düzensiz yükseklik; bento **hizalı** satır/kolon sistemidir.
- **"Her şeyi kutuya koy" değildir.** Kutular arasında hiyerarşi yoksa sonuç "kart çorbası" olur.

### Where it comes from
Apple/Google'ın widget ekranları, kişisel panolar ve 2022+ ürün sitelerinin "özellik vitrini" ihtiyacı. Kutu boyutu = önem sırası olduğu için pazarlama ile ürün arayüzünü aynı dilde buluşturur.

### Recognition test in 3 seconds
1. Kartlar farklı boyutlarda mı (2×1, 1×2, 2×2)?
2. Gutter her yerde aynı mı (16–20px)?
3. Radius ≥ 16px, gölge yumuşak mı?
4. Her kartta tek bir sayı/grafik/eylem mi var?
5. Mobilde tek kolona düşüyor mu, yoksa kartlar taşıyor mu?

## Visual signature
- **Kart anatomisi:** mono etiket (11px) → büyük sayı/başlık (28–34px) → tek satır açıklama.
- **Kahraman kart:** 2×2, sayı 40px, accent vurgu çubuğu veya mini grafik.
- **Radius 18px** (küçük kart) / **24px** (büyük kart).
- **Gölge:** `0 1px 2px rgba(18,19,15,.05), 0 8px 24px rgba(18,19,15,.04)` — iki katman, düşük opaklık.
- **Accent dokunuşu:** kart başına en fazla 1 accent öğe (ikinci renk yok).
- **Typography:** Inter (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#1f6feb`; neutral scale `#f4f4f2` → `#12130f`.
- **Radius:** `18px` / `24px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Değişken boyut:** en az 3 farklı kart ölçüsü (2×2, 2×1, 1×1); her satırda en fazla 1 "kahraman" kart.
2. **Sabit gutter:** 16px (mobil 12px); kart aralıkları asla değişmez.
3. **Tek cevap kuralı:** her kartta bir sayı, bir grafik veya bir eylem — ikisi birden değil.
4. **Radius 18/24px, yumuşak gölge** (`0 1px 2px` + `0 8px 24px`); sert gölge yok.
5. **Mobilde tek kolon:** 2+ kolonlu kartlar tam genişliğe düşer, yükseklik korunur.
6. **Kart içi boşluk 16–20px**, kart başlığı 11–12px mono etiket.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f4f2` | page background | as a card background |
| `--bg-2` | `#ececea` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#fafaf9` | passive chip, hover background | primary button |
| `--ink` | `#12130f` | title, body, icon | large background |
| `--ink-soft` | `#5b5f58` | secondary text, description | — |
| `--ink-faint` | `#8a8f86` | decorative label, separator text | interactive text |
| `--accent` | `#1f6feb` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(18,19,15,.08)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.94:1** · `ink-soft/bg` **5.92:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **4.63:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 40px (mobile 26px) | 600 | 1.12 | -0.02em |
| H2 | same | 24px | 600 | 1.22 | -0.015em |
| H3 | same | 16px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `18px` (buton, input, chip), `24px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- 4+ farklı kart ölçüsü, rastgele boşluklar.
- Kart içinde kart (kutu içinde kutu) — 1 seviye yeter.
- 14px altı gövde metni; kart içinde 5+ satır paragraf.
- Sert/koyu gölge, kalın kontur, gradient zemin.
- Mobilde 2 kolon ısrarı (taşma/okunmazlık).
- Her karta farklı radius/gölge tonu.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 18px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 18px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 18px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 18px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 18px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 18px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 18px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.63:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 1 dev başlık + altında 2×2 kahraman kart + 4 küçük özellik kartı | `shots/01-page.png` |
| Dashboard | yüksek | 4 kolon ızgara: KPI 1×1 ×3, grafik 2×1, tablo 2×2; her kartta tek sayı | `shots/01-page.png` |
| Form | düşük | Bento kullanma; tek kolon form (stil sadece radius/renk) | `shots/01-page.png` |
| Liste / tablo | düşük | Tablo tek kart içinde 2×2 alan; satırlar hairline | `shots/01-page.png` |
| Boş durum | orta | 1×1 kartta ikon + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 büyük kart; ilerleme nokta | `shots/01-page.png` |
| Pricing | orta | 3 kolon kart, orta kart 2×1 (daha uzun) + accent kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek 1×1 kart, 2 alan; süs yok | `shots/01-page.png` |
| Modal | orta | 24px radius, 1 kart içinde içerik | `shots/01-page.png` |
| Bildirim / toast | orta | 18px radius pill | `shots/01-page.png` |
| Hata | düşük | Kart içinde ikon + 2 satır | `shots/01-page.png` |
| Profil / ayar | orta | 2 kolon ızgara; her ayar grubu 1 kart | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.94:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.92:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.63:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.63:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.6 | ≥ 60 target | thin text |

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
| "Kart çorbası" | Hiyerarşi yok, hepsi aynı boyut | 1 kahraman 2×2 + farklı span'ler |
| Mobilde kırılıyor | Sabit `grid-column: span 3` | Mobilde tüm kartlar `span 1` (tam genişlik) |
| Dağınık | 4+ farklı ölçü, değişken gutter | 3 ölçü + tek gutter |
| Yorgun | Her kartta 3+ satır metin | Tek cevap kuralı: sayı **veya** grafik **veya** eylem |
| Eski görünüm | Koyu gölge | İki katman, düşük opaklık |
| Okunmuyor | 11px etiket + düşük kontrast | Etiket mono uppercase ≥ 11px, `--ink-soft` kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `scrapbook` | Two different ornamental languages compete on the same screen |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.apple.com/ios/ | Apple iOS — Widget/bento düzeni ve radius oranları |
| https://www.notion.so/product | Notion Product — Özellik vitrininde değişken kart |
| https://linear.app | Linear — Yoğun panoda kart hiyerarşisi |

## AI brief

```text
Stil: Bento Grid (styles/05-bento-grid/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bento-grid"]; hard-coded renk/gölge/radius YASAK.
Izgara: grid-auto-rows sabit (120px) + span'ler (2x2, 2x1, 1x1); gutter 16px (mobil 12px); mobilde tüm kartlar tam genişlik.
Kart: --surface + radius 18/24px + --shadow (iki katman); padding 18px; mono etiket 11px + sayı 34–40px + 1 satır açıklama.
Tek cevap kuralı: her kartta sayı VEYA grafik VEYA eylem.
Tipografi: Inter; sayı tabular 700, açıklama 14/400 --ink-soft, etiket mono 11 uppercase 0.12em.
Renk: tek accent (--accent); kart başına en fazla 1 accent öğe.
Hareket: hover translateY(-2px) + gölge 180ms; reduced-motion'da yalnız opacity.
Yasak: kart içinde kart, koyu gölge, 4+ ölçü, değişken gutter, mobilde 2 kolon ısrarı.
Çıktı: kod + tek paragraf not (span dağılımını ve mobil düşüşü nasıl kurdun).

Style: Bento Grid (bento-grid) · family: Minimal (1–7)
Token: --bg #f4f4f2 · --surface #ffffff · --ink #12130f · --accent #1f6feb · --line rgba(18,19,15,.08)
Radius: 18px / 24px · Typography: Inter / Inter / JetBrains Mono
Required: **Değişken boyut:** en az 3 farklı kart ölçüsü (2×2, 2×1, 1×1); her satırda en fazla 1 "kahraman" kart. · **Sabit gutter:** 16px (mobil 12px); kart aralıkları asla değişmez. · **Tek cevap kuralı:** her kartta bir sayı, bir grafik veya bir eylem — ikisi birden değil.
Banned: 4+ farklı kart ölçüsü, rastgele boşluklar. · Kart içinde kart (kutu içinde kutu) — 1 seviye yeter. · 14px altı gövde metni; kart içinde 5+ satır paragraf.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="bento-grid"] {
  --bg: #f4f4f2; --bg-2: #ececea;
  --surface: #ffffff; --surface-2: #fafaf9;
  --ink: #12130f; --ink-soft: #5b5f58; --ink-faint: #8a8f86;
  --accent: #1f6feb; --accent-ink: #ffffff;
  --line: rgba(18,19,15,.08);
  --danger: #d62a1d;
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
  --radius: 18px; --radius-lg: 24px;
  --shadow: 0 1px 2px rgba(18,19,15,.05), 0 8px 24px rgba(18,19,15,.04); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
