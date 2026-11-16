# 06 · Japandi

> **In one sentence:** Japon sadeliği + İskandinav sıcaklığı: düşük kontrast, yumuşak serif başlık, kil-linen tonları, ölçülü boşluk.

| | |
|---|---|
| **Feeling** | dingin, doğal, ölçülü, "nefes alan" |
| **Best for** | wellness, yaşam/not uygulaması, sürdürülebilir marka, iç mekân/yemek |
| **Avoid** | yüksek kontrast gerektiren veri ekranı, oyun, agresif kampanya |
| **Difficulty** | orta (kontrast dengesi) · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="japandi"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
İki geleneğin kesişimi: Japon **ma** (boşluk) ve İskandinav **hygge** (sıcaklık). Sonuç: krem/kıl zeminler, yumuşak serif başlık (Lora), sans gövde (Inter), 10–14px radius, çok hafif gölge ve **yeşilimsi ada çayı** accent. Kontrast bilinçli olarak yumuşak ama gövde metni okunur kalır.

Kazandığı şey: huzur ve sürdürülebilirlik algısı. Feda ettiği şey: enerji — bu stil "hızlı ve heyecanlı" bir ürünü taşımaz.

### What is not
- **Wabi-Sabi değildir.** Wabi-sabi kusuru ve kırık hizayı sergiler; japandi **ölçülü ve düzgün** kalır.
- **Minimalism değildir.** Minimalizm nötr gri skalada; japandi sıcak toprak tonlarında ve dokulu.
- **Beige estetiği değildir.** Tek düze bej = cansız; burada adaçayı yeşili + serif + doku dengeyi kurar.
- **"Düşük kontrast" değildir.** Kontrast yumuşak ama gövde metni ≥ 4.5:1 korunur.

### Where it comes from
Japandi terimi 2010'larda iç mekân tasarımından geldi; dijitalde "slow living" uygulamaları ve sürdürülebilir D2C markalarıyla yayıldı. Kalabalık, hızlı arayüzlerin yorgunluğuna karşı sakinlik satar.

### Recognition test in 3 seconds
1. Zemin krem/kıl tonu mu (#f4efe7), beyaz değil mi?
2. Başlık **serif**, gövde sans mı?
3. Radius 10–14px, gölge neredeyse yok mu?
4. Accent **soluk adaçayı yeşili** mi (doygun değil)?
5. Boşluk bol ama ölçülü mü (aşırı kahraman tipografi yok)?

## Visual signature
- **Zemin:** `#f4efe7` krem; kart `#fbf8f3` — fark 1 tık, gölge değil.
- **Serif başlık:** Lora 400, `-0.01em`, satır aralığı 1.12.
- **Adaçayı accent:** yalnızca durum, ikon noktası ve tek buton.
- **Çizgi:** 1px `rgba(44,41,37,.10)` — hairline bile yumuşak.
- **Boşluk:** bölüm 64px, kart padding 24px; hero üst 80px.
- **Sessiz ikon:** 1.5px çizgi, 20px, `--ink-soft`.
- **Typography:** Lora (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#7f8f79`; neutral scale `#f4efe7` → `#2c2925`.
- **Radius:** `10px` / `14px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Sıcak nötr skala:** krem zemin + toprak tonlu gri metin; soğuk gri yasak.
2. **Serif başlık + sans gövde:** Lora display, Inter gövde.
3. **Yumuşak kontrast:** gövde ≥ 4.5:1; accent üstü metin `--ink` (koyu), beyaz değil.
4. **Radius 10/14px, gölge tek katman** ve çok hafif (`0 1px 2px .04`).
5. **Doku:** grain .03 — kâğıt/linen hissi, görünür gürültü değil.
6. **Accent soluk:** `#8a9b84`; vurgu alanı ≤ %10.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4efe7` | page background | as a card background |
| `--bg-2` | `#ebe4d9` | partition divider floor, table top | button background |
| `--surface` | `#fbf8f3` | kart, input, modal | full-page background |
| `--surface-2` | `#f2ece2` | passive chip, hover background | primary button |
| `--ink` | `#2c2925` | title, body, icon | large background |
| `--ink-soft` | `#635c53` | secondary text, description | — |
| `--ink-faint` | `#908980` | decorative label, separator text | interactive text |
| `--accent` | `#7f8f79` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#262420` | text above accent | non-accent background |
| `--line` | `rgba(44,41,37,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.64:1** · `ink-soft/bg` **5.76:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **4.51:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 46px (mobile 30px) | 600 | 1.12 | -0.02em |
| H2 | same | 28px | 600 | 1.22 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.16em |
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
- Radius: `10px` (buton, input, chip), `14px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Saf beyaz zemin, saf siyah metin (#000), soğuk mavi-gri.
- Doygun accent, gradient, cam, sert gölge.
- 700+ ağırlıkta büyük başlık (sertlik hissi).
- Accent üstü **beyaz** metin (kontrast 2.96:1 — erişilemez).
- 5+ farklı radius, çok katmanlı gölge.
- Yoğun tablo/grafik ekranında tam stil (veri okunmaz).
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.25:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 46px serif başlık, 2 satır gövde, tek accent buton, sağda sıcak tonlu görsel | `shots/01-page.png` |
| Dashboard | düşük | Kart yerine hairline bölümler; sayı 28px, etiket 10px mono; grafik tek renk | `shots/01-page.png` |
| Form | düşük | 480px tek sütun, etiket üstte 13px, input 44px | `shots/01-page.png` |
| Liste / tablo | düşük | 52px satır, hairline; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + tek buton, küçük çizgi illüstrasyon | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına 1 fikir, ilerleme nokta, görsel + kısa metin | `shots/01-page.png` |
| Pricing | orta | 2–3 kolon, orta kolon 1px accent kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | 420px kart, 2 alan, tek buton | `shots/01-page.png` |
| Modal | orta | 14px radius, hairline, 28px padding | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin + krem metin, 14px radius | `shots/01-page.png` |
| Hata | düşük | `--danger` 1px kenar + 13px sakin dil | `shots/01-page.png` |
| Profil / ayar | orta | Sol nav + 8/4 içerik; satır 56px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.64:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 5.76:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.51:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.25:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.1 | ≥ 60 target | thin text |

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
| Cansız/bej çorba | Tek tonda her şey | Serif başlık + adaçayı accent + grain ekle |
| Okunmuyor | Düşük kontrast her yere uygulanmış | Gövde `--ink` (12.6:1), sadece etiketler soluk |
| Erişilemez buton | Accent üstü beyaz metin | `--accent-ink: #2c2925` |
| Jest "minimal" hissi | 700 ağırlık büyük başlık | 400 ağırlık Lora |
| Veri ekranında tıkanma | Tam stil yoğun tabloda | Dashboard'da stili düşür (yalnız tipografi + hairline) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `acid-graphics` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.muji.com | MUJI — Sıcak nötr palet, ölçülü boşluk |
| https://fonts.google.com/specimen/Lora | Lora — Serif başlık karakteri |
| https://www.kinfolk.com | Kinfolk — Sakinlik ve düşük kontrast dengesi |

## AI brief

```text
Stil: Japandi (styles/06-japandi/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="japandi"]; hard-coded renk/ölçü YASAK.
Zemin: sıcak krem #f4efe7; kart #fbf8f3 + 1px rgba(44,41,37,.10) + 0 1px 2px .04.
Tipografi: Lora display 400 (46/1.12 -0.01em) + Inter gövde 16/1.65; etiket mono 10 uppercase 0.16em.
Accent: adaçayı #8a9b84; accent üstü metin KOYU --ink (#2c2925), beyaz YASAK (2.96:1).
Radius 10/14px; grain .03; sert gölge/gradient/cam yasak.
Boşluk: bölüm 64px (mobil 44px), kart padding 24px, gövde 62ch.
Hareket: 140–400ms ease-out, sadece opacity + 4px translate.
Yasak: saf beyaz zemin, saf siyah metin, soğuk gri, doygun accent, 700 büyük başlık.
Çıktı: kod + tek paragraf not (kontrastı nasıl koruduğunu yaz).

Style: Japandi (japandi) · family: Minimal (1–7)
Token: --bg #f4efe7 · --surface #fbf8f3 · --ink #2c2925 · --accent #7f8f79 · --line rgba(44,41,37,.10)
Radius: 10px / 14px · Typography: Lora / Inter / JetBrains Mono
Required: **Sıcak nötr skala:** krem zemin + toprak tonlu gri metin; soğuk gri yasak. · **Serif başlık + sans gövde:** Lora display, Inter gövde. · **Yumuşak kontrast:** gövde ≥ 4.5:1; accent üstü metin `--ink` (koyu), beyaz değil.
Banned: Saf beyaz zemin, saf siyah metin (#000), soğuk mavi-gri. · Doygun accent, gradient, cam, sert gölge. · 700+ ağırlıkta büyük başlık (sertlik hissi).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="japandi"] {
  --bg: #f4efe7; --bg-2: #ebe4d9;
  --surface: #fbf8f3; --surface-2: #f2ece2;
  --ink: #2c2925; --ink-soft: #635c53; --ink-faint: #908980;
  --accent: #7f8f79; --accent-ink: #262420;
  --line: rgba(44,41,37,.10);
  --danger: #d3261a;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b25100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 14px;
  --shadow: 0 1px 2px rgba(44,41,37,.04); --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
