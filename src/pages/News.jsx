import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const text = `THUNK NEWS`;
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

    <section className=" relative -top-25  flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center  sm:mb-30"
      style={{ backgroundImage: "url('/Group 26770.png')" }}>    
           
           
         <section className=" relative w-full flex flex-col items-center justify-end text-center text-white sm:pb-30 ">
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


<section className="text-white mb-60 md:py-40 px-6 ">
      <div className="max-w-7xl px-6 mx-auto grid md:grid-cols-10 gap-4  sm:gap-7 items-center ">
        
       
        <div className="text-center  sm:text-left md:col-span-7 ">
      
<AnimatedText
  text={`Driving the\nFuture of EVs`}
  className="uppercase w-full xl:w-5/12 lg:w-7/12 text-3xl md:text-5xl leading-tight"
/>
          {/* Paragraphs */}
          <motion.p 
           initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-base sm:text-lg text-gray-300 my-6">
           Uncover the latest on EV electric motors and the advancement of the electric car conversion motor industry. Stay tuned for news, insights, and breakthroughs shaping the next generation of mobility.
          </motion.p>
         

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
            className="hidden md:block   md:left-[30%]  lg:left-[22%]  xl:left-[27%]  absolute md:w-6/12  lg:w-7/12 xl:w-5/12  h-[1px] flex-1 bg-[#2F2F2F] "></motion.div>
          </div>
        </div>
        {/* Right Column (Image with vertical line) */}
        <div className="relative flex justify-center md:justify-end">
          {/* Vertical divider */}
<motion.div 
initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
className="hidden md:block absolute left-0 top-1/2 -translate-y-1/3 h-70 w-[1px] bg-[#2F2F2F]"></motion.div>
       </div>
          {/* Car Image */}
          <motion.img
          initial={{ opacity: 1, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
            src="/image 2.png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className="hidden sm:block w-4/12 absolute right-0  md:pl-12 z-2"
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