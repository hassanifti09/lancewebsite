"use client";
import React, { useEffect, useRef, useState } from 'react';

interface BlazeVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

// Preload cache for videos
const videoCache = new Map<string, Blob>();
const preloadQueue = new Set<string>();

const BlazeVideo: React.FC<BlazeVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {},
  priority = false 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Determine the best video source
  const getOptimalVideoSrc = () => {
    // Use ultra-compressed versions for instant loading
    if (src.includes('blackhole')) {
      return '/assets/ultra/blackhole-ultra.mp4';
    } else if (src.includes('herovid')) {
      return '/assets/ultra/herovid-ultra.mp4';
    } else if (src.includes('particles')) {
      return '/assets/ultra/particles-preview.mp4';
    }
    return src;
  };

  const optimalSrc = getOptimalVideoSrc();

  // Aggressive preloading for priority videos
  useEffect(() => {
    if (priority && !videoCache.has(optimalSrc) && !preloadQueue.has(optimalSrc)) {
      preloadQueue.add(optimalSrc);
      
      fetch(optimalSrc)
        .then(res => res.blob())
        .then(blob => {
          videoCache.set(optimalSrc, blob);
          preloadQueue.delete(optimalSrc);
          
          // If this is our video, use it immediately
          if (optimalSrc === getOptimalVideoSrc()) {
            const url = URL.createObjectURL(blob);
            setVideoUrl(url);
          }
        })
        .catch(() => {
          preloadQueue.delete(optimalSrc);
        });
    }
  }, [optimalSrc, priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let objectUrl: string | null = null;

    const loadVideo = async () => {
      try {
        // Check cache first
        if (videoCache.has(optimalSrc)) {
          const blob = videoCache.get(optimalSrc)!;
          objectUrl = URL.createObjectURL(blob);
          setVideoUrl(objectUrl);
          setIsLoading(false);
          return;
        }

        // For non-priority videos, just use the src directly
        if (!priority) {
          setVideoUrl(optimalSrc);
          setIsLoading(false);
          return;
        }

        // Fetch and cache for priority videos
        const response = await fetch(optimalSrc);
        const blob = await response.blob();
        videoCache.set(optimalSrc, blob);
        
        objectUrl = URL.createObjectURL(blob);
        setVideoUrl(objectUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Video loading error:', error);
        // Fallback to direct loading
        setVideoUrl(optimalSrc);
        setIsLoading(false);
      }
    };

    // Use Intersection Observer for lazy loading
    if (!priority) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadVideo();
            observerRef.current?.disconnect();
          }
        },
        { rootMargin: '50px' }
      );
      
      observerRef.current.observe(video);
    } else {
      // Load immediately for priority videos
      loadVideo();
    }

    return () => {
      observerRef.current?.disconnect();
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [optimalSrc, priority]);

  // Auto-play when video is ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoUrl) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {
        // Silent fail - autoplay might be blocked
      }
    };

    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('loadedmetadata', playVideo);

    // Safari fix
    if (video.readyState >= 3) {
      playVideo();
    }

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('loadedmetadata', playVideo);
    };
  }, [videoUrl]);

  return (
    <>
      {/* Show poster while loading */}
      {isLoading && poster && (
        <img 
          src={poster} 
          alt=""
          className={`${className} absolute`}
          style={style}
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        className={`${className} ${!videoUrl || isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        muted
        loop
        playsInline
        preload={priority ? 'auto' : 'none'}
        poster={poster}
        src={videoUrl}
      />
    </>
  );
};

// Preload critical videos on page load
if (typeof window !== 'undefined') {
  // Preload hero video immediately
  const criticalVideos = [
    '/assets/blackhole-optimized.mp4',
    '/assets/optimized/herovid.m4v'
  ];
  
  criticalVideos.forEach(src => {
    if (!videoCache.has(src) && !preloadQueue.has(src)) {
      preloadQueue.add(src);
      fetch(src)
        .then(res => res.blob())
        .then(blob => {
          videoCache.set(src, blob);
          preloadQueue.delete(src);
        })
        .catch(() => {
          preloadQueue.delete(src);
        });
    }
  });
}

export default BlazeVideo;