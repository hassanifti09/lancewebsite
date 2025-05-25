"use client";
import React from 'react';
import OptimizedVideo from '../components/OptimizedVideo';
import SimpleVideo from '../components/SimpleVideo';

export default function TestVideoPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Video Test Page</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl">Test 1: Simple HTML5 Video</h2>
        <video
          src="/assets/blackhole.m4v"
          controls
          autoPlay
          muted
          loop
          className="w-full max-w-2xl"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Test 2: SimpleVideo Component</h2>
        <SimpleVideo
          src="/assets/blackhole.m4v"
          className="w-full max-w-2xl"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Test 3: OptimizedVideo Component</h2>
        <OptimizedVideo
          src="/assets/blackhole.m4v"
          poster="/assets/fallback.png"
          className="w-full max-w-2xl"
          priority={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Test 4: Working WebM Video</h2>
        <OptimizedVideo
          src="/assets/herovid.webm"
          poster="/assets/fallback.png"
          className="w-full max-w-2xl"
          priority={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Test 5: All Videos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>blackhole.m4v</p>
            <video src="/assets/blackhole.m4v" controls muted className="w-full" />
          </div>
          <div>
            <p>herovid.webm</p>
            <video src="/assets/herovid.webm" controls muted className="w-full" />
          </div>
          <div>
            <p>particles.m4v</p>
            <video src="/assets/particles.m4v" controls muted className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}