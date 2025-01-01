// import React, { useState, useEffect } from "react";

// const RegistrationCountdown = () => {
//   const [timeRemaining, setTimeRemaining] = useState(0);

//   // Target event date (12 February 2025, in Pakistan Standard Time)
//   const targetDate = new Date('2025-02-12T00:00:00+05:00'); // PST (UTC+5)

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       const currentTime = new Date().getTime();
//       let remainingTime = targetDate.getTime() - currentTime;

//       if (remainingTime <= 0) {
//         remainingTime = 0;
//         clearInterval(countdownInterval);
//       }

//       setTimeRemaining(remainingTime);
//     }, 1000);

//     return () => clearInterval(countdownInterval);
//   }, []);

//   // Function to format the time in days, hours, minutes, and seconds
//   const formatTime = (time) => {
//     const seconds = Math.floor((time / 1000) % 60);
//     const minutes = Math.floor((time / (1000 * 60)) % 60);
//     const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));

//     return (
//       <div className="flex justify-around items-center gap-4">
//         <div className="flex flex-col items-center justify-center bg-[#00A8FF] text-white font-bold text-3xl p-6 rounded-full w-32 h-32">
//           {days.toString().padStart(2, "0")}
//           <span className="text-xs text-white mt-[-0.75rem]">days</span>
//         </div>
//         <div className="flex flex-col items-center justify-center bg-[#00A8FF] text-white font-bold text-3xl p-6 rounded-full w-32 h-32">
//           {hours.toString().padStart(2, "0")}
//           <span className="text-xs text-white mt-[-0.75rem]">hours</span>
//         </div>
//         <div className="flex flex-col items-center justify-center bg-[#00A8FF] text-white font-bold text-3xl p-6 rounded-full w-32 h-32">
//           {minutes.toString().padStart(2, "0")}
//           <span className="text-xs text-white mt-[-0.75rem]">minutes</span>
//         </div>
//         <div className="flex flex-col items-center justify-center bg-[#00A8FF] text-white font-bold text-3xl p-6 rounded-full w-32 h-32">
//           {seconds.toString().padStart(2, "0")}
//           <span className="text-xs text-white mt-[-0.75rem]">seconds</span>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col justify-center items-center w-full h-full bg-cover bg-center bg-fixed bg-[url('./img/bg-img.jpg')]">
//       <h2 className="text-gray-900 text-3xl font-bold mb-4">Registration Countdown</h2>
//       <p className="text-gray-900 text-lg mb-6">
//         Registration ends on: {targetDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
//       </p>

//       {/* Display the formatted time remaining */}
//       {formatTime(timeRemaining)}
//     </div>
//   );
// };

// export default RegistrationCountdown;

import React, { useState, useEffect } from "react";

const RegistrationCountdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Target event date (12 February 2025, in Pakistan Standard Time)
  const targetDate = new Date('2025-02-12T00:00:00+05:00'); // PST (UTC+5)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      let remainingTime = targetDate.getTime() - currentTime;

      if (remainingTime <= 0) {
        remainingTime = 0;
        clearInterval(countdownInterval);
      }

      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  // Function to format the time in days, hours, minutes, and seconds
  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="flex justify-around items-center md:gap-4 gap-2 flex-wrap">
        <div className="flex flex-col items-center justify-center bg-[#00A8FF] rounded-md text-white font-bold text-3xl p-4 w-20 h-20 md:w-24 md:h-24">
          {days.toString().padStart(2, "0")}
          <span className="text-xs text-white mt-[-0.55rem]">days</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#00A8FF] rounded-md text-white font-bold text-3xl p-4 w-20 h-20 md:w-24 md:h-24">
          {hours.toString().padStart(2, "0")}
          <span className="text-xs text-white mt-[-0.5rem]">hours</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#00A8FF] rounded-md text-white font-bold text-3xl p-4 w-20 h-20 md:w-24 md:h-24">
          {minutes.toString().padStart(2, "0")}
          <span className="text-xs text-white mt-[-0.5rem]">minutes</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#00A8FF] rounded-md text-white font-bold text-3xl p-4 w-20 h-20 md:w-24 md:h-24">
          {seconds.toString().padStart(2, "0")}
          <span className="text-xs text-white mt-[-0.5rem]">seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col my-6 justify-center items-center w-full h-full bg-cover bg-center bg-fixed ">
      {/* Display the formatted time remaining */}
      {formatTime(timeRemaining)}
      
      <p className="text-gray-900 md:text-lg text-center my-6">
        Registration ends on: {targetDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
};

export default RegistrationCountdown;
