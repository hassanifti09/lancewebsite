#!/bin/bash

# Ultra compress videos for BLAZING fast initial load
echo "🚀 Creating ultra-compressed versions for instant loading..."

mkdir -p public/assets/ultra

# Blackhole - make it TINY for instant hero load
ffmpeg -i public/assets/blackhole.mp4 \
  -vf "scale=640:-2" \
  -c:v libx264 \
  -preset veryslow \
  -crf 28 \
  -an \
  -movflags +faststart \
  -y public/assets/ultra/blackhole-ultra.mp4

# Herovid - compress aggressively
ffmpeg -i public/assets/herovid.mp4 \
  -vf "scale=854:-2" \
  -c:v libx264 \
  -preset veryslow \
  -crf 26 \
  -an \
  -movflags +faststart \
  -y public/assets/ultra/herovid-ultra.mp4

# Particles - just first 10 seconds for preview
ffmpeg -i public/assets/particles.mp4 \
  -t 10 \
  -vf "scale=640:-2" \
  -c:v libx264 \
  -preset veryslow \
  -crf 28 \
  -an \
  -movflags +faststart \
  -y public/assets/ultra/particles-preview.mp4

echo "✅ Ultra-compressed videos created!"
ls -lh public/assets/ultra/