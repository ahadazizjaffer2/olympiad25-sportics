import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CodersCupBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={bannerRef} 
      className="w-4/5 max-w-full h-full rounded-2xl border border-black text-center mx-auto m-8 p-6 bg-white"
    >
      <div>
        <span className="bricks text-[#00A8FF] text-[12vw] md:text-[10vw] font-bold break-words">
          OLYMPIAD
        </span>
        <span className="bricks bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text text-[12vw] md:text-[10vw] font-bold break-words mb-6">
          {' '}2025
        </span>
      </div>
      <div className="text-gray-600 text-[3vw] font-light break-words mb-4">
        Code, Compile, and Conquer
      </div>
    </div>
  );
};

export default CodersCupBanner;
