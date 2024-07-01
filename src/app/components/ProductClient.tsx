'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
export default function ProductItem({style, text, img}:{style:string, text:string, img:any}) {
    const [classIndex, setClassIndex] = useState(0);
    const classNames = ['text-white', 'outline-text', 'text-gray-400'];
    useEffect(() => {
        const intervalId = setInterval(() => {
          setClassIndex((prevIndex) => (prevIndex + 1) % classNames.length);
        }, 1000); 
    
        return () => clearInterval(intervalId);
      }, []);
    return (
      <motion.div className={`bg-[#1627E3] overflow-hidden flex flex-col gap-4 items-center justify-center absolute h-[40vw] w-[40vw]  ${style}`}
      initial={{y:Math.floor(Math.random() * 51),x:Math.floor(Math.random() * 51),opacity:0}}
      whileInView={{y:0,x:0,opacity:1}}
      transition={{duration:0.5,delay:0.3,ease:'easeInOut'}}
      >
          {
              Array.from(new Array(5)).map((num, i)=>(
                  <p key={i} className={`${classNames[classIndex]} font-bold tracking-widest ${i % 2 !== 0 && classNames[classIndex]} text-center ${text === 'THE TASTE OF INDIA' ? 'text-[0.55rem] sm:text-[0.85rem] md:text-xs lg:text-base line-clamp-1 tracking-tighter w-full leading-3 sm:leading-6 lg:leading-10' : ''}`}>{text}</p>
              ))
          }
          <div className={`absolute ${text === "THE TASTE OF INDIA" && "left-0 bottom-0"}`}>
              <Image
                  src={img.src}
                  height={img.height-40}
                  width={img.width-40}
                  alt=""
                  className=''
              />
          </div>
      </motion.div>
    )
  }