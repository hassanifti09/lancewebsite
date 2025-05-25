#!/bin/bash

echo "🚀 Creating better compressed particles video..."

# Create a well-compressed but complete particles video
ffmpeg -i public/assets/particles.mp4 \
  -vf "scale=640:-2" \
  -c:v libx264 \
  -preset slow \
  -crf 26 \
  -an \
  -movflags +faststart \
  -y public/assets/ultra/particles-full.mp4

echo "✅ Compressed particles video created!"
ls -lh public/assets/ultra/particles-full.mp4