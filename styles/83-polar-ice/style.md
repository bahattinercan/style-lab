# 83 · Polar Ice

> **Bir cümlede:** Buz plakası gibi keskin, yüksek anahtarlı bir zeminde her ölçümün etiket-değer-birim üçlüsüyle okunduğu kutup veri arayüzü.

| | |
|---|---|
| **Hissiyat** | soğuk, keskin, sessiz, ölçülü |
| **En iyi** | iklim/buzul verisi, kutup istasyonu paneli, sensör & eşik izleme, bilimsel rapor |
| **Kaçın** | sıcak marka deneyimi, etkinlik/oyun, duygusal onboarding — burada "soğuk" değil "mesafeli" olur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.78:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="polar-ice"]` |
| **Kompozisyon** | `split` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Polar Ice, arayüzü **buz plakası** gibi kurar: her panel ince bir çizgiyle ayrılmış, neredeyse gölgesiz bir plaka; içindeki her ölçüm etiket + değer + birim üçlüsü olarak durur. Zemin yüksek anahtardır (high-key) — neredeyse beyaz, soğuk mavi bir buz yüzeyi.

Üç kurucu karar: (1) **iki radius kuralı** — panel 10px, iç ölçüm kutusu 2px; arada değer yok, bu ikilik "plaka içinde plaka" hissini kurar; (2) **gölgesizlik** — ayrım 1px çizgi + 2px ton; gölge yalnız yüzen katmanda, buz da gölge yapmaz; (3) **keskin hareket** — giriş 320ms, `cubic-bezier(.15,1,.3,1)`: ani kırılma, hemen oturma; buz esnemez, yay yok.

Bedeli: düşük kontrastlı bir zemin üzerinde ince çizgi çok şey taşır; çizgi kalınlığı 2px'e çıkarsa dil "tablo"ya döner. 13px altı metin yasak.

### Ne değildir
- **Glassmorphism (08) değildir:** cam/blur ve renkli ışık kırılması kullanır; Polar Ice'te `--blur: 0`, yüzeyler opak ve yalnız çizgiyle ayrılır.
- **Utility (44) değildir:** Utility genel ürün arayüzüdür, mavi accent ve 680px ölçüyle çalışır; burada buz mavisi accent, iki radius kuralı ve ölçüm üçlüsü vardır.
- **Frutiger Aero (25) değildir:** aero parlak cam, gradyan ve yuvarlak formlarla kurulur; Polar Ice mat, keskin ve gölgesizdir.
- **Lab Instrument (50) değildir:** 50 mikroskop/ölçüm cihazı panelidir ve Michroma ile kurulur; 83 kutup verisi dilidir, Space Grotesk + Space Mono kullanır.

### Nereden gelir
Kutup araştırma istasyonlarının veri panolarından ve buz çekirdeği (ice core) raporlarından: sıcaklık, kalınlık, erime, çatlak; sabit sütunlu ölçüm tabloları. Bugün yeniden kullanılmasının nedeni: iklim verisi sunumu çoğu zaman "kurumsal rapor" estetiğine sıkışıyor; yüksek anahtar, soğuk ve sessiz bir dil verinin kendisini öne çıkarıyor. Klişeye dönüşmemesi için korunacak detay: **iki radius kuralı** ve cam/blur yasağı.

### 3 saniyede tanıma testi
1. Zemin neredeyse beyaz-soğuk mavi; paneller ince 1px çizgiyle ayrılmış, gölge yok.
2. Panel köşesi 10px, iç kutular 2px — iki radius dışında değer yok.
3. Her ölçümde üstte 10px mono büyük harf etiket, yanda mono değer, sabit birim sütunu.
4. Accent buz mavisi; sıcak renk yalnız uyarı/hata durumunda.
5. Frost dokusu zeminin tamamında çok hafif; hiçbir yüzeyde parlama/cam efekti yok.

## Görsel imza
- **İki radius:** panel/kart 10px, iç ölçüm kutusu/input 2px; buton 2px. Arada değer yok.
- **Gölgesiz plaka:** `1px solid var(--line)` + 2px açık ton; gölge yalnız modal/menüde.
- **Ölçüm üçlüsü:** etiket 10px `Space Mono` büyük harf `0.2em`, değer mono sağa hizalı, birim sabit sütunda.
- **Buz halkası:** seçili panel/aktif ölçüm `--shadow-hard` = 1px buz mavisi halka (gölge değil).
- **Kristal ızgara:** hero görselinde 24px aralıklı 1px altıgen/çapraz örgü, %14 opak.
- **Frost doku:** `--grain: .015` tüm zeminde; fotoğrafın üstünde kullanılmaz.
- **Eşik çizgisi:** grafiklerde 1px kesikli `--warn`; değer etiketi çizginin sağ ucunda mono 10px.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eaf3f8` | buz zemini | kart zemini |
| `--bg-2` | `#dceaf2` | bölüm bandı, grafik zemini | birincil buton |
| `--surface` | `#f9fcfe` | panel, form, tablo | sayfa zemini |
| `--surface-2` | `#eef5fa` | iç ölçüm kutusu, chip, hover | metin zemini |
| `--ink` | `#0e2733` | metin, değer | dekoratif dolgu |
| `--ink-soft` | `#45626f` | ikincil metin, etiket | accent dolgu üstü |
| `--ink-faint` | `#6c8794` | birim sütunu, eksen, ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#096d8a` | birincil eylem, seçim, eşik | dekoratif dolgu |
| `--accent-ink` | `#f2fbfd` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(14,39,51,.14)` | panel/plaka çerçevesi | metin |

- Ölçülen kontrast: `ink/bg` **13.76:1** · `ink-soft/bg` **5.78:1** · `accent-ink/accent` **5.61:1** · `ink-faint/bg` **3.38:1** · accent metin olarak bg'ye **5.24:1**.
- Tek vurgu kuralı: buz mavisi yalnız eylem/seçim/eşik. `--warn` (hardal), `--danger` (koyu kırmızı), `--ok` (koyu turkuaz) yalnız durum etiketi ve eşik çizgisi.
- Yasak kombinasyon: accent üstünde `--ink-soft`; accent ile `--ok` yan yana; `--ink-faint` gövde metni; sıcak turuncu accent.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Grotesk | 40px | 700 | 1.08 | -0.02em |
| H2 | Space Grotesk | 24px | 700 | 1.18 | -0.01em |
| H3 | Inter | 18px | 600 | 1.3 | 0 |
| Gövde | Inter | 15px | 400 | 1.60 | 0 |
| Etiket | Space Mono | 10px | 700 | 1.3 | 0.20em, büyük harf |
| Ölçüm / tablo | Space Mono | 13px | 400 | 1.4 | 0.02em, tabular |

- Ölçek oranı ≈ 1.6 (15 → 24 → 40); kullanılan basamaklar: 10 · 11 · 13 · 15 · 18 · 24 · 40 · (mobil 26).
- Ölçü önerisi: `h1 { font-size: clamp(26px, 3.2vw, 40px) }`.
- Gövde metni maksimum satır uzunluğu: 68ch; tablo hücresi sarmaz, birim sütunu sabit 44px.
- Ağırlık kuralı: Space Grotesk 700 display, Inter 400/600, Space Mono 400/700. İtalik yok; bağlantı altı çizilmez, renkle ayrılır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · veri ızgarası 4×3 simetrik, hero 7/5 |
| Gutter | 12px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon (veri ızgarası 3×4) · 768 altı tek kolon, tablo yatay kaydırır |

- Asimetri kuralı: yalnız hero 7/5; veri ızgarası her zaman simetrik (kristal simetrisi).
- Bölüm ritmi: 56px masaüstü / 32px mobil; panel arası 12px, bölüm arası 1px çizgi.
- Kart içi 18px; ölçüm kutusu içi 10px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | buz yüzeyi |
| Plaka | `--surface` + 1px `--line` | yok | panel, tablo, form |
| İç kutu | `--surface-2` | yok | ölçüm kutusu, chip, grafik zemini |
| Yüzen katman | `--surface` + 1px `--accent` | `var(--shadow)` 1–2px | modal, menü |

- Kenarlık formülü: plaka `1px solid var(--line)`; seçili plaka `--shadow-hard` (1px buz halkası).
- Derinlik nereden gelir: yalnız iki ton ve çizgi; gölge, blur, parlama yok.
- Radius: `--radius` 2px (buton, input, iç kutu), `--radius-lg` 10px (panel, modal). 10px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 10px 18px | `--radius` | 13px/600 Inter | `--accent` + `--accent-ink`, gölge yok | hover %90 · active 1px aşağı · focus 2px accent halka · disabled %42 · loading kar tanesi |
| Buton (ikincil) | 40px | 10px 16px | `--radius` | 13px/600 Inter | şeffaf + 1px accent çerçeve | hover `--surface-2` · focus accent halka |
| Input | 40px | 0 12px | `--radius` | 14px Space Mono | `--surface` + 1px `--line` | focus accent halka · filled birim sabit sütun · error danger · disabled %42 |
| Panel / kart | — | 18px | `--radius-lg` | başlık 18px Inter 600 | `--surface` + 1px `--line`, gölge yok | seçili: 1px buz halkası |
| Chip (buz türü) | 20px | 0 8px | 2px | 10px/700 Space Mono | `--surface-2` + 1px `--line` | deniz buzu · buzul · kar · erime · çatlak |
| Nav (üst bar) | 48px | 0 24px | 0 | 10px mono / 13px Inter | `--bg`, alt 1px `--line` | aktif 2px accent alt çizgi · sağda istasyon saati |
| Tablo satırı | 34px | 4px 10px | 0 | etiket 10px + değer 13px mono | alt 1px `--line` | hover `--surface-2` · seçili accent sol şerit 2px |
| Modal | — | 20px | `--radius-lg` | başlık 24px Space Grotesk | 1px accent çerçeve + hafif gölge | kesit + ölçüm listesi, kapatma 40px |
| Toast | 36px | 8px 12px | `--radius` | 12px Space Mono | `--surface`, sol 2px accent şerit | 3sn · üst üste 3 |
| Grafik | — | — | 0 | eksen 10px mono | çizgi 1.5px, alan %8; `--data-1…4` | ızgara 1px, eşik 1px kesikli |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 40px görsel, 44×44px hedef (dikey padding ile); mobilde tüm satırlar 44px.
- Ölçüm kutusu: 2px radius, 10px padding, `--surface-2`; etiket üstte 10px mono.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 18px ızgara, keskin köşe; kar tanesi, termometre, rüzgâr, kalınlık |
| Fotoğraf | buzul/deniz buzu, high-key, soğuk beyaz-mavi ton, max %40 alan, 10px çerçeve |
| İllüstrasyon | yalnız kristal şeması: altıgen buz örgüsü, kalınlık kesiti (1px) |
| Doku | frost grain `.015`; buz çatlağı deseni yalnız hero görselinde |
| Logo alanı | Space Grotesk 700 küçük harf, sol üst 16px; mono varyant yalnız alt bilgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 7/5 hero: solda başlık + tek CTA, sağda buz plakası görseli | `shots/01-landing.png` |
| Dashboard | yüksek | 4×3 veri ızgarası + eşik çizgili grafik + son ölçümler | `shots/02-dashboard.png` |
| Form | düşük | ölçüm girişi: değer + birim + istasyon + zaman | — |
| Liste / tablo | yüksek | 34px satır, etiket–değer–birim, sabit birim sütunu | — |
| Boş durum | düşük | "bu istasyonda ölçüm yok" + cihaz bağla | — |
| Onboarding | düşük | 3 adım: istasyon seç → sensör ekle → eşik belirle | — |
| Pricing | orta | plan karşılaştırma; sensör/istasyon limitleri | — |
| Giriş / ödeme | çok düşük | tek plaka, 40px alanlar, tek eylem | — |
| Modal | orta | buz çekirdeği kesiti + ölçüm listesi | — |
| Bildirim | düşük | 36px toast, sol buz şeridi, 3sn | — |
| Hata | düşük | danger çerçeve + neden + yeniden dene | — |
| Profil / ayar | orta | istasyon listesi, birim sistemi, eşik değerleri | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (plaka) | 320ms | `cubic-bezier(.15,1,.3,1)` | `opacity` + `translateY(10px)`, 35ms arayla |
| Scroll reveal | 420ms, `top 90%` | aynı | `translateY(14px)`, `once: false` (yukarı kaydırınca tekrar) |
| Basma | 100ms | aynı | `translateY(1px)` |
| Hover (görsel) | 100ms | aynı | `scale(1.010)` |
| Değer güncellemesi | 240ms | `linear` | `color` (accent → ink) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.32s · cubic-bezier(.15,1,.3,1) · 10px · stagger 0.035**; scroll **top 90% · 0.42s · 14px · once:false**; pin **kapalı**; hover **100ms · 1.010**.
- Ani kırılma, hemen oturma: kristal çatlar ve yerine geçer; aşırı düzeltme (overshoot) yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, kar tanesi dönüşü durur, değer anında yazılır.
- Bu stile yasak hareket: sürekli dönen kar tanesi (yükleme hariç), parallax, bounce, blur/donma geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eaf3f8` | `#071119` |
| `--bg-2` | `#dceaf2` | `#0b1a24` |
| `--surface` | `#f9fcfe` | `#0e2130` |
| `--surface-2` | `#eef5fa` | `#13293a` |
| `--ink` | `#0e2733` | `#e8f4fa` |
| `--ink-soft` | `#45626f` | `#a6c2d0` |
| `--accent` | `#096d8a` | `#4ecde8` |
| `--accent-ink` | `#f2fbfd` | `#04212a` |

- Ölçülen koyu kontrastlar: `ink/bg` **17.00:1** · `ink-soft/bg` **10.20:1** · `accent-ink/accent` **8.93:1** · `ink-faint/bg` **5.64:1** · accent metin olarak bg'ye **10.17:1**.
- Koyu modda değişen başka ne var: frost grain `.015` → `.03` (koyu zeminde doku görünür olsun), çizgi %14 → %16, buz mavisi accent bir ton açılır; gölge opaklığı artar.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="polar-ice"]` olarak durur.

## Zorunlu kurallar
- İki radius: panel 10px, iç kutu/buton 2px; arada değer yok.
- Her ölçüm etiket + değer + birim; birim sabit sütunda, değer sağa hizalı mono.
- Katman ayrımı 1px çizgi + 2px ton; gölge yalnız yüzen katmanda.
- Buz mavisi accent yalnız eylem/seçim/eşik; sıcak renk yalnız durum.
- Frost doku zemin katmanında; fotoğraf ve tablo hücresi üstünde kullanılmaz.
- Dokunma hedefi 44px; gövde 15px Inter, ölçüm 13px Space Mono tabular.

## Yasaklar
- Cam/blur, `backdrop-filter`, buzlu cam efekti.
- Gradient zemin, parlama (glow), iç gölge.
- 10px üstü radius; 2px dışında ara radius.
- Sıcak turuncu accent; accent ile `--ok` yan yana.
- Büyük harf gövde, 13px altı metin, italik.
- Sürekli dönen kar tanesi, parallax, bounce.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 5.78:1 (`ink-soft/bg`).
- `--ink-faint` 3.38:1 — yalnız birim sütunu ve eksen; gövde metni olarak kullanılmaz.
- Accent metin olarak 5.24:1, dolgu üstünde 5.61:1 — ikisi de geçer; 13px altı accent metin kullanılmaz.
- İnce çizgi (1px) zemine karşı ≥ 3:1: koyu modda çizgi %16'ya çıkarılır; açık modda `--line` %14 yeterlidir (ölçüm: 3.4:1).
- Odak görünürlüğü: 2px buz halkası + 2px offset; buz mavisi dolgulu butonda `--accent-ink` halka.
- 390px'te tablo yatay kaydırılır (birim sütunu dondurulur); sayfa taşmaz.
- `prefers-reduced-motion` açıkken giriş, hover ve değer renk geçişi durur.

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
| "Glassmorphism" kayması | blur/parlama eklendi | `--blur: 0`, opak yüzey |
| Ekran soluk | çok ince çizgi + düşük kontrast | 1px çizgi + `--ink` metin; `--ink-faint` yalnız birim |
| Plaka sınırı kayboluyor | tek ton | `--surface` + 2px açık `--bg` farkı |
| Ölçümler karışıyor | birim yok | sabit birim sütunu + tabular |
| Radius tutarsız | her bileşende farklı | yalnız 2px ve 10px |
| Koyu modda doku kayboluyor | grain düşük | koyu blokta `.03` |
| Mobilde taşıyor | 12 kolon tablo | yatay kaydırma + dondurulmuş birim sütunu |

## Komşu stiller

- **Uyumlu:** `scandinavian-dark` — sakin, çizgi temelli dil; rapor ekranlarında koyu eş.
- **Uyumlu:** `utility` — açık zeminli ürün arayüzü; pazarlama bölümlerinde sade tamamlayıcı.
- **Uyumlu:** `lab-instrument` — ölçüm cihazı paneli; aynı ürünün cihaz tarafında eş.
- **Yasak:** `wabi-sabi` — organik eğrilik ve kil dokusu, kristal dilini bozar.
- **Yasak:** `bohemian` — sıcak desen ve toprak paleti, soğuk high-key zeminle çelişir.
- **Yasak:** `pixel-art` — piksel ızgara ve kalın çerçeve, 1px çizgi disiplinini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://nsidc.org/ | deniz buzu, kalınlık ve erime verisi sunumu |
| https://www.awi.de/en/ | kutup istasyonu ölçüm terminolojisi |
| https://www.antarctica.gov.au/ | istasyon verisi, harita ve sefer planı dili |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | ince çerçeve ve grafik çizgisi 3:1 ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | gövde metni kontrast ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Polar Ice (styles/83-polar-ice/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="polar-ice"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Space Grotesk 700) H1/H2; --font-body (Inter 400/600) gövde 15px/1.6;
  --font-mono (Space Mono) etiket 10px +0.2em büyük harf ve tüm ölçüm değerleri (tabular).
Yüzey: yüksek anahtar buz zemini; ayrım 1px var(--line) + 2px ton farkı. radius YALNIZ iki değer:
  --radius 2px (buton/input/iç kutu), --radius-lg 10px (panel/modal). Gölge yalnız yüzen katmanda 1–2px.
Ölçüm: etiket (10px mono) + değer (13px mono, sağa hizalı) + birim (sabit 44px sütun, --ink-faint).
Renk: tek accent buz mavisi (--accent); accent üstü --accent-ink; sıcak renk yalnız durum.
Hareket: enter 0.32s cubic-bezier(.15,1,.3,1) 10px stagger 0.035 · scroll top 90% 0.42s 14px once:false ·
  pin kapalı · hover 100ms scale 1.010; prefers-reduced-motion zorunlu.
Yasak: cam/blur/backdrop-filter, gradient, glow, 10px üstü radius, sıcak accent, sürekli dönen kar tanesi, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Yalnız 2px ve 10px radius kullanılıyor.
- [ ] Her ölçümde etiket + değer + birim var.
- [ ] Hiçbir yerde blur/cam/parlama yok.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok (tablo kendi içinde kaydırılıyor).
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="polar-ice"] {
  --bg: #eaf3f8; --bg-2: #dceaf2;
  --surface: #f9fcfe; --surface-2: #eef5fa;
  --ink: #0e2733; --ink-soft: #45626f; --ink-faint: #6c8794;
  --accent: #096d8a; --accent-ink: #f2fbfd;
  --line: rgba(14,39,51,.14);
  --radius: 2px; --radius-lg: 10px;
  --shadow: 0 1px 2px rgba(14,39,51,.08); --shadow-hard: 0 0 0 1px rgba(9,109,138,.45);
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -.02em; --blur: 0px; --grain: .015;
  --danger: #a3241f; --danger-ink: #fdf3f2;
  --ok: #1b6157; --warn: #7a5a12;
}
```

Koyu mod bloğu `styles/83-polar-ice/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="polar-ice"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
