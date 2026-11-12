# 130 · Leather Craft

> **Bir cümlede:** Tabaklanmış deri gibi sıcak ve dokulu bir zeminde, dikiş çerçeveli kartlarda el işi emirlerini takip eden atölye arayüzü.

| | |
|---|---|
| **Hissiyat** | sıcak, dokulu, sabırlı, elle yapılmış |
| **En iyi** | deri atölyesi iş takibi, el yapımı ürün kataloğu, tabak/çanta markası, zanaat okulu |
| **Kaçın** | yüksek hızlı operasyon paneli, fintech, neon/oyun arayüzü — sıcak doku orada "yavaş" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | orta risk (tan zemin + koyu metin; en düşük etkileşimli çift 5.68:1) |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="leather-craft"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Leather Craft, arayüzü **iş tezgâhı** gibi kurar: tabaklanmış tan zemini, dikiş çerçeveli kartlar, el aleti etiketleri ve sabırlı bir hareket. Her kart bir iş emridir: deri türü, kalınlık, dikiş sayısı, teslim tarihi.

Üç kurucu karar: (1) **dikiş çerçevesi** — kartın içinde 8px boşlukla 1px kesikli çizgi; bu stil "el yapımı" olduğunu düzenden değil dikişten okutur; (2) **en yoğun grain** — `--grain: .06`; deri tanesi zeminin kendisidir, fotoğrafın üstünde kullanılmaz; (3) **sabırlı hareket** — giriş 1080ms `cubic-bezier(.66,.02,.3,1)`; el işi gibi yavaş kalkar, yavaş oturur.

Bedeli: sıcak tan zemin ve yoğun doku, metin kontrastını daraltır; gövde 16px Lora ve `--ink` zorunludur, `--ink-faint` gövdede kullanılamaz. İkinci bir sıcak accent tonu eklenirse stil "deri" değil "toprak" okunur.

### Ne değildir
- **Wabi-Sabi (07) değildir:** killi açık krem, yamuk kartlar ve kusur estetiği; Leather Craft hizalıdır, dikiş çerçevesi ve deri tanesi ile ayrışır (radius 7/16 vs 3/18, grain .06 vs .07, accent #7a3f1d vs #a85831).
- **Grand Tourer (41) değildir:** krem deri + krom hairline ve motor sporları dili; burada metal yok, dikiş ve tabaklama var.
- **Desert Sand (82) değildir:** kum + mor accent + 24/44 kumul radiusu; Leather Craft sıcak tan + kahve accent, 7/16 radius ve kesikli dikiş çerçevesi.
- **Nordic Folk (66) değildir:** krem + kırmızı nakış ve Fraunces/Lora; 130 dikiş çerçevesi, yoğun grain ve Share Tech Mono künye ile ayrışır (display ailesi Playfair Display vs Fraunces, accent hue 22° vs 5° ve radius 7/16 vs 6/10 → hiçbir eksen ortak değil).

### Nereden gelir
Deri atölyesi ve tabaklama geleneğinden: deri türü (vejetal, vachetta, süet, pull-up), kalınlık, dikiş adımı, kalıp, teslim tarihi. Bugün yeniden kullanılmasının nedeni: el yapımı ürün satan atölyeler sipariş defterini kâğıtta tutuyor; dijital karşılığında **iş emri** dilini ve dikişi taşıyan bir arayüz istiyorlar. Klişeye dönüşmemesi için korunacak detay: **kesikli dikiş çerçevesi** ve gerçek kalınlık/dikiş verisi.

### 3 saniyede tanıma testi
1. Zemin sıcak tan (deri), gözle görülür tanecikli doku var.
2. Kartların içinde 1px **kesikli dikiş çerçevesi**; başka yerde tekrar etmez.
3. Başlıklar Playfair Display 700 (yüksek kontrastlı serif), gövde Lora 16px; mono yalnız künye.
4. Accent koyu kahve (#7a3f1d); ikinci sıcak ton veya metal parlama yok.
5. Her kartta deri türü + kalınlık (mm) + dikiş sayısı + teslim tarihi.

## Görsel imza
- **Dikiş çerçevesi:** kart içinde 8px boşlukla `1px dashed color-mix(--ink-soft 45%)`; yalnız kart/modal, tablo hücresinde yok.
- **Deri tanesi:** `--grain: .06` — katalogdaki en yoğun doku; yalnız zemin katmanında.
- **Kahve accent:** `#7a3f1d` yalnız eylem/seçim/uyarı; accent üstü metin `#f8ecda`.
- **El aleti etiketi:** kartın sol üstünde 10px Share Tech Mono büyük harf (`BIZ`, `İĞNE`, `TOKMAK`).
- **Kalınlık satırı:** sağ altta mono `1.8 mm · 24 dikiş`, birim ayrı ve `--ink-faint`.
- **Yüksek kontrastlı serif başlık:** Playfair Display 700, H1 50px/1.08, `-0.01em`; iki satırı geçmez.
- **Plaka gölgesi:** `0 6px 16px -10px` kısa ve yumuşak; perçin/metal parlaklık yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e3cba9` | deri zemini | kart zemini |
| `--bg-2` | `#d7bd98` | gölgeli bölüm bandı | birincil buton |
| `--surface` | `#f0e0c6` | iş kartı, form | sayfa zemini |
| `--surface-2` | `#e9d5b7` | chip, hover, başlık satırı | metin zemini |
| `--ink` | `#2b1d12` | metin, başlık | dekoratif dolgu |
| `--ink-soft` | `#5d452f` | ikincil metin, dikiş çizgisi | accent dolgu üstü |
| `--ink-faint` | `#7f6748` | birim, etiket, eksen | gövde, etkileşimli metin |
| `--accent` | `#7a3f1d` | eylem, seçim, uyarı | dekoratif dolgu (geniş alan) |
| `--accent-ink` | `#f8ecda` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(43,29,18,.22)` | kart çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **10.40:1** · `ink-soft/bg` **5.68:1** · `accent-ink/accent` **7.04:1** · `ink-faint/bg` **3.40:1** · accent metin olarak bg'ye **5.23:1**.
- Tek vurgu kuralı: kahve accent yalnız eylem/seçim/uyarı. Durumlar `--ok` (koyu yosun), `--warn` (hardal), `--danger` (kiremit) — yalnız etiket ve 4px şerit.
- Yasak kombinasyon: accent yanında ikinci sıcak ton (turuncu/kiremit); accent üstünde `--ink-soft`; `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 50px | 700 | 1.08 | -0.01em |
| H2 | Playfair Display | 28px | 700 | 1.20 | 0 |
| H3 | Lora | 20px | 600 | 1.28 | 0 |
| Gövde | Lora | 16px | 400 | 1.66 | 0 |
| Etiket / künye | Share Tech Mono | 11px | 400 | 1.35 | 0.14em, büyük harf |
| Ölçü / tablo | Share Tech Mono | 13px | 400 | 1.45 | 0.02em, tabular |

- Ölçek oranı ≈ 1.7 (16 → 28 → 50); kullanılan basamaklar: 11 · 12 · 13 · 14 · 16 · 20 · 28 · 50 · (mobil 32).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.4vw, 50px) }`.
- Gövde metni maksimum satır uzunluğu: 62ch; iş notu 46ch'te kırılır.
- Ağırlık kuralı: Playfair Display 400/700 (başlık 700), Lora 400/600, mono 400. İtalik yalnız tek vurgu sözcüğünde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 6/6, atölye panosu 7/5 |
| Gutter | 22px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, pano tek sütun |

- Asimetri kuralı: ekran başına en fazla 1 asimetrik blok (atölye panosu 7/5).
- Bölüm ritmi: 68px masaüstü / 40px mobil; bölüm ayırıcı 1px çizgi + 24px boşluk.
- Kart içi 24px, dikiş çerçevesi için ek 8px iç boşluk; tablo satırı 42px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | deri zemini |
| Kart | `--surface` + 1px `--line` + dikiş çerçevesi | `var(--shadow)` | iş kartı, panel |
| Yüzen katman | `--surface` + 1px `--ink` | `var(--shadow)` + 0 30px 60px -40px | modal, menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px kahve halka | seçili iş |

- Kenarlık formülü: `1px solid var(--line)` dış + `1px dashed` iç dikiş (8px içeride).
- Derinlik nereden gelir: kısa yumuşak gölge + grain + dikiş; metal parlaklık yok.
- Radius: `--radius` 7px (buton, input, chip), `--radius-lg` 16px (kart, modal). 16px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 12px 22px | `--radius` | 14px/600 Lora | `--accent` + `--accent-ink`, `var(--shadow)` | hover %92 + alt dikiş · active 1px aşağı · focus 2px kahve halka · disabled %45 · loading 3 dikiş noktası |
| Buton (ikincil) | 46px | 12px 20px | `--radius` | 14px/600 Lora | `--surface` + 1px `--ink` | hover `--surface-2` · focus kahve halka |
| Input | 46px | 0 14px | `--radius` | 15px Lora | `--surface` + 1px `--line` | focus kahve halka · filled birim mono · error kiremit · disabled %45 |
| İş kartı | — | 24px | `--radius-lg` | başlık 20px Lora 600 | `--surface` + dış 1px + iç dikiş | seçili 1px kahve halka · sol üst alet etiketi |
| Chip (deri türü) | 24px | 0 10px | `--radius` | 10px Share Tech Mono | `--surface-2` + 1px `--line` | vejetal · vachetta · süet · pull-up · ekso |
| Nav (üst bar) | 58px | 0 26px | 0 | 11px mono / 14px Lora | `--bg`, alt 1px `--line` | aktif 2px kahve alt çizgi · sağda atölye adı |
| Tablo satırı | 42px | 8px 12px | 0 | iş gövde + mono kalınlık | alt 1px `--line` | hover `--surface-2` · seçili sol 4px kahve |
| Modal | — | 26px | `--radius-lg` | başlık 28px Playfair | 1px ink + `var(--shadow)` | iş emri: kalıp, dikiş, tarih; kapatma 46px |
| Toast | 42px | 10px 16px | `--radius` | 13px Lora | `--surface`, sol 4px kahve şerit | 4.4sn · üst sağ |
| Grafik | — | — | 0 | eksen 11px mono | çizgi 1.5px, alan %8 | ızgara 1px, yalnız alt eksen |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 46×46px; chip 24px görsel, satır içi padding ile 44px.
- Kalınlık/dikiş: kartın sağ altında mono, birim ayrı; toplam iş sayısı panoda mono 13px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yumuşak köşe; biz, iğne, tokmak, toka |
| Fotoğraf | deri yüzeyi/dikiş makro, sıcak yan ışık, doğal tan ton, max %45 alan |
| İllüstrasyon | yalnız kalıp çizimi: 1px kesme çizgisi ve dikiş deliği noktaları |
| Doku | deri tanesi grain `.06`; dikiş deseni yalnız kart kenarında |
| Logo alanı | Playfair Display 700 küçük harf, sol üst 24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 6/6 hero: solda başlık + tek CTA, sağda dikiş makro görseli | `shots/01-landing.png` |
| Dashboard | orta | 4 KPI (açık iş, geciken, ort. kalınlık, teslim) + pano | `shots/02-dashboard.png` |
| Form | düşük | iş emri: deri türü, kalınlık+mm, dikiş, teslim tarihi | — |
| Liste / tablo | orta | 42px satır, tür chip'i, sağda mono kalınlık | — |
| Boş durum | düşük | "tezgâhta iş yok" + yeni iş emri | — |
| Onboarding | düşük | 3 adım: atölye → deri türü → kalıp | — |
| Pricing | orta | iki plan, iş/kalıp limitleri | — |
| Giriş / ödeme | çok düşük | tek kart, 46px alanlar, tek eylem | — |
| Modal | orta | iş emri: kalıp, dikiş sayısı, teslim | — |
| Bildirim | düşük | 42px toast, sol kahve şerit, 4.4sn | — |
| Hata | düşük | kiremit çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | atölye listesi, birim (mm/inç), deri türleri | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (iş kartı) | 1080ms | `cubic-bezier(.66,.02,.3,1)` | `opacity` + `translateY(21px)`, 108ms arayla |
| Scroll reveal | 930ms, `top 64%` | aynı | `translateY(23px)`, `once: true` |
| Pin / scrub | 0.68 scrub, +155% mesafe | doğrusal | atölye panosu sabitlenir, iş katmanı kayar |
| Basma | 170ms | aynı | `translateY(1px)` |
| Hover (görsel) | 430ms | aynı | `scale(1.052)` |
| Dikiş vurgusu | 400ms | aynı | `border-color` (iç dikiş kahve) |

- Ölçülen imza: enter **1.08s · cubic-bezier(.66,.02,.3,1) · 21px · stagger 0.108**; scroll **top 64% · 0.93s · 23px · once**; pin **açık · scrub 0.68 · +155%**; hover **430ms · 1.052**.
- El işi: sabırlı kalkış, yavaş oturma; geri sekme yok (deri serttir).
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub ve dikiş vurgusu kapalı, içerik anında.
- Bu stile yasak hareket: sürekli dikiş diken animasyon, bounce, yatay parallax, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e3cba9` | `#1d1510` |
| `--bg-2` | `#d7bd98` | `#160f0b` |
| `--surface` | `#f0e0c6` | `#251b14` |
| `--surface-2` | `#e9d5b7` | `#2f241b` |
| `--ink` | `#2b1d12` | `#f4ead9` |
| `--ink-soft` | `#5d452f` | `#c6b39a` |
| `--accent` | `#7a3f1d` | `#d59a63` |
| `--accent-ink` | `#f8ecda` | `#1c1007` |

- Ölçülen koyu kontrastlar: `ink/bg` **15.10:1** · `ink-soft/bg` **8.84:1** · `accent-ink/accent` **7.66:1** · `ink-faint/bg` **4.84:1** · accent metin olarak bg'ye **7.40:1**.
- Koyu modda değişen başka ne var: grain `.06` → `.075` (koyu deride tanecik daha görünür), çizgi %22 → %16, accent açık tan-taba döner, dikiş çizgisi `--ink-soft` üzerinden yeniden hesaplanır.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="leather-craft"]` olarak durur.

## Zorunlu kurallar
- Her iş kaydı: deri türü + kalınlık (mm) + dikiş sayısı + teslim tarihi.
- Kart içinde 8px boşlukla 1px kesikli dikiş çerçevesi; başka yerde tekrar etmez.
- Deri tanesi grain `.06` yalnız zemin katmanında; fotoğrafın üstünde kullanılmaz.
- Başlık Playfair Display 700, gövde Lora 400 16px/1.66; mono yalnız ölçü/etiket.
- Radius yalnız 7px ve 16px; hap buton yok.
- Dokunma hedefi 46px; ölçüler mono tabular ve birim ayrı.

## Yasaklar
- Metal perçin/parlama, gloss, cam/blur, gradient.
- 16px üstü radius, hap buton, yumuşak geniş gölge.
- İkinci sıcak accent tonu; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 15px altı gövde metni, italik başlık.
- Sürekli dikiş animasyonu, parallax, bounce.
- Grain'i fotoğraf veya tablo hücresi üstünde kullanmak.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 5.68:1 (`ink-soft/bg`).
- `--ink-faint` 3.40:1 — birim/etiket ve eksen için; gövde metni olarak kullanılmaz.
- Kahve accent metin olarak 5.23:1, dolgu üstünde 7.04:1 — ikisi de geçer; accent'te 11px altı metin kullanılmaz.
- Dikiş çizgisi dekoratiftir; bilgi taşımaz (durum her zaman metinle de yazılır).
- Odak görünürlüğü: 2px kahve halka (5.23:1) + 2px offset; accent dolgulu butonda `--accent-ink` halka.
- 390px'te pano tek sütun, tablo karta döner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub, hover ölçeği ve dikiş vurgusu durur.

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
| "Toprak boyası" hissi | ikinci sıcak accent | tek kahve accent, durumlar etiketle |
| Doku kirli | grain fotoğrafın üstünde | grain yalnız zemin katmanı |
| Kontrast düşük | `--ink-faint` gövdede | gövde `--ink`; yalnız birim/etiket soluk |
| Dikiş süs gibi | her yerde tekrar | yalnız kart/modal, ekran başına kart kadar |
| Kart sınırı kayboluyor | gölge + doku zayıf | 1px çizgi + kısa gölge + dikiş |
| Mobilde taşıyor | 42px satır + kalınlık | kart + alt satır |
| Koyu modda doku kayboluyor | grain düşük | koyu blokta `.075` + çizgi %16 |

## Komşu stiller

- **Uyumlu:** `wabi-sabi` — el yapımı doku ve sakin ritim; ürün hikâyesi bölümlerinde eş.
- **Uyumlu:** `grand-tourer` — krem deri ve krom; premium çanta/aksesuar vitrininde tamamlayıcı.
- **Uyumlu:** `nordic-folk` — sıcak krem ve zanaat dili; katalog bölümlerinde eş.
- **Yasak:** `glassmorphism` — cam/blur, deri dokusunu yok eder.
- **Yasak:** `cyberpunk` — neon ve glow, sıcak tan paletiyle çelişir.
- **Yasak:** `pixel-art` — piksel doku, deri tanesini taklit eder ve kirli görünür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.britannica.com/technology/leather | tabaklama türleri ve deri terminolojisi |
| https://www.vam.ac.uk/collections/leather | dikiş, kalıp ve zanaat künyesi |
| https://ich.unesco.org/en/home | el zanaatı kayıt dili ve usta-çırak aktarımı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | tan deri zemininde metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Leather Craft (styles/130-leather-craft/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="leather-craft"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 700) H1/H2; --font-body (Lora 400/600) gövde 16px/1.66;
  --font-mono (Share Tech Mono) künye 11px +0.14em ve kalınlık/dikiş değerleri (tabular).
Yüzey: sıcak tan deri + yoğun tanecik (--grain .06). Kart = dış 1px var(--line) + içeride 8px boşlukla 1px KESİKLİ dikiş çerçevesi.
  radius --radius 4px, --radius-lg 10px; hap buton yok; gölge kısa ve yumuşak.
Renk: tek accent koyu kahve (--accent), accent üstü --accent-ink; ikinci sıcak ton yasak.
Kayıt: deri türü chip'i + kalınlık mm + dikiş sayısı + teslim tarihi.
Hareket: enter 1.08s cubic-bezier(.66,.02,.3,1) 21px st.108 · scroll top 64% 0.93s 23px once ·
  pin açık scrub 0.68 +155% · hover 430ms scale 1.052; prefers-reduced-motion zorunlu.
Yasak: metal perçin/parlama, gloss, cam/blur, gradient, 16px üstü radius, ikinci accent, sürekli dikiş animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kartlarda kesikli dikiş çerçevesi var, başka yerde tekrar etmiyor.
- [ ] Grain yalnız zemin katmanında.
- [ ] Her işte tür + kalınlık + dikiş + tarih.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="leather-craft"] {
  --bg: #e3cba9; --bg-2: #d7bd98;
  --surface: #f0e0c6; --surface-2: #e9d5b7;
  --ink: #2b1d12; --ink-soft: #5d452f; --ink-faint: #7f6748;
  --accent: #7a3f1d; --accent-ink: #f8ecda;
  --line: rgba(43,29,18,.22);
  --radius: 7px; --radius-lg: 16px;
  --shadow: 0 6px 16px -10px rgba(43,29,18,.45); --shadow-hard: 0 0 0 1px rgba(122,63,29,.4);
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Lora", Georgia, serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: .06;
  --danger: #8f2b1c; --danger-ink: #fbeee6;
  --ok: #3d5a33; --warn: #7d5a12;
}
```

Koyu mod bloğu `styles/130-leather-craft/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="leather-craft"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 5.23:1 · `ink-soft / surface-2` 6.22:1 · `accent-ink / accent` 7.04:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: deri: çift dikiş kenarı + kayış dili.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 1.08s` / `scroll 0.93s` (ikisi de ≤ 1.2 s).
