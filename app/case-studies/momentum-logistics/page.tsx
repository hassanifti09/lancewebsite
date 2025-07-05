import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import SolutionOverview from './SolutionOverview';
import ClientPortal from './ClientPortal';
import InternalOperationalEfficiency from './InternalOperationalEfficiency';
import Impact from './Impact';
import FaqSection from '@/app/home/FaqSection';
import Footer from '@/app/components/Footer';

const MomentumLogisticsCaseStudy = () => {
  return (
    <>
      <Hero />
      <Problem />
      <SolutionOverview />
      <ClientPortal />
      <InternalOperationalEfficiency />
      <Impact />
      <FaqSection />
      <Footer />
    </>
  );
};

export default MomentumLogisticsCaseStudy;
