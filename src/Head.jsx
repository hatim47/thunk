import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Head() {
     const MotionLink = motion(Link);
  const [isOpen, setIsOpen] = useState(false);
 const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1800); // slight delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     
      <header className="relative  w-full max-w-7xl flex items-center justify-between mx-auto px-6 py-4 top-0 left-0   z-50">
        <div
      className={`absolute -top-10 left-[20%] w-[200px] h-[90px] sm:left-[35%]  xl:left-[15%]  xl:w-[900px] xl:h-[190px] sm:w-[300px] sm:h-[120px]  bg-white blur-[180px]  rounded-full z-0 transition-opacity duration-2000 ${
        show ? "opacity-70" : "opacity-0"
      }`}
    ></div>
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src="/Layer_11.png" className="w-5/12  sm:w-9/12" alt="Logo" />
        </Link>       
        <div className="flex gap-3">
        <motion.a
                 href="/contact"              
                    className="w-fit font-my relative  overflow-hidden uppercase px-2 lg:px-8 text-white shadow-xl shadow-black/30 py-2 rounded-full border bg-[#666666]/28 border-gray-400 text-xs  sm:text-lg font-body group"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1.2em] overflow-hidden">
                  
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                      let’s talk  •
                      </span>
                   
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        let’s talk  •
                      </span>
                    </span>
                  </motion.a>
               <motion.button
               onClick={() => setIsOpen(true)}
                    className="w-fit font-my relative overflow-hidden px-3 lg:px-8 text-white shadow-xl shadow-black/30 py-2 rounded-full border bg-[#666666]/28 border-gray-400 text-xs  sm:text-lg font-body group"
                    initial={{ opacity: 0, x: 100 }}
                     animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1.2em] overflow-hidden">
                  
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       MENU  •
                      </span>
                   
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       MENU  •
                      </span>
                    </span>
                  </motion.button>         
            

</div>

      </header>

      <div
        className={`fixed w-8/12 lg:w-4/12 xl:w-3/12   sm:h-[98vh] right-0 bg-[#1C1C1C] rounded-l-3xl mt-2  z-50 flex flex-col justify-between transform transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between py-6  px-15">
          <img src="/Layer_11.png" className="w-24 sm:w-5/12 pe-7" alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-white "
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col items-start uppercase px-15 justify-center flex-1 space-y-6 text-lg   md:text-3xl font-medium ">
        <Link to="/" className="font-title">Home</Link>
  <Link to="/motor" className="font-title">Product</Link>
  <Link to="/service" className="font-title">Partnership Services</Link>
  <Link to="/new" className="font-title">News</Link>
  <Link to="/gallery" className="font-title">Gallery</Link>
   <Link to="/faq" className="font-title">FAQ</Link>
  <Link to="/video" className="font-title">Video</Link>
    <Link to="/contact" className="font-title">pre-orders</Link>
    <Link to="/download" className="font-title">download</Link>
  <Link to="/contact" className="font-title">Contact Us</Link>
        </nav>

        {/* Bottom Icons */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-1 xl:space-x-2 p-6 ">
            <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="jam:linkedin" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
                      <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:instagram" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
                      <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="ic:round-tiktok" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
                      <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:facebook" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
                      <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:youtube" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
                      <a href="#" className="hover:text-white p-1 sm:p-2 shadow-xl shadow-black/20  border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mingcute:pinterest-fill" className="text-white w-4 h-4 md:w-6 md:h-6" /></a>
          
        </div>
      </div>
    </>
  );
}
