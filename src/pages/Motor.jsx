import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const text = `The THUNK 3
At a Glance`;
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
function AnimatedTextt({ text, className ,lineClasses=[]  }) {
  const lines = text.split("\n"); // 👈 handle line breaks

  return (
    <span className={`inline-block ${className}`}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className={`block ${
            lineClasses[lineIndex] || "" // 👈 apply custom class if provided
          }`}>
          {Array.from(line).map((char, i) => (
            <motion.span
              key={i}
              custom={i + lineIndex * 20} // 👈 offset delay for each line
              variants={letterVariant}
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
const features = [
  {
    id: "01",
    title: "HIGH POWER IN A COMPACT PACKAGE",
    text: "EV conversion motor produces 220+ kW (≈300 HP), delivering instant torque and prompt acceleration.",
  },
  {
    id: "02",
    title: "COMPACT INTEGRATION",
    text: "Designed to mount in the transmission tunnel, keeping the engine bay free for batteries and system components.",
  },
  {
    id: "03",
    title: "PACKAGE INCLUDES",
    text: "Motor with integrated TorqueTrends gear reduction system, inverter, and oil pump with filter.",
  },
  {
    id: "04",
    title: "OPTIMIZED BALANCE",
    text: "By moving the motor closer to the center of the vehicle, handling and weight distribution are greatly improved.",
  },
  {
    id: "05",
    title: "TESLA TECH",
    text: "Built on proven Tesla Model 3/Y and Model 3/Y Performance technology.",
    fullWidth: true,
  },
];
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
export default function Motor() {
  const isMobile = useMediaQuery("(max-width: 640px)");
      const [isCarLitOnLoad, setIsCarLitOnLoad] = useState(false);
    
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
     <section className="relative max-w-7xl px-6 mt-30 sm:mt-80">
         
          <div>
    
    
            <div className="relative bg-black text-white font-sans">
    
        <div className="flex justify-center sm:mb-12">
            <motion.img
              initial={{ opacity: 0, y: 10 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
            src="/Group 15.png" alt="Thunk3 EV Motor" className=" w-9/12 h-auto z-12"/>
             <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
       whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 0 }}      // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
       className={`absolute top-10 sm:top-40 left-[30%]  w-[90px] h-[70px]  sm:h-[200px] md:w-[300px] xl:w-[600px] bg-white blur-[120px] rounded-full z-0 transition-opacity duration-2000`}
        ></motion.div>
        </div>
    </div>
          </div> 
            </section>
             <section className="relative w-full flex flex-col items-center justify-center text-center text-white pt-10  sm:pt-20 sm:pb-60 ">
                    {/* Content */}
                   <div className="z-10 max-w-4xl px-6">
                  <h1 className="text-3xl md:text-6xl font-medium font-title uppercase">
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
            
                <p className="text-sm mt-6 sm:text-lg ">
                    Every classic car has a story worth continuing, and the Thunk3 makes that possible. Built as an EV conversion motor, it slips neatly into the transmission tunnel while unlocking the power and efficiency of Tesla technology.
                    </p>
                </div>
            
                    {/* Curved line at bottom */}
                    <div className="absolute top-20 sm:top-25 w-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 278" fill="none">
                        <path d="M-124 278C-124 278 -124 278 -124 278C-95.4732 259.861 -64.4335 242.275 -34.3267 226.648C242.937 85.7131 553.895 16.981 863.659 15.5043C1173.58 14.1887 1483.2 88.6473 1760.46 229.077C1791.45 244.691 1821.44 260.705 1852 278C1852 278 1852 278 1852 278C1821.94 259.841 1792.4 242.983 1761.77 226.548C1487.95 78.6655 1175.97 -0.909466 863.628 0.504292C551.463 1.91802 238.415 75.6354 -35.6738 224.137C-65.4166 240.589 -96.0216 259.025 -124 278Z" fill="url(#paint0_linear_60_194)"/>
                        <defs>
                          <linearGradient id="paint0_linear_60_194" x1="-124" y1="143" x2="1852" y2="143" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#666666"/>
                            <stop offset="0.331731"/>
                            <stop offset="0.697115"/>
                            <stop offset="1" stop-color="#666666"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                   
                  </section>


                   <section className="relative w-full flex flex-col items-center justify-center text-center text-white px-6 pt-20 sm:pb-6 ">

 <AnimatedText
        text={`Key Features of the THUNK 3 EV\nConversion Motor`}
        className="text-2xl mt-6 sm:text-5xl uppercase"
      />

                   </section>


                   <section className="relative w-full py-10 pb-30 sm:py-16 px-6 text-white z-1">
      {/* Title */}
    
    <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
       className={`absolute top-60 left-[30%]  w-[100px] h-[130px]  md:w-[300px] xl:w-[600px] xl:h-[250px] bg-white blur-[300px] rounded-full z-0 transition-opacity duration-2000`}
        ></motion.div>
     <div className="relative grid md:grid-cols-10  gap-6 max-w-7xl mx-auto z-2">
       
          <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
           
            className="relative md:col-span-6 bg-[#1C1C1C] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
                 <div className="flex justify-between items-center">
              <AnimatedText
        text={`High Power in a\nCompact Package`}
        className="text-lg mt-6 sm:text-3xl uppercase"
      />

       <div className="   w-12 h-12 flex items-center justify-center  rounded-full bg-[#A61313]/50 border-2 border-[#A61313] text-white font-bold">
                   <AnimatedText
        text={`01`}
        className="text-lg mt-1 sm:text-3xl uppercase"
      />
            </div>
</div>


              <p className="text-sm text-gray-300">EV conversion motor produces 220+ kW (≈300 HP), delivering instant torque and prompt  acceleration.</p>
            </div>

            {/* Number badge */}
           
          </motion.div>

                <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
           
            className="relative md:col-span-4 bg-[#1C1C1C] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
                    <div className="flex justify-between items-center">
              <AnimatedText
        text={`High Power in a\nCompact Package`}
        className="text-lg mt-6 sm:text-3xl uppercase"
      />

       <div className="   w-12 h-12 flex items-center justify-center  rounded-full bg-[#A61313]/50 border-2 border-[#A61313] text-white font-bold">
                   <AnimatedText
        text={`02`}
        className="text-lg mt-1 sm:text-3xl uppercase"
      />
            </div>
</div>
              <p className="text-sm text-gray-300">
Designed to mount in the transmission tunnel, keeping the engine bay free for batteries and system components.                </p>
            </div>

            {/* Number badge */}
          
          </motion.div>          

     <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
           
            className="relative md:col-span-4 bg-[#1C1C1C] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
                 <div className="flex justify-between items-center">
              <AnimatedText
        text={`Package\nIncludes`}
        className="text-lg mt-6 sm:text-3xl uppercase"
      />

       <div className="   w-12 h-12 flex items-center justify-center  rounded-full bg-[#A61313]/50 border-2 border-[#A61313] text-white font-bold">
                   <AnimatedText
        text={`03`}
        className="text-lg mt-1 sm:text-3xl uppercase"
      />
            </div>
</div>


              <p className="text-sm text-gray-300">
              Motor with integrated TorqueTrends gear reduction system, inverter, and oil pump with filter.
                
                </p>
            </div>

            {/* Number badge */}
           
          </motion.div>

                <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
           
            className="relative md:col-span-6 bg-[#1C1C1C] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
                    <div className="flex justify-between items-center">
              <AnimatedText
        text={`Optimized\nBalance`}
        className="text-lg mt-6 sm:text-3xl uppercase"
      />

       <div className="   w-12 h-12 flex items-center justify-center  rounded-full bg-[#A61313]/50 border-2 border-[#A61313] text-white font-bold">
                   <AnimatedText
        text={`04`}
        className="text-lg mt-1 sm:text-3xl uppercase"
      />
            </div>
</div>
              <p className="text-sm text-gray-300">
By moving the motor closer to the center of the vehicle, handling and weight distribution are greatly improved              </p>
            </div>

            {/* Number badge */}
          
          </motion.div>



        <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
           
            className="relative md:col-start-3 md:col-span-6 bg-[#1C1C1C] rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
                    <div className="flex justify-between items-center">
              <AnimatedText
        text={`Tesla Tech`}
        className="text-lg mt-6 sm:text-3xl uppercase"
      />

       <div className="   w-12 h-12 flex items-center justify-center  rounded-full bg-[#A61313]/50 border-2 border-[#A61313] text-white font-bold">
                   <AnimatedText
        text={`05`}
        className="text-lg mt-1 sm:text-3xl uppercase"
      />
            </div>
</div>
              <p className="text-sm text-gray-300">Built on proven Tesla Model 3/Y and Model 3/Y Performance technology.</p>
            </div>

            {/* Number badge */}
          
          </motion.div>




      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
            <motion.button
                            className="w-fit relative overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                          >
                            <span className="block h-[1.5em] sm:h-[1.2em] overflow-hidden">
                              {/* First layer */}
                              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                                Let’s Talk  •
                              </span>
                              {/* Second layer */}
                              <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                               Let’s Talk  •
                              </span>
                            </span>
                          </motion.button>
      </div>
 
    </section>
      <Footer></Footer>
</>
  );
}