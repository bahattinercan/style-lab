# 24 · Pixel Art

> **Bir cümlede:** 8-bit keskinliği: 0 radius, piksel font, sınırlı palet, kalın çerçeve ve blok gölge.

| | |
|---|---|
| **Hissiyat** | retro, oyun, net, "konsol menüsü" |
| **En iyi** | oyun, indie ürün, etkinlik, nostalji kampanyası, topluluk aracı |
| **Kaçın** | kurumsal B2B, uzun okuma, veri yoğun panel, erişilebilirlik kritik akış |
| **Zorluk** | orta (ölçek/okunurluk) · **Erişilebilirlik** | orta-yüksek risk (piksel font) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="pixel-art"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Pixel art, düşük çözünürlük estetiğinin arayüze uygulanması: **0 radius**, **piksel display font** (Press Start 2P), **sınırlı palet** (5–6 renk), **kalın çerçeve** (2–4px) ve **blok gölge** (`4px 4px 0`). Her öğe "8-bit karo" gibi durur.

Kazandığı şey: anında nostalji ve oyun dili. Feda ettiği şey: metin okunurluğu — piksel font uzun metinde yorar.

### Ne değildir
- **Neo-brutalism değildir.** Brutalism modern tipografi; pixel art piksel font + 0 radius.
- **Memphis değildir.** Memphis eğri/daire; pixel art blok ve ızgara.
- **Retro blog değildir.** Sadece "pixel font" yetmez: 0 radius + sınırlı palet + blok gölge gerekir.
- **Düşük kaliteli değildir.** Piksel grid hizalı ve kasıtlı olmalı; blur/gradient karakteri bozar.

### Nereden gelir
8/16-bit konsol arayüzleri ve indie oyun sahnesi; 2020'lerde nostalji dalgasıyla ürün arayüzlerine girdi.

### 3 saniyede tanıma testi
1. Tüm köşeler **0 radius** mu?
2. Display **piksel font** mu (Press Start 2P)?
3. Palet 5–6 renkle sınırlı mı?
4. Çerçeve 2–4px ve blok gölge (`4px 4px 0`) var mı?
5. Görseller/ikonlar piksel grid'e hizalı mı?

## Zorunlu kurallar

1. **0 radius** — istisna yok.
2. **Piksel display** yalnız başlık/etiket; gövde sans (Inter) 15–16px.
3. **Sınırlı palet:** bg, surface, surface-2, ink, accent, line = 6 renk.
4. **Blok gölge:** `4px 4px 0` (küçük), `0 0 0 2px ink` çerçeve.
5. **Grid hizası:** görseller `image-rendering: pixelated`, ölçek tam sayı katı.
6. **Okunurluk:** piksel font ≥ 9px ve yalnız kısa metin (≤ 3 kelime).

## Yasaklar

- Radius, blur, gradient, yarı saydamlık.
- Piksel fontu gövde metninde (uzun paragraf).
- Piksel olmayan ölçek (1.5×, 1.25×) — görsel bozulur.
- 8'den fazla renk.
- İnce (1px) çerçeve.
- Anti-aliasing gerektiren ince ikonlar.

## Görsel imza
- **Blok gölge:** `4px 4px 0 #0d0e17`; hover'da öğe gölge yönüne kayar.
- **Çift çerçeve:** `0 0 0 2px #f4f4f4, 0 0 0 4px #1a1c2c` (dış çerçeve).
- **Palet:** lacivert bg (#1a1c2c), koyu mavi kart (#29366f), mavi vurgu (#3b5dc9), krem metin (#f4f4f4), sarı accent (#ffcd75).
- **Piksel font:** Press Start 2P, uppercase, 9–30px arası (kademeli).
- **Doku:** yok — düz renk, keskin kenar.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#1a1c2c` | sayfa | panel |
| `--bg-2` | `#23263a` | bölüm | metin |
| `--surface` | `#29366f` | panel | sayfa |
| `--surface-2` | `#3b5dc9` | ikincil, aktif | geniş zemin |
| `--ink` | `#f4f4f4` | metin, çerçeve | — |
| `--ink-soft` | `#c2c3c7` | açıklama | 10px altı |
| `--ink-faint` | `#8b8d98` | dekoratif (5.10:1) | gövde |
| `--accent` | `#ffcd75` | CTA, puan, vurgu | geniş zemin |
| `--accent-ink` | `#1a1c2c` | accent üstü (**11.43:1**) | — |
| `--line` | `#f4f4f4` | 2–4px çerçeve | metin |

- Ölçülen kontrast: `ink/bg` **15.32:1** · `ink-soft/bg` **9.57:1** · `ink-faint/bg` **5.10:1** · `accent-ink/accent` **11.43:1**.
- Accent üstünde koyu metin; beyaz yasak.
- Yasak: 7. renk; yarı saydam ton.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Press Start 2P | 28px (mobil 18px) | 400 | 1.4 | `0` |
| H2 | Press Start 2P | 18px | 400 | 1.4 | `0` |
| H3 | Press Start 2P | 12px | 400 | 1.5 | `0` |
| Gövde | Inter | 16px | 400 | 1.6 | `0` |
| Etiket | Silkscreen | 9px | 400 | 1.4 | `0.06em` |

- Press Start 2P'de satır aralığı **1.4** (font kendi boşluğunu taşır).
- Piksel font yalnız başlık/etiket; gövde Inter (okunurluk).
- 9px altı piksel font kullanma; 18px üstü 2 satıra sığmaz.

## Izgara ve boşluk

Kolon 12 · gutter 16px · container 1120px · bölüm 64/40px · breakpoint 640/900/1120.
- Boşluklar 8'in katı ve **tam sayı**; yarım piksel boşluk yok.
- Çerçeve payı için panel aralığı ≥ 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Karo | `--surface` + 2px ink | `4px 4px 0 #0d0e17` | kart |
| Yüzen | `--surface-2` + 2px ink | `6px 6px 0` | modal |

- Derinlik blok gölgeden; blur yok. Radius 0.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 18px | 0 | 10/400 Press Start | `--accent` + koyu metin + 2px ink + 4px gölge | hover: translate(4px,4px) + gölge 0 · focus: 2px accent dış çerçeve · disabled: %40 |
| Buton (mavi) | 44px | 0 16px | 0 | 10/400 | `--surface-2` + ink | hover: aynı basılma |
| Input | 44px | 0 12px | 0 | 16/400 Inter | `--surface` + 2px ink | focus: 2px accent · error: `--danger` |
| Kart | içerik | 16px | 0 | H3 pixel + 15 Inter | `--surface` + 2px ink + blok gölge | hover: translate(-2px,-2px) |
| Chip / puan | 26px | 0 8px | 0 | 9/400 Silkscreen | sarı %100 + ink | — |
| Nav | 56px | 0 16px | — | 10/400 pixel uppercase | `--bg` + alt 4px ink | aktif: sarı alt şerit |
| Tablo satırı | 44px | 8px 10px | — | 15/400 Inter, sayı Silkscreen | 2px ink alt | hover: `--surface-2` |
| Modal | içerik | 20px | 0 | H2 pixel + 16 | `--surface-2` + 4px ink + gölge | backdrop: `rgba(13,14,23,.7)` |
| Toast | 44px | 0 14px | 0 | 10/400 pixel | sarı + ink | 3sn |
| Grafik | — | — | 0 | eksen 9 Silkscreen | `--accent` + `--surface-2`, 2px çerçeve | 2 seri |

## Görsel dil

İkon: piksel grid, 16×16 veya 24×24, `image-rendering: pixelated`. Fotoğraf: pikselize/duotone. İllüstrasyon: sprite seti. Doku: yok. Logo: piksel, uppercase.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 28px pixel başlık, sprite görsel, tek sarı buton | `shots/01-landing.png` |
| Dashboard | düşük | Karo KPI'lar, pixel sayı + Inter etiket | `shots/02-dashboard.png` |
| Form | düşük | Keskin input, tek buton; pixel font yalnız etiket | — |
| Liste/tablo | düşük | 2px ayırıcı, satır 44px | — |
| Boş durum | yüksek | Sprite + `PRESS START` tarzı tek satır | — |
| Onboarding | yüksek | Adım başına 1 sprite + 1 cümle | — |
| Pricing | orta | 3 karo, orta karo sarı | — |
| Giriş/ödeme | çok düşük | Piksel font minimum; sade form | — |
| Modal | orta | Blok gölgeli karo | — |
| Toast | orta | Sarı karo, 3sn | — |
| Hata | orta | `!!` pixel + 16px Inter açıklama | — |
| Profil/ayar | düşük | Karo liste, pixel başlık | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 80ms | `steps(2–4)` | `transform: scale(.98)` (basamaklı) |
| Giriş | 300ms | `steps(2, end)` | `opacity` + 6px `translateY`, stagger 50ms |
| Scroll (`top 86%`) | 580ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 60ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 240ms | `steps(4)` | blink (tek atım) |

- `prefers-reduced-motion`: blink kapanır, süreler 0.01ms.
- Yasak: sürekli animasyon, strobe, yumuşak easing.
- Pin/parallax yok.

## Koyu mod

Stil zaten koyu. Açık varyant: `--bg` `#f4f4f4` · `--surface` `#e0e0e6` · `--ink` `#1a1c2c` · `--accent` `#c98a1f` · `--accent-ink` `#ffffff`.

## Erişilebilirlik

- Gövde 15.32:1, açıklama 9.57:1 → güvenli; `--ink-faint` 5.10:1.
- **Piksel font** disleksi ve düşük görme için zor: yalnız başlık/etiket, ≥ 9px, kısa metin.
- Gövde her zaman Inter 16px; piksel fontta uzun cümle yasak.
- Görseller `pixelated`; bulanık ölçekleme baş ağrısı yapar.
- Odak: 2px accent dış çerçeve (offset 3px); karo gölgesi hedefe dahil değil.
- Dokunma hedefi 44px.
- `prefers-reduced-motion` blink'i kapatır.

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
| Okunmuyor | Piksel font gövdede | Gövde Inter 16px |
| Bulanık | Piksel olmayan ölçek | Tam sayı kat, `pixelated` |
| Karakter kaybı | Radius/gölge yumuşak | 0 radius + blok gölge |
| Dağınık | 8+ renk | 6 renk paleti |
| Ucuz | 1px çerçeve | 2–4px çerçeve |

## Komşu stiller

**Uyumlu:** `16 memphis` (retro geometri), `13 neo-brutalism` (blok dil), `23 cybercore` (retro teknik). **Yasak:** `04 luxury-typography`, `09 liquid-glass`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://fonts.google.com/specimen/Press+Start+2P | Piksel display |
| https://lospec.com/palette-list | Sınırlı palet örnekleri |
| https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering | `pixelated` kullanımı |

## AI brief

```
Stil: Pixel Art (styles/24-pixel-art/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="pixel-art"]; hard-coded renk YASAK.
Kural: radius 0 (istisna yok), blur/gradient/yarı saydamlık yok, 6 renk paleti.
Tipografi: Press Start 2P yalnız başlık/etiket (≥9px, kısa metin); gövde Inter 16/1.6.
Yüzey: 2px ink çerçeve + blok gölge (4px 4px 0); hover'da öğe gölge yönüne kayar.
Görseller: pixelated, tam sayı ölçek.
Hareket: 80–240ms steps(2–4); sürekli animasyon yasak; reduced-motion'da blink kapanır.
Ödeme/giriş: piksel font minimum, sade form.
Çıktı: kod + tek paragraf not (ölçek hizası ve okunurluk önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Hiçbir yerde radius yok.
- [ ] Piksel font yalnız başlık/etiket; gövde Inter ≥ 16px.
- [ ] Çerçeve ≥ 2px, gölge blok (blur yok).
- [ ] Palet ≤ 6 renk; yarı saydam ton yok.
- [ ] Görseller pixelated ve tam sayı ölçekte.
- [ ] Blink/strobe yok.

## Token

```css
[data-style="pixel-art"] {
  --bg: #1a1c2c; --bg-2: #23263a;
  --surface: #29366f; --surface-2: #3b5dc9;
  --ink: #f4f4f4; --ink-soft: #c2c3c7; --ink-faint: #8b8d98;
  --accent: #ffcd75; --accent-ink: #1a1c2c;
  --line: #f4f4f4;
  --radius: 0px; --radius-lg: 0px;
  --shadow: 0 0 0 2px #f4f4f4, 0 0 0 4px #1a1c2c; --shadow-hard: 4px 4px 0 #0d0e17;
  --font-display: "Press Start 2P", "Silkscreen", monospace;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Silkscreen", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
}
```
