# 45 · Terminal UI

> **In one sentence:** Her şeyin tek mono ızgarada hizalandığı, durumu rengin değil metnin söylediği klavye öncelikli arayüz.

| | |
|---|---|
| **Feeling** | teknik, kesin, hızlı, dürüst |
| **Best for** | geliştirici aracı, CI/deploy paneli, log & gözlem, finans/veri terminali |
| **Avoid** | tüketici e-ticareti, lüks marka, çocuk/wellness — burada "soğuk" değil "okunamaz" olur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Technical (45–45) · **Token** | `kit/tokens.css` → `[data-style="terminal-ui"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Terminal UI, bir arayüzü **karakter ızgarası** olarak ele alır: tek mono aile, sabit satır yüksekliği, hizalı sütunlar, 1px çerçeve ve hiç gölge. Süslemenin yerini **bilgi yoğunluğu** alır; kullanıcı fareyle dolaşmak yerine klavyeyle hedefe gider.

Üç kurucu karar: (1) **tek aile** — display, gövde ve mono aynı font, hiyerarşi punto ve ağırlıkla kurulur; (2) **düz yüzey** — katman ayrımı yalnızca 1px çerçeve ve ters video (accent zemin); (3) **metinle durum** — `[ok]`, `> `, `! `, `..` gibi işaretler rengi yedekler, renk körlüğünde de okunur.

Bedeli: görsel sıcaklık yoktur. Bu stilin "ucuz" görünmemesini sağlayan tek şey **hizalama disiplini** — bir sütunun 1 karakter kayması bütün etkiyi bozar.

### What is not
- **Cybercore (23) değildir:** cybercore HUD/glitch/neon efektleriyle atmosfer kurar; Terminal UI efekt yasağı getirir, değerini yoğunluktan alır.
- **Cyberpunk (22) değildir:** cyberpunk çok renkli neon palet ve kirli doku kullanır; burada tek accent ve temiz 1px çizgi var.
- **Scandinavian Dark (40) değildir:** o stil oransal (proportional) tipografiyle sessiz lüks kurar; Terminal UI mono ızgaradadır.
- **Utility (44) değildir:** Utility beyaz zeminli ürün arayüzüdür; Terminal UI koyu zemin + karakter ızgarasıdır. Ortak nokta yalnız disiplin.

### Where it comes from
VT100/80×24 metin terminalleri, `top`/`htop` panel dili ve 2020'lerin TUI rönesansı (lazygit, k9s, btop). Bugün yeniden kullanılmasının nedeni: ajan ve CLI araçları için **klavye öncelikli, düşük gecikmeli** arayüz ihtiyacı. Klişeye dönüşmemesi için korunacak detay: **karakter ızgarasının bozulmaması** (sütun hizası) ve efekt yasağı.

### Recognition test in 3 seconds
1. Ekranda tek font ailesi var; harflerin genişliği her yerde aynı.
2. Hiçbir yüzeyde gölge veya gradient yok; ayrım 1px çerçeveyle.
3. Durumlar metinle işaretli: `> ` aktif, `[ok]` başarılı, `! ` hata.
4. Satır yüksekliği 32px; tablo sütunları dikey hizalı.
5. Klavye ipuçları görünür (`↑↓ gez`, `enter aç`, `esc kapat`).

## Visual signature
- **Tek aile:** JetBrains Mono (`--font-display` = `--font-body` = `--font-mono`).
- **Karakter ızgarası:** gövde 14px/22, tablo 13px/20, satır yüksekliği 32px; `ch` birimiyle ölçü.
- **1px çerçeve:** panel, tablo, input aynı `--line` çizgisini kullanır; köşe 0–2px.
- **Ters video:** birincil buton ve seçili satır accent zemin + accent-ink metin.
- **İşaret dili:** `> ` aktif öğe, `[ok]` / `[..]` / `! ` durum, `┌─ ├─ └─` bölüm çerçevesi gerektiğinde ASCII.
- **Efekt yok:** gölge, blur, gradient, grain (`--grain: 0`), tarama çizgisi, flicker yasak.
- **İmleç:** tek yanıp sönen öğe; reduced-motion'da durur.
- **Typography:** JetBrains Mono (display) + JetBrains Mono (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#58e08a`; neutral scale `#0a0d0a` → `#d7e6d2`.
- **Radius:** `0px` / `2px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Tek aile: JetBrains Mono; display = body = mono
2. Ölçü her yerde sayısal ve hizalı (karakter ızgarası)
3. Katman ayrımı 1px çerçeve; gölge/blur yok
4. Durum metinle bildirilir (`[ok]`, `> `, `! `), yalnız renkle değil
5. Klavye ile tam gezinti: Tab sırası görünür, kısayol ipuçları gösterilir
6. Yoğunluk: satır yüksekliği 32px, tablo hücresi 4/8px padding

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a0d0a` | page background | as a card background |
| `--bg-2` | `#0d110d` | partition divider floor, table top | button background |
| `--surface` | `#0f140f` | kart, input, modal | full-page background |
| `--surface-2` | `#131a13` | passive chip, hover background | primary button |
| `--ink` | `#d7e6d2` | title, body, icon | large background |
| `--ink-soft` | `#9bb394` | secondary text, description | — |
| `--ink-faint` | `#6d8268` | decorative label, separator text | interactive text |
| `--accent` | `#58e08a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04120a` | text above accent | non-accent background |
| `--line` | `rgba(215,230,210,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.01:1** · `ink-soft/bg` **8.62:1** · `ink-faint/bg` **4.69:1 (decorative)** · `accent-ink/accent` **11.35:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (JetBrains Mono) | 40px (mobile 26px) | 600 | 1.12 | -0.02em |
| H2 | same | 24px | 600 | 1.22 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (JetBrains Mono) | 14px | 400 | 1.55 | 0 |
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
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gölge, blur, gradient, grain, CRT tarama çizgisi, flicker.
- 2px üstü radius, yuvarlak kart, yumuşak gölge.
- İkinci font ailesi (serif/geometrik display).
- Süsleme amaçlı ikon/illüstrasyon, emoji ile durum bildirimi.
- Anlaşılmaz jargon: kısaltma ilk geçtiği yerde açıklanır.
- Sürekli animasyon (imleç dışında) ve parallax.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 0px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 0px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 0px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 0px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 0px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 0px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 0px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 11.58:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-grid` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | tek ekran: başlık + 3 özellik satırı + kısayol ipucu | `shots/01-page.png` |
| Dashboard | çok yüksek | panel ızgarası, KPI tek satır, sparkline | `shots/01-page.png` |
| Form | orta | alanlar tek sütun, `! ` ile hata | `shots/01-page.png` |
| Liste / tablo | çok yüksek | 32px satır, tabular sayı, yatay kaydırma | `shots/01-page.png` |
| Boş durum | düşük | `! ` veya `·` ile tek cümle + komut önerisi | `shots/01-page.png` |
| Onboarding | orta | 3 adım, komut satırı hissi, `enter` ile ilerleme | `shots/01-page.png` |
| Pricing | orta | karşılaştırma tablosu; öne çıkan sütun accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek panel, tek eylem, `[ok]` doğrulama | `shots/01-page.png` |
| Modal | orta | komut paleti dili, accent çerçeve, `esc` | `shots/01-page.png` |
| Bildirim | düşük | durum satırı (toast değil), 3sn | `shots/01-page.png` |
| Hata | düşük | `! ` + neden + sonraki komut | `shots/01-page.png` |
| Ayar | yüksek | anahtar/değer listesi, 32px satır | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.01:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.62:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.69:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.35:1 | ≥ 4.5 | button text |
| focus ring/ground | 11.58:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 88.6 | ≥ 60 target | thin text |

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
| "Dağınık terminal" hissi | karışık genişlik/punto | tek aile + 32px satır + tabular |
| Okunmuyor | koyu zeminde ince 300 ağırlık | 400 taban, vurgu accent/temyiz |
| Göz yoruyor | sürekli yanıp sönen öğeler | yalnız imleç yanıp söner |
| Sütunlar kayıyor | `ch` yerine px genişlik | `ch` birimi ve sağa hizalı sayı |
| "Oyun gibi" görünüyor | neon çok renk | tek accent + warn/danger sınırı |
| Mobilde kullanılamıyor | 32px satır + 36px buton | dikey padding ile 44px hedef |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://github.com/charmbracelet/bubbletea | Charm · Bubble Tea — TUI bileşen modeli ve durum mantığı |
| https://github.com/jesseduffield/lazygit | Lazygit — panel/odak dili, tuş ipuçları |
| https://www.bloomberg.com/professional/products/bloomberg-terminal/ | Bloomberg Terminal — yoğun veri düzeni, klavye önceliği |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus Appearance — odak görünürlüğü ölçütü |

## AI brief

```text
Stil: Terminal UI (styles/45-terminal-ui/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="terminal-ui"] değişkenleri; hard-coded renk/radius/gölge yasak.
Tipografi: tek aile JetBrains Mono (display = body = mono); hiyerarşi punto + ağırlık (400/600).
  Gövde 14px/22, tablo 13px/20, satır yüksekliği 32px, sayılar tabular-nums.
Yüzey: gölge/blur/gradient yok; katman ayrımı 1px var(--line). Radius 0–2px.
Renk: tek accent (#58e08a); durum metinle: "> " aktif, "[ok]" başarılı, "[..]" yükleniyor, "! " hata.
Etkileşim: klavye öncelikli; Tab sırası görünür, odak halkası 1px accent + 2px offset,
  alt durum satırında kısayol ipucu. Dokunma hedefi mobilde >= 44px.
Hareket: steps(3,end) 180ms; yalnız bekleyen imleç yanıp söner; prefers-reduced-motion'da durur.
Yasak: gölge, blur, gradient, CRT tarama, emoji durum, ikinci font, 2px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Terminal UI (terminal-ui) · family: Technical (45–45)
Token: --bg #0a0d0a · --surface #0f140f · --ink #d7e6d2 · --accent #58e08a · --line rgba(215,230,210,.16)
Radius: 0px / 2px · Typography: JetBrains Mono / JetBrains Mono / JetBrains Mono
Required: Tek aile: JetBrains Mono; display = body = mono · Ölçü her yerde sayısal ve hizalı (karakter ızgarası) · Katman ayrımı 1px çerçeve; gölge/blur yok
Banned: Gölge, blur, gradient, grain, CRT tarama çizgisi, flicker. · 2px üstü radius, yuvarlak kart, yumuşak gölge. · İkinci font ailesi (serif/geometrik display).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="terminal-ui"] {
  --bg: #0a0d0a; --bg-2: #0d110d;
  --surface: #0f140f; --surface-2: #131a13;
  --ink: #d7e6d2; --ink-soft: #9bb394; --ink-faint: #6d8268;
  --accent: #58e08a; --accent-ink: #04120a;
  --line: rgba(215,230,210,.16);
  --danger: #e3382a;
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
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
