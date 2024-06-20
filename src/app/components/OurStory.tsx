import React from 'react'
import Palace from 'next/font/local'
import Image from 'next/image'
import Tribhuvandas from '@/assets/tribhuvandas.svg'
import Verghese from '@/assets/verghese.svg'
const myFont = Palace({
    src: '../fonts/PalaceScriptMT.ttf',
    display: 'swap',
})

import { Koulen } from "next/font/google";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


function OurStory() {
  return (
    <section className='text-white text-lg md:text-xl pb-20 pt-10 w-full'>
        <p className='text-center text-5xl md:text-7xl -mb-5'>
            <span className={`${myFont.className} text-[10rem] md:text-[12rem] tracking-widest -mr-10`}>our </span> 
            <span className='relative font-semibold uppercase'>
                Story
                <span className=' bg-gradient-to-r from-[#7680DE] to-[#283BF8] absolute w-full h-1/2 left-0 top-[10%] z-[-1]'></span>
            </span>
        </p>
        <p className='text-center mt-10 sm:mt-0'>Amul was founded on December 19, 1946 in Anand, Gujarat, India.</p>
        <div className='mt-20'>
            <div>
                <div className='lg:bg-[#212FBF] relative rounded-full flex flex-wrap sm:flex-nowrap items-start md:whitespace-nowrap justify-center md:justify-start md:h-[30rem] md:w-[30rem] sm:-ml-10'>
                    <Image 
                        src={Tribhuvandas.src}
                        height={Tribhuvandas.height-90}
                        width={Tribhuvandas.width-90}
                        alt='Tribhuvandas Patel'
                        className='-mt-12'
                    />
                    <GradientTri />
                    <div>
                        <p className='text-xl md:text-2xl lg:text-3xl font-medium'>Tribhuvandas Patel</p>
                        <p className='text-3xl md:text-5xl lg:text-6xl font-semibold my-4'>Founder of Amul</p>
                        <p className={`uppercase text-xl md:text-3xl lg:text-4xl tracking-wide ${koulen.className}`}>The man who transformed the dairy <br/> landscape</p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='bg-[#000D89] ml-[75%] relative rounded-full hidden items-end md:whitespace-nowrap h-[35rem] w-[35rem] lg:flex lg:-mt-[25%]'>
                        
                    </div>
                    <div className='relative lg:absolute flex flex-wrap sm:flex-nowrap gap-5 text-left sm:text-right justify-center lg:justify-end bottom-0 right-0 mt-20 md:mt-0'>
                            <div className='order-2 sm:order-1'>
                                <p className='text-xl md:text-2xl lg:text-3xl font-medium'>Verghese Kurien</p>
                                <p className='text-3xl md:text-5xl lg:text-6xl font-semibold my-4'>Architect of India’s<br/> “White Revolution”</p>
                                <p className={`uppercase text-xl md:text-3xl lg:text-4xl tracking-wide ${koulen.className}`}>The man who orchestrated Amul’s<br/> meteoric rise</p>
                            </div>
                            <Image 
                                src={Verghese.src}
                                height={Verghese.height-200}
                                width={Verghese.width-200}
                                alt='Verghese Kurien'
                                className='-mt-10 order-1'
                            />
                    </div>
                    <GradientVer />
                </div>
            </div>
        </div>
        <div className='ml-10 mt-5 sm:mt-0'>
            <button className='flex gap-5 items-center'>
                <p className='text-xl md:text-3xl relative'>
                    Dive Deep
                    <span className='absolute bg-[#2369FF] w-1/3 h-2 md:h-4 left-0 -bottom-3 md:-bottom-6'></span>
                </p>
                <span className='text-6xl sm:text-8xl font-semibold text-[#23B6FF]'>{'>'}</span>
            </button>   
        </div>
    </section>
  )
}


function GradientTri() {
  return (
    <svg className='absolute hidden lg:block top-[35%]' width="503" height="352" viewBox="0 0 579 493" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_323_144)">
        <ellipse cx="163.5" cy="246.5" rx="295.5" ry="126.5" fill="#283BF8"/>
        </g>
        <defs>
            <filter id="filter0_f_323_144" x="-252" y="0" width="831" height="493" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_323_144"/>
            </filter>
        </defs>
    </svg>
  )
}

function GradientVer() {
  return (
    <svg className='absolute hidden sm:block right-0 z-[-1] -top-[50%]'  width="1211" height="1591" viewBox="0 0 1211 1591" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_323_150)">
            <circle cx="795.5" cy="795.5" r="275.5" fill="#283BF8"/>
        </g>
        <defs>
            <filter id="filter0_f_323_150" x="0.191711" y="0.191711" width="1590.62" height="1590.62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="259.904" result="effect1_foregroundBlur_323_150"/>
            </filter>
        </defs>
    </svg>

  )
}

export default OurStory