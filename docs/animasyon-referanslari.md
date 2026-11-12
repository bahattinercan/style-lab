# Animasyon referansları — 2025/26 ödüllü siteler ve katalog eşlemesi

> **Ne işe yarar:** "Güzel animasyonlu site" ilhamını ölçülebilir desene çevirir. Her satır: sitede
> gözlenen teknik → bizim desenimiz → hangi stille birlikte kullanılır → kopyalanabilir CSS.
> **Tek kaynak:** `kit/render/motion/patterns.json` · **Kapı:** `node kit/motion-check.mjs`
> **Kaynak tarihi:** 2026-11-09 · süre/eğri değerleri sitelerden ölçülmedi; katalog bütçesidir (playbook §6.2).

## 1 · Yöntem ve sınır

- Sitelerin **tekniği** Awwwards "Elements" etiketlerinden ve vaka yazılarından okundu (WebGL timeline,
  preloader, scroll-driven narrative, kinetic type, Lottie vb.). **Süre/eğri ölçülmedi**: ödüllü siteler
  minify'lı bundle ve WebGL sahne içeriyor; oradan milisaniye okumak yanıltıcı olur.
- Aşağıdaki değerler **bizim bütçemiz**: `enter ≤ 1.2s`, `scroll ≤ 1.2s`, `stagger × öğe + enter ≤ ~2s`
  (playbook §6.2). Referans, "hangi hareket" sorusunu yanıtlar; "kaç ms" sorusunu katalog token'ı yanıtlar.
- Politika dışı kalan desenler (özel imleç, yatay scroll hijack, çoklu marquee, flash) referans olarak
  yazılmadı: `kit/motion/policy.json` bunları üretimde yasaklıyor.

## 2 · Referans tablosu

| # | Site (stüdyo) | Yıl | Gözlenen hareket tekniği | Yığın (bildirilen) | Katalogdaki karşılığı |
|---|---|---|---|---|---|
| 1 | [Inkwell](https://inkwell.tech/) — SavoirFaire | 2025 | Kesintisiz scroll anlatısı; 3 perde, navigasyon yok, yalnız yol gösterici; fizik tabanlı sahne | Vue.js · OGL (WebGL) · RapierJS · GSAP ScrollTrigger + ScrollSmoother | `99-depth-parallax`, `03-editorial-design`, `39-ai-native-mesh` |
| 2 | [The Blue Desert](https://www.awwwards.com/the-blue-desert.html) — Adoratorio | 2025 | PDF raporunu veri hikâyesine çeviren iki anlatı; bilim-kurgu çerçevesi | WebGL + scroll | `136-speculative-scifi`, `142-quantum-lab`, `137-volumetric-data` |
| 3 | [OceanX 2025](https://www.awwwards.com/sites/oceanx-2025) — Unseen Studio | 2025 | WebGL timeline + giriş geçişi; 2 renkli palet üstünde tam ekran sahne | WebGL timeline | `145-zero-gravity`, `105-holographic-layer`, `137-volumetric-data` |
| 4 | [KODE Immersive](https://www.awwwards.com/sites/kode-immersive) — Malvah | 2025 | Preloader → sahne geçişi, imleç etkileşimli easter egg | WebGL | `22-cyberpunk`, `45-terminal-ui`, `144-virtual-engine` |
| 5 | [Unseen Studio 2025 Wrapped](https://www.awwwards.com/sites/unseen-studio-2025-wrapped) | 2025 | ASCII liquid sim + scroll timeline; yıl özeti | WebGL / shader | `100-fluid-simulation`, `102-moire-field`, `50-lab-instrument` |
| 6 | [Ponpon Mania](https://ponpon-mania.com/) — Patrick Heng & Justine Soulie | 2025 | Etkileşimle nefes alan çizgi roman; panel panel açılan kareler | ScrollTrigger · SplitText · WebGL | `123-comic-story`, `31-scrapbook`, `87-zine-collage` |
| 7 | [Mat Voyce](https://matvoyce.tv/) — Uncommon | 2025 | Kinetik tipografi: harf/kelime ölçeğinde sürekli hareket | ScrollTrigger · Observer · Three.js · React | `37-kinetic-type`, `96-kinetic-marquee`, `93-type-experiment` |
| 8 | [Stas Bondar](https://www.stabondar.com/) | 2025 | Çizgi çizimi + bölünmüş metin + scroll sahnesi | ScrollTrigger · DrawSVG · SplitText · Three.js | `93-type-experiment`, `28-surrealism`, `136-speculative-scifi` |
| 9 | [Aether 1](https://aether1.ai) — OFF+BRAND. | 2025 | SVG çizim + Flip ile durum geçişi, split metin | ScrollTrigger · DrawSVG · Flip · SplitText | `39-ai-native-mesh`, `12-aurora-ui`, `08-glassmorphism` |
| 10 | [Pantheon Media](http://www.pantheonmedia.com) — ToyFight | 2025 | Yumuşatılmış scroll + R3F sahne, split metin | ScrollTrigger · SplitText · Next.js · R3F · Drei · Lenis | `88-magazine-feature`, `03-editorial-design`, `137-volumetric-data` |
| 11 | [Phantom Land](https://www.phantom.land/) | 2025 | Özel eğri (CustomEase) ile marka imzası hareket | CustomEase · useGSAP · Three.js · React | `101-shadow-stage`, `28-surrealism`, `136-speculative-scifi` |
| 12 | [Aurel's Grand Theater](https://aurelienvigne.com) | 2025 | Yol (MotionPath) üzerinde sahne geçişi | ScrollTrigger · MotionPath · Vue.js · Three.js | `41-grand-tourer`, `26-art-deco`, `124-album-sleeve` |
| 13 | [ArtPill](https://www.awwwards.com/sites/artpill) — SILENCIO | 2025 | Sayfa geçişi + slayt + 3B nesne; yüksek kontrast | 3D · page transition | `118-sticker-sheet`, `15-acid-graphics`, `18-dopamine-ui` |
| 14 | [Hatom](https://www.awwwards.com/sites/hatom) — Immersive Garden | 2024 | Lottie ile işlevsel katman (süs değil, durum anlatımı) | Lottie · WebGL | `09-liquid-glass`, `12-aurora-ui`, `33-dark-academia` |
| 15 | [Cash App Design](https://design.cash.app/) — Index Studio | 2025 | Flip ile paylaşılan öğe geçişi, sürüklenebilir düzen | ScrollTrigger · Flip · Draggable | `05-bento-grid`, `110-kanban-flow`, `109-timeline-editor` |

**Ortak eksen (5 imza):** (1) scroll'a bağlı sahne ilerlemesi, (2) kinetik tipografi, (3) scroll hızına
tepki (eğim/uzama), (4) yapışkan kart yığını, (5) maske/klip ile açılan medya. İlk üçü bizim sözlükte
kısmen vardı; son ikisi ve hız tepkisi yoktu.

## 3 · Bu araştırmadan eklenen 4 desen

`kit/render/motion/patterns.json` → 16'dan **20 desene** (7 giriş · 9 scroll · 3 hover · 1 sayfa).
Hepsi `scroll` ekseninde: ödüllü sitelerin farkı girişte değil, **kaydırma boyunca** ortaya çıkıyor.

| Desen | Ne yapar | Özellik | Reduced | Atandığı stil (145) |
|---|---|---|---|---|
| `mask-wipe` | Medya soldan sağa `clip-path` ile açılır; `animation-timeline: view()` varsa scroll'a bağlanır | `clip-path` | `opacity` | 13 |
| `stack-pin` | Kartlar `position: sticky` ile üst üste yapışır, alta kalan 0.96'ya oturur | `transform`, `opacity` | `opacity` | 10 |
| `velocity-skew` | Kaydırma hızı `--ms-vel`'e yazılır; içerik hızla eğilir (−2deg…2deg), durunca doğrulur | `transform` | `instant` | 5 |
| `scroll-zoom` | Görsel 1.08 → 1 ölçeğine oturur, opaklık 0.55 → 1 | `transform`, `opacity` | `opacity` | 15 |

Atama deterministik: `node kit/assign-motion.mjs --apply` (aile + arketip + hash). Yeni desenler
arketip havuzlarına eklendi — `type` → `mask-wipe`/`velocity-skew`, `product` → `stack-pin`/`scroll-zoom`,
`fullbleed` → `mask-wipe`/`scroll-zoom`, `split-reverse` → `stack-pin`.

**Neden `weight-morph` (değişken font ekseni) yok:** gömülü 30 font ailesinin tamamı statik
(`kit/fonts/ttf`, `fvar` tablosu yok). `font-variation-settings` animasyonu eşleşen eksen bulamayınca
sıçrama yapar; "morph" iddiası yalan olurdu. Değişken font eklenirse desen olarak geri gelir.

**Neden `velocity-skew` JS istiyor:** hız CSS'te ifade edilemez. Desen yalnız `--ms-vel` okur;
değeri yazan taraf uygulamadır (lab demosu `velocity-skew` referans uygulama, 12 satır). Diğer üç desen
JS'siz çalışır.

## 4 · Kopyalanabilir reçeteler

Hepsi `kit/render/motion/patterns.css` içinde üretilir (elle düzenlenmez). Sınıf sözleşmesi:
`.ms` = scroll öğesi, `--ms-dur` / `--ms-ease` = stilin `motion.sequences.scroll` değerleri.

```css
/* mask-wipe — medya soldan açılır, scroll'a bağlanır (fallback: .is-in) */
[data-motion='mask-wipe'] .ms { clip-path: inset(0 100% 0 0); transition: clip-path var(--ms-dur) var(--ms-ease); }
[data-motion='mask-wipe'] .ms.is-in { clip-path: inset(0); }
@supports (animation-timeline: view()) {
  [data-motion='mask-wipe'] .ms {
    animation: mw-wipe linear both; animation-timeline: view(); animation-range: entry 10% cover 45%;
  }
}
@keyframes mw-wipe { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0); } }
```

```css
/* stack-pin — kart yığını; nth-child ile 12px'lik basamak, kimlik korunur */
[data-motion='stack-pin'] .ms { position: sticky; top: calc(var(--stack-top, 64px) + var(--stack-i, 0) * 12px); }
[data-motion='stack-pin'] .ms:nth-child(2) { --stack-i: 1; }
[data-motion='stack-pin'] .ms:nth-child(3) { --stack-i: 2; }
@supports (animation-timeline: view()) {
  [data-motion='stack-pin'] .ms {
    animation: sp-settle linear both; animation-timeline: view(); animation-range: entry 0% entry 70%;
  }
}
@keyframes sp-settle { from { transform: scale(.96); opacity: .82; } to { transform: none; opacity: 1; } }
```

```css
/* velocity-skew — değeri uygulama yazar: hız / 45, [-1, 1] aralığına kırpılır */
[data-motion='velocity-skew'] .ms {
  transform: skewY(calc(var(--ms-vel, 0) * 2deg)) translateY(calc(var(--ms-vel, 0) * -4px));
  will-change: transform;
}
```

```css
/* scroll-zoom — parallax'ın abartısız alternatifi; hero medyası ve büyük kart */
[data-motion='scroll-zoom'] .ms { transform: scale(1.08); opacity: .55; transition: transform var(--ms-dur) var(--ms-ease), opacity var(--ms-dur) var(--ms-ease); }
[data-motion='scroll-zoom'] .ms.is-in { transform: none; opacity: 1; }
@supports (animation-timeline: view()) {
  [data-motion='scroll-zoom'] .ms {
    animation: sz-settle linear both; animation-timeline: view(); animation-range: entry 0% cover 35%;
  }
}
@keyframes sz-settle { from { transform: scale(1.08); opacity: .55; } to { transform: none; opacity: 1; } }
```

`velocity-skew` referans uygulaması (lab demosundan, bağımlılıksız):

```js
const sc = document.querySelector('.sc');
const rows = document.querySelector('.rows');
let last = 0, vel = 0, raf = 0;
const decay = () => {
  raf = 0; vel *= 0.82;
  rows.style.setProperty('--ms-vel', Math.abs(vel) < 0.01 ? '0' : vel.toFixed(3));
  if (vel !== 0) raf = requestAnimationFrame(decay);
};
sc.addEventListener('scroll', () => {
  vel = Math.max(-1, Math.min(1, (sc.scrollTop - last) / 45));
  last = sc.scrollTop;
  if (!raf) raf = requestAnimationFrame(decay);
}, { passive: true });
```

## 5 · Erişilebilirlik ve politika

- Her dört desen `prefers-reduced-motion: reduce` altında durur; global ağ `kit/render/motion/patterns.css`
  sonunda: `transform/clip-path: none`, `opacity: 1`, geçiş 0.01ms. `velocity-skew` reduced'ta `instant`.
- `mask-wipe` ve `scroll-zoom` bilgi taşımaz (dekoratif); medya maskesiz de okunur. `stack-pin` yapışkan
  olsa da DOM sırası korunur, klavye odağı kaymaz.
- Üretimde hâlâ yasak: `custom-cursor`, `scroll-hijack`, `marquee-multi`, `flash-burst`
  ([`kit/motion/policy.json`](../kit/motion/policy.json)). Referans sitelerin bir kısmı bunları kullanıyor
  (yatay pin, özel imleç); katalog bunları yalnız laboratuvarda `teachingOnly` olarak sergiler.
- Süre bütçesi: `enter ≤ 1.2s`, `scroll ≤ 1.2s`. Ödüllü sitelerin uzun sinematik sahneleri bizde
  **parça** olarak yaşar: tek ekranda 2s'yi geçen, durdurulamayan hareket yok.

## 6 · Kaynaklar

| Kaynak | Ne için |
|---|---|
| [Awwwards — WebGL Animations koleksiyonu](https://www.awwwards.com/du-haihang/collections/webgl-animations/) | Sahne/geçiş etiketleriyle site listesi |
| [Awwwards — Inkwell vaka yazısı](https://www.awwwards.com/inkwell-a-scroll-driven-narrative-for-ais-most-stealth-player.html) | Scroll anlatısı, yığın (Vue + OGL + RapierJS) |
| [Awwwards — The Blue Desert](https://www.awwwards.com/the-blue-desert.html) | Veri hikâyesi, iki anlatı |
| [Awwwards — Ponpon Mania](https://www.awwwards.com/ponpon-mania-a-comic-that-breathes-through-web-interaction.html) | Etkileşimli çizgi roman |
| [Awwwards — KODE Immersive](https://www.awwwards.com/sites/kode-immersive) · [OceanX 2025](https://www.awwwards.com/sites/oceanx-2025) · [Unseen Studio 2025 Wrapped](https://www.awwwards.com/sites/unseen-studio-2025-wrapped) | Preloader, WebGL timeline, ASCII liquid sim |
| [GSAP SOTY 2025](https://gsap.com/SOTY-2025/) | 13 adayın yığını: ScrollTrigger, SplitText, Flip, MotionPath, CustomEase |
| [MotionKit — Web Animation Trends 2026](https://motionkit.io/blog/web-animation-trends-2026) | Scrollytelling, kinetik tipografi, native scroll-driven CSS, INP |
| [GSAP Vault — 162 örnek](https://gsapvault.com/blog/gsap-animation-examples) | Velocity skew / scroll velocity deseni |
| [Orpetron — Lottie örnekleri](https://orpetron.com/blog/10-cutting-edge-websites-showcasing-lottie-animation-at-its-finest/) | Lottie'nin işlevsel kullanımı (Hatom) |

## 7 · Kullanım

```bash
node kit/motion-audit.mjs                 # desen dağılımı: dist/motion.md
node kit/build-motion-lab.mjs             # lab: kit/motion-lab.html (45 kalıp)
node kit/assign-motion.mjs --apply        # yeni desenleri 145 stile yeniden dağıt
bash kit/gates.sh                         # tüm kapılar
```

Bir stile bu desenlerden birini vermek için `tokens.json → motion.choreography.scroll` alanını değiştirme;
`archetypes.json` havuzuna ekle, `assign-motion --apply` çalıştır. Elle yazım `--check` kapısında drift olur.
