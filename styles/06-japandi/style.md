# 06 · Japandi

> **Bir cümlede:** Japon sadeliği + İskandinav sıcaklığı: düşük kontrast, yumuşak serif başlık, kil-linen tonları, ölçülü boşluk.

| | |
|---|---|
| **Hissiyat** | dingin, doğal, ölçülü, "nefes alan" |
| **En iyi** | wellness, yaşam/not uygulaması, sürdürülebilir marka, iç mekân/yemek | 
| **Kaçın** | yüksek kontrast gerektiren veri ekranı, oyun, agresif kampanya |
| **Zorluk** | orta (kontrast dengesi) · **Erişilebilirlik** | orta risk (düşük kontrast eğilimi) |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="japandi"]` |
| **Kompozisyon** | `centered` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
İki geleneğin kesişimi: Japon **ma** (boşluk) ve İskandinav **hygge** (sıcaklık). Sonuç: krem/kıl zeminler, yumuşak serif başlık (Lora), sans gövde (Inter), 10–14px radius, çok hafif gölge ve **yeşilimsi ada çayı** accent. Kontrast bilinçli olarak yumuşak ama gövde metni okunur kalır.

Kazandığı şey: huzur ve sürdürülebilirlik algısı. Feda ettiği şey: enerji — bu stil "hızlı ve heyecanlı" bir ürünü taşımaz.

### Ne değildir
- **Wabi-Sabi değildir.** Wabi-sabi kusuru ve kırık hizayı sergiler; japandi **ölçülü ve düzgün** kalır.
- **Minimalism değildir.** Minimalizm nötr gri skalada; japandi sıcak toprak tonlarında ve dokulu.
- **Beige estetiği değildir.** Tek düze bej = cansız; burada adaçayı yeşili + serif + doku dengeyi kurar.
- **"Düşük kontrast" değildir.** Kontrast yumuşak ama gövde metni ≥ 4.5:1 korunur.

### Nereden gelir
Japandi terimi 2010'larda iç mekân tasarımından geldi; dijitalde "slow living" uygulamaları ve sürdürülebilir D2C markalarıyla yayıldı. Kalabalık, hızlı arayüzlerin yorgunluğuna karşı sakinlik satar.

### 3 saniyede tanıma testi
1. Zemin krem/kıl tonu mu (#f4efe7), beyaz değil mi?
2. Başlık **serif**, gövde sans mı?
3. Radius 10–14px, gölge neredeyse yok mu?
4. Accent **soluk adaçayı yeşili** mi (doygun değil)?
5. Boşluk bol ama ölçülü mü (aşırı kahraman tipografi yok)?

## Zorunlu kurallar

1. **Sıcak nötr skala:** krem zemin + toprak tonlu gri metin; soğuk gri yasak.
2. **Serif başlık + sans gövde:** Lora display, Inter gövde.
3. **Yumuşak kontrast:** gövde ≥ 4.5:1; accent üstü metin `--ink` (koyu), beyaz değil.
4. **Radius 10/14px, gölge tek katman** ve çok hafif (`0 1px 2px .04`).
5. **Doku:** grain .03 — kâğıt/linen hissi, görünür gürültü değil.
6. **Accent soluk:** `#8a9b84`; vurgu alanı ≤ %10.

## Yasaklar

- Saf beyaz zemin, saf siyah metin (#000), soğuk mavi-gri.
- Doygun accent, gradient, cam, sert gölge.
- 700+ ağırlıkta büyük başlık (sertlik hissi).
- Accent üstü **beyaz** metin (kontrast 2.96:1 — erişilemez).
- 5+ farklı radius, çok katmanlı gölge.
- Yoğun tablo/grafik ekranında tam stil (veri okunmaz).

## Görsel imza
- **Zemin:** `#f4efe7` krem; kart `#fbf8f3` — fark 1 tık, gölge değil.
- **Serif başlık:** Lora 400, `-0.01em`, satır aralığı 1.12.
- **Adaçayı accent:** yalnızca durum, ikon noktası ve tek buton.
- **Çizgi:** 1px `rgba(44,41,37,.10)` — hairline bile yumuşak.
- **Boşluk:** bölüm 64px, kart padding 24px; hero üst 80px.
- **Sessiz ikon:** 1.5px çizgi, 20px, `--ink-soft`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f4efe7` | sayfa | kart zemini |
| `--bg-2` | `#ebe4d9` | bölüm ayrımı, pasif blok | buton |
| `--surface` | `#fbf8f3` | kart, input | sayfa zemini |
| `--surface-2` | `#f2ece2` | hover, ikincil | vurgu |
| `--ink` | `#2c2925` | başlık, gövde | accent zemin üstünde de kullanılır |
| `--ink-soft` | `#635c53` | açıklama | 12px altı metin |
| `--ink-faint` | `#918a80` | dekoratif etiket | gövde metni |
| `--accent` | `#8a9b84` | durum, ikon, tek buton, accent zemin | geniş alan |
| `--accent-ink` | `#2c2925` | accent üstü metin (**beyaz değil**) | — |
| `--line` | `rgba(44,41,37,.10)` | hairline | metin |

- Ölçülen kontrast: `ink/bg` **12.64:1** · `ink-soft/bg` **5.76:1** · `ink-faint/bg` **2.98:1** · `accent-ink/accent` **4.89:1** (koyu metin ile).
- Accent üstü beyaz metin 2.96:1 → **yasak**; koyu `--ink` kullan.
- Yasak: doygun yeşil/mavi; ikinci accent; soğuk gri.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Lora | 46px (mobil 30px) | 400 | 1.12 | `-0.01em` |
| H2 | Lora | 28px | 400 | 1.2 | `-0.01em` |
| H3 | Inter | 17px | 600 | 1.35 | `0` |
| Gövde | Inter | 16px | 400 | 1.65 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.16em`, uppercase |
| Buton | Inter | 14px | 600 | 1 | `0` |

- Ölçek **1.75×**: 16 → 28 → 46. Ara basamaklar kullanılmaz.
- Gövde satır uzunluğu 62ch; başlık 24ch.
- 700 ağırlık yalnızca gövde vurgusunda; büyük başlıkta 400.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 8, kenar 2+2) |
| Gutter | 24px |
| Container | 1120px (okuma 680px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1120 px |
| Bölüm dikey | 64px (mobil 44px) |

- Hero: 6/6 veya 7/5, merkezlenmiş değil ama simetrik de değil.
- Asimetri: ekran başına 1 bölüm (ör. hero'da 7/5).
- Kartlar arası 16px; kart içi 24px — iki ritim karışmaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain | yok | sayfa |
| Kart | `--surface` + 1px `--line` | `0 1px 2px .04` | içerik |
| Yüzen | `--surface` + gölge | aynı | modal (backdrop %28) |

- Derinlik neredeyse yok; ayrım zemin tonu + hairline.
- Radius: `--radius` 10px (buton/input), `--radius-lg` 14px (kart/modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 10px | 14/600 | `--accent` + `--accent-ink` (koyu) | hover: %94 parlaklık · focus: 2px `--accent` halka · disabled: %40 |
| Buton (ikincil) | 44px | 0 18px | 10px | 14/600 | `--surface-2` + 1px `--line` | hover: `--bg-2` |
| Input | 44px | 0 14px | 10px | 15/400 | `--surface` + 1px `--line` | focus: 2px `--accent` halka · error: `--danger` |
| Kart | içerik | 24px | 14px | H3 + 15 gövde | `--surface` + `--shadow` | hover (tıklanabilir): zemin `#f8f4ec` |
| Chip | 24px | 0 10px | 999px | 10/500 mono | `--surface-2` + `--line` | aktif: accent zemin + koyu metin |
| Nav | 68px | 0 32px | — | 14/500 | `--bg` + alt 1px `--line` | aktif: metin `--ink` + 2px alt `--accent` |
| Tablo satırı | 52px | 12px 16px | — | 14/400, sayı 13 mono | alt 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 28px | 14px | H2 serif + 15 | `--surface` + `--shadow` | backdrop %28 |
| Toast | 44px | 0 16px | 14px | 13/500 | `--ink` + `--bg` | 4.5sn |
| Grafik | — | — | 6px uç | eksen 10 mono | `--accent` + `%18` dolgu | 2 seri |

- Odak halkası 2px adaçayı; krem zeminde 4.89:1 ile görünür.
- Dokunma hedefi 44px; ikon butonlar padding ile.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px, `--ink-soft` |
| Fotoğraf | Doğal ışık, ahşap/kıl yüzey, düşük doygunluk, 14px radius kırpma |
| İllüstrasyon | Çizgi/gravür tonlu, toprak paleti |
| Doku | grain .03 (linen hissi) |
| Logo | Serif wordmark, `--ink`, 20–24px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 46px serif başlık, 2 satır gövde, tek accent buton, sağda sıcak tonlu görsel | `shots/01-landing.png` |
| Dashboard | düşük | Kart yerine hairline bölümler; sayı 28px, etiket 10px mono; grafik tek renk | `shots/02-dashboard.png` |
| Form | düşük | 480px tek sütun, etiket üstte 13px, input 44px | — |
| Liste / tablo | düşük | 52px satır, hairline; zebra yok | — |
| Boş durum | orta | Tek cümle + tek buton, küçük çizgi illüstrasyon | — |
| Onboarding | yüksek | Sayfa başına 1 fikir, ilerleme nokta, görsel + kısa metin | — |
| Pricing | orta | 2–3 kolon, orta kolon 1px accent kenar | — |
| Giriş / ödeme | çok düşük | 420px kart, 2 alan, tek buton | — |
| Modal | orta | 14px radius, hairline, 28px padding | — |
| Bildirim / toast | orta | Koyu zemin + krem metin, 14px radius | — |
| Hata | düşük | `--danger` 1px kenar + 13px sakin dil | — |
| Profil / ayar | orta | Sol nav + 8/4 içerik; satır 56px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 140ms | `ease-out` | `opacity` |
| Giriş | 700ms | `cubic-bezier(.3,.7,.3,1)` | `opacity` + 14px `translateY`, stagger 70ms |
| Scroll (`top 83%`) | 850ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 220ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | 400ms | `ease-in-out` | accent nokta `scale(.9→1)` tek sefer |

- Hareket yavaş ve küçük: "nefes" hissi, dikkat çekme yok.
- `prefers-reduced-motion`: 0.01ms.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f4efe7` | `#17150f` |
| `--surface` | `#fbf8f3` | `#221f18` |
| `--surface-2` | `#f2ece2` | `#2a261e` |
| `--ink` | `#2c2925` | `#ece5d8` |
| `--ink-soft` | `#635c53` | `#b3aa9c` |
| `--line` | `rgba(44,41,37,.10)` | `rgba(236,229,216,.14)` |
| `--accent` | `#8a9b84` | `#9fae97` |
| `--accent-ink` | `#2c2925` | `#17150f` |

- Koyu modda accent-ink her iki modda da koyu; accent zemin üstü metin asla beyaz değil.

## Erişilebilirlik

- Gövde 12.64:1, açıklama 5.76:1 → güvenli. `--ink-faint` 2.98:1 → yalnızca dekoratif etiket.
- Accent üstü metin koyu (#2c2925) → 4.89:1. **Beyaz metin yasak (2.96:1).**
- Düşük kontrastlı stil tuzağı: kenarlıkları 0.10 opaklıkta bırakınca input kaybolur → input kenarı `--ink` %22.
- Odak halkası 2px accent, offset 2px.
- Dokunma hedefi 44px; 10px etiketler tıklanabilir olmaz.
- Serif gövde kullanma (17px altı serif okunmaz).

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
| Cansız/bej çorba | Tek tonda her şey | Serif başlık + adaçayı accent + grain ekle |
| Okunmuyor | Düşük kontrast her yere uygulanmış | Gövde `--ink` (12.6:1), sadece etiketler soluk |
| Erişilemez buton | Accent üstü beyaz metin | `--accent-ink: #2c2925` |
| Jest "minimal" hissi | 700 ağırlık büyük başlık | 400 ağırlık Lora |
| Veri ekranında tıkanma | Tam stil yoğun tabloda | Dashboard'da stili düşür (yalnız tipografi + hairline) |

## Komşu stiller

- **Uyumlu:** `07 wabi-sabi` (aynı sıcaklık ve doku), `01 minimalism` (boşluk), `29 ethereal` (yumuşaklık, garnitür).
- **Yasak:** `13 neo-brutalism` (kontur/iddia), `22 cyberpunk` (neon), `15 acid-graphics` (asit yeşili).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.muji.com | Sıcak nötr palet, ölçülü boşluk |
| https://fonts.google.com/specimen/Lora | Serif başlık karakteri |
| https://www.kinfolk.com | Sakinlik ve düşük kontrast dengesi |

## AI brief

```
Stil: Japandi (styles/06-japandi/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="japandi"]; hard-coded renk/ölçü YASAK.
Zemin: sıcak krem #f4efe7; kart #fbf8f3 + 1px rgba(44,41,37,.10) + 0 1px 2px .04.
Tipografi: Lora display 400 (46/1.12 -0.01em) + Inter gövde 16/1.65; etiket mono 10 uppercase 0.16em.
Accent: adaçayı #8a9b84; accent üstü metin KOYU --ink (#2c2925), beyaz YASAK (2.96:1).
Radius 10/14px; grain .03; sert gölge/gradient/cam yasak.
Boşluk: bölüm 64px (mobil 44px), kart padding 24px, gövde 62ch.
Hareket: 140–400ms ease-out, sadece opacity + 4px translate.
Yasak: saf beyaz zemin, saf siyah metin, soğuk gri, doygun accent, 700 büyük başlık.
Çıktı: kod + tek paragraf not (kontrastı nasıl koruduğunu yaz).
```

**Teslim öncesi öz-denetim**
- [ ] Zemin krem, soğuk gri yok.
- [ ] Başlık serif (Lora), gövde sans (Inter).
- [ ] Accent üstü metin koyu; kontrast ≥ 4.5:1.
- [ ] Radius 10/14, gölge tek katman ve hafif.
- [ ] Gövde 16px/1.65, satır 62ch.
- [ ] Yoğun veri ekranında stil düşürüldü.

## Token

```css
[data-style="japandi"] {
  --bg: #f4efe7; --bg-2: #ebe4d9;
  --surface: #fbf8f3; --surface-2: #f2ece2;
  --ink: #2c2925; --ink-soft: #635c53; --ink-faint: #918a80;
  --accent: #8a9b84; --accent-ink: #2c2925;
  --line: rgba(44,41,37,.10);
  --radius: 10px; --radius-lg: 14px;
  --shadow: 0 1px 2px rgba(44,41,37,.04); --shadow-hard: none;
  --font-display: "Lora", "Iowan Old Style", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: .03;
}
```
