# 08 · Glassmorphism

> **Bir cümlede:** Medyanın üstünde duran buzlu cam katman; derinlik ışıktan ve bulanıklıktan gelir, süs ne kadar azsa cam o kadar inandırıcı olur.

| | |
|---|---|
| **Hissiyat** | katmanlı, optik, modern, hafif "premium OS" |
| **En iyi** | medya üstü bar/sheet, ses-video oynatıcı, harita/AR katmanı, cam nav |
| **Kaçın** | yoğun veri tablosu, form ağırlıklı yönetim paneli, düşük kontrastlı ekranlar |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (kontrast + performans) |
| **Aile** | Yüzey (08–12) · **Token** | `kit/tokens.css` → `[data-style="glassmorphism"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Cam, bir yüzey değil bir **ilişki**dir: panelin arkasındaki içeriği bulanıklaştırır, kenarında 1px ışık çizgisi bırakır ve zeminden ayrışır. Bu yüzden glassmorphism **boş zeminde çalışmaz** — arkasında renk, görsel veya hareketli medya olmalıdır.

Kazandığı şey katmanlılık: navigasyon, oynatıcı, sheet gibi "içeriğin üstünde ama içeriği saklamayan" yüzeyler için doğal bir çözüm. Feda ettiği şey okunabilirlik payı: her cam katman kontrasttan yer.

### Ne değildir
- **Liquid Glass değildir.** Liquid Glass optik kırılma (refraction), yay fiziği ve dinamik highlight kullanır; glassmorphism statik blur + yarı saydam dolgudur.
- **Neumorphism değildir.** Neumorphism tek renk üzerinde kabartma yapar; glassmorphism arkasındaki içeriği gösterir.
- **Aurora UI değildir.** Aurora zeminde gradient blob taşır; glassmorphism asıl olarak *katman* üretir (zemin nötr bile olabilir).
- **"Her karta blur" değildir.** Ekran başına cam katman sayısı 3'ü geçerse hem performans hem hiyerarşi çöker.
- **Yarı saydam beyaz kutu değildir.** Blur + 1px ışık kenarı + doygunluk artışı olmadan sonuç sadece "soluk kart" olur.

### Nereden gelir
Windows Vista/7 Aero ve macOS'un materyal dilinden miras; 2020'de "glassmorphism" adıyla popülerleşti, Apple'ın iOS/macOS materyal sistemi ve Windows 11 Acrylic ile kurumsallaştı. Bugün doğru kullanımı "dekoratif her yerde cam" değil, **medya üstü tek katman** disiplinidir.

### 3 saniyede tanıma testi
1. Panelin arkasındaki renk/görsel **bulanık** mı görünüyor (blur ≥ 12px)?
2. Panel kenarında 1px açık renkli "ışık çizgisi" var mı?
3. Zemin düz mü, yoksa renk geçişleri/blob var mı? (Düz ise cam okunmaz.)
4. Aynı ekranda kaç cam yüzey var? (Doğru: ≤ 3, ideal 1–2.)
5. Metin cam üstünde **dolgu rengiyle** mi yazılmış, yoksa şeffaf mı? (Doğru: tam opak `--ink`.)

## Zorunlu kurallar

1. **Cam arkasında içerik olmalı.** Düz zeminde cam kullanılmaz; zemin 2–3 renk blob taşır.
2. **Blur + ışık kenarı birlikte.** `blur(var(--blur)) saturate(140%)` + 1px `--line` + inset highlight.
3. **Katman sayısı sınırlı.** Ekran başına ≤ 3 cam yüzey (mobilde ≤ 2); cam üstü cam yasak.
4. **Metin tam opak.** Cam üstünde `--ink`; yarı saydam gövde metni yok.
5. **Opak fallback zorunlu.** `@supports not (backdrop-filter)` → karışım yüzey, blur 0.
6. **Hareket optik değil.** `backdrop-filter` animasyonu yok; geçişler `transform`/`opacity` ile.

## Yasaklar

- Yarı saydam gövde metni, cam üstünde 12px altı yazı.
- Düz zemin üstünde cam panel; ışık kenarı olmayan "soluk kart".
- Cam üstünde ikinci blur katmanı (çift cam).
- `backdrop-filter` animasyonu veya sürekli blur değişimi.
- Sert gölge (`--shadow-hard`), 3'ten fazla doygun blob rengi.

## Görsel imza
- **Blur 16–24px** (`--blur: 18px`), `backdrop-filter: blur(var(--blur)) saturate(140%)`.
- **Yarı saydam yüzey:** beyaz %10–14 (`--surface: rgba(255,255,255,.12)`), ikincil yüzey %6–8.
- **Işık kenarı:** 1px `--line` (beyaz %24) + üst kenarda `inset 0 1px 0 rgba(255,255,255,.28)` highlight.
- **Koyu, doygun zemin:** `#1b1035` → `#2a1a5e` arası mor; camın arkasında 2–3 renk blob.
- **Yumuşak gölge:** `0 8px 32px rgba(0,0,0,.22)` — sert gölge yok.
- **Hafif grain:** `--grain: .02` (banding kırar), görünür doku değil.
- **Tipografi nötr:** Inter, `-0.01em` tracking; camın kendisi süs olduğu için yazı sade kalır.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#1b1035` | sayfa zemini | cam yüzey yerine |
| `--bg-2` | `#2a1a5e` | zemin gradient üst tonu, sidebar | buton |
| `--surface` | `rgba(255,255,255,.12)` | cam panel, nav, kart | opak zemin gereken yerde |
| `--surface-2` | `rgba(255,255,255,.07)` | ikincil cam, hover | birincil buton |
| `--ink` | `#ffffff` | tüm metin (tam opak) | yarı saydam metin |
| `--ink-soft` | `rgba(255,255,255,.78)` | açıklama, ikincil | 12px altı etiket |
| `--ink-faint` | `rgba(255,255,255,.55)` | dekoratif etiket | etkileşimli metin |
| `--accent` | `#7dd3fc` | birincil buton, aktif, grafik | geniş dolgu (okunmaz) |
| `--accent-ink` | `#06222e` | accent üstü metin | accent olmayan zeminde |
| `--line` | `rgba(255,255,255,.24)` | cam kenarı, ışık çizgisi | metin rengi |

- Ölçülen kontrast: `ink/bg` **17.92:1** · `ink-soft/bg` **11.10:1** · `ink-faint/bg` **6.04:1** · `accent-ink/accent` **9.87:1** · cam yüzey üstünde `ink` **12.83:1**.
- Cam üstü metin **her zaman tam opak**; `rgba(255,255,255,.7)` gövde metni yasak.
- Blob renkleri: `--accent` + 1 mor + 1 pembe; toplam 3 renk, ekran başına 3'ten fazla değil.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | `--font-display` (Inter) | 56px (mobil 32px) | 600 | 1.06 | `-0.02em` |
| H2 | aynı | 26px | 600 | 1.2 | `-0.01em` |
| H3 | aynı | 18px | 600 | 1.3 | `0` |
| Gövde | `--font-body` | 16px | 400 | 1.6 | `0` |
| Etiket | `--font-mono` | 10px | 400 | 1.2 | `0.16em`, uppercase |
| Buton | `--font-body` | 14px | 600 | 1 | `0` |

- Display ağırlığı 700 değil **600**: cam üstünde kalın harf "şişer", bulanıklıkla yarışır.
- Blur'lu yüzeyde punto bir kademe büyük seç (+1–2px); 12px altı metin cam üstünde kullanılmaz.
- Ölçü: `h1 { font-size: clamp(2rem, 1.1rem + 3.4vw, 3.5rem) }`.
- Gövde satır uzunluğu 62ch (cam panel içinde 54ch).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 6/6, içerik 8 + sağ 4) |
| Gutter | 24px (mobil 16px) |
| Container | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1200 px |

- Cam katman **kenarlardan kopmaz**: nav/sheet ekran kenarına yapışır, 16–24px iç boşlukla.
- Katman hiyerarşisi dikey: zemin (blob) → cam panel → içerik. Üçten fazla katman (cam üstü cam) kullanma.
- Bölüm arası boşluk 72px; cam kartlar arası 16–20px (cam+cam çakışması okunmaz).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + blob katmanı | yok | sayfa |
| Cam kart | `--surface` + `--blur` + 1px `--line` | `0 8px 32px rgba(0,0,0,.22)` | içerik paneli |
| Yüzen | `--surface` + `--blur` + inset highlight | aynı + `inset 0 1px 0 rgba(255,255,255,.28)` | nav, sheet, modal, oynatıcı |

- Derinlik **arkadaki içerikten** gelir: blur + doygunluk + ışık kenarı. Gölge yalnızca destek.
- Radius: `--radius` 16px (buton, input, chip), `--radius-lg` 24px (kart, modal).
- Opak fallback zorunlu: `@supports not (backdrop-filter: blur(1px))` → `--surface: color-mix(in srgb, var(--bg) 88%, var(--ink) 12%)`, `--blur: 0` (tokens.css'te tanımlı).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 16px | 14/600 | `--accent` (opak) + `--accent-ink` | hover: brightness(1.06) · active: scale(.98) · focus: 2px beyaz halka %70 · disabled: %45 opak |
| Buton (cam/ikincil) | 44px | 0 18px | 16px | 14/600 | `--surface-2` + blur + 1px `--line` | hover: `--surface` |
| Input | 44px | 0 14px | 16px | 14/400 | `--surface-2` + blur, placeholder `--ink-faint` | focus: 2px `--accent` halka · error: `--danger` kenar + 12px metin |
| Kart | içerik | 24px | 24px | H3 + 14 gövde | `--surface` + blur 18px + `--line` + `--shadow` | hover (tıklanabilir): blur 22px, kenar %32 |
| Chip | 26px | 0 11px | 999px | 10/500 mono | `--surface-2` + `--line` | aktif: `--accent` zemin + `--accent-ink` |
| Nav | 64px | 0 24px | 0 (kenara yapışık) | 14/500 | `--surface` + blur 20px + alt 1px `--line` | aktif: metin `--ink`, altında 2px `--accent` |
| Sheet / modal | içerik | 28px | 24px (üst köşeler) | H3 + 14 | `--surface` + blur 24px + inset highlight | backdrop: `rgba(10,6,24,.45)` + blur 4px |
| Tablo satırı | 52px | 12px 16px | 0 | 14/400 | satır altı `rgba(255,255,255,.12)` | hover: `--surface-2`; cam üstünde zebra yok |
| Toast | 46px | 0 16px | 16px | 13/500 | `--surface` + blur + `--line` | ikon + tek satır, 4sn |
| Oynatıcı bar | 56px | 0 16px | 999px | 13/500 | `--surface` + blur 20px + inset highlight | progress: `--accent` %100, ray %24 beyaz |

- Odak halkası cam üstünde **beyaz %70 + 2px** olabilir; accent halka düşük kontrastlı kalıyorsa beyaz kullan.
- Dokunma hedefi 44×44px; cam butonlarda görsel 36px olsa da padding ile 44px'e çıkar.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, beyaz; cam üstünde 20px kutu |
| Fotoğraf | Camın arkasında **doygun** görsel; cam panel %12 beyazla içeriği yumuşatır |
| İllüstrasyon | Blob/gradient tercih edilir; çizgi illüstrasyon camla yarışır |
| Doku | `--grain: .02` — banding kırıcı, görünür grain değil |
| Logo | Beyaz monokrom; cam nav üstünde 20–24px |
| Hareketli görsel | Arka planda yavaş hareket eden blob kabul edilir (≤1, 20s+ döngü) |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Zemin: 3 blob gradient; nav cam; hero'da tek cam kart içinde 3 satır mini UI | `shots/01-landing.png` |
| Dashboard | düşük | Cam yalnızca sidebar + topbar; KPI kartları opak `--surface-2` değil, cam ama blur 18px sabit | `shots/02-dashboard.png` |
| Form | çok düşük | Cam panel içinde tek sütun 480px; input cam, odak halkası accent | — |
| Liste / tablo | düşük | Tek cam panel; satır ayrımı 1px beyaz %12; zebra yok | — |
| Boş durum | orta | Cam kart + tek cümle + accent buton; illüstrasyon yerine blob | — |
| Onboarding | yüksek | Sayfa başına tek cam kart, arkasında değişen blob; 3 adım | — |
| Pricing | orta | 3 cam kolon, orta kolon accent kenar + "önerilen" chip | — |
| Giriş / ödeme | çok düşük | Cam kart 420px, arkada sade gradient; 2 alan + 1 buton | — |
| Modal | orta | Cam sheet, üst köşe 24px, backdrop blur 4px | — |
| Bildirim / toast | orta | Sağ üst cam pill, 4sn, ikon + metin | — |
| Hata | düşük | Cam panel içinde `--danger` kenarlı input + 12px açıklama | — |
| Profil / ayar | orta | Cam sidebar + cam içerik; iki cam yüzey sınırı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `cubic-bezier(.34,1.4,.64,1)` | `transform: scale(.98)` |
| Giriş | 700ms | `power3.out` | `opacity` + 20px `translateY`, stagger 50ms |
| Scroll (`top 80%`) | 850ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 260ms | aynı eğri | `transform: scale(1.02)` |
| Ödül / vurgu | 400ms | `ease-in-out` | accent halka `opacity` 0→1 |

- `backdrop-filter`'ı sürekli animasyonla değiştirme (mobilde kare düşürür); iki statik değer arasında `opacity` ile geçiş hissi ver.
- `prefers-reduced-motion`: yay eğrisi `ease-out`a düşer, süreler 0.01ms.
- `prefers-reduced-transparency`: `--blur: 0`, `--surface: var(--bg-2)` (tokens.css'te tanımlı).

## Koyu mod

Bu stil **koyu tabanlı**; koyu mod zaten ana mod. Açık tema gerekiyorsa:

| Token | Koyu (varsayılan) | Açık varyant |
|---|---|---|
| `--bg` | `#1b1035` | `#eef2ff` |
| `--surface` | `rgba(255,255,255,.12)` | `rgba(255,255,255,.55)` |
| `--surface-2` | `rgba(255,255,255,.07)` | `rgba(255,255,255,.38)` |
| `--ink` | `#ffffff` | `#141a2b` |
| `--ink-soft` | `rgba(255,255,255,.78)` | `rgba(20,26,43,.72)` |
| `--line` | `rgba(255,255,255,.24)` | `rgba(20,26,43,.14)` |
| `--accent` | `#7dd3fc` | `#1d4ed8` |
| `--accent-ink` | `#06222e` | `#ffffff` |

- Açık varyantta cam **daha opak** olmalı (%55): beyaz üstünde %12 beyaz görünmez.
- `filter: invert()` yasak; cam yüzeyde invert renkleri zehirler.

## Erişilebilirlik

- Cam üstü gövde metni tam opak `--ink` → `--ink`/cam yüzey **12.83:1** (composited), güvenli.
- En riskli alan: **cam üstünde ikinci yarı saydam katman** (metin %78 opacity + cam) → kontrast 4.5'in altına düşer; metin opak olmalı.
- `--ink-faint` (beyaz %55) cam üstünde ~6:1; yine de 12px altı etikette kullanılmaz.
- Odak halkası: accent halka cam üstünde zayıfsa `outline: 2px solid rgba(255,255,255,.75)`.
- Arka planda hareketli blob: `prefers-reduced-motion` ile durur; parlaklık ≤ %22 opaklık (fotosensitivite).
- Opak fallback: `@supports not (backdrop-filter)` → `--surface` karışımı, `--blur: 0`.
- Satır hedefi 44px; cam chip'ler 26px görünse de padding ile 44px alan bırak.

## Örnek görseller

Aynı içerik, 34 stilde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-landing.png` | Landing — Hero hiyerarşisi, imza motif, tek CTA; süsün en yüksek olduğu kare. |
| `shots/02-dashboard.png` | Dashboard — Süsün geri çekildiği operasyonel ekran; KPI ve tablo okunurluğu. |
| `shots/04-components.png` | Bileşenler · temel — Renk, tipografi, yüzey, boşluk ritmi — temel levha. |
| `shots/17-dark-landing.png` | Koyu mod · landing — Koyu mod · landing |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Cam "gri kutu" gibi duruyor | Arkada düz zemin var | Zemine 2–3 renk blob ekle veya camı kaldır |
| Metin okunmuyor | Yarı saydam metin + cam | Metni tam opak yap; `--ink-faint`'i 12px altına indirme |
| Ekran ağır/yavaş | Katman başına blur + sürekli animasyon | Cam yüzey ≤3, animasyonlu blur yok, mobilde blur 12px |
| Kenarlar kayboluyor | Işık kenarı yok | 1px `--line` + `inset 0 1px 0 rgba(255,255,255,.28)` |
| Banding (renk şeritleri) | 8-bit gradient + blur | `--grain: .02` grain ekle (tokens'ta var) |
| Her şey cam, hiyerarşi yok | Katman enflasyonu | Yalnızca "üstte duran" öğeler cam; içerik opak yüzeyde |
| Safari/iOS'ta blur yok | Destek eksik | `@supports` opak fallback zorunlu |

## Komşu stiller

- **Uyumlu:** `01 minimalism` (sade zemin + tek cam katman), `12 aurora-ui` (biri zemin, diğeri katman), `09 liquid-glass` (aynı ailede, daha optik varyant).
- **Yasak:** `10 neumorphism` (iki farklı ışık fiziği), `13 neo-brutalism` (blur + kalın kontur çelişir), `33 dark-academia` (doku ve mum ışığı camla yarışır).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.apple.com/design/human-interface-guidelines/materials | Materyal katmanları, hangi yüzeyde hangi blur |
| https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic | Acrylic formülü, fallback ve performans notları |
| https://developer.apple.com/design/human-interface-guidelines/color | Yarı saydam yüzeyde kontrast kuralları |

## AI brief

```
Stil: Glassmorphism (styles/08-glassmorphism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="glassmorphism"]; hard-coded renk/blur/radius YASAK.
Zemin: --bg üzerine 2–3 renk blob (accent + mor + pembe), opaklık ≤ .22.
Yüzey: --surface (beyaz %12) + backdrop-filter: blur(var(--blur)) saturate(140%) + 1px --line + inset 0 1px 0 rgba(255,255,255,.28).
Cam yüzey sayısı: ekran başına en fazla 3 (mobilde 2). Cam üstü cam yok.
Tipografi: Inter; H1 56/600 -0.02em, gövde 16/1.6 tam opak --ink; 12px altı metin yok.
Radius: buton/input 16px (--radius), kart/modal 24px (--radius-lg).
Hareket: 140–400ms cubic-bezier(.34,1.4,.64,1); backdrop-filter animasyonu yasak.
Fallback: @supports not (backdrop-filter) → opak --surface karışımı, --blur: 0.
Yasak: yarı saydam gövde metni, düz zemin üstünde cam, 3'ten fazla cam katman, sert gölge.
Çıktı: kod + tek paragraf not (kaç cam katman, hangi blur, hangi contrast önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Cam panellerin arkasında renk/görsel var (düz zemin değil).
- [ ] Her cam yüzeyde 1px ışık kenarı + inset highlight var.
- [ ] Gövde metni tam opak; en düşük kontrast ≥ 4.5:1.
- [ ] Ekran başına cam katman ≤ 3 (mobilde ≤ 2).
- [ ] `@supports` opak fallback mevcut; `prefers-reduced-transparency` çalışıyor.
- [ ] `backdrop-filter` animasyonu yok; `prefers-reduced-motion` durduruyor.

## Token

```css
[data-style="glassmorphism"] {
  --bg: #1b1035; --bg-2: #2a1a5e;
  --surface: rgba(255,255,255,.12); --surface-2: rgba(255,255,255,.07);
  --ink: #ffffff; --ink-soft: rgba(255,255,255,.78); --ink-faint: rgba(255,255,255,.55);
  --accent: #7dd3fc; --accent-ink: #06222e;
  --line: rgba(255,255,255,.24);
  --radius: 16px; --radius-lg: 24px;
  --shadow: 0 8px 32px rgba(0,0,0,.22); --shadow-hard: none;
  --font-display: "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 18px; --grain: .02;
}
```
