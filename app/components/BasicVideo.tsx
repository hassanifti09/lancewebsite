"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for different video strategies
const UltraFastVideo = dynamic(() => import('./UltraFastVideo'), { 
  ssr: false,
  loading: () => null
});

const HLSVideo = dynamic(() => import('./HLSVideo'), { 
  ssr: false,
  loading: () => null
});

interface BasicVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BasicVideo: React.FC<BasicVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  // Use HLS for particles since it's large and not priority
  if (src.includes('particles')) {
    return (
      <HLSVideo
        src="/assets/hls/particles/playlist.m3u8"
        fallbackSrc="/assets/particles.mp4"
        poster={poster}
        className={className}
        style={style}
      />
    );
  }
  
  // Use UltraFastVideo for hero videos
  const isPriority = src.includes('blackhole') || src.includes('herovid');
  
  return (
    <UltraFastVideo
      src={src}
      poster={poster}
      className={className}
      style={style}
      priority={isPriority}
    />
  );
};

export default BasicVideo;