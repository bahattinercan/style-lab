#!/usr/bin/env node
/**
 * refs/design-resources/analyze.mjs — dondurulmuş markdown kataloğunu ayrıştırır.
 *
 * Girdi : readme.snapshot.md (bradtraversy/design-resources-for-developers, 2026-10-18 snapshot)
 * Çıktı : rows.json (kayıt listesi) + konsol istatistiği
 *
 * Kullanım:
 *   node refs/design-resources/analyze.mjs
 *   node refs/design-resources/analyze.mjs --json     # sadece özet JSON
 *
 * Tuzak: dosya CRLF gelir; `\r` temizlenmeden /^## (.+)$/ regex'i hiç tutmaz.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SNAPSHOT = path.join(HERE, 'readme.snapshot.md');
const OUT = path.join(HERE, 'rows.json');
const QUIET = process.argv.includes('--json');

const md = fs.readFileSync(SNAPSHOT, 'utf8').replace(/\r/g, '').split('\n');

let section = '(basliksiz)';
const sections = new Map([[section, 0]]);
const rows = [];

for (const line of md) {
  const heading = line.match(/^##\s+(.+)$/);
  if (heading) {
    section = heading[1].trim();
    if (!sections.has(section)) sections.set(section, 0);
    continue;
  }
  if (!line.startsWith('|')) continue;
  const cells = line.split('|').map((cell) => cell.trim());
  if (cells.length < 3) continue;
  if (/^[-: ]+$/.test(cells[1])) continue; // ayırıcı satır
  if (/^website/i.test(cells[1])) continue; // tablo başlığı
  const match = cells[1].match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
  if (!match) continue;
  sections.set(section, sections.get(section) + 1);
  rows.push({ section, name: match[1], url: match[2], desc: cells[2] ?? '' });
}

const host = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '?';
  }
};

const normalise = (url) =>
  url
    .replace(/\/$/, '')
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, '');

const duplicates = [...rows.reduce((acc, row) => acc.set(normalise(row.url), (acc.get(normalise(row.url)) ?? 0) + 1), new Map())]
  .filter(([, count]) => count > 1)
  .map(([url, count]) => ({ url, count }));

const bySection = [...sections]
  .filter(([name]) => name !== '(basliksiz)' && name !== 'Table of Contents')
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count);

const domains = rows.reduce((acc, row) => acc.set(host(row.url), (acc.get(host(row.url)) ?? 0) + 1), new Map());
const topDomains = [...domains]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15)
  .map(([domain, count]) => ({ domain, count }));

fs.writeFileSync(OUT, JSON.stringify(rows));

const summary = {
  kaynak: 'bradtraversy/design-resources-for-developers (2026-10-18 dondurulmus snapshot)',
  toplamKayit: rows.length,
  bolumSayisi: bySection.length,
  benzersizDomain: domains.size,
  tekrarEdenUrl: duplicates.length,
  bolumler: bySection,
  enCokGecenDomain: topDomains,
  tekrarlar: duplicates,
};

if (QUIET) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(`kayit: ${summary.toplamKayit} | bolum: ${summary.bolumSayisi} | domain: ${summary.benzersizDomain}`);
  console.log(`tekrar eden URL: ${duplicates.length}`);
  console.log('\n== bolum bazinda ==');
  for (const { name, count } of bySection) console.log(String(count).padStart(4), name);
  console.log('\n== en cok gecen domain ==');
  for (const { domain, count } of topDomains) console.log(String(count).padStart(4), domain);
  console.log(`\nrows.json yazildi: ${rows.length} kayit`);
}
