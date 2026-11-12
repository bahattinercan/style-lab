# 23 · Cybercore

> **Bir cümlede:** Terminalden taşan arayüz: fosfor yeşili mono tipografi, log satırları, HUD çerçeveleri ve 0 radius.

| | |
|---|---|
| **Hissiyat** | teknik, gizli, kesin, "sistem konsolu" |
| **En iyi** | geliştirici aracı, güvenlik/observability, AI altyapı ürünü, teknik dokümantasyon |
| **Kaçın** | tüketici alışverişi, çocuk, wellness, görsel ağırlıklı marka |
| **Zorluk** | orta · **Erişilebilirlik** | iyi (yüksek kontrast) / mono yorgunluğu |
| **Aile** | Retro (19–27) · **Token** | `kit/tokens.css` → `[data-style="cybercore"]` |
| **Kompozisyon** | `split-reverse` · `inline` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Cybercore, CLI/terminal dilini arayüze taşır: **siyah-yeşil zemin**, **fosfor yeşili mono** (JetBrains Mono her yerde), `>` prompt işaretleri, log satırları, `[ OK ]` / `[ WARN ]` etiketleri, ince HUD çerçeveleri ve **0 radius**. Amaç "sistemin içini görüyorsun" hissi.

Kazandığı şey: teknik otorite ve şeffaflık. Feda ettiği şey: sıcaklık; ayrıca mono gövde uzun okumada yorar.

### Ne değildir
- **Cyberpunk değildir.** Cyberpunk sokak/neon; cybercore konsol/veri.
- **Kod editörü teması değildir.** Prompt işaretleri, log hiyerarşisi ve HUD çerçeve olmadan sadece "koyu tema" olur.
- **"Yeşil yazı" değildir.** Renk kodu (OK yeşil, WARN sarı, ERR kırmızı) ve mono ölçek gerekir.
- **Matrix klişesi değildir.** Yağmur animasyonu yok; statik ve okunur.

### Nereden gelir
Terminal estetiği, eski BBS/konsol arayüzleri ve "developer-first" ürün dalgası (observability, AI altyapı).

### 3 saniyede tanıma testi
1. Zemin neredeyse siyah ve yeşil fosforlu mu (#05080a / #33ff99)?
2. Tüm metin mono mu (JetBrains Mono)?
3. Prompt/log işaretleri var mı (`>`, `[ OK ]`, `$`)?
4. Radius 0 mı, HUD çerçeveleri ince mi?
5. Yeşil dışında yalnız durum renkleri (WARN/ERR) mi?

## Zorunlu kurallar

1. **Mono tek aile:** başlık, gövde, etiket — hepsi JetBrains Mono; display'de 700.
2. **Renk kodu:** `--accent` yeşil = normal/OK; `--warn` sarı; `--danger` kırmızı. Renk **anlam** taşır.
3. **Prompt işareti:** bölüm başlıklarında `>` veya `~/` öneki; her başlıkta değil.
4. **Radius 0** (istisna 2px), HUD çerçeve 1px `--line`.
5. **Gövde 15px / 1.65** — mono okunurluğu için satır aralığı ferah.
6. **Glow ölçülü:** `0 0 10px accent %28`, ekran başına ≤ 3 öğe.

## Yasaklar

- Sans-serif gövde (terminal hissi biter).
- Üçüncü neon renk; renk kodunu dekorasyon olarak kullanmak.
- Radius > 2px, yumuşak gölge, cam.
- Matrix yağmuru / sürekli scroll eden log (rahatsız edici).
- Renk tek başına anlam (her durum etiketi metinle).
- 13px altı gövde (mono + küçük = okunmaz).

## Görsel imza
- **Fosfor yeşili:** `#33ff99`; üstünde siyah metin.
- **Prompt:** `> ` öneki başlıklarda, mono, yeşil.
- **Log satırı:** `[ OK ]`, `[ WARN ]`, `[ ERR ]` etiketleri; mono 11px.
- **HUD çerçeve:** 1px yeşil %35, köşe braketleri opsiyonel.
- **Scanline .06** + grain .06 (CRT hissi, abartısız).
- **Radius 0**, keskin grid.

## Renk

| Token | Değer | Kullanım | Kaçınılır |
|---|---|---|---|
| `--bg` | `#05080a` | sayfa | panel |
| `--bg-2` | `#0a1014` | bölüm, log zemini | metin |
| `--surface` | `#0a1014` | panel | sayfa |
| `--surface-2` | `#0f171c` | ikincil, hover | vurgu |
| `--ink` | `#d7ffe9` | metin | — |
| `--ink-soft` | `#86c9a6` | açıklama, ikincil log | başlık |
| `--ink-faint` | `#4d7a63` | dekoratif (4.09:1) | gövde |
| `--accent` | `#33ff99` | OK, aktif, CTA | geniş zemin |
| `--accent-ink` | `#05080a` | accent üstü (**15.21:1**) | — |
| `--line` | `rgba(51,255,153,.35)` | HUD çerçeve | metin |

- Ölçülen kontrast: `ink/bg` **18.53:1** · `ink-soft/bg` **10.44:1** · `ink-faint/bg` **4.09:1** · `accent-ink/accent` **15.21:1**.
- Durum renkleri: `--ok` yeşil, `--warn` `#b54708` yerine açık sarı (`#ffd166`), `--danger` (`#ff6b6b`) — hepsi siyah zeminde ≥ 4.5:1.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır | Tracking |
|---|---|---|---|---|---|
| Display | JetBrains Mono | 40px (mobil 24px) | 700 | 1.2 | `0.04em` |
| H2 | JetBrains Mono | 22px | 700 | 1.3 | `0.04em` |
| H3 | JetBrains Mono | 16px | 700 | 1.35 | `0.02em` |
| Gövde | JetBrains Mono | 15px | 400 | 1.65 | `0` |
| Log / etiket | JetBrains Mono | 11px | 500 | 1.5 | `0.08em` |

- Display 40px üstüne çıkma (mono genişler, satır kırılır).
- Kod blokları 14px/1.6, `--surface-2` zemin.
- Gövde 68ch (mono dar olduğu için geniş ölçü kaldırır).

## Izgara ve boşluk

Kolon 12 · gutter 16px · container 1240px · bölüm 64/40px · breakpoint 640/900/1240.
- Sıkı ve eşit: her blok aynı sol hatta (terminal hizası).
- Log/panel içi padding 16px; satır arası 6px.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| CRT zemin | `--bg` + scanline + grain | yok | sayfa |
| Panel | `--surface` + 1px HUD kenar | hafif glow | kart/log |
| Yüzen | `--surface-2` | `0 0 24px` accent %20 | modal |

- Derinlik glow ve çerçeveden; blur/gölge yok. Radius 0/2px.

## Bileşen reçeteleri

| Bileşen | Y | Padding | Radius | Tipografi | Renk/gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton | 40px | 0 16px | 0 | 13/700 | `--accent` + siyah metin | hover: glow %20 artar · active: iç gölge · focus: 1px accent dış çerçeve · disabled: %40 |
| Buton (çerçeve) | 40px | 0 14px | 0 | 13/700 | transparent + 1px accent | hover: accent %10 dolgu |
| Input | 40px | 0 12px | 0 | 14/400 mono | `--surface-2` + 1px kenar | focus: 1px accent + glow · error: `--danger` |
| Kart / log paneli | içerik | 16px | 0/2px | H3 + 14 | `--surface` + HUD kenar | hover: kenar %60 |
| Etiket | 20px | 0 6px | 0 | 10/500 mono uppercase | durum rengi %12 + kenar | — |
| Nav | 56px | 0 20px | — | 12/700 uppercase 0.08em | `--bg` + alt 1px kenar | aktif: accent metin + `>` öneki |
| Tablo satırı | 40px | 8px 10px | — | 13/400 mono | 1px kenar %20 alt | hover: `--surface-2` |
| Modal | içerik | 20px | 2px | H2 + 14 | `--surface-2` + glow | backdrop: `rgba(2,4,5,.85)` |
| Toast | 40px | 0 14px | 0 | 12/600 mono | `--surface-2` + durum kenarı | 4sn |
| Grafik | — | — | 0 | eksen 10 mono | accent çizgi + ASCII alternatif | 2 seri |

## Görsel dil

İkon: 1.5px çizgi veya ASCII karakter (`▸`, `■`, `●`). Fotoğraf: siyah-beyaz + yeşil duotone. İllüstrasyon: şema/diyagram, ASCII diyagram serbest. Doku: scanline .06 + grain .06. Logo: mono, `~/` önekli.

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing/hero | yüksek | `>` prompt başlık, log şeridi, HUD panel, tek yeşil CTA | `shots/01-landing.png` |
| Dashboard | yüksek | Mono metrikler + log listesi + ASCII sparkline | `shots/02-dashboard.png` |
| Form | düşük | Tek sütun, keskin input, durum etiketi | — |
| Liste/tablo | yüksek | Yoğun tablo, mono, 1px ayırıcı; zebra yok | — |
| Boş durum | orta | `[ NO DATA ]` + tek komut önerisi | — |
| Onboarding | orta | Adım başına 1 komut satırı | — |
| Pricing | düşük | Tablo formatında karşılaştırma | — |
| Giriş/ödeme | düşük | Sade form, durum etiketi; süs yok | — |
| Modal | orta | HUD panel + glow | — |
| Toast | orta | Durum renkli mono pill | — |
| Hata | yüksek | `[ ERR ]` + neden + çözüm komutu | — |
| Profil/ayar | orta | Anahtar-değer listesi | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | `steps(4)` | `opacity` |
| Giriş | 240ms | `steps(4, end)` | `opacity` + 8px `translateY`, stagger 20ms |
| Scroll (`top 90%`) | 520ms | aynı eğri | `opacity` + 20px `translateY`, `once: true` |
| Hover | 80ms | aynı eğri | `transform: scale(1.02)` |
| Ödül | 240ms | `steps(4)` | satır highlight (tek atım) |

- Scanline 12s `linear` (dekor).
- `prefers-reduced-motion`: scanline durur.
- Yasak: sürekli akan log, matrix yağmuru, strobe.
- Pin/parallax yok.

## Koyu mod

Stil zaten koyu. Açık varyant: `--bg` `#f4fbf6` · `--surface` `#ffffff` · `--ink` `#0b1a12` · `--accent` `#0f8a4d` · `--accent-ink` `#ffffff` · glow kaldırılır.

## Erişilebilirlik

- Gövde 18.53:1, açıklama 10.44:1 → güvenli; `--ink-faint` 4.09:1 → sınırda, gövde metni değil.
- Mono + yoğun veri: gövde 15px, satır 1.65; 13px altına inme.
- Renk kodu tek başına anlam taşımaz: `[ WARN ]` metni her zaman var.
- Scanline/grain düşük opaklıkta; strobe yok.
- Odak: 1px accent + 4px glow (halka yerine çerçeve) — koyu zeminde 15:1.
- Dokunma hedefi 40px görünse de padding ile 44px'e çıkarılır.

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
| Okunmuyor | Mono 12px + yoğun satır | 15px/1.65, ölçü 68ch |
| "Kod editörü" gibi | Prompt/log hiyerarşisi yok | `>` öneki + durum etiketleri |
| Klişe | Matrix yağmuru / sürekli log | Statik, ölçülü scanline |
| Kimlik kaybı | Sans gövde kullanılmış | Tamamı mono |
| Yorgunluk | Glow her öğede | Glow ≤ 3 öğe |

## Komşu stiller

**Uyumlu:** `22 cyberpunk` (neon sokak), `32 conceptual-sketch` (şema), `02 swiss-design` (ızgara disiplini). **Yasak:** `11 claymorphism`, `04 luxury-typography`, `06 japandi`.

## Referanslar

| Kaynak | Ne için |
|---|---|
| https://fonts.google.com/specimen/JetBrains+Mono | Mono ölçek ve ağırlıklar |
| https://www.nngroup.com/articles/monospace-fonts/ | Mono okunurluk sınırları |
| https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric | Tabular sayılar |

## AI brief

```
Stil: Cybercore (styles/23-cybercore/style.md + tokens.json)
Token: yalnızca kit/tokens.css [data-style="cybercore"]; hard-coded renk YASAK.
Tek aile: JetBrains Mono (başlık 700, gövde 400 15/1.65). Sans gövde YASAK.
Renk kodu: yeşil #33ff99 (OK/CTA, üstünde siyah 15.21:1), sarı = WARN, kırmızı = ERR; renk tek başına anlam taşımaz.
İmza: `>` prompt öneki bölüm başlıklarında, `[ OK ]/[ WARN ]/[ ERR ]` etiketleri, 1px HUD çerçeve, radius 0.
Doku: scanline .06 + grain .06; glow ≤ 3 öğe (0 0 10px accent %28).
Hareket: 90–240ms steps(4); sürekli akan log YASAK; reduced-motion'da scanline durur.
Ödeme/giriş: sade form, durum etiketi; süs yok.
Çıktı: kod + tek paragraf not (mono ölçek ve renk kodu disiplini).
```

**Teslim öncesi öz-denetim**
- [ ] Tüm metin mono; gövde ≥ 15px.
- [ ] Renk kodu (OK/WARN/ERR) metinle birlikte.
- [ ] Prompt öneki ve log etiketleri kullanıldı.
- [ ] Radius 0/2; HUD çerçeve 1px.
- [ ] Glow ≤ 3 öğe; scanline düşük opaklık.
- [ ] Akan log / strobe yok.

## Token

```css
[data-style="cybercore"] {
  --bg: #05080a; --bg-2: #0a1014;
  --surface: #0a1014; --surface-2: #0f171c;
  --ink: #d7ffe9; --ink-soft: #86c9a6; --ink-faint: #4d7a63;
  --accent: #33ff99; --accent-ink: #05080a;
  --line: rgba(51,255,153,.35);
  --radius: 0px; --radius-lg: 2px;
  --shadow: 0 0 10px rgba(51,255,153,.28); --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0.04em; --blur: 0px; --grain: .06;
}
```
