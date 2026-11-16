# 115 · Klavye-Öncelikli Komut Arayüzü

> **In one sentence:** Her eylemin tuş ipucunu yanında taşıyan, sabit komut satırı ve 2px odak halkasıyla klavyeden hiç ayrılmadan çalışılan komut yüzeyi stili.

| | |
|---|---|
| **Feeling** | hızlı, kesin, teknik, anındalık |
| **Best for** | geliştirici aracı, yönetim konsolu, komut satırı ürünü, güç kullanıcı paneli |
| **Avoid** | ilk kez kullanan tüketici uygulaması, vitrin/pazarlama sayfası, çocuk eğitimi — tuş haritası burada öğrenme yükü olur |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="keyboard-first"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Klavye-Öncelikli Komut Arayüzü, işlevi **tuş dizisine** bağlar: her eylemin yanında `<kbd>` görünümlü tuş başlığı (mono 11px, 4px radius, 2px sert alt gölge), ekranın üstünde sabit komut satırı (`/` ile odaklanır), satır listelerinde ok tuşuyla gezinme ve sol 2px accent şeritli seçim.

Kurucu kararları üç tanedir. Birincisi **kısayol zorunluluğu**: kısayolu olmayan birincil eylem yoktur; fare bir kısayolun alternatifidir, tek yol değildir. İkincisi **anındalık**: tüm geçişler `linear` ve 45–160ms arası; yumuşak ease ve süs hareketi yoktur çünkü klavye kullanıcısı gecikmeyi hata sanır. Üçüncüsü **odak görünürlüğü**: 2px accent halka + 2px offset her odaklanabilir öğede zorunlu.

Bedeli: öğrenme eğrisi. Bu yüzden tuş haritası (`?`) ve komut satırı ipucu kalıcıdır; ilk kullanım ekranında en sık 5 kısayol yazılı olarak gösterilir.

### What is not
- **Komut Paleti (108) değildir:** 108 koyu, tek amaçlı bir ⌘K overlay'idir (radius 6px, JetBrains Mono başlık, 190ms geçiş); 115 bir sayfa düzenidir, Rajdhani başlık kullanır, tuş başlıkları ve seçim şeridi taşır, 120ms/linear ile daha hızlıdır.
- **Terminal UI (45) değildir:** 45 tek renkli, yeşil-siyah tam ekran mono konsoldur ve başlık da mono; 115'te Rajdhani başlık, amber accent ve tuş başlığı bileşeni vardır.
- **Utility (44) değildir:** 44 yoğun ama kısayol-öncelikli değildir (görsel eylem ağırlıklı); 115'te her eylem tuş ipucuyla eşlenir.
- **Sıfır Arayüz (112) değildir:** 112 kontrolü gizler, monokromdur; 115 kontrolleri **açar** ve tuşlarla etiketler.

### Where it comes from
Vim/Emacs tuş dili, which-key tarzı ipucu şeritleri ve geliştirici konsollarından gelir: kullanıcı elini fareye götürmeden iş bitirir. Bugün geri dönüyor çünkü yapay zekâ ajanları komut satırından sürülüyor. Klişeye dönmemesi için korunacak detay: **tuş başlığının gerçekten basılabilir olması** (dekoratif etiket değil) ve odak halkasının hiç kaldırılmaması.

### Recognition test in 3 seconds
1. Buton ve menü satırlarının yanında `<kbd>` görünümlü tuş başlıkları var (mono 11px, sert alt gölge).
2. Ekranın üstünde sabit komut satırı ve başında `>` işareti duruyor.
3. Seçili liste satırının solunda 2px amber şerit var.
4. Tipografi sıkı: Rajdhani 700 başlık, mono 12px tablo/gövde etiketleri, radius 4px.
5. Zemin koyu grafit (`#0f1013`), tek accent amber (`#ffb62e`); yuvarlak/hap öğe yok.

## Visual signature
- **Tuş başlığı (kbd):** 20px yükseklik, mono 11px, 4px radius, `--surface-2` zemin, 1px `--line`, `0 2px 0 rgba(0,0,0,.55)` sert alt gölge.
- **Sabit komut satırı:** 34px yükseklik, `--bg-2` zemin, başında `>` accent işareti, sağında `/` tuş başlığı.
- **Seçim şeridi:** liste satırında sol 2px accent; satır 30px, mono 12px.
- **Odak halkası:** `2px solid var(--accent)` + `2px` offset; hiçbir öğede `outline: none` tek başına kullanılmaz.
- **Izgara:** 88px hairline kare ızgara (`--ink` %5) — terminal hissi, doku değil.
- **Hareket imzası:** 120ms `linear`, 0px offset — ekran "ışınlanır", kaymaz.
- **Landing hero (QA):** komut satırı şeridi + tuş başlığı listesi; seçili satır accent sol çizgi, sağda keycap.
- **Typography:** Rajdhani (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#ffb62e`; neutral scale `#0f1013` → `#e9ecf1`.
- **Radius:** `4px` / `8px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her eylemin görünür tuş ipucu vardır: tuş başlığı (kbd) etiketin yanında veya sağında
2. Odak halkası 2px accent + 2px offset; hiçbir odaklanabilir öğe halkasız kalmaz
3. Komut satırı ekranın üstünde sabit: `/` ile odaklanır, `Esc` kapatır, `Enter` çalıştırır
4. Liste satırları ok tuşlarıyla gezilir; seçili satır accent sol 2px şerit taşır
5. Tuş başlığı `--radius` 4px, mono 11px, alt gölge `--shadow-hard`
6. Fare ile ulaşılamayan hiçbir işlem yok (klavye birincil, fare ikincil)

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0f1013` | page background | as a card background |
| `--bg-2` | `#14161a` | partition divider floor, table top | button background |
| `--surface` | `#17191e` | kart, input, modal | full-page background |
| `--surface-2` | `#1d2026` | passive chip, hover background | primary button |
| `--ink` | `#e9ecf1` | title, body, icon | large background |
| `--ink-soft` | `#a3abb8` | secondary text, description | — |
| `--ink-faint` | `#737d8c` | decorative label, separator text | interactive text |
| `--accent` | `#ffb62e` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#1a1205` | text above accent | non-accent background |
| `--line` | `rgba(233,236,241,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.07:1** · `ink-soft/bg` **8.22:1** · `ink-faint/bg` **4.57:1 (decorative)** · `accent-ink/accent` **10.58:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 34px (mobile 22px) | 600 | 1.12 | -0.02em |
| H2 | same | 24px | 600 | 1.22 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `4px` (buton, input, chip), `8px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Kısayolsuz birincil eylem; yalnız ikonla anlatılan komut.
- Hap radius, yuvarlak büyük CTA, gradyan zemin, illüstrasyon.
- Yumuşak `ease`/`cubic-bezier` geçişler (anındalık kaybı) ve 45ms üstü hover.
- Odak halkasını kaldırmak veya `outline: 0` ile gizlemek.
- Serif display; 12px altı etiket.
- Sürekli yanıp sönen imleç/nabız.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 4px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 4px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 4px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 4px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 4px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 4px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 4px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.86:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | komut satırı + üç örnek komut + tuş haritası önizleme | `shots/01-page.png` |
| Dashboard | yüksek | 6 KPI satırı, her satırda tuş ipucu, seçim şeridi | `shots/01-page.png` |
| Form | orta | mono input, `Tab` sırası numaralı, `Enter` gönderir | `shots/01-page.png` |
| Liste / tablo | yüksek | 30px satır, ok tuşu gezinme, sol 2px seçim | `shots/01-page.png` |
| Boş durum | orta | `>` komut satırı + 5 öneri komutu | `shots/01-page.png` |
| Onboarding | yüksek | 5 kısayol kartı, her biri tuş başlığıyla | `shots/01-page.png` |
| Pricing | düşük | iki plan satırı, satır sonunda `Enter` ipucu | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | iki input + `Enter` ile giriş, süs yok | `shots/01-page.png` |
| Modal | yüksek | komut listesi: tuş + etiket + açıklama, `↑↓` gezinme | `shots/01-page.png` |
| Bildirim / toast | düşük | sağ alt tek satır mono + `Esc` ipucu | `shots/01-page.png` |
| Hata | orta | `hata:` önekli mono satır + düzeltme kısayolu | `shots/01-page.png` |
| Profil / ayar | orta | kısayol atama tablosu, çakışmada `--danger` uyarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.07:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.22:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.57:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 10.58:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.86:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.9 | ≥ 60 target | thin text |

- `--ink-faint` is decorative only; never body text.
- Colour never carries meaning alone: state always comes with text or an icon.
- Keyboard order follows visual order; no focus traps. prefers-reduced-motion and prefers-contrast are supported.

## Sample images

Identical content is rendered with the same text in every style; only the design differs.

| Image | What to look at |
|---|---|
| `shots/01-page.png` | Single page — 1280×2400: navigation, hero, three sections, component grid, form/data, CTA and footer in one frame. |

## Traps

| Symptom | Cause | Fix |
| --- | --- | --- |
| Kısayollar keşfedilmiyor | yalnız tooltip'te | tuş başlığı kalıcı görünür olsun |
| Tıklama "yavaş" hissi | ease geçiş kullanılmış | `linear` ve ≤160ms |
| Odak kayboluyor | `outline: none` | 2px accent + 2px offset |
| Tuş etiketi dekoratif | `<kbd>` gerçekten çalışmıyor | aynı eylemi tuşla da bağla |
| Koyu zeminde kontrast düşük | accent %60 opaklık | accent'i tam opak kullan |
| Liste kalabalık | 30px üstü satır + ikon yığını | satır 30px, ikon tek ve tuşla eşli |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `command-palette` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `coral-reef` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Keyboard_shortcut | Keyboard shortcut — kısayol gösterimi ve öğrenilebilirlik |
| https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html | WCAG 2.2 · Keyboard — tüm işlevlerin klavyeyle erişilebilirliği |
| https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/ | ARIA APG · Keyboard interface — odak sırası ve ok tuşu davranışı |
| https://en.wikipedia.org/wiki/Vim_(text_editor | en.wikipedia.org — ) — kip/leader tuşu ve komut dili |

## AI brief

```text
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

Style: Klavye-Öncelikli Komut Arayüzü (keyboard-first) · family: Interactive (106–115)
Token: --bg #0f1013 · --surface #17191e · --ink #e9ecf1 · --accent #ffb62e · --line rgba(233,236,241,.16)
Radius: 4px / 8px · Typography: Rajdhani / Inter / JetBrains Mono
Required: Her eylemin görünür tuş ipucu vardır: tuş başlığı (kbd) etiketin yanında veya sağında · Odak halkası 2px accent + 2px offset; hiçbir odaklanabilir öğe halkasız kalmaz · Komut satırı ekranın üstünde sabit: `/` ile odaklanır, `Esc` kapatır, `Enter` çalıştırır
Banned: Kısayolsuz birincil eylem; yalnız ikonla anlatılan komut. · Hap radius, yuvarlak büyük CTA, gradyan zemin, illüstrasyon. · Yumuşak `ease`/`cubic-bezier` geçişler (anındalık kaybı) ve 45ms üstü hover.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="keyboard-first"] {
  --bg: #0f1013; --bg-2: #14161a;
  --surface: #17191e; --surface-2: #1d2026;
  --ink: #e9ecf1; --ink-soft: #a3abb8; --ink-faint: #737d8c;
  --accent: #ffb62e; --accent-ink: #1a1205;
  --line: rgba(233,236,241,.16);
  --danger: #e53a2b;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 4px; --radius-lg: 8px;
  --shadow: 0 1px 0 rgba(0,0,0,.4); --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
