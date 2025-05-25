"use client";
import Image from 'next/image';
import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fill = false,
  className = '',
  sizes,
  priority = false,
  quality = 75,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} ${
          isLoading ? 'blur-sm' : 'blur-0'
        } transition-all duration-500`}
        sizes={sizes}
        priority={priority}
        quality={quality}
        onLoad={() => setIsLoading(false)}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default LazyImage;