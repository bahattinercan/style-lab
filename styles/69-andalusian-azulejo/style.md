# 69 · Andalusian Azulejo

> **In one sentence:** Andalusian Azulejo

| | |
|---|---|
| **Feeling** | geometrik, serin, el işi- endüstriyel, net |
| **Best for** | mimari/emlak portföyü, müze–sergi takvimi, ürün kataloğu (seramik, tekstil), kurumsal kültür sayfası |
| **Avoid** | sıcak duygusal hikâye anlatımı, çocuk uygulaması, gece modu ağırlıklı medya oynatıcı, çok renkli kampanya |
| **Difficulty** | orta (ızgara disiplinini bozmadan desen kurmak) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="andalusian-azulejo"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Andalusian Azulejo, arayüzü **çini panel** gibi kurar: her blok bir fayans, aralarında tam **2px harç** boşluğu (bu boşluk `--line` rengindedir, gölge değil), köşeler 1–2px, ve tek krom **kobalt** (`#1c4ea0`). Süs, ayrı bir katman olarak değil **ızgaranın kendisi** olarak gelir: sekiz köşeli yıldız tekrarı ve elmas tessellation yalnız dekoratif katmanda (%16 opaklık) dolaşır. Display ince bir seramik yazısıdır (Poiret One 400), gövde Jost, etiketler Space Mono uppercase.

Kazandığı şey: **düzen ve zanaat aynı anda**. Modüler ızgara yüzünden hiçbir öğe "yerleştirilmemiş" görünmez; kobalt-beyaz sınırlaması ise çini geleneğinin en kolay taklit edilen yanını (çok renklilik) kapatıp en zor olanı (geometri) öne çıkarır. Feda ettiği şey: **esneklik** — serbest kompozisyon, taşan görsel, eğik öğe yoktur; her şey modüle oturur.

### What is not
- **Art Deco (26) değildir.** Art Deco simetri + altın hairline + ziggurat ile "lüks dönem" kurar (Cinzel, altın accent). Burada altın yok, **kobalt** var, geometri tessellation (8 köşeli yıldız) ve radius 1–2px.
- **Swiss Design (02) değildir.** Swiss 12 kolon + tipografi hiyerarşisiyle çalışır ve accent kırmızıdır (`#e4002b`), hiç desen yoktur. Burada desen ızgaranın parçası, accent kobalt ve harç boşluğu 2px'e sabit.
- **Bento Grid (05) değildir.** Bento değişken boyutlu kutular ve sabit gutter (`24px`) kullanır, gölge/radius serbesttir. Burada gutter **2px** (harç), radius 1–2px, gölge yok.
- **Bohemian (30) değildir.** Bohemian kilim desenini yumuşak, çok renkli ve serbest yerleşimle kullanır; burada desen rijit, tek renk ve ızgaraya kilitli.
- **"Mavi accent eklenmiş kutu düzeni" değildir.** Harç boşluğu, tessellation katmanı ve 2px modal çerçevesi olmadan bu stil sadece bir grid şablonudur.

### Where it comes from
Azulejo, Mağrip ve Endülüs'te (13.–18. yy) mimari yüzeyleri kaplayan sırlı çini geleneğidir; İslam geometrisinin yıldız/elmas tessellation'ı ile Portekiz–İspanya'nın kobalt-beyaz panel dilini birleştirir. Dijitalde mimarlık ofisleri, müze takvimleri ve ürün katalogları tarafından kullanılır; nedeni ölçülebilir — modüler tekrar, responsive ızgaraya birebir çevrilir (12 kolon = fayans dizisi) ve tek renkle kimlik taşır.

Klişeye düşmemek için korunması gereken detay: **harç oranı ve tek renk**. Gutter'ı 16px'e çıkarmak, ikinci rengi (sarı/yeşil) eklemek veya motifi metnin arkasına tam opak koymak stili "tema parkı"na çevirir.

### Recognition test in 3 seconds
1. Kartlar arasındaki boşluk **ince (2px)** ve bu boşluk **çizgi renginde** mi — yani bloklar birbirine "yapışık" mı?
2. Krom **tek kobalt mavi** mi (`#1c4ea0`); ikinci renk (sarı/yeşil/bordo) var mı?
3. Bir köşede **sekiz köşeli yıldız / elmas tessellation** düşük opaklıkla görünüyor mu?
4. Başlık **ince geometrik** (Poiret One 400, 52px), etiketler **Space Mono uppercase** mi?
5. Tüm köşeler **1–2px** mi; butonlar pill değil, gölge yok mu?

## Visual signature
- **Harç ızgarası:** bitişik bloklar arasında `gap: 2px` + konteynerde `background: var(--line)`; dış boşluklar normal (16/24/32px).
- **Sekiz köşeli yıldız tekrarı:** 60×60px modül, `repeating-conic-gradient(22.5deg)` + iki çapraz 1px çizgi; opacity **.16**, radial mask ile sağ üst köşeye sınırlı.
- **Kobalt fayans mühür:** 58×58px dolu kare + içeride 5px zemin boşluğu + 1px kobalt halka (mobilde 40×40).
- **İnce seramik display:** Poiret One 400, 52px, tracking **+0.02em** (negatif değil — seramik yazı harfleri ayrık durur).
- **2px harç kenarları:** nav alt çizgisi 2px, divider 2px, modal çerçevesi 2px kobalt; kart kenarı 1px.
- **Modül asimetrisi:** 1 geniş + 2 dar modül; ölçüler ızgaradan gelir, serbest ölçü yok.
- **Etiket dili:** Space Mono 11px uppercase .14em — çini panelin "kenar yazısı" gibi, yalnız mono.
- **Typography:** Poiret One (display) + Jost (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#1c4ea0`; neutral scale `#ecebe6` → `#14233a`.
- **Radius:** `2px` / `4px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Harç ızgarası:** bitişik bloklar arasında tam 2px boşluk ve bu boşluk `--line` renginde (gölge değil).
2. **Tek krom:** kobalt `#1c4ea0`; mavi-beyaz varyant seçildi, ikinci renk yok.
3. **Tessellation sınırlı:** sekiz köşeli yıldız yalnız dekoratif katmanda, opaklık ≤ .16.
4. **Köşe:** radius 1–2px (modal 4px); pill ve 8px radius yasak.
5. **Tipografi:** Poiret One 400 (display), Jost 400 (gövde), Space Mono uppercase (etiket).
6. **Modüler hiza:** her öğe ızgaraya oturur; asimetri yalnız modül genişliğinde (6/3/3).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#ecebe6` | page background | as a card background |
| `--bg-2` | `#e2e1da` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f5f4ef` | passive chip, hover background | primary button |
| `--ink` | `#14233a` | title, body, icon | large background |
| `--ink-soft` | `#46566f` | secondary text, description | — |
| `--ink-faint` | `#72808f` | decorative label, separator text | interactive text |
| `--accent` | `#1c4ea0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f4f8ff` | text above accent | non-accent background |
| `--line` | `rgba(20,35,58,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.22:1** · `ink-soft/bg` **6.24:1** · `ink-faint/bg` **3.38:1 (decorative)** · `accent-ink/accent` **7.45:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poiret One) | 34px (mobile 34px) | 400 | 1.04 | -0.02em |
| H2 | same | 28px | 600 | 1.16 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Çok renkli çini: sarı, yeşil, bordo, turkuaz ikinci accent.
- Sır parlaması taklidi: gradient, parlak highlight, blur.
- 4px üstü radius, yuvarlak buton, pill chip.
- Gölgeyle derinlik ve iç içe çerçeve.
- Izgarayı bozan serbest yerleşim veya değişken gutter.
- Tessellation motifini metin arkasına tam opak yerleştirmek.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.93:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Tessellation sağ üstte (%16), kobalt mühür karesi, 2px divider | `shots/01-page.png` |
| Dashboard | düşük | KPI kartları 2px harçla bitişik; sayılar Space Mono | `shots/01-page.png` |
| Form | düşük | 44px alan, 1px radius, halka offset 0 | `shots/01-page.png` |
| Liste / tablo | düşük | Hücreler arası 2px harç; başlık uppercase mono | `shots/01-page.png` |
| Boş durum | orta | Tek yıldız motifi (küçük) + 1 cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | Adımlar fayans sırası: 3 kare, aktif olan kobalt | `shots/01-page.png` |
| Pricing | orta | 3 fayans modülü (6/3/3); orta modül 2px kobalt kenar | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs yok; alanlar 1px radius, tek kobalt buton | `shots/01-page.png` |
| Modal | orta | 2px kobalt çerçeve, gölge yok, perde koyu | `shots/01-page.png` |
| Bildirim / toast | orta | Sol uçta 8px kobalt kare, 3200ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + açıklama; motif kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | Ayarlar fayans listesi; her satır 2px harçla ayrı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.22:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.24:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.38:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.45:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.93:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 90.7 | ≥ 60 target | thin text |

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
| "Tema parkı" hissi | motif büyütülmüş + ikinci renk eklenmiş | Modül 60px, opacity .16, tek kobalt |
| Izgara dağılmış | gutter 2px yerine 16px, serbest ölçüler | `gap: 2px` + `background: var(--line)`; tüm bloklar modüle |
| Butonlar "yumuşak SaaS" olmuş | pill radius veya 8px radius | Radius 1px; pill yasak |
| Okunaksız metin | tessellation metin arkasında tam opak | Deseni `.sig` katmanına al, opaklığı .16'ya düşür |
| Gölgeyle derinlik | kartlara `box-shadow` eklenmiş | Gölgeyi kaldır; ayrım harç + 1px kenar |
| Display bozuk görünüyor | Poiret One kalınlaştırılmış (sahte 600) | 400'de bırak; hiyerarşiyi boyutla kur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bauhaus` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Azulejo | Azulejo — Wikipedia — kobalt-beyaz palet, tekrar eden modül, harç oranı |
| https://en.wikipedia.org/wiki/Alhambra | Alhambra — Wikipedia — tessellation geometrisi ve sekiz köşeli yıldız |
| https://whc.unesco.org/en/list/314/ | UNESCO · Alhambra, Generalife — çini panel oranları ve tekrar yoğunluğu |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — harç çizgisi ve fayans kenarı ölçütü |

## AI brief

```text
Stil: Andalusian Azulejo (styles/69-andalusian-azulejo/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="andalusian-azulejo"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Poiret One 400 (H1 52px / +0.02em, mobil 34px), govde Jost 400 16/1.68 (<= 60ch),
  etiket Space Mono 11px uppercase .14em. 600+ agirlik ve serif yok.
Yuzey: golge YOK; bitisik bloklar arasi TAM 2px harc boslugu (gap: 2px + konteynerde background: var(--line)).
  Radius 1-2px (modal 4px). Buton/input 1px.
Renk: harç zemini #ecebe6 + beyaz fayans #ffffff + lacivert metin #14233a + TEK kobalt #1c4ea0 (<= %15).
  Mavi-beyaz varyant; sari/yesil/bordo yasak.
Imza: sekiz koseli yildiz tessellation (60px modul, opacity .16, sag ust maskeli);
  kobalt muhur karesi 58px (mobil 40px); nav/divider/modal 2px kural; form halkasi offset 0.
Hareket: enter 420ms cubic-bezier(.6,.02,.2,1) 10px stagger 70ms; scroll top 88% / 550ms / 12px / once;
  pin acik scrub .9 +60%; hover 150ms imageScale 1.045. prefers-reduced-motion zorunlu.
Yasak: cok renkli cini, sir parlamasi/gradient, 4px ustu radius, golge ile derinlik,
  pill buton, izgarayi bozan serbest yerlestirim, tam opak motif.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Andalusian Azulejo (andalusian-azulejo) · family: Cultural & Regional (66–75)
Token: --bg #ecebe6 · --surface #ffffff · --ink #14233a · --accent #1c4ea0 · --line rgba(20,35,58,.18)
Radius: 2px / 4px · Typography: Poiret One / Jost / Space Mono
Required: **Harç ızgarası:** bitişik bloklar arasında tam 2px boşluk ve bu boşluk `--line` renginde (gölge değil). · **Tek krom:** kobalt `#1c4ea0`; mavi-beyaz varyant seçildi, ikinci renk yok. · **Tessellation sınırlı:** sekiz köşeli yıldız yalnız dekoratif katmanda, opaklık ≤ .16.
Banned: Çok renkli çini: sarı, yeşil, bordo, turkuaz ikinci accent. · Sır parlaması taklidi: gradient, parlak highlight, blur. · 4px üstü radius, yuvarlak buton, pill chip.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="andalusian-azulejo"] {
  --bg: #ecebe6; --bg-2: #e2e1da;
  --surface: #ffffff; --surface-2: #f5f4ef;
  --ink: #14233a; --ink-soft: #46566f; --ink-faint: #72808f;
  --accent: #1c4ea0; --accent-ink: #f4f8ff;
  --line: rgba(20,35,58,.18);
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
  --shadow: 0 1px 0 rgba(20,35,58,.14); --shadow-hard: none;
  --font-display: "Poiret One", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
