import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const text = `Taking Pre-
 Orders Now!`;

   const lines = text.split("\n");
const Footer = () => {
    const [isCarLitOnLoad, setIsCarLitOnLoad] = useState(false);
 useEffect(() => {
    // Set a 2000ms (2 second) delay before automatically turning the lights on.
    const timer = setTimeout(() => {
      setIsCarLitOnLoad(true); 
    }, 2000); // <-- 2000 milliseconds = 2 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <> 
       <section className="relativew w-full bg-[#A61313] px-6  flex flex-col items-center justify-center text-center text-white ">

 <div className="max-w-7xl  mx-auto flex  items-center text-center">
    <div className="text-left w-full sm:w-7/12  ">
       <h3 className="font-title uppercase text-start text-lg md:text-5xl font-medium">
       
        {lines.map((line, lineIndex) => {
                 const letters = Array.from(line);
                 return (
                   <span key={lineIndex} className="block font-title">
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
        className="h-32 border-l border-white mx-5  sm:mx-10 my-5"></motion.div>
    < motion.div
     initial={{ opacity: 1, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
    className="flex flex-col gap-5 text-left">
      <span className="text-white text-sm  sm:text-base ">Lock in your custom EV motor and be one of the first to experience the Thunk3 advantage.</span>
   



               <motion.button
                    className="w-fit relative overflow-hidden px-8 py-2 rounded-full border bg-[#666666]/28 border-gray-400 text-sm  sm:text-base font-body group"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1em] overflow-hidden">
                      {/* First layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        BOOK YOURS NOW  •
                      </span>
                      {/* Second layer */}
                      <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                       BOOK YOURS NOW  •
                      </span>
                    </span>
                  </motion.button>
    </motion.div>

    </div>

    </section>
    <footer className="bg-black w-full text-gray-400 py-10 mt-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl px-6 flex flex-col sm:flex-row  justify-between ">
        
        {/* Left Section */}
        <div className="">
          <h2 className="text-4xl font-title uppercase font-medium text-white mb-3 tracking-wider">Stay Updated</h2>
          <p className=" leading-relaxed">
           We promise not to flood your inbox.
          </p>
          <form action="" className="flex flex-col gap-3 py-4">
          <input type="text" placeholder="Enter your email" className="border-b  border-white  focus:border-b active:border-b focus-visible:border-b outline-0" />
   {/* <button className="px-6 py-2 rounded-full border uppercase border-gray-400 text-sm font-body hover:bg-gray-200 hover:text-black transition">
              Submit now  •
            </button> */}

<motion.button
                    className=" relative overflow-hidden uppercase px-8 py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    <span className="block h-[1em] overflow-hidden">
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
<div className=" flex gap-10 sm:gap-20">
        {/* Middle Section (Links) */}
        <div className="flex flex-col space-y-2 ">
          <h3 className="text-lg sm:text-xl font-title uppercase font-medium text-white mb-2 ">Quick Links</h3>
          <a href="#" className="hover:text-white  text-[#757575]  transition">Home</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">About US</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">Services</a>
            <a href="#" className="hover:text-white  text-[#757575] transition">Products</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">Contact</a>
        </div>

        {/* Right Section (Socials) */}
        <div className="flex flex-col gap-6 ">
              <div className="flex   gap-10 sm:gap-20">
                 <div className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl font-title uppercase font-medium text-white mb-2">Media</h3>
          <a href="#" className="hover:text-white  text-[#757575] transition">News</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">Gallery</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">Videos</a>
        
        </div>
            
            
              <div className="flex flex-col space-y-2">
          <h3 className="text-lg sm:text-xl font-title uppercase font-medium text-white mb-2">Legal</h3>
          <a href="#" className="hover:text-white  text-[#757575] transition">Terms & Condition</a>
          <a href="#" className="hover:text-white  text-[#757575] transition">Privacy Policy</a>
       
        </div>
</div>

            <div>
         
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="jam:linkedin" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:instagram" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="ic:round-tiktok" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:facebook" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mdi:youtube" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-white  text-[#757575] p-2 border bg-[#666666]/28 border-[#DDDDDD] rounded-full transition"><Icon icon="mingcute:pinterest-fill" className="text-white w-4 h-4 md:w-4 md:h-4" /></a>

          </div>
        </div>





        </div>
      </div>
 </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CarShowcase. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
