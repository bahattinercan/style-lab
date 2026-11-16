# 121 · Celebration Card

> **In one sentence:** Celebration Card

| | |
|---|---|
| **Feeling** | sıcak, sevinçli, özenli, "elle verilmiş" |
| **Best for** | tebrik/kutlama akışı (sipariş sonrası, doğum günü, yıl dönümü), davetiye ve RSVP, hediye kartı satışı, ekip kutlaması duyurusu |
| **Avoid** | finansal işlem onayı, kurumsal denetim paneli, klinik/teknik form, üzücü haber bildirimi |
| **Difficulty** | düşük–orta (sevimli olmak kolay, zevkli kalmak zor) · **Accessibility** |  |
| **Family** | Playful (116–125) · **Token** | `kit/tokens.css` → `[data-style="celebration-card"]` |
| **Composition** | `split` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Celebration Card, elden verilen bir tebrik kartının ekran karşılığıdır: **yuvarlak kâğıt** (22px `--radius-lg`), üst kenarda **9px dalgalı die-cut maskesi**, başlığın üstünde **6px folyo bant**, sağ yarıda **deterministik konfeti** (5 nokta) ve sol altta **12° eğik kurdele**. Tipografi kutlama dilidir: Playfair Display 700 başlık, Nunito gövde; mono (IBM Plex Mono) yalnız kart türü, tarih ve durum etiketlerinde.

Kazandığı şey: **an**. Ekran kutlamayı bir "durum" olarak değil bir **nesne** olarak sunar; tek accent (gül kurusu `#bd1f5c`) ve iki dekoratif öğe yeterlidir. Feda ettiği şey: **ölçek** — bu dil 40 satırlık tabloya, yoğun forma veya operasyon paneline taşınmaz; orada stil yalnız radius ve serif başlıkla hatırlatılır, konfeti/kurdele kapatılır.

### What is not
- **Dopamine UI (18) değildir.** Dopamine doygun bloklar, mikro ödül ve 3 px radius ile "hızlı haz" kurar; burada kâğıt dokusu, serif başlık, 22px radius ve **tek seferlik** (döngüsüz) dekor var.
- **Memphis (16) değildir.** Memphis zikzak/konfeti desenini **her yüzeye** yayar; burada dekor iki bölgeye (sağ yarı + sol alt kurdele) sınırlı, gövde metni temiz.
- **Scrapbook (31) değildir.** Scrapbook katman/bant/polaroid ile kolaj kurar; burada **tek düzlem** var, döndürme yok, katman gölgesi yok.
- **Aurora UI (12) değildir.** Aurora gradient bulut ve koyu zeminle atmosfer kurar; burada zemin açık kâğıt, gradient yalnız accent şeritte ve **düz** renk.
- **"Konfeti + yuvarlak buton" değildir.** Die-cut maskesi, folyo bant ve serif/kurdele dengesi olmadan bu stil sıradan bir indirim sayfasıdır.

### Where it comes from
Tebrik kartı 19. yy'da taş baskıyla yaygınlaştı, 20. yy'da **die-cut** (özel bıçakla kesim), **folyo yaldız** ve kurdele gibi zanaat katmanları eklendi: değer, baskı tekniğinden geliyordu. Dijitalde bu dil iki yerde geri döndü: (1) e-ticaret sonrası kutlama akışları, (2) dijital davetiye/kart ürünleri. Nedeni ölçülebilir: tek accent + sınırlı dekor, küçük ekranda bile "özel gün" sinyali taşır.

Klişeye düşmemesi için korunması gereken detay: **dekorun bütçesi**. Konfeti sayısını artırmak, ikinci bir sıcak renk eklemek veya animasyonu döngüye almak stili "indirim broşürü"ne çevirir.

### Recognition test in 3 seconds
1. Kart **22px yuvarlak** mı ve üst kenarı **dalgalı** mı (die-cut maskesi)?
2. Başlığın üstünde **6px gül kurusu bant** var mı; ekranda ikinci bant yok mu?
3. Sağ yarıda **5 noktalı konfeti saçılımı**, sol altta **12° eğik kurdele** var mı (döngü yok)?
4. Başlık **serif ve kalın** (Playfair 700), gövde **yuvarlak sans** (Nunito) mı?
5. Buton **pill** (999px) mi, kart gölgesi tek katman mı, accent ekranın ≤ %12'sinde mi?

## Visual signature
- **Die-cut kenar:** kart üst kenarında `mask-image: radial-gradient(circle at 50% 0, transparent 0 9px, …)`; görsel ve modal da aynı maskeyi taşır.
- **Folyo bant:** H1 üstünde `6px solid var(--accent)`, 18px padding-top; tek bant, tek renk.
- **Konfeti:** 5 sabit nokta (3/2/4/2.5/2px), 180×140px tekrar, yalnız sağ üst %46×52 alan, opacity .55.
- **Kurdele:** sol altta 46vw × 12px accent şerit, `rotate(-12deg)`, opacity .9; mobilde 70vw × 8px.
- **Pill dil:** buton 999px radius, 46px yükseklik; chip 999px — köşe yuvarlaması kartla uyumlu.
- **İmza satırı:** kart alt metni 1px accent alt çizgi + mono 11px isim/tarih.
- **Tek gölge:** `0 6px 18px rgba(52,28,42,.10)`; yığın efekti iki karttan fazla kullanılmaz, gölge katlanmaz.
- **Typography:** Playfair Display (display) + Nunito (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#bd1f5c`; neutral scale `#fbeee8` → `#341c2a`.
- **Radius:** `14px` / `22px`; Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Mandatory rules

1. **Kâğıt biçimi:** kart 22px radius + 9px die-cut maskesi; kenarlık maskeyi takip eder.
2. **Tek folyo bandı:** başlık üstünde 6px accent; ekranda ikinci bant yok.
3. **Dekor bütçesi:** 5 konfeti noktası (sağ yarı) + 1 kurdele (sol alt); fazlası yasak.
4. **Accent ≤ %12:** gül kurusu; gövde metni ve 14px altı yazı accent zemin üstünde olmaz.
5. **Tek gölge:** `0 6px 18px`; yığın 2 karttan fazla değil, gölge katlanmaz.
6. **Serif display + yuvarlak gövde:** Playfair 700 / Nunito; mono yalnız etiket, tarih, durum.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fbeee8` | page background | as a card background |
| `--bg-2` | `#f5e2da` | partition divider floor, table top | button background |
| `--surface` | `#fffaf7` | kart, input, modal | full-page background |
| `--surface-2` | `#f2ded4` | passive chip, hover background | primary button |
| `--ink` | `#341c2a` | title, body, icon | large background |
| `--ink-soft` | `#6b4a5b` | secondary text, description | — |
| `--ink-faint` | `#8f6f7f` | decorative label, separator text | interactive text |
| `--accent` | `#bd1f5c` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fff5f9` | text above accent | non-accent background |
| `--line` | `rgba(52,28,42,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.75:1** · `ink-soft/bg` **6.71:1** · `ink-faint/bg` **3.9:1 (decorative)** · `accent-ink/accent` **5.6:1**.
- HUD contrast: status colors (live/damage) are derived from the accent's tones; A fourth hue is not added.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Playfair Display) | 34px (mobile 34px) | 700 | 1.1 | 0.01em |
| H2 | same | 30px | 600 | 1.2 | 0.01em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.2em |
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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Vertex is either 0 or single small value (≤6px); smooth 12px+ rounding is prohibited.

## Bans

- İkinci accent (sarı, turuncu, mor) ve metalik gradient taklidi.
- Blur, cam yüzey, çok katmanlı gölge.
- 90px üstü dev başlık; arka plana serilmiş konfeti yağmuru.
- Döngüye alınmış kutlama animasyonu, flash/renk döngüsü.
- Gövdede uppercase, 900 ağırlık, dar tracking.
- Kutlamayı üzücü/nötr bağlamda kullanmak (işlem hatası, hesap silme onayı).
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.77:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 52px serif başlık + folyo bant + konfeti + kurdele | `shots/01-page.png` |
| Dashboard | düşük | Kartlar yuvarlak ama dekor yok; mono tarih/durum | `shots/01-page.png` |
| Form | düşük | 48px alanlar, 14px radius, 2px odak halkası | `shots/01-page.png` |
| Liste / tablo | düşük | Konuk listesi: isim, masa no (mono), durum (chip) | `shots/01-page.png` |
| Boş durum | orta | Tek kart + konfeti (3 nokta) + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: kart seç → mesaj yaz → gönder | `shots/01-page.png` |
| Pricing | orta | 3 yuvarlak kart; accent yalnız önerilen kartın bandında | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Dekor sıfır; 22px kart + tek accent buton | `shots/01-page.png` |
| Modal | orta | 22px radius, 32px padding, 0.52s yay | `shots/01-page.png` |
| Bildirim / toast | orta | Pill koyu toast, 8px accent nokta, 3600ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + açıklama; konfeti kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | Yuvarlak kartlar, mono tarih etiketleri | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.71:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.9:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.6:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.77:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.8 | ≥ 60 target | thin text |

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
| "İndirim broşürü" gibi | ikinci sıcak renk + gradient folyo | Tek accent, düz renk şerit |
| Sayfa yorgun görünüyor | konfeti her yere yayılmış | Dekoru sağ yarı + sol alt ile sınırla |
| Kart "plastik" | çift gölge + 30px radius | Tek gölge, 22px radius, die-cut maske |
| Başlık zayıf | 400 ağırlık Playfair | 700'e çıkar, 52px'te tut |
| Erişilebilirlik ihlali | tarih/durum `--ink-faint` ile yazılmış | Durum `--ink-soft`, tarih mono 11px `--ink` |
| Modal sıçrıyor | overshoot 1.2 üstü | Yay eğrisini 1.42'de bırak, süreyi 520ms'te tut |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scrapbook` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `terminal-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `utility` | Two different ornamental languages compete on the same screen |
| Mixing | `blueprint-drawing` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Greeting_card | Greeting card — Wikipedia — tebrik kartı biçimi, die-cut ve folyo geleneği |
| https://en.wikipedia.org/wiki/Die_cutting_(web | en.wikipedia.org — ) — dalgalı kenar ve kesim payı ölçüsü |
| https://www.hallmark.com/ | Hallmark — kart hiyerarşisi: görsel, başlık, mesaj, imza |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — folyo şerit ve buton kenarı ölçütü |

## AI brief

```text
Stil: Celebration Card (styles/121-celebration-card/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="celebration-card"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Playfair Display 700 (H1 52px / 1.02 / -0.01em, mobil 34px), govde Nunito 400 16/1.7
  (<= 52ch), etiket IBM Plex Mono 11px .14em (tarih/kart no/durum).
Yuzey: kart = kagit; radius 14px / 22px (buton ve chip 999px), tek golge var(--shadow).
  Ust kenarda 9px dalgali die-cut maskesi (radial-gradient mask); kenarlik maskeyi takip eder.
Renk: pudra #fbeee8 + murdum #341c2a + tek accent gul kurusu #bd1f5c (ekranin <= %12'si).
Imza: baslik ustunde 6px folyo bant (tek); sag yarida 5 noktali konfeti (opacity .55);
  sol altta 12 derece egik kurdele (46vw x 12px, mobil 70vw x 8px); kart altinda 1px accent imza satiri.
Hareket: enter 520ms cubic-bezier(.34,1.42,.4,1) 14px stagger 60ms; scroll top 85% / 600ms / 16px / once;
  hover 180ms imageScale 1.024; pin kapali. prefers-reduced-motion zorunlu.
Yasak: ikinci accent, gradient folyo taklidi, blur/cam, cok katmanli golge, 90px ustu baslik,
  konfeti dongusu, govdede uppercase, uzucu baglamda kutlama.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Celebration Card (celebration-card) · family: Playful (116–125)
Token: --bg #fbeee8 · --surface #fffaf7 · --ink #341c2a · --accent #bd1f5c · --line rgba(52,28,42,.16)
Radius: 14px / 22px · Typography: Playfair Display / Nunito / IBM Plex Mono
Required: **Kâğıt biçimi:** kart 22px radius + 9px die-cut maskesi; kenarlık maskeyi takip eder. · **Tek folyo bandı:** başlık üstünde 6px accent; ekranda ikinci bant yok. · **Dekor bütçesi:** 5 konfeti noktası (sağ yarı) + 1 kurdele (sol alt); fazlası yasak.
Banned: İkinci accent (sarı, turuncu, mor) ve metalik gradient taklidi. · Blur, cam yüzey, çok katmanlı gölge. · 90px üstü dev başlık; arka plana serilmiş konfeti yağmuru.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="celebration-card"] {
  --bg: #fbeee8; --bg-2: #f5e2da;
  --surface: #fffaf7; --surface-2: #f2ded4;
  --ink: #341c2a; --ink-soft: #6b4a5b; --ink-faint: #8f6f7f;
  --accent: #bd1f5c; --accent-ink: #fff5f9;
  --line: rgba(52,28,42,.16);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 6px 18px rgba(52,28,42,.10); --shadow-hard: none;
  --font-display: "Playfair Display", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
