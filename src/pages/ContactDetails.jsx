import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

const contactData = [
  {
    name: 'Taha Abbas',
    role: 'President',
    phone: '03343261849'
  },
  {
    name: 'Ghulam Mohiuddin',
    role: 'Vice President',
    phone: '03323787200'
  },
  {
    name: 'M.Sohaib',
    role: 'PR Head',
    phone: '03102622710'
  }
];

function ContactDetails() {
  return (
    <section className="my-24">
         <h1
        className="integral-cf event-flow-title text-center text-3xl md:text-7xl font-bold py-6 px-2 mb-6 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text"
      >
        Contact Us
      </h1>
    <div className='container'>
      <div className="flex flex-col gap-6 md:gap-12 md:flex-row md:flex-wrap justify-center">
        {contactData.map((contact, index) => (
          <div key={index} className="w-[500px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            
            <div className="p-6">
              <h3 className=" text-xl font-bold  mb-2">{contact.name}</h3>
              <p className="text-[#00A8FF] mb-4">{contact.role}</p>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-[#00A8FF] mr-2" />
                <a href={`tel:${contact.phone}`} className=" text-[#00A8FF] hover:underline">
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default ContactDetails;

