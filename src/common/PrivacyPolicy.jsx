import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Privacy Policy and Terms of Use
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">Last updated: 01/04/2025</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Introduction</h2>
            <p>
              Welcome to FinGameon.com! This Privacy Policy and Terms of Use govern your use of our website,
              FinGameon.com, and any related services offered by Fin Gameon.
              By using our website, you agree to the terms outlined in this policy. Please read this document
              carefully to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. Data Collection</h2>
            <p>We don't collect any user information or data from users.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Use of Data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and maintain our website.</li>
              <li>To manage your account and affiliate partner program participation.</li>
              <li>To communicate with you regarding your account, inquiries, and updates.</li>
              <li>To enhance our website's functionality and user experience.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Third-Party Services</h2>
            <p>
              While we do not allow third parties to access or process data directly, we may use third-party
              payment processors to facilitate transactions and payments on our website. Please review their
              respective privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Location of Data Processing</h2>
            <p>Your data will be processed in the United States, where our servers are located.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">6. Children's Privacy</h2>
            <p>
              Our website is accessible to children; however, it is not designed or intended for children under
              the age of 13. We do not knowingly collect personal information from children under 13. If you
              believe that a child has provided us with their personal information, please contact us, and we
              will promptly delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">7. Security Measures</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. However, no data transmission over the internet or
              storage system can be guaranteed as 100% secure. Please take appropriate precautions when sharing
              your information online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Additional Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not collect or store any information related to gambling activities.</li>
              <li>This platform does not include any gambling content.</li>
              <li>All coins in our games are virtual and have no real-world value.</li>
              <li>All games are for fun and entertainment purposes only.</li>
              <li>We do not ask users for any payment collection.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
