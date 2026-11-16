# 43 · Grand Tourer Midnight

> **In one sentence:** Grand Tourer'ın gece varyantı: krem kokpit aynı kalır, nötrler maviye kayar ve vurgu gece mavisine döner — gündüz krem, gece koyu lacivert; iki zaman diliminde de aynı krom disiplini.

| | |
|---|---|
| **Feeling** | serin, mesafeli, gece sürüşü, "randevuyla görüşülür" |
| **Best for** | üst segment konut/rezidans, özel havacılık/yat, hukuk-danışmanlık, saat/mücevher, kurumsal premium vitrin |
| **Avoid** | sıcak/aile markaları (çocuk, yemek, düğün), indie/topluluk ürünü, hızlı tüketim kampanyası, oyun |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Timeless (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer-midnight"]` |
| **Composition** | `fullbleed` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Midnight, **Grand Tourer (41) sisteminin soğuk palet varyantıdır**: tipografi, ızgara, krom kenar, kadran, koç çizgisi ve tüm bileşen ölçüleri birebir aynıdır. Değişen: vurgu **gece mavisi** `#1b2e4a`, nötrler **mavi-siyaha** kayar (`--ink #171b23`), zemin bir tık serinler (`#f1ece2`). Sonuç: krem deri değil "gece yarısı deri + krom" okuması.

Kazandığı şey: **mesafe ve prestij**. Lacivert, lüksün en nötr rengidir: düğün de davet eder, banka da; bu yüzden kurumsal premium vitrinlerde en güvenli varyanttır. Feda ettiği şey: **sıcaklık**. Bordo (42) ve yeşil (41) "davet" hissi verirken lacivert "randevu" verir; aile/yaşam markalarında soğuk kalır. Ayrıca lacivert, ekranda siyaha çok yaklaştığı için `--ink` ile karıştırılmamalı: **vurgu lacivert, metin mavi-siyah** — ikisi asla aynı tonda olmaz.

### What is not
- **Grand Tourer (41) değildir** — sistem aynı, palet farklı: uyum ve ölçüler eş, sıcaklık ve vurgu farklı.
- **Glassmorphism / Aurora (08, 12) değildir.** Onlar blur ve gradyan ışıkla "teknoloji" kurar; burada `--blur: 0`, opak krem kart ve 1px krom.
- **Cyberpunk (22) değildir.** Neon, glow ve mono gövde yok; lacivert düşük doygunlukta, gövde Jost.
- **Swiss Design (02) değildir.** Swiss kurumsal soğukluğu ızgara ve 0 radius ile kurar; burada krom parlama, kadran ve serif büyük harf var.

### Where it comes from
Gece mavisi, 1960'ların "midnight blue" araba boyalarından ve gece kulüplerinin/özel bankaların lacivert üniforma geleneğinden gelir; dijitalde premium SaaS'ın "dark navy" furyasıyla yeniden popülerleşti. Klişeye düşmemesi için korunması gereken detay: **krem zemin** — laciverti siyah zemine alırsanız stil Cyberpunk/Scandinavian Dark bölgesine kayar; bu stil gece mavisini **aydınlık krem** üstünde taşır.

### Recognition test in 3 seconds
1. Zemin krem mi (`#f1ece2`), vurgu tek **gece mavisi** mi (`#1b2e4a`) — cam/blur/neon var mı? (Olmamalı.)
2. Nötrler mavi-siyah mı (`--ink #171b23`); sıcak kahve-siyah (41/42 paleti) sızmış mı?
3. Kartlarda krom iç parlama + tek hairline var mı; koyu blok gölge var mı?
4. Başlık Cinzel büyük harf `.09em`, fiyat/KPI mono sayaç mı?
5. Nav altında koç çizgisi + landing'de kadran var mı?

## Visual signature
- **Serin krem kart:** `--surface #f8f4ec` üstünde `--ink #171b23`; kart zemini sayfadan %4–%6 açık, gölge yok.
- **Lacivert tek anlam:** birincil buton, aktif satır işareti, veri serisi 1, odak halkası; başka yerde lacivert yok.
- **Mavi-siyah metin:** başlık ve gövde `#171b23`; "siyah" hissi verir ama saf siyah değildir (8 saatlik okumada kontrast yanması yapmaz).
- **Koç çizgisi:** nav altında 1px lacivert + 1px hairline; bölüm ayırıcıda aynı çift çizgi.
- **Kadran:** 224px; 88/96px krom halka, `.9deg` tik / `9deg` aralık, `1.3deg` lacivert iğne, 4px göbek.
- **Ceviz damarı:** 92°, 1px / 11px, %2.5 — soğuk paletle sıcak doku kontrastı stilin tek "sıcak" detayı.
- **Sayaç tipografisi:** fiyat 26px, KPI 22px, 404 44px mono, `letter-spacing: 0`.
- **Typography:** Cinzel (display) + Jost (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#1b2e4a`; neutral scale `#f1ece2` → `#171b23`.
- **Radius:** `3px` / `6px`; Card 10–14px, button 6–10px; full circle only chip/badge.

## Mandatory rules

1. **İki mavi ayrımı:** vurgu `#1b2e4a`, metin `#171b23`. Vurgu metin olarak kullanılmaz, metin vurgu yerine geçmez; ikisi komşu ama farklı rolde.
2. **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`; toplam 2px, üçüncü çizgi yok.
3. **Tek vurgu:** gece mavisi ekranın ≤%8'i (veri ekranlarında ≤%4). Cyan, turkuaz, mor, altın ikinci vurgu yasak.
4. **Büyük harf disiplini:** Cinzel 400 büyük harf `.09em`; gövde Jost normal harf; mono etiket `.14–.2em`.
5. **Sayaç rakamı:** para/adet/tarih/yüzde Courier Prime 400.
6. **Boşluk ve köşe:** bölüm 96px (mobil 56px), kart içi 28px, radius 3/6px.
7. **Koç çizgisi:** `1px var(--accent)` + 1–2px boşluk + `1px var(--line)`; ekran başına en fazla 3.
8. **Doku:** `--grain: .035` + yan panellerde ceviz damarı 1px/11px %2.5 (soğuk paletle sıcak ahşap dokusu bilinçli kontrast).
9. **Kadran:** yalnız landing'de bir tane; gece varyantında iğne lacivert, tikler `--ink` %30.

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1ece2` | page background | as a card background |
| `--bg-2` | `#e7e0d2` | partition divider floor, table top | button background |
| `--surface` | `#f8f4ec` | kart, input, modal | full-page background |
| `--surface-2` | `#e6e1d5` | passive chip, hover background | primary button |
| `--ink` | `#171b23` | title, body, icon | large background |
| `--ink-soft` | `#4f5560` | secondary text, description | — |
| `--ink-faint` | `#5f6470` | decorative label, separator text | interactive text |
| `--accent` | `#1b2e4a` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f2eadb` | text above accent | non-accent background |
| `--line` | `rgba(23,27,35,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.65:1** · `ink-soft/bg` **6.37:1** · `ink-faint/bg` **5.03:1 (decorative)** · `accent-ink/accent` **11.44:1**.
- Price and stock information is written with --ink, not accent; accent solo action (cart, buy).
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 50px (mobile 30px) | 600 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 15.5px | 600 | 1.3 | 0 |
| Body | `--font-body` (Jost) | 16.5px | 400 | 1.6 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Courier Prime) | 9.5px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

- Price 26–32px display, currency 13px mono; product name 15px/600.
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

- Product grid 3–4 columns; card ratio 4:5. Filter rail 240px.
- Section vertical space 72px desktop, 44px mobile; card padding 20px.

## Surface and depth

| Level | Token | Shadow | Usage |
| --- | --- | --- | --- |
| Background | --bg | none | page |
| Kart | --surface + 1px --line | --shadow | content block |
| floating | --surface + --shadow + --line | --shadow | modal, popover, toast |

- Cards are separated by light shadow; On hover, the shadow grows, the edge does not change.
- Radius: `3px` (buton, input, chip), `6px` (kart, modal). Card 10–14px, button 6–10px; full circle only chip/badge.

## Bans

- Cyan/turkuaz/neon mavi, glow, blur (`--blur: 0`), cam panel, "SaaS gradient" (`#6366f1` → `#22d3ee`).
- Siyah zemin (`#0b0f16` ve benzeri) — bu stil gece mavisini **açık** krem zeminde taşır; koyu tema sevk edilmez.
- İkinci vurgu (bordo, yeşil, altın); lacivert + altın kombinasyonu (Art Deco/banka klişesi).
- 2px+ kenar, çift çerçeve, koyu blok gölge, radius ≥ 8px.
- Saf siyah/beyaz; gövdede büyük harf veya 300 ağırlık.
- Display 700/italik, el yazısı font, negatif tracking.
- Emoji, illüstrasyon, foto kolaj, desenli arka plan.
- Sürekli animasyon (marquee, dönen iğne, nefes alan katman), spring.
- Stack of discount labels on price.
- More than four types of rosettes.
- Auto-playing image.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 3px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 3px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 3px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 3px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 3px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 3px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 3px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 12.46:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 20px; basket/favorite full |
| photo | The product is single object, white/neutral backdrop, shadow is soft; 4:5 |
| illustration | Thin line only in category title |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | orta | 50px Cinzel, 7/5 asimetri, tek lacivert CTA, bir kadran | `shots/01-page.png` |
| Dashboard | düşük-orta | mono KPI, krom kartlar, lacivert yalnız seri 1 ve aktif satır | `shots/01-page.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px hedef, plaka sekmeler | `shots/01-page.png` |
| Bileşenler | orta | palet + tipografi + krom kenar levhası | `shots/01-page.png` |
| Form | düşük | tek sütun 460px, odak 2px lacivert | `shots/01-page.png` |
| Katman | orta | 6px radius + krom kenar + yüzen gölge | `shots/01-page.png` |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik | `shots/01-page.png` |
| Gezinme | orta | koç çizgili nav, plaka chip, ceviz damarlı footer | `shots/01-page.png` |
| Fiyatlandırma | orta | 3 kart, orta kart `--surface-2` + üst 2px lacivert | `shots/01-page.png` |
| Giriş | çok düşük | süs 0, ceviz damarlı sol panel, tek kart | `shots/01-page.png` |
| Liste | düşük-orta | filtre + 52px satır, seçili satır sol 2px lacivert | `shots/01-page.png` |
| Durumlar | orta | boş/hata/404; 404 mono 44px | `shots/01-page.png` |
| Ayarlar | düşük | hairline ayırıcı, tehlike bölgesi `--danger` | `shots/01-page.png` |
| Ödeme | çok düşük | mono tutarlar, lacivert yalnız ödeme butonunda | `shots/01-page.png` |
| Onboarding | orta | adım noktaları, tek ileri CTA | `shots/01-page.png` |
| Makale | orta | 62ch, Cinzel 24px H2, mono künye | `shots/01-page.png` |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px tutamaç, yapışkan CTA | `shots/01-page.png` |
| Mobil · form | çok düşük | 54px input, 46px CTA | `shots/01-page.png` |
| Mobil · liste | düşük | 64px satır, durum plakası | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.65:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.37:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.03:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 11.44:1 | ≥ 4.5 | button text |
| focus ring/ground | 12.46:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 93.1 | ≥ 60 target | thin text |

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
| Cyberpunk'a kaydı | Lacivert siyah zemine alınmış, neon/glow eklenmiş | Krem zemin `#f1ece2` korunur, `--blur: 0`, glow yok |
| "SaaS mavisi" gibi duruyor | Doygun mavi (`#3b82f6`) veya gradyan | `#1b2e4a` düşük doygunluk, gradyan yok |
| Metin vurgudan ayırt edilmiyor | `--ink` laciverte kaydırılmış | `--ink #171b23` mavi-siyah, vurgu `#1b2e4a`; rol ayrımı korunur |
| Banka/Art Deco klişesi | Lacivert + altın | Altın yok; sıcaklık yalnız ceviz damarı ve `--data-4` pirinçte |
| Soğuk/ölü görünüyor | Ceviz damarı ve grain kaldırılmış | Damar %2.5 + grain .035 (stilin tek sıcak detayı) |
| Eski ofis yazılımı | Kenar 2px+, kart gölgesi büyük | Krom kenar 2px toplam, gölge `0 1px 2px` |
| Okumak yoruyor | Gövde büyük harf / 300 ağırlık / saf siyah | Jost 400, `#171b23`, 62ch |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| garnish | `swiss-design` | Same level of seriousness; accent sharing is not allowed |
| garnish | `editorial-design` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `glassmorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `bauhaus` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://fonts.google.com/specimen/Cinzel | Cinzel — büyük harf display, 400, .09em |
| https://fonts.google.com/specimen/Jost | Jost — gövde 16.5/1.68 |
| https://fonts.google.com/specimen/Courier+Prime | Courier Prime — sayaç ve etiket mono |
| https://www.hagerty.com/media/ | Hagerty — klasik GT medyası — midnight blue klasik GT boyası ve gece kokpiti |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — kontrast eşikleri |

## AI brief

```text
Stil: Grand Tourer Midnight (styles/43-grand-tourer-midnight/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer-midnight"]; hard-coded renk/gölge/radius yasak.
Tipografi: Cinzel BÜYÜK HARF 400 (başlık), Jost (gövde), Courier Prime (tüm sayı + etiket).

Yap:
- Serin krem #f1ece2 zemin, kart #f8f4ec; dış 1px hairline + iç 1px beyaz (krom).
- Metin mavi-siyah #171b23; vurgu gece mavisi #1b2e4a (rol ayrımı korunur); accent üstü #f2eadb.
- Bölüm 96px, kart içi 28px, gövde 62ch, radius 3/6px.
- Nav/bölüm ayırıcıda koç çizgisi (≤3), yan panelde ceviz damarı 1px/11px %2.5.
- Fiyat/KPI/tarih mono Courier Prime; landing'de tek kadran (lacivert iğne).

Yapma:
- Siyah zemin, cam/blur, neon/cyan, gradyan, ikinci vurgu, lacivert+altın.
- 2px+ kenar, 8px+ radius, saf siyah/beyaz, gövdede büyük harf/300 ağırlık, emoji, illüstrasyon.

Style: Grand Tourer Midnight (grand-tourer-midnight) · family: Timeless (41–44)
Token: --bg #f1ece2 · --surface #f8f4ec · --ink #171b23 · --accent #1b2e4a · --line rgba(23,27,35,.18)
Radius: 3px / 6px · Typography: Cinzel / Jost / Courier Prime
Required: **İki mavi ayrımı:** vurgu `#1b2e4a`, metin `#171b23`. Vurgu metin olarak kullanılmaz, metin vurgu yerine geçmez; ikisi komşu ama farklı rolde. · **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`; toplam 2px, üçüncü çizgi yok. · **Tek vurgu:** gece mavisi ekranın ≤%8'i (veri ekranlarında ≤%4). Cyan, turkuaz, mor, altın ikinci vurgu yasak.
Banned: Cyan/turkuaz/neon mavi, glow, blur (`--blur: 0`), cam panel, "SaaS gradient" (`#6366f1` → `#22d3ee`). · Siyah zemin (`#0b0f16` ve benzeri) — bu stil gece mavisini **açık** krem zeminde taşır; koyu tema sevk edilmez. · İkinci vurgu (bordo, yeşil, altın); lacivert + altın kombinasyonu (Art Deco/banka klişesi).
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="grand-tourer-midnight"] {
  --bg: #f1ece2; --bg-2: #e7e0d2;
  --surface: #f8f4ec; --surface-2: #e6e1d5;
  --ink: #171b23; --ink-soft: #4f5560; --ink-faint: #5f6470;
  --accent: #1b2e4a; --accent-ink: #f2eadb;
  --line: rgba(23,27,35,.18);
  --danger: #d12217;
  --danger-ink: #ffffff;
  --ok: #007c34;
  --ok-ink: #ffffff;
  --warn: #b04e00;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(23,27,35,.08); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.09em; --blur: 0px; --grain: 0;
}
```
