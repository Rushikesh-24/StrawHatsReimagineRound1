import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import Moo from "./components/Moo";
import { TextGenerateEffect } from "./components/TextGenerate";
import MilkMan from "./components/MilkMan";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gap from "./components/Gap";
import MooText from "./components/MooText";
import Navbar2 from "./components/Navbar2";


export default function Home() {
  return (
    <main className="h-screen relative w-screen overflow-x-hidden">
      <Navbar2/>
      {/* <Navbar /> */}
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
  );
}
