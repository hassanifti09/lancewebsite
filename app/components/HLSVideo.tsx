"use client";
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src: string; // .m3u8 file path
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string; // Fallback MP4 source
}

const HLSVideo: React.FC<HLSVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {},
  fallbackSrc
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startPlayback = async () => {
      try {
        // Ensure video is muted for autoplay
        video.muted = true;
        await video.play();
      } catch {
        console.log('Autoplay prevented, waiting for user interaction');
      }
    };

    // Native HLS support (Safari, iOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        startPlayback();
      });
      
      video.addEventListener('error', () => {
        if (fallbackSrc) {
          console.log('HLS failed, falling back to MP4');
          video.src = fallbackSrc;
        } else {
          setHasError(true);
        }
      });
      
      return;
    }

    // Use HLS.js for other browsers
    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        startLevel: -1, // Auto quality selection
        debug: false,
        xhrSetup: (xhr: XMLHttpRequest) => {
          xhr.withCredentials = false;
        }
      });
      
      hlsRef.current = hls;
      
      hls.loadSource(src);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        startPlayback();
      });

      // Handle video ending for proper looping
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      });
      
      // Also ensure loop attribute is set
      video.loop = true;

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Fatal network error encountered, trying to recover');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Fatal media error encountered, trying to recover');
              hls.recoverMediaError();
              break;
            default:
              console.error('Fatal error, cannot recover');
              if (fallbackSrc) {
                console.log('Falling back to MP4');
                hls.destroy();
                video.src = fallbackSrc;
              } else {
                setHasError(true);
              }
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (fallbackSrc) {
      // No HLS support, use fallback
      video.src = fallbackSrc;
      video.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        startPlayback();
      });
    } else {
      setHasError(true);
    }
  }, [src, fallbackSrc]);

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-900`} style={style}>
        <p className="text-white">Video streaming not supported</p>
      </div>
    );
  }

  return (
    <>
      {isLoading && poster && (
        <img 
          src={poster} 
          alt="Loading video..." 
          className={`${className} absolute`}
          style={style}
        />
      )}
      <video
        ref={videoRef}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        preload="auto"
      />
    </>
  );
};

export default HLSVideo;