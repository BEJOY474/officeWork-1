"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Welcome to Made",
    subtitle: "We Do Business All The Time",
    description: "- We Transform a Concept into Market Success -",
  },
  {
    title: "Innovate With Us",
    subtitle: "Your Growth, Our Mission",
    description: "- Unlock the Future of Business Solutions -",
  },
  {
    title: "Join The Revolution",
    subtitle: "Success Begins Here",
    description: "- Creating Opportunities for Everyone -",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative top-32 md:top-28 lg:top-10 w-full min-h-screen flex flex-col items-center justify-center text-center text-gray-600 px-6 sm:px-4 py-16 sm:py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg')",
      }}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl sm:max-w-md"
      >
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-light">
          {slides[currentIndex].title}
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold my-6">
          {slides[currentIndex].subtitle}
        </h1>
        <p className="text-xl sm:text-lg">{slides[currentIndex].description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
      >
        <button className="bg-green-600 text-white px-6 sm:px-4 py-3 sm:py-2 rounded-lg shadow-lg hover:bg-green-700 transition text-lg sm:text-sm font-semibold">
          Buy Now
        </button>
        <button className="bg-gray-100 text-gray-800 px-6 sm:px-4 py-3 sm:py-2 rounded-lg shadow-lg hover:bg-gray-300 transition text-lg sm:text-sm font-semibold">
          Take a Tour
        </button>
      </motion.div>

      {/* Left and Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
      >
        <FaArrowLeft className="text-white text-2xl sm:text-xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
      >
        <FaArrowRight className="text-white text-2xl sm:text-xl" />
      </button>
    </div>
  );
}
