
import React from 'react'
import { cdn } from '@/lib/cdn'

const OurStory = () => {
  return (
    <div className=" pb-5 px-5">
        <div className="flex  md:p-5 flex-col md:flex-row font-light bg-white rounded-2xl  tracking-tight leading-tight text-black/85 gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-black">Our Story</h4>
        <h5 className="text-xl text-left">
      Lance Systems began its journey in 2017, driven by a clear purpose: to make world-class technology accessible, practical, and transformational for businesses everywhere. With an early focus on the dynamic markets of Asia and the Middle East, we quickly earned a reputation for delivering sophisticated yet cost-effective solutions that helped organizations navigate an increasingly digital landscape. From ambitious startups to established enterprises, every project was an opportunity to align innovation with real business outcomes, ensuring that our solutions fueled growth, streamlined operations, and created lasting value.
      <br></br><br></br>
      As our expertise deepened and our horizons expanded, we set our sights on new frontiers. Today, our operational footprint extends robustly across key international hubs such as the United Kingdom, Canada, Australia, United Arab Emirates, and most recently, the United States of America.
      <br></br><br></br>
      Our core philosophy, and the reason why such a diverse cohort of clients trusts us, is within our ability to innovate and introduce operational efficiency in ways others simply cannot. We engineer clarity out of complexity, reimagining systems and experiences with the precision of technologists and the vision of artists. Simply put, when unbridled technological prowess meets the modern business, it creates an unstoppable and scalable momentum that redefines what&apos;s possible. At Lance we are building possibilities fueled by curiosity, responsibility and bridging barriers. 
      </h5>
        </div>
        <div className="rounded-2xl w-full md:w-1/2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${cdn('About.jpeg')}')` }}>
        </div>
    </div>
    </div>
  )
}

export default OurStory