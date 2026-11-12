# 116 · Kids Playground

> **Bir cümlede:** Çocuk oyun alanı mantığı: 18px yuvarlak köşe, kalın tek gölge, 4 renkli ama %12 sınırlı bloklar ve 0.46s zıplayan giriş — güvenli, cesur, dokunulabilir.

| | |
|---|---|
| **Hissiyat** | neşeli · güvenli · yuvarlak · dokunulabilir |
| **En iyi** | Çocuk eğitim uygulaması, oyun kütüphanesi, aile aboneliği, etkinlik takvimi |
| **Kaçın** | Finansal tablo, klinik form, kurumsal yönetim paneli |
| **Zorluk** | orta · **Erişilebilirlik** | orta |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="kids-playground"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Kids Playground arayüzü bir oyun alanı gibi kurar: 18px radius'lu büyük bloklar, 60px dokunma hedefi, Baloo 2 56px başlık ve Nunito 17px/1.65 gövde. Kazanılan şey çocuğun tek bakışta "dokunabilirim" demesi; feda edilen şey bilgi yoğunluğu — ekran başına en fazla 3 seçenek.

Renk dört blokla sınırlıdır (mavi, yeşil, sarı, mercan) ve her blok ekranın %12'sini geçmez; metin daima `--ink` veya `--accent-ink`. Derinlik tek kalın gölgeden (`0 6px 0`) gelir, blur yoktur — gölge "kaldırılabilir blok" hissi verir.

Hareket oyunbazdır ama abartısızdır: 0.46s `back.out(1.7)` giriş, 22px kayma, 70ms stagger; hover 180ms ve 1.04 ölçek. Zıplama hissi 1.7 overshoot'ta durur, 2.0 üstü yasak.

### Ne değildir

- `claymorphism` değildir: clay yumuşak çift gölge ve pastel geçişlerle çalışır; burada tek kalın gölge, 4 parlak blok ve 70ms stagger vardır.
- `dopamine-ui` değildir: dopamine konfeti ve ödül animasyonuyla çalışır; burada ekran başına 1 ödül ve sade zıplama var.
- `memphis` değildir: memphis dekoratif şekiller ve 100ms basma ile çalışır; burada dekor yok, 60px hedef ve 0.46s giriş var.
- `kids-playground` bir "çocukça font" şablonu değildir: Baloo 2 yalnız başlıkta, gövde Nunito okunur puntoda kalır.

### Nereden gelir

Kökeni 1970'lerin oyun alanı tabelaları ve 2010'ların çocuk eğitim uygulamalarıdır (Duolingo Kids, Khan Academy Kids). Bugün aile abonelikleri ve oyun kütüphaneleri arttığı için geri döndü. Klişeye düşmemek için korunması gereken detay: 60px dokunma hedefi ve ekran başına 3 seçenek sınırı.

### 3 saniyede tanıma testi

1. Baloo 2 56px başlık, Nunito 17px/1.65 gövde; mono yalnız sayaçta.
2. 18px radius her blokta; 0 radius hiç yok.
3. Tek kalın gölge `0 6px 0` (blur 0); yumuşak gölge yok.
4. Dört blok rengi, her biri ≤%12; metin daima ink/accent-ink.
5. 60px dokunma hedefi ve 0.46s zıplayan giriş (overshoot 1.7).

## Görsel imza

- Display Baloo 2 700 56px / 1.06 (mobil 34px); gövde Nunito 17px / 1.65 / 54ch.
- Radius 18px blok, 14px buton; 24px üstü yasak.
- Kalın gölge `0 6px 0 var(--line)` buton ve kartta; blur 0, yayılan gölge yok.
- Blok renkleri: accent (mavi) + 3 yardımcı blok yalnız `--surface-2` tonuyla, alan ≤%12/blok.
- Dokunma hedefi 60px (mobil 56px); ikon 24px, 2.5px çizgi, yuvarlak uç.
- Sayaç ve skor mono 13px, tabular-nums; başka mono kullanımı yok.
- **Landing hero (QA):** üç blok kartı: 32px daire, kalın gölge, `12 yıldız` sayacı altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fdf7ec` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#ffffff` | kart / panel / modal | tam kanama blok |
| `--ink` | `#1e2a33` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#17607a` | oyun mavisi: birincil buton, aktif blok, sayaç | dekoratif arka plan, ikinci renk, gradyan durağı |
| `--line` | `rgba(30,42,51,.16)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 13.73:1 · `ink-soft / bg` = 6.69:1 · `accent-ink / accent` = 6.73:1 · `ink-faint / bg` = 3.33:1.
- Tek metin kuralı: gövde `--ink`, blok üstünde `--accent-ink`; üçüncü bir metin rengi yok.
- Yasak kombinasyon: neon doygunluk, gradyan blok, ikiden fazla parlak renk, siyah zemin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 56px (mobil 34px) | 700 | 1.06 | 0 |
| H2 | Baloo 2 | 34px | 700 | 1.2 | 0 |
| H3 | Baloo 2 | 22px | 700 | 1.2 | 0 |
| Gövde | Nunito | 17px | 400 | 1.65 | 0 |
| Etiket / mono | Space Mono | 13px | 400 | 1.4 | 0.06em |

- Ölçek oranı: 1.4 — 6 basamak: 13 · 15 · 17 · 22 · 34 · 56.
- Ölçü: 54ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":700,"display":700}; yasak: 300 ince ağırlık, gövdede büyük harf, gövdede mono, 15px altı gövde, 54ch üstü ölçü, serif display, italik gövde, ikiden fazla display ağırlığı.
- Ölçek oranı 1.4; kullanılan 6 basamak: 13 · 15 · 17 · 22 · 34 · 56.
- `h1 { font-size: clamp(34px, 5.6vw, 56px) }`; 56px üstü başlık yok (çocuk ekranı 3 satırı geçmez).
- Ağırlık: Baloo 2 700 başlık, Nunito 400/700 gövde; 300 yasak, 900 yalnız sayı bloğunda.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 80px (mobil 52px) |
| Kart içi | 24px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Oyun kartı 2 kolon, diğerleri 1; ekran başına 1 asimetrik blok. |

- Asimetri: ekran başına 1 blok simetriden çıkar (oyun kartı 2 kolon, diğerleri 1).
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde tam genişlik "oyna" bandı girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | 0 6px 0 var(--line) | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | 0 6px 0 var(--line) | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 14px · `--radius-lg` 18px. Radius 14px (buton/input/chip) ve 18px (kart/blok); 24px üstü ve 0 radius yasak; avatar 50%; tablo satırı 0 (blok içinde).
- Derinlik nereden gelir: Derinlik tek kalın gölgeden gelir (blur 0, yayılım yok); yumuşak gölge yalnız modalda 0 12px 24px %10.
- Kenarlık: 0 (gölge yeterli) veya 2px `--line` seçilirse gölge kapanır; ikisi birden yok.
- Derinlik kaynağı: tek kalın gölge (blur 0) + radius; yumuşak/yayılan gölge yasak.
- Radius: `--radius` 14px (buton/input), `--radius-lg` 18px (kart/blok).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 60px | 16px 28px | 14px | 17px/700 body | var(--accent) / var(--accent-ink) | translateY(-2px), 180ms · translateY(2px), gölge 2px · outline 3px var(--accent), offset 3px · opacity .45, gölge yok · 3 nokta zıplaması (tek tur) |
| Buton (ikincil) | 60px | 16px 28px | 14px | 17px/700 body | var(--surface) / var(--ink) | kenar 2px var(--accent) · opacity .45 |
| Input | 60px | 16px 18px | 14px | 17px/400 body | var(--surface) + 2px solid var(--line) | outline 3px var(--accent), offset 2px · bg var(--surface-2) · kenar 2px var(--accent) + 15px mesaj · opacity .5 |
| Kart | — | 24px | 18px | 17px Nunito | var(--surface) | translateY(-3px) |
| Chip / badge | 32px | 6px 12px | 14px | 13px/700 body | var(--surface-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 72px | 0 24px | — | 15px/700 body | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 56px | 0 16px | 0 | 17px/400 body | transparent | bg var(--surface-2) · bg var(--surface-2) |
| Modal / sheet | — | 28px | 18px | 22px Baloo 2 | 0 12px 24px rgba(30,42,51,.16) | rgba(30,42,51,.45) |
| Toast | 52px | 14px 18px | 14px | 15px/700 body | var(--accent) / var(--accent-ink) | translateY(-6px) + opacity, 220ms |
| Grafik paleti | — | — | — | 4px yuvarlak uç | 3 (accent, ink-soft, surface-2); yok | 13px body + renk noktası 12px |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` — çocuk ekranında kalın ve görünür.
- Dokunma hedefi: 60×60px; chip 32px görünür ama 60px alan kaplar.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2.5px çizgi, yuvarlak uç, 24px ızgara; ikon daima metinle birlikte |
| Fotoğraf | Yok — istisna: tek "gerçek oyun" fotoğrafı %40 alan, sıcak ton |
| İllüstrasyon | Basit vektör karakter: 3 renk, kalın çizgi, gölge yok; ekran başına 1 |
| Doku | Yok (`--grain: 0`); zemin düz |
| Logo alanı | Sol üst 24px, Baloo 2 700 22px; maskot yalnız landing'de |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık + 3 büyük oyun bloğu (18px radius, kalın gölge) | `shots/01-landing.png` |
| Dashboard | düşük | İlerleme: 3 blok + mono sayaç; ekran başına 3 seçenek | `shots/02-dashboard.png` |
| Form | düşük | 60px input, 14px radius, 2px kenar | — |
| Liste / tablo | düşük | 48px satır, 18px radius blok içinde | — |
| Boş durum | orta | Tek karakter illüstrasyonu + "henüz oyun yok" + birincil buton | — |
| Onboarding | yüksek | Üç adım, her adımda tek büyük buton | — |
| Pricing | orta | İki plan: çocuk / aile; kalın gölge, 18px radius | — |
| Giriş / ödeme | çok düşük | Büyük harf dostu e-posta input + tek buton | — |
| Modal | orta | 520px, 18px radius, kalın gölge, backdrop %45 | — |
| Bildirim / toast | orta | Alt orta, 52px, accent zemin + accent-ink | — |
| Hata | düşük | Tek cümle + büyük tekrar butonu | — |
| Profil / ayar | orta | Avatar 72px + 3 ayar bloğu | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 110ms | `back.out(1.7)` | `scale(.96)` + gölge 2px'e düşer |
| Giriş (enter) | 460ms | `back.out(1.7)` | `opacity` + 22px `translateY`, stagger 70ms |
| Scroll reveal | 520ms | aynı eğri | `top 86%` tetikleyici, `opacity` + 18px `translateY`, `once: true` |
| Pin / scrub | — | — | pin yok (sabit akış) |
| Hover | 180ms | aynı eğri | `transform: scale(1.04)` |
| Ödül / vurgu | 380ms | `back.out(1.7)` | yıldız sayacı 0→3 (tek atım) |

- Süre bütçesi: enter 460ms ≤ 1200ms · scroll 520ms ≤ 1200ms · stagger 70ms.
- Overshoot 1.7'de durur; 2.0 üstü zıplama "sallanan" his verir.
- Pin/parallax yok: oyun seçimi sabit; scrub'lı sahne kullanılmaz.
- `prefers-reduced-motion`: süreler 0.01ms, ölçek kapanır, yalnız opacity.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fdf7ec` | `#141c22` |
| `--surface` | `#ffffff` | `#18222a` |
| `--ink` | `#1e2a33` | `#f0f4f2` |
| `--accent` | `#17607a` | `#7fd3c8` |
| `--line` | `rgba(30,42,51,.16)` | `rgba(240,244,242,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 15.53:1 · `accent-ink / accent` = 10.58:1.
- Koyu modda krem zemin gece mavisine (`#141c22`) döner; accent açık turkuaza (`#7fd3c8`) çekilir.
- Kalın gölge rengi `--line` ile koyulaşır; blur 0 kalır.
- Zıplama hissi koyu modda da aynı; reduced-motion'da kapanır.

## Zorunlu kurallar

- Baloo 2 700 56px/1.06 başlık (mobil 34px); Nunito 17px/1.65/54ch gövde
- Radius 18px blok / 14px buton; 24px üstü yasak, 0 radius yasak
- Tek kalın gölge `0 6px 0` (blur 0) buton ve kartta; yumuşak gölge yasak
- Ekran başına en fazla 3 seçenek; her renk bloğu ≤%12, metin daima ink/accent-ink
- Dokunma hedefi 60px (mobil 56px), odak halkası 3px + 3px offset
- Bölüm arası 80px (mobil 52px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
- İkon 2.5px çizgi, yuvarlak uç, 24px ızgara; ikon daima metinle
- Sayaç/skor mono 13px tabular-nums; başka mono yok

## Yasaklar

- Fazla renk (ekran başına 3+ parlak blok), gradyan, neon doygunluk
- Yumuşak/yayılan gölge, blur, backdrop-filter, cam yüzey
- 0 radius keskin köşe veya 24px üstü aşırı yuvarlak
- Gövdede büyük harf, 15px altı punto, 54ch üstü ölçü
- Konfeti, sürekli döngü, marquee, parallax, pin/scrub
- Saf siyah zemin, koyu tema varsayılan, filter: invert()
- Karmaşık illüstrasyon (3 renkten fazla), emoji süs şeridi
- Overshoot 2.0 üstü zıplama, 0.9s üstü giriş

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız yardımcı metinde dekoratif.
- `--ink-faint` etkileşimli metin değil; buton etiketi daima `--accent-ink` (7:1 üstü).
- Hareket hassasiyeti: overshoot 1.7 ve 0.46s; reduced-motion'da tamamen susar.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: 3px halka + 3px offset ile kalın; krem ve koyu zeminde ≥4.5:1.

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
| Ekran "reklam panosu" gibi | Dörtten fazla parlak renk veya gradyan blok | Blok sayısını 3'e indir, gradyanı sil |
| Çocuk okumuyor | Gövde 15px altına inmiş veya ölçü 54ch üstü | 17px + 54ch + 1.65 satır aralığı |
| Bloklar "yapışmış" duruyor | Yumuşak gölge veya blur eklenmiş | Gölgeyi `0 6px 0` blur 0'a çevir |

## Komşu stiller

- **Uyumlu:** `claymorphism` — yuvarlak form dili örtüşür; oyun bölümünde garnitür olur.
- **Uyumlu:** `dopamine-ui` — aynı neşeli ton; ödül animasyonu tek atımla sınırlanır.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius çocuk ekranının dokunma dilini bozar.
- **Yasak:** `dark-academia` — koyu gravür ve serif, oyun alanı sıcaklığını yıkar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Baloo+2 | Baloo 2 — Google Fonts — yuvarlak display, 700 ağırlık, 56px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde okunurluğu, 17px/1.65 |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 — Target Size (Minimum) — 60px dokunma hedefi gerekçesi |
| https://www.nngroup.com/articles/children-websites-usability/ | Nielsen Norman — Children & interfaces — çocuk ekranında seçenek sayısı ve okunurluk |
| https://m3.material.io/styles/shape/overview | Material 3 — Shape — yuvarlak blok radius ölçeği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Kids Playground (styles/116-kids-playground/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="kids-playground"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Baloo 2 700 başlıkta, --font-body Nunito gövdede, --font-mono yalnız sayaçta.
Yüzey: 3 seviye (--bg / --surface / --surface-2); radius 14/18px; tek kalın gölge `0 6px 0`, blur 0.
Izgara: 12 kolon, gutter 24px, ekran başına 3 seçenek, bölüm ritmi 80px, dokunma hedefi 60px.
Hareket: enter 0.46s back.out(1.7) 22px / stagger 0.07; scroll top 86% 0.52s 18px once:true;
         hover 180ms scale 1.04; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (fazla renk, yumuşak gölge, blur, 0 radius).
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
[data-style="kids-playground"] { --bg: #fdf7ec; --bg-2: #f6eddd; --surface: #ffffff; --surface-2: #f4ecdf; --ink: #1e2a33; --ink-soft: #4b5a64; --ink-faint: #7c8a92; --accent: #17607a; --accent-ink: #f6fbfd; --line: rgba(30,42,51,.16); --radius: 14px; --radius-lg: 18px; --shadow: 0 6px 0 var(--line); --shadow-hard: 0 6px 0 var(--line); --font-display: "Baloo 2", "Nunito", system-ui, sans-serif; --font-body: "Nunito", system-ui, sans-serif; --font-mono: "Space Mono", ui-monospace, monospace; --tracking: 0; --blur: 0px; --grain: 0; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="kids-playground"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
