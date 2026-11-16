# 37 · Kinetic Type

> **In one sentence:** Tipografi dekor değil taşıyıcıdır — 28→96px arasında atlayan dev ölçek, 0.95 satır aralığı ve metni kesen diagonal katmanlarla arayüz poster gibi okunur.

| | |
|---|---|
| **Feeling** | hareketli, gürültülü, keskin, enerjik |
| **Best for** | ajans/kreatif stüdyo vitrini, etkinlik ve lansman sayfası, ürün tanıtım landing'i, müzik/medya uygulaması, portfolyo |
| **Avoid** | yoğun operasyon paneli (20+ satır tablo), finans işlemi ve mutabakat ekranı, sağlık/kamu formu, 8+ saat açık kalan kontrol odası, e-ticaret ürün listesi |
| **Difficulty** | orta-yüksek (ölçek atlaması + döndürülmüş katman disiplini) · **Accessibility** |  |
| **Family** | Typographic (37–37) · **Token** | `kit/tokens.css` → `[data-style="kinetic-type"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Kinetic Type, hiyerarşiyi **renkle değil ölçekle** kurar. Sayfada iki baskın punto vardır: 96px'e kadar çıkan display ve 15px gövde — ara basamaklar neredeyse yoktur. Araya giren 28–44px H2'ler "ara ton" değil, **kontrast kırıcı** olarak kullanılır. Satır aralığı 0.92–1.0'a sıkışır (büyük harfte harfler neredeyse birbirine değer), tracking eksiye gider (`-0.03em`), böylece başlık bir kelime bloğu değil **tek bir biçim** olarak okunur. Palet monokromdur: neredeyse siyah zemin `#0e0e10`, kırık beyaz mürekkep `#f4f2ec` ve tek asit vurgu `#e8ff47`. Vurgu metni renklendirmez, **keser**: kelimenin üstünden geçen diagonal şerit, döndürülmüş ikinci katman veya accent zeminli kelime bloğu.

Kazandığı şey: ekranın 3 saniyede hatırlanması. Tek bir dev kelime, 12 kartlı bir ızgaradan daha güçlü bir çapa kurar; landing'de dönüşümün taşıyıcısı görsel değil başlıktır. Feda ettiği şey: **tarama hızı**. 0.95 satır aralığı ve negatif tracking, 10 satırdan uzun metinde okumayı yavaşlatır; bu yüzden stil veri ve ayar ekranlarında geri çekilir (display 96 → 40px, rotasyon 0°, gövde 1.55 satır aralığına döner).

### What is not
- **Constructivism (36) değildir.** Constructivism kalın çerçeve (3px), blok gölge (`--shadow-hard`) ve kırmızı-siyah iki renkle çalışır; burada çizgi **1px**, gölge **yok**, palet **monokrom + tek asit** ve karakteri taşıyan şey çubuk değil **punto atlaması**.
- **Swiss Design (02) değildir.** Swiss ızgaraya **itaat** eder ve tipografiyi hizada tutar (display 62px, tracking 0); burada ızgara korunur ama en az bir blok **6°'ye kadar döner** ve display 96px'e çıkar.
- **Acid Graphics (15) değildir.** Acid gradyan, parlama ve çoklu neonla doldurur; burada `--blur: 0`, gradyan yasak, vurgu tek renk ve düz.
- **Neo-brutalism (13) değildir.** Neo-brutalism 0 radius + sert ofset gölgeyle hacim kurar; burada radius 2/4px, `--shadow: none`, hacim **katman sırası ve kontrast** ile kurulur.
- **Editorial Design (04) değildir.** Editorial serif başlık ve geniş satır aralığıyla okutur; burada display **grotesk/sıkışık** ve satır aralığı 1'in altında.

### Where it comes from
Hareketli tipografi (kinetic typography) 1950'lerin film jeneriklerinden (Saul Bass), 1960'lar İsviçre poster tipografisinden (Weingart'ın kırdığı hiza) ve 2000'lerin motion-graphics jeneriklerinden gelir. Web'e taşınması iki teknikle oldu: değişken font ağırlıkları ve `clamp()` — tek satırla 28→96px atlayan, kırpılmayan display kurulabiliyor. Bugün tekrar kullanılmasının nedeni ölçülebilir: kısa dikkat süresinde **tek dev kelime**, aynı alandaki 8 küçük karttan daha hızlı hatırlanıyor. Klişeye düşmemesi için korunması gereken detay: **disiplinli rotasyon** — ekran başına en fazla 2 döndürülmüş katman ve tek yön (sağa yukarı), ölçek atlaması da en fazla 3 basamak. Her şeyi eğmek ve her başlığı 96px yapmak stili "gürültü"ye çevirir.

### Recognition test in 3 seconds
1. Tek bir başlık **60px üstü** ve satır aralığı **1.0 altında** mı; gövde ise 15px (ölçek atlaması ≥4×)?
2. Palet **monokrom** mu; tek vurgu asit sarı-yeşil `#e8ff47` ve ekranın **≤%10**'unda mı?
3. Metni kesen **diagonal accent şerit** veya **6°'ye kadar döndürülmüş** ikinci katman var mı (en fazla 2)?
4. Köşeler **2–4px** mi; hiçbir yerde gölge yok mu (`--shadow: none`)?
5. Etiketler mono, büyük harf ve geniş tracking (`0.18em`) mi; başlıkta uppercase kullanılıyor mu?

## Visual signature
- **Dev ölçek atlaması:** `h1 { font-size: clamp(28px, 7vw, 96px); line-height: .95; letter-spacing: -0.03em; text-transform: uppercase; }` — 1440px'te 96px'e oturur, 390px'te 28px.
- **Negatif tracking + sıkı satır:** display `-0.03em / .95`; H2 `-0.02em / 1.0`. Kelimeler arası boşluk `word-spacing: -0.02em` ile bir miktar kapanır.
- **Diagonal accent şerit:** `.hero-visual::after` benzeri tek şerit — `transform: rotate(-6deg)`, yükseklik 10–14px, `background: var(--accent)`, metnin **arkasında** (`z-index` düşük), genişlik kapsayıcının %110'u.
- **Döndürülmüş kelime katmanı:** ekran başına ≤2 katman, `rotate(-6deg)` veya `rotate(3deg)`; içinde yalnız display kelime (26–44px) ya da mono etiket (10px) durur.
- **Monokrom zemin + 1px çizgi:** yüzeyler `--bg` / `--surface` / `--surface-2` üç kademe; kart `1px solid var(--line)`, `border-radius: 4px`, gölge yok.
- **Acid vurgu bloğu:** vurgulanan kelime `background: var(--accent); color: var(--accent-ink); padding: 0 .08em;` — satır içi, `border-radius: 2px`.
- **Mono etiket izi:** tüm etiketler `--font-mono` 10px, `letter-spacing: .18em`, uppercase, `--ink-faint`.
- **Grain:** `--grain: .05` → örtü opaklığı `.25`, yalnız zemin katmanında; koyu zeminde doku görünür olduğu için .06 üstü yasak.
- **Typography:** Anton (display) + Space Grotesk (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#e8ff47`; neutral scale `#0e0e10` → `#f4f2ec`.
- **Radius:** `2px` / `4px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Ölçek atlaması:** display `clamp(28px, 7vw, 96px)`, gövde 15px, etiket 10px. Aradaki basamaklar (32 / 44 / 60) yalnız H2 ve KPI sayısında kullanılır; ekran başına en fazla **6 punto** toplam.
2. **Sıkı satır aralığı:** display `line-height: .95` (en uzun 2 satır), H2 `1.0`, gövde `1.55`. Gövde metni asla `1.4` altına inmez (okunurluk).
3. **Negatif tracking:** display `-0.03em`, H2 `-0.02em`, gövde `0em`, mono etiket `+0.18em`. Display'de `-0.04em` altı yasak (harfler birleşir).
4. **Tek asit vurgu:** `--accent` yalnız 4 yerde — birincil buton, aktif durum, diagonal şerit, vurgulanan kelime bloğu. Ekranın ≤%10'u; ikinci sıcak/soğuk renk yok.
5. **Rotasyon bütçesi:** ekran başına en fazla **2** döndürülmüş katman, açı **-6°…+6°** aralığında ve yön tek; döndürülen katmanın içinde **gövde metni olmaz** (yalnız display kelime, etiket, çizgi).
6. **Gölge yok:** `--shadow: none`, `--shadow-hard: none`. Hacim 1px çizgi + yüzey tonu (`--bg` → `--surface` → `--surface-2`) +`.panel` üstündeki 1px accent şeritle kurulur.
7. **Çizgi:** `1px solid var(--line)` = `rgba(244,242,236,.18)`. 2px yalnız odak halkasında ve alt-çizgi göstergesinde; 3px ve üstü kalın çerçeve yasak.
8. **Izgara korunur:** 12 kolon, gutter 24px, container 1200px. Döndürülmüş katman ızgarayı **kırar ama bozmaz** — metin sütununun hizası ekran kenarına paralel kalır.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0e0e10` | page background | as a card background |
| `--bg-2` | `#17171a` | partition divider floor, table top | button background |
| `--surface` | `#1b1b1f` | kart, input, modal | full-page background |
| `--surface-2` | `#232329` | passive chip, hover background | primary button |
| `--ink` | `#f4f2ec` | title, body, icon | large background |
| `--ink-soft` | `#a8a49b` | secondary text, description | — |
| `--ink-faint` | `#6f6b64` | decorative label, separator text | interactive text |
| `--accent` | `#e8ff47` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0e0e10` | text above accent | non-accent background |
| `--line` | `rgba(244,242,236,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.23:1** · `ink-soft/bg` **7.76:1** · `ink-faint/bg` **3.64:1 (decorative)** · `accent-ink/accent` **17.29:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | clamp(28px, 9vw, 44px) (mobile 28px) | 700 | 0.98 | -0.035em |
| H2 | same | 32px | 600 | 1.08 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Space Grotesk) | 15px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- İki renk arası gradyan (`linear-gradient` renk karışımı), parlama/glow, neon.
- Gölge: yumuşak gölge, blok gölge, inset gölge, `drop-shadow` — istisna yok.
- İkinci aksan rengi (kırmızı, turuncu, mor); asit sarı-yeşil tek başına anlam taşır.
- Display'de `-0.04em` altı tracking, 0.92 altı satır aralığı, 3 satırdan uzun dev başlık.
- 96px üstü punto (mobilde 44px üstü), ekran başına 3'ten fazla punto basamağı.
- Döndürülmüş **gövde metni**, döndürülmüş form alanı, döndürülmüş tablo satırı.
- Sürekli kayan yazı (marquee), otomatik oynayan kinetic loop, parallax, `animation-iteration-count: infinite` olan metin animasyonu.
- 3px ve üstü kalın çerçeve, çift kenarlık, `border-radius: 0` (düz köşe bu stile aittir ama 2px taban korunur) — yalnız bölüm ayırıcıları düz olabilir.
- Serif display (Editorial/Dark Academia karışması), el yazısı font, illüstrasyon kolajı.
- Gövde metninde uppercase; büyük harf yalnız display ve mono etiketlerde.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 17.29:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | display 96px uppercase 2 satır, diagonal accent şerit, 8/4 asimetri, tek CTA | `shots/01-page.png` |
| Dashboard | düşük | display 44px'e iner, rotasyon 0°, KPI sayıları Anton 44px, accent ≤%6 | `shots/01-page.png` |
| Mobil | orta | tek kolon, display `clamp(28px, 9vw, 44px)`, dokunma 44px, şerit yalnız üst bölümde | `shots/01-page.png` |
| Bileşenler · temel | orta | ölçek levhası (10/15/19/32/96) + radius 2/4 + 1px çizgi; gölge yok | `shots/01-page.png` |
| Form | çok düşük | rotasyon yok; 50px input, mono etiket, tek sütun 460px | `shots/01-page.png` |
| Modal / katman | orta | üst 2px accent, radius 4px, backdrop blur'suz; mono başlık izi | `shots/01-page.png` |
| Veri | düşük | tablo 52px satır, 1px çizgi; çubuklar 2px radius, accent yalnız seri 1 | `shots/01-page.png` |
| Gezinme | orta | alt 1px kural; aktif mono etiket + 2px accent alt çizgi | `shots/01-page.png` |
| Pricing | orta | 3 kart; orta kart üst 2px accent + `--surface-2`; fiyat Anton 44px | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs ≤1 şerit; yalnız 1px kenar + 2px radius; güven için sade | `shots/01-page.png` |
| Liste | düşük | filtre çubuğu 1px alt kural; satır 52px; seçili satır sol 2px accent | `shots/01-page.png` |
| Boş / hata durumu | orta | 404 rakamı Anton 58px + tek cümle + tek buton; accent yalnız sayı ve CTA'da | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlıkları 1px kural + 4px kart; anahtar pill 40×22 | `shots/01-page.png` |
| Onboarding | yüksek | adım göstergesi mono 10px; display 34px iki satır, rotasyon yok | `shots/01-page.png` |
| Makale | orta | 54ch ölçü, 24px H2, 1px ayırıcı; display yalnız başlıkta, rotasyon yok | `shots/01-page.png` |
| Mobil sheet | orta | alt sayfa üst 2px accent, radius 4px üst köşe, 44px tutamaç | `shots/01-page.png` |
| Mobil form | çok düşük | tam genişlik 50px input, klavye üstü 46px CTA | `shots/01-page.png` |
| Mobil liste | düşük | 60px satır, monogram kare baş harf (2px radius), 1px ayırıcı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.23:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.76:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.64:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 17.29:1 | ≥ 4.5 | button text |
| focus ring/ground | 17.29:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99 | ≥ 60 target | thin text |

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
| "Sadece büyük yazı" gibi duruyor | Ölçek atlaması var ama kesme/rotasyon katmanı yok | Ekran başına 1 diagonal şerit + 1 döndürülmüş kelime ekle |
| Gürültülü, okunmuyor | 3+ döndürülmüş katman, her başlık 96px | Rotasyon ≤2, açı ≤6°, ikinci başlığı 32px'e indir |
| Harfler birleşiyor | tracking `-0.04em` altı veya satır aralığı `0.88` | Geri çek: `-0.03em` ve `.95`; büyük harfte alt sınır budur, Anton'da daha aşağısı harfleri birleştirir |
| Mobilde kelime kırpılıyor | Sabit 96px punto | `clamp(28px, 7vw, 96px)`; mobilde `text-wrap: balance` |
| Asit renk baskın | accent alanı >%10, ikinci accent eklendi | Accent yalnız 4 kullanımda; ikinci renk yok |
| Zeminde derinlik kayboldu | Sadece `--bg` kullanıldı, kart sınırı görünmüyor | Kart `--surface` + 1px `--line`; modal `--surface-2` + üst 2px accent |
| Gölge eklendi, stil bozuldu | "Kart havada dursun" refleksi | Koyu zeminde gölge görünmez: `--shadow: none`, ayrımı ton + çizgi yapar |
| Constructivism'e kaydı | 3px çerçeve veya blok gölge eklendi | Çizgi 1px, gölge yok, karakter punto atlamasından gelsin |
| Yazı animasyonu rahatsız ediyor | Sonsuz marquee / kinetic loop | Yalnız tek atım vurgu (320ms); `prefers-reduced-motion` zorunlu |
| Grain leke gibi | `--grain` > .06 veya metin katmanında | `.05`, opaklık .25, yalnız zemin katmanı |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `constructivism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `organic-bio` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `editorial-design` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Kinetic_typography | Kinetic typography (Wikipedia) — hareketli tipografinin tanımı, Saul Bass jenerikleri, zamanlama |
| https://fonts.google.com/specimen/Anton | Anton — display: tek ağırlık, dar grotesk, büyük harfte sıkı |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk — gövde: teknik grotesk, 15px'te okunur |
| https://fonts.google.com/specimen/Space+Mono | Space Mono — etiket / ölçü / mono iz |
| https://en.wikipedia.org/wiki/International_Typographic_Style | International Typographic Style — ızgara disiplini: 12 kolon + sola dayalı hiza |

## AI brief

```text
Stil: Kinetic Type (styles/37-kinetic-type/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="kinetic-type"] değişkenleri; hard-coded renk/gölge/radius yasak.
Ölçek: display clamp(28px,7vw,96px)/0.95/-0.03em uppercase (Anton); gövde Space Grotesk 15px/1.55; etiket Space Mono 10px/0.18em uppercase; atlama 96/15 = 6.4×, ara basamak eklenmez.
Renk: monokrom #0e0e10 zemin + #f4f2ec mürekkep (17.23:1) + tek asit aksan #e8ff47 (accent-ink/accent 17.29:1); asit alan ≤%10, metin olarak asit yasak.
Form: radius 2px / 4px, --shadow none, --shadow-hard none; ayrım 1px var(--line) + ton kademesi (--bg → --surface → --surface-2).
Katman: ekran başına ≤2 döndürülmüş öğe, açı -6°…+6°, yalnız display kelime/etiket; 1 diagonal accent şerit (10–14px, metnin arkasında, pointer-events none).
Düzen: hero 8/5 (1.6fr/1fr); bölüm arası 72px (mobil 44px); gövde ölçüsü ≤54ch, display satırı ≤16ch ve ≤2 satır.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; buton 46px mono uppercase, input 50px, focus 2px accent + 2px offset.
Hareket: basma 90ms, geçiş 220ms (clip-path reveal), vurgu 320ms tek atım; prefers-reduced-motion zorunlu, marquee/loop yasak.
Yasak: gölge, gradyan, blur, ikinci aksan, 3px+ çerçeve, serif display, döndürülmüş gövde metni, -0.04em altı tracking.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Kinetic Type (kinetic-type) · family: Typographic (37–37)
Token: --bg #0e0e10 · --surface #1b1b1f · --ink #f4f2ec · --accent #e8ff47 · --line rgba(244,242,236,.18)
Radius: 2px / 4px · Typography: Anton / Space Grotesk / Space Mono
Required: **Ölçek atlaması:** display `clamp(28px, 7vw, 96px)`, gövde 15px, etiket 10px. Aradaki basamaklar (32 / 44 / 60) yalnız H2 ve KPI sayısında kullanılır; ekran başına en fazla **6 punto** toplam. · **Sıkı satır aralığı:** display `line-height: .95` (en uzun 2 satır), H2 `1.0`, gövde `1.55`. Gövde metni asla `1.4` altına inmez (okunurluk). · **Negatif tracking:** display `-0.03em`, H2 `-0.02em`, gövde `0em`, mono etiket `+0.18em`. Display'de `-0.04em` altı yasak (harfler birleşir).
Banned: İki renk arası gradyan (`linear-gradient` renk karışımı), parlama/glow, neon. · Gölge: yumuşak gölge, blok gölge, inset gölge, `drop-shadow` — istisna yok. · İkinci aksan rengi (kırmızı, turuncu, mor); asit sarı-yeşil tek başına anlam taşır.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="kinetic-type"] {
  --bg: #0e0e10; --bg-2: #17171a;
  --surface: #1b1b1f; --surface-2: #232329;
  --ink: #f4f2ec; --ink-soft: #a8a49b; --ink-faint: #6f6b64;
  --accent: #e8ff47; --accent-ink: #0e0e10;
  --line: rgba(244,242,236,.18);
  --danger: #e4392b;
  --danger-ink: #0b0d10;
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
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0;
}
```
