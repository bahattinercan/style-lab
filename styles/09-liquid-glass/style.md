# 09 · Liquid Glass

> **Bir cümlede:** Cam sadece bulanıklaştırmakla kalmıyor, büküyor: kenarında ışık kırılan, basınca hafifçe akan, arkasındaki rengi taşıyan optik katman (Apple visionOS/iOS 26 dili).

| | |
|---|---|
| **Hissiyat** | akışkan, optik, "premium donanım", dokunulabilir |
| **En iyi** | nav/araç katmanı, medya üzeri kontrol, oynatıcı, AR/3D ürün vitrini |
| **Kaçın** | yoğun veri tablosu, düşük kontrastlı içerik, düşük güçlü cihaz hedefi |
| **Zorluk** | yüksek (performans + fallback) · **Erişilebilirlik** | orta risk (kontrast/parlama) |
| **Aile** | Yüzey (08–12) · **Token** | `kit/tokens.css` → `[data-style="liquid-glass"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Glassmorphism'in optik olarak iddialı hali: `backdrop-filter: blur(24px) saturate(150%)` + **inset üst highlight** (specular) + **kenarda ışık kırılması** + **pill (999px) kontroller** + **hafif yay (spring) hareketi**. Yüzey arkasındaki rengi alır, kendi kenarında bir ışık çizgisi taşır; kullanıcı "dokunabilir bir malzeme" hissi alır.

Kazandığı şey: kontrollerin içerikle bütünleşmesi (medya üzerinde ağır bar olmadan). Feda ettiği şey: performans ve kontrast payı.

### Ne değildir
- **Glassmorphism değildir.** Aradaki fark: refraction/lensing, specular highlight, yay fiziği ve pill kontroller; glassmorphism statik ve daha düzdür.
- **Neumorphism değildir.** Orada ışık tek renk üzerinde kabartma yapar; burada arka plan görünür ve kırılır.
- **"Blur'lu siyah bar" değildir.** `saturate()` ve inline highlight olmadan sadece "koyu cam" olur.
- **Her yerde kullanılmaz:** opak içerik panelleri cam olmaz; cam yalnızca **içeriğin üstünde duran kontrol katmanıdır**.

### Nereden gelir
Apple'ın visionOS ve iOS 26 "Liquid Glass" materyal sistemi; optik kırılma, gerçek zamanlı ışık ve dokunma geri bildirimi. Donanım gücü arttıkça "materyal" metaforu geri döndü.

### 3 saniyede tanıma testi
1. Yüzeyde **blur + saturate** birlikte mi (bulanıklık tek başına yetmez)?
2. Üst kenarda **ince ışık çizgisi** (specular) var mı?
3. Kontroller **pill** (999px) mi, köşeli mi?
4. Basınca hafif **yay/ölçek** hareketi var mı (aşırı değil)?
5. Ekranda cam katman sayısı ≤ 2 mi?

## Zorunlu kurallar

1. **Blur + saturate birlikte:** `blur(var(--blur)) saturate(150%)`; tek başına blur cam sayılmaz.
2. **Specular kenar:** `inset 0 1px 0 rgba(255,255,255,.35)` + 1px `--line` (beyaz %28).
3. **Pill kontroller:** buton/input/segment 999px; kart 28px.
4. **Cam katmanı ≤ 2** (nav + tek sheet); gövde içeriği opak.
5. **Yay hareketi:** `cubic-bezier(.34,1.4,.64,1)`, 140–280ms; `scale(.98)` ile basılma.
6. **Fallback:** `@supports not (backdrop-filter)` → opak `--surface` karışımı + `--blur: 0`.

## Yasaklar

- Siyah/opak bar üstüne sahte blur (arkada içerik yoksa cam çalışmaz).
- Cam üstünde cam (çift blur) ve 3+ katman.
- `backdrop-filter` animasyonu; sürekli blur değişimi.
- Koyu/sert dış gölge (camı "kutu" yapar) — gölge yumuşak ve derin olmalı.
- Cam üstünde yarı saydam gövde metni (kontrast düşer).
- Düşük güçlü cihazda tam blur (statik blur'a düşür).

## Görsel imza
- **Blur 24px + saturate 150%**; `--blur: 24px` token'ı.
- **Specular highlight:** üst kenarda 1px beyaz %35 inset; sol üstte hafif parlama.
- **Pill kontrol:** buton/segment/input 999px; nav bar 28px radius.
- **Kırılma kenarı:** 1px `--line` (beyaz %28) + 6px iç gölge yerine kenar gradient'i.
- **Derin gölge:** `0 10px 40px rgba(0,0,0,.35)` — yumuşak, bulanık.
- **Hareket:** basınca `scale(.98)`, bırakınca hafif yay ile geri dönüş.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a0d12` | sayfa zemini (içerik) | cam yüzey |
| `--bg-2` | `#141a24` | zemin gradient üst tonu | buton |
| `--surface` | `rgba(255,255,255,.10)` | cam bar/kart | opak içerik paneli |
| `--surface-2` | `rgba(255,255,255,.06)` | ikincil cam | birincil buton |
| `--ink` | `#f5f7fa` | tüm metin (tam opak) | yarı saydam metin |
| `--ink-soft` | `rgba(245,247,250,.76)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(245,247,250,.50)` | dekoratif | etkileşimli |
| `--accent` | `#4cc9f0` | birincil aksiyon, aktif | geniş zemin |
| `--accent-ink` | `#041018` | accent üstü metin | — |
| `--line` | `rgba(255,255,255,.28)` | cam kenarı, specular | metin |

- Ölçülen kontrast: `ink/bg` **18.13:1** · `ink-soft/bg` **10.54:1** · `ink-faint/bg` **5.05:1** · `accent-ink/accent` **10.00:1** · cam yüzey üstünde `ink` **14.28:1**.
- Cam arkasında renk/blur olduğu için metin **tam opak** olmalı; efektif kontrast düşer.
- Yasak: 3+ doygun blob; cam üstünde gradient metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | SF Pro Display / Inter | 56px (mobil 32px) | 600 | 1.06 | `-0.02em` |
| H2 | aynı | 26px | 600 | 1.2 | `-0.01em` |
| H3 | aynı | 18px | 600 | 1.3 | `0` |
| Gövde | SF Pro Text / Inter | 16px | 400 | 1.6 | `0` |
| Etiket | SF Mono / JetBrains Mono | 10px | 500 | 1.2 | `0.14em`, uppercase |
| Buton (pill) | gövde | 14px | 600 | 1 | `0` |

- SF Pro yoksa Inter'e düşer; fallback'te ağırlık 600'ü koru.
- Cam üstünde 12px altı metin yasak; etiketler en az 10px + uppercase.
- Display 700 değil **600**: kalın harf blur ile yarışır.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 6/6) |
| Gutter | 24px |
| Container | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1240 px |
| Bölüm dikey | 72px (mobil 48px) |

- Cam katman ekran kenarına yapışır (nav/sheet), 20px iç boşluk.
- Katman hiyerarşisi: içerik (opak) → cam kontrol → (gerekirse) tek sheet.
- Cam kartlar arası boşluk ≥ 16px; iki cam yüzey bitişik olmaz (kenarlar karışır).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| İçerik | `--bg` / `--bg-2` | — | sayfa gövdesi (opak) |
| Cam kontrol | `--surface` + blur 24px | `--shadow` + inset highlight | nav, toolbar, oynatıcı |
| Sheet / modal | `--surface` + blur 28px | `--shadow` (daha derin) | alt sheet, modal |

- Derinlik blur + specular + derin yumuşak gölge üçlüsünden gelir.
- Radius: `--radius` 20px (kart), `--radius-lg` 28px (sheet); kontroller 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (pill, birincil) | 44px | 0 22px | 999px | 14/600 | `--accent` (opak) + `--accent-ink` | hover: brightness(1.06) · active: `scale(.98)` · focus: 2px beyaz %75 halka · disabled: %45 |
| Buton (cam pill) | 44px | 0 18px | 999px | 14/600 | `--surface-2` + blur + 1px `--line` | hover: `--surface` |
| Segment kontrol | 36px | 3px iç | 999px | 13/600 | cam zemin + aktif pill `--surface` | aktif: beyaz %16 dolgu + gölge |
| Input (pill) | 44px | 0 18px | 999px | 15/400 | `--surface-2` + blur | focus: 2px `--accent` halka · error: `--danger` |
| Kart | içerik | 24px | 20px | H3 + 15 gövde | `--surface` + blur + inset highlight | hover: blur 28px (statik iki durum) |
| Nav bar | 64px | 0 20px | 28px (yüzen) / 0 (yapışık) | 14/600 | `--surface` + blur 24px + 1px `--line` | aktif: alt pill `--surface` |
| Sheet | içerik | 28px | 28px (üst) | H2 + 15 | `--surface` + blur 28px + derin gölge | backdrop: `rgba(4,8,14,.50)` + blur 6px |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | satır altı beyaz %10 | cam üstünde zebra yok |
| Oynatıcı | 56px | 0 18px | 999px | 13/500 | cam + specular | ilerleme: `--accent` dolgu, ray beyaz %22 |
| Toast | 46px | 0 18px | 999px | 13/500 | cam + 1px `--line` | 4sn, ikon + metin |

- Odak halkası cam üstünde **beyaz %75** (accent halka düşük kontrast kalır).
- Dokunma hedefi 44px; pill butonlarda görsel 36px olsa da padding ile 44px.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, beyaz, 20px; aktif ikon dolgulu |
| Fotoğraf | Camın arkasında yüksek kontrastlı medya (video/foto) |
| İllüstrasyon | Blob/gradient; çizgi illüstrasyon camla yarışır |
| Doku | Yok (`--grain: 0`); blur zaten yumuşatıyor |
| Logo | Beyaz monokrom, 20–24px |
| Işık | Tek yön: sol üstten specular; çoklu highlight yasak |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Arkada medya/gradient, üstte cam nav, hero'da tek cam kontrol kümesi | `shots/01-landing.png` |
| Dashboard | düşük | Cam yalnızca nav + tek toolbar; KPI kartları **opak** | `shots/02-dashboard.png` |
| Form | çok düşük | Opak panel içinde pill inputlar; cam yalnızca üst bar | — |
| Liste / tablo | düşük | Opak yüzey; satır ayrımı beyaz %10 | — |
| Boş durum | orta | Cam kart + tek cümle + pill buton | — |
| Onboarding | yüksek | Sayfa başına cam sheet, arkada değişen medya | — |
| Pricing | orta | 2 cam kolon; orta kolon accent kenar + pill CTA | — |
| Giriş / ödeme | çok düşük | Opak kart, pill input, tek accent buton; blur minimum | — |
| Modal | orta | Cam sheet 28px radius, backdrop blur 6px | — |
| Bildirim / toast | orta | Cam pill, 4sn | — |
| Hata | düşük | Opak yüzey + `--danger` kenar (cam üstünde hata okunmaz) | — |
| Profil / ayar | orta | Cam sidebar + opak içerik; iki cam bitişik olmaz | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `cubic-bezier(.34,1.4,.64,1)` | `transform: scale(.98)` |
| Giriş | 900ms | `power4.out` | `opacity` + 28px `translateY`, stagger 70ms |
| Scroll (`top 82%`) | 1000ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 220ms | aynı eğri | `transform: scale(1.02)` |
| Segment geçişi | 220ms | `cubic-bezier(.34,1.4,.64,1)` | aktif pill `translateX` + `width` |
| Ödül | 400ms | `ease-in-out` | specular `opacity` 0→1 |

- Yay eğrisi **hafif** overshoot (`1.4`), abartılı değil. `backdrop-filter` animasyonu yasak.
- `prefers-reduced-motion`: yay → `ease-out`, süre 0.01ms.
- `prefers-reduced-transparency`: `--blur: 0`, `--surface: var(--bg-2)`.

## Koyu mod

Bu stil **koyu tabanlı**. Açık tema gerekiyorsa:

| Token | Koyu (varsayılan) | Açık varyant |
|---|---|---|
| `--bg` | `#0a0d12` | `#f2f6fb` |
| `--surface` | `rgba(255,255,255,.10)` | `rgba(255,255,255,.62)` |
| `--ink` | `#f5f7fa` | `#0b1520` |
| `--line` | `rgba(255,255,255,.28)` | `rgba(11,21,32,.16)` |
| `--accent` | `#4cc9f0` | `#0b7fa8` |
| `--accent-ink` | `#041018` | `#ffffff` |

- Açık varyantta cam daha **opak** olmalı (%62), yoksa beyaz üstünde kaybolur.

## Erişilebilirlik

- Cam üstü metin tam opak `--ink` → 14.28:1 (composited). Yarı saydam metin yasak.
- Risk: ince blur + parlak arka plan → metin kaybolur. Arka planı %20 karart veya cam opaklığını artır.
- Odak halkası beyaz %75, 2px; accent halka cam üstünde zayıf.
- `prefers-reduced-transparency` ve `prefers-reduced-motion` zorunlu.
- Düşük güç modu: blur 12px'e düşür veya statik blur görseli kullan.
- Dokunma hedefi 44px; segment 36px görünse de padding ile 44px.

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
| "Koyu şeffaf kutu" | `saturate` ve specular yok | `saturate(150%)` + inset highlight ekle |
| Metin kayboluyor | Yarı saydam metin + parlak arka plan | Metin opak, arka plan %20 karart |
| Kare donuyor | 3+ blur katmanı, animasyonlu blur | Katman ≤2, blur animasyonu yok |
| Safari'de blur yok | Destek eksik | `@supports` opak fallback |
| Ağır/oyuncak görünüm | Sert gölge, kalın kenar | Derin yumuşak gölge + 1px beyaz %28 |
| Hiyerarşi yok | Her şey cam | Yalnızca üstteki kontrol katmanı cam |

## Komşu stiller

- **Uyumlu:** `08 glassmorphism` (aynı ailede sade varyant), `12 aurora-ui` (zemin), `01 minimalism` (opak gövde + tek cam katman).
- **Yasak:** `10 neumorphism` (ışık fiziği çelişir), `13 neo-brutalism` (kontur), `24 pixel-art` (ölçek).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.apple.com/design/human-interface-guidelines/materials | Materyal katmanları ve specular mantığı |
| https://learn.microsoft.com/en-us/windows/apps/design/style/acrylic | Fallback ve performans notları |
| https://developer.apple.com/design/human-interface-guidelines/motion | Yay eğrisi ve süre önerileri |

## AI brief

```
Stil: Liquid Glass (styles/09-liquid-glass/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="liquid-glass"]; hard-coded renk/blur YASAK.
Cam: backdrop-filter: blur(var(--blur)=24px) saturate(150%) + 1px rgba(255,255,255,.28) + inset 0 1px 0 rgba(255,255,255,.35).
Kontroller pill (999px), kart 20px, sheet 28px. Cam katman ≤ 2; gövde içeriği OPAK.
Cam üstü metin tam opak --ink (#f5f7fa); yarı saydam gövde metni yasak.
Hareket: 140–280ms cubic-bezier(.34,1.4,.64,1); basınca scale(.98); backdrop-filter animasyonu YASAK.
Fallback: @supports not (backdrop-filter) → opak yüzey + --blur: 0; prefers-reduced-transparency aynı.
Gölge: 0 10px 40px rgba(0,0,0,.35) yumuşak; sert gölge yasak.
Yasak: cam üstünde cam, 3+ katman, opak bar üstünde sahte blur, çoklu highlight.
Çıktı: kod + tek paragraf not (kaç cam katman, blur değeri, fallback ve kontrast önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Her cam yüzeyde blur + saturate + specular var.
- [ ] Cam katman ≤ 2; gövde içeriği opak.
- [ ] Kontroller pill, radius 20/28.
- [ ] Cam üstü metin opak, kontrast ≥ 4.5:1.
- [ ] `@supports` fallback + `prefers-reduced-transparency` çalışıyor.
- [ ] `backdrop-filter` animasyonu yok; mobilde blur ≤ 18px.

## Token

```css
[data-style="liquid-glass"] {
  --bg: #0a0d12; --bg-2: #141a24;
  --surface: rgba(255,255,255,.10); --surface-2: rgba(255,255,255,.06);
  --ink: #f5f7fa; --ink-soft: rgba(245,247,250,.76); --ink-faint: rgba(245,247,250,.5);
  --accent: #4cc9f0; --accent-ink: #041018;
  --line: rgba(255,255,255,.28);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 10px 40px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.35);
  --shadow-hard: none;
  --font-display: "SF Pro Display", "Inter", system-ui, sans-serif;
  --font-body: "SF Pro Text", "Inter", system-ui, sans-serif;
  --font-mono: "SF Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 24px; --grain: 0;
}
```
