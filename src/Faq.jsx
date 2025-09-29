import React, { useState } from 'react';
// Using a simple SVG icon for the arrow, styled to look maroon/red.

// Sample FAQ data based on the previous conversation about the Thunk 3 Motor
const faqData = [
  {
    id: 1,
    question: "WHAT MAKES THE THUNK 3 MOTOR DIFFERENT FROM OTHER EV CONVERSION MOTORS?",
    answer: "The Thunk 3 motor is uniquely designed to sit inside the transmission tunnel, which is a major advantage for classic car conversions. This frees up both the engine bay and the rear gas tank area, allowing for battery placement in both the front and rear of the vehicle, resulting in superior weight balance and handling.",
  },
  {
    id: 2,
    question: "HOW MUCH POWER DOES THE THUNK 3 DELIVER?",
    answer: "The specific power specifications vary depending on the vintage vehicle configuration and battery system used. However, the Thunk 3 is engineered for instant torque delivery, providing robust, performance-focused acceleration that often exceeds the original vehicle's capabilities.",
  },
  {
    id: 3,
    question: "WHAT IS THE EV MOTOR PRICE?",
    answer: "Due to the custom nature of classic car conversions, pricing is quoted based on the specific kit requirements (e.g., cooling, mounting, control units). Please contact our sales team directly for a personalized, accurate quote.",
  },
  {
    id: 4,
    question: "WHY CONVERT MY CLASSIC CAR WITH AN ELECTRIC CAR CONVERSION MOTOR?",
    answer: "Converting your classic car to electric power offers the benefits of modern reliability, zero emissions, instant high-torque performance, and significantly reduced maintenance, all while preserving the vehicle's original aesthetics and timeless design.",
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
const AccordionItem = ({ id, question, answer, activeId, onToggle }) => {
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
    <div
      className="mb-5 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.020]"
      style={{
        // Custom gradient/box shadow to achieve the deep, glossy black look from the image
        background: 'linear-gradient(145deg, #1e1e1e, #0e0e0e)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Accordion Header/Button */}
      <button
        className="w-full flex justify-between items-center p-6 text-left font-inter text-lg uppercase tracking-wide text-white focus:outline-none"
        onClick={() => onToggle(id)}
      >
        <span>{question}</span>
        {ArrowIcon}
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 text-base leading-relaxed border-t border-gray-800">
          <p>{answer}</p>
        </div>
      </div>
    </div>
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
    <div className="min-h-screen bg-black flex items-start justify-center p-4 sm:p-10">
      <div className="w-full max-w-7xl pt-12">
        <h1 className="font-title text-4xl sm:text-5xl font-extrabold text-center text-white mb-10 uppercase tracking-wider">
          Frequently <br /> Asked Questions
        </h1>
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