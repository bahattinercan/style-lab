# 65 · Cockpit Avionics

> **In one sentence:** Her panelin bir gösterge çerçevesi taşıdığı, değerin etiket–sayı–birim üçlüsüyle okunduğu kokpit paneli arayüzü.

| | |
|---|---|
| **Feeling** | keskin, gergin, ölçülü, uyanık |
| **Best for** | uçuş/operasyon kokpiti, gerçek zamanlı izleme (SCADA), görev kontrol paneli, kritik onay akışı |
| **Avoid** | içerik/blog, e-ticaret, çocuk uygulamaları — düşük punto ve yüksek uyarıklık burada yorucu olur |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Industrial (56–65) · **Token** | `kit/tokens.css` → `[data-style="cockpit-avionics"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Cockpit Avionics, arayüzü bir **gösterge paneli** gibi kurar: her panelin çevresinde bir bezel (çerçeve), içinde etiket–değer–birim üçlüsü, üstünde durum etiketi. Ekran üç bölgeye ayrılır — solda parametre rayı, ortada birincil görev, sağda checklist. Hiçbir değer çıplak durmaz, hiçbir kritik eylem tek tıkla olmaz.

Üç kurucu karar: (1) **bezel fiziği** — her panel dış 1px `--line` + iç 1px soluk çerçeve; aktif panel 1px cyan dış halka (`--shadow-hard`); gölge ve glow yok; (2) **mono okuma** — değerler Share Tech Mono, etiketler 10px mono büyük harf `0.2em`; gövde Inter 14px; (3) **iki adımlı onay** — geri dönüşsüz eylem `ARM → CONFIRM`; tek tıkla silme/başlatma yok.

Bedeli: ekran yoğun ve koyudur; uzun okuma için uygun değildir. Yoğunluğun "karmaşa" değil "kokpit" görünmesini sağlayan şey **bezel kenar boşluğu ve 12px gutter** disiplinidir.

### What is not
- **Terminal UI (45) değildir:** terminal tek mono ailede, 32px satırda ve yeşil accent'le çalışır; burada üç aile, 34px gösterge satırı ve cyan accent vardır, paneller bezel taşır.
- **Cybercore (23) değildir:** cybercore HUD/glitch/neon glow ile atmosfer kurar; Cockpit Avionics glow ve tarama çizgisini yasaklar, değerini okunurluktan alır.
- **Cyberpunk (22) değildir:** cyberpunk çok renkli neon ve kirli doku kullanır; burada tek cyan accent + durum üçlüsü ve temiz bezel.
- **Maintenance CMMS (63) değildir:** 63 turuncu aciliyet ve iş emri kâğıdı metaforu taşır, 38px başlıkla çalışır; 65 cyan ölçüm dili ve üç bölgeli kokpit düzeni.

### Where it comes from
Elektromekanik gösterge paneli ve ECAM/EICAS sistem sayfası geleneğinden: etiket üstte, değer ortada, birim yanda; uyarı önceliği (warning/caution/advisory) ve checklist. Bugün yeniden kullanılmasının nedeni: SCADA, NOC ve görev kontrol panelleri aynı problemi çözüyor — çok sayıda canlı değer, tek ekran, düşük hata toleransı. Klişeye dönüşmemesi için korunacak detay: **bezel + etiket–değer–birim üçlüsü** ve uyarının yanıp sönmek yerine öncelik sırasıyla listelenmesi.

### Recognition test in 3 seconds
1. Her panelin çevresinde **çift çizgi bezel**; aktif panelde 1px cyan dış halka.
2. Değerlerin üstünde 10px büyük harf mono etiket, yanında birim — üçlü asla bozulmaz.
3. Ekran **üç bölgeye** ayrılmış: parametre rayı · birincil görev · checklist.
4. Durumlar büyük harf: `ARMED`, `ACTIVE`, `STBY`, `FAULT`; yalnız renkle değil.
5. Hareket çok hızlı: geçişler 240ms altı, değer saymaz sıçrar; glow/parlama yok.

## Visual signature
- **Bezel çerçevesi:** panelde `border: 1px solid var(--line)` + `box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--line) 60%, transparent)`; köşe 2–4px.
- **Üç bölge:** 3 / 6 / 3 kolon; bölge ayırıcı 1px `--line`, panel dışına taşmayan hizalama.
- **Etiket–değer–birim üçlüsü:** etiket 10px mono `0.2em`; değer 15–22px mono; birim 10px `--ink-faint`; üçü aynı kolonda hizalı.
- **Segment çubuk:** 4px bloklardan oluşan gösterge (10–20 segment); sürekli gradient bar yok.
- **Durum noktası + metin:** 6px kare (radius 1px) + büyük harf etiket; `FAULT` 1.2s yanıp söner, 3 turdan sonra sabitlenir.
- **Radar halkası:** hero görselinde 3 eşmerkezli 1px halka + 45° tarama çizgisi (statik, animasyonsuz).
- **Sıçrayan değer:** değer değiştiğinde 240ms boyunca `--accent` rengi; sayaç animasyonu yok.
- **Typography:** Rajdhani (display) + Inter (body) + Share Tech Mono (mono label).
- **Colour discipline:** a single accent `#35d6e8`; neutral scale `#0a0f14` → `#e8f0f4`.
- **Radius:** `2px` / `4px`; Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Mandatory rules

1. Her gösterge üçlüsü: etiket (10px mono, üstte) + değer (mono, sağa hizalı) + birim (ayrı)
2. Panel bezel: dış 1px --line + iç 1px soluk çerçeve; aktif panel 1px cyan dış halka
3. Durum etiketleri büyük harf mono: ARMED · ACTIVE · STBY · FAULT; renk + metin birlikte
4. Kritik eylem iki adımlı onay (ARM → CONFIRM), tek tıkla geri dönüşsüz işlem yok
5. Değer güncellemesi sayı saymaz, sıçrar (≤240ms opacity vurgu)
6. Kokpit düzeni 3 bölge: parametre rayı · birincil görev · checklist; her ekranda aynı

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0a0f14` | page background | as a card background |
| `--bg-2` | `#10161c` | partition divider floor, table top | button background |
| `--surface` | `#131a21` | kart, input, modal | full-page background |
| `--surface-2` | `#1a232b` | passive chip, hover background | primary button |
| `--ink` | `#e8f0f4` | title, body, icon | large background |
| `--ink-soft` | `#9fb0ba` | secondary text, description | — |
| `--ink-faint` | `#6d7f8a` | decorative label, separator text | interactive text |
| `--accent` | `#35d6e8` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#032026` | text above accent | non-accent background |
| `--line` | `rgba(232,240,244,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.68:1** · `ink-soft/bg` **8.61:1** · `ink-faint/bg` **4.63:1 (decorative)** · `accent-ink/accent` **9.64:1**.
- Material color background: accent alone stamp/label. Build texture with grain and edges, not color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Rajdhani) | 24px (mobile 24px) | 400 | 1.08 | -0.02em |
| H2 | same | 22px | 600 | 1.2 | -0.015em |
| H3 | same | 17px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (Share Tech Mono) | 10px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 11px | 600 | 1 | 0 |

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
- Radius: `2px` (buton, input, chip), `4px` (kart, modal). Corner 0–6px; The material edge remains sharp, soft rounding weakens the texture.

## Bans

- Neon glow, tarama çizgisi, CRT, sürekli yanıp sönen uyarı.
- 4px üstü radius, yuvarlak kart, yumuşak/geniş gölge, cam/blur.
- Serif/geometrik display, italik, altı çizili bağlantı.
- 9px altı metin; 10px yalnız etiket.
- Tek tıkla geri dönüşsüz eylem, onaysız checklist geçişi.
- Yalnız renkle durum; cyan+yeşil yan yana.
- Imitation object (stone that looks like a button).
- Text on high contrast pattern.
- More than eight tissue samples.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 10.94:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like a print mark |
| photo | Macro texture: paper, metal, fabric; soft side light |
| illustration | Tissue sample alone |
| Texture | Material grain (--grain: .04) |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 3/6/3: solda parametre rayı, ortada başlık + tek CTA, sağda checklist | `shots/01-page.png` |
| Dashboard | çok yüksek | gösterge paneli ızgarası, segment çubuklar, uyarı listesi öncelik sırasıyla | `shots/01-page.png` |
| Form | orta | alanlar üst etiketli, birim ayrı, hata `E/` öneki | `shots/01-page.png` |
| Liste / tablo | yüksek | 34px satır, etiket–değer–birim, değer değişiminde accent vurgu | `shots/01-page.png` |
| Boş durum | düşük | `STBY` + "sistem beklemede" + tek eylem | `shots/01-page.png` |
| Onboarding | orta | 3 adım: sistem seç → checklist → ARM ile başlat | `shots/01-page.png` |
| Pricing | orta | karşılaştırma tablosu; limitler segment çubukla | `shots/01-page.png` |
| Giriş / ödeme | düşük | tek panel, iki adımlı doğrulama, koyu zemin | `shots/01-page.png` |
| Modal | orta | checklist: madde başına ✓/✕, ARM → CONFIRM | `shots/01-page.png` |
| Bildirim | orta | 34px uyarı, sol durum şeridi, üst üste 3 | `shots/01-page.png` |
| Hata | düşük | `FAULT` + etkilenen sistem + sonraki adım; kod gizlenmez | `shots/01-page.png` |
| Profil / ayar | yüksek | anahtar/değer listesi, birim sistemi seçimi (m/ft, kg/lb) | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.68:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.61:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.63:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 9.64:1 | ≥ 4.5 | button text |
| focus ring/ground | 10.94:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 96.8 | ≥ 60 target | thin text |

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
| "Oyun HUD'u" hissi | glow/tarama eklendi | glow yasak; derinlik yalnız bezel |
| Değerler okunmuyor | 9px etiket + düşük kontrast | etiket 10px + `--ink-soft`, değer 15px mono |
| Panel sınırı kayboluyor | tek çizgi yetersiz | dış 1px + iç 1px bezel |
| Uyarı bombardımanı | her şey FAULT | öncelik: warning > caution > advisory, tek liste |
| Yanıp sönme yoruyor | sürekli blink | 3 tur sonra sabit + etiket |
| Yanlışlıkla başlatma | tek tık | ARM → CONFIRM, 3sn pencere |
| Mobilde sıkışıyor | 3 bölge aynı ekranda | sekmeli tek bölge, 34px satır korunur |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `scandinavian-dark` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |
| Mixing | `memphis` | Two different ornamental languages compete on the same screen |
| Mixing | `dopamine-ui` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://skybrary.aero/articles/electronic-central-aircraft-monitor-ecam | SKYbrary · ECAM (Electronic Centralised Aircraft Monitor) — ECAM sistem sayfası, uyarı önceliği ve checklist mantığı |
| https://www.faa.gov/aircraft/air_cert/design_approvals/human_factors | FAA · Human Factors (design approvals) — kokpit gösterge okunurluğu ve iş yükü ölçütleri |
| https://www.easa.europa.eu/en | EASA · uçuşa elverişlilik — kritik eylem onayı ve uyarı hiyerarşisi yaklaşımı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | WCAG 2.2 · Contrast (Minimum) — koyu zeminde 10–14px metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | www.w3.org — klavye odak halkası görünürlüğü |

## AI brief

```text
Stil: Cockpit Avionics (styles/65-cockpit-avionics/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="cockpit-avionics"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Rajdhani 700) H1/H2 ve modal başlığında (büyük harf +0.06em);
  --font-body (Inter 400/600) gövde 14px/1.5; --font-mono (Share Tech Mono) tüm etiket (10px +0.2em), değer ve birim.
Yüzey: bezel = dış 1px var(--line) + iç 1px color-mix(var(--line) 60%, transparent); aktif panelde --shadow-hard (1px cyan dış halka).
  radius --radius 2px, --radius-lg 4px. Glow, blur, cam, gradient yasak.
Düzen: 3/6/3 kokpit bölgeleri — parametre rayı · birincil görev · checklist; gutter 12px, panel padding 14px.
Gösterge: etiket (10px mono üstte) + değer (15–22px mono, sağa hizalı) + birim (10px --ink-faint); segment çubuk 4px blok.
Durum: ARMED / ACTIVE / STBY / FAULT — kare nokta + büyük harf etiket; FAULT 1.2s x3 tur sonra sabit.
Kritik eylem iki adımlı: ARM → CONFIRM (3sn pencere); tek tıkla geri dönüşsüz işlem yok.
Hareket: enter 0.24s cubic-bezier(0,0,.2,1) 6px stagger 0.055 · scroll top 94% 0.28s 4px once ·
  pin kapalı · hover 70ms scale 1.004; değer saymaz sıçrar; prefers-reduced-motion zorunlu.
Yasak: neon glow, tarama çizgisi, 4px üstü radius, italik, 9px metin, sürekli blink, parallax.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Cockpit Avionics (cockpit-avionics) · family: Industrial (56–65)
Token: --bg #0a0f14 · --surface #131a21 · --ink #e8f0f4 · --accent #35d6e8 · --line rgba(232,240,244,.15)
Radius: 2px / 4px · Typography: Rajdhani / Inter / Share Tech Mono
Required: Her gösterge üçlüsü: etiket (10px mono, üstte) + değer (mono, sağa hizalı) + birim (ayrı) · Panel bezel: dış 1px --line + iç 1px soluk çerçeve; aktif panel 1px cyan dış halka · Durum etiketleri büyük harf mono: ARMED · ACTIVE · STBY · FAULT; renk + metin birlikte
Banned: Neon glow, tarama çizgisi, CRT, sürekli yanıp sönen uyarı. · 4px üstü radius, yuvarlak kart, yumuşak/geniş gölge, cam/blur. · Serif/geometrik display, italik, altı çizili bağlantı.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="cockpit-avionics"] {
  --bg: #0a0f14; --bg-2: #10161c;
  --surface: #131a21; --surface-2: #1a232b;
  --ink: #e8f0f4; --ink-soft: #9fb0ba; --ink-faint: #6d7f8a;
  --accent: #35d6e8; --accent-ink: #032026;
  --line: rgba(232,240,244,.15);
  --danger: #e4392b;
  --danger-ink: #0b0d10;
  --ok: #12b76a;
  --ok-ink: #0b0d10;
  --warn: #f79009;
  --warn-ink: #0b0d10;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 1px 3px rgba(0,0,0,.5); --shadow-hard: none;
  --font-display: "Rajdhani", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: .06em; --blur: 0px; --grain: 0;
}
```
