# 29 · Ethereal

> **Bir cümlede:** Sis ve ışık: neredeyse silinen kontrast, yumuşak serif, cam yüzeyler ve nefes gibi hareket.

| | |
|---|---|
| **Hissiyat** | sakin, ruhani, yumuşak, "bulut" |
| **En iyi** | meditasyon/uyku, ses/müzik, wellness, terapi, sanat |
| **Kaçın** | finans, sağlık verisi, yoğun panel, dış mekân kullanımı |
| **Zorluk** | yüksek (kontrast koruma) · **Erişilebilirlik** | **yüksek risk** |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="ethereal"]` |
| **Kompozisyon** | `centered` · `split` · `sparse` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Ethereal, biçimi ışıkla eritir: **sisli pastel zemin** (radyal lekeler), **yarı saydam beyaz yüzeyler** (blur 24px), **yumuşak serif** (Cormorant 300), çok düşük kontrastlı hairline'lar ve **nefes hızında** (400ms+) hareket.

Kazandığı şey: dinginlik. Feda ettiği şey: okunurluk ve kesinlik — bu stil **kontrast yönetimi olmadan kullanılamaz**.

### Ne değildir
- **Japandi değildir.** Japandi sıcak toprak; ethereal soğuk pastel ve silik.
- **Glassmorphism değildir.** Cam orada katman iddiası; burada yüzey neredeyse kaybolur.
- **"Soluk tema" değildir.** Kontrast yumuşak ama **gövde ≥ 4.5:1** korunur.
- **Scrapbook/bohemian değildir.** Doku ve kolaj yok; sadece ışık.

### Nereden gelir
Meditasyon/uyku uygulamaları, ambient müzik kapakları ve "soft digital" dalgası.

### 3 saniyede tanıma testi
1. Zemin pastel ve radyal ışıklı mı (düz değil)?
2. Yüzeyler yarı saydam beyaz + yüksek blur mu?
3. Display ince serif (300–400) mi?
4. Hairline'lar çok soluk mu?
5. Hareket yavaş mı (≥ 400ms, nefes)?

## Zorunlu kurallar

1. **Metin kontrastı:** gövde ≥ 4.5:1 (bu stilde en kritik kural); soluk yazı yalnız dekoratif.
2. **Işık katmanı:** 2 radyal leke, opacity ≤ .6, blur yok (gradient ile).
3. **Cam yüzey:** beyaz %55 + blur 24px + 1px soluk kenar.
4. **İnce serif display** 300–400; gövde sans (Inter) okunurluk için.
5. **Hareket yavaş:** 400–800ms, `ease-in-out`; nefes (1–2px) dışında animasyon yok.
6. **Radius 20/28px**; keskin köşe yok.

## Yasaklar

- Sert gölge, koyu zemin, doygun renk.
- 12px altı metin; `--ink-faint` gövde metninde.
- 3+ ışık katmanı (banding + yorgunluk).
- Hızlı animasyon, sürekli hareket.
- Cam üstünde cam.
- Ödeme/giriş ekranında sis (güven).

## Görsel imza
- **Sis katmanı:** 2 radyal gradient (%60 üst sınırı).
- **Cam kart:** beyaz %55 + blur 24px.
- **İnce serif:** Cormorant 300, 46px, 1.2 satır.
- **Soluk hairline:** `rgba(59,53,66,.10)`.
- **Mor accent:** `#7a63bd`, üstünde beyaz metin (4.83:1).
- **Nefes:** 6sn döngü, 1–2px ölçek (yalnız 1 öğe).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#f7f4f8` | sayfa |
| `--bg-2` | `#efe9f4` | ikinci zemin |
| `--surface` | `rgba(255,255,255,.55)` | cam kart |
| `--surface-2` | `rgba(255,255,255,.35)` | ikincil cam |
| `--ink` | `#3b3542` | metin (10.85:1) |
| `--ink-soft` | `#635c6e` | açıklama (5.86:1) |
| `--ink-faint` | `#968fa3` | dekoratif (2.85:1) |
| `--accent` | `#7a63bd` | CTA, aktif |
| `--accent-ink` | `#ffffff` | accent üstü (**4.83:1**) |
| `--line` | `rgba(59,53,66,.10)` | hairline |

- Ölçülen kontrast: `ink/bg` **10.85:1** · `ink-soft/bg` **5.86:1** · `ink-faint/bg` **2.85:1** · `accent-ink/accent` **4.83:1**.
- Accent beyaz üstünde 4.83:1 → buton metni ≥ 14px/600.
- Yasak: 2. doygun renk; gri üstünde gri metin.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Cormorant Garamond | 46px (mobil 28px) | 300 | 1.2 | `0.03em` |
| H2 | Cormorant | 28px | 400 | 1.25 | `0.03em` |
| Gövde | Inter | 16px | 400 | 1.75 | `0` |
| Etiket | JetBrains Mono | 10px | 400 | 1.2 | `0.2em`, uppercase |

- İnce serif 32px altında kullanılmaz; H3 ve altı Inter.
- Gövde 62ch, 1.75 satır aralığı (dinginlik).
- 300 ağırlık yalnız display'de.

## Izgara ve boşluk

Kolon 12 (içerik 8) · gutter 28px · container 1120px · bölüm 96/56px · breakpoint 640/900/1120.
- Bol boşluk: bölümler arası 96px, kart içi 28px.
- Bir bölümde en fazla 2 cam kart.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Sis | `--bg` + 2 radyal | yok | sayfa |
| Cam kart | `--surface` + blur 24px | `--shadow` (mor) | içerik |
| Yüzen | `--surface-2` + blur 28px | aynı | modal |

- Derinlik ışık ve bulanıklıktan; koyu gölge yok. Radius 20/28px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 24px | 20px | 14/600 | `--accent` + beyaz | hover: %96 · focus: 2px accent halka · disabled: %45 |
| Buton (cam) | 46px | 0 22px | 20px | 14/600 | `--surface-2` + blur | hover: beyaz %45 |
| Input | 46px | 0 16px | 20px | 15/400 | `--surface-2` + blur | focus: 2px accent |
| Kart | içerik | 28px | 28px | H2 serif + 16 | cam + blur 24px | hover: blur 28px (statik) |
| Chip | 26px | 0 12px | 999px | 10/400 mono | beyaz %45 | aktif: accent |
| Nav | 72px | 0 32px | — | 12/500 uppercase 0.18em | cam bar + blur | aktif: accent alt çizgi |
| Tablo satırı | 54px | 12px 16px | — | 15/400 | soluk hairline | hover: beyaz %30 |
| Modal | içerik | 32px | 28px | H2 + 16 | cam + blur 28px | backdrop: `rgba(59,53,66,.25)` |
| Toast | 46px | 0 18px | 20px | 13/500 | cam + kenar | 5sn |
| Grafik | — | — | 8px uç | eksen 10 mono | accent %70 çizgi | 1 seri |

## Görsel dil

İkon: 1.5px çizgi, 20px, `--ink-soft`. Fotoğraf: yumuşak ışık, sis, düşük doygunluk. İllüstrasyon: gradient leke, suluboya. Doku: grain .03. Logo: ince serif.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 46px ince serif, 2 sis lekesi, tek cam panel | `shots/01-landing.png` |
| Dashboard | çok düşük | Sis kapanır, cam yalnız nav; sayılar Inter | `shots/02-dashboard.png` |
| Form | düşük | Tek cam kart, 460px | — |
| Liste/tablo | düşük | Cam panel, soluk hairline | — |
| Boş durum | orta | Tek cümle + cam kart + 1 buton | — |
| Onboarding | yüksek | Adım başına 1 cam panel, nefes animasyonu | — |
| Pricing | orta | 2 cam kolon | — |
| Giriş/ödeme | çok düşük | Sis/blur kapanır, opak kart | — |
| Modal | orta | Cam + blur 28px | — |
| Toast | orta | Cam pill | — |
| Hata | düşük | `--danger` ince kenar + 14px | — |
| Profil/ayar | orta | Cam liste, soluk ayırıcı | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 160ms | `ease-in-out` | `opacity` |
| Giriş | 1150ms | `ease-in-out` | `opacity` + 40px `translateY`, stagger 140ms |
| Scroll (`top 78%`) | 1200ms | aynı eğri | `opacity` + 32px `translateY`, `once: true` |
| Hover | 380ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 800ms | `ease-in-out` | nefes ölçeği (tek atım) |

- Nefes 6s `ease-in-out` (1–2px, tek öğe, dekor).
- `prefers-reduced-motion`: nefes durur, süreler 0.01ms.
- Yasak: hızlı geçiş, çoklu sürekli animasyon.

## Koyu mod

`--bg` `#1a1720` · `--surface` `rgba(255,255,255,.08)` · `--ink` `#ece7f2` · `--accent` `#9d8ae0` · `--accent-ink` `#1a1720` · blur azaltılır, sis opacity .35.

## Erişilebilirlik

- Gövde 10.85:1, açıklama 5.86:1 → güvenli; `--ink-faint` **2.85:1** → yalnız dekoratif.
- **En riskli stil:** soluk zeminde soluk metin. Kural: gövde her zaman `--ink`.
- Cam üstünde metin opak; yarı saydam metin yasak.
- Nefes animasyonu vestibüler risk → `prefers-reduced-motion` zorunlu.
- Odak halkası 2px accent; cam üstünde 4.83:1.
- Dokunma hedefi 46px.
- `prefers-reduced-transparency`: blur 0, `--surface` opak.

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
| Okunmuyor | `--ink-faint` gövde metninde | `--ink` kullan (10.85:1) |
| "Bulutlu" ama boş | Hiyerarşi yok | İnce serif + Inter gövde kontrastı |
| Banding | 3+ ışık katmanı | 2 leke + grain .03 |
| Yorgunluk | Sürekli animasyon | Nefes 1 öğe, 6s |
| Güven kaybı | Ödeme ekranında sis | O ekranlarda opak kart |

## Komşu stiller

**Uyumlu:** `06 japandi` (dinginlik), `28 surrealism` (rüya), `08 glassmorphism` (cam). **Yasak:** `13 neo-brutalism`, `22 cyberpunk`, `02 swiss-design`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://fonts.google.com/specimen/Cormorant+Garamond | İnce serif |
| https://mobbin.com | Wellness/meditasyon akışları |
| https://developer.apple.com/design/human-interface-guidelines/accessibility | Kontrast ve hareket |

## AI brief

```
Stil: Ethereal (styles/29-ethereal/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="ethereal"]; hard-coded renk YASAK.
KRİTİK: gövde metni her zaman --ink (#3b3542, 10.85:1); --ink-faint yalnız dekoratif (2.85:1).
Zemin: 2 radyal pastel leke (opacity ≤ .6) + grain .03; düz zemin kullanma.
Cam: --surface (beyaz %55) + blur 24px + 1px soluk kenar; cam yüzey ≤ 3.
Tipografi: Cormorant 300 display (46/1.2, 0.03em) + Inter gövde 16/1.75; etiket mono 10 0.2em.
Hareket: 400–800ms ease-in-out; nefes 6s tek öğe; reduced-motion'da durur.
Yasak: soluk zeminde soluk metin, sert gölge, koyu zemin, hızlı/çoklu animasyon, ödeme ekranında sis.
Çıktı: kod + tek paragraf not (kontrastı nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] Gövde metni `--ink`, kontrast ≥ 4.5:1.
- [ ] Zemin 2 radyal leke; düz değil.
- [ ] Cam yüzeyde blur + soluk kenar; cam ≤ 3.
- [ ] Display ince serif, 32px üstü.
- [ ] Nefes 1 öğe, 6s; reduced-motion durduruyor.
- [ ] Ödeme/girişte sis kapatıldı.

## Token

```css
[data-style="ethereal"] {
  --bg: #f7f4f8; --bg-2: #efe9f4;
  --surface: rgba(255,255,255,.55); --surface-2: rgba(255,255,255,.35);
  --ink: #3b3542; --ink-soft: #635c6e; --ink-faint: #968fa3;
  --accent: #7a63bd; --accent-ink: #ffffff;
  --line: rgba(59,53,66,.10);
  --radius: 20px; --radius-lg: 28px;
  --shadow: 0 20px 50px rgba(143,123,214,.16); --shadow-hard: none;
  --font-display: "Cormorant Garamond", "Lora", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.03em; --blur: 24px; --grain: .03;
}
```
