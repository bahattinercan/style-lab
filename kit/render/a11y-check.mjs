#!/usr/bin/env node
/**
 * kit/render/a11y-check.mjs — accessibility check of templates (no dependencies).
 *
 * Method: kit/render/<scene>.html template into a temporary file instead of `__STYLE__`
 * written by adding style slug (tokens.css + scene.css links are preserved), Edge/Chrome
 * The rendered DOM is retrieved with `--dump-dom` and the DOM is processed with a regex-based browser.
 * is inspected. No npm dependencies, templates are not permanently modified.
 *
 * Usage:
 * node kit/render/a11y-check.mjs --styles 01-minimalism,08-glassmorphism --scene landing
 * node kit/render/a11y-check.mjs --scene landing # all styles
 * node kit/render/a11y-check.mjs --styles y2k --scene landing --json
 * node kit/render/a11y-check.mjs --styles y2k --scene landing --warn-only
 *
 * Controls (number + example each):
 * 1 h1 : Is the number <h1> exactly 1?
 * 2 alts: Those missing the alt attribute in <img> (alt="" is considered decorative)
 * 3 labels: aria-label/-labeledby or absence of <label> for input/select/textarea
 * 4 buttons: .btn/button/a without visible text and aria-label
 * 5 tabindex : negative tabindex values (not critical)
 *
 * Exit code: 1 if there is a critical violation (1-4); 0 if there is only 5; --warn-only 0 in all cases.
 *
 * Browser: BROWSER environment variable or candidate paths in render-shots.mjs.*/
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { icon } from './icons.mjs';
import { configFor } from './shots.config.mjs';
import { inlineTypeScale } from '../lib/type-scale.mjs';
import { applySectionPlan } from '../lib/section-plan.mjs';

const run = promisify(execFile);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const STYLES_DIR = path.join(ROOT, 'styles');

const JSON_OUT = process.argv.includes('--json');
const WARN_ONLY = process.argv.includes('--warn-only');

const EDGE_CANDIDATES = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/microsoft-edge',
];

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] && !process.argv[i + 1].startsWith('--')
    ? process.argv[i + 1]
    : fallback;
}

function findBrowser() {
  if (process.env.BROWSER) return process.env.BROWSER;
  for (const p of EDGE_CANDIDATES) if (fs.existsSync(p)) return p;
  throw new Error('Chromium-based browser not found; Give BROWSER=/path/browser');
}

/** Stage name → template: first manifest (estate-landing → estate.html), then filename.*/
function templateFor(scene) {
  try {
    const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'shots.manifest.json'), 'utf8'));
    const hit = (m.scenes ?? []).find((s) => s.key === scene || s.file?.startsWith(scene));
    if (hit?.tpl && fs.existsSync(path.join(HERE, hit.tpl))) {
      return { file: path.join(HERE, hit.tpl), name: hit.tpl };
    }
  } catch {
    /*If there is no manifest, fall into filename matching*/
  }
  for (const name of [`${scene}.html`, `${scene}s.html`]) {
    const p = path.join(HERE, name);
    if (fs.existsSync(p)) return { file: p, name };
  }
  throw new Error(`missing template: kit/render/${scene}.html (or ${scene}s.html)`);
}

/** Style directories (`<nn>-<slug>`) match the slug or directory name.*/
function styleDirs(only) {
  const all = fs
    .readdirSync(STYLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(STYLES_DIR, d.name, 'style.md')))
    .map((d) => d.name)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  const wanted = only.split(',').map((s) => s.trim()).filter(Boolean);
  if (!wanted.length) return all;
  const picked = [];
  for (const w of wanted) {
    const hit = all.find((dir) => dir === w || dir.replace(/^\d+-/, '') === w);
    if (!hit) throw new Error(`no matching style: ${w}`);
    picked.push(hit);
  }
  return picked;
}

/**
 * render-shots.mjs Simplified version of `fill()`: hooks that only affect the DOM
 * is filled (style id + icons). Color/radius/font placement accessibility
 * unnecessary for control; The tokens.css and scene.css links remain as they are in the template.*/
function fill(tpl, slug, dirName) {
  if (arg('scene', 'landing') === 'landing') {
    const styleDir = path.join(STYLES_DIR, dirName);
    const tokens = JSON.parse(fs.readFileSync(path.join(styleDir, 'tokens.json'), 'utf8'));
    const layoutDefs = JSON.parse(fs.readFileSync(path.join(HERE, 'layouts.json'), 'utf8'));
    const layout = {
      hero: layoutDefs.heroes.some((item) => item.id === tokens.layout?.hero) ? tokens.layout.hero : 'split',
      nav: layoutDefs.navs.some((item) => item.id === tokens.layout?.nav) ? tokens.layout.nav : 'inline',
      density: layoutDefs.densities.some((item) => item.id === tokens.layout?.density) ? tokens.layout.density : 'balanced',
      sectionPlan: layoutDefs.sections.some((item) => item.id === tokens.layout?.sectionPlan) ? tokens.layout.sectionPlan : layoutDefs.sections[0].id,
    };
    const industry = tokens.industries?.[0] ?? 'saas';
    const contentPath = path.join(ROOT, 'kit', 'content', `${industry}.json`);
    const copy = fs.existsSync(contentPath) ? JSON.parse(fs.readFileSync(contentPath, 'utf8')) : {};
    const partial = (name) => fs.readFileSync(path.join(HERE, 'partials', `${name}.html`), 'utf8');
    const config = configFor(slug);
    const h1 = copy.hero?.h1 ?? '';
    const words = h1.split(/\s+/);
    const perLine = Math.ceil(words.length / 3);
    const h1Lines = words.length <= 3
      ? words.join('<br>')
      : [0, 1, 2].map((i) => words.slice(i * perLine, (i + 1) * perLine).join(' ')).filter(Boolean).join('<br>');
    const map = {
      __STYLE__: slug,
      __BODY_CLASS__: config.bodyClass ?? '',
      __MOTIF__: `motif-${config.motif ?? 'rings'}`,
      __LAYOUT_HERO__: layout.hero,
      __LAYOUT_NAV__: layout.nav,
      __DENSITY__: layout.density,
      __SECTION_PLAN__: layout.sectionPlan,
      __TYPE_SCALE__: inlineTypeScale(tokens.typography?.scale ?? {}),
      __COPY_EYEBROW__: copy.hero?.eyebrow ?? '',
      __COPY_H1__: h1,
      __COPY_H1_LINES__: h1Lines,
      __COPY_LEDE__: copy.hero?.lede ?? '',
      __COPY_CTA1__: copy.hero?.ctaPrimary ?? '',
      __COPY_CTA2__: copy.hero?.ctaSecondary ?? '',
      __COPY_PROOF1__: copy.proofs?.[0] ?? '',
      __COPY_PROOF2__: copy.proofs?.[1] ?? '',
      __COPY_PROOF3__: copy.proofs?.[2] ?? '',
      __COPY_LOGO_LABEL__: copy.logoLabel ?? '',
      __COPY_LOGO1__: copy.logos?.[0] ?? '',
      __COPY_LOGO2__: copy.logos?.[1] ?? '',
      __COPY_LOGO3__: copy.logos?.[2] ?? '',
      __COPY_LOGO4__: copy.logos?.[3] ?? '',
      __COPY_LOGO5__: copy.logos?.[4] ?? '',
      __COPY_TILE1__: copy.tiles?.[0]?.cap ?? '',
      __COPY_TILE2__: copy.tiles?.[1]?.cap ?? '',
      __COPY_TILE3__: copy.tiles?.[2]?.cap ?? '',
      __COPY_TILE4__: copy.tiles?.[3]?.cap ?? '',
    };
    let html = tpl
      .replace(/<!--\s*NAV\s*-->/, () => partial(`nav-${layout.nav}`))
      .replace(/<!--\s*HERO\s*-->/, () => partial(`hero-${layout.hero}`));
    for (const [key, value] of Object.entries(map)) html = html.split(key).join(value);
    const sectionPlan = layoutDefs.sections.find((plan) => plan.id === layout.sectionPlan);
    if (sectionPlan) html = applySectionPlan(html, sectionPlan);
    return html
      .replace(/<style id="extra"><\/style>/, `<style>${config.extraCss ?? ''}</style>`)
      .replace(/__ICON:([a-z0-9-]+):(\d+)__/g, (_m, name, size) => icon(name, Number(size)))
      .replace(/__[A-Z0-9_]+__/g, '');
  }
  const family = (() => {
    const n = parseInt(dirName, 10);
    if (n <= 7) return 'Sade';
    if (n <= 12) return 'surface';
    if (n <= 18) return 'Cesur';
    if (n <= 27) return 'Retro';
    return 'Sanatsal';
  })();
  return tpl
    .replace(/__ICON:([a-z0-9-]+):(\d+)__/g, (_m, name, size) => icon(name, Number(size)))
    .split('__STYLE__')
    .join(slug)
    .split('__FAMILY__')
    .join(family)
    .split('__MOTIF__')
    .join('motif-rings')
    .split('__BODY_CLASS__')
    .join('')
    .replace(/__[A-Z0-9_]+__/g, '');
}

/**
 * Fetches the rendered DOM with `--dump-dom`. Two variants are tried: the default
 * (with virtual-time-budget) and without it. If neither yields a DOM, an error is
 * thrown (STOP rule) carrying the browser's own stderr, so CI failures are diagnosable.
 *
 * `--no-sandbox` and `--disable-dev-shm-usage` are required on GitHub Actions runners:
 * without them the sandbox and the small /dev/shm make Chrome exit before dumping DOM.
 */
async function dumpDom(browser, htmlPath, profile) {
  const url = 'file:///' + encodeURI(htmlPath.replace(/\\/g, '/'));
  const base = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-sync',
    '--hide-scrollbars',
    `--user-data-dir=${profile}`,
  ];
  const variants = [['--virtual-time-budget=4000'], []];
  const problems = [];
  for (const extra of variants) {
    const label = extra.length ? 'virtual-time-budget' : 'no budget';
    let stdout = '';
    let stderr = '';
    try {
      const res = await run(browser, [...base, ...extra, '--dump-dom', url], {
        timeout: 90_000,
        maxBuffer: 32 * 1024 * 1024,
        windowsHide: true,
      });
      stdout = res.stdout ?? '';
      stderr = res.stderr ?? '';
    } catch (err) {
      stdout = err.stdout ?? '';
      stderr = err.stderr ?? String(err.message ?? '');
    }
    if (/<body[\s>]/i.test(String(stdout))) return String(stdout);
    const detail = String(stderr)
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(-3)
      .join(' | ');
    problems.push(detail ? `${label}: ${detail}` : `${label}: no output`);
  }
  throw new Error(
    `${path.basename(htmlPath)}: --dump-dom DOM vermedi (${problems.join(' · ')}) — ` +
      'STOP: report browser/DOM issue',
  );
}

function rmQuiet(target, label) {
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 20, retryDelay: 250 });
  } catch (err) {
    console.warn(`warning: could not delete ${label} (${target}): ${err.code ?? err.message}`);
  }
}

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const LABELABLE = new Set(['input', 'select', 'textarea']);

/** Crude but dependency-free HTML browser: tag + attribute + text tree.*/
function parseDom(html) {
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const els = [];
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)(\/?)>/g;
  let last = 0;
  for (let m = re.exec(clean); m; m = re.exec(clean)) {
    const text = clean.slice(last, m.index);
    if (text.trim() && stack.length) stack[stack.length - 1].textParts.push(text);
    last = m.index + m[0].length;
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    if (closing) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }
    const attrs = {};
    for (const a of m[3].matchAll(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g)) {
      attrs[a[1].toLowerCase()] = a[2] === undefined ? '' : a[2].replace(/^["']|["']$/g, '');
    }
    const el = { tag, attrs, textParts: [], children: [], parent: stack[stack.length - 1] ?? null };
    if (el.parent) el.parent.children.push(el);
    els.push(el);
    if (!VOID.has(tag) && m[4] !== '/') stack.push(el);
  }
  return els;
}

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const classList = (el) => (el.attrs.class ?? '').split(/\s+/).filter(Boolean);

/** Accessible name/text: aria-hidden subtree skipped, <img sub> joins text.*/
function nameText(el) {
  if (el.attrs['aria-hidden'] === 'true') return '';
  let out = el.textParts.join(' ');
  if (el.tag === 'img') out += ' ' + (el.attrs.alt ?? '');
  for (const child of el.children) out += ' ' + nameText(child);
  return out;
}

const snippet = (el) => {
  const attrs = Object.entries(el.attrs)
    .filter(([k]) => k === 'class' || k === 'type' || k === 'placeholder' || k === 'id')
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return norm(`<${el.tag}${attrs ? ' ' + attrs : ''}>`).slice(0, 90);
};

export function audit(html) {
  const els = parseDom(html);
  const issues = [];
  const add = (rule, count, samples) => {
    if (count > 0) issues.push({ rule, count, samples: samples.slice(0, 3) });
  };

  // 1 · h1 number must be exactly 1
  const h1s = els.filter((e) => e.tag === 'h1');
  if (h1s.length !== 1) {
    add('h1', h1s.length === 0 ? 1 : h1s.length - 1, [
      `${h1s.length} adet <h1> var (1 beklenir)` +
        (h1s[0] ? ` · ilk: ${norm(nameText(h1s[0])).slice(0, 40)}` : ''),
    ]);
  }

  // 2 · <img> alt is missing (alt="" is considered decorative)
  const imgsMissingAlt = els.filter((e) => e.tag === 'img' && !('alt' in e.attrs));
  add('alt', imgsMissingAlt.length, imgsMissingAlt.map(snippet));

  // 3 form field label: aria-label / aria-labelledby / <label>
  const labelledIds = new Set(
    els.filter((e) => e.tag === 'label' && e.attrs.for).map((e) => e.attrs.for),
  );
  const labelledAncestors = new Set(
    els.filter((e) => e.tag === 'label').flatMap((l) => {
      const out = [];
      const walk = (n) => n.children.forEach((c) => (out.push(c), walk(c)));
      walk(l);
      return out;
    }),
  );
  const unlabeled = els.filter((e) => {
    if (!LABELABLE.has(e.tag)) return false;
    if (e.attrs.type === 'hidden') return false;
    if ((e.attrs['aria-label'] ?? '').trim()) return false;
    if ((e.attrs['aria-labelledby'] ?? '').trim()) return false;
    if (e.attrs.id && labelledIds.has(e.attrs.id)) return false;
    return !labelledAncestors.has(e);
  });
  add('label', unlabeled.length, unlabeled.map(snippet));

  // 4 · clickable (button / a / .btn) with visible text or aria-label
  const clickable = els.filter(
    (e) => e.tag === 'button' || e.tag === 'a' || classList(e).includes('btn'),
  );
  const nameless = clickable.filter((e) => {
    if ((e.attrs['aria-label'] ?? '').trim()) return false;
    if ((e.attrs['aria-labelledby'] ?? '').trim()) return false;
    if ((e.attrs.title ?? '').trim()) return false;
    return norm(nameText(e)).length === 0;
  });
  add('buton', nameless.length, nameless.map(snippet));

  // 5 negative tabindex (not critical)
  const negTab = els.filter((e) => 'tabindex' in e.attrs && Number(e.attrs.tabindex) < 0);
  add('tabindex', negTab.length, negTab.map((e) => `${snippet(e)} tabindex=${e.attrs.tabindex}`));

  const count = (rule) => issues.find((i) => i.rule === rule)?.count ?? 0;
  const critical = issues
    .filter((i) => i.rule !== 'tabindex')
    .reduce((sum, i) => sum + i.count, 0);
  const negativeTabindex = count('tabindex');
  return {
    h1: h1s.length,
    altMissing: count('alt'),
    unlabeledFields: count('label'),
    unlabeledButtons: count('buton'),
    negativeTabindex,
    critical,
    total: critical + negativeTabindex,
    issues,
  };
}

async function main() {
  const sceneArg = arg('scene', 'landing');
  const tpl = templateFor(sceneArg);
  const dirs = styleDirs(arg('styles', ''));
  const browser = findBrowser();

  const tmpDir = path.join(HERE, '.tmp-a11y');
  fs.mkdirSync(tmpDir, { recursive: true });

  const rows = [];
  // Profile directory one per process: two concurrently running checks
  // connect to chrome session and not get empty DOM (parsed by PID).
  const profile = path.join(tmpDir, `profile-${process.pid}`);
  try {
    for (const dirName of dirs) {
      const slug = dirName.replace(/^\d+-/, '');
      const template = fs.readFileSync(tpl.file, 'utf8');
      const htmlPath = path.join(tmpDir, `${dirName}-${sceneArg}.html`);
      fs.writeFileSync(htmlPath, fill(template, slug, dirName));
      const dom = await dumpDom(browser, htmlPath, profile);
      rows.push({ slug, dir: dirName, ...audit(dom) });
    }
  } finally {
    // Only my own temporary files: deleting the profile of another control running at the same time.
    for (const dirName of dirs) rmQuiet(path.join(tmpDir, `${dirName}-${sceneArg}.html`), 'temporary template');
    rmQuiet(profile, 'temporary profile directory');
    if (fs.existsSync(tmpDir) && fs.readdirSync(tmpDir).length === 0) rmQuiet(tmpDir, 'temporary directory');
  }

  const totals = rows.reduce(
    (acc, r) => ({
      styles: acc.styles + 1,
      critical: acc.critical + r.critical,
      negativeTabindex: acc.negativeTabindex + r.negativeTabindex,
      total: acc.total + r.total,
    }),
    { styles: 0, critical: 0, negativeTabindex: 0, total: 0 },
  );
  const exitCode = totals.critical > 0 ? 1 : 0;

  if (JSON_OUT) {
    console.log(
      JSON.stringify(
        {
          scene: sceneArg,
          template: path.relative(ROOT, tpl.file).replace(/\\/g, '/'),
          browser,
          warnOnly: WARN_ONLY,
          styles: rows.map((r) => ({
            slug: r.slug,
            dir: r.dir,
            h1: r.h1,
            altMissing: r.altMissing,
            unlabeledFields: r.unlabeledFields,
            unlabeledButtons: r.unlabeledButtons,
            negativeTabindex: r.negativeTabindex,
            critical: r.critical,
            total: r.total,
            issues: r.issues,
          })),
          totals,
          ok: totals.critical === 0,
          exitCode: WARN_ONLY ? 0 : exitCode,
        },
        null,
        2,
      ),
    );
  } else {
    const pad = (s, n) => String(s).padEnd(n);
    const padL = (s, n) => String(s).padStart(n);
    console.log(
      `Accessibility audit · scene: ${sceneArg} · template: ` +
        path.relative(ROOT, tpl.file).replace(/\\/g, '/'),
    );
    console.log(
      `${pad('style', 22)} ${padL('h1', 3)} ${padL('alt miss', 9)} ${padL('unlabelled', 14)} ` +
        `${padL('etiketsiz buton', 15)} ${padL('negatif tabindex', 16)} ${padL('toplam', 6)}`,
    );
    console.log('-'.repeat(90));
    for (const r of rows) {
      console.log(
        `${pad(r.dir, 22)} ${padL(r.h1, 3)} ${padL(r.altMissing, 9)} ${padL(r.unlabeledFields, 14)} ` +
          `${padL(r.unlabeledButtons, 15)} ${padL(r.negativeTabindex, 16)} ${padL(r.total, 6)}`,
      );
    }
    console.log('-'.repeat(90));
    console.log(
      `${totals.styles} styles · ${totals.critical} critical violations (h1/alt/label/button) · ` +
        `${totals.negativeTabindex} negatif tabindex · ${totals.total} toplam` +
        (WARN_ONLY ? '· --warn-only: output 0' : ''),
    );

    const withIssues = rows.filter((r) => r.issues.length);
    if (withIssues.length) {
      console.log('\nExamples:');
      for (const r of withIssues) {
        for (const i of r.issues) {
          const samples = i.samples.length ? ' — ' + i.samples.join(' | ') : '';
          console.log(`  × ${r.dir} · ${i.rule} (${i.count})${samples}`);
        }
      }
    } else {
      console.log('\nExamples: none');
    }
  }

  process.exitCode = WARN_ONLY ? 0 : exitCode;
}

/** CLI when run directly; When imported (tested), only audit() is turned on.*/
const SELF = fileURLToPath(import.meta.url).toLowerCase();
if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === SELF) {
  main().catch((err) => {
    console.error('HATA:', err.message);
    process.exit(2);
  });
}
