# 136 · Spekülatif Bilim-Kurgu

> **Bir cümlede:** Anlatının içinden çıkmış bir enstrüman plakası: açık kemik zemin, gravür çift çerçeve, radyal kadran tiki ve tek sinyal ambarıyla kurulmuş diegetic arayüz.

| | |
|---|---|
| **Hissiyat** | meraklı, törensel, ölçülü, yabancı |
| **En iyi** | kurgu/oyun arayüzü, marka hikâye sitesi, sergi kurulumu, spekülatif ürün konsepti |
| **Kaçın** | ödeme/güvenlik ekranı, kurumsal SaaS, hızlı ticaret — diegetic dil güveni yavaşlatır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 6.84:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `kit/tokens.css` → `[data-style="speculative-scifi"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Spekülatif Bilim-Kurgu, arayüzü **anlatının içindeki bir cihazın plakası** gibi kurar: açık kemik zemin, her yüzeyde 1px dış + 4px iç gravür çerçeve, radyal kadran tikleri ve mono ölçü etiketleri (`7.42 AE`, `SEKTÖR 7`, `Δ 0.03`). Tanıdıklığı feda eder; karşılığında **dünya kurma** gücü kazanır — kullanıcı arayüzü değil, o dünyanın enstrümanını okur.

Kurucu kararları üç tanedir. Birincisi **plaka dili**: gölge yok, ayrım çift çerçeve ve zemin tonu. İkincisi **diegetic ölçü**: her sayı bir birim ve bağlam taşır; süs metin yoktur. Üçüncüsü **tek sinyal rengi**: amber yalnız "ölçüm/aktif" anlamına gelir, dekorasyon değildir.

Bedeli: öğrenme eğrisi. Bu yüzden stilin doğal yeri vitrin ve anlatı; operasyonel ekranlarda yalnız hero/boş durum katmanı olarak kullanılır.

### Ne değildir
- **Cyberpunk (22) değildir:** 22 koyu zemin + neon cyan ile retro-teknoloji satar; 136 **açık kemik** zemin, sıcak amber ve gravür çerçeve kullanır (koyu neon yasak).
- **Synthwave (21) değildir:** 21 mor/pembe gradyan ve ızgara perspektifi taşır; 136'da gradyan yok, 2px radius ve mono ölçü var.
- **Lab Instrument (50) değildir:** 50 ölçüm cihazıdır (kadran yayı, mavi accent, açık gri); 136 diegetic kurgu dilidir (amber accent, yabancı birimler, gravür plaka).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype teknik paftadır; 136 açık plaka + radyal kadran.

### Nereden gelir
Anlatı içi (diegetic) arayüz geleneğinden — bilim-kurgu filmlerinde karakterin gerçekten kullandığı ekranlar — ve spekülatif tasarım pratiğinden. Bugün geri dönüyor çünkü ürün siteleri "gelecek" anlatmak için gerçek dünya konvansiyonlarından çıkmak istiyor. Klişeye dönmemesi için korunacak detay: **her ölçünün birimli olması** ve çerçevenin çift kalması (dış 1px + iç 4px).

### 3 saniyede tanıma testi
1. Zemin açık kemik; her yüzeyde 1px dış ve 4px iç çerçeve görünüyor, gölge yok.
2. Radyal kadran tikleri (9° aralık) ve iki eşmerkezli halka çizgisi var.
3. Tüm etiketler mono büyük harf, `.16em` tracking; sayılar birimli (`AE`, `Δ`, `SEKTÖR`).
4. Buton 38px, radius 2px; hap köşe yok.
5. Tek sıcak vurgu ambar; ikinci parlak renk yok.

## Görsel imza
- **Gravür çift çerçeve:** dış `1px solid var(--line)` + `::after inset 4px` 1px ink %10.
- **Kadran tiki:** `repeating-conic-gradient` 0.6° tik / 9° aralık, accent %42; iki eşmerkezli halka (34% ve 58%).
- **Mono ölçü etiketi:** 10px, `.16em`, uppercase; değer + birim + bağlam (`7.42 AE · KATMAN 3`).
- **Plaka başlığı:** `◈ SEKTÖR 7 · KAYIT 12` biçiminde mono başlık; eyebrow `◈` öneki.
- **Radius disiplini:** 2px kontrol, 4px plaka; 6px üstü yasak.
- **Gölgesizlik:** `--shadow: none`; yüzen katman accent 1px çerçeveyle ayrılır.
- **Hareket imzası:** 410ms `cubic-bezier(.58,.02,.34,1)`, 11px — plaka "yerine oturur".

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e9e8e2` | sayfa zemini (kemik plaka) | kart zemini |
| `--bg-2` | `#dfded6` | nav, ikincil bant | birincil CTA |
| `--surface` | `#f4f3ee` | plaka / kart | sayfa zemini |
| `--surface-2` | `#eeede6` | chip, satır zemini | modal zemini |
| `--ink` | `#1c1a16` | başlık, gövde, ölçü değeri | dekoratif çizgi |
| `--ink-soft` | `#524d42` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#837c6d` | yalnız iç çerçeve ve kenar notu | etkileşimli metin |
| `--accent` | `#8a5a12` | kadran tiki, sinyal, birincil eylem | geniş dekoratif dolgu |
| `--accent-ink` | `#fff6e6` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(28,26,22,.16)` | dış çerçeve, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.15:1** · `ink-soft / bg` = **6.84:1** · `accent-ink / accent` = **5.51:1** · `ink-faint / bg` = **3.37:1** (yalnız iç çerçeve).
- Tek vurgu kuralı: tek sinyal ambarı. `--danger` (#a0301f), `--ok` (#2f6b3f), `--warn` (#7a5300) yalnız plaka uyarı satırında, metinle.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; kemik zemin üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch (`--font-display`) | 46px (mobil 28px) | 600 | 1.06 | `.02em` |
| H2 | Chakra Petch | 30px | 600 | 1.14 | `.04em` |
| H3 | Chakra Petch | 21px | 600 | 1.26 | `.04em` |
| Gövde | Space Grotesk (`--font-body`) | 16px | 400 | 1.58 | `0` |
| Küçük gövde | Space Grotesk | 13px | 400 | 1.55 | `0` |
| Etiket / ölçü | Share Tech Mono (`--font-mono`) | 10–11px | 500 | 1.4 | `.16em` |

- Ölçek oranı: **1.5** — kullanılan basamaklar 10 · 11 · 13 · 16 · 21 · 30 · 46.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 4.4vw, 46px); line-height: 1.06 }`.
- Gövde satır uzunluğu en fazla **64ch**; ölçü tabloları 96ch'e kadar genişleyebilir.
- Ağırlık kuralı: display 600, gövde 400/500, mono 500. 700 ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1232px (içerik 1200px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1232; 768 altında tek kolon, iç çerçeve 3px |

- Asimetri kuralı: ekran başına **1** asimetrik plaka (7/5) — kadran sol-altta ağırlıklı, metin sağda.
- Bölüm ritmi: art arda en fazla **3** plaka; dördüncüsü tam genişlik "kontrol bandı" olur.
- İç çerçeve boşluğu 4px'in altına inmez (gravür okunmalı).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | plaka zemini + 32px gravür ızgarası |
| Kart | `--surface` | yok | plaka: çift çerçeve |
| Yüzen katman | `--surface` + accent çerçeve | yok | modal, menü, toast |

- Kenarlık formülü: dış `1px solid var(--line)` + iç `::after inset 4px` `1px solid ink %10`.
- Derinlik nereden gelir: **hiçbir yerden** — düzlük kuraldır; sıralama çerçeve + zemin tonuyla.
- Radius: `--radius: 2px` (buton, input, chip), `--radius-lg: 4px` (plaka, modal). Üst sınır 4px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 38px | `0 16px` | 2px | 11px mono 600 uppercase `.16em` | accent dolgu, accent-ink metin, gölge yok | hover: accent %86 + ink · active: translateY(1px) + iç çizgi · focus: 2px accent outline + 2px offset · disabled: opacity .45 + kesikli · loading: kadran tiki %0→%100 (700ms) |
| Buton (ikincil) | 38px | `0 16px` | 2px | 11px mono | şeffaf + 1px `--line` | hover: `--surface-2` |
| Input | 38px | `0 12px` | 2px | 15px Space Grotesk | `--surface` + 1px `--line` | focus: accent çerçeve + 2px outline offset 1px · error: `--danger` çerçeve + 10px mono not · disabled: opacity .45 |
| Kart (plaka) | içerik | 20px | 4px | H3 + gövde | `--surface` + çift çerçeve, gölge yok | hover: iç çerçeve accent %40 |
| Chip / badge | 20px | `0 6px` | 2px | 10px mono `.16em` | `--surface-2` + 1px `--line` | accent: accent dolgu + accent-ink metin |
| Nav | 52px | `0 24px` | 0 | 14px Space Grotesk 500 | `--bg-2` + alt 3px tik şeridi | aktif: accent metin |
| Tablo satırı | 36px | `6px 10px` | — | 14px Space Grotesk, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 24px | 4px | 21px display + mono plaka başlığı | `--surface` + 1px accent çerçeve | açılış: 11px oturma, 410ms |
| Toast | 34px | `8px 12px` | 2px | 12px mono | `--surface` + sol uçta 2px accent çizgi | hata: çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; kadran yayı + tik, sütun yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; çift çerçeve üstünde 1px offset kaybolur.
- Dokunma hedefi: en az 44×44px; 38px buton mobilde `min-height: 44px`. Tik işaretleri dekoratif (`aria-hidden`).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, keskin köşe, 20px ızgara; kadran/tik/ok sembolleri |
| Fotoğraf | yok — diegetic arayüz fotoğraf taşımaz |
| İllüstrasyon | radyal kadran + tik zorunlu imza; yabancı ölçü birimleri |
| Doku | grain %3 + 32px gravür ızgarası; parlak yüzey yok |
| Logo alanı | plaka kenarında mono büyük harf + sinyal noktası, 20px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | solda H1 + ölçü etiketleri, sağda kadran; plaka başlığı | `shots/01-landing.png` |
| Dashboard | orta | plaka ızgarası; kadran + mono tablo | `shots/02-dashboard.png` |
| Form | düşük | 38px input, mono etiket sağda; birim seçici | — |
| Liste / tablo | düşük | 36px satır, tabular değer + birim | — |
| Boş durum | orta | boş plaka: iç çerçeve + "KAYIT YOK" mono | — |
| Onboarding | yüksek | 3 adım: tarama → kalibrasyon → kayıt | — |
| Pricing | orta | iki plaka; öne çıkan accent iç çerçeve | — |
| Giriş / ödeme | çok düşük | kadran yok; yalnız plaka ve tek CTA | — |
| Modal | orta | plaka başlığı + accent çerçeve | — |
| Bildirim / toast | orta | sağ-alt, 2px accent sinyal çizgisi | — |
| Hata | orta | plaka uyarı satırı: `! SEKTÖR 7 · ÖLÇÜM DIŞI` | — |
| Profil / ayar | orta | birim ve kalibrasyon ayarları | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **410ms** | `cubic-bezier(.58,.02,.34,1)` | `opacity` + `translateY(11px)`; stagger **0.047s** |
| Scroll reveal | **430ms** | aynı eğri | trigger `top 99%`, `translateY(17px)`, `once: true` |
| Pin / scrub | **0.58** | `transform` | **açık** — kadran `+115%` mesafede pin + scrub (ekran başına 1) |
| Basma | **90ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 200ms | aynı eğri | opacity + 6px |
| Hover | **185ms** | aynı eğri | görsel ölçek **1.011** |
| Ödül / vurgu | 430ms | aynı eğri | kadran tiki %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.41s / cubic-bezier(.58,.02,.34,1) / 11px / 0.047` · `scroll = top 99% / 0.43s / 17px / once` · `pin = true / scrub 0.58 / +115%` · `hover = 185ms / 1.011`.
- Bant içi fark: 137'den (0.96s / 38px / pin yok), 138'den (0.27s / 1px), 139'den (1.08s / 46px / scrub 1.18), 140'tan (0.61s / 21px / scrub 0.4) en az dört parametrede ayrışır. Mevcut 126 stil içinde en yakını 61-calibration-lab (`0.42s / .16,.84,.44,1 / 8px`) — eğri, offset, trigger (top 99%), pin ve hover'da farklı; `top 99%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, kadran tiki ve pin statik.
- Bu stile yasak hareket: sürekli dönen kadran iğnesi, blur geçişi, yay/overshoot, saniyede 3 üstü flash.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e9e8e2` | `#14120e` |
| `--surface` | `#f4f3ee` | `#211e17` |
| `--ink` | `#1c1a16` | `#f0ece1` |
| `--accent` | `#8a5a12` | `#e0a33a` |
| `--ink-soft` | `#524d42` | `#bcb4a2` |
| `--line` | `rgba(28,26,22,.16)` | `rgba(240,236,225,.16)` |

- Koyu modda değişen başka ne var: iç çerçeve ink %10 → %14, kadran tiki opaklığı %42 → %52 (siyahta görünmesi için), accent bir ton açılır (`#e0a33a`).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Her yüzey gravür plakadır: dış 1px + iç 4px çerçeve, gölge yok.
- Ölçüler diegetic ve birimlidir (`7.42 AE`, `Δ 0.03`, `SEKTÖR 7`); birimsiz sayı yok.
- Tek sinyal rengi accent; kadran tikleri ve aktif durum accent ile yanar.
- Başlık Chakra Petch 600; etiket mono büyük harf `.16em`.
- Radius 2px (kontrol) / 4px (plaka); hap köşe yok.
- Kadran/tik motifi en az bir bölümde görünür — süs değil, ölçü göstergesi.

## Yasaklar
- Koyu neon zemin, cyberpunk/synthwave paleti.
- Yumuşak gölge, blur, cam, gradyan.
- Sürekli dönen iğne veya tarama animasyonu.
- Fotoğraf, 3B render, emoji.
- Hap radius ve 6px üstü radius.
- Anlamsız süs çizgisi (her çizgi bir ölçü taşır).

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.84:1** (eşik 4.5); `ink-faint / bg` = **3.37:1** yalnız iç çerçeve ve kenar notunda.
- `--ink-faint` etkileşimli metinde kullanılmaz; ölçü değerleri `--ink` (14.15:1).
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon yok; `prefers-reduced-motion` kadran animasyonunu kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. `repeating-conic-gradient` desteklenmezse kadran yerine statik 12 tik çizilir.
- Odak görünürlüğü: 2px accent outline + 2px offset; çift çerçeve üstünde 1px offset kaybolur.
- Diegetic metin yine de anlaşılır olmalı: yabancı birim ilk kullanımda açıklanır (`AE — ölçü birimi`).

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
| "Retro terminal" gibi | koyu zemin + neon eklenmiş | açık kemik zemin + amber |
| Plaka hissi kayboluyor | iç çerçeve unutulmuş | `::after inset 4px` çerçeve ekle |
| Ölçüler anlamsız | birim yok | her sayıya birim + bağlam yaz |
| Kadran gürültü | tik aralığı 4° altı | 9° aralık, 0.6° tik |
| Gölge sızmış | kart hover'ında gölge | gölge yok; accent çerçeve kullan |
| Okunmuyor | `--ink-faint` metin | metin `--ink`/`--ink-soft` |

## Komşu stiller

- **Uyumlu:** `blueprint-drawing` — ölçü/pafta dili; Blueprint yalnız teknik ek bölümde garnitür.
- **Uyumlu:** `lab-instrument` — enstrüman dili; Lab yalnız ölçüm panelinde.
- **Uyumlu:** `calibration-lab` — kalibrasyon adımları; tek bölümde.
- **Yasak:** `claymorphism` — pastel 3B formlar plaka ciddiyetini bozar.
- **Yasak:** `dopamine-ui` — çoklu doygun renk tek sinyal kuralını kırar.

| Eksen (5) | 136 · Spekülatif | En yakın komşu |
|---|---|---|
| Display ailesi | Chakra Petch 600 | 50 Lab: Michroma |
| Zemin bandı | açık kemik `#e9e8e2` | 56 Blueprint: koyu `#0a1b2b` |
| Accent hue | ambar `#8a5a12` | 50: mavi `#1a5c8a` |
| Radius ölçeği | 2 / 4px | 50: 6 / 10px |
| İmza motif / motion | radyal kadran tiki · 0.41s · top 99% | 50: kadran yayı · 0.42s · top 86% |

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Diegetic_(narrative) | anlatı içi arayüz mantığı |
| https://en.wikipedia.org/wiki/Speculative_design | gelecek senaryosu ve inandırıcılık |
| https://en.wikipedia.org/wiki/Head-up_display | kadran/tik ölçü dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | açık plaka üstü metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Spekülatif Bilim-Kurgu (styles/136-speculative-scifi/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="speculative-scifi"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg kemik + 32px gravür ızgarası (iki linear-gradient, ink %6).
Tipografi: --font-display Chakra Petch 46/30/21 (600, .02–.04em); --font-body Space Grotesk 16px/1.58;
  --font-mono Share Tech Mono 10–11px ölçü etiketi (.16em, uppercase, BİRİM zorunlu).
Yüzey: gölge YOK; dış 1px var(--line) + ::after inset 4px 1px ink %10 gravür çerçeve.
  Radius 2px kontrol, 4px plaka.
Renk: tek sinyal ambarı #8a5a12; ink/bg 14.15:1, ink-soft/bg 6.84:1, accent-ink/accent 5.51:1, ink-faint/bg 3.37:1 (iç çerçeve).
İmza: radyal kadran tiki (0.6° tik / 9° aralık) + diegetic plaka başlığı `◈ SEKTÖR 7 · KAYIT 12`.
Hareket: enter 410ms cubic-bezier(.58,.02,.34,1) 11px stagger .047; scroll top 99% 430ms 17px once;
  pin scrub 0.58 (+115%, ekran başına 1); hover 185ms görsel 1.011. prefers-reduced-motion zorunlu.
Yasak: koyu neon zemin, gölge/blur/cam, sürekli dönen iğne, fotoğraf/3B render, hap radius, birimsiz sayı.
Çıktı: bileşen kodu + tek paragraf not (kadranı ve ölçü etiketini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: radyal kadran, çift çerçeve, mono ölçü etiketi, plaka başlığı.
- [ ] Hard-coded renk/gölge/radius yok; gölge hiç kullanılmamış.
- [ ] Kontrast: 14.15 / 6.84 / 5.51 — hepsi eşik üstü.
- [ ] Her sayı birimli; odak halkası 2px accent + 2px offset.
- [ ] 390px'te tek kolon, iç çerçeve 3px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken kadran animasyonu duruyor.

## Token

```css
[data-style="speculative-scifi"] {
  --bg: #e9e8e2; --bg-2: #dfded6;
  --surface: #f4f3ee; --surface-2: #eeede6;
  --ink: #1c1a16; --ink-soft: #524d42; --ink-faint: #837c6d;
  --accent: #8a5a12; --accent-ink: #fff6e6;
  --line: rgba(28,26,22,.16);
  --radius: 2px; --radius-lg: 4px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Chakra Petch", "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .06em; --blur: 0px; --grain: 3;
  --danger: #a0301f; --danger-ink: #ffffff;
  --ok: #2f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="speculative-scifi"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
