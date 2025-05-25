"use client";
import React, { useEffect, useRef, useState } from 'react';

interface StaticVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StaticVideo: React.FC<StaticVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasPlayed = false;

    const tryPlay = () => {
      if (hasPlayed || !video) return;
      
      video.play()
        .then(() => {
          hasPlayed = true;
          setShowPoster(false);
        })
        .catch(() => {
          // Don't log, don't retry, just show poster
        });
    };

    // Only try once when video can play
    video.addEventListener('canplaythrough', tryPlay, { once: true });

    // Clean up
    return () => {
      video.removeEventListener('canplaythrough', tryPlay);
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Always render video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${showPoster ? 'invisible' : 'visible'}`}
        muted
        loop
        playsInline
        preload="metadata"
      >
        {/* Use the optimized MP4 for blackhole */}
        {src.includes('blackhole') ? (
          <source src="/assets/blackhole-optimized.mp4" type="video/mp4" />
        ) : src.includes('herovid.webm') ? (
          <source src="/assets/herovid.mp4" type="video/mp4" />
        ) : (
          <source src={src} type="video/mp4" />
        )}
      </video>
      
      {/* Show poster when needed */}
      {poster && showPoster && (
        <img 
          src={poster} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default StaticVideo;