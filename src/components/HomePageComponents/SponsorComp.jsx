import React from 'react';
import TitleSponsor from "./TitleSponsor.jsx";
import PremiumSponsor from './PremiumSponsor.jsx';

const SponsorComp = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] py-12'>
      <div className='flex flex-col justify-center items-center w-[100%] py-12'>
        <h1 className="integral-cf text-center text-3xl md:text-7xl font-bold py-6 px-2 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
          OUR PARTNERS
        </h1>
      </div>
      <TitleSponsor />
      <PremiumSponsor />

      {/* Blockeyfi Logo with Heading */}
      <div className="blockeyfi-logo-container mb-6 mt-8 flex flex-col items-center">
        <h2 className="fira-code text-gray-300 text-4xl mb-2">
          <span className="uppercase font-bold text-white">Co-Sponsor</span>
        </h2>
        <img 
          src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348560/Untitled_design_5_uzzrl0.png" 
          alt="Blockeyfi" 
          className="max-w-[150px]" 
        />
      </div>

      {/* Sponsor Logos in Row (with responsive behavior) */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
        {/* Circliphy Logo with Heading */}
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h2 className="fira-code text-gray-300 text-4xl mb-4">
            <span className="uppercase text-white font-bold">Tech Partner</span>
          </h2>
          <img 
            src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348643/Circliphy_Tech_partner_qk9s4z.png" 
            alt="Circliphy" 
            className="max-w-[110px] object-contain" 
          />
        </div>

        {/* Datacamp Logo with Heading */}
        <div className="flex flex-col items-center mb-6 sm:mb-0">
          <h2 className="fira-code text-gray-300 text-4xl mb-4">
            <span className="uppercase text-white font-bold">Academic Partner</span>
          </h2>
          <img 
            src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731348617/Datacamp_1_rq7xyo.png" 
            alt="Datacamp" 
            className="max-w-[200px] object-contain" 
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorComp;