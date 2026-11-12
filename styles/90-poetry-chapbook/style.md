# 90 · Poetry Chapbook

> **Bir cümlede:** Şiir kitapçığı: 1.1s'lik nefes alan giriş, Cormorant Garamond italik dizeler, 46ch dar ölçü ve sol kenarda tek 1px el dikişi çizgisi.

| | |
|---|---|
| **Hissiyat** | mahrem · yavaş · el yapımı · boşluklu |
| **En iyi** | Şiir kitapçığı, küçük yayınevi, edisyon/atölye sayfası, edebiyat dergisi |
| **Kaçın** | Dashboard, e-ticaret listesi, hızlı onboarding akışı |
| **Zorluk** | düşük · **Erişilebilirlik** | iyi |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="poetry-chapbook"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Poetry Chapbook bir sayfayı elle dikilmiş kitapçık gibi kurar: 46ch dar ölçü, Cormorant Garamond 44px/1.14 başlık, 16.5px/1.78 gövde, sol kenarda 1px kesikli "dikiş" çizgisi. Kazanılan şey mahremiyet ve nefes; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 1 şiir.

Yüzey kâğıt gibidir: `--bg` sıcak fildişi, ayrım yalnız 1px hairline, gölge yok. Vurgu soluk mor `#4b3f66`; yalnız bölüm numarası, bağlantı ve tek çizgide, ekranın ≤%4'ü.

Hareket en yavaş olanıdır: 1100ms `cubic-bezier(.33,1,.68,1)` giriş, 26px kayma, 120ms stagger; scroll reveal 1.15s. Hızlı hiçbir geçiş yok, hover 380ms.

### Ne değildir

- `ethereal` değildir: ethereal sans gövde ve ışık katmanlarıyla çalışır; burada serif italik, 46ch ölçü ve el dikişi çizgisi vardır.
- `literary-hardcover` değildir: hardcover 64ch ve 17px gövdeyle roman okutur; chapbook 46ch ve 16.5px ile tek şiire odaklanır.
- `dark-academia` değildir: koyu zemin ve gravür yok; fildişi kâğıt ve kesikli dikiş var.
- `minimalism` değildir: minimalism 0.5s giriş ve sans gövdeyle nötr kalır; burada 1.1s ve serif italik.

### Nereden gelir

Kökeni 17.–19. yüzyıl chapbook'ları ve modern küçük yayınevi (small press) şiir kitapçıklarıdır: elle dikilmiş sırt, dar ölçü, tek renk baskı. Bugün bağımsız yayınevi ve edebiyat dergisi sitelerinde geri döndü çünkü dijitalde "el yapımı" hissi az kaldı. Klişeye düşmemek için korunması gereken detay: gerçek kesikli dikiş çizgisi ve 46ch ölçü.

### 3 saniyede tanıma testi

1. Cormorant Garamond 44px/1.14 başlık; gövde 16.5px/1.78, 46ch.
2. Sol kenarda 1px kesikli dikey çizgi (el dikişi), ekran başına 1.
3. Radius 2px/8px; gölge yok; ayrım yalnız hairline.
4. Vurgu soluk mor `#4b3f66`, yalnız numara/bağlantı/çizgide; ekranın ≤%4'ü.
5. Hareket 1.1s — sayfa neredeyse nefes alır gibi açılır.

## Görsel imza

- Display Cormorant Garamond 500 44px / 1.14 / 0.01em (mobil 30px); gövde 16.5px / 1.78 / 46ch.
- El dikişi: sol kenarda 1px `dashed var(--line)`, 12px boşluk, yalnız 1 kez (mobilde gizlenir).
- Şiir bloğu: 8/8 kolon, sol 5/8 hizası, satır arası 1.78; kıta arası 28px.
- Bölüm numarası: mono 10.5px, tracking .18em, `--accent`, başlığın 14px üstünde.
- Radius 2px/8px, gölge `none`; yüzen katman bile hairline ile ayrılır.
- Kâğıt grain .02; ikinci doku yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f2e9` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fdfaf4` | kart / panel / modal | tam kanama blok |
| `--ink` | `#22201d` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#4b3f66` | soluk mor: bölüm numarası, bağlantı, dikiş çizgisi | dolgu zemini, ikinci renk, gövde metni |
| `--line` | `rgba(34,32,29,.14)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 14.57:1 · `ink-soft / bg` = 7.15:1 · `accent-ink / accent` = 8.63:1 · `ink-faint / bg` = 3.69:1.
- Tek vurgu kuralı: soluk mor yalnız bölüm numarası, bağlantı ve dikiş çizgisinde; ekranın ≤%4'ü.
- Yasak kombinasyon: accent + ikinci renk, gradyan, renkli gölge, doygun mor (#7c3aed).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 44px (mobil 30px) | 500 | 1.14 | 0.01em |
| H2 | Cormorant Garamond | 28px | 500 | 1.26 | 0.005em |
| H3 | Cormorant Garamond | 20px | 500 | 1.26 | 0.005em |
| Gövde | Cormorant Garamond | 16.5px | 400 | 1.78 | 0 |
| Etiket / mono | IBM Plex Mono | 10.5px | 400 | 1.4 | 0.18em |

- Ölçek oranı: 1.3 — 6 basamak: 10.5 · 12.5 · 16.5 · 20 · 28 · 44.
- Ölçü: 46ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":500}; yasak: ikinci aile, sans başlık, 700/900 ağırlık, 300 ince ağırlık, gövdede uppercase, gövdede mono, 17px üstü gövde, 46ch üstü ölçü.
- Ölçek oranı 1.3; kullanılan 6 basamak: 10.5 · 12.5 · 16.5 · 20 · 28 · 44.
- `h1 { font-size: clamp(30px, 4.2vw, 44px) }`; 44px üstü başlık yasak (şiir başlığı kısa).
- Ağırlık: gövde 400, başlık 500; italik yalnız dize alıntısında, 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 960px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 96px (mobil 56px) |
| Kart içi | 24px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Şiir bloğu sol 5/8 hizada, sağ 3/8 boş; ekran başına 1 asimetrik blok. |

- Asimetri: şiir bloğu sol 5/8 hizada, sağ 3/8 boş; ekran başına 1 asimetrik blok.
- Bölüm ritmi: art arda en fazla 2 kıta aynı hizada; üçüncüde 28px boşluk artar.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 2px · `--radius-lg` 8px. Radius 2px (chip/input/buton) ve 8px (kapak bloğu/modal); 8px üstü yasak; avatar 50%; tablo satırı 0.
- Derinlik nereden gelir: Gölge hiç kullanılmaz; derinlik yalnız 1px hairline ve fildişi ton kademesinden gelir. Yüzen katman bile hairline ile ayrılır.
- Kenarlık: 1px hairline; kesikli yalnız dikiş çizgisinde.
- Derinlik yok: gölge `none`, `--shadow-hard` `none`; ayrım ton + hairline.
- Radius: `--radius` 2px (chip/input), `--radius-lg` 8px (kapak bloğu/modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 20px | 2px | 15px/400 body, .04em | transparent / var(--accent) | bg var(--accent), color var(--accent-ink), 380ms · opacity .9 · outline 2px var(--accent), offset 3px · opacity .4 · metin + "…" |
| Buton (ikincil) | 44px | 12px 20px | 2px | 15px/400 body | transparent / var(--ink) | border-color var(--ink-soft) |
| Input | 44px | 11px 12px | 2px | 16.5px/400 body | transparent + alt 1px solid var(--line) | alt kenar 1px var(--accent) · bg var(--bg-2) · alt kenar 1px var(--accent) + 12.5px hata · opacity .5 |
| Kart | — | 24px | 8px | 16.5px Cormorant Garamond | var(--surface), none | border-color var(--ink-soft) |
| Chip / badge | 22px | 2px 8px | 2px | 10.5px/400 mono, .18em uppercase | transparent | border-color var(--accent), color var(--accent) |
| Nav | 64px | 0 28px | — | 10.5px/400 mono, .18em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 48px | 0 10px | 0 | 16.5px/400 body | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 28px | 8px | 20px Cormorant Garamond | none | rgba(34,32,29,.40) |
| Toast | 40px | 10px 16px | 2px | 12.5px/400 body | var(--ink) / var(--bg) | opacity 0→1, 300ms |
| Grafik paleti | — | — | — | 1px çizgi | 1 (accent); yok | mono 10.5px .18em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — fildişi zeminde 8.6:1.
- Dokunma hedefi: bağlantılar 44px satır; chip 22px görünür + 11px padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | İkon kullanılmaz; ok işareti metin karakteri (→) olarak |
| Fotoğraf | Yok — istisna: 1 adet siyah-beyaz doku fotoğrafı, %20 opaklık, yalnız bölüm açılışında |
| İllüstrasyon | Yok; tipografi ve boşluk illüstrasyonun yerini alır |
| Doku | Kâğıt grain .02 + sol kenarda 1px kesikli dikiş; başka doku yok |
| Logo alanı | Logo yok; şair adı mono 10.5px uppercase .18em, sol üstte 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | düşük | Tek şiir: sol 5/8 hizada, dikiş çizgisi, 44px başlık, 46ch gövde | `shots/01-landing.png` |
| Dashboard | düşük | Dizin: 3 satır mono numara + başlık, 1px hairline | `shots/02-dashboard.png` |
| Form | çok düşük | 44px input, 2px radius, 1px kenar, geniş etiket aralığı | — |
| Liste / tablo | düşük | 48px satır, mono numara, hairline | — |
| Boş durum | orta | Tek dize + 28px boşluk + ikincil bağlantı | — |
| Onboarding | düşük | İki adım, her adımda tek dize; dikiş çizgisi yok | — |
| Pricing | düşük | İki plan, kart yerine hairline ile ayrılmış sütun | — |
| Giriş / ödeme | çok düşük | Tek kolon 340px, 2px radius, süs yok | — |
| Modal | orta | 460px, 8px radius, 1px kenar, gölge yok | — |
| Bildirim / toast | orta | Alt orta, 40px, ink zemin + bg metin | — |
| Hata | düşük | Tek cümle + 1px hairline + ikincil bağlantı | — |
| Profil / ayar | orta | Form 5/8 + boşluk 3/8; dikiş çizgisi sol | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 160ms | `cubic-bezier(.33,1,.68,1)` | `opacity` 1 → .94 (kayma yok) |
| Giriş (enter) | 1100ms | `cubic-bezier(.33,1,.68,1)` | `opacity` + 26px `translateY`, stagger 0.12s (120ms) |
| Scroll reveal | 1150ms | aynı eğri | `top 83%` tetikleyici, `opacity` + 22px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 380ms | aynı eğri | `transform: scale(1.02)` |
| Ödül / vurgu | 520ms | `cubic-bezier(.33,1,.68,1)` | dikiş çizgisi yüksekliği 0→100% (tek atım) |

- Süre bütçesi: enter 1100ms ≤ 1200ms · scroll 1150ms ≤ 1200ms · stagger 0.12s (120ms).
- Giriş 1100ms: sayfa "nefes alır" gibi açılır; 1200ms üstüne çıkmaz (bütçe).
- Pin/parallax yok: şiir sabit durur; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, dikiş çizgisi statik görünür.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f2e9` | `#15141a` |
| `--surface` | `#fdfaf4` | `#19181f` |
| `--ink` | `#22201d` | `#f1eee9` |
| `--accent` | `#4b3f66` | `#b0a2d6` |
| `--line` | `rgba(34,32,29,.14)` | `rgba(241,238,233,.14)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 15.82:1 · `accent-ink / accent` = 7.94:1.
- Koyu modda fildişi zemin gece mürekkebine (`#15141a`) döner; accent açık leylaka (`#b0a2d6`) çekilir.
- Hairline opaklığı .14; gölge yok; dikiş çizgisi aynı kesikli desenle kalır.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar

- Display Cormorant Garamond 500 44px/1.14 (mobil 30px); gövde 16.5px/1.78/46ch
- Sol kenarda 1px kesikli dikiş çizgisi, ekran başına 1, mobilde gizli
- Tek vurgu soluk mor #4b3f66, ekranın ≤%4'ü, accent üstü daima --accent-ink
- Gölge yok; ayrım 1px hairline + ton kademesi; radius 2/8px
- Bölüm arası 96px (mobil 56px), kıta arası 28px, kart içi 24px
- Bölüm numarası mono 10.5px .18em uppercase
- Kâğıt grain .02 tek doku; fotoğraf yalnız %20 opaklıkta 1 kez

## Yasaklar

- İkinci aile, 700/900 ağırlık, 300 ince ağırlık, sans başlık
- Gölge, 2px+ kenar, gradyan, renkli zemin, doygun mor (#7c3aed benzeri)
- İkon seti, emoji, illüstrasyon, foto kolaj
- Dashboard yoğunluğu: ekran başına 1'den fazla şiir/odak bloğu
- Parallax, pin/scrub, marquee, sürekli döngü, spring, glitch
- Gövdede uppercase (dize hariç), 17px üstü gövde, 46ch üstü ölçü
- Yuvarlak 12px+ radius, kart gölgesi, çift çerçeve

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız tarih/künye satırında dekoratif.
- `--ink-faint` etkileşimli metin değil; bağlantılar `--accent` (8.6:1).
- Hareket hassasiyeti: en yavaş giriş (1.1s) ama tek seferlik; reduced-motion'da susar.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: fildişi zeminde mor halka 8.6:1; koyu modda 7.9:1.

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
| Sayfa "boş" görünüyor | 46ch ölçü + 96px bölüm ritmi fazla gelmiş | Bölüm ritmini 96px'te tut, en az 1 mono etiket ekle |
| Şiir roman gibi akıyor | Gövde 17px ve 64ch olmuş | 16.5px + 46ch + 1.78 satır aralığı |
| El yapımı hissi kayboldu | Dikiş çizgisi veya grain eklenmemiş | Sol kenara 1px dashed + grain .02 |

## Komşu stiller

- **Uyumlu:** `ethereal` — aynı yavaş ritim; atmosfer bölümünde garnitür olur.
- **Uyumlu:** `literary-hardcover` — aynı serif disiplini, farklı ölçü.
- **Yasak:** `neo-brutalism` — sert gölge ve 3px kenar kâğıt fiziğini bozar.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius mahremiyeti kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cormorant+Garamond | Cormorant Garamond — Google Fonts — display serif, 500 ağırlık, 44px/1.14 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — bölüm numarası ve künye etiketi |
| https://en.wikipedia.org/wiki/Chapbook | Chapbook — Wikipedia — el dikişi, dar ölçü ve tek renk baskı geleneği |
| https://www.poetryfoundation.org/ | Poetry Foundation — şiir dizgisi, kıta aralığı ve okuma ritmi |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — 4.5:1 gövde / 3:1 büyük metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Poetry Chapbook (styles/90-poetry-chapbook/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="poetry-chapbook"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display = --font-body = Cormorant Garamond (500 başlık, 400 gövde); --font-mono IBM Plex Mono numara.
Yüzey: --bg / --surface / --bg-2; radius 2px/8px; gölge yok; ayrım hairline + ton.
Izgara: 46ch dar ölçü, sol 5/8 hiza, kıta arası 28px, bölüm ritmi 96px, sol kenarda 1px kesikli dikiş.
Hareket: enter 1.1s cubic-bezier(.33,1,.68,1) 26px / stagger 0.12; scroll top 83% 1.15s 22px once:true;
         hover 380ms scale 1.02; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, doygun mor, ikon seti, dashboard yoğunluğu).
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
[data-style="poetry-chapbook"] { --bg: #f7f2e9; --bg-2: #ece6da; --surface: #fdfaf4; --surface-2: #f0eadd; --ink: #22201d; --ink-soft: #55504a; --ink-faint: #837c74; --accent: #4b3f66; --accent-ink: #f7f3ee; --line: rgba(34,32,29,.14); --radius: 2px; --radius-lg: 8px; --shadow: none; --shadow-hard: none; --font-display: "Cormorant Garamond", Garamond, Georgia, serif; --font-body: "Cormorant Garamond", Garamond, Georgia, serif; --font-mono: "IBM Plex Mono", ui-monospace, monospace; --tracking: 0.01em; --blur: 0px; --grain: 0.02; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="poetry-chapbook"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
