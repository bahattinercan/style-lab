# Hareket ölçüm raporu

Üretim: `node kit/motion-audit.mjs` · kaynak: `kit/dist/motion.json` + `styles/*/tokens.json` + `kit/motion/`

> Neden: imza **sayıda** farklı olabilir, **desende** aynı olabilir. Bu rapor ikincisini ölçer.
> Hedef (M1): aile başına ≥3 farklı `enter` deseni, tek desen ≤%30, arketip ↔ desen kuralı (durum: §1).
> M1 sonrası desenler `tokens.json → motion.choreography` alanından okunur (sayıdan sınıflama yalnız geriye dönük).

## 1 · Özet

| Ölçü | Değer | Hedef / not |
|---|---|---|
| Stil | 151 | — |
| Farklı hareket parmak izi (enter\|scroll\|hover) | **78** | M1 sonrası ≥ 10 |
| En kalabalık parmak izi | `fade-rise|reveal|scale` = 8 (%5) | ≤ %30 |
| Sekans türü kombinasyonu | 4 | `enter+scroll+pin+hover` baskın |
| `properties` = yalnız opacity+transform | 81/151 (%54) | kalan stiller fade/reveal ailesi (mask/blur/counter desenleri clip/filter kullanıyor) |
| `scroll` = reveal | 31/151 (%21) | M1 sonrası scrub/grid/parallax/counter çeşitlendi |
| Farklı normalize eğri | 101 (motion.json: 113 curve · 11 yaklaşık · 30 steps) | — |
| Lab demosu | 45 | desen ↔ demo bağı: `kit/render/motion/lab-bindings.json` (M5, demo süreleri M5b) |
| Doküman iddiası sorunu | 0 | elle yazılmış sayı = drift |
| `motion.choreography` kapsamı | 151/151 | M1: 145/145 |

## 2 · Giriş (enter) deseni

| Desen | Stil | Pay |
|---|---|---|
| `fade-rise` | 32 | %21 |
| `blur-in` | 26 | %17 |
| `line-mask` | 23 | %15 |
| `clip-curtain` | 23 | %15 |
| `scale-settle` | 23 | %15 |
| `letter-stagger` | 14 | %9 |
| `split-slide` | 10 | %7 |

## 3 · Scroll deseni

| Desen | Stil | Pay |
|---|---|---|
| `reveal` | 31 | %21 |
| `counter` | 22 | %15 |
| `parallax` | 21 | %14 |
| `grid-stagger` | 20 | %13 |
| `scroll-zoom` | 15 | %10 |
| `mask-wipe` | 13 | %9 |
| `pin-scrub` | 13 | %9 |
| `stack-pin` | 10 | %7 |
| `velocity-skew` | 6 | %4 |

## 4 · Hover deseni

| Desen | Stil | Pay |
|---|---|---|
| `scale` | 82 | %54 |
| `underline-draw` | 61 | %40 |
| `tilt-3d` | 8 | %5 |

## 5 · Parmak izleri

| enter|scroll|hover | Stil | Pay |
|---|---|---|
| `fade-rise|reveal|scale` | 8 | %5 |
| `blur-in|reveal|underline-draw` | 5 | %3 |
| `line-mask|reveal|scale` | 5 | %3 |
| `fade-rise|parallax|underline-draw` | 5 | %3 |
| `line-mask|counter|scale` | 4 | %3 |
| `scale-settle|grid-stagger|scale` | 4 | %3 |
| `scale-settle|scroll-zoom|scale` | 4 | %3 |
| `line-mask|velocity-skew|scale` | 3 | %2 |
| `fade-rise|counter|underline-draw` | 3 | %2 |
| `clip-curtain|counter|scale` | 3 | %2 |
| `split-slide|grid-stagger|scale` | 3 | %2 |
| `clip-curtain|stack-pin|scale` | 3 | %2 |
| `clip-curtain|parallax|scale` | 3 | %2 |
| `fade-rise|grid-stagger|scale` | 3 | %2 |
| `blur-in|mask-wipe|underline-draw` | 3 | %2 |
| `clip-curtain|mask-wipe|underline-draw` | 2 | %1 |
| `fade-rise|scroll-zoom|underline-draw` | 2 | %1 |
| `scale-settle|reveal|scale` | 2 | %1 |
| `blur-in|counter|underline-draw` | 2 | %1 |
| `blur-in|counter|scale` | 2 | %1 |
| `split-slide|parallax|underline-draw` | 2 | %1 |
| `clip-curtain|reveal|underline-draw` | 2 | %1 |
| `letter-stagger|reveal|underline-draw` | 2 | %1 |
| `fade-rise|mask-wipe|scale` | 2 | %1 |
| `line-mask|counter|underline-draw` | 2 | %1 |
| `blur-in|mask-wipe|scale` | 2 | %1 |
| `line-mask|velocity-skew|underline-draw` | 2 | %1 |
| `blur-in|parallax|scale` | 2 | %1 |
| `blur-in|pin-scrub|underline-draw` | 2 | %1 |
| `blur-in|grid-stagger|scale` | 2 | %1 |
| `scale-settle|stack-pin|scale` | 2 | %1 |
| `fade-rise|counter|scale` | 2 | %1 |
| `scale-settle|counter|scale` | 2 | %1 |
| `fade-rise|parallax|scale` | 2 | %1 |
| `line-mask|scroll-zoom|underline-draw` | 2 | %1 |
| `clip-curtain|reveal|scale` | 2 | %1 |
| `clip-curtain|scroll-zoom|underline-draw` | 2 | %1 |
| `line-mask|mask-wipe|scale` | 2 | %1 |
| `letter-stagger|grid-stagger|underline-draw` | 2 | %1 |
| `letter-stagger|pin-scrub|underline-draw` | 2 | %1 |
| `blur-in|pin-scrub|scale` | 2 | %1 |
| `clip-curtain|pin-scrub|scale` | 2 | %1 |
| `scale-settle|scroll-zoom|underline-draw` | 2 | %1 |
| `letter-stagger|grid-stagger|scale` | 2 | %1 |
| `fade-rise|stack-pin|underline-draw` | 1 | %1 |
| `blur-in|scroll-zoom|scale` | 1 | %1 |
| `split-slide|stack-pin|underline-draw` | 1 | %1 |
| `clip-curtain|grid-stagger|underline-draw` | 1 | %1 |
| `clip-curtain|parallax|underline-draw` | 1 | %1 |
| `letter-stagger|parallax|scale` | 1 | %1 |
| `clip-curtain|pin-scrub|underline-draw` | 1 | %1 |
| `fade-rise|reveal|underline-draw` | 1 | %1 |
| `line-mask|pin-scrub|underline-draw` | 1 | %1 |
| `scale-settle|grid-stagger|underline-draw` | 1 | %1 |
| `scale-settle|stack-pin|underline-draw` | 1 | %1 |
| `letter-stagger|mask-wipe|underline-draw` | 1 | %1 |
| `line-mask|parallax|underline-draw` | 1 | %1 |
| `fade-rise|scroll-zoom|scale` | 1 | %1 |
| `letter-stagger|pin-scrub|scale` | 1 | %1 |
| `split-slide|counter|scale` | 1 | %1 |
| `fade-rise|pin-scrub|scale` | 1 | %1 |
| `fade-rise|pin-scrub|underline-draw` | 1 | %1 |
| `split-slide|stack-pin|tilt-3d` | 1 | %1 |
| `split-slide|parallax|scale` | 1 | %1 |
| `letter-stagger|reveal|scale` | 1 | %1 |
| `letter-stagger|grid-stagger|tilt-3d` | 1 | %1 |
| `split-slide|parallax|tilt-3d` | 1 | %1 |
| `line-mask|reveal|underline-draw` | 1 | %1 |
| `blur-in|scroll-zoom|underline-draw` | 1 | %1 |
| `scale-settle|reveal|tilt-3d` | 1 | %1 |
| `scale-settle|grid-stagger|tilt-3d` | 1 | %1 |
| `blur-in|stack-pin|scale` | 1 | %1 |
| `scale-settle|mask-wipe|underline-draw` | 1 | %1 |
| `blur-in|parallax|underline-draw` | 1 | %1 |
| `clip-curtain|reveal|tilt-3d` | 1 | %1 |
| `scale-settle|parallax|tilt-3d` | 1 | %1 |
| `scale-settle|counter|tilt-3d` | 1 | %1 |
| `letter-stagger|velocity-skew|underline-draw` | 1 | %1 |

## 6 · Arketip × pin

| Hero arketipi | Stil | pin açık | pay |
|---|---|---|---|
| `split` | 42 | 21 | %50 |
| `product` | 24 | 8 | %33 |
| `split-reverse` | 19 | 2 | %11 |
| `fullbleed` | 18 | 10 | %56 |
| `type` | 15 | 1 | %7 |
| `sticky` | 13 | 8 | %62 |
| `centered` | 12 | 0 | %0 |
| `index` | 8 | 2 | %25 |

M2 kuralı bu tabloyu zorunlu kılacak: `sticky` ⇒ pin/scrub, `type` ⇒ line-mask, `index` ⇒ grid-stagger.

## 7 · Süre imzası (enter)

| Süre | Stil |
|---|---|
| 300 ms | 6 |
| 900 ms | 5 |
| 280 ms | 5 |
| 700 ms | 4 |
| 340 ms | 4 |
| 420 ms | 4 |
| 360 ms | 4 |
| 1100 ms | 4 |
| 440 ms | 4 |
| 620 ms | 4 |
| 880 ms | 4 |
| 500 ms | 3 |
| … 61 farklı değer daha | |

## 8 · Laboratuvar ↔ politika

Politika: `kit/motion/policy.json` — 4 yasak, 7 teachingOnly kaydı.

| Yasak desen | Lab demosu | Durum |
|---|---|---|
| `custom-cursor` | `cursor-blend` | teachingOnly ✓ |
| `custom-cursor` | `gooey-hover` | teachingOnly ✓ |
| `custom-cursor` | `image-trail` | teachingOnly ✓ |
| `scroll-hijack` | `horizontal-pin` | teachingOnly ✓ |
| `scroll-hijack` | `snap-gallery` | teachingOnly ✓ |
| `marquee-multi` | `kinetic-marquee` | teachingOnly ✓ |
| `flash-burst` | `confetti-burst` | teachingOnly ✓ |

Kapı: `node kit/build-motion-lab.mjs --check` (yasak desen sergileniyorsa gerekçe zorunlu).

## 9 · Doküman iddiaları

- ✓ elle yazılmış eğri/sayı iddiası yok, playbook politikayı işaret ediyor.

## 10 · M1 için kabul ölçütleri

1. `tokens.json → motion.choreography` (enter/scroll/hover/page/reduced) 145/145.
2. Aile başına ≥3 farklı `enter.pattern`; tek desen ≤%30 stil; her desen ≥3 stilde canlı.
3. Parmak izi sayısı ≥10; `opacity+transform` tekeli kırıldı (mask/clip/blur/stagger desenleri).
4. Aile ↔ desen uyumu: `Sade` ailesinde `tilt-3d`/`magnetic` hata; `Retro`da `steps/glitch` serbest.
5. `kit/motion-check.mjs --self-test` bu kuralları sentetik ihlallerle kanıtlar.
