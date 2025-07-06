'use client';
import React from 'react';

const MainContent = () => {
  return (
    <div className="pb-5 px-5">
      <div className="font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 border border-gray-200">
        {/* Problem Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">The Problem</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Integra, a global management consulting firm renowned for its strategic insights, found its operational agility increasingly constrained by a patchwork of legacy systems. The firm’s expansive global presence, while a testament to its success, created significant hurdles in servicing a diverse international clientele and managing seamless inter-office collaboration. The lack of a unified digital platform led to fragmented data, inefficient workflows, and communication silos between their international offices. This technological dissonance hampered their ability to leverage their global talent pool effectively and deliver the cohesive, data-driven solutions their clients expected. Recognizing that their continued growth was contingent on digital innovation, Integra sought a strategic partner to architect and implement a comprehensive digital transformation.
            </h5>
          </div>
        </div>

        {/* Solution Overview Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Our Solution: Overview</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Our engagement began with a deep-dive analysis of Integra&apos;s multifaceted operations, identifying critical pressure points in their client lifecycle and internal project management. The primary intervention centered on the deployment of a bespoke, cloud-native platform designed to serve as the central nervous system for their entire global network. This foundational step replaced their disparate CRM and project management tools with a single, integrated solution. This new digital backbone provided a panoramic view of all client interactions, project statuses, and resource allocations across the globe, ensuring that every consultant, regardless of their location, was operating from a single source of truth.
            </h5>
          </div>
        </div>

        {/* Client Portal Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Client Portal & Collaborative Workspaces</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              To specifically address the complexities of servicing international clients, our software introduced a sophisticated client portal and collaborative workspaces. This feature provided Integra&apos;s clients with unprecedented transparency into project progress, allowing for real-time feedback, document sharing, and milestone tracking in a secure, branded environment. Furthermore, the platform&apos;s multilingual support and localized data compliance features ensured that Integra could cater to the specific needs and regulatory requirements of each region they operated in. This direct digital link fostered stronger client relationships, enhanced trust, and significantly streamlined the feedback and approval processes, which were previously managed through cumbersome email chains and multiple file-sharing services.
            </h5>
          </div>
        </div>

        {/* Internal Collaboration Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5 border-b border-gray-200">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Internal Collaboration & Knowledge Management</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              Internally, the challenge of managing inter-office workflows was met with our advanced collaboration and knowledge management modules. We implemented smart resource allocation tools that allowed project managers to identify and assign the best-suited consultants from across the globe based on expertise, availability, and language skills. A centralized knowledge repository, powered by machine learning, enabled consultants to easily access and share best practices, case studies, and market intelligence, breaking down geographical barriers to innovation. This fostered a more cohesive global culture and empowered Integra to bring the full weight of its collective expertise to bear on every client engagement, transforming a distributed network of offices into a truly integrated global team.
            </h5>
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row gap-10 p-5">
          <div className="md:w-1/3">
            <h4 className="text-4xl text-black">Impact & Results</h4>
          </div>
          <div className="md:w-2/3">
            <h5 className="text-xl text-left">
              The culmination of these targeted digital interventions was a profound transformation of Integra&apos;s operational capabilities and competitive standing. The newly digitized platforms drove a significant increase in project efficiency, reduced administrative overhead, and enabled a more agile and responsive approach to client service. Data that was once siloed within regional offices was now aggregated to provide valuable insights for strategic decision-making at the highest level. Ultimately, our partnership empowered Integra to not only overcome the challenges of their global scale but to turn it into a distinct strategic advantage, solidifying their reputation as a forward-thinking leader in the management consulting industry.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
