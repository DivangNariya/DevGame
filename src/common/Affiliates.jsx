// src/pages/Affiliates.jsx
import { useState } from "react";

export default function Affiliates() {
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
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Form at the top */}
        <div>
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Contact Us and Join Now
          </h2>
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
        </div>

        {/* Affiliate Program content at the bottom */}
        <div className="mt-12">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Affiliate Program - Fin Gameon
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We welcome web as well as mobile apps developers to drive traffic to
            our website and start earning money through your traffic. Here's what
            you need to know:
          </p>
          <div className="grid grid-cols-1  gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                We Welcome
              </h2>
              <p className="text-gray-700">
                We have an extensive range of HTML5 games, optimized for both
                desktop and mobile devices. You can easily choose a few games or
                set up your own gaming portal as you wish.
              </p>
              <p className="text-gray-700 mt-4">
                Fin Gameon has a team of 25 people working on our gaming platform.
                Our mission is to create a browser-gaming platform that works
                seamlessly for users around the world, and rewards developers both
                big and small.
              </p>
              <p className="text-gray-700 mt-4">
                Our games are playable on desktop, tablet, and mobile so you can
                enjoy them anywhere, whether you're at home, at school, or on the go.
                Every month millions of gamers from all over the world play their
                favorite games on Fin Gameon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
