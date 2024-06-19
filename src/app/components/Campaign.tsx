"use client";
import localFont from "next/font/local";
import { CAMPAIGNS } from "@/utils/data";
import { CardStack } from "./Campaign/card-stack";

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Campaign = () => {
  return (
    <div className="w-screen sm:h-[80vh] h-[60vh] flex sm:flex-row flex-col sm:justify-between sm:items-center sm:mb-14 sm:pt-0 pt-10 overflow-hidden">
      <div className="flex items-center sm:h-full md:gap-10 sm:gap-5">
        <div className="lg:h-[45vh] sm:h-[31vh] h-20 flex justify-center items-center">
          <img
            src="/CREATIVE TEXTURED GLASS FOR ARCHITECTS _ Float Glass Design for Architects and Textured and Creative Glass Applications 1.png"
            alt="effect"
            className="h-full md:w-14 sm:w-7 w-5"
          />
        </div>
        <div
          className={`sm:h-[45vh] md:w-40 sm:w-32 flex md:justify-center items-center break-words ${panchang.className}`}
        >
          <h1 className=" bg-gradient-to-br from-[#283BF8] to-[#B8BEFF] text-transparent bg-clip-text font-semibold lg:text-7xl md:text-6xl sm:text-xl text-base leading-[1.2] tracking-[0.1em] w-52">
            CAMPAIGNS
          </h1>
        </div>
      </div>
      <div className="sm:h-full md:w-[70%] w-[26rem] flex">
        <div className="bg-white lg:h-40 md:h-20 w-7 rounded lg:mt-20 md:mt-28 md:flex hidden"></div>
        <div className="h-full w-[75%] md:pl-10 pl-36 sm:pr-10 flex relative md:overflow-hidden lg:mt-10 md:mt-24 sm:mt-32 mt-6">
          <CardStack items={CAMPAIGNS} offset={100} scaleFactor={0.1}/>
          {/* <div className="absolute h-24 overflow-hidden :w-full bg-gradient-radial from-[#03062A] to-[#0F165C] rounded-b-[50%] -z-30 bottom-11 right-0"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
