# design-resources-for-developers — inceleme

> Ölü link sayısı koşular arasında **±2 oynar** (DNS/timeout gürültüsü): 54 ve 55 ölçüldü.
> Güncel sayı için `node refs/design-resources/linkcheck.mjs` çalıştır; bu doküman ilk incelemenin kaydı.

Snapshot: `readme.snapshot.md` (bradtraversy/design-resources-for-developers, commit 2026-10-18)
Komutlar: `node refs/design-resources/analyze.mjs` · `node refs/design-resources/linkcheck.mjs`

## Ne bu?

Kod yok. Tek bir `readme.md` (1671 satır, 183 KB) — 34 bölümde tablo halinde **link kataloğu**.
Depo **2026-10-18'de yeni kayıt almaya kapatılmış** ("New resource submissions are currently paused").

## Sayılar

| Ölçüt | Değer |
|---|---|
| Toplam kayıt | 1249 |
| Bölüm | 34 |
| Benzersiz domain | 1063 |
| Birebir tekrar eden URL | 8 (`ant.design`, `heroicons.dev`, `splidejs.com`, `clarity.design`, `arco.design`, `aos`, `lunacy`) |
| Link sağlığı | 1082 erişilebilir · 167 sorunlu |
| Gerçekten ölü (404/410/DNS yok) | **54 (%4,3)** |
| Bot koruması (403/429/402) | 67 — büyük kısmı sağ |
| Zaman aşımı / TLS hatası | 13 + 11 |

## En dolu bölümler

```
104 Online Design Tools      47 UI Graphics            24 Product & Image Mockups
 88 Colors                   47 Fonts                  22 Icon Fonts
 86 Others                   44 Design Systems          18 Angular UI Libraries
 79 React UI Libraries       43 Vue UI Libraries        14 Javascript Chart Libraries
 69 Icons / UI Components    40 Stock Photos            13 Logos / Stock Music
 64 CSS Frameworks           38 Chrome Extensions      11 Favicons · 10 Stock Videos
 51 Image Compression        48 Design Inspiration       7 AI Graphic Design Tools
```

## Dağılımın zayıf yerleri

- **AI çağı kayıtları çok az**: 7 AI graphic tool, AI/agent-friendly şablon yok. Depo 2026'da durduğu için bu boşluk büyüyor.
- **Chrome/Firefox eklentileri 62 kayıt** — toplamın %5'i; tasarım kataloğu için ölü ağırlık.
- **Bölümler teknolojiye göre bölünmüş** (React/Vue/Angular/Svelte UI Libraries) — `STYLE-LAB` gibi stil-eksenli bakışa uymuyor, aynı stil 4 bölüme dağılmış.
- **Tekrar eden URL'ler** temizlik yapılmadan bırakılmış (ör. `ant.design` hem React hem UI Components'ta).

## Ölü linkler — en can sıkıcı 12

| Bölüm | Ad | Durum |
|---|---|---|
| Colors | PaletteForge, Color Hex Picker, CombineCOLORS, AiSeka | DNS yok |
| Colors | Croma, Saruwakakun | 404 |
| React UI Libraries | Theme UI, Orbit, Recharts, Elemental UI | 404/DNS |
| Design Systems | Comet, Rizzo, Lexicon, Alta UI, Audi CI | 404/DNS |
| Icons | Cryptoicons (410), Evericons (404) | ölü |
| Favicons | FaviconForge, FaviFiles | DNS yok |
| Stock Photos | Picspree, scienceimage | DNS yok |
| UI Components | Stitches, Bit components, Daemonites (URL'de çift `http://`) | hatalı |

Tam liste: `olu-linkler-kesin.md` · ham veri: `link-health.json`

## Çalıştırma

Çalıştırılabilir tek parça PR doğrulayıcısı. Uygulama/sunucu yok, `package.json` yok.

1. **Birim testleri** — `python -m unittest discover .github/scripts -p "test_*.py"`
   → `Ran 14 tests ... OK` (Python 3.12.10, 0.019 s)
2. **Uçtan uca PR simülasyonu** — (script taşınmadı; tek seferlik doğrulama, `validate_resource()` doğrudan çağrılarak koşuldu)
   `validate_resource()` gerçek `readme.md` üzerinde 6 senaryoyla çağrılıyor → **6/6 beklendiği gibi**

| Senaryo | Sonuç |
|---|---|
| Geçerli katkı (tek satır ekleme) | geçti |
| Aynı isim/URL tekrar (Coolours) | reddedildi: `already listed` |
| Başlıkta yanlış bölüm | reddedildi |
| Eksik checklist maddesi | reddedildi: `Missing confirmations: genuinely free` |
| `Link:` ile README URL'i uyuşmuyor | reddedildi |
| Tek satırdan fazla değişiklik | reddedildi: `Only the single resource entry may change` |

Doğrulayıcının gerçek modu (`--merge` + `--event`) iki ebeveynli merge commit ve GitHub event JSON'u istiyor; bu yüzden CLI değil, fonksiyon seviyesinde koşturuldu.

## Karar

- **Katalog olarak iyi, kod olarak yok**: tasarım stili/token üretmek için değil, "şu iş için hangi site vardı" araması için.
- **Kaynak olarak ikinci el**: içindeki 1063 domainin çoğu birinci elden (doğrudan site) daha güncel. Senin `STYLE-LAB.md` + `Styles` kütüphanesi bu depodan daha derin.
- Kullanım şekli: `readme.md`'yi grep'lenebilir referans olarak tut, stil kütüphanesine **sadece Colors + Fonts + Design Systems** bölümlerinden seçki taşı.
