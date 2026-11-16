# 30 · Bohemian

> **In one sentence:** Bohemian

| | |
|---|---|
| **Feeling** | özgür, dokulu, dünyevi, sıcak |
| **Best for** | seyahat, yemek/tarif, topluluk, el yapımı ürün, festival |
| **Avoid** | fintech, kurumsal B2B, sağlık verisi, yoğun panel |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="bohemian"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Bohemian, el yapımı ve gezgin bir dil: **kil/kum zemin**, **toprak accent** (pas turuncusu), **asimetrik radius** (22px 22px 22px 4px), **doku** (grain .06 + diyagonal desen) ve **serif display** (Fraunces) + el yazısı vurgu.

Kazandığı şey: sıcaklık ve aidiyet. Feda ettiği şey: kurumsal netlik; doku ve sıcaklık yoğunlaşırsa okunurluk düşer.

### What is not
- **Wabi-Sabi değildir.** Wabi-sabi kusuru sergiler; bohemian **dolu ve neşeli**.
- **Scrapbook değildir.** Scrapbook kolaj/bant; bohemian desen ve doku.
- **Japandi değildir.** Japandi ölçülü/az; bohemian katmanlı ve renkli.
- **"Toprak tonu" değildir.** Asimetrik radius + doku + serif olmadan sadece bej olur.

### Where it comes from
60'lar-70'ler karşı kültürü, el sanatları/kilim motifleri, "slow travel" markaları.

### Recognition test in 3 seconds
1. Zemin kil/kum tonu mu (#f3e9d8)?
2. Radius **asimetrik** mi (22px 22px 22px 4px)?
3. Doku (grain + diyagonal desen) var mı?
4. Accent **pas turuncusu** mu (#b45634)?
5. Serif display + el yazısı vurgu var mı?

## Visual signature
- **Asimetrik radius** + 1px kahve kenar.
- **Diyagonal desen** (%7) + grain .06.
- **Fraunces 400** display, 44px.
- **El yazısı** (Caveat) tek not, 20px.
- **Pas turuncusu** buton.
- **Typography:** Fraunces (display) + Inter (body) + Courier New (mono label).
- **Colour discipline:** a single accent `#b45634`; neutral scale `#f3e9d8` → `#2e2620`.
- **Radius:** `14px` / `22px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Asimetrik radius:** kart/görsel `22px 22px 22px 4px`; buton 14px.
2. **Doku iki katman:** grain .06 + diyagonal desen (%7 opaklık).
3. **Toprak paleti:** kil, kum, pas, koyu kahve; soğuk renk yok.
4. **Accent üstü krem metin** (4.61:1); daha açık pas tonu kullanma.
5. **El yazısı 1 yerde:** tek kısa notta; gövde Inter.
6. **Okunurluk:** desen metnin arkasında; gövde 16px/1.65, 62ch.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3e9d8` | page background | as a card background |
| `--bg-2` | `#e8d9c0` | partition divider floor, table top | button background |
| `--surface` | `#fbf4e6` | kart, input, modal | full-page background |
| `--surface-2` | `#f0e0c4` | passive chip, hover background | primary button |
| `--ink` | `#2e2620` | title, body, icon | large background |
| `--ink-soft` | `#5f5347` | secondary text, description | — |
| `--ink-faint` | `#90847a` | decorative label, separator text | interactive text |
| `--accent` | `#b45634` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff8ee` | text above accent | non-accent background |
| `--line` | `rgba(46,38,32,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.34:1** · `ink-soft/bg` **6.2:1** · `ink-faint/bg` **3.03:1 (decorative)** · `accent-ink/accent` **4.61:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 44px (mobile 28px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier New) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Simetrik/eşit radius, keskin köşe.
- Mavi/mor soğuk accent.
- 3+ desen; desen üstünde metin.
- Doygun neon, gradient, cam.
- 12px altı metin.
- Yoğun tabloda doku.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.44:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 44px Fraunces, desen bandı, asimetrik görsel, tek pas buton | `shots/01-page.png` |
| Dashboard | çok düşük | Desen kapanır, düz kart + serif başlık | `shots/01-page.png` |
| Form | düşük | 480px, asimetrik radius input | `shots/01-page.png` |
| Liste/tablo | düşük | Düz yüzey, ince ayırıcı | `shots/01-page.png` |
| Boş durum | orta | El yazısı not + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 motif + görsel | `shots/01-page.png` |
| Pricing | orta | 3 kart farklı yükseklikte | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Desen/gölge kapanır | `shots/01-page.png` |
| Modal | orta | Asimetrik radius | `shots/01-page.png` |
| Toast | orta | Koyu zemin + krem | `shots/01-page.png` |
| Hata | düşük | `--danger` alt çizgi + 15px | `shots/01-page.png` |
| Profil/ayar | orta | Kart listesi, desen minimal | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.34:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.2:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.03:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.61:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.44:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 89.3 | ≥ 60 target | thin text |

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
| Dağınık | 3+ desen | Desen 1 + grain |
| Okunmuyor | Desen metin altında | Metni düz yüzeye al |
| "Bej tema" gibi | Asimetrik radius/doku yok | Radius formülü + grain |
| Ağır | Doku her bileşende | Doku zeminde, kartta yok |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `wabi-sabi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cybercore` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.airbnb.com | Airbnb — Seyahat ürününde sıcak palet |
| https://fonts.google.com/specimen/Fraunces | Fraunces — Serif display |
| https://www.are.na | Are.na — Kilim/doku panoları |

## AI brief

```text
Stil: Bohemian (styles/30-bohemian/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bohemian"]; hard-coded renk YASAK.
Radius: kart/görsel 22px 22px 22px 4px, buton/input 14px.
Doku: grain .06 + 1 diyagonal desen (%7); desen METNİN ARKASINDA, desenli zeminde uzun metin yok.
Palet: kil #f3e9d8 + pas #b45634 (üstünde krem #fff8ee, 4.61:1); soğuk renk yok.
Tipografi: Fraunces 400 display (44/1.15) + Inter gövde 16/1.65 + Caveat el yazısı 1 notta.
Hareket: 140–400ms ease-out; sürekli döngü yok.
Yasak: simetrik radius, 3+ desen, neon/gradient/cam, 12px altı metin, yoğun tabloda doku.
Çıktı: kod + tek paragraf not (doku ve okunurluk dengesi).

Style: Bohemian (bohemian) · family: Art (28–34)
Token: --bg #f3e9d8 · --surface #fbf4e6 · --ink #2e2620 · --accent #b45634 · --line rgba(46,38,32,.18)
Radius: 14px / 22px · Typography: Fraunces / Inter / Courier New
Required: **Asimetrik radius:** kart/görsel `22px 22px 22px 4px`; buton 14px. · **Doku iki katman:** grain .06 + diyagonal desen (%7 opaklık). · **Toprak paleti:** kil, kum, pas, koyu kahve; soğuk renk yok.
Banned: Simetrik/eşit radius, keskin köşe. · Mavi/mor soğuk accent. · 3+ desen; desen üstünde metin.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="bohemian"] {
  --bg: #f3e9d8; --bg-2: #e8d9c0;
  --surface: #fbf4e6; --surface-2: #f0e0c4;
  --ink: #2e2620; --ink-soft: #5f5347; --ink-faint: #90847a;
  --accent: #b45634; --accent-ink: #fff8ee;
  --line: rgba(46,38,32,.18);
  --danger: #cf2015;
  --danger-ink: #ffffff;
  --ok: #007b32;
  --ok-ink: #ffffff;
  --warn: #ae4d00;
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
  --shadow: 0 10px 24px rgba(46,38,32,.12); --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
