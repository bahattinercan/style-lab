# 46 · Telemetry Grid

> **Bir cümlede:** Her metriğin kendi hairline hücresinde, 24px ölçüm ızgarasına oturduğu ve durumun yalnız eşik değeriyle konuştuğu gözlemlenebilirlik yüzeyi.

| | |
|---|---|
| **Hissiyat** | ölçülü, uyanık, izleyen, soğukkanlı |
| **En iyi** | gözlemlenebilirlik paneli, on-call/SRE ekranı, IoT filo izleme, durum sayfası |
| **Kaçın** | lüks marka vitrini, editoryal içerik, wellness/çocuk ürünü — sürekli sayı "gürültü" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.00:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `kit/tokens.css` → `[data-style="telemetry-grid"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Telemetry Grid, bir sistemin **durumunu bir bakışta kanıtlayan** arayüzdür: her metrik kendi hücresinde durur, hücreler 24px ızgaraya oturur, sayılar tabular rakamla hizalanır, renk yalnızca eşik aşımını bildirir. Süsü feda eder; karşılığında üç şey kazanır — taranabilirlik (12 hücre 2 saniyede okunur), karşılaştırılabilirlik (aynı birim ölçü, aynı punto), ve delil (her değerin yanında zaman damgası ve eşik).

Kurucu kararları üç tanedir. Birincisi **tek hücre birimi**: her tile 12px padding, 1 birim yükseklik ve en fazla üç metin satırı taşır; değişken boyut yoktur, yalnız ana grafik 8 kolon alır. İkincisi **sayı önce**: değer 28–30px mono tabular, etiket 11px büyük harf mono; başlık asla değerden büyük değildir. Üçüncüsü **sessiz renk**: accent yalnız eşik aşımında (WARN/CRIT) ve birincil eylemde yanar, geri kalan her şey nötr skaladır.

Bedeli kişiliksizleşmedir; stili jenerik olmaktan kurtaran şey **ölçüm disiplininin görünürlüğü**: hizalı rakam sütunları, ızgaraya oturan grafikler, her panelde zaman aralığı ve son güncelleme damgası.

### Ne değildir
- **Bento Grid (05) değildir:** Bento kutu **boyutuyla** hikâye anlatır (2×1, 1×2 karışımı); Telemetry Grid'de her tile 1 birimdir, ekran başına en fazla 12 tile ve tek istisna 8 kolonluk ana grafiktir.
- **Terminal UI (45) değildir:** 45 tek mono aile + karakter ızgarası + 32px satır kullanır; burada gövde Inter, mono yalnız **sayı ve etiket** içindir, tile yüksekliği 96px.
- **Executive KPI (48) değildir:** 48 vitrin dilidir (4 KPI, serif display, 64px rakam, geniş boşluk); 46 operasyon dilidir (12 tile, sans display, 30px rakam, dar boşluk, sürekli yenilenen veri).
- **Utility (44) değildir:** 44'te accent **eylem** rengidir ve dekoratif kullanım yasaktır; burada accent **eşik** rengidir, ok/warn/danger üçlüsüyle birlikte okunur.
- **Neo-Brutalism (13) değildir:** 13'ün kalın konturu ve sert gölgesi yok; burada 1px hairline ve gölgesiz yüzey var.

### Nereden gelir
NASA/Houston telemetri konsolları, uçuş testi veri duvarları ve 2010'lar sonrası Grafana/Prometheus pratiğinin kesişimi: "önce ölç, sonra süsle". Bugün tekrar önemli çünkü ajanların ürettiği panellerde en sık hata keyfi tile boyutu ve süsleme gradyanıdır; Telemetry Grid bu iki kararı önceden kapatır. Klişeye dönüşmemesi için korunacak detay: **ızgaranın 24px'te kalması** ve sayının her zaman etiketinden büyük olması.

### 3 saniyede tanıma testi
1. Bütün tile'lar aynı yükseklikte ve sol kenarında 3px accent eşik şeridi var.
2. Sayılar mono ve ondalık hizası bozulmuyor (tabular-nums); birim etiketi (`ms`, `%`, `req/s`) sayının yanında.
3. Başlık hiçbir yerde değerden büyük değil; hero başlığı en fazla 34px.
4. Zemin 24px ızgara deseni taşıyor, grafik ızgarası da aynı ritimde.
5. Ekranda en fazla üç doygun renk var: accent + warn + danger; gerisi nötr skala.

## Görsel imza
- **24px ölçüm ızgarası:** hero, yan panel ve grafik zeminine `background-size: 24px 24px` hairline ızgara; grafik genişliği daima 24'ün katı (312/624/936px).
- **Hairline tile:** `1px solid var(--line)`, `--radius-lg` 10px, gölge yok; sol kenarda `linear-gradient(90deg, var(--accent) 0 3px, transparent 3px)` eşik şeridi.
- **Tabular rakam:** tüm sayılar `font-variant-numeric: tabular-nums` + `--font-mono`; değer 28–30px, etiket 11px.
- **Durum LED'i:** 7×7px, `border-radius: 1px` (yuvarlak değil), ok/warn/danger üç rengi; yanında daima metin etiketi.
- **Zaman şeridi:** nav altında 32px ikinci satır — aralık seçici (`5m 15m 1h 24h`) + canlı/pause; aktif aralık accent zemin + `--accent-ink`.
- **Sparkline eşiği:** çizgi 2px accent, eşik çizgisi 1px kesikli `--warn`; alan dolgusu `color-mix(in srgb, var(--accent) 8%, transparent)`.
- **Hover dili:** yalnız 110ms süreyle `transform: translateY(-1px)` ve kenarlık `--ink-soft` %40 karışımı; parlaklık ve gölge artışı yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eef1f4` | sayfa zemini, nav arkası | tile zemini |
| `--surface` | `#ffffff` | tile / panel / grafik zemini | sayfa zemini |
| `--surface-2` | `#f6f8fa` | çip, ikincil satır, seçili olmayan aralık | birincil eylem |
| `--ink` | `#10171c` | başlık, metin, grafik ekseni | devre dışı |
| `--ink-soft` | `#46585f` | ikincil metin, eksen etiketi, birim | başlık |
| `--ink-faint` | `#7b8a91` | yalnız dekoratif: ızgara ipucu, dipnot | etkileşimli metin |
| `--accent` | `#0b6e75` | birincil buton, WARN eşiği, canlı çizgi | dekoratif dolgu |
| `--accent-ink` | `#ffffff` | accent üstü metin | gövde metni |
| `--line` | `rgba(16,23,28,.14)` | tile kenarı, ızgara, tablo ayırıcı | metin rengi |
| `--danger` / `--warn` / `--ok` | `#a3241c` / `#7d5200` / `#1c6b3f` | CRIT / WARN / OK durumu, LED ve şerit | dekorasyon, marka rengi |

- Ölçülen kontrast (açık): `ink / bg` = **15.95:1** · `ink-soft / bg` = **6.57:1** · `accent-ink / accent` = **6.00:1** · `ink-faint / bg` = **3.15:1** (yalnız dekoratif).
- Tek vurgu kuralı: accent ekran başına tek anlam taşır (eşik + birincil eylem); OK durumu `--ok` ile, asla accent ile gösterilmez.
- Yasak kombinasyon: accent zemin üstüne `--ink-soft` metin; durum rengini eşik değeri olmadan kullanmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch (`--font-display`) | 34px (mobil 24px) | 600 | 1.14 | `--tracking` 0.01em |
| H2 | Chakra Petch | 22px | 600 | 1.28 | 0.01em |
| H3 | Chakra Petch | 17px | 600 | 1.32 | 0.01em |
| Metrik değeri | IBM Plex Mono (`--font-mono`) | 28–30px | 500 | 1.1 | -0.01em |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.52 | 0 |
| Küçük / açıklama | Inter | 13px | 400 | 1.45 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 500 | 1.3 | 0.12em (büyük harf) |

- Ölçek oranı **1.3** (11 → 15 → 22 → 34); kullanılan basamak sayısı 6: 11/13/15/22/34/30(metrik).
- Ölçü: `h1 { font-size: clamp(24px, 3.2vw, 34px) }`.
- Gövde metni maksimum satır uzunluğu: **64 ch**; açıklama paragrafları 72 ch'yi geçmez.
- Ağırlık kuralı: yalnız 400 / 500 / 600. 300 ve 700+ yasak (rakam kalınlığı eşiği gizler).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1280px üstü), 8 (768–1279), 4 (390–767) |
| Gutter | 12px sabit — tile arası boşluk asla 24px'e çıkmaz |
| Container genişliği | 1320px (kenar boşluğu 24px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280px: 12 kolon / 12 tile; 768px: 8 kolon / 6 tile; 390px: 4 kolon / 2 tile dikey, ana grafik tam genişlik |

- Asimetri kuralı: ekran başına en fazla **1** asimetrik bölüm (8/4 grafik + yan sütun); diğer satırlar eşit tile ızgarasıdır.
- Bölüm ritmi: art arda en fazla **3** tile satırı aynı yükseklikte olabilir; dördüncü satır ya bir grafik ya bir ayırıcı başlık taşır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, ızgara deseni |
| Kart | `--surface` | yok | tile, panel, grafik zemini |
| Yüzen katman | `--surface` + `--shadow` | `0 4px 16px rgba(16,23,28,.12)` | modal, tooltip, açılır aralık menüsü |

- Kenarlık formülü: `1px solid var(--line)`; hover'da `color-mix(in srgb, var(--ink) 40%, var(--line))`.
- Derinlik nereden gelir: **hiçbir yerden** — tile ayrımı çizgi ve zemin tonundan (`--bg` ↔ `--surface`), yalnız yüzen katman gölge taşır.
- Radius: `--radius` 4px (buton, input, çip), `--radius-lg` 10px (tile, modal); 10px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 34px | 0 12px | `--radius` | 13px/600 Chakra Petch | accent + accent-ink, gölge yok | hover %90 ton · active 1px aşağı · focus 2px halka · disabled %45 · loading 12px halka 900ms |
| Buton (ikincil) | 34px | 0 12px | `--radius` | 12px/500 mono | surface + `--line` | hover kenar `--ink-soft` |
| Input | 34px | 0 10px | `--radius` | 13px Inter | surface + `--line` | focus 2px accent halka · filled tabular · error `--danger` + `!` · disabled %45 |
| Kart (tile) | 96px | 12px | `--radius-lg` | etiket 11px mono / değer 30px mono | surface + sol 3px eşik şeridi | ok / warn / crit / stale (kesikli kenar) |
| Chip | 20px | 0 6px | `--radius` | 11px/500 mono | surface-2 + `--line` | seçili: accent zemin |
| Nav | 48px (+32px aralık satırı) | 0 16px | 0 | 12px/600 mono | bg + alt çizgi | aktif: accent alt çizgi 2px |
| Tablo satırı | 32px | 4px 8px | 0 | 13px Inter / sayı mono | ayırıcı `--line` | hover `--surface-2` · seçili sol 2px accent |
| Modal | — | 16px | `--radius-lg` | başlık 15px Chakra Petch | surface + yüzen gölge | açılış 280ms · kapat Esc · odak tuzağı |
| Toast | 36px | 0 12px | `--radius` | 13px Inter | surface + sol 3px durum şeridi | 5000ms · 3 üst sınır · hover'da durur |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn → danger | en çok 4 seri · legend zorunlu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — grafik içindeki etkileşimli noktalarda `offset: 1px`.
- Dokunma hedefi: görsel 20px olan durum LED'i ve chip'ler 44×44px padding'li sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 16px kutu, 1.5px çizgi, 2px köşe yarıçapı; yalnız işlev ikonları (filtre, zoom, ayar, indir) |
| Fotoğraf | yok; zorunluysa 1px çerçeve, %60 doygunluk, tile alanının en çok 1/3'ü |
| İllüstrasyon | yalnız veri: çizgi, alan, gauge yayı, histogram, sparkline |
| Doku | 24px ızgara deseni (%100 opak 1px çizgi); `--grain: 0` |
| Logo alanı | solda 20px işaret + 13px Chakra Petch kelime markası; çevresinde en az 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8 kolon canlı grafik + 4 kolon son olaylar; ızgara zemin | `shots/01-landing.png` |
| Dashboard | yüksek | 12 tile (3 satır × 4), üstte zaman aralığı şeridi | `shots/02-dashboard.png` |
| Form | düşük | aralık/eşik formu, iki kolon, mono yardım metni | — |
| Liste / tablo | yüksek | servis tablosu 32px satır, durum LED'i + eşik sütunu | — |
| Boş durum | orta | boş ızgara + "veri kaynağı bağla" tek CTA | — |
| Onboarding | yüksek | 3 adım: kaynak → panel seç → eşik; her adımda örnek tile | — |
| Pricing | orta | plan tablosu, metrik satırı olarak fiyat | — |
| Giriş / ödeme | çok düşük | SSO odaklı dar kart, 34px alanlar | — |
| Modal | orta | tek grafik + eşik düzenleme, dipnot 11px mono | — |
| Bildirim / toast | orta | sağ üst, 3px durum şeridi, 5000ms | — |
| Hata | düşük | "veri yok" ile "hata" ayrı: hata tile'ı kesikli kenar + CRIT LED | — |
| Profil / ayar | orta | bildirim eşikleri, iki kolon, mono özet | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 280ms | `cubic-bezier(.16,.84,.44,1)` | `opacity` + `translateY(6px)`, tile başına 20ms stagger |
| Scroll reveal | 320ms | `cubic-bezier(.16,.84,.44,1)` | `top 88%` tetiği, 10px yukarı, `once: false` (panel geri gelince tazelenir) |
| Basma | 110ms | `cubic-bezier(.16,.84,.44,1)` | `transform: translateY(1px)` |
| Hover | 110ms | `cubic-bezier(.16,.84,.44,1)` | `translateY(-1px)`, görsel ölçek `1.010` |
| Pin / scrub | kapalı | — | — (veri paneli sabitlenmez) |
| Canlı değer | 0ms | — | sayaç yok; sayı tek karede değişir |

- Ölçülebilir imza: `enter 0.28s / cb(.16,.84,.44,1) / 6px / 0.02` · `scroll top 88% / 0.32s / 10px / once:false` · `hover 110ms / 1.010` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; ızgara deseni ve canlı güncelleme kalır, geçiş animasyonu kalkar.
- Bu stile yasak hareket: sayaç yuvarlanması, nabız atan tile, parallax, pin/scrub, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eef1f4` | `#0a0f12` |
| `--bg-2` | `#e5eaee` | `#0e1417` |
| `--surface` | `#ffffff` | `#101820` |
| `--surface-2` | `#f6f8fa` | `#162028` |
| `--ink` | `#10171c` | `#e6eef2` |
| `--ink-soft` | `#46585f` | `#a3b3bb` |
| `--accent` | `#0b6e75` | `#3ec6cd` |
| `--accent-ink` | `#ffffff` | `#04191b` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.40:1** · `ink-soft / bg` = **8.92:1** · `accent-ink / accent` = **8.76:1** · `ink-faint / bg` = **4.69:1**.
- Koyu modda değişen başka ne var: ızgara çizgisi `rgba(230,238,242,.16)` (açıkta .14); tile gölgesi 0'dan `0 1px 2px rgba(0,0,0,.55)`'e çıkar ama görünmez kalır (yalnız yüzen katman aynı gölgeyi büyütür); doygunluk düşmez, durum renkleri açılır (`--danger #ff8f87`, `--ok #5ddb9a`, `--warn #f0c052`).
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Tile birimi değişmez: 12px padding, 96px yükseklik, en fazla 3 metin satırı, sol 3px eşik şeridi.
- Her sayı `tabular-nums` + mono; birim etiketi (ms, %, req/s) her zaman görünür.
- Durum üç kanaldan birden yazılır: LED rengi + etiket (OK/WARN/CRIT) + eşik değeri.
- Izgara 24px; grafik genişliği 24'ün katı, grafik ızgarası aynı ritimde.
- Her panelde zaman aralığı ve son güncelleme damgası bulunur.
- Ekran başına en fazla 12 tile; fazlası ikinci sekmeye taşınır.
- Renk, radius, gölge yalnız `--…` token'larından; hard-coded değer yasak.

## Yasaklar
- Animasyonlu sayaç veya rakam yuvarlama.
- Dekoratif gradyan, büyük fotoğraf, illüstrasyon, emoji ikon.
- 10px üstü radius, yumuşak yayılan gölge, `backdrop-filter` blur.
- Ölçüsüz (proportional) rakam, hizasız sayı sütunu, birimi olmayan değer.
- Renk kodunu legend olmadan bırakmak; OK'u accent rengiyle göstermek.
- Sürekli hareket eden arka plan, nabız atan tile, parallax.
- Uydurma metrik adı/sayı; eksik veri `{{metric}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.15:1** — yalnız dipnot ve ızgara ipucu; etkileşimli metin daima `--ink` (15.95:1) veya `--ink-soft` (6.57:1).
- Grafiklerde seri ayrımı yalnız renkle değil: çizgi deseni (düz / kesikli / noktalı) + doğrudan etiket.
- Hareket/parlama: canlı çizgi 1 saniyede en fazla 1 güncelleme; yanıp sönme yasak. `prefers-reduced-motion` tüm geçişleri 0.01ms'e indirir.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez; tek istisna yüzen tooltip gölgesi.
- Odak görünürlüğü: beyaz tile üstünde 2px accent halka 6.00:1 ile yeterli; koyu zeminde `#3ec6cd` halka 8.76:1.

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
| Panel "süslenmiş" görünüyor, sayılar kayboluyor | accent dekoratif dolgu olarak kullanılmış | accent'i yalnız eşik + birincil eyleme indir |
| Rakamlar sütun hizasında kayıyor | `tabular-nums` yok, mono kullanılmamış | tüm sayılara `font-variant-numeric: tabular-nums` + mono aile |
| 12 tile'lık panelde tarama duruyor | tile yükseklikleri farklı, göz hiza arıyor | tüm tile'ları 96px'e sabitle, tek istisna ana grafik |
| Renk körlüğünde durum okunmuyor | yalnız renk kodu | LED + etiket + eşik metni üçlüsünü zorunlu kıl |
| Koyu modda ızgara kayboluyor | `--line` alfası düşük | koyuda .16'ya çıkar, hücre 24px kalsın |
| Grafik genişliği ızgaraya oturmuyor | genişlik keyfi (ör. 300px) | genişliği 24'ün katına yuvarla (312/624/936) |

## Komşu stiller

- **Uyumlu:** `bento-grid` — tile birimi aynı; Bento'nun değişken kutusu yalnız pazarlama bölümünde garnitür olur.
- **Uyumlu:** `terminal-ui` — yoğun veri + klavye önceliği aynı; log panelini 45, metrik panelini 46 taşır.
- **Uyumlu:** `utility` — hairline ve 4'ün katı boşluk aynı; yardım/dokümantasyon sayfaları 44'ten alınır.
- **Yasak:** `maximalism` — katman ve renk bolluğu eşik okumasını bozar.
- **Yasak:** `claymorphism` — şişkin yüzey ve yumuşak gölge hairline tile fizikini çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/ | panel yoğunluğu, zaman aralığı seçici, eşik işaretleme |
| https://prometheus.io/docs/practices/instrumentation/ | metrik adlandırma + birim standardı |
| https://sre.google/sre-book/monitoring-distributed-systems/ | hangi metriğin uyarı ürettiği (semptom vs neden) |
| https://www.nngroup.com/articles/dashboard-design/ | tile sayısı, tarama sırası, göz hareketi |
| https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html | durumun renk dışında da kodlanması |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Telemetry Grid (styles/46-telemetry-grid/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="telemetry-grid"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch) başlıkta (tracking --tracking), --font-body (Inter) gövdede,
           --font-mono (IBM Plex Mono) sayı ve etiketlerde — sayılar daima tabular-nums.
Yüzey: 3 seviye (--bg / --surface / --surface + --shadow); radius --radius 4px, --radius-lg 10px; gölge yalnız yüzen katmanda.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil.
Izgara: 24px ölçüm ızgarası; grafik genişliği 24'ün katı; tile 96px, 12px padding, sol 3px eşik şeridi.
Hareket: enter 0.28s cubic-bezier(.16,.84,.44,1) 6px / stagger 0.02; scroll top 88% 0.32s 10px once:false;
         hover 110ms scale 1.010; pin yok. prefers-reduced-motion desteği zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (sayaç animasyonu, dekoratif gradyan, proportional rakam).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (24px ızgara, eşik şeridi, tabular rakam, LED).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Durum rengi + etiket + eşik değeri birlikte yazılı.
- [ ] 390px genişlikte taşma yok; ana grafik tam genişlik.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="telemetry-grid"] {
  --bg: #eef1f4; --bg-2: #e5eaee;
  --surface: #ffffff; --surface-2: #f6f8fa;
  --ink: #10171c; --ink-soft: #46585f; --ink-faint: #7b8a91;
  --accent: #0b6e75; --accent-ink: #ffffff;
  --line: rgba(16,23,28,.14);
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(16,23,28,.07); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0;
  --danger: #a3241c; --danger-ink: #ffffff; --ok: #1c6b3f; --warn: #7d5200;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="telemetry-grid"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
