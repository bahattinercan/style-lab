# 92 · Museum & Thesis

> **Bir cümleyle:** Akademik tez ile müze duvar etiketinin birleşimi: 96px kenar, asılı girinti, numaralı bölümler ve 1px levha çerçeveleri.

| | |
|---|---|
| **Hissiyat** | ağırbaşlı, sessiz, kurumsal, "kâğıt üzerinde" |
| **En iyi** | müze/sergi dijital kataloğu, akademik yayın ve tez okuma, kültür kurumu arşivi, araştırma raporu |
| **Kaçın** | hızlı e-ticaret, oyun ve etkinlik vitrini, çocuk uygulaması, kampanya/indirim sayfası |
| **Zorluk** | düşük–orta (boşluğu korumak kolay; tipografi disiplinini bozmamak zor) · **Erişilebilirlik** | iyi (15.40:1 gövde, 7.91:1 accent üstü) |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="museum-thesis"]` |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Museum & Thesis iki kurumsal biçimi birleştirir: **tez** (numaralı bölüm, asılı girinti, dipnot kuralı, künye) ve **müze duvar etiketi** (1px sol kural, mono `Fig.` etiketi, kısa künye metni). Tek bir serif ailesi kullanır (EB Garamond 400/500), mono (IBM Plex Mono) yalnız etiket ve numaralarda görünür. Sayfa 96px kenarla çevrilidir; metin 66ch'i geçmez, sağda 3 kolonluk künye/kenar notu şeridi kalır.

Kazandığı şey: **okuma otoritesi**. Numaralı bölümler ve geniş kenar, metni "kaynak" gibi gösterir; künye şeridi her görsele bir referans numarası bağlar. Feda ettiği şey: **hız ve vitrin etkisi** — bu stil hiçbir şeyi "öne çıkarmaz"; kampanya, ürün lansmanı veya oyunlaştırılmış onboarding bu dilde cansız durur.

### Ne değildir
- **Editorial Design (03) değildir.** Editorial drop cap ve iki kolonlu dergi ritmiyle **anlatı** kurar (Fraunces display + Inter gövde); burada drop cap yok, **tek serif aile** (EB Garamond) ve **asılı girinti** var, ayrıca mono `Fig.` künyeleri karakterin parçası.
- **Dark Academia (33) değildir.** O stil koyu kahve-mum paleti ve altın accent ile **nostalji** kurar; burada zemin açık kâğıt (`#f4f2ec`), accent **slate mavi-gri** (`#3c4a63`) ve 1px levha çerçevesi var.
- **Luxury Typography (04) değildir.** O stil geniş tracking + seyrek yerleşimle "boş lüks" kurar (Cormorant + Jost); burada 17px gövde, 1.72 satır aralığı ve **dipnot/künye katmanı** var.
- **Utility (44) değildir.** Utility hairline + isimli metin stilleriyle **operasyonel** çalışır (Poppins, mavi accent); burada serif gövde ve müze künyesi var.
- **"Boş sayfa + serif" değildir.** Numaralı bölüm işareti, asılı girinti, `Fig.` künyesi ve levha çerçevesi olmadan bu stil sadece bej bir blogdur.

### Nereden gelir
Tez biçimi yüzyıllardır aynı işi yapar: bir iddiayı **numaralı bölümler** ve **dipnot** ile zincirlemek. Müze duvar etiketi ise nesneyi **en kısa üç satırda** künyelemek zorundadır (eser, dönem, envanter no). Dijitalde ikisi 2015'lerden sonra birleşti: kültür kurumları, araştırma arşivleri ve akademik yayıncılar uzun okumayı ekranda tutmak için bu disiplini kullanıyor; nedeni ölçülebilir — geniş kenar + 1.72 satır aralığı okuma hızını düşürüp anlamayı artırır.

Klişeye düşmemesi için korunması gereken detay: **geniş kenar ve tek serif aile**. Kenarı 40px'e indirmek, ikinci bir accent eklemek veya görsel çerçevesini kalınlaştırmak stili "kurumsal blog"a çevirir.

### 3 saniyede tanıma testi
1. Sayfa çevresinde **96px kenar** var mı; metin 66ch'i geçmiyor mu?
2. Bölüm başlıklarının önünde **mono `1.` / `1.1`** numarası duruyor mu?
3. Paragraflar **asılı girintili** mi (ilk satır dışarıda, devamı 2em içeride)?
4. Görseller **1px levha çerçevesi** ve altında `Fig.` etiketli künye taşıyor mu?
5. Tek serif aile mi (EB Garamond), mono yalnız etiketlerde mi; accent slate ve ekranın ≤ %7'sinde mi?

## Görsel imza
1. **Geniş kenar:** bölüm çevresi 96px (mobil 56px); nav padding `0 96px`; metin sütunu 7/12 kolon.
2. **Numaralı bölüm:** `h2::before` mono 11px `data-sec` değeri (`1.`, `1.1`), accent, 12px sağ boşluk.
3. **Asılı girinti:** gövde paragrafı `padding-left: 2em; text-indent: -2em`; lede bu kuralın dışında (temiz blok).
4. **Dipnot kuralı:** 40×1px `--ink` çizgi; dipnot/kaynakça başlığından önce.
5. **Levha çerçevesi:** kart ve görsel `1px solid var(--line)`, radius 0, gölge yok; görselde 4px iç boşluk (`padding: 4px`).
6. **Duvar etiketi/künye:** 1px sol kural + 14px boşluk + 14px/1.5 `--ink-soft` metin, mono `Fig.` öneki accent.
7. **Kenar notu şeridi:** sağda 1px dikey kural + 96px genişlik; künye notları mono 11px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f2ec` | Sayfa zemini (kâğıt) | Kart içi |
| `--bg-2` | `#ebe8df` | Künye şeridi, alt bilgi | Geniş bölüm dolgusu |
| `--surface` | `#fbfaf6` | Levha, kart, modal | Sayfa zemini |
| `--surface-2` | `#e6e2d8` | Tablo başlığı, hover satır | Metin arkası |
| `--ink` | `#191b1f` | Başlık, gövde, dipnot kuralı | Accent zemin üstü |
| `--ink-soft` | `#4c515a` | Künye, lede, ikincil metin | 12px altı etiket |
| `--ink-faint` | `#787e88` | Kenar notu, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#3c4a63` | Bölüm numarası, `Fig.` etiketi, birincil buton | Gövde metni |
| `--accent-ink` | `#f4f1e8` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(25,27,31,.16)` | Levha çerçevesi, künye kuralı, tablo çizgisi | Metin |

- Ölçülen kontrast: `ink / bg` = **15.40:1** · `ink-soft / bg` = **7.13:1** · `accent-ink / accent` = **7.91:1** · `ink-faint / bg` = **3.65:1** (yalnız dekoratif).
- Tek vurgu kuralı: slate accent ekranın **≤ %7**'si; dönem/eser etiketleri renkle değil mono etiketle ayrılır.
- Yasak kombinasyon: accent zemin + `--ink-soft`; `--ink-faint` + `--surface-2` (3.0:1); ikinci accent (altın/bordo).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | EB Garamond | 38px (mobil 28px) | 500 | 1.14 | -0.005em |
| H2 | EB Garamond | 25px | 500 | 1.2 | 0 |
| H3 | EB Garamond | 18px | 500 | 1.34 | 0 |
| Gövde | EB Garamond | 17px | 400 | 1.72 | 0 |
| Lede | EB Garamond | 17px | 400 | 1.72 | 0 (52ch) |
| Künye / caption | EB Garamond | 14px | 400 | 1.5 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.45 | 0.1em |

- Ölçek oranı ≈ 1.45 (17 → 25 → 38); kullanılan basamak sayısı 7 (11/12/14/17/18/25/38).
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.2vw, 38px) }`.
- Gövde metni maksimum satır uzunluğu: **66ch**; lede 52ch.
- Ağırlık kuralı: yalnız 400/500; 600+ serif bu stilde "afiş" hissi verir ve yasaktır. İtalik yalnız eser adlarında (`title` stilleri) kullanılır.
- 14px altı gövde metni yok: künye 14px, mono etiket 11px — bu ikisinin altına inilmez.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (metin 7, künye/kenar notu 3, sol kenar 2) |
| Gutter | 28px |
| Container genişliği | 1100px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 900px altında kenar 24px, asılı girinti 1.2em, kenar şeridi gizlenir |

- Asimetri kuralı: metin her zaman solda 7 kolonda; kenar notu şeridi sağda. Ekran başına en fazla 1 tam genişlik levha.
- Bölüm ritmi: art arda en fazla **3** blok aynı hizada; dördüncüde dipnot kuralı veya yeni numaralı bölüm.
- Bölüm dikey boşluk 96px (mobil 56px); kart padding 24px; levha ile künye arası 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, künye şeridi |
| Levha | `--surface` + 1px `--line` | `none` | Kart, görsel çerçevesi, tablo paneli |
| Yüzen katman | `--surface` + `--shadow` | `0 1px 3px rgba(25,27,31,.07)` | Modal, dropdown (nadiren) |

- Kenarlık formülü: `1px solid var(--line)`; tablo başlığı altı `1px solid var(--ink)` (tek istisna, künye kuralı).
- Derinlik nereden gelir: **kâğıt katmanı ve geniş kenar**; gölge yalnız yüzen katmanda.
- Radius: `--radius` 0px (kart, buton, input, levha) · `--radius-lg` 2px (yalnız modal). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 18px | 0px | 11px/400 mono, .09em | `--accent` / `--accent-ink`, gölge yok | hover %92 460ms · active opacity .9 · focus 1px accent + 2px offset · disabled opacity .45 kesikli · loading mono 3 nokta 900ms |
| Buton (ikincil) | 44px | 12px 18px | 0px | 11px/400 mono | şeffaf / `--ink`, 1px `--line` | hover kenar `--ink` · focus aynı |
| Input | 46px | 0 12px | 0px | 17px/400 EB Garamond | şeffaf + 1px `--line` | focus 1px accent + 2px offset · filled aynı · error `--danger` + açıklama · disabled opacity .45 |
| Kart / levha | — | 24px | 0px | H3 EB Garamond 18px | `--surface` + 1px `--line`, gölge yok | hover: kenar `--ink-faint` |
| Görsel levhası | — | 4px (iç) | 0px | künye 14px | 1px çerçeve + 4px iç boşluk | künye her zaman `Fig.` etiketli |
| Chip / badge | 22px | 0 7px | 0px | 10px/400 mono, .09em | şeffaf + 1px `--line` | accent varyantı dolu (dönem etiketi) |
| Nav | 64px | 0 96px | 0 | marka EB Garamond 19px + mono 11px | `--bg` + alt 1px `--line` | aktif: 1px accent alt çizgi; pasif `--ink-soft` |
| Tablo satırı | 40px | 10px 12px | 0 | 15px/400 EB Garamond; envanter no mono | alt 1px `--line`, başlık altı 1px `--ink` | hover `--surface-2` · seçili: sol 1px accent |
| Modal / sheet | — | 32px | 2px | H2 EB Garamond 25px | `--surface` + `--shadow` | başlıkta mono bölüm numarası |
| Toast | 44px | 12px 16px | 0px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 1px accent dikey kural, 4200ms |
| Grafik paleti | — | — | — | eksen 10.5px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; 1px çizgi, nokta yok |

- Odak halkası: `outline: 1px solid var(--accent); outline-offset: 2px` — 1px + 2px offset, kâğıt diline uyar; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -3px.
- Dokunma hedefi: en az 44×44px; mono etiketler 11px olsa da bağlantı sarmalayıcısı 44px yüksekliğe tamamlanır.
- Asılı girinti yalnız gövde paragrafında; tablo hücresi, künye ve buton metninde kullanılmaz.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, kare uç, 20px ızgara; dolu ikon yok |
| Fotoğraf | Eser/levha fotoğrafı 1:1.4 veya 4:3, 1px çerçeve + 4px iç boşluk; renk düzeltmesi yok |
| İllüstrasyon | Yok — şema gerekirse yalnız 1px çizgi diyagram + mono etiket |
| Doku | `--grain: .025` kâğıt; görünmez |
| Logo alanı | Serif kelime markası (EB Garamond 500), 24px güvenli boşluk; işaret/monogram yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | düşük | 38px başlık, 96px kenar, sağda künye şeridi | `shots/01-landing.png` |
| Dashboard | düşük | Levha kartları + künye alt metni; mono envanter no | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, 1px kenar, 1px odak halkası | — |
| Liste / tablo | orta | 40px satır: dönem, eser, envanter no, künye | — |
| Boş durum | düşük | Tek cümle + `Fig.` yer tutucusu + 1 buton | — |
| Onboarding | düşük | 3 numaralı adım (1. / 2. / 3.); ilerleme çizgi değil numara | — |
| Pricing | orta | 3 levha; önerilen sütunda 1px accent üst kural | — |
| Giriş / ödeme | çok düşük | Süs sıfır; alan + tek accent buton | — |
| Modal | orta | 32px padding, mono bölüm numarası başlığı | — |
| Bildirim / toast | orta | Koyu zemin + 1px accent kural, 4200ms | — |
| Hata | düşük | `--danger` kenar + açıklama; `Fig.` kullanılmaz | — |
| Profil / ayar | orta | İki kolon: mono etiket + serif değer, 1px cetvel | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — levha (plate) — geniş kenar, künye bloğu, asılı girintili satırlar.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 160ms | `ease-out` | `opacity: .92` (konum kaymaz) |
| Geçiş / sayfa | 460ms | `cubic-bezier(.35,.02,.28,1)` | `opacity` + `translateY(4px)` |
| Giriş (enter) | **1100ms** | `cubic-bezier(.35,.02,.28,1)` | `opacity` + `translateY(20px)`, **stagger 110ms** |
| Kaydırma (scroll) | **1150ms** | `cubic-bezier(.35,.02,.28,1)` | trigger **`top 77%`**, offsetY **18px**, `once: true` |
| Hover | **460ms** | `ease-out` | görsel ölçek **1.004** (neredeyse sabit) |
| Pin | açık | `scrub 0.8` | levha sabitlenir, mesafe **+95%** |
| Ödül / vurgu | 720ms | `cubic-bezier(.35,.02,.28,1)` | dipnot kuralı `scaleX(0→1)`, tek atım |

- İmza ölçüsü: enter **1.1s / 20px / stagger 0.11** · scroll **1.15s / `top 77%` / 18px** · hover **460ms / 1.004** · pin **açık (scrub 0.8 / +95%)** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, levha statik kalır.
- Bu stile yasak hareket: parallax, sürekli döngü, spring/bounce, harf harf animasyon.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f2ec` | `#14161a` |
| `--bg-2` | `#ebe8df` | `#191c21` |
| `--surface` | `#fbfaf6` | `#1e2228` |
| `--surface-2` | `#e6e2d8` | `#262b33` |
| `--ink` | `#191b1f` | `#e9e7e0` |
| `--ink-soft` | `#4c515a` | `#b6b9bf` |
| `--ink-faint` | `#787e88` | `#8b9099` |
| `--accent` | `#3c4a63` | `#9fb0c9` |
| `--accent-ink` | `#f4f1e8` | `#14161a` |
| `--line` | `rgba(25,27,31,.16)` | `rgba(233,231,224,.16)` |

- Koyu mod **gece salonu**dur: zemin `#14161a`, levhalar `#1e2228`; accent açılır (`#9fb0c9`) çünkü slate koyu zeminde çerçeveyle karışır.
- Dipnot kuralı koyuda `--ink` yerine `--ink-soft` (#b6b9bf) kullanır — 1px çizgi koyu zeminde yeterince görünür, saf beyaz fazla sert olur.
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **14.64:1** · `ink-soft/bg` = **9.21:1** · `accent-ink/accent` = **8.22:1** · `ink-faint/bg` = **5.65:1**.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **-:1** açık / **-:1** koyu · `--warn / bg` = **-:1** / **-:1** · `--ok / surface` = -:1 / -:1 (warn) · devre dışı buton metni = **6.53:1** / **8.03:1** · ghost buton kenarı = **3.73:1** / **5.17:1** (eşik 3:1).

## Zorunlu kurallar

1. **Geniş kenar:** bölüm çevresi 96px (mobil 56px); metin 7 kolonda, 66ch'i geçmez.
2. **Numaralı bölüm:** her h2 bir mono numara taşır (`1.`, `1.1`); numarasız bölüm başlığı yok.
3. **Asılı girinti:** gövde paragrafı 2em asılı; dipnot kuralı 40×1px.
4. **Künye zorunlu:** her görsel/kart bir `Fig. N` etiketi ve 1–2 cümlelik künye taşır.
5. **Levha çerçevesi:** 1px `--line`, radius 0, gölge yok; görselde 4px iç boşluk.
6. **Tek serif + mono:** EB Garamond (400/500) ve IBM Plex Mono (yalnız etiket/numara).

## Yasaklar

- Sans display, 48px üstü başlık, afiş ölçeği.
- Gradient, blur, cam yüzey, renkli gölge.
- 2px üstü radius, kart gölgesi, çift çerçeve.
- İkinci accent (altın/bordo), renkli dönem rozetleri.
- Ortalanmış gövde metni; tez metni sola dayalıdır.
- Süs illüstrasyonu, emoji, dolu ikon, drop cap.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.65:1** (açık tema). `--ink-faint` yalnız kenar notu ve dekoratif mono etiket; etkileşimli metin, form etiketi veya künye metni olamaz (künye `--ink-soft`, 7.13:1).
- 17px gövde + 1.72 satır aralığı uzun okuma için ölçülü; 14px altı gövde metni yok.
- Mono etiketler 11px: yalnız büyük harf/rakam ve kısa metin; uzun cümle mono ile yazılmaz.
- Hareket/parlama hassasiyeti: düşük ama **yavaş** (1.1s); `prefers-reduced-motion` açıkken pin/scrub kapanır, tüm süreler 0.01ms.
- Şeffaf yüzey yok (`--blur: 0`), `@supports` fallback gerekmez; `color-mix` yok denecek kadar az (yalnız buton hover).
- Odak görünürlüğü: 1px halka ince kalır → `outline-offset: 2px` ve `--accent` (7.91:1) ile zemin üstünde net; accent butonda halka `--accent-ink`, offset -3px.

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
| "Kurumsal blog" gibi duruyor | kenar 40px'e inmiş, gölge eklenmiş | 96/56px kenar + gölgesiz levha çerçevesi |
| Metin blok hâlinde ağır | asılı girinti ve lede ayrımı yok | Gövdeye `text-indent: -2em`, lede'yi hariç tut |
| Görseller "yüzen kart" olmuş | radius + gölge eklenmiş | Radius 0, 1px çerçeve, 4px iç boşluk |
| Accent her yerde | dönem etiketleri renklenmiş | Etiketi mono metne çevir; accent yalnız numara/`Fig.`/birincil buton |
| Bölümler karışıyor | numaralandırma yok | `data-sec` ile `1.` / `1.1` numarası ver |
| Koyu modda çerçeveler kayboluyor | `--line` çok düşük | Koyu bloğun `rgba(233,231,224,.16)` değerini kullan |

## Komşu stiller

- **Uyumlu:** `editorial-design` — uzun makale gövdesini editorial üstlenebilir; künye ve levha çerçevesi bu stilde kalır.
- **Uyumlu:** `dark-academia` — okuma atmosferi ortak; dark-academia yalnız gece okuma modunda, paleti ezmeden kullanılır.
- **Uyumlu:** `luxury-typography` — serif display dili ortak; lüks stil yalnız kapak/afiş katmanında.
- **Yasak:** `neo-brutalism` — kalın kenar ve sert gölge kâğıt levha dilini kırar.
- **Yasak:** `memphis` — canlı renk ve desen kurumsal sessizliği yok eder.
- **Yasak:** `dopamine-ui` — doygun bloklar ve mikro ödül animasyonu tez ritmini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Thesis | bölüm numaralandırma, dipnot ve künye düzeni |
| https://en.wikipedia.org/wiki/Museum_label | duvar etiketi hiyerarşisi (eser, dönem, envanter no) |
| https://www.getty.edu/ | levha çerçevesi, künye ve kenar boşluğu oranları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | 17px gövde ve künye metni kontrast ölçümü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Museum & Thesis (styles/92-museum-thesis/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="museum-thesis"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: tek serif aile EB Garamond (display 500 / govde 400 17px-1.72, <= 66ch), mono IBM Plex Mono 11px .1em
  yalniz etiket ve bolum numarasinda. Sans display ve 48px ustu baslik yasak.
Yuzey: golge YOK (yalniz yuzende var(--shadow)); kart/levha 1px var(--line), radius 0 (modal 2px).
  Gorsel levhasi: 1px cerceve + 4px ic bosluk + altinda "Fig. N" kunyesi (1px sol kural, 14px metin).
Yerlesim: 96px kenar (mobil 56px), metin 7/12 kolon, sagda 3 kolon kunye seridi, asili girinti 2em,
  dipnot kurali 40x1px. Bolum basligi mono numara tasir (1. / 1.1).
Renk: kagit #f4f2ec + murekkep #191b1f + tek accent slate #3c4a63 (ekranin <= %7'si).
Hareket: enter 1100ms cubic-bezier(.35,.02,.28,1) 20px stagger 110ms; scroll top 77% / 1150ms / 18px / once;
  pin acik scrub 0.8 +95%; hover 460ms imageScale 1.004. prefers-reduced-motion zorunlu.
Yasak: sans display, 48px ustu baslik, gradient/blur, 2px ustu radius, kart golgesi, ikinci accent,
  ortalanmis govde, drop cap, emoji.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (geniş kenar + numaralı bölüm + `Fig.` künyesi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.40:1), accent üstü ≥ 4.5:1 (7.91:1).
- [ ] Odak halkası görünür (1px + 2px offset), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; asılı girinti korunuyor.
- [ ] `prefers-reduced-motion` açıkken hareket ve pin duruyor.

## Token

```css
[data-style="museum-thesis"] {
  --bg: #f4f2ec; --bg-2: #ebe8df;
  --surface: #fbfaf6; --surface-2: #e6e2d8;
  --ink: #191b1f; --ink-soft: #4c515a; --ink-faint: #787e88;
  --accent: #3c4a63; --accent-ink: #f4f1e8;
  --line: rgba(25,27,31,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 1px 3px rgba(25,27,31,.07); --shadow-hard: none;
  --font-display: "EB Garamond", Georgia, serif;
  --font-body: "EB Garamond", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0.025;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="museum-thesis"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
