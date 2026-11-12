# 113 · Notebook / REPL

> **Bir cümlede:** Ekranı numaralı yürütme hücrelerine bölen, her bloğun altında ayrı çıktı ve kernel durumu gösteren hesaplama-defteri stili.

| | |
|---|---|
| **Hissiyat** | deneyen, şeffaf, teknik, sıralı |
| **En iyi** | veri analizi defteri, eğitim/lab ortamı, API keşfi, rapor üretimi |
| **Kaçın** | pazarlama vitrini, tek eylemli mobil akış, e-ticaret ödeme adımı — yürütme numaraları burada anlamsız gürültü |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük metin çifti 6.36:1, accent üstü 5.36:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="notebook-repl"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Notebook / REPL, sayfayı **yürütme sırasına** göre kurar: her blok sol oluğunda `In [7]:` numarası taşır, altında `Out[7]:` etiketli çıktı bloğu durur, navda kernel durumu (`idle` / `busy`) yazar. Metin ve kod aynı sayfada yaşar; kullanıcı sonucu gördüğü yerde düzeltir.

Kurucu kararları üç tanedir. Birincisi **numara görünürlüğü**: yürütme sayacı hiç gizlenmez, atlanan adım `[ ]` olarak boş kalır — böylece "hangi sırayla çalıştı" sorusu ekrandan okunur. İkincisi **çıktı ayrımı**: çıktı kodun içine karışmaz, `--surface-2` zeminli ayrı blok olur ve solunda 2px accent şerit taşır. Üçüncüsü **tek renk kod**: sözdizimi için iki ton (ink + accent) yeter; çok renkli kod teması yok.

Bedeli: dikey uzunluk. Bu yüzden defter görünümünde hücreler katlanabilir; katlanmış hücre yalnız `In [7]: …` satırı gösterir.

### Ne değildir
- **Terminal UI (45) değildir:** 45 tam ekran mono konsoldur ve yeşil-siyah palet kullanır; 113 açık zeminli, sans başlıklı ve çıktıyı blok blok ayıran bir defterdir.
- **Log Stream (49) değildir:** 49 yalnız akan olay satırlarıdır (yürütme yok); 113'te her hücrenin numarası, çıktısı ve düzenlenebilir kodu vardır.
- **Komut Paleti (108) değildir:** 108 koyu bir overlay paletidir; 113 sayfa düzenidir, overlay değildir ve kod içerir.
- **Adım Sihirbazı (111) değildir:** 111 tek soru sorar ve ilerlemeyi dayatır; 113'te kullanıcı sırayı kendisi seçer, hücre atlayabilir.

### Nereden gelir
REPL (oku-değerlendir-yaz döngüsü) ve hesaplamalı defter (Jupyter/Mathematica) geleneğinden gelir: hesap ile anlatı aynı belgede. Bugün geri dönüyor çünkü yapay zekâ çıktıları "çalıştırılabilir belge" biçiminde sunuluyor. Klişeye dönmemesi için korunacak detay: **yürütme numarasının ve kernel durumunun görünür kalması**; sadece kod bloğu görünümü taklit edilirse stil kaybolur.

### 3 saniyede tanıma testi
1. Blokların solunda `In [` + `]:` biçiminde mono numara oluğu var; altlarında `Out` bloğu.
2. Navda tek kelimelik kernel durumu (`idle` / `busy`) ve yanında 6px durum noktası durur.
3. Kod içerikleri mono 13px, zeminleri `--surface-2`, sol kenarlarında 2px accent şerit.
4. Sayfa zemini soğuk gri (`#e9edf2`), hücreler beyaz — kart gölgesi yok denecek kadar az.
5. Başlıklar Space Mono 700; gövde Inter — serif yok.

## Görsel imza
- **Yürütme oluğu:** hücrenin solunda 46px genişlik; üstte `In [` ve 34px sağda `]:` mono 10px, `--ink-faint`.
- **Çıktı bloğu:** `--surface-2` zemin + sol 2px accent şerit; `Out` etiketi mono 10px.
- **Kernel noktası:** 6px kare (radius 1px), `idle` → `--ok`, `busy` → `--warn`, `ölü` → `--danger`; metin her zaman yanında.
- **Hücre yüzeyi:** beyaz `--surface`, 1px `--line`, `0 1px 2px` gölge, radius 8px.
- **Tipografi karışımı:** başlık Space Mono 700 (36/26/19), gövde Inter 15px/1.58, kod JetBrains Mono 13px/1.6.
- **Hareket imzası:** 230ms `cubic-bezier(.2,.9,.2,1)`, 3px — hücre "basılmış" gibi anında oturur.
- **Landing hero (QA):** REPL hücreleri: `In [` oluğu, accent sol şerit, `Out[3]` çıktı altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#e9edf2` | sayfa zemini (soğuk gri) | hücre zemini |
| `--surface` | `#ffffff` | hücre, input, tablo | sayfa zemini |
| `--ink` | `#131a22` | kod, başlık, gövde | dekoratif çizgi |
| `--accent` | `#b8460f` | yürütme şeridi, çalıştır düğmesi, imleç | geniş zemin dolgusu |
| `--line` | `rgba(19,26,34,.14)` | hücre kenarı, oluk çizgisi | metin rengi |

- Ölçülen kontrast: `ink / bg` = **14.90:1** · `ink-soft / bg` = **6.36:1** · `accent-ink / accent` = **5.36:1** · `ink-faint / bg` = **3.11:1** (yalnız oluk etiketi).
- Tek vurgu kuralı: tek accent (`#b8460f`, yanık turuncu) — yürütme ve seçim için. Sözdizimi ikinci renk kullanmaz; `--ok`/`--warn`/`--danger` yalnız kernel durumu ve hata metni.
- Yasak kombinasyon: accent dolgu üstünde 12px altı metin; `--surface-2` üstünde `--ink-faint` kod satırı.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Space Mono (`--font-display`) | 36px (mobil 24px) | 700 | 1.16 | `-.02em` |
| H2 | Space Mono | 26px | 700 | 1.22 | `0` |
| H3 | Space Mono | 19px | 700 | 1.28 | `0` |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.58 | `0` |
| Kod / mono | JetBrains Mono (`--font-mono`) | 13px | 400 | 1.60 | `0` |
| Etiket | JetBrains Mono | 11px | 500 | 1.40 | `.06em` |

- Ölçek oranı: **1.35** — kullanılan basamaklar 11 · 12 · 13 · 15 · 19 · 26 · 36.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3vw, 36px); line-height: 1.16 }`.
- Gövde metni maksimum satır uzunluğu: **66ch**; kod satırı **72ch** (390px'te yatay kaydırma yerine sarma).
- Ağırlık kuralı: display 700, gövde 400/600, kod 400. İtalik ve 300 yasak; kod içinde bold yalnız arama vurgusu.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1240px (içerik 1200px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1240; 768 altında oluk 46px → 30px, kod satırı sarar |

- Asimetri kuralı: hücre ızgarası 2 kolonluk oluk + 10 kolon içerik; ekran başına **1** asimetrik bölünme (sağda çıktı özeti).
- Bölüm ritmi: art arda en fazla **4** hücre; beşinciden sonra markdown başlığı (H2) zorunlu.
- Hücreler arası dikey boşluk 12px; oluk ile içerik arası 16px'ten az olamaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, oluk zemini, çıktı bloğu |
| Hücre | `--surface` | `0 1px 2px rgba(19,26,34,.08)` | kod hücresi, tablo, input |
| Yüzen katman | `--surface` + `--shadow` | `0 10px 26px rgba(19,26,34,.16)` | kernel onayı, komut önerisi |

- Kenarlık formülü: `1px solid var(--line)`; çalışan hücrede sol `3px solid var(--accent)`.
- Derinlik nereden gelir: **hücre sınırı** — gölge yalnız 1–2px; yığın hissi yok.
- Radius: `--radius: 4px` (input, buton, chip), `--radius-lg: 8px` (hücre, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 32px | `0 12px` | `var(--radius)` | 13px Inter 600 | accent dolgu, accent-ink metin, gölge yok | hover: accent %88 + ink · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .4 (`Shift+Enter` ipucu kalır) · loading: `In [*]` + 3 nokta, 700ms |
| Buton (ikincil) | 32px | `0 12px` | `var(--radius)` | 13px Inter 600 | `--surface` + 1px `--line` | hover: `--surface-2` |
| Input | 36px | `0 10px` | `var(--radius)` | 13px JetBrains Mono | `--surface` + 1px `--line` | focus: accent çerçeve + 2px accent %26 outline · error: `--danger` çerçeve + `Traceback` bloğu · disabled: opacity .4 |
| Kart / hücre | içerik | `16px` | 8px | `In [n]` 10px mono + gövde | `--surface` + 1px `--line` + `var(--shadow)` | çalışıyor: sol 3px accent şerit · hata: sol şerit `--danger` |
| Chip / badge | 22px | `0 8px` | 999px | 11px JetBrains Mono | `--surface-2` + 1px `--line` | accent: accent %12 zemin + accent metin |
| Nav | 48px | `0 20px` | 0 | 12px JetBrains Mono | `--surface` + alt hairline | kernel durumu: nokta + `idle/busy` metni |
| Tablo satırı | 34px | `6px 8px` | — | 12px JetBrains Mono, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | `18px` | 8px | 26px Space Mono + gövde | `--surface` + 1px `--line` + `0 10px 26px` | kernel yeniden başlatma: mono uyarı + iki düğme |
| Toast | 34px | `8px 12px` | 4px | 12px JetBrains Mono | `--surface` + sol uçta 6px accent kare | `Out kopyalandı`, 3000ms, alt-sağ |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--ok` | en fazla 3 seri; çizgi 2px, alan %10 dolgu |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; hücre içinde `offset: 1px` (hücre kenarına yapışmasın).
- Dokunma hedefi: 44×44px — çalıştır düğmesi görsel 32px, sarmalayıcı padding ile 44px'e çıkar.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 1px köşe, 18px ızgara; çalıştır/kes/yeniden başlat |
| Fotoğraf | yok — çıktı görselleri hücre içinde küçük önizleme olarak |
| İllüstrasyon | yok; çıktı bloğu ve yürütme oluğu tek görsel dil |
| Doku | grain yok; oluk zemini ve hairline yeterli |
| Logo alanı | Space Mono 700 `nb_` öneki + 6px kernel kare noktası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | solda üç hücre önizlemesi, sağda çalıştır CTA | `shots/01-landing.png` |
| Dashboard | yüksek | dört KPI hücresi + tek çıktı grafiği | `shots/02-dashboard.png` |
| Form | orta | mono input'lar, her alanın altında doğrulama çıktısı | — |
| Liste / tablo | orta | 34px satır, tabular-nums, sağda `Out` özeti | — |
| Boş durum | orta | `In [ ]:` imleci + tek örnek komut | — |
| Onboarding | yüksek | ilk hücre: `print("merhaba")` çalıştır | — |
| Pricing | düşük | iki plan hücresi, sağda `Out` fiyat bloğu | — |
| Giriş / ödeme | düşük | mono input + `Out` doğrulama satırı | — |
| Modal | orta | kernel yeniden başlatma onayı (mono uyarı) | — |
| Bildirim / toast | düşük | alt-sağ, `Out kopyalandı` tek satır | — |
| Hata | orta | `Traceback` bloğu: sol şerit `--danger`, mono 12px | — |
| Profil / ayar | orta | ayar hücreleri, değişiklik `Out` satırında özetlenir | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **230ms** | `cubic-bezier(.2,.9,.2,1)` | `opacity` + `translateY(3px)`; stagger **0.024s** |
| Scroll reveal | **190ms** | aynı eğri | trigger `top 90%`, `translateY(2px)`, `once: false` |
| Pin / scrub | yok | — | pin kapalı (hücre sabit kalır) |
| Basma | **120ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 190ms | aynı eğri | opacity + 2px |
| Hover | **70ms** | aynı eğri | görsel ölçek **1.004** |
| Ödül / vurgu | 230ms | aynı eğri | çıktı bloğu belirir, tek kez; `busy` noktası 2 kare yanıp söner |

- İmza ölçüleri: `enter = 0.23s / cubic-bezier(.2,.9,.2,1) / 3px / 0.024` · `scroll = top 90% / 0.19s / 2px / once:false` · `pin = false` · `hover = 70ms / 1.004`.
- Bant içi fark: 111'den (0.39s / 7px / 0.048 / once:true), 112'den (1.28s / 3px / 0.185 / top 64%), 114'ten (0.63s / 9px / 0.033), 115'ten (0.12s / 0px / 0.008) en az yedi parametrede ayrışır. Karşılaştırma örneği 65-cockpit-avionics (`0.24s / cubic-bezier(0,0,.2,1) / 6px / 0.055`): süre, eğri, offset, stagger, trigger ve `once:false` ile ayrışır (8 parametre); katalogdaki tüm imzalarla en az iki parametre farkı makine kontrolüyle doğrulanır.
- `prefers-reduced-motion`: tüm süreler 0.01ms; çıktı anında belirir, `busy` noktası yanıp sönmez.
- Bu stile yasak hareket: hücrelerin yer değiştirmesi, blur geçişi, uzun loading spinner'ı, sonsuz yanıp sönen imleç (en fazla 2 kare).

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#e9edf2` | `#101519` |
| `--surface` | `#ffffff` | `#1c242b` |
| `--ink` | `#131a22` | `#e8eef4` |
| `--accent` | `#b8460f` | `#f08a4b` |
| `--ink-soft` | `#47566a` | `#a7b5c2` |
| `--line` | `rgba(19,26,34,.14)` | `rgba(232,238,244,.15)` |

- Koyu modda değişen başka ne var: accent bir ton açılır (`#f08a4b`, kontrast 7.61:1); çıktı bloğu zemini `--surface-2` (#232c34) olur ve kod kontrastı 13:1 üstünde kalır; oluk etiketi `--ink-faint` (`#79879a`) korunur.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark` ve `token-block.css` koyu bloğu birebir aynı).

## Zorunlu kurallar
- Her yürütülebilir hücre `In [n]:` numarası taşır; numara sol oluğa mono 10px yazılır ve gizlenmez.
- Çıktı ayrı `Out[n]:` bloğunda, `--surface-2` zemin + sol 2px accent şeritle gösterilir.
- Kernel durumu her zaman yazıyla: `idle` / `busy` / `ölü` — nokta tek başına yetmez.
- Kod mono 13px/1.6 (JetBrains Mono); UI metni sans (Inter). Kod içinde en fazla 2 renk (ink + accent).
- Çalıştırma kısayolu görünür ipucu olarak yazılır: `Shift+Enter`.
- Uzun kod satırı 390px'te sarar; yatay kaydırma yalnız tablo hücresinde.

## Yasaklar
- Numarasız hücre (yürütme sırası okunamaz).
- Çıktıyı kod bloğunun içine karıştırmak.
- Çok renkli sözdizimi teması; accent dışında ikinci parlak renk.
- Hap radius, kalın gölge, gradyan zemin.
- Kernel durumunu yalnız renkle vermek.
- Serif display; kod satırında 12px altı punto.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **6.36:1** (eşik 4.5); `ink / bg` = **14.90:1**; `accent-ink / accent` = **5.36:1**.
- `--ink-faint` (3.11:1) yalnız `In [`/`Out` oluk etiketinde; kod ve etkileşimli metinde kullanılmaz.
- Hücre çıktısı `aria-live="polite"` bölgesine yazılır: "Hücre 7 çalıştı, çıktı hazır".
- Hata bloğu `role="alert"` + `Traceback` başlığı; renk dışında metinle de anlatılır.
- Hareket/parlama hassasiyeti: düşük — `prefers-reduced-motion` çıktı belirmesini ve `busy` noktasını durdurur.
- Odak görünürlüğü: 2px accent outline + 2px offset; beyaz hücre üstünde de görünür, oluk içinde `offset: 1px`.

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
| Sayfa "kod bloğu yığını" gibi | çıktı ve kod ayrılmamış | `Out` bloğu + `--surface-2` zemin ekle |
| Yürütme sırası anlaşılmıyor | numara gizlenmiş | `In [n]` oluğu her hücrede görünür olsun |
| Kernel dondu sanılıyor | yalnız nokta var | `busy` metnini nokta yanına yaz |
| Mobilde yatay kaydırma | kod satırı sarmıyor | `white-space: pre-wrap; overflow-wrap: anywhere` |
| Renk cümbüşü | çok renkli kod teması | 2 renk sınırı: ink + accent |
| Hücreler zıplıyor | gölge + yükseklik animasyonu | yalnız opacity + 3px, gölge 1–2px |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı mono disiplin; defterin çıktısını terminal panelinde göstermek için.
- **Uyumlu:** `utility` — hesap sonuçlarının yoğun tablo hâli.
- **Uyumlu:** `log-stream` — hücre yürütme günlüğü ayrı panelde.
- **Yasak:** `editorial-design` — serif akış ve geniş kolonlar kod okumayı zorlaştırır.
- **Yasak:** `art-deco` — süsleme ve ince geometri yürütme oluğunu kirletir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://jupyter.org/ | hücre + çıktı yapısı ve defter kavramı |
| https://en.wikipedia.org/wiki/REPL | oku-değerlendir-yaz döngüsü ve istem işareti |
| https://jupyter-notebook.readthedocs.io/en/stable/ | yürütme numarası, kernel durumu |
| https://www.w3.org/WAI/WCAG22/Understanding/reflow.html | 390px'te kod satırının sarması |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Notebook / REPL (styles/113-notebook-repl/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="notebook-repl"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Space Mono 36/26/19 (700, -.02em); --font-body Inter 15px/1.58;
  --font-mono JetBrains Mono 13px/1.6 kod, 11px etiket (.06em).
Yüzey: --bg soğuk gri / --surface beyaz hücre + 1px var(--line) + var(--shadow) 0 1px 2px;
  çıktı bloğu --surface-2 + sol 2px accent şerit. Radius 4px (kontrol), 8px (hücre).
Renk: tek accent #b8460f; ink/bg 14.90:1, ink-soft/bg 6.36:1, accent-ink/accent 5.36:1,
  ink-faint/bg 3.11:1 (oluk etiketi).
İmza: sol 46px yürütme oluğu (In [n]:), altında Out çıktı bloğu, navda kernel durumu,
  hücrede 2 renk sınırı.
Hareket: enter 230ms cubic-bezier(.2,.9,.2,1) 3px stagger .024; scroll top 90% 190ms 2px once:false;
  pin yok; hover 70ms görsel 1.004. prefers-reduced-motion zorunlu.
Yasak: numarasız hücre, çıktının koda karışması, çok renkli kod teması, hap radius, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (In/Out oluğunu ve kernel durumunu nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: `In[n]` oluğu, `Out` bloğu, kernel durumu, 2px accent şerit.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 14.90 / 6.36 / 5.36 — hepsi eşik üstü.
- [ ] Her hücrede numara; çıktı ayrı blokta.
- [ ] Odak halkası 2px accent + 2px offset görünür.
- [ ] 390px'te yatay kaydırma yok; `prefers-reduced-motion` hareketi durduruyor.

## Token

```css
[data-style="notebook-repl"] {
  --bg: #e9edf2; --bg-2: #dfe5ec; --surface: #ffffff; --surface-2: #f4f7fa;
  --ink: #131a22; --ink-soft: #47566a; --ink-faint: #7a8798;
  --accent: #b8460f; --accent-ink: #ffffff; --line: rgba(19,26,34,.14);
  --radius: 4px; --radius-lg: 8px; --shadow: 0 1px 2px rgba(19,26,34,.08); --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace; --font-body: "Inter", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0; --blur: 0px; --grain: 0;
  --danger: #a51f1f; --danger-ink: #ffffff; --ok: #1c6b4a; --warn: #8a5a00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="notebook-repl"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
