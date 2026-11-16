# 42 · Grand Tourer Oxblood

> **In one sentence:** Grand Tourer sisteminin bordo deri kardeşi: aynı krem kokpit, aynı krom ve kadran, ama vurgu İngiliz kulüp derisinin bordo tonunda — üstüne gravür başlık, künye şeridi ve mat çerçeve eklenmiş "prime" katmanı.

| | |
|---|---|
| **Feeling** | kulüp üyesi, deri koltuk, gizli servet, "aileye özel" |
| **Best for** | lüks konut/ofis portföyü, özel kulüp, butik otel suiteleri, mücevher, özel bankacılık, şarap/viski |
| **Avoid** | kurumsal B2B panel, sağlık, çocuk ürünü, indirim kampanyası, devlet/kamu arayüzü (bordo + krem "kulüp" okunur) |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Timeless (41–44) · **Token** | `kit/tokens.css` → `[data-style="grand-tourer-oxblood"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Oxblood, **Grand Tourer (41) sisteminin palet varyantıdır**: tipografi, ızgara, krom kenar, kadran, koç çizgisi ve tüm bileşen ölçüleri birebir aynıdır. Değişen tek şey **vurgu ve nötr sıcaklığı**: yarış yeşili yerine bordo `#6b2130` (oxblood, klasik İngiliz deri rengi), zemin ise bir tık daha sıcak krem `#f1e9dd`. Böylece lüks "kulüp" tarafına kayar: yeşil bahçe/yarış, bordo koltuk/kütüphane.

Kazandığı şey: **yakınlık ve aidiyet**. Bordo, kontrastı düşük olduğu için saldırgan değil; krem zeminde "davet" gibi okunur. Feda ettiği şey: **kurumsal güvenlik**. Bordo + krem, banka/kurum arayüzünde değil, üyelik ve konuk ağırlama dilinde okunur; resmi işlem ekranlarında yeşil (41) veya lacivert (43) daha nötr kalır.

**Prime katmanı (41'den ayrıldığı yer).** 42, ailenin "üst donanım" varyantıdır; palet farkının üstüne beş ölçülebilir detay ekler: (1) başlıkta **gravür ışığı** (`text-shadow: 0 1px 0 rgba(255,255,255,.62)`) ve 52px/.12em geniş harf aralığı, (2) landing'de CTA altında **künye şeridi** (mono 9px, hairline hücreler), (3) birincil butonda **plaka halkası** (1px outline, 2px boşluk), (4) hero görselinde **mat çerçeve** (6px zemin boşluğu + 1px hairline + iç vinyet ≤%6), (5) kartlarda **işlenmiş alt kenar** (`inset 0 -1px 0 rgba(32,26,23,.07)`). Hareket de ağırlaşır: 200/400/560ms — "kapı kapanışı" hissi.

### What is not
- **Grand Tourer (41) değildir** — aynı sistem, farklı palet. Yalnız rengi değiştirip ölçüleri bozarsanız (radius 12px, gölge, altın) bu stil olmaz; ikisi **tek ailede iki oda** gibidir.
- **Art Deco (26) değildir.** Deco'nun altını, simetrisi ve zigguratı yok; burada krom 1px ve asimetri var.
- **Victorian (27) değildir.** Bordo burada tek vurgu; gravür, çift çerçeve ve süs yok.
- **Dopamine/warm-luxury şablonları değildir.** Pembe-bej "sıcak minimal" furyasından farkı: **mono sayaç rakamı, krom iç parlama ve kadran** — sıcaklık renkten değil malzemeden gelir.

### Where it comes from
Oxblood, 20. yüzyıl İngiliz kulüp ve otomobil iç mekânlarının deri rengi (Connolly "oxblood"), Amerikan üniversite ve ülke kulüplerinin koltuklarında standarttı. Dijitalde bordo, "davet" ve "üyelik" sinyali olarak geri döndü. Klişeye düşmemesi için korunması gereken detay: **bordoyu doygunlaştırmamak** — `#6b2130` üstüne parlak kırmızı eklendiği an stil "düğün davetiyesi"ne kayar.

### Recognition test in 3 seconds
1. Zemin sıcak krem mi (`#f1e9dd`), vurgu **tek** bordo mu (`#6b2130`) — parlak kırmızı/bordo karışımı yok mu?
2. Kartlarda krom iç parlama (1px beyaz) + tek hairline var mı; gölge koyu blok mu? (Olmamalı.)
3. Başlık Cinzel büyük harf, 0.09em mi; altın/şampanya sızmış mı? (Olmamalı.)
4. Fiyat/KPI **mono sayaç** mı; serif rakam var mı?
5. Nav altında koç çizgisi ve landing'de kadran var mı?

## Visual signature
- **Bordo krom kart:** `--surface #f9f3e9` + dış hairline + iç beyaz 1px + **alt 1px işlenmiş gölge çizgisi** (`inset 0 -1px 0 rgba(32,26,23,.07)`); kart zemini sayfadan %4–%6 açık.
- **Gravür başlık:** Cinzel 400, 52px, `.12em`, `text-shadow: 0 1px 0 rgba(255,255,255,.62)` — krem zeminde kabartma plaka; eyebrow ve etiketler bordo (`--accent`), `.22–.24em`.
- **Mat çerçeve:** hero görseli `0 0 0 6px var(--bg), 0 0 0 7px color-mix(ink 15%)` + `inset 0 0 70px color-mix(ink 6%)` → duvara asılmış baskı; koyu blok gölge yok.
- **Künye şeridi:** CTA altında üç hücre, mono 9px `.18em`, üst/alt 1px hairline, hücre arası 1px dikey çizgi, 4px bordo nokta.
- **Plaka CTA:** birincil butonda `outline: 1px color-mix(accent 40%)`, `outline-offset: 2px`, mono 11px `.2em`; buton içinde üst beyaz/alt koyu 1px krom.
- **Tek bordo anlam:** birincil buton, aktif satır işareti, veri serisi 1, odak halkası — başka yerde bordo yok.
- **Sıcak nötr:** `--ink #201a17` (kahve-siyah), `--ink-soft #5a4d45`, `--line rgba(32,26,23,.18)`; soğuk gri yok.
- **Koç çizgisi:** nav altında 1px bordo + 1px hairline; onboarding/ayırıcıda `border-top: 1px var(--accent)` eşleşmesi.
- **Kadran:** 224px, `.9deg` tik / `9deg` aralık, 88/96px krom halka, `1.3deg` bordo iğne, 4px göbek.
- **Ceviz damarı:** 92°, 1px / 11px, `--ink` %2.5 — yalnız yan panel, auth asidesi ve footer.
- **Sayaç tipografisi:** fiyat 26px, KPI 22px, 404 44px mono; `letter-spacing: 0`.
- **Typography:** Cinzel (display) + Jost (body) + Courier Prime (mono label).
- **Colour discipline:** a single accent `#6b2130`; neutral scale `#f1e9dd` → `#201a17`.
- **Radius:** `3px` / `6px`; Card 10–14px, button 6–10px; full circle only chip/badge.

## Mandatory rules

1. **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Toplam 2px, üçüncü çizgi yok.
2. **Tek vurgu bordo `#6b2130`:** ekranın ≤%8'i (veri ekranlarında ≤%4). Parlak kırmızı, bordo-mor, altın ikinci vurgu yasak.
3. **Durum rengi ayrı:** `--danger #9a3b1e` (yanık kızıl) — accent bordo ile karışmaması için bilinçli olarak daha turuncu; "sil" butonu asla accent bordoyu kullanmaz.
4. **Büyük harf disiplini:** display Cinzel 400 büyük harf `.09em`; gövde Jost normal harf; mono etiket `.14–.2em`.
5. **Sayaç rakamı:** para/adet/tarih/yüzde/kod Courier Prime 400; bir ekranda sayıların tamamı mono.
6. **Boşluk ve köşe:** bölüm 96px (mobil 56px), kart içi 28px, radius 3/6px. 8px üstü radius yok.
7. **Koç çizgisi:** `1px var(--accent)` + 1–2px boşluk + `1px var(--line)`; ekran başına en fazla 3.
8. **Doku:** `--grain: .035` + yan panellerde ceviz damarı 1px/10px %3.2; ikisi de `pointer-events: none`.
9. **Kadran:** yalnız landing'de bir tane; tik halkası + çift krom halka + 1.3° iğne.
10. **Gravür başlık:** h1 52px, `letter-spacing: .12em`, `text-shadow: 0 1px 0 rgba(255,255,255,.62)`. Işık tek yönlü ve 1px; 2px üstü deboss gölge, çift ışık, iç gölge yasak.
11. **Plaka CTA:** yalnız **birincil** butonda 1px accent halka (`outline`, offset 2px) — ikincil/sessiz butonda halka yok; halka 2px+ veya çift halka olmaz. **Yıkıcı eylem** (`--danger`) halka almaz ve mobil/dar sahnelerde halka kapanır (kırpılma).
12. **Mat çerçeve + künye:** landing'de hero görseli mat çerçeve (6px `--bg` + 1px hairline + iç vinyet ≤%6) alır; CTA altındaki üç hücreli künye şeridi mono 9px `.18em`, hücre arası 1px dikey çizgi. Vinyet %6'yı geçmez (kontrast düşürür).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f1e9dd` | page background | as a card background |
| `--bg-2` | `#e8dfd0` | partition divider floor, table top | button background |
| `--surface` | `#f9f3e9` | kart, input, modal | full-page background |
| `--surface-2` | `#e9dfce` | passive chip, hover background | primary button |
| `--ink` | `#201a17` | title, body, icon | large background |
| `--ink-soft` | `#5a4d45` | secondary text, description | — |
| `--ink-faint` | `#74665c` | decorative label, separator text | interactive text |
| `--accent` | `#6b2130` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f7efe1` | text above accent | non-accent background |
| `--line` | `rgba(32,26,23,.18)` | all borders | text colour |

- Measured contrast: `ink/bg` **14.28:1** · `ink-soft/bg` **6.75:1** · `ink-faint/bg` **4.59:1 (decorative)** · `accent-ink/accent` **9.75:1**.
- Price and stock information is written with --ink, not accent; accent solo action (cart, buy).
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Cinzel) | 52px (mobile 30px) | 600 | 1.06 | -0.02em |
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

- Altın/şampanya/bakır metal, pembe-bej "sıcak minimal" geçişi, ikinci vurgu (mor, yeşil, turuncu).
- Parlak kırmızı (`#c1121f` ve benzeri) — bordo ile yan yana "indirim" diline kayar.
- Gradyan buton/kart, glow, blur (`--blur: 0`), renkli ışık lekesi.
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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.09:1 (≥ 3 on background/surface).
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
| Landing / hero | orta | 50px Cinzel, 7/5 asimetri, tek bordo CTA, bir kadran | `shots/01-page.png` |
| Dashboard | düşük-orta | mono KPI, krom kartlar, bordo yalnız seri 1 ve aktif satır | `shots/01-page.png` |
| Mobil | orta | tek kolon, 30px başlık, 44px hedef, plaka sekmeler | `shots/01-page.png` |
| Bileşenler | orta | palet + tipografi + krom kenar levhası | `shots/01-page.png` |
| Form | düşük | tek sütun 460px, odak 2px bordo | `shots/01-page.png` |
| Katman | orta | 6px radius + krom kenar + yüzen gölge | `shots/01-page.png` |
| Veri | düşük | 52px satır, mono sayaçlar, 4 renkli grafik | `shots/01-page.png` |
| Gezinme | orta | koç çizgili nav, plaka chip, ceviz damarlı footer | `shots/01-page.png` |
| Fiyatlandırma | orta | 3 kart, orta kart `--surface-2` + üst 2px bordo | `shots/01-page.png` |
| Giriş | çok düşük | süs 0, ceviz damarlı sol panel, tek kart | `shots/01-page.png` |
| Liste | düşük-orta | filtre + 52px satır, seçili satır sol 2px bordo | `shots/01-page.png` |
| Durumlar | orta | boş/hata/404; 404 mono 44px | `shots/01-page.png` |
| Ayarlar | düşük | satır ayırıcı hairline, tehlike bölgesi `--danger` | `shots/01-page.png` |
| Ödeme | çok düşük | mono tutarlar, bordo yalnız ödeme butonunda | `shots/01-page.png` |
| Onboarding | orta | adım noktaları, tek ileri CTA | `shots/01-page.png` |
| Makale | orta | 62ch, Cinzel 24px H2, mono künye | `shots/01-page.png` |
| Mobil · alt sayfa | orta | üst köşe 6px, 44px tutamaç, yapışkan CTA | `shots/01-page.png` |
| Mobil · form | çok düşük | 54px input, 46px CTA | `shots/01-page.png` |
| Mobil · liste | düşük | 64px satır, durum plakası | `shots/01-page.png` |
| Emlak landing | orta | poster hero + künye şeridi + portföy rafı + bölüm + galeri; 6 ilan kuralı | `shots/01-page.png` |
| Emlak · ilan detayı | yüksek | galeri (1+2), künye, açıklama, kat planı, harita, yapışkan ajan paneli + 3 alanlı form | `shots/01-page.png` |
| Emlak · harita | orta | sol filtre rayı, iğneli harita, hover kartı, mini sonuç listesi | `shots/01-page.png` |
| Emlak · concierge | düşük | 3 alanlı form + adım göstergesi + güven/gizlilik blokları | `shots/01-page.png` |
| Mobil · emlak | orta | dikey poster hero, künye, 360° tur, yapışkan ajan barı | `shots/01-page.png` |
| Hareket levhası | — | giriş / scroll reveal / pin+scrub beatleri; reduced-motion notu | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 14.28:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 6.75:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.59:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.75:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.09:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 91.6 | ≥ 60 target | thin text |

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
| "Düğün davetiyesi" gibi duruyor | Bordo doygunlaşmış / altın eklenmiş | `#6b2130` sabit; altın yok; süs yalnız kadran ve gravür ışığı |
| "Sadece 41'in bordolusu" gibi duruyor | Prime katmanı uygulanmamış (gravür, künye, mat çerçeve, plaka halkası yok) | Beş detayın hepsi: gravür başlık + künye şeridi + plaka CTA + mat çerçeve + işlenmiş alt kenar |
| Başlık bulanık/ağır | Deboss 2px+ veya çift ışık, ya da gövdeye de `text-shadow` verilmiş | Işık 1px, yalnız başlıkta |
| Butonlar birbirine yapışık | Plaka halkası 2px offset ile komşu butona değiyor | Halka 1px / offset 2px; buton arası en az 8px boşluk |
| "İndirim" dili oluştu | Parlak kırmızı + bordo yan yana | Tek bordo; `--danger` yalnız silme, ikonla birlikte |
| Kurumsal banka gibi duruyor | Palet lacivert/yeşile kaymış ya da simetri | Bordo `#6b2130`, asimetri 7/5 |
| Eski ofis yazılımı | Kenar 2px+, kart gölgesi büyük | Krom kenar 2px toplam, gölge `0 1px 2px` |
| Bej lüks şablon | Kadran ve mono sayaç yok | Kadran + tüm sayılar Courier Prime |
| Okumak yoruyor | Gövde büyük harf / 300 ağırlık | Jost 400 normal harf, 62ch |
| Bordo ile hata karıştı | `--danger` accent'e yakın seçilmiş | `#9a3b1e` turuncu-kızıl + ikon zorunlu |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `grand-tourer` | Same level of seriousness; accent sharing is not allowed |
| garnish | `luxury-typography` | Same level of seriousness; accent sharing is not allowed |
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
| https://www.hagerty.com/media/ | Hagerty — klasik GT medyası — bordo deri kokpit, krom anahtar, ceviz panel |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 — Contrast Minimum — kontrast eşikleri |

## AI brief

```text
Stil: Grand Tourer Oxblood (styles/42-grand-tourer-oxblood/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="grand-tourer-oxblood"]; hard-coded renk/gölge/radius yasak.
Tipografi: Cinzel BÜYÜK HARF 400 (başlık), Jost (gövde), Courier Prime (tüm sayı + etiket).

Yap:
- Krem #f1e9dd zemin, kart #f9f3e9; dış 1px hairline + iç 1px beyaz + alt 1px işlenmiş gölge (krom + işçilik).
- Tek vurgu bordo #6b2130; accent üstü #f7efe1; ekranın ≤%8'i.
- Silme/tehlike #9a3b1e (turuncu-kızıl) + ikon; accent'i durum için kullanma.
- Başlık: Cinzel 52px, BÜYÜK HARF, tracking .12em, gravür ışığı text-shadow 0 1px 0 rgba(255,255,255,.62).
- Bölüm 96px, kart içi 28px, gövde 62ch, radius 3/6px.
- Nav/bölüm ayırıcıda koç çizgisi (≤3), yan panelde ceviz damarı 1px/10px %3.2.
- Landing: hero görseli mat çerçeve (6px bg + 1px hairline + vinyet ≤%6), CTA altı künye şeridi, birincil butonda 1px plaka halkası.
- Fiyat/KPI/tarih mono Courier Prime; landing'de tek kadran. Hareket 200/400/560ms.

Yapma:
- Altın/şampanya, parlak kırmızı, ikinci vurgu, gradyan, glow, blur, 2px+ kenar, 8px+ radius.
- Deboss 2px+, çift ışık, gövdede text-shadow, vinyet %6 üstü, çift plaka halkası.
- Saf siyah/beyaz, gövdede büyük harf/300 ağırlık, emoji, illüstrasyon, sürekli animasyon.

Style: Grand Tourer Oxblood (grand-tourer-oxblood) · family: Timeless (41–44)
Token: --bg #f1e9dd · --surface #f9f3e9 · --ink #201a17 · --accent #6b2130 · --line rgba(32,26,23,.18)
Radius: 3px / 6px · Typography: Cinzel / Jost / Courier Prime
Required: **Krom kenar:** dış `1px var(--line)` + iç `inset 0 0 0 1px rgba(255,255,255,.6)`. Toplam 2px, üçüncü çizgi yok. · **Tek vurgu bordo `#6b2130`:** ekranın ≤%8'i (veri ekranlarında ≤%4). Parlak kırmızı, bordo-mor, altın ikinci vurgu yasak. · **Durum rengi ayrı:** `--danger #9a3b1e` (yanık kızıl) — accent bordo ile karışmaması için bilinçli olarak daha turuncu; "sil" butonu asla accent bordoyu kullanmaz.
Banned: Altın/şampanya/bakır metal, pembe-bej "sıcak minimal" geçişi, ikinci vurgu (mor, yeşil, turuncu). · Parlak kırmızı (`#c1121f` ve benzeri) — bordo ile yan yana "indirim" diline kayar. · Gradyan buton/kart, glow, blur (`--blur: 0`), renkli ışık lekesi.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="grand-tourer-oxblood"] {
  --bg: #f1e9dd; --bg-2: #e8dfd0;
  --surface: #f9f3e9; --surface-2: #e9dfce;
  --ink: #201a17; --ink-soft: #5a4d45; --ink-faint: #74665c;
  --accent: #6b2130; --accent-ink: #f7efe1;
  --line: rgba(32,26,23,.18);
  --danger: #cf2015;
  --danger-ink: #ffffff;
  --ok: #007a32;
  --ok-ink: #ffffff;
  --warn: #ae4d00;
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
  --shadow: inset 0 0 0 1px rgba(255,255,255,.6), 0 1px 2px rgba(32,26,23,.08); --shadow-hard: none;
  --font-display: "Cinzel", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0.12em; --blur: 0px; --grain: 0;
}
```
