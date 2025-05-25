#!/bin/bash

# Convert optimized videos to HLS format

echo "🎬 Converting optimized videos to HLS..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   brew install ffmpeg"
    exit 1
fi

# Create HLS directories
mkdir -p public/assets/hls/optimized-herovid
mkdir -p public/assets/hls/optimized-particles

# Convert herovid.webm from optimized folder
if [ -f "public/assets/optimized/herovid.webm" ]; then
    echo "📹 Converting optimized herovid.webm to HLS..."
    ffmpeg -i "public/assets/optimized/herovid.webm" \
        -c:v libx264 \
        -c:a aac \
        -preset fast \
        -crf 22 \
        -g 48 \
        -keyint_min 48 \
        -sc_threshold 0 \
        -b:v 2500k \
        -maxrate 2675k \
        -bufsize 3750k \
        -hls_time 4 \
        -hls_playlist_type vod \
        -hls_segment_filename "public/assets/hls/optimized-herovid/segment_%03d.ts" \
        "public/assets/hls/optimized-herovid/playlist.m3u8" \
        -y
fi

# Convert particles.webm from optimized folder
if [ -f "public/assets/optimized/particles.webm" ]; then
    echo "📹 Converting optimized particles.webm to HLS..."
    ffmpeg -i "public/assets/optimized/particles.webm" \
        -c:v libx264 \
        -c:a aac \
        -preset fast \
        -crf 22 \
        -g 48 \
        -keyint_min 48 \
        -sc_threshold 0 \
        -b:v 2500k \
        -maxrate 2675k \
        -bufsize 3750k \
        -hls_time 4 \
        -hls_playlist_type vod \
        -hls_segment_filename "public/assets/hls/optimized-particles/segment_%03d.ts" \
        "public/assets/hls/optimized-particles/playlist.m3u8" \
        -y
fi

echo "✅ Optimized videos converted to HLS!"