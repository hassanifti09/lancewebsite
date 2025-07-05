'use client';
import React from 'react';
import { cdn } from '@/lib/cdn';

const Main = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex md:p-5 flex-col md:flex-row font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black">Turnkey AI Solution</h4>
          <h5 className="text-xl text-left">
            Our EVO™ program will deliver a complete turnkey AI solution, seamlessly bundling our sophisticated AI agentic software with custom AI-powered kiosks or interactive displays, all ready for deployment in the near future.
            <br /><br />
            This integrated system is engineered to function as a highly competent worker within your business, proving especially effective in enhancing customer engagement and operational efficiency, particularly within the service sector. Moreover, EVO™ offers a significant positive impact for any company looking to innovatively position AI as its public face, providing a reliable, intelligent, and engaging brand representative to interact with your clientele.
          </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[300px]" style={{ backgroundImage: `url('${cdn('ai-kiosk.jpg')}')` }}>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-black/85">This product is under development.</h2>
        <h3 className="text-3xl md:text-5xl font-light text-black/70 mt-4">Check back soon for updates.</h3>
      </div>
    </div>
  );
};

export default Main;
