import { Link } from "react-router-dom";
import bgimg from "../../../public/images/bg.webp"
function Hero() {
  return (
    <section
      id="Hero"
      className="w-full min-h-[330px] md:h-screen overflow-hidden"
    >
   
      <div className="relative w-full md:h-full">
        <img
          src={bgimg}
          alt="Law Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30"></div>

        <div className="relative z-10 md:h-full flex items-start md:items-center  md:pt-0">
          <div className="w-full pt-6 sm:pt-8 md:pt-0  px-6 sm:px-8 md:px-20 lg:px-28">
            <div className="max-w-2xl">
              <p className="text-sm md:text-lg font-semibold text-yellow-500 tracking-[3px] uppercase">
                PROFESSIONAL LEGAL COUNSEL
              </p>
              <h1 className="mt-5 lg:mt-6  text-2xl sm:text-5xl lg:text-6xl font-semibold leading-tight lg:leading-[1.1] text-white">
                Justice. Integrity. Results.
              </h1>
              <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                Protecting your rights with trusted legal expertise, strategic
                counsel, and unwavering commitment.
              </p>

              {/* Secondary Text */}
              <p className="mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg text-gray-300 leading-7 lg:leading-8">
                Delivering practical legal solutions with integrity, discretion,
                and unwavering commitment to every client.
              </p>

              <div className="mt-8 ml-1 sm:ml-0 ">
                <div className="mt-8">
                  <Link
                    to="/Appointpage"
                    className="  inline-flex items-center justify-center  bg-yellow-500 text-black  px-5 py-2.5  md:px-8 md:py-4 rounded-lg 
    font-semibold font-serif  text-sm md:text-base hover:bg-yellow-400 hover:scale-105   transition duration-300  shadow-lg mb-4 "
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
