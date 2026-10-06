# Sparkurity motion pieces

Two 48 s videos share one engine, design and pacing: a 30 s authored timeline plus a ~2 s reading pause after every section (`HOLDS`).

## For instructors — `showreel.html`

A 1920×1080, 30 fps motion piece, authored on a 30 s timeline with a ~2 s reading pause after every section (`HOLDS` in `showreel.html`): standard LMS → Sparkurity → AI course builder → AI grading with instructor override → skill-based learning paths with mastery loop → cohort roles → live hours 32 → 8 → instructor heatmap → "Not another LMS" → end card.

| File | What |
|---|---|
| `out/sparkurity-showreel-audio.mp4` | Instructor video with the synthesised soundtrack |
| `out/sparkurity-showreel.mp4` | Same video, silent (for your own music or voice-over) |
| `out/sparkurity-organisations-audio.mp4` / `out/sparkurity-organisations.mp4` | Organisations / internal-training video, with and without sound |
| `showreel.html`, `organisations.html` | The animations. Open in a browser to preview in real time (space = pause, ←/→ = ±1 s) |
| `render.js` | Renders frames or stills with Playwright |
| `soundtrack.sh` | Generates the audio bed with ffmpeg; cue times come from `out/cues.json`, written by the frame render |

All copy lives in `showreel.html`. Fonts (Fraunces, Inter, JetBrains Mono — SIL OFL) are bundled in `fonts/` so renders are reproducible offline.

## For organisations — `organisations.html`

For L&D, HR and CISOs: annual click-through awareness training → "Click-through doesn't work. Practice does." → one course with cases per role (sales, support, finance, engineering) → the same 30 minutes spent where each person hesitates → an invoice-fraud practice scenario with feedback and mastery → leadership incident tabletop in role with the NIS2 reporting clock (24 h / 72 h / 1 month) → mastery heatmap by team → "Not another awareness module." → end card.

## Re-render

Set `PAGE=organisations.html` for the organisations video (default is `showreel.html`); cues land in `out/<page>.cues.json` and go to `soundtrack.sh` as the second argument.

```bash
node render.js frames /tmp/frames 30
ffmpeg -framerate 30 -i /tmp/frames/f%04d.png -c:v libx264 -crf 18 -pix_fmt yuv420p -movflags +faststart out/sparkurity-showreel.mp4
./soundtrack.sh /tmp/soundtrack.wav out/showreel.cues.json
ffmpeg -i out/sparkurity-showreel.mp4 -i /tmp/soundtrack.wav -c:v copy -c:a aac -b:a 192k -shortest out/sparkurity-showreel-audio.mp4
```

Spot-check a moment (video seconds): `node render.js stills /tmp/st 7.2 21.0 41.5`. To change a pause, edit `HOLDS` — the render length and audio cues follow automatically.
