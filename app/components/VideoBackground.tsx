"use client";
import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let mounted = true;

    // Reset states
    setIsVideoReady(false);
    setVideoFailed(false);

    const handleCanPlay = () => {
      if (!mounted) return;
      setIsVideoReady(true);
      
      // Play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video playing successfully');
          })
          .catch((error) => {
            console.error('Play failed:', error);
            if (mounted) setVideoFailed(true);
          });
      }
    };

    const handleError = () => {
      console.error('Video load error');
      if (mounted) setVideoFailed(true);
    };

    // Set up video
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = 'auto';
    
    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Load the video
    video.load();

    return () => {
      mounted = false;
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // If video failed or no src, show poster
  if (videoFailed || !src) {
    return poster ? (
      <img 
        src={poster} 
        alt="" 
        className={className}
        style={style}
      />
    ) : null;
  }

  return (
    <>
      {/* Always show poster until video is ready */}
      {poster && !isVideoReady && (
        <img 
          src={poster} 
          alt="" 
          className={className}
          style={{ ...style, position: 'absolute' }}
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={className}
        style={{
          ...style,
          opacity: isVideoReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        muted
        playsInline
        loop
      >
        {/* Use optimized versions first */}
        {src.includes('blackhole') && (
          <>
            <source src="/assets/blackhole-optimized.mp4" type="video/mp4" />
            <source src="/assets/blackhole.webm" type="video/webm" />
          </>
        )}
        {src.includes('herovid') && (
          <>
            <source src="/assets/herovid.webm" type="video/webm" />
            <source src="/assets/herovid.mp4" type="video/mp4" />
          </>
        )}
        {/* Fallback to original */}
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoBackground;