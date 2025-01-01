import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Store images in an array
const eventImages = [
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964503/event1_ajb9dz.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964504/event2_exeisd.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964505/event3_ncetf6.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964508/event4_sq8ywt.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964512/event7_ueqdta.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964514/event8_g7cewl.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964515/event9_vvsjiy.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964516/event10_lvjqtq.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964522/event14_tp1vth.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964523/event15_fssddm.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964519/event12_d9nxg9.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964518/event11_p2j8ws.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964511/event5_brgezt.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964533/event23_fa8ety.jpg"
];

const CodersCupHistory = () => {
  // Refs to target elements for animation
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Heading Animation on Scroll
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 }, // Initial state
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Animation starts when 80% of the element is visible
          toggleActions: 'play none none none',
        },
      }
    );

    // Description Animation on Scroll
    gsap.fromTo(
      descRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Image Slider Animation on Scroll
    gsap.fromTo(
      sliderRef.current.querySelectorAll('.splide__slide'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2, // Stagger the animation for each slide
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="bg-transparent text-gray-700 p-6">
      {/* Heading */}
      <h1
        ref={headingRef}
        className="integral-cf text-center text-3xl md:text-7xl font-bold py-6 px-2 mb-6 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text"
      >
        <span className="integral-cf text-[#00A8FF]">OLYMPIAD</span> HISTORY
      </h1>

      {/* Description */}
      <p
        ref={descRef}
        className="text-center text-lg md:text-xl mb-10 px-4 md:px-20"
      >
        Over the years, the event has grown in scale, attracting talented participants. Coder's Cup not only nurtures technical excellence but also encourages collaboration and teamwork, establishing itself as a prestigious platform for budding coders.
      </p>

      {/* Image Slider */}
      <div ref={sliderRef} className="w-full sm:max-w-[90%] mx-auto">
        <Splide
          options={{
            rewind: true,
            gap: '',
            width: '100%',
            autoplay: true,
            pauseOnHover: true,
            type: 'loop',
          }}
          aria-label="Event Highlights"
        >
          {eventImages.map((src, index) => (
            <SplideSlide key={index}>
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full mx-auto pb-4 rounded-xl object-contain h-[400px] md:h-[600px]"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .splide__arrow {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CodersCupHistory;
