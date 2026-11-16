# 10 · Neumorphism

> **In one sentence:** Aynı renkli yumuşak yüzey üzerinde çift gölgeyle kabartma; kontrol "çizilmiş" değil "basılmış" görünür.

| | |
|---|---|
| **Feeling** | yumuşak plastik, dokunulabilir, sessiz teknoloji |
| **Best for** | tek amaçlı kontrol seti (akıllı ev, ses, saat), meditasyon/odak uygulaması, donanım eşlikçisi |
| **Avoid** | yoğun form/tablo, erişilebilirlik kritik ürünler, açık havada okunacak ekran |
| **Difficulty** | yüksek (kontrast) · **Accessibility** |  |
| **Family** | Surface (8–12) · **Token** | `kit/tokens.css` → `[data-style="neumorphism"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Neumorphism, zemin ve yüzeyin **aynı renk** olmasına dayanır; ayrım yalnızca **iki zıt gölgeyle** kurulur: sol üstten açık (`#f8fbff`), sağ alttan koyu (`#cfd4dd`). Kontroller dışa (kabarık) ya da içe (gömülü) gölgelenir. Sonuç: fiziksel bir panel hissi.

Kazandığı şey: dokunsal, sakin bir "cihaz" hissi. Feda ettiği şey: erişilebilirlik — düşük kontrast ve belirsiz tıklama alanları bu stilin doğal riski.

### What is not
- **Skeuomorphism değildir.** Skeuomorphism malzeme dokusu (ahşap, cam, metal) ekler; neumorphism tek renk + gölgeyle çalışır.
- **Claymorphism değildir.** Clay pastel renkli, şişkin ve oyuncak; neumorphism tek renkli ve sessiz.
- **Glassmorphism değildir.** Camda arka plan görünür ve bulanıklaşır; burada arka plan yok, sadece ışık.
- **"Yumuşak kart" değildir.** Aynı renk + iki zıt gölge + iç/dış durum ayrımı olmadan sadece bulanık gölge olur.

### Where it comes from
2019–2020'de dribbble estetiği olarak yükseldi; Apple'ın watchOS/akıllı ev panelleri ve tek işlevli kontrol setleri için hâlâ kullanışlı. Zayıf kontrastı nedeniyle geniş ürün arayüzlerinde terk edildi — bu yüzden **sınırlı yüzeyde** kullanılmalı.

### Recognition test in 3 seconds
1. Zemin ve kart **aynı renk** mi?
2. İki zıt gölge var mı (sol üst açık, sağ alt koyu)?
3. Basılı öğeler **içe gömülü** gölge mi kullanıyor?
4. Kenarlık yok / şeffaf mı?
5. Ekranda 3'ten fazla gölge yoğunluğu var mı (hepsi aynı yönde)?

## Visual signature
- **Kabartma formülü:** `6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff`.
- **Gömülü formül:** `inset 6px 6px 12px #cfd4dd, inset -6px -6px 12px #f8fbff`.
- **Radius 16/24px:** yumuşak ama daire değil.
- **Yön disiplini:** tüm gölgeler sol üst ışık / sağ alt gölge.
- **Buton basılması:** basınca dış gölge → iç gölge (gerçek "basılma").
- **Sessiz palet:** tek gri-mavi skala + tek accent (`#4262e8`).
- **Typography:** Nunito Sans (display) + Nunito Sans (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#4262e8`; neutral scale `#e4e8ef` → `#333a45`.
- **Radius:** `16px` / `24px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. **Tek renk yüzey:** zemin ve kart aynı tonda (`#e4e8ef`); ayrım yalnızca gölgeyle.
2. **İki zıt gölge:** `6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff` (kabarık); basılı durumda `inset` aynı değerler.
3. **Kenarlık yok:** `--line: transparent`; input/buton kenarı gölgeyle tanımlanır.
4. **Kontrast tabanı:** gövde metni `--ink` (9.33:1); `--ink-faint` asla gövde metni değil.
5. **Sınırlı yüzey:** ekran başına en fazla 6 neumorfik kontrol; gerisi düz metin/boşluk.
6. **Odak halkası zorunlu:** gölge tek başına durum bildirmez → 2px `--accent` halka + `outline-offset: 3px`.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#e4e8ef` | page background | as a card background |
| `--bg-2` | `#dde2ea` | partition divider floor, table top | button background |
| `--surface` | `#e4e8ef` | kart, input, modal | full-page background |
| `--surface-2` | `#e9edf3` | passive chip, hover background | primary button |
| `--ink` | `#333a45` | title, body, icon | large background |
| `--ink-soft` | `#5d6674` | secondary text, description | — |
| `--ink-faint` | `#7e8593` | decorative label, separator text | interactive text |
| `--accent` | `#4262e8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `transparent` | all borders | text colour |

- Measured contrast: `ink/bg` **9.33:1** · `ink-soft/bg` **4.72:1** · `ink-faint/bg` **3.02:1 (decorative)** · `accent-ink/accent` **5.07:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Nunito Sans) | 44px (mobile 28px) | 400 | 1.08 | -0.02em |
| H2 | same | 26px | 600 | 1.2 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito Sans) | 16px | 400 | 1.62 | 0 |
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
- Radius: `16px` (buton, input, chip), `24px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Aynı ekranda 3+ farklı gölge açısı/mesafesi.
- İnce gölge (2px) — kabartma okunmaz; en az 6px ofset.
- Düşük kontrastlı metin (`--ink-soft` altı) gövde metninde.
- Kenarlık + gölge birlikte (çelişen iki dil).
- Yoğun tablo/form: 6'dan fazla kontrol yan yana.
- Accent üstü beyaz metin yerine accent zemin geniş kullanımı (buton dışında).
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 16px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 16px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 16px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 16px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 16px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 16px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 16px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 4.12:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | Büyük başlık + tek kabartma kontrol kümesi (3–4 öğe); gerisi boşluk | `shots/01-page.png` |
| Dashboard | düşük | En fazla 6 kabartma kart; KPI metni `--ink`, grafik gömülü ray | `shots/01-page.png` |
| Form | düşük | Gömülü inputlar, tek sütun 480px; hata metinle bildirilir | `shots/01-page.png` |
| Liste / tablo | çok düşük | Gölge yerine boşluk + kalın sayı; tabloda neumorphism kullanma | `shots/01-page.png` |
| Boş durum | orta | Gömülü daire içinde ikon + tek cümle | `shots/01-page.png` |
| Onboarding | orta | Sayfa başına 1 kontrol seti; ilerleme gömülü segment | `shots/01-page.png` |
| Pricing | orta | 2–3 kabartma kart, orta kart accent halka | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Gömülü input + düz accent buton; güven için sade | `shots/01-page.png` |
| Modal | orta | 24px radius, büyük gölge, backdrop düz | `shots/01-page.png` |
| Bildirim / toast | orta | Kabartma pill, koyu metin | `shots/01-page.png` |
| Hata | düşük | `--danger` ikon + metin (kenarlık yok) | `shots/01-page.png` |
| Profil / ayar | orta | Ayar satırı 56px, gömülü toggle | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 9.33:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 4.72:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.02:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.07:1 | ≥ 4.5 | button text |
| focus ring/ground | 4.12:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 82.6 | ≥ 60 target | thin text |

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
| "Bulanık gri" görünüyor | Gölge zıtlığı yok | Açık highlight'ı `#f8fbff` yap, ofset 6px |
| Buton tıklanmıyor gibi | Basılma durumu yok | active'te inset gölge + metin rengi |
| Okunmuyor | `--ink-faint` gövde metninde | `--ink` kullan; gövde ≥ 4.5:1 |
| Dağınık | Farklı gölge açıları | Tüm gölgeler tek yön (sol üst ışık) |
| Form kullanılamaz | Kenarlık yok + belirsiz hedef | Gömülü input + odak halkası + 48px |
| Erişilebilirlik şikayeti | Renk tek başına durum | İkon + metin + halka |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `claymorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://dribbble.com/tags/neumorphism | Dribbble · Neumorphism — Gölge formülü varyantları (eleştirel bak) |
| https://www.nngroup.com/articles/neumorphism-critique/ | NN/g · Neumorphism critique — Neden sınırlı kullanılmalı |
| https://developer.apple.com/design/human-interface-guidelines/accessibility | Apple HIG · Accessibility — Kontrast ve hedef boyutu |

## AI brief

```text
Stil: Neumorphism (styles/10-neumorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="neumorphism"]; hard-coded renk/gölge YASAK.
Yüzey: zemin ve kart AYNI renk (#e4e8ef); ayrım sadece çift gölge: 6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff.
Gömülü (input/aktif buton): inset aynı değerler. Kenarlık YOK (--line: transparent).
Işık yönü tek: sol üst açık, sağ alt koyu; tüm bileşenlerde aynı.
Kontrast: gövde --ink (9.33:1), açıklama --ink-soft (4.72:1), --ink-faint SADECE dekoratif.
Odak halkası ZORUNLU: 2px var(--accent), offset 3px. Dokunma hedefi 48px.
Sınır: ekran başına ≤ 6 neumorfik kontrol; tabloda neumorphism kullanma.
Yasak: kenarlık, gradient, doku, farklı gölge açıları, 2px altı ofset, düşük kontrastlı metin.
Çıktı: kod + tek paragraf not (gölge yönü ve erişilebilirlik önlemleri).

Style: Neumorphism (neumorphism) · family: Surface (8–12)
Token: --bg #e4e8ef · --surface #e4e8ef · --ink #333a45 · --accent #4262e8 · --line transparent
Radius: 16px / 24px · Typography: Nunito Sans / Nunito Sans / JetBrains Mono
Required: **Tek renk yüzey:** zemin ve kart aynı tonda (`#e4e8ef`); ayrım yalnızca gölgeyle. · **İki zıt gölge:** `6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff` (kabarık); basılı durumda `inset` aynı değerler. · **Kenarlık yok:** `--line: transparent`; input/buton kenarı gölgeyle tanımlanır.
Banned: Aynı ekranda 3+ farklı gölge açısı/mesafesi. · İnce gölge (2px) — kabartma okunmaz; en az 6px ofset. · Düşük kontrastlı metin (`--ink-soft` altı) gövde metninde.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="neumorphism"] {
  --bg: #e4e8ef; --bg-2: #dde2ea;
  --surface: #e4e8ef; --surface-2: #e9edf3;
  --ink: #333a45; --ink-soft: #5d6674; --ink-faint: #7e8593;
  --accent: #4262e8; --accent-ink: #ffffff;
  --line: transparent;
  --danger: #cd1d12;
  --danger-ink: #ffffff;
  --ok: #007931;
  --ok-ink: #ffffff;
  --warn: #ad4b00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 16px; --radius-lg: 24px;
  --shadow: 6px 6px 12px #cfd4dd, -6px -6px 12px #f8fbff; --shadow-hard: none;
  --font-display: "Nunito Sans", system-ui, sans-serif;
  --font-body: "Nunito Sans", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
