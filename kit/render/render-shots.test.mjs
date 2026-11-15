import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('./render-shots.mjs', import.meta.url), 'utf8');
const declaration = source.match(/^function writeManifest\(touchedDirs\) \{[\s\S]*?^\}/m);
assert.ok(declaration, 'Manifest üreticisi bulunmalı');
const fillDeclaration = source.match(/^function fill\([\s\S]*?^\}/m);
assert.ok(fillDeclaration, 'HTML doldurucusu bulunmalı');

test('tek stil üretimi diğer stillerin manifest kayıtlarını korur', () => {
  const stylesDir = path.resolve('test-styles');
  const cacheDir = path.resolve('test-cache');
  const renderDir = path.resolve('test-render');
  const meta = { key: 'landing', w: 1280, h: 900, bytes: 42 };
  let manifest = { styles: {
    minimalism: { '01-landing.png': meta, 'removed.png': meta },
    removed: { '01-landing.png': meta },
  } };
  const files = new Set([
    path.join(renderDir, 'landing.html'),
    path.join(stylesDir, '01-minimalism', 'shots', '01-landing.png'),
    path.join(stylesDir, '151-dark-dashboard', 'shots', '01-landing.png'),
  ]);
  const context = vm.createContext({
    path, fs: { existsSync: (file) => files.has(file) },
    HERE: renderDir, STYLES_DIR: stylesDir, CACHE_DIR: cacheDir,
    SCENES: [{ key: 'landing', file: '01-landing.png', tpl: 'landing.html', width: 1280, height: 900 }],
    allStyleDirs: () => ['01-minimalism', '151-dark-dashboard'],
    ownManifestEntries: () => ({ 'dark-dashboard': { '01-landing.png': meta } }),
    readManifest: () => structuredClone(manifest),
    writeManifestAtomic: (value) => { manifest = structuredClone(value); },
    acquireManifestLock: () => true,
    releaseManifestLock: () => {},
    console,
  });
  vm.runInContext(declaration[0], context);
  context.writeManifest(['151-dark-dashboard']);
  assert.deepEqual(manifest.styles.minimalism, { '01-landing.png': meta });
  assert.deepEqual(manifest.styles['dark-dashboard'], { '01-landing.png': meta });
  assert.equal(manifest.styles.removed, undefined);
});

function fillForTest() {
  const context = vm.createContext({
    DEFAULT_LAYOUT: { hero: 'split', nav: 'inline', density: 'balanced' },
    LAYOUT_DEFS: { sections: [] }, REFIT: false,
    FAMILY_OF: () => 'Test',
    partial: () => '', inlineTypeScale: () => '', applySectionPlan: (html) => html,
    icon: () => '', h1Lines: (value) => value,
  });
  vm.runInContext(fillDeclaration[0], context);
  return context.fill;
}

test('motif.css içeriği sahnenin ortak style bloğuna eklenir', () => {
  const fill = fillForTest();
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'render-motif-'));
  const motifFile = path.join(fixture, 'motif.css');
  fs.writeFileSync(motifFile, '.motif-ripple::before { content: ""; }');
  const motifCss = fs.readFileSync(motifFile, 'utf8');
  const html = fill('<!-- NAV --><!-- HERO --><style id="extra"></style>', 'demo', {
    motif: 'ripple', extraCss: '.base { color: var(--ink); }', scenes: { 'page': '.scene { display: block; }' },
  }, '999', {}, 'page', undefined, null, null, motifCss);
  assert.match(html, /\.base \{ color: var\(--ink\); \}[\s\S]*\.scene \{ display: block; \}[\s\S]*\.motif-ripple::before/);
  assert.equal((html.match(/<style>/g) ?? []).length, 1);
  fs.rmSync(fixture, { recursive: true, force: true });
});

test('imagery.art, imagery.photo varsa __PHOTO__ için öncelik alır', () => {
  const fill = fillForTest();
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'render-art-'));
  const tokensFile = path.join(fixture, 'tokens.json');
  fs.writeFileSync(tokensFile, JSON.stringify({ imagery: { art: 'gen/demo.svg', photo: 'photo.jpg', treatment: { mode: 'plain', strength: 0 } } }));
  const imagery = JSON.parse(fs.readFileSync(tokensFile, 'utf8')).imagery;
  const html = fill('<!-- NAV --><!-- HERO --><style id="extra"></style>__PHOTO__', 'demo', {}, '999', {}, 'page', undefined, imagery);
  assert.match(html, /\.\.\/images\/gen\/demo\.svg/);
  assert.doesNotMatch(html, /\.\.\/images\/photo\.jpg/);
  fs.rmSync(fixture, { recursive: true, force: true });
});
