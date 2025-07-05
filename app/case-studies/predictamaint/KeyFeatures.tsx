'use client';
import React from 'react';

const KeyFeatures = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5">
        <h4 className="text-4xl text-black">Key Features of the Predictamaint System</h4>
        <h5 className="text-xl text-left">
          The Predictamaint system was built with several critical features to ensure comprehensive and effective predictive maintenance:
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <strong>Real-time Data Ingestion & Analysis:</strong> Seamless integration with existing SCADA and IoT sensors to collect continuous data on machine performance, environmental conditions, and operational parameters.
            </li>
            <li>
              <strong>Anomaly Detection:</strong> AI models trained to identify subtle deviations from normal operating patterns, signaling potential issues long before they escalate into critical failures.
            </li>
            <li>
              <strong>Predictive Analytics:</strong> Advanced algorithms that forecast the remaining useful life (RUL) of components and predict the likelihood of failure, providing maintenance teams with actionable insights.
            </li>
            <li>
              <strong>Automated Alerting & Reporting:</strong> Instant notifications to relevant personnel via dashboards, email, and SMS when anomalies are detected or maintenance is recommended, coupled with detailed reports for strategic planning.
            </li>
            <li>
              <strong>Root Cause Analysis Support:</strong> Tools to assist engineers in understanding the underlying causes of predicted failures, enabling more effective long-term solutions.
            </li>
          </ul>
        </h5>
      </div>
    </div>
  );
};

export default KeyFeatures;
