# 95 · Punk Fanzine

> **In one sentence:** Punk Fanzine

| | |
|---|---|
| **Feeling** | kaba, acil, el yapımı, öfkeli-neşeli |
| **Best for** | etkinlik/line-up afişi, bağımsız yayın ve zine vitrini, müzik-punk markası, topluluk duyurusu |
| **Avoid** | ödeme/güvenlik akışı, sağlık ve resmi form, kurumsal yatırımcı sunumu, yaşlı kullanıcı ağırlıklı arayüz |
| **Difficulty** | yüksek (kaosu ölçülü tutmak) · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="punk-fanzine"]` |
| **Composition** | `index` · `pill` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Punk Fanzine, 1970'lerin fotokopi zine estetiğidir: **gri kâğıt**, **1-bit mürekkep**, **2px kenar**, **sert ofset gölge** (`4px 4px 0`), kes-yapıştır şeritler (en fazla 2 öğe ±0.8–1.4°) ve tek **damga kırmızısı** (`#cf1f2b`). Tipografi bilinçli olarak heterojendir: başlıkta el yazısı **Kalam 700**, gövdede daktilo **Courier Prime**, etiketlerde **Share Tech Mono**; bir başlık satırında en fazla üç farklı ses (ranson punto) kullanılır.

Kazandığı şey: **aciliyet ve sahiplik**. Gren, döndürme ve zımba izleri sayfayı "biri az önce elle yapıştırdı" hissine getirir; bu yüzden etkinlik ve bağış çağrısı gibi hızlı eylem gerektiren bağlamlarda hatırlanır. Feda ettiği şey: **güven ve ölçülülük** — aynı dili ödeme/onay ekranına taşımak kullanıcıyı tedirgin eder; o ekranlarda stil yalnız tipografi ve kenar kalınlığıyla hatırlatılır, döndürme ve gren kapatılır.

### What is not
- **Scrapbook (31) değildir.** Scrapbook polaroid, bant ve katman gölgesiyle **anı defteri** kurar (Fraunces/Inter, açık pastel); burada **1-bit mürekkep**, toner greni `.12`, el yazısı Kalam ve daktilo Courier var; gölge sert ofset.
- **Anti-Design (14) değildir.** Anti-design kasıtlı kaosu ızgara bozarak kurar (Anton/Space Grotesk, `cubic-bezier(.2,.9,.2,1)`, 0.035 stagger); burada ızgara korunur, **yalnız 2 öğe** döndürülür ve hareket **steps(2)**.
- **Neo-Brutalism (13) değildir.** Neo-brutalism parlak sarı/pembe bloklar ve 2px siyah kenarla "oyuncu" dil kurar; burada palet **gri kâğıt + siyah + damga kırmızısı**, gren yüksek, tipografi el yazısı/daktilo.
- **Pixel Art (24) değildir.** Pixel art 8-bit grid ve sınırlı paletle dijital nostalji kurar; burada bozulma **fotokopi** kaynaklıdır (toner, yarım ton), piksel grid yok.
- **"Sadece eğik kart" değildir.** Toner greni, 2px kenar, sert gölge ve ranson punto olmadan bu stil sadece dağınık bir düzendir.

### Where it comes from
Zine, 1930'ların amatör dergilerinden (fanzine) 1970'lerde punk sahnesine geçti: fotokopi makinesi ucuzladı, üretim dağıtımdan ayrıldı, herkes kendi yayınını yapabildi. Estetiği **zorunluluktan** doğdu: toner bitiyor, kâğıt kayıyor, harfler kesilip yapıştırılıyor. Dijitalde 2010'lardan sonra bu dil "bağımsız/DIY" işareti olarak geri döndü; nedeni ölçülebilir — yüksek kontrast + el yazısı + tek renk, küçük ekranda bile kimlik taşır.

Klişeye düşmemesi için korunması gereken detay: **tek renk ve döndürme bütçesi**. İkinci bir accent eklemek, 4-5 öğeyi döndürmek veya gren yerine gradient kullanmak stili "ucuz retro tema"ya çevirir.

### Recognition test in 3 seconds
1. Zemin **gri kâğıt ve grenli** mi (3px tarama, `--grain: .12`); kart yüzeyleri temiz mi?
2. Kenarlar **2px mürekkep** mi; bir öğede **sert ofset gölge** (blur'suz, 4px) var mı?
3. Başlık **el yazısı** mı (Kalam 700), gövde **daktilo** (Courier Prime), etiketler mono mu?
4. En fazla **2 öğe** hafifçe döndürülmüş mü (±0.8–1.4°), daha fazlası değil mi?
5. Tek renk **damga kırmızısı** mı; ekranın ≤ %10'unda mı ve yumuşak gölge hiç yok mu?

## Visual signature
- **Toner greni:** `--grain: .12` + `repeating-linear-gradient(0deg, … 0 1px, transparent 1px 3px)` yalnız `body` zemininde; kart yüzeyi `background-image: none`.
- **2px mürekkep kenar:** kart, buton, input ve chip 2px `--ink`; radius 0.
- **Sert ofset gölge:** `4px 4px 0 #0e0e0e` (koyuda `#4b4844`); yalnız hero görseli, modal ve buton hover'da; blur sıfır.
- **Kes-yapıştır şerit:** en fazla 2 öğe `rotate(-1.4deg)` / `rotate(.8deg)`; şeritlerde 2px üst-alt kenar.
- **Zımba izleri:** sol kenarda 18px'te iki adet 10×10px mürekkep kare (62px arayla; mobilde 44px).
- **Yarım ton bandı:** sağ üstte 6px nokta ızgarası, opacity **.18**, gradyan maskeyle köşeye sınırlı.
- **Ranson punto:** tek başlık satırında Kalam 46px + ters video mono blok + Courier 14.5px; üçten fazla ses yok.
- **Typography:** Kalam (display) + Courier Prime (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#cf1f2b`; neutral scale `#e6e4dd` → `#0e0e0e`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Toner greni:** `--grain: .12` + 3px tarama yalnız zemin katmanında; kart/modal yüzeyi temiz.
2. **2px mürekkep kenar:** kart, buton, input, chip; radius 0; sert gölge `4px 4px 0` yalnız hero/modal/hover.
3. **Döndürme bütçesi:** ekran başına en fazla 2 öğe, ±0.8–1.4°; döndürülmüş öğe metni seçilebilir kalır.
4. **Ranson punto:** başlık satırında en fazla 3 ses (Kalam / mono ters video / Courier).
5. **Tek renk:** damga kırmızısı ekranın ≤ %10'u; durum bilgisi metinle (`SATILDI`, `İPTAL`).
6. **Zımba + yarım ton:** zımba izleri yalnız sol kenarda 2 adet; yarım ton bandı yalnız sağ üstte 1 adet.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e6e4dd` | page background | as a card background |
| `--bg-2` | `#dbd8d0` | partition divider floor, table top | button background |
| `--surface` | `#f2f0e9` | kart, input, modal | full-page background |
| `--surface-2` | `#d2cfc6` | passive chip, hover background | primary button |
| `--ink` | `#0e0e0e` | title, body, icon | large background |
| `--ink-soft` | `#43433f` | secondary text, description | — |
| `--ink-faint` | `#6d6d68` | decorative label, separator text | interactive text |
| `--accent` | `#cf1f2b` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff7f1` | text above accent | non-accent background |
| `--line` | `rgba(14,14,14,.24)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.17:1** · `ink-soft/bg` **7.81:1** · `ink-faint/bg` **4.09:1 (decorative)** · `accent-ink/accent` **5.1:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Kalam) | 30px (mobile 30px) | 700 | 0.98 | -0.035em |
| H2 | same | 28px | 600 | 1.08 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Courier Prime) | 14.5px | 400 | 1.6 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Yumuşak gölge, blur, gradient, cam yüzey.
- Serif/geometrik sans display; iki farklı el yazısı ailesi.
- Renkli fotoğraf, pastel palet, ikinci accent (sarı/yeşil).
- 2px üstü radius, pill buton, yuvarlak chip.
- 3'ten fazla döndürülmüş öğe; döndürmeyi metin gövdesine uygulamak.
- Sürekli döngü, marquee, titreme (jitter) animasyonu, parlama.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.74:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | Ranson punto başlık + zımba izleri + yarım ton bandı | `shots/01-page.png` |
| Dashboard | orta | 2px kenarlı kartlar, mono sayılar; döndürme yok | `shots/01-page.png` |
| Form | düşük | 2px kenar alanlar, 3px odak halkası, `!` hata işareti | `shots/01-page.png` |
| Liste / tablo | orta | Line-up tablosu: saat mono, sanatçı daktilo | `shots/01-page.png` |
| Boş durum | orta | El çizimi `?` + tek cümle + tek buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda tek damga kutusu | `shots/01-page.png` |
| Pricing | orta | 3 kart; destek bandı damga kırmızısı, kesik şerit döndürülmüş | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Döndürme ve gren kapanır; 2px kenar + mono form kalır | `shots/01-page.png` |
| Modal | orta | 3px mürekkep çerçeve + sert gölge, perde %60 | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin, 8px accent kare, 2400ms | `shots/01-page.png` |
| Hata | düşük | `--accent` kenar + `!` + mono açıklama | `shots/01-page.png` |
| Profil / ayar | orta | Ayarlar 2px kartlarda; döndürme yok, mono etiketler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.17:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.81:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.09:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.1:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.74:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 89.7 | ≥ 60 target | thin text |

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
| "Ucuz retro tema" | ikinci renk + gradient + yumuşak gölge eklenmiş | Tek damga rengi + sert gölge; gradient/blur kaldır |
| Okunmuyor | gren metnin arkasında, 11px altı punto | Gren yalnız zeminde; gövde 14.5px, etiket 10px |
| Sayfa dağınık | 4-5 öğe döndürülmüş | Döndürme bütçesi 2; kalanı hizalı |
| "El yazısı her yerde" | Kalam gövde metninde kullanılmış | Kalam yalnız başlık; gövde Courier Prime |
| Kenarlar zayıf | 1px kenar + gölge | 2px `--ink` kenar + `4px 4px 0` sert gölge |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 4px 4px 0 #4b4844` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `anti-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Zine | Zine — Wikipedia — fotokopi üretim, zımba/kes-yapıştır dili |
| https://en.wikipedia.org/wiki/Photocopier | Photocopier — Wikipedia — toner greni, 1-bit kontrast, kopyalama bozulması |
| https://en.wikipedia.org/wiki/Riot_grrrl | Riot grrrl — Wikipedia — el yazısı + damga tipografisi, ranson punto geleneği |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — 3px mürekkep odak halkası ölçütü |

## AI brief

```text
Stil: Punk Fanzine (styles/95-punk-fanzine/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="punk-fanzine"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Kalam 700 (H1 46px / 1.04 / +0.01em, mobil 30px), govde Courier Prime 400 14.5/1.6
  (<= 54ch), etiket Share Tech Mono 11px .12em uppercase. Ranson punto: tek satirda en fazla 3 ses.
Yuzey: YUMUSAK GOLGE YOK. Kart/buton/input 2px var(--ink) kenar, radius 0; sert ofset golge
  var(--shadow-hard) yalniz hero gorseli, modal ve buton hover'da. Zemin toner grenli (3px tarama + --grain .12),
  kart yuzeyi temiz.
Renk: gri kagit #e6e4dd + murekkep #0e0e0e + TEK damga kirmizisi #cf1f2b (ekranin <= %10'u).
Imza: en fazla 2 oge +/-0.8-1.4 derece dondurulmus kes-yapisitr serit; sol kenarda 2 zimba izi (10px kare);
  sag ustte yarim ton nokta bandi (%18, maskeli); ranson punto baslik; ters video chip.
Hareket: enter 150ms steps(2,end) 30px stagger 50ms; scroll top 96% / 180ms / 34px / once:false;
  hover 60ms imageScale 1.03; pin kapali. prefers-reduced-motion zorunlu.
Yasak: yumusak golge, blur, gradient, serif/geometrik display, renkli fotograflar, ikinci accent,
  2px ustu radius, 3'ten fazla dondurme, dongu/marquee/jitter.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Punk Fanzine (punk-fanzine) · family: Publication & Typography (86–95)
Token: --bg #e6e4dd · --surface #f2f0e9 · --ink #0e0e0e · --accent #cf1f2b · --line rgba(14,14,14,.24)
Radius: 0px / 2px · Typography: Kalam / Courier Prime / Share Tech Mono
Required: **Toner greni:** `--grain: .12` + 3px tarama yalnız zemin katmanında; kart/modal yüzeyi temiz. · **2px mürekkep kenar:** kart, buton, input, chip; radius 0; sert gölge `4px 4px 0` yalnız hero/modal/hover. · **Döndürme bütçesi:** ekran başına en fazla 2 öğe, ±0.8–1.4°; döndürülmüş öğe metni seçilebilir kalır.
Banned: Yumuşak gölge, blur, gradient, cam yüzey. · Serif/geometrik sans display; iki farklı el yazısı ailesi. · Renkli fotoğraf, pastel palet, ikinci accent (sarı/yeşil).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="punk-fanzine"] {
  --bg: #e6e4dd; --bg-2: #dbd8d0;
  --surface: #f2f0e9; --surface-2: #d2cfc6;
  --ink: #0e0e0e; --ink-soft: #43433f; --ink-faint: #6d6d68;
  --accent: #cf1f2b; --accent-ink: #fff7f1;
  --line: rgba(14,14,14,.24);
  --danger: #ca180e;
  --danger-ink: #ffffff;
  --ok: #00762e;
  --ok-ink: #ffffff;
  --warn: #aa4900;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Kalam", system-ui, sans-serif;
  --font-body: "Courier Prime", ui-monospace, monospace;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
