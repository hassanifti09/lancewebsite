'use client';
import React from 'react';

const ClientPortal = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5">
        <h4 className="text-4xl text-black">Client Portal for Transparency</h4>
        <h5 className="text-xl text-left">
          To directly address the need for greater transparency, we designed a secure, client-facing portal. This feature became a cornerstone of the partnership, offering Momentum&apos;s pharmaceutical clients a real-time window into their shipments&apos; journey. Clients can now log in to track their assets on a live map, view second-by-second temperature and humidity logs, and access a complete, unalterable record of the entire transit history. The system also generates automated alerts for clients and internal teams if any parameter approaches a predefined threshold, ensuring all stakeholders have immediate visibility and can take preemptive action. This level of transparency has been instrumental in building deeper trust and confidence with their partners.
        </h5>
      </div>
    </div>
  );
};

export default ClientPortal;
