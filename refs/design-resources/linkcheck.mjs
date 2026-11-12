#!/usr/bin/env node
/**
 * refs/design-resources/linkcheck.mjs — katalogdaki her linki dener, ölü olanları ayırır.
 *
 * Girdi : rows.json (analyze.mjs üretir)
 * Çıktı : link-health.json (ham sonuç) · olu-linkler.md (tüm sorunlular)
 *         olu-linkler-kesin.md (yalnız 404/410/DNS yok — gerçekten ölü)
 *
 * Kullanım:
 *   node refs/design-resources/linkcheck.mjs                 # 1249 link, ~2 dk
 *   node refs/design-resources/linkcheck.mjs --limit 100     # ilk 100 kayıt (hızlı deneme)
 *   node refs/design-resources/linkcheck.mjs --concurrency 40
 *
 * Not: 403/429 dönenler ölü sayılmaz — bot korumasıdır, çoğu sağdır.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const arg = (name, fallback) => {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? fallback : Number(process.argv[index + 1]);
};

const CONCURRENCY = arg('concurrency', 25);
const LIMIT = arg('limit', Infinity);
const TIMEOUT = arg('timeout', 9000);
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';

const rows = JSON.parse(fs.readFileSync(path.join(HERE, 'rows.json'), 'utf8')).slice(0, LIMIT);

async function probe(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  const request = async (method) => {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: 'text/html,*/*' },
    });
    return response.status;
  };
  try {
    let status = await request('HEAD');
    if ([403, 405, 429, 501].includes(status)) status = await request('GET');
    return { status, error: null };
  } catch (error) {
    const code = error.name === 'AbortError' ? 'timeout' : String(error.cause?.code ?? error.message);
    return { status: 0, error: code.slice(0, 60) };
  } finally {
    clearTimeout(timer);
  }
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < rows.length) {
    const row = rows[cursor++];
    results.push({ ...row, ...(await probe(row.url)) });
    if (results.length % 100 === 0) process.stderr.write(`${results.length}/${rows.length}\n`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const isDead = (row) => row.status === 0 || row.status >= 400;
const isGone = (row) => [404, 410].includes(row.status) || ['ENOTFOUND', 'EAI_AGAIN'].includes(row.error);
const dead = results.filter(isDead);
const gone = results.filter(isGone);
const blocked = results.filter((row) => [401, 402, 403, 429].includes(row.status));

const row = (entry) => `| ${entry.section} | ${entry.name.replace(/\|/g, '\\|')} | ${entry.url} | ${entry.status || entry.error} |`;
const table = (entries) =>
  ['| Bolum | Ad | URL | Durum |', '|---|---|---|---|', ...entries.map(row)].join('\n') + '\n';

fs.writeFileSync(path.join(HERE, 'link-health.json'), JSON.stringify(results));
fs.writeFileSync(
  path.join(HERE, 'olu-linkler.md'),
  `# Sorunlu linkler (${dead.length}/${results.length})\n\n` +
    '403/429 cogu bot korumasi; gercek oluler icin `olu-linkler-kesin.md`.\n\n' +
    table(dead),
);
fs.writeFileSync(
  path.join(HERE, 'olu-linkler-kesin.md'),
  `# Kesin olu linkler (${gone.length}/${results.length})\n\n` + table(gone),
);

const errorCounts = dead.reduce((acc, entry) => {
  const key = entry.status === 0 ? entry.error : String(entry.status);
  return acc.set(key, (acc.get(key) ?? 0) + 1);
}, new Map());

console.log(`denenen: ${results.length} | erisilebilir: ${results.length - dead.length} | sorunlu: ${dead.length}`);
console.log(`kesin olu: ${gone.length} | bot korumasi: ${blocked.length}`);
console.log('\n== sorun turleri ==');
for (const [key, count] of [...errorCounts].sort((a, b) => b[1] - a[1])) {
  console.log(String(count).padStart(4), key);
}
console.log('\n-> link-health.json, olu-linkler.md, olu-linkler-kesin.md yazildi');
