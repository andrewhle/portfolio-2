import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Bloom Filter",
    description: "Bloom Filter leveraging hash functions to cache data and minimize database queries",
    image: "/images/projects/bloom-filter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/andrewhle/bloom-filter",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Rock-Paper-Scissors-Lizard-Spock",
    description: "Rock-Paper-Scissors-Lizard-Spock Game Simulation",
    image: "/images/projects/Rock_paper_scissors_lizard_spock.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/andrewhle/rock-paper-scissors-lizard-spock",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description is still in construction",
    image: "/images/projects/maintain.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
];

function Projects() {
  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
