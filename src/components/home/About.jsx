import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <section  id="About"  className="   relative w-full py-16 md:py-28 px-4  md:px-6 sm:px-6 lg:px-16 overflow-hidden scroll-mt-24 bg-[#F8F6F1]  border-y border-yellow-500/10  "   >
      
      <div className="absolute top-24 right-24 w-96 h-96 bg-yellow-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-500/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
       
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"  >
          <div
            className="
              relative rounded-3xl overflow-hidden
              border border-yellow-500/20
              ring-1 ring-yellow-500/10
              shadow-[0_0_40px_rgba(234,179,8,0.12)]  "  >

            <img   src="/images/bg2.webp"   alt="Law Office" loading="lazy"  className="  w-full h-[320px] sm:h-[400px] lg:h-[500px] object-cover  brightness-105 contrast-110    hover:scale-[1.02]   transition duration-700   " />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div> 

          <div
            className="
             hidden sm:block
              absolute -top-5 right-[-15px]
              bg-black/40 backdrop-blur-md
              border border-yellow-500/30
              rounded-2xl px-7 py-4
              shadow-[0_0_20px_rgba(234,179,8,0.12)]   "   >

            <h3 className="text-4xl font-bold text-yellow-400">15+</h3>
            <p className="text-gray-300 text-sm">Years Experience</p>
          </div>

         
          <div
            className="
             hidden sm:block
              absolute bottom-10 -left-14
              bg-black/40 backdrop-blur-md
              border border-yellow-500/30
              rounded-2xl px-9 py-6
              shadow-[0_0_30px_rgba(234,179,8,0.15)]  "   >

            <h3 className="text-5xl font-bold text-yellow-400">500+</h3>
            <p className="text-gray-300">Cases Handled</p>
          </div>

          <div
            className="
             hidden sm:block
              absolute bottom-6 -right-4
              bg-black/40 backdrop-blur-md
              border border-yellow-500/30
              rounded-2xl px-7 py-4
              shadow-[0_0_20px_rgba(234,179,8,0.12)]  "  >

            <h3 className="text-4xl font-bold text-yellow-400">98%</h3>
            <p className="text-gray-300 text-sm">Success Rate</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[340px] sm:max-w-2xl" >

          <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
            About Us </p>

          <h2 className="text-2xl sm:text-4xl  lg:text-5xl font-medium  mt-6 text-slate-900 leading-tight">
            Dedicated to Justice,
            <br />
            Committed to Excellence
          </h2>


          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            At Incredible Law Chamber, we are committed to delivering
            exceptional legal services with integrity, professionalism,
            and unwavering dedication to justice.
          </p>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We provide strategic legal solutions tailored to individuals,
            families, and businesses while protecting rights and ensuring
            strong representation in every case.
          </p>

          <div className="mt-8 md:mt-12 flex gap-3 md:gap-5">
            <Link to="/Aboutpage">
              <button className="px-6 py-3 md:px-10 md:py-5 bg-yellow-500 text-black font-semibold font-serif rounded-2xl
               hover:scale-105 transition duration-300 shadow-xl"  > About Our Firm </button>
            </Link>

           <Link to="/Contactpage">
            <button className="px-6 py-3 md:px-10 md:py-5 border border-yellow-500 text-yellow-400 rounded-2xl hover:bg-yellow-500
             hover:text-black transition duration-300"  >  Contact Us</button>
            </Link>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;