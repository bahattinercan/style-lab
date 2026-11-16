# 29 · Ethereal

> **In one sentence:** Sis ve ışık: neredeyse silinen kontrast, yumuşak serif, cam yüzeyler ve nefes gibi hareket.

| | |
|---|---|
| **Feeling** | sakin, ruhani, yumuşak, "bulut" |
| **Best for** | meditasyon/uyku, ses/müzik, wellness, terapi, sanat |
| **Avoid** | finans, sağlık verisi, yoğun panel, dış mekân kullanımı |
| **Difficulty** | yüksek (kontrast koruma) · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="ethereal"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Ethereal, biçimi ışıkla eritir: **sisli pastel zemin** (radyal lekeler), **yarı saydam beyaz yüzeyler** (blur 24px), **yumuşak serif** (Cormorant 300), çok düşük kontrastlı hairline'lar ve **nefes hızında** (400ms+) hareket.

Kazandığı şey: dinginlik. Feda ettiği şey: okunurluk ve kesinlik — bu stil **kontrast yönetimi olmadan kullanılamaz**.

### What is not
- **Japandi değildir.** Japandi sıcak toprak; ethereal soğuk pastel ve silik.
- **Glassmorphism değildir.** Cam orada katman iddiası; burada yüzey neredeyse kaybolur.
- **"Soluk tema" değildir.** Kontrast yumuşak ama **gövde ≥ 4.5:1** korunur.
- **Scrapbook/bohemian değildir.** Doku ve kolaj yok; sadece ışık.

### Where it comes from
Meditasyon/uyku uygulamaları, ambient müzik kapakları ve "soft digital" dalgası.

### Recognition test in 3 seconds
1. Zemin pastel ve radyal ışıklı mı (düz değil)?
2. Yüzeyler yarı saydam beyaz + yüksek blur mu?
3. Display ince serif (300–400) mi?
4. Hairline'lar çok soluk mu?
5. Hareket yavaş mı (≥ 400ms, nefes)?

## Visual signature
- **Sis katmanı:** 2 radyal gradient (%60 üst sınırı).
- **Cam kart:** beyaz %55 + blur 24px.
- **İnce serif:** Cormorant 300, 46px, 1.2 satır.
- **Soluk hairline:** `rgba(59,53,66,.10)`.
- **Mor accent:** `#7a63bd`, üstünde beyaz metin (4.83:1).
- **Nefes:** 6sn döngü, 1–2px ölçek (yalnız 1 öğe).
- **Typography:** Cormorant Garamond (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#7a63bd`; neutral scale `#f7f4f8` → `#3b3542`.
- **Radius:** `20px` / `28px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Metin kontrastı:** gövde ≥ 4.5:1 (bu stilde en kritik kural); soluk yazı yalnız dekoratif.
2. **Işık katmanı:** 2 radyal leke, opacity ≤ .6, blur yok (gradient ile).
3. **Cam yüzey:** beyaz %55 + blur 24px + 1px soluk kenar.
4. **İnce serif display** 300–400; gövde sans (Inter) okunurluk için.
5. **Hareket yavaş:** 400–800ms, `ease-in-out`; nefes (1–2px) dışında animasyon yok.
6. **Radius 20/28px**; keskin köşe yok.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f4f8` | page background | as a card background |
| `--bg-2` | `#efe9f4` | partition divider floor, table top | button background |
| `--surface` | `rgba(255,255,255,.55)` | kart, input, modal | full-page background |
| `--surface-2` | `rgba(255,255,255,.35)` | passive chip, hover background | primary button |
| `--ink` | `#3b3542` | title, body, icon | large background |
| `--ink-soft` | `#635c6e` | secondary text, description | — |
| `--ink-faint` | `#928b9f` | decorative label, separator text | interactive text |
| `--accent` | `#7a63bd` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(59,53,66,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **10.85:1** · `ink-soft/bg` **5.86:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **4.83:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 46px (mobile 28px) | 400 | 1.04 | -0.02em |
| H2 | same | 28px | 600 | 1.16 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `20px` (buton, input, chip), `28px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Sert gölge, koyu zemin, doygun renk.
- 12px altı metin; `--ink-faint` gövde metninde.
- 3+ ışık katmanı (banding + yorgunluk).
- Hızlı animasyon, sürekli hareket.
- Cam üstünde cam.
- Ödeme/giriş ekranında sis (güven).
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.83:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 46px ince serif, 2 sis lekesi, tek cam panel | `shots/01-page.png` |
| Dashboard | çok düşük | Sis kapanır, cam yalnız nav; sayılar Inter | `shots/01-page.png` |
| Form | düşük | Tek cam kart, 460px | `shots/01-page.png` |
| Liste/tablo | düşük | Cam panel, soluk hairline | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + cam kart + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 cam panel, nefes animasyonu | `shots/01-page.png` |
| Pricing | orta | 2 cam kolon | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Sis/blur kapanır, opak kart | `shots/01-page.png` |
| Modal | orta | Cam + blur 28px | `shots/01-page.png` |
| Toast | orta | Cam pill | `shots/01-page.png` |
| Hata | düşük | `--danger` ince kenar + 14px | `shots/01-page.png` |
| Profil/ayar | orta | Cam liste, soluk ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 10.85:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.86:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.83:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.83:1 | ≥ 3 | accent ring |
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
| Okunmuyor | `--ink-faint` gövde metninde | `--ink` kullan (10.85:1) |
| "Bulutlu" ama boş | Hiyerarşi yok | İnce serif + Inter gövde kontrastı |
| Banding | 3+ ışık katmanı | 2 leke + grain .03 |
| Yorgunluk | Sürekli animasyon | Nefes 1 öğe, 6s |
| Güven kaybı | Ödeme ekranında sis | O ekranlarda opak kart |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `surrealism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond — İnce serif |
| https://mobbin.com | Mobbin — Wellness/meditasyon akışları |
| https://developer.apple.com/design/human-interface-guidelines/accessibility | Apple HIG · Accessibility — Kontrast ve hareket |

## AI brief

```text
Stil: Ethereal (styles/29-ethereal/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="ethereal"]; hard-coded renk YASAK.
KRİTİK: gövde metni her zaman --ink (#3b3542, 10.85:1); --ink-faint yalnız dekoratif (2.85:1).
Zemin: 2 radyal pastel leke (opacity ≤ .6) + grain .03; düz zemin kullanma.
Cam: --surface (beyaz %55) + blur 24px + 1px soluk kenar; cam yüzey ≤ 3.
Tipografi: Cormorant 300 display (46/1.2, 0.03em) + Inter gövde 16/1.75; etiket mono 10 0.2em.
Hareket: 400–800ms ease-in-out; nefes 6s tek öğe; reduced-motion'da durur.
Yasak: soluk zeminde soluk metin, sert gölge, koyu zemin, hızlı/çoklu animasyon, ödeme ekranında sis.
Çıktı: kod + tek paragraf not (kontrastı nasıl korudun).

Style: Ethereal (ethereal) · family: Art (28–34)
Token: --bg #f7f4f8 · --surface rgba(255,255,255,.55) · --ink #3b3542 · --accent #7a63bd · --line rgba(59,53,66,.10)
Radius: 20px / 28px · Typography: Cormorant Garamond / Inter / JetBrains Mono
Required: **Metin kontrastı:** gövde ≥ 4.5:1 (bu stilde en kritik kural); soluk yazı yalnız dekoratif. · **Işık katmanı:** 2 radyal leke, opacity ≤ .6, blur yok (gradient ile). · **Cam yüzey:** beyaz %55 + blur 24px + 1px soluk kenar.
Banned: Sert gölge, koyu zemin, doygun renk. · 12px altı metin; `--ink-faint` gövde metninde. · 3+ ışık katmanı (banding + yorgunluk).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="ethereal"] {
  --bg: #f7f4f8; --bg-2: #efe9f4;
  --surface: rgba(255,255,255,.55); --surface-2: rgba(255,255,255,.35);
  --ink: #3b3542; --ink-soft: #635c6e; --ink-faint: #928b9f;
  --accent: #7a63bd; --accent-ink: #ffffff;
  --line: rgba(59,53,66,.10);
  --danger: #d72b1e;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65400;
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
  --shadow: 0 20px 50px rgba(143,123,214,.16); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: 0;
}
```
