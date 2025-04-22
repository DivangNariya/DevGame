import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Contact Us Form */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 bg-white text-black rounded-md shadow-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 bg-white text-black rounded-md shadow-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 bg-white text-black rounded-md shadow-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold text-gray-700" htmlFor="message">
              Enter Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="px-4 py-2 border border-gray-300 bg-white text-black rounded-md shadow-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Copyright and IPR Section */}
        <div className="mt-12 text-gray-700">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Copyright Issue
          </h2>
          <p className="mb-6">
            We own the Intellectual Property Rights (IPR) to a large number of the
            games on Fin Gameon sites. For certain games, we requested and obtained
            licenses from the copyright holders known to us. For some games, we could
            not find any copyright information, or, due to general use on the internet,
            this information can no longer be obtained.
          </p>
          <p className="mb-6">
            Some games may be used under special conditions, considering a number of
            prerequisite constraints. These prerequisite constraints are, as far as we
            could determine, met by Fin Gameon.
          </p>
          <p className="mb-6">
            If any copyright or other IPR is possibly being infringed by/on Fin Gameon,
            please inform us immediately by providing the following:
          </p>
          <ol className="list-decimal pl-6 mb-6">
            <li>A description of the IPR that has been infringed, and a description of the infringing activity;</li>
            <li>The electronic or physical signature of the IPR owner or authorized representative;</li>
            <li>The location where the unauthorized copy exists (e.g., URL or evidence of registration);</li>
            <li>A copy of the license to use and protect such IPR (if you're not the owner);</li>
            <li>The identification of the URL or specific location on this site where the material is located;</li>
            <li>Your name and full contact details;</li>
            <li>A statement that you believe the disputed use is not authorized by the copyright owner or the law.</li>
          </ol>
          <p className="mb-6">
            We fully respect the rights of copyright owners. If any issues arise, please
            inform us, and we will resolve the matter promptly. Send your details to:
            <a href="mailto:contact@fingameon.com" className="text-blue-600">
              contact@fingameon.com
            </a>
          </p>
          <p className="text-gray-500 text-center">
            We will review your submission and take action as soon as possible. You will
            receive a reply within 7 days.
          </p>
        </div>
      </div>
    </div>
  );
}
