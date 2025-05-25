"use client";
import React, { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {},
  priority = false 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari-specific autoplay fix
    const attemptPlay = async () => {
      try {
        // Ensure video is muted (required for autoplay)
        video.muted = true;
        video.setAttribute('muted', '');
        
        // Safari-specific attributes
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        
        // Remove controls if they exist
        video.removeAttribute('controls');
        
        // WebM files need special handling
        if (src.endsWith('.webm')) {
          // Check if browser supports WebM
          const canPlayWebM = video.canPlayType('video/webm');
          if (!canPlayWebM) {
            console.warn('Browser does not support WebM format');
            setHasError(true);
            return;
          }
        }
        
        // Force load and play
        video.load();
        
        // Try multiple play attempts
        const tryPlay = async () => {
          try {
            await video.play();
            console.log('Video playing');
          } catch {
            // Safari might need a small delay
            setTimeout(async () => {
              try {
                await video.play();
              } catch {
                console.log('Autoplay blocked, waiting for interaction');
              }
            }, 50);
          }
        };
        
        // Attempt play immediately and after various events
        tryPlay();
        video.addEventListener('loadedmetadata', tryPlay, { once: true });
        video.addEventListener('loadeddata', tryPlay, { once: true });
        video.addEventListener('canplay', tryPlay, { once: true });
        
      } catch (error) {
        console.error('Video play error:', error);
      }
    };

    // Handle video loading
    const handleLoadedData = () => {
      console.log(`Video loaded: ${src}`);
      setIsLoaded(true);
      attemptPlay();
    };
    
    // Handle metadata loaded
    const handleLoadedMetadata = () => {
      console.log(`Video metadata loaded: ${src}, duration: ${video.duration}`);
    };

    // Handle video ending to ensure proper looping
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', (e) => {
      console.error(`Video error for ${src}:`, e);
    });

    // Preload video for better performance
    if (priority) {
      video.load();
    }

    // Initial play attempt after a small delay
    const timeoutId = setTimeout(attemptPlay, 100);

    // Safari-specific: Use IntersectionObserver to play when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [priority, src]);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setHasError(true);
    const videoElement = e.currentTarget;
    
    // Fallback to poster image if video fails
    if (poster) {
      videoElement.style.display = 'none';
    }
  };

  return (
    <>
      {hasError && poster && (
        <img 
          src={poster} 
          alt="Video fallback" 
          className={className}
          style={style}
        />
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        controls={false}
        preload={priority ? "auto" : "metadata"}
        poster={poster}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        style={{ ...style, display: hasError ? 'none' : 'block' }}
        onError={handleError}
      >
        <source src={src} type={
          src.endsWith('.webm') ? 'video/webm' : 
          src.endsWith('.m4v') ? 'video/mp4' : 
          src.endsWith('.mp4') ? 'video/mp4' : 
          'video/mp4'
        } />
        {src.endsWith('.m4v') && (
          <source src={src.replace('.m4v', '.mp4')} type="video/mp4" />
        )}
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default OptimizedVideo;