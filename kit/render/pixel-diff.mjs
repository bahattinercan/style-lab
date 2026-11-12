#!/usr/bin/env node
/**
 * kit/render/pixel-diff.mjs — Bağımlılıksız PNG piksel karşılaştırma aracı
 *
 * Kullanım:
 *   node kit/render/pixel-diff.mjs --a <png> --b <png> [--threshold 0.1] [--json]
 */
import fs from 'node:fs';
import { decodePng } from './png.mjs';

function parseArgs(argv) {
  let fileA = null;
  let fileB = null;
  let threshold = 0.1;
  let json = false;
  let help = false;

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--a' || arg === '-a') {
      fileA = argv[++i];
    } else if (arg.startsWith('--a=')) {
      fileA = arg.slice(4);
    } else if (arg === '--b' || arg === '-b') {
      fileB = argv[++i];
    } else if (arg.startsWith('--b=')) {
      fileB = arg.slice(4);
    } else if (arg === '--threshold' || arg === '-t') {
      const val = argv[++i];
      threshold = parseFloat(val?.replace('%', ''));
    } else if (arg.startsWith('--threshold=')) {
      threshold = parseFloat(arg.slice(12).replace('%', ''));
    } else if (arg === '--json') {
      json = true;
    } else if (arg === '--help' || arg === '-h') {
      help = true;
    }
  }

  return { fileA, fileB, threshold, json, help };
}

function showHelp() {
  console.log(`Kullanım:
  node kit/render/pixel-diff.mjs --a <png> --b <png> [--threshold 0.1] [--json]

Seçenekler:
  --a <yol>          İlk PNG dosyasının yolu
  --b <yol>          İkinci PNG dosyasının yolu
  --threshold <sayı> Kabul edilebilir piksel farkı eşik oranı (%) [varsayılan: 0.1]
  --json             Tek satır JSON çıktısı üret
  -h, --help         Bu yardım mesajını göster`);
}

function main() {
  const { fileA, fileB, threshold, json, help } = parseArgs(process.argv);

  if (help) {
    showHelp();
    process.exit(0);
  }

  if (!fileA || !fileB) {
    if (json) {
      console.log(JSON.stringify({
        error: '--a ve --b parametreleri zorunludur',
        decision: 'fail'
      }));
    } else {
      console.error('Hata: --a ve --b parametreleri zorunludur.');
      showHelp();
    }
    process.exit(2);
  }

  if (isNaN(threshold) || threshold < 0) {
    if (json) {
      console.log(JSON.stringify({
        error: 'Geçersiz threshold değeri',
        decision: 'fail'
      }));
    } else {
      console.error('Hata: Geçersiz threshold değeri.');
    }
    process.exit(2);
  }

  let bufA, bufB;
  try {
    bufA = fs.readFileSync(fileA);
  } catch (err) {
    const msg = `Dosya okunamadı (${fileA}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  try {
    bufB = fs.readFileSync(fileB);
  } catch (err) {
    const msg = `Dosya okunamadı (${fileB}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  let imgA, imgB;
  try {
    imgA = decodePng(bufA);
  } catch (err) {
    const msg = `PNG çözümlenemedi (${fileA}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  try {
    imgB = decodePng(bufB);
  } catch (err) {
    const msg = `PNG çözümlenemedi (${fileB}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  // Boyut kontrolü
  if (imgA.width !== imgB.width || imgA.height !== imgB.height) {
    if (json) {
      console.log(JSON.stringify({
        error: 'Boyut uyuşmazlığı',
        dimensionMismatch: true,
        a: { width: imgA.width, height: imgA.height },
        b: { width: imgB.width, height: imgB.height },
        decision: 'fail'
      }));
    } else {
      console.error('Hata: Boyut uyuşmazlığı!');
      console.error(`  Görsel A (${fileA}): ${imgA.width}x${imgA.height}`);
      console.error(`  Görsel B (${fileB}): ${imgB.width}x${imgB.height}`);
      console.error('  Karar: fail');
    }
    process.exit(2);
  }

  const { width, height } = imgA;
  const totalPixels = width * height;
  let diffPixels = 0;
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  const sameChannels = imgA.channels === imgB.channels;
  const chA = imgA.channels;
  const chB = imgB.channels;
  const pixelsA = imgA.pixels;
  const pixelsB = imgB.pixels;

  if (sameChannels) {
    const channels = chA;
    const stride = width * channels;
    for (let y = 0; y < height; y++) {
      const rowOffset = y * stride;
      for (let x = 0; x < width; x++) {
        const pxOffset = rowOffset + x * channels;
        let diff = false;
        for (let c = 0; c < channels; c++) {
          if (pixelsA[pxOffset + c] !== pixelsB[pxOffset + c]) {
            diff = true;
            break;
          }
        }
        if (diff) {
          diffPixels++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  } else {
    for (let y = 0; y < height; y++) {
      const rowA = y * width * chA;
      const rowB = y * width * chB;
      for (let x = 0; x < width; x++) {
        const offA = rowA + x * chA;
        const offB = rowB + x * chB;

        const rA = pixelsA[offA];
        const gA = chA >= 3 ? pixelsA[offA + 1] : rA;
        const bA = chA >= 3 ? pixelsA[offA + 2] : rA;
        const aA = chA === 4 ? pixelsA[offA + 3] : (chA === 2 ? pixelsA[offA + 1] : 255);

        const rB = pixelsB[offB];
        const gB = chB >= 3 ? pixelsB[offB + 1] : rB;
        const bB = chB >= 3 ? pixelsB[offB + 2] : rB;
        const aB = chB === 4 ? pixelsB[offB + 3] : (chB === 2 ? pixelsB[offB + 1] : 255);

        if (rA !== rB || gA !== gB || bA !== bB || aA !== aB) {
          diffPixels++;
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
  }

  const diffRatio = totalPixels > 0 ? (diffPixels / totalPixels) * 100 : 0;
  const boundingBox = diffPixels > 0 ? { minX, minY, maxX, maxY } : null;
  const passed = diffRatio <= threshold;
  const decision = passed ? 'pass' : 'fail';

  if (json) {
    const output = {
      width,
      height,
      totalPixels,
      diffPixels,
      diffRatio: Number(diffRatio.toFixed(4)),
      diffPercent: Number(diffRatio.toFixed(4)),
      threshold,
      boundingBox,
      decision
    };
    console.log(JSON.stringify(output));
  } else {
    if (diffPixels === 0) {
      console.log('Piksel Karşılaştırma Özeti:');
      console.log(`  Görsel A : ${fileA}`);
      console.log(`  Görsel B : ${fileB}`);
      console.log(`  Boyut    : ${width}x${height} (${totalPixels.toLocaleString('tr-TR')} piksel)`);
      console.log(`  Farklı   : 0 piksel (oran %0)`);
      console.log(`  Eşik     : %${threshold}`);
      console.log(`  Sınır    : yok`);
      console.log(`  Karar    : pass`);
    } else if (passed) {
      console.log('UYARI: Eşik altında piksel farkı tespit edildi:');
      console.log(`  Görsel A : ${fileA}`);
      console.log(`  Görsel B : ${fileB}`);
      console.log(`  Boyut    : ${width}x${height} (${totalPixels.toLocaleString('tr-TR')} piksel)`);
      console.log(`  Farklı   : ${diffPixels.toLocaleString('tr-TR')} piksel (oran %${diffRatio.toFixed(4)})`);
      console.log(`  Eşik     : %${threshold}`);
      console.log(`  Sınır    : [minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}]`);
      console.log(`  Karar    : pass (uyarı: fark eşik altında)`);
    } else {
      console.log('HATA: Piksel farkı eşik değerini aştı:');
      console.log(`  Görsel A : ${fileA}`);
      console.log(`  Görsel B : ${fileB}`);
      console.log(`  Boyut    : ${width}x${height} (${totalPixels.toLocaleString('tr-TR')} piksel)`);
      console.log(`  Farklı   : ${diffPixels.toLocaleString('tr-TR')} piksel (oran %${diffRatio.toFixed(4)})`);
      console.log(`  Eşik     : %${threshold}`);
      console.log(`  Sınır    : [minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}]`);
      console.log(`  Karar    : fail`);
    }
  }

  process.exit(passed ? 0 : 1);
}

main();
