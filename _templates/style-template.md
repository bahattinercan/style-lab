# 35 · Stil Adı

> **Bir cümlede:** Bu stilin özü — tek cümle, sıfatsız, ölçülebilir bir iddia.

| | |
|---|---|
| **Hissiyat** | 3–4 sıfat |
| **En iyi** | 2–4 ürün/ekran türü |
| **Kaçın** | nerede kullanılmamalı (somut sektör/ekran) |
| **Zorluk** | düşük/orta/yüksek · **Erişilebilirlik** | iyi/orta/yüksek risk |
| **Aile** | Sade (01–07) · **Token** | `kit/tokens.css` → `[data-style="slug"]` |
| **Kompozisyon** | `hero` · `nav` · `density` (arketip gerekçesi: `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/04-components.png` |

## Öz

### Nedir
2–3 paragraf. Stilin kurucu kararları: neyi feda eder, neyi kazanır. "Nasıl hissettirir" değil, "hangi problemi hangi araçla çözer".

### Ne değildir
3–5 madde. En sık karıştırıldığı komşu stiller ve aradaki **ölçülebilir** fark (radius, gölge, kontrast, tipografi).

### Nereden gelir
1 paragraf tarihsel/kültürel köken + bugün neden tekrar kullanılıyor. Tarzın "klişe" sayılmaması için hangi detay korunmalı.

### 3 saniyede tanıma testi
Karıştırıldığında bakılacak 5 işaret — her biri ekranda görünür bir ayrıntı:
1. …
2. …
3. …
4. …
5. …

## Görsel imza
4–7 madde, her biri **ölçülebilir** (değer + nasıl uygulanacağı). "Sade görünür" yasak; "1px hairline, %10 opaklık, sadece bölüm ayırıcı" doğru.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | | | |
| `--surface` | | | |
| `--ink` | | | |
| `--accent` | | | |
| `--line` | | | |

- Ölçülen kontrast: `ink / bg` = x.x:1 · `ink-soft / bg` = x.x:1 · `accent-ink / accent` = x.x:1.
- Tek vurgu kuralı / çok renk kuralı: hangisi geçerli, kaç ton, hangi amaçla.
- Yasak kombinasyon: …

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | | | | | |
| H2 | | | | | |
| Gövde | | | | | |
| Etiket / mono | | | | | |

- Ölçek oranı: 1.25 / 1.5 / 1.7 — hangi basamaklar gerçekten kullanılıyor (en fazla 6).
- Ölçü önerisi: `h1 { font-size: clamp(...) }`.
- Gövde metni maksimum satır uzunluğu: xx ch.
- Ağırlık kuralı: hangi ağırlıklar var, hangisi yasak (ör. 300 kullanılmaz).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | |
| Gutter | |
| Container genişliği | |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | |

- Asimetri kuralı: ekran başına kaç bölüm simetriden çıkar.
- Bölüm ritmi: art arda aynı hizada kaç blok olabilir (en fazla …).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | |
| Kart | `--surface` | | |
| Yüzen katman | `--surface` + `--shadow` | | |

- Kenarlık formülü: …
- Derinlik nereden gelir: ışık / ofset / doku / hiçbiri.
- Radius: `--radius` … `--radius-lg` … hangi bileşende hangisi.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | | | | | | hover / active / focus / disabled / loading |
| Buton (ikincil) | | | | | | |
| Input | | | | | | default / focus / filled / error / disabled |
| Kart | | | | | | |
| Chip / badge | | | | | | |
| Nav | | | | | | aktif / pasif |
| Tablo satırı | | | | | | seçili / hover |
| Modal / sheet | | | | | | |
| Toast | | | | | | |
| Grafik paleti | | | | | | |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` (istisna varsa yaz).
- Dokunma hedefi: en az 44×44px — hangi bileşende görsel olarak küçük ama padding'le büyütülüyor.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | çizgi kalınlığı, köşe, boyut ızgarası |
| Fotoğraf | hangi tür, hangi ton, ne kadar alan |
| İllüstrasyon | var / yok, neden |
| Doku | grain %, desen, gölge |
| Logo alanı | ne kadar boşluk, hangi varyant |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | | `shots/01-landing.png` |
| Dashboard | düşük | | `shots/02-dashboard.png` |
| Form | düşük | | `shots/05-components-form.png` |
| Liste / tablo | düşük | | `shots/11-page-list.png` |
| Boş durum | orta | | `shots/12-page-states.png` |
| Onboarding | yüksek | | `shots/15-page-onboarding.png` |
| Pricing | orta | | `shots/09-page-pricing.png` |
| Giriş / ödeme | çok düşük | | `shots/10-page-auth.png` · `shots/14-page-checkout.png` |
| Modal | orta | | `shots/06-components-overlay.png` |
| Bildirim / toast | orta | | `shots/06-components-overlay.png` |
| Hata | düşük | | `shots/12-page-states.png` |
| Profil / ayar | orta | | `shots/13-page-settings.png` |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | | | |
| Geçiş / sayfa | | | |
| Ödül / vurgu | | | |

- `prefers-reduced-motion`: tüm süreler 0.01ms, hareketli arka plan durur.
- Bu stile yasak hareket: …

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | | |
| `--surface` | | |
| `--ink` | | |
| `--accent` | | |

- Koyu modda değişen başka ne var (gölge → kenarlık, blur azaltma, doygunluk).
- `filter: invert()` yasak; palet elle yazılır.

## Erişilebilirlik

- Ölçülen riskler: en düşük kontrastlı çift (değer) ve düzeltmesi.
- Bu stilde `--ink-faint` sadece dekoratif; etkileşimli metin değil.
- Hareket/parlama hassasiyeti: …
- Cam/şeffaf yüzeylerde `@supports` opak fallback.
- Odak görünürlüğü: hangi yüzeyde halka zayıf kalıyor, çözümü.

## Örnek görseller

| Görsel | Dosya | Neye bak | AI bunu nasıl kullanır |
|---|---|---|---|
| Landing | `shots/01-landing.png` | | |
| Dashboard | `shots/02-dashboard.png` | | |
| Mobil | `shots/03-mobile.png` | | |
| Bileşenler | `shots/04-components.png` | | |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| | | |

## Komşu stiller

- **Uyumlu:** `slug` — neden (garnitür olarak nereye konur).
- **Yasak:** `slug` — neden (hangi fizik/ızgara çelişiyor).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://… | |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: <Ad> (styles/NN-slug/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="slug"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display başlıkta (tracking --tracking), --font-body gövdede, --font-mono etiketlerde.
Yüzey: 3 seviye (--bg / --surface / --surface + --shadow); radius --radius ve --radius-lg.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; durum stilleri dahil.
Hareket: "Hareket" tablosu; prefers-reduced-motion desteği zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor.
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px genişlikte taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.
