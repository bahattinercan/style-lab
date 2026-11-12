# 52 · Experiment Split

> **Bir cümlede:** Her kararı iki panelin yan yana kanıtıyla veren; kontrol/varyant ayrımını renk değil etiket, ölçü ve tek kez çizilen bölme çizgisiyle kuran deney masası.

| | |
|---|---|
| **Hissiyat** | ölçülü, kanıtçı, sakin, karşılaştırmalı |
| **En iyi** | deney (A/B) paneli, ürün analitiği, fiyat/teklif testi, özellik bayrağı karşılaştırması |
| **Kaçın** | lüks vitrin, editoryal anlatı, çocuk/oyun ürünü — karşılaştırma yoksa stil yarısını kaybeder |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.71:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `styles/52-experiment-split/tokens.json` → `[data-style="experiment-split"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Experiment Split, arayüzü **karşılaştırma masası** olarak kurar: bir ekranda iddia edilen her sayı, iki panelin (kontrol ve varyant) yan yana durmasıyla kanıtlanır. Panel genişlikleri 6/6 eşittir; ayrım 1px dikey çizgi ve sol 3px renk bandıyla kurulur. Yuvarlatılmış yüzeyler (10/16px) karşılaştırmayı "tehdit" gibi değil "tablo" gibi okutur.

Üç kurucu karar: (1) **iki panel kuralı** — karşılaştırma olmayan ekranda stil tek panele düşer ve o panel farklı bir zemin tonu (`--surface-2`) alır, böylece "ikinci panel nerede?" sorusu doğmaz; (2) **delta rozeti dil bilgisi** — `+%4.2`, `-1.8 pp`, `n=12.480` gibi etiketler mono ve her zaman işaret + iki hane taşır; renk tek başına anlam vermez; (3) **sessiz accent** — indigo accent yalnız varyantı ve birincil eylemi işaretler; sonuç (kazanan) yazıyla söylenir.

Bedeli: bu stil "vitrin" değildir; tek ürünlü bir landing'de boşluk hissi zayıftır. Bu yüzden karşılaştırma olmayan sayfalarda bile bir "önce/sonra" ya da "eşik/referans" ikilisi kurulur.

### Ne değildir
- **Utility (44) değildir:** 44 ürün arayüzüdür, accent eylem rengidir, karşılaştırma kavramı yoktur; burada accent **varyant** kimliğidir.
- **Telemetry Grid (46) değildir:** 46 eşit hücreli metrik ızgarasıdır (tek eksen: değer); burada iki eksen ve iki panel vardır, tile 96px değil panel 320px+ yüksekliktedir.
- **Grand Tourer (41) değildir:** 41 lüks vitrin dilidir (serif display, geniş boşluk, tek konu); Experiment Split sans display + ölçüm etiketi kullanır.
- **Swiss Design (02) değildir:** 02 keskin köşe (0px radius) ve 3px siyah kural kullanır; burada 10/16px radius ve hairline çizgi var.

### Nereden gelir
İstatistiksel deney kültürü (A/B testleri, feature flag'ler) ve ürün analitiği panelleri (Optimizely, Amplitude, Statsig). Bugün yeniden kullanılmasının nedeni: deney sonuçlarının **karar** olarak okunması gerekliliği — panel, grafik değil cümle üretir. Klişeye dönüşmemesi için korunacak detay: kontrol panelinin her zaman nötr kalması ve delta rozetinin işaretsiz yazılmaması.

### 3 saniyede tanıma testi
1. Ekranda iki eşit panel var; birinin solunda 3px indigo bant, diğerinde nötr bant.
2. Paneller arasında tek dikey hairline çizgi; gölge yok.
3. Her sayının yanında örneklem (`n=…`) ya da güven aralığı etiketi var.
4. Delta rozetleri mono, işaretli (`+`/`−`) ve iki haneli.
5. Radius 10–16px; köşeler yumuşak ama butonlar hap değil.

## Görsel imza
- **Bölme çizgisi:** 1px `--line`, paneller arası tam yükseklik; 900px altında yatay 1px'e döner.
- **Panel bandı:** sol kenarda 3px renk bandı — varyant `--accent`, kontrol `--ink-faint`.
- **Delta rozeti:** 26px yükseklik, radius 999px, mono 11px, 0.08em; pozitif accent, negatif `--danger`, nötr `--ink-soft`.
- **Örneklem satırı:** 11px mono, `n=12.480 · GA %95`, her panelin altında.
- **Radius:** `--radius` 10px (kontrol, chip), `--radius-lg` 16px (panel, modal).
- **Gölge:** yalnız yüzen sonuç panelinde ve `0 12px 28px -24px` — kartlar gölgesiz.
- **Doku:** `--grain: 0`; ayrım için %4 opaklıkta 16px nokta ızgara yalnız hero panelinde.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f7fb` | sayfa zemini | panel zemini |
| `--bg-2` | `#eeeef6` | bölüm ayırıcı zemin, input zemini | kart zemini |
| `--surface` | `#ffffff` | karşılaştırma panelleri, kartlar | sayfa zemini |
| `--surface-2` | `#f2f2fa` | ikincil yüzey, tablo başlığı, chip | birincil panel |
| `--ink` | `#15151f` | metin, sayı, başlık | dekoratif dolgu |
| `--ink-soft` | `#55566b` | ikincil metin, kontrol bandı, eksen | kazanan vurgusu |
| `--ink-faint` | `#85869c` | yalnız dekoratif etiket/ayırıcı | etkileşimli metin |
| `--accent` | `#4b3ee8` | varyant bandı, birincil eylem, kazanan işareti | dekorasyon |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(21,21,31,.10)` | bölme çizgisi, tüm kenarlıklar | metin |

- Ölçülen kontrast: `ink/bg` = **16.96:1** · `ink-soft/bg` = **6.71:1** · `accent-ink/accent` = **6.66:1** · `ink-faint/bg` = **3.34:1**.
- Tek vurgu kuralı: accent yalnız **varyant** + birincil eylem. Kontrol her zaman nötr; kazanan bilgisi metinle verilir ("varyant %4.2 önde").
- Yasak kombinasyon: iki farklı accent tonu; kırmızı-yeşil ikilisiyle kazanan/kaybeden kodlaması.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk (`--font-display`) | 54px / mobil 32px | 700 | 1.03 | `--tracking` −0.025em |
| H2 | Space Grotesk | 29px | 700 | 1.16 | −0.015em |
| H3 | Inter | 20px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.6 | 0 |
| Etiket / sayı | Space Mono (`--font-mono`) | 11–13px | 400/700 | 1.45 | 0.12em |

- Ölçek oranı ≈ 1.45; kullanılan basamaklar: 11 · 13 · 15 · 20 · 29 · 54.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.2vw, 54px); }`
- Gövde metni maksimum satır uzunluğu: 64 ch; panel içi açıklama 46 ch.
- Ağırlık kuralı: 400 ve 600 (gövde), 700 (display). 300 yok — ince ağırlık sayıları zayıflatır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 iki panel 6/6 · 768 paneller üst alt, bölme yatay · 390 tek panel, delta rozeti panel başlığına taşınır |

- Asimetri kuralı: yalnız sonuç özeti 4/8 böler; karşılaştırma panelleri her zaman eşit.
- Bölüm ritmi: art arda en fazla 2 blok aynı hizada; üçüncü blok tam genişlik özet olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, bölüm ayırıcı |
| Kart | `--surface` | yok | karşılaştırma paneli, tablo |
| Yüzen katman | `--surface` + `--shadow` | `0 12px 28px -24px rgba(21,21,31,.35)` | sonuç özeti, modal |

- Kenarlık formülü: `1px solid var(--line)`; panel içinde ikincil ayırıcı aynı çizgi %60 opaklıkla.
- Derinlik nereden gelir: yalnız düzlem farkı ve sol renk bandı; ışık/parlama yok.
- Radius: `--radius` 10px (buton, input, chip), `--radius-lg` 16px (panel, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | `--radius` | 14px/600 Inter | `--accent` zemin, `--accent-ink`, gölge yok | hover %90 accent · active 1px + .995 scale · focus 2px accent · disabled %45 · loading üç nokta |
| Buton (ikincil) | 44px | 0 20px | `--radius` | 14px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 44px | 0 14px | `--radius` | 14px Inter | `--surface`, 1px `--line` | focus 2px accent · filled `--bg-2` · error `--danger` · disabled %45 |
| Kart | içerik | 20px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | hover yalnız tıklanabilir satırlarda |
| Chip / badge | 26px | 0 10px | 999px | 11px/600 mono 0.08em | `--surface-2`, 1px `--line` | varyant chip accent zemin |
| Nav | 56px | 0 28px | 0 | 13px/600 | `--bg`, alt 1px `--line` | aktif sekme 2px accent alt çizgi |
| Tablo satırı | 44px | 8px 14px | 0 | 13px (sayı mono) | alt 1px `--line` | hover `--surface-2` · seçili sol 3px accent |
| Modal / sheet | — | 24px | `--radius-lg` | 15px/400 | `--surface`, 1px `--line`, `--shadow` | örtü `color-mix(in srgb, var(--ink) 40%, transparent)` |
| Toast | 44px | 10px 14px | `--radius` | 13px mono | `--surface-2`, 1px `--line` | 4s, alt orta |
| Grafik paleti | — | — | — | — | `--accent` (varyant dolu) · `--ink-soft` (kontrol kesikli) · `--ink-faint` (referans) | en fazla 3 seri |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — beyaz panelde 2px yeterli, ek gölge gerekmez.
- Dokunma hedefi: en az 44×44px; delta rozeti 26px görünür ama `::before` ile 44px hedef taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 20px ızgara; ok, gözlemevi, filtre, delta |
| Fotoğraf | Yok — fotoğraf karşılaştırmayı bulanıklaştırır; ekran görüntüsü/grafik kullanılır |
| İllüstrasyon | Yok; dağılım grafiği ve vaka tablosu illüstrasyonun yerini alır |
| Doku | `--grain: 0`; yalnız %4 opaklıkta 16px nokta ızgara hero panelinde |
| Logo alanı | Kelime logosu, Space Grotesk 700 negatif tracking; işaret 12px ikiye bölünmüş daire |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Solda iddia, sağda iki panel önizleme; bölme çizgisi hero'da görünür | `shots/01-landing.png` |
| Dashboard | yüksek | Üstte deney listesi, altta seçili deneyin iki paneli + delta rozetleri | `shots/02-dashboard.png` |
| Form | düşük | Deney kurulumu: tek sütun, hipotez alanı 64ch, metrik seçimi chip | — |
| Liste / tablo | yüksek | Deney listesi 44px satır; durum chip'i, örneklem mono | — |
| Boş durum | orta | "Henüz deney yok" + iki boş panel iskeleti (bölme çizgisi korunur) | — |
| Onboarding | yüksek | 3 adım: hipotez → metrik → örneklem; her adımda tek panel | — |
| Pricing | orta | Plan karşılaştırması iki panel mantığıyla; delta rozeti yok | — |
| Giriş / ödeme | çok düşük | Tek panel; ikinci panel yerine mono güven satırı | — |
| Modal | orta | Deney detayı: üstte hipotez, altta iki panel, en altta karar satırı | — |
| Bildirim / toast | orta | "Varyant önde: +%4.2 · n=12.480" mono tek satır | — |
| Hata | düşük | Panelde kesikli çerçeve + "veri alınamadı" + yeniden dene | — |
| Profil / ayar | orta | Varsayılan anlamlılık eşiği, örneklem uyarısı, birim seçimi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.32s**, y **10px**, stagger **0.045** | `cubic-bezier(.4,0,.2,1)` | `opacity` + `transform` |
| Scroll reveal | **0.38s**, trigger **top 86%**, y **14px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **kapalı** (iki panel eşit; pin sahneyi böler) | — | — |
| Hover | **180ms**, görsel scale **1.005** | `ease-out` | `transform` |
| Basma | 110ms | aynı eğri | `transform` (.995 scale) |
| Sayı güncellemesi | 180ms | aynı eğri | `opacity` (sayaç animasyonu yok) |

- Bu stilin ölçülebilir imzası: `enter 0.32s / cubic-bezier(.4,0,.2,1) / 10px / 0.045` + `scroll top 86% / 0.38s / 14px` + `pin kapalı` + `hover 180ms / 1.005`. Katalogda `top 86%` trigger'ı yalnız bu stilde geçer; pin kapalı + 0.32s kombinasyonu başka stilde yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms; sayaçlar son değerde açılır, panel girişi anında.
- Bu stile yasak hareket: sayı sayan uzun animasyon (>0.6s), bounce, sürekli döngü, parallax, grafik çizgi çizme animasyonu.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f7fb` | `#0c0c14` |
| `--bg-2` | `#eeeef6` | `#121220` |
| `--surface` | `#ffffff` | `#161627` |
| `--surface-2` | `#f2f2fa` | `#1d1d31` |
| `--ink` | `#15151f` | `#ecebff` |
| `--ink-soft` | `#55566b` | `#a9a8c6` |
| `--ink-faint` | `#85869c` | `#787890` |
| `--accent` | `#4b3ee8` | `#8f86ff` |
| `--accent-ink` | `#ffffff` | `#0a0918` |
| `--line` | `rgba(21,21,31,.10)` | `rgba(236,235,255,.14)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **16.59:1** · `ink-soft/bg` = **8.44:1** · `accent-ink/accent` = **6.59:1** · `ink-faint/bg` = **4.53:1**.
- Koyu modda değişen başka ne var: accent açılır (#8f86ff), kontrol bandı `--ink-faint` yerine `--ink-soft`; delta negatif `--danger` koyuda daha parlak tona geçer.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="experiment-split"]`.

## Zorunlu kurallar
- Karşılaştırma varsa iki panel eşit genişlikte (6/6) ve tek hairline bölme çizgisiyle.
- Kontrol paneli nötr (`--ink-faint` bant), varyant paneli accent bant; renk tek başına anlam taşımaz.
- Her sayısal iddia yanında örneklem (`n=…`) ve mümkünse güven aralığı taşır.
- Delta rozeti her zaman işaretli ve iki haneli; birim (pp, %, ms) yazılır.
- Karar cümlesi tek satır, display 54px değil **29px** — karar metni bağırgan değil okunur olmalı.
- Tüm rakamlar mono ve `tabular-nums`; sütunlar sağa hizalı.

## Yasaklar
- İkiden fazla karşılaştırma rengi; kontrol için accent kullanmak.
- Gradient, 3B grafik, gölgeli kart, cam efekt.
- Sayı sayan sayaç animasyonu ve grafik "çizilme" animasyonu.
- 16px üzeri radius, tam hap buton (999px yalnız chip/rozet).
- Pasta grafikle karşılaştırma; eksen etiketsiz grafik.
- Kazananı yalnız renkle bildirmek.
- Örneklemsiz yüzde iddiası.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-faint/bg` = 3.34:1 (dekoratif etiket); gövde 16.96:1, accent üstü 6.66:1 — eşik üstünde.
- `--ink-faint` yalnız eksen ve dekoratif etiketlerde; etkileşimli metin değil.
- Kontrol/varyant ayrımı renk + panel başlığı + bant konumu ile üçlü kodlanır (renk körlüğü güvenli).
- Grafiklerde desen ayrımı: kontrol kesikli çizgi, varyant dolu alan — renk olmadan da ayrılır.
- Odak halkası 2px accent + 2px offset; `--surface` üstünde 6.66:1.
- 390px'te paneller alt alta ve bölme çizgisi yatay; yatay kaydırma yok.
- `prefers-reduced-motion` açıkken panel girişi ve sayı geçişi anında; grafik animasyonu yok.

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
| "Reklam bannerı" hissi | iki renkli büyük paneller + gradient | accent'i banda indir, panel zeminini `--surface` yap |
| Sonuç okunmuyor | yalnız renkli rozet | rozete işaret + birim + örneklem ekle |
| Paneller eşit değil | grid 7/5'e kaymış | 6/6 sabitle, `minmax(0,1fr)` kullan |
| Rakamlar titriyor | oransal font + sayaç animasyonu | mono + `tabular-nums`, sayaç yok |
| Mobilde taşıyor | yatay iki panel korunmuş | 900px altında dikey yığın |
| Güven kaybı | örneklemsiz yüzde | `n=` ve güven aralığı zorunlu |

## Komşu stiller

- **Uyumlu:** `utility` — aynı sakin ürün dili; dokümantasyon ve ayar ekranlarında ortak.
- **Uyumlu:** `swiss-design` — ızgara ve sola dayalı hiza ortak; rapor ekranlarında keskin varyant.
- **Uyumlu:** `bento-grid` — deney kartlarını hücreye oturtmak için.
- **Yasak:** `memphis` — dekoratif geometri karşılaştırma ciddiyetini bozar.
- **Yasak:** `dopamine-ui` — çok renkli palet kontrol/varyant ayrımını yok eder.
- **Yasak:** `synthwave` — neon atmosfer veri okunurluğunu düşürür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.evanmiller.org/how-not-to-run-an-ab-test.html | karar cümlesi ve örneklem dilini kurma |
| https://www.optimizely.com/optimization-glossary/ab-testing/ | kontrol/varyant terminolojisi |
| https://support.google.com/analytics/answer/1745147 | istatistiksel anlamlılık sunumu |
| https://carbondesignsystem.com/data-visualization/getting-started/ | iki serili grafik paleti ve eksen dili |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Experiment Split (styles/52-experiment-split/style.md, tokens.json)
Token: sadece [data-style="experiment-split"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Space Grotesk 700 (tracking -0.025em), gövde Inter 400/600, sayı Space Mono.
  Ölçek 11/13/15/20/29/54; gövde ölçü 64ch.
Yüzey: iki eşit panel (6/6), aralarında 1px var(--line); sol kenarda 3px bant
  (kontrol --ink-faint, varyant --accent). Radius 10/16px; gölge yalnız sonuç panelinde.
Imza: delta rozeti (işaret + iki hane + birim, mono), örneklem satırı "n=… · GA %95",
  kontrol kesikli / varyant dolu grafik serisi.
Hareket: enter .32s cubic-bezier(.4,0,.2,1) y10 stagger .045; scroll top 86% .38s y14 once;
  pin yok; hover 180ms scale 1.005; prefers-reduced-motion zorunlu.
Yasak: üçüncü karşılaştırma rengi, gradient, sayaç animasyonu, hap buton, pasta grafik.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] İki panel eşit; bölme çizgisi tek ve hairline.
- [ ] Kontrol nötr, varyant accent; ayrım renk + etiket + konum.
- [ ] Her sayıda örneklem/güven aralığı var.
- [ ] Kontrast: gövde 16.96:1, accent üstü 6.66:1.
- [ ] 390px'te paneller alt alta, taşma yok.
- [ ] `prefers-reduced-motion` açıkken sayaç ve giriş animasyonu yok.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="experiment-split"] {
  --bg: #f7f7fb; --bg-2: #eeeef6;
  --surface: #ffffff; --surface-2: #f2f2fa;
  --ink: #15151f; --ink-soft: #55566b; --ink-faint: #85869c;
  --accent: #4b3ee8; --accent-ink: #ffffff;
  --line: rgba(21,21,31,.10);
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 12px 28px -24px rgba(21,21,31,.35); --shadow-hard: 4px 0 0 var(--surface-2);
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: -0.025em; --blur: 0px; --grain: 0;
  --danger: #c2352b; --danger-ink: #ffffff;
  --ok: #1f7a52; --warn: #8a5a06;
}
```

Koyu mod bloğu `styles/52-experiment-split/token-block.css` içinde `[data-theme="dark"][data-style="experiment-split"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
