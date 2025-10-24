import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const text = `important to note`;
const BASE_DELAY = 2.5;
const letterVariant = {
  hidden: { opacity: 0, y: -30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: BASE_DELAY + i * 0.05,
    },
  }),
};
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
            lineClasses[lineIndex] || "" 
          }`}>
          {Array.from(line).map((char, i) => (
            <motion.span
              key={i}
              custom={i + lineIndex * 20} 
              variants={letterVariantt}
              initial="hidden"
                whileInView="show"     
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
function AnimatedTextt({ text, className ,lineClasses=[]  }) {
  const lines = text.split("\n"); 
  return (
    <span className={`inline-block ${className}`}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className={`block ${
            lineClasses[lineIndex] || "" 
          }`}>
          {Array.from(line).map((char, i) => (
            <motion.span
              key={i}
              custom={i + lineIndex * 20} 
              variants={letterVariant}
              initial="hidden"
              whileInView="show"
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
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}
export default function News() {
  const isMobile = useMediaQuery("(max-width: 640px)");
      const [isCarLitOnLoad, setIsCarLitOnLoad] = useState(false);
      useEffect(() => {     
        const timer = setTimeout(() => {
          setIsCarLitOnLoad(true); 
        }, 2000);  
        return () => clearTimeout(timer);
      }, []);
      const lines = text.split("\n");
        const files = [
    { name: "SPEC SHEET", file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "INSTRUCTION MANUAL", file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { name: "CAD MODELS", file: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  ];
  return (
    <>
  <Head></Head>

    <section className=" relative -top-25  flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center  sm:mb-30"
      style={{ backgroundImage: "url('/Group 26770 (1).png')" }}>           
         <section className=" relative w-full flex flex-col items-center justify-end text-center text-white sm:pb-30 ">
                            {/* Content */}
                           <div className="z-10 max-w-4xl px-6">
                          <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium font-title uppercase">
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
                          </h1>
                    
                        <motion.p 
                         initial={{ opacity: 0, y: 100 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       viewport={{ once: true, amount: 0.1 }}
                                       transition={{ duration: 1.5, ease: "easeInOut" }}
                        
                        className="text-sm mt-6 sm:text-lg ">
Preserving Legacy, Powering the Future with EV Innovation                            </motion.p>
                        </div>
                    
                        
                           
                          </section>  
                                        </section>


<section className="text-white mb-40 md:py-40 px-6 ">
      <div className="max-w-7xl w-full px-6 xl:px-20 mx-auto grid md:grid-cols-10 gap-4  sm:gap-10 items-center ">
        
       
        <div className="text-center sm:text-left md:col-span-5">
      
<AnimatedText
  text={`you can\ndownload!`}
  className="uppercase w-full  text-3xl md:text-5xl lg:text-6xl leading-tight"
/>

   <motion.img
          initial={{ opacity: 1, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
            src="/image 2.png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className="sm:hidden block w-12/12 relative -right-10 my-10  z-0"
          />
          {/* Paragraphs */}
         <div className=" flex  flex-col py-5 mb-7 items-start bg-black ">
      {files.map((item, index) => (
        
        <div className="flex items-center my-2 w-full bg-black">
          <motion.a
                         href={item.file}
          download
          target="_blank"             
                            className="w-fit font-my relative  overflow-hidden uppercase px-3 xl:px-8 text-white shadow-xl shadow-black/30 py-2 rounded-full border bg-[#666666]/28 border-gray-400 text-sm  sm:text-lg font-body group"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          >
                            <span className="block h-[1.2em] overflow-hidden">
                          
                              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                             •  { item.name}
                              </span>
                           
                              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                               •   { item.name} 
                              </span>
                            </span>
                          </motion.a>
           <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
            className="block w-full max-w-2xl h-[1px] flex-1 bg-[#2F2F2F]"></motion.div>
            <motion.a
             href={item.file}
          download
          target="_blank"
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
            className="text-white shadow-xl shadow-black/30 p-2 rounded-full  border bg-[#666666]/28 border-gray-400 text-sm  sm:text-lg "> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-neutral-400 group-hover:text-neutral-200 transition-colors duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
            />
          </svg>
          </motion.a>
     </div>
      ))}
    </div>
         

          {/* Button + Line */}
          <div className="flex items-center max-[431px]:justify-center">
          
            <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
            className="hidden md:block md:left-[25%] lg:left-[22%] xl:left-[42%] absolute md:w-5/12 lg:w-5/12 xl:w-2/12 h-[1px] flex-1 bg-[#2F2F2F]"></motion.div>
          </div>
        </div>
        {/* Right Column (Image with vertical line) */}
        <div className="relative flex justify-center md:justify-end ">
          {/* Vertical divider */}
<motion.div 
initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
className="hidden md:block absolute md:left-10 lg:left-20 top-1/2 -translate-y-1/3 h-80 w-[1px] bg-[#2F2F2F]"></motion.div>
       </div>
          {/* Car Image */}
          <motion.img
          initial={{ opacity: 1, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
            src="/image 2.png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className="hidden sm:block w-5/12 absolute right-0   z-2"
          />
            <div
      className={`hidden sm:block absolute right-0 w-[270px] h-[250px] bg-white blur-[180px] rounded-full z-0 transition-opacity duration-2000`}
    ></div>
      </div>
    </section>
   
      <Footer></Footer>
</>
  );
}