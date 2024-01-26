import React from "react";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, girUrl, previewUrl }) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            Live Demo
        </div>
      </div>

      <div classsName="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-2">{description}</p>
        <Link href="/">View Source Code</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
