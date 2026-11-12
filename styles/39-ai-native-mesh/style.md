# 39 · AI-native Mesh

> **Bir cümlede:** Koyu nötr bir zeminin üstünde iki katmanlı mesh gradyanın atmosfer kurduğu, içeriğin ise cam yüzeyler ve sakin geometrik tipografiyle taşındığı "AI konsolu" arayüzü — parlama gösteri değil, sadece ışığın yönü.

| | |
|---|---|
| **Hissiyat** | atmosferik, net, sakin-teknik, güvenilir |
| **En iyi** | AI ürün konsolu (prompt/sohbet + panel), veri/analiz çalışma alanı, geliştirici aracı ve dokümantasyon portalı, model durumu izleme panosu, tasarım–mühendislik handoff ekranı |
| **Kaçın** | regülasyon/denetim ekranı (net sınır ve yüksek kontrast zorunlu), yazdırılacak belge ve fatura, 3G'de açılan pazarlama sayfası (blur maliyeti), çocuk/eğlence uygulaması, indirim-kampanya vitrini |
| **Zorluk** | orta (cam + mesh aynı ekranda iki "gösteri" öğesi; ikisini de sıraya sokmak gerekir) · **Erişilebilirlik** | iyi (17.75:1 gövde, 8.99:1 açıklama, 5.07:1 dekoratif etiket, 6.56:1 accent üstü — dört eşik de geçiyor) |
| **Aile** | Yeni Dalga (39) · **Token** | `kit/tokens.css` → `[data-style="ai-native-mesh"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
AI-native Mesh iki katmanı ayırır: **atmosfer** ve **içerik**. Atmosfer mesh gradyandır — iki radial + bir conic katmanın `filter: blur(18px)` ile yumuşatıldığı, ekranın **≤%18**'ini kaplayan, `opacity ≤ .50` (zeminde `≤ .16`) bir ışık alanı. İçerik ise camdır: `--surface` renginin `color-mix(... 82%, transparent)` hâli, `backdrop-filter: blur(var(--blur))` (14px) ve üst kenarda `1px` iç parlaklık. Böylece ekranda tek bir "kahraman" öğe olur (mesh), geri kalan her şey onu **taşıyan** yüzeydir.

Kazandığı şey: **bağlam hissi**. Kullanıcı bir modele/veriye baktığını ekranın dokusundan anlar; mesh "hesaplama burada oluyor" der, cam kart "sonuç burada okunur" der. Feda ettiği şey: **saf sadelik ve düşük maliyet**. Her cam panel bir `backdrop-filter` maliyeti, her gradyan katman bir boya maliyetidir; bu yüzden icat edilen her yeni yüzey bütçeden düşer (bkz. § Performans kuralı 4).

Karakterin taşıyıcısı renk değil **doku hiyerarşisidir**: tipografi nötr ve geometrik (Geist yedekli Inter), radius orta (14/22px), aksan tek ve soğuk (indigo-mavi `#7c8cff`). Süs olarak ikinci bir renk, ikon kolajı veya illüstrasyon **yok**; atmosferin kendisi süstür.

### Ne değildir
- **Glassmorphism (08) değildir.** Onda cam **kimliğin kendisidir** (yarı saydam `--surface`, doygun mor zemin, ağır blur, parlak kenar) ve atmosfer yoktur; burada cam **katman**, kimlik **mesh**'tir: zemin opak (`#0b0c10`), cam yalnız `%82` karışım, blur 14px, aksan doygunluğu düşük (HSL S ≈ %100 ama tek renk, alan ≤%8).
- **Aurora UI (12) değildir.** Aurora dev, doygun renk alanlarını **içerik** olarak kullanır ve 3–4 renk gezdirir; burada gradyan **tek renk ailesinden** (accent + ink) türetilir, iki katmanı geçmez, blur ile "leke"ye dönüşür ve hiçbir zaman metnin arkasında %18'den fazla alan kaplamaz.
- **Cyberpunk (22) / Cybercore (23) değildir.** Onlar neon, glow, saf siyah + doygun camgöbeği ve mono gövde ile "terminal" kurar; burada **glow animasyonu yok**, mono yalnız etiketlerde, gövde Inter, parlaklık yalnız 1px iç kenarda.
- **Minimalism (01) değildir.** Minimalism açık zeminde gölgeyle hacim kurar, atmosferi reddeder; burada zemin koyu, hacim **cam + mesh** ile kurulur ve radius 14/22px (minimalism 8/12px).
- **Kinetic Type (37) değildir.** Kinetic 96px'e kadar çıkan dev ölçek, `-0.03em` negatif tracking ve asit sarı ile bağırır; burada en büyük başlık **40px**, tracking **-0.01em**, aksan indigo — tipografi sakin, geometrik ve nötr.

### Nereden gelir
Kökeni iki teknik gerçekliğe dayanır: (1) 2021 sonrası ürün panolarında yaygınlaşan "mesh gradient" — Figma/Stripe/Linear hattının, tek renkli gradyanı çok noktalı radial katmanlara bölüp blur ile yumuşatma pratiği; (2) `backdrop-filter`'ın 2022'de tüm motorlarda kararlı hâle gelmesiyle camın **dekor** olmaktan çıkıp **katman** olması. AI ürünleri bu dili benimsedi çünkü arayüzün "bir şey hesaplıyor" hissini vermesi gerekiyordu; ama aynı dil hızla klişeleşti (her ürün aynı mor mesh + aynı cam kart).

Klişeye düşmemesi için korunması gereken üç detay: **tek renk ailesi** (mesh accent + ink'ten türer, üçüncü renk yok), **camın ölçüsü** (blur 14px, karışım %82; daha fazlası camı "plastik" yapar) ve **nötr tipografi** (display 40px, tracking -0.01em; camın üstünde bağıran tipografi iki gösteriyi çarpıştırır).

### 3 saniyede tanıma testi
1. Zeminde **iki katmanlı, tek renk ailesinden** mesh var mı ve ekranın ≤%18'ini mi kaplıyor (landing'de ≤%16 opaklık)?
2. Kartlar **cam** mı: `backdrop-filter: blur(14px)`, `color-mix(surface 82%, transparent)`, üstte `1px` iç parlaklık — ve kenarlık **1px** mi?
3. Başlık **40px** (mobil 28px), ağırlık **600**, tracking **-0.01em**, aile nötr geometrik mi; uppercase/gölge/outline yok mu?
4. Tek aksan **indigo `#7c8cff`** ve ekranın **≤%8**'i mi; ikinci doygun renk yok mu?
5. Radius **14px** (kontrol) / **22px** (kart) mı; 6px altı köşe veya 26px üstü köşe var mı?

## Zorunlu kurallar

1. **Atmosfer bütçesi:** mesh yalnız **iki** katman (2 radial + 1 conic aynı katman sayılır) ve **tek renk ailesinden** (accent + ink) türetilir. Sayfa zemininde `opacity ≤ .16`, kart içinde `≤ .50`; blur `16px` (radial katman) / `22px` (conic katman), sayfa wash'ı `26px`. Üçüncü renk, ikinci gradyan odağı yok.
2. **Cam formülü:** panel `background: color-mix(in srgb, var(--surface) 82%, transparent)` + `backdrop-filter: blur(var(--blur))` (`--blur: 14px`) + `1px solid var(--line)` + `box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow)`. Blur 20px üstü, karışım %90 üstü camı "buzlu plastik" yapar — yasak.
3. **İç parlaklık:** yalnız **üst kenarda** `1px` (`inset 0 1px 0`, opaklık %7). Alt/yan iç gölge, çift kenarlık, dış glow yok. Kartın ekranda "parlaması" bu tek çizgiden gelir.
4. **Performans bütçesi:** aynı anda görünen `backdrop-filter` katmanı **≤ 12** (ölçülen: veri 10 · pricing 8 · bileşenler 7 · dashboard 6 · mobil 6 · landing 4 · liste 2). Uzun listede (`> 20 satır`) satırlarda blur yok; blur yalnız kabuk yüzeylerde. `prefers-reduced-motion` + düşük güç modunda `--blur: 0px` ve cam opak `var(--surface)`'a düşer (§ Erişilebilirlik fallback).
5. **Tek aksan:** `--accent` yalnız 4 yerde — birincil buton zemini, aktif durum işareti (2px çizgi/nokta), veri serisi 1, odak halkası. Ekranın **≤%8**'i (veri ekranlarında ≤%4). `--accent-ink` accent üstünde **zorunlu** (6.56:1).
6. **Tipografi:** display 40px/1.14 (mobil 28px), ağırlık **600**, tracking `-0.01em`; gövde Inter 16px/1.6; etiket JetBrains Mono 11px uppercase `0.1em`. Toplam **6** punto basamağı: `11 · 13 · 16 · 20 · 26 · 40`. Uppercase display ve 700 display yok.
7. **Yüzey kademesi:** `--bg #0b0c10` → `--bg-2 #101218` → cam `≈ #12141b` (surface %82 + bg) → `--surface-2 #1b1e27`. Komşu iki kademe arası fark **%4–%9** parlaklık; kademeler arasında gradyan geçiş yok, geçişi **1px çizgi** yapar.
8. **Grain:** `--grain: .03` tek doku (örtü `opacity .15`, `mix-blend-mode: overlay`), yalnız gövde katmanında, `pointer-events: none`; mesh grain'in altında kalır (doku atmosferi kirletmez).

## Yasaklar

- İkinci doygun renk, üç renkli mesh, turuncu/pembe/mor karışımı gradya, "aurora" lekesi; gradyanı **animasyonla** kaydırma.
- Blur `> 20px`, cam karışımı `> %90`, `backdrop-filter` + `filter: blur()` aynı elemanda; her karta ayrı blur (bütçe: ≤12 katman).
- Neon glow, `text-shadow`, `drop-shadow`, dış parlaklık halkası, 2px ve üstü kenarlık (odak halkası hariç), alt/yan iç gölge.
- Saf siyah zemin (`#000`) ve saf beyaz metin (`#fff`); `filter: invert()` ile tema üretme.
- Uppercase display, `700` display, 48px üstü başlık, `-0.02em` altı tracking, mono gövde, 300 ağırlık.
- İllüstrasyon, 3B ikon, emoji süs, ikon dolu şerit, foto kolaj, "AI asistan" robot çizimi.
- Cam üstüne cam (kart içinde ikinci `backdrop-filter`), cam üstüne mesh (aynı anda iki gösteri).
- Sonsuz animasyon: nefes alan katman, marquee, parallax, dönen gradyan, yanıp sönen imleç (yazarken tek atım hariç).
- Yarı saydam metin (`opacity < .85` gövde), `--ink-faint`'i etkileşimli metin olarak kullanmak.

## Görsel imza
- **Mesh atmosfer:** kart içinde `.motif` katmanı — `radial-gradient(52% 46% at 18% 22%, …)`, `radial-gradient(46% 42% at 78% 74%, …)`, `conic-gradient(from 210deg at 62% 38%, …)`; radial katman `blur(16px) saturate(118%)`, conic katman `blur(22px)`; ikisi `opacity: .50`. Hepsi `var(--accent)` / `var(--ink)` türevi.
- **Cam kart:** `color-mix(in srgb, var(--surface) 82%, transparent)` + `backdrop-filter: blur(14px) saturate(112%)` + `1px solid var(--line)` + `inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent)`; radius 22px, padding 28px.
- **Tek parlaklık:** yalnız kartın **üst kenarında** 1px iç çizgi (opaklık %7). Ekranda ikinci bir parlama değeri/yonü yok — imza budur: tek değer, tek yön, tekrarsız ölçü.
- **Nötr geometrik başlık:** Geist (yedek Inter) 600, 40px, `line-height 1.14`, `letter-spacing -0.01em`, en fazla 2 satır, 24ch; `text-wrap: balance`.
- **İndigo işaret:** aktif durumda 2px `--accent` alt çizgi veya 8px dolu nokta; birincil buton dolu accent + `--accent-ink`; ekran başına **1** dolu buton.
- **Kademeli cam:** `--surface-2` yalnız ikincil yüzeyde (hover, seçili satır, chip) ve blur'suz; böylece "cam → mat" geçişi hiyerarşiyi taşır.
- **Grain:** `--grain .03` → örtü `opacity .15`, `overlay`; sabit, kaymaz, animasyonsuz.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0b0c10` | sayfa zemini (opak, nötr koyu) | kart yüzeyi |
| `--bg-2` | `#101218` | bölüm zemini, input zemini, kod bloğu | birincil kart |
| `--surface` | `#14161d` | cam kart tabanı (%82 karışımla), panel | tam sayfa zemin |
| `--surface-2` | `#1b1e27` | ikincil yüzey, hover, chip, seçili satır (blur'suz) | ana kart |
| `--ink` | `#f2f4f8` | metin, başlık (**17.75:1**) | accent zemin üstü |
| `--ink-soft` | `#a9b0c0` | açıklama, lede, ikincil etiket (**8.99:1**) | başlık |
| `--ink-faint` | `#7a8294` | dekoratif etiket, sıra no, eksen yazısı (**5.07:1**) | etkileşimli metin |
| `--accent` | `#7c8cff` | birincil buton zemini, aktif işaret, veri serisi 1, odak halkası | gövde metni |
| `--accent-ink` | `#0b0c10` | accent üstü metin (**6.56:1**) | accent dışı zeminde |
| `--line` | `rgba(242,244,248,.12)` | tüm kenarlık ve ayırıcılar (dekoratif, ~1.4:1) | metin, odak göstergesi |

- Ölçülen kontrast: `ink / bg` **17.75:1** · `ink-soft / bg` **8.99:1** · `ink-faint / bg` **5.07:1** · `accent-ink / accent` **6.56:1** · `ink / surface` **16.41:1** · `ink / surface-2` **15.12:1** · `ink / bg-2` **17.00:1** · cam yüzey (`surface %82 + bg` ≈ `#12141b`) üstünde `ink` **16.71:1** · `soft` **8.46:1** · `faint` **4.77:1**.
- Tek vurgu kuralı: accent **tek anlam** taşır (eylem veya "şu an aktif"). İkinci anlam katmanı renkle değil **yüzey kademesi ve 1px çizgi** ile kurulur (seçili = `--surface-2` + sol 2px accent).
- Yasak kombinasyon: accent üstünde `--ink` (2.70:1 — okunmaz), `--ink-faint` üstünde `--surface-2` (4.03:1, gövde metni olamaz), iki durum renginin (`--ok`/`--danger`) yan yana kullanımı, cam kart üstünde ikinci cam katman.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Geist (yedek Inter) | 40px (mobil 28px) | 600 | 1.14 | `-0.01em`, cümle düzeni |
| H2 | Geist (yedek Inter) | 26px | 600 | 1.2 | `-0.01em` |
| H3 | Inter | 20px | 500 | 1.35 | `-0.005em` |
| Gövde | Inter | 16px | 400 | 1.6 | `0em` |
| Küçük gövde | Inter | 13px | 400 | 1.5 | `0em` |
| Etiket / mono | JetBrains Mono | 11px | 400 | 1.2 | `0.1em`, uppercase |

- Ölçek oranı 1.25 (display atlaması 1.55): kullanılan basamaklar **11 · 13 · 16 · 20 · 26 · 40** (6 basamak); ara basamak uydurulmaz.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.4vw, 40px); line-height: 1.14; letter-spacing: -0.01em; text-wrap: balance; }`
- Gövde maksimum satır uzunluğu: **68ch**; lede 54ch (cam kart içinde 46ch — cam üstünde uzun satır kayar).
- Ağırlık kuralı: Inter 400/500, display 600; 700 yalnız KPI sayısında, tablo başlığında ve 404 sayısında; **300 yasak** (cam üstünde ince çizgi bulanır). Geist sevk edilemezse (offline/sistem) Inter'e düşer; bu durumda tracking `-0.005em`'e çekilir (Inter'in harf aralığı daha geniştir), punto değişmez.
- Şerit/panel başlığı (`sheet-panel > h3`) **13px/500** — 6 basamağın 13'ü; panel içi alt başlık 20px H3'ten küçük kalır, böylece cam kartta üç hiyerarşi (13 · 16 · 26) yan yana okunur.
- Levha ölçeği: `kit/render` şablonlarındaki mikro etiketler (tablo başlığı, eksen, chip) 8–10px mono ile çalışır — bunlar levha/örnek ölçüsüdür; **bileşen kodunda etiket 11px** (dokümandaki tablo), şablon bu değeri dar sahne için 1–2px aşağı çeker.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 28px |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 720px altı tek kolon (gutter 16px); 720–1040px 8 kolon (gutter 20px); 1040px üstü 12 kolon |

- Asimetri kuralı: hero **7/5**; dashboard **3/9** (yan panel 3); ekran başına en fazla 2 bölüm simetriden çıkar. Asimetri cam kartın genişliğiyle dengelenir, öğe ortalanmaz.
- Bölüm ritmi: art arda en fazla **2** blok aynı hizada; üçüncü blok ya tam genişlik ya 7/5 kırılım alır.
- Dikey ritim: bölüm arası **88px** (mobil 52px); kart içi **28px** (mobil 18px); başlık–gövde 12px; kart–kart 20px; form alanı–alanı 16px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | yok | sayfa, bölüm zemini, mesh ve grain katmanı |
| Kart (cam) | `--surface` %82 + `--line` | `0 8px 30px rgba(0,0,0,.45)` + üst 1px iç parlaklık | panel, tablo kabı, KPI, form kartı |
| Yüzen katman | cam %82 + `--shadow` | aynı gölge, `z-index` ile öne | modal, dropdown, toast, komut paleti |
| Mat ikincil | `--surface-2` | yok (blur yok) | chip, seçili satır, hover, kod bloğu |

- Kenarlık formülü: `border: 1px solid var(--line)`; iç ayırıcı aynı değer. Cam üstünde opaklık **artırılmaz** (`.12` üstü çizgi camı kirletir).
- Derinlik nereden gelir: **mesh ışığı + cam karışımı + tek 1px iç parlaklık + yumuşak gölge**. Işık yönü sabit (sağ üst); ikinci ışık kaynağı yok, `--shadow-hard` hiç kullanılmaz.
- Radius: `--radius: 14px` (buton, input, chip, küçük kutu), `--radius-lg: 22px` (kart, modal, hero görseli); avatar ve durum noktası `999px`; tablo satırı `0`, tablo kabı 22px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 14px | 13px/600 Inter, `0.01em` | `--accent` + `--accent-ink` + `--shadow` | hover: `color-mix(in srgb, var(--accent) 88%, var(--ink))` · active: `translateY(1px)` + gölge azalır · focus: `outline: 2px solid var(--accent); outline-offset: 2px` · disabled: `opacity .42` · loading: 3 nokta 140ms |
| Buton (ikincil) | 44px | 0 18px | 14px | 13px/500 Inter | cam: `color-mix(surface 60%, transparent)` + `1px var(--line)` + blur 14px | hover: `--surface-2` (blur'suz) · active: `translateY(1px)` · focus: aynı halka |
| Input | 46px | 0 14px | 14px | 16px Inter | `--bg-2` zemin + `1px var(--line)`, cam yok | focus: `outline: 2px solid var(--accent); outline-offset: 2px` · filled: kenar `--ink-soft` · error: kenar `--danger` + 13px hata satırı · disabled: `--surface-2` + `opacity .5` |
| Kart (cam) | içerik | 28px (mobil 18px) | 22px | H2 26 + 16 | cam %82 + blur 14px + üst 1px iç parlaklık + `--shadow` | öne çıkan: üst 2px `--accent` (gölge değişmez) · hover: iç parlaklık %7 → %11 |
| Chip / badge | 28px | 0 12px | 14px | 11px mono uppercase `0.1em` | `--surface-2` (blur yok) + `1px var(--line)` + `--ink-soft` | aktif: `--accent` + `--accent-ink`; dokunma hedefi `min-height: 44px` ile |
| Nav | 72px | 0 44px | — | 13px Inter, aktif 500 | cam %72 + blur 14px + alt `1px var(--line)` (mobil tabbar %78) | aktif: 2px `--accent` alt çizgi; pasif `--ink-soft`; scroll'da alt çizgi aynı kalır |
| Tablo satırı | 52px | 14px 16px | 0 (satır), 22px (kap) | 15px Inter, başlık 11px mono | satır zemini `--bg-2` (blur yok), ayırıcı `1px var(--line)` | hover: `--surface-2` · seçili: sol 2px `--accent` + `--surface-2` |
| Modal / sheet | içerik | 28px | 22px | H2 26 + 16 | cam %82 + blur 14px + `--shadow` | backdrop `color-mix(in srgb, var(--bg) 72%, transparent)`; kapatma 44×44, radius 14px |
| Toast | 48px | 0 18px | 14px | 13px Inter | cam %82 + `1px var(--line)` + `--shadow` | sol 2px `--accent`, 5sn, tek sefer; kapatma 44×44 |
| Grafik paleti | — | — | çubuk üst 2px | eksen 8px mono `--ink-faint` | `--data-1` accent, `--data-2` ink, `--data-3` ink-soft, `--data-4` surface-2 | çubuklar arası 8px, çubuk zemini/tabanı 1px `--line`; çizgi grafikte 3 yatay grid çizgisi `--line` |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px` — accent **dolu** buton üstünde `outline-color: var(--accent-ink)`. Cam yüzeyde halka `outline-offset: 2px` ile kart kenarından ayrılır (aksi hâlde blur halkayı yalar).
- Dokunma hedefi: en az 44×44px. Görsel olarak 28px olan chip ve 11px mono etiketler `min-height: 44px` + `padding: 0 12px` ile büyütülür; mobil ikon butonlar 44×44 kutu.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, yuvarlak uç, 24px ızgara, `--ink-soft`; dolu ikon yalnız aktif durumda, cam üstünde opaklık %100 |
| Fotoğraf | soğuk tonlu, düşük kontrastlı ürün/ekip görseli; alan ≥%25, tek kare — kolaj yok, `filter: saturate(.85) contrast(1.02)` sınırı |
| İllüstrasyon | yok — atmosferin kendisi süs; boş durumda tek 1.5px çizgi ikon (44px) + tek cümle |
| Doku | grain `.03` (örtü `.15`, overlay) + mesh (2 radial + 1 conic, blur 18px); ikisi aynı ekranda katman katman, üst üste binmez |
| Logo alanı | 28px kare monogram (radius 14px) cam zemin + `--ink` harf; çevresinde ≥24px boşluk, gölge yok |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 40px Geist 600, 7/5 asimetri, kahraman görselde mesh (opaklık .50), sayfada tek wash (.16); tek dolu CTA + tek ghost | `shots/01-landing.png` |
| Dashboard | düşük | süs 0, mesh yalnız başlık bandında (.10); KPI sayısı display 700 + mono 8.5px etiket; cam panel ≤6, accent ≤%4 | `shots/02-dashboard.png` |
| Mobil | orta | tek kolon, 28px başlık, 44px dokunma hedefi, cam yalnız tabbar + kartlar (blur ≤5) | — |
| Bileşenler · temel | orta | palet + ölçek levhası; radius 14/22, cam ve mat yüzey yan yana görünür | — |
| Form | çok düşük | tek sütun 460px, 46px input, odak 2px accent + 2px offset; cam tek kart, süs 0 | — |
| Modal / katman | orta | cam %82 + blur 14px + gölge; sahne backdrop'ı `color-mix(bg 72%)`; başlık 26px; 2 buton sağa | — |
| Veri | düşük | 52px satır, 1px alt çizgi, çubuk üst 2px; eksen mono 8px; satırlarda blur yok (toplam blur 10) | — |
| Gezinme | orta | cam nav 72px + alt 1px kural, aktif 2px accent alt çizgi | — |
| Pricing | orta | 3 cam kart (eşit), orta kart üst 2px accent; tek dolu CTA | — |
| Giriş | çok düşük | sol aside mesh wash (.10), sağda tek cam kart; hata `--danger` 1px kenar; süs 0 | — |
| Liste | düşük | filtre çubuğu 1px alt kural, 52px satır, seçili satır sol 2px accent | — |
| Boş / hata durumu | orta | tek 1.5px ikon + tek cümle + tek buton; 404'te display 44px→64px büyütülür, mesh wash .10 | — |
| Ayarlar | düşük | bölüm başlıkları mono etiket + 1px kural; anahtar 44×24; tehlike bölgesi `--danger` | — |
| Ödeme | çok düşük | özet sütunu sağda cam kart, 46px input, hairline tablo; accent yalnız ödeme butonunda | — |
| Onboarding | orta | adım göstergesi 2px çizgi, seçenek kartı cam + hairline, tek ileri CTA | — |
| Makale | orta | 68ch ölçü, 26px H2, cam yalnız yan sütunda (İlgili/Bülten); gövde `--bg` üstünde, wash yok | — |
| Mobil · alt sayfa | orta | üst köşe 22px, alt köşe 0, 44px sürükleme tutamacı (1px çizgi), cam %90 | — |
| Mobil · form | çok düşük | tam genişlik 46px input, klavye üstü 44px CTA, etiket mono 11px | — |
| Mobil · liste | düşük | 64px satır, 1px ayırıcı, avatar yerine 14px radius baş harf kutusu, satırda blur yok | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 140ms | `cubic-bezier(.22,.61,.36,1)` | `transform: translateY(1px)` + zemin bir kademe koyulaşır |
| Geçiş / sayfa | 220ms | `cubic-bezier(.22,.61,.36,1)` | `opacity` + `translateY(6px)` |
| Giriş (enter) | **750ms** | `cubic-bezier(.32,.72,0,1)` | `opacity` + `translateY(22px)` + `blur: 8px → 0`, **stagger 65ms** |
| Kaydırma (scroll) | **850ms** | `cubic-bezier(.32,.72,0,1)` | trigger **`top 83%`**, offsetY **20px**, `once: true` |
| Hover | **210ms** | `ease-out` | görsel ölçek **1.02** |
| Pin | açık | `scrub 1.2` | hero sabitlenir, mesafe **+140%** |
| Ödül / vurgu | 420ms | `cubic-bezier(.22,.61,.36,1)` | accent alt çizgi `scaleX(0 → 1)`, tek atım; mesh **hareket etmez** |

- İmza ölçüsü: enter **0.75s / 22px / stagger 0.065** · scroll **0.85s / `top 83%` / 20px** · hover **210ms / 1.02** · pin **açık (scrub 1.2 / +140%)**.
- `prefers-reduced-motion`: tüm süreler `0.01ms`, `transform` sıfırlanır, mesh sabit kalır, pin/scrub kapanır; basma geri bildirimi renk değişimiyle sürer.
- Bu stile yasak hareket: gradyan kaydırma/döndürme, nefes alan (scale) katman, marquee, parallax, blur geçişi animasyonu, spring/overshoot, sürekli yanıp sönen "AI düşünüyor" noktası (3 nokta en fazla 2 tur döner, sonra durur).
## Koyu mod

| Token | Açık (yalnız referans, üretilmedi) | Koyu (sevk edilen ana mod) |
|---|---|---|
| `--bg` | `#f4f5f8` | `#0b0c10` |
| `--surface` | `#ffffff` | `#14161d` |
| `--ink` | `#14161d` | `#f2f4f8` |
| `--accent` | `#4a5bd8` | `#7c8cff` |

- Bu stil **koyu tabanlıdır**: açık tema uydurulmaz, `[data-theme="light"]` bloğu sevk edilmez. Yukarıdaki açık sütun yalnız baskı/gömme senaryosu için referanstır; üretilirse `--accent-ink` `#ffffff` olur ve `accent-ink/accent` yeniden ölçülür (≈5.1:1).
- Koyu mod sahneleri (17/18) bu stil için **üretilmez** — stil zaten koyu; ikinci koyu varyant kontrast ölçümünü ikiye katlar, kazanç sağlamaz.
- Koyu zeminde cam daha görünür olduğu için karışım **%78–%86** aralığında kalır; `--grain` `.03`'ten yükseltilmez (doku atmosferle yarışır). Gölge tek değer (`0 8px 30px rgba(0,0,0,.45)`), koyu zeminde 2px'ten kalın gölge "siyah leke" yapar.

## Erişilebilirlik

- Ölçülen en düşük çift: `--ink-faint / --bg` **5.07:1** (cam üstünde 4.77:1) — 4.5:1 eşiğini geçer, ama **etkileşimli metin değil**: yalnız dekoratif etiket, sıra numarası, eksen yazısı. Etkileşimli küçük metin `--ink-soft` (8.99:1) kullanır.
- `--ink / --bg` **17.75:1**, `--ink-soft / --bg` **8.99:1**, `--accent-ink / --accent` **6.56:1** → gövde, açıklama ve buton metni AAA sınırının üstünde. Soluk metin ihtiyacı doğarsa `--ink-soft` kullanılır, `opacity` düşürülmez (`opacity < .85` metni eşiğin altına indirir).
- Cam yüzey: karışım %82'de etkin zemin ≈ `#12141b`; gövde kontrastı **16.71:1**, açıklama **8.46:1**, dekoratif etiket **4.77:1** — cam kontrastı düşürmez, çünkü altında opak `--bg` var (üst üste cam yasak).
- `@supports` fallback: `backdrop-filter` yoksa panel `background: var(--surface)` (opak) + `border-color: color-mix(in srgb, var(--line) 140%, transparent)`; görsel fark yalnız doku, okunurluk aynı.
- Odak görünürlüğü: accent halka `--bg` üstünde 6.56:1, cam üstünde 6.18:1 — 2px + 2px offset yeterli. Accent **dolu** butonda halka `--accent-ink` ile çizilir. Blur açıkken kenarlık `--line` (~1.4:1) dekoratiftir; odak ve hata durumları **hiçbir zaman** yalnız kenarlıkla bildirilmez (2px çizgi + ikon + metin).
- Hareket/parlama hassasiyeti: parlama animasyonu yok; `prefers-reduced-motion` tüm geçişleri 0.01ms'e indirir. `prefers-reduced-transparency` açıksa cam opak `--surface`'a düşer, mesh `opacity .08`'e iner.
- Dokunma hedefi: en az 44×44px; chip 28px görünür ama `min-height: 44px`; anahtar 44×24 (dokunma alanı 44×44).

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
| "Her AI ürünü gibi" duruyor | Üç renkli mesh + mor-pembe geçiş + cam her yerde | Tek renk ailesi (accent + ink), iki katman, cam yalnız ≤12 yüzeyde |
| Ekran plastik/buzlu görünüyor | Blur > 20px, karışım > %90, cam üstüne cam | blur 14px, karışım %82, iç içe `backdrop-filter` yok |
| Metin camda kayboluyor | `opacity` ile soluklaştırma, `--ink-faint` gövde metni | `--ink-soft` kullan, opaklık düşürme; cam üstünde `faint` yalnız dekoratif |
| Mesh gösteriye dönüştü | Gradyan ekranın yarısını kaplıyor veya animasyonlu | Sayfa wash ≤ .16, kart içi ≤ .50, hareket sabit || Hiyerarşi yok | Her kart cam, her buton dolu accent | Tek dolu buton; ikincil cam-%60; ikincil yüzey `--surface-2` blur'suz |
| Kartlar üst üste yüzüyor | `--shadow` her katmanda + 2px kenarlık | Gölge tek değer, kenarlık 1px, iç parlaklık yalnız üst kenarda |
| Sayfa ağır/kayıyor | >12 blur katmanı, uzun listede satır blur'u | Liste satırlarında blur yok; düşük güç modunda `--blur: 0` |
| Başlık "kurumsal" duruyor | Inter 700 + uppercase + 48px üstü | Geist 600, 40px, cümle düzeni, tracking -0.01em |
| Mobilde kırpılıyor | 40px sabit punto + 28px gutter | `clamp(28px, 3.4vw, 40px)` + gutter 16px + `text-wrap: balance` |
| Kontrast düşük | accent üstünde `--ink`, ya da `--ink-faint` etkileşimli metin | accent üstü `--accent-ink` (6.56:1), etkileşim `--ink-soft` (8.99:1) |
| Mesh leke gibi | Blur 18px altı, opaklık yüksek, üçüncü renk | blur 18px, tek aile, opaklık disiplini (§ Zorunlu 1) |

## Komşu stiller

- **Uyumlu:** `08 glassmorphism` — aynı cam fiziği; yalnız nav katmanında garnitür olarak (mesh baskın kalır). `12 aurora-ui` — gradyan atmosferi ortak; yalnız hero görseli katmanında, doygunluk düşürülerek. `01 minimalism` — nötr tipografi ve boşluk disiplini; yalnız dokümantasyon/makale katmanında.
- **Yasak:** `13 neo-brutalism` (0 radius + blok gölge camı kırar) · `14 anti-design` (bilinçli kaos, mesh disiplinini bozar) · `22 cyberpunk` (neon glow + doygun camgöbeği) · `20 vaporwave` (retro doygun palet, mesh'i kirletir) · `35 bauhaus` (düz temel renkler + 3px kural, cam katmanıyla çelişir) · `37 kinetic-type` (dev ölçek + negatif tracking sakinliği bozar).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | cam katmanın tarayıcı desteği, `@supports` fallback ve maliyet notları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/color-mix | cam karışım formülü (`surface %82 + transparent`) |
| https://m3.material.io/styles/color/roles | yüzey kademesi (surface / surface-container) mantığı |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | kenarlık ve odak göstergesi için 3:1 kuralı |
| https://vercel.com/font | Geist — nötr geometrik display, 600 ağırlık |
| https://rsms.me/inter/ | Inter — gövde, 16px/1.6 nötr harf ritmi |
| https://www.jetbrains.com/lp/mono/ | JetBrains Mono — 11px uppercase `0.1em` etiket |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: AI-native Mesh (styles/39-ai-native-mesh/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="ai-native-mesh"] değişkenleri; hard-coded renk/gölge/radius yasak.
Atmosfer: iki katmanlı mesh — 2 radial + 1 conic, hepsi var(--accent)/var(--ink) türevi, radial blur(16px) · conic blur(22px), sayfa wash opacity ≤ .16, kart içi ≤ .50; gradyan hareket etmez.
Cam: background: color-mix(in srgb, var(--surface) 82%, transparent); backdrop-filter: blur(var(--blur)) (14px) saturate(112%); border: 1px solid var(--line); box-shadow: inset 0 1px 0 color-mix(in srgb, var(--ink) 7%, transparent), var(--shadow); radius var(--radius-lg) 22px.
Yüzey: 4 kademe — --bg #0b0c10 → --bg-2 #101218 → cam ≈ #12141b → --surface-2 #1b1e27 (blur'suz); blur katmanı ekranda ≤12.
Renk: tek aksan indigo #7c8cff, ekranın ≤%8'i (veri ≤%4); accent üstü her zaman --accent-ink (6.56:1); ink/bg 17.75:1, ink-soft/bg 8.99:1, ink-faint/bg 5.07:1 (yalnız dekoratif).
Tipografi: --font-display (Geist, yedek Inter) 600 · 40px/1.14 (mobil 28px) · tracking --tracking (-0.01em); --font-body (Inter) 16px/1.6, ölçü ≤68ch; --font-mono (JetBrains Mono) 11px uppercase 0.1em etiket. 6 basamak: 11 · 13 · 16 · 20 · 26 · 40.
Boşluk: bölüm arası 88px (mobil 52px), kart içi 28px (mobil 18px), gutter 28px, container 1180px; hero 7/5, dashboard 3/9.
Bileşen: "Bileşen reçeteleri" tablosu birebir — buton 44px/radius 14px, input 46px/--bg-2, kart 22px cam, chip 28px --surface-2 (blur yok), odak 2px accent + 2px offset.
Hareket: basma 140ms, geçiş 220ms, vurgu 420ms, cubic-bezier(.22,.61,.36,1); prefers-reduced-motion zorunlu; gradyan/parlama animasyonu yasak.
Yasak: üçüncü renk, çok renkli mesh, blur > 20px, cam üstüne cam, cam üstüne mesh, neon glow, 2px+ kenarlık, saf siyah/beyaz, uppercase/700 display, 48px üstü başlık, illüstrasyon, parallax/marquee.
Çıktı: bileşen kodu + tek paragraf not (mesh'i ve cam parlaklığını nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda stilin imza öğelerinden en az 2'si görünüyor (mesh atmosfer + cam kart + üst 1px parlaklık).
- [ ] Hiçbir renk/radius/gölge hard-coded değil; tüm değerler `var(--…)`.
- [ ] Kontrast: gövde ≥4.5:1, büyük metin ≥3:1, accent üstü ≥4.5:1.
- [ ] Odak halkası görünür (2px + 2px offset), dokunma hedefi ≥44px.
- [ ] 390px genişlikte taşma/kırpılma yok.
- [ ] `prefers-reduced-motion` açıkken hareket duruyor, mesh sabit.
- [ ] Blur katmanı ≤12, cam üstüne cam yok, accent ekranın ≤%8'i.

## Token

```css
[data-style="ai-native-mesh"] {
  --bg: #0b0c10; --bg-2: #101218;
  --surface: #14161d; --surface-2: #1b1e27;
  --ink: #f2f4f8; --ink-soft: #a9b0c0; --ink-faint: #7a8294;
  --accent: #7c8cff; --accent-ink: #0b0c10;
  --line: rgba(242,244,248,.12);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 8px 30px rgba(0,0,0,.45); --shadow-hard: none;
  --font-display: "Geist", "Inter", system-ui, sans-serif;
  --font-body: "Inter", "Segoe UI", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: -0.01em; --blur: 14px; --grain: .03;
}
```
