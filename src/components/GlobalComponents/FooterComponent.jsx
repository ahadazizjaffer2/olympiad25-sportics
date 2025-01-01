import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const developers = [
  { name: "Ahad Aziz", linkedIn: "https://www.linkedin.com/in/ahadaziz/"}
];

const FooterComponent = () => {
  return (
    <>
      <hr className='mt-12' />
      <footer className="bg-[#fff] text-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center w-full px-4 py-8 md:px-10 lg:px-24">
          {/* Map Column */}
          <div className="flex-grow flex justify-center mb-4 md:mb-0">
            <div className="rounded bg-zinc-300 w-full h-56 md:w-64 md:h-56 xl:w-80 xl:h-64 flex items-center justify-center">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.203336047934!2d67.26210887401167!3d24.856903945402394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1727465448702!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Social Links and Contact Us Column */}
          <div className="flex-grow flex flex-col items-center justify-center text-center mx-4 mb-4 md:mb-0">
            <div className="mb-4">
              <h1 className="mb-2 text-lg font-bold uppercase text-[18px] md:text-[20px]">Follow Us</h1>
              <div className="flex space-x-4 mb-2 justify-center items-center">
                <a href="https://www.linkedin.com/company/acmnuceskhi" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} className="text-zinc-900 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </a>
                <a href="https://www.facebook.com/acmnuceskhi/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <FontAwesomeIcon icon={faFacebook} className="text-zinc-900 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </a>
                <a href="https://www.instagram.com/acmnuceskhi/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="text-zinc-900 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-1">
              <h1 className="mb-2 text-lg font-bold uppercase text-[18px] md:text-[20px]">Contact Us</h1>
              <p className="flex items-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal">
                <a href="https://wa.me/+923128971349" className="flex items-center text-gray-900" aria-label="Call us at (+92) 322-2883752">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> (+92) 312-8971349
                </a>
              </p>
              <p className="flex items-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal">
                {/* <a href="https://www.acmnuceskhi.com" className="flex items-center text-gray-900" aria-label="Visit acmnuceskhi.com">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2" /> acmnuceskhi.com
                </a> */}
              </p>
            </div>
          </div>

          {/* Developers Column */}
          <div className="flex-grow flex flex-col items-center justify-center text-center mx-4 mb-4 md:mb-0">
          <h1 className="mb-2 text-lg font-bold uppercase text-[18px] md:text-[20px]">About the Developers</h1>
          <div className="flex flex-col justify-center items-center">
            {developers.map((dev, index) => (
              <div key={index} className="mb-2"> {/* Add margin for spacing */}
                <a
                  href={dev.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Profile of ${dev.name}`}
                  className="text-gray-900 hover:underline"
                >
                  {dev.name}
                </a>
              </div>
            ))}
          </div>


            <h1 className="mb-2 text-lg font-bold uppercase text-[18px] md:text-[20px]">REPOSITORY</h1>
            <a
              href="https://github.com/ahadazizjaffer2/olympiad25-sportics"
              className="flex overflow-hidden items-center text-sm font-medium bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star on GitHub"
            >
              <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-black opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
              <div className="flex items-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                  <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                </svg>
                <span className="ml-1 text-white">Star on GitHub</span>
              </div>
              <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                <svg
                  className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white">6</span>
              </div>
            </a>
          </div>
        </div>

        <div className="py-2 border-t border-black mt-auto w-full">
          <p className="text-center text-[15px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] font-normal">
            &copy; 2024 ACM | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
