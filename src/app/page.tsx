import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import Moo from "./components/Moo";
import { TextGenerateEffect } from "./components/TextGenerate";
import MilkMan from "./components/MilkMan";


export default function Home() {
  return (
    <main className=" max-w-[2000px] mx-auto">
      <Moo/>
      <Products />
      <OurStory />
      <MilkMan/>
      <Footer/>
    </main>
  );
}
