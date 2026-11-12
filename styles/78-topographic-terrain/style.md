# 78 · Topografya & Arazi

> **Bir cümlede:** Araziyi pafta gibi okuyan arayüz: sıcak harita kâğıdı zemin, eş yükselti halkaları, 1px pafta çerçevesi ve her ölçünün birim taşıdığı düz, gölgesiz bilgi yüzeyi.

| | |
|---|---|
| **Hissiyat** | ölçülü, yere bağlı, keşifçi, kesin |
| **En iyi** | arazi/harita ürünü, saha planlama, jeolojik-çevresel rapor, açık hava rota uygulaması |
| **Kaçın** | lüks vitrin, eğlence uygulaması, hızlı tüketim landing'i — pafta dili burada "teknik" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük metin çifti 6.58:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="topographic-terrain"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Topografya & Arazi, ekranı bir **harita paftası** gibi kurar: sıcak bej kâğıt zemin, zeminde iki merkezden yayılan eş yükselti halkaları, her kartta 1px dış çerçeve + 6px iç çerçeve, ölçüler mono ve birimli (m, km, mm/yıl). Gölgeyi tamamen bırakır; karşılığında **okunabilir katman hiyerarşisi** ve arazi metaforunun doğal yönlendirmesini kazanır.

Kurucu kararları üç tanedir. Birincisi **gölge yoktur**: katman ayrımı 1px çerçeve + iç boşlukla kurulur, çünkü pafta düzdür. İkincisi **kontur anlam taşır**: her halka bir yükseklik değerine karşılık gelir; süs için halka çizmek stili bozar. Üçüncüsü **etiket mono ve büyük harftir**: pafta kenar bilgisi gibi, `.12em` tracking.

Bedeli: sıcak bej zemin doygun renkleri taşımaz. Bu yüzden tek vurgu (pas turuncusu) yalnız ölçüm ve rota için yanar.

### Ne değildir
- **Blueprint Çizimi (56) değildir:** 56 soğuk cyanotype mavi + 64px çizim ızgarası kullanır; 78 sıcak bej kâğıt + **radyal kontur halkaları** kullanır.
- **Wabi-Sabi (07) değildir:** 07 kırık hiza ve düşük kontrastla "eskimiş" görünür; 78'de hiza kesin, `ink-soft/bg` **6.58:1**.
- **Utility (44) değildir:** 44 radius 8/12px ve mavi tek vurgudur; 78 radius 2/6px, pas turuncusu ve kontur imzası.
- **Scrapbook (31) değildir:** 31 kâğıt dokusunu kolaj için kullanır (eğik, dağınık); 78 kâğıdı ızgara disipliniyle kullanır.

### Nereden gelir
USGS/ordinance survey pafta geleneğinden: eş yükselti aralığı, ölçek çubuğu, kenar bilgisi. Bugün geri dönüyor çünkü harita tabanlı ürünler (rota, arazi, afet) veri yoğunluğunu "katman" metaforuyla anlatmak zorunda; klişeye dönmemesi için korunacak detay **konturun anlam taşıması** ve **gölgenin hiç kullanılmaması**.

### 3 saniyede tanıma testi
1. Zemin sıcak bej kâğıt; üstünde eşmerkezli ince halkalar seçilebiliyor.
2. Hiçbir kartta gölge yok; her yüzey 1px çerçeve + 6px iç çerçeve.
3. Köşeler keskin: 2px (kontrol) / 6px (kart); hap radius yok.
4. Etiketler mono, büyük harf, geniş tracking; değerler birimli (m, km, %).
5. Buton 40px ve mono büyük harf; vurgu rengi tek: pas turuncusu.

## Görsel imza
- **Kontur halkaları:** iki `repeating-radial-gradient` (18px ve 42px aralık) — biri accent %26, biri ink %12; zemin ve hero görselinde.
- **Pafta çerçevesi:** kart `::after` ile `inset: 6px`, 1px ink %9; dış çerçeve 1px `--line`.
- **Ölçek çubuğu:** nav altında 3px yüksekliğinde hairline deseni (`inset 0 -3px 0 -2px var(--line)`).
- **Mono etiket:** 10px, `.12em`, uppercase; değer + birim aynı satırda.
- **Radius disiplini:** 2px kontrol, 6px kart — 8px üstü yok.
- **Gölgesizlik:** `--shadow: none`; yüzen katman accent 1px çerçeveyle ayrılır.
- **Hareket imzası:** 480ms `cubic-bezier(.5,.05,.3,1)`, 32px — pafta "oturur", yay yapmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ece6d8` | sayfa zemini (harita kâğıdı) | kart zemini |
| `--bg-2` | `#e2dac9` | nav, ikincil bant | buton zemini |
| `--surface` | `#f7f3e8` | kart / panel (açık pafta) | sayfa zemini |
| `--surface-2` | `#f0eadc` | chip, tablo başlığı | birincil CTA |
| `--ink` | `#241f18` | başlık, gövde, kontur etiketi | dekoratif çizgi |
| `--ink-soft` | `#574e3e` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#857b64` | yalnız kontur çizgisi ve kenar notu | etkileşimli metin |
| `--accent` | `#a34f24` | rota, ölçüm vurgusu, birincil eylem | geniş dekoratif dolgu |
| `--accent-ink` | `#fff8ef` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(36,31,24,.16)` | pafta çerçevesi, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **13.14:1** · `ink-soft / bg` = **6.58:1** · `accent-ink / accent` = **5.38:1** · `ink-faint / bg` = **3.37:1** (yalnız kontur/kenar notu).
- Tek vurgu kuralı: tek pas turuncusu. `--ok` (`#3d6b2f`) ve `--danger` (`#a02a1d`) yalnız lejant/rota durumunda, metinle birlikte.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; kâğıt zemin üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk (`--font-display`) | 46px (mobil 28px) | 500 | 1.06 | `.01em` |
| H2 | Space Grotesk | 30px | 500 | 1.16 | `.02em` |
| H3 | Space Grotesk | 20px | 500 | 1.28 | `.02em` |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.60 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `0` |
| Etiket / mono | Share Tech Mono (`--font-mono`) | 10px | 400 | 1.4 | `.12em` |

- Ölçek oranı: **1.5** — kullanılan basamaklar 10 · 11 · 13 · 16 · 20 · 30 · 46.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 4.2vw, 46px); line-height: 1.06 }`.
- Gövde satır uzunluğu en fazla **66ch**; lejant tabloları 100ch'e kadar genişleyebilir (tabular hizalı).
- Ağırlık kuralı: display 500, gövde 400/500, mono 400. 700 ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1220px (içerik 1188px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1220; 768 altında tek kolon, iç çerçeve 4px |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm (7/5) — pafta solda geniş, lejant sağda dar.
- Bölüm ritmi: art arda en fazla **4** aynı hizada pafta; beşincisi tam genişlik "ölçek şeridi" olur.
- İç çerçeve boşluğu 6px'in altına inmez (pafta kenarı okunmalı).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kâğıt + kontur halkaları |
| Kart | `--surface` | yok | pafta: 1px dış + 6px iç çerçeve |
| Yüzen katman | `--surface` + accent çerçeve | yok | modal, menü, toast: 1px accent çerçeve |

- Kenarlık formülü: `1px solid var(--line)` (dış) + `::after inset 6px` `1px solid ink %9` (iç).
- Derinlik nereden gelir: **hiçbir yerden** — düzlük kuraldır. Sıralama çerçeve + boşlukla okunur.
- Radius: `--radius: 2px` (buton, input, chip), `--radius-lg: 6px` (kart, panel, modal). Üst sınır 6px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | `0 16px` | 2px | 11px mono uppercase `.12em` | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 + kesikli çerçeve · loading: 3 kontur halkası sırayla (700ms) |
| Buton (ikincil) | 40px | `0 16px` | 2px | 11px mono | şeffaf + 1px `--line` | hover: `--surface-2` |
| Input | 40px | `0 12px` | 2px | 15px Jost | `--surface` + 1px `--line` | focus: accent çerçeve + 2px outline offset 1px · error: `--danger` çerçeve + 10px mono not · disabled: opacity .45 |
| Kart | içerik | 20px | 6px | H3 + gövde | `--surface` + dış/iç çerçeve, gölge yok | hover: iç çerçeve accent %30 |
| Chip / badge | 20px | `0 6px` | 2px | 10px mono `.12em` | `--surface-2` + 1px `--line` | accent: accent dolgu + accent-ink metin |
| Nav | 56px | `0 24px` | 0 | 14px Jost 500 | `--bg-2` + alt 3px ölçek deseni | aktif: accent metin + 2px alt çizgi |
| Tablo satırı | 38px | `6px 10px` | — | 14px Jost, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 24px | 6px | 20px display + mono yükseklik etiketi | `--surface` + 1px accent çerçeve | açılış: 32px yukarıdan, 480ms |
| Toast | 36px | `8px 12px` | 2px | 12px Jost 500 | `--surface` + sol uçta 2px accent ölçü çizgisi | hata: çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--ok`, `--danger` | en fazla 4 seri; eşik çizgisi kesikli, dolgu %8 tarama |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; kontur zeminde 1px yetmez.
- Dokunma hedefi: en az 44×44px; 40px buton mobilde `min-height: 44px`. Chip 20px, hedef padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin köşe, 20px ızgara; yükseklik/rota sembolleri |
| Fotoğraf | arazi/kaya dokusu: düşük doygunluk, kum tonu, 0–2px radius kırpma |
| İllüstrasyon | eş yükselti çizimi zorunlu imza; tarama deseni serbest |
| Doku | grain %4 (kâğıt) + kontur halkaları; parlak yüzey yok |
| Logo alanı | pafta kenarında mono büyük harf + ölçek çubuğu, 20px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda H1 + ölçü etiketleri, sağda kontur paftası | `shots/01-landing.png` |
| Dashboard | düşük | pafta ızgarası + lejant; gölge yok | `shots/02-dashboard.png` |
| Form | düşük | 40px input, mono etiket sağda; birim seçici chip | — |
| Liste / tablo | düşük | 38px satır, tabular değer, sağa dayalı birim | — |
| Boş durum | orta | boş pafta: iç çerçeve + "veri yok" mono etiketi | — |
| Onboarding | yüksek | 3 adım: bölge seç → katman ekle → ölçek belirle | — |
| Pricing | orta | üç pafta; öne çıkan pafta accent iç çerçeve | — |
| Giriş / ödeme | çok düşük | kontur yok; yalnız çerçeve ve tek CTA | — |
| Modal | orta | accent 1px çerçeve + yükseklik etiketi | — |
| Bildirim / toast | orta | sağ-alt, 2px accent ölçü çizgisi | — |
| Hata | düşük | `--danger` çerçeve + mono not; zemin değişmez | — |
| Profil / ayar | orta | lejant düzeni: sol etiket, sağ değer | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **480ms** | `cubic-bezier(.5,.05,.3,1)` | `opacity` + `translateY(32px)`; stagger **0.05s** |
| Scroll reveal | **520ms** | aynı eğri | trigger `top 75%`, `translateY(34px)`, `once: true` |
| Pin / scrub | **0.7** | `transform` | **açık** — pafta `+130%` mesafede pin + scrub (ekran başına 1) |
| Basma | **110ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 240ms | aynı eğri | opacity + 16px |
| Hover | **150ms** | aynı eğri | görsel ölçek **1.006** |
| Ödül / vurgu | 480ms | aynı eğri | rota çizgisi soldan sağa %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.48s / cubic-bezier(.5,.05,.3,1) / 32px / 0.05` · `scroll = top 75% / 0.52s / 34px / once` · `pin = true / scrub 0.7 / +130%` · `hover = 150ms / 1.006`.
- Bant içi fark: 76'dan (0.68s / 24px / pin yok), 77'den (0.78s / 18px / scrub 1.35), 79'dan (0.83s / 40px / scrub 1.05), 80'den (0.57s / 22px / pin yok) en az dört parametrede ayrışır. Mevcut 72 stil içinde en yakını 46-telemetry-grid (`0.28s / .16,.84,.44,1 / 6px`) — süre, eğri, offset, trigger ve stagger'da farklı.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, kontur çizimi statik.
- Bu stile yasak hareket: ekran başına 1'den fazla sürekli kontur animasyonu, kapatılamayan parallax, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ece6d8` | `#17130e` |
| `--surface` | `#f7f3e8` | `#241e16` |
| `--ink` | `#241f18` | `#efe8da` |
| `--accent` | `#a34f24` | `#e08a4e` |
| `--ink-soft` | `#574e3e` | `#bcb09c` |
| `--line` | `rgba(36,31,24,.16)` | `rgba(239,232,218,.16)` |

- Koyu modda değişen başka ne var: kontur halkaları ink %7 → ink %10, accent halkası %12 → %18 (gece paftasında görünmesi için), iç çerçeve opaklığı %9 → %12.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Eş yükselti (kontur) çizgisi imza öğedir; en az bir bölümde halka dizisi görünür.
- Zemin harita kâğıdı (`--bg` sıcak bej); saf beyaz zemin yok.
- Gölge yok; katman ayrımı 1px dış + 6px iç çerçeve.
- Radius 2px kontrol / 6px kart; 8px üstü yasak.
- Her veri bloğu birim/ölçek taşır (m, km, %, mm/yıl).
- Etiketler mono, büyük harf, `.12em`; değer + birim aynı satırda.

## Yasaklar
- Yumuşak büyük gölge, cam, gradyan patlaması.
- 12px üstü radius, hap buton.
- Serif display, italik.
- Harita dışı doygun renk (turkuaz, mor, neon yeşil).
- Emoji ve dolu renkli ikon.
- Anlam taşımayan süs konturu.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.58:1** (eşik 4.5); `ink-faint / bg` = **3.37:1** yalnız kontur çizgisi ve kenar notunda.
- `--ink-faint` etkileşimli metinde ve lejant değerinde kullanılmaz; lejant `--ink-soft`.
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon ekran başına ≤1; `prefers-reduced-motion` pin ve kontur animasyonunu kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `repeating-radial-gradient` desteklenmezse zemin düz `--bg` olur (kontur bilgisi grafikte korunur).
- Odak görünürlüğü: kontur zeminde 2px accent outline + **2px** offset; offset 0 kontur çizgilerine karışır.

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
| "Kâğıt hissi" kayboluyor | zemin saf beyaz | `--bg` sıcak bej kullan |
| Hiyerarşi kayboluyor | her yüzey aynı çerçeve | iç çerçeveyi (6px inset) ekle, accent'i karara ayır |
| Kontur süs gibi | her bölüme halka eklenmiş | konturu tek bölümde ve değerle kullan |
| Pafta "kirli" | grain %4 üstü + fotoğraf dokusu | grain sabit, fotoğrafı düşük doygunlukta tut |
| Mobilde sıkışık | gutter 16px korunmuş | 768 altı 12px, iç çerçeve 4px |
| Okunmayan lejant | `--ink-faint` metin | lejant değeri `--ink-soft` |

## Komşu stiller

- **Uyumlu:** `blueprint-drawing` — aynı pafta/ölçü dili; Blueprint yalnız teknik ek bölümde garnitür.
- **Uyumlu:** `wabi-sabi` — kâğıt ve doğal doku; Wabi-Sabi tek bölümde.
- **Uyumlu:** `utility` — nötr iskelet; Utility yalnız form ekranlarında.
- **Yasak:** `glassmorphism` — cam/blur pafta düzlüğüyle çelişir.
- **Yasak:** `memphis` — süs renkleri ölçü disiplinini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Topographic_map | eş yükselti aralığı ve etiketleme |
| https://en.wikipedia.org/wiki/Contour_line | kontur sıklığı ve diklik okuma |
| https://www.usgs.gov/programs/national-geospatial-program/topographic-maps | sembol ve ölçek çubuğu sözlüğü |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | bej zemin üstü metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Topografya & Arazi (styles/78-topographic-terrain/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="topographic-terrain"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg harita kâğıdı + iki repeating-radial-gradient kontur halkası (18px accent %26, 42px ink %12).
Tipografi: --font-display Space Grotesk 46/30/20 (500, .01em); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10px etiket (.12em, uppercase).
Yüzey: gölge YOK; 1px var(--line) dış çerçeve + ::after inset 6px 1px ink %9 iç çerçeve.
  Radius 2px kontrol, 6px kart. Yüzen katman 1px accent çerçeve.
Renk: tek pas turuncusu accent #a34f24; lejant durumları metinle.
  ink/bg 13.14:1, ink-soft/bg 6.58:1, accent-ink/accent 5.38:1, ink-faint/bg 3.37:1 (kontur/not).
Bileşen: buton 40px mono uppercase; input 40px; chip 20px; odak 2px accent + 2px offset.
Hareket: enter 480ms cubic-bezier(.5,.05,.3,1) 32px stagger .05; scroll top 75% 520ms 34px once;
  pin scrub 0.7 (+130%, ekran başına 1); hover 150ms görsel 1.006. prefers-reduced-motion zorunlu.
Yasak: gölge, cam, 12px üstü radius, serif, italik, harita dışı doygun renk, süs konturu.
Çıktı: bileşen kodu + tek paragraf not (kontur halkasını ve iç çerçeveyi nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: kontur halkaları, iç çerçeve, ölçek şeridi, mono birim etiketi.
- [ ] Hard-coded renk/gölge/radius yok; gölge hiç kullanılmamış.
- [ ] Kontrast: 13.14 / 6.58 / 5.38 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 2px offset, kontur üstünde görünür.
- [ ] 390px'te tek kolon, iç çerçeve 4px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve kontur animasyonu duruyor.

## Token

```css
[data-style="topographic-terrain"] {
  --bg: #ece6d8; --bg-2: #e2dac9;
  --surface: #f7f3e8; --surface-2: #f0eadc;
  --ink: #241f18; --ink-soft: #574e3e; --ink-faint: #857b64;
  --accent: #a34f24; --accent-ink: #fff8ef;
  --line: rgba(36,31,24,.16);
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 4;
  --danger: #a02a1d; --danger-ink: #ffffff;
  --ok: #3d6b2f; --warn: #7d5a00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="topographic-terrain"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
