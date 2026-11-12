# 21 · Synthwave

> **Bir cümlede:** Derin mavi gece, neon pembe-cyan glow ve perspektif ızgara; 80'ler arcade'inin hızı.

| | |
|---|---|
| **Hissiyat** | neon, hızlı, sinematik, "arcade gecesi" |
| **En iyi** | oyun, müzik/etkinlik, e-spor, retro lansman, kulüp |
| **Kaçın** | kurumsal SaaS, sağlık, uzun okuma, parlak ortam kullanımı |
| **Zorluk** | orta · **Erişilebilirlik** | orta-yüksek (kontrast yanması) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="synthwave"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Synthwave, 80'ler outrun estetiği: **koyu mavi-mor zemin**, **neon pembe** ana vurgu, **cyan** ikincil çizgi, **glow**, **perspektif ızgara** ve **gün batımı diski**. Harf aralığı geniş, tipografi büyük harf ve kondanse.

Kazandığı şey: sinematik enerji. Feda ettiği şey: sakin okuma ve göz konforu (neon yanması).

### Ne değildir
- **Vaporwave değildir.** Vaporwave soluk/yavaş; synthwave doygun/hızlı.
- **Cyberpunk değildir.** Cyberpunk kir ve distopya; synthwave parlak ve nostaljik.
- **Acid graphics değildir.** Acid tek asit yeşili; synthwave pembe+cyan çift neon.
- **"Neon yazı" değildir.** Perspektif ızgara + glow hiyerarşisi olmadan sadece "parlayan tema" olur.

### Nereden gelir
80'ler arcade/sinema afişleri, outrun müzik sahnesi; 2010'larda "retrowave" ile dijital tasarıma girdi.

### 3 saniyede tanıma testi
1. Zemin koyu mavi/mor mu (#120458)?
2. Neon **pembe** ana, **cyan** ikincil mi?
3. Glow var mı (text-shadow / box-shadow)?
4. Perspektif ızgara / gün batımı diski var mı?
5. Display kondanse ve büyük harf mi?

## Zorunlu kurallar

1. **İki neon:** pembe (ana) + cyan (ikincil); başka doygun renk yok.
2. **Glow hiyerarşisi:** ana öğe 1 glow katmanı, ikincil 0; her öğe parlamaz.
3. **Perspektif ızgara:** yalnızca alt bantta, opacity ≤ .35.
4. **Kontrast tabanı:** glow metnin okunurluğunu bozmaz; gövde ≥ 4.5:1.
5. **Uppercase display**, tracking `0.06em`; gövde normal case.
6. **Neon alan sınırı:** doygun alan ≤ %25; gerisi koyu zemin.

## Yasaklar

- Üçüncü neon renk (yeşil/sarı) — acid/cyberpunk'a kayar.
- Metinde glow (gövde metni); glow yalnız display ve buton.
- Parlak (açık) zemin; gündüz modu.
- Hızlı yanıp sönen animasyon (fotosensitivite).
- Düşük kontrastlı neon üstüne neon metin.
- Yoğun tabloda tam glow.

## Görsel imza
- **Neon pembe:** `#ff2a6d` buton/başlık; üstünde koyu metin (4.90:1).
- **Cyan çizgi:** `--line` (cyan %55) — 1px bölüm ayırıcı.
- **Glow:** `0 0 12px accent %65, 0 0 32px cyan %35`.
- **Perspektif ızgara:** alt %35 bant; 2px çizgi, mask ile soluklaşır.
- **Gün batımı diski:** radial gradient, hero'da bir kez.
- **Grain .04:** neon banding'i kırar.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#120458` | sayfa | panel |
| `--bg-2` | `#2b1055` | bölüm | metin |
| `--surface` | `#1b0a63` | panel | sayfa |
| `--surface-2` | `#2a1178` | ikincil | vurgu |
| `--ink` | `#fdfdff` | metin | — |
| `--ink-soft` | `rgba(253,253,255,.78)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(253,253,255,.52)` | dekoratif (5.17:1) | etkileşimli |
| `--accent` | `#ff2a6d` | CTA, başlık vurgusu | geniş zemin |
| `--accent-ink` | `#120458` | accent üstü (**4.90:1**) | — |
| `--line` | `rgba(5,217,232,.55)` | ayırıcı, çerçeve | metin |

- Ölçülen kontrast: `ink/bg` **17.46:1** · `ink-soft/bg` **10.65:1** · `ink-faint/bg` **5.17:1** · `accent-ink/accent` **4.90:1**.
- Accent üstü **koyu mavi** metin; beyaz 3.4:1 → yasak.
- Yasak: sarı/yeşil neon; 3. doygun hue.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Outrun / Turbo / Michroma | 64px (mobil 34px) | 400 | 1.05 | `0.06em`, uppercase |
| H2 | aynı | 34px | 400 | 1.1 | `0.06em` |
| H3 | Inter | 18px | 600 | 1.3 | `0.02em` |
| Gövde | Inter | 16px | 400 | 1.6 | `0.01em` |
| Etiket | Space Mono | 10px | 400 | 1.2 | `0.2em`, uppercase |

- Display glow'lu; glow metnin iç boşluklarını kapatmasın (text-shadow blur ≤ 18px).
- Gövde 16/1.6, 58ch; glow gövde metninde yasak.

## Izgara ve boşluk

Kolon 12 · gutter 24px · container 1200px · bölüm 88/52px · breakpoint 640/900/1200.
- Izgara motifi içerik bölümünde kapanır; sadece hero/alt bantta.
- Kart aralığı 16px; glow payı için 12px ek.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Gece zemini | `--bg` + ızgara + grain | yok | sayfa |
| Panel | `--surface` + cyan kenar | hafif glow | kart |
| Yüzen | `--surface-2` | güçlü glow | modal |

- Derinlik glow ve perspektiften; blur/cam yok. Radius 4/10px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 48px | 0 24px | 4px | 14/700 uppercase 0.08em | `--accent` + koyu metin + glow | hover: glow 32px · active: iç gölge · focus: 2px cyan halka · disabled: %40 |
| Buton (cyan) | 48px | 0 22px | 4px | 14/700 | transparent + 1px cyan, cyan metin | hover: cyan %12 dolgu |
| Input | 48px | 0 14px | 4px | 15/400 | `--surface` + 1px cyan | focus: 2px pembe halka · error: `--danger` |
| Kart | içerik | 20px | 10px | H3 + 15 | `--surface` + cyan kenar + hafif glow | hover: kenar %80 |
| Chip | 26px | 0 10px | 4px | 10/400 mono | pembe %14 + pembe kenar | aktif: pembe + koyu metin |
| Nav | 64px | 0 24px | — | 12/700 uppercase 0.14em | gece + cyan alt çizgi | aktif: pembe alt 3px |
| Tablo satırı | 48px | 10px 12px | — | 14/400 mono sayı | cyan %25 alt çizgi | hover: `--surface-2` |
| Modal | içerik | 24px | 10px | H2 + 15 | `--surface-2` + glow | backdrop: `rgba(6,2,26,.7)` |
| Grafik | — | — | 2px uç | eksen 10 mono | pembe + cyan + soft glow | 2 seri |

## Görsel dil

İkon: 2px çizgi, 22px, cyan. Fotoğraf: neon kenar, yüksek kontrast, koyu. İllüstrasyon: perspektif ızgara, gün batımı. Doku: grain .04. Logo: kondanse, glow'lu.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | çok yüksek | 64px glow başlık, gün batımı diski, perspektif ızgara, tek pembe CTA | `shots/01-landing.png` |
| Dashboard | düşük | Izgara/glow kapanır; mono sayılar, cyan ayırıcı | `shots/02-dashboard.png` |
| Form | düşük | Koyu panel, cyan kenar, tek pembe buton | — |
| Liste/tablo | düşük | Düz koyu zemin, ince cyan çizgi | — |
| Boş durum | orta | Neon ikon + tek cümle + buton | — |
| Onboarding | yüksek | Adım başına 1 neon öğe | — |
| Pricing | orta | 3 panel, orta panel pembe kenar | — |
| Giriş/ödeme | çok düşük | Glow ve ızgara kapalı; sade koyu form | — |
| Modal | orta | Glow'lu panel, koyu backdrop | — |
| Toast | orta | Pembe pill + koyu metin | — |
| Hata | düşük | `--danger` kenar, kısa metin | — |
| Profil/ayar | düşük | Düz liste, neon yalnız aktifte | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 120ms | `ease-out` | `opacity` |
| Giriş | 500ms | `linear` | `opacity` + 16px `translateY`, stagger 50ms |
| Scroll (`top 82%`) | 600ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 180ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 320ms | `ease-out` | glow nabız (tek atım) |

- Izgara kayması 12s `linear` (≤8px, dekor).
- `prefers-reduced-motion`: ızgara ve nabız durur.
- **Strobe yasak.**
- Pin/parallax yok.

## Koyu mod

Stil zaten gece. Açık varyant önerilmez; gerekirse `--bg` `#f6f0ff` · `--surface` `#ffffff` · `--ink` `#1a0f3d` · `--accent` `#d1105a` · `--accent-ink` `#ffffff` · glow kaldırılır.

## Erişilebilirlik

- Gövde 17.46:1, açıklama 10.65:1 → güvenli; `--ink-faint` 5.17:1.
- Accent üstü koyu metin 4.90:1; beyaz yasak.
- **Glow + koyu zemin** kontrastı düşürür: glow metnin arkasında değil, kenarında.
- Parlama: glow blur ≤ 18px, ekran başına ≤ 3 parlayan öğe; strobe yasak.
- Odak halkası cyan 2px (koyu zeminde 10:1).
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
| Göz yanması | Her öğede glow + 3+. neon | Glow ≤ 3 öğe, 2 neon |
| Okunmuyor | Glow metnin içine taşmış | text-shadow blur ≤ 18px, gövdede glow yok |
| Vaporwave'e kaydı | Soluk pastel kullanılmış | Doygun pembe/cyan, koyu zemin |
| Karakter kaybı | Perspektif ızgara yok | Hero'da 1 ızgara bandı |
| Yavaş | Animasyonlu glow | Statik glow, hover'da artış |

## Komşu stiller

**Uyumlu:** `20 vaporwave` (aynı dönem, yavaş varyant), `22 cyberpunk` (neon + kir), `24 pixel-art` (arcade). **Yasak:** `01 minimalism`, `06 japandi`, `02 swiss-design`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.awwwards.com/websites/synthwave/ | Uygulama örnekleri |
| https://fonts.google.com/specimen/Michroma | Alternatif kondanse display |
| https://www.nngroup.com/articles/flash-animations/ | Parlama/strobe riski |

## AI brief

```
Stil: Synthwave (styles/21-synthwave/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="synthwave"]; hard-coded renk YASAK.
Neon: pembe #ff2a6d (ana, üstünde KOYU metin #120458, 4.90:1) + cyan #05d9e8 (ikincil çizgi); 3. neon yok.
Glow: 0 0 12px pembe %65 + 0 0 32px cyan %35; ekran başına ≤ 3 parlayan öğe; gövde metninde glow YASAK.
Izgara: perspektif, yalnız alt %35 bantta, opacity ≤ .35; içerik bölümünde kapalı.
Tipografi: Outrun/Michroma uppercase 0.06em (64/1.05) + Inter gövde 16/1.6; etiket Space Mono 10 0.2em.
Hareket: 120–320ms ease-out; ızgara kayması 12s linear ≤ 8px; strobe/nabız sürekli YASAK.
Yoğun ekran (form/tablo/ödeme): glow ve ızgara kapanır.
Çıktı: kod + tek paragraf not (glow hiyerarşisi ve parlama önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] İki neon (pembe + cyan), üçüncü yok.
- [ ] Accent üstü koyu metin; beyaz yok.
- [ ] Glow ≤ 3 öğede, gövde metninde yok.
- [ ] Izgara yalnız alt bantta ve soluk.
- [ ] Strobe yok; reduced-motion ızgarayı durduruyor.
- [ ] Yoğun ekranda glow kapalı.

## Token

```css
[data-style="synthwave"] {
  --bg: #120458; --bg-2: #2b1055;
  --surface: #1b0a63; --surface-2: #2a1178;
  --ink: #fdfdff; --ink-soft: rgba(253,253,255,.78); --ink-faint: rgba(253,253,255,.52);
  --accent: #ff2a6d; --accent-ink: #120458;
  --line: rgba(5,217,232,.55);
  --radius: 4px; --radius-lg: 10px;
  --shadow: 0 0 12px rgba(255,42,109,.65), 0 0 32px rgba(5,217,232,.35);
  --shadow-hard: none;
  --font-display: "Outrun", "Turbo", "Michroma", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.06em; --blur: 0px; --grain: .04;
}
```
