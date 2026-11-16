# 151 · Dark Dashboard

> **In one sentence:** Kontrol odası: grafit zemin, 1px çizgi ızgara, cyan yalnız veride ve 0.48s hızlı giriş — süs değil, ölçüm okunur.

| | |
|---|---|
| **Feeling** | kesin · sakin · yoğun · güvenilir |
| **Best for** | SaaS ürün paneli, altyapı/gözlemleme konsolu, finans operasyon ekranı, iç araç (admin) |
| **Avoid** | Duygusal marka sayfası, kampanya/lansman vitrini, uzun-form okuma |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Stage & Prestige (146–151) · **Token** | `kit/tokens.css` → `[data-style="dark-dashboard"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Dark Dashboard, bir kontrol odasının okunabilirlik hiyerarşisini kurar: grafit zemin (#0b0d10), 1px çizgi ızgara, 8px/14px radius ve yalnız veride görünen cyan (#58c8ff). Ekranın işi etkilemek değil, ölçmek: satır yüksekliği 44px, sayılar tabular, kolon başlıkları 10px mono.

Tipografi iki aileye indirgenir: Michroma yalnız başlık ve büyük KPI rakamlarında (geniş, teknolojik ama sınırlı dozda), Inter gövde ve etiketlerde, JetBrains Mono sayı ve kimliklerde. Michroma ekranın tamamına yayılırsa okuma hızı düşer, bu yüzden H2'den aşağıda kullanılmaz.

Renk disiplini kural: cyan eylem/veri bildirir, kırmızı-turuncu yalnız uyarı, yeşil yalnız sağlıklı durum. Yüzeylerde gölge yok; ayrım 1px `--line` ve `--surface` tonu. Yoğunluk bilinçli olarak yüksek (`dense`): amaç ekran başına daha fazla bilgi, daha az süs.

En hızlı aile üyesi: giriş 0.48s `blur-in`, 16px, 30ms kademe; scroll `reveal` 0.44s. Yoğun ekranda uzun animasyon okumayı geciktirir. Pin yok; hover 140ms ve 1.01 — neredeyse anlık, çünkü tabloda gezinme hızı önemlidir.

### What is not
- Product Launch (148) değildir: orada tek sahne ve spotlight; burada ızgara ve tablo.
- Terminal UI (44) değildir: monospace gövde ve tarama çizgisi yok; gövde Inter.
- Telemetry Grid (47) değildir: o stil grafik-ağırlıklıdır; burada tablo ve KPI dengesi var.
- Glassmorphism (08) değildir: blur yalnız sticky başlıkta ve tek katman.
- Noir Estate (146) değildir: sıcak altın + serif yerine soğuk cyan + geniş sans.

### Where it comes from
Kök, veri merkezi ve gözlemleme konsollarıdır: 1px ızgara, sabit satır yüksekliği, sağa hizalı tabular sayılar, durum renkleri. Bugün işe yaramasının nedeni, koyu zeminin parlaklık farkını azaltıp uzun vardiyalarda göz yorgunluğunu düşürmesi; cyan ise mavi-yeşil aralığında olduğu için kırmızı/yeşil durum kodlarıyla karışmaz.

### Recognition test in 3 seconds
1. Zemin grafit (#0b0d10), yüzey #12161a; cyan yalnız veri/eylemde.
2. Satır yüksekliği 44px, kolon başlığı 10px mono `+0.16em` büyük harf.
3. KPI rakamı 34px Michroma, `-0.01em`; birim 10px mono altında.
4. Radius 8px (kontrol) / 14px (kart); gölge yok, 1px çizgi.
5. Sol ray (sidebar) 240px, aktif öğede 2px cyan şerit.

## Visual signature
- Sidebar: 240px, `--bg-2`, 1px sağ çizgi; aktif öğede 2px cyan sol şerit + `--surface-2` zemin.
- KPI kartı: 34px Michroma rakam + 10px mono birim + 1px `--line`; trend oku yalnız ok ikonu + renk.
- Tablo: 44px satır, zebra yok, hover `--surface-2`; sayılar sağa hizalı tabular.
- Grafik: 2px cyan çizgi, alan %10 cyan dolgu, ızgara 1px `--line` ve yalnız yatay.
- Durum noktası: 6px daire + metin etiketi (sağlıklı/uyarı/kritik) — renk tek başına anlam taşımaz.
- Sticky başlık: 56px, `--bg` %88 + blur 8px; tek cam katman.
- **Typography:** Michroma (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#58c8ff`; neutral scale `#0b0d10` → `#e9eef4`.
- **Radius:** `8px` / `14px`; Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Mandatory rules

1. Sidebar 240px, aktif öğede 2px cyan şerit.
2. Tablo satırı 44px, sayılar sağa hizalı tabular, zebra yok.
3. Cyan yalnız aktif/eylem/seri-1; durum renkleri ayrı ve metinle.
4. Kart radius 14px, gölge yok, 1px çerçeve.
5. Michroma yalnız H1/H2 ve KPI rakamı; gövde Inter 14px.
6. Sticky başlık tek cam katman: %88 zemin + blur 8px.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b0d10` | page background | as a card background |
| `--bg-2` | `#07090b` | partition divider floor, table top | button background |
| `--surface` | `#12161a` | kart, input, modal | full-page background |
| `--surface-2` | `#1a2026` | passive chip, hover background | primary button |
| `--ink` | `#e9eef4` | title, body, icon | large background |
| `--ink-soft` | `#a9b6c2` | secondary text, description | — |
| `--ink-faint` | `#75818d` | decorative label, separator text | interactive text |
| `--accent` | `#58c8ff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#04141f` | text above accent | non-accent background |
| `--line` | `rgba(233,238,244,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.68:1** · `ink-soft/bg` **9.41:1** · `ink-faint/bg` **4.89:1 (decorative)** · `accent-ink/accent` **9.88:1**.
- Ground paper tone; accent only link and program tag. The image's own color remains dominant.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Michroma) | 24px (mobile 24px) | 400 | 1.04 | -0.02em |
| H2 | same | 26px | 600 | 1.16 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.68 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- The title is large-scale and tightly spaced; body 17px, size 68ch. Label mono and uppercase.
- Measure: 68ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Wide margin (56px), asymmetric 7/5 column. Section titles remain in the left column.
- Section vertical space 84px desktop, 48px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- There is no shadow; distinction by hairline and ground tone. Images are in full-edge or 4:3 frame.
- Radius: `8px` (buton, input, chip), `14px` (kart, modal). Corner 0–4px; The language of culture is established with sharp edges and wide gaps.

## Bans

- Gövde metninde monospace veya Michroma
- Cyan üstüne beyaz metin, neon glow
- Zebra tablo + renkli satır arka planı
- Kartlarda gölge, 14px üstü radius
- Skeleton shimmer / nabız animasyonu
- Durumu yalnız renkle bildirmek
- Neon accent.
- Stack of round cards.
- Otomatik carousel.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.3:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; minimal |
| photo | Exhibition/venue photography, natural light, wide angle |
| illustration | Archive/banner reproduction only |
| Texture | Paper grain 2% (--grain: .02) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | split hero: solda başlık + tek CTA, sağda panel önizlemesi (mini tablo + grafik) | `shots/01-page.png` |
| Dashboard | yüksek | 4 KPI + 2 grafik + 8 satırlık tablo; sol ray 240px | `shots/01-page.png` |
| Form / ayar | orta | iki kolon etiket-alan, 40px alan, cyan odak; hata 1px `--danger` + 11px açıklama | `shots/01-page.png` |
| Liste / tablo | yüksek | 44px satır, sağa hizalı sayı, durum noktası + etiket | `shots/01-page.png` |
| Boş durum | düşük | "bu filtrede kayıt yok" + filtre temizle | `shots/01-page.png` |
| Onboarding | orta | 3 adım: veri kaynağı → ekip → uyarı kanalı | `shots/01-page.png` |
| Pricing | orta | üç plan; öne çıkanda 1px cyan çerçeve | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek kart, SSO seçenekleri, 40px alan | `shots/01-page.png` |
| Modal | orta | 14px radius, `--shadow`, 1px `--line`; kapatma 40×40px | `shots/01-page.png` |
| Bildirim | orta | 40px toast, sol 3px cyan şerit, 3.2s | `shots/01-page.png` |
| Mobil (390px) | orta | sidebar alt tabbar'a döner, tablo 2 kolona iner, dokunma hedefi 44px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.68:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.41:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.89:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.88:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.3:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.1 | ≥ 60 target | thin text |

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
| "Terminal" gibi | gövde monospace | gövde Inter 14px, mono yalnız sayı/kimlik |
| Cyan her yerde | accent ikon + başlık + çerçeve | cyan yalnız aktif/eylem/seri-1 |
| Göz yoruyor | saf siyah zemin + saf beyaz metin | grafit #0b0d10 + #e9eef4 |
| Tablo karışıyor | zebra + 4 renk | zebra yok, hover yeter; durum noktası + metin |
| Michroma taşıyor | H2 32px Michroma uzun cümle | Michroma yalnız başlık/KPI; gövde Inter |
| Koyu mod farkı yok | iki blok aynı | koyu blok daha derin (#06080a) + cyan parlak |
| Mobilde taşıyor | 8 kolon tablo | 4 kolon + yatay kaydırma ipucu, taşma yok |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `product-launch` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `agency-portfolio` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `noir-estate` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Michroma | Google Fonts · Michroma — geniş display kullanımı ve sınırları |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 · Non-text Contrast — 1px ızgara ve durum noktası ölçütü |
| https://git.apcacontrast.com/documentation/APCAeasyIntro | APCA · Dark mode readability — koyu zeminde gövde metni okunabilirliği |
| https://carbondesignsystem.com/components/data-table/usage/ | Carbon Design System · Data tables — satır yüksekliği, hizalama ve durum gösterimi |

## AI brief

```text
Stil: Dark Dashboard (styles/151-dark-dashboard/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="dark-dashboard"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Michroma 400) yalnız H1/H2 ve 34px KPI rakamı, -.01em; --font-body (Inter 400/600) gövde 14px/1.55;
  --font-mono (JetBrains Mono 400) sayı 13px tabular, etiket 10px +.16em büyük harf.
Yüzey: grafit zemin + 1px --line ızgara. Kart = --surface, radius 14px, gölge YOK; blur yalnız sticky başlık ve modalda.
  Sidebar 240px, --bg-2, aktif öğede 2px cyan şerit.
Renk: tek veri vurgusu cyan (--accent), üstünde --accent-ink; durum renkleri yalnız ok/warn/danger.
Hareket: enter 0.48s cubic-bezier(.25,.6,.2,1) blur-in 16px st.03 · scroll top 88% 0.44s reveal 12px once ·
  pin yok · hover 140ms scale 1.01; prefers-reduced-motion zorunlu.
Yasak: Gövde metninde monospace veya Michroma; Cyan üstüne beyaz metin, neon glow; Zebra tablo + renkli satır arka planı; Kartlarda gölge, 14px üstü radius; Skeleton shimmer / nabız animasyonu; Durumu yalnız renkle bildirmek.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Dark Dashboard (dark-dashboard) · family: Stage & Prestige (146–151)
Token: --bg #0b0d10 · --surface #12161a · --ink #e9eef4 · --accent #58c8ff · --line rgba(233,238,244,.12)
Radius: 8px / 14px · Typography: Michroma / Inter / JetBrains Mono
Required: Sidebar 240px, aktif öğede 2px cyan şerit. · Tablo satırı 44px, sayılar sağa hizalı tabular, zebra yok. · Cyan yalnız aktif/eylem/seri-1; durum renkleri ayrı ve metinle.
Banned: Gövde metninde monospace veya Michroma · Cyan üstüne beyaz metin, neon glow · Zebra tablo + renkli satır arka planı
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="dark-dashboard"] {
  --bg: #0b0d10; --bg-2: #07090b;
  --surface: #12161a; --surface-2: #1a2026;
  --ink: #e9eef4; --ink-soft: #a9b6c2; --ink-faint: #75818d;
  --accent: #58c8ff; --accent-ink: #04141f;
  --line: rgba(233,238,244,.12);
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
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 20px 48px -30px rgba(0,0,0,.9); --shadow-hard: none;
  --font-display: "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .16em; --blur: 0px; --grain: 0;
}
```
