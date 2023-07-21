import React, { ReactElement } from "react";
import { IconBaseProps, IconType } from "react-icons/lib";
import { DiCss3, DiJavascript1, DiNodejs, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoHtml5, BiLogoTailwindCss } from "react-icons/bi";
import RenderIcon from "./RenderIcon";
import { cinzel } from "@/app/layout";

const Skills = () => {
  const languages_frameworks: string[] = [
    "/github.jpg",
    "/javascipt.jpg",
    "/linux.jpg",
    "/Nextjs.jpg",
    "/nodejs.jpg",
    "/tailwindcss.jpg",
    "/typscript.jpg",
    "/vscode.jpg",
    "/scss.jpg",
    "/reactjs.jpg",
    "/zustand.png",
    "/express.jpg",
    "/css.jpg",
    "/npm.jpg",
    "/html.png",
    "/sanity.png",
    "/solid.jfif",
    "/stripe.png",
    "/svelte.png",
  ];
  const technologies = [];
  return (
    <div className='mt-32 grid grid-cols-1 gap-3 mb-20 text-center'>
      <h2
        className={`text-6xl ${cinzel.className} lg:col-span-2 mb-3 underline text-center`}
      >
        Skills
      </h2>
      <div className='flex items-center gap-5 p-5 justify-center rounded flex-wrap'>
        {/* <p
          className={`w-full text-3xl lg:text-5xl mb-2 stroke_it text-center underline underline-offset-2`}
        >
          Languages & FrameWorks
        </p> */}
        {languages_frameworks.map((icon) => (
          <img className='w-32 mix-blend-multiply' src={icon} alt='' />
        ))}
      </div>
      <div className=''></div>
    </div>
  );
};

export default Skills;
