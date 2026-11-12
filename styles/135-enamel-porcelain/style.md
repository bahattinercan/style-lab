# 135 · Enamel Porcelain

> **Bir cümlede:** Mine ve porselen: sırlı beyaz yüzey, 6px yumuşak köşe, koyu mine yeşili kontur ve 0.44s parlak ama ölçülü giriş.

| | |
|---|---|
| **Hissiyat** | temiz · sırlı · rafine · soğuk |
| **En iyi** | Porselen/mine ürün vitrini, sofra markası, butik otel, kuyumcu kataloğu |
| **Kaçın** | Yoğun dashboard, endüstriyel panel, çocuk oyunu |
| **Zorluk** | düşük · **Erişilebilirlik** | iyi |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="enamel-porcelain"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Enamel Porcelain sırlı yüzeyi kurar: fildişi sır zemin, 6px yumuşak köşe, 1px koyu yeşil mine konturu ve ince Poiret One 40px display. Kazanılan şey rafinelik ve temizlik; feda edilen şey yoğunluk — ekran başına 1 ürün ve 1 detay notu.

Sır etkisi iki ışıkla verilir: üst kenarda 1px açık highlight ve kart altında 2px yumuşak gölge (`0 1px 2px`). Renk asla sır üstünde parlamaz; mine yeşili yalnız kontur, birincil buton ve aktif sekmede.

Hareket sırlı tok bir harekettir: 0.44s `cubic-bezier(.34,1.3,.64,1)` giriş, 10px kayma, 50ms stagger; hover 200ms ve 1.025. Pin yok — ürün sabit durur.

### Ne değildir

- `glassmorphism` değildir: cam bulanık ve yarı saydamdır; burada yüzey opak porselen, blur 0.
- `liquid-glass` değildir: liquid-glass akışkan ve koyu camdır; burada sırlı beyaz ve koyu yeşil kontur var.
- `claymorphism` değildir: clay pastel yumuşak gölgeyle çalışır; burada 1px koyu yeşil kontur ve 2px gölge imzadır.
- `porcelain-glaze` değildir: 129 aynı malzeme ailesinden sırlı porseleni 14/28px radius ve kobalt-mavi aksanla kurar; burada 6/12px radius, fildişi zemin ve koyu yeşil mine konturu var.
- `enamel-porcelain` bir "beyaz minimal tema" değildir: koyu yeşil kontur ve sır highlight'ı olmadan uygulanmaz.

### Nereden gelir

Kökeni 19. yüzyıl emaye tabelaları, Limoges mine işi ve eczane/hastane emayeleridir: fildişi sır zemin, koyu yeşil kontur yazı, az sayıda motif. Bugün sofra/otel markalarında geri döndü çünkü "hijyen + el işçiliği" aynı yüzeyde anlatılabiliyor. Klişeye düşmemek için korunması gereken detay: koyu yeşil mine renginin yalnız kontur/aksiyon olması, dolgu olmaması.

### 3 saniyede tanıma testi

1. Porselen beyaz zemin; gövde ve başlık neredeyse aynı beyazlıkta.
2. 1px koyu yeşil kontur buton ve kartta; dolgu yalnız butonda.
3. 6px radius; 12px üstü yok.
4. Poiret One 40px display, çok ince; gövde Nunito 16px.
5. Üst kenarda 1px açık highlight (sır parlaması), başka parlama yok.

## Görsel imza

- Poiret One 400 40px / 1.2 / 0.08em display (mobil 26px); gövde Nunito 16px / 1.66 / 62ch.
- Kobalt kontur: 1px `--accent` buton/kart kenarında; dolgu yalnız birincil butonda.
- Sır highlight: `inset 0 1px 0 var(--surface)` üst kenarda; gölge `0 1px 2px` yalnız kartta.
- Radius 6px (buton/input) / 12px (kart, görsel kabı).
- Ürün adı + malzeme satırı: mono 12px, "porselen · sırlı" biçiminde.
- Desen yok; tek süs 1px mine yeşili çizgi (bölüm ayırıcı, ekran başına 1).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f8f6f0` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fffdf8` | kart / panel / modal | tam kanama blok |
| `--ink` | `#131a18` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#17543f` | koyu yeşil mine: kontur, birincil buton dolgusu, aktif sekme | altın varak, ikinci renk, geniş yeşil dolgu |
| `--line` | `rgba(19,26,24,.14)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.35:1 · `ink-soft / bg` = 7.65:1 · `accent-ink / accent` = 8.30:1 · `ink-faint / bg` = 3.83:1.
- Tek vurgu kuralı: mine yeşili yalnız kontur, birincil buton dolgusu ve aktif sekmede; ekranın ≤%6'sı.
- Yasak kombinasyon: altın/gold varak, ikinci renk (yeşil/bordo), gradyan, renkli gölge.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poiret One | 40px (mobil 26px) | 400 | 1.2 | 0.08em |
| H2 | Poiret One | 26px | 400 | 1.25 | 0.06em |
| H3 | Poiret One | 19px | 400 | 1.25 | 0.06em |
| Gövde | Nunito | 16px | 400 | 1.66 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.4 | 0.14em |

- Ölçek oranı: 1.3 — 6 basamak: 11 · 12 · 16 · 19 · 26 · 40.
- Ölçü: 62ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":600,"display":400}; yasak: 700 display ağırlık, italik display, gövdede Poiret One, gövdede majüskül, 40px üstü başlık, gövdede mono, negatif tracking.
- Ölçek oranı 1.3; kullanılan 6 basamak: 11 · 12 · 16 · 19 · 26 · 40.
- `h1 { font-size: clamp(26px, 3.6vw, 40px) }`; Poiret One 40px üstü incelir ve kaybolur.
- Ağırlık: display 400 (tek ağırlık), gövde 400/600; 700 display yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 28px |
| Container genişliği | 1100px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 92px (mobil 56px) |
| Kart içi | 26px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Ürün 6/12, metin 5/12, 1 kolon boşluk; ekran başına 1 asimetrik blok. |

- Asimetri: ürün 6/12, metin 5/12, 1 kolon boşluk; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde mine yeşili çizgi girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 0 1px 2px rgba(19,24,32,.10) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 0 1px 2px rgba(19,24,32,.10) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 6px · `--radius-lg` 12px. Radius 6px (buton/input/chip) ve 12px (kart/görsel kabı); 12px üstü yasak; tablo satırı 0; avatar 50%.
- Derinlik nereden gelir: Derinlik 1px sır highlight (inset üst kenar) + tek 2px yumuşak gölgeden gelir; 3+ katman gölge ve renkli gölge yok.
- Kenarlık: 1px mine yeşili (aksiyon yüzeylerinde) veya 1px `--line` (nötr kartlarda).
- Derinlik kaynağı: sır highlight (1px) + 2px yumuşak gölge; 3+ katman gölge yok.
- Radius: `--radius` 6px, `--radius-lg` 12px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 13px 24px | 6px | 15px/600 body, .02em | var(--accent) / var(--accent-ink) | bg var(--ink), 200ms · scale(.985) · outline 2px var(--accent), offset 2px · opacity .45 · kontur 0→100% dolar |
| Buton (ikincil) | 48px | 13px 24px | 6px | 15px/500 body | var(--surface) / var(--accent) | bg var(--bg-2) |
| Input | 48px | 12px 14px | 6px | 16px/400 body | var(--surface) + 1px solid var(--line) | border 1px var(--accent) + outline 2px var(--accent) · bg var(--surface-2) · border 1px var(--accent) + 12px mesaj · opacity .5 |
| Kart | — | 26px | 12px | 16px Nunito | var(--surface) | gölge 0 2px 4px rgba(19,24,32,.12) |
| Chip / badge | 26px | 4px 10px | 6px | 12px/400 mono, .14em | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 68px | 0 28px | — | 13px/500 body | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 52px | 0 12px | 0 | 16px/400 body + 12px mono | transparent | bg var(--surface-2) · bg var(--bg-2) |
| Modal / sheet | — | 30px | 12px | 19px Poiret One | 0 1px 2px rgba(19,24,32,.10) | rgba(19,24,32,.40) |
| Toast | 42px | 11px 16px | 6px | 13px/600 body | var(--accent) / var(--accent-ink) | translateY(4px) + opacity, 200ms |
| Grafik paleti | — | — | — | 1.5px | 2 (accent, ink-soft); 1px hairline | 12px mono .14em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — porselen beyazında 9.0:1.
- Dokunma hedefi: 48px buton; ürün kartı tümüyle tıklanabilir.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, yuvarlak uç, 20px ızgara; mine yeşili tek renk |
| Fotoğraf | Ürün fotoğrafı: sırlı yüzey, yumuşak stüdyo ışığı, alan ≤%45; sert gölge yok |
| İllüstrasyon | Yok — istisna: 1 adet mine yeşili çizgi motif (dalga/çizgi), ekran başına 1 |
| Doku | Yok (`--grain: 0`); sır efekti highlight ile |
| Logo alanı | Sol üst 24px, Poiret One 20px, 0.1em |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 40px Poiret One başlık + 6/12 ürün kabı (6px radius, sır highlight) | `shots/01-landing.png` |
| Dashboard | düşük | Ürün listesi: 3 kart, 1px koyu yeşil kontur | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 6px radius, 1px line | — |
| Liste / tablo | düşük | 52px satır, 1px hairline, mono malzeme | — |
| Boş durum | orta | "koleksiyon boş" + tek çizgi motif + CTA | — |
| Onboarding | orta | İki adım: seç → tamamla | — |
| Pricing | orta | İki koleksiyon; kart yerine koyu yeşil konturlu sütun | — |
| Giriş / ödeme | çok düşük | Tek kolon 380px, mono özet | — |
| Modal | orta | 480px, 12px radius, sır highlight, 2px gölge | — |
| Bildirim / toast | orta | Alt orta, 42px, mine yeşili zemin + accent-ink | — |
| Hata | düşük | Tek cümle + ikincil buton, kontur korunur | — |
| Profil / ayar | orta | Koleksiyon tercihleri + mono ölçü | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 100ms | `cubic-bezier(.34,1.3,.64,1)` | `scale(.985)` + sır highlight kapanır |
| Giriş (enter) | 440ms | `cubic-bezier(.34,1.3,.64,1)` | `opacity` + 10px `translateY`, stagger 50ms |
| Scroll reveal | 500ms | aynı eğri | `top 87%` tetikleyici, `opacity` + 12px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 200ms | aynı eğri | `transform: scale(1.025)` |
| Ödül / vurgu | 340ms | `cubic-bezier(.34,1.3,.64,1)` | koyu yeşil kontur 0→1 opacity (tek atım) |

- Süre bütçesi: enter 440ms ≤ 1200ms · scroll 500ms ≤ 1200ms · stagger 50ms.
- Hareket tok ve kısa: 0.44s giriş, 200ms hover; yay 1.3'te durur (2.0 üstü yasak).
- Pin/parallax yok: ürün sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, highlight statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f8f6f0` | `#101612` |
| `--surface` | `#fffdf8` | `#141a16` |
| `--ink` | `#131a18` | `#f0f4f1` |
| `--accent` | `#17543f` | `#7fd2ae` |
| `--line` | `rgba(19,26,24,.14)` | `rgba(240,244,241,.14)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.51:1 · `accent-ink / accent` = 10.64:1.
- Koyu modda fildişi sır koyu mine zeminine (`#101612`) döner; aksan açık nane tonuna (`#7fd2ae`) çekilir.
- Sır highlight koyuda %10 opaklık kazanır; 2px gölge kalır.
- Radius ve kontur kalınlığı değişmez.

## Zorunlu kurallar

- Poiret One 400 40px/1.2/0.08em display (mobil 26px); gövde Nunito 16px/1.66/62ch
- Kobalt kontur 1px buton/kartta; dolgu yalnız birincil butonda, ekranın ≤%6'sı
- Sır highlight 1px üst kenarda; kart gölgesi tek katman `0 1px 2px`
- Radius 6/12px; 12px üstü yasak; blur/backdrop-filter yok
- Malzeme satırı mono 12px ("porselen · sırlı")
- Bölüm arası 92px (mobil 56px), kart içi 26px; ölçek 4·8·12·16·24·32·48·64
- Desen yok; tek süs 1px mine yeşili çizgi (ekran başına 1)

## Yasaklar

- Altın/gold varak, ikinci renk, gradyan, renkli gölge
- Blur, cam yüzey, yarı saydam panel, 3+ katman gölge
- 12px üstü radius, tam yuvarlak buton (avatar dışında)
- Kobalt dolgu (geniş alan), neon, parlak lak
- Parallax, pin/scrub, marquee, sürekli döngü, overshoot 2.0 üstü
- Gövdede Poiret One, 16px altı gövde, gövdede majüskül
- Saf siyah metin (#000), saf beyaz olmayan gri zemin

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız malzeme alt etiketinde dekoratif.
- `--ink-faint` etkileşimli metin değil; ürün adı ve fiyat `--ink`.
- Hareket hassasiyeti: 1.3 overshoot ve 0.44s; reduced-motion'da susar.
- Şeffaf yüzey yok (`--blur: 0`); sır highlight opak renk.
- Odak görünürlüğü: fildişi zeminde koyu mine halkası 8.6:1; koyu sırda 9.3:1.

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
| Sayfa "cam" gibi | Blur veya yarı saydam yüzey eklenmiş | Opak porselen + 1px kontur |
| Kobalt "boya" olmuş | Dolgu olarak geniş alanda kullanılmış | Kobalt yalnız kontur/aksiyon (≤%6) |
| Display kayboluyor | Poiret One 40px altına inmiş veya 700 ağırlık denenmiş | 40px ve 400 ağırlık |

## Komşu stiller

- **Uyumlu:** `marble-vein` — soğuk lüks yüzey örtüşür; damar deseni kullanılmaz.
- **Uyumlu:** `enamel-porcelain` — kendi bandı; aynı stil tekrar kullanılmaz.
- **Yasak:** `porcelain-glaze` — aynı malzeme ailesi (129): kobalt porselen ile karıştırılmasın diye ayrı tutulur.
- **Yasak:** `glassmorphism` — bulanık cam, opak sır fiziğini bozar.
- **Yasak:** `claymorphism` — pastel yumuşak gölge porselen konturunu yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Poiret+One | Poiret One — Google Fonts — ince display, 400 ağırlık, 40px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde 16px/1.66 |
| https://en.wikipedia.org/wiki/Enamelware | Wikipedia — Enamelware — koyu yeşil kontur yazı ve fildişi sır zemin |
| https://en.wikipedia.org/wiki/Vitreous_enamel | Wikipedia — Vitreous enamel — sır highlight ve opak yüzey fiziği |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 — Non-text contrast — 1px kontur 3:1 eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Enamel Porcelain (styles/135-enamel-porcelain/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="enamel-porcelain"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Poiret One yalnız başlıkta; --font-body Nunito gövdede; --font-mono malzeme etiketinde.
Yüzey: opak porselen + 1px koyu yeşil kontur + 1px sır highlight + tek 2px gölge; radius 6/12px; blur 0.
Izgara: 12 kolon, gutter 28px, ürün 6/12, bölüm ritmi 92px.
Hareket: enter 0.44s cubic-bezier(.34,1.3,.64,1) 10px / stagger 0.05; scroll top 87% 0.5s 12px once:true;
         hover 200ms scale 1.025; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur, altın varak, geniş yeşil dolgu, 12px+ radius).
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
[data-style="enamel-porcelain"] { --bg: #f8f6f0; --bg-2: #efebe1; --surface: #fffdf8; --surface-2: #f2eee4; --ink: #131a18; --ink-soft: #46514c; --ink-faint: #757f7a; --accent: #17543f; --accent-ink: #f1faf4; --line: rgba(19,26,24,.14); --radius: 6px; --radius-lg: 12px; --shadow: 0 1px 2px rgba(19,24,32,.10); --shadow-hard: none; --font-display: "Poiret One", "Jost", system-ui, sans-serif; --font-body: "Nunito", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace; --tracking: 0.08em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="enamel-porcelain"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 8.18:1 · `ink-soft / surface-2` 7.13:1 · `accent-ink / accent` 8.30:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Bu stilde `.sig` dekor katmanı yok, z-index düzeltmesi gerekmedi.
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: mine rozetleri: emaye çerçeve + iç halka.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.44s` / `scroll 0.5s` (ikisi de ≤ 1.2 s).
