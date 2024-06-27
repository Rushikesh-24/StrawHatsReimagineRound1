"use client"

import Image from "next/image"
import { useState } from "react"
import Logo from "@/assets/logo.png"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-black bg-opacity-20 backdrop-blur-2xl sticky z-30 top-0 text-white p-4 py-8 md:py-6">
      <div className="mx-10 flex justify-center items-center">
        <div className="absolute left-10">
            <Image 
                src={Logo.src}
                height={Logo.height-20}
                width={Logo.width-20}
                alt=""
            />
        </div>
        <div className="hidden text-xl md:flex space-x-6"> 
          <Link href="#" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-300">
            All Brands
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Careers
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Campaigns
          </Link>
        </div>
        <div className="absolute right-10 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-10 mx-6">
          <Link href="#" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="#" className="hover:text-gray-300">
            All Brands
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Careers
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Campaigns
          </Link>
        </div>
      )}
    </nav>
  )
}

function MenuIcon({className}:{className:string}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}