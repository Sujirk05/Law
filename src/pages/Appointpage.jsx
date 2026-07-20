import { motion } from "framer-motion";
import bookhero from "/images/hero5.webp"
function Appointpage(){
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form logic here
    console.log("Form submitted");
  };
    return(
       <>
           {/* Book Appointment Hero Section */}

<header className="relative h-[200px] sm:h-[240px] lg:h-[350px] text-white">

  <img src={bookhero} alt="Book Appointment" className="w-full h-full object-cover"/>

  <div className="absolute inset-0 bg-black/75"></div>

  <motion.div
    className="
    absolute inset-0
    flex flex-col
    items-center
    justify-center
    px-4
    lg:-translate-y-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} >

    <h1 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-white  text-center" >
      Book an Appointment
    </h1>
    <p className=" mt-2 lg:mt-5 text-xs sm:text-baselg:text-xl text-gray-200 text-center" >
      Schedule a confidential consultation with our legal experts
    </p>
  </motion.div>
</header>

{/* book appointment form section */}
<section className="bg-gray-100 py-12 lg:py-16 px-4 lg:px-6">
        <motion.form
         className="max-w-5xl mx-auto bg-white p-5 lg:p-10 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}  >
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl text-slate-700 font-bold">
              Appointment Details
            </h1>
            <p className="text-slate-400 mt-3 lg:mt-4 font-medium text-sm lg:text-lg">
              Fill in your details and we will get back to you soon.
            </p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
           
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Name</label>
              <input type="text" placeholder="Full Name" className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"    />
            </div>

                <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Phone Number</label>
              <input  type="tel"  placeholder="Phone Number"  className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base" />
            </div>
       
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Email Address</label>
              <input  type="email"  placeholder="Email Address" className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"    />
            </div>

        
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">
                Consultation Mode
              </label>
              <select   defaultValue=""  className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"   >
                <option value="" disabled>
                  Select
                </option>
                <option>In-person</option>
                <option>Phone call</option>
                <option>Video call</option>
              </select>
            </div>
           
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Date</label>
              <input
                type="date" className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"
              />
            </div>
         
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Time</label>
              <input
                type="time"
               className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm lg:text-base">Location</label>
              <input type="text" placeholder="Location" className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"     />
            </div>
         <div >
            <label className="block mb-2 font-medium text-sm lg:text-base">
              Select Legal Service
            </label>
            <select
              defaultValue=""
              className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base" >
              <option value="" disabled>
                Select
              </option>
              <option>Civil Law</option>
              <option>Criminal Law</option>
              <option>Family Law</option>
              <option>Divorce Cases</option>
              <option>Property Disputes</option>
              <option>Corporate Law</option>
              <option>Legal Consultation</option>
              <option>Documentation & Agreements</option>
            </select>
          </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium text-sm lg:text-base">
              Case Description
            </label>
            <textarea
              rows="5"
            className="w-full p-3 lg:p-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 text-sm lg:text-base"
            ></textarea>
          </div>

          <div className="mt-6">
            <label className="block mb-2 font-medium text-sm lg:text-base">
              Have You Consulted Another Lawyer Before?
            </label>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
              <label>
                <input type="radio" name="select" className="mr-2" />
                Yes
              </label>

              <label>
                <input type="radio" name="select" className="mr-2" />
                No
              </label>
            </div>
          </div>

          <div className="mt-6">
            <label className="flex items-start gap-3 font-medium text-sm lg:text-base">
              <input type="checkbox" />
              I agree to share my information for consultation purposes.
            </label>
          </div>

          <button
           className="py-3 lg:py-4 w-full bg-yellow-500 rounded-lg font-semibold font-serif text-sm lg:text-base hover:bg-yellow-600 
           hover:-translate-y-1 transition duration-300 mt-8 lg:mt-10"  >
            Book Appointment
          </button>
        </motion.form>
      </section>
    </>
    )
}
export default Appointpage