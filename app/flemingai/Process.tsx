'use client';
import React from 'react';
import { FaDatabase, FaSyncAlt, FaSearch, FaChartLine, FaExclamationTriangle, FaChartBar } from 'react-icons/fa';

const Process = () => {
  return (
    <div className="pb-5 px-5">
      <div className="md:p-5 font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85">
        <div className="w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black text-center">The Process from Integration to Reimbursement</h4>
          <h5 className="text-xl text-center max-w-4xl mx-auto">
            We follow a structured process designed for seamless integration and maximum impact.
          </h5>
          <div className="grid grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaDatabase className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Data Integration
                  </h5>
                  <span className="text-xl font-light text-black/70">01</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  The journey begins with the AI platform being securely connected to the practice&apos;s existing Electronic Health Record (EHR) and Practice Management (PM) systems.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaSyncAlt className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Automated Workflow
                  </h5>
                  <span className="text-xl font-light text-black/70">02</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  Once live, patient encounter data flows into the system, where AI assists with charge capture and coding.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaSearch className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Proactive Review
                  </h5>
                  <span className="text-xl font-light text-black/70">03</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  Before submission, every claim undergoes a rigorous review, where the AI scrubs it for errors and flags it for potential denial.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaChartLine className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Real-Time Tracking
                  </h5>
                  <span className="text-xl font-light text-black/70">04</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  After submission, the platform provides real-time tracking until payment is received.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaExclamationTriangle className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Denial Management
                  </h5>
                  <span className="text-xl font-light text-black/70">05</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  In the event of a denial, the system facilitates an intelligent process by categorizing the reason and recommending the most effective appeal strategy.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-5">
              <div className="bg-gray-200 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <FaChartBar className="text-5xl text-black/70" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <h5 className="text-2xl font-medium text-left">
                    Continuous Improvement
                  </h5>
                  <span className="text-xl font-light text-black/70">06</span>
                </div>
                <p className="text-sm text-black/65 text-left">
                  Turning data into actionable insights for continuous financial improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
