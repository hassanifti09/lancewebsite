'use client';
import React from 'react';

const MainContent = () => {
  return (
    <div className="pb-5 px-5">
      <div className="font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 border border-gray-200">
        {/* Problem Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">The Challenge: Unplanned Downtime and Operational Inefficiency</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              OSDCORB Tyres, a leading global tyre manufacturer, faced a critical challenge that threatened its production efficiency and profitability: frequent, unpredictable equipment downtime. Their extensive manufacturing facilities relied on complex machinery, and unexpected breakdowns led to significant production halts, missed deadlines, and escalating maintenance costs. The traditional reactive maintenance approach meant repairs were initiated only after a failure occurred, resulting in prolonged periods of inactivity, wasted resources, and a constant struggle to meet demand. This lack of foresight not only impacted their bottom line but also strained their operational teams and jeopardized their market position. OSDCORB recognized the urgent need for a proactive solution to minimize disruptions and optimize their maintenance strategy.
            </h5>
          </div>
        </div>

        {/* Solution Overview Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Our Solution: AI-Powered Predictive Maintenance</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              We partnered with OSDCORB Tyres to design and implement a bespoke AI-powered predictive maintenance system, a transformative solution aimed at revolutionizing their operational efficiency. Our approach involved leveraging advanced machine learning algorithms to analyze real-time data streams from critical machinery, including vibration, temperature, pressure, and operational cycles. This system was engineered to move OSDCORB from a reactive to a proactive maintenance paradigm, enabling them to anticipate equipment failures before they occurred and schedule interventions precisely when needed, minimizing disruption and maximizing asset lifespan.
            </h5>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Key Features of the Predictamaint System</h4>
          </div>
          <div className="md:w-2/3">
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

        {/* Implementation Process Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Implementation Process: A Collaborative Journey</h4>
          </div>
          <div className="md:w-2/3">
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

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Impact & Results: A New Era of Operational Excellence</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              The implementation of the Predictamaint system delivered significant, measurable impacts for OSDCORB Tyres:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Reduced Downtime:</strong> A substantial decrease in unplanned equipment failures, leading to improved production continuity and efficiency.
                </li>
                <li>
                  <strong>Optimized Maintenance Costs:</strong> Transition from costly reactive repairs to planned, cost-effective interventions, extending asset life and reducing spare parts inventory.
                </li>
                <li>
                  <strong>Increased Production Output:</strong> Enhanced operational stability translated directly into higher manufacturing output and improved ability to meet market demand.
                </li>
                <li>
                  <strong>Improved Safety:</strong> Proactive identification of potential equipment malfunctions reduced risks to personnel and improved overall workplace safety.
                </li>
                <li>
                  <strong>Enhanced Decision-Making:</strong> Data-driven insights empowered OSDCORB&apos;s management with a clearer understanding of asset health and operational risks, facilitating strategic planning.
                </li>
              </ul>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
