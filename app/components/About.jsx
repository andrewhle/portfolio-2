import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-3 gap-8 text-center md:text-left py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold">
          About Me
        </h1>
        <div className="w-20 mx-auto">
          <div className="border-b-2 border-gray-300 my-2"></div>
        </div>
        <div>
          <p className="text-base md:text-lg">
            I am a Computer Science senior at Oregon State Univeristy,
            boasting a 1-year internship experience as a Software Engineer. 
            I have a strong passion for building websites, web services, cloud infrastructure, and applications.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;
