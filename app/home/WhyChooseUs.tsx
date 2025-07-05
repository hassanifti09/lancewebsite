"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cdn } from '@/lib/cdn';

const WhyChooseUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastHoveredRef = useRef<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    if (lastHoveredRef.current !== index) {
      setIsAnimating(prev => !prev);
      lastHoveredRef.current = index;
    }
  };

  return (
    <div className="flex flex-col tracking-tight font-light text-center items-center justify-between pb-5 pt-24 px-5 gap-40 m-5 rounded-2xl bg-white relative">
      <div id="top half here" className="flex flex-col md:flex-row px-5  md:px-10">
        <div ref={containerRef} className="w-full md:w-1/6 pr-10 gap-24  flex-col justify-between relative md:h-[300px] hidden md:block">
          <div className="px-10">
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('${cdn('why2.jpg')}')` }}
              animate={{ top: isAnimating ? `${containerHeight - 96}px` : "0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-10 w-24 h-24 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url('${cdn('motorbike.jpg')}')` }}
              animate={{ bottom: isAnimating ? `${containerHeight - 96}px` : "0px" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="w-full md:w-4/6 flex flex-col gap-10">
          <h5 className="text-lg md:text-xl text-black/60">How We Make A Difference</h5>
          <h2 className="text-3xl md:text-5xl text-black/85">
            We&apos;re not just a tech company, we empower our customers, building <b>smart, scalable and stunning digital solutions</b> that drive growth
          </h2>
        </div>
        <div className="w-full md:w-1/6 gap-24 flex flex-col justify-between relative md:h-[300px]">
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 rounded-xl bg-cover bg-center hidden md:block"
            style={{ backgroundImage: `url('${cdn('traffic.jpg')}')` }}
            animate={{ top: isAnimating ? `${containerHeight - 96}px` : "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-10 w-24 h-24 rounded-xl bg-cover bg-center hidden md:block"
            style={{ backgroundImage: `url('${cdn('people.jpg')}')` }}
            animate={{ bottom: isAnimating ? `${containerHeight - 96}px` : "0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(0)}
        >
          <div className="flex flex-row justify-between">
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Tailor-Made Solutions
          </h4>
          </div>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            Off the shelf solutions aren&apos;t in our code. We engineer every project specifically for your needs, ensuring it&apos;s scalable, secure, and future ready from its initial build
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Speed Oriented
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            Time and investment are vital. Meeting your deadlines is our priority. Our agile model, with your dedicated software consultant guiding progress, gets your quality MVP or full product to market quickly.
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            Seasoned Global Engineering
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            Our engineers are more than coders, they are seasoned innovators and visionaries. With proven experience from hundreds of projects delivered to world-class institutions and global companies, they are dedicated to building exceptional software.
          </p>
        </div>
        <div 
          className="w-full md:w-1/4 group hover:bg-black/90 rounded-2xl bg-stone-100 p-5 flex flex-col justify-between gap-5"
          onMouseEnter={() => handleMouseEnter(3)}
        >
          <h4 className="text-lg md:text-xl text-left font-medium text-black/85 group-hover:text-white">
            AI-First Thinking
          </h4>
          <p className="text-sm group-hover:text-white leading-tight text-black/65 text-justify">
            From smart automation to deep learning models, we bake AI into the foundation of our solutions — giving your business a strategic edge from the start.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;
