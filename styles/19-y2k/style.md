# 19 · Y2K

> **Bir cümlede:** 2000'lerin kromu ve parlak plastiği: buz mavisi zemin, geniş harf aralıklı teknoid tipografi, cam-parlak yüzeyler.

| | |
|---|---|
| **Hissiyat** | nostaljik, parlak, teknolojik iyimser, "millennium" |
| **En iyi** | moda/genç ürün, müzik, etkinlik, retro lansman, oyun eşlikçisi |
| **Kaçın** | kurumsal finans, sağlık, uzun okuma, ciddi B2B |
| **Zorluk** | orta · **Erişilebilirlik** | orta (parlama + düşük kontrast riski) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="y2k"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-page.png` (tek sayfa · 1280×2400) |

## Öz

### Nedir
Y2K (Year 2000) estetiği: **buz mavisi/beyaz** zemin, **krom ve parlak plastik** yüzeyler, **geniş harf aralıklı** teknoid tipografi (Michroma/Eurostile), **büyük radius** (20/28px), cam parlaklığı ve hafif blur. İyimser bir "gelecek geldi" hissi.

Kazandığı şey: nostalji + dikkat. Feda ettiği şey: okunurluk payı (parlaklık kontrastı yer).

### Ne değildir
- **Frutiger Aero değildir.** Aero 2004–2010 doğa/su metaforu; Y2K daha metalik ve tipografi odaklı.
- **Glassmorphism değildir.** Cam orada katmandır; Y2K'de parlaklık **yüzeyin kendisi**dir.
- **Vaporwave değildir.** Vaporwave mor/pembe melankoli; Y2K mavi-beyaz ve neşeli.
- **"Parlak buton" değildir.** Geniş tracking, teknoid display ve krom kenar olmadan sadece "mavi tema" olur.

### Nereden gelir
2000–2003 donanım arayüzleri (erken Mac OS X, Win XP Luna, MSN), krom logo modası. 2020'lerde moda/müzik ile geri döndü.

### 3 saniyede tanıma testi
1. Zemin buz mavisi/beyaz mı (#eaf4ff)?
2. Display **geniş tracking'li teknoid** mi (Michroma)?
3. Yüzeylerde parlak highlight (inset beyaz) var mı?
4. Radius ≥ 20px mi?
5. Renkler soğuk (mavi/mor) ve metalik parlaklıkta mı?

## Zorunlu kurallar

1. **Soğuk palet:** buz mavisi zemin + mor accent; sıcak renk yok.
2. **Parlak yüzey:** `inset 0 1px 0 #ffffff` her panelde; cam parlaklığı hissi.
3. **Geniş tracking:** display `0.01em`, etiket `0.18em`, uppercase.
4. **Radius 20/28px**; buton pill serbest.
5. **Tek accent (mor):** `#6f4de8` + beyaz metin (5.38:1).
6. **Kontrast tabanı:** gövde ≥ 4.5:1; parlak yüzeyde metin koyulaştırılır.

## Yasaklar

- Toprak/sıcak palet, koyu zemin (koyu mod hariç).
- İnce tracking (Y2K karakteri kaybolur).
- Sert gölge, kalın siyah kontur.
- Parlak yüzey üstünde açık gri metin.
- 3+ parlak renk (krom + mor + mavi yeter).
- Yoğun tabloda tam parlaklık (okunmaz).

## Görsel imza
- **Krom kenar:** 1px `--line` (mavi %35) + `inset 0 1px 0 #fff`.
- **Buz mavisi katman:** `--bg-2` ikinci bölümde; gradient yok, tek ton.
- **Teknoid display:** Michroma, uppercase, geniş tracking, 48–56px.
- **Parlak buton:** gradient yerine düz accent + inset highlight.
- **Blur 10px:** cam panellerde hafif; abartma.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#eaf4ff` | sayfa | kart |
| `--bg-2` | `#d9e9ff` | ikinci bölüm | metin |
| `--surface` | `#ffffff` | panel | sayfa |
| `--surface-2` | `#e6f0ff` | ikincil, hover | CTA |
| `--ink` | `#1b2340` | metin | — |
| `--ink-soft` | `#4b557a` | açıklama | 12px altı |
| `--ink-faint` | `#838bac` | dekoratif (2.70:1) | gövde |
| `--accent` | `#6f4de8` | CTA, aktif | geniş zemin |
| `--accent-ink` | `#ffffff` | accent üstü (**5.38:1**) | — |
| `--line` | `rgba(90,120,220,.35)` | krom kenar | metin |

- Ölçülen kontrast: `ink/bg` **13.87:1** · `ink-soft/bg` **6.56:1** · `ink-faint/bg` **2.70:1** · `accent-ink/accent` **5.38:1**.
- `--ink-faint` yalnızca dekoratif; parlak yüzeyde metin için `--ink` kullan.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Michroma | 52px (mobil 30px) | 400 | 1.1 | `0.01em`, uppercase |
| H2 | Michroma | 28px | 400 | 1.2 | `0.01em` |
| H3 | Inter | 19px | 600 | 1.3 | `0` |
| Gövde | Inter | 16px | 400 | 1.6 | `0` |
| Etiket | JetBrains Mono | 10px | 500 | 1.2 | `0.18em`, uppercase |

- Michroma tek ağırlık, geniş; 18px altında kullanma (okunmaz).
- Gövde 16/1.6, 60ch; display 20ch.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1160px · bölüm 72/48px · breakpoint 640/900/1160.
- Kart aralığı 16px; parlaklık algısı için kart içi padding 24px.
- Bir bölümde en fazla 2 parlak panel.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | yok | sayfa |
| Parlak panel | `--surface` | `--shadow` (mavi glow + inset) | kart |
| Yüzen | `--surface` + blur 10px | aynı | modal |

- Derinlik parlaklık + yumuşak mavi glow; koyu gölge yok.
- Radius 20/28px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 22px | 999px | 14/600 | `--accent` + beyaz + inset highlight | hover: parlaklık↑ · active: scale(.98) · focus: 2px mor halka · disabled: %42 |
| Buton (cam) | 44px | 0 20px | 999px | 14/600 | `--surface-2` + blur + 1px kenar | hover: beyaz |
| Input | 44px | 0 16px | 20px | 15/400 | `--surface` + krom kenar | focus: 2px mor halka · error: `--danger` |
| Kart | içerik | 24px | 28px | H3 + 15 | `--surface` + parlak gölge | hover: translateY(-2px) |
| Chip | 26px | 0 12px | 999px | 10/500 mono | `--surface-2` + kenar | aktif: mor + beyaz |
| Nav | 68px | 0 28px | — | 12/600 uppercase 0.16em | cam + alt kenar | aktif: mor alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | ince kenar | hover: `--surface-2` |
| Modal | içerik | 28px | 28px | H2 + 15 | parlak panel + blur | backdrop: `rgba(27,35,64,.32)` |
| Grafik | — | — | 6px uç | eksen 10 mono | mor + buz mavisi | 2 seri |

## Görsel dil

İkon: 1.5px çizgi, 20px, parlak daire içinde. Fotoğraf: soğuk ışık, metalik yansıma; 28px radius. İllüstrasyon: krom/parlak vektör. Doku: yok (`--grain: 0`). Logo: teknoid, geniş tracking.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 52px Michroma başlık, parlak panel, tek mor CTA, buz mavisi bant | `shots/01-page.png` |
| Dashboard | düşük | Parlaklık azalır; kartlar düz beyaz + krom kenar | `shots/01-page.png` |
| Form | düşük | 480px, pill buton, parlak input | `shots/01-page.png` |
| Liste/tablo | düşük | Düz beyaz, ince kenar | `shots/01-page.png` |
| Boş durum | orta | Parlak panel + tek cümle + pill buton | `shots/01-page.png` |
| Onboarding | yüksek | Adım başına 1 panel, ilerleme pill | `shots/01-page.png` |
| Pricing | orta | 3 parlak kart, orta kart mor kenar | `shots/01-page.png` |
| Giriş/ödeme | çok düşük | Parlaklık ve blur kapanır | `shots/01-page.png` |
| Modal | orta | 28px radius + blur 10px | `shots/01-page.png` |
| Toast | orta | Mor pill + beyaz metin | `shots/01-page.png` |
| Hata | düşük | `--danger` kenar + 13px metin | `shots/01-page.png` |
| Profil/ayar | orta | Kart listesi, krom ayırıcı | `shots/01-page.png` |

## Erişilebilirlik

- Gövde 13.87:1, açıklama 6.56:1 → güvenli; `--ink-faint` **2.70:1** → yalnız dekoratif.
- Parlak yüzeyde açık gri metin yasak; metin `--ink`.
- Accent üstü beyaz 5.38:1 → buton metni 14px/600, küçültme.
- Blur ekran başına ≤ 2 panel (performans + okunurluk).
- Odak halkası 2px mor; beyaz parlak zeminde 5.38:1.
- Dokunma hedefi 44px.

## Örnek görseller

Aynı içerik, tüm stillerde birebir aynı metinle render edilir; fark yalnızca tasarımdır.

| Görsel | Neye bak |
|---|---|
| `shots/01-page.png` | Tek sayfa — 1280×2400: gezinme, hero, üç bölüm, bileşen ızgarası, form/veri, CTA ve alt bilgi tek karede. |

## Tuzaklar

| Belirti | Neden | Düzeltme |
|---|---|---|
| "Mavi tema" gibi | Geniş tracking + teknoid display yok | Michroma + 0.18em etiket |
| Okunmuyor | Parlak yüzey + açık metin | `--ink`, kontrast ≥ 4.5:1 |
| Ağır | Blur + glow her öğede | Blur ≤ 2 panel, glow tek |
| Kitsch | 4+ parlak renk | Krom + mor + buz mavisi |

## Komşu stiller

**Uyumlu:** `25 frutiger-aero` (parlak teknoloji), `20 vaporwave` (nostalji), `09 liquid-glass` (optik). **Yasak:** `02 swiss-design`, `33 dark-academia`, `07 wabi-sabi`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.awwwards.com/websites/y2k/ | Y2K örnekleri |
| https://fonts.google.com/specimen/Michroma | Teknoid display |
| https://guidebookgallery.org | 2000'ler OS arayüz arşivi |

## AI brief

```
Stil: Y2K (styles/19-y2k/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="y2k"]; hard-coded renk YASAK.
Palet: buz mavisi #eaf4ff + beyaz + mor #6f4de8 (üstünde beyaz 5.38:1); sıcak renk yok.
Yüzey: her panelde inset 0 1px 0 #fff (krom parlaklık) + 1px mavi kenar; radius 20/28px; blur ≤ 2 panelde.
Tipografi: Michroma display uppercase 0.01em (52/1.1); Inter gövde 16/1.6; etiket mono 10 uppercase 0.18em.
Hareket: 120–300ms, hafif yay; sürekli parıltı yasak; reduced-motion'da yay kapanır.
Yoğun ekran (form/tablo/ödeme): parlaklık ve blur kapanır.
Çıktı: kod + tek paragraf not (parlaklık ve tracking disiplini).
```

**Teslim öncesi öz-denetim**
- [ ] Zemin buz mavisi, accent tek mor; accent üstü beyaz.
- [ ] Her panelde inset highlight + krom kenar.
- [ ] Display Michroma/teknoid, tracking ≥ 0.01em; etiket 0.18em.
- [ ] Radius ≥ 20px; blur ≤ 2 panel.
- [ ] Gövde kontrastı ≥ 4.5:1; `--ink-faint` dekoratif.
- [ ] Yoğun ekranda parlaklık azaltıldı.

## Token

```css
[data-style="y2k"] {
  --bg: #eaf4ff; --bg-2: #d9e9ff;
  --surface: #ffffff; --surface-2: #e6f0ff;
  --ink: #1b2340; --ink-soft: #4b557a; --ink-faint: #838bac;
  --accent: #6f4de8; --accent-ink: #ffffff;
  --line: rgba(90,120,220,.35);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 6px 18px rgba(120,150,255,.35), inset 0 1px 0 #ffffff;
  --shadow-hard: none;
  --font-display: "Michroma", "Eurostile", "Inter", sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.01em; --blur: 10px; --grain: 0;
}
```
