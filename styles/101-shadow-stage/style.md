# 101 · Shadow Stage

> **Bir cümlede:** Tek bir ışık kaynağının sahnedeki her şeyi sırayla aydınlattığı, hiyerarşiyi rengin değil parlaklık ve gölge yönünün kurduğu koyu sahne arayüzü.

| | |
|---|---|
| **Hissiyat** | dramatik, sakin, tiyatral, derin |
| **En iyi** | prodüktör/ajans vitrini, film & etkinlik sayfası, küratörlü portfolyo, gece modu okuma deneyimi |
| **Kaçın** | veri yoğun tablo ekranları, form ağırlıklı yönetim panelleri, açık havada kullanılan saha uygulamaları |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.10:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `styles/101-shadow-stage/tokens.json` → `[data-style="shadow-stage"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Shadow Stage, arayüzü bir **tiyatro sahnesi** gibi kurar: tek ışık kaynağı üst-soldadır, her yüzey bu kaynağa göre gölge düşürür ve hiyerarşi punto değil **parlaklık** ile kurulur. Başlık en aydınlık öğedir; çevresi kademeli olarak koyulaşır, kenarlarda çok soluk bir vinyet kalır.

Üç kurucu karar vardır. (1) **Tek kaynak kuralı** — bütün gölgeler aynı yöne düşer; ikinci bir ışık (sağdan parlama, renkli drop-shadow) yasaktır, çünkü sahne inandırıcılığı yön birliğinden gelir. (2) **Parlaklık hiyerarşisi** — `--ink` (`#eef1f5`) başlık, `--ink-soft` gövde, `--ink-faint` yalnız dekoratif; opaklıkla oynanmaz, doğru token seçilir. (3) **Vinyet disiplini** — köşe vinyeti en fazla %22 ve daima metnin arkasında; gövde metni hiçbir zaman gölge içinde kalmaz.

Display **Poiret One**'dır (tek ağırlık): ince geometrik çizgiler sahne ışığı altında tel gibi okunur, kalın serif dramatikliği taklit etmez. Gövde Inter, etiketler IBM Plex Mono'dur.

Bedeli: bu stil veri yoğun ekranlarda zayıftır. Tablo gerekli olduğunda gölge bütçesi sıfıra iner ve satır ayrımı yalnız 1px `--line` ile kurulur.

### Ne değildir
- **Dark Academia (33) değildir:** 33 Cormorant Garamond + toprak paletle nostaljik bir okuma dünyası kurar; Shadow Stage ışığı bir *araç* olarak kullanır, dönem taklidi yapmaz (display Poiret One, accent sarı ışık).
- **Glassmorphism (08) değildir:** 08 cam yüzey ve blur ile derinlik kurar, çok renkli ışıma taşır; burada blur yoktur (`--blur: 0px`), derinlik yalnız gölge yönünden gelir.
- **Nordic Folk (66) değildir:** 66 sıcak kağıt zeminli, folklorik motifli açık bir dildir; Shadow Stage koyu zeminde tek ışıkla çalışır.
- **Acid Graphics (15) değildir:** 15 neon sarı ve parlama ile agresif kontrast kurar; burada accent sarı ama **ışık** gibi davranır (geniş, soluk, tek kaynak), asit parlaklığı yoktur.

### Nereden gelir
Rönesans chiaroscuro'su (Caravaggio'nun tek kaynak ışığı), tiyatro sahne aydınlatması ve sinema "low-key" ışık düzeni. Ekranda yeniden kullanılmasının nedeni: koyu modun düz siyah ekranlardan sıkıcılaşması — tek kaynak ışık, koyu zemine **derinlik ve sıcaklık** verir. Klişeye dönüşmemesi için korunacak detay: gölge yönünün tek olması ve vinyetin metni örtmemesi.

### 3 saniyede tanıma testi
1. Zemin koyu ve soğuk; tek bir yönden (üst-sol) yumuşak ışık lekesi var.
2. Tüm kartlar aynı yöne çok soluk gölge düşürüyor; ikinci ışık yok.
3. Başlık Poiret One: ince, geniş harf aralıklı, tel gibi.
4. Köşelerde hafif vinyet; metin hiçbir yerde gölge içinde değil.
5. Accent sarı yalnız "aydınlanan" öğede (aktif başlık, birincil buton, seçili kart).

## Görsel imza
- **Tek ışık lekesi:** hero görselde üst-sol %12 opaklıkta radial accent; sayfada %22 vinyet.
- **Gölge yönü:** tüm `--shadow` değerleri aynı yöne (aşağı-sağa) düşer; `0 24px 60px -42px rgba(0,0,0,.92)`.
- **Parlaklık basamakları:** başlık `--ink`, gövde `--ink-soft`, mikro etiket `--ink-faint` — opaklık yerine token.
- **Poiret One başlık:** 50px, ağırlık 400, tracking 0.04em; 600/700 denemesi yasak (sentetik bold).
- **Vinyet:** `radial-gradient(120% 90% at 22% 10%, transparent 30%, var(--bg) 78%)`, opaklık ≤ .22.
- **Radius:** `--radius` 10px (kontrol), `--radius-lg` 16px (kart); hap buton yok.
- **Doku:** `--grain: .02` — film greni hissi; tarama çizgisi ve neon yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#12151a` | sahne zemini | kart zemini |
| `--bg-2` | `#171b21` | ikincil zemin, input | kart yüzeyi |
| `--surface` | `#1b2028` | kart, panel (ışık alan) | sayfa zemini |
| `--surface-2` | `#232a33` | yükseltilmiş yüzey, chip, hover | birincil buton |
| `--ink` | `#eef1f5` | başlık, değer (en aydınlık) | dekoratif dolgu |
| `--ink-soft` | `#adb6c2` | gövde, ikincil metin | başlık |
| `--ink-faint` | `#7e8896` | yalnız dekoratif etiket/ayırıcı | etkileşimli metin |
| `--accent` | `#e3b341` | ışık vurgusu: aktif öğe, birincil eylem | gövde metni, ikinci durum |
| `--accent-ink` | `#1a1405` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(238,241,245,.15)` | tüm hairline çerçeveler | metin |

- Ölçülen kontrast: `ink/bg` = **16.15:1** · `ink-soft/bg` = **8.93:1** · `accent-ink/accent` = **9.41:1** · `ink-faint/bg` = **5.10:1**.
- Tek vurgu kuralı: accent yalnız "ışık alan" öğe. Alarm `--danger`, uyarı `--warn`, onay `--ok`; accent bunların yerine geçmez.
- Yasak kombinasyon: accent üstünde `--ink-soft`; aynı ekranda iki farklı gölge yönü.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poiret One (`--font-display`) | 50px / mobil 30px | 400 | 1.08 | `--tracking` 0.04em |
| H2 | Poiret One | 27px | 400 | 1.22 | 0.02em |
| H3 | Inter | 19px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.62 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 10–12px | 400 | 1.44 | 0.18em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 10 · 12 · 15 · 19 · 27 · 50.
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4vw, 50px); }`
- Gövde metni maksimum satır uzunluğu: 64 ch.
- Ağırlık kuralı: Poiret One yalnız 400 (gömülü tek ağırlık); sentetik kalınlaştırma yasak. Gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 ışık huzmesi 5/7 · 768 tek sütun, huzme üstte · 390 vinyet %14'e düşer |

- Asimetri kuralı: ışık huzmesi paneli 5/7 böler; ekran başına en fazla bir asimetri.
- Bölüm ritmi: art arda en fazla 3 blok aynı hizada; dördüncü blok tam genişlik "perde" olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sahne, ikincil zemin |
| Kart | `--surface` | `0 24px 60px -42px rgba(0,0,0,.92)` | panel, kart, KPI |
| Yüzen katman | `--surface` + `--shadow` | aynı, tek katman | modal, perde arkası |

- Kenarlık formülü: `1px solid var(--line)`; gölge ile birlikte kullanılır (tek katman).
- Derinlik nereden gelir: ışık yönü + tek katman gölge + vinyet; blur/glow/bevel yok.
- Radius: `--radius` 10px (kontrol, chip, buton), `--radius-lg` 16px (kart, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 18px | `--radius` | 13px/600 Inter | `--accent` zemin, `--accent-ink`, gölge yok | hover %90 accent (250ms) · active 1px · focus 2px accent · disabled %42 kesikli · loading sönümlenen ışık |
| Buton (ikincil) | 40px | 0 18px | `--radius` | 13px/600 | şeffaf, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 40px | 0 12px | `--radius` | 14px Inter | `--bg-2`, 1px `--line` | focus 2px accent · filled `--surface` · error `--danger` · disabled %42 |
| Kart | içerik | 20px | `--radius-lg` | — | `--surface`, 1px `--line`, `--shadow` | hover'da gölge **büyümez** (yön sabit) |
| Chip / badge | 24px | 0 10px | 999px | 10px/600 mono 0.14em | `--surface-2`, 1px `--line` | seçili: accent zemin |
| Nav | 56px | 0 24px | 0 | 13px/600 | `--bg`, alt 1px `--line` | aktif: accent alt çizgi |
| Tablo satırı | 40px | 6px 12px | 0 | 13px (sayı mono) | alt 1px `--line` | hover: yalnız zemin aydınlanır |
| Modal / sheet | — | 22px | `--radius-lg` | 15px/400 | `--surface`, `--shadow`, %55 bg örtü | tek ışıkla aydınlanır |
| Toast | 40px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--line` | 4s, sağ alt |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (3 seri) | alan dolgusu %12 accent |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`.
- Dokunma hedefi: en az 44×44px; 24px chip ve 40px buton `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 18px ızgara, yuvarlak uç |
| Fotoğraf | Low-key, tek kaynak ışıklı kare; yüz gölgede kalabilir |
| İllüstrasyon | Yok — ışık lekesi ve gölge halkası süsün yerini alır |
| Doku | `--grain: .02` + vinyet ≤ %22; tarama çizgisi yok |
| Logo alanı | Poiret One 400, 0.14em aralık; 14px ışık noktası işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Işık huzmesi 5/7; başlık en aydınlık öğe, tek CTA accent | `shots/01-landing.png` |
| Dashboard | düşük | Kartlar tek ışıkla; KPI'lar soluk gölge, tablo gölgesiz | `shots/02-dashboard.png` |
| Form | düşük | Alanlar `--bg-2`; odak halkası 2px accent | — |
| Liste / tablo | düşük | 40px satır, gölge yok, hover zemin aydınlanır | — |
| Boş durum | orta | Boş sahne + tek ışık lekesi + birincil eylem | — |
| Onboarding | yüksek | Adımlar perde gibi: her adımda tek ışık odağı | — |
| Pricing | orta | Kartlar aynı gölge yönünde; öne çıkan kart accent çerçeve | — |
| Giriş / ödeme | çok düşük | Tek panel, ışık üstte; hata satırı `--danger` | — |
| Modal | orta | %55 örtü, modal tek ışıkla aydınlanır | — |
| Bildirim / toast | orta | Tek satır mono + soluk gölge | — |
| Hata | düşük | Başlık `--danger`; gölge azaltılır (hata "sahnede" kalır) | — |
| Profil / ayar | orta | Işık kaynağı ve tema tercihleri; kontrast önizlemesi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — sahne — tek ışık konisi, düşen gölge kopyası, zemin çizgisi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.43s**, y **18px**, stagger **0.075** | `cubic-bezier(.4,.05,.25,1)` | `opacity` + `transform` |
| Scroll reveal | **0.61s**, trigger **top 79%**, y **20px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **kapalı** (sahne sabittir; ışık kaymaz) | — | — |
| Hover | **250ms**, görsel scale **1.030** | `ease-out` | `transform` |
| Basma | 120ms | aynı eğri | `transform` (1px) |
| Işık sönümü | 220ms | aynı eğri | `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.43s / cubic-bezier(.4,.05,.25,1) / 18px / 0.075` + `scroll top 79% / 0.61s / 20px` + `pin kapalı` + `hover 250ms / 1.030`. Ne `0.43s` giriş süresi ne de `hover 250ms + 1.030` ikilisi katalogdaki başka bir stilde birlikte geçer.
- `prefers-reduced-motion`: tüm süreler 0.01ms; ışık lekesi donar, gölge kayması olmaz.
- Bu stile yasak hareket: çok kaynaklı gölge animasyonu, sürekli ışıma nabzı, parallax, gradient kaydırma.

## Koyu mod

Varsayılan zemin koyu grafittir; `data-theme="dark"` bloğu **sıcak kahve-siyahı** bandına geçer ve altın accent'i parlatır — tek ışık kaynağı metaforu korunur, iki tema yan yana ayırt edilir.

| Token | Açık (sahne) | Koyu (gece sahnesi) |
|---|---|---|
| `--bg` | `#12151a` | `#100c08` |
| `--bg-2` | `#171b21` | `#151009` |
| `--surface` | `#1b2028` | `#19130c` |
| `--surface-2` | `#232a33` | `#221a11` |
| `--ink` | `#eef1f5` | `#f6f3ee` |
| `--ink-soft` | `#adb6c2` | `#c3b9ad` |
| `--ink-faint` | `#7e8896` | `#948a7d` |
| `--accent` | `#e3b341` | `#ffc861` |
| `--accent-ink` | `#1a1405` | `#1a1206` |
| `--line` | `rgba(238,241,245,.15)` | `rgba(246,243,238,.18)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **18.47:1** · `ink-soft/bg` = **10.89:1** · `accent-ink/accent` = **11.48:1** · `ink-faint/bg` = **6.20:1**.
- Koyu modda değişen başka ne var: ışık lekesi %12 → %9, vinyet opaklığı %22 → %26, çizgi .15 → .18.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="shadow-stage"]`.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **10.29:1** açık / **10.95:1** koyu · `--warn / bg` = **10.61:1** / **11.30:1** · `--ok / surface` = 10.36:1 / 10.69:1 (warn) · devre dışı buton metni = **7.82:1** / **9.43:1** · ghost buton kenarı = **5.56:1** / **5.76:1** (eşik 3:1).

## Zorunlu kurallar
- Ekran başına **tek** ışık kaynağı; tüm gölgeler aynı yöne düşer.
- Hiyerarşi parlaklıkla: başlık `--ink`, gövde `--ink-soft`, mikro etiket `--ink-faint`.
- Vinyet ≤ %22 ve daima metnin arkasında; gövde metni gölge içinde kalmaz.
- Accent yalnız aydınlanan öğe (aktif sekme, seçili kart, birincil eylem).
- Poiret One yalnız başlıkta ve 400 ağırlıkta; gövde Inter.
- Sahne ile kart arasında en az bir ton basamağı fark (ΔL ≥ 4).

## Yasaklar
- Çok kaynaklı gölge, renkli drop-shadow, neon glow.
- Gradient mesh/blob arka plan ve cam blur (`--blur: 0px`).
- Poiret One üzerinde 600/700 (sentetik bold).
- 16px üzeri radius, hap buton.
- Metni gölge içinde bırakmak.
- Sürekli yanıp sönen ışık efekti, parallax.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-faint/bg` = 5.10:1 (dekoratif); gövde 16.15:1, accent üstü 9.41:1 — hepsi eşik üstü.
- `--ink-faint` yalnız dekoratif etiket/ayırıcı; etkileşimli metin değil.
- Vinyet metnin arkasında; en köşedeki metin bile ≥ 4.5:1 kontrast korur.
- Odak halkası 2px accent + 2px offset; koyu zeminde net görünür.
- 390px'te vinyet %14'e düşer; taşma yok.
- `prefers-reduced-motion` açıkken ışık ve gölge animasyonu durur.

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
| Sahne "kirli" görünüyor | iki farklı gölge yönü | tüm `--shadow` değerlerini tek yöne sabitle |
| Okunmuyor | metin vinyet içinde | vinyet ≤ %22 + metni opak katmana al |
| "Neon" hissi | accent glow eklendi | glow'u sil, accent'i yalnız zemin/metin olarak kullan |
| Başlık bulanık | Poiret One'a 600 denendi | yalnız 400; hiyerarşiyi punto kurar |
| Koyu modda siyah düz | gölge ve yüzey aynı tonda | `--surface` ile `--bg` arasında ΔL ≥ 4 |
| Mobilde ağır | vinyet + gölge birlikte tam güçte | mobilde vinyet %14, gölge tek katman |

## Komşu stiller

- **Uyumlu:** `dark-academia` — koyu okuma dünyası; ışık vurgusu eklenince ortak dil kurulur.
- **Uyumlu:** `glassmorphism` — cam yüzey istenirse yalnız dekoratif katmanda, blur ≤ 8px.
- **Uyumlu:** `museum-thesis` — küratörlü içerik; ışık dramatikliği sergi afişine taşınır.
- **Yasak:** `memphis` — dekoratif geometri tek ışık kuralını bozar.
- **Yasak:** `dopamine-ui` — çok renkli palet ışık hiyerarşisini anlamsızlaştırır.
- **Yasak:** `acid-graphics` — asit parlaklığı sahne ışığını "neon"a çevirir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Rembrandt_lighting | tek kaynak ışık ve gölge yönü |
| https://m3.material.io/styles/elevation/overview | tek katman gölge ölçüsü |
| https://www.awwwards.com/websites/black/ | koyu zemin + tek ışık kompozisyonları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | gölge içinde kalan metin eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Shadow Stage (styles/101-shadow-stage/style.md, tokens.json)
Token: sadece [data-style="shadow-stage"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Poiret One 400 (tracking .04em, yalnız başlık), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 10/12/15/19/27/50; gövde ölçü 64ch.
Yüzey: koyu sahne (#12151a); tek kaynak ışık (üst-sol), tek katman gölge, köşe vinyeti <= %22.
  Radius 10/16px. Blur/glow yok.
Imza: hero'da üst-sol accent ışık lekesi (%12); tüm gölgeler aynı yöne; başlık en aydınlık öğe.
Renk: tek accent #e3b341 (ışık vurgusu); alarm --danger, uyarı --warn, onay --ok.
Hareket: enter .43s cubic-bezier(.4,.05,.25,1) y18 stagger .075; scroll top 79% .61s y20 once;
  pin yok; hover 250ms scale 1.030; prefers-reduced-motion zorunlu.
Yasak: çok kaynaklı/renkli gölge, gradient mesh, neon glow, Poiret One 600, 16px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tek ışık kaynağı; tüm gölgeler aynı yöne düşüyor.
- [ ] Vinyet ≤ %22 ve metin gölge içinde değil.
- [ ] Kontrast: gövde 16.15:1, accent üstü 9.41:1.
- [ ] Poiret One yalnız başlıkta ve 400.
- [ ] Odak halkası görünür; dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok, vinyet azaltılmış.
- [ ] `prefers-reduced-motion` açıkken ışık/gölge duruyor.

## Token

```css
[data-style="shadow-stage"] {
  --bg: #12151a; --bg-2: #171b21;
  --surface: #1b2028; --surface-2: #232a33;
  --ink: #eef1f5; --ink-soft: #adb6c2; --ink-faint: #7e8896;
  --accent: #e3b341; --accent-ink: #1a1405;
  --line: rgba(238,241,245,.15);
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 24px 60px -42px rgba(0,0,0,.92); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "Poiret One", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: .02;
  --danger: #ff8a7a; --danger-ink: #1c0a07;
  --ok: #7ad4a8; --warn: #e8c06a;
}
```

Koyu mod bloğu `styles/101-shadow-stage/token-block.css` içinde `[data-theme="dark"][data-style="shadow-stage"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
