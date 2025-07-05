'use client';
import React from 'react';

const SolutionOverview = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5">
        <h4 className="text-4xl text-black">Our Solution: Overview</h4>
        <h5 className="text-xl text-left">
          Our initial engagement focused on developing a robust, unified platform to serve as the technological core for Momentum’s entire fleet. We deployed a state-of-the-art system integrating Internet of Things (IoT) sensors, which were installed in every transport vehicle and storage unit. These sensors continuously capture critical data points, including real-time location, ambient temperature, humidity, and door-open status. This information is streamed instantly to a central dashboard, providing Momentum’s logistics coordinators with an unprecedented, live overview of their entire operational landscape. This foundational step moved them from periodic check-ins to a model of constant, proactive monitoring.
        </h5>
      </div>
    </div>
  );
};

export default SolutionOverview;
