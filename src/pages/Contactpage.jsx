import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
function Contactpage() {
    return(
        <section>
            {/* Contact Page Hero Section */}
                <div className="relative h-[400px] text-white">
              <img src="/images/hero4.jpg" alt="Contact Us" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/75"></div>
<motion.div
  className="absolute inset-0 flex flex-col items-center justify-center -translate-y-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
            
    <h1 className="text-6xl font-bold text-white"  style={{ fontFamily: "cinzel" }} >Contact Us</h1>
                <p className="mt-4 text-lg tracking-wide max-w-3xl text-center text-gray-200">Get trusted legal guidance tailored to your needs. Reach out today to schedule a consultation.</p> 
             </motion.div>
              </div> 
{/* contact card section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-4">
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                    <a  href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                   <img src="/images/phone.svg" className="w-10 h-10 mx-auto" />       
                    <p className="text-xl font-bold text-gray-700">Call Us</p>
                  <h2 >+91 98765 43210</h2></a>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                    <a href="mailto:contact@incredible.com">
                    <img src="/images/gmail.png" className="w-10 h-10 mx-auto"/>
                    <p className="text-xl font-semibold text-gray-700">Email </p>
                    <h2 >contact@incredible.com</h2></a>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                     <img src="/images/map.svg" className="w-10 h-10 mx-auto"/>
                    <p className="text-xl font-semibold text-gray-700"> Address</p>
                    <h2 >123 Gandhi Street, Chennai, Tamil Nadu</h2>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                       <img src="/images/time.png" className="w-10 h-10 mx-auto"/>
                    <p className="text-xl font-semibold text-gray-700">Working Hours</p>
                    <h2 >Mon - Sat : 9:00 AM - 7:00 PM</h2>
                </div>
              </div>

              {/* contact form section */}
        <div className="flex gap-8 p-4">
              <div className="bg-white flex-1 p-8 rounded-2xl shadow-2xl mt-16 mb-16 animate-slideRight">
         <div className="text-center">
                <h1 className="font-bold text-slate-600 text-4xl">Discuss Your Legal Matter</h1>
                <p className="font-semibold text-slate-400">Fill out the form below and our team will get back to you as soon as possible.</p>
                </div>
                <form className="mt-8" >
                    <div className="flex gap-4">
                    <label className="mb-2 font-medium w-32 mt-6">First Name</label><input type="text" placeholder=" First Name" className=" flex-2 border border-gray-300 outline-none pl-3"></input>
                    <label  className="mb-2 font-medium w-32 mt-6">Last Name</label> <input type="text" placeholder=" Last Name" className=" flex-2 border border-gray-300 outline-none pl-3"></input>
                   </div>
                    <div className="flex gap-4 mt-4">
                        <label  className="mb-2 font-medium w-32 mt-6">Email</label><input type="email" placeholder=" Email" className="flex-1 border border-gray-300 outline-none pl-3"></input>
                    </div>
                    <div  className="flex mt-4 gap-4">

                        <label  className="mb-2 font-medium w-32 mt-6">Phone Number</label><input type="tel" placeholder=" Phone Number" className="flex-1 border border-gray-300 outline-none pl-3 "></input>
                    </div>
                    <div  className="flex mt-4 gap-4">
                        <label  className="mb-2 font-medium w-32 mt-6">Message</label><textarea rows="5"  placeholder=" Message" className="flex-1 border border-gray-300 outline-none px-2 py-2"></textarea>
                    </div>
                    <div>
                        <button className="bg-yellow-400 rounded-2xl p-4 font-medium mt-6 w-full hover:bg-yellow-500 transition">Send Message </button>
                    </div>
                    
                </form>
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden  mt-16 mb-16"> 
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.682017621117!2d80.11520271154129!3d13.040731950884956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261ba19a176f1%3A0x1e5ce1e2c0ff67e4!2sKattupakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782799264330!5m2!1sen!2sin" width="100%" height="550" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe> 
                    </div>
             </div>
             
        </section>
    )
}
export default Contactpage