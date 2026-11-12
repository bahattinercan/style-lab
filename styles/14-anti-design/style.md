# 14 · Anti-Design

> **Bir cümlede:** Kuralları bilerek çiğneyen düzen: bozuk ızgara, karışık ölçek, kasıtlı dönüklük ve "hatalı" görünen tipografi.

| | |
|---|---|
| **Hissiyat** | deneysel, asi, enerjik, "poster" |
| **En iyi** | sanat/etkinlik, portfolyo, müzik/kulüp, moda kampanyası, indie lansman |
| **Kaçın** | ödeme/giriş, resmi kurum, sağlık, uzun okuma, erişilebilirlik kritik ürün |
| **Zorluk** | yüksek (kaosu ölçmek zor) · **Erişilebilirlik** | **yüksek risk** |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="anti-design"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Anti-design, modern arayüz kurallarının (hizalama, tutarlı ölçek, sakin palet) **bilinçli ihlali**: döndürülmüş paneller, üst üste binen tipografi, uyumsuz punto atlamaları, ofset sert gölgeler ve "yanlış" renk kombinasyonları. Ama kaos **ölçülür**: her ekranda 2–3 ihlal, gerisi okunur.

Kazandığı şey: hatırlanma ve enerji. Feda ettiği şey: güven ve okunabilirlik payı.

### Ne değildir
- **Neo-brutalism değildir.** Neo-brutalism düzenlidir, sadece dili serttir; anti-design **ızgarayı** bozar.
- **Maximalism değildir.** Maximalism doluluk; anti-design hizasızlık ve ölçek çelişkisi.
- **"Kötü tasarım" değildir.** İhlal kasıtlı ve tekrarlanabilir olmalı; rastgelelik değil.
- **Erişilebilirliği feda etmez.** Kontrast ve hedef boyutu korunur; sadece **kompozisyon** bozulur.

### Nereden gelir
2010'ların "perfect UI" estetiğine ve kurumsal tekdüzeliğe tepki; sanat okulları ve bağımsız yayıncılık dili. Dijitalde etkinlik sayfaları, portfolyolar ve indie lansmanlarda kullanılıyor.

### 3 saniyede tanıma testi
1. En az bir öğe **döndürülmüş** mü (1–3°)?
2. Izgara bilinçli **kaymış** mı (bloklar farklı hizalarda)?
3. Punto atlamaları abartılı mı (100px başlık + 11px metin)?
4. Sert ofset gölge var mı (blur yok)?
5. Kaos **sayılı** mı — yoksa rastgele mi? (Doğru: 2–3 ihlal.)

## Zorunlu kurallar

1. **İhlal bütçesi:** ekran başına en fazla 3 ihlal (dönme, ölçek çelişkisi, üst üste binme). Fazlası gürültü.
2. **Okunurluk tabanı:** gövde kontrastı ≥ 4.5:1, gövde ≥ 15px, dokunma hedefi ≥ 44px.
3. **Sert gölge** (`8px 8px 0`) blur'suz; tüm gölgeler aynı yönde.
4. **Display Anton**, düz büyük harf; gövde Space Grotesk.
5. **Radius 0** (buton/input), 2px istisna.
6. **Form/ödeme ekranlarında ihlal 0:** bu ekranlar `plain` gibi davranır.

## Yasaklar

- Rastgele rotasyon (ekran başına 3'ten fazla, 3°'den fazla).
- Metin bloklarını döndürmek (okunurluk).
- Düşük kontrastlı "sanatsal" metin (4.5:1 altı).
- Gölge + blur + cam birlikte (farklı fizikler).
- Her öğede farklı radius/gölge tonu.
- Ihlali ödeme/giriş ekranına taşımak.

## Görsel imza
- **Rotasyon:** panel `-1.5°`, ikincil kart `+0.6°`; metin 0°.
- **Ofset gölge:** `8px 8px 0 #1b1b1b` (hero), `4px 4px 0` (küçük).
- **Ölçek çelişkisi:** H1 104px Anton + gövde 15px; ara basamak yok.
- **Asit yeşili blok:** `--bg-2` (#d6ff3f) ikinci zemin olarak 1 bölümde.
- **Grain .05:** baskı/rozet hissi.
- **Kenarlık:** 3px ink (nav, buton, kart).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f2e9da` | sayfa (kâğıt) | kart |
| `--bg-2` | `#d6ff3f` | asit blok, ikinci bölüm zemini | metin zemini (uzun) |
| `--surface` | `#ffffff` | kart | sayfa |
| `--surface-2` | `#ff3b6b` | vurgu bloğu (accent ile aynı aile) | geniş zemin |
| `--ink` | `#1b1b1b` | metin + kenarlık | — |
| `--ink-soft` | `#4a4a4a` | açıklama | başlık |
| `--ink-faint` | `#7b7b7b` | dekoratif (3.52:1) | gövde metni |
| `--accent` | `#ff3b6b` | CTA, vurgu | metin rengi açık zeminde |
| `--accent-ink` | `#1b1b1b` | accent üstü metin | — |
| `--line` | `#1b1b1b` | 3px kenarlık | metin |

- Ölçülen kontrast: `ink/bg` **14.31:1** · `ink-soft/bg` **7.36:1** · `ink-faint/bg` **3.52:1** · `accent-ink/accent` **4.99:1**.
- Asit yeşili üstünde **siyah** metin (kontrast yüksek); beyaz metin yasak.
- Yasak: pastel geçişler, gradient, ikinci doygun renk (yeşil + pembe yeter).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Anton | 104px (mobil 48px) | 400 | 0.86 | `-0.03em`, uppercase |
| H2 | Anton | 56px | 400 | 0.9 | `-0.02em` |
| H3 | Space Grotesk | 22px | 700 | 1.15 | `-0.01em` |
| Gövde | Space Grotesk | 15px | 400 | 1.55 | `0` |
| Etiket | JetBrains Mono | 11px | 500 | 1.15 | `0.18em`, uppercase |
| Buton | Space Grotesk | 15px | 700 | 1 | `0.04em`, uppercase |

- Anton tek ağırlık; sahte bold yasak. Satır aralığı 0.86–0.9 (satırlar neredeyse birbirine değer).
- Gövde 15px'ten küçülmez; ölçek çelişkisi display'de kurulur, gövdede değil.
- Uzun metin 62ch; asit blok üstünde metin 1 paragrafı geçmez.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 — **bilinçli kaydırılmış** (bazı bloklar 1 kolon kayar) |
| Gutter | 20px |
| Container | 1240px |
| Boşluk ölçeği | 8 · 16 · 24 · 40 · 64 · 96 |
| Breakpoint | 640 / 900 / 1240 px |
| Bölüm dikey | 96px (mobil 48px) |

- Kayma kuralı: bir bölümde en fazla 2 blok kolon hattından çıkar (üst üste binme dahil).
- Üst üste binme en fazla 24px; metin asla bir başka öğenin altında kalmaz.
- Bölüm ritmi: 1 tam genişlik + 1 daraltılmış + 1 asit blok.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain | yok | sayfa |
| Panel | `--surface` + 3px ink | `--shadow-hard` (8px ofset) | hero, kart |
| Yüzen | `--surface` + 3px ink | 12px ofset | modal |

- Derinlik ofsetten gelir; blur yok.
- Radius 0; istisna olarak chip 2px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 52px | 0 26px | 0 | 15/700 uppercase | `--accent` + 3px ink + `4px 4px 0` | hover: `translate(4px,4px)` + gölge 0 · focus: 3px ink dış halka, offset 3px · disabled: %40 |
| Buton (asit) | 52px | 0 24px | 0 | 15/700 | `--bg-2` + 3px ink | hover: aynı basılma |
| Input | 52px | 0 16px | 0 | 16/400 | `--surface` + 3px ink | focus: 3px `--accent` dış halka · error: `--danger` 3px |
| Kart | içerik | 24px | 0 | H3 + 15 | `--surface` + 3px ink + `8px 8px 0` | hover: `translate(-2px,-2px)` |
| Chip | 28px | 0 10px | 2px | 11/500 mono | `--bg-2` + 2px ink | aktif: accent |
| Nav | 76px | 0 32px | 0 | 14/700 uppercase | `--bg` + 3px alt | aktif: 6px alt accent |
| Tablo satırı | 56px | 12px 16px | 0 | 15/400 | 2px ink alt | hover: `--bg-2` |
| Modal | içerik | 32px | 0 | H2 Anton + 15 | `--surface` + 3px ink + 12px ofset | backdrop: `rgba(27,27,27,.4)` |
| Toast | 52px | 0 18px | 0 | 13/700 | `--ink` + 3px `--bg` | 4sn |
| Grafik | — | — | 0 | eksen 11 mono | `--accent` + `--bg-2` + 2px ink çerçeve | 2 seri |

- Odak halkası 3px ink (asit yeşili üstünde 14:1).
- Dokunma hedefi 52px (abartılı ölçek küçük hedefleri okunmaz yapar).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 3px çizgi, 24px, köşe yok |
| Fotoğraf | Yüksek kontrast, sert kırpma, isteğe bağlı döndürme (≤2°) |
| İllüstrasyon | Kopya/kolaj, kes-yapıştır hissi |
| Doku | grain .05, fotokopi lekesi serbest |
| Logo | Dev, gerekirse kesilmiş (crop) |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | çok yüksek | 104px Anton başlık, döndürülmüş panel, asit blok, 2 buton; 3 ihlal sınırı | `shots/01-landing.png` |
| Dashboard | düşük | İhlal 0–1: sadece başlık Anton; tablo/grafik düz | `shots/02-dashboard.png` |
| Form | düşük | Rotasyon yok, 3px kenarlık kalır | — |
| Liste / tablo | düşük | Düz ızgara, 2px ayırıcı | — |
| Boş durum | yüksek | Dev tipografi + tek satır + tek buton | — |
| Onboarding | yüksek | Adım numarası 140px, tek fikir/sayfa | — |
| Pricing | yüksek | 3 döndürülmüş kart (≤1.5°), orta kart asit zemin | — |
| Giriş / ödeme | **çok düşük** | İhlal 0; düz form, 3px kenarlık yeter | — |
| Modal | orta | 12px ofset gölge, 32px padding | — |
| Bildirim / toast | orta | Koyu zemin, 3px kenar | — |
| Hata | orta | Dev "!" + 15px açıklama | — |
| Profil / ayar | düşük | Düz liste, Anton yalnız başlıkta | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `ease-out` | `translate(4px,4px)` |
| Giriş | 340ms | `steps(3, end)` | `opacity` + 16px `translateY`, stagger 50ms |
| Scroll (`top 86%`) | 400ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 110ms | aynı eğri | `transform: scale(1.03)` |
| Ödül | 240ms | `steps(3)` | rotasyon 0→hedef (basamaklı) |

- Hareket keskin; `steps()` kullanımı bu stilin imzası olabilir.
- `prefers-reduced-motion`: tüm hareket 0.01ms.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f2e9da` | `#111111` |
| `--bg-2` | `#d6ff3f` | `#c6ef2e` |
| `--surface` | `#ffffff` | `#1c1c1c` |
| `--ink` | `#1b1b1b` | `#f5f1e6` |
| `--accent` | `#ff3b6b` | `#ff3b6b` |
| `--accent-ink` | `#1b1b1b` | `#111111` |
| `--line` | `#1b1b1b` | `#f5f1e6` |

- Koyu modda kenarlık açık renge döner; ofset gölge de açık renk (opaklık .18).

## Erişilebilirlik

- Gövde 14.31:1, açıklama 7.36:1 → güvenli. `--ink-faint` 3.52:1 → yalnızca dekoratif.
- Accent üstü siyah 4.99:1; **beyaz metin yasak** (2.9:1).
- Rotasyon okunurlukla çatışır: metin blokları dönmez, hedef boyutu 52px'e çıkar.
- Anton 400 tek ağırlık; küçük puntoda (18px altı) Anton kullanma → H3'ten sonra Space Grotesk.
- Odak halkası 3px ink, offset 3px; asit zemin üstünde de görünür.
- `prefers-reduced-motion` + `prefers-contrast: more` desteklenir.

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
| Okunamıyor | Her öğe dönük, kontrast düşük | İhlal ≤3, metin düz, kontrast ≥ 4.5:1 |
| "Kötü tasarım" gibi | Rastgele rotasyon/ölçek | İhlali kurala bağla, tekrar eden 2 hamle kullan |
| Güven kaybı | İhlal ödeme/giriş ekranında | O ekranlarda `plain` davranışı |
| Dağınık | 4+ farklı gölge/kenarlık | Tek ofset + tek kenarlık kalınlığı |
| Mobilde taşma | 104px başlık sabit | `clamp()` ile 48px |

## Komşu stiller

- **Uyumlu:** `13 neo-brutalism` (sert dil), `15 acid-graphics` (distortion), `16 memphis` (geometri + kontur).
- **Yasak:** `01 minimalism` (sükûnet), `02 swiss-design` (ızgara dini), `04 luxury-typography` (seyrek lüks).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://brutalistwebsites.com | Ihlalin dozu ve tekrarı |
| https://www.are.na | Kolaj/kopya estetiği panoları |
| https://fonts.google.com/specimen/Anton | Display karakteri |

## AI brief

```
Stil: Anti-Design (styles/14-anti-design/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="anti-design"]; hard-coded renk/ölçü YASAK.
İhlal bütçesi: ekran başına en fazla 3 ihlal (rotasyon ≤1.5°, üst üste binme ≤24px, ölçek çelişkisi).
Okunurluk tabanı: metin blokları 0°, gövde 15px, kontrast ≥ 4.5:1, hedef 52px.
Tipografi: Anton display (104/0.86 uppercase) + Space Grotesk gövde 15/1.55; etiket mono 11 uppercase.
Yüzey: radius 0, 3px ink kenarlık, blur'suz ofset gölge (8px hero / 4px küçük).
Renk: kâğıt #f2e9da + asit #d6ff3f + pembe #ff3b6b; asit üstünde SİYAH metin.
Hareket: 90–240ms, steps(3) serbest; reduced-motion'da 0.01ms.
Yasak: metni döndürmek, 3+ ihlal, düşük kontrast, blur/cam, ödeme ekranında ihlal.
Çıktı: kod + tek paragraf not (hangi 3 ihlali seçtin, okunurluğu nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] İhlal ≤ 3; metin blokları düz.
- [ ] Kontrast ≥ 4.5:1; asit üstünde siyah metin.
- [ ] Tüm kenarlıklar 3px, tüm gölgeler blur'suz ofset.
- [ ] Radius 0 (chip 2px istisna).
- [ ] Ödeme/giriş ekranında ihlal yok.
- [ ] Mobilde başlık `clamp()` ile küçülüyor.

## Token

```css
[data-style="anti-design"] {
  --bg: #f2e9da; --bg-2: #d6ff3f;
  --surface: #ffffff; --surface-2: #ff3b6b;
  --ink: #1b1b1b; --ink-soft: #4a4a4a; --ink-faint: #7b7b7b;
  --accent: #ff3b6b; --accent-ink: #1b1b1b;
  --line: #1b1b1b;
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: 8px 8px 0 #1b1b1b;
  --font-display: "Anton", "Archivo Black", Impact, sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.03em; --blur: 0px; --grain: .05;
}
```
