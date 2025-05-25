import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Loading component
const SplineLoader = () => (
  <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-stone-300 border-t-stone-600 rounded-full animate-spin"></div>
      <p className="text-stone-600 text-sm">Loading 3D Scene...</p>
    </div>
  </div>
);

// Dynamic import of Spline wrapper
export const DynamicSpline = dynamic(() => import('./SplineWrapper'), {
  ssr: false,
  loading: () => <SplineLoader />
});

// Wrapper component for better loading experience
interface SplineSceneProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
  [key: string]: unknown;
}

export const SplineScene = ({ scene, className, style, containerClassName, ...props }: SplineSceneProps) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName || ''}`}>
      <Suspense fallback={<SplineLoader />}>
        <div className="absolute inset-0 overflow-hidden">
          <DynamicSpline 
            scene={scene} 
            className={className} 
            style={{ 
              ...style, 
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none' // Prevent interaction issues
            }}
            {...props} 
          />
        </div>
      </Suspense>
    </div>
  );
};