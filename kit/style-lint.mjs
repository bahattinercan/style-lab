#!/usr/bin/env node
/**
 * kit/style-lint.mjs — checks that the selected style is actually used in **implemented code**.
 *
 * Cause: the catalog was generating tokens but the consuming project claimed "no hard-coded colors"
 * there was nothing controlling; The catalog remained as a reference. This vehicle catalog is included in the contract
 * translates: color/font/radius literals and data-style binding according to the selected style.
 * v6: since the motion layer was removed, duration/curve/reduced-motion rules were also removed.
 *
 * Usage:
 * node kit/style-lint.mjs <directory> --style terminal-ui
 * node kit/style-lint.mjs src --style terminal-ui --json
 * node kit/style-lint.mjs src --style terminal-ui --strict # errors in warnings
 * node kit/style-lint.mjs src --style terminal-ui --allow-color "#ffffff"
 * node kit/style-lint.mjs --list-rules
 * node kit/style-lint.mjs --self-test # prove rules on fixtures
 *
 * Rules:
 * color-literal (error) hex/rgb/hsl literal — var(--…) should be used in CSS/JSX/HTML
 * font-literal (error) fonts other than style font-family
 * dart-color-literal (error) Color(0x…) / Colors.* literal in Dart
 * dart-font-literal (error) fontFamily in Dart: '…' literal
 * radius-literal (warning) px border-radius outside of style radius/radiusLg
 * dart-radius-literal (warning) BorderRadius.circular(<number>)
 * ink-faint-text (warning) --ink-faint as text color (decorative only)
 * root-style-missing (warning) no files have data-style="<slug>"
 *
 * Exemption: `style-lint-allow` comment on line or previous line.
 * Generated files (tokens.css, tokens.all.css, tailwind.theme.css, style_lab_tokens.dart,
 * styleLabTokens.js, node_modules, dist, build, .dart_tool) are skipped.*/
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
  'color-literal': { severity: 'error', note: 'colour comes from the token: var(--accent)' },
  'font-literal': { severity: 'error', note: 'font: var(--font-display)' },
  'dart-color-literal': { severity: 'error', note: 'colour: context.styleLab.accent' },
  'dart-font-literal': { severity: 'error', note: 'font: styleLabTheme / typography' },
  'radius-literal': { severity: 'warn', note: 'radius: var(--radius) / var(--radius-lg)' },
  'dart-radius-literal': { severity: 'warn', note: 'radius: t.radius / t.radiusLg' },
  'ink-faint-text': { severity: 'warn', note: '--ink-faint decorative only' },
  'root-style-missing': { severity: 'warn', note: '<html data-style="<slug>"> ekle' },
};

if (LIST_RULES) {
  for (const [id, rule] of Object.entries(RULES)) console.log(`${id.padEnd(24)} ${rule.severity.padEnd(6)} ${rule.note}`);
  process.exit(0);
}

/*---------- style data ----------*/
function loadStyle(slug) {
  const dirs = fs.readdirSync(STYLES_DIR).filter((d) => /^\d{2,3}-/.test(d));
  const dir = dirs.find((d) => d.replace(/^\d+-/, '') === slug);
  if (!dir) return null;
  const tokens = JSON.parse(fs.readFileSync(path.join(STYLES_DIR, dir, 'tokens.json'), 'utf8'));
  const typo = tokens.typography ?? {};
  const radius = (tokens.shape?.radius ?? '').trim();
  const radiusLg = (tokens.shape?.radiusLg ?? '').trim();
  return {
    slug,
    dir,
    fonts: new Set([typo.display, typo.body, typo.mono].filter(Boolean).map((f) => f.toLowerCase())),
    radius: new Set([radius, radiusLg].filter(Boolean)),
  };
}

/*---------- file walk ----------*/
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

/* ---------- audit ---------- */
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
      if (color) add('dart-color-literal', lineNo, `colour literal: ${color[0]}`);
      const font = line.match(/fontFamily:\s*['"]([^'"]+)['"]/);
      if (font && style?.fonts.size && !style.fonts.has(font[1].toLowerCase())) add('dart-font-literal', lineNo, `font outside the style: ${font[1]}`);
      const radius = line.match(/BorderRadius\.circular\(\s*([\d.]+)\s*\)/);
      if (radius) add('dart-radius-literal', lineNo, `radius literali: ${radius[1]}`);
      continue;
    }

    const color = line.match(/#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\)/);
    if (color && !ALLOW_COLORS.has(color[0].toLowerCase())) add('color-literal', lineNo, `colour literal: ${color[0]}`);

    const font = line.match(/font-family\s*:\s*([^;}]+)/i);
    if (font && style?.fonts.size) {
      const families = font[1]
        .split(',')
        .map((f) => f.trim().replace(/^['"]|['"]$/g, '').toLowerCase())
        .filter((f) => f && !['inherit', 'initial', 'unset', 'sans-serif', 'serif', 'monospace', 'system-ui', 'ui-monospace'].includes(f));
      const stray = families.filter((f) => !style.fonts.has(f) && !f.startsWith('var('));
      if (stray.length) add('font-literal', lineNo, `font outside the style: ${stray.join(', ')}`);
    }

    const radius = line.match(/border-radius\s*:\s*([^;}]+)/i);
    if (radius && style?.radius.size) {
      const value = radius[1].trim();
      const px = value.match(/^([\d.]+)px$/);
      if (px && !style.radius.has(value) && !['0', '0px'].includes(value)) add('radius-literal', lineNo, `radius literali: ${value}`);
    }

    if (/color\s*:\s*var\(--ink-faint\)/.test(line)) add('ink-faint-text', lineNo, '--ink-faint used as text color');
  }

  return { hasRoot: style ? text.includes(`data-style="${style.slug}"`) : false };
}

function lint(dir, style) {
  const files = walk(dir);
  const findings = [];
  let anyRoot = false;

  for (const file of files) {
    const info = lintFile(file, style, findings);
    anyRoot ||= info.hasRoot;
  }

  if (style && !anyRoot) {
    findings.push({
      file: path.relative(process.cwd(), dir) || '.',
      line: 0,
      rule: 'root-style-missing',
      severity: RULES['root-style-missing'].severity,
      message: `no file carries data-style="${style.slug}"`,
      hint: RULES['root-style-missing'].note,
    });
  }

  return { files: files.length, findings };
}

/* ---------- self-test ---------- */
function selfTest() {
  const fixtures = path.join(ROOT, 'kit', 'style-lint', 'fixtures');
  const expectations = [
    { dir: 'bad', style: 'terminal-ui', expectRules: ['color-literal', 'font-literal', 'radius-literal', 'dart-color-literal', 'root-style-missing'], expectErrors: true },
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
    console.log(`  ${ok ? '✓' : '✗'} ${exp.dir}: ${result.findings.length} finding (${errors.length} error, ${result.findings.length - errors.length} warning)${missing.length ? ` · missing rule: ${missing.join(', ')}` : ''}`);
    if (!ok) {
      failed++;
      for (const f of result.findings) console.log(`      ${f.severity} ${f.rule} ${f.file}:${f.line} — ${f.message}`);
    }
  }

  console.log(failed ? `self-test: ${failed} failed` : 'self-test: rules proven');
  process.exit(failed ? 1 : 0);
}

if (SELF_TEST) selfTest();

/*---------- main stream ----------*/
if (!TARGET) {
  console.error('usage: node kit/style-lint.mjs <dir> --style <slug> [--json] [--strict] [--allow-color "#fff"]');
  console.error('         node kit/style-lint.mjs --list-rules | --self-test');
  process.exit(2);
}
if (!fs.existsSync(TARGET)) {
  console.error(`dizin yok: ${TARGET}`);
  process.exit(2);
}

const style = STYLE ? loadStyle(STYLE) : null;
if (STYLE && !style) {
  console.error(`unknown style: ${STYLE} (styles/<nn>-${STYLE} is missing)`);
  process.exit(2);
}

const result = lint(path.resolve(TARGET), style);
const errors = result.findings.filter((f) => f.severity === 'error');
const warnings = result.findings.filter((f) => f.severity === 'warn');

if (JSON_OUT) {
  console.log(JSON.stringify({ style: STYLE, files: result.files, errors: errors.length, warnings: warnings.length, findings: result.findings }, null, 2));
} else {
  console.log(`style-lint · ${result.files} files · style: ${STYLE ?? '(global)'} · ${errors.length} errors · ${warnings.length} warnings`);
  for (const f of result.findings) {
    const tag = f.severity === 'error' ? '✗' : '!';
    console.log(`  ${tag} ${f.file}:${f.line} [${f.rule}] ${f.message}`);
    if (f.hint) console.log(`     → ${f.hint}`);
  }
  if (!result.findings.length) console.log('  temiz');
}

process.exit(errors.length || (STRICT && warnings.length) ? 1 : 0);
