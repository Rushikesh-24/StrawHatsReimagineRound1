import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Products from "./components/Products";
import Moo from "./components/Moo";
import { TextGenerateEffect } from "./components/TextGenerate";
import MilkMan from "./components/MilkMan";


export default function Home() {
  return (
    <main className=" max-w-[2000px] mx-auto overflow-hidden">
      <Moo/>
      <Products />
      <OurStory />
      <MilkMan/>
    <Campaign />
      <Footer/>
    </main>
  );
}
