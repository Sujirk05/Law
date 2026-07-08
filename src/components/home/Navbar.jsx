import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative transition-all duration-300 hover:text-yellow-400 ${
      isActive ? "text-yellow-500" : "text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-black`}>
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link  to="/"  onClick={scrollTop}  className="flex items-center"  >
            <img   src="/images/logo1.svg"  alt="Incredible Law Chamber"  className="h-16 lg:h-20 w-auto transition-transform duration-300 hover:scale-105" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">

            <nav  className="flex items-center gap-10 text-[17px] font-medium"  >
              <NavLink end  to="/"  onClick={scrollTop} className={navLinkStyle}  >
                {({ isActive }) => (
                  <span className="group relative">
                    Home
                    <span  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                        isActive  ? "w-full"   : "w-0 group-hover:w-full"  }`} />
                  </span>
                )}
              </NavLink>

              <NavLink  to="/Aboutpage" onClick={scrollTop}  className={navLinkStyle}  >
                {({ isActive }) => (
                  <span className="group relative">
                    About
                    <span  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${ 
                       isActive  ? "w-full"    : "w-0 group-hover:w-full"  }`}  />
                  </span>
                )}
              </NavLink>

              <NavLink  to="/Servicepage"  onClick={scrollTop}  className={navLinkStyle}  >
                {({ isActive }) => (
                  <span className="group relative">
                    Services
                    <span  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                        isActive  ? "w-full"  : "w-0 group-hover:w-full"  }`} />
                  </span>
                )}
              </NavLink>

              <NavLink  to="/Contactpage"  onClick={scrollTop} className={navLinkStyle}  >
                {({ isActive }) => (
                  <span className="group relative">
                    Contact
                    <span  className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-500 transition-all duration-300 ${
                        isActive  ? "w-full"   : "w-0 group-hover:w-full" }`}  />
                  </span>
                )}
              </NavLink>
            </nav>

            <Link  to="/Appointpage"  onClick={scrollTop}  className="rounded-full bg-yellow-500 px-7 py-3.5 font-serif font-semibold
             text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"  >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
           <button  onClick={() => setMenuOpen(true)}  className="md:hidden" >
         <img  src="/images/menu.svg" alt="Menu"   className="w-8 h-8" />
          </button>

        </div>
      </div>

            {/* Dark Overlay */}
      <div  onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"    }`} />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-screen w-[300px] bg-black/95 backdrop-blur-xl border-l border-white/10
         transform transition-transform duration-500 ease-out md:hidden ${  menuOpen ? "translate-x-0" : "translate-x-full"  }`}  >
        {/* Close Button */}
        <div className="flex justify-end px-5 pt-5">
          <button  onClick={() => setMenuOpen(false)}  className="transition-transform duration-300 hover:rotate-90"  >
            <img  src="/images/exit.svg" alt="Close"  className="w-7 h-7"  />
          </button>
        </div>

        {/* Mobile Logo */}
        <div className="flex justify-center mt-6">
         <NavLink to="/" onClick={scrollTop} ><img  src="/images/logo1.svg"  alt="Logo"  className="h-20 w-auto"  /></NavLink>
        </div>

        {/* Mobile Navigation */}
        <nav  className="mt-12 flex flex-col px-8"   >
          <NavLink
            to="/"
            end
            onClick={scrollTop}
            className={({ isActive }) =>
              `py-4 border-b border-white/10 text-lg transition-all duration-300 ${
                isActive
                  ? "text-yellow-500"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Aboutpage"
            onClick={scrollTop}
            className={({ isActive }) =>
              `py-4 border-b border-white/10 text-lg transition-all duration-300 ${
                isActive
                  ? "text-yellow-500"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/Servicepage"
            onClick={scrollTop}
            className={({ isActive }) =>
              `py-4 border-b border-white/10 text-lg transition-all duration-300 ${
                isActive
                  ? "text-yellow-500"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink  to="/Contactpage"  onClick={scrollTop}  className={({ isActive }) =>  `py-4 border-b border-white/10 text-lg
           transition-all duration-300 ${ isActive  ? "text-yellow-500"  : "text-white hover:text-yellow-400"  }`  }  >
            Contact
          </NavLink>

          <Link  to="/Appointpage"  onClick={scrollTop}
            className="mt-10 rounded-full bg-yellow-500 py-4 text-center  text-black transition-all duration-300 
            hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"  >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;