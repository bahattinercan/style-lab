# 57 · İşlenmiş Metal Panel

> **Bir cümlede:** Frezelenmiş alüminyum panelin dilini ekrana taşıyan arayüz: fırçalanmış yüzey, çift hairline bevel, gravür etiket ve tek amber durum noktası.

| | |
|---|---|
| **Hissiyat** | sağlam, pahalı, hassas, dokunulabilir |
| **En iyi** | donanım kontrol paneli, cihaz yönetimi, ses/görüntü ekipmanı UI'ı, endüstriyel ürün konfigüratörü |
| **Kaçın** | moda vitrini, çocuk uygulaması, hızlı tüketim kampanyası — metal dili burada "ağır" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | orta risk (bevel kontrastı düşürür; en düşük metin çifti 5.22:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="machined-metal-panel"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
İşlenmiş Metal Panel, arayüzü **fiziksel bir cihaz yüzeyi** gibi kurar: yatay fırçalanmış alüminyum zemin, her kontrolün üstünde 1px açık / altında 1px koyu iç hairline (bevel), etiketler gravür gibi mono büyük harf, durum tek amber nokta. Süsü azaltır, malzemeyi öne çıkarır.

Kurucu kararları üç tanedir. Birincisi **derinlik malzemeden gelir**: dış gölge değil, `inset` açık/koyu çift çizgi kontrolün basılabilir olduğunu söyler. İkincisi **etiket gravür dilindedir**: 9–10px mono, `.14em` tracking, büyük harf — okunurluk değil "kazınmışlık" önceliklidir, bu yüzden etiketler yalnız kısa kelimelerdir. Üçüncüsü **tek durum rengi**: amber (`--accent`) yalnız çalışır/dikkat durumunu bildirir; başka süs rengi yoktur.

Bedeli: uzun gövde metni metal zeminde yorucudur. Panel bu yüzden **kontrol yüzeyi** olarak kullanılır; uzun okuma için `--surface` (daha açık, düz) kart gerekir.

### Ne değildir
- **Skeuomorphism (34) değildir:** 34 gerçek malzeme fotoğrafı, çok katmanlı gölge ve deri/ahşap dokusu kullanır; Panel'de fotoğraf ve dış gölge yoktur, bevel tek formüldür (inset 1px açık + 1px koyu).
- **Blueprint Çizimi (56) değildir:** 56 koyu cyanotype zemin ve görünür çizim ızgarası taşır; Panel açık metal zemin ve yatay fırçalama izi kullanır.
- **Glassmorphism (08) değildir:** 08 ışığı kırar (backdrop-filter, yarı saydamlık); Panel opaktır, ışık yalnız üst kenarda 1px.
- **Neumorphism (10) değildir:** 10 yumuşak çift gölgeyle zeminden "şişirir"; Panel'de blur yok, sadece 1px hairline ve 3–6px radius.

### Nereden gelir
1970–90'lar lab ekipmanı ve stüdyo cihaz panellerinden: fırçalanmış alüminyum, gravür etiket, tek amber LED. Bugün geri dönüyor çünkü yazılım ürünleri "fiziksel cihaz" hissi ile güven arıyor; klişeye dönmemesi için korunacak detay **bevel'in 1px'te kalması** ve etiketlerin gerçekten kısa olması (2–3 kelime).

### 3 saniyede tanıma testi
1. Zemin açık gri metal; yatay 1px fırçalama izleri görünür.
2. Her panelin üst kenarında 1px açık, alt kenarında 1px koyu çizgi (bevel).
3. Etiketler 9–10px mono, büyük harf, geniş tracking — cümle değil kelime.
4. Kartların üst-sağ köşesinde 5px vida izi halkası var.
5. Ekranda tek doygun renk: amber; ve yalnız 6px nokta olarak.

## Görsel imza
- **Fırçalanmış zemin:** `repeating-linear-gradient(180deg, ink %5 0 1px, transparent 1px 3px)` — yalnız yatay, dikey grain yasak.
- **Bevel formülü:** `--shadow: inset 0 1px 0 rgba(255,255,255,.55), inset 0 -1px 0 rgba(20,24,26,.18)`; dış gölge yok.
- **Panel kenarı:** nav ve büyük panelde üst 2px açık + alt 1px koyu çift hairline.
- **Vida izi:** kartın üst-sağ köşesinde 5px halka (`border: 1px ink %26`), tek adet.
- **Gravür etiket:** 9px mono, `.14em`, uppercase, `--ink-soft`; 12 karakteri geçmez.
- **Amber durum noktası:** 6px daire, `--accent`, etiketin solunda 6px boşlukla.
- **Hareket imzası:** 260ms `cubic-bezier(.28,1.46,.58,1)` (hafif overshoot) — kontrol "yerine oturur".

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#d5d8da` | sayfa zemini (ana metal) | metin arkası düz blok |
| `--bg-2` | `#c9cdd0` | gömük alan: input, oluk | kart zemini |
| `--surface` | `#e2e5e7` | kart / panel (açık metal) | sayfa zemini |
| `--surface-2` | `#eceef0` | buton yüzeyi, üst katman | sayfa zemini |
| `--ink` | `#1b1f22` | başlık, gövde, gravür etiket koyu | dekoratif çizgi |
| `--ink-soft` | `#4e565c` | ikincil metin, gravür etiket | başlık |
| `--ink-faint` | `#6b7379` | yalnız vida izi ve ayırıcı | etkileşimli metin, etiket |
| `--accent` | `#9c4a0c` | durum noktası, aktif kontrol, birincil eylem | geniş dolgu alanı |
| `--accent-ink` | `#ffffff` | accent dolgu üstü metin | accent üstü ikincil metin |
| `--line` | `rgba(27,31,34,.18)` | kenarlık ve hairline | metin rengi |

- Ölçülen kontrast: `ink / bg` = **11.59:1** · `ink-soft / bg` = **5.22:1** · `accent-ink / accent` = **6.18:1** · `ink-faint / bg` = **3.37:1** (yalnız vida izi ve ayırıcı).
- Tek vurgu kuralı: bir ekranda tek amber. Durum ayrımı gerekiyorsa `--ok` (`#1a6b3c`) ve `--danger` (`#a3261c`) yalnız metin + nokta biçiminde, yanına etiket yazılarak kullanılır.
- Yasak kombinasyon: amber dolgu üstünde `--ink-soft`; `--surface-2` üstünde `--ink-faint` metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma (`--font-display`) | 38px (mobil 24px) | 400 | 1.14 | `.06em` |
| H2 | Michroma | 26px | 400 | 1.20 | `.04em` |
| H3 | Michroma | 19px | 400 | 1.30 | `.04em` |
| Gövde | Jost (`--font-body`) | 16px | 400 | 1.58 | `0` |
| Küçük gövde | Jost | 12px | 400 | 1.5 | `0` |
| Etiket / gravür | IBM Plex Mono (`--font-mono`) | 9–10px | 500 | 1.4 | `.14em` |

- Ölçek oranı: **1.4** — kullanılan basamaklar 9 · 10 · 12 · 16 · 19 · 26 · 38.
- Ölçü önerisi: `h1 { font-size: clamp(24px, 3.4vw, 38px); letter-spacing: .06em; text-transform: uppercase }`.
- Gövde satır uzunluğu en fazla **62ch**; metal zeminde 66ch üstü yorucu.
- Ağırlık kuralı: Michroma yalnız 400 (ailesi tek ağırlık); Jost 400/500; mono 500. 700+ yasak (gravür hissi kaybolur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 16px |
| Container genişliği | 1200px (içerik 1168px) |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 390 / 768 / 1200; 768 altında tek kolon, panel padding 18→12px |

- Asimetri kuralı: ekran başına en fazla **1** asimetrik blok (8/4). Panel simetrisi tercih edilir — cihaz yüzeyi simetriktir.
- Bölüm ritmi: art arda en fazla **4** aynı hizada panel; beşincisi tam genişlik "şasi" şeridi olur.
- Vidalar 4 köşede hizalıdır: iç boşluk 16px'ten az olamaz (vida izi metne binmez).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | şasi + gömük oluk (input) |
| Kart | `--surface` | `var(--shadow)` = inset açık/koyu bevel | panel, kart, KPI |
| Yüzen katman | `--surface-2` + bevel | bevel + `0 2px 6px rgba(20,24,26,.28)` | modal, menü, toast |

- Kenarlık formülü: `1px solid var(--line)` + `inset 0 1px 0 rgba(255,255,255,.55)` + `inset 0 -1px 0 rgba(20,24,26,.18)`.
- Derinlik nereden gelir: **malzeme** (bevel + fırçalama). Dış gölge yalnız yüzen katmanda; blur 6px'i geçmez.
- Radius: `--radius: 3px` (buton, input, chip), `--radius-lg: 6px` (kart, panel, modal). Üst sınır 6px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 38px | `0 16px` | 3px | 11px mono 500 uppercase `.12em` | `--surface-2` + `var(--shadow)` bevel | hover: 1 ton koyu · active: inset 1px aşağı · focus: 2px accent outline + 2px offset · disabled: opacity .5, bevel kalkar · loading: sağ uçta 8px amber nokta (2s) |
| Buton (ikincil) | 38px | `0 16px` | 3px | 11px mono | `--bg-2` + 1px `--line`, `--ink-soft` metin | hover: `--surface` zemin |
| Input | 38px | `0 12px` | 3px | 12px body | `--bg-2` + `inset 0 1px 2px ink %16` (gömük) | focus: 2px accent outline offset 1px, iç gölge kalkar · error: `--danger` çerçeve + 9px mono hata etiketi · disabled: opacity .55 |
| Kart | içerik | 18px | 6px | H3 + gövde | `--surface` + bevel + üst-sağ vida izi | hover: bevel %10 güçlenir |
| Chip / badge | 20px | `0 8px` | 3px | 9px mono 500 `.14em` | `--bg-2` + 1px `--line` | accent: amber dolgu + beyaz metin |
| Nav | 52px | `0 24px` | 0 | 10px mono `.12em` | `--surface` + üst 2px açık + alt 1px koyu | aktif: amber metin + 2px alt çizgi |
| Tablo satırı | 34px | `6px 10px` | — | 13px body, tabular-nums | satır arası 1px `--line` | hover: `--surface-2` |
| Modal / sheet | içerik | 20px | 6px | 19px display + gravür başlık | `--surface-2` + bevel + `0 2px 6px ink %28` | açılış: 4px oturma (overshoot) |
| Toast | 34px | `8px 12px` | 3px | 11px mono | `--surface-2` + bevel, sol uçta 6px amber nokta | hata: nokta `--danger` |
| Grafik paleti | — | — | — | — | `--accent`, `--ink`, `--ok`, `--danger` | en fazla 4 seri; ızgara 1px `--line` |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`. Metal zeminde offset 1px yetmez — outline bevel'e biner.
- Dokunma hedefi: en az 44×44px; 38px buton mobilde `min-height: 44px` ile büyütülür. Vida izi dekoratiftir, `aria-hidden`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 2px köşe, 20px ızgara; dolgu yok |
| Fotoğraf | yalnız makro malzeme karesi (tek), doygunluk düşük, 4px radius kırpma |
| İllüstrasyon | yok — malzeme ve gravür yeterli |
| Doku | yatay fırçalama 1px/3px + grain %3; dikey iz yasak |
| Logo alanı | gravür etiket: tek satır mono uppercase, sol üst vida hizası, 16px çevre boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | ortalanmış cihaz görseli + iki yanında gravür ölçü bloğu | `shots/01-landing.png` |
| Dashboard | düşük | panel ızgarası 3×2; her KPI'da amber nokta + etiket | `shots/02-dashboard.png` |
| Form | düşük | gömük input, etiket üstte 9px mono | — |
| Liste / tablo | düşük | 34px satır, sağa dayalı tabular sayı | — |
| Boş durum | orta | gömük oluk + "SİNYAL YOK" gravür etiketi | — |
| Onboarding | yüksek | her adım bir kontrol paneli; amber nokta ilerlemeyi gösterir | — |
| Pricing | orta | üç panel; öne çıkan panelde amber üst şerit (2px) | — |
| Giriş / ödeme | çok düşük | bevel korunur, amber yalnız birincil eylemde | — |
| Modal | orta | yüzen panel + tek dış gölge 6px | — |
| Bildirim / toast | orta | alt-sağ, amber nokta + mono metin | — |
| Hata | düşük | nokta `--danger`, çerçeve 1px danger; zemin değişmez | — |
| Profil / ayar | orta | sol etiket kolonu 4/8; her satır gömük oluk | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **260ms** | `cubic-bezier(.28,1.46,.58,1)` | `opacity` + `translateY(4px)`; stagger **0.02s** |
| Scroll reveal | **280ms** | aynı eğri | trigger `top 87%`, `translateY(11px)`, `once: true` |
| Pin / scrub | **0.62** | `transform` | **açık** — cihaz görseli `+84%` mesafede pin + scrub |
| Basma | **80ms** | `cubic-bezier(.28,1.46,.58,1)` | `translateY(1px)`, bevel inset'e döner |
| Geçiş / sayfa | 160ms | aynı eğri | opacity + 4px |
| Hover | **110ms** | aynı eğri | görsel ölçek **1.008** |
| Ödül / vurgu | 280ms | aynı eğri | amber nokta 6px→8px, tek kez |

- İmza ölçüleri: `enter = 0.26s / cubic-bezier(.28,1.46,.58,1) / 4px / 0.02` · `scroll = top 87% / 0.28s / 11px / once` · `pin = true / scrub 0.62 / +84%` · `hover = 110ms / 1.008`.
- Aynı banttaki komşulardan fark: 56'dan (0.36s / 6px / 0.045) dört, 58'den (0.14s / linear / 16px) dört, 59'dan (0.44s / 20px / scrub 0.95) dört, 60'tan (0.58s / 12px / scrub 1.45) dört parametrede ayrışır. Mevcut 59 stil içinde en yakını 62-warehouse-flow (8 parametre farkı).
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin devre dışı, amber nokta sabit.
- Bu stile yasak hareket: sürekli parlama, blur geçişi, sürekli döngü (soğutma fanı), parallax.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#d5d8da` | `#1a1d1f` |
| `--surface` | `#e2e5e7` | `#24282b` |
| `--ink` | `#1b1f22` | `#e6e9ea` |
| `--accent` | `#9c4a0c` | `#e59244` |
| `--ink-soft` | `#4e565c` | `#aeb6ba` |
| `--line` | `rgba(27,31,34,.18)` | `rgba(230,233,234,.18)` |

- Koyu modda değişen başka ne var: bevel formülü tersine döner (üst kenar daha az açık, alt kenar daha az koyu) — siyah zeminde açık hairline parlar; amber bir ton açılır (`#e59244`), durum noktası 6px kalır.
- `filter: invert()` yasak; palet elle yazılır (`palette.dark`). Koyu modda fırçalama izi opaklığı %5 → %4.

## Zorunlu kurallar
- Bevel formülü zorunlu: inset üst 1px açık + inset alt 1px koyu; dış gölge yalnız yüzen katmanda (≤6px blur).
- Etiketler gravür dilinde: mono, uppercase, `.14em`, 9–10px, en fazla 12 karakter.
- Radius 3px (kontrol) / 6px (kart); hap biçimli köşe yok.
- Malzeme dokusu yatay; dikey fırçalama ve çapraz metallik gradyan yasak.
- Durum tek amber nokta + metin; renk tek başına anlam taşımaz.
- Panel kenarında üst 2px açık / alt 1px koyu çift hairline.

## Yasaklar
- Saf beyaz `#ffffff` zemin.
- Neon glow, cam yüzey, çok renkli gradyan parlama.
- 12px üstü radius, hap buton.
- Serif, el yazısı, 700+ ağırlık.
- Emoji ve dolu renkli ikon.
- Metal üstünde büyük yumuşak gölge (ağırlık hissi bozulur).

## Erişilebilirlik
- Ölçülen en düşük metin çifti `ink-soft / bg` = **5.22:1** (eşik 4.5); `--ink-faint` = **3.37:1** yalnız vida izi ve ayırıcıda — metin olarak kullanılmaz.
- Bevel kontrastı metni yiyebilir: gövde metni daima `--ink` (11.59:1); 12px altı metinde `--ink-soft` kullanılmaz.
- Hareket/parlama hassasiyeti: orta — amber nokta yanıp sönerken 2s periyot, saniyede 3 flash yok; `prefers-reduced-motion` noktayı sabitler.
- Şeffaf yüzey yok; opak fallback gerekmez. Bevel `@supports` ile desteklenmezse 1px düz `--line` çerçeveye düşer.
- Odak görünürlüğü: metal zeminde 2px accent outline **offset 2px**; offset 1px bevel'e biner ve görünmez.

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
| Panel "plastik" görünüyor | bevel yerine dış gölge kullanılmış | `var(--shadow)` inset çift çizgi; dış gölge yalnız modal |
| Metin okunmuyor, gri üstü gri | `--ink-soft` küçük puntoda | gövde `--ink`; `--ink-soft` ≥14px |
| Metal dokusu gürültü yapıyor | grain %3 üstü veya dikey iz | grain %3 sabit, iz yatay |
| Etiketler cümle olmuş | gravür dilinde uzun metin | 2–3 kelimeye kısalt, açıklamayı gövdeye taşı |
| Buton basılabilir hissettirmiyor | bevel eksik / aynı yüzey tonu | `--surface-2` + bevel + active'te inset |
| Koyu modda kenarlar parlıyor | aynı bevel opaklığı | bevel açık kenarını %55 → %28'e düşür |

## Komşu stiller

- **Uyumlu:** `skeuomorphism` — aynı malzeme gerçekçiliği; Skeuo yalnız tek bileşende (ör. düğme) garnitür.
- **Uyumlu:** `terminal-ui` — alt panel/telemetri olarak; ikisi de mono etiket dilini paylaşır.
- **Uyumlu:** `scandinavian-dark` — koyu modda sakin zemin + metal panel birlikte okunur.
- **Yasak:** `glassmorphism` — iki farklı ışık fiziği (kırılma vs bevel) çelişir.
- **Yasak:** `ethereal` — sis/ışıma dili metalin kesinliğini bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Brushed_metal | fırçalama iz yönü ve aralığı |
| https://en.wikipedia.org/wiki/Anodizing | mat yüzey, renk doygunluğu |
| https://teenage.engineering/ | gravür etiket + kontrol paneli tipografisi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | bevel ve hairline kontrastı |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: İşlenmiş Metal Panel (styles/57-machined-metal-panel/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="machined-metal-panel"] değişkenleri; hard-coded renk/gölge/radius yasak.
Zemin: --bg açık metal + yatay fırçalama (repeating-linear-gradient 1px/3px, color-mix var(--ink) 5%).
Tipografi: --font-display Michroma 38/26/19 (400, uppercase, .04–.06em);
  --font-body Jost 16px/1.58; --font-mono IBM Plex Mono 9–10px gravür etiket (.14em, uppercase, ≤12 karakter).
Yüzey: --bg (şasi) / --surface (kart, var(--shadow) bevel) / --surface-2 + 0 2px 6px (yüzen).
  Bevel = inset 0 1px 0 açık + inset 0 -1px 0 koyu; dış gölge sadece modal.
Renk: tek vurgu amber #9c4a0c, yalnız 6px durum noktası ve birincil eylem. ink/bg 11.59:1, ink-soft/bg 5.22:1.
Bileşen: "Bileşen reçeteleri" birebir; buton 38px, 3px radius, bevel, mono uppercase.
Hareket: enter 260ms cubic-bezier(.28,1.46,.58,1) 4px stagger .02; scroll top 87% 280ms 11px once;
  pin scrub 0.62 (+84%); hover 110ms görsel 1.008. prefers-reduced-motion zorunlu.
Yasak: saf beyaz zemin, neon glow, cam, 12px üstü radius, serif, 700+ ağırlık, dolu renkli ikon.
Çıktı: bileşen kodu + tek paragraf not (bevel ve gravür etiketi nereye koydun).
```

**Teslim öncesi öz-denetim**
- [ ] İmza öğelerinden en az 2'si görünüyor: bevel çift hairline, gravür etiket, amber nokta, vida izi.
- [ ] Hard-coded renk/gölge/radius yok.
- [ ] Kontrast: `ink/bg` 11.59, `ink-soft/bg` 5.22, `accent-ink/accent` 6.18 — hepsi eşik üstü.
- [ ] Odak halkası 2px accent + 2px offset, metal zeminde görünür.
- [ ] 390px'te taşma yok, vida izi metne binmiyor.
- [ ] `prefers-reduced-motion` açıkken nokta ve geçişler duruyor.

## Token

```css
[data-style="machined-metal-panel"] {
  --bg: #d5d8da; --bg-2: #c9cdd0;
  --surface: #e2e5e7; --surface-2: #eceef0;
  --ink: #1b1f22; --ink-soft: #4e565c; --ink-faint: #6b7379;
  --accent: #9c4a0c; --accent-ink: #ffffff;
  --line: rgba(27,31,34,.18);
  --radius: 3px; --radius-lg: 6px;
  --shadow: inset 0 1px 0 rgba(255,255,255,.55), inset 0 -1px 0 rgba(20,24,26,.18);
  --shadow-hard: none;
  --font-display: "Michroma", "Jost", system-ui, sans-serif;
  --font-body: "Jost", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: .04em; --blur: 0px; --grain: 3;
  --danger: #a3261c; --danger-ink: #ffffff;
  --ok: #1a6b3c; --warn: #7a4f00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="machined-metal-panel"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
