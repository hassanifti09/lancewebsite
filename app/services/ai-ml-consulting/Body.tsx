"use client";
import React from 'react'
// Updated Lucide icons for AI/ML
import { Brain, Network, Scaling, TrendingUp } from 'lucide-react';
// Updated Fa icons for AI/ML principles
import { FaBrain, FaSyncAlt, FaShieldAlt } from 'react-icons/fa' 
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
          
          <Brain className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Discover & Strategize</h3>
          <p className="group-hover:text-white/90">We dive deep into your business, users, and workflows to define exactly what the software needs to do, and why. This includes mapping out architecture, and tech stacks aligned with your goals.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Network className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Model & Validate</h3>
          <p className="group-hover:text-white/90">We manage the entire lifecycle for selecting and developing appropriate AI/ML models, including initial proof-of-concept and rigorous validation. Our process involves feature engineering, algorithm selection, and iterative testing to build accurate, fair, and robust models for real-world application.
</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Scaling className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Integrate & Scale</h3>
          <p className="group-hover:text-white/90">We engineer production-ready AI solutions, integrating models seamlessly into your existing systems and workflows. Our focus is on scalability, MLOps best practices, and ensuring smooth deployment with continuous communication.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <TrendingUp className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Monitor & Optimize</h3>
          <p className="group-hover:text-white/90">Post-deployment, we continuously monitor model performance, drift, and impact. We provide ongoing optimization, retraining, and adaptation to ensure your AI solutions evolve with your business and deliver sustained value.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5">
        <div className="flex bg-black  lg:p-5 flex-col lg:flex-row items-center font-light  rounded-2xl  tracking-tight leading-tight text-white/85 gap-10 overflow-hidden">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-white">What We Do</h4>
        <h5 className="text-xl text-left">
        We unlock the strategic value of your data by crafting bespoke AI/ML solutions tailored to your unique challenges and opportunities. Our work provides predictive insights, enables intelligent automation, and creates innovative AI-driven products that deliver a decisive competitive advantage.

      <br></br><br></br>
      Our expert team manages the complete AI lifecycle, covering data strategy, model development, deployment, and operationalization. We begin each engagement with a thorough understanding of your strategic objectives, partnering with you through a collaborative, agile, and transparent process to achieve your goals.
      <br></br><br></br>
      This partnership approach results in practical, ethical, and seamlessly integrated AI solutions. We build transparent and impactful systems designed to be powerful tools that drive your sustainable growth.

      </h5>
        </div>
        <div className="hidden lg:block relative h-[400px] w-full lg:w-1/2  rounded-xl" >
        <SplineBackground
        scene="https://prod.spline.design/QypHxO30Qc7ZrMLF/scene.splinecode" scale={2.2} 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Guiding Our AI/ML Expertise</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        We create powerful AI with insight, rigor, and a strong sense of responsibility. Our principles guide the entire development lifecycle, prioritizing accuracy and ethical considerations to create solutions that provide sustainable value. We ensure every solution we deliver drives meaningful and lasting impact.

        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaBrain className="text-5xl text-black/70" /> {/* Changed icon and text size based on original FaCode */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Insight-Driven Strategy
    </h5>
    <p className="text-sm text-black/65 text-left">
      We solve critical business challenges by developing targeted AI solutions grounded in a deep understanding of your data. Our approach is designed to deliver actionable insights and a measurable ROI, providing your business with immediate clarity and a lasting competitive advantage.

    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-xl text-black/70" /> {/* Kept icon, class matches original */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Iterative & Adaptive AI
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our AI development is dynamic, responsive, and designed for evolution. Through rapid prototyping, continuous model evaluation, and feedback integration, we ensure our solutions adapt and improve in line with your evolving needs and data.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaShieldAlt className="text-4xl text-black/70" /> {/* Changed icon and text size based on original FaCogs */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Responsible & Robust AI
    </h5>
    <p className="text-sm text-black/65 text-left">
      Generic solutions fall short. We craft custom AI systems with a focus on fairness, transparency, and reliability, ensuring our models are not only powerful but also ethically sound and built to perform consistently.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body
