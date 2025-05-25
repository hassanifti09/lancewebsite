"use client";
import React, { useEffect, useRef } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to play without any controls
    const initVideo = () => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.controls = false;
      
      // Force remove all attributes that might show controls
      video.removeAttribute('controls');
      video.setAttribute('muted', '');
      video.setAttribute('autoplay', '');
      video.setAttribute('loop', '');
      video.setAttribute('playsinline', '');
      
      // Try to play
      video.play().catch(() => {
        // If autoplay fails, we just show the poster
      });
    };

    // Initialize immediately
    initVideo();
    
    // Reinitialize on various events
    video.addEventListener('loadstart', initVideo);
    video.addEventListener('loadedmetadata', initVideo);
    
    return () => {
      video.removeEventListener('loadstart', initVideo);
      video.removeEventListener('loadedmetadata', initVideo);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`} 
      style={style}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        poster={poster}
        style={{ pointerEvents: 'none' }}
      >
        <source src={src} type="video/mp4" />
        {src.endsWith('.m4v') && (
          <source src={src.replace('.m4v', '.mp4')} type="video/mp4" />
        )}
      </video>
      
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