import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import Moo from "./components/Moo";
import { TextGenerateEffect } from "./components/TextGenerate";
import MilkMan from "./components/MilkMan";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className=" max-w-[2000px] h-screen relative mx-auto overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Moo/>
      <Products />
      <OurStory />
      <MilkMan/>
      <Campaign />
      <Footer/>
    </main>
  );
}
