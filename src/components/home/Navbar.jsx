import { Link, NavLink } from "react-router-dom";
function Navbar(){
    return (
    <>
      <header className="w-full bg-black text-white shadow-lg sticky top-0 z-50">
       <div className="w-full px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
<div className="bg-black h-20 flex items-center px-8 ">
 <Link to="/"><img src="/images/logo1.svg" alt="Incredible Law Chamber" className="h-28 w-auto" /></Link>
</div>

    </div>
    <div className="flex items-center gap-8">
  <nav
    className="flex gap-8 text-xl font-medium"
    style={{ fontFamily: "Poppins" }}
  >
    <NavLink to="/" end className={({isActive}) => isActive ? 'text-yellow-500': 'text-white '}>
      Home
    </NavLink>
    <NavLink to="/Aboutpage" className={({isActive}) => ` ${isActive ? 'text-yellow-500' : 'text-white'}`}>
      About
    </NavLink>
    <NavLink to="/Servicepage" className={({isActive}) => ` ${isActive ? 'text-yellow-500' : 'text-white'}`}>
      Services
    </NavLink>
    <NavLink to="/Contactpage" className={({isActive}) => ` ${isActive ? 'text-yellow-500' : 'text-white'}`}>
      Contact
    </NavLink>
  </nav>

  <button className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold" style={{ fontFamily: "Poppins" }} >
 <Link to="/Appointpage"> Book Appointment</Link>
  </button>
</div>
    </div>
    </header> 
    </>
    )
}
export default Navbar