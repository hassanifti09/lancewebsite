"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import HLSVideo to avoid SSR issues
const HLSVideo = dynamic(() => import('./HLSVideo'), { 
  ssr: false,
  loading: () => <div className="bg-black" />
});

interface SimpleVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimpleVideo: React.FC<SimpleVideoProps> = ({ 
  src, 
  className = '', 
  style = {} 
}) => {
  // Map video sources to HLS streams
  let hlsSrc = src;
  let fallbackSrc = src;
  
  if (src.includes('blackhole')) {
    hlsSrc = '/assets/hls/blackhole/playlist.m3u8';
    fallbackSrc = '/assets/blackhole.mp4';
  } else if (src.includes('herovid')) {
    hlsSrc = '/assets/hls/herovid/playlist.m3u8';
    fallbackSrc = '/assets/herovid.mp4';
  } else if (src.includes('particles-optimized')) {
    hlsSrc = '/assets/hls/particles-optimized/playlist.m3u8';
    fallbackSrc = '/assets/particles-optimized.mp4';
  } else if (src.includes('particles')) {
    hlsSrc = '/assets/hls/particles/playlist.m3u8';
    fallbackSrc = '/assets/particles.mp4';
  }

  return (
    <HLSVideo
      src={hlsSrc}
      fallbackSrc={fallbackSrc}
      className={className}
      style={style}
    />
  );
};

export default SimpleVideo;