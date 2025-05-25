import React from 'react';
import { SplineScene } from './DynamicSpline';

interface SplineBackgroundProps {
  scene: string;
  scale?: number;
  className?: string;
}

export const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  scene, 
  scale = 1, 
  className = "" 
}) => {
  return (
    <div className="absolute inset-0 z-0 ">
      <div 
        className="absolute inset-0"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        <SplineScene
          scene={scene}
          className={`w-full h-full ${className}`}
        />
      </div>
    </div>
  );
};