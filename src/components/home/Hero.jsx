function Hero() {
  return (
    <section id="Hero" className="w-full min-h-[330px] md:h-screen overflow-hidden">
      <div className="relative w-full md:h-full">

  
        <img  src="/images/bg.jpg"   alt="Law Hero"   className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30"></div>
 
        <div className="relative z-10 md:h-full flex items-start md:items-center">
  <div className="w-full pt-6 sm:pt-8 md:pt-0  px-6 sm:px-8 md:px-20 lg:px-28">
    <div className="max-w-full md:max-w-3xl">
            <p className="text-sm md:text-lg font-semibold text-yellow-500 tracking-[4px] uppercase">
              TRUSTED LEGAL EXPERTISE
            </p>

          <h1
              className="mt-5 lg:mt-6 text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[1.1] text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Justice. Integrity. Results.
            </h1>
   <p
              className="mt-6 lg:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed"
              style={{ fontFamily: "Poppins" }}
            >
              Protecting your rights with trusted legal expertise,
              strategic counsel, and unwavering commitment.
            </p>

            {/* Secondary Text */}
            <p
              className="mt-4 lg:mt-5 text-sm sm:text-base md:text-xl text-gray-300 leading-7 lg:leading-8"
              style={{ fontFamily: "Poppins" }}
            >
              We provide tailored legal solutions for individuals,
              families, and businesses with professionalism,
              transparency, and results you can trust.
            </p>
          
            <div className="mt-4 ml-1 sm:ml-0 ">
              
               <button className="mt-6 bg-yellow-500 text-black px-5 lg:px-6 py-3 lg:py-4 rounded-xl font-semibold text-sm lg:text-base hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg">
                  <a href="/Appointpage">Book Appointment</a>
                </button>
           
            </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

