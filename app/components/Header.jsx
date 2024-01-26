"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

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
            <TypeAnimation
              sequence={["Andrew", 1000, "a Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-6 lg:text-xl">
            I'm a software engineer student based in Portland, Oregon. I specialize in building full-stack web app, cloud service, and everything in between.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-yellow-900 hover:bg-cyan-900 text-white mt-3"
            >
              <span className="block bg-black hover:bg-gray-900 rounded-full px-6 py-3">
                Download CV
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/hungl3/"
              rel="noopener noreferrer"
              target="_blank"
              className="block bg-gray-600 text-white hover:bg-gray-700 rounded-full mt-3"
            >
              <span className="block rounded-full px-4 py-3">
                <BsLinkedin className="w-6 h-6" />
              </span>
            </Link>

            <Link
              href="https://www.github.com"
              rel="noopener noreferrer"
              target="_blank"
              className="block bg-gray-600 text-white hover:bg-gray-700 rounded-full mt-3"
            >
              <span className="block rounded-full px-4 py-3">
                <FaGithubSquare className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10">
          <div className="relative rounded-full bg-orange-500 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden border-4">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
