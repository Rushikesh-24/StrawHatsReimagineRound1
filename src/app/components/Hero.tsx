import React from "react";
import { TextGenerateEffect } from "./TextGenerate";
import Image from "next/image";
import AmulGirl from "@/assets/amulgirl.png"
import Lassi from "@/assets/lassi.png"
import Cheese from "@/assets/cheese.png"
import Paneer from "@/assets/Paneer.png"
import Butter from "@/assets/butter.png"
import Dahi from "@/assets/dahi.png"
import Milk from "@/assets/milk.png"
import IceCream from "@/assets/icecream.png"

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white relative">
      <div className="bg-[#212FBF] h-[15vw] w-[15vw] max-w-[700px] max-h-[700px] absolute rounded-full left-10 bottom-[25%] flex items-end justify-end">
        <Image 
          src={Milk.src}
          height={Milk.height-10}
          width={Milk.width-10}
          alt="Milk"
        />
      </div>
      <div className="bg-[#212FBF] h-[12vw] w-[12vw] max-w-[400px] max-h-[400px] absolute rounded-full left-[16%] top-[12%] flex items-end justify-center">
        <Image 
          src={IceCream.src}
          height={IceCream.height-60}
          width={IceCream.width-60}
          className="absolute top-16"
          alt="Ice Cream"
        />
      </div>
      <div className="bg-[#212FBF] h-[14vw] w-[14vw] max-w-[600px] max-h-[600px] absolute rounded-full right-[10%] top-[12%] flex items-center justify-end">
        <Image 
          src={Butter.src}
          height={Butter.height-60}
          width={Butter.width-60}
          className="absolute left-10"
          alt="Butter"
        />
      </div>
      <div className="bg-[#212FBF] h-[8vw] w-[8vw] max-w-[300px] max-h-[300px] absolute rounded-full right-[22%] bottom-[36%] flex items-start justify-center">
        <Image 
          src={Lassi.src}
          height={Lassi.height}
          width={Lassi.width}
          className="absolute bottom-8"
          alt="Lassi"
        />
      </div>
      <div className="font-extrabold grid grid-cols-2 grid-rows-2 leading-none">
        <div className="md:text-[18rem] text-9xl text-right">A</div>
        <div className="md:text-[18rem] text-9xl relative text-center">
          <Gradient text={"-right-28 -top-20"} />
          U
        </div>
        <div className="md:text-[18rem] text-9xl relative">
          <Gradient text={"-top-20 -right-28"} />
          M</div>
        <div className="md:text-[18rem] text-9xl text-center">L</div>
      </div>
      <div className="text-center w-3/5 md:mt-0 mt-10">
        <TextGenerateEffect
          words={
            "Savor the creaminess, taste the joy, and embrace the goodness of dairy. Our farm-fresh products, straight from happy cows, bring nature’s bounty to your table. Raise a glass to dairy delights!"
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
