---
name: tasarim-kaynak-katalogu
description: >-
  Dondurulmus tasarim kaynak katalogunda (refs/design-resources, 1249 kayit, 33 bolum) arama yapar:
  ucretsiz illustrasyon, mockup, stock fotograf, ikon seti, font, renk/erisilebilirlik araci, gorsel
  sikistirma servisi bulur; link sagligini (olu link) filtreler ve katalogu yeniler. Tetikleyiciler:
  "mockup bul", "ucretsiz illustrasyon", "nereden ikon", "stock fotograf lazim", "renk araci",
  "kontrast kontrolu araci", "font nereden", "gorsel sikistirma", "kaynak katalogu", "olu link",
  "link sagligi", "design resources", "katalogda ara", "asset nerede bulurum".
---

# Tasarım Kaynak Kataloğu

`refs/design-resources/` altında **dondurulmuş** bir link dizini durur: 1249 kayıt · 33 bölüm ·
1063 benzersiz domain (bradtraversy/design-resources-for-developers, 2026-10-18 snapshot).

Bu skill **varlık ve araç bulur**. Stil seçmez, token üretmez, kod yazmaz — o iş `style-lab-catalog`'un.
Görsel dil kararı ile varlık tedariki ayrı sorulardır; ikisini karıştırma.

## When to Use

- Bir yüzeye **varlık** lazımsa: illüstrasyon, mockup, stock fotoğraf, desen/doku, ikon, font.
- **Renk/erişilebilirlik aracı** aranıyorsa (kontrast ölçer, palet üretici, ton skalası).
- **Görsel sıkıştırma** veya dönüştürme servisi gerekiyorsa (poster/deck çıktısı şiştiğinde).
- "Bu link ölü mü?" / "katalogdaki kayıtlar sağlam mı?" sorusunda (`--alive`, `linkcheck.mjs`).
- Kullanıcı belirli bir kaynağı adıyla anıp yerini sorduğunda.

**Kullanma:** stil/tema seçimi · tasarım sistemi kurma · token üretimi · kaynak *kodu* okuma
(bu katalogda kod yok) · lisans hukuku danışmanlığı (lisansı kullanıcı doğrular).

## 30 saniyede karar

| İhtiyaç | Bölüm |
|---|---|
| Ücretsiz illüstrasyon, desen, avatar | `UI Graphics` (47) |
| Cihaz/ürün mockup'ı, ekran görüntüsü sunumu | `Product & Image Mockups` (24) + `UI Graphics` |
| Stock fotoğraf / video / müzik | `Stock Photos` (40) · `Stock Videos` (10) |
| İkon seti, ikon fontu, logo, favicon | `Icons` (69) · `Icon Fonts` (22) · `Logos` (13) · `Favicons` (11) |
| Font çifti, tipografi ölçeği | `Fonts` (47) |
| Kontrast/palet aracı | `Colors` (88) |
| Animasyon kütüphanesi (CSS/JS) | `CSS Animations` (28) · `Javascript Animation Libraries` (36) |
| Görsel sıkıştırma | `Image Compression` (51) |
| Şablon, hazır sayfa iskeleti | `HTML & CSS Templates` (31) |
| Galeri/ilham | `Design Inspiration` (48) |

Bölüm adları **İngilizce** ve **framework eksenli** (React/Vue/Angular/Svelte ayrı). Türkçe anahtar
kelimeyle arama çoğu kaydı kaçırır: "renk" değil `color`, "yazı tipi" değil `font`, "simge" değil `icon`.

## Procedure

### 1 · Ara (en sık yol)

```bash
# Depo kökünde çalıştırın.
node refs/design-resources/query.mjs --q mockup --alive                 # ölü linkler elenmiş
node refs/design-resources/query.mjs --section "Stock Photos" --alive --limit 10
node refs/design-resources/query.mjs --q "gradient" --json              # makine-okur
node refs/design-resources/query.mjs --sections                         # bölüm + kayıt sayısı
```

Çıktıdaki durum kolonu: `ok` erişilebilir · `bot` 403/429 (bot koruması, **çoğu sağ**) ·
`OLU` kesin ölü · `hata` 5xx/timeout · `?` hiç denenmemiş.

### 2 · Sonucu kullanıcıya taşı

- Kaynağın **ne olduğunu** bir satırda söyle (katalogdaki açıklama), URL'yi ver.
- `bot` işaretliyse "link tarayıcıda açılır, otomatik kontrolde 403 döndü" diye not düş.
- Seçimi kullanıcı yapsın: 3–5 aday yeter, 20 kayıt dökme.

### 3 · Katalog boşsa

Depo kapalı (yeni kayıt yok) ve AI çağı kayıtları zayıf (7 kayıt). Sonuç çıkmıyorsa internetten ara,
bulduğunu **kataloğa ekleme** — bu snapshot dondurulmuş; yeni kaynak gerekiyorsa `readme.snapshot.md`
güncellenir (aşağıdaki bakım adımı).

### 4 · Bakım (istenirse)

```bash
node refs/design-resources/analyze.mjs      # readme.snapshot.md → rows.json (1249 kayıt, ~0.2 s)
node refs/design-resources/linkcheck.mjs    # rows.json → link-health.json + ölü link raporları (~2 dk)
node refs/design-resources/linkcheck.mjs --limit 100   # hızlı deneme
```

## Pitfalls

- **403 ≠ ölü.** Unsplash, Pexels, Pixabay gibi büyük siteler otomatik isteğe 403 döner; `bot` etiketini
  ölü sayıp eleme. Gerçek ölü ölçütü 404/410/DNS yok → `olu-linkler-kesin.md`.
- **Snapshot CRLF'tir.** Kendi ayrıştırıcını yazarsan `\r` temizle; yoksa `^## (.+)$` hiçbir başlığı
  yakalamaz ve tüm kayıtlar tek bölüme düşer (yaşandı).
- **Bölüm adı eşleşmez.** `--section "Mockups"` değil `--section "Product & Image Mockups"`; emin değilsen
  `--sections` ile listeyi al.
- **`--alive` filtresi `link-health.json`'a bağlıdır.** Dosya eskiyse eski sonucu gösterir; şüphelenirsen
  `linkcheck.mjs --limit 200` ile tazele.
- **Bu bir stil kaynağı değil.** "Glassmorphism nasıl yapılır" sorusunun cevabı burada yok; `style-lab-catalog`
  ve `styles/<slug>/style.md`'ye git.
- **Lisans:** katalog "free" diyor ama lisans türü (CC0/MIT/ticari kullanım) kayıtta yazmıyor. Ticari işte
  kullanıcıya bunu söyle.
- Ölü link sayısı koşular arasında **±2 oynar**; tek koşuya bakıp "katalog çürük" deme.

## Verification

```bash
node refs/design-resources/query.mjs --q mockup --alive --limit 3   # 3 sonuç dönmeli, durum kolonu dolu
node refs/design-resources/analyze.mjs | head -2                    # "kayit: 1249 | bolum: 33 | domain: 1063"
```

- `analyze.mjs` 1249 dışında bir sayı veriyorsa `readme.snapshot.md` değişmiş ya da CRLF tuzağına düşülmüş.
- `query.mjs --sections` bölüm adlarını listeliyorsa `rows.json` sağlam.
- `linkcheck.mjs` "kesin olu" sayısı 40–70 bandında normaldir; 300+ ise ağ/proxy sorunu ara.
