import Faq from "../Faq"
import Slider from "../Slider"
import Footer from "../Footer"
import Head from "../Head"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const text = `REDEFINING CLASSIC
 CAR CONVERSIONS`;

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


export default function Home() {
 // We use this state to trigger the "lights on" effect after a delay
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
  <section className="w-max-7xl px-4 flex justify-center mb-2">
        
        {/* Container for the Hover (Light Up) effect. Use 'group' and 'relative' */}
        <div className="group relative w-10/12">
          
          {/* Default Dark Image: Loads normally (immediately visible) */}
          <img 
            src="/318 2.png" 
            className="w-full" // No opacity/transition classes here
            alt="Classic car, lights off" 
          />
          
          {/* Light Up Image (The one that appears after 2s AND on hover) */}
          <img 
            src="/Group 26768.png" 
            alt="Classic car, lights on" 
            // The opacity is controlled by a combination of the 'onload' state and the 'hover' state.
            // Using 'group-hover:opacity-100' and a dynamic class for the onload state.
            className={`w-full absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 ${isCarLitOnLoad ? 'opacity-100' : 'opacity-0'}`} 
          />
        </div>
      </section>

      {/* ---------------------------------------------- */}
      {/* Text Content and SVG Section (No change) */}
      {/* ---------------------------------------------- */}
      <section className="relative w-full flex flex-col items-center justify-center text-center text-white ">
        {/* Content */}
       <div className="z-10 max-w-4xl px-6">
      <h1 className="text-3xl md:text-7xl font-medium font-title">
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

    <AnimatedTextt
        text={`THUNK reimagines that legacy with the\nThunk3 EV conversion motor`}
        className="text-sm mt-6 sm:text-xl text-[#A61313]"
      />
    </div>

        {/* Curved line at bottom */}
        <div className="absolute top-25 w-full">
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
        <div className="h-32 border-l border-[#2F2F2F] mx-auto my-5"></div>
      </section>
      {/* ... Rest of your content ... */}
 
 <section className=" max-w-7xl text-white  px-6 flex flex-col items-center pb-20  sm:pb-40">
      
      {/* Car Image */}
      <div className="relative w-full  h-[20vh] sm:h-[30vh] md:h-[60vh] lg:h-[485px]  xl:h-[610px] rounded-2xl "> 
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
  text={`THUNK\nREIMAGINES`}
  className=" w-full xl:w-7/12 lg:w-7/12 text-3xl md:text-7xl leading-tight"
/>
 
        <div className="flex w-full items-center justify-center md:justify-end mb-6">
      
           <motion.div
        className="h-[1px] w-8/12 bg-[#2F2F2F]"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

 
       <motion.button
        className="font-my relative overflow-hidden  px-4 sm:px-8  pt-2 pb-1 sm:py-3 text-xs sm:text-base rounded-full text-nowrap bg-[#666666]/28 border border-gray-400  font-body group"
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
     
        <motion.p 
         initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-gray-300 text-base sm:text-xl leading-relaxed">
          Every classic automobile carries history under its hood. THUNK reimagines that legacy with 
          the Thunk3 EV conversion motor and a compact, powerful system that transforms timeless machines 
          into high-performance electric vehicles. We love our classics but acknowledge the pain and challenges 
          of keeping decades-old technology on the road. THUNK is dedicated to preserving heritage while 
          eliminating the constant work, unreliability, and unsustainability of old ICE engines.
        </motion.p>
      </div>
    </section>

<section className="text-white pb-20 lg:py-60 px-6 ">
      <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-10 gap-4  sm:gap-7 items-center ">
        
       
        <div className="text-center  lg:text-left lg:col-span-6 ">
      
<AnimatedText
  text={`WHO ARE WE?`}
  className="w-full xl:w-7/12 lg:w-9/12 text-3xl md:text-6xl leading-tight"
/>

 <motion.img
          initial={{ opacity: 1, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
            src="/Group 19 (1).png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className="lg:hidden block  relative w-12/12 -right-12    sm:-right-12    z-1"
          />
         
   

          {/* Paragraphs */}
          <motion.p 
           initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-base sm:text-xl text-gray-300 mb-4 ">
            The story of THUNK began with a passion for classic cars and a determination to keep them relevant in a changing world. 
            What started as a vision grew into the development of the Thunk3 motor,
             a solution that integrates modern engineering with respect for legacy.
          </motion.p>
          <motion.p  initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="font-body text-base sm:text-xl text-gray-300 mb-6">
          Our focus is on building products we can fully support.
           Our first product is the Thunk3 motor, 
           with future plans to add complementary products such as battery boxes.
          </motion.p>

          {/* Button + Line */}
          <div className="flex items-center max-[431px]:justify-center">
            <motion.a 
             href="/motor"
             initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}

            className="font-my group px-6 py-2 rounded-full bg-[#666666]/28 border border-gray-400  font-body transition">
             
             <span className="block h-[1.2em] overflow-hidden">
          {/* First layer */}
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            MORE ABOUT US •
          </span>
          {/* Second layer */}
          <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
             MORE ABOUT US •
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
            className=" md:left-[30%]  lg:left-[22.5%]  xl:left-[27.5%]  absolute md:w-6/12  lg:w-6/12 xl:w-5/12  h-[1px] flex-1 bg-[#2F2F2F] "></motion.div>
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
className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/3 h-85 w-[1px] bg-[#2F2F2F]"></motion.div>
       </div>
          {/* Car Image */}
          <motion.img
          initial={{ opacity: 1, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
            src="/Group 19.png"   // 👉 replace with your transparent car image
            alt="Classic Car"
            className="hidden lg:block w-4/12 absolute right-0  md:pl-2 z-2"
          />
            <div
      className={`hidden lg:block absolute right-0 w-[270px] h-[300px] bg-white blur-[180px] rounded-full z-0 transition-opacity duration-2000`}
    ></div>
      </div>
    </section>

    <section className="relative max-w-7xl px-6">
      <div className="flex flex-col justify-center py-10">
        {/* <h3 className="font-title text-center uppercase text-4xl md:text-6xl leading-tight text-amber-50">
          Why Choose <br /> THUNK 3
        </h3> */}
<AnimatedText
  text={`WHY CHOOSE\nTHUNK 3`}
  className=" text-center text-3xl md:text-6xl leading-tight"
/>

        {/* <p className="mt-6 text-center text-lg md:text-xl text-[#A61313]">As Your New EV Conversion Motor?</p> */}

        <AnimatedTextt
  text={`As Your New EV Conversion Motor?`}
  className="text-center text-4xl md:text-6xl leading-tigh  text-lg md:text-xl text-[#A61313]"
/>
      </div>
      <div>


        <div className="relative min-h-screen bg-black text-white font-sans ">

    <div className="flex justify-center mb-12">
        <motion.img
          initial={{ opacity: 0, y: 10 }}          // hidden + pushed down
  whileInView={{ opacity: 1, y: 0 }}       // visible + natural place
  viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
  transition={{
    duration: 1.5,
    ease: "easeInOut",
  }}
        src="/Group 15.png" alt="Thunk3 EV Motor" className="absolute w-9/12 h-auto z-12"/>
         <motion.div 
               initial={{ opacity: 0, y: 40 }}          // hidden + pushed down
  whileInView={{ opacity: 0.5, y: 0 }}       // visible + natural place
  viewport={{ once: true, amount: 0.1 }}   // trigger on scroll, only once
  transition={{
    duration: 1.5,
    ease: "easeInOut",
  }}
   className={`absolute top-40 left-[30%]  w-[100px] h-[120px]  md:w-[300px] lg:h-[220px]  xl:w-[600px] xl:h-[220px] bg-white blur-[120px] rounded-full z-0 transition-opacity duration-2000`}
    ></motion.div>
    </div>
   <div className="max-w-3xl md:max-w-md  lg:max-w-xl  xl:max-w-3xl mx-auto  flex items-end justify-around md:justify-between px-10 md:px-0 z-0">
        <motion.div 
        
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: -1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }} className="w-px h-40 sm:h-70 bg-[#2F2F2F]"></motion.div > 
        <motion.div  initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: -1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }} className="w-px  h-18  sm:h-48 bg-[#2F2F2F]"></motion.div > 
        <motion.div initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: -1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }} className="w-px h-40 md:h-90 lg:h-120 xl:h-140 sm:mt-10 bg-[#2F2F2F]"></motion.div > 
    </div>
  {/* <div className="hidden md:block my-6 w-[1px]  h-32 flex-1 bg-gray-600 ml-4"></div> */}
    <div className="text-center sm:text-start mx-auto bg-[#1C1C1C]/50  rounded-2xl p-8 md:p-16  mb-4 sm:mb-7  shadow-xl">
        {/* <h2 className="font-title text-3xl font-medium uppercase mb-4  ">
            Space Advantage
        </h2> */}
        <AnimatedText
  text={`Space Advantage`}
  className="text-center text-2xl uppercase md:text-4xl leading-tight"
/>
        <p className="text-sm md:text-lg  lg:text-xl mt-6 text-justify sm:text-start">
          The biggest challenge of converting a classic car is where to place the batteries.
           Most EV conversion motors sit in the engine bay, taking up valuable space.
            The Thunk3 motor is designed to sit in the transmission tunnel,
             freeing up the engine bay for batteries and other critical components.
              Unlike rear-mounted motors that protrude into the gas tank area,
           the Thunk3 allows you to mount batteries in both the front (frunk!) 
           and the rear. This creates excellent balance and handling — a benefit no other motor currently offers.
        </p>
    </div>

    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">

        <div className="bg-[linear-gradient(180deg,rgba(56,56,56,0.5)_0%,rgba(28,28,28,0.5)_100%)] p-8 xl:p-13 rounded-2xl shadow-2xl transition duration-300 ">
            {/* <h3 className="font-title text-xl font-semibold uppercase mb-3 ">
                Reliability
            </h3> */}
                  <AnimatedText
  text={`Reliability`}
  className=" text-center text-xl uppercase   lg:text-3xl  xl:text-4xl leading-tight"
/>
            <p className="text-sm  md:text-lg  lg:text-xl mt-6">
                Experience consistent performance with minimal maintenance, engineered for long-term dependability.
            </p>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(56,56,56,0.5)_0%,rgba(28,28,28,0.5)_100%)] p-8 xl:p-13 rounded-2xl shadow-2xl transition duration-300 ">
            {/* <h3 className="font-title text-xl font-semibold uppercase mb-3 tracking-wider">
                Preservation
            </h3> */}
                              <AnimatedText
  text={`Preservation`}
  className=" text-center text-xl uppercase lg:text-3xl  xl:text-4xl leading-tight"
/>
            <p className="text-sm  md:text-lg  lg:text-xl  mt-6">
                Extend the life of your classic while keeping its timeless beauty intact with electric EV motors.
            </p>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(56,56,56,0.5)_0%,rgba(28,28,28,0.5)_100%)] p-8 xl:p-13 rounded-2xl shadow-2xl transition duration-300 ">
            {/* <h3 className="font-title text-xl font-semibold uppercase mb-3 tracking-wider">
                Performance
            </h3> */}
                              <AnimatedText
  text={`Performance`}
  className=" text-center text-xl uppercase lg:text-3xl  xl:text-4xl leading-tight"
/>
    <p className="text-sm      md:text-lg  lg:text-xl mt-6 leading-relaxed">
        Instant torque and smooth acceleration deliver a driving experience beyond expectation.
    </p>
        </div>

    </div>
     <div className="w-full flex justify-center py-10">
   <motion.button
        className="font-my relative overflow-hidden uppercase px-8 text-xs sm:text-base  py-2 rounded-full border bg-[#666666]/28 border-gray-400  font-body group"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <span className="block h-[1.7em] sm:h-[1.5em] overflow-hidden">
          {/* First layer */}
          <span className="block text-base/6 line transition-transform uppercase duration-500 ease-in-out group-hover:-translate-y-full">
            View our EV conversion motor •
          </span>
          {/* Second layer */}
          <span className="block text-base/6 transition-transform uppercase duration-500 ease-in-out group-hover:-translate-y-full">
            View our EV conversion motor •
          </span>
        </span>
      </motion.button>
</div>

</div>
      </div>



        </section>
        <Faq></Faq>

     <section className="relative w-full  flex flex-col items-center justify-center text-center text-white sm:mt-10 sm:mb-30 ">
      {/* Content */}
      <div className="z-10 max-w-4xl flex flex-col  px-6">
       

  <AnimatedText
  text={`Innovation in\nElectrification`}
  className=" text-center text-3xl uppercase md:text-6xl leading-tight"
/>

    <AnimatedTextt
  text={`Trendsetting EV Electric Motors for\nYesterday’s Cars`}
  className="mt-6 text-center text-lg uppercase md:text-xl leading-tight text-[#A61313]"
/>
      </div>

      {/* Curved line at bottom */}
      <div className="absolute top-25 w-full">
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
     
     <Slider/>
     <section className="relative w-full max-w-7xl px-6 pt-10 pb-20 flex flex-col items-center justify-center  text-white ">
    <div className="w-full flex flex-col sm:grid sm:grid-cols-10 gap-10 ">
    <motion.div
     initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
     className=" md:col-span-4 sm:text-start">
      <h3 className="font-title uppercase text-4xl md:text-5xl xl:text-6xl font-medium">Upgrade <br /> Your Car</h3>
    </motion.div>
    <motion.div  initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
         className="flex flex-col gap-5 md:col-span-6 sm:text-left">
      <p className="font-bold text-base md:text-lg xl:text-xl">“Instead of replacing the cars we love, we reimagine them for <br className="hidden xl:block" /> the electric future.”</p>
      <p className="font-light text-base  xl:text-xl">With the Thunk3 motor, your classic becomes a future-ready <br className="hidden xl:block" />electric machine. Driving an EV makes your classic perform <br className="hidden xl:block" />like car you’ve always wanted!</p>
    </motion.div>

    </div>


      </section>
    </section>

  <Footer></Footer>
    </>
  );
}