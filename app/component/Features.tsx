"use client";
import { FaThumbsUp, FaMobileAlt, FaSlidersH } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="w-full  py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="relative top-18 lg:top-2  max-w-6xl mx-auto px-6 lg:px-16">
        <motion.h2 
          className="text-3xl lg:text-4xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <FaThumbsUp className="text-green-500 text-6xl" />, 
              title: "Best Quality Design", 
              description: "We deliver top-notch, pixel-perfect designs tailored to your needs." 
            },
            { 
              icon: <FaMobileAlt className="text-blue-500 text-6xl" />, 
              title: "Responsive Design", 
              description: "Our designs adapt seamlessly to all screen sizes and devices." 
            },
            { 
              icon: <FaSlidersH className="text-purple-500 text-6xl" />, 
              title: "Easy to Customize", 
              description: "Easily tailor your site to match your brand and preferences." 
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-5 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {feature.icon}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
