import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// video plugin
import Video from "yet-another-react-lightbox/plugins/video";

const text = `Electric Car Conversion
Motor in Action`;


const videos = [
  {
    thumbnail: "/image2.png",
    src: "https://www.youtube.com/embed/5iWs-vm2xKQ?si=JBY9G4QzCPFT1_z8&start=628",
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

videos.forEach((v) => {
  if (v.src.includes("youtu.be")) {
    v.srcEmbed = "https://www.youtube.com/embed/" + v.src.split("youtu.be/")[1].split("?")[0];
  } else if (v.src.includes("youtube.com/watch")) {
    v.srcEmbed = v.src.replace("watch?v=", "embed/").split("&")[0];
  } else {
    v.srcEmbed = v.src; // local mp4 stays the same
  }
});


export default function Videos() {
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
                           <div className="z-10 max-w-5xl px-6">
                          <h1 className="text-3xl md:text-5xl  lg:text-6xl  xl:text-7xl font-medium font-title uppercase">
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
                                         delay: i * 0.05 + lineIndex * 0.3,  // stagger across lines
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
Watch our process come alive as we demonstrate the power and precision of a custom electric car motor designed for seamless integration.                    </motion.p>
                        </div>
                    
                        
                           
                          </section>  
                                        </section>



<section className="max-w-7xl mx-auto px-6 pb-30 sm:pb-60">
      
    <div className="flex flex-col gap-6 py-10">
      {/* {videos.map((Videosa, i) => (
        <div
          key={i}
          className="relative cursor-pointer rounded-lg overflow-hidden group"
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
        >
  
          <img
            src={Videosa.thumbnail}
            alt={`Video ${i + 1}`}
            className="w-full h-auto object-cover"
          />

         
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
      ))} */}


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
      

      {/* Modal */}




{/* <Lightbox
  open={open}
  index={index}
  close={() => setOpen(false)}
  plugins={[Video]}
  slides={videos.map((v) => ({
    type: "video",
    sources: [
      {
        src: v.srcEmbed, // must be https://www.youtube.com/embed/...
        type: v.srcEmbed.includes("youtube.com/embed") ? "youtube" : "video/mp4",
      },
    ],
  }))}
/> */}

    </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ×
            </button>

            <iframe
              src={videos[index].src}
              className="w-full h-[400px] rounded-lg"
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}


    
    </section>
      <Footer></Footer>
</>
  );
}