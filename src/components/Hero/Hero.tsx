import { cinzel } from "@/app/layout";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";
const Hero = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div
        className=' h-full  flex items-center justify-center gap-6'
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        <div className='max-w-md flex flex-col gap-y-10 text-center'>
          <h1 className={`${cinzel.className} text-5xl`}>Hi, I'm Mohamed </h1>
          <p className=' capitalize'>
            <span>web developer and freelancer</span>
            <span className='flex items-center gap-2'>
              <Link
                href='https://www.linkedin.com/in/mohamed-echbiy-442aa9244/'
                target='_blank'
              >
                <BsLinkedin />
              </Link>
              <Link href='https://github.com/Mohamed-Echbiy' target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href='https://www.codewars.com/users/Mohamed-Echbiy'
                target='_blank'
              >
                <SiCodewars />
              </Link>
            </span>
          </p>
          <div className=' flex gap-3 items-center justify-center'>
            <Link href='#projects'>
              <button className='btn btn-primary'>Projects</button>
            </Link>
            <button className='btn btn-secondary btn-outline'>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
