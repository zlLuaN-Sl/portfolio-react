'use client'

import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Projects } from "../components/Projects/Projects";
import { Technologies } from "../components/Technologies/Technologies";

const Home = () => {
  return(
    <main className=" bg-[#040509]  min-h-screen">

      <Navbar/>
      <Hero />
      <About />
      <Technologies />
      <Projects /> 
      <Contact />
      <Footer /> 
       
    </main>
    
  )
};

export default Home;