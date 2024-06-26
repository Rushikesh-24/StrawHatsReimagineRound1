"use client";
import Image from "next/image";
import React from "react";
import milkman from "./../../../public/milkMan.png";
import glass from "./../../../public/glass.png";
import milkManGlass from "./../../../public/milkManGlass.png";
import { motion } from "framer-motion";
import Gradient from "./Gradient";

const transition = { duration: 1, delay:0.5, ease: "easeInOut" }

const MilkMan = () => {

  return (
    <div className="lg:h-screen md:h-screen h-[60vh] flex justify-start items-center md:items-start relative my-10">
      <div className="relative lg:h-full md:h-5/6 h-4/6 w-1/2 flex justify-center items-center">
        <Image
          src={glass}
          alt="Glass"
          className="absolute w-full h-full object-cover z-10"
        />
        <Image
          src={milkManGlass}
          alt="Mooglass"
          className="absolute w-10/12 h-full  z-0 object-center"
        />
        <div className="z-20 flex h-full w-10/12 items-center justify-around flex-col text-white">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-light md:leading-tight">
            BE PART OF THE
            <span className="line-clamp-2 font-semibold">AMUL FAMILY</span>
          </h1>
        </div>
      </div>
      <div className="relative">
        <Image
          src={milkman}
          alt="moo"
          className="md:w-96 md:h-3/5 lg:h-4/5 w-48 h-2/5 md:mt-10"
        />
        <svg
          className="absolute md:size-56 sm:size-36 size-28 md:top-0 -top-5 md:-right-20 sm:-right-10 -right-8 -rotate-180"
          viewBox="0 0 250 331"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M11 0V200.5C11 266.774 64.7258 320.5 131 320.5H249.5"
            stroke="white"
            strokeWidth="21"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={transition}
          />
        </svg>
        <div className="absolute w-28 md:h-4 sm:h-3 h-2 left-2 md:-bottom-10 -bottom-5  bg-white"></div>
      </div>
      <div className="bg-[#212FBF] size-fit md:px-10 sm:px-6 px-4 text-white md:py-2 py-1.5 items-center justify-center absolute md:right-20 sm:right-10 right-5 sm:bottom-14 bottom-4 flex gap-2 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl">
        <div className="md:text-base sm:text-sm text-xs">
          <p>GO</p>
          <p>TO</p>
        </div>
        <p className="md:text-3xl sm:text-xl text-lg">CAREERS</p>
        <Gradient />
      </div>
    </div>
  );
};

export default MilkMan;
