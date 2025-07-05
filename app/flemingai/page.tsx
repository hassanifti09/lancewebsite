import React from 'react'
import Hero from './Hero'
import PreMain from './PreMain'
import Main from './Main'
import Features from './Features'
import AcquisitionModel from './AcquisitionModel'
import CoreValues from './CoreValues'
import Process from './Process'
import FaqSection from '@/app/home/FaqSection'
import Footer from '@/app/components/Footer'

const FlemingAIPage = () => {
  return (
    <>
      <Hero />
      <PreMain />
      <Main />
      <Features />
      <AcquisitionModel />
      <CoreValues />
      <Process />
      <FaqSection />
      <Footer />
    </>
  )
}

export default FlemingAIPage