# 38 · Organic / Biophilic

> **Bir cümlede:** Doğal büyüme mantığıyla kurulmuş arayüz: asimetrik yumuşak radius, toprak–yeşil palet, katmanlı yaprak dokusu ve insan ölçeğinde tipografi.

| | |
|---|---|
| **Hissiyat** | sakin, canlı, toprakî, davetkâr |
| **En iyi** | sağlık/iyilik uygulaması, uzun oturumlu çalışma aracı, gıda–tarım ürünü, eğitim platformu, sürdürülebilirlik markası |
| **Kaçın** | finans işlemi ve yoğun tablo, güvenlik/kripto paneli, 8+ saat izlenen kontrol odası, agresif kampanya sayfası |
| **Zorluk** | orta (radius asimetrisi + yeşil bütçesi) · **Erişilebilirlik** | iyi (13:1 gövde kontrastı, 4.78:1 accent üstü) |
| **Aile** | Organik (38) · **Token** | `kit/tokens.css` → `[data-style="organic-bio"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Organik / biyofilik tasarım, formu **büyümeden** türetir: hiçbir köşe 90° değildir, radius bir tarafta büyür (26px) diğer tarafta küçülür (8px), yüzeyler üst üste binen yaprak katmanları gibi okunur. Palet klorofil ve topraktan gelir — zemin sıcak kırık beyaz `#f3f1e7`, mürekkep koyu zeytin `#232a22`, tek aksan orman yeşili `#4f7a45`. Tipografi insan ölçeğindedir: display 54px Fraunces (serif, yumuşak optik), gövde 16px Nunito (yuvarlak uçlu sans).

Kazandığı şey: uzun oturumlarda **bilişsel yorgunluğu düşüren** bir yüzey — sert köşe ve blok gölge olmadığı için göz sürekli "kenar" taramaz. Feda ettiği şey: keskinlik ve operasyonel yoğunluk. 20 satırlık bir tabloda asimetrik radius ritmi okumayı yavaşlatır; bu yüzden stil veri ekranlarında **geri çekilir** (radius 26 → 18, blob ≤1, yeşil ≤%6).

### Ne değildir
- **Wabi-sabi (07) değildir.** Wabi-sabi hizayı bilinçli kırar, kusuru sergiler (grain ≥.10, eğik etiket). Burada hiza 12 kolonda **korunur**; asimetri yalnız radius yönünde ve tek köşede, sapma ≤0.5°.
- **Japandi (06) değildir.** Japandi düşük kontrast ve neredeyse renksiz nötrle çalışır (`ink/bg` ≈ 8:1); burada `ink/bg` **13.01:1**, aksan doygun yeşil ve 4.78:1.
- **Claymorphism (11) değildir.** Clay 28–40px radius + çift iç gölge (inset) kullanır; burada radius ≤26px, **inset gölge yok**, tek dış gölge var.
- **Ethereal (29) değildir.** Ethereal blur/parlama ile derinlik kurar; burada `--blur: 0px`, hiç `backdrop-filter` yok.
- **Bohemian (30) değildir.** Bohemian çoklu desen/kolajla dolar; burada ekran başına **tek doku** (grain .04) + ≤2 blob.

### Nereden gelir
1970'ler organik modernizmi (Aalto'nun vazo formları, Jacobsen'in damla sandalyesi), Kellert'in biyofilik tasarım çerçevesi (14 desen: doğal form, materyal bağlantısı, barınak hissi) ve 2020'lerin "soft tech" dalgası. Bugün tekrar kullanılmasının nedeni ölçülebilir: doğal form ve yeşil, ekran başında geçen sürede stres göstergelerini düşürüyor. Klişeye düşmemesi için korunması gereken detay: **asimetrik radius disiplini** — her köşeyi yuvarlamak "yumuşak tema" olur; tek köşeyi küçültmek büyüme yönü verir.

### 3 saniyede tanıma testi
1. En küçük radius **18px**; büyük yüzeyde bir köşe **8px**'e düşüyor mu (asimetri)?
2. Zemin saf beyaz değil, sıcak kırık beyaz `#f3f1e7` mi; gölge tek ve yumuşak mı (`0 6px 18px`, blok gölge yok)?
3. Hero arkasında **en fazla 2** yumuşak blob var mı (opaklık .12–.18, blur yok)?
4. Display **serif** ve 54px mi (Fraunces, line-height 1.08), gövde 16px Nunito mu?
5. Yeşil ekranın **≤%14**'ünde mi; ikinci bir aksan rengi yok mu?

## Zorunlu kurallar

1. **Radius çifti:** `--radius: 18px` (input, chip kabı, küçük yüzey), `--radius-lg: 26px` (kart, modal, hero). Büyük yüzeyde asimetrik tek köşe: `26px 26px 26px 8px`; yön ekran başına sabit (sol-alt).
2. **Tek gölge:** yalnız `0 6px 18px rgba(35,42,34,.10)`; `--shadow-hard: none`. İkinci gölge katmanı, inset gölge, blok gölge yok.
3. **Blob bütçesi:** ekran başına ≤2 katman, toplam alan ≤%22, opaklık .12–.18, `filter: none`, `pointer-events: none`; metnin üstünden geçmez.
4. **Yeşil bütçesi:** aksan alanı ≤%14 (veri ekranlarında ≤%6); ikinci aksan rengi yok, durum için `--danger`/`--ok`/`--warn` dışında renk eklenmez.
5. **Tipografi ölçeği:** display 54px (mobil 32px) Fraunces, gövde 16px Nunito, etiket 10.5px IBM Plex Mono. Altı basamak: `10.5 · 13 · 16 · 19 · 30 · 54`.
6. **Çizgi:** `1px solid var(--line)` = `rgba(35,42,34,.16)`. 3px ve üstü kalın kural, çift kenarlık yok.
7. **Boşluk ritmi:** bölüm arası 80px (mobil 52px), kart içi 26px, paragraf arası 16px; gövde ölçüsü ≤62ch.
8. **Asimetri:** hero 7/5 veya 8/4; ortalanmış 6/6 kompozisyon yasak. Ekran başına en az 1, en fazla 2 bölüm simetriden çıkar.

## Yasaklar

- Radius 0 veya keskin 90° köşe (buton, input, kart, chip — istisna yok).
- Blok/sert gölge, çok katmanlı gölge, inset gölge, neon glow.
- İki renk arası gradyan geçişi (mavi→mor, turuncu→pembe); `linear-gradient` renk karışımı yasak — yalnız tek renkten saydama giden radial maske (blob) serbest.
- Blur / cam (`backdrop-filter`), yarı saydam panel.
- Turuncu-terracotta, mavi, mor ikinci aksan; metalik/altın vurgu.
- 3px+ kalın kural, uppercase display başlık, dev tipografi (>72px).
- Ekran başına 2'den fazla doku/desen; foto kolaj.
- Sürekli nefes alan (scale 1→1.06) blob animasyonu, parallax, marquee.
- Gövde metninde uppercase, mono veya 300 ağırlık.

## Görsel imza
- **Asimetrik radius:** `.panel { border-radius: 26px 26px 26px 8px; }`, küçük yüzey `18px 18px 18px 6px`; köşe yönü ekran başına sabit (sol-alt), 2. yön kullanılırsa aynı ekranda karışmaz.
- **Pill buton:** `border-radius: 999px`, yükseklik 44px, `padding: 0 22px`; okunabilirlik için `min-height: 44px`.
- **Yaprak katmanı:** hero arkasında 2 radial maske — `radial-gradient(38% 42% at 24% 26%, var(--accent) 0%, transparent 62%)` opaklık .18 ve ikinci katman .12; `filter: none`, alan ≤%22.
- **Tek yumuşak gölge:** `0 6px 18px rgba(35,42,34,.10)`; yüzen katmanda `0 10px 26px rgba(35,42,34,.14)` — bu iki değer dışında gölge yok.
- **İnce çizgi:** `1px solid var(--line)`; hairline dekoratif serbest, 3px üstü yasak.
- **Serif display:** Fraunces 700, 54px, `line-height: 1.08`, `letter-spacing: -0.01em`, en fazla 3 satır.
- **Grain:** `--grain: .04` → örtü opaklığı `.20`, yalnız zemin katmanında, `mix-blend-mode: overlay`.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#f3f1e7` | sayfa zemini (sıcak kırık beyaz) | metin üstü |
| `--bg-2` | `#e7e4d6` | bölüm zemini, logo şeridi | kart yüzeyi |
| `--surface` | `#fbfaf4` | kart, input, modal | tam sayfa zemin |
| `--surface-2` | `#eeece0` | chip, ikincil yüzey, tablo hover | ana kart |
| `--ink` | `#232a22` | metin, başlık (**13.01:1**) | — |
| `--ink-soft` | `#55604f` | açıklama, lede (**5.85:1**) | başlık |
| `--ink-faint` | `#848b78` | dekoratif etiket (**3.12:1**) | etkileşimli metin |
| `--accent` | `#4f7a45` | birincil buton, grafik serisi, aktif durum | gövde metni |
| `--accent-ink` | `#fbfaf4` | accent üstü metin (**4.78:1**) | accent dışı zeminde |
| `--line` | `rgba(35,42,34,.16)` | 1px kenarlık, ayırıcı | metin |

- Ölçülen kontrast: `ink / bg` **13.01:1** · `ink-soft / bg` **5.85:1** · `ink-faint / bg` **3.12:1** · `accent-ink / accent` **4.78:1** · `ink / surface` **14.09:1** · `ink / surface-2` **12.42:1** · `accent / bg` **4.41:1** (yalnız ≥24px metin ve ikon).
- Tek vurgu kuralı: yeşil tek başına anlam taşır (aktif / CTA / büyüme). İkinci anlam katmanı renkle değil **radius ve çizgi** ile kurulur (nokta = durum, 1px kesikli = uyarı).
- Yasak kombinasyon: `--accent` üstü `--ink` (3.05:1 altı), `--ink-faint` üstü `--surface-2` (2.7:1), yeşil metin + yeşil zemin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces | 54px (mobil 32px) | 700 | 1.08 | `-0.01em`, cümle düzeni |
| H2 | Fraunces | 30px | 700 | 1.16 | `-0.005em` |
| H3 | Nunito | 19px | 700 | 1.3 | `0em` |
| Gövde | Nunito | 16px | 400 | 1.68 | `0em` |
| Etiket / mono | IBM Plex Mono | 10.5px | 400 | 1.2 | `0.14em`, uppercase |

- Ölçek oranı 1.5: kullanılan basamaklar **10.5 · 13 · 16 · 19 · 30 · 54** (6 basamak).
- Ölçü önerisi: `h1 { font-size: clamp(32px, 4.4vw, 54px); line-height: 1.08; letter-spacing: -0.01em; text-wrap: balance; }`
- Gövde maksimum satır uzunluğu: **62ch**; lede 48ch (blob'lu zeminde satır kısaltılır).
- Ağırlık kuralı: 400 ve 700 var; 300/500/600 kullanılmaz (Nunito 500 gövdede lekelenir). Fraunces **display dışında kullanılmaz**; 18px altına inmez.
- Fraunces **uppercase yazılmaz** (serif büyük harfte ritim kaybolur); etiketler mono uppercase ile kurulur.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 28px |
| Container genişliği | 1140px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 (`--space-1…8`) |
| Breakpoint davranışı | 640px altı tek kolon (gutter 20px); 640–900px 8 kolon (gutter 24px); 900px üstü 12 kolon |

- Asimetri kuralı: hero **7/5** veya **8/4**; ekran başına 1–2 bölüm simetriden çıkar. Radius asimetrisi her ekranda görünür ama tek yönlü.
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada durabilir; üçüncü blok ya tam genişlik ya 8/4 kırılım alır.
- Dikey ritim: bölüm arası 80px (mobil 52px); kart içi padding 26px; başlık ile gövde arası 12px; kart ile kart arası 24px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm zemini, grain katmanı |
| Kart | `--surface` + `1px var(--line)` | `0 6px 18px rgba(35,42,34,.10)` | içerik panelleri, tablo kabı |
| Yüzen katman | `--surface` + `1px var(--line)` | `0 10px 26px rgba(35,42,34,.14)` | modal, dropdown, öne çıkan pricing kartı |

- Kenarlık formülü: `border: 1px solid var(--line)`; iç ayırıcı `1px solid var(--line)` (aynı değer, opaklık artırılmaz).
- Derinlik nereden gelir: **tek yumuşak gölge + katman sırası**; ışık yönü sabit (üstten), gradient ile sahte ışık yok.
- Radius: `--radius: 18px` (input, chip, küçük yüzey: `18px 18px 18px 6px`), `--radius-lg: 26px` (kart, hero: `26px 26px 26px 8px`); modal `28px 28px 28px 10px`.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 22px | 999px | 13px/700 Nunito | `--accent` + `--accent-ink` | hover: `color-mix(in srgb, var(--accent) 88%, var(--ink))` · active: `translateY(1px)` + gölge `0 3px 10px` · focus: `outline: 2px solid var(--accent); outline-offset: 3px` · disabled: `opacity .45` · loading: 3 nokta 140ms |
| Buton (ikincil) | 44px | 0 20px | 999px | 13px/700 Nunito | `--surface` + `1px var(--line)`, gölge yok | hover: `--surface-2` · active: `translateY(1px)` |
| Input | 46px | 0 16px | 14px | 16px Nunito | `--surface` + `1px var(--line)` | focus: `outline: 2px solid var(--accent); outline-offset: 2px` · filled: kenar `--ink-soft` · error: kenar `--danger` + 13px hata satırı · disabled: `--surface-2` + `opacity .55` |
| Kart | içerik | 26px | 26px 26px 26px 8px | H2 30 + 16 | `--surface` + `1px` + `--shadow` | öne çıkan: gölge `0 10px 26px` |
| Chip / badge | 28px | 0 12px | 999px | 10.5px mono uppercase 0.14em | `--surface-2` + `1px var(--line)` | aktif: `--accent` + `--accent-ink`; dokunma hedefi padding ile 44px |
| Nav | 72px | 0 44px | — | 13px Nunito, aktif 700 | `--bg` + alt `1px var(--line)` | aktif: metin altında 2px `--accent`, `border-radius: 999px` |
| Tablo satırı | 56px | 14px 18px | 12px (satır kabı) | 15px Nunito, başlık 10.5px mono | `1px var(--line)` alt | hover: `--surface-2` · seçili: sol 3px `--accent` + `--surface-2` |
| Modal / sheet | içerik | 30px | 28px 28px 28px 10px | H2 30 + 16 | `--surface` + `1px` + `0 18px 44px rgba(35,42,34,.18)` | backdrop `rgba(35,42,34,.42)`; kapatma 44×44 pill |
| Toast | 52px | 0 20px | 999px | 13px Nunito | `--ink` zemin + `--bg` metin | sol 8px yaprak nokta `--accent`, 5sn, 1 kez |
| Grafik paleti | — | — | üst 8px / alt 3px | eksen 10.5px mono | `--data-1` accent, `--data-2` ink, `--data-3` ink-soft, `--data-4` surface-2 | çubuklar arası 10px; grid çizgisi yok, taban çizgisi 1px |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` — yeşil buton üstünde `outline: 2px solid var(--accent-ink)` (4.78:1).
- Dokunma hedefi: en az 44×44px. Görsel olarak 28px olan chip ve 10.5px mono etiketler, `min-height: 44px` + `padding: 0 12px` ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç/köşe, 24px ızgara; köşe radius'u 3px, keskin köşe yok |
| Fotoğraf | doğal ışık, toprak/yeşil ton, bitki veya el detayı; alan ≥%26, tek kare — kolaj yapılmaz |
| İllüstrasyon | yok; katmanlı blob + ince yaprak çizgisi (1.5px) ile kurulur |
| Doku | grain `.04` (zemin, opaklık .20) + ≤2 blob katmanı (opaklık .12–.18, blur yok) |
| Logo alanı | organik squircle monogram (`border-radius: 42% 58% 55% 45% / 52% 45% 55% 48%`), 26px; çevresinde ≥1 blob yüksekliği boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 54px Fraunces başlık, 7/5 asimetri, ≤2 blob, tek CTA; hero görseli asimetrik radius | `shots/01-landing.png` |
| Dashboard | düşük | blob kapanır (≤1, opaklık .12); KPI'lar 26px radius + mono etiket; yeşil ≤%6 | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, display 32px, dokunma 44px, blob yalnız üst bölümde | — |
| Bileşenler · temel | orta | palet + ölçek levhası; radius çifti ve tek gölge her bileşende görünür | — |
| Form | çok düşük | blob yok; 14px radius input, tek sütun 460px, etiket mono | — |
| Modal / katman | orta | 28px radius + `0 18px 44px` gölge; başlık 30px; 2 buton sağa | — |
| Veri | düşük | tablo 56px satır, iç çizgi 1px; çubuklar üst 8px yuvarlak | — |
| Gezinme | orta | alt 1px kural; aktif öğe 2px yeşil alt çizgi; logo squircle | — |
| Pricing | orta | 3 kart; orta kart `0 10px 26px` gölge + asimetrik radius; tek yeşil CTA | — |
| Giriş / ödeme | çok düşük | süs ≤.18; yalnız 1px kenar + 26px radius; güven için sade | — |
| Liste | düşük | filtre çubuğu 1px alt kural; satır 56px; seçili satır sol 3px yeşil | — |
| Boş / hata durumu | orta | tek blob (opaklık .18) + tek cümle + tek buton; 404'te display 54px | — |
| Ayarlar | düşük | bölüm başlıkları 1px kural + 26px kart; anahtar 44×26 pill | — |
| Onboarding | yüksek | adım başına bir yaprak katmanı (1 → 2 blob, sonra sabit); ilerleme çubuğu 4px | — |
| Makale | orta | 62ch ölçü, 30px H2, 1px ayırıcı; serif yalnız başlıkta | — |
| Mobil sheet | orta | alt sayfa üst köşe 26px, alt köşe 0, 44px sürükleme tutamacı | — |
| Mobil form | çok düşük | tam genişlik input 46px, klavye üstü CTA 44px pill | — |
| Mobil liste | düşük | 64px satır, avatar yerine squircle baş harf (18px radius) | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 140ms | `cubic-bezier(.22,.61,.36,1)` | `transform: translateY(1px)` + gölge küçülür |
| Geçiş / sayfa | 260ms | `cubic-bezier(.22,.61,.36,1)` | `opacity` + `translateY(6px)` |
| Giriş (enter) | **1000ms** | `power2.out` | `opacity` + `translateY(28px)`, **stagger 100ms**; organik yavaş açılma |
| Kaydırma (scroll) | **900ms** | `power2.out` | trigger **`top 82%`**, offsetY **24px**, `once: true` |
| Hover | **280ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 420ms | `cubic-bezier(.22,.61,.36,1)` | blob opaklığı `.10 → .18`, tek atım (sonsuz döngü yok) |

- İmza ölçüsü: enter **1.0s / 28px / stagger 0.1** · scroll **0.9s / `top 82%` / 24px** · hover **280ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, blob opaklık animasyonu durur, `transform` sıfırlanır (basma geri bildirimi kalır).
- Bu stile yasak hareket: sürekli nefes alan (scale) blob, parallax, otomatik kayan yazı, yay/spring sıçraması, gradyan geçişi.
## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#f3f1e7` | `#171c16` |
| `--surface` | `#fbfaf4` | `#212720` |
| `--ink` | `#232a22` | `#eef1e7` |
| `--accent` | `#4f7a45` | `#8fbf7d` |

- Koyu mod bu stilin **ana modu değildir**; talep varsa palet elle yazılır (`[data-theme="dark"][data-style="organic-bio"]`), `--accent-ink` `#141a13` olur (koyu zeminde açık yeşil üstü koyu metin **8.4:1**).
- Koyu modda gölge yerine **kenarlık** derinlik taşır: `--shadow: none`, `--line: rgba(238,241,231,.18)`; yumuşak gölge siyah zeminde görünmez.
- `filter: invert()` yasak; grain `.04` → `.03` (koyu zeminde doku daha görünür olur), blob opaklığı .18 → .14.
- Koyu mod sahneleri (17/18) bu stil için üretilmedi; koyu varyant üretilirse `--accent-ink/accent` yeniden ölçülür.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint / --bg` **3.12:1** — yalnız dekoratif etiket ve sıra numarası; etkileşimli metin değil. (Talep edilen `#8b927f` **2.85:1** kaldığı için 3:1 eşiğini geçen bir basamak koyuya çekildi: `#848b78`.)
- `--accent-ink / --accent` **4.78:1** → buton metni AA; yeşil zemin üstünde `--ink` kullanılmaz (3.05:1 altı).
- `--ink / --bg` **13.01:1**, `--ink-soft / --bg` **5.85:1** → gövde ve açıklama AAA sınırının üstünde.
- Blob katmanları `pointer-events: none` + `aria-hidden`; metnin altında kalır (opaklık ≤.18, kontrastı 0.3:1'den fazla düşürmez) ve odak sırasını değiştirmez.
- Hareket/parlama hassasiyeti: yumuşak gölge ve düşük opaklık blob yanıp sönmez; sürekli animasyon yok.
- Opak fallback: `@supports` gerekmez (`--blur: 0`, yarı saydam yüzey yok); tüm yüzeyler opak.
- Odak görünürlüğü: kırık beyaz zeminde `--accent` halka 4.7:1 ile yeterli; yeşil buton üstünde halka `--accent-ink` (4.78:1) kullanılır. 2px + 3px offset, dokunma hedefi 44px.

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
| "Yuvarlak kurumsal tema" gibi duruyor | Her köşe aynı radius, asimetri yok | Büyük yüzeyde tek köşeyi 8px'e düşür; yön ekran başına sabit |
| Yumuşak ama dağınık | İkiden fazla blob, farklı opaklıklar | Blob ≤2 katman, opaklık .12–.18, blur 0 |
| Okunmuyor | Blob metnin üstünde veya opaklık >.25 | Blob `pointer-events: none`, `z-index` düşük, opaklık ≤.18 |
| Claymorphism'e kaydı | Inset gölge / 32px+ radius eklendi | Radius ≤26px, inset gölge yok, tek dış gölge |
| Çamurumsu palet | Yeşil + toprak + turuncu birlikte | Tek aksan; ikinci sıcak renk yasak |
| Zemin kirli görünüyor | `--bg` ile `--surface` arasındaki fark <4% | Zemin `#f3f1e7`, kart `#fbfaf4` (fark ~%5, 1px çizgiyle ayrılır) |
| Mobilde başlık kırpılıyor | 54px sabit punto | `clamp(32px, 4.4vw, 54px)` |
| Tablo yavaş okunuyor | Asimetrik radius satırlarda | Tablo satırı radius 12px, asimetri yalnız kart/modal düzeyinde |
| Grain leke gibi | `--grain` > .06 veya metin üstünde | `.04`, opaklık .20, yalnız zemin katmanı |

## Komşu stiller

- **Uyumlu:** `06 japandi` — aynı sıcaklık; garnitür olarak yalnız nav katmanında. `07 wabi-sabi` — organik form ve kâğıt dokusu; yalnız hero görselinde. `30 bohemian` — toprak palet; yalnız illüstrasyon/boş durum katmanında.
- **Yasak:** `13 neo-brutalism` (blok gölge + 0 radius, yumuşaklığı kırar) · `02 swiss-design` (keskin ızgara ve 0 radius, form mantığıyla çelişir) · `08 glassmorphism` (blur/yarı saydamlık, opak yüzey kuralını bozar) · `22 cyberpunk` (neon ve yüksek doygunluk paleti zehirler).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.terrapinbrightgreen.com/reports/14-patterns/ | biyofilik tasarımın 14 deseni: doğal form, malzeme, barınak |
| https://fonts.google.com/specimen/Fraunces | display serif, yumuşak optik eksen |
| https://fonts.google.com/specimen/Nunito | gövde, yuvarlak uçlu sans |
| https://fonts.google.com/specimen/IBM+Plex+Mono | etiket / ölçü |
| https://www.moma.org/artists/6 | Alvar Aalto: asimetrik form, insan ölçeği |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Organic / Biophilic (styles/38-organic-bio/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="organic-bio"] değişkenleri; hard-coded renk/gölge/radius yasak.
Form: radius çifti 18px / 26px; büyük yüzeyde tek köşe 8px (26px 26px 26px 8px), yön ekran başına sabit; 0 radius yasak.
Renk: zemin #f3f1e7 + mürekkep #232a22 (13.01:1) + tek aksan #4f7a45 (accent-ink/accent 4.78:1); yeşil alan ≤%14, ikinci aksan yok.
Tipografi: --font-display (Fraunces) yalnız başlıkta 54px/1.08, mobil 32px, uppercase yok; --font-body (Nunito) gövdede 16px/1.68; --font-mono (IBM Plex Mono) 10.5px uppercase etiketlerde, tracking 0.14em.
Yüzey: 3 seviye (--bg / --surface + 1px var(--line) / + --shadow 0 6px 18px); tek gölge, --shadow-hard none.
Doku: grain .04 (zemin) + ≤2 blob katmanı (opaklık .12–.18, blur 0, pointer-events none).
Düzen: hero 7/5 veya 8/4; bölüm arası 80px (mobil 52px); gövde ölçüsü ≤62ch.
Bileşen: "Bileşen reçeteleri" tablosundaki değerler birebir; butonlar pill (999px), input 14px, focus 2px accent + 3px offset.
Hareket: basma 140ms, geçiş 260ms, ödül 420ms; prefers-reduced-motion zorunlu.
Yasak: blok gölge, inset gölge, blur/cam, ikinci aksan, iki renk arası gradyan, 3px+ kural, uppercase display, sürekli blob animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (asimetrik radius + blob / pill buton).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥4.5:1, büyük metin ≥3:1, accent üstü ≥4.5:1.
- [ ] Odak halkası görünür (2px + 3px offset), dokunma hedefi ≥44px.
- [ ] 390px genişlikte taşma/kırpılma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.
- [ ] Yeşil alan ≤%14, blob ≤2, 0 radius ve blok gölge yok.

## Token

```css
[data-style="organic-bio"] {
  --bg: #f3f1e7; --bg-2: #e7e4d6;
  --surface: #fbfaf4; --surface-2: #eeece0;
  --ink: #232a22; --ink-soft: #55604f; --ink-faint: #848b78;
  --accent: #4f7a45; --accent-ink: #fbfaf4;
  --line: rgba(35,42,34,.16);
  --radius: 18px; --radius-lg: 26px;
  --shadow: 0 6px 18px rgba(35,42,34,.10); --shadow-hard: none;
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Nunito", "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 0px; --grain: .04;
}
```
