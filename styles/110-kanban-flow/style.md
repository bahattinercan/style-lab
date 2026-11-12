# 110 · Kanban Akışı

> **Bir cümlede:** İşin kolonlar arasında aktığı arayüz: soğuk gri tahta zemini, beyaz kartlar, 3px kategori şeridi ve WIP sayaçlı kolon başlıkları.

| | |
|---|---|
| **Hissiyat** | akışkan, düzenli, ekipçe, öngörülebilir |
| **En iyi** | proje/ürün panosu, destek kuyruğu, işe alım akışı, üretim iş emri panosu |
| **Kaçın** | vitrin/landing, uzun okuma, ödeme ekranı — kolon dili tek bir işi anlatmak için fazla |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük metin çifti 6.72:1; accent üstü 5.73:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="kanban-flow"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Kanban Akışı, arayüzü **kolon-kart tahtası** olarak kurar: kolon zemini `--bg-2`, kart zemini `--surface` + 1px çizgi + tek küçük gölge; her kartta sol 3px kategori şeridi, kolon başlığında `GELEN 7/10` biçiminde sayaç. Süsü bırakır; karşılığında **işin nerede durduğunu** ve **nerede tıkandığını** tek bakışta gösterir.

Kurucu kararları üç tanedir. Birincisi **WIP sayacı zorunlu**: sayaçsız kolon akış değil liste olur. İkincisi **kart şeridi bilgi taşır**: renk tek başına yetmez, şeridin yanında kategori etiketi yazılıdır. Üçüncüsü **sürükleme geri bildirimi**: kart kalkar (0 12px 28px) ve hedef kolon 2px accent kesikli çerçeve alır — geri bildirimsiz sürükleme yasak.

Bedeli: kart başına bilgi sınırı. Kartta en fazla 2 chip + 1 avatar; fazlası detay modalına taşınır.

### Ne değildir
- **Bento Grid (05) değildir:** 05 değişken boyutlu vitrin kutularıdır; 110 kolon-kart hiyerarşisi ve WIP sayacı taşır, sürükleme durumu vardır.
- **Utility (44) değildir:** 44 tek vurgu mavi ürün arayüzüdür; 110 tahta zemin tonu + kart şeridi ile **akış** anlatır.
- **MES (59) değildir:** 59 üretim hattı KPI panosudur (ölçüm odaklı); 110 iş öğesi akışıdır (durum odaklı), 59'da sürükleme yoktur.
- **Neo-Brutalism (13) değildir:** 13 ofset sert gölge ve kalın çerçeve kullanır; 110'da gölge tek küçük katman, çerçeve 1px.

### Nereden gelir
Toyota üretim sistemindeki kanban kartlarından ve yazılım dünyasındaki görselleştirme pratiğinden (WIP limiti, kümülatif akış diyagramı). Bugün tekrar önemli çünkü uzaktan çalışan ekipler işin durumunu tek ekranda görmek istiyor; klişeye dönmemesi için korunacak detay **WIP sayacının görünürlüğü** ve **kart şeridinin etiketle birlikte kullanılması**.

### 3 saniyede tanıma testi
1. 3–4 kolon var ve her kolon başlığında `ad / limit` sayacı duruyor.
2. Her kartın solunda 3px renkli şerit ve yanında kategori etiketi var.
3. Kart gölgesi küçük ve tek katman; kolon zemini kartdan bir ton koyu.
4. Chip'ler hap biçimli (999px), kart radius 14px.
5. Sürüklenen kart belirgin biçimde kalkmış (0 12px 28px), hedef kolon kesikli accent çerçeveli.

## Görsel imza
- **Kolon zemini:** `--bg-2` + 1px `--line`; kart zemini `--surface` — ayrım tonla.
- **Kart şeridi:** sol 3px accent şerit (`::before`, 999px radius, 8px inset).
- **WIP sayacı:** `ad / limit` mono 11px, kolon başlığında; limit aşımı `--danger`.
- **Kart gölgesi:** `0 1px 3px rgba(23,26,32,.12)`; sürüklemede `0 12px 28px`.
- **Hap chip:** 22px, 999px; kart başına en fazla 2.
- **Tahta zemini:** 22px nokta ızgarası (ink %6) — kolonlar bu ızgaraya oturur.
- **Hareket imzası:** 730ms `cubic-bezier(.3,.4,.2,1)`, 19px — kart akar, fırlamaz.
- **Landing hero (QA):** üç kanban kolonu (TODO/YAPILIYOR/BİTTİ) kart yığını + WIP sayacı altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2f4f7` | sayfa/tahta zemini | kart zemini |
| `--bg-2` | `#e8ebf0` | kolon zemini, üst bar altı | birincil CTA |
| `--surface` | `#ffffff` | kart, panel | tahta zemini |
| `--surface-2` | `#f7f9fb` | chip, satır hover | kart zemini |
| `--ink` | `#171a20` | başlık, kart başlığı | dekoratif çizgi |
| `--ink-soft` | `#4e5663` | açıklama, kolon sayacı | kart başlığı |
| `--ink-faint` | `#7d8593` | yalnız ayırıcı, eksen | kart metni |
| `--accent` | `#1a62cc` | kart şeridi, birincil eylem, hedef kolon | geniş dekoratif dolgu |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(23,26,32,.14)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **15.82:1** · `ink-soft / bg` = **6.72:1** · `accent-ink / accent` = **5.73:1** · `ink-faint / bg` = **3.37:1** (yalnız ayırıcı).
- Tek vurgu kuralı: accent (akış mavisi) tek parlak renk. `--ok` (#1f6b3f) = tamamlandı, `--warn` (#7a5300) = riskli, `--danger` (#b3261e) = WIP aşımı; her biri sayaç/etiketle.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; kolon zemini üstünde `--ink-faint` kart metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk (`--font-display`) | 36px (mobil 24px) | 600 | 1.12 | `-.01em` |
| H2 | Space Grotesk | 26px | 600 | 1.20 | `0` |
| H3 (kart başlığı) | Space Grotesk | 19px | 600 | 1.28 | `0` |
| Gövde | Nunito (`--font-body`) | 15px | 400 | 1.55 | `0` |
| Küçük gövde | Nunito | 13px | 400 | 1.5 | `0` |
| Sayaç / etiket | JetBrains Mono (`--font-mono`) | 11px | 600 | 1.4 | `.06em` |

- Ölçek oranı: **1.4** — kullanılan basamaklar 11 · 12 · 13 · 15 · 19 · 26 · 36.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3.2vw, 36px); line-height: 1.12 }`.
- Gövde satır uzunluğu en fazla **66ch**; kart açıklaması 2 satırla kırpılır (`line-clamp`).
- Ağırlık kuralı: display 600, gövde 400/600, sayaç mono 600. 300 ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 → tahtada 3 · 3 · 4 · 2 kolon genişliği |
| Gutter | 16px |
| Container genişliği | 1320px (içerik 1288px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1320; 768 altında tahta yatay kaydırmalı, kolon 280px sabit |

- Asimetri kuralı: kolon genişlikleri **eşit değil** (3/3/4/2) — WIP yoğunluğuna göre; ekran başına 1 asimetrik oran.
- Bölüm ritmi: kolon içinde art arda en fazla **6** kart görünür; fazlası kolon içi kaydırma.
- Kart arası 8px, kolon iç padding 12px, kolon arası 16px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin (tahta) | `--bg` + 22px nokta | — | sayfa |
| Kolon | `--bg-2` | yok | kolon kabı (1px line) |
| Kart | `--surface` | `0 1px 3px rgba(23,26,32,.12)` | kart, panel |
| Yüzen katman | `--surface` | `0 12px 28px rgba(23,26,32,.18)` | sürüklenen kart, modal, menü |

- Kenarlık formülü: `1px solid var(--line)`; hedef kolonda `2px dashed var(--accent)`.
- Derinlik nereden gelir: **kolon tonu + tek küçük gölge**; sürüklemede gölge bir kademe büyür. Sert/ofset gölge yok.
- Radius: `--radius: 8px` (buton, input), `--radius-lg: 14px` (kart, panel, modal); chip 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 34px | `0 12px` | 8px | 13px Nunito 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 · loading: kart iskeleti 3 satır (700ms) |
| Buton (ikincil) | 34px | `0 12px` | 8px | 13px Nunito 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 36px | `0 12px` | 8px | 14px Nunito | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %30 outline · error: `--danger` çerçeve + 12px etiket · disabled: opacity .45 |
| Kart | içerik | 14px (sol 17px) | 14px | 19px kart başlığı + 13px gövde | `--surface` + 1px `--line` + küçük gölge | sol 3px şerit; hover: gölge 0 4px 10px · sürüklenen: 0 12px 28px · hedef kolon: 2px dashed accent |
| Chip / badge | 22px | `0 8px` | 999px | 11px Nunito 600 | `--surface-2` + 1px `--line` | accent: accent %14 zemin + accent metin · kart başına en fazla 2 |
| Nav (üst bar) | 52px | `0 20px` | 0 | 14px Nunito 600 | `--surface` + alt hairline | sağda WIP özeti mono |
| Kolon başlığı | 40px | `8px 12px` | 8px | 12px Nunito 700 + 11px mono sayaç | `--bg-2` + alt 1px `--line` | limit aşımı: sayaç `--danger` + "LİMİT" etiketi |
| Tablo satırı | 36px | `6px 10px` | — | 13px Nunito, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 20px | 14px | 19px kart başlığı + mono etiketler | `--surface` + `0 12px 28px` | kart detayı: iki kolon (içerik + yan bilgi) |
| Toast | 36px | `8px 12px` | 8px | 13px Nunito 600 | `--surface` + sol uçta 6px accent nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ok`, `--warn`, `--danger` | en fazla 4 seri; CFD alan dolgusu %12 |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; kolon zemini üstünde 2px şart.
- Dokunma hedefi: en az 44×44px; 34px buton mobilde `min-height: 44px`; kart içi eylemler padding ile 44px'e genişletilir.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 2px köşe, 20px ızgara; etiket, kontrol listesi, ataç |
| Fotoğraf | avatar 24px daire (kart altbilgisi); başka fotoğraf yok |
| İllüstrasyon | yok; boş kolon için tek çizgi akış oku |
| Doku | grain yok; 22px nokta tahta zemini |
| Logo alanı | Space Grotesk wordmark + akan nokta işareti, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | solda H1 + tek CTA, sağda 3 kolon mini tahta | `shots/01-landing.png` |
| Dashboard | **yüksek** | 4 kolon + WIP sayaçları; süs yok | `shots/02-dashboard.png` |
| Form | düşük | 36px input, tek kolon; kart oluşturma formu | — |
| Liste / tablo | orta | 36px satır, kart şeridi aynı mantık | — |
| Boş durum | orta | boş kolon + akış oku + "iş yok" etiketi | — |
| Onboarding | yüksek | 3 adım: kolon kur → kart ekle → WIP limiti | — |
| Pricing | orta | plan tablosu; ekip limiti mono sayaç | — |
| Giriş / ödeme | çok düşük | tahta yok; sade form + tek CTA | — |
| Modal | orta | kart detayı: içerik + yan bilgi kolonu | — |
| Bildirim / toast | orta | alt-sağ, "kart taşındı" + accent nokta | — |
| Hata | düşük | kolon sayacı `--danger` + "LİMİT" etiketi | — |
| Profil / ayar | orta | kolon/WIP ayarları, iki kolon | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **730ms** | `cubic-bezier(.3,.4,.2,1)` | `opacity` + `translateY(19px)`; stagger **0.068s** |
| Scroll reveal | **690ms** | aynı eğri | trigger `top 70%`, `translateY(22px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (tahta kendi içinde kaydırılır) |
| Basma | **235ms** | aynı eğri | `translateY(1px)`, gölge küçülür |
| Geçiş / sayfa | 420ms | aynı eğri | opacity + 10px |
| Hover | **235ms** | aynı eğri | görsel ölçek **1.024** (kart hafif kalkar) |
| Ödül / vurgu | 730ms | aynı eğri | kart hedef kolona oturur (tek kez, sekme yok) |

- İmza ölçüleri: `enter = 0.73s / cubic-bezier(.3,.4,.2,1) / 19px / 0.068` · `scroll = top 70% / 0.69s / 22px / once` · `pin = false` · `hover = 235ms / 1.024`.
- Bant içi fark: 106'dan (0.37s / 2px), 107'den (0.86s / 25px / pin 0.42), 108'den (0.19s / 5px), 109'dan (0.51s / 15px / scrub 1.3) en az dört parametrede ayrışır. Mevcut 93 stil içinde en yakını 72-andean-textile (`0.72s / .5,0,.5,1 / 16px / 0.075`) — süre, eğri, offset, stagger, trigger (top 70%) ve hover'da farklı; `0.69s` scroll süresi ve `top 70%` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, kart yerleşimi anlık olur, sürükleme gölgesi korunur (durum bilgisi kaybolmaz).
- Bu stile yasak hareket: sürekli akan kart animasyonu, yay/overshoot (kart fırlamaz), blur geçişi, yatay kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2f4f7` | `#0f1216` |
| `--surface` | `#ffffff` | `#191f28` |
| `--ink` | `#171a20` | `#e9eef4` |
| `--accent` | `#1a62cc` | `#6fa8ff` |
| `--ink-soft` | `#4e5663` | `#a9b3c0` |
| `--line` | `rgba(23,26,32,.14)` | `rgba(233,238,244,.16)` |

- Koyu modda değişen başka ne var: kolon zemini kartdan daha koyu (`bg-2`), gölge görünmediği için kart ayrımı 1px `--line` ile güçlendirilir; accent bir ton açılır (`#6fa8ff`).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Kolon başlığı sayaç taşır: `ad / limit` biçiminde (mono 11px); limit aşımı `--danger` + "LİMİT" etiketi.
- Kart sol 3px kategori şeridi taşır; şeridin yanında kategori etiketi de yazılır.
- Sürükleme geri bildirimi zorunlu: kart `0 12px 28px` ile kalkar, hedef kolon 2px accent kesikli çerçeve alır.
- Kolon zemini `--bg-2`, kart zemini `--surface`; ayrım ton + 1px çizgi.
- Kart başına en fazla 2 chip + 1 avatar (24px).
- Dokunma hedefi ≥44px; kart içi eylemler padding ile genişletilir.

## Yasaklar
- Sayaçsız/sınırsız kolon (WIP görünmez).
- Sürükleme geri bildirimi olmayan hareket.
- Gradyan zemin ve cam yüzey.
- Hap radius (chip dışında), kalın çerçeve.
- Renk-only kategori ayrımı.
- Serif display.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.72:1** (eşik 4.5); `ink-faint / bg` = **3.37:1** yalnız ayırıcıda.
- `--ink-faint` kart metninde kullanılmaz; kart açıklaması `--ink-soft`.
- Hareket/parlama hassasiyeti: düşük — flash yok; `prefers-reduced-motion` kart animasyonlarını anlık yapar.
- Şeffaf yüzey yok; opak fallback gerekmez.
- Odak görünürlüğü: kolon zemini üstünde 2px accent outline + 2px offset.
- Sürüklemenin klavye alternatifi zorunlu: kart menüsünde "taşı → kolon" seçeneği (WCAG 2.5.7).
- Kolon/kart ilişkisi ARIA ile kurulur: kolon `role="list"`, kart `role="listitem"`, sayaç `aria-label` ile okunur.

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
| "Liste" gibi görünüyor | kolon zemini yok, kartlar aynı tonda | kolon `--bg-2`, kart `--surface` |
| Tıkanma görünmüyor | sayaç yok | `ad / limit` + limit aşımında `--danger` |
| Sürükleme belirsiz | geri bildirim yok | kart gölgesi + hedef kolon kesikli çerçeve |
| Kart gürültülü | 2'den fazla chip | fazlasını detay modalına taşı |
| Renk körlüğünde kategori kayboluyor | yalnız şerit rengi | kategori etiketini yaz |
| Mobilde kolonlar sıkışık | 3 kolon sığdırılmış | 768 altı yatay kaydırma, 280px kolon |

## Komşu stiller

- **Uyumlu:** `bento-grid` — aynı modüler kutu dili; Bento yalnız rapor bölümünde.
- **Uyumlu:** `utility` — nötr iskelet; Utility form/ayar ekranlarında.
- **Uyumlu:** `mes-production-line` — üretim iş emri panosu olarak bitişik kullanım.
- **Yasak:** `brutalist-web` — kalın çerçeve ve ofset gölge kart hiyerarşisini bozar.
- **Yasak:** `vaporwave` — neon/gradyan dili akış okunurluğunu düşürür.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Kanban_(development) | WIP limiti ve akış kuralları |
| https://en.wikipedia.org/wiki/Kanban_board | kolon/kart yapısı |
| https://en.wikipedia.org/wiki/Cumulative_flow_diagram | akış grafiği eksenleri |
| https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html | sürüklemenin klavye alternatifi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Kanban Akışı (styles/110-kanban-flow/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="kanban-flow"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg soğuk gri + 22px nokta ızgarası (ink %6); kolon zemini --bg-2.
Tipografi: --font-display Space Grotesk 36/26/19 (600); --font-body Nunito 15px/1.55;
  --font-mono JetBrains Mono 11px sayaç (.06em).
Yüzey: tahta --bg / kolon --bg-2 (gölgesiz) / kart --surface + 1px var(--line) + 0 1px 3px;
  sürüklenen kart 0 12px 28px. Radius 8px kontrol, 14px kart, chip 999px.
Renk: tek accent akış mavisi #1a62cc; kategori şeridi + etiket birlikte.
  ink/bg 15.82:1, ink-soft/bg 6.72:1, accent-ink/accent 5.73:1, ink-faint/bg 3.37:1 (ayırıcı).
İmza: sol 3px kart şeridi + `ad / limit` WIP sayacı + hedef kolonda 2px dashed accent.
Hareket: enter 730ms cubic-bezier(.3,.4,.2,1) 19px stagger .068; scroll top 70% 690ms 22px once;
  pin yok; hover 235ms görsel 1.024. prefers-reduced-motion zorunlu (anlık yerleşim).
Yasak: sayaçsız kolon, geri bildirimsiz sürükleme, gradyan/cam, hap radius (chip dışında), renk-only kategori.
Çıktı: bileşen kodu + tek paragraf not (kart şeridini ve WIP sayacını nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: kart şeridi, WIP sayacı, tahta nokta zemini, sürükleme gölgesi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 15.82 / 6.72 / 5.73 — hepsi eşik üstü.
- [ ] Sürüklemenin klavye alternatifi var; odak halkası görünür.
- [ ] 390px'te yatay kaydırma çalışıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken kart animasyonları anlık.

## Token

```css
[data-style="kanban-flow"] {
  --bg: #f2f4f7; --bg-2: #e8ebf0;
  --surface: #ffffff; --surface-2: #f7f9fb;
  --ink: #171a20; --ink-soft: #4e5663; --ink-faint: #7d8593;
  --accent: #1a62cc; --accent-ink: #ffffff;
  --line: rgba(23,26,32,.14);
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 1px 3px rgba(23,26,32,.12); --shadow-hard: none;
  --font-display: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-body: "Nunito", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
  --danger: #b3261e; --danger-ink: #ffffff;
  --ok: #1f6b3f; --warn: #7a5300;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="kanban-flow"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
