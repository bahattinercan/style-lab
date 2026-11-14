# 32 · Conceptual Sketch

> **Bir cümleyle:** Kâğıt üstünde düşünme: el çizimi kutu, kesikli çerçeve, ok ve notlarla süreç görünür.

| | |
|---|---|
| **Hissiyat** | samimi, süreç odaklı, "henüz bitmemiş", şeffaf |
| **En iyi** | prototip/fikir ürünü, ajans süreci, tasarım sistemleri, eğitim |
| **Kaçın** | premium lüks, finans güveni, final ürün vitrini |
| **Zorluk** | orta (dağınıklık) · **Erişilebilirlik** | iyi (yüksek kontrast) |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="conceptual-sketch"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Conceptual sketch, wireframe/sketch dilini son ürün diline taşır: **kesikli çerçeve**, **el yazısı display** (Architects Daughter), **kâğıt çizgileri**, oklar ve açıklama notları. Her öğe "çizilmiş" gibi durur; süreç şeffaflaşır.

Kazandığı şey: samimiyet ve süreç anlatımı. Feda ettiği şey: bitmişlik hissi — bu stil **bilinçli olarak "taslak"** görünür.

### Ne değildir
- **Scrapbook değildir.** Scrapbook polaroid/bant; sketch **çizgi ve wireframe**.
- **Wabi-Sabi değildir.** Wabi-sabi ahşap/kâğıt doku; sketch **teknik çizim**.
- **"El yazısı font" değildir.** Kesikli kutu + çizgi + ok olmadan sadece font değişir.
- **Bitmemiş ürün değildir.** Kasıtlı eskiz, net hiyerarşiyle.

### Nereden gelir
Ajans süreç sunumları, whiteboard kültürü, design-system dokümantasyonu.

### 3 saniyede tanıma testi
1. Çerçeveler **kesikli** mi (dashed)?
2. Display el yazısı mı (Architects Daughter)?
3. Kâğıt çizgileri / ızgara var mı?
4. Ok, numara veya not etiketi var mı?
5. Blok gölge 2px ofset (blursuz) mi?

## Zorunlu kurallar

1. **Kesikli çerçeve:** `1.5px dashed` panel; buton/input tam çizgi.
2. **El yazısı yalnız başlık/notta**; gövde Inter (okunurluk).
3. **Kâğıt çizgileri:** 32px aralık, %5 opaklık; metnin arkasında.
4. **Not/ok bütçesi:** ekran başına ≤ 3 açıklama (ok, numara, etiket).
5. **Blok gölge:** `2px 2px 0 rgba(42,42,42,.18)`; blur yok.
6. **Kontrast:** gövde `--ink` (13.86:1); kesikli çizgi dekoratif.

## Yasaklar

- Gradient, blur, cam, yumuşak gölge.
- El yazısı gövde metninde (uzun paragraf).
- 4+ not/ok (gürültü).
- Doygun renk (tek mavi accent yeter).
- Kesikli çizgiyi ölçü/kenarlık olarak kullanmak (dekoratif).
- Yoğun tabloda kesikli çerçeve.

## Görsel imza
- **Kesikli çerçeve:** `1.5px dashed rgba(42,42,42,.35)`.
- **El yazısı başlık:** Architects Daughter 400, 40px.
- **Kâğıt ızgara:** 32px çizgiler (yatay), %5.
- **Not etiketi:** numara + ok (`→`, `↳`), mono 11px.
- **Blok gölge:** 2px ofset.
- **Grain .02** (hafif kâğıt).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#fcfbf7` | kâğıt |
| `--surface` | `#ffffff` | kart |
| `--surface-2` | `#f7f6f0` | ikincil |
| `--ink` | `#2a2a2a` | metin (13.86:1), çizgi |
| `--ink-soft` | `#5c5c5c` | açıklama (6.46:1) |
| `--ink-faint` | `#8f8f8f` | dekoratif (3.12:1) |
| `--accent` | `#2b5fad` | CTA, vurgu çizgi |
| `--accent-ink` | `#ffffff` | accent üstü (**6.28:1**) |
| `--line` | `#2a2a2a` | çizgi (kesikli/tam) |

- Ölçülen kontrast: `ink/bg` **13.86:1** · `ink-soft/bg` **6.46:1** · `ink-faint/bg` **3.12:1** · `accent-ink/accent` **6.28:1**.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Architects Daughter | 40px (mobil 26px) | 400 | 1.2 | `0` |
| H2 | Architects Daughter | 24px | 400 | 1.25 | `0` |
| Gövde | Inter | 16px | 400 | 1.6 | `0` |
| Etiket | IBM Plex Mono | 11px | 500 | 1.2 | `0.1em`, uppercase |

- El yazısı 20px altına inmez; gövde her zaman Inter.
- Gövde 64ch.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1120px · bölüm 72/48px · breakpoint 640/900/1120.
- Kâğıt ızgarası 32px; kutular bu ızgaraya hizalanır (eskiz hissi).
- Not etiketleri kenar boşluğunda; içeriği kaydırmaz.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Kâğıt | `--bg` + ızgara | yok | sayfa |
| Kutu | `--surface` + kesikli çerçeve | `--shadow-hard` (2px) | kart |
| Yüzen | `--surface` + tam çizgi | 4px ofset | modal |

- Derinlik ofset gölgeden; blur yok. Radius 2/6px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 20px | 2px | 14/600 | `--accent` + beyaz | hover: %94 · focus: 2px accent · disabled: %40 |
| Buton (çizgi) | 44px | 0 18px | 2px | 14/600 | transparent + 1.5px ink | hover: `--surface-2` |
| Input | 44px | 0 12px | 2px | 15/400 | `--surface` + **kesikli** alt çizgi | focus: tam 2px accent |
| Kart | içerik | 20px | 6px | H2 el yazısı + 16 | `--surface` + kesikli çerçeve | hover: çizgi tam olur |
| Chip / not | 24px | 0 8px | 2px | 11/500 mono | `--surface-2` + kesikli | — |
| Nav | 64px | 0 24px | — | 13/600 | `--bg` + alt 1.5px ink | aktif: accent alt çizgi |
| Tablo satırı | 48px | 10px 12px | — | 15/400 | 1px ink %25 alt | hover: `--surface-2` |
| Modal | içerik | 24px | 6px | H2 + 16 | tam çerçeve + 4px ofset | backdrop: `rgba(42,42,42,.25)` |
| Toast | 44px | 0 16px | 2px | 13/500 | `--ink` + `--bg` | 4sn |
| Grafik | — | — | 2px uç | eksen 11 mono | accent çizgi + kesikli referans | 2 seri |

## Görsel dil

İkon: 1.5px çizgi veya el çizimi, 22px. Fotoğraf: eskiz üstüne yapıştırılmış (ince çerçeve). İllüstrasyon: wireframe kutu, ok, numara. Doku: grain .02 + kâğıt çizgisi. Logo: el yazısı.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | El yazısı başlık, kesikli panel, 2 not etiketi | `shots/01-page.png` |
| Dashboard | düşük | Kesikli çerçeve kapanır; düz tablo | `shots/01-page.png` |
| Form | orta | Kesikli input alt çizgisi, tek buton | `shots/01-page.png` |
| Liste/tablo | düşük | Düz satırlar, ince ayırıcı | `shots/01-page.png` |
| Boş durum | yüksek | Boş kesikli kutu + "buraya sürükle" notu | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 çizim + numara | `shots/01-page.png` |
| Pricing | orta | 3 kesikli kart, orta kart tam çizgi | `shots/01-page.png` |
| Giriş/ödeme | düşük | Tam çizgi, sade | `shots/01-page.png` |
| Modal | orta | Tam çerçeve + ofset | `shots/01-page.png` |
| Toast | düşük | Koyu bar | `shots/01-page.png` |
| Hata | orta | Kırmızı kesikli çerçeve + not | `shots/01-page.png` |
| Profil/ayar | düşük | Düz liste | `shots/01-page.png` |

## Erişilebilirlik

- Gövde 13.86:1, açıklama 6.46:1 → güvenli; `--ink-faint` 3.12:1 → dekoratif.
- Accent üstü beyaz 6.28:1 → güvenli.
- Kesikli çerçeve **dekoratif**; odak/kenar bilgisi tam çizgiyle verilir.
- El yazısı yalnız başlık; gövde Inter 16px.
- Dokunma hedefi 44px.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| "Bitmemiş ürün" | Her şey kesikli | Kritik kenarlar tam çizgi |
| Dağınık | 4+ ok/not | Not ≤ 3 |
| Okunmuyor | El yazısı gövdede | Gövde Inter |
| Karakter kaybı | Kâğıt ızgarası yok | 32px ızgara %5 |
| Lüks algısı kaybı | Bu stil lüks için değil | Başka stil seç |

## Komşu stiller

**Uyumlu:** `02 swiss-design` (ızgara), `23 cybercore` (şema), `13 neo-brutalism` (kalın çizgi). **Yasak:** `04 luxury-typography`, `09 liquid-glass`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://fonts.google.com/specimen/Architects+Daughter | El yazısı display |
| https://excalidraw.com | Wireframe dili |
| https://mobbin.com | Süreç/onboarding örnekleri |

## AI brief

```
Stil: Conceptual Sketch (styles/32-conceptual-sketch/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="conceptual-sketch"]; hard-coded renk YASAK.
Çizgi dili: panel/kart 1.5px dashed; buton/input ve kritik kenarlar TAM çizgi.
Tipografi: Architects Daughter başlık/not (≥20px) + Inter gövde 16/1.6; etiket mono 11.
Kâğıt: 32px yatay çizgiler %5 + grain .02; metnin arkasında.
Not bütçesi: ekran başına ≤ 3 (ok, numara, etiket). Blok gölge 2px blur'suz.
Hareket: 100–300ms ease-out; stroke çizilme tek atım.
Yasak: gradient/blur/cam, el yazısı gövde, 4+ not, yoğun tabloda kesikli çerçeve.
Çıktı: kod + tek paragraf not (kesikli/tam çizgi ayrımını nasıl kurdun).
```

**Teslim öncesi öz-denetim**
- [ ] Kesikli çerçeve dekoratif; kritik kenarlar tam.
- [ ] El yazısı yalnız başlık/notta.
- [ ] Kâğıt ızgarası 32px, %5.
- [ ] Not/ok ≤ 3; blok gölge 2px.
- [ ] Accent üstü beyaz 6.28:1.
- [ ] Yoğun ekranda kesikli çerçeve kapalı.

## Token

```css
[data-style="conceptual-sketch"] {
  --bg: #fcfbf7; --bg-2: #f2f0e8;
  --surface: #ffffff; --surface-2: #f7f6f0;
  --ink: #2a2a2a; --ink-soft: #5c5c5c; --ink-faint: #8f8f8f;
  --accent: #2b5fad; --accent-ink: #ffffff;
  --line: #2a2a2a;
  --radius: 2px; --radius-lg: 6px;
  --shadow: none; --shadow-hard: 2px 2px 0 rgba(42,42,42,.18);
  --font-display: "Architects Daughter", "Caveat", cursive;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: .02;
}
```
