# 123 · Comic Story

> **In one sentence:** Comic Story

| | |
|---|---|
| **Feeling** | hareketli, anlatıcı, kaba-mizahi, "kare kare" |
| **Best for** | hikâye/serial okuma, çizgi roman ve webtoon vitrini, çocuk-gençlik ürünü, eğitim içeriğinde adım anlatımı |
| **Avoid** | finansal işlem, kurumsal veri paneli, resmi form, uzun teknik dokümantasyon |
| **Difficulty** | orta (balon/panel dengesi) · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="comic-story"]` |
| **Composition** | `index` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Comic Story, çizgi roman sayfasının okunma mantığını ekrana taşır: **3px mürekkep panel çerçevesi**, **6px oluk** (oluk zemini mürekkep), **yarım ton nokta** gölgelendirme, **kuyruklu konuşma balonu** ve **caption kutusu** (mono uppercase, mürekkep zemin). Tipografi mektup dilidir: Baloo 2 600 (yuvarlak, el yazısına yakın display), Inter gövde, Space Mono caption ve panel numarası. Accent tek: çizgi roman kırmızısı (`#d92b1f`), yalnız efekt etiketi, birincil buton ve aktif işarette.

Kazandığı şey: **akış**. Panel + oluk + balon üçlüsü, kullanıcıyı "sırayla oku" moduna sokar; bu yüzden adım adım anlatım (onboarding, eğitim, hikâye) bu dilde doğal durur. Feda ettiği şey: **yoğunluk ve ciddiyet** — 20 satırlık tablo, form doğrulaması veya işlem onayı bu dilde güven vermez; oralarda yalnız kenar kalınlığı ve başlık hatırlatılır, balon/efekt kapatılır.

### What is not
- **Conceptual Sketch (32) değildir.** O stil el çizimi wireframe ve notlarla **taslak** kurar (Architects Daughter, 1px); burada bitmiş **mürekkep panel** var: 3px kenar, yarım ton, balon, efekt etiketi.
- **Scrapbook (31) değildir.** Scrapbook polaroid/bant/katman gölgesiyle kolaj kurar; burada tek düzlem, 6px oluk ve panel ızgarası var, katman gölgesi yok.
- **Punk Fanzine (95) değildir.** Zine fotokopi greni, ranson punto ve el yazısıyla "DIY" kurar; burada harf sistemi tek (Baloo 2), hareket kare kare (steps), gren düşük (.05) ve balonlar biçimlidir.
- **Pixel Art (24) değildir.** Pixel art 8-bit grid kullanır; burada grid yok, çizgi süreklidir (3px) ve tipografi vektöreldir.
- **"Kalın çerçeveli kart" değildir.** 6px oluk, balon kuyruğu ve caption kutusu olmadan bu stil sadece çerçeveli kutulardır.

### Where it comes from
Çizgi roman 20. yy başında gazete şeritleriyle standartlaştı: **panel** (zaman birimi), **oluk** (zaman aralığı), **balon** (ses) ve **caption** (anlatıcı). Yarım ton baskı, renkli baskının pahalı olduğu dönemde ton geçişini nokta yoğunluğuyla çözdü. Dijitalde bu dil iki yerde döndü: (1) webtoon/serial okuma, (2) adım adım anlatım (onboarding, eğitim) — panel mantığı, "şimdi burada" duygusunu bedava verir.

Klişeye düşmemesi için korunması gereken detay: **oluk oranı ve efekt bütçesi**. Oluğu 16px'e çıkarmak, üç-dört efekt etiketi serpmek veya kenarı 1px'e indirmek stili "çerçeveli blog"a çevirir.

### Recognition test in 3 seconds
1. Paneller arasında **6px oluk** ve oluk zemini **mürekkep** mi (kâğıt değil)?
2. Panel kenarları **3px** mi; 1px ince çerçeve var mı?
3. Bir yerde **kuyruklu konuşma balonu** ve mono uppercase **caption kutusu** var mı?
4. Panel köşesinde **yarım ton nokta** (7px grid) ve accent **efekt etiketi** (12° eğik) görünüyor mu?
5. Display **yuvarlak ve kalın** (Baloo 2 600) mı; accent tek kırmızı ve ekranın ≤ %10'unda mı?

## Visual signature
- **Panel ızgarası:** `gap: 6px`, konteyner zemini `--ink`, padding 6px, çocuklar `--surface` + 2px radius.
- **Mürekkep çerçeve:** tüm paneller `3px solid var(--ink)`; nav altı ve divider da 3px — 1px kenar yok.
- **Konuşma balonu:** 3px kenar + 14px radius + 14×14px kuyruk (45° döndürülmüş kenarlar); `::after` ile.
- **Caption kutusu:** `.eyebrow` mürekkep zemin + kâğıt metin, 3px 8px padding, 2px radius, mono uppercase.
- **Yarım ton:** 7px nokta gridi, opacity `.28`, panelin sağ alt köşesinde 96×96px, maskeyle sınırlı.
- **Efekt etiketi:** accent zemin + 3px mürekkep kenar + `rotate(12deg)` + sert gölge; ekran başına 1 ("HOOOP!").
- **Sert gölge:** `4px 4px 0 var(--ink)` — yalnız hero görseli, efekt etiketi, modal ve buton hover.
- **Typography:** Baloo 2 (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#d92b1f`; neutral scale `#f8f2e2` → `#111114`.
- **Radius:** `4px` / `8px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Panel + oluk:** her panel `3px var(--ink)`, oluk **6px** ve oluk zemini mürekkep; 16px boşluk kullanılmaz.
2. **Balon bütçesi:** panel başına en fazla 1 balon, en fazla 3 satır; kuyruk 14×14px.
3. **Caption zorunlu:** her panelde 1 mono caption (bölüm/kare bilgisi); caption'sız panel yok.
4. **Tek efekt:** ekran başına 1 efekt etiketi (12° eğik, accent, 3px kenar).
5. **Yarım ton sınırlı:** 7px nokta gridi, `%28`, panelin bir köşesinde 96×96px.
6. **Accent ≤ %10:** kırmızı yalnız efekt, birincil buton, odak halkası ve hata.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f8f2e2` | page background | as a card background |
| `--bg-2` | `#f0e8d3` | partition divider floor, table top | button background |
| `--surface` | `#fffdf6` | kart, input, modal | full-page background |
| `--surface-2` | `#ece4cd` | passive chip, hover background | primary button |
| `--ink` | `#111114` | title, body, icon | large background |
| `--ink-soft` | `#494a45` | secondary text, description | — |
| `--ink-faint` | `#75766e` | decorative label, separator text | interactive text |
| `--accent` | `#d92b1f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff8f2` | text above accent | non-accent background |
| `--line` | `rgba(17,17,20,.22)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.87:1** · `ink-soft/bg` **8:1** · `ink-faint/bg` **4.11:1 (decorative)** · `accent-ink/accent` **4.63:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 32px (mobile 32px) | 700 | 1.1 | 0.01em |
| H2 | same | 30px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15.5px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.2em |
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
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Serif aile, 1px ince kenar, yumuşak gölge.
- Gradient, blur, cam yüzey, suluboya/soft-light efekti.
- Birden fazla efekt etiketi veya onomatopoeia (gürültü).
- Balon içinde 3 satırdan uzun replik; 15.5px altı gövde.
- İkinci accent (mavi/sarı) ve çok renkli panel zemini.
- Sürekli döngü, kayan panel animasyonu, parallax.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.78:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 6/3/3 panel + efekt etiketi + caption | `shots/01-page.png` |
| Dashboard | orta | Panel ızgarası, mono sayılar, efekt yok | `shots/01-page.png` |
| Form | düşük | 46px alanlar, 3px kenar, 3px odak halkası | `shots/01-page.png` |
| Liste / tablo | orta | 40px satır: kare no, başlık, sayfa no | `shots/01-page.png` |
| Boş durum | orta | Boş panel + balon ("burada henüz bir kare yok") + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 panel: sorun → çözüm → sonuç; her panelde 1 caption | `shots/01-page.png` |
| Pricing | orta | 3 panel; önerilen panel accent başlık bandı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Efekt/balon yok; 3px kenar + tek accent buton | `shots/01-page.png` |
| Modal | orta | 3px çerçeve + sert gölge, perde %55 | `shots/01-page.png` |
| Bildirim / toast | orta | Balon biçimli toast, 2600ms | `shots/01-page.png` |
| Hata | düşük | `--accent` kenar + `!` + mono açıklama | `shots/01-page.png` |
| Profil / ayar | orta | Ayar paneli: başlık (Baloo) + satırlar (mono) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.87:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.11:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.63:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.78:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.7 | ≥ 60 target | thin text |

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
| "Çerçeveli blog" gibi | kenar 1px'e inmiş, oluk 16px | 3px kenar + 6px mürekkep oluk |
| Sayfa gürültülü | 3-4 efekt etiketi, her panelde balon | Efekt 1, balon panel başına 1 |
| Okuma akışı kayboluyor | panel hizaları rastgele | 6/3/3 ya da 6/6 ızgara; geniş panel 1 |
| Balon "çıkartma" gibi | kuyruk yok, radius 4px | 14px radius + 14×14px kuyruk |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 4px 4px 0 #4a4741` |
| Erişilebilirlik ihlali | accent üstünde 12px mono metin | Efekt metni 22px/600; küçük metin accent zemin üstünde yasak |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `conceptual-sketch` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `punk-fanzine` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `scandinavian-dark` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Comics | Comics — Wikipedia — panel ızgarası, oluk ve okuma akışı |
| https://en.wikipedia.org/wiki/Speech_balloon | Speech balloon — Wikipedia — balon biçimi, kuyruk ve caption kutusu |
| https://en.wikipedia.org/wiki/Halftone | Halftone — Wikipedia — nokta dokusu yoğunluğu ve yönü |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | WCAG 2.2 · Text Spacing — balon içi satır aralığı ölçütü |

## AI brief

```text
Stil: Comic Story (styles/123-comic-story/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="comic-story"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Baloo 2 600 (H1 50px / 1.0, mobil 32px), govde Inter 400 15.5/1.62 (<= 52ch),
  caption/panel no Space Mono 11px .1em uppercase. Serif ve 1px kenar yasak.
Yuzey: panorama 3px var(--ink) kenar; paneller arasi TAM 6px oluk ve oluk zemini var(--ink).
  Radius 4px / 8px (buton-input 2px, balon 14px). Sert golge var(--shadow-hard) yalniz hero,
  efekt etiketi, modal ve buton hover'da.
Renk: gazete kagidi #f8f2e2 + murekkep #111114 + TEK accent kirmizi #d92b1f (ekranin <= %10'u).
Imza: konusma balonu (3px kenar, 14px radius, 14x14 kuyruk); mono uppercase caption kutusu;
  yarim ton nokta (7px grid, %28, panel kosesinde 96px); 12 derece egik efekt etiketi (ekran basina 1).
Hareket: enter 280ms steps(3,end) 22px stagger 45ms; scroll top 90% / 340ms / 20px / once;
  hover 120ms imageScale 1.016; pin kapali. prefers-reduced-motion zorunlu.
Yasak: serif, 1px kenar, yumusak golge, gradient/blur, coklu efekt etiketi, 3 satirdan uzun balon,
  ikinci accent, dongu/parallax.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Comic Story (comic-story) · family: Playful (116–125)
Token: --bg #f8f2e2 · --surface #fffdf6 · --ink #111114 · --accent #d92b1f · --line rgba(17,17,20,.22)
Radius: 4px / 8px · Typography: Baloo 2 / Inter / Space Mono
Required: **Panel + oluk:** her panel `3px var(--ink)`, oluk **6px** ve oluk zemini mürekkep; 16px boşluk kullanılmaz. · **Balon bütçesi:** panel başına en fazla 1 balon, en fazla 3 satır; kuyruk 14×14px. · **Caption zorunlu:** her panelde 1 mono caption (bölüm/kare bilgisi); caption'sız panel yok.
Banned: Serif aile, 1px ince kenar, yumuşak gölge. · Gradient, blur, cam yüzey, suluboya/soft-light efekti. · Birden fazla efekt etiketi veya onomatopoeia (gürültü).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="comic-story"] {
  --bg: #f8f2e2; --bg-2: #f0e8d3;
  --surface: #fffdf6; --surface-2: #ece4cd;
  --ink: #111114; --ink-soft: #494a45; --ink-faint: #75766e;
  --accent: #d92b1f; --accent-ink: #fff8f2;
  --line: rgba(17,17,20,.22);
  --danger: #d5291c;
  --danger-ink: #ffffff;
  --ok: #008037;
  --ok-ink: #ffffff;
  --warn: #b45200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0;
}
```
