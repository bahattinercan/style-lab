# 79 · Deniz & Akıntı

> **Bir cümlede:** Derin suyun katmanlarını taklit eden koyu arayüz: teal zemin, ince akıntı çizgileri, serif display ve tek turkuaz vurgunun taşıdığı yön bilgisi.

| | |
|---|---|
| **Hissiyat** | derin, akışkan, sakin-güçlü, yönlü |
| **En iyi** | denizcilik/lojistik izleme, su altı araştırma, iklim-deniz paneli, dalış/tekne ürünü |
| **Kaçın** | çocuk ürünü, hızlı tüketim vitrini, ödeme ekranı — koyu teal güven ekranında ağırlaşır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 9.06:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="ocean-current"]` |
| **Kompozisyon** | `split` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Deniz & Akıntı, ekranı **su kesiti** gibi kurar: koyu teal zemin katmanları (her katman 4–6 puan daha açık), üzerinde 1.5px eğri akıntı çizgileri ve yön okları; display serif (Cormorant Garamond), gövde serif (Lora), okuma satır aralığı 1.75. Renk çeşitliliğini feda eder; karşılığında **yön ve derinlik** okunurluğunu kazanır.

Kurucu kararları üç tanedir. Birincisi **tek parlak renk**: turkuaz accent yalnız akış/aktif durum içindir; ikinci neon yok, glow accent çizgisinde kalır. İkincisi **serif gövde**: 1.75 satır aralığıyla uzun metni su gibi akıtır — bu, listedeki en yüksek gövde satır aralığıdır. Üçüncüsü **akıntı yönü bilgi taşır**: her eğri çizgi bir akış yönü, oku da yönü gösterir; süs amaçlı eğri çizilmez.

Bedeli: koyu zemin + serif küçük puntoda zayıflar. Bu yüzden gövde 16px'in altına inmez ve `ink-soft` (9.06:1) en küçük metin rengidir.

### Ne değildir
- **Cybercore (23) değildir:** 23 mono terminal + mor/pembe neon; 79 serif display + tek turkuaz, kutu/terminal dili yok.
- **Ethereal (29) değildir:** 29 sis ve düşük kontrastla rüya kurar; 79'da `ink-soft/bg` **9.06:1**, akıntı çizgileri keskin.
- **Ocean-current / Glassmorphism (08) değildir:** 79 cam kullanmaz; katman ayrımı parlaklık farkı + 1px çizgi.
- **Scandinavian Dark (40) değildir:** 40 sıcak nötr + Fraunces ile sakinlik; 79 soğuk teal + akıntı çizgisi imzası.

### Nereden gelir
Oşinografi haritalarından (akıntı vektörleri, izotermler) ve klasik denizcilik yayıncılığından (serif başlık + ölçüm tablosu). Bugün geri dönüyor çünkü iklim/su verisi ürünleri "yön" anlatmak zorunda; oklar ve eğriler bunu tek bakışta verir. Klişeye dönmemesi için korunacak detay: **akıntının yön taşıması** ve **serif gövdenin 1.75 satır aralığıyla kalması**.

### 3 saniyede tanıma testi
1. Zemin koyu teal; katmanlar arasında belirgin ama küçük parlaklık farkı var.
2. İnce eğri akıntı çizgileri ve yön okları görünüyor (1.5px, turkuaz).
3. Başlıklar serif; gövde de serif ve satır aralığı geniş.
4. Buton 46px, radius 6px; gölge yok, yalnız cam/modal katmanında gölge var.
5. Ekranda tek parlak renk: turkuaz; ikinci neon yok.

## Görsel imza
- **Akıntı zemin çizgileri:** `repeating-linear-gradient(96deg, accent %7 0 1px, transparent 1px 46px)` — gövde zemini.
- **Katman parlaklığı:** `bg #0a2029` → `bg-2 #0e2833` → `surface #12323e` → `surface-2 #163a48` (her adım 4–6 puan).
- **Akıntı eğrileri:** `repeating-radial-gradient` (26px aralık, accent %20) hero görselinde; yön oku zorunlu.
- **Kart üst çizgisi:** 1.5px, soldan sağa sönen accent %40 (`::before`).
- **Serif ölçek:** Cormorant Garamond 56/36/24, Lora gövde 16px/1.75.
- **Cam yalnız nav:** blur 4px, opaklık %88 — su yüzeyi hissi, tam cam değil.
- **Hareket imzası:** 830ms `cubic-bezier(.35,.02,.25,1)`, 40px — su kütlesi gibi ağır gelir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a2029` | `#01070c` | kart zemini |
| `--bg-2` | `#0e2833` | `#041019` | birincil CTA |
| `--surface` | `#12323e` | `#061723` | sayfa zemini |
| `--surface-2` | `#163a48` | `#0a2130` | modal zemini |
| `--ink` | `#dff0f4` | `#f2fcff` | dekoratif çizgi |
| `--ink-soft` | `#a3c4cd` | `#b9d9e0` | başlık |
| `--ink-faint` | `#6f939d` | `#83aab4` | etkileşimli metin |
| `--accent` | `#46d8c4` | `#8affe8` | geniş dekoratif dolgu |
| `--accent-ink` | `#04211d` | `#02100c` | accent üstü ikincil metin |
| `--line` | `rgba(223,240,244,.16)` | `rgba(242,252,255,.22)` | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.31:1** · `ink-soft / bg` = **9.06:1** · `accent-ink / accent` = **9.58:1** · `ink-faint / bg` = **5.06:1** (yalnız dekoratif çizgi).
- Tek vurgu kuralı (kesin): tek parlak renk. `--danger` (`#ff8a80`) ve `--warn` (`#ffc46b`) parlamaz; yalnız metin + işaret rengi.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` ölçüm etiketi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond (`--font-display`) | 56px (mobil 34px) | 500 | 1.04 | `.005em` |
| H2 | Cormorant Garamond | 36px | 500 | 1.14 | `.01em` |
| H3 | Cormorant Garamond | 24px | 500 | 1.26 | `.01em` |
| Gövde | Lora (`--font-body`) | 16px | 400 | **1.75** | `0` |
| Küçük gövde | Lora | 14px | 400 | 1.7 | `0` |
| Etiket / mono | Courier Prime (`--font-mono`) | 12px | 400 | 1.4 | `.06em` |

- Ölçek oranı: **1.55** — kullanılan basamaklar 12 · 14 · 16 · 24 · 36 · 56.
- Ölçü önerisi: `h1 { font-size: clamp(34px, 5.4vw, 56px); line-height: 1.04 }`.
- Gövde satır uzunluğu en fazla **60ch**; serif + koyu zemin nedeniyle 66ch üstü okunmaz.
- Ağırlık kuralı: display 500, gövde 400/600, mono 400. Geometrik sans yok, italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1240px (içerik 1192px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1240; 768 altında tek kolon, akıntı çizgileri 64px aralığa çıkar |

- Asimetri kuralı: ekran başına **1** 7/5 bölünme — görsel geniş kolonda, metin dar kolonda (60ch).
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik "akıntı şeridi" olur.
- Kart padding 26px; bölüm dikey boşluğu 84px (mobil 48px).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | su kesiti + akıntı çizgileri |
| Kart | `--surface` | yok | kart, panel; 1px `--line` + 1.5px üst akıntı çizgisi |
| Yüzen katman | `--surface` + accent çerçeve | `0 16px 40px rgba(3,12,16,.55)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; aktif/ölçüm kartında `1px solid var(--accent)`.
- Derinlik nereden gelir: **katman parlaklığı** (bg → surface 4–6 puan) + 1px çizgi; gölge yalnız yüzen katmanda.
- Radius: `--radius: 6px` (buton, input), `--radius-lg: 16px` (kart, panel, modal); chip 999px. Üst sınır 20px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | `0 24px` | 6px | 15px Lora 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %86 + ink · active: translateY(1px) · focus: 2px accent outline + 3px offset · disabled: opacity .4 + kesikli çerçeve · loading: akıntı çizgisi soldan sağa (900ms, tek tur) |
| Buton (ikincil) | 46px | `0 24px` | 6px | 15px Lora 600 | şeffaf + 1px accent %52 | hover: accent %10 zemin |
| Input | 46px | `0 16px` | 6px | 15px Lora | `--bg-2` + 1px `--line` | focus: accent çerçeve + 2px outline offset 2px · error: `--danger` çerçeve + 12px mono etiket · disabled: opacity .4 |
| Kart | içerik | 26px | 16px | H3 + gövde | `--surface` + 1px `--line` + 1.5px üst akıntı çizgisi | hover: üst çizgi accent %55 |
| Chip / badge | 26px | `0 12px` | 999px | 12px Lora 600 | `--bg-2` + 1px `--line` | accent: accent %15 zemin + accent metin |
| Nav | 60px | `0 28px` | 0 | 15px Lora | `bg-2 %88` + blur 4px + alt 1.5px accent %22 | aktif: accent metin |
| Tablo satırı | 42px | `8px 12px` | — | 14px Lora, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 28px | 16px | 24px display + mono derinlik etiketi | `--surface` + 1px accent + `0 16px 40px` | açılış: 40px yukarıdan, 830ms |
| Toast | 42px | `10px 16px` | 6px | 14px Lora 600 | `--surface` + sol uçta 6px accent damla | hata: damla `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink`, `--warn`, `--danger` | en fazla 4 seri; akıntı çizgisi 1.5px, yön oku zorunlu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — koyu teal + akıntı çizgileri üstünde 1px kaybolur.
- Dokunma hedefi: en az 44×44px; butonlar 46px. Chip 26px, hedef padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 24px ızgara; dalga/ok/yön sembolleri |
| Fotoğraf | su yüzeyi/derinlik: düşük doygunluk, turkuaz-teal ton, 16px radius kırpma |
| İllüstrasyon | akıntı eğrileri ve derinlik kesiti; serbest |
| Doku | ince akıntı çizgileri (1px, accent %14); grain 0 |
| Logo alanı | serif küçük harf wordmark + dalga çizgisi, 24px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: sağda akıntı görseli, solda serif H1 + tek CTA | `shots/01-landing.png` |
| Dashboard | orta | akıntı şeması + ölçüm tablosu; tek parlak renk | `shots/02-dashboard.png` |
| Form | düşük | 46px input, etiket üstte 12px mono | — |
| Liste / tablo | düşük | 42px satır, tabular değer, birim ayrı sütun | — |
| Boş durum | orta | boş akıntı alanı + "veri akışı yok" mono etiketi | — |
| Onboarding | yüksek | 3 adım: bölge → derinlik → eşik | — |
| Pricing | orta | üç kart; öne çıkan kart accent üst çizgi | — |
| Giriş / ödeme | çok düşük | akıntı çizgisi yok; yalnız odak halkası ve tek CTA | — |
| Modal | orta | accent 1px çerçeve + derinlik etiketi (m) | — |
| Bildirim / toast | orta | alt-sağ, 6px damla + 14px metin | — |
| Hata | düşük | damla/çizgi `--danger`; zemin değişmez | — |
| Profil / ayar | orta | iki kolon; ölçüm birimleri mono | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **830ms** | `cubic-bezier(.35,.02,.25,1)` | `opacity` + `translateY(40px)`; stagger **0.115s** |
| Scroll reveal | **860ms** | aynı eğri | trigger `top 71%`, `translateY(36px)`, `once: true` |
| Pin / scrub | **1.05** | `transform` | **açık** — akıntı panosu `+180%` mesafede pin + scrub (ekran başına 1) |
| Basma | **200ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 420ms | aynı eğri | opacity + 24px |
| Hover | **380ms** | aynı eğri | görsel ölçek **1.022** |
| Ödül / vurgu | 830ms | aynı eğri | akıntı çizgisi soldan sağa + yön oku (tek kez) |

- İmza ölçüleri: `enter = 0.83s / cubic-bezier(.35,.02,.25,1) / 40px / 0.115` · `scroll = top 71% / 0.86s / 36px / once` · `pin = true / scrub 1.05 / +180%` · `hover = 380ms / 1.022`.
- Bant içi fark: 76'dan (0.68s / 24px / pin yok), 77'den (0.78s / 18px / scrub 1.35), 78'den (0.48s / 32px / scrub 0.7), 80'den (0.57s / 22px / pin yok) en az dört parametrede ayrışır. Mevcut 72 stil içinde en yakını 38-organic-bio (`1.0s / power2.out / 28px / 0.1`) — süre, eğri, offset, trigger, pin ve hover'da farklı; `top 71%` hiçbir stilde yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, akıntı çizgisi son karede durur.
- Bu stile yasak hareket: ekran başına 1'den fazla sürekli akıntı animasyonu, saniyede 3 üstü flash, yatay kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0a2029` | `#01070c` |
| `--surface` | `#12323e` | `#061723` |
| `--ink` | `#dff0f4` | `#f2fcff` |
| `--accent` | `#46d8c4` | `#8affe8` |
| `--ink-soft` | `#a3c4cd` | `#b9d9e0` |
| `--line` | `rgba(223,240,244,.16)` | `rgba(242,252,255,.22)` |

- Koyu modda değişen başka ne var: zemin gece akıntısına iner (`#0a2029` → `#01070c`, ton bandı Δ≈39), yüzey kademeleri dört adım koyulaşır, accent neon turkuaza açılır (`#46d8c4` → `#8affe8`), akıntı çizgileri %26 → %30 ve hairline opaklığı .16 → .22. Açık/koyu ekran artık yan yana ayırt edilir.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).
- Ölçülen koyu kontrastlar: `ink/bg` **19.43:1** · `ink-soft/bg` **13.56:1** · `accent-ink/accent` **16.22:1** · `ink-faint/bg` **8.08:1** · accent metin olarak bg'ye **16.92:1**.

## Zorunlu kurallar
- Zemin derin su (`--bg` teal); katmanlar arasında 4–6 puan parlaklık farkı korunur.
- Akıntı çizgisi imza öğedir: 1.5px eğri hat + yön oku, en az bir bölümde görünür.
- Tek parlak renk (accent); ikinci neon yok, glow yalnız accent çizgisinde.
- Serif display + serif gövde; gövde satır aralığı ≥ 1.7.
- Gölge yalnız yüzen katmanda (`0 16px 40px`); kart gölgesiz.
- Tüm ölçümler birimli: m, kn, °C, ‰.

## Yasaklar
- Saf siyah `#000` zemin.
- İkinci neon / renkli glow.
- Keskin 0px köşe, kalın 1.5px üstü çerçeve.
- Geometrik sans display.
- Sürekli akıntı animasyonu (ekran başına ≤1).
- Emoji ile durum bildirimi, renk-only yön göstergesi.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.06:1** (eşik 4.5); `ink-faint / bg` = **5.06:1** yalnız dekoratif çizgi ve eksende.
- `--ink-faint` etkileşimli metinde kullanılmaz; ölçüm etiketi `--ink-soft`.
- Hareket/parlama hassasiyeti: düşük — flash yok; `prefers-reduced-motion` pin ve akıntı animasyonunu kapatır.
- Şeffaf yalnız nav (`bg-2 %88` + blur 4px); `@supports` yoksa opak `--bg-2` fallback.
- Odak görünürlüğü: koyu teal + akıntı çizgileri üstünde 2px accent outline + **3px** offset.

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
| Ekran "siyah boşluk" | katman farkı 2 puana inmiş | bg → surface 4–6 puan farkı koru |
| Neon oyun arayüzü | ikinci parlak renk eklenmiş | tek accent; diğer durumlar parlamaz |
| Serif okunmuyor | satır aralığı 1.5'e düşmüş | 1.75 sabit, ölçü ≤60ch |
| Akıntı süs gibi | oksuz eğri çizilmiş | her eğriye yön oku + etiket ekle |
| Kontrast düşük | accent metin olarak kullanılmış | accent dolgu/çizgi; metin `--ink` |
| Pin titriyor | iki ayrı rAF döngüsü | tek ScrollTrigger batch, ekran başına 1 pin |

## Komşu stiller

- **Uyumlu:** `ethereal` — sis ve yumuşak geçiş; Ethereal tek bölümde (hikâye) garnitür.
- **Uyumlu:** `aurora-ui` — atmosferik katman; Aurora yalnız hero zemininde.
- **Uyumlu:** `wabi-sabi` — doğal doku ve sakinlik; Wabi-Sabi tek bölümde.
- **Yasak:** `neo-brutalism` — sert ofset gölge ve kalın çerçeve akışkanlık iddiasını bozar.
- **Yasak:** `safety-signage` — yüksek sesli uyarı dili derinlik/sakinlik ile çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Ocean_current | akıntı yönü, hız birimleri (kn) |
| https://en.wikipedia.org/wiki/Thermohaline_circulation | derinlik katmanları ve renk skalası |
| https://www.noaa.gov/education/resource-collections/ocean-coasts | ölçüm etiketleri ve lejant |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | teal zemin üstü metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Deniz & Akıntı (styles/79-ocean-current/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="ocean-current"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg derin teal + ince akıntı çizgileri (repeating-linear-gradient 96deg, accent %7, 46px).
Tipografi: --font-display Cormorant Garamond 56/36/24 (500); --font-body Lora 16px/1.75;
  --font-mono Courier Prime 12px etiket (.06em, uppercase).
Yüzey: --bg / --surface (1px var(--line) + 1.5px üst accent çizgisi, gölge yok) / yüzen + 0 16px 40px.
  Radius 6px kontrol, 16px kart, chip 999px.
Renk: tek parlak accent #46d8c4; --danger/--warn parlamaz.
  ink/bg 14.31:1, ink-soft/bg 9.06:1, accent-ink/accent 9.58:1, ink-faint/bg 5.06:1.
Akıntı: 1.5px eğri hat + yön oku zorunlu; katmanlar arası 4–6 puan parlaklık farkı.
Hareket: enter 830ms cubic-bezier(.35,.02,.25,1) 40px stagger .115; scroll top 71% 860ms 36px once;
  pin scrub 1.05 (+180%, ekran başına 1); hover 380ms görsel 1.022. prefers-reduced-motion zorunlu.
Yasak: saf siyah, ikinci neon, 0px köşe, kalın çerçeve, geometrik sans display, >1 sürekli akıntı animasyonu.
Çıktı: bileşen kodu + tek paragraf not (akıntı çizgisini ve yön okunu nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: akıntı çizgisi + yön oku, katman parlaklığı, serif ölçek, kart üst çizgisi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 14.31 / 9.06 / 9.58 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 3px offset, akıntı çizgileri üstünde görünür.
- [ ] 390px'te tek kolon, çizgi aralığı 64px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve akıntı animasyonu duruyor.

## Token

```css
[data-style="ocean-current"] {
  --bg: #0a2029; --bg-2: #0e2833;
  --surface: #12323e; --surface-2: #163a48;
  --ink: #dff0f4; --ink-soft: #a3c4cd; --ink-faint: #6f939d;
  --accent: #46d8c4; --accent-ink: #04211d;
  --line: rgba(223,240,244,.16);
  --radius: 6px; --radius-lg: 16px;
  --shadow: 0 16px 40px rgba(3,12,16,.55); --shadow-hard: none;
  --font-display: "Cormorant Garamond", "Lora", Georgia, serif;
  --font-body: "Lora", "Inter", Georgia, serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .015em; --blur: 4px; --grain: 0;
  --danger: #ff8a80; --danger-ink: #0a2029;
  --ok: #46d8c4; --warn: #ffc46b;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="ocean-current"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
