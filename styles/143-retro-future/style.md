# 143 · Retro Future

> **In one sentence:** 1960'lar uzay çağı afişini ekrana taşıyan; krem kâğıt, hardal mürekkep, yuvarlak paneller ve yörünge yayıyla kurulmuş iyimser fütürizm arayüzü.

| | |
|---|---|
| **Feeling** | iyimser, dönemsel, cesur, sıcak |
| **Best for** | lansman/etkinlik afişi, kültür-sanat vitrini, ürün hikâyesi, müze sergi sayfası |
| **Avoid** | yoğun veri konsolu, klinik/sağlık ekranı, teknik dokümantasyon |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="retro-future"]` |
| **Composition** | `split` · `split` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Retro Future, arayüzü **uzay çağı afişi** gibi kurar: krem kâğıt zemin, hardal mürekkep accent, geniş harf aralıklı geometrik başlık (Futura soyu Jost), yuvarlak paneller ve her ekranda bir yörünge yayı. İyimserlik tasarım kararıdır: hiçbir köşe keskin değil, hiçbir yüzey soğuk gri değil.

Üç kurucu karar: (1) **afiş hiyerarşisi** — tek büyük başlık (56px), tek alt cümle, tek CTA; afişte üçüncü bir vurgu katmanı yoktur; (2) **kâğıttan kesilmiş panel** — 1px mürekkep kenar + 3px alt kural + yumuşak gölge; panel gerçekten "yapıştırılmış" gibi durur; (3) **yörünge yayı** — yarım daire her ekranda bir kez, süs değil dönem işareti.

Display **Jost** (600) ile 0.1em harf aralığı: 1960'lar afiş tipografisinin ölçülebilir karşılığı. Gövde Inter, mono etiketler Space Mono.

Bedeli: bu stil veri yoğunluğunu taşımaz. Tablolar gerektiğinde zebra yarım ton ve mono sayı ile sakinleştirilir, süs bütçesi sıfıra iner.

### What is not
- **Synthwave (21) değildir:** 21 koyu mor zemin + neon pembe ile 1980'ler elektroniğidir (radius 4, grid); Retro Future krem/hardal ve yuvarlaktır (20/28), neon yoktur.
- **Frutiger Aero (25) değildir:** 25 parlak mavi, cam parlaması ve gradient ile 2000'ler estetiğidir; burada gradient yok, kağıt dokusu var.
- **Grand Tourer (41) değildir:** 41 Cinzel + koyu yeşil ile lüks otomotiv dilidir; burada display Jost ve hardal accent vardır.
- **Y2K (19) değildir:** 19 Michroma + parlak mavi krom kullanır; Retro Future mat kâğıttadır.

### Where it comes from
1960'lar space-age grafik tasarımı (NASA Graphics Standards, Expo 67 afişleri), Futura/Helvetica öncesi geometrik sans kültürü ve roket çağı iyimserliği. Ekranda yeniden kullanılmasının nedeni: koyu "tech" estetiğinin tekdüzeliğine karşı sıcak bir fütürizm arayışı. Klişeye dönüşmemesi için korunacak detay: harf aralığının gerçekten geniş olması (0.1em) ve yörünge yayının yarım daire kalması — tam daire "atom" klişesine kayar.

### Recognition test in 3 seconds
1. Krem/kâğıt zemin; accent hardal, üçüncü renk yok.
2. Başlık geniş harf aralıklı geometrik sans (Jost), neredeyse afiş puntosunda.
3. Paneller yuvarlak (20–28px) ve altında 3px mürekkep kural var.
4. Ekranda bir yörünge yayı (yarım daire) ve en fazla üç hız çizgisi.
5. Butonlar hap; hiçbir köşe keskin değil.

## Visual signature
- **Harf aralığı:** display 0.1em, H2 0.06em, etiket 0.22em — dönemin imzası.
- **Yapıştırılmış panel:** 1px `--ink` kenar + `0 3px 0 var(--ink)` alt kural + tek katman gölge.
- **Yörünge yayı:** 2px accent yarım daire, hero ve sayfa zemininde bir kez.
- **Hız çizgileri:** 6/3/2px üç yatay çizgi, accent, opaklık %50; en fazla üç.
- **Doku:** `--grain .03` kâğıt; tarama çizgisi ve neon yok.
- **Palet sıcaklığı:** zemin krem (`#f3ecdd`), mürekkep sıcak siyah (`#1b1710`) — soğuk gri yasak.
- **Typography:** Jost (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#7a5c04`; neutral scale `#f3ecdd` → `#1b1710`.
- **Radius:** `20px` / `28px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Uzay çağı tipografisi: Jost 600 + 0.1em harf aralığı; başlık asla 56px üstüne çıkmaz
2. Panel kenarı 1px ink + 3px alt kural (kağıttan kesilmiş etkisi)
3. Hız çizgileri ekran başına tek yönde ve en fazla 3 adet
4. Accent hardal yalnız birincil eylem ve afiş vurgusunda
5. Krem zemin + sıcak mürekkep; soğuk gri kullanılmaz
6. Her ekranda en az bir yarım daire yörünge yayı

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3ecdd` | page background | as a card background |
| `--bg-2` | `#ece3d0` | partition divider floor, table top | button background |
| `--surface` | `#faf5e9` | kart, input, modal | full-page background |
| `--surface-2` | `#e8dfca` | passive chip, hover background | primary button |
| `--ink` | `#1b1710` | title, body, icon | large background |
| `--ink-soft` | `#4f4737` | secondary text, description | — |
| `--ink-faint` | `#857a63` | decorative label, separator text | interactive text |
| `--accent` | `#7a5c04` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(27,23,16,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.17:1** · `ink-soft/bg` **7.8:1** · `ink-faint/bg` **3.6:1 (decorative)** · `accent-ink/accent` **6.25:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Jost) | 32px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 30px | 600 | 1.18 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `20px` (buton, input, chip), `28px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Neon/cyberpunk paleti, glow, tarama çizgisi.
- 28px üzeri radius veya keskin 0 radius.
- Roket fotoğrafı/kolaj, emoji roket.
- Gradient metin; gövde metninde hardal.
- Saniyede 1+ flaş, sürekli dönen uydu.
- Tam daire "atom" motifi (yarım yay kuralını bozar).
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.74:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Afiş paneli 5/7; dev başlık, tek CTA, yörünge yayı | `shots/01-page.png` |
| Dashboard | orta | Yuvarlak paneller; tablolar zebra, sayı mono | `shots/01-page.png` |
| Form | düşük | 44px alanlar, hap buton, hardal odak | `shots/01-page.png` |
| Liste / tablo | orta | 42px satır, yarım ton zebra, 3px alt kural | `shots/01-page.png` |
| Boş durum | orta | Boş yörünge yayı + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: fikir → yörünge → lansman | `shots/01-page.png` |
| Pricing | orta | Plan kartları yapıştırılmış kâğıt; öne çıkan hardal kural | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, yay yok, hap buton | `shots/01-page.png` |
| Modal | orta | Ortada afiş; üstte yarım yay | `shots/01-page.png` |
| Bildirim / toast | orta | Hap toast, mono sayaç | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + "pencere kapandı" | `shots/01-page.png` |
| Profil / ayar | orta | Harf aralığı yoğunluğu, yay görünürlüğü | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.17:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.8:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.6:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.25:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.74:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.6 | ≥ 60 target | thin text |

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
| "Kitsch" görünüyor | üçüncü renk + tam daire motif | paleti iki renge indir, yayı yarım bırak |
| Başlık taşıyor | 0.1em aralık + uzun kelime | punktoyu düşür, `max-width` ch ver |
| Panel yüzmüyor | alt kural yok | `0 3px 0 var(--ink)` ekle |
| Soğuk/ağır | gri zemin | krem + sıcak siyah |
| Okunmuyor | gövde hardal | gövde `--ink`, accent yalnız CTA |
| Mobilde kırılıyor | 5/7 korunmuş | 768 altında tek sütun |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| garnish | `frutiger-aero` | Same level of seriousness; accent sharing is not allowed |
| garnish | `synthwave` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.moma.org/collection/terms/space-age | MoMA · Space-age graphic design — retro-fütürist tipografi ve renk |
| https://www.nasa.gov/history/nasa-graphics-standards-manual/ | NASA Graphics Standards 1975 — harf aralığı ve işaret dili |
| https://fonts.google.com/specimen/Jost | Jost · Google Fonts — Futura benzeri display ölçüleri |
| https://www.nngroup.com/articles/legibility-of-typography/ | NN/g · Typography legibility — geniş harf aralığının sınırı |

## AI brief

```text
Stil: Retro Future (styles/143-retro-future/style.md, tokens.json)
Token: sadece [data-style="retro-future"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Jost 600 + tracking .1em (yalnız başlık), gövde Inter 400/600,
  etiket Space Mono .22em. Ölçek 11/12/13/16/21/30/56; gövde ölçü 62ch.
Yüzey: krem kâğıt (#f3ecdd) + sıcak mürekkep; radius 20/28px, hap buton 999px;
  panel = 1px var(--ink) + `0 3px 0 var(--ink)` alt kural + tek katman gölge.
Imza: yarım daire yörünge yayı (ekran başına 1) + en fazla 3 yatay hız çizgisi;
  afiş hiyerarşisi: tek başlık (<=56px), tek cümle, tek CTA.
Renk: tek accent #7a5c04 (hardal); gövde metninde accent kullanılmaz.
Hareket: enter .61s cubic-bezier(.3,1.2,.4,1) y16 stagger .09; scroll top 77% .7s y18 once;
  1 pin scrub 1.1 (+120%); hover 340ms scale 1.035; reduced-motion zorunlu.
Yasak: neon/glow, 28px üstü veya 0 radius, üçüncü renk, tam daire atom motifi, roket fotoğrafı.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Retro Future (retro-future) · family: Experimental & Future (136–145)
Token: --bg #f3ecdd · --surface #faf5e9 · --ink #1b1710 · --accent #7a5c04 · --line rgba(27,23,16,.16)
Radius: 20px / 28px · Typography: Jost / Inter / Space Mono
Required: Uzay çağı tipografisi: Jost 600 + 0.1em harf aralığı; başlık asla 56px üstüne çıkmaz · Panel kenarı 1px ink + 3px alt kural (kağıttan kesilmiş etkisi) · Hız çizgileri ekran başına tek yönde ve en fazla 3 adet
Banned: Neon/cyberpunk paleti, glow, tarama çizgisi. · 28px üzeri radius veya keskin 0 radius. · Roket fotoğrafı/kolaj, emoji roket.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="retro-future"] {
  --bg: #f3ecdd; --bg-2: #ece3d0;
  --surface: #faf5e9; --surface-2: #e8dfca;
  --ink: #1b1710; --ink-soft: #4f4737; --ink-faint: #857a63;
  --accent: #7a5c04; --accent-ink: #ffffff;
  --line: rgba(27,23,16,.16);
  --danger: #d12318;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04f00;
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
  --shadow: 0 20px 44px -34px rgba(27,23,16,.55); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.1em; --blur: 0px; --grain: 0;
}
```
