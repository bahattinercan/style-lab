#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE = path.join(ROOT, 'kit', 'render', 'visual-baseline.json');
const MIN_DISTANCE = 24;
const SELF_TEST = process.argv.includes('--self-test');

export function hamming(a, b) {
  if (a.length !== b.length) throw new Error('hash lengths differ');
  let distance = 0;
  for (let i = 0; i < a.length; i += 1) {
    let bits = a[i] ^ b[i];
    while (bits) {
      distance += bits & 1;
      bits >>>= 1;
    }
  }
  return distance;
}

export function nearPairs(styles, threshold = MIN_DISTANCE) {
  const rows = Object.entries(styles).map(([slug, shots]) => {
    const signature = shots['01-page.png'];
    if (!signature) throw new Error(`${slug}: 01-page.png signature missing`);
    return { slug, hash: Buffer.from(signature.split(':')[0], 'hex') };
  });
  const pairs = [];
  for (let i = 0; i < rows.length; i += 1) {
    for (let j = i + 1; j < rows.length; j += 1) {
      const distance = hamming(rows[i].hash, rows[j].hash);
      if (distance < threshold) pairs.push({ distance, a: rows[i].slug, b: rows[j].slug });
    }
  }
  return pairs.sort((a, b) => a.distance - b.distance || a.a.localeCompare(b.a));
}

function selfTest() {
  const same = Buffer.from('00', 'hex');
  const apart = Buffer.from('ff', 'hex');
  if (hamming(same, same) !== 0 || hamming(same, apart) !== 8) throw new Error('Hamming self-test failed');
  const pairs = nearPairs({ a: { '01-page.png': '00:000000' }, b: { '01-page.png': 'ff:ffffff' } }, 8);
  if (pairs.length !== 0) throw new Error('threshold self-test failed');
  console.log('self-test: bit distance and strict threshold pass');
}

if (SELF_TEST) {
  selfTest();
} else {
  const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
  const pairs = nearPairs(baseline.styles);
  if (pairs.length) {
    for (const pair of pairs) console.log(`! ${pair.distance}/256 · ${pair.a} ↔ ${pair.b}`);
  }
  console.log(`distinctness · ${Object.keys(baseline.styles).length} styles · minimum ${MIN_DISTANCE}/256 · ${pairs.length} near pairs`);
  process.exitCode = pairs.length ? 1 : 0;
}
