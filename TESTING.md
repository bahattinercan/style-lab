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
| Katalog | `kit/gallery.html` | 151 stil kartı · arama · filtre · çekmece · kısa liste · karşılaştırma |
| Canlı demo | `kit/live.html?style=bento-grid` | seçili stilin gerçek sayfası + hareket |
| Hareket lab | `kit/motion-lab.html` | 20 desen · 151 animasyon imzası |
| Bölümler | `kit/sections.html` | 12 bölüm kütüphanesi (lightbox'lı) |
| Akışlar | `kit/flows.html` | 3 akış × 3 adım |
| Teşhis | `kit/contact.html` | düz HTML (JS'siz kontrol) |

`style=` değeri klasör adının numarasız hali: `01-minimalism` → `minimalism`,
`04-luxury-typography` → `luxury-typography`.

## 4 · Galeri kısayolları

| Tuş | İş |
|---|---|
| `/` | aramaya odaklan |
| `f` | filtre paneli |
| `j` `k` | kartlar arasında gez |
| `Enter` | detay çekmecesi |
| `c` | `data-style`'ı panoya kopyala |
| `s` | kısa listeye ekle/çıkar |
| `Esc` | kapat |

Kart düğmeleri: **⊕** token/brief/kareler · **⧉** kopyala · **★** kısa liste · **⇄** karşılaştır (2–4 stil).
Filtre + arama + sahne seçimi URL'e yazılır → bağlantı paylaşılabilir. (`file://`'de bazı tarayıcılar
`replaceState`'i engeller; URL durumu testi için §2'deki sunucuyu kullan.)

## 5 · Otomatik kapılar

Tam set (38 adım, birkaç dakika — görsel imza + headless ölçüm dahil):

```bash
bash kit/gates.sh
```

Sadece siteyi ilgilendirenler:

```bash
node kit/check-gallery-ui.mjs      # galeri: kart, filtre, çekmece, mobil, URL durumu (25 ölçüm, ~15 s)
node kit/check-viewers.mjs         # sections/flows görselleri yükleniyor mu + lightbox sözleşmesi
node kit/build-gallery.mjs --check # gallery.html galeri verisiyle senkron mu
node kit/check-composition.mjs --browser  # DOM kompozisyonu (gerçek tarayıcı)
node kit/render/render-shots.mjs --styles minimalism --measure  # tek stil: 37 sahne + taşma ölçümü
node kit/render/phash.mjs --check  # görsel regresyon (604 çekirdek sahne)
```

Web arayüzü değiştirdiysen **en az** `check-gallery-ui` + `build-gallery --check` koş.
Görsel/şablon değiştiyse `render-shots --styles <slug>` sonra `phash --check`.

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
| Kart görselleri boş | `styles/<slug>/shots/` repoda yoksa o sahne üretilmemiştir: `node kit/render/render-shots.mjs --styles <slug>` |
| `sections.html` "henüz üretilmemiş" | Bölüm görselleri `kit/.shots-cache/` altında; gitignore'lu, `--sample` ile üretilir |
| `node: command not found` | Node 22 gerekli. `bash kit/gates.sh` node yoksa kapıları atlar ve uyarır. |
| `görsel regresyon atlandı` | `kit/render/.baseline/` yok → `node kit/render/baseline.mjs --write` ile oluştur |
| Port 8000 meşgul | `--port 8080` veya `python -m http.server 8080` |

## 8 · Bilinçli sınırlar

- `kit/.shots-cache/` (~1.2 GB) ve `kit/render/.baseline/` gitignore'da; temiz klonda üretilir, hata değil.
- Görsel regresyon baseline'ı yoksa kapı **atlanır**, sessizce geçmiş sayılmaz (çıktıda `↷` yazar).
- Kapılar headless Chromium'da koşar; WebGL yazılım (SwiftShader) ile — GPU FPS'i ölçmez.

---

_Doğrulanan (bu dosya yazılırken): `node kit/check-gallery-ui.mjs` → 25 ölçüm geçti (1440px · 375px · URL durumu)._
