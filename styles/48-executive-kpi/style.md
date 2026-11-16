# 48 · Executive KPI

> **In one sentence:** Dört sayının bir hairline kâğıda yerleştiği, her sayının yanında tek satır yorum taşıdığı yönetici özeti raporu.

| | |
|---|---|
| **Feeling** | sakin, otoriter, ölçülü, "bitmiş karar" |
| **Best for** | yönetici KPI özeti, yatırımcı güncellemesi, yönetim kurulu raporu, çeyrek sonu paneli |
| **Avoid** | operasyon/on-call ekranı (veri tazeliği yetmez), oyun/etkinlik, yoğun tablo uygulaması |
| **Difficulty** | düşük · **Accessibility** |  |
| **Family** | Data & Indicator (46–55) · **Token** | `kit/tokens.css` → `[data-style="executive-kpi"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Executive KPI, bir dönemin sonucunu **tek ekranda karar verdirecek** biçimde sunan rapordur: en fazla dört sayı, her sayının yanında dönem etiketi ve tek cümlelik yorum, altında iki destek grafiği. Süsü feda eder; karşılığında üç şey kazanır — otorite (kalın serif başlık, hairline kural, gölgesiz kâğıt), hız (dört sayı 2 saniyede okunur), izlenebilirlik (her sayının kaynağı dipnotta).

Kurucu kararları üç tanedir. Birincisi **kâğıt tek katman**: kart gölgesi yoktur; KPI bloğu üstündeki 1px accent kural onu "başlıklı bölüm" yapar. İkincisi **sayı serif**: 64px Fraunces, tabular hizalı; rapor dilinde sayı bir tipografi kararıdır, bir widget değildir. Üçüncüsü **boşluk bütçesi**: bölümler arası 80px, gutter 32px, kart padding 24px — içerik azaltılarak değil, nefes verilerek sakinleşir.

Bedeli: veri tazeliği düşüktür ve çok sayıda metrik gösterilemez. Kazancı: yöneticinin ekranda kalma süresi 20 saniyenin altına iner.

### What is not
- **Telemetry Grid (46) değildir:** 46 on iki tile, 96px yükseklik, saniyede yenilenen veri; 48 dört KPI, 64px serif rakam, günlük/çeyreklik dönem.
- **Utility (44) değildir:** 44 Poppins sans, 8/12px radius ve mavi accent kullanır; 48 Fraunces serif, 0–3px radius ve orman yeşili.
- **Editorial Design (03) değildir:** 03 anlatı ve drop cap ile uzun metin kurar; 48'de metin en fazla üç paragraf, geri kalanı sayı ve kuraldır.
- **Minimalism (01) değildir:** 01 sıcak beyaz + Inter + 12px radius ile "sakin ürün"tür; 48 kırık beyaz (#faf7f1) + serif + 0px radius ile "basılı rapor"dur.

### Where it comes from
Yönetim kurulu raporu ve yatırımcı mektubu geleneğinden: sayfa başına tek iddia, tipografik hiyerarşi, hairline cetvel, dipnot. 2010'ların "executive dashboard" pratiği bunu ekrana taşıdı ama çoğu zaman widget'laştırdı; bu stil widget'ı reddedip kâğıt disiplinini korur. Klişeye dönüşmemesi için korunacak detay: **gölgenin hiç eklenmemesi** ve her KPI'nın tek cümle yorum taşıması.

### Recognition test in 3 seconds
1. Ekranda en fazla dört büyük serif sayı var ve her birinin üstünde 1px accent kural duruyor.
2. Hiçbir kartta gölge yok; ayrım yalnız 1px hairline.
3. Köşeler neredeyse kare (0–3px); butonlar uzun ve ince yazılı (48px, büyük harf, .08em).
4. Grafikler dolgusuz, 1.5px çizgi, en çok üç seri; eksen etiketi küçük mono.
5. Sol kenarda geniş beyaz boşluk var; bölümler 80px ritimle ayrılıyor.

## Visual signature
- **KPI bloğu:** üstte `1px solid var(--accent)` kural, ortada 64px Fraunces `tabular-nums`, altta 12px mono delta (`↑ %4,2`).
- **Kâğıt tek katman:** hiçbir yüzeyde gölge yok; `--shadow: none`, yüzen katman bile 2px offset çizgiyle ayrılır.
- **Hairline kural:** `1px solid var(--line)`; bölüm başlığı altında tam genişlik, tablo satırları arasında tam genişlik.
- **Boşluk ritmi:** bölümler arası 80px (mobil 48px), grid gutter 32px, kart padding 24px.
- **Grafik dili:** 1.5px çizgi, 1px hairline ızgara, dolgu yok, en çok 3 seri; accent yalnız ana seride.
- **Tipografik kontrast:** serif display (400) + geometrik sans gövde (400/500) + mono etiket; aynı ekranda üç aile, üç iş.
- **Hover dili:** yavaş ve ölçülü — 320ms'de zemin `--surface-2`'e kayar, görsel ölçek `1.030`; gölge eklenmez.
- **Typography:** Fraunces (display) + Jost (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#2b5c46`; neutral scale `#faf7f1` → `#171614`.
- **Radius:** `0px` / `3px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Ekran başına en fazla 4 KPI; her KPI tek cümlelik yorumla birlikte durur
2. KPI rakamı 64px Fraunces + tabular-nums; yanında daima dönem etiketi (örn. `2026 Q1`)
3. Delta daima üç kanaldan: ↑↓ işareti + `--ok`/`--danger` + yüzde metni
4. Boşluk 80px bölüm ritmi; gutter 32px; radius en fazla 3px
5. Her grafik 1.5px çizgi, dolgu yok, en çok 3 seri; eksen etiketi 11px mono
6. Sayı kaynağı dipnotta yazılır (`Kaynak: …`), uydurma veri yok

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#faf7f1` | page background | as a card background |
| `--bg-2` | `#f3eee5` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f3ec` | passive chip, hover background | primary button |
| `--ink` | `#171614` | title, body, icon | large background |
| `--ink-soft` | `#51544b` | secondary text, description | — |
| `--ink-faint` | `#86897e` | decorative label, separator text | interactive text |
| `--accent` | `#2b5c46` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6f7f2` | text above accent | non-accent background |
| `--line` | `rgba(23,22,20,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.91:1** · `ink-soft/bg` **7.22:1** · `ink-faint/bg` **3.33:1 (decorative)** · `accent-ink/accent` **7.17:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Fraunces) | 44px (mobile 30px) | 600 | 1.12 | -0.02em |
| H2 | same | 26px | 600 | 1.22 | -0.015em |
| H3 | same | 19px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.16em |
| Button | `--font-body` | 12px | 600 | 1 | 0 |

- Dense display: 14px body, 13px table, 10.5px mono label. The line height cannot be lower than 1.55.
- Measure: 72ch (reading text), card text at most 52ch.
- Headings are in sentence order (no uppercase); uppercase only on mono tags.

## Grid and space

| Item | Value |
| --- | --- |
| Columns | 12 (content 8, form 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1160px |
| Gap scale | 4 · 8 · 12 · 16 · 20 · 28 · 40 · 56 (`--space-1…8`) |
| Breakpoint | 640 / 900 / 1200 px |

- 8 columns of content + 4 columns of panels; tables full width. In-card padding 16px, line 40px.
- Section vertical space 44px desktop, 28px mobile; card padding 16px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Surfaces are smooth; separation with 1px edge and background tone. Reference line in graphs --line.
- Radius: `0px` (buton, input, chip), `3px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Kart gölgesi, 3px üstü radius, cam yüzey, gradient.
- Renkli KPI zeminleri; dört KPI'yı dört renge boyamak.
- Pasta grafik, 3B grafik, dolgulu alan grafiği.
- Sayaç/rulo animasyonu, bounce, parallax.
- Kalın serif (700+) veya italik başlık; gradient metin.
- Uydurma veri/dönem; eksik sayı `{{value}}` gibi işaretli yer tutucu olur.
- Gradient for decoration.
- More than five color series.
- Animated counter.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.71:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-paper` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | düşük | 44px serif başlık + tek paragraf + 4 KPI şeridi | `shots/01-page.png` |
| Dashboard | düşük | 4 KPI + 7/5 yorum + dolgusuz çizgi grafik | `shots/01-page.png` |
| Form | düşük | alt çizgili 48px alanlar, tek kolon | `shots/01-page.png` |
| Liste / tablo | düşük | 44px satır, ilk sütun serif, sayılar sağa dayalı | `shots/01-page.png` |
| Boş durum | orta | "dönem seçilmedi" + tek cümle + tek CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: veri kaynağı → dönem → ilk özet | `shots/01-page.png` |
| Pricing | orta | 3 plan, hairline ayırıcı, sayılar serif | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | tek kolon, 48px alanlar, alt çizgi | `shots/01-page.png` |
| Modal | orta | dönem karşılaştırması, 32px padding | `shots/01-page.png` |
| Bildirim / toast | orta | alt orta, sessiz, sol 1px durum çizgi | `shots/01-page.png` |
| Hata | düşük | "veri gecikmeli" uyarısı + kaynak dipnotu | `shots/01-page.png` |
| Profil / ayar | orta | rapor sıklığı, alıcı listesi; iki kolon | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.91:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.22:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.33:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.17:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.71:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.2 | ≥ 60 target | thin text |

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
| Sayfa "dashboard"a dönüyor | KPI sayısı 4'ü geçmiş, gölge eklenmiş | 4 KPI'da kal, gölgeyi sil, ritmi 80px'e çıkar |
| Rapor "eski" görünüyor | serif 700 + 12px radius + gradient | serif 400, radius 0–3px, gradient yok |
| Sayılar hiyerarşiyi taşımıyor | delta ve KPI aynı puntoda | KPI 64px, delta 12px mono |
| Koyu modda ağırlık kayboluyor | accent koyulaştırılmış | accent'i açık adaçayına çevir, hairline'ı .16 yap |
| Yorum metni okunmuyor | `--ink-faint` etkileşimli metinde | yorum için `--ink-soft` kullan |
| Grafik gürültülü | 3'ten fazla seri, dolgu var | seriyi 2–3'e indir, dolguyu sil |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `telemetry-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://www.edwardtufte.com/tufte/books_vdqi | Edward Tufte · The Visual Display of Quantitative Information — data-ink oranı, gereksiz ızgara ve mürekkep eleme |
| https://www.nngroup.com/articles/dashboard-design/ | Nielsen Norman · Dashboard design — KPI sayısı, özet → detay sırası |
| https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html | WCAG 2.2 · Target Size (Minimum) — 48px buton ve 44px tablo satırı hedefi |
| https://fonts.google.com/specimen/Fraunces | Google Fonts · Fraunces — optical size ve 400 ağırlıkta display davranışı |

## AI brief

```text
Stil: Executive KPI (styles/48-executive-kpi/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="executive-kpi"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 400) başlık ve KPI rakamında, --font-body (Jost) gövdede,
           --font-mono (IBM Plex Mono) etiket/dipnotta.
Yüzey: tek katman kâğıt — gölge YOK; ayrım 1px --line ve KPI üstünde 1px --accent kural.
Bileşen: "Bileşen reçeteleri" birebir; buton 48px/0px radius, input alt çizgili, tablo satırı 44px.
Izgara: gutter 32px, container 1160px, bölüm ritmi 80px (mobil 48px), 4 KPI tek satır.
Hareket: enter 0.95s cubic-bezier(.65,0,.35,1) 30px / stagger 0.11; scroll top 78% 1.05s 36px once:true;
         hover 320ms scale 1.030; pin yok. prefers-reduced-motion zorunlu, sayaç animasyonu yasak.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (gölge, pasta grafik, renkli KPI zemini).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Executive KPI (executive-kpi) · family: Data & Indicator (46–55)
Token: --bg #faf7f1 · --surface #ffffff · --ink #171614 · --accent #2b5c46 · --line rgba(23,22,20,.14)
Radius: 0px / 3px · Typography: Fraunces / Jost / IBM Plex Mono
Required: Ekran başına en fazla 4 KPI; her KPI tek cümlelik yorumla birlikte durur · KPI rakamı 64px Fraunces + tabular-nums; yanında daima dönem etiketi (örn. `2026 Q1`) · Delta daima üç kanaldan: ↑↓ işareti + `--ok`/`--danger` + yüzde metni
Banned: Kart gölgesi, 3px üstü radius, cam yüzey, gradient. · Renkli KPI zeminleri; dört KPI'yı dört renge boyamak. · Pasta grafik, 3B grafik, dolgulu alan grafiği.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="executive-kpi"] {
  --bg: #faf7f1; --bg-2: #f3eee5;
  --surface: #ffffff; --surface-2: #f7f3ec;
  --ink: #171614; --ink-soft: #51544b; --ink-faint: #86897e;
  --accent: #2b5c46; --accent-ink: #f6f7f2;
  --line: rgba(23,22,20,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
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
  --radius: 0px; --radius-lg: 3px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Fraunces", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.005em; --blur: 0px; --grain: 0;
}
```
