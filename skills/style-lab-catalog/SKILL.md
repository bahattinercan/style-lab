---
name: style-lab-catalog
description: >-
  style-lab kataloğundan (151 stil, 22 aile bandı, 37 sahne) niyete göre 1 baskın + en fazla 1 garnitür stil seçer, token'ları [data-style] bloğundan uygular, motion.sequences imzasını kurar, koyu modu bağlar ve kapılarla doğrular. Flutter için dist/flutter/style_lab_tokens.dart (ThemeExtension + styleLabTheme) üretir; React için CSS değişkenleri. Tetikleyiciler: "stil seç", "hangi stil", "style-lab", "landing tasarla", "açılış sayfası", "dashboard görünümü", "design system", "which style", "apply tokens", "animasyon imzası", "motion imzası", "koyu mod ekle", "flutter tema", "flutter ThemeExtension", "dart token", "yeni stil ekle".
---

# style-lab Catalog

Katalog **151 stili 22 aile bandında** tutar; her stil 37 sahne şablonuyla render edilir, repoda 4 çekirdek sahne tutulur (604 PNG).
Tek kaynak `styles/<nn>-<slug>/` klasörüdür:

| Dosya | İçerik |
|---|---|
| `style.md` | kararlar: Öz · Görsel imza · Zorunlu kurallar · Yasaklar · Bileşen reçeteleri · Tuzaklar · AI brief |
| `tokens.json` | palet (açık + `palette.dark`), tipografi, shape, bileşen reçeteleri, **`motion.sequences`**, refs |
| `token-block.css` | aynı token'ların CSS blokları (açık + koyu) |
| `keywords.json` | galeri etiketleri |
| `shots/01…31.png` | render'lar (dokümanla çelişirse **görsel kazanır**) |

Bu skill **seçer, okur, uygular, doğrular**. `kit/` altyapısını (kapılar, render motoru, export,
index üretimi) yazmak bu skill'in işi değildir.

## When to Use

- Bir yüzey için **görsel dil seçilecekse** ("stil seç", "hangi stil", "style-lab").
- **Sayfa/ekran tasarlanacaksa** ("landing tasarla", "açılış sayfası", "dashboard görünümü", "tema kur").
- Var olan arayüze **katalog token'ı uygulanacaksa** (renk, tipografi, radius, gölge, cam/blur).
- **Animasyon imzası** kurulacak veya "her yerde aynı animasyon var" denildiğinde.
- **Koyu mod** eklenecekse (`palette.dark` + `[data-theme="dark"]`).
- Kataloğa **yeni stil** eklenecekse → `references/workflow.md`.

**Kullanma:** stil dışı işler (saf bug fix, veri/metin işi) · `kit/` altyapı değişikliği
(ayrı bakım işi) · PNG render dalgası (komutu öğret, çalıştırma) · ölçüsüz "zevk" tartışması.

**Sınır (öncelik):** Bu skill **neyi** istediğini seçer (stil + token). **Nasıl** yazılacağı `modern-web-guidance` yetkisindedir: koyu mod, tema reaktivitesi, renk uzayı, `@property`, container query, gölge/blur detayı kodlanırken `npx -y modern-web-guidance@latest search "<2-5 kelime>"` → `retrieve "<id>"` kullan (`light-dark()`, `color-mix()`, `design-token-reactivity`, `component-specific-light-dark-theme`). Token değerlerini MWG'ye göre değiştirme; MWG yalnız mekanizmayı verir.

## 30 saniyede karar

| Niyet | Band | Örnek slug |
|---|---|---|
| Sakin, kurumsal, okunur | Sade (01–07) | `minimalism`, `swiss-design`, `japandi` |
| Veri/operasyon yoğunluğu | Veri & Gösterge (46–55) | `telemetry-grid`, `trading-desk`, `vitals-triage` |
| Sahada/üretimde teknik | Endüstriyel (56–65) | `blueprint-drawing`, `cockpit-avionics` |
| Araç/üretkenlik arayüzü | Etkileşim (106–115) · Teknik (45) | `command-palette`, `terminal-ui` |
| Kültürel kimlik, zanaat | Kültürel & Bölgesel (66–75) | `levant-calligraphy`, `nordic-folk` |
| Vitrin, marka manifestosu | Hareket & Optik (96–105) | `kinetic-marquee`, `depth-parallax` |
| Konsept/gelecek anlatısı | Deneysel & Gelecek (136–145) | `speculative-scifi`, `agent-orchestration` |
| Sinematik vitrin/prestij (emlak, ajans, lansman, otel, lookbook, koyu panel) | Sahne & Prestij (146–151) | `noir-estate`, `agency-portfolio`, `dark-dashboard` |

Tam tablo (21 band × 3 tipik kullanım): `references/families.md`. Stil listesi: `docs/katalog.md`.
Makine-okur: `kit/styles.index.json` (151 stil, `docsReady: true`).

## Procedure

### 0 · Bağlamı kur (30 sn)

```bash
node kit/pick.mjs --intent "uzun okuma + sakin + kurumsal"     # 3 aday + gerekçe + dosya yolları
node kit/pick.mjs --intent "veri paneli" --family "Veri & Gösterge" --limit 5
node kit/pick.mjs --families                                   # 22 aile bandı
node -e "const i=require('./kit/dist/index.slim.json');console.log('stil:',i.count)"   # 151
bash kit/gates.sh   # temel durum: 16 adım temiz mi
```

Katalog sayılarını **ezberleme**; sayı gerekiyorsa `kit/dist/report.md` (`node kit/report.mjs`) üretir.
`kit/styles.index.json` 1 MB — ajan onu okumaz; `pick` + `index.slim.json` (89 KB) kullanılır.

### 1 · Stil seç (1 baskın + en fazla 1 garnitür)

1. Niyeti 2–3 **ölçülebilir** kritere çevir ("uzun okuma + sakin + kurumsal").
2. `node kit/pick.mjs --intent "<niyet>" --limit 3 --garnish` — adayların **gerekçe** satırını oku;
   eşleşme zayıfsa niyeti somutlaştır ("panel" yerine "telemetri + finans paneli").
3. `references/families.md`'den 2–3 aday band seç.
4. Adayları `keywords.json` + `style.md → ## Öz` ile daralt; **birini baskın** seç.
5. Garnitür gerekiyorsa yalnız `tokens.json → neighbors.compatible` içinden seç.
   `neighbors.forbidden` **kullanılmaz** (`check-schema` bunu denetler).
6. Seçimi tek cümleyle gerekçelendir: "X baskın çünkü …; Y garnitür çünkü …".

Garnitür kuralı: tek bir alt ağaçta (`[data-style="Y"]` sarmalayıcı) yaşar, baskın stilin
değişkenlerini ezmez. Koyu modda sarmalayıcı **iki öznitelik** taşır: `<div data-style="Y" data-theme="dark">`
(koyu bloklar bileşik seçici; yalnız `data-style` verirsen garnitür açık paletle boyanır). 3+ stil kimlik kaybıdır, "zenginlik" değil.

### 2 · Oku (uygulamadan önce, kısa)

1. `style.md` → `## Öz` (Nedir / **Ne değildir**), `## Görsel imza`, `## Zorunlu kurallar`,
   `## Yasaklar`, `## Bileşen reçeteleri`, `## Tuzaklar`, `## AI brief`.
2. `tokens.json` → `palette`, `palette.dark`, `typography`, `shape`, `spacing`, `grid`,
   **`layout` (hero/nav/density)**, `components`, `motion.sequences`, `must` / `mustNot`.
3. `shots/01-landing.png` · `02-dashboard.png` · `04-components.png` · `17-dark-landing.png`.

### 2b · Kompozisyon arketipini uygula (şema v3)

Stil yalnız renk değil **iskelet** de taşır: `tokens.json → layout.hero | nav | density`.
Uygularken ekranı bu arketiple kur (token'ları uygulayıp varsayılan split hero'ya dönmek
"aynı site, farklı boya" üretir — kataloğun v4'teki hatası buydu).

| `layout.hero` | Ne kuracağın |
|---|---|
| `split` / `split-reverse` | kopya + tek görsel panel; `reverse` görseli sola alır |
| `centered` | ortalanmış tek mesaj + altta geniş görsel bandı |
| `type` | görsel yok; başlık ekranın kendisi (poster ölçeği, 90–110px) |
| `fullbleed` | medya sol kenara taşar (kart yok), kopya sağda nefes alır |
| `product` | kopya üstte küçük, dev ürün paneli altta |
| `index` | kopya solda dar, sağda 2×2 iş/kayıt ızgarası |
| `sticky` | solda yapışkan kopya, sağda kayan 3 panelli hikâye |

`nav`: `inline` (marka+linkler+CTA) · `pill` (yüzen hap) · `split` (linkler sağda, tek metin CTA) ·
`utility` (ince yardımcı satır + ana satır) · `rail` (solda dikey ray).
`density`: `sparse` (ekran başına ≤5 öğe) · `balanced` · `dense` (veri hissi).

Referans: `kit/render/partials/hero-<id>.html` + `nav-<id>.html`; gerekçeler `kit/render/layouts.json`.

### 3 · Token'ları uygula

```html
<!-- kök: tek data-style; koyu mod ayrı öznitelik -->
<html data-style="terminal-ui">
<!-- <html data-style="terminal-ui" data-theme="dark"> -->
```

```css
/* yalnız var(--…) — hard-coded renk/radius/gölge/font YOK */
.card   { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.btn    { background: var(--accent); color: var(--accent-ink); border-radius: var(--radius); }
.muted  { color: var(--ink-soft); }        /* --ink-faint yalnız dekoratif */
.focus:focus-visible { outline: 2px solid var(--focus, var(--accent)); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }
```

Kaynak sırası: `kit/tokens.css → [data-style="<slug>"]` → (yoksa) `styles/<nn>-<slug>/token-block.css`
→ (paket) `kit/dist/tokens.all.css` · Tailwind için `kit/dist/tailwind.theme.css`
(tekil stil: `node kit/export-tokens.mjs --styles <slug> --split` → `kit/dist/<num>-<slug>/tokens.css`).

Sözleşme değişkenleri (20): `--bg --bg-2 --surface --surface-2 --ink --ink-soft --ink-faint
--accent --accent-ink --line --radius --radius-lg --shadow --shadow-hard --font-display
--font-body --font-mono --tracking --blur --grain`. Ek: `--focus`, `--danger/--ok/--warn`,
`--space-1…8`, `--data-1…4`.

Bileşen ölçüleri `## Bileşen reçeteleri` tablosundan **birebir** alınır; "yaklaşık" ölçü kimliği bozar.

### 4 · Animasyon imzasını kur

`tokens.json → motion.choreography` **hangi desenin** kullanılacağını, `motion.sequences` **hangi sayılarla**
kullanılacağını söyler (şema v4). Önce deseni kur (maske/perde/blur/kademe/pin), sonra süre-eğri-offset'i
o stilin değerleriyle doldur. Desen kimliğini değiştirme: `enter` `fade-rise` diyorsa `clip-curtain` kullanma.
Sözlük: `kit/render/motion/patterns.json` · arketip kuralı: `sticky ⇒ pin-scrub`, `index ⇒ grid-stagger`.

Sayıları **olduğu gibi** kullan:

```css
.reveal {
  opacity: 0; transform: translateY(<scroll.offsetY>);
  transition: opacity <scroll.duration> <enter.ease>, transform <scroll.duration> <enter.ease>;
}
.reveal.in { opacity: 1; transform: none; }
.hero-visual:hover { transform: scale(<hover.imageScale>); transition-duration: <hover.duration>; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }
```

```js
// scroll reveal: eşik = tokens.json → scroll.trigger ("top 87%" → rootMargin "-13% 0px 0px 0px")
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); if (<scroll.once>) io.unobserve(e.target); }
}, { rootMargin: '-13% 0px 0px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
```

- **Varsayılan eğri kullanma.** `ease`/`ease-out`/`linear` yerine stilin `enter.ease` değeri
  (ör. `steps(3, end)`, `cubic-bezier(.18,.86,.24,1)`).
- `pin.enabled: false` ise parallax/sabitlenen bölüm ekleme; `true` ise `pin.scrub` değerini kullan.
- Yalnız `transform` + `opacity` animasyonla; `top/left/width/height` yasak.
- `prefers-reduced-motion` zorunlu (yukarıdaki blok); pin/scrub kapanır, dekor statik kalır.
- `motion.family` = stil bandının adı (tek kaynak `kit/families.json`). Aile içinde iki stil
  7 parametrenin **≥2'sinde** ayrışır → kapı: `node kit/motion-check.mjs`.

### 4b · Flutter'a uygula (CSS yok)

Flutter CSS değişkeni tüketmez; hazır emitter var — elle `Color(0x…)` yazma:

```bash
node kit/normalize-motion.mjs        # prose → dist/motion.json (ms + {kind, points} eğri)
node kit/fetch-fonts.mjs             # kit/fonts/ttf/ + INDEX.json (ilk seferde)
node kit/export/flutter.mjs          # dist/flutter/style_lab_tokens.dart + pubspec.fonts.yaml
node kit/export/flutter.mjs --verify # dart analyze + flutter test (kanıt)
```

```dart
MaterialApp(
  theme: styleLabTheme(slug: '<slug>'),
  darkTheme: styleLabTheme(slug: '<slug>', brightness: Brightness.dark),
);
// bileşen içinde:
final t = context.styleLab;
Text('Başlık', style: t.h2);
Container(padding: t.padding(3), decoration: BoxDecoration(color: t.surface, borderRadius: BorderRadius.circular(t.radiusLg)));
AnimatedSlide(duration: t.motion.enterDurationValue, curve: t.motion.enterCurve, offset: Offset(0, t.motion.enterOffsetY / 100));
```

Kurallar: koyu mod yalnız paleti değiştirir (tipografi/hareket aynı); `letterSpacing` px'tir
(em × fontSize, emitter yapar); inset gölge `BoxShadow`'da yok — `styleLabInsetShadowNotes`'a bak;
`MediaQuery.disableAnimations` açıksa `StyleLabTokens.reducedDuration` kullan.
Yeni hedef (SwiftUI/Compose) eklemek için `kit/export/<hedef>.mjs` yaz; ayrıştırıcı `kit/lib/tokens.mjs`.

### 5 · Koyu mod

Koyu palet **elle yazılmaz**; `palette.dark` (10 anahtar) zaten var (151/151 stil):
```css
[data-theme="dark"] { color-scheme: dark; }
/* token'lar [data-theme="dark"][data-style="<slug>"] bloğundan gelir; filter: invert() YASAK */
```

Ölçüm: `node kit/check-contrast.mjs --strict-soft` — açık **ve** koyu bloklar; WCAG oranı + APCA (Lc)
+ odak halkası (`--focus` hem `--bg` hem `--surface` üzerinde ≥ 3:1) birlikte denetlenir
(gövde ≥ 4.5:1, büyük metin ≥ 3:1, accent üstü ≥ 4.5:1). `--ink-faint` dekoratiftir, etkileşimli metin değil.

### 6 · Doğrula

```bash
node kit/render/render-shots.mjs --styles <slug> --force      # 37 sahne
node kit/render/optimize-shots.mjs --styles <slug>            # kayıpsız sıkıştır (yalnız küçülürse yazar)
node kit/render/optimize-shots.mjs --styles <slug> --verify    # piksel-identical doğrula
bash kit/gates.sh                                             # 41 adım: galeri→slim indeks→fragment→şema→kontrast→tablo→hareket→motion normalize→export→font→flutter→react→lint→regresyon
```

Tek tek: `node kit/check-schema.mjs` · `node kit/check-contrast.mjs --strict-soft` ·
`node kit/motion-check.mjs` · `node kit/normalize-motion.mjs --check` · `node kit/sync-shot-tables.mjs --check` ·
`node kit/export-tokens.mjs --check` · `node kit/fetch-fonts.mjs --check` · `node kit/export/flutter.mjs --verify` ·
`node kit/build-gallery.mjs --check` · `node kit/render/pixel-diff.mjs --a <png> --b <png>`.

Uygulanan kod katalogla uyumlu mu: `node kit/style-lint.mjs <dizin> --style <slug>`
(renk/font literali hata, radius/süre uyarı; `--strict` ile hepsi kapı). Kural listesi: `--list-rules`.

Üretilen `styles/<slug>/shots/01-landing.png`'yi aç: `## Görsel imza` maddelerinden **en az 2'si**
görünmüyorsa uygulama eksiktir (yeniden yaz, "yaklaşık" bırakma).

### 7 · Yeni stil (yalnız gerekiyorsa)

`references/workflow.md` — 8 adım: niyet/band/numara → `style.md` → `tokens.json` →
`token-block.css` → `motion.sequences` → fragment + `keywords.json` → `apply-fragments --apply`
→ render + optimize + kapılar. Mevcut stili uygulamak için bu akışa girme.

## Pitfalls

| Tuzak | Neden olur | Doğrusu |
|---|---|---|
| Hard-coded `#hex`, `box-shadow: 0 2px…`, `border-radius: 12px` | hızlı prototip | Yalnız `var(--…)`; stil değişince bileşen bozulmamalı |
| Varsayılan `ease-out` | kütüphane varsayılanı | Stilin `motion.sequences.enter.ease` değeri |
| 2+ garnitür | "daha zengin görünsün" | 1 baskın + en fazla 1 garnitür, tek alt ağaçta |
| `neighbors.forbidden` stili karıştırmak | tabloya bakılmadı | Yalnız `neighbors.compatible`; `check-schema` yakalar |
| Koyu modu `invert()` ile çevirmek | kolay yol | `[data-theme="dark"]` + `palette.dark` |
| `kit/tokens.css` / `shots.config.mjs` / `gallery.data.mjs` elle düzenlemek | "burada da yazayım" | Bu dosyalar **üretilir**: `styles/<slug>/token-block.css` + `shots.config.fragment.mjs` + `apply-fragments --apply` |
| Render sonrası sıkıştırmayı unutmak | PNG'ler ~%8–11 büyür | `optimize-shots --styles <slug>` (yaz) + `--verify` (piksel doğrula) |
| Doküman yerine görselden ölçü kopyalamak | görsel 1280px'e göre üretildi | Ölçüler `style.md` tablolarından; karakter görselden |
| `styles.index.json` sayısını ezberlemek | dosya üretilir, değişir | Sayıyı `node -e` veya `kit/dist/report.md` ile ölç |
| Kapıları atlayıp "tamam" demek | hızlı teslim | `bash kit/gates.sh` çıktısı olmadan bitmiş sayılmaz |
| `kit/`, `README`, `playbook` düzenlemek | kapsam kayması | Skill kataloğu **kullanır**; altyapı değişikliği ayrı bakım işidir |

## Verification

Bir uygulama "bitti" sayılmadan:

- [ ] Seçim gerekçeli: 1 baskın + (varsa) 1 garnitür, `neighbors.compatible` içinden.
- [ ] `style.md` okundu: Zorunlu kurallar + Yasaklar + Bileşen reçeteleri uygulandı.
- [ ] Kodda tek bir renk/radius/gölge/font literali yok:
      `grep -nE "#[0-9a-fA-F]{3,8}|rgba?\(|border-radius: *[0-9]|box-shadow: *[0-9]" <dosya>`
- [ ] Kökte `data-style="<slug>"`; koyu mod `data-theme="dark"` (elle palet yok, `invert()` yok).
- [ ] Motion: `enter/scroll/pin/hover` değerleri `tokens.json` ile birebir; varsayılan eğri yok;
      `prefers-reduced-motion` bloğu var; `pin.enabled` ile tutarlı.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1, accent üstü ≥ 4.5:1 (`--strict-soft`).
- [ ] Odak halkası görünür (`--focus`), dokunma hedefi ≥ 44px, 390px'te taşma yok.
- [ ] `node kit/motion-check.mjs` → aile içi kopya 0.
- [ ] Kompozisyon: ekran `layout.hero` arketipine göre kuruldu (varsayılan split'e dönülmedi);
      `node kit/check-layout.mjs` temiz, `kit/dist/composition.md` güncel.
- [ ] `node kit/apply-fragments.mjs --check` → "senkron" (yeni stil eklediyse).
- [ ] `bash kit/gates.sh` → "kapılar: temiz" (ya da kalan hatanın gerekçesi yazılı).

Referanslar: `references/families.md` (21 band, tipik kullanım, doğrulama komutları) ·
`references/workflow.md` (yeni stil, 8 adım) · `docs/katalog.md` (151 stil listesi) ·
`playbook.md` §2 seçim, §6 hareket, §6.2 imza, §17 koyu mod, §18 export.
