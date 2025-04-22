// src/pages/Developer.jsx
import React from "react";

export default function Developer() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
          Developers – Fin Gameon
        </h1>
        <p className="text-base sm:text-lg leading-relaxed">
          Fin Gameon is a professional game development studio focusing on high-quality games. 
          We also offer services for game applications and responsive web-based games. The 
          Fin Gameon platform allows developers to upload their content directly to the website, 
          publish it, track its performance, and even monetize it — just like a normal site, 
          but with a huge advantage.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          FinGameon.com attracts a large audience, giving developers the opportunity to gain traffic 
          and monetize their games effectively.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
          <h2 className="text-lg font-semibold">Contact Us & Join Now</h2>
          <a
            href="mailto:contact@fingameon.com"
            className="text-blue-600 hover:underline break-words"
          >
            contact@fingameon.com
          </a>
        </div>
      </div>
    </div>
  );
}
