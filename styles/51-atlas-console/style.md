# 51 · Atlas Console

> **Bir cümlede:** Haritayı arayüzün zemini sayan, koordinat şeridi ve katman disipliniyle çalışan lacivert saha konsolu; süsü pusula, ölçek ve lejantla değiştirir.

| | |
|---|---|
| **Hissiyat** | saha odaklı, ölçülü, serin, koordinatlı |
| **En iyi** | saha operasyon konsolu, lojistik/kurye izleme, afet koordinasyonu, çoklu bölge yönetimi |
| **Kaçın** | editoryal içerik, çocuk/wellness ürünü, vitrin e-ticareti — harita yoksa stil boş bir koyu panel olur |
| **Zorluk** | yüksek · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.48:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `styles/51-atlas-console/tokens.json` → `[data-style="atlas-console"]` |
| **Kompozisyon** | `index` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Atlas Console, bir arayüzü **haritanın etrafına kurulmuş bir konsol** olarak ele alır: harita paneli sayfanın ortasında ve zeminin kendisidir; sol tarafta katman/varlık listesi, sağ tarafta lejant ve ölçek durur. Lacivert palet keyfi bir "dark mode" değil, vektör harita zemininin üstünde metnin ve pinlerin okunması için alınmış bir karardır.

Üç kurucu karar vardır. (1) **Koordinat şeridi**: her harita panelinin üst ve alt kenarında 1px çizgi üzerinde mono koordinat rakamları yürür; bu şerit stilin imzasıdır ve süs değil ölçüm aracıdır. (2) **Katman hiyerarşisi**: zemin, veri katmanı ve etiket katmanı birbirinden yalnızca 1px `--line` çizgisi ve yüzde 4 zemin farkıyla ayrılır; glow, blur veya renkli gradient yoktur. (3) **Tek accent = tek anlam**: çelik mavi accent yalnız "seçili / aktif rota" durumunu anlatır; alarm her zaman `--danger`, sönük durum `--ink-soft`.

Bedeli: bu stil ekranın yarısını haritaya verir. Harita olmayan bir sayfada (fiyatlandırma, makale) ritmi korumak için koordinat şeridi ve lejant rayı taşınır — stil, haritasız ekranda bile "ölçüm" hissini korumak zorundadır. Serif display (Cinzel) bu yüzden küçük tutulur: harita tipografisi bağırmaz.

### Ne değildir
- **Trading Desk (47) değildir:** 47 grafit zemin + amber accent + Rajdhani ile fiyat/pozisyon panosu kurar, radius 2/4'tür; Atlas lacivert zemin + çelik mavi accent + Cinzel kullanır, radius 8/16'dır ve form dili koordinat şeridi/lejant rayıdır (47'de ticker ve emir defteri vardır).
- **Blueprint Drawing (56) değildir:** 56 cyanotype mavi zemin + cyan accent + keskin 0px köşe ile teknik çizim paftasıdır; Atlas'ta 8/16px yuvarlak panel ve ölçüm şeridi vardır, çizim ızgarası 8/64px değil 32px kartografik ızgaradır.
- **Terminal UI (45) değildir:** 45 tek mono aile + karakter ızgarası + 32px sabit satır kullanır; Atlas'ta tek mono yoktur (Inter gövde + IBM Plex Mono yalnız koordinat).
- **Telemetry Grid (46) değildir:** 46 açık zeminli, eşit hücreli hairline metrik ızgarasıdır; Atlas koyu ve asimetriktir (7/5 harita/liste bölünmesi).

### Nereden gelir
Hidrografi/ofis haritaları (admiralty chart), harita odası estetiği (plotting table, asetat katmanlar) ve modern lojistik konsolları (Uber Base, Mapbox Studio, CARTO Dark Matter). Cinzel'in Roma kapital harfleri burada gravür başlık hissi verir; gövde sade kalır. Bugün yeniden kullanılmasının nedeni operasyon ekiplerinin aynı ekranda hem **konum** hem **durum** görmek istemesi. Klişeye dönüşmemesi için korunacak detay: koordinat şeridinin gerçekten rakam taşıması ve katman ayrımının tek çizgiyle kurulması — süs olarak "grid" basmak stili bozar.

### 3 saniyede tanıma testi
1. Ekranın bir yarısı harita paneli; üst/alt kenarında mono koordinat rakamları var.
2. Zemin lacivert-siyah; hiçbir yerde glow, blur veya renkli gradient yok.
3. Pin üç durumdan biri: nötr (`--ink-soft`), seçili (çelik mavi accent), alarm (`--danger`).
4. Sağ üstte lejant rayı: 3 katman chip'i, seçili olan accent zeminli.
5. Başlıklar Cinzel (geniş harf aralıklı serif kapital), sayılar mono ve sağa hizalı.

## Görsel imza
- **Kartografik ızgara:** 32px aralıklı 1px çizgi, `--line` ile; yalnız harita panelinde.
- **Koordinat şeridi:** 10px mono rakam, 8px harf aralığı, 1px üst/alt çizgi; şerit yüksekliği 20px.
- **Pin dili:** 10px dolu daire + 3px `--bg` halka + 1.5px accent halka; dokunma hedefi 44×44px.
- **Lejant rayı:** 3 chip, yükseklik 24px, radius 999px; seçili chip accent zemin + `--accent-ink` metin.
- **Katman ayrımı:** 1px `--line` + `--surface` içinde yüzde 4 açık ton; gölge yok (yalnız modalda `--shadow`).
- **Radius:** kart/panel 16px (`--radius-lg`), kontrol 8px (`--radius`); pin balonu ve chip 4px'e kadar inebilir, 16px üstü yasak.
- **Doku:** `--grain: .03` (harita kağıdı hissi), tarama çizgisi ve noise overlay yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0d1520` | sayfa zemini, harita çerçevesi | kart zemini |
| `--bg-2` | `#111b28` | ikincil zemin, input zemini | harita paneli |
| `--surface` | `#14202e` | panel, liste, lejant rayı | birincil buton |
| `--surface-2` | `#1a2836` | hover satır, seçili olmayan chip | harita zemini |
| `--ink` | `#e9eef6` | metin, değer, başlık | dekoratif dolgu |
| `--ink-soft` | `#a7b7cb` | ikincil metin, nötr pin | alarm metni |
| `--ink-faint` | `#7c8ea6` | yalnız dekoratif koordinat/ayırıcı | etkileşimli metin |
| `--accent` | `#7fa8f0` | seçili pin, aktif rota, birincil eylem | dekorasyon, ikinci durum |
| `--accent-ink` | `#081120` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(233,238,246,.16)` | tüm çerçeve ve koordinat şeridi | metin |

- Ölçülen kontrast: `ink/bg` = **15.74:1** · `ink-soft/bg` = **8.98:1** · `accent-ink/accent` = **7.88:1** · `ink-faint/bg` = **5.48:1**.
- Tek vurgu kuralı: accent yalnız seçim/aktif rota. Alarm `--danger`, uyarı `--warn`, sağlıklı `--ok`; accent ile alarm aynı ekranda yan yana gelirse accent küçültülür (yalnız çizgi/çerçeve).
- Yasak kombinasyon: accent zemin üstünde `--ink-soft` metin; iki farklı pin rengini aynı kümeye vermek.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel (`--font-display`) | 48px / mobil 28px | 600 | 1.08 | `--tracking` 0.06em |
| H2 | Cinzel | 26px | 600 | 1.22 | 0.03em |
| H3 | Inter | 19px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.58 | 0 |
| Etiket / koordinat | IBM Plex Mono (`--font-mono`) | 10–12px | 400 | 1.4 | 0.16em |

- Ölçek oranı ≈ 1.4; yalnız 6 basamak kullanılır: 10 · 12 · 15 · 19 · 26 · 48.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.8vw, 48px); }`
- Gövde metni maksimum satır uzunluğu: 66 ch; panel içi açıklama 52 ch.
- Ağırlık kuralı: gövde 400/600, display yalnız 600 (Cinzel'de 700 yok — sentetik kalınlaştırma yasak).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1240px (konsol ekranlarında tam genişlik) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 tam üç sütun · 768 iki sütun (harita üstte) · 390 tek sütun, harita 16:9 sabit oran |

- Asimetri kuralı: ekran başına en fazla bir 7/5 bölünme (harita/liste). Diğer tüm bloklar simetrik.
- Bölüm ritmi: art arda en fazla 3 blok aynı sol hizada başlar; dördüncü blok ya tam genişlik ya sağa yaslanır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve harita çerçevesi |
| Kart | `--surface` | yok | panel, liste, lejant |
| Yüzen katman | `--surface` + `--shadow` | `0 18px 40px -32px rgba(4,8,14,.9)` | modal, cihaz detay paneli |

- Kenarlık formülü: `1px solid var(--line)`; harita panelinde ek olarak üst/alt 1px koordinat şeridi çizgisi.
- Derinlik nereden gelir: katman çizgisinden ve zemin tonu farkından; ışık/parlama yok.
- Radius: `--radius` 8px (kontrol, chip, buton), `--radius-lg` 16px (kart, panel, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 16px | `--radius` | 13px/600 Inter 0.01em | `--accent` zemin, `--accent-ink` metin, gölge yok | hover %88 accent · active 1px aşağı · focus 2px accent outset · disabled %45 kesikli · loading 12px halka |
| Buton (ikincil) | 40px | 0 16px | `--radius` | 13px/600 Inter | şeffaf zemin, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 40px | 0 12px | `--radius` | 13px mono (koordinat) | `--bg-2` zemin, 1px `--line` | focus 2px accent · filled `--surface` · error `--danger` · disabled %45 |
| Kart | içerik | 16px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | hover yalnız liste satırlarında |
| Chip / badge | 24px | 0 10px | 999px | 10px/600 mono 0.12em | `--surface-2`, 1px `--line` | selected accent zemin + accent-ink |
| Nav | 52px | 0 24px | 0 | 13px/600 | `--bg`, alt 1px `--line` | aktif sekme 2px accent alt çizgi |
| Tablo satırı | 40px | 6px 12px | 0 | 13px (sayı mono) | alt 1px `--line` | hover `--surface-2` · seçili sol 3px accent |
| Modal / sheet | — | 20px | `--radius-lg` | 15px/400 | `--surface`, 1px `--line`, `--shadow` | ≥900px yan panel olarak açar |
| Toast | 40px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--line` | 4s, sağ alt, harita üstü tek satır |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (en fazla 3 seri) | sparkline yalnız panel içinde |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` (lacivert zeminde 1px yerine 2px — görünürlük için).
- Dokunma hedefi: en az 44×44px; pin ve lejant chip'i görsel olarak 24px ama `::before` ile 44px hedef alanı taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 18px ızgara, yuvarlak uç; dolu ikon yok |
| Fotoğraf | Uydu fotoğrafı yok; harita vektör katman. Zorunluysa %60 doygunluk + 1px çerçeve |
| İllüstrasyon | Yok — lejant, ölçek çubuğu ve koordinat şeridi süsün yerini alır |
| Doku | `--grain: .03` harita kağıdı; tarama çizgisi, noise overlay yasak |
| Logo alanı | Kelime logosu (Cinzel 600, 0.1em), sol üstte 24px boşluk; 16px pusula gülü işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Harita paneli sağda 7/5, solda tek cümle + 2 CTA; koordinat şeridi hero'da da görünür | `shots/01-landing.png` |
| Dashboard | yüksek | Sol varlık listesi + orta harita + sağ lejant; KPI'lar liste üstünde 3 satır | `shots/02-dashboard.png` |
| Form | düşük | Koordinat girişi mono, sağa hizalı; alan genişliği 320px | — |
| Liste / tablo | yüksek | 40px satır, koordinat mono sağa hizalı, seçili satır sol 3px accent | — |
| Boş durum | orta | Harita zemini boş bırakılmaz: nötr vektör arka plan + "bölge seç" eylemi | — |
| Onboarding | yüksek | Adımlar sol şeritte 1-2-3, her adımda tek harita görevi | — |
| Pricing | orta | Bölge sayısı tablosu; harita küçük önizleme olarak sağda | — |
| Giriş / ödeme | çok düşük | Kimlik doğrulamada harita yok, yalnız koordinat şeridi dokusu | — |
| Modal | orta | Varlık detayı yan panel; üstte koordinat, altta zaman damgalı olay listesi | — |
| Bildirim / toast | orta | Tek satır: pin kimliği + durum + saat (mono) | — |
| Hata | düşük | `--danger` pin + "bölgeye ulaşılamadı" metni; harita gri kalır | — |
| Profil / ayar | orta | Katman varsayılanları, ölçek birimi, koordinat formatı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.44s**, `cubic-bezier(.25,.46,.45,.94)`, y **12px**, stagger **0.07** | `cubic-bezier(.25,.46,.45,.94)` | `opacity` + `transform` |
| Scroll reveal | **0.5s**, trigger **top 78%**, y **18px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **0.6**, mesafe **+90%** (harita panelinde tek pin) | scrub doğrusal | `transform: scale` 1 → 1.04 |
| Hover | **120ms**, görsel scale **1.010** | `ease-out` | `transform` |
| Basma | 120ms | aynı eğri | `transform` (1px) |
| Katman geçişi | 200ms | aynı eğri | `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.44s / cubic-bezier(.25,.46,.45,.94) / 12px / 0.07` + `scroll top 78% / 0.5s / 18px` + `pin scrub 0.6 / +90%` + `hover 120ms / 1.010`. `cubic-bezier(.25,.46,.45,.94)` ve `0.44s` giriş katalogda yalnız burada; `top 78%` + pseudo-class pin kombinasyonu 47'de (top 92%) ve 56'da (top 88%) yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin scrub kapanır, harita statik iğneye döner; koordinat şeridi kaymaz.
- Bu stile yasak hareket: otomatik harita panı, sürekli dönen pusula, parallax katman kaydırma, 3'ten fazla flash.

## Koyu mod

Koyu modda harita zemini iki kademe derinleşir (ΔL −13) ve ızgara opaklığı artar; accent mavi yerine stilin kimliğindeki amber’e çekilir (aynı hue, daha parlak ton).

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#0d1520` | `#04090f` |
| `--bg-2` | `#121c29` | `#070e17` |
| `--surface` | `#16222f` | `#0a1420` |
| `--surface-2` | `#1c2a39` | `#101d2c` |
| `--ink` | `#e7eef4` | `#f2f7fc` |
| `--ink-soft` | `#a4b4c2` | `#b3c2d0` |
| `--accent` | `#e8b04b` | `#ffcf7a` |
| `--accent-ink` | `#1a1206` | `#1d1407` |

- Koyu modda değişen başka ne var: harita ızgarası %14 → %22, waypoint halkası 3px accent %24. Ölçüm: `ink/bg` 17.96:1, `accent-ink/accent` 11.99:1.

## Zorunlu kurallar
- Harita paneli ekranın en büyük tek yüzeyi olmalı (en az %45 alan); harita yoksa koordinat şeridi + lejant rayı taşınır.
- Koordinat şeridi her harita panelinde: 10px mono, 8px rakam aralığı, 1px üst/alt çizgi.
- Pin üç durum (nötr / seçili / alarm) ve 44×44px dokunma hedefi; seçili pin accent, alarm pin `--danger`.
- Katman ayrımı yalnız 1px `--line` + %4 ton farkı; glow/blur/gradient yok.
- Tüm sayısal değerler `--font-mono` + `tabular-nums`; birim her değerin yanında.
- Display Cinzel yalnız başlıkta ve 600 ağırlıkta; gövde Inter'de kalır.
- Zaman damgası görünür her veri yüzeyinde (saat + dakika, mono) — saha kararı zamansız veriyle verilmez.

## Yasaklar
- Açık (beyaz) zemin; bu stil lacivert saha konsoludur.
- Uydu fotoğrafı veya renkli arazi görselini arka plan yapmak.
- Neon glow, cam bulanıklık, renkli gradient atmosfer, iç gölge.
- 16px üzeri radius, yuvarlak pin balonu, gölgeli kart.
- İkiden fazla accent tonu; accent ile `--danger`'ı aynı hiyerarşide kullanmak.
- Amber/turuncu accent (bu stil çelik mavi kullanır — Trading Desk 47 ile karışır).
- Harita üstünde otomatik pan/parallax, sürekli dönen pusula.
- Dekoratif illüstrasyon ve emoji ile durum bildirimi.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-faint/bg` = 5.48:1 (dekoratif); gövde 15.74:1, accent üstü 7.88:1 — hepsi eşik üstünde.
- `--ink-faint` yalnız dekoratif koordinat ve ayırıcıda; etkileşimli metin değil.
- Pin ve katman durumu yalnız renkle anlatılmaz: pin şekli + mono etiket + lejant satırı birlikte.
- Lacivert zeminde odak halkası 2px accent + 2px offset; harita üstünde halka `--bg` ile çevrelenir (pin halkasıyla karışmaz).
- 390px'te harita 16:9 sabit oran, liste altına iner; yatay sayfa kaydırması yok.
- `prefers-reduced-motion` açıkken pin scrub ve katman geçişi durur; koordinat şeridi statik kalır.
- Harita paneli klavyeyle gezilebilir: ok tuşları pan, `+/-` zoom, `esc` seçimi bırakır; kısayollar panel altında mono yazılır.

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
| "Oyun haritası" gibi görünüyor | neon pin + glow + gradient | accent'i tek tut, glow'u sil, pin 3 duruma indir |
| 47 ile karışıyor | amber accent + grafit zemin | accent çelik maviye, zemin laciverte sabitlenir |
| Harita okunmuyor | zemin ile pin aynı tonda | pin halkası `--bg` ile çevrelenir (3px) |
| Panel haritanın üstünde yüzüyor | gölge + cam blur | gölgeyi kaldır, 1px `--line` kullan |
| Koordinatlar kayıyor | oransal font + px genişlik | mono + `ch` birimi + sağa hizalama |
| Cinzel her yerde | display gövdeye taşmış | display yalnız h1/h2; gövde Inter |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı operasyon kitlesi; log bölümlerinde terminal estetiği ile yan yana çalışır.
- **Uyumlu:** `scandinavian-dark` — koyu zemin + hairline ortak; pazarlama sayfasında sessiz varyant olarak kullanılır.
- **Uyumlu:** `bento-grid` — rapor ekranlarında harita panelini hücreye oturtmak için.
- **Yasak:** `claymorphism` — yumuşak gölge ve 999px radius, harita kenarlarını eritir.
- **Yasak:** `memphis` — dekoratif geometri koordinat disiplinini bozar.
- **Yasak:** `dopamine-ui` — çok renkli palet pin hiyerarşisini anlamsızlaştırır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://docs.mapbox.com/studio-manual/guides/ | katman/lejant disiplini, harita tipografisi |
| https://baseweb.design/ | koyu operasyon paneli, yoğun tablo satırı |
| https://carto.com/basemaps/ | koyu harita zemini ve kontrast hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | pin ve harita çizgisi kontrast ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Atlas Console (styles/51-atlas-console/style.md, tokens.json)
Token: sadece [data-style="atlas-console"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Cinzel 600 (tracking .06em, yalnız h1/h2), gövde Inter 400/600,
  sayı+koordinat IBM Plex Mono. Ölçek 10/12/15/19/26/48; gövde ölçü 66ch.
Yüzey: lacivert (#0d1520); katman ayrımı 1px var(--line) + %4 ton. Glow/blur/gradient yok.
  Radius: --radius 8px, --radius-lg 16px. Gölge yalnız modalda.
Imza: harita paneli en büyük yüzey; üst/alt kenarda 10px mono koordinat şeridi;
  sağ üstte 3 katmanlı lejant rayı; pin 3 durum (nötr/seçili/alarm) 44px hedef.
Renk: tek accent #7fa8f0 (seçim/aktif rota); alarm --danger, uyarı --warn, sağlıklı --ok.
Hareket: enter .44s cubic-bezier(.25,.46,.45,.94) y12 stagger .07; scroll top 78% .5s y18 once;
  1 pin scrub .6 (+90%, scale 1→1.04); hover 120ms scale 1.010; prefers-reduced-motion zorunlu.
Yasak: açık zemin, uydu fotoğrafı, amber accent, neon glow, 16px üstü radius, otomatik pan.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Harita paneli ekranın ≥%45'i; koordinat şeridi görünür.
- [ ] Pin üç durumu da kodda var, dokunma hedefi 44px.
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (15.74), accent üstü ≥ 4.5:1 (7.88).
- [ ] Odak halkası lacivert zeminde görünür; klavye ile pan/zoom çalışıyor.
- [ ] 390px'te taşma yok; harita 16:9 sabit.
- [ ] `prefers-reduced-motion` açıkken scrub ve geçişler duruyor.

## Token

```css
[data-style="atlas-console"] {
  --bg: #0d1520; --bg-2: #111b28;
  --surface: #14202e; --surface-2: #1a2836;
  --ink: #e9eef6; --ink-soft: #a7b7cb; --ink-faint: #7c8ea6;
  --accent: #7fa8f0; --accent-ink: #081120;
  --line: rgba(233,238,246,.16);
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 18px 40px -32px rgba(4,8,14,.9); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "Cinzel", ui-serif, Georgia, serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: .03;
  --danger: #ff8a70; --danger-ink: #1a0c07;
  --ok: #7fd4a8; --warn: #f0c46a;
}
```

Koyu mod bloğu `styles/51-atlas-console/token-block.css` içinde `[data-theme="dark"][data-style="atlas-console"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
