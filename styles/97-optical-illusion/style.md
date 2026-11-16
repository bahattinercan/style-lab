# 97 · Optical Illusion

> **In one sentence:** Kenarları keskinleştirip desen frekansını yükselterek gözü yanıltan, ama hiçbir desenini hareket ettirmeyen statik optik stil.

| | |
|---|---|
| **Feeling** | keskin, zihinsel, gergin, "bakınca kayıyor" |
| **Best for** | sanat/kültür etkinliği vitrini, ajans portfolyosu, sergi kataloğu, editoryal özel sayı |
| **Avoid** | uzun okuma, sağlık/kamu formu, epilepsi/baş ağrısı hassasiyeti olan kullanıcılar için zorunlu ekranlar |
| **Difficulty** | yüksek (illüzyonu güvenli tutmak) · **Accessibility** |  |
| **Family** | Motion & Optics (96–105) · **Token** | `kit/tokens.css` → `[data-style="optical-illusion"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Optical Illusion, algıyı **frekans ve açı** ile bozan stildir: iki çizgi ızgarasının 1–3° çakışmasıyla **moiré**, 4px **yarım ton** nokta ızgarası, 2px değişimli **kenar bandı** ve ekran başına tek **şekil-zemin** paneli. Kurucu kararları üç tanedir. Birincisi **keskinlik**: radius 0, gölge yok, blur yok — illüzyon ancak keskin kenarda çalışır. İkincisi **statik desen**: desen hareket etmez; hareket yalnız geçişlerde (0.34s giriş, 90ms hover) bulunur. Üçüncüsü **tek illüzyon odağı**: ekranda bir desen başroldedir, diğerleri %6–8 opaklıkla geri çekilir.

Kazandığı şey: **bakışı tutma** — bir moiré paneli, aynı alandaki 6 karttan daha uzun süre bakılır. Feda ettiği şey: **konfor**; bu yüzden stilin en sert kuralı desenin animasyonsuz kalmasıdır (WCAG "three flashes" eşiği).

### What is not
- **Anti-Design (14) değildir:** 14 bilinçli kırık hiza ve karışık tipografiyle kaos kurar; burada her şey ızgarada, kaos yalnız **desen katmanında** ve kontrollü.
- **Kinetic Marquee (96) değildir:** 96 hareketle (marquee, skew) çalışır; 97 **hareketsiz** çalışır — deseni hareket ettirmek stilin ihlalidir.
- **Constructivism (36) değildir:** 36 kalın çerçeve + kırmızı-siyah bloklarla **propaganda** kompozisyonu kurar; burada çerçeve 1–2px ve ana araç **frekans/optik kayma**.
- **Swiss Design (02) değildir:** 02 ızgarayı görünmez kılar; burada ızgara **görünür ve yanıltıcıdır** (moiré + yarım ton).
- **"Retro tarama efekti" değildir:** CRT tarama çizgisi statik bir doku değil taklit; burada desen ölçülü (1px/6px, 4px nokta) ve işlevseldir.

### Where it comes from
Op-art (Vasarely, Riley) 1960'larda izleyicinin gözünü desenin içinde "kaydırarak" sanat yaptı; baskıda moiré uzun süre bir **hata** sayıldı, sonra bilinçli estetik oldu. Dijitalde CSS `repeating-linear-gradient` + `rotate` ile iki ızgara çakıştırılarak yeniden üretilebiliyor. Klişeye dönüşmemesi için korunacak detay: **açı farkının 1–3° ile sınırlı kalması** ve desenin asla animasyonlanmaması.

### Recognition test in 3 seconds
1. En az bir panelde iki çizgi ızgarası hafif açıyla çakışıyor (moiré).
2. Köşeler tamamen keskin; hiçbir yüzeyde gölge yok.
3. Yüksek kontrast siyah/beyaz + tek kırmızı-magenta vurgu.
4. Bir köşede 4px nokta ızgarası ya da 2px değişimli kenar bandı var.
5. Hiçbir desen hareket etmiyor — hareket yalnız hover ve geçişlerde.

## Visual signature
- **Moiré:** iki `repeating-linear-gradient` ızgara, ikincisi `rotate(2deg)`; en çok **1** panelde, `%72` opaklık.
- **Yarım ton:** `4px 4px` nokta ızgarası, kart köşesinde 32×32 blok, `%55` opaklık.
- **Kenar bandı:** 2px siyah / 2px boşluk değişimi; nav altı 8px yükseklik (statik).
- **Keskinlik:** `--radius: 0px`, `--radius-lg: 0px`, `--shadow: none`; hiçbir yüzeyde yuvarlaklık yok.
- **Şekil-zemin:** en çok 1 panel; iki daire + çizgi ızgarası, `%8` zemin dokusu.
- **Archivo Black display:** 44px, `-0.01em`; gövde Inter 15px/1.6, etiket Space Mono.
- **Hover dili:** 90ms'de zemin siyah → accent'e kırılır; görsel ölçek `1.045` (desen büyür, kaymaz).
- **Typography:** Archivo Black (display) + Inter (body) + Space Mono (mono label).
- **Colour discipline:** a single accent `#b8123f`; neutral scale `#fbfbfb` → `#0a0a0a`.
- **Radius:** `0px` / `0px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Desenler statiktir: moiré, yarım ton ve kenar bandı hiç animasyonlanmaz
2. Moiré yalnız iki çizgi ızgarasının 1–3° çakışmasıyla; en çok 1 panelde
3. Yarım ton nokta ızgarası 4px; kenar bandı 2px değişimli
4. Radius her yerde 0px; gölge hiçbir yüzeyde yok
5. Ekran başına en fazla 1 şekil-zemin (figure-ground) paneli
6. Tipografi keskin: Archivo Black display, Inter gövde, Space Mono etiket

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fbfbfb` | page background | as a card background |
| `--bg-2` | `#f1f1f1` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f4f4f4` | passive chip, hover background | primary button |
| `--ink` | `#0a0a0a` | title, body, icon | large background |
| `--ink-soft` | `#464646` | secondary text, description | — |
| `--ink-faint` | `#8a8a8a` | decorative label, separator text | interactive text |
| `--accent` | `#b8123f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(10,10,10,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **19.13:1** · `ink-soft/bg` **9.12:1** · `ink-faint/bg` **3.34:1 (decorative)** · `accent-ink/accent` **6.57:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Archivo Black) | 44px (mobile 28px) | 500 | 1.06 | -0.02em |
| H2 | same | 26px | 600 | 1.18 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 15px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Space Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `0px` (buton, input, chip), `0px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Animasyonlu veya hafif titreyen desen; saniyede 3'ten fazla ton değişimi.
- Gradient, gölge, blur, yuvarlak köşe.
- Üçten fazla kontrast desenini aynı ekranda birleştirmek.
- Deseni accent rengiyle çizmek.
- Tam kanamalı fotoğraf; CRT tarama çizgisi taklidi.
- Desenü metnin arkasına koymak.
- Uydurma sanatçı/sergi adı; eksik içerik `{{work}}` gibi işaretli yer tutucu olur.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.57:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 8/4: moiré paneli + 44px display | `shots/01-page.png` |
| Dashboard | orta | 2 kart (biri yarım ton köşeli) + 3 serili grafik | `shots/01-page.png` |
| Form | düşük | 42px keskin alanlar, desen yalnız üstte | `shots/01-page.png` |
| Liste / tablo | orta | 38px satır, %4 zebra, mono sayı | `shots/01-page.png` |
| Boş durum | orta | boş yarım ton blok + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım, her adımda tek illüzyon | `shots/01-page.png` |
| Pricing | orta | 3 keskin kart, orta kart 2px accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | desen yok, yalnız keskin form | `shots/01-page.png` |
| Modal | orta | 2px ink çerçeve + 8px bant | `shots/01-page.png` |
| Bildirim / toast | orta | sol 8px bant, animasyonsuz | `shots/01-page.png` |
| Hata | düşük | desen durur/kaldırılır, mesaj `--danger` çerçeve | `shots/01-page.png` |
| Profil / ayar | orta | "desen yoğunluğu: azalt" anahtarı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 19.13:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.12:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.34:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.57:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.57:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 103.4 | ≥ 60 target | thin text |

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
| Baş ağrısı / okunamıyor | desen metnin arkasında veya animasyonlu | deseni metinden ayır, animasyonu kaldır |
| "Retro efekt" gibi duruyor | desen çok yoğun (2px altı aralık) | 4–6px aralık ve %55–72 opaklıkta kal |
| Ekran kirli görünüyor | 3'ten fazla desen katmanı | 2 katmana indir, birini %8'e düşür |
| Moiré görünmüyor | iki ızgara aynı hizada | ikinci ızgarayı 1–3° döndür ve aralığı 1px farklılaştır |
| Yumuşak görünüyor | radius veya gölge eklenmiş | 0px ve gölgesize dön |
| Vurgu kayboluyor | desen accent ile çizilmiş | desen `--ink`, vurgu yalnız kırılma/odak |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `anti-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `constructivism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `liquid-glass` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Moir%C3%A9_pattern | Wikipedia · Moiré pattern — ızgara açısı ve desen frekansı ilişkisi |
| https://en.wikipedia.org/wiki/Figure%E2%80%93ground_organization | Wikipedia · Figure–ground organization — şekil-zemin panelinin algı kuralı |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | WCAG 2.2 · Three Flashes or Below Threshold — titreyen desen yasağının ölçütü |
| https://fonts.google.com/specimen/Archivo+Black | Google Fonts · Archivo Black — tek ağırlıklı display ve keskin harf formu |

## AI brief

```text
Stil: Optical Illusion (styles/97-optical-illusion/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="optical-illusion"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black) başlıkta, --font-body (Inter) gövdede,
           --font-mono (Space Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 0px (istisna yok), gölge YOK, blur YOK.
Desen: moire (iki izgara, 1-3 derece) en fazla 1 panelde; yarim ton 4px nokta; kenar bandi 2px/2px.
       Desenler STATIK — animasyon ve flicker yasak; metin asla desen uzerinde degil.
Imza: enter 0.34s cubic-bezier(.9,0,.1,1) 18px / stagger 0.06; scroll top 82% 0.28s 8px once:false;
      hover 90ms scale 1.045; pin yok.
Yasak: animasyonlu desen, gradient/golge/blur/radius, deseni accent ile cizmek, 3'ten fazla desen katmani.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Optical Illusion (optical-illusion) · family: Motion & Optics (96–105)
Token: --bg #fbfbfb · --surface #ffffff · --ink #0a0a0a · --accent #b8123f · --line rgba(10,10,10,.12)
Radius: 0px / 0px · Typography: Archivo Black / Inter / Space Mono
Required: Desenler statiktir: moiré, yarım ton ve kenar bandı hiç animasyonlanmaz · Moiré yalnız iki çizgi ızgarasının 1–3° çakışmasıyla; en çok 1 panelde · Yarım ton nokta ızgarası 4px; kenar bandı 2px değişimli
Banned: Animasyonlu veya hafif titreyen desen; saniyede 3'ten fazla ton değişimi. · Gradient, gölge, blur, yuvarlak köşe. · Üçten fazla kontrast desenini aynı ekranda birleştirmek.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="optical-illusion"] {
  --bg: #fbfbfb; --bg-2: #f1f1f1;
  --surface: #ffffff; --surface-2: #f4f4f4;
  --ink: #0a0a0a; --ink-soft: #464646; --ink-faint: #8a8a8a;
  --accent: #b8123f; --accent-ink: #ffffff;
  --line: rgba(10,10,10,.12);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00863d;
  --ok-ink: #ffffff;
  --warn: #bb5800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
