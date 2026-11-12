# 50 · Lab Instrument

> **Bir cümlede:** Her ölçümün birimi, toleransı ve kanal numarasıyla birlikte kadran yayı üzerinde okunduğu, köşe artılarıyla çerçevelenmiş enstrüman yüzeyi.

| | |
|---|---|
| **Hissiyat** | kesin, soğuk, kalibre, "ölçülmüş" |
| **En iyi** | bilimsel ölçüm paneli, laboratuvar enstrümantasyonu, endüstriyel sensör izleme, kalibrasyon arayüzü |
| **Kaçın** | tüketici uygulaması, moda kampanyası, eğlence/oyun — birim ve tolerans yükü ağır kalır |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.68:1) |
| **Aile** | Veri & Gösterge (46–55) · **Token** | `kit/tokens.css` → `[data-style="lab-instrument"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Lab Instrument, ekranı bir **ölçüm cihazı** gibi davranmaya zorlar: her kart bir kanaldır (CH-01…), her değer birim ve toleransla yazılır (`24,81 mV ±0,02`), her panelin köşesinde crosshair işareti ve altında 180°'lik kadran yayı vardır. Kurucu kararları üç tanedir. Birincisi **birim zorunluluğu**: birimsiz sayı ekranda duramaz; birim, değerden küçük ve mono yazılır. İkincisi **fiziksel metafor**: birincil ölçüm kartı `--shadow-hard` ile 2px ofset alır, buton basıldığında gölge kaybolur — düğme gerçekten "basılmış" olur. Üçüncüsü **teknik çizim dili**: çizim 1px, dolgu yok; süsleme yerine cetvel tıkları ve kadran yayı.

Bedeli: bu arayüz sıcak değildir ve öğrenme eğrisi vardır (birim/tolerans okuryazarlığı). Kazancı: bir ölçümün **güvenilirliğini** (tolerans, kalibrasyon tarihi, örnekleme hızı) aynı bakışta göstermesi.

### Ne değildir
- **Telemetry Grid (46) değildir:** 46 açık grid üzerinde 12 tile ve eşik durumu gösterir; 50'de 6 kanal, kadran yayı, tolerans ve kalibrasyon tarihi vardır; radius 4/10 yerine 2/8.
- **Executive KPI (48) değildir:** 48 serif ve 0px radius ile kâğıt raporudur; 50 Michroma (geniş, geometrik) ve crosshair ile enstrümandır — 48'de tolerans yoktur.
- **Cybercore (23) değildir:** 23 neon mint + HUD süsü; 50 kobalt mavi + teknik çizim, sıfır parlama.
- **Conceptual Sketch (32) değildir:** 32 el çizimi ve kâğıt dokusudur; 50 cetvel ve kalem disipliniyle **ölçekli** çizimdir (tıklar 4px, çizgi 1px).

### Nereden gelir
Analog enstrümantasyondan: osiloskop, spektrum analizörü, sıcaklık kontrolörü ön panelleri. Sayısal arayüze taşınan üç alışkanlık bugün de işlevsel: kanal numaralandırma (hangi sensör), birim/tolerans (ne kadar güvenilir), kalibrasyon damgası (ne zaman doğrulandı). Klişeye dönüşmemesi için korunacak detay: **birim ve toleransın asla atlanmaması** ve 2px ofset gölgenin yalnız birincil ölçüm kartında kalması.

### 3 saniyede tanıma testi
1. Kartların sol üst köşesinde 8px crosshair, sağ üstte `CH-01` gibi kanal numarası var.
2. Her değerin yanında birim (`mV`, `°C`, `Hz`) ve altında `±` tolerans yazıyor.
3. Değerlerin altında yarım daire kadran yayı ve 1px eşik tıkları görünüyor.
4. Başlıklar Michroma ile geniş ve büyük harf; gövde Inter, sayılar Share Tech Mono.
5. Nav'da kalibrasyon tarihi (`CAL 2026-02-11`) ve örnekleme hızı yazıyor.

## Görsel imza
- **Kadran yayı:** 180°, 1px yay, 40px yükseklik; iğne 2px accent, eşik tıkları 1px `--warn`/`--danger`; yayın altında birim etiketi 10px mono.
- **Crosshair köşe:** ölçüm kartının sol üst ve sağ alt köşesinde 8px uzunluğunda 1px accent çizgi (artı işareti); yalnız ölçüm kartlarında.
- **2px sert gölge:** yalnız birincil ölçüm kartında ve birincil butonda `--shadow-hard: 2px 2px 0 rgba(14,21,23,.13)`; basınca gölge kaybolur, öğe 2px kayar.
- **Cetvel tıkları:** bölüm ayırıcısı 6px yüksekliğinde, 4px aralıklı 1px dikey çizgiler; hero zemininde 64px aralıklı dikey kurallar.
- **Birim/tolerans çifti:** değer 40px mono tabular + birim 12px mono + `±0,02` 10px; üçü aynı satır grubunda, birim asla kesilmez.
- **Michroma başlık:** yalnız 400 ağırlık, büyük harf, `.02em` tracking; 32px H1.
- **Hover dili:** 190ms'de kart zemini `--surface-2`'e kayar, görsel ölçek `1.018`; gölge büyümez (fizik kuralı).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f5f7f7` | sayfa zemini | kart zemini |
| `--surface` | `#ffffff` | ölçüm kartı, panel, input | sayfa zemini |
| `--surface-2` | `#f2f6f7` | hover, ikincil buton, çip | birincil ölçüm |
| `--ink` | `#0e1517` | başlık, ölçüm değeri, metin | devre dışı |
| `--ink-soft` | `#43565c` | birim, tolerans, eksen, açıklama | ölçüm değeri |
| `--ink-faint` | `#76898f` | yalnız dekoratif: cetvel tıkları, dipnot | etkileşimli metin |
| `--accent` | `#1a5c8a` | iğne, birincil buton, odak halkası, crosshair | durum rengi yerine |
| `--accent-ink` | `#f4f8fa` | accent üstü metin | gövde metni |
| `--line` | `rgba(14,21,23,.14)` | kart kenarı, kadran yayı, ayırıcı | metin rengi |
| `--danger` / `--warn` / `--ok` | `#a1271d` / `#7a4f0a` / `#17604a` | eşik aşımı, dikkat, kalibrasyon OK | dekorasyon, marka rengi |

- Ölçülen kontrast (açık): `ink / bg` = **17.16:1** · `ink-soft / bg` = **7.17:1** · `accent-ink / accent` = **6.68:1** · `ink-faint / bg` = **3.40:1** (yalnız cetvel/dipnot).
- Tek vurgu kuralı: kobalt mavi yalnız iğne + birincil eylem + odak; eşik renkleri ayrı kanaldır ve daima tık işaretiyle birlikte.
- Yasak kombinasyon: accent'i dolgu olarak büyük blokta kullanmak; sıcak renk (turuncu/amber) eklemek — bu stilin sıcaklığı yoktur.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma (`--font-display`) | 32px (mobil 22px) | 400 | 1.16 | `--tracking` 0.02em |
| H2 | Michroma | 21px | 400 | 1.24 | 0.02em |
| H3 | Michroma | 16px | 400 | 1.3 | 0.02em |
| Ölçüm değeri | Share Tech Mono (`--font-mono`) | 40px | 400 | 1.05 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.58 | 0 |
| Küçük / açıklama | Inter | 13px | 400 | 1.5 | 0 |
| Etiket / mono | Share Tech Mono | 10px | 400 | 1.3 | 0.14em (büyük harf) |

- Ölçek oranı **1.4** (10 → 15 → 21 → 32); kullanılan basamak sayısı 5: 10/13/15/21/32 (+40 ölçüm).
- Ölçü: `h1 { font-size: clamp(22px, 3vw, 32px) }`.
- Gövde metni maksimum satır uzunluğu: **66 ch**.
- Ağırlık kuralı: Michroma yalnız 400 (700 yok — geniş harflerde kalınlık okunurluğu bozar); gövde 400/500.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1240px üstü), 8 (768–1239), 4 (390–767) |
| Gutter | 16px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1240px: kadran 7 / kanal listesi 5; 768px: kadran tam, kanallar 2 kolon; 390px: tek kanal kartı, kadran genişlik %100 |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm (7/5); kanal kartları içinde 2:1 bilgi/ölçek oranı korunur.
- Bölüm ritmi: art arda en fazla **2** kanal satırı; üçüncü blok ya kadran ya cetvel ayırıcıdır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, cetvel kuralları |
| Kart | `--surface` | `--shadow` (0 1px 2px) | kanal kartları, panel |
| Ölçüm (birincil) | `--surface` | `--shadow-hard` (2px ofset) | ana kadran / birincil buton |
| Yüzen katman | `--surface` | `0 2px 8px rgba(14,21,23,.12)` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; birincil ölçüm kartında ek olarak 1px `--accent` kenar (kalınlık artmaz).
- Derinlik nereden gelir: **ofset gölgeden** (2px sağ-alt, blur 0) — gölge yumuşak değil, fiziksel panel hissi verir; blur asla kullanılmaz.
- Radius: `--radius` 2px (buton, input, çip), `--radius-lg` 8px (kart, modal); 8px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 0 16px | `--radius` | 12px/400 Michroma, .06em, büyük harf | accent + accent-ink + `--shadow-hard` | hover gölge 1px (190ms) · active `translate(2px,2px)` + gölge yok · focus 2px halka · disabled %45 kesikli · loading 700ms yay |
| Buton (ikincil) | 40px | 0 16px | `--radius` | 12px/400 Share Tech Mono | surface + `--line`, gölge yok | hover `--surface-2` |
| Input | 36px | 0 10px | `--radius` | 14px mono tabular | surface + `--line` | focus 2px accent · error sol 2px `--danger` şerit · disabled %45 |
| Kart (kanal) | — | 16px | `--radius-lg` | CH 10px mono / değer 40px mono / birim 12px | surface + `--line` | normal · eşik aşımı (sol 2px danger) · kalibrasyon bayat (kesikli kenar) |
| Chip | 22px | 0 8px | `--radius` | 10px/400 mono, .12em | surface-2 + `--line` | seçili: accent zemin |
| Nav | 56px | 0 20px | 0 | 12px Inter büyük harf | surface + alt çizgi | sağda `CAL` tarihi + 8px durum noktası |
| Tablo satırı | 36px | 0 8px | 0 | 13px mono, sağa dayalı | grup sonunda alt 1px `--line` | hover `--surface-2` · seçili sol 2px accent |
| Modal | — | 20px | `--radius-lg` | başlık 21px Michroma | surface + `0 2px 8px` gölge | açılış 420ms yay · Esc kapatır · köşe crosshair |
| Toast | 36px | 0 12px | `--radius` | 13px mono | surface + sol 2px durum şerit | 4500ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 10px mono | accent → ink-soft → warn → danger | en çok 4 seri · 2px çizgi + 2px nokta |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; butonda offset 2px, input'ta 1px.
- Dokunma hedefi: 40px buton mobilde 48px'e çıkar; kadran üstündeki eşik tıkları görsel 1px olsa da 44×44px sarmalayıcı ile sürüklenebilir.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 14px, 1.5px çizgi: kalibrasyon, kanal, kayıt, uyarı — başka ikon yok |
| Fotoğraf | yok — enstrüman yüzeyi çizim ve ölçektir |
| İllüstrasyon | teknik çizim: kadran yayı, cetvel tıkları, kesit şeması; 1px, dolgu yok |
| Doku | köşe crosshair + 4px cetvel tıkları; `--grain: 0` |
| Logo alanı | Michroma 12px, .06em; yanında 1px dikey ayırıcı ve kanal numarası; 20px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 7/5 kadran + kanal listesi, cetvel kurallı zemin | `shots/01-landing.png` |
| Dashboard | yüksek | 6 kanal kartı + kadran + kalibrasyon şeridi | `shots/02-dashboard.png` |
| Form | düşük | kanal ayarı: eşik, birim, örnekleme hızı; 36px alanlar | — |
| Liste / tablo | yüksek | kanal tablosu 36px satır, sapma (±) sütunu | — |
| Boş durum | orta | "kanal bağlı değil" + kalibrasyon CTA'sı | — |
| Onboarding | yüksek | 3 adım: kanal ekle → birim seç → kalibre et | — |
| Pricing | orta | kanal sayısı / örnekleme planı tablosu | — |
| Giriş / ödeme | çok düşük | kurum girişi, mono alanlar, dar kart | — |
| Modal | orta | kanal detayı: eşik tıkları sürüklenebilir | — |
| Bildirim / toast | orta | eşik aşımı: kanal + değer + tolerans | — |
| Hata | düşük | "sensör yanıt vermiyor" + son geçerli değer + damga | — |
| Profil / ayar | orta | kalibrasyon takvimi, birim sistemi (SI/imperial) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 420ms | `cubic-bezier(.34,1.28,.64,1)` (hafif taşma) | `opacity` + `translateY(14px)`, kart başına 45ms stagger |
| Scroll reveal | 500ms | `cubic-bezier(.34,1.28,.64,1)` | `top 86%` tetiği, 18px, `once: true` |
| Basma | 190ms | `linear` | `translate(2px,2px)` + gölge kalkar (fiziksel basış) |
| Hover | 190ms | `cubic-bezier(.34,1.28,.64,1)` | zemin `--surface-2`, görsel ölçek `1.018` |
| Pin / scrub | açık | `scrub 0.75` | kadran bölümü `+110%` mesafede sabitlenir, iğne scroll ile döner |
| İğne | 640ms | `cubic-bezier(.34,1.28,.64,1)` | yeni değere tek taşmalı geçiş (yalnız bir kez) |

- Ölçülebilir imza: `enter 0.42s / cb(.34,1.28,.64,1) / 14px / 0.045` · `scroll top 86% / 0.5s / 18px / once:true` · `pin açık scrub 0.75 / +110%` · `hover 190ms / 1.018`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, iğne ve scrub kapanır, değer tek karede yazılır.
- Bu stile yasak hareket: sürekli döngü (yalnız yükleme yayı 700ms), blur geçişi, renk geçişiyle değer değişimi, birden fazla taşma.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f5f7f7` | `#0b0f11` |
| `--bg-2` | `#eaeff0` | `#0f1517` |
| `--surface` | `#ffffff` | `#121a1d` |
| `--surface-2` | `#f2f6f7` | `#182326` |
| `--ink` | `#0e1517` | `#e5eef0` |
| `--ink-soft` | `#43565c` | `#a1b3b9` |
| `--accent` | `#1a5c8a` | `#63bde0` |
| `--accent-ink` | `#f4f8fa` | `#06171f` |

- Ölçülen kontrast (koyu): `ink / bg` = **16.34:1** · `ink-soft / bg` = **8.86:1** · `accent-ink / accent` = **8.60:1** · `ink-faint / bg` = **4.65:1**.
- Koyu modda değişen başka ne var: accent açık kobalta döner (`#63bde0`); `--shadow-hard` opak siyaha kayar (`2px 2px 0 rgba(0,0,0,.6)`) çünkü koyu zeminde açık gölge görünmez; hairline .14 → .16.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Her ölçüm birim + toleransla yazılır: `24,81 mV ±0,02`. Birimsiz sayı yasak.
- Kanal numarası (CH-01…) her kartta ve tablo satırında görünür.
- Kadran yayı 180°, iğne 2px accent, eşik tıkları 1px; yay altında birim etiketi.
- Crosshair yalnız ölçüm kartlarında, 8px uzunlukta 1px çizgi.
- Kalibrasyon durumu ve tarihi nav'da sürekli görünür (`CAL 2026-02-11`).
- Örnekleme hızı (Hz) ve son güncelleme damgası her panelde yazılır.
- Renk, radius, gölge yalnız `--…` token'larından gelir; gölge daima blur'suz ofset.

## Yasaklar
- Birimsiz veya toleranssız ölçüm değeri.
- 8px üstü radius, cam yüzey, blur, neon parlama.
- Süsleme amaçlı fotoğraf/illüstrasyon; 3B kadran.
- Renk-only eşik uyarısı (tık işareti + metin zorunlu).
- Yumuşak yayılan gölge (yalnız blur'suz ofset gölge).
- Birden fazla taşmalı yay animasyonu; sürekli dönen gösterge.
- Uydurma ölçüm/kalibrasyon tarihi; eksik veri `{{value}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.40:1** (cetvel tıkları ve dipnot); etkileşimli metin `--ink` 17.16:1, `--ink-soft` 7.17:1.
- Eşik aşımı renk dışında: tık işareti konumu + `WARN/CRIT` metni + değerin yanında `!` işareti.
- Hareket: iğne tek taşmalı geçiş, scrub yalnız bir bölümde; `prefers-reduced-motion` ikisini de kapatır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: beyaz kart üstünde 2px kobalt halka 6.68:1; kadran üstünde halka `offset: 4px` (yay çizgisine değmesin).

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
| Ekran "dashboard" gibi duruyor | birim/tolerans yok, kanal numarası yok | her değere birim + `±` tolerans + CH no ekle |
| Butonlar "yüzen" görünüyor | yumuşak blur gölge kullanılmış | `--shadow-hard` (blur'suz 2px ofset) kullan |
| Kadran okunmuyor | yay 180° değil veya iğne 1px | yayı 180°'ye sabitle, iğneyi 2px yap |
| Koyu modda gölge kayboluyor | açık renkli ofset gölge | koyuda `rgba(0,0,0,.6)` ofset kullan |
| Hiyerarşi kayboluyor | Michroma 700 eklenmiş | yalnız 400; hiyerarşiyi punto ve boşlukla kur |
| Mobilde taşma | birim etiketi değerden ayrılmış | değer + birim aynı satır grubunda, birim `nowrap` |

## Komşu stiller

- **Uyumlu:** `telemetry-grid` — aynı veri disiplini; sistem paneli 46, ölçüm paneli 50.
- **Uyumlu:** `conceptual-sketch` — teknik çizim dili ortak; şema/eskiz 32'den, ölçekli panel 50'den alınır.
- **Uyumlu:** `scandinavian-dark` — soğuk nötr zemin + hairline; koyu laboratuvar görünümü bu ikiliyle kurulur.
- **Yasak:** `claymorphism` — şişkin yuvarlak yüzey ölçüm ciddiyetini bozar.
- **Yasak:** `maximalism` — katman ve renk bolluğu kadran eşiklerini okunamaz kılar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.nist.gov/pml | birim, tolerans ve kalibrasyon gösterimi |
| https://en.wikipedia.org/wiki/Instrumentation | kanal/kadran metaforu ve ölçüm panosu düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html | 44px üstü dokunma hedefi (enstrüman düğmeleri) |
| https://fonts.google.com/specimen/Michroma | geniş teknik display ve yalnız 400 ağırlık sınırı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Lab Instrument (styles/50-lab-instrument/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="lab-instrument"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, büyük harf) başlıkta, --font-body (Inter) gövdede,
           --font-mono (Share Tech Mono) ölçüm değeri, birim ve etiketlerde; tabular-nums zorunlu.
Yüzey: --bg / --surface / --surface-2 + blur'suz ofset gölge (--shadow, birincil ölçümde --shadow-hard);
        radius 2px/8px; cam/blur yok.
Bileşen: "Bileşen reçeteleri" birebir; kanal kartı 16px padding + kadran yayı + crosshair köşe.
Izgara: gutter 16px, container 1280px, 7/5 asimetri, bölüm ritmi 56px.
Hareket: enter 0.42s cubic-bezier(.34,1.28,.64,1) 14px / stagger 0.045; scroll top 86% 0.5s 18px once:true;
         pin açık scrub 0.75 / +110%; hover 190ms scale 1.018. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (birimsiz ölçüm, yumuşak gölge, 3B kadran).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (kadran yayı, crosshair, ofset gölge, birim/tolerans çifti).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Her ölçümde birim + tolerans var; kalibrasyon tarihi görünür.
- [ ] 390px genişlikte taşma yok; değer + birim aynı satırda.
- [ ] `prefers-reduced-motion` açıkken iğne ve scrub duruyor.

## Token

```css
[data-style="lab-instrument"] {
  --bg: #f5f7f7; --bg-2: #eaeff0;
  --surface: #ffffff; --surface-2: #f2f6f7;
  --ink: #0e1517; --ink-soft: #43565c; --ink-faint: #76898f;
  --accent: #1a5c8a; --accent-ink: #f4f8fa;
  --line: rgba(14,21,23,.14);
  --radius: 2px; --radius-lg: 8px;
  --shadow: 0 1px 2px rgba(14,21,23,.08); --shadow-hard: 2px 2px 0 rgba(14,21,23,.13);
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
  --danger: #a1271d; --danger-ink: #ffffff; --ok: #17604a; --warn: #7a4f0a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="lab-instrument"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
