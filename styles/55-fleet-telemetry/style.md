# 55 · Fleet Telemetry

> **Bir cümlede:** Binlerce cihazın bağlantısını kapsama ızgarası ve tek satırlık cihaz kimliğiyle okuyan; accent'in yalnız "bağlantı aktif" anlamına geldiği filo konsolu.

| | |
|---|---|
| **Hissiyat** | tetikte, teknik, sakin, izleyen |
| **En iyi** | IoT filo kontrolü, cihaz filosu izleme, saha sensör ağı, uzaktan bakım/kumanda konsolu |
| **Kaçın** | lüks vitrin, editoryal içerik, çocuk/wellness ürünü — sürekli sayı "gürültü" olarak okunur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.07:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `styles/55-fleet-telemetry/tokens.json` → `[data-style="fleet-telemetry"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Fleet Telemetry, bir **cihaz filosunun bağlantı durumunu** tek ekranda tutar: her cihaz tek satırda kimlik + durum kodu + sinyal çubuğu + son görülme saati gösterir; üstte kapsama ızgarası (20px nokta/hex deseni) hangi hücrelerde cihaz olduğunu, altta telemetri şeridi (ticker) son uplink olaylarını akıtır. Tipografi telegraphic'tir: display **Share Tech Mono** (tek ağırlık), gövde Inter, sayı JetBrains Mono.

Üç kurucu karar: (1) **kapsama önce** — kullanıcı önce "hangi bölgede cihaz var/yok" sorusunu görür, sonra tek tek cihazları; ızgara deseni dekor değil, kapsama haritasıdır. (2) **satır = cihaz** — her cihaz tek satırda beş alan taşır (kimlik, durum, sinyal, batarya, son görülme); kart yığını yoktur, yoğunluk 36px satırdadır. (3) **tek accent tek anlam** — ahududu accent yalnız "bağlantı aktif / seçili cihaz"; uyarı `--warn`, arıza `--danger`, uykuda `--ink-soft`.

Bedeli: bu stil bir "vitrin" değildir; pazarlama sayfasında büyük başlık ve geniş boşluk beklenmemelidir. Dengeli görünmesini sağlayan tek şey **hizalı sütunlar ve tek renk disiplini**.

### Ne değildir
- **Telemetry Grid (46) değildir:** 46 açık gri zeminde eşit hairline metrik hücreleri (12 tile, 24px ızgara, Chakra Petch) kurar ve **teal** accent kullanır; Fleet'te kapsama nokta ızgarası + 36px cihaz satırı + **ahududu** accent + Share Tech Mono vardır, radius 0/2'dir (46'da 4/10).
- **Machined Metal Panel (57) değildir:** 57 fırçalanmış metal dokusu, Michroma display ve bakır accent ile donanım paneli estetiğidir; Fleet'te doku yoktur (`--grain: .02`), accent ahudududur ve kapsama ızgarası vardır.
- **MES Production Line (59) değildir:** 59 üretim hattı nabzını yeşil accent + JetBrains Mono display ile verir; Fleet'te display Share Tech Mono, accent ahududu, dil "filo/bağlantı"dır (hat/istasyon değil).
- **Maintenance CMMS (63) değildir:** 63 koyu zeminli iş emri kâğıdıdır (Chakra Petch + turuncu); Fleet açık serin beyazdır.

### Nereden gelir
Şebeke/haberleşme operasyon merkezleri (NOC), LoRaWAN/LTE-M cihaz konsolları (The Things Network, Chirpstack), filo telemetri panelleri (Samsara, Geotab) ve endüstriyel HMI ölçütleri (ISA-101). Bugün yeniden kullanılmasının nedeni: IoT filolarında asıl sorunun "kaç cihaz var" değil **"hangisi konuşmuyor"** olması. Klişeye dönüşmemesi için korunacak detay: her satırda son görülme saatinin bulunması ve kapsama ızgarasının gerçek veriyle dolması — süs olarak nokta deseni basmak stili bozar.

### 3 saniyede tanıma testi
1. Zemin serin beyaz; üstte 20px nokta/hex kapsama ızgarası var.
2. Satırlar 36px ve beş alanlı: kimlik (mono), durum kodu, sinyal çubuğu, batarya, saat.
3. Display telegraphic mono (Share Tech Mono); başlık 36px, geniş harf aralıklı.
4. Accent ahududu-magenta ve yalnız "aktif/seçili" anlamında; başka yerde görünmüyor.
5. Altta tek satır telemetri şeridi (ticker) akıyor, duraklat düğmesi var.

## Görsel imza
- **Kapsama ızgarası:** 20px aralıklı 1.4px nokta, `--line` ile; cihaz olan hücreler accent, boş hücreler nötr.
- **Cihaz satırı:** 36px yükseklik; kimlik 12px mono 0.04em, durum 11px büyük harf + nokta, sinyal 4 çubuk, saat 11px mono sağa hizalı.
- **Durum kodu:** üç harf + nokta + renk (ÇEVRİMİÇİ / BEKLEMEDE / ARIZA); nokta 6px, yalnız `currentColor`.
- **Ticker:** 28px yükseklik, 1px üst çizgi, 12px mono; duraklat/oynat ve `prefers-reduced-motion` desteği zorunlu.
- **Radius:** `--radius` 0px (kontrol, chip, input — keskin pano köşesi), `--radius-lg` 2px (kart, panel, modal).
- **Gölge:** tek katman `0 6px 14px -12px`; kenarlık her zaman 1px `--line`.
- **Doku:** `--grain: .02` (pano yüzeyi); tarama çizgisi, neon ve glow yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1f4f7` | sayfa zemini (serin beyaz) | kart zemini |
| `--bg-2` | `#e6ebf0` | bölüm ayırıcı, kapsama ızgarası zemini | cihaz satırı |
| `--surface` | `#ffffff` | panel, cihaz listesi, kart | sayfa zemini |
| `--surface-2` | `#edf1f5` | başlık şeridi, zebra satır, chip | seçili cihaz |
| `--ink` | `#101820` | metin, değer, başlık | dekoratif dolgu |
| `--ink-soft` | `#47555f` | ikincil metin, uykuda cihaz | arıza metni |
| `--ink-faint` | `#7b8892` | yalnız dekoratif etiket/kapsama noktası | etkileşimli metin |
| `--accent` | `#a8386f` | aktif bağlantı, seçili cihaz, birincil eylem | dekorasyon, ikinci durum |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(16,24,32,.13)` | tüm kenarlık ve satır ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` = **16.21:1** · `ink-soft/bg` = **6.96:1** · `accent-ink/accent` = **6.07:1** · `ink-faint/bg` = **3.29:1**.
- Tek vurgu kuralı: accent yalnız "aktif bağlantı / seçili cihaz / birincil eylem". Arıza `--danger`, uyarı `--warn`, çevrimiçi durum `--ok` (durum noktaları), accent bunların yerine geçmez.
- Yasak kombinasyon: accent ile `--danger`'ı aynı satırda iki farklı anlam için kullanmak; amber/turuncu accent (bu stil ahududu kullanır).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Share Tech Mono (`--font-display`) | 36px / mobil 22px | 400 | 1.12 | `--tracking` 0.03em |
| H2 | Share Tech Mono | 23px | 400 | 1.24 | 0.02em |
| H3 | Inter | 18px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.5 | 0 |
| Etiket / kimlik / saat | JetBrains Mono (`--font-mono`) | 11–12px | 400/600 | 1.44 | 0.14em (etiket) |

- Ölçek oranı ≈ 1.35; kullanılan basamaklar: 11 · 12 · 14 · 18 · 23 · 36.
- Ölçü önerisi: `h1 { font-size: clamp(22px, 2.8vw, 36px); }`
- Gövde metni maksimum satır uzunluğu: 74 ch (konsol satırları geniş olabilir).
- Ağırlık kuralı: Share Tech Mono tek ağırlık (400) — sentetik kalınlaştırma yasak; gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 12px |
| Container genişliği | 1320px (konsol ekranlarında tam genişlik) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 cihaz ızgarası 4 sütun · 768 2 sütun · 390 tek sütun, satır 44px'e çıkar |

- Asimetri kuralı: harita/kapsama paneli 8/4; ekran başına bir asimetri, cihaz listesi tam genişlik.
- Bölüm ritmi: art arda en fazla 2 yoğun blok; üçüncü blok özet şerit (tek satır KPI) olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, kapsama ızgarası |
| Kart | `--surface` | yok | cihaz listesi, panel |
| Yüzen katman | `--surface` + `--shadow` | `0 6px 14px -12px rgba(16,19,23,.5)` | cihaz detay paneli, modal |

- Kenarlık formülü: `1px solid var(--line)`; panel başlığında ek `--surface-2` şerit.
- Derinlik nereden gelir: kapsama ızgarası + başlık şeridi + 1px çizgi; cam/blur/bevel yok.
- Radius: `--radius` 0px (kontrol, satır, chip), `--radius-lg` 2px (kart, panel, modal); 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | 0 14px | `--radius` | 13px/600 mono 0.04em | `--accent` zemin, `--accent-ink`, gölge yok | hover %88 · active 1px · focus 2px accent · disabled %45 kesikli · loading "…" |
| Buton (ikincil) | 36px | 0 14px | `--radius` | 13px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 36px | 0 10px | `--radius` | 12px mono | `--surface`, 1px `--line` | focus 2px accent · filled `--bg-2` · error `--danger` + 2px sol şerit · disabled %45 |
| Kart | içerik | 16px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | başlıkta `--surface-2` şerit |
| Chip / badge | 22px | 0 8px | `--radius` | 11px/600 mono 0.08em | `--surface-2`, 1px `--line` | aktif: accent zemin |
| Nav | 48px | 0 20px | 0 | 13px mono | `--bg`, alt 1px `--line` | aktif sekme 2px accent alt çizgi |
| Tablo satırı | 36px | 6px 10px | 0 | 12px mono kimlik + 11px saat | alt 1px `--line`, zebra `--surface-2` | hover `--surface-2` · seçili sol 3px accent |
| Modal / sheet | — | 18px | `--radius-lg` | 14px/400 | `--surface`, 1px `--line`, `--shadow` | cihaz detayı yan panel; başlıkta durum noktası + kimlik |
| Toast | 36px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--line` | 4s, ticker'ın üstünde tek satır |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ok` · `--warn` (en fazla 4) | sparkline 28px yüksek, eksen çizgisi yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; serin beyaz zeminde 6.07:1.
- Dokunma hedefi: en az 44×44px; 36px satır mobilde 44px'e çıkar, ticker duraklat düğmesi 44×44px'dir.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 16px ızgara; sinyal çubuğu, fiş, batarya, termometre |
| Fotoğraf | Yok — cihaz fotoğrafı yerine kapsama ızgarası ve satır verisi |
| İllüstrasyon | Yok; telemetri çizgileri ve durum noktaları görsel dili kurar |
| Doku | `--grain: .02` (pano yüzeyi); tarama çizgisi ve neon yok |
| Logo alanı | Kelime logosu Share Tech Mono 400, 0.08em; işaret 12px durum noktası, sol üst 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Solda tek cümle + 2 CTA, sağda kapsama ızgarası + 3 cihaz satırı önizleme | `shots/01-landing.png` |
| Dashboard | yüksek | Üstte kapsama paneli (8/4), altta cihaz tablosu + ticker | `shots/02-dashboard.png` |
| Form | düşük | Cihaz ekleme: kimlik, bölge, profil; 36px alanlar tek sütun | — |
| Liste / tablo | yüksek | 36px satır, zebra, sinyal çubukları, sağda son görülme | — |
| Boş durum | orta | Boş kapsama ızgarası + "cihaz bağla" tek eylemi | — |
| Onboarding | yüksek | 3 adım: bölge → ağ → ilk cihaz; her adımda tek ızgara | — |
| Pricing | orta | Cihaz sayısı kademeleri tablosu; kapsama küçük önizleme | — |
| Giriş / ödeme | çok düşük | Tek panel, 36px alanlar, hata sol şeritle | — |
| Modal | orta | Cihaz detayı: kimlik, durum geçmişi (sparkline), komut düğmeleri | — |
| Bildirim / toast | orta | "ARIZA · cihaz f-204 · 14:32" mono tek satır | — |
| Hata | düşük | Satırda `--danger` nokta + durum kodu + yeniden dene | — |
| Profil / ayar | orta | Ağ profili, ölçüm aralığı, alarm eşiği, ticker tercihi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.88s**, y **14px**, stagger **0.06** | `cubic-bezier(.2,.8,.2,1)` | `opacity` + `transform` |
| Scroll reveal | **0.6s**, trigger **top 80%**, y **22px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **0.9**, mesafe **+80%** (kapsama paneli sabitlenir) | scrub doğrusal | `transform` (panel sabit, liste kayar) |
| Hover | **130ms**, görsel scale **1.015** | `ease-out` | `transform` |
| Basma | 100ms | aynı eğri | `transform` (1px) |
| Ticker | 28s döngü, duraklatılabilir | `linear` | `transform: translateX` |
| Durum noktası | 1.4s nabız (yalnız "aktif", ≤1/s) | `ease-in-out` | `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.88s / cubic-bezier(.2,.8,.2,1) / 14px / 0.06` + `scroll top 80% / 0.6s / 22px` + `pin scrub 0.9 / +80%` + `hover 130ms / 1.015`. Katalogda `0.88s` giriş süresi ve `cubic-bezier(.2,.8,.2,1)` eğrisi yalnız burada; `top 80%` + `0.6s` ikilisi 60 (0.62s) ve 69 (0.55s) ile çakışmaz.
- `prefers-reduced-motion`: tüm süreler 0.01ms; ticker durur, durum noktası sabit kalır, pin scrub kapanır.
- Bu stile yasak hareket: sürekli dönen gösterge, saniyede 1'den fazla yanıp sönme, parallax, bounce, gradient geçişi.

## Koyu mod

| Token | Açık (gündüz konsolu) | Koyu (gece vardiyası) |
|---|---|---|
| `--bg` | `#f1f4f7` | `#0d1116` |
| `--bg-2` | `#e6ebf0` | `#121820` |
| `--surface` | `#ffffff` | `#161e26` |
| `--surface-2` | `#edf1f5` | `#1e2731` |
| `--ink` | `#101820` | `#e9eef3` |
| `--ink-soft` | `#47555f` | `#a9b6c2` |
| `--ink-faint` | `#7b8892` | `#7d8b97` |
| `--accent` | `#a8386f` | `#f07fb4` |
| `--accent-ink` | `#ffffff` | `#20050f` |
| `--line` | `rgba(16,24,32,.13)` | `rgba(233,238,243,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **16.22:1** · `ink-soft/bg` = **9.16:1** · `accent-ink/accent` = **7.71:1** · `ink-faint/bg` = **5.42:1**.
- Koyu modda değişen başka ne var: accent açılır (ahududu → pembe), kapsama noktaları `--line` ile aynı kalır, durum noktası parlaklığı artar.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="fleet-telemetry"]`.

## Zorunlu kurallar
- Kapsama ızgarası ekranın üst yarısında görünür: 20px nokta deseni, cihaz olan hücreler accent.
- Her cihaz satırı beş alan taşır: kimlik (mono), durum kodu (üç harf), sinyal (4 çubuk), batarya, son görülme (saat).
- Durum üçlü kodlanır: nokta + üç harfli kod + renk; renk tek başına anlam taşımaz.
- Ticker ekran başına bir kez, duraklat/oynat düğmeli ve `prefers-reduced-motion`'da durur.
- Display Share Tech Mono yalnız başlıkta (400); gövde Inter, sayı JetBrains Mono.
- Accent yalnız "aktif bağlantı / seçili cihaz"; arıza/uyarı için `--danger`/`--warn`.

## Yasaklar
- Koyu cyber/neon konsol paleti (bu stil açık, serin beyaz).
- Amber/turuncu accent (başka endüstriyel stillerle karışır; bu stil ahududu kullanır).
- 2px üzeri radius veya yuvarlak pill kontrol (pano köşeleri keskin kalır).
- Cam blur, gradient panel, glow, bevel.
- Sürekli dönen gösterge, 3B animasyon, saniyede 1'den fazla flash.
- Durumu yalnız renkle kodlamak; saat olmadan "son görülme" göstermek.
- Süs illüstrasyon ve dekoratif ikon.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 6.07:1; gövde 16.21:1; `ink-faint/bg` 3.29:1 yalnız dekoratif (kapsama noktası, etiket).
- `--ink-faint` kapsama noktası ve dekoratif etiket için; etkileşimli metin değil.
- Durum üçlü kodlanır (nokta + kod + renk); sinyal çubuğu ayrıca `aria-label` ile "3/4" okunur.
- Ticker `aria-live="off"` + duraklat düğmesi (WCAG 2.2.2); reduced-motion'da hiç akmaz.
- Odak halkası 2px accent + 2px offset; serin beyaz zeminde 6.07:1.
- 390px'te cihaz satırı 44px, kimlik tek satırda kesilir (`text-overflow: ellipsis`) ama saat görünür kalır.
- `prefers-reduced-motion` açıkken ticker, durum nabzı ve pin scrub durur.

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
| "46 ile aynı" hissi | açık gri zemin + eşit hücreler | kapsama nokta ızgarası + 36px cihaz satırı; accent ahududuya sabit |
| Hangi cihaz susmuş okunmuyor | saat sütunu atlanmış | sağa hizalı mono "son görülme" her satırda zorunlu |
| Renk körlüğünde ayırt edilemiyor | yalnız renkli nokta | üç harfli durum kodu + nokta + renk |
| Ekran gürültülü | her satırda ikon + grafik | satırda en fazla 2 görsel öğe (nokta + çubuk) |
| Ticker baş ağrıtıyor | durdurulamıyor | duraklat düğmesi + reduced-motion'da dur |
| Mobilde kesiliyor | 5 alan sığdırılmış | saat sabit, kimlik ellipsis, batarya ikon-only |

## Komşu stiller

- **Uyumlu:** `utility` — aynı sakin ürün dili; ayar ve dokümantasyon bölümlerinde ortak.
- **Uyumlu:** `bento-grid` — kapsama panelini hücreye oturtmak için.
- **Uyumlu:** `terminal-ui` — log/komut satırı bölümlerinde terminal estetiği ile yan yana çalışır.
- **Yasak:** `claymorphism` — yumuşak gölge ve 999px radius satır yoğunluğunu bozar.
- **Yasak:** `memphis` — dekoratif geometri kapsama ızgarasını anlamsızlaştırır.
- **Yasak:** `vaporwave` — neon palet durum kodlarının okunurluğunu düşürür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.thethingsnetwork.org/docs/ | cihaz kimliği, sinyal ve son görülme düzeni |
| https://lora-alliance.org/resource_hub/ | uplink/downlink ve kapsama göstergesi dili |
| https://www.isa.org/standards-and-publications/isa-standards/isa-101-standards | alarm ve renk kullanım ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | ticker için duraklat ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Fleet Telemetry (styles/55-fleet-telemetry/style.md, tokens.json)
Token: sadece [data-style="fleet-telemetry"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Share Tech Mono 400 (telegraphic, yalnız h1/h2), gövde Inter 400/600,
  kimlik+saat JetBrains Mono. Ölçek 11/12/14/18/23/36; gövde ölçü 74ch.
Yüzey: serin beyaz (#f1f4f7); 1px var(--line), radius 0/2px (keskin pano), gölge yalnız yan panelde.
Imza: üstte 20px kapsama nokta ızgarası (cihaz olan hücreler accent); 36px cihaz satırı
  (kimlik / durum kodu / 4 çubuk sinyal / batarya / son görülme saati); altta tek satır
  telemetri şeridi + duraklat düğmesi.
Renk: tek accent #a8386f (aktif bağlantı / seçili); arıza --danger, uyarı --warn, çevrimiçi --ok.
Hareket: enter .88s cubic-bezier(.2,.8,.2,1) y14 stagger .06; scroll top 80% .6s y22 once;
  1 pin scrub .9 (+80%); hover 130ms scale 1.015; ticker duraklatılabilir; reduced-motion zorunlu.
Yasak: koyu cyber palet, amber accent, 2px üstü radius, cam/gradient, saniyede 1+ flash.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kapsama ızgarası görünür ve gerçek veriyle dolu.
- [ ] Her satırda 5 alan var; saat sağa hizalı ve görünür.
- [ ] Durum üçlü kodlanmış (nokta + kod + renk).
- [ ] Ticker duraklatılabilir; reduced-motion'da duruyor.
- [ ] Kontrast: gövde 16.21:1, accent üstü 6.07:1.
- [ ] 390px'te taşma yok, saat görünür.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="fleet-telemetry"] {
  --bg: #f1f4f7; --bg-2: #e6ebf0;
  --surface: #ffffff; --surface-2: #edf1f5;
  --ink: #101820; --ink-soft: #47555f; --ink-faint: #7b8892;
  --accent: #a8386f; --accent-ink: #ffffff;
  --line: rgba(16,24,32,.13);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 6px 14px -12px rgba(16,19,23,.5); --shadow-hard: 0 0 0 2px var(--line);
  --font-display: "Share Tech Mono", ui-monospace, SFMono-Regular, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: .02;
  --danger: #a3201a; --danger-ink: #ffffff;
  --ok: #1c6b45; --warn: #8a5a06;
}
```

Koyu mod bloğu `styles/55-fleet-telemetry/token-block.css` içinde `[data-theme="dark"][data-style="fleet-telemetry"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
