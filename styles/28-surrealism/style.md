# 28 · Surrealism

> **In one sentence:** Beklenmedik ölçek ve yer değiştirme: küçük şeyler dev, dev şeyler arka planda; düzen gerçekçi, içerik rüya.

| | |
|---|---|
| **Feeling** | rüyamsı, şaşırtıcı, sanatsal, "bir şey ters" |
| **Best for** | sanat/kültür, ajans portfolyosu, kampanya, etkinlik, editoryal |
| **Avoid** | ödeme/giriş, sağlık, kurumsal B2B, yoğun veri |
| **Difficulty** | yüksek (denge) · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="surrealism"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Surrealism, tanıdık öğelerin **ölçek ve bağlamını** bozarak rüya etkisi kurar: dev tipografi + küçük metin, nesnelerin yer değiştirmesi, beklenmeyen kırpma, tek sıcak accent (turuncu). Düzen **grid'e sadıktır** — tuhaflık içerikte, kaosta değil.

Kazandığı şey: hatırlanma ve sanatsal otorite. Feda ettiği şey: öngörülebilirlik; güven gerektiren akışlarda risklidir.

### What is not
- **Anti-design değildir.** Grid korunur; bozulan şey **ölçek ve bağlam**.
- **Maximalism değildir.** Bolluk değil, **tek sürpriz**.
- **Illüstrasyon stili değildir.** Görsel olmasa da tipografi/ölçekle kurulur.
- **"Garip görsel" değildir.** Sürpriz + net hiyerarşi birlikte gerekir.

### Where it comes from
Dalí/Magritte kolaj mantığı, 20. yüzyıl avangardı; dijitalde ajans portfolyoları ve kültür kampanyalarında.

### Recognition test in 3 seconds
1. Ölçek çelişkisi var mı (80px başlık + 11px metin)?
2. Bir öğe beklenmedik yerde/ölçekte mi (hero görselinin yarısı kadraj dışı)?
3. Grid hizası korunmuş mu?
4. Tek sıcak accent (turuncu) mı?
5. Yumuşak gölge ve sakin zemin mi?

## Visual signature
- **Dev tipografi:** 80–104px display, 0.92 satır aralığı.
- **Kadraj bozma:** görselin bir parçası bölüm sınırını aşar (overflow visible).
- **Küçük meta:** 11px mono etiket dev başlığın yanında.
- **Tek turuncu vurgu:** buton veya tek kelime.
- **Yumuşak geniş gölge:** `0 24px 60px rgba(30,28,26,.16)`.
- **Grain .05** (kolaj/baskı hissi).
- **Typography:** Inter (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#df5329`; neutral scale `#e7e2da` → `#1e1c1a`.
- **Radius:** `4px` / `10px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Tek sürpriz kuralı:** ekran başına 1 ölçek/bağlam sürprizi; ikincisi gürültü.
2. **Grid korunur:** hizalama bozulmaz, yalnız kadraj/ölçek bozulur.
3. **Ölçek zıplaması ≥ 5×:** 80px display + 15px gövde.
4. **Tek accent** (turuncu #e4572e), accent üstü **koyu** metin (4.61:1).
5. **Yumuşak gölge**, radius 4/10px; sertlik yok.
6. **Okunurluk:** gövde ≥ 15px, kontrast ≥ 4.5:1; sürpriz metni bozmaz.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e7e2da` | page background | as a card background |
| `--bg-2` | `#d9d2c7` | partition divider floor, table top | button background |
| `--surface` | `#fbf9f5` | kart, input, modal | full-page background |
| `--surface-2` | `#efeae1` | passive chip, hover background | primary button |
| `--ink` | `#1e1c1a` | title, body, icon | large background |
| `--ink-soft` | `#56514a` | secondary text, description | — |
| `--ink-faint` | `#868178` | decorative label, separator text | interactive text |
| `--accent` | `#df5329` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1b1918` | text above accent | non-accent background |
| `--line` | `rgba(30,28,26,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.18:1** · `ink-soft/bg` **6.1:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **4.51:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 72px (mobile 40px) | 400 | 1.04 | -0.02em |
| H2 | same | 40px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- 2+ sürpriz, grid bozulması.
- Metni okunmaz kılan kırpma/örtme.
- Doygun palet (turuncu dışında).
- Sert gölge, kalın kontur.
- Ödeme/giriş ekranında sürpriz.
- Rastgele döndürme (bu stil ölçekle konuşur).
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.69:1 (≥ 3 on background/surface).
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
| Landing/hero | çok yüksek | 88px başlık, kadraj taşan görsel, tek turuncu buton | `shots/01-page.png` |
| Dashboard | çok düşük | Sürpriz yok; sade tablo + Inter başlık | `shots/01-page.png` |
| Form | düşük | Tek sütun, sürpriz yok | `shots/01-page.png` |
| Liste/tablo | düşük | Düz satırlar | `shots/01-page.png` |
| Boş durum | yüksek | Dev tek kelime + tek satır | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 sürpriz | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart ölçek 1.04 | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Sürpriz sıfır | `shots/01-page.png` |
| Modal | orta | Geniş gölge, 10px radius | `shots/01-page.png` |
| Toast | düşük | Sade koyu bar | `shots/01-page.png` |
| Hata | düşük | Kısa metin + accent alt çizgi | `shots/01-page.png` |
| Profil/ayar | düşük | Sade liste | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.18:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.1:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.51:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.69:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 87.1 | ≥ 60 target | thin text |

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
| Anlaşılmıyor | Sürpriz + zayıf hiyerarşi | Tek sürpriz + net ölçek |
| "Garip tasarım" | Grid bozulmuş | Grid korunur, yalnız kadraj |
| Okunmuyor | Görsel metnin üstünde | `pointer-events: none` + z-index |
| Dağınık | 2+ sürpriz | Ekran başına 1 |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cybercore` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.tate.org.uk/art/art-terms/s/surrealism | Tate · Surrealism — Akım referansı |
| https://www.awwwards.com/websites/surrealism/ | Awwwards · Surrealism — Dijital örnekler |
| https://fonts.google.com/specimen/Inter | Inter — Nötr gövde |

## AI brief

```text
Stil: Surrealism (styles/28-surrealism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="surrealism"]; hard-coded renk YASAK.
Kural: grid korunur; ekran başına 1 ölçek/bağlam sürprizi (kadraj taşması veya 5×+ ölçek zıplaması).
Tipografi: Inter display 700 (88/0.92 -0.03em) + gövde 15/1.6 (5×+ zıplama); etiket mono 11 uppercase 0.18em.
Renk: kâğıt #e7e2da + tek turuncu #e4572e (üstünde KOYU metin, 4.61:1); 2. doygun renk yok.
Yüzey: radius 4/10px, geniş yumuşak gölge (0 24px 60px .16), grain .05.
Hareket: 120–600ms ease-out; reduced-motion'da 0.01ms.
Yasak: 2+ sürpriz, grid bozulması, metni örten görsel, sert gölge, ödeme/girişte sürpriz.
Çıktı: kod + tek paragraf not (sürprizi nerede kurdun, okunurluğu nasıl korudun).

Style: Surrealism (surrealism) · family: Art (28–34)
Token: --bg #e7e2da · --surface #fbf9f5 · --ink #1e1c1a · --accent #df5329 · --line rgba(30,28,26,.12)
Radius: 4px / 10px · Typography: Inter / Inter / IBM Plex Mono
Required: **Tek sürpriz kuralı:** ekran başına 1 ölçek/bağlam sürprizi; ikincisi gürültü. · **Grid korunur:** hizalama bozulmaz, yalnız kadraj/ölçek bozulur. · **Ölçek zıplaması ≥ 5×:** 80px display + 15px gövde.
Banned: 2+ sürpriz, grid bozulması. · Metni okunmaz kılan kırpma/örtme. · Doygun palet (turuncu dışında).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="surrealism"] {
  --bg: #e7e2da; --bg-2: #d9d2c7;
  --surface: #fbf9f5; --surface-2: #efeae1;
  --ink: #1e1c1a; --ink-soft: #56514a; --ink-faint: #868178;
  --accent: #df5329; --accent-ink: #1b1918;
  --line: rgba(30,28,26,.12);
  --danger: #c9160c;
  --danger-ink: #ffffff;
  --ok: #00752d;
  --ok-ink: #ffffff;
  --warn: #a94800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 24px 60px rgba(30,28,26,.16); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
