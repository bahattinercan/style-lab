// style-lab Flutter çıktısının sözleşme testleri.
// Üretilen dosya: lib/style_lab_tokens.dart (node kit/export/flutter.mjs --verify üretir).
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:style_lab_fixture/style_lab_tokens.dart';

void main() {
  group('katalog bütünlüğü', () {
    test('151 stilin açık ve koyu palet kapsamı aynı', () {
      expect(styleLabLight.length, 151);
      expect(styleLabDark.length, styleLabLight.length);
      expect(styleLabDarkPalette.length, styleLabLight.length);
      expect(styleLabDark.keys.toSet(), styleLabLight.keys.toSet());
      expect(styleLabDarkPalette.keys.toSet(), styleLabLight.keys.toSet());
    });

    test('her stil zorunlu alanları dolduruyor', () {
      for (final entry in styleLabLight.entries) {
        final t = entry.value;
        expect(t.slug, entry.key, reason: 'anahtar/slug uyuşmuyor');
        expect(t.spacing.length, 8, reason: '${t.slug}: boşluk ölçeği 8 adım olmalı');
        expect(t.typography.fontBody.isNotEmpty, isTrue, reason: '${t.slug}: fontBody boş');
        expect(t.typography.h1 > t.typography.body, isTrue, reason: '${t.slug}: h1 gövdeden büyük olmalı');
        expect(t.motion.enterDuration, greaterThan(0), reason: '${t.slug}: enter süresi');
        expect(t.motion.enterCurve, isNotNull);
        expect(t.radius, greaterThanOrEqualTo(0));
      }
    });

    test('koyu palet açıktan farklı', () {
      final light = styleLabLight['minimalism']!;
      final dark = styleLabDark['minimalism']!;
      expect(dark.bg, isNot(light.bg));
      expect(dark.ink, isNot(light.ink));
      // palet dışı alanlar koyu modda korunur
      expect(dark.typography.h1, light.typography.h1);
      expect(dark.motion.enterDuration, light.motion.enterDuration);
    });

    test('bilinmeyen slug hata verir', () {
      expect(() => styleLabTheme(slug: 'yok-boyle-stil'), throwsArgumentError);
    });
  });

  group('değerler kaynakla aynı', () {
    test('minimalism paleti tokens.json ile eşleşir', () {
      final t = styleLabLight['minimalism']!;
      expect(t.bg, const Color(0xFFFAFAF9));
      expect(t.ink, const Color(0xFF101112));
      expect(t.accent, const Color(0xFF2563EB));
      expect(t.line, const Color(0x1A101112));
      expect(t.radius, 8.0);
      expect(t.radiusLg, 12.0);
      expect(t.spacing, [4.0, 8.0, 12.0, 16.0, 24.0, 32.0, 48.0, 64.0]);
    });

    test('tipografi letterSpacing px = em × boyut', () {
      final t = styleLabLight['minimalism']!;
      expect(t.h1.fontSize, 56.0);
      expect(t.h1.letterSpacing, closeTo(-0.03 * 56.0, 1e-9));
      expect(t.label.letterSpacing, closeTo(0.14 * 11.0, 1e-9));
      expect(t.h1.fontWeight, FontWeight.w700);
    });

    test('hareket imzası normalize edilmiş değerleri taşır', () {
      final t = styleLabLight['telemetry-grid']!;
      expect(t.motion.fast, 110);
      expect(t.motion.base, 280);
      expect(t.motion.enterDuration, 280);
      expect(t.motion.enterOffsetY, 6.0);
      expect(t.motion.enterStagger, 0.02);
      expect(t.motion.hoverDuration, 110);
      expect(t.motion.hoverImageScale, 1.01);
      expect(t.motion.scrollTriggerPercent, 88.0);
      expect(t.motion.pinEnabled, isFalse);
    });

    test('gölge CSS değerinden BoxShadow üretir', () {
      final t = styleLabLight['minimalism']!;
      expect(t.shadow.length, 1);
      expect(t.shadow.first.blurRadius, 2.0);
      expect(t.shadow.first.offset, const Offset(0.0, 1.0));
    });

    test('kademeli eğri CSS steps(n, end) karşılığı', () {
      const curve = StyleLabSteps(4);
      expect(curve.transform(0.0), 0.0);
      expect(curve.transform(0.3), 0.25);
      expect(curve.transform(0.99), 0.75);
      expect(curve.transform(1.0), 1.0);
    });
  });

  group('tema köprüsü', () {
    testWidgets("styleLabTheme token'ları Material temasına bağlar", (tester) async {
      late StyleLabTokens tokens;
      await tester.pumpWidget(
        MaterialApp(
          theme: styleLabTheme(slug: 'terminal-ui'),
          home: Builder(
            builder: (context) {
              tokens = context.styleLab;
              return Scaffold(
                body: Text('stil', style: tokens.body),
              );
            },
          ),
        ),
      );

      final theme = Theme.of(tester.element(find.text('stil')));
      expect(theme.scaffoldBackgroundColor, tokens.bg);
      expect(theme.colorScheme.primary, tokens.accent);
      expect(theme.textTheme.bodyLarge?.fontSize, tokens.typography.body);
      expect(tokens.slug, 'terminal-ui');
    });

    testWidgets('koyu tema parlaklığı ve paleti değiştirir', (tester) async {
      late StyleLabTokens tokens;
      await tester.pumpWidget(
        MaterialApp(
          theme: styleLabTheme(slug: 'terminal-ui', brightness: Brightness.dark),
          home: Builder(
            builder: (context) {
              tokens = context.styleLab;
              return const Scaffold(body: SizedBox.shrink());
            },
          ),
        ),
      );
      final theme = Theme.of(tester.element(find.byType(SizedBox)));
      expect(theme.brightness, Brightness.dark);
      expect(tokens.bg, styleLabDarkPalette['terminal-ui']!.bg);
    });
  });
}
