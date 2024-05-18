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
          <div className="w-full">
            <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-orange-400 ">
                Hello, I'm{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={["Hung", 1000, "a Software Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className="text-slate-300 text-base sm:text-lg mb-6 lg:text-2xl">
            Welcome to my portfolio. I share thoughts about tech and show case my projects
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://drive.google.com/file/d/1r9VnM2lK2y0FY3Ht26Fk6es5XiZV7deq/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-400 to-yellow-900 hover:bg-cyan-900 text-white mt-3"
            >
              <span className="block bg-black hover:bg-gray-900 rounded-full px-6 py-3">
                View resume
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
              href="https://github.com/andrewhle"
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
              src="/images/anime-pic.png"
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
