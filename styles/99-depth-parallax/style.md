# 99 · Depth Parallax

> **Bir cümlede:** Üç düzlemin farklı hızda kaydığı ve uzak katmanın 2px pusla geri çekildiği, derinliği gölge hiyerarşisiyle kuran arayüz.

| | |
|---|---|
| **Hissiyat** | derin, sakin, sinematik, ağırlıklı |
| **En iyi** | hikâye anlatan landing, ürün lansmanı, mimari/otel vitrini, ses-medya uygulaması |
| **Kaçın** | yoğun okuma, veri tablosu, form ağırlıklı süreç — hareket ve gölge dikkat böler |
| **Zorluk** | orta-yüksek (katman disiplini ve performans) · **Erişilebilirlik** | orta risk (parallax — kapatılabilir olmalı; gövde 16.63:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `kit/tokens.css` → `[data-style="depth-parallax"]` |
| **Kompozisyon** | `sticky` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Depth Parallax, derinliği **katman hızı** ile kurar: **uzak** düzlem (`blur 2px`, `%55` opaklık, gölge yok), **orta** düzlem (blur 0, `--shadow`: `0 4px 18px`), **yakın** düzlem (`--shadow-hard`: `0 10px 32px` + `%2` ölçek). Parallax katsayıları sabittir: uzak `0.15`, orta `0.4`, yakın `1.0`. Kurucu kararları üç tanedir. Birincisi **üç katman sınırı**: dördüncü katman eklemek derinlik değil karmaşa üretir. İkincisi **pus = uzaklık**: blur yalnız geri planda, metin asla puslu değil. Üçüncüsü **gölge hiyerarşisi**: iki gölge token'ı iki düzleme karşılık gelir (4px/18px → 10px/32px).

Kazandığı şey: **sinematik hiyerarşi** — hangi öğenin "önde" olduğu tek bakışta okunur. Feda ettiği şey: **performans ve sadelik**; scrub `0.45` ve `once: true` bu bedeli sınırlar.

### Ne değildir
- **Glassmorphism (08) değildir:** 08 yarı saydam cam katmanları ve `backdrop-filter` kullanır; burada yüzeyler opak, pus yalnız geri planda ve blur `filter` ile.
- **Grand Tourer Midnight (43) değildir:** 43 lacivert krem + krom hairline ile lüks otomotiv dilidir; burada katman hızı ve pus imzadır, hairline yok.
- **Scandinavian Dark (40) değildir:** 40 düz nötr koyu zemindir ve hareketi ölçülüdür; burada **üç düzlem** ve scrub'lı pin vardır.
- **Kinetic Marquee (96) değildir:** 96 yatay bant hareketidir; 99 dikey derinlik ve katman farkı.
- **"Parallax eklenmiş koyu tema" değildir:** kimlik üç katsayı + pus ölçüsü + gölge hiyerarşisidir; rastgele `translateY` yığını değil.

### Nereden gelir
Parallax, fotoğraf ve animasyonda gerçek derinlik algısının taklidi olarak doğdu; web'de 2010'ların scroll hikâyeciliğiyle yaygınlaştı, sonra aşırı kullanımla gözden düştü. Bugünkü doğru kullanımı ölçülü: **üç katman, sabit katsayı, düşük mesafe**. Klişeye dönüşmemesi için korunacak detay: **blur'un yalnız uzak katmanda kalması** ve dikey mesafenin 40px'i geçmemesi.

### 3 saniyede tanıma testi
1. Arka planda bulanık (puslu) bir katman var; metin hiçbir yerde bulanık değil.
2. Kaydırırken üç katman farklı hızda hareket ediyor; sayfa durunca hepsi duruyor.
3. Gölge boyutu katmana göre değişiyor (4px → 10px → 16px).
4. Başlıklar Fraunces, gövde Nunito; renkler gece mavisi-siyaha yakın + tek buz mavisi accent.
5. Kartın arkasında 8px kaydırılmış, bulanık ikinci kopya görünüyor.

## Görsel imza
1. **Üç düzlem:** uzak `blur(2px)` + `%55` opaklık; orta opak + `--shadow`; yakın `%2` ölçek + `--shadow-hard`.
2. **Parallax katsayıları:** uzak `0.15`, orta `0.4`, yakın `1.0`; dikey hareket en fazla 40px.
3. **Puslu ikincil kopya:** kartın arkasında `inset: 8px -8px -8px 8px`, `filter: blur(var(--blur))`, `%55` opaklık.
4. **Işık huzmesi:** hero görselinin arkasında radial accent `%18`, `blur(--blur × 4)`.
5. **Atmosferik degrade:** yalnız dekor katmanında, `var(--accent)`/`var(--ink)` karışımı; metin üstünde gradient yasak.
6. **Fraunces 500:** 48px, `0.01em`; gövde Nunito 16px/1.66.
7. **Hover dili:** 360ms'de gölge 4px → 6px/22px'a çıkar, öğe 1px yükselir, ölçek `1.035`; renk değişmez.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0b1014` | sayfa zemini (en uzak düzlem) | kart zemini |
| `--bg-2` | `#101820` | input zemini, orta düzlem | birincil kart |
| `--surface` | `#131d26` | kart, panel, nav | sayfa zemini |
| `--surface-2` | `#1a2732` | puslu kopya, çip, ikincil buton | birincil eylem |
| `--ink` | `#eaf0f4` | başlık, gövde | puslu katman |
| `--ink-soft` | `#a8b6c0` | ikincil metin, açıklama, eksen | başlık |
| `--ink-faint` | `#74828c` | dekoratif: uzak katman etiketi, dipnot | etkileşimli metin |
| `--accent` | `#5ac8ff` | birincil eylem, ışık huzmesi, odak halkası | geniş zemin dolgusu |
| `--accent-ink` | `#05131a` | accent üstü metin | gövde metni |
| `--line` | `rgba(234,240,244,.15)` | kart kenarı, ayırıcı, form çerçevesi | metin rengi |
| `--danger` / `--ok` / `--warn` | `#ff8a73` / `#6fd6a8` / `#e6c27a` | hata / onay / uyarı | ışık huzmesi, dekorasyon |

- Ölçülen kontrast (varsayılan koyu zemin): `ink / bg` = **16.63:1** · `ink-soft / bg` = **9.21:1** · `accent-ink / accent` = **10.00:1** · `ink-faint / bg` = **4.84:1**.
- Tek vurgu kuralı: buz mavisi yalnız eylem, ışık ve odak; ışık huzmesi `%18` opaklığı geçmez.
- Yasak kombinasyon: accent'i kart zemin dolgusu yapmak; puslu katmana metin koymak.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Fraunces (`--font-display`) | 48px (mobil 30px) | 500 | 1.1 | `--tracking` 0.01em |
| H2 | Fraunces | 30px | 500 | 1.24 | 0.01em |
| H3 | Fraunces | 20px | 500 | 1.3 | 0.01em |
| Gövde | Nunito (`--font-body`) | 16px | 400 | 1.66 | 0 |
| Küçük / açıklama | Nunito | 14px | 400 | 1.55 | 0 |
| Etiket / mono | IBM Plex Mono (`--font-mono`) | 11px | 500 | 1.3 | 0.14em (büyük harf) |

- Ölçek oranı **1.5** (11 → 16 → 30 → 48); kullanılan basamak sayısı 5: 11/14/16/30/48.
- Ölçü: `h1 { font-size: clamp(30px, 4vw, 48px) }`.
- Gövde metni maksimum satır uzunluğu: **60 ch**.
- Ağırlık kuralı: Fraunces 500, Nunito 400/600. Fraunces 900 ve italik yasak (pus etkisi kalın harfte kaybolur).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1240px üstü), 8 (768–1239), 4 (390–767) |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1240px: uzak 12 / orta 8 / yakın 6 kolon; 768px: parallax kapalı; 390px: tek kolon, pus `%40` |

- Asimetri kuralı: ekran başına **1** derinlik bölümü (üç düzlem aynı anda); diğer bölümler tek düzlem.
- Bölüm ritmi: 88px (mobil 52px); art arda en fazla **2** yakın düzlem kartı.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Uzak | `--bg-2` | yok, `blur(2px)`, `%55` | arka plan şeritleri, dekor katmanı |
| Orta | `--surface` | `--shadow` (`0 4px 18px`) | nav, çoğu kart, tablo satırı |
| Yakın | `--surface` | `--shadow-hard` (`0 10px 32px`) + `%2` ölçek | hero kartı, KPI |
| Yüzen | `--surface` | `--shadow-hard` + 2px `--accent` kenar | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--line)`; yakın düzlemde kenarlık + gölge birlikte.
- Derinlik nereden gelir: **pus + gölge + ölçek** üçlüsünden; her katman yalnız birini abartır.
- Radius: `--radius` 6px (buton, input, çip), `--radius-lg` 14px (kart, modal); 14px üstü yasak.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 26px | `--radius` | 15px/600 Nunito, .02em | accent + accent-ink + `--shadow` | hover `--shadow-hard` + 1px yukarı (360ms) · active 2px aşağı + `--shadow` · focus 2px halka offset 4px · disabled %45 gölge yok · loading 3 düzlem 1200ms |
| Buton (ikincil) | 48px | 0 26px | `--radius` | 15px Nunito | surface + `--line`, gölge yok | arka planda puslu kopya |
| Input | 46px | 0 14px | `--radius` | 15px Nunito | bg-2 + `--line` | focus 2px halka + arka puslu kopya · error `--danger` · disabled %45 |
| Kart | — | 24px | `--radius-lg` | başlık 30px Fraunces | surface + `--shadow` + arka puslu kopya | orta (`--shadow`) · yakın (`--shadow-hard` + %2 ölçek) · puslu (uzak) |
| Chip | 24px | 0 10px | `--radius` | 11px/500 mono, .1em | surface-2 + `--line` | seçili: accent zemin |
| Nav | 72px | 0 28px | 0 | 14px Nunito | surface + alt çizgi + altta 24px pus şeridi | aktif: 2px accent alt çizgi |
| Tablo satırı | 48px | 0 14px | 0 | 15px Nunito / mono sayı | alt 1px `--line` | hover 1px yukarı + gölge (yakın düzlem) · seçili sol 2px accent |
| Modal | — | 28px | `--radius-lg` | başlık 30px Fraunces | surface + `--shadow-hard` + 2px accent kenar + 2 katman puslu kopya | açılış 1000ms · Esc kapatır · odak tuzağı |
| Toast | 44px | 0 16px | `--radius` | 14px Nunito | surface + `--shadow` + 4px offset puslu kopya | 5000ms · 3 üst sınır |
| Grafik paleti | — | — | — | eksen 11px mono | accent → ink-soft → warn → danger | en çok 4 seri · öndeki 2px + gölge, arkadaki %45 |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 4px` — gölgeye değmemesi için 4px.
- Dokunma hedefi: 48px buton ve 48px tablo satırı ≥ 44px; 24px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 18px, 1.5px çizgi, yuvarlak uç; yakın düzlemde 2px |
| Fotoğraf | yok; zorunluysa uzak düzleme, `%55` opaklık + 2px blur |
| İllüstrasyon | CSS düzlemler: yatay katman bantları, ışık huzmesi, pus degrade |
| Doku | üç yatay pus şeridi; grain 0 (grain pusu kirletir) |
| Logo alanı | Fraunces 18px + iki düzlem işareti (biri puslu); 24px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | orta | üç düzlem + 8 kolon orta + 6 kolon yakın kart | `shots/01-landing.png` |
| Dashboard | düşük | 3 KPI (yakın düzlem) + puslu arka şerit | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar + arka puslu kopya ipucu | — |
| Liste / tablo | orta | 48px satır, hover'da yakın düzleme çıkar | — |
| Boş durum | orta | puslu boş düzlem + tek CTA | — |
| Onboarding | orta | 3 adım = 3 düzlem metaforu (uzak→yakın) | — |
| Pricing | orta | 3 kart; orta kart yakın düzlem | — |
| Giriş / ödeme | çok düşük | parallax kapalı, tek düzlem | — |
| Modal | orta | en yakın düzlem, 16px/48px gölge | — |
| Bildirim / toast | orta | puslu kopyalı kutu, 5000ms | — |
| Hata | düşük | düzlemler sabitlenir, `--danger` kenar | — |
| Profil / ayar | orta | "hareketi azalt" + pus yoğunluğu ayarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — üç derinlik düzlemi — ölçek şeridi (0.6× / 1.0× / 1.4×), kademeli kayma.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 1000ms | `cubic-bezier(.16,.6,.3,1)` | `opacity` + `translateY(40px)`, katman başına 130ms stagger |
| Scroll reveal | 1100ms | `cubic-bezier(.16,.6,.3,1)` | `top 88%` tetiği, 56px, `once: true` |
| Basma | 360ms | `linear` | `translateY(2px)` + gölge 2px |
| Hover | 360ms | `cubic-bezier(.16,.6,.3,1)` | gölge büyür, 1px yukarı, görsel ölçek `1.035` |
| Pin / scrub | açık | `scrub 0.45` | hero bölümü `+320%` mesafede sabitlenir, düzlemler farklı hızda kayar |
| Parallax | scrub'a bağlı | `linear` | uzak `0.15` · orta `0.4` · yakın `1.0` |

- Ölçülebilir imza: `enter 1.0s / cb(.16,.6,.3,1) / 40px / 0.13` · `scroll top 88% / 1.1s / 56px / once:true` · `pin açık scrub 0.45 / +320%` · `hover 360ms / 1.035`.
- `prefers-reduced-motion`: tüm süreler 0.01ms, parallax ve pin kapanır; pus (statik) kalır.
- Bu stile yasak hareket: ekran dışına taşan düzlem, 40px üstü dikey parallax, sürekli döngü, blur geçişi.

## Koyu mod

Varsayılan zemin zaten koyudur; `data-theme="dark"` bloğu mavi-siyahtan **derin turkuaz-siyaha** kayar (zemin ton bandı + accent). Böylece iki tema yan yana ayırt edilir, derinlik dili bozulmaz.

| Token | Açık (varsayılan) | Koyu |
|---|---|---|
| `--bg` | `#0b1014` | `#05161a` |
| `--bg-2` | `#101820` | `#082025` |
| `--surface` | `#131d26` | `#0a282e` |
| `--surface-2` | `#1a2732` | `#0f333a` |
| `--ink` | `#eaf0f4` | `#eef7f8` |
| `--ink-soft` | `#a8b6c0` | `#aebfc1` |
| `--accent` | `#5ac8ff` | `#7af0ff` |
| `--accent-ink` | `#05131a` | `#042022` |

- Ölçülen kontrast (koyu): `ink / bg` = **18.29:1** · `ink-soft / bg` = **10.56:1** · `accent-ink / accent` = **12.09:1** · `ink-faint / bg` = **5.58:1**.
- Koyu modda değişen başka ne var: `--shadow` yayılımı büyür (18px → 24px), `--shadow-hard` de (32px → 40px) — siyah üstünde siyah gölge zayıf okunur; hairline .15 → .18.
- `filter: invert()` yasak; palet elle yazılır.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **10.80:1** açık / **10.44:1** koyu · `--warn / bg` = **11.25:1** / **10.88:1** · `--ok / surface` = 8.75:1 / 9.12:1 (warn) · devre dışı buton metni = **8.14:1** / **8.21:1** · ghost buton kenarı = **5.56:1** / **5.75:1** (eşik 3:1).

## Zorunlu kurallar
- En fazla 3 düzlem; parallax katsayıları sabit (0.15 / 0.4 / 1.0), dikey hareket ≤ 40px.
- Pus yalnız uzak düzlemde ve dekor katmanında; metin puslu katmanda yasak.
- Gölge hiyerarşisi: orta `--shadow` (4px/18px), yakın `--shadow-hard` (10px/32px); yüzen katman `--shadow-hard` + 2px accent kenar.
- Kart arkasında en fazla 1 puslu kopya (`inset: 8px`, blur 2px).
- Işık huzmesi %18 opaklığı geçmez; gradient yalnız dekor katmanında.
- Gövde ölçüsü 60 ch, bölüm ritmi 88px (mobil 52px).
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- 3'ten fazla katman; ekran dışına taşan düzlem.
- Metni blur'lu katmana koymak; gradient metin.
- Neon/glow, `backdrop-filter` cam yüzey.
- 14px üstü radius; Fraunces 900 / italik başlık.
- Throttle'sız scroll dinleyicisi ile parallax sürmek.
- Sürekli hareket eden arka plan.
- Uydurma marka/otel adı; eksik içerik `{{scene}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **4.84:1** (dekoratif uzak etiket); etkileşimli metin `--ink` 16.63:1, `--ink-soft` 9.21:1.
- Hareket: WCAG 2.2 "Animation from Interactions" — parallax ve pin `prefers-reduced-motion` ile kapanır; ayrıca ayarlarda "hareketi azalt" anahtarı bulunur.
- Pus dekoratiftir; hiçbir bilgi yalnız puslu katmanda taşınmaz.
- Şeffaf yüzey yok (yüzeyler opak; `--blur: 2px` yalnız `filter` ile dekor katmanında) — `@supports` fallback gerekmez.
- Odak görünürlüğü: koyu zeminde 2px buz mavisi halka 10.00:1; gölgeli kartta `offset: 4px`.

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
| Ekran "yüzen kart yığını" gibi duruyor | 4+ katman ve her kartta gölge | 3 katmana indir, orta düzlemdeki gölgeyi 4px'e düşür |
| Metin zor okunuyor | metin puslu katmanda | metni yakın/orta düzleme taşı, pusu dekorla sınırla |
| Baş dönmesi | dikey parallax 40px üstü, katsayılar büyük | mesafeyi 40px'e, katsayıları 0.15/0.4/1.0'a çek |
| Performans düşüyor | throttle'sız scroll + büyük blur | scrub'ı `0.45`'te tut, blur yalnız küçük alanda |
| Derinlik okunmuyor | tüm gölgeler `--shadow` kullanıyor | orta `--shadow`, yakın `--shadow-hard` iki kademesini kur |
| Koyu modda katman kayboluyor | gölge yayılımı küçük | koyuda 18px → 24px, 32px → 40px |

## Komşu stiller

- **Uyumlu:** `scandinavian-dark` — soğuk nötr koyu zemin; içerik 40'tan, derinlik 99'dan.
- **Uyumlu:** `grand-tourer-midnight` — gece laciverti + ölçülü lüks; premium vitrin 43, hareket 99.
- **Uyumlu:** `glassmorphism` — cam katman yalnız nav'da garnitür olarak; ana gövde opak kalır.
- **Yasak:** `optical-illusion` — 97'nin yüksek frekanslı deseni puslu derinlikle çelişir.
- **Yasak:** `swiss-design` — 02'nin düz ve statik ızgarası katman hızı fikrini dışlar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.mozilla.org/en-US/docs/Web/CSS/perspective | düzlem ölçek/derinlik ilişkisi |
| https://www.nngroup.com/articles/parallax-scrolling/ | parallax'ın ne zaman zararlı olduğu |
| https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur | atmosferik pus ölçüsü ve performans notu |
| https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | hareketin kapatılabilir olması |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Depth Parallax (styles/99-depth-parallax/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="depth-parallax"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Fraunces 500) başlıkta, --font-body (Nunito) gövdede,
           --font-mono (IBM Plex Mono) etiket ve sayılarda.
Yüzey: 3 düzlem — uzak (blur 2px, %55), orta (--shadow 4px/18px), yakın (--shadow-hard 10px/32px + %2 ölçek); radius 6px/14px.
Parallax: katsayılar 0.15 / 0.4 / 1.0, dikey hareket <= 40px; pus YALNIZ dekor katmanında, metin asla bulanık değil.
Imza: enter 1.0s cubic-bezier(.16,.6,.3,1) 40px / stagger 0.13; scroll top 88% 1.1s 56px once:true;
      pin acik scrub 0.45 / +320%; hover 360ms scale 1.035.
Yasak: 3'ten fazla katman, ekran dışına taşan düzlem, cam yüzey, gradient metin, sürekli arka plan hareketi.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (üç düzlem, puslu kopya, ışık huzmesi, gölge hiyerarşisi).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Metin hiçbir yerde bulanık değil; katman sayısı ≤ 3.
- [ ] 390px genişlikte taşma yok, parallax kapalı.
- [ ] `prefers-reduced-motion` açıkken parallax ve pin duruyor.

## Token

```css
[data-style="depth-parallax"] {
  --bg: #0b1014; --bg-2: #101820;
  --surface: #131d26; --surface-2: #1a2732;
  --ink: #eaf0f4; --ink-soft: #a8b6c0; --ink-faint: #74828c;
  --accent: #5ac8ff; --accent-ink: #05131a;
  --line: rgba(234,240,244,.15);
  --radius: 6px; --radius-lg: 14px;
  --shadow: 0 4px 18px rgba(0,0,0,.45); --shadow-hard: 0 10px 32px rgba(0,0,0,.5);
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Nunito", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 2px; --grain: 0;
  --danger: #ff8a73; --danger-ink: #2a0c05; --ok: #6fd6a8; --warn: #e6c27a;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="depth-parallax"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
