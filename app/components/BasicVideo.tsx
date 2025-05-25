"use client";
import React from 'react';
import { cdn } from '@/lib/cdn';

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
  // Convert local paths to CDN URLs
  const videoSrc = src.startsWith('/assets/') ? cdn(src.replace('/assets/', '')) : src;
  const posterSrc = poster && poster.startsWith('/assets/') ? cdn(poster.replace('/assets/', '')) : poster;

  return (
    <video
      src={videoSrc}
      poster={posterSrc}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={style}
    />
  );
};

export default BasicVideo;