import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero"; 
import Appointpage from "./pages/Appointpage"
import Servicepage from "./pages/Servicepage";
import Contactpage from "./pages/Contactpage";
import Home from "./components/home/Home";
import Aboutpage from "./pages/Aboutpage";
import ScrollToTop from "./components/home/ScrollToTop";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <main>
      <Routes>
      < Route path="/" element={<Home />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
        <Route path="/Appointpage" element={<Appointpage/>}/>
      </Routes> 
</main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
