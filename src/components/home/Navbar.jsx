import { Link } from "react-router-dom";
function Navbar(){
    return (
    <>
      <header className="w-full bg-black text-white shadow-lg sticky top-0 z-50">
       <div className="w-full px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
 <img  src="/images/logo.jpg" alt="Logo"className="w-14 h-14 "/>

      <h1 style={{ fontFamily: "Cinzel" , fontWeight:"bold" }} className='text-3xl '><a href ="/">Incredible Law Chamber</a></h1>
    </div>
    <div className="flex items-center gap-8">
  <nav
    className="flex gap-8 text-xl font-medium"
    style={{ fontFamily: "Poppins" }}
  >
    <a href="/">Home</a>
    <a href="/Aboutpage">About</a>
    <a href="/Servicepage">Services</a>
    <a href="/Contact">Contact</a>
  
  </nav>

  <button className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold" style={{ fontFamily: "Poppins" }} >
 <a href="/Appointpage"> Book Appointment</a>
  </button>
</div>
    </div>
    </header> 
    </>
    )
}
export default Navbar