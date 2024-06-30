'use client'
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/amul.png";
import Image from "next/image";
import { Permanent_Marker } from "next/font/google";
import Gradient from "./Gradient";

const font = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="h-16 z-[100] sticky top-0 flex justify-between items-center md:m-5 m-2">
      <Link href={'/'}>
      <Image
        src={Logo.src}
        height={Logo.height - 20}
        width={Logo.width - 20}
        alt=""
        className="px-10 z-[100]"
      />
      </Link>
      <div className="relative">
        <motion.button
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.6 }}
          onClick={handleClick}
          className="relative flex-col justify-center items-center mr-3 z-50"
        >
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-6 ${
                        isOpen
                          ? "rotate-45 md:translate-y-2.5 translate-y-1 bg-gray-200"
                          : "-translate-y-0.5"
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm md:my-2 my-0.5 w-6 ${
                        isOpen ? "opacity-0" : "opacity-100 "
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-6 ${
                        isOpen
                          ? "-rotate-45 md:-translate-y-2.5 -translate-y-1 bg-gray-200"
                          : "translate-y-0.5"
                      }`}
          ></span>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, translateX: 400 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -400 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-[#0F165C] z-40 text-white"
            >
              <div className={`${font.className} relative`}>
                <Gradient/>
                <ul className="flex flex-col items-center justify-center w-screen h-screen md:text-7xl text-5xl gap-7 md:gap-6 font-semibold md:font-normal">
                  <Link
                    href="#About"
                    className={`mt-5 h-auto`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2}}
                      transition={{ delay: 0.3,duration:1, stiffness: 400, damping: 10 }}
                      whileInView={{y:0,opacity:1}}
                      initial={{y:20,opacity:0}}
                      onClick={handleClick}
                    > 
                      About Us
                    </motion.li>
                  </Link>
                  <Link
                    href="#Brands"
                    className={`mt-5 h-auto`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.3,duration:1, stiffness: 400, damping: 10 }}
                      whileInView={{y:0,opacity:1}}
                      initial={{y:20,opacity:0}}
                      onClick={handleClick}
                    >
                      All Brands
                    </motion.li>
                  </Link>
                  <Link
                    href="#Career"
                    className={`mt-5 h-auto`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.3,duration:1, stiffness: 400, damping: 10 }}
                      whileInView={{y:0,opacity:1}}
                      initial={{y:20,opacity:0}}
                      onClick={handleClick}
                    >
                      Careers
                    </motion.li>
                  </Link>
                  <Link
                    href="#Campaigns"
                    className={`mt-5 h-auto`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.3,duration:1, stiffness: 400, damping: 10 }}
                      whileInView={{y:0,opacity:1}}
                      initial={{y:20,opacity:0}}
                      onClick={handleClick}
                    >
                      Campaigns
                    </motion.li>
                  </Link>
                </ul>
              </div>
              <Gradient/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar2;
