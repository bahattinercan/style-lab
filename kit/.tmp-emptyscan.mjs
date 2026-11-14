import fs from 'node:fs';
import path from 'node:path';
import { decodePng } from './render/png.mjs';

const dir = 'styles';
const rows = [];
for (const d of fs.readdirSync(dir)) {
  const p = path.join(dir, d, 'shots', '01-page.png');
  if (!fs.existsSync(p)) continue;
  const img = decodePng(fs.readFileSync(p));
  const { width, height, channels, pixels } = img;
  // alt yarıda (y > 55%) renk varyansı: boş/tek renk kare = 0
  let min = 255, max = 0, n = 0;
  for (let y = Math.floor(height * 0.55); y < height; y += 7) {
    for (let x = 0; x < width; x += 5) {
      const i = (y * width + x) * channels;
      const v = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
      if (v < min) min = v;
      if (v > max) max = v;
      n++;
    }
  }
  rows.push({ name: d, spread: Math.round(max - min), samples: n });
}
rows.sort((a, b) => a.spread - b.spread);
console.log('en düşük varyans (ilk 12):');
for (const r of rows.slice(0, 12)) console.log(' ', r.spread, r.name);
console.log('toplam', rows.length);
