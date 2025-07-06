'use client';
import React from 'react';
import DarkHeader from '../components/DarkHeader';
import BasicVideo from '../components/BasicVideo';
import { cdn } from '@/lib/cdn';

const Hero = () => {
  return (
    <div className="relative m-5 rounded-2xl overflow-hidden h-[40vh] md:h-[50vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <BasicVideo
          src={cdn('blackhole.m4v')}
          poster={cdn('fallback.png')}
          className="object-cover w-full h-full"
          style={{ transform: 'scale(1.35)' }}
        />
      </div>
      <div className="relative h-full z-10 flex flex-col justify-between p-5">
        <DarkHeader />
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="px-5 lg:px-10 flex flex-col justify-end gap-8">
            <h1 className="text-[8vw] md:text-[6vw] text-white font-light tracking-tighter leading-tighter">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;