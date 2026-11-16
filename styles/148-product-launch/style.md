# 148 · Product Launch

> **In one sentence:** Lansman sahnesi: derin lacivert zemin, tepeden inen tek spotlight, mint accent ve 0.74s oturma girişi — ürün çıkar, sayfa süslenmez.

| | |
|---|---|
| **Feeling** | odaklı · teknolojik · taze · davetkâr |
| **Best for** | Ürün/özellik lansmanı, sürüm duyurusu, donanım tanıtımı, konferans açılış sayfası |
| **Avoid** | Uzun okuma (blog/rapor), regulatory/klinik içerik, çok kategorili e-ticaret |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="product-launch"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Product Launch, sayfayı tek bir ışık konisi gibi kurar: zemin derin lacivert (#070b14), hero’nın arkasında `radial-gradient` spotlight, solda 52px Space Grotesk başlık, sağda ürün paneli. Ekranın geri kalanı bu koninin dışında kalır ve bilinçli olarak koyulaşır.

Tek vurgu mint (#6fe8b8) ve işlevi net: birincil buton, aktif adım, veri serisinin birinci kanalı. Mint dolgu üstünde metin daima `--accent-ink` (#04140d); beyaz metin kullanılmaz çünkü mint'in parlaklığı beyazı yutar.

Ürünün kendisi görselin yerine geçer: ekran görüntüsü/panel 14px radius, 1px `--line`, üstte 1px iç parlaklık. Gölge yok; derinlik spotlight ve panelin iç parlaklığıyla kurulur. Bu, "kutu" değil "çıkan ürün" hissi verir.

Giriş `scale-settle`: panel 0.74s içinde 1.04'ten 1'e oturur, kopya 24px yükselir (50ms kademe). Scroll'da panel `scroll-zoom` ile 1.06'dan 1'e gelir; pin yok (lansman sayfası lineer akar). Hover 220ms ve 1.02.

### What is not
- Dark SaaS / Dark Dashboard (151) değildir: orada yoğun operasyonel ızgara ve cyan; burada tek sahne, tek ürün, geniş boşluk.
- Cyberpunk (143) değildir: neon çizgi, glitch ve tarama yok; ışık tek kaynaklı ve yumuşak.
- Aurora UI (35) değildir: hareketli gradient aurora yok, spotlight sabit ve statik.
- Bento Grid (05) değildir: kart mozaiği yerine tek spotlight + tek panel.
- Luxury/Noir Estate (146) değildir: sıcak altın ve fotoğraf yerine soğuk mint ve ürün ekranı.

### Where it comes from
Kök, donanım ve oyun lansmanlarının "sahne" fotoğrafçılığıdır: karanlık salon, tek spot, ortada ürün. Web'e taşındığında ürün ekran görüntüsü panelin içine oturur; spotlight CSS radial-gradient ile kurulur. Bugün işe yaramasının nedeni, tek mesajı tek bakışta vermesi: spotlight dışındaki her şey bilinçli olarak ikinci plandadır.

### Recognition test in 3 seconds
1. Zemin lacivert-siyah (#070b14); hero üst ortasında yumuşak radial spotlight.
2. Tek mint accent; yalnız buton, aktif adım ve seri-1 çizgisinde.
3. Ürün paneli 14px radius, üstte 1px iç parlaklık, gölge yok.
4. Başlık Space Grotesk 700, 52px, `-0.01em`, iki satır.
5. Kart radius 24px ve panel içi 24px boşluk — geniş nefes.

## Visual signature
- Spotlight: `radial-gradient(58% 46% at 50% 0%, color-mix(--accent 22%, transparent), transparent 72%)` hero üstünde; hareket etmez.
- Panel: `box-shadow: inset 0 1px 0 rgba(255,255,255,.06)` + 1px `--line`; radius 24px (kart) / 14px (uygulama paneli).
- Adım göstergesi: 3 nokta, aktif mint ve 24px genişleyen hap.
- Mono etiket 10px `+0.18em`; sayılar (fiyat, süre) Space Grotesk 700 tabular.
- Birincil buton: mint dolgu, `--accent-ink` metin, 10px radius, 48px, altında hafif mint glow (`0 10px 30px -18px`).
- Hover: panel `translateY(-2px)` + çerçeve mint %35; görsel ölçek yok (ürün sabit kalır).
- **Typography:** Space Grotesk (display) + Poppins (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#6fe8b8`; neutral scale `#070b14` → `#eef3fb`.
- **Radius:** `10px` / `24px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Hero'da tek sabit spotlight; hareketli gradient yok.
2. Mint yalnız eylem/aktif/veri kanalı; üstünde `--accent-ink`.
3. Panel radius 24px (kart) / 14px (uygulama), gölge yok, üstte 1px iç parlaklık.
4. Tek birincil + tek ikincil CTA.
5. Sürüm/tarih mono tabular; başlık Space Grotesk 700.
6. Bölüm ritmi ≥ 88px (mobil 48px); ekran başına 1 sahne.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#070b14` | page background | as a card background |
| `--bg-2` | `#04070e` | partition divider floor, table top | button background |
| `--surface` | `#0e1522` | kart, input, modal | full-page background |
| `--surface-2` | `#16202f` | passive chip, hover background | primary button |
| `--ink` | `#eef3fb` | title, body, icon | large background |
| `--ink-soft` | `#b3c1d6` | secondary text, description | — |
| `--ink-faint` | `#7d8ba1` | decorative label, separator text | interactive text |
| `--accent` | `#6fe8b8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04140d` | text above accent | non-accent background |
| `--line` | `rgba(238,243,251,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.67:1** · `ink-soft/bg` **10.79:1** · `ink-faint/bg` **5.7:1 (decorative)** · `accent-ink/accent` **12.52:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 30px (mobile 30px) | 400 | 1.04 | -0.02em |
| H2 | same | 32px | 600 | 1.16 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `10px` (buton, input, chip), `24px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- İkinci neon veya mavi cyan accent
- Mint üstüne beyaz metin
- Hareketli gradient/aurora arka plan
- Kartlarda `--shadow`, 24px üstü radius
- Bounce/elastik easing
- Spotlight dışında gövde metni
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 13.04:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | split hero: solda 52px başlık + 2 CTA, sağda ürün paneli; sabit spotlight ikisinin arkasında | `shots/01-page.png` |
| Dashboard (ürün) | yüksek | 3 KPI + 2 grafik + 6 satırlık tablo; yoğun ama tek accent | `shots/01-page.png` |
| Form / bekleme listesi | düşük | tek alan + mint buton; hata `--danger` 1px + 12px açıklama | `shots/01-page.png` |
| Liste / changelog | orta | satır: sürüm no (mono) + başlık + tarih; 56px | `shots/01-page.png` |
| Boş durum | düşük | "henüz sürüm yok" + ilk adım CTA | `shots/01-page.png` |
| Onboarding | orta | 3 adım nokta göstergesi, aktif mint hap | `shots/01-page.png` |
| Pricing | orta | iki plan; öne çıkanda mint 1px çerçeve + glow | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek panel, tek eylem; spotlight yok | `shots/01-page.png` |
| Modal | orta | 24px radius, mint %35 çerçeve, `--shadow` | `shots/01-page.png` |
| Bildirim | orta | 40px toast, sol 3px mint şerit, 3.4s | `shots/01-page.png` |
| Mobil (390px) | orta | spotlight %80 genişlik, başlık 30px, panel tam kanama | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.67:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.79:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.7:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 12.52:1 | ≥ 4.5 | button text |
| focus ring/ground | 13.04:1 | ≥ 3 | accent ring |
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
| "Oyun arayüzü" gibi | neon çizgi + parlak mint glow her yerde | glow yalnız birincil butonda; çizgiler 1px ve %12 |
| Mint okunmuyor | beyaz metin mint üstünde | mint üstünde `--accent-ink` (12.5:1) |
| Spotlight kirli | iki farklı radial katman | tek spotlight, sabit, %22 opaklık |
| Kart "yüzüyor" | gölge + radius 32px | gölge yok, inset parlaklık + 1px çerçeve |
| Hero sıkışık | spotlight içinde 4 CTA | tek birincil + tek ghost CTA |
| Koyu mod farkı yok | koyu blok kopya | koyu blokta bg daha derin, mint parlaklık +1 kademe |
| Mobilde taşıyor | panel genişliği sabit | panel %100, iç boşluk 16px |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dark-dashboard` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Space+Grotesk | Google Fonts · Space Grotesk — display ölçek ve harf aralığı (700) |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient | MDN · radial-gradient — spotlight katmanı ve opaklık |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast Minimum — mint üstü metin ve gövde eşiği |
| https://www.nngroup.com/articles/landing-page-design/ | Nielsen Norman · Landing page hierarchy — tek mesaj / tek birincil eylem kuralı |

## AI brief

```text
Stil: Product Launch (styles/148-product-launch/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="product-launch"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Grotesk 700) H1 clamp(30px,5vw,52px) 1.06 -0.01em; --font-body (Poppins 400/600) gövde 16px/1.6;
  --font-mono (IBM Plex Mono 400) etiket 10px +.18em büyük harf ve sürüm numarası.
Yüzey: derin lacivert zemin + sabit radial spotlight (mint %22). Panel = --surface + 1px --line + üstte 1px iç parlaklık,
  radius 24px (kart) / 14px (panel), GÖLGE YOK; blur yalnız modal/menüde.
Renk: tek accent mint (--accent), üstünde --accent-ink; ikinci neon, hareketli gradient yok.
Hareket: enter 0.74s cubic-bezier(.22,.9,.24,1) scale-settle 24px st.05 · scroll top 76% 0.7s scroll-zoom 18px once ·
  pin yok · hover 220ms scale 1.02; prefers-reduced-motion zorunlu.
Yasak: İkinci neon veya mavi cyan accent; Mint üstüne beyaz metin; Hareketli gradient/aurora arka plan; Kartlarda `--shadow`, 24px üstü radius; Bounce/elastik easing; Spotlight dışında gövde metni.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Product Launch (product-launch) · family: Stage & Prestige (146–151)
Token: --bg #070b14 · --surface #0e1522 · --ink #eef3fb · --accent #6fe8b8 · --line rgba(238,243,251,.12)
Radius: 10px / 24px · Typography: Space Grotesk / Poppins / IBM Plex Mono
Required: Hero'da tek sabit spotlight; hareketli gradient yok. · Mint yalnız eylem/aktif/veri kanalı; üstünde `--accent-ink`. · Panel radius 24px (kart) / 14px (uygulama), gölge yok, üstte 1px iç parlaklık.
Banned: İkinci neon veya mavi cyan accent · Mint üstüne beyaz metin · Hareketli gradient/aurora arka plan
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="product-launch"] {
  --bg: #070b14; --bg-2: #04070e;
  --surface: #0e1522; --surface-2: #16202f;
  --ink: #eef3fb; --ink-soft: #b3c1d6; --ink-faint: #7d8ba1;
  --accent: #6fe8b8; --accent-ink: #04140d;
  --line: rgba(238,243,251,.12);
  --danger: #e23729;
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
  --radius: 10px; --radius-lg: 24px;
  --shadow: 0 24px 60px -32px rgba(0,0,0,.9); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .16em; --blur: 0px; --grain: 0;
}
```
