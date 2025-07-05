'use client';
import React from 'react';

const ImplementationProcess = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5">
        <h4 className="text-4xl text-black">Implementation Process: A Collaborative Journey</h4>
        <h5 className="text-xl text-left">
          Our implementation process was highly collaborative, involving close coordination with OSDCORB&apos;s engineering, IT, and production teams. Key steps included:
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Data Collection & Preparation:</strong> Working with OSDCORB to identify and integrate relevant data sources, ensuring data quality and accessibility.
            </li>
            <li>
              <strong>Model Training & Validation:</strong> Developing and refining machine learning models using historical data, followed by rigorous testing and validation in a simulated environment.
            </li>
            <li>
              <strong>System Integration:</strong> Seamlessly embedding the Predictamaint platform within OSDCORB&apos;s existing IT infrastructure, ensuring minimal disruption to ongoing operations.
            </li>
            <li>
              <strong>User Training & Adoption:</strong> Providing comprehensive training to OSDCORB personnel, empowering them to effectively utilize the new system and interpret its insights.
            </li>
            <li>
              <strong>Continuous Optimization:</strong> Establishing a feedback loop for ongoing model refinement and system enhancements based on real-world performance and evolving operational needs.
            </li>
          </ul>
        </h5>
      </div>
    </div>
  );
};

export default ImplementationProcess;
