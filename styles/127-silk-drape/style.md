# 127 · Silk Drape

> **In one sentence:** Işığı yumuşatan ipek kıvrımları gibi akan, asimetrik köşelerle kesilmiş sıcak bir kumaş atölyesi arayüzü.

| | |
|---|---|
| **Feeling** | yumuşak, sıcak, akışkan, zarif |
| **Best for** | kumaş/tekstil kataloğu, moda evi vitrini, ipek & halı butiği, gelinlik konfigüratörü |
| **Avoid** | yüksek yoğunluklu operasyon paneli, endüstriyel izleme, oyun arayüzü — yumuşaklık orada "yavaş" okunur |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Material & Luxury (126–135) · **Token** | `kit/tokens.css` → `[data-style="silk-drape"]` |
| **Composition** | `fullbleed` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Silk Drape, arayüzü **kumaş topu** gibi kurar: yumuşak sıcak zemin, geniş asimetrik kart köşesi (44 44 44 12), hap kontroller ve tek bir ipek kıvrımı. Lüks, parlama ile değil **kıvrımın yumuşaklığı ve boşluğun cömertliği** ile anlatılır.

Üç kurucu karar: (1) **kıvrım köşesi** — kart 44px, alt-sol 12px; buton/chip/toast 999px; yumuşak formun dışına çıkmak yasak; (2) **sıcak mürekkep** — dut ipeği moru `#6b2f4a` tek accent; altın yok; (3) **uzun satır** — gövde 15px/1.7, başlık Cormorant Garamond 300 ile 60px'e kadar; punto hiyerarşisi ağırlıkla değil.

Bedeli: yumuşak köşeler ve geniş boşluk bilgi yoğunluğunu düşürür; ekran başına 2 kart satırı ve 1 tablo sınırı vardır. Bölüm boşluğu 80px'ten aşağı inerse stil "şablon"a döner.

### What is not
- **Luxury Typography (04) değildir:** krem zemin + altın accent ve ince serif butik dil; Silk Drape sıcak ipek zemin + mor accent ve asimetrik 44px kıvrım köşesi kullanır.
- **Ethereal (29) değildir:** pastel lavanta, cam yüzey ve çok düşük kontrast; burada opak yüzey, güçlü mor accent ve 7.16:1 kontrast var.
- **Desert Sand (82) değildir:** kum zemin + 24/44 kumul radiusu + mor accent; 127 asimetrik kıvrım köşesi, hap kontroller ve Cormorant 300 ile ayrışır (82'de gölge tek yön kum tepesi, 127'de kumaş düşüşü).
- **Grand Tourer (41) değildir:** krem deri + krom hairline + motor sporları dil; burada krom yok, kıvrım ve dikiş var.

### Where it comes from
İpek dokuma atölyesi ve moda evi kumaş kartelasından: iplik türü, gramaj (g/m²), en (cm), boya adı, kıvrım fotoğrafı. Bugün yeniden kullanılmasının nedeni: tekstil e-ticareti ürünü ızgara fotoğrafıyla gösteriyor ama **kumaşın düşüşünü** ve gramajını anlatamıyor; lüks algısı kıvrımdadır. Klişeye dönüşmemesi için korunacak detay: **asimetrik kıvrım köşesi** ve gloss yasağı.

### Recognition test in 3 seconds
1. Zemin sıcak ipek (kırık beyaz-bej); beyaz panel yok.
2. Kartların bir köşesi farklı: 44 44 44 12; butonlar hap.
3. Accent dut ipeği moru; altın/parlak metal yok.
4. Başlıklar ince serif (Cormorant 300), 60px'e kadar; gövde Poppins 15px, satır 1.7.
5. Her kartta iplik türü chip'i + gramaj (g/m²) + en (cm).

## Visual signature
- **Kıvrım köşesi:** kart `border-radius: 44px 44px 44px 12px`; buton/chip/toast 999px; input 20px.
- **İpek accent:** `#6b2f4a` yalnız eylem/seçim/uyarı; accent üstü metin `#f9f1f4`.
- **Kumaş düşüşü:** gölge yalnız alta doğru geniş ve düşük opaklıkta (`0 10px 30px -18px`); gloss yok.
- **İnce serif:** Cormorant Garamond 300, H1 60px/1.02, `0.02em`; ağırlık yok, hiyerarşi punto.
- **Kıvrım çizgisi:** hero görselinde 3 eğri 1px çizgi (`--ink-faint` %30); başka yerde tekrar etmez.
- **İpek grain:** `--grain: .012` — neredeyse görünmez doku; fotoğrafın üstünde kullanılmaz.
- **Gramaj etiketi:** sağ alt köşede mono 12px `180 g/m²`, birim ayrı ve `--ink-faint`.
- **Typography:** Cormorant Garamond (display) + Poppins (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#6b2f4a`; neutral scale `#f6efe7` → `#241a20`.
- **Radius:** `20px` / `44px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her kumaş kaydı: iplik türü + gramaj (g/m²) + en (cm) + renk/boya adı
2. Kart köşesi asimetrik (44 44 44 12) — kumaş kıvrımı imzası
3. Buton/chip/toast hap (999px); form alanı 20px; kart 44px
4. Gölge yalnız alta doğru, geniş ve düşük opaklıkta; gloss/parlama yok
5. Başlık Cormorant Garamond 300 (60px'e kadar), gövde Poppins 15px/1.7
6. İpek grain .012 yalnız zemin katmanında; fotoğrafın üstünde kullanılmaz

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6efe7` | page background | as a card background |
| `--bg-2` | `#ede2d6` | partition divider floor, table top | button background |
| `--surface` | `#fdf9f3` | kart, input, modal | full-page background |
| `--surface-2` | `#f3eade` | passive chip, hover background | primary button |
| `--ink` | `#241a20` | title, body, icon | large background |
| `--ink-soft` | `#5b4b52` | secondary text, description | — |
| `--ink-faint` | `#83737a` | decorative label, separator text | interactive text |
| `--accent` | `#6b2f4a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f9f1f4` | text above accent | non-accent background |
| `--line` | `rgba(36,26,32,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.81:1** · `ink-soft/bg` **7.16:1** · `ink-faint/bg` **3.92:1 (decorative)** · `accent-ink/accent` **8.88:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cormorant Garamond) | 34px (mobile 34px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `20px` (buton, input, chip), `44px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Gloss/parlama, cam/blur, metalik gradient.
- Keskin köşe (12px altı) kart/buton; hap olmayan buton.
- İkinci doygun accent (altın, turkuaz); accent'i dekorasyon olarak kullanmak.
- Büyük harf gövde, 13px altı gövde metni, italik başlık.
- Sürekli dalgalanan kumaş, bounce, yatay parallax.
- Beyaz zemin.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 20px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 20px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 20px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 20px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 20px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 20px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 20px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.4:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 4/8 hero: solda ince serif başlık + tek hap CTA, sağda kumaş kıvrımı | `shots/01-page.png` |
| Dashboard | düşük | 3 KPI (kumaş, gramaj ort., renk) + kartela | `shots/01-page.png` |
| Form | düşük | yeni kumaş: iplik, gramaj+g/m², en+cm, boya | `shots/01-page.png` |
| Liste / tablo | orta | 44px satır, iplik chip'i, sağda mono gramaj/en | `shots/01-page.png` |
| Boş durum | düşük | "kartelada kumaş yok" + ilk kumaşı ekle | `shots/01-page.png` |
| Onboarding | düşük | 3 adım: koleksiyon → kumaş → renk paleti | `shots/01-page.png` |
| Pricing | orta | iki plan, kumaş/renk limitleri hap kartlarda | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kart (44px köşe), 48px alanlar | `shots/01-page.png` |
| Modal | orta | kumaş detayı: kıvrım fotoğrafı, gramaj, bakım | `shots/01-page.png` |
| Bildirim | düşük | hap toast, alt ortada, 4.2sn | `shots/01-page.png` |
| Hata | düşük | bordo çerçeve + neden + sonraki adım | `shots/01-page.png` |
| Profil / ayar | orta | koleksiyon listesi, birim (cm/inç), boya paleti | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.81:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.16:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.92:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.88:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.4:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.8 | ≥ 60 target | thin text |

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
| "Şablon" hissi | her köşe aynı yuvarlak | asimetrik 44 44 44 12 |
| Lüks kayboluyor | gloss/parlama eklendi | mat yüzey, yumuşak gölge |
| Okunmuyor | 13px gövde | 15px Poppins, 1.7 satır |
| Kumaş "plastik" görünüyor | sert gölge | geniş, düşük opaklıkta gölge |
| Kartela dağılıyor | 28px gutter daraltılmış | 28px korunur, mobilde 16px |
| Koyu modda kıvrım kayboluyor | çizgi opaklığı düşük | koyu blokta %16 + grain .02 |
| Mobilde taşıyor | 2×3 kartela sabit | tek kolon + kart |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ethereal` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `safety-signage` | Two different ornamental languages compete on the same screen |
| Mixing | `pixel-art` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.vam.ac.uk/collections/textiles | V&A · tekstil koleksiyonu — kumaş türleri, gramaj ve doku terminolojisi |
| https://www.metmuseum.org/toah/hd/silk/hd_silk.htm | The Met · ipek (Heilbrunn Timeline) — ipek üretimi ve tarihsel kullanım bağlamı |
| https://ich.unesco.org/en/home | UNESCO · somut olmayan kültürel miras — dokuma/boya zanaatı kayıt dili |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — sıcak ipek zemininde metin kontrastı |

## AI brief

```text
Stil: Silk Drape (styles/127-silk-drape/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="silk-drape"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300) H1/H2 (60px/1.02); --font-body (Poppins 400/600) gövde 15px/1.7;
  --font-mono (IBM Plex Mono) etiket 10px +0.24em ve gramaj/en değerleri (tabular).
Yüzey: sıcak ipek zemini + çok ince grain (--grain .012). radius --radius 20px, --radius-lg 44px,
  kartta ASİMETRİK: 44px 44px 44px 12px; buton/chip/toast 999px hap. Gölge yalnız alta, geniş, düşük opaklık.
Renk: tek accent dut ipeği moru (--accent), accent üstü --accent-ink; altın/parlak metal yasak.
Kayıt: iplik türü chip'i + gramaj g/m² + en cm + boya adı.
Hareket: enter 0.76s cubic-bezier(.46,.03,.24,1) 27px st.078 · scroll top 65% 0.92s 29px once ·
  pin açık scrub 0.78 +145% · hover 245ms scale 1.048; prefers-reduced-motion zorunlu.
Yasak: gloss/parlama, cam/blur, metalik gradient, keskin köşe, ikinci accent, büyük harf gövde, dalgalanan kumaş animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Silk Drape (silk-drape) · family: Material & Luxury (126–135)
Token: --bg #f6efe7 · --surface #fdf9f3 · --ink #241a20 · --accent #6b2f4a · --line rgba(36,26,32,.14)
Radius: 20px / 44px · Typography: Cormorant Garamond / Poppins / IBM Plex Mono
Required: Her kumaş kaydı: iplik türü + gramaj (g/m²) + en (cm) + renk/boya adı · Kart köşesi asimetrik (44 44 44 12) — kumaş kıvrımı imzası · Buton/chip/toast hap (999px); form alanı 20px; kart 44px
Banned: Gloss/parlama, cam/blur, metalik gradient. · Keskin köşe (12px altı) kart/buton; hap olmayan buton. · İkinci doygun accent (altın, turkuaz); accent'i dekorasyon olarak kullanmak.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="silk-drape"] {
  --bg: #f6efe7; --bg-2: #ede2d6;
  --surface: #fdf9f3; --surface-2: #f3eade;
  --ink: #241a20; --ink-soft: #5b4b52; --ink-faint: #83737a;
  --accent: #6b2f4a; --accent-ink: #f9f1f4;
  --line: rgba(36,26,32,.14);
  --danger: #d4261a;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b25100;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 20px; --radius-lg: 44px;
  --shadow: 0 10px 30px -18px rgba(60,34,44,.35); --shadow-hard: none;
  --font-display: "Cormorant Garamond", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
