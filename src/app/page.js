"use client"
import Navbar from "./components/Navbar";
import  Hero  from "./components/Hero";
import  HomeSection1  from "./components/HomeSection1";
import  HomeSection2  from "./components/HomeSection2";
import  Footer1  from "./components/Footer1";
import  Footer2  from "./components/Footer2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSection1 />
      <HomeSection2 />
      <Footer1 />
      <Footer2 />
    </>
  );
}
