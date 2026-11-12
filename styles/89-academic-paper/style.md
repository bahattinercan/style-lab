# 89 · Academic Paper

> **Bir cümlede:** Akademik makale formu: EB Garamond 15.5px/1.66 iki kolon, numaralı başlıklar, dipnot çizgisi ve hareketin neredeyse sıfır olduğu (0.33s linear) bir kanıt yüzeyi.

| | |
|---|---|
| **Hissiyat** | ölçülü · kanıta dönük · nötr · yoğun |
| **En iyi** | Araştırma raporu, preprint, metodoloji sayfası, teknik dokümantasyon |
| **Kaçın** | Kampanya landing'i, oyun/etkinlik sayfası, e-ticaret vitrini |
| **Zorluk** | düşük · **Erişilebilirlik** | yüksek |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="academic-paper"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Academic Paper sayfayı hakemli bir makale gibi kurar: EB Garamond 15.5px/1.66, 72ch ana metin (8/12) + 3/12 kenar notu, numaralı başlıklar (1, 1.1, 1.1.1) ve 1px dipnot çizgisi. Kazanılan şey tarafsızlık ve okunabilirlik; feda edilen şey marka kişiliği — süs yok, sadece hiyerarşi.

Izgara klasiktir: 12 kolon, 24px gutter, ana metin 8, kenar notu 3. Ekran başına tek kenar notu; ikincisi dipnota düşer. Yüzey beyaza yakın soğuk gri (`#f8f8f6`), ayrım yalnız 1px hairline.

Hareket bilinçli olarak neredeyse yoktur: 330ms `linear` giriş, 0px kayma (yalnız opacity), 120ms hover. Bu, uzun okuma ve ekran görüntüsü/print akışında titrememeyi garanti eder.

### Ne değildir

- `swiss-design` değildir: swiss sans-serif ve poster hiyerarşisiyle çalışır; burada serif gövde, numaralı başlık ve kenar notu vardır.
- `broadsheet-daily` değildir: gazetede masthead ve manşet vardır; burada başlık 34px, masthead yok, özet bloğu ve dipnot çizgisi vardır.
- `utility` değildir: utility ürün arayüzüdür (60px başlık, buton odaklı); burada okuma ve atıf odaklı, 34px başlık.
- `editorial-design` değildir: editorial görsel ağırlıklı dergi ritmi kurar; burada görsel yalnız diyagram.

### Nereden gelir

Kökeni LaTeX article sınıfı ve Chicago/APA dizgi gelenekleridir; ekran karşılığı arXiv preprint sayfalarıdır. Bugün araştırma ürünleri (rapor, metodoloji, model kartı) arttığı için geri döndü. Klişeye düşmemek için korunması gereken detay: numaralı başlık sistemi ve kenar notunun gerçekten kaynak taşıması.

### 3 saniyede tanıma testi

1. Gövde EB Garamond 15.5px/1.66, iki kolon (8/12 + 3/12 kenar notu).
2. Numaralı başlıklar (1 · 1.1 · 1.1.1), mono değil aynı serif; numara `--ink-soft`.
3. Ekran başına 1 diyagram (1px çizgi, dolgu yok), fotoğraf yok.
4. Dipnot çizgisi 1px, 64px genişlikte, 12.5px mono numara.
5. Hareket 0.33s `linear` ve 0px kayma — yumuşak yay hiç görünmez.

## Görsel imza

- Gövde EB Garamond 15.5px / 1.66 / 72ch; ana kolon 8/12, kenar notu 3/12.
- Numaralı başlık: h2 24px "1. " öneki, h3 18px "1.1 " öneki, numara `--ink-soft`.
- Özet bloğu: 15.5px italik olmayan EB Garamond, sol 3px `--line` çizgi, 22px iç boşluk.
- Diyagram: 1px çizgi, dolgu yok, 2 seri (accent + ink-soft), lejant mono 11px.
- Dipnot: 1px üst çizgi (64px), 12.5px metin, mono numara.
- Radius 2px/4px; gölge yok, `--shadow` yalnız açılır menüde 1px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f8f8f6` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fdfdfb` | kart / panel / modal | tam kanama blok |
| `--ink` | `#1b1e23` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#1f4a7a` | akademik mavi: bağlantı, aktif sekme, diyagram 1. seri | gövde metni, başlık rengi, dolgu |
| `--line` | `rgba(27,30,35,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 15.72:1 · `ink-soft / bg` = 7.86:1 · `accent-ink / accent` = 8.51:1 · `ink-faint / bg` = 3.83:1.
- Tek vurgu kuralı: akademik mavi yalnız bağlantı, aktif sekme ve diyagramın birinci serisinde; ekranın ≤%5'i.
- Yasak kombinasyon: accent + ikinci renk, renkli zemin, gradyan, vurgu metin olarak gövdede.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | EB Garamond | 34px (mobil 26px) | 600 | 1.18 | -0.005em |
| H2 | EB Garamond | 24px | 600 | 1.24 | -0.005em |
| H3 | EB Garamond | 18px | 600 | 1.24 | -0.005em |
| Gövde | EB Garamond | 15.5px | 400 | 1.66 | 0 |
| Etiket / mono | Courier Prime | 11px | 400 | 1.4 | 0.08em |

- Ölçek oranı: 1.3 — 6 basamak: 11 · 12.5 · 15.5 · 18 · 24 · 34.
- Ölçü: 72ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":600,"display":600}; yasak: ikinci aile, display sans başlık, 700/900 ağırlık, 300 ince ağırlık, gövdede mono, gövdede uppercase, 16px üstü gövde, renkli başlık.
- Ölçek oranı 1.3; kullanılan 6 basamak: 11 · 12.5 · 15.5 · 18 · 24 · 34.
- `h1 { font-size: clamp(26px, 3vw, 34px) }`; 34px üstü başlık yasak (makale başlığı 3 satırı geçmez).
- Ağırlık: 400 gövde, 600 başlık; italik yalnız değişken/cins adlarında, 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1080px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 64px (mobil 40px) |
| Kart içi | 20px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Ana metin 8 kolon, kenar notu 3 kolon, 1 kolon boşluk; ekran başına 1 kenar notu. |

- Asimetri: ana metin 8/12 + kenar notu 3/12; ekran başına 1 kenar notu.
- Bölüm ritmi: en fazla 3 paragraf aynı hizada; dördüncüde alt başlık veya diyagram girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 0 1px 2px rgba(27,30,35,.08) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 0 1px 2px rgba(27,30,35,.08) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 2px · `--radius-lg` 4px. Radius 2px (input/chip/buton) ve 4px (tablo kabı/modal); 4px üstü yasak; avatar 50%; tablo satırı 0.
- Derinlik nereden gelir: Derinlik gölgeden gelmez: 1px hairline ve zemin tonu yeter. Gölge yalnız açılır menüde tek katman 1px; kart/modal gölgesiz.
- Kenarlık: 1px hairline; iç içe blok (tablo, diyagram kabı) 1px aynı tonda.
- Derinlik yok: gölge yalnız açılır menüde `0 1px 2px %8`; kart gölgesi yasak.
- Radius: `--radius` 2px (input/chip), `--radius-lg` 4px (tablo kabı/modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 11px 18px | 2px | 14px/600 body | var(--accent) / var(--accent-ink) | bg var(--ink), 120ms · opacity .9 · outline 2px var(--accent), offset 2px · opacity .45 · metin + "…" |
| Buton (ikincil) | 44px | 11px 18px | 2px | 14px/400 body | transparent / var(--ink) | border-color var(--ink) |
| Input | 44px | 11px 12px | 2px | 15.5px/400 body | var(--surface) + 1px solid var(--line) | border 1px var(--ink) + outline 2px var(--accent) · bg var(--bg-2) · border 1px var(--accent) + 12.5px hata · opacity .5 |
| Kart | — | 20px | 4px | 15.5px EB Garamond | var(--surface), none | border-color var(--ink-soft) |
| Chip / badge | 24px | 3px 8px | 2px | 11px/400 mono, .08em | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 56px | 0 24px | — | 12.5px/400 mono, .08em | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 44px | 0 10px | 0 | 15.5px/400 body, tabular-nums | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 24px | 4px | 18px EB Garamond | none | rgba(27,30,35,.40) |
| Toast | 40px | 10px 14px | 2px | 12.5px/400 mono | var(--ink) / var(--bg) | opacity 0→1, 180ms |
| Grafik paleti | — | — | — | 1px çizgi | 2 (accent, ink-soft); 1px hairline, yalnız yatay | mono 11px |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — soğuk gri zeminde 8.5:1.
- Dokunma hedefi: atıf bağlantıları 44px satır yüksekliği ile; dipnot işareti 12.5px ama 44px alan.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 16px ızgara, kare uç; matematik sembolleri metin olarak (ikon değil) |
| Fotoğraf | Yok — istisna: figür olarak 1 diyagram veya tablo |
| İllüstrasyon | Yalnız veri grafiği/diyagram: 1px çizgi, dolgu yok, 2 seri |
| Doku | Yok (`--grain: 0`); zemin düz |
| Logo alanı | Kurum adı sol üst 16px boşluk; mono 11px uppercase .08em |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Başlık 34px + özet bloğu (3px sol çizgi) + 2/12 künye (yazar, tarih, DOI) | `shots/01-landing.png` |
| Dashboard | yüksek | Tablo ağırlıklı: 44px satır, 1px hairline, mono rakam | `shots/02-dashboard.png` |
| Form | düşük | 44px input, 2px radius, 1px kenar; hata metni ink-soft | — |
| Liste / tablo | yüksek | 44px satır, sağa hizalı rakam, 1px alt çizgi | — |
| Boş durum | orta | Tek paragraf 72ch + "veri yok" mono etiket | — |
| Onboarding | orta | Numaralı üç adım (1 · 2 · 3), kenar notu yok | — |
| Pricing | düşük | Tablo biçiminde karşılaştırma; kart yok, 1px hairline | — |
| Giriş / ödeme | çok düşük | Tek kolon 360px, 2px radius, açıklama 12.5px | — |
| Modal | orta | 520px, 4px radius, 1px kenar, gölge yok | — |
| Bildirim / toast | orta | Sol alt, 40px, ink zemin + bg metin, 2px radius | — |
| Hata | düşük | Başlık 24px + tek paragraf + "hata kodu" mono | — |
| Profil / ayar | orta | Form 8/12 + kenar notu 3/12 | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 100ms | `linear` | `opacity` 1 → .92 (kayma yok) |
| Giriş (enter) | 330ms | `linear` | yalnız `opacity` (kayma yok), stagger 0.04s (40ms) |
| Scroll reveal | 420ms | aynı eğri | `top 89%` tetikleyici, `opacity` + 10px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 120ms | aynı eğri | `transform: scale(1.000)` |
| Ödül / vurgu | 300ms | `linear` | diyagram serisi 0→1 opacity (tek atım) |

- Süre bütçesi: enter 330ms ≤ 1200ms · scroll 420ms ≤ 1200ms · stagger 0.04s (40ms).
- Giriş 0px kayma: yalnız opacity; metin yer değiştirmez (okuma konumu sabit kalır).
- Pin/parallax yok: makale akışı sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, diyagram animasyonsuz çizilir.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f8f8f6` | `#101216` |
| `--surface` | `#fdfdfb` | `#14171c` |
| `--ink` | `#1b1e23` | `#eef0f2` |
| `--accent` | `#1f4a7a` | `#86aad6` |
| `--line` | `rgba(27,30,35,.16)` | `rgba(238,240,242,.14)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.41:1 · `accent-ink / accent` = 7.93:1.
- Koyu modda soğuk beyaz antrasite (`#101216`) döner; accent açık maviye (`#86aad6`) çekilir.
- Hairline opaklığı .14; radius değişmez; gölge yine yok.
- Diyagram çizgileri koyu modda 1px kalır, renk `--accant` yerine `--accent` + `--ink-soft`.

## Zorunlu kurallar

- Gövde EB Garamond 15.5px/1.66/72ch; ana kolon 8/12, kenar notu 3/12 (ekran başına 1)
- Numaralı başlık sistemi (1 · 1.1 · 1.1.1); numara --ink-soft, aynı serif aile
- Başlık h1 34px (mobil 26px); 34px üstü başlık yok
- Tek vurgu akademik mavi #1f4a7a, ekranın ≤%5'i, accent üstü daima --accent-ink
- Ayrım yalnız 1px hairline; kart gölgesi yok; radius 2/4px
- Bölüm arası 64px (mobil 40px), kart içi 20px; ölçek 4·8·12·16·24·32·48·64
- Görsel yalnız diyagram: 1px çizgi, dolgu yok, 2 seri, lejant mono 11px
- Dipnot çizgisi 1px / 64px genişlik; metin 12.5px

## Yasaklar

- İkinci aile, display sans başlık, 700/900 ağırlık, 300 ince ağırlık
- Fotoğraf, illüstrasyon, emoji, renkli ikon
- Kart gölgesi, yuvarlak 8px+ radius, gradyan, renkli zemin
- İkinci vurgu rengi, neon, glow, highlight şeridi
- Gövdede uppercase, gövdede mono, 16px üstü gövde (makale 15.5px)
- Parallax, pin/scrub, marquee, sürekli döngü, spring/overshoot
- Süs başlık (büyük display punto), drop cap, çift çerçeve

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız dipnot numarası ve şekil künyesinde dekoratif.
- `--ink-faint` etkileşimli metin değil; atıf bağlantıları `--accent` (8.5:1).
- Hareket hassasiyeti: neredeyse sıfır hareket; reduced-motion'da tamamen susar.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: soğuk gri zeminde mavi halka 8.5:1; koyu modda 7.9:1.

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
| Makale "blog" gibi duruyor | Punto 16px üstüne çıkmış veya kenar notu yok | 15.5px + 8/3 kolon + kenar notu |
| Tablo okunmuyor | Rakamlar sola hizalı | Rakamı sağa hizala, `font-variant-numeric: tabular-nums` |
| Başlıklar süslenmiş | Display aile veya renk eklenmiş | Aynı serif + numara `--ink-soft` |

## Komşu stiller

- **Uyumlu:** `swiss-design` — aynı ızgara disiplini; ürün bölümünde garnitür olur.
- **Uyumlu:** `broadsheet-daily` — serif gövde ve kural dili örtüşür.
- **Yasak:** `claymorphism` — yuvarlak yüzey ve yay hareketi kanıt ciddiyetini bozar.
- **Yasak:** `dopamine-ui` — doygun renk ve konfeti, nötr zemini yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/EB+Garamond | EB Garamond — Google Fonts — gövde serifi, 15.5px/1.66, 400/600 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — Google Fonts — dipnot numarası ve kod bloğu |
| https://www.latex-project.org/ | LaTeX Project — numaralı başlık, özet ve dipnot düzeni |
| https://arxiv.org/ | arXiv — preprint sayfa formu ve künye alanı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Academic Paper (styles/89-academic-paper/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="academic-paper"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = EB Garamond (600 başlık, 400 gövde); --font-mono Courier Prime dipnot/kod.
Yüzey: --bg / --surface / --bg-2; radius 2px/4px; kart gölgesi yok, derinlik 1px hairline.
Izgara: 8/3 kolon (ana metin + kenar notu), gutter 24px, bölüm ritmi 64px, ölçü 72ch.
Hareket: enter 0.33s linear 0px / stagger 0.04; scroll top 89% 0.42s 10px once:true;
         hover 120ms scale 1.000; pin yok. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (fotoğraf, gölge, ikinci renk, büyük display).
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
[data-style="academic-paper"] { --bg: #f8f8f6; --bg-2: #eeeeea; --surface: #fdfdfb; --surface-2: #f2f2ee; --ink: #1b1e23; --ink-soft: #4a4e55; --ink-faint: #7a7e85; --accent: #1f4a7a; --accent-ink: #f6f8fb; --line: rgba(27,30,35,.16); --radius: 2px; --radius-lg: 4px; --shadow: 0 1px 2px rgba(27,30,35,.08); --shadow-hard: none; --font-display: "EB Garamond", Georgia, serif; --font-body: "EB Garamond", Georgia, serif; --font-mono: "Courier Prime", Courier, monospace; --tracking: -0.005em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="academic-paper"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
