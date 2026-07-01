import { motion } from "framer-motion";
function About() {
  return (
    <section id="About"className="w-full  py-28 px-12 bg-gray-300 scroll-mt-24 overflow-hidden" >
      <div className="max-w-7xl mx-auto flex items-center  gap-20">

     
        {/* <div className="w-1/2 flex justify-center"> */}
          {/* <img src="/images/lawyer2.png" alt="Lawyer" className="h-125 object-contain" /> */}
        {/* </div> */}

       <motion.div
  className="w-3/5 shrink-0"
  initial={{ opacity: 0, x:-100}}
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
          <a href="/Aboutpage" className="text-slate-600 text-xl font-bold"><p className="mt-10 underline ">Read More</p></a>
          
          </div>
</motion.div>
         
         <motion.div
  className="w-2/5 shrink-0"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 2 }}
  viewport={{ once: false, amount: 0.3 }}
><div className="relative w-md h-112">
           <div className=" absolute top-0 left-20 -translate-x-1/2 w-44 h-44 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
  <p className="text-center text-xl font-serif  px-3">
  Years of Experience
</p>
</div>

                   <div className=" absolute bottom-0 left-4 w-44 h-44 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">500+</h3>
  <p className="text-center font-serif text-xl px-3">cases handled</p>
</div>
          <div className=" absolute top-20 right-4 w-44 h-44 rounded-full bg-yellow-50 border-2 border-yellow-500 shadow-xl flex flex-col items-center justify-center">
  <h3 className="text-4xl font-bold text-yellow-500">98%</h3>
  <p className="text-center text-xl font-serif px-3">Success Rate</p>
</div>

          </div>
          </motion.div>
        </div>
      
    </section>
  );
}

export default About