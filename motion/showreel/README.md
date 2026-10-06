# Sparkurity showreel — for instructors (48 s)

A 1920×1080, 30 fps motion piece, authored on a 30 s timeline with a ~2 s reading pause after every section (`HOLDS` in `showreel.html`): standard LMS → Sparkurity → AI course builder → AI grading with instructor override → skill-based learning paths with mastery loop → cohort roles → live hours 32 → 8 → instructor heatmap → "Not another LMS" → end card.

| File | What |
|---|---|
| `out/sparkurity-showreel-audio.mp4` | Final video with the synthesised soundtrack |
| `out/sparkurity-showreel.mp4` | Same video, silent (for your own music or voice-over) |
| `showreel.html` | The animation. Open in a browser to preview in real time (space = pause, ←/→ = ±1 s) |
| `render.js` | Renders frames or stills with Playwright |
| `soundtrack.sh` | Generates the audio bed with ffmpeg; cue times come from `out/cues.json`, written by the frame render |

All copy lives in `showreel.html`. Fonts (Fraunces, Inter, JetBrains Mono — SIL OFL) are bundled in `fonts/` so renders are reproducible offline.

## Re-render

```bash
node render.js frames /tmp/frames 30
ffmpeg -framerate 30 -i /tmp/frames/f%04d.png -c:v libx264 -crf 18 -pix_fmt yuv420p -movflags +faststart out/sparkurity-showreel.mp4
./soundtrack.sh /tmp/soundtrack.wav
ffmpeg -i out/sparkurity-showreel.mp4 -i /tmp/soundtrack.wav -c:v copy -c:a aac -b:a 192k -shortest out/sparkurity-showreel-audio.mp4
```

Spot-check a moment (video seconds): `node render.js stills /tmp/st 7.2 21.0 41.5`. To change a pause, edit `HOLDS` — the render length and audio cues follow automatically.
