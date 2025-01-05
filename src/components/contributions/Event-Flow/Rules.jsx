import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SportsRules from "./SportsRules"
import { ThemeProvider, createTheme } from '@mui/material/styles';

gsap.registerPlugin(ScrollTrigger)

export default function Rules() {
  const componentRef = useRef(null)
  const titleRef = useRef(null)
  const rulesRef = useRef(null)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00A8FF', // Set the primary color here
      },
    },
  });
  
  const tabsData = [
    { key: 'tab1', title: 'Football', content: 'Football rules content.' },
    { key: 'tab2', title: 'Basketball', content: 'Basketball rules content.' },
    { key: 'tab3', title: 'Tennis', content: 'Tennis rules content.' },
  ];

  useEffect(() => {
    const component = componentRef.current
    const title = titleRef.current
    // const rules = rulesRef.current
    // const listItems = rules.querySelectorAll('li')

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

    // gsap.fromTo(
    //   rules,
    //   { opacity: 0, y: 50 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: rules,
    //       start: "top 80%",
    //       end: "top 20%",
    //       scrub: 1,
    //     },
    //   }
    // )

    // listItems.forEach((item, index) => {
    //   gsap.fromTo(
    //     item,
    //     { opacity: 1, x: 0 },
    //     {
    //       opacity: 1,
    //       x: 0,
    //       duration: 0.5,
    //       delay: index * 0.1,
    //       scrollTrigger: {
    //         trigger: rules,
    //         start: "top 70%",
    //         end: "bottom 20%",
    //         scrub: 1,
    //       },
    //     }
    //   )
    // })
  }, [])

  return (
    <div ref={componentRef} className="lg:mt-28 md:mt-32 sm:mt-32 mt-24 mb-4">
      <div className="text-gray-600 text-center sm:mb-0 md:mb-0 lg:mb-0  sm:mt-0 mt-8">
        <h1 ref={titleRef} className="font-[700] text-[34px] 2xl:text-[70px] xl:text-[66px] lg:text-[55px] md:text-[40px] sm:text-[30px]">
          <span className="integral-cf bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            SOPs and Regulations
          </span>
        </h1>
      </div>
      {/* <div className="flex justify-center items-center max-w-[93%] sm:max-w-[92%] md:max-w-[85%] bg-[#FDFDFD1C] mx-auto rounded-2xl border border-[#FFFFFF]">
        <ul ref={rulesRef} className="text-gray-600 w-[87%] my-8 text-left list-disc text-[15px] sm:text-[14px] md:text-[15px] xl:text-[18px] 2xl:text-[25px] 2xl:ml-5 xl:ml-8 ml-5">
          <li className="mb-4">
            Teams must use the same Vjudge account as provided during registration for the competition.
          </li>
          <li className="mb-4">
            Internet access is only allowed for code submission via Vjudge.
          </li>
          <li className="mb-4">
            Use of ChatGPT, Google Bard, or similar tools will result in disqualification.
          </li>
          <li className="mb-4">
            Mobile usage is strictly prohibited throughout the competition.
          </li>
          <li className="mb-4">
            Teams collaborating with others in any way will be disqualified.
          </li>
          <li className="mb-4">
            Only C/C++, Python, and Java are allowed for coding.
          </li>
          <li className="mb-4">
            Partial submissions will not earn any points.
          </li>
          <li className="mb-4">
            Vjudge will be used as the competition platform, and teams must create their own accounts.
          </li>
          <li className="mb-4">
            No food or drinks are allowed inside the competition venue.
          </li>
          <li className="mb-4">
            Disqualification will result from plagiarism, unauthorized internet usage (except for Vjudge and IDE), or misconduct with invigilators or participants.
          </li>
          <li className="mb-4">
            Teams should not bring laptops, as PCs will be provided in the lab venue as communicated earlier.
          </li>
          <li className="mb-4">
            The competition will begin at the announced time, and teams must arrive early for instructions.
          </li>
          <li className="mb-4">
            Organizers may adjust rules or competition parameters if unforeseen issues arise, with timely updates to ensure fairness.
          </li>
          <li>
            Note: Any violation of these rules may lead to strict academic consequences.
          </li>
        </ul>
      </div> */}

      <div className="text-gray-900 space-y-16 flex flex-col justify-center my-8 max-w-[90%] sm:max-w-[92%] md:max-w-[75%] bg-[#FDFDFD1C] mx-auto rounded-2xl border border-[#FFFFFF] text-[16px] sm:text-[17px] md:text-[17px] xl:text-[20px] 2xl:text-[25px]">
        {/* Registration Process */}
        <section>
          <h3 className="font-semibold mb-4">1. Registration Process</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>Participants must register online via the official Olympiad website before the deadline.</li>
            <li>After registration, participants will receive an email confirming the receipt of their registration form.</li>
            <li>Registration payments will be reviewed and approved by the Sportics Committee.</li>
            <li>Once the payment is approved, a confirmation email will be sent to participants, confirming their registration.</li>
          </ul>
        </section>

        {/* Team Registration */}
        <section>
          <h3 className="font-semibold mb-4">2. Team Registration</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>For team sports, only the designated team leader will complete the registration process.</li>
            <li>The team leader must provide accurate details of all team members during registration.</li>
            <li>Team members are required to confirm their participation with the team leader.</li>
            <li>Substitution of team members after registration will not be allowed unless explicitly approved by the organizing committee.</li>
          </ul>
        </section>

        {/* General Guidelines */}
        <section>
          <h3 className="font-semibold mb-4">3. General Guidelines for Participants</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>All participants must wear appropriate sports attire during games.</li>
            <li>Participants must adhere to the rules and guidelines of each sport.</li>
            <li>Misconduct, foul language, or unsportsmanlike behavior will lead to disqualification.</li>
            <li>Participants are required to arrive at least 30 minutes before the scheduled match time.</li>
            <li>Team leaders are responsible for ensuring their team’s presence at the venue on time.</li>
            <li>All playing participants must be present for their scheduled matches on time, or else the opponent will be awarded a walkover victory unless the organizing committee grants a special exception.</li>
          </ul>
        </section>

        {/* E-Sports Guidelines */}
        <section>
          <h3 className="font-semibold mb-4">4. E-Sports Guidelines</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>All players must use their gaming accounts and log in before the match begins.</li>
            <li>Players must follow the specific rules for each game (e.g., PUBG, Valorant).</li>
            <li>Cheating, hacking, or use of unfair advantages will result in immediate disqualification.</li>
            <li>The decision of the event referees for e-sports will be final and binding.</li>
          </ul>
        </section>

        {/* Conduct and Discipline */}
        <section>
          <h3 className="font-semibold mb-4">5. Conduct and Discipline</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>Participants and spectators must maintain discipline at all times.</li>
            <li>Alcohol, drugs, vapes, cigarettes, or any prohibited substances are strictly forbidden on campus.</li>
            <li>Any disputes must be reported to the organizing committee immediately.</li>
            <li>The decision of referees and the organizing committee will be considered final.</li>
          </ul>
        </section>

        {/* Safety and Security */}
        <section>
          <h3 className="font-semibold mb-4">6. Safety and Security</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>Lost and found items must be reported to the help desk immediately.</li>
            <li>Participants are responsible for their personal belongings.</li>
          </ul>
        </section>

        {/* Emergency Handling */}
        <section>
          <h3 className="font-semibold mb-4">7. Emergency Handling</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>In case of medical emergencies, participants must contact the nearest organizer or medical staff.</li>
          </ul>
        </section>

        {/* Cancellation or Postponement of Events */}
        <section>
          <h3 className="font-semibold mb-4">8. Cancellation or Postponement of Events</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>The organizer reserves the right to cancel or postpone events due to unforeseen circumstances.</li>
            <li>Participants will be notified via email or SMS regarding any changes.</li>
          </ul>
        </section>

        {/* Photography and Media Coverage */}
        <section>
          <h3 className="font-semibold mb-4">9. Photography and Media Coverage</h3>
          <ul className="list-disc pl-6 space-y-2 text-[14px] sm:text-[15px] md:text-[15px] xl:text-[20px] 2xl:text-[22px]">
            <li>By registering for the event, participants consent to photography and video coverage during the event.</li>
            <li>The organizing committee reserves the right to use photos and videos for promotional purposes.</li>
          </ul>
        </section>
      </div>

      <div className="text-gray-600 text-center mb-4 sm:mb-4 md:mb-4 lg:mb-0 mt-24">
        <h1 ref={titleRef} className="font-[700] text-[34px] 2xl:text-[70px] xl:text-[66px] lg:text-[55px] md:text-[40px] sm:text-[30px]">
          <span className="integral-cf bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text">
            RULES FOR ALL SPORTS
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center max-w-[93%] sm:max-w-[92%] md:max-w-[85%] bg-[#FDFDFD1C] mx-auto rounded-2xl border border-[#FFFFFF]">
        <div className="container p-2 md:p-6">
          <SportsRules />
        </div>
      </div>
    </div>
  )
}