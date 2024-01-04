"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TypeAnimation}  from 'react-type-animation'

function Header() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left"> 
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-orange-400 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation sequence={
              [
                "Andrew",
                1000,
                "a Web Developer </>",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-6 lg:text-xl">
            I'm a software engineer based in Portland, Oregon. I specialize in
            building websites, applications, and everything in between.
          </p>
          <div>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-yellow-900 hover:bg-cyan-900 text-white mt-3"
            >
              <span className="block bg-black hover:bg-orange-950 rounded-full px-6 py-3">
                Download Resume
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4">
          <div className="relative rounded-full bg-orange-500 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/images/anime-pic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
