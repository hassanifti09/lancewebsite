'use client';
import React from 'react';

const Content = () => {
  return (
    <div className="pb-5 px-5">
      <div className="flex flex-col font-light bg-white rounded-2xl tracking-tight leading-tight text-black/85 gap-10 p-5 md:p-10">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-sm text-black/60 mb-8">Last Updated: January 1, 2024</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-medium mb-4">Introduction</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Lance Systems (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">1. Information We Collect</h2>
              <p className="text-lg text-black/75 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-black/75 leading-relaxed ml-4">
                <li><strong>Identity Data:</strong> first name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> email address, telephone numbers, billing address, and delivery address</li>
                <li><strong>Technical Data:</strong> internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                <li><strong>Usage Data:</strong> information about how you use our website and services</li>
                <li><strong>Marketing and Communications Data:</strong> your preferences in receiving marketing from us and your communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">2. How We Use Your Information</h2>
              <p className="text-lg text-black/75 leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-black/75 leading-relaxed ml-4">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To fulfill any other purpose for which you provide it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">3. Data Security</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">4. Data Retention</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">5. Your Legal Rights</h2>
              <p className="text-lg text-black/75 leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-black/75 leading-relaxed ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">6. Cookies</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">7. Third-Party Links</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">9. International Transfers</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We may transfer your personal data outside your country of residence. When we do, we will ensure that it is protected and transferred in a manner consistent with legal requirements applicable to the information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-medium mb-4">11. Contact Us</h2>
              <p className="text-lg text-black/75 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 text-lg text-black/75">
                <p>Lance Systems</p>
                <p>Privacy Department</p>
                <p>Email: privacy@lancesystems.com</p>
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