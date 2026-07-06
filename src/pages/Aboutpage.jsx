import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
function Aboutpage() {
    return(
       <section >
        {/* about hero section */}
          <div className="relative h-[280px] lg:h-[400px] text-white">

              <img  src="/images/hero.jpg" className="w-full h-full object-cover"/>
  <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute inset-0 flex flex-col items-center justify-center"
>
    <h1  className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center px-4"   style={{ fontFamily: "cinzel" }}  >
      About Incredible Law Chamber
    </h1>
      <p className="mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg tracking-wide max-w-3xl text-center text-gray-200 px-6">
        Advocating Justice. Protecting Rights. Delivering Results.
      </p>
      
      </motion.div>
  </div>
</div>

{/* about content section */}
<div className="bg-gray-100 py-10 lg:py-12">
  <div className="max-w-6xl mx-auto px-4 lg:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
      
 <div className="py-6 lg:py-12">
       <h1 className="uppercase tracking-[3px] text-base lg:text-lg font-semibold text-yellow-500 mb-3 lg:mb-4">
  About Us
</h1>
       <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-slate-900">
  Dedicated to Justice,
  <span className="block text-yellow-500">
    Committed to Excellence
  </span>
</h2>
        <div className="flex justify-between lg:justify-start lg:gap-10 mt-8">
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-500">15+</h3>
  <p className="text-gray-600 text-sm lg:text-base">Years Experience</p>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-500">500+</h3>
  <p className="text-gray-600 text-sm lg:text-base">Cases Handled</p>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-2xl lg:text-3xl font-bold text-yellow-500">98%</h3>
  <p className="text-gray-600 text-sm lg:text-base">Success Rate</p>
</motion.div>
          </div>
      </div>

   
<div className="border-l-4 border-yellow-500 pl-4 lg:pl-6">
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
        <p className="mt-4 lg:mt-6 text-gray-700 text-base lg:text-lg leading-relaxed">
          Welcome to Incredible Law Chamber, a trusted legal practice committed
          to delivering professional, ethical, and result-oriented legal
          services. 
        </p>

        <p className="mt-4 lg:mt-6 text-gray-700 text-base lg:text-lg leading-relaxed">
          At Incredible Law Chamber, we understand that legal matters can be
          complex and challenging. Our mission is to provide clear legal
          solutions, strategic advice.
        </p>

        <p className="mt-4 lg:mt-6 text-gray-700 text-base lg:text-lg leading-relaxed">
          We are committed to maintaining the highest standards of integrity,
          confidentiality, and professionalism in every case we handle.
        </p>
        <p className="italic text-yellow-600 font-medium mt-5 lg:mt-6 text-sm lg:text-base">
  “Justice with integrity, advocacy with excellence.”
</p>
        </motion.div>
      </div>

    </div>
  </div>
</div>

{/* about lawyer     */}
    <div className="bg-gray-200 max-w-full mx-auto py-10 lg:py-12 px-4 lg:px-6 ">
        <div className="max-w-6xl mx-auto py-6 lg:py-12 px-2 lg:px-6  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
              
       <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
        <p className="uppercase tracking-[3px] text-xs lg:text-sm font-semibold text-yellow-500 mb-3 lg:mb-4">Founder & Principal Advocate</p>
        <p className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Mrs. Meera Krishnan</p>
        <p className="text-base lg:text-lg text-gray-500 font-medium mb-4">Legal Consultant | Senior Mediator</p>
        <p className="text-base lg:text-lg  leading-relaxed text-gray-700">Advocate Meera Krishnan is the Founder and Principal Advocate of Incredible Law Chamber, bringing over 15 years of distinguished experience in the legal profession. With a strong foundation in litigation, advisory services, and dispute resolution, she has built a reputation for delivering trusted legal counsel with integrity and professionalism.</p>

   </motion.div>
   <motion.div
  className="rounded-3xl overflow-hidden shadow-xl"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
    <img
      src="/images/adv.jpg"
      className="w-full h-[280px] lg:h-[400px] object-cover"
      alt="Law books"
    />
  </motion.div>

    </div>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-10 lg:mt-14 ">
  <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <img src="./images/shield.png" alt="Integrity" className="mx-auto mb-3 lg:mb-4 w-10 h-10 lg:w-12 lg:h-12" />

    <h3 className="text-base lg:text-xl font-semibold text-gray-700">Professional Integrity</h3>
    </motion.div>
        </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <img src="./images/crown.png" alt="Leadership" className="mx-auto mb-3 lg:mb-4 w-10 h-10 lg:w-12 lg:h-12" />
                <h3 className="text-base lg:text-xl font-semibold text-gray-700">Leadership Excellence</h3>
      </motion.div>        
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <img src="./images/scale.png" alt="Legal Expertise" className="mx-auto mb-3 lg:mb-4 w-10 h-10 lg:w-12 lg:h-12" />
            <h3 className="text-base lg:text-xl font-semibold text-gray-700">Legal Expertise</h3>
           </motion.div> 
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 lg:p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  <img src="./images/hand.png" alt="Client Commitment" className="mx-auto mb-3 lg:mb-4 w-10 h-10 lg:w-12 lg:h-12" />
            <h3 className="text-base lg:text-xl font-semibold text-gray-700">Client Commitment</h3>
       </motion.div>    
        </div>
    </div>
       </div>
</div>

{/* Why Choose Us Section */}
<div className="bg-slate-100 py-12 lg:py-20 px-4 lg:px-6">
  <div className="max-w-6xl mx-auto">

    {/* Top Content */}
    <div className="grid grid-cols-1  md:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Left Side */}
      <div>
        <p className="uppercase tracking-[3px] lg:tracking-[4px] text-yellow-500 font-semibold text-sm lg:text-base mb-3 lg:mb-4">
          Why Choose Us
        </p>

        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Trusted Legal Excellence
        </h2>

        <p className="text-gray-600 text-base lg:text-lg mt-4 lg:mt-6 leading-relaxed">
          At Incredible Law Chamber, we combine legal expertise, strategic
          representation, and personalized support to deliver reliable legal
          solutions tailored to every client’s needs.
        </p>
      </div>

      {/* Right Side */}
      <div className="space-y-3 lg:space-y-4">
        {[
          "Expert Legal Guidance",
          "Experienced Representation",
          "Client-Centered Approach",
          "Dedicated Support",
          "Integrity & Confidentiality",
        ].map((item, index) => (
          <div
            key={index}
      className="bg-white rounded-xl shadow-md px-4 lg:px-6 py-4 lg:py-5 flex items-center gap-3 lg:gap-4 hover:translate-x-2 transition duration-300"
          >
            <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0">
  <FaCheck className="text-black text-xs lg:text-sm" />
</div>
            <p className="text-gray-700 font-medium text-base lg:text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-16">

      <div className="bg-slate-900 rounded-2xl shadow-xl p-6 lg:p-8 border-t-4 border-yellow-500 hover:-translate-y-2 transition duration-300">
        <h3 className=" text-xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white">
          Our Vision
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          To be a trusted and respected legal institution recognized for
          excellence, integrity, and commitment to justice.
        </p>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-xl p-6 lg:p-8 border-t-4 border-yellow-500 hover:-translate-y-2 transition duration-300">
        <h3 className=" text-xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white">
          Our Mission
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          To provide reliable, client-focused legal services through expert
          guidance and ethical legal practice.
        </p>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-xl p-6 lg:p-8 border-t-4 border-yellow-500 hover:-translate-y-2 transition duration-300">
        <h3 className=" text-xl lg:text-3xl font-bold mb-3 lg:mb-4 text-white">
          Our Commitment
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
          We deliver legal services with integrity, confidentiality, and
          unwavering dedication.
        </p>
      </div>

    </div>
  </div>
</div>

     </section>
    )
}
    export default Aboutpage
       
