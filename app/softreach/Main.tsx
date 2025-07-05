'use client';
import React from 'react';
import { cdn } from '@/lib/cdn';

const Main = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex md:p-5 flex-col md:flex-row font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black">Empowering SMEs</h4>
          <h5 className="text-xl text-left">
            In today's competitive landscape, SoftReach is designed to be a pivotal initiative which aims to empower Small and Medium-Sized Enterprises (SMEs) across the United States. This program offers access to the same high-caliber software services that are typically reserved for large corporate clients that Lance services, but at a significantly reduced cost.
            <br /><br />
            Since SoftReach is funded by our government partners who are committed to technological accessibility, qualification for the SoftReach Program is determined through an assessment of publicly available data on a company's size, number of employees, and revenue streams, ensuring that the subsidized cost is directed toward its intended recipients.
          </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${cdn('people.jpg')}')` }}></div>
      </div>
    </div>
  );
};

export default Main;
