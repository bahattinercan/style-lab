# 63 · Maintenance CMMS

> **Bir cümlede:** Bakım işinin bir iş emri kâğıdı gibi okunduğu, turuncunun yalnız "acil müdahale" anlamına geldiği koyu saha arayüzü.

| | |
|---|---|
| **Hissiyat** | sağlam, acil, teknik, dürüst |
| **En iyi** | bakım yönetimi (CMMS), arıza/iş emri takibi, varlık & envanter, saha teknisyeni tableti |
| **Kaçın** | tüketici vitrini, açık zemin pazarlama sayfası, çocuk/wellness — koyu mat dil burada "kirli" görünür |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 7.40:1) |
| **Aile** | Endüstriyel & Teknik (56–65) · **Token** | `kit/tokens.css` → `[data-style="maintenance-cmms"]` |
| **Kompozisyon** | `split` · `split` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Maintenance CMMS, arayüzü bir **iş emri formu** gibi kurar: iş numarası, makine, öncelik, SLA, atanan kişi, adımlar. Koyu mat yüzey sahada parlamayı azaltır; turuncu accent yalnız acil müdahale ve birincil eylemi işaretler — dekorasyon değildir.

Üç kurucu karar: (1) **üç aile, üç iş** — başlık Chakra Petch (kesik köşeli teknik yazı), gövde Space Grotesk, mono Courier Prime (daktilo iş emri hissi); (2) **kart = kâğıt** — iş emri kartının üstünde 4px delikli şerit, solda mono iş no, sağda öncelik çipi; (3) **adım zorunluluğu** — adımlar numaralı ve onay kutulu, sıra atlanamaz; "yapıldı" işareti olmadan ilerleme yok.

Bedeli: geniş ekranda koyu yüzey ağırdır; bunu taşıyan şey **tek yönlü alt gölge** ve kart başlığındaki mono künyedir, süs değil.

### Ne değildir
- **Terminal UI (45) değildir:** terminal tek mono ailedir ve yeşil accent kullanır; bu stilde başlık Chakra Petch, gövde Space Grotesk, accent turuncudur ve radius 6/10px'tir.
- **Scandinavian Dark (40) değildir:** o stil sessiz lüks için geniş boşluk ve ince çizgi kullanır; burada yoğunluk yüksektir, kart 18px padding, satır 44px.
- **Utility (44) değildir:** Utility açık zeminli ürün arayüzüdür; bu stil koyu saha arayüzüdür ve iş emri metaforu taşır.
- **Glassmorphism (08) değildir:** cam/blur yasak; derinlik tek yönlü alt gölgeyle kurulur, yüzey mat.

### Nereden gelir
Bakım atölyesi geleneğinden: daktilo/presli iş emri kâğıdı, makine künyesi, güvenlik kilidi etiketi (LOTO), vardiya defteri. Bugün yeniden kullanılmasının nedeni: CMMS'ler hâlâ teknisyen tarafından tek elle, eldivenle, gürültülü ortamda kullanılıyor; parlak beyaz arayüz eldiven ve gres altında okunmuyor. Klişeye dönüşmemesi için korunacak detay: **mono daktilo künyesi + adım onayı** ve turuncunun yalnız aciliyet anlamına gelmesi.

### 3 saniyede tanıma testi
1. Zemin koyu mat; yalnız **tek yönlü alt gölge** var, glow/cam yok.
2. Kart başlığında delikli (dots) 4px şerit ve solda mono iş numarası (`WO-2481`).
3. Turuncu yalnız acil/öncelik ve birincil butonda; ikinci bir doygun renk yok.
4. Adımlar numaralı ve onay kutulu; ilerleme çubuğu 8px ve sert köşeli.
5. Öncelik çipi `ACİL` / `YÜKSEK` / `PLANLI` / `TAMAM` olarak büyük harf mono.

## Görsel imza
- **Delikli kart şeridi:** iş emri kartının üstünde 4px yüksekliğinde `--accent` 16px nokta deseni (`--surface-2` zemin).
- **Mono künye:** iş no, makine kodu, tarih — 12px Courier Prime, büyük harf, `0.14em` aralık, sol sütunda hizalı.
- **Tek yönlü gölge:** `0 2px 6px rgba(0,0,0,.35)` — yalnız aşağı; ışık yönü tek, gölge asla iki yana dağılmaz.
- **Sert ilerleme çubuğu:** 8px yükseklik, radius 0, `--surface-2` ray + `--accent` dolgu; adım sayısı çubuğun üstünde nokta olarak.
- **Acil halka:** geciken/CRITICAL işte kart `box-shadow: var(--shadow-hard)` = 2px turuncu dış halka; renk dışında metin de yazar.
- **Kesik köşe tipografisi:** Chakra Petch'in kesik köşeleri başlıklarda; gövde Space Grotesk ile yumuşar, mono künye daktilo etkisi verir.
- **Ölçüm birimi disiplini:** sıcaklık/basınç/tork değerleri mono, birim ayrı ve küçük harf (`°C`, `bar`, `Nm`).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#17191a` | sayfa zemini (atölye) | kart zemini |
| `--bg-2` | `#1e2122` | bölüm bandı, input zemini | birincil buton |
| `--surface` | `#222628` | iş emri kartı, panel | sayfa zemini |
| `--surface-2` | `#2b3032` | mono künye şeridi, chip, ray | metin zemini |
| `--ink` | `#ece9e3` | metin, başlık | dekoratif dolgu |
| `--ink-soft` | `#a9a8a2` | ikincil metin, etiket | accent dolgu üstü |
| `--ink-faint` | `#7a7b77` | künye etiketi, ayırıcı | gövde, etkileşimli metin |
| `--accent` | `#ff8a3d` | acil/öncelik, birincil eylem, odak | dekorasyon, ikinci vurgu |
| `--accent-ink` | `#1a0f05` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(236,233,227,.16)` | 1px çerçeve, satır ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **14.56:1** · `ink-soft/bg` **7.40:1** · `accent-ink/accent` **8.04:1** · `ink-faint/bg` **4.14:1** · accent metin olarak bg'ye **7.52:1**.
- Tek vurgu kuralı: turuncu yalnız aciliyet ve birincil eylem. Durumlar `--warn` (sarı), `--ok` (yeşil), `--danger` (kırmızı) — üçü de yalnız etiket ve ince şerit olarak.
- Yasak kombinasyon: turuncu ile sarı yan yana (aciliyet ayrımı kaybolur); turuncu üstünde `--ink` (kontrast düşük); koyu zeminde 1px'lik doygun renk çizgi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Chakra Petch | 38px | 600 | 1.08 | 0 |
| H2 | Chakra Petch | 24px | 600 | 1.20 | 0.01em |
| H3 | Space Grotesk | 18px | 700 | 1.25 | 0 |
| Gövde | Space Grotesk | 15px | 500 | 1.60 | 0 |
| Etiket / mono | Courier Prime | 11px | 400 | 1.35 | 0.16em, büyük harf |
| İş no / ölçüm | Courier Prime | 12–13px | 400 | 1.4 | 0.14em, tabular |

- Ölçek oranı ≈ 1.6 (15 → 24 → 38); kullanılan basamaklar: 11 · 12 · 15 · 18 · 24 · 38 · (mobil 26).
- Ölçü önerisi: `h1 { font-size: clamp(26px, 3.6vw, 38px) }`.
- Gövde metni maksimum satır uzunluğu: 64ch; iş adımı metni 48ch'te kırılır.
- Ağırlık kuralı: Chakra Petch 600, Space Grotesk 500/700, mono 400. Space Grotesk'in 400'ü yok — sahte ince üretme; italik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · iş kartı 5/7, dashboard 3 sütun |
| Gutter | 16px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, iş kartı tam genişlik |

- Asimetri kuralı: ekran başına en fazla 1 asimetrik blok (5/7 iş kartı).
- Bölüm ritmi: 48px masaüstü / 32px mobil; art arda en fazla 3 kart, sonra 1px ayırıcı + bölüm etiketi.
- Kart içi: 18px padding; mono künye şeridi 8px 12px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, input zemini |
| Kart | `--surface` + 1px `--line` | `var(--shadow)` tek yönlü | iş emri kartı, panel |
| Yüzen katman | `--surface` + 1px `--line` | `var(--shadow)` + 0 32px 64px -40px | modal, açılır menü |
| Acil katman | `--surface` + `--shadow-hard` | 2px turuncu dış halka | geciken/CRITICAL iş |

- Kenarlık formülü: `1px solid var(--line)`; acil durumda gölge yerine 2px halka (`--shadow-hard`).
- Derinlik nereden gelir: tek yönlü alt gölge + zemin tonu farkı; iç gölge, cam, blur yok.
- Radius: `--radius` 6px (buton, input, chip), `--radius-lg` 10px (kart, modal). 10px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 8px 18px | `--radius` | 13px/700 Space Grotesk | `--accent` + `--accent-ink`, `var(--shadow)` | hover %90 · active 2px aşağı · focus 2px warn halka · disabled %45 · loading dönen pul |
| Buton (ikincil) | 40px | 8px 16px | `--radius` | 13px/700 Space Grotesk | `--surface-2` + 1px `--line` | hover çerçeve `--ink-soft` · focus warn halka |
| Input | 40px | 0 12px | `--radius` | 14px Courier Prime | `--bg-2` + 1px `--line` | focus 2px accent halka + sol 3px şerit · error `--danger` + açıklama · disabled %45 |
| Kart (iş emri) | — | 18px | `--radius-lg` | başlık 18px Space Grotesk 700 | `--surface`, `var(--shadow)` | üstte 4px delikli accent şerit · acil: 2px turuncu halka |
| Chip (öncelik) | 24px | 0 10px | 6px | 11px Courier Prime 0.14em | `--surface-2` + 1px `--line` | ACİL accent dolgu · YÜKSEK warn çerçeve · PLANLI line · TAMAM ok |
| Nav (üst bar) | 52px | 0 28px | 0 | 13px Space Grotesk 500 | `--bg` + alt 1px `--line` | aktif 3px accent alt çizgi · sağda açık iş sayacı |
| Tablo satırı | 44px | 8px 12px | 0 | 13px gövde + 12px mono iş no | alt 1px `--line` | hover `--surface-2` · geciken: sol 3px danger şerit |
| Modal | — | 22px | `--radius-lg` | başlık 24px Chakra Petch | `var(--shadow)` + derin alt gölge | adımlar numaralı, onay kutulu, `esc` |
| Toast | 40px | 8px 14px | `--radius` | 12px Courier Prime | `--surface`, sol 4px accent şerit | 5sn · eylem düğmesi olabilir · hover'da durur |
| Grafik | — | — | 0 | eksen 11px mono | `--data-1…4`, eşik 1px kesikli warn | MTBF/MTTR çizgisi 2px, alan dolgusu %8 |

- Odak halkası: `outline: 2px solid var(--warn); outline-offset: 2px` — turuncu dolgulu butonda `outline-color: var(--accent-ink)`.
- Dokunma hedefi: 44×44px (eldiven); 40px buton dikey padding ile 44px'e tamamlanır.
- Adım onayı: 24×24px kutu, 44px dokunma alanı; onaylandığında 2px `--ok` çerçeve + `tamam` mono etiketi.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 22px ızgara, 6px köşe; anahtar, pul, çark, uyarı üçgeni |
| Fotoğraf | makine parçası/etiket, karanlık stüdyo tonu, tek turuncu vurgu, max %30 alan |
| İllüstrasyon | yalnız şema: makine kesiti, yağlama noktaları, enerji kesme zinciri |
| Doku | yok (`--grain: 0`); delikli panel deseni yalnız kart başlığı şeridinde |
| Logo alanı | Chakra Petch 600 küçük harf sözcük logosu, sol üst 24px; mono varyant iş emri kartında |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 5/7 hero: solda başlık + tek CTA, sağda açık iş emri kartı | `shots/01-landing.png` |
| Dashboard | çok yüksek | 4 KPI (açık iş, geciken, MTTR, uyum) + iş kuyruğu | `shots/02-dashboard.png` |
| Form | orta | iş emri formu: makine, öncelik, adımlar, onay kutuları | — |
| Liste / tablo | yüksek | 44px satır, iş no mono, SLA kalan süre, geciken şerit | — |
| Boş durum | düşük | "açık iş emri yok" + yeni iş emri + son 3 kapanan iş | — |
| Onboarding | orta | 3 adım: varlık ekle → bakım planı → ekip ata | — |
| Pricing | orta | plan karşılaştırma; varlık sayısı sınırları satır bazında | — |
| Giriş / ödeme | düşük | tek kart, koyu zemin, tek eylem, hata net | — |
| Modal | orta | iş adımları, ölçüm girişleri, onay kutuları | — |
| Bildirim | orta | 40px toast + sol turuncu şerit + eylem düğmesi | — |
| Hata | düşük | danger çerçeve + neden + tekrar dene; veri korunur | — |
| Profil / ayar | yüksek | varlık listesi, bakım aralığı, bildirim eşikleri | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (kart) | 550ms | `cubic-bezier(.4,0,.2,1)` | `opacity` + `translateY(26px)`, 90ms arayla |
| Scroll reveal | 620ms, `top 72%` | aynı | `translateY(20px)`, `once: true` |
| Basma | 120ms | aynı | `translateY(2px)` + gölge 0 |
| Hover (görsel) | 260ms | aynı | `scale(1.018)` |
| Adım onayı | 180ms | aynı | onay kutusu dolgu + çizgi çekme |
| Pin | kapalı | — | — |

- Ölçülen imza: enter **0.55s · cubic-bezier(.4,0,.2,1) · 26px · stagger 0.09**; scroll **top 72% · 0.62s · 20px · once**; pin **kapalı**; hover **260ms · 1.018**.
- Ağır kalkış, kararlı varış: hareket torna/freze gibi hızlanır ve durur; yay, sekme, geri taşma yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, giriş ve adım animasyonu anında, dönen pul durur.
- Bu stile yasak hareket: sürekli dönen/pompalayan animasyon, bounce, parallax, ışık süpürmesi.

## Koyu mod

| Token | Açık (atölye) | Koyu (gece vardiyası) |
|---|---|---|
| `--bg` | `#17191a` | `#060708` |
| `--bg-2` | `#1e2122` | `#0a0c0d` |
| `--surface` | `#222628` | `#0e1112` |
| `--surface-2` | `#2b3032` | `#161a1c` |
| `--ink` | `#ece9e3` | `#f7f4ee` |
| `--ink-soft` | `#a9a8a2` | `#b6b4ae` |
| `--accent` | `#ff8a3d` | `#ffa066` |
| `--accent-ink` | `#1a0f05` | `#170b03` |

- Ölçülen koyu kontrastlar: `ink/bg` **18.36:1** · `ink-soft/bg` **9.72:1** · `accent-ink/accent` **9.65:1** · `ink-faint/bg` **5.58:1** (ΔL açık→koyu **-0.070**; koyu artık zeminde belirgin olarak daha derin).
- Koyu modda değişen başka ne var: zemin bandı `#17191a` → `#060708` (ölçülebilir ΔL), yüzeyler bir kademe daha derin, turuncu `#ffa066` ile bir ton açılır, çizgi %16 → %18; koyu zemin ile panel arasında 4 puan ton farkı korunur.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="maintenance-cmms"]` olarak durur.

## Zorunlu kurallar
- Her iş tek kart: iş no (mono) + makine + öncelik + SLA + atanan kişi.
- Öncelik hem renk hem metinle: `ACİL` / `YÜKSEK` / `PLANLI` / `TAMAM`.
- Adımlar numaralı, onay kutulu ve sıralı; adım atlanamaz.
- Gölge tek yönlü (aşağı); cam/blur/glow yok. Acil durum gölge değil 2px halka.
- Mono künye büyük harf `0.14em`; gövde Space Grotesk 500, 15px taban.
- Dokunma hedefi 44px; birincil eylem "iş emri aç" her ekranda görünür.

## Yasaklar
- Açık/beyaz zemin, 10px üstü radius, hap buton.
- Neon çok renk, gradient, glow, cam/blur, grain.
- Turuncu ile sarıyı yan yana kullanmak; turuncu üstünde `--ink`.
- Onaysız adım geçişi, sadece renkle öncelik bildirimi.
- Sürekli dönen ikon (yükleme göstergesi dışında), parallax, bounce.
- İkinci mono aile, el yazısı, italik.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 7.40:1 (`ink-soft/bg`).
- `--ink-faint` 4.14:1 — künye etiketi ve ayırıcı; gövde metni olarak kullanılmaz.
- Turuncu metin olarak 7.52:1, dolgu olarak `--accent-ink` ile 8.04:1 — ikisi de geçer.
- Öncelik yalnız renkle anlatılmaz: chip metni + sol şerit + (geciken işte) SLA süresi.
- Odak görünürlüğü: koyu zeminde 2px `--warn` halka; turuncu dolgulu butonda `--accent-ink` halka ile çevrilir (turuncu halka turuncu butonda kaybolur).
- 390px'te kart tam genişlik, tablo karta dönüşür; yatay kaydırma yok.
- `prefers-reduced-motion` açıkken giriş, adım onayı ve dönen pul durur.

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
| "Oyuncu arayüzü" hissi | glow/neon eklendi | turuncu düz dolgu, glow yasak |
| Kartlar birbirine yapışıyor | gölge iki yana dağılmış | tek yönlü alt gölge + 16px gutter |
| Aciliyet kayboluyor | turuncu + sarı birlikte | sarı yalnız uyarı etiketi, turuncu yalnız acil/eylem |
| Adımlar atlanıyor | onay kutusu görsel | onay opsiyonel değil, ilerleme kilitli |
| Koyu modda okunmuyor | `--ink-faint` gövdeye | künye/ayırıcı dışında kullanma |
| Sahada dokunamıyor | 32px buton | 40px görsel + 44px hedef |
| Daktilo etkisi "eski" görünüyor | her metinde mono | mono yalnız künye/ölçüm, gövde Space Grotesk |

## Komşu stiller

- **Uyumlu:** `terminal-ui` — aynı teknik koyu dil; log/CLI yüzeyi olarak yan yana konur.
- **Uyumlu:** `scandinavian-dark` — sakin koyu zemin; rapor/özet ekranlarında eş.
- **Uyumlu:** `utility` — açık zeminde dokümantasyon ve pazarlama sayfaları için tamamlayıcı.
- **Yasak:** `claymorphism` — yumuşak yuvarlak dil ve pastel gölge bakım ciddiyetini bozar.
- **Yasak:** `glassmorphism` — cam/blur sahada parlama ve okunmazlık üretir.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek accent/aciliyet kuralını yok eder.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.osha.gov/control-hazardous-energy | bakım öncesi enerji kesme (LOTO) adımları ve etiket dili |
| https://www.isa.org/standards-and-publications | ISA-95/ISA-99 varlık ve bakım terminolojisi |
| https://en.wikipedia.org/wiki/Computerized_maintenance_management_system | iş emri, önleyici bakım ve SLA kavramları |
| https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | koyu zeminde metin kontrastı ölçütü |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | odak halkası görünürlüğü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Maintenance CMMS (styles/63-maintenance-cmms/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="maintenance-cmms"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Chakra Petch 600) yalnız H1/H2 ve modal başlığı; --font-body (Space Grotesk 500/700) gövde;
  --font-mono (Courier Prime 400) iş no, makine kodu, ölçüm değerleri (büyük harf +0.14em).
  H1 38px/1.08; gövde 15px/1.6; etiket 11px mono +0.16em büyük harf.
Yüzey: koyu mat. --bg / --surface / --surface + --shadow (0 2px 6px rgba(0,0,0,.35), YALNIZ aşağı).
  radius --radius 6px, --radius-lg 10px. Acil/geciken işte gölge yerine --shadow-hard (2px turuncu halka).
Kart = iş emri kâğıdı: üstte 4px delikli accent şerit, solda mono iş no, sağda öncelik çipi.
Öncelik: ACİL (accent dolgu) / YÜKSEK (warn çerçeve) / PLANLI (line) / TAMAM (ok) — renk + metin.
Adımlar numaralı ve onay kutulu; sıra atlanamaz, ilerleme çubuğu 8px sert köşeli.
Hareket: enter 0.55s cubic-bezier(.4,0,.2,1) 26px stagger 0.09 · scroll top 72% 0.62s 20px once ·
  pin kapalı · hover 260ms scale 1.018; prefers-reduced-motion zorunlu.
Yasak: açık zemin, 10px üstü radius, glow/neon, cam/blur, turuncu+sarı yan yana, onaysız adım, bounce.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Kart üstünde delikli şerit ve mono iş no var.
- [ ] Öncelik hem renk hem metinle; turuncu yalnız acil/eylem.
- [ ] Adımlar numaralı ve onay kutulu.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür (turuncu butonda accent-ink), dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="maintenance-cmms"] {
  --bg: #17191a; --bg-2: #1e2122;
  --surface: #222628; --surface-2: #2b3032;
  --ink: #ece9e3; --ink-soft: #a9a8a2; --ink-faint: #7a7b77;
  --accent: #ff8a3d; --accent-ink: #1a0f05;
  --line: rgba(236,233,227,.16);
  --radius: 6px; --radius-lg: 10px;
  --shadow: 0 2px 6px rgba(0,0,0,.35); --shadow-hard: 0 0 0 2px rgba(255,138,61,.32);
  --font-display: "Chakra Petch", system-ui, sans-serif;
  --font-body: "Space Grotesk", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
  --danger: #ff6b5e; --danger-ink: #1c0806;
  --ok: #6fd08c; --warn: #f0c04a;
}
```

Koyu mod bloğu `styles/63-maintenance-cmms/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="maintenance-cmms"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
