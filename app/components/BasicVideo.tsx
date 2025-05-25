import React from 'react';

interface BasicVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BasicVideo: React.FC<BasicVideoProps> = ({ 
  src, 
  poster, 
  className = '', 
  style = {} 
}) => {
  // Determine the correct video source
  let videoSrc = src;
  
  if (src.includes('blackhole')) {
    videoSrc = '/assets/blackhole.mp4';
  } else if (src.includes('herovid')) {
    videoSrc = '/assets/herovid.mp4';
  } else if (src.includes('particles')) {
    videoSrc = '/assets/particles-optimized.mp4';
  }

  return (
    <video
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      src={videoSrc}
    />
  );
};

export default BasicVideo;