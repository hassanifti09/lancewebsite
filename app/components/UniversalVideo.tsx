"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import HLSVideo to avoid SSR issues
const HLSVideo = dynamic(() => import('./HLSVideo'), { 
  ssr: false,
  loading: () => <div className="bg-black" />
});

interface UniversalVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UniversalVideo: React.FC<UniversalVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  // Map video sources to HLS streams
  let hlsSrc = src;
  let fallbackSrc = src;
  
  // Check if it's already an HLS source
  if (src.endsWith('.m3u8')) {
    hlsSrc = src;
    fallbackSrc = src.replace('/hls/', '/').replace('/playlist.m3u8', '.mp4');
  } else {
    // Convert regular video paths to HLS
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
  }

  return (
    <HLSVideo
      src={hlsSrc}
      fallbackSrc={fallbackSrc}
      poster={poster}
      className={className}
      style={style}
    />
  );
};

export default UniversalVideo;