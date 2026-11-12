# 93 · Type Experiment

> **Bir cümleyle:** Tipografi spesimeni: 8px taban ızgarası, kadrajdan taşan 76px geniş display ve mono ölçü notları.

| | |
|---|---|
| **Hissiyat** | deneysel, teknik, keskin, "ölçülmüş" |
| **En iyi** | tipografi stüdyosu/vitrin sayfası, font lisans ve spesimen sunumu, deneysel kültür dergisi, tasarım konferansı programı |
| **Kaçın** | güven/ödeme akışı, sağlık formu, kurumsal yatırımcı sunumu, yaşlı kullanıcı ağırlıklı arayüz |
| **Zorluk** | yüksek (taşan tipografi + okunur gövde dengesi) · **Erişilebilirlik** | orta risk (küçük mono etiketler, taşan display) — ölçülen kontrast 17.61:1 / 8.25:1 |
| **Aile** | Yayın & Tipografi (86–95) · **Token** | `kit/tokens.css` → `[data-style="type-experiment"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Type Experiment, bir **spesimen sayfasıdır**: harfi sadece okutmaz, **ölçer**. Üç ölçülebilir karar karakteri kurar: (1) 8px **taban çizgisi ızgarası** zemin katmanında görünür (%6 ink), (2) 76px **Michroma** display `line-height: 0.92` ile kadrajdan taşar (max 14ch), (3) sağ üstte **mono ölçü notları** — `x-h 0.52em / trk -0.02em / wgt 400`. Gövde Space Mono 14px/1.75; yani okunacak metin de teknisyen dilidir.

Kazandığı şey: **ölçülebilir karakter**. Sayfa, "hangi font, hangi ölçü, neden" sorusunu doğrudan yanıtlar; her öğe kendi metriğini taşır. Feda ettiği şey: **konfor** — küçük mono gövde (14px) uzun okuma için yorucudur; bu stil vitrin ve manifestodur, 3000 kelimelik makale gövdesi için değildir (uzun metin başka stile devredilir).

### Ne değildir
- **Kinetic Type (37) değildir.** Kinetic 96px Anton + diagonal şerit + asit sarı ile **hareket** kurar; burada diagonal şerit yok, display **Michroma** (geniş, kare kesimli), accent **ultramarin** ve karakter **taban ızgarası + ölçü notları**.
- **Swiss Design (02) değildir.** Swiss 12 kolonu tek yazı karakteriyle doldurur, accent kırmızı, radius 0 ve gövde Inter'dir; burada gövde **mono**, display kadrajdan taşar ve ölçü notları mono etiketlidir.
- **Editorial Design (03) değildir.** Editorial serif display + drop cap ile okuma kurar; burada serif yok, drop cap yok.
- **Utility (44) değildir.** Utility hairline disiplinini isimli metin stilleriyle kurar (Poppins, mavi accent, 0.06 stagger); burada stagger **0.015**, easing **steps(4)**, accent ultramarin.
- **"Sadece büyük başlık" değildir.** Taban ızgarası, ölçü notları ve taşan glyph katmanı olmadan bu stil sadece dev başlıklı bir sayfadır.

### Nereden gelir
Spesimen sayfası 18. yy'dan beri dökümcülerin font tanıtımı için kullandığı biçimdir: harf kadrajı, ölçü cetveli, ağırlık listesi. Dijitalde 2010'lardan sonra tipografi stüdyoları ve deneysel dergiler bu biçimi **arayüz manifestosu** olarak kullandı: taban ızgarasını görünür bırakmak, ölçüleri etiketlemek ve display'i kadrajdan taşırmak bir "şeffaflık" iddiasıdır.

Klişeye düşmemesi için korunması gereken detay: **ızgara görünür kalmalı ve ölçü notları gerçek olmalı**. Izgarayı kapatmak, taşan display'i 3-4 kez tekrarlamak veya sahte kalın kullanmak stili "büyük başlıklı blog"a çevirir.

### 3 saniyede tanıma testi
1. Zeminde **8px yatay çizgi ızgarası** görünüyor mu; kart yüzeyleri temiz mi?
2. Display **76px ve geniş/kare kesimli** mi (Michroma), satır aralığı 1'in altında mı (0.92)?
3. Sağ üstte **mono ölçü notları** (`x-h … / trk … / wgt …`) duruyor mu?
4. Gövde **mono** mu (Space Mono 14px), satır uzunluğu 52ch'i geçmiyor mu?
5. Accent **ultramarin** ve yalnız çizgi/rozet/butonda mı; gölge hiç yok mu?

## Görsel imza
1. **Taban ızgarası:** `repeating-linear-gradient(0deg, … 0 1px, transparent 1px 8px)`, `%6 ink`; yalnız `body` zemininde, kart/panel/formda `background-image: none`.
2. **Taşan display:** 76px Michroma, `line-height: .92`, `letter-spacing: -.02em`, `max-width: 14ch`; hero'da sol kenarı kadrajdan taşar.
3. **Ölçü notları:** 10px JetBrains Mono, 3 satır (`x-h`, `trk`, `wgt`), accent 1px üst çizgi, sağ üstte.
4. **Glyph katmanı:** 34vw `Aa`, opacity **.06**, sol altta, `pointer-events: none`; metnin arkasında değil, kadrajın boş köşesinde.
5. **Ağırlık karışımı:** display 400 + mono 400/700; sahte kalın yok — Michroma tek ağırlıktır, kalınlaştırma font sahtelemesi sayılır.
6. **Keskin çerçeve:** radius 0, gölge yok; nav ve divider 1px `--ink`, kart 1px `--line`, modal 2px `--ink`.
7. **Glif tablosu:** karakter / advance width / unicode üçlüsü, mono 36px satır, `tabular-nums`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f4f0` | Sayfa zemini (ızgara burada görünür) | Kart içi |
| `--bg-2` | `#eaeae4` | Glif tablosu şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#ffffff` | Kart, panel, modal, input | Sayfa zemini |
| `--surface-2` | `#efefe9` | İkincil buton hover, chip zemini | Metin arkası |
| `--ink` | `#0d0d0f` | Başlık, gövde, nav/divider çizgisi | Accent zemin üstü |
| `--ink-soft` | `#47474c` | Lede, ölçü notları, ikincil metin | 10px altı etiket |
| `--ink-faint` | `#74747a` | Pasif etiket, eksen yazısı | Etkileşimli metin |
| `--accent` | `#2b1de0` | Ölçü notu çizgisi, birincil buton, aktif işaret | Geniş zemin, gövde |
| `--accent-ink` | `#f6f5ff` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(13,13,15,.16)` | Kart kenarı, ızgara, tablo çizgisi | Metin |

- Ölçülen kontrast: `ink / bg` = **17.61:1** · `ink-soft / bg` = **8.38:1** · `accent-ink / accent` = **8.25:1** · `ink-faint / bg` = **4.21:1**.
- Tek vurgu kuralı: ultramarin accent ekranın **≤ %6**'sı; display'in kendisi siyah, accent yalnız çizgi ve birincil eylemde.
- Yasak kombinasyon: accent zemin + `--ink-soft`; accent üzerine `--ink-faint`; ikinci renk (asit yeşili, turuncu).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma | 76px (mobil 40px) | 400 | 0.92 | -0.02em |
| H2 | Michroma | 34px | 400 | 1.02 | -0.015em |
| H3 | Michroma | 20px | 400 | 1.18 | -0.005em |
| Gövde | Space Mono | 14px | 400 | 1.75 | 0 |
| Lede | Space Mono | 13.5px | 400 | 1.75 | 0 (52ch) |
| Etiket / mono | JetBrains Mono | 10.5px | 400 | 1.45 | 0.16em |
| Ölçü notu | JetBrains Mono | 10px | 400 | 1.7 | 0.1em |

- Ölçek oranı ≈ 2.2 (14 → 34 → 76); basamak sayısı 6 — deneysel stilde büyük zıplama bilinçlidir.
- Ölçü önerisi: `h1 { font-size: clamp(40px, 6.2vw, 76px) }`.
- Gövde metni maksimum satır uzunluğu: **52ch** (mono olduğu için 66ch'ten kısa tutulur).
- Ağırlık kuralı: display yalnız 400 (Michroma tek ağırlık); gövde mono 400, vurgu 700. Sahte kalın (synthetic bold) yasak.
- Gövde asla 15px üstüne çıkmaz: spesimen notasının ölçüsü sabittir; okunurluk için satır aralığı 1.75'e çıkarılır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (metin 5, glif tablosu 7) |
| Gutter | 16px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 900px altında display 40px, taşan öğe sayısı 1'de kalır, ölçü notları gizlenir |

- Asimetri kuralı: display **kadrajdan taşar** (sol veya sağ kenar kesilir), metin 5 kolonda kalır; ekran başına en fazla 1 taşan öğe.
- Bölüm ritmi: art arda en fazla **2** aynı hizada blok; üçüncüde 1px `--ink` divider.
- Bölüm dikey boşluk 80px (mobil 48px); kart padding 24px; ızgara adımı 8px (boşluklar 8'in katı).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + taban ızgarası | — | Sayfa |
| Kart | `--surface` (ızgara kapalı) | `none` | Panel, glif tablosu, KPI |
| Yüzen katman | `--surface` + 2px `--ink` | `none` | Modal, dropdown (perde %55) |

- Kenarlık formülü: kart `1px solid var(--line)`, nav/divider `1px solid var(--ink)`, modal `2px solid var(--ink)`.
- Derinlik nereden gelir: **hiçbir yerden** — ızgara + çizgi + kadraj. `--shadow: none`, `--shadow-hard: none`.
- Radius: `--radius` 0px (her şey) · `--radius-lg` 2px (yalnız modal). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 13px 18px | 0px | 10.5px/400 mono, .14em | `--accent` / `--accent-ink`, gölge yok | hover %88 80ms · active 1px iç çerçeve · focus 2px accent offset 0 · disabled opacity .4 üstü çizili · loading `[···]` 4 kare |
| Buton (ikincil) | 44px | 13px 18px | 0px | 10.5px/400 mono | şeffaf / `--ink`, 1px `--ink` | hover `--surface-2` · focus aynı |
| Input | 44px | 0 10px | 0px | 14px/400 Space Mono | `--surface` + 1px `--line` | focus 2px accent + 0 offset + alt çizgi accent · error `--danger` + mono açıklama · disabled opacity .4 |
| Kart | — | 24px | 0px | H3 Michroma 20px | `--surface` + 1px `--line`, gölge yok | hover: kenar `--ink` |
| Chip / badge | 20px | 2px 6px | 0px | 9.5px/400 mono, .14em | şeffaf + 1px `--line` | accent varyantı dolu (ölçü rozeti) |
| Nav | 52px | 0 32px | 0 | mono 10.5px + marka Michroma 15px | `--bg` + alt 1px `--ink` | aktif: 2px accent alt blok; pasif `--ink-soft` |
| Tablo satırı (glif) | 36px | 8px 10px | 0 | 13px/400 JetBrains Mono, tabular | alt 1px `--line` | hover `--surface-2` · seçili: sol 2px accent |
| Modal | — | 28px | 2px | H2 Michroma 34px | 2px `--ink` çerçeve, gölge yok | perde `--ink` %55, 140ms |
| Toast | 40px | 10px 14px | 0px | 11px/400 mono | `--ink` zemin / `--bg` metin | sol uçta 4px accent kare, 2400ms |
| Grafik paleti | — | — | — | eksen 9.5px mono | `--accent`, `--ink`, `--ink-faint` | en fazla 3 seri; sütun bitişik, 1px çerçeve |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 0` (keskin, çerçeveye yapışık); accent zeminli butonda `outline-color: var(--accent-ink)`.
- Dokunma hedefi: en az 44×44px; mono etiketler küçük olduğu için nav bağlantıları 44px yüksekliğe tamamlanır.
- Ölçü notları salt dekoratif değildir: değer değişirse metin de değişmeli (yanlış metrik yazmak yasak).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi; çoğunlukla ikon yerine tipografik işaret (`→`, `§`, `¶`) |
| Fotoğraf | Yok — görsel yerine ölçü diyagramı, glif kadrajı |
| İllüstrasyon | Yalnız dev glyph katmanı (34vw, opacity .06) |
| Doku | 8px taban ızgarası (%6 ink) + `--grain: .01` |
| Logo alanı | Display kelime markası (.04em); bir harfi kadraj dışında kesilmiş varyant serbest |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 76px taşan display + ölçü notları + glyph katmanı | `shots/01-landing.png` |
| Dashboard | düşük | Düz kartlar, mono sayılar; ızgara yalnız zemin | `shots/02-dashboard.png` |
| Form | düşük | 44px alan, 2px accent halka, mono açıklama | — |
| Liste / tablo | orta | Glif tablosu: karakter / advance / unicode | — |
| Boş durum | orta | Tek satır mono açıklama + dev `∅` işareti (%10 opaklık) | — |
| Onboarding | yüksek | 3 adım, her adımda bir ölçü notu bloğu | — |
| Pricing | orta | 3 sütun; önerilen sütunda 2px accent üst çizgi | — |
| Giriş / ödeme | çok düşük | Süs sıfır; mono form + tek accent buton | — |
| Modal | orta | 2px mürekkep çerçeve, gölgesiz | — |
| Bildirim / toast | orta | Koyu zemin, 4px accent kare, 2400ms | — |
| Hata | düşük | `--danger` kenar + mono açıklama; display küçültülür | — |
| Profil / ayar | orta | Glif tablosu + ölçü notları; ızgara korunur | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — tipografi numunesi — 8px taban çizgisi ızgarası, ağırlık/metrik notları.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 80ms | `steps(2, end)` | 1px iç çerçeve (konum kaymaz) |
| Geçiş / sayfa | 140ms | `steps(4, end)` | `opacity` (kademeli) |
| Giriş (enter) | **220ms** | `steps(4, end)` | `opacity` + `translateY(48px)`, **stagger 15ms** (4 kademe) |
| Kaydırma (scroll) | **260ms** | `steps(4, end)` | trigger **`top 94%`**, offsetY **56px**, `once: true` |
| Hover | **80ms** | `linear` | görsel ölçek **1.06** (en yüksek hover ölçeği) |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 260ms | `steps(4, end)` | accent şerit 4 kademede `scaleX(0→1)` |

- İmza ölçüsü: enter **0.22s / 48px / stagger 0.015** · scroll **0.26s / `top 94%` / 56px** · hover **80ms / 1.06** · pin **kapalı** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; kademeli geçiş durur, katmanlar statik kalır.
- Bu stile yasak hareket: yumuşak ease-out zarafeti, parallax, sürekli döngü, harf harf rotate.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f4f0` | `#0b0b0d` |
| `--bg-2` | `#eaeae4` | `#101013` |
| `--surface` | `#ffffff` | `#141417` |
| `--surface-2` | `#efefe9` | `#1b1b1f` |
| `--ink` | `#0d0d0f` | `#efeff1` |
| `--ink-soft` | `#47474c` | `#a9a9ae` |
| `--ink-faint` | `#74747a` | `#7e7e84` |
| `--accent` | `#2b1de0` | `#7b6cff` |
| `--accent-ink` | `#f6f5ff` | `#0b0b0d` |
| `--line` | `rgba(13,13,15,.16)` | `rgba(239,239,241,.16)` |

- Koyu mod **negatif film**: zemin `#0b0b0d`, ızgara beyazdan türetilir; accent açılır (`#7b6cff`) çünkü ultramarin koyu zeminde ızgara çizgisine karışır.
- Glyph katmanı koyuda opacity .04'e düşer (açık opaklık koyu zeminde fazla parlar).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **17.12:1** · `ink-soft/bg` = **8.40:1** · `accent-ink/accent` = **5.09:1** · `ink-faint/bg` = **4.87:1**.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **-:1** açık / **-:1** koyu · `--warn / bg` = **-:1** / **-:1** · `--ok / surface` = -:1 / -:1 (warn) · devre dışı buton metni = **8.15:1** / **7.79:1** · ghost buton kenarı = **4.18:1** / **5.56:1** (eşik 3:1).

## Zorunlu kurallar

1. **Izgara görünür:** 8px taban çizgisi ızgarası yalnız `body` zemininde; kart, panel, form ve modal yüzeyleri temiz.
2. **Taşan display:** 76px Michroma, `line-height: .92`, `max-width: 14ch`; ekran başına en fazla 1 taşan öğe.
3. **Ölçü notları gerçek:** `x-h / trk / wgt` değerleri stilin gerçek değerlerini yazar; uydurma metrik yasak.
4. **Mono gövde:** Space Mono 14px/1.75, 52ch; gövde 15px'i geçmez.
5. **Keskin yüzey:** radius 0 (modal 2px), gölge yok, nav 1px `--ink`.
6. **Accent ≤ %6:** ultramarin yalnız ölçü notu çizgisi, birincil buton ve aktif işarette.

## Yasaklar

- Serif aile, yumuşak ease-out, yay/spring hareket.
- Gradient, blur, cam yüzey, gölge (`--shadow: none`).
- 2px üstü radius, pill buton, yuvarlak avatar.
- İki farklı mono ailesini aynı satırda karıştırmak; gövdede uppercase.
- Birden fazla taşan dev öğe, birden fazla glyph katmanı.
- Sahte kalın (synthetic bold), sahte italik, uydurma ölçü notu.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **4.21:1** — bu bile 4.5:1 altında olduğu için `--ink-faint` yalnız **dekoratif** (pasif etiket, eksen yazısı); etkileşimli metin ve form etiketi olamaz.
- Küçük mono etiketler (10.5px) yalnız büyük harf/rakam ve kısa metin için; uzun cümle mono 10px ile yazılmaz.
- Taşan display ekran okuyucu için sorun değil (görsel kırpma), ama kırpılan kelime anlam kaybettiriyorsa taşırma iptal edilir.
- Hareket/parlama hassasiyeti: orta — `steps(4)` kademeli geçiş ve 56px kayma; `prefers-reduced-motion` açıkken tamamen durur.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse ızgara `rgba` çizgisine düşer, görünür kalır.
- Odak görünürlüğü: `outline-offset: 0` ile 2px accent halka; accent zeminli butonda `--accent-ink` halka.

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
| "Büyük başlıklı blog" gibi | ızgara kapatılmış, ölçü notları silinmiş | 8px ızgarayı ve mono notları geri getir |
| Sayfa kaotik | 3-4 taşan öğe + 2 glyph katmanı | Taşan öğe 1, glyph katmanı 1 |
| Gövde okunmuyor | mono 14px + 1.5 satır aralığı | Satır aralığını 1.75'e çıkar, 52ch'i geçirme |
| Display bozuk görünüyor | Michroma'ya sahte kalın/italik uygulanmış | 400'de bırak; hiyerarşiyi boyutla kur |
| Accent fazla | ultramarin başlıklarda kullanılmış | Accent yalnız çizgi/rozet/buton (≤ %6) |
| Koyu modda ızgara parlıyor | açık opaklık kullanılmış | `%6 ink` yerine koyu blokta `%6 açık ink` |

## Komşu stiller

- **Uyumlu:** `swiss-design` — ızgara ve tipografi disiplini ortak; swiss yalnız uzun metin katmanında.
- **Uyumlu:** `kinetic-type` — deneysel tipografi dili ortak; kinetic yalnız tek hero bandında kullanılır, accent'i ezmez.
- **Uyumlu:** `utility` — mono etiket ve hairline ortak; utility form/tablo katmanında kalır.
- **Yasak:** `claymorphism` — şişkin yuvarlak form keskin spesimen dilini yok eder.
- **Yasak:** `glassmorphism` — blur ve şeffaflık ızgara/ölçü mantığını kırar.
- **Yasak:** `ethereal` — sis ve nefes animasyonu `steps()` hareket diliyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Type_specimen | spesimen sayfası düzeni ve ölçü notları |
| https://en.wikipedia.org/wiki/Baseline_grid | 8px taban ızgarası ve dikey ritim |
| https://www.typewolf.com/ | font eşleştirme ve spesimen sunumu örnekleri |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | satır ve harf aralığı ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Type Experiment (styles/93-type-experiment/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="type-experiment"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Michroma 400 (H1 76px / line-height .92 / -0.02em / max 14ch, mobil 40px),
  govde Space Mono 400 14px/1.75 (<= 52ch), etiket JetBrains Mono 10.5px .16em, olcu notu 10px .1em.
  Serif, sahte kalin ve govdede uppercase yasak.
Yuzey: golge YOK; radius 0 (modal 2px). Nav/divider 1px var(--ink), kart 1px var(--line).
Zemin: 8px taban cizgisi izgarasi SADECE body'de (repeating-linear-gradient, %6 ink); kart/panel/form temiz.
Renk: kagit #f4f4f0 + murekkep #0d0d0f + tek accent ultramarin #2b1de0 (<= %6).
Imza: kadrajdan tasan 76px display (ekran basina 1); sag ustte mono olcu notlari (x-h / trk / wgt) +
  accent 1px ust cizgi; sol altta 34vw "Aa" glyph katmani opacity .06; glif tablosu (karakter/advance/unicode).
Hareket: enter 220ms steps(4,end) 48px stagger 15ms; scroll top 94% / 260ms / 56px / once;
  hover 80ms imageScale 1.06; pin kapali. prefers-reduced-motion zorunlu.
Yasak: serif, yumusak ease-out, gradient/blur/cam, golge, 2px ustu radius, pill buton,
  uydurma olcu notu, ikinci glyph katmani.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (ızgara + taşan display + ölçü notları).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (17.61:1), accent üstü ≥ 4.5:1 (8.25:1).
- [ ] Odak halkası görünür (2px, offset 0), dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok; taşan öğe sayısı 1.
- [ ] `prefers-reduced-motion` açıkken kademeli geçiş duruyor.

## Token

```css
[data-style="type-experiment"] {
  --bg: #f4f4f0; --bg-2: #eaeae4;
  --surface: #ffffff; --surface-2: #efefe9;
  --ink: #0d0d0f; --ink-soft: #47474c; --ink-faint: #74747a;
  --accent: #2b1de0; --accent-ink: #f6f5ff;
  --line: rgba(13,13,15,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Michroma", "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0.01;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="type-experiment"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
