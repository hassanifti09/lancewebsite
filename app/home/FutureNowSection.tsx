import React from 'react'
// import Spline from '@splinetool/react-spline/next' // Commenting out as it's no longer used
import FutureMarquee from './FutureMarquee'
import BasicVideo from '../components/BasicVideo'

const FutureNowSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" relative h-[620px] md:h-screen overflow-hidden flex items-center justify-center" id="video-container">
        <BasicVideo
          src="/assets/particles.m4v"
          poster="/assets/fallback.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.35)' }}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <FutureMarquee />
        </div>
      </div>
    </div>
  )
}

export default FutureNowSection
