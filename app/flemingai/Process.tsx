'use client';
import React from 'react';

const Process = () => {
  return (
    <div className="pb-5 px-5">
      <div className="md:p-5 font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85">
        <div className="w-full flex flex-col gap-10 p-5">
          <h4 className="text-4xl text-black text-center">The Process from Integration to Reimbursement</h4>
          <h5 className="text-xl text-center max-w-4xl mx-auto">
            We follow a structured process designed for seamless integration and maximum impact.
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">01</div>
              <h6 className="text-2xl font-medium">Data Integration</h6>
              <p className="text-sm text-black/65">
                The journey begins with the AI platform being securely connected to the practice&apos;s existing Electronic Health Record (EHR) and Practice Management (PM) systems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">02</div>
              <h6 className="text-2xl font-medium">Automated Workflow</h6>
              <p className="text-sm text-black/65">
                Once live, patient encounter data flows into the system, where AI assists with charge capture and coding.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">03</div>
              <h6 className="text-2xl font-medium">Proactive Review</h6>
              <p className="text-sm text-black/65">
                Before submission, every claim undergoes a rigorous review, where the AI scrubs it for errors and flags it for potential denial.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">04</div>
              <h6 className="text-2xl font-medium">Real-Time Tracking</h6>
              <p className="text-sm text-black/65">
                After submission, the platform provides real-time tracking until payment is received.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">05</div>
              <h6 className="text-2xl font-medium">Denial Management</h6>
              <p className="text-sm text-black/65">
                In the event of a denial, the system facilitates an intelligent process by categorizing the reason and recommending the most effective appeal strategy.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-6xl font-light text-black/70">06</div>
              <h6 className="text-2xl font-medium">Continuous Improvement</h6>
              <p className="text-sm text-black/65">
                Turning data into actionable insights for continuous financial improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;