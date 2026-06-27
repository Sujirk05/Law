
function Hero() {
    return(
        <section id="Hero">
        <div className="relative w-full h-screen">

  <img
    src="/images/bg.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />


  <div className="absolute inset-0 bg-black/60"></div>

 
  <div className="relative z-10 h-full flex items-center justify-between px-20">

   
    <div className="max-w-2xl text-white">
      <p className="text-lg font-semibold text-yellow-400 tracking-widest">
        TRUSTED LEGAL EXPERTISE
      </p>

      <h1 className="text-6xl font-bold mt-4" style={{fontFamily:"Black Ops One"}}>
       Incredible Law Chamber
      </h1>

      <p className="text-xl mt-6 text-gray-200">
        Protecting your rights with integrity, precision, and decades of legal excellence.
      </p>

      <p className="text-lg mt-2 text-gray-300">
        We provide strategic legal solutions tailored to individuals, families, and businesses.
      </p>
    </div>
    
  </div>
</div>
</section>
    )
}
export default Hero