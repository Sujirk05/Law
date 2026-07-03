import { motion } from "framer-motion";
function Aboutpage() {
    return(
       <section >
        {/* about hero section */}
          <div className="relative h-[400px] text-white">

              <img  src="/images/hero.jpg" className="w-full h-full object-cover"/>
  <div className="absolute inset-0 bg-black/75"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute inset-0 flex flex-col items-center justify-center"
>
    <h1  className="text-6xl font-bold text-white"   style={{ fontFamily: "cinzel" }}  >
      About Incredible Law Chamber
    </h1>
      <p className="mt-4 text-lg tracking-wide max-w-3xl text-center text-gray-200">
        Advocating Justice. Protecting Rights. Delivering Results.
      </p>
      
      </motion.div>
  </div>
</div>

{/* about content section */}
<div className="bg-gray-100 py-12">
  <div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
      
 <div className="py-12">
       <h1 className="uppercase tracking-[3px] text-lg font-semibold text-yellow-500 mb-4">
  About Us
</h1>
       <h2 className="text-5xl font-bold leading-tight text-slate-900">
  Dedicated to Justice,
  <span className="block text-yellow-500">
    Committed to Excellence
  </span>
</h2>
        <div className="flex gap-10 mt-8">
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
  <p className="text-gray-600">Years Experience</p>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
  <p className="text-gray-600">Cases Handled</p>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.08 }}
>
  <h3 className="text-3xl font-bold text-yellow-500">98%</h3>
  <p className="text-gray-600">Success Rate</p>
</motion.div>
          </div>
      </div>

   
<div className="border-l-4 border-yellow-500 pl-6">
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to Incredible Law Chamber, a trusted legal practice committed
          to delivering professional, ethical, and result-oriented legal
          services. 
        </p>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          At Incredible Law Chamber, we understand that legal matters can be
          complex and challenging. Our mission is to provide clear legal
          solutions, strategic advice.
        </p>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          We are committed to maintaining the highest standards of integrity,
          confidentiality, and professionalism in every case we handle.
        </p>
        <p className="italic text-yellow-600 font-medium mt-6">
  “Justice with integrity, advocacy with excellence.”
</p>
        </motion.div>
      </div>

    </div>
  </div>
</div>

{/* about lawyer     */}
    <div className="bg-gray-200 max-w-full mx-auto py-12 px-6 ">
        <div className="max-w-6xl mx-auto  py-12 px-6  ">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
       <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
        <p className="uppercase tracking-[3px] text-sm font-semibold text-yellow-500 mb-4">Founder & Principal Advocate</p>
        <p className="text-5xl font-bold text-slate-900 mb-4">Mrs. Meera Krishnan</p>
        <p className="text-lg text-gray-500 font-medium mb-4">Legal Consultant | Senior Mediator</p>
        <p className="text-lg  leading-relaxed text-gray-700">Advocate Meera Krishnan is the Founder and Principal Advocate of Incredible Law Chamber, bringing over 15 years of distinguished experience in the legal profession. With a strong foundation in litigation, advisory services, and dispute resolution, she has built a reputation for delivering trusted legal counsel with integrity and professionalism.</p>

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
      className="w-full h-[400px] object-cover"
      alt="Law books"
    />
  </motion.div>

    </div>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 ">
  <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  <img src="./images/shield.png" alt="Integrity" className="mx-auto mb-4 w-12 h-12" />

    <h3 className="text-xl font-semibold text-gray-700">Professional Integrity</h3>
    </motion.div>
        </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-yellow-500 text-center hover:-translate-y-2 transition duration-300">
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <img src="./images/crown.png" alt="Leadership" className="mx-auto mb-4 w-12 h-12" />
                <h3 className="text-xl font-semibold text-gray-700">Leadership Excellence</h3>
      </motion.div>        
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-yellow-500 text-center  hover:-translate-y-2 transition duration-300">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <img src="./images/scale.png" alt="Legal Expertise" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-700">Legal Expertise</h3>
           </motion.div> 
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-yellow-500 text-center  hover:-translate-y-2 transition duration-300">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  <img src="./images/hand.png" alt="Client Commitment" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-700">Client Commitment</h3>
       </motion.div>    
        </div>
    </div>
       </div>
</div>

{/* why choose us section */}
<div className="bg-slate-100 py-16 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

   
    <div>
      <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-3">
        WHY CHOOSE US
      </p>

      <h1 className="text-slate-900 font-bold text-5xl leading-tight">
        Trusted Legal Excellence
      </h1>

      <div className="grid mt-8 gap-5">

        <div className="w-full bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 hover:translate-x-2 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 font-medium text-lg">
            Expert Legal Guidance
          </p>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 hover:translate-x-2 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 font-medium text-lg">
            Experienced Representation
          </p>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 hover:translate-x-2 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 font-medium text-lg">
            Client-Centered Approach
          </p>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 hover:translate-x-2 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 font-medium text-lg">
            Dedicated Support
          </p>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500 hover:translate-x-2 hover:shadow-xl transition duration-300">
          <p className="text-gray-700 font-medium text-lg">
            Integrity & Confidentiality
          </p>
        </div>

      </div>
    </div>

   
    <div className="grid gap-6">

      <div className="bg-slate-900 rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500 hover:-translate-x-2 transition duration-300">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Our Vision
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          To be a trusted and respected legal institution recognized for
          excellence, integrity, and unwavering commitment to justice,
          delivering reliable legal solutions to every client.
        </p>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500 hover:-translate-x-2 transition duration-300">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Our Mission
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          Our mission is to provide reliable, client-focused, and
          result-oriented legal services through expert guidance,
          strategic representation, and ethical legal practice.
        </p>
      </div>

      <div className="bg-slate-900 rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500 hover:-translate-x-2 transition duration-300">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Our Commitment
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg">
          At Incredible Law Chamber, we are committed to delivering legal
          services with integrity, confidentiality, and unwavering dedication.
        </p>
      </div>

    </div>
  </div>
</div>
     </section>
    )
}
    export default Aboutpage
       
