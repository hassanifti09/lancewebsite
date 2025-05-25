"use client";
import React, { useEffect, useRef, useState } from 'react';

interface UltraFastVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

// Global video element pool for instant playback
const videoPool: HTMLVideoElement[] = [];
const POOL_SIZE = 3;

// Initialize video pool
if (typeof window !== 'undefined') {
  for (let i = 0; i < POOL_SIZE; i++) {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.style.position = 'absolute';
    videoPool.push(video);
  }
}

const UltraFastVideo: React.FC<UltraFastVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {},
  priority = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Get ultra-fast source
  const getUltraSource = () => {
    if (src.includes('blackhole')) {
      return '/assets/ultra/blackhole-ultra.mp4';
    } else if (src.includes('herovid')) {
      return '/assets/ultra/herovid-ultra.mp4';
    } else if (src.includes('particles')) {
      return '/assets/ultra/particles-preview.mp4';
    }
    return src;
  };

  const ultraSrc = getUltraSource();

  useEffect(() => {
    if (!containerRef.current) return;

    // Get video from pool or create new one
    const video = videoPool.pop() || document.createElement('video');
    video.className = className;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    
    // Apply styles
    Object.assign(video.style, style);
    
    videoRef.current = video;
    
    // Ultra-fast loading strategy
    if (priority) {
      // For priority videos, start loading immediately
      video.src = ultraSrc;
      video.load();
      
      const playWhenReady = () => {
        video.play().catch(() => {});
        setIsReady(true);
      };
      
      if (video.readyState >= 3) {
        playWhenReady();
      } else {
        video.addEventListener('canplay', playWhenReady, { once: true });
      }
    } else {
      // For non-priority, use intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            video.src = ultraSrc;
            video.load();
            video.addEventListener('canplay', () => {
              video.play().catch(() => {});
              setIsReady(true);
            }, { once: true });
            observer.disconnect();
          }
        },
        { rootMargin: '100px' }
      );
      
      observer.observe(containerRef.current);
      
      return () => observer.disconnect();
    }

    // Add to DOM
    containerRef.current.appendChild(video);

    return () => {
      // Return video to pool if possible
      if (videoPool.length < POOL_SIZE) {
        video.pause();
        video.removeAttribute('src');
        video.load();
        if (video.parentNode) {
          video.parentNode.removeChild(video);
        }
        videoPool.push(video);
      } else {
        video.remove();
      }
    };
  }, [ultraSrc, className, priority]);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Show poster instantly while video loads */}
      {poster && !isReady && (
        <img 
          src={poster} 
          alt=""
          className={`${className} absolute inset-0`}
          style={style}
          loading="eager"
        />
      )}
      
      {/* Invisible placeholder to maintain layout */}
      {!isReady && (
        <div className={className} style={style} />
      )}
    </div>
  );
};

// Preload critical videos in parallel
if (typeof window !== 'undefined') {
  const preloadVideos = [
    '/assets/ultra/blackhole-ultra.mp4',
    '/assets/ultra/herovid-ultra.mp4'
  ];
  
  preloadVideos.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = src;
    document.head.appendChild(link);
    
    // Also start fetching immediately
    fetch(src, { 
      method: 'GET',
      headers: { 'Range': 'bytes=0-' }
    }).catch(() => {});
  });
}

export default UltraFastVideo;