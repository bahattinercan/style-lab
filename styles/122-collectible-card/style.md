# 122 · Collectible Card

> **Bir cümleyle:** Koleksiyon kartı: sabit 5:7 oran, 6px içeri çekilmiş ikinci çerçeve, sol üstte holo bant ve altta mono stat şeridi.

| | |
|---|---|
| **Hissiyat** | toplanabilir, değerli, taktik, "elden ele geçen" |
| **En iyi** | koleksiyon kartı ürünü (dijital kart, oyun envanteri), albüm/koleksiyon yönetimi, nadirlik vitrini, turnuva/sezon ödülü |
| **Kaçın** | bankacılık işlem onayı, sağlık formu, uzun okuma sayfası, sade kurumsal vitrin |
| **Zorluk** | orta (kart oranı + katman disiplini) · **Erişilebilirlik** | iyi (16.04:1 gövde, 6.44:1 accent üstü) |
| **Aile** | Oyuncul & Duygusal (116–125) · **Token** | `kit/tokens.css` → `[data-style="collectible-card"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Collectible Card, fiziksel kartın **ölçüsünü** korur: kart `aspect-ratio: 5/7` (2.5×3.5 inç), kenardan **6px içeri çekilmiş ikinci 1px çerçeve**, sol üstte **45° holo bant** (`%50` opaklık) ve alt **%20'de üç hücreli stat şeridi** (mono, `tabular-nums`). Tipografi taktik dildir: Chakra Petch 600 başlık, Jost gövde, JetBrains Mono etiket ve sayı. Accent moru (`#5c33e0`) kartın kimliğini taşır; nadirlik **renkle değil** metinle (`Nadir · 0042/1200`) yazılır.

Kazandığı şey: **sahiplik hissi**. Kart, ekranın içinde "başka bir nesne" gibi durur; set numarası ve stat şeridi onu koleksiyonun parçası yapar. Feda ettiği şey: **akışkanlık** — bu ölçü 5:7'ye kilitli olduğu için geniş ekranlarda boşluk bırakır; liste/tablo ekranlarında kart küçültülür, oran asla değişmez.

### Ne değildir
- **Bento Grid (05) değildir.** Bento değişken oranlı kutularla modüler düzen kurar; burada **tek oran** (5:7) ve katmanlı çerçeve var, kutular birbirine benzemez çünkü hepsi karttır.
- **Neo-Brutalism (13) değildir.** Neo-brutalism 2-3px siyah kenar ve sert gölgeyle kaba dil kurar; burada kenar 1px, gölge yumuşak (`0 10px 24px`), radius 10/16px.
- **Skeuomorphism (34) değildir.** Skeuomorphism malzeme dokusunu (deri, metal) taklit eder; burada doku yok, yalnız holo **bant** ve ince grain `.02`.
- **Y2K (19) değildir.** Y2K krom/parlak plastik ve cam efektleriyle dönemsel nostalji kurar; burada mat yüzey ve tek accent.
- **"Kutu + gölge" değildir.** 5:7 oran, 6px iç çerçeve, holo bant ve stat şeridi olmadan bu stil sıradan bir kart bileşenidir.

### Nereden gelir
Koleksiyon kartı 19. yy sonunda tütün kartlarıyla başladı, 1990'larda oyun kartlarıyla (TCG) standartlaştı: **2.5×3.5 inç**, ön yüzde görsel + tip + metin, alt şeritte istatistik, köşede set numarası. Dijitalde aynı biçim oyun envanterlerine ve koleksiyon uygulamalarına geçti; nedeni ölçülebilir — sabit oran, farklı üreticilerin kartlarını aynı ızgarada birleştirir.

Klişeye düşmemesi için korunması gereken detay: **oran ve katman**. Kartı kareye çevirmek, holo bandı tüm yüzeye yaymak veya nadirliği renkle kodlamak stili "oyuncak vitrin"e çevirir.

### 3 saniyede tanıma testi
1. Kart **5:7 oranında** mı (dikey, ince uzun); kare kart var mı?
2. Kenardan **6px içeride ikinci 1px çerçeve** görünüyor mu?
3. Sol üstte **45° taramalı holo bant** var mı; ekranın başka yerinde yok mu?
4. Alt şeritte **üç hücreli mono stat** (ör. `7 · 4 · 2`) ve set numarası (`0042/1200`) var mı?
5. Nadirlik **metinle** mi yazılı (renkli rozet yok); gölge tek katman mı?

## Görsel imza
1. **Sabit oran:** `aspect-ratio: 5/7`; kart, küçük listede bile oranını korur (grid içinde de sabit).
2. **Katmanlı çerçeve:** `inset: 6px` ikinci `1px` çerçeve, `accent %40`; kart ile içerik arasında 6px nefes.
3. **Holo bant:** `repeating-linear-gradient(45deg, accent %55 0 2px, transparent 2px 9px)`, kartın sol üst %60×%160 alanında, opacity `.50`.
4. **Stat şeridi:** kartın alt %20'si; 3 hücre, 1px dikey çizgi, mono 13px `tabular-nums`.
5. **Nadirlik taşı:** 22px accent kare, `rotate(45deg)`, çevresinde 4px `%22 accent` halka; landing'de 1 adet.
6. **Deste:** iki ofset çerçeve (6px ve 12px kaydırma), `rotate(-3deg)`; gölge çoğaltılmaz.
7. **Tip ikonu:** 20px tek renk sembol, kartın sağ üstünde; ikinci ikon yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#eef1f7` | Sayfa zemini (binder sayfası) | Kart içi |
| `--bg-2` | `#e5e9f2` | Filtre şeridi, alt bilgi | Geniş dolgu |
| `--surface` | `#ffffff` | Kart yüzeyi, panel, modal | Sayfa zemini |
| `--surface-2` | `#e9edf6` | Chip, ikincil buton hover | Metin arkası |
| `--ink` | `#131521` | Kart başlığı, gövde, sayılar | Accent zemin üstü |
| `--ink-soft` | `#474b5c` | Lede, kart metni, açıklama | Stat şeridi sayıları (o `--ink`) |
| `--ink-faint` | `#767b8c` | Set no, dekoratif etiket | Etkileşimli metin |
| `--accent` | `#5c33e0` | Holo bant, iç çerçeve, nadirlik taşı, birincil buton | Gövde metni |
| `--accent-ink` | `#f7f4ff` | Accent üstü metin | Accent olmayan zemin |
| `--line` | `rgba(19,21,33,.16)` | Kart kenarı, tablo çizgisi | Holo bant |

- Ölçülen kontrast: `ink / bg` = **16.04:1** · `ink-soft / bg` = **7.64:1** · `accent-ink / accent` = **6.44:1** · `ink-faint / bg` = **3.73:1** (yalnız dekoratif).
- Tek vurgu kuralı: mor accent ekranın **≤ %10**'u; nadirlik renkle kodlanmaz, mono metinle yazılır.
- Yasak kombinasyon: accent zemin + `--ink-soft`; `--ink-faint` + `--surface-2` (3.1:1); ikinci accent (altın = efsanevi, gökkuşağı = holo).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch | 48px (mobil 32px) | 600 | 1.02 | 0.01em |
| H2 | Chakra Petch | 28px | 600 | 1.1 | 0.01em |
| H3 (kart adı) | Chakra Petch | 19px | 600 | 1.24 | 0.01em |
| Gövde (kart metni) | Jost | 15.5px | 400 | 1.66 | 0 |
| Stat / mono | JetBrains Mono | 13px | 400 | 1.3 | 0.02em |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.4 | 0.12em |

- Ölçek oranı ≈ 1.6 (15.5 → 28 → 48); kart yüzeyinde en fazla 3 punto (19 / 13 / 11).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4vw, 48px) }`.
- Gövde metni maksimum satır uzunluğu: **52ch**; kart içi metin 34ch (dar kolon).
- Ağırlık kuralı: display 600 (Chakra Petch'te 700 sahte kalın sayılır), gövde 400, stat 400 ama mono + tabular.
- Stat şeridi sayıları asla serif/sans karışık yazılmaz: tek mono, eşit genişlik, sağa dayalı.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (kart ızgarası 2 / 3 / 4 sütun) |
| Gutter | 20px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 / 768 / 390 — 768 altında 2 sütun, 390'da 1 sütun; oran 5:7 sabit |

- Asimetri kuralı: hero'da 1 büyük kart solda + istatistik paneli sağda; kart ızgarası simetrik. Ekran başına 1 büyük kart.
- Bölüm ritmi: art arda en fazla **4** kart satırı; beşincide 24px boşluk ve set başlığı.
- Bölüm dikey boşluk 80px (mobil 48px); kart padding 18px; kart arası 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | Sayfa, filtre şeridi |
| Kart | `--surface` + `--shadow` | `0 10px 24px rgba(19,21,33,.14)` | Koleksiyon kartı |
| Panel | `--surface` + 1px `--line` | `none` | Liste, ayar, KPI |
| Yüzen katman | `--surface` + `--shadow` | aynı | Kart detay modalı |

- Kenarlık formülü: kart `1px solid var(--line)` + iç `1px solid color-mix(accent 40%)`; panel `1px --line`.
- Derinlik nereden gelir: **tek gölge + katmanlı çerçeve**; iç gölge, çift gölge, blur yok.
- Radius: `--radius` 10px (küçük kart, panel) · `--radius-lg` 16px (büyük kart, modal). Buton/chip 2px (kart köşesiyle çelişmesin).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 12px 16px | 2px | 11px/400 mono, .1em | `--accent` / `--accent-ink`, gölge yok | hover %90 200ms · active translateY(1px) · focus 2px accent + 1px offset · disabled opacity .4 kesikli · loading `◆◆◆` |
| Buton (ikincil) | 44px | 12px 16px | 2px | 11px/400 mono | şeffaf / `--ink`, 1px `--line` | hover `--surface-2` · focus aynı |
| Input (arama) | 44px | 0 10px | 2px | 15.5px/400 Jost | `--surface` + 1px `--line` | focus 2px accent + 1px offset · error `--danger` + mono açıklama |
| Kart | — | 18px | 16px | kart adı Chakra 19px | `--surface` + `--shadow` + iç çerçeve | hover: 1.038 ölçek, 200ms |
| Chip (nadirlik/tip) | 20px | 0 6px | 2px | 10px/400 mono | `--surface-2` + 1px `--line` | accent varyantı dolu (seçili set) |
| Nav | 56px | 0 36px | 0 | marka Chakra 18px + mono 11px | `--bg` + alt 1px `--line` | sağda koleksiyon sayacı (mono, tabular) |
| Tablo satırı | 40px | 10px 12px | 0 | ad Jost 15.5, set/adet mono | alt 1px `--line` | hover `--surface-2` · seçili: sol 2px accent |
| Modal (kart detay) | — | 24px | 16px | H2 Chakra 28px | `--surface` + `--shadow` | 26px yukarıdan 0.7s; iç 6px çerçeve |
| Toast | 40px | 10px 14px | 2px | 12px/400 mono | `--ink` zemin / `--bg` metin | 6px accent kare, 2800ms |
| Grafik (nadirlik dağılımı) | — | — | — | eksen 10px mono | `--accent`, `--ink-soft`, `--ink-faint` | en fazla 3 sütun, 2px radius |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px`; accent butonda `outline-color: var(--accent-ink)`, offset -3px.
- Dokunma hedefi: en az 44×44px — küçük kartlarda tüm kart dokunma hedefidir (min 140×196px).
- Kart hover'ında 3B döndürme yok; yalnız 1.038 ölçek ve gölge %10 koyulaşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi veya 2px dolu sembol (tip), 20px ızgara, tek renk |
| Fotoğraf | Kartın üst %60'ında 5:7 kadraj; doygunluk düşük, sade fon |
| İllüstrasyon | Tek karakter/nesne, kart içinde; kart dışında illüstrasyon yok |
| Doku | Holo bant (45°, %50) + `--grain: .02` |
| Logo alanı | Chakra Petch kelime markası (.06em), 20px güvenli boşluk; kare monogram serbest |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 1 büyük kart + holo bant + deste ofseti | `shots/01-landing.png` |
| Dashboard | orta | Koleksiyon sayacı + nadirlik dağılımı; kartlar küçük | `shots/02-dashboard.png` |
| Form | düşük | 44px alanlar, 2px radius, mono etiket | — |
| Liste / tablo | yüksek | 40px satır: ad, set (mono), nadirlik (chip), adet | — |
| Boş durum | orta | Boş deste çerçevesi + tek cümle + 1 buton | — |
| Onboarding | yüksek | 3 adım: set seç → kart incele → desteye ekle | — |
| Pricing | orta | 3 paket; önerilen pakette accent iç çerçeve | — |
| Giriş / ödeme | düşük | Dekor sıfır; 44px alan + tek accent buton | — |
| Modal | orta | Kart detayı: 5:7 kart + stat şeridi + set no | — |
| Bildirim / toast | orta | Kazanım bildirimi: mono + 6px accent kare | — |
| Hata | düşük | `--danger` kenar + mono açıklama; holo bant yok | — |
| Profil / ayar | orta | Koleksiyon özeti: kart sayısı, set ilerlemesi | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 120ms | `ease-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 200ms | `ease-out` | `opacity` |
| Giriş (enter) | **700ms** | `cubic-bezier(.16,.9,.24,1)` | `opacity` + `translateY(26px)`, **stagger 80ms**; kart masadan kalkar |
| Kaydırma (scroll) | **780ms** | `cubic-bezier(.16,.9,.24,1)` | trigger **`top 81%`**, offsetY **22px**, `once: true` |
| Hover | **200ms** | `ease-out` | görsel ölçek **1.038** |
| Pin | **açık** | `scrub 1.05` | kart destesi sabitlenir, mesafe **+120%** |
| Ödül / vurgu | 340ms | `cubic-bezier(.16,.9,.24,1)` | nadirlik taşı 22 → 26px, tek atım |

- İmza ölçüsü: enter **0.7s / 26px / stagger 0.08** · scroll **0.78s / `top 81%` / 22px** · hover **200ms / 1.038** · pin **açık (scrub 1.05 / +120%)** — `tokens.json → motion.sequences` ile birebir.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, kart ve deste statik kalır.
- Bu stile yasak hareket: 3B tilt/döndürme, parallax, sürekli holo kayması, spring/bounce.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#eef1f7` | `#0d0e15` |
| `--bg-2` | `#e5e9f2` | `#12131c` |
| `--surface` | `#ffffff` | `#171926` |
| `--surface-2` | `#e9edf6` | `#1f2231` |
| `--ink` | `#131521` | `#eceaf5` |
| `--ink-soft` | `#474b5c` | `#b0aec0` |
| `--ink-faint` | `#767b8c` | `#86849a` |
| `--accent` | `#5c33e0` | `#a48bff` |
| `--accent-ink` | `#f7f4ff` | `#0f0d18` |
| `--line` | `rgba(19,21,33,.16)` | `rgba(236,234,245,.16)` |

- Koyu mod **turnuva gecesi**: zemin `#0d0e15`, kart `#171926`; accent açılır (`#a48bff`) çünkü mor koyu zeminde iç çerçeveyle karışır.
- Holo bant koyuda `%45` opaklığa düşer (açık renk koyu zeminde daha parlak okunur, holo taklidi abartıya kaçar).
- `filter: invert()` yasak; palet elle yazılır, `token-block.css` koyu bloğu tek kaynak.
- Koyu modda kontrast: `ink/bg` = **16.19:1** · `ink-soft/bg` = **8.86:1** · `accent-ink/accent` = **7.07:1** · `ink-faint/bg` = **5.30:1**.

## Zorunlu kurallar

1. **Oran sabit:** kart `aspect-ratio: 5/7`; hiçbir breakpoint'te kare/geniş karta dönmez.
2. **İkinci çerçeve:** 6px içeride 1px `accent %40`; tek çerçeve, kalınlaştırılmaz.
3. **Holo bant tek:** sol üst köşe, 45°, opacity `.50`; kart dışında kullanılmaz.
4. **Stat şeridi:** 3 hücre, mono tabular, kartın alt %20'si; hücre ayırıcı 1px.
5. **Set numarası:** `0042/1200` biçiminde mono; nadirlik metinle, renkle değil.
6. **Tek gölge:** `0 10px 24px`; deste hissi ofset çerçeveden gelir, gölge çoğaltılmaz.

## Yasaklar

- 3B tilt/döndürme, holografik eğim, mouse-follow ışık.
- Gradient holo parlaması, blur, cam yüzey.
- İkinci accent (altın, gökkuşağı) ve renkli nadirlik rozetleri.
- Kare kart, 20px üstü radius, pill buton.
- Kart yüzeyinde 3'ten fazla punto, 4'ten fazla renk.
- Sürekli holo kayması, parlayan/pulse animasyon.

## Erişilebilirlik

- Ölçülen riskler: en düşük çift `--ink-faint / --bg` = **3.73:1** — yalnız set numarası ve dekoratif etiket; set no okunurluğu kritikse `--ink-soft` (7.64:1) kullanılır.
- Kart içi metin 15.5px Jost + 1.66 satır aralığı; 11px altı yalnız mono etiketler, uzun cümle yazılmaz.
- 3B tilt yasak olduğu için vestibüler risk düşük; pin/scrub'lı deste `prefers-reduced-motion`'da sabitlenir.
- Holo bant dekoratif: `aria-hidden="true"`, `pointer-events: none`; nadirlik bilgisini metin taşır.
- Şeffaf yüzey yok (`--blur: 0`); `color-mix` desteklenmezse iç çerçeve `1px solid var(--line)`'a düşer.
- Odak görünürlüğü: 2px accent + 1px offset (6.44:1); accent butonda `--accent-ink` halka.

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
| Kart "kare kutu" olmuş | oran serbest bırakılmış | `aspect-ratio: 5/7` zorunlu |
| Holo her yerde | bant tüm yüzeye yayılmış | Yalnız sol üst %60×%160, opacity .50 |
| "Oyuncak vitrin" hissi | altın/gökkuşağı ikinci accent + glow | Tek mor accent; nadirlik metinle |
| Kart yüzeyi kalabalık | 4-5 punto, 3 ikon | 3 punto (19/13/11), 1 tip ikonu |
| Gölge "yüzüyor" | iki katmanlı gölge | Tek gölge; deste için ofset çerçeve |
| Stat sayıları kayıyor | orantılı sayı | `tabular-nums` + sağa dayalı mono |

## Komşu stiller

- **Uyumlu:** `bento-grid` — kart ızgarası mantığı ortak; bento yalnız panel katmanında, kart oranını ezmeden.
- **Uyumlu:** `kanban-flow` — kart/liste akışı ortak; kanban'da kart oranı esner, bu stil ezilmez.
- **Uyumlu:** `neo-brutalism` — koleksiyon vitrininde 1 bölüm; kenar kalınlığını bu stile taşırma.
- **Yasak:** `ethereal` — sis/nefes dili kartın nesne ağırlığını siler.
- **Yasak:** `wabi-sabi` — kasten kırık hizalama set disiplinini bozar.
- **Yasak:** `poetry-chapbook` — geniş kenar/şiir ölçüsü kart ızgarasını seyreltir.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Trading_card | 2.5×3.5 inç standart ölçü ve katmanlı çerçeve |
| https://en.wikipedia.org/wiki/Collectible_card_game | nadirlik sistemi, stat şeridi, set numarası |
| https://scryfall.com/ | kart detay hiyerarşisi (görsel, tip, metin, istatistik) |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | kart içi küçük metin kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Collectible Card (styles/122-collectible-card/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="collectible-card"] değişkenleri; hard-coded renk/golge/radius yasak.
Tipografi: display Chakra Petch 600 (H1 48px / .01em, mobil 32px), govde Jost 400 15.5/1.66 (<= 52ch),
  stat/etiket JetBrains Mono 13px tabular + 11px .12em. Kart yuzeyinde en fazla 3 punto.
Yuzey: kart aspect-ratio 5/7, radius var(--radius-lg), tek golge var(--shadow);
  kenardan 6px icerde ikinci 1px cerceve (accent %40). Panel golgesiz 1px var(--line).
Renk: binder grisi #eef1f7 + murekkep #131521 + tek accent mor #5c33e0 (ekranin <= %10'u).
  Nadirlik RENKLE degil mono metinle yazilir.
Imza: sol ust kose holo bant (45 derece accent tarama, opacity .50); 3 hucreli stat seridi (mono tabular);
  set numarasi 0042/1200; nadirlik tasi 22px 45 derece donuk kare (landing'de 1);
  deste = iki ofset cerceve (6px + 12px, -3 derece).
Hareket: enter 700ms cubic-bezier(.16,.9,.24,1) 26px stagger 80ms; scroll top 81% / 780ms / 22px / once;
  pin acik scrub 1.05 +120%; hover 200ms imageScale 1.038. prefers-reduced-motion zorunlu.
Yasak: 3B tilt/dondurme, gradient holo parlamasi, blur/cam, ikinci accent, kare kart,
  pill buton, 3'ten fazla punt, pulse/parlama dongusu.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (5:7 kart, iç çerçeve, holo bant, stat şeridi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1 (16.04:1), accent üstü ≥ 4.5:1 (6.44:1).
- [ ] Odak halkası görünür (2px + 1px offset), dokunma hedefi ≥ 44px (kart tamamı).
- [ ] 390px genişlikte taşma yok; kart oranı korunuyor.
- [ ] `prefers-reduced-motion` açıkken pin/scrub ve ölçek hareketi duruyor.

## Token

```css
[data-style="collectible-card"] {
  --bg: #eef1f7; --bg-2: #e5e9f2;
  --surface: #ffffff; --surface-2: #e9edf6;
  --ink: #131521; --ink-soft: #474b5c; --ink-faint: #767b8c;
  --accent: #5c33e0; --accent-ink: #f7f4ff;
  --line: rgba(19,21,33,.16);
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 10px 24px rgba(19,21,33,.14); --shadow-hard: none;
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: 0.02;
}
```

Koyu mod bloğu `token-block.css` içinde `[data-theme="dark"][data-style="collectible-card"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 6.18:1 · `ink-soft / surface-2` 7.37:1 · `accent-ink / accent` 6.44:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: folyo çerçeveli kart + derece rozeti + holo noktalar.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.7s` / `scroll 0.78s` (ikisi de ≤ 1.2 s).
