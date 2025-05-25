import { NextRequest, NextResponse } from 'next/server';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('video');
  
  if (!filename) {
    return new NextResponse('Video filename required', { status: 400 });
  }

  // Security: prevent directory traversal
  const safeName = filename.replace(/[^a-zA-Z0-9.-]/g, '');
  const videoPath = join(process.cwd(), 'public', 'assets', safeName);

  try {
    const stat = statSync(videoPath);
    const fileSize = stat.size;
    const range = request.headers.get('range');

    if (range) {
      // Parse range header
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;

      // Create read stream for the requested range
      const stream = createReadStream(videoPath, { start, end });

      // Return partial content
      return new NextResponse(stream as unknown as ReadableStream, {
        status: 206,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize.toString(),
          'Content-Type': `video/${filename.split('.').pop()}`,
          'Cache-Control': 'public, max-age=3600',
        },
      });
    } else {
      // No range requested, return entire file
      const stream = createReadStream(videoPath);
      
      return new NextResponse(stream as unknown as ReadableStream, {
        status: 200,
        headers: {
          'Content-Length': fileSize.toString(),
          'Content-Type': `video/${filename.split('.').pop()}`,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=3600',
        },
      });
    }
  } catch {
    return new NextResponse('Video not found', { status: 404 });
  }
}