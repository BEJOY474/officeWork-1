"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaBehance,
  FaDribbble,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { useState } from "react";
import ScrollToTop from "./ScrollUp";
import Link from "next/link";

export default function TopBar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-gray-100 text-gray-600 text-sm z-50 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row p-3 justify-between items-center px-4">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center self-center gap-4">
            <div className="flex items-center  gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span>Call us: 1234 5678 90</span>
            </div>
            <div className="flex items-center  gap-2">
              <FaEnvelope className="text-green-500" />
              <span>Contact us: your@email.com</span>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex gap-3 mt-2 md:mt-0">
            <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="text-gray-500 hover:text-blue-700 cursor-pointer" />
            <FaGooglePlusG className="text-gray-500 hover:text-red-500 cursor-pointer" />
            <FaBehance className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <FaDribbble className="text-gray-500 hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Navbar Section */}
        <div className="left-0 w-full z-50 bg-white shadow-md">
          <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" >
              <h1 className="text-2xl font-bold text-green-600">MADE</h1>
            </Link>
           

            {/* Menu Items (Desktop) */}
            <ul className="hidden md:flex md:items-center md:space-x-6">
            <li>
                <Link href="/" className="text-gray-700 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-600">
                  About
                </Link>
              </li>
              <li><a href="#" className="text-gray-700 hover:text-green-600">Service</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600">Past Projects</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600">Videos</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600">Company</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600">Contact</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="transition-transform duration-500 ease-in-out">
                {isOpen ? (
                  <FaTimes className="text-2xl text-gray-700" />
                ) : (
                  <FaBars className="text-2xl text-gray-700" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu (Dropdown) */}
          <div
            className={`relative left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible h-auto" : "opacity-0 invisible h-0"
              } md:hidden`}
          >
            <ul className="flex flex-col text-center">
            <li>
                <Link href="/" className="text-gray-700 hover:text-green-600 ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-600">
                  About
                </Link>
              </li>
              <li className="py-3 "><a href="#" className="text-gray-700 hover:text-green-600">Past Projects</a></li>
              <li className="py-3 "><a href="#" className="text-gray-700 hover:text-green-600">Videos</a></li>
              <li className="py-3 "><a href="#" className="text-gray-700 hover:text-green-600">Company</a></li>
              <li className="py-3"><a href="#" className="text-gray-700 hover:text-green-600">Contact</a></li>
            </ul>
          </div>
        </div>





        {/* Scroll to Top Button */}
        <ScrollToTop />



      </div>
    </>
  );
}
