import Image from "next/image";

import Hero from "./component/Hero";
import TopBar1 from "./component/TopBar1";
import Features from "./component/Features";
import BusinessSection from "./component/BusinessSection";
import Gallery from "./component/Gallary";
import ClientSay from "./component/ClientSay";
import Sponsore from "./component/Sponsore";
import Footer from "./component/Footer";


export default function Home() {
  return (
    
  <>
  <TopBar1 />
  <Hero />
  <Features />
  <BusinessSection />
  <Gallery />
  <ClientSay />
  <Sponsore />
  <Footer />
  </>
   
    
  );
}
