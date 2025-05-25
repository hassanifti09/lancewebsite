"use client";
import React from 'react';
import { cdn } from '@/lib/cdn';

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  // Convert local paths to CDN URLs
  const videoSrc = src.startsWith('/assets/') ? cdn(src.replace('/assets/', '')) : src;
  const posterSrc = poster && poster.startsWith('/assets/') ? cdn(poster.replace('/assets/', '')) : poster;

  return (
    <div className={`relative ${className}`} style={style}>
      <video
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Invisible overlay to block ALL interaction */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ pointerEvents: 'none' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroVideo;