import { motion } from "framer-motion";
import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-8">
      <img
        src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731254698/Coder_s_Cup_24_Logo_With_Sponsors_qyhl7g.png"
        alt="Olympiad Logo"
        className="h-52 w-auto"
      />

      <Hourglass visible={true}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#00a8ff', '#ff6f00']}
      />

    </div>
  );
};

export default Loader;
