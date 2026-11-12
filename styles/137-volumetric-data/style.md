# 137 · Hologram & Uzamsal Veri

> **Bir cümlede:** Uzamsal veriyi hacim olarak okutan arayüz: derin lacivert zemin, nokta bulutu yoğunluk haritası, izdüşüm ızgarası ve tek sıcak amber accent.

| | |
|---|---|
| **Hissiyat** | hacimli, ölçülü, tarayıcı, sakin-teknik |
| **En iyi** | 3B tarama/ölçüm paneli, tıbbi görüntüleme (volumetrik), malzeme analizi, dijital ikiz görüntüleyici |
| **Kaçın** | vitrin/landing, moda, duygusal hikâye — hacim dili anlatı taşımaz |
| **Zorluk** | yüksek · **Erişilebilirlik** | düşük risk (en düşük metin çifti 9.08:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `kit/tokens.css` → `[data-style="volumetric-data"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Hologram & Uzamsal Veri, arayüzü **veri hacminin görüntüleyicisi** olarak kurar: nokta bulutu yoğunluk haritası (8px nokta, yoğunluk accent opaklığı), izdüşüm ızgarası, kesit (dilim) barı ve her eksende ölçü etiketi (`x 1.24`, `y 0.86`, `z 0.42`, `±0.03`). Süsü feda eder; karşılığında **uzayda nerede ve ne kadar** sorusunun tek bakışta cevabını verir.

Kurucu kararları üç tanedir. Birincisi **hacim gerçek veridir**: nokta yoğunluğu opaklıkla kodlanır, rastgele dağıtılmaz. İkincisi **tek sıcak accent**: amber yalnız yoğunluk/eşik ve aktif dilim için yanar; ikinci parlak renk yoktur. Üçüncüsü **ghost katman yoktur**: her panel tek yüzeydir, ayrım 1px çizgi ve zemin tonudur — holografik "kopya katman" efekti bilinçli olarak yasaktır.

Bedeli: yoğunluk okuma eğrisi. Bu yüzden kesit barı ve eksen etiketleri zorunludur; dekoratif hologram dili tek başına yeterli sayılmaz.

### Ne değildir
- **Holographic Layer (105) değildir** — adaşlık dışında ölçülebilir dört fark vardır:

| Ölçüt | 105 · Holographic Layer | 137 · Volumetric Data |
|---|---|---|
| Zemin bandı | koyu mor `#0e0b16` | derin lacivert `#0a1428` |
| Display ailesi | Michroma 44px | IBM Plex Mono 40px |
| İmza motif | 12/24px kaydırılmış ghost katman + cam kenar | nokta bulutu yoğunluğu + izdüşüm ızgarası (ghost katman yok) |
| Hareket / pin | pin scrubs 1.25, `+130%` | pin kapalı (scrub yok), `hover 430ms` |

- **Depth Parallax (99) değildir:** 99 üç düzlemi farklı hızda kaydırır (parallax imza); 137'de parallax yok, pin kapalı, derinlik veri yoğunluğundan okunur.
- **Atlas Console (51) değildir:** 51 harita zeminlidir (coğrafi); 137'de harita yok, hacim/eksen var.
- **Telemetry Grid (46) değildir:** 46 hücreli ölçüm ızgarasıdır (2B tablo); 137 üç eksenli hacim ve kesit dilimi kullanır.

### Nereden gelir
Hacim görüntüleme (volume rendering) ve nokta bulutu pratiğinden; tıbbi BT/MR hacim okuma ve endüstriyel 3B tarama arayüzlerinden. Bugün önemli çünkü sensörler 3B veri üretiyor ama paneller hâlâ 2B tablo gösteriyor; kesit + yoğunluk haritası bu boşluğu kapatır. Klişeye dönmemesi için korunacak detay: **her eksenin etiketli ve birimli olması** ve ghost katman yasağı.

### 3 saniyede tanıma testi
1. Zemin derin lacivert; üstünde 8px nokta ızgarası ve hacim bölgesinde yoğunlaşan nokta bulutu var.
2. Kesit barı (0–100%) ve aktif dilim yazılı; altında `x · y · z` etiketleri duruyor.
3. Tek sıcak accent ambar; ikinci parlak renk yok.
4. Hiçbir panelin arkasında ghost/kopya katman yok; gölge yalnız yüzen okuma panelinde.
5. Etiketler mono büyük harf `.14em`; değerler tabular.

## Görsel imza
- **Nokta bulutu:** 7px nokta + 28px izdüşüm ızgarası (accent %42 nokta, ızgara %18).
- **Kesit barı:** 0–100% tek bar; aktif dilim `%42` mono etiketle yazılır.
- **Eksen etiketi:** `x 1.24 · y 0.86 · z 0.42` + tolerans `±0.03`; 10px mono `.14em`.
- **İzo-eğri:** eşik değerinde 1px accent çizgi; dolgu yok.
- **Zemin katmanları:** `bg → bg-2 → surface → surface-2` arasında 4 puan parlaklık farkı.
- **Ghost yasağı:** ofset kopya, blur ve cam yok.
- **Hareket imzası:** 960ms `cubic-bezier(.24,.02,.18,1)`, 38px — hacim "oturur", süzülmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a1428` | sayfa zemini (derin lacivert) | panel zemini |
| `--bg-2` | `#0e1a32` | nav, input zemini | birincil CTA |
| `--surface` | `#122240` | panel / kart | sayfa zemini |
| `--surface-2` | `#17294a` | chip, ikincil yüzey | modal zemini |
| `--ink` | `#e6eef8` | başlık, gövde, ölçü değeri | dekoratif çizgi |
| `--ink-soft` | `#a6b8cf` | açıklama, eksen etiketi | başlık |
| `--ink-faint` | `#6f819a` | yalnız ızgara ve dekoratif çizgi | eksen etiketi, etkileşimli metin |
| `--accent` | `#ffb347` | yoğunluk, eşik, birincil eylem | geniş dekoratif dolgu |
| `--accent-ink` | `#2a1500` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(230,238,248,.16)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **15.70:1** · `ink-soft / bg` = **9.08:1** · `accent-ink / accent` = **9.78:1** · `ink-faint / bg` = **4.62:1** (yalnız ızgara).
- Tek vurgu kuralı: tek sıcak accent. `--danger` (#ff8f87), `--ok` (#6fe0b0), `--warn` (#ffd06e) parlamaz; yalnız eşik etiketi ve metin rengi.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` eksen etiketi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Mono (`--font-display`) | 40px (mobil 26px) | 600 | 1.12 | `-.01em` |
| H2 | IBM Plex Mono | 28px | 600 | 1.20 | `0` |
| H3 | IBM Plex Mono | 20px | 600 | 1.28 | `0` |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.60 | `0` |
| Küçük gövde | Jost | 13px | 400 | 1.55 | `0` |
| Etiket / eksen | Share Tech Mono (`--font-mono`) | 10–11px | 400 | 1.4 | `.14em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 10 · 11 · 13 · 16 · 20 · 28 · 40.
- Ölçü önerisi: `h1 { font-size: clamp(26px, 4vw, 40px); line-height: 1.12 }`.
- Gövde satır uzunluğu en fazla **66ch**; ölçü tabloları 110ch'e kadar genişleyebilir (tabular).
- Ağırlık kuralı: display 600, gövde 400/600, mono 400. Michroma ve geniş display yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (projeksiyon 8, okuma paneli 4) |
| Gutter | 20px |
| Container genişliği | 1280px (içerik 1240px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1280; 768 altında projeksiyon tek kolon, eksen etiketleri kısalır (`x/y/z` yalnız değer) |

- Asimetri kuralı: ekran başına **1** asimetrik bölünme (8/4) — hacim solda geniş, okuma paneli sağda dar.
- Bölüm ritmi: art arda en fazla **3** panel; dördüncüsü tam genişlik kesit şeridi olur.
- Nokta ızgarası 8px; hacim bölgesinde 7px yoğunluk noktaları — iki ızgara üst üste binmez (biri zemin, biri veri).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + nokta ızgarası |
| Panel | `--surface` | yok | hacim paneli, kart (1px line) |
| Yüzen katman | `--surface` + accent çerçeve | `0 10px 30px rgba(3,10,22,.55)` | okuma paneli, modal, toast |

- Kenarlık formülü: `1px solid var(--line)`; aktif ölçüm panelinde `1px solid var(--accent)`.
- Derinlik nereden gelir: **veri hacmi + zemin tonu**; gölge yalnız yüzen panelde. Ghost/ofset kopya yok.
- Radius: `--radius: 4px` (buton, input, chip), `--radius-lg: 10px` (panel, modal). Üst sınır 10px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | `0 16px` | 4px | 12px mono 600 `.12em` uppercase | accent dolgu, accent-ink metin, gölge yok | hover: accent %86 + ink · active: translateY(1px) · focus: 2px accent outline + 3px offset · disabled: opacity .4 + kesikli · loading: dilim taraması %0→%100 (800ms) |
| Buton (ikincil) | 40px | `0 16px` | 4px | 12px mono | şeffaf + 1px accent %50 | hover: accent %12 zemin |
| Input | 40px | `0 12px` | 4px | 13px mono | `--bg-2` + 1px `--line` | focus: accent çerçeve + 2px outline offset 2px · error: `--danger` çerçeve + 10px etiket · disabled: opacity .4 |
| Panel | içerik | 20px | 10px | H3 + gövde | `--surface` + 1px `--line`, gölge yok | hover: çerçeve accent %30 |
| Chip / badge | 22px | `0 8px` | 4px | 10px mono `.14em` | `--surface-2` + 1px `--line` | accent: accent %16 zemin + accent metin |
| Nav | 56px | `0 24px` | 0 | 14px Jost | `--bg-2` + alt hairline | sağda kesit göstergesi (0–100%) |
| Tablo satırı | 36px | `6px 10px` | — | 12px mono, tabular-nums | satır arası 1px `--line` | hover: `--surface-2`; seçili: sol 2px accent |
| Modal (okuma) | içerik | 22px | 10px | 20px display + mono eksen | `--surface` + 1px accent + `0 10px 30px` | açılış: 38px oturma, 960ms |
| Toast | 36px | `8px 12px` | 4px | 12px mono | `--surface` + sol uçta 6px accent nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; izo-eğri 1px, dolgu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — nokta ızgarası üstünde 1–2px offset kaybolur.
- Dokunma hedefi: en az 44×44px; 40px buton mobilde `min-height: 44px`. Kesit barı sürüklenebilir + ok tuşlarıyla da çalışır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 24px ızgara; eksen, dilim, izo-yüzey sembolleri |
| Fotoğraf | yok — veri hacmi fotoğrafın yerini alır |
| İllüstrasyon | nokta bulutu + izdüşüm ızgarası zorunlu imza |
| Doku | 8px nokta zemini + 7px veri noktaları; grain yok |
| Logo alanı | mono büyük harf + eksen işareti, 20px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | solda H1 + eksen etiketleri, sağda hacim görseli | `shots/01-landing.png` |
| Dashboard | **yüksek** | 8/4: hacim + okuma paneli; kesit barı üstte | `shots/02-dashboard.png` |
| Form | düşük | 40px mono input; değer + tolerans alanları | — |
| Liste / tablo | orta | 36px satır, tabular ölçü, eksen kolonu | — |
| Boş durum | orta | boş hacim: soluk nokta ızgarası + "tarama yok" mono | — |
| Onboarding | yüksek | 3 adım: tara → dilim seç → eşik belirle | — |
| Pricing | orta | plan tablosu; hacim limiti mono | — |
| Giriş / ödeme | çok düşük | hacim yok; tek accent, sade form | — |
| Modal | orta | okuma paneli: x/y/z + tolerans + yoğunluk | — |
| Bildirim / toast | orta | sağ-alt, 6px accent nokta | — |
| Hata | orta | eşik aşımı: `--danger` izo-eğri + etiket | — |
| Profil / ayar | orta | birim/tolerans ayarları, mono | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **960ms** | `cubic-bezier(.24,.02,.18,1)` | `opacity` + `translateY(38px)`; stagger **0.098s** |
| Scroll reveal | **890ms** | aynı eğri | trigger `top 63%`, `translateY(31px)`, `once: true` |
| Pin / scrub | yok | — | pin **kapalı** (105'in pin scrubs 1.25 imzasından bilinçli ayrılık) |
| Basma | **150ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 380ms | aynı eğri | opacity + 16px |
| Hover | **430ms** | aynı eğri | görsel ölçek **1.029** |
| Ödül / vurgu | 960ms | aynı eğri | kesit dilimi %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.96s / cubic-bezier(.24,.02,.18,1) / 38px / 0.098` · `scroll = top 63% / 0.89s / 31px / once` · `pin = false` · `hover = 430ms / 1.029`.
- Bant içi fark: 136'dan (0.41s / 11px / pin 0.58), 138'den (0.27s / 1px), 139'den (1.08s / 46px / pin 1.18), 140'tan (0.61s / 21px / pin 0.4) en az dört parametrede ayrışır. Mevcut 126 stil içinde en yakını 105-holographic-layer (`0.97s / .32,.06,.2,1 / 28px / 0.11`) — eğri, offset, trigger, pin (kapalı) ve hover'da farklı; `top 63%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, kesit taraması ve izo-eğri çizimi son kareye atlar.
- Bu stile yasak hareket: ghost/parallax katman animasyonu, dilim oynatma dışında sürekli tarama, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0a1428` | `#010306` |
| `--surface` | `#122240` | `#0b1a2e` |
| `--ink` | `#e6eef8` | `#f7faff` |
| `--accent` | `#ffb347` | `#ffdf9e` |
| `--ink-soft` | `#a6b8cf` | `#c3d3e6` |
| `--line` | `rgba(230,238,248,.16)` | `rgba(247,250,255,.20)` |

- Koyu modda değişen başka ne var: zemin dört puan daha koyu (nokta bulutu ayrışsın), accent bir ton açılır, izdüşüm ızgarası %18 → %22 ve yoğunluk noktaları %42 → %50.
- Koyu mod ayrışması: zemin `#010306` (ışık modun %12 parlaklığı), panel bandı **11.9×** daha açık, accent amber → açık altın `#ffdf9e` (kontrast 1.38×).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Nokta bulutu yoğunluk haritası imza öğedir; yoğunluk accent opaklığıyla kodlanır.
- Her projeksiyon eksen etiketli ve birimli: `x 1.24`, `y 0.86`, `z 0.42`, tolerans `±0.03`.
- Tek sıcak accent (amber); ikinci parlak renk ve mor holografik ton yok.
- Ghost/offset katman yok; her panel tek yüzey, ayrım 1px line.
- Kesit (dilim) göstergesi zorunlu: 0–100% tek bar, aktif dilim yazılı.
- Radius 4px kontrol / 10px panel; hap köşe yok.

## Yasaklar
- Michroma/geniş display ve mor holografik zemin (105 ile örtüşür).
- Ghost kopya katman, 12/24px ofset kopya, cam/blur.
- Parallax ve pin-scrub (bu stilde pin kapalı).
- Süs amaçlı nokta bulutu (her nokta yoğunluk değeri taşır).
- Fotoğraf, 3B render, renkli glow.
- Renk-only eşik bildirimi (etiket yazılır).

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.08:1** (eşik 4.5); `ink-faint / bg` = **4.62:1** yalnız ızgarada.
- `--ink-faint` eksen etiketinde kullanılmaz; eksen ve ölçü daima `--ink-soft`.
- Hareket/parlama hassasiyeti: düşük — flash yok, sürekli animasyon yok; `prefers-reduced-motion` kesit taramasını durdurur.
- Şeffaf yüzey yok; opak fallback gerekmez. `radial-gradient` yoğunluk desteklenmezse noktalar düz accent noktaya düşer (yoğunluk bilgisi tabloda korunur).
- Odak görünürlüğü: 2px accent outline + **3px** offset (nokta ızgarası offset'i yutar).
- Kesit barı klavye ile de çalışır: `←/→` 1% adım, `Shift+←/→` 10% adım (WCAG 2.5.7 karşılığı).

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
| "Hologram dekoru" gibi | ghost katman eklenmiş | tek yüzey panel + nokta bulutu verisi |
| 105 ile karışıyor | mor zemin + Michroma | lacivert zemin + IBM Plex Mono |
| Yoğunluk okunmuyor | nokta opaklığı sabit | accent opaklığını yoğunluğa bağla |
| Eksen kayboluyor | 10px altı / `--ink-faint` | 10–11px ve `--ink-soft` |
| Kesit barı belirsiz | aktif dilim yazılmamış | `%42 · KATMAN 3` etiketi |
| Göz yorulması | 6px altı nokta ızgarası | zemin 8px, veri 7px |

## Komşu stiller

- **Uyumlu:** `depth-parallax` — derinlik dili; yalnız hero katmanında garnitür.
- **Uyumlu:** `atlas-console` — coğrafi bağlam gerektiğinde harita katmanı.
- **Uyumlu:** `telemetry-grid` — 2B ölçüm tablosu gerektiğinde alt panel.
- **Yasak:** `claymorphism` — yumuşak pastel formlar hacim ölçümünü bozar.
- **Yasak:** `scrapbook` — kolaj dili eksen disiplinini kırar.

| Eksen (5) | 137 · Volumetric | 105 · Holographic Layer |
|---|---|---|
| Display ailesi | IBM Plex Mono 600 | Michroma 400 |
| Zemin bandı | derin lacivert `#0a1428` | koyu mor `#0e0b16` |
| Accent hue | sıcak amber `#ffb347` | mor `#8f7bff` |
| Radius ölçeği | 4 / 10px | 20 / 28px |
| İmza motif / motion | nokta bulutu + kesit · pin kapalı · top 63% | ghost katman · pin 1.25 · top 76% |

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Volume_rendering | yoğunluk haritası ve izo-yüzey |
| https://en.wikipedia.org/wiki/Point_cloud | nokta bulutu ve eksen etiketleri |
| https://en.wikipedia.org/wiki/Isosurface | izo-eğri ve eşik değeri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | nokta/çizgi kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Hologram & Uzamsal Veri (styles/137-volumetric-data/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="volumetric-data"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg derin lacivert + 8px nokta ızgarası; hacim bölgesinde 7px yoğunluk noktaları (accent opaklık).
Tipografi: --font-display IBM Plex Mono 40/28/20 (600); --font-body Jost 16px/1.60;
  --font-mono Share Tech Mono 10–11px eksen etiketi (.14em, uppercase, birim zorunlu).
Yüzey: --bg / --surface (1px var(--line), gölge yok) / yüzen okuma paneli + 0 10px 30px. Radius 4px / 10px.
Renk: tek sıcak accent amber #ffb347; ink/bg 15.70:1, ink-soft/bg 9.08:1, accent-ink/accent 9.78:1, ink-faint/bg 4.62:1.
İmza: nokta bulutu yoğunluk haritası + izdüşüm ızgarası + kesit barı (0–100%) + `x · y · z ±tol`.
YASAK: ghost/offset katman, cam/blur, Michroma, mor zemin, pin/parallax (105 ile örtüşmemek için).
Hareket: enter 960ms cubic-bezier(.24,.02,.18,1) 38px stagger .098; scroll top 63% 890ms 31px once;
  pin KAPALI; hover 430ms görsel 1.029. prefers-reduced-motion zorunlu.
Çıktı: bileşen kodu + tek paragraf not (nokta bulutunu ve kesit barını nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: nokta bulutu, izdüşüm ızgarası, kesit barı, eksen etiketi.
- [ ] Hard-coded renk/gölge/radius yok; ghost katman yok.
- [ ] Kontrast: 15.70 / 9.08 / 9.78 — hepsi eşik üstü.
- [ ] Her eksen birimli; odak halkası 2px accent + 3px offset.
- [ ] 390px'te tek kolon, eksen etiketleri kısalıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken kesit taraması duruyor.

## Token

```css
[data-style="volumetric-data"] {
  --bg: #0a1428; --bg-2: #0e1a32;
  --surface: #122240; --surface-2: #17294a;
  --ink: #e6eef8; --ink-soft: #a6b8cf; --ink-faint: #6f819a;
  --accent: #ffb347; --accent-ink: #2a1500;
  --line: rgba(230,238,248,.16);
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 10px 30px rgba(3,10,22,.55); --shadow-hard: none;
  --font-display: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .03em; --blur: 0px; --grain: 0;
  --danger: #ff8f87; --danger-ink: #0a1428;
  --ok: #6fe0b0; --warn: #ffd06e;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="volumetric-data"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
