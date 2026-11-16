# 86 · Literary Hardcover

> **In one sentence:** Edebiyat kitabının kapağını arayüze çeviren stil: tek serif aile, 17px/1.72 gövde, 64ch ölçü ve derinliği 1px hairline ile kâğıt tonundan alan sakin okuma sayfası.

| | |
|---|---|
| **Feeling** | sakin · edebî · dokunulur · ölçülü |
| **Best for** | Kitap/edebiyat platformu, yazar sayfası, okuma kulübü, uzun form arşiv |
| **Avoid** | Yoğun veri panosu, fiyat karşılaştırma tablosu, oyun/etkinlik landing |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="literary-hardcover"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Literary Hardcover, bir web sayfasını ciltsiz değil **ciltli** bir kitap gibi davranmaya zorlar: tek serif aile (Lora) hem başlık hem gövdede çalışır, satır aralığı 1.72'ye çıkar, ölçü 64ch'te kesilir. Kazanılan şey okuma hızının düşmesi ve metnin hatırlanması; feda edilen şey ekran yoğunluğu ve dekoratif hareket.

Yüzey dili kâğıttan gelir: `--bg` sıcak krem, `--surface` neredeyse beyaz kâğıt, ayrım tek 1px hairline. Gölge yoktur; derinlik ton kademesiyle kurulur. Vurgu olarak sadece kumaş yeşili (`--accent`) kullanılır ve ekranın %6'sını geçmez.

Hareket de kitabın ritmine uyar: 720ms giriş, 860ms scroll reveal, tek seferlik. Hızlı hiçbir şey yok; ama hareketin kendisi de görünmez olmalı — kullanıcı animasyonu değil metni hatırlar.

### What is not
- `editorial-design` değildir: editorial iki aile (Fraunces + Inter) ve bölüm numaralarıyla dergi ritmi kurar; burada tek aile ve numara yok, ölçü 64ch vs 68ch.
- `luxury-typography` değildir: lüks stilde display Cormorant 58px ve geniş tracking vardır; burada display de Lora'dır, tracking negatiftir (−0.01em) ve punto 58px'tir.
- `dark-academia` değildir: koyu zemin ve gravür dokusu yok; zemin krem, dokusu %3 grain.
- `minimalism` değildir: minimalism sans-serif ve 6px kayma ile çalışır; burada serif, 18px kayma ve 260ms hover vardır.

### Where it comes from
Kökeni Penguin Classics cilt tasarımı ve Bringhurst'ün *The Elements of Typographic Style* kitabındaki ölçü/ritim kurallarıdır. Bugün yeniden kullanılmasının nedeni okuma ürünlerinin (Substack kitap ekleri, edebiyat kulüpleri, online kitabevleri) "içerik = ürün" hâline gelmesi. Klişeye düşmemek için korunması gereken tek detay: başlık ile gövdenin aynı aileden gelmesi ve 1.72 satır aralığının bozulmaması.

### Recognition test in 3 seconds
1. Başlık ile gövde aynı serif ailede (Lora 600 / Lora 400) — ikinci bir display aile yok.
2. Satır aralığı 1.72 ve ölçü 64ch; gövde 17px (16px değil).
3. Kartlarda gölge yok, yalnız 1px `rgba(27,26,23,.16)` hairline.
4. Zemin sıcak krem `#f2ebdd`; saf beyaz yok.
5. Tek vurgu kumaş yeşili `#2f4a3c`; ikinci renk hiç görünmez.

## Visual signature
- Tek aile kuralı: `--font-display` = `--font-body` = Lora; mono yalnız künye sayfası ve sayı etiketlerinde.
- Gövde 17px / 1.72 / 64ch; başlık 58px / 1.10 / −0.01em (mobil 34px).
- Ayrım yalnız 1px hairline `--line` (opaklık .16); 2px ve üstü kural yok.
- Kapak bloğu: 4px radius, 1px iç hairline ve `--bg-2` zemin; üstünde 2px'lik tek renk şerit (accent) bulunur.
- Bölüm açılışında ilk paragraf 20px ve `--ink-soft`; drop cap yok (klişe).
- Künye şeridi: mono 11px, tracking .14em, üst/alt hairline, üç hücre.
- Kâğıt grain .03 tek doku; başka desen/illüstrasyon yok.
- **Typography:** Lora (display) + Lora (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#2f4a3c`; neutral scale `#f2ebdd` → `#1b1a17`.
- **Radius:** `4px` / `10px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. Tek aile kuralı: display = body = Lora; mono yalnız künye, sayfa numarası ve etikette
2. Gövde 17px / 1.72 / 64ch; başlık 58px / 1.10 / −0.01em (mobil 34px)
3. Ayrım yalnız 1px hairline (--line, opaklık .16); 2px ve üstü kural yasak
4. Kartlarda gölge yok; derinlik ton kademesi (bg → surface → surface-2) ile kurulur
5. Tek vurgu kumaş yeşili #2f4a3c; ekranın ≤%6'sı, accent üstü daima --accent-ink
6. Bölüm arası 88px (mobil 56px), kart içi 26px, radius 4/10px
7. Kâğıt grain .03 tek doku; ikinci desen/illüstrasyon yok
8. Kapak bloğu: 4px radius + 1px iç hairline + üstte 2px accent şerit (ekran başına 1)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f2ebdd` | page background | as a card background |
| `--bg-2` | `#e8dfcd` | partition divider floor, table top | button background |
| `--surface` | `#fdfaf2` | kart, input, modal | full-page background |
| `--surface-2` | `#ece3d3` | passive chip, hover background | primary button |
| `--ink` | `#1b1a17` | title, body, icon | large background |
| `--ink-soft` | `#4e4a42` | secondary text, description | — |
| `--ink-faint` | `#7b7568` | decorative label, separator text | interactive text |
| `--accent` | `#2f4a3c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f3e8` | text above accent | non-accent background |
| `--line` | `rgba(27,26,23,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.67:1** · `ink-soft/bg` **7.43:1** · `ink-faint/bg` **3.86:1 (decorative)** · `accent-ink/accent` **8.75:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 34px (mobile 34px) | 700 | 0.98 | -0.035em |
| H2 | same | 34px | 600 | 1.08 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 17px | 400 | 1.6 | 0 |
| Small body | same | 15px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
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

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `4px` (buton, input, chip), `10px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- İkinci display aile, sans-serif başlık, 700/900 ağırlık, 300 ince ağırlık
- Kart gölgesi, blok gölge, 2px+ kenar, çift çerçeve
- Saf siyah (#000) metin veya saf beyaz (#fff) zemin, gradyan zemin
- İkinci vurgu rengi (terracotta/bordo/mavi), neon, glow
- Drop cap, el yazısı font, illüstrasyon, foto kolaj
- Gövde metninde mono, uppercase veya 16px altı punto
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Paragraf paragraf fade-in; reveal yalnız başlık ve ilk paragrafta
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.3:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Kapak bloğu 4px radius + 1px iç hairline, üstünde 2px accent şerit; h1 58px, tek CTA | `shots/01-page.png` |
| Dashboard | düşük | Okuma listesi: 3 satır, satır arası 1px hairline, mono sayaç | `shots/01-page.png` |
| Form | düşük | 46px input, 4px radius, etiket mono 11px .14em; hata metni ink-soft | `shots/01-page.png` |
| Liste / tablo | düşük | 48px satır, 1px alt çizgi, başlık mono 11px; zebra yok | `shots/01-page.png` |
| Boş durum | orta | Tek paragraf 64ch + birincil buton; illüstrasyon yok | `shots/01-page.png` |
| Onboarding | yüksek | Üç adım, sol kolon metin 7/12, sağ kolon künye 4/12 | `shots/01-page.png` |
| Pricing | orta | Üç plan kartı 10px radius, 1px hairline; accent yalnız önerilen planın şeridinde | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek kolon 420px form, ortalanmış; sosyal buton ikincil | `shots/01-page.png` |
| Modal | orta | 480px, 10px radius, tek yumuşak gölge; backdrop %40 ink | `shots/01-page.png` |
| Bildirim / toast | orta | Sol alt, 42px, ink zemin + bg metin, 4px radius | `shots/01-page.png` |
| Hata | düşük | Başlık 34px + tek paragraf 64ch + accent ikincil buton | `shots/01-page.png` |
| Profil / ayar | orta | İki kolon: form 7/12, künye 4/12; hairline ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.67:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.43:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.86:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.3:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.7 | ≥ 60 target | thin text |

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
| Sayfa "blog gibi" duruyor | İkinci bir display aile veya 16px gövde eklenmiş | Tek aile + 17px/1.72 sabitle |
| Okuma yoruyor | Ölçü 64ch üstüne çıkmış | `max-width: 64ch` ve 28px kolon boşluğu |
| Kartlar kutu kutu görünüyor | Gölge veya 2px kenar eklenmiş | Gölgeyi sil, 1px hairline + ton kademesi |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-academia` | Same level of seriousness; accent sharing is not allowed |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style | Bringhurst — The Elements of Typographic Style — ölçü, ritim ve 1.72 satır aralığı kuralı |
| https://fonts.google.com/specimen/Lora | Lora — Google Fonts — tek aile kuralı, 400/600 ağırlık, 17px gövde |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — künye şeridi ve mono etiket |
| https://practicaltypography.com/ | Practical Typography (Butterick) — ölçü (ch) ve başlık/gövde ilişkisi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

```text
Stil: Literary Hardcover (styles/86-literary-hardcover/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="literary-hardcover"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = Lora (600 başlık, 400 gövde); --font-mono yalnız künye/etiket.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius --radius 4px, --radius-lg 10px; kart gölgesi yok.
Izgara: 7/4 kolon asimetri, gutter 28px, gövde 64ch, bölüm ritmi 88px.
Hareket: enter 0.72s cubic-bezier(.2,.6,.2,1) 18px / stagger 0.055; scroll top 81% 0.86s 20px once:true;
         hover 260ms scale 1.018; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, 2px+ kenar, ikinci aile, neon).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Literary Hardcover (literary-hardcover) · family: Publication & Typography (86–95)
Token: --bg #f2ebdd · --surface #fdfaf2 · --ink #1b1a17 · --accent #2f4a3c · --line rgba(27,26,23,.16)
Radius: 4px / 10px · Typography: Lora / Lora / IBM Plex Mono
Required: Tek aile kuralı: display = body = Lora; mono yalnız künye, sayfa numarası ve etikette · Gövde 17px / 1.72 / 64ch; başlık 58px / 1.10 / −0.01em (mobil 34px) · Ayrım yalnız 1px hairline (--line, opaklık .16); 2px ve üstü kural yasak
Banned: İkinci display aile, sans-serif başlık, 700/900 ağırlık, 300 ince ağırlık · Kart gölgesi, blok gölge, 2px+ kenar, çift çerçeve · Saf siyah (#000) metin veya saf beyaz (#fff) zemin, gradyan zemin
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="literary-hardcover"] {
  --bg: #f2ebdd; --bg-2: #e8dfcd;
  --surface: #fdfaf2; --surface-2: #ece3d3;
  --ink: #1b1a17; --ink-soft: #4e4a42; --ink-faint: #7b7568;
  --accent: #2f4a3c; --accent-ink: #f7f3e8;
  --line: rgba(27,26,23,.16);
  --danger: #d02216;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #af4e00;
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
  --shadow: 0 1px 0 rgba(27,26,23,.10); --shadow-hard: none;
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
