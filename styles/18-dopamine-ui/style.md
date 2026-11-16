# 18 · Dopamine UI

> **In one sentence:** Canlı renk + mikro ödül: her etkileşim küçük bir "iyi his" bırakır, ama palet disiplinli kalır.

| | |
|---|---|
| **Feeling** | canlı, ödüllendirici, enerjik, genç |
| **Best for** | sosyal uygulama, alışveriş, fitness/alışkanlık, oyunlaştırılmış eğitim |
| **Avoid** | kurumsal finans, sağlık kaydı, resmi süreç, uzun okuma |
| **Difficulty** | orta (renk disiplini zor) · **Accessibility** |  |
| **Family** | Bold (13–18) · **Token** | `kit/tokens.css` → `[data-style="dopamine-ui"]` |
| **Composition** | `split-reverse` · `inline` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Dopamine UI, ödül psikolojisini tasarıma çevirir: **doygun vurgu rengi** (pembe), **pastel yüzey**, **büyük radius** (18/24px), **yumuşak renkli gölge** ve **mikro ödül** (tamamlanınca pop, seri sayacı, konfeti). Renk boldur ama sayısı **3'ü geçmez**; gövde metni nötr koyu tondadır.

Kazandığı şey: motivasyon ve kullanım süresi. Feda ettiği şey: ciddiyet; ayrıca doz kaçarsa "ucuz/oyuncak" algısı.

### What is not
- **Claymorphism değildir.** Clay hacim (iç gölge) ile; dopamine **renk + hareket** ile konuşur.
- **Memphis değildir.** Memphis kontur + geometri; dopamine pastel zemin + doygun vurgu.
- **"Her yeri pembe" değildir.** Accent alanı ≤ %20; gerisi beyaz/krem ve nötr metin.
- **Sürekli animasyon değildir.** Ödül hareketi **eylem başına bir kez**; sürekli parıltı yorgunluk yapar.

### Where it comes from
Oyunlaştırma (Duolingo, Strava) ve sosyal ürünlerin "streak/reward" dili; 2023+ tüketici uygulamalarında pastel + doygun vurgu kombinasyonu standartlaştı.

### Recognition test in 3 seconds
1. Accent **doygun** (pembe) ama ekranın ≤ %20'si mi?
2. Yüzeyler pastel/beyaz, radius ≥ 18px mi?
3. Gölge renkli ve yumuşak mı (pembe tonlu), sert değil mi?
4. Ödül/mikro-etkileşim var mı (tek seferlik)?
5. Accent üstünde **koyu** metin mi (beyaz değil)?

## Visual signature
- **Pastel yüzey + doygun vurgu:** `--surface-2` (#ffe3ec) pastel blok, `--accent` (#ff3d71) CTA.
- **Pembe gölge:** yumuşak, renkli; öğeyi "ışıklı" gösterir.
- **Büyük radius:** buton pill, kart 24px.
- **Mikro ödül:** tamamlanan görevde `scale(1→1.06→1)` + konfeti (tek sefer).
- **Poppins:** geometrik ve dost; başlık 700.
- **Streak/sayaç:** mono rakam + pill arka plan.
- **Typography:** Poppins (display) + Poppins (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#ff3d71`; neutral scale `#fffdf7` → `#16121f`.
- **Radius:** `18px` / `24px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Accent bütçesi:** doygun renk ekranın ≤ %20'si; bir ekranda tek doygun hue.
2. **Accent üstü koyu metin:** `--accent-ink` = #16121f (5.40:1); beyaz metin yasak (3.41:1).
3. **Radius 18/24px**, kart 24px; buton pill/18px.
4. **Renkli yumuşak gölge:** `0 10px 24px rgba(255,61,113,.18)`; sert gölge yok.
5. **Ödül disiplini:** eylem başına 1 animasyon, ≤ 400ms; sürekli parıltı yok.
6. **Nötr gövde metni:** `--ink` koyu; doygun renkte metin yok.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fffdf7` | page background | as a card background |
| `--bg-2` | `#fff3d6` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#ffe3ec` | passive chip, hover background | primary button |
| `--ink` | `#16121f` | title, body, icon | large background |
| `--ink-soft` | `#4a4358` | secondary text, description | — |
| `--ink-faint` | `#837b93` | decorative label, separator text | interactive text |
| `--accent` | `#ff3d71` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#16121f` | text above accent | non-accent background |
| `--line` | `rgba(22,18,31,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.1:1** · `ink-soft/bg` **9.24:1** · `ink-faint/bg` **3.96:1 (decorative)** · `accent-ink/accent` **5.4:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 48px (mobile 30px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
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
- Radius: `18px` (buton, input, chip), `24px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- 3'ten fazla doygun renk; her kart farklı hue.
- Accent üstünde beyaz metin.
- Sürekli animasyon / parıltı / nabız efekti.
- Sert gölge, kalın siyah kontur (bu stil değil).
- 12px altı gövde metni; pastel üstünde pastel metin.
- Ödül animasyonunu form/ödeme ekranına taşımak.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 18px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 18px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 18px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 18px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 18px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 18px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 18px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.41:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 48px başlık, pastel blok, tek accent CTA, sağda ödül kartı | `shots/01-page.png` |
| Dashboard | orta | Streak/kupa sağ üstte; KPI'lar pastel, grafik 2 renk | `shots/01-page.png` |
| Form | düşük | 480px, 48px input, tek pill buton; ödül animasyonu yok | `shots/01-page.png` |
| Liste / tablo | düşük | Satır 54px, pastel hover; accent yalnız durum | `shots/01-page.png` |
| Boş durum | yüksek | Ödül illüstrasyonu + tek cümle + pill buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına 1 kazanım; ilerleme pill; tamamlanınca konfeti | `shots/01-page.png` |
| Pricing | orta | 3 kart, orta kart accent gölge + "popüler" pill | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Doygun rengi azalt; sade kart, tek buton | `shots/01-page.png` |
| Modal | orta | 24px radius, güçlü gölge | `shots/01-page.png` |
| Bildirim / toast | yüksek | Pill + ödül ikonu, 4sn | `shots/01-page.png` |
| Hata | düşük | Sevimli ama sakin dil; `--danger` yalnız ikon | `shots/01-page.png` |
| Profil / ayar | orta | Ayar satırı 56px, pill toggle | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.1:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.24:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.96:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.4:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.41:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 103.8 | ≥ 60 target | thin text |

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
| Ucuz/oyuncak | Accent %40'ı geçmiş, 3+ doygun renk | Accent ≤ %20, tek hue |
| Okunmuyor | Accent üstünde beyaz metin | Koyu metin (5.40:1) |
| Yorgunluk | Sürekli parıltı/nabız | Ödül yalnız eylemde, 1 kez |
| Kimlik kaybı | Her kart farklı renk | Pastel + tek doygun hue |
| Güven kaybı | Ödeme ekranında ödül animasyonu | Ödeme/girişte süs kapat |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `claymorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://dribbble.com/tags/dopamine_ui | Dribbble · Dopamine UI — Renk oranı örnekleri |
| https://mobbin.com | Mobbin — Streak/ödül akışları |
| https://developer.apple.com/design/human-interface-guidelines/motion | Apple HIG · Motion — Hareket ve vestibüler erişilebilirlik |

## AI brief

```text
Stil: Dopamine UI (styles/18-dopamine-ui/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="dopamine-ui"]; hard-coded renk YASAK.
Renk bütçesi: doygun accent ≤ %20 ekran alanı, bir ekranda tek hue (#ff3d71); pastel #ffe3ec destek.
Accent üstünde KOYU metin (#16121f, 5.40:1); beyaz metin YASAK.
Radius: buton pill/18px, kart 24px; gölge yumuşak ve renkli (0 10px 24px rgba(255,61,113,.18)).
Tipografi: Poppins display 700 (48/1.08) + gövde 16/1.6; etiket mono 10 uppercase; streak sayıları mono tabular.
Ödül: eylem başına 1 animasyon (scale 1→1.06→1, ≤400ms) + konfeti; sürekli parıltı yasak.
Yoğun/kritik ekran (form, ödeme): doygun rengi azalt, ödül animasyonu kapalı.
Yasak: 3+ doygun renk, accent üstü beyaz metin, sürekli animasyon, sert gölge, pastel üstünde pastel metin.
Çıktı: kod + tek paragraf not (renk oranı ve ödül disiplini).

Style: Dopamine UI (dopamine-ui) · family: Bold (13–18)
Token: --bg #fffdf7 · --surface #ffffff · --ink #16121f · --accent #ff3d71 · --line rgba(22,18,31,.10)
Radius: 18px / 24px · Typography: Poppins / Poppins / JetBrains Mono
Required: **Accent bütçesi:** doygun renk ekranın ≤ %20'si; bir ekranda tek doygun hue. · **Accent üstü koyu metin:** `--accent-ink` = #16121f (5.40:1); beyaz metin yasak (3.41:1). · **Radius 18/24px**, kart 24px; buton pill/18px.
Banned: 3'ten fazla doygun renk; her kart farklı hue. · Accent üstünde beyaz metin. · Sürekli animasyon / parıltı / nabız efekti.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="dopamine-ui"] {
  --bg: #fffdf7; --bg-2: #fff3d6;
  --surface: #ffffff; --surface-2: #ffe3ec;
  --ink: #16121f; --ink-soft: #4a4358; --ink-faint: #837b93;
  --accent: #ff3d71; --accent-ink: #16121f;
  --line: rgba(22,18,31,.10);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00873e;
  --ok-ink: #ffffff;
  --warn: #bc5900;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 18px; --radius-lg: 24px;
  --shadow: 0 10px 24px rgba(255,61,113,.18); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
