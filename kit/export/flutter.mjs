#!/usr/bin/env node
/**
 * kit/export/flutter.mjs — katalog token'larını Flutter/Dart çıktısına çevirir.
 *
 * Neden: Flutter CSS değişkeni tüketemez. Bu emitter `styles/<nn>-<slug>/tokens.json` +
 * `kit/dist/motion.json`'dan tek bir Dart dosyası üretir:
 *   - `StyleLabTokens extends ThemeExtension` (palet, tipografi, radius, gölge, boşluk, hareket)
 *   - `styleLabLight` / `styleLabDark` haritaları (slug anahtarlı, 145 + 145)
 *   - `styleLabTheme(slug:)` → `ThemeData` köprüsü
 *   - eğriler: `Cubic` / `Curves.*` / üretilen `StyleLabSteps`
 *
 * Koyu mod yalnız paleti değiştirir (CSS bloğuyla aynı sözleşme); tipografi/şekil/hareket
 * aynı kalır — bu yüzden koyu harita yalnız 10 renk taşır.
 *
 * Kullanım:
 *   node kit/export/flutter.mjs            # yaz
 *   node kit/export/flutter.mjs --check    # güncel mi? değilse exit 1
 *   node kit/export/flutter.mjs --verify   # --check + dart analyze + flutter test (fixture)
 *   node kit/export/flutter.mjs --styles minimalism,terminal-ui
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseColor, parseEm, parseGradientStops, parsePx, parseShadows } from '../lib/tokens.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const STYLES_DIR = path.join(ROOT, 'styles');
const MOTION_JSON = path.join(ROOT, 'kit', 'dist', 'motion.json');
const OUT_DIR = path.join(ROOT, 'kit', 'dist', 'flutter');
const OUT_DART = path.join(OUT_DIR, 'style_lab_tokens.dart');
const OUT_FONTS = path.join(OUT_DIR, 'pubspec.fonts.yaml');
const OUT_README = path.join(OUT_DIR, 'README.md');
const FIXTURE = path.join(ROOT, 'kit', 'export', 'flutter', 'fixture');
const FIXTURE_DART = path.join(FIXTURE, 'lib', 'style_lab_tokens.dart');

const ARGV = process.argv.slice(2);
const CHECK = ARGV.includes('--check') || ARGV.includes('--verify');
const VERIFY = ARGV.includes('--verify');
const ONLY = (() => {
  const i = ARGV.indexOf('--styles');
  if (i < 0) return null;
  return new Set(
    (ARGV[i + 1] ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => (/^\d+$/.test(s) ? String(parseInt(s, 10)) : s)),
  );
})();

const errors = [];
const warnings = [];

/* ---------- yardımcılar ---------- */

const dartDouble = (n) => {
  if (n == null || !Number.isFinite(n)) return null;
  const s = String(Number(n.toFixed(4)));
  return s.includes('.') || s.includes('e') ? s : `${s}.0`;
};

function dartColor(hex, { allowAlpha = true } = {}) {
  const c = parseColor(hex);
  if (!c) return null;
  const a = Math.round(c.a * 255);
  const rgb = ((c.r & 0xff) << 16) | ((c.g & 0xff) << 8) | (c.b & 0xff);
  const argb = allowAlpha ? ((a & 0xff) * 0x1000000 + rgb) >>> 0 : rgb;
  return `Color(0x${argb.toString(16).toUpperCase().padStart(8, '0')})`;
}

/** "-0.03em" → -0.03; px'e çevrim font boyutuna göre yapılır (letterSpacing px ister) */
const emOf = (v) => parseEm(v) ?? 0;

/** Eğri → { ref, decl } ; decl null ise mevcut `Curves.*` kullanılır */
const curveCache = new Map();
function curveRef(curve, tag) {
  if (!curve) {
    errors.push(`${tag}: eğri yok`);
    return 'Curves.linear';
  }
  if (curve.kind === 'named') {
    const map = {
      linear: 'Curves.linear',
      ease: 'Curves.ease',
      'ease-in': 'Curves.easeIn',
      'ease-out': 'Curves.easeOut',
      'ease-in-out': 'Curves.easeInOut',
    };
    return map[curve.name] ?? 'Curves.linear';
  }
  const key = curve.css;
  if (curveCache.has(key)) return curveCache.get(key);

  let decl;
  let name;
  if (curve.kind === 'cubic') {
    name = `_curveCubic${curveCache.size + 1}`;
    decl = `Cubic(${curve.points.map((p) => dartDouble(p)).join(', ')})`;
  } else if (curve.kind === 'steps') {
    name = `_curveSteps${curveCache.size + 1}`;
    decl = `StyleLabSteps(${curve.steps}${curve.position === 'start' ? ', jumpStart: true' : ''})`;
  } else {
    errors.push(`${tag}: bilinmeyen eğri türü ${curve.kind}`);
    return 'Curves.linear';
  }
  curveCache.set(key, name);
  curveDecls.push([name, decl, key]);
  return name;
}
const curveDecls = [];

function styleDirs() {
  return fs
    .readdirSync(STYLES_DIR)
    .filter((d) => /^\d{2,3}-/.test(d) && fs.existsSync(path.join(STYLES_DIR, d, 'tokens.json')))
    .sort();
}

function readStyle(dir) {
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  return { dir, tokens, slug: tokens.slug };
}

/* ---------- tipografi ölçeği (eksikler formülle tamamlanır) ---------- */

function scaleOf(typography) {
  const raw = typography?.scale ?? {};
  const px = (v) => parsePx(v);
  const body = px(raw.body) ?? 16;
  const h2 = px(raw.h2) ?? body * 1.75;
  const h1 = px(raw.h1) ?? h2 * 1.6;
  const values = {
    label: px(raw.label) ?? 11,
    caption: px(raw.caption) ?? 12,
    small: px(raw.small) ?? Math.round(body * 0.875),
    body,
    h3: px(raw.h3) ?? Math.round(body * 1.25),
    h2,
    h1,
    h1Mobile: px(raw.h1Mobile) ?? Math.round(h1 * 0.62),
  };
  const derived = Object.entries(values)
    .filter(([k]) => px(raw[k]) == null)
    .map(([k]) => k);
  return { values, derived };
}

/* ---------- Dart üretimi ---------- */

function buildDart() {
  const motionDoc = JSON.parse(fs.readFileSync(MOTION_JSON, 'utf8'));
  const styles = styleDirs()
    .map(readStyle)
    .filter((s) => {
      if (!ONLY) return true;
      return ONLY.has(s.slug) || ONLY.has(String(parseInt(s.dir, 10)));
    });

  const lightEntries = [];
  const darkEntries = [];
  const fontWeights = new Map(); // family → Set(weight)
  const fontFallbacks = new Map(); // family → fallback list
  const derivedNotes = [];

  for (const { tokens, slug, dir } of styles) {
    const tag = slug;
    const p = tokens.palette ?? {};
    const pd = p.dark ?? {};
    const missingDark = ['bg', 'bg2', 'surface', 'surface2', 'ink', 'inkSoft', 'inkFaint', 'accent', 'accentInk', 'line'].filter(
      (k) => pd[k] == null,
    );
    if (missingDark.length) errors.push(`${tag}: palette.dark eksik → ${missingDark.join(', ')}`);

    const colorOr = (value, field) => {
      const direct = dartColor(value);
      if (direct) return direct;
      const stops = parseGradientStops(value);
      if (stops) {
        const first = dartColor(stops[0]);
        if (first) {
          warnings.push(`${tag}: palette.${field} gradient — ilk durağa düşürüldü (${stops[0]})`);
          return first;
        }
      }
      errors.push(`${tag}: palette.${field} ayrıştırılamadı (${JSON.stringify(value)})`);
      return 'Color(0xFF000000)';
    };

    const paletteLight = [
      ['bg', colorOr(p.bg, 'bg')],
      ['bg2', colorOr(p.bg2, 'bg2')],
      ['surface', colorOr(p.surface, 'surface')],
      ['surface2', colorOr(p.surface2, 'surface2')],
      ['ink', colorOr(p.ink, 'ink')],
      ['inkSoft', colorOr(p.inkSoft, 'inkSoft')],
      ['inkFaint', colorOr(p.inkFaint, 'inkFaint')],
      ['accent', colorOr(p.accent, 'accent')],
      ['accentInk', colorOr(p.accentInk, 'accentInk')],
      ['line', colorOr(p.line, 'line')],
    ];
    const paletteDark = [
      ['bg', colorOr(pd.bg, 'dark.bg')],
      ['bg2', colorOr(pd.bg2, 'dark.bg2')],
      ['surface', colorOr(pd.surface, 'dark.surface')],
      ['surface2', colorOr(pd.surface2, 'dark.surface2')],
      ['ink', colorOr(pd.ink, 'dark.ink')],
      ['inkSoft', colorOr(pd.inkSoft, 'dark.inkSoft')],
      ['inkFaint', colorOr(pd.inkFaint, 'dark.inkFaint')],
      ['accent', colorOr(pd.accent, 'dark.accent')],
      ['accentInk', colorOr(pd.accentInk, 'dark.accentInk')],
      ['line', colorOr(pd.line, 'dark.line')],
    ];

    const { values: sc, derived } = scaleOf(tokens.typography);
    if (derived.length) derivedNotes.push(`${tag}: ${derived.join(', ')}`);

    const typo = tokens.typography ?? {};
    const weights = typo.weights ?? {};
    const w = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? Math.round(n / 100) * 100 : 400;
    };
    const bodyW = w(weights.body ?? 400);
    const strongW = w(weights.strong ?? 600);
    const displayW = w(weights.display ?? 700);
    const lh = typo.lineHeight ?? {};
    const tr = typo.tracking ?? {};

    for (const fam of [typo.display, typo.body, typo.mono]) {
      if (!fam) continue;
      if (!fontWeights.has(fam)) fontWeights.set(fam, new Set());
      fontWeights.get(fam).add(bodyW).add(strongW).add(displayW);
    }
    if (Array.isArray(typo.fallback)) {
      for (const fam of [typo.display, typo.body, typo.mono]) {
        if (fam) fontFallbacks.set(fam, typo.fallback);
      }
    }

    const shape = tokens.shape ?? {};
    const elevation = tokens.elevation ?? {};
    const shadowsOf = (value, field) =>
      parseShadows(value).map((s) => {
        if (s.inset) {
          insetNotes.push(`${tag}: ${field} inset gölge (Flutter BoxShadow inset taşımaz)`);
          return null;
        }
        let color;
        if (s.colorRef) {
          // "--surface-2" → palette anahtarı "surface2"; harita paletten türetilir
          const cssToKey = (ref) =>
            ref
              .replace(/^--/, '')
              .replace(/-(\w)/g, (_, c) => c.toUpperCase());
          const key = cssToKey(s.colorRef);
          color = paletteLight.find(([k]) => k === key)?.[1] ?? null;
          if (!color) {
            errors.push(`${tag}: ${field} gölge rengi çözülemedi (${s.colorRef})`);
            color = 'Color(0xFF000000)';
          }
        } else if (s.color) {
          color = dartColor(
            s.color.a === 1
              ? `#${[s.color.r, s.color.g, s.color.b].map((n) => n.toString(16).padStart(2, '0')).join('')}`
              : `rgba(${s.color.r},${s.color.g},${s.color.b},${s.color.a})`,
          );
        }
        if (!color) {
          errors.push(`${tag}: ${field} gölge rengi ayrıştırılamadı`);
          color = 'Color(0xFF000000)';
        }
        return `BoxShadow(color: ${color}, offset: Offset(${dartDouble(s.dx)}, ${dartDouble(s.dy)}), blurRadius: ${dartDouble(s.blur)}, spreadRadius: ${dartDouble(s.spread)})`;
      });

    const shadowList = shadowsOf(elevation.shadow, 'shadow').filter(Boolean);
    const shadowHardList = shadowsOf(elevation.shadowHard, 'shadowHard').filter(Boolean);

    const spacingScale = (tokens.spacing?.scale ?? []).map((v) => parsePx(v) ?? 0);
    while (spacingScale.length < 8) spacingScale.push(spacingScale[spacingScale.length - 1] ?? 0);

    const motion = motionDoc.styles[slug];
    if (!motion) errors.push(`${tag}: kit/dist/motion.json içinde yok (node kit/normalize-motion.mjs)`);
    const m = motion ?? {};
    const seq = m.sequences ?? {};
    const enter = seq.enter ?? {};
    const scroll = seq.scroll ?? {};
    const hover = seq.hover ?? {};
    const pin = seq.pin ?? {};
    const ms = (v, fallback) => Math.round(v ?? fallback);

    const curveTop = curveRef(m.curve, `${tag}.motion.easing`);
    const curveEnter = enter.curve ? curveRef(enter.curve, `${tag}.enter`) : curveTop;

    const fields = [
      `slug: '${slug}'`,
      `num: '${tokens.num ?? dir.slice(0, 2)}'`,
      `name: ${dartString(tokens.name ?? slug)}`,
      `family: ${dartString(m.family ?? '')}`,
      `palette: StyleLabPalette(${paletteLight.map(([k, v]) => `${k}: ${v}`).join(', ')})`,
      `radius: ${dartDouble(parsePx(shape.radius) ?? 0)}`,
      `radiusLg: ${dartDouble(parsePx(shape.radiusLg) ?? parsePx(shape.radius) ?? 0)}`,
      `shadow: [${shadowList.join(', ')}]`,
      `shadowHard: [${shadowHardList.join(', ')}]`,
      `spacing: [${spacingScale.map((n) => dartDouble(n)).join(', ')}]`,
      `typography: StyleLabType(fontDisplay: ${dartString(typo.display ?? '')}, fontBody: ${dartString(typo.body ?? '')}, fontMono: ${dartString(typo.mono ?? '')}, ` +
        `label: ${dartDouble(sc.label)}, caption: ${dartDouble(sc.caption)}, small: ${dartDouble(sc.small)}, body: ${dartDouble(sc.body)}, h3: ${dartDouble(sc.h3)}, h2: ${dartDouble(sc.h2)}, h1: ${dartDouble(sc.h1)}, h1Mobile: ${dartDouble(sc.h1Mobile)}, ` +
        `bodyWeight: ${bodyW}, strongWeight: ${strongW}, displayWeight: ${displayW}, ` +
        `displayHeight: ${dartDouble(lh.display ?? 1.1)}, headingHeight: ${dartDouble(lh.heading ?? 1.2)}, bodyHeight: ${dartDouble(lh.body ?? 1.5)}, ` +
        `displayTracking: ${dartDouble(emOf(tr.display))}, headingTracking: ${dartDouble(emOf(tr.heading))}, bodyTracking: ${dartDouble(emOf(tr.body))}, labelTracking: ${dartDouble(emOf(tr.label))})`,
      `motion: StyleLabMotion(fast: ${ms(m.fastMs, 150)}, base: ${ms(m.baseMs, 250)}, slow: ${ms(m.slowMs, 400)}, curve: ${curveTop}, ` +
        `enterDuration: ${ms(enter.durationMs, 300)}, enterCurve: ${curveEnter}, enterOffsetY: ${dartDouble(enter.offsetYPx ?? 0)}, enterStagger: ${dartDouble(enter.stagger ?? 0)}, ` +
        `scrollDuration: ${ms(scroll.durationMs, 300)}, scrollOffsetY: ${dartDouble(scroll.offsetYPx ?? 0)}, scrollTriggerPercent: ${dartDouble(scroll.trigger?.topPercent ?? 85)}, scrollOnce: ${scroll.once === true}, ` +
        `hoverDuration: ${ms(hover.durationMs, 150)}, hoverImageScale: ${dartDouble(hover.imageScale ?? 1)}, pinEnabled: ${pin.enabled === true}, pinScrub: ${pin.scrub == null ? 'null' : dartDouble(pin.scrub)})`,
    ];

    lightEntries.push(`  '${slug}': StyleLabTokens(\n${fields.map((f) => `    ${f},`).join('\n')}\n  ),`);
    darkEntries.push(`  '${slug}': StyleLabPalette(${paletteDark.map(([k, v]) => `${k}: ${v}`).join(', ')}),`);
  }

  const header = `// GENERATED DOSYA — elle düzenlenmez.
// Kaynak: styles/*/tokens.json + kit/dist/motion.json
// Üretim: node kit/export/flutter.mjs
// Doğrulama: node kit/export/flutter.mjs --verify (dart analyze + flutter test)
//
// Kapsam: ${styles.length} stil (açık + koyu). Koyu mod yalnız paleti değiştirir.
// Eksik ölçek değerleri formülle tamamlanır (${derivedNotes.length} stil): h1 = h2×1.6,
// h3 = body×1.25, small = body×0.875, h1Mobile = h1×0.62.
// İç gölge (inset) Flutter BoxShadow'da yok; \`insetNotes\` alanında metin olarak durur.

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
/// \`TextStyle\` üretimi [StyleLabTokens] getter'larında yapılır; letterSpacing px'e çevrilir.
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

/// Kademeli (steps) eğrisi — CSS \`steps(n, end|start)\` karşılığı.
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

  /// Motion'ın azaltılmış karşılığı: süre 0, hedef anında değişir (CSS \`reduced\` sözleşmesi).
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

/// Stil adıyla tema üretir (koyu için \`brightness: Brightness.dark\`).
ThemeData styleLabTheme({required String slug, Brightness brightness = Brightness.light}) {
  final tokens = brightness == Brightness.dark ? styleLabDark[slug] : styleLabLight[slug];
  if (tokens == null) {
    throw ArgumentError('style-lab: bilinmeyen stil "$slug" (\${styleLabLight.length} stil var)');
  }
  return tokens.toThemeData(brightness: brightness);
}

extension StyleLabContext on BuildContext {
  /// \`Theme.of(context).extension<StyleLabTokens>()\` kısayolu.
  StyleLabTokens get styleLab => Theme.of(this).extension<StyleLabTokens>()!;
}
`;

  const curvesSection = curveDecls.length
    ? `\n// ---- eğriler (${curveDecls.length} farklı) ----\n${curveDecls.map(([name, decl, key]) => `// ${key}\nconst Curve ${name} = ${decl};`).join('\n')}\n`
    : '';

  const lightSection = `\n// ---- açık palet + tam token seti ----\nconst Map<String, StyleLabTokens> styleLabLight = <String, StyleLabTokens>{\n${lightEntries.join('\n')}\n};\n`;
  const darkSection = `\n// ---- koyu palet (yalnız 10 renk; gerisi açık setten gelir) ----\nconst Map<String, StyleLabPalette> styleLabDarkPalette = <String, StyleLabPalette>{\n${darkEntries.join('\n')}\n};\n\nfinal Map<String, StyleLabTokens> styleLabDark = <String, StyleLabTokens>{\n  for (final entry in styleLabLight.entries)\n    entry.key: entry.value.copyWith(palette: styleLabDarkPalette[entry.key] ?? entry.value.palette),\n};\n`;

  const insetSection = insetNotes.length
    ? `\n/// İç gölge (inset) notları — Flutter \`BoxShadow\` inset taşımaz; hedef kendisi kurar.\nconst List<String> styleLabInsetShadowNotes = <String>[\n${insetNotes.map((n) => `  ${dartString(n)},`).join('\n')}\n];\n`
    : '';

  return { dart: header + curvesSection + insetSection + lightSection + darkSection, styles, fontWeights, fontFallbacks };
}

function dartString(value) {
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\$/g, '\\$')}'`;
}

const insetNotes = [];

/* ---------- fonts + README ---------- */

/** kit/fonts/ttf/INDEX.json — node kit/fetch-fonts.mjs üretir; yoksa iskelet varsayılır */
function loadFontIndex() {
  const file = path.join(ROOT, 'kit', 'fonts', 'ttf', 'INDEX.json');
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function buildFontsYaml(fontWeights, fontIndex) {
  const lines = [
    '# GENERATED — node kit/export/flutter.mjs',
    '# pubspec.yaml içine: `flutter: fonts:` bölümü olarak ekleyin (assets yolu projeye göre)',
    '# TTF kaynağı: kit/fonts/ttf/ (node kit/fetch-fonts.mjs) → assets/fonts/ olarak kopyalanır',
    'fonts:',
  ];

  const families = fontIndex
    ? Object.entries(fontIndex.families)
        .map(([family, info]) => [family, Object.keys(info.files).map(Number).sort((a, b) => a - b), info.missingWeights ?? []])
        .sort((a, b) => a[0].localeCompare(b[0]))
    : [...fontWeights.entries()].map(([family, weights]) => [family, [...weights].sort((a, b) => a - b), []]);

  for (const [family, weights, missing] of families) {
    lines.push(`  - family: ${family}`);
    lines.push('    fonts:');
    for (const weight of weights) {
      lines.push(`      - asset: assets/fonts/${family.replace(/\s+/g, '-')}-${weight}.ttf`);
      lines.push(`        weight: ${weight}`);
    }
    if (missing.length) lines.push(`    # Google Fonts'ta yok: ${missing.join(', ')} — Flutter en yakın ağırlığa düşer`);
  }
  return lines.join('\n') + '\n';
}

function buildReadme(styles, fontWeights, fontFallbacks, fontIndex) {
  const bundled = fontIndex ? Object.keys(fontIndex.families) : [...fontWeights.keys()];
  const system = fontIndex?.skippedSystem ?? [];
  return `# Flutter çıktısı (style-lab)

GENERATED — \`node kit/export/flutter.mjs\` · ${styles.length} stil · ${bundled.length} gömülü font ailesi

## 1 · Dosyaları projeye al

\`\`\`bash
cp kit/dist/flutter/style_lab_tokens.dart lib/theme/
\`\`\`

\`pubspec.yaml\` içine \`pubspec.fonts.yaml\` bölümünü ekle ve TTF'leri
\`kit/fonts/ttf/\` altından \`assets/fonts/\` klasörüne kopyala.

## 2 · Temayı kur

\`\`\`dart
import 'theme/style_lab_tokens.dart';

MaterialApp(
  theme: styleLabTheme(slug: 'terminal-ui'),
  darkTheme: styleLabTheme(slug: 'terminal-ui', brightness: Brightness.dark),
  themeMode: ThemeMode.system,
  home: const HomePage(),
);
\`\`\`

## 3 · Token'ları oku

\`\`\`dart
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
\`\`\`

## 4 · Hareket imzası

\`\`\`dart
final m = context.styleLab.motion;
AnimatedSlide(
  duration: m.enterDurationValue,
  curve: m.enterCurve,
  offset: Offset(0, m.enterOffsetY / 100),
  child: child,
);
\`\`\`

\`MediaQuery.disableAnimations\` açıksa süreyi \`StyleLabTokens.reducedDuration\`'a düşür
(CSS \`prefers-reduced-motion\` karşılığı).

## 5 · Fontlar

Gömülü (TTF, \`kit/fonts/ttf/\` → \`assets/fonts/\`):

${bundled.map((f) => `- ${f}`).join('\n')}

${system.length ? `Paketlenmeyen sistem fontları (cihazda varsa kullanılır, yoksa platform varsayılanı):\n\n${system.map((f) => `- ${f}`).join('\n')}` : ''}

${fontFallbacks.size ? `Stil bazlı fallback:\n\n${[...fontFallbacks.entries()].map(([f, fb]) => `- ${f} → ${Array.isArray(fb) ? fb.join(', ') : fb}`).join('\n')}` : ''}

Font ağırlığı Google Fonts'ta yoksa (ör. Anton yalnız 400) Flutter en yakın bildirilen
ağırlığa düşer; \`pubspec.fonts.yaml\` yalnız gerçekten indirilen dosyaları listeler.

## Notlar

- Koyu mod yalnız paleti değiştirir (\`styleLabDark\`), tipografi/şekil/hareket aynıdır.
- İç gölge (inset) \`BoxShadow\`'da yok: ${insetNotes.length} kayıtta metin olarak durur.
- \`--blur\`, \`--grain\`, \`--data-1…4\` Dart çıktısında yok (cam/doku katmanı hedefe özgü kurulur).
`;
}

/* ---------- yaz / doğrula ---------- */

const built = buildDart();
const fontsYaml = buildFontsYaml(built.fontWeights, loadFontIndex());
const readme = buildReadme(built.styles, built.fontWeights, built.fontFallbacks, loadFontIndex());

const outputs = [
  [OUT_DART, built.dart],
  [OUT_FONTS, fontsYaml],
  [OUT_README, readme],
];

if (errors.length) {
  console.log(`flutter export · ${built.styles.length} stil · ${errors.length} hata`);
  for (const e of errors.slice(0, 25)) console.log(`  ✗ ${e}`);
  if (errors.length > 25) console.log(`  … +${errors.length - 25}`);
  if (!VERIFY) process.exit(1);
}

if (CHECK) {
  let dirty = 0;
  for (const [file, content] of outputs) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    if (current !== content) {
      dirty++;
      console.log(`  ✗ güncel değil: ${path.relative(ROOT, file)}`);
    }
  }
  console.log(
    `flutter export · ${built.styles.length} stil · ${built.fontWeights.size} font · ${curveDecls.length} eğri · ${dirty ? `${dirty} dosya eski` : 'senkron'}`,
  );
  if (dirty) {
    console.log('  düzelt: node kit/export/flutter.mjs');
    process.exit(1);
  }
  if (!VERIFY) process.exit(errors.length ? 1 : 0);
} else {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [file, content] of outputs) fs.writeFileSync(file, content);
  console.log(
    `yazıldı: kit/dist/flutter/{style_lab_tokens.dart,pubspec.fonts.yaml,README.md} · ${built.styles.length} stil · ${built.fontWeights.size} font · ${curveDecls.length} eğri`,
  );
  if (errors.length) process.exit(1);
  process.exit(0);
}

/* ---------- --verify: fixture paketinde dart analyze + flutter test ---------- */

function run(cmd, args, cwd) {
  const res = spawnSync(cmd, args, { cwd, encoding: 'utf8', shell: process.platform === 'win32' });
  return { code: res.status, out: `${res.stdout ?? ''}${res.stderr ?? ''}`.trim() };
}

const hasDart = run('dart', ['--version'], ROOT).code === 0;
if (!hasDart) {
  console.log('↷ flutter doğrulaması atlandı (dart bulunamadı)');
  process.exit(errors.length ? 1 : 0);
}

fs.mkdirSync(path.join(FIXTURE, 'lib'), { recursive: true });
fs.writeFileSync(FIXTURE_DART, built.dart);

if (!fs.existsSync(path.join(FIXTURE, '.dart_tool', 'package_config.json'))) {
  // CI'da pub önbelleği boş olabilir; yerelde ağsız çalışmak için --offline
  const pubArgs = ['pub', 'get', ...(process.env.CI === 'true' ? [] : ['--offline'])];
  const pub = run('dart', pubArgs, FIXTURE);
  if (pub.code !== 0) {
    console.log(`✗ dart ${pubArgs.join(' ')} başarısız`);
    console.log(pub.out.split('\n').slice(-12).join('\n'));
    process.exit(1);
  }
}

const analyze = run('dart', ['analyze', '--no-fatal-warnings'], FIXTURE);
const analyzeOk = analyze.code === 0 && /No issues found/.test(analyze.out);
console.log(`  ${analyzeOk ? '✓' : '✗'} dart analyze${analyzeOk ? '' : '\n' + analyze.out.split('\n').slice(-15).join('\n')}`);

const hasFlutter = run('flutter', ['--version'], ROOT).code === 0;
let testOk = true;
if (hasFlutter) {
  const test = run('flutter', ['test', '--reporter', 'compact'], FIXTURE);
  testOk = test.code === 0;
  console.log(`  ${testOk ? '✓' : '✗'} flutter test${testOk ? '' : '\n' + test.out.split('\n').slice(-20).join('\n')}`);
} else {
  console.log('  ↷ flutter test atlandı (flutter bulunamadı)');
}

process.exit(analyzeOk && testOk && errors.length === 0 ? 0 : 1);
