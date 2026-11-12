#!/usr/bin/env node
/**
 * kit/link-skill.mjs — ajan prosedürlerini kullanıcı keşif yoluna bağlar ve frontmatter'ını
 * YAML ayrıştırıcısıyla doğrular (tek kaynak: repo içi skills/).
 *
 * Kanonik dosyalar repoda `skills/` altında durur; kullanıcı düzeyindeki `~/.agents/skills/`
 * dizinine yalnız bir bağ (Windows: junction, POSIX: symlink) konur:
 * kopya yok → drift yok.
 *
 * Kullanım:
 *   node kit/link-skill.mjs status     # bağ + frontmatter YAML kontrolü
 *   node kit/link-skill.mjs install    # bağı kur (varsa hedefi güncelle)
 *   node kit/link-skill.mjs remove     # yalnız bağı siler (hedef klasöre DOKUNMAZ)
 *
 * Güvenlik: kaldırma işlemi bağ üzerinde `DirectoryInfo.Delete()` / `unlink` kullanır; asla
 * `rm -rf` veya `Remove-Item -Recurse` çağırmaz (o yollar bağın hedefini silebilir).
 *
 * YAML notu: `description` düz skalerinde ": " geçerse YAML "nested mapping" hatası verir.
 * Bu yüzden uzun açıklamalar `description: >-` blok skaleriyle yazılır; bu araç
 * aynı hatayı önceden yakalar.
 */
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

/** Önce yerel 'yaml' paketini, sonra STYLE_LAB_YAML_RELEASES altındaki sürümleri arar. */
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

/** Frontmatter'ı YAML ayrıştırıcısıyla doğrular. */
async function lint(name) {
  const file = path.join(ROOT, 'skills', name, 'SKILL.md');
  const raw = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  if (!raw.startsWith('---')) return ['frontmatter yok (dosya --- ile başlamalı)'];
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return ['frontmatter kapanışı (---) yok'];
  const yaml = await resolveYaml();
  if (!yaml) return ['uyarı: yaml paketi bulunamadı, frontmatter denetlenmedi'];
  let data;
  try {
    data = yaml.parse(raw.slice(4, end)) ?? {};
  } catch (err) {
    return ['YAML hatası: ' + String(err.message).split('\n')[0]];
  }
  const problems = [];
  if (data.name !== name) problems.push(`name (${data.name}) klasör adıyla (${name}) aynı değil`);
  const d = data.description;
  if (typeof d !== 'string' || !d.trim()) problems.push('description yok/boş');
  else if (d.length > 1024) problems.push(`description ${d.length} karakter (>1024)`);
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
    console.log(`  kaynak      : ${source}`);
    console.log(`  bağ         : ${link} ${target ? '✓' : '— yok'}`);
    console.log(`  hedef doğru : ${target ? (same ? '✓' : '× güncel değil (install)') : '—'}`);
    console.log(`  okunabilir  : ${readable ? '✓ SKILL.md bağ üzerinden açılıyor' : '× bağ kırık'}`);
    console.log(`  frontmatter : ${yamlProblems.length ? '× ' + yamlProblems.join('; ') : '✓ YAML geçerli (name + description)'}`);
    if (!same || yamlProblems.length || !readable) bad++;
  }
  if (!SKILL_DIRS.length) {
    console.log('skills/ altında SKILL.md bulunamadı');
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
    console.log(`bağ kaldırıldı (hedef korundu): ${link}`);
    touched++;
  }
  if (!touched) console.log('kaldırılacak bağ yok');
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
    console.log(`${ok ? '✓ bağlandı' : '× BAŞARISIZ'}: ${link} → ${source}`);
    if (!ok) bad++;
  }
  console.log('Bağ kuruldu; prosedürleri yeniden keşfetmek için ajanınızın oturumunu yenileyin.');
  return bad ? 1 : 0;
}

const cmd = process.argv[2] ?? 'status';
const code = cmd === 'install' ? install() : cmd === 'remove' ? remove() : await status();
process.exit(code);
