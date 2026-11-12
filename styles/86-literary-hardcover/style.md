# 86 · Literary Hardcover

> **Bir cümlede:** Edebiyat kitabının kapağını arayüze çeviren stil: tek serif aile, 17px/1.72 gövde, 64ch ölçü ve derinliği 1px hairline ile kâğıt tonundan alan sakin okuma sayfası.

| | |
|---|---|
| **Hissiyat** | sakin · edebî · dokunulur · ölçülü |
| **En iyi** | Kitap/edebiyat platformu, yazar sayfası, okuma kulübü, uzun form arşiv |
| **Kaçın** | Yoğun veri panosu, fiyat karşılaştırma tablosu, oyun/etkinlik landing |
| **Zorluk** | düşük · **Erişilebilirlik** | iyi |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="literary-hardcover"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Literary Hardcover, bir web sayfasını ciltsiz değil **ciltli** bir kitap gibi davranmaya zorlar: tek serif aile (Lora) hem başlık hem gövdede çalışır, satır aralığı 1.72'ye çıkar, ölçü 64ch'te kesilir. Kazanılan şey okuma hızının düşmesi ve metnin hatırlanması; feda edilen şey ekran yoğunluğu ve dekoratif hareket.

Yüzey dili kâğıttan gelir: `--bg` sıcak krem, `--surface` neredeyse beyaz kâğıt, ayrım tek 1px hairline. Gölge yoktur; derinlik ton kademesiyle kurulur. Vurgu olarak sadece kumaş yeşili (`--accent`) kullanılır ve ekranın %6'sını geçmez.

Hareket de kitabın ritmine uyar: 720ms giriş, 860ms scroll reveal, tek seferlik. Hızlı hiçbir şey yok; ama hareketin kendisi de görünmez olmalı — kullanıcı animasyonu değil metni hatırlar.

### Ne değildir

- `editorial-design` değildir: editorial iki aile (Fraunces + Inter) ve bölüm numaralarıyla dergi ritmi kurar; burada tek aile ve numara yok, ölçü 64ch vs 68ch.
- `luxury-typography` değildir: lüks stilde display Cormorant 58px ve geniş tracking vardır; burada display de Lora'dır, tracking negatiftir (−0.01em) ve punto 58px'tir.
- `dark-academia` değildir: koyu zemin ve gravür dokusu yok; zemin krem, dokusu %3 grain.
- `minimalism` değildir: minimalism sans-serif ve 6px kayma ile çalışır; burada serif, 18px kayma ve 260ms hover vardır.

### Nereden gelir

Kökeni Penguin Classics cilt tasarımı ve Bringhurst'ün *The Elements of Typographic Style* kitabındaki ölçü/ritim kurallarıdır. Bugün yeniden kullanılmasının nedeni okuma ürünlerinin (Substack kitap ekleri, edebiyat kulüpleri, online kitabevleri) "içerik = ürün" hâline gelmesi. Klişeye düşmemek için korunması gereken tek detay: başlık ile gövdenin aynı aileden gelmesi ve 1.72 satır aralığının bozulmaması.

### 3 saniyede tanıma testi

1. Başlık ile gövde aynı serif ailede (Lora 600 / Lora 400) — ikinci bir display aile yok.
2. Satır aralığı 1.72 ve ölçü 64ch; gövde 17px (16px değil).
3. Kartlarda gölge yok, yalnız 1px `rgba(27,26,23,.16)` hairline.
4. Zemin sıcak krem `#f2ebdd`; saf beyaz yok.
5. Tek vurgu kumaş yeşili `#2f4a3c`; ikinci renk hiç görünmez.

## Görsel imza

- Tek aile kuralı: `--font-display` = `--font-body` = Lora; mono yalnız künye sayfası ve sayı etiketlerinde.
- Gövde 17px / 1.72 / 64ch; başlık 58px / 1.10 / −0.01em (mobil 34px).
- Ayrım yalnız 1px hairline `--line` (opaklık .16); 2px ve üstü kural yok.
- Kapak bloğu: 4px radius, 1px iç hairline ve `--bg-2` zemin; üstünde 2px'lik tek renk şerit (accent) bulunur.
- Bölüm açılışında ilk paragraf 20px ve `--ink-soft`; drop cap yok (klişe).
- Künye şeridi: mono 11px, tracking .14em, üst/alt hairline, üç hücre.
- Kâğıt grain .03 tek doku; başka desen/illüstrasyon yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2ebdd` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fdfaf2` | kart / panel / modal | tam kanama blok |
| `--ink` | `#1b1a17` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#2f4a3c` | kumaş yeşili: birincil buton, aktif sekme, bölüm şeridi | dekoratif arka plan, ikinci renk, gradyan durağı |
| `--line` | `rgba(27,26,23,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 14.67:1 · `ink-soft / bg` = 7.43:1 · `accent-ink / accent` = 8.75:1 · `ink-faint / bg` = 3.86:1.
- Tek vurgu kuralı: kumaş yeşili yalnız birincil eylem, aktif sekme ve bölüm şeridinde; ekranın ≤%6'sı.
- Yasak kombinasyon: accent + ikinci sıcak renk (terracotta/bordo), gradyan, saf siyah metin (#000).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 58px (mobil 34px) | 600 | 1.1 | -0.01em |
| H2 | Lora | 34px | 600 | 1.22 | -0.005em |
| H3 | Lora | 22px | 600 | 1.22 | -0.005em |
| Gövde | Lora | 17px | 400 | 1.72 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.4 | 0.14em |

- Ölçek oranı: 1.44 — 6 basamak: 11 · 13 · 17 · 22 · 34 · 58.
- Ölçü: 64ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":600,"display":600}; yasak: ikinci display aile, sans-serif başlık, 700/900 ağırlık, 300 ince ağırlık, italik gövde, gövdede mono, 16px altı gövde, drop cap.
- Ölçek oranı 1.44; kullanılan 6 basamak: 11 · 13 · 17 · 22 · 34 · 58.
- `h1 { font-size: clamp(34px, 5.2vw, 58px) }` — mobilde 34px, tracking −0.01em korunur.
- Ağırlık kuralı: 400 gövde, 600 display; 300 ve 700 yasak (Lora'nın optik dengesi 600'de durur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 28px |
| Container genişliği | 1120px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 88px (mobil 56px) |
| Kart içi | 26px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Metin 7 kolon, künye 4 kolon, 1 kolon boşluk; ekran başına 1 asimetrik blok. |

- Asimetri: ekran başına 1 blok simetriden çıkar (metin 7 kolon / künye 4 kolon).
- Bölüm ritmi: art arda en fazla 3 blok aynı hizada; dördüncüde tam genişlik bölüm ayırıcı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 0 1px 0 rgba(27,26,23,.10) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 0 1px 0 rgba(27,26,23,.10) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 4px · `--radius-lg` 10px. Radius 4px (buton/input/chip) ve 10px (kart/dialog); 12px üstü yasak; kapak görselinde 2px iç radius; tablo satırı 0.
- Derinlik nereden gelir: Derinlik gölgeden değil 1px hairline ve kâğıt tonundan gelir; yumuşak gölge yalnız yüzen menüde tek katman 0 8px 24px %8.
- Kenarlık formülü: `1px solid var(--line)`; iç içe yüzeyde kenarlık yerine ton farkı kullanılır.
- Derinlik kaynağı: kâğıt ton kademesi (bg → surface) + hairline; gölge yalnız yüzen menüde tek katman `0 8px 24px rgba(27,26,23,.08)`.
- Radius: `--radius` 4px (buton/input/chip), `--radius-lg` 10px (kart/dialog).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 22px | 4px | 15px/600 body | var(--ink) / var(--bg) | background: var(--accent); 260ms · translateY(1px) · outline 2px var(--accent), offset 2px · opacity .45 · 2px ilerleme çizgisi + metin sabit |
| Buton (ikincil) | 46px | 12px 22px | 4px | 15px/600 body | transparent / var(--ink) | kenar 1px var(--ink), 260ms · opacity .45 |
| Input | 46px | 12px 14px | 4px | 15px/400 body | var(--surface) + 1px solid var(--line) | border 1px var(--ink) + outline 2px var(--accent) · bg var(--surface-2) · border 1px var(--accent) · opacity .5 |
| Kart | — | 26px | 10px | 17px Lora | var(--surface), none | border-color rgba(27,26,23,.28) |
| Chip / badge | 24px | 3px 8px | 4px | 11px/400 mono, .14em | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 64px | 0 32px | — | 13px/400 mono, .1em | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 48px | 0 12px | 0 | 15px/400 body + mono rakam | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 32px | 10px | 22px Lora | 0 8px 24px rgba(27,26,23,.08) | rgba(27,26,23,.40) |
| Toast | 42px | 10px 16px | 4px | 13px/400 body | var(--ink) / var(--bg) | opacity 0→1, 220ms |
| Grafik paleti | — | — | — | 1.5px çizgi | 2 (accent, ink-soft); 1px dashed var(--line), yalnız yatay | mono 11px .14em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — krem zeminde 8.7:1, görünür.
- Dokunma hedefi: chip 24px görünür ama 44px padding ile büyütülür; nav bağlantıları 44×44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 20px ızgara; dolgulu ikon yok |
| Fotoğraf | Kitap kapağı, kâğıt dokusu, okuma masası; sıcak nötr, doygunluk ≤%35, alan ≤%40 |
| İllüstrasyon | Yok — tipografi illüstrasyonun yerini alır; tek istisna bölüm açılışında 1px çizgi vinyet |
| Doku | Kâğıt grain `--grain` .03, overlay, `pointer-events: none`; başka desen yok |
| Logo alanı | Sol üstte 20px boşluk; yazı marka Lora 600 18px, tracking .02em, sembol yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Kapak bloğu 4px radius + 1px iç hairline, üstünde 2px accent şerit; h1 58px, tek CTA | `shots/01-landing.png` |
| Dashboard | düşük | Okuma listesi: 3 satır, satır arası 1px hairline, mono sayaç | `shots/02-dashboard.png` |
| Form | düşük | 46px input, 4px radius, etiket mono 11px .14em; hata metni ink-soft | — |
| Liste / tablo | düşük | 48px satır, 1px alt çizgi, başlık mono 11px; zebra yok | — |
| Boş durum | orta | Tek paragraf 64ch + birincil buton; illüstrasyon yok | — |
| Onboarding | yüksek | Üç adım, sol kolon metin 7/12, sağ kolon künye 4/12 | — |
| Pricing | orta | Üç plan kartı 10px radius, 1px hairline; accent yalnız önerilen planın şeridinde | — |
| Giriş / ödeme | çok düşük | Tek kolon 420px form, ortalanmış; sosyal buton ikincil | — |
| Modal | orta | 480px, 10px radius, tek yumuşak gölge; backdrop %40 ink | — |
| Bildirim / toast | orta | Sol alt, 42px, ink zemin + bg metin, 4px radius | — |
| Hata | düşük | Başlık 34px + tek paragraf 64ch + accent ikincil buton | — |
| Profil / ayar | orta | İki kolon: form 7/12, künye 4/12; hairline ayırıcı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `cubic-bezier(.2,.6,.2,1)` | `opacity` + 1px `translateY` |
| Giriş (enter) | 720ms | `cubic-bezier(.2,.6,.2,1)` | `opacity` + 18px `translateY`, stagger 0.055s (55ms) |
| Scroll reveal | 860ms | aynı eğri | `top 81%` tetikleyici, `opacity` + 20px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 260ms | aynı eğri | `transform: scale(1.018)` |
| Ödül / vurgu | 380ms | `cubic-bezier(.2,.6,.2,1)` | accent şerit genişliği 0→100% (tek atım) |

- Süre bütçesi: enter 720ms ≤ 1200ms · scroll 860ms ≤ 1200ms · stagger 0.055s (55ms).
- Giriş yalnız başlık ve bölüm ilk paragrafında; paragraf paragraf fade-in yok.
- Pin/parallax yok: okuma akışı sabit kalır, scrub'lı bir sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, reveal yalnız opacity'ye düşer.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2ebdd` | `#191813` |
| `--surface` | `#fdfaf2` | `#1e1d16` |
| `--ink` | `#1b1a17` | `#f2eee2` |
| `--accent` | `#2f4a3c` | `#a8c3b2` |
| `--line` | `rgba(27,26,23,.16)` | `rgba(242,238,226,.14)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 15.32:1 · `accent-ink / accent` = 9.90:1.
- Koyu modda kâğıt kremi sıcak antrasite (`#191813`) döner; accent açık adaçayına (`#a8c3b2`) çekilir.
- Gölge yine yok; hairline opaklığı .16'dan .14'e düşer, radius değişmez.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar

- Tek aile kuralı: display = body = Lora; mono yalnız künye, sayfa numarası ve etikette
- Gövde 17px / 1.72 / 64ch; başlık 58px / 1.10 / −0.01em (mobil 34px)
- Ayrım yalnız 1px hairline (--line, opaklık .16); 2px ve üstü kural yasak
- Kartlarda gölge yok; derinlik ton kademesi (bg → surface → surface-2) ile kurulur
- Tek vurgu kumaş yeşili #2f4a3c; ekranın ≤%6'sı, accent üstü daima --accent-ink
- Bölüm arası 88px (mobil 56px), kart içi 26px, radius 4/10px
- Kâğıt grain .03 tek doku; ikinci desen/illüstrasyon yok
- Kapak bloğu: 4px radius + 1px iç hairline + üstte 2px accent şerit (ekran başına 1)

## Yasaklar

- İkinci display aile, sans-serif başlık, 700/900 ağırlık, 300 ince ağırlık
- Kart gölgesi, blok gölge, 2px+ kenar, çift çerçeve
- Saf siyah (#000) metin veya saf beyaz (#fff) zemin, gradyan zemin
- İkinci vurgu rengi (terracotta/bordo/mavi), neon, glow
- Drop cap, el yazısı font, illüstrasyon, foto kolaj
- Gövde metninde mono, uppercase veya 16px altı punto
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Paragraf paragraf fade-in; reveal yalnız başlık ve ilk paragrafta

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — dekoratif etiketlerde; etkileşimli metin olarak kullanılmaz.
- `--ink-faint` sadece künye/sayfa numarası gibi dekoratif metinde; gövde daima `--ink` veya `--ink-soft`.
- Hareket hassasiyeti: reveal tek seferlik ve 860ms; reduced-motion'da tamamen susar.
- Şeffaf yüzey yok (`--blur: 0`); `@supports` fallback gerekmez.
- Odak görünürlüğü: krem zeminde accent halka 8.7:1 — koyu modda `--accent` açık tonu 9.9:1.

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
| Sayfa "blog gibi" duruyor | İkinci bir display aile veya 16px gövde eklenmiş | Tek aile + 17px/1.72 sabitle |
| Okuma yoruyor | Ölçü 64ch üstüne çıkmış | `max-width: 64ch` ve 28px kolon boşluğu |
| Kartlar kutu kutu görünüyor | Gölge veya 2px kenar eklenmiş | Gölgeyi sil, 1px hairline + ton kademesi |

## Komşu stiller

- **Uyumlu:** `editorial-design` — uzun form ve bölüm ritmi aynı; editorial garnitür olarak kullanılır.
- **Uyumlu:** `dark-academia` — aynı serif disiplini; koyu bölüm geçişinde kullanılabilir.
- **Yasak:** `neo-brutalism` — sert ofset gölge ve 3px kenar kâğıt fiziğini bozar.
- **Yasak:** `cyberpunk` — neon ve glitch, tek renk vurgu kuralını yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style | Bringhurst — The Elements of Typographic Style — ölçü, ritim ve 1.72 satır aralığı kuralı |
| https://fonts.google.com/specimen/Lora | Lora — Google Fonts — tek aile kuralı, 400/600 ağırlık, 17px gövde |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — künye şeridi ve mono etiket |
| https://practicaltypography.com/ | Practical Typography (Butterick) — ölçü (ch) ve başlık/gövde ilişkisi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Literary Hardcover (styles/86-literary-hardcover/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="literary-hardcover"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = Lora (600 başlık, 400 gövde); --font-mono yalnız künye/etiket.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius --radius 4px, --radius-lg 10px; kart gölgesi yok.
Izgara: 7/4 kolon asimetri, gutter 28px, gövde 64ch, bölüm ritmi 88px.
Hareket: enter 0.72s cubic-bezier(.2,.6,.2,1) 18px / stagger 0.055; scroll top 81% 0.86s 20px once:true;
         hover 260ms scale 1.018; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, 2px+ kenar, ikinci aile, neon).
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
[data-style="literary-hardcover"] { --bg: #f2ebdd; --bg-2: #e8dfcd; --surface: #fdfaf2; --surface-2: #ece3d3; --ink: #1b1a17; --ink-soft: #4e4a42; --ink-faint: #7b7568; --accent: #2f4a3c; --accent-ink: #f7f3e8; --line: rgba(27,26,23,.16); --radius: 4px; --radius-lg: 10px; --shadow: 0 1px 0 rgba(27,26,23,.10); --shadow-hard: none; --font-display: "Lora", Georgia, "Times New Roman", serif; --font-body: "Lora", Georgia, "Times New Roman", serif; --font-mono: "IBM Plex Mono", ui-monospace, monospace; --tracking: -0.01em; --blur: 0px; --grain: 0.03; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="literary-hardcover"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
