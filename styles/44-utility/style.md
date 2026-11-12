# 44 · Utility

> **Bir cümlede:** Süsün sıfıra çekildiği, hiyerarşiyi yalnız punto, boşluk ve tek vurgu renginin taşıdığı ölçülü ürün arayüzü.

| | |
|---|---|
| **Hissiyat** | disiplinli, sessiz, öngörülebilir, hızlı |
| **En iyi** | SaaS paneli, dokümantasyon, dönüşüm landing'i, B2B kurumsal site |
| **Kaçın** | lüks emlak vitrini, oyun/etkinlik, moda kampanyası — burada "boş" değil "yoksun" okunur |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (ölçülen en düşük çift 6.43:1) |
| **Aile** | Zamansız (41–44) · **Token** | `kit/tokens.css` → `[data-style="utility"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Utility, bir arayüz sisteminin **kural kısmını** görünür kılan stildir: tek typeface, sabit punto basamakları, 4'ün katı boşluk, tek vurgu rengi, düz zemin. Süsü feda eder; karşılığında üç şey kazanır — hızlı okunurluk, düşük bakım maliyeti, öngörülebilir bileşen davranışı.

Kurucu kararları üç tanedir. Birincisi **tek vurgu**: ekranda accent yalnız birincil eylem ve aktif durum için yanar; dekoratif renk yoktur. İkincisi **düz zemin**: derinlik gölgeden değil, 1px hairline ve yüzey tonu farkından gelir. Üçüncüsü **isimli metin stili**: her metin önceden tanımlı bir stilden (Heading 1…Caption 5) seçilir, serbest punto/ağırlık kombinasyonu yazılmaz.

Bunun bedeli kişiliksizleşme riskidir; Utility'yi "jenerik" olmaktan kurtaran tek şey **disiplinin görünürlüğü**: hizalanmış kenarlar, tutarlı ritim, abartısız ama doğru tipografik zıplamalar.

### Ne değildir
- **Minimalism (01) değildir:** minimalism sıcak nötr (#fafaf9) ve Inter ile "sakinlik" satar; Utility saf beyaz, Poppins ve ölçü disiplini satar. Ayırt edici: Utility'de başlık gradyanı ve tagline reveal sahnesi vardır, minimalism'de yoktur.
- **Swiss Design (02) değildir:** Swiss 0 radius, siyah hairline ve Helvetica ile baskı dilidir; Utility 8/12px radius ve mavi tek vurgu ile **yazılım** dilidir.
- **Bento Grid (05) değildir:** Bento'nun birim kutudur; Utility'nin birimi satırdır — kart sayısı değil, ritim belirler.
- **AI-native mesh (39) değildir:** gradyan zemin ve ışıma Utility'de yasak; zemin daima düz.

### Nereden gelir
İsviçre tipografisinin ızgara disiplini ile 2010'lar sonrası ürün arayüzü pratiğinin (design token, isimli text style, 8px grid) kesişimi. Bugün tekrar önemli çünkü ajanlar ürettiği arayüzlerde en sık hata keyfi punto/radius/boşluktur; Utility bu kararları önceden kapatır. Klişeye dönüşmemesi için korunacak detay: **hairline'ın 1px'te kalması** ve vurgunun tek renk olması.

### 3 saniyede tanıma testi
1. Tüm kenarlıklar 1px ve aynı opaklıkta; hiçbir kartta tek taraflı kenarlık yok.
2. Başlık ölçeği 60/48/36/30/24/20 dışına çıkmıyor; ara punto (18/22/26) yok.
3. Ekranda tek doygun renk var; gerisi nötr skala.
4. Gölge yalnızca yüzen katmanda; kart ayrımı çizgiyle.
5. Buton yüksekliği 44px, yatay padding 12px, radius 8px.

## Görsel imza
- **Tek typeface:** Poppins (`--font-display` = `--font-body`); mono yalnız kod/veri/rakam için JetBrains Mono.
- **Başlık gradyanı:** yalnız hero başlığında, soldan sağa; açık temada `#000000 → #666666`, koyuda `#FFFFFF → #9B9B9B`. Metin üstünde gradient, zemin üstünde asla.
- **Hairline:** `1px solid var(--line)`; kart, panel ve tablo satırı aynı çizgiyi kullanır. Tek taraflı kenarlık yok.
- **Hero ölçüsü:** başlık ve alt başlık `max-width: 680px`; satır kırılmaları anlam sınırında.
- **Buton geometrisi:** 44px yükseklik, 8px dikey / 12px yatay padding, `--radius`.
- **Tagline sahnesi:** hero'dan bağımsız, en az iki satır büyük punto; kelimeler tek tek `--ink` rengine geçer (Hareket bölümü).
- **Hover dili:** renk/ağırlık kayması ve 1px yukarı hareket; parlaklık artışı yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#ffffff` | sayfa zemini | kart zemini olarak |
| `--surface` | `#ffffff` | kart / panel (hairline ile ayrılır) | gövde metni arkası |
| `--surface-2` | `#fafafa` | ikincil panel, tablo başlığı | birincil CTA |
| `--ink` | `#111112` | başlık, gövde | devre dışı metin |
| `--ink-soft` | `#5a5f66` | ikincil metin, açıklama | başlık |
| `--ink-faint` | `#9298a0` | dekoratif etiket, ayırıcı | etkileşimli metin |
| `--accent` | `#1d4ed8` | birincil buton, aktif durum, odak halkası | dekorasyon, ikinci vurgu |
| `--line` | `rgba(17,17,18,.10)` | kart/panel/tablo kenarlığı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **18.87:1** · `ink-soft / bg` = **6.43:1** · `accent-ink / accent` = **6.70:1** · `ink-faint / bg` = **2.91:1** (yalnız dekoratif).
- Tek vurgu kuralı: ekran başına bir accent rengi; ikinci renk gerekiyorsa `--ink-soft` tonu kullanılır.
- Yasak kombinasyon: accent üstünde `--ink-soft`; accent'i zemin olarak kullanan büyük bloklar.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Poppins (`--font-display`) | 60px | 600 | 1.0 | `--tracking` (0) |
| H2 | Poppins | 48px | 600 | 1.0 | 0 |
| H3 | Poppins | 36px | 600 | 1.11 | 0 |
| H4 | Poppins | 30px | 600 | 1.2 | 0 |
| H5 | Poppins | 24px | 600 | 1.33 | 0 |
| H6 / Title 1 | Poppins | 20px | 600 / 500 | 1.4 | 0 |
| Gövde | Poppins (`--font-body`) | 16px | 400–600 | 1.5 | 0 |
| Küçük gövde | Poppins | 14px | 400–600 | 1.43 | 0 |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 12–14px | 500 | 1.33 | 0.02em |

- Ölçek: Tailwind tabanlı 12/14/16/18/20/24/30/36/48/60/72/96/128. Ara basamak (18/22/26/34) yasak; mevcut değer basamağa **aşağı** yuvarlanır.
- **İsimli metin stilleri** (kod içinde kebab case sınıf olarak bir kez tanımlanır, her elemanda tekrar edilmez):

| Stil | Basamak | Boyut / satır | Ağırlık |
|---|---|---|---|
| Heading 1 | `text-6xl` | 60 / 60 | 600 |
| Heading 2 | `text-5xl` | 48 / 48 | 600 |
| Heading 3 | `text-4xl` | 36 / 40 | 600 |
| Heading 4 | `text-3xl` | 30 / 36 | 600 |
| Heading 5 | `text-2xl` | 24 / 32 | 600 |
| Heading 6 | `text-xl` | 20 / 28 | 600 |
| Title 1–5 | `text-xl` … `text-xs` | 20/28 · 18/28 · 16/24 · 14/20 · 12/16 | 500 |
| Body 1–3 | `text-base` | 16 / 24 | 600 · 500 · 400 |
| Body 4–6 | `text-sm` | 14 / 20 | 600 · 500 · 400 |
| Button-lg/md/sm/Xsm | `text-lg` … `text-xs` | 18/28 · 16/24 · 14/20 · 12/16 | 600 |
| Caption 1–5 | `text-sm` / `text-xs` | 14/20 · 12/16 | 500 · 400 · 600 · 500 · 400 |

- Gövde satır uzunluğu en fazla 68ch; hero başlığı `text-wrap: balance`, gövde `text-wrap: pretty`.
- İtalik yok, 900/black ağırlık yok (üst sınır 600).
- `h1` ölçüsü: `clamp(36px, 5vw, 60px)` — 390px'te 36px'in altına inmez.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px (`--space-5`) |
| Container genişliği | 1200px (içerik 1160px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında tek sütun |

**Eşleme — `ai-design-skills` adları → bu sözleşme** (upstream değerleri global değil, yalnız bu stilde geçerli):

| Upstream | px | Bu stilde |
|---|---|---|
| `Spacing-25` | 2 | eşlenmez; yalnız hairline/ikon içi |
| `Spacing-50` | 4 | `--space-1` |
| `Spacing-75` | 8 | `--space-2` |
| `Spacing-100` | 12 | `--space-3` |
| `Spacing-200` | 16 | `--space-4` |
| `Spacing-300` | 24 | `--space-5` |
| `Spacing-400` | 32 | `--space-6` |
| `Spacing-500` | 40 | eşlenmez; `--space-6` (32) veya `--space-7` (48) seçilir |
| `Spacing-600` | 48 | `--space-7` |
| `Spacing-700` | 64 | `--space-8` |
| `Spacing-800/900` | 80/96 | yalnız bölüm dikey ritmi: 80px masaüstü / 48px mobil |

- Bölüm dikey ritmi: masaüstü 80px, mobil 48px. Kart içi padding 24px, kart arası 24px.
- Asimetri kuralı: ekran başına en fazla 1 bölüm simetriden çıkar (ör. hero 7/5).
- Art arda en fazla 3 aynı hizalı blok; dördüncüde ritim değişir.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa |
| Kart | `--surface` + 1px `--line` | `--shadow` | içerik bloğu |
| Yüzen katman | `--surface` + `--line` + güçlü gölge | 0 12px 32px rgba(17,17,18,.12) | modal, dropdown, toast |

- Kenarlık formülü: `1px solid var(--line)` — her zaman dört taraf; tek taraflı kenarlık yalnız tablo satırı ayırıcısında (satır altı, `--line`).
- Derinlik nereden gelir: yüzey tonu farkı + hairline. Gölge ikincil; gradient hiç yok.
- Radius: `--radius` (8px) buton/input/chip, `--radius-lg` (12px) kart/modal. Tailwind basamakları 2/4/6/8/12/16/24 dışına çıkılmaz.
- **İç içe radius formülü:** boşluk 32px'in altındaysa `inner = outer − gap`; sonuç 2'nin altındaysa iç şekil kare kalır. Örnek: 16px dış + 8px padding → 8px iç. Sonuç Tailwind basamağına denk gelmiyorsa en yakın basamağa yuvarlanır (ör. 24 − 4 = 20 → 16).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 8px 12px | `--radius` | Button-md 16/24 600 | `--accent` / `--accent-ink`, gölge yok | hover: `--accent` %8 koyu · active: `translateY(1px)` · focus: 2px `--accent` halka + 2px offset · disabled: %40 opaklık · loading: 16px spinner + metin sabit |
| Buton (ikincil) | 44px | 8px 12px | `--radius` | Button-md | şeffaf, 1px `--line`, `--ink` | hover: `--surface-2` · focus aynı halka |
| Buton (sessiz) | 36px | 8px 12px | `--radius` | Button-sm 14/20 | metin `--ink-soft` | hover: `--ink` |
| Input | 44px | 0 12px | `--radius` | Body 3 16/24 400 | `--surface` + 1px `--line` | focus: 2px halka, offset 1px · filled: değişmez · error: 1px `--danger` + 12px açıklama · disabled: %40 |
| Kart | — | 24px | `--radius-lg` | Heading 6 + Body 3 | `--surface` + 1px `--line` + `--shadow` | hover: yalnız tıklanabilir kartta 1px yukarı |
| Chip / badge | 24px | 8px | 999px yerine `--radius` | Caption 3 12/16 600 | `--surface-2`, metin `--ink-soft` | aktif: `--accent` %10 zemin + `--accent` metin |
| Nav | 64px | 0 24px | 0 (üst bar) | Title 4 14/20 500 | `--bg` %80 + `blur(var(--blur))`, alt 1px `--line` | aktif: alt çizgi 2px `--accent` |
| Tablo satırı | 52px | 12px 16px | 0 | Body 5 14/20 500 | alt çizgi `--line` | hover: `--surface-2` · seçili: `--accent` %6 zemin |
| Modal / sheet | — | 24px | `--radius-lg` | Heading 5 + Body 3 | `--surface`, yüzen gölge | açılış: 0.5s giriş · kapanış aynı eğri |
| Toast | 48px | 8px 16px | `--radius` | Caption 1 14/20 500 | `--surface`, 1px `--line`, gölge | 4sn sonra kapanır, hover'da durur |
| Grafik paleti | — | — | — | mono eksen etiketi 12/16 | `--data-1…4` | seri sayısı en fazla 4 |

- Odak halkası: `outline: 2px solid var(--focus); outline-offset: 2px` — `--focus` varsayılan olarak `--accent`.
- Dokunma hedefi: en az 44×44px; 36px sessiz buton ve 24px chip padding ile 44px'e büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | Phosphor/Solar/Iconamoon, 1.5px çizgi, 24px kutu; Material Icons yasak |
| Fotoğraf | ürün ekran görüntüsü veya nötr stüdyo çekimi; `--radius-lg` kırpma, %4 kontrast artışı sınırı |
| İllüstrasyon | yok; gerekiyorsa 1.5px line-art, `--ink-soft` |
| Doku | yok (`--grain: 0`), blur yalnız nav/overlay yüzeyinde (`--blur: 12px`) |
| Logo alanı | monokrom `--ink`, min 24px yükseklik, çevresinde 1 birim (`--space-3`) boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 680px başlık, gradyan metin, tek CTA, altında logo şeridi | `shots/01-landing.png` |
| Dashboard | düşük | 12 kolon, 24px gutter, KPI kartları aynı yükseklikte | `shots/02-dashboard.png` |
| Form | düşük | 44px alanlar, etiket üstte, hata alanın altında | — |
| Liste / tablo | düşük | 52px satır, hairline ayırıcı, sağa hizalı sayı | — |
| Boş durum | orta | tek cümle + birincil eylem, illüstrasyon yok | — |
| Onboarding | yüksek | 3 adım, adım göstergesi, tek seçenek grubu | — |
| Pricing | orta | 3 kart, ortadaki 1px accent halka (gölge değil) | — |
| Giriş / ödeme | çok düşük | süs 0; tek kart, tek eylem, risk azaltıcı tek satır | — |
| Modal | orta | 24px padding, başlık + tek karar, kapatma sağ üstte | — |
| Bildirim / toast | orta | alt sağda, 4sn, hover'da durur | — |
| Hata | düşük | ne oldu + ne yapmalı; `window.alert` yasak | — |
| Profil / ayar | orta | bölüm başlıkları Heading 6, satır 52px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 200ms | `cubic-bezier(0.22,1,0.36,1)` | `transform` |
| Geçiş / sayfa | 500ms | `cubic-bezier(0.22,1,0.36,1)` | `transform`, `opacity` |
| Giriş (enter) | **400ms** | `cubic-bezier(0.22,1,0.36,1)` | `opacity` + `translateY(10px)`, **stagger 45ms**; kısa ve kesin |
| Kaydırma (scroll) | **560ms** | `cubic-bezier(0.22,1,0.36,1)` | trigger **`top 90%`**, offsetY **28px**, `once: true` |
| Hover | **120ms** | `ease-out` | görsel ölçek **1.000** (ölçek değişmez, yalnız kenar/renk) |
| Pin | kapalı | — | `scrub: null`, `distance: null` — parallax yok |
| Ödül / vurgu | 300ms | `cubic-bezier(0.22,1,0.36,1)` | `opacity` |
| Tagline reveal | 300ms / kelime | `cubic-bezier(0.22,1,0.36,1)` | kelime `--ink-faint`ten `--ink`e, okuma sırasıyla |

- İmza ölçüsü: enter **0.4s / 10px / stagger 0.045** · scroll **0.56s / `top 90%` / 28px** · hover **120ms / 1.000** · pin **kapalı**.
- `ease`, `linear`, `ease-in-out` yasak. Yalnız `transform` ve `opacity` animasyonlanır.
- Scroll tetiği `IntersectionObserver` veya Framer Motion `whileInView`; throttle'sız `scroll` dinleyicisi yasak.
- Mobil menü: tam yükseklik panel, bağlantılar 24px yukarı kayarak girer, 60ms arayla, toplam 400ms sınırı.
- `prefers-reduced-motion`: tüm süreler 0.01ms, tagline tek seferde tam renkte, hareketli hiçbir öğe kalmaz.
## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#ffffff` | `#000000` |
| `--bg-2` | `#f6f6f7` | `#181818` |
| `--surface` | `#ffffff` | `#1f1f1f` |
| `--surface-2` | `#fafafa` | `#272727` |
| `--ink` | `#111112` | `#ffffff` |
| `--ink-soft` | `#5a5f66` | `#9b9b9b` |
| `--accent` | `#1d4ed8` | `#7aa2ff` |
| `--accent-ink` | `#ffffff` | `#000000` |

- Koyu zeminde kullanılabilecek tek zemin tonları: `#000000` · `#181818` · `#1f1f1f` · `#272727` · `#313131` · `#131209`.
- Ölçülen kontrast: koyuda `ink / bg` = **21.00:1**, `ink-soft / bg` = **7.56:1**, `accent-ink / accent` = **8.44:1**.
- Koyu modda değişen başka ne var: gölge yerine kenarlık, blur azaltma yok, görsel doygunluğu düşer.
- Hero başlık gradyanı koyuda `#ffffff → #9b9b9b`; bu iki durak da token'a bağlanır.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Tek typeface; mono yalnız kod/veri/rakam için.
- Her metin isimli stillerden birini kullanır; serbest punto/ağırlık yazılmaz.
- Boşluk yalnız `--space-1…8` ve 80/48 bölüm ritmi.
- Radius yalnız `--radius` / `--radius-lg` veya iç içe formülün ürettiği Tailwind basamağı.
- Her etkileşimli öğe hover, active, focus, disabled, loading durumlarını taşır.
- Her ekran için boş / yükleme / hata durumu tasarlanır.
- 390px'te yatay taşma yok, birincil eylem ilk ekranda görünür.

## Yasaklar
- Zemin gradienti, ikinci vurgu rengi, dekoratif renk.
- Tek taraflı kart kenarlığı (tablo satırı ayırıcısı hariç).
- Keyfi değer: `text-[19px]`, `padding: 18px`, `radius: 14px`.
- İtalik, 900 ağırlık, ultra bold.
- `ease` / `linear` geçiş, `top`/`width` animasyonu, sürekli döngü.
- Material Icons / Material Symbols.
- Uydurma fiyat, istatistik, müşteri adı; eksik bilgi `{{price}}` gibi işaretli yer tutucu olur.

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
| Ekran "boş" okunuyor | her şey aynı ağırlıkta, ritim yok | bölüm aralığını 80/48'e çıkar, H2'yi 48'e al |
| Kartlar kutulanmış görünüyor | gölge + kenarlık birlikte | kartta tek hairline, gölge yalnız yüzen katmanda |
| Renk cıvıltısı | accent dekorasyona kaymış | accent yalnız eylem/aktif; gerisi nötr |
| Tipografi "ucuz" | ara punto (18/22/26) sızmış | basamağa **aşağı** yuvarla |
| Metin son satırda tek kelime | `text-wrap` yok | başlıkta `balance`, gövdede `pretty` |
| Mobilde buton taşıyor | sabit genişlik veya uzun etiket | `min-width: 0`, etiketi kısalt, 44px korunur |

## Komşu stiller

- **Uyumlu:** `minimalism` — aynı disiplin, daha sıcak nötr; ekran bazlı geçiş yapılabilir.
- **Uyumlu:** `swiss-design` — kurumsal dokümantasyon bölümlerinde garnitür.
- **Yasak:** `maximalism` — renk bütçesi ve katman sayısı çelişir.
- **Yasak:** `neumorphism` — derinlik kaynağı (iç gölge) Utility'nin hairline kuralıyla çakışır.
- **Yasak:** `aurora-ui` / `ai-native-mesh` — zemin gradienti yasak.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://tailwindcss.com/docs/font-size | punto basamakları ve eşleşen satır yükseklikleri |
| https://tailwindcss.com/docs/border-radius | radius basamakları |
| https://phosphoricons.com | ikon seti ve çizgi kalınlığı |
| https://m3.material.io/foundations/accessible-design | dokunma hedefi ve durum eşlemesi |
| https://github.com/elayadesign/ai-design-skills | bu stilin türetildiği kural seti (MIT) — ölçek/mapping mantığı |

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift `ink-soft / bg` = 6.43:1; `--ink-faint` (2.91:1) yalnız dekoratif, etkileşimli metin değil.
- Odak halkası her yüzeyde 3:1 üstü: `--focus` = `--accent`, 2px + 2px offset.
- Durum yalnız renkle anlatılmaz; ikon veya metin eşlik eder.
- 390px'te yatay kaydırma yok; tablolar `overflow-x: auto` içinde, sayfa gövdesi taşmaz.
- Koyu modda `--ink-faint` 4.12:1; küçük punto metinde kullanılmaz.
- Blur'lu nav yüzeyinde `@supports not (backdrop-filter: blur(1px))` için opak `--bg` fallback zorunlu.

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Utility (styles/44-utility/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="utility"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: tek aile Poppins (--font-display = --font-body), mono yalnız kod/veri için.
  Her metin isimli stilden: Heading 1–6, Title 1–5, Body 1–6, Button-lg/md/sm/Xsm, Caption 1–5.
  Ara punto yasak; mevcut değer en yakın alt basamağa yuvarlanır.
Yüzey: --bg / --surface + 1px --line / yüzen katman; zemin gradienti yasak.
Radius: --radius (8) buton-input, --radius-lg (12) kart-modal; iç içe radius = outer - gap (sonuç 2'nin altındaysa kare).
Boşluk: --space-1…8; bölüm dikey 80px masaüstü / 48px mobil; buton 8px 12px.
Hareket: cubic-bezier(0.22,1,0.36,1); basma 200ms, geçiş 500ms, scroll reveal 600-800ms; yalnız transform/opacity.
  Tagline sahnesi zorunlu: en az 2 satır, kelimeler okuma sırasıyla --ink-faint -> --ink.
Erişilebilirlik: gövde >= 4.5:1, büyük metin >= 3:1, dokunma hedefi >= 44px, görünür odak halkası.
Yasak: ikinci vurgu rengi, tek taraflı kenarlık, italik, 900 ağırlık, Material Icons, keyfi değer, uydurma veri.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (hairline, gradyan başlık, tek accent, tagline sahnesi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Tüm metin isimli stillerden; ara punto yok.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1, accent üstü ≥ 4.5:1.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.
- [ ] Hover/active/focus/disabled/loading + boş/hata durumları var.

## Token

```css
[data-style="utility"] {
  --bg: #ffffff; --bg-2: #f6f6f7;
  --surface: #ffffff; --surface-2: #fafafa;
  --ink: #111112; --ink-soft: #5a5f66; --ink-faint: #9298a0;
  --accent: #1d4ed8; --accent-ink: #ffffff;
  --line: rgba(17,17,18,.10);
  --radius: 8px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(17,17,18,.06); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 12px; --grain: 0;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="utility"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
