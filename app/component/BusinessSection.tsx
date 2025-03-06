"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const slides = [
  "https://img.freepik.com/premium-vector/premium-vector-new-business-ui-landing-page-design-template_635283-250.jpg?semt=ais_hybrid",
  "https://media.gettyimages.com/id/1460713621/vector/landing-page-template-abstract-design-with-geometric-shapes-trendy-green-gradient.jpg?s=612x612&w=gi&k=20&c=UIPpJ3B21hiDPImpprb7iDf4Z9O6vXMRDD8Y2Wgrw_A=",
  "https://media.gettyimages.com/id/2163168232/vector/landing-page-template-abstract-design-with-geometric-shapes-trendy-gray-gradient.jpg?s=612x612&w=gi&k=20&c=a4hrI0lAssdtiBbJnF5f6OhC0kq3K0HuRIfY6f3_W00="
];

export default function BusinessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center p-10 bg-gray-100">
      {/* Left: Image Slider */}
      <div className=" w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
        <motion.img
          key={currentIndex}
          src={slides[currentIndex]}
          alt="Business Slide"
          className="w-full h-auto rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Right: Content Section */}
      <div className="lg:w-1/2 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Made is Template for Business</h2>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Clean & Modern Design
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Fully Responsive
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Google Fonts
          </li>
        </ul>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend in mi sit amet mattis.
        </p>
        <div className="mt-6 flex flex-col lg:flex-row md:flex-row gap-4">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition">
            Read More
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
