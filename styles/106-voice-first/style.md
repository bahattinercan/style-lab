# 106 · Ses-Öncelikli

> **In one sentence:** Arayüzün ana girişi ses olan stil: ekranın merkezinde dinleme halkası ve dalga formu, çevresinde tek satırlık transkript, hap biçimli dev butonlar.

| | |
|---|---|
| **Feeling** | davetkâr, canlı, konuşkan, sabırlı |
| **Best for** | sesli asistan, dikte/not ürünü, erişilebilirlik arayüzü, çağrı merkezi paneli |
| **Avoid** | yoğun veri tablosu, finans paneli, güvenlik uyarı ekranı — ses odağı burada veri okumayı yavaşlatır |
| **Difficulty** | orta · **Accessibility** |  |
| **Family** | Interactive (106–115) · **Token** | `kit/tokens.css` → `[data-style="voice-first"]` |
| **Composition** | `centered` · `pill` · `sparse` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
Ses-Öncelikli, ekranı **konuşma sırası** gibi kurar: merkezde dinleme halkası (eşmerkezli iki accent halka), altında dalga formu, çevresinde tek kolon transkript; tüm butonlar hap biçimli (999px) ve en az 48px. Metin yoğunluğunu feda eder; karşılığında **tek odaklı, sıraya saygılı** bir etkileşim kazanır.

Kurucu kararları üç tanedir. Birincisi **tek odak**: ekranda birincil hedef dinleme düğmesi; ikinci bir görsel odak (grafik, büyük görsel) yoktur. İkincisi **durum metinle de yazılır**: DİNLİYOR / İŞLENİYOR / HAZIR — renk tek başına anlam taşımaz, ses arayüzünde bu kritik çünkü kullanıcı ekrana bakmıyor olabilir. Üçüncüsü **iri hedefler**: 48px buton, 999px radius, cömert padding.

Bedeli: veri yoğunluğu. Bu yüzden liste ekranları 12 satırla sınırlanır; yoğun veri gereken yerde bu stil yalnız komut katmanı olarak kullanılır.

### What is not
- **Log Stream (49) değildir:** 49 mono yoğun olay akışıdır ve Space Mono ile yazılır; 106'da merkezî halka + Poppins başlık vardır, satır akışı yok.
- **AI-native Mesh (39) değildir:** 39 gradyan/ışıma ile "üretken" atmosfer kurar ve yoğun metin taşır; 106 tek accent + hap kontrol dili.
- **Liquid Glass (09) değildir:** 09 kırılma/sıvı taklit eder; 106'da cam ve blur yok, derinlik accent ışımasıdır.
- **Terminal UI (45) değildir:** 45 klavye-öncelikli kesik hareket kullanır; 106'da hareket kısa ve yumuşak (370ms), odak seste.

### Where it comes from
Sesli arayüz (VUI) araştırmalarından: tur alma (turn-taking), dinleme göstergesi, sözlü onay. Bugün geri dönüyor çünkü asistanlar ekranın yerine geçmeye başladı; klişeye dönmemesi için korunacak detay **durumun metinle yazılması** ve dalga formunun gerçek ölçüye bağlı olması (rastgele çubuk değil).

### Recognition test in 3 seconds
1. Ekranın merkezinde eşmerkezli iki accent halka var; çevresinde tek kolon metin.
2. Tüm butonlar hap biçimli ve en az 48px; köşeli buton yok.
3. Durum metni yazıyla görünüyor ("DİNLİYOR"), yalnız renkle değil.
4. Dalga formu 3–40 çubuk arasında; çubuklar accent'ten şeffafa sönüyor.
5. Zemin koyu menekşe; ikinci parlak renk yok.

## Visual signature
- **Dinleme halkası:** iki `repeating-radial-gradient` (34px ve 68px aralık), accent %26 ve %14.
- **Dalga formu:** 4px genişlik, 999px radius çubuklar; yükseklik 8–56px, accent → şeffaf gradyan.
- **Hap kontrol dili:** buton/input 999px, 48px yükseklik; chip 28px hap.
- **Accent ışıması:** `--shadow: 0 8px 40px rgba(255,138,212,.22)` yalnız dinleme katmanında.
- **Transkript mono:** IBM Plex Mono 14px/1.6; konuşulan metin `--ink`, ara metin `--ink-soft`.
- **Durum noktası:** 8px accent daire + 4px accent %22 halka (eyebrow önünde).
- **Hareket imzası:** 370ms `cubic-bezier(.2,.9,.3,1)`, 2px — neredeyse yerinde belirir, ses anlıktır.
- **Landing hero (QA):** dinleme halkası + 5px dalga çubuğu dizisi + canlı transkript altbilgisi (`scenes.landing`, yalnız CSS).
- **Typography:** Poppins (display) + Inter (body) + IBM Plex Mono (mono label).
- **Colour discipline:** a single accent `#ff8ad4`; neutral scale `#171021` → `#f1e9f7`.
- **Radius:** `24px` / `32px`; Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Mandatory rules

1. Ekranın tek odağı dinleme halidir: halka + dalga formu; ikinci bir görsel odak yok
2. Ses durumu daima metinle de yazılır (DİNLİYOR / İŞLENİYOR / HAZIR), renk tek başına yetmez
3. Butonlar hap biçimli (999px) ve en az 48px yüksekliğinde
4. Transkript metni mono (IBM Plex Mono) ve 1.6 satır aralığıyla okunur
5. Accent yalnız dinleme/vurgu için yanar; ikinci parlak renk yok
6. Yoğun tablo yok: satır sayısı ekranda 12’yi geçmez

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#171021` | page background | as a card background |
| `--bg-2` | `#1d152a` | partition divider floor, table top | button background |
| `--surface` | `#241a33` | kart, input, modal | full-page background |
| `--surface-2` | `#2b2040` | passive chip, hover background | primary button |
| `--ink` | `#f1e9f7` | title, body, icon | large background |
| `--ink-soft` | `#c0b0d0` | secondary text, description | — |
| `--ink-faint` | `#8f7fa2` | decorative label, separator text | interactive text |
| `--accent` | `#ff8ad4` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#2a0a1e` | text above accent | non-accent background |
| `--line` | `rgba(241,233,247,.16)` | all borders | text colour |

- Measured contrast: `ink/bg` **15.66:1** · `ink-soft/bg` **9.15:1** · `ink-faint/bg` **5.06:1 (decorative)** · `accent-ink/accent` **8.48:1**.
- Status colors are not derived from accent, but come from separate semantic tokens (--ok/--danger/--warn); accent is the action color.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Poppins) | 48px (mobile 30px) | 600 | 1.12 | -0.02em |
| H2 | same | 32px | 600 | 1.22 | -0.015em |
| H3 | same | 22px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.55 | 0 |
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
- Radius: `24px` (buton, input, chip), `32px` (kart, modal). Corner 4–6px; Soft rounding above 8px contradicts the operational picture.

## Bans

- Serif display ve dekoratif illüstrasyon.
- İkinci parlak renk / çoklu gradyan.
- Kalın 2px+ çerçeve, 0px keskin köşe.
- 44px altı dokunma hedefi.
- Dinleme dışında sürekli animasyon.
- Renk-only durum bildirimi.
- Gradient for decoration.
- More than five color series.
- Animated counter.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 24px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 24px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 24px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 24px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 24px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 24px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 24px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 8.69:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1.5px line, 16px box; full of status icons |
| photo | There is no photo on the data screen; single illustration in empty case |
| illustration | Lonely empty/failed single line illustration |
| Texture | None |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-rings` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | merkezde halka + tek CTA + iki satır açıklama | `shots/01-page.png` |
| Dashboard | düşük | en fazla 3 KPI; grafik yerine dalga özeti | `shots/01-page.png` |
| Form | düşük | 48px hap input, tek kolon; sesle doldurma düğmesi | `shots/01-page.png` |
| Liste / tablo | düşük | 12 satır sınırı, 44px satır | `shots/01-page.png` |
| Boş durum | orta | "Henüz konuşma yok" + tek mikrofon CTA | `shots/01-page.png` |
| Onboarding | yüksek | 3 adım: izin → mikrofon testi → ilk dikte | `shots/01-page.png` |
| Pricing | orta | iki plan kartı; öne çıkan kart accent çerçeve | `shots/01-page.png` |
| Giriş / ödeme | çok düşük | süs yok; tek CTA, hap input | `shots/01-page.png` |
| Modal | orta | transkript onayı: mono metin + iki hap buton | `shots/01-page.png` |
| Bildirim / toast | orta | alt-orta, accent nokta + kısa metin | `shots/01-page.png` |
| Hata | orta | "ANLAŞILAMADI" + tekrar dinle CTA'sı | `shots/01-page.png` |
| Profil / ayar | orta | ses/dil/tolerans ayarları, hap seçiciler | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 15.66:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 9.15:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.06:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 8.48:1 | ≥ 4.5 | button text |
| focus ring/ground | 8.69:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 94.6 | ≥ 60 target | thin text |

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
| Ekran "sohbet uygulaması" gibi | halka küçük, metin baskın | halkayı merkez ve en büyük öğe yap |
| Kullanıcı dinleme halini kaçırıyor | yalnız renk değişimi | durum metni + nokta ekle |
| Butonlar "kutu" gibi | radius 24px kalmış | buton/input 999px hap |
| Kontrast düşük | accent metin olarak kullanılmış | accent dolgu/halka; metin `--ink` |
| Dalga gürültü yapıyor | 40+ çubuk veya rastgele yükseklik | 3–40 çubuk, gerçek genliğe bağlı |
| Titreşim | halka animasyonu sürekli | animasyon yalnız dinleme halinde |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `ai-native-mesh` | Same level of seriousness; accent sharing is not allowed |
| garnish | `liquid-glass` | Same level of seriousness; accent sharing is not allowed |
| garnish | `log-stream` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `academic-paper` | Two different ornamental languages compete on the same screen |
| Mixing | `blueprint-drawing` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://en.wikipedia.org/wiki/Voice_user_interface | Voice user interface — tur alma ve durum modeli |
| https://developers.google.com/assistant/conversation-design/welcome | Google · Conversation design — dinleme/işleme/hazır durum dili |
| https://en.wikipedia.org/wiki/Waveform | Speech waveform — dalga biçimi ölçüleri |
| https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html | WCAG 2.2 · Pause, Stop, Hide — sürekli animasyon sınırı |

## AI brief

```text
Stil: Ses-Öncelikli (styles/106-voice-first/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="voice-first"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg koyu menekşe + radial accent ışıma (üst %16, sağ alt %8).
Tipografi: --font-display Poppins 48/32/22 (500, -.01em); --font-body Inter 16px/1.62;
  --font-mono IBM Plex Mono 14px/1.6 transkript + 11px etiket (.10em, uppercase).
Yüzey: --bg / --surface (1px var(--line), gölge yok) / dinleme katmanı + var(--shadow) 0 8px 40px accent.
  Buton/input 999px hap (48px), kart radius 32px.
Renk: tek parlak accent #ff8ad4; durum renkleri parlamaz, metinle birlikte.
  ink/bg 15.66:1, ink-soft/bg 9.15:1, accent-ink/accent 8.48:1, ink-faint/bg 5.06:1 (dekoratif).
İmza: iki eşmerkezli accent halka (34/68px aralık) + 4px dalga çubukları (accent → şeffaf).
Hareket: enter 370ms cubic-bezier(.2,.9,.3,1) 2px stagger .022; scroll top 95% 230ms 6px once;
  pin yok; hover 95ms görsel 1.002. prefers-reduced-motion zorunlu (halka/dalga durur).
Yasak: serif display, ikinci parlak renk, kalın çerçeve, 44px altı hedef, renk-only durum.
Çıktı: bileşen kodu + tek paragraf not (halkayı ve durum metnini nereye koydun).

Style: Ses-Öncelikli (voice-first) · family: Interactive (106–115)
Token: --bg #171021 · --surface #241a33 · --ink #f1e9f7 · --accent #ff8ad4 · --line rgba(241,233,247,.16)
Radius: 24px / 32px · Typography: Poppins / Inter / IBM Plex Mono
Required: Ekranın tek odağı dinleme halidir: halka + dalga formu; ikinci bir görsel odak yok · Ses durumu daima metinle de yazılır (DİNLİYOR / İŞLENİYOR / HAZIR), renk tek başına yetmez · Butonlar hap biçimli (999px) ve en az 48px yüksekliğinde
Banned: Serif display ve dekoratif illüstrasyon. · İkinci parlak renk / çoklu gradyan. · Kalın 2px+ çerçeve, 0px keskin köşe.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="voice-first"] {
  --bg: #171021; --bg-2: #1d152a;
  --surface: #241a33; --surface-2: #2b2040;
  --ink: #f1e9f7; --ink-soft: #c0b0d0; --ink-faint: #8f7fa2;
  --accent: #ff8ad4; --accent-ink: #2a0a1e;
  --line: rgba(241,233,247,.16);
  --danger: #e73d2d;
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
  --radius: 24px; --radius-lg: 32px;
  --shadow: 0 8px 40px rgba(255,138,212,.22); --shadow-hard: none;
  --font-display: "Poppins", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .01em; --blur: 0px; --grain: 0;
}
```
