# 15 · Acid Graphics

> **Bir cümlede:** Siyah zemin üzerinde asit yeşili neon, genişletilmiş grotesk tipografi ve distorsiyon — tekno kültürün görsel gürültüsü.

| | |
|---|---|
| **Hissiyat** | keskin, agresif, tekno, "gece 3" enerjisi |
| **En iyi** | müzik/etkinlik, moda kampanyası, kulüp, indie lansman, kültür dergisi |
| **Kaçın** | kurumsal SaaS, sağlık, finans, uzun okuma, parlak ortam kullanımı |
| **Zorluk** | orta · **Erişilebilirlik** | orta-yüksek risk (parlama) |
| **Aile** | Cesur (13–18) · **Token** | `kit/tokens.css` → `[data-style="acid-graphics"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Acid graphics, 90'lar tekno flyer estetiğinin dijital hali: **siyah zemin**, **asit yeşili** (#ccff00) vurgu, **genişletilmiş grotesk** display (Archivo Expanded/Druk Wide), **glow** ve **distortion/scanline**. Renk sayısı azdır ama kontrast maksimumdur; tipografi poster gibi davranır.

Kazandığı şey: ani dikkat ve kültürel aidiyet. Feda ettiği şey: konfor ve kurumsal güven.

### Ne değildir
- **Neo-brutalism değildir.** Brutalism siyah *kontur* kullanır; acid'de kontur yok, **glow** var.
- **Cyberpunk değildir.** Cyberpunk HUD/terminal anlatısı; acid sadece grafik enerji.
- **Synthwave değildir.** Synthwave pembe/mor sunset; acid tek renk asit yeşili.
- **"Siyah + yeşil" değildir.** Genişletilmiş tipografi + glow + grain/distortion olmadan sadece "tema" olur.

### Nereden gelir
90'lar tekno/rave flyer'ları, fotokopi distorsiyonu ve anti-kurumsal grafik dil; 2019+ moda/müzik kampanyalarında geri döndü. Dijitalde etkinlik ve lansman sayfalarında kullanılıyor — okunabilirlik ikinci plandadır ama **kaybolmamalıdır**.

### 3 saniyede tanıma testi
1. Zemin **neredeyse siyah** mı (#050505)?
2. Tek vurgu **asit yeşili** mi (#ccff00)?
3. Display **genişletilmiş/condensed** ve büyük harf mi?
4. Glow (0 0 24px) veya scanline/distortion var mı?
5. Grain (`.08`) görünür mü — poster baskısı hissi?

## Zorunlu kurallar

1. **Tek vurgu:** asit yeşili; ikinci doygun renk yok (beyaz metin sayılır).
2. **Glow ölçülü:** tek katman `0 0 24px accent %25`; her öğede glow yok.
3. **Genişletilmiş display:** Archivo Expanded/Druk Wide, uppercase, `0.01em` tracking.
4. **Grain .08:** poster/fotokopi hissi; düşürme.
5. **Kontrast tabanı:** asit üstünde siyah metin (17.35:1), siyah zeminde beyaz metin (19.74:1).
6. **Hareket/parlama sınırı:** ekran başına 1 sürekli animasyon; `prefers-reduced-motion` durdurur.

## Yasaklar

- İkinci neon renk (pembe/mor) — synthwave'e kayar.
- Metni okunmaz kılan distorsiyon (gövde metninde glitch yok).
- Her öğede glow (ışık kirliliği).
- Uzun paragraf (3 satırdan fazla) asit zemin üstünde.
- Açık tema / beyaz zemin (stilin karakteri biter).
- Hızlı yanıp sönen animasyon (fotosensitivite riski).

## Görsel imza
- **Asit yeşili blok:** buton, çizgi, tek kelime vurgusu; alan ≤ %15.
- **Glow:** `0 0 24px rgba(204,255,0,.25)` — sadece birincil buton ve başlıkta.
- **Scanline:** `repeating-linear-gradient` 1px/4px, opacity .06.
- **Genişletilmiş display:** 72–96px, satır aralığı 0.9.
- **Grain .08:** tüm zeminde.
- **Mono etiket:** 10px, `0.2em`, uppercase.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#050505` | zemin | kart (kart `--surface`) |
| `--bg-2` | `#101010` | ikinci zemin, bölüm | metin |
| `--surface` | `#0e0e0e` | panel | sayfa |
| `--surface-2` | `#161616` | hover, ikincil | vurgu |
| `--ink` | `#f2fff0` | metin | — |
| `--ink-soft` | `rgba(242,255,240,.72)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(242,255,240,.45)` | dekoratif (4.35:1) | etkileşimli |
| `--accent` | `#ccff00` | CTA, çizgi, tek kelime, grafik | geniş zemin (metin boğar) |
| `--accent-ink` | `#050505` | accent üstü metin (**17.35:1**) | — |
| `--line` | `rgba(204,255,0,.35)` | kenarlık (asit tonlu) | metin |

- Ölçülen kontrast: `ink/bg` **19.74:1** · `ink-soft/bg` **10.08:1** · `ink-faint/bg` **4.35:1** · `accent-ink/accent` **17.35:1**.
- Asit zemin üstünde **siyah** metin; beyaz metin asit üstünde yasak.
- Yasak: ikinci neon, gradient zemin, pastel tonlar.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | Archivo Expanded / Druk Wide | 88px (mobil 40px) | 700 | 0.9 | `0.01em`, uppercase |
| H2 | aynı | 44px | 700 | 0.95 | `0.01em` |
| H3 | Space Grotesk | 20px | 700 | 1.2 | `0` |
| Gövde | Space Grotesk | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.15 | `0.2em`, uppercase |
| Buton | Space Grotesk | 15px | 700 | 1 | `0.08em`, uppercase |

- Genişletilmiş aile yoksa: Archivo Black + `transform: scaleX(1.08)` (yalnız başlıkta, `letter-spacing` azaltılarak).
- Gövde 16px/1.6, satır 58ch; asit blok üstünde metin ≤ 2 satır.
- Display'de 700 sabit; 400 kullanma (genişletilmiş font ince kalır, okunmaz).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (hero 7/5) |
| Gutter | 20px |
| Container | 1280px |
| Boşluk ölçeği | 4 · 8 · 16 · 24 · 40 · 64 · 96 |
| Breakpoint | 640 / 900 / 1280 px |
| Bölüm dikey | 88px (mobil 52px) |

- Izgara sıkı: boşluk azaltılır, tipografi büyür — "poster dolu" hissi.
- Bir bölümde en fazla 1 tam genişlik asit blok.
- Kart aralığı 12px (sıkı); kart içi 20px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` + grain + scanline | yok | sayfa |
| Panel | `--surface` + 1px asit kenar | `--shadow` (glow) | kart, hero |
| Yüzen | `--surface` | daha güçlü glow | modal |

- Derinlik ışıktan (glow), ızgara gölgesinden değil.
- Radius 0; istisna 2px (chip/input).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 48px | 0 24px | 0 | 15/700 uppercase | `--accent` + `--accent-ink` + glow | hover: glow 32px · active: iç gölge · focus: 2px asit halka, offset 3px · disabled: %38 |
| Buton (çerçeve) | 48px | 0 22px | 0 | 15/700 | `transparent` + 1px asit kenar, asit metin | hover: asit %10 dolgu |
| Input | 48px | 0 14px | 2px | 15/400 | `--surface` + 1px asit kenar | focus: 2px asit halka · error: `--danger` kenar + metin |
| Kart | içerik | 20px | 0 | H3 + 15 | `--surface` + 1px `--line` + hafif glow | hover: kenar asit %60 |
| Chip | 26px | 0 10px | 2px | 10/500 mono | asit %12 dolgu + asit kenar | aktif: asit zemin + siyah metin |
| Nav | 64px | 0 24px | 0 | 12/700 uppercase | `--bg` + alt 1px `--line` | aktif: asit metin |
| Tablo satırı | 48px | 10px 12px | 0 | 14/400 mono sayı | satır altı asit %18 | hover: `--surface-2` |
| Modal | içerik | 24px | 2px | H2 + 15 | `--surface` + güçlü glow | backdrop: `rgba(0,0,0,.7)` + scanline |
| Toast | 44px | 0 16px | 0 | 13/700 | asit zemin + siyah metin | 3sn |
| Grafik | — | — | 0 | eksen 10 mono | asit çizgi + asit %25 dolgu | 1 seri |

- Odak halkası asit 2px, offset 3px — siyah zeminde 19:1.
- Dokunma hedefi 48px; küçük mono etiketler tıklanabilir olmaz.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 2px çizgi, 22px, asit veya beyaz |
| Fotoğraf | Yüksek kontrast, sert flash, siyah-beyaz + asit duotone |
| İllüstrasyon | Distortion/glitch, kopya efektli |
| Doku | grain .08 + scanline .06 |
| Logo | Genişletilmiş, beyaz veya asit; crop serbest |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | çok yüksek | 88px genişletilmiş başlık, asit blok, glow'lu tek buton, scanline zemin | `shots/01-landing.png` |
| Dashboard | düşük | Glow ve scanline kapanır; mono sayılar + asit vurgu çizgileri | `shots/02-dashboard.png` |
| Form | düşük | Siyah panel, asit kenarlı input, tek buton; glitch yok | — |
| Liste / tablo | düşük | Düz siyah zemin, ince asit ayırıcı | — |
| Boş durum | orta | Dev mono numara + tek cümle + buton | — |
| Onboarding | yüksek | Sayfa başına 1 mesaj, büyük tipografi, minimal öğe | — |
| Pricing | orta | 2–3 panel, orta panel asit kenar ± glow | — |
| Giriş / ödeme | çok düşük | Glow/scanline kapalı; sade siyah form | — |
| Modal | orta | Glow'lu panel, siyah backdrop | — |
| Bildirim / toast | orta | Asit zemin + siyah metin, 3sn | — |
| Hata | düşük | Asit yerine `--danger`; kısa metin | — |
| Profil / ayar | düşük | Düz liste, asit yalnız aktif durumda | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `ease-out` | `transform: scale(.98)` |
| Giriş | 250ms | `steps(4, end)` | `opacity` + 4px `translateY`, stagger 30ms |
| Scroll (`top 90%`) | 240ms | aynı eğri | `opacity` + 16px `translateY`, `once: true` |
| Hover | 80ms | aynı eğri | `transform: scale(1.03)` |
| Scanline | 8s | `linear` | `background-position` (çok yavaş) |
| Ödül / vurgu | 240ms | `steps(2)` | glitch `clip-path` kayması (başlıkta 1 kez) |

- Yanıp sönme (strobe) yasak; frekans < 3Hz ve tek seferlik.
- `prefers-reduced-motion`: scanline ve glitch kapanır.

## Koyu mod

Bu stil **koyu tabanlı**; açık tema önerilmez. Gerekirse:

| Token | Koyu (varsayılan) | Açık (önerilmez) |
|---|---|---|
| `--bg` | `#050505` | `#f2fff0` |
| `--surface` | `#0e0e0e` | `#ffffff` |
| `--ink` | `#f2fff0` | `#050505` |
| `--accent` | `#ccff00` | `#7aa600` |
| `--accent-ink` | `#050505` | `#ffffff` |

- Açık varyantta asit yeşili koyulaştırılır (kontrast için), glow kaldırılır.

## Erişilebilirlik

- Gövde 19.74:1, açıklama 10.08:1 → güvenli; `--ink-faint` 4.35:1 → etkileşimli değil.
- Asit üstü siyah 17.35:1 → ideal; beyaz metin yasak.
- **Parlama riski:** glow + scanline + grain birleşince göz yorar → ekranda 1 glow, 1 scanline.
- Strobe/flash animasyonu yasak (fotosensitivite); yalnız yavaş scanline.
- Odak halkası asit; siyah zeminde 19:1.
- Gövde metni glitch/distortion'a sokulmaz; yalnız display'de 1 kez.
- Dokunma hedefi 48px.

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
| Migren/göz yorgunluğu | Her öğede glow + scanline + grain | 1 glow, 1 scanline; grain sabit |
| "Synthwave" göründü | İkinci neon renk eklendi | Tek asit yeşili; pembe/mor yok |
| Okunmuyor | Asit zemin üstünde beyaz metin | Siyah metin; alan ≤ %15 |
| Karakter kaybı | Genişletilmiş font yerine Inter | Archivo Expanded veya scaleX(1.08) |
| Yavaş | Sürekli animasyonlu glow | Statik glow, yalnız hover'da artış |

## Komşu stiller

- **Uyumlu:** `22 cyberpunk` (neon + kir), `14 anti-design` (distortion), `24 pixel-art` (tekno nostalji).
- **Yasak:** `01 minimalism` (sükûnet), `06 japandi` (yumuşaklık), `04 luxury-typography` (seyrek lüks).

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://www.awwwards.com/websites/acid/ | Asit grafik örnekleri |
| https://fonts.google.com/specimen/Archivo | Genişletilmiş eksen (Expanded) |
| https://www.nngroup.com/articles/flash-animations/ | Flash/strobe riski |

## AI brief

```
Stil: Acid Graphics (styles/15-acid-graphics/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="acid-graphics"]; hard-coded renk YASAK.
Zemin: #050505 + grain .08 + 1 scanline katmanı (rgba(204,255,0,.06)).
Vurgu: TEK asit yeşili #ccff00; asit üstünde SİYAH metin (17.35:1); ikinci neon renk yasak.
Glow: tek katman 0 0 24px rgba(204,255,0,.25) — yalnız birincil buton/başlık.
Tipografi: Archivo Expanded/Druk Wide display 700 uppercase (88/0.9) + Space Grotesk gövde 16/1.6; etiket mono 10 uppercase 0.2em.
Radius 0 (chip/input 2px). Kenarlık 1px asit %35.
Hareket: 90–240ms, steps(4) serbest; strobe/flash YASAK; reduced-motion'da scanline kapanır.
Yoğun ekran (form/dashboard/ödeme): glow ve scanline kapanır, asit yalnız vurgu çizgisinde.
Çıktı: kod + tek paragraf not (asit alan oranı ve parlama önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Tek vurgu asit yeşili; ikinci neon yok.
- [ ] Asit üstünde siyah metin; beyaz metin yok.
- [ ] Asit alanı ≤ %15.
- [ ] Ekranda 1 glow + 1 scanline.
- [ ] Radius 0/2, kenarlık asit %35.
- [ ] Strobe yok; `prefers-reduced-motion` scanline'ı durduruyor.

## Token

```css
[data-style="acid-graphics"] {
  --bg: #050505; --bg-2: #101010;
  --surface: #0e0e0e; --surface-2: #161616;
  --ink: #f2fff0; --ink-soft: rgba(242,255,240,.72); --ink-faint: rgba(242,255,240,.45);
  --accent: #ccff00; --accent-ink: #050505;
  --line: rgba(204,255,0,.35);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 0 24px rgba(204,255,0,.25); --shadow-hard: none;
  --font-display: "Archivo Expanded", "Druk Wide", "Anton", sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 0px; --grain: .08;
}
```
