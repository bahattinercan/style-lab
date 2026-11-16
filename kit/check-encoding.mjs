#!/usr/bin/env node
/**
 * kit/check-encoding.mjs — UTF-8 text encoding and mojibake regression port.
 *
 * Checked patterns:
 * - CP1252/UTF-8 dual encoding (mojibake) fingerprints: Â· Ã¼ Ã§ Ã– Ãœ Ã— â† â‚¬
 * - UTF-8 Byte Order Mark (BOM / 0xEF 0xBB 0xBF / U+FEFF)
 *
 * Target assets:
 * - kit/build-live.mjs
 * - kit/live/**
 * - kit/live.html
 * - kit/gallery.html
 * - kit/gallery.data.mjs
 * - kit/live-styles.js
 * - AGENTS.md
 * - TESTING.md
 * - playbook.md
 * - docs/**
 *
 * Usage:
 * node kit/check-encoding.mjs # gate (exit 1 if found)
 * node kit/check-encoding.mjs --json # JSON output
 * node kit/check-encoding.mjs --self-test # synthetic damaged and clean fixture testing*/
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const JSON_OUT = process.argv.includes('--json');
const SELF_TEST = process.argv.includes('--self-test');

const FINGERPRINTS = ['Â·', 'Ã¼', 'Ã§', 'Ã–', 'Ãœ', 'Ã—', 'â†', 'â‚¬'];

export function scanFile(filePath, rootDir = ROOT) {
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const buffer = fs.readFileSync(filePath);
  const hits = [];

  // UTF-8 BOM check (0xEF, 0xBB, 0xBF)
  if (buffer.length >= 3 && buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf) {
    hits.push({
      file: relPath,
      line: 1,
      col: 1,
      type: 'BOM',
      pattern: 'UTF-8 BOM',
      message: 'UTF-8 BOM detected',
    });
  }

  const content = buffer.toString('utf8');
  const lines = content.split(/\r?\n/);

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    for (const fp of FINGERPRINTS) {
      const colIdx = line.indexOf(fp);
      if (colIdx !== -1) {
        hits.push({
          file: relPath,
          line: lineIdx + 1,
          col: colIdx + 1,
          type: 'mojibake',
          pattern: fp,
          message: `mojibake fingerprint "${fp}"`,
        });
      }
    }
  }

  return hits;
}

export function collectTargetFiles(rootDir = ROOT) {
  const targets = [];

  function addFileIfExists(rel) {
    const full = path.join(rootDir, rel);
    if (fs.existsSync(full) && fs.statSync(full).isFile()) {
      targets.push(full);
    }
  }

  function addDirFiles(rel) {
    const full = path.join(rootDir, rel);
    if (!fs.existsSync(full)) return;
    for (const entry of fs.readdirSync(full, { withFileTypes: true, recursive: true })) {
      if (entry.isFile()) {
        targets.push(path.join(entry.parentPath || full, entry.name));
      }
    }
  }

  addFileIfExists('kit/build-live.mjs');
  addDirFiles('kit/live');
  addFileIfExists('kit/live.html');
  addFileIfExists('kit/gallery.html');
  addFileIfExists('kit/gallery.data.mjs');
  addFileIfExists('kit/live-styles.js');
  addFileIfExists('AGENTS.md');
  addFileIfExists('TESTING.md');
  addFileIfExists('playbook.md');
  addDirFiles('docs');

  return targets;
}

export function selfTest() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'check-encoding-test-'));
  try {
    const cleanFile = path.join(tempDir, 'clean.txt');
    fs.writeFileSync(cleanFile, 'Preview toolbar · 1280×2400 ← ↗ — clean UTF-8', 'utf8');

    const cleanHits = scanFile(cleanFile, tempDir);
    if (cleanHits.length !== 0) {
      throw new Error(`Clean fixture unexpectedly flagged: ${JSON.stringify(cleanHits)}`);
    }

    const mojibakeFile = path.join(tempDir, 'damaged-mojibake.txt');
    fs.writeFileSync(mojibakeFile, 'Damaged row: 01 Â· Style Preview Ã¼ Ã—', 'utf8');

    const mojibakeHits = scanFile(mojibakeFile, tempDir);
    if (mojibakeHits.length === 0) {
      throw new Error('Damaged mojibake fixture was not detected');
    }
    const patternsFound = new Set(mojibakeHits.map((h) => h.pattern));
    if (!patternsFound.has('Â·') || !patternsFound.has('Ã¼') || !patternsFound.has('Ã—')) {
      throw new Error(`Expected fingerprints missing in findings: ${[...patternsFound].join(', ')}`);
    }

    const bomFile = path.join(tempDir, 'damaged-bom.txt');
    fs.writeFileSync(bomFile, Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), Buffer.from('File starting with BOM', 'utf8')]));

    const bomHits = scanFile(bomFile, tempDir);
    if (bomHits.length === 0 || !bomHits.some((h) => h.type === 'BOM')) {
      throw new Error('Damaged BOM fixture was not detected');
    }

    return true;
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function main() {
  if (SELF_TEST) {
    try {
      selfTest();
      console.log('check-encoding: self-test clean');
      process.exitCode = 0;
      return;
    } catch (err) {
      console.error('check-encoding: self-test failed:' + err.message);
      process.exitCode = 1;
      return;
    }
  }

  const files = collectTargetFiles(ROOT);
  const allHits = [];

  for (const file of files) {
    const hits = scanFile(file, ROOT);
    if (hits.length) {
      allHits.push(...hits);
    }
  }

  if (JSON_OUT) {
    console.log(
      JSON.stringify(
        {
          filesScanned: files.length,
          findingsCount: allHits.length,
          clean: allHits.length === 0,
          findings: allHits,
        },
        null,
        2
      )
    );
  } else {
    if (allHits.length) {
      for (const hit of allHits) {
        console.error(`${hit.file}:${hit.line}: ${hit.message}`);
      }
      console.error(`check-encoding: ${allHits.length} findings (${files.length} files scanned)`);
    } else {
      console.log(`check-encoding: clean (${files.length} files scanned)`);
    }
  }

  if (allHits.length > 0) {
    process.exitCode = 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  main();
}
