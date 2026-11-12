# 120 · Craft Handmade

> **Bir cümlede:** El yapımı zanaat: kraft kâğıt dokusu, Caveat 52px el yazısı başlık, 1px kesikli dikiş çizgisi ve 0.82s ağır giriş — her blok "elle yerleştirilmiş" gibi durur.

| | |
|---|---|
| **Hissiyat** | sıcak · el emeği · dokunulur · yavaş |
| **En iyi** | El yapımı ürün mağazası, atölye/kurs sayfası, butik marka hikâyesi, zanaat arşivi |
| **Kaçın** | Yoğun dashboard, hızlı ödeme akışı, kurumsal yönetim paneli |
| **Zorluk** | düşük · **Erişilebilirlik** | orta |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="craft-handmade"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `pill` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Craft Handmade bir tezgâh gibi kurulur: kraft kâğıt zemini (`#efe6d6`), Caveat 52px el yazısı başlık, Nunito 16.5px/1.72 gövde ve sol kenarda 1px kesikli dikiş çizgisi. Kazanılan şey el emeği hissi ve sıcaklık; feda edilen şey hız — ekran başına 1 ürün ve 1 hikâye.

Malzeme dili dokudan gelir: `--grain .04` kraft dokusu, 2px `--line` kesikli dikiş, 4px radius köşeler (keskin değil ama yuvarlak da değil). Gölge yoktur; derinlik kâğıt katmanı ve dikişten gelir.

Hareket ağır ve elle yapılmış gibidir: 0.82s `cubic-bezier(.4,.1,.3,1)` giriş, 26px kayma, 90ms stagger; scroll reveal 0.95s. **Tek pin** sahnesi: 3 adımlı üretim süreci sabitlenir (scrub 1.1, +120%), mobilde kapalı.

### Ne değildir

- `scrapbook` değildir: scrapbook kolaj ve rastgele rotasyonla çalışır; burada tek dikiş çizgisi ve 0 rotasyon var.
- `bohemian` değildir: bohemian desen ve sıcak renk karışımı kullanır; burada tek accent (taba) ve kraft zemin.
- `nordic-folk` değildir: nordic folk geometrik nakış desenleriyle çalışır; burada desen yok, doku var.
- `craft-handmade` bir "vintage filtre" değildir: grain %4'te durur, sepya fotoğraf overlay'i yok.

### Nereden gelir

Kökeni Anadolu ve Avrupa el sanatları tezgâhları, el dikimi defterler ve 2010'ların Etsy atölye estetiğidir. Bugün butik marka ve atölye sayfalarında geri döndü çünkü seri üretim yorgunluğu "kim yaptı" sorusunu doğurdu. Klişeye düşmemek için korunması gereken detay: gerçek 1px kesikli dikiş ve %4'ü geçmeyen grain.

### 3 saniyede tanıma testi

1. Caveat 52px el yazısı başlık; gövde Nunito 16.5px/1.72.
2. Sol kenarda 1px kesikli dikiş çizgisi, ekran başına 1.
3. Kraft zemin `#efe6d6` + grain %4; saf beyaz yok.
4. Tek accent taba `#7a4b2a`; ikinci sıcak renk yok.
5. 0.82s ağır giriş, 300ms hover — hız hissi hiç yok.

## Görsel imza

- Caveat 700 52px / 1.08 başlık (mobil 32px); gövde Nunito 16.5px / 1.72 / 48ch.
- Dikiş çizgisi: sol kenarda 2px `dashed var(--line)`, 16px içeride, ekran başına 1 (mobilde 1px).
- Kraft dokusu: `--grain .04` overlay + 1px/7px yatay kâğıt çizgisi %3.
- Ürün kartı: 4px radius, 1px `--line` kenar, üstte 2px taba şerit (etiket), gölge yok.
- Fiyat/ölçü: IBM Plex Mono 12.5px, etiketler uppercase .14em.
- Tek pin sahnesi: 3 adım (kes → dik → paketle), scrub 1.1, +120%, mobilde statik.
- **Landing hero (QA):** el işi defter: kesikli dikiş kenarı, dashed satırlar, `no. 014` parti altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#efe6d6` | sayfa zemini | kart yüzeyi olarak |
| `--surface` | `#f9f3e7` | kart / panel / modal | tam kanama blok |
| `--ink` | `#2a231a` | gövde ve başlık metni | dekoratif arka plan |
| `--accent` | `#7a4b2a` | taba: etiket şeridi, birincil buton, fiyat vurgusu | gövde metni, ikinci sıcak renk, fotoğraf overlay |
| `--line` | `rgba(42,35,26,.20)` | 1px hairline ayırıcı | 2px+ kalın kural (istisnalar metinde) |

- Ölçülen kontrast: `ink / bg` = 12.53:1 · `ink-soft / bg` = 6.77:1 · `accent-ink / accent` = 6.75:1 · `ink-faint / bg` = 3.40:1.
- Tek vurgu kuralı: taba yalnız etiket şeridi, birincil buton ve fiyat vurgusunda; ekranın ≤%7'si.
- Yasak kombinasyon: sepya filtre, iki sıcak renk, gradyan, parlak metalik.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Caveat | 52px (mobil 32px) | 700 | 1.08 | 0.01em |
| H2 | Caveat | 32px | 700 | 1.24 | 0 |
| H3 | Caveat | 20px | 700 | 1.24 | 0 |
| Gövde | Nunito | 16.5px | 400 | 1.72 | 0 |
| Etiket / mono | IBM Plex Mono | 12.5px | 400 | 1.4 | 0.14em |

- Ölçek oranı: 1.35 — 6 basamak: 12.5 · 13 · 16.5 · 20 · 32 · 52.
- Ölçü: 48ch (`max-width` ile sabitlenir).
- Ağırlık kuralı: {"body":400,"strong":700,"display":700}; yasak: 300 ince ağırlık, gövdede Caveat, gövdede büyük harf, italik display, 52px üstü el yazısı, 16.5px altı gövde.
- Ölçek oranı 1.35; kullanılan 6 basamak: 12.5 · 13 · 16.5 · 20 · 32 · 52.
- `h1 { font-size: clamp(32px, 4.8vw, 52px) }`; 52px üstü el yazısı okunmaz.
- Ağırlık: Caveat 700 başlık, Nunito 400/700 gövde; 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1080px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 96px (mobil 56px) |
| Kart içi | 24px |
| Breakpoint davranışı | sm 390 / md 768 / lg 1200; `md` altında kolonlar tek sütuna iner, `lg` üstünde container sabit |
| Asimetri | Ürün 7/12, hikâye 4/12; ekran başına 1 asimetrik blok ve 1 dikiş çizgisi. |

- Asimetri: ürün 7/12, hikâye 4/12; ekran başına 1 asimetrik blok.
- Bölüm ritmi: en fazla 2 blok aynı hizada; üçüncüde dikiş çizgisi girer.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | kart, panel, tablo kabı |
| Yüzen katman | `--surface` + `--shadow` | none | modal, açılır menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kalın kural yalnız metinde belirtilen istisnada.
- Radius: `--radius` 4px · `--radius-lg` 10px. Radius 4px (buton/input/chip) ve 10px (kart/modal); 12px üstü yasak; dikiş çizgisi düz (radius yok); avatar 50%.
- Derinlik nereden gelir: Gölge yok; derinlik kâğıt ton kademesi, %4 kraft dokusu ve 1px kesikli dikişten gelir. Yüzen modal bile 1px kenar ile ayrılır.
- Kenarlık: 1px `--line`; dikiş çizgisi 2px kesikli (yalnız sol kenar, ekran başına 1).
- Derinlik yok: gölge `none`; katman kâğıt tonu + doku + dikiş.
- Radius: `--radius` 4px (buton/input), `--radius-lg` 10px (kart/modal); 12px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 13px 22px | 4px | 15px/700 body, .02em | var(--accent) / var(--accent-ink) | translateY(-1px) + kenar 1px var(--ink) · translateY(1px) · outline 2px var(--accent), offset 3px · opacity .45 · etiket şeridi 2px dolar |
| Buton (ikincil) | 48px | 13px 22px | 4px | 15px/400 body | transparent / var(--ink) | kenar 1px var(--ink) |
| Input | 48px | 12px 14px | 4px | 16.5px/400 body | var(--surface) + 1px solid var(--line) | outline 2px var(--accent), offset 2px · bg var(--surface-2) · kenar 1px var(--accent) + 13px mesaj · opacity .5 |
| Kart | — | 24px | 10px | 16.5px Nunito | var(--surface) | kenar 1px var(--ink-soft) |
| Chip / badge | 26px | 4px 9px | 4px | 12.5px/400 mono, .14em uppercase | var(--bg-2) | bg var(--accent), color var(--accent-ink) |
| Nav | 64px | 0 28px | — | 13px/400 mono, .14em uppercase | transparent | color var(--accent) · color var(--ink-soft) |
| Tablo satırı | 52px | 0 12px | 0 | 16.5px/400 body + 12.5px mono fiyat | transparent | bg var(--bg-2) · bg var(--surface-2) |
| Modal / sheet | — | 28px | 10px | 20px Caveat | none | rgba(42,35,26,.45) |
| Toast | 44px | 12px 16px | 4px | 13px/400 body | var(--ink) / var(--bg) | translateY(6px) + opacity, 300ms |
| Grafik paleti | — | — | — | 2px | 2 (accent, ink-soft); 1px dashed var(--line) | 12.5px mono .14em |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — kraft zeminde 7.2:1.
- Dokunma hedefi: ürün kartı tümüyle tıklanabilir; etiket chip'i 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 20px ızgara; ikon el çizimi hissi (hafif 1° eğim) |
| Fotoğraf | Ürün fotoğrafı: doğal ışık, kumaş/ahşap doku, alan ≤%45; sepya filtre yok |
| İllüstrasyon | Yok — ürün fotoğrafı ve el yazısı yeterli |
| Doku | Kraft grain %4 (overlay, pointer-events none) + 1px/7px yatay kâğıt çizgisi %3 |
| Logo alanı | Sol üst 24px, Caveat 700 24px; sembol yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 52px el yazısı başlık + 1 ürün fotoğrafı + dikiş çizgisi | `shots/01-landing.png` |
| Dashboard | düşük | Ürün listesi: 3 kart, 1px kenar, gölge yok | `shots/02-dashboard.png` |
| Form | düşük | 48px input, 4px radius, 1px kenar | — |
| Liste / tablo | düşük | 52px satır, mono fiyat, 1px hairline | — |
| Boş durum | orta | "tezgâh boş" + tek cümle + ikincil buton | — |
| Onboarding | orta | Üç adım: kes → dik → paketle (pin sahnesi mobilde statik) | — |
| Pricing | orta | İki atölye paketi: birebir / grup; 10px radius kart | — |
| Giriş / ödeme | çok düşük | Tek kolon 400px, sade form, mono özet | — |
| Modal | orta | 480px, 10px radius, 1px kenar, gölge yok | — |
| Bildirim / toast | orta | Alt sol, 44px, ink zemin + bg metin | — |
| Hata | düşük | Tek cümle + dikiş çizgisi + tekrar butonu | — |
| Profil / ayar | orta | Atölye profili: 2 kolon, mono ölçüler | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 160ms | `cubic-bezier(.4,.1,.3,1)` | `translateY(1px)` + kenar tonu koyulaşır |
| Giriş (enter) | 820ms | `cubic-bezier(.4,.1,.3,1)` | `opacity` + 26px `translateY`, stagger 90ms |
| Scroll reveal | 950ms | aynı eğri | `top 79%` tetikleyici, `opacity` + 22px `translateY`, `once: true` |
| Pin / scrub | — | — | tek pin: scrub 1.1, +120%; mobilde kapalı |
| Hover | 300ms | aynı eğri | `transform: scale(1.02)` |
| Ödül / vurgu | 520ms | `cubic-bezier(.4,.1,.3,1)` | etiket şeridi genişliği 0→100% (tek atım) |

- Süre bütçesi: enter 820ms ≤ 1200ms · scroll 950ms ≤ 1200ms · stagger 90ms.
- Tek pin sahnesi (üretim adımları, scrub 1.1, +120%); sayfada ikinci scrub yok, mobilde statik.
- Giriş 820ms: sayfa "tezgâha konmuş" gibi ağır açılır; 950ms üstüne çıkmaz (bütçe).
- `prefers-reduced-motion`: süreler 0.01ms, pin kapalı, dikiş statik.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#efe6d6` | `#1a1610` |
| `--surface` | `#f9f3e7` | `#201b14` |
| `--ink` | `#2a231a` | `#f2e9d9` |
| `--accent` | `#7a4b2a` | `#d9a86a` |
| `--line` | `rgba(42,35,26,.20)` | `rgba(242,233,217,.16)` |

- Koyu modda ölçülen kontrast: `ink / bg` = 14.95:1 · `accent-ink / accent` = 8.61:1.
- Koyu modda kraft kâğıt gece kahvesine (`#1a1610`) döner; taba aksan açılır (`#d9a86a`).
- Kraft grain %4'ten %3'e iner; dikiş çizgisi aynı kesikli desende kalır.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar

- Caveat 700 52px/1.08 başlık (mobil 32px); gövde Nunito 16.5px/1.72/48ch
- Sol kenarda 2px dashed dikiş çizgisi, ekran başına 1 (mobilde 1px)
- Kraft grain %4 + 1px/7px yatay kâğıt çizgisi %3; ikinci doku yok
- Tek accent taba #7a4b2a, ekranın ≤%7'si, accent üstü daima --accent-ink
- Gölge yok; radius 4/10px; ayrım 1px hairline + doku
- Bölüm arası 96px (mobil 56px), kart içi 24px; ölçek 4·8·12·16·24·32·48·64
- Tek pin sahnesi: üretim adımları, scrub 1.1, +120%, mobilde statik
- Fiyat/ölçü IBM Plex Mono 12.5px; etiketler uppercase .14em

## Yasaklar

- Sepya/vintage fotoğraf filtreleri, gradyan, parlak metalik, iki sıcak renk
- Gölge, blur, cam yüzey; 12px üstü radius
- Kolaj, rastgele rotasyon, sticker patlaması, emoji süs
- İkinci scrub, pin'in mobilde açık bırakılması, marquee, sürekli döngü
- Gövdede el yazısı font (Caveat yalnız başlıkta), 16.5px altı gövde
- Saf beyaz zemin, saf siyah metin, filter: invert()

## Erişilebilirlik

- En düşük çift: `--ink-faint / --bg` — yalnız "elle dikildi" gibi künyede dekoratif.
- `--ink-faint` etkileşimli metin değil; fiyat ve ölçü daima `--ink` veya `--accent`.
- Hareket hassasiyeti: ağır giriş + pin; reduced-motion'da pin kapanır, reveal opacity'ye düşer.
- Şeffaf yüzey yok (`--blur: 0`).
- Odak görünürlüğü: kraft zeminde taba halka 7.2:1; koyu modda 8.4:1.

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
| Sayfa "vintage filtre" gibi | Grain %6 üstüne çıkmış veya sepya overlay var | Grain %4, filtre yok |
| El yapımı hissi kayboldu | Dikiş çizgisi yok, başlık sans olmuş | Sol kenar 2px dashed + Caveat başlık |
| Pin sırasında metin zıplıyor | İki ScrollTrigger veya scrub 1.4 üstü | Tek pin, scrub 1.1, mobilde kapalı |

## Komşu stiller

- **Uyumlu:** `scrapbook` — el yapımı ton ortak; kolaj ve rotasyon kullanılmaz.
- **Uyumlu:** `bohemian` — sıcak palet örtüşür; ikinci accent eklenmez.
- **Yasak:** `cyberpunk` — neon ve glitch, kraft kâğıt fiziğini yıkar.
- **Yasak:** `terminal-ui` — mono ızgara ve 0 radius el emeği hissini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Caveat | Caveat — Google Fonts — el yazısı başlık, 700 ağırlık, 52px |
| https://fonts.google.com/specimen/Nunito | Nunito — Google Fonts — gövde okunurluğu, 16.5px/1.72 |
| https://fonts.google.com/specimen/IBM+Plex+Mono | IBM Plex Mono — Google Fonts — fiyat/ölçü etiketi 12.5px |
| https://www.etsy.com/seller-handbook | Etsy — seller handbook — el yapımı ürün sunumu, malzeme anlatısı |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | GSAP — ScrollTrigger pin — tek pin sahnesi ve mobilde kapatma |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Craft Handmade (styles/120-craft-handmade/style.md, tokens.json)
Token: yalnız kit/tokens.css [data-style="craft-handmade"]; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Caveat 700 yalnız başlıkta; --font-body Nunito gövdede; --font-mono fiyat/ölçüde.
Yüzey: --bg / --surface / --surface-2; radius 4/10px; gölge yok; ayırım 1px hairline + %4 grain.
Izgara: 7/4 asimetri, gutter 24px, bölüm ritmi 96px, sol kenarda 1 dikiş çizgisi.
Hareket: enter 0.82s cubic-bezier(.4,.1,.3,1) 26px / stagger 0.09; scroll top 79% 0.95s 22px once:true;
         pin scrub 1.1 +120% (mobil kapalı); hover 300ms scale 1.02. reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sepya filtre, gölge, kolaj, ikinci scrub).
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
[data-style="craft-handmade"] { --bg: #efe6d6; --bg-2: #e5dac6; --surface: #f9f3e7; --surface-2: #e9dfcb; --ink: #2a231a; --ink-soft: #574c3d; --ink-faint: #857a68; --accent: #7a4b2a; --accent-ink: #fbf5ea; --line: rgba(42,35,26,.20); --radius: 4px; --radius-lg: 10px; --shadow: none; --shadow-hard: none; --font-display: "Caveat", "Kalam", cursive; --font-body: "Nunito", system-ui, sans-serif; --font-mono: "IBM Plex Mono", ui-monospace, monospace; --tracking: 0.01em; --blur: 0px; --grain: 0.04; }
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="craft-handmade"]` olarak durur (bu klasördeki `token-block.css` ile aynı); `## Koyu mod` tablosu tek kaynak özetidir.
