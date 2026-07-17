import Hero from "./Hero"
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Test from "./Test"
import Faq from "./Faq"

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