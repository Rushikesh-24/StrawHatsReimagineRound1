'use client'
import localFont from "next/font/local";
import { CAMPAIGNS } from "@/utils/data";
import { motion } from "framer-motion";

const panchang = localFont({
  src: "../../../public/Panchang-Variable.ttf",
  display: "swap",
});

const Campaign = () => {
  return (
    <div className="w-screen h-[70vh] flex justify-between items-center mb-14">
      <div className="flex items-center h-full gap-10">
        <div className="h-[45vh] flex justify-center items-center">
          <img
            src="/CREATIVE TEXTURED GLASS FOR ARCHITECTS _ Float Glass Design for Architects and Textured and Creative Glass Applications 1.png"
            alt="effect"
            className="h-full w-14"
          />
        </div>
        <div
          className={`h-[45vh] w-40 flex justify-center items-center break-words ${panchang.className}`}
        >
          <h1 className=" bg-gradient-to-br from-[#283BF8] to-[#B8BEFF] text-transparent bg-clip-text font-semibold text-7xl leading-[1.2] tracking-[0.1em] w-52">
            CAMPAIGNS
          </h1>
        </div>
      </div>
      <div className="h-full w-[70%] flex">
        <div className="bg-white h-40 w-7 rounded mt-20"></div>
        <div className="h-full w-[75%] px-10 flex items-center relative overflow-hidden">
          <motion.div 
            className="h-[60vh] w-80 bg-white rounded-3xl flex justify-center items-center overflow-hidden"
            whileInView={{ x: [-300, 0], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={CAMPAIGNS[0].lineImg} alt="camImg" className="size-auto"/>
            {/* <img src={CAMPAIGNS[0].selectImg} alt="camImg" className="size-auto hidden hover:flex"/> */}
          </motion.div>
          <motion.div 
            className="h-[55vh] w-80 bg-white rounded-3xl absolute flex justify-center items-center overflow-hidden right-[10rem] bottom-8 -z-10 opacity-30"
            whileInView={{ x: [-500, 0], opacity: [0, 0.3] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img src={CAMPAIGNS[1].lineImg} alt="camImg" className="size-full"/>
          </motion.div>
          <motion.div 
            className="h-[50vh] w-80 bg-red-200 rounded-3xl absolute flex justify-center items-center overflow-hidden bottom-8 -right-[2rem] -z-20 opacity-5"
            whileInView={{ x: [-700, -90], opacity: [0, 0.05] }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            {/* <img src={CAMPAIGNS[2].lineImg} alt="camImg" className="size-full"/> */}
          </motion.div>
          <div className="absolute h-24 overflow-hidden w-full bg-gradient-radial from-[#03062A] to-[#0F165C] rounded-b-[50%] -z-30 -bottom-0 right-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
