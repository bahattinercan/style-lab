# 97 · Optical Illusion

> **Bir cümlede:** Kenarları keskinleştirip desen frekansını yükselterek gözü yanıltan, ama hiçbir desenini hareket ettirmeyen statik optik stil.

| | |
|---|---|
| **Hissiyat** | keskin, zihinsel, gergin, "bakınca kayıyor" |
| **En iyi** | sanat/kültür etkinliği vitrini, ajans portfolyosu, sergi kataloğu, editoryal özel sayı |
| **Kaçın** | uzun okuma, sağlık/kamu formu, epilepsi/baş ağrısı hassasiyeti olan kullanıcılar için zorunlu ekranlar |
| **Zorluk** | yüksek (illüzyonu güvenli tutmak) · **Erişilebilirlik** | yüksek risk (desen frekansı ve titreme — bu stilde **desen asla animasyonlanmaz**) |
| **Aile** | Hareket & Optik (96–105) · **Token** | `kit/tokens.css` → `[data-style="optical-illusion"]` |
| **Kompozisyon** | `sticky` · `pill` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Optical Illusion, algıyı **frekans ve açı** ile bozan stildir: iki çizgi ızgarasının 1–3° çakışmasıyla **moiré**, 4px **yarım ton** nokta ızgarası, 2px değişimli **kenar bandı** ve ekran başına tek **şekil-zemin** paneli. Kurucu kararları üç tanedir. Birincisi **keskinlik**: radius 0, gölge yok, blur yok — illüzyon ancak keskin kenarda çalışır. İkincisi **statik desen**: desen hareket etmez; hareket yalnız geçişlerde (0.34s giriş, 90ms hover) bulunur. Üçüncüsü **tek illüzyon odağı**: ekranda bir desen başroldedir, diğerleri %6–8 opaklıkla geri çekilir.

Kazandığı şey: **bakışı tutma** — bir moiré paneli, aynı alandaki 6 karttan daha uzun süre bakılır. Feda ettiği şey: **konfor**; bu yüzden stilin en sert kuralı desenin animasyonsuz kalmasıdır (WCAG "three flashes" eşiği).

### Ne değildir
- **Anti-Design (14) değildir:** 14 bilinçli kırık hiza ve karışık tipografiyle kaos kurar; burada her şey ızgarada, kaos yalnız **desen katmanında** ve kontrollü.
- **Kinetic Marquee (96) değildir:** 96 hareketle (marquee, skew) çalışır; 97 **hareketsiz** çalışır — deseni hareket ettirmek stilin ihlalidir.
- **Constructivism (36) değildir:** 36 kalın çerçeve + kırmızı-siyah bloklarla **propaganda** kompozisyonu kurar; burada çerçeve 1–2px ve ana araç **frekans/optik kayma**.
- **Swiss Design (02) değildir:** 02 ızgarayı görünmez kılar; burada ızgara **görünür ve yanıltıcıdır** (moiré + yarım ton).
- **"Retro tarama efekti" değildir:** CRT tarama çizgisi statik bir doku değil taklit; burada desen ölçülü (1px/6px, 4px nokta) ve işlevseldir.

### Nereden gelir
Op-art (Vasarely, Riley) 1960'larda izleyicinin gözünü desenin içinde "kaydırarak" sanat yaptı; baskıda moiré uzun süre bir **hata** sayıldı, sonra bilinçli estetik oldu. Dijitalde CSS `repeating-linear-gradient` + `rotate` ile iki ızgara çakıştırılarak yeniden üretilebiliyor. Klişeye dönüşmemesi için korunacak detay: **açı farkının 1–3° ile sınırlı kalması** ve desenin asla animasyonlanmaması.

### 3 saniyede tanıma testi
1. En az bir panelde iki çizgi ızgarası hafif açıyla çakışıyor (moiré).
2. Köşeler tamamen keskin; hiçbir yüzeyde gölge yok.
3. Yüksek kontrast siyah/beyaz + tek kırmızı-magenta vurgu.
4. Bir köşede 4px nokta ızgarası ya da 2px değişimli kenar bandı var.
5. Hiçbir desen hareket etmiyor — hareket yalnız hover ve geçişlerde.

## Görsel imza
1. **Moiré:** iki `repeating-linear-gradient` ızgara, ikincisi `rotate(2deg)`; en çok **1** panelde, `%72` opaklık.
2. **Yarım ton:** `4px 4px` nokta ızgarası, kart köşesinde 32×32 blok, `%55` opaklık.
3. **Kenar bandı:** 2px siyah / 2px boşluk değişimi; nav altı 8px yükseklik (statik).
4. **Keskinlik:** `--radius: 0px`, `--radius-lg: 0px`, `--shadow: none`; hiçbir yüzeyde yuvarlaklık yok.
5. **Şekil-zemin:** en çok 1 panel; iki daire + çizgi ızgarası, `%8` zemin dokusu.
6. **Archivo Black display:** 44px, `-0.01em`; gövde Inter 15px/1.6, etiket Space Mono.
7. **Hover dili:** 90ms'de zemin siyah → accent'e kırılır; görsel ölçek `1.045` (desen büyür, kaymaz).

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#fbfbfb` | sayfa zemini | desen zemini |
| `--surface` | `#ffffff` | kart, panel, modal | sayfa zemini |
| `--surface-2` | `#f4f4f4` | çip, zebra, ikincil buton | birincil eylem |
| `--ink` | `#0a0a0a` | başlık, gövde, **desen rengi** | devre dışı |
| `--ink-soft` | `#464646` | etiket, açıklama | başlık |
| `--ink-faint` | `#8a8a8a` | dekoratif: dipnot, ikinci desen katmanı | etkileşimli metin |
| `--accent` | `#b8123f` | hover kırılması, odak halkası, tek vurgu | desen rengi, geniş dolgu |
| `--accent-ink` | `#ffffff` | accent üstü metin | gövde metni |
| `--line` | `rgba(10,10,10,.12)` | ikincil ayırıcı, tablo çizgisi | desen (desen `--ink` kullanır) |
| `--danger` / `--ok` / `--warn` | `#a00d1f` / `#259953` / `#b27c00` | hata / onay / uyarı | desen, dekorasyon |

- Ölçülen kontrast (açık): `ink / bg` = **19.13:1** · `ink-soft / bg` = **9.12:1** · `accent-ink / accent` = **6.57:1** · `ink-faint / bg` = **3.34:1** (yalnız dekoratif).
- Tek vurgu kuralı: kırmızı-magenta yalnız kırılma/odak anlamında; desen daima `--ink`.
- Yasak kombinasyon: deseni accent ile çizmek (optik kayma kaybolur); ikinci doygun renk eklemek.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Black (`--font-display`) | 44px (mobil 28px) | 400 (tek ağırlık) | 1.06 | `--tracking` -0.01em |
| H2 | Archivo Black | 26px | 400 | 1.2 | -0.01em |
| H3 | Archivo Black | 19px | 400 | 1.28 | -0.01em |
| Gövde | Inter (`--font-body`) | 15px | 400 | 1.6 | 0 |
| Küçük / açıklama | Inter | 13px | 400 | 1.5 | 0 |
| Etiket / mono | Space Mono (`--font-mono`) | 11px | 400 | 1.35 | 0.2em (büyük harf) |

- Ölçek oranı **1.5** (11 → 15 → 26 → 44); kullanılan basamak sayısı 5: 11/13/15/26/44.
- Ölçü: `h1 { font-size: clamp(28px, 4vw, 44px) }`.
- Gövde metni maksimum satır uzunluğu: **54 ch** (desen üstünde okuma payı).
- Ağırlık kuralı: display tek ağırlık (400 = Archivo Black'in kendisi); gövde 400/500. İtalik yasak.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (1240px üstü), 8 (768–1239), 4 (390–767) |
| Gutter | 16px |
| Container genişliği | 1200px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1240px: illüzyon paneli 8 / metin 4; 768px: 6/6; 390px: tek kolon, moiré paneli tam genişlik |

- Asimetri kuralı: ekran başına **1** asimetrik bölüm (8/4) — o bölüm illüzyon panelidir.
- Bölüm ritmi: 64px (mobil 40px); art arda en fazla **1** desen bloğu (göz yorulmasın).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | sayfa, statik desen zemini |
| Kart | `--surface` | yok | panel, tablo, liste |
| Yüzen katman | `--surface` + 2px `--ink` çerçeve | `none` | modal, açılır menü |

- Kenarlık formülü: `1px solid var(--ink)` (kart/input), `2px` (nav alt, ikincil buton, modal).
- Derinlik nereden gelir: **hiçbir yerden**; illüzyon düzlemde çalışır, gölge onu bozar.
- Radius: 0px — istisna yok.

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 44px | 0 20px | 0 | 13px Archivo Black, .06em, büyük harf | ink zemin / bg metin | hover 90ms'de accent zemin · active 1px aşağı · focus 2px halka · disabled %40 kesikli · loading 4 kare nokta 480ms steps(4) |
| Buton (ikincil) | 44px | 0 20px | 0 | 13px Inter | şeffaf + 2px ink | hover ters çevirme (ink zemin) |
| Input | 42px | 0 12px | 0 | 14px Inter | surface + 1px ink | focus 2px accent halka offset 0 · error 2px sol danger · disabled %40 |
| Kart | — | 20px | 0 | başlık 26px Archivo Black | surface + 1px ink + köşede yarım ton | normal · illüzyon kartı (moiré) · seçili (2px accent) |
| Chip | 22px | 0 8px | 0 | 11px Space Mono, .08em | surface-2 + 1px ink | seçili: accent zemin |
| Nav | 60px (+8px bant) | 0 20px | 0 | 13px Inter | bg + 2px ink alt çizgi | aktif: accent 2px alt çizgi |
| Tablo satırı | 38px | 0 10px | 0 | 14px Inter / mono sayı | alt 1px `--line`, %4 zebra | hover `--surface-2` · seçili sol 2px accent |
| Modal | — | 24px | 0 | başlık 26px Archivo Black | surface + 2px ink çerçeve | açılış 340ms · Esc kapatır · çevresinde 8px bant |
| Toast | 40px | 0 12px | 0 | 13px Inter | surface + sol 8px bant | animasyon yok, görünür/görünmez · 5000ms |
| Grafik paleti | — | — | — | eksen 11px mono | ink → accent → ink-soft | en çok 3 seri · 2px çizgi + 4px kare işaret |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 2px`; input'ta `offset: 0` (keskin kenara yapışık).
- Dokunma hedefi: 44px buton; 38px satır mobilde 44px; 22px çipler 44×44px sarmalayıcı ile büyütülür.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 16px, 1.5px çizgi; desenle yarışmaması için sade, köşe yarıçapı 0 |
| Fotoğraf | yok; zorunluysa yarım ton (4px nokta) + 1px çerçeve |
| İllüstrasyon | CSS illüzyon: moiré, yarım ton, şekil-zemin; hazır görsel yok |
| Doku | 2px kenar bandı + 4px nokta ızgarası; grain 0 (grain deseni kirletir) |
| Logo alanı | Archivo Black 15px + 12×12 moiré karesi; 16px boşluk |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | 8/4: moiré paneli + 44px display | `shots/01-landing.png` |
| Dashboard | orta | 2 kart (biri yarım ton köşeli) + 3 serili grafik | `shots/02-dashboard.png` |
| Form | düşük | 42px keskin alanlar, desen yalnız üstte | — |
| Liste / tablo | orta | 38px satır, %4 zebra, mono sayı | — |
| Boş durum | orta | boş yarım ton blok + tek CTA | — |
| Onboarding | yüksek | 3 adım, her adımda tek illüzyon | — |
| Pricing | orta | 3 keskin kart, orta kart 2px accent çerçeve | — |
| Giriş / ödeme | çok düşük | desen yok, yalnız keskin form | — |
| Modal | orta | 2px ink çerçeve + 8px bant | — |
| Bildirim / toast | orta | sol 8px bant, animasyonsuz | — |
| Hata | düşük | desen durur/kaldırılır, mesaj `--danger` çerçeve | — |
| Profil / ayar | orta | "desen yoğunluğu: azalt" anahtarı | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.
- **Landing hero (stile özel sahne):** `shots.config.fragment.mjs → scenes.landing` — şekil–zemin testi — dönüşümlü terslenen satırlar, moiré perde.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | 340ms | `cubic-bezier(.9,0,.1,1)` | `opacity` + `translateY(18px)`, öğe başına 60ms stagger |
| Scroll reveal | 280ms | `cubic-bezier(.9,0,.1,1)` | `top 82%` tetiği, 8px, `once: false` |
| Basma | 90ms | `linear` | `translateY(1px)` |
| Hover | 90ms | `linear` | zemin kırılması + görsel ölçek `1.045` |
| Pin / scrub | kapalı | — | — (desen sabitlenmez) |
| Desen | 0ms | — | **statik**; animasyonlu desen yasak |
| Durdurma | — | — | kullanıcı "desen yoğunluğu: azalt" ile deseni kapatabilir |

- Ölçülebilir imza: `enter 0.34s / cb(.9,0,.1,1) / 18px / 0.06` · `scroll top 82% / 0.28s / 8px / once:false` · `hover 90ms / 1.045` · `pin kapalı`.
- `prefers-reduced-motion`: tüm süreler 0.01ms; desenler zaten statik olduğu için içerik değişmez.
- Bu stile yasak hareket: desenin kendisinin animasyonu, flicker, sürekli döngü, blur geçişi.

## Koyu mod

| Token | Açık | Koyu |
|---|---|---|
| `--bg` | `#fbfbfb` | `#0a0a0a` |
| `--bg-2` | `#f1f1f1` | `#121212` |
| `--surface` | `#ffffff` | `#171717` |
| `--surface-2` | `#f4f4f4` | `#1f1f1f` |
| `--ink` | `#0a0a0a` | `#f7f7f7` |
| `--ink-soft` | `#464646` | `#b0b0b0` |
| `--accent` | `#b8123f` | `#ff5d7e` |
| `--accent-ink` | `#ffffff` | `#20040a` |

- Ölçülen kontrast (koyu): `ink / bg` = **18.48:1** · `ink-soft / bg` = **9.13:1** · `accent-ink / accent` = **6.57:1** · `ink-faint / bg` = **4.81:1**.
- Koyu modda değişen başka ne var: desen rengi `--ink` (beyaz) olduğu için moiré kontrastı tersine döner — opaklık .72 → .55 (beyaz çizgi daha agresif); kenar bandı kalınlığı aynı kalır.
- `filter: invert()` yasak; palet elle yazılır.
- **QA dalgası ölçümü (düzeltme sonrası):** `--ok / bg` = **8.80:1** açık / **5.43:1** koyu · `--warn / bg` = **7.79:1** / **5.45:1** · `--ok / surface` = 4.92:1 / 4.93:1 (warn) · devre dışı buton metni = **8.81:1** / **8.27:1** · ghost buton kenarı = **4.39:1** / **5.89:1** (eşik 3:1).

## Zorunlu kurallar
- Desenler statiktir; hiçbir desen animasyonlanmaz (flicker yasak).
- Moiré yalnız 1–3° açı farkı ile ve ekran başına en fazla 1 panelde.
- Yarım ton 4px nokta; kenar bandı 2px/2px değişimli.
- Radius her yerde 0px; gölge hiçbir yüzeyde yok.
- Ekran başına en fazla 1 şekil-zemin paneli ve toplam 2 desen katmanı.
- Desen asla metnin arkasına girmez; metin daima temiz zeminde.
- Renk, radius, gölge yalnız `--…` token'larından gelir.

## Yasaklar
- Animasyonlu veya hafif titreyen desen; saniyede 3'ten fazla ton değişimi.
- Gradient, gölge, blur, yuvarlak köşe.
- Üçten fazla kontrast desenini aynı ekranda birleştirmek.
- Deseni accent rengiyle çizmek.
- Tam kanamalı fotoğraf; CRT tarama çizgisi taklidi.
- Desenü metnin arkasına koymak.
- Uydurma sanatçı/sergi adı; eksik içerik `{{work}}` gibi işaretli yer tutucu olur.

## Erişilebilirlik
- Ölçülen riskler: en düşük çift `--ink-faint / bg` = **3.34:1** (dekoratif dipnot); etkileşimli metin `--ink` 19.13:1, `--ink-soft` 9.12:1.
- Titreme: WCAG 2.2 "Three Flashes" gereği desen animasyonu yok; desen yoğunluğu ayarı (`azalt`) her ekranda erişilebilir.
- Desen bilgi taşımaz; durum daima metin/ikon ile yazılır.
- Şeffaf yüzey yok (`--blur: 0px`), `@supports` fallback gerekmez.
- Odak görünürlüğü: desensiz zeminde 2px kırmızı halka 6.57:1; illüzyon panelinin içinde odak alan öğe bulunmaz (yalnız okunur).

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
| Baş ağrısı / okunamıyor | desen metnin arkasında veya animasyonlu | deseni metinden ayır, animasyonu kaldır |
| "Retro efekt" gibi duruyor | desen çok yoğun (2px altı aralık) | 4–6px aralık ve %55–72 opaklıkta kal |
| Ekran kirli görünüyor | 3'ten fazla desen katmanı | 2 katmana indir, birini %8'e düşür |
| Moiré görünmüyor | iki ızgara aynı hizada | ikinci ızgarayı 1–3° döndür ve aralığı 1px farklılaştır |
| Yumuşak görünüyor | radius veya gölge eklenmiş | 0px ve gölgesize dön |
| Vurgu kayboluyor | desen accent ile çizilmiş | desen `--ink`, vurgu yalnız kırılma/odak |

## Komşu stiller

- **Uyumlu:** `swiss-design` — ızgara disiplini ortak; desen katmanı 97'den, tipografi 02'den alınır.
- **Uyumlu:** `anti-design` — deneysel vitrin; ancak 97'de kaos yalnız desen katmanında.
- **Uyumlu:** `constructivism` — yüksek kontrast ve keskin kenar; aynı ekranda desen sayısı 2'yi geçmez.
- **Yasak:** `glassmorphism` — blur/şeffaflık moiré frekansını yok eder.
- **Yasak:** `claymorphism` — yuvarlak ve yumuşak yüzey illüzyonun tek koşulu olan keskinliği bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://en.wikipedia.org/wiki/Moir%C3%A9_pattern | ızgara açısı ve desen frekansı ilişkisi |
| https://en.wikipedia.org/wiki/Figure%E2%80%93ground_organization | şekil-zemin panelinin algı kuralı |
| https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html | titreyen desen yasağının ölçütü |
| https://fonts.google.com/specimen/Archivo+Black | tek ağırlıklı display ve keskin harf formu |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Optical Illusion (styles/97-optical-illusion/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="optical-illusion"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: --font-display (Archivo Black) başlıkta, --font-body (Inter) gövdede,
           --font-mono (Space Mono) etiket ve sayılarda.
Yüzey: --bg / --surface / --surface-2; radius 0px (istisna yok), gölge YOK, blur YOK.
Desen: moire (iki izgara, 1-3 derece) en fazla 1 panelde; yarim ton 4px nokta; kenar bandi 2px/2px.
       Desenler STATIK — animasyon ve flicker yasak; metin asla desen uzerinde degil.
Imza: enter 0.34s cubic-bezier(.9,0,.1,1) 18px / stagger 0.06; scroll top 82% 0.28s 8px once:false;
      hover 90ms scale 1.045; pin yok.
Yasak: animasyonlu desen, gradient/golge/blur/radius, deseni accent ile cizmek, 3'ten fazla desen katmani.
Cikti: bilesen kodu + tek paragraf not (hangi imza ogeyi nerede kullandin).
```

**Teslim öncesi öz-denetim**
- [ ] Ekranda imza öğelerinden en az 2'si görünüyor (moiré, yarım ton, kenar bandı, şekil-zemin).
- [ ] Hiçbir renk/radius/gölge hard-coded değil.
- [ ] Kontrast: gövde ≥ 4.5:1, büyük metin ≥ 3:1.
- [ ] Hiçbir desen animasyonlanmıyor; metin temiz zeminde.
- [ ] 390px genişlikte taşma yok; desen katmanı ≤ 2.
- [ ] `prefers-reduced-motion` açıkken geçişler duruyor.

## Token

```css
[data-style="optical-illusion"] {
  --bg: #fbfbfb; --bg-2: #f1f1f1;
  --surface: #ffffff; --surface-2: #f4f4f4;
  --ink: #0a0a0a; --ink-soft: #464646; --ink-faint: #8a8a8a;
  --accent: #b8123f; --accent-ink: #ffffff;
  --line: rgba(10,10,10,.12);
  --radius: 0px; --radius-lg: 0px;
  --shadow: none; --shadow-hard: none;
  --font-display: "Archivo Black", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
  --danger: #a00d1f; --danger-ink: #ffffff; --ok: #259953; --warn: #b27c00;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="optical-illusion"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
