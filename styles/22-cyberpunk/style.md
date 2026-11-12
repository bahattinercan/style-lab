# 22 · Cyberpunk

> **Bir cümlede:** Neon tabelaların altında kirli beton: sarı uyarı şeridi, cyan glow, HUD etiketleri ve mono veri.

| | |
|---|---|
| **Hissiyat** | distopik, teknik, tehlikeli, "gece şehri" |
| **En iyi** | oyun, kripto/güvenlik ürünü, etkinlik, teknik demo, hacker teması |
| **Kaçın** | sağlık, resmi kurum, aile/çocuk ürünü, ödeme güveni gereken akışlar |
| **Zorluk** | orta-yüksek (kaos kontrolü) · **Erişilebilirlik** | orta (neon yorgunluğu) |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="cyberpunk"]` |
| **Kompozisyon** | `split-reverse` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Cyberpunk, yüksek teknoloji + düşük yaşam: **siyah-kirli zemin**, **sarı uyarı şeridi**, **cyan glow** ve **mono veri** dili. Tipografi kondanse teknik (Chakra Petch) + mono gövde (IBM Plex Mono). Köşe yarıçapı neredeyse yok, kenarlar keskin.

Kazandığı şey: teknik otorite + atmosfer. Feda ettiği şey: güven ve sakinlik; yanlış sektörde "güvenilmez" algısı yaratır.

### Ne değildir
- **Cybercore değildir.** Cybercore terminal/CLI (yeşil fosfor); cyberpunk sokak/neon.
- **Synthwave değildir.** Synthwave pembe nostalji; cyberpunk sarı-cyan ve kirli.
- **Acid graphics değildir.** Acid tek asit rengi; cyberpunk ikili neon + HUD.
- **"Siyah + neon" değildir.** Uyarı şeridi, HUD etiketleri ve mono veri olmadan sadece koyu tema olur.

### Nereden gelir
William Gibson/Blade Runner görsel dili; 2020'lerde kripto/güvenlik ürünlerinin "hacker" estetiği.

### 3 saniyede tanıma testi
1. Zemin siyah ve hafif "kirli" (grain .08) mi?
2. Neon sarı (uyarı) + cyan (glow) ikilisi var mı?
3. Sarı-siyah uyarı şeridi bir bantta mı?
4. Gövde mono mu (IBM Plex Mono)?
5. Kenarlar keskin (radius ≤ 6px) mi?

## Zorunlu kurallar

1. **İki neon rol:** sarı = uyarı/dikkat, cyan = teknik/bilgi; karıştırma.
2. **Uyarı şeridi:** yalnız 1 bantta (üst veya bölüm başı), 8px yükseklik.
3. **Mono gövde:** IBM Plex Mono 15px; başlık Chakra Petch uppercase.
4. **Radius ≤ 6px**; panel 6px, buton 2px.
5. **Kontrast tabanı:** gövde ≥ 4.5:1; glow metnin arkasında değil kenarında.
6. **Kir ölçülü:** grain .08 + 1 doku katmanı; fazlası okunurluğu bozar.

## Yasaklar

- Üçüncü neon (pembe/yeşil) — synthwave/acid'e kayar.
- Her öğede glow.
- Yuvarlak, yumuşak kartlar (radius > 6px).
- Açık zemin / gündüz modu.
- Strobe, hızlı yanıp sönme.
- Ödeme/giriş ekranında tam yoğunluk.

## Görsel imza
- **Uyarı şeridi:** `repeating-linear-gradient(90deg, #f9f002 0 14px, #0b0b0f 14px 28px)`, 8px.
- **Cyan glow:** `0 0 16px rgba(5,217,232,.35)` — panel kenarı.
- **HUD etiket:** mono 9–10px, `0.16em`, köşe braketleri (opsiyonel).
- **Keskin köşe:** 2px buton, 6px panel.
- **Kir:** grain .08 + ince scanline.
- **Veri dili:** `[ OK ]`, `--flag`, `0x1F` gibi mono mikro metinler.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#0b0b0f` | sayfa | panel |
| `--bg-2` | `#15151d` | bölüm | metin |
| `--surface` | `rgba(20,20,28,.85)` | panel (yarı saydam) | sayfa |
| `--surface-2` | `#1b1b26` | ikincil | vurgu |
| `--ink` | `#f2f5f7` | metin | — |
| `--ink-soft` | `rgba(242,245,247,.76)` | açıklama | 12px altı |
| `--ink-faint` | `rgba(242,245,247,.5)` | dekoratif (4.97:1) | etkileşimli |
| `--accent` | `#f9f002` | uyarı, CTA, şerit | geniş metin zemini |
| `--accent-ink` | `#0b0b0f` | accent üstü (**16.36:1**) | — |
| `--line` | `rgba(5,217,232,.55)` | cyan kenar/ayırıcı | metin |

- Ölçülen kontrast: `ink/bg` **17.94:1** · `ink-soft/bg` **10.40:1** · `ink-faint/bg` **4.97:1** · `accent-ink/accent` **16.36:1**.
- Sarı üstünde siyah metin; cyan metin olarak yalnız vurgu (küçük punto değil).
- Yasak: pembe/yeşil neon; 4. renk.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | Chakra Petch | 56px (mobil 32px) | 700 | 1.05 | `0.10em`, uppercase |
| H2 | Chakra Petch | 30px | 700 | 1.15 | `0.10em` |
| H3 | IBM Plex Mono | 17px | 600 | 1.3 | `0.04em` |
| Gövde | IBM Plex Mono | 15px | 400 | 1.65 | `0.01em` |
| HUD etiketi | IBM Plex Mono | 9px | 500 | 1.2 | `0.16em`, uppercase |

- Mono gövde 15px altına inmez (yoğun veri dili yorucu).
- Gövde 62ch; teknik metin 3 satırı geçmesin.

## Izgara ve boşluk

Kolon 12 · gutter 16px · container 1240px · bölüm 72/44px · breakpoint 640/900/1240.
- Sıkı gutter (16px): "şehir bloğu" hissi.
- Paneller arası 12px; HUD etiketleri panele 8px mesafede.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Kirli zemin | `--bg` + grain + scanline | yok | sayfa |
| Panel | `--surface` + cyan kenar | `--shadow` (cyan glow) | kart |
| Yüzen | `--surface-2` | güçlü glow | modal |

- Derinlik glow + yarı saydam panel; blur yok (blur 8px yalnız nav'da). Radius 2/6px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 44px | 0 20px | 2px | 13/700 uppercase 0.1em | `--accent` + siyah metin | hover: cyan glow · active: iç gölge · focus: 2px cyan halka · disabled: %40 |
| Buton (cyan) | 44px | 0 18px | 2px | 13/700 | transparent + cyan kenar/metin | hover: cyan %12 dolgu |
| Input | 44px | 0 12px | 2px | 14/400 mono | `--surface-2` + cyan kenar | focus: 2px sarı halka · error: `--danger` |
| Kart | içerik | 18px | 6px | H3 mono + 15 | `--surface` + cyan kenar + glow | hover: kenar %80 |
| Chip | 24px | 0 8px | 2px | 9/500 mono uppercase | sarı %14 + sarı kenar | aktif: sarı + siyah |
| Nav | 60px | 0 20px | — | 11/700 uppercase 0.14em | `--bg` + alt cyan çizgi | aktif: sarı alt 3px |
| Tablo satırı | 44px | 8px 12px | — | 13/400 mono | cyan %20 alt çizgi | hover: `--surface-2` |
| Modal | içerik | 20px | 6px | H2 + 15 | `--surface-2` + glow | backdrop: `rgba(3,3,6,.8)` |
| Grafik | — | — | 0 | eksen 9 mono | sarı + cyan | 2 seri |

## Görsel dil

İkon: 2px çizgi, 20px, mono etiketli. Fotoğraf: yüksek kontrast, neon kenar, kirli doku. İllüstrasyon: HUD/şema, uyarı şeritleri. Doku: grain .08 + scanline. Logo: kondanse, keskin.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | çok yüksek | 56px Chakra Petch, uyarı şeridi, cyan glow panel, mono alt metin | `shots/01-landing.png` |
| Dashboard | orta | HUD etiketleri + mono tablo; glow yalnız 1 panelde | `shots/02-dashboard.png` |
| Form | düşük | Keskin kenar, tek sarı buton; şerit yok | — |
| Liste/tablo | orta | Mono yoğun tablo, cyan ayırıcı | — |
| Boş durum | orta | `[ NO DATA ]` mono + tek buton | — |
| Onboarding | yüksek | Adım başına 1 HUD panel | — |
| Pricing | orta | 3 panel, orta panel sarı kenar | — |
| Giriş/ödeme | çok düşük | Şerit/glow kapanır; sade koyu form (güven) | — |
| Modal | orta | Glow'lu panel, koyu backdrop | — |
| Toast | orta | Sarı pill + siyah metin | — |
| Hata | orta | `[ ERR ]` mono + sarı şerit | — |
| Profil/ayar | düşük | Düz liste, mono etiket | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `ease-out` | `transform: scale(.98)` |
| Giriş | 280ms | `steps(3, end)` | `opacity` + 10px `translateY`, stagger 30ms |
| Scroll (`top 88%`) | 500ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 90ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 240ms | `steps(3)` | glitch (tek atım) |

- Scanline 10s `linear` (dekor).
- `prefers-reduced-motion`: glitch ve scanline durur.
- Strobe yasak.
- Pin/parallax yok.

## Koyu mod

Stil zaten koyu. Açık varyant önerilmez; gerekirse `--bg` `#f2f5f7` · `--surface` `#ffffff` · `--ink` `#0b0b0f` · `--accent` `#a8a000` · `--accent-ink` `#ffffff`.

## Erişilebilirlik

- Gövde 17.94:1, açıklama 10.40:1 → güvenli; `--ink-faint` 4.97:1.
- Sarı üstü siyah 16.36:1 → ideal; cyan metin küçük puntoda kullanılmaz (siyah zeminde 9:1 ama ince mono yorar).
- Mono gövde + neon: bilişsel yük → 15px taban, satır 1.65.
- Glow ekran başına ≤ 3 öğe; strobe yasak.
- Odak halkası 2px cyan + offset 2px.
- Dokunma hedefi 44px; HUD etiketleri dekoratif.

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
| Kitsch/oyuncak | 3+ neon + yuvarlak kart | 2 neon, radius ≤ 6px |
| Okunmuyor | Mono 12px + glow | 15px taban, glow kenarda |
| Güven kaybı | Ödeme ekranında tam stil | O ekranlarda şerit/glow kapat |
| Kimlik kaybı | Şerit ve HUD yok | 1 uyarı şeridi + HUD etiket |
| Göz yorgunluğu | Scanline + grain + glow yoğun | Katman ≤ 2 |

## Komşu stiller

**Uyumlu:** `23 cybercore` (terminal), `21 synthwave` (neon), `15 acid-graphics` (distortion). **Yasak:** `06 japandi`, `04 luxury-typography`, `34 skeuomorphism`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://www.awwwards.com/websites/cyberpunk/ | Uygulama örnekleri |
| https://fonts.google.com/specimen/Chakra+Petch | Kondanse teknik display |
| https://www.nngroup.com/articles/dark-mode/ | Koyu tema kontrast notları |

## AI brief

```
Stil: Cyberpunk (styles/22-cyberpunk/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="cyberpunk"]; hard-coded renk YASAK.
Neon rolleri: sarı #f9f002 = uyarı/CTA (üstünde SİYAH metin 16.36:1), cyan #05d9e8 = teknik/kenar; 3. neon yok.
Şerit: 8px sarı-siyah uyarı bandı, ekran başına 1.
Gövde: IBM Plex Mono 15/1.65; başlık Chakra Petch 700 uppercase 0.10em.
Yüzey: radius 2/6px, yarı saydam panel + cyan kenar + 0 0 16px cyan glow (ekran başına ≤ 3).
Kir: grain .08 + 1 scanline; doku abartma.
Hareket: 90–240ms, steps(3) serbest; strobe YASAK; reduced-motion'da glitch/scanline durur.
Ödeme/giriş: şerit ve glow kapalı (güven).
Çıktı: kod + tek paragraf not (neon rolleri ve okunurluk önlemi).
```

**Teslim öncesi öz-denetim**
- [ ] İki neon rolü ayrı kullanıldı; üçüncü neon yok.
- [ ] Sarı üstünde siyah metin; cyan yalnız vurgu/kenar.
- [ ] Uyarı şeridi 1 bantta, 8px.
- [ ] Radius ≤ 6px; gövde mono ≥ 15px.
- [ ] Glow ≤ 3 öğede; strobe yok.
- [ ] Ödeme/giriş ekranında süs kapalı.

## Token

```css
[data-style="cyberpunk"] {
  --bg: #0b0b0f; --bg-2: #15151d;
  --surface: rgba(20,20,28,.85); --surface-2: #1b1b26;
  --ink: #f2f5f7; --ink-soft: rgba(242,245,247,.76); --ink-faint: rgba(242,245,247,.5);
  --accent: #f9f002; --accent-ink: #0b0b0f;
  --line: rgba(5,217,232,.55);
  --radius: 2px; --radius-lg: 6px;
  --shadow: 0 0 16px rgba(5,217,232,.35); --shadow-hard: none;
  --font-display: "Chakra Petch", "Rajdhani", system-ui, sans-serif;
  --font-body: "IBM Plex Mono", ui-monospace, monospace;
  --font-mono: "Share Tech Mono", ui-monospace, monospace;
  --tracking: 0.10em; --blur: 8px; --grain: .08;
}
```
