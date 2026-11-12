# 128 · Brass Copper

> **Bir cümlede:** Gravürlenmiş pirinç plaka gibi kurgulanmış; koyu bronz zemin, üst kenarı iç parlaklıklı paneller, bakır accent ve ağır hareket eden lüks metal kataloğu arayüzü.

| | |
|---|---|
| **Hissiyat** | ağır, sıcak, törensel, zanaatkâr |
| **En iyi** | alaşım/malzeme kataloğu, lüks donanım, saat & mücevher butiği, butik metal atölyesi |
| **Kaçın** | yüksek yoğunluklu operasyon paneli, hızlı ticaret, oyun arayüzü — koyu sıcak zemin ve 920ms giriş orada "yavaş" okunur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 7.91:1) |
| **Aile** | Materyal & Lüks (126–135) · **Token** | `kit/tokens.css` → `[data-style="brass-copper"]` |
| **Kompozisyon** | `fullbleed` · `pill` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Brass Copper, arayüzü **gravürlenmiş pirinç plaka** gibi kurar: koyu bronz zemin, üst kenarında 1px iç parlaklık taşıyan plaka panelleri, bakır accent ve Cinzel büyük harf künyeler. Değer, metalin kendisi gibi **ağırlık ve oranla** anlatılır: alaşım adı, bileşim yüzdesi, ağırlık, parti no.

Üç kurucu karar: (1) **plaka kenarı** — her panelin üst kenarında 1px iç parlaklık; bu gloss değil, işlenmiş kenardır; (2) **gravür tipografisi** — Cinzel 600 büyük harf `0.12em` başlık, Jost gövde, Courier Prime künye (daktilo parti kaydı); (3) **ağır hareket** — giriş 920ms `cubic-bezier(.52,.04,.3,1)`; metal gibi yavaş kalkar ve sert oturur.

Bedeli: koyu sıcak zemin uzun okumada yorar; gövde 15px Jost ve 1.6 satır aralığı zorunludur. Kırmızı-turuncu accent geniş alanda kullanılırsa stil "bakır" değil "uyarı" okunur.

### Ne değildir
- **Art Deco (26) değildir:** koyu yeşil + altın, geometrik simetri ve süs vardır; Brass Copper'da altın yok, bakır accent ve gravür künye var; simetri değil plaka hizası.
- **Grand Tourer (41–43) değildir:** krem deri, krom hairline ve motor sporları dilidir; burada metal koyu, krom değil pirinç/bakır.
- **West African Pattern (71) değildir:** koyu kahve zemin + altın accent ve desenli yüzey; Brass Copper desensizdir, accent bakır (hue 27° vs 41°), display Cinzel vs Archivo Black, radius 5/12 vs 0/2 — üç eksende birden farklı.
- **Machined Metal Panel (57) değildir:** soğuk gri + pas accent ve endüstriyel panel dili; 128 lüks metal kataloğudur.

### Nereden gelir
Metal atölyesi ve gravür plaka geleneğinden: alaşım etiketi, bileşim yüzdesi, parti numarası, yüzey işlemi (fırçalanmış/aynalı/patina). Bugün yeniden kullanılmasının nedeni: lüks donanım ve malzeme satıcıları ürünü fotoğrafla gösteriyor ama **alaşım oranını ve yüzey işlemini** anlatamıyor; bu bilgi gravür plakada yaşar. Klişeye dönüşmemesi için korunacak detay: **üst kenar iç parlaklığı** ve gerçek bileşim verisi.

### 3 saniyede tanıma testi
1. Zemin koyu bronz; accent bakır (turuncu-kiremit), altın/parlak metal yok.
2. Panel üst kenarında 1px iç parlaklık çizgisi var; geniş gloss yok.
3. Başlıklar büyük harf gravür serifi (Cinzel), geniş harf aralıklı.
4. Her kartta alaşım chip'i + bileşim (%) + ağırlık (g) + parti no.
5. Köşeler 5px (kontrol) ve 12px (plaka); hap buton yok.

## Görsel imza
- **Plaka kenarı:** panel/card `box-shadow: inset 0 1px 0 rgba(240,231,218,.10)` — üst kenarda tek 1px parlaklık.
- **Bakır accent:** `#c9743c` yalnız eylem/seçim/uyarı; accent üstü metin `#1a0d05`.
- **Gravür başlık:** Cinzel 600, H1 44px/1.1, `0.12em`, büyük harf; H2 `0.08em`.
- **Daktilo künye:** Courier Prime 10px `0.20em` etiket, 14px tabular değer; parti no sağ üstte.
- **Fırçalanmış metal:** `--grain: .035` tüm zeminde; yatay ince çizgi hissi.
- **Perçin detayı:** plaka kartının sol üstünde 4px `--ink-faint` daire (tek, dekoratif).
- **Bakır halka:** aktif/seçili plaka `--shadow-hard` = 1px bakır halka (gölge değil).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#1a1512` | bronz zemini | kart zemini |
| `--bg-2` | `#130f0d` | çukur bölüm, nav, input zemini | birincil buton |
| `--surface` | `#221b16` | plaka panelleri, kart | sayfa zemini |
| `--surface-2` | `#2c231c` | chip, hover, başlık satırı | metin zemini |
| `--ink` | `#f0e7da` | metin, gravür değeri | dekoratif dolgu |
| `--ink-soft` | `#bda892` | ikincil metin, açıklama | accent dolgu üstü |
| `--ink-faint` | `#8a7862` | birim, etiket, perçin | gövde, etkileşimli metin |
| `--accent` | `#c9743c` | eylem, seçim, uyarı, bakır halka | dekoratif dolgu (geniş alan) |
| `--accent-ink` | `#1a0d05` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(240,231,218,.15)` | plaka çerçevesi, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **14.78:1** · `ink-soft/bg` **7.91:1** · `accent-ink/accent` **5.48:1** · `ink-faint/bg` **4.26:1** · accent metin olarak bg'ye **5.21:1**.
- Tek vurgu kuralı: bakır accent yalnız eylem/seçim/uyarı. `--warn` (pirinç sarısı), `--ok` (zeytin), `--danger` (kiremit-kırmızı) yalnız durum etiketi.
- Yasak kombinasyon: bakır ile pirinç sarısı yan yana (aciliyet ayrımı kaybolur); accent üstünde `--ink-soft`; gümüş/altın ikinci metal tonu.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Cinzel | 44px | 600 | 1.10 | 0.12em, büyük harf |
| H2 | Cinzel | 26px | 600 | 1.20 | 0.08em, büyük harf |
| H3 | Jost | 19px | 600 | 1.25 | 0 |
| Gövde | Jost | 15px | 400 | 1.60 | 0 |
| Etiket / künye | Courier Prime | 10px | 400 | 1.35 | 0.20em, büyük harf |
| Parti / ölçü | Courier Prime | 14px | 400 | 1.45 | 0.04em, tabular |

- Ölçek oranı ≈ 1.7 (15 → 26 → 44); kullanılan basamaklar: 10 · 11 · 13 · 15 · 19 · 26 · 44 · (mobil 28).
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.6vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: 66ch; alaşım tablosu hücresi sarmaz.
- Ağırlık kuralı: Cinzel 400/600, Jost 400/600, mono 400. 700 yok; italik yok (gravür eğik yazmaz).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 · hero 5/7, alaşım tablosu tam genişlik |
| Gutter | 16px |
| Container genişliği | 1220px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1200 üstü 12 kolon · 768–1200 8 kolon · 768 altı tek kolon, tablo plaka kartına döner |

- Asimetri kuralı: ekran başına 1 asimetrik blok (hero 5/7); alaşım tablosu simetrik.
- Bölüm ritmi: 56px masaüstü / 32px mobil; bölümler arasında 1px çizgi.
- Kart içi 20px; tablo satırı 36px; künye ile değer arası 8px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | bronz zemini |
| Plaka | `--surface` + 1px `--line` + üst iç parlaklık | yok | panel, kart, tablo |
| Yüzen katman | `--surface` + 1px `--accent` | `var(--shadow)` | modal, menü |
| Seçili | `--surface-2` + `--shadow-hard` | 1px bakır halka | seçili plaka |

- Kenarlık formülü: `1px solid var(--line)` + `inset 0 1px 0` üst parlaklık; seçili durumda 1px bakır halka.
- Derinlik nereden gelir: plaka kenarı + ton katmanı + grain; gloss/glow yok.
- Radius: `--radius` 5px (buton, input, chip), `--radius-lg` 12px (plaka, modal). 12px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 40px | 10px 20px | `--radius` | 12px/600 Jost büyük harf | `--accent` + `--accent-ink`, gölge yok | hover %90 + üst çizgi · active 1px aşağı · focus 2px bakır halka · disabled %42 · loading 6 dilim |
| Buton (ikincil) | 40px | 10px 18px | `--radius` | 12px/600 Jost | şeffaf + 1px accent | hover `--surface-2` · focus bakır halka |
| Input | 40px | 0 12px | `--radius` | 14px Courier Prime | `--bg-2` + 1px `--line` | focus bakır halka + alt 1px · error danger · disabled %42 |
| Plaka kartı | — | 20px | `--radius-lg` | başlık 19px Jost 600 | `--surface` + üst parlaklık, gölge yok | seçili 1px bakır halka · sol üst perçin |
| Chip (alaşım) | 22px | 0 8px | `--radius` | 10px Courier Prime | `--surface-2` + 1px `--line` | pirinç · bakır · bronz · tombak · nikel gümüş |
| Nav (üst bar) | 56px | 0 24px | 0 | 10px mono / 12px Cinzel | `--bg-2`, alt 1px `--line` | aktif bakır alt çizgi · sağda parti no |
| Tablo satırı | 36px | 6px 10px | 0 | mono yüzde + gövde ad | alt 1px `--line` | hover `--surface-2` · seçili sol 2px bakır |
| Modal | — | 24px | `--radius-lg` | başlık 26px Cinzel | 1px accent + `var(--shadow)` | gravür künye, kapatma 40px |
| Toast | 36px | 8px 12px | `--radius` | 12px Courier Prime | `--surface`, sol 3px bakır şerit | 3.6sn · üst üste 3 |
| Grafik | — | — | 0 | eksen 10px mono | çizgi 2px, alan %8 | ızgara 1px, bakır eksen etiketi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; accent dolgulu butonda `--accent-ink` halka.
- Dokunma hedefi: 40px görsel, 44×44px hedef (dikey padding ile).
- Alaşım tablosu: bileşim yüzdeleri sağa hizalı mono tabular; toplam satırı 1px üst çizgiyle.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, hafif yuvarlak köşe; perçin, tokmak, plaka, terazi |
| Fotoğraf | pirinç/bakır yüzey makro, sıcak yan ışık, patina izleri, max %40 alan |
| İllüstrasyon | yalnız gravür çizimi: 1px ince çizgi, tarama dolgu, plaka çerçevesi |
| Doku | fırçalanmış metal grain `.035`; patina deseni yalnız hero görselinde |
| Logo alanı | Cinzel 600 büyük harf `0.16em`, sol üst 20px |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 5/7 hero: solda gravür başlık + tek CTA, sağda pirinç yüzey | `shots/01-landing.png` |
| Dashboard | orta | 3 KPI (alaşım, parti, ortalama ağırlık) + alaşım tablosu | `shots/02-dashboard.png` |
| Form | orta | alaşım girişi: ad, bileşim %, ağırlık g, parti no | — |
| Liste / tablo | yüksek | 36px satır, mono yüzde, chip | — |
| Boş durum | düşük | "bu partide plaka yok" + yeni parti ekle | — |
| Onboarding | orta | 3 adım: atölye → alaşım → yüzey işlemi | — |
| Pricing | orta | iki plan, parti/alaşım limitleri | — |
| Giriş / ödeme | düşük | tek plaka, 40px alanlar, tek eylem | — |
| Modal | orta | gravür künye + alaşım tablosu | — |
| Bildirim | orta | 36px toast, sol bakır şerit, 3.6sn | — |
| Hata | düşük | danger çerçeve + neden + yeniden dene | — |
| Profil / ayar | orta | atölye listesi, birim (g/ons), yüzey tercihi | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (plaka) | 920ms | `cubic-bezier(.52,.04,.3,1)` | `opacity` + `translateY(9px)`, 52ms arayla |
| Scroll reveal | 790ms, `top 66%` | aynı | `translateY(7px)`, `once: true` |
| Pin / scrub | 1.32 scrub, +175% mesafe | doğrusal | gravür plaka sabitlenir, künye katmanı kayar |
| Basma | 130ms | aynı | `translateY(1px)` |
| Hover (görsel) | 195ms | aynı | `scale(1.009)` |
| Kenar parlaması | 300ms | aynı | `box-shadow` iç çizgi opaklığı |

- Ölçülen imza: enter **0.92s · cubic-bezier(.52,.04,.3,1) · 9px · stagger 0.052**; scroll **top 66% · 0.79s · 7px · once**; pin **açık · scrub 1.32 · +175%**; hover **195ms · 1.009**.
- Ağır metal: yavaş kalkar, sert oturur; geri sekme yok.
- `prefers-reduced-motion`: tüm süreler 0.01ms, pin/scrub kapalı, kenar parlaması anında.
- Bu stile yasak hareket: sürekli parıldayan metal, bounce, yatay parallax, gloss geçişi.

## Koyu mod

| Token | Açık (atölye) | Koyu (gece atölyesi) |
|---|---|---|
| `--bg` | `#1a1512` | `#0b0705` |
| `--bg-2` | `#130f0d` | `#080403` |
| `--surface` | `#221b16` | `#120d0a` |
| `--surface-2` | `#2c231c` | `#1a1310` |
| `--ink` | `#f0e7da` | `#f8f0e5` |
| `--ink-soft` | `#bda892` | `#cdbba7` |
| `--accent` | `#c9743c` | `#f0a062` |
| `--accent-ink` | `#1a0d05` | `#1a0d05` |

- Ölçülen koyu kontrastlar: `ink/bg` **17.76:1** · `ink-soft/bg` **10.76:1** · `accent-ink/accent` **8.98:1** · `ink-faint/bg` **5.80:1** · accent metin olarak bg'ye **9.47:1**.
- Koyu modda değişen başka ne var: gece atölyesi için zemin bir ton daha derinleştirildi (`--bg` `#100c0a` → `#0b0705`) ve accent parlatıldı (`#dd8650` → `#f0a062`); böylece 17-dark-landing açık moddan ölçülebilir şekilde ayrışıyor (zemin farkı ΔRGB 16 → 24, accent farkı 34 → 70). Grain `.035` → `.05`, üst kenar iç parlaklığı `rgba(...,.10)` → `.06`, çizgi %15 → %18.
- `filter: invert()` yasak; palet elle yazılır, koyu blok `kit/tokens.css` içinde `[data-theme="dark"][data-style="brass-copper"]` olarak durur.

## Zorunlu kurallar
- Her alaşım kaydı: alaşım + bileşim (%) + ağırlık (g) + parti no.
- Panel üst kenarında tek 1px iç parlaklık; geniş gloss/parlama yok.
- Cinzel 600 büyük harf başlık (`0.08–0.12em`), Jost gövde 15px/1.6.
- Bakır accent yalnız eylem/seçim/uyarı; ikinci metal tonu yok.
- Radius yalnız 5px ve 12px; hap buton yok.
- Fırçalanmış metal grain yalnız zemin katmanında; dokunma hedefi 44px.

## Yasaklar
- Altın parlaklığı, gloss/ayna efekti, gradient metal.
- Cam/blur, 12px üstü radius, hap buton.
- Gümüş/altın ikinci accent; neon renk.
- Büyük harf gövde, 13px altı metin, italik.
- Sürekli parıldayan metal, parallax, bounce.
- Renk körlüğüne dayanan tek başına durum bildirimi.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 7.91:1 (`ink-soft/bg`).
- `--ink-faint` 4.26:1 — birim/etiket ve perçin için; gövde metni olarak kullanılmaz.
- Bakır accent metin olarak 5.21:1, dolgu üstünde 5.48:1 — ikisi de geçer; accent'te 11px altı metin kullanılmaz.
- Odak görünürlüğü: 2px bakır halka (5.21:1) + 2px offset; bakır dolgulu butonda `--accent-ink` halka.
- Durum yalnız renkle verilmez: alaşım chip metni, uyarı etiketi + 3px şerit.
- 390px'te tablo plaka kartına döner, yüzdeler alt satıra iner; yatay taşma yok.
- `prefers-reduced-motion` açıkken giriş, pin/scrub ve kenar parlaması durur.

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
| "Plastik metal" hissi | gloss/ayna efekti | yalnız üst kenar 1px iç parlaklık |
| Uyarı gibi okunuyor | accent geniş alanda | accent yalnız eylem/seçim |
| Okunmuyor | 13px gövde | 15px Jost, 1.6 satır |
| Altınla karışıyor | pirinç sarısı accent | accent bakır, sarı yalnız warn |
| Plaka sınırı kayboluyor | çizgi + grain zayıf | 1px çizgi + üst parlaklık |
| Koyu modda parlıyor | iç parlaklık sabit | koyu blokta `.06`'ya indir |
| Mobilde taşıyor | 12 kolon tablo | plaka kartı + alt satır |

## Komşu stiller

- **Uyumlu:** `art-deco` — yakın lüks metal ailesi; ölçülen üç farkla ayrışır: (1) **zemin tonu** bronz `#1a1512` vs koyu yeşil `#0e1b17`, (2) **radius ölçeği** 5/12px vs 0/2px (burada plaka köşesi yumuşak, art-deco'da tam keskin), (3) **motif** gravür plaka + üst kenar iç parlaklığı vs simetrik geometrik süs/fan. Accent hue 24° vs 42° (±30° komşu) ve display ailesi (Cinzel) ortak; kural gereği 2+ eksen ortak olmadığı için çakışma değil, komşuluk.
- **Uyumlu:** `grand-tourer` — krem deri ve krom; premium donanım vitrininde eş.
- **Uyumlu:** `machined-metal-panel` — işlenmiş yüzey ve ölçüm dili; teknik künyede tamamlayıcı.
- **Yasak:** `claymorphism` — pastel yuvarlak gölge, metal ağırlığını yok eder.
- **Yasak:** `frutiger-aero` — parlak cam ve gradient, mat pirinçle çelişir.
- **Yasak:** `dopamine-ui` — çok renkli enerji, tek bakır accent kuralını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.copper.org/ | alaşım bileşimleri, patina ve yüzey işlemleri |
| https://www.britannica.com/technology/brass-alloy | pirinç/bronz tanımı ve kullanım bağlamı |
| https://www.vam.ac.uk/collections/metalwork | gravür plaka dili ve künye biçimi |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | 1px plaka kenarı ve odak halkası ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Brass Copper (styles/128-brass-copper/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="brass-copper"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Cinzel 600) H1/H2 büyük harf +0.08–0.12em; --font-body (Jost 400/600) gövde 15px/1.6;
  --font-mono (Courier Prime) künye 10px +0.20em ve tüm yüzde/ağırlık değerleri (tabular).
Yüzey: koyu bronz + fırçalanmış metal grain (--grain .035). Panel = 1px var(--line) + üst kenarda 1px iç parlaklık
  (inset 0 1px 0); radius --radius 5px, --radius-lg 12px. Geniş gloss/parlama, cam/blur, gradient yasak.
Renk: tek accent bakır (--accent), accent üstü --accent-ink; altın/gümüş ikinci metal yok.
Kayıt: alaşım chip'i + bileşim % + ağırlık g + parti no; yüzdeler mono tabular sağa hizalı.
Hareket: enter 0.92s cubic-bezier(.52,.04,.3,1) 9px st.052 · scroll top 66% 0.79s 7px once ·
  pin açık scrub 1.32 +175% · hover 195ms scale 1.009; prefers-reduced-motion zorunlu.
Yasak: gloss/ayna, gradient metal, cam/blur, 12px üstü radius, hap buton, büyük harf gövde, parıldayan metal animasyonu.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Panel üst kenarında tek 1px iç parlaklık var; gloss yok.
- [ ] Bakır accent yalnız eylem/seçim/uyarı.
- [ ] Alaşım + bileşim % + ağırlık + parti no görünüyor.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1, `--ink-faint` yalnız dekoratif.
- [ ] Odak halkası görünür, dokunma hedefi ≥ 44px.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor.

## Token

```css
[data-style="brass-copper"] {
  --bg: #1a1512; --bg-2: #130f0d;
  --surface: #221b16; --surface-2: #2c231c;
  --ink: #f0e7da; --ink-soft: #bda892; --ink-faint: #8a7862;
  --accent: #c9743c; --accent-ink: #1a0d05;
  --line: rgba(240,231,218,.15);
  --radius: 5px; --radius-lg: 12px;
  --shadow: 0 8px 24px -16px rgba(0,0,0,.85); --shadow-hard: 0 0 0 1px rgba(201,116,60,.45);
  --font-display: "Cinzel", Georgia, serif;
  --font-body: "Jost", system-ui, sans-serif;
  --font-mono: "Courier Prime", ui-monospace, monospace;
  --tracking: .12em; --blur: 0px; --grain: .035;
  --danger: #e2664f; --danger-ink: #1c0703;
  --ok: #8fae62; --warn: #d6ab52;
}
```

Koyu mod bloğu `styles/128-brass-copper/token-block.css` ve (integrator aktardığında) `kit/tokens.css` içinde `[data-theme="dark"][data-style="brass-copper"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.

## QA düzeltmeleri (2026-11-04)

- **Kontrast (ölçüldü, kit/color.mjs):** `accent / bg` 5.21:1 · `ink-soft / surface-2` 6.73:1 · `accent-ink / accent` 5.48:1. Devre dışı buton `opacity: .6` + `--ink-soft` metin (önce .45), ghost buton kenarlığı `color-mix(in srgb, var(--ink) 30%, transparent)` (koyu modda görünür), `logo-strip` / footer etiketleri `--ink-faint` → `--ink-soft`.
- **Örtüşme:** butonlara `white-space: nowrap` (metin ikinci satıra düşmüyor). Dekor katmanı `body.scene-landing .sig { z-index: -1 }` ile içeriğin altına alındı (confetti/rozet/kurdele yazının üstünden geçmiyor).
- **Yerleşim:** hero kutusu `min-height: 360px` ile sabitlendi (alt yarı boş kalmıyor). Hero imzası `scenes.landing` ile kuruldu: pirinç plaka: 4 perçin + gravür çizgisi.
- **Hareket:** sayılar değişmedi ve tokens.json ile aynı — `enter 0.92s` / `scroll 0.79s` (ikisi de ≤ 1.2 s).
