# 124 · Album Sleeve

> **In one sentence:** Album Sleeve

| | |
|---|---|
| **Feeling** | koleksiyonluk, analog, sakin-gururlu, "rafa konulacak" |
| **Best for** | müzik/albüm yayını, sanatçı diskografisi, podcast/season kapağı, sınırlı baskı satışı, plak mağazası |
| **Avoid** | yoğun işlem formu, kurumsal dashboard, sağlık/random veri ekranı, hızlı kampanya sayfası |
| **Difficulty** | düşük–orta (oran ve sırt disiplini) · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="album-sleeve"]` |
| **Composition** | `index` · `pill` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Album Sleeve, 12 inç plak kılıfının ölçüsünü ekrana taşır: **1:1 kare kapak**, sol kenarda **26px mürekkep sırt şeridi** (dikey yazı: `LP · 33 1/3 RPM`), sağ altta **78×30px barkod dizisi**, sağda **A/B iki yüzlü parça listesi** ve mono **katalog numarası**. Tipografi analog baskı dilidir: Anton 400 (sıkı, yüksek display), Space Grotesk gövde, IBM Plex Mono etiket/süre. Accent tek: kiremit (`#cf3b0c`), yalnız katalog kutusu, birincil buton ve aktif işarette.

Kazandığı şey: **nesne ağırlığı**. Kapak + sırt + parça listesi üçlüsü, dijital bir sayfayı "basılı bir obje" gibi okutur; süre kolonunun mono hizası albümü taranabilir kılar. Feda ettiği şey: **esneklik** — 1:1 oran geniş ekranda boşluk bırakır, kılıf büyütülmez; liste ekranlarında kapak küçültülür, oran değişmez.

### What is not
- **Vaporwave (20) değildir.** Vaporwave pastel/mor, VHS çizgisi ve kolajla **nostalji parodisi** kurar; burada mat kâğıt, tek accent, sırt şeridi ve gerçek parça listesi var.
- **Y2K (19) değildir.** Y2K krom/parlak plastik ve buz mavisiyle dönemsel parlaklık kurar; burada yüzey mat, gölge çok hafif (`0 2px 10px`).
- **Product Catalog (91) değildir.** Catalog kod–ad–ölçü–fiyat dört sütunu ve swatch'larla ticari katalog kurar; burada parça listesi (A/B + süre) ve sırt şeridi karakterdir, fiyat yoktur.
- **Poetry Chapbook (90) değildir.** Chapbook dar ölçü ve geniş kenarla şiir okuması kurar; burada kare kapak ve tablo hizası var.
- **"Büyük görsel + başlık" değildir.** Sırt şeridi, barkod ve iki yüzlü parça listesi olmadan bu stil sadece bir kapak vitrinidir.

### Where it comes from
12 inç LP kılıfı 1950'lerde standartlaştı: **313×313 mm**, sırt şeridinde sanatçı/albüm adı (rafta görünen tek yüz), arka yüzde A/B parça listesi ve süreler, köşede katalog numarası. Dijitalde bu biçim 2010'lardan sonra "albüm yayını" ve "sınırlı baskı" kültürüyle döndü; nedeni ölçülebilir — kare kapak, akış içinde tek bakışta tanınır ve platformlar arası aynı kalır.

Klişeye düşmemesi için korunması gereken detay: **sırt şeridi ve oran**. Sırtı kaldırmak, kapağı 16:9'a çevirmek veya parça listesini ortalamak stili "müzik uygulaması kartı"na indirger.

### Recognition test in 3 seconds
1. Kapak **1:1 kare** mi ve sol kenarında **26px dikey sırt şeridi** var mı?
2. Parça listesi **A / B** yüz başlıklarına ayrılmış mı; süreler **mono ve sağa dayalı** mı?
3. Bir yerde **mono katalog numarası** (`CAT. NO. LP-124`) ve **barkod dizisi** var mı?
4. Display **Anton** (sıkı, çok kalın) mı; gövde Space Grotesk, etiket mono mu?
5. Accent **kiremit** ve ekranın ≤ %8'inde mi; gölge çok hafif, radius ≤ 4px mi?

## Visual signature
- **1:1 kılıf:** `aspect-ratio: 1/1`, `border: 1px solid var(--line)`, `box-shadow: var(--shadow)`; kapak kartı oranını asla kaybetmez.
- **Sırt şeridi:** sol kenarda 26px (mobil 20px) mürekkep şerit; `writing-mode: vertical-rl`, mono 9px, `.22em` tracking.
- **Barkod:** 78×30px, `repeating-linear-gradient(90deg, ink 0 2px, transparent 2px 4px, ink 4px 5px, transparent 5px 9px)`; dekoratif, taranmaz.
- **Katalog kutusu:** mono 10px `.16em`, accent zemin + `--accent-ink`, padding 4px 8px; hero sol üstte.
- **İki yüzlü parça listesi:** `A` / `B` başlıkları mono 10px `.14em`; satır 34px; süre `tabular-nums` sağa dayalı.
- **Hafif gölge:** `0 2px 10px rgba(19,20,24,.10)`; kart/panel gölgesiz, yalnız kılıf ve modal.
- **Keskin köşe:** radius 2px (kart/kılıf), 4px (modal); buton 0; pill yok.
- **Typography:** Anton (display) + Space Grotesk (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#cf3b0c`; neutral scale `#ecebe4` → `#131418`.
- **Radius:** `2px` / `4px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **1:1 kılıf:** kapak `aspect-ratio: 1/1`; oran hiçbir breakpoint'te değişmez.
2. **Sırt şeridi:** sol kenarda 26px (mobil 20px) dolu şerit + dikey mono yazı; şerit kaldırılmaz.
3. **A/B listesi:** iki yüz başlığı, satırda no + ad + süre; süre mono ve sağa dayalı.
4. **Katalog kimliği:** mono `CAT. NO.` kutusu ve barkod dizisi görünür (barkod dekoratif).
5. **Accent ≤ %8:** kiremit yalnız katalog kutusu, birincil buton, aktif işaret.
6. **Keskin yüzey:** radius 2/4px, buton 0; gölge yalnız kılıf ve modalda, çok hafif.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ecebe4` | page background | as a card background |
| `--bg-2` | `#e2e0d8` | partition divider floor, table top | button background |
| `--surface` | `#fbfaf5` | kart, input, modal | full-page background |
| `--surface-2` | `#e6e4da` | passive chip, hover background | primary button |
| `--ink` | `#131418` | title, body, icon | large background |
| `--ink-soft` | `#45474e` | secondary text, description | — |
| `--ink-faint` | `#74767c` | decorative label, separator text | interactive text |
| `--accent` | `#cf3b0c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff8f2` | text above accent | non-accent background |
| `--line` | `rgba(19,20,24,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.4:1** · `ink-soft/bg` **7.76:1** · `ink-faint/bg` **3.8:1 (decorative)** · `accent-ink/accent` **4.66:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 40px (mobile 40px) | 700 | 1.1 | 0.01em |
| H2 | same | 34px | 600 | 1.2 | 0.01em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.2em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- Dönen plak / iğne animasyonu, sürekli döngü.
- Kapak oranını 16:9 veya serbest orana çevirmek.
- Gradient "vinil parlaması", blur, cam yüzey, renkli gölge.
- 4px üstü radius, pill buton, yuvarlak avatar.
- İkinci accent (mavi/yeşil) ve renkli "single/yeni" rozetleri.
- Parça listesinde orantılı sayı veya ortalanmış süre.
- Infinite blinking indicator (no animation in v6).
- More than three status colors.
- Serif title in HUD.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 2px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 2px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 2px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.69:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px block icon, 16/20px canvas; no anti-alias, integer scale |
| photo | In-game rendering or single object shooting; 25% area, dark vignette |
| illustration | Sprite/silhouette: up to 3 tones (accent, ink, surface-2) |
| Texture | Static raster (1px/3px, 4%) on section background only |
| Logo | Top left 20px, uppercase, mono or display |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Primary focus is on one big number/score; second focus single CTA; the rest is label.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 66px Anton başlık + 1:1 kılıf + sırt şeridi + katalog kutusu | `shots/01-page.png` |
| Dashboard | orta | Son çalınanlar listesi + küçük kılıflar (1:1) | `shots/01-page.png` |
| Form | düşük | 44px alan, 0–2px radius, mono etiket | `shots/01-page.png` |
| Liste / tablo | yüksek | A/B parça listesi, süreler mono sağa dayalı | `shots/01-page.png` |
| Boş durum | orta | Boş kılıf çerçevesi (1:1) + tek cümle + 1 buton | `shots/01-page.png` |
| Onboarding | orta | 3 adım: sanatçı → albüm → çalma listesi | `shots/01-page.png` |
| Pricing | orta | 3 baskı (LP / CD / dijital); fiyat mono, sağa dayalı | `shots/01-page.png` |
| Giriş / ödeme | düşük | Süs yok; kılıf küçük, form önde | `shots/01-page.png` |
| Modal | orta | Büyük kapak + tam parça listesi, perde %55 | `shots/01-page.png` |
| Bildirim / toast | orta | Mono metin + 6px accent kare, 3200ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama; barkod/sırt yok | `shots/01-page.png` |
| Profil / ayar | orta | Diskografi ızgarası (1:1 kılıflar), mono etiketler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.4:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.76:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.8:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.66:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.69:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93 | ≥ 60 target | thin text |

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
| "Müzik uygulaması kartı" gibi | sırt şeridi kaldırılmış, oran 16:9 | 1:1 + 26px sırt şeridi geri getir |
| Liste okunmuyor | süreler ortalanmış, orantılı sayı | Sağa dayalı mono + `tabular-nums` |
| Kapak "yüzüyor" | kalın gölge/çerçeve | `0 2px 10px` tek hafif gölge, 1px kenar |
| Sırt yazısı taşıyor | yatay yazı kullanılmış | `writing-mode: vertical-rl`, mono 9px `.22em` |
| Accent her yerde | ikinci renk + rozetler | Tek kiremit; durum bilgisi mono metinle |
| Mobilde oran bozuluyor | sabit yükseklik verilmiş | Yalnız `aspect-ratio: 1/1`; yükseklik serbest |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `product-catalog` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Album_cover | Album cover — Wikipedia — 12 inç kılıf oranı ve sırt yazısı geleneği |
| https://en.wikipedia.org/wiki/LP_record | LP record — Wikipedia — 33 1/3 RPM, A/B yüz ayrımı, süreler |
| https://www.discogs.com/ | Discogs — katalog numarası, etiket bilgisi, parça listesi düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — küçük mono etiket kontrastı |

## AI brief

```text
Stil: Album Sleeve (styles/124-album-sleeve/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="album-sleeve"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Anton 400 (H1 66px / .92 / -.015em, mobil 40px), govde Space Grotesk 400 15/1.68
  (<= 50ch), etiket IBM Plex Mono 10.5px .14em, sure/parca no mono 11px tabular.
  Anton'da sahte kalin, serif ve govdede 16px ustu punto yasak.
Yuzey: kilif aspect-ratio 1/1, radius var(--radius), tek hafif golge var(--shadow); panel golgesiz.
  Radius 2/4px, buton ve chip 0px.
Renk: raf kagidi #ecebe4 + murekkep #131418 + tek accent kiremit #cf3b0c (ekranin <= %8'i).
Imza: sol kenarda 26px (mobil 20px) SIRT SERIDI + dikey mono yazi (writing-mode: vertical-rl);
  A/B iki yuzlu parca listesi (sure mono saga dayali); mono katalog kutusu (CAT. NO.);
  kapak sag altinda 78x30px barkod cizgi dizisi.
Hareket: enter 900ms cubic-bezier(.4,.05,.2,1) 18px stagger 100ms; scroll top 80% / 950ms / 24px / once:false;
  pin acik scrub 0.7 +110%; hover 380ms imageScale 1.062. prefers-reduced-motion zorunlu.
Yasak: donen plak/igne animasyonu, 1:1 disi oran, gradient vinil parlamasi, blur/cam,
  4px ustu radius, pill buton, ikinci accent, orantisiz sure.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Album Sleeve (album-sleeve) · family: Playful (116–125)
Token: --bg #ecebe4 · --surface #fbfaf5 · --ink #131418 · --accent #cf3b0c · --line rgba(19,20,24,.18)
Radius: 2px / 4px · Typography: Anton / Space Grotesk / IBM Plex Mono
Required: **1:1 kılıf:** kapak `aspect-ratio: 1/1`; oran hiçbir breakpoint'te değişmez. · **Sırt şeridi:** sol kenarda 26px (mobil 20px) dolu şerit + dikey mono yazı; şerit kaldırılmaz. · **A/B listesi:** iki yüz başlığı, satırda no + ad + süre; süre mono ve sağa dayalı.
Banned: Dönen plak / iğne animasyonu, sürekli döngü. · Kapak oranını 16:9 veya serbest orana çevirmek. · Gradient "vinil parlaması", blur, cam yüzey, renkli gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="album-sleeve"] {
  --bg: #ecebe4; --bg-2: #e2e0d8;
  --surface: #fbfaf5; --surface-2: #e6e4da;
  --ink: #131418; --ink-soft: #45474e; --ink-faint: #74767c;
  --accent: #cf3b0c; --accent-ink: #fff8f2;
  --line: rgba(19,20,24,.18);
  --danger: #d02015;
  --danger-ink: #ffffff;
  --ok: #007b33;
  --ok-ink: #ffffff;
  --warn: #af4d00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 2px 10px rgba(19,20,24,.10); --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.015em; --blur: 0px; --grain: 0;
}
```
