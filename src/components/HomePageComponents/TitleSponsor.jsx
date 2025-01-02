import React from 'react';

const tempImage = "https://res.cloudinary.com/dm1xi8zff/image/upload/v1730217455/main-sponsor_jyp6zk.png";

const TitleSponsor = () => {
  return (
    <div className='w-[100%] uppercase font-bold flex justify-center items-center flex-col gap-y-4'>
        <h1 className=" text-white text-3xl">
            <span className="text-[#10a2b5] text-center">Title Sponsor</span>
        </h1>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-x-8 gap-y-8 w-[50%]'>
            <a href="https://www.m3tech.com.pk/" target="_blank" rel="noopener noreferrer">
                <img src={tempImage} alt="Title Sponsor" className='w-20' />
            </a>
        </div>
    </div>
  );
}

export default TitleSponsor;