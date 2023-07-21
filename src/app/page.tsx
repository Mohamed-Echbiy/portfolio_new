import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import ProjectsContainer from "@/components/projects/ProjectsContainer";
import { ProjectsClient } from "next-sanity";
import React from "react";

const page = async () => {
  return (
    <>
      <Hero />
      <ProjectsContainer />
      <Skills />
    </>
  );
};

export default page;
