# 103 · Motion Trail

> **In one sentence:** Her hareket eden öğenin arkasında üç kademeli solan bir iz bıraktığı, hızın kalıcı bir görsel öğe olarak tasarlandığı açık zeminli hareket arayüzü.

| | |
|---|---|
| **Feeling** | hızlı, akıcı, sportif, kararlı |
| **Best for** | ürün lansmanı, spor/etkinlik sayfası, hareketli portfolyo, kampanya hero'su |
| **Avoid** | klinik/sağlık ekranları, muhasebe tabloları, uzun form akışları — iz dikkat dağıtır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="motion-trail"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Motion Trail, hareketi **kalıcı bir görsel dil** yapar: bir öğe yer değiştirdiğinde arkasında %40 / %20 / %8 opaklıkta üç kopya bırakır; iz 300ms içinde söner. Sayfa açık ve sıcaktır (kırık beyaz), çünkü iz burada karanlıkta parlama değil **mürekkep kayması** gibi okunur.

Üç kurucu karar: (1) **üç kopya sınırı** — dörtten fazla kopya ekranı kirletir; (2) **tek yön** — bir ekranda iz hep aynı yöne akar (sol→sağ), karışık yön hareketi kaosa çevirir; (3) **büyük stagger** — 0.13'lük kademe gecikmesi izin okunması için kasıtlı olarak yavaştır; hızlı stagger izi görünmez kılar.

Display **Anton**'dur: tek ağırlık, dar ve yüksek kontrastlı harfler hız hissini tipografide de taşır. Gövde Inter, etiketler IBM Plex Mono. Yumuşak köşeler (20/28px) izin yuvarlak, akıcı doğasına uyar.

Bedeli: bu stil hareket olmadan da anlaşılır olmalıdır — bu yüzden iz statik karede bile (hero görselinin soluk halkaları) görünür ve `prefers-reduced-motion` altında tamamen kapanır.

### What is not
- **Kinetic Type (37) değildir:** 37 koyu zeminde dev tipografiyi hareket ettirir (harf animasyonu); Motion Trail açık zeminde **bileşen izini** gösterir, tipografi sabittir.
- **Neo-Brutalism (13) değildir:** 13 kalın siyah kontur ve sert gölge kullanır; burada yumuşak gölge ve 20/28px radius vardır; iz efekti 13'te yoktur.
- **Grand Tourer (41) değildir:** 41 lüks otomotiv vitrinidir (Cinzel, geniş boşluk, sakin); Motion Trail Anton + iz katmanlarıyla hızı öne çıkarır.
- **Minimalism (01) değildir:** 01 hareketi minimuma indirir; Motion Trail'de hareket başlı başına bir imza öğesidir.

### Where it comes from
Uzun pozlama fotoğrafçılığı (hareket bulanıklığı), spor yayıncılığındaki hız çizgileri, 2010'ların "speed line" poster dili ve modern ürün lansmanlarında yeniden popülerleşen trail efektleri. Ekranda yeniden kullanılmasının nedeni: kullanıcıya "bu nesne az önce hareket etti" bilgisini **tek karede** vermesi — konum değişimini anlatan en ekonomik görsel araç. Klişeye dönüşmemesi için korunacak detay: izin üç kopyayla sınırlı kalması ve 300ms'de sönmesi; kalıcı iz "hatalı render" gibi görünür.

### Recognition test in 3 seconds
1. Açık, kırık beyaz zemin; hero görselinin arkasında 8px ve 16px kaymış iki soluk accent çerçeve var.
2. Başlık Anton: dar, çok kalın, tek ağırlık.
3. Butonlar ve chip'ler hap formunda (999px), kartlar 20–28px radius.
4. Hover'da öğe iz bırakarak kayıyor; iz 300ms içinde sönüyor.
5. Accent kavrulmuş turuncu yalnız izde ve birincil eylemde.

## Visual signature
- **Üç iz kopyası:** `%40 / %20 / %8` opaklık, hareket yönünde 8/16/24px offset.
- **Sönüm:** 300ms `cubic-bezier(.15,.8,.3,1)`; iz kalıcı değil.
- **Statik iz:** hero görselinin arkasında `translate(-8px, 0)` %20 ve `translate(-16px, 0)` %8 accent çerçeve.
- **Hap kontrol:** buton, chip, avatar 999px; kart `--radius` 20px, `--radius-lg` 28px.
- **Anton başlık:** 52px, ağırlık 400, satır aralığı 1.02, tracking −0.01em.
- **Gölge:** tek katman `0 18px 44px -32px rgba(20,22,26,.55)` — izin altında yumuşak zemin.
- **Doku:** `--grain: 0`; doku izden gelir.
- **Typography:** Anton (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#a8500f`; neutral scale `#f5f3ef` → `#14161a`.
- **Radius:** `20px` / `28px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. İz en fazla üç kopya: %40 / %20 / %8 opaklık, hareket yönünde 8/16/24px offset
2. İz yönü ekran başına tek (sol→sağ veya yukarı→aşağı)
3. Hover ve geçişte iz 300ms içinde söner; kalıcı iz yoktur
4. Stagger 0.13 — izin okunması için kasıtlı olarak büyük
5. Anton yalnız başlıkta; gövde Inter, etiket mono
6. Accent (turuncu) yalnız hareket eden öğenin izinde ve birincil eylemde

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f5f3ef` | page background | as a card background |
| `--bg-2` | `#ecebe6` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f0eeea` | passive chip, hover background | primary button |
| `--ink` | `#14161a` | title, body, icon | large background |
| `--ink-soft` | `#4c5157` | secondary text, description | — |
| `--ink-faint` | `#7d838a` | decorative label, separator text | interactive text |
| `--accent` | `#a8500f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(20,22,26,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.34:1** · `ink-soft/bg` **7.23:1** · `ink-faint/bg` **3.45:1 (decorative)** · `accent-ink/accent` **5.5:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 32px (mobile 32px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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

- Üçten fazla iz kopyası veya kalıcı iz.
- Renkli/blur'lu iz, neon kuyruk.
- Aynı ekranda iki farklı iz yönü.
- 28px üzeri radius, köşeli kart (bu stil yumuşak form dilidir).
- Fotoğraf üstüne iz bindirme.
- `prefers-reduced-motion` açıkken hareket ettirmeye devam etmek.
- Klinik/muhasebe bağlamında iz kullanmak.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.5:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | İz paneli 7/5; hero görselinin arkasında iki soluk çerçeve | `shots/01-page.png` |
| Dashboard | düşük | İz yalnız hover ve geçişlerde; tabloda kayma 4px | `shots/01-page.png` |
| Form | düşük | 44px alanlar, 20px radius, hata satırı | `shots/01-page.png` |
| Liste / tablo | düşük | 44px satır, hover'da sağa 4px kayma | `shots/01-page.png` |
| Boş durum | orta | Boş alanda tek iz çizgisi + birincil eylem | `shots/01-page.png` |
| Onboarding | yüksek | Adımlar soldan sağa iz bırakarak geçer | `shots/01-page.png` |
| Pricing | orta | Kartlar hap checklist; öne çıkan kart accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | İz kapalı (odak formu), tek panel | `shots/01-page.png` |
| Modal | orta | Açılışta 2 iz kopyası, 300ms'de söner | `shots/01-page.png` |
| Bildirim / toast | orta | Sağdan girip iz bırakarak durur | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + hata metni; iz yok | `shots/01-page.png` |
| Profil / ayar | orta | İz yoğunluğu ve süre tercihi (kapalı/açık) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.34:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.23:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.45:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.5:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.5:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.8 | ≥ 60 target | thin text |

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
| Ekran "kirli" | iz kalıcı | 300ms sönüm + üç kopya sınırı |
| Hareket anlaşılmıyor | stagger çok küçük | 0.13'e çıkar |
| "Hatalı render" hissi | iz metnin üstünde | `pointer-events:none` + z-index altta |
| Yön karmaşası | iki farklı iz yönü | ekran başına tek yön |
| Başlık taşıyor | Anton geniş harf + uzun kelime | `max-width` ch ile sınırla |
| Mobilde ağır | tam offset + gölge | mobilde offset yarı, gölge tek katman |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `kinetic-type` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Motion_blur | Motion blur · Wikipedia — iz uzunluğu ve sönüm oranı |
| https://m3.material.io/styles/motion/transitions | Material 3 · Motion transitions — geçiş süresi ve sönüm eğrisi |
| https://www.nngroup.com/articles/animation-duration/ | Nielsen Norman · Animation duration — 300ms hover/geri bildirim aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html | WCAG 2.2 · Motion actuation — hareketi kapatma zorunluluğu |

## AI brief

```text
Stil: Motion Trail (styles/103-motion-trail/style.md, tokens.json)
Token: sadece [data-style="motion-trail"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Anton 400 (yalnız başlık, tracking -0.01em), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 11/12/13/16/20/28/52; gövde ölçü 66ch.
Yüzey: kırık beyaz zemin; radius 20/28px, hap kontrol 999px, tek katman gölge.
Imza: iz katmanları — %40/%20/%8 opaklık, 8/16/24px offset, tek yön, 300ms sönüm;
  hero görselinin arkasında iki soluk accent çerçeve (statik iz).
Renk: tek accent #a8500f (iz + birincil eylem); ikinci iz rengi yok.
Hareket: enter .37s cubic-bezier(.15,.8,.3,1) y10 stagger .13; scroll top 84% .49s y14 once;
  1 pin scrub 1.15 (+140%); hover 300ms scale 1.045; reduced-motion'da iz oluşmaz.
Yasak: kalıcı iz, renkli/blur iz, iki yön, 28px üstü radius, klinik bağlamda iz.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Motion Trail (motion-trail) · family: Motion & Optics (96–105)
Token: --bg #f5f3ef · --surface #ffffff · --ink #14161a · --accent #a8500f · --line rgba(20,22,26,.12)
Radius: 20px / 28px · Typography: Anton / Inter / IBM Plex Mono
Required: İz en fazla üç kopya: %40 / %20 / %8 opaklık, hareket yönünde 8/16/24px offset · İz yönü ekran başına tek (sol→sağ veya yukarı→aşağı) · Hover ve geçişte iz 300ms içinde söner; kalıcı iz yoktur
Banned: Üçten fazla iz kopyası veya kalıcı iz. · Renkli/blur'lu iz, neon kuyruk. · Aynı ekranda iki farklı iz yönü.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="motion-trail"] {
  --bg: #f5f3ef; --bg-2: #ecebe6;
  --surface: #ffffff; --surface-2: #f0eeea;
  --ink: #14161a; --ink-soft: #4c5157; --ink-faint: #7d838a;
  --accent: #a8500f; --accent-ink: #ffffff;
  --line: rgba(20,22,26,.12);
  --danger: #d62a1d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55300;
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
  --shadow: 0 18px 44px -32px rgba(20,22,26,.55); --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
