import { NavLink } from "react-router-dom";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-black text-white px-5 lg:px-10 py-10 lg:py-12">

      <div className=" max-w-7xl  mx-auto  grid  grid-cols-1  md:grid-cols-3  gap-8   lg:gap-10 ">
        <div>

          <h2 className="text-xl lg:text-2xl text-yellow-400">
            Incredible Law Chamber
          </h2>

          <p className="text-gray-400 mt-3 lg:mt-4 leading-relaxed text-sm lg:text-base">
            Delivering trusted legal solutions with integrity,
            professionalism, and commitment to justice.
          </p>

        </div>
        <div className="grid grid-cols-2 gap-5 md:contents">
          <div>
            <h3 className="text-lg lg:text-xl text-yellow-400">
              Quick Links
            </h3>
            <ul className="mt-3 lg:mt-4 space-y-3 text-gray-400 text-sm lg:text-base">
              <li>
                <NavLink to="/" onClick={scrollTop} className="hover:text-yellow-400">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/Aboutpage" onClick={scrollTop} className="hover:text-yellow-400">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/Servicepage" onClick={scrollTop} className="hover:text-yellow-400">
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/Contactpage" onClick={scrollTop} className="hover:text-yellow-400">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg lg:text-xl text-yellow-400">
              Contact
            </h3>
            <div className="mt-3 lg:mt-4 space-y-3 text-gray-400 text-sm lg:text-base">
              <p>📍 Chennai, Tamil Nadu</p>

              <p>📞 +91 98765 43210</p>

              <p>✉ contact@incredible.com</p>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className=" border-t  border-gray-800  mt-8  lg:mt-10  pt-5  lg:pt-6  text-center  text-white text-sm  lg:text-base" >
      <p>
          &copy; {new Date().getFullYear()} Law Firm. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;