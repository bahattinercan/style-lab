# 16 · Memphis

> **In one sentence:** 80'ler Memphis grubunun neşesi: kalın siyah kontur, düz doygun renk, zikzak/nokta/daire geometrisi ve ofset gölge.

| | |
|---|---|
| **Feeling** | neşeli, oyuncu, geometrik, "poster" |
| **Best for** | etkinlik/festival, çocuk/eğitim, oyun, topluluk, indie marka |
| **Avoid** | finans, sağlık, kurumsal B2B, uzun okuma |
| **Difficulty** | orta (dağınıklığa kayma riski) · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="memphis"]` |
| **Composition** | `index` · `split` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
1981 Memphis Group estetiğinin arayüz hali: **3px siyah kontur**, **düz doygun renkler** (kırmızı, sarı, turkuaz), **geometrik dekor** (daire, zikzak, nokta), **3px ofset gölge** ve yuvarlak hatlı tipografi (Poppins). Süs boldur ama **konturlu ve hizalı** olduğu için dağılmaz.

Kazandığı şey: neşe ve hatırlanma. Feda ettiği şey: ciddiyet; ayrıca süs kontrol edilmezse okunurluk düşer.

### What is not
- **Neo-brutalism değildir.** Orada süs yok, sadece sert dil; Memphis **dekoratif geometri** ekler.
- **Anti-design değildir.** Memphis ızgaraya oturur; anti-design ızgarayı bozar.
- **Dopamine UI değildir.** Dopamine ödül/parlaklık; Memphis grafik dil (kontur + geometri).
- **"Renkli çocuk arayüzü" değildir.** Kontur kalınlığı ve gölge ofseti tutarlı değilse sonuç dağınık olur.

### Where it comes from
Ettore Sottsass ve Memphis Group (1981); 2010'larda "80'ler revival" ile dijitale döndü. Etkinlik ve topluluk ürünlerinde, oyun arayüzlerinde kullanılıyor.

### Recognition test in 3 seconds
1. Kenarlıklar **siyah ve 3px** mı?
2. Gölge **3px ofset** (blur yok) mu?
3. Dekor geometrisi var mı (daire/zikzak/nokta), konturlu mu?
4. Renkler düz doygun mu (kırmızı, sarı, turkuaz)?
5. Süs **sayılı** mı (ekran başına 3–4 şekil)?

## Visual signature
- **Kontur + ofset:** 3px siyah kenar, `3px 3px 0` gölge; hover'da öğe gölge yönüne kayar.
- **Dekor:** içi boş daire, zikzak şerit, üçgen, nokta ızgarası — hepsi 2–3px konturlu.
- **Renk bloğu:** sarı (`--surface-2`) ikinci zemin, kırmızı accent.
- **Tipografi:** Poppins 700, geometrik; başlıkta hafif negatif tracking.
- **Doku:** yok (`--grain: 0`) — düz renk, temiz kontur.
- **Typography:** Poppins (display) + Poppins (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#ff4e50`; neutral scale `#fff6e9` → `#111111`.
- **Radius:** `10px` / `18px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Kontur 3px siyah**, tüm bileşenlerde aynı kalınlık.
2. **Ofset gölge** `3px 3px 0 #111` — blur yok, tek yön.
3. **Dekor bütçesi:** ekran başına en fazla 4 geometrik şekil; hepsi konturlu.
4. **Düz renkler:** en fazla 3 doygun renk (kırmızı, sarı, turkuaz) + siyah/krem.
5. **Radius 10/18px** — tam daire dekorasyon serbest, bileşende 999px yok.
6. **Metin kontrastı ≥ 4.5:1**; dekor metnin arkasına geçmez (z-index).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fff6e9` | page background | as a card background |
| `--bg-2` | `#ffe8cc` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#ffd400` | passive chip, hover background | primary button |
| `--ink` | `#111111` | title, body, icon | large background |
| `--ink-soft` | `#3d3d3d` | secondary text, description | — |
| `--ink-faint` | `#767676` | decorative label, separator text | interactive text |
| `--accent` | `#ff4e50` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#111111` | text above accent | non-accent background |
| `--line` | `#111111` | all borders | text colour |

- Measured contrast: `ink/bg` **17.63:1** · `ink-soft/bg` **10.14:1** · `ink-faint/bg` **4.24:1 (decorative)** · `accent-ink/accent` **5.81:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 56px (mobile 32px) | 400 | 1.08 | -0.02em |
| H2 | same | 32px | 600 | 1.2 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 10px | 400 | 1.2 | 0.14em |
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
- Radius: `10px` (buton, input, chip), `18px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Gradyan, blur, cam, gölge çeşitliliği (sadece 3px ofset).
- Dekoru metnin üstüne bindirmek.
- 4'ten fazla geometrik şekil / her bölümde farklı dekor dili.
- İnce (1px) kontur.
- Doygun renkte metin (kırmızı üstüne kırmızı).
- Yoğun tabloda tam dekor.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 10px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 10px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 10px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 10px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 10px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 10px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.25:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-dots` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık, 3–4 konturlu geometri, sarı blok, tek kırmızı buton | `shots/01-page.png` |
| Dashboard | düşük | Dekor kapanır; kartlar kontur + ofset, KPI sayıları sade | `shots/01-page.png` |
| Form | düşük | 3px kontur kalır, dekor yok | `shots/01-page.png` |
| Liste / tablo | düşük | 2px ayırıcı, zebra sarı %20 | `shots/01-page.png` |
| Boş durum | yüksek | 1 büyük geometri + tek cümle + buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 illüstrasyon + kısa metin | `shots/01-page.png` |
| Pricing | yüksek | 3 konturlu kart, orta kart sarı + "popüler" sticker | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Dekor yok, kontur + tek buton | `shots/01-page.png` |
| Modal | orta | 8px ofset gölge | `shots/01-page.png` |
| Bildirim / toast | orta | Sarı toast + 3px kontur | `shots/01-page.png` |
| Hata | düşük | Kırmızı kontur + 14px sakin dil | `shots/01-page.png` |
| Profil / ayar | düşük | Kart listesi, dekor minimum | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.63:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 10.14:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.24:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.81:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.25:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.6 | ≥ 60 target | thin text |

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
| Dağınık | 6+ dekor, karışık kontur | Dekor ≤ 4, kontur tek kalınlık |
| Okunmuyor | Dekor metnin üstünde | Dekoru kenara al, z-index düşür |
| "Çocuk uygulaması" | Pastel + çok renk | Doygun 3 renk + siyah kontur |
| Karakter kaybı | 1px kontur | 3px'e çıkar, ofset gölge ekle |
| Hover hissi yok | Gölge büyüyor | Hover'da gölge küçülür, öğe kayar |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `neo-brutalism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `luxury-typography` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.memphis-milano.com | Memphis Milano — Orijinal geometri dili |
| https://fonts.google.com/specimen/Poppins | Poppins — Geometrik sans |
| https://www.awwwards.com/websites/80s/ | Awwwards · 80s — 80'ler revival örnekleri |

## AI brief

```text
Stil: Memphis (styles/16-memphis/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="memphis"]; hard-coded renk YASAK.
Kontur: 3px solid #111 tüm bileşenlerde; ofset gölge 3px 3px 0 #111 (blur yok).
Dekor: ekran başına ≤ 4 konturlu geometri (daire/zikzak/üçgen/nokta); metnin arkasına geçmez.
Renk: krem #fff6e9 + sarı #ffd400 + kırmızı #ff4e50 (üstünde SİYAH metin 5.81:1); 4. doygun renk yok.
Tipografi: Poppins display 700 (56/1.05 -0.02em) + gövde 16/1.6; etiket mono 10 uppercase.
Radius 10/18px; hover'da öğe gölge yönüne kayar (translate(3px,3px)), gölge 0.
Hareket: 100–260ms, hafif yay; reduced-motion'da ölçek kapanır.
Yasak: 1px kontur, gradient, blur, dekor metin üstünde, 4+ doygun renk, yoğun tabloda dekor.
Çıktı: kod + tek paragraf not (dekor sayısı ve kontur tutarlılığı).

Style: Memphis (memphis) · family: Bold (13–18)
Token: --bg #fff6e9 · --surface #ffffff · --ink #111111 · --accent #ff4e50 · --line #111111
Radius: 10px / 18px · Typography: Poppins / Poppins / JetBrains Mono
Required: **Kontur 3px siyah**, tüm bileşenlerde aynı kalınlık. · **Ofset gölge** `3px 3px 0 #111` — blur yok, tek yön. · **Dekor bütçesi:** ekran başına en fazla 4 geometrik şekil; hepsi konturlu.
Banned: Gradyan, blur, cam, gölge çeşitliliği (sadece 3px ofset). · Dekoru metnin üstüne bindirmek. · 4'ten fazla geometrik şekil / her bölümde farklı dekor dili.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="memphis"] {
  --bg: #fff6e9; --bg-2: #ffe8cc;
  --surface: #ffffff; --surface-2: #ffd400;
  --ink: #111111; --ink-soft: #3d3d3d; --ink-faint: #767676;
  --accent: #ff4e50; --accent-ink: #111111;
  --line: #111111;
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00833a;
  --ok-ink: #ffffff;
  --warn: #b75600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 10px; --radius-lg: 18px;
  --shadow: 3px 3px 0 #111111; --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
