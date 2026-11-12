# 84 · Volcanic Mineral

> **Bir cümlede:** Bazalt siyahı keskin yüzeylerde her örneğin katman kalınlığı ve mineral yüzdesiyle kaydedildiği volkanik kesit arayüzü.

| | |
|---|---|
| **Hissiyat** | sert, keskin, yoğun, jeolojik |
| **En iyi** | jeoloji/madencilik verisi, volkan izleme paneli, malzeme analizi, örnek kataloğu |
| **Kaçın** | yumuşak marka deneyimi, çocuk/wellness, açık zemin pazarlama — keskin siyah burada "sert" değil "soğuk" olur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 8.12:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="volcanic-mineral"]` |
| **Kompozisyon** | `split` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Volcanic Mineral, arayüzü bir **jeolojik kesit** gibi kurar: her örnek bir kart, kartın üstünde mineral dağılımını gösteren 3px şerit, içinde katman kalınlıkları ve yüzde değerleri. Köşe yuvarlatma yoktur (radius 0–2px); yüzeyler bazalt gibi mat ve keskindir. Accent, kesitin içinden geçen **magma turuncusu**dur ve yalnız eylem/aktif/uyarı için kullanılır.

Üç kurucu karar: (1) **keskinlik** — 0px köşe, 1px çizgi, gölge neredeyse yok; (2) **geniş teknoloji yazısı** — Michroma 400 büyük harf başlık (fasetli, geniş), Space Grotesk gövde, Share Tech Mono ölçüm; (3) **iki hız** — giriş 680ms `cubic-bezier(1,0,.2,1)` anında kalkar ve sert durur; pin scrub 0.35 ile kesit ekranda sabitlenip kayar.

Bedeli: keskin siyah ekran uzun metinde yorar; bu yüzden gövde 15px Space Grotesk 500 ve 1.58 satır aralığı zorunludur. Uzun makale bu stile uygun değildir.

### Ne değildir
- **Dark Academia (33) değildir:** parşömen/altın, serif ve sıcak loş ışıkla kurulur; burada bazalt siyahı, magma turuncusu, Michroma ve keskin kesit çizgileri var.
- **Scandinavian Dark (40) değildir:** o stil sessiz lüks için geniş boşluk ve ince hairline kullanır; Volcanic Mineral yoğun ve fasetlidir, radius 0'dır.
- **West African Pattern (71) değildir:** 71 desen ve altınla sıcak bir ritim kurar; 84 desensizdir, kesit şeması ve mineral yüzdeleriyle çalışır.
- **Acid Graphics (15) değildir:** 15 asit yeşiliyle provokasyon arar; burada tek magma turuncusu ve ölçüm disiplini var.

### Nereden gelir
Jeoloji kesit çizimi ve volkan gözlemevi raporundan: örnek no, kaya türü, katman kalınlığı, mineral yüzdesi, sıcaklık. Bugün yeniden kullanılmasının nedeni: malzeme/jeoloji yazılımı çoğunlukla genel "dashboard" estetiğinde ve kesitin kendisini göstermiyor; kullanıcı katmanı ve yüzdeyi yan yana görmek istiyor. Klişeye dönüşmemesi için korunacak detay: **3px mineral şeridi** ve radius 0 kuralı.

### 3 saniyede tanıma testi
1. Hiçbir köşe yuvarlatılmamış (0–2px); kenarlar keskin.
2. Kart üstünde 3px mineral şeridi ve sağ üstte ölçüm etiketi var.
3. Accent magma turuncusu; başka sıcak renk yok.
4. Başlıklar geniş, fasetli teknoloji yazısı (Michroma) büyük harf.
5. Her değer mono tabular ve birimli: `120 mm`, `%38`, `860 °C`.

## Görsel imza
- **Keskin köşe:** radius 0 (kart, buton, input, chip), 2px yalnız yüzen katman (modal/menü).
- **Mineral şeridi:** kart üstünde 3px yüksekliğinde `--accent` %70 dolgu; kesitin mineral dağılımını temsil eder.
- **Geniş teknoloji başlık:** Michroma 400, H1 48px/1.02, `0.04em`, büyük harf; ağırlık yok, hiyerarşi punto + aralıkla.
- **Fasetli gölge:** yalnız modal/menüde `0 8px 22px -12px` — aşağı ve sert; panellerde gölge yok.
- **Magma halkası:** aktif örnek/kart `--shadow-hard` = 1px magma halkası (gölge değil).
- **Kesit ızgarası:** hero görselinde 15° eğimli 1px katman çizgileri, `--line` opaklığında.
- **Bazalt grain:** `--grain: .02`; fotoğrafın üstünde kullanılmaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#14120f` | `#040403` | kart zemini |
| `--bg-2` | `#0e0d0b` | `#0b0a08` | birincil buton |
| `--surface` | `#1c1916` | `#100e0b` | sayfa zemini |
| `--surface-2` | `#26221d` | `#191512` | metin zemini |
| `--ink` | `#f0eae0` | `#f8f3ea` | dekoratif dolgu |
| `--ink-soft` | `#b6a998` | `#b9b0a1` | accent dolgu üstü |
| `--ink-faint` | `#877d6d` | `#8b8276` | gövde, etkileşimli metin |
| `--accent` | `#e0572a` | `#ff8a4d` | dekoratif dolgu (geniş alan) |
| `--accent-ink` | `#120603` | `#140703` | accent olmayan zemin |
| `--line` | `rgba(240,234,224,.14)` | `rgba(248,243,234,.22)` | metin |

- Ölçülen kontrast: `ink/bg` **15.63:1** · `ink-soft/bg` **8.12:1** · `accent-ink/accent` **5.29:1** · `ink-faint/bg` **4.62:1** · accent metin olarak bg'ye **4.96:1**.
- Tek vurgu kuralı: magma turuncusu yalnız eylem/aktif/uyarı ve 3px mineral şeridi. `--warn` (kükürt sarısı), `--ok` (zeytin), `--danger` (parlak kırmızı) yalnız durum etiketi.
- Yasak kombinasyon: turuncu ile kükürt sarısı yan yana; accent üstünde `--ink-soft`; geniş alanda accent dolgu.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma | 48px | 400 (tek kesim) | 1.02 | 0.04em, büyük harf |
| H2 | Michroma | 28px | 400 | 1.10 | 0.03em, büyük harf |
| H3 | Space Grotesk | 19px | 700 | 1.25 | 0 |
| Gövde | Space Grotesk | 15px | 500 | 1.58 | 0 |
| Etiket | Share Tech Mono | 10px | 400 | 1.3 | 0.20em, büyük harf |
| Ölçüm / tablo | Share Tech Mono | 13px | 400 | 1.4 | 0.02em, tabular |

- Ölçek oranı ≈ 1.6 (15 → 28 → 48); kullanılan basamaklar: 10 · 11 · 13 · 15 · 19 · 28 · 48 · (mobil 28).
- Ölçü önerisi: `h1 { font-size: clamp(28px, 4vw, 48px) }`.
- Gövde metni maksimum satır uzunluğu: 66ch; kesit açıklaması 48ch'te kırılır.
- Ağırlık kuralı: Michroma tek kesim (400), Space Grotesk 500/700, mono 400. İtalik yok; büyük harf yalnız başlık ve etiket.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 4/8, kesit listesi tam genişlik |
| Gutter | 16px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, kesit kartı tam genişlik |

- Asimetri kuralı: ekran başına 1 asimetrik blok (hero 4/8); kesit çizgileri 15° eğimle kayar.
- Bölüm ritmi: 60px masaüstü / 36px mobil; bölümler arasında 1px çizgi.
- Kart içi 20px; katman satırı 36px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | bazalt zemini |
| Kart | `--surface` + 1px `--line` | yok | kesit kartı, panel |
| Aktif kart | `--surface-2` + `--shadow-hard` | 1px magma halka | seçili örnek |
| Yüzen katman | `--surface` + 1px `--accent` | `var(--shadow)` sert | modal, menü |

- Kenarlık formülü: `1px solid var(--line)`; aktif örnekte `--shadow-hard`.
- Derinlik nereden gelir: yüzey tonu + 1px çizgi + 3px mineral şeridi; blur, iç gölge, parlama yok.
- Radius: `--radius` 0px (kart, buton, input, chip), `--radius-lg` 2px (modal, menü). 2px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 10px 18px | 0 | 12px/700 Space Grotesk büyük harf | `--accent` + `--accent-ink`, gölge yok | hover %88 + alt çizgi · active 1px aşağı · focus 2px accent halka · disabled %40 · loading dilimli bar |
| Buton (ikincil) | 40px | 10px 16px | 0 | 12px/700 Space Grotesk | şeffaf + 1px `--ink` | hover `--surface-2` · focus accent halka |
| Input | 40px | 0 12px | 0 | 14px Share Tech Mono | `--bg-2` + 1px `--line` | focus accent halka + alt 2px magma · error danger · disabled %40 |
| Kart (kesit) | — | 20px | 0 | başlık 19px Space Grotesk 700 | `--surface` + 1px `--line`, gölge yok | üstte 3px mineral şeridi · aktif: 1px magma halka |
| Chip (kaya türü) | 20px | 0 8px | 0 | 10px Share Tech Mono | `--surface-2` + 1px `--line` | bazalt · andezit · tüf · obsidyen · sülfür |
| Nav (üst bar) | 52px | 0 24px | 0 | 10px mono / 13px Space Grotesk | `--bg`, alt 1px `--line` | aktif 2px magma alt çizgi · sağda örnek no |
| Tablo satırı | 36px | 6px 10px | 0 | 13px mono tabular | alt 1px `--line` | hover sol 2px magma · seçili `--surface-2` |
| Modal | — | 22px | 2px | başlık 28px Michroma | 1px accent + `var(--shadow)` | kesit detayı, kapatma 40px |
| Toast | 36px | 8px 12px | 0 | 12px mono | `--surface`, sol 3px magma şerit | 3.5sn · üst üste 3 |
| Grafik | — | — | 0 | eksen 10px mono | dilimli çubuk 2px aralık; `--data-1…4` | gradient alan yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 40px görsel, 44×44px hedef (dikey padding ile).
- Mineral şeridi: kartın en üstünde 3px; kesitin ortalama mineral oranını temsil eder, dekorasyon değil.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 20px ızgara, tam keskin köşe; kristal, çatlak, termometre, katman |
| Fotoğraf | bazalt/lav makro, düşük anahtar, tek magma vurgusu, max %40 alan, çerçevesiz (kenar çizgisi) |
| İllüstrasyon | yalnız kesit şeması: katman kalınlığı, mineral dilimi, 15° eğimli çizgi |
| Doku | bazalt tozu grain `.02`; çatlak deseni yalnız hero görselinde |
| Logo alanı | Michroma 400 büyük harf `0.14em`, sol üst 20px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 4/8 hero: solda künye, sağda kesit görseli + 15° katman çizgileri | `shots/01-landing.png` |
| Dashboard | yüksek | örnek ızgarası + mineral dağılımı + sıcaklık profili | `shots/02-dashboard.png` |
| Form | orta | örnek girişi: kaya türü, katman, mineral %, sıcaklık | — |
| Liste / tablo | yüksek | 36px satır, mineral % mono sağa hizalı, örnek no | — |
| Boş durum | düşük | "bu bölgede örnek yok" + yeni örnek ekle | — |
| Onboarding | orta | 3 adım: saha seç → örnek ekle → kesit tanımla | — |
| Pricing | orta | plan karşılaştırma; örnek/analiz limitleri | — |
| Giriş / ödeme | düşük | tek kart, keskin köşe, tek eylem | — |
| Modal | orta | kesit detayı: katman listesi + ölçümler | — |
| Bildirim | orta | 36px toast, sol magma şerit, 3.5sn | — |
| Hata | düşük | danger çerçeve + neden + yeniden dene | — |
| Profil / ayar | orta | saha listesi, birim sistemi (mm/cm/m), eşikler | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart) | 680ms | `cubic-bezier(1,0,.2,1)` | `opacity` + `translateY(12px)`, 150ms arayla |
| Scroll reveal | 300ms, `top 74%` | aynı | `translateY(64px)`, `once: true` |
| Pin / scrub | 0.35 scrub, +240% mesafe | doğrusal | kesit sabitlenir, katman çizgileri kayar |
| Basma | 120ms | aynı | `translateY(1px)` |
| Hover (görsel) | 460ms | aynı | `scale(1.006)` |
| Mineral şeridi | 680ms | `steps(5, end)` | şerit dilim dilim dolar |

- Ölçülen imza: enter **0.68s · cubic-bezier(1,0,.2,1) · 12px · stagger 0.15**; scroll **top 74% · 0.3s · 64px · once**; pin **açık · scrub 0.35 · +240%**; hover **460ms · 1.006**.
- Anında kalkış, sert duruş: patlama gibi başlar, hedefte bir kerede durur; aşırı düzeltme yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub kapalı, şerit anında dolar.
- Bu stile yasak hareket: sürekli titreşen lav, bounce, yumuşak blur/gradient geçişi, yatay parallax.

## Koyu mod

| Token | Açık (bazalt) | Koyu (derin bazalt) |
|---|---|---|
| `--bg` | `#14120f` | `#040403` |
| `--bg-2` | `#0e0d0b` | `#0b0a08` |
| `--surface` | `#1c1916` | `#100e0b` |
| `--surface-2` | `#26221d` | `#191512` |
| `--ink` | `#f0eae0` | `#f8f3ea` |
| `--ink-soft` | `#b6a998` | `#b9b0a1` |
| `--accent` | `#e0572a` | `#ff8a4d` |
| `--accent-ink` | `#120603` | `#140703` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.56:1** · `ink-soft/bg` **9.56:1** · `accent-ink/accent` **8.47:1** · `ink-faint/bg` **5.42:1** · accent metin olarak bg'ye **8.79:1**.
- Koyu modda değişen başka ne var: bazalt siyaha çöker (`#14120f` → `#040403`, ton bandı Δ≈31) ve ayrımı accent taşır: `#e0572a` → `#ff8a4d` (%50 daha parlak), yüzey kademeleri iki adım koyu, hairline .18 → .22. Açık/koyu ekran yan yana ayırt edilir.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="volcanic-mineral"]` olarak durur.

## Zorunlu kurallar
- Radius 0–2px; yuvarlatılmış köşe ve hap buton yok.
- Her örnek kaydı: örnek no + kaya türü + katman kalınlığı + mineral yüzdesi.
- Accent magma yalnız eylem/aktif/uyarı ve 3px mineral şeridi.
- Katman çizgileri 15° eğimli ve 1px; kesit dili her ekranda aynı.
- Değerler mono tabular + birim (mm, %, °C).
- Bazalt grain yalnız zemin katmanında; gövde 15px Space Grotesk 500.

## Yasaklar
- 2px üstü radius, hap form, yumuşak gölge.
- Cam/blur, glow, gradient zemin/iç dolgu.
- Serif display, italik, sentetik kalın Michroma.
- Turuncu + kükürt sarısı yan yana; geniş accent dolgu.
- Sürekli titreşen lav/parçacık, bounce, yatay parallax.
- Büyük harf gövde, 13px altı metin.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 8.12:1 (`ink-soft/bg`).
- `--ink-faint` 4.62:1 — etiket/eksen için geçer; gövde metni olarak kullanılmaz.
- Accent metin olarak 4.96:1, dolgu üstünde 5.29:1 — ikisi de geçer; accent'te 11px altı metin kullanılmaz.
- Durum yalnız renkle verilmez: kaya türü chip metni, uyarı etiketi + 3px şerit.
- Odak görünürlüğü: 2px magma halka (4.96:1) + 2px offset; magma dolgulu butonda `--accent-ink` halka.
- 390px'te kesit kartı tam genişlik, tablo 36px satırdan karta döner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub ve şerit dolumu durur.

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
| "Oyun HUD'u" hissi | glow/neon eklendi | düz dolgu, glow yasak |
| Okunmuyor | 13px altı gövde | 15px Space Grotesk 500, 1.58 satır |
| Kesit dili kayboluyor | eğim farklı | tüm katman çizgileri 15° |
| Fazla turuncu | accent geniş alanda | accent yalnız eylem/şerit |
| Sertlik "ucuz" görünüyor | yuvarlak köşe karışmış | radius 0–2px sabit |
| Koyu modda katman görünmüyor | çizgi opaklığı düşük | koyu blokta %16 + grain artışı |
| Mobilde taşıyor | 12 kolon kesit | tek kolon + kart |

## Komşu stiller

- **Uyumlu:** `dark-academia` — koyu, ciddi zemin; uzun rapor bölümlerinde eş.
- **Uyumlu:** `scandinavian-dark` — sakin koyu yüzey; özet ekranlarında tamamlayıcı.
- **Uyumlu:** `machined-metal-panel` — keskin yüzey ve teknik ölçüm dili; cihaz tarafında eş.
- **Yasak:** `claymorphism` — yuvarlak pastel gölge, keskin kesit dilini yok eder.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek magma accent kuralını bozar.
- **Yasak:** `frutiger-aero` — parlak cam ve gradyan, bazalt matlığıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.usgs.gov/programs/VHP | lav/bazalt ölçüm terminolojisi, tehlike seviyesi etiketleri |
| https://volcano.si.edu/ | volkan kaydı künyesi, örnek numaralandırma |
| https://www.bgs.ac.uk/ | kaya türü sınıflandırması ve mineral yüzdesi sunumu |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | koyu bazalt zemininde metin kontrastı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px kesit çizgisi ve odak halkası |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Volcanic Mineral (styles/84-volcanic-mineral/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="volcanic-mineral"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400, tek kesim) H1/H2 büyük harf; --font-body (Space Grotesk 500/700) gövde 15px/1.58;
  --font-mono (Share Tech Mono) etiket 10px +0.2em ve tüm ölçüm değerleri (tabular).
Yüzey: bazalt siyahı mat zemin, --grain .02. radius 0 (kart/buton/input/chip), --radius-lg 2px (modal/menü) — ara değer yok.
  Gölge yalnız modal/menüde sert ve aşağı; aktif örnekte gölge değil --shadow-hard (1px magma halka).
Renk: tek accent magma (--accent); accent üstü --accent-ink; turuncu + sarı yan yana yasak.
Kesit: her örnekte örnek no + kaya türü (chip) + katman kalınlığı + mineral yüzdesi; kart üstünde 3px mineral şeridi; çizgiler 15°.
Hareket: enter 0.68s cubic-bezier(1,0,.2,1) 12px stagger 0.15 · scroll top 74% 0.3s 64px once ·
  pin açık scrub 0.35 +240% · hover 460ms scale 1.006; prefers-reduced-motion zorunlu.
Yasak: yuvarlak köşe, hap buton, cam/blur, glow, gradient, serif display, titreşen lav, bounce.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm köşeler 0–2px; hap buton yok.
- [ ] Kart üstünde 3px mineral şeridi var.
- [ ] Her örnekte kaya türü + katman + mineral yüzdesi.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="volcanic-mineral"] {
  --bg: #14120f; --bg-2: #0e0d0b;
  --surface: #1c1916; --surface-2: #26221d;
  --ink: #f0eae0; --ink-soft: #b6a998; --ink-faint: #877d6d;
  --accent: #e0572a; --accent-ink: #120603;
  --line: rgba(240,234,224,.14);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 8px 22px -12px rgba(0,0,0,.9); --shadow-hard: 0 0 0 1px rgba(224,87,42,.5);
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: .02;
  --danger: #ff6b5a; --danger-ink: #170704;
  --ok: #8fae5a; --warn: #d8b04a;
}
```

Koyu mod bloğu `styles/84-volcanic-mineral/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="volcanic-mineral"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
