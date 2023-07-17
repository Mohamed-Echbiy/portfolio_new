import React from "react";
import { client } from "../../../sanity/lib/client";
import { projectType } from "@/types/projectType";
import Project from "./Project";
import { cinzel } from "@/app/layout";
const ProjectsContainer = async () => {
  const projects: projectType[] = await client.fetch('*[_type == "project"]', {
    next: {
      revalidate: 1200,
    },
  });
  console.log(projects);
  return (
    <div
      id='projects'
      className='grid gap-3 mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center'
    >
      <h2
        className={`${cinzel.className} xl:col-span-3 lg:col-span-2 uppercase underline underline-offset-4 mb-12 text-center text-5xl`}
      >
        Projects
      </h2>
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
