# 74 · Persian Miniature

> **Bir cümlede:** Gece laciverti bir sayfada çift altın çerçevenin ve madalyon kemerinin içine yerleşen, 58 karakterlik ölçülü metin bloğu.

| | |
|---|---|
| **Hissiyat** | törensel, sabırlı, değerli, sessizce zengin |
| **En iyi** | kültür yayını, müze/sergi kataloğu, el yazması/kitap ürünü, premium davet ve hediye markası |
| **Kaçın** | yoğun veri paneli, hızlı e-ticaret listesi, oyun arayüzü — çerçeve ve yavaş ritim taramayı yavaşlatır |
| **Zorluk** | orta-yüksek (çift çerçeveyi disiplinle uygulamak) · **Erişilebilirlik** | orta (gövde 13.96:1, accent üstü 8.03:1; altın çizgiler dekoratif ama odak halkası güçlü) |
| **Aile** | Kültürel & Bölgesel (66–75) · **Token** | `kit/tokens.css` → `[data-style="persian-miniature"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Persian Miniature, el yazması sayfasının ekran karşılığıdır: **gece laciverti zemin**, üstünde **çift altın çerçeve** (dış 1px + 4px aralık + iç 1px), **madalyon kemeri** (yarım daire) ve 58 karakterlik dar metin bloğu. Kurucu kararları üç tanedir. Birincisi **çerçeve = derinlik**: gölge değil, çift çizgi katman kurar. İkincisi **altın yalnız çizgi**: accent hiçbir zaman geniş dolgu olmaz; yalnız çerçeve, madalyon, birincil eylem ve odak halkasında. Üçüncüsü **yavaş ritim**: 76px bölüm boşluğu, 28px kart padding, 1150ms giriş — sayfa açılırken acele etmez.

Kazandığı şey: **değer hissi** — altın çizgi + lacivert zemin, ucuz "lüks" efektleri (gradient, parlaklık) kullanmadan pahalı okunur. Feda ettiği şey: **yoğunluk ve hız**; 3'ten fazla grafik serisi, çerçeve içinde kaybolur.

### Ne değildir
- **Levant Calligraphy (68) değildir:** 68 **açık krem** zemin + navy metin + altın hairline kullanır; 74 **koyu lacivert** zemin + altın çerçeve, ve madalyon kemeri/çift çerçeve imzası vardır.
- **Art Deco (26) değildir:** 26 derin yeşil zemin, altın geometrik merdiven ve simetrik blok kompozisyonla kurulur; 74'te çerçeve **sayfa** metaforu, radius 10/16px (26'da keskin).
- **Victorian (27) değildir:** 27 gravür dokusu ve süslü köşe çiçekleri dolu bir yüzey kurar; 74'te süs **yalnız çizgi**, dolgu yok.
- **Dark Academia (33) değildir:** 33 mum ışığı sıcaklığı ve deri/kâğıt tonlarıdır; 74 soğuk lacivert + metalik altın.
- **"Koyu tema + altın" jeneriği değildir:** kimlik **çift çerçeve + madalyon kemeri**dir; altın dolgu olarak kullanılırsa stil bozulur.

### Nereden gelir
Safevi/Timurlu minyatür ve tezhip geleneği: sayfa bir çerçeveyle çevrilir, üstte madalyon (şemse) durur, metin dar bir bloğa yerleşir, altın ve lacivert (lâcverd) kontrastı sayfayı "değerli nesne" yapar. Dijitalde kültür yayıncılığı ve premium hediye markalarıyla geri döndü; nedeni ölçülebilir — çift çizgi çerçeve CSS `border` + `inset` ile kurulabildiği için görsel dosyası gerekmez. Klişeye dönüşmemesi için korunacak detay: **çift çerçevenin 4px aralıkla kalması** ve altının yalnız çizgi olarak kullanılması.

### 3 saniyede tanıma testi
1. Her panelin çevresinde iki altın çizgi var; aralarında 4px koyu boşluk.
2. Bir panelin üst kenarında 96×20px yarım daire madalyon kemeri duruyor.
3. Zemin gece laciverti; metin krem-altın tonunda ve geniş satır aralıklı.
4. Köşeler belirgin yuvarlak (10–16px) ama çerçeve keskin.
5. Geçişler yavaş: sayfa açılırken 1 saniyeyi aşan bir yerleşme hissedilir.

## Görsel imza
1. **Çift altın çerçeve:** dış `1px solid var(--accent)` + `inset: 4px` ile iç 1px çizgi (%55 opaklık); radius `16px - 4px`.
2. **Madalyon kemeri:** 96×20px, `border-radius: 48px 48px 0 0`, yalnız üst kenarda; en az bir panelde bulunur.
3. **Altın yalnız çizgi:** accent dolgu yok; yalnız çerçeve, madalyon, birincil buton, odak halkası, sayı vurgusu.
4. **Altın ızgara dokusu:** 24px aralıklı 1px çizgiler, %8–12 opaklık; yalnız hero ve yan panel.
5. **EB Garamond display 400:** 42px, `0.02em`; Lora gövde 17px/1.72.
6. **Sayfa numarası:** alt çerçeve bandında mono tabular (`— 04 —`), her ekranda görünür.
7. **Hover dili:** yavaş — 440ms'de iç çerçeve %70 opaklığa çıkar, ölçek yalnız `1.008`; gölge yok.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#131a2c` | sayfa zemini (gece laciverti) | kart zemini |
| `--bg-2` | `#182135` | input zemini, ikincil panel | birincil kart |
| `--surface` | `#1c2640` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#232f4c` | çip, ikincil buton, tablo hover | birincil eylem |
| `--ink` | `#f0e6ce` | başlık, gövde (krem) | çerçeve |
| `--ink-soft` | `#bfb193` | ikincil metin, açıklama, eksen | başlık |
| `--ink-faint` | `#8b8368` | dekoratif: dipnot, sayfa numarası ipucu | etkileşimli metin |
| `--accent` | `#cfa53a` | çift çerçeve, madalyon, birincil buton, odak halkası | geniş zemin dolgusu, metin bloğu |
| `--accent-ink` | `#1a1206` | accent üstü metin | gövde metni |
| `--line` | `rgba(240,230,206,.16)` | ikincil çizgi, tablo ayırıcı, input kenarı | ana çerçeve (o accent) |
| `--danger` / `--ok` / `--warn` | `#e58a76` / `#86cfa4` / `#e2c076` | hata / onay / uyarı | çerçeve, dekorasyon |

- Ölçülen kontrast (varsayılan koyu zemin): `ink / bg` = **13.96:1** · `ink-soft / bg` = **8.19:1** · `accent-ink / accent` = **8.03:1** · `ink-faint / bg` = **4.58:1**.
- Tek vurgu kuralı: altın ekran başına dört işi geçmez — dış çerçeve, iç çerçeve (aynı iş sayılır), madalyon, birincil eylem + odak.
- Yasak kombinasyon: altın zemin üstüne krem metin (kontrast düşer); altını grafik serisi olarak iki kez kullanmak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | EB Garamond (`--font-display`) | 42px (mobil 28px) | 400 | 1.14 | `--tracking` 0.02em |
| H2 | EB Garamond | 28px | 400 | 1.3 | 0.02em |
| H3 | EB Garamond | 20px | 400 | 1.34 | 0.02em |
| Gövde | Lora (`--font-body`) | 17px | 400 | 1.72 | 0.005em |
| Küçük / açıklama | Lora | 14px | 400 | 1.6 | 0.005em |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.16em (büyük harf) |

- Ölçek oranı **1.42** (11 → 17 → 28 → 42); kullanılan basamak sayısı 5: 11/14/17/28/42 (+20 alt başlık).
- Ölçü: `h1 { font-size: clamp(28px, 3.8vw, 42px) }`.
- Gövde metni maksimum satır uzunluğu: **58 ch** (el yazması bloğu gibi dar).
- Ağırlık kuralı: serif 400, gövde vurgu 600. Sans-serif başlık yasak; italik yalnız tek kelime vurgusunda bir kez.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1160px üstü), 8 (768–1159), 4 (390–767) |
| Gutter | 24px |
| Container genişliği | 1120px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1160px: metin 7 / madalyon 5; 768px: 6/6; 390px: tek kolon, çerçeve 4px aralıkla kalır |

- Asimetri kuralı: her bölümde metin bloğu 7 kolon, süs/madalyon 5 kolon; başka asimetri eklenmez.
- Bölüm ritmi: 76px (mobil 48px); art arda en fazla **2** panel; üçüncü blok tam genişlik çerçeveli alıntı olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, çerçeve dışı boşluk |
| Kart | `--surface` | yok | panel, liste, tablo |
| Yüzen katman | `--surface` | `0 2px 6px rgba(0,0,0,.45)` | modal, açılır menü |

- Kenarlık formülü: dış `1px solid var(--accent)` + `inset: 4px` iç 1px (`--accent` %55); ikincil öğelerde `1px solid var(--line)`.
- Derinlik nereden gelir: **çerçeveden**; gölge yalnız yüzen katmanda ve 6px blur ile sınırlı.
- Radius: `--radius` 10px (buton, input, çip), `--radius-lg` 16px (kart, modal); 16px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 24px | `--radius` | 14px/600 Lora, .06em | accent + accent-ink, gölge yok | hover %90 + iç çerçeve 2px (440ms) · active 1px aşağı · focus 2px halka offset 4px · disabled %45 kesikli · loading 3 nokta 1200ms |
| Buton (ikincil) | 44px | 0 24px | `--radius` | 14px/600 Lora | şeffaf + 1px accent | iç 1px çerçeve (inset 3px) |
| Input | 44px | 0 14px | `--radius` | 16px Lora | bg-2 + 1px `--line` | focus 2px halka offset 3px + altın alt çizgi · error `--danger` + sol 2px · disabled %45 |
| Kart | — | 28px | `--radius-lg` | başlık 28px EB Garamond | surface + çift altın çerçeve + madalyon | normal · madalyonlu (birincil) · tükenmiş (%60, çerçeve soluk) |
| Chip | 24px | 0 10px | `--radius` | 11px/500 mono, .12em | surface-2 + `--line` | seçili: accent zemin + accent-ink |
| Nav | 68px | 0 28px | 0 | 15px Lora | bg + altında 1px accent + 5px altta ipucu çizgisi | aktif: madalyon noktası + altın alt çizgi |
| Tablo satırı | 46px | 0 12px | 0 | 16px Lora / mono sayı | alt 1px `--line` | hover `--surface-2` · seçili sol 1px altın |
| Modal | — | 32px | `--radius-lg` | başlık 28px EB Garamond | surface + çift çerçeve + kemer + `--shadow` | açılış 1150ms · Esc kapatır · odak tuzağı |
| Toast | 42px | 0 16px | `--radius` | 14px Lora | surface + 1px altın çerçeve | 6000ms · 2 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn | en çok 3 seri · 1px çizgi + 2px nokta, dolgu yok |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 4px` — çift çerçeveye değmemesi için en az 4px offset.
- Dokunma hedefi: 44px buton/input; 24px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 14px, 1px çizgi, altın; yalnız yön/ok ve sayfa işaretleri |
| Fotoğraf | yok — sayfa yüzeyi çizgi ve tipografidir |
| İllüstrasyon | CSS madalyon (yarım daire), köşe spandrel (çeyrek daire), 1px çerçeve; figüratif görsel yok |
| Doku | 24px altın ızgara (%8–12) + grain .02 |
| Logo alanı | EB Garamond 18px + solunda 12×12 madalyon işareti; 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | 7/5 metin-süs bölünmesi, altın ızgara zemin, kemerli panel | `shots/01-landing.png` |
| Dashboard | düşük | 2 çerçeveli KPI + 1 madalyonlu panel, 3 serili grafik | `shots/02-dashboard.png` |
| Form | düşük | 44px alanlar, çift çerçeveli form paneli | — |
| Liste / tablo | düşük | 46px satır, mono sayfa no, altın ayırıcı | — |
| Boş durum | orta | boş madalyon + tek cümle + tek CTA | — |
| Onboarding | orta | 3 adım: koleksiyon → sayfa düzeni → ilk kayıt | — |
| Pricing | orta | 3 plan, orta plan madalyonlu | — |
| Giriş / ödeme | çok düşük | dar çift çerçeveli kart, 44px alanlar | — |
| Modal | orta | kemerli üst, 32px padding, çift çerçeve | — |
| Bildirim / toast | orta | altın çerçeveli ince kutu, 6000ms | — |
| Hata | düşük | `--danger` çerçeve + krem metin; madalyon susturulur | — |
| Profil / ayar | orta | 46px satır, çift çerçeveli iki panel | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 1150ms | `cubic-bezier(.45,.05,.55,.95)` | `opacity` + `translateY(26px)`, blok başına 100ms stagger |
| Scroll reveal | 1150ms | `cubic-bezier(.45,.05,.55,.95)` | `top 74%` tetiği, 20px, `once: true` |
| Basma | 440ms | `linear` | `translateY(1px)` |
| Hover | 440ms | `cubic-bezier(.45,.05,.55,.95)` | iç çerçeve %55 → %70, görsel ölçek `1.008` |
| Pin / scrub | açık | `scrub 0.85` | sayfa bölümü `+135%` mesafede sabitlenir, çerçeve kayar |
| Sayfa geçişi | 800ms | `cubic-bezier(.45,.05,.55,.95)` | `opacity` + 8px dikey; tek seferlik |

- Ölçülebilir imza: `enter 1.15s / cb(.45,.05,.55,.95) / 26px / 0.1` · `scroll top 74% / 1.15s / 20px / once:true` · `pin açık scrub 0.85 / +135%` · `hover 440ms / 1.008`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; pin/scrub kapanır, madalyon ve çerçeve statik kalır.
- Bu stile yasak hareket: 200ms altı hızlı geçiş, bounce, sürekli döngü, blur geçişi.

## Koyu mod

Varsayılan zemin zaten gece lacivertidir; `data-theme="dark"` bloğu daha da derin bir "mürekkep gecesi" verir.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#131a2c` | `#070a15` |
| `--bg-2` | `#182135` | `#0a0f1e` |
| `--surface` | `#1c2640` | `#0d1324` |
| `--surface-2` | `#232f4c` | `#141b30` |
| `--ink` | `#f0e6ce` | `#f6efe2` |
| `--ink-soft` | `#bfb193` | `#c2b6a0` |
| `--accent` | `#cfa53a` | `#e6c169` |
| `--accent-ink` | `#1a1206` | `#1b1406` |

- Ölçülen kontrast (koyu): `ink / bg` = **17.27:1** · `ink-soft / bg` = **9.87:1** · `accent-ink / accent` = **10.61:1** · `ink-faint / bg` = **5.42:1** (ΔL açık→koyu **-0.061**; altın `#e6c169`a açılır).
- Koyu modda değişen başka ne var: altın %8 → %10 açılır; iç çerçeve opaklığı .55 → .62; yüzen katman gölgesi 6px → 8px (zemin daha koyu olduğu için).
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Her panel çift altın çerçeve: dış 1px + 4px aralık + iç 1px.
- Sayfa üst/alt çerçeve bandı zorunlu; içerik bandın dışına taşmaz.
- Madalyon yarım daire, en az 24px yükseklik, 1px altın, dolgu yok; en az bir panelde.
- Metin ölçüsü 58 ch; gövde Lora 17px/1.72.
- Sayfa numarası mono tabular, alt bantta görünür.
- Altın yalnız çizgi/eylem; 4 işten fazlasına çıkmaz.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Altını geniş dolgu (kart zemin, buton bloğu) olarak kullanmak.
- Gradient, parlaklık/glow, cam yüzey, neon.
- 16px üstü radius; sans-serif başlık.
- Figüratif fotoğraf veya minyatür taklidi stok illüstrasyon.
- 200ms altı hızlı geçiş, bounce, sürekli döngü.
- Madalyonu köşeye veya alta yerleştirmek (daima üst kemer).
- Uydurma el yazması/sanatçı adı; eksik içerik `{{folio}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **4.58:1** (dekoratif dipnot); etkileşimli metin `--ink` 13.96:1, `--ink-soft` 8.19:1.
- Altın çizgi dekoratiftir; seçili/aktif durum daima metin veya 2px altın alt çizgiyle de bildirilir.
- Hareket: tek seferlik 1150ms giriş + 440ms hover; `prefers-reduced-motion` hepsini kapatır, içerik animasyonsuz görünür.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: lacivert zeminde 2px altın halka 8.03:1; çift çerçeveli kartta `offset: 4px` (iç çizgiye değmesin).

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
| Ekran "koyu + altın lüks" jeneriğine düşüyor | çift çerçeve yok, altın dolgu var | çerçeveyi 4px aralıkla geri kur, altını çizgiye indir |
| Çerçeve "çift kenarlık" gibi görünüyor | aralık 4px değil, iç çizgi dış çizgiyle bitişik | `inset: 4px` kullan, radius'u `16 - 4` yap |
| Sayfa ağır ve boğucu | bölüm ritmi 48px'e düşmüş, metin ölçüsü geniş | 76px ritim + 58 ch ölçü |
| Altın okunurluğu düşürüyor | altın metin kullanılmış | metin `--ink`, altın yalnız çizgi/vurgu |
| Hareket "ucuz" duruyor | 200ms altı hızlı geçiş | 440ms taban, 1150ms giriş |
| Koyu modda çerçeve kayboluyor | iç çerçeve opaklığı düşük | .62'ye çıkar |

## Komşu stiller

- **Uyumlu:** `levant-calligraphy` — aynı el yazması/tezhip ailesi; açık zemin 68'den, gece sayfası 74'ten alınır.
- **Uyumlu:** `art-deco` — altın çizgi ve simetri disiplini ortak; ama 74'te çerçeve sayfa metaforu taşır.
- **Uyumlu:** `dark-academia` — koyu okuma atmosferi; arşiv listesi 33'ten, sunum sayfası 74'ten.
- **Yasak:** `neo-brutalism` — kalın kontur ve sert gölge çift çerçeve fiziğini bozar.
- **Yasak:** `pixel-art` — çözünürlük ve dönem çelişir; çerçeve çizgisi piksel ızgarasına sıkışır.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.metmuseum.org/toah/hd/khan1/hd_khan1.htm | sayfa çerçevesi, madalyon ve altın tezhip oranları |
| https://viewer.cbl.ie/viewer/ | çift çerçeve, kenar bandı, altın-lacivert kontrast |
| https://agakhanmuseum.org/collection | madalyon geometrisi ve sayfa düzeni |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | koyu lacivert zeminde odak halkası ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Persian Miniature (styles/74-persian-miniature/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="persian-miniature"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (EB Garamond 400) başlıkta, --font-body (Lora) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayfa numarasında.
Yüzey: gece laciverti --bg / --surface / --surface-2; radius 10px/16px;
        çift altın çerçeve (dış 1px + 4px aralık + iç 1px); gölge yalnız yüzen katmanda 6px blur.
Motif: yarım daire madalyon kemeri (96×20) üst kenarda; altın yalnız çizgi, dolgu yok.
Izgara: metin 7 / süs 5, container 1120px, bölüm ritmi 76px, gövde ölçüsü 58ch.
Hareket: enter 1.15s cubic-bezier(.45,.05,.55,.95) 26px / stagger 0.1; scroll top 74% 1.25s 20px once:true;
         pin açık scrub 0.85 / +135%; hover 440ms scale 1.008. prefers-reduced-motion zorunlu.
Yasak: "Tuzaklar" ve "Yasaklar" maddeleri (altın dolgu, hızlı geçiş, 16px üstü radius).
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (çift çerçeve, madalyon, altın ızgara, 58 ch blok).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Altın hiçbir yerde geniş dolgu değil.
- [ ] 390px genişlikte taşma yok; çerçeve aralığı 4px.
- [ ] `prefers-reduced-motion` açıkken pin/scrub duruyor.

## Token

```css
[data-style="persian-miniature"] {
  --bg: #131a2c; --bg-2: #182135;
  --surface: #1c2640; --surface-2: #232f4c;
  --ink: #f0e6ce; --ink-soft: #bfb193; --ink-faint: #8b8368;
  --accent: #cfa53a; --accent-ink: #1a1206;
  --line: rgba(240,230,206,.16);
  --radius: 10px; --radius-lg: 16px;
  --shadow: 0 2px 6px rgba(0,0,0,.45); --shadow-hard: none;
  --font-display: "EB Garamond", Georgia, serif;
  --font-body: "Lora", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: 0.02;
  --danger: #e58a76; --danger-ink: #25100a; --ok: #86cfa4; --warn: #e2c076;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="persian-miniature"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
