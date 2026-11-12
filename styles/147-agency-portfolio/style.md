# 147 · Agency Portfolio

> **Bir cümlede:** Dijital ajans vitrini: kâğıt beyazı zemin, 72px Archivo Black başlık, elektrik mavi vurgu ve 0.62s harf kademesi — işi tipografi ve indeks numarası anlatır.

| | |
|---|---|
| **Hissiyat** | keskin · iddialı · editöryel · hızlı |
| **En iyi** | Ajans/studio portfolyosu, vaka çalışması indeksi, tasarımcı özgeçmişi, kültür-sanat programı vitrini |
| **Kaçın** | Duygusal marka anlatısı, lüks ürün, sağlık iletişimi, dokunmatik self-servis kiosk |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (yüksek kontrast taban) |
| **Aile** | Sahne & Prestij (146–151) · **Token** | `kit/tokens.css` → `[data-style="agency-portfolio"]` (bu klasördeki `token-block.css`) |
| **Kompozisyon** | `index` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir

Agency Portfolio, portfolyoyu bir dergi indeksi gibi kurar: ekranın üst üçte birinde 72px Archivo Black başlık, altında 1px çizgilerle bölünmüş proje listesi ve her satırın başında mono indeks numarası. Görsel (proje kapağı) başlığın rakibi değil, satırın kanıtıdır.

Zemin kâğıt beyazı-na yakın sıcak gri (#f3f1ec), metin neredeyse siyah (#0e0e0d). Tek vurgu elektrik mavi (#1f45d6) ve yalnız üç yerde: aktif indeks numarası, bağlantı alt çizgisi ve birincil eylem bloğu. Başka renk yok; görsellerin kendi renkleri sahneye girer.

Radius 2px (kontrol) ve 6px (kart) — kutu yumuşaması yok. Derinlik gölgeyle değil, 1px çizgi ve negatif boşlukla kurulur. Tipografi hiyerarşisi ağırlıkla değil boyut ve harf aralığıyla yapılır: display `-0.02em`, mono etiket `+0.14em`.

Hareket tipografiden gelir: başlık satırları 0.62s `letter-stagger` ile tek tek açılır (40ms kademe), proje ızgarası `grid-stagger` ile soldan sağa 0.54s’de dolar. Pin yok; sayfa kendi ritmiyle akar. Hover 180ms ve 1.03 — hızlı, tık hissi verir.

### Ne değildir

- Swiss Design (02) değildir: o stil nötr ve ölçülü kalır; burada başlık kasıtlı olarak ekranı taşacak kadar büyük ve mavi vurgu agresif.
- Editorial Design (03) değildir: metin ağırlıklı dergi düzeni yerine indeks/ızgara hâkim.
- Neo-Brutalism (141) değildir: 3px siyah çerçeve, offset gölge ve "kırık" kompozisyon yok; çizgiler 1px ve hizalı.
- Dark SaaS (151) değildir: taban açık kâğıt ve vurgu sıcak-soğuk zıtlığı değil tek mavi blok.
- Minimalism (01) değildir: boşluk değil tipografi ölçeği konuşur; başlık 72px.

### Nereden gelir

Kök, 2010'ların stüdyo portfolyoları ve baskı dergilerinin içindekiler sayfasıdır: indeks numarası, 1px ayırıcı, tek renk vurgu. Bugün işe yaramasının nedeni, ağır görsel yerine indekslenebilir metin göstermesi — 12 vaka aynı ekranda taranabilir hâle gelir ve mavi yalnız "şu an buradasın" bilgisini taşır.

### 3 saniyede tanıma testi

1. Başlık 72px Archivo Black, `-0.02em` aralık, iki satıra kırılır; büyük harfe çevrilmez.
2. Her proje satırının solunda 3 haneli mono indeks (01, 02, 03) ve 1px alt çizgi.
3. Tek vurgu elektrik mavi; yalnız numara, bağlantı altı ve birincil butonda.
4. Kart radius 6px, gölge yok, görsel kartın üstünde tam kanama.
5. Etiketler mono 10px `+0.14em` büyük harf; gövde 16px Inter.

## Görsel imza

- Index hero: sol 7/12 dev başlık, sağ 5/12 dikey indeks listesi; ikisi arasında 1px dikey çizgi.
- İndeks numarası: 10px Space Mono, `+0.14em`, `--ink-faint`; aktif satırda `--accent` ve 2px sol şerit.
- Hover: satırın altına 0→100% genişleyen 1px `--accent` çizgi (180ms), görsel `scale(1.03)`.
- Kart: 6px radius, 1px `--line`, `--surface`; etiket üstte 1 satır mono, başlık 20px Inter 600.
- Birincil buton: 2px radius, `--accent` dolu blok, `--accent-ink` metin, 44px yükseklik, gölge yok.
- Grain `.01` yalnız zemin katmanında; fotoğrafa filtre yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3f1ec` | sayfa zemini (sıcak kâğıt) | kart yüzeyi olarak (surface vardır) |
| `--bg-2` | `#eae7e0` | bölüm bandı ve gezinme alt çizgisi | kart yüzeyi |
| `--surface` | `#ffffff` | kart, panel, modal yüzeyi | tam kanama bölüm |
| `--surface-2` | `#e4e0d7` | seçili chip, tablo başlığı, ikincil buton | büyük yüzey dolgusu |
| `--ink` | `#0e0e0d` | başlık ve gövde metni | dekoratif arka plan |
| `--ink-soft` | `#55534d` | gövde ikincil, proje açıklaması | 11px altı etiket |
| `--ink-faint` | `#8b8880` | indeks numarası (pasif), tarih, birim | gövde metni |
| `--accent` | `#1f45d6` | aktif indeks, bağlantı alt çizgisi, birincil buton | geniş arka plan, metin gövdesi |
| `--accent-ink` | `#ffffff` | mavi dolgu üstündeki metin (beyaz) | mavi olmayan zeminde |
| `--line` | `rgba(14,14,13,.14)` | 1px ayırıcı ve kart çerçevesi | 2px ve üstü kural |

- Ölçülen kontrast (`kit/color.mjs`): `ink/bg` **17.11:1** · `ink-soft/bg` **6.81:1** · `accent-ink/accent` **7.29:1** · `ink-faint/bg` **3.14:1** · accent metin olarak bg'ye **6.46:1** · APCA Lc **97**.
- Tek vurgu kuralı: mavi yalnız konum/eylem bildirir; proje görsellerinin kendi renkleri vurgu sayılmaz. Gri tonları sıcak (R>B) tutulur, mavi-gri kullanılmaz.
- Yasak kombinasyon: mavi üstüne mavi, gradient blok, üçüncü bir vurgu rengi, siyah üstüne mavi metin (4.5:1 altı)

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black | 72px (mobil 36px) | 400 | 1.02 | -.02em |
| H2 | Archivo Black | 36px | 400 | 1.1 | -.01em |
| H3 | Archivo Black | 24px | 400 | 1.1 | -.01em |
| Gövde | Inter | 16px | 400 | 1.6 | 0 |
| Küçük | Inter | 14px | 400 | 1.6 | 0 |
| Etiket / mono | Space Mono | 10px | 400 | 1.4 | .14em |

- Ölçek: 1.5 oranı (10 · 16 · 24 · 36 · 54 · 72); 6 basamak kullanılıyor, 10px yalnız mono etiket.
- Ölçü: 68ch; `h1 { font-size: clamp(36px, 4vw, 72px) }`.
- Yasak: Archivo Black'ta 400 dışı ağırlık (aile tek ağırlık) · Display için ikinci bir aile · İtalik başlık · 11px altı etiket · Büyük harf gövde.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 20px |
| Container genişliği | 1320px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Bölüm ritmi | 72px (mobil 40px) |
| Kart içi | 20px |
| Breakpoint | sm 390 / md 768 / lg 1200px |
| Asimetri | hero 7/5 (başlık geniş, indeks dar); her bölümde en fazla 1 asimetrik blok. |

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, bölüm bandı |
| Kart | `--surface` | none | proje kartı, panel, tablo |
| Yüzen katman | `--surface` + 1px `--ink` | none (1px sert çerçeve) | modal, açılır menü |
| Vurgu katmanı | `--accent` | none | birincil buton, aktif indeks |

Gölge yok: katman farkı 1px çizgi ve boşlukla kurulur. Yüzen katman 1px `--ink` sert çerçeve alır (bulanık gölge yok).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge |
|---|---|---|---|---|---|
| Buton (birincil) | 44px | 10px 22px | var(--radius) | 12px/600 Inter, .12em, büyük harf | var(--accent) var(--accent-ink) |
| Buton (ikincil) | 44px | 10px 18px | var(--radius) | 12px/600 Inter, .12em, büyük harf | transparent / var(--ink) |
| Input | 48px | 0 12px | var(--radius) | 16px/400 Inter | var(--surface) + 1px solid var(--ink) |
| Kart | — | 20px | var(--radius-lg) | 16px Inter | var(--surface) / 1px solid var(--line) |
| Chip / badge | 22px | 0 8px | var(--radius) | 10px/400 Space Mono, .14em, büyük harf | transparent / 1px solid var(--line) |
| Nav | 60px | 0 32px | — | 11px mono .14em | var(--bg) / 1px solid var(--ink) |
| Tablo satırı | 44px | 6px 12px | — | 16px Inter | alt 1px var(--line) |
| Modal / sheet | — | 24px | var(--radius-lg) | Archivo Black 400 | 1px solid var(--ink) + none |
| Toast | 36px | 8px 12px | var(--radius) | 11px/400 Space Mono | sol 3px mavi şerit; sağ üst, üst üste 2 |

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, kare uç; ok ve numara ağırlıklı |
| Fotoğraf | proje kapağı: ürün/ekran/mekân; %35 alan, kart üstünde tam kanama, filtre yok |
| İllüstrasyon | yok — indeks numarası ve tipografi yeter |
| Logo | Archivo Black sözcük logosu 16px, `-0.02em`, büyük harf |
| Doku | grain `.01` yalnız zemin katmanında |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | sol 7/12 dev başlık + tek CTA; sağ 5/12 indeks listesi, aralarında 1px çizgi | `shots/01-landing.png` |
| Dashboard (vaka) | orta | 3 KPI (vaka sayısı, ortalama süre, sektör) + 8 satırlık indeks tablo | `shots/02-dashboard.png` |
| Form / brief | düşük | tek sütun 48px alan, mavi odak halkası; hata 1px `--danger` + 12px açıklama | — |
| Liste / indeks | yüksek | 44px satır, mono numara solda, sektör chip sağda | — |
| Boş durum | düşük | "bu filtrede vaka yok" + filtreyi temizle (mavi alt çizgi) | — |
| Onboarding | orta | 2 adım: sektör → bütçe aralığı; her adımda tek karar | — |
| Pricing | orta | üç paket, yalnız ortada mavi 2px üst şerit | — |
| Giriş / ödeme | düşük | kart yok, tek sütun, 1px çizgi bölmeli | — |
| Modal | orta | 6px radius, 1px `--ink` çerçeve, gölge yok | — |
| Bildirim | orta | 36px toast, sol 3px mavi şerit, 3.2s | — |
| Mobil (390px) | orta | başlık 36px, indeks tek satır + ok; dokunma hedefi 44px | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (letter-stagger) | 0.62s | `cubic-bezier(.2,.8,.2,1)` | `opacity` + `translateY(20px)`, 0.04 arayla |
| Scroll reveal | 0.54s, `top 80%` | aynı | `translateY(16px)`, `once: true` |
| Pin / scrub | kapalı | doğrusal | bu stil sabit bölüm kullanmaz |
| Basma | 120ms | aynı | `translateY(1px)` |
| Hover (görsel) | 180ms | aynı | `scale(1.03)` |

- Ölçülen imza: enter **0.62s · cubic-bezier(.2,.8,.2,1) · 20px · stagger 0.04**; scroll **top 80% · 0.54s · 16px · once**; pin **yok**; hover **180ms · 1.03**.
- undefined
- `prefers-reduced-motion`: instant.
- Bu stile yasak hareket: bounce/elastik yay, sonsuz döngü, hover tilt-3d, parallax (indeks ritmini bozar).

## Koyu mod

| Token | Açık (kâğıt) | Koyu (mürekkep) |
|---|---|---|
| `--bg` | `#f3f1ec` | `#0a0a0a` |
| `--bg-2` | `#eae7e0` | `#050505` |
| `--surface` | `#ffffff` | `#141414` |
| `--surface-2` | `#e4e0d7` | `#1d1d1d` |
| `--ink` | `#0e0e0d` | `#f6f5f2` |
| `--ink-soft` | `#55534d` | `#b6b3ac` |
| `--ink-faint` | `#8b8880` | `#85827c` |
| `--accent` | `#1f45d6` | `#7d93ff` |
| `--accent-ink` | `#ffffff` | `#08091a` |
| `--line` | `rgba(14,14,13,.14)` | `rgba(246,245,242,.16)` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.16:1** · `ink-soft/bg` **9.46:1** · `accent-ink/accent` **7.04:1** · `ink-faint/bg` **5.17:1** · odak halkası yüzey üzerinde **6.57:1**.
- Koyu blok, aydınlık kâğıdın gece okuması: zemin #0a0a0a, mavi #7d93ff (doygunluk düşük, parlaklık yüksek) çünkü #1f45d6 koyu zeminde 3:1 odak eşiğini zor geçiyor. Çizgi %14 → %16.
- `filter: invert()` yasak; koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="agency-portfolio"]` olarak durur.

## Zorunlu kurallar
- Başlık Archivo Black 72px (mobil 36px), `-0.02em`; büyük harfe çevrilmez.
- Her proje satırında 3 haneli mono indeks ve 1px ayırıcı.
- Mavi yalnız konum/eylem: indeks, alt çizgi, birincil buton.
- Kart radius 6px, gölge yok, 1px çerçeve.
- Gövde 16px Inter 1.6; ölçü 68ch.
- Hover satırında mavi sol şerit + alt çizgi çizilir.

## Yasaklar
- Kart gölgesi, blur, 6px üstü radius
- Üçüncü bir vurgu rengi veya gradient blok
- Büyük harf gövde, 11px altı etiket
- İtalik başlık, ikinci display ailesi
- Sonsuz animasyon, bounce, parallax
- Aktif durumu yalnız renkle bildirmek

## Erişilebilirlik
- Gövde `ink/bg` **17.11:1** (≥ 4.5), `ink-soft/bg` **6.81:1**, `accent-ink/accent` **7.29:1**.
- APCA Lc **97** (≥ 45 gövde metni).
- `--ink-faint` **3.14:1** — yalnız etiket/dekor; gövde metni olarak kullanılmaz.
- Odak halkası: `--accent` hem bg (**6.46:1**) hem surface (**7.29:1**) üzerinde ≥ 3:1; 2px halka + 2px offset.
- Mavi buton üstünde beyaz metin: 7.29:1; mavi metin olarak beyaz zeminde 7.29:1 — ikisi de geçer.
- Aktif indeks numarası yalnız renkle verilmez: 2px sol mavi şerit + kalın (600) numara.
- Odak halkası 2px `--accent` + 2px offset; beyaz zeminde 6.46:1.
- 390px'te dev başlık `clamp()` ile 36px'e iner, indeks listesi tek kolona geçer.
- `prefers-reduced-motion`: harf kademesi ve ızgara stagger kapanır, içerik anında.

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
| "Şablon gibi" görünüyor | başlık 44px, indeks yok | başlık 72px + 3 haneli mono indeks |
| Mavi her yerde | accent bağlantı + arka plan + ikon | mavi yalnız numara/alt çizgi/buton |
| Kalabalık | kart gölgesi + radius 12px | gölge yok, radius 6px, 1px çizgi |
| Tipografi yumuşak | display 700 Inter | Archivo Black 400, `-0.02em` |
| Okunmuyor | gövde 13px | 16px Inter 1.6 |
| Mobilde taşıyor | 72px başlık sabit | clamp(36px, 8vw, 72px) |
| Koyu mod "ters çevrilmiş" | invert yaklaşımı | koyu blokta mavi açılır (#7d93ff), çizgi %16 |

## Komşu stiller

- **Uyumlu:** `swiss-design` — aynı ızgara disiplini, daha sakin; kurumsal alt sayfalarda eş.
- **Uyumlu:** `magazine-feature` — indeks ve künye dili; vaka sayfası uzun okuma için.
- **Uyumlu:** `dark-dashboard` (151) — aynı indeks mantığının koyu ve yoğun hâli; ürün panelinde eş.
- **Yasak:** `neo-brutalism` — offset gölge ve 3px çerçeve, 1px çizgi disiplinini bozar.
- **Yasak:** `luxury-typography` — serif + altın, ajansın keskinliğini yumuşatır.
- **Yasak:** `claymorphism` / `glassmorphism` — yumuşak gölge ve blur, kâğıt zeminle çelişir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://fonts.google.com/specimen/Archivo+Black | display ağırlığı ve harf aralığı referansı |
| https://practicaltypography.com/ | indeks numarası, ayırıcı çizgi ve ölçü kararları |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | odak halkası kalınlığı ve offset |
| https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness | alt çizgi çizimi (underline-draw) |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Agency Portfolio (styles/147-agency-portfolio/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="agency-portfolio"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black 400) H1 clamp(36px,8vw,72px) 1.02 -0.02em; --font-body (Inter 400/600) gövde 16px/1.6;
  --font-mono (Space Mono 400) indeks numarası ve etiket 10px +.14em büyük harf.
Yüzey: sıcak kâğıt zemin, 1px --line çizgiler, radius 2/6px, GÖLGE YOK. Modal 1px --ink çerçeve.
  Fotoğraf kartın üstünde tam kanama; filtre yok.
Renk: tek accent elektrik mavi (--accent), üstünde beyaz (--accent-ink); başka vurgu rengi yok.
Hareket: enter 0.62s cubic-bezier(.2,.8,.2,1) letter-stagger 20px st.04 · scroll top 80% 0.54s grid-stagger 16px once ·
  pin yok · hover 180ms scale 1.03 + underline-draw; prefers-reduced-motion zorunlu.
Yasak: Kart gölgesi, blur, 6px üstü radius; Üçüncü bir vurgu rengi veya gradient blok; Büyük harf gövde, 11px altı etiket; İtalik başlık, ikinci display ailesi; Sonsuz animasyon, bounce, parallax; Aktif durumu yalnız renkle bildirmek.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Başlık 72px (mobil 36px) Archivo Black, `-0.02em`.
- [ ] Her proje satırında 3 haneli mono indeks + 1px ayırıcı var.
- [ ] Mavi yalnız numara / alt çizgi / buton; başka yerde yok.
- [ ] Kart gölgesiz, radius 6px, 1px çerçeve.
- [ ] Kontrast: gövde ≥ 4.5:1, mavi üstü ≥ 4.5:1, odak ≥ 3:1.
- [ ] 390px'te başlık clamp ile küçülüyor, taşma yok.
- [ ] `prefers-reduced-motion` açıkken harf kademesi duruyor.

## Token

```css
[data-style="agency-portfolio"] {
  --bg: #f3f1ec;
  --bg-2: #eae7e0;
  --surface: #ffffff;
  --surface-2: #e4e0d7;
  --ink: #0e0e0d;
  --ink-soft: #55534d;
  --ink-faint: #8b8880;
  --accent: #1f45d6;
  --accent-ink: #ffffff;
  --line: rgba(14,14,13,.14);
  --radius: 2px;
  --radius-lg: 6px;
  --shadow: 0 0 0 1px var(--ink);
  --shadow-hard: 0 0 0 2px var(--accent);
  --font-display: "Archivo Black", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: -.02em;
  --blur: 0px;
  --grain: .01;
  --danger: #c0392b;
  --danger-ink: #fff6f4;
  --ok: #2f7d4f;
  --warn: #a5761b;
}
```

Koyu mod bloğu `styles/147-agency-portfolio/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="agency-portfolio"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
