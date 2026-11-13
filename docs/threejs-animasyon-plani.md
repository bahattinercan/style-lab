# three.js animasyon katmanı — plan v1

> **Ne işe yarar:** `stage-lab`'daki sahneyi "tek motif + toz" seviyesinden, katalogdaki **stilin kendi
> hareket imzasından türeyen** bir three.js animasyon katmanına çıkarmak. Karar kaydı + taksonomi +
> kabul ölçütleri + fazlar.
> **Durum:** **S7–S11 tamam** (2026-11-12) — politika katmanı + 4 görünür fx ailesi kodlandı, ölçüt **38/38** (§13, §14).
> Açık iş listesi: §14.7.
> **Kaynak karar:** `docs/stage-lab-plani.md` K1 (sahne kodu `../stage-lab`).
> **Kapsam dışı:** style-lab'ın 151 stili, `kit/motion/` kalıpları ve `bash kit/gates.sh` **değişmez**.

---

## 0 · Tek paragraf

style-lab **veri** üretir (`kit/dist/motion.json`: stil başına süre, eğri, stagger, yasak listesi),
stage-lab **sahne** üretir. Bugüne kadar sahne bu veriyi yalnız `04-luxury-typography` için ve yalnız iki
teknikle (çizgi motif + itki parçacığı) kullandı. Bu plan, motion.json'ı **üç boyuta taşır**: her fx
ailesi süresini/eğrisini/stiagger'ını oradan alır, stilin `forbidden` listesi kapıda uygulanır,
döngü varsayılan olarak **yoktur**. Yeni npm bağımlılığı eklenmez — `three@0.187`, `@react-three/fiber`,
`gsap` zaten kurulu.

---

## 1 · Karar kaydı (kilitli)

| # | Karar | Seçim | Sonuç / gerekçe |
|---|---|---|---|
| **T1** | Kod nerede | `../stage-lab/src/stage/fx/` | K1 aynen geçerli; style-lab bağımlılıksız kalır |
| **T2** | Süre/eğri kaynağı | `kit/dist/motion.json` → üretilen `stage-lab/src/stage/fx/fx.tokens.json` | fx içinde **ms literal yazmak yasak**; sayı üretilir, uydurulmaz |
| **T3** | Hareket sürücüsü | **tween** (süre + cubic-bezier); spring/fizik motoru yok | 151 stilin **87**'si yay/bounce/overshoot ailesini yasaklıyor (§2) |
| **T4** | Otonomi | varsayılan **itki**: imleç · scroll ilerlemesi · tuş · odak. Boşta hareket **tam 0** | 151 stilin **142**'si sürekli/döngü hareketini yasaklıyor |
| **T5** | Kamera | **sabit**. Derinlik = `scale` · `opacity` · `clip-path` · z-sıralama · çizgi kalınlığı | 151 stilin **90**'ı parallax yasaklıyor; Ç2 aynen |
| **T6** | Politika normalizasyonu | `tools/build-fx-policy.mjs` ham `forbidden` metnini **9 kanonik id**'ye indirir | 609 ham metin, tam eşleşme imkânsız (§3) |
| **T7** | Kalite kademesi | `full` → `reduced` → `off`, `prefers-reduced-motion` `reduced`ı zorunlu kılar | ölçülebilir tek anahtar |
| **T8** | Yeni bağımlılık | **yok**. Post-processing (`EffectComposer`) eklenmez | Ç4 bloom yasağı + 89 stilde blur/glow yasağı |
| **T9** | Beat sayısı | 5 sabit (preload → hero → story → atlas → footer) | `sahne-sitesi-iskeleti` pitfall'ı: arketipler kıyaslanabilir kalmalı |
| **T10** | Bu turun çıktısı | **yalnız bu doküman** | kod yok, kapı değişmez |

### 1.1 Ne YAPMAYACAĞIZ (kapsam çitleri)

- `styles/**`, `kit/**`, `playbook.md`, `gates.sh` — tek satır değişmez.
- spring/bounce/`back.out` easing, `repeat: -1`, `while(true)` rAF, `setInterval` ile sahne — kapıdan döner.
- Kamera dolly/parallax, orbit kontrol, `PerspectiveCamera` hareketi — T5.
- Bloom, DOF, chromatic aberration, motion blur — T8 + Ç4.
- Rapier/cannon/ammo, GLB streaming, video texture, ses — kapsam dışı, ileride ayrı karar.

---

## 2 · Ölçülen zemin (2026-11-12)

Bu bölümdeki her sayı çalıştırılmış komuttan gelir; hiçbiri tahmin değil.

```bash
node -e "const j=require('./kit/dist/motion.json').styles; …"   # aşağıdaki tabloların kaynağı
node -e "const f=require('./kit/families.json'); …"             # 22 aile bandı
```

| Ölçüm | Değer | Mimariyi neye zorluyor |
|---|---|---|
| Stil sayısı | **151** | hepsi aynı fx sözleşmesini dolduracak |
| `sequences` dolu olan | **151 / 151** | fx süresi her stil için türetilebilir, boşluk yok |
| `baseMs` | min **110** · max **800** · ort **265** | fx varsayılan süresi stil başına değişecek |
| `sequences.enter.durationMs` | **120 … 1150** | 3B giriş animasyonu 120ms'de algılanmaz → fx `baseMs` kullanır, `fastMs` UI'ya kalır |
| `sequences.enter.stagger` | **0.008 … 0.185 s** | çok öğeli fx'te stagger uydurulmaz, ölçeklenir |
| `sequences.pin.enabled` | **52 / 151** açık | scrub kanalı 52 stilde serbest, 99'unda değil |
| `forbidden` ham metin | **609** toplam, stil başına **4.0** ortalama, **0** stil boş | politika katmanı zorunlu |
| ⟶ döngü/sürekli ailesi | **142 / 151** | T4: itki varsayılan |
| ⟶ parallax ailesi | **90 / 151** | T5: kamera sabit |
| ⟶ spring/bounce/overshoot | **87 / 151** | T3: tween, fizik yok |
| ⟶ blur/glow/parıltı | **89 / 151** | T8: post-processing yok |
| ⟶ flash/strobe | **37 / 151** | `flash-burst` politika yasağı zaten var |
| ⟶ gradient/gloss/ışık süpürme | **35 / 151** | shader ailesi "gradient üretmez" kuralıyla yazılır |
| ⟶ pin/scrub/hijack/imleç | **36 / 151** | imleç-sahne bağı stile göre kapanabilmeli |
| ⟶ 3B tilt/döndürme | **15 / 151** | 3B nesne kullanımı azınlıkta, varsayılan değil |
| ⟶ hızlı/sert geçiş | **17 / 151** | fx alt süre sınırı stil başına; `fastMs` kullanılamaz |

**Mevcut stage-lab bütçesi (README, ölçülmüş):** drawcall **2** · 2.4k parçacık · JS gzip **~350 KB** ·
`measure.mjs` **33** ölçüt · `npm run verify` yeşil · **5** arketip + `kinetic-type` sahnesiz varyant.
→ drawcall ve JS tarafında **yer var**; kısıt GPU değil, **politika**.

### 2.1 Ölçümün ortaya çıkardığı iki tasarım gerçeği

1. **"Animasyon" bu katalogda istisna, kural değil.** 151 stilin 142'si sürekli hareketi yasaklıyor.
   Dolayısıyla "three.js ile zengin animasyon" ancak **kullanıcı itkisiyle çalışan, kendiliğinden duran**
   bir katman olarak meşru. Bu bir kısıt değil, ürün kimliği: *gravür talaşı*, *toz* değil.
2. **Süre/eğri serbest değişken olamaz.** 151 stil için 151 farklı imza var; fx içinde `0.6s` yazmak
   stilin imzasını ezer. T2 bu yüzden "üretilmiş token" diyor.

---

## 3 · Yasak normalizasyonu (T6) — asıl iş burada

`forbidden` alanları **serbest metin**. Aynı yasak yüzlerce farklı cümleyle yazılmış:

```
"sürekli döngü" · "Sürekli döngü" · "sonsuz döngü" · "döngü" · "sürekli animasyon" ·
"Sürekli dönen kadran iğnesi" · "sürekli dönen roket/uydu" · "matrix yağmuru" · "akan playhead"
```

Bunları fx kodunda tek tek eşleştirmek bakımı imkânsız kılar. Çözüm:

### 3.1 Kanonik politika kimlikleri (9)

| id | Kapsadığı ham metin ailesi | Etkilediği fx |
|---|---|---|
| `no-loop` | sürekli · sonsuz · döngü · loop · nabız · pulse · salınım · nefes · dalgalanma · marquee · spinner | tüm aileler (varsayılan itki) |
| `parallax` | parallax · katman kaydırma · derinlik kayması | FX7 |
| `spring` | spring · bounce · overshoot · elastik yay · sıçrama · titreme | FX2, FX5, FX8 easing seçimi |
| `blur-glow` | blur · glow · parlama · parıltı · caustic | FX4 (yüzey), post yok |
| `gradient-shine` | gradyan · gradient · gloss · ışık süpürme · shine | FX4 shader çıktısı |
| `flash` | flash · flaş · strobe · flicker · yanıp sönme · alarm | FX3, FX4 |
| `scroll-hijack` | pin · scrub · hijack · snap · imleç · cursor | FX7, FX8 |
| `tilt-3d` | tilt · 3B döndürme · perspektif · döndür | FX3, FX6 |
| `fast` | hızlı geçiş · 100/600 ms altı · ani sıçrama · sert/step | tüm fx alt süre sınırı |

`tools/build-fx-policy.mjs` her stil için `forbidden` metinlerini bu 9 id'ye projekte eder; **eşleşme
varsa yasak sayılır** (muhafazakâr yön: şüphede yasakla). Çıktı:

```json
{ "luxury-typography": { "forbidden": ["no-loop", "parallax", "fast"],
                          "allow": ["FX1","FX2","FX5","FX7","FX8"] } }
```

### 3.2 Kapı

| Kapı | Ne yapar | Nerede |
|---|---|---|
| `fxPolicy` (statik) | `src/stage` içinde `spring\|bounce\|elastic\|back.out\|repeat:\s*-1\|Infinity` araması; stilin yasakladığı id'yi kullanan fx `mount` çağrısı varsa **hata** | `tools/check-fx-policy.mjs` |
| `fxDurationSource` (statik) | `src/stage/fx/**` içinde `ms`/`duration` literal sayısı **0** olmalı; süre yalnız `fx.tokens.json`'dan | aynı dosya |
| `fxIdle` (dinamik) | 1.5 s boşta ardışık frame matrix farkı **0** (mevcut `idle` ölçütünün tüm fx ailelerine genişletilmiş hâli) | `tools/measure.mjs` |

`fx-policy.json` **üretilen** dosyadır (`--check` modu var): style-lab `motion.json`'ı değişip yeniden
üretilmezse kapı kırmızı olur. `contract.lock.json`'a **8. dosya** olarak girer.

---

## 4 · Taksonomi — 6 fx ailesi (FX1…FX6)

Kabul edilen aileler. Her biri: mekanik · three.js API · tetik · uyarlama · ölçüt.

| id | Aile | Mekanik | three.js API | Tetik | Maliyet | Durum |
|---|---|---|---|---|---|---|
| **FX1** | Gravür çizgi | motif `LineSegments`, kalınlık/opaklık ilerlemeyle | `LineSegments`, `LineBasicMaterial` | scroll · odak | 1–2 drawcall | **var** (portrait-motif) |
| **FX2** | İtki parçacığı | nokta bulutu, imleç **hareketinde** kuvvet, `exp(-dt/τ)` sönüm | `Points`, `BufferGeometry`, `InstancedBufferAttribute` | imleç hareketi | 1 drawcall / 2.4k nokta | **var** |
| **FX3** | Instanced ızgara/rölyef | N özdeş nesne; her örneğe gecikmeli tween (stagger × index) | `InstancedMesh`, `instanceMatrix` | scroll · giriş | 1 drawcall / ≤2k örnek | **yeni** |
| **FX4** | Shader yüzey | hatch/gravür/dissolve; **gradient ve bloom üretmez** | `ShaderMaterial`, `onBeforeCompile` | ilerleme uniform'u | 1 drawcall | **yeni** |
| **FX5** | Geometri morph | köşe konumları A→B, tween eğrisi stilden | `BufferGeometry.position`, `Float32Array` lerp | beat geçişi | 1 drawcall | **yeni** |
| **FX6** | Harf = nesne | glif 1px stroke, eksen/ölçek dönüşü (kinetic-type'ın 3B hâli) | `LineSegments` + `Group` | scroll · imleç | 1–3 drawcall | **kısmen** (2B) |

### 4.1 Reddedilen aileler (neden yok)

| Aile | Neden yok |
|---|---|
| Post-processing (bloom/DOF/aberration) | T8 + `blur-glow` 89 stilde yasak; krem zeminde bloom beyazı kırpar (Ç4) |
| Fizik motoru (Rapier/cannon) | T3; 87 stilde yay yasak, fizik "kendiliğinden hareket" üretir (T4) |
| Kamera hareketi / orbit | T5; parallax 90 stilde yasak |
| GLB/Draco sahne akışı | mevcut motif prosedürel ve 2 dosya; 1.5 MB GLB bütçesi LCP'yi riske atar |
| Video texture / Lottie / Rive | yeni bağımlılık (T8) + `style-lab` motion kalıplarıyla çift kaynak |
| Sürekli ambient (toz, aurora, dalga) | `no-loop` 142 stilde yasak — itkiye çevrilmeden yazılmaz |

### 4.2 Her ailenin uyması gereken 4 kural

1. **Süre/eğri `fx.tokens.json`'dan** (`baseMs` + `curve.points`) — literal yasak.
2. **`invalidate()` sözleşmesi:** `frameloop: 'demand'` altında her hareket kaynağı (imleç, scroll, tuş,
   `setState`) `invalidate()` çağırır. Çağırmayan kanal sessizce donar (S6'da yaşandı).
3. **Durma garantisi:** kuvvet/vel displacement eşiğin altına inince **tam 0**'a yazılır; `idle` ölçütü
   bunu arar.
4. **Tek `lookState`:** çizgi, parçacık, instanced nesne aynı dönüşüm fonksiyonlarından geçer
   (`localToWorld` / `worldToLocal`) — yoksa katmanlar birbirinden kopar (S6 hatası #3).

---

## 5 · Stil ↔ fx eşlemesi: elle tablo yok, kural var

151 stil × 6 aile = 906 hücre. Elle tablo yazmak "sayı uydurma" olur ve ilk `motion.json` güncellemesinde
çürür. Bunun yerine **türetme kuralı** (kod `tools/build-fx-policy.mjs` içinde):

```
allow(style) = { FXn | ⋂ yasak(fx(FXn)) ∩ forbidden(style) = ∅ }
```

Aile → gerektirdiği izinler:

| Aile | Gerekli izin | Yasaksa |
|---|---|---|
| FX1 gravür çizgi | — | her zaman serbest (hareket itki/scroll tabanlı) |
| FX2 itki parçacığı | `scroll-hijack` (imleç bağı için) | imleç bağı kapanır, scroll itkisi kalır |
| FX3 instanced ızgara | `flash` yok, `no-loop` yok | stagger tek seferlik tween'e indirilir |
| FX4 shader yüzey | `gradient-shine` yok, `blur-glow` yok | yalnız hatch/dissolve modu |
| FX5 geometri morph | `spring` yok | cubic-bezier tween'e düşer (zaten varsayılan) |
| FX6 harf = nesne | `tilt-3d` | yalnız eksen döndürme, perspektif yok |

Örnek (ölçülmüş): `luxury-typography` → `forbidden: [no-loop, parallax, fast]` → izin:
**FX1 · FX2 · FX4(hatch) · FX5 · FX6(eksen)**. Bu, Ç1–Ç6 çözümleriyle birebir aynı sonucu verir —
kural, elle yazılmış `04` profiliyle **tutarlı** olduğunu kanıtlar (kabul testi).

---

## 6 · Mimari

```
stage-lab/
├── src/stage/fx/
│   ├── index.ts          # kayıt: id → { mount, update, dispose } · allow() kontrolü
│   ├── policy.ts         # fx-policy.json'dan gelen izinli aile listesi (üretilen)
│   ├── tokens.ts         # fx.tokens.json okuyucu (süre + eğri + stagger)
│   ├── clock.ts          # tek zaman kaynağı; gsap ticker'a bağlı; dt clamp
│   ├── impulse.ts        # exp(-dt/τ) sönüm + eşik altında tam sıfır
│   ├── budget.ts         # kalite kademesi: full / reduced / off
│   └── families/
│       ├── fx1-line.ts   ├── fx3-instanced.ts   ├── fx5-morph.ts
│       └── fx2-particle.ts ├── fx4-shader.ts    └── fx6-type.ts
├── src/stage/fx/fx.tokens.json    # ÜRETİLEN (style-lab motion.json'dan)
├── src/stage/fx/fx-policy.json    # ÜRETİLEN (style-lab forbidden → 9 id)
└── tools/
    ├── build-fx-policy.mjs        # ikisini de üretir (--check)
    └── check-fx-policy.mjs        # statik: spring/repeat/ms-literal taraması
```

### 6.1 `stage.config.json` eklemeleri

```json
{
  "fx": {
    "enabled": ["fx1-line", "fx2-particle"],
    "quality": "full",
    "budget": { "drawcalls": 30, "triangles": 60000, "instances": 2000, "textureMb": 4 },
    "impulse": { "sources": ["pointer", "scroll", "keys", "focus"], "idleAfterMs": 1200 }
  }
}
```

`enabled` listesi **boş** ise mevcut davranış aynen sürer → geri dönüş tek satır (§10).

### 6.2 Kalite kademesi (T7)

| Kademe | Ne olur | Tetik |
|---|---|---|
| `full` | tüm izinli aileler, `dprMax 1.75` | varsayılan |
| `reduced` | parçacık 1/3, instanced kapalı, morph tek seferlik | `prefers-reduced-motion` · düşük GPU (frametime > 22ms) |
| `off` | hiçbir fx mount edilmez; statik poster + SVG motif | WebGL yok · kullanıcı seçimi · `a11y.escapeHatch` |

---

## 7 · Kabul ölçütleri (33 → 47)

Mevcut 33 ölçüt korunur. Eklenmesi önerilen 14:

| # | id | Ölçüt | Eşik | Nasıl |
|---|---|---|---|---|
| 34 | `fxPolicy` | stilin yasakladığı fx kurulmamış | 0 ihlal | statik tarama + `fx-policy.json` |
| 35 | `fxDurationSource` | fx içinde süre literal'i | **0** | statik regex |
| 36 | `fxNoSpring` | spring/bounce/elastic/back.out | **0** | statik regex |
| 37 | `fxNoLoop` | `repeat: -1` / `Infinity` / `setInterval` ile sahne | **0** | statik regex |
| 38 | `fxIdle` | 1.5 s boşta matrix farkı | **= 0** | CDP ardışık frame diff (`idle` genişletmesi) |
| 39 | `fxDrawcalls` | aktif fx drawcall | ≤ `budget.drawcalls` (30) | `renderer.info.render.calls` |
| 40 | `fxTriangles` | üçgen sayısı | ≤ **60k** | `renderer.info.render.triangles` |
| 41 | `fxTextureMem` | doku belleği | ≤ **4 MB** | `renderer.info.memory.textures` × boyut |
| 42 | `fxStagger` | çok öğeli fx'te stagger | `motion.json.sequences.enter.stagger` ±10% | telemetri |
| 43 | `fxReduced` | `prefers-reduced-motion` | kademe `reduced`, hareket durur | ikinci koşu (`--reduced`) |
| 44 | `fxCtxLoss` | `WEBGL_lose_context` sonrası | içerik geri gelir, boş ekran yok | CDP `--lose-context` |
| 45 | `fxWebglOff` | WebGL kapalı | poster + SVG motif, içerik görünür | mevcut `fallback*` genişletmesi |
| 46 | `fxShaderCompile` | ilk kare gecikmesi | ≤ **200 ms** | `Performance` mark |
| 47 | `fxJsBudget` | JS gzip | ≤ **450 KB** (mevcut) | vite build raporu |

> Eşikler **hedef**, ölçüm turunda (S11) gerçek çıktıyla güncellenir. Bugünden "geçti" yazılmaz.

---

## 8 · Fazlar

| Faz | İş | Bitti sayılır |
|---|---|---|
| ✅ **S7** | `build-fx-policy.mjs` + `check-fx-policy.mjs`, `fx.tokens.json`, kontrata 8. dosya | `npm run verify` yeşil, ölçüt 34–37 geçer, `luxury-typography` çıktısı §5 ile uyuşur → §13 |
| ✅ **S8** | FX5 morph + FX3 instanced (mevcut FX1/FX2 üstüne); atalet `settle()` ile tek yerde | `fxLayers` + `fxIdle` geçer (o turda 36/36) → §14.2 |
| ✅ **S9** | FX4 shader yüzey (hatch modu) | 38/38 + `--shot` gözle: ilk sürüm metnin üstünden geçiyordu → §14.3 |
| ✅ **S10** | FX6 harf = nesne; `reduced`/`off` yolları, context-loss toparlama | `fxReduced` + `fxCtxLoss` + `fxTriangles` geçer → §14.4 |
| ✅ **S11** | ölçüm turu + README/plan güncellemesi | **38/38** ölçüt, `verify:archetypes` **5/5** → §14.5 |

Her faz bağımsız yeşil olur; yarım faz commit edilmez.

---

## 9 · Riskler ve karşılıkları

| Risk | Ne olur | Karşılık |
|---|---|---|
| Shader'da sessiz gradient/glow sızması | stilin yasağı delinir, kapı yakalamaz | `--shot` + gözle bak (S6 dersi: sayı "çalışıyor" der, "güzel/uygun" demez) |
| 142 stilde döngü yok → sahne "cansız" | kullanıcı "animasyon yok" der | itki kaynaklarını çeşitlendir: scroll ilerlemesi, tuş, odak, beat geçişi |
| `enter.durationMs` 120ms'ye kadar iniyor | 3B'de algılanmaz, boşa GPU | fx süresi **`baseMs`**'den türetilir, `fastMs` yalnız UI |
| Instanced 2k örnek + 60k üçgen LCP'yi şişirir | 450 KB / 2.5 s bütçesi kırılır | `budget.ts` ilk karede `reduced`a düşer, ölçüt 47 zorlar |
| `fx.tokens.json` elle düzenlenir | kontrat sessizce kayar | `--check` + `contract.lock.json` (8. dosya) |
| Headless WebGL SwiftShader | "60fps" yanılgısı | rapor "kare üretimi" der, FPS iddiası yok (mevcut kural) |
| Politika normalizasyonunda yanlış negatif | yasak metni kaçar, fx kurulur | regex tablosu §3.1'de tek kaynak; yeni ham metin görülürse **test** eklenir (T6) |

---

## 10 · Geri dönüş

| Katman | Geri dönüş |
|---|---|
| style-lab | yalnız bu dosya → `git rm docs/threejs-animasyon-plani.md`; hiçbir kapı etkilenmez |
| stage-lab | `src/stage/fx/` silinir + `stage.config.json` → `"fx": { "enabled": [] }` → mevcut 33 ölçüt aynen yeşil |
| kontrat | `verify-contract.mjs` dosya listesinden `fx.tokens.json` çıkarılır, `contract.lock.json --write` |
| politika | `fx-policy.json` üreteci silinir; `style-lab` kaynağı değişmediği için veri kaybı yok |

---

## 11 · Doğrulama komutları

```bash
# stage-lab (asıl kapı)
cd ../stage-lab
node tools/build-fx-policy.mjs --check     # fx.tokens.json + fx-policy.json güncel mi
node tools/check-fx-policy.mjs             # statik: süre literali / spring / loop / yasak aile
npm run typecheck && npm run lint
npm run build && npm run measure           # 47 ölçüt
npm run verify:archetypes                  # her arketip ayrı derleme + ölçüm
npm run measure -- --shot                  # kare al, GÖZLE bak

# style-lab (dokunulmadığını kanıtla)
cd ../style-lab
node kit/export-tokens.mjs --check         # fx kaynağı motion.json hâlâ tutarlı
bash kit/gates.sh                          # son satır: kapılar: temiz
```

**"Bitti" tanımı:** `npm run verify` yeşil **ve** `bash kit/gates.sh` → `kapılar: temiz` **ve** 47 ölçüt
tablosu ölçüm çıktısıyla eşleşiyor. Çıktı gösterilmeden "bitti" denmez.

---

## 12 · Sıradaki tur (öneri)

1. **S7'yi onayla** — politika üreteci + 4 statik ölçüt. Kod az, kazanç büyük: 151 stil için fx izni
   ölçülebilir hâle gelir.
2. **Motif kararı:** `portrait-motif` prosedürel gravür mühür. FX3/FX5 için gerçek geometri mi
   (GLB) yoksa prosedürel kalıp mı üretilecek? Prosedürel kalırsa `optimize-motif.mjs` borcu kapanmaz.
3. **İkinci stil profili:** `146-151` bandından bir "Sahne & Prestij" stili seçilip fx izni
   `luxury-typography` ile karşılaştırılmalı — kuralın stil değişince gerçekten farklı sonuç verdiği
   görülmeden "stil-parametreli fx" iddiası kanıtlanmış sayılmaz.

---

## 13 · S7 uygulama durumu (tamam · 2026-11-12)

`../stage-lab` tarafında politika katmanı kuruldu. **Kapılar:** `npm run verify` uçtan uca yeşil
(`tokens → motif → contract → style → fx → fxpolicy → typecheck → lint → build → measure`),
`33/33` ölçüt, `npm run verify:archetypes` **5/5 arketip 33/33**.

### 13.1 Ne yazıldı

| Dosya | İş |
|---|---|
| `tools/lib/fx-canon.mjs` | 10 kanonik kimlik + `UI_SCOPE` açık listesi + aile allow/mode tablosu; üreteç ve kapı ortak kullanır |
| `tools/build-fx-policy.mjs` | `--write` / `--check` / `--all`; aktif stilin dilimini üretir |
| `tools/check-fx-policy.mjs` | 6 statik ölçüt (34–37 + `fxCanonical` + `fxGenerated`) |
| `src/stage/fx/fx.tokens.json` | **üretilen** sözleşme (3 KB) |
| `src/stage/fx/tokens.ts` · `policy.ts` | tipli okuma + tek karar noktası (`fxAllowed`, `fxMode`, `fxDurationMs`, `fxEasingCss`, `fxImpulseSources`) |
| `stage.config.json` → `fx` | `enabled · quality · budget · impulse` (mevcut `styleOverrides` aynen duruyor) |
| `package.json` | `fx` · `fx:write` · `fx:all` · `fxpolicy`; `verify` zincirine `fx → fxpolicy` |

### 13.2 Ölçülen çıktı (kapı çıktısından)

```
✓ Yasak metni sınıflandırma (T6)  151 stil · 609 metin · ui-only 41
   no-loop 143 · parallax 90 · spring 85 · blur-glow 83 · flash 35 · gradient-shine 29
   scroll-hijack 26 · fast 16 · tilt-3d 13 · easing 8
✓ fx.tokens.json aktif stille aynı   luxury-typography · 3KB
✓ fx aileleri stil politikasına uygun fx1-line:full fx2-particle:full
✓ fx içinde süre literali / spring / sonsuz döngü   0 · 0 · 0
```

`luxury-typography` dilimi — **§5 kabul testi geçti**:

| Alan | Değer | Kaynak |
|---|---|---|
| yasak | `blur-glow · fast · gradient-shine · no-loop · parallax` | motion (`fast`,`no-loop`,`parallax`) + stil sözleşmesi (`blur-glow`,`gradient-shine`) |
| izin + mod | `fx1 full` · `fx2 full` · `fx3 once` · `fx4 hatch-only` · `fx5 full` · `fx6 full` | `fxAllowance()` |
| `minFxMs` | **320 ms** (`fast` yasak → `fastMs` 180 yerine `baseMs`) | motion.json |
| eğri | `cubic-bezier(0.2,0.7,0.2,1)` · stagger `0.09` | motion.json `sequences.enter` |

### 13.3 Plandan bilinçli sapmalar

| # | Plan ne diyordu | Ne yapıldı | Gerekçe |
|---|---|---|---|
| 1 | 9 kanonik id | **10** (`easing` eklendi) | "yumuşak ease yasak" 8 metinde geçiyor ve doğrudan fx eğrisini bağlıyor; UI'ya atılamazdı |
| 2 | her yasak metni 9 id'den birine düşer | 41 metin **`ui-only`** açık listesinde | sayaç/ödül/metin/düzen kuralları sahne fx'ini bağlamıyor; zorla eşlemek yanlış yasak üretirdi. Sınıflandırılamayan metin **kapıyı kırar** (T6) |
| 3 | yalnız `motion.forbidden` | `tokens.json → mustNot` de katlanıyor | §3.1 önceliği: stil sözleşmesi sahne istisnasından önce gelir. Sonuç: 04'te `fx4` artık `full` değil **`hatch-only`** |
| 4 | `fx.tokens.json` + `fx-policy.json` (151 stil) | tek dosya, **aktif stil** (3 KB) | 151 stilin tamamı **200 KB** (ölçüldü) — bundle bütçesine girmez. Tam tablo `npm run fx:all` ile bellekte üretilir, dosyaya yazılmaz |
| 5 | kontrata 8. dosya | kontrat **7 dosyada** kaldı | `kit/dist/motion.json` zaten kilitli; ikinci bir kilit aynı drifti iki kez raporlardı |
| 6 | `src/stage/fx/index.ts · impulse.ts · budget.ts` | **yazılmadı** | S7'de tek bir fx ailesi yok; kayıt/atalet/bütçe kodu S8'in ilk ailesiyle anlam kazanır. Ölü kod bırakılmadı |

### 13.4 Bu turda bulunan iki gerçek hata (benim değişikliğim değil)

1. **Kontrat kilidi bayattı.** `contract.lock.json` 2026-11-10'da yazılmış; style-lab **v5**
   (`8312e0a`, 151 stil) sonrası 5 dosyanın SHA256'sı değişmiş. Yani `npm run verify` **S7'den önce de
   kırmızıydı** (README "yeşil" diyordu). Karar: yeni export'a karşı tüm zincir doğrulandı
   (`41`→ `33/33`), sonra `node tools/verify-contract.mjs --write` ile yeniden pinlendi.
2. **`measure.mjs` Windows'ta çöküyordu.** Tarayıcı kapandıktan sonra profil klasörünü tutan alt süreç
   `rmSync`'i `EBUSY` ile patlatıyordu (yakalanmamış `setTimeout` istisnası → süreç ölür). Temizlik
   en-iyi-çaba + tekrar deneme oldu; `DevToolsActivePort` tek okuması da tekrar denemeli hâle geldi.

### 13.5 S7'nin sahnede değiştirdiği tek davranış

Politika artık **gerçekten tüketiliyor** (ölü kod yok):

- `App.tsx` → parçacık katmanı `fxAllowed('fx2-particle')` ile kuruluyor,
- `Scene.tsx` → imleç dinleyicisi `fxImpulseSources()` içinde `pointer` yoksa **hiç kurulmuyor**,
- `App.tsx` → `documentElement.dataset.fx` rapor satırı (`fxSummary()`).

`luxury-typography` için üçü de bugünkü davranışı korur — bu yüzden `33/33` ve `5/5 arketip` aynı
sayılarla geçti. Değişiklik, stil değiştirildiğinde devreye girer.

---

## 14 · S8–S11 uygulama durumu (tamam · 2026-11-12)

Sahneye **4 görünür fx ailesi** girdi. Kapılar: `npm run verify` uçtan uca yeşil, **38/38** ölçüt,
`npm run verify:archetypes` **5/5 arketip 38/38**.

### 14.1 Ne yazıldı (stage-lab)

| Dosya | Aile | Ne yapar | Tetik |
|---|---|---|---|
| `src/stage/fx/families/fx5-morph.ts` | FX5 geometri morph | mühür çizgileri "talaş" hâlinden toparlanır; segment bazlı (çizgi yönü bozulmaz), deterministik `hash(i)` | B1 girişi, **800ms**, stilin eğrisi |
| `src/stage/fx/families/fx3-instanced.tsx` | FX3 instanced ızgara | mühür çevresinde 2 halka × 72 gravür çentiği, tek drawcall | scroll **0.52→0.72** açılır, **0.82→0.92** kapanır |
| `src/stage/fx/families/fx4-shader.tsx` | FX4 shader yüzey | nav altında ince tarama bandı; eşikli çizgi (gradient yok) | scroll **0.12→0.40** soldan sağa |
| `src/stage/fx/families/fx6-type.tsx` | FX6 harf = nesne | marka metni gravür stroke olarak; 4×6 ızgara glif tablosu | scroll **0.80→0.96** |
| `src/stage/fx/easing.ts` | — | `cubic-bezier` çözücü: eğri `motion.json`'dan | — |
| `src/stage/fx/state.ts` | — | eşik eğrileri + `settle()` (tam 0) + `fxRuntimeEnabled()` | — |
| `src/stage/fx/index.tsx` | — | `FxLayer` (grup içi) · `FxBackdrop` (ekran düzlemi) · `mountedFamilies()` | — |

Ek ölçütler (`tools/measure.mjs`, 33 → **38**): `fxLayers` (politika = sahnede kurulan aileler),
`fxIdle` (boşta skaler farkı **0**), `fxTriangles` (≤ 60k), `fxCtxLoss` (`WEBGL_lose_context` →
sahne geri gelir), `fxReduced` (`prefers-reduced-motion` → **0 aile**).

### 14.2 Görünen sayılar (kapı çıktısı)

```
Kare üretimi ≥ 30 fps   175 fps (kare üretimi, cihaz FPS'i değil)
Drawcall ≤ 30           5   (motif + toz + çentik halkası + tarama bandı + marka yazısı)
Üçgen ≤ 60k             290 üçgen · 1 doku
fx aileleri             politika 4 · sahnede 4
fx boşta sabit          fark 0
Bağlam kaybı            canvas canlı · drawcall 5
reduced-motion          0 aile kuruldu
JS gzip                 ~360 KB / 450 KB
```

### 14.3 `--shot` iki tasarım hatası yakaladı (sayısal kapı yakalamadı)

1. **Tarama perdesi metnin üstünden geçiyordu.** İlk sürüm tam ekran `ShaderMaterial` perdesiydi:
   ölçütler "gradient 0 / kontrast 15.74:1" diyordu (perde canvas'ta, DOM metni etkilemiyor) ama
   karede gövde metni okunmuyordu. Düzeltme: perde → **nav altında 132 birimlik bant**, çizgi
   kalınlığı ~1.4 px, opaklık 0.14, soldan sağa maske.
2. **FX3 halkası footer'da ekran dışına taşıyordu** (motif 1.28 ölçeğe büyüyor, halka 545→697 birim,
   görüş alanı yarı yüksekliği 590). Düzeltme: halka bir **pencereye** bağlandı (0.52–0.92), footer'da
   0'a iniyor. Ayrıca FX6 marka yazısı footer metnine giriyordu → yukarı alındı (y −430 → −250).

**Ders (S6'nın aynısı):** sayısal kapı "çalışıyor" der, "okunuyor" demez. Her görsel turda `--shot`.

### 14.4 Ölçümün yakaladığı sessiz hata: headless `reduce`

Headless Chromium `prefers-reduced-motion: reduce` bildiriyor (gerçek kullanıcı tercihi değil).
Bu yüzden ilk ölçümde fx katmanı **hiç kurulmadı** ve `fxLayers` kırmızı oldu: `politika 4 · sahnede 0`.
Düzeltme: açık koşu `Emulation.setEmulatedMedia → no-preference` ile eziyor, `reduced` ayrı sayfada
`reduce` ile sınanıyor. **Tersi de doğru ve istenen:** gerçekten reduced-motion seçen kullanıcı
fx görmez — `fxReduced` bunu kalıcı olarak doğruluyor.

### 14.5 S11 — plandan bilinçli sapmalar

| # | Plan | Ne yapıldı | Gerekçe |
|---|---|---|---|
| 1 | 33 → 47 ölçüt | **33 → 38** | `fxStagger`, `fxShaderCompile`, `fxTextureMem`, `fxDrawcalls` (mevcut `calls` kapsıyor), `fxWebglOff` (mevcut `fallback*`) ya ölçülmüyor ya zaten kapsanıyor. Sahte ölçüt eklenmedi; eksikler §14.7'de |
| 2 | S8'de `impulse.ts` + `budget.ts` | **yazılmadı** | itki sönümü `settle()` + eşik eğrileriyle çözüldü (ayrı modül 3 satırlık sarmalayıcı olurdu); bütçe sabitleri `RINGS`/`HATCH_*` içinde tek yerde |
| 3 | S10'da "iki yeni arketip" | **yeni arketip yok** | fx aileleri mevcut 5 arketipin hepsinde çalışıyor (`verify:archetypes` 5/5). Yeni arketip = yeni içerik metni; bu turun konusu değil |
| 4 | FX6 tam tip motoru | **8 glif** (S E D F A I M N R 0–4) | Projede glif verisi/font-paketi yok (T8). Tanımsız karakter atlanır — bu bir monogram, tip motoru değil |
| 5 | FX4 dissolve modu | **yalnız hatch** | `04`'te mod `hatch-only`; dissolve'ı hiçbir stil açmıyor, yazılmadı |

### 14.6 `?fx=none`

Sahne `?fx=none` ile fx katmanı olmadan da açılır (ölçüm karşılaştırması ve kullanıcı kaçış yolu).
`prefers-reduced-motion: reduce` bunu otomatik yapar; `a11y.escapeHatch` yolu aynı kapıyı kullanır.

### 14.7 Açık iş (dürüst liste)

1. **Doku belleği ölçülmüyor.** Bütçe `4 MB` yazılı ama `renderer.info.memory` yalnız doku *sayısı*
   veriyor (şu an 1). Gerçek MB için `KHR_...` yok; ölçüt eklenmedi.
2. **Shader derleme süresi ölçülmüyor** (plan ölçüt 46). İlk kare mark'ı alınmadı.
3. **GLB/Draco boru hattı yok.** Motif prosedürel; `optimize-motif.mjs` hâlâ yazılmadı (S1 borcu).
4. **FX6 glif tablosu marka metnine bağlı.** Marka değişirse tanımsız harfler sessizce atlanır —
   `buildBrand()` bunu raporlamıyor. İstenirse `console` yasak olduğu için ölçütle kontrol edilmeli.
5. **Fizik/parallax/kamera aileleri bilinçli olarak yok** (§4.1) — katalog politikası bunları yasaklıyor.

_Sayı kaynakları: `kit/dist/motion.json` (151 stil, 609 yasak metni) · `kit/families.json` (22 bant) ·
`../stage-lab/README.md` (mevcut bütçe ve 33 ölçüt) · `docs/stage-lab-plani.md` (K1–K5, Ç1–Ç6).
Ölçüm komutları §2'de. Yazıldığı tarih: 2026-11-12. §13 ölçümleri `npm run verify` ve
`npm run verify:archetypes` çıktısından alındı._
