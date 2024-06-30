'use client'
import localFont from "next/font/local";
import { motion } from "framer-motion";

const panchang = localFont({
    src: "../../../public/Panchang-Variable.ttf",
    display: "swap",
  });

const MooText = () => {
  return (
    <motion.div className={`text-white flex justify-center items-center my-20 ${panchang.className} sm:text-base text-sm`}
    initial={{y:50,x:0,opacity:0}}
    whileInView={{y:0,x:0,opacity:1}}
    transition={{duration:1,delay:0.2,ease:'easeInOut'}}
    > Raise a glass to dairy delights!</motion.div>
  )
}

export default MooText