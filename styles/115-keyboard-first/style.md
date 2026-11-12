# 115 · Klavye-Öncelikli Komut Arayüzü

> **Bir cümlede:** Her eylemin tuş ipucunu yanında taşıyan, sabit komut satırı ve 2px odak halkasıyla klavyeden hiç ayrılmadan çalışılan komut yüzeyi stili.

| | |
|---|---|
| **Hissiyat** | hızlı, kesin, teknik, anındalık |
| **En iyi** | geliştirici aracı, yönetim konsolu, komut satırı ürünü, güç kullanıcı paneli |
| **Kaçın** | ilk kez kullanan tüketici uygulaması, vitrin/pazarlama sayfası, çocuk eğitimi — tuş haritası burada öğrenme yükü olur |
| **Zorluk** | yüksek · **Erişilebilirlik** | düşük risk (en düşük metin çifti 8.22:1, accent üstü 10.58:1) |
| **Aile** | Etkileşim Paradigmaları (106–115) · **Token** | `kit/tokens.css` → `[data-style="keyboard-first"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Klavye-Öncelikli Komut Arayüzü, işlevi **tuş dizisine** bağlar: her eylemin yanında `<kbd>` görünümlü tuş başlığı (mono 11px, 4px radius, 2px sert alt gölge), ekranın üstünde sabit komut satırı (`/` ile odaklanır), satır listelerinde ok tuşuyla gezinme ve sol 2px accent şeritli seçim.

Kurucu kararları üç tanedir. Birincisi **kısayol zorunluluğu**: kısayolu olmayan birincil eylem yoktur; fare bir kısayolun alternatifidir, tek yol değildir. İkincisi **anındalık**: tüm geçişler `linear` ve 45–160ms arası; yumuşak ease ve süs hareketi yoktur çünkü klavye kullanıcısı gecikmeyi hata sanır. Üçüncüsü **odak görünürlüğü**: 2px accent halka + 2px offset her odaklanabilir öğede zorunlu.

Bedeli: öğrenme eğrisi. Bu yüzden tuş haritası (`?`) ve komut satırı ipucu kalıcıdır; ilk kullanım ekranında en sık 5 kısayol yazılı olarak gösterilir.

### Ne değildir
- **Komut Paleti (108) değildir:** 108 koyu, tek amaçlı bir ⌘K overlay'idir (radius 6px, JetBrains Mono başlık, 190ms geçiş); 115 bir sayfa düzenidir, Rajdhani başlık kullanır, tuş başlıkları ve seçim şeridi taşır, 120ms/linear ile daha hızlıdır.
- **Terminal UI (45) değildir:** 45 tek renkli, yeşil-siyah tam ekran mono konsoldur ve başlık da mono; 115'te Rajdhani başlık, amber accent ve tuş başlığı bileşeni vardır.
- **Utility (44) değildir:** 44 yoğun ama kısayol-öncelikli değildir (görsel eylem ağırlıklı); 115'te her eylem tuş ipucuyla eşlenir.
- **Sıfır Arayüz (112) değildir:** 112 kontrolü gizler, monokromdur; 115 kontrolleri **açar** ve tuşlarla etiketler.

### Nereden gelir
Vim/Emacs tuş dili, which-key tarzı ipucu şeritleri ve geliştirici konsollarından gelir: kullanıcı elini fareye götürmeden iş bitirir. Bugün geri dönüyor çünkü yapay zekâ ajanları komut satırından sürülüyor. Klişeye dönmemesi için korunacak detay: **tuş başlığının gerçekten basılabilir olması** (dekoratif etiket değil) ve odak halkasının hiç kaldırılmaması.

### 3 saniyede tanıma testi
1. Buton ve menü satırlarının yanında `<kbd>` görünümlü tuş başlıkları var (mono 11px, sert alt gölge).
2. Ekranın üstünde sabit komut satırı ve başında `>` işareti duruyor.
3. Seçili liste satırının solunda 2px amber şerit var.
4. Tipografi sıkı: Rajdhani 700 başlık, mono 12px tablo/gövde etiketleri, radius 4px.
5. Zemin koyu grafit (`#0f1013`), tek accent amber (`#ffb62e`); yuvarlak/hap öğe yok.

## Görsel imza
- **Tuş başlığı (kbd):** 20px yükseklik, mono 11px, 4px radius, `--surface-2` zemin, 1px `--line`, `0 2px 0 rgba(0,0,0,.55)` sert alt gölge.
- **Sabit komut satırı:** 34px yükseklik, `--bg-2` zemin, başında `>` accent işareti, sağında `/` tuş başlığı.
- **Seçim şeridi:** liste satırında sol 2px accent; satır 30px, mono 12px.
- **Odak halkası:** `2px solid var(--accent)` + `2px` offset; hiçbir öğede `outline: none` tek başına kullanılmaz.
- **Izgara:** 88px hairline kare ızgara (`--ink` %5) — terminal hissi, doku değil.
- **Hareket imzası:** 120ms `linear`, 0px offset — ekran "ışınlanır", kaymaz.
- **Landing hero (QA):** komut satırı şeridi + tuş başlığı listesi; seçili satır accent sol çizgi, sağda keycap.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0f1013` | sayfa zemini (grafit) | kart zemini |
| `--surface` | `#17191e` | kart, panel | sayfa zemini |
| `--ink` | `#e9ecf1` | metin, tuş etiketi | dekoratif dolgu |
| `--accent` | `#ffb62e` | odak, seçim şeridi, birincil eylem | geniş zemin dolgusu |
| `--line` | `rgba(233,236,241,.16)` | kart kenarı, ızgara | metin rengi |

- Ölçülen kontrast: `ink / bg` = **16.07:1** · `ink-soft / bg` = **8.22:1** · `accent-ink / accent` = **10.58:1** · `ink-faint / bg` = **4.57:1** (dekoratif tuş ipucu).
- Tek vurgu kuralı: tek accent (`#ffb62e`). `--danger`/`--ok`/`--warn` yalnız metin ve 2px nokta; dolgu yok.
- Yasak kombinasyon: accent dolgu üstünde `--ink-soft`; `--bg-2` üstünde `--ink-faint` etiket (koyu zeminde 12px altı okunmuyor).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Rajdhani (`--font-display`) | 34px (mobil 22px) | 700 | 1.05 | `.01em` |
| H2 | Rajdhani | 24px | 700 | 1.14 | `.01em` |
| H3 | Rajdhani | 18px | 700 | 1.20 | `.01em` |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.52 | `0` |
| Etiket / mono | JetBrains Mono (`--font-mono`) | 11px | 500 | 1.40 | `.08em` |
| Tablo / tuş | JetBrains Mono | 12px / 11px | 400 / 500 | 1.40 | `.04em` |

- Ölçek oranı: **1.20** — kullanılan basamaklar 11 · 12 · 13 · 14 · 18 · 24 · 34 (sıkı ölçek, bilgi yoğunluğu için).
- Ölçü önerisi: `h1 { font-size: clamp(22px, 2.6vw, 34px); line-height: 1.05 }`.
- Gövde metni maksimum satır uzunluğu: **76ch** (kod/komut satırları uzun olabilir, sarma serbest).
- Ağırlık kuralı: display 700, gövde 400, vurgu 600, tuş 500; italik ve 300 yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1320px (içerik 1288px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1320; 768 altında tuş haritası paneli gizlenir, komut satırı kalır |

- Asimetri kuralı: içerik 9 kolon + sağda 2 kolonluk tuş haritası paneli; ekran başına **1** asimetrik bölünme.
- Bölüm ritmi: art arda en fazla **5** satır grubu; altıncıda hairline ayırıcı zorunlu.
- Satır yükseklikleri sıkı: tablo 30px, kart içi liste 32px, komut satırı 34px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, komut satırı zemini |
| Panel | `--surface` | `none` | kart, liste, tablo |
| Tuş / yüzen | `--surface-2` + `--shadow-hard` | `0 2px 0 rgba(0,0,0,.55)` | tuş başlığı, komut önerisi paneli |

- Kenarlık formülü: `1px solid var(--line)`; odakta ek `outline: 2px solid var(--accent)`.
- Derinlik nereden gelir: **yalnız tuş başlığı** sert gölge taşır; paneller gölgesiz, ayrım hairline ile.
- Radius: `--radius: 4px` (buton, input, tuş, chip), `--radius-lg: 8px` (kart, modal); hap biçim yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 32px | `0 12px` | `var(--radius)` | 13px Inter 600 | accent dolgu, accent-ink metin, sağda tuş başlığı | hover: accent %88 + ink · active: translateY(2px), gölge sıfır · focus: 2px accent outline + 2px offset · disabled: opacity .35 + köşeli parantezli soluk ipucu · loading: `…` + komut satırında `çalışıyor` |
| Buton (ikincil) | 32px | `0 12px` | `var(--radius)` | 13px Inter 600 | `--surface-2` + 1px `--line` | hover: accent çerçeve + accent metin |
| Input | 34px | `0 10px` | `var(--radius)` | 13px JetBrains Mono | `--bg-2` + 1px `--line` | focus: accent çerçeve + 2px accent %30 outline + satır başında `>` · error: `--danger` çerçeve + `hata:` önekli mono satır · disabled: opacity .4 |
| Kart | içerik | `14px` | 8px | 18px Rajdhani + 14px gövde | `--surface` + 1px `--line`, gölge yok | seçili: sol 2px accent şerit · odak: 2px halka |
| Chip / badge (kbd) | 20px | `0 6px` | 4px | 11px JetBrains Mono 500 | `--surface-2` + 1px `--line` + `--shadow-hard` | accent: accent dolgu + accent-ink + amber alt gölge |
| Nav | 44px | `0 16px` | 0 | 12px JetBrains Mono | `--bg-2` + alt hairline | aktif: accent metin + `inset 0 -2px 0 accent` |
| Tablo satırı | 30px | `4px 8px` | — | 12px JetBrains Mono, tabular-nums | satır arası 1px `--line` | seçili: sol 2px accent · hover: `--surface-2` |
| Modal / sheet | içerik | `16px` | 8px | 24px Rajdhani + gövde | `--surface` + 1px `--line` + `0 14px 34px rgba(0,0,0,.5)` | komut listesi: satır başına tuş başlığı, `Esc` kapatır |
| Toast | 30px | `6px 10px` | 4px | 12px JetBrains Mono | `--surface` + sol 2px accent | `kopyalandı — Esc`, 2600ms, sağ alt |
| Grafik paleti | — | — | — | — | `--accent`, `--ink-soft`, `--warn` | en fazla 3 seri; 1.5px çizgi, hairline ızgara |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — koyu zeminde 2px altına inilmez, `--surface` üstünde de aynı.
- Dokunma hedefi: 44×44px — 30px satırlar `padding` ile 44px hedefe genişletilir (klavye birincil olsa da dokunma hedefi korunur).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 2px köşe, 16px ızgara; her ikon bir tuşla eşleşir |
| Fotoğraf | yok — komut arayüzünde görsel dikkat dağıtır |
| İllüstrasyon | yok; tuş başlıkları ve odak halkası görsel dil |
| Doku | grain yok; 88px hairline ızgara |
| Logo alanı | Rajdhani 700 `⌘` işaretli wordmark + mono alt satır, 12px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | komut satırı + üç örnek komut + tuş haritası önizleme | `shots/01-landing.png` |
| Dashboard | yüksek | 6 KPI satırı, her satırda tuş ipucu, seçim şeridi | `shots/02-dashboard.png` |
| Form | orta | mono input, `Tab` sırası numaralı, `Enter` gönderir | — |
| Liste / tablo | yüksek | 30px satır, ok tuşu gezinme, sol 2px seçim | — |
| Boş durum | orta | `>` komut satırı + 5 öneri komutu | — |
| Onboarding | yüksek | 5 kısayol kartı, her biri tuş başlığıyla | — |
| Pricing | düşük | iki plan satırı, satır sonunda `Enter` ipucu | — |
| Giriş / ödeme | çok düşük | iki input + `Enter` ile giriş, süs yok | — |
| Modal | yüksek | komut listesi: tuş + etiket + açıklama, `↑↓` gezinme | — |
| Bildirim / toast | düşük | sağ alt tek satır mono + `Esc` ipucu | — |
| Hata | orta | `hata:` önekli mono satır + düzeltme kısayolu | — |
| Profil / ayar | orta | kısayol atama tablosu, çakışmada `--danger` uyarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **120ms** | `linear` | `opacity`; `translateY(0px)`; stagger **0.008s** |
| Scroll reveal | **100ms** | `linear` | trigger `top 98%`, `translateY(1px)`, `once: true` |
| Pin / scrub | yok | — | pin kapalı (komut yüzeyi kaymaz) |
| Basma | **45ms** | `linear` | `translateY(2px)` + gölge sıfırlama |
| Geçiş / sayfa | 110ms | `linear` | yalnız opacity |
| Hover | **45ms** | `linear` | görsel ölçek **1.000** (yalnız çerçeve/renk) |
| Ödül / vurgu | 160ms | `linear` | komut çıktısı satırı belirir, tek kez |

- İmza ölçüleri: `enter = 0.12s / linear / 0px / 0.008` · `scroll = top 98% / 0.1s / 1px / once:true` · `pin = false` · `hover = 45ms / 1.000`.
- Bant içi fark: 111'den (0.39s / 7px / 0.048), 112'den (1.28s / 3px / 0.185 / top 64%), 113'ten (0.23s / 3px / 0.024), 114'ten (0.63s / 9px / 0.033) en az altı parametrede ayrışır. Karşılaştırma örneği 89-academic-paper (`0.33s / linear / 0px / 0.04`): süre, stagger, trigger, scroll süresi ve offset ile ayrışır (6 parametre); 45-terminal-ui (`0.18s / steps(3,end) / 0px / 0.03`) ile eğri, süre, stagger ve hover'da ayrışır. Katalogdaki tüm imzalarla en az iki parametre farkı makine kontrolüyle doğrulanır.
- `prefers-reduced-motion`: tüm süreler 0.01ms — komut çıktısı ışınlanır, imleç yanıp sönmez, tuş basımı yer değiştirmez.
- Bu stile yasak hareket: yumuşak/ease geçişler, blur, imleç nabzı, sayfa geçiş animasyonu, kaydırma hijack.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#0f1013` | `#020306` |
| `--surface` | `#17191e` | `#08090d` |
| `--ink` | `#e9ecf1` | `#f6f8fc` |
| `--accent` | `#ffb62e` | `#ffd79a` |
| `--ink-soft` | `#a3abb8` | `#b1bac7` |
| `--line` | `rgba(233,236,241,.16)` | `rgba(246,248,252,.13)` |

- Stil açık modda da grafittir; "koyu mod" artık gerçek gece siyahı: zemin `#0f1013` → `#020306` (bg çifti ΔE 3.9 — siyah tabanın sınırı), yüzey bandı ΔE 6.6 ve accent amber → sıcak amber (`#ffb62e` → `#ffd79a`, ΔE 40.2) ayrışmayı taşır. Izgara opaklığı %5 → %4.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark` ve `token-block.css` koyu bloğu birebir aynı).

## Zorunlu kurallar
- Her birincil eylemin görünür tuş ipucu vardır; kısayolu olmayan eylem birincil sayılmaz.
- Odak halkası zorunlu: 2px accent + 2px offset; hiçbir öğede `outline: none` tek başına kullanılmaz.
- Komut satırı sayfanın üstünde sabit: `/` odaklar, `Esc` kapatır, `Enter` çalıştırır, `↑` geçmiş.
- Liste satırları ok tuşlarıyla gezilir; seçili satır sol 2px accent şerit taşır.
- Tuş başlığı mono 11px, 4px radius, `--shadow-hard` (`0 2px 0`) taşır; dekoratif etiket olarak kullanılmaz, gerçekten basılabilir olmalıdır.
- Fare alternatifi korunur: her klavye işlemi en az bir görünür kontrole de sahiptir.

## Yasaklar
- Kısayolsuz birincil eylem; yalnız ikonla anlatılan komut.
- Hap radius, yuvarlak büyük CTA, gradyan zemin, illüstrasyon.
- Yumuşak `ease`/`cubic-bezier` geçişler (anındalık kaybı) ve 45ms üstü hover.
- Odak halkasını kaldırmak veya `outline: 0` ile gizlemek.
- Serif display; 12px altı etiket.
- Sürekli yanıp sönen imleç/nabız.

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **8.22:1** (eşik 4.5); `ink / bg` = **16.07:1**; `accent-ink / accent` = **10.58:1**; `ink-faint / bg` = **4.57:1** (dekoratif tuş ipucu bile eşik üstü).
- `--ink-faint` yalnız pasif tuş ipucunda; etkileşimli metinde `--ink-soft` kullanılır.
- Tüm işlevler klavyeyle erişilebilir (WCAG 2.1.1); odak sırası görsel sırayla aynıdır, `Tab` tuzağı yok.
- Komut satırı `role="combobox"` + `aria-expanded`; öneri listesi `aria-activedescendant` ile gezilir, sonuç `aria-live="polite"` duyurulur.
- Tuş başlığı ekran okuyucuya `aria-keyshortcuts` ile bağlanır; görsel `<kbd>` metni de okunur.
- Hareket/parlama hassasiyeti: çok düşük — süreler 45–160ms ve `prefers-reduced-motion` hepsini sıfırlar; yanıp sönen imleç yok.
- Odak görünürlüğü: amber accent koyu zeminde 10.58:1; `--surface-2` üstünde halka kalınlığı 2px korunur, offset 1px'e düşmez.

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
| Kısayollar keşfedilmiyor | yalnız tooltip'te | tuş başlığı kalıcı görünür olsun |
| Tıklama "yavaş" hissi | ease geçiş kullanılmış | `linear` ve ≤160ms |
| Odak kayboluyor | `outline: none` | 2px accent + 2px offset |
| Tuş etiketi dekoratif | `<kbd>` gerçekten çalışmıyor | aynı eylemi tuşla da bağla |
| Koyu zeminde kontrast düşük | accent %60 opaklık | accent'i tam opak kullan |
| Liste kalabalık | 30px üstü satır + ikon yığını | satır 30px, ikon tek ve tuşla eşli |

## Komşu stiller

- **Uyumlu:** `command-palette` — ⌘K overlay'i bu yüzeyin üstünde katman olarak çalışır.
- **Uyumlu:** `terminal-ui` — çıktı paneli aynı mono ızgarada.
- **Uyumlu:** `utility` — yoğun tablo düzeni aynı 30px satır ritmiyle.
- **Yasak:** `dopamine-ui` — parlak çoklu renk ve hap kontroller tuş haritasını gürültüye boğar.
- **Yasak:** `coral-reef` — büyük yuvarlak kartlar ve renk geçişleri anındalık disiplinini kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Keyboard_shortcut | kısayol gösterimi ve öğrenilebilirlik |
| https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html | tüm işlevlerin klavyeyle erişilebilirliği |
| https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/ | odak sırası ve ok tuşu davranışı |
| https://en.wikipedia.org/wiki/Vim_(text_editor) | kip/leader tuşu ve komut dili |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Klavye-Öncelikli Komut Arayüzü (styles/115-keyboard-first/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="keyboard-first"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Rajdhani 34/24/18 (700, .01em); --font-body Inter 14px/1.52;
  --font-mono JetBrains Mono 12px tablo, 11px tuş/etiket (.08em).
Yüzey: --bg grafit / --surface panel (gölge yok) + 1px var(--line); yalnız tuş başlığı
  var(--shadow-hard) 0 2px 0 rgba(0,0,0,.55). Radius 4px (kontrol/tuş), 8px (kart).
Renk: tek accent #ffb62e; ink/bg 16.07:1, ink-soft/bg 8.22:1, accent-ink/accent 10.58:1,
  ink-faint/bg 4.57:1 (pasif ipucu).
İmza: <kbd> tuş başlığı (mono 11px, 4px radius, sert alt gölge), üstte sabit komut satırı ("/"),
  seçili satırda sol 2px accent şerit, 2px odak halkası.
Hareket: enter 120ms linear 0px stagger .008; scroll top 98% 100ms 1px once; pin yok;
  hover 45ms görsel 1.000. prefers-reduced-motion zorunlu, yanıp sönen imleç yok.
Yasak: kısayolsuz birincil eylem, hap radius, ease geçiş, outline: none, serif display.
Çıktı: bileşen kodu + tek paragraf not (komut satırını ve tuş başlıklarını nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: tuş başlığı, sabit komut satırı, 2px seçim şeridi, odak halkası.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: 16.07 / 8.22 / 10.58 — hepsi eşik üstü.
- [ ] Her birincil eylemde tuş ipucu var; odak halkası hiç gizlenmiyor.
- [ ] 30px satırlar padding ile 44px dokunma hedefine çıkıyor.
- [ ] 390px'te taşma yok; `prefers-reduced-motion` hareketi durduruyor.

## Token

```css
[data-style="keyboard-first"] {
  --bg: #0f1013; --bg-2: #14161a; --surface: #17191e; --surface-2: #1d2026;
  --ink: #e9ecf1; --ink-soft: #a3abb8; --ink-faint: #737d8c;
  --accent: #ffb62e; --accent-ink: #1a1205; --line: rgba(233,236,241,.16);
  --radius: 4px; --radius-lg: 8px; --shadow: 0 1px 0 rgba(0,0,0,.4); --shadow-hard: 0 2px 0 rgba(0,0,0,.55);
  --font-display: "Rajdhani", "Inter", system-ui, sans-serif; --font-body: "Inter", system-ui, sans-serif; --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
  --danger: #ff8d80; --danger-ink: #1a0a06; --ok: #7fe0a8; --warn: #ffd98a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="keyboard-first"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
