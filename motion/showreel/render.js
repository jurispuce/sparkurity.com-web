// Usage: [PAGE=organisations.html] node render.js frames <outDir> [fps]   → PNG frames (then ffmpeg) + out/cues.json for the soundtrack
//        node render.js stills <outDir> v1 v2 …  → PNG stills at given video seconds
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const [mode, out, ...rest] = process.argv.slice(2);
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.resolve(__dirname, process.env.PAGE || 'showreel.html') + '?render', { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const shot = async (t, file) => {
    await page.evaluate(t => window.render(t), t);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  };
  if (mode === 'stills') {
    for (const t of rest) await shot(+t, path.join(out, `t${(+t).toFixed(2)}.png`));
  } else {
    const fps = +(rest[0] || 30);
    const tl = await page.evaluate(() => window.TIMELINE.TOTAL);
    const n = Math.round(tl * fps);
    for (let i = 0; i < n; i++) {
      await shot(i / fps, path.join(out, `f${String(i).padStart(4, '0')}.png`));
      if (i % 100 === 0) console.log('frame', i, '/', n);
    }
  }
  // scene-change cue times in video time, for soundtrack.sh
  const cues = await page.evaluate(() => ({
    total: TIMELINE.TOTAL,
    cuts: [3.2, 5.6, 8.45, 10.6, 16.0, 19.1, 21.0, 24.4, 27.4].map(TIMELINE.forward),
    hits: [3.3, 27.5].map(TIMELINE.forward),
    ticks: [0.25, 0.65, 1.05, 1.95, 2.1, 2.25].map(TIMELINE.forward),
  }));
  fs.writeFileSync(path.join(__dirname, 'out', path.basename(process.env.PAGE || 'showreel.html', '.html') + '.cues.json'), JSON.stringify(cues, null, 1));
  await b.close();
})();
