# 114 · Eşzamanlı İşbirlikçi

> **In one sentence:** Aynı belgede çalışan herkesi canlı imleç, avatar yığını ve uzak seçim vurgusuyla görünür kılan çok kişili çalışma stili.

| | |
|---|---|
| **Feeling** | paylaşılan, canlı, sıcak, açık |
| **Best for** | belge/tahta düzenleme, ürün planlama, eğitimde ortak çalışma, tasarım incelemesi |
| **Avoid** | tek kişilik finans paneli, gizlilik gerektiren sağlık kaydı, salt-okunur rapor — varlık göstergeleri burada gürültü ve gizlilik riski |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="multiplayer-presence"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Eşzamanlı İşbirlikçi, belgenin **kim tarafından** düzenlendiğini sürekli görünür tutar: her katılımcı için 28px avatar, imleç ucunda 12px ad etiketi, uzak seçimde %12 accent zemin + 1px accent çerçeve. Navda `3 kişi düzenliyor` hapı, ortada avatar yığını durur.

Kurucu kararları üç tanedir. Birincisi **varlık (presence) her zaman metinle**: renk tek başına taşıyıcı değil, avatar baş harfi ve ad etiketi zorunlu. İkincisi **tek aktif katman**: yorum ve bahsetme aynı anda iki katman açmaz. Üçüncüsü **sıçramasız düzenleme**: uzak bir düzenleme kartın yüksekliğini değiştirse bile odak kaymaz, yer tutucu kullanılır.

Bedeli: dikkat dağılması. Bu yüzden varlık göstergeleri küçük (28px) ve gölgesizdir; imleç animasyonu yumuşak takip kullanmaz (60ms üstü gecikme yasak) — aksi hâlde okuma ritmi bozulur.

### What is not
- **Kanban Akışı (110) değildir:** 110 iş akışını kolonlarla gösterir, katılımcıyı göstermez; 114'ün birincil bilgisi kimin nerede olduğudur.
- **Zaman Çizelgesi (109) değildir:** 109 zaman eksenlidir ve Archivo Black ile ağır başlık kullanır; 114 Baloo 2 + Nunito ile yumuşak ve kişi odaklıdır.
- **Ses-Öncelikli (106) değildir:** 106 dinleme halkası ve hap kontrollerle tekil odak kurar; 114 çok kişili katman ve avatar yığını taşır.
- **Komut Paleti (108) değildir:** 108 klavye paletidir; 114 farenin/parmağın imleçle konuştuğu bir yüzeydir (klavye erişilebilirliği korunur ama birincil değil).

### Where it comes from
Gerçek zamanlı ortak düzenleme (Google Docs, Figma) ve CRDT tabanlı çakışmasız birleştirme araştırmalarından gelir. Bugün geri dönüyor çünkü uzaktan çalışma belgeyi tek kişilik nesne olmaktan çıkardı. Klişeye dönmemesi için korunacak detay: **imleç etiketinin gerçek adı göstermesi** ve çevrimdışı katkının kesikli çerçeveyle ayrılması.

### Recognition test in 3 seconds
1. Navda iç içe geçmiş 28px avatar yığını ve `3 kişi düzenliyor` hapı var.
2. Bir kart %12 accent zemin + 1px accent çerçeveyle "uzak seçim" olarak işaretli.
3. Buton/input hap biçimli (999px), radius 12px kartlarla birlikte.
4. Tipografi yumuşak: Baloo 2 başlık, Nunito gövde — keskin/condensed başlık yok.
5. Zemin kırık beyaz-mor (`#f8f7fc`) ve tek accent mor (`#6d28d9`).

## Visual signature
- **Avatar yığını:** 28px daire, 2px `--surface` kenar, `-10px` bindirme; en fazla 4 görünür, fazlası `+3`.
- **Canlı imleç:** 2px dikey çubuk + 12px ad etiketi; etiket yalnız adı taşır, renk ikincil.
- **Uzak seçim:** `background: accent %6`, `box-shadow: 0 0 0 1px accent %34`; metin değişmez.
- **Hap kontrol dili:** buton/input 999px, 40px; kart radius 12px, chip 24px hap.
- **Varlık rozeti:** sol üstte 8px accent nokta + 3px halka; metin `DÜZENLİYOR` mono 10px.
- **Hareket imzası:** 630ms `cubic-bezier(.34,1.16,.64,1)`, 9px — hafif yay, ama varlık katmanında değil.
- **Landing hero (QA):** varlık şeritleri: 26px avatar, hap satırlar, `DÜZENLİYOR` canlı altbilgisi.
- **Typography:** Baloo 2 (display) + Nunito (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#6d28d9`; neutral scale `#f8f7fc` → `#1b1630`.
- **Radius:** `12px` / `20px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Her çevrimiçi kişi görünür: 28px avatar + ad baş harfi; avatar yığını en fazla 4, fazlası `+3`
2. Uzak seçim %12 accent zemin + 1px accent çerçeve ile gösterilir; imleç ucunda 12px ad etiketi
3. Canlı düzenleme sırasında kart yüksekliği değişse bile odak kaymaz (skeleton yok, yer tutucu var)
4. `3 kişi düzenliyor` gibi durum hapı her zaman metinle yazılır
5. Yorum ve bahsetme aynı anda tek aktif katman açar; ikinci katman üst üste açılmaz
6. Çevrimdışı katkı `çevrimdışı` mono etiketi ve kesikli çerçeveyle ayrılır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f8f7fc` | page background | as a card background |
| `--bg-2` | `#eeecf8` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f4f2fc` | passive chip, hover background | primary button |
| `--ink` | `#1b1630` | title, body, icon | large background |
| `--ink-soft` | `#514870` | secondary text, description | — |
| `--ink-faint` | `#857ea0` | decorative label, separator text | interactive text |
| `--accent` | `#6d28d9` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(27,22,48,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.36:1** · `ink-soft/bg` **7.85:1** · `ink-faint/bg` **3.59:1 (decorative)** · `accent-ink/accent` **7.1:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Baloo 2) | 42px (mobile 27px) | 600 | 1.12 | -0.02em |
| H2 | same | 29px | 600 | 1.22 | -0.015em |
| H3 | same | 21px | 600 | 1.3 | 0 |
| Body | `--font-body` (Nunito) | 16px | 400 | 1.55 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
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
- Radius: `12px` (buton, input, chip), `20px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Avatar olmayan "biri düzenliyor" belirsizliği.
- Renk-only presence (renk + baş harf zorunlu).
- İmleç animasyonunda birikimli yay/overshoot; sürekli nabız.
- Aynı anda iki modal katman.
- Gölgeli avatar/imleç, neon çerçeve, gradyan zemin.
- Serif display ve italik.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 12px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 12px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 12px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 12px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 12px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 12px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 12px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 7.1:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-blob` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | örnek belge + üç canlı imleç + tek CTA | `shots/01-page.png` |
| Dashboard | orta | üç kart, sağda katılımcı paneli, iki uzak seçim | `shots/01-page.png` |
| Form | düşük | hap input'lar, alanın yanında düzenleyen avatarı | `shots/01-page.png` |
| Liste / tablo | düşük | 42px satır, uzak seçimde sol 2px accent | `shots/01-page.png` |
| Boş durum | orta | "Belge boş — birini davet et" + avatar yığını | `shots/01-page.png` |
| Onboarding | yüksek | ekip daveti + ilk ortak düzenleme | `shots/01-page.png` |
| Pricing | orta | ekip planı kartı; koltuk sayısı avatar yığınıyla | `shots/01-page.png` |
| Giriş / ödeme | düşük | hap input + tek CTA, `kim olarak katıldın` etiketi | `shots/01-page.png` |
| Modal | orta | yorum dizisi: avatar + mono zaman + yanıt kutusu | `shots/01-page.png` |
| Bildirim / toast | orta | alt-orta hap, `Elif katıldı` + avatar | `shots/01-page.png` |
| Hata | düşük | çakışma uyarısı: `Bu alanı Selin düzenledi` + sürüm seç | `shots/01-page.png` |
| Profil / ayar | orta | katılımcı listesi, rol seçimi, `çevrimdışı` etiketi | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.36:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.85:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.59:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 7.1:1 | ≥ 4.5 | button text |
| focus ring/ground | 7.1:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 99.8 | ≥ 60 target | thin text |

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
| Kim düzenliyor belirsiz | yalnız renk kullanılmış | avatar + baş harf + ad etiketi ekle |
| Okuma ritmi bozuluyor | çok sayıda canlı imleç | aynı anda en fazla 3 imleç göster, fazlasını `+N` |
| Kartlar zıplıyor | canlı yükseklik değişimi | yer tutucu yükseklik + sıçramasız yerleşim |
| Hap radius kartta da kullanılmış | radius karışmış | buton/input 999px, kart 12/20px |
| Katman üst üste açılıyor | iki state aynı anda true | tek aktif katman kuralı |
| Çevrimdışı katkı kayboluyor | görsel ayrım yok | kesikli çerçeve + `çevrimdışı` etiketi |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `kanban-flow` | Same level of seriousness; accent sharing is not allowed |
| garnish | `timeline-editor` | Same level of seriousness; accent sharing is not allowed |
| garnish | `utility` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `dark-academia` | Two different ornamental languages compete on the same screen |
| Mixing | `victorian` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Collaborative_real-time_editor | Collaborative real-time editor — eşzamanlı düzenleme modeli ve gecikme beklentisi |
| https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type | CRDT — çakışmasız birleştirme, çevrimdışı katkı |
| https://en.wikipedia.org/wiki/Presence_information | Presence information — katılımcı durumu (çevrimiçi/meşgul/çevrimdışı) |
| https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html | WCAG 2.2 · Content on Hover or Focus — kapanabilir yorum/etiket katmanı |

## AI brief

```text
Stil: Eşzamanlı İşbirlikçi (styles/114-multiplayer-presence/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="multiplayer-presence"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display Baloo 2 42/29/21 (600, -.01em); --font-body Nunito 16px/1.62;
  --font-mono JetBrains Mono 11px etiket (.05em).
Yüzey: --bg kırık beyaz-mor / --surface kart + 1px var(--line) + var(--shadow) 0 4px 14px;
  radius 12px kart içi, 20px kart/modal, buton+input+avatar 999px.
Renk: tek accent #6d28d9; ink/bg 16.36:1, ink-soft/bg 7.85:1, accent-ink/accent 7.10:1,
  ink-faint/bg 3.59:1 (mono meta).
İmza: 28px avatar yığını (-10px bindirme), canlı imleç + 12px ad etiketi, uzak seçim %6 zemin +
  1px accent çerçeve, navda "3 kişi düzenliyor" hapı.
Hareket: enter 630ms cubic-bezier(.34,1.16,.64,1) 9px stagger .033; scroll top 88% 570ms 11px once:false;
  pin yok; hover 210ms görsel 1.026. prefers-reduced-motion zorunlu.
Yasak: renk-only presence, gölgeli avatar/imleç, iki modal katman, imleçte birikimli yay.
Çıktı: bileşen kodu + tek paragraf not (avatar yığınını ve uzak seçimi nereye koydun).

Style: Eşzamanlı İşbirlikçi (multiplayer-presence) · family: Interactive (106–115)
Token: --bg #f8f7fc · --surface #ffffff · --ink #1b1630 · --accent #6d28d9 · --line rgba(27,22,48,.14)
Radius: 12px / 20px · Typography: Baloo 2 / Nunito / JetBrains Mono
Required: Her çevrimiçi kişi görünür: 28px avatar + ad baş harfi; avatar yığını en fazla 4, fazlası `+3` · Uzak seçim %12 accent zemin + 1px accent çerçeve ile gösterilir; imleç ucunda 12px ad etiketi · Canlı düzenleme sırasında kart yüksekliği değişse bile odak kaymaz (skeleton yok, yer tutucu var)
Banned: Avatar olmayan "biri düzenliyor" belirsizliği. · Renk-only presence (renk + baş harf zorunlu). · İmleç animasyonunda birikimli yay/overshoot; sürekli nabız.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="multiplayer-presence"] {
  --bg: #f8f7fc; --bg-2: #eeecf8;
  --surface: #ffffff; --surface-2: #f4f2fc;
  --ink: #1b1630; --ink-soft: #514870; --ink-faint: #857ea0;
  --accent: #6d28d9; --accent-ink: #ffffff;
  --line: rgba(27,22,48,.14);
  --danger: #d92d20;
  --danger-ink: #ffffff;
  --ok: #00843b;
  --ok-ink: #ffffff;
  --warn: #b85600;
  --warn-ink: #ffffff;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 12px; --radius-lg: 20px;
  --shadow: 0 4px 14px rgba(27,22,48,.10); --shadow-hard: none;
  --font-display: "Baloo 2", system-ui, sans-serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -.005em; --blur: 0px; --grain: 0;
}
```
