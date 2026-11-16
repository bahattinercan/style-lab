# 70 · Slavic Late Brutalist

> **In one sentence:** Slavic Late Brutalist

| | |
|---|---|
| **Feeling** | ağır, mekanik, dürüst, kamusal |
| **Best for** | kültür merkezi/arşiv, mimarlık ofisi, endüstriyel ürün markası, kamu hizmeti duyurusu |
| **Avoid** | lüks perakende, sağlık/wellness, çocuk uygulaması, hızlı ödeme akışı |
| **Difficulty** | orta (kalınlığı ölçülü tutmak: her yeri 3px yapmak gürültü üretir) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="slavic-late-brutalist"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Slavic Late Brutalist, geç dönem Doğu Bloku konut bloklarının (panelák) ekran dilidir: **bitişik beton paneller** (`gap: 0`, ayrım 3px kenar), **sert ofset gölge** (`5px 5px 0`), gri beton zemin (`#d8d6d0`), tek **rust kırmızısı** (`#a8431d`) ve Anton ile kurulmuş **uppercase dev başlıklar** (68px, satır aralığı 0.94). Süs yoktur: 45° tehlike şeridi ekran başına bir kez, yalnız landing alt bandında görünür ve orada da bir uyarı işareti gibi davranır.

Kazandığı şey: **ağırlık ve okunurluk**. Kalın kenar + yüksek kontrast (12.25:1) sayesinde ekran, güneş altında ve düşük kaliteli monitörde bile okunur; hiyerarşi süsle değil punto ve kütleyle kurulduğu için tarama hızlıdır. Feda ettiği şey: **incelik ve sıcaklık** — bu stil hiçbir şeyi "zarif" göstermez; lüks, sağlık ve çocuk ürünlerinde kaba kalır.

### What is not
- **Neo-Brutalism (13) değildir.** Neo-brutalism parlak sarı/pembe bloklar, 2px kenar ve **renkli** sert gölgeyle "oyuncu" bir dil kurar (radius 0 ama palet canlı). Burada palet **beton grisi + rust**, gölge **siyah**, kenar **3px** ve tehlike şeridi tek bantta.
- **Constructivism (36) değildir.** Constructivism diagonal çubuk, kırmızı-siyah ve aşırı tipografi ile **afiş** kurar; burada diagonal yalnız bir uyarı şeridinde, kompozisyon ise **dikey-yatay modüler** ve blok bitişik.
- **Utility (44) değildir.** Utility hairline (1px) disiplini ve isimli metin stilleriyle çalışır; burada hairline **yok**, her ayrım 3px ve ofset gölge var.
- **Grand Tourer (41–43) değildir.** O aile krom, kadran ve krem deriyle "zarif makine" kurar; burada makine **çıplak**: krom yok, yuvarlak yok, sıcaklık yok.
- **"Kalın kenarlı kutu" değildir.** Bitişik panel (gap 0), sert ofset gölge, beton dokusu ve 68px uppercase display olmadan bu stil sadece kaba bir wireframe'dir.

### Where it comes from
1945–1980 arası Doğu ve Orta Avrupa'da milyonlarca konut, **prefabrik beton panel** ile üretildi: endüstriyel ölçü, tekrar eden modül, kaplamasız yüzey. Aynı dönemin grafik dili (şablon yazı, damga, duyuru panosu, uyarı şeridi) bu estetiği tamamladı. Dijitalde 2010'lardan sonra kültür kurumları ve mimarlık ofisleri tarafından "dürüst malzeme" söylemiyle kullanıldı; nedeni ölçülebilir: kalın kenar + yüksek kontrast, kötü ekran koşullarında okunurluğu artırır.

Klişeye düşmemek için korunması gereken detay: **panel bitişikliği ve gölgenin sertliği**. Boşlukları 16px'e çıkarmak, gölgeyi yumuşatmak veya ikinci bir renk eklemek stili "kaba SaaS teması"na çevirir.

### Recognition test in 3 seconds
1. Bloklar **birbirine bitişik** mi (`gap: 0`), ayrım **3px kenar** mı — 1px hairline yok mu?
2. Bir öğede **5px sert ofset gölge** (blur'suz, kaydırılmış siyah blok) var mı?
3. Başlık **Anton uppercase, 68px, satır aralığı 0.94** mü (harfler birbirine değiyor)?
4. Palet **beton grisi + tek rust kırmızısı** mı; ikinci renk yok mu?
5. Ekranın bir yerinde **45° tehlike şeridi** tek bant olarak var mı (iki kez değil)?

## Visual signature
- **Bitişik panel ızgarası:** `gap: 0`, çocuklar `margin: -1.5px 0 0 -1.5px` ile kenarlar üst üste bindirilir; sonuç 3px tek çizgi (çift çizgi değil).
- **Sert ofset gölge:** `--shadow-hard: 5px 5px 0 #16181a`; yalnız hero görseli, modal ve buton hover'da. Blur sıfır, yayılım sıfır.
- **Tehlike şeridi:** 24px yükseklik, `repeating-linear-gradient(45deg, accent 0 12px, ink 12px 24px)`; landing alt bandında **tek** kez (mobilde 16px).
- **Damga bloğu:** 120×120px, 3px ink kenar, `--bg-2` zemin + sert gölge (mobilde 72×72) — "arşiv mührü" gibi sağ üstte.
- **Beton dokusu:** bölüm zeminlerinde 1px yatay tekrar, `%6 ink` opaklığı + `--grain: .05`; kart yüzeyi **düz** kalır.
- **Kalın tipografi:** display 68px/0.94, tracking +0.01em; gövde ölçüsü **46ch** (kısa — pano metni gibi blok blok okunur).
- **Ters video chip:** dolu `--ink` zemin + `--bg` metin, radius 0, mono .14em; accent varyantı rust.
- **Typography:** Anton (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#a8431d`; neutral scale `#d8d6d0` → `#16181a`.
- **Radius:** `0px` / `2px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Kalın kenar:** panel, buton, input 3px; bu stilde 1px hairline yok.
2. **Sert gölge:** `--shadow-hard` (5px 5px 0) yalnız yüzen katman, hero görseli ve buton hover'da; yumuşak gölge yasak.
3. **Bitişik panel:** `gap: 0` + negatif margin ile tek 3px çizgi; çift çizgi hata kabul edilir.
4. **Beton dokusu:** yalnız bölüm zeminlerinde 1px yatay tekrar (%6); panel yüzeyi düz.
5. **Tehlike şeridi:** 45°, 24px, ekran başına 1 kez (yalnız landing alt bandı).
6. **Tipografi:** Anton 400 uppercase 68px (+0.01em), Inter 400 gövde, JetBrains Mono uppercase etiket.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#d8d6d0` | page background | as a card background |
| `--bg-2` | `#cdcac3` | partition divider floor, table top | button background |
| `--surface` | `#e7e5e0` | kart, input, modal | full-page background |
| `--surface-2` | `#bfbcb5` | passive chip, hover background | primary button |
| `--ink` | `#16181a` | title, body, icon | large background |
| `--ink-soft` | `#43464a` | secondary text, description | — |
| `--ink-faint` | `#6b6f74` | decorative label, separator text | interactive text |
| `--accent` | `#a8431d` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f3ea` | text above accent | non-accent background |
| `--line` | `rgba(22,24,26,.26)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.25:1** · `ink-soft/bg` **6.53:1** · `ink-faint/bg` **3.48:1 (decorative)** · `accent-ink/accent` **5.44:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 40px (mobile 40px) | 400 | 1.04 | -0.02em |
| H2 | same | 34px | 600 | 1.16 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Yuvarlak köşe (radius 0, en fazla 2px) ve pill buton.
- Yumuşak gölge, blur, gradient, cam yüzey.
- Serif aile, italik, 200/300 ince ağırlık, negatif tracking.
- Renkli illüstrasyon, emoji, yuvarlak ikon.
- Birden fazla tehlike şeridi (dekorasyon gürültüsü).
- Pastel/retro tonlar; accent yalnız rust `#a8431d`.
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.79:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-bars` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 68px uppercase başlık, damga bloğu, alt bantta tehlike şeridi | `shots/01-page.png` |
| Dashboard | düşük | Bitişik KPI panelleri (gap 0), mono sayılar, 3px ızgara | `shots/01-page.png` |
| Form | düşük | 48px alanlar, iç odak halkası, mono hata metni | `shots/01-page.png` |
| Liste / tablo | düşük | Hücreler 3px çerçeveli; seçili satır ters video | `shots/01-page.png` |
| Boş durum | orta | Tek damga bloğu (72px) + 1 cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım göstergesi 3 bitişik kare, aktif olan rust | `shots/01-page.png` |
| Pricing | orta | 3 bitişik panel; orta panelde 3px ink kenar + sert gölge | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Şerit yok, doku yok; yalnız alanlar + tek rust buton | `shots/01-page.png` |
| Modal | orta | 3px ink çerçeve + sert gölge, perde %55 | `shots/01-page.png` |
| Bildirim / toast | orta | Rust blok + mono metin, 2600ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama; şerit kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | Künye 5 kolon solda, ayar panelleri 7 kolonda bitişik | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.25:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.53:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.48:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.44:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.79:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 80.7 | ≥ 60 target | thin text |

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
| Ekran gürültülü | her öğeye 3px kenar + gölge verilmiş | Kalınlığı taşıyıcı öğelere ayır: gölge yalnız yüzen katman + hover |
| Çift çizgi görünüyor | bitişik panellerde negatif margin yok | Çocuklara `margin: -1.5px 0 0 -1.5px` ver |
| "Kaba SaaS" hissi | gutter 16px'e çıkarılmış, gölge yumuşatılmış | `gap: 0` + `--shadow-hard` (blur 0) |
| Şerit dekorasyon olmuş | sayfada 3+ tehlike şeridi | Ekran başına 1, yalnız landing alt bandı |
| Başlık okunmuyor | negatif tracking veya Anton yerine sahte kalın | tracking +0.01em, display Anton 400 |
| Odak görünmüyor | dış offset halka kalın kenarla çakışıyor | `outline-offset: -3px` (iç halka) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `constructivism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Brutalist_architecture | Brutalist architecture — Wikipedia — béton brut yüzey, kalın kütle, açık strüktür |
| https://en.wikipedia.org/wiki/Panel_building | Panel building — Wikipedia — prefabrik panel modülü ve bitişik blok ritmi |
| https://www.archdaily.com/tag/brutalism | ArchDaily · Brutalism — cephe dokusu, sert gölge, blok hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — 3px iç odak halkası ölçütü |

## AI brief

```text
Stil: Slavic Late Brutalist (styles/70-slavic-late-brutalist/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="slavic-late-brutalist"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Anton 400 UPPERCASE (H1 68px / line-height .94 / +0.01em, mobil 40px),
  govde Inter 400 16/1.6 (<= 46ch), etiket JetBrains Mono 11px .16em. Serif/italik/negatif tracking yasak.
Yuzey: yumusak golge YOK. Panel 3px var(--line) kenar, bitisik (gap: 0 + cocuklarda margin -1.5px),
  radius 0 (modal 2px). Sert ofset golge var(--shadow-hard) yalniz hero gorseli, modal ve buton hover'da.
Renk: beton #d8d6d0 zemin + panel #e7e5e0 + siyah #16181a + TEK rust #a8431d (<= %10).
Imza: 45 derece tehlike seridi (24px, ekran basina 1, landing alt bandi);
  damga blogu 120px (3px kenar + sert golge); bolum zeminlerinde 1px yatay beton dokusu;
  kart ice odak halkasi 3px ink offset -3px.
Hareket: enter 260ms cubic-bezier(.85,0,.15,1) 34px stagger 20ms;
  scroll top 92% / 300ms / 40px / once:false (her geciste tekrar); hover 70ms imageScale 1.000; pin kapali.
  prefers-reduced-motion zorunlu.
Yasak: yuvarlak kose, yumusak golge, blur, gradient, serif, italik, ince 1px ikon,
  birden fazla tehlike seridi, pastel tonlar, ikinci accent.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Slavic Late Brutalist (slavic-late-brutalist) · family: Cultural & Regional (66–75)
Token: --bg #d8d6d0 · --surface #e7e5e0 · --ink #16181a · --accent #a8431d · --line rgba(22,24,26,.26)
Radius: 0px / 2px · Typography: Anton / Inter / JetBrains Mono
Required: **Kalın kenar:** panel, buton, input 3px; bu stilde 1px hairline yok. · **Sert gölge:** `--shadow-hard` (5px 5px 0) yalnız yüzen katman, hero görseli ve buton hover'da; yumuşak gölge yasak. · **Bitişik panel:** `gap: 0` + negatif margin ile tek 3px çizgi; çift çizgi hata kabul edilir.
Banned: Yuvarlak köşe (radius 0, en fazla 2px) ve pill buton. · Yumuşak gölge, blur, gradient, cam yüzey. · Serif aile, italik, 200/300 ince ağırlık, negatif tracking.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="slavic-late-brutalist"] {
  --bg: #d8d6d0; --bg-2: #cdcac3;
  --surface: #e7e5e0; --surface-2: #bfbcb5;
  --ink: #16181a; --ink-soft: #43464a; --ink-faint: #6b6f74;
  --accent: #a8431d; --accent-ink: #f7f3ea;
  --line: rgba(22,24,26,.26);
  --danger: #be0000;
  --danger-ink: #ffffff;
  --ok: #006c24;
  --ok-ink: #ffffff;
  --warn: #a03f00;
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
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
}
```
