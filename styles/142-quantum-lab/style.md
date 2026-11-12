# 142 · Quantum Lab

> **Bir cümlede:** Kuantum ölçümlerini daktilo başlıklı, keskin köşeli bir laboratuvar defteri gibi sunan; olasılığı nokta bulutu ve çubuk histogramla konuşturan ölçüm arayüzü.

| | |
|---|---|
| **Hissiyat** | deneysel, kesin, ölçülü, laboratuvar sessizliğinde |
| **En iyi** | kuantum/AR-GE panosu, ölçüm sonuç ekranı, bilimsel veri defteri, simülasyon raporu |
| **Kaçın** | tüketici vitrini, eğlence uygulaması, yumuşak pastel marka sayfası |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (orta ton zemin; en düşük etkileşimli çift 4.86:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `styles/142-quantum-lab/tokens.json` → `[data-style="quantum-lab"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Quantum Lab, bir arayüzü **ölçüm defteri** olarak kurar: her satır bir ölçüm, her kart bir kubit durumu, her grafik bir olasılık dağılımıdır. Zemin orta ton gridir (laboratuvar tezgâhı), metin neredeyse siyahtır; köşe yoktur, kenarlık 1px mürekkeptir.

Üç kurucu karar: (1) **keskin köşe** — radius daima 0; deneysel ölçüm "yuvarlatılmış" görünmez; (2) **üç hane kuralı** — her olasılık 3 hane + `%` ve toplam 100 ± 0.5 satırı görünür, böylece veri kendi kendini denetler; (3) **opak veri** — nokta bulutu ve faz çemberi dekoratiftir, metin her zaman opak katmanda durur.

Display **Courier Prime**'dır: daktilo harfleri laboratuvar defteri hissini taşır, süs değil kayıt gibi okunur. Gövde Inter, sayılar JetBrains Mono.

Bedeli: orta ton zemin kontrast rezervini düşürür (`ink-soft/bg` = 4.86:1). Bu yüzden `--ink-faint` etkileşimli metinde kullanılmaz ve ikincil metin `--ink-soft` ile sınırlanır.

### Ne değildir
- **Lab Instrument (50) değildir:** 50 Michroma + mavi ile enstrüman paneli kurar (radius 2/8, rings); Quantum'da Courier Prime, radius 0 ve histogram imzası vardır.
- **Calibration Lab (61) değildir:** 61 Jost + teal ile tolerans bandı estetiğidir (radius 3/6, grid); burada ölçüm dili olasılık dağılımıdır.
- **Type Experiment (93) değildir:** 93 Michroma ile tipografik deney yapar; Quantum'da tipografi kayıt aracıdır, deney konusu veridir.
- **Telemetry Grid (46) değildir:** 46 hairline metrik hücreleri kurar; Quantum'da 1px ink kenar ve histogram çubukları baskındır.

### Nereden gelir
Kuantum bilişim laboratuvarları (kubit ölçüm kayıtları), deneysel fizik defterleri ve istatistiksel olasılık gösterimi (histogram, faz çemberi). Ekranda yeniden kullanılmasının nedeni: kuantum verisi **olasılık** olduğu için tek sayı değil dağılım göstermek zorunludur. Klişeye dönüşmemesi için korunacak detay: üç hane + toplam satırı ve radius 0.

### 3 saniyede tanıma testi
1. Zemin orta gri; hiçbir köşe yuvarlak değil, kenarlıklar 1px siyah.
2. Başlık daktilo (Courier Prime): sabit genişlik, hafif mürekkep izi.
3. Ekranda histogram çubukları ve nokta bulutu var; çubuklar 1px çerçeveli.
4. Her yüzde 3 hane + `%`; altında toplam 100 satırı.
5. Accent mor yalnız "ölçülen durum" ve birincil eylemde.

## Görsel imza
- **Sıfır radius:** `--radius: 0`, `--radius-lg: 0`; sahne tarafında `border-radius: 0 !important`.
- **1px mürekkep kenar:** kart ve input kenarı `--ink`; hairline yalnız ikincil ayırıcıda.
- **Olasılık bulutu:** 14px ve 22px iki nokta ızgarası (`--ink` + `--accent`), opaklık ≤ %50.
- **Histogram:** 6px çubuk, 18/42px aralık; iki katman (ink + accent) farklı yükseklikte.
- **Daktilo başlık:** Courier Prime 400, 40px, tracking 0.01em; paragrafta kullanılmaz.
- **Radius:** hiç yok. Gölge de yok (`--shadow: none`).
- **Doku:** `--grain: 0`; doku nokta ızgarasından gelir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#9b99a3` | laboratuvar zemini (orta ton) | kart zemini |
| `--bg-2` | `#92909a` | bölüm ayırıcı, bulut zemini | input zemini |
| `--surface` | `#a6a4ae` | kart, tablo (bir ton açık) | sayfa zemini |
| `--surface-2` | `#86848e` | chip, zebra, ikincil yüzey | birincil kart |
| `--ink` | `#14121a` | metin, kenarlık, eksen | dekoratif dolgu |
| `--ink-soft` | `#2f2c38` | ikincil metin | başlık |
| `--ink-faint` | `#4a4753` | yalnız dekoratif etiket/eksen notu | etkileşimli metin |
| `--accent` | `#5b3fa8` | ölçülen durum, birincil eylem | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,18,26,.24)` | ikincil ayırıcı | ana kenarlık (onun yerine `--ink`) |

- Ölçülen kontrast: `ink/bg` = **6.61:1** · `ink-soft/bg` = **4.86:1** · `accent-ink/accent` = **7.72:1** · `ink-faint/bg` = **3.23:1**.
- Tek vurgu kuralı: accent yalnız ölçülen/teorik ayrımında ölçülen taraf. Alarm `--danger`, uyarı `--warn`, tamam `--ok`.
- Yasak kombinasyon: `--ink-faint` ile etkileşimli metin; accent'i eksen rengi yapmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Courier Prime (`--font-display`) | 40px / mobil 25px | 400 | 1.14 | `--tracking` 0.01em |
| H2 | Courier Prime | 25px | 400 | 1.24 | 0.01em |
| H3 | Inter | 19px | 600 | 1.32 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.58 | 0 |
| Etiket / sayı | JetBrains Mono (`--font-mono`) | 11–13px | 400/600 | 1.44 | 0.14em (etiket) |

- Ölçek oranı ≈ 1.35; kullanılan basamaklar: 11 · 12 · 13 · 15 · 19 · 25 · 40.
- Ölçü önerisi: `h1 { font-size: clamp(25px, 3.2vw, 40px); }`
- Gövde metni maksimum satır uzunluğu: 68 ch.
- Ağırlık kuralı: Courier Prime yalnız 400 (sentetik bold yasak); gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 kubit ızgarası 8/4 · 768 tek sütun, histogram küçülür · 390 bulut kapanır |

- Asimetri kuralı: kubit ızgarası 8/4; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 2 tablo; üçüncü blok histogram paneli olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | tezgâh, bulut zemini |
| Kart | `--surface` | yok | kubit kartı, tablo |
| Yüzen katman | `--surface` + 1px `--ink` | yok | modal, ölçüm detayı |

- Kenarlık formülü: `1px solid var(--ink)`; ikincil ayırıcı `1px var(--line)`.
- Derinlik nereden gelir: çubuk yükseklikleri ve kenarlık kontrastı; gölge/blur/iç gölge yok.
- Radius: `--radius` 0, `--radius-lg` 0 — istisna yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | 0 14px | 0 | 13px/400 Courier Prime | `--accent` zemin, `--accent-ink` | hover %88 (105ms) · active 1px · focus 2px ink · disabled %45 kesikli · loading 4 kare nokta |
| Buton (ikincil) | 36px | 0 14px | 0 | 13px/400 | şeffaf, 1px `--ink`, `--ink` | hover `--surface-2` |
| Input | 36px | 0 10px | 0 | 12px mono | `--surface`, 1px `--ink` | focus 2px accent · error `--danger` · disabled %45 |
| Kart | içerik | 16px | 0 | — | `--surface`, 1px `--ink`, gölge yok | — |
| Chip / badge | 20px | 0 8px | 0 | 11px/400 Courier Prime | `--surface-2`, 1px `--ink` | seçili: accent zemin |
| Nav | 46px | 0 20px | 0 | 11px mono | `--bg`, alt 1px `--ink` | aktif: 3px ink alt çizgi + accent nokta |
| Tablo satırı | 32px | 4px 8px | 0 | 12px (sayı mono) | alt 1px `--line`; son satır 1px ink | seçili sol 3px accent |
| Modal / sheet | — | 20px | 0 | 15px/400 | `--surface`, 1px `--ink`, gölge yok | ölçüm sonucu, metin opak |
| Toast | 34px | 8px 10px | 0 | 12px mono | `--surface-2`, 1px `--ink` | 3600ms, sol alt |
| Grafik paleti | — | — | — | — | `--accent` · `--ink` · `--ink-soft` (4 seri) | histogram çubukları 1px çerçeveli |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px` (kenarlık ink olduğu için halka accent).
- Dokunma hedefi: en az 44×44px; 36px buton ve 20px chip `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 16px ızgara; kubit, ölçüm, faz işaretleri |
| Fotoğraf | Yok — laboratuvar fotoğrafı yerine histogram ve durum matrisi |
| İllüstrasyon | Yalnız olasılık bulutu ve faz çemberi |
| Doku | `--grain: 0`; doku nokta ızgarasından gelir |
| Logo alanı | Courier Prime 400 kelime logosu; 16px iki çizgili dalga işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | Sol daktilo başlık, sağda histogram paneli + bulut | `shots/01-landing.png` |
| Dashboard | yüksek | Kubit ızgarası 8/4, sağda olasılık paneli | `shots/02-dashboard.png` |
| Form | düşük | Ölçüm parametreleri: devre, atış sayısı, gürültü | — |
| Liste / tablo | yüksek | 32px satır, olasılık sağa hizalı 3 hane | — |
| Boş durum | orta | Boş histogram iskeleti + "ölçüm başlat" | — |
| Onboarding | yüksek | 3 adım: devre → atış → sonuç | — |
| Pricing | orta | Hesaplama kotaları tablosu; birimli değerler | — |
| Giriş / ödeme | çok düşük | Tek panel, bulut yok, form odakta | — |
| Modal | orta | Ölçüm detayı: histogram + toplam satırı | — |
| Bildirim / toast | orta | "atış 1024 · sapma %0.8" mono | — |
| Hata | düşük | `--danger` kenar + "gürültü eşiği aşıldı" | — |
| Profil / ayar | orta | Gürültü modeli, atış sayısı, hane gösterimi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.29s**, y **0px**, stagger **0.035** | `cubic-bezier(.5,.05,.3,1)` | `opacity` (dikey hareket yok) |
| Scroll reveal | **0.35s**, trigger **top 89%**, y **8px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **kapalı** (ölçüm paneli sabitlenmez; veri kaymamalı) | — | — |
| Hover | **105ms**, görsel scale **1.000** (yalnız kenarlık/zemin değişir) | `ease-out` | `background-color` |
| Basma | 95ms | aynı eğri | `transform` (1px) |
| Çubuk çizimi | 160ms | `linear` | `opacity` (yükseklik animasyonu yok) |

- Bu stilin ölçülebilir imzası: `enter 0.29s / cubic-bezier(.5,.05,.3,1) / 0px / 0.035` + `scroll top 89% / 0.35s / 8px` + `pin kapalı` + `hover 105ms / 1.000`. `offsetY 0px` + `hover scale 1.000` ikilisi katalogda yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; bulut donar, çubuklar anında çizilir.
- Bu stile yasak hareket: sürekli dönen faz animasyonu, yükseklik animasyonu, parallax, saniyede 1+ flaş.

## Koyu mod

| Token | Açık (tezgâh) | Koyu (gece ölçümü) |
|---|---|---|
| `--bg` | `#9b99a3` | `#191822` |
| `--bg-2` | `#92909a` | `#1f1e29` |
| `--surface` | `#a6a4ae` | `#26242f` |
| `--surface-2` | `#86848e` | `#2e2c38` |
| `--ink` | `#14121a` | `#ece9f2` |
| `--ink-soft` | `#2f2c38` | `#b4b0c0` |
| `--ink-faint` | `#4a4753` | `#8a8698` |
| `--accent` | `#5b3fa8` | `#a48bff` |
| `--accent-ink` | `#ffffff` | `#120a26` |
| `--line` | `rgba(20,18,26,.24)` | `rgba(236,233,242,.17)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **14.65:1** · `ink-soft/bg` = **8.29:1** · `accent-ink/accent` = **7.03:1** · `ink-faint/bg` = **4.97:1**.
- Koyu modda değişen başka ne var: accent açılır (mor → lavanta), ana kenarlık `--ink` kalır, bulut opaklığı %50 → %38.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="quantum-lab"]`.

## Zorunlu kurallar
- Her olasılık 3 hane + `%`; toplam satırı 100 ± 0.5 görünür.
- Kubit durumu üçlü kodlanır: çip + renk + metin (`|0⟩`, `|1⟩`, süperpozisyon).
- Radius daima 0; ana kenarlık 1px `--ink`.
- Histogram çubukları 1px çerçeveli; eksen etiketi her zaman yazılı.
- Metin opak katmanda; bulut/çember dekoratif.
- Ölçülen ve teorik değer aynı ekranda yan yana.

## Yasaklar
- Yuvarlak köşe / hap kontrol.
- Gölge, cam blur, gradient.
- 4+ haneli ondalık, birimsiz yüzde.
- Sürekli dönen faz animasyonu ve yükseklik animasyonu.
- Fotoğraf üzerine grafik bindirme.
- Courier Prime ile uzun paragraf.
- `--ink-faint` ile etkileşimli metin.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-soft/bg` = 4.86:1; gövde 6.61:1; accent üstü 7.72:1; `ink-faint/bg` 3.23:1 yalnız dekoratif.
- Orta ton zemin rezervi küçültür: etkileşimli metin daima `--ink` veya `--ink-soft`.
- Olasılık değerleri renk + sayı + toplam satırıyla doğrulanır (renk körlüğü güvenli).
- Odak halkası 2px accent + 1px offset; ink kenardan net ayrışır.
- 390px'te bulut kapanır, histogram iki katmana iner; taşma yok.
- `prefers-reduced-motion` açıkken çubuk/bulut animasyonu durur.

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
| "Excel" hissi | gri zemin + hairline | kenarlığı ink'e çek, histogram ekle |
| Veri güvenilmez | toplam satırı yok | 100 ± 0.5 satırını zorunlu kıl |
| Okunmuyor | ink-faint etkileşimde | `--ink-soft` kullan |
| Fazla süs | bulut opaklığı yüksek | ≤ %50 (koyuda %38) |
| "Klinik" değil "oyun" | radius/gölge eklendi | radius 0, gölge yok |
| Mobilde sıkışık | 8/4 korunmuş | 768 altında tek sütun |

## Komşu stiller

- **Uyumlu:** `lab-instrument` — enstrüman paneli dili; ölçüm etiketleri ortak.
- **Uyumlu:** `calibration-lab` — tolerans/toplam mantığı; bant göstergesi eklenebilir.
- **Uyumlu:** `type-experiment` — keskin tipografi; daktilo başlık uyumlu.
- **Yasak:** `claymorphism` — yuvarlak kil yüzeyi 0 radius kuralını bozar.
- **Yasak:** `dopamine-ui` — çok renkli palet olasılık okunurluğunu düşürür.
- **Yasak:** `ethereal` — sis/blur histogram kontrastını yok eder.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://qiskit.org/learn/ | kubit durumu ve faz gösterimi |
| https://www.nist.gov/quantum-information-science | ölçüm ve olasılık dili |
| https://www.nngroup.com/articles/dashboards-preattentive/ | histogram okunurluğu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | orta ton zeminde metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Quantum Lab (styles/142-quantum-lab/style.md, tokens.json)
Token: sadece [data-style="quantum-lab"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Courier Prime 400 (yalnız başlık), gövde Inter 400/600, sayı JetBrains Mono.
  Ölçek 11/12/13/15/19/25/40; gövde ölçü 68ch; olasılıklar 3 hane + %.
Yüzey: orta gri tezgâh (#9b99a3); radius DAİMA 0; ana kenarlık 1px var(--ink); gölge yok.
Imza: olasılık nokta bulutu (14/22px) + iki katmanlı histogram çubukları + toplam 100 satırı;
  kubit durumu çip + renk + metin (|0⟩, |1⟩, süperpozisyon).
Renk: tek accent #5b3fa8 (ölçülen durum); orta ton nedeniyle ink-faint etkileşimde yok.
Hareket: enter .29s cubic-bezier(.5,.05,.3,1) y0 stagger .035; scroll top 89% .35s y8 once;
  pin yok; hover 105ms scale 1.000; reduced-motion zorunlu.
Yasak: yuvarlak köşe, gölge/blur, 4+ hane ondalık, yükseklik animasyonu, fotoğraf üstü grafik.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm köşeler 0; kenarlık 1px ink.
- [ ] Olasılıklar 3 hane + toplam satırı var.
- [ ] Kubit durumu üçlü kodlanmış.
- [ ] Kontrast: gövde 6.61:1, accent üstü 7.72:1.
- [ ] 390px'te bulut kapanıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken animasyon yok.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="quantum-lab"] {
  --bg: #9b99a3; --bg-2: #92909a;
  --surface: #a6a4ae; --surface-2: #86848e;
  --ink: #14121a; --ink-soft: #2f2c38; --ink-faint: #4a4753;
  --accent: #5b3fa8; --accent-ink: #ffffff;
  --line: rgba(20,18,26,.24);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: 0 0 0 1px var(--ink);
  --font-display: "Courier Prime", ui-monospace, SFMono-Regular, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
  --danger: #8f1f24; --danger-ink: #ffffff;
  --ok: #1d5c45; --warn: #6d4a06;
}
```

Koyu mod bloğu `styles/142-quantum-lab/token-block.css` içinde `[data-theme="dark"][data-style="quantum-lab"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
