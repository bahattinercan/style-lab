# 33 · Dark Academia

> **In one sentence:** Dark Academia

| | |
|---|---|
| **Feeling** | akademik, gizemli, ağırbaşlı, "arşiv" |
| **Best for** | okuma/kurs, yayın/arşiv, kulüp, edebiyat, müze |
| **Avoid** | tüketici alışverişi, çocuk, hızlı e-ticaret, parlak ortam |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Art (28–34) · **Token** | `kit/tokens.css` → `[data-style="dark-academia"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Dark Academia, üniversite kütüphanesi atmosferi: **koyu kahve zemin**, **altın hairline**, **Cormorant** display + **EB Garamond** gövde, **vignette** (mum ışığı), drop cap ve derin gölge. Süs az; ağırlık tipografi ve ışıkta.

Kazandığı şey: ciddiyet ve atmosfer. Feda ettiği şey: parlaklık ve göz konforu (koyu + serif + altın yorucu olabilir).

### What is not
- **Victorian değildir.** Victorian açık kâğıt ve süs; bu stil koyu ve sade.
- **Art Deco değildir.** Deco geometri/simetri; bu stil organik serif ve arşiv.
- **"Koyu tema + serif" değildir.** Vignette + altın hairline + drop cap olmadan sadece koyu tema.

### Where it comes from
"Dark academia" alt kültürü, üniversite arşivleri, gotik edebiyat estetiği.

### Recognition test in 3 seconds
1. Zemin koyu kahve mi (#1b1714), siyah değil mi?
2. Display gotik/klasik serif (Cormorant), gövde serif (EB Garamond) mi?
3. Altın hairline var mı (koyu parlak değil)?
4. Vignette (kenarlarda koyulaşma) var mı?
5. Metin krem (#e8dfce) mi?

## Visual signature
- **Vignette:** `radial-gradient(72% 62% at 26% 14%, #2a231c, #1b1714 62%)`.
- **Altın hairline:** 1px, %32.
- **Drop cap:** 40px Cormorant, altın renkte, 3 satır.
- **Derin gölge:** `0 12px 32px rgba(0,0,0,.5)`.
- **Krem metin:** #e8dfce.
- **Grain .07** (eski kâğıt).
- **Typography:** Cormorant Garamond (display) + EB Garamond (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#b0863f`; neutral scale `#1b1714` → `#e8dfce`.
- **Radius:** `2px` / `4px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Koyu kahve palet:** #1b1714 zemin; gri/siyah değil.
2. **Serif ikilisi:** Cormorant (display) + EB Garamond (gövde); sans yok.
3. **Altın hairline:** `rgba(176,134,63,.32)`, 1px; geniş altın zemin yok.
4. **Vignette:** radyal koyulaşma, opacity ≤ .6, tek katman.
5. **Metin ≥ 4.5:1:** krem metin (13.46:1), `--ink-soft` (7.96:1).
6. **Radius 2/4px, derin gölge** (0 12px 32px .5); parlaklık yok.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1b1714` | page background | as a card background |
| `--bg-2` | `#241f1a` | partition divider floor, table top | button background |
| `--surface` | `#262019` | kart, input, modal | full-page background |
| `--surface-2` | `#2f2820` | passive chip, hover background | primary button |
| `--ink` | `#e8dfce` | title, body, icon | large background |
| `--ink-soft` | `#b8ac97` | secondary text, description | — |
| `--ink-faint` | `#8a7f6d` | decorative label, separator text | interactive text |
| `--accent` | `#b0863f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1b1714` | text above accent | non-accent background |
| `--line` | `rgba(176,134,63,.32)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.46:1** · `ink-soft/bg` **7.96:1** · `ink-faint/bg` **4.53:1 (decorative)** · `accent-ink/accent` **5.37:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 46px (mobile 28px) | 400 | 1.04 | -0.02em |
| H2 | same | 28px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (EB Garamond) | 17px | 400 | 1.68 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Saf siyah zemin, neon, parlak beyaz metin.
- Sans-serif gövde.
- Geniş altın dolgu (sadece çizgi).
- 2+ vignette katmanı, parlama.
- 15px altı serif gövde.
- Yoğun tabloda drop cap / süs.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.37:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing/hero | yüksek | 46px Cormorant, drop cap, vignette, tek altın buton | `shots/01-page.png` |
| Dashboard | düşük | Süs kapanır; serif başlık + hairline | `shots/01-page.png` |
| Form | düşük | 480px, serif input, tek buton | `shots/01-page.png` |
| Liste/tablo | düşük | 52px satır, altın hairline | `shots/01-page.png` |
| Boş durum | orta | Altın hairline kutu + tek cümle | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 gravür | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart altın kenar | `shots/01-page.png` |
| Giriş/ödeme | düşük | Sade form, altın hairline | `shots/01-page.png` |
| Modal | orta | Derin gölge, altın kenar | `shots/01-page.png` |
| Toast | orta | Koyu kutu, altın kenar | `shots/01-page.png` |
| Hata | düşük | `--danger` hairline + 16px serif | `shots/01-page.png` |
| Profil/ayar | orta | 8/4 kolon, hairline | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.46:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.96:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.53:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.37:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.37:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 86.7 | ≥ 60 target | thin text |

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
| Okunmuyor | Serif 15px + koyu zemin | 17px/1.7, krem metin |
| "Koyu tema" gibi | Vignette/altın yok | Radyal ışık + hairline |
| Ağır | Her bölümde gravür | Süs 1 yerde |
| Güven kaybı | Ödeme ekranında ağır atmosfer | Sadeleştir |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `victorian` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `art-deco` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond — Display serif |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Gövde serif |
| https://www.nngroup.com/articles/dark-mode/ | NN/g · Dark mode — Koyu tema kontrast |

## AI brief

```text
Stil: Dark Academia (styles/33-dark-academia/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="dark-academia"]; hard-coded renk YASAK.
Zemin: koyu kahve #1b1714 + 1 radyal vignette (opacity ≤ .6) + grain .07.
Tipografi: Cormorant display 400 (46/1.15) + EB Garamond GÖVDE 17/1.7 (serif); etiket mono 11 0.16em.
Renk: altın #b0863f yalnız hairline/ikon/buton (üstünde koyu metin 5.37:1); metin krem #e8dfce.
Derinlik: 0 12px 32px rgba(0,0,0,.5); radius 2/4px; parlaklık yok.
Hareket: 140–600ms ease-in-out (ağır); parlama yasak; reduced-motion'da 0.01ms.
Yasak: saf siyah zemin, neon, sans gövde, geniş altın dolgu, 15px altı serif, çoklu vignette.
Çıktı: kod + tek paragraf not (vignette ve okunurluk dengesi).

Style: Dark Academia (dark-academia) · family: Art (28–34)
Token: --bg #1b1714 · --surface #262019 · --ink #e8dfce · --accent #b0863f · --line rgba(176,134,63,.32)
Radius: 2px / 4px · Typography: Cormorant Garamond / EB Garamond / IBM Plex Mono
Required: **Koyu kahve palet:** #1b1714 zemin; gri/siyah değil. · **Serif ikilisi:** Cormorant (display) + EB Garamond (gövde); sans yok. · **Altın hairline:** `rgba(176,134,63,.32)`, 1px; geniş altın zemin yok.
Banned: Saf siyah zemin, neon, parlak beyaz metin. · Sans-serif gövde. · Geniş altın dolgu (sadece çizgi).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="dark-academia"] {
  --bg: #1b1714; --bg-2: #241f1a;
  --surface: #262019; --surface-2: #2f2820;
  --ink: #e8dfce; --ink-soft: #b8ac97; --ink-faint: #8a7f6d;
  --accent: #b0863f; --accent-ink: #1b1714;
  --line: rgba(176,134,63,.32);
  --danger: #eb4131;
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
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 12px 32px rgba(0,0,0,.5); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "EB Garamond", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
