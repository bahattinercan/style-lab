#!/usr/bin/env node
/**
 * kit/style-lint.mjs — seçilen stilin **uygulanmış kodda** gerçekten kullanıldığını denetler.
 *
 * Neden: katalog token üretiyordu ama tüketen projede "hard-coded renk yok" iddiasını
 * denetleyen bir şey yoktu; katalog referans olarak kalıyordu. Bu araç katalogu sözleşmeye
 * çevirir: seçilen stile göre renk/font/radius/süre literalleri ve reduced-motion eksiği.
 *
 * Kullanım:
 *   node kit/style-lint.mjs <dizin> --style terminal-ui
 *   node kit/style-lint.mjs src --style terminal-ui --json
 *   node kit/style-lint.mjs src --style terminal-ui --strict     # uyarılar da hata
 *   node kit/style-lint.mjs src --style terminal-ui --allow-color "#ffffff"
 *   node kit/style-lint.mjs --list-rules
 *   node kit/style-lint.mjs --self-test                          # fixture'lar üzerinde kuralları kanıtla
 *
 * Kurallar:
 *   color-literal        (hata)  CSS/JSX/HTML içinde hex/rgb/hsl literal — var(--…) kullanılmalı
 *   font-literal         (hata)  stilin fontları dışında font-family
 *   dart-color-literal   (hata)  Dart'ta Color(0x…) / Colors.* literal
 *   dart-font-literal    (hata)  Dart'ta fontFamily: '…' literal
 *   radius-literal       (uyarı) stilin radius/radiusLg dışında px border-radius
 *   dart-radius-literal  (uyarı) BorderRadius.circular(<sayı>)
 *   duration-literal     (uyarı) token dışı transition/animation süresi
 *   dart-duration-literal(uyarı) Duration(milliseconds: <sayı>)
 *   default-ease         (uyarı) stilin eğrisi varken ease/linear kullanımı
 *   reduced-motion-missing (uyarı) hareket var ama prefers-reduced-motion bloğu yok
 *   ink-faint-text       (uyarı) --ink-faint metin rengi olarak (yalnız dekoratif)
 *   root-style-missing   (uyarı) hiçbir dosyada data-style="<slug>" yok
 *
 * Muafiyet: satırda veya bir önceki satırda `style-lint-allow` yorumu.
 * Üretilen dosyalar (tokens.css, tokens.all.css, tailwind.theme.css, style_lab_tokens.dart,
 * styleLabTokens.js, node_modules, dist, build, .dart_tool) atlanır.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STYLES_DIR = path.join(ROOT, 'styles');

const ARGV = process.argv.slice(2);
const JSON_OUT = ARGV.includes('--json');
const STRICT = ARGV.includes('--strict');
const SELF_TEST = ARGV.includes('--self-test');
const LIST_RULES = ARGV.includes('--list-rules');
const argOf = (name) => {
  const i = ARGV.indexOf(name);
  return i < 0 ? null : (ARGV[i + 1] ?? null);
};
const STYLE = argOf('--style');
const ALLOW_COLORS = new Set(
  (argOf('--allow-color') ?? '')
    .split(',')
    .map((c) => c.trim().toLowerCase())
    .filter(Boolean),
);
const TARGET = (() => {
  const positional = [];
  for (let i = 0; i < ARGV.length; i++) {
    const a = ARGV[i];
    if (a === '--style' || a === '--allow-color') {
      i++;
      continue;
    }
    if (a.startsWith('--')) continue;
    positional.push(a);
  }
  return positional[0] ?? null;
})();

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.dart_tool', 'coverage', '.next', '.nuxt']);
const SKIP_FILES = new Set([
  'tokens.css',
  'tokens.all.css',
  'tailwind.theme.css',
  'style_lab_tokens.dart',
  'styleLabTokens.js',
  'styleLabTokens.d.ts',
  'gallery.css',
]);

const RULES = {
  'color-literal': { severity: 'error', note: 'renk token’dan gelir: var(--accent)' },
  'font-literal': { severity: 'error', note: 'font: var(--font-display)' },
  'dart-color-literal': { severity: 'error', note: 'renk: context.styleLab.accent' },
  'dart-font-literal': { severity: 'error', note: 'font: styleLabTheme / typography' },
  'radius-literal': { severity: 'warn', note: 'radius: var(--radius) / var(--radius-lg)' },
  'dart-radius-literal': { severity: 'warn', note: 'radius: t.radius / t.radiusLg' },
  'duration-literal': { severity: 'warn', note: 'süre: motion.enter/scroll değerleri' },
  'dart-duration-literal': { severity: 'warn', note: 'süre: t.motion.enterDurationValue' },
  'default-ease': { severity: 'warn', note: 'eğri: stilin motion.easing değeri' },
  'reduced-motion-missing': { severity: 'warn', note: 'prefers-reduced-motion bloğu ekle' },
  'ink-faint-text': { severity: 'warn', note: '--ink-faint yalnız dekoratif' },
  'root-style-missing': { severity: 'warn', note: '<html data-style="<slug>"> ekle' },
};

if (LIST_RULES) {
  for (const [id, rule] of Object.entries(RULES)) console.log(`${id.padEnd(24)} ${rule.severity.padEnd(6)} ${rule.note}`);
  process.exit(0);
}

/* ---------- stil verisi ---------- */
function loadStyle(slug) {
  const dirs = fs.readdirSync(STYLES_DIR).filter((d) => /^\d{2,3}-/.test(d));
  const dir = dirs.find((d) => d.replace(/^\d+-/, '') === slug);
  if (!dir) return null;
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const typo = tokens.typography ?? {};
  const radius = (tokens.shape?.radius ?? '').trim();
  const radiusLg = (tokens.shape?.radiusLg ?? '').trim();
  const motion = tokens.motion ?? {};
  const sequences = motion.sequences ?? {};
  return {
    slug,
    dir,
    fonts: new Set([typo.display, typo.body, typo.mono].filter(Boolean).map((f) => f.toLowerCase())),
    radius: new Set([radius, radiusLg].filter(Boolean)),
    durations: new Set(
      [motion.fast, motion.base, motion.slow, sequences.enter?.duration, sequences.scroll?.duration, sequences.hover?.duration]
        .filter(Boolean)
        .map((v) => String(v).trim()),
    ),
    hasCurve: Boolean(sequences.enter?.ease ?? motion.easing),
  };
}

/* ---------- dosya yürüyüşü ---------- */
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), out);
      continue;
    }
    if (!entry.isFile()) continue;
    if (SKIP_FILES.has(entry.name)) continue;
    if (!/\.(css|scss|sass|less|html|htm|jsx|tsx|vue|svelte|dart)$/i.test(entry.name)) continue;
    out.push(path.join(dir, entry.name));
  }
  return out;
}

const isComment = (line) => /^\s*(\/\/|\/\*|\*|<!--|#)/.test(line);
const suppressed = (lines, i) => /style-lint-allow/.test(lines[i]) || /style-lint-allow/.test(lines[i - 1] ?? '');

/* ---------- denetim ---------- */
function lintFile(file, style, findings) {
  const rel = path.relative(process.cwd(), file) || file;
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const isDart = file.endsWith('.dart');

  const add = (rule, lineNo, message) => {
    findings.push({ file: rel, line: lineNo, rule, severity: RULES[rule].severity, message, hint: RULES[rule].note });
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isComment(line) || suppressed(lines, i)) continue;
    const lineNo = i + 1;

    if (isDart) {
      const color = line.match(/\bColor\(0x[0-9a-fA-F]{6,8}\)|\bColors\.[a-zA-Z]+/);
      if (color) add('dart-color-literal', lineNo, `renk literali: ${color[0]}`);
      const font = line.match(/fontFamily:\s*['"]([^'"]+)['"]/);
      if (font && style?.fonts.size && !style.fonts.has(font[1].toLowerCase())) add('dart-font-literal', lineNo, `stil dışı font: ${font[1]}`);
      const radius = line.match(/BorderRadius\.circular\(\s*([\d.]+)\s*\)/);
      if (radius) add('dart-radius-literal', lineNo, `radius literali: ${radius[1]}`);
      const duration = line.match(/Duration\(\s*(?:milliseconds|seconds):\s*[\d.]+\s*\)/);
      if (duration) add('dart-duration-literal', lineNo, `süre literali: ${duration[0]}`);
      continue;
    }

    const color = line.match(/#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\)/);
    if (color && !ALLOW_COLORS.has(color[0].toLowerCase())) add('color-literal', lineNo, `renk literali: ${color[0]}`);

    const font = line.match(/font-family\s*:\s*([^;}]+)/i);
    if (font && style?.fonts.size) {
      const families = font[1]
        .split(',')
        .map((f) => f.trim().replace(/^['"]|['"]$/g, '').toLowerCase())
        .filter((f) => f && !['inherit', 'initial', 'unset', 'sans-serif', 'serif', 'monospace', 'system-ui', 'ui-monospace'].includes(f));
      const stray = families.filter((f) => !style.fonts.has(f) && !f.startsWith('var('));
      if (stray.length) add('font-literal', lineNo, `stil dışı font: ${stray.join(', ')}`);
    }

    const radius = line.match(/border-radius\s*:\s*([^;}]+)/i);
    if (radius && style?.radius.size) {
      const value = radius[1].trim();
      const px = value.match(/^([\d.]+)px$/);
      if (px && !style.radius.has(value) && !['0', '0px'].includes(value)) add('radius-literal', lineNo, `radius literali: ${value}`);
    }

    const timing = line.match(/(?:transition|animation)(?:-duration)?\s*:\s*([^;}]+)/i);
    if (timing) {
      const durations = timing[1].match(/[\d.]+m?s/g) ?? [];
      for (const d of durations) {
        const ms = d.endsWith('ms') ? d : `${parseFloat(d) * 1000}ms`;
        if (style?.durations.size && !style.durations.has(d) && !style.durations.has(ms) && parseFloat(ms) > 0) {
          add('duration-literal', lineNo, `token dışı süre: ${d}`);
        }
      }
      if (style?.hasCurve && /\b(ease|linear)\b(?!-)/.test(timing[1]) && !/cubic-bezier|steps\(/.test(timing[1])) {
        add('default-ease', lineNo, 'varsayılan eğri (ease/linear)');
      }
    }

    if (/color\s*:\s*var\(--ink-faint\)/.test(line)) add('ink-faint-text', lineNo, '--ink-faint metin rengi olarak kullanılmış');
  }

  return { hasMotion: /transition|animation|Animated|AnimationController/.test(text), hasReduced: /prefers-reduced-motion|disableAnimations/.test(text), hasRoot: style ? text.includes(`data-style="${style.slug}"`) : false };
}

function lint(dir, style) {
  const files = walk(dir);
  const findings = [];
  let anyMotion = false;
  let anyReduced = false;
  let anyRoot = false;

  for (const file of files) {
    const info = lintFile(file, style, findings);
    anyMotion ||= info.hasMotion;
    anyReduced ||= info.hasReduced;
    anyRoot ||= info.hasRoot;
  }

  if (style && anyMotion && !anyReduced) {
    findings.push({
      file: path.relative(process.cwd(), dir) || '.',
      line: 0,
      rule: 'reduced-motion-missing',
      severity: RULES['reduced-motion-missing'].severity,
      message: 'hareket var ama prefers-reduced-motion bloğu yok',
      hint: RULES['reduced-motion-missing'].note,
    });
  }
  if (style && !anyRoot) {
    findings.push({
      file: path.relative(process.cwd(), dir) || '.',
      line: 0,
      rule: 'root-style-missing',
      severity: RULES['root-style-missing'].severity,
      message: `hiçbir dosyada data-style="${style.slug}" yok`,
      hint: RULES['root-style-missing'].note,
    });
  }

  return { files: files.length, findings };
}

/* ---------- self-test ---------- */
function selfTest() {
  const fixtures = path.join(ROOT, 'kit', 'style-lint', 'fixtures');
  const expectations = [
    { dir: 'bad', style: 'terminal-ui', expectRules: ['color-literal', 'font-literal', 'radius-literal', 'duration-literal', 'dart-color-literal', 'dart-duration-literal', 'reduced-motion-missing', 'root-style-missing'], expectErrors: true },
    { dir: 'good', style: 'terminal-ui', expectRules: [], expectErrors: false },
  ];
  let failed = 0;

  for (const exp of expectations) {
    const dir = path.join(fixtures, exp.dir);
    if (!fs.existsSync(dir)) {
      console.log(`  ✗ fixture yok: ${exp.dir}`);
      failed++;
      continue;
    }
    const style = loadStyle(exp.style);
    const result = lint(dir, style);
    const rules = new Set(result.findings.map((f) => f.rule));
    const errors = result.findings.filter((f) => f.severity === 'error');

    const missing = exp.expectRules.filter((r) => !rules.has(r));
    const okErrors = exp.expectErrors ? errors.length > 0 : errors.length === 0;
    const ok = missing.length === 0 && okErrors;
    console.log(`  ${ok ? '✓' : '✗'} ${exp.dir}: ${result.findings.length} bulgu (${errors.length} hata, ${result.findings.length - errors.length} uyarı)${missing.length ? ` · eksik kural: ${missing.join(', ')}` : ''}`);
    if (!ok) {
      failed++;
      for (const f of result.findings) console.log(`      ${f.severity} ${f.rule} ${f.file}:${f.line} — ${f.message}`);
    }
  }

  console.log(failed ? `self-test: ${failed} başarısız` : 'self-test: kurallar kanıtlandı');
  process.exit(failed ? 1 : 0);
}

if (SELF_TEST) selfTest();

/* ---------- ana akış ---------- */
if (!TARGET) {
  console.error('kullanım: node kit/style-lint.mjs <dizin> --style <slug> [--json] [--strict] [--allow-color "#fff"]');
  console.error('         node kit/style-lint.mjs --list-rules | --self-test');
  process.exit(2);
}
if (!fs.existsSync(TARGET)) {
  console.error(`dizin yok: ${TARGET}`);
  process.exit(2);
}

const style = STYLE ? loadStyle(STYLE) : null;
if (STYLE && !style) {
  console.error(`bilinmeyen stil: ${STYLE} (styles/<nn>-${STYLE} yok)`);
  process.exit(2);
}

const result = lint(path.resolve(TARGET), style);
const errors = result.findings.filter((f) => f.severity === 'error');
const warnings = result.findings.filter((f) => f.severity === 'warn');

if (JSON_OUT) {
  console.log(JSON.stringify({ style: STYLE, files: result.files, errors: errors.length, warnings: warnings.length, findings: result.findings }, null, 2));
} else {
  console.log(`style-lint · ${result.files} dosya · stil: ${STYLE ?? '(genel)'} · ${errors.length} hata · ${warnings.length} uyarı`);
  for (const f of result.findings) {
    const tag = f.severity === 'error' ? '✗' : '!';
    console.log(`  ${tag} ${f.file}:${f.line} [${f.rule}] ${f.message}`);
    if (f.hint) console.log(`     → ${f.hint}`);
  }
  if (!result.findings.length) console.log('  temiz');
}

process.exit(errors.length || (STRICT && warnings.length) ? 1 : 0);
