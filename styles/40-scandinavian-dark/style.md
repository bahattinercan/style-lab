# 40 · Scandinavian Dark

> **Bir cümlede:** Kuzey ışığının mat hâli: düşük doygunluklu koyu yüzeyler, 1px hairline ile ayrılmış geniş boşluk ve süs yerine ışığın kendisiyle kurulan sakin bir arayüz.

| | |
|---|---|
| **Hissiyat** | sakin, mat, ölçülü, sessiz |
| **En iyi** | uzun oturumlu üretkenlik aracı, içerik/okuma uygulaması, sakin e-ticaret (mobilya, kahve, kırtasiye), müze–galeri dijital kataloğu, finans dışı SaaS paneli |
| **Kaçın** | yoğun operasyon/kontrol odası (20+ satır tablo, 12 saat izleme), agresif kampanya ve indirim sayfası, oyun/etkinlik vitrini, çocuk uygulaması, kripto/alarm paneli |
| **Zorluk** | orta (düşük kontrastlı koyu zeminde hiyerarşiyi süs olmadan kurmak) · **Erişilebilirlik** | iyi (14.16:1 gövde, 10.07:1 accent üstü; risk tek: `--ink-faint` 4.46:1 — yalnız dekoratif) |
| **Aile** | Yeni Dalga (40) · **Token** | `kit/tokens.css` → `[data-style="scandinavian-dark"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Scandinavian Dark, hiyerarşiyi **parlaklık ve boşlukla** kurar; renkle ya da süsle kurmaz. Zemin mat, sıcak nötrlü koyu yeşil-gri `#171a19` — siyah değil: içinde `#1d211f`'e doğru bir sıcaklık taşır, böylece 8 saatlik oturumda gözü "delik" gibi yormaz. Üç yüzey tonu vardır (`--bg` → `--surface` → `--surface-2`) ve aralarındaki fark **%5–%8 parlaklık**; iki yüzeyi ayıran şey gölge değil `1px` hairline'dır. Tek aksan, liken yeşili `#b9c6a9`: doygunluğu düşük olduğu için "vurgu" gibi değil, ışığın bir yüzeye düşmesi gibi okunur.

Kazandığı şey: **süreklilik**. Süs, gradyan ve gölge olmadığı için ekranın hiçbir yeri "dikkat çekmek" için yarışmaz; kullanıcı 20. dakikada da 2. dakikadaki aynı sakinlikte okur. Feda ettiği şey: **ilk 3 saniyedeki çekicilik**. Bu stil hatırlanmak için değil, uzun süre yanında kalınmak için tasarlanır; bu yüzden vitrin/landing işlerinde tek bir büyük fotoğraf veya tek bir soluk ışık lekesi taşır, gerisi boşluktur.

### Ne değildir
- **Dark Academia (33) değildir.** Dark Academia sıcak kahve-mum paleti, gotik serif ve altın accent ile "nostalji" kurar (`--line: rgba(176,134,63,.32)`, çift çerçeve); burada palet **soğuk nötr** (`#171a19` – `#7d8279`), accent **liken** ve çizgi **tek 1px**, süs yok.
- **Kinetic Type (37) değildir.** Kinetic 96px'e kadar atlayan dev ölçek, `-0.03em` negatif tracking ve asit sarı vurguyla çalışır; burada en büyük başlık **44px**, tracking **-0.005em**, accent **düşük doygunluk**.
- **Japandi (06) değildir.** Japandi aynı ölçülülüğü **açık** zeminde ve 8:1 kontrastla kurar; burada zemin koyu ve `ink/bg` **14.16:1** — ölçülülük ortak, ışık yönü ters.
- **Cyberpunk (22) / Cybercore (23) değildir.** Onlar neon, glow ve mono gövde ile "terminal" kurar; burada **glow yok** (`--blur: 0`, parlama yok), mono yalnız etiketlerde ve gövde Inter.
- **Minimalism (01) değildir.** Minimalism açık zeminde **gölgeyle** (`0 1px 2px`) hacim kurar ve 8/12px radius kullanır; burada kart **gölgesiz** (mat), derinlik 1px hairline + ton kademesi, radius **6/10px**.

### Nereden gelir
İskandinav iç mekân geleneğinden (mat yüzeyler, doğal ışığı maksimize eden beyaz–gri–ahşap dengesi), Alvar Aalto ve Arne Jacobsen'in ölçülü form dilinden ve 2010'ların "dark mode" dalgasından gelir. Web'e taşınması bir teknik zorunlulukla oldu: koyu zeminde gölge görünmez, bu yüzden koyu temalar **kenarlık ve boşlukla** derinlik kurmak zorundadır — bu da İskandinav mat estetiğiyle birebir örtüşür. Bugün tekrar kullanılmasının nedeni ölçülebilir: düşük doygunluklu koyu palet, uzun oturumda göz yorgunluğunu ve parlaklık dalgalanmasını azaltır. Klişeye düşmemesi için korunması gereken detay: **hairline disiplini ve boşluk cömertliği** — kenarlığı 2px'e çıkarmak veya boşluğu sıkıştırmak stili "koyu kurumsal tema"ya çevirir.

### 3 saniyede tanıma testi
1. Kartlarda **gölge yok**, yalnız `1px` hairline var mı (`rgba(233,231,224,.14)`); yüzen katman dışında gölge görünüyor mu?
2. Zemin **siyah değil** sıcak nötr koyu mu (`#171a19`); üç yüzey tonu arasındaki fark %5–%8 mi?
3. Ekranda **tek** aksan (liken `#b9c6a9`) ve ekranın **≤%8**'i mi; ikinci renk yok mu?
4. Başlık **44px** (mobil 30px) ve serif mi (Fraunces 400, `line-height 1.12`); dev/uppercase başlık yok mu?
5. Bölüm arası **96px** (mobil 56px) ve gövde ölçüsü **66ch** mi; süs/illüstrasyon/desen yerine boşluk mu var?

## Zorunlu kurallar

1. **Mat kural:** kart ve panel `box-shadow: none`; derinlik yalnız `1px solid var(--line)` + ton kademesi ile kurulur. `--shadow` **yalnız** yüzen katmanda (modal, dropdown, hero görseli) kullanılır.
2. **Hairline:** bütün kenarlıklar ve ayırıcılar `1px solid var(--line)` = `rgba(233,231,224,.14)`. 2px yalnız odak halkasında; 3px ve üstü kalın çerçeve yok. Çift kenarlık (çerçeve + gölge) yasak.
3. **Yüzey kademesi:** `--bg` → `--surface` → `--surface-2` arası fark **%5–%8 parlaklık**; iki komşu yüzey arasındaki fark %12'yi geçerse "blok" gibi okunur ve hairline gereksizleşir.
4. **Tek aksan:** `--accent` yalnız 4 yerde — birincil buton, aktif durum işareti, veri serisi 1, odak halkası. Ekranın **≤%8**'i (veri ekranlarında ≤%4). İkinci aksan rengi yok; durum renkleri (`--danger`/`--ok`/`--warn`) yalnız durum bildirir.
5. **Süs bütçesi:** dekoratif şekil, illüstrasyon, ikon kolajı **yok**. Ekran başına en fazla **1** soluk ışık lekesi (radial, opaklık ≤.07) ve yalnız landing'de.
6. **Tipografi:** display Fraunces **400** 44px (mobil 30px) `/1.12`, gövde Inter 16px `/1.7`, etiket IBM Plex Mono 10.5px uppercase. Toplam **6** punto basamağı: `10.5 · 13 · 16 · 20 · 28 · 44`.
7. **Boşluk ritmi:** bölüm arası **96px** (mobil 56px), kart içi **30px** (mobil 20px), gövde ölçüsü **66ch**, paragraf arası 16px.
8. **Grain:** `--grain: .05` tek doku; örtü opaklığı `.16`, `mix-blend-mode: soft-light`, yalnız zemin katmanında, `pointer-events: none`.

## Yasaklar

- Gölge: yumuşak gölge (kartlarda), blok gölge, inset gölge, `drop-shadow`, neon glow — `--shadow-hard` hiç kullanılmaz.
- Cam / `backdrop-filter` / yarı saydam panel (`--blur: 0`); saydamlık yalnız modal backdrop'ında.
- 2px ve üstü kalın çerçeve, çift çerçeve, çerçeve + gölge kombinasyonu.
- İki renk arası gradyan geçişi, mesh gradient, parlak "aurora" lekeleri; parlaklık animasyonu.
- İkinci aksan rengi (turuncu, mavi, mor); doygun accent (doygunluk >%40).
- Saf siyah zemin (`#000`) ve saf beyaz metin (`#fff`) — sıcak nötr kullanılır.
- Uppercase display, 60px üstü başlık, 3 satırdan uzun başlık, negatif tracking < `-0.02em`.
- İllüstrasyon, emoji süs, desen/motif tekrarı, ikon dolu şerit, foto kolaj.
- Sürekli animasyon (nefes alan katman, marquee, parallax), yay/spring sıçraması.
- Gövde metninde mono veya uppercase; 300 ağırlık (koyu zeminde incelir, okunmaz).

## Görsel imza
- **Hairline kart:** `.panel { border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: none; padding: 30px; }` — kart ekranda yalnız çizgiyle vardır.
- **Ton kademesi:** `--bg #171a19` → `--surface #1f2422` → `--surface-2 #262c29`; her adım ~%5 parlaklık, `--line` bu adımların arasını çizer.
- **Liken accent:** `#b9c6a9` dolgu + `#141715` metin (10.07:1); accent **dolu buton** olarak ekran başına 1 kez, geri kalan yerde yalnız 2px aktif işareti veya odak halkası.
- **Sakin başlık:** Fraunces 400, 44px, `line-height: 1.12`, `letter-spacing: -0.005em`, en fazla 3 satır, 21ch; uppercase yok.
- **Geniş boşluk:** bölüm arası 96px, kart içi 30px, kart başlığı ile gövde arası 12px; iki kart arası 24px.
- **Kuzey ışığı:** landing'de tek radial leke — `radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%)`, opaklık `.07`, 62vw çap, `pointer-events: none`; ikinci leke yok.
- **Grain:** `--grain: .05` → örtü opaklığı `.16`, `soft-light`, zemin katmanında sabit (kaymaz, animasyonsuz).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#171a19` | sayfa zemini (mat, sıcak nötr koyu) | kart yüzeyi |
| `--bg-2` | `#1d211f` | bölüm zemini, logo şeridi, input zemini | birincil kart |
| `--surface` | `#1f2422` | kart, panel, tablo kabı | tam sayfa zemin |
| `--surface-2` | `#262c29` | ikincil yüzey, hover, chip, seçili satır | ana kart |
| `--ink` | `#e9e7e0` | metin, başlık (**14.16:1**) | accent zemin üstü |
| `--ink-soft` | `#a6aaa2` | açıklama, lede (**7.42:1**) | başlık |
| `--ink-faint` | `#7d8279` | dekoratif etiket, sıra no (**4.46:1**) | etkileşimli metin |
| `--accent` | `#b9c6a9` | birincil buton zemini, aktif işaret, veri serisi 1, odak | gövde metni |
| `--accent-ink` | `#141715` | accent üstü metin (**10.07:1**) | accent dışı zeminde |
| `--line` | `rgba(233,231,224,.14)` | tüm kenarlık ve ayırıcılar | metin |

- Ölçülen kontrast: `ink / bg` **14.16:1** · `ink-soft / bg` **7.42:1** · `ink-faint / bg` **4.46:1** · `accent-ink / accent` **10.07:1** · `ink / surface` **12.72:1** · `ink / surface-2` **11.51:1** · `accent / bg` **9.78:1** (metin olarak da kullanılabilir, ≥18px).
- Tek vurgu kuralı: liken accent ekran başına **tek anlam** taşır (eylem veya aktif durum). İkinci anlam katmanı renkle değil **hairline kalınlığı ve boşluk** ile kurulur (aktif = 2px alt çizgi, uyarı = sol 2px `--warn`).
- Yasak kombinasyon: `--ink-faint` üstü `--surface-2`, accent üstü `--ink` (11.5:1 yerine beklenenin tersi; accent üstünde **her zaman** `--accent-ink`), iki farklı durum renginin yan yana kullanımı.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 44px (mobil 30px) | 400 | 1.12 | `-0.005em`, cümle düzeni |
| H2 | Fraunces | 28px | 400 | 1.2 | `-0.005em` |
| H3 | Inter | 20px | 500 | 1.35 | `0em` |
| Gövde | Inter | 16px | 400 | 1.7 | `0em` |
| Küçük gövde | Inter | 13px | 400 | 1.55 | `0em` |
| Etiket / mono | IBM Plex Mono | 10.5px | 400 | 1.2 | `0.12em`, uppercase |

- Ölçek oranı 1.25: kullanılan basamaklar **10.5 · 13 · 16 · 20 · 28 · 44** (6 basamak); ara basamak uydurulmaz.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 3.6vw, 44px); line-height: 1.12; letter-spacing: -0.005em; text-wrap: balance; }`
- Gövde maksimum satır uzunluğu: **66ch**; lede 52ch (geniş boşlukta satır kısaltılır, göz atlaması azalır).
- Ağırlık kuralı: 400 ve 500 kullanılır, 600/700 yalnız KPI sayısında ve tablo başlığında; **300 yasak** (koyu zeminde ince çizgi kaybolur). Fraunces yalnız başlıkta ve **400** ağırlıkta (700 koyu zeminde fazla kontrast yapar); 20px altına inmez.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 (`--space-1…8`) |
| Breakpoint davranışı | 640px altı tek kolon (gutter 20px); 640–960px 8 kolon (gutter 24px); 960px üstü 12 kolon |

- Asimetri kuralı: hero **7/5** veya **8/4**; ekran başına en fazla 2 bölüm simetriden çıkar. Asimetri yumuşatılmaz — boşlukla dengelenir (boş kolon boş bırakılır, öğe ortalanmaz).
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada durabilir; üçüncü blok ya tam genişlik ya 8/4 kırılım alır.
- Dikey ritim: bölüm arası 96px (mobil 56px); kart içi 30px (mobil 20px); başlık–gövde 12px; kart–kart 24px; form alanı–alanı 16px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm zemini, grain katmanı |
| Kart | `--surface` + `1px var(--line)` | **yok** (mat) | içerik panelleri, tablo kabı, KPI |
| Yüzen katman | `--surface` + `1px var(--line)` | `0 2px 10px rgba(0,0,0,.35)` | modal, dropdown, hero görseli, öne çıkan kart |

- Kenarlık formülü: `border: 1px solid var(--line)`; iç ayırıcı aynı değer, opaklık artırılmaz (koyu zeminde `.14` üstü "çizgi gürültüsü" olur).
- Derinlik nereden gelir: **ton kademesi + hairline + boşluk**; gölge yalnız "yüzeyden kopan" katmanda. Işık yönü sabit (sol üst), gradient ile sahte ışık yok.
- Radius: `--radius: 6px` (buton, input, chip), `--radius-lg: 10px` (kart, modal, hero görseli); 14px ve üstü (yumuşak/clay dil) yasak, 0 radius yalnız tablo satırlarında.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 6px | 13px/500 Inter, `0.01em` | `--accent` + `--accent-ink`, gölge yok | hover: `color-mix(in srgb, var(--accent) 92%, var(--ink))` · active: `translateY(1px)` · focus: `outline: 2px solid var(--accent); outline-offset: 2px` · disabled: `opacity .42` · loading: 3 nokta 120ms |
| Buton (ikincil) | 44px | 0 18px | 6px | 13px/500 Inter | saydam zemin + `1px var(--line)` + `--ink` | hover: `--surface-2` zemin · active: `translateY(1px)` · focus: aynı halka |
| Input | 46px | 0 14px | 6px | 16px Inter | `--bg-2` zemin + `1px var(--line)` | focus: `outline: 2px solid var(--accent); outline-offset: 2px` · filled: kenar `--ink-soft` · error: kenar `--danger` + 13px hata satırı · disabled: `--surface-2` + `opacity .5` |
| Kart | içerik | 30px (mobil 20px) | 10px | H2 28 + 16 | `--surface` + `1px` , **gölge yok** | öne çıkan: `--surface-2` zemin + üst 2px `--accent` |
| Chip / badge | 26px | 0 10px | 4px | 10.5px mono uppercase `0.12em` | `--surface-2` + `1px var(--line)` + `--ink-soft` | aktif: `--accent` + `--accent-ink`; dokunma hedefi `min-height: 44px` ile |
| Nav | 72px | 0 48px | — | 13px Inter, aktif 500 | `--bg` + alt `1px var(--line)` | aktif: 2px `--accent` alt çizgi; pasif: `--ink-soft` |
| Tablo satırı | 52px | 14px 16px | 0 (satır), 10px (kap) | 15px Inter, başlık 10.5px mono | alt `1px var(--line)` | hover: `--surface-2` · seçili: sol 2px `--accent` + `--surface-2` |
| Modal / sheet | içerik | 30px | 10px | H2 28 + 16 | `--surface` + `1px` + `--shadow` | backdrop `rgba(9,11,10,.62)`; kapatma 44×44, radius 6px |
| Toast | 48px | 0 18px | 6px | 13px Inter | `--surface-2` + `1px var(--line)` + `--shadow` | sol 2px `--accent`, 5sn, tek sefer; kapatma 44×44 |
| Grafik paleti | — | — | çubuk üst 3px | eksen 10.5px mono | `--data-1` accent, `--data-2` ink, `--data-3` ink-soft, `--data-4` surface-2 | çubuklar arası 12px, yatay grid yok, taban çizgisi 1px `--line` |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — accent **dolu buton** üstünde `outline: 2px solid var(--accent-ink)` (10.07:1 ters çevrilir).
- Dokunma hedefi: en az 44×44px. Görsel olarak 26px olan chip ve 10.5px mono etiketler `min-height: 44px` + `padding: 0 10px` ile büyütülür; mobilde ikon butonlar 44×44 kutu.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 24px ızgara, `--ink-soft`; dolu ikon yalnız aktif durumda |
| Fotoğraf | doğal/dağınık ışık, düşük doygunluk, soğuk nötr ton; alan ≥%30, tek kare — kolaj yok, `filter: saturate(.75) contrast(1.02)` sınırı |
| İllüstrasyon | yok — yerine boşluk; boş durumda tek ince çizgi ikon (48px, 1.5px) |
| Doku | grain `.05` (örtü opaklığı `.16`, `soft-light`, zemin katmanı) + landing'de tek ışık lekesi (≤.07) |
| Logo alanı | 26px kare monogram (radius 6px) `--surface-2` zemin + `--ink` harf; çevresinde ≥24px boşluk, gölge yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta-yüksek | 44px Fraunces, 7/5 asimetri, tek dolu CTA, tek ışık lekesi (≤.07); gerisi boşluk | `shots/01-landing.png` |
| Dashboard | düşük | süs 0; KPI 20px Inter 500 + mono etiket; tablo hairline; accent ≤%4 | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px dokunma hedefi, bölüm arası 56px | — |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 6/10 ve hairline her bileşende görünür | — |
| Form | çok düşük | tek sütun 460px, 46px input, odak 2px accent + 2px offset; süs 0 | — |
| Modal / katman | orta | 10px radius + `--shadow`; backdrop 62%; başlık 28px; 2 buton sağa | — |
| Veri | düşük | 52px satır, 1px alt çizgi, çubuk üst 3px; eksen mono 10.5px | — |
| Gezinme | orta | alt 1px kural, aktif 2px accent alt çizgi, nav yüksekliği 72px | — |
| Pricing | orta | 3 kart (eşit), orta kart `--surface-2` + üst 2px accent; tek dolu CTA | — |
| Giriş | çok düşük | süs 0, tek kart 10px radius, hata durumu `--danger` 1px kenar | — |
| Liste | düşük | filtre çubuğu 1px alt kural, 52px satır, seçili satır sol 2px accent | — |
| Boş / hata durumu | orta | tek 1.5px ikon + tek cümle + tek buton; 404'te Fraunces 64px | — |
| Ayarlar | düşük | bölüm başlıkları mono etiket + 1px kural; anahtar 44×24, tehlike bölgesi `--danger` | — |
| Ödeme | çok düşük | özet sütunu sağda, 46px input, hairline tablo; accent yalnız ödeme butonunda | — |
| Onboarding | orta | adım göstergesi 2px çizgi, seçenek kartı 10px + hairline, tek ileri CTA | — |
| Makale | orta | 66ch ölçü, 28px H2, 1px ayırıcı; serif yalnız başlıkta | — |
| Mobil · alt sayfa | orta | üst köşe 10px, alt köşe 0, 44px sürükleme tutamacı (1px çizgi) | — |
| Mobil · form | çok düşük | tam genişlik 46px input, klavye üstü 44px CTA, etiket mono | — |
| Mobil · liste | düşük | 64px satır, 1px ayırıcı, avatar yerine 6px radius baş harf kutusu | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `cubic-bezier(.32,.72,.28,1)` | `transform: translateY(1px)` + zemin `--surface-2` |
| Geçiş / sayfa | 240ms | `cubic-bezier(.32,.72,.28,1)` | `opacity` + `translateY(4px)` |
| Giriş (enter) | **880ms** | `cubic-bezier(.5,.4,.15,1)` | `opacity` + `translateY(16px)`, **stagger 90ms**; kuzey ışığı gibi yavaş açılır |
| Kaydırma (scroll) | **950ms** | `cubic-bezier(.5,.4,.15,1)` | trigger **`top 79%`**, offsetY **14px**, `once: true` |
| Hover | **260ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | açık | `scrub 1.2` | hero sabitlenir, mesafe **+140%** |
| Ödül / vurgu | 380ms | `cubic-bezier(.32,.72,.28,1)` | accent alt çizgi `scaleX(0 → 1)`, tek atım (sonsuz döngü yok) |

- İmza ölçüsü: enter **0.88s / 16px / stagger 0.09** · scroll **0.95s / `top 79%` / 14px** · hover **260ms / 1.02** · pin **açık (scrub 1.2 / +140%)**.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, `transform` sıfırlanır, ışık lekesi sabit kalır, pin/scrub kapanır (basma geri bildirimi renk değişimiyle sürer).
- Bu stile yasak hareket: parallax, marquee, nefes alan (scale) katman, gradyan kayması, parlama (`glow`) animasyonu, yay/spring sıçraması.
## Koyu mod

| Token | Açık | Koyu (sevk edilen ana mod) |
|---|---|---|
| `--bg` | `#ecebe6` (yalnız referans, üretilmedi) | `#171a19` |
| `--surface` | `#f5f4f0` (referans) | `#1f2422` |
| `--ink` | `#1b1f1c` (referans) | `#e9e7e0` |
| `--accent` | `#4b5a3c` (referans) | `#b9c6a9` |

- Bu stil **koyu tabanlıdır**: açık tema uydurulmaz, `[data-theme="light"]` bloğu sevk edilmez. Yukarıdaki açık sütun yalnız baskı/gömme senaryosu için referanstır; üretilirse accent `--accent-ink` `#f5f4f0` olur ve `accent-ink/accent` yeniden ölçülür.
- Koyu mod sahneleri (17/18) bu stil için **üretilmez** — stil zaten koyu; ikinci koyu varyant kontrast ölçümünü ikiye katlar, kazanç sağlamaz.
- Koyu zeminde derinlik **hairline + ton kademesi** ile kurulur; `--shadow` yalnız yüzen katmanda ve tek değer (`0 2px 10px rgba(0,0,0,.35)`). Grain `.05 → .04`'e düşürülür (koyu zeminde doku daha görünür). `filter: invert()` yasak; palet elle yazılır.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint / --bg` **4.46:1** — yalnız dekoratif etiket ve sıra numarası; etkileşimli metin değil, gövde metni olarak kullanılmaz (3:1 değil 4.5:1 eşiğini de geçer, ama `--ink-soft` tercih edilir).
- `--ink / --bg` **14.16:1** ve `--ink-soft / --bg` **7.42:1** → gövde ve açıklama AAA sınırının üstünde; koyu zeminde "soluk metin" ihtiyacı doğarsa `--ink-soft` kullanılır, opaklık düşürülmez (`opacity < .8` metni eşiğin altına indirir).
- `--accent-ink / --accent` **10.07:1** → buton metni AAA; accent zemin üstünde `--ink` kullanılmaz (ters kontrast `2.4:1`).
- Odak görünürlüğü: koyu zeminde `--accent` halka (9.78:1 zemin üstü) yeterli; accent **dolu** butonda halka `--accent-ink` ile çizilir. Halka 2px + 2px offset, `--surface-2` üstünde de görünür (11.51:1 metin, 1px çizgiye ek 2px).
- Işık lekesi ve grain katmanları `pointer-events: none` + `aria-hidden`; kontrastı 0.2:1'den fazla düşürmez (opaklık ≤.16 / ≤.07) ve odak sırasını değiştirmez.
- Opak fallback: `--blur: 0`, yarı saydam panel yok → `@supports` gerekmez; tek saydam yüzey modal backdrop'ıdır ve arkasındaki içerik `aria-hidden` olur.
- Hareket/parlama hassasiyeti: parlama animasyonu yok; `prefers-reduced-motion` tüm geçişleri 0.01ms'e indirir.

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
| "Koyu kurumsal tema" gibi duruyor | Kenarlık 2px'e çıkmış, boşluk sıkışmış | Hairline 1px, bölüm arası 96px, kart içi 30px |
| Kartlar havada yüzüyor | Karta `--shadow` verilmiş | Kart `box-shadow: none`; gölge yalnız yüzen katmanda |
| Palet çamurumsu | Zemin ve yüzey arasındaki fark <%4 veya accent doygun | Ton adımı %5–%8; accent doygunluk ≤%40 (`#b9c6a9`) |
| Göz yoruyor | Saf siyah zemin + saf beyaz metin, 300 ağırlık | `#171a19` + `#e9e7e0`, en ince ağırlık 400 |
| Hiyerarşi kayboldu | Her şey `--ink`, her buton dolu | Tek dolu buton; ikincil `ghost`; açıklama `--ink-soft` |
| Dark Academia'ya kaydı | Sıcak kahve ton + altın accent + çift çerçeve | Soğuk nötr palet, liken accent, tek 1px çizgi |
| Grain leke gibi | `--grain` > .06 veya metin üstünde | `.05`, örtü `.16`, `soft-light`, yalnız zemin katmanı |
| Mobilde başlık kırpılıyor | 44px sabit punto | `clamp(30px, 3.6vw, 44px)` + `text-wrap: balance` |
| Tablo gürültülü | Satır arası çift çizgi, zebra + hover birlikte | Tek alt çizgi; hover `--surface-2`, zebra yok |
| Form "ölü" görünüyor | Input zemini `--surface` ile aynı | Input zemini `--bg-2`, kenar 1px, odak 2px accent |

## Komşu stiller

- **Uyumlu:** `06 japandi` — aynı ölçülülük ve sıcak nötr; yalnız içerik bloğu katmanında (koyu zemin değişmez). `01 minimalism` — aynı boşluk disiplini; yalnız boş durum/onboarding katmanında. `33 dark-academia` — koyu zemin ortak; yalnız makale tipografisinde (gövde metni değişmez).
- **Yasak:** `37 kinetic-type` (dev ölçek + negatif tracking sakinliği bozar) · `13 neo-brutalism` (blok gölge + 0 radius, mat-hairline kuralını kırar) · `08 glassmorphism` (blur/yarı saydamlık, opak yüzey kuralıyla çelişir) · `22 cyberpunk` (neon/glow ve doygun palet zehirler) · `18 dopamine-ui` (yüksek doygunluk + mikro ödül gürültüsü).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.nngroup.com/articles/dark-mode/ | koyu temada kontrast, parlaklık ve uzun oturum kuralları |
| https://m3.material.io/styles/color/roles | yüzey ton kademesi (surface/container) mantığı |
| https://fonts.google.com/specimen/Fraunces | display serif, 400 ağırlık, düşük kontrastlı optik |
| https://fonts.google.com/specimen/Inter | gövde; 16px/1.7 ölçüsü ve nötr harf ritmi |
| https://fonts.google.com/specimen/IBM+Plex+Mono | etiket / ölçü, 10.5px uppercase `0.12em` |
| https://www.alvaraalto.fi/ | mat yüzey, doğal ışık, ölçülü boşluk |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Scandinavian Dark (styles/40-scandinavian-dark/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="scandinavian-dark"] değişkenleri; hard-coded renk/gölge/radius yasak.
Yüzey: mat — kart box-shadow: none, derinlik 1px var(--line) + ton kademesi (--bg #171a19 → --surface #1f2422 → --surface-2 #262c29); --shadow yalnız modal/dropdown/hero görselinde (0 2px 10px rgba(0,0,0,.35)).
Renk: tek aksan liken #b9c6a9 (accent-ink/accent 10.07:1), ink/bg 14.16:1, ink-soft/bg 7.42:1; accent ekranın ≤%8'i, ikinci aksan yok.
Tipografi: --font-display (Fraunces 400) başlıkta 44px/1.12 (mobil 30px), tracking --tracking (-0.005em); --font-body (Inter) gövde 16px/1.7, ölçü ≤66ch; --font-mono (IBM Plex Mono) 10.5px uppercase 0.12em etiket.
Boşluk: bölüm arası 96px (mobil 56px), kart içi 30px (mobil 20px), gutter 32px, container 1160px; hero 7/5 veya 8/4.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; buton 44px/radius 6px, input 46px, kart radius 10px, odak 2px accent + 2px offset.
Doku: grain .05 (örtü .16, soft-light, zemin katmanı) + landing'de tek ışık lekesi (opaklık ≤.07); ikinci süs yok.
Hareket: basma 120ms, geçiş 240ms, vurgu 380ms; prefers-reduced-motion zorunlu.
Yasak: kart gölgesi, blok/inset gölge, glow, blur/cam, 2px+ çerçeve, gradyan geçişi, ikinci aksan, saf siyah/beyaz, uppercase display, 60px üstü başlık, illüstrasyon, parallax/marquee.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (hairline kart + liken accent + geniş boşluk).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥4.5:1, büyük metin ≥3:1, accent üstü ≥4.5:1.
- [ ] Odak halkası görünür (2px + 2px offset), dokunma hedefi ≥44px.
- [ ] 390px genişlikte taşma/kırpılma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.
- [ ] Kartlarda gölge yok, kenarlık 1px, accent ≤%8, saf siyah/beyaz yok.

## Token

```css
[data-style="scandinavian-dark"] {
  --bg: #171a19; --bg-2: #1d211f;
  --surface: #1f2422; --surface-2: #262c29;
  --ink: #e9e7e0; --ink-soft: #a6aaa2; --ink-faint: #7d8279;
  --accent: #b9c6a9; --accent-ink: #141715;
  --line: rgba(233,231,224,.14);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 10px rgba(0,0,0,.35); --shadow-hard: none;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", "Segoe UI", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: .05;
}
```
