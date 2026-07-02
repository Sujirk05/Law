 import Services from "../components/home/Services"
import { motion } from "framer-motion";
function Servicepage(){
    
    return(
        <section>
            {/* service hero section */}
       <div className="relative h-[50vh] min-h-[400px] text-white">

  <img  src="/images/hero3.jpg" alt="Legal Services" className="w-full h-full object-cover" />


  <div className="absolute inset-0 bg-black/75"></div>
<motion.div
  className="absolute inset-0 flex flex-col items-center justify-center -translate-y-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
   <h1
 className="text-4xl md:text-6xl font-bold text-white"
 style={{ fontFamily: "Cinzel" }}
>
  Our Services
</h1>

    <p className="mt-4 text-lg tracking-wide max-w-3xl text-center text-gray-200 ">
      Expert legal solutions tailored to your needs
    </p>
  </motion.div>

</div>

{/* service content section */}
             <div className="bg-gray-100 ">
                  <div className="grid md:grid-cols-2 items-center gap-10 p-16">
                    <div>
                        <motion.div
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
>
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Trusted Legal Guidance for Every Challenge </h1>
                      <h1 className="text-4xl font-bold mb-4 text-yellow-500">
  Protecting Your Rights with Confidence
</h1>        
                <p className="text-lg text-gray-700 font-semibold ">At Incredible Law Chamber, we are committed to delivering exceptional legal services with integrity, professionalism, and a client-centered approach. We understand that legal matters can be complex and emotionally challenging, which is why we focus on providing clear guidance, practical solutions, and strong representation at every stage. Whether you require legal consultation, dispute resolution, documentation, or courtroom advocacy, our experienced team works diligently to protect your rights and help you make informed decisions with confidence.</p>
     <button className="mt-5 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:scale-105 transition">
      <a href="/Appointpage">  Book Appointment </a></button>
    </motion.div>
      </div>

      <div className= " flex justify-center">
        <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
>
                 <img src="/images/bg.png" className="w-300 h-auto"/>      
      </motion.div>
             </div>
             
</div>
             </div>
             {/* service card section */}
             <Services/>  
                   
    
</section>
    )
} 
export default Servicepage