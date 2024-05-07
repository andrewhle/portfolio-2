import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="text-white">
      <div className="mt-8 md:mt-5 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src='/images/work-station.jpg' width={500} height={500} className="rounded-3xl"/>
        <div className="mt-4 text-left flex flex-col">
          <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-base lg:text-lg">
          I’m currently wrapping up my senior year at Oregon State University, where I’ve been diving deep into the worlds of software development.
          I'm all about building tech solutions that not only work reliablely, but also make sense from a product perspective.
          <br />
          <br />
          At the moment, I'm heavily involved in learning and building cloud computing systems that help companies scale their resources based on demand. 
          During my recent internship, I had the chance to help internal development teams envision their services and infrastructure through monitoring tools and a developer portal.
          <br />
          <br />
          During my free time, I enjoy reading about productivity improvement and travel
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
