# 45 · Terminal UI

> **Bir cümlede:** Her şeyin tek mono ızgarada hizalandığı, durumu rengin değil metnin söylediği klavye öncelikli arayüz.

| | |
|---|---|
| **Hissiyat** | teknik, kesin, hızlı, dürüst |
| **En iyi** | geliştirici aracı, CI/deploy paneli, log & gözlem, finans/veri terminali |
| **Kaçın** | tüketici e-ticareti, lüks marka, çocuk/wellness — burada "soğuk" değil "okunamaz" olur |
| **Zorluk** | orta · **Erişilebilirlik** | düşük risk (en düşük etkileşimli çift 8.62:1) |
| **Aile** | Teknik (45–46) · **Token** | `kit/tokens.css` → `[data-style="terminal-ui"]` |
| **Kompozisyon** | `product` · `utility` · `dense` (bkz. `kit/render/layouts.json`) |
| **Görseller** | `shots/01-landing.png` … `shots/17-dark-landing.png` |

## Öz

### Nedir
Terminal UI, bir arayüzü **karakter ızgarası** olarak ele alır: tek mono aile, sabit satır yüksekliği, hizalı sütunlar, 1px çerçeve ve hiç gölge. Süslemenin yerini **bilgi yoğunluğu** alır; kullanıcı fareyle dolaşmak yerine klavyeyle hedefe gider.

Üç kurucu karar: (1) **tek aile** — display, gövde ve mono aynı font, hiyerarşi punto ve ağırlıkla kurulur; (2) **düz yüzey** — katman ayrımı yalnızca 1px çerçeve ve ters video (accent zemin); (3) **metinle durum** — `[ok]`, `> `, `! `, `..` gibi işaretler rengi yedekler, renk körlüğünde de okunur.

Bedeli: görsel sıcaklık yoktur. Bu stilin "ucuz" görünmemesini sağlayan tek şey **hizalama disiplini** — bir sütunun 1 karakter kayması bütün etkiyi bozar.

### Ne değildir
- **Cybercore (23) değildir:** cybercore HUD/glitch/neon efektleriyle atmosfer kurar; Terminal UI efekt yasağı getirir, değerini yoğunluktan alır.
- **Cyberpunk (22) değildir:** cyberpunk çok renkli neon palet ve kirli doku kullanır; burada tek accent ve temiz 1px çizgi var.
- **Scandinavian Dark (40) değildir:** o stil oransal (proportional) tipografiyle sessiz lüks kurar; Terminal UI mono ızgaradadır.
- **Utility (44) değildir:** Utility beyaz zeminli ürün arayüzüdür; Terminal UI koyu zemin + karakter ızgarasıdır. Ortak nokta yalnız disiplin.

### Nereden gelir
VT100/80×24 metin terminalleri, `top`/`htop` panel dili ve 2020'lerin TUI rönesansı (lazygit, k9s, btop). Bugün yeniden kullanılmasının nedeni: ajan ve CLI araçları için **klavye öncelikli, düşük gecikmeli** arayüz ihtiyacı. Klişeye dönüşmemesi için korunacak detay: **karakter ızgarasının bozulmaması** (sütun hizası) ve efekt yasağı.

### 3 saniyede tanıma testi
1. Ekranda tek font ailesi var; harflerin genişliği her yerde aynı.
2. Hiçbir yüzeyde gölge veya gradient yok; ayrım 1px çerçeveyle.
3. Durumlar metinle işaretli: `> ` aktif, `[ok]` başarılı, `! ` hata.
4. Satır yüksekliği 32px; tablo sütunları dikey hizalı.
5. Klavye ipuçları görünür (`↑↓ gez`, `enter aç`, `esc kapat`).

## Görsel imza
- **Tek aile:** JetBrains Mono (`--font-display` = `--font-body` = `--font-mono`).
- **Karakter ızgarası:** gövde 14px/22, tablo 13px/20, satır yüksekliği 32px; `ch` birimiyle ölçü.
- **1px çerçeve:** panel, tablo, input aynı `--line` çizgisini kullanır; köşe 0–2px.
- **Ters video:** birincil buton ve seçili satır accent zemin + accent-ink metin.
- **İşaret dili:** `> ` aktif öğe, `[ok]` / `[..]` / `! ` durum, `┌─ ├─ └─` bölüm çerçevesi gerektiğinde ASCII.
- **Efekt yok:** gölge, blur, gradient, grain (`--grain: 0`), tarama çizgisi, flicker yasak.
- **İmleç:** tek yanıp sönen öğe; reduced-motion'da durur.

## Renk

| Token | Değer | Nerede kullanılır | Nerede kullanılmaz |
|---|---|---|---|
| `--bg` | `#0a0d0a` | terminal zemini | kart zemini |
| `--surface` | `#0f140f` | panel / tablo gövdesi | birincil buton |
| `--surface-2` | `#131a13` | başlık satırı, seçili olmayan chip | sayfa zemini |
| `--ink` | `#d7e6d2` | metin ve çerçeve metni | dekoratif dolgu |
| `--ink-soft` | `#9bb394` | ikincil metin, etiket | hata metni |
| `--ink-faint` | `#6d8268` | yalnız dekoratif ayırıcı/yorum | etkileşimli metin |
| `--accent` | `#58e08a` | birincil eylem, aktif satır, odak | dekorasyon |
| `--accent-ink` | `#04120a` | accent üstü metin | accent olmayan zemin |
| `--line` | `rgba(215,230,210,.16)` | tüm çerçeveler | metin |

- Ölçülen kontrast: `ink/bg` **15.01:1** · `ink-soft/bg` **8.62:1** · `accent-ink/accent` **11.35:1** · `ink-faint/bg` **4.69:1**.
- Tek accent kuralı: `--accent` yalnız birincil eylem, seçim ve odak için; ikinci vurgu gerekirse `--warn`/`--danger`.
- Yasak kombinasyon: accent zemin üstünde `--ink-soft`; iki accent tonu yan yana.

## Tipografi

| Rol | Aile | Boyut | Ağırlık | Satır aralığı | Tracking |
|---|---|---|---|---|---|
| Display / H1 | JetBrains Mono | 40px | 600 | 1.15 | 0 |
| H2 | JetBrains Mono | 24px | 600 | 1.3 | 0 |
| H3 | JetBrains Mono | 18px | 600 | 1.35 | 0 |
| Gövde | JetBrains Mono | 14px | 400 | 1.55 | 0 |
| Etiket / kısayol | JetBrains Mono | 11–12px | 500 | 1.3 | 0.08em, büyük harf |
| Kod / log | JetBrains Mono | 12–13px | 400 | 1.5 | 0 |

- Ölçek: 11 · 12 · 13 · 14 · 18 · 24 · 40 · (mobil 26). Oran keyfi değil, üç basamaklı sıçrama.
- Gövde satır uzunluğu en fazla 72ch; log satırları sarmaz, yatay kaydırır.
- Tüm sayısal sütunlar `font-variant-numeric: tabular-nums`.
- İtalik yok; 700 üstü ağırlık yok (vurgu accent veya ters video ile).

## Izgara ve boşluk

| Öğe | Değer |
|---|---|
| Kolon | 12 (içerik) · paneller 1–3 sütun |
| Gutter | 16px (`--space-4`) |
| Container genişliği | 1180px |
| Boşluk ölçeği | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 (`--space-1…8`) |
| Breakpoint davranışı | 768 altında tablo → yatay kaydırma; panel yığını |

- Bölüm dikey ritmi 64px masaüstü / 40px mobil; panel içi 16px.
- Hizalama: tüm hücreler `ch` birimine göre; sütun başlığı ile değer aynı sağ kenarda biter.
- Art arda en fazla 2 farklı hizalama; üçüncüsünde ızgara değişir.

## Yüzey ve derinlik

| Seviye | Token | Gölge | Kullanım |
|---|---|---|---|
| Zemin | `--bg` | — | terminal |
| Panel | `--surface` + 1px `--line` | yok | tablo, form, kart |
| Odak katmanı | `--surface` + 1px `--accent` | yok | modal, komut paleti |

- Derinlik yoktur: katman ayrımı çerçeve rengi ve ters video ile kurulur.
- Radius: `--radius` 0px (tablo, satır), `--radius-lg` 2px (panel, modal). 2px üstü yasak.
- Modal arka planı `rgba(5,7,5,.72)`; blur yok (tarama efekti sayılır).

## Bileşen reçeteleri

| Bileşen | Yükseklik | Padding | Radius | Tipografi | Renk / gölge | Durumlar |
|---|---|---|---|---|---|---|
| Buton (birincil) | 36px | 6px 12px | `--radius` | 13px/600 | `--accent` / `--accent-ink` | hover %88 karışım · active `translateY(1px)` · focus 1px outline + 2px offset · disabled %45 + kesikli çerçeve · loading `[....]` |
| Buton (ikincil) | 36px | 6px 12px | `--radius` | 13px/600 | şeffaf + 1px `--line` | hover `--surface-2` · focus aynı |
| Input | 36px | 0 10px | `--radius` | 13px/400 | `--surface` + 1px `--line` | focus accent çerçeve + imleç · filled aynı · error `! ` + `--danger` · disabled %45 |
| Panel / kart | — | 16px | `--radius-lg` | 14px gövde | `--surface` + 1px `--line` | seçili panel accent çerçeve |
| Chip / badge | 20px | 0 6px | `--radius` | 11px/500 | `--surface-2` + 1px `--line` | aktif ters video |
| Nav (üst bar) | 40px | 0 16px | 0 | 13px/500 | `--bg` + alt 1px `--line` | aktif `> ` + accent metin |
| Tablo satırı | 32px | 4px 8px | 0 | 13px/400, tabular | çizgisiz; seçili ters video | hover `--surface-2` · seçili accent |
| Modal / komut paleti | — | 16px | `--radius-lg` | 14px | accent çerçeve, gölge yok | `esc` kapatır, odak tuzağı |
| Durum satırı / toast | 28px | 4px 10px | `--radius` | 12px/500 | `--surface-2` | 3sn sonra döner, hover'da durur |
| Grafik | — | — | 0 | 11px eksen | blok karakter sparkline veya tablo | en fazla 4 seri |

- Odak halkası: `outline: 1px solid var(--accent); outline-offset: 2px` — tüm etkileşimli öğelerde.
- Dokunma hedefi: mobilde 44×44px (görsel yükseklik 36px, padding ile büyütülür).
- Kısayol ipucu her ekranın alt durum satırında: `↑↓ gez · enter aç · esc kapat`.

## Görsel dil

| Öğe | Kural |
|---|---|
| İkon | 1px çizgi; ASCII/mono karakter tercih edilir (`>`, `#`, `?`), dolu ikon yok |
| Fotoğraf | yok; zorunluysa 1px çerçevede, düşük doygunluk, max %30 alan |
| İllüstrasyon | ASCII diyagram (kutu çizimi, ok, ağaç yapısı) |
| Doku | yok (`--grain: 0`); CRT tarama çizgisi/gürültü yasak |
| Logo alanı | metin logo, küçük harf veya büyük harf (tek biçim), sol üstte `> marka` |

## Ekran reçeteleri

| Ekran | Yoğunluk | Uygulama | Görsel |
|---|---|---|---|
| Landing / hero | yüksek | tek ekran: başlık + 3 özellik satırı + kısayol ipucu | `shots/01-landing.png` |
| Dashboard | çok yüksek | panel ızgarası, KPI tek satır, sparkline | `shots/02-dashboard.png` |
| Form | orta | alanlar tek sütun, `! ` ile hata | — |
| Liste / tablo | çok yüksek | 32px satır, tabular sayı, yatay kaydırma | — |
| Boş durum | düşük | `! ` veya `·` ile tek cümle + komut önerisi | — |
| Onboarding | orta | 3 adım, komut satırı hissi, `enter` ile ilerleme | — |
| Pricing | orta | karşılaştırma tablosu; öne çıkan sütun accent çerçeve | — |
| Giriş / ödeme | düşük | tek panel, tek eylem, `[ok]` doğrulama | — |
| Modal | orta | komut paleti dili, accent çerçeve, `esc` | — |
| Bildirim | düşük | durum satırı (toast değil), 3sn | — |
| Hata | düşük | `! ` + neden + sonraki komut | — |
| Ayar | yüksek | anahtar/değer listesi, 32px satır | — |

## Hareket

| Durum | Süre | Easing | Özellik |
|---|---|---|---|
| Basma | 90ms | linear | `transform` |
| Geçiş | 180ms | `steps(3, end)` | `opacity` |
| Giriş (satır satır) | **180ms**, **30ms arayla** | `steps(3, end)` | `opacity` + `translateY(0px)` (konum kaymaz) |
| Kaydırma (scroll) | **200ms** | `steps(3, end)` | trigger **`top 90%`**, offsetY **8px**, `once: true` |
| Hover | **90ms** | linear | görsel ölçek **1.000** |
| Pin | kapalı | — | `scrub: null`, `distance: null` |
| İmleç | 1s | `steps(2, end)` | `opacity` (tek döngü hakkı) |

- İmza ölçüsü: enter **0.18s / 0px / stagger 0.03** · scroll **0.2s / `top 90%` / 8px** · hover **90ms / 1.000** · pin **kapalı**.
- Yumuşak yay/ease-out yok: terminal kesik hareket eder.
- Efekt yok: parallax, blur geçişi, gradient animasyonu, sürekli döngü (imleç hariç) yasak.
- `prefers-reduced-motion`: tüm süreler 0.01ms, imleç sabit, satır girişi anında.
## Koyu mod

| Token | Açık (terminal) | Koyu (gece terminali) |
|---|---|---|
| `--bg` | `#0a0d0a` | `#050705` |
| `--bg-2` | `#0d110d` | `#080b08` |
| `--surface` | `#0f140f` | `#0b0f0b` |
| `--surface-2` | `#131a13` | `#101510` |
| `--ink` | `#d7e6d2` | `#e6f1e2` |
| `--ink-soft` | `#9bb394` | `#a8bda2` |
| `--accent` | `#58e08a` | `#6ff09c` |
| `--accent-ink` | `#04120a` | `#03150a` |

- Ölçülen koyu kontrastlar: `ink/bg` **17.37:1** · `ink-soft/bg` **10.07:1** · `accent-ink/accent` **13.11:1**.
- Koyu modda değişen başka ne var: accent bir ton açılır, çizgi opaklığı %16 → %18.
- `filter: invert()` yasak; palet elle yazılır.

## Zorunlu kurallar
- Tek aile: JetBrains Mono; display = body = mono.
- Satır yüksekliği 32px, tablo hücresi 4/8px padding; sayılar tabular.
- Tüm katman ayrımı 1px çerçeve; radius 0–2px.
- Durum her zaman metinle de bildirilir (`> `, `[ok]`, `! `, `[..]`).
- Klavye ile tam gezinti + görünür odak halkası + kısayol ipucu satırı.
- Her ekranda en az bir "komut" yolu (kısayol veya komut paleti).

## Yasaklar
- Gölge, blur, gradient, grain, CRT tarama çizgisi, flicker.
- 2px üstü radius, yuvarlak kart, yumuşak gölge.
- İkinci font ailesi (serif/geometrik display).
- Süsleme amaçlı ikon/illüstrasyon, emoji ile durum bildirimi.
- Anlaşılmaz jargon: kısaltma ilk geçtiği yerde açıklanır.
- Sürekli animasyon (imleç dışında) ve parallax.

## Erişilebilirlik
- Gövde ≥ 4.5:1, büyük metin ≥ 3:1; ölçülen en düşük etkileşimli çift 8.62:1.
- `--ink-faint` (4.69:1) yalnız dekoratif yorum ve ayırıcı için; etkileşimli metin değil.
- Durum yalnız renkle anlatılmaz: metin işareti + renk birlikte.
- Odak halkası 1px accent + 2px offset; koyu zeminde ≤ 3:1 altına düşmez.
- 390px'te yatay sayfa kaydırması yok; tablo kendi içinde kaydırılır.
- `prefers-reduced-motion` açıkken imleç ve giriş animasyonu durur.

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
| "Dağınık terminal" hissi | karışık genişlik/punto | tek aile + 32px satır + tabular |
| Okunmuyor | koyu zeminde ince 300 ağırlık | 400 taban, vurgu accent/temyiz |
| Göz yoruyor | sürekli yanıp sönen öğeler | yalnız imleç yanıp söner |
| Sütunlar kayıyor | `ch` yerine px genişlik | `ch` birimi ve sağa hizalı sayı |
| "Oyun gibi" görünüyor | neon çok renk | tek accent + warn/danger sınırı |
| Mobilde kullanılamıyor | 32px satır + 36px buton | dikey padding ile 44px hedef |

## Komşu stiller

- **Uyumlu:** `cybercore` — aynı teknik kitle, daha atmosferik varyant.
- **Uyumlu:** `utility` — dokümantasyon bölümlerinde açık zemin alternatifi.
- **Yasak:** `claymorphism` — yumuşak gölge ve radius dili taban tabana zıt.
- **Yasak:** `maximalism` — renk ve katman bütçesi çelişir.
- **Yasak:** `memphis` — dekoratif geometri mono ızgarayı bozar.

## Referanslar

| Kaynak | Ne için bakılır |
|---|---|
| https://github.com/charmbracelet/bubbletea | TUI bileşen modeli ve durum mantığı |
| https://github.com/jesseduffield/lazygit | panel/odak dili, tuş ipuçları |
| https://www.bloomberg.com/professional/products/bloomberg-terminal/ | yoğun veri düzeni, klavye önceliği |
| https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html | odak görünürlüğü ölçütü |

## AI brief

Kopyala-yapıştır; uygulayan ajan bu bloğu tek başına kullanabilir:

```
Stil: Terminal UI (styles/45-terminal-ui/style.md, tokens.json)
Token: sadece kit/tokens.css [data-style="terminal-ui"] değişkenleri; hard-coded renk/radius/gölge yasak.
Tipografi: tek aile JetBrains Mono (display = body = mono); hiyerarşi punto + ağırlık (400/600).
  Gövde 14px/22, tablo 13px/20, satır yüksekliği 32px, sayılar tabular-nums.
Yüzey: gölge/blur/gradient yok; katman ayrımı 1px var(--line). Radius 0–2px.
Renk: tek accent (#58e08a); durum metinle: "> " aktif, "[ok]" başarılı, "[..]" yükleniyor, "! " hata.
Etkileşim: klavye öncelikli; Tab sırası görünür, odak halkası 1px accent + 2px offset,
  alt durum satırında kısayol ipucu. Dokunma hedefi mobilde >= 44px.
Hareket: steps(3,end) 180ms; yalnız bekleyen imleç yanıp söner; prefers-reduced-motion'da durur.
Yasak: gölge, blur, gradient, CRT tarama, emoji durum, ikinci font, 2px üstü radius.
Çıktı: bileşen kodu + tek paragraf not (hangi imza öğeyi nerede kullandın).
```

**Teslim öncesi öz-denetim**
- [ ] Tek mono aile; sütunlar `ch` ile hizalı, sayılar tabular.
- [ ] Gölge/blur/gradient yok; radius ≤ 2px.
- [ ] Durumlar metin işaretiyle de bildiriliyor.
- [ ] Klavye gezintisi tam; odak halkası görünür; kısayol ipucu var.
- [ ] Kontrast: gövde ≥ 4.5:1, accent üstü ≥ 4.5:1.
- [ ] 390px'te sayfa taşmıyor, tablo kendi içinde kaydırılıyor.
- [ ] `prefers-reduced-motion` açıkken imleç/animation duruyor.

## Token

```css
[data-style="terminal-ui"] {
  --bg: #0a0d0a; --bg-2: #0d110d;
  --surface: #0f140f; --surface-2: #131a13;
  --ink: #d7e6d2; --ink-soft: #9bb394; --ink-faint: #6d8268;
  --accent: #58e08a; --accent-ink: #04120a;
  --line: rgba(215,230,210,.16);
  --radius: 0px; --radius-lg: 2px;
  --shadow: none; --shadow-hard: none;
  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body: "JetBrains Mono", ui-monospace, monospace;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking: 0em; --blur: 0px; --grain: 0;
  --danger: #ff6b6b; --danger-ink: #0a0d0a;
  --ok: #58e08a; --warn: #e0c058;
}
```

Koyu mod bloğu `kit/tokens.css` içinde `[data-theme="dark"][data-style="terminal-ui"]` olarak durur; `## Koyu mod` tablosu tek kaynak özetidir.
