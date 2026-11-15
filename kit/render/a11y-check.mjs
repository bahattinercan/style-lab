#!/usr/bin/env node
/**
 * kit/render/a11y-check.mjs — şablonların erişilebilirlik denetimi (bağımlılıksız).
 *
 * Yöntem: kit/render/<sahne>.html şablonu geçici bir dosyaya `__STYLE__` yerine
 * stil slug'ı konarak yazılır (tokens.css + scene.css linkleri korunur), Edge/Chrome
 * `--dump-dom` ile render edilmiş DOM alınır ve DOM regex tabanlı bir tarayıcıyla
 * denetlenir. npm bağımlılığı yok, şablonlar kalıcı olarak değiştirilmez.
 *
 * Kullanım:
 *   node kit/render/a11y-check.mjs --styles 01-minimalism,08-glassmorphism --scene landing
 *   node kit/render/a11y-check.mjs --scene landing            # tüm stiller
 *   node kit/render/a11y-check.mjs --styles y2k --scene landing --json
 *   node kit/render/a11y-check.mjs --styles y2k --scene landing --warn-only
 *
 * Denetimler (her biri sayı + örnek):
 *   1 h1        : <h1> sayısı tam 1 mi
 *   2 alt       : <img> içinde alt niteliği eksik olanlar (alt="" dekoratif kabul)
 *   3 etiket    : input/select/textarea için aria-label/-labelledby veya <label> yokluğu
 *   4 buton     : görünür metni ve aria-label'i olmayan .btn / button / a
 *   5 tabindex  : negatif tabindex değerleri (kritik değil)
 *
 * Çıkış kodu: kritik ihlal (1-4) varsa 1; yalnız 5 varsa 0; --warn-only her durumda 0.
 *
 * Tarayıcı: BROWSER ortam değişkeni veya render-shots.mjs'deki aday yollar.
 */
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
  throw new Error('Chromium tabanlı tarayıcı bulunamadı; BROWSER=/yol/tarayici ver');
}

/** Sahne adı → şablon: önce manifest (estate-landing → estate.html), sonra dosya adı. */
function templateFor(scene) {
  try {
    const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'kit', 'shots.manifest.json'), 'utf8'));
    const hit = (m.scenes ?? []).find((s) => s.key === scene || s.file?.startsWith(scene));
    if (hit?.tpl && fs.existsSync(path.join(HERE, hit.tpl))) {
      return { file: path.join(HERE, hit.tpl), name: hit.tpl };
    }
  } catch {
    /* manifest yoksa dosya adı eşlemesine düş */
  }
  for (const name of [`${scene}.html`, `${scene}s.html`]) {
    const p = path.join(HERE, name);
    if (fs.existsSync(p)) return { file: p, name };
  }
  throw new Error(`şablon yok: kit/render/${scene}.html (veya ${scene}s.html)`);
}

/** Stil dizinleri (`<nn>-<slug>`), slug ya da dizin adıyla eşleşir. */
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
    if (!hit) throw new Error(`eşleşen stil yok: ${w}`);
    picked.push(hit);
  }
  return picked;
}

/**
 * render-shots.mjs `fill()`'in sadeleştirilmiş hâli: yalnız DOM'u etkileyen kancalar
 * doldurulur (stil kimliği + ikonlar). Renk/radius/font yerleştirmesi erişilebilirlik
 * denetimi için gereksiz; tokens.css ve scene.css linkleri şablonda olduğu gibi kalır.
 */
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
    if (n <= 12) return 'Yüzey';
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
 * DOM'u `--dump-dom` ile alır. İki varyant denenir: varsayılan (virtual-time-budget
 * ile) ve bütçesiz. İkisi de DOM vermezse hata fırlatılır (STOP kuralı).
 */
async function dumpDom(browser, htmlPath, profile) {
  const url = 'file:///' + encodeURI(htmlPath.replace(/\\/g, '/'));
  const base = [
    '--headless=new',
    '--disable-gpu',
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
    const { stdout } = await run(browser, [...base, ...extra, '--dump-dom', url], {
      timeout: 90_000,
      maxBuffer: 32 * 1024 * 1024,
      windowsHide: true,
    }).catch((err) => ({ stdout: err.stdout ?? '' }));
    const html = String(stdout ?? '');
    if (/<body[\s>]/i.test(html)) return html;
    problems.push(extra.length ? 'virtual-time-budget' : 'bütçesiz');
  }
  throw new Error(
    `${path.basename(htmlPath)}: --dump-dom DOM vermedi (denenen varyant: ${problems.join(', ')}) — ` +
      'STOP: tarayıcı/DOM sorununu bildirin',
  );
}

function rmQuiet(target, label) {
  try {
    fs.rmSync(target, { recursive: true, force: true, maxRetries: 20, retryDelay: 250 });
  } catch (err) {
    console.warn(`uyarı: ${label} silinemedi (${target}): ${err.code ?? err.message}`);
  }
}

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const LABELABLE = new Set(['input', 'select', 'textarea']);

/** Kaba ama bağımlılıksız HTML tarayıcı: etiket + nitelik + metin ağacı. */
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

/** Erişilebilir ad/ metin: aria-hidden alt ağaç atlanır, <img alt> metne katılır. */
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

  // 1 · h1 sayısı tam 1 olmalı
  const h1s = els.filter((e) => e.tag === 'h1');
  if (h1s.length !== 1) {
    add('h1', h1s.length === 0 ? 1 : h1s.length - 1, [
      `${h1s.length} adet <h1> var (1 beklenir)` +
        (h1s[0] ? ` · ilk: ${norm(nameText(h1s[0])).slice(0, 40)}` : ''),
    ]);
  }

  // 2 · <img> alt eksik (alt="" dekoratif kabul)
  const imgsMissingAlt = els.filter((e) => e.tag === 'img' && !('alt' in e.attrs));
  add('alt', imgsMissingAlt.length, imgsMissingAlt.map(snippet));

  // 3 · form alanı etiketi: aria-label / aria-labelledby / <label>
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
  add('etiket', unlabeled.length, unlabeled.map(snippet));

  // 4 · tıklanabilir (button / a / .btn) görünür metin veya aria-label taşımalı
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

  // 5 · negatif tabindex (kritik değil)
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
    unlabeledFields: count('etiket'),
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
  // Profil dizini süreç başına tek: aynı anda koşan iki denetim birbirinin
  // krom oturumuna bağlanıp boş DOM almasın (PID ile ayrışır).
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
    // Yalnız kendi geçici dosyalarım: aynı anda koşan başka bir denetimin profilini silme.
    for (const dirName of dirs) rmQuiet(path.join(tmpDir, `${dirName}-${sceneArg}.html`), 'geçici şablon');
    rmQuiet(profile, 'geçici profil dizini');
    if (fs.existsSync(tmpDir) && fs.readdirSync(tmpDir).length === 0) rmQuiet(tmpDir, 'geçici dizin');
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
      `Erişilebilirlik denetimi · sahne: ${sceneArg} · şablon: ` +
        path.relative(ROOT, tpl.file).replace(/\\/g, '/'),
    );
    console.log(
      `${pad('stil', 22)} ${padL('h1', 3)} ${padL('alt eksik', 9)} ${padL('etiketsiz alan', 14)} ` +
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
      `${totals.styles} stil · ${totals.critical} kritik ihlal (h1/alt/etiket/buton) · ` +
        `${totals.negativeTabindex} negatif tabindex · ${totals.total} toplam` +
        (WARN_ONLY ? ' · --warn-only: çıkış 0' : ''),
    );

    const withIssues = rows.filter((r) => r.issues.length);
    if (withIssues.length) {
      console.log('\nÖrnekler:');
      for (const r of withIssues) {
        for (const i of r.issues) {
          const samples = i.samples.length ? ' — ' + i.samples.join(' | ') : '';
          console.log(`  × ${r.dir} · ${i.rule} (${i.count})${samples}`);
        }
      }
    } else {
      console.log('\nÖrnekler: yok');
    }
  }

  process.exitCode = WARN_ONLY ? 0 : exitCode;
}

/** Doğrudan çalıştırıldığında CLI; import edildiğinde (test) yalnız audit() açılır. */
const SELF = fileURLToPath(import.meta.url).toLowerCase();
if (process.argv[1] && path.resolve(process.argv[1]).toLowerCase() === SELF) {
  main().catch((err) => {
    console.error('HATA:', err.message);
    process.exit(2);
  });
}
