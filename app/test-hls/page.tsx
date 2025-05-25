"use client";
import React from 'react';
import BasicVideo from '../components/BasicVideo';
import OptimizedVideo from '../components/OptimizedVideo';
import UniversalVideo from '../components/UniversalVideo';
import HLSVideo from '../components/HLSVideo';

export default function TestHLS() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">HLS Streaming Test</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl mb-2">Direct HLS Video (herovid)</h2>
          <HLSVideo
            src="/assets/hls/herovid/playlist.m3u8"
            fallbackSrc="/assets/herovid.mp4"
            className="w-full max-w-2xl"
            poster="/assets/fallback.png"
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">BasicVideo Component (auto-converted to HLS)</h2>
          <BasicVideo
            src="/assets/blackhole.m4v"
            className="w-full max-w-2xl"
            poster="/assets/fallback.png"
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">OptimizedVideo Component (particles)</h2>
          <OptimizedVideo
            src="/assets/particles.mp4"
            className="w-full max-w-2xl"
            poster="/assets/fallback.png"
          />
        </div>

        <div>
          <h2 className="text-xl mb-2">UniversalVideo Component</h2>
          <UniversalVideo
            src="/assets/herovid.mp4"
            className="w-full max-w-2xl"
            poster="/assets/fallback.png"
          />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-900 rounded">
        <h3 className="font-bold mb-2">Network Activity:</h3>
        <p className="text-sm">Open DevTools → Network tab to see HLS segments loading</p>
        <p className="text-sm">Look for .ts files loading as the video plays</p>
      </div>
    </div>
  );
}