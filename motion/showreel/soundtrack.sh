#!/bin/bash
# Synthesised bed: ambient pad + soft whooshes on scene cuts + low hits on the two logo moments.
# Cue times come from out/cues.json, written by `node render.js frames …` (they include the reading pauses).
# Usage: ./soundtrack.sh out/soundtrack.wav
set -e
cd "$(dirname "$0")"
OUT=${1:-out/soundtrack.wav}
read -r D CUTS HITS TICKS < <(python3 -c "
import json; c=json.load(open('out/cues.json'))
f=lambda xs: ','.join('%.3f'%x for x in xs)
print('%.3f'%c['total'], f(c['cuts']), f(c['hits']), f(c['ticks']))")
W=""; for c in ${CUTS//,/ }; do W="$W+0.22*(random(0)*2-1)*exp(-pow((t-$c+0.12)/0.13,2))"; done
H=""; for c in ${HITS//,/ }; do H="$H+0.5*sin(2*PI*55*t)*exp(-2.5*(t-$c))*gte(t,$c)"; done
K=""; for c in ${TICKS//,/ }; do K="$K+0.12*sin(2*PI*1760*t)*exp(-60*(t-$c))*gte(t,$c)"; done
PAD="0.055*(sin(2*PI*110*t)+0.8*sin(2*PI*164.81*t)+0.6*sin(2*PI*220*t)+0.45*sin(2*PI*329.63*t)*(0.5+0.5*sin(2*PI*0.25*t)))*(0.75+0.25*sin(2*PI*0.5*t))"
FADE=$(python3 -c "print($D-1.5)")
ffmpeg -loglevel error -y -f lavfi -i "aevalsrc='($PAD)*min(1,t/1.5)*min(1,($D-t)/1.5)$W$H$K':s=48000:d=$D" \
  -af "lowpass=f=5000,highpass=f=35,aecho=0.6:0.5:120:0.25,loudnorm=I=-18:TP=-1.5,afade=t=out:st=$FADE:d=1.5" -ar 48000 -ac 2 "$OUT"
