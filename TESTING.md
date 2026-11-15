# style-lab · siteyi açma ve test etme

Bu dosya "siteyi nasıl açarım, neyi nasıl sınarım" sorusunun tek cevabı.
Bağımlılık yok: `node` (22) + kurulu bir Chrome/Edge yeter. `npm install` gerekmez.

## 1 · En hızlı yol (30 saniye)

Dosyayı çift tıkla:

```
kit/gallery.html
```

`file://` ile çalışır — veri HTML'e gömülü, görseller göreli yol (`../styles/...`).
**Dosyaları `kit/` dışına taşıma**: `gallery.css`, `tokens.css`, `gallery.js` yanında durmak zorunda.
Kartlar bu modda orijinal PNG'yi yükler; WebP türevleri yalnız yayın sitesinde devreye girer
(`kit/site-config.js`).

## 2 · Yerel sunucu (önerilen, arama/filtre testi için)

```bash
# Depo kökünde çalıştırın.
python -m http.server 8000 --bind 127.0.0.1
# → http://localhost:8000/kit/gallery.html
```

Windows'ta `python3` alias'ı bozuk olabilir; `python` kullan.
Port doluysa `8000` yerine `8080` yaz. Bitirmek için terminalde `Ctrl+C`.

## 3 · Sayfalar

| Ne | Adres | İçerik |
|---|---|---|
| Katalog | `kit/gallery.html` | 251 stil kartı · arama · filtre · çekmece · kısa liste · karşılaştırma |
| Stil önizlemesi | `kit/live.html?style=bento-grid` | seçili stilin token'larıyla statik bileşen sayfası |
| Katalog indeksi | `docs/katalog.md` | 251 stilin tek satırlık kimliği (üretilir) |

`style=` değeri klasör adının numarasız hali: `01-minimalism` → `minimalism`,
`04-luxury-typography` → `luxury-typography`.

## 3.5 · Yayınlanan site

<https://bahattinercan.github.io/style-lab/> — GitHub Pages. Kaynağı git'e girmeyen `_site/`
klasörüdür; onu `kit/build-site.mjs` derler, `main`'e push `.github/workflows/pages.yml`'i tetikler.

```bash
node kit/build-thumbs.mjs   # PNG → WebP türevleri (kit/site/thumbs, repoda tutulur)
node kit/build-site.mjs     # _site/ derle (landing + katalog.html + galeri kopyası + görseller)
node kit/check-site.mjs     # duman testi: HTTP üzerinden landing/galeri/katalog/live

python -m http.server 8000 --directory _site --bind 127.0.0.1
# → http://localhost:8000/            landing
# → http://localhost:8000/kit/gallery.html
# → http://localhost:8000/katalog.html
```

Derlenen sitede kart görselleri `thumbs/<dir>-01-page@640.webp`, lightbox `@1280.webp`,
indirme bağlantısı orijinal `styles/<dir>/shots/01-page.png`. `site-config.js` bu eşlemeyi
`gallery.js`'e bildirir.

## 4 · Galeri kısayolları

| Tuş | İş |
|---|---|
| `/` | aramaya odaklan (isim, etiket, `152`, `#152`, `152-171`) |
| `f` | filtre paneli |
| `j` `k` | kartlar arasında gez |
| `Enter` | detay çekmecesi |
| `c` | `data-style`'ı panoya kopyala |
| `s` | kısa listeye ekle/çıkar |
| `[` `]` · ← → | önceki / sonraki sayfa |
| `Esc` | kapat |

Kart düğmeleri: **⊕** token/brief/kareler · **⧉** kopyala · **★** kısa liste · **⇄** karşılaştır (2–4 stil).
Katalog **sayfalanır**: sayfa başına 60 kart, altta `← 1 2 … 5 →` ve `1–60 / 251` bilgisi.
Sayfa URL'e yazılır (`?page=2`); filtre/arama değişince 1. sayfaya döner.
Arama kutusuna numara yazınca numaraya göre filtreler: `152` (tek stil), `#9`, `152-171` / `171..152`
(aralık, ters de olur). Numara + aile/sektör/ton çipleri birlikte çalışır.
Filtre + arama + sahne seçimi URL'e yazılır → bağlantı paylaşılabilir (`?q=152-171`). (`file://`'de bazı tarayıcılar
`replaceState`'i engeller; URL durumu testi için §2'deki sunucuyu kullan.)

## 5 · Otomatik kapılar

Tam set (31 adım, birkaç dakika — görsel imza + headless ölçüm dahil):

```bash
bash kit/gates.sh
```

Sadece siteyi ilgilendirenler:

```bash
node kit/check-gallery-ui.mjs      # galeri: kart, filtre, çekmece, mobil, URL durumu
node kit/build-gallery.mjs --check # gallery.html galeri verisiyle senkron mu
node kit/build-thumbs.mjs --check  # WebP türevleri kaynak PNG ile aynı mı
node kit/build-site.mjs --check    # site varlıkları: her stil için 2 WebP + PNG, linkler çözülüyor mu
node kit/check-site.mjs            # derler + HTTP üzerinden tarayıcıda ölçer (landing/galeri/katalog/live)
node kit/check-composition.mjs --browser  # DOM kompozisyonu (gerçek tarayıcı)
node kit/render/render-shots.mjs --styles minimalism --measure  # tek stil: taşma ölçümü
node kit/render/phash.mjs --check  # görsel imza (251 PNG)
```

Web arayüzü değiştirdiysen **en az** `check-gallery-ui` + `build-gallery --check` koş.
Site/galeri görseli değiştiyse `build-thumbs` → `build-site --check` → `check-site`.
Şablon değiştiyse `render-shots --styles <slug>` sonra `phash --check`.

## 6 · Tarayıcıyı elle seçmek

Headless kapılar sırayla Edge → Chrome arar. Farklı tarayıcı için:

```bash
BROWSER="./browser/chrome" node kit/check-gallery-ui.mjs
```

`./browser/chrome` yerine kendi tarayıcı çalıştırılabilir dosyanızın yolunu yazın.

## 7 · Sorun giderme

| Belirti | Neden / çözüm |
|---|---|
| Sayfa stilsiz, düz siyah metin | `kit/` dışından açılmış → `tokens.css` bulunamıyor. `kit/gallery.html` yolunu kullan. |
| Kart görselleri boş | `styles/<slug>/shots/` repoda yoksa o sayfa üretilmemiştir: `node kit/render/render-shots.mjs --styles <slug>` |
| Yayında kart görseli 404 | WebP türevi eksik: `node kit/build-thumbs.mjs` → tekrar `node kit/build-site.mjs` |
| Yayında kart PNG yüklüyor | `_site/kit/site-config.js` yok (galeri kopyası dönüştürülmemiş) → `node kit/build-site.mjs --clean` |
| `build-thumbs --check` bayat diyor | `shots/01-page.png` yeniden üretilmiş → `node kit/build-thumbs.mjs` |
| `node: command not found` | Node 22 gerekli. `bash kit/gates.sh` node yoksa kapıları atlar ve uyarır. |
| `görsel regresyon atlandı` | `kit/render/.baseline/` yok → `node kit/render/baseline.mjs --write` ile oluştur |
| Port 8000 meşgul | `--port 8080` veya `python -m http.server 8080` |

## 8 · Bilinçli sınırlar

- `_site/` git'e girmez; yayın artifact'ı olarak Actions'ta üretilir (~249 MB: 208 MB PNG + 37 MB WebP).
- `kit/site/thumbs/` repoda tutulur → CI tarayıcı kurmadan siteyi derleyebilir.
- Görsel regresyon baseline'ı (`kit/render/.baseline/`) repoda yok; yoksa kapı `↷` ile atlanır,
  sessizce geçmiş sayılmaz (çıktıda `↷` yazar).
- Kapılar headless Chromium'da koşar; WebGL yazılım (SwiftShader) ile — GPU FPS'i ölçmez.
- GitHub Pages sınırları: 1 GB site, 100 GB/ay bant genişliği. Kartlar WebP olduğu için tam sayfa
  PNG yalnız lightbox/indirmede istenir.

---

_Doğrulandı: `node kit/check-site.mjs` → landing + galeri 251 kart (webp, lazy 245, priority 6) +
katalog 251 satır + live · konsol temiz._
