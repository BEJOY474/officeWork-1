"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Smith",
    company: "Envato",
    text: "Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "John Doe",
    company: "Envato",
    text: "Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

export default function ClientSay() {
  return (
    <section className="bg-gray-100 py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 uppercase tracking-wide">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-lg">
          Providing the best solutions with a modern and clean design.
        </p>
        <div className="flex flex-col md:flex-row md:gap-12 gap-6 justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-full max-w-xs p-6 md:p-8 rounded-xl transition-all duration-300 bg-white shadow-lg hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-green-500 shadow-lg"
              />
              <div className="text-center mt-4">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-green-600 text-sm font-medium">{testimonial.company}</p>
                <p className="text-gray-600 text-sm md:text-md mt-3 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
