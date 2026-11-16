# 39 · AI-native Mesh

> **In one sentence:** Koyu nötr bir zeminin üstünde iki katmanlı mesh gradyanın atmosfer kurduğu, içeriğin ise cam yüzeyler ve sakin geometrik tipografiyle taşındığı "AI konsolu" arayüzü — parlama gösteri değil, sadece ışığın yönü.

| | |
|---|---|
| **Feeling** | atmosferik, net, sakin-teknik, güvenilir |
| **Best for** | AI ürün konsolu (prompt/sohbet + panel), veri/analiz çalışma alanı, geliştirici aracı ve dokümantasyon portalı, model durumu izleme panosu, tasarım–mühendislik handoff ekranı |
| **Avoid** | regülasyon/denetim ekranı (net sınır ve yüksek kontrast zorunlu), yazdırılacak belge ve fatura, 3G'de açılan pazarlama sayfası (blur maliyeti), çocuk/eğlence uygulaması, indirim-kampanya vitrini |
| **Difficulty** | orta (cam + mesh aynı ekranda iki "gösteri" öğesi; ikisini de sıraya sokmak gerekir) · **Accessibility** |  |
| **Family** | New Wave (39–40) · **Token** | `kit/tokens.css` → `[data-style="ai-native-mesh"]` |
| **Composition** | `sticky` · `pill` · `balanced` (see `kit/render/layouts.json`) |
| **Images** | `shots/01-page.png` (single page · 1280×2400) |

## Essence

### What it is
AI-native Mesh iki katmanı ayırır: **atmosfer** ve **içerik**. Atmosfer mesh gradyandır — iki radial + bir conic katmanın `filter: blur(18px)` ile yumuşatıldığı, ekranın **≤%18**'ini kaplayan, `opacity ≤ .50` (zeminde `≤ .16`) bir ışık alanı. İçerik ise camdır: `--surface` renginin `color-mix(... 82%, transparent)` hâli, `backdrop-filter: blur(var(--blur))` (14px) ve üst kenarda `1px` iç parlaklık. Böylece ekranda tek bir "kahraman" öğe olur (mesh), geri kalan her şey onu **taşıyan** yüzeydir.

Kazandığı şey: **bağlam hissi**. Kullanıcı bir modele/veriye baktığını ekranın dokusundan anlar; mesh "hesaplama burada oluyor" der, cam kart "sonuç burada okunur" der. Feda ettiği şey: **saf sadelik ve düşük maliyet**. Her cam panel bir `backdrop-filter` maliyeti, her gradyan katman bir boya maliyetidir; bu yüzden icat edilen her yeni yüzey bütçeden düşer (bkz. § Performans kuralı 4).

Karakterin taşıyıcısı renk değil **doku hiyerarşisidir**: tipografi nötr ve geometrik (Geist yedekli Inter), radius orta (14/22px), aksan tek ve soğuk (indigo-mavi `#7c8cff`). Süs olarak ikinci bir renk, ikon kolajı veya illüstrasyon **yok**; atmosferin kendisi süstür.

### What is not
- **Glassmorphism (08) değildir.** Onda cam **kimliğin kendisidir** (yarı saydam `--surface`, doygun mor zemin, ağır blur, parlak kenar) ve atmosfer yoktur; burada cam **katman**, kimlik **mesh**'tir: zemin opak (`#0b0c10`), cam yalnız `%82` karışım, blur 14px, aksan doygunluğu düşük (HSL S ≈ %100 ama tek renk, alan ≤%8).
- **Aurora UI (12) değildir.** Aurora dev, doygun renk alanlarını **içerik** olarak kullanır ve 3–4 renk gezdirir; burada gradyan **tek renk ailesinden** (accent + ink) türetilir, iki katmanı geçmez, blur ile "leke"ye dönüşür ve hiçbir zaman metnin arkasında %18'den fazla alan kaplamaz.
- **Cyberpunk (22) / Cybercore (23) değildir.** Onlar neon, glow, saf siyah + doygun camgöbeği ve mono gövde ile "terminal" kurar; burada **glow animasyonu yok**, mono yalnız etiketlerde, gövde Inter, parlaklık yalnız 1px iç kenarda.
- **Minimalism (01) değildir.** Minimalism açık zeminde gölgeyle hacim kurar, atmosferi reddeder; burada zemin koyu, hacim **cam + mesh** ile kurulur ve radius 14/22px (minimalism 8/12px).
- **Kinetic Type (37) değildir.** Kinetic 96px'e kadar çıkan dev ölçek, `-0.03em` negatif tracking ve asit sarı ile bağırır; burada en büyük başlık **40px**, tracking **-0.01em**, aksan indigo — tipografi sakin, geometrik ve nötr.

### Where it comes from
Kökeni iki teknik gerçekliğe dayanır: (1) 2021 sonrası ürün panolarında yaygınlaşan "mesh gradient" — Figma/Stripe/Linear hattının, tek renkli gradyanı çok noktalı radial katmanlara bölüp blur ile yumuşatma pratiği; (2) `backdrop-filter`'ın 2022'de tüm motorlarda kararlı hâle gelmesiyle camın **dekor** olmaktan çıkıp **katman** olması. AI ürünleri bu dili benimsedi çünkü arayüzün "bir şey hesaplıyor" hissini vermesi gerekiyordu; ama aynı dil hızla klişeleşti (her ürün aynı mor mesh + aynı cam kart).

Klişeye düşmemesi için korunması gereken üç detay: **tek renk ailesi** (mesh accent + ink'ten türer, üçüncü renk yok), **camın ölçüsü** (blur 14px, karışım %82; daha fazlası camı "plastik" yapar) ve **nötr tipografi** (display 40px, tracking -0.01em; camın üstünde bağıran tipografi iki gösteriyi çarpıştırır).

### Recognition test in 3 seconds
1. Zeminde **iki katmanlı, tek renk ailesinden** mesh var mı ve ekranın ≤%18'ini mi kaplıyor (landing'de ≤%16 opaklık)?
2. Kartlar **cam** mı: `backdrop-filter: blur(14px)`, `color-mix(surface 82%, transparent)`, üstte `1px` iç parlaklık — ve kenarlık **1px** mi?
3. Başlık **40px** (mobil 28px), ağırlık **600**, tracking **-0.01em**, aile nötr geometrik mi; uppercase/gölge/outline yok mu?
4. Tek aksan **indigo `#7c8cff`** ve ekranın **≤%8**'i mi; ikinci doygun renk yok mu?
5. Radius **14px** (kontrol) / **22px** (kart) mı; 6px altı köşe veya 26px üstü köşe var mı?

## Visual signature
- **Mesh atmosfer:** kart içinde `.motif` katmanı — `radial-gradient(52% 46% at 18% 22%, …)`, `radial-gradient(46% 42% at 78% 74%, …)`, `conic-gradient(from 210deg at 62% 38%, …)`; radial katman `blur(16px) saturate(118%)`, conic katman `blur(22px)`; ikisi `opacity: .50`. Hepsi `var(--accent)` / `var(--ink)` türevi.
- **Cam kart:** `color-mix(in srgb, var(--surface) 82%, transparent)` + `backdrop-filter: blur(14px) saturate(112%)` + `1px solid var(--line)` + `inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent)`; radius 22px, padding 28px.
- **Tek parlaklık:** yalnız kartın **üst kenarında** 1px iç çizgi (opaklık %7). Ekranda ikinci bir parlama değeri/yonü yok — imza budur: tek değer, tek yön, tekrarsız ölçü.
- **Nötr geometrik başlık:** Geist (yedek Inter) 600, 40px, `line-height 1.14`, `letter-spacing -0.01em`, en fazla 2 satır, 24ch; `text-wrap: balance`.
- **İndigo işaret:** aktif durumda 2px `--accent` alt çizgi veya 8px dolu nokta; birincil buton dolu accent + `--accent-ink`; ekran başına **1** dolu buton.
- **Kademeli cam:** `--surface-2` yalnız ikincil yüzeyde (hover, seçili satır, chip) ve blur'suz; böylece "cam → mat" geçişi hiyerarşiyi taşır.
- **Grain:** `--grain .03` → örtü `opacity .15`, `overlay`; sabit, kaymaz, animasyonsuz.
- **Typography:** Geist (display) + Inter (body) + JetBrains Mono (mono label).
- **Colour discipline:** a single accent `#7c8cff`; neutral scale `#0b0c10` → `#f2f4f8`.
- **Radius:** `14px` / `22px`; Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Mandatory rules

1. **Atmosfer bütçesi:** mesh yalnız **iki** katman (2 radial + 1 conic aynı katman sayılır) ve **tek renk ailesinden** (accent + ink) türetilir. Sayfa zemininde `opacity ≤ .16`, kart içinde `≤ .50`; blur `16px` (radial katman) / `22px` (conic katman), sayfa wash'ı `26px`. Üçüncü renk, ikinci gradyan odağı yok.
2. **Cam formülü:** panel `background: color-mix(in srgb, var(--surface) 82%, transparent)` + `backdrop-filter: blur(var(--blur))` (`--blur: 14px`) + `1px solid var(--line)` + `box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow)`. Blur 20px üstü, karışım %90 üstü camı "buzlu plastik" yapar — yasak.
3. **İç parlaklık:** yalnız **üst kenarda** `1px` (`inset 0 1px 0`, opaklık %7). Alt/yan iç gölge, çift kenarlık, dış glow yok. Kartın ekranda "parlaması" bu tek çizgiden gelir.
4. **Performans bütçesi:** aynı anda görünen `backdrop-filter` katmanı **≤ 12** (ölçülen: veri 10 · pricing 8 · bileşenler 7 · dashboard 6 · mobil 6 · landing 4 · liste 2). Uzun listede (`> 20 satır`) satırlarda blur yok; blur yalnız kabuk yüzeylerde. `prefers-reduced-motion` + düşük güç modunda `--blur: 0px` ve cam opak `var(--surface)`'a düşer (§ Erişilebilirlik fallback).
5. **Tek aksan:** `--accent` yalnız 4 yerde — birincil buton zemini, aktif durum işareti (2px çizgi/nokta), veri serisi 1, odak halkası. Ekranın **≤%8**'i (veri ekranlarında ≤%4). `--accent-ink` accent üstünde **zorunlu** (6.56:1).
6. **Tipografi:** display 40px/1.14 (mobil 28px), ağırlık **600**, tracking `-0.01em`; gövde Inter 16px/1.6; etiket JetBrains Mono 11px uppercase `0.1em`. Toplam **6** punto basamağı: `11 · 13 · 16 · 20 · 26 · 40`. Uppercase display ve 700 display yok.
7. **Yüzey kademesi:** `--bg #0b0c10` → `--bg-2 #101218` → cam `≈ #12141b` (surface %82 + bg) → `--surface-2 #1b1e27`. Komşu iki kademe arası fark **%4–%9** parlaklık; kademeler arasında gradyan geçiş yok, geçişi **1px çizgi** yapar.
8. **Grain:** `--grain: .03` tek doku (örtü `opacity .15`, `mix-blend-mode: overlay`), yalnız gövde katmanında, `pointer-events: none`; mesh grain'in altında kalır (doku atmosferi kirletmez).

## Color

| Token | Value | Where to use | Where not to use |
| --- | --- | --- | --- |
| `--bg` | `#0b0c10` | page background | as a card background |
| `--bg-2` | `#101218` | partition divider floor, table top | button background |
| `--surface` | `#14161d` | kart, input, modal | full-page background |
| `--surface-2` | `#1b1e27` | passive chip, hover background | primary button |
| `--ink` | `#f2f4f8` | title, body, icon | large background |
| `--ink-soft` | `#a9b0c0` | secondary text, description | — |
| `--ink-faint` | `#7a8294` | decorative label, separator text | interactive text |
| `--accent` | `#7c8cff` | primary action, active state | wide background (with opacity 0.14) |
| `--accent-ink` | `#0b0c10` | text above accent | non-accent background |
| `--line` | `rgba(242,244,248,.12)` | all borders | text colour |

- Measured contrast: `ink/bg` **17.75:1** · `ink-soft/bg` **8.99:1** · `ink-faint/bg` **5.07:1 (decorative)** · `accent-ink/accent` **6.56:1**.
- Accent is a signal color; It is used in lines, labels and graphics instead of wide background.
- Accent tinted by opacity: `color-mix(in srgb, var(--accent) 14%, var(--surface))` — never invent a second hex.

## Typography

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | `--font-display` (Geist) | 28px (mobile 28px) | 500 | 1.06 | -0.02em |
| H2 | same | 26px | 600 | 1.18 | -0.015em |
| H3 | same | 20px | 600 | 1.3 | 0 |
| Body | `--font-body` (Inter) | 16px | 400 | 1.62 | 0 |
| Small body | same | 14px | 400 | 1.55 | 0 |
| Label | `--font-mono` (JetBrains Mono) | 11px | 400 | 1.2 | 0.14em |
| Button | `--font-body` | 13px | 600 | 1 | 0 |

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
- Radius: `14px` (buton, input, chip), `22px` (kart, modal). Corner 2–8px; In speculative language, geometry is sharp, rounding is measured.

## Bans

- İkinci doygun renk, üç renkli mesh, turuncu/pembe/mor karışımı gradya, "aurora" lekesi; gradyanı **animasyonla** kaydırma.
- Blur `> 20px`, cam karışımı `> %90`, `backdrop-filter` + `filter: blur()` aynı elemanda; her karta ayrı blur (bütçe: ≤12 katman).
- Neon glow, `text-shadow`, `drop-shadow`, dış parlaklık halkası, 2px ve üstü kenarlık (odak halkası hariç), alt/yan iç gölge.
- Saf siyah zemin (`#000`) ve saf beyaz metin (`#fff`); `filter: invert()` ile tema üretme.
- Uppercase display, `700` display, 48px üstü başlık, `-0.02em` altı tracking, mono gövde, 300 ağırlık.
- İllüstrasyon, 3B ikon, emoji süs, ikon dolu şerit, foto kolaj, "AI asistan" robot çizimi.
- Cam üstüne cam (kart içinde ikinci `backdrop-filter`), cam üstüne mesh (aynı anda iki gösteri).
- Sonsuz animasyon: nefes alan katman, marquee, parallax, dönen gradyan, yanıp sönen imleç (yazarken tek atım hariç).
- Yarı saydam metin (`opacity < .85` gövde), `--ink-faint`'i etkileşimli metin olarak kullanmak.
- Animasyonlu tarama.
- More than three signal colors.
- Unreadable 8px label.

## Component recipes

| Component | Height | Padding | Radius | Typography | Colour/shade | States |
| --- | --- | --- | --- | --- | --- | --- |
| Button (primary) | 44px | 0 20px | 14px | 14/600 | --accent + --accent-ink | hover: tone gets darker active: 1px down focus: 2px --accent ring disabled: --surface-2 + --ink-soft |
| Buton (ikincil) | 44px | 0 18px | 14px | 14/600 | transparent + 1px --line | hover: --surface-2 |
| Input | 44px | 0 14px | 14px | 14/400 | --surface + 1px --line | focus: 2px --accent ring error: --danger edge + 12px description disabled: --bg-2 |
| Kart | content | 20px | 14px | H3+14 body | --surface + --line + --shadow | hover only on clickable card: edge --ink 18% |
| Chip / badge | 24px | 0 10px | 999px | 11/500 mono | --surface-2 + --line | aktif: --accent + --accent-ink |
| Nav | 64px | 0 24px | — | 14/500 | --bg + alt 1px --line | active: --ink + 2px underline |
| table row | 52px | 12px 16px | — | 14/400 number mono | underline 1px --line | hover: --surface-2 · selected: left 2px --accent |
| Modal | content | 28px | 14px | H3+14 body | --surface + --shadow | arka plan --bg %72 + 8px blur |
| Toast | 44px | 0 16px | 14px | 13/500 | --ink background + --bg text | icon + single line, 4sec |
| Grafik paleti | — | — | 14px | 11px mono axis | --accent + 16% accent fill + --line reference | three series at most |

- Focus ring: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px }`; ring 6.56:1 (≥ 3 on background/surface).
- Touch target at least 44×44px; The target is enlarged by padding on the icon buttons.

## Visual language

| Item | Rule |
| --- | --- |
| icon | 1px line, 20px; like measuring mark |
| photo | Technical visual: render, diagram, macro texture |
| illustration | Diagram/scheme; no ornament illustration |
| Texture | Scan line 3% |
| Logo | Monochrome --ink, at least 24px height |

- Signature motif: `motif-mesh` (in the scene template `__MOTIF__`).
- Visual hierarchy: Maximum one large image per page; the rest is text and data.

## Screen recipes

| Screen | Density | Implementation | Image |
|---|---|---|---|
| Landing / hero | yüksek | 40px Geist 600, 7/5 asimetri, kahraman görselde mesh (opaklık .50), sayfada tek wash (.16); tek dolu CTA + tek ghost | `shots/01-page.png` |
| Dashboard | düşük | süs 0, mesh yalnız başlık bandında (.10); KPI sayısı display 700 + mono 8.5px etiket; cam panel ≤6, accent ≤%4 | `shots/01-page.png` |
| Mobil | orta | tek kolon, 28px başlık, 44px dokunma hedefi, cam yalnız tabbar + kartlar (blur ≤5) | `shots/01-page.png` |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 14/22, cam ve mat yüzey yan yana görünür | `shots/01-page.png` |
| Form | çok düşük | tek sütun 460px, 46px input, odak 2px accent + 2px offset; cam tek kart, süs 0 | `shots/01-page.png` |
| Modal / katman | orta | cam %82 + blur 14px + gölge; sahne backdrop'ı `color-mix(bg 72%)`; başlık 26px; 2 buton sağa | `shots/01-page.png` |
| Veri | düşük | 52px satır, 1px alt çizgi, çubuk üst 2px; eksen mono 8px; satırlarda blur yok (toplam blur 10) | `shots/01-page.png` |
| Gezinme | orta | cam nav 72px + alt 1px kural, aktif 2px accent alt çizgi | `shots/01-page.png` |
| Pricing | orta | 3 cam kart (eşit), orta kart üst 2px accent; tek dolu CTA | `shots/01-page.png` |
| Giriş | çok düşük | sol aside mesh wash (.10), sağda tek cam kart; hata `--danger` 1px kenar; süs 0 | `shots/01-page.png` |
| Liste | düşük | filtre çubuğu 1px alt kural, 52px satır, seçili satır sol 2px accent | `shots/01-page.png` |
| Boş / hata durumu | orta | tek 1.5px ikon + tek cümle + tek buton; 404'te display 44px→64px büyütülür, mesh wash .10 | `shots/01-page.png` |
| Ayarlar | düşük | bölüm başlıkları mono etiket + 1px kural; anahtar 44×24; tehlike bölgesi `--danger` | `shots/01-page.png` |
| Ödeme | çok düşük | özet sütunu sağda cam kart, 46px input, hairline tablo; accent yalnız ödeme butonunda | `shots/01-page.png` |
| Onboarding | orta | adım göstergesi 2px çizgi, seçenek kartı cam + hairline, tek ileri CTA | `shots/01-page.png` |
| Makale | orta | 68ch ölçü, 26px H2, cam yalnız yan sütunda (İlgili/Bülten); gövde `--bg` üstünde, wash yok | `shots/01-page.png` |
| Mobil · alt sayfa | orta | üst köşe 22px, alt köşe 0, 44px sürükleme tutamacı (1px çizgi), cam %90 | `shots/01-page.png` |
| Mobil · form | çok düşük | tam genişlik 46px input, klavye üstü 44px CTA, etiket mono 11px | `shots/01-page.png` |
| Mobil · liste | düşük | 64px satır, 1px ayırıcı, avatar yerine 14px radius baş harf kutusu, satırda blur yok | `shots/01-page.png` |

## Accessibility

| Pair | Ratio | Threshold | Note |
| --- | --- | --- | --- |
| `--ink` / `--bg` | 17.75:1 | ≥ 4.5 | body text |
| `--ink-soft` / `--bg` | 8.99:1 | ≥ 4.5 | secondary text |
| `--ink-faint` / `--bg` | 5.07:1 | ≥ 3 target | decorative only |
| `--accent-ink` / `--accent` | 6.56:1 | ≥ 4.5 | button text |
| focus ring/ground | 6.56:1 | ≥ 3 | accent ring |
| APCA `--ink` / `--bg` | Lc 100.3 | ≥ 60 target | thin text |

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
| "Her AI ürünü gibi" duruyor | Üç renkli mesh + mor-pembe geçiş + cam her yerde | Tek renk ailesi (accent + ink), iki katman, cam yalnız ≤12 yüzeyde |
| Ekran plastik/buzlu görünüyor | Blur > 20px, karışım > %90, cam üstüne cam | blur 14px, karışım %82, iç içe `backdrop-filter` yok |
| Metin camda kayboluyor | `opacity` ile soluklaştırma, `--ink-faint` gövde metni | `--ink-soft` kullan, opaklık düşürme; cam üstünde `faint` yalnız dekoratif |
| Mesh gösteriye dönüştü | Gradyan ekranın yarısını kaplıyor veya animasyonlu | Sayfa wash ≤ .16, kart içi ≤ .50, hareket sabit |
| Kartlar üst üste yüzüyor | `--shadow` her katmanda + 2px kenarlık | Gölge tek değer, kenarlık 1px, iç parlaklık yalnız üst kenarda |
| Sayfa ağır/kayıyor | >12 blur katmanı, uzun listede satır blur'u | Liste satırlarında blur yok; düşük güç modunda `--blur: 0` |
| Başlık "kurumsal" duruyor | Inter 700 + uppercase + 48px üstü | Geist 600, 40px, cümle düzeni, tracking -0.01em |
| Mobilde kırpılıyor | 40px sabit punto + 28px gutter | `clamp(28px, 3.4vw, 40px)` + gutter 16px + `text-wrap: balance` |
| Kontrast düşük | accent üstünde `--ink`, ya da `--ink-faint` etkileşimli metin | accent üstü `--accent-ink` (6.56:1), etkileşim `--ink-soft` (8.99:1) |
| Mesh leke gibi | Blur 18px altı, opaklık yüksek, üçüncü renk | blur 18px, tek aile, opaklık disiplini (§ Zorunlu 1) |

## Neighboring styles

| Direction | Style | Why |
| --- | --- | --- |
| garnish | `glassmorphism` | Same level of seriousness; accent sharing is not allowed |
| garnish | `aurora-ui` | Same level of seriousness; accent sharing is not allowed |
| garnish | `minimalism` | Same level of seriousness; accent sharing is not allowed |
| Mixing | `neo-brutalism` | Two different ornamental languages compete on the same screen |
| Mixing | `anti-design` | Two different ornamental languages compete on the same screen |
| Mixing | `cyberpunk` | Two different ornamental languages compete on the same screen |
| Mixing | `vaporwave` | Two different ornamental languages compete on the same screen |
| Mixing | `bauhaus` | Two different ornamental languages compete on the same screen |
| Mixing | `kinetic-type` | Two different ornamental languages compete on the same screen |

## References

| Source | for what |
| --- | --- |
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | MDN — backdrop-filter — cam katmanın tarayıcı desteği, @supports fallback ve maliyet notları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/color-mix | MDN — color-mix() — cam karışım formülü (surface %82 + transparent) |
| https://m3.material.io/styles/color/roles | Material 3 — Color roles — yüzey kademesi (surface / surface-container) mantığı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | WCAG 2.2 — Non-text contrast — kenarlık ve odak göstergesi için 3:1 kuralı |
| https://vercel.com/font | Geist — nötr geometrik display, 600 ağırlık |
| https://rsms.me/inter/ | Inter — gövde, 16px/1.6 nötr harf ritmi |
| https://www.jetbrains.com/lp/mono/ | JetBrains Mono — 11px uppercase 0.1em etiket |

## AI brief

```text
Stil: AI-native Mesh (styles/39-ai-native-mesh/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="ai-native-mesh"] değişkenleri; hard-coded renk/gölge/radius yasak.
Atmosfer: iki katmanlı mesh — 2 radial + 1 conic, hepsi var(--accent)/var(--ink) türevi, radial blur(16px) · conic blur(22px), sayfa wash opacity ≤ .16, kart içi ≤ .50; gradyan hareket etmez.
Cam: background: color-mix(in srgb, var(--surface) 82%, transparent); backdrop-filter: blur(var(--blur)) (14px) saturate(112%); border: 1px solid var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow); radius var(--radius-lg) 22px.
Yüzey: 4 kademe — --bg #0b0c10 → --bg-2 #101218 → cam ≈ #12141b → --surface-2 #1b1e27 (blur'suz); blur katmanı ekranda ≤12.
Renk: tek aksan indigo #7c8cff, ekranın ≤%8'i (veri ≤%4); accent üstü her zaman --accent-ink (6.56:1); ink/bg 17.75:1, ink-soft/bg 8.99:1, ink-faint/bg 5.07:1 (yalnız dekoratif).
Tipografi: --font-display (Geist, yedek Inter) 600 · 40px/1.14 (mobil 28px) · tracking --tracking (-0.01em); --font-body (Inter) 16px/1.6, ölçü ≤68ch; --font-mono (JetBrains Mono) 11px uppercase 0.1em etiket. 6 basamak: 11 · 13 · 16 · 20 · 26 · 40.
Boşluk: bölüm arası 88px (mobil 52px), kart içi 28px (mobil 18px), gutter 28px, container 1180px; hero 7/5, dashboard 3/9.
Bileşen: "Bileşen reçeteleri" tablosu birebir — buton 44px/radius 14px, input 46px/--bg-2, kart 22px cam, chip 28px --surface-2 (blur yok), odak 2px accent + 2px offset.
Hareket: basma 140ms, geçiş 220ms, vurgu 420ms, cubic-bezier(.22,.61,.36,1); prefers-reduced-motion zorunlu; gradyan/parlama animasyonu yasak.
Yasak: üçüncü renk, çok renkli mesh, blur > 20px, cam üstüne cam, cam üstüne mesh, neon glow, 2px+ kenarlık, saf siyah/beyaz, uppercase/700 display, 48px üstü başlık, illüstrasyon, parallax/marquee.
Çıktı: bileşen kodu + tek paragraf not (mesh'i ve cam parlaklığını nerede kullandın).

Style: AI-native Mesh (ai-native-mesh) · family: New Wave (39–40)
Token: --bg #0b0c10 · --surface #14161d · --ink #f2f4f8 · --accent #7c8cff · --line rgba(242,244,248,.12)
Radius: 14px / 22px · Typography: Geist / Inter / JetBrains Mono
Required: **Atmosfer bütçesi:** mesh yalnız **iki** katman (2 radial + 1 conic aynı katman sayılır) ve **tek renk ailesinden** (accent + ink) türetilir. Sayfa zemininde `opacity ≤ .16`, kart içinde `≤ .50`; blur `16px` (radial katman) / `22px` (conic katman), sayfa wash'ı `26px`. Üçüncü renk, ikinci gradyan odağı yok. · **Cam formülü:** panel `background: color-mix(in srgb, var(--surface) 82%, transparent)` + `backdrop-filter: blur(var(--blur))` (`--blur: 14px`) + `1px solid var(--line)` + `box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow)`. Blur 20px üstü, karışım %90 üstü camı "buzlu plastik" yapar — yasak. · **İç parlaklık:** yalnız **üst kenarda** `1px` (`inset 0 1px 0`, opaklık %7). Alt/yan iç gölge, çift kenarlık, dış glow yok. Kartın ekranda "parlaması" bu tek çizgiden gelir.
Banned: İkinci doygun renk, üç renkli mesh, turuncu/pembe/mor karışımı gradya, "aurora" lekesi; gradyanı **animasyonla** kaydırma. · Blur `> 20px`, cam karışımı `> %90`, `backdrop-filter` + `filter: blur()` aynı elemanda; her karta ayrı blur (bütçe: ≤12 katman). · Neon glow, `text-shadow`, `drop-shadow`, dış parlaklık halkası, 2px ve üstü kenarlık (odak halkası hariç), alt/yan iç gölge.
Output: single page (nav, hero, 3 sections, component grid, form+data, CTA, footer), 1280×2400.
Rule: colour only through var(--…); no second accent; no dark mode and no animation.
```

## Token

```css
[data-style="ai-native-mesh"] {
  --bg: #0b0c10; --bg-2: #101218;
  --surface: #14161d; --surface-2: #1b1e27;
  --ink: #f2f4f8; --ink-soft: #a9b0c0; --ink-faint: #7a8294;
  --accent: #7c8cff; --accent-ink: #0b0c10;
  --line: rgba(242,244,248,.12);
  --danger: #e3382a;
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
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 8px 30px rgba(0,0,0,.45); --shadow-hard: none;
  --font-display: "Geist", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: 0;
}
```
