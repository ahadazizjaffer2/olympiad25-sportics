import React, { useEffect, useRef } from "react"
import Marquee from "react-fast-marquee"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const images = [
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964487/acm-coders-cup-23-1_cr0ue1.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964486/acm-coders-cup-23-2_lk2c0f.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964487/acm-coders-cup-23-3_tc2q0x.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964488/acm-coders-cup-23-4_cwpsjk.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964490/acm-coders-cup-23-5_vfqigw.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964492/acm-coders-cup-23-7_ylz6jy.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964495/acm-coders-cup-23-10_ti87wp.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964494/acm-coders-cup-23-8_dhdsiq.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964496/acm-coders-cup-23-9_ahrr3y.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964496/acm-coders-cup-23-6_zrceac.jpg",
  "https://res.cloudinary.com/dm1xi8zff/image/upload/v1729964496/acm-coders-cup-23-11_pdmfuo.jpg",
]

export default function GlimpseComponentlow() {
  const componentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const component = componentRef.current
    const title = titleRef.current

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    )

    gsap.fromTo(
      component,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    )
  }, [])

  return (
    <div ref={componentRef}>
      <div className="flex justify-center px-2 sm:px-0 text-center items-center mb-12 md:mb-20 text-[34px] md:text-[41px] lg:text-[57px] xl:text-[70px] 2xl:text-7xl font-[700]">
        <h1 ref={titleRef} className="fira-code-heading text-[#FFFFFF]">
          <span className="text-[#00A8FF]">OLYMPIAD 2024 </span>
          <span className="bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">GLIMPSE</span>
        </h1>
      </div>
    
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {images.map((image, index) => (
          <div key={index} className="w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] md:w-[270px] md:h-[180px] lg:w-[360px] lg:h-[240px] xl:w-[400px] xl:h-[267px] 2xl:w-[400px] 2xl:h-[267px] bg-[#D9D9D9] mx-4 flex items-center justify-center rounded-xl">
            <img src={image} alt={`Olympiad ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
