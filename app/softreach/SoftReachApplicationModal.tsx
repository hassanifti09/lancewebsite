'use client';
import React, { useEffect, useId } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import SoftReachApplicationForm from './SoftReachApplicationForm';

const SoftReachApplicationModal = NiceModal.create(() => {
  const modal = useModal();
  const modalTitleId = useId();

  useEffect(() => {
    if (modal.visible) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth > document.documentElement.clientWidth
                             ? window.innerWidth - document.documentElement.clientWidth
                             : 0;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.classList.add('modal-open');
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        document.body.classList.remove('modal-open');
      };
    }
  }, [modal.visible]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-8 transition-opacity duration-300 ${
        modal.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => modal.hide()} // Close modal when clicking outside form
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      <h2 id={modalTitleId} className="sr-only">SoftReach Application Form</h2>
      <button
        onClick={() => modal.hide()}
        aria-label="Close modal"
        className="absolute top-8 right-8 text-white p-2 hover:text-white/80 z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div className="flex items-center justify-center min-h-full">
        <div
          className="w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside form
        >
          <SoftReachApplicationForm />
        </div>
      </div>
    </div>
  );
});

export default SoftReachApplicationModal;
