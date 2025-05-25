"use client";
import React, { useEffect, useRef } from 'react';

interface StreamingVideoProps {
  streamId?: string; // For Cloudflare Stream
  hlsUrl?: string; // For HLS streaming
  mp4Url?: string; // Fallback MP4
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StreamingVideo: React.FC<StreamingVideoProps> = ({ 
  streamId,
  hlsUrl,
  mp4Url,
  poster, 
  className = '', 
  style = {} 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hlsUrl || !videoRef.current) return;

    // Check if HLS is supported natively (Safari)
    if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = hlsUrl;
      return;
    }

    // For other browsers, you'd need HLS.js library
    // Install with: npm install hls.js
    // Then uncomment below:
    /*
    import Hls from 'hls.js';
    
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoRef.current);
      
      return () => {
        hls.destroy();
      };
    }
    */
  }, [hlsUrl]);

  // For Cloudflare Stream
  if (streamId) {
    return (
      <div className={className} style={style}>
        <iframe
          src={`https://iframe.videodelivery.net/${streamId}`}
          style={{ border: 'none', width: '100%', height: '100%' }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
    );
  }

  // For HLS or MP4
  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="none"
    >
      {mp4Url && <source src={mp4Url} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default StreamingVideo;