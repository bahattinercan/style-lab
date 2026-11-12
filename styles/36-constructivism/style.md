# 36 · Constructivism

> **Bir cümlede:** 1920'ler Rus konstrüktivizmi: kırmızı–siyah–kırık beyaz, kalın diagonal çubuk, aşırı büyük tipografi ve radius'suz asimetrik montaj.

| | |
|---|---|
| **Hissiyat** | ajitatif, endüstriyel, keskin, "afiş" |
| **En iyi** | kültür/sanat kurumu, manifesto/duyuru sayfası, ajans vitrini, ürün lansmanı, eğitim platformu |
| **Kaçın** | sağlık verisi, finans işlemi, uzun okuma, çok adımlı kurumsal form, yoğun veri tablosu |
| **Zorluk** | yüksek (denge + tipografi disiplini) · **Erişilebilirlik** | iyi (yüksek kontrast, süs metni örtmez) |
| **Aile** | Geometrik (36) · **Token** | `kit/tokens.css` → `[data-style="constructivism"]` |
| **Kompozisyon** | `index` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Konstrüktivizm (Rus, 1915–1934) tasarımı **montaj** fikrine dayanır: ayrı parçalar (çubuk, daire, dikdörtgen, harf bloğu) kesilip **diagonal bir eksen** üzerinde birleştirilir. Palet bilinçli olarak üçe kilitlidir — kırmızı, siyah, kırık beyaz. Tipografi süs değil **yapı** taşır: başlık ekranın yarısını kaplar, etiketler dikey veya 90° döndürülmüş mono harflerle basılır.

Kazandığı şey: anında okunan, ideolojik enerji taşıyan bir kimlik — bir cümle bile afiş gibi durur. Feda ettiği şey: sakinlik ve nüans. Yoğun operasyonel ekranda diagonal ve dev harf, veriyi okunamaz hâle getirir; bu yüzden stil eklenti değil **rejim** olarak kullanılır (bkz. § Ekran reçeteleri).

### Ne değildir
- **Bauhaus değildir.** Bauhaus daire/kare/üçgen dengesi ve 2px çizgi kullanır (35); konstrüktivizm **diagonal çubuk + montaj** ve 3px+ kural ile ayrılır — şekil sayısı az, çubuk ağırlığı yüksektir.
- **Neo-brutalism değildir.** Neo-brutalism offset gölge ve "dijital sticker" dili taşır; burada gölge yalnız `--shadow-hard` (6px blok) ve yalnız öne çıkan tek katmanda.
- **Swiss Design değildir.** Swiss ızgaraya **itaat** eder ve sola dayalı sakin tipografi kurar; konstrüktivizm ızgarayı **kırar** (öğe ızgaradan taşar, diagonal keser).
- **Art Deco / propaganda afişi klişesi değildir.** Dekoratif yıldız, çekiç-orak, dokuma doku yok; dil geometrik ve soyuttur.
- **"Kırmızı-siyah tema" değildir.** Diagonal eksen ve aşırı tipografi ölçeği olmadan geriye sadece agresif bir kurumsal palet kalır.

### Nereden gelir
Rodchenko ve El Lissitzky'nin afiş/kitap kapakları, VKhUTEMAS atölyeleri, 1920'ler foto-montajı ve `Pro Let` tipografi denemeleri. 1990'larda Ray Gun/David Carson, 2010'larda kurumsal kimlik yenilemeleriyle döndü: kalabalık bir feed'de tek karede okunmak isteyen her marka için hâlâ en keskin çözüm. Klişeye düşmemesi için korunması gereken detay: **montaj mantığı** — öğeler birbirine değil, ortak diagonal eksene hizalanır.

### 3 saniyede tanıma testi
1. Ekranı kesen en az bir **kalın diagonal çubuk** (≥24px kalınlık, 58° veya −32°) var mı?
2. Başlık **ekran genişliğinin ≥%55'ini** kaplıyor mu (display ≥56px, satır aralığı ≤0.96)?
3. Palet üçe kilitli mi: kırmızı `#c1121f` + siyah `#11100f` + kırık beyaz `#efeae0`?
4. Radius her yerde **0** mı; gölge yalnız tek katmanda 6px blok mu?
5. Etiketler **uppercase mono** ve tracking ≥`0.18em` mi; bir etiket dikey (90°) mi?

## Zorunlu kurallar

1. **Tek eksen:** ekran başına tek diagonal açı ailesi seçilir (58° ya da −32°); aynı ekranda iki farklı açı kullanılmaz.
2. **Çubuk bütçesi:** ekran başına 1–3 kalın çubuk. Her çubuk bir işlev taşır: bölüm ayırıcı, yönlendirme, vurgu bloğu.
3. **Kural kalınlığı:** panel/buton kenarı `3px var(--line)`; bölüm ayırıcı `6px`; hairline **yasak**.
4. **Palet kilidi:** nötr (kırık beyaz + siyah) + tek kırmızı. Kırmızı ekranın **≤%12**'sini kaplar; ikinci bir renk (sarı/mavi) yalnız grafik serisinde ve ≤%3.
5. **Tipografi ölçeği:** display ≥56px (mobil ≥34px), gövde 15.5px, etiket 10px mono uppercase. Ara basamak uydurulmaz; ölçek atlamalıdır (10 → 15.5 → 27 → 56/64).
6. **Radius 0**, yumuşak gölge yok; tek derinlik aracı `--shadow-hard` (6px blok) ve yalnız öne çıkan kart/modal.
7. **Asimetri zorunlu:** hero 7/5 veya 9/3; ortalanmış 6/6 kompozisyon yasak. Bölüm başına en az bir öğe ızgara dışına taşar (negatif margin ≥16px).
8. **Montaj hizası:** metin, çubuk ve görsel bloğu aynı diagonal eksene hizalanır; hiçbir öğe rastgele döndürülmez (döndürme yalnız çubuk ve mono etiket için, ±2° tolerans).

## Yasaklar

- Gradient, blur, cam, yumuşak/çok katmanlı gölge.
- Radius > 0 (buton, input, kart, chip — istisna yok).
- 4+ renk; pastel ton; metalik/altın vurgu.
- 1px hairline kenarlık ("minimal" taklidi).
- Metnin üstünden geçen çubuk (kontrast ve okunurluk kırılır).
- Gövde metninde uppercase veya display font.
- Sürekli animasyon, parallax, döngüsel dönen şekil.
- Yoğun tabloda dev başlık veya diagonal arka plan deseni.
- Süs olarak yıldız/çekiç-orak/endüstriyel ikon klişesi.

## Görsel imza
- **Diagonal çubuk:** `transform: rotate(-32deg)`, kalınlık 24–40px, `background: var(--accent)`, `border-radius: 0`, metnin arkasında (`z-index` düşük, `pointer-events: none`).
- **3px siyah kural:** panel/buton/input kenarı `3px solid var(--line)`; bölüm ayırıcı `6px`.
- **Aşırı display:** Archivo Black uppercase, 56–72px, `line-height: .94`, `letter-spacing: -.01em`, en fazla 3 satır.
- **Dikey mono etiket:** `writing-mode: vertical-rl` + `text-orientation: mixed`, 10px Space Mono, tracking `0.22em`, çubuk kenarında.
- **Kırmızı blok:** düz dolgu, 0 radius, 96–180px; içinde yalnız `--accent-ink` metin (5.87:1).
- **Blok gölge:** `6px 6px 0 var(--line)` — yalnız hero kartı, öne çıkan pricing kartı ve modal.
- **Montaj ızgarası:** görsel kartın bir kenarı container dışına ≥24px taşar.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#efeae0` | sayfa zemini (kırık beyaz kâğıt) | metin üstü |
| `--bg-2` | `#e2dbcd` | bölüm zemini, logo şeridi | kart yüzeyi |
| `--surface` | `#fbf8f2` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#e9e2d5` | chip, ikincil yüzey, tablo hover | ana kart |
| `--ink` | `#11100f` | metin, çubuk, kenarlık (15.85:1) | — |
| `--ink-soft` | `#5a5349` | açıklama, lede (6.33:1) | başlık |
| `--ink-faint` | `#847d6f` | dekoratif etiket, 3.41:1 | etkileşimli metin |
| `--accent` | `#c1121f` | çubuk, birincil buton, vurgu bloğu | gövde metni |
| `--accent-ink` | `#fbf8f2` | accent üstü metin (**5.87:1**) | accent dışı zeminde |
| `--line` | `#11100f` | 3px/6px kural | hairline |

- Ölçülen kontrast: `ink / bg` **15.85:1** · `ink-soft / bg` **6.33:1** · `ink-faint / bg` **3.41:1** · `accent-ink / accent` **5.87:1** · `ink / surface` **17.93:1**.
- Tek vurgu kuralı: kırmızı tek başına anlam taşır (aktif/CTA/uyarı). Durum için ikinci renk yerine **doku ve çizgi** kullanılır (kesikli 3px = uyarı, iki çubuk = hata).
- Yasak kombinasyon: kırmızı metin + kırmızı zemin; kırmızı üstü `--ink` (3.05:1); `--ink-faint` üstü `--accent-ink`.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 56–72px (mobil 34px) | 400 | 0.94 | `-0.01em`, uppercase |
| H2 | Archivo Black | 27px | 400 | 1.02 | `0em`, uppercase |
| H3 | Jost | 19px | 600 | 1.2 | `0.01em` |
| Gövde | Jost | 15.5px | 400 | 1.6 | `0.01em` |
| Etiket / mono | Space Mono | 10px | 400 | 1.2 | `0.22em`, uppercase |

- Ölçek oranı 1.7 (atlamalı): kullanılan basamaklar **10 · 13 · 15.5 · 19 · 27 · 56/72** (6 basamak).
- Ölçü önerisi: `h1 { font-size: clamp(34px, 6.4vw, 72px); line-height: .94; text-wrap: balance; }`
- Gövde maksimum satır uzunluğu: **62ch**; lede 44ch (montaj bloğu dar kalır).
- Ağırlık kuralı: 400 ve 600 var; 300/500/700 kullanılmaz (Archivo Black zaten maksimum kalınlıkta, `font-weight` artırmak gerekmez).
- Archivo Black **24px altına inmez** (küçük puntoda harf gözenekleri kapanır).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 20 · 32 · 48 · 72 (`--space-1…7`) |
| Breakpoint davranışı | 640px altı tek kolon; 640–900px 8 kolon (gutter 16px); 900px üstü 12 kolon |

- Asimetri kuralı: hero **7/5** veya **9/3**; ekran başına en az **1**, en fazla **2** bölüm simetriden çıkar.
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada durabilir; üçüncü blok tam genişlik ya da diagonal kesilmiş olur.
- Dikey ritim: bölüm arası 72px (mobil 48px); kart içi padding 24px; çubuk ile metin arası ≥20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm zemini |
| Kart | `--surface` + `3px var(--line)` | yok | içerik panelleri, tablo kabı |
| Yüzen katman | `--surface` + `3px var(--line)` | `6px 6px 0 var(--line)` | hero kartı, öne çıkan pricing, modal, dropdown |

- Kenarlık formülü: `border: 3px solid var(--line)`; iç ayırıcı `1px solid rgba(17,16,15,.18)` **yalnız** tablo satırı (dış çerçeve yine 3px).
- Derinlik nereden gelir: **ofset blok** (6px) + kalın çizgi; ışık/gradient yok.
- Radius: `--radius: 0px`, `--radius-lg: 0px` — chip ve input dahil her bileşende 0.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 24px | 0 | 13px/400 mono uppercase 0.14em | `--accent` + `--accent-ink` + `3px var(--line)` | hover: `--shadow-hard` · active: gölge 0, `translate(2px,2px)` · focus: `outline: 3px solid var(--ink); outline-offset: 3px` · disabled: `opacity .4` + kesikli kenar · loading: 3 nokta mono |
| Buton (ikincil) | 46px | 0 20px | 0 | 13px mono uppercase | transparent + `3px var(--line)` | hover: `--surface-2` zemin · active: `translate(2px,2px)` |
| Input | 46px | 0 14px | 0 | 15.5px Jost | `--surface` + `3px var(--line)` | focus: `outline: 3px solid var(--accent)` · filled: kenar `--ink` · error: kenar `--accent` + 10px mono hata satırı · disabled: `--surface-2` + `opacity .55` |
| Kart | içerik | 24px | 0 | H2 27 + 15.5 | `--surface` + `3px` | öne çıkan: `--shadow-hard` |
| Chip / badge | 26px | 0 10px | 0 | 10px mono uppercase 0.16em | `--surface-2` + `1px var(--line)` | aktif: `--accent` + `--accent-ink` |
| Nav | 74px | 0 32px | — | 12px mono uppercase 0.12em | `--bg` + alt `3px var(--line)` | aktif: alt `6px --accent` (metin altı, tam kelime genişliği) |
| Tablo satırı | 54px | 14px 16px | — | 15px Jost, başlık 10px mono | `1px rgba(17,16,15,.18)` alt | hover: `--surface-2` · seçili: sol `6px --accent` |
| Modal / sheet | içerik | 28px | 0 | H2 + 15.5 | `--surface` + `3px` + `--shadow-hard` | backdrop `rgba(17,16,15,.62)`; kapatma 44×44 |
| Toast | 48px | 0 18px | 0 | 12px Jost | `--ink` zemin + `--bg` metin | sol `6px --accent`, 4sn, 1 kez |
| Grafik paleti | — | — | 0 | eksen 10px mono | `--data-1` accent, `--data-2` ink, `--data-3` ink-soft, `--data-4` `#e9e2d5` | çubuklar 0 radius, 6px boşluk |

- Odak halkası: `outline: 3px solid var(--ink); outline-offset: 3px` — kırmızı zemin üstünde `outline: 3px solid var(--accent-ink)`.
- Dokunma hedefi: en az 44×44px. Görsel olarak 26px olan chip ve 10px mono etiketler, `padding: 10px` + `min-height: 44px` ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 3px çizgi, 24px ızgara, yalnız geometrik form (çubuk, daire, ok); süs ikonu yok |
| Fotoğraf | yüksek kontrast siyah-beyaz veya iki tonlu (kırmızı duotone); ekran alanının ≥%28'i, tek kare — kolaj yapılmaz |
| İllüstrasyon | yok; montaj **fotoğraf + çubuk + harf bloğu** ile kurulur |
| Doku | grain `.03` (kâğıt) + 45° çizgi deseni yalnız hero zemininde, opaklık ≤.08 |
| Logo alanı | Archivo Black kısaltma, kare/daire 0 radius, çevresinde ≥1 çubuk yüksekliği boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 64–72px uppercase başlık, 7/5 asimetri, 1 kırmızı diagonal çubuk, tek CTA; başlık en fazla 3 satır | `shots/01-landing.png` |
| Dashboard | düşük | çubuk ve döndürme kapanır; KPI'lar `6px` üst kural + mono etiket; kırmızı yalnız sapma değerinde | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, display 34px, çubuk ekranın sağ kenarından taşar (taşma `overflow: hidden`), dokunma 44px | — |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 0 ve 3px kural her bileşende görünür | — |
| Form | çok düşük | çubuk yok; 3px kenarlı input, tek sütun 460px, etiket mono uppercase | — |
| Modal / katman | orta | 3px çerçeve + 6px blok gölge; başlık 27px; 2 buton sağa | — |
| Veri | düşük | tablo 54px satır, dış çerçeve 3px, iç 1px; grafik 0 radius çubuklar | — |
| Gezinme | orta | alt `3px` kural; aktif öğe altında `6px` kırmızı; logo kare monogram | — |
| Pricing | orta | 3 kart; orta kart `6px` blok gölge + `6px` üst kırmızı çubuk; "seç" birincil buton | — |
| Giriş / ödeme | çok düşük | süs ≤.22; yalnız 3px kenar + mono etiket; güven için sade | — |
| Liste | düşük | filtre çubuğu 3px alt kural; satır 54px; seçili satır sol `6px` kırmızı | — |
| Boş / hata durumu | orta | tek kırmızı blok (96px) + tek cümle + tek buton; 404'te display 96px | — |
| Ayarlar | düşük | bölüm başlıkları `6px` kural ile; anahtar 44×24 radius 0; tehlike bölgesi kırmızı kenar | — |
| Onboarding | yüksek | adım başına bir montaj öğesi (çubuk → blok → harf); ilerleme çubuğu 6px | — |
| Makale | orta | 680px ölçü, drop-cap yok, 6px kural ile bölüm, mono pull-quote sol kenarda | — |
| Mobil sheet | orta | alt sayfa 3px üst kural, 0 radius, 48px sürükleme tutamacı | — |
| Mobil form | çok düşük | tam genişlik input 52px yükseklik, klavye üstü CTA 56px | — |
| Mobil liste | düşük | 56px satır, avatar yerine kare mono baş harf | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 90ms | `cubic-bezier(.2,.8,.2,1)` | `transform: translate(2px,2px)` + gölge 0 |
| Geçiş / sayfa | 200ms | `cubic-bezier(.16,.84,.24,1)` | `opacity`, `clip-path` (diagonal reveal) |
| Giriş (enter) | **300ms** | `cubic-bezier(.7,0,.25,1)` | `opacity` + `translateY(26px)`, **stagger 40ms**; diagonal çubuk gibi sert iniş |
| Kaydırma (scroll) | **340ms** | `cubic-bezier(.7,0,.25,1)` | trigger **`top 88%`**, offsetY **28px**, `once: true` |
| Hover | **110ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `enabled: false` (`scrub 1.0` / `+120%` kullanılmıyor) |
| Ödül / vurgu | 320ms | `cubic-bezier(.16,.84,.24,1)` | çubuk `scaleX(0→1)`, tek atım |

- İmza ölçüsü: enter **0.3s / 26px / stagger 0.04** · scroll **0.34s / `top 88%` / 28px** · hover **110ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, çubuk animasyonu durur, `transform` sıfırlanır (basma hariç — basma geri bildirim olarak kalır).
- Bu stile yasak hareket: sürekli dönen çubuk, parallax, otomatik kayan yazı (marquee), gradient geçişi.
## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#efeae0` | `#11100f` |
| `--surface` | `#fbf8f2` | `#1a1817` |
| `--ink` | `#11100f` | `#f0eae0` |
| `--accent` | `#c1121f` | `#e0323c` |

- Koyu mod bu stilin **ana modu değildir**; talep varsa palet elle yazılır (`[data-theme="dark"][data-style="constructivism"]`), `--accent-ink` `#11100f` olur (koyu zeminde kırmızı üstü siyah 4.9:1).
- Koyu modda çubuk kalınlığı aynı kalır; `--shadow-hard` siyahtan `#000` gölgeye kayar ve opaklığı `.6`'ya iner (siyah zemin üstünde blok gölge okunmaz).
- `filter: invert()` yasak; grain `.03` → `.02` (koyu zeminde doku daha görünür olur).
- Koyu mod sahneleri (17/18) bu stil için üretilmedi; koyu varyant üretilirse `--accent-ink/accent` yeniden ölçülür.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint / --bg` **3.41:1** — yalnız dekoratif etiket ve sıra numarası; etkileşimli metin değil. Düzeltme gerekirse `#767061` (4.11:1).
- `--accent-ink / --accent` **5.87:1** → buton metni güvenli; kırmızı zemin üstünde **siyah metin kullanılmaz** (3.05:1).
- `--ink / --bg` **15.85:1**, `--ink-soft / --bg` **6.33:1** → gövde ve açıklama AA/AAA sınırının üstünde.
- Diagonal çubuk ve doku katmanı `pointer-events: none` + `aria-hidden`; metnin **üstünden** geçmez (kontrast korunur), odak sırasını değiştirmez.
- Hareket/parlama hassasiyeti: kırmızı düz dolgu büyük alanda göz yorar; blok alanı ≤%12, yanıp sönen öğe yok.
- Opak fallback: `@supports` gerekmez (şeffaflık/blur yok); tüm yüzeyler opak.
- Odak görünürlüğü: kırmızı buton üstünde `--ink` halka (3.05:1) zayıf kalır → kırmızı yüzeylerde halka `3px solid var(--accent-ink)` + `outline-offset: 3px` kullanılır.

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
| "Sadece kırmızı-siyah tema" gibi duruyor | Diagonal eksen ve tipografi ölçeği uygulanmadı | En az 1 çubuk + display ≥56px + 7/5 asimetri |
| Afiş gibi ama okunmuyor | Gövde metni display font veya uppercase | Gövde Jost 15.5, uppercase yalnız başlık/etiket |
| Neo-brutalism'e kaydı | Radius/gölge eklendi, çubuk kaldırıldı | Radius 0, gölge yalnız `--shadow-hard` 6px |
| Göz yoruyor | Kırmızı alan >%12, 4+ renk | Kırmızı ≤%12, ikinci renk yok |
| Dağınık montaj | Öğeler rastgele döndürülmüş | Tek açı ailesi (58° veya −32°), ±2° tolerans |
| Hero'da metin çubuğun altında kalıyor | Çubuk `z-index` yüksek | Çubuk metnin **arkasına**: `z-index: 0`, `pointer-events: none` |
| Mobilde başlık kırpılıyor | 64px sabit punto | `clamp(34px, 6.4vw, 72px)` |
| Tablo okunmuyor | Satır içinde 3px çerçeve + dev başlık | Dış çerçeve 3px, iç 1px; başlık 27px'e in |

## Komşu stiller

- **Uyumlu:** `35 bauhaus` — aynı dönem/geometri; garnitür olarak yalnız illüstrasyon katmanında. `17 maximalism` — montaj yoğunluğu; yalnız hero görselinde. `13 neo-brutalism` — kalın çizgi; yalnız tablo/buton katmanında.
- **Yasak:** `29 ethereal` (yumuşak ışık ve blur, çubuğun keskinliğini bozar) · `04 luxury-typography` (serif zarafeti, afiş diliyle çelişir) · `08 glassmorphism` (cam/blur, opak kural fiziğiyle taban tabana zıt).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.moma.org/artists/4978 (Rodchenko) | afiş kompozisyonu, diagonal eksen, foto-montaj |
| https://www.moma.org/artists/3522 (El Lissitzky) | `Pro UNOVIS` tipografi blokları, harf–geometri ilişkisi |
| https://fonts.google.com/specimen/Archivo+Black | display, uppercase ağırlık |
| https://fonts.google.com/specimen/Jost | gövde, geometrik nötr |
| https://fonts.google.com/specimen/Space+Mono | etiket, dikey mono |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Constructivism (styles/36-constructivism/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="constructivism"] değişkenleri; hard-coded renk/gölge/radius yasak.
Eksen: ekran başına tek açı ailesi (58° veya −32°); 1–3 kalın çubuk (24–40px), her çubuk işlev taşır, metnin arkasında.
Tipografi: --font-display (Archivo Black) uppercase başlıkta ≥56px, line-height .94; --font-body (Jost) gövdede 15.5px; --font-mono (Space Mono) 10px uppercase etiketlerde, tracking 0.22em.
Palet: #efeae0 zemin + #11100f mürekkep + #c1121f kırmızı (kırmızı ≤%12, üstünde yalnız --accent-ink 5.87:1).
Yüzey: 3 seviye (--bg / --surface + 3px var(--line) / + --shadow-hard 6px 6px 0); radius her yerde 0.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil (focus: 3px outline, offset 3px).
Düzen: asimetri 7/5 veya 9/3; 6/6 ortalanmış kompozisyon yasak; bölüm başına ≥1 öğe ızgara dışına taşar.
Hareket: basma 90ms translate(2px,2px), geçiş 200ms, ödül 320ms; prefers-reduced-motion zorunlu.
Yasak: gradient/blur/cam, radius>0, 4+ renk, hairline, metin üstünden geçen çubuk, gövdede uppercase.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranı kesen en az 1 kalın diagonal çubuk var; metnin arkasında.
- [ ] Display başlık ≥56px (mobil ≥34px), ≤3 satır, uppercase.
- [ ] Palet üçe kilitli; kırmızı alan ≤%12.
- [ ] Radius 0, yumuşak gölge yok; gölge yalnız `--shadow-hard` 6px.
- [ ] Asimetri 7/5 veya 9/3; 6/6 ortalanmış kompozisyon yok.
- [ ] Kontrast: gövde ≥4.5:1, büyük metin ≥3:1, accent üstü ≥4.5:1.
- [ ] Odak halkası 3px görünür, dokunma hedefi ≥44px.
- [ ] 390px genişlikte taşma/kırpılma yok.

## Token

```css
[data-style="constructivism"] {
  --bg: #efeae0; --bg-2: #e2dbcd;
  --surface: #fbf8f2; --surface-2: #e9e2d5;
  --ink: #11100f; --ink-soft: #5a5349; --ink-faint: #847d6f;
  --accent: #c1121f; --accent-ink: #fbf8f2;
  --line: #11100f;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: 6px 6px 0 #11100f;
  --font-display: "Archivo Black", "Inter", sans-serif;
  --font-body: "Jost", "Inter", sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .03;
}
```
