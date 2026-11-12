# 91 · Product Catalog

> **Bir cümleyle:** Basılı ticari katalog sayfası: kod–ad–ölçü–fiyat sütunları, 1px hairline cetveller ve gölgesiz kare ürün kadrajları.

| | |
|---|---|
| **Hissiyat** | düzenli, ticari, ölçülü, "basılmış" |
| **En iyi** | ürün kataloğu / B2B fiyat listesi, parça ve yedek malzeme araması, mobilya–aydınlatma mağazası, toptan sipariş ekranı |
| **Kaçın** | kampanya vitrini (tek ürün kahramanlığı), oyun/etkinlik sayfası, duygusal marka hikâyesi, moda lookbook'u |
| **Zorluk** | düşük–orta (disiplin kolay, karakter zor) · **Erişilebilirlik** | iyi (15.61:1 gövde, 6.54:1 accent üstü) |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="product-catalog"]` |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Product Catalog, kâğıt kataloğun okunma sırasını ekrana taşır: **kod → ad → ölçü → fiyat**. Ekranın işi ikna değil **bulma ve karşılaştırma**dır; bu yüzden tipografi sakin (display 44px, gövde 15.5px), renk tek (koyu çam yeşili `#16624f`), süs sıfırdır. Karakter üç ölçülebilir karardan gelir: (1) her satırda mono **kod** sütunu, (2) serif **ad** sütunu, (3) sağa dayalı mono **fiyat**; aralarında yalnız 1px `--line` cetveller.

Kazandığı şey: **karşılaştırılabilirlik**. 40 satırlık bir listede göz aynı hizada üç kez zıplar (kod, ad, fiyat), hiçbir kart "öne çıkmaya" çalışmaz. Feda ettiği şey: **vitrin etkisi** — tek ürünü büyütüp satmak için bu stil zayıftır; kampanya sayfası gerekiyorsa hero görseli başka stilden ödünç alınmalıdır (ve o zaman bu stilin hairline disiplini bozulmamalı).

### Ne değildir
- **Editorial Design (03) değildir.** Editorial serif display + drop cap + kolon ritmiyle **anlatı** kurar; burada display sans (Space Grotesk 600), drop cap yok, ölçü 58ch ve hiyerarşi tablo sütunlarından gelir.
- **Swiss Design (02) değildir.** Swiss 12 kolonu tipografiyle doldurur, accent kırmızıdır (`#e4002b`) ve 0 radius kullanır; burada accent **çam yeşili**, radius 2/4px ve ekranın yarısı tablo satırıdır.
- **Utility (44) değildir.** Utility hairline'ı isimli metin stilleriyle birleştirir ve Poppins kullanır; burada gövde **serif** (Lora), mono kod sütunu ve swatch kareleri karakterin kendisidir.
- **Bento Grid (05) değildir.** Bento değişken boyutlu kutular ve 24px gutter kullanır; burada ızgara simetrik (2/3/4/6 sütun), gutter 20px ve kutular gölgesiz.
- **"Sadece ürün kartı ızgarası" değildir.** Kod sütunu, tabular fiyat ve katalog harfi rozeti olmadan bu stil sıradan bir e-ticaret şablonudur.

### Nereden gelir
Ticari katalog 18. yy'dan beri aynı işi yapar: bir ürünü **ölçülebilir alanlara** bölmek (stok kodu, ad, ölçü, fiyat). Basılı kataloglarda sütun başlığı bir kez yazılır, sayfa boyunca hiza korunur; dijitalde bu disiplin kayboldu çünkü kartlar "beğen" odaklı büyüdü. Product Catalog, ölçü ve fiyatı geri merkeze alır: her satır aynı dört alanı taşır.

Klişeye düşmemesi için korunması gereken detay: **hairline cetveller ve mono kod sütunu**. Kartlara gölge eklemek, fiyatı ortalamak veya fotoğrafı büyütmek stili "katalog"dan "vitrin"e kaydırır.

### 3 saniyede tanıma testi
1. Her satırda **mono kod** (ör. `MK-2410`) ve sağa dayalı **mono fiyat** var mı?
2. Ürün adı **serif** mi (Lora), başlıklar **sans** mı (Space Grotesk)?
3. Kartlarda **gölge yok**, ayrım 1px `--line` cetvel mi; radius ≤ 4px mi?
4. Bir yerde **katalog harfi** (A/B/C) mono accent rozet olarak duruyor mu; accent ekranın ≤ %8'i mi?
5. Fotoğraflar **kare kadraj, tek nesne, gölgesiz** mi; sayılar tabular hizalı mı?

## Görsel imza
1. **Dört sütun kuralı:** kod (mono, 88px sabit genişlik), ad (serif, esnek), ölçü (mono, 96px), fiyat (mono, 72px, sağa dayalı). Sütun genişlikleri breakpoint'te değişse de **hiza korunur**.
2. **Hairline cetvel:** 1px `--line`; yalnız satır arası, sütun başlığı altı ve bölüm ayırıcı. Çift çizgi yok.
3. **Katalog harfi rozeti:** 26×26px dolu accent kare, mono 13px `A/B/C` (mobilde 11px), landing'de sol üstte tek adet.
4. **Swatch kareleri:** 40×40px, radius 1px, `inset 0 0 0 1px var(--line)`; 6'lı satır hâlinde, hover'da 1.012 ölçek.
5. **Kare ürün kadrajı:** 1:1 oran, açık gri fon, tek nesne, gölge ve yansıma yok.
6. **Tabular sayı:** `font-variant-numeric: tabular-nums`; ölçü (`420 × 90 × 35 mm`) ve fiyat aynı karakter genişliğinde.
7. **Sessiz bölüm başlığı:** 44px display, altında 1px cetvel; dev başlık ve tam ekran hero yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6f4ef` | Sayfa zemini (katalog kâğıdı) | Kart içi |
| `--bg-2` | `#eeeae0` | Filtre şeridi, alt bilgi | Geniş bölüm dolgusu |
| `--surface` | `#fffdf8` | Kart, tablo satırı, form alanı | Sayfa zemini |
| `--surface-2` | `#e9e4d8` | Sütun başlığı, hover satır, chip | Metin arkası |
| `--ink` | `#1a1c19` | Başlık, gövde, ürün adı | Accent zemin üstü |
| `--ink-soft` | `#4b5148` | Lede, ölçü metni, açıklama | Küçük etiket |
| `--ink-faint` | `#767c72` | Sütun başlığı, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#16624f` | Katalog harfi, birincil buton, aktif sekme, fiyat vurgusu | Geniş zemin, gövde metni |
| `--accent-ink` | `#f7f3e8` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(26,28,25,.16)` | Tüm cetveller, kart kenarı, swatch iç kenarı | Metin |

- Ölçülen kontrast: `ink / bg` = **15.61:1** · `ink-soft / bg` = **7.43:1** · `accent-ink / accent` = **6.54:1** · `ink-faint / bg` = **3.90:1** (yalnız dekoratif).
- Tek vurgu kuralı: çam yeşili accent ekranın **≤ %8**'i; stok durumu asla renkle değil metinle (`Stokta 12`, `Tükendi`).
- Yasak kombinasyon: accent zemin + `--ink-soft` metin; `--ink-faint` + `--surface-2` (3.2:1); ikinci accent (turuncu "indirim" rozeti).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 44px (mobil 30px) | 600 | 1.04 | -0.01em |
| H2 | Space Grotesk | 26px | 600 | 1.12 | -0.005em |
| H3 | Space Grotesk | 18px | 600 | 1.28 | 0 |
| Gövde / ürün adı | Lora | 15.5px | 400 | 1.66 | 0 |
| Lede | Lora | 15.5px | 400 | 1.66 | 0 (58ch) |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.4 | 0.12em |
| Kod / ölçü / fiyat | IBM Plex Mono | 13px | 400 | 1.3 | 0.02em |

- Ölçek oranı ≈ 1.45 (15.5 → 26 → 44); kullanılan basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 3.6vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: **58ch**; ürün açıklaması 44ch.
- Ağırlık kuralı: yalnız 400/600. 700+ ve italik display yok; serif gövdede italic yalnız ürün adı vurgusunda kullanılmaz.
- Sayılar her yerde `tabular-nums`; orantılı sayı kullanan tablo hizasız görünür ve katalog hissi kaybolur.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (ürün ızgarası 2 / 3 / 4 / 6 sütun) |
| Gutter | 20px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında 2 sütun, 390'da 1 sütun; kod ve fiyat aynı satırda kalır |

- Asimetri kuralı: ızgara simetrik; tek asimetri fiyat sütununun sağa dayanması. Ekran başına en fazla 1 katalog harfi rozeti.
- Bölüm ritmi: art arda en fazla **6** satır aynı hizada; yedincide bölüm cetveli ve 24px boşluk.
- Bölüm dikey boşluk 72px (mobil 44px); kart padding 20px; ürün kartları arası 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, filtre şeridi |
| Kart / satır | `--surface` + 1px `--line` | `none` | Ürün kartı, tablo satırı, KPI |
| Yüzen katman | `--surface` + `--shadow` | `0 1px 2px rgba(26,28,25,.08)` | Dropdown (ölçü filtresi), modal |

- Kenarlık formülü: `1px solid var(--line)`; sütun başlığının altı `border-bottom: 1px`; çift çizgi yok.
- Derinlik nereden gelir: **cetvel ve hiza**. Gölge yok; kâğıt hissi `--grain: .02` ile.
- Radius: `--radius` 2px (kart, input) · `--radius-lg` 4px (yalnız modal). Buton ve chip 1px (baskı keskinliği).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 11px 16px | 1px | 11px/400 mono, .1em | `--accent` / `--accent-ink`, gölge yok | hover %90 karışım 170ms · active translateY(1px) · focus 2px accent + 1px offset · disabled opacity .45 kesikli · loading mono 3 nokta |
| Buton (ikincil) | 40px | 11px 16px | 1px | 11px/400 mono | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı halka |
| Input | 40px | 0 10px | 1px | 15.5px/400 Lora | `--surface` + 1px `--line` | focus 2px accent + 1px offset · filled aynı · error `--danger` + mono açıklama · disabled opacity .45 |
| Kart (ürün) | — | 20px | 2px | ad Lora 15.5px, kod mono 11px | `--surface` + 1px `--line`, gölge yok | hover: kenar `--ink-faint`; fotoğraf 1.012 |
| Swatch | 40×40px | — | 1px | — | iç kenar 1px `--line` | seçili: 2px accent iç kenar |
| Chip / badge | 22px | 3px 6px | 1px | 10px/400 mono, .1em | şeffaf + 1px `--line` | accent varyantı dolu (katalog harfi) |
| Nav | 56px | 0 40px | 0 | marka Space Grotesk 17px + mono 11px | `--bg` + alt 1px `--line` | aktif: 2px accent alt çizgi; pasif `--ink-soft` |
| Tablo satırı | 36px | 8px 10px | 0 | kod/ölçü/fiyat mono 13px, ad Lora | alt 1px `--line` | hover `--surface-2` · seçili: sol 2px accent |
| Modal / sheet | — | 24px | 4px | H2 Space Grotesk 26px | `--surface` + 1px `--line` + `--shadow` | üstte mono kod başlığı, kapat 40×40px |
| Toast | 40px | 10px 14px | 1px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 6px accent kare, 3000ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink-soft`, `--ink-faint` | en fazla 3 seri; çubuk 1px çerçeveli |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px`; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -2px.
- Dokunma hedefi: en az 40×40px (bu stilde 40px taban; mobilde 44px'e çıkar). Swatch 40px olduğu için sarmalayıcı gerekmez.
- Fiyat ve ölçü hücreleri **sağa dayalı**; satır hover'ında yalnız zemin değişir, hiza kaymaz.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, kare uç, 20px ızgara; dolu ikon yalnız seçili durumda |
| Fotoğraf | Tek nesne, kare kadraj, açık gri fon (#e9e4d8 tonu), gölge ve yansıma yok |
| İllüstrasyon | Yok; teknik bilgi tablo ve ölçü çizgisiyle verilir |
| Doku | `--grain: .02` kâğıt; görünür gürültü değil |
| Logo alanı | Display kelime markası (Space Grotesk 600), 20px güvenli boşluk; katalog harfi ayrı rozet |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 44px başlık + alt cetvel; hero görseli yerine 4 ürün kartı | `shots/01-landing.png` |
| Dashboard | orta | KPI + son eklenen ürün tablosu; mono sayılar | `shots/02-dashboard.png` |
| Form | düşük | 40px alanlar, 1px radius, açıklama mono | — |
| Liste / tablo | yüksek | 36px satır, dört sütun, zebra yok | — |
| Boş durum | düşük | Mono kod + tek cümle + "filtreyi temizle" | — |
| Onboarding | orta | 3 adım: kategori → ölçü → fiyat aralığı | — |
| Pricing | orta | 3 sütun fiyat tablosu; accent yalnız önerilen sütun başlığı | — |
| Giriş / ödeme | çok düşük | Süs sıfır; alan + tek accent buton | — |
| Modal | orta | 4px radius, üstte mono kod başlığı | — |
| Bildirim / toast | orta | Koyu zemin + 6px accent kare, 3000ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama satırı | — |
| Profil / ayar | orta | İki kolon: etiket (mono) + değer (serif), 1px cetveller | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — katalog föyü — sütun başlığı, hairline satır cetveli, kare swatch, "01—24" altbilgisi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 100ms | `ease-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 170ms | `ease-out` | `opacity` |
| Giriş (enter) | **460ms** | `cubic-bezier(.18,.86,.24,1)` | `opacity` + `translateY(8px)`, **stagger 35ms** |
| Kaydırma (scroll) | **580ms** | `cubic-bezier(.18,.86,.24,1)` | trigger **`top 87%`**, offsetY **10px**, `once: true` |
| Hover | **170ms** | `ease-out` | ürün görseli **1.012** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 240ms | `ease-out` | katalog harfi rozeti 26 → 30px, tek atım |

- İmza ölçüsü: enter **0.46s / 8px / stagger 0.035** · scroll **0.58s / `top 87%` / 10px** · hover **170ms / 1.012** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; ürün ızgarası ve swatch'lar statik.
- Bu stile yasak hareket: parallax, sürekli döngü, spring/bounce, görsel üzerinde zoom-in (kadraj kırpılmaz).

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6f4ef` | `#121512` |
| `--bg-2` | `#eeeae0` | `#171b17` |
| `--surface` | `#fffdf8` | `#1b201b` |
| `--surface-2` | `#e9e4d8` | `#232a23` |
| `--ink` | `#1a1c19` | `#e8e6dd` |
| `--ink-soft` | `#4b5148` | `#b0b5a9` |
| `--ink-faint` | `#767c72` | `#868c80` |
| `--accent` | `#16624f` | `#5fb39c` |
| `--accent-ink` | `#f7f3e8` | `#0d1412` |
| `--line` | `rgba(26,28,25,.16)` | `rgba(232,230,221,.16)` |

- Koyu modda accent **açılır** (`#5fb39c`) çünkü koyu çam yeşili koyu zeminde harç gibi kaybolur; `--accent-ink` koyuya döner.
- Ürün fotoğrafının fonu koyu temada `--surface-2` olur (görsel filtresi değil, kadraj fonu); gölge yine yok.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **14.71:1** · `ink-soft/bg` = **8.78:1** · `accent-ink/accent` = **7.47:1** · `ink-faint/bg` = **5.32:1**.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **-:1** açık / **-:1** koyu · `--warn / bg` = **-:1** / **-:1** · `--ok / surface` = -:1 / -:1 (warn) · devre dışı buton metni = **6.81:1** / **7.74:1** · ghost buton kenarı = **3.76:1** / **5.16:1** (eşik 3:1).

## Zorunlu kurallar

1. **Dört sütun:** her ürün satırı kod (mono) · ad (serif) · ölçü (mono) · fiyat (mono, sağa dayalı) taşır; alan eksikse "—" yazılır, sütun boş bırakılmaz.
2. **Hairline cetvel:** 1px `--line` yalnız satır arası, sütun başlığı ve bölüm ayırıcı; çift çizgi ve 2px+ cetvel yok.
3. **Accent ≤ %8:** çam yeşili yalnız katalog harfi, birincil buton, aktif sekme ve fiyat vurgusunda.
4. **Tabular sayı:** ölçü ve fiyat `tabular-nums`; hiza her satırda korunur.
5. **Kare kadraj:** ürün fotoğrafı 1:1, tek nesne, gölgesiz; kadraj içinde zoom animasyonu yok.
6. **Ritim:** bölüm 72/44px, kart padding 20px, ürün arası 20px — üçü birlikte katalog yoğunluğunu kurar.

## Yasaklar

- Gradient, blur, cam yüzey, ürün fotoğrafında renk filtresi.
- İkinci accent (indirim turuncusu, "yeni" kırmızısı); durum bilgisi metinle verilir.
- 4px üstü radius, pill buton, yuvarlak avatar.
- 70px üstü dev başlık, tam ekran hero görseli, tam ekran kampanya bloğu.
- Orantısız sayı, ortalanmış fiyat, ortalanmış tablo başlığı.
- Kartlarda gölge ile derinlik; zemin ile kart arasında gradient ton farkı.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.90:1** (açık tema). `--ink-faint` yalnız sütun başlığı ve dekoratif etiket; etkileşimli metin, form etiketi veya bağlantı olamaz — sütun başlıkları 10.5px olmasına rağmen `--ink-faint` değil `--ink-soft` (7.43:1) kullanır.
- Dokunma hedefi: buton 40×40px, tablo satırı 36px yüksekliğinde ama satır içi eylem alanı 40px'e tamamlanır; mobilde 44px taban.
- `--ink-faint` üzerine metin yazılmaz; fiyat vurgusu accent zemin + `--accent-ink` (6.54:1) ile yapılır.
- Hareket/parlama hassasiyeti: düşük — yalnız opaklık ve 8–10px kayma; parlak yüzey yok (`--blur: 0`).
- Şeffaf yüzey yok, `@supports` fallback gerekmez; `color-mix` desteklenmezse buton hover'ı `--surface-2` fallback'ine düşer.
- Odak görünürlüğü: accent zeminli butonda 2px halka kaybolacağı için `outline-color: var(--accent-ink)` + `offset: -2px`.

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
| "Sıradan e-ticaret" görünüyor | kartlara gölge + büyük görsel eklenmiş | Gölgeyi kaldır, görseli 1:1 kareye al, kod sütununu geri getir |
| Tablo sütunları kayıyor | orantılı sayı ve esnek genişlik | `tabular-nums` + sabit sütun genişliği (88/96/72px) |
| Fiyat gözden kaçıyor | fiyat `--ink-soft` veya sola dayalı | Fiyatı sağa daya, `--ink` + mono 13px |
| Renkli rozetler çoğalmış | stok/hata/indirim renklenmiş | Durumu metinle yaz; accent yalnız katalog harfi ve birincil eylem |
| Başlık ürünün önüne geçiyor | 60px+ display | 44px'e indir, altına 1px cetvel |
| Koyu modda accent kayboluyor | koyu çam yeşili kullanılmış | `--accent` koyu temada `#5fb39c` |

## Komşu stiller

- **Uyumlu:** `editorial-design` — ürün hikâyesi/uzun açıklama sayfasını editorial üstlenir; katalog ızgarası bozulmaz.
- **Uyumlu:** `swiss-design` — ızgara ve hiza dili ortak; swiss yalnız tipografi katmanında kullanılır.
- **Uyumlu:** `utility` — form ve ayar ekranlarında hairline disiplini ortak; utility'nin isimli stilleri kart içinde kalır.
- **Yasak:** `maximalism` — katman ve renk çokluğu katalogun tek accent kuralını yok eder.
- **Yasak:** `dopamine-ui` — doygun bloklar ve mikro ödül animasyonu "bul ve karşılaştır" işini gürültüye çevirir.
- **Yasak:** `glassmorphism` — blur/şeffaflık kâğıt cetvel dilini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Product_catalog | kod/isim/fiyat sütun düzeni ve katalog harfi geleneği |
| https://www.vam.ac.uk/ | basılı ticari katalog sayfa oranları, swatch kullanımı |
| https://store.moma.org/ | ürün kartı hiyerarşisi, ölçü/fiyat yerleşimi |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 40px buton ve satır içi eylem hedefi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Product Catalog (styles/91-product-catalog/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="product-catalog"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Space Grotesk 600 (H1 44px / -0.01em, mobil 30px), govde + urun adi Lora 400 15.5/1.66 (<= 58ch),
  kod/olcu/fiyat IBM Plex Mono 13px tabular-nums, etiket mono 11px .12em.
Yuzey: golge YOK; kart 1px var(--line) + radius 2px (modal 4px). Derinlik yalniz hairline cetvel.
Yerlesim: 12 kolon, gutter 20px, container 1180px. Her urun satiri DORT alan: kod (mono 88px) -
  ad (Lora, esnek) - olcu (mono 96px) - fiyat (mono 72px, saga dayali). Zebra yok.
Renk: kagit #f6f4ef + murekkep #1a1c19 + tek accent cam yesili #16624f (ekranin <= %8'i).
Imza: katalog harfi rozeti (26px dolu accent kare, mono A/B/C); 1px cetveller; 40x40px swatch kareleri;
  1:1 golgesiz urun kadraji; sag kenarda hero'da 1px dikey cetvel.
Hareket: enter 460ms cubic-bezier(.18,.86,.24,1) 8px stagger 35ms; scroll top 87% / 580ms / 10px / once;
  hover 170ms imageScale 1.012; pin kapali. prefers-reduced-motion zorunlu.
Yasak: gradient/blur/cam, ikinci accent, 4px ustu radius, 70px ustu baslik, tam ekran hero,
  orantisiz sayi, ortalanmis fiyat, kart golgesi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (dört sütun + hairline cetvel + katalog harfi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.61:1), accent üstü ≥ 4.5:1 (6.54:1).
- [ ] Odak halkası görünür (2px + 1px offset), dokunma hedefi ≥ 40px (mobil 44px).
- [ ] 390px genişlikte taşma yok; kod ve fiyat aynı satırda kalıyor.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="product-catalog"] {
  --bg: #f6f4ef; --bg-2: #eeeae0;
  --surface: #fffdf8; --surface-2: #e9e4d8;
  --ink: #1a1c19; --ink-soft: #4b5148; --ink-faint: #767c72;
  --accent: #16624f; --accent-ink: #f7f3e8;
  --line: rgba(26,28,25,.16);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 2px rgba(26,28,25,.08); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Lora", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0.02;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="product-catalog"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
