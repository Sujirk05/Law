import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
function Contactpage() {
    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Your form logic here
    console.log("Form submitted");
  };
    return(
        <section>
            {/* Contact Page Hero Section */}
                <div className="relative h-[280px] lg:h-[400px] text-white">
              <img src="/images/hero4.jpg" alt="Contact Us" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-black/75"></div>
<motion.div
  className="absolute inset-0 flex flex-col items-center justify-center px-4 lg:-translate-y-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
            
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center"  style={{ fontFamily: "cinzel" }} >Contact Us</h1>
                <p className="mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg tracking-wide max-w-3xl text-center text-gray-200 px-4">Get trusted legal guidance tailored to your needs. Reach out today to schedule a consultation.</p> 
             </motion.div>
              </div> 
{/* contact card section */}
   <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8">
                <div className="bg-gray-100 rounded-xl shadow-md p-5 lg:p-6 text-center hover:-translate-y-2 transition duration-300">
                    <a  href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                   <img src="/images/phone.svg" className="w-8 h-8 lg:w-10 lg:h-10 mx-auto" />       
                    <p className="text-lg lg:text-xl font-bold text-gray-700 mt-3">Call Us</p>
                  <h2 className="text-sm lg:text-base text-gray-600 mt-2 leading-relaxed" >+91 98765 43210</h2></a>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-5 lg:p-6 text-center hover:-translate-y-2 transition duration-300">
                    <a href="mailto:contact@incredible.com">
                    <img src="/images/gmail.png" className="w-8 h-8 lg:w-10 lg:h-10 mx-auto"/>
                    <p className="text-lg lg:text-xl font-bold text-gray-700 mt-3">Email </p>
                    <h2 className="text-sm lg:text-base text-gray-600 mt-2 leading-relaxed" >contact@incredible.com</h2></a>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-5 lg:p-6 text-center hover:-translate-y-2 transition duration-300">
                     <img src="/images/map.svg" className="w-8 h-8 lg:w-10 lg:h-10 mx-auto"/>
                    <p className="text-lg lg:text-xl font-bold text-gray-700 mt-3"> Address</p>
                    <h2 className="text-sm lg:text-base text-gray-600 mt-2 leading-relaxed" >123 Gandhi Street, Chennai, Tamil Nadu</h2>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-5 lg:p-6 text-center hover:-translate-y-2 transition duration-300">
                       <img src="/images/time.png" className="w-8 h-8 lg:w-10 lg:h-10 mx-auto"/>
                    <p className="text-lg lg:text-xl font-bold text-gray-700 mt-3">Working Hours</p>
                    <h2  className="text-sm lg:text-base text-gray-600 mt-2 leading-relaxed">Mon - Sat : 9:00 AM - 7:00 PM</h2>
                </div>
              </div>
</div>
              {/* contact form section */}
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
  <div className="flex flex-col lg:flex-row gap-8">
              <div className="bg-white flex-1 p-5 lg:p-8 rounded-2xl shadow-2xl mt-10 lg:mt-16 mb-6 lg:mb-16 animate-slideRight">
         <div className="text-center">
                <h1 className="font-bold text-slate-600 text-2xl lg:text-4xl">Discuss Your Legal Matter</h1>
                <p className="font-semibold text-slate-400  text-sm lg:text-base mt-2">Fill out the form below and our team will get back to you as soon as possible.</p>
                </div>
                <form className="mt-8" onSubmit={handleSubmit} >
                    <div className="flex flex-col lg:flex-row gap-4">
                    <label className="font-medium lg:w-32 mt-4 lg:mt-6">First Name</label><input type="text" placeholder=" First Name" className="flex-1 border border-gray-300 outline-none pl-3 py-3 rounded-lg"></input>
                    <label  className="font-medium lg:w-32 mt-4 lg:mt-6">Last Name</label> <input type="text" placeholder=" Last Name" className="flex-1 border border-gray-300 outline-none pl-3 py-3 rounded-lg"></input>
                   </div>
                    <div className="flex flex-col lg:flex-row gap-4 mt-4">
                        <label className="font-medium lg:w-32 mt-4 lg:mt-6">Email</label><input type="email" placeholder=" Email" className="flex-1 border border-gray-300 outline-none pl-3 py-3 rounded-lg"></input>
                    </div>
                    <div  className="flex flex-col lg:flex-row mt-4 gap-4">

                        <label  className="font-medium lg:w-32 mt-4 lg:mt-6">Phone Number</label><input type="tel" placeholder=" Phone Number" className="flex-1 border border-gray-300 outline-none pl-3 py-3 rounded-lg"></input>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-4 gap-4">
                        <label  className="font-medium lg:w-32 mt-4 lg:mt-6">Message</label><textarea rows="5"  placeholder=" Message" className="flex-1 border border-gray-300 outline-none px-3 py-3 rounded-lg"></textarea>
                    </div>
                    <div>
                        <button className="bg-yellow-400 rounded-2xl py-3 lg:py-4 font-medium mt-6 w-full hover:bg-yellow-500 transition">Send Message </button>
                    </div>
                    
                </form>
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden mt-0 lg:mt-16 mb-10 lg:mb-16"> 
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.682017621117!2d80.11520271154129!3d13.040731950884956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261ba19a176f1%3A0x1e5ce1e2c0ff67e4!2sKattupakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1782799264330!5m2!1sen!2sin" width="100% "className="w-full h-[350px] lg:h-[550px]" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe> 
                    </div>
             </div></div>
             
        </section>
    )
}
export default Contactpage