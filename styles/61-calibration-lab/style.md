# 61 · Calibration Lab

> **Bir cümlede:** Her okumanın bir referansa ve bir toleransa bağlandığı, süsün yerini ölçüm bandının aldığı laboratuvar arayüzü.

| | |
|---|---|
| **Hissiyat** | ölçülü, klinik, güvenilir, sessiz |
| **En iyi** | ölçüm cihazı yazılımı, kalibrasyon/doğrulama paneli, sensör & eşik izleme, sertifikalı raporlama |
| **Kaçın** | tüketici uygulaması, e-ticaret vitrini, yaratıcı portfolyo — burada "soğuk" değil "davetsiz" olur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.21:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="calibration-lab"]` |
| **Kompozisyon** | `split` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Calibration Lab, arayüzü bir **ölçüm tablosu** olarak ele alır: her sayı bir birimle, her birim bir toleransla, her tolerans bir referansla birlikte görünür. Süsün yerini **okuma bandı** alır — mono, tabular, sağa hizalı, birim sütunu ayrı. Kullanıcı ekranda "güzel" değil "doğrulanabilir" arar.

Üç kurucu karar: (1) **iki aile, iki iş** — başlık ve etiketler Jost 600, gövde Inter 400, tüm sayısal okuma IBM Plex Mono 400 tabular; (2) **hairline yüzey** — katman ayrımı 1px `--line` çerçeve, gölge yalnız yüzen katmanda, cam/blur yok; (3) **durum üçlüsü** — her ölçüm geçerli / süresi geçmiş / bekliyor olarak hem renkle hem metinle işaretlenir.

Bedeli: sıcaklık ve kişilik yoktur. Bu stilin ucuz görünmemesini sağlayan tek şey **hizalama ve ondalık disiplini**; bir sütunun 2px kayması okumanın güvenilirliğini bitirir.

### Ne değildir
- **Terminal UI (45) değildir:** terminal tek mono ailede ve koyu zeminde yaşar; bu stilde başlık Jost, gövde Inter'dir, zemin açık ve grid 20px gutter'lıdır.
- **Utility (44) değildir:** Utility genel ürün arayüzüdür, mavi accent ve 680px ölçüyle çalışır; Calibration Lab'de ölçüm bandı, tolerans çubuğu ve birim sütunu vardır.
- **Scandinavian Dark (40) değildir:** o stil koyu ve geniş boşluklu bir sessizlik kurar; burada yoğunluk yüksektir, satır 30px'tir.
- **Glassmorphism (08) değildir:** cam/blur bu stilde yasak; derinlik yalnız 1px çizgi ve 1px gölgeyle kurulur.

### Nereden gelir
Laboratuvar enstrümanı panelinden (Fluke, Mettler Toledo, Sartorius) ve metroloji rapor geleneğinden: ölçüm değeri, birim, tolerans, referans, tarih. Bugün yeniden kullanılmasının nedeni: sensör/IoT ürünlerinin çoğu **eşik ve kalibrasyon** anlatmak zorunda ama bunu tüketici arayüzü diliyle yapınca güven kaybediyor. Klişeye dönüşmemesi için korunacak detay: **birim sütununun ve toleransın hiç gizlenmemesi**.

### 3 saniyede tanıma testi
1. Sağa hizalı, tabular, sabit ondalıklı sayı sütunu ve ayrı bir **birim** sütunu var.
2. Ekranda en az bir **tolerans çubuğu**: 2px yüksekliğinde, hedef bandı gri, sapma accent.
3. Tüm etiketler 11px mono büyük harf, +0.14em aralıklı.
4. Paneller 3px radius ve 1px çizgi; hiçbir kartta yumuşak gölge yok.
5. Her ölçümün yanında durum metni: `geçerli` / `süresi geçmiş` / `bekliyor`.

## Görsel imza
- **Kalibrasyon ızgarası:** hero görselinin zemininde 28px aralıklı 1px çizgi ızgara, `--line` opaklığında; sayfa zemininde tekrar etmez.
- **Okuma bandı:** `--surface-2` zemin + üst/alt 1px `--line`, 30px satır, 11–12px IBM Plex Mono, `font-variant-numeric: tabular-nums`.
- **Birim sütunu:** değerin sağında 44px sabit kolon, 11px mono, `--ink-faint`; birim asla değerin içinde değil.
- **Tolerans çubuğu:** 2px yükseklik, hedef bandı `--surface-2` ile dolu, sapma `--accent` ile işaretli, sınır çizgisi 1px kesikli.
- **Hairline çerçeve:** panel 1px `--line`, radius 3px; odaklı panelde ek olarak `--shadow-hard` (0 0 0 1px) — çift çizgi, gölge değil.
- **Durum üçlüsü:** 6px daire + metin. Daire tek başına anlam taşımaz; metin her zaman yanındadır.
- **İki punto kuralı:** gövde metni yalnız 15px, etiket yalnız 11px; arada üçüncü bir gövde puntosu yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eef1f0` | sayfa zemini, cihaz çerçevesi | kart zemini |
| `--surface` | `#fbfcfc` | panel, form, tablo gövdesi | sayfa zemini |
| `--surface-2` | `#f3f7f6` | okuma bandı, tablo başlığı | birincil buton |
| `--ink` | `#101a1a` | metin, sayısal okuma | dekoratif dolgu |
| `--ink-soft` | `#4a5c5b` | ikincil metin, açıklama | accent zemin üstü |
| `--ink-faint` | `#728482` | birim sütunu, dekoratif ayırıcı | etkileşimli metin, gövde |
| `--accent` | `#0d5f5c` | birincil eylem, sapma, odak | dekorasyon, ikinci vurgu |
| `--accent-ink` | `#f4fbfa` | accent zemin üstü metin | accent olmayan zemin |
| `--line` | `rgba(16,26,26,.15)` | tüm çerçeveler, ızgara | metin |

- Ölçülen kontrast: `ink/bg` **15.60:1** · `ink-soft/bg` **6.21:1** · `accent-ink/accent` **7.13:1** · `ink-faint/bg` **3.46:1**.
- Tek vurgu kuralı: `--accent` yalnız eylem, seçim, sapma ve odak için. Durumlar için `--ok` / `--warn` / `--danger` ayrı durur; accent'e ikinci bir ton eklenmez.
- Yasak kombinasyon: accent zemin üstünde `--ink-soft`; `--ink-faint` ile gövde metni; iki farklı yeşilin yan yana kullanımı.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Jost | 44px | 600 | 1.06 | -0.01em |
| H2 | Jost | 26px | 600 | 1.16 | 0 |
| H3 | Jost | 19px | 600 | 1.30 | 0 |
| Gövde | Inter | 15px | 400 | 1.62 | 0 |
| Etiket / mono | IBM Plex Mono | 11px | 400 | 1.35 | 0.14em, büyük harf |
| Okuma / tablo | IBM Plex Mono | 12px | 400 | 1.4 | 0.02em, tabular |

- Ölçek oranı ≈ 1.7 (15 → 26 → 44); kullanılan basamaklar: 11 · 12 · 15 · 19 · 26 · 44 · (mobil 28). Altıdan fazla basamak yok.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 4.4vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: 62ch; tablo hücresi sarmaz.
- Ağırlık kuralı: Jost 400/600, Inter 400/600, mono 400. 700 ve üstü yasak (Jost'ta 700 yok, sentetik kalınlaştırma bulanıklaştırır). İtalik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 7/5, panel ızgarası 3×4 |
| Gutter | 20px |
| Container genişliği | 1160px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo yatay kaydırır |

- Asimetri kuralı: ekran başına en fazla 1 bölüm simetriden çıkar (hero 7/5).
- Bölüm ritmi: masaüstü 56px, mobil 32px dikey boşluk; art arda en fazla 3 aynı hizalama, sonra bölüm ayırıcı 1px çizgi.
- Panel içi padding 20px; okuma bandı hücresi 4/12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, cihaz kabuğu |
| Kart | `--surface` + 1px `--line` | yok | panel, tablo, form |
| Yüzen katman | `--surface` + `--shadow` | `0 1px 2px rgba(16,26,26,.06)` | açılır menü, toast |
| Odak katmanı | `--surface` + `--shadow-hard` | `0 0 0 1px rgba(16,26,26,.24)` | seçili panel, modal |

- Kenarlık formülü: `1px solid var(--line)`; seçili durumda aynı çizgi + `--shadow-hard` = 2 kat çizgi.
- Derinlik nereden gelir: yalnızca çizgi ve zemin tonu; ışık/gölge yok.
- Radius: `--radius` 3px (panel, form, buton), `--radius-lg` 6px (modal, hero görsel çerçevesi). 6px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 38px | 8px 16px | `--radius` | 13px/600 Jost | `--accent` / `--accent-ink`, gölge yok | hover %92 accent · active 1px aşağı · focus 2px outline + 2px offset · disabled %42 · loading 3 nokta |
| Buton (ikincil) | 38px | 8px 16px | `--radius` | 13px/600 Jost | `--surface` + 1px `--line` | hover `--surface-2` · focus aynı halka |
| Input | 38px | 0 12px | `--radius` | 14px mono tabular | `--surface` + 1px `--line` | focus accent halka + birim etiketi sağda · filled sağa hizalı · error `--danger` + 11px açıklama · disabled %42 |
| Panel / kart | — | 20px | `--radius` | gövde 15px | `--surface` + 1px `--line` | başlıkta 11px mono etiket + sağda durum chip'i |
| Chip / badge | 22px | 0 8px | `--radius` | 11px mono 0.1em | `--surface-2` + 1px `--line` | geçerli = accent çerçeve · bekliyor = warn · süresi geçmiş = danger |
| Nav (üst bar) | 48px | 0 32px | 0 | 11px mono büyük harf | `--bg` + alt 1px `--line` | aktif öğe accent alt çizgi 2px · sağda `REF` etiketi |
| Tablo satırı | 30px | 4px 12px | 0 | 12px mono tabular | zemin yok; alt 1px `--line` | hover `--surface-2` · seçili accent sol şerit 2px |
| Modal | — | 24px | `--radius-lg` | başlık 19px Jost | `--shadow-hard` + 0 24px 48px -32px | kapatma 44×44px, `esc`, odak tuzağı |
| Toast | 36px | 8px 14px | `--radius` | 12px mono | `--surface`, sol 2px accent şerit | 4sn sonra kapanır, hover'da durur |
| Grafik | — | — | 0 | eksen 11px mono | `--data-1…4`, hedef bandı `--surface-2` | tolerans sınırı 1px kesikli · nokta işareti yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — tüm etkileşimli öğelerde, tablo satırları dahil (`outline-offset: -2px`).
- Dokunma hedefi: mobilde 44×44px; görsel yükseklik 38px, dikey padding ile büyütülür.
- Sayı girişi: stepper yok; değer doğrudan yazılır, `↑/↓` 1 birim artırır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yuvarlatma yok; dolu ikon yalnız 6px durum noktası |
| Fotoğraf | cihaz/numune, nötr beyaz zemin, doygunluk -10, max %35 alan, 3px çerçeve içinde |
| İllüstrasyon | yalnız teknik diyagram (ölçüm zinciri, kalibrasyon akışı), 1px çizgi + etiket |
| Doku | yok (`--grain: 0`); ızgara deseni yalnız hero görselinde |
| Logo alanı | sözcük logosu Jost 600 küçük harf, sol üst 20px boşluk; mono varyant yalnız alt bilgi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | hero 7/5: solda başlık + tek CTA, sağda kalibrasyon paneli + okuma bandı | `shots/01-landing.png` |
| Dashboard | çok yüksek | 3 KPI + tolerans çubukları + son ölçümler tablosu | `shots/02-dashboard.png` |
| Form | orta | tek sütun alanlar, sağda birim etiketi, altta kalibrasyon notu | — |
| Liste / tablo | çok yüksek | 30px satır, tabular sayı, birim sütunu, sağda durum chip'i | — |
| Boş durum | düşük | "ölçüm yok" + ilk ölçümü başlat eylemi + referans hatırlatması | — |
| Onboarding | orta | 3 adım: cihaz bağla → referans gir → tolerans seç | — |
| Pricing | orta | karşılaştırma tablosu; ölçüm limitleri satır bazında | — |
| Giriş / ödeme | düşük | tek panel, tek eylem, doğrulama sonrası `geçerli` durumu | — |
| Modal | orta | ölçüm detayı: değer, birim, tolerans, referans, tarih | — |
| Bildirim | düşük | 36px toast, sol accent şerit, 4sn | — |
| Hata | düşük | `--danger` çerçeve + neden + sonraki adım; sayı gizlenmez | — |
| Profil / ayar | yüksek | anahtar/değer listesi, 30px satır, birim seçimi | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (bölüm) | 420ms | `cubic-bezier(.16,.84,.44,1)` | `opacity` + `translateY(8px)` |
| Giriş sırası | 45ms arayla | aynı | panel başına 1 kademe |
| Scroll reveal | 360ms, `top 88%` | aynı | `translateY(12px)`, `once: true` |
| Basma | 90ms | `cubic-bezier(.16,.84,.44,1)` | `transform` 1px |
| Hover (görsel) | 140ms | aynı | `scale(1.006)` — fark edilmesi zor, ölçülebilir |
| Okuma değişimi | 120ms | `linear` | `opacity` (sayı saymaz, sıçrar) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.42s · cubic-bezier(.16,.84,.44,1) · 8px · stagger 0.045**; scroll **top 88% · 0.36s · 12px · once**; pin **kapalı**; hover **140ms · 1.006**.
- Kısa hızlanma + uzun oturma: hareket cihazın kendini kalibre etmesi gibi; yay ve sekme yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, okuma anında değişir, hover ölçeği 1.000.
- Bu stile yasak hareket: sayaç animasyonu, sürekli nabız, parallax, pin/scrub, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eef1f0` | `#0c1414` |
| `--bg-2` | `#e5eae9` | `#111b1b` |
| `--surface` | `#fbfcfc` | `#142020` |
| `--surface-2` | `#f3f7f6` | `#1a2828` |
| `--ink` | `#101a1a` | `#e6efee` |
| `--ink-soft` | `#4a5c5b` | `#a3b6b4` |
| `--accent` | `#0d5f5c` | `#3fd7cb` |
| `--accent-ink` | `#f4fbfa` | `#02201d` |

- Ölçülen koyu kontrastlar: `ink/bg` **15.94:1** · `ink-soft/bg` **8.80:1** · `accent-ink/accent` **9.61:1** · `ink-faint/bg` **4.71:1**.
- Koyu modda değişen başka ne var: gölge neredeyse görünmez kalır, bu yüzden panel ayrımı 1px çizgiye ek olarak `--surface` tonuyla kurulur; ızgara opaklığı %15 → %16; accent teal bir ton açılır.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="calibration-lab"]` olarak durur.

## Zorunlu kurallar
- Tüm sayısal okumalar mono + tabular + sabit ondalık; birim ayrı sütunda (değerin içinde birim yok).
- Her ölçümün yanında tolerans ve referans görünür; çıplak sayı yasak.
- Durum üçlüsü hem renk hem metinle: `geçerli` / `süresi geçmiş` / `bekliyor`.
- Katman ayrımı 1px `--line`; gölge yalnız yüzen katmanda (toast, menü).
- Etiketler 11px mono büyük harf +0.14em; gövde 15px Inter.
- Izgara 20px gutter; panel içi 20px; tablo satırı 30px.

## Yasaklar
- 8px üstü radius, yuvarlak kart, yumuşak/geniş gölge.
- Gradient zemin, cam/blur (`--blur: 0`), grain (`--grain: 0`).
- Animasyonlu sayaç, sürekli nabız, parallax, pin/scrub.
- İkinci accent tonu; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde metni ve 700+ ağırlık.
- Yalnız renkle durum bildirimi; birimsiz/ondalıksız değer.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.21:1 (`ink-soft/bg`).
- `--ink-faint` 3.46:1 — yalnız birim sütunu, eksen ve dekoratif ayırıcı; etkileşimli metin değil.
- Durum yalnız renkle anlatılmaz: 6px daire + metin etiketi + chip.
- Grafik çizgisi ve tolerans sınırı zemine karşı ≥ 3:1; hedef bandı desenle de ayrılır (kesikli sınır).
- Odak görünürlüğü: açık zeminde 2px accent halka 7.13:1; tablo satırında `outline-offset: -2px` ile kırpılma önlenir.
- 390px'te sayfa taşmaz; tablo kendi içinde yatay kaydırılır, dondurulmuş birim sütunu 44px.
- `prefers-reduced-motion` açıkken giriş/scroll/hover hareketi durur.

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
| "Excel gibi" görünüyor | her şey eşit ağırlıkta | 3 KPI + 1 tolerans çubuğu öne çıkar, gerisi `--ink-soft` |
| Okuma güven vermiyor | ondalık/birim tutarsız | sabit 3 ondalık + ayrı birim sütunu |
| Sütunlar kayıyor | px genişlik | `ch` + tabular + sağa hizalama |
| Ekran soğuk değil "boş" | gölge yok + eşit boşluk | 56px bölüm ritmi + 1px ayırıcı |
| Kontrast düşük | `--ink-faint` gövdeye kullanılmış | birim/eksen dışında kullanma |
| Mobilde taşıyor | 12 kolon tablo | tablo içi kaydırma + dondurulmuş birim sütunu |
| Durum kayboluyor | yalnız renkli daire | daire + metin chip'i birlikte |

## Komşu stiller

- **Uyumlu:** `scandinavian-dark` — aynı sessiz, çizgi temelli dil; rapor ekranlarında koyu varyant olarak kullanılır.
- **Uyumlu:** `utility` — açık zeminli ürün arayüzü; pazarlama sayfalarında Calibration Lab'in sade kardeşi.
- **Uyumlu:** `terminal-ui` — mühendis ekranlarında log/CLI yüzeyi olarak yan yana konur.
- **Yasak:** `claymorphism` — yumuşak gölge ve yuvarlak dil ölçüm ciddiyetini bozar.
- **Yasak:** `memphis` — dekoratif geometri ızgara ve birim hizasını kırar.
- **Yasak:** `aurora-ui` — atmosferik gradient, hairline disiplinini dağıtır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.fluke.com/en-us | cihaz paneli hiyerarşisi, okuma bandı ve birim gösterimi |
| https://www.mt.com/ | kalibrasyon durumu, sertifika ve tolerans dili |
| https://www.ibm.com/design/language/data-visualization/ | yoğun tablo, eksen ve seri renk disiplini |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | grafik çizgisi, çerçeve ve odak halkası 3:1 ölçütü |
| https://m3.material.io/foundations/layout/understanding-layout/grids | 8/4px boşluk ölçeği ve kolon davranışı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Calibration Lab (styles/61-calibration-lab/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="calibration-lab"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Jost 600) başlıkta, --font-body (Inter 400) gövdede, --font-mono (IBM Plex Mono 400) tüm sayı ve etiketlerde.
  Etiket 11px +0.14em büyük harf; gövde 15px/1.62; H1 44px/1.06; sayılar tabular, sabit 3 ondalık.
Yüzey: 3 seviye (--bg / --surface / --surface + --shadow); radius --radius 3px, --radius-lg 6px;
  katman ayrımı 1px var(--line); seçili panelde --shadow-hard (0 0 0 1px).
Okuma bandı: --surface-2 zemin, 30px satır, değer sağa hizalı, birim ayrı 44px sütunda --ink-faint.
Tolerans çubuğu: 2px yükseklik; hedef bandı --surface-2, sapma --accent, sınır 1px kesikli.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil.
Hareket: enter 0.42s cubic-bezier(.16,.84,.44,1) 8px stagger 0.045 · scroll top 88% 0.36s 12px once ·
  pin kapalı · hover 140ms scale 1.006; prefers-reduced-motion zorunlu.
Yasak: gölge (yüzen katman dışında), gradient, blur, cam, sayaç animasyonu, pin, ikinci accent, büyük harf gövde.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Okuma bandında birim sütunu var, sayılar tabular ve sabit ondalıklı.
- [ ] En az bir tolerans çubuğu ve durum metni görünüyor.
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="calibration-lab"] {
  --bg: #eef1f0; --bg-2: #e5eae9;
  --surface: #fbfcfc; --surface-2: #f3f7f6;
  --ink: #101a1a; --ink-soft: #4a5c5b; --ink-faint: #728482;
  --accent: #0d5f5c; --accent-ink: #f4fbfa;
  --line: rgba(16,26,26,.15);
  --radius: 3px; --radius-lg: 6px;
  --shadow: 0 1px 2px rgba(16,26,26,.06); --shadow-hard: 0 0 0 1px rgba(16,26,26,.24);
  --font-display: "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: 0;
  --danger: #a32b1e; --danger-ink: #fdf4f2;
  --ok: #1c6b3f; --warn: #8a5a00;
}
```

Koyu mod bloğu `styles/61-calibration-lab/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="calibration-lab"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
