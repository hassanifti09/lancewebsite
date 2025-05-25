"use client";
import React from 'react';

interface ExternalVideoProps {
  youtubeId?: string;
  vimeoId?: string;
  streamableId?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ExternalVideo: React.FC<ExternalVideoProps> = ({ 
  youtubeId,
  vimeoId,
  streamableId,
  className = '', 
  style = {} 
}) => {
  // YouTube (no branding with embed parameters)
  if (youtubeId) {
    return (
      <iframe
        className={className}
        style={style}
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&modestbranding=1&fs=0&rel=0`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  }

  // Vimeo (cleaner than YouTube)
  if (vimeoId) {
    return (
      <iframe
        className={className}
        style={style}
        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1`}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    );
  }

  // Streamable (free, no watermark)
  if (streamableId) {
    return (
      <iframe
        className={className}
        style={style}
        src={`https://streamable.com/o/${streamableId}?autoplay=1&muted=1`}
        allow="autoplay"
        allowFullScreen
      />
    );
  }

  return null;
};

export default ExternalVideo;