import React from 'react';
import { PersonCard } from './PersonCard';

const TeamPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] py-12 px-12  mb-28'>
        
        <div className='flex justify-center items-center w-[100%] py-12'>
          <h1 className="integral-cf text-center text-5xl md:text-7xl font-bold py-6 px-2 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            OUR TEAM
          </h1>
        </div>

        <div className="flex flex-col lg:gap-16 md:gap-8 gap-8 flex-wrap">
          <div className='flex justify-center'>
            <PersonCard image="" name="Taha Abbas" position="President" />
          </div>
          <div className="flex gap-8 lg:gap-16 md:gap-8 justify-center md:flex flex-wrap">
            <PersonCard image="" name="Ghulam Mohiuddin" position="Vice President" />
            <PersonCard image="" name="Anush Almas" position="Marketig Vice President" />
          </div>
          <div className='flex gap-8 lg:gap-16 md:gap-8 flex-wrap justify-center'>
            <PersonCard image="" name="Wisha Zahid" position="General Secretary" />
            <PersonCard image="" name="Shahzaib Mirza" position="Treasurer" />
            <PersonCard image="" name="Zohaib Siddiqui" position="E-Sports Director" />
          </div>
          <div className="flex gap-8 lg:gap-16 md:gap-8 flex-wrap justify-center">
            <PersonCard image="" name="Moeed Uddin" position="Event Manager" />
            <PersonCard image="" name="Ausaja Hussain" position="Event Manager" />
          </div>
          <div className="flex gap-8 lg:gap-16 md:gap-8 flex-wrap justify-center">
            <PersonCard image="" name="Anser Tayyab" position="Director Discipline Affairs" />
            <PersonCard image="" name="Almeeza Tariq" position="Director Discipline Affairs" />
          </div>
        </div>


    </div>
  );
};

export default TeamPage;


