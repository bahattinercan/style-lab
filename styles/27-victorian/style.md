# 27 · Victorian

> **Bir cümlede:** Gravür ve baskı mirası: çift kural çizgileri, süslü başlık, small caps ve kâğıt dokusu.

| | |
|---|---|
| **Hissiyat** | klasik, edebi, gizemli, "ciltlenmiş kitap" |
| **En iyi** | yayın/dergi, kulüp/üyelik, gizem-temalı ürün, müze, davet |
| **Kaçın** | modern SaaS paneli, çocuk, hızlı e-ticaret, yoğun veri |
| **Zorluk** | yüksek (yoğunluk/okunurluk dengesi) · **Erişilebilirlik** | orta |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="victorian"]` |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Victorian, 19. yüzyıl baskı dilinin arayüze taşınması: **çift kural çizgileri** (double rule), **süslü serif başlık** (Playfair), **serif gövde** (EB Garamond), **small caps**, **drop cap**, gravür illüstrasyon ve kâğıt dokusu. Süs çizgiyle ve tipografiyle yapılır.

Kazandığı şey: otorite, edebi atmosfer, hatırlanma. Feda ettiği şey: tarama hızı ve modernlik.

### Ne değildir
- **Art Deco değildir.** Deco düz geometri ve simetri; Victorian **kıvrımlı/gravür** detay.
- **Dark Academia değildir.** O koyu ve mum ışığı; Victorian açık kâğıt üzerinde baskı.
- **Editorial değildir.** Editorial modern dergi ritmi; Victorian dönem süsü (çift kural, small caps).
- **"Serif font" değildir.** Çift kural + small caps + drop cap olmadan sadece klasik blog olur.

### Nereden gelir
19. yüzyıl gazete/kitap baskısı, gravür illüstrasyon ve afiş tipografisi; gizem/edebiyat temalı ürünlerde ve müze yayınlarında kullanılıyor.

### 3 saniyede tanıma testi
1. Çift kural çizgi (double rule) var mı?
2. Başlık süslü serif, gövde **serif** mi?
3. Small caps / drop cap kullanılmış mı?
4. Kâğıt dokusu (grain .06) görünüyor mu?
5. Süs **çizgi ve tipografi**, dolgu değil mi?

## Zorunlu kurallar

1. **Çift kural:** bölüm ayırıcı `3px double`; tek çizgi yalnız iç ayrımda.
2. **Serif ikilisi:** Playfair (display) + EB Garamond (gövde); sans yalnız etiket değil — etiket mono/Courier.
3. **Small caps:** etiket ve alt başlıklarda `font-variant: small-caps`, tracking `0.12em`.
4. **Drop cap:** yalnız açılış paragrafında, 3 satır.
5. **Radius 0**, gölge yok; ayrım çizgi ve boşlukla.
6. **Okunurluk:** gövde 17px/1.7, satır 66ch; süs metnin arkasında.

## Yasaklar

- Sans-serif gövde (dönem hissi biter).
- 3+ süs öğesi aynı ekranda (çift kural + drop cap + ornament = fazla).
- Kalın (700+) display; Playfair 400–600 yeterli.
- Modern kart gölgeleri, gradient, cam.
- 12px altı gövde; dar satır aralığı.
- Yoğun tabloda ornament.

## Görsel imza
- **Çift kural:** 3px double, `--line` (%45 siyah).
- **Ornament:** tek satır `❦` / `✳`; ekran başına 1.
- **Small caps etiket:** 10px, tracking `0.12em`.
- **Drop cap:** 44px EB Garamond, 3 satır.
- **Gravür illüstrasyon:** tek renk çizim, kâğıt zeminde.
- **Kâğıt grain .06.**

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#efe7d6` | sayfa (kâğıt) | panel |
| `--bg-2` | `#e5dbc5` | bölüm | metin |
| `--surface` | `#f7f1e3` | kart (daha açık kâğıt) | sayfa |
| `--surface-2` | `#eae0cb` | ikincil | vurgu |
| `--ink` | `#1c1a17` | metin | — |
| `--ink-soft` | `#4f4940` | açıklama | başlık |
| `--ink-faint` | `#857c6e` | dekoratif (3.34:1) | gövde |
| `--accent` | `#5a1e2b` | başlık vurgusu, buton, çizgi | geniş zemin |
| `--accent-ink` | `#f7f1e3` | accent üstü (**11.26:1**) | — |
| `--line` | `rgba(28,26,23,.45)` | çift kural, çerçeve | metin |

- Ölçülen kontrast: `ink/bg` **14.11:1** · `ink-soft/bg` **7.24:1** · `ink-faint/bg` **3.34:1** · `accent-ink/accent` **11.26:1**.
- Bordo üstünde krem metin; siyah yasak (kontrast 2.2:1).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Playfair Display | 50px (mobil 30px) | 400 | 1.12 | `0.04em` |
| H2 | Playfair Display | 28px | 600 | 1.2 | `0.02em` |
| Gövde | EB Garamond | 17px | 400 | 1.7 | `0.01em` |
| Etiket | Courier New | 10px | 400 | 1.2 | `0.12em`, small-caps |
| Buton | EB Garamond | 15px | 600 | 1 | `0.06em`, small-caps |

- Gövde serif olduğu için 17px ve 1.7 satır aralığı zorunlu.
- Gövde 66ch; 2 kolonda 46ch.
- Display 700 kullanma; Playfair 400–600 yeterli (700 "ucuz" durur).

## Izgara ve boşluk

Kolon 12 (metin 8) · gutter 32px · container 1080px (okuma 660px) · bölüm 80/48px · breakpoint 640/900/1080.
- Bölüm başlarında çift kural; bloklar arası 32px.
- Ornament tek başına bir satırda (üst/alt 16px boşluk).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Kâğıt | `--bg` + grain | yok | sayfa |
| Kart | `--surface` + 1px `--line` | yok | içerik |
| Yüzen | `--surface` | yok | modal (backdrop %40) |

- Derinlik yok; çerçeve ve tipografi taşır. Radius 0.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 24px | 0 | 15/600 small-caps | `--accent` + krem metin | hover: %92 · focus: 2px accent halka · disabled: %40 |
| Buton (çerçeve) | 46px | 0 22px | 0 | 15/600 | transparent + 1px ink | hover: `--surface-2` |
| Input | 46px | 0 14px | 0 | 16/400 | `--surface` + 1px `--line` | focus: 2px accent · error: `--danger` |
| Kart | içerik | 28px | 0 | H2 + 16 | `--surface` + 1px | hover yok |
| Chip | 24px | 0 10px | 0 | 10/400 mono small-caps | `--surface-2` + 1px | — |
| Nav | 72px | 0 32px | — | 11/600 small-caps 0.14em | `--bg` + 3px double alt | aktif: accent metin |
| Tablo satırı | 52px | 12px 14px | — | 15/400 serif | 1px `--line` alt | hover: `--surface-2` |
| Modal | içerik | 32px | 0 | H2 + 16 | `--surface` + 3px double çerçeve | backdrop: `rgba(28,26,23,.4)` |
| Toast | 46px | 0 18px | 0 | 13/600 small-caps | `--accent` + krem | 5sn |
| Grafik | — | — | 0 | eksen 10 mono | accent çizgi + ink %12 dolgu | 1 seri |

## Görsel dil

İkon: 1.5px çizgi, gravür hissi, 22px. Fotoğraf: sepya/tek renk gravür tonu; ince çerçeve. İllüstrasyon: gravür/çizim, tek renk. Doku: grain .06 + kâğıt kenarı. Logo: Playfair wordmark, small caps alt satır.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 50px Playfair, çift kural, drop cap, gravür görsel | `shots/01-landing.png` |
| Dashboard | çok düşük | Kural çizgileri + serif başlık; süs yok | `shots/02-dashboard.png` |
| Form | düşük | 480px, serif etiket, alt çizgili input | — |
| Liste/tablo | düşük | 52px satır, ince kural | — |
| Boş durum | orta | Ornament + tek cümle + buton | — |
| Onboarding | yüksek | Adım başına 1 gravür + 2 satır | — |
| Pricing | orta | 3 kart, orta kart accent çift çerçeve | — |
| Giriş/ödeme | düşük | Sade form, kural çizgisi | — |
| Modal | orta | Çift çerçeve, 32px padding | — |
| Toast | orta | Bordo zemin + krem small caps | — |
| Hata | düşük | `--danger` alt çizgi + 15px serif metin | — |
| Profil/ayar | orta | 8/4 kolon, kural ayırıcı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `ease-out` | `opacity` |
| Giriş | 520ms | `ease-out` | `opacity` + 24px `translateY`, stagger 80ms |
| Scroll (`top 79%`) | 620ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 300ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 500ms | `ease-out` | ornament `opacity` (tek atım) |

- `prefers-reduced-motion`: 0.01ms.
- Yasak: süs animasyonu, sürekli döngü.
- Pin/parallax yok.

## Koyu mod

`--bg` `#1a1713` · `--surface` `#221d18` · `--ink` `#e9dfcc` · `--accent` `#8d3547` · `--accent-ink` `#f7f1e3` · grain .04. Koyu modda gravür illüstrasyon açık renk çizgiye döner.

## Erişilebilirlik

- Gövde 14.11:1, açıklama 7.24:1 → güvenli; `--ink-faint` 3.34:1 → dekoratif.
- Serif gövde 17px/1.7 zorunlu; 15px serif + 1.5 satır okunmaz.
- Small caps gerçek `font-variant: small-caps` ile (sahte uppercase değil).
- Bordo üstü krem 11.26:1; siyah metin yasak.
- Drop cap `::first-letter` ile; ekran okuyucu sırası bozulmaz.
- Dokunma hedefi 46px.

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
| Okunmuyor | Serif 15px + dar satır | 17px/1.7, 66ch |
| Aşırı süslü | 4+ ornament | Ekran başına 1 ornament + 1 çift kural |
| "Klasik blog" gibi | Small caps/drop cap yok | Small caps etiket + drop cap |
| Modern kaçmış | Sans gövde / gölge | Serif gövde, gölge yok |
| Mobilde ağır | 50px sabit | `clamp()` 30px |

## Komşu stiller

**Uyumlu:** `33 dark-academia` (arşiv), `03 editorial-design` (kolon ritmi), `26 art-deco` (dönem). **Yasak:** `18 dopamine-ui`, `24 pixel-art`, `09 liquid-glass`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.bl.uk | Dönem baskı örnekleri |
| https://fonts.google.com/specimen/Playfair+Display | Display serif |
| https://fonts.google.com/specimen/EB+Garamond | Gövde serif |

## AI brief

```
Stil: Victorian (styles/27-victorian/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="victorian"]; hard-coded renk YASAK.
Tipografi: Playfair display 400–600 (50/1.12) + EB Garamond GÖVDE 17/1.7 (serif gövde zorunlu); etiket Courier 10 small-caps 0.12em.
Süs: bölüm başlarında 3px double kural; ekran başına 1 ornament; drop cap yalnız açılış paragrafında.
Renk: kâğıt #efe7d6 + bordo #5a1e2b (üstünde krem, 11.26:1); radius 0, gölge yok.
Doku: grain .06. Gövde 66ch.
Hareket: 140–500ms ease-out; süs animasyonu yasak.
Yasak: sans gövde, 700 display, gradient/gölge/cam, 12px altı gövde, yoğun tabloda ornament.
Çıktı: kod + tek paragraf not (süs bütçesi ve okunurluk).
```

**Teslim öncesi öz-denetim**
- [ ] Çift kural + 1 ornament sınırı korundu.
- [ ] Gövde serif, 17px/1.7, 66ch.
- [ ] Small caps ve drop cap gerçek CSS ile.
- [ ] Radius 0, gölge yok.
- [ ] Bordo üstü krem metin; `--ink-faint` dekoratif.
- [ ] Yoğun ekranda süs kapatıldı.

## Token

```css
[data-style="victorian"] {
  --bg: #efe7d6; --bg-2: #e5dbc5;
  --surface: #f7f1e3; --surface-2: #eae0cb;
  --ink: #1c1a17; --ink-soft: #4f4940; --ink-faint: #857c6e;
  --accent: #5a1e2b; --accent-ink: #f7f1e3;
  --line: rgba(28,26,23,.45);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Playfair Display", "Baskerville", Georgia, serif;
  --font-body: "EB Garamond", Georgia, serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: .06;
}
```
