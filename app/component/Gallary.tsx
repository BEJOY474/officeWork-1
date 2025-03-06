"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7tBX5Ci3YG4y7HrXNBIPzSmC_MTUhHgtng&s", title: "Your Work Title" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaipqYb2ECATgnnaIJjA3ZqFyTwof_zZkUIMrl7jxSlOu4ly56VVw0yMutNh0rQ5gExg&usqp=CAU", title: "Your Work Title" },
  { src: "https://media.cnn.com/api/v1/images/stellar/prod/201020165605-04-working-from-home-stock.jpg?q=x_2,y_102,h_1123,w_1995,c_crop/w_1280", title: "Your Work Title" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1IhHhXANQvemSabviIBReWJ6R8xOMOGzh6SnkfzrEW4VZDjtFWXGINB0e9eOPjrrIG4&usqp=CAU", title: "Your Work Title" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-5 text-gray-900">WHAT CLIENT SAY</h2>
      <p className="text-center text-gray-600 mb-10">Clean and Modern design is our best specialist</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <motion.img 
              src={image.src} 
              alt={image.title} 
              className="w-full h-60 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
              <p className="text-sm text-gray-600">- Graphic Design</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Dialog open={selectedImage !== null} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative bg-white rounded-lg overflow-hidden max-w-3xl mx-auto shadow-lg"
            >
              <motion.button
                className="absolute top-3 right-3 text-gray-700 text-2xl p-3 bg-white rounded-full shadow-md transition-all"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                &times;
              </motion.button>
              <motion.img 
                src={selectedImage} 
                alt="Popup" 
                className="w-full h-auto"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
