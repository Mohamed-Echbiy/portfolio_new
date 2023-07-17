import { cinzel } from "@/app/layout";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className='h-[70px] w-full  flex items-center justify-center'>
      {/* <div className='w-[40px] aspect-square bg-primary'></div>
      <div className='w-[40px] aspect-square bg-secondary'></div>
      <div className='w-[40px] aspect-square bg-accent'></div>
      <div className='w-[40px] aspect-square bg-neutral'></div>
      <div className='w-[40px] aspect-square bg-base-100'></div> */}
      <Link
        href={"/"}
        className={`${cinzel.className} text-accent underline underline-offset-4 text-lg`}
      >
        Mohamed Echbiy
      </Link>
    </nav>
  );
};

export default Navbar;
