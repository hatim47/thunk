import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const text = `Engineering in
Motion`;

const images = [
    "/cars/Mask group (58).png",
    "/cars/Rectangle 85.png",
    "/cars/Mask group (59).png",
    "/cars/Mask group (11).png",
    "/cars/Mask group (12).png",
    "/cars/Mask group (62).png",
    "/cars/Mask group (63).png",
    "/cars/Mask group (64).png",
    "/cars/Mask group (65).png",
    "/cars/Mask group (66).png",
    
];


const captions = [
  null,
  null,
  null,
  "THUNK founder Doug Hertz with Daniel Paul from Southfield Classics",
  "The new THUNK3 motor on display at the Torque Trends booth at SEMA 2025",
  null,
  null,
  null,
  null,
  null
];

export default function Gallery() {
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

    <section className=" relative -top-25  flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center "
      style={{ backgroundImage: "url('/Group 26771.png')" }}>    
           
           
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
See how best EV motors redefine performance and how THUNK sets the standard for the best electric motor for classic cars.                    </motion.p>
                        </div>
                    
                        
                           
                          </section>  
                                        </section>



<section className="max-w-7xl mx-auto px-6 pb-30 sm:pb-60">
      {/* Masonry-style grid */}
  
    
      <div className="w-full grid grid-cols-12 gap-4 sm:gap-9 auto-rows-[200px]  sm:auto-rows-[390px]">
{images.map((src, i) => (
  <div
    key={i}
    className={`relative overflow-hidden rounded-lg cursor-pointer ${
      i < 3
        ? "col-span-6 sm:col-span-4"
        : i < 5
        ? "col-span-6"
        : i < 8
        ? "col-span-6 sm:col-span-4"
        : "col-span-6"
    }`}
    onClick={() => {
      setIndex(i);
      setOpen(true);
    }}
  >
    <img
      src={src}
      alt={`Car ${i}`}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />

    {/* CAPTION (only for images that have a caption) */}
    {captions[i] && (
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 font-sans text-white text-lg p-2">
        {captions[i]}
      </div>
    )}
  </div>
))}
      </div>
   

      {/* Lightbox */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
      />
    </section>
      <Footer></Footer>
</>
  );
}