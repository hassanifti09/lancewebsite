'use client';
import React, { useRef } from 'react';
import Service from './ServicesSection';
import { motion, useScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { cdn } from '@/lib/cdn';

// --- Project Data ---
// Using the project data structure you provided
const projects = [
  {
    id: '01',
    title: 'Predictamaint',
    description:
      "OSDCORB Tyres, a leading tyre manufacturer, faced significant unplanned equipment downtime, leading to production halts and increased costs. Their traditional reactive maintenance approach was inefficient and unsustainable.\n\nWe implemented an AI-powered predictive maintenance system that analyzes real-time data to forecast equipment failures. This solution enables proactive maintenance, minimizing disruptions and optimizing operational efficiency for OSDCORB Tyres.",
    imageUrl: cdn('grad1.jpg'), // Placeholder, ideally a specific image for Predictamaint
    technologies: [{ text: 'AI', variant: 'white' },
      { text: 'Machine Learning', variant: 'black' },
      { text: 'IoT', variant: 'white' },
      { text: 'Predictive Analytics', variant: 'black' }],
    route: '/case-studies/predictamaint',
  },
  {
    id: '02',
    title: 'Integra',
    description:
      'Integra, a global management consulting firm, struggled with fragmented data and inefficient workflows due to a patchwork of legacy systems. This hindered their ability to service diverse international clients and manage seamless collaboration.\n\nWe developed a bespoke, cloud-native platform that unified their global operations, replacing disparate CRM and project management tools. This integrated solution provides a panoramic view of client interactions and resource allocations, enhancing agility and collaboration.',
    imageUrl: cdn('grad1.jpg'), // Placeholder, ideally a specific image for Integra
    technologies: [{ text: 'Cloud', variant: 'white' },
      { text: 'Custom Software', variant: 'black' },
      { text: 'CRM', variant: 'white' },
      { text: 'Project Management', variant: 'black' }],
    route: '/case-studies/integra',
  },
  {
    id: '03',
    title: 'Momentum Logistics',
    description:
      'Momentum Logistics, a leader in temperature-controlled pharmaceutical transport, faced the critical challenge of maintaining cold chain integrity and providing verifiable, real-time proof to clients and regulators. Zero margin for error meant any deviation could compromise product integrity and patient health.\n\nWe co-created an IoT-integrated platform that provides continuous, real-time monitoring of critical data points like temperature and humidity. This solution enhances transparency, streamlines regulatory compliance, and optimizes operational efficiency, solidifying Momentum Logistics\' position as an industry leader.',
    imageUrl: cdn('grad1.jpg'), // Placeholder, ideally a specific image for Momentum Logistics
    technologies: [{ text: 'IoT', variant: 'white' },
      { text: 'Real-time Monitoring', variant: 'black' },
      { text: 'Supply Chain', variant: 'white' },
      { text: 'AI', variant: 'black' }],
    route: '/case-studies/momentum-logistics',
  },
  // Add more projects as needed
];
// --- End Project Data ---

const OurProjects = () => {
  const containerRef = useRef(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scaleTransforms = projects.map((_, index) => {
    const sectionHeight = 1 / projects.length;
    const sectionStart = index * sectionHeight;
    const sectionEnd = sectionStart + sectionHeight;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(
      scrollYProgress,
      [sectionStart, sectionEnd],
      [1, 0.85]
    );
  });

  return (
    <div className="p-5">
      <div className="bg-white p-5 rounded-2xl">
      <div className="w-full font-light tracking-tight leading-tight bg-white flex flex-col gap-5 md:p-5 text-black/85">
      {/* HEADING */}
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">Our Flagship Projects</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.
        </h5>
      </div>

      {/* STACKED PINNING CONTAINER */}
      <div 
        ref={containerRef} 
        className="relative h-fit"
        
      >
        {projects.map((project, index) => {
          // Calculate scroll progress ranges for each item
          //const sectionHeight = 1 / projects.length;
          //const sectionStart = index * sectionHeight;
          // Access the pre-calculated scale transform for this index
          const scale = scaleTransforms[index];

          return (
            <motion.div
              key={index}
              className={isDesktop ? "sticky top-0 w-full origin-center" : "w-full origin-center"}
              style={{
                scale: isDesktop ? scale : 1,
                zIndex: index,
              }}
            >
              {/* Container to center content within the full-screen sticky area */}
              <div className="h-fit w-full flex flex-col md:flex-row items-center justify-center">
                <Service
                  number={`0${index + 1}`}
                  title={project.title}
                  description={project.description}
                  dangerousHTML={true}
                  route={project.route}
                  imageUrl={project.imageUrl}
                />
              </div>
            </motion.div>
          );
        })}
      </div> {/* End STACKED PINNING CONTAINER */}
      
      {/* Content AFTER the sticky sections */}
      {/* Added margin-top for spacing */}
      
    </div>
    </div>
    </div>
  );
};

export default OurProjects;
