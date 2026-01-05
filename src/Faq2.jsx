import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
// Using a simple SVG icon for the arrow, styled to look maroon/red.
const text = `Frequently
 Asked Questions`;

// Sample FAQ data based on the previous conversation about the Thunk 3 Motor
const faqData = [
  {
    id: 1,
    question: <>WHAT MAKES THE THUNK3<span className="font-sans text-sm align-super">™</span> MOTOR DIFFERENT FROM OTHER EV CONVERSION MOTORS?</>,
    answer: "The THUNK3™ is the first affordable, high-performance EV conversion motor designed specifically for classic cars. Unlike standard front-mounted motors, it installs in the transmission tunnel, freeing up the engine bay for batteries. No other motor currently offers this benefit. Rear-mounted motors often cut into the gas tank area, reducing space for batteries, but the THUNK3™  allows for both front and rear placement. This means more range, better balance, and superior handling",
  },
  {
    id: 2,
    question: <>HOW MUCH POWER DOES THE THUNK3<span className="font-sans text-sm align-super">™</span> DELIVER?</>,
    answer: "The THUNK3™ generates 220+ kW (≈300 HP) with a voltage range of 350 to 400 V. That means instant torque, seamless acceleration, and performance that rivals modern EVs while maintaining the soul of your classic.",
  },
  {
    id: 3,
    question: "WHAT IS THE EV MOTOR PRICE?",
    answer: "The THUNK3™  EV motor starts at $18,995. Built on Tesla Model 3/Y and Model 3/Y Performance technology with a Torque Trends gearbox, it offers a cost-effective solution for enthusiasts and shops looking to use EV motors that balance price, performance, and trusted technology.",
  },
  {
    id: 4,
    question: "WHY CONVERT MY CLASSIC CAR WITH AN ELECTRIC CAR CONVERSION MOTOR?",
    answer: "Classic cars were built to last, but their engines often limit reliability and usability today. With the THUNK3™ you can extend the lifespan of your vehicle, reduce maintenance, and enjoy clean, modern performance without sacrificing style.",
  },
    {
    id: 5,
    question: <>IS THE THUNK3<span className="font-sans text-sm align-super">™</span> ELECTRIC MOTOR GOOD FOR CLASSIC CAR CONVERSIONS?</>,
    answer: "Yes. The THUNK3™  is designed specifically for seamless integration into classic cars. It delivers excellent weight balance, high performance, and reliability, making it one of the top choices for EV conversions. With its compact size and optimal placement, you gain the freedom to design your project without many of the usual space or installation constraints.",
  },
   {
    id: 6,
    question: "WHAT OPTIONS ARE AVAILABLE?",
    answer: "The THUNK3™  comes as Standard or Performance. The Torque Trends gear reduction box comes with all of their options including ParkLock, fixed or slip yokes or billet slip yoke. See their website for more details",
   linkText: "EV Reduction Gearbox - EV Transmission | Torque Trends Inc",
  linkUrl: "https://torquetrends.com"
  },
  {
    id: 7,
    question: "WHAT CONTROLLERS DOES THIS MOTOR WORK WITH?",
    answer: "You can use ANY controller of your choice that works with the Tesla Model 3/Y. We use EV Controls T2C as it fits our philosophy of powerful but simple but other options are available.",
  },
    {
    id: 8,
    question: "WHAT COMES WITH THE MOTOR?",
    answer: "The motor comes with the Torque Trends Torque Box with your options included, the inverter which is mounted remotely, 3 phase wiring, inverter control wiring, and the oil pump/filter with supply lines, also remotely mounted.",
  },
];

/**
 * Reusable Accordion Item component styled to match the dark, sleek design.
 * @param {object} props
 * @param {number} props.id - Unique ID of the item.
 * @param {string} props.question - The title of the FAQ.
 * @param {string} props.answer - The content to be shown on expand.
 * @param {number} props.activeId - The currently open item ID.
 * @param {function} props.onToggle - Function to handle click and update activeId.
 */
  const lines = text.split("\n");
const AccordionItem = ({ id, question, answer,linkUrl,linkText , activeId, onToggle }) => {

  const [isCarLitOnLoad, setIsCarLitOnLoad] = useState(false);

  useEffect(() => {
    // Set a 2000ms (2 second) delay before automatically turning the lights on.
    const timer = setTimeout(() => {
      setIsCarLitOnLoad(true); 
    }, 2000); // <-- 2000 milliseconds = 2 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);


  const isOpen = id === activeId;

  // SVG for the rotating arrow icon (styled deep red/maroon)
  const ArrowIcon = (
    <div className='p-2 rounded-full bg-[#A61313]/50 border-2 border-[#A61313]'>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 text-white font-bold transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
    </div>



  );

  return (
    <motion.div
     initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      className="mb-5 rounded-xl shadow-lg shadow-gray-400/10 scale-[0.980] transition-all duration-300 transform hover:scale-[1]"
      style={{
        // Custom gradient/box shadow to achieve the deep, glossy black look from the image
        background: 'linear-gradient(180deg, rgba(102, 102, 102, 0.5) 0%, rgba(28, 28, 28, 0.5) 77.69%)',
        
      }}
    >
      {/* Accordion Header/Button */}
      <button
        className="w-full flex justify-between items-center p-6 text-left text-sm sm:text-xl uppercase tracking-wide font-title "
        onClick={() => onToggle(id)}
      >
        <span className=' ms-5 lg:w-6/12'>{question}</span>
        {ArrowIcon}
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 text-base leading-relaxed border-t border-gray-800">
          <p>{answer}
{linkUrl && (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-800 hover:text-red-900 underline mt-2  ps-1 "
        >
          {linkText}
        </a>
      )}

          </p>
             
      
        </div>
      </div>
    </motion.div>
  );
};

// Main App Component
const Faq = () => {
  // State to track which item is currently open. Null means all are closed.
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    // If the currently open item is clicked, close it (set to null).
    // Otherwise, open the clicked item.
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black flex items-start justify-center p-6 sm:py-40">
      <div className="w-full max-w-7xl pt-12">
      
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            activeId={activeId}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;