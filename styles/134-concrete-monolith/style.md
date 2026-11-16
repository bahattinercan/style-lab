# 134 · Concrete Monolith

> **In one sentence:** Dökme beton kütle: sıfır radius, sıfır kenarlık, tek ton geçişi ve 0.95s ağır giriş — yüzey ayrımı çizgiden değil kütleden gelir.

| | |
|---|---|
| **Feeling** | ağır · sessiz · anıtsal · nötr |
| **Best for** | Mimarlık stüdyosu, kamu projesi arşivi, galeri/müze, kültür merkezi |
| **Avoid** | Hızlı e-ticaret, çocuk ürünü, klinik form |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="concrete-monolith"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Concrete Monolith blokları birbirinden ayırmaz, kütleyi tek parça olarak döker: 0 radius, 0 kenarlık, sıfır gölge; ayrım yalnız üç gri tonu ve 40px boşlukla kurulur. Archivo Black 56px majüskül başlık, Inter 16px/1.6 gövde. Kazanılan şey anıtsallık; feda edilen şey süs ve renk — tek ochre aksan kalır.

Kalıp izi (form line) tek dokudur: 1px/14px dikey çizgi %3, yalnız hero'da. Kenarlık hiç kullanılmadığı için hiyerarşi puntosu ve tonla taşınır; bu yüzden gövde 16px'in altına inmez.

Hareket ağır ve tektir: 0.95s `cubic-bezier(.5,.02,.3,1)` giriş, 32px kayma, 80ms stagger; **tek pin** (scrub 1.15, +130%) ile kütle sahnesi sabitlenir, mobilde kapalı. Hover 340ms ve 1.01 — neredeyse fark edilmez.

### What is not
- `slavic-late-brutalist` değildir: o stil 3px kenar, sert ofset gölge ve pas kırmızısıyla panel yığar; burada kenarlık 0, gölge 0, aksan ochre ve tek kütle var.
- `neo-brutalism` değildir: neo-brutalism kalın kenar ve blok gölgeyle çalışır; burada hiç kenarlık yok.
- `scandinavian-dark` değildir: o stil hairline ve mat koyu yüzeyle ince kalır; burada açık beton ve 56px majüskül kütle var.
- `concrete-monolith` bir "gri tema" değildir: kalıp izi ve tek pin sahnesi olmadan uygulanmaz.

### Where it comes from
Kökeni 1950-70'lerin brutalist ve Tadao Ando tarzı dökme beton mimarisidir: kalıp izi, derz yerine kütle, tek malzeme. Bugün mimarlık ve kamu arşivi sitelerinde geri döndü çünkü güvenilirlik "sessiz ağırlık" ile anlatılıyor. Klişeye düşmemek için korunması gereken detay: kenarlığın gerçekten 0 olması ve kalıp izinin tek ekranda kalması.

### Recognition test in 3 seconds
1. Archivo Black 56px majüskül başlık; hiçbir blokta kenarlık yok.
2. Radius 0; butonlar bile keskin.
3. Üç gri tonu (bg, surface, surface-2) kütle ayrımını taşır.
4. Tek ochre aksan; ikinci renk yok.
5. 0.95s ağır giriş + tek pin sahnesi (kütle).

## Visual signature
- Archivo Black 400 56px / 1.02 / −0.02em majüskül başlık (mobil 32px); gövde Inter 16px / 1.6 / 66ch.
- Sıfır kenarlık: hiçbir bileşende `border` yok; ayrım ton ve 40px boşlukla.
- Kalıp izi: 1px/14px dikey çizgi %3, yalnız hero'da, ekran başına 1.
- Kütle bloğu: 24px iç boşluk, 0 radius, `--surface` tonu; hover'da ton bir kademe koyulaşır.
- Rakam bandı: Space Mono 24px, üç hücre, 1px üst çizgi yok (yalnız ton).
- Radius 0px her yerde; tek istisna avatar 50%.
- **Typography:** Archivo Black (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#7a5a17`; neutral scale `#dedcd6` → `#14161a`.
- **Radius:** `0px` / `0px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Archivo Black 56px/1.02/−0.02em majüskül başlık (mobil 32px); gövde Inter 16px/1.6/66ch
2. Hiçbir bileşende kenarlık yok (border: 0); ayrım ton ve 40px boşluk
3. Radius 0px; tek istisna avatar 50%
4. Gölge yok; kalıp izi 1px/14px %3 yalnız hero
5. Tek vurgu ochre #7a5a17, ekranın ≤%6'sı, accent üstü daima --accent-ink
6. Rakam bandı Space Mono 24px, üç hücre, 64px yükseklik
7. Bölüm arası 104px (mobil 64px), kart içi 28px
8. Tek pin sahnesi: scrub 1.15, +130%, mobilde kapalı

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#dedcd6` | page background | as a card background |
| `--bg-2` | `#d2cfc8` | partition divider floor, table top | button background |
| `--surface` | `#eae8e3` | kart, input, modal | full-page background |
| `--surface-2` | `#c6c3bc` | passive chip, hover background | primary button |
| `--ink` | `#14161a` | title, body, icon | large background |
| `--ink-soft` | `#3f4448` | secondary text, description | — |
| `--ink-faint` | `#6b7074` | decorative label, separator text | interactive text |
| `--accent` | `#7a5a17` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f9f5e9` | text above accent | non-accent background |
| `--line` | `rgba(20,22,26,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.21:1** · `ink-soft/bg` **7.18:1** · `ink-faint/bg` **3.65:1 (decorative)** · `accent-ink/accent` **5.83:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 32px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14.5px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12.5px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Kenarlık, gölge, blur, cam yüzey, 1px+ hairline
- Radius (0 dışında), yuvarlak buton, 12px üstü köşe
- İkinci renk, pas kırmızısı, gradyan, renkli ışık
- Elle çizilmiş illüstrasyon, emoji, sticker
- İki scrub, mobilde pin açık, marquee, sürekli döngü
- 16px altı gövde, italik gövde, gövdede majüskül
- Saf siyah metin (#000), saf beyaz zemin (#fff)
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.19:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 56px majüskül başlık + 8/12 kütle bloğu (0 radius, 0 kenar) + kalıp izi | `shots/01-page.png` |
| Dashboard | orta | Rakam bandı 64px hücre, ton ayrımı, mono değer | `shots/01-page.png` |
| Form | düşük | 52px input, 0 radius, yalnız alt ton farkı | `shots/01-page.png` |
| Liste / tablo | orta | 56px satır, ton ayrımı (kenarlık yok) | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + büyük harf etiket + CTA | `shots/01-page.png` |
| Onboarding | orta | Üç adım, her adımda tek kütle bloğu | `shots/01-page.png` |
| Pricing | orta | Üç kütle bloğu, kenarlık yok, ton farkı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 380px, keskin form, mono toplam | `shots/01-page.png` |
| Modal | orta | 560px, 0 radius, yalnız ton + %55 backdrop | `shots/01-page.png` |
| Bildirim / toast | orta | Alt sol, 44px, ochre zemin + accent-ink | `shots/01-page.png` |
| Hata | düşük | Majüskül "HATA" + tek cümle + CTA | `shots/01-page.png` |
| Profil / ayar | orta | Künye 4/12 + form 8/12, ton ayrımı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.21:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.18:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.65:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.83:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.19:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 84.3 | ≥ 60 target | thin text |

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
| Bloklar "kutu" gibi | Kenarlık veya gölge eklenmiş | Border 0, gölge 0; ton + 40px boşluk |
| Sayfa "70-slavic" gibi | 3px kenar/pas kırmızısı kullanılmış | Kenar yok, aksan ochre |
| Başlık taşıyor | Majüskül iki satırı geçmiş | clamp + max-width 18ch |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `marble-vein` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `machined-metal-panel` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — Google Fonts — majüskül kütle başlığı, −0.02em |
| https://fonts.google.com/specimen/Inter | Inter — Google Fonts — gövde 16px/1.6 |
| https://fonts.google.com/specimen/Space+Mono | Space Mono — Google Fonts — rakam bandı 24px |
| https://www.archdaily.com/tag/tadao-ando | Tadao Ando — concrete — kalıp izi ve kütle dili |
| https://en.wikipedia.org/wiki/Brutalist_architecture | Wikipedia — Brutalist architecture — malzeme dürüstlüğü ve monolit form |

## AI brief

```text
Stil: Concrete Monolith (styles/134-concrete-monolith/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="concrete-monolith"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Archivo Black majüskül başlıkta, --font-body Inter gövdede, --font-mono rakam bandında.
Yüzey: kenarlık 0, gölge 0, radius 0; ayrım yalnız ton kademesi (bg/surface/surface-2) ve 40px boşluk.
Izgara: 12 kolon, gutter 40px, kütle 8/12, bölüm ritmi 104px.
Hareket: enter 0.95s cubic-bezier(.5,.02,.3,1) 32px / stagger 0.08; scroll top 76% 1.05s 28px;
         pin scrub 1.15 +130% (mobil kapalı); hover 340ms scale 1.01. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (kenarlık, gölge, radius, ikinci renk).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Concrete Monolith (concrete-monolith) · family: Material & Luxury (126–135)
Token: --bg #dedcd6 · --surface #eae8e3 · --ink #14161a · --accent #7a5a17 · --line rgba(20,22,26,.22)
Radius: 0px / 0px · Typography: Archivo Black / Inter / Space Mono
Required: Archivo Black 56px/1.02/−0.02em majüskül başlık (mobil 32px); gövde Inter 16px/1.6/66ch · Hiçbir bileşende kenarlık yok (border: 0); ayrım ton ve 40px boşluk · Radius 0px; tek istisna avatar 50%
Banned: Kenarlık, gölge, blur, cam yüzey, 1px+ hairline · Radius (0 dışında), yuvarlak buton, 12px üstü köşe · İkinci renk, pas kırmızısı, gradyan, renkli ışık
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="concrete-monolith"] {
  --bg: #dedcd6; --bg-2: #d2cfc8;
  --surface: #eae8e3; --surface-2: #c6c3bc;
  --ink: #14161a; --ink-soft: #3f4448; --ink-faint: #6b7074;
  --accent: #7a5a17; --accent-ink: #f9f5e9;
  --line: rgba(20,22,26,.22);
  --danger: #c40b04;
  --danger-ink: #ffffff;
  --ok: #007129;
  --ok-ink: #ffffff;
  --warn: #a44300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
