# 144 · Virtual Engine

> **In one sentence:** Sanal bir dünyayı düzenleyen editör: viewport, varlık hiyerarşisi ve denetçi panelini CRT başlıklı koyu mor bir motorda birleştiren arayüz.

| | |
|---|---|
| **Feeling** | teknik, oyuncul, katmanlı, doğrudan |
| **Best for** | oyun motoru editörü, sahne düzenleyici, 3B konfigüratör, sanal dünya yönetim paneli |
| **Avoid** | editoryal makale, muhasebe tablosu, sakin sağlık ekranı — koyu viewport burada yorucu olur |
| **Difficulty** | yüksek · **Accessibility** |  |
| **Family** | Experimental & Future (136–145) · **Token** | `kit/tokens.css` → `[data-style="virtual-engine"]` |
| **Composition** | `product` · `rail` · `dense` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Virtual Engine, arayüzü **editör** olarak kurar: ekranın yarısından fazlası viewport'tur (ortografik dünya ızgarası), sağda denetçi, solda varlık hiyerarşisi, altta konsol satırı. Ekran bir "ürün sayfası" değil, bir **çalışma alanı**dır.

Üç kurucu karar: (1) **viewport önce** — viewport her zaman ekranın en büyük yüzeyi ve içeriği şemadır (fotoğraf değil); (2) **tel kafes ızgara** — 32px ızgara, perspektif yok (ortografik); oyun dünyası ölçülebilir olmalı; (3) **seçim üçlü kodlanır** — seçili varlık sol 3px accent çizgi + çerçeve + listede vurgu ile gösterilir, yalnız renkle değil.

Display **VT323**'dür: CRT terminal estetiği, sayaç ve sahne adları için doğal; gövde Inter okunurluğu taşır, sayılar JetBrains Mono.

Bedeli: koyu magenta accent ve terminal fontu dikkat çeker. Bu yüzden accent yalnız seçim ve birincil eylemde kalır; glow, tarama çizgisi ve flicker yasaktır (CRT taklidi değil, editör).

### What is not
- **Pixel Art (24) değildir:** 24 Press Start 2P + blok gölge ile 8-bit oyun estetiğidir (radius 0); Virtual Engine bir **araç** arayüzüdür (radius 8/14, panel hiyerarşisi).
- **Cybercore (23) değildir:** 23 yeşil neon HUD ve tarama çizgisi kullanır; burada glow/tarama yoktur, accent magenta ve düzen editör düzenidir.
- **AI Native Mesh (39) değildir:** 39 cam kart ve mesh atmosferle soyut bir ürün dilidir; burada viewport/denetçi/hiyerarşi üçlüsü vardır.
- **Command Palette (108) değildir:** 108 klavye odaklı komut arayüzüdür (radius 2/6, none); Virtual Engine görsel düzenleme aracıdır.

### Where it comes from
Oyun motoru editörleri (Unity, Godot, Blender viewport), 3B konfigüratörler ve sahne düzenleyicileri. Ekranda yeniden kullanılmasının nedeni: "sanal dünya" ürünlerinin vitrin değil **araç** olarak sunulması; kullanıcı dünyayı izlemez, düzenler. Klişeye dönüşmemesi için korunacak detay: viewport'un gerçekten en büyük yüzey olması ve ızgaranın ortografik kalması.

### Recognition test in 3 seconds
1. Ekranın yarısından fazlası viewport; içinde 32px ızgara ve seçili varlık çerçevesi var.
2. Sağda denetçi paneli (özellik satırları), solda varlık listesi (30px satırlar).
3. Başlık/sayaçlar VT323: terminal karakteri, sabit genişlik.
4. Koyu mor zemin; accent magenta yalnız seçimde.
5. Altta tek satır konsol (zaman + mesaj) akıyor.

## Visual signature
- **Viewport:** ekranın ≥ %55'i; 32px ortografik ızgara, seçili varlıkta 1px accent çerçeve + dış halka.
- **Eksen işareti:** sol altta 44px yatay/dikey eksen çizgisi (`--ink-faint`).
- **Varlık listesi:** 30px satır, tür + kimlik + görünürlük; seçili satırda sol 3px accent.
- **Konsol satırı:** 26px yükseklik, mono 11px, son 5 olay; `--surface-2` zemin.
- **Gölge:** tek katman `0 14px 30px -26px`; glow ve tarama çizgisi yok.
- **Doku:** `--grain .02` + dünya ızgarası; CRT efekti yasak.
- **Typography:** VT323 (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#c7307f`; neutral scale `#120c1c` → `#eee8fa`.
- **Radius:** `8px` / `14px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. Viewport ekranın en az %55'i; denetçi paneli sağda sabit
2. Her varlık satırı tür + kimlik + görünürlük ikonu; kimlik mono
3. Sahne ızgarası 32px, perspektif yok (ortografik)
4. Kare hızı/sayaç her zaman mono ve tabular
5. Konsol satırı (son 5 olay) ekranın altında, tek satır kayar
6. Accent magenta yalnız seçili varlık ve birincil eylem

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#120c1c` | page background | as a card background |
| `--bg-2` | `#181024` | partition divider floor, table top | button background |
| `--surface` | `#1d142b` | kart, input, modal | full-page background |
| `--surface-2` | `#251a36` | passive chip, hover background | primary button |
| `--ink` | `#eee8fa` | title, body, icon | large background |
| `--ink-soft` | `#b3a7c9` | secondary text, description | — |
| `--ink-faint` | `#7f7395` | decorative label, separator text | interactive text |
| `--accent` | `#c7307f` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#ffffff` | text above accent | non-accent background |
| `--line` | `rgba(238,232,250,.15)` | all borders | text colour |

- Measured contrast: `ink/bg` **16.03:1** · `ink-soft/bg` **8.48:1** · `ink-faint/bg` **4.37:1 (decorative)** · `accent-ink/accent` **5.05:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (VT323) | 28px (mobile 28px) | 500 | 1.06 | -0.02em |
| H2 | same | 28px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 14px | 400 | 1.62 | 0 |
| Small body | same | 13px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
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
- Radius: `8px` (buton, input, chip), `14px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- CRT tarama çizgisi, flicker, renkli glow.
- 14px üzeri radius, hap buton.
- Gerçek fotoğrafı viewport içeriği yapmak.
- VT323 ile uzun paragraf.
- Sürekli dönen kamera veya otomatik sahne turu.
- Saniyede 1+ flaş.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

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

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 3.8:1 (≥ 3 on background/surface).
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
| Landing / hero | yüksek | Viewport 8/4, sağda denetçi önizleme, altta konsol | `shots/01-page.png` |
| Dashboard | yüksek | Hiyerarşi + viewport + denetçi üçlüsü | `shots/01-page.png` |
| Form | düşük | Varlık özellik formu: ad, tür, konum | `shots/01-page.png` |
| Liste / tablo | yüksek | 30px satır, tür/kimlik/görünürlük, zebra | `shots/01-page.png` |
| Boş durum | orta | Boş sahne ızgarası + "varlık ekle" | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: sahne → varlık → ışık | `shots/01-page.png` |
| Pricing | orta | Lisans kademeleri; özellik satırları denetçi gibi | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | Tek panel, viewport yok | `shots/01-page.png` |
| Modal | orta | Varlık denetçisi yan panel olarak | `shots/01-page.png` |
| Bildirim / toast | orta | Konsol satırı: zaman + mesaj mono | `shots/01-page.png` |
| Hata | düşük | `--danger` çerçeve + "sahne yüklenemedi" | `shots/01-page.png` |
| Profil / ayar | orta | Izgara aralığı, eksen, konsol yoğunluğu | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 16.03:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.48:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 4.37:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 5.05:1 | ≥ 4.5 | button text |
| focus ring/ground | 3.8:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.2 | ≥ 60 target | thin text |

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
| "Oyun vitrini" olmuş | viewport küçük, pazarlama metni baskın | viewport ≥ %55, metin panele taşınır |
| Seçim belirsiz | yalnız renkli kenar | sol 3px + çerçeve + liste vurgusu |
| Göz yoruyor | glow + tarama çizgisi | ikisini de kaldır |
| Düzen kayıyor | pin/scroll viewport'u kaydırıyor | pin kapalı |
| Mobilde kullanılamaz | 8/4 korunmuş | 768 altında denetçi alta |
| Font okunmuyor | VT323 gövdede | VT323 yalnız başlık/sayaç |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `pixel-art` | Same level of seriousness; accent sharing is not allowed |
| garnish | `cybercore` | Same level of seriousness; accent sharing is not allowed |
| garnish | `ai-native-mesh` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `japandi` | Two different ornamental languages compete on the same screen |
| Mixing | `minimalism` | Two different ornamental languages compete on the same screen |
| Mixing | `skeuomorphism` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://docs.godotengine.org/en/stable/tutorials/editor/index.html | Godot · Editor UI — viewport + denetçi paneli düzeni |
| https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html | Unity · Editor layout — sahne/hiyerarşi/denetçi üçlüsü |
| https://docs.blender.org/manual/en/latest/editors/3dview/navigate/index.html | Blender · Viewport navigation — ortografik ızgara ve eksen |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | WCAG 2.2 · Focus appearance — koyu zeminde odak halkası |

## AI brief

```text
Stil: Virtual Engine (styles/144-virtual-engine/style.md, tokens.json)
Token: sadece [data-style="virtual-engine"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display VT323 400 (yalnız başlık/sayaç), gövde Inter 400/600, kimlik/sayaç JetBrains Mono.
  Ölçek 11/12/13/14/20/28/46; gövde ölçü 72ch.
Yüzey: koyu mor editör (#120c1c); radius 8/14px; panel 1px var(--line); glow/tarama yok.
Imza: viewport >= %55 (32px ortografik ızgara) + varlık hiyerarşisi (30px satır) + denetçi paneli
  + alt konsol satırı; seçim üçlü kodlanır (sol 3px accent + çerçeve + liste vurgusu).
Renk: tek accent #c7307f (seçim/eylem); alarm --danger, uyarı --warn, çalışır --ok.
Hareket: enter .21s steps(6, end) y32 stagger .02; scroll top 95% .24s y40 once;
  pin yok; hover 70ms scale 1.050; reduced-motion'da kare geçişleri durur.
Yasak: CRT taraması/flicker, glow, 14px üstü radius, fotoğraf viewport, VT323 paragraf, dönen kamera.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).

Style: Virtual Engine (virtual-engine) · family: Experimental & Future (136–145)
Token: --bg #120c1c · --surface #1d142b · --ink #eee8fa · --accent #c7307f · --line rgba(238,232,250,.15)
Radius: 8px / 14px · Typography: VT323 / Inter / JetBrains Mono
Required: Viewport ekranın en az %55'i; denetçi paneli sağda sabit · Her varlık satırı tür + kimlik + görünürlük ikonu; kimlik mono · Sahne ızgarası 32px, perspektif yok (ortografik)
Banned: CRT tarama çizgisi, flicker, renkli glow. · 14px üzeri radius, hap buton. · Gerçek fotoğrafı viewport içeriği yapmak.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="virtual-engine"] {
  --bg: #120c1c; --bg-2: #181024;
  --surface: #1d142b; --surface-2: #251a36;
  --ink: #eee8fa; --ink-soft: #b3a7c9; --ink-faint: #7f7395;
  --accent: #c7307f; --accent-ink: #ffffff;
  --line: rgba(238,232,250,.15);
  --danger: #e43a2b;
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
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 14px 30px -26px rgba(4,1,10,.95); --shadow-hard: none;
  --font-display: "VT323", ui-monospace, monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0;
}
```
