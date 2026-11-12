# 47 · Trading Desk

> **Bir cümlede:** Fiyatın ve pozisyonun tek bakışta okunduğu, amber vurgulu grafit zeminde 24px satırlarla akan emir defteri arayüzü.

| | |
|---|---|
| **Hissiyat** | gergin, kesin, hızlı, soğukkanlı |
| **En iyi** | trading/finans terminali, emir defteri, portföy izleme, kripto borsa paneli |
| **Kaçın** | lüks marka vitrini, sağlık/kamu formu, çocuk ürünü — sürekli sayı ve keskin kontrast yorar |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (en düşük etkileşimli çift 9.07:1; renk yönü tek başına taşımıyor) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `kit/tokens.css` → `[data-style="trading-desk"]` |
| **Kompozisyon** | `split` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Trading Desk, ekranı bir **işlem masası** gibi böler: üstte fiyat ve pozisyon, altında emir defteri ve grafik, en üstte kayan ticker bandı. Kurucu kararları üç tanedir. Birincisi **24px satır**: her satır aynı yükseklikte, rakamlar tabular, ondalık basamak sembole göre sabit; göz sütun boyunca kaymadan iner. İkincisi **tek sıcak vurgu**: grafit zeminin üstünde yalnız amber (`--accent`) dikkat çeker; alış/satış anlamı `--ok`/`--danger` ile ayrı bir kanaldan gelir. Üçüncüsü **gölgesiz katman**: derinlik yalnız zemin tonu ve 1px hairline ile kurulur, çünkü gölge veri yoğun ekranda kontrast kaybı üretir.

Bedeli: bu arayüz sakin değildir ve uzun okuma için uygun değildir. Kazancı: saniyede birkaç karar veren kullanıcı için **hiza disiplini** — 24px satır, sabit ondalık, 8px gutter, 2px radius.

### Ne değildir
- **Terminal UI (45) değildir:** 45 karakter ızgarası ve tek mono ailedir; burada gövde Space Grotesk, rakam JetBrains Mono, başlık Rajdhani — üç aile üç iş.
- **Telemetry Grid (46) değildir:** 46 açık zeminli, 96px tile'lı ve durum-eşik odaklıdır; 47 koyu zeminli, 24px satırlı ve fiyat odaklıdır (asimetri kalıcı 5/4/3).
- **Cyberpunk (22) değildir:** 22'de neon çok renk ve parlaklık vardır; 47'de tek sıcak vurgu, sıfır parlama, sıfır blur.
- **Executive KPI (48) değildir:** 48 vitrin dilidir (serif, 64px rakam, geniş boşluk); 47 operasyon dilidir (26px rakam, 8px padding, dar boşluk).

### Nereden gelir
1980'lerde Bloomberg ve Reuters dealing terminal'lerinin monokrom amber ekranlarından; bugün kripto borsalarının (order book + depth chart) ve profesyonel tradingView tarzı panellerin dili. Amber'in nedeni tarihseldir (monokrom CRT fosforu) ama işlevseldir: sıcak tek renk, soğuk veri grisinin içinde hızlı hedef olur. Klişeye dönüşmemesi için korunacak detay: **24px satır yüksekliğinin kırılmaması** ve yön kodunun renkten bağımsız da yazılması.

### 3 saniyede tanıma testi
1. Ekranın ortasında iki yana yaslanmış bir emir defteri var: solda alış, sağda satış, arada derinlik çubuğu.
2. Tüm sayılar mono ve ondalık hizası bozulmuyor; satırlar 24px.
3. En üstte soldan sağa akan 28px ticker bandı: sembol + fiyat + ▲/▼ yüzde.
4. Kartlar neredeyse kare (2–4px radius), gölge yok; ayrım yalnız 1px hairline.
5. Tek sıcak renk amber; gerisi grafit grisi + alış yeşili / satış kırmızısı.

## Görsel imza
- **24px satır ızgarası:** tablo satırı, emir defteri satırı ve ticker satırı aynı 24px yükseklikte; 8px gutter, 8px panel padding.
- **Amber tek vurgu:** `--accent #f2a33c`, yalnız aktif sekme, birincil eylem ve odak halkasında; metin üstünde `--accent-ink #171002` (9.07:1).
- **Derinlik çubuğu:** satır arka planında `linear-gradient(90deg, color-mix(...) 0 N%, transparent N%)`; alışta `--ok`, satışta `--danger`, opaklık %14.
- **Yön üçlüsü:** ▲/▼ işareti + renk + metin (`ALIŞ`/`SATIŞ`); ekran görüntüsü siyah-beyaz basılsa da yön okunur.
- **Ticker bandı:** 28px yükseklik, 12 sembol, 8 saniyede bir tek satır kayma (yalnız `transform`), hover'da durur.
- **Kart köşesi:** `--radius` 2px, `--radius-lg` 4px; hiçbir yüzeyde 4px üstü yuvarlaklık yok.
- **Hover dili:** 70ms'de zemin `--surface-2`'e kayar, görsel ölçek yalnız `1.004`; gölge/parlaklık artışı yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#101418` | sayfa zemini, panel dışı alan | kart zemini |
| `--surface` | `#161d23` | panel, kart, grafik zemini | sayfa zemini |
| `--surface-2` | `#1c242b` | satır zebra, ikincil buton, ticker bandı | birincil eylem |
| `--ink` | `#e8eef2` | fiyat, başlık, ana metin | devre dışı |
| `--ink-soft` | `#9fb3bf` | etiket, eksen, ikincil metin | fiyat rakamı |
| `--ink-faint` | `#6f8593` | yalnız dekoratif: ayırıcı ipucu, dipnot | etkileşimli metin |
| `--accent` | `#f2a33c` | aktif sekme, birincil buton, odak halkası | alış/satış anlamı |
| `--accent-ink` | `#171002` | accent üstü metin | gövde metni |
| `--line` | `rgba(232,238,242,.14)` | panel kenarı, satır ayırıcı | metin rengi |
| `--ok` / `--danger` / `--warn` | `#35d07f` / `#ff7a6b` / `#e8d05a` | alış / satış / uyarı; derinlik çubuğu ve ▲▼ | dekorasyon, marka rengi |

- Ölçülen kontrast (varsayılan zemin): `ink / bg` = **15.80:1** · `ink-soft / bg` = **8.52:1** · `accent-ink / accent` = **9.07:1** · `ink-faint / bg` = **4.80:1**.
- Tek sıcak vurgu kuralı: amber yalnız "şu an buradasın / bunu bas" anlamında; fiyat artışını amber ile göstermek yasak (o `--ok`'un işi).
- Yasak kombinasyon: amber zemin üstüne `--ink-soft` metin; kırmızı-yeşil ikilisini işaretsiz kullanmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rajdhani (`--font-display`) | 36px (mobil 24px) | 600 | 1.1 | `--tracking` 0.015em |
| H2 | Rajdhani | 20px | 600 | 1.24 | 0.015em |
| H3 | Rajdhani | 16px | 600 | 1.3 | 0.015em |
| Fiyat / KPI | JetBrains Mono (`--font-mono`) | 26px | 500 | 1.05 | -0.01em |
| Gövde | Space Grotesk (`--font-body`) | 14px | 400 | 1.48 | 0 |
| Tablo / emir satırı | JetBrains Mono | 13px | 400–500 | 24px sabit | 0 |
| Etiket / mono | JetBrains Mono | 11px | 500 | 1.2 | 0.1em (büyük harf) |

- Ölçek oranı **1.25** (11 → 14 → 20 → 36 arasında yalnız 5 basamak kullanılır: 11/13/14/20/36).
- Ölçü: `h1 { font-size: clamp(24px, 3vw, 36px) }`.
- Gövde metni maksimum satır uzunluğu: **58 ch** (dar ölçü, çünkü ekranın çoğu tablo).
- Ağırlık kuralı: 400 / 500 / 600. Rajdhani'de 700 yasak — fiyat ile başlık aynı kalınlığa gelirse hiyerarşi kaybolur.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1360px üstü), 8 (768–1359), 4 (390–767) |
| Gutter | 8px — panel arası boşluk asla 16px'i geçmez |
| Container genişliği | 1440px (kenar 8px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1360px: 5/4/3 kalıcı asimetri; 768px: emir defteri tam, grafik altına iner; 390px: yalnız fiyat + pozisyon, defter sekmeye taşınır |

- Asimetri kuralı: **kalıcı** — ana defter 5 kolon, grafik 4 kolon, pozisyon tablosu 3 kolon; ekran başına bu oran değişmez.
- Bölüm ritmi: art arda en fazla **2** panel satırı; üçüncü satır ya grafik ya ticker bandıdır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, boşluk |
| Panel | `--surface` | yok | defter, grafik, pozisyon |
| Yüzen katman | `--surface` + `--shadow` | `none` (yalnız 1px `--accent` kenar) | onay modalı, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; aktif panelde `1px solid var(--accent)` (kalınlık artmaz).
- Derinlik nereden gelir: **hiçbir yerden** — yalnız zemin tonu (`--bg` → `--surface` → `--surface-2`) ve fiyat değişiminde 220ms'lik zemin flash'ı.
- Radius: `--radius` 2px (buton, input, çip), `--radius-lg` 4px (panel, modal); 4px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 28px | 0 10px | `--radius` | 12px/600 Rajdhani, .08em, büyük harf | accent + accent-ink, gölge yok | hover %92 ton · active 1px aşağı · focus 2px halka · disabled %40 kesikli · loading 3 nokta 600ms steps(3) |
| Buton (ikincil) | 28px | 0 10px | `--radius` | 12px/600 Rajdhani | surface-2 + `--line` | hover `--surface` |
| Input | 28px | 0 8px | `--radius` | 13px mono tabular | surface + `--line` | focus 2px accent · error `--danger` + `!` · disabled %40 |
| Kart (panel) | — | 8px | `--radius-lg` | başlık 11px mono büyük harf | surface + `--line` | canlı LED (ok) · duraklatılmış (warn) · bağlantı yok (danger, kesikli kenar) |
| Chip | 18px | 0 5px | `--radius` | 11px/500 mono | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 44px (+28px ticker) | 0 12px | 0 | 12px mono | surface + alt çizgi | aktif: amber alt çizgi 2px |
| Tablo satırı | 24px | 0 8px | 0 | 13px mono, sağa dayalı sayı | zebra surface / surface-2 | hover surface-2 · seçili sol 2px accent · yeni tick 220ms flash |
| Modal | — | 12px | `--radius-lg` | başlık 16px Rajdhani | surface + 1px accent kenar | açılış 220ms · onay `--danger` · Esc kapatır |
| Toast | 26px | 0 8px | `--radius` | 12px mono | surface-2 + sol 2px durum şeridi | 2500ms · 4 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | ok → danger → accent → ink-soft | en çok 4 seri · mum 3px gövde, 1px fitil |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px` — 1px offset, çünkü panel kenarı ile halka arasında boşluk yok.
- Dokunma hedefi: 28px butonlar mobilde 44px'e yükselir (görsel yükseklik 32px + 6px dikey padding).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | yalnız ▲▼ ve 12px çizgi işlev ikonu; dekoratif ikon yok |
| Fotoğraf | yok |
| İllüstrasyon | yok — boş alan grafik, derinlik çubuğu veya sayı ile doldurulur |
| Doku | yok (`--grain: 0`); diyagonal şerit yalnız ticker bandında, accent %7 |
| Logo alanı | 12px Rajdhani büyük harf kelime markası + 5px amber nokta; çevresinde 12px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | ticker bandı + 5/4/3 asimetri + canlı defter önizlemesi | `shots/01-landing.png` |
| Dashboard | yüksek | üstte fiyat/pozisyon, altta defter + mum grafik | `shots/02-dashboard.png` |
| Form | düşük | emir formu: sembol, miktar, tip; 28px alanlar, mono | — |
| Liste / tablo | yüksek | pozisyon tablosu 24px satır, zebra, ▲▼ | — |
| Boş durum | orta | "pozisyon yok" + tek CTA; boş defter iskeleti kalır | — |
| Onboarding | yüksek | 3 adım: hesap → risk limiti → ilk emir; her adımda gerçek defter | — |
| Pricing | orta | komisyon tablosu 24px satır | — |
| Giriş / ödeme | çok düşük | dar giriş kartı, 2FA alanı mono | — |
| Modal | orta | emir onayı: 4 satır mono özet + tek tehlike butonu | — |
| Bildirim / toast | orta | dolum/iptal, sağ alt, 2500ms | — |
| Hata | düşük | "bağlantı yok" bandı + yeniden bağlan; veriler soluk ama okunur | — |
| Profil / ayar | orta | risk limiti, kısayol tuşları, iki kolon | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 220ms | `cubic-bezier(.4,0,.1,1)` | `opacity` + `translateY(4px)`, satır başına 15ms stagger |
| Scroll reveal | 260ms | `cubic-bezier(.4,0,.1,1)` | `top 92%` tetiği, 6px, `once: true` |
| Basma | 70ms | `cubic-bezier(.4,0,.1,1)` | `translateY(1px)` |
| Hover | 70ms | `cubic-bezier(.4,0,.1,1)` | zemin `--surface-2`, görsel ölçek `1.004` |
| Fiyat flash | 220ms | `linear` | hücrede `--ok`/`--danger` %14 zemin → 0 |
| Pin / scrub | açık | `scrub 0.35` | grafik bölümü `+70%` mesafe sabitlenir, mum ekseni kaydırılır |

- Ölçülebilir imza: `enter 0.22s / cb(.4,0,.1,1) / 4px / 0.015` · `scroll top 92% / 0.26s / 6px / once:true` · `pin açık scrub 0.35 / +70%` · `hover 70ms / 1.004`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, fiyat flash'ı kapanır, ticker kayması durur (veri güncellenmeye devam eder).
- Bu stile yasak hareket: yumuşak ease-out, blur geçişi, sürekli nabız, sayaç yuvarlanması.

## Koyu mod

Bu stilin varsayılan zemini zaten koyudur (dealing room); `data-theme="dark"` bloğu daha da derin bir "gece masası" verir: zemin bandı 5 puan aşağı iner, kart bandı 5 puan yukarı çıkar (ölçülen ΔL −13), accent bir kademe parlar.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#101418` | `#05070a` |
| `--bg-2` | `#151b20` | `#080d12` |
| `--surface` | `#161d23` | `#0c131a` |
| `--surface-2` | `#1c242b` | `#131c26` |
| `--ink` | `#e8eef2` | `#f2f7f9` |
| `--ink-soft` | `#9fb3bf` | `#a8bcc7` |
| `--accent` | `#f2a33c` | `#ffbd6b` |
| `--accent-ink` | `#171002` | `#1a1104` |

- Koyu modda değişen başka ne var: emir defteri satır çizgileri `--ink` %16 → %20, bid/ask işaretleri aynı kalır; `--line` opaklığı .16 → .18. Ölçüm: `ink/bg` 18.37:1, `accent-ink/accent` 10.59:1.

## Zorunlu kurallar
- Satır yüksekliği 24px; tablo, defter ve ticker aynı ritmi kullanır.
- Her sayı mono + `tabular-nums`; ondalık basamak sembole göre sabit ve değişmez.
- Yön daima üç kanaldan: ▲/▼ + renk + metin.
- Panel padding 8px, gutter 8px; radius en fazla 4px.
- Kalıcı asimetri 5/4/3 (defter/grafik/pozisyon) korunur.
- Ticker en fazla 12 sembol, 8 saniyede bir kayar; hover'da durur.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Yuvarlak kart, yumuşak gölge, `backdrop-filter` blur, cam yüzey.
- Gradient zemin veya gradient metin.
- Dekoratif illüstrasyon, büyük fotoğraf, emoji.
- Renk dışında kod taşımayan alış/satış gösterimi.
- Sürekli nabız atan gösterge, sayaç yuvarlanması, yumuşak ease-out.
- Ondalık basamağı değişen fiyat; birimsiz hacim.
- Uydurma fiyat/sembol; eksik veri `{{price}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **4.80:1** (dekoratif dipnot); etkileşimli metin `--ink` 15.80:1 ve `--ink-soft` 8.52:1.
- Renk körlüğü: kırmızı/yeşil ayrımı ▲/▼ ve metinle desteklenir; derinlik çubuğu opaklık farkıyla da okunur.
- Hareket/parlama: ticker 8 saniyede bir tek satır, flash %14 opaklıkla sınırlı; `prefers-reduced-motion` ikisini de kapatır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: koyu zeminde amber halka 9.07:1 — panel içinde `outline-offset: 1px`, satır içi butonlarda 2px.

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
| Sayılar sütun boyunca kayıyor | orantılı rakam veya farklı ondalık | `tabular-nums` + sembol başına sabit ondalık |
| Panel "oyuncak" görünüyor | radius 8px üstü veya gölge eklenmiş | 2/4px'e indir, gölgeyi sil |
| Emir defteri okunmuyor | derinlik çubuğu %14'ün üstünde | opaklığı %10–14 aralığında tut |
| Renk körü kullanıcı yönü kaçırıyor | yalnız renk kodu | ▲/▼ + `ALIŞ`/`SATIŞ` metni zorunlu |
| Ticker göz yoruyor | sürekli kayma veya 12'den fazla sembol | 8s aralık, hover'da dur, sembol sayısını 12'de tut |
| Ekran "terminal" gibi okunuyor | gövde metni de mono | gövde Space Grotesk, mono yalnız sayı/etiket |

## Komşu stiller

- **Uyumlu:** `telemetry-grid` — aynı veri yoğunluğu; sistem sağlığı paneli 46, fiyat paneli 47 olur.
- **Uyumlu:** `terminal-ui` — klavye önceliği ve hizalama disiplini ortak; CLI dokümanı 45'ten alınır.
- **Uyumlu:** `scandinavian-dark` — koyu zemin + tek sıcak vurgu aynı ışık fiziğinde.
- **Yasak:** `claymorphism` — şişkin yüzey ve yumuşak gölge satır hizasını bozar.
- **Yasak:** `frutiger-aero` — parlak cam ve gradient, dealing room kontrastını yok eder.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.bloomberg.com/professional/products/bloomberg-terminal/ | yoğun panel düzeni, klavye önceliği, amber vurgu |
| https://en.wikipedia.org/wiki/Order_book | bid/ask merdiveni ve derinlik gösterimi |
| https://www.tradingview.com/support/solutions/43000502610-chart-types/ | mum gövde/fitil oranı, hacim yerleşimi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | grafik çizgisi ve derinlik çubuğu için 3:1 eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Trading Desk (styles/47-trading-desk/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="trading-desk"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Rajdhani) başlıkta, --font-body (Space Grotesk) gövdede,
           --font-mono (JetBrains Mono) TÜM sayılarda — tabular-nums zorunlu.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 2px/4px; gölge YOK, ayrım 1px --line.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; satır yüksekliği 24px.
Izgara: kalıcı asimetri 5/4/3, gutter 8px, panel padding 8px.
Hareket: enter 0.22s cubic-bezier(.4,0,.1,1) 4px / stagger 0.015; scroll top 92% 0.26s 6px once:true;
         pin açık scrub 0.35 / +70%; hover 70ms scale 1.004. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradient, yuvarlak kart, renk-only yön kodu).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (24px satır, derinlik çubuğu, ticker, amber tek vurgu).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1, grafik çizgisi ≥ 3:1.
- [ ] Yön (alış/satış) renk + işaret + metinle yazılı.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken ticker ve flash duruyor.

## Token

```css
[data-style="trading-desk"] {
  --bg: #101418; --bg-2: #151b20;
  --surface: #161d23; --surface-2: #1c242b;
  --ink: #e8eef2; --ink-soft: #9fb3bf; --ink-faint: #6f8593;
  --accent: #f2a33c; --accent-ink: #171002;
  --line: rgba(232,238,242,.14);
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.015em; --blur: 0px; --grain: 0;
  --danger: #ff7a6b; --danger-ink: #260a05; --ok: #35d07f; --warn: #e8d05a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="trading-desk"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
