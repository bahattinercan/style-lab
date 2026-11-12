# 80 · Mevsim Geçişi

> **Bir cümlede:** Bir mevsimden diğerine geçen arayüz: sıcak krem zemin, iki tonlu geçiş şeridi (pas turuncusu → yaprak yeşili), serif başlık ve tek yumuşak gölge.

| | |
|---|---|
| **Hissiyat** | geçici, sıcak, doğal, ritmik |
| **En iyi** | mevsimsel kampanya, tarım/gıda ürünü, etkinlik takvimi, yaşam tarzı abonelik vitrini |
| **Kaçın** | finans paneli, teknik dokümantasyon, güvenlik arayüzü — iki tonlu süs karar hızını düşürür |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük metin çifti 7.18:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="seasonal-shift"]` |
| **Kompozisyon** | `split` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Mevsim Geçişi, ekranı **iki mevsim arasındaki eşik** gibi kurar: sıcak krem zemin (`--bg` → `--bg-2` dikey gradyan), bölüm ve kart üstlerinde 3px iki tonlu şerit (pas turuncusu %55 → yaprak yeşili %40), serif başlık (EB Garamond) + sans gövde (Inter), tek yumuşak gölge. Tek renkli sadeliği feda eder; karşılığında **zaman/ritim okuması** kazanır.

Kurucu kararları üç tanedir. Birincisi **iki renk, iki mevsim**: accent (sonbahar) ve ok (ilkbahar) — üçüncü sıcak ton yok. İkincisi **şerit yön taşır**: gradyan soldan sağa akar, "geçiş" kelimesi görselde de okunur. Üçüncüsü **serif başlık + sans gövde**: anlatı sıcak, okunurluk nötr kalır.

Bedeli: iki tonlu süs, operasyonel ekranda dikkat dağıtır. Bu yüzden stilin doğal yeri vitrin, takvim ve kampanya; form/ödeme ekranlarında şerit kaldırılır.

### Ne değildir
- **Japandi (06) değildir:** 06 tek sıcak nötr skalada kalır ve süs eklemez; 80'de **iki tonlu geçiş şeridi** imzadır.
- **Biyofilik Botanik (76) değildir:** 76 tek yeşil ailesi + yaprak köşesi kullanır; 80 iki mevsim rengi (pas + yeşil) ve standalone şerit kullanır, radius 8/16px.
- **Editorial Design (03) değildir:** 03 serif başlık + kolon ritmi ile baskı dili kurar, renk geçişi yok; 80 renk geçişini imza yapar.
- **Maximalism (17) değildir:** 17 çok renk/desen yığar; 80'de en fazla iki vurgu tonu ve tek şerit.

### Nereden gelir
Fenoloji (mevsim geçişlerinin gözlemlenebilir eşikleri) ve sonbahar yaprak rengi skalasından; görsel olarak 1960-70'ler doğa takvimleri ve zanaat ambalajlarından. Bugün geri dönüyor çünkü mevsimsel ürünler (tarım aboneliği, etkinlik, moda koleksiyonu) "dönem" anlatmak zorunda. Klişeye dönmemesi için korunacak detay: **şeridin 3px'te kalması** ve iki renkten fazlasına çıkmaması.

### 3 saniyede tanıma testi
1. Zemin sıcak krem; yukarıdan aşağı hafif koyulaşan gradyan var.
2. Nav ve kart üstlerinde 3px iki tonlu şerit (turuncu → yeşil) görünüyor.
3. Başlıklar serif (EB Garamond), gövde sans; iki farklı aile birlikte.
4. Buton 44px, radius 8px; gölge tek ve yumuşak.
5. Mevsim etiketleri mono ve büyük harf (İLKBAHAR → YAZ).

## Görsel imza
- **İki tonlu geçiş şeridi:** 3px, `linear-gradient(90deg, accent %55, ok %40)`; nav altında `border-image`, kart üstünde `::before`.
- **Krem gradyan:** gövde `linear-gradient(180deg, --bg, --bg-2)` + hero görselinde 115° iki mevsim bölünmesi.
- **Nokta deseni:** hero görselinde 14px nokta ızgarası (ink %10) — tohum/toprak hissi.
- **Serif/sans eşleşmesi:** EB Garamond 50/32/21 (500) + Inter 16px/1.65.
- **Mevsim etiketi:** 11px mono, uppercase, `.08em`; ok işaretiyle (`→`).
- **Tek gölge:** `0 6px 20px rgba(42,32,24,.12)`; sert/ofset gölge yok.
- **Hareket imzası:** 570ms `cubic-bezier(.42,.12,.2,1)`, 22px — geçiş "döner", sıçramaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6efe2` | sayfa zemini (krem, geçişin başı) | kart zemini |
| `--bg-2` | `#ede3d2` | gradyanın sonu, ikincil bant | buton zemini |
| `--surface` | `#fdf9f1` | kart / panel | sayfa zemini |
| `--surface-2` | `#f7f0e4` | chip, tablo başlığı | birincil CTA |
| `--ink` | `#2a2018` | başlık, gövde | dekoratif çizgi |
| `--ink-soft` | `#5c4c3d` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#8a7b68` | yalnız dekoratif çizgi ve alt not | etkileşimli metin |
| `--accent` | `#a4471f` | sonbahar ucu: birincil eylem, şerit başı | gövde metni |
| `--accent-ink` | `#fff6ec` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(42,32,24,.14)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **13.93:1** · `ink-soft / bg` = **7.18:1** · `accent-ink / accent` = **5.61:1** · `ink-faint / bg` = **3.59:1** (yalnız dekoratif).
- İki vurgu kuralı (bilinçli istisna): accent (sonbahar) + ok (ilkbahar). Üçüncü sıcak/soğuk vurgu yok; `--ok` şerit ve durum dışında kullanılmaz.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; krem zemin üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | EB Garamond (`--font-display`) | 50px (mobil 30px) | 500 | 1.06 | `0` |
| H2 | EB Garamond | 32px | 500 | 1.16 | `.01em` |
| H3 | EB Garamond | 21px | 500 | 1.30 | `.01em` |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.65 | `0` |
| Küçük gövde | Inter | 13px | 400 | 1.55 | `0` |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 11px | 400 | 1.4 | `.08em` |

- Ölçek oranı: **1.5** — kullanılan basamaklar 11 · 12 · 13 · 16 · 21 · 32 · 50.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.8vw, 50px); line-height: 1.06 }`.
- Gövde satır uzunluğu en fazla **64ch**; mevsim anlatısı 56ch'te tutulur.
- Ağırlık kuralı: display 500 (EB Garamond 700 kullanılmaz — krem zeminde sertleşir), gövde 400/600, mono 400.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1200px (içerik 1160px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında tek kolon, şerit 2px |

- Asimetri kuralı: ekran başına **1** asimetrik blok (7/5) — iki mevsim bölünmesi bu blokta.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik "mevsim bandı" olur.
- Kart padding 22px, bölüm dikey boşluğu 76px (mobil 44px).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` → `--bg-2` | — | krem gradyan |
| Kart | `--surface` | `0 6px 20px rgba(42,32,24,.12)` | kart, panel, KPI |
| Yüzen katman | `--surface` + gölge | `0 16px 40px rgba(42,32,24,.20)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; kart üstünde ek 3px iki tonlu şerit.
- Derinlik nereden gelir: **tek yumuşak gölge + iki ton farkı**. Sert gölge yok.
- Radius: `--radius: 8px` (buton, input), `--radius-lg: 16px` (kart, panel, modal); chip 999px. Üst sınır 20px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | `0 22px` | 8px | 15px Inter 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %86 + ink · active: translateY(1px) · focus: 2px accent outline + 3px offset · disabled: opacity .45 · loading: renk accent → ok (700ms tek tur) |
| Buton (ikincil) | 44px | `0 22px` | 8px | 15px Inter 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 44px | `0 14px` | 8px | 15px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %30 outline · error: `--danger` çerçeve + 12px etiket · disabled: opacity .45 |
| Kart | içerik | 22px | 16px | H3 + gövde | `--surface` + 1px `--line` + 3px üst şerit + gölge | hover: gölge 6/24 |
| Chip / badge | 26px | `0 12px` | 999px | 12px Inter 600 | `--surface-2` + 1px `--line` | accent: accent %13 zemin + accent metin |
| Nav | 62px | `0 26px` | 0 | 15px Inter 500 | `--bg` + 3px iki tonlu alt şerit | aktif: accent metin |
| Tablo satırı | 44px | `8px 12px` | — | 15px Inter, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 26px | 16px | 21px display + mono mevsim etiketi | `--surface` + `0 16px 40px` + üst şerit | açılış: 22px, 570ms |
| Toast | 42px | `10px 16px` | 8px | 14px Inter 600 | `--surface` + sol uçta 6px iki renkli nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ok`, `--ink-soft`, `--warn` | en fazla 4 seri; mevsim sınırı 1px kesikli dikey |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — krem zeminde 2px offset zayıf kalır.
- Dokunma hedefi: en az 44×44px; butonlar 44px. Chip 26px, hedef padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, hafif yuvarlak uç, 22px ızgara; mevsim sembolleri (yaprak, kar, güneş) |
| Fotoğraf | mevsim geçişi karesi: sıcak-soğuk karşıtlığı, düşük doygunluk, 16px radius kırpma |
| İllüstrasyon | iki tonlu yaprak/dal çizimi (yarısı accent, yarısı ok) |
| Doku | grain %3 + ince dikey geçiş çizgisi; parlak yüzey yok |
| Logo alanı | serif wordmark + iki renkli yaprak işareti, 28px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | serif H1 + iki mevsim bölünmüş görsel + tek CTA | `shots/01-landing.png` |
| Dashboard | düşük | şerit yok; iki ton yalnız grafik serisinde | `shots/02-dashboard.png` |
| Form | düşük | 44px input, tek kolon; şerit kaldırılır | — |
| Liste / tablo | düşük | 44px satır, mevsim sütunu mono etiket | — |
| Boş durum | orta | iki tonlu yaprak illüstrasyonu + tek cümle | — |
| Onboarding | yüksek | 3 adım, her adım bir mevsim dönemi | — |
| Pricing | orta | üç kart; öne çıkan kartta iki tonlu şerit | — |
| Giriş / ödeme | çok düşük | şerit yok; yalnız krem zemin + tek CTA | — |
| Modal | orta | üst şerit + mono mevsim etiketi | — |
| Bildirim / toast | orta | alt-sağ, iki renkli nokta | — |
| Hata | düşük | nokta `--danger`; zemin değişmez | — |
| Profil / ayar | orta | iki kolon; mevsim tercihi chip ile | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **570ms** | `cubic-bezier(.42,.12,.2,1)` | `opacity` + `translateY(22px)`; stagger **0.075s** |
| Scroll reveal | **570ms** | aynı eğri | trigger `top 96%`, `translateY(44px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (mevsim kaymaz, döner) |
| Basma | **150ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 300ms | aynı eğri | opacity + 12px |
| Hover | **220ms** | aynı eğri | görsel ölçek **1.018** |
| Ödül / vurgu | 570ms | aynı eğri | şerit soldan sağa %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.57s / cubic-bezier(.42,.12,.2,1) / 22px / 0.075` · `scroll = top 96% / 0.57s / 44px / once` · `pin = false` · `hover = 220ms / 1.018`.
- Bant içi fark: 76'dan (0.68s / 24px / 0.085), 77'den (0.78s / 18px / pin 1.6), 78'den (0.48s / 32px / pin 0.7), 79'dan (0.83s / 40px / 0.115) en az dört parametrede ayrışır. Mevcut 72 stil içinde en yakını 19-y2k (`0.5s / linear / 12px / 0.04`) — süre, eğri, offset, trigger (top 96%) ve hover'da farklı.
- `prefers-reduced-motion`: tüm süreler 0.01ms, şerit animasyonu son kareye atlar.
- Bu stile yasak hareket: ekran başına 1'den fazla sürekli yaprak/kar animasyonu, saniyede 3 üstü flash, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6efe2` | `#1a1310` |
| `--surface` | `#fdf9f1` | `#271d17` |
| `--ink` | `#2a2018` | `#f0e6d8` |
| `--accent` | `#a4471f` | `#e88f4a` |
| `--ink-soft` | `#5c4c3d` | `#c0af9c` |
| `--line` | `rgba(42,32,24,.14)` | `rgba(240,230,216,.16)` |

- Koyu modda değişen başka ne var: accent bir ton açılır (`#e88f4a`) çünkü koyu zeminde pas turuncusu kaybolur; gölge yerine 1px `--line` öne çıkar; şeridin ok ucu %40 kalır ama opaklık %30'a iner (fazla parlamasın).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Zemin sıcak krem (`--bg` → `--bg-2`); saf beyaz zemin yok.
- İki tonlu geçiş şeridi imza öğedir: 3px, accent → ok; nav ve kart üstünde.
- En fazla iki vurgu tonu (accent + ok); üçüncü sıcak/soğuk vurgu yok.
- Radius 8px kontrol / 16px kart; hap radius yalnız chip.
- Serif display + sans gövde; ikinci serif yok.
- Mevsim etiketi mono, uppercase ve geçiş yönü belirtilir (`İLKBAHAR → YAZ`).

## Yasaklar
- Neon/doygun turkuaz, mor geçişler.
- Saf beyaz zemin veya saf siyah bölüm.
- 0px keskin köşe, kalın 3px+ çerçeve.
- Geometrik sans display, ikinci serif.
- Ekran başına 1'den fazla sürekli yaprak/kar animasyonu.
- Aynı ekranda üçten fazla mevsim rengi.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **7.18:1** (eşik 4.5); `ink-faint / bg` = **3.59:1** yalnız dekoratif çizgi ve alt notta.
- `--ink-faint` etkileşimli metinde kullanılmaz; mevsim etiketi `--ink-soft`.
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon ekran başına ≤1; `prefers-reduced-motion` şerit animasyonunu kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `border-image` desteklenmezse şerit 3px düz accent çizgiye düşer.
- Odak görünürlüğü: krem zeminde 2px accent outline + **3px** offset; 2px offset turuncu zeminde zayıf kalır.

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
| Ekran "sonbahar teması" gibi klişe | her yerde turuncu kullanılmış | accent yalnız şerit ve CTA'da |
| İki renk çatışıyor | üçüncü vurgu eklenmiş | accent + ok dışında vurgu yok |
| Serif başlık ağır | EB Garamond 700 kullanılmış | 500 sabit |
| Şerit gürültü yapıyor | operasyonel ekranda da bırakılmış | form/dashboard'da şeridi kaldır |
| Krem zemin "kirli" | grain %3 üstü + gölge katmanı | grain sabit, tek gölge |
| Mobilde taşma | 20px gutter korunmuş | 768 altı 16px gutter, tek kolon |

## Komşu stiller

- **Uyumlu:** `japandi` — sıcak nötr ve sakin boşluk; Japandi tek bölümde garnitür.
- **Uyumlu:** `wabi-sabi` — kâğıt dokusu ve doğal ton; Wabi-Sabi boş durumda.
- **Uyumlu:** `editorial-design` — serif başlık + kolon ritmi; Editorial yalnız makale bölümünde.
- **Yasak:** `y2k` — krom/neon ve parlak yüzey krem sıcaklığını bozar.
- **Yasak:** `acid-graphics` — asit renkleri iki ton disiplinini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Season | mevsim sınırları ve dönem adları |
| https://en.wikipedia.org/wiki/Autumn_leaf_color | sonbahar ton skalası (klorofil → karoten) |
| https://en.wikipedia.org/wiki/Phenology | geçiş zaman çizelgesi ve eşikler |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | krem zemin üstü metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Mevsim Geçişi (styles/80-seasonal-shift/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="seasonal-shift"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: krem dikey gradyan --bg → --bg-2; hero görselinde 115° iki mevsim bölünmesi + 14px nokta deseni.
Tipografi: --font-display EB Garamond 50/32/21 (500); --font-body Inter 16px/1.65;
  --font-mono JetBrains Mono 11px etiket (.08em, uppercase, geçiş yönü "→").
Yüzey: --bg / --surface + 1px var(--line) + 0 6px 20px / yüzen 0 16px 40px.
  Radius 8px kontrol, 16px kart, chip 999px.
Renk: iki vurgu — accent #a4471f (sonbahar) + ok (ilkbahar); üçüncü ton yok.
  ink/bg 13.93:1, ink-soft/bg 7.18:1, accent-ink/accent 5.61:1, ink-faint/bg 3.59:1 (dekoratif).
İmza: 3px iki tonlu geçiş şeridi (nav altı + kart üstü), soldan sağa accent → ok.
Hareket: enter 570ms cubic-bezier(.42,.12,.2,1) 22px stagger .075; scroll top 96% 570ms 44px once;
  pin yok; hover 220ms görsel 1.018. prefers-reduced-motion zorunlu.
Yasak: neon/mor geçiş, saf beyaz zemin, 0px köşe, kalın çerçeve, ikinci serif, >1 sürekli animasyon.
Çıktı: bileşen kodu + tek paragraf not (geçiş şeridini ve serif/sans eşleşmesini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: iki tonlu şerit, krem gradyan, iki mevsim bölünmesi, mono mevsim etiketi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 13.93 / 7.18 / 5.61 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 3px offset görünür.
- [ ] 390px'te tek kolon, şerit 2px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken şerit ve geçiş animasyonu duruyor.

## Token

```css
[data-style="seasonal-shift"] {
  --bg: #f6efe2; --bg-2: #ede3d2;
  --surface: #fdf9f1; --surface-2: #f7f0e4;
  --ink: #2a2018; --ink-soft: #5c4c3d; --ink-faint: #8a7b68;
  --accent: #a4471f; --accent-ink: #fff6ec;
  --line: rgba(42,32,24,.14);
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 6px 20px rgba(42,32,24,.12); --shadow-hard: none;
  --font-display: "EB Garamond", "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 3;
  --danger: #a02a20; --danger-ink: #ffffff;
  --ok: #3f6b2c; --warn: #7f5a04;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="seasonal-shift"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
