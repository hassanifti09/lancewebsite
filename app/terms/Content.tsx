'use client';
import React from 'react';

const Content = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5 md:p-10">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-sm text-black/60 mb-8">Effective Date: January 1, 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-medium mb-4">1. Acceptance of Terms</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                By accessing and using the services provided by Lance Systems (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">2. Services Description</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Lance Systems provides technology consulting, software development, and related services. The specific services to be provided will be outlined in separate service agreements or statements of work.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">3. User Obligations</h2>
              <p className="text-lg text-black/75 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-black/75 leading-relaxed ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in any activity that interferes with or disrupts our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">4. Intellectual Property</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of Lance Systems and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">5. Confidentiality</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary information received during the course of the business relationship. This obligation shall survive the termination of any service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">6. Payment Terms</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Payment terms will be specified in individual service agreements. Generally, invoices are due within 30 days of receipt unless otherwise specified. Late payments may be subject to interest charges at the rate of 1.5% per month or the maximum rate permitted by law, whichever is less.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">7. Limitation of Liability</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                In no event shall Lance Systems be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">9. Indemnification</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Lance Systems and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">10. Termination</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">11. Governing Law</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of the United States and the State of Florida, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">12. Changes to Terms</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">13. Contact Information</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 text-lg text-black/75">
                <p>Lance Systems</p>
                <p>Email: legal@lancesystems.com</p>
                <p>Phone: +1 267-986-9898</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;