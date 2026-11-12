# 126 · Marble Vein

> **Bir cümlede:** Damarı kesilmiş bir taş plaka gibi sakin, grafitle çizilmiş lüks bir malzeme kataloğu arayüzü.

| | |
|---|---|
| **Hissiyat** | sakin, soğuk, ağır, kusursuz |
| **En iyi** | malzeme/taş kataloğu, mimarlık stüdyosu portfolyosu, mermer & yüzey seçici, lüks ürün konfigüratörü |
| **Kaçın** | hızlı operasyon paneli, oyun/etkinlik, çocuk uygulamaları — burada dinginlik "yavaş" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 6.84:1) |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="marble-vein"]` |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Marble Vein, arayüzü **kesilmiş bir taş plaka** gibi kurar: soğuk beyaz zemin, tek ince damar çizgisi, grafitle yazılmış künye. Renk neredeyse yoktur — lüks, süsle değil **yüzey kalitesi ve hizalama** ile anlatılır.

Üç kurucu karar: (1) **grafitle accent** — siyaha yakın bir grafit `#242b2e` tek vurgu; altın/parlak metal yok; (2) **plaka fiziği** — radius 5px (kontrol) ve 12px (kart), 1px çizgi, gölge yalnız yüzen katmanda; (3) **serif + nötr sans** — Lora 600 başlık, Inter 400 gövde, mono yalnız ölçü ve etiketlerde.

Bedeli: vurgu yokluğu hızlı tarama zorlaştırır; bu yüzden her ekranda **tek bir damar çizgisi ve tek birincil eylem** bulunur. İkinci bir vurgu rengi eklenirse stil "katalog"dan "dekorasyon"a kayar.

### Ne değildir
- **Luxury Typography (04) değildir:** krem zemin, altın accent ve ince serif ile butik dil kurar; Marble Vein soğuk beyaz + grafit accent ve 5/12px ölçülü plaka köşesi kullanır.
- **Art Deco (26) değildir:** koyu yeşil + altın, simetri ve geometrik süs vardır; burada süs yok, damar tek çizgidir.
- **Editorial Design (03) değildir:** sıcak krem kâğıt ve terracotta accent ile dergi kurar; bu stil taş beyazı ve grafitle çalışır.
- **Machined Metal Panel (57) değildir:** soğuk gri + pas accent ve endüstriyel panel dili; 126 malzeme kataloğu ve lüks vitrin dilidir.

### Nereden gelir
Mermer ocağı ve mimarlık malzeme kütüphanesi geleneğinden: plaka adı, yüzey (mat/parlak), kalınlık, damar yönü, parti no. Bugün yeniden kullanılmasının nedeni: malzeme seçimi yapan mimar/iç mimar ekranda **doku ve damarı** görmek istiyor ama arayüzler genelde e-ticaret ızgarasına benziyor. Klişeye dönüşmemesi için korunacak detay: **tek damar çizgisi** ve grafit accent.

### 3 saniyede tanıma testi
1. Zemin soğuk beyaz; accent neredeyse siyah (grafit), altın/parlak metal yok.
2. Ekranda tek bir ince damar çizgisi var; süs tekrarı yok.
3. Köşeler 5px (buton/input) ve 12px (kart); hap buton yok.
4. Başlıklar yüksek kontrastlı serif (Lora 600, Didone değil), gövde nötr sans.
5. Her kartta tür + yüzey + kalınlık (mm) + ağırlık (kg) künyesi var.

## Görsel imza
- **Grafit accent:** `#242b2e` yalnız birincil eylem, seçili öğe ve odak halkası; accent üstü metin beyaz.
- **Tek damar çizgisi:** hero görselinde 1px eğri damar; sayfada tekrar eden ikinci damar yok.
- **Plaka köşesi:** radius 5px (kontrol) / 12px (kart, modal); 12px üstü yok.
- **Künye dili:** 10–11px JetBrains Mono büyük harf `0.16em`; değerler tabular ve sağa hizalı.
- **Yüzey tonu:** `--bg` → `--surface` yalnız 1–2 ton fark; derinlik gölgeyle değil çizgiyle.
- **Taş tozu:** `--grain: .02` tüm zeminde; fotoğrafın üstünde kullanılmaz.
- **Ölçü sütunu:** kalınlık ve ağırlık sabit sütunlarda, birim ayrı ve `--ink-faint`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3f4f3` | taş zemini | kart zemini |
| `--bg-2` | `#e8eae8` | bölüm bandı | birincil buton |
| `--surface` | `#fdfdfc` | plaka kartı, form | sayfa zemini |
| `--surface-2` | `#f0f2f0` | chip, hover, başlık satırı | metin zemini |
| `--ink` | `#14181a` | metin, çizgi | dekoratif dolgu |
| `--ink-soft` | `#4c565a` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#748083` | birim, etiket, damar çizgisi | gövde, etkileşimli metin |
| `--accent` | `#242b2e` | birincil eylem, seçim, odak | geniş dekoratif dolgu |
| `--accent-ink` | `#f5f7f6` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(20,24,26,.14)` | plaka çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **16.20:1** · `ink-soft/bg` **6.84:1** · `accent-ink/accent` **13.37:1** · `ink-faint/bg` **3.69:1** · accent metin olarak bg'ye **13.04:1**.
- Tek vurgu kuralı: grafit yalnız eylem/seçim/odak. Durumlar `--ok` (koyu yeşil), `--warn` (hardal), `--danger` (koyu kiremit) — yalnız etiket ve 2px şerit.
- Yasak kombinasyon: grafit accent yanında ikinci vurgu rengi; accent üstünde `--ink-soft`; `--ink-faint` gövde metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 54px | 600 | 1.06 | -0.01em |
| H2 | Lora | 30px | 600 | 1.16 | 0 |
| H3 | Inter | 21px | 600 | 1.28 | 0 |
| Gövde | Inter | 16px | 400 | 1.64 | 0 |
| Etiket / mono | JetBrains Mono | 11px | 700 | 1.35 | 0.16em, büyük harf |
| Ölçü / tablo | JetBrains Mono | 13px | 400 | 1.45 | 0.02em, tabular |

- Ölçek oranı ≈ 1.7 (16 → 30 → 54); kullanılan basamaklar: 11 · 12 · 13 · 16 · 21 · 30 · 54 · (mobil 32).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.6vw, 54px) }`.
- Gövde metni maksimum satır uzunluğu: 62ch; künye satırı 44ch'te kırılır.
- Ağırlık kuralı: Lora 400/600 (başlık 600), Inter 400/600, mono 400/700. İtalik yalnız tek vurgu sözcüğünde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 7/5, katalog 3×4 |
| Gutter | 24px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, katalog 2'li |

- Asimetri kuralı: ekran başına 1 asimetrik blok (hero 7/5).
- Bölüm ritmi: 64px masaüstü / 40px mobil; bölüm ayırıcı 1px çizgi.
- Kart içi 24px; tablo satırı 40px; künye ile başlık arası 10px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | taş yüzeyi |
| Plaka | `--surface` + 1px `--line` | yok | kart, tablo, form |
| Yüzen katman | `--surface` + 1px `--ink` | `var(--shadow)` 1–2px | modal, menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px grafit halka | seçili plaka |

- Kenarlık formülü: `1px solid var(--line)`; seçili durumda `--shadow-hard` = 1px grafit halka.
- Derinlik nereden gelir: yalnız çizgi ve ton farkı; ışık/parlama yok.
- Radius: `--radius` 5px (buton, input, chip), `--radius-lg` 12px (kart, modal). 12px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 10px 20px | `--radius` | 13px/600 Inter | `--accent` + `--accent-ink`, gölge yok | hover %90 · active 1px aşağı · focus 2px grafit halka · disabled %45 · loading 3 nokta |
| Buton (ikincil) | 44px | 10px 18px | `--radius` | 13px/600 Inter | şeffaf + 1px `--ink` | hover `--surface-2` · focus grafit halka |
| Input | 44px | 0 14px | `--radius` | 15px Inter | `--surface` + 1px `--line` | focus halka + alt 1px ink · error danger · disabled %45 |
| Plaka kartı | — | 24px | `--radius-lg` | başlık 21px Inter 600 | `--surface` + 1px `--line`, gölge yok | seçili: 1px grafit halka |
| Chip (taş türü) | 22px | 0 8px | `--radius` | 10px JetBrains Mono | `--surface-2` + 1px `--line` | carrara · calacatta · traverten · granit · oniks |
| Nav (üst bar) | 56px | 0 28px | 0 | 13px Inter / 11px mono | `--bg`, alt 1px `--line` | aktif 2px ink alt çizgi · sağda yüzey etiketi |
| Tablo satırı | 40px | 6px 12px | 0 | tür gövde + mono ölçü | alt 1px `--line` | hover `--surface-2` · seçili sol 2px ink şerit |
| Modal | — | 28px | `--radius-lg` | başlık 30px Lora | 1px ink + hafif gölge | plaka detayı, kapatma 44px |
| Toast | 40px | 8px 14px | `--radius` | 13px Inter | `--surface`, sol 2px ink şerit | 4sn · üst sağda |
| Grafik | — | — | 0 | eksen 11px mono | çizgi 1.5px, alan %6 | ızgara 1px, eşik kesikli |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 44×44px; chip 22px görsel, satır içi padding ile 44px.
- Ölçü girişi: mm/kg birimleri ayrı seçici; değerler mono tabular.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 20px ızgara, keskin köşe; plaka, damar, keski, sütun |
| Fotoğraf | mermer yüzey/damar makro, nötr beyaz-gri, max %45 alan, 6px çerçeve |
| İllüstrasyon | yalnız damar çizimi: 1px eğri çizgi ve kesit şeması |
| Doku | taş tozu grain `.02`; damar deseni yalnız hero görselinde |
| Logo alanı | Lora 600 küçük harf, sol üst 24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 7/5 hero: solda başlık + tek grafit CTA, sağda plaka + damar | `shots/01-landing.png` |
| Dashboard | düşük | 3 KPI (plaka, parti, kalınlık) + malzeme listesi | `shots/02-dashboard.png` |
| Form | düşük | plaka girişi: tür, yüzey, kalınlık+mm, ağırlık+kg | — |
| Liste / tablo | orta | 40px satır, mono ölçü sütunları, chip | — |
| Boş durum | düşük | "bu partide plaka yok" + ilk plakayı ekle | — |
| Onboarding | düşük | 3 adım: koleksiyon aç → plaka ekle → yüzey seç | — |
| Pricing | düşük | iki plan, plaka/parti limitleri | — |
| Giriş / ödeme | çok düşük | tek plaka, 44px alanlar, tek eylem | — |
| Modal | orta | plaka detayı: damar fotoğrafı + teknik künye | — |
| Bildirim | düşük | 40px toast, sol ink şerit, 4sn | — |
| Hata | düşük | danger çerçeve + neden + sonraki adım | — |
| Profil / ayar | orta | koleksiyon listesi, birim (mm/inç), yüzey tercihi | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (plaka) | 640ms | `cubic-bezier(.18,.72,.22,1)` | `opacity` + `translateY(13px)`, 32ms arayla |
| Scroll reveal | 870ms, `top 69%` | aynı | `translateY(17px)`, `once: true` |
| Basma | 160ms | aynı | `translateY(1px)` |
| Hover (görsel) | 310ms | aynı | `scale(1.035)` |
| Seçim vurgusu | 320ms | aynı | `outline-color` (grafit halka) |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.64s · cubic-bezier(.18,.72,.22,1) · 13px · stagger 0.032**; scroll **top 69% · 0.87s · 17px · once**; pin **kapalı**; hover **310ms · 1.035**.
- Taş gibi oturur: hızlı giriş, kararlı duruş; geri sekme ve elastik hareket yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, hover ölçeği 1.000, içerik anında yerleşir.
- Bu stile yasak hareket: sürekli damar kayması, parallax, bounce, blur/parlama geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f3f4f3` | `#121416` |
| `--bg-2` | `#e8eae8` | `#0d0f10` |
| `--surface` | `#fdfdfc` | `#191c1e` |
| `--surface-2` | `#f0f2f0` | `#222629` |
| `--ink` | `#14181a` | `#eef0ef` |
| `--ink-soft` | `#4c565a` | `#a7aeae` |
| `--accent` | `#242b2e` | `#e8ebe7` |
| `--accent-ink` | `#f5f7f6` | `#14181a` |

- Ölçülen koyu kontrastlar: `ink/bg` **16.13:1** · `ink-soft/bg` **8.18:1** · `accent-ink/accent` **14.86:1** · `ink-faint/bg` **4.81:1** · accent metin olarak bg'ye **15.36:1**.
- Koyu modda değişen başka ne var: accent siyahtan **açık mermer beyazına** döner (karanlıkta damar aydınlanır), grain `.02` → `.03`, çizgi %14 → %16.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="marble-vein"]` olarak durur.

## Zorunlu kurallar
- Her plaka kaydı: tür + yüzey + kalınlık (mm) + ağırlık (kg).
- Tek damar çizgisi; ekran başına ikinci damar yok.
- Radius yalnız 5px ve 12px; hap buton yok.
- Grafit accent dışında vurgu rengi yok; durumlar yalnız etiket/şerit.
- Katman ayrımı 1px çizgi + ton; gölge yalnız yüzen katmanda.
- Dokunma hedefi 44px; ölçüler mono tabular ve sağa hizalı.

## Yasaklar
- Altın/parlak metal accent, glossy yüzey, cam/blur, gradient.
- 12px üstü radius, hap buton, yumuşak gölge.
- İkinci vurgu rengi; accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 14px altı metin.
- Sürekli damar animasyonu, parallax, bounce.
- Grain'i fotoğraf üstünde kullanmak.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 6.84:1 (`ink-soft/bg`).
- `--ink-faint` 3.69:1 — birim/etiket ve damar çizgisi için; gövde metni olarak kullanılmaz.
- Grafit accent metin olarak 13.04:1, dolgu üstünde 13.37:1 — ikisi de yüksek; accent dolgulu butonda `--accent-ink` kullanılır.
- Odak görünürlüğü: 2px grafit halka (13.04:1) + 2px offset; koyu modda açık mermer halkası (15.36:1).
- Durum yalnız renkle verilmez: taş türü chip metni, uyarı etiketi + 2px şerit.
- 390px'te katalog 2'li, tablo karta döner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, hover ölçeği ve seçim vurgusu durur.

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
| "Katalog şablonu" hissi | her kartta aynı damar | damar ekran başına 1 |
| Lüks kayboluyor | altın/parlak accent eklendi | grafit accent, parlaklık yok |
| Okunmuyor | `--ink-faint` gövdeye | gövde `--ink`/`--ink-soft` |
| Taş "ucuz" görünüyor | 12px üstü radius | 5/12px sabit |
| Ölçüler karışıyor | birim yok | sabit birim sütunu + tabular |
| Koyu modda damar kayboluyor | çizgi opaklığı düşük | koyu blokta %16 + accent açık |
| Mobilde taşıyor | 3×4 katalog | 2'li katalog + kart |

## Komşu stiller

- **Uyumlu:** `luxury-typography` — aynı sessiz lüks ailesi; butik marka bölümlerinde sıcak alternatif.
- **Uyumlu:** `editorial-design` — serif başlık ve geniş ölçü; uzun malzeme yazılarında eş.
- **Uyumlu:** `japanese-ma` — boşluk ve çizgi disiplini; galeri ekranlarında tamamlayıcı.
- **Yasak:** `claymorphism` — pastel yuvarlak gölge, plaka fiziğini bozar.
- **Yasak:** `neo-brutalism` — kalın çerçeve ve sert ofset, lüks dinginliği yok eder.
- **Yasak:** `pixel-art` — piksel ızgara, damar çizgisinin inceliğini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.naturalstoneinstitute.org/ | yüzey sınıfları, kalınlık ve bakım terminolojisi |
| https://www.vam.ac.uk/ | mermer yüzey/damar dili ve künye biçimi |
| https://www.britannica.com/art/marble | taş türleri ve tarihsel kullanım bağlamı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | açık taş zemininde metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Marble Vein (styles/126-marble-vein/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="marble-vein"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Lora 600) H1/H2; --font-body (Inter 400/600) gövde 16px/1.64;
  --font-mono (JetBrains Mono) etiket 11px +0.16em ve tüm ölçüler (tabular).
Yüzey: soğuk taş beyazı + taş tozu grain (--grain .02). radius YALNIZ 5px (buton/input/chip) ve 12px (kart/modal).
  Katman ayrımı 1px var(--line) + 1 ton; gölge yalnız yüzen katmanda 1–2px.
Renk: tek accent grafit (--accent), accent üstü --accent-ink; altın/parlak metal yasak.
Künye: tür + yüzey (mat/parlak) + kalınlık mm + ağırlık kg; değerler mono tabular, birim ayrı.
Hareket: enter 0.64s cubic-bezier(.18,.72,.22,1) 13px st.032 · scroll top 69% 0.87s 17px once ·
  pin kapalı · hover 310ms scale 1.035; prefers-reduced-motion zorunlu.
Yasak: altın accent, glossy/cam, gradient, 12px üstü radius, hap buton, ikinci vurgu, sürekli damar animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda tek damar çizgisi var, tekrar yok.
- [ ] Accent grafit; altın/parlak metal yok.
- [ ] Radius yalnız 5px ve 12px.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="marble-vein"] {
  --bg: #f3f4f3; --bg-2: #e8eae8;
  --surface: #fdfdfc; --surface-2: #f0f2f0;
  --ink: #14181a; --ink-soft: #4c565a; --ink-faint: #748083;
  --accent: #242b2e; --accent-ink: #f5f7f6;
  --line: rgba(20,24,26,.14);
  --radius: 5px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(20,24,26,.07); --shadow-hard: 0 0 0 1px rgba(20,24,26,.35);
  --font-display: "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.01em; --blur: 0px; --grain: .02;
  --danger: #9c2c22; --danger-ink: #fdf4f2;
  --ok: #2c5c46; --warn: #7d5a12;
}
```

Koyu mod bloğu `styles/126-marble-vein/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="marble-vein"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 13.04:1 · `ink-soft / surface-2` 6.70:1 · `accent-ink / accent` 13.37:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: mermer damarı: eğri damarlar + kesit etiketi.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.64s` / `scroll 0.87s` (ikisi de ≤ 1.2 s).
