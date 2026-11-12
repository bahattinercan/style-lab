# 145 · Zero Gravity

> **Bir cümlede:** Panellerin yerçekimi yokmuş gibi kademeli kaydığı, ince yörünge yaylarının ve yavaş geçişlerin hâkim olduğu buz mavisi orbital pano.

| | |
|---|---|
| **Hissiyat** | sakin, ağırlıksız, ferah, yavaş |
| **En iyi** | uzay/iklim verisi vitrini, orbital görev sunumu, sakin teknoloji ürünü, immersive anlatı |
| **Kaçın** | yoğun operasyon konsolu, muhasebe tablosu, hızlı oyun arayüzü |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.41:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `styles/145-zero-gravity/tokens.json` → `[data-style="zero-gravity"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Zero Gravity, arayüzü **ağırlıksız bir istasyon içi** gibi kurar: kartlar dikeyde 4–8px kademeli kaymış durur, gölgeler hep aşağı düşer (yüzme hissi), her şey yavaş hareket eder (hover ≥ 480ms, giriş ≥ 1.0s). Zemin buz mavisi-beyaz, accent derin yeşildir; hiçbir köşe keskin değildir.

Üç kurucu karar: (1) **yavaşlık kuralı** — hız bu stilin karşıtıdır; 100ms altı geçiş yoktur, çünkü ağırlıksızlık ancak yavaşlıkta hissedilir; (2) **kademeli kayma** — kartlar sırayla 4/6/-4px kayar, ızgara hizası bozulmaz; (3) **ince yörünge** — 1.5px halka, ekran başına bir kez; süs değil yön göstergesi.

Display **Poiret One** (400): tel gibi ince geometrik harfler, geniş harf aralığıyla (0.06em) birlikte "havada duran" bir başlık üretir. Gövde Inter, etiketler IBM Plex Mono.

Bedeli: yavaş geçişler ve geniş boşluk yoğunluğu düşürür. Bu yüzden tablo yerine kart listesi kullanılır ve her kartta tek baskın değer bulunur.

### Ne değildir
- **Ethereal (29) değildir:** 29 Cormorant + sisli düşük kontrastla rüya estetiğidir (radius 20, blob); Zero Gravity'de kontrast yüksektir (gövde 15.95:1), display Poiret One ve yapı kart/kayma düzenidir.
- **Liquid Glass (09) değildir:** 09 cam ve hap yüzeylerle sıvı yansıma kurar; burada blur yoktur (`--blur: 0`), yüzeyler opak ve mattır.
- **Japandi (06) değildir:** 06 sıcak kağıt ve doğal tonlarla sakinlik kurar; Zero Gravity soğuk buz mavisi + derin yeşil kullanır.
- **Minimalism (01) değildir:** 01 nötr ve hareketsizdir; burada hareketin kendisi imzadır (yavaş ama sürekli yüzme).

### Nereden gelir
Uzay istasyonu iç mekânı (ağırlıksız modüller), orbital veri görselleştirme ve "sakin teknoloji" akımı. Ekranda yeniden kullanılmasının nedeni: hızlı animasyonların yorgunluğuna karşı **yavaş hareketin** dikkat toplaması. Klişeye dönüşmemesi için korunacak detay: kaymanın kademeli olması (rastgele değil) ve yörüngenin ince kalması.

### 3 saniyede tanıma testi
1. Zemin buz mavisi-beyaz; accent derin yeşil, üçüncü renk yok.
2. Kartlar dikeyde kademeli kaymış; gölge hep aşağı.
3. Başlık Poiret One: tel gibi ince, geniş harf aralıklı.
4. Her köşe yuvarlak (28–36px); keskin köşe yok.
5. Hareket yavaş: buton hover'ı neredeyse bir saniye sürüyor.

## Görsel imza
- **Kademeli kayma:** 2. kart `+6px`, 3. kart `-4px`; mobilde kayma kapanır.
- **Geniş gölge:** `0 30px 70px -48px`, tek katman; yön hep aşağı.
- **İnce yörünge:** 1.5px accent halka; hero ve sayfa zemininde bir kez.
- **Yüzen nav:** sayfadan 16px kopuk, 999px radius, hafif gölge.
- **Radius:** `--radius` 28px (kart içi, input), `--radius-lg` 36px (kart, modal); butonlar 999px.
- **Poiret One başlık:** 48px, 400, tracking 0.06em; kalınlaştırma yasak.
- **Doku:** `--grain .01` + çok soluk buz lekesi; gradient zemin yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eef4f2` | sayfa zemini (buz) | kart zemini |
| `--bg-2` | `#e3ecea` | ikincil zemin, input | yüzen kart |
| `--surface` | `#f8fbfa` | kart, panel | sayfa zemini |
| `--surface-2` | `#dfe9e6` | chip, ikincil yüzey, ray | birincil kart |
| `--ink` | `#0f1a19` | metin, başlık | dekoratif dolgu |
| `--ink-soft` | `#3f5450` | ikincil metin | başlık |
| `--ink-faint` | `#74857f` | yalnız dekoratif etiket/halka | etkileşimli metin |
| `--accent` | `#1d6b52` | birincil eylem, aktif yörünge | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(15,26,25,.13)` | kart kenarı, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` = **15.95:1** · `ink-soft/bg` = **7.27:1** · `accent-ink/accent` = **6.41:1** · `ink-faint/bg` = **3.49:1**.
- Tek vurgu kuralı: accent yalnız birincil eylem ve aktif yörünge. Alarm `--danger`, uyarı `--warn`, tamam `--ok`.
- Yasak kombinasyon: accent üstünde `--ink-soft`; iki farklı accent tonu.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poiret One (`--font-display`) | 48px / mobil 28px | 400 | 1.12 | `--tracking` 0.06em |
| H2 | Poiret One | 27px | 400 | 1.22 | 0.03em |
| H3 | Inter | 19px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.66 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 10–12px | 400/600 | 1.44 | 0.2em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 10 · 12 · 13 · 15 · 19 · 27 · 48.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.8vw, 48px); }`
- Gövde metni maksimum satır uzunluğu: 64 ch.
- Ağırlık kuralı: Poiret One yalnız 400; sentetik kalınlaştırma yasak. Gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 yörünge paneli 7/5 · 768 tek sütun, kayma kapanır · 390 başlık 28px |

- Asimetri kuralı: yörünge paneli 7/5; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 3 yüzen kart; dördüncü blok tam genişlik sakin bant olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | buz zemini |
| Kart | `--surface` | `0 30px 70px -48px rgba(8,26,24,.6)` | panel, kart, KPI |
| Yüzen katman | `--surface` + `--shadow` | aynı | modal, yüzen nav |

- Kenarlık formülü: `1px solid var(--line)`; gölge ile birlikte kullanılır (tek katman, geniş).
- Derinlik nereden gelir: geniş yumuşak gölge + kademeli kayma; iç gölge/bevel/blur yok.
- Radius: `--radius` 28px (input, kart içi), `--radius-lg` 36px (kart, modal); butonlar 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 26px | 999px | 13px/600 Inter 0.02em | `--accent` zemin, `--accent-ink`, `--shadow` | hover %90 (480ms) · active 1px · focus 3px accent + 3px offset · disabled %45 · loading yörünge 1 döngü |
| Buton (ikincil) | 46px | 0 26px | 999px | 13px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 46px | 0 18px | `--radius` | 15px Inter | `--surface`, 1px `--line` | focus 3px accent · error `--danger` · disabled %45 |
| Kart | içerik | 26px | `--radius-lg` | — | `--surface`, 1px `--line`, `--shadow` | kayma +6/−4px (desktop) |
| Chip / badge | 26px | 0 12px | 999px | 10px/600 mono 0.14em | `--surface-2`, 1px `--line` | seçili: accent zemin |
| Nav | 64px | 0 28px | 999px | 13px/400 | `--surface` + gölge, yüzen | aktif: accent alt çizgi |
| Tablo satırı | 46px | 10px 16px | 0 | 13px (sayı mono) | alt 1px `--line` | hover `--surface-2` |
| Modal / sheet | — | 28px | `--radius-lg` | 15px/400 | `--surface`, `--shadow`, %35 örtü | ortada yüzer |
| Toast | 44px | 10px 18px | 999px | 12px mono | `--surface`, `--shadow` | 4800ms, üst orta |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (3 seri) | yumuşak eğri 2px, eksen çizgisi yok |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` (iri yuvarlak hedefler için geniş).
- Dokunma hedefi: en az 44×44px; buton ve input 46px; yüzen nav öğeleri 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara; yörünge, uydu, denge işaretleri |
| Fotoğraf | Yok — ağırlıksız istasyon metaforu; fotoğraf yerine yörünge şeması |
| İllüstrasyon | Yalnız yörünge yayları ve ince halka |
| Doku | `--grain .01` + çok soluk buz lekesi |
| Logo alanı | Poiret One 400, 0.16em; 16px ince halka işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | Yörünge paneli 7/5; yüzen kart, ince halka, tek CTA | `shots/01-landing.png` |
| Dashboard | orta | 3 yüzen kart; tablo yerine kart listesi | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, 28px radius, yavaş odak | — |
| Liste / tablo | orta | 46px satır, boşluklu; satır hover'ı yavaş | — |
| Boş durum | düşük | Boş halka + tek CTA, geniş boşluk | — |
| Onboarding | orta | 3 adım, her adımda tek yüzen kart | — |
| Pricing | orta | Plan kartları yüzen kademe; öne çıkan accent halka | — |
| Giriş / ödeme | çok düşük | Tek yüzen panel, halka yok | — |
| Modal | orta | Ortada yüzen modal, %35 örtü | — |
| Bildirim / toast | düşük | Hap toast, yörünge yayı ile girer | — |
| Hata | düşük | `--danger` halka + "yörünge dışı" metni | — |
| Profil / ayar | orta | Hareket hızı (yavaş/normal), halka görünürlüğü | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **1.08s**, y **36px**, stagger **0.14** | `cubic-bezier(.2,.7,.15,1)` | `opacity` + `transform` |
| Scroll reveal | **1.05s**, trigger **top 74%**, y **30px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.32**, mesafe **+150%** (halka ölçeği büyür) | scrub doğrusal | `transform` (yörünge halkası) |
| Hover | **480ms**, görsel scale **1.018** | `ease-out` | `transform` |
| Basma | 200ms | aynı eğri | `transform` (1px) |
| Kart kayması | 320ms | aynı eğri | `transform` (±4–6px) |

- Bu stilin ölçülebilir imzası: `enter 1.08s / cubic-bezier(.2,.7,.15,1) / 36px / 0.14` + `scroll top 74% / 1.05s / 30px` + `pin scrub 1.32 / +150%` + `hover 480ms / 1.018`. `1.08s` giriş + `hover 480ms` + `scrub 1.32` üçlüsü katalogda yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; yüzme, kayma ve scrub kapanır, kartlar sabitlenir.
- Bu stile yasak hareket: sürekli yüzme döngüsü (reduced-motion karşılığı yoksa), çok katmanlı parallax, neon glow, hızlı flaş.

## Koyu mod

| Token | Açık (buz) | Koyu (gece yörüngesi) |
|---|---|---|
| `--bg` | `#eef4f2` | `#0b1514` |
| `--bg-2` | `#e3ecea` | `#101d1b` |
| `--surface` | `#f8fbfa` | `#142321` |
| `--surface-2` | `#dfe9e6` | `#1a2c29` |
| `--ink` | `#0f1a19` | `#e9f4f1` |
| `--ink-soft` | `#3f5450` | `#a9c2bb` |
| `--ink-faint` | `#74857f` | `#7c968f` |
| `--accent` | `#1d6b52` | `#6fd3a8` |
| `--accent-ink` | `#ffffff` | `#05170f` |
| `--line` | `rgba(15,26,25,.13)` | `rgba(233,244,241,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **16.50:1** · `ink-soft/bg` = **9.83:1** · `accent-ink/accent` = **10.18:1** · `ink-faint/bg` = **5.85:1**.
- Koyu modda değişen başka ne var: accent parlar (derin yeşil → nane), gölge opaklığı artar, halka `--accent` %35 → %45.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="zero-gravity"]`.

## Zorunlu kurallar
- Kartlar dikeyde 4–8px kademeli kayar; gölge yönü hep aşağı.
- Radius 28/36px; hiçbir köşe keskin değil.
- Poiret One yalnız başlıkta ve 400; gövde Inter, etiket mono.
- Yörünge yayı ekran başına bir kez, 1.5px.
- Tüm hareket yavaş: hover ≥ 480ms, giriş ≥ 1.0s, basma ≥ 200ms.
- Accent derin yeşil yalnız birincil eylem ve aktif yörünge.

## Yasaklar
- Keskin köşe / 0 radius.
- Neon glow, gradient zemin, cam blur.
- 100ms altı geçişler (ağırlıksız ritmi bozar).
- Sürekli yüzme animasyonu (reduced-motion karşılığı yoksa).
- 36px üzeri radius.
- Poiret One üzerinde 600/700.
- Yoğun tablo ve 12'den fazla satır.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 6.41:1; gövde 15.95:1; `ink-faint/bg` = 3.49:1 (dekoratif).
- `--ink-faint` yalnız dekoratif etiket ve halka; etkileşimli metin değil.
- Yavaş hareket düşük vestibüler risk taşır; yine de `prefers-reduced-motion` altında tüm yüzme ve scrub kapanır.
- Odak halkası 3px accent + 3px offset; krem/buz zeminde net.
- 390px'te kademeli kayma kapanır, başlık 28px; taşma yok.
- Ekran okuyucu: yörünge süsü `aria-hidden`, veri listesi tam metin.

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
| "Sisli" görünüyor | düşük kontrast + blur | kontrastı yükselt, blur'u kaldır |
| Hareket rahatsız | 100ms altı geçiş | 480ms+ hover, 1.0s+ giriş |
| Düzen dağınık | rastgele kayma | +6/−4px kademe kuralı |
| Kartlar yüzmüyor | gölge yönü karışık | gölge hep aşağı |
| Okunmuyor | Poiret One gövdede | Poiret yalnız başlık |
| Mobilde kayma | desktop kuralı korunmuş | 768 altında kayma kapat |

## Komşu stiller

- **Uyumlu:** `ethereal` — yumuşak atmosfer; kontrast artırılırsa ortak çalışır.
- **Uyumlu:** `liquid-glass` — yuvarlak form dili; blur kaldırılırsa uyumlu.
- **Uyumlu:** `japandi` — sakinlik ortak; sıcak-soğuk farkı bilinçli kullanılır.
- **Yasak:** `terminal-ui` — 0 radius mono ızgara ağırlıksız dili bozar.
- **Yasak:** `neo-brutalism` — sert kontur ve hızlı geçiş stille çelişir.
- **Yasak:** `pixel-art` — keskin pikseller yavaş yuvarlak formu reddeder.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.grc.nasa.gov/www/k-12/airplane/orbit.html | yörünge yayı ve hız dili |
| https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station | ağırlıksız ortam metaforu |
| https://www.nngroup.com/articles/animation-duration/ | yavaş geçiş süreleri |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | hareketi kapatma zorunluluğu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Zero Gravity (styles/145-zero-gravity/style.md, tokens.json)
Token: sadece [data-style="zero-gravity"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Poiret One 400 (tracking .06em, yalnız başlık), gövde Inter 400/600,
  etiket IBM Plex Mono .2em. Ölçek 10/12/13/15/19/27/48; gövde ölçü 64ch.
Yüzey: buz mavisi-beyaz (#eef4f2); radius 28/36px, hap buton 999px; kartlar dikeyde 4-8px
  kademeli kayar, gölge hep aşağı (0 30px 70px -48px), tek katman.
Imza: ince yörünge halkası (1.5px, ekran başına 1) + yüzen nav (999px, sayfadan kopuk)
  + yavaş hareket (hover >= 480ms, giriş >= 1.0s).
Renk: tek accent #1d6b52 (eylem + aktif yörünge); alarm --danger, uyarı --warn.
Hareket: enter 1.08s cubic-bezier(.2,.7,.15,1) y36 stagger .14; scroll top 74% 1.05s y30 once;
  1 pin scrub 1.32 (+150%); hover 480ms scale 1.018; reduced-motion'da yüzme kapanır.
Yasak: keskin köşe, neon glow, gradient/blur, 100ms altı geçiş, 36px üstü radius, yoğun tablo.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kartlar kademeli kaymış, gölge hep aşağı.
- [ ] Radius 28/36px; keskin köşe yok.
- [ ] Hover ≥ 480ms, giriş ≥ 1.0s.
- [ ] Kontrast: gövde 15.95:1, accent üstü 6.41:1.
- [ ] Yörünge halkası ince ve tek.
- [ ] 390px'te kayma kapalı, taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket yok.

## Token

```css
[data-style="zero-gravity"] {
  --bg: #eef4f2; --bg-2: #e3ecea;
  --surface: #f8fbfa; --surface-2: #dfe9e6;
  --ink: #0f1a19; --ink-soft: #3f5450; --ink-faint: #74857f;
  --accent: #1d6b52; --accent-ink: #ffffff;
  --line: rgba(15,26,25,.13);
  --radius: 28px; --radius-lg: 36px;
  --shadow: 0 30px 70px -48px rgba(8,26,24,.6); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "Poiret One", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: .01;
  --danger: #9c2418; --danger-ink: #ffffff;
  --ok: #1d6b52; --warn: #7a5205;
}
```

Koyu mod bloğu `styles/145-zero-gravity/token-block.css` içinde `[data-theme="dark"][data-style="zero-gravity"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
