# 37 · Kinetic Type

> **Bir cümlede:** Tipografi dekor değil taşıyıcıdır — 28→96px arasında atlayan dev ölçek, 0.95 satır aralığı ve metni kesen diagonal katmanlarla arayüz poster gibi okunur.

| | |
|---|---|
| **Hissiyat** | hareketli, gürültülü, keskin, enerjik |
| **En iyi** | ajans/kreatif stüdyo vitrini, etkinlik ve lansman sayfası, ürün tanıtım landing'i, müzik/medya uygulaması, portfolyo |
| **Kaçın** | yoğun operasyon paneli (20+ satır tablo), finans işlemi ve mutabakat ekranı, sağlık/kamu formu, 8+ saat açık kalan kontrol odası, e-ticaret ürün listesi |
| **Zorluk** | orta-yüksek (ölçek atlaması + döndürülmüş katman disiplini) · **Erişilebilirlik** | iyi (17.23:1 gövde, 17.29:1 accent üstü; risk tek: rotasyonlu metin) |
| **Aile** | Tipografik (37) · **Token** | `kit/tokens.css` → `[data-style="kinetic-type"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Kinetic Type, hiyerarşiyi **renkle değil ölçekle** kurar. Sayfada iki baskın punto vardır: 96px'e kadar çıkan display ve 15px gövde — ara basamaklar neredeyse yoktur. Araya giren 28–44px H2'ler "ara ton" değil, **kontrast kırıcı** olarak kullanılır. Satır aralığı 0.92–1.0'a sıkışır (büyük harfte harfler neredeyse birbirine değer), tracking eksiye gider (`-0.03em`), böylece başlık bir kelime bloğu değil **tek bir biçim** olarak okunur. Palet monokromdur: neredeyse siyah zemin `#0e0e10`, kırık beyaz mürekkep `#f4f2ec` ve tek asit vurgu `#e8ff47`. Vurgu metni renklendirmez, **keser**: kelimenin üstünden geçen diagonal şerit, döndürülmüş ikinci katman veya accent zeminli kelime bloğu.

Kazandığı şey: ekranın 3 saniyede hatırlanması. Tek bir dev kelime, 12 kartlı bir ızgaradan daha güçlü bir çapa kurar; landing'de dönüşümün taşıyıcısı görsel değil başlıktır. Feda ettiği şey: **tarama hızı**. 0.95 satır aralığı ve negatif tracking, 10 satırdan uzun metinde okumayı yavaşlatır; bu yüzden stil veri ve ayar ekranlarında geri çekilir (display 96 → 40px, rotasyon 0°, gövde 1.55 satır aralığına döner).

### Ne değildir
- **Constructivism (36) değildir.** Constructivism kalın çerçeve (3px), blok gölge (`--shadow-hard`) ve kırmızı-siyah iki renkle çalışır; burada çizgi **1px**, gölge **yok**, palet **monokrom + tek asit** ve karakteri taşıyan şey çubuk değil **punto atlaması**.
- **Swiss Design (02) değildir.** Swiss ızgaraya **itaat** eder ve tipografiyi hizada tutar (display 62px, tracking 0); burada ızgara korunur ama en az bir blok **6°'ye kadar döner** ve display 96px'e çıkar.
- **Acid Graphics (15) değildir.** Acid gradyan, parlama ve çoklu neonla doldurur; burada `--blur: 0`, gradyan yasak, vurgu tek renk ve düz.
- **Neo-brutalism (13) değildir.** Neo-brutalism 0 radius + sert ofset gölgeyle hacim kurar; burada radius 2/4px, `--shadow: none`, hacim **katman sırası ve kontrast** ile kurulur.
- **Editorial Design (04) değildir.** Editorial serif başlık ve geniş satır aralığıyla okutur; burada display **grotesk/sıkışık** ve satır aralığı 1'in altında.

### Nereden gelir
Hareketli tipografi (kinetic typography) 1950'lerin film jeneriklerinden (Saul Bass), 1960'lar İsviçre poster tipografisinden (Weingart'ın kırdığı hiza) ve 2000'lerin motion-graphics jeneriklerinden gelir. Web'e taşınması iki teknikle oldu: değişken font ağırlıkları ve `clamp()` — tek satırla 28→96px atlayan, kırpılmayan display kurulabiliyor. Bugün tekrar kullanılmasının nedeni ölçülebilir: kısa dikkat süresinde **tek dev kelime**, aynı alandaki 8 küçük karttan daha hızlı hatırlanıyor. Klişeye düşmemesi için korunması gereken detay: **disiplinli rotasyon** — ekran başına en fazla 2 döndürülmüş katman ve tek yön (sağa yukarı), ölçek atlaması da en fazla 3 basamak. Her şeyi eğmek ve her başlığı 96px yapmak stili "gürültü"ye çevirir.

### 3 saniyede tanıma testi
1. Tek bir başlık **60px üstü** ve satır aralığı **1.0 altında** mı; gövde ise 15px (ölçek atlaması ≥4×)?
2. Palet **monokrom** mu; tek vurgu asit sarı-yeşil `#e8ff47` ve ekranın **≤%10**'unda mı?
3. Metni kesen **diagonal accent şerit** veya **6°'ye kadar döndürülmüş** ikinci katman var mı (en fazla 2)?
4. Köşeler **2–4px** mi; hiçbir yerde gölge yok mu (`--shadow: none`)?
5. Etiketler mono, büyük harf ve geniş tracking (`0.18em`) mi; başlıkta uppercase kullanılıyor mu?

## Zorunlu kurallar

1. **Ölçek atlaması:** display `clamp(28px, 7vw, 96px)`, gövde 15px, etiket 10px. Aradaki basamaklar (32 / 44 / 60) yalnız H2 ve KPI sayısında kullanılır; ekran başına en fazla **6 punto** toplam.
2. **Sıkı satır aralığı:** display `line-height: .95` (en uzun 2 satır), H2 `1.0`, gövde `1.55`. Gövde metni asla `1.4` altına inmez (okunurluk).
3. **Negatif tracking:** display `-0.03em`, H2 `-0.02em`, gövde `0em`, mono etiket `+0.18em`. Display'de `-0.04em` altı yasak (harfler birleşir).
4. **Tek asit vurgu:** `--accent` yalnız 4 yerde — birincil buton, aktif durum, diagonal şerit, vurgulanan kelime bloğu. Ekranın ≤%10'u; ikinci sıcak/soğuk renk yok.
5. **Rotasyon bütçesi:** ekran başına en fazla **2** döndürülmüş katman, açı **-6°…+6°** aralığında ve yön tek; döndürülen katmanın içinde **gövde metni olmaz** (yalnız display kelime, etiket, çizgi).
6. **Gölge yok:** `--shadow: none`, `--shadow-hard: none`. Hacim 1px çizgi + yüzey tonu (`--bg` → `--surface` → `--surface-2`) +`.panel` üstündeki 1px accent şeritle kurulur.
7. **Çizgi:** `1px solid var(--line)` = `rgba(244,242,236,.18)`. 2px yalnız odak halkasında ve alt-çizgi göstergesinde; 3px ve üstü kalın çerçeve yasak.
8. **Izgara korunur:** 12 kolon, gutter 24px, container 1200px. Döndürülmüş katman ızgarayı **kırar ama bozmaz** — metin sütununun hizası ekran kenarına paralel kalır.

## Yasaklar

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

## Görsel imza
- **Dev ölçek atlaması:** `h1 { font-size: clamp(28px, 7vw, 96px); line-height: .95; letter-spacing: -0.03em; text-transform: uppercase; }` — 1440px'te 96px'e oturur, 390px'te 28px.
- **Negatif tracking + sıkı satır:** display `-0.03em / .95`; H2 `-0.02em / 1.0`. Kelimeler arası boşluk `word-spacing: -0.02em` ile bir miktar kapanır.
- **Diagonal accent şerit:** `.hero-visual::after` benzeri tek şerit — `transform: rotate(-6deg)`, yükseklik 10–14px, `background: var(--accent)`, metnin **arkasında** (`z-index` düşük), genişlik kapsayıcının %110'u.
- **Döndürülmüş kelime katmanı:** ekran başına ≤2 katman, `rotate(-6deg)` veya `rotate(3deg)`; içinde yalnız display kelime (26–44px) ya da mono etiket (10px) durur.
- **Monokrom zemin + 1px çizgi:** yüzeyler `--bg` / `--surface` / `--surface-2` üç kademe; kart `1px solid var(--line)`, `border-radius: 4px`, gölge yok.
- **Acid vurgu bloğu:** vurgulanan kelime `background: var(--accent); color: var(--accent-ink); padding: 0 .08em;` — satır içi, `border-radius: 2px`.
- **Mono etiket izi:** tüm etiketler `--font-mono` 10px, `letter-spacing: .18em`, uppercase, `--ink-faint`.
- **Grain:** `--grain: .05` → örtü opaklığı `.25`, yalnız zemin katmanında; koyu zeminde doku görünür olduğu için .06 üstü yasak.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0e0e10` | sayfa zemini (neredeyse siyah) | kart yüzeyi |
| `--bg-2` | `#17171a` | bölüm zemini, logo şeridi, tablo başlığı | metin zemini |
| `--surface` | `#1b1b1f` | kart, panel, input | sayfa zemini |
| `--surface-2` | `#232329` | ikincil yüzey, chip, hover | ana kart |
| `--ink` | `#f4f2ec` | başlık, gövde (**17.23:1**) | accent zemini |
| `--ink-soft` | `#a8a49b` | açıklama, lede (**7.76:1**) | display başlık |
| `--ink-faint` | `#6f6b64` | dekoratif etiket, sıra no (**3.64:1**) | etkileşimli metin |
| `--accent` | `#e8ff47` | şerit, birincil buton, aktif durum, vurgu bloğu | gövde metni |
| `--accent-ink` | `#0e0e10` | accent üstü metin (**17.29:1**) | accent dışı zeminde |
| `--line` | `rgba(244,242,236,.18)` | 1px çerçeve, ayırıcı | dolgu yüzeyi |

- Ölçülen kontrast: `ink / bg` **17.23:1** · `ink-soft / bg` **7.76:1** · `ink-faint / bg` **3.64:1** · `accent-ink / accent` **17.29:1** · `ink / surface` **15.34:1** · `ink / surface-2` **13.96:1** · `ink / bg-2` **15.98:1** · `accent / bg` **17.29:1**.
- Tek vurgu kuralı: asit renk **eylem ve vurgu** taşır (CTA / aktif / kesme şeridi / vurgulanan kelime). İkinci anlam katmanı renkle değil **ölçek ve çizgi** ile kurulur (dev kelime = başlık, 1px çizgi = bölüm sınırı, mono etiket = meta).
- Yasak kombinasyon: `--accent` üstü `--ink` (asit üstünde kırık beyaz 1.00:1 — okunmaz), `--ink-faint` üstü `--surface-2` (2.95:1), asit metin + asit zemin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | `clamp(28px, 7vw, 96px)` | 400 (tek ağırlık) | `0.95` | `-0.03em`, uppercase |
| H2 | Anton | 32px (mobil 26px) | 400 | `1.0` | `-0.02em`, uppercase |
| H3 | Space Grotesk | 19px | 700 | `1.2` | `-0.01em`, cümle düzeni |
| Gövde | Space Grotesk | 15px | 400 (vurgu 700) | `1.55` | `0em` |
| Etiket / mono | Space Mono | 10px | 400 | `1.2` | `0.18em`, uppercase |
| Sayı / KPI | Anton | 44px | 400 | `0.95` | `-0.02em`, tabular yok |

- Ölçek oranı: atlamalı (modüler değil) — kullanılan basamaklar **10 · 15 · 19 · 32 · 44 · 96** (6 basamak). 96/15 = **6.4×** atlama; ara basamak eklemek stili bozar.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 7vw, 96px); line-height: .95; letter-spacing: -.03em; text-transform: uppercase; text-wrap: balance; }`
- Gövde maksimum satır uzunluğu: **54ch** (koyu zeminde satır daha uzun okunmaz); lede **44ch**. Display satırı en fazla **16ch** ve en fazla **2 satır**.
- Ağırlık kuralı: Anton **tek ağırlık (400)** — kalınlaştırmak için `-webkit-text-stroke` veya `font-weight: 700` kullanılmaz; vurgu **renk/ölçek** ile yapılır. Space Grotesk 400/700, Space Mono 400/700 var; 300 kullanılmaz.
- Anton **gövde metninde kullanılmaz** (18px altında harf içi boşluklar kapanır); Space Grotesk uppercase **yalnız 2 kelimeye kadar** etiketlerde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 (`--space-1…8`) |
| Breakpoint davranışı | 640px altı tek kolon (gutter 16px, display 28–40px); 640–960px 8 kolon (gutter 20px); 960px üstü 12 kolon |

- Asimetri kuralı: hero **8/5** (1.6fr / 1fr) veya **7/5**; 6/6 ortalanmış kompozisyon yasak. Ekran başına 1–2 bölüm simetriden çıkar, üçüncüsü tam genişlik alır.
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada durabilir; üçüncü blok ya tam genişlik ya diagonal kesme alır.
- Dikey ritim: bölüm arası 72px (mobil 44px), kart içi 24px, başlık ile gövde arası 12px.
- Dev başlık ile gövde arasında **en az 20px** boşluk bırakılır; sıkı satır aralığı boşluksuz birleşirse iki blok tek leke gibi okunur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm zemini, logo şeridi, grain katmanı |
| Kart | `--surface` + `1px var(--line)` | yok | içerik paneli, tablo kabı, form kabı |
| Yüzen katman | `--surface-2` + `1px var(--line)` + üst `2px var(--accent)` | yok | modal, dropdown, toast |

- Kenarlık formülü: `border: 1px solid var(--line)`; iç ayırıcı aynı değer. Yalnız modal ve öne çıkan kartta üst kenar `2px solid var(--accent)`.
- Derinlik nereden gelir: **ton kademesi + 1px çizgi + katman sırası**. Işık yönü yok, gölge yok, blur yok — koyu zeminde gölge zaten görünmez, bu yüzden yüzey farkı (bg `#0e0e10` → surface `#1b1b1f`) net tutulur.
- Radius: `--radius: 2px` (buton, chip, input, etiket), `--radius-lg: 4px` (kart, modal, hero görseli). 8px ve üstü yasak.
- Backdrop: modal arkası `rgba(14,14,16,.78)` — blur yok (`--blur: 0`).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 20px | 2px | 12px/700 mono uppercase `0.18em` | `--accent` + `--accent-ink`, gölge yok | hover: `color-mix(in srgb, var(--accent) 84%, var(--ink))` · active: `translateY(2px)` · focus: `outline: 2px solid var(--accent); outline-offset: 2px` · disabled: `opacity .38` · loading: 3 çubuk 90ms |
| Buton (ikincil) | 46px | 0 18px | 2px | 12px/700 mono uppercase `0.18em` | `--surface` + `1px var(--line)` | hover: `--surface-2` + kenar `--ink-soft` · active: `translateY(2px)` |
| Input | 50px | 0 14px | 2px | 15px Space Grotesk | `--surface` + `1px var(--line)` | focus: `outline: 2px solid var(--accent); outline-offset: 2px`, etiket `--accent` · filled: kenar `--ink-soft` · error: kenar `--danger` + 12px hata satırı · disabled: `--surface-2` + `opacity .5` |
| Kart | içerik | 24px | 4px | H2 32 + gövde 15 | `--surface` + `1px var(--line)`, gölge yok | öne çıkan: üst kenar `2px solid var(--accent)`, zemin `--surface-2` |
| Chip / badge | 26px | 0 10px | 2px | 10px mono uppercase `0.18em` | `--surface-2` + `1px var(--line)` | aktif: `--accent` + `--accent-ink`; dokunma hedefi `min-height: 44px` + padding ile |
| Nav | 68px | 0 40px | — | 12px mono uppercase `0.16em`, aktif `--ink` | `--bg` + alt `1px var(--line)` | aktif: metnin altında 2px `--accent`, soluna 6px kare nokta |
| Tablo satırı | 52px | 12px 16px | 2px | 14px Space Grotesk, başlık 10px mono | `1px var(--line)` alt | hover: `--surface-2` · seçili: sol 2px `--accent` + `--surface-2` |
| Modal / sheet | içerik | 28px | 4px | H2 32 + 15 | `--surface-2` + üst `2px var(--accent)` | backdrop `rgba(14,14,16,.78)`, blur yok; kapatma 44×44, radius 2px |
| Toast | 50px | 0 16px | 2px | 12px mono uppercase `0.14em` | `--ink` zemin + `--bg` metin | sol 2px `--accent` şerit, 4sn, tek atım |
| Grafik paleti | — | — | 2px üst | eksen 10px mono `0.14em` | `--data-1` accent, `--data-2` ink, `--data-3` ink-soft, `--data-4` surface-2 | çubuklar arası 8px, taban çizgisi 1px `--line`, yatay grid yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — asit buton üstünde `outline: 2px solid var(--ink); outline-offset: 2px` (17.23:1).
- Dokunma hedefi: en az 44×44px. Görsel olarak 26px olan chip ve 10px mono etiketler `min-height: 44px` + `padding: 0 10px` ile büyütülür.
- Döndürülmüş katmanlar (`rotate(-6deg)`) tıklanabilir **olamaz**; dekoratif kelime katmanı `pointer-events: none` + `aria-hidden`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, **keskin köşe** (radius 0), 20px ızgara; dolgu yalnız accent durum ikonunda |
| Fotoğraf | yüksek kontrast, tek konu, sert ışık, monokrom + tek renk sıçraması; alan ≥%30, tek kare — kolaj yok, üstüne dev kelime binebilir |
| İllüstrasyon | yok; onun yerine **tipografik blok** ve diagonal şerit |
| Doku | grain `.05` (zemin, opaklık .25); ikinci desen (nokta/çizgi) yalnız logo şeridinde ve ≤%6 alanda |
| Logo alanı | 20px kare monogram (`border-radius: 2px`), accent zemin + `--accent-ink` harf; çevresinde ≥24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | display 96px uppercase 2 satır, diagonal accent şerit, 8/4 asimetri, tek CTA | `shots/01-landing.png` |
| Dashboard | düşük | display 44px'e iner, rotasyon 0°, KPI sayıları Anton 44px, accent ≤%6 | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, display `clamp(28px, 9vw, 44px)`, dokunma 44px, şerit yalnız üst bölümde | — |
| Bileşenler · temel | orta | ölçek levhası (10/15/19/32/96) + radius 2/4 + 1px çizgi; gölge yok | — |
| Form | çok düşük | rotasyon yok; 50px input, mono etiket, tek sütun 460px | — |
| Modal / katman | orta | üst 2px accent, radius 4px, backdrop blur'suz; mono başlık izi | — |
| Veri | düşük | tablo 52px satır, 1px çizgi; çubuklar 2px radius, accent yalnız seri 1 | — |
| Gezinme | orta | alt 1px kural; aktif mono etiket + 2px accent alt çizgi | — |
| Pricing | orta | 3 kart; orta kart üst 2px accent + `--surface-2`; fiyat Anton 44px | — |
| Giriş / ödeme | çok düşük | süs ≤1 şerit; yalnız 1px kenar + 2px radius; güven için sade | — |
| Liste | düşük | filtre çubuğu 1px alt kural; satır 52px; seçili satır sol 2px accent | — |
| Boş / hata durumu | orta | 404 rakamı Anton 58px + tek cümle + tek buton; accent yalnız sayı ve CTA'da | — |
| Ayarlar | düşük | bölüm başlıkları 1px kural + 4px kart; anahtar pill 40×22 | — |
| Onboarding | yüksek | adım göstergesi mono 10px; display 34px iki satır, rotasyon yok | — |
| Makale | orta | 54ch ölçü, 24px H2, 1px ayırıcı; display yalnız başlıkta, rotasyon yok | — |
| Mobil sheet | orta | alt sayfa üst 2px accent, radius 4px üst köşe, 44px tutamaç | — |
| Mobil form | çok düşük | tam genişlik 50px input, klavye üstü 46px CTA | — |
| Mobil liste | düşük | 60px satır, monogram kare baş harf (2px radius), 1px ayırıcı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 90ms | `cubic-bezier(.2,.8,.2,1)` | `transform: translateY(2px)` |
| Geçiş / sayfa | 220ms | `cubic-bezier(.2,.8,.2,1)` | `clip-path: inset(0 0 100% 0) → inset(0)` + `opacity` |
| Giriş (enter) | **620ms** | `cubic-bezier(.85,0,.15,1)` | `opacity` + `translateY(40px)`, **stagger 100ms**; dev ölçek atlaması, overshoot yok |
| Kaydırma (scroll) | **500ms** | `cubic-bezier(.85,0,.15,1)` | trigger **`top 82%`**, offsetY **44px**, `once: true` |
| Hover | **130ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `enabled: false` (`scrub 1.0` / `+120%` kullanılmıyor) |
| Ödül / vurgu | 320ms | `cubic-bezier(.2,.8,.2,1)` | accent şerit genişliği `0 → 100%`, tek atım (döngü yok) |

- İmza ölçüsü: enter **0.62s / 40px / stagger 0.1** · scroll **0.5s / `top 82%` / 44px** · hover **130ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, `clip-path` ve `transform` sıfırlanır; vurgu şeridi **statik** görünür (bilgi kaybı olmaz), basma geri bildirimi kalır.
- Bu stile yasak hareket: sürekli kayan yazı (marquee), sonsuz kinetic loop, parallax, harf harf sıçrayan yazı, spring/overshoot, gradyan geçişi, `rotate` animasyonu (statik açı kalır, dönmez).
## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0e0e10` | `#0e0e10` (stil koyu-doğal) |
| `--surface` | `#1b1b1f` | `#1b1b1f` |
| `--ink` | `#f4f2ec` | `#f4f2ec` |
| `--accent` | `#e8ff47` | `#e8ff47` |

- Kinetic Type **tek modlu, koyu-doğal** bir stildir; aydınlık varyant üretilmez (asit vurgu açık zeminde 1.00:1'e düşer, metin olarak okunmaz). Talep gelirse ayrı palet elle yazılır — `filter: invert()` yasak.
- Koyu mod sahneleri (17/18) bu stil için **üretilmedi**; zemin zaten `#0e0e10` olduğu için koyu ekran ayrı görsel gerektirmez.
- Açık varyant gerekirse: `--bg: #f4f2ec`, `--surface: #e9e6dd`, `--surface-2: #ded9cc`, `--ink: #0e0e10`, `--accent: #55630a` (accent-ink `#f4f2ec`, 5.91:1) — `--line: rgba(14,14,16,.20)`.
- Koyu zeminde grain `.05` → `.04` (doku daha görünür olur); `--shadow` her iki modda `none`.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint / --bg` **3.64:1** — 10px mono etiket ve sıra numarası için; **dekoratif**, etkileşimli metin değil. Talep edilen `#6f6b64` bu eşiği geçiyor, ek koyultma gerekmedi.
- `--ink / --bg` **17.23:1**, `--ink-soft / --bg` **7.76:1**, `--accent-ink / --accent` **17.29:1** → gövde, açıklama ve buton metni AAA.
- `--accent` **metin rengi olarak kullanılmaz** (accent üstü `--ink` 1.00:1). Asit renk yalnız zemin/dolgu olarak, üstünde `--accent-ink`.
- Rotasyonlu metin: yalnız display kelime ve mono etiket, açı ≤6°, punto ≥26px. Gövde metni asla döndürülmez (ekran okuyucu değil, insan gözü için risk).
- Hareket/parlama hassasiyeti: tek atım vurgu (320ms) ve 220ms geçiş; yanıp sönen öğe yok, otomatik oynayan loop yok.
- Opak fallback: `@supports` gerekmez (`--blur: 0`, backdrop düz renk); tüm yüzeyler opak.
- Odak görünürlüğü: `--surface` zemininde 2px `--accent` halka 15.39:1 ile yeterli; asit buton üstünde `--ink` halka (17.23:1). Offset 2px, dokunma hedefi 44px.

## Örnek görseller

Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-landing.png` | Landing — Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare. |
| `shots/02-dashboard.png` | Dashboard — Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu. |
| `shots/04-components.png` | Bileşenler · temel — Renk, tipografi, yüzey, boşluk ritmi — temel levha. |
| `shots/17-dark-landing.png` | Koyu mod · landing — Koyu mod · landing |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
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

## Komşu stiller

- **Uyumlu:** `36 constructivism` — diagonal ve uppercase display; yalnız hero katmanında, çerçeve 1px'e indirilerek. `02 swiss-design` — ızgara disiplini ve sola dayalı hiza; yalnız gövde/etiket düzeninde. `01 minimalism` — monokrom sükûnet; veri ve ayar ekranlarında accent'i %6'ya çekerek.
- **Yasak:** `38 organic-bio` (yumuşak radius + sıcak palet, sıkılığı bozar) · `08 glassmorphism` (blur ve yarı saydamlık, gölgesiz düz yüzey kuralını kırar) · `11 claymorphism` / `10 neumorphism` (çift gölge ve pastel ton) · `04 editorial-design` (serif display ve geniş satır aralığı).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Kinetic_typography | hareketli tipografinin tanımı, Saul Bass jenerikleri, zamanlama |
| https://fonts.google.com/specimen/Anton | display: tek ağırlık, dar grotesk, büyük harfte sıkı |
| https://fonts.google.com/specimen/Space+Grotesk | gövde: teknik grotesk, 15px'te okunur |
| https://fonts.google.com/specimen/Space+Mono | etiket / ölçü / mono iz |
| https://en.wikipedia.org/wiki/International_Typographic_Style | ızgara disiplini: 12 kolon + sola dayalı hiza |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
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
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (dev ölçek atlaması + diagonal şerit / döndürülmüş kelime).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥4.5:1, büyük metin ≥3:1, accent üstü ≥4.5:1.
- [ ] Odak halkası görünür (2px + 2px offset), dokunma hedefi ≥44px.
- [ ] 390px genişlikte taşma/kırpılma yok (display `clamp` ile küçülüyor).
- [ ] `prefers-reduced-motion` açıkken hareket duruyor, şerit statik kalıyor.
- [ ] Akış ≤2 döndürülmüş öğe, accent alan ≤%10, gölge yok.

## Token

```css
[data-style="kinetic-type"] {
  --bg: #0e0e10; --bg-2: #17171a;
  --surface: #1b1b1f; --surface-2: #232329;
  --ink: #f4f2ec; --ink-soft: #a8a49b; --ink-faint: #6f6b64;
  --accent: #e8ff47; --accent-ink: #0e0e10;
  --line: rgba(244,242,236,.18);
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Anton", "Archivo Black", sans-serif;
  --font-body: "Space Grotesk", "Inter", sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: .05;
}
```
