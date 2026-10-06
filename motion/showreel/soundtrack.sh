#!/bin/bash
# Synthesised 30 s bed: ambient pad + soft whooshes on scene cuts + low hits on the two logo moments.
# Usage: ./soundtrack.sh out/soundtrack.wav
OUT=${1:-out/soundtrack.wav}
CUTS="3.2 5.6 8.45 10.6 16.0 19.1 21.0 24.4 27.4"
W=""; for c in $CUTS; do W="$W+0.22*(random(0)*2-1)*exp(-pow((t-$c+0.12)/0.13,2))"; done
PAD="0.055*(sin(2*PI*110*t)+0.8*sin(2*PI*164.81*t)+0.6*sin(2*PI*220*t)+0.45*sin(2*PI*329.63*t)*(0.5+0.5*sin(2*PI*0.25*t)))*(0.75+0.25*sin(2*PI*0.5*t))"
HIT="0.5*sin(2*PI*55*t)*exp(-3*(t-3.3))*gte(t,3.3)+0.5*sin(2*PI*55*t)*exp(-2*(t-27.5))*gte(t,27.5)"
TICK=""; for c in 0.25 0.65 1.05 1.95 2.1 2.25; do TICK="$TICK+0.12*sin(2*PI*1760*t)*exp(-60*(t-$c))*gte(t,$c)"; done
ffmpeg -loglevel error -y -f lavfi -i "aevalsrc='($PAD)*min(1,t/1.5)*min(1,(30-t)/1.5)$W+$HIT$TICK':s=48000:d=30" \
  -af "lowpass=f=5000,highpass=f=35,aecho=0.6:0.5:120:0.25,loudnorm=I=-18:TP=-1.5,afade=t=out:st=28.8:d=1.2" -ac 2 "$OUT"
