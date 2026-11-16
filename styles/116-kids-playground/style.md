# 116 · Kids Playground

> **In one sentence:** Çocuk oyun alanı mantığı: 18px yuvarlak köşe, kalın tek gölge, 4 renkli ama %12 sınırlı bloklar ve 0.46s zıplayan giriş — güvenli, cesur, dokunulabilir.

| | |
|---|---|
| **Feeling** | neşeli · güvenli · yuvarlak · dokunulabilir |
| **Best for** | Çocuk eğitim uygulaması, oyun kütüphanesi, aile aboneliği, etkinlik takvimi |
| **Avoid** | Finansal tablo, klinik form, kurumsal yönetim paneli |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="kids-playground"]` |
| **Composition** | `split-reverse` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Kids Playground arayüzü bir oyun alanı gibi kurar: 18px radius'lu büyük bloklar, 60px dokunma hedefi, Baloo 2 56px başlık ve Nunito 17px/1.65 gövde. Kazanılan şey çocuğun tek bakışta "dokunabilirim" demesi; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 3 seçenek.

Renk dört blokla sınırlıdır (mavi, yeşil, sarı, mercan) ve her blok ekranın %12'sini geçmez; metin daima `--ink` veya `--accent-ink`. Derinlik tek kalın gölgeden (`0 6px 0`) gelir, blur yoktur — gölge "kaldırılabilir blok" hissi verir.

Hareket oyunbazdır ama abartısızdır: 0.46s `back.out(1.7)` giriş, 22px kayma, 70ms stagger; hover 180ms ve 1.04 ölçek. Zıplama hissi 1.7 overshoot'ta durur, 2.0 üstü yasak.

### What is not
- `claymorphism` değildir: clay yumuşak çift gölge ve pastel geçişlerle çalışır; burada tek kalın gölge, 4 parlak blok ve 70ms stagger vardır.
- `dopamine-ui` değildir: dopamine konfeti ve ödül animasyonuyla çalışır; burada ekran başına 1 ödül ve sade zıplama var.
- `memphis` değildir: memphis dekoratif şekiller ve 100ms basma ile çalışır; burada dekor yok, 60px hedef ve 0.46s giriş var.
- `kids-playground` bir "çocukça font" şablonu değildir: Baloo 2 yalnız başlıkta, gövde Nunito okunur puntoda kalır.

### Where it comes from
Kökeni 1970'lerin oyun alanı tabelaları ve 2010'ların çocuk eğitim uygulamalarıdır (Duolingo Kids, Khan Academy Kids). Bugün aile abonelikleri ve oyun kütüphaneleri arttığı için geri döndü. Klişeye düşmemek için korunması gereken detay: 60px dokunma hedefi ve ekran başına 3 seçenek sınırı.

### Recognition test in 3 seconds
1. Baloo 2 56px başlık, Nunito 17px/1.65 gövde; mono yalnız sayaçta.
2. 18px radius her blokta; 0 radius hiç yok.
3. Tek kalın gölge `0 6px 0` (blur 0); yumuşak gölge yok.
4. Dört blok rengi, her biri ≤%12; metin daima ink/accent-ink.
5. 60px dokunma hedefi ve 0.46s zıplayan giriş (overshoot 1.7).

## Visual signature
- Display Baloo 2 700 56px / 1.06 (mobil 34px); gövde Nunito 17px / 1.65 / 54ch.
- Radius 18px blok, 14px buton; 24px üstü yasak.
- Kalın gölge `0 6px 0 var(--line)` buton ve kartta; blur 0, yayılan gölge yok.
- Blok renkleri: accent (mavi) + 3 yardımcı blok yalnız `--surface-2` tonuyla, alan ≤%12/blok.
- Dokunma hedefi 60px (mobil 56px); ikon 24px, 2.5px çizgi, yuvarlak uç.
- Sayaç ve skor mono 13px, tabular-nums; başka mono kullanımı yok.
- **Landing hero (QA):** üç blok kartı: 32px daire, kalın gölge, `12 yıldız` sayacı altbilgisi.
- **Typography:** Baloo 2 (display) + Nunito (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#17607a`; neutral scale `#fdf7ec` → `#1e2a33`.
- **Radius:** `14px` / `18px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. Baloo 2 700 56px/1.06 başlık (mobil 34px); Nunito 17px/1.65/54ch gövde
2. Radius 18px blok / 14px buton; 24px üstü yasak, 0 radius yasak
3. Tek kalın gölge `0 6px 0` (blur 0) buton ve kartta; yumuşak gölge yasak
4. Ekran başına en fazla 3 seçenek; her renk bloğu ≤%12, metin daima ink/accent-ink
5. Dokunma hedefi 60px (mobil 56px), odak halkası 3px + 3px offset
6. Bölüm arası 80px (mobil 52px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
7. İkon 2.5px çizgi, yuvarlak uç, 24px ızgara; ikon daima metinle
8. Sayaç/skor mono 13px tabular-nums; başka mono yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fdf7ec` | page background | as a card background |
| `--bg-2` | `#f6eddd` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f4ecdf` | passive chip, hover background | primary button |
| `--ink` | `#1e2a33` | title, body, icon | large background |
| `--ink-soft` | `#4b5a64` | secondary text, description | — |
| `--ink-faint` | `#7c8a92` | decorative label, separator text | interactive text |
| `--accent` | `#17607a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6fbfd` | text above accent | non-accent background |
| `--line` | `rgba(30,42,51,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.73:1** · `ink-soft/bg` **6.69:1** · `ink-faint/bg` **3.33:1 (decorative)** · `accent-ink/accent` **6.73:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 34px (mobile 34px) | 700 | 1.1 | 0.01em |
| H2 | same | 34px | 600 | 1.2 | 0.01em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 17px | 400 | 1.62 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 13px | 400 | 1.2 | 0.2em |
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
- Radius: `14px` (buton, input, chip), `18px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Fazla renk (ekran başına 3+ parlak blok), gradyan, neon doygunluk
- Yumuşak/yayılan gölge, blur, backdrop-filter, cam yüzey
- 0 radius keskin köşe veya 24px üstü aşırı yuvarlak
- Gövdede büyük harf, 15px altı punto, 54ch üstü ölçü
- Konfeti, sürekli döngü, marquee, parallax, pin/scrub
- Saf siyah zemin, koyu tema varsayılan, filter: invert()
- Karmaşık illüstrasyon (3 renkten fazla), emoji süs şeridi
- Overshoot 2.0 üstü zıplama, 0.9s üstü giriş
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.02:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık + 3 büyük oyun bloğu (18px radius, kalın gölge) | `shots/01-page.png` |
| Dashboard | düşük | İlerleme: 3 blok + mono sayaç; ekran başına 3 seçenek | `shots/01-page.png` |
| Form | düşük | 60px input, 14px radius, 2px kenar | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır, 18px radius blok içinde | `shots/01-page.png` |
| Boş durum | orta | Tek karakter illüstrasyonu + "henüz oyun yok" + birincil buton | `shots/01-page.png` |
| Onboarding | yüksek | Üç adım, her adımda tek büyük buton | `shots/01-page.png` |
| Pricing | orta | İki plan: çocuk / aile; kalın gölge, 18px radius | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Büyük harf dostu e-posta input + tek buton | `shots/01-page.png` |
| Modal | orta | 520px, 18px radius, kalın gölge, backdrop %45 | `shots/01-page.png` |
| Bildirim / toast | orta | Alt orta, 52px, accent zemin + accent-ink | `shots/01-page.png` |
| Hata | düşük | Tek cümle + büyük tekrar butonu | `shots/01-page.png` |
| Profil / ayar | orta | Avatar 72px + 3 ayar bloğu | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.73:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.69:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.33:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.73:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.02:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97 | ≥ 60 target | thin text |

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
| Ekran "reklam panosu" gibi | Dörtten fazla parlak renk veya gradyan blok | Blok sayısını 3'e indir, gradyanı sil |
| Çocuk okumuyor | Gövde 15px altına inmiş veya ölçü 54ch üstü | 17px + 54ch + 1.65 satır aralığı |
| Bloklar "yapışmış" duruyor | Yumuşak gölge veya blur eklenmiş | Gölgeyi `0 6px 0` blur 0'a çevir |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `claymorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Baloo+2 | Baloo 2 — Google Fonts — yuvarlak display, 700 ağırlık, 56px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde okunurluğu, 17px/1.65 |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 — Target Size (Minimum) — 60px dokunma hedefi gerekçesi |
| https://www.nngroup.com/articles/children-websites-usability/ | Nielsen Norman — Children & interfaces — çocuk ekranında seçenek sayısı ve okunurluk |
| https://m3.material.io/styles/shape/overview | Material 3 — Shape — yuvarlak blok radius ölçeği |

## AI brief

```text
Stil: Kids Playground (styles/116-kids-playground/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="kids-playground"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Baloo 2 700 başlıkta, --font-body Nunito gövdede, --font-mono yalnız sayaçta.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 14/18px; tek kalın gölge `0 6px 0`, blur 0.
Izgara: 12 kolon, gutter 24px, ekran başına 3 seçenek, bölüm ritmi 80px, dokunma hedefi 60px.
Hareket: enter 0.46s back.out(1.7) 22px / stagger 0.07; scroll top 86% 0.52s 18px once:true;
         hover 180ms scale 1.04; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (fazla renk, yumuşak gölge, blur, 0 radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Kids Playground (kids-playground) · family: Playful (116–125)
Token: --bg #fdf7ec · --surface #ffffff · --ink #1e2a33 · --accent #17607a · --line rgba(30,42,51,.16)
Radius: 14px / 18px · Typography: Baloo 2 / Nunito / Space Mono
Required: Baloo 2 700 56px/1.06 başlık (mobil 34px); Nunito 17px/1.65/54ch gövde · Radius 18px blok / 14px buton; 24px üstü yasak, 0 radius yasak · Tek kalın gölge `0 6px 0` (blur 0) buton ve kartta; yumuşak gölge yasak
Banned: Fazla renk (ekran başına 3+ parlak blok), gradyan, neon doygunluk · Yumuşak/yayılan gölge, blur, backdrop-filter, cam yüzey · 0 radius keskin köşe veya 24px üstü aşırı yuvarlak
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="kids-playground"] {
  --bg: #fdf7ec; --bg-2: #f6eddd;
  --surface: #ffffff; --surface-2: #f4ecdf;
  --ink: #1e2a33; --ink-soft: #4b5a64; --ink-faint: #7c8a92;
  --accent: #17607a; --accent-ink: #f6fbfd;
  --line: rgba(30,42,51,.16);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b85600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 14px; --radius-lg: 18px;
  --shadow: 0 6px 0 var(--line); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
}
```
