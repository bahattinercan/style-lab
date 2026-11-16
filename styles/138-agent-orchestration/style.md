# 138 · AI-native Ajan Arayüzü

> **In one sentence:** Denetlenebilir ajan dili: numaralı iz kaydı, onay kapıları ve gerekçe/atıf şeritleriyle her adımı görünür kılan nötr zeminli arayüz.

| | |
|---|---|
| **Feeling** | denetlenebilir, sakin, güvenilir, şeffaf |
| **Best for** | ajan/otomasyon konsolu, kod inceleme asistanı, veri hazırlama hattı, iç araç platformu |
| **Avoid** | vitrin/landing, oyun, duygusal kampanya — iz kaydı dili heyecan taşımaz |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="agent-orchestration"]` |
| **Composition** | `product` · `utility` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
AI-native Ajan Arayüzü, ajanı **denetlenebilir bir işçi** gibi gösterir: solda numaralı iz rayı (her araç çağrısı bir satır), adımın yanında süre ve sonuç, geri alınamaz eylemlerde 2px accent çerçeveli **onay kapısı**, sonuçların yanında **gerekçe/atıf şeridi** (mono kaynak etiketi). Gösterişi feda eder; karşılığında **güven** kazanır — kullanıcı ne olduğunu, neden olduğunu ve nasıl geri alacağını görür.

Kurucu kararları üç tanedir. Birincisi **iz kaydı zorunludur**: görünmeyen adım yoktur; her satır numaralıdır ve 1px dikey konektörle bağlanır. İkincisi **onay kapısı**: yıkıcı eylem 2px accent çerçeve + gerekçe + etki listesiyle onay ister. Üçüncüsü **nötr zemin + tek accent**: mesh gradyan, cam panel ve glow yok — dikkat yalnız accent'e ve onay kapısına gider.

Bedeli: yoğunluk. Bu yüzden iz kaydı görünür alanda 12 satırla sınırlanır ve adımlar gruplanır (plan → araç çağrıları → sonuç).

### What is not
- **AI-native Mesh (39) değildir** — adaşlık dışında ölçülebilir dört fark vardır:
- **Command Palette (108) değildir:** 108 geçici bir arama katmanıdır (44px satır, chalk accent, blur karartma); 138 kalıcı bir konsoldur (iz satırları 36px, indigo accent, blur yok).
- **Log Stream (49) değildir:** 49 okuma amaçlı akan olay satırlarıdır; 138'de her satır bir **eylem** ve kararı vardır (onay, geri alma, atıf).
- **MES (59) değildir:** 59 üretim KPI panosudur; 138 ajan yürütmesinin denetim kaydıdır.

### Where it comes from
İnsan-döngüde (human-in-the-loop) otomasyon pratiğinden ve yazılım dünyasının denetim kaydı geleneğinden (audit log, CI adımları). Bugün kritik çünkü ajanlar gerçek eylem yapıyor: dosya siliyor, mesaj gönderiyor, para harcıyor. Klişeye dönmemesi için korunacak detay **iz kaydının numaralı olması** ve **onaysız yıkıcı eylem bulunmaması**.

### Recognition test in 3 seconds
1. Sol tarafta numaralı ray (01, 02, 03) ve dikey 1px konektör var; her satır bir araç çağrısı.
2. Geri alınamaz eylem kutusu 2px accent çerçeveyle ayrılıyor (onay kapısı).
3. Her sonuç satırının yanında mono kaynak etiketi (atıf) duruyor.
4. Zemin nötr açık gri; gradyan, mesh ve cam yok; tek accent indigo.
5. Radius 6px kontrol / 16px kart; hap buton yok.

## Visual signature
- **Numaralı iz rayı:** kart solunda 27px'te 1px dikey konektör + 24px'te 7px accent nokta; satır numarası mono.
- **Onay kapısı:** 2px `--accent` çerçeve + gerekçe paragrafı + etki listesi (`3 dosya silinecek`).
- **Gerekçe/atıf şeridi:** her sonucun yanında 11px mono etiket (`kaynak: repo/main@a1b2`).
- **Durum metni:** `ÇALIŞIYOR` / `ONAY BEKLİYOR` / `TAMAMLANDI` — chunk accent nokta + metin.
- **Nötr zemin:** `--bg #f4f5f6`, gradyan yok; kart ayrımı 1px çizgi + `0 1px 2px`.
- **Radius disiplini:** 6px kontrol, 16px kart; 16px üstü yasak.
- **Hareket imzası:** 270ms `cubic-bezier(.72,.04,.2,1)`, 1px — iz satırı "düşer", süzülmez.
- **Typography:** Space Mono (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#3b3f8f`; neutral scale `#f4f5f6` → `#16181c`.
- **Radius:** `6px` / `16px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Her ajan eylemi iz kaydında numaralı satır olarak görünür (araç adı + süre + sonuç)
2. Geri alınamaz eylem onay kapısından geçer: 2px accent çerçeve + gerekçe + etki listesi
3. Gerekçe/atıf şeridi zorunlu: her sonucun yanında mono kaynak etiketi
4. Tek accent, nötr zemin; mesh gradyan ve cam panel yok
5. Radius 6px kontrol / 16px kart; durum daima metinle (ÇALIŞIYOR / ONAY BEKLİYOR)
6. İz satırı 36px, ekranda en fazla 12 satır; fazlası kaydırılır

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#f4f5f6` | page background | as a card background |
| `--bg-2` | `#eaecee` | partition divider floor, table top | button background |
| `--surface` | `#ffffff` | kart, input, modal | full-page background |
| `--surface-2` | `#f7f8f9` | passive chip, hover background | primary button |
| `--ink` | `#16181c` | title, body, icon | large background |
| `--ink-soft` | `#4b5158` | secondary text, description | — |
| `--ink-faint` | `#7c838b` | decorative label, separator text | interactive text |
| `--accent` | `#3b3f8f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#f6f7ff` | text above accent | non-accent background |
| `--line` | `rgba(22,24,28,.14)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.28:1** · `ink-soft/bg` **7.35:1** · `ink-faint/bg` **3.51:1 (decorative)** · `accent-ink/accent` **8.57:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Space Mono) | 34px (mobile 24px) | 500 | 1.06 | -0.02em |
| H2 | same | 24px | 600 | 1.18 | -0.015em |
| H3 | same | 18px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (IBM Plex Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `6px` (buton, input, chip), `16px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- Mesh gradyan, cam panel, glow (39 ile örtüşür).
- İz kaydı olmadan çalışan "sihirli" adım.
- Onaysız geri alınamaz işlem.
- Çoklu parlak renk, 16px üstü radius.
- Serif display, süs illüstrasyonu.
- Renk-only durum (metin zorunlu).
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 6px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 6px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 6px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 6px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 6px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 6px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 6px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 9.16:1 (≥ 3 on background/surface).
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
| Landing / hero | düşük | H1 34px mono + tek CTA + 3 satırlık örnek iz rayı | `shots/01-page.png` |
| Dashboard | **yüksek** | 7/5: iz kaydı + gerekçe/atıf paneli | `shots/01-page.png` |
| Form | düşük | 38px input, tek kolon; etki özeti altta | `shots/01-page.png` |
| Liste / tablo | orta | 36px satır, adım no + araç + süre kolonları | `shots/01-page.png` |
| Boş durum | orta | "Henüz adım yok" + tek CTA + örnek plan | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: izinler → ilk görev → onay kuralı | `shots/01-page.png` |
| Pricing | orta | plan tablosu; aylık adım kotası mono | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | iz rayı yok; sade form + tek CTA | `shots/01-page.png` |
| Modal | orta | onay kapısı: gerekçe + etki listesi + iki karar | `shots/01-page.png` |
| Bildirim / toast | orta | alt-sağ, 3px accent şerit + kısa metin | `shots/01-page.png` |
| Hata | orta | satır noktası `--danger` + "geri al" düğmesi | `shots/01-page.png` |
| Profil / ayar | orta | onay politikası, araç izinleri, oturum kaydı | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.28:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 7.35:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 3.51:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.57:1 | ≥ 4.5 | button text |
| focus ring/ground | 9.16:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 98.5 | ≥ 60 target | thin text |

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
| "Sihirli kutu" hissi | adımlar görünmüyor | her araç çağrısını iz satırı yap |
| Güven kaybı | onaysız yıkıcı eylem | 2px accent onay kapısı + etki listesi |
| 39 ile karışıyor | mesh gradyan/cam eklenmiş | nötr zemin + opak panel |
| Atıf okunmuyor | `--ink-faint` kullanılmış | `--ink-soft` + 11px mono |
| Ray kayboluyor | konektör 1px ve %8 opaklık | %14 konektör, 7px accent nokta |
| Mobilde sıkışma | ray 44px korunmuş | 768 altı 28px, numara tek satır |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `command-palette` | Same level of seriousness; accent sharing is not allowed |
| garnish | `log-stream` | Same level of seriousness; accent sharing is not allowed |
| garnish | `terminal-ui` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `maximalism` | Two different ornamental languages compete on the same screen |
| Mixing | `claymorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Human-in-the-loop | Human-in-the-loop — onay kapısı ve geri alınabilirlik |
| https://en.wikipedia.org/wiki/AI_agent | AI agent (overview) — araç çağrısı / plan-yürüt modeli |
| https://www.nist.gov/itl/ai-risk-management-framework | NIST AI RMF — denetlenebilirlik ve kayıt zorunluluğu |
| https://www.w3.org/WAI/ARIA/apg/patterns/alert/ | WAI-ARIA · live regions — iz akışının ekran okuyucu bildirimi |

## AI brief

```text
Stil: AI-native Ajan Arayüzü (styles/138-agent-orchestration/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="agent-orchestration"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg nötr açık gri; gradyan/mesh/cam YOK (39 ile örtüşmemek için).
Tipografi: --font-display Space Mono 34/24/18 (700); --font-body Inter 14px/1.55;
  --font-mono IBM Plex Mono 11px atıf/süre (.06em).
Yüzey: --bg / --surface + 1px var(--line) + 0 1px 2px; onay kapısı 2px var(--accent) + 0 8px 24px.
  Radius 6px kontrol, 16px kart.
Renk: tek accent indigo #3b3f8f; ink/bg 16.28:1, ink-soft/bg 7.35:1, accent-ink/accent 8.57:1, ink-faint/bg 3.51:1 (konektör).
İmza: numaralı iz rayı (27px konektör + 7px accent nokta) + onay kapısı (gerekçe + etki) + atıf şeridi.
Hareket: enter 270ms cubic-bezier(.72,.04,.2,1) 1px stagger .013; scroll top 61% 290ms 6px once;
  pin yok; hover 105ms görsel 1.001. prefers-reduced-motion zorunlu.
Yasak: mesh gradyan, cam/glow, iz kaydı olmayan adım, onaysız yıkıcı eylem, >16px radius, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (iz rayını ve onay kapısını nereye koydun).

Style: AI-native Ajan Arayüzü (agent-orchestration) · family: Experimental & Future (136–145)
Token: --bg #f4f5f6 · --surface #ffffff · --ink #16181c · --accent #3b3f8f · --line rgba(22,24,28,.14)
Radius: 6px / 16px · Typography: Space Mono / Inter / IBM Plex Mono
Required: Her ajan eylemi iz kaydında numaralı satır olarak görünür (araç adı + süre + sonuç) · Geri alınamaz eylem onay kapısından geçer: 2px accent çerçeve + gerekçe + etki listesi · Gerekçe/atıf şeridi zorunlu: her sonucun yanında mono kaynak etiketi
Banned: Mesh gradyan, cam panel, glow (39 ile örtüşür). · İz kaydı olmadan çalışan "sihirli" adım. · Onaysız geri alınamaz işlem.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="agent-orchestration"] {
  --bg: #f4f5f6; --bg-2: #eaecee;
  --surface: #ffffff; --surface-2: #f7f8f9;
  --ink: #16181c; --ink-soft: #4b5158; --ink-faint: #7c838b;
  --accent: #3b3f8f; --accent-ink: #f6f7ff;
  --line: rgba(22,24,28,.14);
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
  --radius: 6px; --radius-lg: 16px;
  --shadow: 0 1px 2px rgba(22,24,28,.08); --shadow-hard: none;
  --font-display: "Space Mono", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .02em; --blur: 0px; --grain: 0;
}
```
