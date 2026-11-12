# 104 · Stepped Mechanism

> **Bir cümlede:** Her geçişin dört ayrı kademede tamamlandığı, ara değer üretmeyen ve kademe göstergesiyle hareketin nerede olduğunu söyleyen orta gri mekanik kontrol arayüzü.

| | |
|---|---|
| **Hissiyat** | mekanik, kilitli, ölçülü, denetimli |
| **En iyi** | endüstriyel kontrol paneli, ekipman kurulum akışı, makine ayar ekranı, adım adım sihirbaz |
| **Kaçın** | akıcılık bekleyen tüketici uygulamaları, marka vitrini, duygusal hikâye anlatımı |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (orta gri zemin; en düşük etkileşimli çift 5.28:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `styles/104-stepped-mechanism/tokens.json` → `[data-style="stepped-mechanism"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Stepped Mechanism, hareketi **süreklilikten çıkarır**: her geçiş `steps(4, end)` ile dört ayrı kademede tamamlanır, ara değer üretilmez. Ekranda kademe göstergesi (dört çentik) hareketin nerede olduğunu söyler; biten geçişte öğe 2px aşağı iner ve **orada kalır** — mekanik kilit hissi.

Üç kurucu karar: (1) **kademe sayısı sabit** — 4; daha fazlası akıcılığa, daha azı sıçramaya dönüşür; (2) **8px ızgara** — boşluk birimi 8px; tüm ölçüler kademe ızgarasına hizalıdır, bu yüzden ekran "makine gibi" durur; (3) **orta gri metal zemin** — açık beyaz panel endüstriyel değil "web" görünür; orta ton, gerçek operatör panellerine yakındır.

Display **Share Tech Mono**'dur (tek ağırlık): dijital gösterge estetiği, kademe mantığıyla aynı dili konuşur. Gövde Inter, mono etiketler IBM Plex Mono. Radius 8/16px — makine paneli köşeleri hafif kırılmıştır, hap yoktur.

Bedeli: orta gri zemin kontrast rezervini düşürür (ink/bg 7.53:1). Bu yüzden `--ink-faint` etkileşimli metinde kullanılmaz ve panel kenarlıkları ink'tir, hairline değil.

### Ne değildir
- **Telemetry Grid (46) değildir:** 46 açık gri zeminde hairline metrik hücreleri kurar ve akıcı animasyon kullanır; Stepped Mechanism orta ton + 2px ink kural + `steps(4)` kademe ile ayrışır.
- **Machined Metal Panel (57) değildir:** 57 fırçalanmış metal dokusu ve Michroma display ile malzeme taklidi yapar; burada doku yoktur (`--grain: .01`), display Share Tech Mono ve hareket kademelidir.
- **MES Production Line (59) değildir:** 59 açık zeminde üretim hattı nabzını yeşil accent'le verir; Stepped Mechanism orta gri zeminde kademe göstergesi ve yeşil yalnız "kilitli" durum için kullanılır.
- **Calibration Lab (61) değildir:** 61 Jost + teal ile ölçüm bandı estetiğidir; burada ölçüm değil **geçiş mekaniği** tasarlanır.

### Nereden gelir
Endüstriyel operatör panelleri (buton kademeleri, seçici anahtarlar), film projektörü ve manyetik bant mekanikleri, dijital saat/ölçer göstergeleri. Ekranda yeniden kullanılmasının nedeni: yumuşak `ease-out` animasyonların her arayüzde aynılaşması — kademeli geçiş, hareketin **mekanik bir olay** olduğunu hatırlatır. Klişeye dönüşmemesi için korunacak detay: kademe sayısının görünür olması (gösterge) ve biten kademede öğenin kilitle kalması.

### 3 saniyede tanıma testi
1. Zemin orta gri metal; kenarlıklar 1–2px koyu ink, hairline değil.
2. Başlık Share Tech Mono: dijital gösterge karakteri, geniş harf aralıklı.
3. Panellerde alt tarafta 2px kural ve dört çentikli kademe göstergesi.
4. Hareket sıçramalı: öğe dört adımda konumlanıyor, ara değer yok.
5. Accent koyu yeşil yalnız "kilitli/onaylı" durumda.

## Görsel imza
- **8px kademe ızgarası:** arka planda 8px aralıklı 1px çizgi (opaklık ≤ %70).
- **2px kural:** nav altı, tabbar üstü, ayırıcı — 2px `--ink`; kademe sertliğini taşır.
- **Kademe göstergesi:** 96×8px alan, 16px dolu / 8px boşluk; dolu kısım accent.
- **Kilit:** aktif durumda öğe 2px aşağı iner ve orada kalır (`shadow-hard`).
- **Radius:** `--radius` 8px (kontrol, chip), `--radius-lg` 16px (kart, modal).
- **Gölge:** `0 8px 18px -14px` tek katman, kısa; ağırlık `0 2px 0 var(--ink)` kilit çizgisinden gelir.
- **Doku:** `--grain: .01` — panel yüzeyi tozu; belirgin doku yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#a0a6aa` | sayfa zemini (orta gri metal) | kart zemini |
| `--bg-2` | `#979da1` | bölüm ayırıcı, kademe ızgarası | panel yüzeyi |
| `--surface` | `#abb1b5` | panel, kart (bir ton açık) | sayfa zemini |
| `--surface-2` | `#8b9195` | ikincil yüzey, chip, zebra | birincil panel |
| `--ink` | `#0f1417` | metin, kenarlık, kural | dekoratif dolgu |
| `--ink-soft` | `#2b3238` | ikincil metin | başlık |
| `--ink-faint` | `#485056` | yalnız dekoratif etiket | etkileşimli metin |
| `--accent` | `#1f6b3d` | kilitli/onaylı durum, kademe göstergesi | gövde metni |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(15,20,23,.22)` | ikincil ayırıcı | ana kenarlık (onun yerine `--ink`) |

- Ölçülen kontrast: `ink/bg` = **7.53:1** · `ink-soft/bg` = **5.28:1** · `accent-ink/accent` = **6.50:1** · `ink-faint/bg` = **3.34:1**.
- Tek vurgu kuralı: accent yalnız "kilitli / onaylı / tamamlanan kademe". Alarm `--danger`, uyarı `--warn`.
- Yasak kombinasyon: accent metni orta gri üstünde; `--ink-faint` ile etkileşimli metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Share Tech Mono (`--font-display`) | 38px / mobil 24px | 400 | 1.1 | `--tracking` 0.03em |
| H2 | Share Tech Mono | 24px | 400 | 1.24 | 0.02em |
| H3 | Inter | 18px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.52 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 11–12px | 400/600 | 1.44 | 0.14em |

- Ölçek oranı ≈ 1.35; kullanılan basamaklar: 11 · 12 · 13 · 14 · 18 · 24 · 38.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3vw, 38px); }`
- Gövde metni maksimum satır uzunluğu: 72 ch.
- Ağırlık kuralı: Share Tech Mono yalnız 400; gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) — tümü 8'in katı |
| Breakpoint davranışı | 1280 kademe paneli 4/8 · 768 tek sütun, gösterge üstte · 390 gösterge 4 çentik sabit |

- Asimetri kuralı: kademe paneli 4/8; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 3 panel; dördüncü blok tam genişlik kademe şeridi olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | pano, kademe ızgarası |
| Panel | `--surface` | yok | kart, tablo, KPI |
| Yüzen katman | `--surface` + `--shadow` | `0 8px 18px -14px rgba(15,20,23,.5)` | modal, menü |

- Kenarlık formülü: `1px solid var(--ink)`; alt kural `2px solid var(--ink)`.
- Derinlik nereden gelir: kilit çizgisi (`--shadow-hard`), montaj kuralları ve ızgara; blur/bevel yok.
- Radius: `--radius` 8px (kontrol, chip), `--radius-lg` 16px (kart, modal); hap yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | 0 16px | `--radius` | 13px/400 Share Tech Mono | `--accent` zemin, `--accent-ink`, `--shadow-hard` | hover 4 kademe (85ms/adım) · active 2px aşağı (kilit) · focus 2px ink · disabled %45 çentikli · loading gösterge dolar |
| Buton (ikincil) | 36px | 0 16px | `--radius` | 13px/400 | `--surface`, 1px `--ink`, `--ink` | hover `--surface-2` |
| Input | 36px | 0 10px | `--radius` | 12px mono | `--surface`, 1px `--ink` | focus 2px accent · error `--danger` + 2px sol şerit · disabled %45 |
| Kart | içerik | 16px | `--radius-lg` | — | `--surface`, 1px `--ink`, gölge yok | başlıkta `--surface-2` şerit |
| Chip / badge | 22px | 0 8px | `--radius` | 11px/400 Share Tech Mono | `--surface-2`, 1px `--ink` | seçili: accent zemin |
| Nav | 48px | 0 20px | 0 | 11px mono | `--bg`, alt **2px ink** kural | aktif: 2px alt kural + kademe noktaları |
| Tablo satırı | 32px | 4px 8px | 0 | 12px (sayı mono) | alt 1px `--line`, zebra `--surface-2` | seçili: sol 8px kademe şeridi |
| Modal / sheet | — | 18px | `--radius-lg` | 14px/400 | `--surface`, 1px `--ink`, `--shadow` | açılış 4 kademede (0/25/50/100) |
| Toast | 34px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--ink` | 3200ms, alt şerit + kademe sayacı |
| Grafik paleti | — | — | — | — | `--accent` · `--ink` · `--ink-soft` (4 seri) | basamaklı çizgi (step-after), 8px kademe |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px` (kenarlık ink olduğundan halka accent).
- Dokunma hedefi: en az 44×44px; 36px buton ve 22px chip `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 16px ızgara, dişli/çentik geometrisi, keskin uç |
| Fotoğraf | Yok — mekanizma şeması ve kademe göstergesi fotoğrafın yerini alır |
| İllüstrasyon | Yalnız kademe şeması (4 çentik + iğne) |
| Doku | `--grain: .01` + 8px kademe ızgarası |
| Logo alanı | Share Tech Mono kelime logosu, 0.08em; 14px dört çentik işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | Kademe paneli 4/8; sağda dört çentik gösterge | `shots/01-landing.png` |
| Dashboard | yüksek | Paneller 2px kuralla; göstergeler satır altında | `shots/02-dashboard.png` |
| Form | düşük | 36px alanlar; her alan kademe ızgarasına hizalı | — |
| Liste / tablo | yüksek | 32px satır, zebra, seçili sol 8px şerit | — |
| Boş durum | orta | Boş gösterge (0/4 dolu) + tek eylem | — |
| Onboarding | yüksek | Sihirbaz 4 adım; her adım bir kademe, geri dönüş yok | — |
| Pricing | orta | Plan kartları 2px ink kenar; öne çıkan accent kilit çizgisi | — |
| Giriş / ödeme | çok düşük | Tek panel, düşük yoğunluk, hata sol şeritle | — |
| Modal | orta | Açılış 4 kademede; ESC kademeyi atlamaz (geri sarar) | — |
| Bildirim / toast | orta | Alt şerit + kademe sayacı | — |
| Hata | düşük | `--danger` kenar + "kademe 2'de durdu" bilgisi | — |
| Profil / ayar | orta | Kademe sayısı (sabit 4), ızgara görünürlüğü, sesli geri bildirim | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — kademeli gösterge — çentik cetveli, 8px basamak, "0 [###-----] 8".

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.36s**, y **0px**, stagger **0.05** | `steps(4, end)` | `opacity` (4 kademe) |
| Scroll reveal | **0.31s**, trigger **top 73%**, y **12px**, `once: true` | `steps(4, end)` | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **0.45**, mesafe **+65%** (kısa ve sert) | scrub doğrusal | `transform` (kademe 0→4) |
| Hover | **85ms**, görsel scale **1.008** | `steps(2, end)` | `background-color` |
| Basma | 85ms | `steps(2, end)` | `transform` (2px aşağı, kilit) |
| Kademe göstergesi | 4 × 85ms | `steps(4, end)` | `opacity` (çentik dolar) |

- Bu stilin ölçülebilir imzası: `enter 0.36s / steps(4, end) / 0px / 0.05` + `scroll top 73% / 0.31s / 12px` + `pin scrub 0.45 / +65%` + `hover 85ms / 1.008`. Katalogdaki `steps(4, end)` kullanan diğer stiller farklı süre (0.16–0.36s dışında) ve farklı offset kullanır; `scrub 0.45` yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; kademeler anında son konuma atlar, gösterge dolu görünür.
- Bu stile yasak hareket: yumuşak ease/spring geçiş, sürekli dönen çark, parallax, gradient geçişi.

## Koyu mod

| Token | Açık (gündüz panosu) | Koyu (gece vardiyası) |
|---|---|---|
| `--bg` | `#a0a6aa` | `#15191c` |
| `--bg-2` | `#979da1` | `#1b2024` |
| `--surface` | `#abb1b5` | `#22272b` |
| `--surface-2` | `#8b9195` | `#2b3136` |
| `--ink` | `#0f1417` | `#eaf0f3` |
| `--ink-soft` | `#2b3238` | `#adb8be` |
| `--ink-faint` | `#485056` | `#7f8a90` |
| `--accent` | `#1f6b3d` | `#4fbf7a` |
| `--accent-ink` | `#ffffff` | `#05170c` |
| `--line` | `rgba(15,20,23,.22)` | `rgba(234,240,243,.17)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **15.37:1** · `ink-soft/bg` = **8.74:1** · `accent-ink/accent` = **7.99:1** · `ink-faint/bg` = **5.00:1**.
- Koyu modda değişen başka ne var: kademe ızgarası `--line` yerine `--ink` %8 karışımı; accent açılır (orman yeşili → sinyal yeşili); 2px kurallar `--ink` kalır.
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="stepped-mechanism"]`.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **5.92:1** açık / **6.27:1** koyu · `--warn / bg` = **5.90:1** / **6.21:1** · `--ok / surface` = 5.35:1 / 5.30:1 (warn) · devre dışı buton metni = **4.51:1** / **7.44:1** · ghost buton kenarı = **3.03:1** / **5.41:1** (eşik 3:1).

## Zorunlu kurallar
- Her geçiş **4 kademede** tamamlanır: `steps(4, end)`; ara değer (lerp) yok.
- Kademe göstergesi (4 çentik) hareketin nerede olduğunu gösterir.
- Tüm ölçüler 8px kademe ızgarasına hizalı.
- Kilit: aktif durumda öğe 2px aşağı iner ve orada kalır.
- Ana kenarlık ve kurallar `--ink`; hairline yalnız ikincil ayırıcıda.
- Accent yalnız "kilitli / tamamlanan kademe".

## Yasaklar
- Yumuşak yay / `ease-out` geçiş (kademe hissi kaybolur).
- Sürekli dönen çark, marquee, sürekli gösterge animasyonu.
- 16px üzeri radius, hap buton.
- Gradient, cam blur, glow.
- Kademe atlama (0 → 100).
- Serif display karışımı; ikinci display aile.
- Orta gri zemin üstünde `--ink-faint` ile etkileşimli metin.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `ink-soft/bg` = 5.28:1; gövde 7.53:1; accent üstü 6.50:1; `ink-faint/bg` 3.34:1 yalnız dekoratif.
- Orta ton zemin kontrast rezervini düşürür: etkileşimli metin daima `--ink` veya `--ink-soft`.
- Kademe göstergesi yalnız görsel değil: ekran okuyucu için `aria-valuenow="2" aria-valuemax="4"`.
- Hareket kademeli olduğu için vestibüler risk düşüktür; `prefers-reduced-motion` altında atlama yok, doğrudan son durum.
- Odak halkası 2px accent + 1px offset; ink kenarlıkla net ayrışır.
- 390px'te kademe göstergesi 4 çentik sabit, paneller tek sütun; taşma yok.

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
| "Web" gibi duruyor | beyaz panel + hairline | orta gri zemin + 1px ink kenar |
| Kademe hissedilmiyor | ease-out kullanıldı | `steps(4, end)` zorunlu |
| Sıçrama rahatsız ediyor | kademe 4'ten az (2) | 4 kademeye çıkar, göstergeyle eşle |
| Panel yüzüyor | gölge ağır | gölgeyi kısalt, ağırlığı 2px alt kurala ver |
| Okunmuyor | ink-faint etkileşimli metinde | `--ink-soft` kullan |
| Mobilde sıkışık | 36px hedefler | `::before` ile 44px alan |

## Komşu stiller

- **Uyumlu:** `machined-metal-panel` — endüstriyel panel dili; doku azaltılırsa ortak çalışır.
- **Uyumlu:** `mes-production-line` — üretim hattı ekranı; kademe mantığı eklenebilir.
- **Uyumlu:** `calibration-lab` — ölçüm paneli; kademe göstergesi tamamlayıcıdır.
- **Yasak:** `claymorphism` — yumuşak kil yüzeyi kademe sertliğini bozar.
- **Yasak:** `ethereal` — sis/blur mekanik okunurluğu yok eder.
- **Yasak:** `memphis` — dekoratif geometri kademe dilini gürültüye çevirir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/steps | kademeli geçiş tanımı |
| https://m3.material.io/styles/motion/easing-and-duration/tokens-specs | denetimli geçiş süreleri |
| https://www.isa.org/standards-and-publications/isa-standards/isa-101-standards | operatör paneli durum gösterimi |
| https://www.nngroup.com/articles/progress-indicators/ | kademe göstergesi okunurluğu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Stepped Mechanism (styles/104-stepped-mechanism/style.md, tokens.json)
Token: sadece [data-style="stepped-mechanism"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Share Tech Mono 400 (yalnız başlık), gövde Inter 400/600, etiket IBM Plex Mono.
  Ölçek 11/12/13/14/18/24/38; gövde ölçü 72ch.
Yüzey: orta gri metal (#a0a6aa); radius 8/16px; ana kenarlık 1px var(--ink), alt kural 2px.
Imza: 8px kademe ızgarası + 4 çentikli kademe göstergesi + kilit çizgisi (2px aşağı kalır).
Renk: accent #1f6b3d yalnız kilitli/tamamlanan durum; orta ton nedeniyle ink-faint etkileşimde yok.
Hareket: enter .36s steps(4, end) y0 stagger .05; scroll top 73% .31s y12 once;
  1 pin scrub .45 (+65%); hover 85ms steps(2, end); reduced-motion'da kademeler anında atlar.
Yasak: yumuşak ease/spring, sürekli dönen çark, 16px üstü radius, gradient/blur, kademe atlama.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm geçişler `steps(4, end)` ve gösterge 4 çentik.
- [ ] Aktif durumda öğe 2px aşağı kalıyor (kilit).
- [ ] Tüm ölçüler 8px ızgarada.
- [ ] Kontrast: gövde 7.53:1, accent üstü 6.50:1.
- [ ] Gösterge `aria-valuenow` ile erişilebilir.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken kademe atlamıyor, son duruma gidiyor.

## Token

```css
[data-style="stepped-mechanism"] {
  --bg: #a0a6aa; --bg-2: #979da1;
  --surface: #abb1b5; --surface-2: #8b9195;
  --ink: #0f1417; --ink-soft: #2b3238; --ink-faint: #485056;
  --accent: #1f6b3d; --accent-ink: #ffffff;
  --line: rgba(15,20,23,.22);
  --radius: 8px; --radius-lg: 16px;
  --shadow: 0 8px 18px -14px rgba(15,20,23,.5); --shadow-hard: 0 2px 0 var(--ink);
  --font-display: "Share Tech Mono", ui-monospace, SFMono-Regular, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.03em; --blur: 0px; --grain: .01;
  --danger: #8f1f1c; --danger-ink: #ffffff;
  --ok: #0e2f1b; --warn: #382603;
}
```

Koyu mod bloğu `styles/104-stepped-mechanism/token-block.css` içinde `[data-theme="dark"][data-style="stepped-mechanism"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
