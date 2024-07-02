"use client"

import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import Moo from "./components/Moo";
import MilkMan from "./components/MilkMan";
import Hero from "./components/Hero";
import Gap from "./components/Gap";
import MooText from "./components/MooText";
import Navbar2 from "./components/Navbar2";
import Loader from "./components/Loader";
import { useState } from "react";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(()=>{
    setIsLoading(false)
  },3800)

  return (
    <> 
      {
      isLoading ? <Loader /> :
        <main className="h-screen relative w-screen overflow-x-hidden">
          <Navbar2/>
          <Hero/>
          <Gap/>
          <Moo/>
          <MooText />
          <Products />
          <Gap/>
          <OurStory />
          <MilkMan/>
          <Gap/>
          <Campaign />
          <Footer/>
        </main>
      }
    </>
  );
}
