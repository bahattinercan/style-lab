# 121 · Celebration Card

> **Bir cümleyle:** Tebrik kartı: 22px yuvarlak kâğıt, dalgalı die-cut kenar, 6px folyo bant ve tek seferlik konfeti saçılımı.

| | |
|---|---|
| **Hissiyat** | sıcak, sevinçli, özenli, "elle verilmiş" |
| **En iyi** | tebrik/kutlama akışı (sipariş sonrası, doğum günü, yıl dönümü), davetiye ve RSVP, hediye kartı satışı, ekip kutlaması duyurusu |
| **Kaçın** | finansal işlem onayı, kurumsal denetim paneli, klinik/teknik form, üzücü haber bildirimi |
| **Zorluk** | düşük–orta (sevimli olmak kolay, zevkli kalmak zor) · **Erişilebilirlik** | iyi (13.75:1 gövde, 5.60:1 accent üstü) |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="celebration-card"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Celebration Card, elden verilen bir tebrik kartının ekran karşılığıdır: **yuvarlak kâğıt** (22px `--radius-lg`), üst kenarda **9px dalgalı die-cut maskesi**, başlığın üstünde **6px folyo bant**, sağ yarıda **deterministik konfeti** (5 nokta) ve sol altta **12° eğik kurdele**. Tipografi kutlama dilidir: Playfair Display 700 başlık, Nunito gövde; mono (IBM Plex Mono) yalnız kart türü, tarih ve durum etiketlerinde.

Kazandığı şey: **an**. Ekran kutlamayı bir "durum" olarak değil bir **nesne** olarak sunar; tek accent (gül kurusu `#bd1f5c`) ve iki dekoratif öğe yeterlidir. Feda ettiği şey: **ölçek** — bu dil 40 satırlık tabloya, yoğun forma veya operasyon paneline taşınmaz; orada stil yalnız radius ve serif başlıkla hatırlatılır, konfeti/kurdele kapatılır.

### Ne değildir
- **Dopamine UI (18) değildir.** Dopamine doygun bloklar, mikro ödül ve 3 px radius ile "hızlı haz" kurar; burada kâğıt dokusu, serif başlık, 22px radius ve **tek seferlik** (döngüsüz) dekor var.
- **Memphis (16) değildir.** Memphis zikzak/konfeti desenini **her yüzeye** yayar; burada dekor iki bölgeye (sağ yarı + sol alt kurdele) sınırlı, gövde metni temiz.
- **Scrapbook (31) değildir.** Scrapbook katman/bant/polaroid ile kolaj kurar; burada **tek düzlem** var, döndürme yok, katman gölgesi yok.
- **Aurora UI (12) değildir.** Aurora gradient bulut ve koyu zeminle atmosfer kurar; burada zemin açık kâğıt, gradient yalnız accent şeritte ve **düz** renk.
- **"Konfeti + yuvarlak buton" değildir.** Die-cut maskesi, folyo bant ve serif/kurdele dengesi olmadan bu stil sıradan bir indirim sayfasıdır.

### Nereden gelir
Tebrik kartı 19. yy'da taş baskıyla yaygınlaştı, 20. yy'da **die-cut** (özel bıçakla kesim), **folyo yaldız** ve kurdele gibi zanaat katmanları eklendi: değer, baskı tekniğinden geliyordu. Dijitalde bu dil iki yerde geri döndü: (1) e-ticaret sonrası kutlama akışları, (2) dijital davetiye/kart ürünleri. Nedeni ölçülebilir: tek accent + sınırlı dekor, küçük ekranda bile "özel gün" sinyali taşır.

Klişeye düşmemesi için korunması gereken detay: **dekorun bütçesi**. Konfeti sayısını artırmak, ikinci bir sıcak renk eklemek veya animasyonu döngüye almak stili "indirim broşürü"ne çevirir.

### 3 saniyede tanıma testi
1. Kart **22px yuvarlak** mı ve üst kenarı **dalgalı** mı (die-cut maskesi)?
2. Başlığın üstünde **6px gül kurusu bant** var mı; ekranda ikinci bant yok mu?
3. Sağ yarıda **5 noktalı konfeti saçılımı**, sol altta **12° eğik kurdele** var mı (döngü yok)?
4. Başlık **serif ve kalın** (Playfair 700), gövde **yuvarlak sans** (Nunito) mı?
5. Buton **pill** (999px) mi, kart gölgesi tek katman mı, accent ekranın ≤ %12'sinde mi?

## Görsel imza
1. **Die-cut kenar:** kart üst kenarında `mask-image: radial-gradient(circle at 50% 0, transparent 0 9px, …)`; görsel ve modal da aynı maskeyi taşır.
2. **Folyo bant:** H1 üstünde `6px solid var(--accent)`, 18px padding-top; tek bant, tek renk.
3. **Konfeti:** 5 sabit nokta (3/2/4/2.5/2px), 180×140px tekrar, yalnız sağ üst %46×52 alan, opacity .55.
4. **Kurdele:** sol altta 46vw × 12px accent şerit, `rotate(-12deg)`, opacity .9; mobilde 70vw × 8px.
5. **Pill dil:** buton 999px radius, 46px yükseklik; chip 999px — köşe yuvarlaması kartla uyumlu.
6. **İmza satırı:** kart alt metni 1px accent alt çizgi + mono 11px isim/tarih.
7. **Tek gölge:** `0 6px 18px rgba(52,28,42,.10)`; yığın efekti iki karttan fazla kullanılmaz, gölge katlanmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fbeee8` | Sayfa zemini (pudra) | Kart içi |
| `--bg-2` | `#f5e2da` | Bölüm şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#fffaf7` | Kart, modal, form alanı | Sayfa zemini |
| `--surface-2` | `#f2ded4` | Chip, ikincil buton hover | Metin arkası |
| `--ink` | `#341c2a` | Başlık, gövde (mürdüm siyahı) | Accent zemin üstü |
| `--ink-soft` | `#6b4a5b` | Lede, ikincil metin | 10px altı etiket |
| `--ink-faint` | `#8f6f7f` | Dekoratif etiket, tarih | Etkileşimli metin |
| `--accent` | `#bd1f5c` | Folyo bant, konfeti, kurdele, birincil buton | Gövde metni |
| `--accent-ink` | `#fff5f9` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(52,28,42,.16)` | Kart kenarı, tablo çizgisi | Dekoratif bant |

- Ölçülen kontrast: `ink / bg` = **13.75:1** · `ink-soft / bg` = **6.71:1** · `accent-ink / accent` = **5.60:1** · `ink-faint / bg` = **3.90:1** (yalnız dekoratif).
- Tek vurgu kuralı: gül kurusu accent ekranın **≤ %12**'si (bandın en cömert stili; kutlama rengi taşıyıcıdır).
- Yasak kombinasyon: accent zemin + `--ink-soft`; `--ink-faint` + `--surface-2` (3.2:1); ikinci sıcak renk (sarı, turuncu).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 52px (mobil 34px) | 700 | 1.02 | -0.01em |
| H2 | Playfair Display | 30px | 700 | 1.1 | 0 |
| H3 | Playfair Display | 20px | 700 | 1.28 | 0 |
| Gövde | Nunito | 16px | 400 | 1.7 | 0 |
| Lede | Nunito | 16px | 400 | 1.7 | 0 (52ch) |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.4 | 0.14em |

- Ölçek oranı ≈ 1.6 (16 → 30 → 52); basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(34px, 4.4vw, 52px) }`.
- Gövde metni maksimum satır uzunluğu: **52ch** (kart mesajı kısa okunur; uzun metin başka stile).
- Ağırlık kuralı: display yalnız 700 (Playfair 900 yok, sahte kalın yasak), gövde 400/700. Gövdede 700 yalnız vurgu kelimesinde.
- Mono etiketler 11px ve uppercase serbest; tarih/kart no daima mono (`18.05.2026`, `No. 0042`).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (kart 7, mesaj/eylem 5) |
| Gutter | 24px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında tek kolon, dekoratif alan %70 genişliğe çıkar |

- Asimetri kuralı: kart solda, mesaj/eylem sağda; dekor (konfeti + kurdele) yalnız sağ yarıda. Ekran başına 1 konfeti grubu, 1 kurdele.
- Bölüm ritmi: art arda en fazla **2** kart; üçüncüde 24px boşluk ve bölüm şeridi.
- Bölüm dikey boşluk 88px (mobil 52px); kart padding 28px; kart arası 24px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, bölüm şeridi |
| Kart | `--surface` + `--shadow` | `0 6px 18px rgba(52,28,42,.10)` | Tebrik kartı, davetiye, KPI |
| Yüzen katman | `--surface` + `--shadow` | aynı (tek katman) | Modal, dropdown |

- Kenarlık formülü: `1px solid var(--line)`; kart üst kenarı maskeyle dalgalı, kenarlık maskeyi takip eder.
- Derinlik nereden gelir: **kâğıt + tek gölge**; iç gölge, çift gölge, blur yok.
- Radius: `--radius` 14px (input, küçük kart) · `--radius-lg` 22px (kart, modal, görsel). Pill (999px) yalnız buton, chip ve toast.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 13px 24px | 999px | 15px/700 Nunito | `--accent` / `--accent-ink`, gölge yok | hover %92 180ms · active translateY(1px) · focus 2px accent + 3px offset · disabled opacity .45 kesikli · loading 3 konfeti noktası 620ms |
| Buton (ikincil) | 46px | 13px 24px | 999px | 15px/700 Nunito | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı |
| Input | 48px | 0 16px | 14px | 16px/400 Nunito | `--surface` + 1px `--line` | focus 2px accent + 2px offset · error `--danger` + açıklama · disabled opacity .45 |
| Kart (tebrik) | — | 28px | 22px | H2 Playfair 30px | `--surface` + `--shadow` + die-cut maske | hover: gölge %15 koyulaşır, ölçek değişmez |
| Chip | 24px | 0 10px | 999px | 10px/400 mono, .1em | `--surface-2` + 1px `--line` | accent varyantı dolu (kutlama türü) |
| Nav | 60px | 0 40px | 0 | marka Playfair 20px + mono 11px | `--bg` + alt 1px `--line` | aktif: 3px accent sol çubuk; pasif `--ink-soft` |
| Tablo satırı | 44px | 12px 14px | 0 | isim Nunito 16px, durum/masa mono | alt 1px `--line` | hover `--surface-2` · seçili: sol 3px accent |
| Modal | — | 32px | 22px | H2 Playfair 30px | `--surface` + `--shadow` | 14px yukarıdan 0.52s, sonunda hafif taşma |
| Toast | 44px | 12px 20px | 999px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 8px accent nokta, 3600ms |
| Grafik paleti | — | — | — | eksen 11px mono | `--accent`, `--ink-soft`, `--ink-faint` | en fazla 3 seri; çubuk 8px radius, ızgara yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -4px.
- Dokunma hedefi: en az 46×46px; chip 24px görünür ama sarmalayıcıda 11px dikey padding alır.
- Konfeti ve kurdele `.sig` katmanında, `pointer-events: none`; metnin arkasına girmez.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px yuvarlak uçlu çizgi, 20px ızgara; kalp/yıldız dolu ikon tek renk serbest |
| Fotoğraf | Sıcak yumuşak ışık, konfeti/çiçek/hediye; alan ekranın ≤ %45'i, yuvarlak köşe 22px |
| İllüstrasyon | Yalnız konfeti noktaları ve kurdele (CSS); çizim karakteri yok |
| Doku | `--grain: .03` kâğıt |
| Logo alanı | Serif kelime markası (Playfair 700), 24px güvenli boşluk; monogram serbest |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 52px serif başlık + folyo bant + konfeti + kurdele | `shots/01-landing.png` |
| Dashboard | düşük | Kartlar yuvarlak ama dekor yok; mono tarih/durum | `shots/02-dashboard.png` |
| Form | düşük | 48px alanlar, 14px radius, 2px odak halkası | — |
| Liste / tablo | düşük | Konuk listesi: isim, masa no (mono), durum (chip) | — |
| Boş durum | orta | Tek kart + konfeti (3 nokta) + 1 buton | — |
| Onboarding | yüksek | 3 adım: kart seç → mesaj yaz → gönder | — |
| Pricing | orta | 3 yuvarlak kart; accent yalnız önerilen kartın bandında | — |
| Giriş / ödeme | çok düşük | Dekor sıfır; 22px kart + tek accent buton | — |
| Modal | orta | 22px radius, 32px padding, 0.52s yay | — |
| Bildirim / toast | orta | Pill koyu toast, 8px accent nokta, 3600ms | — |
| Hata | düşük | `--danger` kenar + açıklama; konfeti kullanılmaz | — |
| Profil / ayar | orta | Yuvarlak kartlar, mono tarih etiketleri | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `ease-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 180ms | `ease-out` | `opacity` |
| Giriş (enter) | **520ms** | `cubic-bezier(.34,1.42,.4,1)` | `opacity` + `translateY(14px)`, **stagger 60ms**; sonunda hafif taşma (yay) |
| Kaydırma (scroll) | **600ms** | `cubic-bezier(.34,1.42,.4,1)` | trigger **`top 85%`**, offsetY **16px**, `once: true` |
| Hover | **180ms** | `ease-out` | görsel ölçek **1.024** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 320ms | `cubic-bezier(.34,1.42,.4,1)` | konfeti noktaları 1 kez 12px düşer, durur |

- İmza ölçüsü: enter **0.52s / 14px / stagger 0.06** · scroll **0.6s / `top 85%` / 16px** · hover **180ms / 1.024** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; konfeti ve kurdele statik kalır (dekor kaybolmaz, hareket eder durur).
- Bu stile yasak hareket: parallax, konfeti döngüsü, 1.5s üstü kutlama animasyonu, renk döngüsü/flash.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fbeee8` | `#1a1116` |
| `--bg-2` | `#f5e2da` | `#211720` |
| `--surface` | `#fffaf7` | `#271b24` |
| `--surface-2` | `#f2ded4` | `#33232e` |
| `--ink` | `#341c2a` | `#f6e9ee` |
| `--ink-soft` | `#6b4a5b` | `#cbb2bd` |
| `--ink-faint` | `#8f6f7f` | `#9c8390` |
| `--accent` | `#bd1f5c` | `#ff7fae` |
| `--accent-ink` | `#fff5f9` | `#2a0d18` |
| `--line` | `rgba(52,28,42,.16)` | `rgba(246,233,238,.16)` |

- Koyu mod **gece kutlaması**: zemin mürdüm-siyah, kart `#271b24`; accent açılır (`#ff7fae`) çünkü gül kurusu koyu zeminde görünmez, `--accent-ink` koyuya döner.
- Gölge koyuda görünmez: kart ayrımını 1px `--line` taşır, `--shadow` aynı kalır (kart "yüzmez", tonla ayrılır).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **15.68:1** · `ink-soft/bg` = **9.37:1** · `accent-ink/accent` = **7.61:1** · `ink-faint/bg` = **5.34:1**.

## Zorunlu kurallar

1. **Kâğıt biçimi:** kart 22px radius + 9px die-cut maskesi; kenarlık maskeyi takip eder.
2. **Tek folyo bandı:** başlık üstünde 6px accent; ekranda ikinci bant yok.
3. **Dekor bütçesi:** 5 konfeti noktası (sağ yarı) + 1 kurdele (sol alt); fazlası yasak.
4. **Accent ≤ %12:** gül kurusu; gövde metni ve 14px altı yazı accent zemin üstünde olmaz.
5. **Tek gölge:** `0 6px 18px`; yığın 2 karttan fazla değil, gölge katlanmaz.
6. **Serif display + yuvarlak gövde:** Playfair 700 / Nunito; mono yalnız etiket, tarih, durum.

## Yasaklar

- İkinci accent (sarı, turuncu, mor) ve metalik gradient taklidi.
- Blur, cam yüzey, çok katmanlı gölge.
- 90px üstü dev başlık; arka plana serilmiş konfeti yağmuru.
- Döngüye alınmış kutlama animasyonu, flash/renk döngüsü.
- Gövdede uppercase, 900 ağırlık, dar tracking.
- Kutlamayı üzücü/nötr bağlamda kullanmak (işlem hatası, hesap silme onayı).

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.90:1** — yalnız dekoratif etiket ve tarih; etkileşimli metin, form etiketi, durum bilgisi olamaz.
- Konfeti/kurdele `aria-hidden="true"` ve `pointer-events: none`; bilgi taşımaz, ekran okuyucuya duyurulmaz.
- Hareket/parlama hassasiyeti: orta — taşan yay (overshoot) vestibüler duyarlılık için riskli olabilir; `prefers-reduced-motion` tüm süreleri 0.01ms'e çeker ve taşma kaybolur.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse buton hover'ı `--surface-2` fallback'ine düşer.
- Odak görünürlüğü: 2px accent + 3px offset (5.60:1); accent zeminli pill butonda `--accent-ink` halka, offset -4px.
- Kutlama dili görsel; mesaj **metinle** de verilir ("Siparişin tamamlandı") — renk/konfeti tek başına bilgi taşımaz.

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
| "İndirim broşürü" gibi | ikinci sıcak renk + gradient folyo | Tek accent, düz renk şerit |
| Sayfa yorgun görünüyor | konfeti her yere yayılmış | Dekoru sağ yarı + sol alt ile sınırla |
| Kart "plastik" | çift gölge + 30px radius | Tek gölge, 22px radius, die-cut maske |
| Başlık zayıf | 400 ağırlık Playfair | 700'e çıkar, 52px'te tut |
| Erişilebilirlik ihlali | tarih/durum `--ink-faint` ile yazılmış | Durum `--ink-soft`, tarih mono 11px `--ink` |
| Modal sıçrıyor | overshoot 1.2 üstü | Yay eğrisini 1.42'de bırak, süreyi 520ms'te tut |

## Komşu stiller

- **Uyumlu:** `dopamine-ui` — kutlama/ödül anı ortak; dopamine yalnız tek "başarı" kartında, accent'i ezmeden.
- **Uyumlu:** `scrapbook` — kâğıt/el yapımı dili ortak; scrapbook polaroid bantlarını bu stile taşıma.
- **Uyumlu:** `bohemian` — sıcak palet ortak; bohemian'ı yalnız davetiye arka yüzünde kullan.
- **Yasak:** `terminal-ui` — mono/kesik dil kutlama sıcaklığını siler.
- **Yasak:** `utility` — hairline ve isimli stiller kutlama kartının yuvarlak kâğıt dilini kırar.
- **Yasak:** `blueprint-drawing` — teknik çizim dili "özel gün" anlatısıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Greeting_card | tebrik kartı biçimi, die-cut ve folyo geleneği |
| https://en.wikipedia.org/wiki/Die_cutting_(web) | dalgalı kenar ve kesim payı ölçüsü |
| https://www.hallmark.com/ | kart hiyerarşisi: görsel, başlık, mesaj, imza |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | folyo şerit ve buton kenarı ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Celebration Card (styles/121-celebration-card/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="celebration-card"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Playfair Display 700 (H1 52px / 1.02 / -0.01em, mobil 34px), govde Nunito 400 16/1.7
  (<= 52ch), etiket IBM Plex Mono 11px .14em (tarih/kart no/durum).
Yuzey: kart = kagit; radius 14px / 22px (buton ve chip 999px), tek golge var(--shadow).
  Ust kenarda 9px dalgali die-cut maskesi (radial-gradient mask); kenarlik maskeyi takip eder.
Renk: pudra #fbeee8 + murdum #341c2a + tek accent gul kurusu #bd1f5c (ekranin <= %12'si).
Imza: baslik ustunde 6px folyo bant (tek); sag yarida 5 noktali konfeti (opacity .55);
  sol altta 12 derece egik kurdele (46vw x 12px, mobil 70vw x 8px); kart altinda 1px accent imza satiri.
Hareket: enter 520ms cubic-bezier(.34,1.42,.4,1) 14px stagger 60ms; scroll top 85% / 600ms / 16px / once;
  hover 180ms imageScale 1.024; pin kapali. prefers-reduced-motion zorunlu.
Yasak: ikinci accent, gradient folyo taklidi, blur/cam, cok katmanli golge, 90px ustu baslik,
  konfeti dongusu, govdede uppercase, uzucu baglamda kutlama.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (die-cut kenar, folyo bant, konfeti, kurdele).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (13.75:1), accent üstü ≥ 4.5:1 (5.60:1).
- [ ] Odak halkası görünür (2px + 3px offset), dokunma hedefi ≥ 46px.
- [ ] 390px genişlikte taşma yok; dekor daralıyor.
- [ ] `prefers-reduced-motion` açıkken konfeti/kurdele hareketi duruyor.

## Token

```css
[data-style="celebration-card"] {
  --bg: #fbeee8; --bg-2: #f5e2da;
  --surface: #fffaf7; --surface-2: #f2ded4;
  --ink: #341c2a; --ink-soft: #6b4a5b; --ink-faint: #8f6f7f;
  --accent: #bd1f5c; --accent-ink: #fff5f9;
  --line: rgba(52,28,42,.16);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 6px 18px rgba(52,28,42,.10); --shadow-hard: none;
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0.03;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="celebration-card"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 5.26:1 · `ink-soft / surface-2` 5.87:1 · `accent-ink / accent` 5.60:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: tebrik kartı: kesik kenar + folyo şerit + konfeti.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.52s` / `scroll 0.6s` (ikisi de ≤ 1.2 s).
