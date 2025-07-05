"use client";
import React from 'react';

// Updated Lucide icons for Mobile Development
import { Compass, PenTool, Smartphone, Rocket } from 'lucide-react'; 
// Updated Fa icons for Mobile Development principles
import { FaMobileAlt, FaSyncAlt, FaTachometerAlt } from 'react-icons/fa';
import { SplineBackground } from '@/app/components/SplineBackground';

const Body = () => {
  
  return (
    <div className="flex flex-col">
      <div className="p-5 font-light tracking-tight leading-tight text-black/85">
        <div className="p-5 lg:p-10 rounded-2xl bg-white flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            <div className="w-1/5">
                {/* Title can remain if "Nexus" is the company name */}
                <h2 className="text-3xl lg:text-4xl mb-10 lg:mb-0">The Lance Process</h2>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Compass className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Discover & Strategize</h3>
          <p className="group-hover:text-white/90">We dive deep into your app vision, target audience, and market landscape. Our strategic planning defines core features, platform choice (iOS, Android, Cross-Platform), and a clear roadmap for mobile success.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <PenTool className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Design & Prototype</h3>
          <p className="group-hover:text-white/90">Our UI/UX experts craft stunning, intuitive interfaces. We create interactive prototypes to refine the user journey, ensuring your app is both beautiful and highly usable, maximizing engagement.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Smartphone className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Develop & Test</h3>
          <p className="group-hover:text-white/90">Skilled developers build your app using robust, modern technologies for native or cross-platform performance. Comprehensive testing ensures a polished, bug-free, and reliable mobile experience.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Rocket className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Deploy & Optimize</h3>
          <p className="group-hover:text-white/90">We handle seamless app store submissions (Apple App Store, Google Play). Post-launch, we offer support, ASO, and analytics-driven optimization to fuel user acquisition and sustained app growth.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5">
        <div className="flex bg-black overflow-hidden lg:p-5 flex-col lg:flex-row items-center font-light  rounded-2xl  tracking-tight leading-tight text-white/85 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-white">What We Do</h4>
        <h5 className="text-xl text-left">
        We craft transformative mobile experiences by developing innovative, user-centric solutions tailored to your unique vision. Our work begins with a profound understanding of your target users, market positioning, and growth ambitions. We build custom applications for native iOS, Android, and cross-platform needs that are designed to elevate your brand.
      <br></br><br></br>
      Our expert team of strategists, designers, and developers manages the complete app lifecycle. This comprehensive process includes initial ideation, market research, UI/UX design, robust development, rigorous testing, and a successful app store launch. As your dedicated mobile partner, we ensure full transparency and alignment with your core business objectives throughout the engagement.

      <br></br><br></br>
      We translate these strategic insights into a mobile application that is technologically sound, intuitive to use, and highly scalable. The final product is a powerful tool engineered to captivate users, drive engagement, and deliver measurable results, helping you harness the full potential of mobile technology to expand your reach and impact.

      </h5>
        </div>
        <div className="hidden lg:block relative h-[400px] w-full lg:w-1/2  rounded-xl">
        <SplineBackground
        scene="https://prod.spline.design/AKli4pQOmgLAv4Tk/scene.splinecode" scale={2.2} 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Powering Our Mobile Innovation</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        We strategically design exceptional mobile apps by blending user empathy with cutting-edge technology to realize a clear vision for market success. Our guiding principles apply throughout the entire app lifecycle, prioritizing deep user engagement and technical excellence to ensure sustainable app growth and a lasting impact.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaMobileAlt className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      User-First Design & UX
    </h5>
    <p className="text-sm text-black/65 text-left">
      Your users are paramount. We ground every design in thorough user research and UX best practices, creating intuitive, accessible, and delightful mobile experiences that resonate and retain.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Agile / Iterative Development
    </h5>
    <p className="text-sm text-black/65 text-left">
      We embrace agility for flexibility and speed. Through iterative cycles, transparent communication, and continuous feedback, we build adaptable apps that quickly respond to market needs and user insights.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaTachometerAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Performance & Scalability
    </h5>
    <p className="text-sm text-black/65 text-left">
      Future-proof your app. We engineer for speed, stability, and growth, using clean code and robust architectures to deliver high-performing apps that scale seamlessly with your user base.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body