#!/usr/bin/env node
/**
 * kit/link-skill.mjs — links agent procedures to the user discovery path and sets its frontmatter
 * Validates with YAML parser (single source: skills/ in-repo).
 *
 * Canonical files reside in the repo under `skills/`; user level `~/.agents/skills/`
 A single link (Windows: junction, POSIX: symlink) is placed in the * directory:
 * no duplicates → no drift.
 *
 * Usage:
 * node kit/link-skill.mjs status # link + frontmatter YAML control
 * node kit/link-skill.mjs install # install the link (update target if present)
 * node kit/link-skill.mjs remove # deletes the link only (DOES NOT touch the target folder)
 *
 * Security: removal uses `DirectoryInfo.Delete()` / `unlink` on the link; never
 * Does not call `rm -rf` or `Remove-Item -Recurse` (those routes can delete the target of the link).
 *
 * YAML note: If ": " is passed in the plain scalar `description`, YAML will give a "nested mapping" error.
 * That's why long descriptions are written with `description: >-` block scalar; this tool
 * catches the same error from before.*/
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILL_DIRS = fs
  .readdirSync(path.join(ROOT, 'skills'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, 'skills', d.name, 'SKILL.md')))
  .map((d) => d.name);

const TARGET_DIR = path.join(os.homedir(), '.agents', 'skills');
const IS_WIN = process.platform === 'win32';

const ps = (script) => execFileSync('powershell', ['-NoProfile', '-Command', script], { encoding: 'utf8' }).trim();

/** It first searches for the native 'yaml' package, then for versions under STYLE_LAB_YAML_RELEASES.*/
async function resolveYaml() {
  try {
    return await import('yaml');
  } catch {}
  try {
    const base = path.resolve(process.env.STYLE_LAB_YAML_RELEASES ?? path.join(os.homedir(), '.pi', 'agent', 'install', 'releases'));
    const rel = fs.readdirSync(base).sort().at(-1);
    const mod = path.join(base, rel, 'node_modules', 'yaml', 'dist', 'index.js');
    if (fs.existsSync(mod)) return await import(pathToFileURL(mod).href);
  } catch {}
  return null;
}

/** Validates frontmatter with YAML parser.*/
async function lint(name) {
  const file = path.join(ROOT, 'skills', name, 'SKILL.md');
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (!raw.startsWith('---')) return ['no frontmatter (file must start with ---)'];
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return ['no frontmatter closure (---)'];
  const yaml = await resolveYaml();
  if (!yaml) return ['warning: yaml package not found, frontmatter not checked'];
  let data;
  try {
    data = yaml.parse(raw.slice(4, end)) ?? {};
  } catch (err) {
    return ['YAML error:' + String(err.message).split('\n')[0]];
  }
  const problems = [];
  if (data.name !== name) problems.push(`name (${data.name}) does not match the folder name (${name})`);
  const d = data.description;
  if (typeof d !== 'string' || !d.trim()) problems.push('description is missing/empty');
  else if (d.length > 1024) problems.push(`description is ${d.length} characters (>1024)`);
  return problems;
}

function linkOf(name) {
  const link = path.join(TARGET_DIR, name);
  try {
    if (IS_WIN)
      return {
        link,
        target: ps(`(Get-Item -LiteralPath '${link}' -ErrorAction SilentlyContinue).Target`)
          .split(/\r?\n/)
          .pop()
          .trim(),
      };
    return { link, target: fs.readlinkSync(link) };
  } catch {
    return { link, target: null };
  }
}

async function status() {
  let bad = 0;
  for (const name of SKILL_DIRS) {
    const source = path.join(ROOT, 'skills', name);
    const { link, target } = linkOf(name);
    const resolved = target ? path.resolve(TARGET_DIR, target) : null;
    const same = resolved ? path.resolve(resolved) === path.resolve(source) : false;
    const [yamlProblems] = await Promise.all([lint(name)]);
    const readable = target ? fs.existsSync(path.join(link, 'SKILL.md')) : false;

    console.log(`skill         : ${name}`);
    console.log(`  source      : ${source}`);
    console.log(`  link        : ${link} ${target ? '✓' : '— missing'}`);
    console.log(`  target ok   : ${target ? (same ? '✓' : '× out of date (install)') : '—'}`);
    console.log(`  readable    : ${readable ? '✓ SKILL.md opens via link' : '× link broken'}`);
    console.log(`  frontmatter : ${yamlProblems.length ? '× ' + yamlProblems.join('; ') : '✓ YAML is valid (name + description)'}`);
    if (!same || yamlProblems.length || !readable) bad++;
  }
  if (!SKILL_DIRS.length) {
    console.log('SKILL.md not found under skills/');
    return 1;
  }
  return bad ? 1 : 0;
}

function remove() {
  let touched = 0;
  for (const name of SKILL_DIRS) {
    const { link, target } = linkOf(name);
    if (!target) continue;
    if (IS_WIN) ps(`(Get-Item -LiteralPath '${link}').Delete()`);
    else fs.unlinkSync(link);
    console.log(`link removed (target kept): ${link}`);
    touched++;
  }
  if (!touched) console.log('There are no ties to remove');
  return 0;
}

function install() {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  let bad = 0;
  for (const name of SKILL_DIRS) {
    const source = path.join(ROOT, 'skills', name);
    const link = path.join(TARGET_DIR, name);
    const existing = linkOf(name).target;
    if (existing) {
      if (IS_WIN) ps(`(Get-Item -LiteralPath '${link}').Delete()`);
      else fs.unlinkSync(link);
    }
    if (IS_WIN) ps(`New-Item -ItemType Junction -Path '${link}' -Target '${source}' | Out-Null`);
    else fs.symlinkSync(source, link, 'dir');
    const ok = fs.existsSync(path.join(link, 'SKILL.md'));
    console.log(`${ok ? '✓ connected' : '× FAILED'}: ${link} → ${source}`);
    if (!ok) bad++;
  }
  console.log('The bond was established; Refresh your agent's session to rediscover procedures.');
  return bad ? 1 : 0;
}

const cmd = process.argv[2] ?? 'status';
const code = cmd === 'install' ? install() : cmd === 'remove' ? remove() : await status();
process.exit(code);
