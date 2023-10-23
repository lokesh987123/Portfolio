import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className="align-element pt-20 pb-28">
        <SectionTitle title="My Portfolio" />

        {/* PROJECTS CONTAINER */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
