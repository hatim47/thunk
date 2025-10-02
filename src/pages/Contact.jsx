import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';


const text = `Innovation in\nElectrification Starts Here`;




const letterVariantt = {
  hidden: { opacity: 0, y: -50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay:  i * 0.05,
    },
  }),
};

function AnimatedText({ text, className ,lineClasses=[]  }) {
  const lines = text.split("\n"); // 👈 handle line breaks
  return (
    <span className={`inline-block font-title ${className}`}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className={`block ${
            lineClasses[lineIndex] || "" // 👈 apply custom class if provided
          }`}>
          {Array.from(line).map((char, i) => (
            <motion.span
              key={i}
              custom={i + lineIndex * 20} // 👈 offset delay for each line
              variants={letterVariantt}
              initial="hidden"
                whileInView="show"     // 👈 animate when in viewport
  viewport={{ once: true, amount: 0.1 }} 
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function Contact() {
   

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted!');
  };


      useEffect(() => {
        // Set a 2000ms (2 second) delay before automatically turning the lights on.
        const timer = setTimeout(() => {
          setIsCarLitOnLoad(true); 
        }, 2000); // <-- 2000 milliseconds = 2 seconds
    
        // Cleanup function
        return () => clearTimeout(timer);
      }, []);
      const lines = text.split("\n");
     
    // Variants for parent (controls timing of children)
    
    
  return (
    <>
  <Head></Head>

    <section className=" relative -top-25  flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center "
      style={{ backgroundImage: "url('/Group 26773.png')" }}>    
       
                                        </section>
                                          <section className=" relative w-full flex flex-col items-center justify-end text-center text-white sm:pb-30 ">
                            {/* Content */}
                           <div className="z-10 max-w-6xl px-6">
                          <h1 className="text-3xl md:text-7xl font-medium font-title uppercase">
                               {lines.map((line, lineIndex) => {
                              const letters = Array.from(line);
                              return (
                                <span key={lineIndex} className="block ">
                                  {letters.map((char, i) => (
                                    <motion.span
                                      key={i}
                                      initial={{ opacity: 1, y: -20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        duration: 0.5,
                                         delay: 1.8 + i * 0.05 + lineIndex * 0.3,  // stagger across lines
                                      }}
                                      className="inline-block"
                                    >
                                      {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                  ))}
                                </span>
                              );
                            })}      
                          </h1>
                    
                        <motion.p 
                         initial={{ opacity: 0, y: 100 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       viewport={{ once: true, amount: 0.1 }}
                                       transition={{ duration: 1.5, ease: "easeInOut" }}
                        
                        className="px-7 text-sm mt-6 sm:text-xl ">
Whether you are examining your first EV conversion motor, searching for a suitable electric EV motor for your project, or looking to collaborate with us, THUNK is here to help. We bring expertise, inventiveness, and support to guide you every step of the way.                  </motion.p>
                        </div>
                    
                        
                           
                          </section>  



<section className="flex justify-center w-full  mx-auto px-6 pt-30 sm:pt-0 pb-30  sm:pb-60">
    
   <div className="bg-[#1e1e1e] p-10 sm:p-12 shadow-gray-100/15 border border-[#555555] md:p-16 rounded-xl flex flex-col justify-center w-full max-w-7xl shadow-2xl">
      
      {/* Heading */}
               <AnimatedText
        text={`Get In Touch`}
        className="text-2xl text-center pb-10 sm:text-3xl uppercase"
      />

      <form onSubmit={handleSubmit} className="space-y-6 max-[391px]:text-center ">
        {/* Two-Column Group: First Name & Last Name */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-[#757575] text-base font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-[#757575] text-base font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Two-Column Group: Email & Phone Number */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="email" className="block text-[#757575] text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block text-[#757575] text-base font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Full-Width Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-[#757575] text-base font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            className="w-full bg-[#333333] border border-[#555555] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
                                 className="w-fit relative text-white overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                                 initial={{ opacity: 0, x: 100 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true, amount: 0.1 }}
                                 transition={{ duration: 1.5, ease: "easeInOut" }}
                               >
                                 <span className="block h-[1.5em] sm:h-[1.2em] overflow-hidden">
                                   {/* First layer */}
                                   <span className=" block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                     Send Message  •
                                   </span>
                                   {/* Second layer */}
                                   <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                    Send Message  •
                                   </span>
                                 </span>
                               </motion.button>
      </form>

      {/* Footer Text */}
      <span className="text-[#A61313]  text-center text-sm sm:text-xl font-semibold tracking-wider mt-12 mb-4">
        LET'S BUILD THE FUTURE OF DRIVING TOGETHER.
      </span>

      {/* Contact Email */}
      <div className="flex items-center justify-center gap-2 text-[#757575] text-lg">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 51 51" fill="none">
<path d="M42.5 8.5H8.5C6.1625 8.5 4.27125 10.4125 4.27125 12.75L4.25 38.25C4.25 40.5875 6.1625 42.5 8.5 42.5H42.5C44.8375 42.5 46.75 40.5875 46.75 38.25V12.75C46.75 10.4125 44.8375 8.5 42.5 8.5ZM41.65 17.5312L26.6262 26.9237C25.9462 27.3488 25.0538 27.3488 24.3738 26.9237L9.35 17.5312C9.13692 17.4116 8.95033 17.25 8.80151 17.0562C8.6527 16.8624 8.54476 16.6404 8.48422 16.4037C8.42369 16.1669 8.41182 15.9204 8.44933 15.6789C8.48685 15.4374 8.57296 15.2061 8.70247 14.9989C8.83198 14.7917 9.00219 14.6129 9.20279 14.4734C9.4034 14.3338 9.63023 14.2365 9.86955 14.1871C10.1089 14.1378 10.3557 14.1376 10.5952 14.1864C10.8346 14.2352 11.0616 14.3321 11.2625 14.4713L25.5 23.375L39.7375 14.4713C39.9384 14.3321 40.1654 14.2352 40.4048 14.1864C40.6443 14.1376 40.8911 14.1378 41.1304 14.1871C41.3698 14.2365 41.5966 14.3338 41.7972 14.4734C41.9978 14.6129 42.168 14.7917 42.2975 14.9989C42.427 15.2061 42.5132 15.4374 42.5507 15.6789C42.5882 15.9204 42.5763 16.1669 42.5158 16.4037C42.4552 16.6404 42.3473 16.8624 42.1985 17.0562C42.0497 17.25 41.8631 17.4116 41.65 17.5312Z" fill="url(#paint0_linear_172_1039)"/>
<defs>
<linearGradient id="paint0_linear_172_1039" x1="25.5" y1="8.5" x2="25.5" y2="42.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#636363"/>
</linearGradient>
</defs>
</svg>
        <a href="mailto:info@thunkco.us" className="hover:underline">
          info@thunkco.us
        </a>
      </div>
    </div>


    </section>
      <Footer></Footer>
</>
  );
}