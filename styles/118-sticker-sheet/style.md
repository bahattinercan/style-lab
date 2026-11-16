# 118 · Sticker Sheet

> **In one sentence:** Çıkartma sayfası mantığı: 6px beyaz die-cut halka, 2px ofset gölge ve 12px kayma — her blok sayfadan "soyulabiliyormuş" gibi durur.

| | |
|---|---|
| **Feeling** | oyuncu · toplanabilir · keskin · eğlenceli |
| **Best for** | Dijital çıkartma paketi, sohbet uygulaması eklentisi, koleksiyon vitrini, genç marka lansmanı |
| **Avoid** | Resmi doküman, kurumsal rapor, uzun okuma metni |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="sticker-sheet"]` |
| **Composition** | `index` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Sticker Sheet her bloğu bir çıkartma gibi ele alır: 6px `--surface` die-cut halka, 2px ofset gölge, 10–40px arası hafif rotasyon ve hover'da 8px kalkma. Kazanılan şey toplanabilirlik hissi; feda edilen şey hizalama titizliği — rotasyonla oynanır ama 40 dereceyi geçmez.

Tipografi çıkartma üstünde Nunito 700 15px başlık, 13px etiket; sayfa gövdesi Poppins 16.5px/1.6. Renk tek vurguda (ahududu `#b5174e`) toplanır, çıkartmaların kendi dolgusu `--surface-2` tonlarıyla sınırlıdır.

Hareket "soyulma" gibidir: 0.34s `back.out(2)` giriş, 12px kayma, 30ms stagger; hover 160ms ve 1.08 ölçek. Sayfa başına 1 kez toplu "yapıştırma" sekansı; sürekli sallanma yok.

### What is not
- `dopamine-ui` değildir: dopamine ödül ve konfetiyle çalışır; burada die-cut halka ve 2px ofset gölge imzadır.
- `y2k` değildir: y2k parlak gradyan ve metalik parlaklıkla çalışır; burada düz renk + keskin halka var.
- `claymorphism` değildir: clay yumuşak çift gölge kullanır; burada gölge 2px ofset, blur 0.
- `sticker-sheet` bir "emoji seti" değildir: çıkartma içeriği daima tipografi veya tek renk vektör; foto kolaj yok.

### Where it comes from
Kökeni 1980'lerin Panini albümleri ve 2010'ların dijital sticker (LINE, Apple Messages) ekonomisidir. Bugün mesajlaşma eklentileri ve genç marka lansmanlarında geri döndü çünkü koleksiyon mekaniği satın alma yaratıyor. Klişeye düşmemek için korunması gereken detay: 6px die-cut halkanın her blokta aynı kalması.

### Recognition test in 3 seconds
1. Her blokta 6px `--surface` die-cut halka + 2px ofset gölge (blur 0).
2. Bloklar 10–40 derece arası rotasyonlu; hiza bilinçli bozulmuş.
3. Nunito 700 15px çıkartma başlığı; sayfa gövdesi Poppins 16.5px.
4. Tek vurgu ahududu; çıkartma dolguları yalnız surface-2 tonları.
5. Hover'da 8px kalkma + 1.08 ölçek; sürekli sallanma yok.

## Visual signature
- Die-cut halka: 6px `--surface` border (mobil 4px), dışında 2px ofset gölge `2px 2px 0 rgba(...)`.
- Rotasyon: çıkartmalar −10° ile +40° arası; sayfa başına en fazla 6 çıkartma.
- Çıkartma içi: Nunito 700 15px başlık, 13px Poppins etiket, 1px iç hairline.
- Sayfa gövdesi Poppins 16.5px / 1.6 / 58ch; başlık Nunito 900 44px / 1.1.
- Koleksiyon sayacı: mono (Silkscreen) 12px, "12/24" biçiminde, sağ üstte.
- Kes-yeri işareti: 1px kesikli çizgi, sayfa başına 1, yalnız bölüm ayırıcı olarak.
- **Landing hero (QA):** üç die-cut çıkartma: ±4° rotasyon, 6px surface halka, 2px ofset gölge, `12/24` sayacı.
- **Typography:** Nunito (display) + Poppins (body) + Silkscreen (mono label).
- **Colour discipline:** a single accent `#b5174e`; neutral scale `#f7f6f2` → `#16160f`.
- **Radius:** `10px` / `16px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Nunito 900 44px/1.1 başlık (mobil 28px); gövde Poppins 16.5px/1.6/58ch
2. Her blokta 6px --surface die-cut halka + 2px ofset gölge (blur 0); mobilde 4px
3. Rotasyon −10°…+40°, sayfa başına en fazla 6 çıkartma; rotasyon animasyonla değişmez
4. Tek vurgu ahududu #b5174e, ekranın ≤%8'i, accent üstü daima --accent-ink
5. Radius 10px çıkartma / 16px panel; 20px üstü yasak
6. Çıkartma başlığı 15px Nunito 700, etiket 13px; gövde 16.5px
7. Koleksiyon sayacı Silkscreen 12px "12/24" biçiminde
8. Bölüm arası 88px (mobil 56px), kart içi 20px

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f6f2` | page background | as a card background |
| `--bg-2` | `#ecebe4` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f2f1ea` | passive chip, hover background | primary button |
| `--ink` | `#16160f` | title, body, icon | large background |
| `--ink-soft` | `#4a4a40` | secondary text, description | — |
| `--ink-faint` | `#78786c` | decorative label, separator text | interactive text |
| `--accent` | `#b5174e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff5f7` | text above accent | non-accent background |
| `--line` | `rgba(22,22,15,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.8:1** · `ink-soft/bg` **8.28:1** · `ink-faint/bg` **4.13:1 (decorative)** · `accent-ink/accent` **6.15:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Nunito) | 28px (mobile 28px) | 700 | 1.1 | 0.01em |
| H2 | same | 26px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16.5px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Silkscreen) | 12px | 400 | 1.2 | 0.2em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

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
- Radius: `10px` (buton, input, chip), `16px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Gradyan çıkartma, metalik/parlak yüzey, neon, üçüncü parlak renk
- Yumuşak/blur gölge, backdrop-filter, cam yüzey
- Sürekli sallanma/dönme animasyonu, marquee, parallax, pin/scrub
- Altıdan fazla çıkartma, 40° üstü veya 10° altı rotasyon
- Foto kolaj, emoji seti, ikon dolu şerit
- 13px altı çıkartma metni, gövdede büyük harf, 58ch üstü ölçü
- 20px üstü radius, tam yuvarlak buton (avatar dışında)
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.57:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 44px başlık + 4 çıkartma (6px halka, rotasyonlu) + tek CTA | `shots/01-page.png` |
| Dashboard | orta | Koleksiyon: 4 kolon çıkartma ızgarası + mono sayaç | `shots/01-page.png` |
| Form | düşük | 48px input, 10px radius, 2px kenar | `shots/01-page.png` |
| Liste / tablo | düşük | 56px satır, 1px hairline, mono kod | `shots/01-page.png` |
| Boş durum | orta | Boş die-cut halka + "henüz çıkartma yok" | `shots/01-page.png` |
| Onboarding | yüksek | Üç adım, her adımda 1 çıkartma ödülü | `shots/01-page.png` |
| Pricing | orta | İki paket: 12'li / 24'lü; her paket çıkartma biçiminde | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 380px, 10px radius, çıkartma yok | `shots/01-page.png` |
| Modal | orta | 520px, 16px radius, die-cut halka; backdrop %45 | `shots/01-page.png` |
| Bildirim / toast | orta | Sağ alt, 48px, ink zemin + bg metin | `shots/01-page.png` |
| Hata | düşük | Tek cümle + çıkartma biçiminde "tekrar dene" | `shots/01-page.png` |
| Profil / ayar | orta | Avatar 72px + koleksiyon özeti | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.8:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.28:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.13:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.15:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.57:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.5 | ≥ 60 target | thin text |

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
| Çıkartmalar "kart" gibi | Die-cut halka veya ofset gölge eksik | 6px surface border + 2px ofset |
| Sayfa dağınık | Altıdan fazla rotasyonlu blok | Sayfa başına 6 çıkartma sınırı |
| Metin okunmuyor | Çıkartma içi 13px altına inmiş | Başlık 15px, etiket 13px sabit |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `y2k` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `academic-paper` | Two different ornamental languages compete on the same screen |
| Mixing | `utility` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — çıkartma başlığı 700/900, 15px |
| https://fonts.google.com/specimen/Poppins | Poppins — Google Fonts — gövde 16.5px/1.6 |
| https://fonts.google.com/specimen/Silkscreen | Silkscreen — Google Fonts — koleksiyon sayacı 12px |
| https://support.apple.com/guide/messages/use-message-effects-icht33f0f8e0/mac | Apple Messages — stickers — çıkartma ölçek ve yerleşim mantığı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 — Target Size (Minimum) — 72px çıkartma hedefi gerekçesi |

## AI brief

```text
Stil: Sticker Sheet (styles/118-sticker-sheet/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="sticker-sheet"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Nunito 900 başlıkta, --font-body Poppins gövdede, --font-mono Silkscreen sayaçta.
Yüzey: die-cut 6px --surface halka + 2px ofset gölge; radius 10/16px; yumuşak gölge yok.
Izgara: 4 kolon çıkartma, gutter 24px, bölüm ritmi 88px, sayfa başına 6 çıkartma.
Hareket: enter 0.34s back.out(2) 12px / stagger 0.03; scroll top 88% 0.4s 14px once:true;
         hover 160ms scale 1.08; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradyan, blur, sürekli dönme, fazla çıkartma).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Sticker Sheet (sticker-sheet) · family: Playful (116–125)
Token: --bg #f7f6f2 · --surface #ffffff · --ink #16160f · --accent #b5174e · --line rgba(22,22,15,.18)
Radius: 10px / 16px · Typography: Nunito / Poppins / Silkscreen
Required: Nunito 900 44px/1.1 başlık (mobil 28px); gövde Poppins 16.5px/1.6/58ch · Her blokta 6px --surface die-cut halka + 2px ofset gölge (blur 0); mobilde 4px · Rotasyon −10°…+40°, sayfa başına en fazla 6 çıkartma; rotasyon animasyonla değişmez
Banned: Gradyan çıkartma, metalik/parlak yüzey, neon, üçüncü parlak renk · Yumuşak/blur gölge, backdrop-filter, cam yüzey · Sürekli sallanma/dönme animasyonu, marquee, parallax, pin/scrub
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="sticker-sheet"] {
  --bg: #f7f6f2; --bg-2: #ecebe4;
  --surface: #ffffff; --surface-2: #f2f1ea;
  --ink: #16160f; --ink-soft: #4a4a40; --ink-faint: #78786c;
  --accent: #b5174e; --accent-ink: #fff5f7;
  --line: rgba(22,22,15,.18);
  --danger: #d82c1f;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75500;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 16px;
  --shadow: 2px 2px 0 rgba(22,22,15,.92); --shadow-hard: none;
  --font-display: "Nunito", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "Silkscreen", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
