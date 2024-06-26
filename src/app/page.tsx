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


export default function Home() {
  return (
    <main className="h-screen relative w-screen overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Gap/>
      <Moo/>
      <Gap/>
      <Products />
      <Gap/>
      <OurStory />
      <Gap/>
      <MilkMan/>
      <Gap/>
      <Campaign />
      <Footer/>
    </main>
  );
}
