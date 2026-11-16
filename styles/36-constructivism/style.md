# 36 · Constructivism

> **In one sentence:** 1920'ler Rus konstrüktivizmi: kırmızı–siyah–kırık beyaz, kalın diagonal çubuk, aşırı büyük tipografi ve radius'suz asimetrik montaj.

| | |
|---|---|
| **Feeling** | ajitatif, endüstriyel, keskin, "afiş" |
| **Best for** | kültür/sanat kurumu, manifesto/duyuru sayfası, ajans vitrini, ürün lansmanı, eğitim platformu |
| **Avoid** | sağlık verisi, finans işlemi, uzun okuma, çok adımlı kurumsal form, yoğun veri tablosu |
| **Difficulty** | yüksek (denge + tipografi disiplini) · **Accessibility** |  |
| **Family** | Geometric (35–36) · **Token** | `kit/tokens.css` → `[data-style="constructivism"]` |
| **Composition** | `sticky` · `inline` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Konstrüktivizm (Rus, 1915–1934) tasarımı **montaj** fikrine dayanır: ayrı parçalar (çubuk, daire, dikdörtgen, harf bloğu) kesilip **diagonal bir eksen** üzerinde birleştirilir. Palet bilinçli olarak üçe kilitlidir — kırmızı, siyah, kırık beyaz. Tipografi süs değil **yapı** taşır: başlık ekranın yarısını kaplar, etiketler dikey veya 90° döndürülmüş mono harflerle basılır.

Kazandığı şey: anında okunan, ideolojik enerji taşıyan bir kimlik — bir cümle bile afiş gibi durur. Feda ettiği şey: sakinlik ve nüans. Yoğun operasyonel ekranda diagonal ve dev harf, veriyi okunamaz hâle getirir; bu yüzden stil eklenti değil **rejim** olarak kullanılır (bkz. § Ekran reçeteleri).

### What is not
- **Bauhaus değildir.** Bauhaus daire/kare/üçgen dengesi ve 2px çizgi kullanır (35); konstrüktivizm **diagonal çubuk + montaj** ve 3px+ kural ile ayrılır — şekil sayısı az, çubuk ağırlığı yüksektir.
- **Neo-brutalism değildir.** Neo-brutalism offset gölge ve "dijital sticker" dili taşır; burada gölge yalnız `--shadow-hard` (6px blok) ve yalnız öne çıkan tek katmanda.
- **Swiss Design değildir.** Swiss ızgaraya **itaat** eder ve sola dayalı sakin tipografi kurar; konstrüktivizm ızgarayı **kırar** (öğe ızgaradan taşar, diagonal keser).
- **Art Deco / propaganda afişi klişesi değildir.** Dekoratif yıldız, çekiç-orak, dokuma doku yok; dil geometrik ve soyuttur.
- **"Kırmızı-siyah tema" değildir.** Diagonal eksen ve aşırı tipografi ölçeği olmadan geriye sadece agresif bir kurumsal palet kalır.

### Where it comes from
Rodchenko ve El Lissitzky'nin afiş/kitap kapakları, VKhUTEMAS atölyeleri, 1920'ler foto-montajı ve `Pro Let` tipografi denemeleri. 1990'larda Ray Gun/David Carson, 2010'larda kurumsal kimlik yenilemeleriyle döndü: kalabalık bir feed'de tek karede okunmak isteyen her marka için hâlâ en keskin çözüm. Klişeye düşmemesi için korunması gereken detay: **montaj mantığı** — öğeler birbirine değil, ortak diagonal eksene hizalanır.

### Recognition test in 3 seconds
1. Ekranı kesen en az bir **kalın diagonal çubuk** (≥24px kalınlık, 58° veya −32°) var mı?
2. Başlık **ekran genişliğinin ≥%55'ini** kaplıyor mu (display ≥56px, satır aralığı ≤0.96)?
3. Palet üçe kilitli mi: kırmızı `#c1121f` + siyah `#11100f` + kırık beyaz `#efeae0`?
4. Radius her yerde **0** mı; gölge yalnız tek katmanda 6px blok mu?
5. Etiketler **uppercase mono** ve tracking ≥`0.18em` mi; bir etiket dikey (90°) mi?

## Visual signature
- **Diagonal çubuk:** `transform: rotate(-32deg)`, kalınlık 24–40px, `background: var(--accent)`, `border-radius: 0`, metnin arkasında (`z-index` düşük, `pointer-events: none`).
- **3px siyah kural:** panel/buton/input kenarı `3px solid var(--line)`; bölüm ayırıcı `6px`.
- **Aşırı display:** Archivo Black uppercase, 56–72px, `line-height: .94`, `letter-spacing: -.01em`, en fazla 3 satır.
- **Dikey mono etiket:** `writing-mode: vertical-rl` + `text-orientation: mixed`, 10px Space Mono, tracking `0.22em`, çubuk kenarında.
- **Kırmızı blok:** düz dolgu, 0 radius, 96–180px; içinde yalnız `--accent-ink` metin (5.87:1).
- **Blok gölge:** `6px 6px 0 var(--line)` — yalnız hero kartı, öne çıkan pricing kartı ve modal.
- **Montaj ızgarası:** görsel kartın bir kenarı container dışına ≥24px taşar.
- **Typography:** Archivo Black (display) + Jost (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#c1121f`; neutral scale `#efeae0` → `#11100f`.
- **Radius:** `0px` / `0px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Tek eksen:** ekran başına tek diagonal açı ailesi seçilir (58° ya da −32°); aynı ekranda iki farklı açı kullanılmaz.
2. **Çubuk bütçesi:** ekran başına 1–3 kalın çubuk. Her çubuk bir işlev taşır: bölüm ayırıcı, yönlendirme, vurgu bloğu.
3. **Kural kalınlığı:** panel/buton kenarı `3px var(--line)`; bölüm ayırıcı `6px`; hairline **yasak**.
4. **Palet kilidi:** nötr (kırık beyaz + siyah) + tek kırmızı. Kırmızı ekranın **≤%12**'sini kaplar; ikinci bir renk (sarı/mavi) yalnız grafik serisinde ve ≤%3.
5. **Tipografi ölçeği:** display ≥56px (mobil ≥34px), gövde 15.5px, etiket 10px mono uppercase. Ara basamak uydurulmaz; ölçek atlamalıdır (10 → 15.5 → 27 → 56/64).
6. **Radius 0**, yumuşak gölge yok; tek derinlik aracı `--shadow-hard` (6px blok) ve yalnız öne çıkan kart/modal.
7. **Asimetri zorunlu:** hero 7/5 veya 9/3; ortalanmış 6/6 kompozisyon yasak. Bölüm başına en az bir öğe ızgara dışına taşar (negatif margin ≥16px).
8. **Montaj hizası:** metin, çubuk ve görsel bloğu aynı diagonal eksene hizalanır; hiçbir öğe rastgele döndürülmez (döndürme yalnız çubuk ve mono etiket için, ±2° tolerans).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#efeae0` | page background | as a card background |
| `--bg-2` | `#e2dbcd` | partition divider floor, table top | button background |
| `--surface` | `#fbf8f2` | kart, input, modal | full-page background |
| `--surface-2` | `#e9e2d5` | passive chip, hover background | primary button |
| `--ink` | `#11100f` | title, body, icon | large background |
| `--ink-soft` | `#5a5349` | secondary text, description | — |
| `--ink-faint` | `#847d6f` | decorative label, separator text | interactive text |
| `--accent` | `#c1121f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fbf8f2` | text above accent | non-accent background |
| `--line` | `#11100f` | all borders | text colour |

- Measured contrast: `ink/bg` **15.85:1** · `ink-soft/bg` **6.33:1** · `ink-faint/bg` **3.41:1 (decorative)** · `accent-ink/accent` **5.87:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 34px (mobile 34px) | 600 | 1.12 | -0.02em |
| H2 | same | 27px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 15.5px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gradient, blur, cam, yumuşak/çok katmanlı gölge.
- Radius > 0 (buton, input, kart, chip — istisna yok).
- 4+ renk; pastel ton; metalik/altın vurgu.
- 1px hairline kenarlık ("minimal" taklidi).
- Metnin üstünden geçen çubuk (kontrast ve okunurluk kırılır).
- Gövde metninde uppercase veya display font.
- Sürekli animasyon, parallax, döngüsel dönen şekil.
- Yoğun tabloda dev başlık veya diagonal arka plan deseni.
- Süs olarak yıldız/çekiç-orak/endüstriyel ikon klişesi.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.87:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 64–72px uppercase başlık, 7/5 asimetri, 1 kırmızı diagonal çubuk, tek CTA; başlık en fazla 3 satır | `shots/01-page.png` |
| Dashboard | düşük | çubuk ve döndürme kapanır; KPI'lar `6px` üst kural + mono etiket; kırmızı yalnız sapma değerinde | `shots/01-page.png` |
| Mobil | orta | tek kolon, display 34px, çubuk ekranın sağ kenarından taşar (taşma `overflow: hidden`), dokunma 44px | `shots/01-page.png` |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 0 ve 3px kural her bileşende görünür | `shots/01-page.png` |
| Form | çok düşük | çubuk yok; 3px kenarlı input, tek sütun 460px, etiket mono uppercase | `shots/01-page.png` |
| Modal / katman | orta | 3px çerçeve + 6px blok gölge; başlık 27px; 2 buton sağa | `shots/01-page.png` |
| Veri | düşük | tablo 54px satır, dış çerçeve 3px, iç 1px; grafik 0 radius çubuklar | `shots/01-page.png` |
| Gezinme | orta | alt `3px` kural; aktif öğe altında `6px` kırmızı; logo kare monogram | `shots/01-page.png` |
| Pricing | orta | 3 kart; orta kart `6px` blok gölge + `6px` üst kırmızı çubuk; "seç" birincil buton | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs ≤.22; yalnız 3px kenar + mono etiket; güven için sade | `shots/01-page.png` |
| Liste | düşük | filtre çubuğu 3px alt kural; satır 54px; seçili satır sol `6px` kırmızı | `shots/01-page.png` |
| Boş / hata durumu | orta | tek kırmızı blok (96px) + tek cümle + tek buton; 404'te display 96px | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlıkları `6px` kural ile; anahtar 44×24 radius 0; tehlike bölgesi kırmızı kenar | `shots/01-page.png` |
| Onboarding | yüksek | adım başına bir montaj öğesi (çubuk → blok → harf); ilerleme çubuğu 6px | `shots/01-page.png` |
| Makale | orta | 680px ölçü, drop-cap yok, 6px kural ile bölüm, mono pull-quote sol kenarda | `shots/01-page.png` |
| Mobil sheet | orta | alt sayfa 3px üst kural, 0 radius, 48px sürükleme tutamacı | `shots/01-page.png` |
| Mobil form | çok düşük | tam genişlik input 52px yükseklik, klavye üstü CTA 56px | `shots/01-page.png` |
| Mobil liste | düşük | 56px satır, avatar yerine kare mono baş harf | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.85:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.33:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.41:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.87:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.87:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.2 | ≥ 60 target | thin text |

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
| "Sadece kırmızı-siyah tema" gibi duruyor | Diagonal eksen ve tipografi ölçeği uygulanmadı | En az 1 çubuk + display ≥56px + 7/5 asimetri |
| Afiş gibi ama okunmuyor | Gövde metni display font veya uppercase | Gövde Jost 15.5, uppercase yalnız başlık/etiket |
| Neo-brutalism'e kaydı | Radius/gölge eklendi, çubuk kaldırıldı | Radius 0, gölge yalnız `--shadow-hard` 6px |
| Göz yoruyor | Kırmızı alan >%12, 4+ renk | Kırmızı ≤%12, ikinci renk yok |
| Dağınık montaj | Öğeler rastgele döndürülmüş | Tek açı ailesi (58° veya −32°), ±2° tolerans |
| Hero'da metin çubuğun altında kalıyor | Çubuk `z-index` yüksek | Çubuk metnin **arkasına**: `z-index: 0`, `pointer-events: none` |
| Mobilde başlık kırpılıyor | 64px sabit punto | `clamp(34px, 6.4vw, 72px)` |
| Tablo okunmuyor | Satır içinde 3px çerçeve + dev başlık | Dış çerçeve 3px, iç 1px; başlık 27px'e in |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `bauhaus` | Same level of seriousness; accent sharing is not allowed |
| garnish | `maximalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.moma.org/artists/4978 | Rodchenko (MoMA) — afiş kompozisyonu, diagonal eksen, foto-montaj |
| https://www.moma.org/artists/3522 | El Lissitzky (MoMA) — Pro UNOVIS tipografi blokları, harf–geometri ilişkisi |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — display, uppercase ağırlık |
| https://fonts.google.com/specimen/Jost | Jost — gövde, geometrik nötr |
| https://fonts.google.com/specimen/Space+Mono | Space Mono — etiket, dikey mono |

## AI brief

```text
Stil: Constructivism (styles/36-constructivism/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="constructivism"] değişkenleri; hard-coded renk/gölge/radius yasak.
Eksen: ekran başına tek açı ailesi (58° veya −32°); 1–3 kalın çubuk (24–40px), her çubuk işlev taşır, metnin arkasında.
Tipografi: --font-display (Archivo Black) uppercase başlıkta ≥56px, line-height .94; --font-body (Jost) gövdede 15.5px; --font-mono (Space Mono) 10px uppercase etiketlerde, tracking 0.22em.
Palet: #efeae0 zemin + #11100f mürekkep + #c1121f kırmızı (kırmızı ≤%12, üstünde yalnız --accent-ink 5.87:1).
Yüzey: 3 seviye (--bg / --surface + 3px var(--line) / + --shadow-hard 6px 6px 0); radius her yerde 0.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil (focus: 3px outline, offset 3px).
Düzen: asimetri 7/5 veya 9/3; 6/6 ortalanmış kompozisyon yasak; bölüm başına ≥1 öğe ızgara dışına taşar.
Hareket: basma 90ms translate(2px,2px), geçiş 200ms, ödül 320ms; prefers-reduced-motion zorunlu.
Yasak: gradient/blur/cam, radius>0, 4+ renk, hairline, metin üstünden geçen çubuk, gövdede uppercase.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Constructivism (constructivism) · family: Geometric (35–36)
Token: --bg #efeae0 · --surface #fbf8f2 · --ink #11100f · --accent #c1121f · --line #11100f
Radius: 0px / 0px · Typography: Archivo Black / Jost / Space Mono
Required: **Tek eksen:** ekran başına tek diagonal açı ailesi seçilir (58° ya da −32°); aynı ekranda iki farklı açı kullanılmaz. · **Çubuk bütçesi:** ekran başına 1–3 kalın çubuk. Her çubuk bir işlev taşır: bölüm ayırıcı, yönlendirme, vurgu bloğu. · **Kural kalınlığı:** panel/buton kenarı `3px var(--line)`; bölüm ayırıcı `6px`; hairline **yasak**.
Banned: Gradient, blur, cam, yumuşak/çok katmanlı gölge. · Radius > 0 (buton, input, kart, chip — istisna yok). · 4+ renk; pastel ton; metalik/altın vurgu.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="constructivism"] {
  --bg: #efeae0; --bg-2: #e2dbcd;
  --surface: #fbf8f2; --surface-2: #e9e2d5;
  --ink: #11100f; --ink-soft: #5a5349; --ink-faint: #847d6f;
  --accent: #c1121f; --accent-ink: #fbf8f2;
  --line: #11100f;
  --danger: #cf2015;
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
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
