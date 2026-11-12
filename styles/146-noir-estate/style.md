# 146 · Noir Estate

> **Bir cümlede:** Gece çekilmiş bir mimari fotoğraf gibi: sıcak siyah zemin, ince altın çizgi, cam gezinme çubuğu ve 0.88s perde girişi — prestij ışıktan değil, ışığın azlığından gelir.

| | |
|---|---|
| **Hissiyat** | sinematik · pahalı · sessiz · davetkâr |
| **En iyi** | Lüks emlak ve rezidans, butik otel rezervasyonu, özel müşteri portföyü (concierge), premium otomotiv vitrini |
| **Kaçın** | Yoğun veri tablosu, klinik/randevu formu, çocuk ürünü, düşük bant genişliğinde video-ağırlıklı sayfa |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (koyu zemin + altın vurgu ölçülmeden yazılırsa düşer) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="noir-estate"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Noir Estate, ekranı bir gece mimari fotoğrafı gibi kurar: zemin neredeyse siyah (#0d0b09, kahve-altı sıcaklıkta), tek aydınlık katman hero fotoğrafı, tek vurgu rengi altın (#d3af62). Arayüzün geri kalanı bu iki kutup arasında çalışır; gri tonlar pantone değil, fotoğrafın kendi gölgelerinden türetilmiş gibi davranır.

Hiyerarşiyi kalınlık değil ölçek ve ışık kurar: 56px Cormorant Garamond başlık, 15px Jost gövde, 10px harf aralıklı mono etiket. Cam gezinme çubuğu (blur 18px, %55 saydam yüzey) sayfayı kapatmaz, fotoğrafın üstünde yüzer; altın yalnız 1px çizgi, ince çerçeve ve birincil eylemde görünür.

Kart yüzeyleri 16px köşeli, 1px var(--line) çerçeveli ve gölgesizdir; derinlik fotoğrafın kendisinden gelir. Bu yüzden sayfa "parlayan kutular" değil, tek bir sahne + üstünde duran etiketler gibi okunur.

Hareket tek bir perde açılışıyla sınırlıdır: 0.88s `blur-in`, 14px yükselme, 60ms kademe. Hero fotoğrafı scroll ile 2 katman parallax yapar (metin 1x, fotoğraf 0.86x); pin yalnız "öne çıkan portföy" bölümünde açıktır (scrub 1.22, +165%). Hover 260ms ve 1.014 ölçek — fark edilir ama sarsmaz.

### Ne değildir

- Glassmorphism (08) değildir: cam yalnız gezinme çubuğunda, tek katman; kartlar mat ve opak.
- Luxury Typography (04) değildir: o stil krem kâğıt üzerinde açık tema ile çalışır, burada taban siyah ve fotoğraf hero.
- Brass Copper (128) değildir: 128 gravür/pirinç plaka dilidir ve gloss yasaktır; burada altın ince çizgi + tek yönlü ışık parlaması serbesttir.
- Art Deco (41) değildir: simetrik süs ve fan motifi yok; asimetri hero fotoğrafının kadrajından gelir.
- Karanlık mod SaaS vitrini (151) değildir: orada vurgu soğuk cyan ve tipografi geniş/teknolojik, burada altın ve serif.

### Nereden gelir

Kök, gece mimari fotoğrafçılığı ve gayrimenkul vitrin kataloglarıdır: fotoğrafı kesmeyen cam gezinme, altın ince çizgi, harf aralıklı mono künye. Bugün tekrar kullanılmasının nedeni, koyu zeminde tek bir sıcak vurgunun (altın) hem lüks hem okunabilirlik üretmesi: altın `--accent-ink` ile birlikte 9:1 üstü kontrast verir, yani süs değil işlev üstlenir.

### 3 saniyede tanıma testi

1. Zemin siyah ama soğuk değil: `--bg` #0d0b09 (R>G>B), mavi-gri koyu değil.
2. Hero tam kanama fotoğraf + üstünde cam gezinme çubuğu (blur 18px, hap radius).
3. Altın yalnız üç yerde: 1px ayırıcı, ince çerçeve, birincil buton dolgusu. Rölyef/gloss yok.
4. Başlık serif ve cümle düzeninde (Cormorant Garamond 300/500); büyük harf başlık yok.
5. Kart köşesi 16px, gölge yok, fotoğraf kartın içinde tam kanama.

## Görsel imza

- Hero: `fullbleed` arketip; fotoğrafın üstünde `linear-gradient(180deg, rgba(8,6,5,.15), rgba(8,6,5,.72))` scrim, metin sol altta 12 kolonun 5'inde.
- Cam gezinme çubuğu: `backdrop-filter: blur(18px) saturate(1.25)`, zemin `color-mix(in srgb, var(--bg) 55%, transparent)`, 1px `--line` alt çizgi, hap radius.
- Altın ince çizgi: bölüm başlıklarının üstünde 32px uzunlukta 1px `--accent`; tam genişlik çizgi yok.
- Künye etiketi: 10px mono, `.22em` aralık, büyük harf, `--accent`; önünde 24px altın çizgi.
- Kart: 16px radius, 1px `--line`, `--surface`, gölge yok; hover'da görsel `scale(1.014)` ve çerçeve `--accent` %45.
- Birincil buton: dikey altın gradient (%100 → %92 açık), `--accent-ink` metin, 6px radius, 48px yükseklik.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0d0b09` | sayfa zemini; hero fotoğrafının dışındaki her alan | ikinci bir zemin tonu olarak (bg-2 vardır) |
| `--bg-2` | `#070605` | gezinme, footer, bölüm ayırıcı bandı | kart yüzeyi olarak |
| `--surface` | `#171310` | kart, panel, arama çubuğu gövdesi | tam kanama bölüm |
| `--surface-2` | `#211b15` | seçili chip, ikincil buton, tablo başlığı | hero metin zemini |
| `--ink` | `#f5f0e7` | başlık ve gövde metni | dekoratif çizgi |
| `--ink-soft` | `#c7bca9` | gövde ikincil metin, kart açıklaması | 12px altı etiket |
| `--ink-faint` | `#8f8574` | künye, birim, zaman damgası | gövde metni |
| `--accent` | `#d3af62` | birincil buton, ince çizgi, aktif sekme, fiyat | geniş yüzey dolgusu, gradient arka plan |
| `--accent-ink` | `#170f04` | altın dolgu üzerindeki metin | altın olmayan zeminde |
| `--line` | `rgba(245,240,231,.14)` | 1px çerçeve ve ayırıcı | 2px ve üstü kalın kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **17.31:1** · `ink-soft/bg` **10.47:1** · `accent-ink/accent` **9.11:1** · `ink-faint/bg` **5.40:1** · accent metin olarak bg'ye **9.43:1** · APCA Lc **98**.
- Tek vurgu kuralı: altın (`--accent`) yalnız eylem, seçim ve fiyat için; ikinci bir sıcak ton kullanılmaz. Gövde metni gri değil, fotoğrafın sıcaklığını taşıyan `--ink-soft` (#c7bca9).
- Yasak kombinasyon: altın üstüne beyaz metin, neon accent, mor-mavi gradient, dörtten fazla gri tonu

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cormorant Garamond | 56px (mobil 32px) | 300 | 1.06 | .01em |
| H2 | Cormorant Garamond | 26px | 300 | 1.18 | .01em |
| H3 | Cormorant Garamond | 19px | 300 | 1.18 | .01em |
| Gövde | Jost | 15px | 400 | 1.6 | 0 |
| Küçük | Jost | 13px | 400 | 1.6 | 0 |
| Etiket / mono | JetBrains Mono | 10px | 400 | 1.4 | .22em |

- Ölçek: 1.25 oranı (10 · 13 · 15 · 19 · 26 · 56); 5 basamak gerçekten kullanılıyor, 13px altı yalnız etiket.
- Ölçü: 62ch; `h1 { font-size: clamp(32px, 4vw, 56px) }`.
- Yasak: Cormorant 300/500 dışı ağırlık (ailesi ince kesim içermez) · Büyük harf gövde metni · 13px altı gövde · Altın üstüne beyaz metin · Geometrik/mono display.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1280px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 80px (mobil 44px) |
| Kart içi | 24px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | hero 5/7 (metin solda dar, fotoğraf sağda geniş); diğer bölümler simetrik, ekran başına 1 asimetrik blok. |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | portföy kartı, panel, arama gövdesi |
| Yüzen katman | `--surface` + `--blur` | `--shadow` | cam gezinme, modal, açılır menü |
| Vurgu katmanı | `--surface-2` | `--shadow-hard` (1px altın halka) | öne çıkan portföy kartı |

Derinlik fotoğraftan gelir: kartlarda gölge yok, yalnız 1px çerçeve. Gölge sadece yüzen katmanda (cam çubuk, modal, menü).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 26px | var(--radius) | 12px/600 Jost, .12em, büyük harf | linear-gradient(180deg, color-mix(in srgb, var(--accent) 92%, var(--ink)), var(--accent)) var(--accent-ink) |
| Buton (ikincil) | 48px | 12px 22px | var(--radius) | 12px/600 Jost, .12em, büyük harf | transparent / var(--ink) |
| Input | 48px | 0 14px | var(--radius) | 15px/400 Jost | var(--bg-2) + 1px solid var(--line) |
| Kart | — | 24px | var(--radius-lg) | 15px Jost | var(--surface) / 1px solid var(--line) |
| Chip / badge | 24px | 0 10px | 999px | 10px/400 JetBrains Mono, .16em, büyük harf | color-mix(in srgb, var(--bg) 62%, transparent) / 1px solid var(--line) |
| Nav | 64px | 0 24px | — | 11px mono .18em | color-mix(in srgb, var(--bg) 55%, transparent) + blur(18px) / 1px solid var(--line) |
| Tablo satırı | 56px | 8px 14px | — | 15px Jost | alt 1px var(--line) |
| Modal / sheet | — | 28px | var(--radius-lg) | Cormorant Garamond 300/500 | 1px solid color-mix(in srgb, var(--accent) 45%, transparent) + var(--shadow) |
| Toast | 40px | 10px 14px | var(--radius) | 12px/400 JetBrains Mono | sol 3px altın şerit; sağ üst, üst üste 2 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yuvarlak uç; dolgu yok |
| Fotoğraf | gece/dış cephe mimari; sıcak ışık kaynağı kadrajda; alan ≥ %55 (hero ve kartlar) |
| İllüstrasyon | yok — fotoğraf ve tipografi yeter |
| Logo | Cormorant 500 büyük harf sözcük logosu, `.18em`, sol üstte 20px boşluk |
| Doku | grain `.02` yalnız zemin katmanında; fotoğrafın üstünde scrim |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | tam kanama fotoğraf + sol altta 5/12 metin, sağ üstte cam gezinti; tek altın CTA + tek ghost CTA | `shots/01-landing.png` |
| Arama / filtre | orta | cam panelde 4 alan + tek altın buton; etiketler 10px mono, değerler 15px | — |
| Dashboard (portföy) | orta | 3 KPI (aktif portföy, ortalama m², görüntülenme) + 6 ilan satırı; satır yüksekliği 56px | `shots/02-dashboard.png` |
| Form / concierge | düşük | tek sütun, 48px alan, altın odak halkası; hata `--danger` 1px + 11px açıklama | — |
| Liste / tablo | yüksek | 56px satır, fiyat sağa hizalı tabular, ilçe chip | — |
| Boş durum | düşük | "bu filtrede portföy yok" + tek altın eylem | — |
| Onboarding | düşük | 3 adım: bölge → bütçe → randevu; her adımda tek karar | — |
| Pricing | orta | iki plan, altın çerçeve yalnız öne çıkanda | — |
| Giriş / ödeme | düşük | tek kart, tek eylem, cam panel yok | — |
| Modal | orta | 16px radius, 1px altın çerçeve, `--shadow`; kapatma 44×44px | — |
| Bildirim | orta | 40px toast, sol 3px altın şerit, 3.6s | — |
| Mobil (390px) | orta | tek sütun, hero 360px yüksek, filtre alttan açılır, dokunma hedefi 44px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (blur-in) | 0.88s | `cubic-bezier(.16,.84,.28,1)` | `opacity` + `translateY(14px)`, 0.06 arayla |
| Scroll reveal | 0.9s, `top 72%` | aynı | `translateY(10px)`, `once: true` |
| Pin / scrub | 1.22 scrub, +165% mesafe | doğrusal | öne çıkan portföy sabitlenir, künye katmanı kayar |
| Basma | 140ms | aynı | `translateY(1px)` |
| Hover (görsel) | 260ms | aynı | `scale(1.014)` |

- Ölçülen imza: enter **0.88s · cubic-bezier(.16,.84,.28,1) · 14px · stagger 0.06**; scroll **top 72% · 0.9s · 10px · once**; pin **açık · scrub 1.22 · +165%**; hover **260ms · 1.014**.
- undefined
- `prefers-reduced-motion`: static-frame.
- Bu stile yasak hareket: bounce/elastik yay, sonsuz döngü (Ken Burns, parıldayan altın), hover tilt-3d, renk geçişli gradient animasyonu.

## Koyu mod

| Token | Açık (gece) | Koyu (derin gece) |
|---|---|---|
| `--bg` | `#0d0b09` | `#060505` |
| `--bg-2` | `#070605` | `#030303` |
| `--surface` | `#171310` | `#0f0d0b` |
| `--surface-2` | `#211b15` | `#17130f` |
| `--ink` | `#f5f0e7` | `#faf6ef` |
| `--ink-soft` | `#c7bca9` | `#d2c8b7` |
| `--ink-faint` | `#8f8574` | `#9c9283` |
| `--accent` | `#d3af62` | `#e9c882` |
| `--accent-ink` | `#170f04` | `#17100a` |
| `--line` | `rgba(245,240,231,.14)` | `rgba(250,246,239,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.90:1** · `ink-soft/bg` **12.30:1** · `accent-ink/accent` **11.70:1** · `ink-faint/bg` **6.64:1** · odak halkası yüzey üzerinde **12.05:1**.
- Koyu blok yeni bir palet değil, aynı sahnenin ışığı kısılmış hâli: zemin #060505, accent #e9c882 (parlaklık +1 kademe) çünkü koyu zeminde altının doygunluğu düşüyor; çizgi %14 → %16.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="noir-estate"]` olarak durur.

## Zorunlu kurallar
- Hero tam kanama gece fotoğrafı + scrim; metin sol altta 5/12 kolonda.
- Cam (blur) yalnız gezinme çubuğunda; altında opak `--bg-2` katmanı.
- Altın üç yerle sınırlı: 1px çizgi, ince çerçeve, birincil buton dolgusu.
- Kart radius 16px, gölge yok, 1px `--line` çerçeve.
- Cormorant Garamond 300 başlık, cümle düzeni; büyük harf gövde yok.
- Fiyat ve m² mono tabular, sağa hizalı.

## Yasaklar
- İkinci sıcak vurgu (turuncu/terracotta) veya neon
- Kartlarda gölge, 16px üstü radius, cam kart
- Büyük harf gövde, 13px altı metin
- Sonsuz Ken Burns / parıldayan altın animasyonu
- Altın üstüne beyaz metin
- Fotoğrafın üstünde scrim olmadan metin

## Erişilebilirlik
- Gövde `ink/bg` **17.31:1** (≥ 4.5), `ink-soft/bg` **10.47:1**, `accent-ink/accent` **9.11:1**.
- APCA Lc **98** (≥ 45 gövde metni).
- `--ink-faint` **5.40:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**9.43:1**) hem surface (**8.86:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Altın dolgulu butonda metin `--accent-ink` (#170f04) — 9.1:1; beyaz metin kullanılmaz.
- Cam gezinme çubuğu saydam olduğu için altında `--bg-2` katmanı zorunlu; aksi hâlde kontrast fotoğrafa göre değişir.
- Durum yalnız renkle verilmez: rezervasyon durumu chip metniyle (satılık/kiralık/rezerve) yazılır.
- 390px'te arama paneli dikey yığılır, yatay taşma yok; dokunma hedefi ≥ 44px.
- `prefers-reduced-motion` açıkken perde girişi ve parallax durur, içerik anında görünür.

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
| "Ucuz kumarhane" hissi | altın ikinci kez geniş alanda | altın yalnız 1px çizgi / buton / fiyat; rölyef ve gloss yok |
| Okunmuyor | gövde 13px ve `--ink-faint` | 15px `--ink-soft`, yalnız etiket `--ink-faint` |
| Cam çubuk içeriği bulandırıyor | blur < 12px + opak zemin | blur 18px + %55 saydam yüzey, zemin `--bg-2` |
| Hero metni kayboldu | scrim yok | alttan koyulaşan scrim + metin sol alt köşede |
| Kartlar "yüzüyor" | gölge + radius 24px | gölge yok, radius 16px, 1px çerçeve |
| Mobilde taşıyor | 4 alanlı cam panel yatay | panel dikey yığılır, alan genişliği %100 |
| Koyu mod açık modla aynı | koyu blok kopyalanmış | koyu blokta bg bir ton daha derin, accent bir ton parlak |

## Komşu stiller

- **Uyumlu:** `luxury-typography` — aynı altın ve serif dili, açık temada; aynı projede birini ana sayfa diğerini bölüm olarak kullanmak tutarlı. Fark ölçülebilir: taban rengi (#0d0b09 vs #f6f1e7) ve hero (fullbleed vs yazı ağırlıklı).
- **Uyumlu:** `boutique-hotel` (149) — aynı sinematik hero, farklı sıcaklık (terracotta vs altın) ve radius ölçeği (2/10 vs 6/16).
- **Uyumlu:** `glassmorphism` — yalnız gezinme çubuğu için; kart yüzeyine taşınırsa kimlik bozulur.
- **Yasak:** `neubrutalism` — 3px siyah çerçeve ve offset gölge, gece fotoğrafı sahnesini parçalar.
- **Yasak:** `claymorphism` / `frutiger-aero` — pastel ve parlak cam, altının pahalılığını düşürür.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek altın kuralını kırar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Cormorant+Garamond | display serif ölçek ve ağırlık seçimi (300/500) |
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | cam gezinme çubuğu ve fallback davranışı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px altın çizgi ve odak halkası ölçütü |
| https://git.apcacontrast.com/documentation/APCAeasyIntro | koyu zeminde gövde metni okunabilirliği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Noir Estate (styles/146-noir-estate/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="noir-estate"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cormorant Garamond 300 başlık / 500 vurgu) H1 56px 1.06 cümle düzeni +0.01em; --font-body (Jost 400/600) gövde 15px/1.6;
  --font-mono (JetBrains Mono 400) künye 10px +.22em büyük harf, fiyat ve m² tabular.
Yüzey: sıcak siyah zemin + gece mimari fotoğraf (scrim ile). Kart = --surface + 1px --line, radius 16px, GÖLGE YOK;
  cam yalnız gezinme çubuğunda (blur 18px, %55 saydam). Altın 1px ince çizgi dışında dolgu olarak yalnız birincil butonda.
Renk: tek accent altın (--accent), üstünde --accent-ink; ikinci sıcak ton, neon, gradient arka plan yok.
Hareket: enter 0.88s cubic-bezier(.16,.84,.28,1) 14px st.06 · scroll top 72% 0.9s 10px once + parallax ·
  pin açık scrub 1.22 +165% · hover 260ms scale 1.014; prefers-reduced-motion zorunlu.
Yasak: İkinci sıcak vurgu (turuncu/terracotta) veya neon; Kartlarda gölge, 16px üstü radius, cam kart; Büyük harf gövde, 13px altı metin; Sonsuz Ken Burns / parıldayan altın animasyonu; Altın üstüne beyaz metin; Fotoğrafın üstünde scrim olmadan metin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Hero tam kanama fotoğraf + scrim var; metin sol altta ve kontrast ≥ 4.5:1.
- [ ] Cam yalnız gezinme çubuğunda; altında opak zemin katmanı var.
- [ ] Altın üç yerle sınırlı: 1px çizgi, ince çerçeve, birincil buton.
- [ ] Kart radius 16px, gölge yok, 1px çerçeve.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, odak halkası ≥ 3:1.
- [ ] 390px'te cam panel dikey yığılıyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken perde ve parallax duruyor.

## Token

```css
[data-style="noir-estate"] {
  --bg: #0d0b09;
  --bg-2: #070605;
  --surface: #171310;
  --surface-2: #211b15;
  --ink: #f5f0e7;
  --ink-soft: #c7bca9;
  --ink-faint: #8f8574;
  --accent: #d3af62;
  --accent-ink: #170f04;
  --line: rgba(245,240,231,.14);
  --radius: 6px;
  --radius-lg: 16px;
  --shadow: 0 18px 48px -28px rgba(0,0,0,.95);
  --shadow-hard: 0 0 0 1px color-mix(in srgb, var(--accent) 55%, transparent);
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: .01em;
  --blur: 18px;
  --grain: .02;
  --danger: #e2664f;
  --danger-ink: #1c0703;
  --ok: #9dbb72;
  --warn: #e0bb63;
}
```

Koyu mod bloğu `styles/146-noir-estate/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="noir-estate"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
