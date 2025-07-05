'use client';
import React from 'react';
import { FaHandshake, FaLaptopCode, FaGlobe } from 'react-icons/fa';

const Values = () => {
  return (
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">The Values That Shape Our Work</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
          The SoftReach Program is guided by a clear set of principles that underscore its mission to democratize technology and foster a more inclusive economic landscape.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaHandshake className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Accessibility
            </h5>
            <p className="text-sm text-black/65 text-left">
              The foundational value of the program is to ensure that all businesses, especially SMEs, have an equal opportunity to access high-quality software solutions, breaking down the financial barriers that have traditionally created a digital divide.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaLaptopCode className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Efficiency & Innovation
            </h5>
            <p className="text-sm text-black/65 text-left">
              By leveraging internal AI systems, SoftReach is committed to operational excellence. This focus on efficiency not only drives down costs for clients but also reflects a dedication to innovative practices in service delivery.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaGlobe className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Global Partnership
            </h5>
            <p className="text-sm text-black/65 text-left">
              The program is built on a model of collaboration with international government bodies. This value highlights a global perspective on corporate social responsibility and a commitment to leveraging partnerships for the benefit of local businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
