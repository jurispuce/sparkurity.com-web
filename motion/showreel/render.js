// Usage: node render.js frames <outDir> [fps]   → PNG frames (then ffmpeg)
//        node render.js stills <outDir> t1 t2 …  → PNG stills at given seconds
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const [mode, out, ...rest] = process.argv.slice(2);
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.resolve(__dirname, 'showreel.html') + '?render', { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const shot = async (t, file) => {
    await page.evaluate(t => window.render(t), t);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  };
  if (mode === 'stills') {
    for (const t of rest) await shot(+t, path.join(out, `t${(+t).toFixed(2)}.png`));
  } else {
    const fps = +(rest[0] || 30), n = 30 * fps;
    for (let i = 0; i < n; i++) {
      await shot(i / fps, path.join(out, `f${String(i).padStart(4, '0')}.png`));
      if (i % 100 === 0) console.log('frame', i, '/', n);
    }
  }
  await b.close();
})();
