import { motion } from "framer-motion";
import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-8">
      <img
        src="https://i.ibb.co/521ck5W/LOGO-OLYMPIAD-TRANS.png"
        alt="Olympiad Logo"
        className="h-80 md:h120 w-auto"
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
