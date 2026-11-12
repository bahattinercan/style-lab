# 134 · Concrete Monolith

> **Bir cümlede:** Dökme beton kütle: sıfır radius, sıfır kenarlık, tek ton geçişi ve 0.95s ağır giriş — yüzey ayrımı çizgiden değil kütleden gelir.

| | |
|---|---|
| **Hissiyat** | ağır · sessiz · anıtsal · nötr |
| **En iyi** | Mimarlık stüdyosu, kamu projesi arşivi, galeri/müze, kültür merkezi |
| **Kaçın** | Hızlı e-ticaret, çocuk ürünü, klinik form |
| **Zorluk** | orta · **Erişilebilirlik** | iyi |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="concrete-monolith"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Concrete Monolith blokları birbirinden ayırmaz, kütleyi tek parça olarak döker: 0 radius, 0 kenarlık, sıfır gölge; ayrım yalnız üç gri tonu ve 40px boşlukla kurulur. Archivo Black 56px majüskül başlık, Inter 16px/1.6 gövde. Kazanılan şey anıtsallık; feda edilen şey süs ve renk — tek ochre aksan kalır.

Kalıp izi (form line) tek dokudur: 1px/14px dikey çizgi %3, yalnız hero'da. Kenarlık hiç kullanılmadığı için hiyerarşi puntosu ve tonla taşınır; bu yüzden gövde 16px'in altına inmez.

Hareket ağır ve tektir: 0.95s `cubic-bezier(.5,.02,.3,1)` giriş, 32px kayma, 80ms stagger; **tek pin** (scrub 1.15, +130%) ile kütle sahnesi sabitlenir, mobilde kapalı. Hover 340ms ve 1.01 — neredeyse fark edilmez.

### Ne değildir

- `slavic-late-brutalist` değildir: o stil 3px kenar, sert ofset gölge ve pas kırmızısıyla panel yığar; burada kenarlık 0, gölge 0, aksan ochre ve tek kütle var.
- `neo-brutalism` değildir: neo-brutalism kalın kenar ve blok gölgeyle çalışır; burada hiç kenarlık yok.
- `scandinavian-dark` değildir: o stil hairline ve mat koyu yüzeyle ince kalır; burada açık beton ve 56px majüskül kütle var.
- `concrete-monolith` bir "gri tema" değildir: kalıp izi ve tek pin sahnesi olmadan uygulanmaz.

### Nereden gelir

Kökeni 1950-70'lerin brutalist ve Tadao Ando tarzı dökme beton mimarisidir: kalıp izi, derz yerine kütle, tek malzeme. Bugün mimarlık ve kamu arşivi sitelerinde geri döndü çünkü güvenilirlik "sessiz ağırlık" ile anlatılıyor. Klişeye düşmemek için korunması gereken detay: kenarlığın gerçekten 0 olması ve kalıp izinin tek ekranda kalması.

### 3 saniyede tanıma testi

1. Archivo Black 56px majüskül başlık; hiçbir blokta kenarlık yok.
2. Radius 0; butonlar bile keskin.
3. Üç gri tonu (bg, surface, surface-2) kütle ayrımını taşır.
4. Tek ochre aksan; ikinci renk yok.
5. 0.95s ağır giriş + tek pin sahnesi (kütle).

## Görsel imza

- Archivo Black 400 56px / 1.02 / −0.02em majüskül başlık (mobil 32px); gövde Inter 16px / 1.6 / 66ch.
- Sıfır kenarlık: hiçbir bileşende `border` yok; ayrım ton ve 40px boşlukla.
- Kalıp izi: 1px/14px dikey çizgi %3, yalnız hero'da, ekran başına 1.
- Kütle bloğu: 24px iç boşluk, 0 radius, `--surface` tonu; hover'da ton bir kademe koyulaşır.
- Rakam bandı: Space Mono 24px, üç hücre, 1px üst çizgi yok (yalnız ton).
- Radius 0px her yerde; tek istisna avatar 50%.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#dedcd6` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#eae8e3` | kart / panel / modal | tam kanama blok |
| `--ink` | `#14161a` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#7a5a17` | ochre: birincil buton, aktif sekme, rakam bandı | pas kırmızısı (70 bölgesi), ikinci renk, gradyan |
| `--line` | `rgba(20,22,26,.22)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 13.21:1 · `ink-soft / bg` = 7.18:1 · `accent-ink / accent` = 5.83:1 · `ink-faint / bg` = 3.65:1.
- Tek vurgu kuralı: ochre yalnız birincil buton, aktif sekme ve rakam bandında; ekranın ≤%6'sı.
- Yasak kombinasyon: ikinci renk (kırmızı/mavi), gradyan, renkli gölge, pas tonu (70 bölgesi).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 56px (mobil 32px) | 400 | 1.02 | -0.02em |
| H2 | Archivo Black | 30px | 400 | 1.12 | -0.01em |
| H3 | Archivo Black | 20px | 400 | 1.12 | -0.01em |
| Gövde | Inter | 16px | 400 | 1.6 | 0 |
| Etiket / mono | Space Mono | 11px | 400 | 1.4 | 0.12em |

- Ölçek oranı: 1.35 — 6 basamak: 11 · 12.5 · 16 · 20 · 30 · 56.
- Ölçü: 66ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":500,"display":400}; yasak: 700/900 ağırlık, 300 ince ağırlık, italik, gövdede majüskül, gövdede mono, 16px altı gövde, iki satırlı majüskül başlık.
- Ölçek oranı 1.35; kullanılan 6 basamak: 11 · 12.5 · 16 · 20 · 30 · 56.
- `h1 { font-size: clamp(32px, 5vw, 56px) }`; iki satırdan uzun majüskül başlık yasak.
- Ağırlık: Archivo Black 400 (kendi kalınlığı), Inter 400/500; 700 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 40px |
| Container genişliği | 1320px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 104px (mobil 64px) |
| Kart içi | 28px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Kütle 8/12, künye 4/12; ekran başına 1 asimetrik blok ve 1 kalıp izi. |

- Asimetri: kütle bloğu 8/12, künye 4/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde 40px boşluk 64px'e çıkar.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 0px · `--radius-lg` 0px. Radius 0px her yerde; tek istisna avatar 50%. Radius ve kenarlık birlikte yasak — kütle yalnız tonla ayrılır.
- Derinlik nereden gelir: Gölge hiç yok; derinlik ton kademesi ve kalıp izinden gelir. Hiçbir katman gölgeyle yükselmez.
- Kenarlık formülü: yok — `border: 0`; ayrım ton ve boşlukla.
- Derinlik kaynağı: ton kademesi + kalıp izi; gölge `none`, blur 0.
- Radius: `--radius` 0px, `--radius-lg` 0px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 52px | 16px 26px | 0px | 12.5px/400 mono, .12em uppercase | var(--accent) / var(--accent-ink) | ton bir kademe koyulaşır, 140ms · ton iki kademe · outline 3px var(--accent), offset 3px · opacity .4 · ton %60 → %100, tek atım |
| Buton (ikincil) | 52px | 16px 26px | 0px | 12.5px/400 mono, .12em uppercase | var(--surface-2) / var(--ink) | bg var(--surface) |
| Input | 52px | 14px 16px | 0px | 16px/400 body | var(--surface) + undefined | outline 3px var(--accent), offset 0 · bg var(--surface-2) · outline 3px var(--accent) · opacity .5 |
| Kart | — | 28px | 0px | 16px Inter | var(--surface) | bg var(--surface-2) |
| Chip / badge | 26px | 4px 10px | 0px | 11px/400 mono, .12em uppercase | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 72px | 0 32px | — | 11px/400 mono, .12em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 56px | 0 16px | 0 | 16px/400 body + 24px mono rakam | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 32px | 0px | 20px Archivo Black | none | rgba(20,22,26,.55) |
| Toast | 44px | 12px 16px | 0px | 11px/400 mono uppercase | var(--accent) / var(--accent-ink) | opacity 0→1, 280ms |
| Grafik paleti | — | — | — | 0 (dolu alan) | 2 (ink, ink-faint); yok | 11px mono .12em |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` — kenarlık olmadığı için tek görünür sınır.
- Dokunma hedefi: 52px buton; rakam bandı hücresi 64px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, kare uç, 24px ızgara; ikon dolgusuz |
| Fotoğraf | Beton yüzey/doku fotoğrafı, tek yönlü ışık, alan ≤%50; renkli filtre yok |
| İllüstrasyon | Yok — kütle ve tipografi yeter |
| Doku | Kalıp izi 1px/14px %3 yalnız hero; başka doku yok |
| Logo alanı | Sol üst 24px, Archivo Black 20px majüskül −0.02em |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 56px majüskül başlık + 8/12 kütle bloğu (0 radius, 0 kenar) + kalıp izi | `shots/01-landing.png` |
| Dashboard | orta | Rakam bandı 64px hücre, ton ayrımı, mono değer | `shots/02-dashboard.png` |
| Form | düşük | 52px input, 0 radius, yalnız alt ton farkı | — |
| Liste / tablo | orta | 56px satır, ton ayrımı (kenarlık yok) | — |
| Boş durum | orta | Tek cümle + büyük harf etiket + CTA | — |
| Onboarding | orta | Üç adım, her adımda tek kütle bloğu | — |
| Pricing | orta | Üç kütle bloğu, kenarlık yok, ton farkı | — |
| Giriş / ödeme | çok düşük | Tek kolon 380px, keskin form, mono toplam | — |
| Modal | orta | 560px, 0 radius, yalnız ton + %55 backdrop | — |
| Bildirim / toast | orta | Alt sol, 44px, ochre zemin + accent-ink | — |
| Hata | düşük | Majüskül "HATA" + tek cümle + CTA | — |
| Profil / ayar | orta | Künye 4/12 + form 8/12, ton ayrımı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `cubic-bezier(.5,.02,.3,1)` | ton bir kademe koyulaşır (kayma yok) |
| Giriş (enter) | 950ms | `cubic-bezier(.5,.02,.3,1)` | `opacity` + 32px `translateY`, stagger 80ms |
| Scroll reveal | 1050ms | aynı eğri | `top 76%` tetikleyici, `opacity` + 28px `translateY`, `once: true` |
| Pin / scrub | — | — | tek pin: scrub 1.15, +130%; mobilde kapalı |
| Hover | 340ms | aynı eğri | `transform: scale(1.01)` |
| Ödül / vurgu | 460ms | `cubic-bezier(.5,.02,.3,1)` | rakam bandı 0→1 opacity (tek atım) |

- Süre bütçesi: enter 950ms ≤ 1200ms · scroll 1050ms ≤ 1200ms · stagger 80ms.
- Tek pin sahnesi (kütle, scrub 1.15, +130%); sayfada ikinci scrub yok, mobilde statik.
- Giriş 950ms: kütle "oturur" gibi; 1200ms bütçesinin altında kalır.
- `prefers-reduced-motion`: süreler 0.01ms, pin kapalı, kalıp izi statik.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#dedcd6` | `#1b1c1d` |
| `--surface` | `#eae8e3` | `#202223` |
| `--ink` | `#14161a` | `#e8e7e3` |
| `--accent` | `#7a5a17` | `#d9b463` |
| `--line` | `rgba(20,22,26,.22)` | `rgba(232,231,227,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 13.79:1 · `accent-ink / accent` = 9.29:1.
- Koyu modda beton antrasite (`#1b1c1d`) döner; ochre açık kum tonuna (`#d9b463`) çekilir.
- Kalıp izi koyuda %2'ye iner; kenarlık yine yok.
- Rakam bandı koyuda `--surface-2` yerine `--surface` tonuna alınır.

## Zorunlu kurallar

- Archivo Black 56px/1.02/−0.02em majüskül başlık (mobil 32px); gövde Inter 16px/1.6/66ch
- Hiçbir bileşende kenarlık yok (border: 0); ayrım ton ve 40px boşluk
- Radius 0px; tek istisna avatar 50%
- Gölge yok; kalıp izi 1px/14px %3 yalnız hero
- Tek vurgu ochre #7a5a17, ekranın ≤%6'sı, accent üstü daima --accent-ink
- Rakam bandı Space Mono 24px, üç hücre, 64px yükseklik
- Bölüm arası 104px (mobil 64px), kart içi 28px
- Tek pin sahnesi: scrub 1.15, +130%, mobilde kapalı

## Yasaklar

- Kenarlık, gölge, blur, cam yüzey, 1px+ hairline
- Radius (0 dışında), yuvarlak buton, 12px üstü köşe
- İkinci renk, pas kırmızısı, gradyan, renkli ışık
- Elle çizilmiş illüstrasyon, emoji, sticker
- İki scrub, mobilde pin açık, marquee, sürekli döngü
- 16px altı gövde, italik gövde, gövdede majüskül
- Saf siyah metin (#000), saf beyaz zemin (#fff)

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız künye/etiket satırında dekoratif.
- `--ink-faint` etkileşimli metin değil; rakam ve başlık daima `--ink`.
- Hareket hassasiyeti: 0.95s giriş + pin; reduced-motion'da statik poster.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: kenarlık olmadığı için 3px halka + 3px offset zorunlu; betonda 6.4:1.

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
| Bloklar "kutu" gibi | Kenarlık veya gölge eklenmiş | Border 0, gölge 0; ton + 40px boşluk |
| Sayfa "70-slavic" gibi | 3px kenar/pas kırmızısı kullanılmış | Kenar yok, aksan ochre |
| Başlık taşıyor | Majüskül iki satırı geçmiş | clamp + max-width 18ch |

## Komşu stiller

- **Uyumlu:** `marble-vein` — taş/kütle dili ortak; damar ve parlaklık kullanılmaz.
- **Uyumlu:** `scandinavian-dark` — mat nötr yüzey örtüşür.
- **Yasak:** `neo-brutalism` — kalın kenar ve blok gölge kütle dilini yıkar.
- **Yasak:** `glassmorphism` — cam/blur beton fiziğiyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Archivo+Black | Archivo Black — Google Fonts — majüskül kütle başlığı, −0.02em |
| https://fonts.google.com/specimen/Inter | Inter — Google Fonts — gövde 16px/1.6 |
| https://fonts.google.com/specimen/Space+Mono | Space Mono — Google Fonts — rakam bandı 24px |
| https://www.archdaily.com/tag/tadao-ando | Tadao Ando — concrete — kalıp izi ve kütle dili |
| https://en.wikipedia.org/wiki/Brutalist_architecture | Wikipedia — Brutalist architecture — malzeme dürüstlüğü ve monolit form |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Concrete Monolith (styles/134-concrete-monolith/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="concrete-monolith"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Archivo Black majüskül başlıkta, --font-body Inter gövdede, --font-mono rakam bandında.
Yüzey: kenarlık 0, gölge 0, radius 0; ayrım yalnız ton kademesi (bg/surface/surface-2) ve 40px boşluk.
Izgara: 12 kolon, gutter 40px, kütle 8/12, bölüm ritmi 104px.
Hareket: enter 0.95s cubic-bezier(.5,.02,.3,1) 32px / stagger 0.08; scroll top 76% 1.05s 28px;
         pin scrub 1.15 +130% (mobil kapalı); hover 340ms scale 1.01. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (kenarlık, gölge, radius, ikinci renk).
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
[data-style="concrete-monolith"] { --bg: #dedcd6; --bg-2: #d2cfc8; --surface: #eae8e3; --surface-2: #c6c3bc; --ink: #14161a; --ink-soft: #3f4448; --ink-faint: #6b7074; --accent: #7a5a17; --accent-ink: #f9f5e9; --line: rgba(20,22,26,.22); --radius: 0px; --radius-lg: 0px; --shadow: none; --shadow-hard: none; --font-display: "Archivo Black", Impact, system-ui, sans-serif; --font-body: "Inter", system-ui, sans-serif; --font-mono: "Space Mono", ui-monospace, monospace; --tracking: -0.02em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="concrete-monolith"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 4.64:1 · `ink-soft / surface-2` 5.60:1 · `accent-ink / accent` 5.83:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: beton kalıp: ek yerleri + bağlantı delikleri.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.95s` / `scroll 1.05s` (ikisi de ≤ 1.2 s).
