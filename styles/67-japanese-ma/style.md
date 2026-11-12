# 67 · Japanese Ma

> **Bir cümleyle:** Ölçülmüş boşluk: 12 kolonun 8'inde içerik, sağ 4 kolonda hiçbir şey ve mühür kırmızısından tek bir kare.

| | |
|---|---|
| **Hissiyat** | sessiz, kesin, ferah, neredeyse törensel |
| **En iyi** | mimari/zanaat stüdyosu, galeri–müze kataloğu, editoryal uzun okuma, premium donanım tanıtımı |
| **Kaçın** | yoğun operasyon paneli, indirim kampanyası, çocuk uygulaması, çok serili grafik ekranı |
| **Zorluk** | yüksek (boşluğu "boş bırakılmış" değil "ölçülmüş" göstermek) · **Erişilebilirlik** | iyi (16.32:1 gövde, 5.33:1 accent üstü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="japanese-ma"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Japanese Ma, ekranı **boşluğun kendisiyle** kurar. 12 kolonun yalnız 8'i doludur; sağdaki 4 kolon kasıtlı olarak boş kalır ve bu boşluk dekorasyon değil **ölçü**dür (masa üstünde bölüm arası 160px, mobilde 88px). Öğe sayısı azdır: bir display başlık (64px, Jost 400), tek bir yatay 1px çizgi, ve tek bir mühür kırmızısı (`#bf3320`) — o da ekranın %2'sini geçmez.

Kazandığı şey: **dikkat ekonomisi**. Ekranda yarışan tek bir öğe olduğu için kullanıcı ilk saniyede nereye bakacağını bilir; sayfa "hızlı" değil "kesin" hisseder. Feda ettiği şey: **bilgi yoğunluğu ve tarama hızı** — bu stilde 20 satırlık tablo, çoklu KPI veya karşılaştırma matrisi çalışmaz; o ekranlarda yalnız tipografi ve çizgi ödünç alınır (süs zaten yok).

### Ne değildir
- **Japandi (06) değildir.** Japandi sıcak bir **hibrit**: krem zemin (`#f4efe7`), serif display (Lora), adaçayı accent ve 10–14px radius. Burada zemin **nötr washi** (`#f6f5f1`), display **geometrik sans** (Jost), accent **mühür kırmızısı** ve radius **0/2px**; üstelik boşluk oranı zorunlu (8/12 kolon, 160px ritim).
- **Wabi-Sabi (07) değildir.** Wabi-sabi kasten eğik ve dokulu çalışır (`--grain: .07`, 0.5–1.5° dönüklük, asimetrik radius); burada hiza **kusursuz**, grain **.015**, radius **0/2px**.
- **Minimalism (01) değildir.** Minimalism gölgeyle (`0 1px 2px`) hacim kurar, 8/12px radius ve mavi accent kullanır; burada `--shadow: none`, radius 0, accent kırmızı ve boşluk katı bir orana bağlı.
- **Editorial Design (03) değildir.** Editorial serif başlık + drop cap + kolon ritmiyle **dolu** bir sayfa kurar; burada display sans, drop cap yok ve metin ölçüsü 56ch'e kısıtlı.
- **"Sadece çok boşluk" değildir.** Boşluk rastgele değil: 160/88px ritim, 12'de 8 kolon, 32px gutter — üçü birlikte stilin ölçüsüdür.

### Nereden gelir
`ma` (間), Japon estetiğinde "aralık/boşluk"un kendisinin biçim olmasıdır: çay evi nişi, byōbu paravan kompozisyonu ve sumi-e'nin boş kâğıdı aynı ilkeyi paylaşır — öğe azaltıldıkça kalan öğenin ağırlığı artar. Dijitalde 2010'lardan sonra "slow/quiet" markalar ve Japon mimarlık stüdyolarının siteleriyle yayıldı; nedeni ölçülebilir: az öğe = daha az bant genişliği, daha net odak, daha uzun okuma süresi.

Klişeye düşmemek için korunması gereken detay: **çizgi disiplini ve mühür oranı**. Boşluğu 2–3 bölüme sıkıştırmak, ikinci bir renk eklemek veya mühürü buton+rozet+grafik üçlüsüne çoğaltmak stili "bej minimalizm"e indirger.

### 3 saniyede tanıma testi
1. Sağ tarafta **boş bir kolon şeridi** var mı (içerik solda 8/12, sağda 4/12 boş)?
2. Ekranda **tek çizgi** mi var — bölüm başlığının üstünde 1px yatay çizgi, başka çerçeve yok mu?
3. Accent **mühür kırmızısı** ve **tek bir kare/etiket** mi (ekranın ≤ %2'si)?
4. Başlık **64px geometrik sans**, ağırlık 400 (kalın değil), tracking **-0.03em** mi?
5. Kartlar **gölgesiz ve radius 0–2px** mi; modal bile yalnız 1px çizgiyle mi ayrılıyor?

## Görsel imza
1. **8/12 kolon kuralı:** içerik solda 8 kolonda; sağdaki 4 kolon (12 kolonun %33'ü) hiçbir öğe almaz. Boşluk ekranın ~1/3'ü.
2. **Tek yatay çizgi:** 1px `--line`, bölüm başlığının üstünde, 28px padding-top; ekranda ikinci bir yatay çizgi yok.
3. **Mühür:** 26×26px düz accent kare (mobilde 20×20), radius 0, gölge yok; hero metninin sağında tek adet.
4. **Boşluk çizgisi:** hero'da 12. kolon sınırına denk gelen 1px dikey kural (%66.6 hizada), yalnız landing'de.
5. **Ölçü ritmi:** bölüm dikey 160px (mobil 88px), kart padding 28px, gutter 32px — her üçü boşluğun ölçüsüdür.
6. **Alt çizgi form dili:** input ve chip kutulu değil, yalnız 1px alt çizgi; odak 4px offset halkayla.
7. **Mono etiket:** 11px IBM Plex Mono, uppercase, .22em tracking — ekrandaki tek "küçük" ses.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6f5f1` | Sayfa zemini (nötr washi) | Kart içi |
| `--bg-2` | `#ecebe5` | Alt bilgi, ikincil şerit | Geniş bölüm zemini |
| `--surface` | `#ffffff` | Kart, panel, modal | Sayfa zemini |
| `--surface-2` | `#f1f0ea` | Seçili satır, ikincil buton hover | Dekoratif blok |
| `--ink` | `#16181a` | Başlık, gövde (sumi siyahı) | Accent zemin üstü |
| `--ink-soft` | `#4a4f52` | Lede, ikincil metin, nav | Büyük başlık |
| `--ink-faint` | `#7b8084` | Dekoratif etiket, ayırıcı | Etkileşimli metin |
| `--accent` | `#bf3320` | Mühür karesi, birincil buton, aktif işaret | Geniş zemin, gövde |
| `--accent-ink` | `#fdf7f2` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(22,24,26,.14)` | Tek yatay çizgi, kart kenarı, alt çizgiler | Metin |

- Ölçülen kontrast: `ink / bg` = **16.32:1** · `ink-soft / bg` = **7.60:1** · `accent-ink / accent` = **5.33:1** · `ink-faint / bg` = **3.66:1** (yalnız dekoratif).
- Tek vurgu kuralı: siyah + washi + mühür kırmızısı. Accent alanı **≤ %2** — bu stil için "%10" bile fazladır.
- Yasak kombinasyon: accent zemin + `--ink` metin; `--ink-faint` + `--bg-2` (3.4:1); ikinci renk (mavi/yeşil) hiçbir amaçla.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Jost | 64px (mobil 40px) | 400 | 1.02 | -0.03em |
| H2 | Jost | 26px | 400 | 1.2 | -0.02em |
| H3 | Jost | 17px | 400 | 1.35 | -0.01em |
| Gövde | Inter | 16px | 400 | 1.78 | 0 |
| Lede | Inter | 16px | 400 | 1.78 | 0 (38ch) |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.4 | 0.22em |

- Ölçek oranı ≈ 1.6 (16 → 26 → 64); kullanılan basamak sayısı **5** (11/16/17/26/64) — ara basamak yok.
- Ölçü önerisi: `h1 { font-size: clamp(40px, 5.6vw, 64px) }`.
- Gövde metni maksimum satır uzunluğu: **56ch**; lede 38ch — ölçü dar tutulur, boşluğa bırakılır.
- Ağırlık kuralı: yalnız 400 ve 500 (vurgu). 600/700/900 yok; display asla kalınlaşmaz, hiyerarşi puntodan gelir.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8, boş şerit 4) |
| Gutter | 32px |
| Container genişliği | 1120px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında boş şerit kapanır, ritim 88px'e iner |

- Asimetri kuralı: her ekran **asimetrik başlar** (8/4 bölünme); dashboard gibi veri ekranlarında bile sağ kenarda en az 32px boş şerit korunur.
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada; üçüncü blok 160px boşlukla ayrılır.
- Bölüm dikey boşluk 160px (mobil 88px); kart padding 28px; kart arası 32px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, alt bilgi |
| Kart | `--surface` + 1px `--line` | `none` | Panel, KPI, bileşen kartı |
| Yüzen katman | `--surface` + 1px `--line` | `none` | Modal, dropdown (gölge yerine perde `--bg` %92) |

- Kenarlık formülü: `1px solid var(--line)` — dikey kenar yok, yatay çizgi tek başına yeterlidir; kartta tam çerçeve serbest (1px).
- Derinlik nereden gelir: **hiçbir yerden**. Katman ayrımı çizgi + ton farkı + boşluk. Gölge stilin sözlüğünde yok.
- Radius: `--radius` 0px (buton, input, chip, mühür) · `--radius-lg` 2px (kart, modal, hero). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 14px 22px | 0px | 11px/400 mono, uppercase, .18em | `--accent` / `--accent-ink`, gölge yok | hover %92 karışım 320ms · active opacity .88 · focus 1px accent + 4px offset · disabled opacity .4 · loading 3 çizgi |
| Buton (ikincil) | 46px | 14px 22px | 0px | 11px/400 mono | şeffaf / `--ink`, 1px `--line` | hover kenar `--ink` · focus aynı halka |
| Input | 48px | 12px 0 | 0px | 16px/400 Inter | şeffaf, yalnız alt 1px `--line` | focus 1px accent + 4px offset + accent alt çizgi · filled `--ink` · error `--danger` alt çizgi + açıklama · disabled opacity .4 |
| Kart | — | 28px | 2px | H3 Jost 17px | `--surface` + 1px `--line`, gölge yok | hover: yalnız kenar `--ink-faint` |
| Chip / badge | 22px | 0 | 0px | 10.5px/400 mono, uppercase, .2em | şeffaf, alt 1px `--line` | accent varyantı yalnız etiket (alan ≤ %2) |
| Nav | 72px | 0 56px | 0 | 11px/400 mono, uppercase, .16em | `--bg` zemin + alt 1px `--line` | aktif: accent 1px alt çizgi + `--ink`; pasif `--ink-soft` |
| Tablo satırı | 56px | 16px 0 | 0 | 14px/400 Inter | alt 1px `--line` | hover `--surface-2` · seçili: sol 32px boşluk + accent 1px nokta |
| Modal / sheet | — | 40px | 2px | H2 Jost 26px | `--surface` + 1px çizgi, gölge yok | perde `--bg` %92, geçiş 320ms fade |
| Toast | 44px | 14px 0 | 0px | 13px/400 Inter | şeffaf zemin, üst 1px accent | 4000ms, kutu yok — yalnız çizgi + metin |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; yalnız yatay 1px %6 ızgara |

- Odak halkası: `outline: 1px solid var(--accent); outline-offset: 4px` — 1px + geniş offset stilin "çizgi" diline uyar; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -4px.
- Dokunma hedefi: en az 46×46px (nav öğeleri 72px yüksekliğin tamamını kullanır).
- Chip 22px görünür ama satır içi sarmalayıcı 44px dikey padding alır; chip tek başına dokunma hedefi olamaz.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, kare uç, 24px ızgara; 16px altına inilmez; dolu ikon yok |
| Fotoğraf | Tek nesne, sade fon, yumuşak yansıma; görsel alanı ekranın en fazla %40'ı, çerçevesiz |
| İllüstrasyon | Yok — boşluk ve çizgi onun yerini alır |
| Doku | `--grain: .015` washi; gözle seçilmez, yalnız büyük düz alanlarda hissedilir |
| Logo alanı | Uppercase metin logo, .16em tracking, çevresinde 32px güvenli boşluk; işaret yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8/4 bölünme, 64px başlık, mühür karesi, tek çizgi | `shots/01-landing.png` |
| Dashboard | düşük | KPI kartları gölgesiz 1px; metrik sayısı ≤ 4; sağda 32px boş şerit | `shots/02-dashboard.png` |
| Form | düşük | Alt çizgi alanlar, 48px yükseklik, 4px offset odak | — |
| Liste / tablo | düşük | 56px satır, dikey çizgi yok, sütun ayrımı boşlukla | — |
| Boş durum | orta | Tek satır metin + tek buton; illüstrasyon yerine 64px boşluk | — |
| Onboarding | yüksek | Adım başına tek cümle; ilerleme = 3 çizgi (1px) | — |
| Pricing | orta | 3 kart, radius 2px, öne çıkan kart yalnız accent 1px üst çizgi | — |
| Giriş / ödeme | çok düşük | Süs sıfır; alt çizgi alanlar + tek accent buton | — |
| Modal | orta | 40px padding, gölgesiz, perde düz `--bg` | — |
| Bildirim / toast | orta | Üst 1px accent çizgi + metin; kutu yok, 4000ms | — |
| Hata | düşük | `--danger` alt çizgi + 12px açıklama; ikon yok | — |
| Profil / ayar | orta | Bölüm başlıkları tek çizgiyle; alanlar 48px | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 180ms | `cubic-bezier(.25,.1,.25,1)` | `opacity: .88` (konum kaymaz) |
| Giriş (enter) | **1050ms** | `cubic-bezier(.25,.1,.25,1)` | `opacity` + `translateY(12px)`, stagger **140ms** |
| Kaydırma (scroll) | **1150ms** | `cubic-bezier(.25,.1,.25,1)` | trigger **`top 76%`**, offsetY **14px**, `once: true` |
| Hover | **520ms** | `ease-out` | görsel ölçek **1.006** (neredeyse fark edilmez) |
| Pin | **açık** | `scrub: 0.6` | mesafe **+85%**, hero görseli sabitlenir |
| Ödül / vurgu | 520ms | `cubic-bezier(.25,.1,.25,1)` | çizgi soldan sağa `scaleX` 0→1 |

- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub devre dışı kalır, hero statik kalır.
- Bu stile yasak hareket: bounce/spring, parallax, sürekli döngü, renk geçişi animasyonu (yalnız opaklık ve konum).
- İmza ölçüsü: giriş **1.05s / 12px / stagger .14**, kaydırma **1.15s / top 76% / 14px**, hover **520ms / 1.006**, pin **scrub .6 / +85%** — katalogda bu dörtlü tekrar etmez.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6f5f1` | `#0f1113` |
| `--bg-2` | `#ecebe5` | `#141719` |
| `--surface` | `#ffffff` | `#171a1d` |
| `--surface-2` | `#f1f0ea` | `#1e2225` |
| `--ink` | `#16181a` | `#ece9e2` |
| `--ink-soft` | `#4a4f52` | `#a8adaf` |
| `--ink-faint` | `#7b8084` | `#7d8286` |
| `--accent` | `#bf3320` | `#e4674f` |
| `--accent-ink` | `#fdf7f2` | `#12100f` |
| `--line` | `rgba(22,24,26,.14)` | `rgba(236,233,226,.15)` |

- Koyu modda değişen başka ne var: accent açılır (`#e4674f`) çünkü koyu kırmızı koyu zeminde kaybolur; `--accent-ink` koyuya döner. `--shadow` her iki temada `none`.
- Çizgi opaklığı iki temada eşit (.14/.15) — çizgi "görünmez eşik" olarak aynı ağırlıkta kalır.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **15.61:1** · `ink-soft/bg` = **8.34:1** · `accent-ink/accent` = **5.74:1** · `ink-faint/bg` = **4.87:1**.

## Zorunlu kurallar

1. **Boşluk baskın:** bölüm dikey 160px (mobil 88px); içerik 12 kolonun 8'inde, sağdaki 4 kolon boş.
2. **Tek çizgi:** 1px `--line` bölüm başlığını içerikten ayırır; ekranda ikinci yatay çizgi yok.
3. **Mühür oranı:** accent yalnız birincil buton, aktif işaret ve mühür karesi; ekranın ≤ %2'si.
4. **Gölge ve radius yok:** kart/modal/hero yalnız 1px çizgiyle; radius 0px, en fazla 2px.
5. **İki punto ucu:** 11px mono etiket + 64px display; ara basamak uydurulmaz.
6. **Form dili:** input kutulu değil — yalnız alt çizgi + 4px offset odak halkası.

## Yasaklar

- Gölge, blur, gradient, cam yüzey (`--shadow: none`, `--blur: 0`).
- İkinci accent rengi veya dekoratif renk lekesi.
- 2px üstü radius, dolgu ikon, illüstrasyon.
- 700+ ağırlık ve 18/22/30 gibi ara punto basamakları.
- Ortalanmış blok düzen; metin ekseni her zaman solda.
- Süs olarak eklenen çizgi, çerçeve veya desen.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.66:1** (açık tema). `--ink-faint` yalnız dekoratif; etkileşimli metin, form etiketi veya nav bağlantısı olamaz.
- Odak halkası 1px + 4px offset: çok ince olduğu için yalnız `--bg` ve `--surface` üstünde kullanılır; accent zeminli butonda `outline-color: var(--accent-ink)` + offset -4px ile içeri alınır (aksi halde halka görünmez).
- Hareket/parlama hassasiyeti: düşük — parlaklık değişimi yok, geçişler uzun ama küçük mesafeli (12–14px).
- Şeffaf yüzey yok (`--blur: 0`), `@supports` fallback gerekmez; modal perdesi düz renk olduğu için okunabilirlik garanti.
- Mühür karesi dekoratif: `aria-hidden="true"`, `alt=""`; bilgi taşımaz. Buton olarak kullanılırsa ≥46px'e büyütülür ve `aria-label` alır.
- Alt çizgi input'larda `border-bottom` 1px `--line`; odak halkası olmadan alan "kutusuz" görünür — focus stilini kaldırmak erişilebilirlik ihlalidir.

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
| Sayfa "boş kalmış" hissi veriyor | boşluk ölçüsüz: 160px yerine 64px, kolon bölünmesi yok | 8/4 kolon bölünmesi + 160/88px ritmi geri getir |
| Bej minimalizme benziyor | sıcak zemin + serif display eklenmiş | Zemini `#f6f5f1` nötre sabitle, display'i Jost 400'de tut |
| Kırmızı her yerde | accent buton + rozet + grafik + link | Accent'i mühür + birincil buton + aktif işaretle sınırla (≤ %2) |
| Modal "havada durmuyor" | gölge eklendi | Gölgeyi kaldır; perde `--bg` %92 + 1px çizgi kullan |
| Odak halkası görünmüyor | 1px halka accent zeminde | `outline-color: var(--accent-ink)`, offset -4px |
| Başlık ağır görünüyor | 600/700 ağırlığa çıkılmış | Display 400; hiyerarşiyi puntoyla kur |

## Komşu stiller

- **Uyumlu:** `minimalism` — nötr skala ve hairline ortak; garnitür olarak yalnız tablo/form katmanında kullanılır.
- **Uyumlu:** `editorial-design` — uzun makale gövdesini editorial üstlenir, bu stil başlık/boşluk iskeletini verir.
- **Uyumlu:** `nordic-folk` — aynı sıcak-nötr aile; folk yalnız tek üst bantta, bu stilin boşluğunu kapatmadan.
- **Yasak:** `maximalism` — çok öğe ma'nın tek kuralını (az öğe) yok eder.
- **Yasak:** `memphis` — zikzak/konfeti ve canlı renkler mühür disiplinini kırar.
- **Yasak:** `claymorphism` — şişkin gölge ve yuvarlak form `--shadow: none` + radius 0 kuralıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Ma_(negative_space) | boşluğun yapısal görevi ve aralık ölçüsü |
| https://en.wikipedia.org/wiki/Japanese_typography | dikey ritim, harf aralığı, etiket geleneği |
| https://www.metmuseum.org/ | mühür (hanko) ve tek nokta kırmızısı kullanımı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 46–48px dokunma hedefi ölçüsü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Japanese Ma (styles/67-japanese-ma/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="japanese-ma"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Jost 400 (H1 64px / -0.03em, mobil 40px), gövde Inter 400 16/1.78 (<= 56ch),
  etiket IBM Plex Mono 11px uppercase .22em. 600+ agirlik ve serif yok.
Yuzey: golge YOK (--shadow: none); radius 0px / 2px. Katman ayrimi tek yatay 1px var(--line).
Yerlesim: 12 kolonun 8'i icerik, sagdaki 4 kolon BOS (ekranin ~1/3'u). Bolum dikey 160px (mobil 88px),
  kart padding 28px, gutter 32px.
Renk: washi #f6f5f1 zemin + sumi #16181a metin + tek accent muhur kirmizisi #bf3320 (ekranin <= %2'si).
Imza: bolum basligi ustunde TEK 1px yatay cizgi; hero'da 26px accent kare (muhur);
  12. kolon sinirinda 1px dikey kural yalniz landing'de; form alanlari yalniz alt cizgi.
Hareket: enter 1050ms cubic-bezier(.25,.1,.25,1) 12px stagger 140ms; scroll top 76% / 1150ms / 14px / once;
  pin acik scrub .6 +85%; hover 520ms imageScale 1.006. prefers-reduced-motion zorunlu.
Yasak: golge, blur, gradient, ikinci accent, 2px ustu radius, dolgu ikon, illüstrasyon,
  ortalama duzen, 600+ agirlik, sus amacli cizgi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (8/4 boşluk + tek çizgi + mühür).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (16.32:1), accent üstü ≥ 4.5:1 (5.33:1).
- [ ] Odak halkası görünür (1px + 4px offset), dokunma hedefi ≥ 46px.
- [ ] 390px genişlikte taşma yok; boş şerit mobilde kapanıyor.
- [ ] `prefers-reduced-motion` açıkken hareket ve pin duruyor.

## Token

```css
[data-style="japanese-ma"] {
  --bg: #f6f5f1; --bg-2: #ecebe5;
  --surface: #ffffff; --surface-2: #f1f0ea;
  --ink: #16181a; --ink-soft: #4a4f52; --ink-faint: #7b8084;
  --accent: #bf3320; --accent-ink: #fdf7f2;
  --line: rgba(22,24,26,.14);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Jost", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: 0.015;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="japanese-ma"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
