
import {Link} from "react-router-dom"
function Footer() {
  
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
   
  };
  return (
    <footer className="w-full bg-black text-white px-5 lg:px-10 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <div>
          <h2 className=" text-xl lg:text-2xl  text-yellow-400" style={{ fontFamily: "poppins" }}>
           Incredible Law Chamber
          </h2>

          <p className="text-gray-400 mt-3 lg:mt-4 leading-relaxed  text-sm lg:text-base" style={{fontFamily:"Inter"}}>
            Delivering trusted legal solutions with integrity,
            professionalism, and commitment to justice.
          </p>
        </div>

      
        <div>
          <h3 className="text-lg lg:text-xl  text-yellow-400" style={{ fontFamily: "Poppins" }}>
            Quick Links
          </h3>

          <ul className="mt-3 lg:mt-4 space-y-4 lg:space-y-3 text-gray-400 text-sm lg:text-base" style={{fontFamily:"Inter"}}>
          <li>
    <Link to="/" onClick={scrollTop} className="hover:text-yellow-400">
      Home
    </Link>
  </li>
              <li>
    <Link to="/Aboutpage" onClick={scrollTop} className="hover:text-yellow-400">
      About
    </Link>
  </li>
             <li>
    <Link to="/Servicepage" onClick={scrollTop} className="hover:text-yellow-400">
      Services
    </Link>
  </li>
            <li>
    <Link to="/Contactpage" onClick={scrollTop} className="hover:text-yellow-400">
      Contact
    </Link>
  </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg lg:text-xl  text-yellow-400" style={{ fontFamily: "Poppins" }}>
            Contact
          </h3>

          <div className="mt-3 lg:mt-4 space-y-4 lg:space-y-3 text-gray-400 text-sm lg:text-base" style={{fontFamily:"Inter"}}>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ contact@incredible.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 lg:mt-10 pt-5 lg:pt-6 text-center text-gray-500 text-sm lg:text-base">
         <p>&copy; {new Date().getFullYear()} Law Firm. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;