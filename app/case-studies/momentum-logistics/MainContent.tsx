'use client';
import React from 'react';

const MainContent = () => {
  return (
    <div className="pb-5 px-5">
      <div className="font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 border border-gray-200">
        {/* Problem Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">The Problem</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Momentum Logistics and Partners, a leader in the high-stakes world of temperature-controlled pharmaceutical transport, operated on a foundation of precision and trust. The critical nature of their cargo, life-saving medicines, vaccines, and biologics, meant that there was zero margin for error. Any deviation in the cold chain could compromise product integrity, leading to significant financial loss and, more importantly, endangering patient health. The company faced the immense challenge of not only maintaining perfect environmental conditions during transit but also of providing verifiable, real-time proof of this integrity to their clients and regulatory bodies. Recognizing these pressures, Momentum Logistics partnered with us to co-create a solution that would elevate their standards for transparency and operational efficiency.
            </h5>
          </div>
        </div>

        {/* Solution Overview Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Our Solution: Overview</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Our initial engagement focused on developing a robust, unified platform to serve as the technological core for Momentum’s entire fleet. We deployed a state-of-the-art system integrating Internet of Things (IoT) sensors, which were installed in every transport vehicle and storage unit. These sensors continuously capture critical data points, including real-time location, ambient temperature, humidity, and door-open status. This information is streamed instantly to a central dashboard, providing Momentum’s logistics coordinators with an unprecedented, live overview of their entire operational landscape. This foundational step moved them from periodic check-ins to a model of constant, proactive monitoring.
            </h5>
          </div>
        </div>

        {/* Client Portal Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Client Portal for Transparency</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              To directly address the need for greater transparency, we designed a secure, client-facing portal. This feature became a cornerstone of the partnership, offering Momentum&apos;s pharmaceutical clients a real-time window into their shipments&apos; journey. Clients can now log in to track their assets on a live map, view second-by-second temperature and humidity logs, and access a complete, unalterable record of the entire transit history. The system also generates automated alerts for clients and internal teams if any parameter approaches a predefined threshold, ensuring all stakeholders have immediate visibility and can take preemptive action. This level of transparency has been instrumental in building deeper trust and confidence with their partners.
            </h5>
          </div>
        </div>

        {/* Internal Operational Efficiency Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Internal Operational Efficiency</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              The same data that provides external transparency has also been a powerful engine for internal operational efficiency. Our platform leverages artificial intelligence to analyze route performance, traffic patterns, and weather data to suggest optimal, more reliable delivery routes, significantly reducing transit times and fuel consumption. The automated data logging and report generation features have drastically simplified regulatory compliance, transforming a once-tedious manual process into a streamlined, error-free workflow. Furthermore, predictive maintenance alerts for refrigeration units, based on performance data, have minimized equipment failures, ensuring the integrity of the cold chain and maximizing fleet uptime.
            </h5>
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Impact & Results</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Through this strategic partnership, Momentum Logistics has fundamentally transformed its operations, solidifying its position as a clear industry leader. The enhanced transparency is no longer just a feature but a core component of their brand promise, providing their clients with unparalleled peace of mind. Operationally, the gains in efficiency have led to reduced costs, improved delivery performance, and a more resilient supply chain. By embracing this technological evolution, Momentum Logistics not only mitigated the inherent risks of pharmaceutical transport but also created a powerful competitive advantage built on verifiable data, absolute transparency, and operational excellence.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
