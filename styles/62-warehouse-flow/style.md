# 62 · Warehouse Flow

> **Bir cümlede:** Raf, görev ve sevkiyatın tek satırda okunduğu, sarının yalnız "şimdi ne yapılacak" sorusunu yanıtladığı depo operasyon arayüzü.

| | |
|---|---|
| **Hissiyat** | hareketli, okunaklı, endüstriyel, acil |
| **En iyi** | depo yönetimi (WMS), sevkiyat/tesisat takibi, sayım & stok sayfası, saha operasyon tableti |
| **Kaçın** | lüks marka, sessiz okuma deneyimi, çocuk/wellness — burada yoğunluk "gürültü" olur |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (sarı metin olarak kullanılamaz, en düşük etkileşimli çift 6.96:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="warehouse-flow"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Warehouse Flow, depoyu bir **görev akışı** olarak çizer: her satır bir iş birimini (ürün + konum + miktar + durum) taşır, sarı yalnız o an yapılacak eylemi işaretler. Arayüz "bilgi göster" demez, "sıradaki işi göster" der: sayım, toplama, yükleme, teslim.

Üç kurucu karar: (1) **sert ofset** — kaldırılabilir öğe (kart, buton, etiket) 4px sert gölge alır, zemindeki panel almaz; böylece "elle taşınabilir" ile "sabit" ayrımı gölgeyle kurulur; (2) **tek doygun renk** — sarı accent dışında hiçbir doygun renk yok, durumlar `--ok`/`--warn`/`--danger` ile; (3) **eldivenli kullanım** — 44px hedef, 40px satır, 14px mono kod.

Bedeli: ekran kalabalıktır. Kalabalığın "dağınık" değil "operasyonel" görünmesini sağlayan şey **kutu disiplini** (2px radius, 1px çerçeve) ve satır numarası kolonudur.

### Ne değildir
- **Bento Grid (05) değildir:** bento kart yığınıyla ritim kurar; burada satır/tablo ritmi vardır ve her kart 4px sert ofset taşır.
- **Neo-Brutalism (13) değildir:** neo-brutalism 2px+ siyah çerçeve ve pembe accent ile provokasyon arar; Warehouse Flow endüstriyel sarı + Archivo Black ile işlevsel kalır, radius 2px'tir.
- **Utility (44) değildir:** Utility sakin ürün arayüzüdür, gölge yoktur ve tek sütun ölçüyle çalışır; burada ofset gölge, durum şeritleri ve yoğun tablo var.
- **Terminal UI (45) değildir:** terminal koyu ve mono-tek ailedir; bu stil açık zemin, Archivo Black başlık ve Inter gövdedir.

### Nereden gelir
Depo raf etiketleri, sevkiyat manifestoları ve forklift kabini uyarı dilinden: sarı-siyah şerit, büyük punto rakam, kutu içinde kod. Bugün yeniden kullanılmasının nedeni: WMS arayüzleri operatörün elinde tabletle, eldivenle ve ayakta kullanılıyor; küçük punto ve düşük kontrast sahada çalışmıyor. Klişeye dönüşmemesi için korunacak detay: **sert ofset gölgenin yalnız taşınabilir öğeye verilmesi** ve sarının metin rengi olarak kullanılmaması.

### 3 saniyede tanıma testi
1. Butonlar ve kartlar **4px sağa-aşağı sert ofset gölge** taşıyor; paneller taşımıyor.
2. Tek doygun renk sarı; sarı yalnız dolgu, asla metin değil.
3. Tablo satırlarında solda kutu içinde sıra numarası, sağda durum chip'i var.
4. Başlıklar Archivo Black, sıkı satır aralığı (0.96), negatif tracking.
5. Her liste ekranında barkod tarama alanı ve canlı bekleyen iş sayacı görünüyor.

## Görsel imza
- **Sert ofset:** `box-shadow: var(--shadow-hard)` = `4px 4px 0 rgba(23,21,15,.88)`; yalnız buton, kart, chip, modal. Panel ve tablo zemini gölgesiz.
- **Raf şeridi:** bölüm ayırıcı olarak 8px yüksekliğinde accent/siyah çapraz şerit bandı (hero ve landing altında bir kez).
- **Kutu numarası:** tablo satırının solunda 24×24px, 1px `--ink` çerçeveli, 11px mono sıra numarası.
- **Durum şeridi:** toast ve satır başında 6px dikey şerit; renk + metin etiketi birlikte.
- **Archivo Black blok başlık:** H1 56px/0.96, `-0.02em`; iki satırdan fazla kırılmaz (max 18ch).
- **Mono kod dili:** SKU, raf, sipariş no — hepsi 11–13px JetBrains Mono büyük harf, `0.1em` aralık, `--surface-2` zemin.
- **Kenarlık 2px:** nav alt çizgisi ve modal çerçevesi 2px `--ink`; geri kalan her şey 1px `--line`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3f1ec` | sayfa zemini (beton) | kart zemini |
| `--surface` | `#fcfbf8` | kart, tablo, form | sayfa zemini |
| `--surface-2` | `#f0ede5` | kod etiketi, çizgili bant, başlık satırı | birincil buton |
| `--ink` | `#17150f` | metin, 2px çerçeve, tablo başlığı | büyük dekoratif dolgu |
| `--ink-soft` | `#56523f` | ikincil metin, etiket | accent üstü |
| `--ink-faint` | `#807b66` | kod ikincil sütunu, dekoratif ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#f2b705` | **yalnız dolgu**: birincil buton, aktif şerit, seçili satır | **metin rengi olarak yasak** (bg'ye 1.6:1) |
| `--accent-ink` | `#1a1608` | accent dolgu üstü metin | accent olmayan zemin |
| `--line` | `rgba(23,21,15,.22)` | 1px çerçeve, satır ayırıcı | 2px vurgu çizgisi |

- Ölçülen kontrast: `ink/bg` **16.17:1** · `ink-soft/bg` **6.96:1** · `accent-ink/accent` **9.94:1** · `ink-faint/bg` **3.76:1**.
- Tek vurgu kuralı: sarı accent yalnız dolgu; metin `--accent-ink` ile. Durumlar `--ok` (yeşil), `--warn` (kahverengi sarı), `--danger` (kiremit kırmızı) — üçü de dolgu + metin olarak kullanılabilir.
- Yasak kombinasyon: sarı zemin üstünde beyaz metin; `--accent` ile `--warn` yan yana (ayırt edilemez); sarı ince çizgi (1px'te görünmez, en az 3px).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 56px | 400 (tek ağırlık) | 0.96 | -0.02em |
| H2 | Archivo Black | 30px | 400 | 1.10 | -0.01em |
| H3 | Inter | 20px | 600 | 1.25 | 0 |
| Gövde | Inter | 15px | 400 | 1.55 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 700 | 1.35 | 0.12em, büyük harf |
| Kod / tablo | JetBrains Mono | 13px | 400 | 1.4 | 0.02em, tabular |

- Ölçek oranı ≈ 1.6 (15 → 30 → 56); kullanılan basamaklar: 11 · 12 · 15 · 20 · 30 · 56 · (mobil 32).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5.6vw, 56px) }`.
- Gövde metni maksimum satır uzunluğu: 58ch; tablo hücresi 24ch'te kırpılır, tam metin tooltip'te.
- Ağırlık kuralı: Archivo Black tek ağırlık (400) — sentetik kalınlaştırma yasak; Inter 400/600; mono 400/700. İtalik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 8/4, tablo tam genişlik |
| Gutter | 16px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo kart yığınına döner |

- Asimetri kuralı: ekran başına 1 asimetrik blok (hero 8/4 veya dashboard'da dar "sevkiyat rayı").
- Bölüm ritmi: 64px masaüstü / 36px mobil; art arda en fazla 2 aynı tip blok, sonra raf şeridi ayırıcı.
- Tablo: satır 40px, hücre 6/12px; sayı hücreleri sağa hizalı.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, bölüm bandı |
| Panel | `--surface` + 1px `--line` | yok | tablo, form bölümü |
| Kart (taşınabilir) | `--surface` + 2px `--ink` | `--shadow-hard` 4px ofset | iş kartı, ürün kartı |
| Yüzen katman | `--surface` + 2px `--ink` | `--shadow-hard` | modal, açılır menü |

- Kenarlık formülü: panelde `1px solid var(--line)`, taşınabilir öğede `2px solid var(--ink)`.
- Derinlik nereden gelir: yalnız ofset gölge (kâğıt etiket hissi); blur ve iç gölge yok.
- Radius: `--radius` 2px (buton, chip, input), `--radius-lg` 8px (kart, modal). 8px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 10px 20px | `--radius` | 13px/600 Inter | `--accent` + `--accent-ink`, `--shadow-hard` | hover ofset 2px · active ofset 0 + translate(4px,4px) · focus 3px ink halka · disabled %40 · loading 3 çubuk |
| Buton (ikincil) | 44px | 10px 18px | `--radius` | 13px/600 Inter | `--surface` + 1px `--ink`, `--shadow` | hover `--surface-2` · focus accent halka |
| Input | 44px | 0 12px | `--radius` | 14px mono tabular | `--surface` + 1px `--ink` | focus accent 3px halka · filled mono · error `--danger` + `!` · disabled %40 |
| Kart / iş kartı | — | 16px | `--radius-lg` | başlık 20px Inter 600 | `--surface` + 2px `--ink`, `--shadow-hard` | seçili: sol 6px accent şerit · sürükleniyor: ofset 8px |
| Chip / badge | 24px | 0 8px | `--radius` | 11px/700 mono | `--surface-2` + 1px `--ink` | hazırlanıyor · yolda (accent) · gecikti (danger) · teslim (ok) |
| Nav (üst bar) | 56px | 0 24px | 0 | 11px mono büyük harf | `--bg`, alt 2px `--ink` | aktif: 4px accent alt şerit · sağda canlı sayaç |
| Tablo satırı | 40px | 6px 12px | 0 | 13px mono tabular | zemin yok, alt 1px `--line` | hover `--surface-2` · seçili accent sol şerit 6px |
| Modal | — | 20px | `--radius-lg` | başlık 22px Archivo Black | 2px `--ink` + `--shadow-hard` | alt eylem çubuğu 2px üst çizgi, `esc` |
| Toast | 44px | 10px 14px | `--radius` | 12px mono | `--surface` + sol 6px durum şeridi | 3.5sn · hover'da durur · üst üste 3 |
| Grafik | — | — | 0 | eksen 11px mono | çubuk: `--data-1…4`, taban 2px `--ink` | çubuk aralığı 2px, ızgara 1px `--line` |

- Odak halkası: `outline: 3px solid var(--ink); outline-offset: 2px` — accent dolgulu öğede `outline: 3px solid var(--accent)`.
- Dokunma hedefi: 44×44px zorunlu (eldiven senaryosu); chip ve ikon butonlarda padding ile büyütülür.
- Barkod alanı: 44px yükseklik, sağda 24px kamera ikonu, yapıştırma ve tarama aynı alanda.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 24px ızgara, kare köşe; ok, sandık, çekmece, barkod temaları |
| Fotoğraf | depo içi geniş açı, raf yüksekliği görünür, nötr doygunluk, max %40 alan |
| İllüstrasyon | yalnız rota/depo planı diyagramı: dik açılı çizgi, raf blokları, 2px kontur |
| Doku | yok (`--grain: 0`); çapraz şerit yalnız ayırıcı bandında |
| Logo alanı | Archivo Black büyük harf sözcük logosu, 1px `--ink` çerçeveli etiket; sol üst 24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8/4 hero: Archivo Black başlık + sağda canlı sevkiyat rayı | `shots/01-landing.png` |
| Dashboard | çok yüksek | 4 KPI + iş kuyruğu tablosu + raf doluluk çubukları | `shots/02-dashboard.png` |
| Form | orta | tek sütun, barkod alanı, 44px hedefler | — |
| Liste / tablo | çok yüksek | 40px satır, sıra kutusu, durum chip'i, toplu işlem çubuğu | — |
| Boş durum | orta | "bekleyen iş yok" + sayaç sıfır + tarama başlat | — |
| Onboarding | yüksek | 3 adım: depo seç → raf haritası → ilk sayım | — |
| Pricing | orta | karşılaştırma tablosu, öne çıkan plan accent şeritli | — |
| Giriş / ödeme | düşük | tek kart, 44px alanlar, hata durumu net | — |
| Modal | orta | iş detayı: ürün, raf, miktar, son hareket | — |
| Bildirim | orta | 44px toast + sol durum şeridi, 3.5sn | — |
| Hata | düşük | kırmızı çerçeve + neden + tekrar dene | — |
| Profil / ayar | orta | anahtar/değer listesi, 40px satır, depo seçici | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart/satır) | 300ms | `cubic-bezier(.34,1.56,.64,1)` | `opacity` + `translateY(18px)`, 20ms arayla |
| Scroll reveal | 500ms, `top 78%` | aynı | `translateY(40px)`, `once: false` (yukarı kaydırınca tekrar) |
| Pin / scrub | 0.65 scrub, +80% mesafe | doğrusal | raf yüksekliği hissi: 3 raf katmanı sabitlenir |
| Basma | 110ms | aynı | ofset gölge 4px → 2px → 0 |
| Hover (görsel) | 110ms | aynı | `scale(1.045)` |
| Sayaç | 900ms | `steps(6, end)` | rakam atlaması (yalnız KPI sayacı) |

- Ölçülen imza: enter **0.30s · cubic-bezier(.34,1.56,.64,1) · 18px · stagger 0.02**; scroll **top 78% · 0.5s · 40px · once:false**; pin **açık · scrub 0.65 · +80%**; hover **110ms · 1.045**.
- Geri taşan varış (back-out) konveyörün duruşu gibi: hızlı gelir, 1–2px taşar, oturur. 0.3s'ten uzun sürmez.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub kapalı, sayaç anında son değeri gösterir.
- Bu stile yasak hareket: sürekli kayan bant, sonsuz nabız, parallax, çok katmanlı blur zinciri.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f3f1ec` | `#14130f` |
| `--bg-2` | `#e7e4dc` | `#1c1a14` |
| `--surface` | `#fcfbf8` | `#211f18` |
| `--surface-2` | `#f0ede5` | `#2a271d` |
| `--ink` | `#17150f` | `#f2efe4` |
| `--ink-soft` | `#56523f` | `#ada695` |
| `--accent` | `#f2b705` | `#ffc728` |
| `--accent-ink` | `#1a1608` | `#1a1608` |

- Ölçülen koyu kontrastlar: `ink/bg` **16.15:1** · `ink-soft/bg` **7.67:1** · `accent-ink/accent` **11.57:1** · `ink-faint/bg` **4.17:1**.
- Koyu modda değişen başka ne var: sert ofset gölge siyah yerine `--ink` üstünde koyu tona döner (gölge rengi `rgba(0,0,0,.55)`), çizgi opaklığı %22 → %16, sarı bir ton açılır.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="warehouse-flow"]` olarak durur.

## Zorunlu kurallar
- Her satır: ürün adı + konum (raf/bin) + miktar + durum. Eksik satır yasak.
- Durum dörtlüsü hem renk hem metinle: `hazırlanıyor` · `yolda` · `gecikti` · `teslim`.
- Sert ofset gölge yalnız taşınabilir öğede (buton, kart, chip, modal); panelde gölge yok.
- Sarı asla metin rengi değil; accent dolgu üstünde `--accent-ink`.
- Dokunma hedefi 44px, tablo satırı 40px, kod metni mono tabular.
- Her liste ekranında barkod alanı + bekleyen iş sayacı.

## Yasaklar
- 8px üstü radius, hap buton (999px), yumuşak gölge.
- Cam/blur, gradient zemin, grain.
- Serif/el yazısı display, italik, sentetik kalın Archivo Black.
- Büyük harf gövde metni; 12ch altı başlık ölçüsü.
- Sürekli kayan konveyör, sonsuz nabız, parallax.
- Sarı üzerine beyaz metin; sarı 1px çizgi.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.96:1 (`ink-soft/bg`).
- `--ink-faint` 3.76:1 — yalnız ikincil kod sütunu ve dekoratif ayırıcı; etkileşimli metin değil.
- Sarı accent bg'ye 1.6:1: **metin olarak kullanılamaz**; yalnız dolgu. Accent dolgu üstünde `--accent-ink` ile 9.94:1.
- Durum yalnız renkle anlatılmaz: 6px şerit + büyük harf etiket + chip.
- Odak görünürlüğü: açık zeminde 3px `--ink` halka (16.17:1); accent dolgulu butonda 3px accent halka + 2px offset.
- 390px'te tablo kart yığınına döner; hiçbir hücre yatay kaydırma gerektirmez.
- `prefers-reduced-motion` açıkken giriş, scrub ve sayaç durur.

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
| "Ucuz afiş" hissi | her öğede 4px ofset | ofset yalnız taşınabilir öğede |
| Sarı okunmuyor | sarı metin kullanılmış | metin `--ink`/`--accent-ink`, sarı sadece dolgu |
| Ekran gürültülü | 3+ doygun renk | tek sarı + durum üçlüsü |
| Satırlar karışıyor | 32px altı satır | 40px satır + 1px ayırıcı |
| Sahada dokunamıyor | 36px buton | 44px hedef + eldiven payı |
| Başlık taşıyor | 18ch üstü metin | başlığı kısalt, mobilde 32px |
| Koyu modda ofset kayboluyor | siyah gölge siyah zeminde | koyu blokta gölge rengi `rgba(0,0,0,.55)` + 1px açık çizgi |

## Komşu stiller

- **Uyumlu:** `utility` — aynı işlevsel netlik; pazarlama/dokümantasyon bölümlerinde sade eş.
- **Uyumlu:** `bento-grid` — dashboard'da modül yığını olarak uyumlu, ofset gölge kapatılır.
- **Uyumlu:** `terminal-ui` — arka plan işleri/log ekranları için teknik tamamlayıcı.
- **Yasak:** `luxury-typography` — ince serif ve geniş harf aralığı depo hızıyla çelişir.
- **Yasak:** `wabi-sabi` — organik eğrilik ve düşük kontrast saha okunurluğunu bozar.
- **Yasak:** `art-deco` — simetri ve altın çizgi, 2px sert çerçeve diliyle çakışır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.gs1.org/standards/barcodes-epcrfid-id-keys/gs1-general-specifications | SKU/SSCC etiket dili ve kod uzunluğu |
| https://www.sap.com/products/scm/extended-warehouse-management.html | görev/raf/dalga kavramları ve durum modeli |
| https://www.dhl.com/global-en/home/insights-and-innovation.html | sevkiyat durumu ve operasyon metrikleri dili |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 44px dokunma hedefi ölçütü |
| https://www.iso.org/standard/77520.html | ISO 7000 grafik sembolleri (depo/taşıma ikonları) |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Warehouse Flow (styles/62-warehouse-flow/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="warehouse-flow"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black 400, tek ağırlık) yalnız H1/H2 ve modal başlığında; --font-body (Inter 400/600) gövde;
  --font-mono (JetBrains Mono) SKU/raf/sipariş kodları ve tablo sayıları (tabular).
  H1 56px/0.96 -0.02em max 18ch; gövde 15px/1.55; etiket 11px mono +0.12em büyük harf.
Yüzey: panel = 1px var(--line) gölgesiz; taşınabilir öğe (buton/kart/chip/modal) = 2px var(--ink) + var(--shadow-hard) 4px ofset.
  radius --radius 2px, --radius-lg 8px. Derinlik yalnız ofsetten; blur/cam yok.
Renk: tek doygun renk var(--accent) sarı, YALNIZ dolgu; dolgu üstü metin var(--accent-ink).
  Durumlar: hazırlanıyor / yolda / gecikti / teslim — renk + büyük harf etiket + 6px şerit.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; 44px dokunma hedefi, 40px tablo satırı.
Hareket: enter 0.30s cubic-bezier(.34,1.56,.64,1) 18px stagger 0.02 · scroll top 78% 0.5s 40px once:false ·
  pin açık scrub 0.65 +80% · hover 110ms scale 1.045; prefers-reduced-motion zorunlu.
Yasak: hap buton, yumuşak gölge, cam, sarı metin, sürekli kayan bant, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Taşınabilir öğelerde 4px sert ofset var; panellerde gölge yok.
- [ ] Sarı hiçbir yerde metin rengi değil.
- [ ] Durum dörtlüsü hem renk hem etiketle görünüyor.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Dokunma hedefi ≥ 44px, tablo satırı 40px.
- [ ] 390px'te taşma yok (tablo karta dönüşüyor).
- [ ] `prefers-reduced-motion` açıkken hareket ve sayaç duruyor.

## Token

```css
[data-style="warehouse-flow"] {
  --bg: #f3f1ec; --bg-2: #e7e4dc;
  --surface: #fcfbf8; --surface-2: #f0ede5;
  --ink: #17150f; --ink-soft: #56523f; --ink-faint: #807b66;
  --accent: #f2b705; --accent-ink: #1a1608;
  --line: rgba(23,21,15,.22);
  --radius: 2px; --radius-lg: 8px;
  --shadow: 0 1px 0 rgba(23,21,15,.10); --shadow-hard: 4px 4px 0 rgba(23,21,15,.88);
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.02em; --blur: 0px; --grain: 0;
  --danger: #a5261c; --danger-ink: #fdf3f1;
  --ok: #1f6b33; --warn: #7a5200;
}
```

Koyu mod bloğu `styles/62-warehouse-flow/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="warehouse-flow"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
