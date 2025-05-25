#!/bin/bash

# Create WebM versions for even smaller sizes
echo "🚀 Creating WebM ultra versions..."

mkdir -p public/assets/ultra

# Blackhole WebM - TINY!
ffmpeg -i public/assets/blackhole.mp4 \
  -vf "scale=640:-2" \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 40 \
  -an \
  -auto-alt-ref 0 \
  -y public/assets/ultra/blackhole-ultra.webm

# Herovid WebM
ffmpeg -i public/assets/herovid.mp4 \
  -vf "scale=854:-2" \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 35 \
  -an \
  -auto-alt-ref 0 \
  -y public/assets/ultra/herovid-ultra.webm

echo "✅ WebM versions created!"
ls -lh public/assets/ultra/*.webm