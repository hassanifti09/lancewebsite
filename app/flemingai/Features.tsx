'use client';
import React from 'react';
import { FaBrain, FaCode, FaChartLine } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">Differentiating Features of FlemingAI</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
          What sets Fleming apart is its specialized, intelligent features that go far beyond simple automation.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaBrain className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Predictive Denial Analysis
            </h5>
            <p className="text-sm text-black/65 text-left">
              The AI uses machine learning to analyze vast datasets of historical claims and identify patterns that lead to rejections. This allows the system to flag a claim&apos;s denial risk before it is submitted, giving staff a chance to make corrections proactively.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaCode className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              AI-Assisted Coding
            </h5>
            <p className="text-sm text-black/65 text-left">
              Leverages Natural Language Processing (NLP) to scan clinical documentation and suggest the most accurate ICD-10 and CPT codes, significantly reducing compliance risks associated with upcoding or downcoding.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
          <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <FaChartLine className="text-5xl text-black/70" />
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-3xl font-medium text-left">
              Intelligent Charge Capture
            </h5>
            <p className="text-sm text-black/65 text-left">
              Automatically identifies and records all billable services from physician notes and electronic health records, ensuring no revenue is lost due to missed charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;