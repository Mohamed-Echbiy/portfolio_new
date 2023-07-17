import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsContainer from "@/components/projects/ProjectsContainer";
import { ProjectsClient } from "next-sanity";
import React from "react";

const page = async () => {
  return (
    <>
      <Hero />
      <ProjectsContainer />
    </>
  );
};

export default page;
