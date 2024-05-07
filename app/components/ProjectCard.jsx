import React from "react";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, girUrl, previewUrl }) {
  return (
    <div>
      <div className="flex flex-col p-5 bg-slate-800 gap-6 rounded-xl">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-30 transition-all duration-500">
          </div>
        </div>

        <div classsName="text-white rounded-b-xl mt-3 bg-gray-400 py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE] mb-2">{description}</p>
          <div className="flex gap-5 py-3 items-center justify-between">
            <div className="flex items-center justify-between bg-slate-600 h-10 w-30 p-5 rounded-lg hover:bg-slate-500">
              <Link href="/">
                <span className="md:hidden">Demo</span> {/* This will only show on screens smaller than 'md' */}
                <span className="hidden md:inline">View Demo</span> {/* This will show on 'md' screens and larger */}
              </Link>
            </div>
            <div className="flex items-center justify-between bg-slate-600 h-10 w-30 p-5 rounded-lg hover:bg-slate-500">
              <Link href="/">
                <span className="md:hidden">Source Code</span> {/* This will only show on screens smaller than 'md' */}
                <span className="hidden md:inline">View Source Code</span> {/* This will show on 'md' screens and larger */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
