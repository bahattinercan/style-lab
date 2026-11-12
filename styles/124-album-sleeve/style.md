# 124 · Album Sleeve

> **Bir cümleyle:** Plak kılıfı: 1:1 kare kapak, solda 26px sırt şeridi, A/B parça listesi ve mono katalog numarası.

| | |
|---|---|
| **Hissiyat** | koleksiyonluk, analog, sakin-gururlu, "rafa konulacak" |
| **En iyi** | müzik/albüm yayını, sanatçı diskografisi, podcast/season kapağı, sınırlı baskı satışı, plak mağazası |
| **Kaçın** | yoğun işlem formu, kurumsal dashboard, sağlık/random veri ekranı, hızlı kampanya sayfası |
| **Zorluk** | düşük–orta (oran ve sırt disiplini) · **Erişilebilirlik** | iyi (15.40:1 gövde, 4.66:1 accent üstü) |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="album-sleeve"]` |
| **Kompozisyon** | `index` · `pill` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Album Sleeve, 12 inç plak kılıfının ölçüsünü ekrana taşır: **1:1 kare kapak**, sol kenarda **26px mürekkep sırt şeridi** (dikey yazı: `LP · 33 1/3 RPM`), sağ altta **78×30px barkod dizisi**, sağda **A/B iki yüzlü parça listesi** ve mono **katalog numarası**. Tipografi analog baskı dilidir: Anton 400 (sıkı, yüksek display), Space Grotesk gövde, IBM Plex Mono etiket/süre. Accent tek: kiremit (`#cf3b0c`), yalnız katalog kutusu, birincil buton ve aktif işarette.

Kazandığı şey: **nesne ağırlığı**. Kapak + sırt + parça listesi üçlüsü, dijital bir sayfayı "basılı bir obje" gibi okutur; süre kolonunun mono hizası albümü taranabilir kılar. Feda ettiği şey: **esneklik** — 1:1 oran geniş ekranda boşluk bırakır, kılıf büyütülmez; liste ekranlarında kapak küçültülür, oran değişmez.

### Ne değildir
- **Vaporwave (20) değildir.** Vaporwave pastel/mor, VHS çizgisi ve kolajla **nostalji parodisi** kurar; burada mat kâğıt, tek accent, sırt şeridi ve gerçek parça listesi var.
- **Y2K (19) değildir.** Y2K krom/parlak plastik ve buz mavisiyle dönemsel parlaklık kurar; burada yüzey mat, gölge çok hafif (`0 2px 10px`).
- **Product Catalog (91) değildir.** Catalog kod–ad–ölçü–fiyat dört sütunu ve swatch'larla ticari katalog kurar; burada parça listesi (A/B + süre) ve sırt şeridi karakterdir, fiyat yoktur.
- **Poetry Chapbook (90) değildir.** Chapbook dar ölçü ve geniş kenarla şiir okuması kurar; burada kare kapak ve tablo hizası var.
- **"Büyük görsel + başlık" değildir.** Sırt şeridi, barkod ve iki yüzlü parça listesi olmadan bu stil sadece bir kapak vitrinidir.

### Nereden gelir
12 inç LP kılıfı 1950'lerde standartlaştı: **313×313 mm**, sırt şeridinde sanatçı/albüm adı (rafta görünen tek yüz), arka yüzde A/B parça listesi ve süreler, köşede katalog numarası. Dijitalde bu biçim 2010'lardan sonra "albüm yayını" ve "sınırlı baskı" kültürüyle döndü; nedeni ölçülebilir — kare kapak, akış içinde tek bakışta tanınır ve platformlar arası aynı kalır.

Klişeye düşmemesi için korunması gereken detay: **sırt şeridi ve oran**. Sırtı kaldırmak, kapağı 16:9'a çevirmek veya parça listesini ortalamak stili "müzik uygulaması kartı"na indirger.

### 3 saniyede tanıma testi
1. Kapak **1:1 kare** mi ve sol kenarında **26px dikey sırt şeridi** var mı?
2. Parça listesi **A / B** yüz başlıklarına ayrılmış mı; süreler **mono ve sağa dayalı** mı?
3. Bir yerde **mono katalog numarası** (`CAT. NO. LP-124`) ve **barkod dizisi** var mı?
4. Display **Anton** (sıkı, çok kalın) mı; gövde Space Grotesk, etiket mono mu?
5. Accent **kiremit** ve ekranın ≤ %8'inde mi; gölge çok hafif, radius ≤ 4px mi?

## Görsel imza
1. **1:1 kılıf:** `aspect-ratio: 1/1`, `border: 1px solid var(--line)`, `box-shadow: var(--shadow)`; kapak kartı oranını asla kaybetmez.
2. **Sırt şeridi:** sol kenarda 26px (mobil 20px) mürekkep şerit; `writing-mode: vertical-rl`, mono 9px, `.22em` tracking.
3. **Barkod:** 78×30px, `repeating-linear-gradient(90deg, ink 0 2px, transparent 2px 4px, ink 4px 5px, transparent 5px 9px)`; dekoratif, taranmaz.
4. **Katalog kutusu:** mono 10px `.16em`, accent zemin + `--accent-ink`, padding 4px 8px; hero sol üstte.
5. **İki yüzlü parça listesi:** `A` / `B` başlıkları mono 10px `.14em`; satır 34px; süre `tabular-nums` sağa dayalı.
6. **Hafif gölge:** `0 2px 10px rgba(19,20,24,.10)`; kart/panel gölgesiz, yalnız kılıf ve modal.
7. **Keskin köşe:** radius 2px (kart/kılıf), 4px (modal); buton 0; pill yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ecebe4` | Sayfa zemini (raf kâğıdı) | Kapak içi |
| `--bg-2` | `#e2e0d8` | Bölüm şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#fbfaf5` | Kapak kartı, panel, form | Sayfa zemini |
| `--surface-2` | `#e6e4da` | Hover satır, ikincil buton | Metin arkası |
| `--ink` | `#131418` | Metin, sırt şeridi, barkod, tablo başlığı | Accent zemin üstü |
| `--ink-soft` | `#45474e` | Lede, süre kolonu, ikincil | 10px altı etiket |
| `--ink-faint` | `#74767c` | Parça numarası, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#cf3b0c` | Katalog kutusu, birincil buton, aktif işaret | Gövde metni, geniş zemin |
| `--accent-ink` | `#fff8f2` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(19,20,24,.18)` | Kart kenarı, tablo çizgisi | Sırt şeridi (o mürekkep) |

- Ölçülen kontrast: `ink / bg` = **15.40:1** · `ink-soft / bg` = **7.76:1** · `accent-ink / accent` = **4.66:1** · `ink-faint / bg` = **3.80:1** (yalnız dekoratif).
- Tek vurgu kuralı: kiremit accent ekranın **≤ %8**'i; kapak görseli accent'e bağlı değil (albüm kapağı kendi renklerini taşır, arayüz accent'i tek kalır).
- Yasak kombinasyon: accent zemin + `--ink-soft`; `ink-faint` + `surface-2` (3.1:1); ikinci accent (mavi = "single", yeşil = "yeni").

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 66px (mobil 40px) | 400 | 0.92 | -0.015em |
| H2 | Anton | 34px | 400 | 0.98 | -0.01em |
| H3 (parça adı) | Space Grotesk | 19px | 500 | 1.24 | 0 |
| Gövde | Space Grotesk | 15px | 400 | 1.68 | 0 |
| Lede | Space Grotesk | 15px | 400 | 1.68 | 0 (50ch) |
| Etiket / mono | IBM Plex Mono | 10.5px | 400 | 1.45 | 0.14em |
| Süre / no | IBM Plex Mono | 11px | 400 | 1.3 | 0.02em |

- Ölçek oranı ≈ 2.0 (15 → 34 → 66); kapak tipografisi bilinçli olarak büyük zıplar.
- Ölçü önerisi: `h1 { font-size: clamp(40px, 6vw, 66px) }`.
- Gövde metni maksimum satır uzunluğu: **50ch**; parça listesi satırı tek satır (taşarsa kesme, sarma yok).
- Ağırlık kuralı: display yalnız 400 (Anton tek ağırlık; sahte kalın yasak), gövde 400/500, mono 400.
- Kapak başlığı en fazla 6 kelime: Anton 66px'te uzun başlık taşar; taşma yerine başlık kısaltılır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (kılıf 6, parça listesi 6) |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında kılıf üstte tam genişlik, liste altta; oran 1:1 korunur |

- Asimetri kuralı: hero'da tek kılıf + tek liste; arşiv ekranında 3-4 kılıf ızgarası (hepsi 1:1), liste yan sütunda.
- Bölüm ritmi: art arda en fazla **2** kılıf satırı; sonra 1px divider ve 32px boşluk.
- Bölüm dikey boşluk 76px (mobil 44px); kart padding 20px; parça satırı 34px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, şerit |
| Kılıf | `--surface` + `--shadow` | `0 2px 10px rgba(19,20,24,.10)` | Kapak, modal |
| Panel | `--surface` + 1px `--line` | `none` | Parça listesi, ayar, KPI |

- Kenarlık formülü: kılıf/panel `1px solid var(--line)`; tablo başlığı altı `1px solid var(--ink)`; sırt şeridi `--ink` dolu alan.
- Derinlik nereden gelir: **tek hafif gölge + sırt şeridi**; iç gölge, kalın çerçeve, blur yok.
- Radius: `--radius` 2px (kılıf, kart) · `--radius-lg` 4px (modal). Buton ve chip 0px — baskı keskinliği.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 18px | 0px | 10.5px/400 mono, .12em | `--accent` / `--accent-ink`, gölge yok | hover %90 380ms · active translateY(1px) · focus 1px accent + 2px offset · disabled opacity .45 kesikli · loading `···` 900ms |
| Buton (ikincil) | 44px | 12px 18px | 0px | 10.5px/400 mono | şeffaf / `--ink`, 1px `--line` | hover kenar `--ink` · focus aynı |
| Input | 44px | 0 12px | 2px | 15px/400 Space Grotesk | `--surface` + 1px `--line` | focus 1px accent + 2px offset · error `--danger` + mono açıklama |
| Kılıf kartı | — | 20px | 2px | başlık Anton 34px | `--surface` + `--shadow` + sırt şeridi | hover: kapak 1.062 ölçek (380ms), oran korunur |
| Chip | 20px | 2px 6px | 0px | 9.5px/400 mono, .12em | şeffaf + 1px `--line` | accent varyantı dolu (pre-order / yeni single) |
| Nav | 54px | 0 36px | 0 | marka Anton 22px + mono 10.5px | `--bg` + alt 1px `--line` | aktif: 1px accent alt çizgi |
| Tablo satırı (parça) | 34px | 8px 10px | 0 | ad Space Grotesk 15px, no/süre mono | alt 1px `--line` | hover `--surface-2`; çalan parça: sol 2px accent |
| Modal | — | 24px | 4px | H2 Anton 34px | `--surface` + `--shadow` | 1:1 kapak + liste, perde %55 |
| Toast | 38px | 10px 14px | 0px | 11px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 6px accent kare, 3200ms |
| Grafik (dinleme) | — | — | — | eksen 10px mono | `--accent`, `--ink` | en fazla 2 seri; 1px çizgi |

- Odak halkası: `outline: 1px solid var(--accent); outline-offset: 2px`; accent butonda `outline-color: var(--accent-ink)`, offset -3px.
- Dokunma hedefi: en az 44×44px; parça satırı 34px yüksekliğinde ama satır tamamı 44px hedef olarak tıklanır (padding ile).
- Kapak hover'ında 1.062 ölçek; kılıfın kare oranı ve sırt şeridi yerinde kalır (taşma `overflow: hidden`).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi veya dolu disk/play üçgeni, 20px ızgara; dekoratif ikon yok |
| Fotoğraf | Yalnız kapak içinde 1:1; tek nesne/kolaj, doygunluk serbest |
| İllüstrasyon | Kapak illüstrasyonu tek katman düz renkler; sayfa gövdesinde illüstrasyon yok |
| Doku | `--grain: .025` kâğıt; sırt şeridi düz mürekkep |
| Logo alanı | Anton kelime markası (kılıf köşesi), 20px güvenli boşluk; plak şirketi etiketi mono kutu |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 66px Anton başlık + 1:1 kılıf + sırt şeridi + katalog kutusu | `shots/01-landing.png` |
| Dashboard | orta | Son çalınanlar listesi + küçük kılıflar (1:1) | `shots/02-dashboard.png` |
| Form | düşük | 44px alan, 0–2px radius, mono etiket | — |
| Liste / tablo | yüksek | A/B parça listesi, süreler mono sağa dayalı | — |
| Boş durum | orta | Boş kılıf çerçevesi (1:1) + tek cümle + 1 buton | — |
| Onboarding | orta | 3 adım: sanatçı → albüm → çalma listesi | — |
| Pricing | orta | 3 baskı (LP / CD / dijital); fiyat mono, sağa dayalı | — |
| Giriş / ödeme | düşük | Süs yok; kılıf küçük, form önde | — |
| Modal | orta | Büyük kapak + tam parça listesi, perde %55 | — |
| Bildirim / toast | orta | Mono metin + 6px accent kare, 3200ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama; barkod/sırt yok | — |
| Profil / ayar | orta | Diskografi ızgarası (1:1 kılıflar), mono etiketler | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `ease-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 380ms | `cubic-bezier(.4,.05,.2,1)` | `opacity` |
| Giriş (enter) | **900ms** | `cubic-bezier(.4,.05,.2,1)` | `opacity` + `translateY(18px)`, **stagger 100ms** |
| Kaydırma (scroll) | **950ms** | `cubic-bezier(.4,.05,.2,1)` | trigger **`top 80%`**, offsetY **24px**, `once: false` (her geçişte) |
| Hover | **380ms** | `ease-out` | kapak ölçek **1.062** (en yüksek ölçek) |
| Pin | **açık** | `scrub 0.7` | kılıf sabitlenir, mesafe **+110%** |
| Ödül / vurgu | 620ms | `cubic-bezier(.4,.05,.2,1)` | çalan parça göstergesi 2px → 4px genişler |

- İmza ölçüsü: enter **0.9s / 18px / stagger 0.1** · scroll **0.95s / `top 80%` / 24px / `once: false`** · hover **380ms / 1.062** · pin **açık (scrub 0.7 / +110%)** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, kılıf statik kalır.
- Bu stile yasak hareket: dönen plak, iğne animasyonu, parallax, sürekli döngü, spring/bounce.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ecebe4` | `#0e0f11` |
| `--bg-2` | `#e2e0d8` | `#141517` |
| `--surface` | `#fbfaf5` | `#191a1d` |
| `--surface-2` | `#e6e4da` | `#222327` |
| `--ink` | `#131418` | `#eeede8` |
| `--ink-soft` | `#45474e` | `#b3b2ab` |
| `--ink-faint` | `#74767c` | `#888780` |
| `--accent` | `#cf3b0c` | `#ff6a2c` |
| `--accent-ink` | `#fff8f2` | `#140a05` |
| `--line` | `rgba(19,20,24,.18)` | `rgba(238,237,232,.16)` |

- Koyu mod **gece dinlemesi**: zemin `#0e0f11`, kılıf `#191a1d`; accent açılır (`#ff6a2c`) çünkü kiremit koyu zeminde sırt şeridiyle karışır.
- Sırt şeridi koyuda `--ink` (krem) zemin + `--bg` metin olur — şerit görünürlüğü korunur, renk ters çevrilir (invert değil, token).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **16.36:1** · `ink-soft/bg` = **9.02:1** · `accent-ink/accent` = **6.83:1** · `ink-faint/bg` = **5.32:1**.

## Zorunlu kurallar

1. **1:1 kılıf:** kapak `aspect-ratio: 1/1`; oran hiçbir breakpoint'te değişmez.
2. **Sırt şeridi:** sol kenarda 26px (mobil 20px) dolu şerit + dikey mono yazı; şerit kaldırılmaz.
3. **A/B listesi:** iki yüz başlığı, satırda no + ad + süre; süre mono ve sağa dayalı.
4. **Katalog kimliği:** mono `CAT. NO.` kutusu ve barkod dizisi görünür (barkod dekoratif).
5. **Accent ≤ %8:** kiremit yalnız katalog kutusu, birincil buton, aktif işaret.
6. **Keskin yüzey:** radius 2/4px, buton 0; gölge yalnız kılıf ve modalda, çok hafif.

## Yasaklar

- Dönen plak / iğne animasyonu, sürekli döngü.
- Kapak oranını 16:9 veya serbest orana çevirmek.
- Gradient "vinil parlaması", blur, cam yüzey, renkli gölge.
- 4px üstü radius, pill buton, yuvarlak avatar.
- İkinci accent (mavi/yeşil) ve renkli "single/yeni" rozetleri.
- Parça listesinde orantılı sayı veya ortalanmış süre.

## Erişilebilirlik

- Ölçülen riskler: `accent-ink / accent` = **4.66:1** (eşiğin hemen üstü) → accent zemin üstünde 10.5px mono etiket yalnız büyük harf/kısa metin; `ink-faint / bg` = **3.80:1** yalnız parça numarası (dekoratif).
- Parça numarası `--ink-faint` ama süre `--ink-soft` (7.76:1): okunması gereken bilgi soluk renge bırakılmaz.
- Barkod ve sırt şeridi dekoratif değil **kimlik**tir: barkod `aria-hidden`, sırt şeridi metin olarak okunur (`LP · 33 1/3 RPM`).
- Hareket: 900ms giriş + `once: false` scroll reveal uzun; `prefers-reduced-motion` hepsini 0.01ms'e çeker, pin/scrub kapanır.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` kullanılmıyor.
- Odak görünürlüğü: 1px accent + 2px offset (4.66:1); accent butonda `--accent-ink` halka, offset -3px.

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
| "Müzik uygulaması kartı" gibi | sırt şeridi kaldırılmış, oran 16:9 | 1:1 + 26px sırt şeridi geri getir |
| Liste okunmuyor | süreler ortalanmış, orantılı sayı | Sağa dayalı mono + `tabular-nums` |
| Kapak "yüzüyor" | kalın gölge/çerçeve | `0 2px 10px` tek hafif gölge, 1px kenar |
| Sırt yazısı taşıyor | yatay yazı kullanılmış | `writing-mode: vertical-rl`, mono 9px `.22em` |
| Accent her yerde | ikinci renk + rozetler | Tek kiremit; durum bilgisi mono metinle |
| Mobilde oran bozuluyor | sabit yükseklik verilmiş | Yalnız `aspect-ratio: 1/1`; yükseklik serbest |

## Komşu stiller

- **Uyumlu:** `editorial-design` — albüm notu/liner notes metnini editorial üstlenir; kılıf oranı korunur.
- **Uyumlu:** `product-catalog` — diskografi tablosu ve fiyat sütunu ortak; catalog'un dört sütun kuralı bu stilde listeye dönüşür.
- **Uyumlu:** `grand-tourer` — analog makine/plak dili ortak; grand-tourer yalnız "sınırlı baskı" kartında.
- **Yasak:** `claymorphism` — şişkin yuvarlak form kılıf keskinliğini yok eder.
- **Yasak:** `glassmorphism` — blur/şeffaflık mat kâğıt kılıfını kırar.
- **Yasak:** `ethereal` — sis/nefes dili kapak nesnesini eritir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Album_cover | 12 inç kılıf oranı ve sırt yazısı geleneği |
| https://en.wikipedia.org/wiki/LP_record | 33 1/3 RPM, A/B yüz ayrımı, süreler |
| https://www.discogs.com/ | katalog numarası, etiket bilgisi, parça listesi düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | küçük mono etiket kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
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
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (1:1 kılıf, sırt şeridi, A/B liste, barkod).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.40:1), accent üstü ≥ 4.5:1 (4.66:1).
- [ ] Odak halkası görünür (1px + 2px offset), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; kılıf 1:1, sırt 20px.
- [ ] `prefers-reduced-motion` açıkken hareket ve pin duruyor.

## Token

```css
[data-style="album-sleeve"] {
  --bg: #ecebe4; --bg-2: #e2e0d8;
  --surface: #fbfaf5; --surface-2: #e6e4da;
  --ink: #131418; --ink-soft: #45474e; --ink-faint: #74767c;
  --accent: #cf3b0c; --accent-ink: #fff8f2;
  --line: rgba(19,20,24,.18);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 2px 10px rgba(19,20,24,.10); --shadow-hard: none;
  --font-display: "Anton", Impact, system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.015em; --blur: 0px; --grain: 0.025;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="album-sleeve"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 4.10:1 · `ink-soft / surface-2` 7.28:1 · `accent-ink / accent` 4.66:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu zaten `aspect-ratio: 1 / 1`; min-height gerekmedi. Hero imzası `scenes.landing` ile kuruldu: plak: göbek deliği + oluk halkaları + şarkı listesi (kutu 1:1 olduğu için min-height gerekmedi).
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.9s` / `scroll 0.95s` (ikisi de ≤ 1.2 s).
