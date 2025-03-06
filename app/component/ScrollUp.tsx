"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 
        bg-green-600 text-white p-3 md:p-4 lg:p-5 rounded-full shadow-lg 
        transition-all duration-500 ease-in-out transform ${
          showButton ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-0 translate-y-10"
        } hover:bg-green-700`}
    >
      <FaArrowUp size={20} className="animate-bounce" />
    </button>
  );
}
