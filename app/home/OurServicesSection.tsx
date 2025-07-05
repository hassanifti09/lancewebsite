'use client';
import React, { useRef } from 'react';
import Service from './ServicesSection'; // Assuming ServicesSection is the correct component name
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { cdn } from '@/lib/cdn';

// --- Project Data ---
const services = [
  {
    title: "AI & Machine Learning",
    image: cdn('artificial-intelligence.jpg'),
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.<br></br>Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.",
    route: "/services/ai-ml-consulting"
  },
  {
    title: "Software Development",
    image: cdn('software-development.webp'),
    description: "At our core, we craft bespoke software solutions meticulously aligned with your specific business objectives, operational workflows, and user requirements. We tackle diverse challenges, whether that means bringing an innovative product vision to market, engineering a sophisticated custom system for your internal operations, or strategically modernizing your legacy applications using contemporary technologies like Python or Go to unlock new efficiencies.<br></br>Our development philosophy prioritizes robust, clean architecture and highly intuitive user interface design, ensuring your software is both powerful and genuinely easy to use. We build scalable, high performance applications utilizing principles like domain driven design and agile methodologies. You can expect reliable, purpose built technology, for example, secure cloud native applications or data driven platforms, that evolves seamlessly alongside your business growth.",
    route: "/services/enterprise-software-development"
  },
  {
    title: "Web Development",
    image: cdn('web-development.jpeg'),
    description: "Your website is often the first impression, we make sure it counts. At Lance, we build fast, responsive, and visually polished websites that don't just look good, but perform flawlessly across all devices. Our team utilizes leading front end frameworks such as React, Angular, or Vue.js to create visually compelling and highly interactive user interfaces.<br></br>These interfaces are powered by robust backend systems developed with technologies like Node.js or Python, ensuring speed and reliability. From sophisticated ecommerce platforms that drive sales to secure enterprise portals and engaging SaaS product frontends, we focus on flawless responsive design across all devices. We aim for intuitive navigation and user experiences that significantly boost engagement and conversion rates for your business.",
    route: "/services/web-development"
  },
  
  {
    title: "Mobile Development",
    image: cdn('mobile-development.jpeg'),
    description: "In today's mobile first world, having a strong presence on handheld devices is essential for engaging users effectively wherever they are. We specialize in building true native mobile applications for both iOS, using Swift, and Android, using Kotlin. This approach ensures optimal performance, seamless device integration, and a user experience that feels intuitive and perfectly attuned to each platform.<br></br>Our comprehensive mobile development lifecycle covers everything from initial concept and meticulous UI/UX design that reflects your brand, to robust backend API integration for secure real time data exchange. We also manage the complexities of a smooth app store deployment process. The result is a powerful, reliable mobile application that serves as a valuable asset, extending your services and strengthening customer connections on the go.",
    route: "/services/mobile-development"
  },
  {
    title: "ERP Consulting",
    image: cdn('erp-consulting.jpg'),
    description: "Effectively managing your core business operations is fundamental to achieving sustainable growth and maintaining a competitive edge. Our expert ERP consulting services are designed to streamline these complexities. We focus on tailoring and implementing leading Enterprise Resource Planning systems, meticulously configured to unify your most critical business functions, from intricate financial management to dynamic supply chain optimization.<br></br>From finance and inventory to HR and CRM, we align your ERP with your workflows to improve efficiency, visibility, and control. If you're ready to simplify complexity and scale smarter, we're here to make it happen.",
    route: "/services/erp-consulting"
  },
  {
    title: "Cloud & DevOps",
    image: cdn('cloud-consulting.webp'),
    description: "We help you move fast, stay secure, and scale without stress. Whether you're migrating to the cloud, setting up CI/CD pipelines, or optimizing infrastructure, our team brings the tools and expertise to streamline your operations.<br></br>From AWS to Azure, containers to Kubernetes, we design cloud-native architectures and DevOps workflows that keep your systems reliable, flexible, and ready to grow. If uptime, speed, and efficiency matter — we&apos;ve got you covered.",
    route: "/services/cloud-consulting"
  },

]
// --- End Project Data ---


const OurServices = () => {
  const containerRef = useRef(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scaleTransforms = services.map((_, index) => {
    const sectionHeight = 1 / services.length;
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
        <h2 className="text-lg mt-10 mb-5 md:mt-0 md:mb-0 text-center md:text-left md:text-xl flex-shrink-0">Our Services</h2>
        <h5 className="text-3xl p-2 md:p-0 text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        Let&apos;s cut to the chase. We do a select few things, and we do them exceptionally well: creating impactful AI solutions, developing custom software, and providing expert cloud engineering, all designed to solve your toughest challenges and drive significant growth.
        </h5>
      </div>

      {/* STACKED PINNING CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-fit"
        
      >
        {services.map((service, index) => {
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
                  title={service.title}
                  description={service.description}
                  dangerousHTML={true}
                  route={service.route}
                  imageUrl={service.image}
                />
              </div>
            </motion.div>
          );
        })}
      </div> {/* End STACKED PINNING CONTAINER */}

    </div>
    </div>
    </div>
  );
};

export default OurServices;
