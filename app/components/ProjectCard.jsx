import React from "react";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div>
      <div className="flex flex-col p-5 bg-gray-800 gap-6 rounded-xl h-[95%]">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
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
                <span>Demo</span> {/* This will only show on screens smaller than 'md' */}
              </Link>
            </div>
            <div className="flex items-center justify-between bg-slate-600 h-10 w-30 p-5 rounded-lg hover:bg-slate-500">
              <Link href={`${gitUrl}`} target="_blank">
                <span>Source Code</span> {/* This will only show on screens smaller than 'md' */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
