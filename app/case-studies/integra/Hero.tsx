'use client';
import React from 'react';
import DarkHeader from '@/app/components/DarkHeader';
import { cdn } from '@/lib/cdn';

const Hero = () => {
  return (
    <div className="relative m-5 rounded-2xl overflow-hidden h-[55vh] md:h-[75vh]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={cdn('Integra.jpeg')}
          alt="Integra Hero"
          className="object-cover w-full h-full"
          style={{ transform: 'scale(1.35)' }}
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="relative h-full z-10 flex flex-col justify-between p-5">
        <DarkHeader />
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className=" px-5 lg:px-10 flex flex-col justify-end gap-8">
            <h1 className="text-[10vw] text-white font-light tracking-tighter leading-tighter">
              Integra
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
