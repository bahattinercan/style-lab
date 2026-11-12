# 117 · Carnival Festival

> **Bir cümlede:** Karnaval afişi mantığı: Anton 72px bant başlık, 30px kayma, 0.28s snap giriş ve hareketli renk şeritleri — müzik, ışık ve kalabalık aynı karede.

| | |
|---|---|
| **Hissiyat** | coşkulu · yüksek sesli · afiş · kutlama |
| **En iyi** | Festival programı, konser bileti, şehir etkinliği, açılış lansmanı |
| **Kaçın** | Klinik form, resmi kurum duyurusu, uzun okuma arşivi |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="carnival-festival"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Carnival Festival sayfayı bir karnaval afişi gibi kurar: Anton 72px bant başlık, 1px dış çerçeve, renk şeritleri ve bol ünlem. Kazanılan şey enerji ve "şimdi" hissi; feda edilen şey sakinlik — ekran başına en fazla 2 odak ve 3 renk şeridi.

Renk şeritleri yalnız 8px yüksekliğinde yatay bantlardır (accent, ink, surface-2) ve ekranın %8'ini geçmez. Metin daima `--bg` veya `--accent-ink`; şerit üstüne metin gelmez.

Hareket festival temposundadır: 0.28s `cubic-bezier(.34,1.56,.64,1)` giriş, 30px kayma, 50ms stagger; hover 120ms ve 1.06 ölçek. Snap hissi 1.56 overshoot'ta durur, sürekli ışık patlaması yoktur.

### Ne değildir

- `memphis` değildir: memphis dekoratif şekil ve pastel çizgiyle çalışır; burada şerit bandı, Anton bant başlık ve 0.28s snap var.
- `maximalism` değildir: maximalism katman ve desen yığar; burada ekran başına 2 odak ve 3 şerit sınırı var.
- `dopamine-ui` değildir: dopamine ödül animasyonu ve konfetiyle çalışır; burada ödül tek atım ve şerit bandı.
- `carnival-festival` bir "parti şablonu" değildir: Anton yalnız bant başlıkta, gövde Poppins okunur puntoda kalır.

### Nereden gelir

Kökeni Brezilya karnavalı ve Notting Hill afişleridir: kalın tek satır başlık, üst üste binen renk bantları, el yazısı işaretler. Bugün festival ve şehir etkinliği sitelerinde geri döndü çünkü programın "bu hafta" olduğunu anlatması gerekiyor. Klişeye düşmemek için korunması gereken detay: şerit bandının 8px kalması ve başlığın tek satırda durması.

### 3 saniyede tanıma testi

1. Anton 72px bant başlık, tek satır, uppercase, tracking −0.01em.
2. 8px yatay renk şeritleri (en fazla 3), metinsiz.
3. 1px dış çerçeve + 2px alt bant; radius 0–4px.
4. Tek vurgu mercan-kırmızı; sarı yalnız şeritte, metin olarak yok.
5. 0.28s snap giriş, 120ms hover — tempo hep yüksek.

## Görsel imza

- Anton 72px / 0.94 / −0.01em bant başlık (mobil 40px), uppercase; gövde Poppins 16.5px / 1.6 / 52ch.
- Renk şeridi: 8px yükseklik, 45° kesik uç, ekran başına en fazla 3, metinsiz (mobil 6px).
- Program satırı: 56px, tarih sütunu mono 12px, sahne adı Poppins 700 15px, sağda saat.
- Bilet bloğu: 4px radius, 2px kesikli kenar (bilet perforasyonu), içinde mono kod.
- Dış çerçeve 1px `--ink`, alt bant 2px accent; 2px üstü kalın çerçeve yok.
- Hareketli tek öğe: şerit bandı 0.28s içinde 30px yukarı kayar; sonra durur (döngü yok).
- **Landing hero (QA):** program satırları: 58px saat kolonu (20:30/22:00/23:30), alt bant 2px accent.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fdf3e3` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fffaf0` | kart / panel / modal | tam kanama blok |
| `--ink` | `#241a12` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#b3360f` | mercan-kırmızı: bant başlık altı, bilet CTA, aktif sekme | uzun metin, grafik serisi, gövde rengi |
| `--line` | `rgba(36,26,18,.18)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 15.51:1 · `ink-soft / bg` = 8.22:1 · `accent-ink / accent` = 5.64:1 · `ink-faint / bg` = 4.25:1.
- Sarı yalnız şerit bandında; metin olarak kullanılmaz (kontrast riski).
- Yasak kombinasyon: üçten fazla şerit, gradyan, neon yeşil, siyah zemin üstü neon.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 72px (mobil 40px) | 400 | 0.94 | -0.01em |
| H2 | Anton | 40px | 400 | 1.1 | 0 |
| H3 | Anton | 22px | 400 | 1.1 | 0 |
| Gövde | Poppins | 16.5px | 400 | 1.6 | 0 |
| Etiket / mono | JetBrains Mono | 12px | 400 | 1.4 | 0.1em |

- Ölçek oranı: 1.36 — 6 basamak: 12 · 13 · 16.5 · 22 · 40 · 72.
- Ölçü: 52ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":700,"display":400}; yasak: 300 ince ağırlık, gövdede Anton, italik display, iki satırlı bant başlık, gövdede uppercase, 13px altı bant başlık, negatif tracking.
- Ölçek oranı 1.36; kullanılan 6 basamak: 12 · 13 · 16.5 · 22 · 40 · 72.
- `h1 { font-size: clamp(40px, 7vw, 72px) }`; 72px üstü ve iki satırlı bant başlık yasak.
- Ağırlık: Anton 400 (kendi kalınlığı), Poppins 400/700; 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 72px (mobil 44px) |
| Kart içi | 20px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Program sütunu 7/12, sahne kartı 5/12; ekran başına 2 asimetrik blok. |

- Asimetri: ekran başına 2 blok — program sütunu 7/12, sahne kartı 5/12.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde şerit bandı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 0px · `--radius-lg` 4px. Radius 0px (bant/şerit/buton) ve 4px (bilet/kart/modal); 6px üstü yasak; aksiyon rozeti 999px istisnası yok.
- Derinlik nereden gelir: Gölge yok; derinlik 1px çerçeve, 8px şerit ve bilet perforasyonundan gelir. Sert ofset yalnız bilet hover'ında.
- Kenarlık: 1px `--ink` dış çerçeve; bilet bloğunda 2px kesikli.
- Derinlik yok: gölge `none`; şerit ve çerçeve yeter. Sert ofset yalnız bilet hover'ında 3px.
- Radius: `--radius` 0px (şerit/bant), `--radius-lg` 4px (bilet/sahne kartı).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 52px | 14px 26px | 0px | 13px/700 body, .06em uppercase | var(--accent) / var(--accent-ink) | translateY(2px) + alt şerit 2px · translateY(3px) · outline 3px var(--accent), offset 2px · opacity .45 · bant 3 adımda dolar |
| Buton (ikincil) | 52px | 14px 26px | 0px | 13px/700 body, .06em | var(--bg) / var(--ink) | bg var(--surface-2) |
| Input | 48px | 12px 14px | 4px | 16.5px/400 body | var(--surface) + 2px solid var(--line) | outline 3px var(--accent), offset 1px · bg var(--surface-2) · kenar 2px var(--accent) · opacity .5 |
| Kart | — | 20px | 4px | 16.5px Poppins | var(--surface) | shadow 3px 3px 0 var(--shadow-hard) |
| Chip / badge | 26px | 4px 10px | 0px | 12px/400 mono, .1em uppercase | var(--ink) | bg var(--accent), color var(--accent-ink) |
| Nav | 60px | 0 24px | — | 13px/700 body, .06em uppercase | transparent | alt kenar 3px var(--accent) · color var(--ink-soft) |
| Tablo satırı | 56px | 0 12px | 0 | 16.5px/400 body + 12px mono tarih | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 24px | 4px | 22px Anton | none | rgba(36,26,18,.50) |
| Toast | 48px | 12px 16px | 0px | 12px/400 mono, .1em uppercase | var(--accent) / var(--accent-ink) | translateY(-30px) → 0, 280ms |
| Grafik paleti | — | — | — | 8px şerit (bar) | 3 (accent, ink, surface-2); yok | 12px mono .1em |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 2px` — krem zeminde 6.3:1.
- Dokunma hedefi: program satırı 56px; bilet butonu 48px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, kare uç, 20px ızgara; ikon daima uppercase etiketle |
| Fotoğraf | Sahne/kalabalık fotoğrafı, yüksek kontrast, alan ≤%35; renkli overlay yok |
| İllüstrasyon | Konfeti ve şerit vektörü: düz renk, 0 gölge; ekran başına 1 kompozisyon |
| Doku | Yok (`--grain: 0`); düz zemin + şerit |
| Logo alanı | Sol üst 20px, Anton 24px uppercase; sembol yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 72px bant başlık + 3 şerit + bilet CTA; tek satır başlık | `shots/01-landing.png` |
| Dashboard | orta | Program tablosu: 56px satır, mono tarih, sahne adı 700 | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 4px radius, 2px kenar | — |
| Liste / tablo | orta | 56px satır, 1px hairline, sağda saat mono | — |
| Boş durum | orta | Tek cümle + şerit bandı + "program yakında" | — |
| Onboarding | yüksek | Üç adım, her adımda 1 şerit ve tek CTA | — |
| Pricing | orta | Üç bilet tipi: günlük / hafta / VIP; kesikli bilet kenarı | — |
| Giriş / ödeme | çok düşük | Tek kolon 400px, 2px kesikli bilet bloğu | — |
| Modal | orta | 560px, 4px radius, 2px çerçeve; backdrop %50 | — |
| Bildirim / toast | orta | Üst orta, 48px, accent zemin + accent-ink metin | — |
| Hata | düşük | Tek satır Anton 22px + tek cümle + tekrar butonu | — |
| Profil / ayar | orta | Bilet geçmişi listesi 56px satır | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `cubic-bezier(.34,1.56,.64,1)` | `translateY(2px)` + alt şerit genişler |
| Giriş (enter) | 280ms | `cubic-bezier(.34,1.56,.64,1)` | `opacity` + 30px `translateY`, stagger 50ms |
| Scroll reveal | 360ms | aynı eğri | `top 91%` tetikleyici, `opacity` + 24px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 120ms | aynı eğri | `transform: scale(1.06)` |
| Ödül / vurgu | 280ms | `cubic-bezier(.34,1.56,.64,1)` | bilet kodu 0→1 opacity (tek atım) |

- Süre bütçesi: enter 280ms ≤ 1200ms · scroll 360ms ≤ 1200ms · stagger 50ms.
- Şerit bandı yalnız girişte 30px kayar, sonra durur; sürekli kayan bant yasak.
- Pin/parallax yok: program akışı sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, şerit animasyonsuz yerleşir.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fdf3e3` | `#191009` |
| `--surface` | `#fffaf0` | `#1e140d` |
| `--ink` | `#241a12` | `#f8ecdd` |
| `--accent` | `#b3360f` | `#f0873f` |
| `--line` | `rgba(36,26,18,.18)` | `rgba(248,236,221,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.11:1 · `accent-ink / accent` = 7.35:1.
- Koyu modda krem zemin gece kahvesine (`#191009`) döner; accent mercan-turuncuya (`#f0873f`) çekilir.
- Şerit sayısı koyu modda 2'ye iner (gürültüyü azaltır); çerçeve 1px kalır.
- Sarı şerit koyu modda kullanılmaz.

## Zorunlu kurallar

- Anton 72px/0.94/−0.01em bant başlık, tek satır (mobil 40px); gövde Poppins 16.5px/1.6/52ch
- Renk şeridi 8px (mobil 6px), metinsiz, ekran başına en fazla 3 (koyuda 2)
- Radius 0px (bant) / 4px (bilet, kart); 6px üstü yasak
- Dış çerçeve 1px --ink, bilet bloğunda 2px kesikli kenar
- Tek vurgu mercan-kırmızı #b3360f; sarı yalnız şeritte, ekranın ≤%8'i
- Program satırı 56px, tarih mono 12px; bölüm arası 72px (mobil 44px)
- Ekran başına en fazla 2 odak bloğu; şerit üstüne metin gelmez

## Yasaklar

- Sürekli kayan şerit (marquee), strobe, flaş, sürekli döngü, parallax, pin/scrub
- Gradyan, neon yeşil/mor, üçüncü sıcak renk, siyah zemin üstü neon
- 72px üstü veya iki satırlı bant başlık; gövdede Anton
- Yumuşak gölge, blur, cam yüzey; 2px üstü düz çerçeve
- Sarı metin, accent üstüne ink metin
- 6px üstü radius, tam yuvarlak buton
- Konfeti patlaması (tek statik kompozisyon hariç), foto üstü renkli overlay

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız "kapı açılışı" gibi yardımcı satırda.
- `--ink-faint` etkileşimli metin değil; saat ve fiyat daima `--ink`.
- Hareket hassasiyeti: snap (1.56 overshoot) ve 0.28s; reduced-motion'da susar. Strobe yasak.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: 3px halka krem ve koyu zeminde ≥4.5:1.

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
| Sayfa "panayır" gürültüsü | Üçten fazla şerit veya gradyan eklenmiş | Şeridi 3'e (koyuda 2) indir |
| Başlık okunmuyor | Anton iki satıra kırılmış veya 72px altına inmiş | Tek satır + clamp(40px, 7vw, 72px) |
| Bilet bloğu "kart" gibi | Kesikli kenar yerine düz kenar kullanılmış | 2px dashed kenar + mono kod |

## Komşu stiller

- **Uyumlu:** `memphis` — aynı afiş enerjisi; bölüm ayrımında garnitür olur.
- **Uyumlu:** `maximalism` — şerit ve katman dili örtüşür, doz düşük tutulur.
- **Yasak:** `scandinavian-dark` — mat koyu sadelik festival enerjisini söndürür.
- **Yasak:** `academic-paper` — kanıt ciddiyeti ve serif gövde afiş diliyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Anton | Anton — Google Fonts — bant başlık kalınlığı ve 0.94 satır aralığı |
| https://fonts.google.com/specimen/Poppins | Poppins — Google Fonts — gövde 16.5px/1.6, 400/700 |
| https://www.nottinghillcarnival.com/ | Notting Hill Carnival — resmi site — afiş dili, program listesi ve şerit bandı |
| https://www.awwwards.com/websites/typography/ | Awwwards — festival typography — tek satır bant başlık örnekleri |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 — Three Flashes — strobe/flaş yasağı gerekçesi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Carnival Festival (styles/117-carnival-festival/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="carnival-festival"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Anton yalnız bant başlıkta; --font-body Poppins gövdede; --font-mono tarih/kod.
Yüzey: radius 0/4px, gölge yok; derinlik 1px çerçeve + 8px şerit bandından gelir.
Izgara: 12 kolon, gutter 24px, bölüm ritmi 72px, ekran başına 2 odak ve 3 şerit.
Hareket: enter 0.28s cubic-bezier(.34,1.56,.64,1) 30px / stagger 0.05; scroll top 91% 0.36s 24px once:true;
         hover 120ms scale 1.06; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sürekli kayan şerit, strobe, gradyan, fazla renk).
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
[data-style="carnival-festival"] { --bg: #fdf3e3; --bg-2: #f6e7d0; --surface: #fffaf0; --surface-2: #f7ead6; --ink: #241a12; --ink-soft: #55463a; --ink-faint: #827164; --accent: #b3360f; --accent-ink: #fdf5ee; --line: rgba(36,26,18,.18); --radius: 0px; --radius-lg: 4px; --shadow: none; --shadow-hard: 3px 3px 0 rgba(36,26,18,.92); --font-display: "Anton", Impact, system-ui, sans-serif; --font-body: "Poppins", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace; --tracking: -0.01em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="carnival-festival"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
