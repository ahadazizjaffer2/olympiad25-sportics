import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Use the Cloudinary URL for the logo
const logo = "https://res.cloudinary.com/dlriiwcsn/image/upload/v1731254698/Coder_s_Cup_24_Logo_With_Sponsors_qyhl7g.png"

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function AboutCodersCup() {
    const logoRef = useRef(null); // Ref for the logo
    const sectionRef = useRef(null); // Ref for the section

    useEffect(() => {
        // Parallax and scaling effect on the logo
        gsap.fromTo(
            logoRef.current,
            { y: 50, scale: 0.8, opacity: 0 }, // Start below with small size and hidden
            {
                y: 0, scale: 1, opacity: 1, // Align in place with full size and opacity
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: 'top 80%', // Starts animation when 80% of section is visible
                    end: 'bottom 40%', // Ends when 40% remains
                    scrub: 1, // Smooth scrubbing animation
                },
            }
        );

        // Subtle zoom-in effect on the entire section during scroll
        gsap.fromTo(
            sectionRef.current,
            { scale: 1 },
            {
                scale: 1.02,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="text-[#00A8FF] bg-[#fff] pt-12 mb-28" ref={sectionRef}>
            <h1 className="integral-cf text-center text-3xl md:text-7xl font-bold py-6 px-2 bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
                ABOUT <span className="integral-cf text-[#00A8FF]">OLYMPIAD</span>
            </h1>

            <div className="sporting-grotesque flex flex-col md:flex-row gap-8 justify-center items-center px-4">
                <p className="text-gray-700 w-full md:w-6/12 text-center md:text-left">
                    Sportics Olympiad is an annual coding competition celebrating technology and problem-solving. It brings together top programmers from FAST University to compete in fast-paced, intense coding challenges. Whether you're a beginner or a pro, Olympiad is your platform to sharpen your skills and compete with the best.
                    <br /><br />
                    Over the years, the event has grown in scale, attracting talented participants. Coder's Cup not only nurtures technical excellence but also encourages collaboration and teamwork, establishing itself as a prestigious platform for budding coders.
                </p>

                {/* Animated Logo */}
                <img
                    className="w-full md:w-4/12"
                    src={logo}
                    alt="Olympiad Logo"
                    ref={logoRef}
                />
            </div>
        </div>
    );
}