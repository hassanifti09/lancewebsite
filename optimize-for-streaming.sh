#!/bin/bash

# Optimize videos for web streaming (fast start)
# This moves metadata to the beginning of the file for instant playback

echo "Installing ffmpeg if not present..."
if ! command -v ffmpeg &> /dev/null; then
    echo "Please install ffmpeg first: brew install ffmpeg"
    exit 1
fi

mkdir -p public/assets/streaming

for video in public/assets/*.mp4; do
    filename=$(basename "$video")
    output="public/assets/streaming/$filename"
    
    echo "Optimizing $filename for streaming..."
    
    # -movflags +faststart: Moves metadata to beginning for instant playback
    # -c:v libx264: Re-encode with H.264 for compatibility
    # -preset fast: Balance between speed and compression
    # -crf 23: Quality setting (lower = better quality, 18-28 is good range)
    ffmpeg -i "$video" \
        -c:v libx264 \
        -preset fast \
        -crf 23 \
        -c:a aac \
        -movflags +faststart \
        -y "$output"
done

echo "✅ Videos optimized for streaming!"
echo "Replace your video sources with /assets/streaming/[filename]"