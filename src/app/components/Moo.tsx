"use client";
import Image from "next/image";
import React from "react";
import cow from "./../../../public/moo.png";
import glass from "./../../../public/glass.png";
import cowGlass from "./../../../public/mooglass.png";
import { motion } from "framer-motion";
const Moo = () => {
  const transition = { duration: 1, delay:1.4, ease: "easeInOut" }

  return (
    <div className="md:h-screen h-[60vh] w-full flex justify-end items-center md:items-start relative py-10 overflow-visible">
      <motion.div className="relative"
      initial={{y:0,x:50,opacity:0}}
      whileInView={{y:0,x:0,opacity:1}}
      transition={{duration:1,delay:1,ease:'easeInOut'}}
      >
        <Image
          src={cow}
          alt="moo"
          className="lg:h-4/5 md:w-96 md:h-3/5 md:mt-10 w-48 h-2/5 "
        />
        <svg
          className="absolute md:size-56 sm:size-36 size-28 md:-left-16 sm:-left-12 -left-8 sm:-bottom-8 -bottom-4"
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
        <div className="absolute w-28 md:h-4 sm:h-3 h-2 left-0 md:top-0 -top-6 bg-white"></div>
      </motion.div>
      <motion.div className="relative lg:h-full lg:w-3/5 md:h-5/6 h-4/6 w-1/2 flex justify-center items-center"
      initial={{y:0,x:50,opacity:0}}
      whileInView={{y:0,x:0,opacity:1}}
      transition={{duration:1,delay:0.2,ease:'easeInOut'}}
      >
        <Image
          src={glass}
          alt="Glass"
          className="absolute w-full h-full object-cover z-10"
        />
        <Image
          src={cowGlass}
          alt="Mooglass"
          className="absolute w-10/12 h-full  z-0 object-center"
        />
        <div className="z-20 flex h-full w-10/12 items-center justify-around flex-col text-white">
          <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-light md:leading-tight">
            from our <span className="line-clamp-1 font-semibold">Farms,</span>{" "}
            to your <span className="line-clamp-1 font-semibold">Table.</span>
          </h1>
          <div className="w-full font-extralight flex items-center justify-end cursor-pointer">
            <p className="md:text-end text-sm md:text-base">Visit our Daries</p>
            <p className="font-bold md:text-5xl text-3xl -rotate-90 text-[#23B6FF] -ml-4">
              V
            </p>
          </div>
        </div>
        <GradientVer />
      </motion.div>
      <motion.div className="absolute z-10 text-white lg:bottom-0 lg:left-16 md:bottom-30 md:left-32  md:w-1/3 bottom-0 md:p-0 px-4 w-full md:text-right md:text-2xl text-xs text-center"
      initial={{y:0,x:-50,opacity:0}}
      whileInView={{y:0,x:0,opacity:1}}
      transition={{duration:1,delay:0.2,ease:'easeInOut'}}
      >
          <p>Our farm-fresh products, straight from happy cows, bring nature’s bounty to your table.</p>
        </motion.div>
      <Gradient />
    </div>
  );
};

export default Moo;

function GradientVer() {
  return (
    <svg
      className="absolute size-[100%] bg-transparent -z-30 top-1/2"
      viewBox="0 0 1211 1591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_323_150)">
        <circle cx="795.5" cy="795.5" r="275.5" fill="#283BF8" />
      </g>
      <defs>
        <filter
          id="filter0_f_323_150"
          x="0.191711"
          y="0.191711"
          width="1590.62"
          height="1590.62"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="259.904"
            result="effect1_foregroundBlur_323_150"
          />
        </filter>
      </defs>
    </svg>
  );
}

function Gradient() {
  return (
    <svg
      width="710"
      height="1517"
      viewBox="0 0 710 1517"
      fill="none"
      className="absolute -z-10 left-0 -top-1/2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_486_197)">
        <circle cx="-48.5" cy="758.5" r="328.5" fill="#283BF8" />
      </g>
      <defs>
        <filter
          id="filter0_f_486_197"
          x="-806.038"
          y="0.96225"
          width="1515.08"
          height="1515.08"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="214.519"
            result="effect1_foregroundBlur_486_197"
          />
        </filter>
      </defs>
    </svg>
  );
}
