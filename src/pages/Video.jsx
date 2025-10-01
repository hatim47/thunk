import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// video plugin
import Video from "yet-another-react-lightbox/plugins/video";

const text = `Engineering in
Motion`;


const videos = [
  {
    thumbnail: "/Mask group (68).png",
    src: "/Mask group (68)-VEED.mp4",
  },
  {
    thumbnail: "/Mask group (69).png",
    src: "/Mask group (68)-VEED.mp4",
  },
  {
    thumbnail: "/Mask group (70).png",
    src: "/Mask group (68)-VEED.mp4",
  },
  {
    thumbnail: "/Mask group (71).png",
    src: "/Mask group (68)-VEED.mp4",
  },
];




export default function Video() {
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
      style={{ backgroundImage: "url('/Group 26772.png')" }}>    
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
See how best EV motors redefine performance and how THUNK sets the standard for the best electric motor for classic cars.                    </motion.p>
                        </div>
                    
                        
                           
                          </section>  
                                        </section>



<section className="max-w-7xl mx-auto px-6 pb-30 sm:pb-60">
      
    <div className="flex flex-col gap-6 py-10">
      {videos.map((video, i) => (
        <div
          key={i}
          className="relative cursor-pointer rounded-lg overflow-hidden group"
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
        >
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={`Video ${i + 1}`}
            className="w-full h-auto object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-8 h-8 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Lightbox with video support */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        plugins={[Video]}
        slides={videos.map((v) => ({
          type: "video",
          sources: [{ src: v.src }],
        }))}
      />
    </div>
    
    </section>
      <Footer></Footer>
</>
  );
}