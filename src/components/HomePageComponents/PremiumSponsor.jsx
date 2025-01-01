import React from 'react';

const tempImage = "https://res.cloudinary.com/dm1xi8zff/image/upload/v1730478159/Premium_Sponsor_yqmmc6.png";

const PremiumSponsor = () => {
  return (
    <div className='w-[100%] flex justify-center items-center flex-col gap-y-4 mt-12'>
        <h1 className="fira-code font-bold text-[#e0bc6e] text-4xl">
            <span className="uppercase text-[#e0bc6e] text-center">Premium Sponsor</span>
        </h1>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-x-8 gap-y-8 w-[50%]'>
            <a href="https://alhabibfunds.com/" target="_blank" rel="noopener noreferrer">
                <img src={tempImage} alt="Premium Sponsor" className='w-72' />
            </a>
        </div>
    </div>
  );
}

export default PremiumSponsor;