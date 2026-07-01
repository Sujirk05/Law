import { motion } from "framer-motion";
function Aboutpage() {
    return(
       <section >
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


    <div className="bg-gray-200 max-w-full mx-auto py-12 px-6 ">
        <div className="max-w-6xl mx-auto  py-12 px-6  ">
            <div className="grid md:grid-cols-2 gap-16 items-center">
           <div>   
        <p className="text-xl font-bold mb-6">Founder & Principal Advocate</p>
        <p className="text-4xl font-bold text-yellow-500 mb-4">Mrs. Meera Krishnan</p>
        <p className="text-lg text-gray-700 font-semibold mb-4">Legal Consultant | Senior Mediator</p>
        <p className="text-lg text-gray-700 font-semibold">Advocate Meera Krishnan is the Founder and Principal Advocate of Incredible Law Chamber, bringing over 15 years of distinguished experience in the legal profession. With a strong foundation in litigation, advisory services, and dispute resolution, she has built a reputation for delivering trusted legal counsel with integrity and professionalism.</p>
    </div>
    </div>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">
  <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center  hover:-translate-y-2 transition duration-300">
    <h3 className="text-xl font-semibold text-gray-700">Professional Integrity</h3>
    
        </div>
            <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center  hover:-translate-y-2 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700">Leadership Excellence</h3>
               
        </div>
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center  hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Legal Expertise</h3>
            
        </div>
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center  hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-700">Client Commitment</h3>
           
        </div>
    </div>
       </div>
</div>
     <div className="flex gap-100 mb-12 mt-5">
<div className="mt-8 mb-4 ml-10">
    <h1 className="text-black font-bold text-4xl ">Why Choose Us?</h1>

    <div className="grid grid-rows-2 md:grid-rows-4 gap-4 mt-4">

    <div className="text-gray-600 w-100 h-16 rounded-lg shadow-md p-4 ">
    <p className="">Expert Legal Guidance</p>
    </div>

    <div className="text-gray-600 w-100 h-16 rounded-lg shadow-md p-4">
    <p>Experienced Representation</p>
    </div>

<div className="text-gray-600 w-100 h-16 rounded-lg shadow-md p-4 ">
    <p>Client-Centered Approach</p>
    </div>

    <div className="text-gray-600 w-100 h-16 rounded-lg shadow-md p-4">
        <p>Dedicated Support</p>
    </div>

    <div className="text-gray-600 w-100 h-16 rounded-lg shadow-md p-4"> 
        <p>Integrity & Confidentiality</p>
    </div>

    </div>

</div>

<div className="grid grid-rows-3 md:grid-row-3 gap-4 mt-4 max-w-4xl ">

<div className="bg-gray  rounded-xl shadow-md p-6 ">
  <h3 className="text-2xl font-bold mb-3 text-gray-800">
    Our Vision
  </h3>

  <p className="text-gray-600 leading-relaxed">
    To be a trusted and respected legal institution recognized for
    excellence, integrity, and unwavering commitment to justice,
    delivering reliable legal solutions to every client.
  </p>
</div>

<div className="bg-grey  rounded-xl shadow-md p-6 " >
    <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h3>
    <p className='text-gray-600 leading-relaxed'>Our mission is to provide reliable, client-focused, and result-oriented legal services 
        through expert guidance,    strategic representation, and ethical legal practice.</p>
</div>

<div className="bg-grey  rounded-xl shadow-md p-6 " >
    <h3 className="text-2xl font-bold mb-3 text-gray-800 ">Our Commitment</h3>
    <p className='text-gray-600 leading-relaxed'>At Incredible Law Chamber, we are committed to delivering legal services with integrity, confidentiality, and unwavering dedication. </p>
</div>

</div>

</div>



     </section>
    )
}
    export default Aboutpage
       
