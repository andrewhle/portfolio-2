import React from "react";
import Image from "next/image";

const frontEndSkills = [
  "React",
  "Tailwind",
  "Bootstrap",
  "CSS",
  "HTML",
  "Next.js",
  "Figma"
];

const backEndSkills = [
  "TypeScript",
  "C/C++",
  "Python",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Docker",
  "WireMock",
  "AWS",
  "Kubernetes",
  "Circle CI",
  "MySQL"
];

function Skill() {
  return (
    <section id="skills" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center md:px-12">
        <div className="self-center text-center py-6 md:pb-20">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-8">
            My Skills
          </h1>
          <p className="md:px-5 text-lg md:text-xl">
            Tech stacks that I have experience with.
          </p>
          <div className="flex justify-center">
          <Image src='/images/Backend.png' width={270} height={270} className="rounded-2xl"/>
          </div>
        </div>
        <div className="md:flex md:flex-col text-center md:text-left xl:gap-6 sm:py-16 sm:mb-5">
          <h2 className="text-white text-2xl md:text-3xl md:text-center font-extrabold py-6">
            Frontend
          </h2>
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
          <h2 className="text-white text-2xl md:text-3xl md:text-center font-extrabold py-6">
            Backend & DevOps
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
      </div>
    </section>
  );
}

export default Skill;
