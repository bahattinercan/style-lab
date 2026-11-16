# 01 · Minimalism

> **In one sentence:** Fazlalığın silinmesi; hiyerarşiyi renk ve süs değil, boşluk + ölçek + ağırlık kurar.

| | |
|---|---|
| **Feeling** | sakin, pahalı sessizlik, "her şey yerli yerinde" |
| **Best for** | odak gereken araçlar, okuma, finans, not uygulamaları |
| **Avoid** | içerik zayıfsa (boşluk boşluğu büyütür), eğlence/oyun ürünleri |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Minimal (1–7) · **Token** | `kit/tokens.css` → `[data-style="minimalism"]` |
| **Composition** | `centered` · `split` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Minimalizm bir "az süs" tarifi değil, bir **karar disiplini**: her öğe ancak bir işlevi varsa ekranda kalır. Hiyerarşi üç kaldıraçla kurulur — boşluk oranı, punto zıplaması, ağırlık farkı. Renk bir süs değil, anlam taşıyıcısıdır: tek aksan rengi yalnızca *eylem* (buton, bağlantı) ve *durum* (aktif, hata) için kullanılır.

Kazandığı şey odak: kullanıcı ekranda ne yapacağını 1 saniyede görür. Feda ettiği şey karakter: marka kimliği artık tipografi, ritim ve mikro detay (odak halkası, geçiş eğrisi, 1px hairline) üzerinden taşınır.

### What is not
- **Boş sayfa değildir.** Boşluk, hiyerarşiyi taşıyacak kadar olmalı; hiyerarşi yoksa sonuç "bitmemiş" görünür.
- **Swiss Design değildir.** Swiss ızgara ve dev tipografi ile konuşur; minimalizm daha sıcak ve daha az kuralcıdır, ızgarayı görünür kılmaz.
- **Japandi değildir.** Japandi sıcak nötr + doğal doku kullanır; minimalizm nötr gri skalada kalır, doku eklemez.
- **Neumorphism değildir.** Orada yüzey kabartmayla konuşur; burada derinlik yok, katman 1px çizgiyle ayrılır.
- **"Gri + mavi buton" değildir.** Sadece paleti kopyalamak stili getirmez; ölçek (1.5×+), boşluk ritmi (8'in katları) ve tipografi disiplini gelmezse sonuç jenerik olur.

### Where it comes from
20. yüzyıl modernizmi ve Dieter Rams'ın "less but better" çizgisi; dijitalde 2010'ların "flat" dalgasından sonra, gürültülü arayüzlerin yoruculuğuna tepki olarak geri döndü. Bugün Linear/Vercel gibi araç ürünlerinde görünür: çünkü veri yoğun arayüzlerde süs, bilişsel maliyettir.

### Recognition test in 3 seconds
1. Ekranda **tek** doygun renk var mı (genelde buton), gerisi nötr mü?
2. Gölge var mı? Doğru cevap: modal/popper dışında **yok**.
3. Aynı ekranda en az iki uç punto var mı (11px etiket + 32px+ başlık)?
4. Bölümler kart içinde mi, çizgiyle mi ayrılıyor? (Doğru: çizgi/boşluk.)
5. Tüm köşe yarıçapları aynı aileden mi (8 / 12)?

## Visual signature
- **Tek vurgu rengi** (`--accent`), gerisi 5–7 tonluk nötr skala. İkinci bir aksan *yok*.
- **Gölge yok.** Yüzen katman (modal, dropdown, toast) için tek gölge: `0 1px 2px rgba(16,17,18,.06)` + 1px `--line`.
- **Süs yok:** gradient, iç gölge, blur, doku (`--grain: 0`), parlaklık yok.
- **İkon dili:** 1.5px çizgi, 20/24px kutu, yuvarlatılmış uç (round cap); dolgulu ikon yalnızca aktif durumda.
- **Hiyerarşi üç kaldıraç:** boşluk (8'in katları), punto zıplaması (en az 1.5×), ağırlık (400 / 600; 700 sadece H1).
- **Kenarlık:** 1px, `--ink`'in %10 opaklığı (`rgba(16,17,18,.10)`); daha kalın kenarlık yalnızca odak/hata durumunda.
- **Typography:** Inter (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#2563eb`; neutral scale `#fafaf9` → `#101112`.
- **Radius:** `8px` / `12px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. **Tek vurgu rengi.** `--accent` yalnızca eylem ve durum için; gerisi 5–7 tonluk nötr skala.
2. **Hiyerarşi üç kaldıraçla.** Boşluk (8'in katları) + punto zıplaması (≥1.5×) + ağırlık (400/600/700).
3. **Gölge yalnızca yüzen katmanda.** Kart ayrımı 1px `--line` ile yapılır.
4. **Ölçü disiplini.** Gövde 16px/1.6, en fazla 68ch; bölüm dikey boşluğu 80px (mobil 48px).
5. **Erişilebilirlik tabanı.** 44×44px hedef, görünür odak halkası, gövde kontrastı ≥ 4.5:1.
6. **Tek imza öğe.** Ekranda en az bir markaya ait detay: mono etiket ritmi, hairline, özel geçiş eğrisi.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#fafaf9` | page background | as a card background |
| `--bg-2` | `#f2f2f0` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f7f5` | passive chip, hover background | primary button |
| `--ink` | `#101112` | title, body, icon | large background |
| `--ink-soft` | `#5a5f66` | secondary text, description | — |
| `--ink-faint` | `#8d9298` | decorative label, separator text | interactive text |
| `--accent` | `#2563eb` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(16,17,18,.10)` | all borders | text colour |

- Measured contrast: `ink/bg` **18.1:1** · `ink-soft/bg` **6.16:1** · `ink-faint/bg` **3:1 (decorative)** · `accent-ink/accent` **5.17:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Inter) | 56px (mobile 34px) | 600 | 1.12 | -0.02em |
| H2 | same | 28px | 600 | 1.22 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.55 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.16em |
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
- Radius: `8px` (buton, input, chip), `12px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Gradient, blur, grain, iç gölge, parlaklık, glow ekleme.
- İkinci bir aksan rengi veya süsleme amaçlı renk kullanma.
- 16px üzeri köşe yarıçapı; çok katmanlı gölge.
- 18/22/26px gibi ara punto basamakları, 500 ağırlık.
- Izgarayı görünür kılan yardımcı çizgiler, sütun ayırıcı lekeler.
- İkon setini karıştırma (dolgulu + çizgi aynı ekranda).
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 8px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 8px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 8px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 8px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 8px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 8px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 8px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 5.17:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-none` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 56px başlık (2 satır), 68ch paragraf, tek birincil + bir sessiz CTA, altında 3 maddelik güven satırı | `shots/01-page.png` |
| Dashboard | düşük | Kart yerine bölüm + hairline; KPI sayısı 28px, etiketi 11px mono gri. Grafikte tek renk | `shots/01-page.png` |
| Form | düşük | Tek sütun 480px, etiket üstte 13px, input 44px, hata metni input altında 12px | `shots/01-page.png` |
| Liste / tablo | düşük | Satır 52px, sayılar mono, durum metinle (chip ikincil); zebra çizgi yok, sadece hairline | `shots/01-page.png` |
| Boş durum | orta | Tek cümle + tek buton; illüstrasyon yerine ikon veya hiçbir şey | `shots/01-page.png` |
| Onboarding | yüksek | Sayfa başına tek fikir + 2 satır açıklama; ilerleme çizgi değil nokta (3–4) | `shots/01-page.png` |
| Pricing | orta | 3 kolon, orta plan 1px `--accent` kenarlık + "önerilen" etiketi; fiyat 40px, özellikler 14px | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Stil sıfıra yakın: 400px kart, tek sütun, tek buton; ikna öğesi yok | `shots/01-page.png` |
| Modal | orta | 480–560px, başlık 20px, gövde 14px, 2 buton sağa hizalı | `shots/01-page.png` |
| Bildirim / toast | orta | Sağ üst, 4sn, ikon + tek satır; üst üste 3'ten fazla kuyruk yok | `shots/01-page.png` |
| Hata | düşük | Hata metni 14px `--ink`, altında 12px `--ink-soft` çözüm önerisi; kırmızı sadece kenarlık/ikon | `shots/01-page.png` |
| Profil / ayar | orta | Sol nav + sağ içerik 8/4 kolon; her ayar satırı 56px, açıklama 13px | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 18.1:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.16:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.17:1 | ≥ 4.5 | button text |
| focus ring/ground | 5.17:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 102.3 | ≥ 60 target | thin text |

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
| Sayfa "boş/bitmemiş" görünüyor | Boşluk var, hiyerarşi yok | En az iki uç punto (11 + 32) ve tek güçlü odak ekle |
| Her şey aynı gri, marka yok | Renk dekorasyona indirgenmiş | İmza mikro detay: hairline, özel geçiş eğrisi, mono etiket ritmi |
| Butonlar küçük, tıklanmıyor | Görsel küçüklük | 44px minimum + görünmez padding |
| Okuma yorucu | 16px gövde + 90ch satır | Satır uzunluğu 68ch, satır aralığı 1.6 |
| Kontrast kaybı | `--ink-faint` gövde metninde | `--ink-soft` kullan, faint'i sadece dekorasyonda bırak |
| Jenerik görünüm | Sadece renk değiştirilmiş | Boşluk ritmi + punto zıplaması + ağırlık farkını da uygula |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `bento-grid` | Same level of seriousness; accent sharing is not allowed |
| garnish | `japandi` | Same level of seriousness; accent sharing is not allowed |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `neumorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://linear.app | Linear — Ürün arayüzünde boşluk disiplini, hairline kullanımı |
| https://vercel.com | Vercel — Nötr palet + dev tipografi oranı |
| https://stripe.com/docs | Stripe Docs — Yoğun dokümantasyonda tablo/liste sadeliği |
| https://muji.com | MUJI — "Sessiz lüks" oranı, ürün fotoğrafı ve boşluk |
| https://developer.apple.com/design/human-interface-guidelines/layout | developer.apple.com — Dokunma hedefi ve layout temelleri |

## AI brief

```text
Stil: Minimalism (styles/01-minimalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="minimalism"]; hard-coded renk/gölge/radius YASAK.
Tipografi: Inter (--font-display) başlıkta -0.03em tracking; gövde 16/1.6; etiket 11px mono 0.14em uppercase.
Ölçek: 12/14/16/20/28/56 — ara basamak yok. Gövde max 68ch.
Yüzey: bg → surface (1px line + 0 1px 2px gölge) → yüzen katman (aynı gölge). Başka gölge yok.
Boşluk: 4/8/12/16/24/32/48/64; bölüm dikey 80px (mobil 48px); kart padding 24px.
Bileşenler: "Bileşen reçeteleri" tablosundaki ölçüler birebir; 44px hedef, 8/12px radius.
Hareket: 120–240ms ease-out, sadece opacity + 1–8px translate.
Yasak: gradient, blur, doku, ikinci aksan rengi, 16px üstü radius, gölge çeşitliliği.
Çıktı: kod + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Minimalism (minimalism) · family: Minimal (1–7)
Token: --bg #fafaf9 · --surface #ffffff · --ink #101112 · --accent #2563eb · --line rgba(16,17,18,.10)
Radius: 8px / 12px · Typography: Inter / Inter / JetBrains Mono
Required: **Tek vurgu rengi.** `--accent` yalnızca eylem ve durum için; gerisi 5–7 tonluk nötr skala. · **Hiyerarşi üç kaldıraçla.** Boşluk (8'in katları) + punto zıplaması (≥1.5×) + ağırlık (400/600/700). · **Gölge yalnızca yüzen katmanda.** Kart ayrımı 1px `--line` ile yapılır.
Banned: Gradient, blur, grain, iç gölge, parlaklık, glow ekleme. · İkinci bir aksan rengi veya süsleme amaçlı renk kullanma. · 16px üzeri köşe yarıçapı; çok katmanlı gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="minimalism"] {
  --bg: #fafaf9; --bg-2: #f2f2f0;
  --surface: #ffffff; --surface-2: #f7f7f5;
  --ink: #101112; --ink-soft: #5a5f66; --ink-faint: #8d9298;
  --accent: #2563eb; --accent-ink: #ffffff;
  --line: rgba(16,17,18,.10);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00853c;
  --ok-ink: #ffffff;
  --warn: #b95800;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 8px; --radius-lg: 12px;
  --shadow: 0 1px 2px rgba(16,17,18,.06); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
