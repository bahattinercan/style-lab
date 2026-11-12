# 81 · Forest Bark

> **Bir cümlede:** Orman altının nemli karanlığında, her türün kabuğu ve mevsimiyle kaydedildiği saha defteri arayüzü.

| | |
|---|---|
| **Hissiyat** | gölgeli, dokulu, sabırlı, canlı |
| **En iyi** | botanik/doğa kayıt uygulaması, orman envanteri, tür kataloğu, saha gözlem defteri |
| **Kaçın** | fintech, sağlık paneli, yüksek hızlı operasyon ekranı — koyu doku ve yavaş ritim burada "gecikme" olur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 8.08:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="forest-bark"]` |
| **Kompozisyon** | `split` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Forest Bark, arayüzü bir **saha defteri** gibi kurar: her kayıt bir tür, her türün Latince adı, Türkçe adı, yükseklik/çap değeri ve mevsim etiketi vardır. Zemin orman altının nemli karanlığıdır (peat), accent ise yeni soyulmuş kabuğun sıcak tan rengidir.

Üç kurucu karar: (1) **iki serif, iki iş** — başlıklar Lora 600 (sağlam, kitap kapağı), gövde EB Garamond 400 (uzun okuma); mono yalnız ölçü ve etiketlerde; (2) **doku zeminin kendisi** — grain `.07` her yüzeyde, düz beyaz panel yok, katman ayrımı iki ton açık `--surface` + 1px çizgi; (3) **yavaş ritim** — giriş 880ms süzülür, hover 320ms; hiçbir şey acele etmez.

Bedeli: ekran koyudur ve uzun süre bakınca yorar; bunu dengeleyen şey **17px gövde ve 1.7 satır aralığı**. Gövde metni 15px'e düşerse stil "karanlık tema" olur, "orman" olmaktan çıkar.

### Ne değildir
- **Organic Bio (38) değildir:** o stil açık krem zemin, sage yeşili ve blob radiuslarla "temiz organik" kurar; Forest Bark koyu peat zemin, kabuk tan accent ve 5/11px ölçülü radius kullanır.
- **Wabi-Sabi (07) değildir:** wabi-sabi kusuru estetikleştirir (yamuk kartlar, kil dokusu); burada hizalama düzgündür, doku yalnız grain ve kabuk çizgisidir.
- **Dark Academia (33) değildir:** o stil kitaplık/parşömen atmosferi ve altın accent ile kurulur; Forest Bark yeşil-siyah zemin ve nemli kabuk paletindedir, mono ölçü tabloları taşır.
- **Nordic Folk (66) değildir:** 66 krem zemin + kırmızı nakış dilidir; 81 koyu ve serif gövdelidir.

### Nereden gelir
Herbaryum künyesi ve orman envanter defterinden: tür adı, toplandığı yer, tarih, ölçü, mevsim. Bugün yeniden kullanılmasının nedeni: doğa uygulamaları çoğunlukla "açık hava spor uygulaması" gibi görünüyor ve saha kaydının ciddiyetini taşımıyor; botanikçi ve orman mühendisi kendi defter dilini arıyor. Klişeye dönüşmemesi için korunacak detay: **Latince adın italik künyede kalması** ve mevsim etiketinin her listede görünmesi.

### 3 saniyede tanıma testi
1. Zemin koyu yeşil-siyah ve gözle görülür **grain dokusu** var; düz beyaz panel yok.
2. Başlıklar serif (Lora), gövde ikinci bir serif (EB Garamond); mono yalnız etiket/ölçü.
3. Ölçüler sağa hizalı mono: `18.4 m · ⌀ 62 cm` gibi, birim ayrı.
4. Kartlar 5px köşe, modal 11px; yuvarlak hap buton yok.
5. Her kayıtta mevsim etiketi (ilkbahar/yaz/sonbahar/kış) ve tür türü chip'i.

## Görsel imza
- **Kabuk dokusu:** `--grain: .07` tüm sayfa zemininde; grain fotoğrafın üstünde kullanılmaz.
- **Tan accent:** `#d7a469` yalnız birincil eylem, seçili öğe ve mevsim vurgusu; ikinci sıcak ton yok.
- **Damar çizgisi:** yalnız ilk kartın sol üstünde 1.5px `--line` çizgi; süs olarak çoğaltılmaz (ekran başına 1).
- **İki serif hiyerarşisi:** H1 52px Lora 600, gövde 17px EB Garamond 400; mono 11px etiket + 14px ölçü.
- **Katman tonu:** `--bg` → `--surface` → `--surface-2` üç kademe; gölge yalnız kart/modal, çok yumuşak.
- **Ölçü çubuğu:** liste satırında türün boy aralığını gösteren 4px yüksekliğinde `--surface-2` çubuk, `--accent` ile dolu kısım.
- **Hap chip:** tür etiketleri 999px radius hap; yumuşak form yalnız chip'te, panelde değil.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#1f2620` | `#0a0d08` | kart zemini |
| `--bg-2` | `#19201a` | `#0d110a` | birincil buton |
| `--surface` | `#283029` | `#131711` | sayfa zemini |
| `--surface-2` | `#313b31` | `#1b2117` | metin zemini |
| `--ink` | `#ecefe3` | `#f1f4e7` | dekoratif dolgu |
| `--ink-soft` | `#b4bfa8` | `#bcc7ae` | accent dolgu üstü |
| `--ink-faint` | `#85917b` | `#8d9a80` | gövde, etkileşimli metin |
| `--accent` | `#d7a469` | `#e9bd7f` | dekoratif dolgu |
| `--accent-ink` | `#201708` | `#171004` | accent olmayan zemin |
| `--line` | `rgba(236,239,227,.15)` | `rgba(241,244,231,.22)` | metin |

- Ölçülen kontrast: `ink/bg` **13.29:1** · `ink-soft/bg` **8.08:1** · `accent-ink/accent` **7.92:1** · `ink-faint/bg` **4.67:1** · accent metin olarak bg'ye **6.93:1**.
- Tek vurgu kuralı: tan accent yalnız eylem/seçim/mevsim. Durumlar `--ok` (liken yeşili), `--warn` (bal), `--danger` (kiremit) — yalnız etiket ve ince şerit.
- Yasak kombinasyon: accent üstünde `--ink-soft`; parlak doygun yeşil (`#00ff00` ailesi) ile accent yan yana; `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 52px | 600 | 1.04 | -0.01em |
| H2 | Lora | 32px | 600 | 1.14 | 0 |
| H3 | Lora | 22px | 600 | 1.2 | 0 |
| Gövde | EB Garamond | 17px | 400 | 1.70 | 0 |
| Latince ad | EB Garamond | 17px italik | 400 | 1.5 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.35 | 0.18em, büyük harf |
| Ölçü / tablo | JetBrains Mono | 14px | 400 | 1.4 | 0.02em, tabular |

- Ölçek oranı ≈ 1.6 (17 → 32 → 52); kullanılan basamaklar: 11 · 12 · 14 · 17 · 22 · 32 · 52 · (mobil 30).
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.6vw, 52px) }`.
- Gövde metni maksimum satır uzunluğu: 64ch; saha notu 52ch'te kırılır.
- Ağırlık kuralı: Lora 400/600, EB Garamond 400 (tek kesim — sentetik kalın yasak), mono 400/700. İtalik yalnız Latince adda.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 6/6 (metin kolonu 4px sağa kayar), liste tam genişlik |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo tür kartına döner |

- Asimetri kuralı: ekran başına 1 organik kayma (hero metin kolonu veya tek kart 4px offset).
- Bölüm ritmi: 64px masaüstü / 40px mobil; bölüm ayırıcı 1px `--line` + 24px boşluk.
- Kart içi 22px padding; liste satırı 40px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | orman zemini, gölgeli bant |
| Kart | `--surface` + 1px `--line` | `var(--shadow)` çok yumuşak | tür kartı, panel |
| Yüzen katman | `--surface` + 1px `--line` | `var(--shadow)` + 0 32px 64px -40px | modal, açılır menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px tan dış halka | seçili tür, aktif bölüm |

- Kenarlık formülü: `1px solid var(--line)`; seçili durumda `--shadow-hard` = 1px tan halka (gölge değil, çizgi).
- Derinlik nereden gelir: katman tonu + grain; ışık ve parlaklık yok.
- Radius: `--radius` 5px (buton, input), `--radius-lg` 11px (kart, modal); chip 999px hap. 11px üstü panel radiusu yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 10px 20px | `--radius` | 14px/600 Lora | `--accent` + `--accent-ink`, `var(--shadow)` | hover %92 · active 1px aşağı · focus 2px accent halka + 3px offset · disabled %45 · loading 3 nokta |
| Buton (ikincil) | 44px | 10px 18px | `--radius` | 14px/600 Lora | şeffaf + 1px `--line` | hover `--surface-2` · focus accent halka |
| Input | 44px | 0 14px | `--radius` | 15px EB Garamond | `--bg-2` + 1px `--line` | focus accent halka + sol 2px şerit · error danger + açıklama · disabled %45 |
| Kart (tür) | — | 22px | `--radius-lg` | başlık 22px Lora 600 | `--surface` + 1px `--line` | seçili: 1px tan halka · ilk kartta damar çizgisi |
| Chip (tür) | 24px | 0 10px | 999px | 11px JetBrains Mono | `--surface-2` + 1px `--line` | iğne yaprak · geniş yaprak · kabuk · mantar |
| Nav (üst bar) | 56px | 0 28px | 0 | 12px Lora 600 | `--bg`, alt 1px `--line` | aktif 2px accent alt çizgi · sağda mevsim etiketi |
| Tablo satırı | 40px | 6px 12px | 0 | Latince italik + mono ölçü | alt 1px `--line` | hover `--surface-2` · seçili accent sol şerit 2px |
| Modal | — | 26px | `--radius-lg` | başlık 32px Lora | `var(--shadow)` + derin alt gölge | foto + künye + bakım notu, kapatma 44px |
| Toast | 40px | 8px 14px | `--radius` | 14px EB Garamond | `--surface`, sol 3px accent şerit | 4.5sn · iki satıra çıkmaz |
| Grafik | — | — | 0 | eksen 11px mono | `--data-1…4`, alan %12 dolgu | ızgara yok, yalnız taban çizgisi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; koyu zeminde tan halka 6.93:1.
- Dokunma hedefi: 44×44px; chip 24px görsel, dikey padding ile 44px.
- Ölçü girişi: `m` / `cm` birim seçici alanın sağında sabit; değer mono tabular.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yumuşak köşe; yaprak, damar, kesit, mantar |
| Fotoğraf | orman altı/kabuk makro, nemli sıcak ton, doğal ışık, max %45 alan, 5px çerçeve |
| İllüstrasyon | yalnız botanik çizim: damar haritası, kesit, tohum; 1px çizgi + etiket |
| Doku | kabuk grain `.07` tüm zeminde; damar deseni yalnız hero görselinde |
| Logo alanı | Lora 600 küçük harf, sol üst 22px; mono varyant yalnız alt bilgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 6/6 hero: solda başlık + tek CTA, sağda tür kartı + damar çizgisi | `shots/01-landing.png` |
| Dashboard | orta | 3 KPI (tür sayısı, yeni kayıt, mevsim) + son gözlemler listesi | `shots/02-dashboard.png` |
| Form | düşük | tür kaydı: Latince ad, Türkçe ad, ölçü+birim, mevsim, foto | — |
| Liste / tablo | orta | 40px satır, italik Latince ad, sağda mono ölçü, mevsim chip'i | — |
| Boş durum | düşük | "bu mevsimde kayıt yok" + ilk gözlemi ekle | — |
| Onboarding | düşük | 3 adım: bölge seç → tür ekle → mevsim planı | — |
| Pricing | düşük | iki plan; kayıt limiti ve dışa aktarma satırları | — |
| Giriş / ödeme | çok düşük | tek kart, 44px alanlar, tek eylem | — |
| Modal | orta | tür detayı: foto, künye, bakım notu | — |
| Bildirim | düşük | 40px toast, sol tan şerit, 4.5sn | — |
| Hata | düşük | danger çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | bölge listesi, ölçü birimi, mevsim hatırlatması | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart/bölüm) | 880ms | `cubic-bezier(.32,.72,0,1)` | `opacity` + `translateY(30px)`, 120ms arayla |
| Scroll reveal | 950ms, `top 82%` | aynı | `translateY(36px)`, `once: true` |
| Basma | 140ms | aynı | `translateY(1px)` |
| Hover (görsel) | 320ms | aynı | `scale(1.026)` |
| Mevsim geçişi | 700ms | `cubic-bezier(.32,.72,0,1)` | `opacity` (chip rengi) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.88s · cubic-bezier(.32,.72,0,1) · 30px · stagger 0.12**; scroll **top 82% · 0.95s · 36px · once**; pin **kapalı**; hover **320ms · 1.026**.
- Yavaş kalkış, uzun süzülme: yaprak düşüşü gibi; yay ve sekme yok, hareket tek yönlü ve sakin.
- `prefers-reduced-motion`: tüm süreler 0.01ms, giriş anında, hover ölçeği 1.000.
- Bu stile yasak hareket: sürekli salınan dal, parallax, bounce, blur geçişi.

## Koyu mod

| Token | Açık (orman) | Koyu (gece ormanı) |
|---|---|---|
| `--bg` | `#1f2620` | `#0a0d08` |
| `--bg-2` | `#19201a` | `#0d110a` |
| `--surface` | `#283029` | `#131711` |
| `--surface-2` | `#313b31` | `#1b2117` |
| `--ink` | `#ecefe3` | `#f1f4e7` |
| `--ink-soft` | `#b4bfa8` | `#bcc7ae` |
| `--accent` | `#d7a469` | `#e9bd7f` |
| `--accent-ink` | `#201708` | `#171004` |

- Ölçülen koyu kontrastlar: `ink/bg` **17.54:1** · `ink-soft/bg` **11.10:1** · `accent-ink/accent` **10.83:1** · `ink-faint/bg` **6.58:1** · accent metin olarak bg'ye **11.22:1**.
- Koyu modda değişen başka ne var: kabuk zemini gece ormanına iner (`#1f2620` → `#0a0d08`, ton bandı Δ≈40), yüzeyler iki adım daha koyu, tan accent açılır (`#d7a469` → `#e9bd7f`), hairline .14 → .22. Açık/koyu ekran yan yana ayırt edilir.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="forest-bark"]` olarak durur.

## Zorunlu kurallar
- Her tür kaydı: Latince ad (italik) + Türkçe ad + ölçü (birimle) + mevsim.
- Zemin kabuk dokulu; grain `.07` her yüzeyde, fotoğrafın üstünde değil.
- Başlık Lora 600, gövde EB Garamond 400 17px/1.7; mono yalnız ölçü/etiket.
- Katman ayrımı ton + 1px çizgi; gölge yalnız kart/modal.
- Dekoratif damar çizgisi ekran başına 1, metnin altında.
- Dokunma hedefi 44px; ölçü değerleri tabular ve sağa hizalı.

## Yasaklar
- Parlak doygun yeşil ve neon accent; ikinci sıcak accent tonu.
- Geometrik/teknik sans display, büyük harf gövde.
- Cam/blur, gradient zemin, parlama (glow).
- 11px üstü panel radiusu, hap panel; yuvarlak dilin panele taşması.
- Sürekli salınan bitki animasyonu, parallax, bounce.
- Süs amaçlı yaprak ikonu çoğaltmak (ekran başına ≤2).

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 8.08:1 (`ink-soft/bg`).
- `--ink-faint` 4.67:1 — etiket ve ayırıcı için geçer; 17px gövde metni olarak kullanılmaz.
- Latince italik ad `--ink-soft` ile 8.08:1; italik + koyu zemin yorgunluğu için satır aralığı 1.5'in altına inmez.
- Odak görünürlüğü: koyu zeminde 2px tan halka (6.93:1); accent dolgulu butonda `--accent-ink` halka.
- Durum yalnız renkle verilmez: mevsim etiketi metin + renk; tür chip'i metin.
- 390px'te tablo tür kartına döner, ölçü birimi alt satıra iner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, hover ölçeği ve mevsim geçişi durur.

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
| "Karanlık tema" hissi | gövde 15px + düşük kontrast | 17px gövde, 1.7 satır, `--ink` |
| Doku kirli görünüyor | grain fotoğrafın üstünde | grain yalnız zemin katmanı |
| Serif karmaşası | aynı puntoda iki serif | hiyerarşiyi punto + ağırlıkla kur, gövde tek kesim |
| Süs fazlası | her kartta damar çizgisi | ekran başına 1 |
| Mevsim kayboluyor | yalnız renkli nokta | metin etiketi + renk |
| Koyu modda ayrım yok | gölge yetersiz | katman tonu + çizgi güçlendir |
| Mobilde taşıyor | ölçü + birim aynı satırda | birim alt satıra, tablo karta |

## Komşu stiller

- **Uyumlu:** `wabi-sabi` — doğal doku ve sakin ritim; ürün içi "el yapımı" bölümlerde eş.
- **Uyumlu:** `organic-bio` — açık zeminli organik varyant; açık/koyu bölüm geçişinde kullanılır.
- **Uyumlu:** `dark-academia` — koyu, serif okuma dili; uzun makale ekranlarında tamamlayıcı.
- **Yasak:** `claymorphism` — pastel yuvarlak gölge, kabuk dokusunu ve ciddiyeti bozar.
- **Yasak:** `acid-graphics` — neon ve glow, tan accent ile çelişir.
- **Yasak:** `pixel-art` — piksel ızgara, serif okuma ritmini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/ | yaprak/kabuk ayırt edici özellikleri ve künye alanları |
| https://www.kew.org/ | botanik kayıt dili, herbaryum künyesi |
| https://www.fs.usda.gov/research | orman ekolojisi verisi ve mevsim etiketleri |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | koyu orman zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | odak halkası görünürlüğü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Forest Bark (styles/81-forest-bark/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="forest-bark"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Lora 600) H1/H2/H3; --font-body (EB Garamond 400) gövde 17px/1.7;
  --font-mono (JetBrains Mono) etiket 11px +0.18em ve tüm ölçüler (tabular).
Yüzey: koyu peat zemin + kabuk dokusu (--grain .07). Katman: --bg / --surface / --surface-2;
  radius --radius 5px, --radius-lg 11px (chip 999px hap). Gölge yalnız kart/modal, çok yumuşak.
Renk: tek accent tan (--accent) eylem/seçim/mevsim; accent üstü metin --accent-ink.
Künye: Latince ad italik (--ink-soft) + Türkçe ad + ölçü (birim ayrı, mono tabular) + mevsim etiketi.
Hareket: enter 0.88s cubic-bezier(.32,.72,0,1) 30px stagger 0.12 · scroll top 82% 0.95s 36px once ·
  pin kapalı · hover 320ms scale 1.026; prefers-reduced-motion zorunlu.
Yasak: neon/parlak yeşil, geometrik sans display, cam/blur, gradient, 11px üstü panel radiusu, sürekli salınım, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Zemin grain `.07`, düz beyaz panel yok.
- [ ] Latince ad italik, ölçü birimle ve tabular.
- [ ] Mevsim etiketi her listede görünüyor.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="forest-bark"] {
  --bg: #1f2620; --bg-2: #19201a;
  --surface: #283029; --surface-2: #313b31;
  --ink: #ecefe3; --ink-soft: #b4bfa8; --ink-faint: #85917b;
  --accent: #d7a469; --accent-ink: #201708;
  --line: rgba(236,239,227,.15);
  --radius: 5px; --radius-lg: 11px;
  --shadow: 0 2px 10px rgba(8,12,9,.45); --shadow-hard: 0 0 0 1px rgba(215,164,105,.35);
  --font-display: "Lora", Georgia, serif;
  --font-body: "EB Garamond", Georgia, serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: .07;
  --danger: #e07a5f; --danger-ink: #1d0906;
  --ok: #9ec27a; --warn: #d9b25f;
}
```

Koyu mod bloğu `styles/81-forest-bark/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="forest-bark"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
