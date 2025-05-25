
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Critical above-the-fold component
import Hero from "./home/Hero";

// Lazy load below-the-fold components
const MarqueeComponent = dynamic(() => import("./home/MarqueeComponent"), {
  loading: () => <div className="h-20 animate-pulse bg-stone-200" />,
});

const WhyChooseUs = dynamic(() => import("./home/WhyChooseUs"));
const AboutUsSection = dynamic(() => import("./home/AboutUsSection"));
const OurServicesSection = dynamic(() => import("./home/OurServicesSection"));
const FutureNowSection = dynamic(() => import("./home/FutureNowSection"));
const OurProjects = dynamic(() => import("./home/OurProjects"));
const FaqSection = dynamic(() => import("./home/FaqSection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Hero />
      
      <Suspense fallback={<div className="h-20 animate-pulse bg-stone-200" />}>
        <MarqueeComponent />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-stone-100" />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-white" />}>
        <AboutUsSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-stone-100" />}>
        <OurServicesSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-black" />}>
        <FutureNowSection />
      </Suspense>
      
      <div id="projects">
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-white" />}>
          <OurProjects />
        </Suspense>
      </div>
      
      <Suspense fallback={<div className="min-h-screen animate-pulse bg-stone-100" />}>
        <FaqSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-black" />}>
        <Footer />
      </Suspense>
    </>
  );
}
