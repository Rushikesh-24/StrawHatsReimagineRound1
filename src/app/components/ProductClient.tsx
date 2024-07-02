'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function ProductItem({style, text, info, nvalues, img}:{style:string, text:string, info?:string, nvalues?:string[], img:any}) {
    const [classIndex, setClassIndex] = useState(0);
    const [scale, setScale] = useState<number>(1)
    const classNames = ['text-white', 'outline-text', 'text-gray-400'];
    useEffect(() => {
        const intervalId = setInterval(() => {
          setClassIndex((prevIndex) => (prevIndex + 1) % classNames.length);
        }, 1000); 
    
        return () => clearInterval(intervalId);
      }, []);
    return (
      <>
        <motion.div 
        className={`bg-[#1627E3] overflow-hidden flex flex-col gap-4 items-center justify-center absolute h-[40vw] w-[40vw] duration-1000  ${style}
          ${scale === 3 && "md:!fixed md:!h-[100vh] md:!w-[50vw] md:!z-[101] md:!left-0 md:!top-0"}
        `}
        initial={{y:Math.floor(Math.random() * 51),x:Math.floor(Math.random() * 51),opacity:0}}
        whileInView={{y:0,x:0,opacity:1}}
        onClick={(e)=>{ scale === 1 && info? setScale(3) : setScale(1) }} 
        transition={{duration:0.5,delay:0.3,ease:'easeInOut'}}
        >
            {
                Array.from(new Array(5)).map((num, i)=>(
                    <p key={i} className={`${classNames[classIndex]} font-bold tracking-widest ${i % 2 !== 0 && classNames[classIndex]} text-center ${text === 'THE TASTE OF INDIA' ? 'text-[0.55rem] sm:text-[0.85rem] md:text-xs lg:text-base line-clamp-1 tracking-tighter w-full leading-3 sm:leading-6 lg:leading-10' : ''} ${scale === 3 && "text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-snug"}`}>{text}</p>
                ))
            }
            <div className={`absolute ${text === "THE TASTE OF INDIA" && "left-0 bottom-0"} ${scale === 3 && "w-full h-full flex items-center justify-center"}`}>
                <Image
                    src={img.src}
                    height={scale == 1 && text == 'CHEESE'? img.height/30 :scale === 1 ? img.height-40 : img.height}
                    width={scale == 1 && text == 'CHEESE'? img.width/25 : scale === 1 ? img.width-40 : img.width}
                    alt=""
                    className={`${scale === 3 && "w-1/2  object-cover"}`}
                />
            </div>
        </motion.div>
        {
          scale === 3 &&
          <motion.div onClick={(e)=>{ setScale(1) }}  initial={{right:"100%"}} animate={{right:"0%"}} className={'duration-[2s] delay-[0.6s] text-black fixed p-7 top-0 z-[100] md:h-[100vh] md:w-[50vw] bg-white'}>
              <p className='text-6xl font-semibold'>{text}</p>
              <p className='mt-5'>{info}</p>
              <p className='mt-5'>Nutritional Values</p>
              <ul>
                {
                  nvalues?.map((nvalue, i)=>(
                    <li key={i}>{nvalue}</li>
                  ))
                }
              </ul>
              <Link href={"https://shop.amul.com/en/"} onClick={(e)=>{e.stopPropagation()}} className='bg-black p-5 mt-5 fixed bottom-16 text-white'>Shop Now</Link>
          </motion.div>
        }
      </>
    )
  }