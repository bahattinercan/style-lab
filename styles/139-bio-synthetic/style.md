# 139 · Biyo & Sentetik

> **Bir cümlede:** Laboratuvarda büyütülmüş arayüz: koyu kültür ortamı, zar halkaları, hücre kümeleri ve biyo-lime accent ile yumuşak-sentetik bir yüzey dili.

| | |
|---|---|
| **Hissiyat** | canlı, deneysel, yumuşak-tekinsiz, kuluçkada |
| **En iyi** | biyoteknoloji ürünü, laboratuvar takip paneli, sentetik gıda/malzeme markası, spekülatif sergi |
| **Kaçın** | kurumsal finans, güvenlik uyarısı, hızlı ticaret — organik-tekinsiz dil güveni zedeler |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 9.55:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `kit/tokens.css` → `[data-style="bio-synthetic"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Biyo & Sentetik, arayüzü **kültür kabı** gibi kurar: koyu yeşil-siyah zemin, yumuşak 20/32px köşeler, her kartın üst kenarında 1px zar (membrane) çizgisi, sağ üstte hücre noktası ve mono `LOT-2291 · P3` parti etiketi. Keskinliği feda eder; karşılığında **büyüyen/canlı** bir yüzey hissi kazanır — ama kontrollü: hareket ve doku ölçülüdür.

Kurucu kararları üç tanedir. Birincisi **yumuşaklık ölçülüdür**: 20px kontrol / 32px kart / 999px hap; hiçbir yerde 0px köşe yok. İkincisi **zar halkası imzadır**: kart üstünde 1px accent %22 çizgi + hücre noktası; ekran başına tekrar eden tek organik form budur. Üçüncüsü **parti numarası zorunludur**: her veri bloğu bir lot/parti taşır (`LOT-2291 · P3`), çünkü biyolojik veri izlenebilir olmak zorundadır.

Bedeli: tekinsizlik (uncanny). Bu yüzden palet pastel-oyuncak değil; koyu kültür zemini + biyo-lime accent, "laboratuvar" tarafında tutulur.

### Ne değildir
- **Claymorphism (11) değildir:** 11 açık pastel + çift gölge + şişkin 3B form kullanır; 139 koyu zemin, tek gölge, zar çizgisi (şişme yok).
- **Organic / Biophilic (38) ve Biyofilik Botanik (76) değildir:** 38/76 bitki/doğa dinginliğidir (açık yeşil, kâğıt); 139 **sentetik** taraftadır: koyu kültür ortamı, biyo-lime, parti etiketi, hücre kümesi.
- **Forest Bark (81) değildir:** 81 orman altı saha defteridir (toprak/kabuk, tan accent); 139 laboratuvar kabı dilidir.
- **Glassmorphism (08) değildir:** 139'da blur/cam yok; yumuşaklık radius ve zardan gelir.

### Nereden gelir
Doku kültürü (tissue culture) pratiğinden — petri kabı, parti (lot) etiketi, pasaj numarası — ve sentetik biyoloji terminolojisinden. Bugün geri dönüyor çünkü biyoteknoloji ürünleri laboratuvar dilini arayüze taşıyor (izlenebilirlik + canlılık). Klişeye dönmemesi için korunacak detay: **parti numarasının zorunluluğu** ve zar çizgisinin 1px'te kalması.

### 3 saniyede tanıma testi
1. Zemin koyu yeşil-siyah; accent biyo-lime ve yalnız canlı/aktif anlamında.
2. Her kartın üst kenarında 1px açık zar çizgisi, sağ üstte küçük hücre noktası var.
3. Köşeler yumuşak: 20px kontrol, 32px kart; butonlar hap.
4. Mono `LOT-···· · P·` parti etiketi her veri bloğunda görünüyor.
5. Bölüm boşlukları geniş (84px), gövde satır aralığı 1.68.

## Görsel imza
- **Zar çizgisi:** kart `::before` üst kenarda 1px `accent %22`.
- **Hücre noktası:** kart sağ üst 16/16'da 8px accent %70 daire (`::after`).
- **Hücre kümesi:** hero görselinde `repeating-radial-gradient` (22px halka) + tek hücre lekesi.
- **Hap kontrol dili:** buton/input 999px, 48px; chip 28px hap.
- **Parti etiketi:** `LOT-2291 · P3` 11px mono `.08em`; her veri bloğunda.
- **Yumuşak radius:** 20px kontrol, 32px kart; 0px köşe yasak.
- **Hareket imzası:** 1080ms `cubic-bezier(.44,.16,.3,1)`, 46px — kültür "büyür", sıçramaz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0f1412` | sayfa zemini (kültür ortamı) | kart zemini |
| `--bg-2` | `#141a17` | nav, ikincil bant | birincil CTA |
| `--surface` | `#19211d` | kart / panel | sayfa zemini |
| `--surface-2` | `#1f2924` | chip, satır zemini | modal zemini |
| `--ink` | `#e9f2ec` | başlık, gövde, ölçü | dekoratif çizgi |
| `--ink-soft` | `#a9bfb2` | açıklama, etiket | başlık |
| `--ink-faint` | `#75897e` | yalnız ayırıcı, dekoratif not | etkileşimli metin, parti no |
| `--accent` | `#c8f05f` | zar çizgisi, canlı durum, birincil eylem | gövde metni |
| `--accent-ink` | `#141f07` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(233,242,236,.16)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.28:1** · `ink-soft / bg` = **9.55:1** · `accent-ink / accent` = **13.09:1** · `ink-faint / bg` = **4.99:1** (yalnız ayırıcı).
- Tek vurgu kuralı: tek biyo-lime accent. `--danger` (#ff8f9a) = reddedildi, `--ok` = accent (hasat), `--warn` (#ffd06e) = gecikme; hepsi metin + nokta ile.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` parti numarası.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Baloo 2 (`--font-display`) | 50px (mobil 32px) | 600 | 1.10 | `0` |
| H2 | Baloo 2 | 34px | 600 | 1.16 | `.01em` |
| H3 | Baloo 2 | 24px | 600 | 1.26 | `.01em` |
| Gövde | Nunito (`--font-body`) | 17px | 400 | 1.68 | `0` |
| Küçük gövde | Nunito | 14px | 400 | 1.6 | `0` |
| Etiket / parti no | Courier Prime (`--font-mono`) | 11–12px | 400 | 1.4 | `.08em` |

- Ölçek oranı: **1.45** — kullanılan basamaklar 11 · 12 · 14 · 17 · 24 · 34 · 50.
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.8vw, 50px); line-height: 1.10 }`.
- Gövde satır uzunluğu en fazla **60ch**; 1.68 satır aralığı korunur (organik nefes).
- Ağırlık kuralı: display 600, gövde 400/600, mono 400. 700+ ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1180px (içerik 1132px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1180; 768 altında tek kolon, kart radius 32 → 24px |

- Asimetri kuralı: ekran başına **1** asimetrik 7/5 bölünme; kart köşeleri de farklı (20 vs 32) — simetri yok.
- Bölüm ritmi: art arda en fazla **3** kart; dördüncüsü tam genişlik kültür bandı olur.
- Kart padding 26px; bölüm dikey boşluğu 84px (mobil 48px).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | kültür ortamı + iki radial ışık |
| Kart | `--surface` | `0 14px 34px rgba(4,10,7,.55)` | kart, panel (zar çizgisi + hücre noktası) |
| Yüzen katman | `--surface` + accent çerçeve | `0 20px 44px rgba(4,10,7,.65)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)`; üst kenarda ek 1px accent %22 zar çizgisi.
- Derinlik nereden gelir: **tek yumuşak gölge + zar çizgisi**. Sert/ofset gölge yok, blur yok.
- Radius: `--radius: 20px` (kontrol), `--radius-lg: 32px` (kart, modal); buton/input/chip hap (999px).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | `0 26px` | 999px | 16px Nunito 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: scale .985 · focus: 3px accent outline + 3px offset · disabled: opacity .4 · loading: zar halkası %0→%100 (900ms) |
| Buton (ikincil) | 48px | `0 26px` | 999px | 16px Nunito 600 | şeffaf + 1px `--line` | hover: `--surface` dolgu |
| Input | 48px | `0 20px` | 999px | 16px Nunito | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %36 outline · error: `--danger` çerçeve + 12px etiket · disabled: opacity .4 |
| Kart | içerik | 26px | 32px | H3 + gövde | `--surface` + 1px `--line` + gölge + zar çizgisi | hover: hücre noktası accent %100 |
| Chip / badge | 28px | `0 12px` | 999px | 12px mono `.08em` | `--surface-2` + 1px `--line` | accent: accent %18 zemin + accent metin |
| Nav | 64px | `0 28px` | 0 | 16px Nunito 600 | `--bg` %86 + `--surface` karışımı + alt hairline | aktif: accent metin |
| Tablo satırı | 48px | `10px 14px` | — | 15px Nunito, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 28px | 32px | 24px display + mono parti no | `--surface` + 1px accent + `0 20px 44px` | açılış: 46px büyüme, 1080ms |
| Toast | 44px | `10px 16px` | 999px | 14px Nunito 600 | `--surface` + sol uçta 8px accent nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 3 seri; büyüme eğrisi 2px, alan %12 |

- Odak halkası: `outline: 3px solid var(--accent); outline-offset: 3px` — yumuşak yüzeylerde 2px zayıf kalır.
- Dokunma hedefi: en az 48×48px; bu stilde 44px alt sınırı kullanılmaz (eldivenli/kaygan laboratuvar kullanımı varsayımı).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, tam yuvarlak uç, 24px ızgara; hücre/damar/döngü |
| Fotoğraf | tek mikroskop karesi, %60 doygunluk, 32px radius kırpma |
| İllüstrasyon | hücre kümesi + zar halkası zorunlu imza |
| Doku | grain %4 + zar halkaları; keskin geometrik desen yok |
| Logo alanı | yuvarlak accent işaret + küçük harf wordmark, 32px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | H1 50px + hücre kümesi görseli + tek hap CTA | `shots/01-landing.png` |
| Dashboard | orta | 3 parti kartı; zar çizgisi ve hücre noktası | `shots/02-dashboard.png` |
| Form | düşük | 48px hap input, tek kolon; parti alanı mono | — |
| Liste / tablo | orta | 48px satır, parti no kolonu mono | — |
| Boş durum | orta | boş petri: zar halkası + "kültür yok" mono | — |
| Onboarding | yüksek | 3 adım: örnek al → parti aç → pasaj planla | — |
| Pricing | orta | iki plan kartı; öne çıkan accent zar çizgisi | — |
| Giriş / ödeme | çok düşük | hücre görseli yok; sade kart + tek hap CTA | — |
| Modal | orta | kültür onayı: parti no + iki hap düğme | — |
| Bildirim / toast | orta | alt-sol, 8px hücre noktası | — |
| Hata | orta | "REDDEDİLDİ" + `--danger` nokta + neden notu | — |
| Profil / ayar | orta | parti/pasaj tercihleri, hap seçiciler | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **1080ms** | `cubic-bezier(.44,.16,.3,1)` | `opacity` + `translateY(46px)`; stagger **0.146s** |
| Scroll reveal | **1070ms** | aynı eğri | trigger `top 60%`, `translateY(33px)`, `once: true` |
| Pin / scrub | **1.18** | `transform` | **açık** — kültür panosu `+155%` mesafede pin + scrub (ekran başına 1) |
| Basma | **190ms** | aynı eğri | `scale .985` |
| Geçiş / sayfa | 420ms | aynı eğri | opacity + 20px |
| Hover | **490ms** | aynı eğri | görsel ölçek **1.043** |
| Ödül / vurgu | 1080ms | aynı eğri | zar halkası %0→%100 (tek kez) |

- İmza ölçüleri: `enter = 1.08s / cubic-bezier(.44,.16,.3,1) / 46px / 0.146` · `scroll = top 60% / 1.07s / 33px / once` · `pin = true / scrub 1.18 / +155%` · `hover = 490ms / 1.043`.
- Bant içi fark: 136'dan (0.41s / 11px / scrub 0.58), 137'den (0.96s / 38px / pin yok), 138'den (0.27s / 1px), 140'tan (0.61s / 21px / scrub 0.4) en az dört parametrede ayrışır. Mevcut 126 stil içinde en yakını 67-japanese-ma (`1.05s / .25,.1,.25,1 / 12px / 0.14`) — süre, eğri, offset, trigger (top 60%) ve hover'da farklı; `top 60%` ve `scrub 1.18` katalogda yeni.
- `prefers-reduced-motion`: tüm süreler 0.01ms, zar halkası ve nabız durur, pin kapalı.
- Bu stile yasak hareket: ekran başına 1'den fazla sürekli nabız/nefes, blur geçişi, yatay kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0f1412` | `#020504` |
| `--surface` | `#19211d` | `#0d1f16` |
| `--ink` | `#e9f2ec` | `#f6fdf8` |
| `--accent` | `#c8f05f` | `#a6f5c8` |
| `--ink-soft` | `#a9bfb2` | `#c6dccb` |
| `--line` | `rgba(233,242,236,.16)` | `rgba(246,253,248,.20)` |

- Koyu modda değişen başka ne var: zemin altı puan daha koyu, accent bir ton açılır, zar çizgisi %22 → %28 ve hücre noktası %70 → %80 (siyahta kaybolmasın).
- Koyu mod ayrışması: zemin `#020504` (%20 parlaklık), panel bandı **8.6×** açık, accent lime → mint `#a6f5c8` (69° ton kayması).
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Yüzeyler yumuşak: 20px kontrol / 32px kart; buton, input ve chip hap (999px).
- Zar halkası imza öğedir: kart üstünde 1px accent %22 + sağ üstte 8px hücre noktası.
- Zemin koyu kültür ortamı; accent biyo-lime tek parlak renk.
- Gövde satır aralığı ≥ 1.68; bölüm boşluğu ≥ 84px.
- Parti numarası zorunlu: `LOT-2291 · P3` biçiminde mono.
- Durum daima metinle: KÜLTÜRDE / HASAT / REDDEDİLDİ.

## Yasaklar
- Keskin 0px köşe ve kalın 2px+ çerçeve.
- Pastel-oyuncak palet (claymorphism ile örtüşür).
- Gradyan patlaması, neon glow, cam/blur.
- Ekran başına 1'den fazla sürekli nabız atan öğe.
- Serif display, emoji.
- Metinsiz (renk-only) durum bildirimi.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **9.55:1** (eşik 4.5); `ink-faint / bg` = **4.99:1** yalnız ayırıcı ve dekoratif notta.
- `--ink-faint` parti numarasında ve etkileşimli metinde kullanılmaz; parti no `--ink-soft`.
- Hareket/parlama hassasiyeti: orta — nabız animasyonu ekran başına ≤1 ve kapatılabilir (WCAG 2.2.2); `prefers-reduced-motion` hepsini durdurur.
- Şeffaf yüzey yok; opak fallback gerekmez. `repeating-radial-gradient` desteklenmezse hücre kümesi tek halkaya düşer.
- Odak görünürlüğü: 3px accent outline + 3px offset (yumuşak yüzey ve renkli halka üstünde 2px kaybolur).
- Parti/pasaj kodları her zaman metinle birlikte verilir; renk kodu tek başına anlam taşımaz.

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
| "Oyuncak" görünüyor | açık pastel + çift gölge | koyu zemin + tek gölge |
| Biyolojik dil kayboluyor | zar çizgisi ve hücre noktası yok | `::before`/`::after` imzayı ekle |
| Tekinsiz/rahatsız edici | doku fazla (grain %6+) | grain %4, halka 22px sabit |
| İzlenebilirlik yok | parti no yazılmamış | her veri bloğuna `LOT-… · P…` |
| Gövde sıkışık | satır aralığı 1.5 | 1.68 koru, ölçü ≤60ch |
| Nabız yorucu | birden fazla sürekli animasyon | ekran başına 1, kapatma düğmesi |

## Komşu stiller

- **Uyumlu:** `organic-bio` — doğal form dili; yalnız illüstrasyon katmanında.
- **Uyumlu:** `biophilic-botanical` — bitki metaforu; tek bölümde garnitür.
- **Uyumlu:** `liquid-glass` — cam katman gerektiğinde nav'da (tek yüzey).
- **Yasak:** `swiss-design` — keskin ızgara ve 0 radius organik dil ile çelişir.
- **Yasak:** `broadsheet-daily` — gazete ızgarası kültür kabı metaforunu bozar.

| Eksen (5) | 139 · Bio-synthetic | 11 · Claymorphism |
|---|---|---|
| Display ailesi | Baloo 2 600 | Baloo 2 (aynı) |
| Zemin bandı | koyu kültür `#0f1412` | açık pastel `#f4f1fb` |
| Accent hue | biyo-lime `#c8f05f` | pastel mor/pembe |
| Radius ölçeği | 20 / 32px + hap | 24 / 32px + hap |
| İmza motif / motion | zar çizgisi + hücre noktası · 1.08s · top 60% | şişkin 3B + çift gölge · 0.6s · top 82% |

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Synthetic_biology | sentetik biyoloji terminolojisi |
| https://en.wikipedia.org/wiki/Tissue_culture | kültür/pasaj ve parti (lot) etiketleri |
| https://en.wikipedia.org/wiki/Cell_membrane | zar halkası metaforu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | hareket kapatma zorunluluğu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Biyo & Sentetik (styles/139-bio-synthetic/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="bio-synthetic"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg koyu kültür + iki radial ışık (accent %12 / %7).
Tipografi: --font-display Baloo 2 50/34/24 (600); --font-body Nunito 17px/1.68;
  --font-mono Courier Prime 11–12px parti etiketi (.08em, `LOT-2291 · P3` zorunlu).
Yüzey: --surface + 1px var(--line) + var(--shadow) 0 14px 34px; üst kenarda 1px accent %22 zar çizgisi,
  sağ üstte 8px hücre noktası. Radius 20px kontrol, 32px kart, hap 999px.
Renk: tek biyo-lime accent #c8f05f; ink/bg 16.28:1, ink-soft/bg 9.55:1, accent-ink/accent 13.09:1, ink-faint/bg 4.99:1.
Hareket: enter 1080ms cubic-bezier(.44,.16,.3,1) 46px stagger .146; scroll top 60% 1070ms 33px once;
  pin scrub 1.18 (+155%, ekran başına 1); hover 490ms görsel 1.043. prefers-reduced-motion zorunlu.
Yasak: 0px köşe, kalın çerçeve, pastel-oyuncak palet, gradyan/glow/cam, >1 sürekli nabız, emoji, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (zar çizgisini ve parti etiketini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: zar çizgisi, hücre noktası, hücre kümesi, parti etiketi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.28 / 9.55 / 13.09 — hepsi eşik üstü.
- [ ] Her veri bloğunda parti no var; odak halkası 3px accent + 3px offset.
- [ ] 390px'te tek kolon, radius 24px, taşma yok.
- [ ] `prefers-reduced-motion` açıkken nabız ve zar animasyonu duruyor.

## Token

```css
[data-style="bio-synthetic"] {
  --bg: #0f1412; --bg-2: #141a17;
  --surface: #19211d; --surface-2: #1f2924;
  --ink: #e9f2ec; --ink-soft: #a9bfb2; --ink-faint: #75897e;
  --accent: #c8f05f; --accent-ink: #141f07;
  --line: rgba(233,242,236,.16);
  --radius: 20px; --radius-lg: 32px;
  --shadow: 0 14px 34px rgba(4,10,7,.55); --shadow-hard: none;
  --font-display: "Baloo 2", "Nunito", system-ui, sans-serif;
  --font-body: "Nunito", "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 4;
  --danger: #ff8f9a; --danger-ink: #0f1412;
  --ok: #c8f05f; --warn: #ffd06e;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="bio-synthetic"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
