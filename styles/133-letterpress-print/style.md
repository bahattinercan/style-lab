# 133 · Letterpress Print

> **Bir cümlede:** Letterpress mantığı: kabartma baskı izi, 2px radius yüzeyler ve 0.30s presleme girişi — tipografi kâğıda gömülür, ekran bunu taklit eder.

| | |
|---|---|
| **Hissiyat** | dokunsal · matbaa · kesin · editoryal |
| **En iyi** | Bağımsız yayınevi, matbaa stüdyosu, edisyon satışı, tipografi stüdyosu |
| **Kaçın** | Canlı dashboard, oyun arayüzü, hızlı checkout akışı |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="letterpress-print"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Letterpress Print baskı izini taklit eder: metin `text-shadow` ile 1px deboss ışığı alır, kart yüzeyinde 1px iç gölge (basınç izi) durur, Cinzel 46px majüskül başlık Lora 16.5px/1.7 gövdeyle eşleşir. Kazanılan şey fiziksel baskı hissi; feda edilen şey renk — indigo tek aksan.

Kâğıt dokusu tek katmandadır: 1px/6px yatay elyaf çizgisi %3 ve `--grain .03`. Radius 2px; gölge yoktur, derinlik deboss ve elyaf dokusundan gelir.

Hareket preslemedir: 0.30s `cubic-bezier(.7,0,.3,1)` giriş, yalnız 2px kayma, 35ms stagger (satır satır baskı). Pin yok — kâğıt kaymaz. Hover 110ms ve 1.005.

### Ne değildir

- `broadsheet-daily` değildir: gazete masthead, keskin 0 radius ve kırmızı accent kullanır; burada indigo, 2px radius ve deboss izi var.
- `academic-paper` değildir: makale 8/3 kolon ve kenar notuyla çalışır; burada edisyon numarası ve baskı izi imzadır.
- `literary-hardcover` değildir: hardcover 64ch ve 1px hairline'lı kitap sayfasıdır; burada elyaf dokusu ve deboss baskı vardır.
- `letterpress-print` bir "vintage afiş" değildir: sepya ve distorziyon yok, yalnız 1px deboss ışığı var.

### Nereden gelir

Kökeni 15. yüzyıl hareketli metal tip matbaası ve 20. yüzyıl özel baskı (fine press) atölyeleridir. Bugün bağımsız yayınevi ve edisyon satışlarında geri döndü çünkü dijitalde "basılmış" hissi nadir. Klişeye düşmemek için korunması gereken detay: deboss izinin 1px'te kalması ve elyaf dokusunun %3'ü geçmemesi.

### 3 saniyede tanıma testi

1. Cinzel 46px majüskül başlık + Lora 16.5px/1.7 gövde.
2. Metinde 1px deboss ışığı (text-shadow 0 1px 0 açık ton).
3. Kartta 1px iç gölge; dış gölge yok.
4. Edisyon numarası mono 11px "No. 014 / 120".
5. 0.30s presleme girişi, 2px kayma; yumuşak yay yok.

## Görsel imza

- Cinzel 600 46px / 1.12 / 0.06em başlık (mobil 28px); gövde Lora 16.5px / 1.7 / 58ch.
- Deboss: `text-shadow: 0 1px 0 color-mix(in srgb, var(--surface) 90%, transparent)` başlıkta; 1px, 2px yasak.
- Basınç izi: kartta `inset 0 1px 0 var(--line)` (1px iç gölge).
- Kâğıt elyafı: 1px/6px yatay çizgi %3 + grain .03.
- Edisyon etiketi: Courier Prime 11px, "No. 014 / 120" biçimi, sağ üstte.
- Radius 2px; buton ve kart aynı eğriyi paylaşır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f4ec` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fdfbf5` | kart / panel / modal | tam kanama blok |
| `--ink` | `#191713` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#2a2c6b` | indigo: birincil buton, aktif sekme, edisyon numarası | riso çok renkli baskı, sepya, gövde rengi |
| `--line` | `rgba(25,23,19,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.28:1 · `ink-soft / bg` = 8.65:1 · `accent-ink / accent` = 11.31:1 · `ink-faint / bg` = 4.21:1.
- Tek vurgu kuralı: indigo yalnız birincil buton, aktif sekme ve edisyon numarasında; ekranın ≤%6'sı.
- Yasak kombinasyon: sepya filtre, çok renkli baskı (riso), gradyan, parlak lak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel | 46px (mobil 28px) | 600 | 1.12 | 0.06em |
| H2 | Cinzel | 28px | 600 | 1.2 | 0.04em |
| H3 | Cinzel | 22px | 600 | 1.2 | 0.04em |
| Gövde | Lora | 16.5px | 400 | 1.7 | 0 |
| Etiket / mono | Courier Prime | 11px | 400 | 1.4 | 0.12em |

- Ölçek oranı: 1.3 — 6 basamak: 11 · 13 · 16.5 · 22 · 28 · 46.
- Ölçü: 58ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":600,"display":600}; yasak: 300 ince ağırlık, gövdede Cinzel, gövdede büyük harf, italik başlık, negatif tracking, 46px üstü başlık, gövdede mono.
- Ölçek oranı 1.3; kullanılan 6 basamak: 11 · 13 · 16.5 · 22 · 28 · 46.
- `h1 { font-size: clamp(28px, 4.2vw, 46px) }`; Cinzel majüskül 3 satırı geçmez.
- Ağırlık: Cinzel 600 başlık, Lora 400/600 gövde; 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1120px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 84px (mobil 52px) |
| Kart içi | 22px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Metin 7/12, baskı bloğu 4/12; ekran başına 1 asimetrik blok. |

- Asimetri: metin 7/12, baskı bloğu 4/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 3 blok aynı hizada; dördüncüde edisyon etiketi girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | inset 0 1px 0 var(--line) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | inset 0 1px 0 var(--line) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 2px · `--radius-lg` 4px. Radius 2px (buton/input/chip) ve 4px (kart/modal); 6px üstü yasak; tablo satırı 0; avatar 50%.
- Derinlik nereden gelir: Dış gölge yok; derinlik 1px iç gölge (basınç izi), 1px deboss ve kâğıt elyafından gelir.
- Kenarlık: 1px `--line` + 1px iç gölge (basınç izi).
- Derinlik kaynağı: deboss + iç gölge + elyaf; dış gölge yok.
- Radius: `--radius` 2px, `--radius-lg` 4px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 20px | 2px | 13px/600 body, .04em | var(--accent) / var(--accent-ink) | bg var(--ink), 110ms · translateY(2px) · outline 2px var(--accent), offset 2px · opacity .45 · edisyon numarası 3 adım |
| Buton (ikincil) | 46px | 12px 20px | 2px | 13px/400 body | transparent / var(--ink) | border-color var(--ink) |
| Input | 46px | 11px 12px | 2px | 16.5px/400 body | var(--surface) + 1px solid var(--line) | outline 2px var(--accent), offset 1px · bg var(--surface-2) · border 1px var(--accent) + 13px · opacity .5 |
| Kart | — | 22px | 4px | 16.5px Lora | var(--surface) | iç gölge koyulaşır |
| Chip / badge | 24px | 3px 8px | 2px | 11px/400 mono, .12em | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 60px | 0 24px | — | 11px/600 body, .08em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 44px | 0 10px | 0 | 16.5px/400 body + 11px mono | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 26px | 4px | 22px Cinzel | inset 0 1px 0 var(--line) | rgba(25,23,19,.45) |
| Toast | 40px | 10px 14px | 2px | 11px/400 mono | var(--ink) / var(--bg) | opacity 0→1, 160ms |
| Grafik paleti | — | — | — | 1px | 1 (accent); 1px hairline yalnız yatay | 11px mono .12em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — kâğıt beyazında 9.5:1.
- Dokunma hedefi: 46px buton; edisyon satırı 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin uç, 20px ızgara; ikon baskı gravürü gibi |
| Fotoğraf | Baskı makinesi/kâğıt detayı, mat ışık, alan ≤%35; parlak yansıma yok |
| İllüstrasyon | Tek renk gravür: 1px çizgi, tarama 45°; ekran başına 1 |
| Doku | Kâğıt elyafı 1px/6px %3 + grain .03; ikinci doku yok |
| Logo alanı | Sol üst 20px, Cinzel 600 18px majüskül, 0.08em |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 46px Cinzel başlık (deboss) + 4/12 baskı bloğu + edisyon etiketi | `shots/01-landing.png` |
| Dashboard | orta | Edisyon listesi: 44px satır, mono numara | `shots/02-dashboard.png` |
| Form | düşük | 46px input, 2px radius, 1px iç gölge | — |
| Liste / tablo | orta | 44px satır, 1px hairline, sağa hizalı mono | — |
| Boş durum | orta | "baskı yok" + tek cümle + ikincil buton | — |
| Onboarding | orta | Üç adım: diz → bas → kurut | — |
| Pricing | orta | Üç edisyon paketi; 2px radius, 1px iç gölge | — |
| Giriş / ödeme | çok düşük | Tek kolon 380px, mono sipariş özeti | — |
| Modal | orta | 480px, 4px radius, 1px iç gölge | — |
| Bildirim / toast | orta | Alt sol, 40px, ink zemin + bg metin | — |
| Hata | düşük | "baskı hatası" mono + tek cümle | — |
| Profil / ayar | orta | Edisyon geçmişi + mono numara | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 80ms | `cubic-bezier(.7,0,.3,1)` | `translateY(2px)` + iç gölge koyulaşır (pres) |
| Giriş (enter) | 300ms | `cubic-bezier(.7,0,.3,1)` | `opacity` + 2px `translateY`, stagger 35ms |
| Scroll reveal | 340ms | aynı eğri | `top 90%` tetikleyici, `opacity` + 6px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 110ms | aynı eğri | `transform: scale(1.005)` |
| Ödül / vurgu | 280ms | `cubic-bezier(.7,0,.3,1)` | edisyon numarası 0→1 opacity (tek atım) |

- Süre bütçesi: enter 300ms ≤ 1200ms · scroll 340ms ≤ 1200ms · stagger 35ms.
- Giriş 2px kayma: baskı izi gibi; 8px üstü kayma yasak.
- Pin/parallax yok: kâğıt sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, deboss statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f4ec` | `#14120f` |
| `--surface` | `#fdfbf5` | `#191612` |
| `--ink` | `#191713` | `#f4efe4` |
| `--accent` | `#2a2c6b` | `#9fa2e8` |
| `--line` | `rgba(25,23,19,.16)` | `rgba(244,239,228,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.31:1 · `accent-ink / accent` = 8.07:1.
- Koyu modda kâğıt beyazı is mürekkebine (`#14120f`) döner; indigo açık lila-maviye (`#9fa2e8`) çekilir.
- Deboss ışığı koyuda tersine döner (0 −1px), böylece iz görünür kalır.
- Elyaf dokusu %2'ye iner; radius değişmez.

## Zorunlu kurallar

- Cinzel 600 46px/1.12/0.06em başlık (mobil 28px); gövde Lora 16.5px/1.7/58ch
- Deboss 1px text-shadow yalnız başlıkta; 2px ve renkli gölge yasak
- Kartta 1px iç gölge (basınç izi); dış gölge yok
- Kâğıt elyafı 1px/6px %3 + grain .03; başka doku yok
- Radius 2/4px; 6px üstü yasak
- Tek vurgu indigo #2a2c6b, ekranın ≤%6'sı, accent üstü daima --accent-ink
- Edisyon etiketi Courier Prime 11px "No. 014 / 120"
- Bölüm arası 84px (mobil 52px), kart içi 22px

## Yasaklar

- Sepya/vintage filtre, riso çok renkli baskı, gradyan, parlak lak
- Blur, cam yüzey, 2px+ dış gölge, neon
- 6px üstü radius, tam yuvarlak buton
- Gövdede Cinzel veya büyük harf, 16.5px altı gövde
- Parallax, pin/scrub, marquee, sürekli döngü, yay/overshoot
- Saf siyah metin (#000), saf beyaz zemin (#fff)

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız edisyon alt etiketinde dekoratif.
- `--ink-faint` etkileşimli metin değil; edisyon numarası `--accent` (5.9:1).
- Hareket hassasiyeti: 0.30s pres, 2px kayma; düşük risk, reduced-motion'da susar.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: kâğıt zeminde indigo halka 9.5:1; koyuda 8.2:1.

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
| Deboss "blur gölge" olmuş | text-shadow 2px üstü veya renkli | 1px, açık ton, yalnız başlıkta |
| Sayfa "vintage" görünüyor | Sepya veya elyaf %5 üstü | Neutral kâğıt + elyaf %3 |
| Başlık 4 satıra kırılmış | Cinzel 46px üstü veya ölçü geniş | clamp + max-width 20ch |

## Komşu stiller

- **Uyumlu:** `broadsheet-daily` — matbaa dili ortak; masthead ve kırmızı kullanılmaz.
- **Uyumlu:** `literary-hardcover` — serif okuma disiplini örtüşür.
- **Yasak:** `glassmorphism` — parlak cam ve blur, mat baskı fiziğini bozar.
- **Yasak:** `dopamine-ui` — doygun renk ve konfeti basınç izini yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cinzel | Cinzel — Google Fonts — majüskül display, 600 ağırlık, 0.06em |
| https://fonts.google.com/specimen/Lora | Lora — Google Fonts — gövde serifi, 16.5px/1.7 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — edisyon numarası 11px |
| https://letterpresscommons.com/ | Letterpress Commons — baskı izi (deboss) ve kâğıt elyafı |
| https://en.wikipedia.org/wiki/Letterpress_printing | Wikipedia — Letterpress printing — metal tip ve basınç izi fiziği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Letterpress Print (styles/133-letterpress-print/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="letterpress-print"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Cinzel 600 başlıkta, --font-body Lora gövdede, --font-mono edisyon numarasında.
Yüzey: 1px kenar + 1px iç gölge (basınç izi); radius 2/4px; dış gölge yok.
Izgara: 12 kolon, gutter 24px, metin 7/12, bölüm ritmi 84px.
Hareket: enter 0.30s cubic-bezier(.7,0,.3,1) 2px / stagger 0.035; scroll top 90% 0.34s 6px once:true;
         hover 110ms scale 1.005; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya, blur, 2px+ gölge, 6px+ radius).
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
[data-style="letterpress-print"] { --bg: #f7f4ec; --bg-2: #ece7db; --surface: #fdfbf5; --surface-2: #efeade; --ink: #191713; --ink-soft: #4a453d; --ink-faint: #7a746a; --accent: #2a2c6b; --accent-ink: #f3f2fb; --line: rgba(25,23,19,.16); --radius: 2px; --radius-lg: 4px; --shadow: inset 0 1px 0 var(--line); --shadow-hard: none; --font-display: "Cinzel", Trajan Pro, Georgia, serif; --font-body: "Lora", Georgia, serif; --font-mono: "Courier Prime", Courier, monospace; --tracking: 0.06em; --blur: 0px; --grain: 0.03; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="letterpress-print"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 11.43:1 · `ink-soft / surface-2` 7.92:1 · `accent-ink / accent` 11.31:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Bu stilde `.sig` dekor katmanı yok, z-index düzeltmesi gerekmedi.
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: tipo baskı izi: kalınlık çizgileri + kabartma.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.30s` / `scroll 0.34s` (ikisi de ≤ 1.2 s).
