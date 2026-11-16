# 100 · Fluid Simulation

> **In one sentence:** Köşeleri damla gibi asimetrik yuvarlatılmış yüzeylerin viskoz bir eğriyle aktığı, dekoratif katmanın 6px bulanık bloblarla kurulduğu yumuşak arayüz.

| | |
|---|---|
| **Feeling** | akışkan, sakin, yumuşak, "sıvı" |
| **Best for** | wellness/sağlık takibi, fintech birikim uygulaması, ses/müzik ürünü, onboarding akışı |
| **Avoid** | yoğun veri tablosu (20+ satır), hukuki/resmi belge ekranı, kesinlik gerektiren ayar paneli |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="fluid-simulation"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Fluid Simulation, formu **yüzey gerilimi** ile kurar: kartlar asimetrik köşeli (`28px 28px 28px 12px` — damla yönü), buton ve çipler 999px pill, dekoratif katmanda 6px blur'lu **blob**'lar ve 12px **dalga ayırıcı**. Kurucu kararları üç tanedir. Birincisi **asimetrik yuvarlaklık**: köşeler eşit değildir, bir köşe diğerlerinden küçüktür — akışkanlık buradan okunur. İkincisi **viskoz hareket**: en kısa 260ms, en uzun 1500ms; `steps()` ve bounce yok. Üçüncüsü **tek dekor katmanı**: blob yalnız dekoratif, %18 opaklık, metin asla üstünde değil.

Kazandığı şey: **dokunma hissi** — arayüz "akan" bir nesne gibi okunur, onboarding ve finans birikimi gibi akış metaforlu ürünlere oturur. Feda ettiği şey: **kesinlik**; 28px radius ve uzun geçişler yoğun tablo ekranlarında yer ve zaman kaybettirir.

### What is not
- **Organic Bio (38) değildir:** 38 doğal form + toprak yeşili ile **bitkisel** çağrışım kurar, radius asimetrisi organik damlada değil yaprak formundadır; burada accent **sıcak kiremit-turuncu** ve imza `28/28/28/12` damla köşesidir.
- **Claymorphism (11) değildir:** 11 şişkin 3B kil yüzey ve iç/dış gölge ikilisiyle hacim kurar; burada gölge tek ve 10px yayılımı geçmez, hacim formdan gelir.
- **Aurora UI (12) değildir:** 12 hareketli degrade zeminlerle atmosfer kurar; burada degrade yok, blob katmanı tek ve %18.
- **Depth Parallax (99) değildir:** 99 katman hızı ve pus ile derinlik kurar; 100'de katman yok — form ve süre var.
- **"Yuvarlak köşeli jenerik SaaS" değilir:** kimlik **asimetrik köşe + 999px pill + viskoz süre üçlüsü**dür; tek başına radius yetmez.

### Where it comes from
Akışkan arayüz fikri 2010'ların "soft UI" akımından ve sıvı metal/cam deneylerinden gelir; asıl dayanağı **yüzey gerilimi** metaforudur: sıvı damlası bir yönde daha keskin, diğer yönde daha yuvarlaktır. CSS'te asimetrik `border-radius` sözdizimi (`28px 28px 28px 12px`) bunu tek satırda kurar. Klişeye dönüşmemesi için korunacak detay: **köşe asimetrisinin ölçülü kalması** (en çok 28px/12px) ve blob sayısının 2'yi geçmemesi.

### Recognition test in 3 seconds
1. Kartların bir köşesi diğerlerinden belirgin küçük (damla yönü).
2. Butonlar ve çipler tam pill (999px); hiçbir keskin köşe yok.
3. Arka planda bulanık, yavaşça şekil değiştiren tek bir renk lekesi var.
4. Geçişler uzun ve yumuşak; hiçbir şey "tık" diye oturmuyor.
5. Gövde Poppins, başlık Baloo 2, etiketler Courier Prime; accent tek sıcak turuncu.

## Visual signature
- **Asimetrik damla köşesi:** `border-radius: 28px 28px 28px 12px`; durum kartlarında `28px 12px 28px 28px` (ters yön).
- **Pill etkileşim:** buton, çip ve toast `999px`; hover'da buton `26px`'e "gerilir" (520ms).
- **Blob katmanı:** `filter: blur(6px)`, `%18` accent, asimetrik `border-radius`, ekran başına en fazla 2; 24s/32s yavaş salınım.
- **Dalga ayırıcı:** 12px yükseklik, `radial-gradient` ile 7px yarım daire dizisi.
- **Yüzey gerilimi halkası:** hero görselinin içinde 2px `%35` accent asimetrik yay.
- **Baloo 2 display:** 44px, tracking 0; gövde Poppins 16px/1.68; sayı Courier Prime.
- **Hover dili:** 520ms'de ölçek `1.028`, buton radius daralır, tablo satırı `12px → 18px`; renk sıçraması yok.
- **Typography:** Baloo 2 (display) + Poppins (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#b8481a`; neutral scale `#eff4f3` → `#101a1c`.
- **Radius:** `18px` / `28px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Kart köşeleri asimetrik: bir köşe 12px, diğerleri 28px — damla yönü okunur
2. Buton ve çip 999px pill; hiçbir etkileşimli öğe 4px altı radius kullanmaz
3. Blob katmanı yalnız dekoratif: 6px blur, %18 opaklık, metin üstünde yasak
4. Dalga ayırıcı ekran başına 1; 12px yükseklik, radial gradient
5. Hareket viskoz: en kısa 260ms, en uzun 1500ms; `steps()` ve bounce yasak
6. Grafik eğrileri yumuşatılmış, çizgi ucu yuvarlak

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#eff4f3` | page background | as a card background |
| `--bg-2` | `#e3ecea` | partition divider floor, table top | button background |
| `--surface` | `#fbfdfc` | kart, input, modal | full-page background |
| `--surface-2` | `#f0f6f4` | passive chip, hover background | primary button |
| `--ink` | `#101a1c` | title, body, icon | large background |
| `--ink-soft` | `#435452` | secondary text, description | — |
| `--ink-faint` | `#7d8b89` | decorative label, separator text | interactive text |
| `--accent` | `#b8481a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6f2` | text above accent | non-accent background |
| `--line` | `rgba(16,26,28,.13)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.93:1** · `ink-soft/bg` **7.19:1** · `ink-faint/bg` **3.19:1 (decorative)** · `accent-ink/accent` **4.94:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 44px (mobile 29px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Poppins) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 54px; technical labels mono and wide tracking. Body 15px, size 62ch.
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

- The grid is slightly visible as an auxiliary line (accent 8%); section spacing 56px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- The surfaces are separated by a thin accent edge; 1px signal line instead of shadow.
- Radius: `18px` (buton, input, chip), `28px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Keskin köşe (4px altı), 90° form, kalın kontur.
- Bounce/sıçrama, `steps()` hareket, hızlı (200ms altı) geçiş.
- Metni blob/blur katmanının üstüne koymak.
- Üçten fazla doygun renk; gradient metin.
- İkiden fazla hareketli blob; sürekli şekil değiştiren liste öğeleri.
- Uydurma finansal tutar/hedef; eksik içerik `{{amount}}` gibi işaretli yer tutucu olur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.17:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | blob + 7/5 akış bölünmesi + damla köşeli hero kartı | `shots/01-page.png` |
| Dashboard | düşük | 3 damla köşeli KPI + 3 serili yumuşak grafik | `shots/01-page.png` |
| Form | düşük | 48px alanlar, pill buton, tek kolon | `shots/01-page.png` |
| Liste / tablo | orta | 48px yumuşak satırlar, hover'da radius 18px | `shots/01-page.png` |
| Boş durum | orta | boş damla + tek pill CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: damla metaforu (birikim → akış → hedef) | `shots/01-page.png` |
| Pricing | orta | 3 pill kart, orta kart daha büyük radius | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kolon, blob yok (odak) | `shots/01-page.png` |
| Modal | orta | 28/28/18/18 köşe + arka blob | `shots/01-page.png` |
| Bildirim / toast | orta | pill kutu, 6px damla, 520ms giriş | `shots/01-page.png` |
| Hata | düşük | `--danger` sol damla şeridi, blob susturulur | `shots/01-page.png` |
| Profil / ayar | orta | 48px satır + "hareketi azalt" anahtarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.93:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.19:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.19:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 4.94:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.17:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.3 | ≥ 60 target | thin text |

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
| Ekran "yuvarlak SaaS şablonu" gibi duruyor | tüm köşeler eşit | bir köşeyi 12px'e düşür, diğerleri 28px |
| Bulanık/kirli görünüyor | blob sayısı 3+ veya opaklık %25 üstü | 2 blob, %18 opaklık, 6px blur |
| Hareket "gecikmiş" hissettiriyor | süreler 1500ms üstüne çıkmış | taban 520ms, giriş 1400ms'de kal |
| Tablo okunmuyor | satır radius 18px'de sabitlenmiş | varsayılan 12px, hover'da 18px |
| Kontrast zayıf | accent üstünde küçük metin | accent üstü metni 15px+ yap veya `--ink` kullan |
| Pill buton tıklanmıyor gibi | dokunma hedefi 40px altı | 48px'e çıkar, dikey padding ekle |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `organic-bio` | Same level of seriousness; accent sharing is not allowed |
| garnish | `claymorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `swiss-design` | Two different ornamental languages compete on the same screen |
| Mixing | `optical-illusion` | Two different ornamental languages compete on the same screen |
| Mixing | `constructivism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius | MDN · border-radius — asimetrik köşe (blob) sözdizimi ve sınırları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function | MDN · easing-function — viskoz eğri seçimi ve karşılaştırma |
| https://www.nngroup.com/articles/animation-duration/ | Nielsen Norman · Duration and easing — uzun yumuşak geçişlerin ne zaman kabul edilebilir olduğu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | WCAG 2.2 · Animation from Interactions — hareketin kapatılabilir olması |

## AI brief

```text
Stil: Fluid Simulation (styles/100-fluid-simulation/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="fluid-simulation"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Baloo 2 600) başlıkta, --font-body (Poppins) gövdede,
           --font-mono (Courier Prime) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; kart 28/28/28/12 (asimetrik damla), input 18px, buton-çip 999px pill;
        gölge 10px yayılımı geçmez. Blob yalnız dekoratif (blur 6px, %18, en fazla 2).
Hareket: viskoz — enter 1.4s cubic-bezier(.22,.9,.24,1) 20px / stagger 0.16;
         scroll top 72% 1.5s 34px once:true; hover 520ms scale 1.028; pin yok; bounce ve steps yasak.
Yasak: keskin köşe, metin üstünde blob, 3'ten fazla doygun renk, gradient metin, ikiden fazla hareketli blob.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Fluid Simulation (fluid-simulation) · family: Motion & Optics (96–105)
Token: --bg #eff4f3 · --surface #fbfdfc · --ink #101a1c · --accent #b8481a · --line rgba(16,26,28,.13)
Radius: 18px / 28px · Typography: Baloo 2 / Poppins / Courier Prime
Required: Kart köşeleri asimetrik: bir köşe 12px, diğerleri 28px — damla yönü okunur · Buton ve çip 999px pill; hiçbir etkileşimli öğe 4px altı radius kullanmaz · Blob katmanı yalnız dekoratif: 6px blur, %18 opaklık, metin üstünde yasak
Banned: Keskin köşe (4px altı), 90° form, kalın kontur. · Bounce/sıçrama, `steps()` hareket, hızlı (200ms altı) geçiş. · Metni blob/blur katmanının üstüne koymak.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="fluid-simulation"] {
  --bg: #eff4f3; --bg-2: #e3ecea;
  --surface: #fbfdfc; --surface-2: #f0f6f4;
  --ink: #101a1c; --ink-soft: #435452; --ink-faint: #7d8b89;
  --accent: #b8481a; --accent-ink: #fdf6f2;
  --line: rgba(16,26,28,.13);
  --danger: #d6291d;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b45300;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 18px; --radius-lg: 28px;
  --shadow: 0 2px 10px rgba(16,26,28,.08); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Poppins", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
