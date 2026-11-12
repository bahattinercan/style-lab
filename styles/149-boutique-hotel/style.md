# 149 · Boutique Hotel

> **Bir cümlede:** Butik otel vitrini: kum-koyu zemin, terracotta vurgu, Playfair serif ve 1.02s yumuşak açılma — oda fotoğrafı ile künye aynı sayfada nefes alır.

| | |
|---|---|
| **Hissiyat** | sıcak · sakin · el yapımı · misafirperver |
| **En iyi** | Butik otel/konak, tadilatlı taş villa, restoran ve şarap mahzeni, wellness retreat |
| **Kaçın** | Yoğun operasyon paneli, yüksek frekanslı e-ticaret, teknik dokümantasyon |
| **Zorluk** | orta · **Erişilebilirlik** | düşük-orta risk (terracotta metin olarak kullanılmamalı) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="boutique-hotel"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `fullbleed` · `inline` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Boutique Hotel, bir konaklamanın ilk dakikasını ekrana taşır: kum-koyu zemin (#16110c), terracotta vurgu (#d97f4e), Playfair Display başlık ve tek büyük oda fotoğrafı. Sıcaklık gradient ile değil, toprak tonları ve serif tipografiyle kurulur.

Terracotta yalnız üç işlevde görünür: birincil eylem, "müsait" durumu ve bölüm altındaki 1px ince çizgi. Fotoğrafın kendi sıcaklığı yeterlidir; ikinci bir turuncu eklenmez. Gövde metni Nunito 16px/1.65 — harf formu yuvarlak olduğu için koyu zeminde yumuşak okunur.

Radius ölçeği kasıtlı olarak küçük (2px kontrol, 10px kart): taş ve ahşap yüzeyler keskin kenarlıdır, ama tamamen köşesiz de değildir. Gölge yerine 1px çerçeve ve fotoğrafın kendi ışığı kullanılır; yalnız modal ve alt sayfa gölge alır.

Giriş `clip-curtain`: içerik 1.02s içinde 6px bulanıklıktan netleşir (70ms kademe). Bu, bir perdenin aralanması gibi okunur; kesme/sıçrama yok. Scroll `parallax` ile fotoğraf 0.88x hızda kayar. Pin yok. Hover 300ms ve 1.018 — acele etmeyen ama fark edilen bir hız.

### Ne değildir

- Noir Estate (146) değildir: o stil altın + siyah ve cine-tonlu; burada terracotta + kum ve serif daha yuvarlak (Playfair vs Cormorant).
- Wabi-sabi (07) değildir: kusur estetiği ve düşük kontrast yok; kontrast yüksek, düzen hizalı.
- Leather Craft (130) değildir: dikiş çerçevesi ve zanaat dokusu yerine fotoğraf + tipografi.
- Grand Tourer (41) değildir: krom/deri lüksü değil, taş ve keten sıcaklığı.
- Journaling/editorial (150) değildir: orada taban açık kâğıt ve Fraunces; burada koyu kum ve Playfair.

### Nereden gelir

Kök, Ege-Akdeniz butik konaklama katalogları ve baskı broşürleridir: geniş fotoğraf, ince çizgiyle ayrılmış künye satırları, harf aralıklı mono etiketler. Bugün işe yaramasının nedeni, rezervasyon kararının görsel olması: oda fotoğrafı ile fiyat aynı bakışta okunmalı, bu yüzden tipografi fotoğrafın önüne geçmez.

### 3 saniyede tanıma testi

1. Zemin sıcak kum-koyu (#16110c); accent terracotta (#d97f4e), ikinci turuncu yok.
2. Başlık Playfair Display 400 (cümle düzeni), 46px; gövde Nunito 16px/1.65.
3. Kart radius 10px, 1px çerçeve, gölge yok; fotoğraf kartın üstünde tam kanama.
4. Künye satırı: 10px IBM Plex Mono `+0.20em` büyük harf, aralarda 1px dikey çizgi.
5. Butonlar 2px radius, terracotta dolgu (birincil) veya 1px terracotta çerçeve (ikincil).

## Görsel imza

- Hero tam kanama oda/dış mekân fotoğrafı; alttan ısınan scrim `rgba(22,17,12,.72)`, metin sol altta 5/12.
- Künye şeridi: 4 hücre (konum · oda tipi · m² · kahvaltı), aralarında 1px `--line` dikey çizgi, mono 10px.
- Terracotta 1px ince çizgi bölüm başlığının üstünde 28px; tam genişlik çizgi yok.
- Kart: fotoğraf üstte tam kanama (16:10), altta 3 satır (oda adı, m², fiyat/gece).
- Durum chip'i: "müsait" terracotta metin + 1px terracotta çerçeve; dolu değil.
- Grain `.03` yalnız zemin katmanında; fotoğrafa filtre yok (sadece scrim).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#16110c` | sayfa zemini (kum-koyu) | kart yüzeyi olarak |
| `--bg-2` | `#100c08` | bölüm bandı, gezinme, footer | metin zemini |
| `--surface` | `#211a13` | oda kartı, panel, modal | tam kanama bölüm |
| `--surface-2` | `#2b2219` | seçili chip, ikincil buton, tablo başlığı | hero zemini |
| `--ink` | `#f3e9dc` | başlık ve gövde metni | dekoratif alan |
| `--ink-soft` | `#c8b7a3` | gövde ikincil, oda açıklaması | 12px altı etiket |
| `--ink-faint` | `#94836f` | künye etiketi, birim | gövde metni |
| `--accent` | `#d97f4e` | birincil buton, müsait durumu, ince çizgi | gövde metni (kontrast sınırda), geniş yüzey |
| `--accent-ink` | `#1a0b04` | terracotta dolgu üstündeki metin (koyu) | terracotta olmayan zeminde |
| `--line` | `rgba(243,233,220,.14)` | 1px kart çerçevesi, künye ayırıcı | 2px ve üstü kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **15.63:1** · `ink-soft/bg` **9.61:1** · `accent-ink/accent` **6.49:1** · `ink-faint/bg` **5.12:1** · accent metin olarak bg'ye **6.34:1** · APCA Lc **94**.
- Tek vurgu kuralı: terracotta eylem/durum ve ince çizgi için; metin olarak yalnız 16px üstü ve `--bg` üzerinde kullanılır. İkinci sıcak ton (kiremit, hardal) yasak.
- Yasak kombinasyon: terracotta üstüne beyaz metin, ikinci turuncu, mor gün batımı gradienti, altın + terracotta birlikte

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Playfair Display | 46px (mobil 32px) | 400 | 1.12 | 0 |
| H2 | Playfair Display | 30px | 400 | 1.2 | 0 |
| H3 | Playfair Display | 21px | 400 | 1.2 | 0 |
| Gövde | Nunito | 16px | 400 | 1.65 | 0 |
| Küçük | Nunito | 14px | 400 | 1.65 | 0 |
| Etiket / mono | IBM Plex Mono | 10px | 400 | 1.4 | .20em |

- Ölçek: 1.35 oranı (10 · 14 · 16 · 21 · 30 · 46); 10px yalnız mono künye.
- Ölçü: 64ch; `h1 { font-size: clamp(32px, 4vw, 46px) }`.
- Yasak: Playfair 900/italik eğik başlık · Büyük harf gövde · 13px altı gövde · Terracotta üstüne beyaz metin · İkinci serif aile.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1240px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 76px (mobil 40px) |
| Kart içi | 22px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | hero 5/7 (metin dar, fotoğraf geniş); oda ızgarası simetrik 2 sütun. |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa ve bölüm zemini |
| Kart | `--surface` | none | oda kartı, panel, künye şeridi |
| Yüzen katman | `--surface` + `--blur` | `--shadow` | modal, alt sayfa (sheet), menü |
| Vurgu katmanı | `--surface-2` | `--shadow-hard` (1px terracotta halka) | müsait oda vurgusu |

Kartlarda gölge yok; ayrım 1px çerçeve ve fotoğrafın kendi ışığıyla. Gölge yalnız modal/alt sayfada.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 48px | 12px 24px | var(--radius) | 12px/700 Nunito, .12em, büyük harf | var(--accent) var(--accent-ink) |
| Buton (ikincil) | 48px | 12px 20px | var(--radius) | 12px/700 Nunito, .12em, büyük harf | transparent / var(--accent) |
| Input | 48px | 0 14px | var(--radius) | 16px/400 Nunito | var(--bg-2) + 1px solid var(--line) |
| Kart | — | 22px | var(--radius-lg) | 16px Nunito | var(--surface) / 1px solid var(--line) |
| Chip / badge | 24px | 0 10px | var(--radius) | 10px/400 IBM Plex Mono, .18em, büyük harf | transparent / 1px solid color-mix(in srgb, var(--accent) 60%, transparent) |
| Nav | 68px | 0 28px | — | 10px mono .20em | var(--bg-2) / 1px solid var(--line) |
| Tablo satırı | 56px | 8px 14px | — | 16px Nunito | alt 1px var(--line) |
| Modal / sheet | — | 26px | var(--radius-lg) | Playfair Display 400/700 | 1px solid color-mix(in srgb, var(--accent) 40%, transparent) + var(--shadow) |
| Toast | 40px | 10px 14px | var(--radius) | 12px/400 IBM Plex Mono | sol 3px terracotta şerit; sağ üst, üst üste 2 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, yuvarlak uç; yatak, kahve, konum, anahtar |
| Fotoğraf | oda, taş avlu, kahvaltı sofrası; doğal ışık, sıcak beyaz denge; alan ≥ %50 |
| İllüstrasyon | yok — fotoğraf ve serif tipografi yeter |
| Logo | Playfair 400 büyük harf sözcük logosu, `.16em`, sol üstte 24px |
| Doku | grain `.03` zemin katmanında; fotoğraf sadece scrim alır |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | tam kanama fotoğraf + sol altta 5/12 metin; altında 4 hücreli künye şeridi ve rezervasyon alanı | `shots/01-landing.png` |
| Dashboard ( rezervasyon) | orta | 3 KPI (doluluk, ortalama gece, gelir) + 6 satırlık rezervasyon tablosu | `shots/02-dashboard.png` |
| Form / rezervasyon | düşük | tarih + kişi + oda; 48px alanlar, terracotta odak; hata 1px `--danger` | — |
| Liste / odalar | orta | kart ızgarası 2 sütun; her kartta müsait chip | — |
| Boş durum | düşük | "bu tarihlerde oda yok" + tarih değiştir | — |
| Onboarding | düşük | 3 adım: tarih → oda → misafir bilgisi | — |
| Pricing | orta | oda tipleri; öne çıkanda terracotta 1px çerçeve | — |
| Giriş / ödeme | düşük | tek kart, tek eylem; sosyal giriş yok | — |
| Modal | orta | 10px radius, terracotta %40 çerçeve, `--shadow` | — |
| Bildirim | orta | 40px toast, sol 3px terracotta şerit, 3.8s | — |
| Mobil (390px) | orta | hero 300px, künye şeridi 2×2, rezervasyon alanı sticky alt bar | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (clip-curtain) | 1.02s | `cubic-bezier(.3,.02,.2,1)` | `opacity` + `translateY(10px)`, 0.07 arayla |
| Scroll reveal | 1.0s, `top 68%` | aynı | `translateY(8px)`, `once: true` |
| Pin / scrub | kapalı | doğrusal | bu stil sabit bölüm kullanmaz |
| Basma | 150ms | aynı | `translateY(1px)` |
| Hover (görsel) | 300ms | aynı | `scale(1.018)` |

- Ölçülen imza: enter **1.02s · cubic-bezier(.3,.02,.2,1) · 10px · stagger 0.07**; scroll **top 68% · 1.0s · 8px · once**; pin **yok**; hover **300ms · 1.018**.
- undefined
- `prefers-reduced-motion`: static-frame.
- Bu stile yasak hareket: bounce/elastik yay, sonsuz döngü, hover tilt-3d, kesme/sıçrama (steps) geçişi.

## Koyu mod

| Token | Açık (gündüz) | Koyu (gece) |
|---|---|---|
| `--bg` | `#16110c` | `#0e0a07` |
| `--bg-2` | `#100c08` | `#080605` |
| `--surface` | `#211a13` | `#17120d` |
| `--surface-2` | `#2b2219` | `#211a13` |
| `--ink` | `#f3e9dc` | `#f8f0e6` |
| `--ink-soft` | `#c8b7a3` | `#d3c2ae` |
| `--ink-faint` | `#94836f` | `#9e8d79` |
| `--accent` | `#d97f4e` | `#e89567` |
| `--accent-ink` | `#1a0b04` | `#1a0b04` |
| `--line` | `rgba(243,233,220,.14)` | `rgba(248,240,230,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` **17.46:1** · `ink-soft/bg` **11.36:1** · `accent-ink/accent` **8.16:1** · `ink-faint/bg` **6.14:1** · odak halkası yüzey üzerinde **7.91:1**.
- Koyu blok, aynı odanın akşam ışığı: zemin #0e0a07, terracotta #e89567 (parlaklık +1 kademe) — koyu zeminde #d97f4e odak halkası eşiğine yaklaşıyor; çizgi %14 → %16, grain `.03` → `.04`.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="boutique-hotel"]` olarak durur.

## Zorunlu kurallar
- Hero tam kanama oda fotoğrafı + tek scrim; metin sol altta 5/12.
- Künye şeridi 4 hücre, aralarında 1px dikey çizgi, mono 10px.
- Terracotta yalnız buton, durum chip'i ve ince çizgi.
- Kart radius 10px, gölge yok, 1px çerçeve.
- Playfair 400 başlık; 700 yalnız vurgu kelimede.
- Fiyat "gecelik" birimiyle, mono tabular, sağa hizalı.

## Yasaklar
- İkinci turuncu/kiremit tonu veya altın
- Terracotta üstüne beyaz metin
- Kartlarda gölge, 10px üstü radius
- Büyük harf gövde, 13px altı metin
- Sonsuz animasyon, bounce, kesme geçişi
- Gradient arka plan (gün batımı efekti)

## Erişilebilirlik
- Gövde `ink/bg` **15.63:1** (≥ 4.5), `ink-soft/bg` **9.61:1**, `accent-ink/accent` **6.49:1**.
- APCA Lc **94** (≥ 45 gövde metni).
- `--ink-faint` **5.12:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**6.34:1**) hem surface (**5.81:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Terracotta dolgulu butonda metin `--accent-ink` (#1a0b04): 6.49:1 — beyaz metin (2.1:1) yasak.
- Terracotta metin olarak zeminde 6.34:1; yalnız 16px üstü ve kısa etiketlerde.
- "Müsait" durumu yalnız renkle verilmez: chip metni yazılır + 1px çerçeve.
- Künye şeridi 390px'te 2×2'ye döner; yatay taşma yok, dokunma hedefi 44px.
- `prefers-reduced-motion`: clip-curtain ve parallax kapanır, içerik anında netleşir.

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
| "Kahve markası" gibi | terracotta her yerde + kahverengi gradient | terracotta yalnız eylem/durum; zemin nötr kum |
| Okunmuyor | terracotta gövde metni | gövde `--ink-soft`; terracotta yalnız 16px üstü başlık |
| Fotoğraf soluk | çift scrim + grain | tek scrim, grain yalnız zemin |
| Kartlar ağır | gölge + radius 16px | gölge yok, radius 10px, 1px çerçeve |
| Serif klişe | Playfair 700 her başlıkta | H1/H2 400, yalnız vurgu 700 |
| Mobilde metin kesiliyor | künye şeridi 4 sütun | 2×2 ızgara, etiket üstte |
| Koyu mod farkı yok | invert | koyu blokta zemin #0e0a07, terracotta #e89567 |

## Komşu stiller

- **Uyumlu:** `noir-estate` (146) — aynı sinematik hero; fark terracotta vs altın ve radius 2/10 vs 6/16.
- **Uyumlu:** `wabi-sabi` — organik sıcaklık; ancak wabi-sabi düşük kontrastlıdır, bu stil yüksek kontrastlı.
- **Uyumlu:** `magazine-feature` — oda künyesi ve uzun anlatı bölümü için.
- **Yasak:** `brass-copper` — iki sıcak metal/malzeme vurgusu birbirini söndürür.
- **Yasak:** `neon`/`cyberpunk` — soğuk neon, kum sıcaklığını kırar.
- **Yasak:** `neo-brutalism` — kalın çerçeve ve offset gölge, serif zarafetini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Playfair+Display | serif ölçek ve 400/700 ağırlık kullanımı |
| https://fonts.google.com/specimen/Nunito | gövde harf formu ve satır aralığı |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | terracotta üstü metin ve gövde eşiği |
| https://www.nngroup.com/articles/photos-as-content/ | fotoğraf–künye dengesi |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Boutique Hotel (styles/149-boutique-hotel/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="boutique-hotel"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Playfair Display 400 başlık / 700 vurgu) H1 clamp(32px,5vw,46px) 1.12; --font-body (Nunito 400/700) gövde 16px/1.65;
  --font-mono (IBM Plex Mono 400) künye 10px +.20em büyük harf.
Yüzey: kum-koyu zemin + tek scrimli oda fotoğrafı. Kart = --surface + 1px --line, radius 10px, GÖLGE YOK;
  blur yalnız modal/alt sayfada. Terracotta 1px ince çizgi ve birincil butonda.
Renk: tek accent terracotta (--accent), üstünde --accent-ink; ikinci turuncu ve gradient yok.
Hareket: enter 1.02s cubic-bezier(.3,.02,.2,1) clip-curtain 10px st.07 · scroll top 68% 1.0s parallax 8px once ·
  pin yok · hover 300ms scale 1.018; prefers-reduced-motion zorunlu.
Yasak: İkinci turuncu/kiremit tonu veya altın; Terracotta üstüne beyaz metin; Kartlarda gölge, 10px üstü radius; Büyük harf gövde, 13px altı metin; Sonsuz animasyon, bounce, kesme geçişi; Gradient arka plan (gün batımı efekti).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Hero tam kanama fotoğraf + tek scrim; metin sol altta.
- [ ] Künye şeridi 4 hücre (mobil 2×2), mono 10px.
- [ ] Terracotta yalnız buton / durum / ince çizgi.
- [ ] Kart radius 10px, gölge yok, 1px çerçeve.
- [ ] Kontrast: gövde ≥ 4.5:1, terracotta üstü ≥ 4.5:1, odak ≥ 3:1.
- [ ] 390px'te künye 2×2, taşma yok.
- [ ] `prefers-reduced-motion` açıkken clip-curtain duruyor.

## Token

```css
[data-style="boutique-hotel"] {
  --bg: #16110c;
  --bg-2: #100c08;
  --surface: #211a13;
  --surface-2: #2b2219;
  --ink: #f3e9dc;
  --ink-soft: #c8b7a3;
  --ink-faint: #94836f;
  --accent: #d97f4e;
  --accent-ink: #1a0b04;
  --line: rgba(243,233,220,.14);
  --radius: 2px;
  --radius-lg: 10px;
  --shadow: 0 16px 40px -26px rgba(0,0,0,.9);
  --shadow-hard: 0 0 0 1px color-mix(in srgb, var(--accent) 50%, transparent);
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0;
  --blur: 12px;
  --grain: .03;
  --danger: #e2664f;
  --danger-ink: #1c0703;
  --ok: #9dbb72;
  --warn: #e0bb63;
}
```

Koyu mod bloğu `styles/149-boutique-hotel/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="boutique-hotel"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
