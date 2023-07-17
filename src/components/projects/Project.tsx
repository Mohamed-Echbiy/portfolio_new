import { projectType } from "@/types/projectType";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import { cinzel } from "@/app/layout";
import Link from "next/link";
import { BsCodeSquare } from "react-icons/bs";
import { SiLivewire } from "react-icons/si";
const Project = ({ project }: { project: projectType }) => {
  return (
    <section>
      <div className=' group relative aspect-video shadow-md'>
        <Image
          src={`${urlForImage(project.image)}`}
          alt={project.image.alt}
          fill
        />
        <Link
          href={project.url}
          className='group-hover:opacity-100 hidden lg:flex opacity-0 items-center justify-center gap-2 flex-col overlay absolute top-0 left-0 w-full h-full z-20 bg-gray-900/90 duration-300 ease-linear transition-all cursor-pointer'
          target='_blank'
        >
          <h3 className={`${cinzel.className} text-xl uppercase`}>
            {project.name}
          </h3>
          <div className='flex items-center gap-2 justify-center'>
            <Link href={project.url} target='_blank'>
              <button className='btn flex items-center gap-2 btn-outline btn-accent text-xs btn-sm rounded-none'>
                <span>live</span> <SiLivewire size={12} />
              </button>
            </Link>

            <Link href={project.github_url} target='_blank'>
              <button className='btn btn-outline btn-accent flex items-center gap-2 text-xs btn-sm rounded-none'>
                <span>source code</span>
                <BsCodeSquare size={12} />
              </button>
            </Link>
          </div>
        </Link>
      </div>

      <div className='flex items-center gap-2 lg:hidden flex-wrap justify-center my-6'>
        <h4 className={`${cinzel.className} text-center mb-3 flex-grow w-full`}>
          {project.name}
        </h4>
        <Link
          className='max-w-fit flex-grow'
          href={project.url}
          target='_blank'
        >
          <button className='btn flex items-center gap-2 btn-outline btn-accent text-xs btn-sm rounded-none'>
            <span>live</span> <SiLivewire size={12} />
          </button>
        </Link>

        <Link
          href={project.github_url}
          target='_blank'
          className='max-w-fit flex-grow'
        >
          <button className='btn btn-outline btn-accent flex items-center gap-2 text-xs btn-sm rounded-none'>
            <span>source code</span>
            <BsCodeSquare size={12} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Project;
