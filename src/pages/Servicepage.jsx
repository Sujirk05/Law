import Cards from "../Card/Cards";
import { motion } from "framer-motion";
import servicebg from "/images/bg.png"
import serhero from "/images/hero3.webp"
function Servicepage() {
  return (
    <>
{/* Hero Section */}
<header className="relative h-[200px] sm:h-[240px] lg:h-[400px] text-white">

  <img src={serhero} alt="Legal Services" className="w-full h-full object-cover"/>

  <div className="absolute inset-0 bg-black/75"></div>

  <motion.div
    className="
    absolute inset-0
    flex flex-col
    items-center
    justify-center
    px-4
    lg:-translate-y-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} >

    <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-bold text-white text-center">
      Our Services
    </h1>

    <p className=" mt-2 lg:mt text-xs sm:text-base lg:text-lg tracking-wide max-w-3xl text-center text-gray-200 px-4">
      Expert legal solutions tailored to your needs </p>

  </motion.div>
</header>

      {/* Content Section */}
      <section className="bg-slate-50 py-12 pb-1 lg:py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} >
                <h1 className=" text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-slate-900">
                  Trusted Legal Guidance for Every Challenge
                </h1>

                <h1 className=" text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-yellow-500">
                  Protecting Your Rights with Confidence
                </h1>

                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  At Incredible Law Chamber, we deliver exceptional legal
                  services with integrity, professionalism, and a
                  client-centered approach.
                </p>

                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mt-4 lg:mt-5">
                  Whether you need legal consultation, dispute resolution,
                  documentation, or courtroom advocacy, we provide strategic
                  guidance to protect your rights and help you make informed
                  decisions with confidence.
                </p>

                <button className="mt-6 bg-yellow-500 text-black px-5 lg:px-6 py-3 lg:py-4 rounded-xl font-serif font-semibold text-sm lg:text-base hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg">
                  <a href="/Appointpage">Book Appointment</a>
                </button>
              </motion.div>
            </div>

            <div className="flex justify-center  mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} >
                <img src={servicebg} alt="Legal Services"  loading="lazy"
                 className="max-w-[350px] lg:max-w-[500px] w-full h-auto hidden md:block" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <Cards />
    </>
  );
}

export default Servicepage;