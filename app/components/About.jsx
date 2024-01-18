import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="text-white">
      <div className="md:grid md: grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src='/images/work-station.jpg' width={500} height={500}/>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
          I am a motivated individual dedicated to the technology products I create. 
          Alongside my proficiency in engineering technological solutions, 
          I approach challenges with a product-oriented mindset. In my present role, 
          I contribute significantly by facilitating teams to visioning their 
          software infrastructure and micro-services via a centralized software catalog. 
          Furthermore, I support my teams in assessing our service's performance through the 
          "white box" testing methodology. I believe the highest potential for technology is 
          allow people to seek for fulfillment through its application.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;
