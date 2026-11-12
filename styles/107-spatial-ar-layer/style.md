# 107 · Uzamsal AR Katman

> **Bir cümlede:** Ekranı üç derinlik düzlemine bölen stil: perspektif ızgara zemin, çapa artılı yüzen katmanlar, mono koordinat etiketleri ve kapatılabilir pin-scrub paralaks.

| | |
|---|---|
| **Hissiyat** | uzamsal, teknik, katmanlı, keşifçi |
| **En iyi** | AR/uzamsal ürün paneli, dijital ikiz (digital twin), saha konumlandırma, 3B veri görüntüleyici |
| **Kaçın** | yoğun metin okuma ekranı, moda vitrini — perspektif ızgara uzun okumada yorar |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (parallax + cam nav; en düşük metin çifti 6.60:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="spatial-ar-layer"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Uzamsal AR Katman, arayüzü **konumlandırılmış düzlemler** olarak kurar: arka (z=0, gölgesiz, ızgara zemin), orta (z=1, `0 8px 20px`), ön (z=2, `0 18px 40px`). Her yüzen katman sol üstte çapa artısı (`+`) ve mono koordinat etiketi taşır. Düz ekran konforunu feda eder; karşılığında **nesnenin nerede olduğunu** okutan bir dil kazanır.

Kurucu kararları üç tanedir. Birincisi **üç düzlem kuralı**: gölge yüksekliği = z değeri; dördüncü gölge seviyesi yok. İkincisi **ızgara referanstır**: 40px zemin ızgarası ve 28px sahne ızgarası konum taşır, süs değildir. Üçüncüsü **paralaks kapatılabilir**: pin+scrub ekran başına 1, `prefers-reduced-motion` ile tamamen kapanır.

Bedeli: bilişsel yük. Uzun metin, form ve ödeme ekranlarında düzlem sayısı bire indirilir (yalnız z=1 kart).

### Ne değildir
- **AI-native Mesh (39) değildir:** 39 gradyan/ışıma ile atmosfer kurar; 107'de gradyan yok, gölge yüksekliği ve çapa artısı imzadır.
- **Atlas Console (51) değildir:** 51 harita zeminini kullanır (coğrafi veri); 107'de harita yok, perspektif ızgara ve z etiketleri var.
- **Glassmorphism (08) değildir:** 08 camı her yüzeye uygular; 107'de cam yalnız nav (%72 + 6px blur), gerisi opak.
- **Blueprint Çizimi (56) değildir:** 56 ölçü paftasıdır ve koyu cyanotype zemin kullanır; 107 açık zemin + katman derinliği.

### Nereden gelir
Uzamsal bilişim literatüründen (spatial computing: konum, çapa, derinlik) ve heads-up display (HUD) pratiğinden. Bugün geri dönüyor çünkü AR/VR ürünleri 2B ekranda da "uzam" anlatmak zorunda; klişeye dönmemesi için korunacak detay **gölge yüksekliğinin z ile birebir eşleşmesi** ve çapa işaretinin her yüzen katmanda bulunması.

### 3 saniyede tanıma testi
1. Zeminde 40px perspektif ızgara var; kartlar bu ızgaraya hizalı.
2. Her yüzen kartın sol üstünde `+` çapa işareti ve mono koordinat etiketi duruyor.
3. Üç farklı gölge yüksekliği seçilebiliyor (gölgesiz / orta / ön).
4. Nav yarı saydam: altındaki ızgara hafif bulanık görünüyor.
5. Etiketler mono büyük harf, `.14em` tracking; radius 12/20px, hap buton yok.

## Görsel imza
- **Perspektif ızgara:** gövdede iki `linear-gradient` (40px aralık, ink %6); sahne kartında 28px accent %22 ızgara.
- **Çapa artısı:** yüzen katman `::before` = `+` mono, accent, 12px, sol üst 6/8px.
- **Üç gölge yüksekliği:** z=0 gölgesiz, z=1 `0 8px 20px ink %12`, z=2 `0 18px 40px ink %14`.
- **Koordinat etiketi:** `x 1.24 · y 0.86 · z 0.42` biçiminde 10px mono, kart altbilgisinde.
- **Cam yalnız nav:** `surface %72` + blur 6px; opak fallback zorunlu.
- **Radius disiplini:** 12px kontrol / 20px katman; hap buton yok.
- **Hareket imzası:** 860ms `cubic-bezier(.16,.9,.24,1)`, 25px — katman "oturur", sıçramaz.
- **Landing hero (QA):** üç yüzen AR katmanı (`rotateY` perspektif), `+` çapa işareti ve koordinat altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e9edf5` | sayfa zemini (uzam) | kart zemini |
| `--bg-2` | `#dfe5f0` | ikincil düzlem, nav | birincil CTA |
| `--surface` | `#f7f9fc` | yüzen katman (z=1/z=2) | sayfa zemini |
| `--surface-2` | `#eef2f9` | chip, satır zemini | modal zemini |
| `--ink` | `#161a24` | başlık, gövde, koordinat | dekoratif çizgi |
| `--ink-soft` | `#4a5364` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#78818f` | yalnız ızgara/eksen etiketi | etkileşimli metin |
| `--accent` | `#2a4bd7` | çapa, aktif katman, birincil eylem | geniş dekoratif dolgu |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(22,26,36,.16)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.82:1** · `ink-soft / bg` = **6.60:1** · `accent-ink / accent` = **6.80:1** · `ink-faint / bg` = **3.35:1** (yalnız ızgara/eksen).
- Tek vurgu kuralı: tek accent (çapa mavisi). `--danger` (#a52a3c), `--ok` (#1f6b3f), `--warn` (#7a5300) katman etiketiyle birlikte.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; ızgara üstünde `--ink-faint` metin (3.35:1).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch (`--font-display`) | 44px (mobil 28px) | 600 | 1.08 | `.01em` |
| H2 | Chakra Petch | 30px | 600 | 1.16 | `.02em` |
| H3 | Chakra Petch | 21px | 600 | 1.28 | `.02em` |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.60 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `0` |
| Etiket / koordinat | Share Tech Mono (`--font-mono`) | 10px | 400 | 1.4 | `.14em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 10 · 11 · 13 · 16 · 21 · 30 · 44.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 4.4vw, 44px); line-height: 1.08 }`.
- Gövde satır uzunluğu en fazla **62ch**; perspektif zemin üstünde 56ch'i geçmez.
- Ağırlık kuralı: display 600, gövde 400/600, mono 400. İtalik ve 300 yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1200px (içerik 1160px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında sahne tek düzleme iner (z=1) |

- Asimetri kuralı: ekran başına **1** uzamsal sahne; paneller 7/5 veya 8/4 oranında yerleştirilir, eşit kolon dizilimi yok.
- Bölüm ritmi: art arda en fazla **3** yüzen katman; dördüncüsü z=0 zemin bandı olur.
- Katman arası boşluk en az 16px (gölgeler üst üste binmez).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin (z=0) | `--bg` / `--bg-2` | yok | ızgara, nav, bölüm bandı |
| Katman (z=1) | `--surface` | `0 8px 20px rgba(22,26,36,.12)` | panel, kart, KPI, alan |
| Ön katman (z=2) | `--surface` | `var(--shadow)` = `0 18px 40px rgba(22,26,36,.14)` | modal, seçili kart, toast |

- Kenarlık formülü: `1px solid var(--line)` her düzlemde; z arttıkça gölge büyür, çerçeve değişmez.
- Derinlik nereden gelir: **gölge yüksekliği + ızgara**. Renkli glow ve ofset gölge yok.
- Radius: `--radius: 12px` (buton, input, chip), `--radius-lg: 20px` (kart, panel, modal). Hap yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | `0 18px` | 12px | 13px display 600 `.06em` uppercase | accent dolgu, accent-ink metin, `0 8px 20px ink %16` | hover: accent %88 + ink, gölge 12/26 · active: translateY(1px), gölge 4/12 · focus: 2px accent outline + 3px offset · disabled: opacity .45 + kesikli · loading: çapa halkası %0→%100 (700ms) |
| Buton (ikincil) | 42px | `0 18px` | 12px | 13px display 600 | `--surface` + 1px `--line`, gölge yok | hover: `--surface-2` |
| Input | 42px | `0 14px` | 12px | 15px Jost | `--surface` + 1px `--line` | focus: accent çerçeve + 2px outline offset 2px · error: `--danger` çerçeve + 11px mono etiket · disabled: opacity .45 |
| Kart | içerik | 22px | 20px | H3 + gövde | `--surface` + 1px `--line` + z gölgesi | hover: z=1 → z=2 gölgeye geçer (tek kademe) |
| Chip / badge | 22px | `0 8px` | 12px | 10px mono `.12em` | `--surface-2` + 1px `--line` | accent: accent %14 zemin + accent metin |
| Nav | 56px | `0 24px` | 0 | 14px Jost 500 | cam: `surface %72` + blur 6px + alt hairline | aktif: accent metin |
| Tablo satırı | 40px | `6px 12px` | — | 13px Jost, tabular-nums | satır arası 1px `--line` | hover: `--surface-2`; seçili: z=2 gölge |
| Modal / sheet | içerik | 24px | 20px | 21px display + mono koordinat | `--surface` + 1px accent + `0 18px 40px` | açılış: 25px oturma, 860ms |
| Toast | 38px | `8px 14px` | 12px | 13px Jost 600 | `--surface` + sol uçta 6px accent çapa | hata: çapa `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; eksenler mono |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — ızgara üstünde 1px offset kaybolur.
- Dokunma hedefi: en az 44×44px; 42px buton mobilde `min-height: 44px`. Çapa işareti dekoratif (`aria-hidden`).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 24px ızgara; çapa, kesişim, ölçü sembolleri |
| Fotoğraf | mekân fotoğrafı yalnız z=0 zeminde, %40 doygunluk, üstüne katman etiketleri |
| İllüstrasyon | tel kafes (wireframe) küp + perspektif ızgara; imza öğe |
| Doku | grain %2; katmanlarda blur 6px (derinlik bulanıklığı, cam değil) |
| Logo alanı | mono büyük harf + çapa işareti, 24px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5: solda metin (z=0), sağda üç katmanlı sahne | `shots/01-landing.png` |
| Dashboard | orta | 4 KPI z=1, tek ön katman (z=2) detay paneli | `shots/02-dashboard.png` |
| Form | düşük | tek z=1 kart; ızgara arka planda %50 opaklık | — |
| Liste / tablo | düşük | 40px satır, seçili satır z=2 gölge | — |
| Boş durum | orta | z=0 ızgara + "çapa bekleniyor" mono etiketi | — |
| Onboarding | yüksek | 3 adım: tarama → çapa yerleştir → katman ekle | — |
| Pricing | orta | iki plan kartı z=1; öne çıkan kart z=2 | — |
| Giriş / ödeme | çok düşük | tek düzlem, ızgara yok; süs sıfır | — |
| Modal | orta | z=2 + koordinat etiketi + accent çerçeve | — |
| Bildirim / toast | orta | sağ üst, z=2, accent çapa noktası | — |
| Hata | düşük | çapa `--danger`, gölge korunur | — |
| Profil / ayar | orta | iki kolon z=1 kart; koordinat etiketleri | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **860ms** | `cubic-bezier(.16,.9,.24,1)` | `opacity` + `translateY(25px)`; stagger **0.088s** |
| Scroll reveal | **810ms** | aynı eğri | trigger `top 73%`, `translateY(28px)`, `once: true` |
| Pin / scrub | **0.42** | `transform` | **açık** — sahne `+105%` mesafede pin + scrub (ekran başına 1) |
| Basma | **140ms** | aynı eğri | `translateY(1px)` + gölge bir kademe küçülür |
| Geçiş / sayfa | 320ms | aynı eğri | opacity + 12px |
| Hover | **285ms** | aynı eğri | görsel ölçek **1.008** |
| Ödül / vurgu | 860ms | aynı eğri | seçili katman z=1 → z=2 gölgeye geçer (tek kez) |

- İmza ölçüleri: `enter = 0.86s / cubic-bezier(.16,.9,.24,1) / 25px / 0.088` · `scroll = top 73% / 0.81s / 28px / once` · `pin = true / scrub 0.42 / +105%` · `hover = 285ms / 1.008`.
- Bant içi fark: 106'dan (0.37s / 2px / pin yok), 108'den (0.19s / 5px), 109'dan (0.51s / 15px / scrub 1.3), 110'den (0.73s / 19px) en az dört parametrede ayrışır. Mevcut 93 stil içinde en yakını 39-ai-native-mesh (`0.7s / expo.out / 20px / 0.06`) — süre, eğri, offset, trigger, scrub (0.42) ve hover'da farklı.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, katman kayması durur (statik z gölgeleri kalır).
- Bu stile yasak hareket: kullanıcı kontrolü olmayan sürekli parallax, saniyede 3 üstü flash, yatay kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e9edf5` | `#0c1017` |
| `--surface` | `#f7f9fc` | `#161d29` |
| `--ink` | `#161a24` | `#e8edf6` |
| `--accent` | `#2a4bd7` | `#7d95ff` |
| `--ink-soft` | `#4a5364` | `#a7b2c4` |
| `--line` | `rgba(22,26,36,.16)` | `rgba(232,237,246,.16)` |

- Koyu modda değişen başka ne var: ızgara opaklığı %6 → %10 (siyahta görünmesi için), z=2 gölgesi yerine 1px accent çerçeve öne çıkar, accent bir ton açılır.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Üç derinlik düzlemi zorunlu: z=0 gölgesiz, z=1 `0 8px 20px`, z=2 `0 18px 40px`.
- Her yüzen katman çapa artısı (`+`) ve koordinat etiketi (x, y, z) taşır.
- Perspektif ızgara konum referansıdır; süs olarak çoğaltılmaz.
- Radius 12px kontrol / 20px katman; hap buton yok.
- Cam yalnız nav: blur `var(--blur)` = 6px, opaklık %72, opak fallback zorunlu.
- Parallax yalnız pin+scrub ile, ekran başına 1 ve kapatılabilir.

## Yasaklar
- Serif display ve dekoratif illüstrasyon.
- Renkli glow / neon kenar.
- Kalın 3px+ çerçeve, hap buton.
- Kullanıcının kapatamadığı sürekli parallax.
- Opak fallback olmadan cam katman.
- Konum taşımayan süs ızgarası.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.60:1** (eşik 4.5); `ink-faint / bg` = **3.35:1** yalnız ızgara/eksen etiketinde.
- `--ink-faint` etkileşimli metinde kullanılmaz; koordinat etiketi `--ink-soft` ile yazılır (10px altına inilmez).
- Hareket/parlama hassasiyeti: orta-yüksek — parallax hareketi kapatılabilir olmalı (WCAG 2.3.3); `prefers-reduced-motion` pin ve geçişleri durdurur.
- Cam nav: `@supports not (backdrop-filter: blur(1px))` → opak `--bg-2` fallback.
- Odak görünürlüğü: ızgara üstünde 2px accent outline + **3px** offset; offset 1px ızgaraya karışır.

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
| "Düz kartlar" hissi | tüm katmanlar aynı gölge | z=0/1/2 gölge yüksekliklerini ayır |
| Izgara gürültü | ızgara %10 üstü veya 20px altı aralık | %6 ve 40px kullan |
| Baş dönmesi | parallax kapatılamıyor | pin+scrub tek, `prefers-reduced-motion` desteği |
| Cam okunmuyor | opaklık %60 altı | %72 + blur 6px, opak fallback |
| Katmanlar üst üste | boşluk 8px altı | katman arası ≥16px |
| Mobilde karmaşa | z=2 korunmuş | 768 altı tek düzlem |

## Komşu stiller

- **Uyumlu:** `ai-native-mesh` — aynı uzamsal/üretken dünya; Mesh yalnız z=0 zemininde garnitür.
- **Uyumlu:** `liquid-glass` — cam nav olarak tek katmanda.
- **Uyumlu:** `atlas-console` — coğrafi bağlam gerektiğinde harita katmanı.
- **Yasak:** `scrapbook` — kolaj/eğik kâğıt dili uzam ızgarasını bozar.
- **Yasak:** `memphis` — süs geometrisi konum etiketlerinin anlamını gölgeler.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Spatial_computing | katman ve konum modeli |
| https://developer.apple.com/design/human-interface-guidelines/spatial-layout | derinlik ve ölçek kuralları |
| https://www.w3.org/TR/webxr/ | uzamsal çapa ve oturum durumları |
| https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html | hareketle tetiklenen kontrol sınırı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Uzamsal AR Katman (styles/107-spatial-ar-layer/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="spatial-ar-layer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg + 40px perspektif ızgara (iki linear-gradient, ink %6); sahne kartında 28px accent %22 ızgara.
Tipografi: --font-display Chakra Petch 44/30/21 (600, .01em); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10px koordinat etiketi (.14em, uppercase).
Yüzey: z=0 gölgesiz / z=1 0 8px 20px ink %12 / z=2 var(--shadow) 0 18px 40px ink %14.
  Radius 12px kontrol, 20px katman; hap buton yok. Cam yalnız nav (surface %72 + blur 6px, opak fallback).
Renk: tek accent #2a4bd7 (çapa mavisi). ink/bg 14.82:1, ink-soft/bg 6.60:1, accent-ink/accent 6.80:1, ink-faint/bg 3.35:1.
İmza: çapa artısı (+) sol üstte + `x · y · z` koordinat etiketi altta.
Hareket: enter 860ms cubic-bezier(.16,.9,.24,1) 25px stagger .088; scroll top 73% 810ms 28px once;
  pin scrub 0.42 (+105%, ekran başına 1); hover 285ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: serif, renkli glow, kalın çerçeve, hap buton, kapatılamayan parallax, süs ızgarası.
Çıktı: bileşen kodu + tek paragraf not (çapa ve z etiketini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: perspektif ızgara, çapa artısı, üç gölge yüksekliği, koordinat etiketi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 14.82 / 6.60 / 6.80 — hepsi eşik üstü.
- [ ] Cam nav'da opak fallback var; odak halkası 2px accent + 3px offset.
- [ ] 390px'te tek düzlem, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve katman kayması duruyor.

## Token

```css
[data-style="spatial-ar-layer"] {
  --bg: #e9edf5; --bg-2: #dfe5f0;
  --surface: #f7f9fc; --surface-2: #eef2f9;
  --ink: #161a24; --ink-soft: #4a5364; --ink-faint: #78818f;
  --accent: #2a4bd7; --accent-ink: #ffffff;
  --line: rgba(22,26,36,.16);
  --radius: 12px; --radius-lg: 20px;
  --shadow: 0 18px 40px rgba(22,26,36,.14); --shadow-hard: none;
  --font-display: "Chakra Petch", "Jost", system-ui, sans-serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 6px; --grain: 2;
  --danger: #a52a3c; --danger-ink: #ffffff;
  --ok: #1f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="spatial-ar-layer"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
