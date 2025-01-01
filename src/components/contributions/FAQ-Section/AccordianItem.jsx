import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const AccordianItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[90%] md:w-[80%] bg-gray-800 mb-4 rounded-lg shadow-md overflow-hidden border border-white mx-auto">
      <div
        className="flex justify-between items-center cursor-pointer bg-[#19192E] rounded-lg py-4 px-4 sm:px-6 md:py-5 md:px-8"
        onClick={toggleAccordion}
      >
        <span className="text-base sm:text-lg md:text-xl">{question}</span>
        <span className="text-base sm:text-lg md:text-xl">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 sm:p-4 border-t bg-[#19192E] text-xs sm:text-sm md:text-base text-gray-300">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
