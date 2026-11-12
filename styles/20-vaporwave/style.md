# 20 · Vaporwave

> **Bir cümlede:** Mor-pembe bir melankoli: soluk lavanta, cam paneller, geniş harf aralığı, sonsuz ızgara ve yavaşlık.

| | |
|---|---|
| **Hissiyat** | nostaljik, melankolik, rüyamsı, "aesthetic" |
| **En iyi** | müzik/sanat, etkinlik, kültür arşivi, moda editoryali, oyun atmosferi |
| **Kaçın** | kurumsal ürün, ödeme/giriş, yoğun veri paneli, ciddi sağlık |
| **Zorluk** | orta · **Erişilebilirlik** | orta (düşük kontrast + parlama) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="vaporwave"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Vaporwave, 80'ler/90'lar tüketim estetiğinin hüzünlü yeniden kullanımı: **koyu mor zemin**, **pembe vurgu**, **cam paneller**, **geniş tracking'li teknoid tipografi** (Michroma), **ızgara + güneş** motifi ve **grain**. Hız yoktur; her şey yavaş ve atmosferik.

Kazandığı şey: atmosfer ve kimlik. Feda ettiği şey: işlevsel okunurluk — bu stil anlatı ve mod için, üretkenlik için değil.

### Ne değildir
- **Synthwave değildir.** Synthwave neon + perspektif ızgara + hız; vaporwave soluk, yavaş ve pastel.
- **Y2K değildir.** Y2K parlak/metalik ve neşeli; vaporwave mat ve melankolik.
- **Cyberpunk değildir.** Cyberpunk kir/tehlike anlatısı; vaporwave nostalji.
- **"Mor tema" değildir.** Geniş tracking + cam + ızgara + güneş olmadan sadece koyu tema olur.

### Nereden gelir
2010'ların internet-alt-kültürü (Mallsoft, "ａｅｓｔｈｅｔｉｃ"), 90'lar ticari grafiklerin ironik yeniden kullanımı. Bugün müzik/kültür ürünlerinde atmosfer aracı.

### 3 saniyede tanıma testi
1. Zemin koyu mor mu (#1a1230), siyah değil mi?
2. Vurgu **soluk pembe** mi (#f2a0c0)?
3. Paneller yarı saydam cam mı?
4. Tracking geniş mi (≥ 0.1em), display teknoid mi?
5. Izgara/güneş motifi + grain var mı?

## Zorunlu kurallar

1. **Palet:** koyu mor zemin + soluk pembe accent + lavanta yüzey; doygun renk yok.
2. **Cam panel:** `--surface` (lavanta %14) + blur 12px + 1px pembe kenar (%40).
3. **Geniş tracking:** display `0.14em`, etiket `0.2em`, uppercase.
4. **Motif:** ekran başına 1 (ızgara veya güneş); 2. motif yalnız hero'da hafif.
5. **Grain .07:** banding kırıcı + VHS hissi; metni boğmayacak düzeyde.
6. **Metin tam opak:** `--ink`; cam üstünde yarı saydam metin yasak.

## Yasaklar

- Neon doygun renk (synthwave'e kayar), kırmızı alarm tonları.
- Hızlı animasyon (bu stil yavaştır); 600ms altı büyük geçiş yok.
- Metin üstünde motif (ızgara/güneş metnin arkasında).
- 3+ motif, 3+ parlak renk.
- Sert gölge, kalın kontur, beyaz zemin.
- Yoğun tablo/grafikte tam cam (okunmaz).

## Görsel imza
- **Cam panel:** lavanta %14 + blur 12px + pembe kenar.
- **Izgara:** perspektifsiz düz ızgara, opacity .10, sadece alt yarıda (mask).
- **Güneş:** radial gradient disk, pembe-turuncu geçiş, opacity .25.
- **Tipografi:** Michroma, geniş tracking, uppercase; gövde Poppins 16px.
- **Grain .07** + yumuşak mor glow.
- **Yavaş hareket:** 400–600ms geçişler.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#1a1230` | sayfa | panel |
| `--bg-2` | `#2a1b4d` | bölüm | metin |
| `--surface` | `rgba(185,167,224,.14)` | cam panel | opak gerekli yerde |
| `--surface-2` | `rgba(242,160,192,.12)` | ikincil cam | CTA |
| `--ink` | `#f6efff` | metin (opak) | — |
| `--ink-soft` | `rgba(246,239,255,.74)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(246,239,255,.5)` | dekoratif (4.78:1) | etkileşimli |
| `--accent` | `#f2a0c0` | CTA, aktif, çizgi | geniş zemin |
| `--accent-ink` | `#2a1b4d` | accent üstü (**7.75:1**) | — |
| `--line` | `rgba(242,160,192,.4)` | cam kenarı | metin |

- Ölçülen kontrast: `ink/bg` **15.95:1** · `ink-soft/bg` **9.08:1** · `ink-faint/bg` **4.78:1** · `accent-ink/accent` **7.75:1** · cam üstünde `ink` **12.39:1**.
- Accent üstünde **koyu mor** metin; beyaz yasak (1.9:1).

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Michroma | 46px (mobil 28px) | 400 | 1.2 | `0.14em`, uppercase |
| H2 | Michroma | 26px | 400 | 1.25 | `0.12em` |
| H3 | Poppins | 18px | 600 | 1.35 | `0.02em` |
| Gövde | Poppins | 16px | 400 | 1.7 | `0.01em` |
| Etiket | Space Mono | 10px | 400 | 1.2 | `0.2em`, uppercase |

- Geniş tracking okuma hızını düşürür: gövde 56ch, 3 satırı geçen paragraf yok.
- Michroma 20px altında kullanılmaz; H3'ten sonra Poppins.

## Izgara ve boşluk

Kolon 12 · gutter 28px · container 1120px · bölüm 88/52px · breakpoint 640/900/1120.
- Cam paneller arası ≥ 20px (kenarlar karışmasın).
- Hero'da 1 motif, içerik bölümünde motif yok.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Aurora/mor zemin | `--bg` + motif + grain | yok | sayfa |
| Cam panel | `--surface` + blur 12px | `--shadow` (mor) | kart |
| Yüzen | `--surface` + blur 16px | aynı | modal |

- Derinlik cam + mor glow; koyu gölge yok. Radius 6/14px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 22px | 6px | 13/600 uppercase 0.14em | `--accent` + koyu metin | hover: parlaklık↑ · focus: 2px accent halka · disabled: %45 |
| Buton (cam) | 44px | 0 20px | 6px | 13/600 | `--surface-2` + blur + kenar | hover: `--surface` |
| Input | 44px | 0 14px | 6px | 15/400 | `--surface` + blur | focus: 2px accent · error: `--danger` |
| Kart | içerik | 24px | 14px | H3 + 15 | cam + blur + glow | hover: kenar %60 |
| Chip | 26px | 0 10px | 6px | 10/400 mono | `--surface-2` + kenar | aktif: accent zemin + koyu metin |
| Nav | 72px | 0 32px | — | 12/600 uppercase 0.18em | cam + alt kenar | aktif: pembe alt çizgi |
| Tablo satırı | 52px | 12px 16px | — | 14/400 | alt kenar %25 | hover: `--surface-2` |
| Modal | içerik | 28px | 14px | H2 + 15 | cam + blur 16px | backdrop: `rgba(26,18,48,.6)` |
| Grafik | — | — | 3px uç | eksen 10 mono | pembe çizgi + %20 dolgu | 2 seri |

## Görsel dil

İkon: 1.5px çizgi, 20px, pembe. Fotoğraf: soluk mor tonlama, VHS noise; 14px radius. İllüstrasyon: heykel/palmiye/disk kolaj. Doku: grain .07 + ızgara. Logo: teknoid, geniş tracking.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | 46px Michroma, güneş motifi, tek cam panel, yavaş geçiş | `shots/01-landing.png` |
| Dashboard | düşük | Motif kapanır, cam yalnız nav; sayılar mono | `shots/02-dashboard.png` |
| Form | düşük | Cam panel, tek sütun 460px | — |
| Liste/tablo | düşük | Cam panel içinde düz tablo; motif yok | — |
| Boş durum | orta | Tek cümle + cam kart + pembe buton | — |
| Onboarding | yüksek | Adım başına 1 cam panel, motif değişir | — |
| Pricing | orta | 2-3 cam kolon, orta kolon pembe kenar | — |
| Giriş/ödeme | çok düşük | Cam ve motif kapanır; opak mor kart | — |
| Modal | orta | Cam + blur 16px | — |
| Toast | orta | Pembe pill + koyu metin | — |
| Hata | düşük | `--danger` kenar + 13px metin | — |
| Profil/ayar | orta | Cam liste, motif minimal | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 160ms | `ease-in-out` | `opacity` |
| Giriş | 650ms | `ease-in-out` | `opacity` + 20px `translateY`, stagger 70ms |
| Scroll (`top 78%`) | 700ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 260ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 600ms | `ease-in-out` | parlaklık (tek atım) |

- Izgara kayması ≤4px/20s yavaş döngü (dekor; imza parametresi değil).
- `prefers-reduced-motion`: motif durur, süreler 0.01ms.
- Yasak: 600ms altı büyük geçiş, hızlı animasyon, parlama patlaması.
- Pin/parallax yok.

## Koyu mod

Stil zaten koyu. Açık varyant: `--bg` `#f4eefc` · `--surface` `rgba(255,255,255,.6)` · `--ink` `#241a3d` · `--accent` `#b3527a` · `--accent-ink` `#ffffff`.

## Erişilebilirlik

- Gövde 15.95:1, açıklama 9.08:1 → güvenli; `--ink-faint` 4.78:1 → sınırda, etkileşimli değil.
- Accent üstü koyu metin 7.75:1; beyaz metin yasak.
- Cam üstünde metin opak; yarı saydam metin kontrastı düşürür.
- Geniş tracking + yavaş geçiş: okuma süresi artar → paragrafları 3 satırla sınırla.
- Grain .07 üstünde 14px metin okunur; artırma.
- `prefers-reduced-motion` ve `prefers-reduced-transparency` desteklenir.

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
| "Mor tema" gibi | Tracking/motif yok | 0.14em + ızgara/güneş |
| Okunmuyor | Yarı saydam metin + grain | Opak metin, grain ≤ .07 |
| Synthwave'e kaydı | Neon doygun renk | Soluk pembe/lavanta |
| Yorgunluk | Hızlı animasyon + çok motif | 480ms+, motif ≤ 1 |
| Cam kayboluyor | Kenar yok | 1px pembe %40 + blur |

## Komşu stiller

**Uyumlu:** `21 synthwave` (aynı dönem, daha hızlı), `28 surrealism` (rüya), `19 y2k` (nostalji). **Yasak:** `02 swiss-design`, `01 minimalism`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://aesthetics.fandom.com/wiki/Vaporwave | Dönem dili ve motifler |
| https://fonts.google.com/specimen/Michroma | Teknoid display |
| https://www.awwwards.com/websites/vaporwave/ | Uygulama örnekleri |

## AI brief

```
Stil: Vaporwave (styles/20-vaporwave/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="vaporwave"]; hard-coded renk YASAK.
Palet: koyu mor #1a1230 + soluk pembe #f2a0c0 (üstünde KOYU metin #2a1b4d, 7.75:1) + lavanta cam.
Paneller: --surface (lavanta %14) + blur 12px + 1px pembe %40; cam katman ≤ 3.
Motif: ekran başına 1 (ızgara veya güneş), opacity .10–.25, metnin arkasında.
Tipografi: Michroma uppercase 0.14em (46/1.2) + Poppins gövde 16/1.7; etiket Space Mono 10 0.2em.
Hareket: 400–600ms ease-in-out (yavaş); ızgara kayması ≤ 4px/20s; reduced-motion'da durur.
Grain .07. Yasak: neon doygun renk, yarı saydam metin, hızlı animasyon, beyaz zemin, yoğun tabloda cam.
Çıktı: kod + tek paragraf not (motif ve okunurluk dengesi).
```

**Teslim öncesi öz-denetim**
- [ ] Koyu mor zemin + soluk pembe accent; accent üstü koyu metin.
- [ ] Cam panelde blur + pembe kenar; cam ≤ 3 katman.
- [ ] Tracking ≥ 0.12em display; Michroma uppercase.
- [ ] Motif ≤ 1 ekranda, metnin arkasında; grain ≤ .07.
- [ ] Geçişler ≥ 400ms; reduced-motion motif durduruyor.
- [ ] Yoğun ekranda cam/motif azaltıldı.

## Token

```css
[data-style="vaporwave"] {
  --bg: #1a1230; --bg-2: #2a1b4d;
  --surface: rgba(185,167,224,.14); --surface-2: rgba(242,160,192,.12);
  --ink: #f6efff; --ink-soft: rgba(246,239,255,.74); --ink-faint: rgba(246,239,255,.5);
  --accent: #f2a0c0; --accent-ink: #2a1b4d;
  --line: rgba(242,160,192,.4);
  --radius: 6px; --radius-lg: 14px;
  --shadow: 0 10px 40px rgba(107,78,155,.45); --shadow-hard: none;
  --font-display: "Michroma", "Poppins", system-ui, sans-serif;
  --font-body: "Poppins", "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;
  --tracking: 0.14em; --blur: 12px; --grain: .07;
}
```
