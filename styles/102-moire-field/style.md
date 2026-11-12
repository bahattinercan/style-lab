# 102 · Moiré Field

> **Bir cümlede:** İki ince çizgi perdesinin üst üste bindirilmesiyle oluşan girişim desenini zemin sayan, orta ton gri üzerinde keskin köşe ve pixel başlıkla kurulmuş optik desen arayüzü.

| | |
|---|---|
| **Hissiyat** | optik, hesaplı, keskin, üretken |
| **En iyi** | tasarım stüdyosu vitrini, sergi/etkinlik afişi, tipografi deneyi, jeneratif desen galerisi |
| **Kaçın** | sağlık ve finans gibi sakinlik bekleyen ekranlar, uzun okuma metinleri, düşük çözünürlüklü mobil cihazlar |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (orta ton zemin; en düşük etkileşimli çift 5.31:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `styles/102-moire-field/tokens.json` → `[data-style="moire-field"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Moiré Field, arayüzün zeminini **girişim deseni** olarak kurar: iki çizgi perdesi farklı açılarla (4° ve 11°) üst üste bindirilir, kesişimlerinde büyüyen ölçekte yeni bir desen doğar. Sayfa orta ton gridir; metin her zaman desenin **üstündeki opak katmanda** durur.

Üç kurucu karar: (1) **iki perde kuralı** — üçüncü perde eklenmez; girişim ancak iki perdede okunur ve üçüncüsü deseni gürültüye çevirir; (2) **asal aralık** — perde çizgi aralıkları 3/5 veya 4/7 px gibi aralarında asal değerlerdir, böylece desen kendini tekrar etmeden büyür; (3) **keskin köşe** — radius daima 0; desen dik açıyla kesişir, yuvarlak köşe girişim çizgilerini keser.

Orta ton zemin bu stilin en riskli kararıdır: `--ink` neredeyse siyahtır ve kontrast 7.34:1'dir (açık temalı stillerin 16:1'ine göre düşük). Bu yüzden yalnız **kısa metin** kullanılır; uzun okuma bu stile uygun değildir. Display **Silkscreen**'dir: baskı ızgarası estetiği moiré'nin optik diliyle aynı ailedendir.

Bedeli: yoğun desen yorgunluk yapabilir. Bu yüzden perde opaklığı ≤ %18 ve desen yalnız **büyük yüzeylerde** (hero, bölüm arkaplanı) kullanılır; kart içleri düz zemindir.

### Ne değildir
- **Type Experiment (93) değildir:** 93 açık zeminde Michroma display + grid motifle tipografik deney yapar; Moiré orta ton zemin + iki perde girişim + Silkscreen kullanır ve radius sıfırdır.
- **Swiss Design (02) değildir:** 02 beyaz zemin, 12 kolon ve 3px siyah kurala dayanır, desen yoktur; Moiré'de asıl taşıyıcı desendir.
- **Pixel Art (24) değildir:** 24 Press Start 2P + blok gölge ile oyun estetiği kurar; Moiré'de piksel yoktur, girişim çizgileri vardır.
- **Ethereal (29) değildir:** 29 yumuşak sis ve blur ile düşük kontrast kurar; Moiré keskin çizgi ve yüksek yerel kontrast kullanır.

### Nereden gelir
Baskı öncesi tram hataları, televizyon ekranı girişimi, op-art (Bridget Riley, Victor Vasarely) ve jeneratif desen kültürü. Ekranda yeniden kullanılmasının nedeni: CSS'in `repeating-linear-gradient` ile iki perdeyi bedava üretebilmesi — desen artık görsel dosyası değil, kod. Klişeye dönüşmemesi için korunacak detay: perde aralıklarının aralarında asal olması ve metnin daima opak katmanda kalması.

### 3 saniyede tanıma testi
1. Zemin orta ton gri; üzerinde iki farklı açıda ince çizgi perdesi var.
2. Kesişimlerde büyüyen girişim deseni görünür (moiré).
3. Hiçbir köşe yuvarlak değil: tüm yüzeyler keskin.
4. Başlık Silkscreen: geniş, bloklu, baskı ızgarası hissi.
5. Accent magenta yalnız girişim tepelerinde ve seçili öğede.

## Görsel imza
- **İki perde:** `repeating-linear-gradient(4deg, … 0 1px, transparent 1px 5px)` + `(11deg, … 0 1px, transparent 1px 7px)`.
- **Perde opaklığı:** ≤ %18 sayfa zemini, %90 hero görsel içinde (küçük alan).
- **Girişim tepeleri:** accent magenta noktalar, 15px ve 21px iki ızgara üst üste.
- **Keskin köşe:** `--radius: 0px`, `--radius-lg: 0px`; `border-radius: 0 !important` sahne tarafında.
- **Kenarlık:** 1px `--ink` (yüksek kontrastlı baskı çizgisi), hairline gri değil.
- **Silkscreen başlık:** 38px, ağırlık 400, tracking 0.02em; paragrafta kullanılmaz.
- **Doku:** `--grain: 0` — desen zaten doku; ikinci doku eklenmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#a6a29b` | sayfa zemini (orta ton) | kart zemini |
| `--bg-2` | `#9c9891` | bölüm ayırıcı, perde zemini | metin zemini |
| `--surface` | `#b1ada6` | kart, panel (bir ton açık) | sayfa zemini |
| `--surface-2` | `#8e8a84` | ikincil yüzey, chip, zebra | birincil kart |
| `--ink` | `#12130f` | metin, başlık, kenarlık | dekoratif dolgu |
| `--ink-soft` | `#2b2c28` | ikincil metin | başlık |
| `--ink-faint` | `#45463f` | yalnız dekoratif etiket | etkileşimli metin |
| `--accent` | `#9c2e6e` | girişim tepesi, seçili öğe, birincil eylem | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(18,19,15,.22)` | hairline ayırıcılar | ana kenarlık (onun yerine `--ink`) |

- Ölçülen kontrast: `ink/bg` = **7.34:1** · `ink-soft/bg` = **5.31:1** · `accent-ink/accent` = **6.93:1** · `ink-faint/bg` = **3.75:1**.
- Tek vurgu kuralı: accent yalnız girişim tepesi ve seçim. Alarm `--danger`, uyarı `--warn`, onay `--ok`.
- Yasak kombinasyon: accent metni orta ton zeminin üstünde (kontrast düşer); `--ink-faint` ile etkileşimli metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Silkscreen (`--font-display`) | 38px / mobil 24px | 400 | 1.12 | `--tracking` 0.02em |
| H2 | Silkscreen | 24px | 400 | 1.26 | 0.01em |
| H3 | Inter | 18px | 600 | 1.34 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.55 | 0 |
| Etiket / sayı | JetBrains Mono (`--font-mono`) | 11–13px | 400/600 | 1.44 | 0.16em (etiket) |

- Ölçek oranı ≈ 1.35; kullanılan basamaklar: 11 · 12 · 13 · 15 · 18 · 24 · 38.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3vw, 38px); }`
- Gövde metni maksimum satır uzunluğu: 70 ch (kısa bloklar hâlinde).
- Ağırlık kuralı: Silkscreen yalnız 400 — paragrafta hiç kullanılmaz; gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 desen paneli 8/4 · 768 tek sütun, perde %50 opaklık · 390 perde kapanır, düz zemin |

- Asimetri kuralı: desen paneli 8/4; ekran başına bir asimetri, gerisi simetrik.
- Bölüm ritmi: art arda en fazla 2 desenli blok; üçüncü blok düz zemin olur (göz dinlendirme).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, perde zemini |
| Kart | `--surface` | yok | panel, tablo, kart |
| Yüzen katman | `--surface` + 1px `--ink` | yok | modal, menü (gölge yerine kalın çizgi) |

- Kenarlık formülü: `1px solid var(--ink)` (baskı çizgisi); ikincil ayırıcı `1px var(--line)`.
- Derinlik nereden gelir: perde kesişimi ve 1px kontrast çizgi; gölge/blur/iç gölge yok.
- Radius: `--radius` 0, `--radius-lg` 0 — istisna yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | 0 14px | 0 | 12px/400 Silkscreen | `--accent` zemin, `--accent-ink`, gölge yok | hover %88 (95ms) · active 1px · focus 2px ink · disabled %45 kesikli · loading 4 kare blok |
| Buton (ikincil) | 36px | 0 14px | 0 | 12px/400 | şeffaf, 1px `--ink`, `--ink` | hover `--surface-2` |
| Input | 36px | 0 10px | 0 | 12px mono | `--surface`, 1px `--ink` | focus 2px accent · error `--danger` · disabled %45 |
| Kart | içerik | 16px | 0 | — | `--surface`, 1px `--ink`, gölge yok | hover yalnız kenarlık rengi |
| Chip / badge | 20px | 0 8px | 0 | 10px/400 Silkscreen | `--surface-2`, 1px `--ink` | seçili: accent zemin |
| Nav | 48px | 0 20px | 0 | 11px mono | `--bg`, alt 1px `--ink` | aktif: 3px ink alt çizgi + accent nokta |
| Tablo satırı | 32px | 4px 8px | 0 | 12px (sayı mono) | alt 1px `--line`, zebra yok | hover `--surface-2` |
| Modal / sheet | — | 20px | 0 | 15px/400 | `--surface`, 1px `--ink`, perde %8 | metin opak katmanda |
| Toast | 36px | 8px 10px | 0 | 12px mono | `--surface-2`, 1px `--ink` | 3600ms, sol alt |
| Grafik paleti | — | — | — | — | `--accent` · `--ink` · `--ink-soft` (4 seri) | 1px çizgi, girişim noktaları accent |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; kenarlık ink olduğu için halka accent.
- Dokunma hedefi: en az 44×44px; 20px chip ve 36px buton `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 16px ızgara, keskin uç |
| Fotoğraf | Yok — fotoğraf perdeyi bozar; desen görselin kendisidir |
| İllüstrasyon | Yalnız CSS perde (iki katman, 4°/11°) |
| Doku | `--grain: 0`; doku iki perde çizgisinden gelir |
| Logo alanı | Silkscreen kelime logosu; 16px çift çizgi işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Perde paneli 8/4; başlık keskin, tek CTA | `shots/01-landing.png` |
| Dashboard | düşük | Desen yalnız üst şeritte; tablolar düz zeminde | `shots/02-dashboard.png` |
| Form | düşük | 36px alanlar, 1px ink kenar, radius 0 | — |
| Liste / tablo | düşük | 32px satır, zebra yok, 1px ayırıcı | — |
| Boş durum | orta | Boş desen alanı + "yeni desen üret" eylemi | — |
| Onboarding | yüksek | Her adımda tek perde; metin opak kartta | — |
| Pricing | orta | Plan kartları düz zemin; öne çıkan 1px ink + accent başlık | — |
| Giriş / ödeme | çok düşük | Tek panel, desen yok (odak formu) | — |
| Modal | orta | %8 perde + opak metin katmanı | — |
| Bildirim / toast | orta | Mono tek satır, keskin kenar | — |
| Hata | düşük | `--danger` kenar + hata metni; perde kapanır | — |
| Profil / ayar | orta | Perde yoğunluğu ve açı ayarı (4°–11°) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — moiré test kartı — açı notu (4°/11°), kesim payı, girişim çizgileri.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.53s**, y **4px**, stagger **0.025** | `cubic-bezier(.37,0,.63,1)` | `opacity` + `transform` |
| Scroll reveal | **0.47s**, trigger **top 93%**, y **6px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.05**, mesafe **+125%** (perde kayması) | scrub doğrusal | `transform` (desen açısı 4° → 11°) |
| Hover | **95ms**, görsel scale **1.000** (görsel yok — kenarlık/desen yoğunluğu değişir) | `ease-out` | `background-color` |
| Basma | 95ms | aynı eğri | `transform` (1px) |
| Perde kayması | 240ms | aynı eğri | `opacity` (desen opaklığı) |

- Bu stilin ölçülebilir imzası: `enter 0.53s / cubic-bezier(.37,0,.63,1) / 4px / 0.025` + `scroll top 93% / 0.47s / 6px` + `pin scrub 1.05 / +125%` + `hover 95ms / 1.000`. `0.53s` + bu eğri ve `scrub 1.05` katalogda yalnız burada geçer.
- `prefers-reduced-motion`: tüm süreler 0.01ms; perde kayması ve scrub kapanır, desen sabit kalır.
- Bu stile yasak hareket: saniyede 1'den fazla desen kayması (optik titreşim), sürekli döngü, parallax, gradient geçişi.

## Koyu mod

| Token | Açık (gündüz perdesi) | Koyu (gece perdesi) |
|---|---|---|
| `--bg` | `#a6a29b` | `#1c1b19` |
| `--bg-2` | `#9c9891` | `#232220` |
| `--surface` | `#b1ada6` | `#2a2825` |
| `--surface-2` | `#8e8a84` | `#34322e` |
| `--ink` | `#12130f` | `#ece8e1` |
| `--ink-soft` | `#2b2c28` | `#b3aea6` |
| `--ink-faint` | `#45463f` | `#8a857d` |
| `--accent` | `#9c2e6e` | `#e57ab0` |
| `--accent-ink` | `#ffffff` | `#1a0712` |
| `--line` | `rgba(18,19,15,.22)` | `rgba(236,232,225,.18)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **14.09:1** · `ink-soft/bg` = **7.80:1** · `accent-ink/accent` = **7.15:1** · `ink-faint/bg` = **4.70:1**.
- Koyu modda değişen başka ne var: perde çizgileri `--line` yerine `--ink` %12 karışımı; accent açılır (magenta → pembe); kenarlık ink kalır (kontrast korunur).
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="moire-field"]`.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **6.32:1** açık / **6.07:1** koyu · `--warn / bg` = **6.29:1** / **6.31:1** · `--ok / surface` = 5.18:1 / 5.39:1 (warn) · devre dışı buton metni = **4.66:1** / **6.60:1** · ghost buton kenarı = **3.02:1** / **5.12:1** (eşik 3:1).

## Zorunlu kurallar
- İki perde kuralı: tam iki çizgi ızgarası, 4–11° farkla; üçüncü perde yok.
- Perde aralıkları aralarında asal (3/5 veya 4/7 px).
- Metin her zaman opak katmanda; perde metnin üstüne binmez.
- Radius daima 0; ana kenarlık 1px `--ink`.
- Perde opaklığı ≤ %18 (sayfa), ≤ %90 (küçük hero alanı).
- Accent yalnız girişim tepesi ve seçili öğe.

## Yasaklar
- Üçüncü perde veya üç renkli desen.
- Saniyede 1+ desen kayması (optik rahatsızlık).
- Gradient, cam blur, gölge, iç gölge.
- Yuvarlak köşe / pill kontrol.
- Fotoğraf üzerine perde bindirme.
- Silkscreen ile paragraf yazmak.
- Uzun okuma metni (bu stil kısa metin dilidir).

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-soft/bg` = 5.31:1; gövde 7.34:1; accent üstü 6.93:1; `ink-faint/bg` 3.75:1 yalnız dekoratif.
- Orta ton zemin kontrast rezervini küçültür: `--ink-faint` etkileşimli metinde asla kullanılmaz.
- Perde metnin arkasında: gövde metni daima `--surface`/`--bg` opak katmanında.
- Odak halkası 2px accent + 2px offset; ink kenarlıkla karışmaz.
- 390px'te perde kapanır (düz zemin) — küçük ekranda optik yorgunluk önlenir.
- `prefers-reduced-motion` açıkken perde kayması/scrub durur; desen statik kalır.
- Saniyede 3'ten fazla parlaklık değişimi yok (WCAG 2.3.1).

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
| Göz yoruyor | perde opaklığı yüksek | %18 üstüne çıkarma; büyük yüzeylerde kullan |
| Desen "kirli" | üçüncü perde eklendi | iki perdeye indir |
| Metin okunmuyor | perde metnin üstünde | metni opak katmana al |
| Moiré görünmüyor | perde aralıkları eşit | aralarında asal aralık (3/5, 4/7) |
| "Retro pixel" olmuş | Silkscreen gövdeye taşmış | Silkscreen yalnız başlık/etiket |
| Mobilde bayat | perde küçük ekranda | 390px'te perdeyi kapat |

## Komşu stiller

- **Uyumlu:** `type-experiment` — tipografik deney dili; perde arka planda kalırsa ortak çalışır.
- **Uyumlu:** `swiss-design` — ızgara ve keskin köşe ortak; perde eklenince optik varyant olur.
- **Uyumlu:** `pixel-art` — blok/piksel estetiği; perde yalnız büyük yüzeyde tutulursa.
- **Yasak:** `claymorphism` — yuvarlak yumuşak yüzey deseni keser.
- **Yasak:** `ethereal` — sis/blur girişim çizgilerini yok eder.
- **Yasak:** `dopamine-ui` — çok renkli palet girişim tepelerini okunamaz kılar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Moir%C3%A9_pattern | girişim deseni geometrisi ve aralık ilişkisi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient | iki perde CSS kurulumu |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | titreşim/flaş eşiği |
| https://www.awwwards.com/websites/generative/ | üretken desen ve op-art örnekleri |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Moiré Field (styles/102-moire-field/style.md, tokens.json)
Token: sadece [data-style="moire-field"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Silkscreen 400 (yalnız başlık/etiket), gövde Inter 400/600, sayı JetBrains Mono.
  Ölçek 11/12/13/15/18/24/38; gövde ölçü 70ch ve kısa bloklar.
Yüzey: orta ton gri (#a6a29b); radius DAİMA 0; ana kenarlık 1px var(--ink); gölge yok.
Imza: iki çizgi perdesi (4° / 11°, aralık 5px / 7px, opaklık <= .18) + girişim tepelerinde
  accent magenta noktalar; metin daima opak katmanda.
Renk: tek accent #9c2e6e; orta ton zemin nedeniyle ink-faint etkileşimli metinde kullanılmaz.
Hareket: enter .53s cubic-bezier(.37,0,.63,1) y4 stagger .025; scroll top 93% .47s y6 once;
  1 pin scrub 1.05 (+125%, desen açısı 4°->11°); hover 95ms; prefers-reduced-motion zorunlu.
Yasak: üçüncü perde, saniyede 1+ desen kayması, gradient/blur/gölge, yuvarlak köşe.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tam iki perde var; aralıklar aralarında asal.
- [ ] Metin opak katmanda, perde metni örtmüyor.
- [ ] Tüm köşeler keskin (radius 0).
- [ ] Kontrast: gövde 7.34:1, accent üstü 6.93:1.
- [ ] 390px'te perde kapanıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken desen statik.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="moire-field"] {
  --bg: #a6a29b; --bg-2: #9c9891;
  --surface: #b1ada6; --surface-2: #8e8a84;
  --ink: #12130f; --ink-soft: #2b2c28; --ink-faint: #45463f;
  --accent: #9c2e6e; --accent-ink: #ffffff;
  --line: rgba(18,19,15,.22);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: 0 0 0 1px var(--ink);
  --font-display: "Silkscreen", ui-monospace, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
  --danger: #8f1f1c; --danger-ink: #ffffff;
  --ok: #0c261a; --warn: #2e1f02;
}
```

Koyu mod bloğu `styles/102-moire-field/token-block.css` içinde `[data-theme="dark"][data-style="moire-field"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
