// GENERATED DOSYA — elle düzenlenmez.
// Kaynak: styles/*/tokens.json + kit/dist/motion.json
// Üretim: node kit/export/flutter.mjs
// Doğrulama: node kit/export/flutter.mjs --verify (dart analyze + flutter test)
//
// Kapsam: 151 stil (açık + koyu). Koyu mod yalnız paleti değiştirir.
// Eksik ölçek değerleri formülle tamamlanır (10 stil): h1 = h2×1.6,
// h3 = body×1.25, small = body×0.875, h1Mobile = h1×0.62.
// İç gölge (inset) Flutter BoxShadow'da yok; `insetNotes` alanında metin olarak durur.

import 'dart:ui' show lerpDouble;

import 'package:flutter/material.dart';

/// Bir stilin rengi. CSS sözleşmesindeki 10 rengin karşılığı.
@immutable
class StyleLabPalette {
  const StyleLabPalette({
    required this.bg,
    required this.bg2,
    required this.surface,
    required this.surface2,
    required this.ink,
    required this.inkSoft,
    required this.inkFaint,
    required this.accent,
    required this.accentInk,
    required this.line,
  });

  final Color bg;
  final Color bg2;
  final Color surface;
  final Color surface2;
  final Color ink;
  final Color inkSoft;
  final Color inkFaint;
  final Color accent;
  final Color accentInk;
  final Color line;

  static StyleLabPalette lerp(StyleLabPalette a, StyleLabPalette b, double t) => StyleLabPalette(
        bg: Color.lerp(a.bg, b.bg, t)!,
        bg2: Color.lerp(a.bg2, b.bg2, t)!,
        surface: Color.lerp(a.surface, b.surface, t)!,
        surface2: Color.lerp(a.surface2, b.surface2, t)!,
        ink: Color.lerp(a.ink, b.ink, t)!,
        inkSoft: Color.lerp(a.inkSoft, b.inkSoft, t)!,
        inkFaint: Color.lerp(a.inkFaint, b.inkFaint, t)!,
        accent: Color.lerp(a.accent, b.accent, t)!,
        accentInk: Color.lerp(a.accentInk, b.accentInk, t)!,
        line: Color.lerp(a.line, b.line, t)!,
      );
}

/// Tipografi: ölçek (px), ağırlık, satır yüksekliği ve harf aralığı (em).
/// `TextStyle` üretimi [StyleLabTokens] getter'larında yapılır; letterSpacing px'e çevrilir.
@immutable
class StyleLabType {
  const StyleLabType({
    required this.fontDisplay,
    required this.fontBody,
    required this.fontMono,
    required this.label,
    required this.caption,
    required this.small,
    required this.body,
    required this.h3,
    required this.h2,
    required this.h1,
    required this.h1Mobile,
    required this.bodyWeight,
    required this.strongWeight,
    required this.displayWeight,
    required this.displayHeight,
    required this.headingHeight,
    required this.bodyHeight,
    required this.displayTracking,
    required this.headingTracking,
    required this.bodyTracking,
    required this.labelTracking,
  });

  final String fontDisplay;
  final String fontBody;
  final String fontMono;
  final double label;
  final double caption;
  final double small;
  final double body;
  final double h3;
  final double h2;
  final double h1;
  final double h1Mobile;
  final int bodyWeight;
  final int strongWeight;
  final int displayWeight;
  final double displayHeight;
  final double headingHeight;
  final double bodyHeight;
  final double displayTracking;
  final double headingTracking;
  final double bodyTracking;
  final double labelTracking;

  static StyleLabType lerp(StyleLabType a, StyleLabType b, double t) => t < 0.5 ? a : b;
}

/// Hareket imzası: süreler ms, eğri [Curve], değerler doğrudan kullanılır.
@immutable
class StyleLabMotion {
  const StyleLabMotion({
    required this.fast,
    required this.base,
    required this.slow,
    required this.curve,
    required this.enterDuration,
    required this.enterCurve,
    required this.enterOffsetY,
    required this.enterStagger,
    required this.scrollDuration,
    required this.scrollOffsetY,
    required this.scrollTriggerPercent,
    required this.scrollOnce,
    required this.hoverDuration,
    required this.hoverImageScale,
    required this.pinEnabled,
    required this.pinScrub,
  });

  final int fast;
  final int base;
  final int slow;
  final Curve curve;
  final int enterDuration;
  final Curve enterCurve;
  final double enterOffsetY;
  final double enterStagger;
  final int scrollDuration;
  final double scrollOffsetY;
  final double scrollTriggerPercent;
  final bool scrollOnce;
  final int hoverDuration;
  final double hoverImageScale;
  final bool pinEnabled;
  final double? pinScrub;

  Duration get fastDuration => Duration(milliseconds: fast);
  Duration get baseDuration => Duration(milliseconds: base);
  Duration get slowDuration => Duration(milliseconds: slow);
  Duration get enterDurationValue => Duration(milliseconds: enterDuration);
  Duration get scrollDurationValue => Duration(milliseconds: scrollDuration);
  Duration get hoverDurationValue => Duration(milliseconds: hoverDuration);

  static StyleLabMotion lerp(StyleLabMotion a, StyleLabMotion b, double t) => t < 0.5 ? a : b;
}

/// Kademeli (steps) eğrisi — CSS `steps(n, end|start)` karşılığı.
class StyleLabSteps extends Curve {
  const StyleLabSteps(this.steps, {this.jumpStart = false});

  final int steps;
  final bool jumpStart;

  @override
  double transformInternal(double t) {
    if (steps <= 1) return t >= 1 ? 1 : 0;
    final scaled = t * steps;
    final value = jumpStart ? scaled.ceilToDouble() : scaled.floorToDouble();
    return (value / steps).clamp(0.0, 1.0);
  }
}

/// Bir stilin tamamı: palet + şekil + tipografi + boşluk + hareket.
@immutable
class StyleLabTokens extends ThemeExtension<StyleLabTokens> {
  const StyleLabTokens({
    required this.slug,
    required this.num,
    required this.name,
    required this.family,
    required this.palette,
    required this.radius,
    required this.radiusLg,
    required this.shadow,
    required this.shadowHard,
    required this.spacing,
    required this.typography,
    required this.motion,
  });

  final String slug;
  final String num;
  final String name;
  final String family;
  final StyleLabPalette palette;
  final double radius;
  final double radiusLg;
  final List<BoxShadow> shadow;
  final List<BoxShadow> shadowHard;
  final List<double> spacing;
  final StyleLabType typography;
  final StyleLabMotion motion;

  Color get bg => palette.bg;
  Color get bg2 => palette.bg2;
  Color get surface => palette.surface;
  Color get surface2 => palette.surface2;
  Color get ink => palette.ink;
  Color get inkSoft => palette.inkSoft;
  Color get inkFaint => palette.inkFaint;
  Color get accent => palette.accent;
  Color get accentInk => palette.accentInk;
  Color get line => palette.line;

  double space(int step) => spacing[(step - 1).clamp(0, spacing.length - 1)];
  EdgeInsets padding(int step) => EdgeInsets.all(space(step));

  FontWeight get _bodyWeight => FontWeight.values[(typography.bodyWeight ~/ 100 - 1).clamp(0, 8)];
  FontWeight get _strongWeight => FontWeight.values[(typography.strongWeight ~/ 100 - 1).clamp(0, 8)];
  FontWeight get _displayWeight => FontWeight.values[(typography.displayWeight ~/ 100 - 1).clamp(0, 8)];

  TextStyle _style({
    required double size,
    required String family,
    required FontWeight weight,
    required double height,
    required double tracking,
    Color? color,
  }) =>
      TextStyle(
        fontFamily: family,
        fontSize: size,
        fontWeight: weight,
        height: height,
        letterSpacing: tracking * size,
        color: color ?? ink,
      );

  TextStyle get h1 => _style(size: typography.h1, family: typography.fontDisplay, weight: _displayWeight, height: typography.displayHeight, tracking: typography.displayTracking);
  TextStyle get h2 => _style(size: typography.h2, family: typography.fontDisplay, weight: _displayWeight, height: typography.headingHeight, tracking: typography.headingTracking);
  TextStyle get h3 => _style(size: typography.h3, family: typography.fontDisplay, weight: _strongWeight, height: typography.headingHeight, tracking: typography.headingTracking);
  TextStyle get body => _style(size: typography.body, family: typography.fontBody, weight: _bodyWeight, height: typography.bodyHeight, tracking: typography.bodyTracking);
  TextStyle get bodyStrong => _style(size: typography.body, family: typography.fontBody, weight: _strongWeight, height: typography.bodyHeight, tracking: typography.bodyTracking);
  TextStyle get small => _style(size: typography.small, family: typography.fontBody, weight: _bodyWeight, height: typography.bodyHeight, tracking: typography.bodyTracking);
  TextStyle get caption => _style(size: typography.caption, family: typography.fontBody, weight: _bodyWeight, height: typography.bodyHeight, tracking: typography.labelTracking, color: inkSoft);
  TextStyle get label => _style(size: typography.label, family: typography.fontMono, weight: _bodyWeight, height: typography.bodyHeight, tracking: typography.labelTracking, color: inkSoft);
  TextStyle get mono => _style(size: typography.small, family: typography.fontMono, weight: _bodyWeight, height: typography.bodyHeight, tracking: typography.bodyTracking);

  /// Motion'ın azaltılmış karşılığı: süre 0, hedef anında değişir (CSS `reduced` sözleşmesi).
  static const Duration reducedDuration = Duration(milliseconds: 1);

  TextTheme get textTheme => TextTheme(
        displayLarge: h1,
        displayMedium: h2,
        headlineSmall: h3,
        titleMedium: bodyStrong,
        bodyLarge: body,
        bodyMedium: small,
        bodySmall: caption,
        labelLarge: bodyStrong,
        labelSmall: label,
      );

  @override
  StyleLabTokens copyWith({
    StyleLabPalette? palette,
    double? radius,
    double? radiusLg,
    List<BoxShadow>? shadow,
    List<BoxShadow>? shadowHard,
    List<double>? spacing,
    StyleLabType? typography,
    StyleLabMotion? motion,
  }) =>
      StyleLabTokens(
        slug: slug,
        num: num,
        name: name,
        family: family,
        palette: palette ?? this.palette,
        radius: radius ?? this.radius,
        radiusLg: radiusLg ?? this.radiusLg,
        shadow: shadow ?? this.shadow,
        shadowHard: shadowHard ?? this.shadowHard,
        spacing: spacing ?? this.spacing,
        typography: typography ?? this.typography,
        motion: motion ?? this.motion,
      );

  @override
  StyleLabTokens lerp(ThemeExtension<StyleLabTokens>? other, double t) {
    if (other is! StyleLabTokens) return this;
    return StyleLabTokens(
      slug: slug,
      num: num,
      name: name,
      family: family,
      palette: StyleLabPalette.lerp(palette, other.palette, t),
      radius: lerpDouble(radius, other.radius, t)!,
      radiusLg: lerpDouble(radiusLg, other.radiusLg, t)!,
      shadow: t < 0.5 ? shadow : other.shadow,
      shadowHard: t < 0.5 ? shadowHard : other.shadowHard,
      spacing: t < 0.5 ? spacing : other.spacing,
      typography: StyleLabType.lerp(typography, other.typography, t),
      motion: StyleLabMotion.lerp(motion, other.motion, t),
    );
  }

  /// Bu token setinden Material teması üretir.
  ThemeData toThemeData({Brightness brightness = Brightness.light}) => ThemeData(
        useMaterial3: true,
        brightness: brightness,
        scaffoldBackgroundColor: bg,
        canvasColor: bg2,
        cardColor: surface,
        dividerColor: line,
        disabledColor: inkFaint,
        colorScheme: ColorScheme(
          brightness: brightness,
          primary: accent,
          onPrimary: accentInk,
          secondary: accent,
          onSecondary: accentInk,
          error: const Color(0xFFB3261E),
          onError: const Color(0xFFFFFFFF),
          surface: surface,
          onSurface: ink,
        ),
        textTheme: textTheme.apply(bodyColor: ink, displayColor: ink),
        cardTheme: CardThemeData(
          color: surface,
          elevation: 0,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radiusLg), side: BorderSide(color: line)),
        ),
        filledButtonTheme: FilledButtonThemeData(
          style: FilledButton.styleFrom(
            backgroundColor: accent,
            foregroundColor: accentInk,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(radius)),
          ),
        ),
        inputDecorationTheme: InputDecorationTheme(
          filled: true,
          fillColor: surface,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(radius), borderSide: BorderSide(color: line)),
          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(radius), borderSide: BorderSide(color: line)),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(radius), borderSide: BorderSide(color: accent, width: 2)),
        ),
        extensions: <ThemeExtension<dynamic>>[this],
      );
}

/// Stil adıyla tema üretir (koyu için `brightness: Brightness.dark`).
ThemeData styleLabTheme({required String slug, Brightness brightness = Brightness.light}) {
  final tokens = brightness == Brightness.dark ? styleLabDark[slug] : styleLabLight[slug];
  if (tokens == null) {
    throw ArgumentError('style-lab: bilinmeyen stil "$slug" (${styleLabLight.length} stil var)');
  }
  return tokens.toThemeData(brightness: brightness);
}

extension StyleLabContext on BuildContext {
  /// `Theme.of(context).extension<StyleLabTokens>()` kısayolu.
  StyleLabTokens get styleLab => Theme.of(this).extension<StyleLabTokens>()!;
}

// ---- eğriler (110 farklı) ----
// cubic-bezier(0.2,0.6,0.2,1)
const Curve _curveCubic1 = Cubic(0.2, 0.6, 0.2, 1.0);
// cubic-bezier(0.2,0.7,0.2,1)
const Curve _curveCubic2 = Cubic(0.2, 0.7, 0.2, 1.0);
// cubic-bezier(0.3,0.7,0.3,1)
const Curve _curveCubic3 = Cubic(0.3, 0.7, 0.3, 1.0);
// cubic-bezier(0.3,0.6,0.3,1)
const Curve _curveCubic4 = Cubic(0.3, 0.6, 0.3, 1.0);
// cubic-bezier(0.34,1.4,0.64,1)
const Curve _curveCubic5 = Cubic(0.34, 1.4, 0.64, 1.0);
// cubic-bezier(0.165,0.84,0.44,1)
const Curve _curveCubic6 = Cubic(0.165, 0.84, 0.44, 1.0);
// cubic-bezier(0.23,1,0.32,1)
const Curve _curveCubic7 = Cubic(0.23, 1.0, 0.32, 1.0);
// cubic-bezier(0.22,0.9,0.24,1)
const Curve _curveCubic8 = Cubic(0.22, 0.9, 0.24, 1.0);
// cubic-bezier(0.4,0.05,0.25,1)
const Curve _curveCubic9 = Cubic(0.4, 0.05, 0.25, 1.0);
// cubic-bezier(0.37,0,0.63,1)
const Curve _curveCubic10 = Cubic(0.37, 0.0, 0.63, 1.0);
// cubic-bezier(0.15,0.8,0.3,1)
const Curve _curveCubic11 = Cubic(0.15, 0.8, 0.3, 1.0);
// steps(4, end)
const Curve _curveSteps12 = StyleLabSteps(4);
// cubic-bezier(0.32,0.06,0.2,1)
const Curve _curveCubic13 = Cubic(0.32, 0.06, 0.2, 1.0);
// cubic-bezier(0.2,0.9,0.3,1)
const Curve _curveCubic14 = Cubic(0.2, 0.9, 0.3, 1.0);
// cubic-bezier(0.16,0.9,0.24,1)
const Curve _curveCubic15 = Cubic(0.16, 0.9, 0.24, 1.0);
// cubic-bezier(0.05,0.9,0.1,1)
const Curve _curveCubic16 = Cubic(0.05, 0.9, 0.1, 1.0);
// cubic-bezier(0.45,0.08,0.25,1)
const Curve _curveCubic17 = Cubic(0.45, 0.08, 0.25, 1.0);
// cubic-bezier(0.34,1.328,0.64,1)
const Curve _curveCubic18 = Cubic(0.34, 1.328, 0.64, 1.0);
// cubic-bezier(0.3,0.4,0.2,1)
const Curve _curveCubic19 = Cubic(0.3, 0.4, 0.2, 1.0);
// cubic-bezier(0.25,0.8,0.3,1)
const Curve _curveCubic20 = Cubic(0.25, 0.8, 0.3, 1.0);
// cubic-bezier(0.33,0,0.12,1)
const Curve _curveCubic21 = Cubic(0.33, 0.0, 0.12, 1.0);
// cubic-bezier(0.2,0.9,0.2,1)
const Curve _curveCubic22 = Cubic(0.2, 0.9, 0.2, 1.0);
// cubic-bezier(0.34,1.16,0.64,1)
const Curve _curveCubic23 = Cubic(0.34, 1.16, 0.64, 1.0);
// cubic-bezier(0.34,1.574,0.64,1)
const Curve _curveCubic24 = Cubic(0.34, 1.574, 0.64, 1.0);
// cubic-bezier(0.34,1.56,0.64,1)
const Curve _curveCubic25 = Cubic(0.34, 1.56, 0.64, 1.0);
// cubic-bezier(0.34,1.82,0.64,1)
const Curve _curveCubic26 = Cubic(0.34, 1.82, 0.64, 1.0);
// cubic-bezier(0.39,0.575,0.565,1)
const Curve _curveCubic27 = Cubic(0.39, 0.575, 0.565, 1.0);
// cubic-bezier(0.4,0.1,0.3,1)
const Curve _curveCubic28 = Cubic(0.4, 0.1, 0.3, 1.0);
// cubic-bezier(0.34,1.42,0.4,1)
const Curve _curveCubic29 = Cubic(0.34, 1.42, 0.4, 1.0);
// steps(3, end)
const Curve _curveSteps30 = StyleLabSteps(3);
// cubic-bezier(0.4,0.05,0.2,1)
const Curve _curveCubic31 = Cubic(0.4, 0.05, 0.2, 1.0);
// cubic-bezier(0.9,0,0.1,1)
const Curve _curveCubic32 = Cubic(0.9, 0.0, 0.1, 1.0);
// cubic-bezier(0.18,0.72,0.22,1)
const Curve _curveCubic33 = Cubic(0.18, 0.72, 0.22, 1.0);
// cubic-bezier(0.46,0.03,0.24,1)
const Curve _curveCubic34 = Cubic(0.46, 0.03, 0.24, 1.0);
// cubic-bezier(0.52,0.04,0.3,1)
const Curve _curveCubic35 = Cubic(0.52, 0.04, 0.3, 1.0);
// cubic-bezier(0.12,0.75,0.24,1)
const Curve _curveCubic36 = Cubic(0.12, 0.75, 0.24, 1.0);
// cubic-bezier(0.66,0.02,0.3,1)
const Curve _curveCubic37 = Cubic(0.66, 0.02, 0.3, 1.0);
// cubic-bezier(0.16,0.84,0.44,1)
const Curve _curveCubic38 = Cubic(0.16, 0.84, 0.44, 1.0);
// cubic-bezier(0.22,0.72,0.24,1)
const Curve _curveCubic39 = Cubic(0.22, 0.72, 0.24, 1.0);
// cubic-bezier(0.7,0,0.3,1)
const Curve _curveCubic40 = Cubic(0.7, 0.0, 0.3, 1.0);
// cubic-bezier(0.5,0.02,0.3,1)
const Curve _curveCubic41 = Cubic(0.5, 0.02, 0.3, 1.0);
// cubic-bezier(0.34,1.3,0.64,1)
const Curve _curveCubic42 = Cubic(0.34, 1.3, 0.64, 1.0);
// cubic-bezier(0.58,0.02,0.34,1)
const Curve _curveCubic43 = Cubic(0.58, 0.02, 0.34, 1.0);
// cubic-bezier(0.24,0.02,0.18,1)
const Curve _curveCubic44 = Cubic(0.24, 0.02, 0.18, 1.0);
// cubic-bezier(0.72,0.04,0.2,1)
const Curve _curveCubic45 = Cubic(0.72, 0.04, 0.2, 1.0);
// cubic-bezier(0.44,0.16,0.3,1)
const Curve _curveCubic46 = Cubic(0.44, 0.16, 0.3, 1.0);
// cubic-bezier(0.62,0.06,0.28,0.98)
const Curve _curveCubic47 = Cubic(0.62, 0.06, 0.28, 0.98);
// cubic-bezier(0.24,0.72,0.18,1)
const Curve _curveCubic48 = Cubic(0.24, 0.72, 0.18, 1.0);
// cubic-bezier(0.5,0.05,0.3,1)
const Curve _curveCubic49 = Cubic(0.5, 0.05, 0.3, 1.0);
// cubic-bezier(0.3,1.2,0.4,1)
const Curve _curveCubic50 = Cubic(0.3, 1.2, 0.4, 1.0);
// steps(6, end)
const Curve _curveSteps51 = StyleLabSteps(6);
// cubic-bezier(0.2,0.7,0.15,1)
const Curve _curveCubic52 = Cubic(0.2, 0.7, 0.15, 1.0);
// cubic-bezier(0.16,0.84,0.28,1)
const Curve _curveCubic53 = Cubic(0.16, 0.84, 0.28, 1.0);
// cubic-bezier(0.2,0.8,0.2,1)
const Curve _curveCubic54 = Cubic(0.2, 0.8, 0.2, 1.0);
// cubic-bezier(0.3,0.02,0.2,1)
const Curve _curveCubic55 = Cubic(0.3, 0.02, 0.2, 1.0);
// cubic-bezier(0.4,0,0.15,1)
const Curve _curveCubic56 = Cubic(0.4, 0.0, 0.15, 1.0);
// cubic-bezier(0.25,0.6,0.2,1)
const Curve _curveCubic57 = Cubic(0.25, 0.6, 0.2, 1.0);
// cubic-bezier(0.34,1.6,0.64,1)
const Curve _curveCubic58 = Cubic(0.34, 1.6, 0.64, 1.0);
// steps(2–4, end)
const Curve _curveSteps59 = StyleLabSteps(4);
// steps(2, end)
const Curve _curveSteps60 = StyleLabSteps(2);
// cubic-bezier(0.34,1.28,0.52,1)
const Curve _curveCubic61 = Cubic(0.34, 1.28, 0.52, 1.0);
// cubic-bezier(0.5,0.05,0.35,0.95)
const Curve _curveCubic62 = Cubic(0.5, 0.05, 0.35, 0.95);
// cubic-bezier(0.22,1.32,0.4,1)
const Curve _curveCubic63 = Cubic(0.22, 1.32, 0.4, 1.0);
// cubic-bezier(0.16,0.84,0.24,1)
const Curve _curveCubic64 = Cubic(0.16, 0.84, 0.24, 1.0);
// cubic-bezier(0.7,0,0.25,1)
const Curve _curveCubic65 = Cubic(0.7, 0.0, 0.25, 1.0);
// cubic-bezier(0.85,0,0.15,1)
const Curve _curveCubic66 = Cubic(0.85, 0.0, 0.15, 1.0);
// cubic-bezier(0.22,0.61,0.36,1)
const Curve _curveCubic67 = Cubic(0.22, 0.61, 0.36, 1.0);
// cubic-bezier(0.215,0.61,0.355,1)
const Curve _curveCubic68 = Cubic(0.215, 0.61, 0.355, 1.0);
// cubic-bezier(0.32,0.72,0,1)
const Curve _curveCubic69 = Cubic(0.32, 0.72, 0.0, 1.0);
// cubic-bezier(0.32,0.72,0.28,1)
const Curve _curveCubic70 = Cubic(0.32, 0.72, 0.28, 1.0);
// cubic-bezier(0.5,0.4,0.15,1)
const Curve _curveCubic71 = Cubic(0.5, 0.4, 0.15, 1.0);
// cubic-bezier(0.2,0.72,0.2,1)
const Curve _curveCubic72 = Cubic(0.2, 0.72, 0.2, 1.0);
// cubic-bezier(0.22,0.68,0.24,1)
const Curve _curveCubic73 = Cubic(0.22, 0.68, 0.24, 1.0);
// cubic-bezier(0.4,0.1,0.2,1)
const Curve _curveCubic74 = Cubic(0.4, 0.1, 0.2, 1.0);
// cubic-bezier(0.6,0.02,0.25,1)
const Curve _curveCubic75 = Cubic(0.6, 0.02, 0.25, 1.0);
// cubic-bezier(0.22,1,0.36,1)
const Curve _curveCubic76 = Cubic(0.22, 1.0, 0.36, 1.0);
// cubic-bezier(0.4,0,0.1,1)
const Curve _curveCubic77 = Cubic(0.4, 0.0, 0.1, 1.0);
// cubic-bezier(0.65,0,0.35,1)
const Curve _curveCubic78 = Cubic(0.65, 0.0, 0.35, 1.0);
// cubic-bezier(0.34,1.28,0.64,1)
const Curve _curveCubic79 = Cubic(0.34, 1.28, 0.64, 1.0);
// cubic-bezier(0.25,0.46,0.45,0.94)
const Curve _curveCubic80 = Cubic(0.25, 0.46, 0.45, 0.94);
// cubic-bezier(0.4,0,0.2,1)
const Curve _curveCubic81 = Cubic(0.4, 0.0, 0.2, 1.0);
// cubic-bezier(0.16,1,0.3,1)
const Curve _curveCubic82 = Cubic(0.16, 1.0, 0.3, 1.0);
// cubic-bezier(0.55,0.06,0.35,1)
const Curve _curveCubic83 = Cubic(0.55, 0.06, 0.35, 1.0);
// cubic-bezier(0.28,1.46,0.58,1)
const Curve _curveCubic84 = Cubic(0.28, 1.46, 0.58, 1.0);
// cubic-bezier(0.12,0.94,0.24,1)
const Curve _curveCubic85 = Cubic(0.12, 0.94, 0.24, 1.0);
// cubic-bezier(0.45,0,0.15,1)
const Curve _curveCubic86 = Cubic(0.45, 0.0, 0.15, 1.0);
// cubic-bezier(0.2,1.3,0.3,1)
const Curve _curveCubic87 = Cubic(0.2, 1.3, 0.3, 1.0);
// cubic-bezier(0,0,0.2,1)
const Curve _curveCubic88 = Cubic(0.0, 0.0, 0.2, 1.0);
// cubic-bezier(0.25,0.1,0.25,1)
const Curve _curveCubic89 = Cubic(0.25, 0.1, 0.25, 1.0);
// cubic-bezier(0.34,0.03,0.24,1)
const Curve _curveCubic90 = Cubic(0.34, 0.03, 0.24, 1.0);
// cubic-bezier(0.6,0.02,0.2,1)
const Curve _curveCubic91 = Cubic(0.6, 0.02, 0.2, 1.0);
// cubic-bezier(0.7,0.15,0.3,1)
const Curve _curveCubic92 = Cubic(0.7, 0.15, 0.3, 1.0);
// cubic-bezier(0.5,0,0.5,1)
const Curve _curveCubic93 = Cubic(0.5, 0.0, 0.5, 1.0);
// cubic-bezier(0.45,0.05,0.55,0.95)
const Curve _curveCubic94 = Cubic(0.45, 0.05, 0.55, 0.95);
// cubic-bezier(0.25,0.75,0.5,1)
const Curve _curveCubic95 = Cubic(0.25, 0.75, 0.5, 1.0);
// cubic-bezier(0.3,0.7,0.2,1)
const Curve _curveCubic96 = Cubic(0.3, 0.7, 0.2, 1.0);
// cubic-bezier(0.25,0.6,0.15,1)
const Curve _curveCubic97 = Cubic(0.25, 0.6, 0.15, 1.0);
// cubic-bezier(0.35,0.02,0.25,1)
const Curve _curveCubic98 = Cubic(0.35, 0.02, 0.25, 1.0);
// cubic-bezier(0.42,0.12,0.2,1)
const Curve _curveCubic99 = Cubic(0.42, 0.12, 0.2, 1.0);
// cubic-bezier(0.16,0.62,0.24,1)
const Curve _curveCubic100 = Cubic(0.16, 0.62, 0.24, 1.0);
// cubic-bezier(0.15,1,0.3,1)
const Curve _curveCubic101 = Cubic(0.15, 1.0, 0.3, 1.0);
// cubic-bezier(1,0,0.2,1)
const Curve _curveCubic102 = Cubic(1.0, 0.0, 0.2, 1.0);
// cubic-bezier(0.2,0.8,0.3,1)
const Curve _curveCubic103 = Cubic(0.2, 0.8, 0.3, 1.0);
// cubic-bezier(0.33,1,0.68,1)
const Curve _curveCubic104 = Cubic(0.33, 1.0, 0.68, 1.0);
// cubic-bezier(0.18,0.86,0.24,1)
const Curve _curveCubic105 = Cubic(0.18, 0.86, 0.24, 1.0);
// cubic-bezier(0.35,0.02,0.28,1)
const Curve _curveCubic106 = Cubic(0.35, 0.02, 0.28, 1.0);
// cubic-bezier(0.4,0,0.3,1)
const Curve _curveCubic107 = Cubic(0.4, 0.0, 0.3, 1.0);
// cubic-bezier(0.12,0.9,0.2,1)
const Curve _curveCubic108 = Cubic(0.12, 0.9, 0.2, 1.0);
// cubic-bezier(0.3,0,0,1)
const Curve _curveCubic109 = Cubic(0.3, 0.0, 0.0, 1.0);
// cubic-bezier(0.16,0.6,0.3,1)
const Curve _curveCubic110 = Cubic(0.16, 0.6, 0.3, 1.0);

/// İç gölge (inset) notları — Flutter `BoxShadow` inset taşımaz; hedef kendisi kurar.
const List<String> styleLabInsetShadowNotes = <String>[
  'claymorphism: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'claymorphism: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'letterpress-print: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'y2k: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'frutiger-aero: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'skeuomorphism: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'grand-tourer: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'grand-tourer-oxblood: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'grand-tourer-midnight: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
  'machined-metal-panel: shadow inset gölge (Flutter BoxShadow inset taşımaz)',
];

// ---- açık palet + tam token seti ----
const Map<String, StyleLabTokens> styleLabLight = <String, StyleLabTokens>{
  'minimalism': StyleLabTokens(
    slug: 'minimalism',
    num: '01',
    name: 'Minimalism',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFFAFAF9), bg2: Color(0xFFF2F2F0), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F7F5), ink: Color(0xFF101112), inkSoft: Color(0xFF5A5F66), inkFaint: Color(0xFF9AA0A6), accent: Color(0xFF2563EB), accentInk: Color(0xFFFFFFFF), line: Color(0x1A101112)),
    radius: 8.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0x0F101112), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Inter', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 56.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.02, headingHeight: 1.15, bodyHeight: 1.6, displayTracking: -0.03, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 180, slow: 240, curve: _curveCubic1, enterDuration: 500, enterCurve: Curves.easeOut, enterOffsetY: 12.0, enterStagger: 0.04, scrollDuration: 600, scrollOffsetY: 24.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 160, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'swiss-design': StyleLabTokens(
    slug: 'swiss-design',
    num: '02',
    name: 'Swiss Design',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFFFFFFF), bg2: Color(0xFFF1F1F1), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFAFAFA), ink: Color(0xFF0A0A0A), inkSoft: Color(0xFF4A4A4A), inkFaint: Color(0xFF8C8C8C), accent: Color(0xFFE4002B), accentInk: Color(0xFFFFFFFF), line: Color(0xFF0A0A0A)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Helvetica Neue', fontBody: 'Helvetica Neue', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 34.0, h1: 64.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 0.95, headingHeight: 1.0, bodyHeight: 1.55, displayTracking: -0.035, headingTracking: -0.03, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 90, base: 160, slow: 420, curve: _curveCubic1, enterDuration: 320, enterCurve: _curveCubic1, enterOffsetY: 0.0, enterStagger: 0.03, scrollDuration: 300, scrollOffsetY: 0.0, scrollTriggerPercent: 92.0, scrollOnce: true, hoverDuration: 90, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'editorial-design': StyleLabTokens(
    slug: 'editorial-design',
    num: '03',
    name: 'Editorial Design',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFFDFCF9), bg2: Color(0xFFF4F1EA), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFAF8F3), ink: Color(0xFF141414), inkSoft: Color(0xFF56504A), inkFaint: Color(0xFF8E8880), accent: Color(0xFFB4472F), accentInk: Color(0xFFFFFFFF), line: Color(0x24141414)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 14.0, body: 17.0, h3: 21.0, h2: 32.0, h1: 60.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.04, headingHeight: 1.12, bodyHeight: 1.65, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 120, base: 180, slow: 300, curve: Curves.easeOut, enterDuration: 550, enterCurve: Curves.easeOut, enterOffsetY: 10.0, enterStagger: 0.06, scrollDuration: 650, scrollOffsetY: 24.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'luxury-typography': StyleLabTokens(
    slug: 'luxury-typography',
    num: '04',
    name: 'Luxury Typography',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFF6F1E7), bg2: Color(0xFFEFE7D8), surface: Color(0xFFFFFDF8), surface2: Color(0xFFF3ECDF), ink: Color(0xFF1A1815), inkSoft: Color(0xFF5C554B), inkFaint: Color(0xFF9A9184), accent: Color(0xFFC6A664), accentInk: Color(0xFF1A1815), line: Color(0x291A1815)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 96.0, 128.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 10.0, caption: 11.0, small: 13.0, body: 14.0, h3: 20.0, h2: 34.0, h1: 64.0, h1Mobile: 38.0, bodyWeight: 400, strongWeight: 600, displayWeight: 300, displayHeight: 1.1, headingHeight: 1.2, bodyHeight: 1.75, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.02, labelTracking: 0.3),
    motion: StyleLabMotion(fast: 180, base: 320, slow: 400, curve: _curveCubic2, enterDuration: 800, enterCurve: _curveCubic2, enterOffsetY: 24.0, enterStagger: 0.09, scrollDuration: 1000, scrollOffsetY: 24.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'bento-grid': StyleLabTokens(
    slug: 'bento-grid',
    num: '05',
    name: 'Bento Grid',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFF4F4F2), bg2: Color(0xFFECECEA), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFAFAF9), ink: Color(0xFF12130F), inkSoft: Color(0xFF5B5F58), inkFaint: Color(0xFF9AA096), accent: Color(0xFF1F6FEB), accentInk: Color(0xFFFFFFFF), line: Color(0x1412130F)),
    radius: 18.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0x0D12130F), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0), BoxShadow(color: Color(0x0A12130F), offset: Offset(0.0, 8.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 48.0],
    typography: StyleLabType(fontDisplay: 'Inter', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 14.0, h3: 16.0, h2: 24.0, h1: 38.4, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.0, headingHeight: 1.3, bodyHeight: 1.5, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 120, base: 180, slow: 220, curve: _curveCubic1, enterDuration: 450, enterCurve: _curveCubic1, enterOffsetY: 16.0, enterStagger: 0.08, scrollDuration: 550, scrollOffsetY: 24.0, scrollTriggerPercent: 85.0, scrollOnce: true, hoverDuration: 200, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'japandi': StyleLabTokens(
    slug: 'japandi',
    num: '06',
    name: 'Japandi',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFF4EFE7), bg2: Color(0xFFEBE4D9), surface: Color(0xFFFBF8F3), surface2: Color(0xFFF2ECE2), ink: Color(0xFF2C2925), inkSoft: Color(0xFF635C53), inkFaint: Color(0xFF918A80), accent: Color(0xFF8A9B84), accentInk: Color(0xFF2C2925), line: Color(0x1A2C2925)),
    radius: 10.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0x0A2C2925), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Lora', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 17.0, h2: 28.0, h1: 46.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: -0.01, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 240, slow: 400, curve: _curveCubic3, enterDuration: 700, enterCurve: _curveCubic3, enterOffsetY: 14.0, enterStagger: 0.07, scrollDuration: 850, scrollOffsetY: 24.0, scrollTriggerPercent: 83.0, scrollOnce: true, hoverDuration: 220, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'wabi-sabi': StyleLabTokens(
    slug: 'wabi-sabi',
    num: '07',
    name: 'Wabi-Sabi',
    family: 'Sade',
    palette: StyleLabPalette(bg: Color(0xFFEDE6DA), bg2: Color(0xFFE3D9C9), surface: Color(0xFFF6F1E6), surface2: Color(0xFFEADFCE), ink: Color(0xFF2A2724), inkSoft: Color(0xFF5F574D), inkFaint: Color(0xFF8F8779), accent: Color(0xFFA85831), accentInk: Color(0xFFFFF8EF), line: Color(0x2E2A2724)),
    radius: 3.0,
    radiusLg: 18.0,
    shadow: [BoxShadow(color: Color(0x0F2A2724), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x1F2A2724), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [6.0, 12.0, 18.0, 24.0, 36.0, 54.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'Courier New', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 17.0, h2: 30.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.18, bodyHeight: 1.7, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 140, base: 300, slow: 500, curve: _curveCubic4, enterDuration: 750, enterCurve: _curveCubic4, enterOffsetY: 18.0, enterStagger: 0.05, scrollDuration: 950, scrollOffsetY: 24.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'glassmorphism': StyleLabTokens(
    slug: 'glassmorphism',
    num: '08',
    name: 'Glassmorphism',
    family: 'Yüzey',
    palette: StyleLabPalette(bg: Color(0xFF1B1035), bg2: Color(0xFF2A1A5E), surface: Color(0x1FFFFFFF), surface2: Color(0x12FFFFFF), ink: Color(0xFFFFFFFF), inkSoft: Color(0xC7FFFFFF), inkFaint: Color(0x8CFFFFFF), accent: Color(0xFF7DD3FC), accentInk: Color(0xFF06222E), line: Color(0x3DFFFFFF)),
    radius: 16.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0x38000000), offset: Offset(0.0, 8.0), blurRadius: 32.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Inter', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 26.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 280, slow: 400, curve: _curveCubic5, enterDuration: 700, enterCurve: _curveCubic6, enterOffsetY: 20.0, enterStagger: 0.05, scrollDuration: 850, scrollOffsetY: 24.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'liquid-glass': StyleLabTokens(
    slug: 'liquid-glass',
    num: '09',
    name: 'Liquid Glass',
    family: 'Yüzey',
    palette: StyleLabPalette(bg: Color(0xFF0A0D12), bg2: Color(0xFF141A24), surface: Color(0x1AFFFFFF), surface2: Color(0x0FFFFFFF), ink: Color(0xFFF5F7FA), inkSoft: Color(0xC2F5F7FA), inkFaint: Color(0x80F5F7FA), accent: Color(0xFF4CC9F0), accentInk: Color(0xFF041018), line: Color(0x47FFFFFF)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x59000000), offset: Offset(0.0, 10.0), blurRadius: 40.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'SF Pro Display', fontBody: 'SF Pro Text', fontMono: 'SF Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 26.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 140, base: 220, slow: 280, curve: _curveCubic5, enterDuration: 900, enterCurve: _curveCubic7, enterOffsetY: 28.0, enterStagger: 0.07, scrollDuration: 1000, scrollOffsetY: 24.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 220, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'neumorphism': StyleLabTokens(
    slug: 'neumorphism',
    num: '10',
    name: 'Neumorphism',
    family: 'Yüzey',
    palette: StyleLabPalette(bg: Color(0xFFE4E8EF), bg2: Color(0xFFDDE2EA), surface: Color(0xFFE4E8EF), surface2: Color(0xFFE9EDF3), ink: Color(0xFF333A45), inkSoft: Color(0xFF5D6674), inkFaint: Color(0xFF8B93A1), accent: Color(0xFF4262E8), accentInk: Color(0xFFFFFFFF), line: Color(0x00000000)),
    radius: 16.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0xFFCFD4DD), offset: Offset(6.0, 6.0), blurRadius: 12.0, spreadRadius: 0.0), BoxShadow(color: Color(0xFFF8FBFF), offset: Offset(-6.0, -6.0), blurRadius: 12.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Nunito Sans', fontBody: 'Nunito Sans', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 220, slow: 300, curve: _curveCubic5, enterDuration: 400, enterCurve: Curves.easeOut, enterOffsetY: 8.0, enterStagger: 0.03, scrollDuration: 500, scrollOffsetY: 24.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 200, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'fluid-simulation': StyleLabTokens(
    slug: 'fluid-simulation',
    num: '100',
    name: 'Fluid Simulation',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFEFF4F3), bg2: Color(0xFFE3ECEA), surface: Color(0xFFFBFDFC), surface2: Color(0xFFF0F6F4), ink: Color(0xFF101A1C), inkSoft: Color(0xFF435452), inkFaint: Color(0xFF7D8B89), accent: Color(0xFFB8481A), accentInk: Color(0xFFFDF6F2), line: Color(0x21101A1C)),
    radius: 18.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x14101A1C), offset: Offset(0.0, 2.0), blurRadius: 10.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Poppins', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 21.0, h2: 28.0, h1: 44.0, h1Mobile: 29.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.14, headingHeight: 1.3, bodyHeight: 1.68, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 260, base: 520, slow: 1400, curve: _curveCubic8, enterDuration: 1050, enterCurve: _curveCubic8, enterOffsetY: 20.0, enterStagger: 0.16, scrollDuration: 1150, scrollOffsetY: 34.0, scrollTriggerPercent: 72.0, scrollOnce: true, hoverDuration: 520, hoverImageScale: 1.028, pinEnabled: false, pinScrub: null),
  ),
  'shadow-stage': StyleLabTokens(
    slug: 'shadow-stage',
    num: '101',
    name: 'Shadow Stage',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFF12151A), bg2: Color(0xFF171B21), surface: Color(0xFF1B2028), surface2: Color(0xFF232A33), ink: Color(0xFFEEF1F5), inkSoft: Color(0xFFADB6C2), inkFaint: Color(0xFF7E8896), accent: Color(0xFFE3B341), accentInk: Color(0xFF1A1405), line: Color(0x26EEF1F5)),
    radius: 10.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0xEB000000), offset: Offset(0.0, 24.0), blurRadius: 60.0, spreadRadius: -42.0)],
    shadowHard: [BoxShadow(color: Color(0x26EEF1F5), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poiret One', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 27.0, h1: 50.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.08, headingHeight: 1.22, bodyHeight: 1.62, displayTracking: 0.04, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 120, base: 220, slow: 320, curve: _curveCubic9, enterDuration: 430, enterCurve: _curveCubic9, enterOffsetY: 18.0, enterStagger: 0.075, scrollDuration: 610, scrollOffsetY: 20.0, scrollTriggerPercent: 79.0, scrollOnce: true, hoverDuration: 250, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'moire-field': StyleLabTokens(
    slug: 'moire-field',
    num: '102',
    name: 'Moiré Field',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFA6A29B), bg2: Color(0xFF9C9891), surface: Color(0xFFB1ADA6), surface2: Color(0xFF8E8A84), ink: Color(0xFF12130F), inkSoft: Color(0xFF2B2C28), inkFaint: Color(0xFF45463F), accent: Color(0xFF9C2E6E), accentInk: Color(0xFFFFFFFF), line: Color(0x3812130F)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF12130F), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Silkscreen', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 38.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.26, bodyHeight: 1.55, displayTracking: 0.02, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 95, base: 160, slow: 240, curve: _curveCubic10, enterDuration: 530, enterCurve: _curveCubic10, enterOffsetY: 4.0, enterStagger: 0.025, scrollDuration: 470, scrollOffsetY: 6.0, scrollTriggerPercent: 93.0, scrollOnce: true, hoverDuration: 95, hoverImageScale: 1.0, pinEnabled: true, pinScrub: 1.05),
  ),
  'motion-trail': StyleLabTokens(
    slug: 'motion-trail',
    num: '103',
    name: 'Motion Trail',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFF5F3EF), bg2: Color(0xFFECEBE6), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF0EEEA), ink: Color(0xFF14161A), inkSoft: Color(0xFF4C5157), inkFaint: Color(0xFF7D838A), accent: Color(0xFFA8500F), accentInk: Color(0xFFFFFFFF), line: Color(0x1F14161A)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x8C14161A), offset: Offset(0.0, 18.0), blurRadius: 44.0, spreadRadius: -32.0)],
    shadowHard: [BoxShadow(color: Color(0x1F14161A), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 52.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.16, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 140, base: 240, slow: 360, curve: _curveCubic11, enterDuration: 370, enterCurve: _curveCubic11, enterOffsetY: 10.0, enterStagger: 0.13, scrollDuration: 490, scrollOffsetY: 14.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.045, pinEnabled: true, pinScrub: 1.15),
  ),
  'stepped-mechanism': StyleLabTokens(
    slug: 'stepped-mechanism',
    num: '104',
    name: 'Stepped Mechanism',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFA0A6AA), bg2: Color(0xFF979DA1), surface: Color(0xFFABB1B5), surface2: Color(0xFF8B9195), ink: Color(0xFF0F1417), inkSoft: Color(0xFF2B3238), inkFaint: Color(0xFF485056), accent: Color(0xFF1F6B3D), accentInk: Color(0xFFFFFFFF), line: Color(0x380F1417)),
    radius: 8.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x800F1417), offset: Offset(0.0, 8.0), blurRadius: 18.0, spreadRadius: -14.0)],
    shadowHard: [BoxShadow(color: Color(0xFF0F1417), offset: Offset(0.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Share Tech Mono', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 24.0, h1: 38.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.52, displayTracking: 0.03, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 85, base: 160, slow: 240, curve: _curveSteps12, enterDuration: 360, enterCurve: _curveSteps12, enterOffsetY: 0.0, enterStagger: 0.05, scrollDuration: 310, scrollOffsetY: 12.0, scrollTriggerPercent: 73.0, scrollOnce: true, hoverDuration: 85, hoverImageScale: 1.008, pinEnabled: true, pinScrub: 0.45),
  ),
  'holographic-layer': StyleLabTokens(
    slug: 'holographic-layer',
    num: '105',
    name: 'Holographic Layer',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFF0E0B16), bg2: Color(0xFF141020), surface: Color(0xFF181323), surface2: Color(0xFF211A2E), ink: Color(0xFFF0EDF7), inkSoft: Color(0xFFB3AAC4), inkFaint: Color(0xFF827896), accent: Color(0xFF8F7BFF), accentInk: Color(0xFF0A0713), line: Color(0x29F0EDF7)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0xF204020A), offset: Offset(0.0, 28.0), blurRadius: 64.0, spreadRadius: -44.0)],
    shadowHard: [BoxShadow(color: Color(0x29F0EDF7), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 44.0, h1Mobile: 27.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.14, headingHeight: 1.24, bodyHeight: 1.6, displayTracking: 0.02, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 160, base: 260, slow: 380, curve: _curveCubic13, enterDuration: 970, enterCurve: _curveCubic13, enterOffsetY: 28.0, enterStagger: 0.11, scrollDuration: 860, scrollOffsetY: 24.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 410, hoverImageScale: 1.038, pinEnabled: true, pinScrub: 1.25),
  ),
  'voice-first': StyleLabTokens(
    slug: 'voice-first',
    num: '106',
    name: 'Ses-Öncelikli',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFF171021), bg2: Color(0xFF1D152A), surface: Color(0xFF241A33), surface2: Color(0xFF2B2040), ink: Color(0xFFF1E9F7), inkSoft: Color(0xFFC0B0D0), inkFaint: Color(0xFF8F7FA2), accent: Color(0xFFFF8AD4), accentInk: Color(0xFF2A0A1E), line: Color(0x29F1E9F7)),
    radius: 24.0,
    radiusLg: 32.0,
    shadow: [BoxShadow(color: Color(0x38FF8AD4), offset: Offset(0.0, 8.0), blurRadius: 40.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poppins', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 22.0, h2: 32.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.62, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 95, base: 240, slow: 600, curve: _curveCubic14, enterDuration: 370, enterCurve: _curveCubic14, enterOffsetY: 2.0, enterStagger: 0.022, scrollDuration: 230, scrollOffsetY: 6.0, scrollTriggerPercent: 95.0, scrollOnce: true, hoverDuration: 95, hoverImageScale: 1.002, pinEnabled: false, pinScrub: null),
  ),
  'spatial-ar-layer': StyleLabTokens(
    slug: 'spatial-ar-layer',
    num: '107',
    name: 'Uzamsal AR Katman',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFE9EDF5), bg2: Color(0xFFDFE5F0), surface: Color(0xFFF7F9FC), surface2: Color(0xFFEEF2F9), ink: Color(0xFF161A24), inkSoft: Color(0xFF4A5364), inkFaint: Color(0xFF78818F), accent: Color(0xFF2A4BD7), accentInk: Color(0xFFFFFFFF), line: Color(0x29161A24)),
    radius: 12.0,
    radiusLg: 20.0,
    shadow: [BoxShadow(color: Color(0x24161A24), offset: Offset(0.0, 18.0), blurRadius: 40.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Jost', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 140, base: 320, slow: 860, curve: _curveCubic15, enterDuration: 860, enterCurve: _curveCubic15, enterOffsetY: 25.0, enterStagger: 0.088, scrollDuration: 810, scrollOffsetY: 28.0, scrollTriggerPercent: 73.0, scrollOnce: true, hoverDuration: 285, hoverImageScale: 1.008, pinEnabled: true, pinScrub: 0.42),
  ),
  'command-palette': StyleLabTokens(
    slug: 'command-palette',
    num: '108',
    name: 'Komut Paleti',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFF111318), bg2: Color(0xFF16191F), surface: Color(0xFF1B1F26), surface2: Color(0xFF222731), ink: Color(0xFFEEF0F3), inkSoft: Color(0xFFA9B1BC), inkFaint: Color(0xFF767E8A), accent: Color(0xFFE8ECF2), accentInk: Color(0xFF14171C), line: Color(0x24EEF0F3)),
    radius: 6.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0x8C000000), offset: Offset(0.0, 24.0), blurRadius: 60.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'JetBrains Mono', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 17.0, h2: 22.0, h1: 30.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.2, headingHeight: 1.3, bodyHeight: 1.5, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 65, base: 120, slow: 260, curve: _curveCubic16, enterDuration: 190, enterCurve: _curveCubic16, enterOffsetY: 5.0, enterStagger: 0.018, scrollDuration: 170, scrollOffsetY: 4.0, scrollTriggerPercent: 97.0, scrollOnce: true, hoverDuration: 65, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'timeline-editor': StyleLabTokens(
    slug: 'timeline-editor',
    num: '109',
    name: 'Zaman Çizelgesi Editörü',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFF1EFEC), bg2: Color(0xFFE7E3DE), surface: Color(0xFFFBFAF8), surface2: Color(0xFFF5F2EE), ink: Color(0xFF1E1A17), inkSoft: Color(0xFF554D46), inkFaint: Color(0xFF857B71), accent: Color(0xFFA12A6E), accentInk: Color(0xFFFFF4F8), line: Color(0x291E1A17)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x1F1E1A17), offset: Offset(0.0, 2.0), blurRadius: 8.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 11.0, small: 12.0, body: 14.0, h3: 18.0, h2: 26.0, h1: 38.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.26, bodyHeight: 1.55, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 110, base: 220, slow: 530, curve: _curveCubic17, enterDuration: 510, enterCurve: _curveCubic17, enterOffsetY: 15.0, enterStagger: 0.042, scrollDuration: 530, scrollOffsetY: 18.0, scrollTriggerPercent: 67.0, scrollOnce: true, hoverDuration: 165, hoverImageScale: 1.004, pinEnabled: true, pinScrub: 1.3),
  ),
  'claymorphism': StyleLabTokens(
    slug: 'claymorphism',
    num: '11',
    name: 'Claymorphism',
    family: 'Yüzey',
    palette: StyleLabPalette(bg: Color(0xFFF3EFFF), bg2: Color(0xFFE9E3FF), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF6F2FF), ink: Color(0xFF2B2350), inkSoft: Color(0xFF5B5382), inkFaint: Color(0xFF8D87AD), accent: Color(0xFF6F4DF0), accentInk: Color(0xFFFFFFFF), line: Color(0xB3FFFFFF)),
    radius: 24.0,
    radiusLg: 32.0,
    shadow: [BoxShadow(color: Color(0x2E7C5CFF), offset: Offset(0.0, 12.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x387C5CFF), offset: Offset(0.0, 16.0), blurRadius: 28.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 28.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 700, displayWeight: 600, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 280, slow: 320, curve: _curveCubic5, enterDuration: 600, enterCurve: _curveCubic18, enterOffsetY: 18.0, enterStagger: 0.08, scrollDuration: 700, scrollOffsetY: 24.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'kanban-flow': StyleLabTokens(
    slug: 'kanban-flow',
    num: '110',
    name: 'Kanban Akışı',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFF2F4F7), bg2: Color(0xFFE8EBF0), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F9FB), ink: Color(0xFF171A20), inkSoft: Color(0xFF4E5663), inkFaint: Color(0xFF7D8593), accent: Color(0xFF1A62CC), accentInk: Color(0xFFFFFFFF), line: Color(0x24171A20)),
    radius: 8.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0x1F171A20), offset: Offset(0.0, 1.0), blurRadius: 3.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Nunito', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 36.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.12, headingHeight: 1.28, bodyHeight: 1.55, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 235, base: 420, slow: 730, curve: _curveCubic19, enterDuration: 730, enterCurve: _curveCubic19, enterOffsetY: 19.0, enterStagger: 0.068, scrollDuration: 690, scrollOffsetY: 22.0, scrollTriggerPercent: 70.0, scrollOnce: true, hoverDuration: 235, hoverImageScale: 1.024, pinEnabled: false, pinScrub: null),
  ),
  'step-wizard': StyleLabTokens(
    slug: 'step-wizard',
    num: '111',
    name: 'Adım Sihirbazı',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFF4F6FA), bg2: Color(0xFFE9EEF7), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F9FD), ink: Color(0xFF101828), inkSoft: Color(0xFF46536B), inkFaint: Color(0xFF7B879C), accent: Color(0xFF3346C9), accentInk: Color(0xFFFFFFFF), line: Color(0x24101828)),
    radius: 10.0,
    radiusLg: 18.0,
    shadow: [BoxShadow(color: Color(0x14101828), offset: Offset(0.0, 2.0), blurRadius: 6.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Jost', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 20.0, h2: 28.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.26, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.04),
    motion: StyleLabMotion(fast: 150, base: 240, slow: 390, curve: _curveCubic20, enterDuration: 390, enterCurve: _curveCubic20, enterOffsetY: 7.0, enterStagger: 0.048, scrollDuration: 410, scrollOffsetY: 9.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 145, hoverImageScale: 1.008, pinEnabled: false, pinScrub: null),
  ),
  'zero-ui': StyleLabTokens(
    slug: 'zero-ui',
    num: '112',
    name: 'Sıfır Arayüz',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFF4F3EE), bg2: Color(0xFFECEBE5), surface: Color(0xFFFDFCF8), surface2: Color(0xFFF2F1EB), ink: Color(0xFF1F211D), inkSoft: Color(0xFF4F544A), inkFaint: Color(0xFF83887C), accent: Color(0xFF26302A), accentInk: Color(0xFFF6F5EF), line: Color(0x1F1F211D)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.14, headingHeight: 1.3, bodyHeight: 1.68, displayTracking: -0.005, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 220, base: 480, slow: 1100, curve: _curveCubic21, enterDuration: 1100, enterCurve: _curveCubic21, enterOffsetY: 3.0, enterStagger: 0.185, scrollDuration: 1150, scrollOffsetY: 2.0, scrollTriggerPercent: 64.0, scrollOnce: true, hoverDuration: 560, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'notebook-repl': StyleLabTokens(
    slug: 'notebook-repl',
    num: '113',
    name: 'Notebook / REPL',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFE9EDF2), bg2: Color(0xFFDFE5EC), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF4F7FA), ink: Color(0xFF131A22), inkSoft: Color(0xFF47566A), inkFaint: Color(0xFF7A8798), accent: Color(0xFFB8460F), accentInk: Color(0xFFFFFFFF), line: Color(0x24131A22)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x14131A22), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Mono', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 36.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.16, headingHeight: 1.28, bodyHeight: 1.58, displayTracking: -0.02, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 120, base: 190, slow: 230, curve: _curveCubic22, enterDuration: 230, enterCurve: _curveCubic22, enterOffsetY: 3.0, enterStagger: 0.024, scrollDuration: 190, scrollOffsetY: 2.0, scrollTriggerPercent: 90.0, scrollOnce: false, hoverDuration: 70, hoverImageScale: 1.004, pinEnabled: false, pinScrub: null),
  ),
  'multiplayer-presence': StyleLabTokens(
    slug: 'multiplayer-presence',
    num: '114',
    name: 'Eşzamanlı İşbirlikçi',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFFF8F7FC), bg2: Color(0xFFEEECF8), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF4F2FC), ink: Color(0xFF1B1630), inkSoft: Color(0xFF514870), inkFaint: Color(0xFF857EA0), accent: Color(0xFF6D28D9), accentInk: Color(0xFFFFFFFF), line: Color(0x241B1630)),
    radius: 12.0,
    radiusLg: 20.0,
    shadow: [BoxShadow(color: Color(0x1A1B1630), offset: Offset(0.0, 4.0), blurRadius: 14.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 29.0, h1: 42.0, h1Mobile: 27.0, bodyWeight: 400, strongWeight: 700, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.62, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.05),
    motion: StyleLabMotion(fast: 210, base: 380, slow: 630, curve: _curveCubic23, enterDuration: 630, enterCurve: _curveCubic23, enterOffsetY: 9.0, enterStagger: 0.033, scrollDuration: 570, scrollOffsetY: 11.0, scrollTriggerPercent: 88.0, scrollOnce: false, hoverDuration: 210, hoverImageScale: 1.026, pinEnabled: false, pinScrub: null),
  ),
  'keyboard-first': StyleLabTokens(
    slug: 'keyboard-first',
    num: '115',
    name: 'Klavye-Öncelikli Komut Arayüzü',
    family: 'Etkileşim',
    palette: StyleLabPalette(bg: Color(0xFF0F1013), bg2: Color(0xFF14161A), surface: Color(0xFF17191E), surface2: Color(0xFF1D2026), ink: Color(0xFFE9ECF1), inkSoft: Color(0xFFA3ABB8), inkFaint: Color(0xFF737D8C), accent: Color(0xFFFFB62E), accentInk: Color(0xFF1A1205), line: Color(0x29E9ECF1)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x66000000), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x8C000000), offset: Offset(0.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Rajdhani', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 24.0, h1: 34.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.05, headingHeight: 1.2, bodyHeight: 1.52, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 45, base: 110, slow: 160, curve: Curves.linear, enterDuration: 120, enterCurve: Curves.linear, enterOffsetY: 0.0, enterStagger: 0.008, scrollDuration: 100, scrollOffsetY: 1.0, scrollTriggerPercent: 98.0, scrollOnce: true, hoverDuration: 45, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'kids-playground': StyleLabTokens(
    slug: 'kids-playground',
    num: '116',
    name: 'Kids Playground',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFFDF7EC), bg2: Color(0xFFF6EDDD), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF4ECDF), ink: Color(0xFF1E2A33), inkSoft: Color(0xFF4B5A64), inkFaint: Color(0xFF7C8A92), accent: Color(0xFF17607A), accentInk: Color(0xFFF6FBFD), line: Color(0x291E2A33)),
    radius: 14.0,
    radiusLg: 18.0,
    shadow: [BoxShadow(color: Color(0x291E2A33), offset: Offset(0.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x291E2A33), offset: Offset(0.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'Space Mono', label: 13.0, caption: 13.0, small: 15.0, body: 17.0, h3: 22.0, h2: 34.0, h1: 56.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 110, base: 220, slow: 380, curve: _curveCubic24, enterDuration: 460, enterCurve: _curveCubic24, enterOffsetY: 22.0, enterStagger: 0.07, scrollDuration: 520, scrollOffsetY: 18.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.04, pinEnabled: false, pinScrub: null),
  ),
  'carnival-festival': StyleLabTokens(
    slug: 'carnival-festival',
    num: '117',
    name: 'Carnival Festival',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFFDF3E3), bg2: Color(0xFFF6E7D0), surface: Color(0xFFFFFAF0), surface2: Color(0xFFF7EAD6), ink: Color(0xFF241A12), inkSoft: Color(0xFF55463A), inkFaint: Color(0xFF827164), accent: Color(0xFFB3360F), accentInk: Color(0xFFFDF5EE), line: Color(0x2E241A12)),
    radius: 0.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xEB241A12), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Poppins', fontMono: 'JetBrains Mono', label: 12.0, caption: 13.0, small: 14.0, body: 16.5, h3: 22.0, h2: 40.0, h1: 72.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.94, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 90, base: 180, slow: 280, curve: _curveCubic25, enterDuration: 280, enterCurve: _curveCubic25, enterOffsetY: 30.0, enterStagger: 0.05, scrollDuration: 360, scrollOffsetY: 24.0, scrollTriggerPercent: 91.0, scrollOnce: true, hoverDuration: 120, hoverImageScale: 1.06, pinEnabled: false, pinScrub: null),
  ),
  'sticker-sheet': StyleLabTokens(
    slug: 'sticker-sheet',
    num: '118',
    name: 'Sticker Sheet',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFF7F6F2), bg2: Color(0xFFECEBE4), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF2F1EA), ink: Color(0xFF16160F), inkSoft: Color(0xFF4A4A40), inkFaint: Color(0xFF78786C), accent: Color(0xFFB5174E), accentInk: Color(0xFFFFF5F7), line: Color(0x2E16160F)),
    radius: 10.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0xEB16160F), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0xEB16160F), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Nunito', fontBody: 'Poppins', fontMono: 'Silkscreen', label: 12.0, caption: 13.0, small: 14.0, body: 16.5, h3: 20.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 700, displayWeight: 900, displayHeight: 1.1, headingHeight: 1.18, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 100, base: 200, slow: 340, curve: _curveCubic26, enterDuration: 340, enterCurve: _curveCubic26, enterOffsetY: 12.0, enterStagger: 0.03, scrollDuration: 400, scrollOffsetY: 14.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 160, hoverImageScale: 1.08, pinEnabled: false, pinScrub: null),
  ),
  'arcade-8bit': StyleLabTokens(
    slug: 'arcade-8bit',
    num: '119',
    name: 'Arcade 8-bit',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFF0E1224), bg2: Color(0xFF141A2E), surface: Color(0xFF121728), surface2: Color(0xFF1B2136), ink: Color(0xFFEEF4FF), inkSoft: Color(0xFFA7B3CC), inkFaint: Color(0xFF78849C), accent: Color(0xFF35E08A), accentInk: Color(0xFF05130C), line: Color(0x29EEF4FF)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Press Start 2P', fontBody: 'Space Grotesk', fontMono: 'VT323', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 24.0, h1: 32.0, h1Mobile: 20.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.4, headingHeight: 1.3, bodyHeight: 1.62, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 70, base: 140, slow: 220, curve: _curveSteps12, enterDuration: 180, enterCurve: _curveSteps12, enterOffsetY: 8.0, enterStagger: 0.02, scrollDuration: 220, scrollOffsetY: 6.0, scrollTriggerPercent: 95.0, scrollOnce: true, hoverDuration: 70, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'aurora-ui': StyleLabTokens(
    slug: 'aurora-ui',
    num: '12',
    name: 'Aurora UI',
    family: 'Yüzey',
    palette: StyleLabPalette(bg: Color(0xFF0A0A10), bg2: Color(0xFF12121C), surface: Color(0x0FFFFFFF), surface2: Color(0x0AFFFFFF), ink: Color(0xFFF7F7FB), inkSoft: Color(0xB8F7F7FB), inkFaint: Color(0x7AF7F7FB), accent: Color(0xFF6D5BFF), accentInk: Color(0xFFFFFFFF), line: Color(0x24FFFFFF)),
    radius: 16.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0x406D5BFF), offset: Offset(0.0, 20.0), blurRadius: 60.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Inter', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 28.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: -0.02, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 260, slow: 400, curve: _curveCubic3, enterDuration: 900, enterCurve: _curveCubic27, enterOffsetY: 24.0, enterStagger: 0.06, scrollDuration: 1150, scrollOffsetY: 24.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'craft-handmade': StyleLabTokens(
    slug: 'craft-handmade',
    num: '120',
    name: 'Craft Handmade',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFEFE6D6), bg2: Color(0xFFE5DAC6), surface: Color(0xFFF9F3E7), surface2: Color(0xFFE9DFCB), ink: Color(0xFF2A231A), inkSoft: Color(0xFF574C3D), inkFaint: Color(0xFF857A68), accent: Color(0xFF7A4B2A), accentInk: Color(0xFFFBF5EA), line: Color(0x332A231A)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Caveat', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 12.5, caption: 13.0, small: 15.0, body: 16.5, h3: 20.0, h2: 32.0, h1: 52.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.72, displayTracking: 0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 160, base: 300, slow: 520, curve: _curveCubic28, enterDuration: 820, enterCurve: _curveCubic28, enterOffsetY: 26.0, enterStagger: 0.09, scrollDuration: 950, scrollOffsetY: 22.0, scrollTriggerPercent: 79.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.1),
  ),
  'celebration-card': StyleLabTokens(
    slug: 'celebration-card',
    num: '121',
    name: 'Celebration Card',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFFBEEE8), bg2: Color(0xFFF5E2DA), surface: Color(0xFFFFFAF7), surface2: Color(0xFFF2DED4), ink: Color(0xFF341C2A), inkSoft: Color(0xFF6B4A5B), inkFaint: Color(0xFF8F6F7F), accent: Color(0xFFBD1F5C), accentInk: Color(0xFFFFF5F9), line: Color(0x29341C2A)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x1A341C2A), offset: Offset(0.0, 6.0), blurRadius: 18.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 30.0, h1: 52.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.02, headingHeight: 1.1, bodyHeight: 1.7, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 180, slow: 320, curve: _curveCubic29, enterDuration: 520, enterCurve: _curveCubic29, enterOffsetY: 14.0, enterStagger: 0.06, scrollDuration: 600, scrollOffsetY: 16.0, scrollTriggerPercent: 85.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.024, pinEnabled: false, pinScrub: null),
  ),
  'collectible-card': StyleLabTokens(
    slug: 'collectible-card',
    num: '122',
    name: 'Collectible Card',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFEEF1F7), bg2: Color(0xFFE5E9F2), surface: Color(0xFFFFFFFF), surface2: Color(0xFFE9EDF6), ink: Color(0xFF131521), inkSoft: Color(0xFF474B5C), inkFaint: Color(0xFF767B8C), accent: Color(0xFF5C33E0), accentInk: Color(0xFFF7F4FF), line: Color(0x29131521)),
    radius: 10.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x24131521), offset: Offset(0.0, 10.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Jost', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 15.5, h3: 19.0, h2: 28.0, h1: 48.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.02, headingHeight: 1.1, bodyHeight: 1.66, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 120, base: 200, slow: 340, curve: _curveCubic15, enterDuration: 700, enterCurve: _curveCubic15, enterOffsetY: 26.0, enterStagger: 0.08, scrollDuration: 780, scrollOffsetY: 22.0, scrollTriggerPercent: 81.0, scrollOnce: true, hoverDuration: 200, hoverImageScale: 1.038, pinEnabled: true, pinScrub: 1.05),
  ),
  'comic-story': StyleLabTokens(
    slug: 'comic-story',
    num: '123',
    name: 'Comic Story',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFF8F2E2), bg2: Color(0xFFF0E8D3), surface: Color(0xFFFFFDF6), surface2: Color(0xFFECE4CD), ink: Color(0xFF111114), inkSoft: Color(0xFF494A45), inkFaint: Color(0xFF75766E), accent: Color(0xFFD92B1F), accentInk: Color(0xFFFFF8F2), line: Color(0x38111114)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF111114), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 14.0, body: 15.5, h3: 20.0, h2: 30.0, h1: 50.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.0, headingHeight: 1.08, bodyHeight: 1.62, displayTracking: 0.005, headingTracking: 0.005, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 80, base: 120, slow: 240, curve: _curveSteps30, enterDuration: 280, enterCurve: _curveSteps30, enterOffsetY: 22.0, enterStagger: 0.045, scrollDuration: 340, scrollOffsetY: 20.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 120, hoverImageScale: 1.016, pinEnabled: false, pinScrub: null),
  ),
  'album-sleeve': StyleLabTokens(
    slug: 'album-sleeve',
    num: '124',
    name: 'Album Sleeve',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFECEBE4), bg2: Color(0xFFE2E0D8), surface: Color(0xFFFBFAF5), surface2: Color(0xFFE6E4DA), ink: Color(0xFF131418), inkSoft: Color(0xFF45474E), inkFaint: Color(0xFF74767C), accent: Color(0xFFCF3B0C), accentInk: Color(0xFFFFF8F2), line: Color(0x2E131418)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x1A131418), offset: Offset(0.0, 2.0), blurRadius: 10.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Space Grotesk', fontMono: 'IBM Plex Mono', label: 10.5, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 34.0, h1: 66.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.92, headingHeight: 0.98, bodyHeight: 1.68, displayTracking: -0.015, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 380, slow: 620, curve: _curveCubic31, enterDuration: 900, enterCurve: _curveCubic31, enterOffsetY: 18.0, enterStagger: 0.1, scrollDuration: 950, scrollOffsetY: 24.0, scrollTriggerPercent: 80.0, scrollOnce: false, hoverDuration: 380, hoverImageScale: 1.062, pinEnabled: true, pinScrub: 0.7),
  ),
  'sports-energy': StyleLabTokens(
    slug: 'sports-energy',
    num: '125',
    name: 'Sports Energy',
    family: 'Oyuncul',
    palette: StyleLabPalette(bg: Color(0xFFF1F3F1), bg2: Color(0xFFE7EAE7), surface: Color(0xFFFFFFFF), surface2: Color(0xFFECEEE9), ink: Color(0xFF0F1412), inkSoft: Color(0xFF444D47), inkFaint: Color(0xFF6F7A73), accent: Color(0xFFF24A00), accentInk: Color(0xFF17100C), line: Color(0x2E0F1412)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF0F1412), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Rajdhani', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 15.5, h3: 20.0, h2: 32.0, h1: 62.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 0.9, headingHeight: 0.98, bodyHeight: 1.6, displayTracking: 0.005, headingTracking: 0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 60, base: 120, slow: 240, curve: _curveCubic32, enterDuration: 240, enterCurve: _curveCubic32, enterOffsetY: 36.0, enterStagger: 0.02, scrollDuration: 280, scrollOffsetY: 40.0, scrollTriggerPercent: 93.0, scrollOnce: false, hoverDuration: 80, hoverImageScale: 1.05, pinEnabled: false, pinScrub: null),
  ),
  'marble-vein': StyleLabTokens(
    slug: 'marble-vein',
    num: '126',
    name: 'Marble Vein',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF3F4F3), bg2: Color(0xFFE8EAE8), surface: Color(0xFFFDFDFC), surface2: Color(0xFFF0F2F0), ink: Color(0xFF14181A), inkSoft: Color(0xFF4C565A), inkFaint: Color(0xFF748083), accent: Color(0xFF242B2E), accentInk: Color(0xFFF5F7F6), line: Color(0x2414181A)),
    radius: 5.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0x1214181A), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x5914181A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Lora', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 54.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.16, bodyHeight: 1.64, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 160, base: 320, slow: 640, curve: _curveCubic33, enterDuration: 640, enterCurve: _curveCubic33, enterOffsetY: 13.0, enterStagger: 0.032, scrollDuration: 870, scrollOffsetY: 17.0, scrollTriggerPercent: 69.0, scrollOnce: true, hoverDuration: 310, hoverImageScale: 1.035, pinEnabled: false, pinScrub: null),
  ),
  'silk-drape': StyleLabTokens(
    slug: 'silk-drape',
    num: '127',
    name: 'Silk Drape',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF6EFE7), bg2: Color(0xFFEDE2D6), surface: Color(0xFFFDF9F3), surface2: Color(0xFFF3EADE), ink: Color(0xFF241A20), inkSoft: Color(0xFF5B4B52), inkFaint: Color(0xFF83737A), accent: Color(0xFF6B2F4A), accentInk: Color(0xFFF9F1F4), line: Color(0x24241A20)),
    radius: 20.0,
    radiusLg: 44.0,
    shadow: [BoxShadow(color: Color(0x593C222C), offset: Offset(0.0, 10.0), blurRadius: 30.0, spreadRadius: -18.0)],
    shadowHard: [BoxShadow(color: Color(0x4D6B2F4A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Poppins', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 20.0, h2: 32.0, h1: 60.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 300, displayHeight: 1.02, headingHeight: 1.14, bodyHeight: 1.7, displayTracking: 0.02, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.24),
    motion: StyleLabMotion(fast: 180, base: 380, slow: 760, curve: _curveCubic34, enterDuration: 760, enterCurve: _curveCubic34, enterOffsetY: 27.0, enterStagger: 0.078, scrollDuration: 920, scrollOffsetY: 29.0, scrollTriggerPercent: 65.0, scrollOnce: true, hoverDuration: 245, hoverImageScale: 1.048, pinEnabled: true, pinScrub: 0.78),
  ),
  'brass-copper': StyleLabTokens(
    slug: 'brass-copper',
    num: '128',
    name: 'Brass Copper',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFF1A1512), bg2: Color(0xFF130F0D), surface: Color(0xFF221B16), surface2: Color(0xFF2C231C), ink: Color(0xFFF0E7DA), inkSoft: Color(0xFFBDA892), inkFaint: Color(0xFF8A7862), accent: Color(0xFFC9743C), accentInk: Color(0xFF1A0D05), line: Color(0x26F0E7DA)),
    radius: 5.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0xD9000000), offset: Offset(0.0, 8.0), blurRadius: 24.0, spreadRadius: -16.0)],
    shadowHard: [BoxShadow(color: Color(0x73C9743C), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Jost', fontMono: 'Courier Prime', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.12, headingTracking: 0.08, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 130, base: 300, slow: 920, curve: _curveCubic35, enterDuration: 920, enterCurve: _curveCubic35, enterOffsetY: 9.0, enterStagger: 0.052, scrollDuration: 790, scrollOffsetY: 7.0, scrollTriggerPercent: 66.0, scrollOnce: true, hoverDuration: 195, hoverImageScale: 1.009, pinEnabled: true, pinScrub: 1.32),
  ),
  'porcelain-glaze': StyleLabTokens(
    slug: 'porcelain-glaze',
    num: '129',
    name: 'Porcelain Glaze',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF2F6F8), bg2: Color(0xFFE6EEF3), surface: Color(0xFFFBFDFE), surface2: Color(0xFFEEF4F7), ink: Color(0xFF141D26), inkSoft: Color(0xFF46586A), inkFaint: Color(0xFF6F8394), accent: Color(0xFF1D4F9C), accentInk: Color(0xFFF4F8FD), line: Color(0x1F141D26)),
    radius: 14.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x0F141D26), offset: Offset(0.0, 2.0), blurRadius: 6.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x591D4F9C), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Nunito', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 26.0, h1: 46.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 700, displayWeight: 500, displayHeight: 1.1, headingHeight: 1.22, bodyHeight: 1.68, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 150, base: 280, slow: 560, curve: _curveCubic36, enterDuration: 560, enterCurve: _curveCubic36, enterOffsetY: 33.0, enterStagger: 0.095, scrollDuration: 840, scrollOffsetY: 35.0, scrollTriggerPercent: 98.0, scrollOnce: false, hoverDuration: 360, hoverImageScale: 1.028, pinEnabled: false, pinScrub: null),
  ),
  'neo-brutalism': StyleLabTokens(
    slug: 'neo-brutalism',
    num: '13',
    name: 'Neo-Brutalism',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFFFFFDF5), bg2: Color(0xFFFFE9A8), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFFD93D), ink: Color(0xFF000000), inkSoft: Color(0xFF2B2B2B), inkFaint: Color(0xFF6B6B6B), accent: Color(0xFFFF5C8A), accentInk: Color(0xFF000000), line: Color(0xFF000000)),
    radius: 0.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0xFF000000), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Space Grotesk', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 32.0, h1: 64.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.98, headingHeight: 1.0, bodyHeight: 1.55, displayTracking: -0.02, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 90, base: 120, slow: 240, curve: _curveCubic5, enterDuration: 280, enterCurve: Curves.linear, enterOffsetY: 8.0, enterStagger: 0.02, scrollDuration: 320, scrollOffsetY: 16.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 90, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'leather-craft': StyleLabTokens(
    slug: 'leather-craft',
    num: '130',
    name: 'Leather Craft',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFE3CBA9), bg2: Color(0xFFD7BD98), surface: Color(0xFFF0E0C6), surface2: Color(0xFFE9D5B7), ink: Color(0xFF2B1D12), inkSoft: Color(0xFF5D452F), inkFaint: Color(0xFF7F6748), accent: Color(0xFF7A3F1D), accentInk: Color(0xFFF8ECDA), line: Color(0x382B1D12)),
    radius: 7.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x732B1D12), offset: Offset(0.0, 6.0), blurRadius: 16.0, spreadRadius: -10.0)],
    shadowHard: [BoxShadow(color: Color(0x667A3F1D), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'Lora', fontMono: 'Share Tech Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 50.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.2, bodyHeight: 1.66, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 170, base: 400, slow: 1080, curve: _curveCubic37, enterDuration: 1080, enterCurve: _curveCubic37, enterOffsetY: 21.0, enterStagger: 0.108, scrollDuration: 930, scrollOffsetY: 23.0, scrollTriggerPercent: 64.0, scrollOnce: true, hoverDuration: 430, hoverImageScale: 1.052, pinEnabled: true, pinScrub: 0.68),
  ),
  'optic-prism': StyleLabTokens(
    slug: 'optic-prism',
    num: '131',
    name: 'Optic Prism',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF2F6F7), bg2: Color(0xFFE7EEF0), surface: Color(0xFFFDFEFF), surface2: Color(0xFFEAF1F3), ink: Color(0xFF101A1F), inkSoft: Color(0xFF43535A), inkFaint: Color(0xFF74858C), accent: Color(0xFF0D5C63), accentInk: Color(0xFFF2FBFC), line: Color(0x24101A1F)),
    radius: 2.0,
    radiusLg: 10.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 26.0, h1: 44.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.3, headingHeight: 1.3, bodyHeight: 1.62, displayTracking: 0.02, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 110, base: 200, slow: 320, curve: _curveCubic38, enterDuration: 580, enterCurve: _curveCubic38, enterOffsetY: 14.0, enterStagger: 0.045, scrollDuration: 720, scrollOffsetY: 16.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 220, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 0.85),
  ),
  'wood-joinery': StyleLabTokens(
    slug: 'wood-joinery',
    num: '132',
    name: 'Wood Joinery',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF0E9DC), bg2: Color(0xFFE6DCCB), surface: Color(0xFFFAF5EC), surface2: Color(0xFFECE2D1), ink: Color(0xFF1F1C17), inkSoft: Color(0xFF4F4A41), inkFaint: Color(0xFF7B7469), accent: Color(0xFF33546B), accentInk: Color(0xFFF4F8FA), line: Color(0x291F1C17)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Jost', fontMono: 'Courier Prime', label: 12.0, caption: 13.0, small: 14.5, body: 16.5, h3: 22.0, h2: 30.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.18, bodyHeight: 1.66, displayTracking: -0.005, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 130, base: 240, slow: 380, curve: _curveCubic39, enterDuration: 660, enterCurve: _curveCubic39, enterOffsetY: 20.0, enterStagger: 0.06, scrollDuration: 800, scrollOffsetY: 24.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 240, hoverImageScale: 1.015, pinEnabled: false, pinScrub: null),
  ),
  'letterpress-print': StyleLabTokens(
    slug: 'letterpress-print',
    num: '133',
    name: 'Letterpress Print',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF7F4EC), bg2: Color(0xFFECE7DB), surface: Color(0xFFFDFBF5), surface2: Color(0xFFEFEADE), ink: Color(0xFF191713), inkSoft: Color(0xFF4A453D), inkFaint: Color(0xFF7A746A), accent: Color(0xFF2A2C6B), accentInk: Color(0xFFF3F2FB), line: Color(0x29191713)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Lora', fontMono: 'Courier Prime', label: 11.0, caption: 13.0, small: 14.5, body: 16.5, h3: 22.0, h2: 28.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.7, displayTracking: 0.06, headingTracking: 0.04, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 80, base: 160, slow: 280, curve: _curveCubic40, enterDuration: 300, enterCurve: _curveCubic40, enterOffsetY: 2.0, enterStagger: 0.035, scrollDuration: 340, scrollOffsetY: 6.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.005, pinEnabled: false, pinScrub: null),
  ),
  'concrete-monolith': StyleLabTokens(
    slug: 'concrete-monolith',
    num: '134',
    name: 'Concrete Monolith',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFDEDCD6), bg2: Color(0xFFD2CFC8), surface: Color(0xFFEAE8E3), surface2: Color(0xFFC6C3BC), ink: Color(0xFF14161A), inkSoft: Color(0xFF3F4448), inkFaint: Color(0xFF6B7074), accent: Color(0xFF7A5A17), accentInk: Color(0xFFF9F5E9), line: Color(0x3814161A)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.5, small: 14.5, body: 16.0, h3: 20.0, h2: 30.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.12, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 140, base: 280, slow: 460, curve: _curveCubic41, enterDuration: 950, enterCurve: _curveCubic41, enterOffsetY: 32.0, enterStagger: 0.08, scrollDuration: 1050, scrollOffsetY: 28.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 340, hoverImageScale: 1.01, pinEnabled: true, pinScrub: 1.15),
  ),
  'enamel-porcelain': StyleLabTokens(
    slug: 'enamel-porcelain',
    num: '135',
    name: 'Enamel Porcelain',
    family: 'Materyal & Lüks',
    palette: StyleLabPalette(bg: Color(0xFFF8F6F0), bg2: Color(0xFFEFEBE1), surface: Color(0xFFFFFDF8), surface2: Color(0xFFF2EEE4), ink: Color(0xFF131A18), inkSoft: Color(0xFF46514C), inkFaint: Color(0xFF757F7A), accent: Color(0xFF17543F), accentInk: Color(0xFFF1FAF4), line: Color(0x24131A18)),
    radius: 6.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0x1A131820), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poiret One', fontBody: 'Nunito', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 26.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.2, headingHeight: 1.25, bodyHeight: 1.66, displayTracking: 0.08, headingTracking: 0.06, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 100, base: 200, slow: 340, curve: _curveCubic42, enterDuration: 440, enterCurve: _curveCubic42, enterOffsetY: 10.0, enterStagger: 0.05, scrollDuration: 500, scrollOffsetY: 12.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 200, hoverImageScale: 1.025, pinEnabled: false, pinScrub: null),
  ),
  'speculative-scifi': StyleLabTokens(
    slug: 'speculative-scifi',
    num: '136',
    name: 'Spekülatif Bilim-Kurgu',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFFE9E8E2), bg2: Color(0xFFDFDED6), surface: Color(0xFFF4F3EE), surface2: Color(0xFFEEEDE6), ink: Color(0xFF1C1A16), inkSoft: Color(0xFF524D42), inkFaint: Color(0xFF837C6D), accent: Color(0xFF8A5A12), accentInk: Color(0xFFFFF6E6), line: Color(0x291C1A16)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Space Grotesk', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.22, bodyHeight: 1.58, displayTracking: 0.02, headingTracking: 0.04, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 90, base: 200, slow: 430, curve: _curveCubic43, enterDuration: 410, enterCurve: _curveCubic43, enterOffsetY: 11.0, enterStagger: 0.047, scrollDuration: 430, scrollOffsetY: 17.0, scrollTriggerPercent: 99.0, scrollOnce: true, hoverDuration: 185, hoverImageScale: 1.011, pinEnabled: true, pinScrub: 0.58),
  ),
  'volumetric-data': StyleLabTokens(
    slug: 'volumetric-data',
    num: '137',
    name: 'Hologram & Uzamsal Veri',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFF0A1428), bg2: Color(0xFF0E1A32), surface: Color(0xFF122240), surface2: Color(0xFF17294A), ink: Color(0xFFE6EEF8), inkSoft: Color(0xFFA6B8CF), inkFaint: Color(0xFF6F819A), accent: Color(0xFFFFB347), accentInk: Color(0xFF2A1500), line: Color(0x29E6EEF8)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x8C030A16), offset: Offset(0.0, 10.0), blurRadius: 30.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'IBM Plex Mono', fontBody: 'Jost', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.12, headingHeight: 1.24, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 150, base: 380, slow: 960, curve: _curveCubic44, enterDuration: 960, enterCurve: _curveCubic44, enterOffsetY: 38.0, enterStagger: 0.098, scrollDuration: 890, scrollOffsetY: 31.0, scrollTriggerPercent: 63.0, scrollOnce: true, hoverDuration: 430, hoverImageScale: 1.029, pinEnabled: false, pinScrub: null),
  ),
  'agent-orchestration': StyleLabTokens(
    slug: 'agent-orchestration',
    num: '138',
    name: 'AI-native Ajan Arayüzü',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFFF4F5F6), bg2: Color(0xFFEAECEE), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F8F9), ink: Color(0xFF16181C), inkSoft: Color(0xFF4B5158), inkFaint: Color(0xFF7C838B), accent: Color(0xFF3B3F8F), accentInk: Color(0xFFF6F7FF), line: Color(0x2416181C)),
    radius: 6.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x1416181C), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Mono', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 24.0, h1: 34.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.16, headingHeight: 1.3, bodyHeight: 1.55, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 105, base: 210, slow: 380, curve: _curveCubic45, enterDuration: 270, enterCurve: _curveCubic45, enterOffsetY: 1.0, enterStagger: 0.013, scrollDuration: 290, scrollOffsetY: 6.0, scrollTriggerPercent: 61.0, scrollOnce: true, hoverDuration: 105, hoverImageScale: 1.001, pinEnabled: false, pinScrub: null),
  ),
  'bio-synthetic': StyleLabTokens(
    slug: 'bio-synthetic',
    num: '139',
    name: 'Biyo & Sentetik',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFF0F1412), bg2: Color(0xFF141A17), surface: Color(0xFF19211D), surface2: Color(0xFF1F2924), ink: Color(0xFFE9F2EC), inkSoft: Color(0xFFA9BFB2), inkFaint: Color(0xFF75897E), accent: Color(0xFFC8F05F), accentInk: Color(0xFF141F07), line: Color(0x29E9F2EC)),
    radius: 20.0,
    radiusLg: 32.0,
    shadow: [BoxShadow(color: Color(0x8C040A07), offset: Offset(0.0, 14.0), blurRadius: 34.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 14.0, body: 17.0, h3: 24.0, h2: 34.0, h1: 50.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.68, displayTracking: 0.0, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 190, base: 420, slow: 1080, curve: _curveCubic46, enterDuration: 1080, enterCurve: _curveCubic46, enterOffsetY: 46.0, enterStagger: 0.146, scrollDuration: 1070, scrollOffsetY: 33.0, scrollTriggerPercent: 60.0, scrollOnce: true, hoverDuration: 490, hoverImageScale: 1.043, pinEnabled: true, pinScrub: 1.18),
  ),
  'anti-design': StyleLabTokens(
    slug: 'anti-design',
    num: '14',
    name: 'Anti-Design',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFFF2E9DA), bg2: Color(0xFFD6FF3F), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFF3B6B), ink: Color(0xFF1B1B1B), inkSoft: Color(0xFF4A4A4A), inkFaint: Color(0xFF7B7B7B), accent: Color(0xFFFF3B6B), accentInk: Color(0xFF1B1B1B), line: Color(0xFF1B1B1B)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF1B1B1B), offset: Offset(8.0, 8.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 40.0, 64.0, 96.0, 96.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Space Grotesk', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 15.0, body: 15.0, h3: 22.0, h2: 56.0, h1: 104.0, h1Mobile: 48.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.86, headingHeight: 0.9, bodyHeight: 1.55, displayTracking: -0.03, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 90, base: 160, slow: 240, curve: _curveSteps30, enterDuration: 340, enterCurve: _curveSteps30, enterOffsetY: 16.0, enterStagger: 0.05, scrollDuration: 400, scrollOffsetY: 16.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'nanotech': StyleLabTokens(
    slug: 'nanotech',
    num: '140',
    name: 'Nanoteknik',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFFF7F7F5), bg2: Color(0xFFEDEDE9), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF4F4F1), ink: Color(0xFF191B1E), inkSoft: Color(0xFF4D5257), inkFaint: Color(0xFF7F858A), accent: Color(0xFF22272C), accentInk: Color(0xFFF7F7F5), line: Color(0x29191B1E)),
    radius: 3.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x1A191B1E), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 19.0, h2: 27.0, h1: 42.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.08, headingHeight: 1.22, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 130, base: 300, slow: 610, curve: _curveCubic47, enterDuration: 610, enterCurve: _curveCubic47, enterOffsetY: 21.0, enterStagger: 0.031, scrollDuration: 670, scrollOffsetY: 23.0, scrollTriggerPercent: 59.0, scrollOnce: true, hoverDuration: 155, hoverImageScale: 1.007, pinEnabled: true, pinScrub: 0.4),
  ),
  'planetary-service': StyleLabTokens(
    slug: 'planetary-service',
    num: '141',
    name: 'Planetary Service',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFF0A1420), bg2: Color(0xFF0E1A28), surface: Color(0xFF12202F), surface2: Color(0xFF182A3C), ink: Color(0xFFE6EEF7), inkSoft: Color(0xFFA4B6C8), inkFaint: Color(0xFF75899E), accent: Color(0xFF2F6BC4), accentInk: Color(0xFFFFFFFF), line: Color(0x26E6EEF7)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [BoxShadow(color: Color(0xF202060C), offset: Offset(0.0, 16.0), blurRadius: 36.0, spreadRadius: -30.0)],
    shadowHard: [BoxShadow(color: Color(0x26E6EEF7), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'IBM Plex Mono', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 24.0, h1: 42.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.55, displayTracking: 0.04, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 110, base: 190, slow: 300, curve: _curveCubic48, enterDuration: 570, enterCurve: _curveCubic48, enterOffsetY: 22.0, enterStagger: 0.06, scrollDuration: 670, scrollOffsetY: 26.0, scrollTriggerPercent: 81.0, scrollOnce: true, hoverDuration: 190, hoverImageScale: 1.022, pinEnabled: true, pinScrub: 0.85),
  ),
  'quantum-lab': StyleLabTokens(
    slug: 'quantum-lab',
    num: '142',
    name: 'Quantum Lab',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFF9B99A3), bg2: Color(0xFF92909A), surface: Color(0xFFA6A4AE), surface2: Color(0xFF86848E), ink: Color(0xFF14121A), inkSoft: Color(0xFF2F2C38), inkFaint: Color(0xFF4A4753), accent: Color(0xFF5B3FA8), accentInk: Color(0xFFFFFFFF), line: Color(0x3D14121A)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF14121A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Courier Prime', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 25.0, h1: 40.0, h1Mobile: 25.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.14, headingHeight: 1.24, bodyHeight: 1.58, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 95, base: 160, slow: 240, curve: _curveCubic49, enterDuration: 290, enterCurve: _curveCubic49, enterOffsetY: 0.0, enterStagger: 0.035, scrollDuration: 350, scrollOffsetY: 8.0, scrollTriggerPercent: 89.0, scrollOnce: true, hoverDuration: 105, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'retro-future': StyleLabTokens(
    slug: 'retro-future',
    num: '143',
    name: 'Retro Future',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFFF3ECDD), bg2: Color(0xFFECE3D0), surface: Color(0xFFFAF5E9), surface2: Color(0xFFE8DFCA), ink: Color(0xFF1B1710), inkSoft: Color(0xFF4F4737), inkFaint: Color(0xFF857A63), accent: Color(0xFF7A5C04), accentInk: Color(0xFFFFFFFF), line: Color(0x291B1710)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x8C1B1710), offset: Offset(0.0, 20.0), blurRadius: 44.0, spreadRadius: -34.0)],
    shadowHard: [BoxShadow(color: Color(0xFF1B1710), offset: Offset(0.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Jost', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.04, headingHeight: 1.16, bodyHeight: 1.62, displayTracking: 0.1, headingTracking: 0.06, bodyTracking: 0.0, labelTracking: 0.22),
    motion: StyleLabMotion(fast: 140, base: 240, slow: 340, curve: _curveCubic50, enterDuration: 610, enterCurve: _curveCubic50, enterOffsetY: 16.0, enterStagger: 0.09, scrollDuration: 700, scrollOffsetY: 18.0, scrollTriggerPercent: 77.0, scrollOnce: true, hoverDuration: 340, hoverImageScale: 1.035, pinEnabled: true, pinScrub: 1.1),
  ),
  'virtual-engine': StyleLabTokens(
    slug: 'virtual-engine',
    num: '144',
    name: 'Virtual Engine',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFF120C1C), bg2: Color(0xFF181024), surface: Color(0xFF1D142B), surface2: Color(0xFF251A36), ink: Color(0xFFEEE8FA), inkSoft: Color(0xFFB3A7C9), inkFaint: Color(0xFF7F7395), accent: Color(0xFFC7307F), accentInk: Color(0xFFFFFFFF), line: Color(0x26EEE8FA)),
    radius: 8.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0xF204010A), offset: Offset(0.0, 14.0), blurRadius: 30.0, spreadRadius: -26.0)],
    shadowHard: [BoxShadow(color: Color(0x26EEE8FA), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'VT323', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 20.0, h2: 28.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.08, headingHeight: 1.2, bodyHeight: 1.54, displayTracking: 0.02, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 70, base: 130, slow: 200, curve: _curveSteps51, enterDuration: 210, enterCurve: _curveSteps51, enterOffsetY: 32.0, enterStagger: 0.02, scrollDuration: 240, scrollOffsetY: 40.0, scrollTriggerPercent: 95.0, scrollOnce: true, hoverDuration: 70, hoverImageScale: 1.05, pinEnabled: false, pinScrub: null),
  ),
  'zero-gravity': StyleLabTokens(
    slug: 'zero-gravity',
    num: '145',
    name: 'Zero Gravity',
    family: 'Deneysel & Gelecek',
    palette: StyleLabPalette(bg: Color(0xFFEEF4F2), bg2: Color(0xFFE3ECEA), surface: Color(0xFFF8FBFA), surface2: Color(0xFFDFE9E6), ink: Color(0xFF0F1A19), inkSoft: Color(0xFF3F5450), inkFaint: Color(0xFF74857F), accent: Color(0xFF1D6B52), accentInk: Color(0xFFFFFFFF), line: Color(0x210F1A19)),
    radius: 28.0,
    radiusLg: 36.0,
    shadow: [BoxShadow(color: Color(0x99081A18), offset: Offset(0.0, 30.0), blurRadius: 70.0, spreadRadius: -48.0)],
    shadowHard: [BoxShadow(color: Color(0x210F1A19), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poiret One', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 27.0, h1: 48.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.22, bodyHeight: 1.66, displayTracking: 0.06, headingTracking: 0.03, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 200, base: 320, slow: 460, curve: _curveCubic52, enterDuration: 1080, enterCurve: _curveCubic52, enterOffsetY: 36.0, enterStagger: 0.14, scrollDuration: 1050, scrollOffsetY: 30.0, scrollTriggerPercent: 74.0, scrollOnce: true, hoverDuration: 480, hoverImageScale: 1.018, pinEnabled: true, pinScrub: 1.32),
  ),
  'noir-estate': StyleLabTokens(
    slug: 'noir-estate',
    num: '146',
    name: 'Noir Estate',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFF0D0B09), bg2: Color(0xFF070605), surface: Color(0xFF171310), surface2: Color(0xFF211B15), ink: Color(0xFFF5F0E7), inkSoft: Color(0xFFC7BCA9), inkFaint: Color(0xFF8F8574), accent: Color(0xFFD3AF62), accentInk: Color(0xFF170F04), line: Color(0x24F5F0E7)),
    radius: 6.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0xF2000000), offset: Offset(0.0, 18.0), blurRadius: 48.0, spreadRadius: -28.0)],
    shadowHard: [BoxShadow(color: Color(0xFFD3AF62), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Jost', fontMono: 'JetBrains Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 300, displayHeight: 1.06, headingHeight: 1.18, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.22),
    motion: StyleLabMotion(fast: 140, base: 320, slow: 880, curve: _curveCubic53, enterDuration: 880, enterCurve: _curveCubic53, enterOffsetY: 14.0, enterStagger: 0.06, scrollDuration: 900, scrollOffsetY: 10.0, scrollTriggerPercent: 72.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.014, pinEnabled: true, pinScrub: 1.22),
  ),
  'agency-portfolio': StyleLabTokens(
    slug: 'agency-portfolio',
    num: '147',
    name: 'Agency Portfolio',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFFF3F1EC), bg2: Color(0xFFEAE7E0), surface: Color(0xFFFFFFFF), surface2: Color(0xFFE4E0D7), ink: Color(0xFF0E0E0D), inkSoft: Color(0xFF55534D), inkFaint: Color(0xFF8B8880), accent: Color(0xFF1F45D6), accentInk: Color(0xFFFFFFFF), line: Color(0x240E0E0D)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0xFF0E0E0D), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    shadowHard: [BoxShadow(color: Color(0xFF1F45D6), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 2.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Inter', fontMono: 'Space Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 24.0, h2: 36.0, h1: 72.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 240, slow: 620, curve: _curveCubic54, enterDuration: 620, enterCurve: _curveCubic54, enterOffsetY: 20.0, enterStagger: 0.04, scrollDuration: 540, scrollOffsetY: 16.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.03, pinEnabled: false, pinScrub: 0.0),
  ),
  'product-launch': StyleLabTokens(
    slug: 'product-launch',
    num: '148',
    name: 'Product Launch',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFF070B14), bg2: Color(0xFF04070E), surface: Color(0xFF0E1522), surface2: Color(0xFF16202F), ink: Color(0xFFEEF3FB), inkSoft: Color(0xFFB3C1D6), inkFaint: Color(0xFF7D8BA1), accent: Color(0xFF6FE8B8), accentInk: Color(0xFF04140D), line: Color(0x1FEEF3FB)),
    radius: 10.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0xE6000000), offset: Offset(0.0, 24.0), blurRadius: 60.0, spreadRadius: -32.0)],
    shadowHard: [BoxShadow(color: Color(0xFF6FE8B8), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0), BoxShadow(color: Color(0xFF6FE8B8), offset: Offset(0.0, 10.0), blurRadius: 30.0, spreadRadius: -18.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Poppins', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 22.0, h2: 32.0, h1: 52.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.06, headingHeight: 1.14, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 130, base: 300, slow: 740, curve: _curveCubic8, enterDuration: 740, enterCurve: _curveCubic8, enterOffsetY: 24.0, enterStagger: 0.05, scrollDuration: 700, scrollOffsetY: 18.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 220, hoverImageScale: 1.02, pinEnabled: false, pinScrub: 0.0),
  ),
  'boutique-hotel': StyleLabTokens(
    slug: 'boutique-hotel',
    num: '149',
    name: 'Boutique Hotel',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFF16110C), bg2: Color(0xFF100C08), surface: Color(0xFF211A13), surface2: Color(0xFF2B2219), ink: Color(0xFFF3E9DC), inkSoft: Color(0xFFC8B7A3), inkFaint: Color(0xFF94836F), accent: Color(0xFFD97F4E), accentInk: Color(0xFF1A0B04), line: Color(0x24F3E9DC)),
    radius: 2.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0xE6000000), offset: Offset(0.0, 16.0), blurRadius: 40.0, spreadRadius: -26.0)],
    shadowHard: [BoxShadow(color: Color(0xFFD97F4E), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 46.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 150, base: 340, slow: 1020, curve: _curveCubic55, enterDuration: 1020, enterCurve: _curveCubic55, enterOffsetY: 10.0, enterStagger: 0.07, scrollDuration: 1000, scrollOffsetY: 8.0, scrollTriggerPercent: 68.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.018, pinEnabled: false, pinScrub: 0.0),
  ),
  'acid-graphics': StyleLabTokens(
    slug: 'acid-graphics',
    num: '15',
    name: 'Acid Graphics',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFF050505), bg2: Color(0xFF101010), surface: Color(0xFF0E0E0E), surface2: Color(0xFF161616), ink: Color(0xFFF2FFF0), inkSoft: Color(0xB8F2FFF0), inkFaint: Color(0x73F2FFF0), accent: Color(0xFFCCFF00), accentInk: Color(0xFF050505), line: Color(0x59CCFF00)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [BoxShadow(color: Color(0x40CCFF00), offset: Offset(0.0, 0.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 16.0, 24.0, 40.0, 64.0, 96.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Archivo Expanded', fontBody: 'Space Grotesk', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 44.0, h1: 88.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 0.9, headingHeight: 0.95, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 90, base: 160, slow: 240, curve: _curveSteps12, enterDuration: 250, enterCurve: _curveSteps12, enterOffsetY: 4.0, enterStagger: 0.03, scrollDuration: 240, scrollOffsetY: 16.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 80, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'lookbook-editorial': StyleLabTokens(
    slug: 'lookbook-editorial',
    num: '150',
    name: 'Lookbook Editorial',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFFEFEBE4), bg2: Color(0xFFE6E1D8), surface: Color(0xFFF7F4EF), surface2: Color(0xFFFFFFFF), ink: Color(0xFF13110F), inkSoft: Color(0xFF5A554E), inkFaint: Color(0xFF857F76), accent: Color(0xFFA8402A), accentInk: Color(0xFFFDF6F2), line: Color(0x2413110F)),
    radius: 0.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0xFF13110F), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    shadowHard: [BoxShadow(color: Color(0xFFA8402A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 17.0, h3: 24.0, h2: 38.0, h1: 62.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.04, headingHeight: 1.14, bodyHeight: 1.7, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 110, base: 280, slow: 700, curve: _curveCubic56, enterDuration: 700, enterCurve: _curveCubic56, enterOffsetY: 12.0, enterStagger: 0.09, scrollDuration: 620, scrollOffsetY: 14.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 160, hoverImageScale: 1.02, pinEnabled: false, pinScrub: 0.0),
  ),
  'dark-dashboard': StyleLabTokens(
    slug: 'dark-dashboard',
    num: '151',
    name: 'Dark Dashboard',
    family: 'Sahne & Prestij',
    palette: StyleLabPalette(bg: Color(0xFF0B0D10), bg2: Color(0xFF07090B), surface: Color(0xFF12161A), surface2: Color(0xFF1A2026), ink: Color(0xFFE9EEF4), inkSoft: Color(0xFFA9B6C2), inkFaint: Color(0xFF75818D), accent: Color(0xFF58C8FF), accentInk: Color(0xFF04141F), line: Color(0x1FE9EEF4)),
    radius: 8.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0xE6000000), offset: Offset(0.0, 20.0), blurRadius: 48.0, spreadRadius: -30.0)],
    shadowHard: [BoxShadow(color: Color(0xFF58C8FF), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 13.0, body: 14.0, h3: 20.0, h2: 26.0, h1: 34.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.15, headingHeight: 1.22, bodyHeight: 1.55, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 100, base: 220, slow: 480, curve: _curveCubic57, enterDuration: 480, enterCurve: _curveCubic57, enterOffsetY: 16.0, enterStagger: 0.03, scrollDuration: 440, scrollOffsetY: 12.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 140, hoverImageScale: 1.01, pinEnabled: false, pinScrub: 0.0),
  ),
  'memphis': StyleLabTokens(
    slug: 'memphis',
    num: '16',
    name: 'Memphis',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFFFFF6E9), bg2: Color(0xFFFFE8CC), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFFD400), ink: Color(0xFF111111), inkSoft: Color(0xFF3D3D3D), inkFaint: Color(0xFF767676), accent: Color(0xFFFF4E50), accentInk: Color(0xFF111111), line: Color(0xFF111111)),
    radius: 10.0,
    radiusLg: 18.0,
    shadow: [BoxShadow(color: Color(0xFF111111), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0xFF111111), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poppins', fontBody: 'Poppins', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 32.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.05, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 100, base: 180, slow: 260, curve: _curveCubic58, enterDuration: 300, enterCurve: _curveCubic58, enterOffsetY: 14.0, enterStagger: 0.04, scrollDuration: 280, scrollOffsetY: 16.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 100, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'maximalism': StyleLabTokens(
    slug: 'maximalism',
    num: '17',
    name: 'Maximalism',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFFF6E7D8), bg2: Color(0xFFE8CFAE), surface: Color(0xFFFFFAF3), surface2: Color(0xFFF2C14E), ink: Color(0xFF221410), inkSoft: Color(0xFF57403A), inkFaint: Color(0xFF8F7A72), accent: Color(0xFF7A1F3D), accentInk: Color(0xFFF6E7D8), line: Color(0x33221410)),
    radius: 6.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0xD9221410), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 72.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'Inter', fontMono: 'Space Mono', label: 10.0, caption: 13.0, small: 15.0, body: 16.0, h3: 20.0, h2: 40.0, h1: 68.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.0, headingHeight: 1.05, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 120, base: 240, slow: 360, curve: _curveCubic1, enterDuration: 420, enterCurve: _curveCubic1, enterOffsetY: 20.0, enterStagger: 0.06, scrollDuration: 500, scrollOffsetY: 16.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 140, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'dopamine-ui': StyleLabTokens(
    slug: 'dopamine-ui',
    num: '18',
    name: 'Dopamine UI',
    family: 'Cesur',
    palette: StyleLabPalette(bg: Color(0xFFFFFDF7), bg2: Color(0xFFFFF3D6), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFFE3EC), ink: Color(0xFF16121F), inkSoft: Color(0xFF4A4358), inkFaint: Color(0xFF837B93), accent: Color(0xFFFF3D71), accentInk: Color(0xFF16121F), line: Color(0x1A16121F)),
    radius: 18.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0x2EFF3D71), offset: Offset(0.0, 10.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poppins', fontBody: 'Poppins', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 28.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.15, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 240, slow: 400, curve: _curveCubic5, enterDuration: 360, enterCurve: _curveCubic5, enterOffsetY: 18.0, enterStagger: 0.05, scrollDuration: 300, scrollOffsetY: 16.0, scrollTriggerPercent: 89.0, scrollOnce: true, hoverDuration: 130, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'y2k': StyleLabTokens(
    slug: 'y2k',
    num: '19',
    name: 'Y2K',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFFEAF4FF), bg2: Color(0xFFD9E9FF), surface: Color(0xFFFFFFFF), surface2: Color(0xFFE6F0FF), ink: Color(0xFF1B2340), inkSoft: Color(0xFF4B557A), inkFaint: Color(0xFF8B94B5), accent: Color(0xFF6F4DE8), accentInk: Color(0xFFFFFFFF), line: Color(0x595A78DC)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x597896FF), offset: Offset(0.0, 6.0), blurRadius: 18.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 28.0, h1: 52.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 120, base: 220, slow: 300, curve: _curveCubic5, enterDuration: 400, enterCurve: Curves.linear, enterOffsetY: 12.0, enterStagger: 0.04, scrollDuration: 550, scrollOffsetY: 20.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 140, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'vaporwave': StyleLabTokens(
    slug: 'vaporwave',
    num: '20',
    name: 'Vaporwave',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF1A1230), bg2: Color(0xFF2A1B4D), surface: Color(0x24B9A7E0), surface2: Color(0x1FF2A0C0), ink: Color(0xFFF6EFFF), inkSoft: Color(0xBDF6EFFF), inkFaint: Color(0x80F6EFFF), accent: Color(0xFFF2A0C0), accentInk: Color(0xFF2A1B4D), line: Color(0x66F2A0C0)),
    radius: 6.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0x736B4E9B), offset: Offset(0.0, 10.0), blurRadius: 40.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 88.0, 88.0, 88.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Poppins', fontMono: 'Space Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 26.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.2, headingHeight: 1.25, bodyHeight: 1.7, displayTracking: 0.14, headingTracking: 0.12, bodyTracking: 0.01, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 160, base: 480, slow: 600, curve: Curves.easeInOut, enterDuration: 650, enterCurve: Curves.easeInOut, enterOffsetY: 20.0, enterStagger: 0.07, scrollDuration: 700, scrollOffsetY: 20.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'synthwave': StyleLabTokens(
    slug: 'synthwave',
    num: '21',
    name: 'Synthwave',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF120458), bg2: Color(0xFF2B1055), surface: Color(0xFF1B0A63), surface2: Color(0xFF2A1178), ink: Color(0xFFFDFDFF), inkSoft: Color(0xC7FDFDFF), inkFaint: Color(0x85FDFDFF), accent: Color(0xFFFF2A6D), accentInk: Color(0xFF120458), line: Color(0x8C05D9E8)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0xA6FF2A6D), offset: Offset(0.0, 0.0), blurRadius: 12.0, spreadRadius: 0.0), BoxShadow(color: Color(0x5905D9E8), offset: Offset(0.0, 0.0), blurRadius: 32.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 88.0, 88.0, 88.0],
    typography: StyleLabType(fontDisplay: 'Outrun', fontBody: 'Inter', fontMono: 'Space Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 34.0, h1: 64.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 1.05, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: 0.06, headingTracking: 0.06, bodyTracking: 0.01, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 120, base: 260, slow: 320, curve: Curves.easeOut, enterDuration: 500, enterCurve: Curves.linear, enterOffsetY: 16.0, enterStagger: 0.05, scrollDuration: 600, scrollOffsetY: 20.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'cyberpunk': StyleLabTokens(
    slug: 'cyberpunk',
    num: '22',
    name: 'Cyberpunk',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF0B0B0F), bg2: Color(0xFF15151D), surface: Color(0xD914141C), surface2: Color(0xFF1B1B26), ink: Color(0xFFF2F5F7), inkSoft: Color(0xC2F2F5F7), inkFaint: Color(0x80F2F5F7), accent: Color(0xFFF9F002), accentInk: Color(0xFF0B0B0F), line: Color(0x8C05D9E8)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x5905D9E8), offset: Offset(0.0, 0.0), blurRadius: 16.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'IBM Plex Mono', fontMono: 'Share Tech Mono', label: 9.0, caption: 11.0, small: 13.0, body: 15.0, h3: 17.0, h2: 30.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.05, headingHeight: 1.15, bodyHeight: 1.65, displayTracking: 0.1, headingTracking: 0.1, bodyTracking: 0.01, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 90, base: 180, slow: 240, curve: _curveSteps30, enterDuration: 280, enterCurve: _curveSteps30, enterOffsetY: 10.0, enterStagger: 0.03, scrollDuration: 500, scrollOffsetY: 20.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 90, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'cybercore': StyleLabTokens(
    slug: 'cybercore',
    num: '23',
    name: 'Cybercore',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF05080A), bg2: Color(0xFF0A1014), surface: Color(0xFF0A1014), surface2: Color(0xFF0F171C), ink: Color(0xFFD7FFE9), inkSoft: Color(0xFF86C9A6), inkFaint: Color(0xFF4D7A63), accent: Color(0xFF33FF99), accentInk: Color(0xFF05080A), line: Color(0x5933FF99)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [BoxShadow(color: Color(0x4733FF99), offset: Offset(0.0, 0.0), blurRadius: 10.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'JetBrains Mono', fontBody: 'JetBrains Mono', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 16.0, h2: 22.0, h1: 40.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.2, headingHeight: 1.3, bodyHeight: 1.65, displayTracking: 0.04, headingTracking: 0.04, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 90, base: 160, slow: 240, curve: _curveSteps12, enterDuration: 240, enterCurve: _curveSteps12, enterOffsetY: 8.0, enterStagger: 0.02, scrollDuration: 520, scrollOffsetY: 20.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 80, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'pixel-art': StyleLabTokens(
    slug: 'pixel-art',
    num: '24',
    name: 'Pixel Art',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF1A1C2C), bg2: Color(0xFF23263A), surface: Color(0xFF29366F), surface2: Color(0xFF3B5DC9), ink: Color(0xFFF4F4F4), inkSoft: Color(0xFFC2C3C7), inkFaint: Color(0xFF8B8D98), accent: Color(0xFFFFCD75), accentInk: Color(0xFF1A1C2C), line: Color(0xFFF4F4F4)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [BoxShadow(color: Color(0xFFF4F4F4), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 2.0), BoxShadow(color: Color(0xFF1A1C2C), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 4.0)],
    shadowHard: [BoxShadow(color: Color(0xFF0D0E17), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Press Start 2P', fontBody: 'Inter', fontMono: 'Silkscreen', label: 9.0, caption: 12.0, small: 14.0, body: 16.0, h3: 12.0, h2: 18.0, h1: 28.0, h1Mobile: 18.0, bodyWeight: 400, strongWeight: 400, displayWeight: 400, displayHeight: 1.4, headingHeight: 1.4, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 80, base: 160, slow: 240, curve: _curveSteps59, enterDuration: 300, enterCurve: _curveSteps60, enterOffsetY: 6.0, enterStagger: 0.05, scrollDuration: 580, scrollOffsetY: 20.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 60, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'frutiger-aero': StyleLabTokens(
    slug: 'frutiger-aero',
    num: '25',
    name: 'Frutiger Aero',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFFDFF1FF), bg2: Color(0xFFBFE3FF), surface: Color(0xFFFFFFFF), surface2: Color(0xFFEAF6FF), ink: Color(0xFF0D2B45), inkSoft: Color(0xFF365A75), inkFaint: Color(0xFF6F8FA8), accent: Color(0xFF2F9BE0), accentInk: Color(0xFF0D2B45), line: Color(0xD9FFFFFF)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x472F9BE0), offset: Offset(0.0, 8.0), blurRadius: 20.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 72.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Segoe UI', fontBody: 'Segoe UI', fontMono: 'Consolas', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 140, base: 260, slow: 320, curve: Curves.easeOut, enterDuration: 550, enterCurve: Curves.easeOut, enterOffsetY: 22.0, enterStagger: 0.06, scrollDuration: 650, scrollOffsetY: 20.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 240, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'art-deco': StyleLabTokens(
    slug: 'art-deco',
    num: '26',
    name: 'Art Deco',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFF0E1B17), bg2: Color(0xFF14241E), surface: Color(0xFF12211C), surface2: Color(0xFF18302A), ink: Color(0xFFEDE3D2), inkSoft: Color(0xFFBCB2A1), inkFaint: Color(0xFF8A8172), accent: Color(0xFFC8A24A), accentInk: Color(0xFF0E1B17), line: Color(0x8CC8A24A)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 96.0, 96.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Jost', fontMono: 'Courier New', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 28.0, h1: 52.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.7, displayTracking: 0.22, headingTracking: 0.18, bodyTracking: 0.03, labelTracking: 0.3),
    motion: StyleLabMotion(fast: 160, base: 400, slow: 600, curve: Curves.easeInOut, enterDuration: 580, enterCurve: Curves.easeInOut, enterOffsetY: 28.0, enterStagger: 0.09, scrollDuration: 680, scrollOffsetY: 20.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'victorian': StyleLabTokens(
    slug: 'victorian',
    num: '27',
    name: 'Victorian',
    family: 'Retro',
    palette: StyleLabPalette(bg: Color(0xFFEFE7D6), bg2: Color(0xFFE5DBC5), surface: Color(0xFFF7F1E3), surface2: Color(0xFFEAE0CB), ink: Color(0xFF1C1A17), inkSoft: Color(0xFF4F4940), inkFaint: Color(0xFF857C6E), accent: Color(0xFF5A1E2B), accentInk: Color(0xFFF7F1E3), line: Color(0x731C1A17)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 80.0, 80.0, 80.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'EB Garamond', fontMono: 'Courier New', label: 10.0, caption: 12.0, small: 15.0, body: 17.0, h3: 20.0, h2: 28.0, h1: 50.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.7, displayTracking: 0.04, headingTracking: 0.02, bodyTracking: 0.01, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 140, base: 300, slow: 500, curve: Curves.easeOut, enterDuration: 520, enterCurve: Curves.easeOut, enterOffsetY: 24.0, enterStagger: 0.08, scrollDuration: 620, scrollOffsetY: 20.0, scrollTriggerPercent: 79.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'surrealism': StyleLabTokens(
    slug: 'surrealism',
    num: '28',
    name: 'Surrealism',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFE7E2DA), bg2: Color(0xFFD9D2C7), surface: Color(0xFFFBF9F5), surface2: Color(0xFFEFEAE1), ink: Color(0xFF1E1C1A), inkSoft: Color(0xFF56514A), inkFaint: Color(0xFF8D877E), accent: Color(0xFFE4572E), accentInk: Color(0xFF1E1C1A), line: Color(0x1F1E1C1A)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x291E1C1A), offset: Offset(0.0, 24.0), blurRadius: 60.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 88.0, 88.0, 88.0],
    typography: StyleLabType(fontDisplay: 'Inter', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 15.0, h3: 20.0, h2: 40.0, h1: 88.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 0.92, headingHeight: 1.0, bodyHeight: 1.6, displayTracking: -0.03, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 120, base: 320, slow: 600, curve: Curves.easeOut, enterDuration: 1100, enterCurve: Curves.easeOut, enterOffsetY: 36.0, enterStagger: 0.13, scrollDuration: 1050, scrollOffsetY: 32.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 420, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'ethereal': StyleLabTokens(
    slug: 'ethereal',
    num: '29',
    name: 'Ethereal',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFF7F4F8), bg2: Color(0xFFEFE9F4), surface: Color(0x8CFFFFFF), surface2: Color(0x59FFFFFF), ink: Color(0xFF3B3542), inkSoft: Color(0xFF635C6E), inkFaint: Color(0xFF968FA3), accent: Color(0xFF7A63BD), accentInk: Color(0xFFFFFFFF), line: Color(0x1A3B3542)),
    radius: 20.0,
    radiusLg: 28.0,
    shadow: [BoxShadow(color: Color(0x298F7BD6), offset: Offset(0.0, 20.0), blurRadius: 50.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 96.0, 96.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 18.0, h2: 28.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 300, displayHeight: 1.2, headingHeight: 1.25, bodyHeight: 1.75, displayTracking: 0.03, headingTracking: 0.03, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 160, base: 600, slow: 800, curve: Curves.easeInOut, enterDuration: 1150, enterCurve: Curves.easeInOut, enterOffsetY: 40.0, enterStagger: 0.14, scrollDuration: 1200, scrollOffsetY: 32.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 380, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'bohemian': StyleLabTokens(
    slug: 'bohemian',
    num: '30',
    name: 'Bohemian',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFF3E9D8), bg2: Color(0xFFE8D9C0), surface: Color(0xFFFBF4E6), surface2: Color(0xFFF0E0C4), ink: Color(0xFF2E2620), inkSoft: Color(0xFF5F5347), inkFaint: Color(0xFF91857A), accent: Color(0xFFB45634), accentInk: Color(0xFFFFF8EE), line: Color(0x2E2E2620)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x1F2E2620), offset: Offset(0.0, 10.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x262E2620), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 76.0, 76.0, 76.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'Courier New', label: 10.0, caption: 12.0, small: 15.0, body: 16.0, h3: 20.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 140, base: 280, slow: 400, curve: Curves.easeOut, enterDuration: 950, enterCurve: Curves.easeOut, enterOffsetY: 28.0, enterStagger: 0.1, scrollDuration: 900, scrollOffsetY: 32.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 340, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'scrapbook': StyleLabTokens(
    slug: 'scrapbook',
    num: '31',
    name: 'Scrapbook',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFF7F1E4), bg2: Color(0xFFEFE6D2), surface: Color(0xFFFFFDF7), surface2: Color(0xFFFDF3DC), ink: Color(0xFF1F2B3A), inkSoft: Color(0xFF4E5A68), inkFaint: Color(0xFF858E99), accent: Color(0xFFC63D2F), accentInk: Color(0xFFFFFDF7), line: Color(0x2E1F2B3A)),
    radius: 3.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x2E1F2B3A), offset: Offset(0.0, 2.0), blurRadius: 6.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x1F1F2B3A), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 72.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Caveat', fontBody: 'Inter', fontMono: 'Courier Prime', label: 10.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 40.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.65, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 260, slow: 320, curve: Curves.easeOut, enterDuration: 340, enterCurve: _curveCubic61, enterOffsetY: 10.0, enterStagger: 0.05, scrollDuration: 440, scrollOffsetY: 12.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 150, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'conceptual-sketch': StyleLabTokens(
    slug: 'conceptual-sketch',
    num: '32',
    name: 'Conceptual Sketch',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFFCFBF7), bg2: Color(0xFFF2F0E8), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F6F0), ink: Color(0xFF2A2A2A), inkSoft: Color(0xFF5C5C5C), inkFaint: Color(0xFF8F8F8F), accent: Color(0xFF2B5FAD), accentInk: Color(0xFFFFFFFF), line: Color(0xFF2A2A2A)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0x2E2A2A2A), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 72.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Architects Daughter', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 24.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.2, headingHeight: 1.25, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 100, base: 200, slow: 300, curve: Curves.easeOut, enterDuration: 380, enterCurve: Curves.linear, enterOffsetY: 0.0, enterStagger: 0.03, scrollDuration: 300, scrollOffsetY: 6.0, scrollTriggerPercent: 92.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'dark-academia': StyleLabTokens(
    slug: 'dark-academia',
    num: '33',
    name: 'Dark Academia',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFF1B1714), bg2: Color(0xFF241F1A), surface: Color(0xFF262019), surface2: Color(0xFF2F2820), ink: Color(0xFFE8DFCE), inkSoft: Color(0xFFB8AC97), inkFaint: Color(0xFF8A7F6D), accent: Color(0xFFB0863F), accentInk: Color(0xFF1B1714), line: Color(0x52B0863F)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x80000000), offset: Offset(0.0, 12.0), blurRadius: 32.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 88.0, 88.0, 88.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'EB Garamond', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 15.0, body: 17.0, h3: 20.0, h2: 28.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.7, displayTracking: 0.02, headingTracking: 0.02, bodyTracking: 0.01, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 400, slow: 600, curve: Curves.easeInOut, enterDuration: 1050, enterCurve: _curveCubic62, enterOffsetY: 22.0, enterStagger: 0.16, scrollDuration: 1050, scrollOffsetY: 26.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 520, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'skeuomorphism': StyleLabTokens(
    slug: 'skeuomorphism',
    num: '34',
    name: 'Skeuomorphism',
    family: 'Sanatsal',
    palette: StyleLabPalette(bg: Color(0xFFCFC6B8), bg2: Color(0xFFBDB2A1), surface: Color(0xFFF2EBDD), surface2: Color(0xFFE6DDCB), ink: Color(0xFF2F2A24), inkSoft: Color(0xFF5D554A), inkFaint: Color(0xFF8B8173), accent: Color(0xFF2F6B4F), accentInk: Color(0xFFF7F3E8), line: Color(0x592F2A24)),
    radius: 6.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x592F2A24), offset: Offset(0.0, 2.0), blurRadius: 4.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 64.0, 64.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Helvetica Neue', fontBody: 'Helvetica Neue', fontMono: 'Menlo', label: 11.0, caption: 12.0, small: 15.0, body: 16.0, h3: 20.0, h2: 24.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.15, headingHeight: 1.2, bodyHeight: 1.55, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 120, base: 220, slow: 300, curve: Curves.easeOut, enterDuration: 360, enterCurve: _curveCubic63, enterOffsetY: 6.0, enterStagger: 0.04, scrollDuration: 500, scrollOffsetY: 10.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 130, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'bauhaus': StyleLabTokens(
    slug: 'bauhaus',
    num: '35',
    name: 'Bauhaus',
    family: 'Geometrik',
    palette: StyleLabPalette(bg: Color(0xFFF2ECE1), bg2: Color(0xFFE6DDCD), surface: Color(0xFFFFFDF8), surface2: Color(0xFFEFE7D8), ink: Color(0xFF16161A), inkSoft: Color(0xFF55524B), inkFaint: Color(0xFF7D776B), accent: Color(0xFFD92B2B), accentInk: Color(0xFFFFFDF8), line: Color(0xFF16161A)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF16161A), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [8.0, 16.0, 24.0, 32.0, 48.0, 72.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Jost', fontMono: 'Space Mono', label: 10.0, caption: 12.0, small: 14.0, body: 15.5, h3: 19.0, h2: 24.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.01, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 100, base: 180, slow: 260, curve: _curveCubic54, enterDuration: 440, enterCurve: _curveCubic54, enterOffsetY: 14.0, enterStagger: 0.07, scrollDuration: 620, scrollOffsetY: 18.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 170, hoverImageScale: 1.02, pinEnabled: false, pinScrub: 1.0),
  ),
  'constructivism': StyleLabTokens(
    slug: 'constructivism',
    num: '36',
    name: 'Constructivism',
    family: 'Geometrik',
    palette: StyleLabPalette(bg: Color(0xFFEFEAE0), bg2: Color(0xFFE2DBCD), surface: Color(0xFFFBF8F2), surface2: Color(0xFFE9E2D5), ink: Color(0xFF11100F), inkSoft: Color(0xFF5A5349), inkFaint: Color(0xFF847D6F), accent: Color(0xFFC1121F), accentInk: Color(0xFFFBF8F2), line: Color(0xFF11100F)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF11100F), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 20.0, 32.0, 48.0, 72.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Jost', fontMono: 'Space Mono', label: 10.0, caption: 13.0, small: 14.0, body: 15.5, h3: 19.0, h2: 27.0, h1: 72.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 0.94, headingHeight: 1.02, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.01, labelTracking: 0.22),
    motion: StyleLabMotion(fast: 90, base: 200, slow: 320, curve: _curveCubic64, enterDuration: 300, enterCurve: _curveCubic65, enterOffsetY: 26.0, enterStagger: 0.04, scrollDuration: 340, scrollOffsetY: 28.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.02, pinEnabled: false, pinScrub: 1.0),
  ),
  'kinetic-type': StyleLabTokens(
    slug: 'kinetic-type',
    num: '37',
    name: 'Kinetic Type',
    family: 'Tipografik',
    palette: StyleLabPalette(bg: Color(0xFF0E0E10), bg2: Color(0xFF17171A), surface: Color(0xFF1B1B1F), surface2: Color(0xFF232329), ink: Color(0xFFF4F2EC), inkSoft: Color(0xFFA8A49B), inkFaint: Color(0xFF6F6B64), accent: Color(0xFFE8FF47), accentInk: Color(0xFF0E0E10), line: Color(0x2EF4F2EC)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Space Grotesk', fontMono: 'Space Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 32.0, h1: 96.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.95, headingHeight: 1.0, bodyHeight: 1.55, displayTracking: -0.03, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 90, base: 220, slow: 320, curve: _curveCubic54, enterDuration: 620, enterCurve: _curveCubic66, enterOffsetY: 40.0, enterStagger: 0.1, scrollDuration: 500, scrollOffsetY: 44.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 130, hoverImageScale: 1.02, pinEnabled: false, pinScrub: 1.0),
  ),
  'organic-bio': StyleLabTokens(
    slug: 'organic-bio',
    num: '38',
    name: 'Organic / Biophilic',
    family: 'Organik',
    palette: StyleLabPalette(bg: Color(0xFFF3F1E7), bg2: Color(0xFFE7E4D6), surface: Color(0xFFFBFAF4), surface2: Color(0xFFEEECE0), ink: Color(0xFF232A22), inkSoft: Color(0xFF55604F), inkFaint: Color(0xFF848B78), accent: Color(0xFF4F7A45), accentInk: Color(0xFFFBFAF4), line: Color(0x29232A22)),
    radius: 18.0,
    radiusLg: 26.0,
    shadow: [BoxShadow(color: Color(0x1A232A22), offset: Offset(0.0, 6.0), blurRadius: 18.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 10.5, caption: 13.0, small: 14.0, body: 16.0, h3: 19.0, h2: 30.0, h1: 54.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.16, bodyHeight: 1.68, displayTracking: -0.01, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 140, base: 260, slow: 420, curve: _curveCubic67, enterDuration: 1000, enterCurve: _curveCubic68, enterOffsetY: 28.0, enterStagger: 0.1, scrollDuration: 900, scrollOffsetY: 24.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 280, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'ai-native-mesh': StyleLabTokens(
    slug: 'ai-native-mesh',
    num: '39',
    name: 'AI-native Mesh',
    family: 'Yeni Dalga',
    palette: StyleLabPalette(bg: Color(0xFF0B0C10), bg2: Color(0xFF101218), surface: Color(0xFF14161D), surface2: Color(0xFF1B1E27), ink: Color(0xFFF2F4F8), inkSoft: Color(0xFFA9B0C0), inkFaint: Color(0xFF7A8294), accent: Color(0xFF7C8CFF), accentInk: Color(0xFF0B0C10), line: Color(0x1FF2F4F8)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x73000000), offset: Offset(0.0, 8.0), blurRadius: 30.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Geist', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 13.0, small: 14.0, body: 16.0, h3: 20.0, h2: 26.0, h1: 40.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.14, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 140, base: 220, slow: 420, curve: _curveCubic67, enterDuration: 750, enterCurve: _curveCubic69, enterOffsetY: 22.0, enterStagger: 0.065, scrollDuration: 850, scrollOffsetY: 20.0, scrollTriggerPercent: 83.0, scrollOnce: true, hoverDuration: 210, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.2),
  ),
  'scandinavian-dark': StyleLabTokens(
    slug: 'scandinavian-dark',
    num: '40',
    name: 'Scandinavian Dark',
    family: 'Yeni Dalga',
    palette: StyleLabPalette(bg: Color(0xFF171A19), bg2: Color(0xFF1D211F), surface: Color(0xFF1F2422), surface2: Color(0xFF262C29), ink: Color(0xFFE9E7E0), inkSoft: Color(0xFFA6AAA2), inkFaint: Color(0xFF7D8279), accent: Color(0xFFB9C6A9), accentInk: Color(0xFF141715), line: Color(0x24E9E7E0)),
    radius: 6.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x59000000), offset: Offset(0.0, 2.0), blurRadius: 10.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 72.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.5, caption: 13.0, small: 14.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 44.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.2, bodyHeight: 1.7, displayTracking: -0.005, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 120, base: 240, slow: 380, curve: _curveCubic70, enterDuration: 880, enterCurve: _curveCubic71, enterOffsetY: 16.0, enterStagger: 0.09, scrollDuration: 950, scrollOffsetY: 14.0, scrollTriggerPercent: 79.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.2),
  ),
  'grand-tourer': StyleLabTokens(
    slug: 'grand-tourer',
    num: '41',
    name: 'Grand Tourer',
    family: 'Zamansız',
    palette: StyleLabPalette(bg: Color(0xFFEFE7DA), bg2: Color(0xFFE6DCCB), surface: Color(0xFFF8F2E8), surface2: Color(0xFFE8DDCA), ink: Color(0xFF1C1A17), inkSoft: Color(0xFF574F44), inkFaint: Color(0xFF726757), accent: Color(0xFF1F3B2C), accentInk: Color(0xFFF4ECDC), line: Color(0x2E1C1A17)),
    radius: 3.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x141C1A17), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x1F1C1A17), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Jost', fontMono: 'Courier Prime', label: 9.5, caption: 13.0, small: 14.0, body: 16.5, h3: 15.5, h2: 24.0, h1: 50.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.06, headingHeight: 1.16, bodyHeight: 1.68, displayTracking: 0.09, headingTracking: 0.07, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 280, slow: 420, curve: _curveCubic72, enterDuration: 660, enterCurve: _curveCubic73, enterOffsetY: 18.0, enterStagger: 0.07, scrollDuration: 850, scrollOffsetY: 20.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 230, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.1),
  ),
  'grand-tourer-oxblood': StyleLabTokens(
    slug: 'grand-tourer-oxblood',
    num: '42',
    name: 'Grand Tourer Oxblood',
    family: 'Zamansız',
    palette: StyleLabPalette(bg: Color(0xFFF1E9DD), bg2: Color(0xFFE8DFD0), surface: Color(0xFFF9F3E9), surface2: Color(0xFFE9DFCE), ink: Color(0xFF201A17), inkSoft: Color(0xFF5A4D45), inkFaint: Color(0xFF74665C), accent: Color(0xFF6B2130), accentInk: Color(0xFFF7EFE1), line: Color(0x2E201A17)),
    radius: 3.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x14201A17), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x1F201A17), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Jost', fontMono: 'Courier Prime', label: 9.5, caption: 13.0, small: 14.0, body: 16.5, h3: 15.5, h2: 24.0, h1: 52.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.06, headingHeight: 1.16, bodyHeight: 1.68, displayTracking: 0.12, headingTracking: 0.1, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 200, base: 400, slow: 560, curve: _curveCubic72, enterDuration: 900, enterCurve: _curveCubic74, enterOffsetY: 28.0, enterStagger: 0.11, scrollDuration: 1000, scrollOffsetY: 30.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 300, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.1),
  ),
  'grand-tourer-midnight': StyleLabTokens(
    slug: 'grand-tourer-midnight',
    num: '43',
    name: 'Grand Tourer Midnight',
    family: 'Zamansız',
    palette: StyleLabPalette(bg: Color(0xFFF1ECE2), bg2: Color(0xFFE7E0D2), surface: Color(0xFFF8F4EC), surface2: Color(0xFFE6E1D5), ink: Color(0xFF171B23), inkSoft: Color(0xFF4F5560), inkFaint: Color(0xFF5F6470), accent: Color(0xFF1B2E4A), accentInk: Color(0xFFF2EADB), line: Color(0x2E171B23)),
    radius: 3.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x14171B23), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x1F171B23), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 96.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Jost', fontMono: 'Courier Prime', label: 9.5, caption: 13.0, small: 14.0, body: 16.5, h3: 15.5, h2: 24.0, h1: 50.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.06, headingHeight: 1.16, bodyHeight: 1.68, displayTracking: 0.09, headingTracking: 0.07, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 280, slow: 420, curve: _curveCubic72, enterDuration: 1060, enterCurve: _curveCubic75, enterOffsetY: 12.0, enterStagger: 0.14, scrollDuration: 1100, scrollOffsetY: 16.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 340, hoverImageScale: 1.02, pinEnabled: true, pinScrub: 1.1),
  ),
  'utility': StyleLabTokens(
    slug: 'utility',
    num: '44',
    name: 'Utility',
    family: 'Zamansız',
    palette: StyleLabPalette(bg: Color(0xFFFFFFFF), bg2: Color(0xFFF6F6F7), surface: Color(0xFFFFFFFF), surface2: Color(0xFFFAFAFA), ink: Color(0xFF111112), inkSoft: Color(0xFF5A5F66), inkFaint: Color(0xFF9298A0), accent: Color(0xFF1D4ED8), accentInk: Color(0xFFFFFFFF), line: Color(0x1A111112)),
    radius: 8.0,
    radiusLg: 12.0,
    shadow: [BoxShadow(color: Color(0x0F111112), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poppins', fontBody: 'Poppins', fontMono: 'JetBrains Mono', label: 12.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 36.0, h1: 60.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.0, headingHeight: 1.15, bodyHeight: 1.5, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.02),
    motion: StyleLabMotion(fast: 200, base: 500, slow: 800, curve: _curveCubic76, enterDuration: 400, enterCurve: _curveCubic76, enterOffsetY: 10.0, enterStagger: 0.045, scrollDuration: 560, scrollOffsetY: 28.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 120, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'terminal-ui': StyleLabTokens(
    slug: 'terminal-ui',
    num: '45',
    name: 'Terminal UI',
    family: 'Teknik',
    palette: StyleLabPalette(bg: Color(0xFF0A0D0A), bg2: Color(0xFF0D110D), surface: Color(0xFF0F140F), surface2: Color(0xFF131A13), ink: Color(0xFFD7E6D2), inkSoft: Color(0xFF9BB394), inkFaint: Color(0xFF6D8268), accent: Color(0xFF58E08A), accentInk: Color(0xFF04120A), line: Color(0x29D7E6D2)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'JetBrains Mono', fontBody: 'JetBrains Mono', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 24.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.15, headingHeight: 1.3, bodyHeight: 1.55, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 90, base: 180, slow: 300, curve: _curveSteps60, enterDuration: 180, enterCurve: _curveSteps30, enterOffsetY: 0.0, enterStagger: 0.03, scrollDuration: 200, scrollOffsetY: 8.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 90, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'telemetry-grid': StyleLabTokens(
    slug: 'telemetry-grid',
    num: '46',
    name: 'Telemetry Grid',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFEEF1F4), bg2: Color(0xFFE5EAEE), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF6F8FA), ink: Color(0xFF10171C), inkSoft: Color(0xFF46585F), inkFaint: Color(0xFF7B8A91), accent: Color(0xFF0B6E75), accentInk: Color(0xFFFFFFFF), line: Color(0x2410171C)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x1210171C), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 17.0, h2: 22.0, h1: 34.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.14, headingHeight: 1.28, bodyHeight: 1.52, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 110, base: 280, slow: 420, curve: _curveCubic38, enterDuration: 280, enterCurve: _curveCubic38, enterOffsetY: 6.0, enterStagger: 0.02, scrollDuration: 320, scrollOffsetY: 10.0, scrollTriggerPercent: 88.0, scrollOnce: false, hoverDuration: 110, hoverImageScale: 1.01, pinEnabled: false, pinScrub: null),
  ),
  'trading-desk': StyleLabTokens(
    slug: 'trading-desk',
    num: '47',
    name: 'Trading Desk',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFF101418), bg2: Color(0xFF151B20), surface: Color(0xFF161D23), surface2: Color(0xFF1C242B), ink: Color(0xFFE8EEF2), inkSoft: Color(0xFF9FB3BF), inkFaint: Color(0xFF6F8593), accent: Color(0xFFF2A33C), accentInk: Color(0xFF171002), line: Color(0x24E8EEF2)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Rajdhani', fontBody: 'Space Grotesk', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 16.0, h2: 20.0, h1: 36.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.48, displayTracking: 0.015, headingTracking: 0.015, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 70, base: 220, slow: 320, curve: _curveCubic77, enterDuration: 220, enterCurve: _curveCubic77, enterOffsetY: 4.0, enterStagger: 0.015, scrollDuration: 260, scrollOffsetY: 6.0, scrollTriggerPercent: 92.0, scrollOnce: true, hoverDuration: 70, hoverImageScale: 1.004, pinEnabled: true, pinScrub: 0.35),
  ),
  'executive-kpi': StyleLabTokens(
    slug: 'executive-kpi',
    num: '48',
    name: 'Executive KPI',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFFAF7F1), bg2: Color(0xFFF3EEE5), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F3EC), ink: Color(0xFF171614), inkSoft: Color(0xFF51544B), inkFaint: Color(0xFF86897E), accent: Color(0xFF2B5C46), accentInk: Color(0xFFF6F7F2), line: Color(0x24171614)),
    radius: 0.0,
    radiusLg: 3.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 26.0, h1: 44.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.08, headingHeight: 1.22, bodyHeight: 1.62, displayTracking: 0.005, headingTracking: 0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 320, base: 600, slow: 950, curve: _curveCubic78, enterDuration: 950, enterCurve: _curveCubic78, enterOffsetY: 30.0, enterStagger: 0.11, scrollDuration: 1050, scrollOffsetY: 36.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'log-stream': StyleLabTokens(
    slug: 'log-stream',
    num: '49',
    name: 'Log Stream',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFF12141A), bg2: Color(0xFF171A22), surface: Color(0xFF1A1E28), surface2: Color(0xFF21262F), ink: Color(0xFFE7E9F0), inkSoft: Color(0xFFA2A8BB), inkFaint: Color(0xFF767D92), accent: Color(0xFFA78BFA), accentInk: Color(0xFF14101F), line: Color(0x24E7E9F0)),
    radius: 6.0,
    radiusLg: 12.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Mono', fontBody: 'IBM Plex Mono', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 12.0, body: 13.0, h3: 15.0, h2: 19.0, h1: 30.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 500, displayWeight: 700, displayHeight: 1.18, headingHeight: 1.32, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 60, base: 160, slow: 260, curve: _curveSteps12, enterDuration: 160, enterCurve: _curveSteps12, enterOffsetY: 0.0, enterStagger: 0.012, scrollDuration: 180, scrollOffsetY: 4.0, scrollTriggerPercent: 94.0, scrollOnce: false, hoverDuration: 60, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'lab-instrument': StyleLabTokens(
    slug: 'lab-instrument',
    num: '50',
    name: 'Lab Instrument',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFF5F7F7), bg2: Color(0xFFEAEFF0), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF2F6F7), ink: Color(0xFF0E1517), inkSoft: Color(0xFF43565C), inkFaint: Color(0xFF76898F), accent: Color(0xFF1A5C8A), accentInk: Color(0xFFF4F8FA), line: Color(0x240E1517)),
    radius: 2.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x140E1517), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x210E1517), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Inter', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 16.0, h2: 21.0, h1: 32.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.16, headingHeight: 1.3, bodyHeight: 1.58, displayTracking: 0.02, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 190, base: 420, slow: 640, curve: _curveCubic79, enterDuration: 420, enterCurve: _curveCubic79, enterOffsetY: 14.0, enterStagger: 0.045, scrollDuration: 500, scrollOffsetY: 18.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 190, hoverImageScale: 1.018, pinEnabled: true, pinScrub: 0.75),
  ),
  'atlas-console': StyleLabTokens(
    slug: 'atlas-console',
    num: '51',
    name: 'Atlas Console',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFF0D1520), bg2: Color(0xFF111B28), surface: Color(0xFF14202E), surface2: Color(0xFF1A2836), ink: Color(0xFFE9EEF6), inkSoft: Color(0xFFA7B7CB), inkFaint: Color(0xFF7C8EA6), accent: Color(0xFF7FA8F0), accentInk: Color(0xFF081120), line: Color(0x29E9EEF6)),
    radius: 8.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0xE604080E), offset: Offset(0.0, 18.0), blurRadius: 40.0, spreadRadius: -32.0)],
    shadowHard: [BoxShadow(color: Color(0x29E9EEF6), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cinzel', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 48.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.22, bodyHeight: 1.58, displayTracking: 0.06, headingTracking: 0.03, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 120, base: 200, slow: 320, curve: _curveCubic80, enterDuration: 440, enterCurve: _curveCubic80, enterOffsetY: 12.0, enterStagger: 0.07, scrollDuration: 500, scrollOffsetY: 18.0, scrollTriggerPercent: 78.0, scrollOnce: true, hoverDuration: 120, hoverImageScale: 1.01, pinEnabled: true, pinScrub: 0.6),
  ),
  'experiment-split': StyleLabTokens(
    slug: 'experiment-split',
    num: '52',
    name: 'Experiment Split',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFF7F7FB), bg2: Color(0xFFEEEEF6), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF2F2FA), ink: Color(0xFF15151F), inkSoft: Color(0xFF55566B), inkFaint: Color(0xFF85869C), accent: Color(0xFF4B3EE8), accentInk: Color(0xFFFFFFFF), line: Color(0x1A15151F)),
    radius: 10.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x5915151F), offset: Offset(0.0, 12.0), blurRadius: 28.0, spreadRadius: -24.0)],
    shadowHard: [BoxShadow(color: Color(0xFFF2F2FA), offset: Offset(4.0, 0.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 20.0, h2: 29.0, h1: 54.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.03, headingHeight: 1.16, bodyHeight: 1.6, displayTracking: -0.025, headingTracking: -0.015, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 110, base: 180, slow: 280, curve: _curveCubic81, enterDuration: 320, enterCurve: _curveCubic81, enterOffsetY: 10.0, enterStagger: 0.045, scrollDuration: 380, scrollOffsetY: 14.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.005, pinEnabled: false, pinScrub: null),
  ),
  'ledger-meter': StyleLabTokens(
    slug: 'ledger-meter',
    num: '53',
    name: 'Ledger Meter',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFFAF7EE), bg2: Color(0xFFF2ECDC), surface: Color(0xFFFFFDF6), surface2: Color(0xFFF6F0E1), ink: Color(0xFF1C1913), inkSoft: Color(0xFF56503F), inkFaint: Color(0xFF8A8068), accent: Color(0xFF22456B), accentInk: Color(0xFFFFFFFF), line: Color(0x211C1913)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x8C1D1A15), offset: Offset(0.0, 10.0), blurRadius: 24.0, spreadRadius: -22.0)],
    shadowHard: [BoxShadow(color: Color(0x211C1913), offset: Offset(0.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'EB Garamond', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 20.0, h2: 29.0, h1: 48.0, h1Mobile: 29.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.06, headingHeight: 1.18, bodyHeight: 1.62, displayTracking: -0.005, headingTracking: 0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 110, base: 200, slow: 320, curve: _curveCubic78, enterDuration: 660, enterCurve: _curveCubic78, enterOffsetY: 20.0, enterStagger: 0.09, scrollDuration: 720, scrollOffsetY: 26.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.0, pinEnabled: true, pinScrub: 1.35),
  ),
  'vitals-triage': StyleLabTokens(
    slug: 'vitals-triage',
    num: '54',
    name: 'Vitals Triage',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFF4F8F7), bg2: Color(0xFFE8F1EF), surface: Color(0xFFFFFFFF), surface2: Color(0xFFEEF5F3), ink: Color(0xFF10201F), inkSoft: Color(0xFF47605D), inkFaint: Color(0xFF7D938F), accent: Color(0xFFB3341F), accentInk: Color(0xFFFFFFFF), line: Color(0x1C10201F)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x5910201F), offset: Offset(0.0, 16.0), blurRadius: 32.0, spreadRadius: -26.0)],
    shadowHard: [BoxShadow(color: Color(0xFFEEF5F3), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 2.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 20.0, h2: 27.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 700, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.62, displayTracking: -0.015, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 120, base: 190, slow: 300, curve: _curveCubic82, enterDuration: 260, enterCurve: _curveCubic82, enterOffsetY: 6.0, enterStagger: 0.02, scrollDuration: 280, scrollOffsetY: 5.0, scrollTriggerPercent: 91.0, scrollOnce: true, hoverDuration: 150, hoverImageScale: 1.025, pinEnabled: false, pinScrub: null),
  ),
  'fleet-telemetry': StyleLabTokens(
    slug: 'fleet-telemetry',
    num: '55',
    name: 'Fleet Telemetry',
    family: 'Veri & Gösterge',
    palette: StyleLabPalette(bg: Color(0xFFF1F4F7), bg2: Color(0xFFE6EBF0), surface: Color(0xFFFFFFFF), surface2: Color(0xFFEDF1F5), ink: Color(0xFF101820), inkSoft: Color(0xFF47555F), inkFaint: Color(0xFF7B8892), accent: Color(0xFFA8386F), accentInk: Color(0xFFFFFFFF), line: Color(0x21101820)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [BoxShadow(color: Color(0x80101317), offset: Offset(0.0, 6.0), blurRadius: 14.0, spreadRadius: -12.0)],
    shadowHard: [BoxShadow(color: Color(0x21101820), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 2.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Share Tech Mono', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.0, h3: 18.0, h2: 23.0, h1: 36.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.12, headingHeight: 1.24, bodyHeight: 1.5, displayTracking: 0.03, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 100, base: 180, slow: 260, curve: _curveCubic54, enterDuration: 880, enterCurve: _curveCubic54, enterOffsetY: 14.0, enterStagger: 0.06, scrollDuration: 600, scrollOffsetY: 22.0, scrollTriggerPercent: 80.0, scrollOnce: true, hoverDuration: 130, hoverImageScale: 1.015, pinEnabled: true, pinScrub: 0.9),
  ),
  'blueprint-drawing': StyleLabTokens(
    slug: 'blueprint-drawing',
    num: '56',
    name: 'Blueprint Çizimi',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFF0A1B2B), bg2: Color(0xFF0D2133), surface: Color(0xFF102A40), surface2: Color(0xFF14344E), ink: Color(0xFFDCEAF5), inkSoft: Color(0xFFA6C2D6), inkFaint: Color(0xFF6F90A6), accent: Color(0xFF6FD3F2), accentInk: Color(0xFF04202C), line: Color(0x29DCEAF5)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Space Grotesk', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 12.0, body: 15.0, h3: 20.0, h2: 30.0, h1: 46.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.62, displayTracking: 0.01, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 100, base: 200, slow: 360, curve: _curveCubic83, enterDuration: 360, enterCurve: _curveCubic83, enterOffsetY: 6.0, enterStagger: 0.045, scrollDuration: 400, scrollOffsetY: 9.0, scrollTriggerPercent: 89.0, scrollOnce: true, hoverDuration: 140, hoverImageScale: 1.005, pinEnabled: false, pinScrub: null),
  ),
  'machined-metal-panel': StyleLabTokens(
    slug: 'machined-metal-panel',
    num: '57',
    name: 'İşlenmiş Metal Panel',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFFD5D8DA), bg2: Color(0xFFC9CDD0), surface: Color(0xFFE2E5E7), surface2: Color(0xFFECEEF0), ink: Color(0xFF1B1F22), inkSoft: Color(0xFF4E565C), inkFaint: Color(0xFF6B7379), accent: Color(0xFF9C4A0C), accentInk: Color(0xFFFFFFFF), line: Color(0x2E1B1F22)),
    radius: 3.0,
    radiusLg: 6.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 9.0, caption: 10.0, small: 12.0, body: 16.0, h3: 19.0, h2: 26.0, h1: 38.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.14, headingHeight: 1.26, bodyHeight: 1.58, displayTracking: 0.06, headingTracking: 0.04, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 80, base: 160, slow: 280, curve: _curveCubic84, enterDuration: 260, enterCurve: _curveCubic84, enterOffsetY: 4.0, enterStagger: 0.02, scrollDuration: 280, scrollOffsetY: 11.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 110, hoverImageScale: 1.008, pinEnabled: true, pinScrub: 0.62),
  ),
  'safety-signage': StyleLabTokens(
    slug: 'safety-signage',
    num: '58',
    name: 'Güvenlik Tabelası',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFF12120E), bg2: Color(0xFF1A1A14), surface: Color(0xFF1F1F18), surface2: Color(0xFF26261D), ink: Color(0xFFF6F2E4), inkSoft: Color(0xFFC4C0A9), inkFaint: Color(0xFF8B8874), accent: Color(0xFFFFD52E), accentInk: Color(0xFF14140D), line: Color(0x33F6F2E4)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Rajdhani', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 14.0, body: 17.0, h3: 24.0, h2: 40.0, h1: 72.0, h1Mobile: 40.0, bodyWeight: 500, strongWeight: 700, displayWeight: 400, displayHeight: 0.94, headingHeight: 1.1, bodyHeight: 1.45, displayTracking: 0.01, headingTracking: 0.02, bodyTracking: 0.01, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 60, base: 150, slow: 220, curve: Curves.linear, enterDuration: 140, enterCurve: Curves.linear, enterOffsetY: 16.0, enterStagger: 0.06, scrollDuration: 150, scrollOffsetY: 22.0, scrollTriggerPercent: 93.0, scrollOnce: true, hoverDuration: 80, hoverImageScale: 1.012, pinEnabled: false, pinScrub: null),
  ),
  'mes-production-line': StyleLabTokens(
    slug: 'mes-production-line',
    num: '59',
    name: 'Üretim Hattı · MES',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFFF2F4F3), bg2: Color(0xFFE8EBE9), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF7F9F8), ink: Color(0xFF17201C), inkSoft: Color(0xFF4C5A53), inkFaint: Color(0xFF7D8A83), accent: Color(0xFF0D7A4F), accentInk: Color(0xFFFFFFFF), line: Color(0x2417201C)),
    radius: 4.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x1A17201C), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'JetBrains Mono', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 34.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.16, headingHeight: 1.3, bodyHeight: 1.55, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 120, base: 260, slow: 480, curve: _curveCubic85, enterDuration: 440, enterCurve: _curveCubic85, enterOffsetY: 20.0, enterStagger: 0.035, scrollDuration: 480, scrollOffsetY: 30.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.016, pinEnabled: true, pinScrub: 0.95),
  ),
  'energy-grid': StyleLabTokens(
    slug: 'energy-grid',
    num: '60',
    name: 'Enerji Şebekesi',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFF0C0F12), bg2: Color(0xFF101519), surface: Color(0xFF131A1F), surface2: Color(0xFF182127), ink: Color(0xFFE4EEF2), inkSoft: Color(0xFFA7B8C0), inkFaint: Color(0xFF71858F), accent: Color(0xFF9BE23C), accentInk: Color(0xFF0E1503), line: Color(0x24E4EEF2)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x8C030608), offset: Offset(0.0, 8.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Space Grotesk', fontMono: 'Share Tech Mono', label: 10.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 32.0, h1: 52.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.18, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 130, base: 340, slow: 660, curve: _curveCubic86, enterDuration: 580, enterCurve: _curveCubic86, enterOffsetY: 12.0, enterStagger: 0.09, scrollDuration: 660, scrollOffsetY: 16.0, scrollTriggerPercent: 81.0, scrollOnce: true, hoverDuration: 200, hoverImageScale: 1.004, pinEnabled: true, pinScrub: 1.45),
  ),
  'calibration-lab': StyleLabTokens(
    slug: 'calibration-lab',
    num: '61',
    name: 'Calibration Lab',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFFEEF1F0), bg2: Color(0xFFE5EAE9), surface: Color(0xFFFBFCFC), surface2: Color(0xFFF3F7F6), ink: Color(0xFF101A1A), inkSoft: Color(0xFF4A5C5B), inkFaint: Color(0xFF728482), accent: Color(0xFF0D5F5C), accentInk: Color(0xFFF4FBFA), line: Color(0x26101A1A)),
    radius: 3.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x0F101A1A), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x3D101A1A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Jost', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.06, headingHeight: 1.16, bodyHeight: 1.62, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 90, base: 180, slow: 420, curve: _curveCubic38, enterDuration: 420, enterCurve: _curveCubic38, enterOffsetY: 8.0, enterStagger: 0.045, scrollDuration: 360, scrollOffsetY: 12.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 140, hoverImageScale: 1.006, pinEnabled: false, pinScrub: null),
  ),
  'warehouse-flow': StyleLabTokens(
    slug: 'warehouse-flow',
    num: '62',
    name: 'Warehouse Flow',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFFF3F1EC), bg2: Color(0xFFE7E4DC), surface: Color(0xFFFCFBF8), surface2: Color(0xFFF0EDE5), ink: Color(0xFF17150F), inkSoft: Color(0xFF56523F), inkFaint: Color(0xFF807B66), accent: Color(0xFFF2B705), accentInk: Color(0xFF1A1608), line: Color(0x3817150F)),
    radius: 2.0,
    radiusLg: 8.0,
    shadow: [BoxShadow(color: Color(0x1A17150F), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0xE017150F), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 20.0, h2: 30.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 0.96, headingHeight: 1.1, bodyHeight: 1.55, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 110, base: 240, slow: 360, curve: _curveCubic25, enterDuration: 300, enterCurve: _curveCubic25, enterOffsetY: 18.0, enterStagger: 0.02, scrollDuration: 500, scrollOffsetY: 40.0, scrollTriggerPercent: 78.0, scrollOnce: false, hoverDuration: 110, hoverImageScale: 1.045, pinEnabled: true, pinScrub: 0.65),
  ),
  'maintenance-cmms': StyleLabTokens(
    slug: 'maintenance-cmms',
    num: '63',
    name: 'Maintenance CMMS',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFF17191A), bg2: Color(0xFF1E2122), surface: Color(0xFF222628), surface2: Color(0xFF2B3032), ink: Color(0xFFECE9E3), inkSoft: Color(0xFFA9A8A2), inkFaint: Color(0xFF7A7B77), accent: Color(0xFFFF8A3D), accentInk: Color(0xFF1A0F05), line: Color(0x29ECE9E3)),
    radius: 6.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x59000000), offset: Offset(0.0, 2.0), blurRadius: 6.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x52FF8A3D), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 2.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Space Grotesk', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 38.0, h1Mobile: 26.0, bodyWeight: 500, strongWeight: 700, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 120, base: 260, slow: 550, curve: _curveCubic81, enterDuration: 550, enterCurve: _curveCubic81, enterOffsetY: 26.0, enterStagger: 0.09, scrollDuration: 620, scrollOffsetY: 20.0, scrollTriggerPercent: 72.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.018, pinEnabled: false, pinScrub: null),
  ),
  'construction-site': StyleLabTokens(
    slug: 'construction-site',
    num: '64',
    name: 'Construction Site',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFFE8E2D4), bg2: Color(0xFFDCD4C2), surface: Color(0xFFF4EFE4), surface2: Color(0xFFEAE3D4), ink: Color(0xFF191612), inkSoft: Color(0xFF4F483D), inkFaint: Color(0xFF7B7059), accent: Color(0xFFA03A26), accentInk: Color(0xFFF7F1E6), line: Color(0x6B191612)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x1F191612), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0xD9191612), offset: Offset(6.0, 6.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Jost', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 21.0, h2: 30.0, h1: 64.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 0.92, headingHeight: 1.05, bodyHeight: 1.62, displayTracking: 0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 140, base: 340, slow: 460, curve: _curveCubic87, enterDuration: 460, enterCurve: _curveCubic87, enterOffsetY: 44.0, enterStagger: 0.11, scrollDuration: 340, scrollOffsetY: 56.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 190, hoverImageScale: 1.012, pinEnabled: true, pinScrub: 0.55),
  ),
  'cockpit-avionics': StyleLabTokens(
    slug: 'cockpit-avionics',
    num: '65',
    name: 'Cockpit Avionics',
    family: 'Endüstriyel',
    palette: StyleLabPalette(bg: Color(0xFF0A0F14), bg2: Color(0xFF10161C), surface: Color(0xFF131A21), surface2: Color(0xFF1A232B), ink: Color(0xFFE8F0F4), inkSoft: Color(0xFF9FB0BA), inkFaint: Color(0xFF6D7F8A), accent: Color(0xFF35D6E8), accentInk: Color(0xFF032026), line: Color(0x26E8F0F4)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x80000000), offset: Offset(0.0, 1.0), blurRadius: 3.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x7335D6E8), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Rajdhani', fontBody: 'Inter', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 14.0, h3: 17.0, h2: 22.0, h1: 34.0, h1Mobile: 24.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.02, headingHeight: 1.15, bodyHeight: 1.5, displayTracking: 0.06, headingTracking: 0.04, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 70, base: 160, slow: 240, curve: _curveCubic88, enterDuration: 240, enterCurve: _curveCubic88, enterOffsetY: 6.0, enterStagger: 0.055, scrollDuration: 280, scrollOffsetY: 4.0, scrollTriggerPercent: 94.0, scrollOnce: true, hoverDuration: 70, hoverImageScale: 1.004, pinEnabled: false, pinScrub: null),
  ),
  'nordic-folk': StyleLabTokens(
    slug: 'nordic-folk',
    num: '66',
    name: 'Nordic Folk',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFF2ECE0), bg2: Color(0xFFE9E0CF), surface: Color(0xFFFBF7ED), surface2: Color(0xFFE3D9C6), ink: Color(0xFF1D2A24), inkSoft: Color(0xFF4B5B51), inkFaint: Color(0xFF6F7D71), accent: Color(0xFF9C2B21), accentInk: Color(0xFFFDF6E8), line: Color(0x291D2A24)),
    radius: 6.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x1A1D2A24), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Lora', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 30.0, h1: 54.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.04, headingHeight: 1.16, bodyHeight: 1.66, displayTracking: -0.015, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 110, base: 190, slow: 300, curve: _curveCubic67, enterDuration: 620, enterCurve: _curveCubic67, enterOffsetY: 18.0, enterStagger: 0.045, scrollDuration: 760, scrollOffsetY: 22.0, scrollTriggerPercent: 86.0, scrollOnce: true, hoverDuration: 190, hoverImageScale: 1.018, pinEnabled: false, pinScrub: null),
  ),
  'japanese-ma': StyleLabTokens(
    slug: 'japanese-ma',
    num: '67',
    name: 'Japanese Ma',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFF6F5F1), bg2: Color(0xFFECEBE5), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF1F0EA), ink: Color(0xFF16181A), inkSoft: Color(0xFF4A4F52), inkFaint: Color(0xFF7B8084), accent: Color(0xFFBF3320), accentInk: Color(0xFFFDF7F2), line: Color(0x2416181A)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Jost', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 17.0, h2: 26.0, h1: 64.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.2, bodyHeight: 1.78, displayTracking: -0.03, headingTracking: -0.02, bodyTracking: 0.0, labelTracking: 0.22),
    motion: StyleLabMotion(fast: 180, base: 320, slow: 520, curve: _curveCubic89, enterDuration: 1050, enterCurve: _curveCubic89, enterOffsetY: 12.0, enterStagger: 0.14, scrollDuration: 1150, scrollOffsetY: 14.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 520, hoverImageScale: 1.006, pinEnabled: true, pinScrub: 0.6),
  ),
  'levant-calligraphy': StyleLabTokens(
    slug: 'levant-calligraphy',
    num: '68',
    name: 'Levant Calligraphy',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFF4EEE1), bg2: Color(0xFFEAE2D0), surface: Color(0xFFFDF9EF), surface2: Color(0xFFF0E8D7), ink: Color(0xFF171D2E), inkSoft: Color(0xFF444D63), inkFaint: Color(0xFF6F7789), accent: Color(0xFF7A5A22), accentInk: Color(0xFFFDF8EC), line: Color(0x29171D2E)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x1A171D2E), offset: Offset(0.0, 2.0), blurRadius: 14.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Lora', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 31.0, h1: 58.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.08, headingHeight: 1.14, bodyHeight: 1.74, displayTracking: -0.005, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 160, base: 340, slow: 620, curve: _curveCubic90, enterDuration: 940, enterCurve: _curveCubic90, enterOffsetY: 26.0, enterStagger: 0.09, scrollDuration: 1020, scrollOffsetY: 30.0, scrollTriggerPercent: 79.0, scrollOnce: true, hoverDuration: 340, hoverImageScale: 1.032, pinEnabled: true, pinScrub: 1.4),
  ),
  'andalusian-azulejo': StyleLabTokens(
    slug: 'andalusian-azulejo',
    num: '69',
    name: 'Andalusian Azulejo',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFECEBE6), bg2: Color(0xFFE2E1DA), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF5F4EF), ink: Color(0xFF14233A), inkSoft: Color(0xFF46566F), inkFaint: Color(0xFF72808F), accent: Color(0xFF1C4EA0), accentInk: Color(0xFFF4F8FF), line: Color(0x2E14233A)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x2414233A), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poiret One', fontBody: 'Jost', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 28.0, h1: 52.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.2, bodyHeight: 1.68, displayTracking: 0.02, headingTracking: 0.015, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 90, base: 150, slow: 300, curve: _curveCubic91, enterDuration: 420, enterCurve: _curveCubic91, enterOffsetY: 10.0, enterStagger: 0.07, scrollDuration: 550, scrollOffsetY: 12.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 150, hoverImageScale: 1.045, pinEnabled: true, pinScrub: 0.9),
  ),
  'slavic-late-brutalist': StyleLabTokens(
    slug: 'slavic-late-brutalist',
    num: '70',
    name: 'Slavic Late Brutalist',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFD8D6D0), bg2: Color(0xFFCDCAC3), surface: Color(0xFFE7E5E0), surface2: Color(0xFFBFBCB5), ink: Color(0xFF16181A), inkSoft: Color(0xFF43464A), inkFaint: Color(0xFF6B6F74), accent: Color(0xFFA8431D), accentInk: Color(0xFFF7F3EA), line: Color(0x4216181A)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF16181A), offset: Offset(5.0, 5.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Anton', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 21.0, h2: 34.0, h1: 68.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 0.94, headingHeight: 1.02, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 70, base: 140, slow: 260, curve: _curveCubic66, enterDuration: 260, enterCurve: _curveCubic66, enterOffsetY: 34.0, enterStagger: 0.02, scrollDuration: 300, scrollOffsetY: 40.0, scrollTriggerPercent: 92.0, scrollOnce: false, hoverDuration: 70, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'west-african-pattern': StyleLabTokens(
    slug: 'west-african-pattern',
    num: '71',
    name: 'West African Pattern',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFF17120F), bg2: Color(0xFF1E1713), surface: Color(0xFF241B16), surface2: Color(0xFF2D221B), ink: Color(0xFFF3E7D3), inkSoft: Color(0xFFC0AE93), inkFaint: Color(0xFF8D7F68), accent: Color(0xFFD99A1F), accentInk: Color(0xFF1C1206), line: Color(0x29F3E7D3)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 26.0, h1: 40.0, h1Mobile: 27.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.6, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 130, base: 300, slow: 500, curve: _curveCubic92, enterDuration: 500, enterCurve: _curveCubic92, enterOffsetY: 22.0, enterStagger: 0.055, scrollDuration: 580, scrollOffsetY: 16.0, scrollTriggerPercent: 84.0, scrollOnce: true, hoverDuration: 210, hoverImageScale: 1.022, pinEnabled: false, pinScrub: null),
  ),
  'andean-textile': StyleLabTokens(
    slug: 'andean-textile',
    num: '72',
    name: 'Andean Textile',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFF1ECE2), bg2: Color(0xFFE7E0D2), surface: Color(0xFFFFFDF8), surface2: Color(0xFFF7F2E8), ink: Color(0xFF1A1620), inkSoft: Color(0xFF4E4657), inkFaint: Color(0xFF857C8F), accent: Color(0xFF8D2148), accentInk: Color(0xFFFDF6F7), line: Color(0x241A1620)),
    radius: 4.0,
    radiusLg: 12.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0x241A1620), offset: Offset(3.0, 3.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Nunito', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 19.0, h2: 26.0, h1: 38.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.12, headingHeight: 1.26, bodyHeight: 1.62, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 240, base: 420, slow: 720, curve: _curveCubic93, enterDuration: 720, enterCurve: _curveCubic93, enterOffsetY: 16.0, enterStagger: 0.075, scrollDuration: 660, scrollOffsetY: 28.0, scrollTriggerPercent: 80.0, scrollOnce: false, hoverDuration: 240, hoverImageScale: 1.014, pinEnabled: true, pinScrub: 1.15),
  ),
  'indian-block-print': StyleLabTokens(
    slug: 'indian-block-print',
    num: '73',
    name: 'Indian Block Print',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFF7F1E2), bg2: Color(0xFFEEE6D2), surface: Color(0xFFFFFCF3), surface2: Color(0xFFF6EFDD), ink: Color(0xFF16181D), inkSoft: Color(0xFF464A55), inkFaint: Color(0xFF7C8089), accent: Color(0xFF26356E), accentInk: Color(0xFFF7F4E9), line: Color(0x2616181D)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [BoxShadow(color: Color(0x1A16181D), offset: Offset(1.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x2916181D), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Playfair Display', fontBody: 'Poppins', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 36.0, h1Mobile: 25.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.16, headingHeight: 1.28, bodyHeight: 1.66, displayTracking: 0.015, headingTracking: 0.015, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 130, base: 220, slow: 300, curve: _curveSteps60, enterDuration: 300, enterCurve: _curveSteps60, enterOffsetY: 12.0, enterStagger: 0.035, scrollDuration: 340, scrollOffsetY: 14.0, scrollTriggerPercent: 90.0, scrollOnce: true, hoverDuration: 130, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'persian-miniature': StyleLabTokens(
    slug: 'persian-miniature',
    num: '74',
    name: 'Persian Miniature',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFF131A2C), bg2: Color(0xFF182135), surface: Color(0xFF1C2640), surface2: Color(0xFF232F4C), ink: Color(0xFFF0E6CE), inkSoft: Color(0xFFBFB193), inkFaint: Color(0xFF8B8368), accent: Color(0xFFCFA53A), accentInk: Color(0xFF1A1206), line: Color(0x29F0E6CE)),
    radius: 10.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x73000000), offset: Offset(0.0, 2.0), blurRadius: 6.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'EB Garamond', fontBody: 'Lora', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 17.0, h3: 20.0, h2: 28.0, h1: 42.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.14, headingHeight: 1.3, bodyHeight: 1.72, displayTracking: 0.02, headingTracking: 0.02, bodyTracking: 0.005, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 440, base: 800, slow: 1150, curve: _curveCubic94, enterDuration: 1150, enterCurve: _curveCubic94, enterOffsetY: 26.0, enterStagger: 0.1, scrollDuration: 1150, scrollOffsetY: 20.0, scrollTriggerPercent: 74.0, scrollOnce: true, hoverDuration: 440, hoverImageScale: 1.008, pinEnabled: true, pinScrub: 0.85),
  ),
  'aegean-island': StyleLabTokens(
    slug: 'aegean-island',
    num: '75',
    name: 'Aegean Island',
    family: 'Kültürel & Bölgesel',
    palette: StyleLabPalette(bg: Color(0xFFFBFAF6), bg2: Color(0xFFF2F1EA), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF6F6F1), ink: Color(0xFF12181C), inkSoft: Color(0xFF44545C), inkFaint: Color(0xFF7D8B92), accent: Color(0xFF0E6F92), accentInk: Color(0xFFF7FBFD), line: Color(0x2112181C)),
    radius: 14.0,
    radiusLg: 22.0,
    shadow: [BoxShadow(color: Color(0x1212181C), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Jost', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 27.0, h1: 40.0, h1Mobile: 27.0, bodyWeight: 400, strongWeight: 500, displayWeight: 500, displayHeight: 1.12, headingHeight: 1.26, bodyHeight: 1.64, displayTracking: 0.02, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 280, base: 440, slow: 620, curve: _curveCubic95, enterDuration: 380, enterCurve: _curveCubic95, enterOffsetY: 8.0, enterStagger: 0.08, scrollDuration: 440, scrollOffsetY: 12.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 280, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'biophilic-botanical': StyleLabTokens(
    slug: 'biophilic-botanical',
    num: '76',
    name: 'Biyofilik Botanik',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFF2F4EA), bg2: Color(0xFFE9EDDD), surface: Color(0xFFFBFCF6), surface2: Color(0xFFF5F8EE), ink: Color(0xFF1B2A1F), inkSoft: Color(0xFF4A5C4A), inkFaint: Color(0xFF73826F), accent: Color(0xFF2F6B3F), accentInk: Color(0xFFFFFFFF), line: Color(0x241B2A1F)),
    radius: 14.0,
    radiusLg: 24.0,
    shadow: [BoxShadow(color: Color(0x1A1B2A1F), offset: Offset(0.0, 8.0), blurRadius: 24.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 22.0, h2: 32.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.08, headingHeight: 1.24, bodyHeight: 1.65, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 160, base: 320, slow: 680, curve: _curveCubic96, enterDuration: 680, enterCurve: _curveCubic96, enterOffsetY: 24.0, enterStagger: 0.085, scrollDuration: 740, scrollOffsetY: 26.0, scrollTriggerPercent: 77.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'weather-atmosphere': StyleLabTokens(
    slug: 'weather-atmosphere',
    num: '77',
    name: 'Hava Durumu & Atmosfer',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFEEF2F7), bg2: Color(0xFFE4EAF2), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF6F9FC), ink: Color(0xFF1A2430), inkSoft: Color(0xFF4D5B6B), inkFaint: Color(0xFF75828D), accent: Color(0xFF2B6491), accentInk: Color(0xFFFFFFFF), line: Color(0x241A2430)),
    radius: 10.0,
    radiusLg: 18.0,
    shadow: [BoxShadow(color: Color(0x1F1A2430), offset: Offset(0.0, 12.0), blurRadius: 32.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Poppins', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 22.0, h2: 34.0, h1: 54.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.04, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 180, base: 360, slow: 780, curve: _curveCubic97, enterDuration: 780, enterCurve: _curveCubic97, enterOffsetY: 18.0, enterStagger: 0.065, scrollDuration: 640, scrollOffsetY: 20.0, scrollTriggerPercent: 83.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.012, pinEnabled: true, pinScrub: 1.35),
  ),
  'topographic-terrain': StyleLabTokens(
    slug: 'topographic-terrain',
    num: '78',
    name: 'Topografya & Arazi',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFECE6D8), bg2: Color(0xFFE2DAC9), surface: Color(0xFFF7F3E8), surface2: Color(0xFFF0EADC), ink: Color(0xFF241F18), inkSoft: Color(0xFF574E3E), inkFaint: Color(0xFF857B64), accent: Color(0xFFA34F24), accentInk: Color(0xFFFFF8EF), line: Color(0x29241F18)),
    radius: 2.0,
    radiusLg: 6.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Jost', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 16.0, h3: 20.0, h2: 30.0, h1: 46.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 500, displayHeight: 1.06, headingHeight: 1.22, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 110, base: 240, slow: 480, curve: _curveCubic49, enterDuration: 480, enterCurve: _curveCubic49, enterOffsetY: 32.0, enterStagger: 0.05, scrollDuration: 520, scrollOffsetY: 34.0, scrollTriggerPercent: 75.0, scrollOnce: true, hoverDuration: 150, hoverImageScale: 1.006, pinEnabled: true, pinScrub: 0.7),
  ),
  'ocean-current': StyleLabTokens(
    slug: 'ocean-current',
    num: '79',
    name: 'Deniz & Akıntı',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFF0A2029), bg2: Color(0xFF0E2833), surface: Color(0xFF12323E), surface2: Color(0xFF163A48), ink: Color(0xFFDFF0F4), inkSoft: Color(0xFFA3C4CD), inkFaint: Color(0xFF6F939D), accent: Color(0xFF46D8C4), accentInk: Color(0xFF04211D), line: Color(0x29DFF0F4)),
    radius: 6.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x8C030C10), offset: Offset(0.0, 16.0), blurRadius: 40.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Lora', fontMono: 'Courier Prime', label: 12.0, caption: 12.0, small: 14.0, body: 16.0, h3: 24.0, h2: 36.0, h1: 56.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.04, headingHeight: 1.22, bodyHeight: 1.75, displayTracking: 0.005, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.06),
    motion: StyleLabMotion(fast: 200, base: 420, slow: 830, curve: _curveCubic98, enterDuration: 830, enterCurve: _curveCubic98, enterOffsetY: 40.0, enterStagger: 0.115, scrollDuration: 860, scrollOffsetY: 36.0, scrollTriggerPercent: 71.0, scrollOnce: true, hoverDuration: 380, hoverImageScale: 1.022, pinEnabled: true, pinScrub: 1.05),
  ),
  'seasonal-shift': StyleLabTokens(
    slug: 'seasonal-shift',
    num: '80',
    name: 'Mevsim Geçişi',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFF6EFE2), bg2: Color(0xFFEDE3D2), surface: Color(0xFFFDF9F1), surface2: Color(0xFFF7F0E4), ink: Color(0xFF2A2018), inkSoft: Color(0xFF5C4C3D), inkFaint: Color(0xFF8A7B68), accent: Color(0xFFA4471F), accentInk: Color(0xFFFFF6EC), line: Color(0x242A2018)),
    radius: 8.0,
    radiusLg: 16.0,
    shadow: [BoxShadow(color: Color(0x1F2A2018), offset: Offset(0.0, 6.0), blurRadius: 20.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'EB Garamond', fontBody: 'Inter', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 13.0, body: 16.0, h3: 21.0, h2: 32.0, h1: 50.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.06, headingHeight: 1.24, bodyHeight: 1.65, displayTracking: 0.0, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 150, base: 300, slow: 570, curve: _curveCubic99, enterDuration: 570, enterCurve: _curveCubic99, enterOffsetY: 22.0, enterStagger: 0.075, scrollDuration: 570, scrollOffsetY: 44.0, scrollTriggerPercent: 96.0, scrollOnce: true, hoverDuration: 220, hoverImageScale: 1.018, pinEnabled: false, pinScrub: null),
  ),
  'forest-bark': StyleLabTokens(
    slug: 'forest-bark',
    num: '81',
    name: 'Forest Bark',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFF1F2620), bg2: Color(0xFF19201A), surface: Color(0xFF283029), surface2: Color(0xFF313B31), ink: Color(0xFFECEFE3), inkSoft: Color(0xFFB4BFA8), inkFaint: Color(0xFF85917B), accent: Color(0xFFD7A469), accentInk: Color(0xFF201708), line: Color(0x26ECEFE3)),
    radius: 5.0,
    radiusLg: 11.0,
    shadow: [BoxShadow(color: Color(0x73080C09), offset: Offset(0.0, 2.0), blurRadius: 10.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x59D7A469), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Lora', fontBody: 'EB Garamond', fontMono: 'JetBrains Mono', label: 11.0, caption: 12.0, small: 14.0, body: 17.0, h3: 22.0, h2: 32.0, h1: 52.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.04, headingHeight: 1.14, bodyHeight: 1.7, displayTracking: -0.01, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 140, base: 320, slow: 880, curve: _curveCubic69, enterDuration: 880, enterCurve: _curveCubic69, enterOffsetY: 30.0, enterStagger: 0.12, scrollDuration: 950, scrollOffsetY: 36.0, scrollTriggerPercent: 82.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.026, pinEnabled: false, pinScrub: null),
  ),
  'desert-sand': StyleLabTokens(
    slug: 'desert-sand',
    num: '82',
    name: 'Desert Sand',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFF0E5CF), bg2: Color(0xFFE6D9BE), surface: Color(0xFFFAF4E6), surface2: Color(0xFFEFE4CC), ink: Color(0xFF241F18), inkSoft: Color(0xFF5A4F3E), inkFaint: Color(0xFF857A62), accent: Color(0xFF5F4A8A), accentInk: Color(0xFFF7F1E4), line: Color(0x29241F18)),
    radius: 24.0,
    radiusLg: 44.0,
    shadow: [BoxShadow(color: Color(0x734C3A22), offset: Offset(0.0, 14.0), blurRadius: 30.0, spreadRadius: -18.0)],
    shadowHard: [BoxShadow(color: Color(0x38241F18), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Jost', fontMono: 'IBM Plex Mono', label: 10.0, caption: 12.0, small: 13.0, body: 16.0, h3: 20.0, h2: 30.0, h1: 58.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 300, displayHeight: 1.0, headingHeight: 1.12, bodyHeight: 1.66, displayTracking: 0.01, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.22),
    motion: StyleLabMotion(fast: 160, base: 420, slow: 1150, curve: _curveCubic100, enterDuration: 1150, enterCurve: _curveCubic100, enterOffsetY: 40.0, enterStagger: 0.16, scrollDuration: 1150, scrollOffsetY: 48.0, scrollTriggerPercent: 68.0, scrollOnce: true, hoverDuration: 420, hoverImageScale: 1.038, pinEnabled: true, pinScrub: 1.35),
  ),
  'polar-ice': StyleLabTokens(
    slug: 'polar-ice',
    num: '83',
    name: 'Polar Ice',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFFEAF3F8), bg2: Color(0xFFDCEAF2), surface: Color(0xFFF9FCFE), surface2: Color(0xFFEEF5FA), ink: Color(0xFF0E2733), inkSoft: Color(0xFF45626F), inkFaint: Color(0xFF6C8794), accent: Color(0xFF096D8A), accentInk: Color(0xFFF2FBFD), line: Color(0x240E2733)),
    radius: 2.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x140E2733), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x73096D8A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Inter', fontMono: 'Space Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 40.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.18, bodyHeight: 1.6, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 100, base: 240, slow: 320, curve: _curveCubic101, enterDuration: 320, enterCurve: _curveCubic101, enterOffsetY: 10.0, enterStagger: 0.035, scrollDuration: 420, scrollOffsetY: 14.0, scrollTriggerPercent: 90.0, scrollOnce: false, hoverDuration: 100, hoverImageScale: 1.01, pinEnabled: false, pinScrub: null),
  ),
  'volcanic-mineral': StyleLabTokens(
    slug: 'volcanic-mineral',
    num: '84',
    name: 'Volcanic Mineral',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFF14120F), bg2: Color(0xFF0E0D0B), surface: Color(0xFF1C1916), surface2: Color(0xFF26221D), ink: Color(0xFFF0EAE0), inkSoft: Color(0xFFB6A998), inkFaint: Color(0xFF877D6D), accent: Color(0xFFE0572A), accentInk: Color(0xFF120603), line: Color(0x24F0EAE0)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [BoxShadow(color: Color(0xE6000000), offset: Offset(0.0, 8.0), blurRadius: 22.0, spreadRadius: -12.0)],
    shadowHard: [BoxShadow(color: Color(0x80E0572A), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Space Grotesk', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 19.0, h2: 28.0, h1: 48.0, h1Mobile: 28.0, bodyWeight: 500, strongWeight: 700, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.1, bodyHeight: 1.58, displayTracking: 0.04, headingTracking: 0.03, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 120, base: 300, slow: 680, curve: _curveCubic102, enterDuration: 680, enterCurve: _curveCubic102, enterOffsetY: 12.0, enterStagger: 0.15, scrollDuration: 300, scrollOffsetY: 64.0, scrollTriggerPercent: 74.0, scrollOnce: true, hoverDuration: 460, hoverImageScale: 1.006, pinEnabled: true, pinScrub: 0.35),
  ),
  'coral-reef': StyleLabTokens(
    slug: 'coral-reef',
    num: '85',
    name: 'Coral Reef',
    family: 'Doğa & Organik',
    palette: StyleLabPalette(bg: Color(0xFF0D2B30), bg2: Color(0xFF092226), surface: Color(0xFF123840), surface2: Color(0xFF174650), ink: Color(0xFFE6F4F2), inkSoft: Color(0xFFA4C6C4), inkFaint: Color(0xFF779C9B), accent: Color(0xFFFF8A73), accentInk: Color(0xFF2A0D08), line: Color(0x29E6F4F2)),
    radius: 22.0,
    radiusLg: 36.0,
    shadow: [BoxShadow(color: Color(0x99040E10), offset: Offset(0.0, 10.0), blurRadius: 24.0, spreadRadius: -14.0)],
    shadowHard: [BoxShadow(color: Color(0x66FF8A73), offset: Offset(0.0, 0.0), blurRadius: 0.0, spreadRadius: 1.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Baloo 2', fontBody: 'Nunito', fontMono: 'Courier Prime', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 28.0, h1: 46.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 700, displayWeight: 600, displayHeight: 1.08, headingHeight: 1.2, bodyHeight: 1.66, displayTracking: 0.0, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 160, base: 380, slow: 980, curve: _curveCubic103, enterDuration: 980, enterCurve: _curveCubic103, enterOffsetY: 22.0, enterStagger: 0.08, scrollDuration: 880, scrollOffsetY: 18.0, scrollTriggerPercent: 79.0, scrollOnce: false, hoverDuration: 280, hoverImageScale: 1.058, pinEnabled: true, pinScrub: 1.05),
  ),
  'literary-hardcover': StyleLabTokens(
    slug: 'literary-hardcover',
    num: '86',
    name: 'Literary Hardcover',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF2EBDD), bg2: Color(0xFFE8DFCD), surface: Color(0xFFFDFAF2), surface2: Color(0xFFECE3D3), ink: Color(0xFF1B1A17), inkSoft: Color(0xFF4E4A42), inkFaint: Color(0xFF7B7568), accent: Color(0xFF2F4A3C), accentInk: Color(0xFFF7F3E8), line: Color(0x291B1A17)),
    radius: 4.0,
    radiusLg: 10.0,
    shadow: [BoxShadow(color: Color(0x1A1B1A17), offset: Offset(0.0, 1.0), blurRadius: 0.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Lora', fontBody: 'Lora', fontMono: 'IBM Plex Mono', label: 11.0, caption: 13.0, small: 15.0, body: 17.0, h3: 22.0, h2: 34.0, h1: 58.0, h1Mobile: 34.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.1, headingHeight: 1.22, bodyHeight: 1.72, displayTracking: -0.01, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 120, base: 220, slow: 380, curve: _curveCubic1, enterDuration: 720, enterCurve: _curveCubic1, enterOffsetY: 18.0, enterStagger: 0.055, scrollDuration: 860, scrollOffsetY: 20.0, scrollTriggerPercent: 81.0, scrollOnce: true, hoverDuration: 260, hoverImageScale: 1.018, pinEnabled: false, pinScrub: null),
  ),
  'broadsheet-daily': StyleLabTokens(
    slug: 'broadsheet-daily',
    num: '87',
    name: 'Broadsheet Daily',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF3F0E9), bg2: Color(0xFFE8E4DA), surface: Color(0xFFFBF9F4), surface2: Color(0xFFECE8DF), ink: Color(0xFF12141A), inkSoft: Color(0xFF45484F), inkFaint: Color(0xFF74777E), accent: Color(0xFFA8241B), accentInk: Color(0xFFFDF7F2), line: Color(0x2E12141A)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xEB12141A), offset: Offset(2.0, 2.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'EB Garamond', fontMono: 'Share Tech Mono', label: 11.0, caption: 13.0, small: 14.5, body: 16.5, h3: 20.0, h2: 30.0, h1: 46.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 600, displayWeight: 400, displayHeight: 1.02, headingHeight: 1.16, bodyHeight: 1.56, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 90, base: 160, slow: 260, curve: _curveSteps30, enterDuration: 220, enterCurve: _curveSteps30, enterOffsetY: 4.0, enterStagger: 0.02, scrollDuration: 280, scrollOffsetY: 8.0, scrollTriggerPercent: 94.0, scrollOnce: true, hoverDuration: 80, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'magazine-feature': StyleLabTokens(
    slug: 'magazine-feature',
    num: '88',
    name: 'Magazine Feature',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFFAF6F0), bg2: Color(0xFFF0E9DF), surface: Color(0xFFFFFDF9), surface2: Color(0xFFF4EEE4), ink: Color(0xFF1A1614), inkSoft: Color(0xFF4B423D), inkFaint: Color(0xFF7B716A), accent: Color(0xFF8A2F52), accentInk: Color(0xFFFDF3F0), line: Color(0x241A1614)),
    radius: 2.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0x1F1A1614), offset: Offset(0.0, 10.0), blurRadius: 30.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Jost', fontMono: 'JetBrains Mono', label: 11.0, caption: 13.0, small: 15.0, body: 17.0, h3: 24.0, h2: 38.0, h1: 64.0, h1Mobile: 36.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.04, headingHeight: 1.14, bodyHeight: 1.66, displayTracking: -0.02, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 140, base: 260, slow: 420, curve: _curveCubic68, enterDuration: 900, enterCurve: _curveCubic68, enterOffsetY: 34.0, enterStagger: 0.1, scrollDuration: 1000, scrollOffsetY: 28.0, scrollTriggerPercent: 77.0, scrollOnce: true, hoverDuration: 320, hoverImageScale: 1.03, pinEnabled: true, pinScrub: 0.9),
  ),
  'academic-paper': StyleLabTokens(
    slug: 'academic-paper',
    num: '89',
    name: 'Academic Paper',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF8F8F6), bg2: Color(0xFFEEEEEA), surface: Color(0xFFFDFDFB), surface2: Color(0xFFF2F2EE), ink: Color(0xFF1B1E23), inkSoft: Color(0xFF4A4E55), inkFaint: Color(0xFF7A7E85), accent: Color(0xFF1F4A7A), accentInk: Color(0xFFF6F8FB), line: Color(0x291B1E23)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x141B1E23), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'EB Garamond', fontBody: 'EB Garamond', fontMono: 'Courier Prime', label: 11.0, caption: 12.5, small: 14.0, body: 15.5, h3: 18.0, h2: 24.0, h1: 34.0, h1Mobile: 26.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.18, headingHeight: 1.24, bodyHeight: 1.66, displayTracking: -0.005, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.08),
    motion: StyleLabMotion(fast: 100, base: 180, slow: 300, curve: Curves.linear, enterDuration: 330, enterCurve: Curves.linear, enterOffsetY: 0.0, enterStagger: 0.04, scrollDuration: 420, scrollOffsetY: 10.0, scrollTriggerPercent: 89.0, scrollOnce: true, hoverDuration: 120, hoverImageScale: 1.0, pinEnabled: false, pinScrub: null),
  ),
  'poetry-chapbook': StyleLabTokens(
    slug: 'poetry-chapbook',
    num: '90',
    name: 'Poetry Chapbook',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF7F2E9), bg2: Color(0xFFECE6DA), surface: Color(0xFFFDFAF4), surface2: Color(0xFFF0EADD), ink: Color(0xFF22201D), inkSoft: Color(0xFF55504A), inkFaint: Color(0xFF837C74), accent: Color(0xFF4B3F66), accentInk: Color(0xFFF7F3EE), line: Color(0x2422201D)),
    radius: 2.0,
    radiusLg: 8.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Cormorant Garamond', fontBody: 'Cormorant Garamond', fontMono: 'IBM Plex Mono', label: 10.5, caption: 12.5, small: 14.0, body: 16.5, h3: 20.0, h2: 28.0, h1: 44.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 500, displayWeight: 500, displayHeight: 1.14, headingHeight: 1.26, bodyHeight: 1.78, displayTracking: 0.01, headingTracking: 0.005, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 160, base: 300, slow: 520, curve: _curveCubic104, enterDuration: 1100, enterCurve: _curveCubic104, enterOffsetY: 26.0, enterStagger: 0.12, scrollDuration: 1150, scrollOffsetY: 22.0, scrollTriggerPercent: 83.0, scrollOnce: true, hoverDuration: 380, hoverImageScale: 1.02, pinEnabled: false, pinScrub: null),
  ),
  'product-catalog': StyleLabTokens(
    slug: 'product-catalog',
    num: '91',
    name: 'Product Catalog',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF6F4EF), bg2: Color(0xFFEEEAE0), surface: Color(0xFFFFFDF8), surface2: Color(0xFFE9E4D8), ink: Color(0xFF1A1C19), inkSoft: Color(0xFF4B5148), inkFaint: Color(0xFF767C72), accent: Color(0xFF16624F), accentInk: Color(0xFFF7F3E8), line: Color(0x291A1C19)),
    radius: 2.0,
    radiusLg: 4.0,
    shadow: [BoxShadow(color: Color(0x141A1C19), offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Space Grotesk', fontBody: 'Lora', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 15.5, h3: 18.0, h2: 26.0, h1: 44.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 600, displayHeight: 1.04, headingHeight: 1.12, bodyHeight: 1.66, displayTracking: -0.01, headingTracking: -0.005, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 100, base: 170, slow: 240, curve: _curveCubic105, enterDuration: 460, enterCurve: _curveCubic105, enterOffsetY: 8.0, enterStagger: 0.035, scrollDuration: 580, scrollOffsetY: 10.0, scrollTriggerPercent: 87.0, scrollOnce: true, hoverDuration: 170, hoverImageScale: 1.012, pinEnabled: false, pinScrub: null),
  ),
  'museum-thesis': StyleLabTokens(
    slug: 'museum-thesis',
    num: '92',
    name: 'Museum & Thesis',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF4F2EC), bg2: Color(0xFFEBE8DF), surface: Color(0xFFFBFAF6), surface2: Color(0xFFE6E2D8), ink: Color(0xFF191B1F), inkSoft: Color(0xFF4C515A), inkFaint: Color(0xFF787E88), accent: Color(0xFF3C4A63), accentInk: Color(0xFFF4F1E8), line: Color(0x29191B1F)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [BoxShadow(color: Color(0x12191B1F), offset: Offset(0.0, 1.0), blurRadius: 3.0, spreadRadius: 0.0)],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'EB Garamond', fontBody: 'EB Garamond', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 15.0, body: 17.0, h3: 18.0, h2: 25.0, h1: 38.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.14, headingHeight: 1.2, bodyHeight: 1.72, displayTracking: -0.005, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 160, base: 460, slow: 720, curve: _curveCubic106, enterDuration: 1100, enterCurve: _curveCubic106, enterOffsetY: 20.0, enterStagger: 0.11, scrollDuration: 1150, scrollOffsetY: 18.0, scrollTriggerPercent: 77.0, scrollOnce: true, hoverDuration: 460, hoverImageScale: 1.004, pinEnabled: true, pinScrub: 0.8),
  ),
  'type-experiment': StyleLabTokens(
    slug: 'type-experiment',
    num: '93',
    name: 'Type Experiment',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF4F4F0), bg2: Color(0xFFEAEAE4), surface: Color(0xFFFFFFFF), surface2: Color(0xFFEFEFE9), ink: Color(0xFF0D0D0F), inkSoft: Color(0xFF47474C), inkFaint: Color(0xFF74747A), accent: Color(0xFF2B1DE0), accentInk: Color(0xFFF6F5FF), line: Color(0x290D0D0F)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Space Mono', fontMono: 'JetBrains Mono', label: 10.5, caption: 12.0, small: 13.5, body: 14.0, h3: 20.0, h2: 34.0, h1: 76.0, h1Mobile: 40.0, bodyWeight: 400, strongWeight: 700, displayWeight: 400, displayHeight: 0.92, headingHeight: 1.02, bodyHeight: 1.75, displayTracking: -0.02, headingTracking: -0.015, bodyTracking: 0.0, labelTracking: 0.16),
    motion: StyleLabMotion(fast: 80, base: 140, slow: 260, curve: _curveSteps12, enterDuration: 220, enterCurve: _curveSteps12, enterOffsetY: 48.0, enterStagger: 0.015, scrollDuration: 260, scrollOffsetY: 56.0, scrollTriggerPercent: 94.0, scrollOnce: true, hoverDuration: 80, hoverImageScale: 1.06, pinEnabled: false, pinScrub: null),
  ),
  'encyclopedia': StyleLabTokens(
    slug: 'encyclopedia',
    num: '94',
    name: 'Encyclopedia',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFF7F5EE), bg2: Color(0xFFEFECE1), surface: Color(0xFFFFFCF4), surface2: Color(0xFFEBE7DA), ink: Color(0xFF1A1C1A), inkSoft: Color(0xFF4A4F4A), inkFaint: Color(0xFF767B76), accent: Color(0xFF7A1F52), accentInk: Color(0xFFFDF6EF), line: Color(0x291A1C1A)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Lora', fontBody: 'Inter', fontMono: 'IBM Plex Mono', label: 10.5, caption: 12.0, small: 13.0, body: 14.5, h3: 18.0, h2: 26.0, h1: 42.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 700, displayHeight: 1.08, headingHeight: 1.16, bodyHeight: 1.6, displayTracking: -0.005, headingTracking: 0.0, bodyTracking: 0.0, labelTracking: 0.1),
    motion: StyleLabMotion(fast: 90, base: 130, slow: 240, curve: _curveCubic107, enterDuration: 330, enterCurve: _curveCubic107, enterOffsetY: 6.0, enterStagger: 0.025, scrollDuration: 420, scrollOffsetY: 8.0, scrollTriggerPercent: 89.0, scrollOnce: false, hoverDuration: 130, hoverImageScale: 1.008, pinEnabled: false, pinScrub: null),
  ),
  'punk-fanzine': StyleLabTokens(
    slug: 'punk-fanzine',
    num: '95',
    name: 'Punk Fanzine',
    family: 'Yayın & Tipografi',
    palette: StyleLabPalette(bg: Color(0xFFE6E4DD), bg2: Color(0xFFDBD8D0), surface: Color(0xFFF2F0E9), surface2: Color(0xFFD2CFC6), ink: Color(0xFF0E0E0E), inkSoft: Color(0xFF43433F), inkFaint: Color(0xFF6D6D68), accent: Color(0xFFCF1F2B), accentInk: Color(0xFFFFF7F1), line: Color(0x3D0E0E0E)),
    radius: 0.0,
    radiusLg: 2.0,
    shadow: [],
    shadowHard: [BoxShadow(color: Color(0xFF0E0E0E), offset: Offset(4.0, 4.0), blurRadius: 0.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Kalam', fontBody: 'Courier Prime', fontMono: 'Share Tech Mono', label: 11.0, caption: 12.0, small: 13.0, body: 14.5, h3: 19.0, h2: 28.0, h1: 46.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 700, displayWeight: 700, displayHeight: 1.04, headingHeight: 1.1, bodyHeight: 1.6, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.12),
    motion: StyleLabMotion(fast: 60, base: 120, slow: 200, curve: _curveSteps60, enterDuration: 150, enterCurve: _curveSteps60, enterOffsetY: 30.0, enterStagger: 0.05, scrollDuration: 180, scrollOffsetY: 34.0, scrollTriggerPercent: 96.0, scrollOnce: false, hoverDuration: 60, hoverImageScale: 1.03, pinEnabled: false, pinScrub: null),
  ),
  'kinetic-marquee': StyleLabTokens(
    slug: 'kinetic-marquee',
    num: '96',
    name: 'Kinetic Marquee',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFF4F1EA), bg2: Color(0xFFEAE5DA), surface: Color(0xFFFDFBF6), surface2: Color(0xFFF2EEE4), ink: Color(0xFF14161A), inkSoft: Color(0xFF4A4D57), inkFaint: Color(0xFF82858F), accent: Color(0xFF2D3AD0), accentInk: Color(0xFFF7F7FF), line: Color(0x2414161A)),
    radius: 3.0,
    radiusLg: 8.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Chakra Petch', fontBody: 'Space Grotesk', fontMono: 'JetBrains Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 18.0, h2: 24.0, h1: 56.0, h1Mobile: 32.0, bodyWeight: 400, strongWeight: 500, displayWeight: 600, displayHeight: 1.04, headingHeight: 1.18, bodyHeight: 1.6, displayTracking: 0.02, headingTracking: 0.02, bodyTracking: 0.0, labelTracking: 0.18),
    motion: StyleLabMotion(fast: 180, base: 340, slow: 620, curve: _curveCubic108, enterDuration: 620, enterCurve: _curveCubic108, enterOffsetY: 0.0, enterStagger: 0.09, scrollDuration: 500, scrollOffsetY: 0.0, scrollTriggerPercent: 70.0, scrollOnce: true, hoverDuration: 180, hoverImageScale: 1.006, pinEnabled: true, pinScrub: 0.25),
  ),
  'optical-illusion': StyleLabTokens(
    slug: 'optical-illusion',
    num: '97',
    name: 'Optical Illusion',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFFBFBFB), bg2: Color(0xFFF1F1F1), surface: Color(0xFFFFFFFF), surface2: Color(0xFFF4F4F4), ink: Color(0xFF0A0A0A), inkSoft: Color(0xFF464646), inkFaint: Color(0xFF8A8A8A), accent: Color(0xFFB8123F), accentInk: Color(0xFFFFFFFF), line: Color(0x1F0A0A0A)),
    radius: 0.0,
    radiusLg: 0.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Archivo Black', fontBody: 'Inter', fontMono: 'Space Mono', label: 11.0, caption: 12.0, small: 13.0, body: 15.0, h3: 19.0, h2: 26.0, h1: 44.0, h1Mobile: 28.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.06, headingHeight: 1.2, bodyHeight: 1.6, displayTracking: -0.01, headingTracking: -0.01, bodyTracking: 0.0, labelTracking: 0.2),
    motion: StyleLabMotion(fast: 90, base: 180, slow: 340, curve: _curveCubic32, enterDuration: 340, enterCurve: _curveCubic32, enterOffsetY: 18.0, enterStagger: 0.06, scrollDuration: 280, scrollOffsetY: 8.0, scrollTriggerPercent: 82.0, scrollOnce: false, hoverDuration: 90, hoverImageScale: 1.045, pinEnabled: false, pinScrub: null),
  ),
  'generative-grid': StyleLabTokens(
    slug: 'generative-grid',
    num: '98',
    name: 'Generative Grid',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFFE9EDF0), bg2: Color(0xFFDFE5E9), surface: Color(0xFFF7F9FA), surface2: Color(0xFFEEF2F4), ink: Color(0xFF0F161A), inkSoft: Color(0xFF414B51), inkFaint: Color(0xFF79858C), accent: Color(0xFF0B7D55), accentInk: Color(0xFFFFFFFF), line: Color(0x210F161A)),
    radius: 1.0,
    radiusLg: 4.0,
    shadow: [],
    shadowHard: [],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Michroma', fontBody: 'Jost', fontMono: 'Share Tech Mono', label: 10.0, caption: 11.0, small: 13.0, body: 15.0, h3: 17.0, h2: 22.0, h1: 34.0, h1Mobile: 22.0, bodyWeight: 400, strongWeight: 500, displayWeight: 400, displayHeight: 1.2, headingHeight: 1.32, bodyHeight: 1.58, displayTracking: 0.03, headingTracking: 0.03, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 150, base: 300, slow: 780, curve: _curveCubic109, enterDuration: 780, enterCurve: _curveCubic109, enterOffsetY: 10.0, enterStagger: 0.03, scrollDuration: 900, scrollOffsetY: 24.0, scrollTriggerPercent: 76.0, scrollOnce: true, hoverDuration: 150, hoverImageScale: 1.012, pinEnabled: true, pinScrub: 1.6),
  ),
  'depth-parallax': StyleLabTokens(
    slug: 'depth-parallax',
    num: '99',
    name: 'Depth Parallax',
    family: 'Hareket & Optik',
    palette: StyleLabPalette(bg: Color(0xFF0B1014), bg2: Color(0xFF101820), surface: Color(0xFF131D26), surface2: Color(0xFF1A2732), ink: Color(0xFFEAF0F4), inkSoft: Color(0xFFA8B6C0), inkFaint: Color(0xFF74828C), accent: Color(0xFF5AC8FF), accentInk: Color(0xFF05131A), line: Color(0x26EAF0F4)),
    radius: 6.0,
    radiusLg: 14.0,
    shadow: [BoxShadow(color: Color(0x73000000), offset: Offset(0.0, 4.0), blurRadius: 18.0, spreadRadius: 0.0)],
    shadowHard: [BoxShadow(color: Color(0x80000000), offset: Offset(0.0, 10.0), blurRadius: 32.0, spreadRadius: 0.0)],
    spacing: [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0],
    typography: StyleLabType(fontDisplay: 'Fraunces', fontBody: 'Nunito', fontMono: 'IBM Plex Mono', label: 11.0, caption: 12.0, small: 14.0, body: 16.0, h3: 20.0, h2: 30.0, h1: 48.0, h1Mobile: 30.0, bodyWeight: 400, strongWeight: 600, displayWeight: 500, displayHeight: 1.1, headingHeight: 1.24, bodyHeight: 1.66, displayTracking: 0.01, headingTracking: 0.01, bodyTracking: 0.0, labelTracking: 0.14),
    motion: StyleLabMotion(fast: 360, base: 640, slow: 1000, curve: _curveCubic110, enterDuration: 1000, enterCurve: _curveCubic110, enterOffsetY: 40.0, enterStagger: 0.13, scrollDuration: 1100, scrollOffsetY: 56.0, scrollTriggerPercent: 88.0, scrollOnce: true, hoverDuration: 360, hoverImageScale: 1.035, pinEnabled: true, pinScrub: 0.45),
  ),
};

// ---- koyu palet (yalnız 10 renk; gerisi açık setten gelir) ----
const Map<String, StyleLabPalette> styleLabDarkPalette = <String, StyleLabPalette>{
  'minimalism': StyleLabPalette(bg: Color(0xFF0B0B0C), bg2: Color(0xFF121214), surface: Color(0xFF161618), surface2: Color(0xFF1D1D20), ink: Color(0xFFEDEDED), inkSoft: Color(0xFFA0A4AA), inkFaint: Color(0xFF6F747A), accent: Color(0xFF60A5FA), accentInk: Color(0xFF0B0B0C), line: Color(0x1FFFFFFF)),
  'swiss-design': StyleLabPalette(bg: Color(0xFF0D0D0D), bg2: Color(0xFF1B1B1B), surface: Color(0xFF141414), surface2: Color(0xFF262626), ink: Color(0xFFF5F5F5), inkSoft: Color(0xFFAFAFAF), inkFaint: Color(0xFF757575), accent: Color(0xFFFF2D4B), accentInk: Color(0xFF0D0D0D), line: Color(0xFFF5F5F5)),
  'editorial-design': StyleLabPalette(bg: Color(0xFF14120F), bg2: Color(0xFF1E1B16), surface: Color(0xFF1A1714), surface2: Color(0xFF2B2824), ink: Color(0xFFF0E9DD), inkSoft: Color(0xFFB9B0A2), inkFaint: Color(0xFF77736C), accent: Color(0xFFD76A4C), accentInk: Color(0xFF14120F), line: Color(0x2EF0E9DD)),
  'luxury-typography': StyleLabPalette(bg: Color(0xFF12100E), bg2: Color(0xFF1A1714), surface: Color(0xFF171512), surface2: Color(0xFF282622), ink: Color(0xFFEFE8DB), inkSoft: Color(0xFFB3AA9C), inkFaint: Color(0xFF75716A), accent: Color(0xFFD8BB7D), accentInk: Color(0xFF0D0D0D), line: Color(0x2EEFE8DB)),
  'bento-grid': StyleLabPalette(bg: Color(0xFF0E0F0D), bg2: Color(0xFF1C1D1B), surface: Color(0xFF191B18), surface2: Color(0xFF202320), ink: Color(0xFFF0F1EE), inkSoft: Color(0xFFA8ADA5), inkFaint: Color(0xFF747572), accent: Color(0xFF5B9CFF), accentInk: Color(0xFF0D0D0D), line: Color(0x1AFFFFFF)),
  'japandi': StyleLabPalette(bg: Color(0xFF17150F), bg2: Color(0xFF24211B), surface: Color(0xFF221F18), surface2: Color(0xFF2A261E), ink: Color(0xFFECE5D8), inkSoft: Color(0xFFB3AA9C), inkFaint: Color(0xFF777369), accent: Color(0xFF9FAE97), accentInk: Color(0xFF17150F), line: Color(0x24ECE5D8)),
  'wabi-sabi': StyleLabPalette(bg: Color(0xFF1A1714), bg2: Color(0xFF26231F), surface: Color(0xFF221E19), surface2: Color(0xFF322E28), ink: Color(0xFFE8E0D3), inkSoft: Color(0xFFB0A495), inkFaint: Color(0xFF77716A), accent: Color(0xFFC9744A), accentInk: Color(0xFF0D0D0D), line: Color(0x29E8E0D3)),
  'glassmorphism': StyleLabPalette(bg: Color(0xFF1B1035), bg2: Color(0xFF2A1A5E), surface: Color(0x1FFFFFFF), surface2: Color(0x12FFFFFF), ink: Color(0xFFFFFFFF), inkSoft: Color(0xC7FFFFFF), inkFaint: Color(0x8CFFFFFF), accent: Color(0xFF7DD3FC), accentInk: Color(0xFF0D0D0D), line: Color(0x3DFFFFFF)),
  'liquid-glass': StyleLabPalette(bg: Color(0xFF04060A), bg2: Color(0xFF0A1017), surface: Color(0x14FFFFFF), surface2: Color(0x0DFFFFFF), ink: Color(0xFFFBFDFF), inkSoft: Color(0xC7FBFDFF), inkFaint: Color(0x85FBFDFF), accent: Color(0xFF7FDCFF), accentInk: Color(0xFF03121A), line: Color(0x38FFFFFF)),
  'neumorphism': StyleLabPalette(bg: Color(0xFF23262E), bg2: Color(0xFF1C1F26), surface: Color(0xFF23262E), surface2: Color(0xFF33363D), ink: Color(0xFFE6E9EF), inkSoft: Color(0xFFA7AEBC), inkFaint: Color(0xFF7B7E85), accent: Color(0xFF4262E8), accentInk: Color(0xFFFFFFFF), line: Color(0x24E6E9EF)),
  'fluid-simulation': StyleLabPalette(bg: Color(0xFF0B1417), bg2: Color(0xFF101C1F), surface: Color(0xFF132327), surface2: Color(0xFF1A2F33), ink: Color(0xFFE9F1F1), inkSoft: Color(0xFFA6B6B5), inkFaint: Color(0xFF748584), accent: Color(0xFFFF8A5C), accentInk: Color(0xFF1D0A04), line: Color(0x29E9F1F1)),
  'shadow-stage': StyleLabPalette(bg: Color(0xFF100C08), bg2: Color(0xFF151009), surface: Color(0xFF19130C), surface2: Color(0xFF221A11), ink: Color(0xFFF6F3EE), inkSoft: Color(0xFFC3B9AD), inkFaint: Color(0xFF948A7D), accent: Color(0xFFFFC861), accentInk: Color(0xFF1A1206), line: Color(0x2EF6F3EE)),
  'moire-field': StyleLabPalette(bg: Color(0xFF1C1B19), bg2: Color(0xFF232220), surface: Color(0xFF2A2825), surface2: Color(0xFF34322E), ink: Color(0xFFECE8E1), inkSoft: Color(0xFFB3AEA6), inkFaint: Color(0xFF8A857D), accent: Color(0xFFE57AB0), accentInk: Color(0xFF1A0712), line: Color(0x2EECE8E1)),
  'motion-trail': StyleLabPalette(bg: Color(0xFF121316), bg2: Color(0xFF181A1E), surface: Color(0xFF1E2025), surface2: Color(0xFF262930), ink: Color(0xFFF1F2F4), inkSoft: Color(0xFFAEB3B9), inkFaint: Color(0xFF7F858C), accent: Color(0xFFFFA06B), accentInk: Color(0xFF200A06), line: Color(0x29F1F2F4)),
  'stepped-mechanism': StyleLabPalette(bg: Color(0xFF15191C), bg2: Color(0xFF1B2024), surface: Color(0xFF22272B), surface2: Color(0xFF2B3136), ink: Color(0xFFEAF0F3), inkSoft: Color(0xFFADB8BE), inkFaint: Color(0xFF7F8A90), accent: Color(0xFF4FBF7A), accentInk: Color(0xFF05170C), line: Color(0x2BEAF0F3)),
  'holographic-layer': StyleLabPalette(bg: Color(0xFF12081A), bg2: Color(0xFF180C22), surface: Color(0xFF1D1029), surface2: Color(0xFF261534), ink: Color(0xFFF6F1FB), inkSoft: Color(0xFFC3B6D2), inkFaint: Color(0xFF94899F), accent: Color(0xFFD0A8FF), accentInk: Color(0xFF150A1F), line: Color(0x2EF6F1FB)),
  'voice-first': StyleLabPalette(bg: Color(0xFF050309), bg2: Color(0xFF09060F), surface: Color(0xFF0D0814), surface2: Color(0xFF14101D), ink: Color(0xFFFDF8FF), inkSoft: Color(0xFFCFC2E0), inkFaint: Color(0xFF9E8FB4), accent: Color(0xFFD9A6FF), accentInk: Color(0xFF170428), line: Color(0x29FDF8FF)),
  'spatial-ar-layer': StyleLabPalette(bg: Color(0xFF0C1017), bg2: Color(0xFF111722), surface: Color(0xFF161D29), surface2: Color(0xFF1C2533), ink: Color(0xFFE8EDF6), inkSoft: Color(0xFFA7B2C4), inkFaint: Color(0xFF75808F), accent: Color(0xFF7D95FF), accentInk: Color(0xFF0A0F1E), line: Color(0x29E8EDF6)),
  'command-palette': StyleLabPalette(bg: Color(0xFF020305), bg2: Color(0xFF05070A), surface: Color(0xFF0A0C11), surface2: Color(0xFF10141B), ink: Color(0xFFF8FAFD), inkSoft: Color(0xFFB6BEC9), inkFaint: Color(0xFF7F8893), accent: Color(0xFFCFE0FF), accentInk: Color(0xFF06101F), line: Color(0x1FF8FAFD)),
  'timeline-editor': StyleLabPalette(bg: Color(0xFF121213), bg2: Color(0xFF171719), surface: Color(0xFF1D1C1F), surface2: Color(0xFF242327), ink: Color(0xFFEFECE7), inkSoft: Color(0xFFB7B0A8), inkFaint: Color(0xFF857F78), accent: Color(0xFFD97AC0), accentInk: Color(0xFF1C0508), line: Color(0x29EFECE7)),
  'claymorphism': StyleLabPalette(bg: Color(0xFF1A1630), bg2: Color(0xFF27233C), surface: Color(0xFF241F3D), surface2: Color(0xFF2C2649), ink: Color(0xFFECE7FF), inkSoft: Color(0xFFB4ADD6), inkFaint: Color(0xFF78748D), accent: Color(0xFF8B6DFF), accentInk: Color(0xFF14102A), line: Color(0x24ECE7FF)),
  'kanban-flow': StyleLabPalette(bg: Color(0xFF0F1216), bg2: Color(0xFF141922), surface: Color(0xFF191F28), surface2: Color(0xFF1F2632), ink: Color(0xFFE9EEF4), inkSoft: Color(0xFFA9B3C0), inkFaint: Color(0xFF79828F), accent: Color(0xFF6FA8FF), accentInk: Color(0xFF08101C), line: Color(0x29E9EEF4)),
  'step-wizard': StyleLabPalette(bg: Color(0xFF0C1120), bg2: Color(0xFF121A2C), surface: Color(0xFF172033), surface2: Color(0xFF1D283D), ink: Color(0xFFEEF2FA), inkSoft: Color(0xFFAEB9CD), inkFaint: Color(0xFF7D8AA1), accent: Color(0xFF8FA3FF), accentInk: Color(0xFF0A1024), line: Color(0x29EEF2FA)),
  'zero-ui': StyleLabPalette(bg: Color(0xFF12130F), bg2: Color(0xFF191A15), surface: Color(0xFF1D1E18), surface2: Color(0xFF24251F), ink: Color(0xFFEEEFE6), inkSoft: Color(0xFFB6B8AB), inkFaint: Color(0xFF86887C), accent: Color(0xFFDFE3D3), accentInk: Color(0xFF14150F), line: Color(0x24EEEFE6)),
  'notebook-repl': StyleLabPalette(bg: Color(0xFF101519), bg2: Color(0xFF171D23), surface: Color(0xFF1C242B), surface2: Color(0xFF232C34), ink: Color(0xFFE8EEF4), inkSoft: Color(0xFFA7B5C2), inkFaint: Color(0xFF79879A), accent: Color(0xFFF08A4B), accentInk: Color(0xFF1A0E05), line: Color(0x26E8EEF4)),
  'multiplayer-presence': StyleLabPalette(bg: Color(0xFF14101F), bg2: Color(0xFF1B1630), surface: Color(0xFF221C33), surface2: Color(0xFF2A2340), ink: Color(0xFFF0ECFA), inkSoft: Color(0xFFB6ADCC), inkFaint: Color(0xFF8B82A3), accent: Color(0xFFB18CFF), accentInk: Color(0xFF150A24), line: Color(0x29F0ECFA)),
  'keyboard-first': StyleLabPalette(bg: Color(0xFF020306), bg2: Color(0xFF06080C), surface: Color(0xFF08090D), surface2: Color(0xFF0F1216), ink: Color(0xFFF6F8FC), inkSoft: Color(0xFFB1BAC7), inkFaint: Color(0xFF808A98), accent: Color(0xFFFFD79A), accentInk: Color(0xFF1A1205), line: Color(0x21F6F8FC)),
  'kids-playground': StyleLabPalette(bg: Color(0xFF141C22), bg2: Color(0xFF1C262E), surface: Color(0xFF18222A), surface2: Color(0xFF24313A), ink: Color(0xFFF0F4F2), inkSoft: Color(0xFFB0BCC0), inkFaint: Color(0xFF7C8A90), accent: Color(0xFF7FD3C8), accentInk: Color(0xFF0E1518), line: Color(0x29F0F4F2)),
  'carnival-festival': StyleLabPalette(bg: Color(0xFF191009), bg2: Color(0xFF231710), surface: Color(0xFF1E140D), surface2: Color(0xFF2C1F15), ink: Color(0xFFF8ECDD), inkSoft: Color(0xFFBFAA99), inkFaint: Color(0xFF8A7767), accent: Color(0xFFF0873F), accentInk: Color(0xFF1A1007), line: Color(0x29F8ECDD)),
  'sticker-sheet': StyleLabPalette(bg: Color(0xFF121210), bg2: Color(0xFF1B1B18), surface: Color(0xFF171714), surface2: Color(0xFF24241F), ink: Color(0xFFF4F3EA), inkSoft: Color(0xFFB3B2A5), inkFaint: Color(0xFF7F7E72), accent: Color(0xFFF472A0), accentInk: Color(0xFF1A0A10), line: Color(0x29F4F3EA)),
  'arcade-8bit': StyleLabPalette(bg: Color(0xFF010309), bg2: Color(0xFF050914), surface: Color(0xFF04070F), surface2: Color(0xFF0D1424), ink: Color(0xFFF4F9FF), inkSoft: Color(0xFFAEBCD4), inkFaint: Color(0xFF7F8BA3), accent: Color(0xFF66FFB8), accentInk: Color(0xFF04120A), line: Color(0x21F4F9FF)),
  'aurora-ui': StyleLabPalette(bg: Color(0xFF050409), bg2: Color(0xFF0B0A14), surface: Color(0x0DFFFFFF), surface2: Color(0x09FFFFFF), ink: Color(0xFFFBFBFF), inkSoft: Color(0xC2FBFBFF), inkFaint: Color(0x80FBFBFF), accent: Color(0xFF9B8CFF), accentInk: Color(0xFF0A0818), line: Color(0x1FFFFFFF)),
  'craft-handmade': StyleLabPalette(bg: Color(0xFF1A1610), bg2: Color(0xFF241F17), surface: Color(0xFF201B14), surface2: Color(0xFF2C261C), ink: Color(0xFFF2E9D9), inkSoft: Color(0xFFBCB09C), inkFaint: Color(0xFF8A8071), accent: Color(0xFFD9A86A), accentInk: Color(0xFF1A1208), line: Color(0x29F2E9D9)),
  'celebration-card': StyleLabPalette(bg: Color(0xFF1A1116), bg2: Color(0xFF211720), surface: Color(0xFF271B24), surface2: Color(0xFF33232E), ink: Color(0xFFF6E9EE), inkSoft: Color(0xFFCBB2BD), inkFaint: Color(0xFF9C8390), accent: Color(0xFFFF7FAE), accentInk: Color(0xFF2A0D18), line: Color(0x29F6E9EE)),
  'collectible-card': StyleLabPalette(bg: Color(0xFF0D0E15), bg2: Color(0xFF12131C), surface: Color(0xFF171926), surface2: Color(0xFF1F2231), ink: Color(0xFFECEAF5), inkSoft: Color(0xFFB0AEC0), inkFaint: Color(0xFF86849A), accent: Color(0xFFA48BFF), accentInk: Color(0xFF0F0D18), line: Color(0x29ECEAF5)),
  'comic-story': StyleLabPalette(bg: Color(0xFF121214), bg2: Color(0xFF17171A), surface: Color(0xFF1C1C20), surface2: Color(0xFF26262B), ink: Color(0xFFF2EDDD), inkSoft: Color(0xFFB5B0A2), inkFaint: Color(0xFF8A857A), accent: Color(0xFFFF6A58), accentInk: Color(0xFF180A08), line: Color(0x2EF2EDDD)),
  'album-sleeve': StyleLabPalette(bg: Color(0xFF0E0F11), bg2: Color(0xFF141517), surface: Color(0xFF191A1D), surface2: Color(0xFF222327), ink: Color(0xFFEEEDE8), inkSoft: Color(0xFFB3B2AB), inkFaint: Color(0xFF888780), accent: Color(0xFFFF6A2C), accentInk: Color(0xFF140A05), line: Color(0x29EEEDE8)),
  'sports-energy': StyleLabPalette(bg: Color(0xFF0C100E), bg2: Color(0xFF111612), surface: Color(0xFF161B18), surface2: Color(0xFF1E2420), ink: Color(0xFFE9EFE9), inkSoft: Color(0xFFAEBBB2), inkFaint: Color(0xFF7F8D84), accent: Color(0xFFFF6A2E), accentInk: Color(0xFF100804), line: Color(0x29E9EFE9)),
  'marble-vein': StyleLabPalette(bg: Color(0xFF121416), bg2: Color(0xFF0D0F10), surface: Color(0xFF191C1E), surface2: Color(0xFF222629), ink: Color(0xFFEEF0EF), inkSoft: Color(0xFFA7AEAE), inkFaint: Color(0xFF7B8484), accent: Color(0xFFE8EBE7), accentInk: Color(0xFF14181A), line: Color(0x29EEF0EF)),
  'silk-drape': StyleLabPalette(bg: Color(0xFF1A1217), bg2: Color(0xFF140E12), surface: Color(0xFF221820), surface2: Color(0xFF2C2028), ink: Color(0xFFF6ECF0), inkSoft: Color(0xFFC4B1BA), inkFaint: Color(0xFF8E7D86), accent: Color(0xFFD08AA8), accentInk: Color(0xFF26101A), line: Color(0x29F6ECF0)),
  'brass-copper': StyleLabPalette(bg: Color(0xFF0B0705), bg2: Color(0xFF080403), surface: Color(0xFF120D0A), surface2: Color(0xFF1A1310), ink: Color(0xFFF8F0E5), inkSoft: Color(0xFFCDBBA7), inkFaint: Color(0xFF9A876F), accent: Color(0xFFF0A062), accentInk: Color(0xFF1A0D05), line: Color(0x2EF8F0E5)),
  'porcelain-glaze': StyleLabPalette(bg: Color(0xFF0B1420), bg2: Color(0xFF0E1926), surface: Color(0xFF121F2E), surface2: Color(0xFF192838), ink: Color(0xFFEAF2FA), inkSoft: Color(0xFFA8BCCF), inkFaint: Color(0xFF7B8FA3), accent: Color(0xFF6AA6F0), accentInk: Color(0xFF07172B), line: Color(0x24EAF2FA)),
  'neo-brutalism': StyleLabPalette(bg: Color(0xFF111111), bg2: Color(0xFF2A2A1A), surface: Color(0xFF1B1B1B), surface2: Color(0xFF3A3320), ink: Color(0xFFFFFDF5), inkSoft: Color(0xFFD8D4C8), inkFaint: Color(0xFF9A958A), accent: Color(0xFFFF5C8A), accentInk: Color(0xFF000000), line: Color(0xFFFFFDF5)),
  'leather-craft': StyleLabPalette(bg: Color(0xFF1D1510), bg2: Color(0xFF160F0B), surface: Color(0xFF251B14), surface2: Color(0xFF2F241B), ink: Color(0xFFF4EAD9), inkSoft: Color(0xFFC6B39A), inkFaint: Color(0xFF93826B), accent: Color(0xFFD59A63), accentInk: Color(0xFF1C1007), line: Color(0x29F4EAD9)),
  'optic-prism': StyleLabPalette(bg: Color(0xFF0A1216), bg2: Color(0xFF111A1F), surface: Color(0xFF0D161B), surface2: Color(0xFF172128), ink: Color(0xFFEEF6F8), inkSoft: Color(0xFFA9BCC2), inkFaint: Color(0xFF7E939B), accent: Color(0xFF6FE6DC), accentInk: Color(0xFF04140F), line: Color(0x29EEF6F8)),
  'wood-joinery': StyleLabPalette(bg: Color(0xFF17130F), bg2: Color(0xFF211B15), surface: Color(0xFF1D1812), surface2: Color(0xFF2A231B), ink: Color(0xFFF2EBDF), inkSoft: Color(0xFFBDB2A3), inkFaint: Color(0xFF8A8072), accent: Color(0xFF8FB6CF), accentInk: Color(0xFF0D1519), line: Color(0x29F2EBDF)),
  'letterpress-print': StyleLabPalette(bg: Color(0xFF14120F), bg2: Color(0xFF1D1A16), surface: Color(0xFF191612), surface2: Color(0xFF26221C), ink: Color(0xFFF4EFE4), inkSoft: Color(0xFFB6AFA2), inkFaint: Color(0xFF857F73), accent: Color(0xFF9FA2E8), accentInk: Color(0xFF0E0D1A), line: Color(0x29F4EFE4)),
  'concrete-monolith': StyleLabPalette(bg: Color(0xFF1B1C1D), bg2: Color(0xFF232526), surface: Color(0xFF202223), surface2: Color(0xFF2C2E30), ink: Color(0xFFE8E7E3), inkSoft: Color(0xFFA9A8A4), inkFaint: Color(0xFF82837F), accent: Color(0xFFD9B463), accentInk: Color(0xFF1A1408), line: Color(0x29E8E7E3)),
  'enamel-porcelain': StyleLabPalette(bg: Color(0xFF101612), bg2: Color(0xFF17201B), surface: Color(0xFF141A16), surface2: Color(0xFF1F2823), ink: Color(0xFFF0F4F1), inkSoft: Color(0xFFAEB8B2), inkFaint: Color(0xFF78837D), accent: Color(0xFF7FD2AE), accentInk: Color(0xFF08120D), line: Color(0x24F0F4F1)),
  'speculative-scifi': StyleLabPalette(bg: Color(0xFF14120E), bg2: Color(0xFF1A1813), surface: Color(0xFF211E17), surface2: Color(0xFF28241B), ink: Color(0xFFF0ECE1), inkSoft: Color(0xFFBCB4A2), inkFaint: Color(0xFF8B8375), accent: Color(0xFFE0A33A), accentInk: Color(0xFF1A1405), line: Color(0x29F0ECE1)),
  'volumetric-data': StyleLabPalette(bg: Color(0xFF010306), bg2: Color(0xFF04080F), surface: Color(0xFF0B1A2E), surface2: Color(0xFF112740), ink: Color(0xFFF7FAFF), inkSoft: Color(0xFFC3D3E6), inkFaint: Color(0xFF8B9DB8), accent: Color(0xFFFFDF9E), accentInk: Color(0xFF1A1105), line: Color(0x33F7FAFF)),
  'agent-orchestration': StyleLabPalette(bg: Color(0xFF101216), bg2: Color(0xFF15181D), surface: Color(0xFF1A1E24), surface2: Color(0xFF20252C), ink: Color(0xFFE9ECF0), inkSoft: Color(0xFFA8AFB8), inkFaint: Color(0xFF78808A), accent: Color(0xFF8E93E8), accentInk: Color(0xFF0D0E20), line: Color(0x29E9ECF0)),
  'bio-synthetic': StyleLabPalette(bg: Color(0xFF020504), bg2: Color(0xFF050D08), surface: Color(0xFF0D1F16), surface2: Color(0xFF142E20), ink: Color(0xFFF6FDF8), inkSoft: Color(0xFFC6DCCB), inkFaint: Color(0xFF93AB9C), accent: Color(0xFFA6F5C8), accentInk: Color(0xFF0D2418), line: Color(0x33F6FDF8)),
  'anti-design': StyleLabPalette(bg: Color(0xFF111111), bg2: Color(0xFFC6EF2E), surface: Color(0xFF1C1C1C), surface2: Color(0xFF2D2D2C), ink: Color(0xFFF5F1E6), inkSoft: Color(0xFFB1AEA6), inkFaint: Color(0xFF787671), accent: Color(0xFFFF3B6B), accentInk: Color(0xFF0D0D0D), line: Color(0xFFF5F1E6)),
  'nanotech': StyleLabPalette(bg: Color(0xFF0C0D0F), bg2: Color(0xFF111316), surface: Color(0xFF16181B), surface2: Color(0xFF1C1F23), ink: Color(0xFFEEF0F2), inkSoft: Color(0xFFA9AEB4), inkFaint: Color(0xFF767C83), accent: Color(0xFFE6E9EC), accentInk: Color(0xFF101215), line: Color(0x29EEF0F2)),
  'planetary-service': StyleLabPalette(bg: Color(0xFF010307), bg2: Color(0xFF040A12), surface: Color(0xFF0A1A2B), surface2: Color(0xFF102538), ink: Color(0xFFF5F9FE), inkSoft: Color(0xFFC0CFDF), inkFaint: Color(0xFF8EA1B6), accent: Color(0xFFA8D0FF), accentInk: Color(0xFF04101F), line: Color(0x38F5F9FE)),
  'quantum-lab': StyleLabPalette(bg: Color(0xFF191822), bg2: Color(0xFF1F1E29), surface: Color(0xFF26242F), surface2: Color(0xFF2E2C38), ink: Color(0xFFECE9F2), inkSoft: Color(0xFFB4B0C0), inkFaint: Color(0xFF8A8698), accent: Color(0xFFA48BFF), accentInk: Color(0xFF120A26), line: Color(0x2BECE9F2)),
  'retro-future': StyleLabPalette(bg: Color(0xFF16130D), bg2: Color(0xFF1C1811), surface: Color(0xFF221D14), surface2: Color(0xFF2A241A), ink: Color(0xFFF4EDDC), inkSoft: Color(0xFFC2B69C), inkFaint: Color(0xFF918872), accent: Color(0xFFE8B93F), accentInk: Color(0xFF1A1405), line: Color(0x29F4EDDC)),
  'virtual-engine': StyleLabPalette(bg: Color(0xFF030206), bg2: Color(0xFF07040D), surface: Color(0xFF140C22), surface2: Color(0xFF1D1230), ink: Color(0xFFFAF6FF), inkSoft: Color(0xFFCFC2E2), inkFaint: Color(0xFF9A8DB2), accent: Color(0xFFFF9FCB), accentInk: Color(0xFF1F0612), line: Color(0x38FAF6FF)),
  'zero-gravity': StyleLabPalette(bg: Color(0xFF0B1514), bg2: Color(0xFF101D1B), surface: Color(0xFF142321), surface2: Color(0xFF1A2C29), ink: Color(0xFFE9F4F1), inkSoft: Color(0xFFA9C2BB), inkFaint: Color(0xFF7C968F), accent: Color(0xFF6FD3A8), accentInk: Color(0xFF05170F), line: Color(0x29E9F4F1)),
  'noir-estate': StyleLabPalette(bg: Color(0xFF060505), bg2: Color(0xFF030303), surface: Color(0xFF0F0D0B), surface2: Color(0xFF17130F), ink: Color(0xFFFAF6EF), inkSoft: Color(0xFFD2C8B7), inkFaint: Color(0xFF9C9283), accent: Color(0xFFE9C882), accentInk: Color(0xFF17100A), line: Color(0x29FAF6EF)),
  'agency-portfolio': StyleLabPalette(bg: Color(0xFF0A0A0A), bg2: Color(0xFF050505), surface: Color(0xFF141414), surface2: Color(0xFF1D1D1D), ink: Color(0xFFF6F5F2), inkSoft: Color(0xFFB6B3AC), inkFaint: Color(0xFF85827C), accent: Color(0xFF7D93FF), accentInk: Color(0xFF08091A), line: Color(0x29F6F5F2)),
  'product-launch': StyleLabPalette(bg: Color(0xFF04070C), bg2: Color(0xFF020408), surface: Color(0xFF0A111B), surface2: Color(0xFF121B27), ink: Color(0xFFF2F7FD), inkSoft: Color(0xFFBCC9DC), inkFaint: Color(0xFF8695AA), accent: Color(0xFF8BF2C9), accentInk: Color(0xFF04140D), line: Color(0x24F2F7FD)),
  'boutique-hotel': StyleLabPalette(bg: Color(0xFF0E0A07), bg2: Color(0xFF080605), surface: Color(0xFF17120D), surface2: Color(0xFF211A13), ink: Color(0xFFF8F0E6), inkSoft: Color(0xFFD3C2AE), inkFaint: Color(0xFF9E8D79), accent: Color(0xFFE89567), accentInk: Color(0xFF1A0B04), line: Color(0x29F8F0E6)),
  'acid-graphics': StyleLabPalette(bg: Color(0xFF030303), bg2: Color(0xFF0A0A0A), surface: Color(0xFF070707), surface2: Color(0xFF101010), ink: Color(0xFFF6FFF4), inkSoft: Color(0xFFC8D6C6), inkFaint: Color(0xFF8F9C8E), accent: Color(0xFFD8FF2E), accentInk: Color(0xFF050505), line: Color(0x4DD8FF2E)),
  'lookbook-editorial': StyleLabPalette(bg: Color(0xFF0C0B0A), bg2: Color(0xFF080706), surface: Color(0xFF151312), surface2: Color(0xFF1E1C1A), ink: Color(0xFFF2EDE6), inkSoft: Color(0xFFBCB4AA), inkFaint: Color(0xFF8A837A), accent: Color(0xFFE0704F), accentInk: Color(0xFF140703), line: Color(0x29F2EDE6)),
  'dark-dashboard': StyleLabPalette(bg: Color(0xFF06080A), bg2: Color(0xFF040506), surface: Color(0xFF0D1014), surface2: Color(0xFF151A20), ink: Color(0xFFF0F5FA), inkSoft: Color(0xFFB6C2CE), inkFaint: Color(0xFF818D99), accent: Color(0xFF7AD6FF), accentInk: Color(0xFF04141F), line: Color(0x24F0F5FA)),
  'memphis': StyleLabPalette(bg: Color(0xFF141210), bg2: Color(0xFF22201D), surface: Color(0xFF1E1A16), surface2: Color(0xFFE8C000), ink: Color(0xFFFFF6E9), inkSoft: Color(0xFFB9B2A8), inkFaint: Color(0xFF7E7972), accent: Color(0xFFFF4E50), accentInk: Color(0xFF0D0D0D), line: Color(0xFFFFF6E9)),
  'maximalism': StyleLabPalette(bg: Color(0xFF1A1310), bg2: Color(0xFF27201C), surface: Color(0xFF241A15), surface2: Color(0xFFC79B33), ink: Color(0xFFF6E7D8), inkSoft: Color(0xFFB4A79C), inkFaint: Color(0xFF7D726A), accent: Color(0xFFA8385A), accentInk: Color(0xFFFFFFFF), line: Color(0x24F6E7D8)),
  'dopamine-ui': StyleLabPalette(bg: Color(0xFF14101A), bg2: Color(0xFF221E27), surface: Color(0xFF211B2B), surface2: Color(0xFF3A2430), ink: Color(0xFFFDF7F9), inkSoft: Color(0xFFB9B1C6), inkFaint: Color(0xFF7D787E), accent: Color(0xFFFF5D8A), accentInk: Color(0xFF0D0D0D), line: Color(0x24FDF7F9)),
  'y2k': StyleLabPalette(bg: Color(0xFF0B1024), bg2: Color(0xFF181E31), surface: Color(0xFF141A33), surface2: Color(0xFF252B43), ink: Color(0xFFEAF2FF), inkSoft: Color(0xFFA7AEBD), inkFaint: Color(0xFF6F7687), accent: Color(0xFF8B74FF), accentInk: Color(0xFF0D0D0D), line: Color(0x24EAF2FF)),
  'vaporwave': StyleLabPalette(bg: Color(0xFF0C0718), bg2: Color(0xFF170F2E), surface: Color(0x1FB9A7E0), surface2: Color(0x1AF2A0C0), ink: Color(0xFFFBF4FF), inkSoft: Color(0xC2FBF4FF), inkFaint: Color(0x85FBF4FF), accent: Color(0xFFFF9EC6), accentInk: Color(0xFF2A1B4D), line: Color(0x57FF9EC6)),
  'synthwave': StyleLabPalette(bg: Color(0xFF0A0330), bg2: Color(0xFF1C0A44), surface: Color(0xFF12064A), surface2: Color(0xFF1E0C5C), ink: Color(0xFFFDFDFF), inkSoft: Color(0xCCFDFDFF), inkFaint: Color(0x8AFDFDFF), accent: Color(0xFFFF4F86), accentInk: Color(0xFF120458), line: Color(0x7A05D9E8)),
  'cyberpunk': StyleLabPalette(bg: Color(0xFF0B0B0F), bg2: Color(0xFF15151D), surface: Color(0xD914141C), surface2: Color(0xFF1B1B26), ink: Color(0xFFF2F5F7), inkSoft: Color(0xC2F2F5F7), inkFaint: Color(0x80F2F5F7), accent: Color(0xFFF9F002), accentInk: Color(0xFF0B0B0F), line: Color(0x8C05D9E8)),
  'cybercore': StyleLabPalette(bg: Color(0xFF030507), bg2: Color(0xFF070D10), surface: Color(0xFF070D10), surface2: Color(0xFF0B1419), ink: Color(0xFFE6FFF2), inkSoft: Color(0xFF93D7B3), inkFaint: Color(0xFF58876E), accent: Color(0xFF4DFFAB), accentInk: Color(0xFF04150C), line: Color(0x4D4DFFAB)),
  'pixel-art': StyleLabPalette(bg: Color(0xFF101220), bg2: Color(0xFF171A2A), surface: Color(0xFF1D2752), surface2: Color(0xFF2A3F8F), ink: Color(0xFFF7F7F7), inkSoft: Color(0xFFC9CACE), inkFaint: Color(0xFF92949F), accent: Color(0xFFFFD98A), accentInk: Color(0xFF14162A), line: Color(0xFFF7F7F7)),
  'frutiger-aero': StyleLabPalette(bg: Color(0xFF0D2233), bg2: Color(0xFF1A2F3F), surface: Color(0xFF15364D), surface2: Color(0xFF15364D), ink: Color(0xFFE6F4FF), inkSoft: Color(0xFFA5B5C2), inkFaint: Color(0xFF6F818F), accent: Color(0xFF4CB8F0), accentInk: Color(0xFF0D0D0D), line: Color(0x24E6F4FF)),
  'art-deco': StyleLabPalette(bg: Color(0xFF08120F), bg2: Color(0xFF0D1A16), surface: Color(0xFF0B1713), surface2: Color(0xFF112420), ink: Color(0xFFF2EAD9), inkSoft: Color(0xFFC3B9A7), inkFaint: Color(0xFF918877), accent: Color(0xFFD8B34F), accentInk: Color(0xFF0A1512), line: Color(0x7AD8B34F)),
  'victorian': StyleLabPalette(bg: Color(0xFF1A1713), bg2: Color(0xFF26231E), surface: Color(0xFF221D18), surface2: Color(0xFF322D26), ink: Color(0xFFE9DFCC), inkSoft: Color(0xFFABA394), inkFaint: Color(0xFF777166), accent: Color(0xFF8D3547), accentInk: Color(0xFFFFFFFF), line: Color(0x24E9DFCC)),
  'surrealism': StyleLabPalette(bg: Color(0xFF15130F), bg2: Color(0xFF22201B), surface: Color(0xFF1E1B16), surface2: Color(0xFF2E2B26), ink: Color(0xFFECE7DE), inkSoft: Color(0xFFACA7A0), inkFaint: Color(0xFF76726C), accent: Color(0xFFF07A52), accentInk: Color(0xFF0D0D0D), line: Color(0x24ECE7DE)),
  'ethereal': StyleLabPalette(bg: Color(0xFF1A1720), bg2: Color(0xFF27232D), surface: Color(0xFF27232D), surface2: Color(0xFF37333D), ink: Color(0xFFECE7F2), inkSoft: Color(0xFFADA9B3), inkFaint: Color(0xFF78757F), accent: Color(0xFF9D8AE0), accentInk: Color(0xFF0D0D0D), line: Color(0x24ECE7F2)),
  'bohemian': StyleLabPalette(bg: Color(0xFF1C1712), bg2: Color(0xFF29231E), surface: Color(0xFF26201A), surface2: Color(0xFF363029), ink: Color(0xFFF0E6D5), inkSoft: Color(0xFFB0A89B), inkFaint: Color(0xFF7B746A), accent: Color(0xFFD0704A), accentInk: Color(0xFF0D0D0D), line: Color(0x24F0E6D5)),
  'scrapbook': StyleLabPalette(bg: Color(0xFF1A1F26), bg2: Color(0xFF272B31), surface: Color(0xFF232A33), surface2: Color(0xFF343A41), ink: Color(0xFFF2ECE0), inkSoft: Color(0xFFB1AFA8), inkFaint: Color(0xFF7B7B7A), accent: Color(0xFFE0574A), accentInk: Color(0xFF0D0D0D), line: Color(0x24F2ECE0)),
  'conceptual-sketch': StyleLabPalette(bg: Color(0xFF15161A), bg2: Color(0xFF222327), surface: Color(0xFF1D1F24), surface2: Color(0xFF2D2F34), ink: Color(0xFFE9EAEE), inkSoft: Color(0xFFA9AAAE), inkFaint: Color(0xFF747579), accent: Color(0xFF7AA7F0), accentInk: Color(0xFF0D0D0D), line: Color(0x24E9EAEE)),
  'dark-academia': StyleLabPalette(bg: Color(0xFF1B1714), bg2: Color(0xFF241F1A), surface: Color(0xFF262019), surface2: Color(0xFF2F2820), ink: Color(0xFFE8DFCE), inkSoft: Color(0xFFB8AC97), inkFaint: Color(0xFF8A7F6D), accent: Color(0xFFB0863F), accentInk: Color(0xFF0D0D0D), line: Color(0x52B0863F)),
  'skeuomorphism': StyleLabPalette(bg: Color(0xFF2A241D), bg2: Color(0xFF363028), surface: Color(0xFF3A3226), surface2: Color(0xFF494134), ink: Color(0xFFF0E8DA), inkSoft: Color(0xFFB5ADA1), inkFaint: Color(0xFF837C72), accent: Color(0xFF3F8A68), accentInk: Color(0xFF0D0D0D), line: Color(0x24F0E8DA)),
  'bauhaus': StyleLabPalette(bg: Color(0xFF16161A), bg2: Color(0xFF232326), surface: Color(0xFF1F1F24), surface2: Color(0xFF302F33), ink: Color(0xFFF4EDE1), inkSoft: Color(0xFFB1ACA5), inkFaint: Color(0xFF7A7774), accent: Color(0xFFE84747), accentInk: Color(0xFF0D0D0D), line: Color(0x24F4EDE1)),
  'constructivism': StyleLabPalette(bg: Color(0xFF11100F), bg2: Color(0xFF1E1D1C), surface: Color(0xFF1A1817), surface2: Color(0xFF2B2927), ink: Color(0xFFF0EAE0), inkSoft: Color(0xFFADA9A1), inkFaint: Color(0xFF75726D), accent: Color(0xFFCB2F38), accentInk: Color(0xFFFFFFFF), line: Color(0x24F0EAE0)),
  'kinetic-type': StyleLabPalette(bg: Color(0xFF0E0E10), bg2: Color(0xFF1C1C1D), surface: Color(0xFF1B1B1F), surface2: Color(0xFF2C2C2F), ink: Color(0xFFF4F2EC), inkSoft: Color(0xFFAFAEAA), inkFaint: Color(0xFF757573), accent: Color(0xFFE8FF47), accentInk: Color(0xFF0D0D0D), line: Color(0x24F4F2EC)),
  'organic-bio': StyleLabPalette(bg: Color(0xFF171C16), bg2: Color(0xFF242923), surface: Color(0xFF212720), surface2: Color(0xFF313730), ink: Color(0xFFEEF1E7), inkSoft: Color(0xFFAEB1A8), inkFaint: Color(0xFF787C74), accent: Color(0xFF8FBF7D), accentInk: Color(0xFF0D0D0D), line: Color(0x24EEF1E7)),
  'ai-native-mesh': StyleLabPalette(bg: Color(0xFF0B0C10), bg2: Color(0xFF191A1E), surface: Color(0xFF14161D), surface2: Color(0xFF26282F), ink: Color(0xFFF2F4F8), inkSoft: Color(0xFFADAEB2), inkFaint: Color(0xFF737478), accent: Color(0xFF7C8CFF), accentInk: Color(0xFF0B0C10), line: Color(0x24F2F4F8)),
  'scandinavian-dark': StyleLabPalette(bg: Color(0xFF171A19), bg2: Color(0xFF242625), surface: Color(0xFF1F2422), surface2: Color(0xFF2F3431), ink: Color(0xFFE9E7E0), inkSoft: Color(0xFFAAAAA4), inkFaint: Color(0xFF767673), accent: Color(0xFFB9C6A9), accentInk: Color(0xFF0D0D0D), line: Color(0x24E9E7E0)),
  'grand-tourer': StyleLabPalette(bg: Color(0xFF14180F), bg2: Color(0xFF21241B), surface: Color(0xFF1D2318), surface2: Color(0xFF2E3328), ink: Color(0xFFEFE7DA), inkSoft: Color(0xFFADA99D), inkFaint: Color(0xFF77756A), accent: Color(0xFFB7C8A8), accentInk: Color(0xFF0D0D0D), line: Color(0x24EFE7DA)),
  'grand-tourer-oxblood': StyleLabPalette(bg: Color(0xFF1A1214), bg2: Color(0xFF271F20), surface: Color(0xFF241A1C), surface2: Color(0xFF342B2B), ink: Color(0xFFF1E9DD), inkSoft: Color(0xFFB1A9A1), inkFaint: Color(0xFF7B736E), accent: Color(0xFFD3A3AB), accentInk: Color(0xFF0D0D0D), line: Color(0x24F1E9DD)),
  'grand-tourer-midnight': StyleLabPalette(bg: Color(0xFF101520), bg2: Color(0xFF1D222B), surface: Color(0xFF171D29), surface2: Color(0xFF282D37), ink: Color(0xFFEAE6DC), inkSoft: Color(0xFFA9A7A4), inkFaint: Color(0xFF727375), accent: Color(0xFF9DB2CC), accentInk: Color(0xFF0D0D0D), line: Color(0x24EAE6DC)),
  'utility': StyleLabPalette(bg: Color(0xFF000000), bg2: Color(0xFF181818), surface: Color(0xFF1F1F1F), surface2: Color(0xFF272727), ink: Color(0xFFFFFFFF), inkSoft: Color(0xFF9B9B9B), inkFaint: Color(0xFF6E6E6E), accent: Color(0xFF7AA2FF), accentInk: Color(0xFF000000), line: Color(0x1FFFFFFF)),
  'terminal-ui': StyleLabPalette(bg: Color(0xFF050705), bg2: Color(0xFF080B08), surface: Color(0xFF0B0F0B), surface2: Color(0xFF101510), ink: Color(0xFFE6F1E2), inkSoft: Color(0xFFA8BDA2), inkFaint: Color(0xFF78896F), accent: Color(0xFF6FF09C), accentInk: Color(0xFF03150A), line: Color(0x2EE6F1E2)),
  'telemetry-grid': StyleLabPalette(bg: Color(0xFF0A0F12), bg2: Color(0xFF0E1417), surface: Color(0xFF101820), surface2: Color(0xFF162028), ink: Color(0xFFE6EEF2), inkSoft: Color(0xFFA3B3BB), inkFaint: Color(0xFF6E8089), accent: Color(0xFF3EC6CD), accentInk: Color(0xFF04191B), line: Color(0x29E6EEF2)),
  'trading-desk': StyleLabPalette(bg: Color(0xFF05070A), bg2: Color(0xFF080D12), surface: Color(0xFF0C131A), surface2: Color(0xFF131C26), ink: Color(0xFFF2F7F9), inkSoft: Color(0xFFA8BCC7), inkFaint: Color(0xFF74899A), accent: Color(0xFFFFBD6B), accentInk: Color(0xFF1A1104), line: Color(0x29F2F7F9)),
  'executive-kpi': StyleLabPalette(bg: Color(0xFF121310), bg2: Color(0xFF171913), surface: Color(0xFF1A1C16), surface2: Color(0xFF21251D), ink: Color(0xFFEEEADF), inkSoft: Color(0xFFB3B0A2), inkFaint: Color(0xFF7E7C70), accent: Color(0xFF9DBF8F), accentInk: Color(0xFF101A0E), line: Color(0x29EEEADF)),
  'log-stream': StyleLabPalette(bg: Color(0xFF06070B), bg2: Color(0xFF0A0C12), surface: Color(0xFF0E1119), surface2: Color(0xFF141926), ink: Color(0xFFF0F1F7), inkSoft: Color(0xFFABB0C4), inkFaint: Color(0xFF7C8399), accent: Color(0xFFCCB9FF), accentInk: Color(0xFF120D1E), line: Color(0x29F0F1F7)),
  'lab-instrument': StyleLabPalette(bg: Color(0xFF0B0F11), bg2: Color(0xFF0F1517), surface: Color(0xFF121A1D), surface2: Color(0xFF182326), ink: Color(0xFFE5EEF0), inkSoft: Color(0xFFA1B3B9), inkFaint: Color(0xFF6C8086), accent: Color(0xFF63BDE0), accentInk: Color(0xFF06171F), line: Color(0x29E5EEF0)),
  'atlas-console': StyleLabPalette(bg: Color(0xFF04090F), bg2: Color(0xFF070E17), surface: Color(0xFF0A1420), surface2: Color(0xFF101D2C), ink: Color(0xFFF2F6FB), inkSoft: Color(0xFFB6C5D6), inkFaint: Color(0xFF8595A8), accent: Color(0xFFFFCF7A), accentInk: Color(0xFF071019), line: Color(0x2EF2F6FB)),
  'experiment-split': StyleLabPalette(bg: Color(0xFF0C0C14), bg2: Color(0xFF121220), surface: Color(0xFF161627), surface2: Color(0xFF1D1D31), ink: Color(0xFFECEBFF), inkSoft: Color(0xFFA9A8C6), inkFaint: Color(0xFF787890), accent: Color(0xFF8F86FF), accentInk: Color(0xFF0A0918), line: Color(0x24ECEBFF)),
  'ledger-meter': StyleLabPalette(bg: Color(0xFF12110D), bg2: Color(0xFF181712), surface: Color(0xFF1D1B15), surface2: Color(0xFF24221A), ink: Color(0xFFF1EBDC), inkSoft: Color(0xFFBDB29B), inkFaint: Color(0xFF8D8571), accent: Color(0xFF8FB3DD), accentInk: Color(0xFF0B1119), line: Color(0x29F1EBDC)),
  'vitals-triage': StyleLabPalette(bg: Color(0xFF0A1413), bg2: Color(0xFF0F1C1A), surface: Color(0xFF132220), surface2: Color(0xFF1A2C29), ink: Color(0xFFE9F4F1), inkSoft: Color(0xFFA3BFBA), inkFaint: Color(0xFF79948F), accent: Color(0xFFFF8A72), accentInk: Color(0xFF250A05), line: Color(0x26E9F4F1)),
  'fleet-telemetry': StyleLabPalette(bg: Color(0xFF0D1116), bg2: Color(0xFF121820), surface: Color(0xFF161E26), surface2: Color(0xFF1E2731), ink: Color(0xFFE9EEF3), inkSoft: Color(0xFFA9B6C2), inkFaint: Color(0xFF7D8B97), accent: Color(0xFFF07FB4), accentInk: Color(0xFF20050F), line: Color(0x29E9EEF3)),
  'blueprint-drawing': StyleLabPalette(bg: Color(0xFF04101A), bg2: Color(0xFF061727), surface: Color(0xFF082034), surface2: Color(0xFF0B2A41), ink: Color(0xFFE8F2FA), inkSoft: Color(0xFFB3CCDD), inkFaint: Color(0xFF7B9CB2), accent: Color(0xFFB0EAFF), accentInk: Color(0xFF03161F), line: Color(0x2EE8F2FA)),
  'machined-metal-panel': StyleLabPalette(bg: Color(0xFF1A1D1F), bg2: Color(0xFF202426), surface: Color(0xFF24282B), surface2: Color(0xFF2B3033), ink: Color(0xFFE6E9EA), inkSoft: Color(0xFFAEB6BA), inkFaint: Color(0xFF7A8286), accent: Color(0xFFE59244), accentInk: Color(0xFF1A1D1F), line: Color(0x2EE6E9EA)),
  'safety-signage': StyleLabPalette(bg: Color(0xFF090906), bg2: Color(0xFF0F0F0B), surface: Color(0xFF15150E), surface2: Color(0xFF1D1D15), ink: Color(0xFFFBF8EC), inkSoft: Color(0xFFCDC9B2), inkFaint: Color(0xFF918E79), accent: Color(0xFFFFF08A), accentInk: Color(0xFF0F0F0A), line: Color(0x38FBF8EC)),
  'mes-production-line': StyleLabPalette(bg: Color(0xFF101614), bg2: Color(0xFF141B18), surface: Color(0xFF18201C), surface2: Color(0xFF1E2723), ink: Color(0xFFE3ECE6), inkSoft: Color(0xFFA5B4AB), inkFaint: Color(0xFF78867E), accent: Color(0xFF35C98B), accentInk: Color(0xFF06110C), line: Color(0x29E3ECE6)),
  'energy-grid': StyleLabPalette(bg: Color(0xFF04080D), bg2: Color(0xFF081019), surface: Color(0xFF0B1620), surface2: Color(0xFF102230), ink: Color(0xFFEDF5F7), inkSoft: Color(0xFFB0C1C8), inkFaint: Color(0xFF7B8F98), accent: Color(0xFFD2FF85), accentInk: Color(0xFF080D01), line: Color(0x29EDF5F7)),
  'calibration-lab': StyleLabPalette(bg: Color(0xFF0C1414), bg2: Color(0xFF111B1B), surface: Color(0xFF142020), surface2: Color(0xFF1A2828), ink: Color(0xFFE6EFEE), inkSoft: Color(0xFFA3B6B4), inkFaint: Color(0xFF6F8482), accent: Color(0xFF3FD7CB), accentInk: Color(0xFF02201D), line: Color(0x29E6EFEE)),
  'warehouse-flow': StyleLabPalette(bg: Color(0xFF14130F), bg2: Color(0xFF1C1A14), surface: Color(0xFF211F18), surface2: Color(0xFF2A271D), ink: Color(0xFFF2EFE4), inkSoft: Color(0xFFADA695), inkFaint: Color(0xFF7D7768), accent: Color(0xFFFFC728), accentInk: Color(0xFF1A1608), line: Color(0x29F2EFE4)),
  'maintenance-cmms': StyleLabPalette(bg: Color(0xFF060708), bg2: Color(0xFF0A0C0D), surface: Color(0xFF0E1112), surface2: Color(0xFF161A1C), ink: Color(0xFFF7F4EE), inkSoft: Color(0xFFB6B4AE), inkFaint: Color(0xFF868784), accent: Color(0xFFFFA066), accentInk: Color(0xFF170B03), line: Color(0x2EF7F4EE)),
  'construction-site': StyleLabPalette(bg: Color(0xFF14120E), bg2: Color(0xFF1C1914), surface: Color(0xFF211D17), surface2: Color(0xFF2A251D), ink: Color(0xFFF0E9DB), inkSoft: Color(0xFFB1A795), inkFaint: Color(0xFF82796A), accent: Color(0xFFDF6B4A), accentInk: Color(0xFF130A06), line: Color(0x2EF0E9DB)),
  'cockpit-avionics': StyleLabPalette(bg: Color(0xFF02040A), bg2: Color(0xFF05080F), surface: Color(0xFF080D16), surface2: Color(0xFF0D1420), ink: Color(0xFFF4FBFF), inkSoft: Color(0xFFB0C4D2), inkFaint: Color(0xFF7E93A3), accent: Color(0xFF7FF0FF), accentInk: Color(0xFF021A22), line: Color(0x33F4FBFF)),
  'nordic-folk': StyleLabPalette(bg: Color(0xFF141A17), bg2: Color(0xFF1A221E), surface: Color(0xFF1F2823), surface2: Color(0xFF27332C), ink: Color(0xFFECE5D5), inkSoft: Color(0xFFB4BFAE), inkFaint: Color(0xFF8A9686), accent: Color(0xFFE07A66), accentInk: Color(0xFF141A17), line: Color(0x29ECE5D5)),
  'japanese-ma': StyleLabPalette(bg: Color(0xFF0F1113), bg2: Color(0xFF141719), surface: Color(0xFF171A1D), surface2: Color(0xFF1E2225), ink: Color(0xFFECE9E2), inkSoft: Color(0xFFA8ADAF), inkFaint: Color(0xFF7D8286), accent: Color(0xFFE4674F), accentInk: Color(0xFF12100F), line: Color(0x26ECE9E2)),
  'levant-calligraphy': StyleLabPalette(bg: Color(0xFF101426), bg2: Color(0xFF161B30), surface: Color(0xFF1A2038), surface2: Color(0xFF222A45), ink: Color(0xFFECE5D3), inkSoft: Color(0xFFB3B6C4), inkFaint: Color(0xFF868CA0), accent: Color(0xFFD8B269), accentInk: Color(0xFF141422), line: Color(0x29ECE5D3)),
  'andalusian-azulejo': StyleLabPalette(bg: Color(0xFF0B1524), bg2: Color(0xFF101C2E), surface: Color(0xFF142237), surface2: Color(0xFF1B2C45), ink: Color(0xFFE9F0F8), inkSoft: Color(0xFFA9B7C8), inkFaint: Color(0xFF7D8EA1), accent: Color(0xFF5B93F0), accentInk: Color(0xFF081120), line: Color(0x29E9F0F8)),
  'slavic-late-brutalist': StyleLabPalette(bg: Color(0xFF1A1B1C), bg2: Color(0xFF202224), surface: Color(0xFF24262A), surface2: Color(0xFF2F3236), ink: Color(0xFFE8E6E1), inkSoft: Color(0xFFADAEAD), inkFaint: Color(0xFF83858A), accent: Color(0xFFD26234), accentInk: Color(0xFF141414), line: Color(0x38E8E6E1)),
  'west-african-pattern': StyleLabPalette(bg: Color(0xFF0A0705), bg2: Color(0xFF0E0A07), surface: Color(0xFF14100C), surface2: Color(0xFF1C1711), ink: Color(0xFFFBF2E2), inkSoft: Color(0xFFCBBBA1), inkFaint: Color(0xFF9A8B72), accent: Color(0xFFF2B64A), accentInk: Color(0xFF1D1204), line: Color(0x33FBF2E2)),
  'andean-textile': StyleLabPalette(bg: Color(0xFF171319), bg2: Color(0xFF1C1820), surface: Color(0xFF211C26), surface2: Color(0xFF2A2430), ink: Color(0xFFEFE8F2), inkSoft: Color(0xFFB6ABBF), inkFaint: Color(0xFF82768D), accent: Color(0xFFE06A92), accentInk: Color(0xFF24101A), line: Color(0x29EFE8F2)),
  'indian-block-print': StyleLabPalette(bg: Color(0xFF131519), bg2: Color(0xFF181B20), surface: Color(0xFF1C2026), surface2: Color(0xFF24282F), ink: Color(0xFFECEEE6), inkSoft: Color(0xFFAEB2B8), inkFaint: Color(0xFF7B7F88), accent: Color(0xFF7F97E0), accentInk: Color(0xFF0F1424), line: Color(0x29ECEEE6)),
  'persian-miniature': StyleLabPalette(bg: Color(0xFF070A15), bg2: Color(0xFF0A0F1E), surface: Color(0xFF0D1324), surface2: Color(0xFF141B30), ink: Color(0xFFF6EFE2), inkSoft: Color(0xFFC2B6A0), inkFaint: Color(0xFF8F8571), accent: Color(0xFFE6C169), accentInk: Color(0xFF1B1406), line: Color(0x2EF6EFE2)),
  'aegean-island': StyleLabPalette(bg: Color(0xFF0C1418), bg2: Color(0xFF101A1F), surface: Color(0xFF131F25), surface2: Color(0xFF1A282F), ink: Color(0xFFE9F2F4), inkSoft: Color(0xFFA6B6BC), inkFaint: Color(0xFF71848B), accent: Color(0xFF4FB8D4), accentInk: Color(0xFF04181F), line: Color(0x29E9F2F4)),
  'biophilic-botanical': StyleLabPalette(bg: Color(0xFF101A12), bg2: Color(0xFF16221A), surface: Color(0xFF1B2A1F), surface2: Color(0xFF223328), ink: Color(0xFFE6EFE2), inkSoft: Color(0xFFA9BCA6), inkFaint: Color(0xFF7D9079), accent: Color(0xFF7FBF6A), accentInk: Color(0xFF0E1A10), line: Color(0x29E6EFE2)),
  'weather-atmosphere': StyleLabPalette(bg: Color(0xFF0E141B), bg2: Color(0xFF131B24), surface: Color(0xFF18222D), surface2: Color(0xFF1E2A36), ink: Color(0xFFE6EEF6), inkSoft: Color(0xFFA8B7C6), inkFaint: Color(0xFF7C8B9A), accent: Color(0xFF6FB3E6), accentInk: Color(0xFF08131C), line: Color(0x29E6EEF6)),
  'topographic-terrain': StyleLabPalette(bg: Color(0xFF17130E), bg2: Color(0xFF1D1811), surface: Color(0xFF241E16), surface2: Color(0xFF2B2419), ink: Color(0xFFEFE8DA), inkSoft: Color(0xFFBCB09C), inkFaint: Color(0xFF8C8271), accent: Color(0xFFE08A4E), accentInk: Color(0xFF1A1209), line: Color(0x29EFE8DA)),
  'ocean-current': StyleLabPalette(bg: Color(0xFF01070C), bg2: Color(0xFF041019), surface: Color(0xFF061723), surface2: Color(0xFF0A2130), ink: Color(0xFFF2FCFF), inkSoft: Color(0xFFB9D9E0), inkFaint: Color(0xFF83AAB4), accent: Color(0xFF8AFFE8), accentInk: Color(0xFF02100C), line: Color(0x38F2FCFF)),
  'seasonal-shift': StyleLabPalette(bg: Color(0xFF1A1310), bg2: Color(0xFF211813), surface: Color(0xFF271D17), surface2: Color(0xFF2F231B), ink: Color(0xFFF0E6D8), inkSoft: Color(0xFFC0AF9C), inkFaint: Color(0xFF8F8172), accent: Color(0xFFE88F4A), accentInk: Color(0xFF1B1108), line: Color(0x29F0E6D8)),
  'forest-bark': StyleLabPalette(bg: Color(0xFF0A0D08), bg2: Color(0xFF0D110A), surface: Color(0xFF131711), surface2: Color(0xFF1B2117), ink: Color(0xFFF1F4E7), inkSoft: Color(0xFFBCC7AE), inkFaint: Color(0xFF8D9A80), accent: Color(0xFFE9BD7F), accentInk: Color(0xFF171004), line: Color(0x38F1F4E7)),
  'desert-sand': StyleLabPalette(bg: Color(0xFF191510), bg2: Color(0xFF211B14), surface: Color(0xFF251F17), surface2: Color(0xFF2F271D), ink: Color(0xFFF4ECDC), inkSoft: Color(0xFFC0B39C), inkFaint: Color(0xFF8F8271), accent: Color(0xFFB39AE0), accentInk: Color(0xFF1D1230), line: Color(0x29F4ECDC)),
  'polar-ice': StyleLabPalette(bg: Color(0xFF071119), bg2: Color(0xFF0B1A24), surface: Color(0xFF0E2130), surface2: Color(0xFF13293A), ink: Color(0xFFE8F4FA), inkSoft: Color(0xFFA6C2D0), inkFaint: Color(0xFF74909E), accent: Color(0xFF4ECDE8), accentInk: Color(0xFF04212A), line: Color(0x29E8F4FA)),
  'volcanic-mineral': StyleLabPalette(bg: Color(0xFF040403), bg2: Color(0xFF0B0A08), surface: Color(0xFF100E0B), surface2: Color(0xFF191512), ink: Color(0xFFF8F3EA), inkSoft: Color(0xFFB9B0A1), inkFaint: Color(0xFF8B8276), accent: Color(0xFFFF8A4D), accentInk: Color(0xFF140703), line: Color(0x38F8F3EA)),
  'coral-reef': StyleLabPalette(bg: Color(0xFF021015), bg2: Color(0xFF051B21), surface: Color(0xFF07222A), surface2: Color(0xFF0B2C34), ink: Color(0xFFF0FBF9), inkSoft: Color(0xFFB6D8D6), inkFaint: Color(0xFF82A9A7), accent: Color(0xFFFFA88F), accentInk: Color(0xFF180904), line: Color(0x38F0FBF9)),
  'literary-hardcover': StyleLabPalette(bg: Color(0xFF191813), bg2: Color(0xFF211F18), surface: Color(0xFF1E1D16), surface2: Color(0xFF2A2820), ink: Color(0xFFF2EEE2), inkSoft: Color(0xFFB3ADA0), inkFaint: Color(0xFF7E786C), accent: Color(0xFFA8C3B2), accentInk: Color(0xFF10130F), line: Color(0x24F2EEE2)),
  'broadsheet-daily': StyleLabPalette(bg: Color(0xFF121316), bg2: Color(0xFF1B1C20), surface: Color(0xFF17181C), surface2: Color(0xFF232428), ink: Color(0xFFF0EEE8), inkSoft: Color(0xFFB0ADA6), inkFaint: Color(0xFF7D7A74), accent: Color(0xFFE0665A), accentInk: Color(0xFF14100F), line: Color(0x29F0EEE8)),
  'magazine-feature': StyleLabPalette(bg: Color(0xFF161113), bg2: Color(0xFF1F171A), surface: Color(0xFF1B1417), surface2: Color(0xFF282022), ink: Color(0xFFF4ECE7), inkSoft: Color(0xFFB5A9A6), inkFaint: Color(0xFF82746F), accent: Color(0xFFE08AA6), accentInk: Color(0xFF180D11), line: Color(0x24F4ECE7)),
  'academic-paper': StyleLabPalette(bg: Color(0xFF101216), bg2: Color(0xFF171A1F), surface: Color(0xFF14171C), surface2: Color(0xFF1F232A), ink: Color(0xFFEEF0F2), inkSoft: Color(0xFFA9AEB5), inkFaint: Color(0xFF757A82), accent: Color(0xFF86AAD6), accentInk: Color(0xFF0D1015), line: Color(0x24EEF0F2)),
  'poetry-chapbook': StyleLabPalette(bg: Color(0xFF15141A), bg2: Color(0xFF1D1C23), surface: Color(0xFF19181F), surface2: Color(0xFF25242C), ink: Color(0xFFF1EEE9), inkSoft: Color(0xFFB0ABA4), inkFaint: Color(0xFF7C7770), accent: Color(0xFFB0A2D6), accentInk: Color(0xFF14121A), line: Color(0x24F1EEE9)),
  'product-catalog': StyleLabPalette(bg: Color(0xFF121512), bg2: Color(0xFF171B17), surface: Color(0xFF1B201B), surface2: Color(0xFF232A23), ink: Color(0xFFE8E6DD), inkSoft: Color(0xFFB0B5A9), inkFaint: Color(0xFF868C80), accent: Color(0xFF5FB39C), accentInk: Color(0xFF0D1412), line: Color(0x29E8E6DD)),
  'museum-thesis': StyleLabPalette(bg: Color(0xFF14161A), bg2: Color(0xFF191C21), surface: Color(0xFF1E2228), surface2: Color(0xFF262B33), ink: Color(0xFFE9E7E0), inkSoft: Color(0xFFB6B9BF), inkFaint: Color(0xFF8B9099), accent: Color(0xFF9FB0C9), accentInk: Color(0xFF14161A), line: Color(0x29E9E7E0)),
  'type-experiment': StyleLabPalette(bg: Color(0xFF0B0B0D), bg2: Color(0xFF101013), surface: Color(0xFF141417), surface2: Color(0xFF1B1B1F), ink: Color(0xFFEFEFF1), inkSoft: Color(0xFFA9A9AE), inkFaint: Color(0xFF7E7E84), accent: Color(0xFF7B6CFF), accentInk: Color(0xFF0B0B0D), line: Color(0x29EFEFF1)),
  'encyclopedia': StyleLabPalette(bg: Color(0xFF131211), bg2: Color(0xFF181715), surface: Color(0xFF1D1B19), surface2: Color(0xFF262321), ink: Color(0xFFECE7DC), inkSoft: Color(0xFFB5AFA4), inkFaint: Color(0xFF8A857C), accent: Color(0xFFD684AE), accentInk: Color(0xFF17100F), line: Color(0x29ECE7DC)),
  'punk-fanzine': StyleLabPalette(bg: Color(0xFF0F0F0F), bg2: Color(0xFF151514), surface: Color(0xFF1A1A19), surface2: Color(0xFF242423), ink: Color(0xFFECECEA), inkSoft: Color(0xFFADADAB), inkFaint: Color(0xFF838381), accent: Color(0xFFF0434F), accentInk: Color(0xFF100B0B), line: Color(0x38ECECEA)),
  'kinetic-marquee': StyleLabPalette(bg: Color(0xFF0D0F18), bg2: Color(0xFF121522), surface: Color(0xFF161A2A), surface2: Color(0xFF1E2338), ink: Color(0xFFEEF0F6), inkSoft: Color(0xFFA9AFC4), inkFaint: Color(0xFF78809A), accent: Color(0xFF7F88FF), accentInk: Color(0xFF0A0B18), line: Color(0x29EEF0F6)),
  'optical-illusion': StyleLabPalette(bg: Color(0xFF0A0A0A), bg2: Color(0xFF121212), surface: Color(0xFF171717), surface2: Color(0xFF1F1F1F), ink: Color(0xFFF7F7F7), inkSoft: Color(0xFFB0B0B0), inkFaint: Color(0xFF7D7D7D), accent: Color(0xFFFF5D7E), accentInk: Color(0xFF20040A), line: Color(0x24F7F7F7)),
  'generative-grid': StyleLabPalette(bg: Color(0xFF0E1215), bg2: Color(0xFF131A1E), surface: Color(0xFF172025), surface2: Color(0xFF1F2A30), ink: Color(0xFFE8F0F3), inkSoft: Color(0xFFA7B6BD), inkFaint: Color(0xFF74858D), accent: Color(0xFF3DDCA0), accentInk: Color(0xFF04170F), line: Color(0x29E8F0F3)),
  'depth-parallax': StyleLabPalette(bg: Color(0xFF05161A), bg2: Color(0xFF082025), surface: Color(0xFF0A282E), surface2: Color(0xFF0F333A), ink: Color(0xFFEEF7F8), inkSoft: Color(0xFFAEBFC1), inkFaint: Color(0xFF7D9092), accent: Color(0xFF7AF0FF), accentInk: Color(0xFF042022), line: Color(0x2EEEF7F8)),
};

final Map<String, StyleLabTokens> styleLabDark = <String, StyleLabTokens>{
  for (final entry in styleLabLight.entries)
    entry.key: entry.value.copyWith(palette: styleLabDarkPalette[entry.key] ?? entry.value.palette),
};
