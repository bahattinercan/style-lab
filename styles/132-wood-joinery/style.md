# 132 · Wood Joinery

> **Bir cümlede:** Marangoz atölyesi mantığı: 1px geçme çizgileri, 4px radius yüzeyler ve 0.66s ölçülü giriş — ahşabın damarından çok birleşim noktaları önemlidir.

| | |
|---|---|
| **Hissiyat** | ölçülü · sıcak · zanaatkâr · sağlam |
| **En iyi** | Mobilya markası, marangoz atölyesi, mimarlık detay sayfası, malzeme kataloğu |
| **Kaçın** | Hızlı kampanya sayfası, klinik form, oyun vitrini |
| **Zorluk** | düşük · **Erişilebilirlik** | iyi |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="wood-joinery"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Wood Joinery ahşabı değil birleşimi gösterir: 1px geçme çizgileri (dowel/tenon), 4px radius yüzey, slate mavi accent ve 44px ölçü etiketleri. Kazanılan şey mühendislik güveni; feda edilen şey süs — damar dokusu tek katmanda, %3 opaklıkta kalır.

Izgara marangoz ölçüsüdür: 12 kolon, 32px gutter, 1240px container ve ekran başına 2 geçme hattı. Yüzeyler gölgesizdir; derinlik 1px çizgi ve 2 tonlu ahşap kademesinden gelir.

Hareket ölçülüdür: 0.66s `cubic-bezier(.22,.72,.24,1)` giriş, 20px kayma, 60ms stagger; hover 240ms ve 1.015. Pin yok — marangoz işi kaymaz, oturur.

### Ne değildir

- `craft-handmade` değildir: craft el yazısı, kraft doku ve pin'li üretim sahnesiyle çalışır; burada geçme çizgisi, slate accent ve pin yok.
- `japandi` değildir: japandi Japonya–İskandinav sadeliğini 18px radius ve yumuşak geçişle kurar; burada 4px radius ve ölçü çizgileri var.
- `nordic-folk` değildir: nordic-folk nakış deseni kullanır; burada desen yok, yalnız geçme çizgisi.
- `wood-joinery` bir "rustik ahşap şablonu" değildir: ahşap dokusu %3'te durur, sepya fotoğraf yok.

### Nereden gelir

Kökeni geleneksel ahşap geçme teknikleri (kırlangıç kuyruğu, zıvana) ve modern mobilya detay çizimleridir. Bugün butik mobilya ve mimarlık malzeme kataloglarında geri döndü çünkü "nasıl birleşiyor" sorusu kaliteyi anlatıyor. Klişeye düşmemek için korunması gereken detay: geçme çizgisinin gerçek birleşim noktasında olması.

### 3 saniyede tanıma testi

1. Meşe zemin + slate mavi accent; ahşap dokusu yalnız %3.
2. 1px geçme çizgileri ekran başına en fazla 2.
3. Radius 4px; yuvarlak buton yok.
4. Ölçü etiketleri mono 12px, "2400×900×750" biçiminde.
5. 0.66s ölçülü giriş, 240ms hover — pin yok.

## Görsel imza

- Fraunces 600 48px / 1.1 başlık (mobil 30px); gövde Jost 16.5px / 1.66 / 62ch.
- Geçme çizgisi: 1px `--line` dikey/yatay, ekran başına en fazla 2, kesişimde 4px kare boşluk.
- Ahşap damarı: 1px/9px yatay çizgi %3 opaklık, yalnız bölüm zemininde.
- Ölçü etiketi: Courier Prime 12px, "W×D×H" biçimi, `--ink-soft`.
- Radius 4px (kart/buton) / 8px (görsel kabı); 10px üstü yasak.
- Ürün görseli kabı: 1px kenar + 2px alt çizgi (tezgâh kenarı).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f0e9dc` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#faf5ec` | kart / panel / modal | tam kanama blok |
| `--ink` | `#1f1c17` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#33546b` | slate mavi: birincil buton, aktif sekme, ölçü etiketi | ahşap turuncusu, ikinci sıcak renk, gradyan durağı |
| `--line` | `rgba(31,28,23,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 14.06:1 · `ink-soft / bg` = 7.28:1 · `accent-ink / accent` = 7.50:1 · `ink-faint / bg` = 3.83:1.
- Tek vurgu kuralı: slate mavi yalnız birincil buton, aktif sekme ve ölçü etiketinde; ekranın ≤%7'si.
- Yasak kombinasyon: turuncu ahşap + sıcak sarı, sepya filtre, gradyan.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 48px (mobil 30px) | 600 | 1.1 | -0.005em |
| H2 | Fraunces | 30px | 600 | 1.18 | 0 |
| H3 | Fraunces | 22px | 600 | 1.18 | 0 |
| Gövde | Jost | 16.5px | 400 | 1.66 | 0 |
| Etiket / mono | Courier Prime | 12px | 400 | 1.4 | 0.12em |

- Ölçek oranı: 1.35 — 6 basamak: 12 · 13 · 16.5 · 22 · 30 · 48.
- Ölçü: 62ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":600}; yasak: 700/900 ağırlık, 300 ince ağırlık, italik gövde, gövdede mono, gövdede büyük harf, 48px üstü başlık, 62ch üstü ölçü.
- Ölçek oranı 1.35; kullanılan 6 basamak: 12 · 13 · 16.5 · 22 · 30 · 48.
- `h1 { font-size: clamp(30px, 4.4vw, 48px) }`; 48px üstü yasak.
- Ağırlık: Fraunces 600 başlık, Jost 400/500 gövde; 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 88px (mobil 56px) |
| Kart içi | 24px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Ürün 7/12, detay 4/12; ekran başına 2 geçme çizgisi. |

- Asimetri: ürün 7/12, detay 4/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde geçme çizgisi girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 4px · `--radius-lg` 8px. Radius 4px (buton/input/chip) ve 8px (kart/görsel kabı); 10px üstü yasak; tablo satırı 0; avatar 50%.
- Derinlik nereden gelir: Gölge yok; derinlik 1px geçme çizgisi ve meşe ton kademesinden gelir. Yüzen katman 1px kenarla ayrılır.
- Kenarlık: 1px `--line`; görsel kabında 1px + 2px alt tezgâh çizgisi.
- Derinlik yok: gölge `none`; ton kademesi + çizgi.
- Radius: `--radius` 4px, `--radius-lg` 8px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 13px 22px | 4px | 15px/500 body | var(--accent) / var(--accent-ink) | bg var(--ink), 240ms · translateY(1px) · outline 2px var(--accent), offset 2px · opacity .45 · 2px ölçü çizgisi dolar |
| Buton (ikincil) | 48px | 13px 22px | 4px | 15px/400 body | transparent / var(--ink) | kenar 1px var(--ink) |
| Input | 48px | 12px 14px | 4px | 16.5px/400 body | var(--surface) + 1px solid var(--line) | border 1px var(--ink) + outline 2px var(--accent) · bg var(--surface-2) · border 1px var(--accent) + 13px mesaj · opacity .5 |
| Kart | — | 24px | 8px | 16.5px Jost | var(--surface) | kenar 1px var(--ink-soft) |
| Chip / badge | 26px | 4px 9px | 4px | 12px/400 mono, .12em | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 64px | 0 28px | — | 13px/500 body | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 52px | 0 12px | 0 | 16.5px/400 body + 12px mono ölçü | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 28px | 8px | 22px Fraunces | none | rgba(31,28,23,.45) |
| Toast | 44px | 12px 16px | 4px | 13px/400 body | var(--ink) / var(--bg) | translateY(6px) + opacity, 240ms |
| Grafik paleti | — | — | — | 1.5px | 2 (accent, ink-soft); 1px dashed var(--line) | 12px mono .12em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — meşe zeminde 6.9:1.
- Dokunma hedefi: 48px buton; ölçü tablosu satırı 52px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, kare uç, 20px ızgara; ikon teknik çizim dili |
| Fotoğraf | Mobilya detayı: birleşim noktası, doğal ışık, alan ≤%45; sepya yok |
| İllüstrasyon | Teknik kesit çizimi: 1px, ölçü okları; ekran başına 1 |
| Doku | Ahşap damarı 1px/9px %3, yalnız bölüm zemininde |
| Logo alanı | Sol üst 24px, Fraunces 600 20px + 1px alt çizgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 48px başlık + 7/12 ürün kabı + geçme çizgisi | `shots/01-landing.png` |
| Dashboard | orta | Sipariş listesi: 52px satır, mono ölçü | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 4px radius, 1px kenar | — |
| Liste / tablo | orta | 52px satır, 1px hairline, mono ölçü kolonu | — |
| Boş durum | orta | Tek kesit çizimi + "atölye boş" + CTA | — |
| Onboarding | orta | Üç adım: ölç → kes → birleştir | — |
| Pricing | orta | Üç atölye paketi; 1px kenar, gölge yok | — |
| Giriş / ödeme | çok düşük | Tek kolon 400px, mono sipariş özeti | — |
| Modal | orta | 520px, 8px radius, 1px kenar | — |
| Bildirim / toast | orta | Alt sol, 44px, ink zemin + bg metin | — |
| Hata | düşük | Tek cümle + "ölçü hatası" mono etiket | — |
| Profil / ayar | orta | Atölye profili + malzeme listesi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 130ms | `cubic-bezier(.22,.72,.24,1)` | `translateY(1px)` + kenar 1px koyulaşır |
| Giriş (enter) | 660ms | `cubic-bezier(.22,.72,.24,1)` | `opacity` + 20px `translateY`, stagger 60ms |
| Scroll reveal | 800ms | aynı eğri | `top 82%` tetikleyici, `opacity` + 24px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 240ms | aynı eğri | `transform: scale(1.015)` |
| Ödül / vurgu | 380ms | `cubic-bezier(.22,.72,.24,1)` | ölçü etiketi 0→1 opacity (tek atım) |

- Süre bütçesi: enter 660ms ≤ 1200ms · scroll 800ms ≤ 1200ms · stagger 60ms.
- Hareket ölçülü: 0.66s giriş, 240ms hover; zıplama/overshoot yok.
- Pin/parallax yok: atölye akışı sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, yalnız opacity.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f0e9dc` | `#17130f` |
| `--surface` | `#faf5ec` | `#1d1812` |
| `--ink` | `#1f1c17` | `#f2ebdf` |
| `--accent` | `#33546b` | `#8fb6cf` |
| `--line` | `rgba(31,28,23,.16)` | `rgba(242,235,223,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 15.60:1 · `accent-ink / accent` = 8.57:1.
- Koyu modda meşe zemini koyu cevize (`#17130f`) döner; accent açık slate'e (`#8fb6cf`) çekilir.
- Ahşap damarı koyuda %2'ye iner (gürültüyü azaltır).
- Radius ve 1px çizgi kalınlığı değişmez.

## Zorunlu kurallar

- Fraunces 600 48px/1.1 başlık (mobil 30px); gövde Jost 16.5px/1.66/62ch
- Geçme çizgisi 1px, ekran başına en fazla 2; kesişimde 4px boşluk
- Ahşap damarı 1px/9px %3, yalnız bölüm zemininde; başka doku yok
- Radius 4/8px; 10px üstü yasak; gölge yok
- Tek vurgu slate mavi #33546b, ekranın ≤%7'si, accent üstü daima --accent-ink
- Ölçü etiketi Courier Prime 12px "W×D×H"; bölüm arası 88px (mobil 56px)
- Görsel kabında 1px kenar + 2px alt tezgâh çizgisi

## Yasaklar

- Sepya/vintage filtre, gradyan, sıcak sarı-turuncu ikinci accent
- Yumuşak gölge, blur, cam yüzey, 10px üstü radius
- Nakış/desen, kolaj, çıkartma, emoji
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Gövdede el yazısı font, 16.5px altı gövde, 62ch üstü ölçü
- Saf siyah metin (#000), saf beyaz zemin (#fff)

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız ölçü birimi etiketinde dekoratif.
- `--ink-faint` etkileşimli metin değil; ölçü değeri `--ink-soft`.
- Hareket hassasiyeti: ölçülü giriş, overshoot yok; reduced-motion'da susar.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: meşe zeminde slate halka 6.9:1; koyuda 9.2:1.

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
| Sayfa "rustik" görünüyor | Sepya filtre veya ahşap dokusu %5 üstü | Doku %3, filtre yok |
| Geçme çizgisi süs gibi | Çizgi birleşim noktasında değil | Çizgiyi gerçek eklem hizasına taşı |
| Metin sıcak zeminle boğuşuyor | Gövde 16.5px altı veya ink-soft yerine faint | 16.5px + ink-soft |

## Komşu stiller

- **Uyumlu:** `craft-handmade` — malzeme sıcaklığı ortak; el yazısı ve kraft doku kullanılmaz.
- **Uyumlu:** `japandi` — ahşap ve ölçülü boşluk örtüşür; radius farkı korunur.
- **Yasak:** `cyberpunk` — neon ve glitch ahşap fiziğini yıkar.
- **Yasak:** `glassmorphism` — cam/blur, masif malzeme hissini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Fraunces | Fraunces — Google Fonts — display serif, 600 ağırlık, 48px |
| https://fonts.google.com/specimen/Jost | Jost — Google Fonts — gövde geometrik sans, 16.5px/1.66 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — ölçü etiketi 12px |
| https://www.finewoodworking.com/projects | Fine Woodworking — joinery — geçme tipleri ve detay çizimi |
| https://en.wikipedia.org/wiki/Dovetail_joint | Wikipedia — Dovetail joint — kırlangıç kuyruğu geometrisi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Wood Joinery (styles/132-wood-joinery/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="wood-joinery"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 600 başlıkta, --font-body Jost gövdede, --font-mono ölçü etiketinde.
Yüzey: --bg / --surface / --surface-2; radius 4/8px; gölge yok; 1px geçme çizgisi.
Izgara: 12 kolon, gutter 32px, ürün 7/12, bölüm ritmi 88px.
Hareket: enter 0.66s cubic-bezier(.22,.72,.24,1) 20px / stagger 0.06; scroll top 82% 0.8s 24px once:true;
         hover 240ms scale 1.015; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya, gölge, desen, 10px+ radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor.
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="wood-joinery"] { --bg: #f0e9dc; --bg-2: #e6dccb; --surface: #faf5ec; --surface-2: #ece2d1; --ink: #1f1c17; --ink-soft: #4f4a41; --ink-faint: #7b7469; --accent: #33546b; --accent-ink: #f4f8fa; --line: rgba(31,28,23,.16); --radius: 4px; --radius-lg: 8px; --shadow: none; --shadow-hard: none; --font-display: "Fraunces", Georgia, serif; --font-body: "Jost", system-ui, sans-serif; --font-mono: "Courier Prime", Courier, monospace; --tracking: -0.005em; --blur: 0px; --grain: 0.03; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="wood-joinery"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 6.64:1 · `ink-soft / surface-2` 6.85:1 · `accent-ink / accent` 7.50:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Bu stilde `.sig` dekor katmanı yok, z-index düzeltmesi gerekmedi.
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: ahşap geçme: kırlangıç kuyruğu dişleri.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.66s` / `scroll 0.8s` (ikisi de ≤ 1.2 s).
