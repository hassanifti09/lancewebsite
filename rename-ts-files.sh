#!/bin/bash

# Rename all .ts video segment files to .tss to avoid Next.js trying to compile them

echo "Renaming .ts files to .tss to avoid TypeScript compilation..."

# Find and rename all .ts files in the hls directory
find public/assets/hls -name "*.ts" -type f | while read file; do
    newfile="${file%.ts}.tss"
    mv "$file" "$newfile"
    echo "Renamed: $file -> $newfile"
done

# Update all playlist.m3u8 files to reference .tss instead of .ts
find public/assets/hls -name "playlist.m3u8" -type f | while read file; do
    sed -i '' 's/\.ts/\.tss/g' "$file"
    echo "Updated references in: $file"
done

echo "✅ Done! All .ts files renamed to .tss"