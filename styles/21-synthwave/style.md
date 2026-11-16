# 21 · Synthwave

> **In one sentence:** Derin mavi gece, neon pembe-cyan glow ve perspektif ızgara; 80'ler arcade'inin hızı.

| | |
|---|---|
| **Feeling** | neon, hızlı, sinematik, "arcade gecesi" |
| **Best for** | oyun, müzik/etkinlik, e-spor, retro lansman, kulüp |
| **Avoid** | kurumsal SaaS, sağlık, uzun okuma, parlak ortam kullanımı |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="synthwave"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Synthwave, 80'ler outrun estetiği: **koyu mavi-mor zemin**, **neon pembe** ana vurgu, **cyan** ikincil çizgi, **glow**, **perspektif ızgara** ve **gün batımı diski**. Harf aralığı geniş, tipografi büyük harf ve kondanse.

Kazandığı şey: sinematik enerji. Feda ettiği şey: sakin okuma ve göz konforu (neon yanması).

### What is not
- **Vaporwave değildir.** Vaporwave soluk/yavaş; synthwave doygun/hızlı.
- **Cyberpunk değildir.** Cyberpunk kir ve distopya; synthwave parlak ve nostaljik.
- **Acid graphics değildir.** Acid tek asit yeşili; synthwave pembe+cyan çift neon.
- **"Neon yazı" değildir.** Perspektif ızgara + glow hiyerarşisi olmadan sadece "parlayan tema" olur.

### Where it comes from
80'ler arcade/sinema afişleri, outrun müzik sahnesi; 2010'larda "retrowave" ile dijital tasarıma girdi.

### Recognition test in 3 seconds
1. Zemin koyu mavi/mor mu (#120458)?
2. Neon **pembe** ana, **cyan** ikincil mi?
3. Glow var mı (text-shadow / box-shadow)?
4. Perspektif ızgara / gün batımı diski var mı?
5. Display kondanse ve büyük harf mi?

## Visual signature
- **Neon pembe:** `#ff2a6d` buton/başlık; üstünde koyu metin (4.90:1).
- **Cyan çizgi:** `--line` (cyan %55) — 1px bölüm ayırıcı.
- **Glow:** `0 0 12px accent %65, 0 0 32px cyan %35`.
- **Perspektif ızgara:** alt %35 bant; 2px çizgi, mask ile soluklaşır.
- **Gün batımı diski:** radial gradient, hero'da bir kez.
- **Grain .04:** neon banding'i kırar.
- **Typography:** Outrun (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#ff2a6d`; neutral scale `#120458` → `#fdfdff`.
- **Radius:** `4px` / `10px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **İki neon:** pembe (ana) + cyan (ikincil); başka doygun renk yok.
2. **Glow hiyerarşisi:** ana öğe 1 glow katmanı, ikincil 0; her öğe parlamaz.
3. **Perspektif ızgara:** yalnızca alt bantta, opacity ≤ .35.
4. **Kontrast tabanı:** glow metnin okunurluğunu bozmaz; gövde ≥ 4.5:1.
5. **Uppercase display**, tracking `0.06em`; gövde normal case.
6. **Neon alan sınırı:** doygun alan ≤ %25; gerisi koyu zemin.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#120458` | page background | as a card background |
| `--bg-2` | `#2b1055` | partition divider floor, table top | button background |
| `--surface` | `#1b0a63` | kart, input, modal | full-page background |
| `--surface-2` | `#2a1178` | passive chip, hover background | primary button |
| `--ink` | `#fdfdff` | title, body, icon | large background |
| `--ink-soft` | `rgba(253,253,255,.78)` | secondary text, description | — |
| `--ink-faint` | `rgba(253,253,255,.52)` | decorative label, separator text | interactive text |
| `--accent` | `#ff2a6d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#120458` | text above accent | non-accent background |
| `--line` | `rgba(5,217,232,.55)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.46:1** · `ink-soft/bg` **10.65:1** · `ink-faint/bg` **5.17:1 (decorative)** · `accent-ink/accent` **4.9:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Outrun) | 64px (mobile 34px) | 700 | 1.1 | 0.01em |
| H2 | same | 34px | 600 | 1.2 | 0.01em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
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
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Üçüncü neon renk (yeşil/sarı) — acid/cyberpunk'a kayar.
- Metinde glow (gövde metni); glow yalnız display ve buton.
- Parlak (açık) zemin; gündüz modu.
- Hızlı yanıp sönen animasyon (fotosensitivite).
- Düşük kontrastlı neon üstüne neon metin.
- Yoğun tabloda tam glow.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.9:1 (≥ 3 on background/surface).
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
| Landing/hero | çok yüksek | 64px glow başlık, gün batımı diski, perspektif ızgara, tek pembe CTA | `shots/01-page.png` |
| Dashboard | düşük | Izgara/glow kapanır; mono sayılar, cyan ayırıcı | `shots/01-page.png` |
| Form | düşük | Koyu panel, cyan kenar, tek pembe buton | `shots/01-page.png` |
| Liste/tablo | düşük | Düz koyu zemin, ince cyan çizgi | `shots/01-page.png` |
| Boş durum | orta | Neon ikon + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 neon öğe | `shots/01-page.png` |
| Pricing | orta | 3 panel, orta panel pembe kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Glow ve ızgara kapalı; sade koyu form | `shots/01-page.png` |
| Modal | orta | Glow'lu panel, koyu backdrop | `shots/01-page.png` |
| Toast | orta | Pembe pill + koyu metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar, kısa metin | `shots/01-page.png` |
| Profil/ayar | düşük | Düz liste, neon yalnız aktifte | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.46:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.65:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.17:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.9:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.9:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 104.8 | ≥ 60 target | thin text |

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
| Göz yanması | Her öğede glow + 3+. neon | Glow ≤ 3 öğe, 2 neon |
| Okunmuyor | Glow metnin içine taşmış | text-shadow blur ≤ 18px, gövdede glow yok |
| Vaporwave'e kaydı | Soluk pastel kullanılmış | Doygun pembe/cyan, koyu zemin |
| Karakter kaybı | Perspektif ızgara yok | Hero'da 1 ızgara bandı |
| Yavaş | Animasyonlu glow | Statik glow, hover'da artış |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `vaporwave` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cyberpunk` | Same level of seriousness; accent sharing is not allowed |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.awwwards.com/websites/synthwave/ | Awwwards · Synthwave — Uygulama örnekleri |
| https://fonts.google.com/specimen/Michroma | Michroma — Alternatif kondanse display |
| https://www.nngroup.com/articles/flash-animations/ | NN/g · Flash — Parlama/strobe riski |

## AI brief

```text
Stil: Synthwave (styles/21-synthwave/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="synthwave"]; hard-coded renk YASAK.
Neon: pembe #ff2a6d (ana, üstünde KOYU metin #120458, 4.90:1) + cyan #05d9e8 (ikincil çizgi); 3. neon yok.
Glow: 0 0 12px pembe %65 + 0 0 32px cyan %35; ekran başına ≤ 3 parlayan öğe; gövde metninde glow YASAK.
Izgara: perspektif, yalnız alt %35 bantta, opacity ≤ .35; içerik bölümünde kapalı.
Tipografi: Outrun/Michroma uppercase 0.06em (64/1.05) + Inter gövde 16/1.6; etiket Space Mono 10 0.2em.
Hareket: 120–320ms ease-out; ızgara kayması 12s linear ≤ 8px; strobe/nabız sürekli YASAK.
Yoğun ekran (form/tablo/ödeme): glow ve ızgara kapanır.
Çıktı: kod + tek paragraf not (glow hiyerarşisi ve parlama önlemi).

Style: Synthwave (synthwave) · family: Retro (19–27)
Token: --bg #120458 · --surface #1b0a63 · --ink #fdfdff · --accent #ff2a6d · --line rgba(5,217,232,.55)
Radius: 4px / 10px · Typography: Outrun / Inter / Space Mono
Required: **İki neon:** pembe (ana) + cyan (ikincil); başka doygun renk yok. · **Glow hiyerarşisi:** ana öğe 1 glow katmanı, ikincil 0; her öğe parlamaz. · **Perspektif ızgara:** yalnızca alt bantta, opacity ≤ .35.
Banned: Üçüncü neon renk (yeşil/sarı) — acid/cyberpunk'a kayar. · Metinde glow (gövde metni); glow yalnız display ve buton. · Parlak (açık) zemin; gündüz modu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="synthwave"] {
  --bg: #120458; --bg-2: #2b1055;
  --surface: #1b0a63; --surface-2: #2a1178;
  --ink: #fdfdff; --ink-soft: rgba(253,253,255,.78); --ink-faint: rgba(253,253,255,.52);
  --accent: #ff2a6d; --accent-ink: #120458;
  --line: rgba(5,217,232,.55);
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
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 0 12px rgba(255,42,109,.65), 0 0 32px rgba(5,217,232,.35); --shadow-hard: none;
  --font-display: "Outrun", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: 0;
}
```
