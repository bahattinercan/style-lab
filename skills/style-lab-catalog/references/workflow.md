# Yeni stil ekleme akışı (v6 · tek komut)

Kataloğa **yeni** stil eklerken izlenecek sıra. Var olan stili uygulamak için bu akışa girme
(`SKILL.md → Procedure`). Süre: SPEC yazımı ≈ 15–25 dk + üretim (komut) ≈ 1 dk + kapılar.

Kaynak: `kit/specs/*.json` (SPEC). Üretilen: `styles/<nn>-<slug>/` altındaki beş dosya + PNG +
galeri/indeks/rapor. Üretilen dosyaları elle değiştirme; commit öncesi kapıları çalıştır.

---

## 1 · Band ve numara

- Niyeti 2–3 ölçülebilir kritere çevir ("oyun HUD + koyu + tabular sayı").
- Band seç: `kit/families.json` (tek kaynak, **31 band, 1–251 kesintisiz**) + `references/families.md`.
- Yeni bant açıyorsan aralığı kesintisiz tut, `kit/families.json`'a ekle, `kit/specs/bands.json`'a
  şablon yaz **ve** `kit/assign-content.mjs → BY_FAMILY`'ye bandı ekle (yalnız var olan 8 sektör
  paketi: saas, emlak, danismanlik, egitim, eticaret, dergi, ajans, saglik).
- Numara + slug: klasör adı `<nn>-<slug>`, slug İngilizce kebab-case ve benzersiz.

```bash
ls styles | grep -E "^<nn>-|<slug>$" || echo "temiz"
```

## 2 · SPEC yaz (`kit/specs/<parti>.json`)

En yakın mevcut SPEC'i kopyala ve alanları doldur:

| Alan | Kural |
|---|---|
| `num`, `slug`, `name`, `band` | band `kit/specs/bands.json` anahtarı |
| `tagline` | ≤ 170 karakter, tek cümle |
| `feeling`, `best`, `avoid` | düz string (dizi verirsen doğrulama reddeder) |
| `palette` | 10 renk: bg, bg2, surface, surface2, ink, inkSoft, inkFaint, accent, accentInk, line |
| `fonts` | `[display, body, mono]`, `kit/fonts/fonts.css` içindeki 29 aileden |
| `radius` | `[radius, radiusLg]` |
| `signature` | ≥3 madde; `## Görsel imza` bölümüne yazılır |
| `must` / `mustNot` | ≥3 madde |
| `refs` | ≥3 `{label, url (https), use}` |
| `keywords` | 3 etiket (galeri araması) |
| `brief` | AI brief gövdesi (kod bloğuna gömülür) |
| `neighbors` | `compatible` / `forbidden`; slug'lar katalogda ya da aynı partide |
| opsiyonel | `upper`, `tracking`, `scale`, `motif`, `shadow`, `grain`, `essence`, `origin`, `recognition`, `notThis`, `screens`, `traps`, `extraCss`, `industries`, `layout` |

**Kontrast eşikleri build sırasında ölçülür** (uydurma yok): `ink/bg ≥ 4.5`,
`ink-soft/bg ≥ 4.5`, `accent-ink/accent ≥ 4.5`, odak halkası `≥ 3`. Ayrıca APCA Lc < 60 uyarı verir.
Koyu mod ve `motion` alanı yazma — şema v6 bunları yasaklar.

## 3 · Üret (tek komut)

```bash
node kit/add-style.mjs kit/specs/<parti>.json            # üret + render + indeks
node kit/add-style.mjs kit/specs/<parti>.json --dry      # yalnız doğrula (dosya yazmaz)
node kit/add-style.mjs kit/specs/<parti>.json --check    # kaynaklar SPEC ile aynı mı (drift)
node kit/add-style.mjs kit/specs/<parti>.json --no-render # kaynak + indeks, PNG üretme
```

Komut sırası: doğrula → 5 kaynak (`tokens.json`, `token-block.css`, `style.md`,
`shots.config.fragment.mjs`, `keywords.json`) → `apply-fragments` → `assign-layouts` →
`assign-imagery` → `assign-content` → `render-shots` (tek sayfa) → `optimize-shots` →
`sync-shot-tables` → `build-gallery` → `export-tokens` → `build-slim-index` → `report` →
`composition-report` → `phash --write`.

## 4 · Doğrula

```bash
bash kit/gates.sh                                  # 27 adım, son satır "kapılar: temiz"
node kit/check-schema.mjs                          # 0 hata
node kit/check-contrast.mjs --strict-soft          # 0 hata
node kit/check-layout.mjs                          # kompozisyon (parmak izi tavanı %25)
node kit/render/render-shots.mjs --styles <slug> --measure   # 0 sorun
node kit/render/phash.mjs --check                  # 0 fark / 0 eksik / 0 yeni
```

Görsel QA: `styles/<nn>-<slug>/shots/01-page.png` aç; `## Görsel imza` maddelerinden en az 2'si
görünmüyorsa SPEC'teki `extraCss`/`motif` zayıftır — güçlendir ve yeniden üret.

## 5 · Sayı ve doküman

- `docs/katalog.md` üretilir: `node kit/build-catalog-doc.mjs` (kapı: `--check`).
- README/AGENTS'te sayı iddiası yazma; ölçüyü `kit/dist/report.md` ve `docs/katalog.md`'den al.
- Commit mesajı: `feat(specs): <band> — N stil` ya da `feat(specs): <slug> stili`.

---

## Pitfalls (v6)

| Tuzak | Neden | Düzeltme |
|---|---|---|
| `avoid`/`best` dizi olarak yazıldı | SPEC şeması düz string bekler | `"avoid": "şu, şu"` |
| `neighbors` katalogda olmayan slug | sıra/parti karıştı | aynı partide üret ya da var olan slug seç |
| Yeni bant `BY_FAMILY`'ye eklenmedi | `assign-content` `undefined` üretir | bandı `kit/assign-content.mjs`'e ekle |
| Band CSS'i `extraCss` ile ezmeye çalışmak | bant CSS'i her zaman önce enjekte edilir | stil CSS'ini bant üstüne yaz, seçiciyi artır |
| Boş/tek sütun PNG | CDP viewport yarışı (eski hata) | `render-shots` artık doğrular + yeniden yakalar; `--measure` ile teyit et |
| `phash --write` uyarısı | baseline var | `--force` ile yaz (komut bunu kendisi yapar) |
