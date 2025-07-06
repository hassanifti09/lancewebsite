'use client';
import React from 'react';
import { cdn } from '@/lib/cdn';

const AcquisitionModel = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex md:p-5 flex-col md:flex-row-reverse font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black">Acquiring the Technology: Subscription vs. One-Time Sale</h4>
          <h5 className="text-xl text-left">
            Healthcare providers can typically acquire an AI billing system through two of our primary models: a subscription or a one-time sale. 
            <br /><br />
            The subscription model involves a recurring monthly or annual fee. This approach offers lower upfront costs, predictable budgeting, and typically includes all software updates, maintenance, and customer support, making it a popular choice for practices of all sizes. 
            <br /><br />
            We also offer a one-time sale model which involves purchasing a perpetual license for the software with a single, significant upfront investment. Quotes are provided upon request.
          </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat min-h-[300px]" style={{ backgroundImage: `url('${cdn('aibill2.jpeg')}')` }}>
        </div>
      </div>
    </div>
  );
};

export default AcquisitionModel;