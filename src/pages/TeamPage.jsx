import React from 'react';

const TeamPage = () => {
  return (
    <div>
      
      <section className="faculty py-10 mt-20">
        <h1 className="text-center text-3xl mb-10">Faculty Head</h1>
        <div className="flex justify-center items-center">
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/Kashif.jpg" alt="Kashif Ahmed" />
              <h2 className="mt-4 text-gray-600 text-lg font-semibold">Professor Kashif Ahmed</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="teammembers py-10">
        <h1 className="text-center text-3xl mb-10">Team</h1>
        <div className="teamcontainer flex flex-wrap justify-center gap-8">
          {/* Team Member 1 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/president.jpg" alt="Goutam Kumar" />
              <h2 className="mt-4 text-gray-600 text-lg font-semibold">Goutam Kumar</h2>
              <h3 className="text-[#00A8FF]">President</h3>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/vp umair.jpg" alt="Mirza Umair" />
              <h2 className="mt-4 text-gray-600 text-lg font-semibold">Mirza Umair</h2>
              <h3 className="text-[#00A8FF]">Vice President</h3>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/vp samir.jpg" alt="Samir Ali Zaidi" />
              <h2 className="mt-4 text-gray-600 text-lg font-semibold">Samir Ali Zaidi</h2>
              <h3 className="text-[#00A8FF]">Vice President</h3>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/Treasurer.jpg" alt="Huzaifa Quaid Johar" />
              <h2 className="mt-4 text-gray-600 text-lg font-semibold">Huzaifa Quaid Johar</h2>
              <h3 className="text-[#00A8FF]">Treasurer</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="developerteam py-10">
        <h1 className="text-center text-3xl mb-10">Meet our Developers</h1>
        <div className="devcontainer flex justify-center gap-8 flex-wrap">
          <div className="devcard w-48 h-48 p-4 bg-gray-100 rounded-full shadow-lg transition-transform hover:scale-105">
            <img className="w-full h-full rounded-full border-4 border-gray-900 object-cover" src="team/dinesh.jpg" alt="Dinesh Dhanji" />
            <div className="caption text-center mt-2">
              <h3 className="text-gray-600">Dinesh Dhanji</h3>
              <div className="social-links flex justify-center gap-4 mt-2">
                <a href="https://www.linkedin.com/in/dinesh-dhanjee-ab6062243/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin text-gray-600 text-xl"></i>
                </a>
                <a href="https://github.com/DineshDhanji" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-github text-gray-600 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TeamPage;


