# 75 · Aegean Island

> **Bir cümlede:** Kireç beyazı badana yüzeylerin 22px kemer köşelerle açıldığı, tek Ege mavisiyle kuru ve serin kalan arayüz.

| | |
|---|---|
| **Hissiyat** | serin, ferah, badanalı, güneşte solmuş |
| **En iyi** | konaklama/otel vitrini, ada turizmi, gurme gıda markası, sakin SaaS pazarlama sayfası |
| **Kaçın** | yoğun veri paneli, güvenlik/kripto, gece modu ağırlıklı ürün — beyaz badana parlama üretir |
| **Zorluk** | düşük · **Erişilebilirlik** | iyi (gövde 17.14:1, accent üstü 5.44:1; faint 3.36:1 yalnız dekoratif) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="aegean-island"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Aegean Island, Kiklad badana mimarisinin ekran karşılığıdır: **kireç beyazı** zeminler, **22px kemer köşeler**, **1px dashed badana kenarı** ve tek **Ege mavisi** vurgu. Kurucu kararları üç tanedir. Birincisi **kemer formu**: kart ve modal köşeleri 22px, ama gölge yok — kemer, gölge yerine ışığı taşır. İkincisi **badana kenarı**: ikincil yüzeylerde 1px kesikli çizgi ("elle badanalanmış kenar"), birincil yüzeyde düz çizgi. Üçüncüsü **serin sadelik**: accent dışında doygun renk yok; dekorasyon yalnız 2px dalga çizgisi ve 14px kemer işaretiyle sınırlı.

Kazandığı şey: **ferahlık ve hız** — yüksek kontrastlı koyu mavi metin + beyaz zemin, 3 saniyede okunur; kültürel referans güçlü ama süs yükü sıfıra yakın. Feda ettiği şey: **gece kullanımı** — koyu modda badana etkisi kaybolur, stil koyu modda "soğuk cam" gibi davranır.

### Ne değildir
- **Minimalism (01) değildir:** 01 sıcak nötr (#fafaf9) + Inter + 8/12px radius + mavi accent ile **nötr** kalır; 75 **kireç beyazı** + 14/22px kemer + kesikli badana kenarı ve dalga çizgisi taşır.
- **Japanese Ma (67) değildir:** 67 tek ince yatay çizgi ve sıfır radius ile boşluğu ölçer; 75'te kemer eğrisi ve dashed kenar imzanın kendisidir.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası + kobalt **döşeme** kurar (2px kenar, gap 2px); 75 **badana duvarı** kurar (1px kenar, 22px kemer, döşeme yok).
- **Frutiger Aero (25) değildir:** 25 parlak cam/parlama ve gradient kullanır; 75'te parlama yok, gölge neredeyse sıfır.
- **"Beyaz + mavi kurumsal" jeneriği değildir:** kimlik kemer formu + badana kesik kenarı + dalga çizgisidir; accent rengi tek başına yeterli sayılmaz.

### Nereden gelir
Kiklad adaları (Santorini, Mykonos, Sifnos) badana geleneği: kireç taşı duvarlar her yıl badanayla yenilenir, kenarlar elle çekilir (bu yüzden hafif düzensizdir), kapı-pencere çerçeveleri tek maviye boyanır. Dijitalde 2010'lar sonrası "slow travel" ve ada markalarıyla yaygınlaştı; nedeni ölçülebilir — iki değer (beyaz + mavi) ve iki form (düz + kemer) ile kimlik kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **22px kemer oranının ve dashed kenarın simetrik kullanımı**.

### 3 saniyede tanıma testi
1. Kartların köşeleri belirgin yuvarlak (22px) ama gölge neredeyse yok.
2. İkincil buton ve durum kartlarında 1px kesikli (dashed) kenar görünüyor.
3. Tek doygun renk Ege mavisi; metin koyu arduvaz, zemin kireç beyazı.
4. Hero kartının üstünde 2px noktalı dalga çizgisi var.
5. Nav'daki aktif öğe 14px yarım daire kemerle işaretli.

## Görsel imza
1. **Kemer köşe:** `--radius-lg: 22px`, `--radius: 14px`; kart/modal dört köşesi 22px — gölge yerine yuvarlaklık taşır.
2. **Badana kenarı:** ikincil yüzeylerde `border-style: dashed; border-width: 1px`; birincil yüzeyde solid.
3. **Dalga çizgisi:** 2px yükseklik, 16px aralıklı nokta dizisi (`radial-gradient`), `%55` opaklık; yalnız hero kartı ve modal başlığı üstünde.
4. **Nokta badana dokusu:** 28px aralıklı 1px nokta, %9 mavi; yalnız hero ve alt bant zemininde.
5. **Jost display 500:** 40px, `0.02em`; gövde Inter 16px/1.64.
6. **Tek mavi:** accent yalnız eylem, kemer işareti, dalga çizgisi, odak halkası ve tablo ilk sütun kuralında.
7. **Hover dili:** 280ms'de zemin %92'ye döner, görsel ölçek `1.020`, alt kenarda 2px badana çizgisi belirir; gölge büyümez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fbfaf6` | sayfa zemini (kireç beyazı) | kart zemini |
| `--surface` | `#ffffff` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f6f6f1` | çip, ikincil buton, tablo şeridi | birincil eylem |
| `--ink` | `#12181c` | başlık, gövde, tablo metni | dekoratif çizgi |
| `--ink-soft` | `#44545c` | etiket, açıklama, eksen | başlık |
| `--ink-faint` | `#7d8b92` | dekoratif: nokta doku, dipnot | etkileşimli metin |
| `--accent` | `#0e6f92` | birincil buton, kemer işareti, dalga çizgisi, odak halkası | geniş zemin dolgusu |
| `--accent-ink` | `#f7fbfd` | accent üstü metin | gövde metni |
| `--line` | `rgba(18,24,28,.13)` | kart kenarı, dashed badana, ayırıcı | metin rengi |
| `--danger` / `--ok` / `--warn` | `#a33224` / `#1b6146` / `#7a5510` | hata / onay / uyarı | dekorasyon |

- Ölçülen kontrast (açık): `ink / bg` = **17.14:1** · `ink-soft / bg` = **7.54:1** · `accent-ink / accent` = **5.44:1** · `ink-faint / bg` = **3.36:1** (yalnız dekoratif).
- Tek vurgu kuralı: Ege mavisi ekran başına dört işi geçmez — eylem, kemer, dalga, odak.
- Yasak kombinasyon: accent'i kart zemin dolgusu yapmak; ikinci bir doygun renk (terracotta, zeytin yeşili) eklemek.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Jost (`--font-display`) | 40px (mobil 27px) | 500 | 1.12 | `--tracking` 0.02em |
| H2 | Jost | 27px | 500 | 1.26 | 0.02em |
| H3 | Jost | 20px | 500 | 1.3 | 0.02em |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.64 | 0 |
| Küçük / açıklama | Inter | 14px | 400 | 1.55 | 0 |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.12em (büyük harf) |

- Ölçek oranı **1.5** (11 → 16 → 27 → 40); kullanılan basamak sayısı 5: 11/14/16/27/40.
- Ölçü: `h1 { font-size: clamp(27px, 3.5vw, 40px) }`.
- Gövde metni maksimum satır uzunluğu: **66 ch**.
- Ağırlık kuralı: Jost 500, Inter 400/500. 600+ yasak (geometrik display'de kalınlık badana hafifliğini bozar); italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1200px üstü), 8 (768–1199), 4 (390–767) |
| Gutter | 22px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200px: 5+5 kemer + 1+1 geçit; 768px: 6/6; 390px: tek kolon, kemer 22px korunur |

- Asimetri kuralı: ekran başına **1** bölüm 7/5; diğer bölümler kemer/geçit ikilisiyle simetrik.
- Bölüm ritmi: 72px (mobil 44px); art arda en fazla **2** kemerli kart satırı; üçüncü blok tam genişlik dalga ayırıcı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, nokta badana dokusu |
| Kart | `--surface` | `0 1px 2px rgba(18,24,28,.07)` | panel, liste, tablo |
| Yüzen katman | `--surface` | `0 2px 8px rgba(18,24,28,.10)` | modal, açılır menü |

- Kenarlık formülü: birincil yüzeyde `1px solid var(--line)`, ikincil yüzeyde `1px dashed var(--line)`.
- Derinlik nereden gelir: **zemin tonu + kemer formu**; gölge yalnız 2px (yüzen katmanda 8px) — sert ışık, yumuşak gölge yok.
- Radius: `--radius` 14px (buton, input), `--radius-lg` 22px (kart, modal); 22px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 24px | `--radius` | 14px/500 Jost, .06em | accent + accent-ink, gölge yok | hover %92 + 2px alt çizgi (280ms) · active 1px aşağı · focus 2px halka offset 3px · disabled %45 · loading 3 nokta 840ms |
| Buton (ikincil) | 46px | 0 24px | `--radius` | 14px Inter | surface + 1px **dashed** `--line` | hover solid kenar |
| Input | 46px | 0 14px | `--radius` | 16px Inter | surface + 1px `--line` | focus 2px halka offset 2px · error `--danger` + sol 3px · disabled %45 |
| Kart | — | 24px | `--radius-lg` | başlık 27px Jos 500 | surface + 1px kenar + 2px gölge | normal · durum kartı (dashed kenar) · seçili (1px accent kenar) |
| Chip | 24px | 0 10px | 12px | 11px/500 mono, .1em | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 68px | 0 24px | 0 | 14px Inter | surface + alt çizgi | aktif: 14px kemer işareti |
| Tablo satırı | 46px | 0 12px | 0 | 15px Inter / mono sayı | alt 1px `--line` (yer yer dashed) | hover `--surface-2` · seçili ilk sütunda 3px accent |
| Modal | — | 28px | `--radius-lg` | başlık 27px Jost | surface + 8px gölge + dalga çizgisi | açılış 440ms · Esc kapatır · odak tuzağı |
| Toast | 42px | 0 16px | `--radius` | 14px Inter | surface + 1px dashed kenar + sol 2px accent | 4200ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn → danger | en çok 4 seri · 2px çizgi, %10 dolgu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; input'ta `offset: 2px`.
- Dokunma hedefi: 46px buton ve 46px tablo satırı ≥ 44px; 24px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 18px, 1.5px çizgi, yuvarlak uç; 2px yumuşak köşe |
| Fotoğraf | yok; zorunluysa 22px üst radius (kemer) + açık ton, %85 doygunluk |
| İllüstrasyon | CSS kemer açıklık (yarım daire), dashed badana kenarı, 2px dalga çizgisi |
| Doku | 28px nokta badana (%9 mavi), grain 0 — doku çizgiden gelir |
| Logo alanı | Jost 17px, .04em + solunda 14×18 kemer işareti; 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 5+5 kemer kartı + 1+1 geçit, hero'da dalga çizgisi | `shots/01-landing.png` |
| Dashboard | düşük | 2 kemerli KPI + 2 dashed durum kartı | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, kemerli form paneli | — |
| Liste / tablo | orta | 46px satır, ilk sütunda 3px mavi kural | — |
| Boş durum | orta | dashed boş kart + kemer işareti + tek CTA | — |
| Onboarding | yüksek | 3 adım: tarih → oda → onay; her adım kemerli kart | — |
| Pricing | orta | 3 kemerli plan, orta plan accent kenar | — |
| Giriş / ödeme | çok düşük | dar kemerli kart, 46px alanlar | — |
| Modal | orta | kemer köşe + üstte dalga çizgisi | — |
| Bildirim / toast | orta | dashed kenar, sol 2px mavi, 4200ms | — |
| Hata | düşük | `--danger` sol şerit + koyu metin; mavi susar | — |
| Profil / ayar | orta | 46px satır, iki kemerli panel | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 380ms | `cubic-bezier(.25,.75,.5,1)` | `opacity` + `translateY(8px)`, blok başına 80ms stagger |
| Scroll reveal | 440ms | `cubic-bezier(.25,.75,.5,1)` | `top 87%` tetiği, 12px, `once: true` |
| Basma | 280ms | `linear` | `translateY(1px)` |
| Hover | 280ms | `cubic-bezier(.25,.75,.5,1)` | zemin %92, alt kenarda 2px badana çizgisi, görsel ölçek `1.020` |
| Pin / scrub | kapalı | — | — (badana yüzeyi sabitlenmez) |
| Dalga çizgisi | 0ms | — | statik; animasyonlu dalga yasak |

- Ölçülebilir imza: `enter 0.38s / cb(.25,.75,.5,1) / 8px / 0.08` · `scroll top 87% / 0.44s / 12px / once:true` · `hover 280ms / 1.020` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; kemer, dashed kenar ve dalga statik kalır.
- Bu stile yasak hareket: bounce/yay, parallax, sürekli döngü, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fbfaf6` | `#0c1418` |
| `--bg-2` | `#f2f1ea` | `#101a1f` |
| `--surface` | `#ffffff` | `#131f25` |
| `--surface-2` | `#f6f6f1` | `#1a282f` |
| `--ink` | `#12181c` | `#e9f2f4` |
| `--ink-soft` | `#44545c` | `#a6b6bc` |
| `--accent` | `#0e6f92` | `#4fb8d4` |
| `--accent-ink` | `#f7fbfd` | `#04181f` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.36:1** · `ink-soft / bg` = **8.89:1** · `accent-ink / accent` = **7.91:1** · `ink-faint / bg` = **4.76:1**.
- Koyu modda değişen başka ne var: nokta badana dokusu %9 → %6 (koyuda gürültü olur); accent açık deniz mavisine döner; dashed kenar opaklığı `.16`'ya çıkar; gölge 2px → opak siyah 2px.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Kart ve modal köşeleri 22px (kemer); buton/input 14px. 22px üstü yasak.
- İkincil yüzeylerde 1px dashed badana kenarı; birincil yüzeyde solid.
- Dalga çizgisi 2px, yalnız hero kartı ve modal başlığı üstünde.
- Gölge neredeyse yok: kartta `0 1px 2px`, yüzen katmanda en fazla 8px blur.
- Tek doygun renk Ege mavisi; ikinci doygun renk yok.
- Fiyat/sayaç mono tabular; birim yazılı.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Gradient, parlaklık/glow, cam yüzey, `backdrop-filter`.
- 22px üstü radius; serif display.
- Sert siyah gölge veya kalın kontur (durum şeridi 3px'i geçmez).
- Tam kanamalı doygun fotoğraf.
- Üçten fazla kemer formunu aynı ekranda tekrarlamak (form, işaret olmaktan çıkar).
- Animasyonlu dalga veya sürekli hareket.
- Uydurma ada/otel adı; eksik içerik `{{room}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.36:1** (nokta doku ve dipnot); etkileşimli metin `--ink` 17.14:1, `--ink-soft` 7.54:1.
- Kemer ve dalga dekoratiftir; seçili/aktif durum daima metin, 3px accent şerit veya accent kenar ile de bildirilir.
- Hareket: tek seferlik 380ms giriş + 280ms hover; `prefers-reduced-motion` hepsini 0.01ms'e indirir.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: beyaz zeminde 2px mavi halka 5.44:1; dashed kenarlı kartta `offset: 3px` (kesikli çizgiyle karışmasın).

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
| Ekran "beyaz + mavi kurumsal" gibi duruyor | kemer ve dashed kenar kullanılmamış | 22px kemer + en az bir dashed yüzey kur |
| Yüzeyler "plastik" görünüyor | gölge güçlendirilmiş veya gradient eklenmiş | gölgeyi 2px'e indir, gradient'i sil |
| Kemer her yerde → süs gibi | üçten fazla kemer formu tekrar etmiş | kemer sayısını ekran başına 3'te tut |
| Kontrast zayıf | `--ink-faint` etkileşimli metinde | etkileşimde `--ink`/`--ink-soft` kullan |
| Koyu modda "ada" hissi kayboluyor | dokulu badana koyuda yoğun | dokuyu %6'ya düşür, accent'i açık deniz mavisi yap |
| Buton dokunma hedefi küçük | 46px yerine 36px kullanılmış | 46px'e sabitle (mobilde 48px) |

## Komşu stiller

- **Uyumlu:** `minimalism` — boşluk ve tek vurgu disiplini ortak; ana stil 75, nötr içerik bölümleri 01'den.
- **Uyumlu:** `japandi` — doğal sade zemin ve düşük süs yükü; ancak 75'te kemer formu imza.
- **Uyumlu:** `scandinavian-dark` — koyu modda serin nötr dil; gece görünümü bu ikiliyle kurulur.
- **Yasak:** `maximalism` — katman ve renk bolluğu badana sadeliğini bozar.
- **Yasak:** `neo-brutalism` — kalın kontur ve sert gölge kemer formunu ezer.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Cyclades | badana mimarisi, kemer açıklık ve mavi-beyaz oranı |
| https://www.britannica.com/place/Aegean-Sea | bölgesel bağlam, ışık ve renk referansı |
| https://fonts.google.com/specimen/Jost | geometrik display ve ağırlık sınırı |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | 46px buton ve tablo satırı hedefi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Aegean Island (styles/75-aegean-island/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="aegean-island"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Jost 500) başlıkta, --font-body (Inter) gövdede,
           --font-mono (JetBrains Mono) etiket ve sayılarda.
Yüzey: kireç beyazı --bg / --surface / --surface-2; radius 14px/22px (kemer);
        gölge neredeyse yok (kart 0 1px 2px, yüzen katman 8px).
Kenar: birincil yüzey 1px solid, ikincil yüzey 1px dashed (badana); dalga çizgisi 2px yalnız hero/modal.
Bileşen: "Bileşen reçeteleri" birebir; buton 46px, tablo satırı 46px, kart padding 24px.
Hareket: enter 0.38s cubic-bezier(.25,.75,.5,1) 8px / stagger 0.08; scroll top 87% 0.44s 12px once:true;
         hover 280ms scale 1.020; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gradient, 22px üstü radius, ikinci doygun renk).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (kemer köşe, dashed kenar, dalga çizgisi, nokta doku).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Kemer formu en fazla 3 kez tekrar ediyor; gölge 2px'i geçmiyor.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="aegean-island"] {
  --bg: #fbfaf6; --bg-2: #f2f1ea;
  --surface: #ffffff; --surface-2: #f6f6f1;
  --ink: #12181c; --ink-soft: #44545c; --ink-faint: #7d8b92;
  --accent: #0e6f92; --accent-ink: #f7fbfd;
  --line: rgba(18,24,28,.13);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 1px 2px rgba(18,24,28,.07); --shadow-hard: none;
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
  --danger: #a33224; --danger-ink: #ffffff; --ok: #1b6146; --warn: #7a5510;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="aegean-island"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
