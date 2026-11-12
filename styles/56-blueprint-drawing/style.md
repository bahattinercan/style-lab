# 56 · Blueprint Çizimi

> **Bir cümlede:** Mühendislik paftasının ekrana taşınmış hâli: cyanotype zemin, 8/64px çizim ızgarası ve hiyerarşiyi yalnız çizgi kalınlığıyla kuran teknik arayüz.

| | |
|---|---|
| **Hissiyat** | ölçülü, şeffaf, teknik, güvenilir |
| **En iyi** | mühendislik SaaS paneli, API/şema dokümantasyonu, donanım ürün sayfası, veri modeli anlatımı |
| **Kaçın** | moda kampanyası, çocuk ürünü, duygusal hikâye anlatımı — çizim dili burada "soğuk" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (ölçülen en düşük metin çifti 9.39:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="blueprint-drawing"]` |
| **Kompozisyon** | `type` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Blueprint Çizimi, bir arayüzü **pafta** gibi kurar: zemin cyanotype mavisi, üstünde 8px minor / 64px major çizim ızgarası, her yüzey 1px teknik çizgi. Hiyerarşi renkten değil **çizgi kalınlığından** (1px bilgi, 2px accent karar) ve ölçü etiketlerinden gelir. Süsü feda eder; karşılığında ölçülebilirlik, okunabilir veri yoğunluğu ve "bu ekran bir şeyi tanımlıyor" hissi kazanır.

Kurucu kararları üç tanedir. Birincisi **ızgara görünürdür**: çizgi ağı dekorasyon değil, ölçek göstergesidir; her blok ızgaraya hizalanır. İkincisi **gölge yoktur**: katman ayrımı 1px çizgi + 8px kesikli iç çerçeve (pafta çerçevesi) ile kurulur. Üçüncüsü **her sayı birimlidir**: ölçü etiketi olmayan veri ekrana çıkmaz.

Bedeli: fotoğraf ve duygu taşıyamaz. Blueprint'i klişeden koruyan detay, ızgaranın **gerçekten hizalama aracı** olarak kullanılması — rastgele döşenmiş mavi çizgi deseni değil.

### Ne değildir
- **Terminal UI (45) değildir:** 45 tek mono aile ve steps() kesik hareket kullanır, ızgara çizmez. Blueprint iki aile (Chakra Petch + Space Grotesk) ve görünür çizim ızgarası taşır; hareketi `cubic-bezier(.55,.06,.35,1)` ile 360ms.
- **Conceptual Sketch (32) değildir:** 32 el çizimi, kırık hiza ve Architects Daughter kullanır; Blueprint dijital pafta, kesin hiza ve 0–2px radius.
- **Cyberpunk (22) değildir:** 22 neon ve glow ile teknoloji satar; Blueprint'te glow ve doygun ikinci renk yoktur.
- **Swiss Design (02) değildir:** Swiss siyah/beyaz baskı dilidir ve ızgarayı gizler; Blueprint cyanotype zemin ve görünür ölçü ızgarasıyla konuşur.

### Nereden gelir
Cyanotype (1842) ile çoğaltılan mühendislik paftalarından; ISO 128 çizgi kalınlığı standardından ve günümüzde "sistem şeması / veri modeli" anlatımının geri dönüşünden. Bugün tekrar kullanılıyor çünkü ajan üretimi arayüzlerde en çok kaybolan şey **ölçek ve hiza**; görünür ızgara bu iki kararı zorunlu kılar. Klişeye dönmemesi için korunacak detay: çizgi kalınlığı hiyerarşisi (1px/2px) ve her ölçünün birim taşıması.

### 3 saniyede tanıma testi
1. Zemin koyu cyanotype mavisi; üstünde 64px aralıklı çizgi ağı görünür.
2. Panellerin içinde 8px iç boşluklu **kesikli** ikinci çerçeve var.
3. Buton dolu değil: accent renkli 1px çerçeve + mono büyük harf etiket.
4. Her sayısal bloğun altında birim etiketi (`ms`, `mm`, `%`, `adet`) duruyor.
5. Hiçbir yerde gölge/blur yok; tüm köşeler 0–2px.

## Görsel imza
- **Çizim ızgarası:** `background-size: 64px 64px`, iki `linear-gradient` (yatay+dikey) 1px `--line`; 8px'lik alt bölünme yalnız bileşen içinde.
- **Pafta çerçevesi:** kart ve panelde `::after` ile `inset: 8px`, `1px dashed` accent %32 — gölgenin yerini alır.
- **Çizgi hiyerarşisi:** bilgi 1px `--line`, karar/aktif 2px `--accent`; üçüncü kalınlık yok.
- **Ölçü etiketi:** 10px mono, `.08em` tracking, `--ink-soft`; değerin altında veya sağında, asla başlık üstünde.
- **Buton dili:** 40px yükseklik, `1px solid --accent`, şeffaf zemin, mono uppercase etiket.
- **KPI şeridi:** her KPI kartının solunda 2px accent dikey çizgi (ölçü çizgisi).
- **Hareket imzası:** 360ms `cubic-bezier(.55,.06,.35,1)`, 6px yükselme — çizim "oturur", sıçramaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a1b2b` | sayfa zemini (cyanotype) | kart zemini |
| `--bg-2` | `#0d2133` | input zemini, ikincil bant | buton zemini |
| `--surface` | `#102a40` | kart / panel | sayfa zemini |
| `--surface-2` | `#14344e` | ikincil yüzey, tablo başlığı | birincil CTA |
| `--ink` | `#dceaf5` | başlık, gövde, çizim etiketi | devre dışı metin |
| `--ink-soft` | `#a6c2d6` | açıklama, ölçü birimi | başlık |
| `--ink-faint` | `#6f90a6` | dekoratif hairline, pafta numarası | etkileşimli metin |
| `--accent` | `#6fd3f2` | ölçü çizgisi, aktif durum, birincil buton çerçevesi | büyük dolgu alanı |
| `--accent-ink` | `#04202c` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(220,234,245,.16)` | tüm kenarlık ve ızgara | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.22:1** · `ink-soft / bg` = **9.39:1** · `accent-ink / accent` = **9.84:1** · `ink-faint / bg` = **5.16:1**.
- Tek vurgu kuralı: bir ekranda tek accent (`#6fd3f2`). Durum renkleri (`--danger`, `--ok`, `--warn`) yalnız veri hücresi/etiket içinde, accent ile aynı blokta kullanılmaz.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface` üstünde `--bg` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch (`--font-display`) | 46px (mobil 30px) | 600 | 1.08 | `.01em` |
| H2 | Chakra Petch | 30px | 600 | 1.16 | `.02em` |
| H3 | Chakra Petch | 20px | 600 | 1.30 | `.02em` |
| Gövde | Space Grotesk (`--font-body`) | 15px | 400 | 1.62 | `0` |
| Küçük gövde | Space Grotesk | 12px | 400 | 1.55 | `0` |
| Etiket / ölçü | Share Tech Mono (`--font-mono`) | 10–11px | 400 | 1.4 | `.08em` |

- Ölçek oranı: **1.5** — kullanılan basamaklar 10 · 11 · 12 · 15 · 20 · 30 · 46 (7 basamak, ara değer yok).
- Ölçü önerisi: `h1 { font-size: clamp(30px, 4.4vw, 46px) }` — 390px'te 30px'in altına inmez.
- Gövde satır uzunluğu en fazla **64ch**; ölçü tablosu 100ch'e kadar genişleyebilir (tabular hizalama korunur).
- Ağırlık kuralı: 400 gövde, 500 vurgu, 600 display. 700+ ve 300- yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (görünür çizgi ağı: 8px minor / 64px major) |
| Gutter | 20px |
| Container genişliği | 1240px (içerik 1200px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1240; 768 altında tek kolon, ızgara 32px'e düşer |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm (7/5) — şema solda, açıklama sağda. Kalan bölümler ızgaraya tam hizalı.
- Bölüm ritmi: art arda en fazla **3** aynı hizada blok; dördüncüsü tam genişlik "pafta şeridi" olur.
- Tüm boşluklar 4'ün katı; ölçü etiketi ile değer arasındaki boşluk daima 4px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa + 64px çizgi ağı |
| Kart | `--surface` | yok | panel, kart, KPI; 1px `--line` + 8px kesikli iç çerçeve |
| Yüzen katman | `--surface` + `--line` + accent çerçeve | yok | modal, menü, toast: 1px accent çerçeve ile ayrılır |

- Kenarlık formülü: `1px solid var(--line)` her yüzeyde; karar taşıyan öğede `2px solid var(--accent)`.
- Derinlik nereden gelir: **yalnız çizgi** (ışık, ofset, doku yok). Sıralama kalınlıkla okunur: 1px < 2px accent.
- Radius: `--radius: 0px` (buton, input, chip), `--radius-lg: 2px` (kart, panel, modal). Üst sınır 2px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | `0 16px` | 0 | 11px mono 600 uppercase `.08em` | şeffaf + 1px accent çerçeve, accent metin, gölge yok | hover: accent %14 dolgu · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .45 + kesikli çerçeve · loading: 3 nokta + 1px ilerleme çizgisi |
| Buton (ikincil) | 40px | `0 16px` | 0 | 11px mono | şeffaf + 1px `--line`, `--ink` metin | hover: `--surface` dolgu |
| Input | 40px | `0 12px` | 0 | 12px body | `--bg-2` zemin + 1px `--line` | focus: 2px accent outline offset 1px · filled: sol 2px accent çizgi · error: `--danger` çerçeve + ölçü notu · disabled: opacity .5 |
| Kart | içerik | 20px | 2px | H3 + gövde | `--surface` + 1px `--line` + 8px kesikli iç çerçeve | hover: iç çerçeve accent %50 |
| Chip / badge | 20px | `0 6px` | 0 | 10px mono uppercase `.08em` | şeffaf + 1px `--line` | accent: accent dolgu + accent-ink metin |
| Nav | 56px | `0 24px` | 0 | 11px mono | `--bg` + alt 1px `--line` | aktif: accent metin + 2px alt çizgi |
| Tablo satırı | 36px | `6px 10px` | — | 12px body, tabular-nums | alt 1px `--line` | hover: `--surface-2` · seçili: sol 2px accent |
| Modal / sheet | içerik | 24px | 2px | 20px display + 12px mono pafta no | `--surface` + 1px accent çerçeve | açılış: 6px yükselme |
| Toast | 36px | `8px 12px` | 0 | 11px mono | `--surface` + sol 2px accent | hata: sol çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 4 seri; dolgu yok, tarama serbest |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` (koyu zeminde offset 2px zorunlu — 1px çizgi ağına karışmasın).
- Dokunma hedefi: en az 44×44px; 40px buton mobilde `padding: 0 16px; min-height: 44px` ile büyütülür. Chip görsel olarak 20px ama satır içi hedef 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 16px ızgara, yuvarlatma yok; dolu ikon yasak |
| Fotoğraf | yok — yerine kesit, patlatılmış görünüm, ölçü diyagramı |
| İllüstrasyon | teknik diyagram: ölçü çizgileri, ok uçları, 45° tarama |
| Doku | 64px çizgi ağı (grain 0); nokta/tarama yalnız grafik alanında |
| Logo alanı | title block içinde mono büyük harf; çevresinde en az 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 7/5 bölünme: solda H1 + ölçü etiketli alt başlık, sağda patlatılmış diyagram | `shots/01-landing.png` |
| Dashboard | düşük | ızgara zemini korunur, süs sıfır; KPI'larda 2px accent ölçü çizgisi | `shots/02-dashboard.png` |
| Form | düşük | 1px çerçeve, mono etiket sağda; hata metni ölçü notu biçiminde | — |
| Liste / tablo | düşük | 36px satır, dikey hairline sütunlar, sağa dayalı tabular sayılar | — |
| Boş durum | orta | boş pafta: kesikli çerçeve + "ölçü bekleniyor" mono etiketi | — |
| Onboarding | yüksek | her adım bir pafta; adım numarası title block'ta | — |
| Pricing | orta | üç kolon; öne çıkan plan 2px accent çerçeve, dolgu yok | — |
| Giriş / ödeme | çok düşük | yalnız çizgi ve hiza; süs yok, odak halkası belirgin | — |
| Modal | orta | accent 1px çerçeve + pafta numarası başlık | — |
| Bildirim / toast | orta | sağ üst, 2px accent ölçü çizgisi | — |
| Hata | düşük | kırmızı yalnız çizgi ve etikette; zemin değişmez | — |
| Profil / ayar | orta | sol etiket kolonu 4/8 bölünme | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **360ms** | `cubic-bezier(.55,.06,.35,1)` | `opacity` + `translateY(6px)`; stagger **0.045s** |
| Scroll reveal | **400ms** | aynı eğri | trigger `top 89%`, `translateY(9px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (çizim kaymaz) |
| Basma | **100ms** | aynı eğri | `translateY(1px)` + çerçeve kalınlığı sabit |
| Geçiş / sayfa | 200ms | `cubic-bezier(.55,.06,.35,1)` | opacity + 6px, cross-fade yok |
| Hover | **140ms** | aynı eğri | görsel ölçek **1.005** (ölçü çizgisi kalınlaşmaz) |
| Ödül / vurgu | 360ms | aynı eğri | ölçü çizgisi soldan sağa %0→%100 |

- İmza ölçüleri: `enter = 0.36s / cubic-bezier(.55,.06,.35,1) / 6px / 0.045` · `scroll = top 89% / 0.4s / 9px / once` · `pin = false` · `hover = 140ms / 1.005`.
- Aynı banttaki komşulardan fark: 45'ten (0.18s / steps(3,end) / 0px / 0.03) dört parametrede; 57'den (0.26s / overshoot eğrisi / 4px / 0.02), 58'den (0.14s / linear / 16px), 59'dan (0.44s / 20px) dört parametrede ayrışır. Mevcut 59 stil içinde en yakını 52-experiment-split (6 parametre farkı).
- `prefers-reduced-motion`: tüm süreler 0.01ms, ızgara ve çizgi kalınlığı geçişleri kapanır.
- Bu stile yasak hareket: yay/overshoot, parallax, sürekli döngü, blur geçişi.

## Koyu mod

Koyu modda cyanotype zemini daha da koyulaşır (ΔL −11) ve çizim ızgarası güçlenir; accent cyan bir kademe açılır.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#0a1b2b` | `#04101a` |
| `--surface` | `#102a40` | `#082034` |
| `--ink` | `#dceaf5` | `#e8f2fa` |
| `--accent` | `#6fd3f2` | `#b0eaff` |
| `--ink-soft` | `#a6c2d6` | `#b3ccdd` |
| `--line` | `rgba(220,234,245,.16)` | `rgba(232,242,250,.18)` |

- Koyu modda değişen başka ne var: çizgi ağı opaklığı %16 → %26 (siyah zeminde 1px kaybolmasın), accent bir ton açılır, kesikli iç çerçeve %32 → %26 (fazla parlamasın). Ölçüm: `ink/bg` 16.67:1, `accent-ink/accent` 13.10:1.

## Zorunlu kurallar
- Zemin cyanotype; 8/64px çizim ızgarası her ekranda görünür kalır (kapatılamaz).
- Hiyerarşi yalnız çizgi kalınlığı (1px / 2px accent) ve punto ile kurulur.
- Her veri bloğu ölçü etiketi taşır: birim (`mm`, `ms`, `%`, `adet`) metnin parçasıdır.
- Köşe 0–2px, gölge/blur/gradyan yok.
- Teknik diyagram + ölçü çizgisi imza öğedir; en az bir ekran bölümünde görünür.
- Yüzen katman accent 1px çerçeveyle ayrılır, gölgeyle değil.

## Yasaklar
- Fotoğraf, 3B render, organik illüstrasyon.
- Yumuşak gölge, cam efekti, gradyan zemin, glow.
- Dolu/renkli ikon, emoji ile durum bildirimi.
- 8px üstü radius, hap biçimli buton.
- Süs amaçlı ızgara (ızgara her zaman ölçü taşır).
- Aynı blokta ikiden fazla çizgi kalınlığı.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.39:1** (eşik 4.5); `ink-faint / bg` = **5.16:1** yalnız dekoratif çizgi ve pafta numarasında.
- `--ink-faint` etkileşimli metinde kullanılmaz; ölçü birimleri `--ink-soft` ile yazılır.
- Hareket/parlama hassasiyeti: düşük — sürekli animasyon yok, flash yok; `prefers-reduced-motion` tüm geçişleri kapatır.
- Şeffaf yüzey yok; opak fallback gerekmez. Kesikli çerçeve `--line` yerine accent kullanıldığında `@supports` ile düz çizgiye düşülür.
- Odak görünürlüğü: 1px ızgara üstünde 2px accent outline + 2px offset; outline offset 0 kullanılmaz.

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
| Ekran "mavi kâğıt" gibi, teknik değil | ızgara dekoratif döşenmiş, bloklar hizasız | tüm blokları 64px ağına otur; ızgarayı hizalama aracı yap |
| Derinlik kayboluyor, her şey aynı düzlemde | tüm çerçeveler 1px `--line` | karar taşıyan öğede 2px accent kullan |
| Ölçü etiketleri okunmuyor | 10px'in altına inilmiş veya `--ink-faint` | 10px sabit, `--ink-soft` kullan |
| Buton tıklanabilir görünmüyor | şeffaf zemin + 1px çizgi zayıf | hover'da accent %14 dolgu; mobilde min 44px |
| Izgara metni kesiyor | gövde metni çizgi üstüne binmiş | metin bloklarına `--bg` arka plan ver veya ızgarayı o alanda kapat |
| Çizgi ağı 1px'te titriyor | `background-position` hizasız | `background-position: -1px -1px` ve tam sayı offset |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı ölçülü/çizgi tabanlı dil; Blueprint pafta, Terminal alt panel olarak garnitür.
- **Uyumlu:** `utility` — sade iskelet; Blueprint yalnız ölçü katmanında kullanılır.
- **Uyumlu:** `conceptual-sketch` — el çizimi anotasyon katmanı olarak tek bölümde.
- **Yasak:** `memphis` — düz renk + süs dili ölçü disiplinini bozar.
- **Yasak:** `dopamine-ui` — doygun çoklu renk, tek accent kuralını kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Blueprint | cyanotype zemin ve çizgi ağırlığı |
| https://en.wikipedia.org/wiki/Technical_drawing | ölçü çizgisi, kesit, tarama kuralları |
| https://www.iso.org/standard/70152.html | ISO 128 çizgi kalınlığı hiyerarşisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px çizgi/ikon kontrast ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Blueprint Çizimi (styles/56-blueprint-drawing/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="blueprint-drawing"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg cyanotype; body'ye 64px çizgi ağı (linear-gradient ×2, 1px var(--line)).
Tipografi: --font-display Chakra Petch başlıkta (46/30/20, 600, tracking .01em),
  --font-body Space Grotesk 15px/1.62 gövdede, --font-mono Share Tech Mono 10px etiket ve ölçüde (.08em).
Yüzey: 3 seviye (--bg / --surface / --surface + 1px accent çerçeve). Gölge/blur/gradyan YOK.
  Kart = 1px var(--line) + ::after inset 8px 1px dashed accent %32.
Renk: tek accent #6fd3f2; durum renkleri yalnız veri hücresinde. ink/bg 14.22:1, ink-soft/bg 9.39:1.
Bileşen: "Bileşen reçeteleri" tablosundaki ölçüler birebir; buton 40px şeffaf + 1px accent, mono uppercase.
Hareket: enter 360ms cubic-bezier(.55,.06,.35,1) 6px stagger .045; scroll top 89% 400ms 9px once;
  pin yok; hover 140ms görsel 1.005. prefers-reduced-motion zorunlu.
Yasak: fotoğraf, gölge, glow, gradyan, 8px üstü radius, dolu renkli ikon, süs ızgarası.
Çıktı: bileşen kodu + tek paragraf not (hangi ölçü çizgisini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si var: 64px çizgi ağı, kesikli pafta çerçevesi, ölçü etiketi.
- [ ] Hiçbir renk/radius/gölge hard-coded değil (`grep -E '#[0-9a-f]{3,6}|box-shadow:|border-radius:'` temiz).
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1 (ölçüm: 14.22 / 9.84).
- [ ] Odak halkası 2px accent + 2px offset, ızgara üstünde görünür.
- [ ] 390px'te ızgara 32px'e düşüyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="blueprint-drawing"] {
  --bg: #0a1b2b; --bg-2: #0d2133;
  --surface: #102a40; --surface-2: #14344e;
  --ink: #dceaf5; --ink-soft: #a6c2d6; --ink-faint: #6f90a6;
  --accent: #6fd3f2; --accent-ink: #04202c;
  --line: rgba(220,234,245,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Chakra Petch", "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
  --danger: #ff8a8a; --danger-ink: #04202c;
  --ok: #7ee0a8; --warn: #ffd36e;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="blueprint-drawing"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
