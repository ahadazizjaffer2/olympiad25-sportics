import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const rightImg = "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729965297/header-registration_tb3zk2.png"; // Use the image URL directly

  const handleDragStart = (event) => {
    event.preventDefault();
  };

  const handleRegisterClick = () => {
    navigate('/registration');
  };

  return (
    <div ref={headerRef} className="mt-32 z-10">
      <div className="flex flex-col-reverse sm:flex-row items-center text-white mx-auto w-[85%]">
        <div className="sm:w-[50%] md:w-[47%] sm:border-l-4 border-white sm:px-3 pt-6 text-center sm:text-start">
          <p className="integral-cf title uppercase text-[40px] 2xl:text-[120px] font-bold mb-3 sm:mb-2 xl:mb-3 xl:text-[55px] lg:text-[40px] md:text-[28px] sm:text-[25px] bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            JOIN US
          </p>
          <p className="subtitle md:mt-1 sm:mt-1 uppercase text-[14px] 2xl:text-2xl xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[11px] text-gray-600">
            {"DON'T MISS OUT ON THE EXCITEMENT! SIGN UP NOW TO RESERVE YOUR PLACE AT THIS AMAZING EVENT!"}
          </p>
          <button
            className="register-button bg-[#ff6f00] 2xl:px-6 2xl:py-3 2xl:text-4xl xl:py-3 xl:px-4 lg:py-2 lg:px-4 py-2 px-4 font-bold lg:mt-5 2xl:mt-7 sm:mt-2 mt-4 rounded-md hover:bg-[#33618a] transition duration-100 xl:text-[22px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[20px]"
            onClick={handleRegisterClick}
          >
            Register Now
          </button>
        </div>
        <div className="2xl:w-[10%] xl:w-[15%] lg:w-[15%] md:w-[20%] sm:w-[10%]"></div>
        <div className="2xl:w-[40%] xl:w-[35%] lg:w-[35%] md:w-[33%] sm:w-[40%] w-[75%] mb-3 sm:mb-0" style={{ userSelect: 'none' }}>
          <img 
            className="header-image"
            src={rightImg} 
            alt="header-image" 
            style={{ userSelect: 'none' }} 
            onDragStart={handleDragStart}
          />
        </div>
      </div>
    </div>
  );
}