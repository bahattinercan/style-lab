# Faz durumu — P0–P5

> **Tarih:** 2026-11-15 · **Dal:** `v6-tek-sayfa`
> **Kapsam:** Bu turda açık olan P0–P5 maddeleri uygulandı. Son durum, aşağıdaki kapı çıktılarıyla birlikte güncellenir.

Bu dosya fazların kabul ölçütlerini ve güncel kanıtını kaydeder. Üretilen dosyalar elle değil, proje üreticileriyle güncellenir.

## P0 · Erişilebilirlik

Landing denetimi gerçek layout partial'larını, gerçek stil gövdesini ve üç haneli stil klasörlerini kullanır. Kapıda 251 stilin tümü taranır.

**Kanıt:** `node kit/render/a11y-check.mjs --scene landing` · 251 stil, 0 kritik ihlal, 0 negatif `tabindex`.

## P1 · Sayfaya sığdırma ve tipografi

- `--fit` ölçüm kademesini `tokens.json.layout.fit` içine yazar; normal render saklanan kademeyi uygular. Layout ve SPEC üreticileri bu değeri korur.
- Taşma veya kırpılma varsa fit değeri kalıcılaştırılmaz. 251 sahne yeniden ölçülüp render edildi.
- `h1` boyutları `typography.scale.h1` / SPEC `scale.h1` üzerinden CSS değişkenine taşındı. `type-scale.mjs` inline değişkenleri güvenli uzunluk değeriyle üretir; `scene.css` bu değişkenleri kullanır.

**Kanıt:** `render-shots --measure --fit --jobs 2` · 251 sahne, 0 taşma, 0 hata. `node --test kit/lib/type-scale.test.mjs`.

## P2 · Palet modeli

- 251 token kaynağı ve 100 SPEC, `paletteSeeds` / `paletteTargets` alanlarını taşır.
- OKLCH tabanlı çözücü hedef kontrastı yakalar; erişilebilir durum renklerini üretir.
- Borç baseline'ına uyarı eklenmedi.

**Kanıt:** `node kit/check-contrast.mjs --strict-soft` · 251 stil, 0 hata, 0 borç, 0 uyarı.

## P3 · Tek kaynak ve legacy SPEC

- `STYLES` nesnesinin tamamı fragment'lardan üretiliyor. 45 gölge blok ve 994 ölü satır kaldırıldı; iki ardışık `apply-fragments --apply` idempotent.
- Eski 01–151 stillerin alanları `kit/specs/legacy-01-151.json` dosyasına çıkarıldı: prose alanları ve reçeteler `style.md`'den; token/layout/imagery alanları `tokens.json`'dan; motif/gövde sınıfı/CSS `shots.config.fragment.mjs`'den; keywords dizisi `keywords.json`'dan gelir.
- Eski aile aralıkları `bands.json` içindeki en yakın ortak reçeteye eşlenir. Bu eşleme eski ailelerle yeni bandların birebir aynı olduğu anlamına gelmez.
- Her stilin dört kaynak dosyası SHA-256 ile izlenir. `add-style --check` yeniden çıkarılan tüm alanları ve kaynak özetlerini SPEC ile karşılaştırır; aynı kontrol `gates.sh` içinde çalışır.

**Kanıt:** `node kit/add-style.mjs kit/specs/legacy-01-151.json --check` · 151 stil, 0 drift. `node kit/apply-fragments.mjs --check`.

## P4 · Kompozisyon çeşitliliği

- `layouts.json` altı bölüm planı tanımlar; her stilin `sectionPlan` ataması deterministiktir. Sayfa bölümleri CSS `order` ile değil DOM sırasıyla render edilir ve erişilebilirlik ağacıyla aynı sıradadır.
- Layout kapısı her planın dokuz bölüm işaretçisini tam bir kez içerdiğini ve plan dağılımını kontrol eder.
- Görsel baseline üzerindeki tüm stil çiftleri dHash ile karşılaştırılır; en düşük kabul eşiği 24/256'dır.

**Kanıt:** `node kit/check-layout.mjs` · 6 plan, 16 hero/nav parmak izi. `node kit/check-distinctness.mjs` · 251 stil, 0 yakın çift.

## P5 · İmza CSS kaçış kapıları

- `check-signature.mjs` sabit hex renkleri ve kendi kendini ezen bildirimi yakalar; linter sentetik self-test ile doğrulanır.
- Render öncesi CSS normalizasyonu tekrar bildirimleri düzenler. SPEC `extraCss` üst sınırı 400 karakterdir; mevcut en uzun değer 399 karakter.

**Kanıt:** `node kit/check-signature.mjs` · 251 stil, 0 bulgu. `node kit/check-signature.mjs --self-test`.

## Son doğrulama

```bash
bash kit/gates.sh
```

**Sonuç (2026-11-15):** `kapılar: temiz`. Legacy SPEC paritesi 151/151, görsel imza 251/251 ve 0 fark, benzersizlikte 0 yakın çift. A11y 251/251, 0 kritik ihlal; örnek taşma ölçümü 24 sahnede 0 taşma; birim testleri 11/11 geçti. Piksel regresyonu `kit/render/.baseline/` bulunmadığı için `↷` ile atlandı. `bash ~/.pi/agent/bin/verify.sh` stack tanımadığı için otomatik doğrulama komutu bulamadı; bu depo için `kit/gates.sh` elle çalıştırıldı.
