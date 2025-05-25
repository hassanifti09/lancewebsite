"use client";
import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export default function SplineWrapper(props: SplineWrapperProps) {
  return <Spline {...props} />;
}