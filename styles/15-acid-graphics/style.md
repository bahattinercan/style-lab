# 15 · Acid Graphics

> **In one sentence:** Siyah zemin üzerinde asit yeşili neon, genişletilmiş grotesk tipografi ve distorsiyon — tekno kültürün görsel gürültüsü.

| | |
|---|---|
| **Feeling** | keskin, agresif, tekno, "gece 3" enerjisi |
| **Best for** | müzik/etkinlik, moda kampanyası, kulüp, indie lansman, kültür dergisi |
| **Avoid** | kurumsal SaaS, sağlık, finans, uzun okuma, parlak ortam kullanımı |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="acid-graphics"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Acid graphics, 90'lar tekno flyer estetiğinin dijital hali: **siyah zemin**, **asit yeşili** (#ccff00) vurgu, **genişletilmiş grotesk** display (Archivo Expanded/Druk Wide), **glow** ve **distortion/scanline**. Renk sayısı azdır ama kontrast maksimumdur; tipografi poster gibi davranır.

Kazandığı şey: ani dikkat ve kültürel aidiyet. Feda ettiği şey: konfor ve kurumsal güven.

### What is not
- **Neo-brutalism değildir.** Brutalism siyah *kontur* kullanır; acid'de kontur yok, **glow** var.
- **Cyberpunk değildir.** Cyberpunk HUD/terminal anlatısı; acid sadece grafik enerji.
- **Synthwave değildir.** Synthwave pembe/mor sunset; acid tek renk asit yeşili.
- **"Siyah + yeşil" değildir.** Genişletilmiş tipografi + glow + grain/distortion olmadan sadece "tema" olur.

### Where it comes from
90'lar tekno/rave flyer'ları, fotokopi distorsiyonu ve anti-kurumsal grafik dil; 2019+ moda/müzik kampanyalarında geri döndü. Dijitalde etkinlik ve lansman sayfalarında kullanılıyor — okunabilirlik ikinci plandadır ama **kaybolmamalıdır**.

### Recognition test in 3 seconds
1. Zemin **neredeyse siyah** mı (#050505)?
2. Tek vurgu **asit yeşili** mi (#ccff00)?
3. Display **genişletilmiş/condensed** ve büyük harf mi?
4. Glow (0 0 24px) veya scanline/distortion var mı?
5. Grain (`.08`) görünür mü — poster baskısı hissi?

## Visual signature
- **Asit yeşili blok:** buton, çizgi, tek kelime vurgusu; alan ≤ %15.
- **Glow:** `0 0 24px rgba(204,255,0,.25)` — sadece birincil buton ve başlıkta.
- **Scanline:** `repeating-linear-gradient` 1px/4px, opacity .06.
- **Genişletilmiş display:** 72–96px, satır aralığı 0.9.
- **Grain .08:** tüm zeminde.
- **Mono etiket:** 10px, `0.2em`, uppercase.
- **Typography:** Archivo Expanded (display) + Space Grotesk (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#ccff00`; neutral scale `#050505` → `#f2fff0`.
- **Radius:** `0px` / `2px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Tek vurgu:** asit yeşili; ikinci doygun renk yok (beyaz metin sayılır).
2. **Glow ölçülü:** tek katman `0 0 24px accent %25`; her öğede glow yok.
3. **Genişletilmiş display:** Archivo Expanded/Druk Wide, uppercase, `0.01em` tracking.
4. **Grain .08:** poster/fotokopi hissi; düşürme.
5. **Kontrast tabanı:** asit üstünde siyah metin (17.35:1), siyah zeminde beyaz metin (19.74:1).
6. **Hareket/parlama sınırı:** ekran başına 1 sürekli animasyon; `prefers-reduced-motion` durdurur.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#050505` | page background | as a card background |
| `--bg-2` | `#101010` | partition divider floor, table top | button background |
| `--surface` | `#0e0e0e` | kart, input, modal | full-page background |
| `--surface-2` | `#161616` | passive chip, hover background | primary button |
| `--ink` | `#f2fff0` | title, body, icon | large background |
| `--ink-soft` | `rgba(242,255,240,.72)` | secondary text, description | — |
| `--ink-faint` | `rgba(242,255,240,.45)` | decorative label, separator text | interactive text |
| `--accent` | `#ccff00` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#050505` | text above accent | non-accent background |
| `--line` | `rgba(204,255,0,.35)` | all borders | text colour |

- Measured contrast: `ink/bg` **19.74:1** · `ink-soft/bg` **10.08:1** · `ink-faint/bg` **4.35:1 (decorative)** · `accent-ink/accent` **17.35:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Expanded) | 88px (mobile 40px) | 400 | 1.08 | -0.02em |
| H2 | same | 44px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- İkinci neon renk (pembe/mor) — synthwave'e kayar.
- Metni okunmaz kılan distorsiyon (gövde metninde glitch yok).
- Her öğede glow (ışık kirliliği).
- Uzun paragraf (3 satırdan fazla) asit zemin üstünde.
- Açık tema / beyaz zemin (stilin karakteri biter).
- Hızlı yanıp sönen animasyon (fotosensitivite riski).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 17.35:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | çok yüksek | 88px genişletilmiş başlık, asit blok, glow'lu tek buton, scanline zemin | `shots/01-page.png` |
| Dashboard | düşük | Glow ve scanline kapanır; mono sayılar + asit vurgu çizgileri | `shots/01-page.png` |
| Form | düşük | Siyah panel, asit kenarlı input, tek buton; glitch yok | `shots/01-page.png` |
| Liste / tablo | düşük | Düz siyah zemin, ince asit ayırıcı | `shots/01-page.png` |
| Boş durum | orta | Dev mono numara + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına 1 mesaj, büyük tipografi, minimal öğe | `shots/01-page.png` |
| Pricing | orta | 2–3 panel, orta panel asit kenar ± glow | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Glow/scanline kapalı; sade siyah form | `shots/01-page.png` |
| Modal | orta | Glow'lu panel, siyah backdrop | `shots/01-page.png` |
| Bildirim / toast | orta | Asit zemin + siyah metin, 3sn | `shots/01-page.png` |
| Hata | düşük | Asit yerine `--danger`; kısa metin | `shots/01-page.png` |
| Profil / ayar | düşük | Düz liste, asit yalnız aktif durumda | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 19.74:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.08:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.35:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 17.35:1 | ≥ 4.5 | button text |
| focus ring/ground | 17.35:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 105.4 | ≥ 60 target | thin text |

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
| Migren/göz yorgunluğu | Her öğede glow + scanline + grain | 1 glow, 1 scanline; grain sabit |
| "Synthwave" göründü | İkinci neon renk eklendi | Tek asit yeşili; pembe/mor yok |
| Okunmuyor | Asit zemin üstünde beyaz metin | Siyah metin; alan ≤ %15 |
| Karakter kaybı | Genişletilmiş font yerine Inter | Archivo Expanded veya scaleX(1.08) |
| Yavaş | Sürekli animasyonlu glow | Statik glow, yalnız hover'da artış |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `cyberpunk` | Same level of seriousness; accent sharing is not allowed |
| garnish | `anti-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.awwwards.com/websites/acid/ | Awwwards · Acid — Asit grafik örnekleri |
| https://fonts.google.com/specimen/Archivo | Archivo — Genişletilmiş eksen (Expanded) |
| https://www.nngroup.com/articles/flash-animations/ | NN/g · Flash — Flash/strobe riski |

## AI brief

```text
Stil: Acid Graphics (styles/15-acid-graphics/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="acid-graphics"]; hard-coded renk YASAK.
Zemin: #050505 + grain .08 + 1 scanline katmanı (rgba(204,255,0,.06)).
Vurgu: TEK asit yeşili #ccff00; asit üstünde SİYAH metin (17.35:1); ikinci neon renk yasak.
Glow: tek katman 0 0 24px rgba(204,255,0,.25) — yalnız birincil buton/başlık.
Tipografi: Archivo Expanded/Druk Wide display 700 uppercase (88/0.9) + Space Grotesk gövde 16/1.6; etiket mono 10 uppercase 0.2em.
Radius 0 (chip/input 2px). Kenarlık 1px asit %35.
Hareket: 90–240ms, steps(4) serbest; strobe/flash YASAK; reduced-motion'da scanline kapanır.
Yoğun ekran (form/dashboard/ödeme): glow ve scanline kapanır, asit yalnız vurgu çizgisinde.
Çıktı: kod + tek paragraf not (asit alan oranı ve parlama önlemi).

Style: Acid Graphics (acid-graphics) · family: Bold (13–18)
Token: --bg #050505 · --surface #0e0e0e · --ink #f2fff0 · --accent #ccff00 · --line rgba(204,255,0,.35)
Radius: 0px / 2px · Typography: Archivo Expanded / Space Grotesk / JetBrains Mono
Required: **Tek vurgu:** asit yeşili; ikinci doygun renk yok (beyaz metin sayılır). · **Glow ölçülü:** tek katman `0 0 24px accent %25`; her öğede glow yok. · **Genişletilmiş display:** Archivo Expanded/Druk Wide, uppercase, `0.01em` tracking.
Banned: İkinci neon renk (pembe/mor) — synthwave'e kayar. · Metni okunmaz kılan distorsiyon (gövde metninde glitch yok). · Her öğede glow (ışık kirliliği).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="acid-graphics"] {
  --bg: #050505; --bg-2: #101010;
  --surface: #0e0e0e; --surface-2: #161616;
  --ink: #f2fff0; --ink-soft: rgba(242,255,240,.72); --ink-faint: rgba(242,255,240,.45);
  --accent: #ccff00; --accent-ink: #050505;
  --line: rgba(204,255,0,.35);
  --danger: #df3426;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 0 24px rgba(204,255,0,.25); --shadow-hard: none;
  --font-display: "Archivo Expanded", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
