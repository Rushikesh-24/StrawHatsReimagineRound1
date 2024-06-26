import Image from 'next/image'
import Link from 'next/link'

import AmulGirl from "@/assets/amulgirl.png"
import Lassi from "@/assets/lassi.png"
import Cheese from "@/assets/cheese.png"
import Paneer from "@/assets/Paneer.png"
import Butter from "@/assets/butter.png"
import Dahi from "@/assets/dahi.png"
import Milk from "@/assets/milk.png"
import IceCream from "@/assets/icecream.png"
import Texture from "@/assets/texture.png"
import Gradient from './Gradient'


function Products() {
  return (
    <section className='text-white py-10 min-h-screen'>
        <p className='relative text-center text-5xl md:text-8xl font-light'>
            OVER <span className='font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#283BF8] to-[#E9EBFF]'>27+</span> BRANDS
            <Image
                src={Texture.src}
                height={Texture.height}
                width={Texture.width}
                alt=""
                className='absolute top-0'
            />
            <Image
                src={Texture.src}
                height={Texture.height}
                width={Texture.width}
                alt=""
                className='absolute top-0 right-0'
            />
        </p>
        <p className='text-center text-4xl mt-5 font-extralight'>FANS FAV <span className='font-medium'>GENERAL</span> NEW</p>
        <div className='relative mx-10 py-36 hidden md:block'>
            <ProductItem img={AmulGirl} text="THE TASTE OF INDIA" style="text-3xl text-[#1627E3] !h-[19vw] !w-[19vw]"/>
            <ProductItem img={Lassi} text="LASSI" style="text-3xl !gap-1 text-[#040A4F] !bg-[#040A4F] left-[22%] top-[15%] !h-[13vw] !w-[13vw]"/>
            <ProductItem img={Cheese} text="CHEESE" style="text-3xl !gap-1 text-[#4450E0] !bg-[#4450E0] left-[38%] top-[15%] !h-[15vw] !w-[15vw]"/>
            <ProductItem img={Paneer} text="PANEER" style="text-xl !gap-1 text-[#1627E3] left-[56%] top-[45%] !h-[11vw] !w-[11vw]"/>
            <ProductItem img={Butter} text="BUTTER" style="text-4xl text-[#1D2BCF] !bg-[#1D2BCF] left-[70%] top-[15%] !h-[20vw] !w-[20vw]"/>

            <ProductItem img={Milk} text="MILK" style="text-5xl text-[#1D2BCF] !bg-[#1D2BCF] left-[32%] top-[90%] !h-[15vw] !w-[15vw]"/>
            <ProductItem img={Dahi} text="DAHI" style="text-4xl !gap-1 text-[#040A4F] !bg-[#040A4F] left-[18%] top-[99%] !h-[14vw] !w-[14vw]"/>
            <ProductItem img={IceCream} text="ICE-CREAM" style="text-3xl text-[#040A4F] !bg-[#040A4F] left-[52%] top-[85%] !h-[20vw] !w-[20vw]"/>
            <div className='absolute right-10 top-[150%]'>
                <p className='text-2xl tracking-widest font-light mb-2'>ORDER NOW</p>
                <Link href="" className="bg-[#212FBF] size-fit md:px-10 px-6 text-white md:py-2 items-center justify-center md:right-20 sm:right-10  flex gap-3 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl">
                    <div className="md:text-base sm:text-sm text-xs">
                        <p>GO</p>
                        <p>TO</p>
                    </div>
                    <p className="md:text-4xl font-semibold sm:text-xl text-lg">STORE</p>   
                    <Gradient />
                </Link>
            </div>
            <div className='absolute left-16 top-[180%]'>
                <p className='text-2xl tracking-widest font-light mb-2'>MAKE SOMETHING</p>
                <Link href='' className="bg-[#212FBF] size-fit md:px-10 px-6 text-white md:py-2 items-center justify-center md:right-20 sm:right-10  flex gap-3 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl">
                    <div className="md:text-base sm:text-sm text-xs">
                        <p>GO</p>
                        <p>TO</p>
                    </div>
                    <p className="md:text-4xl font-semibold sm:text-xl text-lg">RECIPE</p>
                    <Gradient />   
                </Link>
            </div>
            <div className='absolute flex flex-col items-center justify-center right-0 bg-[#040A4F] !h-[8vw] !w-[8vw]'>
                <p className='text-5xl font-bold'>20</p>
                <p className='text-xl font-light'>others</p>
                <div className='w-full flex justify-between ml-5'>
                    <div className='flex flex-col gap-2'>
                        <div className='h-2 bg-white w-16'/><div className='h-2 bg-white w-16'/><div className='h-2 bg-white w-16'/>
                    </div>
                    <p className='text-4xl font-semibold mr-10 -rotate-90'>{"v"}</p>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 gap-y-5 md:hidden p-2 mt-10'>
            <ProductItem img={AmulGirl} text="THE TASTE OF INDIA" style="!relative text-3xl text-[#1627E3]"/>
            <ProductItem img={Lassi} text="LASSI" style="!relative text-3xl !gap-1 text-[#040A4F] !bg-[#040A4F]"/>
            <ProductItem img={Cheese} text="CHEESE" style="!relative text-3xl !gap-1 text-[#4450E0] !bg-[#4450E0]"/>
            <ProductItem img={Paneer} text="PANEER" style="!relative text-xl !gap-1 text-[#1627E3]"/>
            <ProductItem img={Butter} text="BUTTER" style="!relative text-4xl text-[#1D2BCF] !bg-[#1D2BCF]"/>
            <ProductItem img={Milk} text="MILK" style="!relative text-5xl text-[#1D2BCF] !bg-[#1D2BCF]"/>
            <ProductItem img={Dahi} text="DAHI" style="!relative text-4xl !gap-1 text-[#040A4F] !bg-[#040A4F]"/>
            <ProductItem img={IceCream} text="ICE-CREAM" style="!relative text-3xl text-[#040A4F] !bg-[#040A4F]"/>
        </div>
        <div className='flex justify-between sm:gap-10 gap-4 sm:mx-10 mx-4 mt-5 md:hidden'>
                <Link href="" className="bg-[#212FBF] flex-1 size-fit md:px-10 sm:px-6 px-4 text-white md:py-2 items-center justify-center md:right-20 sm:right-10  flex gap-3 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl">
                    <div className="md:text-base sm:text-sm text-xs">
                        <p>GO</p>
                        <p>TO</p>
                    </div>
                    <p className="md:text-4xl font-semibold sm:text-xl text-lg">STORE</p>   
                </Link>
                <Link href='' className="bg-[#212FBF] flex-1 size-fit md:px-10 sm:px-6 px-4 text-white md:py-2 items-center justify-center md:right-20 sm:right-10 flex gap-3 rounded-tr-[2rem] rounded-bl-[2rem] shadow-xl">
                    <div className="md:text-base sm:text-sm text-xs">
                        <p>GO</p>
                        <p>TO</p>
                    </div>
                    <p className="md:text-4xl font-semibold sm:text-xl text-lg">RECIPE</p>   
                </Link>
        </div>
            
    </section>
  )
}

function ProductItem({style, text, img}:{style:string, text:string, img:any}) {
  return (
    <div className={`bg-[#1627E3] overflow-hidden flex flex-col gap-4 items-center justify-center absolute h-[40vw] w-[40vw]  ${style}`}>
        {
            Array.from(new Array(5)).map((num, i)=>(
                <p key={i} className={`outline-text font-bold tracking-widest ${(i+1)%2!==0 && "text-white"}`}>{text}</p>
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
    </div>
  )
}

export default Products