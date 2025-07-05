'use client';
import React from 'react';
import { cdn } from '@/lib/cdn';

const Main = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex md:p-5 flex-col md:flex-row font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black">AI-Based Medical Billing</h4>
          <h5 className="text-xl text-left">
            Traditionally, a manual, labor-intensive, and error-prone field, medical billing has long been a source of financial strain and administrative burden for healthcare practices. AI-driven solutions address these challenges head-on by minimizing human error, accelerating the reimbursement timeline, and maximizing revenue. 
            <br /><br />
            By intelligently navigating the complex web of payer regulations and coding requirements, these platforms empower healthcare providers to achieve greater financial stability and operational efficiency, allowing them to focus more on patient care.
          </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${cdn('medical.jpg')}')` }}></div>
      </div>
    </div>
  );
};

export default Main;