function Footer() {
  return (
    <footer className="w-full bg-black text-white px-10 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl  text-yellow-400" style={{ fontFamily: "poppins" }}>
           Incredible Law Chamber
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed " style={{fontFamily:"Inter"}}>
            Delivering trusted legal solutions with integrity,
            professionalism, and commitment to justice.
          </p>
        </div>

      
        <div>
          <h3 className="text-xl  text-yellow-400" style={{ fontFamily: "Poppins" }}>
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-gray-400" style={{fontFamily:"Inter"}}>
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/Aboutpage" className="hover:text-yellow-400">About</a></li>
            <li><a href="/Servicepage" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/Contactpage" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl  text-yellow-400" style={{ fontFamily: "Poppins" }}>
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-gray-400" style={{fontFamily:"Inter"}}>
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ contact@incredible.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
         <p>&copy; {new Date().getFullYear()} Law Firm. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;