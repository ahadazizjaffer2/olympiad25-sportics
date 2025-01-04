import React, { useState, useRef, useEffect } from 'react';

const sports = [
  { name: 'Soccer', rules: ['11 players per team', '90-minute game', 'No hands except goalkeeper'] },
  { name: 'Basketball', rules: ['5 players per team', '48-minute game', 'Dribble to move with ball'] },
  { name: 'Tennis', rules: ['Singles or doubles', 'Sets to 6 games', 'Serve diagonally'] },
  { name: 'Swimming', rules: ['Various strokes', 'Timed races', 'Touch wall to finish'] },
  { name: 'Athletics', rules: ['Track and field events', 'Measured by time or distance', 'Starting blocks for sprints'] },
  { name: 'Gymnastics', rules: ['Various apparatus', 'Scored on difficulty and execution', 'Perfect score is 10'] },
  { name: 'Volleyball', rules: ['6 players per team', 'First to 25 points', 'Maximum 3 touches per side'] },
  { name: 'Table Tennis', rules: ['Singles or doubles', 'Games to 11 points', 'Alternate serves every 2 points'] },
  { name: 'Badminton', rules: ['Singles or doubles', 'Games to 21 points', 'Serve diagonally and below waist'] },
  { name: 'Cycling', rules: ['Various disciplines', 'Timed races or first to finish', 'Drafting allowed in some events'] },
  { name: 'Rowing', rules: ['Single or team boats', 'Race over set distance', 'Lanes assigned'] },
  { name: 'Boxing', rules: ['Weight classes', 'Rounds with scoring', 'Protective gear required'] },
  { name: 'Judo', rules: ['Weight categories', 'Win by ippon or points', 'Matches on mat area'] },
  { name: 'Fencing', rules: ['Three weapon types', 'Matches to 5 or 15 points', 'Electronic scoring'] },
  { name: 'Archery', rules: ['Target at set distances', 'Scored by proximity to center', 'Various bow types'] },
  { name: 'Wrestling', rules: ['Weight classes', 'Win by pin or points', 'Matches on circular mat'] },
  { name: 'Weightlifting', rules: ['Two lifts: snatch and clean & jerk', 'Three attempts per lift', 'Highest total weight wins'] },
  { name: 'Taekwondo', rules: ['Weight categories', 'Points for strikes', 'Protective gear required'] },
];

function SportRules() {
  const [activeSport, setActiveSport] = useState(sports[0].name);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabsRef = useRef(null);

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      const handleScroll = () => {
        setShowLeftArrow(tabsElement.scrollLeft > 0);
        setShowRightArrow(
          tabsElement.scrollLeft < tabsElement.scrollWidth - tabsElement.clientWidth
        );
      };

      tabsElement.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => tabsElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTabs = (direction) => {
    const tabsElement = tabsRef.current;
    if (tabsElement) {
      tabsElement.scrollBy({ left: direction * 200, behavior: 'smooth' });
    }
  };

  return (
    <section id="rules" className="my-4">
      <div className="bg-[#FFFFFF] rounded-lg shadow-lg overflow-hidden lg:flex">
        {/* Vertical tabs for larger screens */}
        <div className="hidden lg:block w-1/4 bg-gray-200">
          {sports.map((sport) => (
            <button
              key={sport.name}
              className={`w-full px-4 py-3 text-left  text-sm transition-colors duration-300 ${
                activeSport === sport.name
                  ? 'bg-[#00A8FF] text-[#FFF]'
                  : 'text-[#000] hover:bg-[#66D6FF]'
              }`}
              onClick={() => setActiveSport(sport.name)}
            >
              {sport.name}
            </button>
          ))}
        </div>

        {/* Horizontal scrollable tabs for smaller screens */}
        <div className="lg:hidden relative">
          {showLeftArrow && (
            <button
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FFFFFF] to-transparent px-2 z-10"
              onClick={() => scrollTabs(-1)}
            >
              &#9664;
            </button>
          )}
          {showRightArrow && (
            <button
              className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#FFFFFF] to-transparent px-2 z-10"
              onClick={() => scrollTabs(1)}
            >
              &#9654;
            </button>
          )}
          <div
            ref={tabsRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sports.map((sport) => (
              <button
                key={sport.name}
                className={`px-4 py-2 whitespace-nowrap text-sm transition-colors duration-300 ${
                  activeSport === sport.name
                    ? 'bg-[#00A8FF] text-[#FFF]'
                  : 'text-[#000] hover:bg-[#66D6FF]'
                }`}
                onClick={() => setActiveSport(sport.name)}
              >
                {sport.name}
              </button>
            ))}
          </div>
        </div>

        {/* Rules content */}
        <div className="p-6 lg:w-3/4">
          {sports.map((sport) => (
            sport.name === activeSport && (
              <div key={sport.name}>
                <h3 className=" text-2xl mb-4 text-[#00A8FF]">{sport.name} Rules</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {sport.rules.map((rule, index) => (
                    <li key={index} className="text-sm sm:text-base">{rule}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

export default SportRules;
