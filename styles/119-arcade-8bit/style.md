# 119 · Arcade 8-bit

> **Bir cümlede:** Modern arcade kabini: Press Start 2P 32px skor başlığı, CRT tarama dokusu, 0.18s steps(4) giriş ve tek neon aksan — nostalji, ama okunur ve klavye erişilebilir.

| | |
|---|---|
| **Hissiyat** | nostaljik · kesik · neon · rekabetçi |
| **En iyi** | Oyun vitrini, skor tablosu, retro lansman, e-spor turnuva sayfası |
| **Kaçın** | Kurumsal doküman, uzun okuma, sağlık/finans formu |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="arcade-8bit"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Arcade 8-bit koyu bir kabin ekranı kurar: `#0e1224` zemin, Press Start 2P 32px skor başlığı, Space Grotesk 16px gövde ve VT323 20px sayaç. Kazanılan şey anında tanınan arcade kodu; feda edilen şey uzun metin konforu — Press Start 2P asla 3 satırı geçmez.

Derinlik piksel kenardan gelir: 1px `--line` çerçeve + 4px köşe kırpma (clip-path), gölge yok. Tek neon mint aksan (`#35e08a`) yalnız skor, odak ve aktif öğede; ekranın ≤%6'sı.

Hareket kabin temposundadır: 0.18s `steps(4, end)` giriş, 8px kayma, 20ms stagger; hover 70ms ve ölçek 1.000 (arcade'de ölçek yok). CRT tarama dokusu statiktir, animasyonlu değildir.

### Ne değildir

- `pixel-art` değildir: pixel-art Silkscreen + Inter ile ızgara pixel dilini kurar; burada Press Start 2P + VT323 sayaç ve steps(4) hareket var.
- `cybercore` değildir: cybercore neon çok renkli ve scanline animasyonludur; burada tek mint aksan ve statik tarama var.
- `terminal-ui` değildir: terminal tek mono aile ve 0px offset kullanır; burada 8px kayma, 4px köşe kırpma ve pixel display var.
- `arcade-8bit` bir "neon oyun afişi" değildir: gövde Space Grotesk okunur puntoda kalır, neon yalnız aksanda.

### Nereden gelir

Kökeni 1980'lerin arcade kabinleri (Pac-Man, Street Fighter skor panelleri) ve 8-bit ev konsollarıdır. Bugün retro oyun vitrinleri ve e-spor sayfalarında geri döndü çünkü skor hiyerarşisi hâlâ en hızlı okunan rekabet dilidir. Klişeye düşmemek için korunması gereken detay: pixel display'in 3 satır sınırı ve statik tarama.

### 3 saniyede tanıma testi

1. Press Start 2P 32px skor başlığı (en fazla 3 satır), gövde Space Grotesk 16px.
2. Koyu lacivert zemin + tek mint neon aksan; ikinci neon yok.
3. Köşe kırpma 4px clip-path; yuvarlak radius yok.
4. Sayaç VT323 20px; "1UP" ve "HI" etiketleri uppercase.
5. 0.18s steps(4, end) giriş — yumuşak ease hiç görünmez.

## Görsel imza

- Press Start 2P 32px / 1.4 / 0 bant başlık (mobil 20px); asla 3 satırı geçmez.
- Gövde Space Grotesk 16px / 1.62 / 68ch; sayaç VT323 20px.
- Köşe kırpma: `clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)` tüm kartlarda.
- Statik CRT taraması: 1px yatay çizgi / 3px, %4 opaklık, yalnız bölüm zemininde, animasyonsuz.
- Skor satırı: 40px, sıra numarası VT323, oyuncu adı Space Grotesk 500, skor sağa hizalı tabular.
- Odak halkası 2px mint + 2px offset; klavye ile tüm skor tablosu gezilebilir.
- **Landing hero (QA):** skor tablosu: kırpılmış köşe, 3px accent şerit, `press start` altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0e1224` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#121728` | kart / panel / modal | tam kanama blok |
| `--ink` | `#eef4ff` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#35e08a` | neon mint: skor, odak, aktif satır | gövde metni, ikinci neon, glow |
| `--line` | `rgba(238,244,255,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.82:1 · `ink-soft / bg` = 8.81:1 · `accent-ink / accent` = 11.02:1 · `ink-faint / bg` = 4.93:1.
- Tek neon kuralı: mint yalnız skor, odak, aktif öğe; ekranın ≤%6'sı.
- Yasak kombinasyon: ikinci neon (magenta/cyan), gradyan, glow/text-shadow, animasyonlu parlaklık.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Press Start 2P | 32px (mobil 20px) | 400 | 1.4 | 0 |
| H2 | Press Start 2P | 24px | 400 | 1.3 | 0 |
| H3 | Press Start 2P | 20px | 400 | 1.3 | 0 |
| Gövde | Space Grotesk | 16px | 400 | 1.62 | 0 |
| Etiket / mono | VT323 | 10px | 400 | 1.4 | 0.12em |

- Ölçek oranı: 1.25 — 6 basamak: 10 · 12 · 16 · 20 · 24 · 32.
- Ölçü: 68ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":400}; yasak: 700/900 ağırlık, Press Start 2P gövdede, Press Start 2P 32px üstü, yuvarlak radius, gövdede büyük harf, italik, gradyan metin.
- Ölçek oranı 1.25; kullanılan 6 basamak: 10 · 12 · 16 · 20 · 24 · 32.
- `h1 { font-size: clamp(20px, 3vw, 32px) }`; Press Start 2P 32px üstü yasak (harf genişliği taşır).
- Ağırlık: Press Start 2P 400 (tek ağırlık), Space Grotesk 400/500; 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 72px (mobil 44px) |
| Kart içi | 20px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Skor tablosu 8/12, yan panel 4/12; ekran başına 1 asimetrik blok. |

- Asimetri: skor tablosu 8/12, yan panel 4/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 3 skor satırı aynı hizada; dördüncüde başlık bandı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 0px · `--radius-lg` 2px. Radius 0px her yerde; 2px yalnız modalda. Köşe kırpma 4px clip-path kartlarda; 4px üstü yuvarlak radius yasak.
- Derinlik nereden gelir: Gölge yok; derinlik 1px çerçeve, 4px köşe kırpma ve statik tarama dokusundan gelir.
- Kenarlık: 1px `--line`; iç içe panelde 1px `--line` aynı tonda.
- Derinlik kaynağı: köşe kırpma + 1px çerçeve; gölge ve blur yok.
- Radius: `--radius` 0px, `--radius-lg` 2px (yalnız modal); yuvarlak köşe yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 14px 20px | 0px | 10px/400 display, .12em uppercase | var(--accent) / var(--accent-ink) | alt kenar 2px var(--accent) · translateY(2px) · outline 2px var(--accent), offset 2px · opacity .4, çerçeve kesikli · 4 adımlı blok dolar |
| Buton (ikincil) | 48px | 14px 20px | 0px | 10px/400 display | transparent / var(--ink) | kenar 1px var(--accent), color var(--accent) |
| Input | 44px | 12px 12px | 0px | 16px/400 body | var(--surface) + 1px solid var(--line) | outline 2px var(--accent), offset 1px · bg var(--surface-2) · kenar 1px var(--accent) + 12px mono · opacity .5 |
| Kart | — | 20px | 0px | 16px Space Grotesk | var(--surface) | kenar 1px var(--accent) |
| Chip / badge | 24px | 4px 8px | 0px | 10px/400 mono, .12em uppercase | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 56px | 0 20px | — | 10px/400 display uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 40px | 0 10px | 0 | 20px/400 mono (VT323), sağa hizalı | transparent | bg var(--surface-2) · bg var(--surface-2), sol kenar 2px var(--accent) |
| Modal / sheet | — | 24px | 2px | 20px Press Start 2P | none | rgba(7,10,20,.60) |
| Toast | 36px | 8px 14px | 0px | 10px/400 display uppercase | var(--accent) / var(--accent-ink) | opacity 0→1, steps(4, end) |
| Grafik paleti | — | — | — | 1px basamaklı çizgi | 2 (accent, ink-soft); 1px/3px tarama | 12px mono uppercase |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — lacivert zeminde 11:1 üstü.
- Dokunma hedefi: skor satırı 40px görünür + 4px dikey padding = 48px; mobilde 56px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | Pixel ikon: 1px blok ızgara, 16px tuval; anti-alias yok, ölçek tam sayı |
| Fotoğraf | Yok — istisna: tek CRT mock fotoğrafı, %25 alan, tarama overlay statik |
| İllüstrasyon | Pixel sprite: en fazla 3 renk (accent, ink, surface-2); ekran başına 1 |
| Doku | CRT taraması: 1px / 3px, %4 opaklık, statik; animasyonlu scanline yasak |
| Logo alanı | Sol üst 20px, Press Start 2P 14px uppercase "PLAY" |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 32px pixel başlık + 1 sprite + "INSERT COIN" CTA | `shots/01-landing.png` |
| Dashboard | yüksek | Skor tablosu 40px satır, VT323 sayaç | `shots/02-dashboard.png` |
| Form | düşük | 44px input, 0 radius, 1px kenar, VT323 placeholder | — |
| Liste / tablo | yüksek | 40px satır, sıra no + ad + skor (sağa hizalı) | — |
| Boş durum | orta | "NO CREDITS" + tek satır açıklama + CTA | — |
| Onboarding | yüksek | Üç ekran: 1UP → HI → START; her ekranda 1 tuş | — |
| Pricing | orta | Üç kredi paketi; kart yerine çerçeveli panel | — |
| Giriş / ödeme | çok düşük | Tek kolon 360px, "ENTER NAME" akışı | — |
| Modal | orta | 480px, 2px radius, 1px kenar, backdrop %60 | — |
| Bildirim / toast | orta | Üst orta, 36px, mint zemin + accent-ink "BONUS" | — |
| Hata | düşük | "GAME OVER" + tek satır + RETRY butonu | — |
| Profil / ayar | orta | Oyuncu kartı: 3 harf isim + skor geçmişi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 70ms | `steps(2, end)` | `translateY(2px)` + kenar 1px mint |
| Giriş (enter) | 180ms | `steps(4, end)` | `opacity` + 8px `translateY`, stagger 20ms |
| Scroll reveal | 220ms | aynı eğri | `top 95%` tetikleyici, `opacity` + 6px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 70ms | aynı eğri | `transform: scale(1.000)` |
| Ödül / vurgu | 220ms | `steps(4, end)` | "1UP" etiketi 0→1 opacity (tek atım, 4 adım) |

- Süre bütçesi: enter 180ms ≤ 1200ms · scroll 220ms ≤ 1200ms · stagger 20ms.
- Ölçek animasyonu yok (arcade'de sprite büyümez); yalnız opacity + translate.
- Pin/parallax yok: skor tablosu sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, tarama dokusu statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0e1224` | `#010309` |
| `--surface` | `#121728` | `#04070f` |
| `--ink` | `#eef4ff` | `#f4f9ff` |
| `--accent` | `#35e08a` | `#66ffb8` |
| `--line` | `rgba(238,244,255,.16)` | `rgba(244,249,255,.13)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 18.37:1 · `accent-ink / accent` = 15.10:1.
- Koyu modda zemin daha derin laciverte (`#070a14`) döner; mint aksan parlaklaşır (`#6bffb0`).
- Tarama dokusu opaklığı %4'ten %3'e düşer (koyuda gürültü yapar).
- Köşe kırpma ve çerçeve kalınlığı değişmez.

## Zorunlu kurallar

- Press Start 2P 32px/1.4 başlık, en fazla 3 satır (mobil 20px); gövde Space Grotesk 16px/1.62/68ch
- Koyu lacivert zemin + tek mint aksan #35e08a, ekranın ≤%6'sı
- Köşe kırpma 4px clip-path tüm kartlarda; yuvarlak radius yok (modal 2px istisna)
- Statik CRT taraması 1px/3px %4, yalnız bölüm zemininde, animasyonsuz
- Skor satırı 40px (mobil 56px), skor sağa hizalı tabular-nums
- Bölüm arası 72px (mobil 44px), kart içi 20px; ölçek 4·8·12·16·24·32·48·64
- Odak halkası 2px mint + 2px offset; tüm skor tablosu klavyeyle gezilebilir

## Yasaklar

- İkinci neon renk (magenta/cyan), gradyan, glow/text-shadow, animasyonlu parlaklık
- Animasyonlu scanline, flicker, strobe (3Hz üstü), sürekli döngü
- Yumuşak gölge, blur, cam yüzey, 4px üstü radius
- Press Start 2P gövdede veya 32px üstünde, 3 satırdan uzun pixel başlık
- Ölçek/zoom animasyonu, spring, parallax, pin/scrub
- Saf siyah zemin (#000), RGB split (glitch) — okunurluğu bozar

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız "HI" etiketi gibi dekoratif satırda.
- `--ink-faint` etkileşimli metin değil; skor daima `--ink`, aktif satır `--accent`.
- Hareket hassasiyeti: steps(4) kesik hareket; reduced-motion'da susar. Flaş/strobe yasak.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: mint halka lacivert zeminde 11:1 üstü; klavye sırası görünür.

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
| Metin okunmuyor | Press Start 2P gövdeye inmiş | Pixel display yalnız başlıkta, gövde Space Grotesk |
| Ekran "neon çorbası" | İkinci neon veya glow eklenmiş | Tek mint aksan, glow yok |
| Tarama titriyor | Scanline animasyonlu | Statik 1px/3px %4 doku |

## Komşu stiller

- **Uyumlu:** `pixel-art` — pixel ızgara dili ortak; ayrım display ve hareket eğrisinde.
- **Uyumlu:** `cybercore` — koyu neon zemin ortak; strobe ve çok renk kullanılmaz.
- **Yasak:** `claymorphism` — yumuşak yuvarlak yüzey arcade keskinliğini bozar.
- **Yasak:** `luxury-typography` — serif lüks dil pixel kodla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Press+Start+2P | Press Start 2P — Google Fonts — pixel display, 400 tek ağırlık, 32px sınırı |
| https://fonts.google.com/specimen/VT323 | VT323 — Google Fonts — CRT sayaç rakamı, 20px |
| https://fonts.google.com/specimen/Space+Grotesk | Space Grotesk — Google Fonts — gövde 16px/1.62, okunur sans |
| https://www.arcade-museum.com/ | The Arcade Museum — kabin skor paneli hiyerarşisi (1UP/HI) |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 — Three Flashes — strobe/flicker yasağı gerekçesi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Arcade 8-bit (styles/119-arcade-8bit/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="arcade-8bit"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Press Start 2P yalnız başlıkta; --font-body Space Grotesk gövdede; --font-mono VT323 sayaçta.
Yüzey: radius 0/2px, gölge yok; derinlik 1px çerçeve + 4px köşe kırpmadan gelir.
Izgara: 12 kolon, gutter 24px, skor tablosu 8/12, bölüm ritmi 72px.
Hareket: enter 0.18s steps(4, end) 8px / stagger 0.02; scroll top 95% 0.22s 6px once:true;
         hover 70ms scale 1.000; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (ikinci neon, glow, animasyonlu scanline, ölçek).
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
[data-style="arcade-8bit"] { --bg: #0e1224; --bg-2: #141a2e; --surface: #121728; --surface-2: #1b2136; --ink: #eef4ff; --ink-soft: #a7b3cc; --ink-faint: #78849c; --accent: #35e08a; --accent-ink: #05130c; --line: rgba(238,244,255,.16); --radius: 0px; --radius-lg: 2px; --shadow: none; --shadow-hard: none; --font-display: "Press Start 2P", "Space Mono", monospace; --font-body: "Space Grotesk", system-ui, sans-serif; --font-mono: "VT323", ui-monospace, monospace; --tracking: 0; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="arcade-8bit"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
