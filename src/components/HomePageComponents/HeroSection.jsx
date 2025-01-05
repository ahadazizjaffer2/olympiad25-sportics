// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

// export default function HeroSection() {
//   const navigate = useNavigate();

//   // Refs for elements to animate
//   const logoRef = useRef(null);
//   const buttonRef = useRef(null);
//   const sponsorRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Initial animations when the section loads
//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, scale: 0.5, y: -100 },
//       {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "elastic.out(1, 0.75)",
//       }
//     );

//     gsap.fromTo(
//       buttonRef.current,
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
//     );

//     gsap.fromTo(
//       sponsorRef.current,
//       { opacity: 0, x: 50 },
//       { opacity: 1, x: 0, duration: 1.2, ease: "expo.out", delay: 0.5 }
//     );

//     // Scroll-triggered parallax effect on the background
//     gsap.to(containerRef.current, {
//       backgroundPosition: "50% 30%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//       },
//     });

//     // Scroll-triggered animation for the sponsor section
//     gsap.fromTo(
//       sponsorRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: sponsorRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   const handleRegisterClick = () => {
//     navigate("/registration");
//   };

//   return (
//     <div
//       className="w-full bg-cover bg-center h-full flex flex-col justify-between py-20 overflow-hidden"
//       style={{
//         backgroundImage: `url(https://res.cloudinary.com/dm1xi8zff/image/upload/v1730031261/hero-bg_ixlcmk.png)`,
//       }} // Updated hero background URL
//       ref={containerRef} // Parallax effect container
//     >
//       <div className="flex flex-col items-center justify-center mt-12 mb-20">
//         <img
//           className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto mb-8"
//           src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731254698/Coder_s_Cup_24_Logo_With_Sponsors_qyhl7g.png"
//           alt="Olympiad Logo"
//           ref={logoRef} // Logo animation ref
//         />
//         <button
//           className="text-white text-lg bg-[#ff6f00] border border-white rounded-md px-8 py-3 hover:bg-[#d15c02] transition-transform transform hover:scale-105 active:scale-95"
//           ref={buttonRef} // Button animation ref
//           onClick={handleRegisterClick}
//         >
//           Register Now
//         </button>
//       </div>

      
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "../GlobalComponents/Squares"; // Import the Squares component
import RegistrationCountdown from "../GlobalComponents/Countdown";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function HeroSection() {
  const navigate = useNavigate();

  // Refs for elements to animate
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const sponsorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial animations when the section loads
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, y: -100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
    );

    gsap.fromTo(
      sponsorRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );

    // Scroll-triggered parallax effect on the background (if needed for other animations)
    gsap.to(containerRef.current, {
      backgroundPosition: "50% 30%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Scroll-triggered animation for the sponsor section
    gsap.fromTo(
      sponsorRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sponsorRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleRegisterClick = () => {
    navigate("/registration");
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-between py-20 pb-0 overflow-hidden relative"
      ref={containerRef} // Parallax effect container
    >
      <div className="fixed top-0 left-0 w-full h-full bg-white z-[-1]">
        <Squares direction="diagonal" speed={0.2} />
      </div>

      <div className="flex flex-col items-center justify-center mt-12 mb-10 relative z-10">
        <img
          className="w-[300px] sm:w-[400px] md:w-[400px] lg:w-[400px] h-auto mb-6"
          // src="https://res.cloudinary.com/dlriiwcsn/image/upload/v1731254698/Coder_s_Cup_24_Logo_With_Sponsors_qyhl7g.png"
          src="https://i.ibb.co/8K4rZw5/olympiad-logo.png"
          // src="sportics2.png"
          alt="Olympiad Logo"
          ref={logoRef} // Logo animation ref
        />
        <button
          className="text-white text-lg bg-[#ff6f00] border border-white rounded-md px-8 py-3 hover:bg-[#d15c02] transition-transform transform hover:scale-105 active:scale-95"
          ref={buttonRef} // Button animation ref
          onClick={handleRegisterClick}
        >
          Register Now
        </button>

        <RegistrationCountdown/>
      </div>
    </div>
  );
}
