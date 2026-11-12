# 105 · Holographic Layer

> **Bir cümlede:** Her panelin arkasında 12px kaymış iki soluk katman bulunduğu, ışığın cam kenarında kırıldığı koyu mor holografik arayüz.

| | |
|---|---|
| **Hissiyat** | gelecekçi, katmanlı, ışıltılı, sakin |
| **En iyi** | AI/veri ürünü lansmanı, uzamsal arayüz vitrini, teknoloji konferansı, immersive portfolyo |
| **Kaçın** | muhasebe/fatura, yazdırma odaklı belge, düşük donanımlı mobil cihazlar (blur maliyeti) |
| **Zorluk** | yüksek · **Erişilebilirlik** | orta risk (cam katmanlar; en düşük etkileşimli çift 6.12:1) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `styles/105-holographic-layer/tokens.json` → `[data-style="holographic-layer"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Holographic Layer, arayüzü **üst üste duran üç katman** olarak kurar: ana katman opaktır, arkasındaki iki katman 12px ve 24px kaymış, %10 ve %8 opaklıkta soluk kopyalardır. Cam kenarı 1px hairline ile çizilir; blur yalnız dekoratif katmanda (≤ 8px) çalışır.

Üç kurucu karar: (1) **üç katman sınırı** — dördüncü katman okunurluğu bozar; (2) **veri opak** — metin, sayı ve tablo asla cam katmanda durmaz, holografik his yalnız *çerçevede* yaşar; (3) **kayma sabit** — offset 12px'in katları; rastgele dağılım hologramı "dağınık" gösterir.

Display **Michroma**'dır (tek ağırlık, çok geniş): holografik yüzeylerin ince tarama çizgileri gibi harfler. Gövde Inter, etiketler IBM Plex Mono. Radius 20/28px — hologram kenarı yumuşak kırılır.

Bedeli: blur ve katmanlar performans maliyetidir. Bu yüzden mobilde katman sayısı 1'e iner, blur 4px'e düşer ve `prefers-reduced-transparency` benzeri bir geri dönüş olarak opak `--surface` kullanılır.

### Ne değildir
- **Glassmorphism (08) değildir:** 08 çok renkli atmosfer (mavi/mor/pembe radial) + güçlü cam blur ile "buzlu cam" kurar; Holographic Layer tek renk ailesi (mor), katman kayması ve mesh deseni kullanır; veri katmanı opaktır.
- **Liquid Glass (09) değildir:** 09 hap formlar ve sıvı yansıma ile çalışır (radius 20, blob atmosfer); burada katman yığını ve Michroma tipografisi imzadır.
- **AI Native Mesh (39) değildir:** 39 Inter ile mesh atmosfer ve cam kart kullanır, mor-mavi accent'dir; Holographic Layer'da üç katmanlı yığın, 20/28px radius ve Michroma vardır.
- **Minimalism (01) değildir:** 01 katmansız ve nötrdür; burada derinlik tamamen katmanlardan gelir.

### Nereden gelir
Holografi fiziği (girişim kaydı, katmanlı film), AR/uzamsal arayüz çalışmaları (visionOS benzeri katmanlı paneller), 2020'lerin "iridescent tech" estetiği. Ekranda yeniden kullanılmasının nedeni: cam efektlerin düz "frosted" tekdüzeliğine karşı **katman hiyerarşisi** önermesi — derinlik blur'dan değil, kayma ve opaklık farkından gelir. Klişeye dönüşmemesi için korunacak detay: katman sayısının üçle sınırlı kalması ve verinin her zaman opak katmanda durması.

### 3 saniyede tanıma testi
1. Zemin koyu mor-siyah; panelin arkasında 12px ve 24px kaymış iki soluk kopya var.
2. Panel kenarları 1px hairline ile çiziliyor; içeride ince mesh deseni görünüyor.
3. Başlık Michroma: çok geniş, teknik, tek ağırlık.
4. Veri (metin/tablo) opak; yalnız çerçeve ve dekoratif zemin ışıltılı.
5. Accent açık mor yalnız aktif katman ve birincil eylemde.

## Görsel imza
- **Üç katman:** ana katman opak; `translate(12px,12px)` %10, `translate(24px,24px)` %8.
- **Cam kenar:** 1px `--line` + `inset 0 1px 0` ink %8 iç parlaklık.
- **Mesh:** 24px aralıklı iki yönlü çizgi (60° / −60°), opaklık ≤ %80.
- **Blur disiplini:** `--blur: 8px` yalnız nav, tabbar, ghost buton ve dekoratif katmanda.
- **Michroma başlık:** 44px, ağırlık 400, tracking 0.02em, satır aralığı 1.14.
- **Radius:** `--radius` 20px (kontrol), `--radius-lg` 28px (kart, modal); hap buton.
- **Işıma:** tek accent radial, %16 opaklık, sağ üstte; metnin arkasında.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0e0b16` | sayfa zemini (mor-siyah) | kart zemini |
| `--bg-2` | `#141020` | ikincil zemin, input | cam katman |
| `--surface` | `#181323` | ana katman (opak kart) | sayfa zemini |
| `--surface-2` | `#211a2e` | ikincil yüzey, chip, zebra | ana kart |
| `--ink` | `#f0edf7` | metin, sayı, başlık | dekoratif dolgu |
| `--ink-soft` | `#b3aac4` | ikincil metin | cam katman üstü |
| `--ink-faint` | `#827896` | yalnız dekoratif etiket | etkileşimli metin |
| `--accent` | `#8f7bff` | aktif katman, birincil eylem, ışıma | gövde metni |
| `--accent-ink` | `#0a0713` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(240,237,247,.16)` | cam kenar, ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` = **16.85:1** · `ink-soft/bg` = **8.78:1** · `accent-ink/accent` = **6.12:1** · `ink-faint/bg` = **4.71:1**.
- Tek vurgu kuralı: accent yalnız aktif katman/eylem/ışıma. Alarm `--danger`, uyarı `--warn`, onay `--ok`.
- Yasak kombinasyon: accent üstünde `--ink-soft`; cam katmanda veri metni.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Michroma (`--font-display`) | 44px / mobil 27px | 400 | 1.14 | `--tracking` 0.02em |
| H2 | Michroma | 26px | 400 | 1.24 | 0.01em |
| H3 | Inter | 19px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.6 | 0 |
| Etiket / sayı | IBM Plex Mono (`--font-mono`) | 10–12px | 400/600 | 1.44 | 0.16em (etiket) |

- Ölçek oranı ≈ 1.4; kullanılan basamaklar: 10 · 12 · 15 · 19 · 26 · 44.
- Ölçü önerisi: `h1 { font-size: clamp(27px, 3.6vw, 44px); }`
- Gövde metni maksimum satır uzunluğu: 62 ch (Michroma geniş olduğu için ölçü daralır).
- Ağırlık kuralı: Michroma yalnız 400; sentetik bold yasak. Gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 24px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 katman paneli 6/6 · 768 tek sütun, katman offseti 8px · 390 tek katman, blur 4px |

- Asimetri kuralı: katman paneli simetrik 6/6; derinlik katmanla kurulur, ızgarayla değil.
- Bölüm ritmi: art arda en fazla 2 katmanlı panel; üçüncü blok düz yüzey (nefes).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, mesh zemin |
| Ana katman | `--surface` | `0 28px 64px -44px rgba(4,2,10,.95)` | kart, panel, modal |
| Dekoratif katmanlar | `--surface` / `--accent` %24 | gölge yok | 12px ve 24px kaymış kopyalar |

- Kenarlık formülü: `1px solid var(--line)` + `inset 0 1px 0` ink %8.
- Derinlik nereden gelir: katman kayması + opaklık farkı + cam kenar; renkli gölge yok.
- Radius: `--radius` 20px (kontrol, chip içi), `--radius-lg` 28px (kart, modal); butonlar 999px.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 46px | 0 22px | 999px | 13px/600 Inter 0.02em | `--accent` zemin, `--accent-ink`, `--shadow` | hover ikinci katman %10 kayar (410ms) · active 1px · focus 2px accent + 3px offset · disabled %45 · loading katman sırası |
| Buton (ikincil) | 46px | 0 22px | 999px | 13px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 46px | 0 16px | `--radius` | 15px Inter | `--bg-2`, 1px `--line` | focus 2px accent · error `--danger` · disabled %45 |
| Kart | içerik | 24px | `--radius-lg` | — | `--surface` (opak), 1px `--line`, `--shadow` | dekoratif kopyalar arkada |
| Chip / badge | 26px | 0 12px | 999px | 10px/600 mono 0.14em | `--surface-2`, 1px `--line` | seçili: accent zemin |
| Nav | 64px | 0 28px | 0 | 13px/600 | `--surface` %74 + blur 8px | aktif: accent alt çizgi |
| Tablo satırı | 46px | 10px 16px | 0 | 13px (sayı mono) | alt 1px `--line`, zebra `--surface-2` | seçili: 2px accent sol çizgi (blur yok) |
| Modal / sheet | — | 28px | `--radius-lg` | 15px/400 | `--surface` opak, `--shadow` | yalnız çerçeve katmanlı |
| Toast | 46px | 10px 16px | 999px | 12px mono | `--surface` opak, `--shadow` | 4400ms, üst orta |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (3 seri) | çizgi 2px + %12 accent dolgu (opak) |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 3px` (cam kenardan ayrışsın diye 3px).
- Dokunma hedefi: en az 44×44px; buton 46px, chip 26px görünür ama 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 20px ızgara, çift kontur (hologram kenarı) |
| Fotoğraf | Yok — holografik katman fotoğrafı örter |
| İllüstrasyon | Yalnız katman yığını (2 dekoratif kopya + ana katman) |
| Doku | `--grain: .02` + 24px mesh deseni |
| Logo alanı | Michroma kelime logosu, 0.04em; 16px üç paralel katman işareti |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Katman paneli 6/6; arkasında iki kaymış kopya | `shots/01-landing.png` |
| Dashboard | yüksek | Kartlar opak; yalnız nav ve tabbar cam | `shots/02-dashboard.png` |
| Form | düşük | 46px alanlar, cam yok, opak `--bg-2` | — |
| Liste / tablo | orta | 46px satır, zebra, seçili sol accent çizgi | — |
| Boş durum | orta | Boş katman yığını + tek eylem | — |
| Onboarding | yüksek | Her adımda bir katman açılır (en fazla 3) | — |
| Pricing | orta | Plan kartları opak; öne çıkan kart accent çerçeve | — |
| Giriş / ödeme | çok düşük | Tek panel opak, blur yok | — |
| Modal | orta | Opak modal, yalnız çerçeve katmanlı | — |
| Bildirim / toast | orta | Tek katman opak | — |
| Hata | düşük | `--danger` kenar, katmanlar kapanır (odak) | — |
| Profil / ayar | orta | Katman sayısı (1–3), blur yoğunluğu, iridesans anahtarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — üç katman yığını — 6/12px kayma, opaklık notları, tarama çizgisi.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.97s**, y **28px**, stagger **0.11** | `cubic-bezier(.32,.06,.2,1)` | `opacity` + `transform` |
| Scroll reveal | **0.86s**, trigger **top 76%**, y **24px**, `once: true` | aynı eğri | `opacity` + `transform` |
| Pin / scrub | **açık**, scrub **1.25**, mesafe **+130%** (katman kayması büyür) | scrub doğrusal | `transform` (offset 12 → 28px) |
| Hover | **410ms**, görsel scale **1.038** | `ease-out` | `transform` + katman `opacity` |
| Basma | 160ms | aynı eğri | `transform` (1px) |
| Katman kayması | 380ms | aynı eğri | `transform` + `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.97s / cubic-bezier(.32,.06,.2,1) / 28px / 0.11` + `scroll top 76% / 0.86s / 24px` + `pin scrub 1.25 / +130%` + `hover 410ms / 1.038`. `0.97s` giriş + `scrub 1.25` + `hover 410ms` üçlüsü katalogda yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; katman kayması kapanır, tek katman kalır, blur azaltılır.
- Bu stile yasak hareket: sürekli iridesans (hue-rotate) döngüsü, 3'ten fazla katmanlı paralaks, parlama flash'ı.

## Koyu mod

Varsayılan gece indigodur; `data-theme="dark"` bloğu **erik–mor siyah** bandına kayar, accent lila'ya, katman ışıması menekşeye döner — hologram kimliği korunur, iki tema ayırt edilir.

| Token | Açık (gece hologramı) | Koyu (derin hologram) |
|---|---|---|
| `--bg` | `#0e0b16` | `#12081a` |
| `--bg-2` | `#141020` | `#180c22` |
| `--surface` | `#181323` | `#1d1029` |
| `--surface-2` | `#211a2e` | `#261534` |
| `--ink` | `#f0edf7` | `#f6f1fb` |
| `--ink-soft` | `#b3aac4` | `#c3b6d2` |
| `--ink-faint` | `#827896` | `#94899f` |
| `--accent` | `#8f7bff` | `#d0a8ff` |
| `--accent-ink` | `#0a0713` | `#150a1f` |
| `--line` | `rgba(240,237,247,.16)` | `rgba(246,241,251,.18)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **18.63:1** · `ink-soft/bg` = **10.44:1** · `accent-ink/accent` = **9.02:1** · `ink-faint/bg` = **5.61:1**.
- Koyu modda değişen başka ne var: katman opaklıkları %10/%8 → %12/%9, ışıma %16 → %12, blur 8px → 6px (performans).
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="holographic-layer"]`.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **12.24:1** açık / **12.27:1** koyu · `--warn / bg` = **11.63:1** / **11.66:1** · `--ok / surface` = 11.39:1 / 10.82:1 (warn) · devre dışı buton metni = **8.11:1** / **9.41:1** · ghost buton kenarı = **5.53:1** / **5.70:1** (eşik 3:1).

## Zorunlu kurallar
- En fazla **üç** katman: ana katman opak, iki kopya 12px/24px offset, %10/%8 opaklık.
- Veri (metin, sayı, tablo) daima opak katmanda; cam katmanda veri yok.
- Blur ≤ 8px ve yalnız dekoratif katman/nav/tabbar.
- Michroma yalnız başlıkta ve 400; gövde Inter, etiket mono.
- Accent yalnız aktif katman/eylem/ışıma; ikinci renk yok.
- Hover'da katman 410ms içinde kayar ve durur; sürekli hareket yok.

## Yasaklar
- Üçten fazla katman, katman üstüne katman.
- Veri katmanında blur/şeffaflık.
- Sürekli iridesans / hue-rotate döngüsü.
- 28px üzeri radius.
- Neon dış ışıma, renkli gölge.
- Açık zemin (bu stil koyu holografik zeminde çalışır).
- Performans geri dönüşü olmadan mobilde tam blur.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 6.12:1; gövde 16.85:1; `ink-faint/bg` 4.71:1.
- Cam katmanlar dekoratiftir; tüm etkileşimli öğeler opak zeminde ve tam kontrastlıdır.
- `prefers-reduced-motion` açıkken katman kayması durur; `prefers-reduced-transparency` benzeri geri dönüşte `--surface` opak kullanılır.
- Odak halkası 2px accent + 3px offset; cam kenar ile karışmaz.
- Mobilde (≤ 768px) katman sayısı 1, blur 4px — düşük donanımda takılma önlenir.
- 390px'te Michroma başlık 27px'e iner (taşma yok), ölçü 62ch korunur.

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
| Okunmuyor | veri cam katmanda | veriyi opak `--surface`'e taşı |
| "Dağınık" görünüyor | rastgele offset | offset 12px'in katı, en fazla 3 katman |
| Telefon ısınıyor | tam blur + katman | mobilde 1 katman, blur 4px |
| Neon kitsch | iridesans + glow | iridesansı kaldır, accent'i tek tut |
| Kenar kayboluyor | hairline zayıf | `inset 0 1px 0` ink %8 ekle |
| Başlık taşıyor | Michroma çok geniş | `max-width` ch + clamp |

## Komşu stiller

- **Uyumlu:** `glassmorphism` — cam dili ortak; tek renk ailesine çekilirse uyumlu.
- **Uyumlu:** `liquid-glass` — sıvı cam kenarları; katman mantığı ile birleşebilir.
- **Uyumlu:** `ai-native-mesh` — mesh atmosfer ve cam kart; aynı AI ürün dilinde kullanılır.
- **Yasak:** `minimalism` — katmansız düz dil holografiyi anlamsızlaştırır.
- **Yasak:** `japandi` — sakin kağıt estetiği cam/blur ile çelişir.
- **Yasak:** `swiss-design` — keskin 0px ızgara ve baskı dili katman yığınını reddeder.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://developer.apple.com/design/human-interface-guidelines/materials | katman ve blur ölçüsü |
| https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter | cam katman kurulumu |
| https://m3.material.io/styles/elevation/tokens | katman opaklık kademeleri |
| https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html | cam katman kenarı görünürlüğü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Holographic Layer (styles/105-holographic-layer/style.md, tokens.json)
Token: sadece [data-style="holographic-layer"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display Michroma 400 (yalnız başlık, tracking .02em), gövde Inter 400/600,
  etiket IBM Plex Mono. Ölçek 10/12/15/19/26/44; gövde ölçü 62ch.
Yüzey: koyu mor-siyah; radius 20/28px; ana katman OPAK, arkasında 12/24px kaymış
  %10/%8 opaklıkta iki kopya; cam kenar 1px var(--line) + inset ink %8.
Imza: üç katman yığını + 24px mesh deseni + tek accent ışıma (%16, sağ üst);
  blur <= 8px yalnız nav/tabbar/dekoratif katmanda.
Renk: tek accent #8f7bff; veri katmanı daima opak, cam katmanda veri yok.
Hareket: enter .97s cubic-bezier(.32,.06,.2,1) y28 stagger .11; scroll top 76% .86s y24 once;
  1 pin scrub 1.25 (+130%, offset 12->28px); hover 410ms scale 1.038; reduced-motion zorunlu.
Yasak: 4. katman, veride blur, sürekli hue-rotate, 28px üstü radius, açık zemin.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] En fazla üç katman, offset 12px'in katı.
- [ ] Veri opak katmanda; cam katmanda metin yok.
- [ ] Blur ≤ 8px ve yalnız dekoratif yüzeylerde.
- [ ] Kontrast: gövde 16.85:1, accent üstü 6.12:1.
- [ ] Mobilde katman 1, blur 4px.
- [ ] 390px'te başlık taşmıyor.
- [ ] `prefers-reduced-motion` açıkken katman kayması duruyor.

## Token

```css
[data-style="holographic-layer"] {
  --bg: #0e0b16; --bg-2: #141020;
  --surface: #181323; --surface-2: #211a2e;
  --ink: #f0edf7; --ink-soft: #b3aac4; --ink-faint: #827896;
  --accent: #8f7bff; --accent-ink: #0a0713;
  --line: rgba(240,237,247,.16);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 28px 64px -44px rgba(4,2,10,.95); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "Michroma", ui-sans-serif, system-ui, sans-serif;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.02em; --blur: 8px; --grain: .02;
  --danger: #ff8a7a; --danger-ink: #200a07;
  --ok: #7fe0b0; --warn: #e8c46a;
}
```

Koyu mod bloğu `styles/105-holographic-layer/token-block.css` içinde `[data-theme="dark"][data-style="holographic-layer"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
