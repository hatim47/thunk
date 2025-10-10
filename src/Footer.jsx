import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
const text = `Taking Pre-
Orders Now!`;

   const lines = text.split("\n");
const Footer = () => {
 const MotionLink = motion(Link);
const texts = 'Lock in your custom EV motor and be one of the first to experience the Thunk3 advantage.';

  return (
    <> 
  <section className="relativew  w-full bg-[#A61313] px-6 flex flex-col items-center justify-center text-white ">
 <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center py-5  sm:py-0 gap-2 sm:gap-0 ">
    <div className="text-center sm:text-left w-full sm:w-4/12 ">
       <h3 className="font-my uppercase text-center sm:text-start text-lg md:text-4xl font-medium  flex justify-center sm:block">
       
        {lines.map((line, lineIndex) => {
                 const letters = Array.from(line);
                 return (
                   <span key={lineIndex} className="block ">
                     {letters.map((char, i) => (
                       <motion.span
                         key={i}
                         initial={{ opacity: 1, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.1 }} 
                         transition={{
                           duration: 0.5,
                            delay:  i * 0.05 + lineIndex * 0.3,  // stagger across lines
                         }}
                         className="inline-block"
                       >
                         {char === " " ? "\u00A0" : char}
                       </motion.span>
                     ))}
                   </span>
                 );
               })} 
       
       </h3> 


    </div>
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: -1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className=" w-full sm:w-px h-px sm:h-32 border-b sm:border-b-0 sm:border-l border-white max-[430px]:mx-5 sm:mx-10 sm:my-5"></motion.div>
    < motion.div
     initial={{ opacity: 1, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    className="flex flex-col gap-5 text-center sm:text-left items-center sm:items-start">
<h6 className="text-white text-sm sm:text-lg m-0 p-0 w-full leading-relaxed  whitespace-pre-line">
  {texts}
</h6>

              <MotionLink
             to="/contact"
                    className="w-fit font-my relative overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1.5em] sm:h-[1.2em] overflow-hidden">
                      {/* First layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        BOOK YOURS NOW  •
                      </span>
                      {/* Second layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       BOOK YOURS NOW  •
                      </span>
                    </span>
                  </MotionLink>
    </motion.div>

    </div>

    </section>
    <footer className="bg-black w-full text-gray-400 py-10 mt-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl px-6 xl:px-0 flex flex-col sm:flex-row  justify-between ">
        
        {/* Left Section */}
        <div className="">
          <h2 className="text-3xl md:text-5xl font-title uppercase text-center font-medium text-white mb-3 tracking-wider">Stay Updated</h2>
          <p className="text-center leading-relaxed  text-base md:text-xl">
           We promise not to flood your inbox.
          </p>
          <form action="" className="flex flex-col gap-3 py-4">
          <input type="text" placeholder="Enter your email" className="border-b  pb-2 border-white text-base sm:text-xl focus:border-b active:border-b focus-visible:border-b outline-0" />
   {/* <button className="px-6 py-2 rounded-full border uppercase border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
              Submit now  •
            </button> */}

<motion.button
                    className="font-my text-white/70 relative overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1.2em] overflow-hidden">
                      {/* First layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       Submit now  •
                      </span>
                      {/* Second layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       Submit now  •
                      </span>
                    </span>
                  </motion.button>

          </form>
        </div>
<div className="flex gap-8 sm:gap-20">
        {/* Middle Section (Links) */}
        <div className="flex flex-col space-y-2 ">
          <h3 className="text-lg sm:text-2xl font-title uppercase font-medium text-white mb-2 ">Quick Links</h3>
        
        <NavLink 
    to="/" 
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white " : "text-[#757575] hover:text-white"
      }`
    }
  >
    Home
  </NavLink>

  <NavLink 
    to="/motor"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white " : "text-[#757575] hover:text-white"
      }`
    }
  >
    Our Product
  </NavLink>

  <NavLink 
    to="/service"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white " : "text-[#757575] hover:text-white"
      }`
    }
  >
    Partner with us
  </NavLink>

  <NavLink 
    to="/contact"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white " : "text-[#757575] hover:text-white"
      }`
    }
  >
    Contact
  </NavLink>
        </div>

        {/* Right Section (Socials) */}
        <div className="flex flex-col gap-8">
              <div className="flex   gap-10 sm:gap-20">
                 <div className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-2xl font-title uppercase font-medium text-white mb-2">Media</h3>
           <NavLink
    to="/new"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white font-semibold" : "text-[#757575] hover:text-white"
      }`
    }
  >
    News
  </NavLink>

  <NavLink
    to="/gallery"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white font-semibold" : "text-[#757575] hover:text-white"
      }`
    }
  >
    Gallery
  </NavLink>

  <NavLink
    to="/video"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white font-semibold" : "text-[#757575] hover:text-white"
      }`
    }
  >
    Videos
  </NavLink>
        </div>
            
            
              <div className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-2xl font-title uppercase font-medium text-white mb-2">Legal</h3>
          <NavLink
    to="/terms&condition"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white font-semibold" : "text-[#757575] hover:text-white"
      }`
    }
  >
    Terms & Condition
  </NavLink>

      <NavLink
    to="/privacypolicy"
    className={({ isActive }) =>
      `text-base sm:text-lg transition ${
        isActive ? "text-white font-semibold" : "text-[#757575] hover:text-white"
      }`
    }
  >
    Privacy Policy
  </NavLink>
          {/* <a href="#" className="hover:text-white text-base sm:text-lg text-[#757575] transition">Terms & Condition</a> */}
          {/* <a href="#" className="hover:text-white text-base sm:text-lg text-[#757575] transition">Privacy Policy</a> */}
       
        </div>
</div>

            <div>
         
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="jam:linkedin" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:instagram" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="ic:round-tiktok" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:facebook" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:youtube" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-1 sm:p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mingcute:pinterest-fill" className="text-white w-3 h-3 md:w-4 md:h-4" /></a>

          </div>
        </div>





        </div>
      </div>
 </div>
      <p className="mt-10 text-center text-baes text-gray-500">
        © {new Date().getFullYear()} CarShowcase. All rights reserved.
      </p>
    </footer>
    </>
  );
};

export default Footer;
