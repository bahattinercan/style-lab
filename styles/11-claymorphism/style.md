# 11 · Claymorphism

> **In one sentence:** Kil gibi şişkin, pastel ve oyuncak yüzeyler: iç gölge + dış gölge + kalın yuvarlak hat, dokunulabilir "oyun hamuru" hissi.

| | |
|---|---|
| **Feeling** | sevimli, şişkin, davetkâr, oyunlaştırılmış |
| **Best for** | onboarding, çocuk/eğitim, wellness, sadakat programı, tüketici uygulaması |
| **Avoid** | kurumsal B2B, finans güven ekranı, veri yoğun panel, ciddi sağlık |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Surface (8–12) · **Token** | `kit/tokens.css` → `[data-style="claymorphism"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Claymorphism, 3B kil modelleme estetiğinin arayüze indirgenmesi: **32px radius**, **iç gölge ile hacim** (üst açık, alt koyu) + **dış yumuşak gölge**, pastel palet ve yuvarlak hatlı tipografi (Baloo 2 / Nunito). Her öğe "tutulabilir" görünür; düğmeler hafifçe şişkindir.

Kazandığı şey: yaklaşılabilirlik ve oyun hissi — korkutucu olmayan form, düşük bilişsel baskı. Feda ettiği şey: ciddiyet ve bilgi yoğunluğu.

### What is not
- **Neumorphism değildir.** Neumorphism tek renkli ve sesses; clay **renkli** ve pastel, iç gölge daha belirgin.
- **Dopamine UI değildir.** Dopamine doygun renk + ödül patlaması; clay yumuşak pastel ve sakin neşe.
- **3B illüstrasyon değildir.** Stil CSS ile kurulur; render edilmiş 3B obje zorunlu değildir (küçük dozlarda garnitür).
- **"Yuvarlak köşe" değildir.** İç gölge ile hacim yoksa sadece "yumuşak kart" olur.

### Where it comes from
2021–2022'de 3B ikon/kil render trendiyle yayıldı; eğitim, finans-onboarding ve çocuk ürünlerinde benimsendi. Kalabalık ve soğuk fintech arayüzlerine "insan yüzü" eklemek için kullanılıyor.

### Recognition test in 3 seconds
1. Köşe yarıçapı ≥ 24px mi (kart 32px)?
2. Öğelerde **iç gölge** var mı (üst açık, alt koyu hacim)?
3. Palet pastel mi (beyaz üstünde yumuşak mor/lavanta)?
4. Tipografi yuvarlak hatlı mı (Baloo/Nunito)?
5. Gölge her yerde aynı yönde ve yumuşak mı?

## Visual signature
- **Hacim:** üç gölge katmanı birlikte; tek başına dış gölge yetersiz.
- **Şişkin buton:** 48px yükseklik, 999px pill veya 24px radius, alt kenarda koyu iç gölge.
- **Pastel blok:** `--surface-2` (#f6f2ff) ile ikincil alan; doygun accent yalnızca CTA.
- **Yuvarlak ikon:** daire içinde, kalın çizgi (2px).
- **Doku yok:** pürüzsüz yüzey (`--grain: 0`) — kil "temiz" olmalı.
- **Yumuşak hareket:** 220–320ms, hafif yay (`scale(.97→1)`).
- **Typography:** Baloo 2 (display) + Nunito (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#6f4df0`; neutral scale `#f3efff` → `#2b2350`.
- **Radius:** `24px` / `32px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Radius 24/32px:** buton 24px (pill serbest), kart 32px.
2. **Hacim üçlüsü:** dış gölge (`0 12px 24px accent %18`) + iç gölge koyu (`inset -6px -8px 16px ink %10`) + iç gölge açık (`inset 6px 8px 16px white %65`).
3. **Pastel palet:** ink koyu mor (`#2b2350`), accent orta mor (`#6f4df0`); doygun kırmızı/neon yok.
4. **Yuvarlak tipografi:** Baloo 2 (display) + Nunito (gövde).
5. **Gölge disiplini:** tüm gölgeler aynı yön (üst-sol açık, alt-sağ koyu), yumuşak.
6. **Kontrast tabanı:** gövde `--ink` (12.75:1), `--ink-faint` sadece dekoratif.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f3efff` | page background | as a card background |
| `--bg-2` | `#e9e3ff` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f6f2ff` | passive chip, hover background | primary button |
| `--ink` | `#2b2350` | title, body, icon | large background |
| `--ink-soft` | `#5b5382` | secondary text, description | — |
| `--ink-faint` | `#8d87ac` | decorative label, separator text | interactive text |
| `--accent` | `#6f4df0` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(255,255,255,.7)` | all borders | text colour |

- Measured contrast: `ink/bg` **12.75:1** · `ink-soft/bg` **6.19:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **5.26:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 44px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 28px | 600 | 1.2 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.62 | 0 |
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
- Radius: `24px` (buton, input, chip), `32px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Radius < 16px (sertlik hissi), köşeli buton.
- Sadece dış gölge (hacim yok → "karton" görünür).
- Doygun/neon renk, siyah metin (#000), gri skala.
- Keskin gölge, kalın kontur, cam efekti.
- Pastel accent üstü açık metin (kontrast düşer) — beyaz metin accent üstünde 5.26:1 olacak şekilde accent koyulaştırıldı, daha açık ton kullanma.
- Veri yoğun tabloda tam stil (okunmaz).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 24px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 24px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 24px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 24px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 24px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 24px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 24px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.26:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | 44px yuvarlak başlık, tek pastel kart, 2 pill CTA, küçük 3B illüstrasyon | `shots/01-page.png` |
| Dashboard | düşük | En fazla 4 şişkin KPI kartı; veri yoğunsa düz tablo | `shots/01-page.png` |
| Form | düşük | 480px tek sütun, 48px input, tek pill buton | `shots/01-page.png` |
| Liste / tablo | çok düşük | Gölgeyi kapat, boşluk + kalın sayı; satır 56px | `shots/01-page.png` |
| Boş durum | yüksek | Sevimli illüstrasyon + tek cümle + pill buton | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına 1 fikir, ilerleme şişkin nokta; ödül animasyonu | `shots/01-page.png` |
| Pricing | orta | 3 pastel kart, orta kart accent halka + "popüler" chip | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Şişkinliği azalt, sade input + tek buton | `shots/01-page.png` |
| Modal | orta | 32px radius, yumuşak gölge | `shots/01-page.png` |
| Bildirim / toast | yüksek | Pill toast, koyu metin, hafif yay | `shots/01-page.png` |
| Hata | düşük | Sevimli ikon + 14px sakin dil (suçlayıcı değil) | `shots/01-page.png` |
| Profil / ayar | orta | Ayar satırı 56px, pill toggle | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 12.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.19:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.26:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.26:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 92.7 | ≥ 60 target | thin text |

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
| "Karton" görünüyor | Sadece dış gölge var | İç gölge (koyu+açık) ekle |
| Ciddiyetsiz/çocukça | Her yerde doygun renk + büyük radius | Pasteli azalt, gövde metnini nötr tut |
| Okunmuyor | Pastel üstü pastel metin | `--ink` koyu mor, kontrast ≥ 4.5:1 |
| Dağınık | Farklı gölge yönleri | Tek ışık yönü |
| Kurumsal güven kaybı | Ödeme ekranında tam stil | Ödeme/girişte şişkinliği azalt |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `dopamine-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `neumorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `memphis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Baloo+2 | Baloo 2 — Yuvarlak display karakteri |
| https://dribbble.com/tags/claymorphism | Dribbble · Claymorphism — İç gölge/hacim örnekleri |
| https://mobbin.com | Mobbin — Onboarding ve boş durum örnekleri |

## AI brief

```text
Stil: Claymorphism (styles/11-claymorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="claymorphism"]; hard-coded renk/gölge YASAK.
Hacim üçlüsü: dış gölge (--shadow) + inset koyu (ink %10) + inset açık (beyaz %65); yön tek (üst-sol açık).
Radius: buton/input 24px veya 999px pill, kart 32px.
Tipografi: Baloo 2 display 600 (44/1.15) + Nunito gövde 16/1.6; etiket mono 10 uppercase.
Renk: pastel lavanta zemin (#f3efff), accent #6f4df0 (beyaz metin 5.26:1) — daha açık mor kullanma.
Hareket: 120–320ms, cubic-bezier(.34,1.4,.64,1); basınca scale(.97); ekran başına 1 ödül animasyonu.
Yasak: radius <16px, sadece dış gölge, doygun/neon renk, siyah metin, keskin gölge, cam.
Çıktı: kod + tek paragraf not (hacmi nasıl kurduğun ve kontrastı nasıl koruduğun).

Style: Claymorphism (claymorphism) · family: Surface (8–12)
Token: --bg #f3efff · --surface #ffffff · --ink #2b2350 · --accent #6f4df0 · --line rgba(255,255,255,.7)
Radius: 24px / 32px · Typography: Baloo 2 / Nunito / JetBrains Mono
Required: **Radius 24/32px:** buton 24px (pill serbest), kart 32px. · **Hacim üçlüsü:** dış gölge (`0 12px 24px accent %18`) + iç gölge koyu (`inset -6px -8px 16px ink %10`) + iç gölge açık (`inset 6px 8px 16px white %65`). · **Pastel palet:** ink koyu mor (`#2b2350`), accent orta mor (`#6f4df0`); doygun kırmızı/neon yok.
Banned: Radius < 16px (sertlik hissi), köşeli buton. · Sadece dış gölge (hacim yok → "karton" görünür). · Doygun/neon renk, siyah metin (#000), gri skala.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="claymorphism"] {
  --bg: #f3efff; --bg-2: #e9e3ff;
  --surface: #ffffff; --surface-2: #f6f2ff;
  --ink: #2b2350; --ink-soft: #5b5382; --ink-faint: #8d87ac;
  --accent: #6f4df0; --accent-ink: #ffffff;
  --line: rgba(255,255,255,.7);
  --danger: #d4271b;
  --danger-ink: #ffffff;
  --ok: #007f36;
  --ok-ink: #ffffff;
  --warn: #b35200;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 24px; --radius-lg: 32px;
  --shadow: 0 12px 24px rgba(124,92,255,.18), inset -6px -8px 16px rgba(43,35,80,.10), inset 6px 8px 16px rgba(255,255,255,.65); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
