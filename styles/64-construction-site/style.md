# 64 · Construction Site

> **In one sentence:** Şantiyenin plaka, kalıp ve numara dilini ekrana taşıyan; her blokun 2px çerçeveyle, her metrajın birimle göründüğü saha arayüzü.

| | |
|---|---|
| **Feeling** | sağlam, ham, sıcak, disiplinli |
| **Best for** | şantiye/ilermit takibi, metraj & hakediş, saha raporu, proje blok panosu |
| **Avoid** | fintech, sağlık, lüks e-ticaret — kalın kural ve tozlu zemin burada "özensiz" okunur |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="construction-site"]` |
| **Composition** | `split` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Construction Site, arayüzü bir **şantiye panosu** gibi kurar: her bölüm numaralı bir blok, her blok 2px siyah çerçeveli bir plaka, her plaka bir aşama etiketi taşır. Metraj, süre ve ilerleme her zaman birimle yazılır — çıplak sayı sahadaki hiçbir soruyu yanıtlamaz.

Üç kurucu karar: (1) **yapısal kural** — 2px `--ink` bölüm kuralları, 1px `--line` ayırıcılar; hiyerarşi çizgi kalınlığıyla kurulur, gölgeyle değil; (2) **plaka tipografisi** — Anton büyük harf başlık, Jost gövde, Space Mono ölçü/etiket; (3) **malzeme** — beton tozu grain `.05`, grafik kâğıdı ızgarası yalnız hero görselinde.

Bedeli: ekran ağır ve sıcaktır. Ağırlığın "eski" değil "sağlam" görünmesini sağlayan şey **tutarlı 2px çerçeve + numara kutusu**; çerçeve kalınlığı bir yerde 3px olursa dil çöker.

### What is not
- **Bauhaus (35) değildir:** Bauhaus temel geometri ve kırmızı-mavi ile afiş kurar; burada palet beton/kiremit, tipografi Anton (condensed) ve metraj tabloları var.
- **Swiss Design (02) değildir:** Swiss ızgara ve Helvetica disiplinidir, radius 0 ve gölge yoktur; bu stilde radius 2/4px, 6px sert ofset gölge ve grain vardır.
- **Neo-Brutalism (13) değildir:** neo-brutalism pembe/sarı ile provokasyon arar, gölge 8px'tir; bu stil endüstriyel kiremit + beton, gölge 6px ve metraj disiplini.
- **Warehouse Flow (62) değildir:** 62 sarı accent ve Archivo Black ile operasyon hızına bakar; 64 kiremit accent ve Anton ile blok/metraj dengesine bakar (bkz. 61–65 bandı).

### Where it comes from
Şantiye tabelası, kalıp plakası, ilermit raporu ve teknik çizim geleneğinden: blok no, kat, aks, ölçü oku, aşama damgası. Bugün yeniden kullanılmasının nedeni: inşaat yazılımı çoğu zaman bankacılık arayüzü gibi görünüyor ve sahada "bu benim işim değil" hissi veriyor; kullanıcı kendi dilini (plaka, metraj, aşama) görmek istiyor. Klişeye dönüşmemesi için korunacak detay: **2px yapısal kural + numara kutusu** ve metrajın birimle yazılması.

### Recognition test in 3 seconds
1. Bölümler arasında **2px siyah yapısal kural**; ayırıcılar 1px ve soluk.
2. Her bölümün başında 32×32 kutu içinde numara (Anton, 18px).
3. Kartlar 2px `--ink` çerçeveli, kaldırılan kart 6px sert ofset gölgeli.
4. Başlıklar Anton, sıkı satır (0.92), büyük harf; gövde Jost 16px.
5. Her sayının yanında birim (`m²`, `ton`, `gün`) — birimsiz metraj yok.

## Visual signature
- **Yapısal kural:** bölüm ayırıcı 2px `var(--ink)`; tam genişlik, kenardan kenara.
- **Numara kutusu:** 32×32px, 2px `--ink` çerçeve, içinde Anton 18px numara; sol üstte, başlıkla aynı hizada.
- **Plaka çerçevesi:** kart/tablo/modal 2px `--ink`; radius 2–4px; gölge yok.
- **Sert ofset:** yalnız kaldırılan blok/modal `box-shadow: var(--shadow-hard)` = `6px 6px 0 rgba(25,22,18,.85)`.
- **Aşama chip'i:** zemin almaz, 1px `--ink` çerçeve, 11px Space Mono büyük harf `0.14em`; aktif aşamada sol 4px accent blok.
- **Grafik kâğıdı:** hero görselinin zemininde 24px aralıklı 1px ızgara (yalnız orada).
- **Beton tozu:** `--grain: .05` — tüm sayfa zemini; fotoğraf ve tablo hücresi üstünde kullanılmaz.
- **Typography:** Anton (display) + Jost (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#a03a26`; neutral scale `#e8e2d4` → `#191612`.
- **Radius:** `2px` / `4px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Blok/no disiplini: her bölüm 32×32 kutu içinde numara taşır (Anton)
2. Yapısal kurallar 2px var(--ink); ayırıcı çizgiler 1px var(--line)
3. Aşama etiketi dörtlü: planlandı · devam · kontrol · teslim (çerçeve chip + metin)
4. Her metraj ölçü birimiyle: m², m³, ton, gün — birim ayrı ve küçük
5. Kaldırılan blok 6px sert ofset; düz panel gölgesiz
6. Beton tozu grain .05 — süs değil, malzeme hissi; fotoğrafın üstünde kullanılmaz

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e8e2d4` | page background | as a card background |
| `--bg-2` | `#dcd4c2` | partition divider floor, table top | button background |
| `--surface` | `#f4efe4` | kart, input, modal | full-page background |
| `--surface-2` | `#eae3d4` | passive chip, hover background | primary button |
| `--ink` | `#191612` | title, body, icon | large background |
| `--ink-soft` | `#4f483d` | secondary text, description | — |
| `--ink-faint` | `#7b7059` | decorative label, separator text | interactive text |
| `--accent` | `#a03a26` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f1e6` | text above accent | non-accent background |
| `--line` | `rgba(25,22,18,.42)` | all borders | text colour |

- Measured contrast: `ink/bg` **13.96:1** · `ink-soft/bg` **6.99:1** · `ink-faint/bg` **3.78:1 (decorative)** · `accent-ink/accent` **5.97:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Anton) | 34px (mobile 34px) | 400 | 1.08 | -0.02em |
| H2 | same | 30px | 600 | 1.2 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Title 52px/400 — remains silent next to the texture. Tags mono, wide tracking.
- Measure: 66ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- Card spacing 14px; The material photo can extend right to the edge, the text cannot.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Shadow single level; With material feeling grain + edge. No glass/blur.
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 4px üstü radius, hap buton, yumuşak gölge.
- Cam/blur, gradient zemin, neon renk.
- Serif/el yazısı, italik, Anton'da sentetik kalın.
- Büyük harf gövde, 14px altı gövde metni.
- Birimsiz metraj, ölçüsüz sayı, yalnız renkle aşama.
- Grain'i fotoğraf veya tablo hücresi üstünde kullanmak.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 2px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 2px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 2px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 2px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 2px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 2px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 2px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.85:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 9/3 hero: dev Anton başlık + numara kutusu, dar saha notu kolonu | `shots/01-page.png` |
| Dashboard | yüksek | blok ilerleme kartları + metraj tablosu + aşama dağılımı | `shots/01-page.png` |
| Form | orta | saha raporu: blok, metraj, birim, foto, aşama | `shots/01-page.png` |
| Liste / tablo | çok yüksek | 44px satır, blok no, metraj mono, toplam satırı 2px üst çizgi | `shots/01-page.png` |
| Boş durum | düşük | "bu blokta kayıt yok" + ilk metrajı gir eylemi | `shots/01-page.png` |
| Onboarding | orta | 3 adım: proje aç → blok tanımla → metraj gir | `shots/01-page.png` |
| Pricing | orta | plan karşılaştırma; proje/blok limitleri tablo satırında | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek plaka, 2px çerçeve, tek eylem, hata saha notu | `shots/01-page.png` |
| Modal | orta | blok detayı: aşama, metraj, foto, onay | `shots/01-page.png` |
| Bildirim | orta | 48px toast + 8px accent blok, 4.5sn | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + neden + tekrar dene | `shots/01-page.png` |
| Profil / ayar | orta | proje listesi, blok no şeması, birim tercihi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 13.96:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.99:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.78:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.97:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.85:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 87.9 | ≥ 60 target | thin text |

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
| "Afiş gibi" dağılıyor | her blok ofsetli | ofset yalnız kaldırılan blokta |
| Kirli görünüyor | grain fotoğrafın üstünde | grain yalnız zemin katmanında |
| Çizgi dili çöküyor | 2px ve 3px karışmış | yapısal 2px, ayırıcı 1px — sabit |
| Metraj okunmuyor | birim yok, hizalama yok | birim kolonu + tabular mono |
| Aşama kayboluyor | yalnız renkli çip | çerçeve chip + büyük harf metin |
| Başlık taşıyor | mobilde 64px | clamp(34px, 7vw, 64px) |
| Kontrast düşük | accent 11px metin | accent metni ≥14px veya `--ink` kullan |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `bauhaus` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `ethereal` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.iso.org/standard/68078.html | ISO 19650 · BIM bilgi yönetimi — ISO 19650 — blok/kat/sistem numaralandırma ve künye dili |
| https://www.osha.gov/construction | OSHA · şantiye güvenliği — şantiye uyarı levhası, aşama ve güvenlik etiketi hiyerarşisi |
| https://www.iso.org/standard/65491.html | ISO 128 · teknik çizim kuralları — ISO 128 — ölçü oku, kesit ve tarama dolgu dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — sıcak zemin üzerinde metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | www.w3.org — 2px kural ve çerçeve kontrastı |

## AI brief

```text
Stil: Construction Site (styles/64-construction-site/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="construction-site"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Anton 400, tek kesim) yalnız H1/H2 ve blok numarasında (büyük harf);
  --font-body (Jost 400/600) gövde; --font-mono (Space Mono 400/700) metraj, birim ve aşama etiketleri.
  H1 64px/0.92; gövde 16px/1.62; etiket 11px mono +0.18em büyük harf.
Yüzey: plaka = 2px var(--ink) çerçeve, gölge yok; kaldırılan blok/modal = 2px ink + var(--shadow-hard) 6px ofset.
  radius --radius 2px, --radius-lg 4px; --grain .05 (beton tozu, yalnız zemin).
Yapı: bölümler 2px var(--ink) yapısal kural ile başlar; ayırıcılar 1px var(--line); her bölümde 32×32 numara kutusu (Anton 18px).
Aşama: planlandı / devam / kontrol / teslim — zemin almayan 1px ink çerçeve chip + büyük harf metin; aktif aşamada sol 4px var(--accent).
Metraj: her sayı birimle (m², m³, ton, gün), mono tabular, birim ayrı kolon; toplam satırı 2px üst çizgi.
Hareket: enter 0.46s cubic-bezier(.2,1.3,.3,1) 44px stagger 0.11 · scroll top 86% 0.34s 56px once ·
  pin açık scrub 0.55 +160% · hover 190ms scale 1.012; prefers-reduced-motion zorunlu.
Yasak: 4px üstü radius, yumuşak gölge, cam/blur, gradient, neon, italik, birimsiz metraj, grain'i fotoğraf üstünde kullanmak.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Construction Site (construction-site) · family: Industrial (56–65)
Token: --bg #e8e2d4 · --surface #f4efe4 · --ink #191612 · --accent #a03a26 · --line rgba(25,22,18,.42)
Radius: 2px / 4px · Typography: Anton / Jost / Space Mono
Required: Blok/no disiplini: her bölüm 32×32 kutu içinde numara taşır (Anton) · Yapısal kurallar 2px var(--ink); ayırıcı çizgiler 1px var(--line) · Aşama etiketi dörtlü: planlandı · devam · kontrol · teslim (çerçeve chip + metin)
Banned: 4px üstü radius, hap buton, yumuşak gölge. · Cam/blur, gradient zemin, neon renk. · Serif/el yazısı, italik, Anton'da sentetik kalın.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="construction-site"] {
  --bg: #e8e2d4; --bg-2: #dcd4c2;
  --surface: #f4efe4; --surface-2: #eae3d4;
  --ink: #191612; --ink-soft: #4f483d; --ink-faint: #7b7059;
  --accent: #a03a26; --accent-ink: #f7f1e6;
  --line: rgba(25,22,18,.42);
  --danger: #c9160c;
  --danger-ink: #ffffff;
  --ok: #00752d;
  --ok-ink: #ffffff;
  --warn: #a84800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 0 rgba(25,22,18,.12); --shadow-hard: none;
  --font-display: "Anton", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
