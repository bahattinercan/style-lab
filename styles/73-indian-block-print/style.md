# 73 · Indian Block Print

> **Bir cümlede:** Her yüzeyin 1–4px kayma iziyle basıldığı, damganın tek renk ve keskin kaldığı blok baskı arayüzü.

| | |
|---|---|
| **Hissiyat** | zanaatkâr, ölçülü, tekrarlı, sıcak-soğuk karşıt |
| **En iyi** | tekstil/zanaat markası, ürün koleksiyonu vitrini, kültür yayını, abonelik kutusu |
| **Kaçın** | yoğun veri paneli, klinik form, yüksek hızlı oyun arayüzü — ofset izleri taramayı yavaşlatır |
| **Zorluk** | düşük-orta · **Erişilebilirlik** | iyi (gövde 15.76:1, accent üstü 10.50:1; faint 3.51:1 yalnız dekoratif) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="indian-block-print"]` |
| **Kompozisyon** | `type` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Indian Block Print, Bagru/Sanganer blok baskısının ekran karşılığıdır: el oyması ahşap bloğun kâğıda bıraktığı **keskin kenar**, **1–4px kayma izi** ve **tek renk damga tekrarı**. Kurucu kararları üç tanedir. Birincisi **kayma izi**: her kart 1px, birincil yüzey 4px ofset "mürekkep izi" taşır; blur yok, çünkü baskıda mürekkep keskin kenar bırakır. İkincisi **tek renk damga**: çivit (`--accent`) dışında damga rengi yok; damga 24×24px, 2px çizgi. Üçüncüsü **blok tekrarı**: içerik 3'lü blok hâlinde (4/4/4) basılır, aralık 20px — blok baskı ritmi budur.

Kazandığı şey: **dokunulur zanaat hissi** ve düşük görsel maliyet (damga CSS ile kurulur). Feda ettiği şey: **hafiflik ve hız** — ofset izleri küçük metinlerin yanında gürültü üretir, bu yüzden gövde ölçüsü 60 ch ile sınırlıdır.

### Ne değildir
- **Andean Textile (72) değildir:** 72 basamak motifi + aynalı simetri + karmin kullanır, gölge tek yüzeyde 3px ofset; 73'te **her** kart 1px iz taşır, motif **damga/çiçek** ve accent **çivit**.
- **Nordic Folk (66) değildir:** 66 bitkisel kıvrım bandı ve madder kırmızısı; 73'te kıvrım yok, damga **tek renk çivit** ve kart köşesinde.
- **Editorial Design (03) değildir:** 03 kolon ritmi ve drop cap ile metin kurar; 73'te metin 60 ch'de kalır, blok tekrarı ve damga başroldedir.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası ve kobalt **döşeme** kurar (bitişik blok, gap 2px); 73 **baskı** kurar (ayrı kartlar, ofset iz).
- **"Krem zemin + mavi accent" jeneriği değildir:** kimlik ofset iz ve damga tekrarından gelir; accent rengi tek başına yeterli sayılmaz.

### Nereden gelir
Racastan/Gujarat blok baskısı: ahşap blok elle oyulur, boyaya batırılır, kumaşa **tek tek** basılır; kayma (misregistration) teknik bir kusur değil, üretimin imzasıdır. Çivit, madder ve hardal gibi doğal boyar maddeler paleti belirler. Dijitalde 2010'lar sonrası "craft revival" ile döndü; CSS `box-shadow` ile ofset iz kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **iz ofsetinin 1px/4px iki kademede kalması** ve damganın daima tek renk olması.

### 3 saniyede tanıma testi
1. Kartların sağ-alt kenarında 1px'lik ince "mürekkep izi" var; birincil kart/butonda 4px.
2. Kart köşesinde 20×20px tek renk damga (çiçek/geometrik) duruyor.
3. Gövde Poppins, başlık Playfair Display 600; gövdede serif yok.
4. Nav'daki aktif öğe çift çizgi (1px + 3px altında ikinci iz).
5. Kartlar 3'lü blok hâlinde 20px aralıkla basılmış; köşeler 2–6px.

## Görsel imza
1. **Kayma izi:** `--shadow: 1px 1px 0 rgba(22,24,29,.10)` her kartta; `--shadow-hard: 4px 4px 0` yalnız birincil yüzeyde; blur 0.
2. **Blok damga:** 24×24px, 2px çizgi, tek renk accent; kart sağ-alt köşesinde %25–28 opaklıkla; ekran başına en fazla 2 motif.
3. **Çift baskı çizgisi:** aktif nav öğesinde 1px accent + 3px aşağıda ikinci 1px iz.
4. **Blok tekrarı:** kartlar 4/4/4 üçlü; 20px gutter; dördüncü satırda 2px kalın ayırıcı.
5. **Playfair Display 600:** 36px, `0.015em`; alt başlıklar 24/18px aynı ailede, başlık altında 1px accent kural.
6. **Grain .02:** yalnız zemin katmanında; metin üstünde grain yok.
7. **Hover dili:** 130ms'de iz 3px'e iner, zemin %92'ye koyulaşır, ölçek `1.030`; gölge büyümez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f7f1e2` | sayfa zemini (baskı kâğıdı) | kart zemini |
| `--surface` | `#fffcf3` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f6efdd` | çip, ikincil buton, tablo şeridi | birincil eylem |
| `--ink` | `#16181d` | başlık, gövde, tablo metni | damga rengi |
| `--ink-soft` | `#464a55` | etiket, açıklama, eksen | başlık |
| `--ink-faint` | `#7c8089` | dekoratif: damga ikinci katman, dipnot | etkileşimli metin |
| `--accent` | `#26356e` | damga, birincil buton, başlık altı kural, odak halkası | geniş zemin dolgusu |
| `--accent-ink` | `#f7f4e9` | accent üstü metin | gövde metni |
| `--line` | `rgba(22,24,29,.15)` | kart kenarı, ayırıcı, tablo çizgisi | metin rengi |
| `--danger` / `--ok` / `--warn` | `#9b2c1e` / `#1d5c3f` / `#7c5311` | hata / onay / uyarı | damga rengi, dekorasyon |

- Ölçülen kontrast (açık): `ink / bg` = **15.76:1** · `ink-soft / bg` = **7.86:1** · `accent-ink / accent` = **10.50:1** · `ink-faint / bg` = **3.51:1** (yalnız dekoratif).
- Tek vurgu kuralı: çivit ekran başına üç işi geçmez — damga, birincil eylem, odak/kural.
- Yasak kombinasyon: damgayı çok renkli yapmak; accent'i kart zemin dolgusu olarak kullanmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display (`--font-display`) | 36px (mobil 25px) | 600 | 1.16 | `--tracking` 0.015em |
| H2 | Playfair Display | 24px | 600 | 1.28 | 0.015em |
| H3 | Playfair Display | 18px | 600 | 1.32 | 0.015em |
| Gövde | Poppins (`--font-body`) | 15px | 400 | 1.66 | 0 |
| Küçük / açıklama | Poppins | 13px | 400 | 1.55 | 0 |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 10px | 500 | 1.35 | 0.18em (büyük harf) |

- Ölçek oranı **1.4** (10 → 15 → 24 → 36); kullanılan basamak sayısı 5: 10/13/15/24/36 (+18 ara başlık).
- Ölçü: `h1 { font-size: clamp(25px, 3.2vw, 36px) }`.
- Gövde metni maksimum satır uzunluğu: **60 ch** (iz gürültüsünü sınırlamak için dar).
- Ağırlık kuralı: Playfair 600, Poppins 400/500. Playfair 700+ ve italik yasak (baskı blok harfleri dik).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1180px üstü), 8 (768–1179), 4 (390–767) |
| Gutter | 20px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1180px: 4/4/4 üçlü blok; 768px: 2 kolon (6/6); 390px: tek kolon, iz 1px kalır |

- Asimetri kuralı: ekran başına **1** blok 6/6 bölünür; diğer bloklar eşit üçlüdür.
- Bölüm ritmi: art arda en fazla **2** üçlü blok; üçüncü blok ya tam genişlik kural ya alıntı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, damga zemin deseni |
| Kart | `--surface` | `1px 1px 0` iz | panel, liste, tablo |
| Birincil kart | `--surface` | `4px 4px 0` iz | hero kartı, KPI |
| Yüzen katman | `--surface` | `4px 4px 0` iz | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; başlık altında 1px `--accent` kural.
- Derinlik nereden gelir: **ofset izden** (blur 0); yumuşak gölge hiçbir yüzeyde yok.
- Radius: `--radius` 2px (buton, input, çip), `--radius-lg` 6px (kart, modal); 6px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | 0 20px | `--radius` | 13px/500 Poppins, .1em, büyük harf | accent + accent-ink + 4px iz | hover iz 3px (130ms) · active translate(4px,4px) iz yok · focus 2px halka · disabled %45 kesikli · loading 4 kare damga 720ms steps(4) |
| Buton (ikincil) | 42px | 0 20px | `--radius` | 12px/500 mono | surface + `--line` + 1px iz | hover iz 2px |
| Input | 40px | 0 12px | `--radius` | 14px Poppins | surface + `--line` + 1px iz | focus 2px halka, iz kalkar · error 1px danger iz · disabled %45 |
| Kart | — | 18px | `--radius-lg` | başlık 24px Playfair | surface + 1px iz + köşe damga | normal · birincil (4px iz) · tükenmiş (%60, damga soluk) |
| Chip | 22px | 0 8px | `--radius` | 10px/500 mono, .18em | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 56px | 0 20px | 0 | 13px Poppins büyük harf | bg + alt çizgi | aktif: çift baskı çizgisi (1px + 3px offset) |
| Tablo satırı | 40px | 0 10px | 0 | 14px Poppins / mono sayı | alt 1px `--line`, sol 1px accent kural | hover `--surface-2` · 4. satırda 2px kalın ayırıcı |
| Modal | — | 22px | `--radius-lg` | başlık 24px Playfair | surface + 4px iz | açılış 300ms · Esc kapatır · sol üstte damga |
| Toast | 36px | 0 12px | `--radius` | 13px Poppins | surface + 1px iz | 3600ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 10px mono | accent → ink-soft → warn → danger | en çok 4 seri · dolgu %18 + 1.5px çizgi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; iz ile karışmasın diye offset hiç 0 olmaz.
- Dokunma hedefi: 42px buton mobilde 48px; 22px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 16px, 1.5px çizgi, 1px köşe; gravür dilini taklit eder, dolgu yok |
| Fotoğraf | yok; zorunluysa 4px ofset çerçeve + tek renk duotone |
| İllüstrasyon | blok damga (24×24) ve 8 taç yapraklı çiçek rozeti; tek renk |
| Doku | kayma izi + ince baskı grain .02 (yalnız zemin) |
| Logo alanı | Playfair Display 17px + solunda 20×20 çivit damga; 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 4/4/4 blok tekrarı, 4px izli hero kartı, damga zemini | `shots/01-landing.png` |
| Dashboard | düşük | 1 birincil KPI (4px iz) + 3 normal kart (1px iz) | `shots/02-dashboard.png` |
| Form | düşük | 40px alanlar, 1px iz, tek kolon | — |
| Liste / tablo | orta | 40px satır, sol accent kural, 4. satırda kalın ayırıcı | — |
| Boş durum | orta | boş damga + tek CTA, iz korunur | — |
| Onboarding | yüksek | 3 adım: koleksiyon → blok motifi → ilk ürün | — |
| Pricing | orta | 3 plan kartı; orta plan 4px iz ile öne çıkar | — |
| Giriş / ödeme | çok düşük | dar kart, 1px iz, damga yalnız üstte | — |
| Modal | orta | 4px iz, sol üst damga, 22px padding | — |
| Bildirim / toast | orta | 1px izli kutu, damga bloğu, 3600ms | — |
| Hata | düşük | danger renkli 1px iz + damga; metin korunur | — |
| Profil / ayar | orta | 40px satır, sol kural, blok aralığı 20px | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 300ms | `steps(2, end)` | `opacity` + `translateY(12px)`, öğe başına 35ms stagger |
| Scroll reveal | 340ms | `steps(2, end)` | `top 90%` tetiği, 14px, `once: true` |
| Basma | 130ms | `linear` | `translate(4px,4px)` + iz kalkar |
| Hover | 130ms | `linear` | iz 3px'e iner, zemin %92, görsel ölçek `1.030` |
| Pin / scrub | kapalı | — | — (baskı düzlemi sabitlenmez) |
| Damga | 720ms | `steps(4)` | yalnız yükleme göstergesinde 4 kare |

- Ölçülebilir imza: `enter 0.3s / steps(2,end) / 12px / 0.035` · `scroll top 90% / 0.34s / 14px / once:true` · `hover 130ms / 1.030` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; iz ve grain statik kalır.
- Bu stile yasak hareket: yumuşak ease, bounce, sürekli döngü, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f7f1e2` | `#131519` |
| `--bg-2` | `#eee6d2` | `#181b20` |
| `--surface` | `#fffcf3` | `#1c2026` |
| `--surface-2` | `#f6efdd` | `#24282f` |
| `--ink` | `#16181d` | `#eceee6` |
| `--ink-soft` | `#464a55` | `#aeb2b8` |
| `--accent` | `#26356e` | `#7f97e0` |
| `--accent-ink` | `#f7f4e9` | `#0f1424` |

- Ölçülen kontrast (koyu): `ink / bg` = **15.61:1** · `ink-soft / bg` = **8.58:1** · `accent-ink / accent` = **6.46:1** · `ink-faint / bg` = **4.55:1**.
- Koyu modda değişen başka ne var: iz rengi opak siyaha kayar (`1px 1px 0 rgba(0,0,0,.5)`); çivit accent açık indigo'ya döner; damga opaklığı .28 → .34.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Her kart 1px iz, birincil yüzey 4px iz taşır; blur yok.
- Damga 24×24px, 2px çizgi, tek renk; kart başına 1 damga, ekran başına en fazla 2 motif.
- İçerik 4/4/4 üçlü blok hâlinde basılır; gutter 20px, kart padding 18px.
- Başlık Playfair 600, gövde Poppins 400; gövdede serif yok.
- Aktif nav öğesi çift baskı çizgisi (1px + 3px offset) taşır.
- Grain .02 yalnız zemin katmanında.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Blur'lu/yumuşak gölge (`box-shadow` yalnız blur 0 ofset iz).
- Çok renkli damga; ikiden fazla motif karışımı.
- Script/el yazısı font, italik başlık.
- 6px üstü radius, gradient, cam yüzey, neon.
- İzi 4px üstüne çıkarmak (kart gürültüsü).
- Damgayı gövde metninin üstüne bindirmek.
- Uydurma baskı atölyesi/motif adı; eksik içerik `{{motif}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.51:1** (yalnız damga ikinci katmanı ve dipnot); etkileşimli metin `--ink` 15.76:1, `--ink-soft` 7.86:1.
- İz dekoratiftir; seçili/aktif durum daima metin veya accent kural ile de bildirilir.
- Hareket: `steps()` tabanlı kesik geçişler; `prefers-reduced-motion` hepsini 0.01ms'e indirir.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: kâğıt zeminde 2px çivit halka 10.50:1; izli kartta halka `offset: 2px` (iz ile birleşmesin).

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
| Ekran "krem + mavi şablon" gibi duruyor | iz ve damga kullanılmamış | her karta 1px iz, hero kartına 4px iz, bir köşeye damga |
| Gürültülü görünüyor | iz 4px üstüne çıkmış veya birden fazla damga | 1px/4px kademesine dön, damgayı karta indir |
| Baskı hissi kayboluyor | yumuşak gölge eklenmiş | gölgeyi blur 0 ofset ize çevir |
| Tipografi zanaat tonunu bozuyor | gövde serif veya script | gövde Poppins 400, serif yalnız başlıkta |
| Kartlar "döşeme" gibi birleşiyor | gutter 0 veya paylaşılan kenarlık | 20px gutter koru (döşeme stili 69) |
| Koyu modda iz görünmüyor | açık tonlu iz | `rgba(0,0,0,.5)` iz kullan |

## Komşu stiller

- **Uyumlu:** `andean-textile` — aynı "tek kabaran yüzey + keskin geometri" mantığı; dokuma 72, baskı 73.
- **Uyumlu:** `editorial-design` — Playfair/serif yayın dili ortak; uzun metin 03'ten, blok yapı 73'ten alınır.
- **Uyumlu:** `maximalism` — çok motif isteniyorsa garnitür olarak 17 kullanılır, baskın stil 73 kalır.
- **Yasak:** `liquid-glass` — cam/blur fizik, blur'suz mürekkep iziyle çelişir.
- **Yasak:** `cyberpunk` — neon ve çok renk, tek renk damga kuralını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.vam.ac.uk/articles/block-printing | blok damga tekniği ve tekrar aralığı |
| https://www.craftofuse.org/textiles/bagru-block-print | kayma izi ve çivit paleti |
| https://artsandculture.google.com/entity/indian-textiles/m09x1y6 | çiçek rozeti geometrisi, blok tekrarı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px iz ve damga çizgisi eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Indian Block Print (styles/73-indian-block-print/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="indian-block-print"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 600) başlıkta, --font-body (Poppins) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 2px/6px; gölge YALNIZ blur'suz ofset iz
        (kart 1px, birincil yüzey 4px); yumuşak gölge yasak.
Motif: 24×24 blok damga, 2px çizgi, tek renk accent; kart köşesinde %28 opaklık.
Izgara: 4/4/4 üçlü blok, gutter 20px, kart padding 18px, bölüm ritmi 56px.
Hareket: enter 0.3s steps(2,end) 12px / stagger 0.035; scroll top 90% 0.34s 14px once:true;
         hover 130ms scale 1.030; pin yok. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (blur gölge, çok renkli damga, 6px üstü radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (1px/4px iz, damga, çift baskı çizgisi, 4/4/4 blok).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Gölge daima blur 0 ofset iz; yumuşak gölge yok.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="indian-block-print"] {
  --bg: #f7f1e2; --bg-2: #eee6d2;
  --surface: #fffcf3; --surface-2: #f6efdd;
  --ink: #16181d; --ink-soft: #464a55; --ink-faint: #7c8089;
  --accent: #26356e; --accent-ink: #f7f4e9;
  --line: rgba(22,24,29,.15);
  --radius: 2px; --radius-lg: 6px;
  --shadow: 1px 1px 0 rgba(22,24,29,.10); --shadow-hard: 4px 4px 0 rgba(22,24,29,.16);
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.015em; --blur: 0px; --grain: 0.02;
  --danger: #9b2c1e; --danger-ink: #ffffff; --ok: #1d5c3f; --warn: #7c5311;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="indian-block-print"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
