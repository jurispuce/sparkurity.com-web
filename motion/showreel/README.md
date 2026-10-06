# Sparkurity showreel (30 s)

A 1920×1080, 30 fps motion piece: standard LMS → Sparkurity → AI course builder → AI grading with instructor override → skill-based learning paths with mastery loop → cohort roles → live hours 32 → 8 → instructor heatmap → "Not another LMS" → end card.

| File | What |
|---|---|
| `out/sparkurity-showreel-30s-audio.mp4` | Final video with the synthesised soundtrack |
| `out/sparkurity-showreel-30s.mp4` | Same video, silent (for your own music or voice-over) |
| `showreel.html` | The animation. Open in a browser to preview in real time (space = pause, ←/→ = ±1 s) |
| `render.js` | Renders frames or stills with Playwright |
| `soundtrack.sh` | Generates the audio bed with ffmpeg (cuts are timed to the scenes) |

All copy lives in `showreel.html`. Fonts (Fraunces, Inter, JetBrains Mono — SIL OFL) are bundled in `fonts/` so renders are reproducible offline.

## Re-render

```bash
node render.js frames /tmp/frames 30
ffmpeg -framerate 30 -i /tmp/frames/f%04d.png -c:v libx264 -crf 18 -pix_fmt yuv420p -movflags +faststart out/sparkurity-showreel-30s.mp4
./soundtrack.sh /tmp/soundtrack.wav
ffmpeg -i out/sparkurity-showreel-30s.mp4 -i /tmp/soundtrack.wav -c:v copy -c:a aac -b:a 192k -shortest out/sparkurity-showreel-30s-audio.mp4
```

Spot-check a moment: `node render.js stills /tmp/st 7.2 14.6 26.9`.
