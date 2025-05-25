"use client";
import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video properties programmatically to ensure they work
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    
    // Remove any controls
    video.controls = false;
    video.removeAttribute('controls');
    
    // Play the video
    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Silently handle autoplay failure
        });
      }
    };

    // Try to play immediately
    playVideo();
    
    // Also try on these events
    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('canplay', playVideo);
    
    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      muted
      loop
      playsInline
      poster={poster}
      // Intentionally no autoPlay, controls attributes here - we set them via JS
    >
      <source src={src} type="video/mp4" />
      {src.endsWith('.m4v') && (
        <source src={src.replace('.m4v', '.mp4')} type="video/mp4" />
      )}
    </video>
  );
};

export default BackgroundVideo;