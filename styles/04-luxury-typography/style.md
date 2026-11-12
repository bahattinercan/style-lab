# 04 · Luxury Typography

> **Bir cümlede:** Seyrek yerleşim + ince serif + geniş harf aralığı; lüks, boşluğun ve yavaşlığın fiyatıdır.

| | |
|---|---|
| **Hissiyat** | seçkin, sakin, pahalı, "az konuşan marka" |
| **En iyi** | premium marka, davet/katalog, otel, mücevher, butik ajans |
| **Kaçın** | yoğun panel, çok özellikli SaaS, fiyat karşılaştırma, çocuk ürünü |
| **Zorluk** | orta (boşluk ve tipografi bakımı) · **Erişilebilirlik** | orta (ince ağırlık riski) |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="luxury-typography"]` |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Lüks, bilgi yoğunluğunun **azaltılmasıyla** üretilir: çok boşluk, az öğe, ince serif (Cormorant), geniş tracking'li küçük büyük-harf etiketler ve tek altın hairline. Her ekran tek bir şey söyler; gerisi boşluktur.

Kazandığı şey: algılanan değer. Feda ettiği şey: bilgi taşıma kapasitesi — bu stil, "çok seçenek" satan ürünlerde tıkanır.

### Ne değildir
- **Editorial değildir.** Editorial dolu ve ritmik; lüks **seyrek** ve yavaş.
- **Art Deco değildir.** Art Deco geometrik süs ve altın çerçeve kullanır; burada süs yok, sadece oran var.
- **Minimalism değildir.** Minimalizm işlevsel boşluk; lüks **törensel** boşluk (hero'da tek satır, 120px üst boşluk).
- **"Serif + altın" değildir.** Tracking, punto hiyerarşisi ve nefes alanı yoksa sadece "pahalı taklidi" olur.

### Nereden gelir
Moda evi katalogları, Didot/Bodoni geleneği ve İsviçre minimalizminin lüks yorumu. Dijitalde premium D2C markalar ve otel zincirleriyle standartlaştı.

### 3 saniyede tanıma testi
1. Ekranda **3'ten az** öğe var mı (hero'da başlık, tek satır, tek bağlantı)?
2. Etiketler küçük ve **geniş tracking'li büyük harf** mi (10px, `.2em+`)?
3. Display **ince** (300–400) ve büyük puntolu mu?
4. Radius ≈ 0, gölge yok, tek altın hairline var mı?
5. Görsel tam genişlik veya tamamen boş bir alan mı?

## Zorunlu kurallar

1. **Seyrek yerleşim.** Ekran başına en fazla 1 başlık + 1 paragraf + 1 CTA; toplam 3 etkileşim.
2. **İnce serif display** (Cormorant, 300–400), 52–72px; asla 700.
3. **Geniş tracking etiket:** 10px, büyük harf, `0.2–0.34em`.
4. **Radius 0–2px, gölge yok.** Ayrım 1px altın/`--line` hairline ile.
5. **Boşluk baskın:** bölüm dikey boşluk 96–128px; içerik genişliği ≤ 1040px.
6. **Tek aksan (altın):** yalnızca hairline, küçük etiket ve tek bağlantıda.

## Yasaklar

- Gölge, gradient, cam, doku (grain ≤ .03, görünmez).
- Kalın display (600+), 14px üstü gövde metni (lüks gövde küçük ve seyrek).
- 12px altı gövde metni; 1.7 altı satır aralığı.
- Çoklu CTA, badge/chip enflasyonu, ikon kalabalığı.
- Dolgun buton (dolu accent zemin geniş alanda) — ince çerçeve tercih.
- Ortalanmış olmayan hero: bu stilde **merkezleme serbesttir** (tek istisna).

## Görsel imza
- **Merkezlenmiş hero** veya tek kolon geniş boşluklu yerleşim; 120px üst boşluk.
- **Tracking'li mikro etiket:** `MAISON · 1924`, 10px, `0.3em`.
- **Altın hairline:** başlık altında 1px, 40–80px uzunlukta, `--accent`.
- **İnce serif display:** Cormorant 300, 56–72px, satır aralığı 1.1.
- **Görsel:** tam genişlik veya 4/5 dikey oranlı tek kare; çerçevesiz.
- **Doku:** grain .03 (kâğıt), görünür gürültü yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f6f1e7` | sayfa (krem) | kart zemini |
| `--bg-2` | `#efe7d8` | ikinci zemin, footer | buton |
| `--surface` | `#fffdf8` | kart | geniş zemin |
| `--surface-2` | `#f3ecdf` | hover | vurgu |
| `--ink` | `#1a1815` | metin | — |
| `--ink-soft` | `#5c554b` | paragraf | başlık |
| `--ink-faint` | `#9a9184` | mikro etiket | gövde metni |
| `--accent` | `#c6a664` | hairline, mikro etiket, bağlantı | geniş zemin, buton dolgusu |
| `--accent-ink` | `#1a1815` | accent üstü metin | — |
| `--line` | `rgba(26,24,21,.16)` | hairline | metin |

- Ölçülen kontrast: `ink/bg` **15.74:1** · `ink-soft/bg` **6.53:1** · `ink-faint/bg` **2.76:1** · `accent-ink/accent` **7.63:1**.
- `--accent` (altın) **metin rengi olarak kullanılmaz** — küçük etikette dahi `--ink` kullan, altını sadece çizgi/ikon için ayır.
- Yasak: ikinci metallik ton, saf siyah (#000) — `--ink` sıcak siyah.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 64px (mobil 38px) | 300 | 1.1 | `0.01em` |
| H2 | Cormorant | 34px | 400 | 1.2 | `0.01em` |
| H3 | Cormorant | 20px | 600 | 1.3 | `0.02em` |
| Gövde | Jost | 14px | 400 | 1.75 | `0.02em` |
| Mikro etiket | Jost / IBM Plex Mono | 10px | 500 | 1.2 | `0.3em`, uppercase |
| Buton | Jost | 10px | 600 | 1 | `0.18em`, uppercase |

- Ölçek **2.0×+**: 14 → 34 → 64. Gövde küçük, display büyük — lüks oran budur.
- Gövde satır uzunluğu 46–54ch (dar), çünkü punto küçük ve tracking geniş.
- 300 ağırlık yalnızca ≥ 32px'te; küçük puntoda okunmaz → H3 ve altı 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik 6–8, merkezli) |
| Gutter | 32px |
| Container | 1040px (metin 560px) |
| Boşluk ölçeği | 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 |
| Breakpoint | 640 / 900 / 1040 px |
| Bölüm dikey | 112px (mobil 64px) |

- Hero üst boşluğu ≥ 96px; başlık ile paragraf arası 24px; paragraf ile CTA arası 32px.
- Ekran başına en fazla **2 bölüm**; üçüncü bölüm ekleme ihtiyacı varsa ikinciyi böl.
- Görsel tam genişlik kullanıldığında 56px iç boşluk bırakılır.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Kart | `--surface` + 1px `--line` | yok | ürün kartı |
| Yüzen | `--surface` + 1px | yok | modal (backdrop %45) |

- Derinlik yok; lüks "düz kâğıt" gibi durur, gölge ucuzlatır.
- Radius 0 (buton/input), 2px (kart) — daha fazlası "uygulama" hissi verir.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 28px | 0 | 10/600 uppercase `0.18em` | `transparent` + 1px `--ink` kenar, metin `--ink` | hover: `--ink` zemin + `--bg` metin (yavaş 240ms) · focus: 1px `--accent` dış halka, offset 3px · disabled: %35 |
| Buton (accent) | 46px | 0 28px | 0 | 10/600 uppercase | `--accent` zemin + `--accent-ink` | yalnızca tek ana CTA |
| Bağlantı | — | — | — | 11px uppercase `0.14em` | `--ink` + alt 1px `--accent` | hover: alt çizgi 1px `--ink` |
| Input | 46px | 0 16px | 0 | 14/400 | `transparent` + alt 1px `--line` | focus: alt 1px `--accent` · error: alt `--danger` |
| Kart (ürün) | içerik | 0 | 2px | başlık H3 serif | `--surface` + 1px `--line` | hover: görsel %4 büyür (transform, 320ms) |
| Chip / etiket | 20px | 0 8px | 0 | 9.5/500 uppercase `0.24em` | `transparent` + 1px `--accent` kenar | — |
| Nav | 84px | 0 48px | 0 | 10/500 uppercase `0.22em` | alt 1px `--line`, zemin `--bg` | aktif: 1px alt `--accent` |
| Tablo satırı | 56px | 14px 12px | 0 | 13/400, sayı serif 15 | alt 1px `--line` | hover: `--surface-2` |
| Modal | içerik | 40px | 2px | H2 serif + 14 gövde | `--surface` + 1px `--line` | backdrop %45 |
| Toast | 44px | 0 20px | 0 | 11/500 uppercase | `--ink` zemin + `--bg` | 5sn |
| Grafik | — | — | — | eksen 10 mono | `--ink` çizgi + `--accent` tek vurgu noktası | 1 seri |

- Odak halkası ince (1–2px) ve altın; siyah halka lüks dili bozar.
- Dokunma hedefi 44px; görsel olarak küçük etiketler padding ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi, 20px, ince; dolgu yok |
| Fotoğraf | Tek konu, yumuşak ışık, geniş negatif alan; ürün fotoğrafı 4/5 dikey |
| İllüstrasyon | Yok; gerekiyorsa ince gravür/çizgi |
| Doku | grain .03 |
| Logo | Serif wordmark, geniş tracking; 20–24px yükseklik |
| Video | Sessiz, 6–8sn döngü, metin içermez |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Merkezli 64px serif başlık, altında 46ch tek paragraf, tek çerçeveli CTA, 40px altın hairline | `shots/01-landing.png` |
| Dashboard | düşük | Lüks geri çekilir: sans gövde 13px, hairline ayırıcı, serif sadece sayfa başlığında | `shots/02-dashboard.png` |
| Form | düşük | 440px tek sütun, alt çizgili input, tek buton; alan sayısı minimum | — |
| Liste / tablo | düşük | 56px satır, serif sayılar, hairline; zebra yok | — |
| Boş durum | orta | Tek cümle + tek bağlantı, 120px üst boşluk | — |
| Onboarding | yüksek | Sayfa başına tek görsel + tek cümle; ilerleme hairline | — |
| Pricing | yüksek | 2–3 kolon, orta kolon 1px altın kenar; fiyat serif 44px | — |
| Giriş / ödeme | düşük | 400px merkezli kart, 2 alan, tek CTA; güven metni 11px | — |
| Modal | orta | 2px radius, 1px kenar, 40px padding | — |
| Bildirim / toast | düşük | Koyu zemin + 11px uppercase metin | — |
| Hata | düşük | 13px sakin dil + alt hairline `--danger` | — |
| Profil / ayar | orta | 6 kolon içerik, 56px satırlar, serif bölüm başlığı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 180ms | `ease-out` | `background-color`, `color` |
| Giriş | 800ms | `cubic-bezier(.2,.7,.2,1)` | `opacity` + 24px `translateY`, stagger 90ms |
| Scroll (`top 80%`) | 1000ms | aynı eğri | `opacity` + 24px `translateY`, `once: true` |
| Hover | 320ms | aynı eğri | `transform: scale(1.015)` |
| Ödül | 400ms | `ease-in-out` | hairline genişliği 0→40px |

- Her şey **yavaş** ve az: 300ms+ geçişler lüksün ritmi.
- `prefers-reduced-motion`: 0.01ms; görsel ölçek animasyonu kapanır.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f6f1e7` | `#12100e` |
| `--bg-2` | `#efe7d8` | `#1a1714` |
| `--surface` | `#fffdf8` | `#171512` |
| `--ink` | `#1a1815` | `#efe8db` |
| `--ink-soft` | `#5c554b` | `#b3aa9c` |
| `--line` | `rgba(26,24,21,.16)` | `rgba(239,232,219,.18)` |
| `--accent` | `#c6a664` | `#d8bb7d` |
| `--accent-ink` | `#1a1815` | `#12100e` |

- Koyu modda altın biraz açılır (kontrast için), grain azaltılır.

## Erişilebilirlik

- Gövde 15.74:1, açıklama 6.53:1 → güvenli. `--ink-faint` 2.76:1 → **asla gövde metni**.
- Altını metin olarak kullanma: `#c6a664` krem üzerinde ~2.0:1 — sadece çizgi/ikon.
- İnce ağırlık (300) 32px altında okunmaz; küçük puntoda 400+ kullan.
- 14px gövde + geniş tracking okuma hızını düşürür: paragrafları 3 satırla sınırla.
- Odak halkası 2px altın, offset 3px; krem zeminde 3:1 üstü.
- Dokunma hedefi 44px; ince bağlantılarda satır yüksekliği ile.

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
| Pahalı değil, boş görünüyor | Boşluk var ama ölçek yok | Display 64px + mikro etiket 10px zıplaması |
| Ucuz görünüyor | Gölge/radius/dolu buton | Gölgeyi sil, radius 0, ince çerçeve |
| Okunmuyor | 300 ağırlık + 12px | 400 ağırlık, 14px, 1.75 satır |
| Altın "sarıya" kaçtı | Doygun altın (#FFD700) | `#c6a664` gibi soluk metalik ton |
| Bilgi eksik hissi | 3+ CTA, çok bölüm | Tek CTA, ekran başına 2 bölüm |
| Mobilde sıkışma | 112px bölüm boşluğu korunmuş | Mobilde 64px'e indir |

## Komşu stiller

- **Uyumlu:** `03 editorial-design` (aynı serif dili, daha dolu varyant), `26 art-deco` (altın + geometri, garnitür), `01 minimalism` (boşluk disiplini).
- **Yasak:** `13 neo-brutalism` (kalın kontur), `18 dopamine-ui` (doygun renk), `24 pixel-art` (çözünürlük/ton çelişkisi).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.aesop.com | Seyrek yerleşim + ince serif + geniş boşluk |
| https://www.cos.com | Ürün kartı ve tipografi oranı |
| https://fonts.google.com/specimen/Cormorant+Garamond | İnce ağırlık kullanımı |

## AI brief

```
Stil: Luxury Typography (styles/04-luxury-typography/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="luxury-typography"]; hard-coded renk/ölçü YASAK.
Tipografi: Cormorant display 300–400 (52–72px, 1.1, 0.01em) + Jost gövde 14/1.75; mikro etiket 10px uppercase 0.3em.
Yerleşim: ekran başına 1 başlık + 1 paragraf + 1 CTA; hero üst boşluk ≥ 96px; içerik ≤ 1040px.
Yüzey: radius 0–2px, gölge YOK; ayrım 1px --line veya --accent hairline.
Altın (#c6a664): yalnızca hairline/ikon/mikro etiket çerçevesi — metin rengi olarak kullanma.
Hareket: 300–400ms ease-out, sadece opacity/transform/renk.
Yasak: gölge, gradient, kalın display, dolu accent buton, çoklu CTA, 12px altı metin, 3+ bölüm.
Çıktı: kod + tek paragraf not (boşluk oranını ve tipografik zıplamayı nasıl kurdun).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda ≤ 3 etkileşim, ≤ 2 bölüm.
- [ ] Display ince (300–400) ve ≥ 52px.
- [ ] Mikro etiketler 10px, `0.2em+` tracking, uppercase.
- [ ] Gölge yok, radius ≤ 2px.
- [ ] Altın metin olarak kullanılmadı.
- [ ] Gövde ≥ 14px, satır aralığı ≥ 1.7.

## Token

```css
[data-style="luxury-typography"] {
  --bg: #f6f1e7; --bg-2: #efe7d8;
  --surface: #fffdf8; --surface-2: #f3ecdf;
  --ink: #1a1815; --ink-soft: #5c554b; --ink-faint: #9a9184;
  --accent: #c6a664; --accent-ink: #1a1815;
  --line: rgba(26,24,21,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Cormorant Garamond", "Didot", Georgia, serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: .03;
}
```
