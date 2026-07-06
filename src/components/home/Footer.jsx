function Footer() {
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
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/Aboutpage" className="hover:text-yellow-400">About</a></li>
            <li><a href="/Servicepage" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/Contactpage" className="hover:text-yellow-400">Contact</a></li>
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