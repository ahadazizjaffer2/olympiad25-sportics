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
              <h2 className="mt-4 text-gray-800 text-lg font-semibold">Professor Kashif Ahmed</h2>
            </div>
            <div className="back-face p-4 bg-gray-100 rounded-lg mt-4">
              <h4 className="font-semibold">About:</h4>
              <p className="text-sm text-gray-700 mt-2">Steering our Sports Society towards athletic excellence is Sir Kashif Ahmed, our Faculty Head. Known for his academic credentials and dedication to student well-being, he brings a wealth of experience to the role.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="teammembers py-10">
        <h1 className="text-center text-3xl mb-10">Team</h1>
        <div className="teamcontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/president.jpg" alt="Goutam Kumar" />
              <h2 className="mt-4 text-gray-800 text-lg font-semibold">Goutam Kumar</h2>
              <h3 className="text-yellow-500">President</h3>
            </div>
            <div className="back-face p-4 bg-gray-100 rounded-lg mt-4">
              <h4 className="font-semibold">About:</h4>
              <p className="text-sm text-gray-700 mt-2">Leading the charge with a clear vision for the future is our President, Goutam Kumar. Known for his collaborative and inspiring approach, Goutam brings strategic leadership to the table.</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/vp umair.jpg" alt="Mirza Umair" />
              <h2 className="mt-4 text-gray-800 text-lg font-semibold">Mirza Umair</h2>
              <h3 className="text-yellow-500">Vice President</h3>
            </div>
            <div className="back-face p-4 bg-gray-100 rounded-lg mt-4">
              <h4 className="font-semibold">About:</h4>
              <p className="text-sm text-gray-700 mt-2">Supporting our President is Mirza Umair, our Vice President. Decisive and results-oriented, Mirza excels in Event Management and is known for executing plans effectively.</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/vp samir.jpg" alt="Samir Ali Zaidi" />
              <h2 className="mt-4 text-gray-800 text-lg font-semibold">Samir Ali Zaidi</h2>
              <h3 className="text-yellow-500">Vice President</h3>
            </div>
            <div className="back-face p-4 bg-gray-100 rounded-lg mt-4">
              <h4 className="font-semibold">About:</h4>
              <p className="text-sm text-gray-700 mt-2">Adding a touch of creative flair is Samir Zaidi, our Vice President. He brings a passion for team management and a positive, engaging energy to our group.</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card max-w-xs w-full hover:scale-105 transition-transform shadow-lg rounded-xl p-4">
            <div className="front-face text-center">
              <img className="w-48 h-48 rounded-full mx-auto border-4 border-gray-900" src="team/Treasurer.jpg" alt="Huzaifa Quaid Johar" />
              <h2 className="mt-4 text-gray-800 text-lg font-semibold">Huzaifa Quaid Johar</h2>
              <h3 className="text-yellow-500">Treasurer</h3>
            </div>
            <div className="back-face p-4 bg-gray-100 rounded-lg mt-4">
              <h4 className="font-semibold">About:</h4>
              <p className="text-sm text-gray-700 mt-2">Huzaifa Quaid Johar, our Treasurer, is financially savvy and detail-oriented. He ensures our organization's financial health with precision and responsibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="developerteam py-10">
        <h1 className="text-center text-3xl mb-10">Meet our Developers</h1>
        <div className="devcontainer flex justify-center gap-8 flex-wrap">
          <div className="devcard w-48 h-48 p-4 bg-gray-100 rounded-full shadow-lg transition-transform hover:scale-105">
            <img className="w-full h-full rounded-full border-4 border-gray-900 object-cover" src="team/dinesh.jpg" alt="Dinesh Dhanji" />
            <div className="caption text-center mt-2">
              <h3 className="text-gray-800">Dinesh Dhanji</h3>
              <div className="social-links flex justify-center gap-4 mt-2">
                <a href="https://www.linkedin.com/in/dinesh-dhanjee-ab6062243/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin text-gray-800 text-xl"></i>
                </a>
                <a href="https://github.com/DineshDhanji" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-github text-gray-800 text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Repeat for other developers (Ahad Aziz and Abdul Haseeb) */}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;


