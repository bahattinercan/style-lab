# refs/design-resources — dondurulmuş tasarım kaynak kataloğu

Kaynak: [bradtraversy/design-resources-for-developers](https://github.com/bradtraversy/design-resources-for-developers)
Kaynak lisansı: [MIT — Copyright (c) 2020 Brad Traversy](LICENSE-upstream.txt).
Snapshot: **2026-10-18** (depo o tarihte yeni kayıt almaya kapatıldı — bu yüzden dondurulmuş kopya
güncelliğini kaybetmiyor, sadece linkler ölüyor).

**1249 kayıt · 33 bölüm · 1063 benzersiz domain.** Kod, token, stil dokümanı **yok** — bu bir link dizini.
Stil/token ihtiyacı için `styles/` ve `playbook.md`; buradaki değer **varlık (görsel/font/ikon) ve araç**
keşfi.

## Kullanım

```bash
node refs/design-resources/query.mjs --q mockup --alive          # arama + ölü link filtresi
node refs/design-resources/query.mjs --section "Stock Photos" --alive --limit 10
node refs/design-resources/query.mjs --sections                  # bölüm listesi + kayıt sayısı
node refs/design-resources/query.mjs --q illüstrasyon --json     # makine-okur
```

`--alive` link durumunu `link-health.json`'dan okur; `ok` / `bot` (403 — bot koruması, çoğu sağ) geçer,
`OLU` / `hata` elenir.

## Bakım

```bash
node refs/design-resources/analyze.mjs      # readme.snapshot.md → rows.json (1249 kayıt, ~0.2 s)
node refs/design-resources/linkcheck.mjs    # rows.json → link-health.json + iki ölü-link raporu (~2 dk, 25 eşzamanlı)
```

- Snapshot yenilenmek istenirse `readme.snapshot.md` üzerine yazılır, sonra `analyze.mjs` + `linkcheck.mjs`.
- Ölü sayısı koşular arasında **±2 oynar** (DNS/timeout gürültüsü); trend önemli, tek koşu değil.
- Snapshot **CRLF** gelir; `\r` temizlenmeden `^## (.+)$` regex'i hiçbir başlığı yakalamaz.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `readme.snapshot.md` | dondurulmuş kaynak tablo (183 KB) |
| `rows.json` | ayrıştırılmış 1249 kayıt: `section`, `name`, `url`, `desc` |
| `link-health.json` | her URL için `status` + `error` (son koşu) |
| `olu-linkler.md` | tüm sorunlular (ölü + bot koruması + timeout) |
| `olu-linkler-kesin.md` | yalnız 404/410/DNS yok |
| `analyze.mjs` · `linkcheck.mjs` · `query.mjs` | ayrıştır / dene / ara |
| `inceleme.md` | kataloğun değerlendirmesi (neye yarar, neye yaramaz) |

## Sınırlar

- Bölümler **framework eksenli** (React / Vue / Angular / Svelte ayrı) — stil eksenli okuma yok.
- AI çağı kayıtları zayıf (7 kayıt); depo kapalı olduğu için bu boşluk büyüyor.
- Chrome/Firefox eklentileri 62 kayıt (toplamın %5'i) — bu depoda ölü ağırlık.
- 8 URL birebir tekrar ediyor (`ant.design`, `heroicons.dev`, `splidejs.com`, `clarity.design`, …).
