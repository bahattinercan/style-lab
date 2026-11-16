# 91 · Product Catalog

> **In one sentence:** Product Catalog

| | |
|---|---|
| **Feeling** | düzenli, ticari, ölçülü, "basılmış" |
| **Best for** | ürün kataloğu / B2B fiyat listesi, parça ve yedek malzeme araması, mobilya–aydınlatma mağazası, toptan sipariş ekranı |
| **Avoid** | kampanya vitrini (tek ürün kahramanlığı), oyun/etkinlik sayfası, duygusal marka hikâyesi, moda lookbook'u |
| **Difficulty** | düşük–orta (disiplin kolay, karakter zor) · **Accessibility** |  |
| **Family** | Publication & Typography (86–95) · **Token** | `kit/tokens.css` → `[data-style="product-catalog"]` |
| **Composition** | `type` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Product Catalog, kâğıt kataloğun okunma sırasını ekrana taşır: **kod → ad → ölçü → fiyat**. Ekranın işi ikna değil **bulma ve karşılaştırma**dır; bu yüzden tipografi sakin (display 44px, gövde 15.5px), renk tek (koyu çam yeşili `#16624f`), süs sıfırdır. Karakter üç ölçülebilir karardan gelir: (1) her satırda mono **kod** sütunu, (2) serif **ad** sütunu, (3) sağa dayalı mono **fiyat**; aralarında yalnız 1px `--line` cetveller.

Kazandığı şey: **karşılaştırılabilirlik**. 40 satırlık bir listede göz aynı hizada üç kez zıplar (kod, ad, fiyat), hiçbir kart "öne çıkmaya" çalışmaz. Feda ettiği şey: **vitrin etkisi** — tek ürünü büyütüp satmak için bu stil zayıftır; kampanya sayfası gerekiyorsa hero görseli başka stilden ödünç alınmalıdır (ve o zaman bu stilin hairline disiplini bozulmamalı).

### What is not
- **Editorial Design (03) değildir.** Editorial serif display + drop cap + kolon ritmiyle **anlatı** kurar; burada display sans (Space Grotesk 600), drop cap yok, ölçü 58ch ve hiyerarşi tablo sütunlarından gelir.
- **Swiss Design (02) değildir.** Swiss 12 kolonu tipografiyle doldurur, accent kırmızıdır (`#e4002b`) ve 0 radius kullanır; burada accent **çam yeşili**, radius 2/4px ve ekranın yarısı tablo satırıdır.
- **Utility (44) değildir.** Utility hairline'ı isimli metin stilleriyle birleştirir ve Poppins kullanır; burada gövde **serif** (Lora), mono kod sütunu ve swatch kareleri karakterin kendisidir.
- **Bento Grid (05) değildir.** Bento değişken boyutlu kutular ve 24px gutter kullanır; burada ızgara simetrik (2/3/4/6 sütun), gutter 20px ve kutular gölgesiz.
- **"Sadece ürün kartı ızgarası" değildir.** Kod sütunu, tabular fiyat ve katalog harfi rozeti olmadan bu stil sıradan bir e-ticaret şablonudur.

### Where it comes from
Ticari katalog 18. yy'dan beri aynı işi yapar: bir ürünü **ölçülebilir alanlara** bölmek (stok kodu, ad, ölçü, fiyat). Basılı kataloglarda sütun başlığı bir kez yazılır, sayfa boyunca hiza korunur; dijitalde bu disiplin kayboldu çünkü kartlar "beğen" odaklı büyüdü. Product Catalog, ölçü ve fiyatı geri merkeze alır: her satır aynı dört alanı taşır.

Klişeye düşmemesi için korunması gereken detay: **hairline cetveller ve mono kod sütunu**. Kartlara gölge eklemek, fiyatı ortalamak veya fotoğrafı büyütmek stili "katalog"dan "vitrin"e kaydırır.

### Recognition test in 3 seconds
1. Her satırda **mono kod** (ör. `MK-2410`) ve sağa dayalı **mono fiyat** var mı?
2. Ürün adı **serif** mi (Lora), başlıklar **sans** mı (Space Grotesk)?
3. Kartlarda **gölge yok**, ayrım 1px `--line` cetvel mi; radius ≤ 4px mi?
4. Bir yerde **katalog harfi** (A/B/C) mono accent rozet olarak duruyor mu; accent ekranın ≤ %8'i mi?
5. Fotoğraflar **kare kadraj, tek nesne, gölgesiz** mi; sayılar tabular hizalı mı?

## Visual signature
- **Dört sütun kuralı:** kod (mono, 88px sabit genişlik), ad (serif, esnek), ölçü (mono, 96px), fiyat (mono, 72px, sağa dayalı). Sütun genişlikleri breakpoint'te değişse de **hiza korunur**.
- **Hairline cetvel:** 1px `--line`; yalnız satır arası, sütun başlığı altı ve bölüm ayırıcı. Çift çizgi yok.
- **Katalog harfi rozeti:** 26×26px dolu accent kare, mono 13px `A/B/C` (mobilde 11px), landing'de sol üstte tek adet.
- **Swatch kareleri:** 40×40px, radius 1px, `inset 0 0 0 1px var(--line)`; 6'lı satır hâlinde, hover'da 1.012 ölçek.
- **Kare ürün kadrajı:** 1:1 oran, açık gri fon, tek nesne, gölge ve yansıma yok.
- **Tabular sayı:** `font-variant-numeric: tabular-nums`; ölçü (`420 × 90 × 35 mm`) ve fiyat aynı karakter genişliğinde.
- **Sessiz bölüm başlığı:** 44px display, altında 1px cetvel; dev başlık ve tam ekran hero yok.
- **Typography:** Space Grotesk (display) + Lora (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#16624f`; neutral scale `#f6f4ef` → `#1a1c19`.
- **Radius:** `2px` / `4px`; Corner 0px — in typographic essay, geometry serves the text.

## Mandatory rules

1. **Dört sütun:** her ürün satırı kod (mono) · ad (serif) · ölçü (mono) · fiyat (mono, sağa dayalı) taşır; alan eksikse "—" yazılır, sütun boş bırakılmaz.
2. **Hairline cetvel:** 1px `--line` yalnız satır arası, sütun başlığı ve bölüm ayırıcı; çift çizgi ve 2px+ cetvel yok.
3. **Accent ≤ %8:** çam yeşili yalnız katalog harfi, birincil buton, aktif sekme ve fiyat vurgusunda.
4. **Tabular sayı:** ölçü ve fiyat `tabular-nums`; hiza her satırda korunur.
5. **Kare kadraj:** ürün fotoğrafı 1:1, tek nesne, gölgesiz; kadraj içinde zoom animasyonu yok.
6. **Ritim:** bölüm 72/44px, kart padding 20px, ürün arası 20px — üçü birlikte katalog yoğunluğunu kurar.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f6f4ef` | page background | as a card background |
| `--bg-2` | `#eeeae0` | partition divider floor, table top | button background |
| `--surface` | `#fffdf8` | kart, input, modal | full-page background |
| `--surface-2` | `#e9e4d8` | passive chip, hover background | primary button |
| `--ink` | `#1a1c19` | title, body, icon | large background |
| `--ink-soft` | `#4b5148` | secondary text, description | — |
| `--ink-faint` | `#767c72` | decorative label, separator text | interactive text |
| `--accent` | `#16624f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7f3e8` | text above accent | non-accent background |
| `--line` | `rgba(26,28,25,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.61:1** · `ink-soft/bg` **7.43:1** · `ink-faint/bg` **3.9:1 (decorative)** · `accent-ink/accent` **6.54:1**.
- Two colors are enough: ground and ink. Accent is just a word of connection and emphasis.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Grotesk) | 30px (mobile 30px) | 700 | 0.98 | -0.035em |
| H2 | same | 26px | 600 | 1.08 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Lora) | 15.5px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0px — in typographic essay, geometry serves the text.

## Bans

- Gradient, blur, cam yüzey, ürün fotoğrafında renk filtresi.
- İkinci accent (indirim turuncusu, "yeni" kırmızısı); durum bilgisi metinle verilir.
- 4px üstü radius, pill buton, yuvarlak avatar.
- 70px üstü dev başlık, tam ekran hero görseli, tam ekran kampanya bloğu.
- Orantısız sayı, ortalanmış fiyat, ortalanmış tablo başlığı.
- Kartlarda gölge ile derinlik; zemin ile kart arasında gradient ton farkı.
- Third font family.
- Shadow/bevel in title.
- uppercase in body text.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.14:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 16px; same weight as text |
| photo | Only when necessary; supports text, does not compete |
| illustration | Can be used as typographic sign |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 44px başlık + alt cetvel; hero görseli yerine 4 ürün kartı | `shots/01-page.png` |
| Dashboard | orta | KPI + son eklenen ürün tablosu; mono sayılar | `shots/01-page.png` |
| Form | düşük | 40px alanlar, 1px radius, açıklama mono | `shots/01-page.png` |
| Liste / tablo | yüksek | 36px satır, dört sütun, zebra yok | `shots/01-page.png` |
| Boş durum | düşük | Mono kod + tek cümle + "filtreyi temizle" | `shots/01-page.png` |
| Onboarding | orta | 3 adım: kategori → ölçü → fiyat aralığı | `shots/01-page.png` |
| Pricing | orta | 3 sütun fiyat tablosu; accent yalnız önerilen sütun başlığı | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Süs sıfır; alan + tek accent buton | `shots/01-page.png` |
| Modal | orta | 4px radius, üstte mono kod başlığı | `shots/01-page.png` |
| Bildirim / toast | orta | Koyu zemin + 6px accent kare, 3000ms | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + mono açıklama satırı | `shots/01-page.png` |
| Profil / ayar | orta | İki kolon: etiket (mono) + değer (serif), 1px cetveller | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.61:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.43:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.9:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.54:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.14:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 97.5 | ≥ 60 target | thin text |

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
| "Sıradan e-ticaret" görünüyor | kartlara gölge + büyük görsel eklenmiş | Gölgeyi kaldır, görseli 1:1 kareye al, kod sütununu geri getir |
| Tablo sütunları kayıyor | orantılı sayı ve esnek genişlik | `tabular-nums` + sabit sütun genişliği (88/96/72px) |
| Fiyat gözden kaçıyor | fiyat `--ink-soft` veya sola dayalı | Fiyatı sağa daya, `--ink` + mono 13px |
| Renkli rozetler çoğalmış | stok/hata/indirim renklenmiş | Durumu metinle yaz; accent yalnız katalog harfi ve birincil eylem |
| Başlık ürünün önüne geçiyor | 60px+ display | 44px'e indir, altına 1px cetvel |
| Koyu modda accent kayboluyor | koyu çam yeşili kullanılmış | `--accent` koyu temada `#5fb39c` |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Product_catalog | Product catalog — Wikipedia — kod/isim/fiyat sütun düzeni ve katalog harfi geleneği |
| https://www.vam.ac.uk/ | V&A · Trade catalogues — basılı ticari katalog sayfa oranları, swatch kullanımı |
| https://store.moma.org/ | MoMA Design Store — ürün kartı hiyerarşisi, ölçü/fiyat yerleşimi |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 · Target Size (Minimum) — 40px buton ve satır içi eylem hedefi |

## AI brief

```text
Stil: Product Catalog (styles/91-product-catalog/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="product-catalog"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Space Grotesk 600 (H1 44px / -0.01em, mobil 30px), govde + urun adi Lora 400 15.5/1.66 (<= 58ch),
  kod/olcu/fiyat IBM Plex Mono 13px tabular-nums, etiket mono 11px .12em.
Yuzey: golge YOK; kart 1px var(--line) + radius 2px (modal 4px). Derinlik yalniz hairline cetvel.
Yerlesim: 12 kolon, gutter 20px, container 1180px. Her urun satiri DORT alan: kod (mono 88px) -
  ad (Lora, esnek) - olcu (mono 96px) - fiyat (mono 72px, saga dayali). Zebra yok.
Renk: kagit #f6f4ef + murekkep #1a1c19 + tek accent cam yesili #16624f (ekranin <= %8'i).
Imza: katalog harfi rozeti (26px dolu accent kare, mono A/B/C); 1px cetveller; 40x40px swatch kareleri;
  1:1 golgesiz urun kadraji; sag kenarda hero'da 1px dikey cetvel.
Hareket: enter 460ms cubic-bezier(.18,.86,.24,1) 8px stagger 35ms; scroll top 87% / 580ms / 10px / once;
  hover 170ms imageScale 1.012; pin kapali. prefers-reduced-motion zorunlu.
Yasak: gradient/blur/cam, ikinci accent, 4px ustu radius, 70px ustu baslik, tam ekran hero,
  orantisiz sayi, ortalanmis fiyat, kart golgesi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).

Style: Product Catalog (product-catalog) · family: Publication & Typography (86–95)
Token: --bg #f6f4ef · --surface #fffdf8 · --ink #1a1c19 · --accent #16624f · --line rgba(26,28,25,.16)
Radius: 2px / 4px · Typography: Space Grotesk / Lora / IBM Plex Mono
Required: **Dört sütun:** her ürün satırı kod (mono) · ad (serif) · ölçü (mono) · fiyat (mono, sağa dayalı) taşır; alan eksikse "—" yazılır, sütun boş bırakılmaz. · **Hairline cetvel:** 1px `--line` yalnız satır arası, sütun başlığı ve bölüm ayırıcı; çift çizgi ve 2px+ cetvel yok. · **Accent ≤ %8:** çam yeşili yalnız katalog harfi, birincil buton, aktif sekme ve fiyat vurgusunda.
Banned: Gradient, blur, cam yüzey, ürün fotoğrafında renk filtresi. · İkinci accent (indirim turuncusu, "yeni" kırmızısı); durum bilgisi metinle verilir. · 4px üstü radius, pill buton, yuvarlak avatar.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="product-catalog"] {
  --bg: #f6f4ef; --bg-2: #eeeae0;
  --surface: #fffdf8; --surface-2: #e9e4d8;
  --ink: #1a1c19; --ink-soft: #4b5148; --ink-faint: #767c72;
  --accent: #16624f; --accent-ink: #f7f3e8;
  --line: rgba(26,28,25,.16);
  --danger: #d72a1e;
  --danger-ink: #ffffff;
  --ok: #008138;
  --ok-ink: #ffffff;
  --warn: #b55400;
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
  --shadow: 0 1px 2px rgba(26,28,25,.08); --shadow-hard: none;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Lora", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
