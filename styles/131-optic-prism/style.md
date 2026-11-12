# 131 · Optic Prism

> **Bir cümlede:** Optik cam mantığı: 1px prizma kenarı, conic kırılma halkası ve 0.58s hassas giriş — blur yok, sadece ışığın kırılması.

| | |
|---|---|
| **Hissiyat** | keskin · soğuk · hassas · bilimsel |
| **En iyi** | Optik/lens ürün sayfası, kamera ekipmanı, ölçüm cihazı vitrini, fotoğraf stüdyosu |
| **Kaçın** | Sıcak el yapımı marka, çocuk ürünü, klinik form |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="optic-prism"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Optic Prism camı taklit etmez, kırar: `conic-gradient` ile 1px kalınlığında prizma kenarı, `color-mix` ile cam tonu ve 0 blur. Michroma 44px display, Inter 16px/1.62 gövde, IBM Plex Mono 11px ölçü etiketleri. Kazanılan şey hassasiyet ve ürün hissi; feda edilen şey sıcaklık.

Yüzey üç kademede kalır: `--bg` soğuk beyaz, `--surface` kırılma halkalı cam panel, `--surface-2` mat cam. Kenar daima 1px, gölge hiç yok; derinlik kırılma halkasından ve ton farkından gelir.

Hareket optik hizalamadır: 0.58s `cubic-bezier(.16,.84,.44,1)` giriş, 14px kayma, 45ms stagger; **tek pin** (scrub 0.85, +105%) ile lens sahnesi sabitlenir, mobilde kapalı. Hover 220ms ve 1.02 — abartı yok.

### Ne değildir

- `glassmorphism` değildir: glassmorphism `backdrop-filter` blur ve cam katman yığar; burada blur 0, kırılma 1px conic halka ile verilir.
- `liquid-glass` değildir: liquid-glass SF Pro ve yay eğrisiyle akışkan davranır; burada Michroma + ölçü etiketi ve 0.58s doğrusal-hassas eğri var.
- `optical-illusion` değildir: optik illüzyon Moiré desen üretir; burada desen yok, tek kırılma halkası var.
- `optic-prism` bir "cam panel şablonu" değildir: kırılma halkası olmadan uygulanmaz.

### Nereden gelir

Kökeni optik alet katalogları (Zeiss, Leica objektif çizimleri) ve spektroskop görselleridir. Bugün kamera/optik donanım ürün sayfalarında geri döndü çünkü ürünün asıl değeri ölçülebilir keskinlik. Klişeye düşmemek için korunması gereken detay: blur yasağı ve 1px kırılma halkası.

### 3 saniyede tanıma testi

1. Michroma 44px display, ışık harf aralıklı; ölçü etiketleri mono 11px.
2. Kırılma halkası: 1px conic beyaz→cam tonu geçişi, kart kenarında.
3. Blur yok; `backdrop-filter` hiç görünmez.
4. Radius 2px; keskin ama tam köşe değil.
5. Soğuk beyaz zemin + tek turkuaz-çelik accent; ikinci renk yok.

## Görsel imza

- Prizma halkası: `conic-gradient(from 210deg, ...)` 1px kenar, kart ve görsel kabında.
- Michroma 44px / 1.3 / 0.02em display (mobil 26px); gövde Inter 16px / 1.62 / 68ch.
- Ölçü bandı: mono 11px uppercase, 3 hücre, 1px üst/alt hairline.
- Radius 2px (kart) / 10px (görsel kabı); 12px üstü yasak.
- Gölge yok; derinlik kırılma + `--surface` ton farkı.
- TEK pin: lens sahnesi scrub 0.85, +105%, mobilde statik.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2f6f7` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#fdfeff` | kart / panel / modal | tam kanama blok |
| `--ink` | `#101a1f` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#0d5c63` | çelik-turkuaz: ölçü bandı, birincil buton, aktif sekme | spektrum gradyanı, ikinci neon, gövde metni |
| `--line` | `rgba(16,26,31,.14)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.22:1 · `ink-soft / bg` = 7.36:1 · `accent-ink / accent` = 7.32:1 · `ink-faint / bg` = 3.52:1.
- Tek vurgu kuralı: çelik-turkuaz yalnız ölçü bandı, birincil buton ve aktif sekmede; ekranın ≤%6'sı.
- Yasak kombinasyon: spektrum (çok renkli) gradyan, neon mor, blur cam.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma | 44px (mobil 26px) | 400 | 1.3 | 0.02em |
| H2 | Michroma | 26px | 400 | 1.3 | 0.01em |
| H3 | Michroma | 20px | 400 | 1.3 | 0.01em |
| Gövde | Inter | 16px | 400 | 1.62 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.4 | 0.14em |

- Ölçek oranı: 1.3 — 6 basamak: 11 · 12 · 16 · 20 · 26 · 44.
- Ölçü: 68ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":400}; yasak: 700/900 ağırlık, italik display, gövdede Michroma, gövdede büyük harf, 44px üstü display, gövdede mono, negatif tracking.
- Ölçek oranı 1.3; kullanılan 6 basamak: 11 · 12 · 16 · 20 · 26 · 44.
- `h1 { font-size: clamp(26px, 4vw, 44px) }`; Michroma 44px üstü harf genişliği taşır.
- Ağırlık: display 400 (Michroma tek ağırlık), gövde 400/500; 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 88px (mobil 56px) |
| Kart içi | 24px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Görsel 7/12, metin 5/12; ekran başına 1 asimetrik blok. |

- Asimetri: görsel kabı 7/12, metin 5/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde ölçü bandı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 2px · `--radius-lg` 10px. Radius 2px (buton/input/chip) ve 10px (görsel kabı/modal); 12px üstü yasak; tablo satırı 0; avatar 50%.
- Derinlik nereden gelir: Gölge yok; derinlik 1px kırılma halkası ve ton kademesinden gelir. Yüzen modal bile 1px kenar ile ayrılır.
- Kenarlık: 1px prizma conic kenar kartta; iç panelde 1px hairline.
- Derinlik kaynağı: kırılma halkası + ton; gölge ve blur yok.
- Radius: `--radius` 2px (buton/input), `--radius-lg` 10px (görsel kabı).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 13px 22px | 2px | 14px/500 mono, .1em uppercase | var(--accent) / var(--accent-ink) | bg var(--ink), 220ms · scale(.99) · outline 2px var(--accent), offset 2px · opacity .45 · 1px tarama çizgisi soldan sağa |
| Buton (ikincil) | 48px | 13px 22px | 2px | 14px/500 mono, .1em | transparent / var(--ink) | kenar 1px var(--accent) |
| Input | 48px | 12px 14px | 2px | 16px/400 body | var(--surface) + 1px solid var(--line) | border 1px var(--accent) + outline 2px var(--accent) · bg var(--surface-2) · border 1px var(--accent) + 12px mono mesaj · opacity .5 |
| Kart | — | 24px | 2px | 16px Inter | var(--surface) | kırılma halkası %18 opaklık |
| Chip / badge | 24px | 3px 8px | 2px | 11px/400 mono, .14em uppercase | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 60px | 0 24px | — | 11px/400 mono, .14em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 44px | 0 12px | 0 | 16px/400 body + 11px mono | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 28px | 10px | 20px Michroma | none | rgba(16,26,31,.40) |
| Toast | 44px | 12px 16px | 2px | 12px/400 mono | var(--ink) / var(--bg) | opacity 0→1, 200ms |
| Grafik paleti | — | — | — | 1px | 2 (accent, ink-soft); 1px hairline yalnız yatay | 11px mono .14em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — soğuk beyazda 7.4:1.
- Dokunma hedefi: 48px buton; ölçü bandı hücreleri 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin uç, 20px ızgara; ikon optik çizim dilini izler |
| Fotoğraf | Lens/objektif makro fotoğrafı, soğuk beyaz ışık, alan ≤%40; renkli filtre yok |
| İllüstrasyon | Optik diyagram: 1px çizgi + 1 kırılma oku; ekran başına 1 |
| Doku | Yok (`--grain: 0`); zemin düz |
| Logo alanı | Sol üst 20px, Michroma 14px, 0.06em |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 44px Michroma başlık + 7/12 lens kabı (kırılma halkası) + ölçü bandı | `shots/01-landing.png` |
| Dashboard | orta | Üç metrik kartı, 1px prizma kenar, mono değer | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 2px radius, 1px kenar | — |
| Liste / tablo | orta | 44px satır, 1px hairline, sağa hizalı mono | — |
| Boş durum | orta | Tek çizgi diyagram + "ölçüm yok" etiketi | — |
| Onboarding | orta | Üç adım: hizala → kalibre → ölç | — |
| Pricing | orta | Üç paket, 2px radius kart, 1px prizma kenar | — |
| Giriş / ödeme | çok düşük | Tek kolon 400px, sade form, mono toplam | — |
| Modal | orta | 520px, 10px radius, 1px kenar, gölge yok | — |
| Bildirim / toast | orta | Üst orta, 44px, ink zemin + bg metin | — |
| Hata | düşük | "kırılma hatası" mono etiket + tek cümle | — |
| Profil / ayar | orta | Kalibrasyon paneli: 3 kaydırıcı + mono değer | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 110ms | `cubic-bezier(.16,.84,.44,1)` | `scale(.99)` + kenar 1px accent |
| Giriş (enter) | 580ms | `cubic-bezier(.16,.84,.44,1)` | `opacity` + 14px `translateY`, stagger 45ms |
| Scroll reveal | 720ms | aynı eğri | `top 84%` tetikleyici, `opacity` + 16px `translateY`, `once: true` |
| Pin / scrub | — | — | tek pin: scrub 0.85, +105%; mobilde kapalı |
| Hover | 220ms | aynı eğri | `transform: scale(1.02)` |
| Ödül / vurgu | 320ms | `cubic-bezier(.16,.84,.44,1)` | kırılma halkası 0→1 opacity (tek atım) |

- Süre bütçesi: enter 580ms ≤ 1200ms · scroll 720ms ≤ 1200ms · stagger 45ms.
- Tek pin sahnesi (lens, scrub 0.85, +105%); sayfada ikinci scrub yok, mobilde statik.
- Blur animasyonu yok; kırılma halkası opaklıkla açılır.
- `prefers-reduced-motion`: süreler 0.01ms, pin kapalı, halka statik.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2f6f7` | `#0a1216` |
| `--surface` | `#fdfeff` | `#0d161b` |
| `--ink` | `#101a1f` | `#eef6f8` |
| `--accent` | `#0d5c63` | `#6fe6dc` |
| `--line` | `rgba(16,26,31,.14)` | `rgba(238,246,248,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 17.26:1 · `accent-ink / accent` = 12.61:1.
- Koyu modda soğuk beyaz gece camına (`#0a1216`) döner; accent buz turkuazına (`#6fe6dc`) çekilir.
- Kırılma halkası koyuda %18 opaklık kazanır (siyahta kaybolmasın).
- Radius ve kenar 1px değişmez; gölge yine yok.

## Zorunlu kurallar

- Michroma 44px/1.3/0.02em display (mobil 26px); gövde Inter 16px/1.62/68ch
- Kırılma halkası 1px conic kenar kart ve görsel kabında; blur/backdrop-filter yasak
- Gölge yok; derinlik halka + ton kademesi; radius 2/10px
- Tek vurgu çelik-turkuaz #0d5c63, ekranın ≤%6'sı, accent üstü daima --accent-ink
- Ölçü bandı mono 11px uppercase .14em, 3 hücre, 1px hairline
- Bölüm arası 88px (mobil 56px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
- Tek pin sahnesi: scrub 0.85, +105%, mobilde kapalı

## Yasaklar

- Blur, backdrop-filter, cam katman yığma, yarı saydam panel
- Spektrum/çok renkli gradyan, neon mor-pembe, renkli ışık lekesi
- Yumuşak gölge, glow, 2px+ kenar, 12px üstü radius
- İkinci display aile, 700 ağırlık, italik display
- Saf siyah zemin (#000), saf beyaz metin (#fff)
- Parallax, ikinci scrub, marquee, sürekli döngü, blur animasyonu
- Desen/moiré, illüstrasyon kolajı, 3B render

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız ölçü birimi etiketinde dekoratif.
- `--ink-faint` etkileşimli metin değil; ölçü değeri daima `--ink`.
- Hareket hassasiyeti: pin + scrub vestibüler risk; reduced-motion'da statik poster.
- Şeffaf yüzey yok (`--blur: 0`); `@supports` gerekmez.
- Odak görünürlüğü: soğuk beyazda çelik halka 7.4:1; koyu camda 10.4:1.

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
| Sayfa "glassmorphism" gibi | blur/backdrop-filter eklenmiş | Blur 0; kırılma 1px conic halka |
| Display taşıyor | Michroma 44px üstü | clamp(26px, 4vw, 44px) |
| Ölçü okunmuyor | mono etiket 11px altı veya tracking eksik | 11px + 0.14em uppercase |

## Komşu stiller

- **Uyumlu:** `marble-vein` — aynı soğuk lüks ton; taş bölümünde garnitür olur.
- **Uyumlu:** `machined-metal-panel` — teknik ölçü dili örtüşür.
- **Yasak:** `glassmorphism` — blur cam fisik, kırılma disiplinini bozar.
- **Yasak:** `claymorphism` — yumuşak yuvarlak yüzey optik keskinliği yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Michroma | Michroma — Google Fonts — teknik display, 400 ağırlık, 44px |
| https://fonts.google.com/specimen/Inter | Inter — Google Fonts — gövde 16px/1.62 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — ölçü bandı 11px .14em |
| https://www.zeiss.com/consumer-products/int/home/lenses.html | Zeiss — lens teknolojisi — optik ürün dili, ölçü etiketleri |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient | MDN — conic-gradient — 1px kırılma halkası formülü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Optic Prism (styles/131-optic-prism/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="optic-prism"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Michroma yalnız başlıkta; --font-body Inter gövdede; --font-mono ölçü bandında.
Yüzey: 1px prizma conic kenar + ton kademesi; gölge yok, blur 0; radius 2/10px.
Izgara: 12 kolon, gutter 24px, görsel 7/12, bölüm ritmi 88px.
Hareket: enter 0.58s cubic-bezier(.16,.84,.44,1) 14px / stagger 0.045; scroll top 84% 0.72s 16px;
         pin scrub 0.85 +105% (mobil kapalı); hover 220ms scale 1.02. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur, spektrum, glow, 12px+ radius).
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
[data-style="optic-prism"] { --bg: #f2f6f7; --bg-2: #e7eef0; --surface: #fdfeff; --surface-2: #eaf1f3; --ink: #101a1f; --ink-soft: #43535a; --ink-faint: #74858c; --accent: #0d5c63; --accent-ink: #f2fbfc; --line: rgba(16,26,31,.14); --radius: 2px; --radius-lg: 10px; --shadow: none; --shadow-hard: none; --font-display: "Michroma", "Space Grotesk", system-ui, sans-serif; --font-body: "Inter", system-ui, sans-serif; --font-mono: "IBM Plex Mono", ui-monospace, monospace; --tracking: 0.02em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="optic-prism"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 7.07:1 · `ink-soft / surface-2` 7.00:1 · `accent-ink / accent` 7.32:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Bu stilde `.sig` dekor katmanı yok, z-index düzeltmesi gerekmedi.
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: prizma: ayrışan tayf bantları.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.58s` / `scroll 0.72s` (ikisi de ≤ 1.2 s).
