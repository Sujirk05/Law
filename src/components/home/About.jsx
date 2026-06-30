import { motion } from "framer-motion";
function About() {
  return (
    <section id="About"className="w-full min-h-screen py-28 px-12 bg-gray-300 scroll-mt-24 overflow-hidden" >
      <div className="max-w-7xl mx-auto flex items-center  gap-40">

     
        {/* <div className="w-1/2 flex justify-center"> */}
          {/* <img src="/images/lawyer2.png" alt="Lawyer" className="h-125 object-contain" /> */}
        {/* </div> */}

       <motion.div
  className="w-1/2"
  initial={{ opacity: 0, x: -100}}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 2 }}
  viewport={{ once: false, amount: 0.3 }}
>
        <div className="">
          <p className="text-yellow-600 font-semibold tracking-widest text-2xl">   ABOUT US</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Dedicated to Justice, Committed to Excellence
          </h2>

          <p className="mt-6 text-gray-700 font-semibold text-lg leading-relaxed">
            At Incredible Law Chamber, we are committed to delivering exceptional
            legal services with integrity, professionalism, and unwavering
            dedication to justice.
          </p>

          <p className="mt-4 text-gray-700 text-lg font-semibold leading-relaxed">
            We provide strategic legal solutions tailored to individuals,
            families, and businesses while protecting rights and ensuring
            strong representation.
          </p>
          </div>
</motion.div>
         
         <motion.div
  className="w-1/2"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 2 }}
  viewport={{ once: false, amount: 0.3 }}
><div className="relative w-130 h-107">
           <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
  <p className="text-center text-sm px-3">
  Years of Experience
</p>
</div>

                   <div className=" absolute bottom-0 left-0 w-52 h-52 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
  <p className="text-center text-sm px-3">cases handled</p>
</div>
          <div className=" absolute bottom-0 right-0 w-52 h-52 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">98%</h3>
  <p className="text-center text-sm px-3">Success Rate</p>
</div>

          </div>
          </motion.div>
        </div>
      
    </section>
  );
}

export default About