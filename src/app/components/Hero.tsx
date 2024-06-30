import React from "react";
import { TextGenerateEffect } from "./TextGenerate";
import Image from "next/image";
import Lassi from "@/assets/lassi.png";
import Butter from "@/assets/butter.png";
import Milk from "@/assets/milk.png";
import IceCream from "@/assets/icecream.png";
import glassOfMilk from "@/assets/glassOfMilk.png";
import milkSplash from "@/assets/milkSplash.png";
import group from "@/assets/group.png";
import { ModelViewer } from "./Model";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white relative">
      <ModelViewer />
      <div className="hidden md:flex bg-[#212FBF] h-[15vw] w-[15vw] max-w-[700px] max-h-[700px] absolute rounded-full left-10 bottom-[25%] items-end justify-end">
        <Image
          src={Milk.src}
          height={Milk.height - 10}
          width={Milk.width - 10}
          alt="Milk"
        />
      </div>
      <div className="hidden md:flex bg-[#212FBF] h-[12vw] w-[12vw] max-w-[400px] max-h-[400px] absolute rounded-full left-[16%] top-[12%] items-end justify-center">
        <Image
          src={IceCream.src}
          height={IceCream.height - 60}
          width={IceCream.width - 60}
          className="absolute top-16"
          alt="Ice Cream"
        />
      </div>
      <div className="hidden md:flex bg-[#212FBF] h-[14vw] w-[14vw] max-w-[600px] max-h-[600px] absolute rounded-full right-[10%] top-[12%] items-center justify-end">
        <Image
          src={Butter.src}
          height={Butter.height - 60}
          width={Butter.width - 60}
          className="absolute left-10"
          alt="Butter"
        />
      </div>
      <div className="hidden md:flex bg-[#212FBF] h-[8vw] w-[8vw] max-w-[300px] max-h-[300px] absolute rounded-full right-[22%] bottom-[36%] items-start justify-center">
        <Image
          src={Lassi.src}
          height={Lassi.height}
          width={Lassi.width}
          className="absolute bottom-8"
          alt="Lassi"
        />
      </div>
      <div className="font-extrabold md:grid hidden grid-cols-2 grid-rows-2 leading-none ">
        <div className="md:text-[18rem] text-9xl text-right">A</div>
        <div className="md:text-[18rem] text-9xl relative text-center">
          <Gradient text={"-right-28 -top-20"} />U
        </div>
        <div className="md:text-[18rem] text-9xl relative">
          <Gradient text={"-top-20 -right-28"} />M
        </div>
        <div className="md:text-[18rem] text-9xl text-center">L</div>
      </div>
      <div className="md:hidden min-h-[40rem] w-full font-extrabold leading-none flex flex-col justify-end items-end relative">
        <Gradient text={"-right-28 -top-20"} />
        <div className="size-full relative z-20">
        <div className="text-[250px] absolute top-0 right-36">A</div>
        <div className="text-[195px] absolute top-40 right-8">M</div>
        <div className="text-[225px] absolute bottom-[20%] right-[8.4rem] z-20">U</div>
        <div className="text-[215px] absolute bottom-[5%] right-0">L</div>
        </div>
        <Gradient text={"top-4 -right-96"} />
      <Image src={group} alt="Products" className="z-20 w-64 -bottom-10 left-24 absolute"/>
      <Image src={glassOfMilk} alt="milkGlass" className="absolute w-52 z-20 top-0"/>
      <Image src={milkSplash} alt="milksplash" className="absolute z-10 w-96 -bottom-10 right-0"/>
      </div>
      <div className="text-center h-1/4 w-4/5 md:mt-20 mt-10 text-white text-lg">
        <TextGenerateEffect
          words={
            "Savor the creaminess, taste the joy, and embrace the goodness of dairy."
          }
        />
      </div>
    </div>
  );
};

export default Hero;

interface GradientProps {
  text: string;
}

const Gradient: React.FC<GradientProps> = ({ text }) => {
  return (
    <svg
      className={`absolute -z-10  blur-3xl  ${text}`}
      width="981"
      height="750"
      viewBox="0 0 981 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_318_90)">
        <circle cx="490.5" cy="259.5" r="212.5" fill="#283BF8" />
      </g>
      <defs>
        <filter
          id="filter0_f_318_90"
          x="0.464142"
          y="-230.536"
          width="980.072"
          height="980.072"
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
            stdDeviation="138.768"
            result="effect1_foregroundBlur_318_90"
          />
        </filter>
      </defs>
    </svg>
  );
};
