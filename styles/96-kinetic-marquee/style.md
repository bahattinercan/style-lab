# 96 · Kinetic Marquee

> **Bir cümlede:** Tipografiyi sabit bir poster gibi değil, hızla akan bir bant gibi kullanan; eğimi ve ritmi scroll hızından alan hareket stili.

| | |
|---|---|
| **Hissiyat** | akan, ritmik, gergin, "yayında" |
| **En iyi** | etkinlik/lansman landing'i, ajans vitrini, medya/müzik ürünü, ürün lansman duyurusu |
| **Kaçın** | yoğun veri paneli, mutabakat/finans tablosu, uzun okuma (rapor, sözleşme) — akan bant dikkati böler |
| **Zorluk** | orta (hareketi durdurulabilir ve erişilebilir tutmak) · **Erişilebilirlik** | orta risk (sonsuz akan bant — durdurma zorunlu; gövde 16.06:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `kit/tokens.css` → `[data-style="kinetic-marquee"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Kinetic Marquee, tipografiyi **hız** ile kuran stildir: 32px yüksekliğinde **marquee bandı** (28s / 44s iki hız sınıfı), scroll hızına bağlı en fazla **6° skew**, harf başına 40ms gecikmeli **harf dalgası** ve 620ms'lik **ağırlık geçişi**. Kurucu kararları üç tanedir. Birincisi **hareket eksen**: büyüklük puntodan değil, katmanın akmasından gelir; display 72px'i geçmez. İkincisi **tek yön**: her şey yatay akar; rotasyon ve diagonal yoktur (o, 37'nin imzasıdır). Üçüncüsü **durdurulabilirlik**: her bant hover'da ve reduced-motion'da durur — hareket dekor değil, kontrol edilebilir bir katmandır.

Kazandığı şey: sayfanın "canlı" okunması — tek bir kaynak dosyası (CSS keyframes) ile ekran hareket eder. Feda ettiği şey: **sakinlik ve okuma süresi**; 58 ch ölçü ve tek bant kuralı bu bedeli sınırlar.

### Ne değildir
- **Kinetic Type (37) değildir** — dört ölçülebilir fark: (1) **font**: 37 Anton kullanır, burada Chakra Petch 600; (2) **zemin/accent**: 37 siyah `#0e0e10` + asit `#e8ff47`, burada sıcak kırık beyaz `#f4f1ea` + soğuk indigo `#2d3ad0`; (3) **pin/scrub**: 37'de pin yok, burada pin açık (`scrub 0.25`, `+240%`); (4) **ölçek-kontrast**: 37'de display 96px ve tracking **-0.03em**, burada display 56–72px ve tracking **+0.02em** — büyüme puntodan değil hareketten gelir.
- **Acid Graphics (15) değildir:** 15 parlak/neon ve gradyanla doldurur; burada `--blur: 0`, gradyan yok, tek soğuk accent.
- **Editorial Design (03) değildir:** 03 geniş satır aralığı ve serif ile okutur; burada display sıkı (1.04) ve hareketli.
- **Swiss Design (02) değildir:** 02 tamamen statiktir ve ızgaraya itaat eder; burada ızgara korunur ama bir katman sürekli akar.
- **"Animasyonlu landing şablonu" değildir:** kimlik bandın **hız sınıfı** ve skew sınırıdır; rastgele fade-in yığını değil.

### Nereden gelir
Marquee, 20. yüzyıl baskı ve borsa bantlarından (ticker) gazete binası cephelerine, oradan TV alt bantlarına geçen bir okuma biçimidir; dijitalde CSS `translateX` döngüsüyle yeniden doğdu. 2010'lar sonrası "velocity UI" akımı (scroll hızına bağlı skew/scale) bunu etkileşimli hâle getirdi. Klişeye dönüşmemesi için korunacak detay: **tek yön + en fazla iki bant + durdurulabilirlik**.

### 3 saniyede tanıma testi
1. Sayfada 32px yüksekliğinde, kendi kendine akan bir yazı bandı var.
2. Hiçbir öğe döndürülmemiş/diagonal değil; her şey yatay akıyor.
3. Display Chakra Petch ve harfler birbirine değmiyor (pozitif tracking).
4. Kaydırırken bloklar hafifçe eğiliyor (≤6°) ve durunca düzeliyor.
5. Bant üzerine gelince hareket duruyor.

## Görsel imza
1. **Marquee bandı:** 32px yükseklik, 12px büyük harf display, `0.28em` tracking, 28s (birincil) / 44s (ikincil, ters yön) döngü.
2. **Durdurma:** bantta `animation-play-state: paused` hover'da; `prefers-reduced-motion` açıkken hiç çalışmaz.
3. **Hıza bağlı skew:** yalnız `hero-visual` katmanında, en fazla `-6deg`; sayfa dururken 0°.
4. **Harf dalgası:** harf başına 40ms gecikme, en çok 24 harf, toplam ≤ 1s.
5. **Ağırlık geçişi:** 400 → 600, 620ms; aynı anda yalnız tek öğede.
6. **İz çizgisi:** kartın üst kenarında 2px accent çizgi; hover'da 24px'e uzar (hız ipucu).
7. **Hover dili:** 180ms `translateX(2px)` + ölçek `1.006`; gölge yok, parlama yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4f1ea` | sayfa zemini (sıcak kırık beyaz) | kart zemini |
| `--surface` | `#fdfbf6` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f2eee4` | çip, ikincil buton, tablo şeridi | birincil eylem |
| `--ink` | `#14161a` | başlık, gövde, bant metni | dekoratif çizgi |
| `--ink-soft` | `#4a4d57` | etiket, ikincil metin, ikincil bant | başlık |
| `--ink-faint` | `#82858f` | dekoratif: bant ayırıcısı, dipnot | etkileşimli metin |
| `--accent` | `#2d3ad0` | bant metni, birincil buton, iz çizgisi, odak | dekoratif zemin dolgusu |
| `--accent-ink` | `#f7f7ff` | accent üstü metin | gövde metni |
| `--line` | `rgba(20,22,26,.14)` | kart kenarı, bant ayırıcı, tablo çizgisi | metin rengi |
| `--danger` / `--ok` / `--warn` | `#a3241c` / `#2a9f5d` / `#bf7d00` | hata / onay / uyarı | bant rengi |

- Ölçülen kontrast (açık): `ink / bg` = **16.06:1** · `ink-soft / bg` = **7.48:1** · `accent-ink / accent` = **7.50:1** · `ink-faint / bg` = **3.27:1** (yalnız dekoratif).
- Tek vurgu kuralı: soğuk indigo ekran başına üç işi geçmez — bant, birincil eylem, odak.
- Yasak kombinasyon: accent zemin üstüne kırık beyaz metin (%92 üstü opaklıkta kontrast düşer); ikinci doygun renk (asit sarı, neon yeşil) eklemek.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch (`--font-display`) | 56px (mobil 32px) | 600 | 1.04 | `--tracking` 0.02em |
| H2 | Chakra Petch | 24px | 600 | 1.18 | 0.02em |
| H3 | Chakra Petch | 18px | 600 | 1.3 | 0.02em |
| Bant metni | Chakra Petch | 12px | 600 | 32px sabit | 0.28em |
| Gövde | Space Grotesk (`--font-body`) | 15px | 400 | 1.6 | 0 |
| Küçük / açıklama | Space Grotesk | 13px | 400 | 1.5 | 0 |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 10px | 500 | 1.3 | 0.18em (büyük harf) |

- Ölçek oranı **1.5** (10 → 15 → 24 → 56); kullanılan basamak sayısı 5: 10/13/15/24/56.
- Ölçü: `h1 { font-size: clamp(32px, 4.6vw, 56px) }` — 72px yalnız bant/hero özel ölçüsünde.
- Gövde metni maksimum satır uzunluğu: **58 ch**.
- Ağırlık kuralı: Chakra Petch 600, Space Grotesk 400/500. Negatif tracking ve italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1280px üstü), 8 (768–1279), 4 (390–767) |
| Gutter | 28px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280px: tam genişlik bant + 7/5 içerik; 768px: bant + 6/6; 390px: bant + tek kolon, skew kapalı |

- Asimetri kuralı: ekran başına **2** tam genişlik bant (biri hero altı, biri kapanış); içerik 7/5 bölünür.
- Bölüm ritmi: 56px (mobil 36px); art arda en fazla **2** kart satırı; üçüncü blok bant olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, yatay kılavuz çizgileri |
| Kart | `--surface` | yok | panel, liste, tablo |
| Yüzen katman | `--surface` + 2px accent kenar | `none` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; birincil kartta üst kenar 2px `--accent` (hover'da 24px uzunluğunda iz).
- Derinlik nereden gelir: **hiçbir yerden** — hareket ve çizgi; gölge yok.
- Radius: `--radius` 3px (buton, input, çip), `--radius-lg` 8px (kart, modal); 8px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 22px | `--radius` | 13px/600 Chakra Petch, .08em, büyük harf | accent + accent-ink | hover `translateX(2px)` (180ms) · active 4px · focus 2px halka · disabled %45 (bant durur) · loading `▮▮▮` 600ms steps(3) |
| Buton (ikincil) | 44px | 0 22px | `--radius` | 13px Space Grotesk | şeffaf + 1px `--ink` | hover zemin `--surface-2` |
| Input | 42px | 0 12px | `--radius` | 14px Space Grotesk | surface + `--line` | focus 2px halka + alt 2px accent · error `--danger` · disabled %45 |
| Kart | — | 20px | `--radius-lg` | başlık 24px Chakra Petch | surface + üst 2px accent iz | hover iz 24px'e uzar · aktif (2px accent kenar) |
| Chip | 22px | 0 8px | `--radius` | 11px/500 mono, .1em | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 64px (+32px bant) | 0 24px | 0 | 13px Space Grotesk | bg + alt çizgi | aktif: 2px accent alt çizgi |
| Tablo satırı | 36px | 0 10px | 0 | 14px Space Grotesk / mono sayı | alt 1px `--line` | hover satır 2px sağa kayar · seçili sol 2px accent |
| Modal | — | 24px | `--radius-lg` | başlık 32px Chakra Petch | surface + 2px accent kenar | açılış 620ms (sağdan akar) · Esc kapatır |
| Toast | 38px | 0 12px | `--radius` | 13px Space Grotesk | surface-2 + sol 2px accent | metin 8s'de bir geçer, hover'da durur · 3200ms |
| Grafik paleti | — | — | — | eksen 10px mono | accent → ink-soft → warn → danger | en çok 4 seri · 1.5px çizgi, kayan pencere |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; bant içindeki bağlantılarda `offset: 2px`.
- Dokunma hedefi: 44px buton, 36px satır mobilde 44px; bant metni etkileşimli değildir (dokunma hedefi gerektirmez).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 16px, 2px çizgi, keskin köşe; yalnız ok ve oynat/duraklat |
| Fotoğraf | yok; zorunluysa 8px radius + 1px çerçeve |
| İllüstrasyon | yok — hareket ve tipografi görselin yerini alır |
| Doku | bant ayırıcı nokta dizisi + 32px aralıklı yatay kılavuz çizgisi |
| Logo alanı | Chakra Petch 16px + 6px accent kare; 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | hero altında 28s bant, 7/5 içerik, skew'li görsel katman | `shots/01-landing.png` |
| Dashboard | orta | 2 satır kart + üstte ince bant (44s) | `shots/02-dashboard.png` |
| Form | düşük | 42px alanlar, tek kolon, bant yalnız üstte | — |
| Liste / tablo | orta | 36px satır, hover'da sağa kayma | — |
| Boş durum | orta | durmuş bant + tek CTA ("başlat") | — |
| Onboarding | yüksek | 3 adım, her adımda bant hızı artar (44s → 28s) | — |
| Pricing | orta | 3 kart, iz çizgisi hover'da uzar | — |
| Giriş / ödeme | çok düşük | dar kart, bant yok (odak dağılmasın) | — |
| Modal | orta | sağdan akan giriş, 2px accent kenar | — |
| Bildirim / toast | orta | tek geçişli metin, hover'da durur | — |
| Hata | düşük | bant durur, `--danger` sol şerit, statik mesaj | — |
| Profil / ayar | orta | 36px satır + "hareketi azalt" anahtarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — hız şeritleri — eğik kart, skew çizgiler, döngü etiketi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 620ms | `cubic-bezier(.12,.9,.2,1)` | `opacity` + yatay akış, `offsetY: 0px`, öğe başına 90ms stagger |
| Scroll reveal | 500ms | `cubic-bezier(.12,.9,.2,1)` | `top 70%` tetiği, 0px dikey, `once: true` |
| Basma | 180ms | `linear` | `translateX(2px)` |
| Hover | 180ms | `cubic-bezier(.12,.9,.2,1)` | `translateX(2px)`, görsel ölçek `1.006` |
| Pin / scrub | açık | `scrub 0.25` | bant bölümü `+240%` mesafede sabitlenir, bant hızı scrub'a bağlanır |
| Marquee | 28s / 44s | `linear` | iki hız sınıfı; hover ve reduced-motion'da durur |
| Skew | 180ms | `cubic-bezier(.12,.9,.2,1)` | en fazla `-6deg`, scroll hızına bağlı |
| Harf dalgası | 40ms / harf | `linear` | en çok 24 harf, toplam ≤ 1s |

- Ölçülebilir imza: `enter 0.62s / cb(.12,.9,.2,1) / 0px / 0.09` · `scroll top 70% / 0.5s / 0px / once:true` · `pin açık scrub 0.25 / +240%` · `hover 180ms / 1.006`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, bantlar durur, skew 0°, harf dalgası kapalı.
- Bu stile yasak hareket: rotasyon, diagonal şerit, sürekli jitter, blur geçişi, 3'ten fazla bant.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4f1ea` | `#0d0f18` |
| `--bg-2` | `#eae5da` | `#121522` |
| `--surface` | `#fdfbf6` | `#161a2a` |
| `--surface-2` | `#f2eee4` | `#1e2338` |
| `--ink` | `#14161a` | `#eef0f6` |
| `--ink-soft` | `#4a4d57` | `#a9afc4` |
| `--accent` | `#2d3ad0` | `#7f88ff` |
| `--accent-ink` | `#f7f7ff` | `#0a0b18` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.78:1** · `ink-soft / bg` = **8.75:1** · `accent-ink / accent` = **6.40:1** · `ink-faint / bg` = **4.87:1**.
- Koyu modda değişen başka ne var: bant metni accent yerine `--ink` (koyu zeminde indigo titreşir); bant ayırıcı `--line` .14 → .16; kılavuz çizgisi %5 → %7.
- `filter: invert()` yasak; palet elle yazılır.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **5.77:1** açık / **5.66:1** koyu · `--warn / bg` = **6.05:1** / **5.60:1** · `--ok / surface` = 5.11:1 / 5.06:1 (warn) · devre dışı buton metni = **7.35:1** / **7.83:1** · ghost buton kenarı = **3.86:1** / **5.62:1** (eşik 3:1).

## Zorunlu kurallar
- Marquee bandı 32px, en fazla 2 bant, hız sınıfları 28s/44s; her bant hover ve reduced-motion'da durur.
- Skew yalnız scroll hızına bağlı, en fazla 6°; sayfa dururken 0°.
- Harf dalgası harf başına 40ms, en çok 24 harf.
- Display tracking pozitif (0.02em), display 72px'i geçmez.
- Ağırlık geçişi 620ms ve aynı anda tek öğe.
- Rotasyon ve diagonal şerit yok (37-kinetic-type imzası).
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Rotasyonlu kart, diagonal accent şerit, eğik bölüm başlığı.
- Asit/neon palet; ikinci doygun renk.
- 90px üstü poster tipografisi ve negatif tracking.
- Durdurulamayan sonsuz animasyon; ekran başına 3'ten fazla hareketli katman.
- Gradient metin, parlama, `blur` geçişi.
- Otomatik oynayan video benzeri döngü (bant dışında).
- Uydurma marka/etkinlik adı; eksik içerik `{{headline}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.27:1** (bant ayırıcısı ve dipnot); etkileşimli metin `--ink` 16.06:1, `--ink-soft` 7.48:1.
- Hareket: WCAG 2.2 "Pause, Stop, Hide" — her bant durdurulabilir; `prefers-reduced-motion` tüm hareketi kapatır ve içerik statik poster gibi okunur.
- Skew yalnız dekoratif katmanda; metin hiçbir koşulda eğilmez (okunurluk).
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: kırık beyaz zeminde 2px indigo halka 7.50:1; bant üstündeki bağlantıda `offset: 2px`.

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
| Sayfa "animasyon şablonu" gibi duruyor | 3'ten fazla hareketli katman | bant sayısını 2'ye, diğer hareketi 1'e indir |
| 37-kinetic-type ile karışıyor | diagonal şerit / rotasyon eklenmiş | rotasyonu kaldır, hareketi velocity'ye taşı |
| Okunmuyor | skew metne uygulanmış | skew yalnız görsel katmanda, metin 0° |
| Göz yoruyor | bant hızı 20s altına inmiş | 28s/44s sınıflarında kal |
| Erişilebilirlik ihlali | bant durdurulamıyor | hover + durdurma düğmesi + reduced-motion |
| Kartlar hareketsiz duruyor | iz çizgisi hover'da uzamıyor | 2px → 24px geçişini 340ms'de kur |

## Komşu stiller

- **Uyumlu:** `kinetic-type` — aynı tipografik aile; 37 statik poster, 96 hareketli bant. Birlikte kullanılırsa 37 baskın, 96 yalnız hero bandında garnitür.
- **Uyumlu:** `editorial-design` — gövde metni ve ölçü disiplini; uzun içerik 03'ten alınır.
- **Uyumlu:** `acid-graphics` — enerji isteniyorsa garnitür olarak 15 (yalnız afiş bölümünde).
- **Yasak:** `swiss-design` — 02'nin tam statik ızgara disiplini bant fikrini dışlar.
- **Yasak:** `minimalism` — 01'in "süs yok" kuralı akan bantla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations | marquee döngüsü, iteration ve paused durumu |
| https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew | hıza bağlı eğim sınırı ve eksen seçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | sonsuz akan bandın durdurulabilir olması |
| https://fonts.google.com/specimen/Chakra+Petch | teknik display ve 600 ağırlık davranışı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Kinetic Marquee (styles/96-kinetic-marquee/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="kinetic-marquee"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch 600, pozitif tracking) başlık ve bantta,
           --font-body (Space Grotesk) gövdede, --font-mono (JetBrains Mono) etiket/sayıda.
Yüzey: --bg / --surface / --surface-2; radius 3px/8px; gölge YOK; ayrım 1px --line + kart üstü 2px accent iz.
Hareket: 32px marquee bandı (28s/44s, hover+reduced-motion'da durur), scroll hızına bağlı skew <= 6deg
         (yalnız görsel katman), harf dalgası 40ms/harf <= 24 harf.
Imza: enter 0.62s cubic-bezier(.12,.9,.2,1) 0px / stagger 0.09; scroll top 70% 0.5s 0px once:true;
      pin acik scrub 0.25 / +240%; hover 180ms scale 1.006.
Yasak: rotasyon/diagonal serit (o 37-kinetic-type'in imzasi), asit palet, 90px ustu display, durdurulamayan bant.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (marquee bandı, skew, harf dalgası, iz çizgisi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Her bant durdurulabiliyor; metin hiçbir yerde eğik değil.
- [ ] 390px genişlikte taşma yok, skew kapalı.
- [ ] `prefers-reduced-motion` açıkken hiçbir bant akmıyor.

## Token

```css
[data-style="kinetic-marquee"] {
  --bg: #f4f1ea; --bg-2: #eae5da;
  --surface: #fdfbf6; --surface-2: #f2eee4;
  --ink: #14161a; --ink-soft: #4a4d57; --ink-faint: #82858f;
  --accent: #2d3ad0; --accent-ink: #f7f7ff;
  --line: rgba(20,22,26,.14);
  --radius: 3px; --radius-lg: 8px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
  --danger: #a3241c; --danger-ink: #ffffff; --ok: #2a9f5d; --warn: #bf7d00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="kinetic-marquee"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
