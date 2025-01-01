import React from "react";

export default function Header() {

  return (
    <div className="mt-32">
      <div className="flex flex-col-reverse sm:flex-row items-center text-white mx-auto w-[85%]">
        {/* Text Section */}
        <div className="sm:w-[50%] md:w-[47%] sm:border-l-4 border-white sm:px-3 pt-6 text-center sm:text-start">
          <p className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent uppercase text-[40px] 2xl:text-[80px] font-bold mb-3 sm:mb-2 xl:mb-3 xl:text-[55px] lg:text-[40px] md:text-[28px] sm:text-[25px]">
            MUST WATCH
          </p>

          <p className="md:mt-1 sm:mt-1 uppercase text-[14px] 2xl:text-2xl xl:text-[17px] lg:text-[14px] md:text-[12px] sm:text-[11px]">
            A complete guide resource for filling the Olympiad Registration Form
          </p>

          
        </div>

        {/* Spacer */}
        <div className="2xl:w-[10%] xl:w-[15%] lg:w-[15%] md:w-[20%] sm:w-[10%]"></div>

        {/* Responsive Rectangular Video Section */}
        <div className="w-full sm:w-auto mb-3 sm:mb-0">
          <div className="relative w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-[16/9] mx-auto">
            <iframe
              className="absolute inset-0 w-full h-full rounded-3xl shadow-lg"
              src="https://www.youtube.com/embed/aMNqSRqdYWQ?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; loop; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
