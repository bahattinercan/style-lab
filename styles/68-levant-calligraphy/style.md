# 68 · Levant Calligraphy

> **Bir cümleyle:** Hat hattının ekran karşılığı: sağa dayalı kalın-ince kurallar, kâğıt zemini ve 14px içeri çekilmiş tek altın tezhip çerçevesi.

| | |
|---|---|
| **Hissiyat** | ağırbaşlı, el yazması, törensel, sıcak-koyu |
| **En iyi** | yayınevi/kültür kurumu, hat-sanat galerisi, butik danışmanlık, davet/etkinlik sayfası |
| **Kaçın** | yüksek tempolu e-ticaret, oyun, yoğun operasyon paneli, çocuk uygulaması |
| **Zorluk** | yüksek (altını parlaksız, süsü dekoratif katmanda tutmak) · **Erişilebilirlik** | iyi (14.51:1 gövde, 5.98:1 accent üstü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="levant-calligraphy"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Levant Calligraphy, el yazması sayfa mantığını ekrana taşır: **kâğıt zemin** (`#f4eee1`), **sağa dayalı içerik omurgası** (7/12 kolon), ve iki imza öğesi — **kalın-ince kalem kuralı** (2px çizgi, ilk/son %12'de şeffafa döner) ile **tezhip çerçevesi** (14px içeri çekilmiş 1px altın kural). Altın (`#7a5a22`) süsün rengidir, metnin değil: accent ekranın ≤%8'inde kalır, gövde metni her zaman lacivert-siyahtır (`#171d2e`).

Kazandığı şey: **ağırlık ve sahiplik**. Sağ omurga ve kalın-ince kurallar, sayfayı "yazılmış" hissettirir; okuma yönü bilinçli olarak tersine çevrildiği için ekran ilk saniyede "başka bir kültürün düzeni" olarak okunur. Feda ettiği şey: **tarama hızı ve simetri alışkanlığı** — sola dayalı form/liste konvansiyonları burada sağa çekilir; yoğun veri ekranlarında bu yön değişimi maliyetlidir, o yüzden tablo/form konvansiyonu korunur, omurga yalnız içerik sayfalarında uygulanır.

### Ne değildir
- **Dark Academia (33) değildir.** İkisi de serif ve kâğıt kullanır; ama Dark Academia **soldan** akar, gotik süsü çift çerçeveyle verir ve accent'i **mum ışığı sarısı** olarak geniş alanda kullanır. Burada yön **sağa**, çerçeve **tek**, accent **altın ve ≤ %8**, aileler Cormorant + Lora.
- **Art Deco (26) değildir.** Art Deco simetrik ziggurat geometrisi ve `Cinzel` ile çalışır; burada geometri yok, kalem eğrisi var (kalın-ince kural), display Cormorant Garamond 500.
- **Luxury Typography (04) değildir.** O stil geniş tracking ve seyrek yerleşimle "boş lüks" kurar; burada tracking neredeyse sıfır (-0.005em) ve sayfa el yazması gibi **dolu**.
- **Victorian (27) değildir.** Victorian gravür dokusu ve small caps ile dönemsel taklit yapar; burada doku yalnız `--grain: .03`, süs yalnız tezhip çerçevesi ve rosette.
- **"Altın gradient lüks" değildir.** Metalik parlaklık yasak; altın **mat** ve yalnız kural kalınlığında yaşar.

### Nereden gelir
Levant ve İslam hat geleneği (kûfi, nesih, sülüs) yazıyı **ölçülebilir bir sistem** olarak kurar: harf yüksekliği nokta birimiyle, kalem kalınlığı sabit oranla belirlenir. Tezhip (illumination) ise sayfanın kenarını altın kural ve rozetle çerçeveleyerek metni "korunan" bir alana alır. Dijitalde bu dil 2010'lardan sonra kültür kurumları, yayınevleri ve butik markalarca kullanıldı; nedeni ölçülebilir — tek bir altın kural + serif display, düşük çözünürlükte bile kimlik taşır.

Klişeye düşmemek için korunması gereken detay: **çerçevenin tekliği ve altının matlığı**. İkinci çerçeve, gold→beyaz gradient veya ikinci accent (turkuaz/bordo) eklemek stili "orientalist afiş"e çevirir.

### 3 saniyede tanıma testi
1. İçerik **sağa dayalı** mı; solda künye/boş kolon var mı?
2. Kartın kenarından **14px içeride 1px altın kural** (tezhip) görünüyor mu — tek çerçeve mi?
3. Bölüm ayırıcısı **2px ve uçları şeffafa dönüyor** mu (kalem giriş-çıkışı)?
4. Display **Cormorant Garamond 500** (ince-şişkin serif), gövde Lora, etiket **Courier Prime** mı?
5. Altın **mat** ve ekranın küçük bir bölümünde mi (parlama/yansıma yok)?

## Görsel imza
1. **Tezhip çerçevesi:** kart/panel içinde `inset: 14px`, `1px solid color-mix(accent 55%)`; dekoratif katman, `pointer-events: none`.
2. **Kalın-ince kalem kuralı:** 2px yükseklik, `linear-gradient(90deg, transparent 0, accent 12%, accent 88%, transparent 100%)`; bölüm ayırıcı ve nav aktif işareti.
3. **Sağ omurga:** hero metni `text-align: right`, lede `margin-left: auto`; sol 5 kolon künye.
4. **Rosette (tezhip gülü):** 180×180px, `repeating-conic-gradient` 45° dilim + merkez disk + 1px halka, opacity .8; yalnız landing dekoratif katmanında, mobilde 104px.
5. **Kâğıt katmanı:** kart `1px --line` + tek yumuşak gölge (`0 2px 14px rgba(23,29,46,.10)`); iç gölge yok.
6. **Chip = mühür kutusu:** radius 1px, kenar `accent %50`, metin `--ink-soft`, .1em tracking.
7. **Dikey kenar:** makale yan paneli ve auth aside'ında sağda 1px `--line` — sayfa "cilt payı" hissi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4eee1` | Sayfa zemini (parşömen) | Kart içi |
| `--bg-2` | `#eae2d0` | Künye kolonu, alt bilgi | Geniş bölüm dolgusu |
| `--surface` | `#fdf9ef` | Kart, panel, modal | Sayfa zemini |
| `--surface-2` | `#f0e8d7` | Tablo başlığı, ikincil buton hover | Metin arkası |
| `--ink` | `#171d2e` | Başlık, gövde (lacivert-siyah) | Altın zemin üstü |
| `--ink-soft` | `#444d63` | Lede, ikincil metin | Altın üstü metin |
| `--ink-faint` | `#6f7789` | Künye, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#7a5a22` | Tezhip kural, kalem kuralı, rozet, birincil buton | Gövde metni, geniş zemin |
| `--accent-ink` | `#fdf8ec` | Altın zemin üstü metin | Altın olmayan zemin |
| `--line` | `rgba(23,29,46,.16)` | Kart kenarı, tablo çizgisi, cilt payı | Tezhip çerçevesi (o accent) |

- Ölçülen kontrast: `ink / bg` = **14.51:1** · `ink-soft / bg` = **7.30:1** · `accent-ink / accent` = **5.98:1** · `ink-faint / bg` = **3.88:1** (yalnız dekoratif).
- Tek vurgu kuralı: parşömen + lacivert + mat altın. Altın alanı **≤ %8**.
- Yasak kombinasyon: altın zemin + `--ink-soft` metin; `--ink-faint` + `--surface-2` (3.1:1); metalik gold→beyaz gradient.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 58px (mobil 36px) | 500 | 1.08 | -0.005em |
| H2 | Cormorant Garamond | 31px | 500 | 1.14 | 0 |
| H3 | Cormorant Garamond | 20px | 500 | 1.3 | 0 |
| Gövde | Lora | 16px | 400 | 1.74 | 0 |
| Lede | Lora | 16.5px | 400 | 1.74 | 0 (48ch) |
| Etiket / mono | Courier Prime | 11px | 400 | 1.45 | 0.12em |

- Ölçek oranı ≈ 1.5 (16 → 20 → 31 → 58); kullanılan basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(36px, 4.4vw, 58px) }`.
- Gövde metni maksimum satır uzunluğu: **62ch**; lede 48ch.
- Ağırlık kuralı: display yalnız 500 (Cormorant'ta 600+ şişer ve hat kalınlığı oranını bozar); gövde 400, vurgu 600.
- Cormorant'ın ince-şişkin kontrastı hat kalemini taklit eder; başka bir serif display eklemek bu etkiyi kırar.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 7 sağa dayalı, künye 5 solda) |
| Gutter | 28px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 900px altında metin sola hizalanır, rosette 104px'e küçülür |

- Asimetri kuralı: her ekran **sağ omurga** ile başlar; tablo ve form ekranlarında yön konvansiyona döner (maliyet/okunabilirlik).
- Bölüm ritmi: art arda en fazla **3** hizalı blok; dördüncüde kalem kuralı ve 104px boşluk.
- Bölüm dikey boşluk 104px (mobil 60px); kart padding 26px; kart arası 24px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, künye kolonu |
| Kart | `--surface` + `--line` + `--shadow` | `0 2px 14px rgba(23,29,46,.10)` | Panel, KPI, bileşen kartı |
| Yüzen katman | `--surface` + `--shadow` | aynı, tek katman | Modal, dropdown |

- Kenarlık formülü: dış `1px solid var(--line)`, iç `1px solid color-mix(in srgb, var(--accent) 55%, transparent)` (14px inset). İkisi toplam **tek çerçeve** sayılır; üçüncü çerçeve yasak.
- Derinlik nereden gelir: **kâğıt katmanı** — tek yumuşak gölge + iç kural; iç içe gölge ve sert gölge yok.
- Radius: `--radius` 2px (buton, input, chip) · `--radius-lg` 6px (kart, modal, hero görseli). 6px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 13px 24px | 1px | 15px/600 Lora | `--accent` / `--accent-ink`, gölge yok | hover %90 karışım 340ms · active translateY(1px) · focus 2px accent + 3px offset · disabled opacity .45 kesikli · loading 3 çizgi |
| Buton (ikincil) | 46px | 13px 24px | 1px | 15px/600 Lora | şeffaf / `--ink`, kenar `accent %50` | hover kenar tam accent · focus aynı halka |
| Input | 46px | 0 14px | 1px | 16px/400 Lora | `--surface` + 1px `--line` | focus 2px accent + 2px offset + alt çizgi accent · filled `--surface` · error `--danger` + açıklama · disabled opacity .45 |
| Kart | — | 26px | 6px | H3 Cormorant 20px | `--surface` + `--line` + `--shadow` + 14px iç altın kural | hover: iç kural `accent %75` |
| Chip / badge | 24px | 0 10px | 1px | 11px/400 mono, .1em | şeffaf, kenar `accent %50` | accent varyantı: dolu altın + accent-ink |
| Nav | 64px | 0 48px | 0 | 11.5px/400 mono + Cormorant marka | `--bg` zemin + alt 1px `--line` | aktif: 2px kalem kuralı (uçlar şeffaf); pasif `--ink-soft` |
| Tablo satırı | 48px | 12px 14px | 0 | 14px/400 Lora, sayı mono sağa dayalı | alt 1px `--line` | hover `--surface-2` · seçili: sağ 2px accent |
| Modal / sheet | — | 32px | 6px | H2 Cormorant 31px | `--surface` + `--shadow` + iç tezhip kuralı | perde `--ink` %55, 340ms fade |
| Toast | 42px | 12px 18px | 1px | 13px/400 Lora | `--ink` zemin / `--bg` metin | sol kenarda 2px altın kural, 4200ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; 1.5px çizgi, %8 alan dolgusu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; altın zeminli butonda `outline-color: var(--accent-ink)`, offset -4px.
- Dokunma hedefi: en az 46×46px; chip 24px görünür ama sarmalayıcıda 11px dikey padding ile 44px'e tamamlanır.
- Kalem kuralı animasyonu yalnız `scaleX` ile; `width` animasyonu yasak (layout thrash).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px ince çizgi, yuvarlatılmış uç, 20px ızgara; dolu ikon yok |
| Fotoğraf | Kâğıt, taş, kalem, el işi; sıcak yansıma, düşük doygunluk; alan ekranın %50'sini geçmez |
| İllüstrasyon | Yalnız tezhip motifi (rosette, rumi kıvrım); metnin arkasına serilmez |
| Doku | `--grain: .03` kâğıt; görünür gürültü değil |
| Logo alanı | Serif kelime markası (Cormorant 500, .04em), 24px güvenli boşluk; altın yalnız ince kural |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Sağ omurga, rosette sol üstte, kalem kuralı başlık altında | `shots/01-landing.png` |
| Dashboard | düşük | Süs yok; kartlarda yalnız 1px çizgi + tek gölge; sayılar mono | `shots/02-dashboard.png` |
| Form | düşük | 46px alan, 1px radius, 2px odak halkası | — |
| Liste / tablo | düşük | Sola döner (konvansiyon); satır 48px, alt çizgi | — |
| Boş durum | orta | Tek rosette (104px) + 1 cümle + 1 buton | — |
| Onboarding | yüksek | Her adımda sağ omurga; ilerleme = 3 kalem kuralı parçası | — |
| Pricing | orta | 3 kart, orta kartta dolu altın rozet (≤ %8 alan) | — |
| Giriş / ödeme | çok düşük | Süs yalnız 14px iç kural; alanlar 1px radius | — |
| Modal | orta | 32px padding, iç tezhip kuralı, sağa dayalı başlık | — |
| Bildirim / toast | orta | Sol kenarda 2px altın kural; kutu gölgesiz | — |
| Hata | düşük | `--danger` kenar + açıklama; altın kullanılmaz | — |
| Profil / ayar | orta | Künye kolonu solda `--bg-2`, formlar sağda | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 160ms | `cubic-bezier(.34,.03,.24,1)` | `translateY(1px)` |
| Giriş (enter) | **940ms** | `cubic-bezier(.34,.03,.24,1)` | `opacity` + `translateY(26px)`, stagger **90ms** |
| Kaydırma (scroll) | **1020ms** | `cubic-bezier(.34,.03,.24,1)` | trigger **`top 79%`**, offsetY **30px**, `once: true` |
| Hover | **340ms** | `ease-out` | görsel ölçek **1.032** |
| Pin | **açık** | `scrub: 1.4` | mesafe **+150%** (en uzun sabitleme) |
| Ödül / vurgu (kalem kuralı) | 620ms | `cubic-bezier(.34,.03,.24,1)` | `scaleX` 0→1, origin sol |

- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, kalem kuralı statik görünür.
- Bu stile yasak hareket: parallax, spring/bounce, harf harf animasyon, metalik parlama/ışık süpürme.
- İmza ölçüsü: giriş **0.94s / 26px / stagger .09**, kaydırma **1.02s / top 79% / 30px**, hover **340ms / 1.032**, pin **scrub 1.4 / +150%** — katalogda tekrar etmez.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4eee1` | `#101426` |
| `--bg-2` | `#eae2d0` | `#161b30` |
| `--surface` | `#fdf9ef` | `#1a2038` |
| `--surface-2` | `#f0e8d7` | `#222a45` |
| `--ink` | `#171d2e` | `#ece5d3` |
| `--ink-soft` | `#444d63` | `#b3b6c4` |
| `--ink-faint` | `#6f7789` | `#868ca0` |
| `--accent` | `#7a5a22` | `#d8b269` |
| `--accent-ink` | `#fdf8ec` | `#141422` |
| `--line` | `rgba(23,29,46,.16)` | `rgba(236,229,211,.16)` |

- Koyu mod **gece el yazması**dır: parşömen yerine lacivert mürekkep zemini, metin kreme döner, altın açılır (`#d8b269`) — mat kalır, parlamaz.
- Gölge koyuda zayıf görünür: `--shadow` aynı kalır ama kart ayrımını 1px `--line` taşır; iç tezhip kuralının opaklığı %55 → %60'a çıkar (koyu zeminde altın daha az okunur).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **14.53:1** · `ink-soft/bg` = **9.05:1** · `accent-ink/accent` = **9.10:1** · `ink-faint/bg` = **5.45:1**.

## Zorunlu kurallar

1. **Tezhip çerçevesi tek:** kart/panel içinde 14px çekilmiş 1px altın kural; ikinci çerçeve yok.
2. **Kalın-ince kalem kuralı:** 2px çizgi, ilk ve son %12'de şeffafa döner; bölüm ayırıcı ve nav aktif işareti.
3. **Sağ omurga:** içerik 7/12 kolonda sağa dayalı, sol 5/12 künye; mobilde sol hizalama.
4. **Altın ≤ %8:** gövde metni asla altın; altın yalnız kural, çerçeve ve rozet.
5. **Üç aile sabit:** Cormorant Garamond 500 (display), Lora 400 (gövde), Courier Prime (etiket).
6. **Ölçü:** gövde 62ch, lede 48ch, bölüm ritmi 104px (mobil 60px).

## Yasaklar

- Metalik altın taklidi: gold→beyaz gradient, parlama, ışık süpürme.
- İkinci accent (turkuaz, bordo) ve çok renkli rozet.
- Sans display, 600+ display ağırlık, negatif geniş tracking.
- Cam/blur yüzey, iç içe çift gölge, 6px üstü radius.
- Harf harf animasyon ve sürekli dönen rosette.
- Arka plana serilmiş tezhip motifi; motif yalnız dekoratif katmanda.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.88:1** (açık tema). `--ink-faint` künye ve dekoratif etiketle sınırlı; etkileşimli metin, form etiketi veya nav bağlantısı olamaz.
- Altın accent `#7a5a22` **koyu** bir altındır; üstüne `--accent-ink` (5.98:1) yazılır. Açık altın (`#d8b269`) yalnız koyu temada ve üstüne `#141422` metinle kullanılır.
- 1px tezhip çerçevesi **bilgi taşımaz**; `aria-hidden="true"` ve `pointer-events: none`. Kontrast ölçütü metin ve etkileşim öğeleri için geçerlidir.
- Hareket/parlama hassasiyeti: düşük — parlaklık sıçraması yok, metalik yansıma yok, geçişler 30px altı.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse tezhip kuralı `1px solid var(--line)`'a düşer (görünür kalır).
- Odak görünürlüğü: altın zeminli butonda 2px altın halka kaybolur → `outline-color: var(--accent-ink)`, offset -4px.

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
| "Oryantalist afiş" hissi | ikinci çerçeve + geniş altın alan + gold gradient | Tek çerçeve, altın ≤ %8, gradient kaldır |
| Altın okunmuyor | altın metin olarak kullanılmış | Altını yalnız kural/çerçeve/rozet yap; metin `--ink` |
| Sayfa yönü kafa karıştırıyor | form/tablo da sağa çekilmiş | Omurgayı yalnız içerik sayfalarında uygula |
| Kartlar "yüzen kutu" olmuş | iki katmanlı gölge eklenmiş | Tek `--shadow`, içeride yalnız 1px kural |
| Tezhip kuralı metne değiyor | inset 14px yerine 6px, padding 16px | padding 26px + inset 14px |
| Display fazla kalın | Cormorant 600/700 | 500'e sabitle; şişkinlik hat oranını bozar |

## Komşu stiller

- **Uyumlu:** `editorial-design` — serif gövde ve kolon ritmi ortak; uzun makalede gövde editorial'da kalır.
- **Uyumlu:** `luxury-typography` — ince serif dili paylaşır; lüks stili yalnız ürün detayında kullan, tezhip kuralını ezme.
- **Uyumlu:** `bohemian` — el yapımı sıcaklık ortak; bohemian'ı desensiz ve tek katmanda tut.
- **Yasak:** `neo-brutalism` — 3px siyah kenar ve sert gölge kâğıt katmanını kırar.
- **Yasak:** `memphis` — canlı renk ve zikzak altın disiplinini yok eder.
- **Yasak:** `dopamine-ui` — doygun bloklar ve mikro ödül animasyonu törensel ritmi bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Islamic_calligraphy | kalem kalınlığı oranları ve satır ekseni |
| https://en.wikipedia.org/wiki/Tezhip | tezhip çerçevesi, rosette, altın yoğunluğu |
| https://www.metmuseum.org/art/collection | elyazması sayfa düzeni ve kenar boşluğu oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | altın accent üstü metin ölçümü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Levant Calligraphy (styles/68-levant-calligraphy/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="levant-calligraphy"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Cormorant Garamond 500 (H1 58px / -0.005em, mobil 36px), gövde Lora 400 16/1.74 (<= 62ch),
  etiket Courier Prime 11px .12em. Display'de 600+ agirlik yok.
Yuzey: kart 1px var(--line) + tek yumusak golge var(--shadow); radius 2px / 6px.
  Kartin ICINDE 14px inset 1px altin kural (tezhip) - tek cerceve, ikincisi yok.
Renk: parsonem #f4eee1 zemin + lacivert #171d2e metin + mat altin #7a5a22 (ekranin <= %8'i).
Imza: kalin-ince kalem kurali (2px, ilk/son %12 seffafa doner) bolum ayirici ve nav aktif isareti;
  saga dayali omurga (7/12 icerik, sol 5/12 kunye); hero'da 180px rosette (mobil 104px).
Hareket: enter 940ms cubic-bezier(.34,.03,.24,1) 26px stagger 90ms; scroll top 79% / 1020ms / 30px / once;
  pin acik scrub 1.4 +150%; hover 340ms imageScale 1.032. prefers-reduced-motion zorunlu.
Yasak: gold gradient/parlama, ikinci accent, ikinci cerceve, sans display, 6px ustu radius,
  ic ice golge, harf harf animasyon, arka plana serilmis motif.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (tezhip kuralı + kalem kuralı + sağ omurga).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (14.51:1), accent üstü ≥ 4.5:1 (5.98:1).
- [ ] Odak halkası görünür (2px + 3px offset), dokunma hedefi ≥ 46px.
- [ ] 390px genişlikte taşma yok; metin sola dönüyor.
- [ ] `prefers-reduced-motion` açıkken hareket ve pin duruyor.

## Token

```css
[data-style="levant-calligraphy"] {
  --bg: #f4eee1; --bg-2: #eae2d0;
  --surface: #fdf9ef; --surface-2: #f0e8d7;
  --ink: #171d2e; --ink-soft: #444d63; --ink-faint: #6f7789;
  --accent: #7a5a22; --accent-ink: #fdf8ec;
  --line: rgba(23,29,46,.16);
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 2px 14px rgba(23,29,46,.10); --shadow-hard: none;
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Lora", Georgia, serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0.03;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="levant-calligraphy"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
