# 30 · Bohemian

> **Bir cümleyle:** Toprak paleti, kilim dokusu, el yazısı dokunuşu ve organik köşeler: gezgin ama dağınık değil.

| | |
|---|---|
| **Hissiyat** | özgür, dokulu, dünyevi, sıcak |
| **En iyi** | seyahat, yemek/tarif, topluluk, el yapımı ürün, festival |
| **Kaçın** | fintech, kurumsal B2B, sağlık verisi, yoğun panel |
| **Zorluk** | orta · **Erişilebilirlik** | orta (doku + düşük kontrast) |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="bohemian"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Bohemian, el yapımı ve gezgin bir dil: **kil/kum zemin**, **toprak accent** (pas turuncusu), **asimetrik radius** (22px 22px 22px 4px), **doku** (grain .06 + diyagonal desen) ve **serif display** (Fraunces) + el yazısı vurgu.

Kazandığı şey: sıcaklık ve aidiyet. Feda ettiği şey: kurumsal netlik; doku ve sıcaklık yoğunlaşırsa okunurluk düşer.

### Ne değildir
- **Wabi-Sabi değildir.** Wabi-sabi kusuru sergiler; bohemian **dolu ve neşeli**.
- **Scrapbook değildir.** Scrapbook kolaj/bant; bohemian desen ve doku.
- **Japandi değildir.** Japandi ölçülü/az; bohemian katmanlı ve renkli.
- **"Toprak tonu" değildir.** Asimetrik radius + doku + serif olmadan sadece bej olur.

### Nereden gelir
60'lar-70'ler karşı kültürü, el sanatları/kilim motifleri, "slow travel" markaları.

### 3 saniyede tanıma testi
1. Zemin kil/kum tonu mu (#f3e9d8)?
2. Radius **asimetrik** mi (22px 22px 22px 4px)?
3. Doku (grain + diyagonal desen) var mı?
4. Accent **pas turuncusu** mu (#b45634)?
5. Serif display + el yazısı vurgu var mı?

## Zorunlu kurallar

1. **Asimetrik radius:** kart/görsel `22px 22px 22px 4px`; buton 14px.
2. **Doku iki katman:** grain .06 + diyagonal desen (%7 opaklık).
3. **Toprak paleti:** kil, kum, pas, koyu kahve; soğuk renk yok.
4. **Accent üstü krem metin** (4.61:1); daha açık pas tonu kullanma.
5. **El yazısı 1 yerde:** tek kısa notta; gövde Inter.
6. **Okunurluk:** desen metnin arkasında; gövde 16px/1.65, 62ch.

## Yasaklar

- Simetrik/eşit radius, keskin köşe.
- Mavi/mor soğuk accent.
- 3+ desen; desen üstünde metin.
- Doygun neon, gradient, cam.
- 12px altı metin.
- Yoğun tabloda doku.

## Görsel imza
- **Asimetrik radius** + 1px kahve kenar.
- **Diyagonal desen** (%7) + grain .06.
- **Fraunces 400** display, 44px.
- **El yazısı** (Caveat) tek not, 20px.
- **Pas turuncusu** buton.

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#f3e9d8` | kil zemin |
| `--surface` | `#fbf4e6` | kart |
| `--surface-2` | `#f0e0c4` | ikincil |
| `--ink` | `#2e2620` | metin (12.34:1) |
| `--ink-soft` | `#5f5347` | açıklama (6.20:1) |
| `--ink-faint` | `#91857a` | dekoratif (2.99:1) |
| `--accent` | `#b45634` | CTA |
| `--accent-ink` | `#fff8ee` | accent üstü (**4.61:1**) |
| `--line` | `rgba(46,38,32,.18)` | kenar |

- Ölçülen kontrast: `ink/bg` **12.34:1** · `ink-soft/bg` **6.20:1** · `ink-faint/bg` **2.99:1** · `accent-ink/accent` **4.61:1**.
- Accent üstü krem; beyaz yasak (4.1:1 sınırda, krem daha iyi).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Fraunces | 44px (mobil 28px) | 400 | 1.15 | `0` |
| H2 | Fraunces | 26px | 400 | 1.2 | `0` |
| Gövde | Inter | 16px | 400 | 1.65 | `0` |
| El yazısı | Caveat | 20px | 400 | 1.3 | `0` |
| Etiket | Courier New | 10px | 400 | 1.2 | `0.14em`, uppercase |

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1120px · bölüm 76/48px · breakpoint 640/900/1120.
- Asimetri: hero 7/5; kart yükseklikleri farklı olabilir (bilinçli).
- Desen bandı tam genişlik, metin her zaman düz yüzeyde.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Dokulu zemin | `--bg` + desen + grain | yok | sayfa |
| Kart | `--surface` + 1px | `--shadow` (yumuşak) | içerik |
| Yapıştırılmış | `--surface` | `--shadow-hard` (4px) | etiket/not |

- Radius asimetrik; gölge yumuşak, tek yön.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 22px | 14px | 15/600 | `--accent` + krem | hover: %94 · focus: 2px accent · disabled: %40 |
| Input | 46px | 0 14px | 14px | 15/400 | `--surface` + 1px | focus: alt 2px accent |
| Kart | içerik | 24px | `22px 22px 22px 4px` | H2 serif + 16 | `--surface` + 1px + gölge | hover: translateY(-2px) |
| Chip | 26px | 0 12px | 999px | 10/400 mono | `--surface-2` + kenar | aktif: accent |
| Nav | 72px | 0 28px | — | 14/500 | `--bg` + alt 1px | aktif: accent alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 15/400 | 1px kenar alt | hover: `--surface-2` (desen kapalı) |
| Modal | içerik | 28px | 22px | H2 + 16 | `--surface` + gölge | backdrop: `rgba(46,38,32,.35)` |
| Toast | 46px | 0 18px | 14px | 13/500 | `--ink` + `--bg` | 4.5sn |
| Grafik | — | — | 4px uç | eksen 10 mono | accent + ink %15 | 2 seri |

## Görsel dil

İkon: 1.5px çizgi, 22px, hafif düzensiz. Fotoğraf: doğal ışık, toprak tonları, asimetrik radius. İllüstrasyon: kilim/geometrik motif, el çizimi. Doku: grain .06 + diyagonal. Logo: serif + el yazısı alt satır.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 44px Fraunces, desen bandı, asimetrik görsel, tek pas buton | `shots/01-landing.png` |
| Dashboard | çok düşük | Desen kapanır, düz kart + serif başlık | `shots/02-dashboard.png` |
| Form | düşük | 480px, asimetrik radius input | — |
| Liste/tablo | düşük | Düz yüzey, ince ayırıcı | — |
| Boş durum | orta | El yazısı not + tek buton | — |
| Onboarding | yüksek | Adım başına 1 motif + görsel | — |
| Pricing | orta | 3 kart farklı yükseklikte | — |
| Giriş/ödeme | çok düşük | Desen/gölge kapanır | — |
| Modal | orta | Asimetrik radius | — |
| Toast | orta | Koyu zemin + krem | — |
| Hata | düşük | `--danger` alt çizgi + 15px | — |
| Profil/ayar | orta | Kart listesi, desen minimal | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `ease-out` | `opacity` |
| Giriş | 950ms | `ease-out` | `opacity` + 28px `translateY`, stagger 100ms |
| Scroll (`top 84%`) | 900ms | aynı eğri | `opacity` + 32px `translateY`, `once: true` |
| Hover | 340ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 400ms | `ease-out` | desen `opacity` |

- `prefers-reduced-motion`: 0.01ms.
- Yasak: sürekli döngü, hızlı geçiş.

## Koyu mod

`--bg` `#1c1712` · `--surface` `#26201a` · `--ink` `#f0e6d5` · `--accent` `#d0704a` · `--accent-ink` `#1c1712` · desen opacity .04.

## Erişilebilirlik

- Gövde 12.34:1, açıklama 6.20:1 → güvenli; `--ink-faint` 2.99:1 → dekoratif.
- Accent üstü krem 4.61:1; buton metni ≥ 15px/600.
- Desen **metnin arkasında**; desenli zeminde uzun metin yok.
- Grain .06 üstünde 15px metin okunur; artırma.
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
| Dağınık | 3+ desen | Desen 1 + grain |
| Okunmuyor | Desen metin altında | Metni düz yüzeye al |
| "Bej tema" gibi | Asimetrik radius/doku yok | Radius formülü + grain |
| Ağır | Doku her bileşende | Doku zeminde, kartta yok |

## Komşu stiller

**Uyumlu:** `07 wabi-sabi` (toprak), `31 scrapbook` (el yapımı), `17 maximalism` (desen). **Yasak:** `02 swiss-design`, `23 cybercore`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.airbnb.com | Seyahat ürününde sıcak palet |
| https://fonts.google.com/specimen/Fraunces | Serif display |
| https://www.are.na | Kilim/doku panoları |

## AI brief

```
Stil: Bohemian (styles/30-bohemian/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="bohemian"]; hard-coded renk YASAK.
Radius: kart/görsel 22px 22px 22px 4px, buton/input 14px.
Doku: grain .06 + 1 diyagonal desen (%7); desen METNİN ARKASINDA, desenli zeminde uzun metin yok.
Palet: kil #f3e9d8 + pas #b45634 (üstünde krem #fff8ee, 4.61:1); soğuk renk yok.
Tipografi: Fraunces 400 display (44/1.15) + Inter gövde 16/1.65 + Caveat el yazısı 1 notta.
Hareket: 140–400ms ease-out; sürekli döngü yok.
Yasak: simetrik radius, 3+ desen, neon/gradient/cam, 12px altı metin, yoğun tabloda doku.
Çıktı: kod + tek paragraf not (doku ve okunurluk dengesi).
```

**Teslim öncesi öz-denetim**
- [ ] Radius asimetrik (22/4) kullanıldı.
- [ ] Doku 1 katman + grain; metin düz yüzeyde.
- [ ] Accent üstü krem metin (4.61:1).
- [ ] El yazısı 1 yerde.
- [ ] Soğuk renk yok.
- [ ] Yoğun ekranda desen kapalı.

## Token

```css
[data-style="bohemian"] {
  --bg: #f3e9d8; --bg-2: #e8d9c0;
  --surface: #fbf4e6; --surface-2: #f0e0c4;
  --ink: #2e2620; --ink-soft: #5f5347; --ink-faint: #91857a;
  --accent: #b45634; --accent-ink: #fff8ee;
  --line: rgba(46,38,32,.18);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 10px 24px rgba(46,38,32,.12); --shadow-hard: 4px 4px 0 rgba(46,38,32,.15);
  --font-display: "Fraunces", "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier New", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .06;
}
```
