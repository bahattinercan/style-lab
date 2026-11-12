# 118 · Sticker Sheet

> **Bir cümlede:** Çıkartma sayfası mantığı: 6px beyaz die-cut halka, 2px ofset gölge ve 12px kayma — her blok sayfadan "soyulabiliyormuş" gibi durur.

| | |
|---|---|
| **Hissiyat** | oyuncu · toplanabilir · keskin · eğlenceli |
| **En iyi** | Dijital çıkartma paketi, sohbet uygulaması eklentisi, koleksiyon vitrini, genç marka lansmanı |
| **Kaçın** | Resmi doküman, kurumsal rapor, uzun okuma metni |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="sticker-sheet"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `index` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Sticker Sheet her bloğu bir çıkartma gibi ele alır: 6px `--surface` die-cut halka, 2px ofset gölge, 10–40px arası hafif rotasyon ve hover'da 8px kalkma. Kazanılan şey toplanabilirlik hissi; feda edilen şey hizalama titizliği — rotasyonla oynanır ama 40 dereceyi geçmez.

Tipografi çıkartma üstünde Nunito 700 15px başlık, 13px etiket; sayfa gövdesi Poppins 16.5px/1.6. Renk tek vurguda (ahududu `#b5174e`) toplanır, çıkartmaların kendi dolgusu `--surface-2` tonlarıyla sınırlıdır.

Hareket "soyulma" gibidir: 0.34s `back.out(2)` giriş, 12px kayma, 30ms stagger; hover 160ms ve 1.08 ölçek. Sayfa başına 1 kez toplu "yapıştırma" sekansı; sürekli sallanma yok.

### Ne değildir

- `dopamine-ui` değildir: dopamine ödül ve konfetiyle çalışır; burada die-cut halka ve 2px ofset gölge imzadır.
- `y2k` değildir: y2k parlak gradyan ve metalik parlaklıkla çalışır; burada düz renk + keskin halka var.
- `claymorphism` değildir: clay yumuşak çift gölge kullanır; burada gölge 2px ofset, blur 0.
- `sticker-sheet` bir "emoji seti" değildir: çıkartma içeriği daima tipografi veya tek renk vektör; foto kolaj yok.

### Nereden gelir

Kökeni 1980'lerin Panini albümleri ve 2010'ların dijital sticker (LINE, Apple Messages) ekonomisidir. Bugün mesajlaşma eklentileri ve genç marka lansmanlarında geri döndü çünkü koleksiyon mekaniği satın alma yaratıyor. Klişeye düşmemek için korunması gereken detay: 6px die-cut halkanın her blokta aynı kalması.

### 3 saniyede tanıma testi

1. Her blokta 6px `--surface` die-cut halka + 2px ofset gölge (blur 0).
2. Bloklar 10–40 derece arası rotasyonlu; hiza bilinçli bozulmuş.
3. Nunito 700 15px çıkartma başlığı; sayfa gövdesi Poppins 16.5px.
4. Tek vurgu ahududu; çıkartma dolguları yalnız surface-2 tonları.
5. Hover'da 8px kalkma + 1.08 ölçek; sürekli sallanma yok.

## Görsel imza

- Die-cut halka: 6px `--surface` border (mobil 4px), dışında 2px ofset gölge `2px 2px 0 rgba(...)`.
- Rotasyon: çıkartmalar −10° ile +40° arası; sayfa başına en fazla 6 çıkartma.
- Çıkartma içi: Nunito 700 15px başlık, 13px Poppins etiket, 1px iç hairline.
- Sayfa gövdesi Poppins 16.5px / 1.6 / 58ch; başlık Nunito 900 44px / 1.1.
- Koleksiyon sayacı: mono (Silkscreen) 12px, "12/24" biçiminde, sağ üstte.
- Kes-yeri işareti: 1px kesikli çizgi, sayfa başına 1, yalnız bölüm ayırıcı olarak.
- **Landing hero (QA):** üç die-cut çıkartma: ±4° rotasyon, 6px surface halka, 2px ofset gölge, `12/24` sayacı.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f6f2` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#ffffff` | kart / panel / modal | tam kanama blok |
| `--ink` | `#16160f` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#b5174e` | ahududu: birincil buton, aktif çıkartma, koleksiyon sayacı | gövde metni, ikinci renk, gradyan |
| `--line` | `rgba(22,22,15,.18)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 16.80:1 · `ink-soft / bg` = 8.28:1 · `accent-ink / accent` = 6.15:1 · `ink-faint / bg` = 4.13:1.
- Tek vurgu kuralı: ahududu yalnız birincil eylem, aktif çıkartma ve sayaçta; ekranın ≤%8'i.
- Yasak kombinasyon: gradyan çıkartma, neon, metalik parlaklık, üçüncü parlak renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Nunito | 44px (mobil 28px) | 900 | 1.1 | -0.01em |
| H2 | Nunito | 26px | 900 | 1.18 | 0 |
| H3 | Nunito | 20px | 900 | 1.18 | 0 |
| Gövde | Poppins | 16.5px | 400 | 1.6 | 0 |
| Etiket / mono | Silkscreen | 12px | 400 | 1.4 | 0.08em |

- Ölçek oranı: 1.3 — 6 basamak: 12 · 13 · 15 · 16.5 · 26 · 44.
- Ölçü: 58ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":700,"display":900}; yasak: 300 ince ağırlık, serif display, gövdede büyük harf, gövdede mono, 13px altı çıkartma metni, 58ch üstü ölçü, italik gövde.
- Ölçek oranı 1.3; kullanılan 6 basamak: 12 · 13 · 15 · 16.5 · 26 · 44.
- `h1 { font-size: clamp(28px, 4.4vw, 44px) }`; 44px üstü başlık yok (sayfa çıkartmalara yer bırakır).
- Ağırlık: Nunito 700/900 çıkartmada, Poppins 400/700 gövdede; 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 88px (mobil 56px) |
| Kart içi | 20px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Çıkartma ızgarası 4 kolon; her satırda en fazla 1 rotasyonlu blok. |

- Asimetri: çıkartma ızgarası 4 kolon; her satırda en fazla 1 çıkartma rotasyonlu.
- Bölüm ritmi: en fazla 2 sıra aynı hizada; üçüncüde kes-yeri çizgisi girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 2px 2px 0 rgba(22,22,15,.92) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 2px 2px 0 rgba(22,22,15,.92) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 10px · `--radius-lg` 16px. Radius 10px (çıkartma buton/input) ve 16px (panel/modal); 20px üstü yasak; avatar 50%; die-cut halka radius ile aynı eğriyi izler.
- Derinlik nereden gelir: Derinlik 6px die-cut halka + 2px ofset gölgeden gelir (blur 0); yumuşak gölge yalnız modalda 0 14px 28px %12.
- Kenarlık formülü: die-cut = 6px `--surface` border + 2px ofset gölge; iç hairline 1px opsiyonel.
- Derinlik kaynağı: ofset gölge (blur 0) + beyaz halka; yumuşak gölge yok.
- Radius: `--radius` 10px (çıkartma), `--radius-lg` 16px (panel); 20px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 52px | 14px 24px | 10px | 15px/700 body | var(--accent) / var(--accent-ink) | translateY(-8px) scale(1.04), 160ms · scale(.94) · outline 2px var(--accent), offset 4px · opacity .45, gölge yok · 3 çıkartma sırası dolar |
| Buton (ikincil) | 52px | 14px 24px | 10px | 15px/700 body | var(--surface) / var(--ink) | translateY(-4px) |
| Input | 48px | 12px 14px | 10px | 16.5px/400 body | var(--surface) + 2px solid var(--line) | outline 2px var(--accent), offset 3px · bg var(--surface-2) · kenar 2px var(--accent) + 13px mesaj · opacity .5 |
| Kart | — | 20px | 10px | 16.5px Poppins | var(--surface) | translateY(-8px) rotate(0deg) |
| Chip / badge | 28px | 4px 10px | 10px | 13px/400 body | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 64px | 0 24px | — | 15px/700 body | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 56px | 0 14px | 0 | 15px/400 body + 12px mono | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 24px | 16px | 20px Nunito | 0 14px 28px rgba(22,22,15,.12) | rgba(22,22,15,.45) |
| Toast | 48px | 12px 16px | 10px | 13px/700 body | var(--ink) / var(--bg) | translateY(-12px) + opacity, 200ms |
| Grafik paleti | — | — | — | 10px yuvarlak çubuk | 3 (accent, ink, surface-2); yok | 12px Silkscreen |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 4px` — halka ile çakışmaz.
- Dokunma hedefi: çıkartma 72×72px minimum; hover hedefi 44px, dokunmada tüm çıkartma.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, yuvarlak uç, 24px ızgara; ikon çıkartma içinde tek renk |
| Fotoğraf | Yok — istisna: tek "paket" mock fotoğrafı %30 alan |
| İllüstrasyon | Tek renk vektör çıkartma: 2px çizgi, dolgu surface-2; 3 renkten fazla yok |
| Doku | Yok (`--grain: 0`); zemin düz |
| Logo alanı | Sol üst 20px, Nunito 900 22px; çıkartma biçiminde değil |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 44px başlık + 4 çıkartma (6px halka, rotasyonlu) + tek CTA | `shots/01-landing.png` |
| Dashboard | orta | Koleksiyon: 4 kolon çıkartma ızgarası + mono sayaç | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 10px radius, 2px kenar | — |
| Liste / tablo | düşük | 56px satır, 1px hairline, mono kod | — |
| Boş durum | orta | Boş die-cut halka + "henüz çıkartma yok" | — |
| Onboarding | yüksek | Üç adım, her adımda 1 çıkartma ödülü | — |
| Pricing | orta | İki paket: 12'li / 24'lü; her paket çıkartma biçiminde | — |
| Giriş / ödeme | çok düşük | Tek kolon 380px, 10px radius, çıkartma yok | — |
| Modal | orta | 520px, 16px radius, die-cut halka; backdrop %45 | — |
| Bildirim / toast | orta | Sağ alt, 48px, ink zemin + bg metin | — |
| Hata | düşük | Tek cümle + çıkartma biçiminde "tekrar dene" | — |
| Profil / ayar | orta | Avatar 72px + koleksiyon özeti | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 100ms | `back.out(2)` | `scale(.94)` + gölge 0'a düşer (yapıştırma) |
| Giriş (enter) | 340ms | `back.out(2)` | `opacity` + 12px `translateY`, stagger 30ms |
| Scroll reveal | 400ms | aynı eğri | `top 88%` tetikleyici, `opacity` + 14px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 160ms | aynı eğri | `transform: scale(1.08)` |
| Ödül / vurgu | 340ms | `back.out(2)` | yeni çıkartma 0.34s içinde 12px yukarıdan yerleşir (tek atım) |

- Süre bütçesi: enter 340ms ≤ 1200ms · scroll 400ms ≤ 1200ms · stagger 30ms.
- Sürekli sallanma/dönme yasak; rotasyon statiktir, animasyonla değişmez.
- Pin/parallax yok: koleksiyon ızgarası sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, rotasyon statik kalır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f6f2` | `#121210` |
| `--surface` | `#ffffff` | `#171714` |
| `--ink` | `#16160f` | `#f4f3ea` |
| `--accent` | `#b5174e` | `#f472a0` |
| `--line` | `rgba(22,22,15,.18)` | `rgba(244,243,234,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 16.84:1 · `accent-ink / accent` = 7.09:1.
- Koyu modda kâğıt beyazı antrasite (`#121210`) döner; die-cut halka `--surface` ile koyulaşır.
- Ahududu vurgu açık pembeye (`#f472a0`) çekilir; ofset gölge mürekkep siyahına döner.
- Rotasyon ve halka kalınlığı koyu modda değişmez.

## Zorunlu kurallar

- Nunito 900 44px/1.1 başlık (mobil 28px); gövde Poppins 16.5px/1.6/58ch
- Her blokta 6px --surface die-cut halka + 2px ofset gölge (blur 0); mobilde 4px
- Rotasyon −10°…+40°, sayfa başına en fazla 6 çıkartma; rotasyon animasyonla değişmez
- Tek vurgu ahududu #b5174e, ekranın ≤%8'i, accent üstü daima --accent-ink
- Radius 10px çıkartma / 16px panel; 20px üstü yasak
- Çıkartma başlığı 15px Nunito 700, etiket 13px; gövde 16.5px
- Koleksiyon sayacı Silkscreen 12px "12/24" biçiminde
- Bölüm arası 88px (mobil 56px), kart içi 20px

## Yasaklar

- Gradyan çıkartma, metalik/parlak yüzey, neon, üçüncü parlak renk
- Yumuşak/blur gölge, backdrop-filter, cam yüzey
- Sürekli sallanma/dönme animasyonu, marquee, parallax, pin/scrub
- Altıdan fazla çıkartma, 40° üstü veya 10° altı rotasyon
- Foto kolaj, emoji seti, ikon dolu şerit
- 13px altı çıkartma metni, gövdede büyük harf, 58ch üstü ölçü
- 20px üstü radius, tam yuvarlak buton (avatar dışında)

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız çıkartma altı etikette dekoratif.
- `--ink-faint` etkileşimli metin değil; çıkartma başlığı daima `--ink`.
- Hareket hassasiyeti: back.out(2) ve 0.34s; reduced-motion'da susar, rotasyon statik.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: 4px offset'li halka die-cut kenarla karışmaz; krem/koyu zeminde ≥4.5:1.

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
| Çıkartmalar "kart" gibi | Die-cut halka veya ofset gölge eksik | 6px surface border + 2px ofset |
| Sayfa dağınık | Altıdan fazla rotasyonlu blok | Sayfa başına 6 çıkartma sınırı |
| Metin okunmuyor | Çıkartma içi 13px altına inmiş | Başlık 15px, etiket 13px sabit |

## Komşu stiller

- **Uyumlu:** `dopamine-ui` — aynı toplanabilirlik hissi; ödül tek atımla sınırlanır.
- **Uyumlu:** `y2k` — çıkartma kültürü ortak; gradyan ve metalik kullanılmaz.
- **Yasak:** `academic-paper` — kanıt ciddiyeti die-cut oyunculuğuyla çelişir.
- **Yasak:** `utility` — nötr ölçülülük çıkartma rotasyonunu anlamsızlaştırır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — çıkartma başlığı 700/900, 15px |
| https://fonts.google.com/specimen/Poppins | Poppins — Google Fonts — gövde 16.5px/1.6 |
| https://fonts.google.com/specimen/Silkscreen | Silkscreen — Google Fonts — koleksiyon sayacı 12px |
| https://support.apple.com/guide/messages/use-message-effects-icht33f0f8e0/mac | Apple Messages — stickers — çıkartma ölçek ve yerleşim mantığı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 — Target Size (Minimum) — 72px çıkartma hedefi gerekçesi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Sticker Sheet (styles/118-sticker-sheet/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="sticker-sheet"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Nunito 900 başlıkta, --font-body Poppins gövdede, --font-mono Silkscreen sayaçta.
Yüzey: die-cut 6px --surface halka + 2px ofset gölge; radius 10/16px; yumuşak gölge yok.
Izgara: 4 kolon çıkartma, gutter 24px, bölüm ritmi 88px, sayfa başına 6 çıkartma.
Hareket: enter 0.34s back.out(2) 12px / stagger 0.03; scroll top 88% 0.4s 14px once:true;
         hover 160ms scale 1.08; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradyan, blur, sürekli dönme, fazla çıkartma).
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
[data-style="sticker-sheet"] { --bg: #f7f6f2; --bg-2: #ecebe4; --surface: #ffffff; --surface-2: #f2f1ea; --ink: #16160f; --ink-soft: #4a4a40; --ink-faint: #78786c; --accent: #b5174e; --accent-ink: #fff5f7; --line: rgba(22,22,15,.18); --radius: 10px; --radius-lg: 16px; --shadow: 2px 2px 0 rgba(22,22,15,.92); --shadow-hard: 2px 2px 0 rgba(22,22,15,.92); --font-display: "Nunito", system-ui, sans-serif; --font-body: "Poppins", system-ui, sans-serif; --font-mono: "Silkscreen", "Courier Prime", monospace; --tracking: -0.01em; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="sticker-sheet"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
