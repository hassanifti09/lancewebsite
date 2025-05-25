"use client";
import React from 'react';

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
  return (
    <video
      className={className}
      style={style}
      autoPlay={true}
      muted={true}
      loop={true}
      playsInline={true}
      poster={poster}
      src={src}
    />
  );
};

export default UniversalVideo;