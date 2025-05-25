#!/bin/bash

# Simple HLS conversion for true video streaming
# HLS splits video into small chunks that load on demand

if ! command -v ffmpeg &> /dev/null; then
    echo "Please install ffmpeg first: brew install ffmpeg"
    exit 1
fi

mkdir -p public/assets/hls

# Convert just one video as example
echo "Converting herovid.mp4 to HLS format..."

ffmpeg -i public/assets/herovid.mp4 \
    -c:v libx264 \
    -preset fast \
    -crf 23 \
    -c:a aac \
    -f hls \
    -hls_time 10 \
    -hls_list_size 0 \
    -hls_segment_filename "public/assets/hls/herovid_%03d.ts" \
    public/assets/hls/herovid.m3u8

echo "✅ HLS conversion complete!"
echo "Video chunks created in public/assets/hls/"
echo "Use herovid.m3u8 as your video source"