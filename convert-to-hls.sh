#!/bin/bash

# Convert videos to HLS format for streaming
# Requires ffmpeg: brew install ffmpeg

mkdir -p public/assets/hls

# Convert each video to HLS
for video in public/assets/*.mp4; do
  filename=$(basename "$video" .mp4)
  output_dir="public/assets/hls/$filename"
  mkdir -p "$output_dir"
  
  echo "Converting $video to HLS..."
  
  # Create multiple quality variants for adaptive streaming
  ffmpeg -i "$video" \
    -preset fast \
    -g 48 -sc_threshold 0 \
    -map 0:v:0 -map 0:v:0 -map 0:v:0 \
    -c:v:0 libx264 -b:v:0 2000k -maxrate:v:0 2200k -bufsize:v:0 3000k -s:v:0 1280x720 \
    -c:v:1 libx264 -b:v:1 1000k -maxrate:v:1 1100k -bufsize:v:1 1500k -s:v:1 854x480 \
    -c:v:2 libx264 -b:v:2 500k -maxrate:v:2 550k -bufsize:v:2 750k -s:v:2 640x360 \
    -var_stream_map "v:0 v:1 v:2" \
    -master_pl_name master.m3u8 \
    -f hls -hls_time 6 -hls_list_size 0 \
    -hls_segment_filename "$output_dir/v%v/segment%d.ts" \
    "$output_dir/v%v/playlist.m3u8"
done

echo "HLS conversion complete!"