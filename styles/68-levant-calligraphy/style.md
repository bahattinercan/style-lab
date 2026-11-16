# 68 · Levant Calligraphy

> **In one sentence:** Levant Calligraphy

| | |
|---|---|
| **Feeling** | ağırbaşlı, el yazması, törensel, sıcak-koyu |
| **Best for** | yayınevi/kültür kurumu, hat-sanat galerisi, butik danışmanlık, davet/etkinlik sayfası |
| **Avoid** | yüksek tempolu e-ticaret, oyun, yoğun operasyon paneli, çocuk uygulaması |
| **Difficulty** | yüksek (altını parlaksız, süsü dekoratif katmanda tutmak) · **Accessibility** |  |
| **Family** | Cultural & Regional (66–75) · **Token** | `kit/tokens.css` → `[data-style="levant-calligraphy"]` |
| **Composition** | `split` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Levant Calligraphy, el yazması sayfa mantığını ekrana taşır: **kâğıt zemin** (`#f4eee1`), **sağa dayalı içerik omurgası** (7/12 kolon), ve iki imza öğesi — **kalın-ince kalem kuralı** (2px çizgi, ilk/son %12'de şeffafa döner) ile **tezhip çerçevesi** (14px içeri çekilmiş 1px altın kural). Altın (`#7a5a22`) süsün rengidir, metnin değil: accent ekranın ≤%8'inde kalır, gövde metni her zaman lacivert-siyahtır (`#171d2e`).

Kazandığı şey: **ağırlık ve sahiplik**. Sağ omurga ve kalın-ince kurallar, sayfayı "yazılmış" hissettirir; okuma yönü bilinçli olarak tersine çevrildiği için ekran ilk saniyede "başka bir kültürün düzeni" olarak okunur. Feda ettiği şey: **tarama hızı ve simetri alışkanlığı** — sola dayalı form/liste konvansiyonları burada sağa çekilir; yoğun veri ekranlarında bu yön değişimi maliyetlidir, o yüzden tablo/form konvansiyonu korunur, omurga yalnız içerik sayfalarında uygulanır.

### What is not
- **Dark Academia (33) değildir.** İkisi de serif ve kâğıt kullanır; ama Dark Academia **soldan** akar, gotik süsü çift çerçeveyle verir ve accent'i **mum ışığı sarısı** olarak geniş alanda kullanır. Burada yön **sağa**, çerçeve **tek**, accent **altın ve ≤ %8**, aileler Cormorant + Lora.
- **Art Deco (26) değildir.** Art Deco simetrik ziggurat geometrisi ve `Cinzel` ile çalışır; burada geometri yok, kalem eğrisi var (kalın-ince kural), display Cormorant Garamond 500.
- **Luxury Typography (04) değildir.** O stil geniş tracking ve seyrek yerleşimle "boş lüks" kurar; burada tracking neredeyse sıfır (-0.005em) ve sayfa el yazması gibi **dolu**.
- **Victorian (27) değildir.** Victorian gravür dokusu ve small caps ile dönemsel taklit yapar; burada doku yalnız `--grain: .03`, süs yalnız tezhip çerçevesi ve rosette.
- **"Altın gradient lüks" değildir.** Metalik parlaklık yasak; altın **mat** ve yalnız kural kalınlığında yaşar.

### Where it comes from
Levant ve İslam hat geleneği (kûfi, nesih, sülüs) yazıyı **ölçülebilir bir sistem** olarak kurar: harf yüksekliği nokta birimiyle, kalem kalınlığı sabit oranla belirlenir. Tezhip (illumination) ise sayfanın kenarını altın kural ve rozetle çerçeveleyerek metni "korunan" bir alana alır. Dijitalde bu dil 2010'lardan sonra kültür kurumları, yayınevleri ve butik markalarca kullanıldı; nedeni ölçülebilir — tek bir altın kural + serif display, düşük çözünürlükte bile kimlik taşır.

Klişeye düşmemek için korunması gereken detay: **çerçevenin tekliği ve altının matlığı**. İkinci çerçeve, gold→beyaz gradient veya ikinci accent (turkuaz/bordo) eklemek stili "orientalist afiş"e çevirir.

### Recognition test in 3 seconds
1. İçerik **sağa dayalı** mı; solda künye/boş kolon var mı?
2. Kartın kenarından **14px içeride 1px altın kural** (tezhip) görünüyor mu — tek çerçeve mi?
3. Bölüm ayırıcısı **2px ve uçları şeffafa dönüyor** mu (kalem giriş-çıkışı)?
4. Display **Cormorant Garamond 500** (ince-şişkin serif), gövde Lora, etiket **Courier Prime** mı?
5. Altın **mat** ve ekranın küçük bir bölümünde mi (parlama/yansıma yok)?

## Visual signature
- **Tezhip çerçevesi:** kart/panel içinde `inset: 14px`, `1px solid color-mix(accent 55%)`; dekoratif katman, `pointer-events: none`.
- **Kalın-ince kalem kuralı:** 2px yükseklik, `linear-gradient(90deg, transparent 0, accent 12%, accent 88%, transparent 100%)`; bölüm ayırıcı ve nav aktif işareti.
- **Sağ omurga:** hero metni `text-align: right`, lede `margin-left: auto`; sol 5 kolon künye.
- **Rosette (tezhip gülü):** 180×180px, `repeating-conic-gradient` 45° dilim + merkez disk + 1px halka, opacity .8; yalnız landing dekoratif katmanında, mobilde 104px.
- **Kâğıt katmanı:** kart `1px --line` + tek yumuşak gölge (`0 2px 14px rgba(23,29,46,.10)`); iç gölge yok.
- **Chip = mühür kutusu:** radius 1px, kenar `accent %50`, metin `--ink-soft`, .1em tracking.
- **Dikey kenar:** makale yan paneli ve auth aside'ında sağda 1px `--line` — sayfa "cilt payı" hissi.
- **Typography:** Cormorant Garamond (display) + Lora (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#7a5a22`; neutral scale `#f4eee1` → `#171d2e`.
- **Radius:** `2px` / `6px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. **Tezhip çerçevesi tek:** kart/panel içinde 14px çekilmiş 1px altın kural; ikinci çerçeve yok.
2. **Kalın-ince kalem kuralı:** 2px çizgi, ilk ve son %12'de şeffafa döner; bölüm ayırıcı ve nav aktif işareti.
3. **Sağ omurga:** içerik 7/12 kolonda sağa dayalı, sol 5/12 künye; mobilde sol hizalama.
4. **Altın ≤ %8:** gövde metni asla altın; altın yalnız kural, çerçeve ve rozet.
5. **Üç aile sabit:** Cormorant Garamond 500 (display), Lora 400 (gövde), Courier Prime (etiket).
6. **Ölçü:** gövde 62ch, lede 48ch, bölüm ritmi 104px (mobil 60px).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4eee1` | page background | as a card background |
| `--bg-2` | `#eae2d0` | partition divider floor, table top | button background |
| `--surface` | `#fdf9ef` | kart, input, modal | full-page background |
| `--surface-2` | `#f0e8d7` | passive chip, hover background | primary button |
| `--ink` | `#171d2e` | title, body, icon | large background |
| `--ink-soft` | `#444d63` | secondary text, description | — |
| `--ink-faint` | `#6f7789` | decorative label, separator text | interactive text |
| `--accent` | `#7a5a22` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf8ec` | text above accent | non-accent background |
| `--line` | `rgba(23,29,46,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.51:1** · `ink-soft/bg` **7.3:1** · `ink-faint/bg` **3.88:1 (decorative)** · `accent-ink/accent` **5.98:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 36px (mobile 36px) | 400 | 1.04 | -0.02em |
| H2 | same | 31px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 16px | 400 | 1.68 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `6px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Metalik altın taklidi: gold→beyaz gradient, parlama, ışık süpürme.
- İkinci accent (turkuaz, bordo) ve çok renkli rozet.
- Sans display, 600+ display ağırlık, negatif geniş tracking.
- Cam/blur yüzey, iç içe çift gölge, 6px üstü radius.
- Harf harf animasyon ve sürekli dönen rosette.
- Arka plana serilmiş tezhip motifi; motif yalnız dekoratif katmanda.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.03:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Sağ omurga, rosette sol üstte, kalem kuralı başlık altında | `shots/01-page.png` |
| Dashboard | düşük | Süs yok; kartlarda yalnız 1px çizgi + tek gölge; sayılar mono | `shots/01-page.png` |
| Form | düşük | 46px alan, 1px radius, 2px odak halkası | `shots/01-page.png` |
| Liste / tablo | düşük | Sola döner (konvansiyon); satır 48px, alt çizgi | `shots/01-page.png` |
| Boş durum | orta | Tek rosette (104px) + 1 cümle + 1 buton | `shots/01-page.png` |
| Onboarding | yüksek | Her adımda sağ omurga; ilerleme = 3 kalem kuralı parçası | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kartta dolu altın rozet (≤ %8 alan) | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs yalnız 14px iç kural; alanlar 1px radius | `shots/01-page.png` |
| Modal | orta | 32px padding, iç tezhip kuralı, sağa dayalı başlık | `shots/01-page.png` |
| Bildirim / toast | orta | Sol kenarda 2px altın kural; kutu gölgesiz | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + açıklama; altın kullanılmaz | `shots/01-page.png` |
| Profil / ayar | orta | Künye kolonu solda `--bg-2`, formlar sağda | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.51:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.3:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.88:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.98:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.03:1 | ≥ 3 | accent ring |
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
| "Oryantalist afiş" hissi | ikinci çerçeve + geniş altın alan + gold gradient | Tek çerçeve, altın ≤ %8, gradient kaldır |
| Altın okunmuyor | altın metin olarak kullanılmış | Altını yalnız kural/çerçeve/rozet yap; metin `--ink` |
| Sayfa yönü kafa karıştırıyor | form/tablo da sağa çekilmiş | Omurgayı yalnız içerik sayfalarında uygula |
| Kartlar "yüzen kutu" olmuş | iki katmanlı gölge eklenmiş | Tek `--shadow`, içeride yalnız 1px kural |
| Tezhip kuralı metne değiyor | inset 14px yerine 6px, padding 16px | padding 26px + inset 14px |
| Display fazla kalın | Cormorant 600/700 | 500'e sabitle; şişkinlik hat oranını bozar |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bohemian` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Islamic_calligraphy | Islamic calligraphy — Wikipedia — kalem kalınlığı oranları ve satır ekseni |
| https://en.wikipedia.org/wiki/Tezhip | Tezhip — Wikipedia — tezhip çerçevesi, rosette, altın yoğunluğu |
| https://www.metmuseum.org/art/collection | The Met · Islamic Art — elyazması sayfa düzeni ve kenar boşluğu oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — altın accent üstü metin ölçümü |

## AI brief

```text
Stil: Levant Calligraphy (styles/68-levant-calligraphy/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="levant-calligraphy"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Cormorant Garamond 500 (H1 58px / -0.005em, mobil 36px), gövde Lora 400 16/1.74 (<= 62ch),
  etiket Courier Prime 11px .12em. Display'de 600+ agirlik yok.
Yuzey: kart 1px var(--line) + tek yumusak golge var(--shadow); radius 2px / 6px.
  Kartin ICINDE 14px inset 1px altin kural (tezhip) - tek cerceve, ikincisi yok.
Renk: parsonem #f4eee1 zemin + lacivert #171d2e metin + mat altin #7a5a22 (ekranin <= %8'i).
Imza: kalin-ince kalem kurali (2px, ilk/son %12 seffafa doner) bolum ayirici ve nav aktif isareti;
  saga dayali omurga (7/12 icerik, sol 5/12 kunye); hero'da 180px rosette (mobil 104px).
Hareket: enter 940ms cubic-bezier(.34,.03,.24,1) 26px stagger 90ms; scroll top 79% / 1020ms / 30px / once;
  pin acik scrub 1.4 +150%; hover 340ms imageScale 1.032. prefers-reduced-motion zorunlu.
Yasak: gold gradient/parlama, ikinci accent, ikinci cerceve, sans display, 6px ustu radius,
  ic ice golge, harf harf animasyon, arka plana serilmis motif.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Levant Calligraphy (levant-calligraphy) · family: Cultural & Regional (66–75)
Token: --bg #f4eee1 · --surface #fdf9ef · --ink #171d2e · --accent #7a5a22 · --line rgba(23,29,46,.16)
Radius: 2px / 6px · Typography: Cormorant Garamond / Lora / Courier Prime
Required: **Tezhip çerçevesi tek:** kart/panel içinde 14px çekilmiş 1px altın kural; ikinci çerçeve yok. · **Kalın-ince kalem kuralı:** 2px çizgi, ilk ve son %12'de şeffafa döner; bölüm ayırıcı ve nav aktif işareti. · **Sağ omurga:** içerik 7/12 kolonda sağa dayalı, sol 5/12 künye; mobilde sol hizalama.
Banned: Metalik altın taklidi: gold→beyaz gradient, parlama, ışık süpürme. · İkinci accent (turkuaz, bordo) ve çok renkli rozet. · Sans display, 600+ display ağırlık, negatif geniş tracking.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="levant-calligraphy"] {
  --bg: #f4eee1; --bg-2: #eae2d0;
  --surface: #fdf9ef; --surface-2: #f0e8d7;
  --ink: #171d2e; --ink-soft: #444d63; --ink-faint: #6f7789;
  --accent: #7a5a22; --accent-ink: #fdf8ec;
  --line: rgba(23,29,46,.16);
  --danger: #d22519;
  --danger-ink: #ffffff;
  --ok: #007e35;
  --ok-ink: #ffffff;
  --warn: #b15000;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 2px 14px rgba(23,29,46,.10); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
