# 28 · Surrealism

> **Bir cümlede:** Beklenmedik ölçek ve yer değiştirme: küçük şeyler dev, dev şeyler arka planda; düzen gerçekçi, içerik rüya.

| | |
|---|---|
| **Hissiyat** | rüyamsı, şaşırtıcı, sanatsal, "bir şey ters" |
| **En iyi** | sanat/kültür, ajans portfolyosu, kampanya, etkinlik, editoryal |
| **Kaçın** | ödeme/giriş, sağlık, kurumsal B2B, yoğun veri |
| **Zorluk** | yüksek (denge) · **Erişilebilirlik** | orta |
| **Aile** | Sanatsal (28–34) · **Token** | `kit/tokens.css` → `[data-style="surrealism"]` |
| **Kompozisyon** | `split` · `inline` · `balanced` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Surrealism, tanıdık öğelerin **ölçek ve bağlamını** bozarak rüya etkisi kurar: dev tipografi + küçük metin, nesnelerin yer değiştirmesi, beklenmeyen kırpma, tek sıcak accent (turuncu). Düzen **grid'e sadıktır** — tuhaflık içerikte, kaosta değil.

Kazandığı şey: hatırlanma ve sanatsal otorite. Feda ettiği şey: öngörülebilirlik; güven gerektiren akışlarda risklidir.

### Ne değildir
- **Anti-design değildir.** Grid korunur; bozulan şey **ölçek ve bağlam**.
- **Maximalism değildir.** Bolluk değil, **tek sürpriz**.
- **Illüstrasyon stili değildir.** Görsel olmasa da tipografi/ölçekle kurulur.
- **"Garip görsel" değildir.** Sürpriz + net hiyerarşi birlikte gerekir.

### Nereden gelir
Dalí/Magritte kolaj mantığı, 20. yüzyıl avangardı; dijitalde ajans portfolyoları ve kültür kampanyalarında.

### 3 saniyede tanıma testi
1. Ölçek çelişkisi var mı (80px başlık + 11px metin)?
2. Bir öğe beklenmedik yerde/ölçekte mi (hero görselinin yarısı kadraj dışı)?
3. Grid hizası korunmuş mu?
4. Tek sıcak accent (turuncu) mı?
5. Yumuşak gölge ve sakin zemin mi?

## Zorunlu kurallar

1. **Tek sürpriz kuralı:** ekran başına 1 ölçek/bağlam sürprizi; ikincisi gürültü.
2. **Grid korunur:** hizalama bozulmaz, yalnız kadraj/ölçek bozulur.
3. **Ölçek zıplaması ≥ 5×:** 80px display + 15px gövde.
4. **Tek accent** (turuncu #e4572e), accent üstü **koyu** metin (4.61:1).
5. **Yumuşak gölge**, radius 4/10px; sertlik yok.
6. **Okunurluk:** gövde ≥ 15px, kontrast ≥ 4.5:1; sürpriz metni bozmaz.

## Yasaklar

- 2+ sürpriz, grid bozulması.
- Metni okunmaz kılan kırpma/örtme.
- Doygun palet (turuncu dışında).
- Sert gölge, kalın kontur.
- Ödeme/giriş ekranında sürpriz.
- Rastgele döndürme (bu stil ölçekle konuşur).

## Görsel imza
- **Dev tipografi:** 80–104px display, 0.92 satır aralığı.
- **Kadraj bozma:** görselin bir parçası bölüm sınırını aşar (overflow visible).
- **Küçük meta:** 11px mono etiket dev başlığın yanında.
- **Tek turuncu vurgu:** buton veya tek kelime.
- **Yumuşak geniş gölge:** `0 24px 60px rgba(30,28,26,.16)`.
- **Grain .05** (kolaj/baskı hissi).

## Renk

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#e7e2da` | kâğıt/gri zemin |
| `--surface` | `#fbf9f5` | kart |
| `--surface-2` | `#efeae1` | ikincil |
| `--ink` | `#1e1c1a` | metin |
| `--ink-soft` | `#56514a` | açıklama |
| `--ink-faint` | `#8d877e` | dekoratif (2.76:1) |
| `--accent` | `#e4572e` | buton/tek kelime |
| `--accent-ink` | `#1e1c1a` | accent üstü (**4.61:1**) |
| `--line` | `rgba(30,28,26,.12)` | hairline |

- Ölçülen kontrast: `ink/bg` **13.18:1** · `ink-soft/bg` **6.10:1** · `ink-faint/bg` **2.76:1** · `accent-ink/accent` **4.61:1**.
- Accent üstünde koyu metin (beyaz 3.2:1 → yasak).
- Yasak: ikinci doygun renk; pastel palet.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Inter | 88px (mobil 40px) | 700 | 0.92 | `-0.03em` |
| H2 | Inter | 40px | 600 | 1.0 | `-0.02em` |
| Gövde | Inter | 15px | 400 | 1.6 | `0` |
| Etiket | IBM Plex Mono | 11px | 500 | 1.2 | `0.18em`, uppercase |

- 80px+ display, 15px gövde: **5×+** zıplama şart.
- Gövde 58ch; sürpriz alanı metinsiz.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1200px · bölüm 88/52px · breakpoint 640/900/1200.
- Hero: 8/4 asimetri; görsel kadrajdan taşar (`overflow: visible`, `margin-right: -40px`).
- Sürpriz alanı için bölüm arası 88px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Kâğıt | `--bg` + grain | yok | sayfa |
| Kart | `--surface` | `--shadow` (geniş yumuşak) | içerik |
| Yüzen | `--surface` | daha geniş gölge | modal |

- Derinlik yumuşak gölgeden; radius 4/10px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 46px | 0 24px | 4px | 14/600 | `--accent` + koyu metin | hover: %94 · focus: 2px accent halka · disabled: %40 |
| Buton (çizgi) | 46px | 0 22px | 4px | 14/600 | transparent + 1px ink | hover: `--surface-2` |
| Input | 46px | 0 14px | 4px | 15/400 | `--surface` + 1px `--line` | focus: 2px accent |
| Kart | içerik | 24px | 10px | H3 + 15 | `--surface` + yumuşak gölge | hover: translateY(-2px) |
| Chip | 24px | 0 10px | 4px | 11/500 mono | `--surface-2` + kenar | aktif: accent |
| Nav | 72px | 0 28px | — | 12/600 uppercase 0.16em | `--bg` + hairline | aktif: accent alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 15/400 | hairline alt | hover: `--surface-2` |
| Modal | içerik | 28px | 10px | H2 + 15 | geniş gölge | backdrop: `rgba(30,28,26,.35)` |
| Toast | 46px | 0 18px | 4px | 13/500 | `--ink` + `--bg` | 4sn |
| Grafik | — | — | 4px uç | eksen 10 mono | accent + ink %15 | 1 seri |

## Görsel dil

İkon: 1.5px çizgi, 22px. Fotoğraf: kolaj/ölçek oyunu, tek nesne dev. İllüstrasyon: rüya kolajı. Doku: grain .05. Logo: dev, kadrajdan taşabilir.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | çok yüksek | 88px başlık, kadraj taşan görsel, tek turuncu buton | `shots/01-landing.png` |
| Dashboard | çok düşük | Sürpriz yok; sade tablo + Inter başlık | `shots/02-dashboard.png` |
| Form | düşük | Tek sütun, sürpriz yok | — |
| Liste/tablo | düşük | Düz satırlar | — |
| Boş durum | yüksek | Dev tek kelime + tek satır | — |
| Onboarding | yüksek | Adım başına 1 sürpriz | — |
| Pricing | orta | 3 kart, orta kart ölçek 1.04 | — |
| Giriş/ödeme | çok düşük | Sürpriz sıfır | — |
| Modal | orta | Geniş gölge, 10px radius | — |
| Toast | düşük | Sade koyu bar | — |
| Hata | düşük | Kısa metin + accent alt çizgi | — |
| Profil/ayar | düşük | Sade liste | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `opacity` |
| Giriş | 1100ms | `ease-out` | `opacity` + 36px `translateY`, stagger 130ms |
| Scroll (`top 82%`) | 1050ms | aynı eğri | `opacity` + 32px `translateY`, `once: true` |
| Hover | 420ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 600ms | `ease-out` | ölçek (tek atım) |

- `prefers-reduced-motion`: 0.01ms, dönüşüm anlık.
- Yasak: rastgele döndürme, sürekli döngü.

## Koyu mod

`--bg` `#15130f` · `--surface` `#1e1b16` · `--ink` `#ece7de` · `--accent` `#f07a52` · `--accent-ink` `#15130f` · grain .03.

## Erişilebilirlik

- Gövde 13.18:1, açıklama 6.10:1 → güvenli; `--ink-faint` 2.76:1 → dekoratif.
- Accent üstü koyu 4.61:1; beyaz yasak.
- Sürpriz metni örtmez: kadraj taşması `pointer-events: none` alanlarda.
- Ölçek zıplaması okuma düzenini bozmaz: gövde 15px/1.6 sabit.
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
| Anlaşılmıyor | Sürpriz + zayıf hiyerarşi | Tek sürpriz + net ölçek |
| "Garip tasarım" | Grid bozulmuş | Grid korunur, yalnız kadraj |
| Okunmuyor | Görsel metnin üstünde | `pointer-events: none` + z-index |
| Dağınık | 2+ sürpriz | Ekran başına 1 |

## Komşu stiller

**Uyumlu:** `03 editorial-design` (kolaj), `29 ethereal` (rüya), `17 maximalism` (katman). **Yasak:** `02 swiss-design`, `23 cybercore`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.tate.org.uk/art/art-terms/s/surrealism | Akım referansı |
| https://www.awwwards.com/websites/surrealism/ | Dijital örnekler |
| https://fonts.google.com/specimen/Inter | Nötr gövde |

## AI brief

```
Stil: Surrealism (styles/28-surrealism/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="surrealism"]; hard-coded renk YASAK.
Kural: grid korunur; ekran başına 1 ölçek/bağlam sürprizi (kadraj taşması veya 5×+ ölçek zıplaması).
Tipografi: Inter display 700 (88/0.92 -0.03em) + gövde 15/1.6 (5×+ zıplama); etiket mono 11 uppercase 0.18em.
Renk: kâğıt #e7e2da + tek turuncu #e4572e (üstünde KOYU metin, 4.61:1); 2. doygun renk yok.
Yüzey: radius 4/10px, geniş yumuşak gölge (0 24px 60px .16), grain .05.
Hareket: 120–600ms ease-out; reduced-motion'da 0.01ms.
Yasak: 2+ sürpriz, grid bozulması, metni örten görsel, sert gölge, ödeme/girişte sürpriz.
Çıktı: kod + tek paragraf not (sürprizi nerede kurdun, okunurluğu nasıl korudun).
```

**Teslim öncesi öz-denetim**
- [ ] Tek sürpriz, grid hizası korunmuş.
- [ ] Ölçek zıplaması ≥ 5×; gövde 15px.
- [ ] Tek accent, üstünde koyu metin.
- [ ] Yumuşak gölge, radius ≤ 10px.
- [ ] Sürpriz metni örtmüyor.
- [ ] Ödeme/girişte sürpriz yok.

## Token

```css
[data-style="surrealism"] {
  --bg: #e7e2da; --bg-2: #d9d2c7;
  --surface: #fbf9f5; --surface-2: #efeae1;
  --ink: #1e1c1a; --ink-soft: #56514a; --ink-faint: #8d877e;
  --accent: #e4572e; --accent-ink: #1e1c1a;
  --line: rgba(30,28,26,.12);
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 24px 60px rgba(30,28,26,.16); --shadow-hard: none;
  --font-display: "Inter", "Helvetica Neue", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --tracking: -0.02em; --blur: 0px; --grain: .05;
}
```
