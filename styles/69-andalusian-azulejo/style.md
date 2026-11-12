# 69 · Andalusian Azulejo

> **Bir cümleyle:** Ekranı fayans gibi döşer: 2px harç boşluğu, 1–2px radius ve tek kobalt maviyle kurulmuş modüler bir ızgara.

| | |
|---|---|
| **Hissiyat** | geometrik, serin, el işi- endüstriyel, net |
| **En iyi** | mimari/emlak portföyü, müze–sergi takvimi, ürün kataloğu (seramik, tekstil), kurumsal kültür sayfası |
| **Kaçın** | sıcak duygusal hikâye anlatımı, çocuk uygulaması, gece modu ağırlıklı medya oynatıcı, çok renkli kampanya |
| **Zorluk** | orta (ızgara disiplinini bozmadan desen kurmak) · **Erişilebilirlik** | iyi (13.22:1 gövde, 7.45:1 accent üstü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="andalusian-azulejo"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Andalusian Azulejo, arayüzü **çini panel** gibi kurar: her blok bir fayans, aralarında tam **2px harç** boşluğu (bu boşluk `--line` rengindedir, gölge değil), köşeler 1–2px, ve tek krom **kobalt** (`#1c4ea0`). Süs, ayrı bir katman olarak değil **ızgaranın kendisi** olarak gelir: sekiz köşeli yıldız tekrarı ve elmas tessellation yalnız dekoratif katmanda (%16 opaklık) dolaşır. Display ince bir seramik yazısıdır (Poiret One 400), gövde Jost, etiketler Space Mono uppercase.

Kazandığı şey: **düzen ve zanaat aynı anda**. Modüler ızgara yüzünden hiçbir öğe "yerleştirilmemiş" görünmez; kobalt-beyaz sınırlaması ise çini geleneğinin en kolay taklit edilen yanını (çok renklilik) kapatıp en zor olanı (geometri) öne çıkarır. Feda ettiği şey: **esneklik** — serbest kompozisyon, taşan görsel, eğik öğe yoktur; her şey modüle oturur.

### Ne değildir
- **Art Deco (26) değildir.** Art Deco simetri + altın hairline + ziggurat ile "lüks dönem" kurar (Cinzel, altın accent). Burada altın yok, **kobalt** var, geometri tessellation (8 köşeli yıldız) ve radius 1–2px.
- **Swiss Design (02) değildir.** Swiss 12 kolon + tipografi hiyerarşisiyle çalışır ve accent kırmızıdır (`#e4002b`), hiç desen yoktur. Burada desen ızgaranın parçası, accent kobalt ve harç boşluğu 2px'e sabit.
- **Bento Grid (05) değildir.** Bento değişken boyutlu kutular ve sabit gutter (`24px`) kullanır, gölge/radius serbesttir. Burada gutter **2px** (harç), radius 1–2px, gölge yok.
- **Bohemian (30) değildir.** Bohemian kilim desenini yumuşak, çok renkli ve serbest yerleşimle kullanır; burada desen rijit, tek renk ve ızgaraya kilitli.
- **"Mavi accent eklenmiş kutu düzeni" değildir.** Harç boşluğu, tessellation katmanı ve 2px modal çerçevesi olmadan bu stil sadece bir grid şablonudur.

### Nereden gelir
Azulejo, Mağrip ve Endülüs'te (13.–18. yy) mimari yüzeyleri kaplayan sırlı çini geleneğidir; İslam geometrisinin yıldız/elmas tessellation'ı ile Portekiz–İspanya'nın kobalt-beyaz panel dilini birleştirir. Dijitalde mimarlık ofisleri, müze takvimleri ve ürün katalogları tarafından kullanılır; nedeni ölçülebilir — modüler tekrar, responsive ızgaraya birebir çevrilir (12 kolon = fayans dizisi) ve tek renkle kimlik taşır.

Klişeye düşmemek için korunması gereken detay: **harç oranı ve tek renk**. Gutter'ı 16px'e çıkarmak, ikinci rengi (sarı/yeşil) eklemek veya motifi metnin arkasına tam opak koymak stili "tema parkı"na çevirir.

### 3 saniyede tanıma testi
1. Kartlar arasındaki boşluk **ince (2px)** ve bu boşluk **çizgi renginde** mi — yani bloklar birbirine "yapışık" mı?
2. Krom **tek kobalt mavi** mi (`#1c4ea0`); ikinci renk (sarı/yeşil/bordo) var mı?
3. Bir köşede **sekiz köşeli yıldız / elmas tessellation** düşük opaklıkla görünüyor mu?
4. Başlık **ince geometrik** (Poiret One 400, 52px), etiketler **Space Mono uppercase** mi?
5. Tüm köşeler **1–2px** mi; butonlar pill değil, gölge yok mu?

## Görsel imza
1. **Harç ızgarası:** bitişik bloklar arasında `gap: 2px` + konteynerde `background: var(--line)`; dış boşluklar normal (16/24/32px).
2. **Sekiz köşeli yıldız tekrarı:** 60×60px modül, `repeating-conic-gradient(22.5deg)` + iki çapraz 1px çizgi; opacity **.16**, radial mask ile sağ üst köşeye sınırlı.
3. **Kobalt fayans mühür:** 58×58px dolu kare + içeride 5px zemin boşluğu + 1px kobalt halka (mobilde 40×40).
4. **İnce seramik display:** Poiret One 400, 52px, tracking **+0.02em** (negatif değil — seramik yazı harfleri ayrık durur).
5. **2px harç kenarları:** nav alt çizgisi 2px, divider 2px, modal çerçevesi 2px kobalt; kart kenarı 1px.
6. **Modül asimetrisi:** 1 geniş + 2 dar modül; ölçüler ızgaradan gelir, serbest ölçü yok.
7. **Etiket dili:** Space Mono 11px uppercase .14em — çini panelin "kenar yazısı" gibi, yalnız mono.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ecebe6` | Sayfa zemini (harç zemini) | Kart içi |
| `--bg-2` | `#e2e1da` | Harç kalın bölgeler, alt bilgi | Geniş dolgu |
| `--surface` | `#ffffff` | Fayans yüzeyi (kart, hücre) | Sayfa zemini |
| `--surface-2` | `#f5f4ef` | Tablo başlığı, chip | Metin arkası |
| `--ink` | `#14233a` | Başlık, gövde, nav | Kobalt zemin üstü |
| `--ink-soft` | `#46566f` | Lede, ikincil metin | Küçük etiket |
| `--ink-faint` | `#72808f` | Dekoratif etiket, eksen yazısı | Etkileşimli metin |
| `--accent` | `#1c4ea0` | Birincil buton, mühür karesi, modal çerçevesi, aktif işaret | Gövde metni |
| `--accent-ink` | `#f4f8ff` | Kobalt zemin üstü metin | Beyaz zemin |
| `--line` | `rgba(20,35,58,.18)` | **Harç** (ızgara boşluğu), kart kenarı, 2px kurallar | Metin |

- Ölçülen kontrast: `ink / bg` = **13.22:1** · `ink-soft / bg` = **6.24:1** · `accent-ink / accent` = **7.45:1** · `ink-faint / bg` = **3.38:1** (yalnız dekoratif).
- Tek renk kuralı: **mavi-beyaz varyant** seçildi. Kobalt alanı ekranın ≤ **%15**'i (çini panelde renk payı büyüktür; diğer stillerdeki %8 sınırı burada %15).
- Yasak kombinasyon: kobalt zemin + `--ink-soft` metin; ikinci accent (sarı/yeşil/bordo) hiçbir amaçla; `--ink-faint` + `--surface-2` (3.1:1).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poiret One | 52px (mobil 34px) | 400 | 1.1 | 0.02em |
| H2 | Poiret One | 28px | 400 | 1.2 | 0.015em |
| H3 | Jost | 19px | 500 | 1.32 | 0 |
| Gövde | Jost | 16px | 400 | 1.68 | 0 |
| Lede | Jost | 16px | 400 | 1.68 | 0 (50ch) |
| Etiket / mono | Space Mono | 11px | 400 | 1.45 | 0.14em |

- Ölçek oranı ≈ 1.65 (16 → 28 → 52); kullanılan basamak sayısı 6 (11/12/16/19/28/52).
- Ölçü önerisi: `h1 { font-size: clamp(34px, 4.2vw, 52px) }`.
- Gövde metni maksimum satır uzunluğu: **60ch**; lede 50ch.
- Ağırlık kuralı: display yalnız 400 (Poiret One tek ağırlık — kalınlaştırmak font sahtelemesi olur, yasak); gövde 400, vurgu 600.
- Pozitif tracking zorunlu (0.02em): seramik yazı harfleri bitişik değil, ayrık durur; negatif tracking stilin karakterini siler.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (modül: 1 geniş + 2 dar, 6/3/3) |
| Gutter | **2px (harç)** — dış boşluklar 16/24/32px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında 12 kolon 4'e katlanır, harç 2px kalır |

- Asimetri kuralı: ızgara **bozulmaz**; asimetri yalnız modül genişliğinde (1 geniş + 2 dar). Ekran başına en fazla 1 geniş modül.
- Bölüm ritmi: art arda en fazla **4** fayans satırı; sonra 2px harç + 88px boşluk.
- Bölüm dikey boşluk 88px (mobil 52px); kart padding 20px; kart arası **2px harç** (istisnasız).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, harç zemini |
| Fayans | `--surface` + 1px `--line` | `none` | Kart, hücre, KPI |
| Yüzen katman | `--surface` + 2px `--accent` | `none` | Modal, dropdown (perde `--ink` %50) |

- Kenarlık formülü: kart `1px solid var(--line)`; nav/divider/modal `2px` (harç kalınlığı); iç içe çerçeve yok.
- Derinlik nereden gelir: **harç + sır düzlüğü**. Gölge yok (yalnız `--shadow: 0 1px 0` rezerv, pratikte kullanılmaz); ayrım 2px boşlukla.
- Radius: `--radius` 2px (buton, input, kart) · `--radius-lg` 4px (modal, hero görseli). Buton ve input 1px (daha keskin fayans). 4px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 18px | 1px | 11px/400 mono uppercase .12em | `--accent` / `--accent-ink`, gölge yok | hover %92 150ms · active iç 1px accent-ink · focus 2px accent offset 0 · disabled opacity .45 · loading 3 kare dolar |
| Buton (ikincil) | 44px | 12px 18px | 1px | 11px/400 mono | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı halka |
| Input | 44px | 0 12px | 1px | 14px/400 Jost | `--surface` + 1px `--line` | focus 2px accent offset **0** (halka kenara yapışır) · filled aynı · error `--danger` + açıklama · disabled opacity .45 |
| Kart | — | 20px | 2px | H3 Jost 19px | `--surface` + 1px `--line`, gölge yok | hover: kenar `accent %40` · seçili: 2px accent kenar |
| Chip / badge | 22px | 0 8px | 1px | 10px/400 mono uppercase .12em | `--surface-2` + 1px `--line` | accent varyantı dolu kobalt (alan ≤ %15) |
| Nav | 60px | 0 40px | 0 | 11px/400 mono uppercase .12em | `--bg` zemin + alt **2px** `--line` | aktif: altında 8px kobalt kare; pasif `--ink-soft` |
| Tablo satırı | 44px | 12px 14px | 0 | 14px/400 Jost | hücreler arası **2px harç** + 1px kenar | hover `--surface-2` · seçili: sol 2px accent |
| Modal / sheet | — | 28px | 4px | H2 Poiret One 28px | `--surface` + **2px accent** çerçeve, gölge yok | perde `--ink` %50, 150ms fade |
| Toast | 40px | 10px 16px | 1px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 8px kobalt kare, 3200ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; sütunlar 2px harç aralıklı, nokta işareti kare |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 0` — halka kenara yapışır (fayans kenarı gibi). Halo/offset yok.
- Dokunma hedefi: en az 44×44px; nav öğeleri 60px yüksekliğin tamamını kullanır; chip 22px görünür ama sarmalayıcıda 11px dikey padding alır.
- Harç boşluğu **sadece dekoratif değildir**: `gap: 2px` + `background: var(--line)` ile hücre sınırı bilgi taşır (tablo sütun ayrımı).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px geometrik çizgi, kare uç, 24px ızgara; yuvarlak köşe yok |
| Fotoğraf | Mimari detay, çini yüzey, kemer; yüksek kontrast, soğuk gün ışığı; alan ekranın %45'i |
| İllüstrasyon | Sekiz köşeli yıldız / tessellation; yalnız dekoratif katman, opacity ≤ .16 |
| Doku | Yok (`--grain: 0`); desen dokunun yerini alır |
| Logo alanı | Uppercase ince display (Poiret One, .08em); 20px güvenli boşluk; kobalt yalnız tek kare işaret |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Tessellation sağ üstte (%16), kobalt mühür karesi, 2px divider | `shots/01-landing.png` |
| Dashboard | düşük | KPI kartları 2px harçla bitişik; sayılar Space Mono | `shots/02-dashboard.png` |
| Form | düşük | 44px alan, 1px radius, halka offset 0 | — |
| Liste / tablo | düşük | Hücreler arası 2px harç; başlık uppercase mono | — |
| Boş durum | orta | Tek yıldız motifi (küçük) + 1 cümle + 1 buton | — |
| Onboarding | yüksek | Adımlar fayans sırası: 3 kare, aktif olan kobalt | — |
| Pricing | orta | 3 fayans modülü (6/3/3); orta modül 2px kobalt kenar | — |
| Giriş / ödeme | çok düşük | Süs yok; alanlar 1px radius, tek kobalt buton | — |
| Modal | orta | 2px kobalt çerçeve, gölge yok, perde koyu | — |
| Bildirim / toast | orta | Sol uçta 8px kobalt kare, 3200ms | — |
| Hata | düşük | `--danger` kenar + açıklama; motif kullanılmaz | — |
| Profil / ayar | orta | Ayarlar fayans listesi; her satır 2px harçla ayrı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 90ms | `cubic-bezier(.6,.02,.2,1)` | iç 1px `accent-ink` inset |
| Giriş (enter) | **420ms** | `cubic-bezier(.6,.02,.2,1)` | `opacity` + `translateY(10px)`, stagger **70ms** |
| Kaydırma (scroll) | **550ms** | `cubic-bezier(.6,.02,.2,1)` | trigger **`top 88%`**, offsetY **12px**, `once: true` |
| Hover | **150ms** | `ease-out` | görsel ölçek **1.045** |
| Pin | **açık** | `scrub: 0.9` | mesafe **+60%** (en kısa sabitleme) |
| Ödül / vurgu | 300ms | `cubic-bezier(.6,.02,.2,1)` | kobalt mühür 1 kare büyür (58→64px) |

- `prefers-reduced-motion`: tüm süreler 0.01ms; tessellation statik, pin devre dışı.
- Bu stile yasak hareket: spring/bounce, parallax, sürekli döngü, sır parlaması/ışık süpürme.
- İmza ölçüsü: giriş **0.42s / 10px / stagger .07**, kaydırma **0.55s / top 88% / 12px**, hover **150ms / 1.045**, pin **scrub .9 / +60%** — katalogda tekrar etmez.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ecebe6` | `#0b1524` |
| `--bg-2` | `#e2e1da` | `#101c2e` |
| `--surface` | `#ffffff` | `#142237` |
| `--surface-2` | `#f5f4ef` | `#1b2c45` |
| `--ink` | `#14233a` | `#e9f0f8` |
| `--ink-soft` | `#46566f` | `#a9b7c8` |
| `--ink-faint` | `#72808f` | `#7d8ea1` |
| `--accent` | `#1c4ea0` | `#5b93f0` |
| `--accent-ink` | `#f4f8ff` | `#081120` |
| `--line` | `rgba(20,35,58,.18)` | `rgba(233,240,248,.16)` |

- Koyu mod **gece çinisi**: zemin lacivert, fayans yüzeyleri `#142237`; kobalt açılır (`#5b93f0`) çünkü koyu mavi koyu zeminde harçla karışır.
- Harç rengi koyuda beyazdan türetilir (`.16`) — harç açık temada olduğu gibi "görünür ama sessiz" kalır.
- `--shadow` iki temada da pratikte kullanılmaz; `filter: invert()` yasak, palet elle yazılır.
- Koyu modda kontrast: `ink/bg` = **15.94:1** · `ink-soft/bg` = **8.98:1** · `accent-ink/accent` = **6.19:1** · `ink-faint/bg` = **5.45:1**.

## Zorunlu kurallar

1. **Harç ızgarası:** bitişik bloklar arasında tam 2px boşluk ve bu boşluk `--line` renginde (gölge değil).
2. **Tek krom:** kobalt `#1c4ea0`; mavi-beyaz varyant seçildi, ikinci renk yok.
3. **Tessellation sınırlı:** sekiz köşeli yıldız yalnız dekoratif katmanda, opaklık ≤ .16.
4. **Köşe:** radius 1–2px (modal 4px); pill ve 8px radius yasak.
5. **Tipografi:** Poiret One 400 (display), Jost 400 (gövde), Space Mono uppercase (etiket).
6. **Modüler hiza:** her öğe ızgaraya oturur; asimetri yalnız modül genişliğinde (6/3/3).

## Yasaklar

- Çok renkli çini: sarı, yeşil, bordo, turkuaz ikinci accent.
- Sır parlaması taklidi: gradient, parlak highlight, blur.
- 4px üstü radius, yuvarlak buton, pill chip.
- Gölgeyle derinlik ve iç içe çerçeve.
- Izgarayı bozan serbest yerleşim veya değişken gutter.
- Tessellation motifini metin arkasına tam opak yerleştirmek.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.38:1** (açık tema). `--ink-faint` yalnız dekoratif etiket ve eksen yazısı; etkileşimli metin, form etiketi, nav bağlantısı olamaz.
- Harç boşluğu 2px: bilgi taşıdığı için sütun ayrımı **yalnız harçla bırakılmaz** — tablo başlığı ve hücreler ayrıca ton (`--surface` vs `--surface-2`) ve hizalama ile ayrılır.
- Hareket/parlama hassasiyeti: orta — kobalt %15 alanda güçlü kontrast yaratır; parlak yüzey/glow yok, geçişler 150ms altında kısa.
- Şeffaf yüzey yok (`--blur: 0`); `mask-image` desteklenmezse tessellation dikdörtgen alanda kalır (işlevsel kayıp yok, `aria-hidden`).
- Odak halkası offset **0** (kenara yapışık): 2px kobalt halka beyaz fayans üzerinde 7.45:1; kobalt zeminli butonda `outline-color: var(--accent-ink)` kullanılır.

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
| "Tema parkı" hissi | motif büyütülmüş + ikinci renk eklenmiş | Modül 60px, opacity .16, tek kobalt |
| Izgara dağılmış | gutter 2px yerine 16px, serbest ölçüler | `gap: 2px` + `background: var(--line)`; tüm bloklar modüle |
| Butonlar "yumuşak SaaS" olmuş | pill radius veya 8px radius | Radius 1px; pill yasak |
| Okunaksız metin | tessellation metin arkasında tam opak | Deseni `.sig` katmanına al, opaklığı .16'ya düşür |
| Gölgeyle derinlik | kartlara `box-shadow` eklenmiş | Gölgeyi kaldır; ayrım harç + 1px kenar |
| Display bozuk görünüyor | Poiret One kalınlaştırılmış (sahte 600) | 400'de bırak; hiyerarşiyi boyutla kur |

## Komşu stiller

- **Uyumlu:** `swiss-design` — ızgara disiplini ortak; swiss'i yalnız tipografi katmanında kullan, deseni ezme.
- **Uyumlu:** `bauhaus` — temel geometri dili paylaşır; bauhaus'u tek bölümde (etkinlik afişi) tut.
- **Uyumlu:** `bento-grid` — modüler kutu mantığı ortak; bento'nun 24px gutter'ı bu stilde 2px'e çekilir.
- **Yasak:** `memphis` — zikzak/konfeti ve çok renk tessellation disiplinini yok eder.
- **Yasak:** `claymorphism` — şişkin gölge ve yuvarlak form fayans düzlüğüyle çelişir.
- **Yasak:** `glassmorphism` — blur ve yarı saydamlık harç/sır mantığını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Azulejo | kobalt-beyaz palet, tekrar eden modül, harç oranı |
| https://en.wikipedia.org/wiki/Alhambra | tessellation geometrisi ve sekiz köşeli yıldız |
| https://whc.unesco.org/en/list/314/ | çini panel oranları ve tekrar yoğunluğu |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | harç çizgisi ve fayans kenarı ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
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
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (2px harç + tessellation + kobalt mühür).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (13.22:1), accent üstü ≥ 4.5:1 (7.45:1).
- [ ] Odak halkası görünür (2px, offset 0), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; harç 2px korunuyor.
- [ ] `prefers-reduced-motion` açıkken hareket ve pin duruyor.

## Token

```css
[data-style="andalusian-azulejo"] {
  --bg: #ecebe6; --bg-2: #e2e1da;
  --surface: #ffffff; --surface-2: #f5f4ef;
  --ink: #14233a; --ink-soft: #46566f; --ink-faint: #72808f;
  --accent: #1c4ea0; --accent-ink: #f4f8ff;
  --line: rgba(20,35,58,.18);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 0 rgba(20,35,58,.14); --shadow-hard: none;
  --font-display: "Poiret One", "Jost", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="andalusian-azulejo"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
