import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const text = `Partner
with THUNK`;
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
export default function Servies() {
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
     

  return (
    <>
     <Head></Head>
   <section className="relative  -top-25 flex items-end  h-[60vh]  sm:h-[100vh] w-full px-6  bg-cover bg-center  sm:mb-30"
    style={{ backgroundImage: "url('/Group 26769.png')" }}>    
         
         
       <section className="relative w-full flex flex-col items-center justify-end text-center text-white sm:pb-30 ">
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
                          The future of classic cars is electric, and we’re building it together!
                          </motion.p>
                      </div>
                  
                      
                         
                        </section>        
            </section>

<section className="relative w-full  flex flex-col items-center justify-end text-center text-white my-20 sm:my-30  ">

        <div className="max-w-7xl px-6 flex flex-col-reverse sm:flex-row gap-20  xl:gap-70 items-center justify-between ">
            <div className="flex-1 text-center items-center sm:items-start sm:text-start flex flex-col gap-5">
                <AnimatedText
        text={`Electrify\nwith THUNK`}
        className="text-2xl  sm:text-6xl uppercase"
      />
      <motion.p 
          initial={{ opacity: 0, x: -100 }}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     viewport={{ once: true, amount: 0.1 }}
                                     transition={{ duration: 1.5, ease: "easeInOut" }}
      className="text-sm  sm:text-lg">
        THUNK partners with car conversion shops, restorers, and EV garages ready to lead in electrification.
         With our custom EV motor solutions, battery boxes, and other EV products, you can grow your business,
         attract new clients, and deliver results that outperform expectations.</motion.p>
               <motion.button
                                     className="w-fit relative overflow-hidden uppercase px-8 text-xs sm:text-base mt-5  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
                                     initial={{ opacity: 0, x: -100 }}
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
            <div className="flex-1 relative z-1">
                <motion.img 
                initial={{ opacity: 0, x: 100 }}
                                     whileInView={{ opacity: 1, x: 0 }}
                                     viewport={{ once: true, amount: 0.1 }}
                                     transition={{ duration: 1.5, ease: "easeInOut" }}
                src="/Mask group (54).png" className="relative z-1" alt="" />

   <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
       className={`absolute top-30  right-6 w-[100px] h-[130px]  md:w-[420px]  xl:h-[280px] bg-white blur-[100px] rounded-full z-0 transition-opacity duration-2000`}
        ></motion.div>
                </div>             

        </div>

</section>
<section className="relative w-full flex flex-col gap-4 items-center justify-end text-center text-white sm:my-50  ">

<div className="px-6">
             <AnimatedText
        text={`Why Choose THUNK as\nYour Partner`}
        className="text-xl  sm:text-6xl uppercase"
      />
</div>
<div className="max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
    <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }} className="rounded-xl text-sm sm:text-xl flex flex-col gap-4 items-center px-6 py-6"
    style={{
      background:
        "linear-gradient(180deg, rgba(56,56,56,0.5) 0%, rgba(28,28,28,0.5) 100%)",
    }}
  >
    <img src="/Mask group (55).png" className="w-fit" alt="" />
    <p>Competitive discounts on our motor package.</p>
  </motion.div>

    <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.6,
        ease: "easeInOut",
      }} className="rounded-xl text-sm sm:text-xl flex flex-col gap-4 items-center px-6 py-6"
    style={{
      background:
        "linear-gradient(180deg, rgba(56,56,56,0.5) 0%, rgba(28,28,28,0.5) 100%)",
    }}
  >
    <img src="/Mask group (56).png" className="w-fit" alt="" />
    <p>Direct engineering expertise and basic support.</p>
  </motion.div>

    <motion.div 
                   initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
      whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
      viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
      transition={{
        duration: 1.7,
        ease: "easeInOut",
      }} className="rounded-xl text-sm sm:text-xl flex flex-col gap-4 items-center px-6 py-6"
    style={{
      background:
        "linear-gradient(180deg, rgba(56,56,56,0.5) 0%, rgba(28,28,28,0.5) 100%)",
    }}
  >
    <img src="/Mask group (57).png" className="w-fit" alt="" />
    <p>
      Access to reliable EV conversion technology designed for seamless
      integration.
    </p>
  </motion.div>
</div>


</section>

 <section className=" max-w-7xl text-white  px-6 flex flex-col items-center mt-30 sm:mt-2 pb-20 sm:pb-50">
      
      {/* Car Image */}
      <div className="relative w-full  h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[485px]  xl:h-[610px] rounded-2xl "> 
<motion.div
    // Anchor the element to the bottom of its relative parent
    className="absolute bottom-0 left-0 w-full rounded-2xl overflow-hidden flex items-center justify-center"
    
    // Start with a small height and 0 opacity
    initial={{ height: '20px', opacity: 0 }} 
    
    // Animate to full height (100%) and full opacity
       whileInView={{
          height: "100%",
          opacity: 1,
          boxShadow: "0 0 86px 26px rgba(88,43,5,0.31)",
        }}
    viewport={{ once: true, amount: 0.1 }} 
    transition={{
      duration: 1.5,
      ease: "easeInOut",
    }}
  >
    <img
      src="/Group 16.png"
      alt="Classic car"
      className="w-full h-auto object-contain  "
    />
  </motion.div>
    </div>

      {/* Text Content */}
      <div className=" mt-12 text-center md:text-left">
        <div className="flex flex-col gap-10  sm:flex-row  sm:items-end  ">


       
     
<AnimatedText
  text={`Who We\nWork With`}
  className="uppercase w-full xl:w-6/12 lg:w-8/12 text-3xl md:text-6xl leading-tight"
/>

 
        <div className="flex w-full items-center justify-center md:justify-end  mb-6">
      
           <motion.div
        className="h-[1px] w-7/12 bg-[#2F2F2F]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

 
       <motion.button
        className="relative overflow-hidden  px-4 sm:px-8  pt-2 pb-1 sm:py-3 text-xs sm:text-base rounded-full text-nowrap bg-[#666666]/28 border border-gray-400  font-body group"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <span className="block h-[1.5em] sm:h-[1em] overflow-hidden">
        
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            VIEW OUR PRODUCT •
          </span>
        
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            VIEW OUR PRODUCT •
          </span>
        </span>
      </motion.button>
        </div>

        </div>
     <AnimatedTextt
  text={`Stronger Together`}
   className="uppercase text-sm mb-2 sm:text-2xl text-[#A61313]"
/>
        <motion.p 
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-gray-300 text-base sm:text-xl leading-relaxed">
        The demand for EV conversion partnerships is growing worldwide.
        With THUNK’s technology and expertise, your business can stay
        competitive while helping more drivers embrace sustainable performance
        </motion.p>
<motion.div 
 initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
className="flex flex-col sm:flex-row my-3 gap-3 sm:gap-6 uppercase ">
   <span className="font-title text-sm sm:text-2xl">• Car Conversion Shops</span> 
    <span className="font-title text-sm sm:text-2xl">• Classic Car Restorers</span> 
</motion.div>

      </div>
    </section>
    
    <Footer></Footer>
    </>
  );
}