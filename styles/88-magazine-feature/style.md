# 88 · Magazine Feature

> **Bir cümlede:** Dergi feature açılışı: Fraunces 64px display, 34px kayma, 0.9s reveal ve tek pin'li pull-quote sahnesi — okunan değil "sayfası çevrilen" bir editoryal yüzey.

| | |
|---|---|
| **Hissiyat** | gösterişli · editoryal · sinematik · sıcak |
| **En iyi** | Marka hikâyesi, dergi feature, sezon kampanyası, vaka çalışması |
| **Kaçın** | Yoğun dashboard, hızlı form akışı, düşük bant genişliği olan pazar |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="magazine-feature"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Magazine Feature bir sayfayı dergi açılışı gibi kurgular: 7/12 tam kanama görsel, üstünde Fraunces 64px/1.04 display, altında 58ch ölçü gövde (Jost 17px/1.66). Kazanılan şey anlatı hissi ve marka sıcaklığı; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 2 fikir.

Derinlik yumuşak tek gölgeden (`0 10px 30px` %12) ve 14px radius'lu görsel kartlarından gelir. Vurgu böğürtlen `#8a2f52`; yalnız pull-quote işareti, birincil buton ve etiket çizgisinde, ekranın ≤%7'si.

Hareket sinematiktir ama tek sahnede kalır: 0.9s `power2.out` giriş, 1.0s scroll reveal, **tek pin** (scrub 0.9, +110%) ile pull-quote sabitlenir. Pin mobilde kapalı, reduced-motion'da statik poster kalır.

### Ne değildir

- `editorial-design` değildir: editorial iki aile ve numaralı bölümlerle dergi ızgarası kurar, pin'i yoktur; burada tek display ailesi, 34px kayma ve 1 pin vardır.
- `luxury-typography` değildir: lüks 58px Cormorant ve 320ms hover ile sakin kalır; burada 64px Fraunces, 320ms hover scale 1.03 ve tam kanama görsel vardır.
- `maximalism` değildir: maximalism katman ve desen yığar; burada ekran başına 1 tam kanama görsel ve 1 pull-quote sınırı vardır.
- `magazine-feature` bir "blog şablonu" değildir: pin sahnesi ve 7/5 asimetrisi olmadan uygulanmaz.

### Nereden gelir

Kökeni 1960'ların *Esquire*/*Vogue* feature açılışları ve 2010'ların scroll-driven editoryal siteleridir (NYT Snow Fall sonrası). Bugün marka hikâyesi ve vaka çalışması sayfalarında geri döndü çünkü ürün anlatısı aranıyor. Klişeye düşmemek için korunması gereken detay: tek pin sahnesi ve pull-quote'un gerçekten alıntı olması.

### 3 saniyede tanıma testi

1. Display Fraunces 600 64px/1.04, tracking −0.02em; gövde Jost 17px/1.66.
2. Ekran başına 1 tam kanama görsel (7/12) + 1 pull-quote; ikinci büyük görsel yok.
3. Görsel kartlarında 14px radius ve tek yumuşak gölge (`0 10px 30px` %12).
4. Tek vurgu böğürtlen `#8a2f52`, yalnız pull-quote işareti ve birincil CTA'da.
5. Bir pin sahnesi: pull-quote sabitlenir, scrub 0.9; mobilde pin kapalı.

## Görsel imza

- Display Fraunces 600 64px / 1.04 / −0.02em (mobil 36px); gövde Jost 17px / 1.66 / 58ch.
- 7/5 asimetri: görsel 7 kolon, metin 5 kolon; ekran başına 1 tam kanama görsel.
- Pull-quote: 28px Fraunces 500, sol 3px accent çizgi, 32px iç boşluk; ekran başına 1.
- Görsel kartı: 14px radius, tek gölge `0 10px 30px rgba(26,22,20,.12)`, üstünde %2 grain.
- Etiket çizgisi: mono 11px, tracking .16em, 1px alt hairline, başlığın 14px üstünde.
- Tek pin sahnesi: scrub 0.9, +110% mesafe, mobilde statik.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#faf6f0` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fffdf9` | kart / panel / modal | tam kanama blok |
| `--ink` | `#1a1614` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#8a2f52` | böğürtlen: pull-quote çizgisi, birincil CTA, aktif etiket | gövde metni, ikinci renk, gradyan durağı |
| `--line` | `rgba(26,22,20,.14)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.69:1 · `ink-soft / bg` = 9.09:1 · `accent-ink / accent` = 7.38:1 · `ink-faint / bg` = 4.42:1.
- Tek vurgu kuralı: böğürtlen yalnız pull-quote çizgisi, birincil CTA ve aktif etiket; ekranın ≤%7'si.
- Yasak kombinasyon: accent + ikinci sıcak renk (turuncu/mercan), gradyan, renkli gölge.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 64px (mobil 36px) | 600 | 1.04 | -0.02em |
| H2 | Fraunces | 38px | 600 | 1.14 | -0.01em |
| H3 | Fraunces | 24px | 600 | 1.14 | -0.01em |
| Gövde | Jost | 17px | 400 | 1.66 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.4 | 0.16em |

- Ölçek oranı: 1.5 — 6 basamak: 11 · 13 · 17 · 24 · 38 · 64.
- Ölçü: 58ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":600}; yasak: ikinci display aile, 700/900 ağırlık, 300 ince ağırlık, italik gövde, gövdede uppercase, gövdede mono, 16px altı gövde, 64px üstü display.
- Ölçek oranı 1.5; kullanılan 6 basamak: 11 · 13 · 17 · 24 · 38 · 64.
- `h1 { font-size: clamp(36px, 6vw, 64px) }`; 64px üstü display yasak (feature başlığı 2 satırı geçmez).
- Ağırlık: display 600 (Fraunces "soft" optik), gövde 400, strong 500; 700/900 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 104px (mobil 60px) |
| Kart içi | 30px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Metin 5 kolon, görsel 7 kolon; ekran başına 1 tam kanama görsel ve 1 pull-quote. |

- Asimetri: metin 5 kolon / görsel 7 kolon; ekran başına 1 tam kanama görsel.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde tam kanama görsel veya pull-quote girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 0 10px 30px rgba(26,22,20,.12) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 0 10px 30px rgba(26,22,20,.12) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 2px · `--radius-lg` 14px. Radius 2px (buton/input/chip) ve 14px (görsel kartı/modal); 14px üstü yasak; avatar 50%; tablo satırı 0.
- Derinlik nereden gelir: Tek yumuşak gölge (bir katman) yalnız görsel kartı, hover ve modalda; sert ofset gölge yok; kenarlık + gölge yalnız görsel kartında birlikte.
- Kenarlık: kart 1px hairline + tek gölge; kenarlık ve gölge aynı anda yalnız görsel kartında.
- Derinlik kaynağı: yumuşak gölge (tek katman) + radius 14px; sert gölge yok.
- Radius: `--radius` 2px (buton/input/chip), `--radius-lg` 14px (görsel kartı/modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 14px 24px | 2px | 15px/500 body, .02em | var(--accent) / var(--accent-ink) | shadow 0 10px 30px rgba(26,22,20,.12), 320ms · translateY(1px) · outline 2px var(--accent), offset 2px · opacity .45 · metin + 2px çizgi |
| Buton (ikincil) | 48px | 14px 24px | 2px | 15px/500 body | transparent / var(--ink) | border-color var(--ink) |
| Input | 48px | 12px 14px | 2px | 17px/400 body | var(--surface) + 1px solid var(--line) | outline 2px var(--accent), offset 1px · bg var(--surface-2) · kenar 1px var(--accent) + mono hata satırı · opacity .5 |
| Kart | — | 30px | 14px | 17px Jost | var(--surface), 0 10px 30px rgba(26,22,20,.12) | shadow 0 14px 40px rgba(26,22,20,.16) |
| Chip / badge | 26px | 4px 10px | 2px | 11px/400 mono, .16em uppercase | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 72px | 0 36px | — | 13px/500 body | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 52px | 0 14px | 0 | 15px/400 body | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 36px | 14px | 24px Fraunces | 0 10px 30px rgba(26,22,20,.12) | rgba(26,22,20,.45) |
| Toast | 44px | 12px 18px | 2px | 13px/400 body | var(--ink) / var(--bg) | translateY(8px) + opacity, 260ms |
| Grafik paleti | — | — | — | 2px çizgi | 2 (accent, ink-soft); yok | mono 11px .16em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — krem zeminde 9.1:1.
- Dokunma hedefi: etiket chip'i 44px'e padding ile çıkar; galeri okları 44×44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 20px ızgara; dolgulu ikon yok |
| Fotoğraf | Moda/portre/editoryal fotoğraf; sıcak nötr ton, alan ≤%55, tam kanama 1 kez |
| İllüstrasyon | Yok — fotoğraf + tipografi yeterli |
| Doku | Grain `--grain` .02 yalnız fotoğraf üstünde; sayfa zemininde doku yok |
| Logo alanı | Sol üst 22px boşluk; yazı marka Fraunces 600 20px, sembol yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/12 tam kanama görsel + 5/12 metin, h1 64px, etiket çizgisi | `shots/01-landing.png` |
| Dashboard | düşük | İçerik takvimi: 3 kart, 14px radius, tek gölge | `shots/02-dashboard.png` |
| Form | düşük | 44px input, 2px radius, etiket mono 11px | — |
| Liste / tablo | düşük | 48px satır, 1px hairline, mono tarih | — |
| Boş durum | orta | 28px Fraunces başlık + tek paragraf 58ch | — |
| Onboarding | yüksek | İki adım, her adımda 1 görsel kartı; pin yok | — |
| Pricing | orta | Üç kart, ortadaki accent çizgili; gölge yalnız hover | — |
| Giriş / ödeme | çok düşük | Tek kolon 400px, 2px radius, görsel yok | — |
| Modal | orta | 560px, 14px radius, tek gölge, backdrop %45 | — |
| Bildirim / toast | orta | Sağ alt, 44px, ink zemin + bg metin, 2px radius | — |
| Hata | düşük | Fraunces 38px başlık + tek paragraf + ikincil buton | — |
| Profil / ayar | orta | Form 5/12 + görsel 7/12; hairline ayırıcı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `power2.out` | `transform: scale(.985)` + gölge 0'a düşer |
| Giriş (enter) | 900ms | `power2.out` | `opacity` + 34px `translateY`, stagger 0.1s (100ms) |
| Scroll reveal | 1000ms | aynı eğri | `top 77%` tetikleyici, `opacity` + 28px `translateY`, `once: true` |
| Pin / scrub | — | — | tek pin: scrub 0.9, +110%; mobilde kapalı |
| Hover | 320ms | aynı eğri | `transform: scale(1.03)` |
| Ödül / vurgu | 420ms | `power2.out` | pull-quote accent çizgisi 0→100% yükseklik (tek atım) |

- Süre bütçesi: enter 900ms ≤ 1200ms · scroll 1000ms ≤ 1200ms · stagger 0.1s (100ms).
- Tek pin sahnesi (scrub 0.9, +110%); sayfada ikinci scrub yasak, mobilde pin kapalı.
- Reveal bir kez (`once: true`); geri kaydırınca tekrar oynamaz.
- `prefers-reduced-motion`: süreler 0.01ms, pin/scrub kapalı, poster statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#faf6f0` | `#161113` |
| `--surface` | `#fffdf9` | `#1b1417` |
| `--ink` | `#1a1614` | `#f4ece7` |
| `--accent` | `#8a2f52` | `#e08aa6` |
| `--line` | `rgba(26,22,20,.14)` | `rgba(244,236,231,.14)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.02:1 · `accent-ink / accent` = 7.56:1.
- Koyu modda krem zemin sıcak antrasite (`#161113`) döner; accent açık gül (`#e08aa6`) olur.
- Gölge koyu modda `0 10px 30px rgba(0,0,0,.42)` tek katman; radius değişmez.
- Grain fotoğrafta kalır, zeminde açılmaz.

## Zorunlu kurallar

- Display Fraunces 600 64px/1.04/−0.02em (mobil 36px); gövde Jost 17px/1.66/58ch
- 7/5 asimetri ve ekran başına 1 tam kanama görsel; ikinci büyük görsel yok
- Görsel kartı 14px radius + tek yumuşak gölge `0 10px 30px rgba(26,22,20,.12)`
- Tek vurgu böğürtlen #8a2f52, ekranın ≤%7'si, accent üstü daima --accent-ink
- Ekran başına en fazla 1 pull-quote (28px Fraunces 500 + 3px accent çizgi)
- Bölüm arası 104px (mobil 60px), kart içi 30px, radius 2/14px
- Tek pin sahnesi: scrub 0.9, +110%, mobilde kapalı
- Grain .02 yalnız fotoğraf üstünde; sayfa zemini düz

## Yasaklar

- İkinci display aile, 700/900 ağırlık, 300 ince ağırlık, italik gövde
- Çoklu tam kanama görsel, otomatik carousel, marquee, sürekli döngü
- İkinci vurgu rengi (turuncu/mercan/neon), gradyan zemin, renkli gölge
- İki scrub veya iki ScrollTrigger; pin'in mobilde açık bırakılması
- Saf siyah (#000) zemin, saf beyaz (#fff) metin, filter: invert()
- 16px altı gövde, 58ch üstü ölçü, gövdede uppercase/mono
- Fotoğraf üstüne renkli overlay (yalnız %12 ink scrim)

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız künye/tarih satırında dekoratif.
- `--ink-faint` etkileşimli metin değil; pull-quote daima `--ink`.
- Hareket hassasiyeti: pin + scrub vestibüler risk taşır; reduced-motion'da tamamen statik.
- Şeffaf yüzey yok (`--blur: 0`); gölge tek katman, `@supports` gerekmez.
- Odak görünürlüğü: krem zeminde accent halka 9.1:1; fotoğraf üstünde buton ink zeminle ayrılır.

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
| Sayfa "sonsuz carousel" gibi | Birden fazla tam kanama görsel + otomatik döngü | Ekran başına 1 görsel, döngü yok |
| Pin titriyor | İki ayrı rAF döngüsü veya ikinci ScrollTrigger | Tek saat: tek ScrollTrigger, tek scrub |
| Uzun metin okunmuyor | Ölçü 58ch üstü veya satır aralığı 1.6 altı | 58ch + 1.66 satır aralığı |

## Komşu stiller

- **Uyumlu:** `editorial-design` — aynı editoryal ritim; bölüm ayrımında garnitür olur.
- **Uyumlu:** `maximalism` — kanama görsel + katman dili örtüşür, doz düşük tutulur.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius, feature sıcaklığını kırar.
- **Yasak:** `neo-brutalism` — sert ofset gölge, tek yumuşak gölge kuralına aykırı.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Fraunces | Fraunces — Google Fonts — soft display serif, 600 ağırlık, −0.02em |
| https://fonts.google.com/specimen/Jost | Jost — Google Fonts — gövde geometrik sans, 17px/1.66 |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | GSAP — ScrollTrigger pin — tek pin sahnesi, scrub ve mobilde kapatma |
| https://www.nytimes.com/projects/2012/snow-fall/ | NYT — Snow Fall — scroll-driven feature anlatısı, tek sahne |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Magazine Feature (styles/88-magazine-feature/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="magazine-feature"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Fraunces 600 başlıkta, --font-body Jost gövdede, --font-mono JetBrains Mono etikette.
Yüzey: --bg / --surface / --surface + tek yumuşak gölge; radius 2px/14px; sert gölge yok.
Izgara: 7/5 asimetri, gutter 24px, bölüm ritmi 104px, ekran başına 1 tam kanama görsel.
Hareket: enter 0.9s power2.out 34px / stagger 0.1; scroll top 77% 1.0s 28px once:true;
         pin scrub 0.9 +110% (mobil kapalı); hover 320ms scale 1.03. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (ikinci scrub, çoklu kanama, gradyan, renkli gölge).
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
[data-style="magazine-feature"] { --bg: #faf6f0; --bg-2: #f0e9df; --surface: #fffdf9; --surface-2: #f4eee4; --ink: #1a1614; --ink-soft: #4b423d; --ink-faint: #7b716a; --accent: #8a2f52; --accent-ink: #fdf3f0; --line: rgba(26,22,20,.14); --radius: 2px; --radius-lg: 14px; --shadow: 0 10px 30px rgba(26,22,20,.12); --shadow-hard: none; --font-display: "Fraunces", Georgia, serif; --font-body: "Jost", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace; --tracking: -0.02em; --blur: 0px; --grain: 0.02; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="magazine-feature"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
