function Hero() {
  return (
    <section id="Hero" className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">

  
        <img  src="/images/bg1.jpg"   alt="Law Hero"   className="absolute inset-0 w-full h-full object-cover" />
      
        <div
          className="
            absolute inset-y-0 left-0 w-full md:w-[52%]
            bg-gradient-to-r
            from-white/75
            via-white/45
            to-transparent
            backdrop-blur-[2px]   "
        ></div>

      
        <div className="relative z-10 h-full flex items-center px-8 md:px-20 lg:px-28">
          <div className="max-w-3xl">

            <p className="text-sm md:text-lg font-semibold text-yellow-500 tracking-[4px] uppercase">
              TRUSTED LEGAL EXPERTISE
            </p>

            <h1
              className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-blue-900"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Incredible Law Chamber
            </h1>

            <p className="mt-7 text-lg md:text-2xl text-gray-700 leading-relaxed max-w-2xl">
              Protecting your rights with integrity, precision, and decades of
              legal excellence.
            </p>

            <p className="mt-3 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              We provide strategic legal solutions tailored to individuals,
              families, and businesses.
            </p>

          
            <div className="mt-10">
              <a
                href="/Appointpage"
                className="inline-flex items-center gap-2 text-blue-900 font-medium text-lg group"
              >
                Book Your Appointment
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;