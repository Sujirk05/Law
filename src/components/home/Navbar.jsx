import { Link } from "react-router-dom";
function Navbar(){
    return (
    <>
      <header className="w-full bg-black text-white shadow-lg sticky top-0 z-50">
       <div className="w-full px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
<div className="bg-black h-20 flex items-center px-8 ">
 <Link to="/"><img src="/images/logo1.svg" alt="Incredible Law Chamber" className="h-28 w-auto" /></Link>
</div>

      {/* <h1 style={{ fontFamily: "Cinzel" , fontWeight:"bold" }} className='text-3xl '><a href ="/">Incredible Law Chamber</a></h1> */}
    </div>
    <div className="flex items-center gap-8">
  <nav
    className="flex gap-8 text-xl font-medium"
    style={{ fontFamily: "Poppins" }}
  >
    <Link to="/">Home</Link>
    <Link to="/Aboutpage">About</Link>
    <Link to="/Servicepage">Services</Link>
    <Link to="/Contactpage">Contact</Link>
  
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