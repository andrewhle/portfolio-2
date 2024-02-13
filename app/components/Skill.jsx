import React from "react";
import Image from "next/image";

const frontEndSkills = [
  "React",
  "Tailwind",
  "Bootstrap",
  "CSS",
  "HTML",
  "Next.js",
];

const backEndSkills = [
  "TypeScript",
  "C/C++",
  "Python",
  "Node.js",
  "Express",
  "MongoDB",
  "Docker",
  "WireMock",
  "AWS"
];

function Skill() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 sm:py-16 md:py-4 xl:gap-16 xl:px-16">
        <h1 className="text-white text-center md:text-left text-3xl md:text-4xl font-extrabold mb-8">
          My Skills
        </h1>
        <div className="flex justify-center">
          <Image src='/images/Backend.png' width={300} height={300}/>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 text-center md:text-left xl:gap-16 sm:py-16 mb-5">
        <div>
          <h2 className="text-white text-2xl md:text-3xl md:ml-20 font-extrabold mb-3">
            Frontend
          </h2>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-md md:text-lg">
          {frontEndSkills.map((skill, index) => (
            <li
              className="bg-orange-600 border border-black rounded-xl px-4 py-2 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 text-center md:text-left xl:gap-16 sm:py-16">
        <h2 className="text-white text-2xl md:text-3xl md:ml-20 font-extrabold mb-3">
          Backend
        </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-md md:text-lg">
          {backEndSkills.map((skill, index) => (
            <li
              className="bg-orange-600 border border-black rounded-xl px-4 py-2 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skill;
