import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import SolutionOverview from './SolutionOverview';
import KeyFeatures from './KeyFeatures';
import ImplementationProcess from './ImplementationProcess';
import Impact from './Impact';
import FaqSection from '@/app/home/FaqSection';
import Footer from '@/app/components/Footer';

const PredictamaintCaseStudy = () => {
  return (
    <>
      <Hero />
      <Problem />
      <SolutionOverview />
      <KeyFeatures />
      <ImplementationProcess />
      <Impact />
      <FaqSection />
      <Footer />
    </>
  );
};

export default PredictamaintCaseStudy;
