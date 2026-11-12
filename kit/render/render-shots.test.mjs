import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('./render-shots.mjs', import.meta.url), 'utf8');
const declaration = source.match(/^function writeManifest\(touchedDirs\) \{[\s\S]*?^\}/m);
assert.ok(declaration, 'Manifest üreticisi bulunmalı');

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
