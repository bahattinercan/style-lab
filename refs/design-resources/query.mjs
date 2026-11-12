#!/usr/bin/env node
/**
 * refs/design-resources/query.mjs — katalogda ara; istege gore olu linkleri ele.
 *
 * Girdi : rows.json (+ varsa link-health.json ile link durumu)
 * Kullanim:
 *   node refs/design-resources/query.mjs --q mockup
 *   node refs/design-resources/query.mjs --section "Stock Photos" --alive
 *   node refs/design-resources/query.mjs --q pattern --alive --limit 10
 *   node refs/design-resources/query.mjs --sections
 *   node refs/design-resources/query.mjs --q ikon --json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(`--${name}`);
const value = (name, fallback = '') => {
  const index = argv.indexOf(`--${name}`);
  return index === -1 ? fallback : (argv[index + 1] ?? fallback);
};

const rows = JSON.parse(fs.readFileSync(path.join(HERE, 'rows.json'), 'utf8'));

if (flag('sections')) {
  const counts = rows.reduce((acc, row) => acc.set(row.section, (acc.get(row.section) ?? 0) + 1), new Map());
  for (const [section, count] of [...counts].sort((a, b) => b[1] - a[1])) {
    console.log(String(count).padStart(4), section);
  }
  process.exit(0);
}

const healthPath = path.join(HERE, 'link-health.json');
const health = fs.existsSync(healthPath)
  ? new Map(JSON.parse(fs.readFileSync(healthPath, 'utf8')).map((entry) => [entry.url, entry]))
  : new Map();

const query = value('q').toLocaleLowerCase('tr');
const section = value('section').toLocaleLowerCase('tr');
const limit = Number(value('limit', '40'));

let hits = rows.filter((row) => {
  const haystack = `${row.name} ${row.desc} ${row.url}`.toLocaleLowerCase('tr');
  const inQuery = !query || haystack.includes(query);
  const inSection = !section || row.section.toLocaleLowerCase('tr').includes(section);
  return inQuery && inSection;
});

const statusOf = (row) => {
  const entry = health.get(row.url);
  if (!entry) return '?';
  if ([404, 410].includes(entry.status) || ['ENOTFOUND', 'EAI_AGAIN'].includes(entry.error)) return 'OLU';
  if ([401, 402, 403, 429].includes(entry.status)) return 'bot';
  if (entry.status === 0 || entry.status >= 500) return 'hata';
  return 'ok';
};

if (flag('alive')) hits = hits.filter((row) => ['ok', 'bot', '?'].includes(statusOf(row)));

if (flag('json')) {
  console.log(JSON.stringify(hits.slice(0, limit).map((row) => ({ ...row, durum: statusOf(row) })), null, 2));
} else {
  if (!hits.length) console.log('eslesme yok');
  for (const row of hits.slice(0, limit)) {
    console.log(`${statusOf(row).padEnd(5)} ${row.name.slice(0, 30).padEnd(31)} ${row.url}`);
    if (row.desc) console.log(`      ${row.desc.slice(0, 96)}`);
  }
  if (hits.length > limit) console.log(`\n... ${hits.length - limit} sonuc daha (--limit ${hits.length})`);
}
