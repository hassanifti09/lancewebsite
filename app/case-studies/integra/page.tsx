import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import SolutionOverview from './SolutionOverview';
import ClientPortal from './ClientPortal';
import InternalCollaboration from './InternalCollaboration';
import Impact from './Impact';
import FaqSection from '@/app/home/FaqSection';
import Footer from '@/app/components/Footer';

const IntegraCaseStudy = () => {
  return (
    <>
      <Hero />
      <Problem />
      <SolutionOverview />
      <ClientPortal />
      <InternalCollaboration />
      <Impact />
      <FaqSection />
      <Footer />
    </>
  );
};

export default IntegraCaseStudy;
