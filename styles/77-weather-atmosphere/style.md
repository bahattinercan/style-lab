# 77 · Hava Durumu & Atmosfer

> **Bir cümlede:** Gökyüzünün katmanlarını taklit eden arayüz: yukarıdan aşağı incelen atmosfer gradyanı, sisli cam nav, bulut kütlesi ve tek gölgeyle kurulan ferah boşluk.

| | |
|---|---|
| **Hissiyat** | ferah, hafif, açık, öngörülebilir |
| **En iyi** | hava/çevre uygulaması, seyahat planlama, enerji tüketimi & iklim paneli, açık hava etkinliği ürünü |
| **Kaçın** | ödeme/güvenlik ekranı, yoğun operasyon tablosu — cam katman karar hızını düşürür |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (cam yüzey + gradyan; en düşük metin çifti 6.18:1) |
| **Aile** | Doğa & Organik (76–85) · **Token** | `kit/tokens.css` → `[data-style="weather-atmosphere"]` |
| **Kompozisyon** | `split` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Hava Durumu & Atmosfer, ekranı **gökyüzü kesiti** gibi kurar: üstte açık mavi, aşağıda koyulaşan tek aile gradyan; nav ve modal sisli cam (blur 8px, opaklık %72); kart üstünde 2px atmosfer bandı; alan dolguları gradyanla söner. Yoğunluğu feda eder; karşılığında derinlik hissi ve "her şey akış halinde" okuması kazanır.

Kurucu kararları üç tanedir. Birincisi **tek renk ailesi**: gradyan yalnız mavi-mavi arasında; rainbow gradyan yok. İkincisi **cam sadece iki yerde** (nav, modal) — her kartı cam yapmak okunurluğu öldürür. Üçüncüsü **boşluk atmosferdir**: bölüm dikey boşluğu 88px; ferahlık süsle değil boşlukla kurulur.

Bedeli: düşük kontrast riski. Bu yüzden cam yüzeyde opaklık %72'nin altına inmez ve cam üstü metin daima `--ink` kullanır.

### Ne değildir
- **Glassmorphism (08) değildir:** 08'in tamamı camdır ve ışık kenarı imzadır; 77'de cam yalnız nav + modal, imza ise **atmosfer gradyanı + bulut kütlesi**.
- **Liquid Glass (09) değildir:** 09 kırılma/sıvı hareketi taklit eder; 77'de blur sabit, hareket 780ms yumuşak ve sıvı efekt yok.
- **Aurora UI (12) değildir:** 12 çok renkli ışıma (mor/yeşil) taşır; 77 tek mavi ailesi, ışıma yerine gradyan.
- **Ethereal (29) değildir:** 29 sis + serif + düşük kontrast ile rüya kurar; 77 Poppins + yüksek kontrast (6.18:1) ile **okunur** hava durumu.

### Nereden gelir
Meteoroloji görselleştirme geleneğinden (katmanlı haritalar, izobar eğrileri) ve Apple'ın malzeme dilinden. Bugün tekrar kullanılıyor çünkü çevre/enerji ürünleri "şu an ne oluyor" sorusunu atmosfer metaforuyla hızlı anlatıyor. Klişeye dönmemesi için korunacak detay: **gradyanın tek aile içinde kalması** ve camın iki bileşenle sınırlı olması.

### 3 saniyede tanıma testi
1. Zemin yukarıdan aşağı incelen mavi gradyan; renk ailesi tek.
2. Nav sisli cam: altındaki içerik hafifçe bulanık görünüyor (blur 8px).
3. Kart üstünde 2px soldan sağa sönen atmosfer bandı var.
4. Buton 46px, radius 10px; gölge tek katman ve yumuşak.
5. Bölümler arası boşluk belirgin biçimde büyük (88px).

## Görsel imza
- **Atmosfer gradyanı:** `linear-gradient(180deg, accent%10 + bg 0%, bg 46%, bg-2 100%)` — gövde zemini, tek aile.
- **Sisli cam:** yalnız nav ve modal: `backdrop-filter: blur(var(--blur))` + `surface %72`; opak fallback zorunlu.
- **Bulut kütlesi:** hero görselinde iki radial elips (surface %92 ve accent %14) + 160° gradyan.
- **Atmosfer bandı:** kart `::before`, 2px, `accent %42 → transparent`.
- **Hava piktogramı:** 2px çizgi, yuvarlak uç, dolgu %15 geçmez.
- **Nefes boşluğu:** bölüm dikey 88px (mobil 52px), kart padding 24px.
- **Hareket imzası:** 780ms `cubic-bezier(.25,.6,.15,1)`, 18px — bulut süzülmesi, sıçrama yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eef2f7` | sayfa zemini (yüksek gökyüzü) | kart zemini |
| `--bg-2` | `#e4eaf2` | gradyanın alt durağı, ikincil bant | buton zemini |
| `--surface` | `#ffffff` | kart / panel | sayfa zemini |
| `--surface-2` | `#f6f9fc` | chip, tablo başlığı | cam yüzey |
| `--ink` | `#1a2430` | başlık, gövde, cam üstü metin | dekoratif çizgi |
| `--ink-soft` | `#4d5b6b` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#75828d` | yalnız dekoratif çizgi, eksen etiketi | etkileşimli metin |
| `--accent` | `#2b6491` | birincil eylem, gradyan üst durağı, veri serisi | geniş dekoratif dolgu |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(26,36,48,.14)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **13.95:1** · `ink-soft / bg` = **6.18:1** · `accent-ink / accent` = **6.30:1** · `ink-faint / bg` = **3.50:1** (yalnız eksen/dekoratif).
- Tek vurgu kuralı: tek mavi ailesi. Durum renkleri (`--danger`, `--ok`, `--warn`) yalnız durum noktası + etikette.
- Yasak kombinasyon: cam yüzey üstünde `--ink-soft` (blur kontrastı düşürür); accent dolgu üstünde `--ink-soft`.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins (`--font-display`) | 54px (mobil 32px) | 500 | 1.04 | `-.01em` |
| H2 | Poppins | 34px | 500 | 1.14 | `0` |
| H3 | Poppins | 22px | 500 | 1.30 | `0` |
| Gövde | Inter (`--font-body`) | 16px | 400 | 1.60 | `0` |
| Küçük gövde | Inter | 13px | 400 | 1.55 | `0` |
| Etiket / mono | Space Mono (`--font-mono`) | 11px | 400 | 1.4 | `.10em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 11 · 12 · 13 · 16 · 22 · 34 · 54.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 5.2vw, 54px); line-height: 1.04 }` — 390px'te 32px.
- Gövde satır uzunluğu en fazla **64ch**; hero alt başlığı 48ch ile sınırlanır.
- Ağırlık kuralı: display 500 (600 üstü yasak — Poppins kalınlaşınca "kurumsal" olur), gövde 400/600, mono 400.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1240px (içerik 1192px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1240; 768 altında tek kolon, cam nav yüksekliği 56px |

- Asimetri kuralı: gökyüzü bantları **tam genişlik**; içerik 8/4 — ekran başına 1 asimetrik bölüm.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik "hava bandı" olur.
- Boşluklar 4'ün katı; kart arası 24px'in altına inmez (ferahlık ölçülebilir olmalı).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` → `--bg-2` | — | dikey atmosfer gradyanı |
| Kart | `--surface` | `0 12px 32px rgba(26,36,48,.12)` | kart, panel, KPI |
| Yüzen katman | cam: `surface %72` + blur 8px | `0 24px 56px rgba(26,36,48,.20)` | modal, menü, toast, nav |

- Kenarlık formülü: `1px solid var(--line)`; cam yüzeyde ek olarak 1px `--line` (kenar ışığı yok, kenar çizgisi var).
- Derinlik nereden gelir: **yumuşak gölge + sisli cam**. Sert/ofset gölge yok.
- Radius: `--radius: 10px` (buton, input), `--radius-lg: 18px` (kart, panel, modal); chip 999px, üst sınır 18px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | `0 24px` | 10px | 15px Inter 600 | accent dolgu, accent-ink metin, `0 6px 16px` | hover: accent %88 + ink, gölge 8/20 · active: translateY(1px), gölge 4/10 · focus: 2px accent outline + 3px offset · disabled: opacity .45, gölge yok · loading: bulut katmanı opaklık 0→1 (700ms) |
| Buton (ikincil) | 46px | `0 24px` | 10px | 15px Inter 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 46px | `0 16px` | 10px | 15px Inter | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %30 outline · filled: değer 600 · error: `--danger` çerçeve + 12px etiket · disabled: opacity .45 |
| Kart | içerik | 24px | 18px | H3 + gövde | `--surface` + 1px `--line` + `0 12px 32px` + 2px üst bant | hover: gölge 12/36 |
| Chip / badge | 28px | `0 12px` | 999px | 12px Inter 600 | `surface %78` + blur + 1px `--line` | accent: accent %14 zemin + accent metin |
| Nav | 64px | `0 28px` | 0 | 15px Inter 500 | cam: `surface %72` + blur 8px + alt hairline | aktif: accent metin |
| Tablo satırı | 46px | `10px 14px` | — | 15px Inter, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 28px | 18px | 22px display + mono etiket | cam yüzey + `0 24px 56px` + opak fallback | açılış: 18px süzülme, 780ms |
| Toast | 44px | `10px 16px` | 10px | 14px Inter 600 | cam yüzey + accent nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; alan dolgusu %14 → %0 gradyan |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px`; cam yüzeyde 3px şart (bulanıklık halkayı yer).
- Dokunma hedefi: en az 44×44px — butonlar 46px, chip 28px ama satır içi hedef padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, yuvarlak uç, 24px ızgara; bulut/güneş/yağış, dolgu %15 |
| Fotoğraf | gökyüzü/atmosfer karesi: düşük kontrast, mavi-sıcak geçişli, 18px radius kırpma |
| İllüstrasyon | katmanlı bulut formu (2–3 elips), gradyanla; sert kenar yok |
| Doku | grain %2; cam katmanlarda blur 8px, opaklık %72 |
| Logo alanı | geometrik sans wordmark + bulut noktası, 28px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | H1 54px + bulut kütlesi görseli + tek CTA; cam nav | `shots/01-landing.png` |
| Dashboard | düşük | 4 KPI + tek grafik; gradyan yalnız zeminde | `shots/02-dashboard.png` |
| Form | düşük | 46px input, tek kolon; hata durumu etiketle | — |
| Liste / tablo | düşük | 46px satır, hover `--surface-2` | — |
| Boş durum | orta | bulut illüstrasyonu + "veri bekleniyor" mono etiketi | — |
| Onboarding | yüksek | 3 adım, her adımda tek soru; cam ilerleme çubuğu | — |
| Pricing | orta | üç kart; öne çıkan kart accent üst bant | — |
| Giriş / ödeme | çok düşük | cam kullanılmaz; sade kart + tek CTA | — |
| Modal | orta | cam yüzey + opak fallback + 24/56 gölge | — |
| Bildirim / toast | orta | üst-sağ cam şerit + accent nokta | — |
| Hata | düşük | `--danger` nokta + etiket; zemin değişmez | — |
| Profil / ayar | orta | iki kolon form, cam yok | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **780ms** | `cubic-bezier(.25,.6,.15,1)` | `opacity` + `translateY(18px)`; stagger **0.065s** |
| Scroll reveal | **640ms** | aynı eğri | trigger `top 83%`, `translateY(20px)`, `once: true` |
| Pin / scrub | **1.35** | `transform` + `backdrop-filter` | **açık** — atmosfer panosu `+240%` mesafede pin + scrub (ekran başına 1) |
| Basma | **180ms** | aynı eğri | `translateY(1px)`, gölge küçülür |
| Geçiş / sayfa | 360ms | aynı eğri | opacity + 12px |
| Hover | **260ms** | aynı eğri | görsel ölçek **1.012** |
| Ödül / vurgu | 780ms | aynı eğri | bulut kütlesi opaklık %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 0.78s / cubic-bezier(.25,.6,.15,1) / 18px / 0.065` · `scroll = top 83% / 0.64s / 20px / once` · `pin = true / scrub 1.35 / +240%` · `hover = 260ms / 1.012`.
- Bant içi fark: 76'dan (0.68s / 24px / pin yok), 78'den (0.48s / 32px / scrub 0.7), 79'dan (0.83s / 40px / scrub 1.05), 80'den (0.57s / 22px / pin yok) en az dört parametrede ayrışır. Mevcut 72 stil içinde en yakını 08-glassmorphism (`0.8s / power3.out / 24px / 0.06`) — beş parametre farklı; scrub 1.35 bandın en yüksek değeri (bütçe: 1.4 üstü gecikmeli his).
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin kapalı, blur geçişi yok (blur statik kalır).
- Bu stile yasak hareket: ekran başına 1'den fazla sürekli bulut animasyonu, saniyede 3 üstü flash, yatay kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eef2f7` | `#0e141b` |
| `--surface` | `#ffffff` | `#18222d` |
| `--ink` | `#1a2430` | `#e6eef6` |
| `--accent` | `#2b6491` | `#6fb3e6` |
| `--ink-soft` | `#4d5b6b` | `#a8b7c6` |
| `--line` | `rgba(26,36,48,.14)` | `rgba(230,238,246,.16)` |

- Koyu modda değişen başka ne var: gradyanın üst durağı accent %10 → %16 (gece göğü), cam yüzey opaklığı %72 → %64 ama blur 8px korunur (koyu zeminde daha okunur), gölge yerine 1px `--line` öne çıkar.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Zemin atmosfer gradyanı tek mavi ailesinde: en fazla 2 durak (`--bg` → `--bg-2`).
- Cam yalnız nav ve modal: `blur var(--blur)` = 8px, opaklık %72, opak fallback zorunlu.
- Radius 10px kontrol / 18px kart; 28px üstü yok.
- Gölge tek katman yumuşak (`0 12px 32px`); sert/ofset gölge yasak.
- Hava piktogramı 2px çizgi, dolgu %15 geçmez.
- Bölüm dikey boşluğu ≥ 88px (mobil 52px).

## Yasaklar
- Sert siyah zemin veya tam ekran saf beyaz.
- Serif display.
- Doygun ikinci-üçüncü renk, gökkuşağı gradyanı.
- Kalın 3px+ çerçeve, 0px keskin radius.
- Ekran başına 1'den fazla sürekli bulut/parıltı animasyonu.
- Opak fallback olmadan cam yüzey.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.18:1** (eşik 4.5); `ink-faint / bg` = **3.50:1** yalnız eksen/dekoratif.
- Cam üstü metin daima `--ink` (13.95:1); cam üstünde `--ink-faint` kullanılmaz (`prefers-reduced-transparency` desteklenir).
- Hareket/parlama hassasiyeti: düşük-orta — bulut animasyonu ekran başına ≤1, flash yok; `prefers-reduced-motion` pin/blur geçişini kapatır.
- Cam yüzeylerde `@supports not (backdrop-filter: blur(1px))` → opak `--surface` fallback.
- Odak görünürlüğü: cam ve gradyan zeminde 2px accent outline + **3px** offset; 1px offset bulanıklıkta kaybolur.

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
| Okunmuyor, "sisli" | cam her karta uygulanmış | cam yalnız nav + modal, opaklık %72 |
| Ekran "oyuncak" | gökkuşağı gradyan eklenmiş | tek mavi ailesi, 2 durak |
| Kontrast düşük | cam üstünde `--ink-soft` | cam üstü metin `--ink` |
| Boğucu his | bölüm boşluğu 40px'e inmiş | 88px (mobil 52px) koru |
| Blur mobilde bantlanıyor | blur 8px üstü / düşük güç | 8px sabit, mobilde statik blur |
| Performans | ekran başına 3+ backdrop-filter | cam katman ≤2 |

## Komşu stiller

- **Uyumlu:** `aurora-ui` — aynı atmosfer dili; Aurora yalnız hero görselinde garnitür.
- **Uyumlu:** `ethereal` — sis ve yumuşak geçiş; Ethereal tek bölümde (hikâye) kullanılır.
- **Uyumlu:** `liquid-glass` — cam yüzey; Liquid Glass yalnız nav'da.
- **Yasak:** `terminal-ui` — mono yoğunluk ve kesik hareket atmosfer hissini bozar.
- **Yasak:** `safety-signage` — yüksek sesli uyarı dili ferahlık iddiasıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Rayleigh_scattering | gökyüzü gradyanının doğal durakları |
| https://developer.apple.com/design/human-interface-guidelines/materials | cam yüzey opaklığı ve blur ölçüsü |
| https://community.wmo.int/en/activity-areas/observations | hava durumu piktogram sözlüğü |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | cam üstü çizgi ve ikon kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Hava Durumu & Atmosfer (styles/77-weather-atmosphere/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="weather-atmosphere"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: dikey gradyan bg → bg-2, üstte accent %10; tek mavi ailesi, 2 durak.
Tipografi: --font-display Poppins 54/34/22 (500, -.01em); --font-body Inter 16px/1.60;
  --font-mono Space Mono 11px etiket (.10em, uppercase).
Yüzey: --bg / --surface + 1px var(--line) + 0 12px 32px / cam (surface %72 + blur var(--blur)) + 0 24px 56px.
  Radius 10px kontrol, 18px kart. Cam yalnız nav + modal, opak fallback zorunlu.
Renk: tek mavi ailesi accent #2b6491. ink/bg 13.95:1, ink-soft/bg 6.18:1, accent-ink/accent 6.30:1, ink-faint/bg 3.50:1.
Bileşen: buton/input 46px (0 24px / 0 16px); chip 28px hap; odak 2px accent + 3px offset.
Hareket: enter 780ms cubic-bezier(.25,.6,.15,1) 18px stagger .065; scroll top 83% 640ms 20px once;
  pin scrub 1.35 (+240%, ekran başına 1); hover 260ms görsel 1.012. prefers-reduced-motion zorunlu.
Yasak: sert siyah, serif display, gökkuşağı gradyan, kalın çerçeve, opak fallback'siz cam, >1 sürekli bulut animasyonu.
Çıktı: bileşen kodu + tek paragraf not (atmosfer gradyanını ve cam katmanı nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: atmosfer gradyanı, sisli cam nav, bulut kütlesi, 2px üst bant.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 13.95 / 6.18 / 6.30 — hepsi eşik üstü.
- [ ] Cam yüzeyde opak fallback var; cam üstü metin `--ink`.
- [ ] 390px'te tek kolon, cam nav 56px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken pin ve bulut animasyonu duruyor.

## Token

```css
[data-style="weather-atmosphere"] {
  --bg: #eef2f7; --bg-2: #e4eaf2;
  --surface: #ffffff; --surface-2: #f6f9fc;
  --ink: #1a2430; --ink-soft: #4d5b6b; --ink-faint: #75828d;
  --accent: #2b6491; --accent-ink: #ffffff;
  --line: rgba(26,36,48,.14);
  --radius: 10px; --radius-lg: 18px;
  --shadow: 0 12px 32px rgba(26,36,48,.12); --shadow-hard: none;
  --font-display: "Poppins", "Jost", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 8px; --grain: 2;
  --danger: #a5342a; --danger-ink: #ffffff;
  --ok: #1f6b4a; --warn: #7d5a08;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="weather-atmosphere"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
