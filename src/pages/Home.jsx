import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import Test from "../components/home/Test";
import Faq from "../components/home/Faq";
function Home() {
  
  return (
    <>
   
      <Hero />
      <About />
      <Services />
      <Test/>
       <Faq/> 
       <Contact /> 
    </>
  );
}

export default Home;