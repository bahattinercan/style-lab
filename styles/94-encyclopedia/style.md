# 94 · Encyclopedia

> **In one sentence:** Encyclopedia

| | |
|---|---|
| **Feeling** | otoriter, yoğun, mürekkep kokulu, "kaynak" |
| **Best for** | ansiklopedi/sözlük okuma, API ve veri sözlüğü dokümantasyonu, mevzuat-terim araması, üniversite kütüphanesi kataloğu |
| **Avoid** | ürün vitrini, kampanya sayfası, oyunlaştırılmış onboarding, görsel ağırlıklı portfolyo |
| **Difficulty** | orta (yoğunluk + okunurluk dengesi) · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="encyclopedia"]` |
| **Composition** | `type` · `inline` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Encyclopedia, kaynak metnin biçimidir: **madde başı** (serif Lora 700) + **telaffuz** (mono) → **numaralı tanımlar** (1. 2. 3., mono işaret) → **çapraz referanslar** (accent `→`) → **veri sözlüğü tablosu** (alan / tip / zorunluluk / notlar). Gövde iki kolonda (26–28ch) ve 14.5px'tir: yoğunluk bilinçli, çünkü bu ekran "bir şey öğrenmek için" değil **bir şeyi doğrulamak için** açılır.

Kazandığı şey: **otorite ve taranabilirlik**. Numaralı tanımlar aynı kavramın farklı anlamlarını ayırır; mono tip kolonu veri sözlüğünü okunur kılar; accent (erik moru `#7a1f52`) yalnız yönlendirmede kullanılır. Feda ettiği şey: **görsel çekicilik** — bu stilde hiçbir görsel "kahraman" değildir; ürün veya hikâye anlatımı için uygun değildir.

### What is not
- **Editorial Design (03) değildir.** Editorial drop cap + kolon ritmiyle **anlatı** kurar (Fraunces + Inter, ölçü geniş); burada drop cap yok, madde başı + telaffuz ikilisi ve **numaralı tanımlar** var, gövde iki kolon ve 14.5px.
- **Museum & Thesis (92) değildir.** O stil 96px kenarla tek kolon uzun okuma ve `Fig.` künyeleri kurar (EB Garamond); burada kenar 64px, gövde **iki kolon**, karakter **madde başı + tanım numarası + veri tablosu**.
- **Utility (44) değildir.** Utility operasyonel hairline ve isimli metin stilleriyle çalışır (Poppins, mavi); burada serif madde başı ve erik accent var.
- **Dark Academia (33) değildir.** O stil koyu mum paletiyle atmosfer kurar; burada zemin açık krem (`#f7f5ee`) ve süs yok.
- **"İki kolonlu düz metin" değildir.** Telaffuz satırı, numaralı tanım işaretleri ve tip kolonlu tablo olmadan bu stil sadece bir blog şablonudur.

### Where it comes from
Ansiklopedi maddesi 250 yıldır aynı işi yapar: bir terimi **tanımla, numaralandır, başka terime bağla**. Basılı sözlükte kolon kuralı, madde başı kalınlığı ve çapraz referans oku okurun gözünü yönetir. Dijitalde iki dalga bu biçimi geri getirdi: (1) API/veri dokümantasyonu ("data dictionary"), (2) açık kaynak bilgi tabanları — ikisi de aynı sorunu çözer: **çok sayıda kısa tanımı taranabilir tutmak**.

Klişeye düşmemesi için korunması gereken detay: **iki kolon + mono tip kolonu**. Gövdeyi tek kolonda 100ch'e yaymak, tanım numaralarını kaldırmak veya accent'i başlıklara taşımak stili "uzun blog yazısı"na çevirir.

### Recognition test in 3 seconds
1. Madde başı **serif ve kalın** mı, hemen altında **mono telaffuz** satırı var mı?
2. Tanımlar **1. 2. 3.** mono işaretleriyle numaralı mı (madde işareti değil)?
3. Gövde **iki kolon** mu, aralarında 1px kolon kuralı var mı?
4. Bir yerde **alan / tip / zorunluluk / notlar** kolonlu veri tablosu var mı?
5. Çapraz referanslar accent **`→`** ile mi; accent ekranın ≤ %7'sinde mi, gölge hiç yok mu?

## Visual signature
- **Madde başı ikilisi:** H1 Lora 700 42px + altında mono 12px telaffuz (`/ɑːn.saɪ.kləˈpiː.di.ə/`), aralarında 8px.
- **Numaralı tanımlar:** `ol` listesi, mono 11px accent numara, 1.4em asılı girinti; madde işareti hiç yok.
- **Kolon kuralı:** gövde `columns: 2; column-gap: 32px; column-rule: 1px solid var(--line)`; mobilde tek kolon ve kural kapanır.
- **Çapraz referans:** accent mono 12px, `→ ` öneki; başlık veya gövde içinde aynı renk kullanılmaz.
- **Veri sözlüğü tablosu:** alan (mono), tip (mono accent), zorunluluk (metin), notlar (Inter 13px); başlık altı 1px `--ink`.
- **Alfabe şeridi:** landing'de üstte A–Z mono 10px .18em, aktif harf accent kutu (yalnız 1 adet).
- **Düz kâğıt:** gölge yok, radius 0, kart 1px `--line`; modal bile 2px mürekkep çerçevesiyle ayrılır.
- **Typography:** Lora (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#7a1f52`; neutral scale `#f7f5ee` → `#1a1c1a`.
- **Radius:** `0px` / `2px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Madde başı ikilisi:** serif H1 (Lora 700) + mono telaffuz satırı; madde başı tek başına bırakılmaz.
2. **Numaralı tanımlar:** her tanım `1.` `2.` mono işareti taşır; madde işareti kullanılmaz.
3. **İki kolon:** gövde `columns: 2`, kolon arası 32px ve 1px kural; 900px altında tek kolon.
4. **Çapraz referans accent:** `→` + accent mono; accent ekranın ≤ %7'si.
5. **Veri sözlüğü tablosu:** alan (mono) / tip (mono accent) / zorunluluk / notlar; başlık altı 1px `--ink`.
6. **Düz kâğıt:** gölge yok, radius 0, ayrım 1px çizgi; alfabe şeridi yalnız landing'de 1 adet.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f7f5ee` | page background | as a card background |
| `--bg-2` | `#efece1` | partition divider floor, table top | button background |
| `--surface` | `#fffcf4` | kart, input, modal | full-page background |
| `--surface-2` | `#ebe7da` | passive chip, hover background | primary button |
| `--ink` | `#1a1c1a` | title, body, icon | large background |
| `--ink-soft` | `#4a4f4a` | secondary text, description | — |
| `--ink-faint` | `#767b76` | decorative label, separator text | interactive text |
| `--accent` | `#7a1f52` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#fdf6ef` | text above accent | non-accent background |
| `--line` | `rgba(26,28,26,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.72:1** · `ink-soft/bg` **7.67:1** · `ink-faint/bg` **3.96:1 (decorative)** · `accent-ink/accent` **9.14:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Lora) | 30px (mobile 30px) | 700 | 0.98 | -0.035em |
| H2 | same | 26px | 600 | 1.08 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14.5px | 400 | 1.6 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 10.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Display 72px, line spacing 0.98; body 16/1.6. There is no midpoint — the jumping between two extremes is intentional.
- Measure: 62ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 12 columns are not visible; The title spans 8 columns, the body remains in 6 columns.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- No shadows and rounding; The only difference is the hairline and space.
- Radius: `0px` (buton, input, chip), `2px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Sans display, 52px üstü başlık, afiş ölçeği.
- Gradient, blur, cam yüzey, gölge.
- 2px üstü radius, pill buton, yuvarlak chip.
- İkinci accent; bağlantı rengi olarak mavi/yeşil.
- Numarasız tanım listesi, madde işareti, ikonlu liste.
- Gövdeyi tek kolonda 100ch'e yaymak; 16px üstü gövde puntoso.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.55:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | Alfabe şeridi + madde başı + telaffuz + ilk tanım | `shots/01-page.png` |
| Dashboard | orta | Veri sözlüğü tablosu + 3 KPI; mono tip kolonu | `shots/01-page.png` |
| Form | düşük | 44px alan, mono etiket, 2px odak halkası | `shots/01-page.png` |
| Liste / tablo | yüksek | 34px satır, alan/tip/zorunluluk/notlar | `shots/01-page.png` |
| Boş durum | düşük | "Madde bulunamadı" + `→` önerilen 3 çapraz referans | `shots/01-page.png` |
| Onboarding | orta | 3 numaralı adım; her adımda tek tanım | `shots/01-page.png` |
| Pricing | orta | 3 sütun karşılaştırma tablosu; accent yalnız zorunlu satırda | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; arama + tek accent buton | `shots/01-page.png` |
| Modal | orta | 2px mürekkep çerçeve, serif başlık + mono telaffuz | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin + 1px accent kural, 3200ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama satırı | `shots/01-page.png` |
| Profil / ayar | orta | İki kolon: mono etiket + Inter değer, 1px cetvel | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.72:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.67:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.96:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.14:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.55:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98 | ≥ 60 target | thin text |

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
| "Uzun blog yazısı" gibi | tek kolon + madde işaretli listeler | `columns: 2` + numaralı tanım (`ol` + mono sayaç) |
| Tanımlar karışıyor | numara yok, asılı girinti yok | 1.4em asılı girinti + mono numara |
| Accent her yerde | başlıklar ve gövde de erik moru | Accent yalnız numara, `→`, tip kolonu, birincil buton |
| Tablo okunmuyor | tip kolonu metinle aynı stilde | Tip kolonunu mono + accent yap |
| Gövde yoruyor | 1.4 satır aralığı, 60ch kolon | 1.6 satır aralığı, 26–28ch kolon |
| Modal "yüzüyor" | gölge eklenmiş | Gölgeyi kaldır; 2px mürekkep çerçeve + perde |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| garnish | `museum-thesis` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Encyclopedia | Encyclopedia — Wikipedia — madde başı, numaralı tanım ve çapraz referans düzeni |
| https://en.wikipedia.org/wiki/Data_dictionary | Data dictionary — Wikipedia — alan / tip / zorunluluk / notlar tablosu |
| https://www.britannica.com/ | Encyclopædia Britannica — madde başı hiyerarşisi ve telaffuz satırı |
| https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html | WCAG 2.2 · Text Spacing — iki kolonlu 14.5px gövdede satır aralığı ölçütü |

## AI brief

```text
Stil: Encyclopedia (styles/94-encyclopedia/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="encyclopedia"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: madde basi Lora 700 (H1 42px / 1.08, mobil 30px), govde Inter 400 14.5px/1.6 (<= 56ch toplam,
  kolon basina 26-28ch), telaffuz/etiket IBM Plex Mono (12px .04em / 10.5px .1em).
Yuzey: golge YOK; radius 0 (modal 2px). Kart 1px var(--line); nav ve tablo basligi 1px var(--ink).
Yerlesim: govde IKI KOLON (columns: 2, gap 32px, column-rule 1px); baslik/alfabe seridi tam genislik.
  Tanimlar 1. 2. 3. mono numarali ve 1.4em asili girintili; madde isareti yasak.
Renk: krem #f7f5ee + murekkep #1a1c1a + tek accent erik #7a1f52 (ekranin <= %7'si).
Imza: madde basi + mono telaffuz; capraz referans "-> " accent mono; veri sozlugu tablosu
  (alan mono / tip mono accent / zorunluluk / notlar); landing'de A-Z alfabe seridi (tek aktif harf accent kutu).
Hareket: enter 330ms cubic-bezier(.4,0,.3,1) 6px stagger 25ms; scroll top 89% / 420ms / 8px / once:false;
  hover 130ms imageScale 1.008; pin kapali. prefers-reduced-motion zorunlu.
Yasak: sans display, 52px ustu baslik, gradient/blur/golge, 2px ustu radius, ikinci accent,
  numarasiz tanim, tek kolonda 100ch govde, 16px ustu govde puntoso.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Encyclopedia (encyclopedia) · family: Publication & Typography (86–95)
Token: --bg #f7f5ee · --surface #fffcf4 · --ink #1a1c1a · --accent #7a1f52 · --line rgba(26,28,26,.16)
Radius: 0px / 2px · Typography: Lora / Inter / IBM Plex Mono
Required: **Madde başı ikilisi:** serif H1 (Lora 700) + mono telaffuz satırı; madde başı tek başına bırakılmaz. · **Numaralı tanımlar:** her tanım `1.` `2.` mono işareti taşır; madde işareti kullanılmaz. · **İki kolon:** gövde `columns: 2`, kolon arası 32px ve 1px kural; 900px altında tek kolon.
Banned: Sans display, 52px üstü başlık, afiş ölçeği. · Gradient, blur, cam yüzey, gölge. · 2px üstü radius, pill buton, yuvarlak chip.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="encyclopedia"] {
  --bg: #f7f5ee; --bg-2: #efece1;
  --surface: #fffcf4; --surface-2: #ebe7da;
  --ink: #1a1c1a; --ink-soft: #4a4f4a; --ink-faint: #767b76;
  --accent: #7a1f52; --accent-ink: #fdf6ef;
  --line: rgba(26,28,26,.16);
  --danger: #d72b1e;
  --danger-ink: #ffffff;
  --ok: #008239;
  --ok-ink: #ffffff;
  --warn: #b65400;
  --warn-ink: #ffffff;
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
  --font-display: "Lora", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.005em; --blur: 0px; --grain: 0;
}
```
