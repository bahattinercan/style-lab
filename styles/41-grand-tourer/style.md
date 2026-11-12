# 41 · Grand Tourer

> **Bir cümlede:** Krem deri, krom hairline ve kadran: 1960'ların klasik GT kokpiti gibi davranan, lüksü süsle değil malzemeyle anlatan bir arayüz.

| | |
|---|---|
| **Hissiyat** | zamansız, pahalı, el işçiliği, "sahibinden değil ustasından" |
| **En iyi** | premium emlak/galeri vitrini, butik otel, klasik otomobil, mücevher, özel bankacılık, yat/charter |
| **Kaçın** | yoğun operasyon paneli (20+ satır canlı tablo), çocuk/eğitim ürünü, indirim-kampanya sayfası, oyun, hızlı tüketim e-ticareti |
| **Zorluk** | orta (krom kenar disiplini + kadran; yanlış kullanımda "eskimiş" görünür) · **Erişilebilirlik** | iyi (14.15:1 gövde, 10.39:1 accent üstü) |
| **Aile** | Zamansız (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Grand Tourer, lüksü **malzemeyle** kurar: krem deri zemin (`#efe7da`), parşömen kart (`#f8f2e8`), her kartın içinde `1px` beyaz **krom parlama** ve dışında `1px` sıcak hairline, tek vurgu olarak **İngiliz yarış yeşili** (`#1f3b2c`), tipografi olarak krom rozet yazısı gibi davranan **Cinzel** büyük harf. Süs; çiçek, altın çerçeve veya gradyan değil **ölçü**dür: 50px büyük harf başlık, 0.09em harf aralığı, 96px bölüm boşluğu, 2/3px köşe.

Kazandığı şey: **yaşlanmayan değer algısı**. Klasik bir araba gibi, "yeni trend" olmadığı için 5 yıl sonra da pahalı durur; krem zemin gündüz okunur, yeşil vurgu butonu tek bakışta bulunur. Feda ettiği şey: **bilgi yoğunluğu ve hız**. Büyük harf + geniş tracking, aynı alanda %20 daha az kelime taşır; bu yüzden bu stil satış vitrinine, ilan detayına ve marka anlatısına uygundur, canlı operasyon tablosuna değil.

Stilin ikinci taşıyıcısı **gösterge kadranı**dır: landing'de kahraman görselin köşesinde yarım kalan, tik işaretli, iğneli bir saat; KPI ve fiyatlar ise **Courier Prime** ile sayaç rakamı gibi yazılır. Bu iki detay stili "bej lüks şablon"dan ayırır.

### Ne değildir
- **Luxury Typography (04) değildir.** O boşluk ve ince serifle çalışır, rengi neredeyse yoktur; burada **yeşil vurgu, mono sayaç rakamı ve kadran** vardır — malzeme konuşur, sessizlik değil.
- **Art Deco (26) değildir.** Deco simetri + altın hairline + ziggurat geometrisi kullanır ve koyudur; burada **asimetri, krom (beyaz/sıcak gri) hairline, krem zemin** ve tek yeşil vurgu var. Altın yok.
- **Victorian (27) değildir.** Victorian çift çerçeve + gravür + yoğun süs; burada çerçeve **tek hairline + iç krom parlama**, süs yalnız kadran.
- **Skeuomorphism (34) değildir.** Skeuomorphism gerçek malzemeyi taklit eder (ahşap fotoğrafı, dikiş, cam yansıması); burada malzeme **düz renk + 1px parlama** ile ima edilir, taklit edilmez.
- **Scandinavian Dark (40) değildir.** O koyu ve soğuk nötr; bu açık, sıcak ve kromlu — ölçülülük ortak, ışık yönü ve palet ters.
- **"Bej + serif" değildir.** Cinzel büyük harf yoksa, kadran/sayaç rakamı yoksa ve krom iç parlama yoksa geriye "sıcak kurumsal tema" kalır.

### Nereden gelir
1960'ların grand tourer kokpitinden: Smiths/Jaeger kadranları, ceviz kaplama gösterge paneli, krom çerçeveli anahtarlar, krem Connolly derisi ve ince çift çizgi **koç çizgisi**. Dijitalde 2010'ların "premium" furyası (altın gradyan + siyah) tükendiği için, lüks markalar yeniden **malzeme ve ölçü** diline döndü: mat krem kâğıt, tek vurgu, gerçek tipografi. Bu stil o dönüşün okunabilir hâlidir. Klişeye düşmemesi için korunması gereken detay: **kromun 1px kalması** — iç parlamayı 2px yapmak veya kart gölgesini büyütmek stili "eski ofis yazılımı"na çevirir.

### 3 saniyede tanıma testi
1. Zemin **krem/părşömen** mi (`#efe7da` / `#f8f2e8`); soğuk beyaz ya da siyah var mı? (Olmamalı.)
2. Kartlarda **iç 1px beyaz parlama + dış 1px hairline** var mı; koyu blok gölge var mı? (Gölge olmamalı.)
3. Başlık **Cinzel büyük harf, 0.09em** aralıklı mı; eğik/el yazısı ya da 700 ağırlık var mı?
4. Tek **yeşil** vurgu mu var; ikinci bir doygun renk (altın, bordo, mavi) sızmış mı?
5. Rakamlar (fiyat, KPI, tarih) **mono sayaç** gibi mi; kadran/tik/iğne veya çift çizgi koç çizgisi görünüyor mu?

## Zorunlu kurallar

1. **Krom kenar = 2 çizgi, 2px toplam.** Her kart: dış `1px solid var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Üçüncü çizgi, çift çerçeve (outline + border) ve 2px kenar yok. Kenar **hep aynı kalınlıkta** kalır; aktif durum kenarı kalınlaştırmaz, renk değiştirir.
2. **Tek vurgu: yarış yeşili `#1f3b2c`.** Ekranın ≤%8'i (veri ekranlarında ≤%4). Yalnız: birincil buton, aktif/selected durum, veri serisi 1, odak halkası. İkinci vurgu rengi yok; altın/şampanya yasak (Art Deco bölgesi).
3. **Büyük harf disiplini.** Display (Cinzel) her zaman büyük harf, `letter-spacing: .09em`, ağırlık **400**. Gövde metni asla büyük harf değil; mono etiketler büyük harf (`.14–.2em`).
4. **Sayaç rakamı.** Para, adet, tarih, yüzde, kod: `--font-mono` (Courier Prime) 400. Serif/mono ile rakam karıştırılmaz — bir ekranda sayıların tamamı mono.
5. **Boşluk ritmi.** Bölüm arası **96px** (mobil 56px), kart içi **28px** (mobil 20px), başlık–gövde 12px, kart–kart 20px. Tek sayfada 3'ten fazla farklı dikey boşluk değeri kullanılmaz.
6. **Köşe.** `--radius: 3px` (buton, input, chip, etiket), `--radius-lg: 6px` (kart, modal, hero görsel). 8px üstü yasak; `border-radius: 50%` yalnız kadran, avatar, rozet ve toggle topuzunda.
7. **Koç çizgisi.** Bölüm ayırıcı ve nav altı: `1px var(--accent)` + 1–2px boşluk + `1px var(--line)` çift çizgi. Ekran başına en fazla **3** koç çizgisi (nav, bölüm ayırıcı, footer); dekoratif tekrar yasak.
8. **Doku iki katman, ikisi de sabit.** `--grain: .035` (örtü opaklığı .175, overlay) + yan panellerde ceviz damarı: `repeating-linear-gradient(92deg, ink %2.5, 1px / 11px)`. Animasyonlu doku, parallax, kayma yok.
9. **Kadran bir tane.** Landing'de en fazla bir gösterge (tik halkası + iğne + göbek); başka ekranda kadran tekrarlanmaz, yerine mono sayaç rakamı kullanılır.

## Yasaklar

- Altın/şampanya metal, bakır vurgu, ikinci sıcak metal — "altın + siyah" lüks klişesi bu stilin dışında.
- Neon, glow (`box-shadow` ile parlama), renkli ışık lekesi, blur/`backdrop-filter` (`--blur: 0`).
- Gradyan geçişli buton/kart (metal taklidi), `linear-gradient` ile "krom" boyama; krom **yalnız 1px parlama çizgisi**.
- 2px ve üstü kenar, çift çerçeve, çerçeve + büyük gölge kombinasyonu, `border-radius` ≥ 8px.
- Saf siyah (`#000`) zemin/metin ve saf beyaz (`#fff`) kart: sıcak nötr (`#1c1a17`, `#f8f2e8`) kullanılır.
- Display'de 700 ağırlık, italik display, el yazısı font, negatif tracking (`< 0`) büyük harfte.
- Gövde metninde mono/uppercase; 300 ağırlık (Jost 300 krem zeminde kaybolur).
- Emoji, ikon kolajı, foto kolaj, illüstrasyon, desenli arka plan fotoğrafı.
- Sürekli hareket: marquee, nefes alan katman, dönen kadran iğnesi, sayaç animasyonu (sadece açılışta tek atım).
- Aynı ekranda 3'ten fazla koç çizgisi; her kartın altına çizgi eklemek ("makine çizimi" gürültüsü).

## Görsel imza
- **Krom kart:** `.panel { background: var(--surface); border: 1px solid var(--line); border-radius: 6px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(28,26,23,.08); }` — dış hairline koyu, iç parlama beyaz; iki çizgi arası 0px, toplam 2px.
- **Krem zemin:** `--bg #efe7da` + `--grain .035`; kart `--surface #f8f2e8` ile **%4–%6 daha açık** — kart "kâğıt", zemin "deri".
- **Rozet çerçevesi:** logo `26px` daire, `--accent` dolgu, iç `1px` beyaz parlama; harf Cinzel. Kare/radiuslu monogram kullanılmaz.
- **Ceviz damarı:** yalnız yan panellerde (dashboard side, auth aside, footer, footer şerit): `1px` dikey çizgi / `11px`, `--ink` %2.5 opaklık.
- **Koç çizgisi:** `border-top: 1px var(--accent)` + `border-bottom: 1px var(--line)`, aralarında 2px; nav altında `box-shadow: 0 4px 0 -3px var(--accent)` ile 1px yeşil çizgi.
- **Kadran:** 224px daire; tik halkası (`repeating-conic-gradient`, `.9deg` tik / `9deg` aralık, 64–100px annulus), çift krom halka (88px + 96px), iğne (`conic-gradient` `1.3deg` kama, 82px, `--accent`), göbek `4px` + beyaz halka. Landing dışında tekrarlanmaz.
- **Sayaç tipografisi:** `--font-mono` 400, `letter-spacing: 0`; fiyat 26px, KPI 22px, 404 44px, tablo sayısı 11.5px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#efe7da` | sayfa zemini (krem deri) | kart yüzeyi |
| `--bg-2` | `#e6dccb` | ikincil bölüm, input zemini, bulk bar | birincil kart |
| `--surface` | `#f8f2e8` | kart, panel, modal, tablo kabı (parşömen) | tam sayfa zemin |
| `--surface-2` | `#e8ddca` | hover, seçili satır, ikincil yüzey, çip zemini | ana kart |
| `--ink` | `#1c1a17` | başlık, gövde, sayaç rakamı (**14.15:1**) | accent zemin üstünde |
| `--ink-soft` | `#574f44` | açıklama, lede, nav pasif (**6.56:1**) | başlık |
| `--ink-faint` | `#726757` | etiket, sıra no, ipucu (**4.51:1**) | uzun gövde metni |
| `--accent` | `#1f3b2c` | birincil buton, aktif durum, seri 1, odak (**9.95:1** bg üstü) | ikinci anlam için |
| `--accent-ink` | `#f4ecdc` | accent üstü metin (**10.39:1**) | accent dışı zeminde (1.04:1 — okunmaz) |
| `--line` | `rgba(28,26,23,.18)` | tüm kenarlık ve koç çizgisi | metin |
| `--danger` / `--ok` / `--warn` | `#8a2b22` / `#23572f` / `#8a5a12` | yalnız durum: silme, başarı, uyarı | dekoratif vurgu |

- Ölçülen kontrast: `ink/bg` **14.15:1** · `ink-soft/bg` **6.56:1** · `ink-faint/bg` **4.51:1** · `accent-ink/accent` **10.39:1** · `accent/bg` **9.95:1** · `ink/surface` **15.59:1** · `ink/surface-2` **12.92:1** · `ink-soft/surface-2` **5.99:1** · `ink-faint/surface-2` **4.12:1** (dekoratif) · `danger/bg` **6.99:1** · `ok/bg` **6.91:1** · `warn/bg` **4.82:1**.
- Tek vurgu kuralı: yeşil ekran başına **tek anlam** taşır (eylem **veya** aktif durum). İkinci anlam katmanı renkle değil **koç çizgisi / krom çizgi / mono etiket** ile kurulur.
- Grafik paleti: `--data-1 #1f3b2c` (yeşil), `--data-2 #6f6250` (ceviz), `--data-3 #9d9079` (krom gölge), `--data-4 #a9762d` (pirinç, yalnız 4. seri). Pastel, doygun ve neon renk yok.
- Yasak kombinasyon: `--accent-ink` üstü `--surface` (1.04:1), `--ink-faint` üstü `--surface-2` gövde metni olarak (4.12:1), accent üstü `--ink` (ters kontrast), yan yana iki durum rengi (ok + danger).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel | 50px (mobil 30px) | 400 | 1.06 | `.09em`, büyük harf |
| H2 | Cinzel | 24px | 400 | 1.16 | `.07em` |
| H3 | Cinzel | 15.5px | 400 | 1.3 | `.05em` |
| Gövde | Jost | 16.5px | 400 | 1.68 | `0` |
| Küçük gövde / etiket altı | Jost | 13px | 400 | 1.55 | `.01em` |
| Etiket / mono | Courier Prime | 9.5–10.5px | 400 | 1.2 | `.14–.2em`, büyük harf |
| Sayaç (fiyat/KPI) | Courier Prime | 22–26px | 400 | 1.05 | `0` |

- Ölçek oranı ~1.55; kullanılan basamaklar **9.5 · 11 · 13 · 16.5 · 24 · 50** (6 basamak). Ara basamak uydurulmaz.
- Ölçü: `h1 { font-size: clamp(30px, 4vw, 50px); line-height: 1.06; letter-spacing: .09em; text-transform: uppercase; max-width: 19ch; }`
- Gövde ölçüsü: **62ch** (lede 44ch). İlan açıklaması gibi uzun metinde 66ch'yi geçmez.
- Ağırlık kuralı: yalnız 400 ve 500 (Jost). Cinzel **400**; 600/700 büyük harfte "tabela" gibi durur ve yasaktır. Gövde 300 yasak.
- Cinzel alt sınırı 15px (küçükte tırnaklar kaybolur); 15px altı etiket yalnız Courier Prime.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 32px |
| Container genişliği | 1160px (ilan galerisi 1320px'e kadar) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 96 (`--space-1…8`) |
| Breakpoint davranışı | <640px tek kolon (gutter 20px); 640–960px 8 kolon; >960px 12 kolon |

- Asimetri kuralı: hero **7/5** veya **8/4**; ekran başına en fazla 2 bölüm simetriden çıkar. Simetri (Art Deco) bu stile yasak — merkezlenmiş hero ve ortalı kart ızgarası kullanılmaz (onboarding/404 istisna: tek kart ortada olabilir).
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada; üçüncü blok tam genişlik ya da 8/4 kırılım alır. Bölüm arası 96px, kart içi 28px, kart–kart 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm, grain + ceviz damarı katmanı |
| Kart | `--surface` + `1px var(--line)` + `inset 1px beyaz` | yalnız `0 1px 2px rgba(28,26,23,.08)` | içerik panelleri, KPI, tablo kabı, plan kartı |
| Yüzen katman | `--surface` + krom kenar | `0 18px 40px -28px rgba(28,26,23,.45)` | modal, dropdown, tooltip, alt sayfa |

- Kenarlık formülü: `border: 1px solid var(--line)` + `box-shadow: inset 0 0 0 1px rgba(255,255,255,.6)`. Hairline opaklığı `.18`; artırılırsa "kurşun kalem çizimi" gürültüsü olur.
- Derinlik nereden gelir: **krom iç parlama + 1px hairline + ton farkı**. Koyu blok gölge (0 8px 30px) bu stile yabancıdır; lüks "temiz tezgâh"tan gelir.
- `--shadow-hard` (`3px 3px 0 rgba(28,26,23,.12)`) yalnız "damga" hissi gereken tek yerde (ör. 404 kartı) kullanılabilir; kartlarda kullanılmaz.
- Radius: 3px buton/input/chip, 6px kart/modal/hero. 50% yalnız kadran, avatar, rozet, toggle.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 42px | 0 20px | 3px | Courier Prime 10.5px `.16em` büyük harf | `--accent` + `--accent-ink`, `inset 0 1px 0 rgba(255,255,255,.3)` + `inset 0 -1px 0 rgba(28,26,23,.24)` | hover: `color-mix(accent 90%, ink)` · active: `translateY(1px)` · focus: `outline: 2px solid var(--accent); offset 2px` · disabled: `opacity .42` · loading: 3 nokta 140ms |
| Buton (ikincil) | 42px | 0 18px | 3px | Courier Prime 10.5px | saydam + `1px color-mix(ink 30%)` + `--ink`, `inset 0 1px 0 rgba(255,255,255,.6)` | hover: `--surface-2` · active: `translateY(1px)` · focus: aynı halka |
| Buton (sessiz) | 42px | 0 18px | 3px | aynı | `--surface-2` + hairline | hover: `--bg-2` |
| Input | 42px | 0 14px | 3px | Jost 13px | `--surface` + `1px color-mix(ink 22%)` + `inset 0 1px 2px rgba(28,26,23,.09)` | focus: `outline: 2px solid var(--accent); offset 2px` · filled: kenar `--ink-soft` · error: `1px var(--danger)` + 12px hata satırı · disabled: `opacity .5` |
| Kart | içerik | 28px (mobil 20px) | 6px | H2 Cinzel 24 + gövde 16.5 | `--surface` + krom kenar | öne çıkan: `--surface-2` zemin + üst `2px var(--accent)` şerit |
| Chip / plaka | 24px | 0 8px | 2px | Courier Prime 8.5px `.18em` | saydam + `1px color-mix(ink 26%)` + `--ink-soft` | aktif: `--accent` dolgu + `--accent-ink`; dokunma hedefi `min-height: 44px` padding ile |
| Nav | 72px | 0 52px | — | mono 11px `.14em` büyük harf | `--bg` + alt koç çizgisi | aktif: `--ink` + 1px yeşil alt çizgi; pasif: `--ink-soft` |
| Tablo satırı | 52px | 12px 14px | 0 (satır), 6px (kap) | Jost 13px, başlık mono 9.5px `.16em` | alt `1px var(--line)` | hover: `--surface-2` · seçili: `--surface-2` + 2px yeşil sol çizgi · zebra yok |
| Modal / sheet | içerik | 28px | 6px | H2 24 + 16.5 | `--surface` + krom kenar + `0 18px 40px -28px` | backdrop `rgba(28,26,23,.55)`; kapatma 44×44 |
| Toast | 52px | 0 16px | 3px | Jost 13px | `--surface` + sol `2px` durum çizgisi | 5sn, tek sefer; kapatma 44×44 |
| Kadran (landing) | 224px | — | 50% | mono 9.5px | tik halkası + çift krom halka + `1.3deg` iğne | iğne açılışta 420ms'de bir kez döner, sonra durur |
| Grafik paleti | — | — | çubuk üst 2px | eksen mono 8–9px | `--data-1…4` (yeşil/ceviz/krom/pirinç) | çubuk arası 12px, yatay grid yok, taban 1px `--line` |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`. Accent **dolu** butonda `outline: 2px solid var(--accent-ink)` (10.39:1 ters çevrilir).
- Dokunma hedefi: en az 44×44px. Görsel olarak 24px olan plaka/çip ve 36px ikon butonlar `min-height: 44px` + padding ile büyütülür; mobil alt bar 56px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.6px çizgi, yuvarlak uç, 24px ızgara, `currentColor` (`--ink-soft`); dolu ikon yok |
| Fotoğraf | gün batımı/altın saat ışığı, sıcak ton, hafif film grain; geniş açı mimari veya araç detayı (jant, far, deri dikiş). Alan ≥%30, tek kare; `filter: saturate(.92) contrast(1.03)` sınırı |
| İllüstrasyon | yok — yerine kadran çizimi, mono künye ve boşluk; illüstrasyon gerekiyorsa teknik çizim (1px, krem kâğıt) |
| Doku | `--grain .035` + ceviz damarı (yalnız yan panel, 1px/11px, %2.5) + koç çizgisi. Doku fotoğrafı/taklit ahşap yok |
| Logo alanı | 26px yeşil daire rozet + Cinzel harf; çevresinde ≥24px boşluk, rozet çevresine halka eklenmez |
| Veri görselleştirme | yalnız 4 renk; çizgi kalınlığı 2px, nokta 5px; pasta/Donut yerine halka tercih edilir (kadran dili) |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 50px Cinzel büyük harf, 7/5 asimetri, tek yeşil CTA, hero görselinde bir kadran, koç çizgili nav | `shots/01-landing.png` |
| Dashboard | düşük-orta | KPI sayıları mono 22px, başlıklar Cinzel 24px, krom kartlar, yeşil yalnız seri 1 ve aktif satır | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px dokunma hedefi, sekme plakaları 2px, alt bar 56px | — |
| Bileşenler · temel | orta | palet + tipografi + krom kenar + kadran levhası | — |
| Form | düşük | tek sütun 460px, input 42px, odak 2px yeşil + 2px offset, süs 0 | — |
| Modal / katman | orta | 6px radius + krom kenar + yumuşak gölge; backdrop %55; 2 buton sağa | — |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik paleti, ince grid yok | — |
| Gezinme | orta | koç çizgili nav, plaka chip, ray ikonları, footer'da ceviz damarı | — |
| Pricing / danışmanlık | orta | 3 kart, orta kart `--surface-2` + üst 2px yeşil; fiyat mono 26px | — |
| Giriş | çok düşük | süs 0; sol panelde ceviz damarı, tek kart, hata `--danger` 1px | — |
| Liste (ilan listesi) | düşük-orta | filtre çubuğu + 52px satır, seçili satır `--surface-2` + sol 2px yeşil | — |
| Boş / hata durumu | orta | tek ikon + tek cümle + tek buton; 404 mono 44px | — |
| Ayarlar | düşük | bölüm başlığı Cinzel, satır ayırıcı hairline, tehlike bölgesi `--danger` 1px | — |
| Ödeme | çok düşük | özet sütunu sağda, mono tutarlar, yeşil yalnız "Ödemeyi tamamla" | — |
| Onboarding | orta | adım noktaları, seçenek kartı 6px + krom kenar, tek ileri CTA | — |
| Makale / ilan künyesi | orta | 62ch ölçü, Cinzel 24px H2, hairline ayırıcı, mono künye satırı | — |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px sürükleme tutamacı, butonlar alt yapışkan | — |
| Mobil · form | çok düşük | tam genişlik input 54px, klavye üstü 46px CTA, etiket mono | — |
| Mobil · liste | düşük | 64px satır, krom kart, sağda durum plakası | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Emlak · Prime katmanı

Aynı stil, emlak vitrininde şu eşlemeyle uygulanır (ekran adları uygulama diline göre Türkçeleşir):

| Emlak ekranı | Stil karşılığı |
|---|---|
| Ana sayfa hero | tek öne çıkan portföy + kadran yerine "m²/fiyat/oda" künyesi; 50px Cinzel başlık: semt adı |
| İlan listesi | 52px satır değil **kart liste**: 6px krom kart, sol üstte mono künye (`3+1 · 240 m² · 2019`), sağda mono fiyat |
| İlan detayı | sağ sütun "künye" tablosu (mono değer), solda galeri; başlık Cinzel 30px |
| Harita + filtre | filtre çubuğu plaka chip'leri; harita üstünde krom panel (blur yok, opak yüzey) |
| Galeri / sanal tur | tek kare fotoğraf, altında mono sayaç `04 / 18`; oynat butonu 44px daire |
| Fiyat & kredi | fiyat mono 26px, taksit tablosu 52px satır, faiz oranı mono |
| Ajan kartı | rozet + Cinzel isim + mono iletişim; "Randevu al" tek yeşil buton |
| Onboarding (tercih) | 3 seçenek kartı (satılık/kiralık/yatırım), seçili kart üst 2px yeşil |

Kural: **fotoğraf ve fiyat aynı kartta yarışmaz** — fotoğraf büyük ve sıcak, fiyat küçük ve mono. Lüks emlakta değer, fiyatın büyüklüğünden değil künyenin düzeninden gelir.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 140ms | `cubic-bezier(.2,.72,.2,1)` | `transform: translateY(1px)` + zemin `--surface-2` |
| Geçiş / sayfa | 280ms | `cubic-bezier(.2,.72,.2,1)` | `opacity` + `translateY(4px)` (sayfa geçişi 320ms) |
| Giriş (enter) | **660ms** | `cubic-bezier(.22,.68,.24,1)` | `opacity` + `translateY(18px)`, **stagger 70ms**; başlık maske içinden 0.66s |
| Kaydırma (scroll) | **850ms** | `cubic-bezier(.22,.68,.24,1)` | trigger **`top 84%`**, offsetY **20px**, stagger 60ms, `once: true` |
| Hover | **230ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | açık | `scrub 1.1` | hero sabitlenir, mesafe **+140%**, `scale 1.04 → 1`, mobilde kapalı |
| Ödül / vurgu | 420ms | `cubic-bezier(.2,.72,.2,1)` | koç çizgisi `scaleX(0→1)` veya kadran iğnesi tek atım |

- İmza ölçüsü: enter **0.66s / 18px / stagger 0.07** · scroll **0.85s / `top 84%` / 20px** · hover **230ms / 1.02** · pin **açık (scrub 1.1 / +140%)**.
- Hareket "ağır kapı" gibi: hızlı başlar, yavaş oturur; yay/overshoot yok.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, iğne son konumunda durur, `transform` sıfırlanır, pin/scrub kapanır.
- Yasak: parallax, marquee, sürekli dönen iğne, nefes alan katman, gradyan kayması, glow animasyonu.
## Koyu mod

| Token | Açık (sevk edilen) | Koyu (referans) |
|---|---|---|
| `--bg` | `#efe7da` | `#14180f` |
| `--surface` | `#f8f2e8` | `#1d2318` |
| `--ink` | `#1c1a17` | `#efe7da` |
| `--accent` | `#1f3b2c` | `#b7c8a8` |
| `--accent-ink` | `#f4ecdc` | `#14180f` |

- Bu stil **açık tabanlıdır**: koyu tema sevk edilmez, `[data-theme="dark"]` bloğu yazılmaz ve koyu mod sahneleri (17/18) üretilmez. Yukarıdaki koyu sütun yalnız gece vitrini senaryosu içindir; üretilirse `accent-ink/accent` yeniden ölçülür (hedef ≥ 7:1) ve ceviz damarı `%2.5 → %4`'e çıkar (koyu zeminde doku görünmez).
- `filter: invert()` yasak; palet elle yazılır.

## Erişilebilirlik

- Ölçülen en düşük metin çifti: `--ink-faint / --bg` **4.51:1** (etiket, sıra no, ipucu). `--ink-faint / --surface-2` **4.12:1** — bu yüzden `--surface-2` üstünde **gövde metni** için kullanılmaz; yalnız 12px+ dekoratif etiket.
- `--accent-ink / --accent` **10.39:1** (AAA) · `--ink / --bg` **14.15:1** → gövde ve buton metni güvenli. `--accent-ink` **asla** krem zemin üstünde metin olarak kullanılmaz (1.04:1).
- Odak görünürlüğü: krem zeminde 2px yeşil halka 9.95:1; accent dolu butonda halka `--accent-ink` ile çizilir. Halka `outline-offset: 2px` — krom iç çizgiyle karışmaz.
- Ceviz damarı ve grain `pointer-events: none` + `aria-hidden`; kontrastı 0.2:1'den fazla düşürmez (damar %2.5, grain örtüsü .175).
- Hareket/parlama hassasiyeti: parlama animasyonu yok; kadran iğnesi tek atım ve `prefers-reduced-motion`'da durur.
- Opak fallback: `--blur: 0`, yarı saydam panel yok → `@supports` gerekmez; tek saydam yüzey modal backdrop'ıdır.
- Büyük harf + geniş tracking okunurluğu düşürür: **bütün gövde metni normal harf düzeninde**; büyük harf yalnız ≥15px başlık ve mono etiket. Uzun metinde (ilan açıklaması, makale) Cinzel H2 15px altına inmez.

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
| "Eski ofis yazılımı" gibi duruyor | Kenar 2px+, kart gölgesi büyük, buton gradyanlı | Kenar 1px + iç 1px beyaz; gölge `0 1px 2px`; buton düz dolgu |
| "Bej lüks şablon" gibi duruyor | Kadran, sayaç rakamı ve koç çizgisi yok; her şey serif | En az bir kadran + tüm sayılar mono + nav altı çift çizgi |
| Art Deco'ya kaydı | Altın/şampanya ton, simetrik hero, çift altın çerçeve | Altını kaldır; asimetri 7/5; tek hairline + krom iç parlama |
| Krem zemin kirli/çamurumsu | Kart ile zemin arasında fark <%3 veya gri ton eklendi | Kart `#f8f2e8`, zemin `#efe7da`; griler sıcak (`#574f44`) |
| Okumak yoruyor | Gövde büyük harf, 300 ağırlık, 66ch üstü satır | Gövde Jost 400 normal harf, 62ch |
| Lüks değil "pahalı taklidi" | İki vurgu rengi, ikon çeşitliliği, emoji | Tek yeşil; ikon 1.6px tek set; emoji yok |
| Kadran oyuncak gibi | Tik halkası çok sık, iğne kalın, merkezde parlama | `.9deg` tik / `9deg` aralık, iğne `1.3deg` / 82px, göbek 4px |
| Mobilde başlık taşıyor | 50px sabit punto + geniş tracking | `clamp(30px, 4vw, 50px)`, `text-wrap: balance`, 2 satır sınırı |
| Ceviz damarı desen gibi | Opaklık > %4 veya tüm sayfada | %2.5, yalnız yan panel/footer, 1px/11px |
| Form "ölü" görünüyor | Input zemini kartla aynı | Input `--surface` + `1px color-mix(ink 22%)` + iç gölge |

## Komşu stiller

- **Uyumlu:** `luxury-typography` — aynı "az konuşan lüks" ailesi; vitrin bölümünde garnitür olarak kullanılabilir. `editorial-design` — ilan künyesi/makale bölümünde metin ritmi uyumlu. `art-deco` — aynı sektörde (otel/etkinlik) alternatif; **aynı sayfada karıştırılmaz** (biri altın+simetri, diğeri krom+asimetri).
- **Yasak:** `neo-brutalism`, `dopamine-ui`, `claymorphism`, `glassmorphism`, `cyberpunk`, `bauhaus` — kalın kenar, doygun renk, blur veya saf geometri krom/koç çizgisi fiziğini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cinzel | krom rozet büyük harf, 400 ağırlık, `.09em` tracking |
| https://fonts.google.com/specimen/Jost | 1960'lar broşür geometrik sansı, gövde 16.5/1.68 |
| https://fonts.google.com/specimen/Courier+Prime | sayaç rakamı ve servis defteri etiketi (mono 400) |
| https://www.hagerty.com/media/ | klasik GT kokpiti fotoğrafı: kadran, ceviz panel, krom anahtar |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | 4.5:1 gövde / 3:1 büyük metin eşiği ve ölçüm yöntemi |
| https://developer.mozilla.org/en-US/docs/Web/CSS/conic-gradient | kadran tik halkası ve iğne (conic-gradient + mask) |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Grand Tourer (styles/41-grand-tourer/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cinzel) yalnız başlıkta, BÜYÜK HARF, 400, tracking .09em;
           --font-body (Jost) gövdede, normal harf; --font-mono (Courier Prime) tüm sayı ve etiketlerde.

Yap:
- Zemin krem #efe7da, kart parşömen #f8f2e8; her kartta dış 1px hairline + iç 1px beyaz parlama (krom).
- Tek vurgu yarış yeşili #1f3b2c; ekranın ≤%8'i; accent üstüne her zaman #f4ecdc.
- Bölüm arası 96px (mobil 56px), kart içi 28px, gövde ölçüsü 62ch, radius 3/6px.
- Nav ve bölüm ayırıcıda koç çizgisi (1px yeşil + 1px hairline), ekran başına en fazla 3.
- Fiyat/KPI/tarih/yüzde: Courier Prime 400 (sayaç); serif veya sans ile rakam yazma.
- Landing'de tek kadran (tik halkası + çift krom halka + 1.3deg iğne); başka ekranda tekrarlama.
- Yan panellerde ceviz damarı: 1px / 11px, ink %2.5.

Yapma:
- Altın/şampanya, ikinci vurgu rengi, gradyan buton, glow, blur, 2px+ kenar, 8px+ radius.
- Saf siyah/beyaz; gövdede büyük harf veya 300 ağırlık; emoji; çizim/illüstrasyon.
- Simetrik hero (Art Deco bölgesi); sürekli animasyon.
```

## Token

```css
[data-style="grand-tourer"] {
  --bg: #efe7da; --bg-2: #e6dccb;
  --surface: #f8f2e8; --surface-2: #e8ddca;
  --ink: #1c1a17; --ink-soft: #574f44; --ink-faint: #726757;
  --accent: #1f3b2c; --accent-ink: #f4ecdc;
  --line: rgba(28,26,23,.18);
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(28,26,23,.08); --shadow-hard: 3px 3px 0 rgba(28,26,23,.12);
  --font-display: "Cinzel", "Playfair Display", Georgia, serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.09em; --blur: 0px; --grain: .035;
  --data-1: #1f3b2c; --data-2: #6f6250; --data-3: #9d9079; --data-4: #a9762d;
  --danger: #8a2b22; --danger-ink: #f8f2e8;
  --ok: #23572f; --warn: #8a5a12;
}
```
