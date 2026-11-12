# 141 · Planetary Service

> **Bir cümlede:** Gezegen yörüngesindeki servis görevlerini eşmerkezli halkalar, mono telemetri ve fırlatma penceresi sayaçlarıyla tek koyu konsolda toplayan operasyon arayüzü.

| | |
|---|---|
| **Hissiyat** | görev odaklı, soğukkanlı, teknik, uzun soluklu |
| **En iyi** | uydu/gezegen servis operasyonları, görev kontrol panosu, telemetri konsolu, yörünge planlama |
| **Kaçın** | tüketici e-ticareti, çocuk/oyun ürünü, açık zeminli kurumsal vitrin — koyu konsol burada "boş" görünür |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.14:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `styles/141-planetary-service/tokens.json` → `[data-style="planetary-service"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Planetary Service, bir arayüzü **görev masası** olarak kurar: solda görev listesi, ortada yörünge panosu, sağda pencere (launch window) sayaçları. Ekranın her yerinde aynı soruya cevap aranır — *hangi cisim, hangi aşamada, ne zaman pencerede?*

Üç kurucu karar: (1) **eşmerkezli halka** — yörünge tek bir görsel öğeyle anlatılır; halka üzerinde en fazla üç cisim olur, fazlası okunurluğu bozar; (2) **mono telemetri** — bütün sayılar IBM Plex Mono ve tabular; birim (km, °, sn) her değerin yanında yazılır, çünkü görev kararı birimsiz veriyle verilmez; (3) **pencere önce** — kritik eşik yalnız renkle değil `T−…` sayacı ve metinle bildirilir.

Display **IBM Plex Mono** (600): başlık da teknik okunur, süs değil talimat gibi durur. Gövde Inter, etiketler yine mono.

Bedeli: bu stil ekranı yoğun kullanır; bu yüzden her panelde tek bir baskın sayı bulunur ve ikincil metrikler `--ink-soft` ile geri çekilir.

### Ne değildir
- **Atlas Console (51) değildir:** 51 harita zeminli ve Cinzel başlıklıdır (radius 8/16); Planetary'de harita yoktur, yörünge halkası ve mono başlık vardır (radius 0).
- **Cockpit Avionics (65) değildir:** 65 Rajdhani + cyan ile uçuş göstergeleri kurar (2px radius, rings); burada display IBM Plex Mono, accent mavi ve radius 0'dır; ölçü birimi her değerde zorunludur.
- **Telemetry Grid (46) değildir:** 46 açık zeminli hairline metrik ızgarasıdır; Planetary koyu ve asimetriktir (8/4).
- **Cyberpunk (22) değildir:** 22 neon sarı ve HUD efektleri kullanır; burada accent tek mavi, glow yoktur.

### Nereden gelir
Görev kontrol odaları (NASA/ESA flight dynamics), uydu servis (on-orbit servicing) operasyonları ve yer istasyonu konsolları. Ekranda yeniden kullanılmasının nedeni: servis görevlerinde kararın **zaman penceresi** üzerinden verilmesi — bu yüzden sayaç, listeden daha öndedir. Klişeye dönüşmemesi için korunacak detay: her değerin birimli olması ve yörünge halkasının gerçekten cisim taşıması.

### 3 saniyede tanıma testi
1. Koyu lacivert zemin; ortada eşmerkezli halka ve üzerinde cisimler.
2. Başlıklar mono (IBM Plex Mono): harfler eşit genişlikte, hafif aralıklı.
3. Her sayının yanında birim var (km, °, sn); pencere sayacı `T−…` biçiminde.
4. Hiçbir köşe yuvarlak değil: paneller ve butonlar keskin (radius 0).
5. Accent mavi yalnız seçili cisim ve birincil eylemde.

## Görsel imza
- **Eşmerkezli halka:** 2 halka (`--accent` + `--line`), merkezde 8px cisim noktası; ekran başına bir kez.
- **Telemetri ızgarası:** 24px aralıklı 1px çizgi, opaklık ≤ %70; yalnız yörünge panelinde.
- **Mono başlık:** 42px, ağırlık 600, tracking 0.04em; gövde Inter.
- **Pencere chip'i:** 22px yükseklik, radius 999px, mono 10px 0.12em; kritik eşikte accent zemin.
- **Radius:** `--radius` 0 ve `--radius-lg` 0 — istisna yok; keskin köşe konsol dili.
- **Gölge:** yalnız yüzen panelde `0 16px 36px -30px`; kartlarda gölge yok.
- **Doku:** `--grain .02` + 96px yıldız tozu (≤ %18).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a1420` | görev zemini | panel zemini |
| `--bg-2` | `#0e1a28` | ikincil zemin, input | yörünge paneli |
| `--surface` | `#12202f` | panel, liste | sayfa zemini |
| `--surface-2` | `#182a3c` | zebra satır, chip, hover | birincil buton |
| `--ink` | `#e6eef7` | metin, değer, başlık | dekoratif dolgu |
| `--ink-soft` | `#a4b6c8` | ikincil metin, etiket | pencere sayacı |
| `--ink-faint` | `#75899e` | yalnız dekoratif ızgara/ayırıcı | etkileşimli metin |
| `--accent` | `#2f6bc4` | seçili cisim, pencere, birincil eylem | dekorasyon |
| `--accent-ink` | `#04151c` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(230,238,247,.15)` | ızgara, kenarlık | metin |

- Ölçülen kontrast: `ink/bg` = **15.82:1** · `ink-soft/bg` = **8.91:1** · `accent-ink/accent` = **5.22:1** · `ink-faint/bg` = **5.14:1**.
- Tek vurgu kuralı: accent yalnız seçim/pencere. Alarm `--danger`, uyarı `--warn`, nominal `--ok`.
- Yasak kombinasyon: accent üstünde `--ink-soft`; aynı ekranda iki farklı halka rengi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | IBM Plex Mono (`--font-display`) | 42px / mobil 26px | 600 | 1.1 | `--tracking` 0.04em |
| H2 | IBM Plex Mono | 24px | 600 | 1.24 | 0.02em |
| H3 | Inter | 18px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.55 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 10–13px | 400/600 | 1.44 | 0.16em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 10 · 12 · 13 · 14 · 18 · 24 · 42.
- Ölçü önerisi: `h1 { font-size: clamp(26px, 3.4vw, 42px); }`
- Gövde metni maksimum satır uzunluğu: 70 ch.
- Ağırlık kuralı: 400 ve 600; 700 yok (mono display'de ağırlık artışı okunurluğu düşürür).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 yörünge paneli 8/4 · 768 tek sütun (sayaç üstte) · 390 halka 120px'e iner |

- Asimetri kuralı: yörünge paneli 8/4; ekran başına bir asimetri.
- Bölüm ritmi: art arda en fazla 3 panel; dördüncü blok tam genişlik telemetri şeridi olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, yörünge paneli |
| Panel | `--surface` | yok | görev listesi, KPI, tablo |
| Yüzen katman | `--surface` + `--shadow` | `0 16px 36px -30px rgba(2,6,12,.95)` | modal, pencere detayı |

- Kenarlık formülü: `1px solid var(--line)`; panel içi ikincil ayırıcı aynı çizgi %60.
- Derinlik nereden gelir: zemin/panel ton farkı ve halka; blur, glow ve iç gölge yok.
- Radius: `--radius` 0 ve `--radius-lg` 0; keskin köşe kuralı tüm bileşenlerde geçerli.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 38px | 0 14px | `--radius` | 12px/600 mono 0.06em | `--accent` zemin, `--accent-ink` | hover %88 (190ms) · active 1px · focus 2px accent · disabled %45 kesikli · loading 3 kademe bar |
| Buton (ikincil) | 38px | 0 14px | `--radius` | 12px/600 mono | şeffaf, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 38px | 0 10px | `--radius` | 12px mono | `--bg-2`, 1px `--line` | focus 2px accent · error `--danger` · disabled %45 |
| Kart | içerik | 16px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | — |
| Chip / badge | 22px | 0 8px | 999px | 10px/600 mono 0.12em | `--surface-2`, 1px `--line` | pencere kritik: accent zemin |
| Nav | 52px | 0 24px | 0 | 12px mono | `--bg`, alt 1px `--line` | aktif sekme 2px accent alt çizgi + UTC saat |
| Tablo satırı | 36px | 6px 10px | 0 | 12px mono | alt 1px `--line`, zebra `--surface-2` | seçili sol 3px accent |
| Modal / sheet | — | 20px | `--radius-lg` | 14px/400 | `--surface`, 1px `--line`, `--shadow` | yörünge detayı + aşama listesi |
| Toast | 38px | 8px 12px | `--radius` | 12px mono | `--surface-2`, 1px `--line` | 4200ms, sağ alt (UTC damgalı) |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--warn` (3 seri) | yörünge eğrisi 2px, %12 dolgu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`.
- Dokunma hedefi: en az 44×44px; 38px buton ve 22px chip `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 18px ızgara; gezegen, yörünge, pencere işaretleri |
| Fotoğraf | Yok — gezegen fotoğrafı yerine yörünge şeması |
| İllüstrasyon | Yalnız eşmerkezli halkalar |
| Doku | `--grain .02` + 96px yıldız tozu ≤ %18 |
| Logo alanı | IBM Plex Mono 600, 0.14em; 14px halka + nokta işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Yörünge paneli 8/4, solda tek cümle + pencere sayacı | `shots/01-landing.png` |
| Dashboard | yüksek | Görev listesi + yörünge + sayaçlar; KPI'lar 3 satır | `shots/02-dashboard.png` |
| Form | düşük | Görev tanımı: cisim, aşama, pencere; mono alanlar | — |
| Liste / tablo | yüksek | 36px satır, zebra, sağda pencere sayacı | — |
| Boş durum | orta | Boş halka + "görev planla" eylemi | — |
| Onboarding | yüksek | 3 adım: cisim → yörünge → pencere | — |
| Pricing | orta | Servis kademeleri tablosu; her satırda birimli değer | — |
| Giriş / ödeme | çok düşük | Tek panel, halka yok; UTC saat görünür | — |
| Modal | orta | Yörünge detayı: halka + aşama listesi | — |
| Bildirim / toast | orta | UTC + görev kimliği mono tek satır | — |
| Hata | düşük | `--danger` chip + "pencere kaçırıldı" metni | — |
| Profil / ayar | orta | Birim sistemi, halka ölçeği, uyarı eşiği | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.57s**, y **22px**, stagger **0.06** | `cubic-bezier(.24,.72,.18,1)` | `opacity` + `transform` |
| Scroll reveal | **0.67s**, trigger **top 81%**, y **26px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **0.85**, mesafe **+105%** (halka sabitlenir) | scrub doğrusal | `transform` (halka döner) |
| Hover | **190ms**, görsel scale **1.022** | `ease-out` | `transform` |
| Basma | 110ms | aynı eğri | `transform` (1px) |
| Sayaç tiki | 190ms | `linear` | `opacity` (yalnız pencere chip'i) |

- Bu stilin ölçülebilir imzası: `enter 0.57s / cubic-bezier(.24,.72,.18,1) / 22px / 0.06` + `scroll top 81% / 0.67s / 26px` + `pin scrub 0.85 / +105%` + `hover 190ms / 1.022`. Ne `0.57s` giriş süresi ne de `scrub 0.85` katalogda başka bir stilde birlikte geçer.
- `prefers-reduced-motion`: tüm süreler 0.01ms; halka dönüşü ve scrub kapanır, sayaç statik kalır.
- Bu stile yasak hareket: sürekli dönen yörünge (reduced-motion karşılığı yoksa), saniyede 1+ telemetri flaşı, parallax, gradient geçişi.

## Koyu mod

| Token | Açık (görev konsolu) | Koyu (gece vardiyası) |
|---|---|---|
| `--bg` | `#0a1420` | `#010307` |
| `--bg-2` | `#0e1a28` | `#08111a` |
| `--surface` | `#12202f` | `#0a1a2b` |
| `--surface-2` | `#182a3c` | `#101d2a` |
| `--ink` | `#e6eef7` | `#f5f9fe` |
| `--ink-soft` | `#a4b6c8` | `#c0cfdf` |
| `--ink-faint` | `#75899e` | `#8095a6` |
| `--accent` | `#2f6bc4` | `#a8d0ff` |
| `--accent-ink` | `#04151c` | `#04161d` |
| `--line` | `rgba(230,238,247,.15)` | `rgba(245,249,254,.22)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **18.17:1** · `ink-soft/bg` = **10.94:1** · `accent-ink/accent` = **8.54:1** · `ink-faint/bg` = **6.37:1**.
- Koyu modda değişen başka ne var: accent bir ton açılır, ızgara opaklığı %70 → %55, halka `--line` yerine `--ink` %10 kullanır.
- Koyu mod ayrışması: zemin `#010307` (%13 parlaklık), panel bandı **11.3×** açık, accent `#2f6bc4` → `#a8d0ff` (3.27×).
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="planetary-service"]`.

## Zorunlu kurallar
- Her değer birimli (km, °, sn) ve mono/tabular.
- Yörünge halkası ekran başına bir kez; halkada en fazla 3 cisim.
- Pencere kritik eşiği renk + `T−…` metni + chip ile üçlü kodlanır.
- Başlık display mono (IBM Plex Mono 600); gövde Inter.
- Koyu zemin zorunlu; panel ile zemin arasında en az bir ton farkı.
- Ekran başına tek canlı öğe (sayaç veya halka dönüşü).

## Yasaklar
- Gezegen fotoğrafı/kolajı, NASA görsel duvarı.
- Neon glow, cam blur, gradient atmosfer.
- Yuvarlak köşe ve hap buton (radius daima 0).
- İkiden fazla accent tonu.
- Saniyede 1+ yanıp sönen uyarı.
- Birimsiz sayı ve saatsiz telemetri.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 5.22:1; gövde 15.82:1; `ink-faint/bg` = 5.14:1.
- `--ink-faint` yalnız ızgara ve dekoratif etiketlerde; etkileşimli metinde kullanılmaz.
- Pencere durumu renk + metin + sayaç ile kodlanır (renk körlüğü güvenli).
- Odak halkası 2px accent + 2px offset; koyu zeminde net.
- 390px'te halka 120px'e iner, sayaç üste taşınır; yatay kaydırma yok.
- `prefers-reduced-motion` açıkken halka ve sayaç animasyonu durur.

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
| "Boş konsol" hissi | düşük yoğunluk | panele tek baskın sayı + birim ekle |
| Değer okunmuyor | birimsiz sayı | birim + tabular hizalama zorunlu |
| Halka süs gibi | cisim taşımıyor | halkaya en az bir cisim ve etiket koy |
| "Neon HUD" | glow + renkli halka | glow'u kaldır, tek accent |
| Renk körlüğünde belirsiz | yalnız renkli eşik | `T−…` metni + chip ekle |
| Mobilde taşma | 8/4 korunmuş | 768 altında tek sütun |

## Komşu stiller

- **Uyumlu:** `atlas-console` — koyu operasyon zemini; harita yerine yörünge konur.
- **Uyumlu:** `cockpit-avionics` — gösterge dili; birim zorunluluğu ortak.
- **Uyumlu:** `telemetry-grid` — açık varyant; rapor ekranlarında yan yana kullanılır.
- **Yasak:** `claymorphism` — yumuşak gölge ve radius konsol disiplinini bozar.
- **Yasak:** `dopamine-ui` — çok renkli palet eşik okunurluğunu düşürür.
- **Yasak:** `memphis` — dekoratif geometri telemetri hizasını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.nasa.gov/mission/iss/ | görev aşaması ve UTC damgası dili |
| https://www.esa.int/Enabling_Support/Operations/Ground_Systems_Engineering | pencere ve yörünge gösterimi |
| https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html | uyarıyı renkle sınırlamama |
| https://www.ibm.com/design/language/data-visualization/ | koyu zeminde seri renkleri |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Planetary Service (styles/141-planetary-service/style.md, tokens.json)
Token: sadece [data-style="planetary-service"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display IBM Plex Mono 600 (tracking .04em), gövde Inter 400/600, sayı IBM Plex Mono.
  Ölçek 10/12/13/14/18/24/42; gövde ölçü 70ch; her değer birimli ve tabular.
Yüzey: koyu lacivert (#0a1420); radius 0 (keskin köşe); katman ayrımı 1px var(--line) + ton.
Imza: eşmerkezli yörünge halkası (ekran başına 1, en fazla 3 cisim) + 24px telemetri ızgarası
  + pencere chip'i (T−… sayacı); UTC damgası nav sağında mono.
Renk: tek accent #2f6bc4 (seçim/pencere); alarm --danger, uyarı --warn, nominal --ok.
Hareket: enter .57s cubic-bezier(.24,.72,.18,1) y22 stagger .06; scroll top 81% .67s y26 once;
  1 pin scrub .85 (+105%); hover 190ms scale 1.022; reduced-motion zorunlu.
Yasak: gezegen fotoğrafı, neon glow, yuvarlak köşe, birimsiz sayı, saniyede 1+ flaş.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Her değer birimli ve tabular; sayaçlar `T−…` biçiminde.
- [ ] Halka ekran başına bir ve cisim taşıyor.
- [ ] Kontrast: gövde 15.82:1, accent üstü 5.22:1.
- [ ] Radius 0; hiçbir köşe yuvarlak değil.
- [ ] 390px'te halka küçülüyor, sayaç üstte.
- [ ] `prefers-reduced-motion` açıkken halka/sayaç duruyor.
- [ ] Hiçbir renk/radius hard-coded değil.

## Token

```css
[data-style="planetary-service"] {
  --bg: #0a1420; --bg-2: #0e1a28;
  --surface: #12202f; --surface-2: #182a3c;
  --ink: #e6eef7; --ink-soft: #a4b6c8; --ink-faint: #75899e;
  --accent: #2f6bc4; --accent-ink: #ffffff;
  --line: rgba(230,238,247,.15);
  --radius: 0px; --radius-lg: 0px;
  --shadow: 0 16px 36px -30px rgba(2,6,12,.95); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: .02;
  --danger: #ff8a72; --danger-ink: #1b0a06;
  --ok: #6fe0b0; --warn: #e8c56a;
}
```

Koyu mod bloğu `styles/141-planetary-service/token-block.css` içinde `[data-theme="dark"][data-style="planetary-service"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
