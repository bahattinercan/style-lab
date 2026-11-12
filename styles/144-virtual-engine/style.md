# 144 · Virtual Engine

> **Bir cümlede:** Sanal bir dünyayı düzenleyen editör: viewport, varlık hiyerarşisi ve denetçi panelini CRT başlıklı koyu mor bir motorda birleştiren arayüz.

| | |
|---|---|
| **Hissiyat** | teknik, oyuncul, katmanlı, doğrudan |
| **En iyi** | oyun motoru editörü, sahne düzenleyici, 3B konfigüratör, sanal dünya yönetim paneli |
| **Kaçın** | editoryal makale, muhasebe tablosu, sakin sağlık ekranı — koyu viewport burada yorucu olur |
| **Zorluk** | yüksek · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 5.05:1) |
| **Aile** | Deneysel & Gelecek (136–145) · **Token** | `styles/144-virtual-engine/tokens.json` → `[data-style="virtual-engine"]` |
| **Kompozisyon** | `product` · `rail` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Virtual Engine, arayüzü **editör** olarak kurar: ekranın yarısından fazlası viewport'tur (ortografik dünya ızgarası), sağda denetçi, solda varlık hiyerarşisi, altta konsol satırı. Ekran bir "ürün sayfası" değil, bir **çalışma alanı**dır.

Üç kurucu karar: (1) **viewport önce** — viewport her zaman ekranın en büyük yüzeyi ve içeriği şemadır (fotoğraf değil); (2) **tel kafes ızgara** — 32px ızgara, perspektif yok (ortografik); oyun dünyası ölçülebilir olmalı; (3) **seçim üçlü kodlanır** — seçili varlık sol 3px accent çizgi + çerçeve + listede vurgu ile gösterilir, yalnız renkle değil.

Display **VT323**'dür: CRT terminal estetiği, sayaç ve sahne adları için doğal; gövde Inter okunurluğu taşır, sayılar JetBrains Mono.

Bedeli: koyu magenta accent ve terminal fontu dikkat çeker. Bu yüzden accent yalnız seçim ve birincil eylemde kalır; glow, tarama çizgisi ve flicker yasaktır (CRT taklidi değil, editör).

### Ne değildir
- **Pixel Art (24) değildir:** 24 Press Start 2P + blok gölge ile 8-bit oyun estetiğidir (radius 0); Virtual Engine bir **araç** arayüzüdür (radius 8/14, panel hiyerarşisi).
- **Cybercore (23) değildir:** 23 yeşil neon HUD ve tarama çizgisi kullanır; burada glow/tarama yoktur, accent magenta ve düzen editör düzenidir.
- **AI Native Mesh (39) değildir:** 39 cam kart ve mesh atmosferle soyut bir ürün dilidir; burada viewport/denetçi/hiyerarşi üçlüsü vardır.
- **Command Palette (108) değildir:** 108 klavye odaklı komut arayüzüdür (radius 2/6, none); Virtual Engine görsel düzenleme aracıdır.

### Nereden gelir
Oyun motoru editörleri (Unity, Godot, Blender viewport), 3B konfigüratörler ve sahne düzenleyicileri. Ekranda yeniden kullanılmasının nedeni: "sanal dünya" ürünlerinin vitrin değil **araç** olarak sunulması; kullanıcı dünyayı izlemez, düzenler. Klişeye dönüşmemesi için korunacak detay: viewport'un gerçekten en büyük yüzey olması ve ızgaranın ortografik kalması.

### 3 saniyede tanıma testi
1. Ekranın yarısından fazlası viewport; içinde 32px ızgara ve seçili varlık çerçevesi var.
2. Sağda denetçi paneli (özellik satırları), solda varlık listesi (30px satırlar).
3. Başlık/sayaçlar VT323: terminal karakteri, sabit genişlik.
4. Koyu mor zemin; accent magenta yalnız seçimde.
5. Altta tek satır konsol (zaman + mesaj) akıyor.

## Görsel imza
- **Viewport:** ekranın ≥ %55'i; 32px ortografik ızgara, seçili varlıkta 1px accent çerçeve + dış halka.
- **Eksen işareti:** sol altta 44px yatay/dikey eksen çizgisi (`--ink-faint`).
- **Varlık listesi:** 30px satır, tür + kimlik + görünürlük; seçili satırda sol 3px accent.
- **Konsol satırı:** 26px yükseklik, mono 11px, son 5 olay; `--surface-2` zemin.
- **Radius:** `--radius` 8px (control/chip), `--radius-lg` 14px (panel/modal).
- **Gölge:** tek katman `0 14px 30px -26px`; glow ve tarama çizgisi yok.
- **Doku:** `--grain .02` + dünya ızgarası; CRT efekti yasak.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#120c1c` | editör zemini | viewport zemini |
| `--bg-2` | `#181024` | viewport zemini, input | panel zemini |
| `--surface` | `#1d142b` | panel, liste, denetçi | viewport |
| `--surface-2` | `#251a36` | zebra satır, chip, konsol | birincil panel |
| `--ink` | `#eee8fa` | metin, değer | dekoratif dolgu |
| `--ink-soft` | `#b3a7c9` | ikincil metin, özellik adı | seçim vurgusu |
| `--ink-faint` | `#7f7395` | yalnız ızgara/eksen/ayırıcı | etkileşimli metin |
| `--accent` | `#c7307f` | seçili varlık, birincil eylem | dekorasyon |
| `--accent-ink` | `#ffffff` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(238,232,250,.15)` | panel kenarı, ızgara | metin |

- Ölçülen kontrast: `ink/bg` = **16.03:1** · `ink-soft/bg` = **8.48:1** · `accent-ink/accent` = **5.05:1** · `ink-faint/bg` = **4.37:1**.
- Tek vurgu kuralı: accent yalnız seçim ve birincil eylem. Alarm `--danger`, uyarı `--warn`, çalışır durum `--ok`.
- Yasak kombinasyon: accent üstünde `--ink-soft`; aynı ekranda iki farklı seçim rengi.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | VT323 (`--font-display`) | 46px / mobil 28px | 400 | 1.08 | `--tracking` 0.02em |
| H2 | VT323 | 28px | 400 | 1.2 | 0.01em |
| H3 | Inter | 20px | 600 | 1.3 | 0 |
| Gövde | Inter (`--font-body`) | 14px | 400 | 1.54 | 0 |
| Etiket / sayaç | JetBrains Mono (`--font-mono`) | 10–12px | 400/600 | 1.44 | 0.14em |

- Ölçek oranı ≈ 1.45; kullanılan basamaklar: 11 · 12 · 13 · 14 · 20 · 28 · 46.
- Ölçü önerisi: `h1 { font-size: clamp(28px, 3.6vw, 46px); }`
- Gövde metni maksimum satır uzunluğu: 72 ch.
- Ağırlık kuralı: VT323 yalnız 400 ve yalnız başlık/sayaç; paragrafta kullanılmaz. Gövdede 400/600.

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 |
| Gutter | 12px |
| Container genişliği | 1320px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 1280 viewport 8/4 · 768 denetçi alta iner · 390 tek sütun, konsol 18px |

- Asimetri kuralı: viewport 8/4; ekran başına bir asimetri, gerisi panel ızgarası.
- Bölüm ritmi: art arda en fazla 3 panel; dördüncü blok tam genişlik viewport olur.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` / `--bg-2` | — | editör, viewport |
| Panel | `--surface` | yok | hiyerarşi, denetçi |
| Yüzen katman | `--surface` + `--shadow` | `0 14px 30px -26px rgba(4,1,10,.95)` | modal, varlık detayı |

- Kenarlık formülü: `1px solid var(--line)`; seçili varlıkta `1px var(--accent)` + dış halka.
- Derinlik nereden gelir: panel hiyerarşisi ve ızgara; glow/blur/bevel yok.
- Radius: `--radius` 8px (control, chip), `--radius-lg` 14px (panel, modal).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 34px | 0 14px | `--radius` | 11px/600 mono 0.06em | `--accent` zemin, `--accent-ink` | hover %86 (70ms) · active 1px · focus 2px accent · disabled %42 kesikli · loading 4 kare |
| Buton (ikincil) | 34px | 0 14px | `--radius` | 11px/600 | `--surface`, 1px `--line`, `--ink` | hover `--surface-2` |
| Input | 34px | 0 10px | `--radius` | 12px mono | `--bg-2`, 1px `--line` | focus 2px accent · error `--danger` · disabled %42 |
| Kart | içerik | 16px | `--radius-lg` | — | `--surface`, 1px `--line`, gölge yok | seçili: sol 3px accent |
| Chip / badge | 22px | 0 8px | `--radius` | 12px/400 VT323 | `--surface-2`, 1px `--line` | seçili: accent zemin |
| Nav | 46px | 0 16px | 0 | 11px mono | `--bg`, alt 1px `--line` | sahne adı ortada, sağda FPS |
| Tablo satırı | 30px | 4px 8px | 0 | 12px mono | alt 1px `--line`, zebra `--surface-2` | seçili sol 3px accent |
| Modal / sheet | — | 18px | `--radius-lg` | 14px/400 | `--surface`, 1px `--line`, `--shadow` | sağda denetçi olarak açılır |
| Toast | 32px | 6px 10px | `--radius` | 11px mono | `--surface-2`, 1px `--line` | 3000ms, sol alt (konsol satırı) |
| Grafik paleti | — | — | — | — | `--accent` · `--ink-soft` · `--ink-faint` (3 seri) | performans grafiği basamaklı çizgi |

- Odak halkası: `outline: 2px solid var(--accent); outline-offset: 1px`.
- Dokunma hedefi: en az 44×44px; 34px buton ve 22px chip `::before` ile 44px alan taşır.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1.5px çizgi, 16px ızgara; sahne, ışık, kamera, katman |
| Fotoğraf | Yok — viewport içeriği şema (tel kafes/ızgara) |
| İllüstrasyon | Yalnız tel kafes ızgara + eksen okları |
| Doku | `--grain .02` + 32px dünya ızgarası; CRT taraması yok |
| Logo alanı | VT323 kelime logosu, 0.08em; 14px küp çizimi |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | Viewport 8/4, sağda denetçi önizleme, altta konsol | `shots/01-landing.png` |
| Dashboard | yüksek | Hiyerarşi + viewport + denetçi üçlüsü | `shots/02-dashboard.png` |
| Form | düşük | Varlık özellik formu: ad, tür, konum | — |
| Liste / tablo | yüksek | 30px satır, tür/kimlik/görünürlük, zebra | — |
| Boş durum | orta | Boş sahne ızgarası + "varlık ekle" | — |
| Onboarding | yüksek | 3 adım: sahne → varlık → ışık | — |
| Pricing | orta | Lisans kademeleri; özellik satırları denetçi gibi | — |
| Giriş / ödeme | çok düşük | Tek panel, viewport yok | — |
| Modal | orta | Varlık denetçisi yan panel olarak | — |
| Bildirim / toast | orta | Konsol satırı: zaman + mesaj mono | — |
| Hata | düşük | `--danger` çerçeve + "sahne yüklenemedi" | — |
| Profil / ayar | orta | Izgara aralığı, eksen, konsol yoğunluğu | — |

> `Görsel` kolonu `node kit/sync-shot-tables.mjs --write` ile manifest'ten yenilenir; elle düzenlemeyin.

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Giriş (enter) | **0.21s**, y **32px**, stagger **0.02** | `steps(6, end)` | `opacity` + `transform` |
| Scroll reveal | **0.24s**, trigger **top 95%**, y **40px**, `once: true` | `steps(6, end)` | `opacity` + `transform` |
| Pin / scrub | **kapalı** (viewport sabitlenmez; düzen kaymamalı) | — | — |
| Hover | **70ms**, görsel scale **1.050** | `steps(2, end)` | `transform` |
| Basma | 70ms | `steps(2, end)` | `transform` (1px) |
| Seçim çerçevesi | 130ms | `steps(3, end)` | `opacity` |

- Bu stilin ölçülebilir imzası: `enter 0.21s / steps(6, end) / 32px / 0.02` + `scroll top 95% / 0.24s / 40px` + `pin kapalı` + `hover 70ms / 1.050`. `top 95%` tetikleyicisi ve `hover 1.050` ölçeği katalogda yalnız burada.
- `prefers-reduced-motion`: tüm süreler 0.01ms; kare geçişleri ve ızgara animasyonu durur, seçim anında gelir.
- Bu stile yasak hareket: sürekli dönen kamera, renkli glow nabzı, parallax, saniyede 1+ flaş.

## Koyu mod

| Token | Açık (editör) | Koyu (gece editörü) |
|---|---|---|
| `--bg` | `#120c1c` | `#030206` |
| `--bg-2` | `#181024` | `#0c0814` |
| `--surface` | `#1d142b` | `#140c22` |
| `--surface-2` | `#251a36` | `#170f23` |
| `--ink` | `#eee8fa` | `#faf6ff` |
| `--ink-soft` | `#b3a7c9` | `#cfc2e2` |
| `--ink-faint` | `#7f7395` | `#8b7fa0` |
| `--accent` | `#c7307f` | `#ff9fcb` |
| `--accent-ink` | `#ffffff` | `#1a0512` |
| `--line` | `rgba(238,232,250,.15)` | `rgba(250,246,255,.22)` |

- Ölçülen koyu kontrastlar: `ink/bg` = **18.32:1** · `ink-soft/bg` = **10.40:1** · `accent-ink/accent` = **6.88:1** · `ink-faint/bg` = **5.43:1**.
- Koyu modda değişen başka ne var: accent parlar (magenta → pembe), ızgara opaklığı %100 → %80, seçim çerçevesi dış halkası %40 → %30.
- Koyu mod ayrışması: zemin `#030206` (%16 parlaklık), panel bandı **6.9×** açık, accent `#c7307f` → `#ff9fcb` (2.66×).
- `filter: invert()` yasak; palet elle yazılır. Koyu blok `token-block.css` içinde `[data-theme="dark"][data-style="virtual-engine"]`.

## Zorunlu kurallar
- Viewport ekranın en az %55'i; içeriği şema olur, fotoğraf olmaz.
- Izgara 32px ve ortografik; perspektif/kaçış noktası yok.
- Seçim üçlü kodlanır: sol 3px accent + çerçeve + listede vurgu.
- Her varlık satırı tür + kimlik + görünürlük; kimlik mono.
- Konsol satırı ekranın altında, tek satır ve mono.
- VT323 yalnız başlık/sayaç; gövde Inter.

## Yasaklar
- CRT tarama çizgisi, flicker, renkli glow.
- 14px üzeri radius, hap buton.
- Gerçek fotoğrafı viewport içeriği yapmak.
- VT323 ile uzun paragraf.
- Sürekli dönen kamera veya otomatik sahne turu.
- Saniyede 1+ flaş.

## Erişilebilirlik
- Ölçülen en düşük etkileşimli çift: `accent-ink/accent` = 5.05:1; gövde 16.03:1; `ink-faint/bg` = 4.37:1.
- `--ink-faint` yalnız ızgara/eksen; etkileşimli metin değil.
- Seçim yalnız renkle bildirilmez: çerçeve + sol çizgi + liste vurgusu birlikte.
- Klavye: `Tab` hiyerarşide gezer, `F` çerçeveye odaklanır, `Del` siler; kısayollar konsolda yazılı.
- Odak halkası 2px accent + 1px offset; koyu zeminde net.
- 390px'te denetçi alta iner, konsol 18px; taşma yok.
- `prefers-reduced-motion` açıkken kare geçişleri ve ızgara animasyonu durur.

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
| "Oyun vitrini" olmuş | viewport küçük, pazarlama metni baskın | viewport ≥ %55, metin panele taşınır |
| Seçim belirsiz | yalnız renkli kenar | sol 3px + çerçeve + liste vurgusu |
| Göz yoruyor | glow + tarama çizgisi | ikisini de kaldır |
| Düzen kayıyor | pin/scroll viewport'u kaydırıyor | pin kapalı |
| Mobilde kullanılamaz | 8/4 korunmuş | 768 altında denetçi alta |
| Font okunmuyor | VT323 gövdede | VT323 yalnız başlık/sayaç |

## Komşu stiller

- **Uyumlu:** `pixel-art` — oyun kültürü; editör estetiği ile yan yana sergilenebilir.
- **Uyumlu:** `cybercore` — teknik koyu dil; glow kaldırılırsa uyumlu.
- **Uyumlu:** `ai-native-mesh` — soyut 3B ürün dili; viewport paneli ortak.
- **Yasak:** `japandi` — sakin kağıt estetiği editör yoğunluğuyla çelişir.
- **Yasak:** `minimalism` — panel hiyerarşisini fazla sadeleştirir.
- **Yasak:** `skeuomorphism` — malzeme taklidi viewport ızgarasını bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://docs.godotengine.org/en/stable/tutorials/editor/index.html | viewport + denetçi paneli düzeni |
| https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html | sahne/hiyerarşi/denetçi üçlüsü |
| https://docs.blender.org/manual/en/latest/editors/3dview/navigate/index.html | ortografik ızgara ve eksen |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | koyu zeminde odak halkası |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Virtual Engine (styles/144-virtual-engine/style.md, tokens.json)
Token: sadece [data-style="virtual-engine"] değişkenleri; hard-coded renk/gölge/radius yasak.
Tipografi: display VT323 400 (yalnız başlık/sayaç), gövde Inter 400/600, kimlik/sayaç JetBrains Mono.
  Ölçek 11/12/13/14/20/28/46; gövde ölçü 72ch.
Yüzey: koyu mor editör (#120c1c); radius 8/14px; panel 1px var(--line); glow/tarama yok.
Imza: viewport >= %55 (32px ortografik ızgara) + varlık hiyerarşisi (30px satır) + denetçi paneli
  + alt konsol satırı; seçim üçlü kodlanır (sol 3px accent + çerçeve + liste vurgusu).
Renk: tek accent #c7307f (seçim/eylem); alarm --danger, uyarı --warn, çalışır --ok.
Hareket: enter .21s steps(6, end) y32 stagger .02; scroll top 95% .24s y40 once;
  pin yok; hover 70ms scale 1.050; reduced-motion'da kare geçişleri durur.
Yasak: CRT taraması/flicker, glow, 14px üstü radius, fotoğraf viewport, VT323 paragraf, dönen kamera.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Viewport ≥ %55 ve içeriği şema.
- [ ] Izgara 32px, ortografik; eksen işareti var.
- [ ] Seçim üçlü kodlanmış.
- [ ] Kontrast: gövde 16.03:1, accent üstü 5.05:1.
- [ ] Konsol satırı tek satır ve mono.
- [ ] 390px'te taşma yok.
- [ ] `prefers-reduced-motion` açıkken kare geçişi yok.

## Token

```css
[data-style="virtual-engine"] {
  --bg: #120c1c; --bg-2: #181024;
  --surface: #1d142b; --surface-2: #251a36;
  --ink: #eee8fa; --ink-soft: #b3a7c9; --ink-faint: #7f7395;
  --accent: #c7307f; --accent-ink: #ffffff;
  --line: rgba(238,232,250,.15);
  --radius: 8px; --radius-lg: 14px;
  --shadow: 0 14px 30px -26px rgba(4,1,10,.95); --shadow-hard: 0 0 0 1px var(--line);
  --font-display: "VT323", ui-monospace, monospace;
  --font-body: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --tracking: 0.02em; --blur: 0px; --grain: .02;
  --danger: #ff7a72; --danger-ink: #1c0606;
  --ok: #6fe0a8; --warn: #e8c56a;
}
```

Koyu mod bloğu `styles/144-virtual-engine/token-block.css` içinde `[data-theme="dark"][data-style="virtual-engine"]` olarak durur (10 renk anahtarı `palette.dark` ile birebir); `## Koyu mod` tablosu tek kaynak özetidir.
