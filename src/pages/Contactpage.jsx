import { FaWhatsapp } from "react-icons/fa";
function Contactpage() {
    return(
        <section>
             < div className="bg-gray-400 text-white py-10 ">  
              <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500" style={{fontFamily:"cinzel"}}>Contact Us</h1>
              <p className="text-2xl font-semibold text-center text-slate-600">Get trusted legal guidance tailored to your needs. Reach out today to schedule a consultation.</p> 
              </div> 

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                    <img src="/images/phone.svg" className="w-10 h-10 mx-auto" />
                    <p className="text-xl font-bold text-gray-700">Call Us</p>
                  <h2 >+91 98765 43210</h2>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                    <img src="/images/gmail.png" className="w-10 h-10 mx-auto"/>
                    <p className="text-xl font-semibold text-gray-700">Email </p>
                    <h2 >contact@incredible.com</h2>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                   
                    <p className="text-xl font-semibold text-gray-700"> Address</p>
                    <h2 >123 Gandhi Street, Chennai, Tamil Nadu</h2>
                </div>
                <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300">
                    <p className="text-xl font-semibold text-gray-700">Working Hours</p>
                    <h2 >Mon - Sat : 9:00 AM - 7:00 PM</h2>
                </div>

              </div>
        </section>
    )
}
export default Contactpage