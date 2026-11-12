import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('./cdp-browser.mjs', import.meta.url), 'utf8');
const invocation = source.match(/const proc = (spawn\([\s\S]*?\n  \));/);
assert.ok(invocation, 'Tarayıcı başlatma çağrısı bulunmalı');

for (const platform of ['linux', 'win32', 'darwin']) {
  test(`${platform}: tarayıcı başlatma bayrakları`, () => {
    let args;
    vm.runInNewContext(invocation[1], {
      browser: 'test-browser',
      profile: 'test-profile',
      process: { platform },
      spawn(executable, flags, options) {
        assert.equal(executable, 'test-browser');
        assert.equal(options.windowsHide, true);
        args = Array.from(flags);
      },
    });
    assert.ok(args.includes('--headless=new'));
    assert.ok(args.includes('--user-data-dir=test-profile'));
    assert.equal(args.includes('--no-sandbox'), platform === 'linux');
    assert.equal(args.includes('--disable-dev-shm-usage'), platform === 'linux');
  });
}
