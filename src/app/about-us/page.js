"use client"
import Navbar from "../components/about/Navbar";
import Hero from "../components/about/Hero";  
import Section1 from "../components/about/Section1"; 
import Section2 from "../components/about/Section2"; 
import Section3 from "../components/about/Section3"
import Section4 from "../components/about/Section4"
import Section5 from "../components/about/Section5"
import Footer1 from "../components/Footer1";
import Footer2 from "../components/Footer2";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
           <Section5 />
             <Footer1 />
                 <Footer2 />

    </>
  );
}

