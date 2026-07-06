import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-black text-white shadow-lg sticky top-0 z-50">
      
      <div className="w-full px-4 py-1 flex items-center justify-between">
      
        <Link to="/" onClick={scrollTop}>
          <img src="/images/logo1.svg"alt="Incredible Law Chamber"className="h-14 md:h-24 w-auto"/>
        </Link>

        <div className="hidden md:flex items-center gap-8">

          <nav  className="flex gap-8 text-xl font-medium"  style={{ fontFamily: "Poppins" }} >
            <NavLink to="/" end  className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"  }  onClick={scrollTop}>
              Home
            </NavLink>

            <NavLink  to="/Aboutpage"  className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"  }  onClick={scrollTop}  >
              About
            </NavLink>

            <NavLink to="/Servicepage"  className={({ isActive }) =>    isActive ? "text-yellow-500" : "text-white"  }   onClick={scrollTop}>
              Services
            </NavLink>

            <NavLink  to="/Contactpage"   className={({ isActive }) =>    isActive ? "text-yellow-500" : "text-white"   }   onClick={scrollTop} >
              Contact
            </NavLink>
          </nav>

          <Link  to="/Appointpage" onClick={scrollTop}  className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold"  style={{ fontFamily: "Poppins" }} >
            Book Appointment
          </Link>

        </div>

        <button  className="md:hidden text-3xl text-white"  onClick={() => setMenuOpen(!menuOpen)}  >
          <img src="/images/menu.svg" alt="Menu"  />
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <nav   className="flex flex-col gap-4 text-lg font-medium"   style={{ fontFamily: "Poppins" }}  >

            <NavLink  to="/"  end  className={({ isActive }) =>    isActive ? "text-yellow-500" : "text-white" }  onClick={scrollTop}>
              Home
            </NavLink>

            <NavLink  to="/Aboutpage" className={({ isActive }) => isActive ? "text-yellow-500" : "text-white"  }  onClick={scrollTop}  >
          About
            </NavLink>

            <NavLink  to="/Servicepage"  className={({ isActive }) =>  isActive ? "text-yellow-500" : "text-white"}onClick={scrollTop} >
            Services
            </NavLink>

            <NavLink   to="/Contactpage"  className={({ isActive }) =>    isActive ? "text-yellow-500" : "text-white"  }  onClick={scrollTop} > 
              Contact
            </NavLink>

            <Link to="/Appointpage" onClick={scrollTop} className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold text-center"  >
              Book Appointment
            </Link>
            
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;