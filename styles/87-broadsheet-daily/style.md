# 87 · Broadsheet Daily

> **Bir cümlede:** Gazete baskısının mantığı: masthead'te tek kalın sans, gövdede haber serifi, bitişik kolonlar ve 0 radius — hareket neredeyse yok, çünkü haber bekletmez.

| | |
|---|---|
| **Hissiyat** | acil · ciddi · tipografik · kuru |
| **En iyi** | Haber sitesi, günlük bülten, veri gazeteciliği, kurumsal duyuru sayfası |
| **Kaçın** | Lüks ürün lansmanı, çocuk/oyun ürünü, uzun onboarding akışı |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="broadsheet-daily"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Broadsheet Daily sayfayı bir gazete formu gibi kurar: üstte tek satır masthead (Archivo Black, 46px, uppercase), altında 1px çift kural, gövdede EB Garamond 16.5px/1.56 haber kolonları. Kazanılan şey tarama hızı ve otorite; feda edilen şey yumuşaklık — radius 0, gölge yok, hareket 220ms'in altında.

Bilgi hiyerarşisi yalnız puntodan ve kuraldan gelir: 1px hairline, 3px bölüm kuralı, tek `--accent` kırmızı. Renk asla süs değil, "son dakika" işaretidir ve ekranın %5'ini geçmez.

Hareket "baskı makinesi" gibi kesiklidir: `steps(3, end)` 220ms, 4px kayma, 80ms hover. Bu, gazetenin okunma ritmini bozmaz ve düşük güçlü cihazlarda da aynı görünür.

### Ne değildir

- `swiss-design` değildir: swiss grid ve Helvetica nötrlüğüyle çalışır, hareketi 160ms ease-out'tur; burada masthead kalın sans + gövde serif karışımı, easing `steps(3, end)` ve 94% trigger vardır.
- `editorial-design` değildir: editorial dergi ritmi ve geniş boşluk kullanır; burada bitişik kolonlar ve 12px gutter vardır.
- `minimalism` değildir: minimalism tek sans ve yumuşak ease-out; burada üç kural kalınlığı (1/2/3px) ve kesik hareket var.
- `academic-paper` değildir: makale stilinde kenar boşluğu ve numaralı başlık vardır; burada masthead ve haber kolonları.

### Nereden gelir

Kökeni 20. yüzyıl broadsheet gazeteleri (The Guardian, Frankfurter Allgemeine) ve İsviçre gazete tipografisidir. Bugün veri gazeteciliği ve günlük bülten ürünlerinde geri döndü çünkü yoğun bilgiyi tek ekranda taratabilen az sayıda dil kaldı. Klişeye düşmemek için korunması gereken detay: masthead'in tek satır kalması ve gövdenin serif kalması.

### 3 saniyede tanıma testi

1. Masthead tek satır, Archivo Black 46px, uppercase, tracking −0.02em.
2. Gövde EB Garamond 16.5px/1.56, kolonlar bitişik (gutter 12px), 3px bölüm kuralı.
3. Radius 0px; hiçbir bileşende yuvarlak köşe yok.
4. Tek kırmızı `#a8241b` "son dakika" etiketinde; başka sıcak renk yok.
5. Hareket `steps(3, end)` 220ms — yumuşak geçiş hiç görünmez.

## Görsel imza

- Masthead: Archivo Black 46px uppercase, −0.02em, altında 3px + 1px çift kural (mobil 32px).
- Haber kolonları: EB Garamond 16.5px / 1.56 / 38ch·2 kolon; gutter 12px, kolon arası 1px hairline.
- "Son dakika" şeridi: accent kırmızı zemin + accent-ink metin, 11px mono uppercase, ekran başına 1.
- Radius 0; buton/input/kart keskin köşe. Sadece avatar ve rozet 50%.
- Stats bandı: Share Tech Mono 22px rakamlar, 1px üst kural, üç hücre.
- Kâğıt dokusu: %2 yatay 1px çizgi tekrarı (yalnız section zemininde, 6px aralık).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3f0e9` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fbf9f4` | kart / panel / modal | tam kanama blok |
| `--ink` | `#12141a` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#a8241b` | kırmızı: "son dakika" şeridi, birincil CTA, aktif sekme | grafik serisi, dekor, ikinci vurgu |
| `--line` | `rgba(18,20,26,.18)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.18:1 · `ink-soft / bg` = 8.05:1 · `accent-ink / accent` = 6.74:1 · `ink-faint / bg` = 3.94:1.
- Tek vurgu kuralı: kırmızı yalnız "son dakika", birincil CTA ve aktif sekmede; ekranın ≤%5'i.
- Yasak kombinasyon: kırmızı + ikinci sıcak renk, gradyan, renkli gölge.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 46px (mobil 32px) | 400 | 1.02 | -0.02em |
| H2 | Archivo Black | 30px | 400 | 1.16 | -0.01em |
| H3 | Archivo Black | 20px | 400 | 1.16 | -0.01em |
| Gövde | EB Garamond | 16.5px | 400 | 1.56 | 0 |
| Etiket / mono | Share Tech Mono | 11px | 400 | 1.4 | 0.12em |

- Ölçek oranı: 1.32 — 6 basamak: 11 · 13 · 16.5 · 20 · 30 · 46.
- Ölçü: 38ch (kolon) · 76ch (iki kolon) (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":600,"display":400}; yasak: gövdede sans-serif, masthead'te serif, 700 ağırlık, 300 ince ağırlık, uppercase gövde, italik başlık, geniş tracking gövde.
- Ölçek oranı 1.32; kullanılan 6 basamak: 11 · 13 · 16.5 · 20 · 30 · 46.
- `h1 { font-size: clamp(32px, 4.4vw, 46px) }` — iki satırdan uzun masthead yasak.
- Ağırlık: Archivo Black yalnız 400 (kendi kalınlığı), EB Garamond 400/600; 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 12px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 72px (mobil 44px) |
| Kart içi | 18px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Manşet 8/12 + künye 4/12; ekran başına 2 asimetrik blok (masthead, stats bandı). |

- Asimetri: ekran başına 2 blok — masthead üstü manşet 8/12 + sağ künye 4/12.
- Bölüm ritmi: 3 kolon üst üste aynı hizada kalabilir; dördüncüde 3px bölüm kuralı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 0px · `--radius-lg` 2px. Radius 0px (buton/input/kart), 2px yalnız modal; 4px ve üstü yasak; 50% yalnız avatar/rozet/toggle.
- Derinlik nereden gelir: Gölge yok; derinlik 1px hairline, 3px bölüm kuralı ve kâğıt çizgisinden gelir. Sert ofset yalnız "son dakika" damgasında.
- Kenarlık: 1px hairline (hücre), 3px kural (bölüm); ikisi aynı blokta kullanılmaz.
- Derinlik yok: gölge `none`, `--shadow-hard` yalnız "son dakika" damgasında 2px ofset.
- Radius: `--radius` 0px, `--radius-lg` 2px (yalnız modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 20px | 0px | 12px/400 mono, .12em uppercase | var(--accent) / var(--accent-ink) | translate(2px,2px) + kenar 1px var(--ink) · translate(0,0) · outline 2px var(--accent), offset 2px · opacity .45 · metin + 3 adımlı nokta |
| Buton (ikincil) | 44px | 12px 20px | 0px | 12px/400 mono, .12em | var(--bg) / var(--ink) | bg var(--bg-2) |
| Input | 44px | 10px 12px | 0px | 16.5px/400 body | var(--surface) + 1px solid var(--line) | outline 2px var(--accent), offset -2px · bg var(--bg-2) · alt kenar 3px var(--accent) · opacity .5 |
| Kart | — | 18px | 0px | 16.5px EB Garamond | var(--surface), none | border-color var(--ink) |
| Chip / badge | 22px | 2px 6px | 0px | 11px/400 mono, .12em uppercase | var(--ink) | bg var(--accent), color var(--accent-ink) |
| Nav | 56px | 0 24px | — | 11px/400 mono, .12em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 44px | 0 8px | 0 | 16.5px/400 body + mono rakam | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 24px | 2px | 20px Archivo Black | none | rgba(18,20,26,.45) |
| Toast | 40px | 10px 14px | 0px | 11px/400 mono, .12em uppercase | var(--accent) / var(--accent-ink) | opacity 0→1, steps(3, end) |
| Grafik paleti | — | — | — | 1.5px çizgi | 2 (accent, ink); 1px solid var(--line), yalnız yatay | mono 11px .12em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — haber kolonunda 6.7:1.
- Dokunma hedefi: masthead bağlantıları 44px; chip 22px görünür + 11px dikey padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, kare uç, 16px ızgara; ikon dolgusu yok |
| Fotoğraf | Haber fotoğrafı, yüksek kontrast, doygunluk ≤%50; alan ≤%30, grayscale + tek renk overlay yasak |
| İllüstrasyon | Veri grafiği dışında illüstrasyon yok; grafikler 1.5px çizgi |
| Doku | Kâğıt: %2 opaklıkta 1px yatay çizgi, 6px aralık, yalnız bölüm zemininde |
| Logo alanı | Masthead = logo; ayrı sembol yok, sol üstte 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Masthead + çift kural, manşet 8/12, sağ künye 4/12, "son dakika" şeridi | `shots/01-landing.png` |
| Dashboard | yüksek | Üç kolon haber listesi, 1px hairline, mono tarih | `shots/02-dashboard.png` |
| Form | düşük | Keskin köşe 44px input, 1px kenar, mono etiket | — |
| Liste / tablo | yüksek | 44px satır, 1px alt çizgi, mono rakam hizası | — |
| Boş durum | orta | Tek cümle + 3px kural + ikincil buton | — |
| Onboarding | yüksek | Üç kolon adım, numaralar mono 22px | — |
| Pricing | orta | Üç plan, keskin köşe, aralarında 1px dikey hairline | — |
| Giriş / ödeme | çok düşük | Tek kolon 380px, keskin köşe form, masthead küçük | — |
| Modal | orta | 2px radius, 2px kenar, gölge yok; backdrop %45 ink | — |
| Bildirim / toast | orta | Sağ üst, 40px, accent zemin + accent-ink metin | — |
| Hata | düşük | 3px kural + "HATA" mono etiket + tek paragraf | — |
| Profil / ayar | orta | İki kolon form + künye; 1px hairline ayırıcı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `steps(2, end)` | `translate(2px,2px)` + 1px kenar koyulaşır |
| Giriş (enter) | 220ms | `steps(3, end)` | `opacity` + 4px `translateY`, stagger 0.02s (20ms) |
| Scroll reveal | 280ms | aynı eğri | `top 94%` tetikleyici, `opacity` + 8px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 80ms | aynı eğri | `transform: scale(1.000)` |
| Ödül / vurgu | 260ms | `steps(3, end)` | "son dakika" damgası 0→1 opacity, 2px ofset (tek atım) |

- Süre bütçesi: enter 220ms ≤ 1200ms · scroll 280ms ≤ 1200ms · stagger 0.02s (20ms).
- Hareket kesiklidir: tüm geçişler `steps()`; yumuşak ease-out yalnız odak halkasında.
- Pin/parallax yok: haber akışı sabit hızda kayar, scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, damga animasyonsuz görünür.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f3f0e9` | `#121316` |
| `--surface` | `#fbf9f4` | `#17181c` |
| `--ink` | `#12141a` | `#f0eee8` |
| `--accent` | `#a8241b` | `#e0665a` |
| `--line` | `rgba(18,20,26,.18)` | `rgba(240,238,232,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.01:1 · `accent-ink / accent` = 5.60:1.
- Koyu modda gazete kâğıdı antrasite döner (`#121316`); accent kırmızı açılır (`#e0665a`) ki 4.5:1 korunsun.
- Kural kalınlıkları değişmez (1/2/3px); hairline opaklığı .16.
- Kâğıt çizgisi dokusu koyu modda kapanır (gürültü yapar).

## Zorunlu kurallar

- Masthead tek satır Archivo Black 46px uppercase −0.02em (mobil 32px); altında 3px + 1px çift kural
- Gövde EB Garamond 16.5px / 1.56 / kolon 38ch; gutter 12px
- Radius 0px (buton/input/kart); yalnız avatar ve rozet 50%
- Tek vurgu kırmızı #a8241b, ekranın ≤%5'i, accent üstü daima --accent-ink
- Kural üçlüsü: 1px hairline (hücre), 3px (bölüm), 0px kenarlıksız blok; 2px yalnız modalda
- Bölüm arası 72px (mobil 44px), kart içi 18px; boşluk ölçeği 4·8·12·16·24·32·48·64
- Kâğıt dokusu: %2 opaklıkta 1px yatay çizgi, 6px aralık, yalnız bölüm zemininde
- "Son dakika" şeridi ekran başına 1; mono 11px uppercase .12em

## Yasaklar

- Yuvarlak köşe (4px üstü radius), yumuşak gölge, blur/backdrop-filter
- Gövdede sans-serif veya 16px altı punto; masthead'te serif
- İkinci vurgu rengi, doygun gradyan, renkli ikon
- Uppercase gövde metni, geniş tracking gövde, italik başlık
- Kart gölgesi, 2px+ kenar (modal hariç), çift çerçeve
- Sürekli döngü, marquee, parallax, pin/scrub, yumuşak ease-out geçişler
- Fotoğraf üstüne renkli overlay veya grayscale + neon kombinasyonu

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız tarih/kaynak satırında dekoratif.
- `--ink-faint` etkileşimli metin değil; bağlantılar daima `--ink` veya `--accent`.
- Hareket hassasiyeti: `steps()` kesik hareket vestibüler riski düşük; reduced-motion'da tamamen susar.
- Şeffaf yüzey yok (`--blur: 0`), `@supports` gerekmez.
- Odak görünürlüğü: beyaz kâğıtta kırmızı halka 6.7:1; koyu modda `#e0665a` 5.6:1.

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
| Sayfa "kurumsal site" gibi duruyor | Masthead iki satıra kırılmış veya gövde sans-serif olmuş | Masthead tek satır + gövde EB Garamond |
| Haber okunmuyor | Kolon genişliği 38ch üstünde veya satır aralığı 1.5 altında | Kolon 38ch, 1.56 satır aralığı |
| Kırmızı her yerde | Accent CTA + etiket + grafikte birlikte kullanılmış | Kırmızıyı tek role indir (son dakika) |

## Komşu stiller

- **Uyumlu:** `swiss-design` — aynı grid disiplini; bülten bölümünde garnitür olur.
- **Uyumlu:** `academic-paper` — serif gövde ve kural dili uyumlu.
- **Yasak:** `glassmorphism` — blur ve cam yüzey gazete kâğıdı fiziğini bozar.
- **Yasak:** `dopamine-ui` — doygun renk ve konfeti, tek kırmızı kuralını yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.theguardian.com/info/2015/aug/05/the-guardian-and-observer-2015-redesign | The Guardian — design — broadsheet grid, masthead ve kolon ritmi |
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — Google Fonts — masthead kalınlığı, −0.02em tracking |
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Google Fonts — haber kolonu serifi, 16.5px/1.56 |
| https://fonts.google.com/specimen/Share+Tech+Mono | Share Tech Mono — Google Fonts — stats bandı ve tarih etiketi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 — Non-text contrast — 1px kural ve odak halkası 3:1 eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Broadsheet Daily (styles/87-broadsheet-daily/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="broadsheet-daily"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Archivo Black yalnız masthead'te; --font-body EB Garamond gövdede; --font-mono Share Tech Mono etiket/rakam.
Yüzey: radius 0/2px, gölge yok; derinlik 1px hairline + 3px bölüm kuralından gelir.
Izgara: 12 kolon, gutter 12px, manşet 8/12 + künye 4/12, bölüm ritmi 72px.
Hareket: enter 0.22s steps(3, end) 4px / stagger 0.02; scroll top 94% 0.28s 8px once:true;
         hover 80ms scale 1.000; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (radius, gölge, blur, ikinci renk).
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
[data-style="broadsheet-daily"] { --bg: #f3f0e9; --bg-2: #e8e4da; --surface: #fbf9f4; --surface-2: #ece8df; --ink: #12141a; --ink-soft: #45484f; --ink-faint: #74777e; --accent: #a8241b; --accent-ink: #fdf7f2; --line: rgba(18,20,26,.18); --radius: 0px; --radius-lg: 2px; --shadow: none; --shadow-hard: 2px 2px 0 rgba(18,20,26,.92); --font-display: "Archivo Black", Impact, system-ui, sans-serif; --font-body: "EB Garamond", Georgia, serif; --font-mono: "Share Tech Mono", ui-monospace, monospace; --tracking: -0.02em; --blur: 0px; --grain: 0.02; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="broadsheet-daily"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
