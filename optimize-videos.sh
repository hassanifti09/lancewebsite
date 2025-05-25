#!/bin/bash

# Video optimization script for better performance
# This script requires ffmpeg to be installed

echo "Video Optimization Script"
echo "========================"
echo ""
echo "This script will help you optimize your videos for better web performance."
echo "Make sure you have ffmpeg installed (brew install ffmpeg)"
echo ""

# Create optimized directory if it doesn't exist
mkdir -p public/assets/optimized

# Function to optimize video
optimize_video() {
    input_file=$1
    output_file=$2
    
    echo "Optimizing $input_file..."
    
    # Two-pass encoding for better quality/size ratio
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -preset slow \
        -crf 23 \
        -vf "scale=-2:720" \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y \
        "$output_file"
    
    # Also create a WebM version for better browser support
    output_webm="${output_file%.m4v}.webm"
    ffmpeg -i "$input_file" \
        -c:v libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -vf "scale=-2:720" \
        -c:a libopus \
        -b:a 128k \
        -y \
        "$output_webm"
    
    echo "Created optimized versions:"
    echo "  - $output_file"
    echo "  - $output_webm"
    echo ""
}

# Optimize each video
echo "Starting optimization..."
echo ""

# Optimize herovid.m4v (currently 3.8MB)
if [ -f "public/assets/herovid.m4v" ]; then
    optimize_video "public/assets/herovid.m4v" "public/assets/optimized/herovid.m4v"
fi

# Optimize blackhole.m4v (currently 438KB - already small)
if [ -f "public/assets/blackhole.m4v" ]; then
    echo "blackhole.m4v is already optimized (438KB)"
    cp "public/assets/blackhole.m4v" "public/assets/optimized/blackhole.m4v"
fi

# Optimize particles.m4v (currently 41MB - needs significant optimization)
if [ -f "public/assets/particles.m4v" ]; then
    echo "Optimizing particles.m4v with aggressive compression (41MB -> target <5MB)..."
    ffmpeg -i "public/assets/particles.m4v" \
        -c:v libx264 \
        -preset slow \
        -crf 28 \
        -vf "scale=-2:540" \
        -r 24 \
        -c:a aac \
        -b:a 96k \
        -movflags +faststart \
        -y \
        "public/assets/optimized/particles.m4v"
    
    # WebM version
    ffmpeg -i "public/assets/particles.m4v" \
        -c:v libvpx-vp9 \
        -crf 35 \
        -b:v 0 \
        -vf "scale=-2:540" \
        -r 24 \
        -c:a libopus \
        -b:a 96k \
        -y \
        "public/assets/optimized/particles.webm"
fi

echo ""
echo "Optimization complete!"
echo ""
echo "File size comparison:"
ls -lh public/assets/*.m4v
echo ""
echo "Optimized files:"
ls -lh public/assets/optimized/*
echo ""
echo "To use optimized videos, update your video paths from:"
echo "  /assets/videoname.m4v"
echo "to:"
echo "  /assets/optimized/videoname.m4v"