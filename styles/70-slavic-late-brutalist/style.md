# 70 · Slavic Late Brutalist

> **Bir cümleyle:** Beton panel estetiği: bitişik bloklar, 3px kenarlar, 5px sert ofset gölge ve tek rust kırmızısı — süs yok, kütle var.

| | |
|---|---|
| **Hissiyat** | ağır, mekanik, dürüst, kamusal |
| **En iyi** | kültür merkezi/arşiv, mimarlık ofisi, endüstriyel ürün markası, kamu hizmeti duyurusu |
| **Kaçın** | lüks perakende, sağlık/wellness, çocuk uygulaması, hızlı ödeme akışı |
| **Zorluk** | orta (kalınlığı ölçülü tutmak: her yeri 3px yapmak gürültü üretir) · **Erişilebilirlik** | iyi (12.25:1 gövde, 5.44:1 accent üstü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="slavic-late-brutalist"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Slavic Late Brutalist, geç dönem Doğu Bloku konut bloklarının (panelák) ekran dilidir: **bitişik beton paneller** (`gap: 0`, ayrım 3px kenar), **sert ofset gölge** (`5px 5px 0`), gri beton zemin (`#d8d6d0`), tek **rust kırmızısı** (`#a8431d`) ve Anton ile kurulmuş **uppercase dev başlıklar** (68px, satır aralığı 0.94). Süs yoktur: 45° tehlike şeridi ekran başına bir kez, yalnız landing alt bandında görünür ve orada da bir uyarı işareti gibi davranır.

Kazandığı şey: **ağırlık ve okunurluk**. Kalın kenar + yüksek kontrast (12.25:1) sayesinde ekran, güneş altında ve düşük kaliteli monitörde bile okunur; hiyerarşi süsle değil punto ve kütleyle kurulduğu için tarama hızlıdır. Feda ettiği şey: **incelik ve sıcaklık** — bu stil hiçbir şeyi "zarif" göstermez; lüks, sağlık ve çocuk ürünlerinde kaba kalır.

### Ne değildir
- **Neo-Brutalism (13) değildir.** Neo-brutalism parlak sarı/pembe bloklar, 2px kenar ve **renkli** sert gölgeyle "oyuncu" bir dil kurar (radius 0 ama palet canlı). Burada palet **beton grisi + rust**, gölge **siyah**, kenar **3px** ve tehlike şeridi tek bantta.
- **Constructivism (36) değildir.** Constructivism diagonal çubuk, kırmızı-siyah ve aşırı tipografi ile **afiş** kurar; burada diagonal yalnız bir uyarı şeridinde, kompozisyon ise **dikey-yatay modüler** ve blok bitişik.
- **Utility (44) değildir.** Utility hairline (1px) disiplini ve isimli metin stilleriyle çalışır; burada hairline **yok**, her ayrım 3px ve ofset gölge var.
- **Grand Tourer (41–43) değildir.** O aile krom, kadran ve krem deriyle "zarif makine" kurar; burada makine **çıplak**: krom yok, yuvarlak yok, sıcaklık yok.
- **"Kalın kenarlı kutu" değildir.** Bitişik panel (gap 0), sert ofset gölge, beton dokusu ve 68px uppercase display olmadan bu stil sadece kaba bir wireframe'dir.

### Nereden gelir
1945–1980 arası Doğu ve Orta Avrupa'da milyonlarca konut, **prefabrik beton panel** ile üretildi: endüstriyel ölçü, tekrar eden modül, kaplamasız yüzey. Aynı dönemin grafik dili (şablon yazı, damga, duyuru panosu, uyarı şeridi) bu estetiği tamamladı. Dijitalde 2010'lardan sonra kültür kurumları ve mimarlık ofisleri tarafından "dürüst malzeme" söylemiyle kullanıldı; nedeni ölçülebilir: kalın kenar + yüksek kontrast, kötü ekran koşullarında okunurluğu artırır.

Klişeye düşmemek için korunması gereken detay: **panel bitişikliği ve gölgenin sertliği**. Boşlukları 16px'e çıkarmak, gölgeyi yumuşatmak veya ikinci bir renk eklemek stili "kaba SaaS teması"na çevirir.

### 3 saniyede tanıma testi
1. Bloklar **birbirine bitişik** mi (`gap: 0`), ayrım **3px kenar** mı — 1px hairline yok mu?
2. Bir öğede **5px sert ofset gölge** (blur'suz, kaydırılmış siyah blok) var mı?
3. Başlık **Anton uppercase, 68px, satır aralığı 0.94** mü (harfler birbirine değiyor)?
4. Palet **beton grisi + tek rust kırmızısı** mı; ikinci renk yok mu?
5. Ekranın bir yerinde **45° tehlike şeridi** tek bant olarak var mı (iki kez değil)?

## Görsel imza
1. **Bitişik panel ızgarası:** `gap: 0`, çocuklar `margin: -1.5px 0 0 -1.5px` ile kenarlar üst üste bindirilir; sonuç 3px tek çizgi (çift çizgi değil).
2. **Sert ofset gölge:** `--shadow-hard: 5px 5px 0 #16181a`; yalnız hero görseli, modal ve buton hover'da. Blur sıfır, yayılım sıfır.
3. **Tehlike şeridi:** 24px yükseklik, `repeating-linear-gradient(45deg, accent 0 12px, ink 12px 24px)`; landing alt bandında **tek** kez (mobilde 16px).
4. **Damga bloğu:** 120×120px, 3px ink kenar, `--bg-2` zemin + sert gölge (mobilde 72×72) — "arşiv mührü" gibi sağ üstte.
5. **Beton dokusu:** bölüm zeminlerinde 1px yatay tekrar, `%6 ink` opaklığı + `--grain: .05`; kart yüzeyi **düz** kalır.
6. **Kalın tipografi:** display 68px/0.94, tracking +0.01em; gövde ölçüsü **46ch** (kısa — pano metni gibi blok blok okunur).
7. **Ters video chip:** dolu `--ink` zemin + `--bg` metin, radius 0, mono .14em; accent varyantı rust.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#d8d6d0` | Sayfa zemini (beton) | Kart içi |
| `--bg-2` | `#cdcac3` | Damga bloğu, ikincil şerit | Geniş bölüm dolgusu |
| `--surface` | `#e7e5e0` | Panel yüzeyi | Sayfa zemini |
| `--surface-2` | `#bfbcb5` | İkincil buton hover, tablo başlığı | Metin arkası |
| `--ink` | `#16181a` | Başlık, gövde, 3px kenar, sert gölge | Rust zemin üstü |
| `--ink-soft` | `#43464a` | Lede, ikincil metin | Küçük etiket |
| `--ink-faint` | `#6b6f74` | Dekoratif etiket, eksen | Etkileşimli metin |
| `--accent` | `#a8431d` | Birincil buton, tehlike şeridi, aktif blok | Gövde metni, geniş dolgu |
| `--accent-ink` | `#f7f3ea` | Rust zemin üstü metin | Gri zemin |
| `--line` | `rgba(22,24,26,.26)` | Panel kenarı (3px), tablo ızgarası | Metin |

- Ölçülen kontrast: `ink / bg` = **12.25:1** · `ink-soft / bg` = **6.53:1** · `accent-ink / accent` = **5.44:1** · `ink-faint / bg` = **3.48:1** (yalnız dekoratif).
- Tek vurgu kuralı: beton + siyah + rust. Rust alanı ekranın ≤ **%10**'u; tehlike şeridi bu paya dahildir.
- Yasak kombinasyon: rust zemin + `--ink-soft` metin; ikinci accent (sarı/turkuaz); `--ink-faint` + `--surface-2` (3.0:1 altı).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 68px (mobil 40px) | 400 | 0.94 | 0.01em |
| H2 | Anton | 34px | 400 | 1.02 | 0.01em |
| H3 | Inter | 21px | 600 | 1.18 | 0.015em |
| Gövde | Inter | 16px | 400 | 1.6 | 0 |
| Lede | Inter | 16.5px | 400 | 1.6 | 0 (46ch) |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.45 | 0.16em |

- Ölçek oranı ≈ 1.6 (16 → 21 → 34 → 68); kullanılan basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(40px, 5.6vw, 68px) }`.
- Gövde metni maksimum satır uzunluğu: **46ch** — kısa ölçü bilinçli: pano/duyuru metni gibi taranır.
- Ağırlık kuralı: display yalnız 400 (Anton tek ağırlık; sahte kalınlaştırma yasak), gövde 400/600. 200/300 ince ağırlık yok.
- Negatif tracking yasak: Anton zaten dar; `-0.02em` harfleri birbirine yapıştırır ve okunabilirliği düşürür.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 7, künye/etiket 5) |
| Gutter | **0px (bitişik panel)** — ayrım 3px kenarla |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında paneller alt alta, kenarlar üst üste binmeye devam eder |

- Asimetri kuralı: 5/7 bölünme (künye 5, içerik 7); ekran başına en fazla 1 tam genişlik panel.
- Bölüm ritmi: art arda en fazla **3** panel satırı; sonra 3px divider + 80px boşluk.
- Bölüm dikey boşluk 80px (mobil 48px); panel padding 20px; **paneller arası boşluk 0** (istisnasız).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, beton dokusu |
| Panel | `--surface` + 3px `--line` | `none` | Kart, KPI, bileşen kutusu |
| Yüzen katman | `--surface` + 3px `--ink` | `--shadow-hard` | Modal, dropdown, hero görseli |

- Kenarlık formülü: panel `3px solid var(--line)`; yüzen katman ve birincil buton `3px solid var(--ink)`; bitişik panellerde negatif margin ile tek çizgi.
- Derinlik nereden gelir: **sert ofset gölge + kütle**; yumuşak gölge, blur ve iç gölge yok.
- Radius: `--radius` 0px (buton, input, chip, kart) · `--radius-lg` 2px (yalnız modal köşesi). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 13px 22px | 0px | 12px/400 mono, .14em | `--accent` / `--accent-ink`, 3px `--ink` kenar, gölge yok | hover: `--shadow-hard` + translate(-1px,-1px) 70ms · active: gölge yok · focus 3px ink offset -3 · disabled opacity .4 kesikli · loading 3 kare dolar |
| Buton (ikincil) | 48px | 13px 22px | 0px | 12px/400 mono | şeffaf / `--ink`, 3px `--ink` kenar | hover `--surface-2` + gölge · focus aynı |
| Input | 48px | 0 14px | 0px | 16px/400 Inter | `--surface` + 3px `--line` | focus 3px ink offset **-3** (iç halka) · error `--danger` kenar + mono açıklama · disabled opacity .4 |
| Kart / panel | — | 20px | 0px | H3 Inter 21px | `--surface` + 3px `--line`, gölge yok | bitişik (gap 0); hover yok (mekanik) |
| Chip / badge | 24px | 3px 7px | 0px | 10px/400 mono, .14em | dolu `--ink` zemin / `--bg` metin | accent varyantı rust |
| Nav | 60px | 0 32px | 0 | 20px Anton + 11px mono | `--surface` zemin + alt 3px `--ink` | aktif: altında 8px rust blok; pasif `--ink-soft` |
| Tablo satırı | 44px | 10px 12px | 0 | 14px/400 Inter | hücreler 3px `--line` çerçeveli | hover `--surface-2` · seçili: hücre zemini `--ink` + metin `--bg` |
| Modal / sheet | — | 24px | 2px | H2 Anton 34px | `--surface` + 3px `--ink` + `--shadow-hard` | perde `--ink` %55, 140ms, kayma yok |
| Toast | 44px | 12px 16px | 0px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 6px rust blok, 2600ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; sütunlar bitişik, 3px çerçeveli |

- Odak halkası: `outline: 3px solid var(--ink); outline-offset: -3px` — içeri alınmış kalın halka; rust zeminli butonda `outline-color: var(--accent-ink)`.
- Dokunma hedefi: en az 48×48px (bu stilde 44px altına inilmez; pano dili iri parmakla kullanılır).
- Kenarlar üst üste bindiği için tek çizgi görünür; çift çizgi görüntüsü bir hatadır (negatif margin unutulmuş demektir).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 3px kalın çizgi, kare uç, 24px ızgara; ince (1px) ikon yok |
| Fotoğraf | Beton, iskele, panel yüzey, gri gökyüzü; yüksek kontrast, düşük doygunluk; alan ekranın %55'i |
| İllüstrasyon | Yok — tipografi ve geometri yeter; tek istisna 45° tehlike şeridi |
| Doku | Bölüm zemininde 1px yatay tekrar (%6 ink) + `--grain: .05`; panel yüzeyi düz |
| Logo alanı | Anton uppercase kelime markası, 24px güvenli boşluk; işaret yok — damga bloğu kullanılır |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 68px uppercase başlık, damga bloğu, alt bantta tehlike şeridi | `shots/01-landing.png` |
| Dashboard | düşük | Bitişik KPI panelleri (gap 0), mono sayılar, 3px ızgara | `shots/02-dashboard.png` |
| Form | düşük | 48px alanlar, iç odak halkası, mono hata metni | — |
| Liste / tablo | düşük | Hücreler 3px çerçeveli; seçili satır ters video | — |
| Boş durum | orta | Tek damga bloğu (72px) + 1 cümle + 1 buton | — |
| Onboarding | yüksek | Adım göstergesi 3 bitişik kare, aktif olan rust | — |
| Pricing | orta | 3 bitişik panel; orta panelde 3px ink kenar + sert gölge | — |
| Giriş / ödeme | çok düşük | Şerit yok, doku yok; yalnız alanlar + tek rust buton | — |
| Modal | orta | 3px ink çerçeve + sert gölge, perde %55 | — |
| Bildirim / toast | orta | Rust blok + mono metin, 2600ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama; şerit kullanılmaz | — |
| Profil / ayar | orta | Künye 5 kolon solda, ayar panelleri 7 kolonda bitişik | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 70ms | `cubic-bezier(.85,0,.15,1)` | `box-shadow` kalkar, `translate(0,0)` |
| Giriş (enter) | **260ms** | `cubic-bezier(.85,0,.15,1)` | `opacity` + `translateY(34px)`, stagger **20ms** |
| Kaydırma (scroll) | **300ms** | `cubic-bezier(.85,0,.15,1)` | trigger **`top 92%`**, offsetY **40px**, `once: false` (her geçişte tekrar) |
| Hover | **70ms** | `ease-out` | görsel ölçek **1.000** (görsel büyümez; yalnız gölge/kayma) |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 140ms | `cubic-bezier(.85,0,.15,1)` | rust blok 8px → 12px genişler |

- `prefers-reduced-motion`: tüm süreler 0.01ms; `once: false` animasyonu da durur (hareket sıfırlanır, opaklık 1'de kalır).
- Bu stile yasak hareket: spring/bounce, parallax, yumuşak ease-out zarafeti, sürekli döngü/nefes.
- İmza ölçüsü: giriş **0.26s / 34px / stagger .02**, kaydırma **0.3s / top 92% / 40px / once: false**, hover **70ms / 1.000**, pin **kapalı** — `once: false` katalogda bu stile özgüdür.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#d8d6d0` | `#1a1b1c` |
| `--bg-2` | `#cdcac3` | `#202224` |
| `--surface` | `#e7e5e0` | `#24262a` |
| `--surface-2` | `#bfbcb5` | `#2f3236` |
| `--ink` | `#16181a` | `#e8e6e1` |
| `--ink-soft` | `#43464a` | `#adaead` |
| `--ink-faint` | `#6b6f74` | `#83858a` |
| `--accent` | `#a8431d` | `#d26234` |
| `--accent-ink` | `#f7f3ea` | `#141414` |
| `--line` | `rgba(22,24,26,.26)` | `rgba(232,230,225,.22)` |

- Koyu mod **gece betonu**: zemin `#1a1b1c`, paneller `#24262a`; rust açılır (`#d26234`) çünkü koyu rust koyu zeminde kaybolur.
- Sert ofset gölge koyuda siyah olsaydı görünmezdi: `--shadow-hard` **beton grisine** (`#4c5157`) döner — gölge hâlâ sert, ama okunur. Bu tek istisna `## Koyu mod` bloğunda açıkça yazılır.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **13.83:1** · `ink-soft/bg` = **7.75:1** · `accent-ink/accent` = **4.86:1** · `ink-faint/bg` = **4.67:1**.

## Zorunlu kurallar

1. **Kalın kenar:** panel, buton, input 3px; bu stilde 1px hairline yok.
2. **Sert gölge:** `--shadow-hard` (5px 5px 0) yalnız yüzen katman, hero görseli ve buton hover'da; yumuşak gölge yasak.
3. **Bitişik panel:** `gap: 0` + negatif margin ile tek 3px çizgi; çift çizgi hata kabul edilir.
4. **Beton dokusu:** yalnız bölüm zeminlerinde 1px yatay tekrar (%6); panel yüzeyi düz.
5. **Tehlike şeridi:** 45°, 24px, ekran başına 1 kez (yalnız landing alt bandı).
6. **Tipografi:** Anton 400 uppercase 68px (+0.01em), Inter 400 gövde, JetBrains Mono uppercase etiket.

## Yasaklar

- Yuvarlak köşe (radius 0, en fazla 2px) ve pill buton.
- Yumuşak gölge, blur, gradient, cam yüzey.
- Serif aile, italik, 200/300 ince ağırlık, negatif tracking.
- Renkli illüstrasyon, emoji, yuvarlak ikon.
- Birden fazla tehlike şeridi (dekorasyon gürültüsü).
- Pastel/retro tonlar; accent yalnız rust `#a8431d`.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.48:1** (açık tema). `--ink-faint` yalnız dekoratif etiket ve eksen yazısı; etkileşimli metin, form etiketi veya nav bağlantısı olamaz.
- Koyu temada `accent-ink/accent` **4.86:1** — eşiğin üstünde ama en düşük accent çifti; rust zemin üstünde metin 14px'ten küçük kullanılmaz.
- Tehlike şeridi **bilgi taşımaz**, süs/uyarı ritmidir; `aria-hidden="true"`. Gerçek uyarı metni her zaman yazıyla verilir.
- Hareket/parlama hassasiyeti: orta — `once: false` kaydırma animasyonu her geçişte tekrar eder; `prefers-reduced-motion` açıkken tamamen durur.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse beton dokusu `rgba` yerine düz zemin rengine düşer (işlevsel kayıp yok).
- Odak halkası içeri alınmış 3px ink: gri panel üstünde 12.25:1; rust zeminli butonda `outline-color: var(--accent-ink)` kullanılır.

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
| Ekran gürültülü | her öğeye 3px kenar + gölge verilmiş | Kalınlığı taşıyıcı öğelere ayır: gölge yalnız yüzen katman + hover |
| Çift çizgi görünüyor | bitişik panellerde negatif margin yok | Çocuklara `margin: -1.5px 0 0 -1.5px` ver |
| "Kaba SaaS" hissi | gutter 16px'e çıkarılmış, gölge yumuşatılmış | `gap: 0` + `--shadow-hard` (blur 0) |
| Şerit dekorasyon olmuş | sayfada 3+ tehlike şeridi | Ekran başına 1, yalnız landing alt bandı |
| Başlık okunmuyor | negatif tracking veya Anton yerine sahte kalın | tracking +0.01em, display Anton 400 |
| Odak görünmüyor | dış offset halka kalın kenarla çakışıyor | `outline-offset: -3px` (iç halka) |

## Komşu stiller

- **Uyumlu:** `neo-brutalism` — kalın kenar dili ortak; neo-brutalism'i tek bölümde (etkinlik kartı) tut, paletini ezme.
- **Uyumlu:** `utility` — kamu hizmeti ciddiyeti ortak; utility'yi form/tablo katmanında kullan (hairline'ı bu stilde 3px'e çekme).
- **Uyumlu:** `constructivism` — afiş dili ortak; constructivism'i yalnız tek hero bandında kullan.
- **Yasak:** `claymorphism` — şişkin yumuşak gölge beton sertliğini yok eder.
- **Yasak:** `glassmorphism` — blur/şeffaflık 3px kenar ve sert gölgeyle çelişir.
- **Yasak:** `ethereal` — sis, nefes animasyonu ve pastel ışık bu stilin tam tersi.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Brutalist_architecture | béton brut yüzey, kalın kütle, açık strüktür |
| https://en.wikipedia.org/wiki/Panel_building | prefabrik panel modülü ve bitişik blok ritmi |
| https://www.archdaily.com/tag/brutalism | cephe dokusu, sert gölge, blok hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | 3px iç odak halkası ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Slavic Late Brutalist (styles/70-slavic-late-brutalist/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="slavic-late-brutalist"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Anton 400 UPPERCASE (H1 68px / line-height .94 / +0.01em, mobil 40px),
  govde Inter 400 16/1.6 (<= 46ch), etiket JetBrains Mono 11px .16em. Serif/italik/negatif tracking yasak.
Yuzey: yumusak golge YOK. Panel 3px var(--line) kenar, bitisik (gap: 0 + cocuklarda margin -1.5px),
  radius 0 (modal 2px). Sert ofset golge var(--shadow-hard) yalniz hero gorseli, modal ve buton hover'da.
Renk: beton #d8d6d0 zemin + panel #e7e5e0 + siyah #16181a + TEK rust #a8431d (<= %10).
Imza: 45 derece tehlike seridi (24px, ekran basina 1, landing alt bandi);
  damga blogu 120px (3px kenar + sert golge); bolum zeminlerinde 1px yatay beton dokusu;
  kart ice odak halkasi 3px ink offset -3px.
Hareket: enter 260ms cubic-bezier(.85,0,.15,1) 34px stagger 20ms;
  scroll top 92% / 300ms / 40px / once:false (her geciste tekrar); hover 70ms imageScale 1.000; pin kapali.
  prefers-reduced-motion zorunlu.
Yasak: yuvarlak kose, yumusak golge, blur, gradient, serif, italik, ince 1px ikon,
  birden fazla tehlike seridi, pastel tonlar, ikinci accent.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (bitişik panel + sert gölge + tehlike şeridi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (12.25:1), accent üstü ≥ 4.5:1 (5.44:1).
- [ ] Odak halkası görünür (3px, offset -3), dokunma hedefi ≥ 48px.
- [ ] 390px genişlikte taşma yok; şerit 16px'e iniyor.
- [ ] `prefers-reduced-motion` açıkken hareket (özellikle `once: false` kaydırma) duruyor.

## Token

```css
[data-style="slavic-late-brutalist"] {
  --bg: #d8d6d0; --bg-2: #cdcac3;
  --surface: #e7e5e0; --surface-2: #bfbcb5;
  --ink: #16181a; --ink-soft: #43464a; --ink-faint: #6b6f74;
  --accent: #a8431d; --accent-ink: #f7f3ea;
  --line: rgba(22,24,26,.26);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: 5px 5px 0 #16181a;
  --font-display: "Anton", Impact, system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0.05;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="slavic-late-brutalist"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir (koyuda `--shadow-hard` beton grisine döner).
