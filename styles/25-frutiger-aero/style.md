# 25 · Frutiger Aero

> **Bir cümlede:** 2004–2010'un parlak teknolojisi: gök mavisi, cam-gloss butonlar, su damlası ve iyimserlik.

| | |
|---|---|
| **Hissiyat** | taze, parlak, iyimser, "yeni binyıl" |
| **En iyi** | nostalji ürünü, kampanya, eğitim, çevre/su temalı marka, lansman |
| **Kaçın** | kurumsal B2B, sağlık verisi, lüks, koyu arayüz |
| **Zorluk** | orta (parlaklık dozu) · **Erişilebilirlik** | orta (düşük kontrast riski) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="frutiger-aero"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Frutiger Aero, 2000'ler ortasının teknoloji iyimserliği: **gökyüzü mavisi** zemin, **cam parlaklık** (inset beyaz highlight), **su/kabarcık** motifleri, yumuşak gradient'ler ve yuvarlak hatlı tipografi (Segoe UI). Her buton "taze ve temiz" görünür.

Kazandığı şey: anında nostalji + tazelik. Feda ettiği şey: ciddiyet ve kontrast payı (açık mavi üstünde ince metin kaybolur).

### Ne değildir
- **Y2K değildir.** Y2K metalik/krom ve teknoid tipografi; Aero **organik** (su, gökyüzü, çimen).
- **Glassmorphism değildir.** Cam orada katman; Aero'da parlaklık **yüzeyin kendisi**.
- **"Mavi gradient" değildir.** Su/kabarcık motifi + gloss highlight + yuvarlak hat olmadan sadece mavi tema olur.
- **Flat design değildir.** Aero parlaklık ve hafif gradient ister.

### Nereden gelir
Windows Vista/7 Aero, erken iPhone ve 2000'ler web 2.0 estetiği; 2020'lerde "aero revival" ile kampanyalarda döndü.

### 3 saniyede tanıma testi
1. Zemin gökyüzü/su mavisi mi (#dff1ff)?
2. Butonlarda **cam gloss** (üstte beyaz highlight) var mı?
3. Su/kabarcık veya yaprak motifi var mı?
4. Radius 14–22px ve yumuşak mı?
5. Gradient yumuşak (sert değil) mi?

## Zorunlu kurallar

1. **Parlaklık üçlüsü:** dikey gradient + `inset 0 1px 0 #fff` + yumuşak mavi gölge.
2. **Gökyüzü paleti:** bg #dff1ff → bg-2 #bfe3ff; sıcak renk yok.
3. **Radius 14/22px**; buton pill serbest.
4. **Motif:** ekran başına 1 (kabarcık, su damlası veya yaprak); 2. motif yok.
5. **Metin kontrastı ≥ 4.5:1:** açık mavi üstünde `--ink` (#0d2b45).
6. **Blur ≤ 6px** ve yalnız cam panelde.

## Yasaklar

- Sert gölge, siyah kontur, 0 radius.
- Koyu zemin / neon.
- Açık mavi üstünde beyaz metin (kontrast 1.4:1).
- 3+ motif, 3+ gradient yönü.
- Yoğun tabloda gloss (okunmaz).
- Skeuomorphism'in ahşap/metal dokusu (bu stil cam/su).

## Görsel imza
- **Gloss buton:** `linear-gradient(180deg, #6fc0f0, #2f9be0)` + inset beyaz + mavi gölge.
- **Cam panel:** yarım saydam beyaz + blur 6px + 1px beyaz kenar.
- **Kabarcık motifi:** radial gradient daireler, opacity .18.
- **Yumuşak gradient:** zemin `#ffffff → #dff1ff → #c9e7ff`.
- **Yuvarlak tipografi:** Segoe UI, 600 ağırlık; keskin grotesk yok.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#dff1ff` | sayfa | metin |
| `--bg-2` | `#bfe3ff` | bölüm | buton |
| `--surface` | `linear-gradient(180deg,#fff,#d6ecff)` | cam panel | düz zemin |
| `--surface-2` | `#eaf6ff` | ikincil, hover | vurgu |
| `--ink` | `#0d2b45` | metin | — |
| `--ink-soft` | `#365a75` | açıklama | 12px altı |
| `--ink-faint` | `#6f8fa8` | dekoratif (2.94:1) | gövde |
| `--accent` | `#2f9be0` | CTA, aktif | geniş metin zemini |
| `--accent-ink` | `#0d2b45` | accent üstü (**4.75:1**) | — |
| `--line` | `rgba(255,255,255,.85)` | cam kenarı | metin |

- Ölçülen kontrast: `ink/bg` **12.54:1** · `ink-soft/bg` **6.32:1** · `ink-faint/bg` **2.94:1** · `accent-ink/accent` **4.75:1**.
- Accent üstünde **koyu** metin; beyaz yasak (1.9:1).
- Yasak: ne mor ne turuncu; tek mavi ailesi + beyaz.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Segoe UI / Frutiger | 44px (mobil 28px) | 600 | 1.15 | `0` |
| H2 | Segoe UI | 26px | 600 | 1.2 | `0` |
| H3 | Segoe UI | 18px | 600 | 1.3 | `0` |
| Gövde | Segoe UI / Myriad Pro | 16px | 400 | 1.6 | `0` |
| Etiket | Consolas | 10px | 500 | 1.2 | `0.12em`, uppercase |

- Yuvarlak hatlı sans şart; Inter/Helvetica "soğuk" kalır.
- Gövde 62ch; açık mavi üstünde 14px altına inme.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1160px · bölüm 72/48px · breakpoint 640/900/1160.
- Gloss payı: buton aralığı ≥ 12px.
- Motif boşlukta; içeriğe binmez.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Gökyüzü | `--bg` gradient + motif | yok | sayfa |
| Cam panel | `--surface` + blur 6px | `--shadow` (mavi) | kart |
| Yüzen | `--surface-2` | aynı + inset | modal |

- Derinlik parlaklık + yumuşak mavi gölge. Radius 14/22px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 22px | 22px | 15/600 | gloss accent + koyu metin | hover: parlaklık↑ · active: inset · focus: 2px koyu mavi halka · disabled: %45 |
| Buton (cam) | 44px | 0 20px | 22px | 15/600 | cam gloss + koyu metin | hover: beyaz |
| Input | 44px | 0 14px | 14px | 15/400 | beyaz + 1px beyaz kenar | focus: 2px accent · error: `--danger` |
| Kart | içerik | 22px | 22px | H3 + 15 | cam gradient + gölge | hover: inset highlight↑ |
| Chip | 26px | 0 12px | 999px | 10/500 mono | beyaz %70 + kenar | aktif: accent + koyu |
| Nav | 68px | 0 28px | — | 14/600 | cam bar + alt kenar | aktif: accent alt çizgi |
| Tablo satırı | 50px | 12px 16px | — | 14/400 | beyaz %50 alt çizgi | hover: `--surface-2` |
| Modal | içerik | 26px | 22px | H2 + 15 | cam + blur 6px | backdrop: `rgba(13,43,69,.3)` |
| Grafik | — | — | 8px uç | eksen 10 mono | accent + açık mavi | 2 seri |

## Görsel dil

İkon: 2px çizgi, 20px, yuvarlak uç; gloss daire içinde. Fotoğraf: parlak, doğa/su, yüksek ışık. İllüstrasyon: kabarcık/yaprak, yumuşak 3B. Doku: yok. Logo: yuvarlak hatlı, parlak.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 44px başlık, kabarcık motifi, gloss CTA, cam panel | `shots/01-page.png` |
| Dashboard | düşük | Gloss azalır; beyaz kart + ince mavi kenar | `shots/01-page.png` |
| Form | düşük | 480px, yuvarlak input, tek gloss buton | `shots/01-page.png` |
| Liste/tablo | düşük | Beyaz zemin, açık mavi ayırıcı | `shots/01-page.png` |
| Boş durum | orta | Kabarcık illüstrasyonu + tek cümle | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 motif + cam panel | `shots/01-page.png` |
| Pricing | orta | 3 cam kart, orta kart accent kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Gloss minimum; sade beyaz form | `shots/01-page.png` |
| Modal | orta | Cam panel + blur 6px | `shots/01-page.png` |
| Toast | orta | Cam pill + koyu metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 13px metin | `shots/01-page.png` |
| Profil/ayar | orta | Beyaz kart listesi | `shots/01-page.png` |

## Erişilebilirlik

- Gövde 12.54:1, açıklama 6.32:1 → güvenli; `--ink-faint` **2.94:1** → yalnız dekoratif.
- Açık mavi üstünde beyaz/açık metin yasak; `--ink` kullan.
- Accent üstü koyu metin 4.75:1 → buton metni 15px/600.
- Gloss highlight metin alanına girmemeli (üst 35%'te kalır).
- Odak halkası 2px koyu mavi; cam üstünde de görünür.
- Dokunma hedefi 44px.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| Okunmuyor | Açık mavi üstünde açık metin | `--ink` (#0d2b45) |
| Yapay/kitsch | 3+ motif, sert gradient | Motif 1, gradient yumuşak |
| "Mavi tema" gibi | Gloss ve yuvarlak tipografi yok | inset highlight + Segoe |
| Ağır | Gloss her öğede | Gloss yalnız buton/panel |
| Kurumsal güven kaybı | Ödeme ekranında gloss | O ekranlarda sadeleştir |

## Komşu stiller

**Uyumlu:** `19 y2k` (parlak teknoloji), `09 liquid-glass` (optik), `08 glassmorphism` (cam katman). **Yasak:** `33 dark-academia`, `22 cyberpunk`, `01 minimalism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://aesthetics.fandom.com/wiki/Frutiger_Aero | Dönem dili ve motifler |
| https://fonts.google.com/specimen/Inter | Alternatif yuvarlak sans |
| https://guidebookgallery.org | Vista/7 arayüz arşivi |

## AI brief

```
Stil: Frutiger Aero (styles/25-frutiger-aero/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="frutiger-aero"]; hard-coded renk YASAK.
Parlaklık: dikey gradient + inset 0 1px 0 #fff + yumuşak mavi gölge; gloss yalnız buton/panel üst %35.
Palet: gökyüzü mavisi #dff1ff/#bfe3ff + beyaz; accent #2f9be0 (üstünde KOYU metin #0d2b45, 4.75:1).
Motif: ekran başına 1 (kabarcık/su/yaprak), opacity ≤ .18.
Tipografi: Segoe UI 600 display (44/1.15) + gövde 16/1.6; keskin grotesk yok.
Radius 14/22px; blur ≤ 6px (yalnız cam panel).
Yasak: sert gölge, siyah kontur, koyu zemin, açık mavi üstünde açık metin, 3+ motif.
Çıktı: kod + tek paragraf not (gloss dozu ve kontrast önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] Gloss highlight var ve metin alanına girmiyor.
- [ ] Zemin gökyüzü mavisi; accent üstü koyu metin.
- [ ] Motif ≤ 1, opacity ≤ .18.
- [ ] Radius 14/22, blur ≤ 6px.
- [ ] Gövde kontrastı ≥ 4.5:1; `--ink-faint` dekoratif.
- [ ] Ödeme/girişte gloss azaltıldı.

## Token

```css
[data-style="frutiger-aero"] {
  --bg: #dff1ff; --bg-2: #bfe3ff;
  --surface: linear-gradient(180deg, #ffffff, #d6ecff); --surface-2: #eaf6ff;
  --ink: #0d2b45; --ink-soft: #365a75; --ink-faint: #6e8da6;
  --accent: #2090d5; --accent-ink: #06243e;
  --line: rgba(255,255,255,.85);
  --radius: 14px; --radius-lg: 22px;
  --shadow: 0 8px 20px rgba(47,155,224,.28), inset 0 1px 0 #ffffff;
  --shadow-hard: none;
  --font-display: "Segoe UI", "Frutiger", system-ui, sans-serif;
  --font-body: "Segoe UI", "Myriad Pro", system-ui, sans-serif;
  --font-mono: "Consolas", ui-monospace, monospace;
  --tracking: 0em; --blur: 6px; --grain: 0;
  --focus: #2a8ac9;
}
```
