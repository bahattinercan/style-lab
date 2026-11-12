# 33 · Dark Academia

> **Bir cümleyle:** Mum ışığında kütüphane: koyu ahşap, gotik serif, altın hairline, derin gölge ve arşiv ciddiyeti.

| | |
|---|---|
| **Hissiyat** | akademik, gizemli, ağırbaşlı, "arşiv" |
| **En iyi** | okuma/kurs, yayın/arşiv, kulüp, edebiyat, müze |
| **Kaçın** | tüketici alışverişi, çocuk, hızlı e-ticaret, parlak ortam |
| **Zorluk** | orta · **Erişilebilirlik** | orta (koyu zemin, düşük parlaklık) |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="dark-academia"]` |
| **Kompozisyon** | `split` · `split` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Dark Academia, üniversite kütüphanesi atmosferi: **koyu kahve zemin**, **altın hairline**, **Cormorant** display + **EB Garamond** gövde, **vignette** (mum ışığı), drop cap ve derin gölge. Süs az; ağırlık tipografi ve ışıkta.

Kazandığı şey: ciddiyet ve atmosfer. Feda ettiği şey: parlaklık ve göz konforu (koyu + serif + altın yorucu olabilir).

### Ne değildir
- **Victorian değildir.** Victorian açık kâğıt ve süs; bu stil koyu ve sade.
- **Art Deco değildir.** Deco geometri/simetri; bu stil organik serif ve arşiv.
- **"Koyu tema + serif" değildir.** Vignette + altın hairline + drop cap olmadan sadece koyu tema.

### Nereden gelir
"Dark academia" alt kültürü, üniversite arşivleri, gotik edebiyat estetiği.

### 3 saniyede tanıma testi
1. Zemin koyu kahve mi (#1b1714), siyah değil mi?
2. Display gotik/klasik serif (Cormorant), gövde serif (EB Garamond) mi?
3. Altın hairline var mı (koyu parlak değil)?
4. Vignette (kenarlarda koyulaşma) var mı?
5. Metin krem (#e8dfce) mi?

## Zorunlu kurallar

1. **Koyu kahve palet:** #1b1714 zemin; gri/siyah değil.
2. **Serif ikilisi:** Cormorant (display) + EB Garamond (gövde); sans yok.
3. **Altın hairline:** `rgba(176,134,63,.32)`, 1px; geniş altın zemin yok.
4. **Vignette:** radyal koyulaşma, opacity ≤ .6, tek katman.
5. **Metin ≥ 4.5:1:** krem metin (13.46:1), `--ink-soft` (7.96:1).
6. **Radius 2/4px, derin gölge** (0 12px 32px .5); parlaklık yok.

## Yasaklar

- Saf siyah zemin, neon, parlak beyaz metin.
- Sans-serif gövde.
- Geniş altın dolgu (sadece çizgi).
- 2+ vignette katmanı, parlama.
- 15px altı serif gövde.
- Yoğun tabloda drop cap / süs.

## Görsel imza
- **Vignette:** `radial-gradient(72% 62% at 26% 14%, #2a231c, #1b1714 62%)`.
- **Altın hairline:** 1px, %32.
- **Drop cap:** 40px Cormorant, altın renkte, 3 satır.
- **Derin gölge:** `0 12px 32px rgba(0,0,0,.5)`.
- **Krem metin:** #e8dfce.
- **Grain .07** (eski kâğıt).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#1b1714` | zemin |
| `--bg-2` | `#241f1a` | bölüm |
| `--surface` | `#262019` | kart |
| `--surface-2` | `#2f2820` | ikincil |
| `--ink` | `#e8dfce` | metin (13.46:1) |
| `--ink-soft` | `#b8ac97` | açıklama (7.96:1) |
| `--ink-faint` | `#8a7f6d` | dekoratif (4.53:1) |
| `--accent` | `#b0863f` | hairline, drop cap, buton |
| `--accent-ink` | `#1b1714` | accent üstü (**5.37:1**) |
| `--line` | `rgba(176,134,63,.32)` | hairline |

- Ölçülen kontrast: `ink/bg` **13.46:1** · `ink-soft/bg` **7.96:1** · `ink-faint/bg` **4.53:1** · `accent-ink/accent` **5.37:1**.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Cormorant Garamond | 46px (mobil 28px) | 400 | 1.15 | `0.02em` |
| H2 | Cormorant | 28px | 400 | 1.2 | `0.02em` |
| Gövde | EB Garamond | 17px | 400 | 1.7 | `0.01em` |
| Etiket | IBM Plex Mono | 11px | 500 | 1.2 | `0.16em`, uppercase |

- Serif gövde 17px/1.7 zorunlu; 15px altı okunmaz.
- Gövde 64ch; drop cap sadece açılışta.

## Izgara ve boşluk

Kolon 12 (metin 8) · gutter 32px · container 1080px (okuma 680px) · bölüm 88/52px · breakpoint 640/900/1080.
- Vignette tüm ekran; içerik merkezde daha aydınlık.
- Bölüm arası 88px (ağırbaşlı ritim).

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Vignette zemin | `--bg` + radyal + grain | yok | sayfa |
| Kart | `--surface` + 1px altın | `--shadow` (derin) | içerik |
| Yüzen | `--surface-2` | daha derin | modal |

- Derinlik gölge + ışıktan. Radius 2/4px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 22px | 2px | 15/600 | `--accent` + koyu metin | hover: %92 · focus: 2px altın halka · disabled: %40 |
| Buton (çizgi) | 46px | 0 20px | 2px | 15/600 | transparent + 1px altın | hover: altın %12 |
| Input | 46px | 0 14px | 2px | 16/400 serif | `--surface` + 1px altın %32 | focus: 1px altın + halka · error: `--danger` |
| Kart | içerik | 28px | 4px | H2 serif + 17 | `--surface` + 1px altın + derin gölge | hover: hairline %55 |
| Chip | 24px | 0 10px | 2px | 11/500 mono | `--surface-2` + hairline | — |
| Nav | 72px | 0 32px | — | 12/500 uppercase 0.14em | `--bg` + 1px altın alt | aktif: altın metin |
| Tablo satırı | 52px | 12px 16px | — | 16/400 serif | 1px altın %20 alt | hover: `--surface-2` |
| Modal | içerik | 32px | 4px | H2 + 17 | derin gölge + altın hairline | backdrop: `rgba(0,0,0,.7)` |
| Toast | 46px | 0 18px | 2px | 13/500 | `--surface-2` + altın kenar | 5sn |
| Grafik | — | — | 2px uç | eksen 11 mono | altın çizgi + %18 dolgu | 1 seri |

## Görsel dil

İkon: 1.5px çizgi, 22px, altın. Fotoğraf: karanlık, tek ışık kaynağı, sepya. İllüstrasyon: gravür, kitap/mum motifi. Doku: grain .07 + vignette. Logo: Cormorant wordmark, altın alt çizgi.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 46px Cormorant, drop cap, vignette, tek altın buton | `shots/01-landing.png` |
| Dashboard | düşük | Süs kapanır; serif başlık + hairline | `shots/02-dashboard.png` |
| Form | düşük | 480px, serif input, tek buton | — |
| Liste/tablo | düşük | 52px satır, altın hairline | — |
| Boş durum | orta | Altın hairline kutu + tek cümle | — |
| Onboarding | yüksek | Adım başına 1 gravür | — |
| Pricing | orta | 3 kart, orta kart altın kenar | — |
| Giriş/ödeme | düşük | Sade form, altın hairline | — |
| Modal | orta | Derin gölge, altın kenar | — |
| Toast | orta | Koyu kutu, altın kenar | — |
| Hata | düşük | `--danger` hairline + 16px serif | — |
| Profil/ayar | orta | 8/4 kolon, hairline | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma (press) | 140ms | `ease-in-out` | `transform: translateY(1px)` |
| Geçiş / sayfa | 400ms | `ease-in-out` (ağır) | `opacity` + `translateY(4px)` |
| Giriş (enter) | **1050ms** | `cubic-bezier(.5,.05,.35,.95)` | `opacity` + `translateY(22px)`, **stagger 160ms**; maske içinden satır |
| Kaydırma (scroll) | **1050ms** | `cubic-bezier(.5,.05,.35,.95)` | trigger **`top 78%`**, offsetY **26px**, `once: true` |
| Hover | **520ms** | `ease-in-out` | görsel ölçek **1.02** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| Ödül / vurgu | 600ms | `ease-in-out` | altın `opacity` |

- İmza ölçüsü: enter **1.05s / 22px / stagger 0.16** · scroll **1.05s / `top 78%` / 26px** · hover **520ms / 1.02** · pin **kapalı**.
- `prefers-reduced-motion`: 0.01ms.
- Bu stile yasak hareket: parlama, sürekli döngü, hızlı geçiş (200ms altı).
## Koyu mod

Stil zaten koyu. Açık varyant: `--bg` `#efe7d6` · `--surface` `#f7f1e3` · `--ink` `#1c1a17` · `--accent` `#8a6a2f` · `--accent-ink` `#ffffff` · vignette kaldırılır.

## Erişilebilirlik

- Gövde 13.46:1, açıklama 7.96:1 → güvenli; `--ink-faint` 4.53:1 → sınırda, dekoratif.
- Koyu zemin + serif: punto 17px ve satır 1.7 zorunlu.
- Altın **metin** olarak kullanılmaz (koyu zeminde 5.4:1 ama geniş alanda yorar); hairline/buton.
- Vignette içeriği karartmaz: içerik alanı aydınlık bölgede.
- Odak halkası 2px altın, offset 2px.
- Dokunma hedefi 46px.

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
| Okunmuyor | Serif 15px + koyu zemin | 17px/1.7, krem metin |
| "Koyu tema" gibi | Vignette/altın yok | Radyal ışık + hairline |
| Ağır | Her bölümde gravür | Süs 1 yerde |
| Güven kaybı | Ödeme ekranında ağır atmosfer | Sadeleştir |

## Komşu stiller

**Uyumlu:** `27 victorian` (arşiv), `03 editorial-design` (kolon), `26 art-deco` (altın). **Yasak:** `18 dopamine-ui`, `24 pixel-art`, `11 claymorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://fonts.google.com/specimen/Cormorant+Garamond | Display serif |
| https://fonts.google.com/specimen/EB+Garamond | Gövde serif |
| https://www.nngroup.com/articles/dark-mode/ | Koyu tema kontrast |

## AI brief

```
Stil: Dark Academia (styles/33-dark-academia/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="dark-academia"]; hard-coded renk YASAK.
Zemin: koyu kahve #1b1714 + 1 radyal vignette (opacity ≤ .6) + grain .07.
Tipografi: Cormorant display 400 (46/1.15) + EB Garamond GÖVDE 17/1.7 (serif); etiket mono 11 0.16em.
Renk: altın #b0863f yalnız hairline/ikon/buton (üstünde koyu metin 5.37:1); metin krem #e8dfce.
Derinlik: 0 12px 32px rgba(0,0,0,.5); radius 2/4px; parlaklık yok.
Hareket: 140–600ms ease-in-out (ağır); parlama yasak; reduced-motion'da 0.01ms.
Yasak: saf siyah zemin, neon, sans gövde, geniş altın dolgu, 15px altı serif, çoklu vignette.
Çıktı: kod + tek paragraf not (vignette ve okunurluk dengesi).
```

**Teslim öncesi öz-denetim**
- [ ] Zemin koyu kahve, tek vignette.
- [ ] Serif display + serif gövde (17px/1.7).
- [ ] Altın yalnız hairline/ikon/buton.
- [ ] Derin gölge, radius 2/4, parlaklık yok.
- [ ] Gövde kontrastı ≥ 4.5:1.
- [ ] Ödeme ekranında sadeleştirildi.

## Token

```css
[data-style="dark-academia"] {
  --bg: #1b1714; --bg-2: #241f1a;
  --surface: #262019; --surface-2: #2f2820;
  --ink: #e8dfce; --ink-soft: #b8ac97; --ink-faint: #8a7f6d;
  --accent: #b0863f; --accent-ink: #1b1714;
  --line: rgba(176,134,63,.32);
  --radius: 2px; --radius-lg: 4px;
  --shadow: 0 12px 32px rgba(0,0,0,.5); --shadow-hard: none;
  --font-display: "Cormorant Garamond", "EB Garamond", Georgia, serif;
  --font-body: "EB Garamond", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: .07;
}
```
