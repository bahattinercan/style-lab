# 71 · West African Pattern

> **Bir cümlede:** 8px dokuma şeritlerinin altın desen bloklarıyla kesildiği koyu zemin üzerinde, süsün yalnız bantlarda yaşadığı dokuma dili.

| | |
|---|---|
| **Hissiyat** | sıcak, ritmik, güçlü, törensel |
| **En iyi** | zanaat/moda markası, kültür festivali vitrini, müzik/koleksiyon ürünü, yerel pazar platformu |
| **Kaçın** | sağlık formu, finans uyum ekranı, 20+ satırlık yoğun tablo — desen katmanı veri okumasını yorar |
| **Zorluk** | orta (deseni bantta tutmak) · **Erişilebilirlik** | iyi (gövde 15.21:1, accent üstü 7.55:1; faint 4.75:1) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="west-african-pattern"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
West African Pattern, Batı Afrika şerit dokumasının (kente, asafo, adinkra damgaları) ekran karşılığıdır: koyu bir zemin, üstünde **8px'lik dokuma şeritleri** ve her beşinci bantta **24px'lik altın desen bloğu**. Süs ile bilgi kesin ayrılır: motif yalnız ayrılmış bantlarda (nav altı, kart üstü, ayırıcı, hero zemini) yaşar; gövde metninin arkasına hiçbir koşulda girmez. Stilin karakterini ayakta tutan tek kural bu ayrımdır.

Kazandığı şey: **ritim ve ağırlık**. 8px'lik tekrar, ekranda dokuma tezgâhının nabzını kurar; Archivo Black display ve tek altın vurgu bu ritmi törensel bir ciddiyete taşır. Feda ettiği şey: **yoğunluk ve yumuşaklık** — radius 0–2px, gölge yok; 72px bölüm ritmi veri ağır ekranlarda yer israf eder.

### Ne değildir
- **Nordic Folk (66) değildir:** 66 açık keten zemin + madder kırmızısı + rosemaling bitkisel bandı kullanır; bu stil **koyu zemin + altın** ve **geometrik damga** (bitkisel kıvrım yok), radius 0–2px (66'da 6–10px).
- **Bohemian (30) değildir:** Bohemian deseni arka plana yayar ve organik radius kullanır; burada desen yalnız bantta, radius keskin, grain .02 (bohemian'da doku serbest).
- **Maximalism (17) değildir:** maximalism çok renk + katman yığar; burada **tek vurgu altın** ve nötr zemin var, desen katmanı %10–42 opaklıkla sınırlı.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası ve kobalt çini geometrisiyle **döşeme** kurar; bu stil **şerit dokuma** kurar (yatay bant tekrarı, döşeme modülü yok).
- **"Koyu tema + altın accent" jeneriği değildir:** accent'in işi süslemek değil, **bant ritmini kesmek**; her ekranda en az bir 24px desen bloğu görünmek zorunda.

### Nereden gelir
Gana/Togo kente dokuması (ipek ve pamuk şeritlerin 8–10 cm'lik bantlar hâlinde dikilmesi), asafo bayrak aplikleri ve Akan adinkra damgaları aynı görsel grameri paylaşır: **dar tekrar + güçlü renk bloğu + sembolik damga**. Dijitalde 2020'lerde zanaat markaları ve kültür etkinlikleriyle geri döndü; nedeni ölçülebilir — desen CSS tekrarlı gradient ile kurulabildiği için yüksek çözünürlüklü görsel gerektirmez. Klişeye dönüşmemesi için korunacak detay: **8px şerit genişliğinin ve her beşinci 24px bloğun bozulmaması**.

### 3 saniyede tanıma testi
1. Nav'ın hemen altında 12px yüksekliğinde tekrar eden altın/nötr dokuma bandı var.
2. Her kartın üst kenarında 8px'lik aynı bant desenini görüyorsun.
3. Başlıklar Archivo Black ile büyük harf ve çok kalın; radius yok denecek kadar keskin.
4. Ekranda tek doygun renk altın; gerisi sıcak koyu nötr skala.
5. Bir bantta 24×24px geometrik damga motifi tekrar ediyor.

## Görsel imza
1. **8px dokuma şeridi:** `repeating-linear-gradient(90deg, accent 0 8px, transparent 8px 16px, line 16px 24px, transparent 24px 40px)`; bant yüksekliği 8px (nav altında 12px).
2. **24px desen bloğu:** her beşinci bant 24px genişliğinde altın blok; şerit içinde blok genişliği asla değişmez.
3. **Adinkra damgası:** 24×24px, 2px çizgi, köşesiz; ekran başına en fazla 2 farklı damga, yalnız bant içinde.
4. **Keskin geometri:** `--radius: 0px`, `--radius-lg: 2px`; hiçbir yüzeyde 2px üstü yuvarlaklık yok.
5. **Archivo Black display:** 40px, büyük harf, tracking 0; alt başlıklar 26/20px aynı ailede.
6. **Dokuma zebra:** tablo satırları 40px, `--surface` / `--surface-2` dönüşümlü; ilk sütunda 3px altın şerit (%35 opaklık).
7. **Hover dili:** 210ms'de zemin %88'e koyulaşır ve öğe 2px sağa kayar ("atkı kayması"); görsel ölçek 1.022, gölge eklenmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#17120f` | sayfa zemini, nav arkası | kart zemini |
| `--surface` | `#241b16` | kart, panel, tablo zemini | sayfa zemini |
| `--surface-2` | `#2d221b` | dokuma zebra, çip, ikincil buton | birincil eylem |
| `--ink` | `#f3e7d3` | başlık, gövde, tablo metni | desen katmanı |
| `--ink-soft` | `#c0ae93` | etiket, açıklama, ikincil metin | başlık |
| `--ink-faint` | `#8d7f68` | dekoratif: bant ipucu, dipnot | etkileşimli metin |
| `--accent` | `#d99a1f` | dokuma bloğu, birincil buton, damga, odak halkası | gövde metni arkası |
| `--accent-ink` | `#1c1206` | accent üstü metin | gövde metni |
| `--line` | `rgba(243,231,211,.16)` | kart kenarı, bant nötr şeridi, tablo ayırıcı | metin rengi |
| `--danger` / `--ok` / `--warn` | `#e2694f` / `#6fbf7a` / `#e0b84a` | hata / onay / uyarı durumu | dekorasyon, desen |

- Ölçülen kontrast (varsayılan koyu zemin): `ink / bg` = **15.21:1** · `ink-soft / bg` = **8.60:1** · `accent-ink / accent` = **7.55:1** · `ink-faint / bg` = **4.75:1**.
- Tek vurgu kuralı: altın ekran başına iki işten fazlasını taşımaz — **bant ritmi** ve **birincil eylem**.
- Yasak kombinasyon: altın metni koyu nötr üstünde (kontrast düşer, `--ink` kullan); desen katmanını %45 üstü opaklığa çıkarmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black (`--font-display`) | 40px (mobil 27px) | 400 (tek ağırlık) | 1.1 | `--tracking` 0 |
| H2 | Archivo Black | 26px | 400 | 1.24 | 0 |
| H3 | Archivo Black | 20px | 400 | 1.3 | 0 |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.6 | 0 |
| Küçük / açıklama | Jost | 14px | 400 | 1.5 | 0 |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.16em (büyük harf) |

- Ölçek oranı **1.6** (11 → 16 → 26 → 40); kullanılan basamak sayısı 5: 11/14/16/26/40.
- Ölçü: `h1 { font-size: clamp(27px, 3.6vw, 40px) }`.
- Gövde metni maksimum satır uzunluğu: **62 ch** (desen katmanı ölçüyü daraltır).
- Ağırlık kuralı: display yalnız 400 (Archivo Black zaten en kalın); gövde 400/500. 700 yasak, italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1240px üstü), 8 (768–1239), 4 (390–767) |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`), birim 8px |
| Breakpoint davranışı | 1240px: 8/4 şerit bölünmesi; 768px: 6/6; 390px: tek kolon, bant yüksekliği 8px kalır |

- Asimetri kuralı: ekran başına **1** geniş blok (8 kolon) + 4 kolon yan şerit; diğer satırlar 6/6.
- Bölüm ritmi: art arda en fazla **2** kart satırı; üçüncü blok ya tam genişlik dokuma bandı ya alıntı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, dokuma bandı zemini |
| Kart | `--surface` | yok | kart, panel, tablo |
| Yüzen katman | `--surface` + 2px accent kenar | `none` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; birincil butonda 2px soluk nötr kenar, modalda 2px `--accent`.
- Derinlik nereden gelir: **hiçbir yerden** — düz dokuma düzlemi; ayrım zemin tonu ve bant deseniyle kurulur.
- Radius: `--radius` 0px (buton, input, çip), `--radius-lg` 2px (kart, modal); 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 24px | `--radius` (0) | 13px/400 Archivo Black, .08em, büyük harf | accent + accent-ink, gölge yok | hover %88 + 2px sağa · active translateX(2px) · focus 2px halka offset 3px · disabled %40 kesikli · loading 4 kare damga 800ms steps(4) |
| Buton (ikincil) | 44px | 0 24px | `--radius` | 13px Jost, .12em | şeffaf + 2px `--line` | hover kenar `--ink-soft` |
| Input | 40px | 0 12px | `--radius` | 15px Jost | surface + `--line` + sol 4px `--surface-2` şerit | focus sol şerit accent · error sol şerit danger · disabled %40 |
| Kart | — | 16px | `--radius-lg` | başlık 20px Archivo Black | surface + üstte 8px bant | normal · seçili (2px accent kenar) · yükleniyor (bant %20 opaklık) |
| Chip | 22px | 0 8px | `--radius` | 11px/500 mono, .12em büyük harf | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 60px | 0 24px | 0 | 13px Jost büyük harf | bg + altta 12px bant | aktif: 8px altın alt çizgi |
| Tablo satırı | 40px | 0 12px | 0 | 15px Jost / sayı mono | dokuma zebra + ilk sütunda 3px altın şerit | hover `--surface-2` · seçili şerit %100 opak |
| Modal | — | 24px | `--radius-lg` | başlık 26px Archivo Black | surface + 2px accent kenar + üstte bant | açılış 300ms · Esc kapatır · odak tuzağı |
| Toast | 38px | 0 12px | `--radius` | 14px Jost | surface-2 + sol 8px bant | 4000ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn → danger | yalnız çubuk (8px şerit, 4px boşluk); çizgi yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` (bant desenine değmesin diye 3px).
- Dokunma hedefi: 44px buton; 22px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 16px, 2px çizgi, keskin köşe; yalnız geometrik damga dili (ok, kare, baklava) |
| Fotoğraf | yok; zorunluysa 2px accent çerçeve, %70 doygunluk |
| İllüstrasyon | CSS ile çizilmiş 24×24 damga; hazır ikon seti veya emoji yasak |
| Doku | 8px dokuma şeritleri (accent %10 + line); grain .02 |
| Logo alanı | Archivo Black 16px büyük harf + solunda 8×24px altın blok; çevresinde 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8/4 şerit bölünmesi, hero zemininde dikey dokuma, 40px Archivo Black | `shots/01-landing.png` |
| Dashboard | düşük | 4 kart (üst bantlı) + çubuk grafik | `shots/02-dashboard.png` |
| Form | düşük | 40px alanlar, sol şerit, tek kolon | — |
| Liste / tablo | orta | 40px dokuma zebra, ilk sütunda altın şerit | — |
| Boş durum | orta | boş bant + tek damga + tek CTA | — |
| Onboarding | yüksek | 3 adım: koleksiyon → desen → ilk ürün | — |
| Pricing | orta | 3 plan kartı üst bantlı, fiyat mono | — |
| Giriş / ödeme | çok düşük | dar kart, 40px alanlar, bant yalnız üstte | — |
| Modal | orta | 2px altın çerçeve, üstte bant, 24px damga | — |
| Bildirim / toast | orta | sol 8px bant, tek satır, 4000ms | — |
| Hata | düşük | `--danger` sol şerit + damga; desen susturulur | — |
| Profil / ayar | orta | tercih listesi 40px satır, dokuma zebra | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 500ms | `cubic-bezier(.7,.15,.3,1)` | `opacity` + `translateY(22px)`, öğe başına 55ms stagger |
| Scroll reveal | 580ms | `cubic-bezier(.7,.15,.3,1)` | `top 84%` tetiği, 16px, `once: true` |
| Basma | 130ms | `linear` | `translateX(2px)` (atkı kayması) |
| Hover | 210ms | `cubic-bezier(.7,.15,.3,1)` | zemin %88, `translateX(2px)`, görsel ölçek `1.022` |
| Pin / scrub | kapalı | — | — (dokuma düzlemi sabitlenmez) |
| Bant deseni | 0ms | — | desen statik; animasyonlu desen yasak |

- Ölçülebilir imza: `enter 0.5s / cb(.7,.15,.3,1) / 22px / 0.055` · `scroll top 84% / 0.58s / 16px / once:true` · `hover 210ms / 1.022` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; bant ve damga statik kalır.
- Bu stile yasak hareket: yay/bounce, parallax, sürekli kayan desen, blur geçişi.

## Koyu mod

Varsayılan zemin zaten koyudur; `data-theme="dark"` bloğu gece tezgâhı için daha derin bir zemin verir.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#17120f` | `#0a0705` |
| `--bg-2` | `#1e1713` | `#0e0a07` |
| `--surface` | `#241b16` | `#14100c` |
| `--surface-2` | `#2d221b` | `#1c1711` |
| `--ink` | `#f3e7d3` | `#fbf2e2` |
| `--ink-soft` | `#c0ae93` | `#cbbba1` |
| `--accent` | `#d99a1f` | `#f2b64a` |
| `--accent-ink` | `#1c1206` | `#1d1204` |

- Ölçülen kontrast (koyu): `ink / bg` = **18.08:1** · `ink-soft / bg` = **10.68:1** · `accent-ink / accent` = **10.14:1** · `ink-faint / bg` = **6.04:1** (ΔL açık→koyu **-0.045**; altın `#f2b64a`a açılır).
- Koyu modda değişen başka ne var: hairline .16 → .18; bant opaklığı .42 → .34 (koyuda desen daha baskın görünür); durum renkleri açılır (`--danger #f2825f`, `--ok #85d492`, `--warn #f0cc63`).
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Dokuma ritmi 8px; her beşinci bant 24px desen bloğu. Bant genişliği hiçbir bileşende değişmez.
- Desen yalnız ayrılmış bantlarda (nav altı, kart üstü, ayırıcı, hero zemini); gövde metninin arkasında yasak.
- Tek vurgu altın; desen katmanı %10–42 opaklık, bilgi taşımaz.
- Display Archivo Black, büyük harf, 20px altına inmez.
- Radius en fazla 2px; gölge hiçbir yüzeyde yok.
- Ekran başına en fazla 2 farklı damga motifi.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Desenli zemini gövde metninin arkasına koymak.
- Hazır ikon seti, emoji veya "etnik" stok illüstrasyon taklidi.
- Gradient, yumuşak gölge, cam yüzey, blur.
- Üçüncü bir doygun renk eklemek (altın + nötr zemin; durum renkleri hariç).
- El yazısı/script font; italik; 700+ gövde ağırlığı.
- Motifi rastgele serpiştirmek — her bant kendi tekrarına sahip olmalı.
- Uydurma kültürel sembol adı; eksik içerik `{{pattern}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **4.75:1** (dekoratif dipnot); etkileşimli metin `--ink` 15.21:1 ve `--ink-soft` 8.60:1.
- Desen katmanı bilgi taşımaz; durum her zaman metinle de yazılır (`Hata`, `Onay`).
- Hareket: tek seferlik giriş + 210ms hover; `prefers-reduced-motion` hepsini 0.01ms'e indirir, statik desen kalır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: koyu zeminde altın halka 7.55:1; bant üstündeki öğelerde `outline-offset: 3px` (bant çizgisiyle karışmasın).

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
| Ekran "etnik desen kaplaması" gibi duruyor | desen gövde arkasına yayılmış | deseni bantlara hapset, opaklığı %10–42'de tut |
| Bant ritmi bozuk görünüyor | 8px/24px oranı bozulmuş | tek gradient formülü kullan, genişliği sabitle |
| Kart "yüzüyor" | gölge veya 8px radius eklenmiş | gölgeyi sil, radius'u 0–2px'e indir |
| Altın her yerde | accent üçüncü işi üstlenmiş | accent'i bant + birincil eylemle sınırla |
| Tipografi desenle yarışıyor | display 20px altına inmiş veya 700 gövde | display 20px taban, gövde 400 |
| Koyu modda desen patlıyor | bant opaklığı koyuda artırılmış | koyuda .34'e düşür |

## Komşu stiller

- **Uyumlu:** `nordic-folk` — aynı "süs bantta yaşar" disiplini; halk deseni 66'dan, dokuma ritmi 71'den alınır.
- **Uyumlu:** `bohemian` — sıcak zemin ve zanaat tonu ortak; ancak desen 71'de bantlı kalır.
- **Uyumlu:** `maximalism` — renk bolluğu isteniyorsa garnitür olarak 17 kullanılır, baskın stil 71 kalır.
- **Yasak:** `japanese-ma` — 67'nin boşluk ve tek çizgi disiplini bu dokuma ritmiyle çelişir.
- **Yasak:** `swiss-design` — 02'nin nötr ızgara + kırmızı tek vurgusu desen katmanını dışlar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.metmuseum.org/toah/hd/kent/hd_kent.htm | kente şerit mantığı ve renk blokları |
| https://africa.si.edu/exhibits/adinkra/ | adinkra damga geometrisi ve tekrar oranı |
| https://www.cooperhewitt.org/tag/african-textiles/ | bant genişliği ritmi, tekrar oranı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | desen katmanı ile metin ayrımı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: West African Pattern (styles/71-west-african-pattern/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="west-african-pattern"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black, büyük harf) başlıkta, --font-body (Jost) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 0px/2px; gölge YOK; katman ayrımı 1px --line + dokuma bandı.
Bant: 8px şerit, her beşinci bant 24px altın blok; yalnız nav altı, kart üstü, ayırıcı ve hero zemininde.
Bileşen: "Bileşen reçeteleri" birebir; buton 44px, input 40px sol şeritli, tablo satırı 40px dokuma zebra.
Hareket: enter 0.5s cubic-bezier(.7,.15,.3,1) 22px / stagger 0.055; scroll top 84% 0.58s 16px once:true;
         hover 210ms scale 1.022 + translateX(2px); pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (desen gövde arkasında, hazır ikon, gölge).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (8px bant, 24px blok, damga, 40px Archivo Black).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Desen hiçbir yerde gövde metninin arkasında değil.
- [ ] 390px genişlikte taşma yok; bant genişliği korunmuş.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="west-african-pattern"] {
  --bg: #17120f; --bg-2: #1e1713;
  --surface: #241b16; --surface-2: #2d221b;
  --ink: #f3e7d3; --ink-soft: #c0ae93; --ink-faint: #8d7f68;
  --accent: #d99a1f; --accent-ink: #1c1206;
  --line: rgba(243,231,211,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0.02;
  --danger: #e2694f; --danger-ink: #220a04; --ok: #6fbf7a; --warn: #e0b84a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="west-african-pattern"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
