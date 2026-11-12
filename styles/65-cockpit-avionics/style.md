# 65 · Cockpit Avionics

> **Bir cümlede:** Her panelin bir gösterge çerçevesi taşıdığı, değerin etiket–sayı–birim üçlüsüyle okunduğu kokpit paneli arayüzü.

| | |
|---|---|
| **Hissiyat** | keskin, gergin, ölçülü, uyanık |
| **En iyi** | uçuş/operasyon kokpiti, gerçek zamanlı izleme (SCADA), görev kontrol paneli, kritik onay akışı |
| **Kaçın** | içerik/blog, e-ticaret, çocuk uygulamaları — düşük punto ve yüksek uyarıklık burada yorucu olur |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (10px etiket + yoğun koyu zemin; en düşük etkileşimli çift 8.61:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="cockpit-avionics"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Cockpit Avionics, arayüzü bir **gösterge paneli** gibi kurar: her panelin çevresinde bir bezel (çerçeve), içinde etiket–değer–birim üçlüsü, üstünde durum etiketi. Ekran üç bölgeye ayrılır — solda parametre rayı, ortada birincil görev, sağda checklist. Hiçbir değer çıplak durmaz, hiçbir kritik eylem tek tıkla olmaz.

Üç kurucu karar: (1) **bezel fiziği** — her panel dış 1px `--line` + iç 1px soluk çerçeve; aktif panel 1px cyan dış halka (`--shadow-hard`); gölge ve glow yok; (2) **mono okuma** — değerler Share Tech Mono, etiketler 10px mono büyük harf `0.2em`; gövde Inter 14px; (3) **iki adımlı onay** — geri dönüşsüz eylem `ARM → CONFIRM`; tek tıkla silme/başlatma yok.

Bedeli: ekran yoğun ve koyudur; uzun okuma için uygun değildir. Yoğunluğun "karmaşa" değil "kokpit" görünmesini sağlayan şey **bezel kenar boşluğu ve 12px gutter** disiplinidir.

### Ne değildir
- **Terminal UI (45) değildir:** terminal tek mono ailede, 32px satırda ve yeşil accent'le çalışır; burada üç aile, 34px gösterge satırı ve cyan accent vardır, paneller bezel taşır.
- **Cybercore (23) değildir:** cybercore HUD/glitch/neon glow ile atmosfer kurar; Cockpit Avionics glow ve tarama çizgisini yasaklar, değerini okunurluktan alır.
- **Cyberpunk (22) değildir:** cyberpunk çok renkli neon ve kirli doku kullanır; burada tek cyan accent + durum üçlüsü ve temiz bezel.
- **Maintenance CMMS (63) değildir:** 63 turuncu aciliyet ve iş emri kâğıdı metaforu taşır, 38px başlıkla çalışır; 65 cyan ölçüm dili ve üç bölgeli kokpit düzeni.

### Nereden gelir
Elektromekanik gösterge paneli ve ECAM/EICAS sistem sayfası geleneğinden: etiket üstte, değer ortada, birim yanda; uyarı önceliği (warning/caution/advisory) ve checklist. Bugün yeniden kullanılmasının nedeni: SCADA, NOC ve görev kontrol panelleri aynı problemi çözüyor — çok sayıda canlı değer, tek ekran, düşük hata toleransı. Klişeye dönüşmemesi için korunacak detay: **bezel + etiket–değer–birim üçlüsü** ve uyarının yanıp sönmek yerine öncelik sırasıyla listelenmesi.

### 3 saniyede tanıma testi
1. Her panelin çevresinde **çift çizgi bezel**; aktif panelde 1px cyan dış halka.
2. Değerlerin üstünde 10px büyük harf mono etiket, yanında birim — üçlü asla bozulmaz.
3. Ekran **üç bölgeye** ayrılmış: parametre rayı · birincil görev · checklist.
4. Durumlar büyük harf: `ARMED`, `ACTIVE`, `STBY`, `FAULT`; yalnız renkle değil.
5. Hareket çok hızlı: geçişler 240ms altı, değer saymaz sıçrar; glow/parlama yok.

## Görsel imza
- **Bezel çerçevesi:** panelde `border: 1px solid var(--line)` + `box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent)`; köşe 2–4px.
- **Üç bölge:** 3 / 6 / 3 kolon; bölge ayırıcı 1px `--line`, panel dışına taşmayan hizalama.
- **Etiket–değer–birim üçlüsü:** etiket 10px mono `0.2em`; değer 15–22px mono; birim 10px `--ink-faint`; üçü aynı kolonda hizalı.
- **Segment çubuk:** 4px bloklardan oluşan gösterge (10–20 segment); sürekli gradient bar yok.
- **Durum noktası + metin:** 6px kare (radius 1px) + büyük harf etiket; `FAULT` 1.2s yanıp söner, 3 turdan sonra sabitlenir.
- **Radar halkası:** hero görselinde 3 eşmerkezli 1px halka + 45° tarama çizgisi (statik, animasyonsuz).
- **Sıçrayan değer:** değer değiştiğinde 240ms boyunca `--accent` rengi; sayaç animasyonu yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a0f14` | kokpit zemini | panel zemini |
| `--bg-2` | `#10161c` | üst bar, input zemini | birincil buton |
| `--surface` | `#131a21` | panel gövdesi | sayfa zemini |
| `--surface-2` | `#1a232b` | başlık şeridi, chip, ikincil buton | metin zemini |
| `--ink` | `#e8f0f4` | ana metin, değer | dekoratif dolgu |
| `--ink-soft` | `#9fb0ba` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#6d7f8a` | birim, eksen, dekoratif ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#35d6e8` | aktif panel, birincil eylem, değer vurgusu | dekorasyon, ikinci vurgu |
| `--accent-ink` | `#032026` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(232,240,244,.15)` | bezel, bölge ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **16.68:1** · `ink-soft/bg` **8.61:1** · `accent-ink/accent` **9.64:1** · `ink-faint/bg` **4.63:1**.
- Tek vurgu kuralı: cyan yalnız aktif durum, birincil eylem ve değer vurgusu. `--warn` (amber) caution, `--danger` warning, `--ok` normal — üçü yalnız durum noktası + etiketle.
- Yasak kombinasyon: cyan ile yeşil yan yana (ayırt edilemezlik); accent üstünde `--ink-soft`; 9px altı doygun renk etiket.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rajdhani | 34px | 700 | 1.02 | 0.06em |
| H2 | Rajdhani | 22px | 700 | 1.15 | 0.04em |
| H3 | Inter | 17px | 600 | 1.25 | 0 |
| Gövde | Inter | 14px | 400 | 1.50 | 0 |
| Etiket | Share Tech Mono | 10px | 400 | 1.30 | 0.20em, büyük harf |
| Değer / okuma | Share Tech Mono | 15–22px | 400 | 1.15 | 0.04em, tabular |

- Ölçek oranı ≈ 1.4 (14 → 22 → 34); kullanılan basamaklar: 10 · 11 · 13 · 14 · 17 · 22 · 34 · (mobil 24). Sıkı ölçek kokpit yoğunluğu içindir.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 2.6vw, 34px) }`.
- Gövde metni maksimum satır uzunluğu: 70ch; checklist maddesi 44ch'te kırılır.
- Ağırlık kuralı: Rajdhani 500/700 (700 başlık), Inter 400/600, mono 400. İtalik yok; bağlantı altı çizilmez, renkle ayrılır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · 3 / 6 / 3 kokpit düzeni |
| Gutter | 12px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 3 bölge · 768–1200 2 bölge (checklist alta) · 768 altı tek bölge, sekmeli |

- Asimetri kuralı: düzen zaten asimetriktir (3/6/3); ek başına en fazla 1 ek asimetri (parametre rayında daraltma).
- Bölüm ritmi: 40px masaüstü / 28px mobil; paneller arası 12px, bölge arası 1px çizgi.
- Panel içi: 14px padding; gösterge satırı 34px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kokpit, üst bar |
| Panel | `--surface` + bezel | yok | gösterge paneli, checklist |
| Aktif panel | `--surface` + `--shadow-hard` | 1px cyan dış halka | seçili sistem sayfası |
| Katman | `--surface` + 1px `--accent` çerçeve | `var(--shadow)` hafif | modal, onay diyaloğu |

- Kenarlık formülü: dış `1px var(--line)` + iç `1px color-mix(--line 60%)`; aktif panelde dış çizgi `--accent`.
- Derinlik nereden gelir: yalnız çerçeve katmanları (bezel); glow, blur, iç parlaklık yok.
- Radius: `--radius` 2px (buton, input, chip), `--radius-lg` 4px (modal, hero çerçevesi). 4px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 34px | 8px 14px | `--radius` | 12px/700 Rajdhani büyük harf | `--accent` + `--accent-ink`, gölge yok | hover %88 · active 1px aşağı · focus 2px accent halka · disabled %40 kesikli · loading segment çubuk |
| Buton (ikincil) | 34px | 8px 14px | `--radius` | 12px/700 Rajdhani | `--surface-2` + 1px `--line` | hover çerçeve `--ink-soft` · focus accent halka |
| Input | 34px | 0 10px | `--radius` | 13px Share Tech Mono | `--bg-2` + 1px `--line` | focus accent halka + sol 2px şerit · filled sağa hizalı + üst etiket · error `E/` + danger · disabled %40 |
| Panel / kart | — | 14px | `--radius` | etiket 10px mono + değer mono | `--surface` + çift bezel | aktif: 1px cyan dış halka |
| Chip (durum) | 20px | 0 8px | `--radius` | 10px Share Tech Mono | `--surface-2` + 1px `--line` | ARMED accent çerçeve · ACTIVE accent dolgu · STBY line · FAULT danger |
| Nav (üst bar) | 44px | 0 20px | 0 | 10px mono / 12px Rajdhani | `--bg-2`, alt 1px `--line` | 3 bölge: mod · görev · UTC saat |
| Tablo satırı | 34px | 4px 10px | 0 | etiket 10px + değer 15px mono | alt 1px `--line` | değer değişimi 240ms accent vurgu · seçili satır accent sol şerit 2px |
| Modal (checklist) | — | 18px | `--radius-lg` | başlık 22px Rajdhani | 1px accent çerçeve + `--shadow-hard` | iki adım: ARM → CONFIRM, `esc` iptal |
| Toast (uyarı) | 34px | 6px 12px | `--radius` | 12px mono | `--surface-2`, sol 3px durum şeridi | 3sn · üst üste 3 · FAULT kalıcı |
| Grafik | — | — | 0 | eksen 10px mono | segment 4px blok; `--data-1…4` | radar halkası 3 halka; gradient alan yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `outline-color: var(--accent-ink)`.
- Dokunma hedefi: 34px görsel yükseklik, dokunma alanı 44×44px'e padding ile tamamlanır (kokpitte fiziksel tuş, mobilde parmak).
- Kritik eylem: `ARM` (ikincil buton) → 3 saniye içinde `CONFIRM` (birincil); süre dolarsa geri `STBY`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 16px ızgara, keskin köşe; ufuk, sürat, irtifa sembolleri; dolu ok yok |
| Fotoğraf | yok denecek kadar az (max %15); gece kokpiti, düşük doygunluk, 1px çerçeve |
| İllüstrasyon | yalnız gösterge şeması: radar halkaları, ufuk çizgisi, ölçek bantları (statik) |
| Doku | yok (`--grain: 0`); tarama çizgisi, CRT, glow yasak |
| Logo alanı | Rajdhani 700 büyük harf `0.14em`, sol üst 16px; mono varyant yalnız alt bilgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 3/6/3: solda parametre rayı, ortada başlık + tek CTA, sağda checklist | `shots/01-landing.png` |
| Dashboard | çok yüksek | gösterge paneli ızgarası, segment çubuklar, uyarı listesi öncelik sırasıyla | `shots/02-dashboard.png` |
| Form | orta | alanlar üst etiketli, birim ayrı, hata `E/` öneki | — |
| Liste / tablo | yüksek | 34px satır, etiket–değer–birim, değer değişiminde accent vurgu | — |
| Boş durum | düşük | `STBY` + "sistem beklemede" + tek eylem | — |
| Onboarding | orta | 3 adım: sistem seç → checklist → ARM ile başlat | — |
| Pricing | orta | karşılaştırma tablosu; limitler segment çubukla | — |
| Giriş / ödeme | düşük | tek panel, iki adımlı doğrulama, koyu zemin | — |
| Modal | orta | checklist: madde başına ✓/✕, ARM → CONFIRM | — |
| Bildirim | orta | 34px uyarı, sol durum şeridi, üst üste 3 | — |
| Hata | düşük | `FAULT` + etkilenen sistem + sonraki adım; kod gizlenmez | — |
| Profil / ayar | yüksek | anahtar/değer listesi, birim sistemi seçimi (m/ft, kg/lb) | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (panel) | 240ms | `cubic-bezier(0,0,.2,1)` | `opacity` + `translateY(6px)`, 55ms arayla |
| Scroll reveal | 280ms, `top 94%` | aynı | `translateY(4px)`, `once: true` |
| Basma | 70ms | aynı | `translateY(1px)` |
| Değer güncellemesi | 240ms | `linear` | `color` (accent → ink), sayı saymaz |
| Hover (görsel) | 70ms | aynı | `scale(1.004)` |
| FAULT uyarısı | 1.2s × 3 tur | `steps(1, end)` | `opacity` (sonra sabit kalır) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.24s · cubic-bezier(0,0,.2,1) · 6px · stagger 0.055**; scroll **top 94% · 0.28s · 4px · once**; pin **kapalı**; hover **70ms · 1.004**.
- Çok kısa, sıfır gecikmeli başlangıç: gösterge iğnesi gibi anında hareket eder, hedefte durur; aşırı düzeltme (overshoot) yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, FAULT yanıp sönmez (sabit danger rengi + etiket), değer anında güncellenir.
- Bu stile yasak hareket: sürekli yanıp sönen uyarı, glow nabzı, parallax, pin/scrub, gradient animasyonu.

## Koyu mod

| Token | Açık (kokpit) | Koyu (gece uçuşu) |
|---|---|---|
| `--bg` | `#0a0f14` | `#02040a` |
| `--bg-2` | `#10161c` | `#05080f` |
| `--surface` | `#131a21` | `#080d16` |
| `--surface-2` | `#1a232b` | `#0d1420` |
| `--ink` | `#e8f0f4` | `#f4fbff` |
| `--ink-soft` | `#9fb0ba` | `#b0c4d2` |
| `--accent` | `#35d6e8` | `#7ff0ff` |
| `--accent-ink` | `#032026` | `#021a22` |

- Ölçülen koyu kontrastlar: `ink/bg` **19.61:1** · `ink-soft/bg` **11.40:1** · `accent-ink/accent` **13.47:1** · `ink-faint/bg` **6.43:1** (ΔL açık→koyu **-0.040**; ek olarak zemin mavi-yeşil tondan soğuk laciverte, cyan `#7ff0ff`e kayar).
- Koyu modda değişen başka ne var: bezel çizgisi %15 → %20 opaklık (panel ayrımı korunur), zemin tonu lacivert banda kayar, cyan `#7ff0ff`e açılır, gölge opaklığı artar; FAULT kırmızısı aynı kalır (uyarı rengi kimliği).
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="cockpit-avionics"]` olarak durur.

## Zorunlu kurallar
- Her gösterge etiket + değer + birim üçlüsü; birimsiz değer yok.
- Her panel bezel taşır (dış 1px + iç 1px); aktif panelde 1px cyan dış halka.
- Durum etiketleri büyük harf mono: `ARMED` · `ACTIVE` · `STBY` · `FAULT`; renk + metin birlikte.
- Geri dönüşsüz eylem iki adımlı: `ARM` → `CONFIRM` (3 saniye penceresi).
- Değer saymaz, sıçrar; animasyon ≤ 240ms.
- Kokpit düzeni üç bölge; bölge sırası ekranlar arasında değişmez.

## Yasaklar
- Neon glow, tarama çizgisi, CRT, sürekli yanıp sönen uyarı.
- 4px üstü radius, yuvarlak kart, yumuşak/geniş gölge, cam/blur.
- Serif/geometrik display, italik, altı çizili bağlantı.
- 9px altı metin; 10px yalnız etiket.
- Tek tıkla geri dönüşsüz eylem, onaysız checklist geçişi.
- Yalnız renkle durum; cyan+yeşil yan yana.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 8.61:1 (`ink-soft/bg`).
- `--ink-faint` 4.63:1 — birim ve eksen için geçer; 14px altı gövde metni olarak kullanılmaz.
- 10px etiketler yalnız büyük harf + `0.2em` tracking ile; uzun metin asla 10px olmaz.
- Durum yalnız renkle verilmez: kare nokta + büyük harf etiket + (FAULT'ta) 3 tur yanıp sönme.
- Odak görünürlüğü: koyu zeminde 2px cyan halka; accent dolgulu butonda `--accent-ink` halka (cyan halka cyan butonda kaybolur).
- 390px'te üç bölge sekmeye dönüşür; hiçbir gösterge 34px satırın altına inmez.
- `prefers-reduced-motion` açıkken tüm geçişler durur, FAULT sabit renge döner.

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
| "Oyun HUD'u" hissi | glow/tarama eklendi | glow yasak; derinlik yalnız bezel |
| Değerler okunmuyor | 9px etiket + düşük kontrast | etiket 10px + `--ink-soft`, değer 15px mono |
| Panel sınırı kayboluyor | tek çizgi yetersiz | dış 1px + iç 1px bezel |
| Uyarı bombardımanı | her şey FAULT | öncelik: warning > caution > advisory, tek liste |
| Yanıp sönme yoruyor | sürekli blink | 3 tur sonra sabit + etiket |
| Yanlışlıkla başlatma | tek tık | ARM → CONFIRM, 3sn pencere |
| Mobilde sıkışıyor | 3 bölge aynı ekranda | sekmeli tek bölge, 34px satır korunur |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı teknik koyu dil; log/CLI yüzeyi olarak alt panelde kullanılır.
- **Uyumlu:** `cybercore` — atmosferik teknik varyant; dikkat: glow eklenirse bu stilin kuralı bozulur.
- **Uyumlu:** `scandinavian-dark` — sakin koyu zemin; rapor/özet ekranlarında eş.
- **Yasak:** `claymorphism` — yumuşak pastel ve yuvarlak dil, bezel fiziğini yok eder.
- **Yasak:** `memphis` — dekoratif geometri, gösterge okunurluğunu bozar.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek cyan accent ve uyarı önceliğini çökertir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://skybrary.aero/articles/electronic-central-aircraft-monitor-ecam | ECAM sistem sayfası, uyarı önceliği ve checklist mantığı |
| https://www.faa.gov/aircraft/air_cert/design_approvals/human_factors | kokpit gösterge okunurluğu ve iş yükü ölçütleri |
| https://www.easa.europa.eu/en | kritik eylem onayı ve uyarı hiyerarşisi yaklaşımı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | koyu zeminde 10–14px metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | klavye odak halkası görünürlüğü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Cockpit Avionics (styles/65-cockpit-avionics/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="cockpit-avionics"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Rajdhani 700) H1/H2 ve modal başlığında (büyük harf +0.06em);
  --font-body (Inter 400/600) gövde 14px/1.5; --font-mono (Share Tech Mono) tüm etiket (10px +0.2em), değer ve birim.
Yüzey: bezel = dış 1px var(--line) + iç 1px color-mix(var(--line) 60%, transparent); aktif panelde --shadow-hard (1px cyan dış halka).
  radius --radius 2px, --radius-lg 4px. Glow, blur, cam, gradient yasak.
Düzen: 3/6/3 kokpit bölgeleri — parametre rayı · birincil görev · checklist; gutter 12px, panel padding 14px.
Gösterge: etiket (10px mono üstte) + değer (15–22px mono, sağa hizalı) + birim (10px --ink-faint); segment çubuk 4px blok.
Durum: ARMED / ACTIVE / STBY / FAULT — kare nokta + büyük harf etiket; FAULT 1.2s x3 tur sonra sabit.
Kritik eylem iki adımlı: ARM → CONFIRM (3sn pencere); tek tıkla geri dönüşsüz işlem yok.
Hareket: enter 0.24s cubic-bezier(0,0,.2,1) 6px stagger 0.055 · scroll top 94% 0.28s 4px once ·
  pin kapalı · hover 70ms scale 1.004; değer saymaz sıçrar; prefers-reduced-motion zorunlu.
Yasak: neon glow, tarama çizgisi, 4px üstü radius, italik, 9px metin, sürekli blink, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Her panelde bezel var; aktif panel cyan halka ile ayrılıyor.
- [ ] Her gösterge etiket–değer–birim üçlüsü taşıyor.
- [ ] Durum etiketleri büyük harf ve renkle birlikte.
- [ ] Kritik eylem iki adımlı onaydan geçiyor.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız birim/eksen.
- [ ] 390px'te sekmeli düzende taşma yok; dokunma hedefi ≥ 44px.
- [ ] `prefers-reduced-motion` açıkken blink ve geçişler duruyor.

## Token

```css
[data-style="cockpit-avionics"] {
  --bg: #0a0f14; --bg-2: #10161c;
  --surface: #131a21; --surface-2: #1a232b;
  --ink: #e8f0f4; --ink-soft: #9fb0ba; --ink-faint: #6d7f8a;
  --accent: #35d6e8; --accent-ink: #032026;
  --line: rgba(232,240,244,.15);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 3px rgba(0,0,0,.5); --shadow-hard: 0 0 0 1px rgba(53,214,232,.45);
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .06em; --blur: 0px; --grain: 0;
  --danger: #ff6b6b; --danger-ink: #1a0707;
  --ok: #4fd98a; --warn: #ffb020;
}
```

Koyu mod bloğu `styles/65-cockpit-avionics/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="cockpit-avionics"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
