import React from "react";
import Image from "next/image";

const skillsData = [
  "React",
  "Tailwind",
  "JavaScript",
  "C/C++",
  "Python",
  "Node.js",
  "Next.js",
  "Express",
  "MongoDB",
  "Docker",
];

function Skill() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-3 gap-8 text-center md:text-left xl:gap-16 sm:py-16">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold">
          My Skills
        </h1>
        <div className="w-20 mx-auto">
          <div className="border-b-2 border-gray-300 my-2"></div>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 text-md md:text-lg">
          {skillsData.map((skill, index) => (
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
