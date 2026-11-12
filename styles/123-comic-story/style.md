# 123 · Comic Story

> **Bir cümleyle:** Çizgi roman sayfası: 3px mürekkep paneller, 6px oluk, yarım ton gölge ve kuyruklu konuşma balonları.

| | |
|---|---|
| **Hissiyat** | hareketli, anlatıcı, kaba-mizahi, "kare kare" |
| **En iyi** | hikâye/serial okuma, çizgi roman ve webtoon vitrini, çocuk-gençlik ürünü, eğitim içeriğinde adım anlatımı |
| **Kaçın** | finansal işlem, kurumsal veri paneli, resmi form, uzun teknik dokümantasyon |
| **Zorluk** | orta (balon/panel dengesi) · **Erişilebilirlik** | iyi (16.87:1 gövde, 4.63:1 accent üstü) |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="comic-story"]` |
| **Kompozisyon** | `index` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Comic Story, çizgi roman sayfasının okunma mantığını ekrana taşır: **3px mürekkep panel çerçevesi**, **6px oluk** (oluk zemini mürekkep), **yarım ton nokta** gölgelendirme, **kuyruklu konuşma balonu** ve **caption kutusu** (mono uppercase, mürekkep zemin). Tipografi mektup dilidir: Baloo 2 600 (yuvarlak, el yazısına yakın display), Inter gövde, Space Mono caption ve panel numarası. Accent tek: çizgi roman kırmızısı (`#d92b1f`), yalnız efekt etiketi, birincil buton ve aktif işarette.

Kazandığı şey: **akış**. Panel + oluk + balon üçlüsü, kullanıcıyı "sırayla oku" moduna sokar; bu yüzden adım adım anlatım (onboarding, eğitim, hikâye) bu dilde doğal durur. Feda ettiği şey: **yoğunluk ve ciddiyet** — 20 satırlık tablo, form doğrulaması veya işlem onayı bu dilde güven vermez; oralarda yalnız kenar kalınlığı ve başlık hatırlatılır, balon/efekt kapatılır.

### Ne değildir
- **Conceptual Sketch (32) değildir.** O stil el çizimi wireframe ve notlarla **taslak** kurar (Architects Daughter, 1px); burada bitmiş **mürekkep panel** var: 3px kenar, yarım ton, balon, efekt etiketi.
- **Scrapbook (31) değildir.** Scrapbook polaroid/bant/katman gölgesiyle kolaj kurar; burada tek düzlem, 6px oluk ve panel ızgarası var, katman gölgesi yok.
- **Punk Fanzine (95) değildir.** Zine fotokopi greni, ranson punto ve el yazısıyla "DIY" kurar; burada harf sistemi tek (Baloo 2), hareket kare kare (steps), gren düşük (.05) ve balonlar biçimlidir.
- **Pixel Art (24) değildir.** Pixel art 8-bit grid kullanır; burada grid yok, çizgi süreklidir (3px) ve tipografi vektöreldir.
- **"Kalın çerçeveli kart" değildir.** 6px oluk, balon kuyruğu ve caption kutusu olmadan bu stil sadece çerçeveli kutulardır.

### Nereden gelir
Çizgi roman 20. yy başında gazete şeritleriyle standartlaştı: **panel** (zaman birimi), **oluk** (zaman aralığı), **balon** (ses) ve **caption** (anlatıcı). Yarım ton baskı, renkli baskının pahalı olduğu dönemde ton geçişini nokta yoğunluğuyla çözdü. Dijitalde bu dil iki yerde döndü: (1) webtoon/serial okuma, (2) adım adım anlatım (onboarding, eğitim) — panel mantığı, "şimdi burada" duygusunu bedava verir.

Klişeye düşmemesi için korunması gereken detay: **oluk oranı ve efekt bütçesi**. Oluğu 16px'e çıkarmak, üç-dört efekt etiketi serpmek veya kenarı 1px'e indirmek stili "çerçeveli blog"a çevirir.

### 3 saniyede tanıma testi
1. Paneller arasında **6px oluk** ve oluk zemini **mürekkep** mi (kâğıt değil)?
2. Panel kenarları **3px** mi; 1px ince çerçeve var mı?
3. Bir yerde **kuyruklu konuşma balonu** ve mono uppercase **caption kutusu** var mı?
4. Panel köşesinde **yarım ton nokta** (7px grid) ve accent **efekt etiketi** (12° eğik) görünüyor mu?
5. Display **yuvarlak ve kalın** (Baloo 2 600) mı; accent tek kırmızı ve ekranın ≤ %10'unda mı?

## Görsel imza
1. **Panel ızgarası:** `gap: 6px`, konteyner zemini `--ink`, padding 6px, çocuklar `--surface` + 2px radius.
2. **Mürekkep çerçeve:** tüm paneller `3px solid var(--ink)`; nav altı ve divider da 3px — 1px kenar yok.
3. **Konuşma balonu:** 3px kenar + 14px radius + 14×14px kuyruk (45° döndürülmüş kenarlar); `::after` ile.
4. **Caption kutusu:** `.eyebrow` mürekkep zemin + kâğıt metin, 3px 8px padding, 2px radius, mono uppercase.
5. **Yarım ton:** 7px nokta gridi, opacity `.28`, panelin sağ alt köşesinde 96×96px, maskeyle sınırlı.
6. **Efekt etiketi:** accent zemin + 3px mürekkep kenar + `rotate(12deg)` + sert gölge; ekran başına 1 ("HOOOP!").
7. **Sert gölge:** `4px 4px 0 var(--ink)` — yalnız hero görseli, efekt etiketi, modal ve buton hover.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f8f2e2` | Sayfa zemini (gazete kâğıdı) | Panel içi |
| `--bg-2` | `#f0e8d3` | Dış şerit, alt bilgi | Oluk (oluk mürekkep) |
| `--surface` | `#fffdf6` | Panel yüzeyi, balon, form | Sayfa zemini |
| `--surface-2` | `#ece4cd` | Caption varyantı, hover | Metin arkası |
| `--ink` | `#111114` | Mürekkep: kenar, oluk, metin | Accent zemin üstü |
| `--ink-soft` | `#494a45` | Lede, ikincil metin | Panel numarası (mono `--ink`) |
| `--ink-faint` | `#75766e` | Dekoratif mono etiket | Etkileşimli metin |
| `--accent` | `#d92b1f` | Efekt etiketi, birincil buton, odak halkası, hata | Gövde metni, geniş zemin |
| `--accent-ink` | `#fff8f2` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(17,17,20,.22)` | Yardımcı çizgi (tablo alt) | Panel kenarı (o 3px ink) |

- Ölçülen kontrast: `ink / bg` = **16.87:1** · `ink-soft / bg` = **8.00:1** · `accent-ink / accent` = **4.63:1** · `ink-faint / bg` = **4.11:1**.
- Tek vurgu kuralı: kırmızı accent ekranın **≤ %10**'u; ikinci renk (mavi/sarı) yok — ses efektleri de aynı kırmızıyı kullanır.
- Yasak kombinasyon: accent zemin + `--ink`; accent üzerine `--ink-faint` (2.0:1); gri tonlarla "suluboya" efekti.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 | 50px (mobil 32px) | 600 | 1.0 | 0.005em |
| H2 | Baloo 2 | 30px | 600 | 1.08 | 0.005em |
| H3 | Baloo 2 | 20px | 600 | 1.2 | 0.005em |
| Gövde | Inter | 15.5px | 400 | 1.62 | 0 |
| Lede | Inter | 15.5px | 400 | 1.62 | 0 (52ch) |
| Caption / mono | Space Mono | 11px | 400 | 1.4 | 0.1em |

- Ölçek oranı ≈ 1.65 (15.5 → 30 → 50); basamak sayısı 6.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.2vw, 50px) }`.
- Gövde metni maksimum satır uzunluğu: **52ch**; balon içi metin en fazla 3 satır, 34ch.
- Ağırlık kuralı: display 600 (Baloo 2'de 700/800 sahte kalın sayılır), gövde 400/600. Gövdede uppercase yalnız caption'da.
- Caption kutusu mono 11px uppercase; panel numarası (`01`, `02`) aynı mono, `--ink`.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (panel 6/3/3 ya da 6/6) |
| Gutter | **6px (panel oluğu)** — dış boşluklar 16/24/32px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında paneller alt alta, oluk 6px kalır |

- Asimetri kuralı: ekran başına en fazla **1 geniş panel** (6 kolon); kalanı 3+3 ya da 4+4.
- Bölüm ritmi: art arda en fazla **4** panel; beşincide 3px divider ve 24px boşluk.
- Bölüm dikey boşluk 64px (mobil 40px); panel padding 18px; oluk her yerde 6px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa |
| Panel | `--surface` + 3px `--ink` | `none` | Panel, balon, kart |
| Oluk | `--ink` zemin | — | Paneller arası boşluk |
| Yüzen katman | `--surface` + 3px `--ink` + `--shadow-hard` | `4px 4px 0` | Modal, efekt etiketi |

- Kenarlık formülü: panel/buton/input `3px solid var(--ink)`; yardımcı çizgi (tablo altı) `1–2px var(--line)`.
- Derinlik nereden gelir: **mürekkep kenar + oluk + sert ofset gölge**; yumuşak gölge `none`.
- Radius: `--radius` 4px (panel, kart) · `--radius-lg` 8px (modal, çift radius). Buton/input/chip 2px (daha keskin), balon 14px (dialogue formu).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 20px | 2px | 16px/600 Baloo 2 | `--accent` / `--accent-ink`, 3px ink | hover sert gölge + translate(-1px,-1px) 120ms · active gölge yok · focus 3px accent offset 0 · disabled opacity .4 kesikli · loading `...` |
| Buton (ikincil) | 46px | 12px 20px | 2px | 16px/600 Baloo 2 | `--surface` / `--ink`, 3px ink | hover `--surface-2` + gölge · focus aynı |
| Input | 46px | 0 12px | 2px | 15.5px/400 Inter | `--surface` + 3px ink | focus 3px accent offset 0 · error `--accent` kenar + `!` + mono açıklama · disabled opacity .4 |
| Panel | — | 18px | 4px | H3 Baloo 20px | `--surface` + 3px ink, gölge yok | hover: yalnız kenar kalınlığı korunur, zemin `--surface-2` |
| Balon | — | 10px 14px | 14px | 15.5px/400 Inter, ≤3 satır | `--surface` + 3px ink + kuyruk | konum: sol üst ya da sağ alt (panel başına 1) |
| Caption | 22px | 3px 8px | 2px | 11px/400 mono uppercase | `--ink` zemin / `--bg` metin | her panelde 1 caption |
| Nav | 54px | 0 32px | 0 | marka Baloo 21px + mono 11px | `--bg` + alt 3px ink | aktif: 4px accent alt blok |
| Tablo satırı | 40px | 8px 10px | 0 | kare no mono, başlık Baloo, sayfa mono | dış çerçeve 3px ink, satır altı 2px `--line` | hover `--surface-2` |
| Modal | — | 24px | 8px | H2 Baloo 30px | 3px ink + `--shadow-hard` | perde %55; başlıkta balon kuyruğu serbest |
| Toast | 42px | 10px 14px | 8px | 12px/400 mono | `--ink` zemin / `--bg` metin | sol altta 8px kuyruk, 2600ms |
| Grafik | — | — | — | eksen 10px mono | `--accent`, `--ink` | en fazla 2 seri; 3px çerçeve, yarım ton dolgu |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 0` — mürekkep kenarın dışına taşmayan kalın halka; accent zeminli butonda `outline-color: var(--accent-ink)`, offset -6px.
- Dokunma hedefi: en az 46×46px; efekt etiketi dekoratif, dokunma hedefi değil.
- Panel hover'ında ölçek büyümez (yalnız görsel içi 1.016); panel ızgarası sabit kalır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 3px kalın çizgi, kare uç; yıldız/çarpı/şimşek dolu serbest (tek renk) |
| Fotoğraf | Halftone filtreli 1–2 renk; gerçekçi parlaklık ve yumuşak gölge yok |
| İllüstrasyon | Panel içi çizim (karakter/nesne); panel dışında illüstrasyon yok |
| Doku | Yarım ton nokta (7px, `%28`) + `--grain: .05` |
| Logo alanı | Baloo 2 kelime markası; hafif eğik efekt etiketi serbest, monogram yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 6/3/3 panel + efekt etiketi + caption | `shots/01-landing.png` |
| Dashboard | orta | Panel ızgarası, mono sayılar, efekt yok | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, 3px kenar, 3px odak halkası | — |
| Liste / tablo | orta | 40px satır: kare no, başlık, sayfa no | — |
| Boş durum | orta | Boş panel + balon ("burada henüz bir kare yok") + 1 buton | — |
| Onboarding | yüksek | 3 panel: sorun → çözüm → sonuç; her panelde 1 caption | — |
| Pricing | orta | 3 panel; önerilen panel accent başlık bandı | — |
| Giriş / ödeme | çok düşük | Efekt/balon yok; 3px kenar + tek accent buton | — |
| Modal | orta | 3px çerçeve + sert gölge, perde %55 | — |
| Bildirim / toast | orta | Balon biçimli toast, 2600ms | — |
| Hata | düşük | `--accent` kenar + `!` + mono açıklama | — |
| Profil / ayar | orta | Ayar paneli: başlık (Baloo) + satırlar (mono) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 80ms | `steps(2, end)` | `box-shadow` kalkar, `translate(0,0)` |
| Geçiş / sayfa | 120ms | `steps(3, end)` | `opacity` (kare kare) |
| Giriş (enter) | **280ms** | `steps(3, end)` | `opacity` + `translateY(22px)`, **stagger 45ms** |
| Kaydırma (scroll) | **340ms** | `steps(3, end)` | trigger **`top 90%`**, offsetY **20px**, `once: true` |
| Hover | **120ms** | `ease-out` | görsel ölçek **1.016** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 240ms | `steps(3, end)` | efekt etiketi 12° → 6° döner, tek atım |

- İmza ölçüsü: enter **0.28s / 22px / stagger 0.045** · scroll **0.34s / `top 90%` / 20px** · hover **120ms / 1.016** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; kare geçişleri durur, paneller statik kalır.
- Bu stile yasak hareket: yumuşak ease/spring, parallax, sürekli döngü, harf harf uçuşan yazı.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f8f2e2` | `#121214` |
| `--bg-2` | `#f0e8d3` | `#17171a` |
| `--surface` | `#fffdf6` | `#1c1c20` |
| `--surface-2` | `#ece4cd` | `#26262b` |
| `--ink` | `#111114` | `#f2eddd` |
| `--ink-soft` | `#494a45` | `#b5b0a2` |
| `--ink-faint` | `#75766e` | `#8a857a` |
| `--accent` | `#d92b1f` | `#ff6a58` |
| `--accent-ink` | `#fff8f2` | `#180a08` |
| `--line` | `rgba(17,17,20,.22)` | `rgba(242,237,221,.18)` |

- Koyu mod **gece baskısı**: zemin `#121214`, panel `#1c1c20`; mürekkep kremaya döner, accent açılır (`#ff6a58`).
- Sert ofset gölge koyuda siyah olsaydı görünmezdi: `--shadow-hard` **kâğıt grisine** (`#4a4741`) döner — yazılı istisna, `token-block.css` koyu bloğunda açıkça durur.
- Yarım ton nokta koyuda opacity `.20`'ye düşer (açık nokta koyu zeminde gürültü yapar).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **15.98:1** · `ink-soft/bg` = **8.64:1** · `accent-ink/accent` = **6.87:1** · `ink-faint/bg` = **5.09:1**.

## Zorunlu kurallar

1. **Panel + oluk:** her panel `3px var(--ink)`, oluk **6px** ve oluk zemini mürekkep; 16px boşluk kullanılmaz.
2. **Balon bütçesi:** panel başına en fazla 1 balon, en fazla 3 satır; kuyruk 14×14px.
3. **Caption zorunlu:** her panelde 1 mono caption (bölüm/kare bilgisi); caption'sız panel yok.
4. **Tek efekt:** ekran başına 1 efekt etiketi (12° eğik, accent, 3px kenar).
5. **Yarım ton sınırlı:** 7px nokta gridi, `%28`, panelin bir köşesinde 96×96px.
6. **Accent ≤ %10:** kırmızı yalnız efekt, birincil buton, odak halkası ve hata.

## Yasaklar

- Serif aile, 1px ince kenar, yumuşak gölge.
- Gradient, blur, cam yüzey, suluboya/soft-light efekti.
- Birden fazla efekt etiketi veya onomatopoeia (gürültü).
- Balon içinde 3 satırdan uzun replik; 15.5px altı gövde.
- İkinci accent (mavi/sarı) ve çok renkli panel zemini.
- Sürekli döngü, kayan panel animasyonu, parallax.

## Erişilebilirlik

- Ölçülen riskler: `accent-ink / accent` = **4.63:1** — eşiğin hemen üstünde; accent zemin üstünde 16px altı yazı kullanılmaz ve efekt etiketi metni 22px/600'dür.
- `--ink-faint / --bg` = **4.11:1** — yalnız dekoratif mono etiket; etkileşimli metin olamaz.
- Balon metni 15.5px/1.62 ve en fazla 3 satır; uzun replikler panel içine değil caption/alt metne taşınır.
- Hareket: `steps(3)` kare geçişi vestibüler risk taşımaz (küçük mesafe, kısa süre); reduced-motion'da tamamen durur.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` kullanılmıyor, `mask-image` desteklenmezse yarım ton dikdörtgen kalır (dekoratif).
- Odak görünürlüğü: 3px accent halka, offset 0 — 3px mürekkep kenarla çakışmaz; accent butonda `--accent-ink` halka, offset -6px.

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
| "Çerçeveli blog" gibi | kenar 1px'e inmiş, oluk 16px | 3px kenar + 6px mürekkep oluk |
| Sayfa gürültülü | 3-4 efekt etiketi, her panelde balon | Efekt 1, balon panel başına 1 |
| Okuma akışı kayboluyor | panel hizaları rastgele | 6/3/3 ya da 6/6 ızgara; geniş panel 1 |
| Balon "çıkartma" gibi | kuyruk yok, radius 4px | 14px radius + 14×14px kuyruk |
| Koyu modda gölge kayboluyor | siyah sert gölge | Koyu blokta `--shadow-hard: 4px 4px 0 #4a4741` |
| Erişilebilirlik ihlali | accent üstünde 12px mono metin | Efekt metni 22px/600; küçük metin accent zemin üstünde yasak |

## Komşu stiller

- **Uyumlu:** `conceptual-sketch` — çizim dili ortak; sketch'i yalnız taslak/not katmanında kullan.
- **Uyumlu:** `scrapbook` — kâğıt ve anlatı ortak; polaroid bantlarını bu stile taşıma.
- **Uyumlu:** `punk-fanzine` — bağımsız yayın bağlamı ortak; zine'in ranson puntosunu kullanma.
- **Yasak:** `terminal-ui` — mono/kesik dil panel anlatısını siler.
- **Yasak:** `minimalism` — hairline ve sakin hiyerarşi mürekkep panel dilini kırar.
- **Yasak:** `scandinavian-dark` — mat koyu sakinlik çizgi roman hareketiyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Comics | panel ızgarası, oluk ve okuma akışı |
| https://en.wikipedia.org/wiki/Speech_balloon | balon biçimi, kuyruk ve caption kutusu |
| https://en.wikipedia.org/wiki/Halftone | nokta dokusu yoğunluğu ve yönü |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | balon içi satır aralığı ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Comic Story (styles/123-comic-story/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="comic-story"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Baloo 2 600 (H1 50px / 1.0, mobil 32px), govde Inter 400 15.5/1.62 (<= 52ch),
  caption/panel no Space Mono 11px .1em uppercase. Serif ve 1px kenar yasak.
Yuzey: panorama 3px var(--ink) kenar; paneller arasi TAM 6px oluk ve oluk zemini var(--ink).
  Radius 4px / 8px (buton-input 2px, balon 14px). Sert golge var(--shadow-hard) yalniz hero,
  efekt etiketi, modal ve buton hover'da.
Renk: gazete kagidi #f8f2e2 + murekkep #111114 + TEK accent kirmizi #d92b1f (ekranin <= %10'u).
Imza: konusma balonu (3px kenar, 14px radius, 14x14 kuyruk); mono uppercase caption kutusu;
  yarim ton nokta (7px grid, %28, panel kosesinde 96px); 12 derece egik efekt etiketi (ekran basina 1).
Hareket: enter 280ms steps(3,end) 22px stagger 45ms; scroll top 90% / 340ms / 20px / once;
  hover 120ms imageScale 1.016; pin kapali. prefers-reduced-motion zorunlu.
Yasak: serif, 1px kenar, yumusak golge, gradient/blur, coklu efekt etiketi, 3 satirdan uzun balon,
  ikinci accent, dongu/parallax.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (6px oluk, 3px kenar, balon, yarım ton).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (16.87:1), accent üstü ≥ 4.5:1 (4.63:1).
- [ ] Odak halkası görünür (3px, offset 0), dokunma hedefi ≥ 46px.
- [ ] 390px genişlikte taşma yok; oluk 6px korunuyor.
- [ ] `prefers-reduced-motion` açıkken kare geçişleri duruyor.

## Token

```css
[data-style="comic-story"] {
  --bg: #f8f2e2; --bg-2: #f0e8d3;
  --surface: #fffdf6; --surface-2: #ece4cd;
  --ink: #111114; --ink-soft: #494a45; --ink-faint: #75766e;
  --accent: #d92b1f; --accent-ink: #fff8f2;
  --line: rgba(17,17,20,.22);
  --radius: 4px; --radius-lg: 8px;
  --shadow: none; --shadow-hard: 4px 4px 0 #111114;
  --font-display: "Baloo 2", "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0.05;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="comic-story"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir (koyuda `--shadow-hard` kâğıt grisine döner).

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 4.35:1 · `ink-soft / surface-2` 7.04:1 · `accent-ink / accent` 4.63:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 340px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: üç panelli çizgi roman + konuşma kuyruğu.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.28s` / `scroll 0.34s` (ikisi de ≤ 1.2 s).
