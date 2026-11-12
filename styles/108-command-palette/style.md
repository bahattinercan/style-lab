# 108 · Komut Paleti

> **Bir cümlede:** Fare olmadan çalışan stil: koyu grafit zemin, blur ile karartılmış arka plan, 44px komut satırları, keycap chip'ler ve tek açık (chalk) accent.

| | |
|---|---|
| **Hissiyat** | hızlı, kesin, klavye-öncelikli, sessiz |
| **En iyi** | geliştirici aracı, proje yönetimi klavye katmanı, komut satırı eklentisi, güç kullanıcı arayüzü |
| **Kaçın** | vitrin/landing, görsel pazarlama, çocuk uygulaması — palet dili duygusal anlatım taşımaz |
| **Zorluk** | düşük · **Erişilebilirlik** | düşük risk (en düşük metin çifti 8.58:1; accent üstü 15.15:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="command-palette"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Komut Paleti, arayüzü **tek bir arama kutusu + satır listesi** olarak kurar: 52px arama alanı, 44px komut satırları, sağda keycap chip'ler (⌘K), seçim için açık (chalk) accent dolgu ve arka planda blur ile karartılmış içerik. Görsel zenginliği feda eder; karşılığında **saniyeler içinde eylem** kazandırır.

Kurucu kararları üç tanedir. Birincisi **accent açıktır**: `--accent` neredeyse beyaz (`#e8ecf2`), metin koyu; bu, seçim satırını "vurgu" değil "ışık" gibi gösterir ve karanlık arayüzde en yüksek okunurluğu verir. İkincisi **her eylem kısayollu**: satırda kısayol yoksa eylem palete girmez. Üçüncüsü **tek yüzen katman**: yalnız palet gölge taşır; satırlar gölgesizdir.

Bedeli: keşfedilebilirlik — kullanıcı komutları bilmezse palet boş görünür. Bu yüzden palet açıldığında ilk 5 satır "önerilen" olarak dolu gelir.

### Ne değildir
- **Terminal UI (45) değildir:** 45 tüm ekranı terminale çevirir, monospace her yerdedir ve 0–2px radius kullanır; 108 yalnız **geçici bir katman**dır, gövde Inter, radius 6/12px.
- **Utility (44) değildir:** 44 açık zeminli ürün arayüzüdür ve mavi accent taşır; 108 koyu zemin + chalk accent + keycap dili.
- **Log Stream (49) değildir:** 49 akan olay satırlarıdır (okuma), 108 komut satırlarıdır (eylem) ve seçim dolgusu taşır.
- **Trading Desk (47) değildir:** 47 amber vurgulu finans ekranıdır; 108'de renkli vurgu yok, tek açık accent var.

### Nereden gelir
Editör komut paletlerinden (VS Code, Sublime) ve 2020'lerin "launcher" uygulamalarından (Raycast/Spotlight çizgisi). Bugün önemli çünkü ürünlerde eylem sayısı arttı; menü hiyerarşisi yerine tek arama kutusu daha hızlı. Klişeye dönmemesi için korunacak detay: **satır yüksekliği 44px** ve **kısayolsuz eylem olmaması**.

### 3 saniyede tanıma testi
1. Zemin koyu grafit; arka plan içerik blur ile karartılmış.
2. Arama alanı 52px, komut satırları 44px ve mono kısayol chip'leri sağda.
3. Seçili satır açık (chalk) dolgu + koyu metin; gölge yok.
4. Tüm etiketler mono, `.06em` tracking; radius 6/12px.
5. Renkli vurgu yok: tek açık accent + nötr gri skala.

## Görsel imza
- **Chalk accent:** `--accent: #e8ecf2`, `--accent-ink: #14171c`; seçim satırı ve birincil eylem.
- **Keycap chip:** 20px yükseklik, 4px radius, mono 11px 600, ⌘/⇧/↵ sembolleri.
- **Satır ritmi:** arama 52px, satır 44px, alt kısayol şeridi 32px; görünür alanda en fazla 8 satır.
- **Blur arka plan:** palet dışı içerik `blur var(--blur)` = 12px + `--bg` %60 karartma.
- **Tek gölge:** palet `0 24px 60px rgba(0,0,0,.55)`; başka hiçbir öğe gölge taşımaz.
- **Fuzzy eşleşme vurgusu:** eşleşen harfler `--accent` metin; dolgu değil.
- **Hareket imzası:** 190ms `cubic-bezier(.05,.9,.1,1)`, 5px — palet anlıktır, süzülmez.
- **Landing hero (QA):** 8 satırlık komut paleti: 52px arama şeridi, seçili satır accent %10, sağda keycap sütunu, `esc` altbilgisi.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#111318` | sayfa zemini (grafit) | palet zemini |
| `--bg-2` | `#16191f` | nav, ikincil bant | seçim satırı |
| `--surface` | `#1b1f26` | palet gövdesi, kart | sayfa zemini |
| `--surface-2` | `#222731` | arama alanı, keycap chip | modal zemini |
| `--ink` | `#eef0f3` | başlık, komut adı | seçim satırı (orada accent-ink) |
| `--ink-soft` | `#a9b1bc` | açıklama, ikincil etiket | başlık |
| `--ink-faint` | `#767e8a` | yalnız tablo başlığı/ayırıcı | komut adı, etkileşimli metin |
| `--accent` | `#e8ecf2` | seçim dolgusu, birincil eylem, eşleşme metni | geniş dekoratif zemin |
| `--accent-ink` | `#14171c` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(238,240,243,.14)` | kenarlık, ayırıcı | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.28:1** · `ink-soft / bg` = **8.58:1** · `accent-ink / accent` = **15.15:1** · `ink-faint / bg` = **4.53:1** (yalnız başlık/ayırıcı).
- Tek vurgu kuralı (kesin): renkli vurgu yok — accent nötr-açık. `--danger` (#ff8494), `--ok` (#86e0ae), `--warn` (#ffd27a) yalnız durum metni/noktasında.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` komut metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | JetBrains Mono (`--font-display`) | 30px (mobil 22px) | 600 | 1.20 | `-.01em` |
| H2 | JetBrains Mono | 22px | 600 | 1.30 | `0` |
| H3 | JetBrains Mono | 17px | 600 | 1.35 | `0` |
| Gövde / komut | Inter (`--font-body`) | 14px | 400 | 1.50 | `0` |
| Etiket / kısayol | JetBrains Mono (`--font-mono`) | 11px | 600 | 1.4 | `.06em` |

- Ölçek oranı: **1.4** — kullanılan basamaklar 11 · 12 · 13 · 14 · 17 · 22 · 30.
- Ölçü önerisi: `h1 { font-size: clamp(22px, 3vw, 30px); line-height: 1.2 }` — palet başlığı asla dev olmaz.
- Gövde satır uzunluğu en fazla **72ch**; komut açıklaması tek satır (kırpma ile).
- Ağırlık kuralı: display 600, gövde 400/600, mono 600. 300 ve italik yok.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1040px (palet 640px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1040; 768 altında palet tam genişlik, satır 48px |

- Asimetri kuralı: **asimetri yok** — palet tek kolon, odak tek. Arka plan karartması sahneyi ikinci plana atar.
- Bölüm ritmi: art arda en fazla **8** komut satırı; fazlası kaydırma, sayfalama yok.
- Boşluklar 4'ün katı; satır içi padding 12px, dikey 8px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + blur karartma | — | arka plan (etkileşimsiz) |
| Palet gövdesi | `--surface` | `0 24px 60px rgba(0,0,0,.55)` | arama + liste + kısayol şeridi |
| Seçim satırı | `--accent` dolgu | yok | aktif komut (metin `--accent-ink`) |

- Kenarlık formülü: `1px solid var(--line)`; seçim satırında çerçeve yok, yalnız dolgu + sol 2px çizgi.
- Derinlik nereden gelir: **tek yüzen gölge** + blur karartma. Satır gölgesi, iç gölge ve ofset yok.
- Radius: `--radius: 6px` (buton, input, chip çevresi), `--radius-lg: 12px` (palet, modal); keycap chip 4px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 32px | `0 12px` | 6px | 12px mono 600 | `--surface-2` + 1px `--line`, gölge yok | hover: surface-2 %85 + accent %15 · active: translateY(1px) · focus: 2px accent outline + 2px offset · disabled: opacity .4 · loading: 3 nokta (600ms) |
| Buton (ikincil) | 32px | `0 12px` | 6px | 12px mono | şeffaf + 1px `--line`, `--ink-soft` metin | hover: `--surface-2` |
| Input (arama) | 52px | `0 16px` | 6px | 15px Inter | `--surface-2` + 1px `--line` | focus: accent çerçeve + 2px outline offset 1px · filled: sağda temizle chip · error: `--danger` çerçeve + 11px etiket |
| Palet satırı | 44px | `8px 12px` | 6px | 14px Inter + 11px mono kısayol | seçili: accent dolgu + accent-ink metin | hover: `--surface-2`; seçili: sol 2px accent çizgi |
| Keycap chip | 20px | `0 6px` | 4px | 11px mono 600 | `--surface-2` + 1px `--line` | accent: accent dolgu + accent-ink |
| Nav | 48px | `0 16px` | 0 | 13px Inter | `--bg-2` + alt hairline | palet açıkken arka plan blur + %60 karartma |
| Tablo satırı | 44px | `8px 12px` | — | 13px Inter, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / palet | içerik | `0` (bölümler kendi padding'i) | 12px | 17px display + mono kısayol | `--surface` + `0 24px 60px` | açılış: 5px belirme, 190ms |
| Toast | 32px | `6px 12px` | 6px | 12px mono | `--surface` + sol uçta 4px accent çizgi | hata: çizgi `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn`, `--danger` | en fazla 3 seri; grafik yerine mono sayı satırı |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; seçili satırda halka yerine dolgu + sol çizgi.
- Dokunma hedefi: en az 44×44px; 32px buton mobilde `min-height: 44px`, palet satırı zaten 44px (mobilde 48px).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara; komut ikonları nötr `--ink-soft` |
| Fotoğraf | yok — palet ekranı görsel taşımaz |
| İllüstrasyon | yok; keycap chip ve satır hizası imza |
| Doku | grain yok; blur 12px arka plan ayrımı |
| Logo alanı | mono küçük harf wordmark + `>` işareti, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | düşük | H1 30px mono + tek "⌘K ile başla" CTA; görsel yok | `shots/01-landing.png` |
| Dashboard | düşük | palet katmanı açılır; arka plan blur + %60 karartma | `shots/02-dashboard.png` |
| Form | düşük | 52px arama + 44px satır; klavye ile tam gezinme | — |
| Liste / tablo | düşük | 8 satır sınırı, sağda kısayol kolonu | — |
| Boş durum | orta | "Komut bulunamadı" + önerilen 3 komut | — |
| Onboarding | orta | ⌘K tanıtımı: 3 kısayol kartı | — |
| Pricing | orta | plan tablosu satır bazlı; öne çıkan satır accent dolgu | — |
| Giriş / ödeme | çok düşük | palet yok; sade form, kısayol ipuçları | — |
| Modal | orta | palet modalı: arama + liste + alt kısayol şeridi | — |
| Bildirim / toast | orta | alt-sağ, mono kısa metin | — |
| Hata | düşük | `--danger` metin + nokta; palet kapanmaz | — |
| Profil / ayar | orta | kısayol eşleme tablosu (mono) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **190ms** | `cubic-bezier(.05,.9,.1,1)` | `opacity` + `translateY(5px)`; stagger **0.018s** |
| Scroll reveal | **170ms** | aynı eğri | trigger `top 97%`, `translateY(4px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (palet yüzer, sayfa sabitlenmez) |
| Basma | **65ms** | aynı eğri | `translateY(1px)` |
| Geçiş / sayfa | 120ms | aynı eğri | opacity, cross-fade yok |
| Hover | **65ms** | aynı eğri | görsel ölçek **1.000** (palet büyümez) |
| Ödül / vurgu | 260ms | aynı eğri | seçim satırı dolgusu soldan sağa %0→%100 |

- İmza ölçüleri: `enter = 0.19s / cubic-bezier(.05,.9,.1,1) / 5px / 0.018` · `scroll = top 97% / 0.17s / 4px / once` · `pin = false` · `hover = 65ms / 1.000`.
- Bant içi fark: 106'dan (0.37s / 2px / 0.022), 107'den (0.86s / 25px / pin 0.42), 109'dan (0.51s / 15px), 110'den (0.73s / 19px) en az dört parametrede ayrışır. Mevcut 93 stil içinde en yakını 49-log-stream (`0.16s / steps(4,end) / 0px / 0.012`) — süre, eğri, offset, trigger (top 97%), hover ve pin'de farklı; 1.000 ölçek yalnız 45 ve 70'te var, ikisinden de süre/eğri/offset ile ayrışır.
- `prefers-reduced-motion`: tüm süreler 0.01ms, palet animasyonsuz açılır (anlık).
- Bu stile yasak hareket: yay/overshoot, blur geçişi, saniyede 3 üstü flash, sürekli döngü.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#111318` | `#020305` |
| `--surface` | `#1b1f26` | `#0a0c11` |
| `--ink` | `#eef0f3` | `#f8fafd` |
| `--accent` | `#e8ecf2` | `#cfe0ff` |
| `--ink-soft` | `#a9b1bc` | `#b6bec9` |
| `--line` | `rgba(238,240,243,.14)` | `rgba(248,250,253,.12)` |

- Koyu mod "gece paleti": zemin `#111318` → `#020305` (bg çifti ΔE 5.8), yüzey bandı ΔE 8.8, tebeşir accent soğuk beyaza kayar (`#e8ecf2` → `#cfe0ff`, ΔE 14.3). Eski blok (`#0b0d11`) açık moddan ayırt edilemiyordu.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`).

## Zorunlu kurallar
- Klavye öncelikli: her eylem bir kısayolla erişilebilir ve kısayol satırda görünür.
- Palet satırı 44px, arama alanı 52px; görünür alanda en fazla 8 satır.
- Seçim yalnız accent dolgu + sol 2px çizgi ile işaretlenir; gölge kullanılmaz.
- Accent açık (chalk) tondur; accent üstünde metin daima `--accent-ink`.
- Palet dışı içerik blur + karartma ile ayrılır ve etkileşimsiz olur.
- Kısayollar mono 11px; keycap chip 20px / 4px radius.

## Yasaklar
- Kısayolsuz eylem (palete giremez).
- Büyük hero görseli ve dekoratif illüstrasyon.
- Geniş hap radius, kalın çerçeve.
- Çoklu parlak renk (tek chalk accent).
- Gölgeli satır / iç gölge.
- Serif display.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **8.58:1** (eşik 4.5); `ink-faint / bg` = **4.53:1** yalnız tablo başlığı/ayırıcıda.
- `--ink-faint` komut adında ve etkileşimli metinde kullanılmaz; komut metni `--ink`.
- Hareket/parlama hassasiyeti: düşük — 190ms geçiş, flash yok; `prefers-reduced-motion` paleti anlık açar.
- Blur katman: `@supports not (backdrop-filter: blur(1px))` → opak `--bg` %85 karartma fallback.
- Odak görünürlüğü: 2px accent outline + 2px offset; seçili satırda dolgu + sol 2px çizgi halka yerine geçer.
- ARIA: palet `role="listbox"`, satırlar `role="option"`, aktif satır `aria-selected="true"` (WAI-ARIA combobox deseni).

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
| Palet "form" gibi görünüyor | satır yüksekliği 56px+ | 44px satır, 52px arama |
| Kısayollar görünmüyor | chip sağa hizalanmamış | satırda `margin-left: auto` mono chip |
| Seçim okunmuyor | accent renkli (mavi) kullanılmış | chalk accent + koyu metin |
| Arka plan dikkat çalıyor | karartma yok | blur 12px + %60 karartma |
| Fare bağımlılığı | kısayolsuz eylem | eylem eklerken kısayol zorunlu |
| Mobilde sıkışık | 44px satır korunmuş | 768 altı 48px, tam genişlik |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı klavye-öncelikli dünya; Terminal alt panelde garnitür.
- **Uyumlu:** `log-stream` — olay akışı bölümünde okuma katmanı.
- **Uyumlu:** `utility` — açık temada ürün arayüzü; palet tek katman olarak.
- **Yasak:** `maximalism` — çoklu renk/desen paletin tek odak kuralını bozar.
- **Yasak:** `claymorphism` — yumuşak 3B formlar hız iddiasıyla çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.nngroup.com/articles/command-palette/ | satır yoğunluğu ve kısayol gösterimi |
| https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette | eylem adlandırma ve filtreleme |
| https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ | liste/arama erişilebilirlik modeli |
| https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html | klavye ile tam erişim |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Komut Paleti (styles/108-command-palette/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="command-palette"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg grafit; palet açıkken arka plan blur var(--blur)=12px + %60 karartma (opak fallback).
Tipografi: --font-display JetBrains Mono 30/22/17 (600); --font-body Inter 14px/1.5;
  --font-mono JetBrains Mono 11px kısayol chip (.06em).
Yüzey: --bg / palet --surface + tek gölge 0 24px 60px rgba(0,0,0,.55); satırlar gölgesiz.
  Radius 6px kontrol, 12px palet; keycap chip 4px/20px.
Renk: accent AÇIK chalk #e8ecf2, accent-ink #14171c (seçim dolgusu); renkli vurgu yok.
  ink/bg 16.28:1, ink-soft/bg 8.58:1, accent-ink/accent 15.15:1, ink-faint/bg 4.53:1.
Bileşen: arama 52px, satır 44px (mobil 48px), keycap chip 20px; odak 2px accent + 2px offset.
Hareket: enter 190ms cubic-bezier(.05,.9,.1,1) 5px stagger .018; scroll top 97% 170ms 4px once;
  pin yok; hover 65ms görsel 1.000. prefers-reduced-motion zorunlu (anlık açılış).
Yasak: kısayolsuz eylem, hero görseli, hap radius, çoklu parlak renk, gölgeli satır, serif.
Çıktı: bileşen kodu + tek paragraf not (seçim dolgusunu ve kısayol chip'ini nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: chalk seçim dolgusu, keycap chip, blur karartma, 44px satır.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.28 / 8.58 / 15.15 — hepsi eşik üstü.
- [ ] Her görünür eylemin kısayolu yazılı.
- [ ] 390px'te tam genişlik palet, 48px satır, taşma yok.
- [ ] `prefers-reduced-motion` açıkken palet anlık açılıyor.

## Token

```css
[data-style="command-palette"] {
  --bg: #111318; --bg-2: #16191f;
  --surface: #1b1f26; --surface-2: #222731;
  --ink: #eef0f3; --ink-soft: #a9b1bc; --ink-faint: #767e8a;
  --accent: #e8ecf2; --accent-ink: #14171c;
  --line: rgba(238,240,243,.14);
  --radius: 6px; --radius-lg: 12px;
  --shadow: 0 24px 60px rgba(0,0,0,.55); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 12px; --grain: 0;
  --danger: #ff8494; --danger-ink: #14171c;
  --ok: #86e0ae; --warn: #ffd27a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="command-palette"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
