# 31 · Scrapbook

> **Bir cümleyle:** Deftere yapıştırılmış anılar: bant, polaroid, el yazısı, hafif eğik kartlar ve kâğıt dokusu.

| | |
|---|---|
| **Hissiyat** | kişisel, samimi, nostaljik, "bellek defteri" |
| **En iyi** | günlük/anı uygulaması, moodboard, etkinlik daveti, kişisel portfolyo |
| **Kaçın** | kurumsal panel, ödeme, sağlık verisi, yoğun tablo |
| **Zorluk** | orta (dağınıklık kontrolü) · **Erişilebilirlik** | orta (eğiklik + doku) |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="scrapbook"]` |
| **Kompozisyon** | `type` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Scrapbook, fiziksel anı defterinin mantığı: **bant şeritleri**, **polaroid çerçeve**, **el yazısı başlık** (Caveat), **hafif eğik kartlar** (≤1.2°), kâğıt dokusu (grain .08) ve kırmızı damga accent. Kompozisyon bilinçli olarak "elle yapıştırılmış" hissi verir.

Kazandığı şey: samimiyet ve hatırlanma. Feda ettiği şey: kurumsal netlik; eğiklik ve doku artarsa okunurluk düşer.

### Ne değildir
- **Wabi-Sabi değildir.** Wabi-sabi kusur/eksiklik; scrapbook **dolu ve neşeli**.
- **Bohemian değildir.** Bohemian desen/doku; scrapbook **yapıştırma katmanları**.
- **"Eğik kart" değildir.** Bant + polaroid + el yazısı olmadan sadece eğri durur.
- **Kaos tasarımı değildir.** Katmanlar hizalı bir iskelet üstünde.

### Nereden gelir
Analog fotoğraf albümleri, bullet journal ve moodboard kültürü; kişisel ürünlerde (günlük, anı) kullanılıyor.

### 3 saniyede tanıma testi
1. Bant şeridi (masking tape) var mı?
2. Polaroid/çerçeveli fotoğraf bloğu var mı?
3. El yazısı başlık mı (Caveat)?
4. Kartlar ≤1.2° eğik mi?
5. Kâğıt dokusu (grain .08) görünüyor mu?

## Zorunlu kurallar

1. **Eğiklik sınırı:** en fazla 1.2°; ekran başına ≤ 3 eğik öğe, metin blokları düz.
2. **Bant kuralı:** bant yalnız görsel/kart köşesinde; metnin üstünde yok.
3. **El yazısı 2 yerde:** ana başlık + kısa not; gövde Inter.
4. **Polaroid:** 12px alt boşluk (etiket alanı), 3px beyaz çerçeve.
5. **Accent üstü krem** (5.02:1); damga/kırmızı buton.
6. **Okunurluk:** gövde 16px/1.65, 58ch; doku metnin arkasında.

## Yasaklar

- 3° üzeri eğiklik, 4+ eğik öğe.
- Dönen metin blokları.
- 3+ farklı renk (kırmızı, krem, lacivert yeter).
- Doku yoğunluğu > .08.
- Modern gölge (blur) tek başına — hafif gölge + blok gölge birlikte.
- Yoğun tabloda bant/polaroid.

## Görsel imza
- **Bant:** 90×22px, `rgba(255,246,214,.9)`, -3° eğik.
- **Polaroid:** beyaz çerçeve + alt etiket alanı, -1.2°.
- **El yazısı:** Caveat 700, 34–44px.
- **Blok gölge:** `6px 6px 0 rgba(31,43,58,.12)` (yapıştırılmış hissi).
- **Kâğıt grain .08** + hafif çizgili zemin.
- **Damga accent:** kırmızı, 5° eğik küçük etiket.

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#f7f1e4` | kâğıt zemin |
| `--surface` | `#fffdf7` | polaroid/kart |
| `--surface-2` | `#fdf3dc` | bant, ikincil |
| `--ink` | `#1f2b3a` | metin (12.74:1) |
| `--ink-soft` | `#4e5a68` | açıklama (6.25:1) |
| `--ink-faint` | `#858e99` | dekoratif (2.95:1) |
| `--accent` | `#c63d2f` | damga, buton |
| `--accent-ink` | `#fffdf7` | accent üstü (**5.02:1**) |
| `--line` | `rgba(31,43,58,.18)` | kenar |

- Ölçülen kontrast: `ink/bg` **12.74:1** · `ink-soft/bg` **6.25:1** · `ink-faint/bg` **2.95:1** · `accent-ink/accent` **5.02:1**.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Caveat | 40px (mobil 28px) | 700 | 1.15 | `0` |
| H2 | Caveat | 28px | 700 | 1.2 | `0` |
| Gövde | Inter | 16px | 400 | 1.65 | `0` |
| Etiket | Courier Prime | 10px | 400 | 1.2 | `0.14em`, uppercase |

- Caveat yalnız başlık/not; uzun metinde okunmaz (Inter).
- El yazısı 24px altına inmez.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1120px · bölüm 72/48px · breakpoint 640/900/1120.
- İskelet hizalı; eğiklik yalnız kart/görselde (≤1.2°).
- Bant payı: görselin üstüne 12px taşma.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Kâğıt | `--bg` + grain | yok | sayfa |
| Kart | `--surface` + 1px | `--shadow` + `--shadow-hard` | anı kartı |
| Polaroid | `--surface` + 3px beyaz çerçeve | blok gölge | fotoğraf |

- Radius 3/8px (kâğıt keskin); polaroid 2px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 20px | 3px | 14/600 | `--accent` + krem | hover: %94 · focus: 2px accent · disabled: %40 |
| Input | 44px | 0 12px | 3px | 15/400 | `--surface` + 1px | focus: 2px accent |
| Kart | içerik | 20px | 8px | Caveat H2 + 16 | `--surface` + blok gölge | hover: rotate(0) |
| Bant | 22px | — | 0 | — | `--surface-2` %90 | -3°, görsel üstünde |
| Nav | 64px | 0 24px | — | 14/600 | `--bg` + alt 1px | aktif: accent alt çizgi |
| Tablo satırı | 50px | 10px 14px | — | 15/400 | 1px kenar alt | eğiklik yok |
| Modal | içerik | 24px | 8px | Caveat H2 + 16 | blok gölge | backdrop: `rgba(31,43,58,.35)` |
| Toast | 44px | 0 16px | 3px | 13/500 | `--ink` + `--bg` | 4.5sn |
| Grafik | — | — | 3px uç | eksen 10 mono | accent + lacivert | 2 seri |

## Görsel dil

İkon: 1.5px çizgi veya el çizimi, 22px. Fotoğraf: polaroid çerçeve, sepya/eğik. İllüstrasyon: el çizimi not, ok/yıldız. Doku: grain .08 + hafif çizgiler. Logo: el yazısı.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | El yazısı başlık, polaroid + bant, tek kırmızı buton | `shots/01-landing.png` |
| Dashboard | çok düşük | Bant/polaroid kapanır; kart + Inter başlık | `shots/02-dashboard.png` |
| Form | düşük | 460px, kâğıt kenar, düz | — |
| Liste/tablo | çok düşük | Düz tablo, eğiklik yok | — |
| Boş durum | yüksek | Boş polaroid + el yazısı not | — |
| Onboarding | yüksek | Adım başına 1 polaroid | — |
| Pricing | orta | 3 kart, orta kart damga | — |
| Giriş/ödeme | çok düşük | Süs kapanır, düz form | — |
| Modal | orta | Blok gölgeli kart | — |
| Toast | orta | Koyu bar + krem | — |
| Hata | düşük | Kırmızı alt çizgi + 15px | — |
| Profil/ayar | orta | Anı kartı listesi, eğiklik ≤1° | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `ease-out` | `transform: translateY(1px)`; eğiklik değişmez |
| Geçiş / sayfa | 260ms | `ease-out` | `opacity` + `translateY(4px)` |
| Giriş (enter) | **340ms** | `cubic-bezier(.34,1.28,.52,1)` | `opacity` + `translateY(10px)`, **stagger 50ms**; hafif taşma = "yapıştır ve otur" |
| Kaydırma (scroll) | **440ms** | `cubic-bezier(.34,1.28,.52,1)` | trigger **`top 88%`**, offsetY **12px**, `once: true` |
| Hover | **150ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `scrub: null`, `distance: null` — parallax yok |
| Ödül / vurgu | 320ms | `ease-out` | eğiklik 0 → hedef açı, tek atım (döngü yok) |

- İmza ölçüsü: enter **0.34s / 10px / stagger 0.05** · scroll **0.44s / `top 88%` / 12px** · hover **150ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: 0.01ms, eğiklik statik.
- Bu stile yasak hareket: metin döndürme (rotate), sürekli döngü.
## Koyu mod

`--bg` `#1a1f26` · `--surface` `#232a33` · `--ink` `#f2ece0` · `--accent` `#e0574a` · `--accent-ink` `#1a1f26` · grain .05.

## Erişilebilirlik

- Gövde 12.74:1, açıklama 6.25:1 → güvenli; `--ink-faint` 2.95:1 → dekoratif.
- Accent üstü krem 5.02:1.
- Eğiklik ≤1.2° ve **metin blokları düz** (okuma düzeni bozulmaz).
- Bant/polaroid `pointer-events: none`; metni örtmez.
- Dokunma hedefi 44px.
- `prefers-reduced-motion` eğiklik animasyonunu kapatır.

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
| Dağınık | 4+ eğik öğe, 3+ bant | Eğik ≤3, bant 1–2 |
| Okunmuyor | Dönen metin | Metin düz, eğiklik görselde |
| "Kötü tasarım" | İskelet yok | Hizalı grid + sınırlı eğiklik |
| Karakter kaybı | Bant/polaroid yok | 1 bant + 1 polaroid |
| Mobilde taşma | Bant görselden taşıyor | `overflow: visible` + padding |

## Komşu stiller

**Uyumlu:** `07 wabi-sabi` (kâğıt), `30 bohemian` (el yapımı), `03 editorial-design` (baskı). **Yasak:** `02 swiss-design`, `23 cybercore`, `33 dark-academia`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.pinterest.com | Scrapbook/moodboard örnekleri |
| https://fonts.google.com/specimen/Caveat | El yazısı |
| https://mobbin.com | Günlük/anı uygulamaları |

## AI brief

```
Stil: Scrapbook (styles/31-scrapbook/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="scrapbook"]; hard-coded renk YASAK.
Katmanlar: bant (90×22px, -3°), polaroid (3px beyaz çerçeve + alt etiket), hafif gölge + 6px blok gölge.
Eğiklik: ≤ 1.2°, ekran başına ≤ 3 eğik öğe; METİN BLOKLARI DÜZ.
Tipografi: Caveat 700 başlık/not (≥24px) + Inter gövde 16/1.65; etiket Courier Prime 10.
Renk: kâğıt #f7f1e4 + kırmızı #c63d2f (üstünde krem, 5.02:1); 3+ renk yok.
Doku: grain .08 + hafif çizgiler; doku metnin arkasında.
Hareket: 120–320ms ease-out; reduced-motion'da eğiklik statik.
Yasak: dönen metin, 3°+ eğiklik, 4+ renk, modern blur gölge tek başına.
Çıktı: kod + tek paragraf not (kaç katman, hangi eğiklik).
```

**Teslim öncesi öz-denetim**
- [ ] Bant + polaroid + el yazısı üçlüsü var.
- [ ] Eğiklik ≤ 1.2°, eğik öğe ≤ 3, metin düz.
- [ ] Accent üstü krem metin (5.02:1).
- [ ] 3'ten fazla renk yok; grain ≤ .08.
- [ ] Bant/polaroid metni örtmüyor.
- [ ] Yoğun ekranda süs kapatıldı.

## Token

```css
[data-style="scrapbook"] {
  --bg: #f7f1e4; --bg-2: #efe6d2;
  --surface: #fffdf7; --surface-2: #fdf3dc;
  --ink: #1f2b3a; --ink-soft: #4e5a68; --ink-faint: #858e99;
  --accent: #c63d2f; --accent-ink: #fffdf7;
  --line: rgba(31,43,58,.18);
  --radius: 3px; --radius-lg: 8px;
  --shadow: 0 2px 6px rgba(31,43,58,.18); --shadow-hard: 6px 6px 0 rgba(31,43,58,.12);
  --font-display: "Caveat", "Kalam", cursive;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .08;
}
```
