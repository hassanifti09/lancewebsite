'use client';
import React from 'react';
import Button from '../components/Button';
import NiceModal from '@ebay/nice-modal-react';
import SoftReachApplicationModal from './SoftReachApplicationModal';
import { useEffect } from 'react';

const HowToApply = () => {
  const softReachModalId = 'soft-reach-application-modal';

  useEffect(() => {
    NiceModal.register(softReachModalId, SoftReachApplicationModal);
  }, []);

  const showSoftReachModal = () => {
    NiceModal.show(softReachModalId);
  };

  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col rounded-2xl bg-stone-950 pb-24 w-full p-5 font-light tracking-tight leading-tight text-white/95">
        <div className="flex items-center flex-col w-full text-center">
          <div className="w-full py-10 px-20"></div>
          <div>
            <h2 className="text-3xl md:text-6xl mb-8">How to Apply</h2>
            <p className="text-base md:text-lg text-stone-300">Find out how to determine your eligibility for the SoftReach Program.</p>
          </div>
          <div className="space-y-4 w-full md:w-3/4 mt-8 text-left">
            <p className="text-white/80">
              Businesses are proactively identified and informed of their qualification for the SoftReach Program based on publicly available information.
            </p>
            <p className="text-white/80">
              For businesses that have received such a notification, the next step would be to reply to the communication to express interest and request further details on the enrollment process.
            </p>
            <p className="text-white/80">
              If you have not been contacted but believe your business fits the profile of an SME in the United States, it is recommended to submit an application at the link below. This is the most effective way to determine your eligibility and the subsequent application steps.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="white" onClick={showSoftReachModal} text="Apply Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
