'use client';
import React from 'react';
import { FaCheckCircle, FaRocket, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const CoreValues = () => {
  return (
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">Core Values and Guiding Principles</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
          The most effective AI medical billing solutions are built upon a foundation of core values that ensure trust and deliver results.
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaCheckCircle className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Accuracy
            </h5>
            <p className="text-sm text-black/65 text-left">
              Our foremost value is Accuracy, as the system&apos;s primary function is to guarantee that claims are clean, compliant, and correct on the first submission.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaRocket className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Efficiency
            </h5>
            <p className="text-sm text-black/65 text-left">
              Intrinsically linked to accuracy, with the goal of streamlining workflows, eliminating redundant manual tasks, and accelerating the entire revenue cycle.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaChartBar className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Transparency
            </h5>
            <p className="text-sm text-black/65 text-left">
              Manifested through intuitive dashboards and real-time analytics that provide clear visibility into financial performance, claim status, and potential bottlenecks.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaShieldAlt className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Security & Compliance
            </h5>
            <p className="text-sm text-black/65 text-left">
              Underpinning all is an unwavering commitment to ensuring robust protection of sensitive patient data and strict adherence to HIPAA regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;