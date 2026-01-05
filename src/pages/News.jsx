import Footer from "../Footer"
import Head from "../Head"
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    const MotionLink = motion(Link);
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
     <section className="text-white pb-30 lg:py-60 px-6 ">
                                  <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-10 gap-4  sm:gap-6 items-center ">                                    
                                      <div className="flex items-center w-full max-[431px]:justify-center lg:col-span-4 ">                                       
                                           <motion.img
                                      initial={{ opacity: 1, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                        src="/Mask group (10).png"   // 👉 replace with your transparent car image
                                        alt="Classic Car"
                                        className="hidden lg:block w-4/12 lg:w-12/12  xl:mb-10  z-2"
                                      />
                                      </div>
                                        <div
                                  className={`hidden lg:block absolute left-100 w-[270px] h-[300px] bg-white blur-[180px] rounded-full z-0 transition-opacity duration-2000`}
                                ></div>


                                    <div className="text-center  lg:text-left lg:col-span-6 sm:ps-10">
                                  <div className="hidden md:block">
                            <AnimatedText
                              text={`SEMA Debuddddt:THUNK’s\nModel 3 Traction Drive\nFits in Trans Tunnels`}
                              className=" w-full uppercase text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 lg:mb-0 leading-tight"
                            />
</div><div className="md:hidden block">
                             <AnimatedText
                              text={`SEMA Debut:THUNK’s\nModel 3 Traction\n Drive Fits in Trans\n Tunnels`}
                              className=" w-full uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 lg:mb-0 leading-tight"
                            />
                            </div>
                             <motion.img
                                      initial={{ opacity: 1, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                        src="/Mask group (10).png"   // 👉 replace with your transparent car image
                                        alt="Classic Car"
                                        className="lg:hidden block relative w-9/12 -right-12 sm:-right-20 z-1"
                                      />
                                     
                               
                            
                                      {/* Paragraphs */}
                                      <motion.p 
                                       initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="font-body text-base sm:text-xl text-gray-300  lg:max-w-lg  xl:max-w-3xl mb-4 mt-10 lg:mt-3">
                                       THUNK, located in Westchester, N.Y., has collaborated with Torque Trends to produce a relatively compact tunnel drive.
                                        It features a 3:1 planetary gear box that’s coupled directly to a refurbished ~300 HP “10990” or “10980” Tesla motor from Model 3 or Model Y
                                        The traction inverter, formerly integrated into the M3/Y drive unit, is repackaged such that it can be remotely located from the traction motor.
                                         It’s interconnected by the three motor phase cables and a few signal lines for such things as the motor resolver and, I’m guessing, the phase-current sensors. 
                                        &nbsp;<a href="https://www.electronicdesign.com/blogs/nonlinearities/article/55327876/electronic-design-sema-debut-thunks-model-3-traction-drive-fits-in-trans-tunnels" className="text-blue-700 text-base sm:text-xl font-body hover:underline">Read More</a>
                                      </motion.p>      
                                    
                                    
                                    </div>
                                    {/* Right Column (Image with vertical line) */}
                                    
                                      {/* Car Image */}
                                  

                                  </div>

 </section>
     <section className="text-white pb-20 lg:py-50 px-6 ">
                                  <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-10 gap-4  sm:gap-6 items-center ">
                                    
                                   
                                    <div className="text-center  lg:text-left lg:col-span-6 ">
                                  
                            <AnimatedText
                              text={`thunk debut\nin sema!!`}
                              className="w-full xl:w-5/6 uppercase lg:w-10/12 text-2xl md:text-5xl mb-10 lg:mb-0 leading-tight"
                            />
                            
                             <motion.img
                                      initial={{ opacity: 1, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                        src="/Mask group (51).png"   // 👉 replace with your transparent car image
                                        alt="Classic Car"
                                        className="lg:hidden block  relative w-9/12 -right-12 sm:-right-20 z-1"
                                      />
                                     
                               
                            
                                      {/* Paragraphs */}
                                      <motion.p 
                                       initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="font-body text-base sm:text-xl text-gray-300  lg:max-w-lg  xl:max-w-xl mb-4 mt-10 lg:mt-3">
                                       THUNK3™ has proudly made its debut at the world-renowned SEMA Show.
                                        Where we uncover our groundbreaking EV conversion motor to thousands of automotive innovators. 
                                        This launch has written a new page in our journey toward electrified performance and sustainable engineering.
                                         At SEMA, our motor stood as a tribute to what’s possible when vision and precision work together.
                                          The crowd witnessed the fusion of raw electro mechanical power with clean and silent energy.
                                        Every component of our creation tells a story of innovation, our workmanship.
                                      </motion.p>      
                                    
                                    
                                    </div>
                                    {/* Right Column (Image with vertical line) */}
                                    
                                      {/* Car Image */}
                                     <div className="flex items-center w-full max-[431px]:justify-center lg:col-span-4 ">                                       
                                           <motion.img
                                      initial={{ opacity: 1, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                        src="/Mask group (51).png"   // 👉 replace with your transparent car image
                                        alt="Classic Car"
                                        className="hidden lg:block w-4/12 lg:w-12/12  xl:mb-10  z-2"
                                      />
                                      </div>
                                        <div
                                  className={`hidden lg:block absolute right-100 w-[270px] h-[300px] bg-white blur-[180px] rounded-full z-0 transition-opacity duration-2000`}
                                ></div>

                                  </div>
    <div className="max-w-7xl px-6 mx-auto items-center text-center  lg:text-left">
 <motion.p 
                                       initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="font-body text-base sm:text-xl text-gray-300 mb-4 mt-3 lg:mt-0 xl:w-10/12 ">
                                       We are not just here to follow the EV wave, but here we are helping to steer it. This debut represents our promise to simplify conversion, amplify performance, and electrify the future.
                                    
                                      </motion.p>  
                                       <motion.p 
                                       initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className="font-body text-base sm:text-xl text-gray-300 mb-4 mt-3 lg:mt-3 xl:w-10/12">

                                         In SEMA 2025, it’s not just our launch; it’s our innovation for change, where we’re modifying what “THUNK3™ EV conversion” means!
                                      </motion.p>  

 </div>

                                  
                                </section>
                                       











<section className="text-white mb-40 md:py-40 px-6 ">
      <div className="max-w-7xl px-6 lg:px-10 xl:px-20 grid md:grid-cols-12 lg:grid-cols-10 gap-4 sm:gap-7 items-center ">
        
       
        <div className="text-center sm:text-left md:col-span-7 lg:col-span-5">
      
<AnimatedText
  text={`Driving the\nFuture of EVs`}
  className="uppercase w-full xl:w-10/12 text-3xl md:text-5xl lg:text-5xl   lg:leading-tight"
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
          <motion.p 
           initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-base sm:text-xl text-gray-300 my-6 ">
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
            className="hidden md:block   md:left-[20%]  lg:left-[22%]  xl:left-[27%]  absolute md:w-6/12  lg:w-5/12 xl:w-4/12  h-[1px] flex-1 bg-[#2F2F2F] "></motion.div>
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
className="hidden md:block absolute  md:left-0 lg:left-20 top-1/2 -translate-y-1/3 h-80 w-[1px] bg-[#2F2F2F]"></motion.div>
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