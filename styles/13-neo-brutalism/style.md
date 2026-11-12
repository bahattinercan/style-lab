# 13 · Neo-Brutalism

> **Bir cümlede:** Arayüzün "tasarlanmış" değil "basılmış" görünmesi; kalın siyah kontur, ofset gölge, doygun düz renk ve büyük harf tipografi.

| | |
|---|---|
| **Hissiyat** | iddialı, dürüst, indie, "poster gibi" |
| **En iyi** | indie SaaS, topluluk/etkinlik, kreatif araç, dijital ürün lansmanı |
| **Kaçın** | finans, sağlık, resmi kurum, yoğun veri tablosu, yaşlı kitle |
| **Zorluk** | düşük (kural az) · **Erişilebilirlik** | iyi (kontrast yüksek, hareket riskli) |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="neo-brutalism"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Web brutalisminin evcilleştirilmiş hali: **kalın kontur (2–3px siyah)**, **ofset sert gölge (4–8px, blur yok)**, **doygun düz renkler**, **büyük harf display**. Süs yok ama boşluk da yok — yüzeyler birbirine "yapıştırılmış" hissi verir; her öğe elle kesilip yapıştırılmış gibi durur.

Kazandığı şey karakter ve okunurluk: siyah kontur + yüksek kontrast, ekranı bir bakışta taranabilir yapar. Feda ettiği şey incelik: hiyerarşi gölge derinliğiyle değil, kalınlık ve renk bloklarıyla kurulur.

### Ne değildir
- **Anti-design değildir.** Anti-design kasıtlı olarak ızgarayı bozar; neo-brutalism **sıkı bir ızgaraya** oturur, sadece görsel dili serttir.
- **Memphis değildir.** Memphis desen ve şekil neşesi ekler; neo-brutalism desensizdir, renk bloğu ve konturla konuşur.
- **Skeuomorphism değildir.** Gölge gerçekçi ışık değil, **ofset** — ışık yönü yok, sadece kayma var.
- **"Kalın font + sarı" değildir.** Kontur kalınlığı tutarlı değilse, gölge ofseti her bileşende farklıysa sonuç dağınık olur.
- **Karanlık tema değildir.** Taban genelde kırık beyaz/açık; renk blokları doygun.

### Nereden gelir
2010'ların "flat + minimal" tekdüzeliğine tepki olarak 2020'lerde yükseldi; Gumroad gibi ürünlerin arayüzü ve neo-brutalist React kütüphaneleriyle popülerleşti. Bugün küçük ekiplerin "kurumsal görünmeyen" kimlik kurma aracı.

### 3 saniyede tanıma testi
1. Kenarlıklar **siyah ve 2px+** mı? (1px gri ise stil bozulmuş.)
2. Gölge **blur'suz ofset** mi (4–8px sağ-alt), yoksa yumuşak mı? (Yumuşaksa yanlış stil.)
3. Display tipografi **büyük harf ve çok kalın** mı (Archivo Black/Anton)?
4. Renkler düz mü, gradient var mı? (Gradient varsa stil bozulmuş.)
5. Köşe yarıçapı 0–4px mı? (12px+ ise neo-brutalism değil, "soft brutalism".)

## Zorunlu kurallar

1. **Tek kontur kalınlığı.** Tüm bileşenlerde 2px siyah; büyük yüzeylerde 3px. Karışım yok.
2. **Ofset gölge, blur yok.** 4px (küçük) / 8px (hero-kart) / 12px (modal), hepsi aynı yönde.
3. **Radius 0–4px.** Buton/input/chip 0, kart/modal 4px.
4. **Uppercase sadece display/buton/etiket.** Gövde metni her zaman normal case.
5. **En fazla 3 doygun renk** (pembe, sarı, krem) + siyah; gradient yok.
6. **Hover = basılma.** Gölge küçülür, öğe gölge yönüne kayar; gölge büyümez.

## Yasaklar

- Gradient, blur, cam, yumuşak gölge, iç gölge.
- 4px üzeri radius, karışık kontur kalınlığı.
- Gövdede büyük harf; sahte bold (`font-synthesis`).
- Gri tonlarının çoğaltılması, dördüncü doygun renk.
- Ödeme/giriş ekranında tam yoğunluk; bu ekranlarda stili düşür.

## Görsel imza
- **Kontur:** `2px solid #000` (büyük yüzeylerde 3px), tüm bileşenlerde **aynı kalınlık**.
- **Ofset gölge:** `4px 4px 0 #000` (küçük öğe), `8px 8px 0 #000` (hero/kart). Blur **0**.
- **Radius:** 0 (`--radius`), büyük yüzeylerde en fazla 4px (`--radius-lg`).
- **Display:** Archivo Black / Anton, büyük harf, `-0.02em` tracking, satır aralığı 0.95–1.0.
- **Renk bloğu:** accent pembe `#ff5c8a`, sticker sarısı `#ffd93d` (yüzey-2), zemin kırık beyaz `#fffdf5`.
- **Etkileşim:** hover'da gölge **kaybolur**, öğe 4px sağ-alt'a gider (`translate(4px,4px)`) — "basıldı" hissi. Ters yön (gölge büyür) yanlıştır.
- **Doku:** yok (`--grain: 0`); kağıt hissi istenirse tek katman %3 grain, fazlası konturu kirletir.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fffdf5` | sayfa zemini | kart zemini (kart beyaz) |
| `--bg-2` | `#ffe9a8` | bölüm vurgusu, üst şerit | büyük gövde zemini |
| `--surface` | `#ffffff` | kart, modal, input | sayfa zemini |
| `--surface-2` | `#ffd93d` | "sticker" blok, ikincil buton, KPI vurgusu | uzun metin zemini (yorgunluk) |
| `--ink` | `#000000` | tüm metin + tüm kontur | — |
| `--ink-soft` | `#2b2b2b` | açıklama metni | kontur |
| `--ink-faint` | `#6b6b6b` | dekoratif etiket | gövde metni |
| `--accent` | `#ff5c8a` | birincil aksiyon, aktif durum | geniş metin zemini |
| `--accent-ink` | `#000000` | accent üstü metin | — |
| `--line` | `#000000` | **tüm** kenarlıklar, ayırıcılar | metin rengi (ink kullan) |

- Ölçülen kontrast: `ink/bg` **20.62:1** · `ink-soft/bg` **13.90:1** · `ink-faint/bg` **5.23:1** · `accent-ink/accent` **7.15:1**.
- Palette sadece **3 doygun renk** var (pembe, sarı, kırık beyaz); dördüncüyü eklemek stili bozar. Gerekirse ikinci aksan olarak mavi `#4d7cff` — ama ekran başına 1 aksan.
- Yasak: gradient, yarı saydam renk, gri tonların çoğaltılması (1 siyah + 1 koyu gri + 1 orta gri yeter).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | `--font-display` (Archivo Black) | 64px (mobil 36px) | 400 (aile zaten kalın) | 0.98 | `-0.02em` |
| H2 | aynı | 32px | 400 | 1.0 | `-0.02em` |
| H3 | `--font-body` (Space Grotesk) | 20px | 700 | 1.15 | `-0.01em` |
| Gövde | `--font-body` | 16px | 400 | 1.55 | `0` |
| Etiket | `--font-mono` | 11px | 500 | 1.2 | `0.12em`, uppercase |
| Buton | `--font-body` | 14px | 700 | 1 | `0.02em`, uppercase |

- Tüm H1/H2 **büyük harf** (`text-transform: uppercase`); Archivo Black zaten geniş, ek tracking verme.
- Gövde satır uzunluğu **60ch** — kontur ve renk bloğu metni daraltır, uzun satır okunmaz.
- Ölçü: `h1 { font-size: clamp(2.25rem, 1.2rem + 4vw, 4rem) }`.
- 400 dışı ağırlık display'de kullanılmaz: Archivo Black'in tek ağırlığı vardır; sahte bold (`font-synthesis`) yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (bento benzeri 6/6, 8/4) |
| Gutter | 16px (mobil 12px) |
| Container | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 |
| Breakpoint | 640 / 900 / 1200 px |

- Boşluk **sıkı**: bölüm dikey 56px (mobil 40px), kart padding 20px.
- Bloklar arası boşluk gölge payı kadar (8–12px) olmalı, yoksa ofset gölge komşuya taşar.
- Asimetri: hero 7/5; ikinci bölümde 1 tam genişlik "sticker" şerit.
- Izgara görünmez ama **hizalama zorunlu**: her blok aynı sol hatta başlar.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Kart | `--surface` + 2px `--ink` kenar | `--shadow` (4px 4px 0) | içerik bloğu |
| Öne çıkan | `--surface-2` (sarı) + 2px kenar | `8px 8px 0` | hero, fiyat kartı, KPI |
| Yüzen | `--surface` + 2px kenar | `12px 12px 0` | modal, dropdown |

- Derinlik **kayma**dan gelir (ofset), ışıktan değil. Gölge rengi her zaman `--ink` (siyah), asla gri.
- Radius: `--radius` 0 (buton/input/chip), `--radius-lg` 4px (kart/modal).
- İç gölge, blur, cam yok; `--shadow-hard` bu stilde kullanılmaz (ofset gölge `--shadow`).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 22px | 0 | 14/700 uppercase | `--accent` + 2px `--ink` kenar + `4px 4px 0` gölge | hover: `translate(4px,4px)` + gölge 0 · active: `translate(4px,4px)` · focus: 3px `--ink` dış halka, offset 3px · disabled: %40 opaklık, gölge yok |
| Buton (ikincil) | 48px | 0 20px | 0 | 14/700 uppercase | `--surface` + 2px kenar + 4px gölge | hover: aynı "basılma" |
| Buton (sticker) | 48px | 0 20px | 0 | 14/700 | `--surface-2` + 2px kenar | hover: `--bg-2` |
| Input | 48px | 0 14px | 0 | 15/400 | `--surface` + 2px kenar, iç gölge yok | focus: 3px `--accent` dış halka · error: kenar `--danger`, altında 12px metin · disabled: `--bg-2` |
| Kart | içerik | 20px | 4px | H3 20/700 + gövde 15 | `--surface` + 2px kenar + 4px gölge | hover (tıklanabilir): `translate(-2px,-2px)` + gölge 6px |
| Chip | 26px | 0 10px | 0 | 11/500 mono uppercase | `--surface-2` + 2px kenar | aktif: `--accent` zemin |
| Nav | 64px | 0 24px | 0 | 15/700 | `--bg` + alt 2px `--ink` | aktif: 3px alt çizgi `--accent` |
| Tablo satırı | 56px | 12px 16px | 0 | 14/400, sayı mono 13/700 | satır altı 2px `--ink` | hover: `--bg-2`; seçili: `--surface-2` zemin |
| Modal | içerik | 24px | 4px | H2 + gövde | `--surface` + 3px kenar + `12px 12px 0` | backdrop: `rgba(0,0,0,.4)` (blur yok) |
| Toast | 48px | 0 16px | 0 | 13/600 | `--ink` zemin + `--bg` metin + 2px `--bg` kenar | 4sn, ikon + tek satır |
| Grafik | — | — | 0 | eksen 11 mono | `--accent` + `--surface-2` + 2px `--ink` çerçeve | 3 seri, çubuklar arası 2px kenar |

- Odak halkası **dışta ve kalın** (3px ink, offset 3px); accent halka sarı zeminde kaybolur.
- Dokunma hedefi 48×48px (bu stilde standart 44'ün üstünde tutulur: kalın kontur algıyı büyütür).

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, köşe yok, 24px kutu; dolgulu ikon serbest |
| Fotoğraf | Yüksek kontrast, sert gölge, tek renk duotone (accent + ink) tercih |
| İllüstrasyon | Kalın konturlu, düz dolgulu vektör; ince çizgi yasak |
| Doku | Yok; kağıt hissi gerekiyorsa %3 grain tek katman |
| Logo | Siyah, kalın, gerekirse çerçeveli "sticker" içinde |
| Dekor | Ok, yıldız, konuşma balonu — en fazla 2 öğe, hepsi 2px konturlu |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 64px büyük harf başlık, altında 1 satır gövde, 2 buton (biri accent), sağda sarı çerçeveli görsel bloğu | `shots/01-landing.png` |
| Dashboard | düşük | KPI kartları 2px kenar + 4px gölge; grafikte sadece 2 renk; tablo satır ayrımı 2px | `shots/02-dashboard.png` |
| Form | düşük | Tek sütun 520px, input 48px, etiket mono uppercase; hata metni kalın | — |
| Liste / tablo | düşük | 56px satır, 2px ayırıcı; durum chip'i (aktif accent, pasif sarı) | — |
| Boş durum | orta | Kalın konturlu kutu + tek cümle + sticker buton | — |
| Onboarding | yüksek | 3 adım, her adım tam ekran renk bloğu; büyük numara (01/02/03) | — |
| Pricing | yüksek | 3 kart, orta kart sarı zemin + 8px gölge + "en çok seçilen" şerit | — |
| Giriş / ödeme | düşük | 440px kart, 2 alan, 1 buton; sticker dekor yok (güven) | — |
| Modal | orta | 3px kenar, 12px ofset gölge, başlık büyük harf, 2 buton | — |
| Bildirim / toast | orta | Siyah zemin + beyaz metin + 2px beyaz kenar; 4sn | — |
| Hata | düşük | Kalın kırmızı kenar + 13/700 açıklama + "tekrar dene" butonu | — |
| Profil / ayar | orta | Sol nav 2px ayırıcı; ayar satırı 56px, toggle kalın konturlu | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (buton) | 90ms | `ease-out` | `translate(4px,4px)` + gölge 0 |
| Giriş | 280ms | `linear` | `opacity` + 8px `translateY`, stagger 20ms |
| Scroll (`top 88%`) | 320ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 90ms | aynı eğri | `transform: scale(1.03)` |
| Ödül / vurgu | 240ms | `cubic-bezier(.34,1.4,.64,1)` | chip pop (`scale(1.04)`) tek seferlik |

- Hareket **kesik ve hızlı**; spring uzun süreli olmaz (120ms üstü yay "yumuşak" görünür, stille çelişir).
- `prefers-reduced-motion`: tüm süreler 0.01ms; basılma efekti `opacity` ile verilir.
- Yasak: parallax, sürekli döngü, blur animasyonu, sayfa geçişinde slide.

## Koyu mod

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#fffdf5` | `#111111` |
| `--bg-2` | `#ffe9a8` | `#2a2a1a` |
| `--surface` | `#ffffff` | `#1b1b1b` |
| `--surface-2` | `#ffd93d` | `#3a3320` |
| `--ink` | `#000000` | `#fffdf5` |
| `--ink-soft` | `#2b2b2b` | `#d8d4c8` |
| `--ink-faint` | `#6b6b6b` | `#9a958a` |
| `--accent` | `#ff5c8a` | `#ff5c8a` |
| `--accent-ink` | `#000000` | `#000000` |
| `--line` | `#000000` | `#fffdf5` |

- Koyu modda kontur **açık renge** döner; gölge de açık renk ofset olur ama %12 opaklıkla (aksi halde parlar).
- Accent ve sarı aynı kalır (kimlik), sadece zemin/ink ters çevrilir.

## Erişilebilirlik

- Kontrast yüksek: `ink/bg` 20.62:1, `accent-ink/accent` 7.15:1 → güvenli taban.
- Risk **hareket** ve **kalın kontur yorgunluğu**: 90–120ms kesik hareket; `prefers-reduced-motion` şart.
- Sarı `--surface-2` üstünde siyah metin 13.9:1; ama sarı zemin + pembe yazı yasak (kontrast 4.5 altı).
- Odak halkası siyah, 3px, offset 3px — pembe/sarı zeminde de görünür.
- Dokunma hedefi 48px; buton gölgesi hedef alanına dahil değildir (gölge tıklanabilir değil).
- Büyük harf metin: **gövdede kullanılmaz** (disleksi ve okuma hızı); yalnızca H1/H2/buton/etiket.

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
| Dağınık, ucuz görünüyor | Kontur kalınlığı ve gölge ofseti tutarsız | Tek kalınlık (2px) + tek ofset (4px); büyük yüzeyde 3px/8px |
| "Soft brutalism" olmuş | Radius 12px+, yumuşak gölge | Radius 0–4px, gölge blur 0 |
| Göz yoruyor | Her blok doygun renk | Doygun rengi aksiyona ayır; gövde beyaz zeminde |
| Hover "zıplıyor" | Gölge büyütülmüş | Hover'da gölge **küçülür**, öğe gölge yönüne kayar |
| Mobilde taşma | Ofset gölge kenardan taşıyor | Container'a 8–12px iç boşluk, taşan gölge için `overflow: visible` + padding |
| Okunmuyor | Büyük harf gövde metni | Uppercase yalnızca H1/H2/buton/etiket |
| Güven kaybı (ödeme ekranı) | Stil güven ekranında tam yoğunlukta | Ödeme/giriş ekranlarında stili düşür (sadece kontur + buton) |

## Komşu stiller

- **Uyumlu:** `16 memphis` (kalın kontur + düz renk aynı dil), `14 anti-design` (kesik hareket ve sert tipografi), `32 conceptual-sketch` (elle çizilmiş kontur garnitür olarak).
- **Yasak:** `08 glassmorphism` (blur ile kontur çelişir), `04 luxury-typography` (seyrek lüks ile kalabalık iddia çelişir), `06 japandi` (dinginlik ve doku ile çakışır).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://gumroad.com | Gerçek üründe neo-brutalist buton/kart davranışı |
| https://www.neobrutalism.dev | Bileşen seti: buton, kart, input durumları |
| https://brutalistwebsites.com | Daha ham örnekler; dozu ayarlamak için |

## AI brief

```
Stil: Neo-Brutalism (styles/13-neo-brutalism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="neo-brutalism"]; hard-coded renk/gölge/radius YASAK.
Kontur: 2px solid var(--line) tüm bileşenlerde; büyük yüzeylerde 3px. Kalınlık asla karışmaz.
Gölge: var(--shadow) = 4px 4px 0 var(--ink), blur yok. Hero/kart 8px. Hover'da gölge KÜÇÜLÜR, öğe gölge yönüne kayar.
Radius: --radius 0 (buton/input/chip), --radius-lg 4px (kart/modal).
Tipografi: Archivo Black H1/H2 uppercase -0.02em; gövde Space Grotesk 16/1.55 (uppercase YOK); etiket mono 11 uppercase.
Renk: bg #fffdf5, surface #fff, sticker #ffd93d, accent #ff5c8a; 4. doygun renk ekleme.
Hareket: 90–180ms ease-out, translate + opacity; spring/parallax yasak.
Yasak: gradient, blur, cam, yumuşak gölge, 4px üstü radius, gövdede uppercase.
Çıktı: kod + tek paragraf not (kontur/gölge tutarlılığını nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm kenarlıklar aynı kalınlıkta (2px, büyük yüzeyde 3px).
- [ ] Tüm gölgeler blur'suz ofset, aynı yönde.
- [ ] Radius 0–4px; 8px+ hiçbir yerde yok.
- [ ] Uppercase yalnızca display/buton/etiket.
- [ ] Doygun renk sayısı ≤ 3 (pembe, sarı, krem) + siyah.
- [ ] Mobilde gölge taşması yok, hedef ≥ 48px.

## Token

```css
[data-style="neo-brutalism"] {
  --bg: #fffdf5; --bg-2: #ffe9a8;
  --surface: #ffffff; --surface-2: #ffd93d;
  --ink: #000000; --ink-soft: #2b2b2b; --ink-faint: #6b6b6b;
  --accent: #ff5c8a; --accent-ink: #000000;
  --line: #000000;
  --radius: 0px; --radius-lg: 4px;
  --shadow: 4px 4px 0 #000000; --shadow-hard: 0 0 0 #000000;
  --font-display: "Archivo Black", "Space Grotesk", system-ui, sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: 0;
}
```
