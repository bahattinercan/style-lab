# Flutter çıktısı (style-lab)

GENERATED — `node kit/export/flutter.mjs` · 151 stil · 30 gömülü font ailesi

## 1 · Dosyaları projeye al

```bash
cp kit/dist/flutter/style_lab_tokens.dart lib/theme/
```

`pubspec.yaml` içine `pubspec.fonts.yaml` bölümünü ekle ve TTF'leri
`kit/fonts/ttf/` altından `assets/fonts/` klasörüne kopyala.

## 2 · Temayı kur

```dart
import 'theme/style_lab_tokens.dart';

MaterialApp(
  theme: styleLabTheme(slug: 'terminal-ui'),
  darkTheme: styleLabTheme(slug: 'terminal-ui', brightness: Brightness.dark),
  themeMode: ThemeMode.system,
  home: const HomePage(),
);
```

## 3 · Token'ları oku

```dart
final t = context.styleLab;                 // StyleLabTokens
Container(
  color: t.surface,
  padding: t.padding(3),                    // --space-3
  decoration: BoxDecoration(
    borderRadius: BorderRadius.circular(t.radiusLg),
    border: Border.all(color: t.line),
    boxShadow: t.shadow,
  ),
  child: Text('Başlık', style: t.h2),
);
```

## 4 · Hareket imzası

```dart
final m = context.styleLab.motion;
AnimatedSlide(
  duration: m.enterDurationValue,
  curve: m.enterCurve,
  offset: Offset(0, m.enterOffsetY / 100),
  child: child,
);
```

`MediaQuery.disableAnimations` açıksa süreyi `StyleLabTokens.reducedDuration`'a düşür
(CSS `prefers-reduced-motion` karşılığı).

## 5 · Fontlar

Gömülü (TTF, `kit/fonts/ttf/` → `assets/fonts/`):

- Anton
- Architects Daughter
- Archivo Black
- Baloo 2
- Caveat
- Chakra Petch
- Cinzel
- Cormorant Garamond
- Courier Prime
- EB Garamond
- Fraunces
- IBM Plex Mono
- Inter
- JetBrains Mono
- Jost
- Kalam
- Lora
- Michroma
- Nunito
- Nunito Sans
- Playfair Display
- Poiret One
- Poppins
- Press Start 2P
- Rajdhani
- Share Tech Mono
- Silkscreen
- Space Grotesk
- Space Mono
- VT323

Paketlenmeyen sistem fontları (cihazda varsa kullanılır, yoksa platform varsayılanı):

- Archivo Expanded
- Consolas
- Courier New
- Geist
- Helvetica Neue
- Menlo
- Outrun
- SF Mono
- SF Pro Display
- SF Pro Text
- Segoe UI



Font ağırlığı Google Fonts'ta yoksa (ör. Anton yalnız 400) Flutter en yakın bildirilen
ağırlığa düşer; `pubspec.fonts.yaml` yalnız gerçekten indirilen dosyaları listeler.

## Notlar

- Koyu mod yalnız paleti değiştirir (`styleLabDark`), tipografi/şekil/hareket aynıdır.
- İç gölge (inset) `BoxShadow`'da yok: 10 kayıtta metin olarak durur.
- `--blur`, `--grain`, `--data-1…4` Dart çıktısında yok (cam/doku katmanı hedefe özgü kurulur).
