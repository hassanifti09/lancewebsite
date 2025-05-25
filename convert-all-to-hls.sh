#!/bin/bash

# Convert all videos to HLS format for true streaming

echo "🎬 Starting HLS conversion for all videos..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   brew install ffmpeg"
    exit 1
fi

# Create HLS directory
mkdir -p public/assets/hls

# Array of videos to convert
videos=(
    "blackhole.mp4"
    "herovid.mp4"
    "particles.mp4"
    "particles-optimized.mp4"
)

for video in "${videos[@]}"; do
    if [ -f "public/assets/$video" ]; then
        filename="${video%.*}"
        echo "📹 Converting $video to HLS..."
        
        # Create directory for this video's segments
        mkdir -p "public/assets/hls/$filename"
        
        # Convert to HLS with multiple quality levels
        ffmpeg -i "public/assets/$video" \
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
            -hls_segment_filename "public/assets/hls/$filename/segment_%03d.ts" \
            "public/assets/hls/$filename/playlist.m3u8" \
            -y
            
        echo "✅ $video converted successfully!"
    else
        echo "⚠️  $video not found, skipping..."
    fi
done

# Also convert .m4v files
for video in public/assets/*.m4v; do
    if [ -f "$video" ]; then
        filename=$(basename "$video" .m4v)
        echo "📹 Converting $filename.m4v to HLS..."
        
        mkdir -p "public/assets/hls/$filename"
        
        ffmpeg -i "$video" \
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
            -hls_segment_filename "public/assets/hls/$filename/segment_%03d.ts" \
            "public/assets/hls/$filename/playlist.m3u8" \
            -y
            
        echo "✅ $filename.m4v converted successfully!"
    fi
done

echo "🎉 All videos converted to HLS format!"
echo "📁 HLS files are in: public/assets/hls/"
echo ""
echo "Video mapping:"
for video in "${videos[@]}"; do
    filename="${video%.*}"
    echo "  - $video → /assets/hls/$filename/playlist.m3u8"
done