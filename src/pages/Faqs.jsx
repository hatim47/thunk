import Footer from "../Footer"
import Head from "../Head"
import Faq from "../Faq2"
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import "yet-another-react-lightbox/styles.css";

// video plugin


const text = `Frequently
 Asked Questions`;





export default function Faqs() {
    const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
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

      <section className=" relative -top-25  flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center  sm:mb-0"
          style={{ backgroundImage: "url('/Group 26770 (1).png')" }}>           
             <section className=" relative w-full flex flex-col items-center justify-end text-center text-white sm:pb-20 ">
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
                        
                            
                            </div>
                        
                            
                               
                              </section>  
                                            </section>

    <section className=" ">
 
        <Faq></Faq>
    </section>
      <Footer></Footer>
</>
  );
}