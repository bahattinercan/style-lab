# 26 · Art Deco

> **Bir cümleyle:** Simetri, altın hairline ve ziggurat geometrisi: 1925'in lüksü, süsü ölçülü kullanır.

| | |
|---|---|
| **Hissiyat** | lüks, törensel, geometrik, "grand hotel" |
| **En iyi** | otel/restoran, etkinlik/davet, mücevher, premium marka, tiyatro |
| **Kaçın** | yoğun panel, teknoloji aracı, çocuk ürünü, uzun okuma |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (koyu zemin + krem metin) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="art-deco"]` |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Art Deco, 1925 Paris sergisinin geometrik lüksü: **simetri**, **altın hairline**, **ziggurat/şevron** motifleri, koyu yeşil-siyah zemin ve krem metin. Tipografi yüksek tracking'li serif (Cinzel). Süs **çizgiyle** yapılır, dolguyla değil.

Kazandığı şey: tören ve değer algısı. Feda ettiği şey: bilgi yoğunluğu ve modernlik; günlük araç arayüzü olarak ağır kalır.

### Ne değildir
- **Luxury Typography değildir.** O seyrek ve sade; Art Deco **geometrik süs** kullanır.
- **Victorian değildir.** Victorian kıvrımlı/gravür; Deco düz çizgi ve simetri.
- **Maximalism değildir.** Deco desen değil **çizgi geometrisi**; en fazla 2 motif.
- **"Altın + siyah" değildir.** Simetri, hairline çerçeve ve ziggurat olmadan sadece lüks taklidi olur.

### Nereden gelir
1925 Exposition Internationale, Chrysler Building, otel/tren afişleri. Bugün hospitality ve premium etkinliklerde kullanılıyor.

### 3 saniyede tanıma testi
1. Yerleşim **simetrik** mi (merkez ekseni)?
2. Altın **hairline** çerçeve var mı (tek veya çift)?
3. Ziggurat/şevron geometrisi var mı?
4. Display yüksek tracking'li serif mi (Cinzel)?
5. Zemin koyu yeşil/siyah, metin krem mi?

## Zorunlu kurallar

1. **Simetri:** hero, kart ve modal merkez eksende; asimetri yok.
2. **Çift çerçeve:** dış 1px + 6–8px boşluk + iç 1px altın hairline.
3. **Motif bütçesi:** ekran başına en fazla 2 geometrik motif (şevron, ziggurat, ışın).
4. **Altın metin değil:** altın yalnız çizgi/ikon/çerçeve; metin krem.
5. **Tracking:** display `0.22em`, etiket `0.3em`, uppercase.
6. **Radius 0–2px**; yumuşak köşe yok.

## Yasaklar

- Asimetrik yerleşim, 3+ motif.
- Altın rengi gövde metni (kontrast düşer).
- Gradient, blur, cam, gölge.
- Eğri/kıvrımlı süs (Victorian'a kayar).
- 4+ renk (yeşil, siyah, altın, krem yeter).
- Yoğun tabloda tam süs.

## Görsel imza
- **Altın hairline:** `--accent` 1px; çift çerçeve 6px boşlukla.
- **Şevron:** CSS `clip-path` ile üçgen/şevron şerit, tek renk.
- **Ziggurat:** kademeli yatay çizgiler (3–5 basamak).
- **Simetrik tipografi:** merkezlenmiş Cinzel başlık, geniş tracking.
- **Koyu zemin:** #0e1b17 yeşil-siyah; krem metin #ede3d2.
- **Grain .03:** baskı hissi, hafif.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#0e1b17` | sayfa | metin |
| `--bg-2` | `#14241e` | bölüm | buton |
| `--surface` | `#12211c` | panel | sayfa |
| `--surface-2` | `#18302a` | ikincil, hover | vurgu |
| `--ink` | `#ede3d2` | metin | — |
| `--ink-soft` | `#bcb2a1` | açıklama | 10px altı |
| `--ink-faint` | `#8a8172` | dekoratif (4.60:1) | gövde |
| `--accent` | `#c8a24a` | hairline, ikon, çerçeve | **metin** |
| `--accent-ink` | `#0e1b17` | accent üstü (**7.34:1**) | — |
| `--line` | `rgba(200,162,74,.55)` | çerçeve | metin |

- Ölçülen kontrast: `ink/bg` **13.91:1** · `ink-soft/bg` **8.44:1** · `ink-faint/bg` **4.60:1** · `accent-ink/accent` **7.34:1**.
- Altın (#c8a24a) koyu zeminde metin olarak ~7:1 verse de **kullanılmaz**: lüks dil için metin krem kalır.
- Yasak: ikinci metallik (gümüş/bakır) renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Cinzel | 52px (mobil 30px) | 400 | 1.15 | `0.22em`, uppercase |
| H2 | Cinzel | 28px | 400 | 1.2 | `0.18em` |
| H3 | Jost | 18px | 500 | 1.35 | `0.08em` |
| Gövde | Jost | 16px | 400 | 1.7 | `0.03em` |
| Etiket | Courier New | 10px | 400 | 1.2 | `0.3em`, uppercase |

- Geniş tracking okumayı yavaşlatır: gövde 56ch, 3 satır sınırı.
- Cinzel 20px altında kullanılmaz.

## Izgara ve boşluk

Kolon 12 (içerik merkezde 8) · gutter 32px · container 1080px · bölüm 96/56px · breakpoint 640/900/1080.
- Simetri: içerik merkezde; yan boşluklar eşit.
- Hairline çerçeve ile içerik arası 24px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain | yok | sayfa |
| Panel | `--surface` + çift çerçeve | yok | kart |
| Yüzen | `--surface-2` + çerçeve | yok | modal |

- Derinlik yok: çerçeve, simetri ve tipografi taşır. Radius 0/2px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 26px | 0 | 11/500 uppercase 0.24em | transparent + 1px altın çerçeve, krem metin | hover: altın %12 dolgu · focus: 2px altın dış çerçeve · disabled: %40 |
| Buton (altın) | 46px | 0 24px | 0 | 11/500 | altın zemin + koyu metin | hover: parlaklık↑ |
| Input | 46px | 0 16px | 0 | 15/400 Jost | `--surface` + alt 1px altın | focus: alt 2px altın · error: `--danger` |
| Kart | içerik | 28px | 2px | H2 Cinzel + 16 | `--surface` + çift çerçeve | hover yok |
| Chip | 24px | 0 10px | 0 | 10/400 Courier uppercase | transparent + 1px altın | aktif: altın zemin |
| Nav | 76px | 0 40px | — | 11/500 uppercase 0.2em | `--bg` + alt 1px altın | aktif: altın alt 2px |
| Tablo satırı | 54px | 12px 16px | — | 14/400 | alt 1px altın %30 | hover: `--surface-2` |
| Modal | içerik | 32px | 2px | H2 + 16 | çift çerçeve | backdrop: `rgba(14,27,23,.7)` |
| Toast | 46px | 0 20px | 0 | 12/500 uppercase | `--surface-2` + altın çerçeve | 5sn |
| Grafik | — | — | 0 | eksen 10 mono | altın çizgi + %20 dolgu | 1 seri |

## Görsel dil

İkon: 1px çizgi, 24px, altın; simetrik. Fotoğraf: yüksek kontrast, altın çerçeve. İllüstrasyon: geometrik şevron/ziggurat. Doku: grain .03. Logo: Cinzel wordmark, altın hairline çerçeve.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | çok yüksek | Merkezli 52px Cinzel, çift çerçeve panel, tek altın buton | `shots/01-landing.png` |
| Dashboard | düşük | Süs kapanır; hairline ayırıcı + krem metin | `shots/02-dashboard.png` |
| Form | düşük | 440px merkez, alt çizgili input | — |
| Liste/tablo | düşük | Altın hairline, 54px satır | — |
| Boş durum | orta | Merkezli tek cümle + altın hairline | — |
| Onboarding | yüksek | Adım başına 1 simetrik panel | — |
| Pricing | yüksek | 3 simetrik kart, orta kart altın çerçeve | — |
| Giriş/ödeme | düşük | Sade merkezli form, altın hairline | — |
| Modal | orta | Çift çerçeve, merkezli | — |
| Toast | orta | Altın çerçeveli koyu kutu | — |
| Hata | düşük | `--danger` hairline + 14px metin | — |
| Profil/ayar | düşük | Simetrik liste, altın ayırıcı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 160ms | `ease-in-out` | `opacity` |
| Giriş | 580ms | `ease-in-out` | `opacity` + 28px `translateY`, stagger 90ms |
| Scroll (`top 76%`) | 680ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 320ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 600ms | `ease-in-out` | hairline genişleme |

- `prefers-reduced-motion`: 0.01ms.
- Yasak: süs döngüsü, hızlı geçiş, parallax.
- Pin/parallax yok.

## Koyu mod

Stil zaten koyu. Açık varyant: `--bg` `#f3ecdd` · `--surface` `#faf6ec` · `--ink` `#141f1a` · `--accent` `#9a7526` · `--accent-ink` `#ffffff`.

## Erişilebilirlik

- Gövde 13.91:1, açıklama 8.44:1 → güvenli; `--ink-faint` 4.60:1.
- Altını **metin** olarak kullanma: geniş tracking + altın = okunmaz; krem metin.
- Cinzel + 0.22em tracking okuma hızını düşürür: gövde Jost'ta, 56ch.
- Hairline çerçeve dekoratif; odak halkası ayrı (2px altın + offset 3px).
- Dokunma hedefi 46px.
- `prefers-reduced-motion` süs animasyonunu kapatır.

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
| "Altın tema" gibi | Simetri/çerçeve yok | Çift çerçeve + merkezleme |
| Okunmuyor | Altın metin | Krem metin, altın yalnız çizgi |
| Ağır | Her bölümde motif | Motif ≤ 2, süs çizgiyle |
| Victorian'a kaydı | Kıvrımlı süs | Düz çizgi/şevron |
| Mobilde taşma | 0.22em tracking + 52px | `clamp()` + tracking 0.12em |

## Komşu stiller

**Uyumlu:** `04 luxury-typography` (seyrek lüks), `17 maximalism` (desen/lüks), `27 victorian` (dönem). **Yasak:** `11 claymorphism`, `24 pixel-art`, `18 dopamine-ui`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.metmuseum.org | Art Deco dönem objeleri |
| https://fonts.google.com/specimen/Cinzel | Display serif |
| https://en.wikipedia.org/wiki/Art_Deco | Motif sözlüğü |

## AI brief

```
Stil: Art Deco (styles/26-art-deco/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="art-deco"]; hard-coded renk YASAK.
Simetri: içerik merkez eksende; asimetri yok.
Çerçeve: dış 1px + 6–8px boşluk + iç 1px altın hairline (çift çerçeve).
Altın #c8a24a yalnız çizgi/ikon/çerçeve; METIN krem #ede3d2 (13.91:1). Altın metin yasak.
Tipografi: Cinzel uppercase 0.22em (52/1.15) + Jost gövde 16/1.7 (0.03em); etiket Courier 10 0.3em.
Motif: ≤ 2 geometrik (şevron, ziggurat, ışın); radius 0–2px; gölge/blur/gradient yok.
Hareket: 160–600ms ease-in-out (törensel); süs döngüsü yasak.
Yasak: asimetri, 3+ motif, altın metin, eğri/kıvrımlı süs, 4+ renk.
Çıktı: kod + tek paragraf not (simetri ve hairline disiplini).
```

**Teslim öncesi öz-denetim**
- [ ] Yerleşim simetrik, içerik merkezde.
- [ ] Çift altın hairline çerçeve var.
- [ ] Altın yalnız çizgi/ikon; metin krem.
- [ ] Motif ≤ 2, radius 0–2, gölge yok.
- [ ] Tracking display ≥ 0.18em.
- [ ] Mobilde tracking ve punto küçültüldü.

## Token

```css
[data-style="art-deco"] {
  --bg: #0e1b17; --bg-2: #14241e;
  --surface: #12211c; --surface-2: #18302a;
  --ink: #ede3d2; --ink-soft: #bcb2a1; --ink-faint: #8a8172;
  --accent: #c8a24a; --accent-ink: #0e1b17;
  --line: rgba(200,162,74,.55);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cinzel", "Poiret One", Georgia, serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0.22em; --blur: 0px; --grain: .03;
}
```
