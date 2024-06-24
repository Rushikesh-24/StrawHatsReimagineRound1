import React from "react";
import { TextGenerateEffect } from "./TextGenerate";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white relative">
      <div className="font-extrabold grid grid-cols-2 grid-rows-2 leading-none">
        <div className="md:text-[15rem] text-9xl text-right">A</div>
        <div className="md:text-[15rem] text-9xl relative text-center">
          <Gradient text={"-right-28 -top-20"} />
          U
        </div>
        <div className="md:text-[15rem] text-9xl relative">
          <Gradient text={"-top-20 -right-28"} />
          M</div>
        <div className="md:text-[15rem] text-9xl text-center">L</div>
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
