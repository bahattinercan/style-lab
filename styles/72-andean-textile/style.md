# 72 · Andean Textile

> **Bir cümlede:** 4px adımlı basamak motifinin çözgü şeritleriyle birleştiği ve yalnız birincil yüzeyin 3px ofsetle kabardığı dokuma arayüzü.

| | |
|---|---|
| **Hissiyat** | yüksek, dokunur, simetrik, sıcak-soğuk dengeli |
| **En iyi** | zanaat/tekstil markası, kültür arşivi, ürün koleksiyonu vitrini, sergi kataloğu |
| **Kaçın** | sürekli veri paneli, klinik form, oyun arayüzü — simetri ve süs katmanı taramayı yavaşlatır |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (gövde 15.12:1, accent üstü 8.06:1; faint 3.38:1 yalnız dekoratif) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="andean-textile"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Andean Textile, And dokumasının (Paracas, Nazca, modern pallay) ekran karşılığıdır: **4px adımlı basamak motifi**, 8px aralıklı **çözgü şeritleri** ve **aynalı simetri**. Kurucu kararları üç tanedir. Birincisi **adım birimi**: basamak motifi daima 4px yüksekliğinde adımlarla çizilir; eğri, döndürme veya yuvarlatma yok. İkincisi **tek kabaran yüzey**: yalnız birincil kart ve birincil buton 3px ofset gölge (`--shadow-hard`) taşır — dokumanın iki katı kalınlığı gibi. Üçüncüsü **aynalı düzen**: bölümler iki eşit yarım + ortada şerit; ekran başına yalnız bir bölüm asimetriye çıkar.

Kazandığı şey: **ağırlık ve ritim** — basamak motifinin tekrarı, ürün vitrinine müze kataloğu ciddiyeti verir. Feda ettiği şey: **hafiflik** — gölge tek yüzeyde, radius 4/12px, bölüm ritmi 64px; yoğun tablo ekranlarında simetri kararı yer israf eder.

### Ne değildir
- **West African Pattern (71) değildir:** 71 koyu zemin + altın **şerit dokuma** ve 8px/24px bant ritmi kullanır; 72 **açık kil zemin + karmin** ve **basamak** motifi; kart 12px radius (71'de 2px), birincil yüzeyde ofset gölge (71'de hiç gölge yok).
- **Nordic Folk (66) değildir:** 66 bitkisel kıvrım ve madder kırmızısı taşır; 72'de kıvrım yok, motif **dik açılı basamak** ve accent **karmin/magenta**.
- **Andalusian Azulejo (69) değildir:** 69 harç ızgarası + kobalt çini + Poiret One ile **döşeme**; 72 basamak şeridi + Fraunces ile **dokuma**.
- **Bohemian (30) değildir:** Bohemian'da organik radius ve serbest doku var; 72'de tüm köşeler 4/12px ve basamak motifi ölçülü.
- **"Krem zemin + kırmızı accent" jeneriği değildir:** accent karmine (`#8d2148`) ve tüm derinlik **ofset gölgeden** gelir; yumuşak gölge hiç kullanılmaz.

### Nereden gelir
And dokuması (Peru–Bolivya) dört bin yıllık bir tekniktir: çözgü yüzlü dokuma, pamuk/alpaqa ipliği ve doğal boyar madde (koşineal → karmin). Motif dili **pallay** denilen basamaklı geometridir; her desen bir topluluğun imzasıdır. Dijitalde 2020'lerde kültür arşivleri ve zanaat markalarıyla geri döndü; CSS `repeating-linear-gradient` ile basamak motifi ölçeklenebilir biçimde kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **4px adım biriminin ve aynalı simetrinin bozulmaması**.

### 3 saniyede tanıma testi
1. Bölüm başlıklarında ya da ayırıcılarda 4px adımlarla inen-çıkan bir basamak bandı var.
2. Kartların alt kenarında 4px'lik basamak şeridi, üstünde 8px çözgü çizgileri görünüyor.
3. Yalnız bir kart "kabarmış" duruyor: 3px sağ-alt ofset gölge, blur yok.
4. Düzen aynalı: iki eşit yarım + ortada dar şerit.
5. Accent tek: karmin/magenta; gerisi kil beyazı, kil beji ve sıcak koyu metin.

## Görsel imza
1. **Basamak bandı:** 8px genişlikte iki diş (4px accent + 4px boşluk), 4px yükseklik; ayırıcıda 6px, kart altında 4px.
2. **Çözgü şeritleri:** 8px aralıklı 1px çizgiler, %4–6 ink karışımı; yalnız zemin ve üst kenar bandında.
3. **Tek ofset gölge:** `--shadow-hard: 3px 3px 0 rgba(26,22,32,.14)`; sadece birincil kart ve birincil butonda; basınca 0'a iner.
4. **Aynalı simetri:** 2 eşit yarım + ortada 16–24px şerit; ekran başına 1 bölüm 7/5 asimetrik.
5. **Fraunces display:** 38px, 500 ağırlık, `0.01em` tracking; başlıkta italik yok.
6. **Tabular sayaç:** fiyat/aded Courier Prime 700, tabular; birim (`EUR`, `adet`) her zaman yazılı.
7. **Hover dili:** 240ms'de zemin %90 accent karışımına döner, ölçek `1.014`; gölge büyümez, sadece 2px'e iner (basınç hissi).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f1ece2` | sayfa zemini (kil beyazı) | kart zemini |
| `--surface` | `#fffdf8` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f7f2e8` | çip, ikincil buton, zebra | birincil eylem |
| `--ink` | `#1a1620` | başlık, gövde, sayı | desen katmanı |
| `--ink-soft` | `#4e4657` | etiket, açıklama, eksen | başlık |
| `--ink-faint` | `#857c8f` | dekoratif: çözgü ipucu, dipnot | etkileşimli metin |
| `--accent` | `#8d2148` | basamak, birincil buton, odak halkası, ofset gölge çizgisi | geniş zemin dolgusu |
| `--accent-ink` | `#fdf6f7` | accent üstü metin | gövde metni |
| `--line` | `rgba(26,22,32,.14)` | kart kenarı, ayırıcı, çözgü çizgisi | metin rengi |
| `--danger` / `--ok` / `--warn` | `#96231d` / `#1d6142` / `#7a5310` | hata / onay / uyarı | dekorasyon |

- Ölçülen kontrast (açık): `ink / bg` = **15.12:1** · `ink-soft / bg` = **7.63:1** · `accent-ink / accent` = **8.06:1** · `ink-faint / bg` = **3.38:1** (yalnız dekoratif).
- Tek vurgu kuralı: karmin ekran başına üç işi geçmez — basamak motifi, birincil eylem, odak.
- Yasak kombinasyon: accent'i büyük zemin dolgusu yapmak (karmin zemin üzerinde metin okunmaz); ikinci sıcak renk (turuncu/terracotta) eklemek.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces (`--font-display`) | 38px (mobil 26px) | 500 | 1.12 | `--tracking` 0.01em |
| H2 | Fraunces | 26px | 500 | 1.26 | 0.01em |
| H3 | Fraunces | 19px | 500 | 1.32 | 0.01em |
| Sayaç / fiyat | Courier Prime (`--font-mono`) | 32px | 700 | 1.1 | 0 |
| Gövde | Nunito (`--font-body`) | 16px | 400 | 1.62 | 0 |
| Küçük / açıklama | Nunito | 14px | 400 | 1.5 | 0 |
| Etiket / mono | Courier Prime | 11px | 700 | 1.3 | 0.14em (büyük harf) |

- Ölçek oranı **1.45** (11 → 16 → 26 → 38); kullanılan basamak sayısı 5: 11/14/16/26/38.
- Ölçü: `h1 { font-size: clamp(26px, 3.4vw, 38px) }`.
- Gövde metni maksimum satır uzunluğu: **64 ch**.
- Ağırlık kuralı: Fraunces 500, Nunito 400/600, Courier Prime 700. Fraunces 900 yasak (basamak motifiyle yarışır).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1220px üstü), 8 (768–1219), 4 (390–767) |
| Gutter | 16px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1220px: aynalı 2×6 + orta şerit; 768px: 2×4 yarım; 390px: tek kolon, simetri bantla korunur |

- Asimetri kuralı: ekran başına **1** bölüm 7/5; diğer tüm bölümler aynalı 6/6.
- Bölüm ritmi: art arda en fazla **2** aynalı bölüm; üçüncü blok ya tam genişlik basamak bandı ya alıntı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, çözgü şeritleri |
| Kart | `--surface` | yok | panel, tablo, liste |
| Birincil kart | `--surface` | `--shadow-hard` (3px ofset) | vitrin kartı, KPI |
| Yüzen katman | `--surface` | `0 2px 0 var(--line)` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; birincil kartta ek olarak 4px basamak alt bandı.
- Derinlik nereden gelir: **ofset gölgeden** (3px, blur 0) — yumuşak gölge yok; derinlik dokumanın kalınlığı gibi okunur.
- Radius: `--radius` 4px (buton, input, çip), `--radius-lg` 12px (kart, modal); 12px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 22px | `--radius` | 14px/600 Nunito, .06em | accent + accent-ink + `--shadow-hard` | hover gölge 2px (240ms) · active translate(3px,3px) gölge yok · focus 2px halka · disabled %45 gölge yok · loading 3 basamak 960ms steps(3) |
| Buton (ikincil) | 46px | 0 22px | `--radius` | 13px/700 Courier Prime | surface + `--line`, gölge yok | hover `--surface-2` |
| Input | 42px | 0 12px | `--radius` | 15px Nunito | surface + `--line` | focus alt kenar 2px accent + 2px halka · error alt kenar danger · disabled %45 |
| Kart | — | 20px | `--radius-lg` | başlık 26px Fraunces | surface + üst çözgü + alt basamak | normal · öne çıkan (ofset gölge) · tükenmiş (%60, basamak gri) |
| Chip | 24px | 0 10px | `--radius` | 11px/700 Courier Prime, .1em | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 64px | 0 24px | 0 | 14px Nunito | surface + altta 8px basamak bandı | aktif: 3px accent alt çizgi |
| Tablo satırı | 44px | 0 12px | 0 | 15px Nunito / sayı Courier Prime | alt 1px `--line` (grup sonu) | hover `--surface-2` · seçili ilk sütunda 2px accent alt çizgi |
| Modal | — | 24px | `--radius-lg` | başlık 26px Fraunces | surface + `0 2px 0 var(--line)` | açılış 420ms · Esc kapatır · odak tuzağı |
| Toast | 40px | 0 14px | `--radius` | 14px Nunito | surface + sol 4px basamak şerit | 5000ms · 2 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn → danger | en çok 4 seri · basamaklı (step) alan, 2px çizgi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; input'ta ek olarak alt kenarda 2px accent.
- Dokunma hedefi: 46px buton ve 44px tablo satırı ≥ 44px; 24px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 18px, 1.5px çizgi, basamaklı (çapraz kesimli) köşe; yuvarlak ikon yasak |
| Fotoğraf | yok; zorunluysa 3px ofset çerçeve, %75 doygunluk, en çok 6 kolon |
| İllüstrasyon | CSS basamak deseni (4px adım); figüratif illüstrasyon yok |
| Doku | ince çözgü çizgileri (1px / 8px), grain .03 |
| Logo alanı | Fraunces 17px + solunda 3 basamaklı 12×12 işaret; 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | aynalı 2×6 vitrin + basamak bantlı ayırıcı | `shots/01-landing.png` |
| Dashboard | düşük | 2×2 aynalı KPI + basamaklı alan grafik | `shots/02-dashboard.png` |
| Form | düşük | 42px alanlar, tek kolon, çözgü zemin | — |
| Liste / tablo | orta | 44px satır, grup sonu çizgisi, basamak işareti | — |
| Boş durum | orta | boş basamak bandı + tek CTA | — |
| Onboarding | yüksek | 3 adım: koleksiyon → desen → vitrin | — |
| Pricing | orta | 3 plan, orta plan ofset gölgeli (tek kabaran) | — |
| Giriş / ödeme | çok düşük | dar kart, basamak yalnız üstte | — |
| Modal | orta | üstte basamak bandı, altta accent kural | — |
| Bildirim / toast | orta | sol 4px basamaklı durum şeridi | — |
| Hata | düşük | `--danger` alt kenar + basamak susturulmuş | — |
| Profil / ayar | orta | 44px satır, aynalı iki kolon | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 720ms | `cubic-bezier(.5,0,.5,1)` | `opacity` + `translateY(16px)`, blok başına 75ms stagger |
| Scroll reveal | 660ms | `cubic-bezier(.5,0,.5,1)` | `top 80%` tetiği, 28px, `once: false` (bölüm geri gelince dokuma tazelenir) |
| Basma | 240ms | `linear` | `translate(3px,3px)` + ofset gölge 0 |
| Hover | 240ms | `cubic-bezier(.5,0,.5,1)` | zemin %90, gölge 2px'e iner, görsel ölçek `1.014` |
| Pin / scrub | açık | `scrub 1.15` | vitrin bölümü `+95%` mesafede sabitlenir, basamak bandı yavaş kayar |
| Basamak bandı | 0ms | — | desen statik; animasyonlu desen yasak |

- Ölçülebilir imza: `enter 0.72s / cb(.5,0,.5,1) / 16px / 0.075` · `scroll top 80% / 0.66s / 28px / once:false` · `pin açık scrub 1.15 / +95%` · `hover 240ms / 1.014`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, basamak bandı ve ofset gölge statik kalır.
- Bu stile yasak hareket: bounce/yay, dönen hareket, sürekli döngü, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f1ece2` | `#171319` |
| `--bg-2` | `#e7e0d2` | `#1c1820` |
| `--surface` | `#fffdf8` | `#211c26` |
| `--surface-2` | `#f7f2e8` | `#2a2430` |
| `--ink` | `#1a1620` | `#efe8f2` |
| `--ink-soft` | `#4e4657` | `#b6abbf` |
| `--accent` | `#8d2148` | `#e06a92` |
| `--accent-ink` | `#fdf6f7` | `#24101a` |

- Ölçülen kontrast (koyu): `ink / bg` = **15.30:1** · `ink-soft / bg` = **8.37:1** · `accent-ink / accent` = **5.71:1** · `ink-faint / bg` = **4.31:1**.
- Koyu modda değişen başka ne var: `--shadow-hard` siyaha kayar (`3px 3px 0 rgba(0,0,0,.55)`), çünkü kil tonlu ofset koyu zeminde görünmez; accent açık karmine döner; çözgü çizgileri %4 yerine %6 ink karışımı.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Basamak motifi 4px adım birimiyle; dik açı, eğri/döndürme yok.
- Çözgü şeritleri 8px aralık, %4–6 ink karışımı; yalnız zemin ve üst kenar bandı.
- Aynalı simetri: 2 eşit yarım + orta şerit; ekran başına 1 bölüm 7/5.
- Ofset gölge yalnız birincil kart ve birincil butonda; blur asla.
- Sayaç/fiyat Courier Prime 700 + tabular, birim yazılı.
- Kart padding 20px, bölüm ritmi 64px (mobil 40px), radius 4/12px.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Yumuşak/blur'lu gölge veya `drop-shadow`.
- Üçüncü süs rengi (accent + kil nötr; durum renkleri hariç).
- Dönen, eğik veya bounce eden animasyon.
- Fraunces 900 / italik başlık.
- Tam kanamalı fotoğraf, gradient, metalik parlaklık.
- Basamak motifini rastgele döndürmek veya adım yüksekliğini değiştirmek.
- Uydurma dokuma/topluluk adı; eksik içerik `{{motif}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.38:1** (yalnız çözgü ipucu ve dipnot); etkileşimli metin `--ink` 15.12:1, `--ink-soft` 7.63:1.
- Basamak motifi dekoratiftir; seçili/aktif durum daima metin veya 2px accent çizgiyle de bildirilir.
- Hareket: tek seferlik giriş + 240ms hover; `prefers-reduced-motion` pin/scrub'ı kapatır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: kil zeminde 2px karmin halka 8.06:1; ofset gölgeli kartta halka `offset: 4px` (gölgeye değmesin).

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
| Ekran "krem + kırmızı şablon" gibi duruyor | basamak motifi kullanılmamış | en az iki yerde basamak bandı kur (ayırıcı + kart altı) |
| Her kart kabarık görünüyor | ofset gölge birden fazla yüzeye verilmiş | gölgeyi yalnız birincil kart/butona indir |
| Motif "dalgalı" duruyor | radius veya transform ile yumuşatılmış | dik açı, radius yalnız kapsayıcıda |
| Simetri bozuluyor | bölümler farklı kolon sayısıyla kurulmuş | 6/6 sabit, tek bölüm 7/5 |
| Sayı hizası kayıyor | tabular-nums yok | Courier Prime + tabular, birim yazılı |
| Koyu modda gölge görünmüyor | açık tonlu ofset gölge | `rgba(0,0,0,.55)` ofset kullan |

## Komşu stiller

- **Uyumlu:** `west-african-pattern` — aynı "süs bantta yaşar" disiplini; dokuma 71'den, basamak 72'den alınır.
- **Uyumlu:** `organic-bio` — doğal boyar madde tonları ve sıcak kil zemin ortak.
- **Uyumlu:** `nordic-folk` — kültürel süs katmanı aynı sınırda tutulur; radyo/zanaat vitrini bu ikiliyle kurulur.
- **Yasak:** `swiss-design` — 02'nin nötr ızgarası ve tek kırmızısı simetri kararını dışlar.
- **Yasak:** `liquid-glass` — cam/blur fizik dokuma ofset gölgesiyle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://museum.gwu.edu/andean-textiles | çözgü şerit oranları ve basamak motifi |
| https://www.metmuseum.org/toah/hd/prcs/hd_prcs.htm | basamaklı desen ve iki renkli kontrast |
| https://artsandculture.google.com/entity/andean-textiles/m09x1y6 | şerit genişliği çeşitliliği, aynalı simetri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | basamak çizgisi ve ofset gölge eşiği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Andean Textile (styles/72-andean-textile/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="andean-textile"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 500) başlıkta, --font-body (Nunito) gövdede,
           --font-mono (Courier Prime 700) sayaç/fiyat ve etiketlerde.
Yüzey: --bg / --surface / --surface-2; radius 4px/12px; yumuşak gölge YOK;
        yalnız birincil kart ve butonda --shadow-hard (3px ofset).
Motif: 4px adımlı basamak bandı + 8px çözgü şeritleri; dik açı, döndürme yok.
Düzen: aynalı 2×6 + orta şerit; ekran başına 1 bölüm 7/5; kart padding 20px, bölüm ritmi 64px.
Hareket: enter 0.72s cubic-bezier(.5,0,.5,1) 16px / stagger 0.075; scroll top 80% 0.66s 28px once:false;
         pin açık scrub 1.15 / +95%; hover 240ms scale 1.014. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (çoklu ofset gölge, dönen hareket, üçüncü süs rengi).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (basamak bandı, çözgü şeritleri, tek ofset gölge, aynalı simetri).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Ofset gölge yalnız bir yüzeyde; blur yok.
- [ ] 390px genişlikte taşma yok, simetri korunmuş.
- [ ] `prefers-reduced-motion` açıkken pin/scrub duruyor.

## Token

```css
[data-style="andean-textile"] {
  --bg: #f1ece2; --bg-2: #e7e0d2;
  --surface: #fffdf8; --surface-2: #f7f2e8;
  --ink: #1a1620; --ink-soft: #4e4657; --ink-faint: #857c8f;
  --accent: #8d2148; --accent-ink: #fdf6f7;
  --line: rgba(26,22,32,.14);
  --radius: 4px; --radius-lg: 12px;
  --shadow: none; --shadow-hard: 3px 3px 0 rgba(26,22,32,.14);
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0.03;
  --danger: #96231d; --danger-ink: #ffffff; --ok: #1d6142; --warn: #7a5310;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="andean-textile"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
