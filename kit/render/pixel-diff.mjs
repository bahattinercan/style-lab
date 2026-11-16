#!/usr/bin/env node
/**
 * kit/render/pixel-diff.mjs — Dependency-free PNG pixel comparison tool
 *
 * Usage:
 * node kit/render/pixel-diff.mjs --a <png> --b <png> [--threshold 0.1] [--json]*/
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
  console.log(`Usage:
  node kit/render/pixel-diff.mjs --a <png> --b <png> [--threshold 0.1] [--json]

Options:
  --a <path> Path to the first PNG file
  --b <path> Path to the second PNG file
  --threshold <number> Acceptable pixel difference threshold ratio (%) [default: 0.1]
  --json Produce single line JSON output
  -h, --help Show this help message`);
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
        error: 'the --a and --b parameters are required',
        decision: 'fail'
      }));
    } else {
      console.error('Error: the --a and --b parameters are required.');
      showHelp();
    }
    process.exit(2);
  }

  if (isNaN(threshold) || threshold < 0) {
    if (json) {
      console.log(JSON.stringify({
        error: 'Invalid threshold value',
        decision: 'fail'
      }));
    } else {
      console.error('Error: Invalid threshold value.');
    }
    process.exit(2);
  }

  let bufA, bufB;
  try {
    bufA = fs.readFileSync(fileA);
  } catch (err) {
    const msg = `Could not read the file (${fileA}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  try {
    bufB = fs.readFileSync(fileB);
  } catch (err) {
    const msg = `Could not read the file (${fileB}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  let imgA, imgB;
  try {
    imgA = decodePng(bufA);
  } catch (err) {
    const msg = `Could not decode the PNG (${fileA}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  try {
    imgB = decodePng(bufB);
  } catch (err) {
    const msg = `Could not decode the PNG (${fileB}): ${err.message}`;
    if (json) console.log(JSON.stringify({ error: msg, decision: 'fail' }));
    else console.error(`Hata: ${msg}`);
    process.exit(2);
  }

  // Size control
  if (imgA.width !== imgB.width || imgA.height !== imgB.height) {
    if (json) {
      console.log(JSON.stringify({
        error: 'Size mismatch',
        dimensionMismatch: true,
        a: { width: imgA.width, height: imgA.height },
        b: { width: imgB.width, height: imgB.height },
        decision: 'fail'
      }));
    } else {
      console.error('Error: Size mismatch!');
      console.error(`  Image A (${fileA}): ${imgA.width}x${imgA.height}`);
      console.error(`  Image B (${fileB}): ${imgB.width}x${imgB.height}`);
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
      console.log('Pixel Comparison Summary:');
      console.log(`  Image A  : ${fileA}`);
      console.log(`  Image B  : ${fileB}`);
      console.log(`  Size     : ${width}x${height} (${totalPixels.toLocaleString('en-US')} pixels)`);
      console.log(`Different: 0 pixels (rate 0%)`);
      console.log(`  Threshold: ${threshold}%`);
      console.log(`Limit: none`);
      console.log(`  Verdict  : pass`);
    } else if (passed) {
      console.log('WARNING: Pixel difference below threshold detected:');
      console.log(`  Image A  : ${fileA}`);
      console.log(`  Image B  : ${fileB}`);
      console.log(`  Size     : ${width}x${height} (${totalPixels.toLocaleString('en-US')} pixels)`);
      console.log(`  Different: ${diffPixels.toLocaleString('en-US')} pixels (ratio ${diffRatio.toFixed(4)}%)`);
      console.log(`  Threshold: ${threshold}%`);
      console.log(`  Bounds   : [minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}]`);
      console.log(`Verdict: pass (warning: difference below threshold)`);
    } else {
      console.log('ERROR: Pixel difference exceeded threshold value:');
      console.log(`  Image A  : ${fileA}`);
      console.log(`  Image B  : ${fileB}`);
      console.log(`  Size     : ${width}x${height} (${totalPixels.toLocaleString('en-US')} pixels)`);
      console.log(`  Different: ${diffPixels.toLocaleString('en-US')} pixels (ratio ${diffRatio.toFixed(4)}%)`);
      console.log(`  Threshold: ${threshold}%`);
      console.log(`  Bounds   : [minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}]`);
      console.log(`  Verdict  : fail`);
    }
  }

  process.exit(passed ? 0 : 1);
}

main();
