import React from 'react';
import AccordianItem from '../components/contributions/FAQ-Section/AccordianItem';

const FAQPage = () => {
  const faqData = [
    { question: "What is competitive programming?", answer: "Competitive programming is a mind sport where participants solve algorithmic problems by writing programs. The goal is to write the most efficient and correct solution within a given time limit." },

    { question: "How does the contest work?", answer: "The contest will be held on a virtual judge platform, where you'll be presented with a set of problems. You'll have to write code to solve these problems and submit your solutions. The platform will automatically judge your code and provide feedback on whether it's correct and efficient." },
    
    { question: "What languages can I use for coding?", answer: "Typically, popular languages like C++, Java, Python, and C are supported." },

    { question: "How is my performance evaluated?", answer: "Your performance is evaluated based on the number of problems you solve correctly and the time it takes you to solve them."},
    
    { question: "What should I expect from the problems?", answer: "The problems will range in difficulty, from easy to hard. Some may require basic algorithms and data structures, while others might involve more complex concepts" },

    { question: "What is the contest platform?", answer: "Virtual Judge (vjudge.com)" },

    { question: "Can I use external resources (e.g., Google Search) during the contest?", answer: "This is strictly not allowed." },

    { question: "What happens if I encounter a bug in the problem statement or the platform?", answer: "If you find an issue, report it to the contest organizers immediately." },

    { question: "How can I practice for competitive programming?", answer: "There are many online platforms like Codeforces and AtCoder where you can practice solving coding problems." },

    { question: "Who can be my teammates?", answer: "Any 2 from your batch can be your teammmates, however for 20K batch it is allowed that they team-up with 21K batch." },

    { question: "What is the max team size?", answer: "Minimum: 2, Maximum: 3" },


    
    
  ];

  return (
    <div className=" bg-gray-900 text-white pt-24 pb-16"> {/* Adjusts for the navbar height */}
      <div className="text-center m-10">
        <h2 className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent text-center text-4xl md:text-5xl  font-bold uppercase tracking-wider mb-8">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col items-center">
        {faqData.map((faq, index) => (
          <AccordianItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;