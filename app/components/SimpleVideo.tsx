"use client";
import React, { useEffect, useRef } from 'react';

interface SimpleVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimpleVideo: React.FC<SimpleVideoProps> = ({ src, className = '', style = {} }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(err => console.error('Play failed:', err));
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={style}
      onError={(e) => console.error('Video error:', e)}
      onCanPlay={() => console.log('Can play:', src)}
      onLoadedData={() => console.log('Loaded data:', src)}
    />
  );
};

export default SimpleVideo;