# 20 · Vaporwave

> **In one sentence:** Mor-pembe bir melankoli: soluk lavanta, cam paneller, geniş harf aralığı, sonsuz ızgara ve yavaşlık.

| | |
|---|---|
| **Feeling** | nostaljik, melankolik, rüyamsı, "aesthetic" |
| **Best for** | müzik/sanat, etkinlik, kültür arşivi, moda editoryali, oyun atmosferi |
| **Avoid** | kurumsal ürün, ödeme/giriş, yoğun veri paneli, ciddi sağlık |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="vaporwave"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Vaporwave, 80'ler/90'lar tüketim estetiğinin hüzünlü yeniden kullanımı: **koyu mor zemin**, **pembe vurgu**, **cam paneller**, **geniş tracking'li teknoid tipografi** (Michroma), **ızgara + güneş** motifi ve **grain**. Hız yoktur; her şey yavaş ve atmosferik.

Kazandığı şey: atmosfer ve kimlik. Feda ettiği şey: işlevsel okunurluk — bu stil anlatı ve mod için, üretkenlik için değil.

### What is not
- **Synthwave değildir.** Synthwave neon + perspektif ızgara + hız; vaporwave soluk, yavaş ve pastel.
- **Y2K değildir.** Y2K parlak/metalik ve neşeli; vaporwave mat ve melankolik.
- **Cyberpunk değildir.** Cyberpunk kir/tehlike anlatısı; vaporwave nostalji.
- **"Mor tema" değildir.** Geniş tracking + cam + ızgara + güneş olmadan sadece koyu tema olur.

### Where it comes from
2010'ların internet-alt-kültürü (Mallsoft, "ａｅｓｔｈｅｔｉｃ"), 90'lar ticari grafiklerin ironik yeniden kullanımı. Bugün müzik/kültür ürünlerinde atmosfer aracı.

### Recognition test in 3 seconds
1. Zemin koyu mor mu (#1a1230), siyah değil mi?
2. Vurgu **soluk pembe** mi (#f2a0c0)?
3. Paneller yarı saydam cam mı?
4. Tracking geniş mi (≥ 0.1em), display teknoid mi?
5. Izgara/güneş motifi + grain var mı?

## Visual signature
- **Cam panel:** lavanta %14 + blur 12px + pembe kenar.
- **Izgara:** perspektifsiz düz ızgara, opacity .10, sadece alt yarıda (mask).
- **Güneş:** radial gradient disk, pembe-turuncu geçiş, opacity .25.
- **Tipografi:** Michroma, geniş tracking, uppercase; gövde Poppins 16px.
- **Grain .07** + yumuşak mor glow.
- **Yavaş hareket:** 400–600ms geçişler.
- **Typography:** Michroma (display) + Poppins (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#f2a0c0`; neutral scale `#1a1230` → `#f6efff`.
- **Radius:** `6px` / `14px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Palet:** koyu mor zemin + soluk pembe accent + lavanta yüzey; doygun renk yok.
2. **Cam panel:** `--surface` (lavanta %14) + blur 12px + 1px pembe kenar (%40).
3. **Geniş tracking:** display `0.14em`, etiket `0.2em`, uppercase.
4. **Motif:** ekran başına 1 (ızgara veya güneş); 2. motif yalnız hero'da hafif.
5. **Grain .07:** banding kırıcı + VHS hissi; metni boğmayacak düzeyde.
6. **Metin tam opak:** `--ink`; cam üstünde yarı saydam metin yasak.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#1a1230` | page background | as a card background |
| `--bg-2` | `#2a1b4d` | partition divider floor, table top | button background |
| `--surface` | `rgba(185,167,224,.14)` | kart, input, modal | full-page background |
| `--surface-2` | `rgba(242,160,192,.12)` | passive chip, hover background | primary button |
| `--ink` | `#f6efff` | title, body, icon | large background |
| `--ink-soft` | `rgba(246,239,255,.74)` | secondary text, description | — |
| `--ink-faint` | `rgba(246,239,255,.5)` | decorative label, separator text | interactive text |
| `--accent` | `#f2a0c0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#2a1b4d` | text above accent | non-accent background |
| `--line` | `rgba(242,160,192,.4)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.95:1** · `ink-soft/bg` **9.08:1** · `ink-faint/bg` **4.78:1 (decorative)** · `accent-ink/accent` **7.75:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 46px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.2em |
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
- Radius: `6px` (buton, input, chip), `14px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Neon doygun renk (synthwave'e kayar), kırmızı alarm tonları.
- Hızlı animasyon (bu stil yavaştır); 600ms altı büyük geçiş yok.
- Metin üstünde motif (ızgara/güneş metnin arkasında).
- 3+ motif, 3+ parlak renk.
- Sert gölge, kalın kontur, beyaz zemin.
- Yoğun tablo/grafikte tam cam (okunmaz).
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.01:1 (≥ 3 on background/surface).
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
| Landing/hero | yüksek | 46px Michroma, güneş motifi, tek cam panel, yavaş geçiş | `shots/01-page.png` |
| Dashboard | düşük | Motif kapanır, cam yalnız nav; sayılar mono | `shots/01-page.png` |
| Form | düşük | Cam panel, tek sütun 460px | `shots/01-page.png` |
| Liste/tablo | düşük | Cam panel içinde düz tablo; motif yok | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + cam kart + pembe buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 cam panel, motif değişir | `shots/01-page.png` |
| Pricing | orta | 2-3 cam kolon, orta kolon pembe kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Cam ve motif kapanır; opak mor kart | `shots/01-page.png` |
| Modal | orta | Cam + blur 16px | `shots/01-page.png` |
| Toast | orta | Pembe pill + koyu metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 13px metin | `shots/01-page.png` |
| Profil/ayar | orta | Cam liste, motif minimal | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.95:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.08:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.78:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.01:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98 | ≥ 60 target | thin text |

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
| "Mor tema" gibi | Tracking/motif yok | 0.14em + ızgara/güneş |
| Okunmuyor | Yarı saydam metin + grain | Opak metin, grain ≤ .07 |
| Synthwave'e kaydı | Neon doygun renk | Soluk pembe/lavanta |
| Yorgunluk | Hızlı animasyon + çok motif | 480ms+, motif ≤ 1 |
| Cam kayboluyor | Kenar yok | 1px pembe %40 + blur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `synthwave` | Same level of seriousness; accent sharing is not allowed |
| garnish | `surrealism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `y2k` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://aesthetics.fandom.com/wiki/Vaporwave | Aesthetics Wiki · Vaporwave — Dönem dili ve motifler |
| https://fonts.google.com/specimen/Michroma | Michroma — Teknoid display |
| https://www.awwwards.com/websites/vaporwave/ | Awwwards · Vaporwave — Uygulama örnekleri |

## AI brief

```text
Stil: Vaporwave (styles/20-vaporwave/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="vaporwave"]; hard-coded renk YASAK.
Palet: koyu mor #1a1230 + soluk pembe #f2a0c0 (üstünde KOYU metin #2a1b4d, 7.75:1) + lavanta cam.
Paneller: --surface (lavanta %14) + blur 12px + 1px pembe %40; cam katman ≤ 3.
Motif: ekran başına 1 (ızgara veya güneş), opacity .10–.25, metnin arkasında.
Tipografi: Michroma uppercase 0.14em (46/1.2) + Poppins gövde 16/1.7; etiket Space Mono 10 0.2em.
Hareket: 400–600ms ease-in-out (yavaş); ızgara kayması ≤ 4px/20s; reduced-motion'da durur.
Grain .07. Yasak: neon doygun renk, yarı saydam metin, hızlı animasyon, beyaz zemin, yoğun tabloda cam.
Çıktı: kod + tek paragraf not (motif ve okunurluk dengesi).

Style: Vaporwave (vaporwave) · family: Retro (19–27)
Token: --bg #1a1230 · --surface rgba(185,167,224,.14) · --ink #f6efff · --accent #f2a0c0 · --line rgba(242,160,192,.4)
Radius: 6px / 14px · Typography: Michroma / Poppins / Space Mono
Required: **Palet:** koyu mor zemin + soluk pembe accent + lavanta yüzey; doygun renk yok. · **Cam panel:** `--surface` (lavanta %14) + blur 12px + 1px pembe kenar (%40). · **Geniş tracking:** display `0.14em`, etiket `0.2em`, uppercase.
Banned: Neon doygun renk (synthwave'e kayar), kırmızı alarm tonları. · Hızlı animasyon (bu stil yavaştır); 600ms altı büyük geçiş yok. · Metin üstünde motif (ızgara/güneş metnin arkasında).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="vaporwave"] {
  --bg: #1a1230; --bg-2: #2a1b4d;
  --surface: rgba(185,167,224,.14); --surface-2: rgba(242,160,192,.12);
  --ink: #f6efff; --ink-soft: rgba(246,239,255,.74); --ink-faint: rgba(246,239,255,.5);
  --accent: #f2a0c0; --accent-ink: #2a1b4d;
  --line: rgba(242,160,192,.4);
  --danger: #ea4131;
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
  --radius: 6px; --radius-lg: 14px;
  --shadow: 0 10px 40px rgba(107,78,155,.45); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.14em; --blur: 0px; --grain: 0;
}
```
