import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function EventFlowComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    const component = componentRef.current;
    const title = component.querySelector('.event-flow-title');
    const parts = component.querySelectorAll('.event-part');

    gsap.fromTo(title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      }
    );

    parts.forEach((part, index) => {
      const image = part.querySelector('img');
      const content = part.querySelector('.event-content');

      gsap.fromTo(image,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: part,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          }
        }
      );

      gsap.fromTo(content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: part,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <div ref={componentRef} className="overflow-hidden mt-12">
      <h1
        className="integral-cf event-flow-title text-center text-3xl md:text-7xl font-bold py-6 px-2 mb-6 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text"
      >
        EVENT FLOW
      </h1>

      <div className="mx-6 sm:mx-14 md:mx-20 lg:mx-auto">
        {/* Event Part 1 */}
        <div className="event-part mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px]">
          <div className="flex justify-center items-center">
            <img className="w-full h-auto" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964471/Part-1_vfveq3.png" alt="Part 1" />
          </div>
          <div className="event-content absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 md:left-[-1px] xl:left-[1px] justify-start lg:h-[53%] 2xl:h-auto">
            <div>
              <img className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964470/bar_efdtm7.png" alt="Bar" />
            </div>
            <div className="ml-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-gray-900 w-[74%] sm:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5em] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">26 October</span></h1>
              <p className="lg:mb-0 mb-2">Registration Starts</p>
            </div>
          </div>
        </div>

        {/* Event Part 2 */}
        <div className="event-part mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px] bottom-2 md:bottom-3 lg:bottom-4 xl:bottom-5 2xl:bottom-6">
          <div className="flex justify-center items-center">
            <img className="w-full h-auto" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964472/Part-2_idyf5f.png" alt="Part 2" />
          </div>
          <div className="event-content absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 right-[22%] md:right-[22.2%] lg:right-[12.3rem] xl:right-[15rem] 2xl:right-[17.8rem] justify-end lg:h-[53%] 2xl:h-auto">
            <div className="mr-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center text-end xl:gap-0 2xl:gap-3 text-gray-900 w-[74%] sm:w-[63.2%] lg:w-[45%] xl:w-[40%] 2xl:w-[50%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">7 November</span></h1>
              <p className="lg:mb-0 mb-2">Qualifier Round Begins</p>
            </div>
            <div>
              <img className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964470/bar_efdtm7.png" alt="Bar" />
            </div>
          </div>
        </div>

        {/* Event Part 3 */}
        <div className="event-part mx-auto relative lg:w-[890px] xl:w-[1080px] 2xl:w-[1300px] bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-9 2xl:bottom-11">
          <div className="flex justify-center items-center">
            <img className="w-full h-auto" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964474/Part-3_jjpaxz.png" alt="Part 3" />
          </div>
          <div className="event-content absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 left-[22.7%] md:left-[23%] lg:left-[12.7rem] xl:left-[15.4rem] 2xl:left-[18.3rem] justify-start lg:h-[53%] 2xl:h-auto">
            <div>
              <img className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964470/bar_efdtm7.png" alt="Bar" />
            </div>
            <div className="ml-3 mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center xl:gap-0 2xl:gap-3 text-gray-900 w-[78%] sm:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[30%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">14 November</span></h1>
              <p className="lg:mb-0 mb-2">Drafting</p>
            </div>
          </div>
        </div>

        {/* Final Event Part */}
        <div className="event-part mx-auto relative lg:w-[880px] xl:w-[1080px] 2xl:w-[1300px] bottom-5 sm:bottom-8 md:bottom-9 lg:bottom-12 xl:bottom-14 2xl:bottom-16">
          <div className="flex justify-center items-center">
            <img className="w-full h-auto" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964472/Part-2_idyf5f.png" alt="Final Event Part" />
          </div>
          <div className="event-content absolute flex top-5 sm:top-8 lg:top-10 2xl:top-20 right-[22%] md:right-[22.2%] lg:right-[12.3rem] xl:right-[15rem] 2xl:right-[17.8rem] justify-end lg:h-[53%] 2xl:h-auto">
            <div className="mr-3 mb-5 sm:mb-7 2xl:mt-0 lg:mb-0 xl:mt-5 lg:mt-9 flex flex-col justify-center text-end xl:gap-0 2xl:gap-3 text-gray-900 w-[74%] sm:w-[63.2%] lg:w-[45%] xl:w-[40%] 2xl:w-[50%] text-[1.2rem] sm:text-[1.5rem] md:text-[1.76rem] lg:text-[2.3rem] xl:text-[2.5rem] 2xl:text-[2.7rem]">
              <h1 className="fira-code-heading font-[600]"><span className="whitespace-nowrap">19 November</span></h1>
              <p className="lg:mb-0 mb-2">Final Round & Closing Ceremony</p>
            </div>
            <div>
              <img className="max-w-[0.75rem] sm:max-w-[1.2rem] md:max-w-[1.4rem] lg:max-w-7 xl:max-w-8 2xl:max-w-[100%]" src="https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964470/bar_efdtm7.png" alt="Bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}