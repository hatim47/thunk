import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
export default function Head() {
  const [isOpen, setIsOpen] = useState(false);
 const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800); // slight delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* Header */}
      <header className="relative  w-full max-w-7xl flex items-center justify-between mx-auto px-6 py-4 top-0 left-0 bg-transparent backdrop-blur-md z-50">
        <div
      className={`absolute -top-10  left-[20%] w-[200px] h-[90px]    sm:left-[40%] sm:w-[300px] sm:h-[120px] bg-white blur-[120px] rounded-full z-0 transition-opacity duration-2000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    ></div>


        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src="/Layer_1.png" className="w-8/12" alt="Logo" />
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-xl hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed w-6/12 lg:w-4/12 xl:w-3/12 h-[98vh] right-0 bg-[#1C1C1C] rounded-l-3xl mt-2  z-50 flex flex-col justify-between transform transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top row: Logo + Close */}
        <div className="flex items-center justify-between py-6  px-15">
          <img src="/Layer_1.png" className="w-24 pe-7" alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-white hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Center Menu Items */}
        <nav className="flex flex-col items-start px-15 justify-center flex-1 space-y-8 text-2xl font-medium ">
          <a href="#" className="font-title" >Home</a>
          <a href="#" className="font-title">About</a>
          <a href="#" className="font-title">Services</a>
          <a href="#" className="font-title">Contact</a>
        </nav>

        {/* Bottom Icons */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-1 xl:space-x-6 p-6 ">
            <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="jam:linkedin" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
                      <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:instagram" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
                      <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="ic:round-tiktok" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
                      <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:facebook" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
                      <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:youtube" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
                      <a href="#" className="hover:text-white p-2 shadow-xl shadow-black/50  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mingcute:pinterest-fill" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
          
        </div>
      </div>
    </>
  );
}
