import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaClock,} from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Office Address",
      value: "123 Gandhi Street, Chennai, Tamil Nadu",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      value: "contact@elitejusticefirm.com",
    },
    {
      icon: <FaClock size={24} />,
      title: "Office Hours",
      value: "Mon - Sat : 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <section
      id="Contact"
     className="w-full py-14 lg:py-20 px-4 lg:px-6 bg-gradient-to-r from-slate-950 via-gray-900 to-black text-white scroll-mt-24" >
      <div className="w-[90%] max-w-[1500px] mx-auto">
       
        <p className="text-yellow-500 font-semibold text-lg lg:text-2xl tracking-widest text-center">
          CONTACT US
        </p>

        <h2 className="text-3xl lg:text-5xl font-bold text-center mt-4">
          Get Expert Legal Assistance
        </h2>

        <p className="text-gray-300 text-center mt-4 max-w-3xl mx-auto text-sm lg:text-lg leading-relaxed px-2">
          Have legal questions or need professional representation?
          Contact us today for trusted legal guidance and consultation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-10 lg:mt-16 items-center">
       
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index}
                className="bg-white/5 border border-yellow-500/20 rounded-2xl p-5 lg:p-6 hover:-translate-y-1 hover:border-yellow-400 
                transition-all duration-300"  >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-yellow-400 scale-90 lg:scale-100">{item.icon}</div>

                  <h3 className="text-lg lg:text-2xl font-semibold text-yellow-400">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-300 ml-8 lg:ml-10 text-sm lg:text-base">{item.value}</p>
              </div>
            ))}
          </div>

          <form className="bg-white rounded-2xl p-6 lg:p-10 shadow-2xl space-y-5">
            <input type="text" placeholder="Full Name"
            className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 text-black text-sm lg:text-base focus:outline-none
             focus:border-yellow-500"  />

            <input  type="email"placeholder="Email Address"
             className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 text-black text-sm lg:text-base focus:outline-none
              focus:border-yellow-500" />

            <input  type="text" placeholder="Phone Number"
           className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 text-black text-sm lg:text-base focus:outline-none focus:border-yellow-500"   />

            <textarea rows="5" placeholder="Your Message"
            className="w-full p-3 lg:p-4 rounded-xl border border-gray-300 text-black text-sm lg:text-base
             focus:outline-none focus:border-yellow-500 resize-none"  ></textarea>

            <button className="w-full bg-yellow-500 text-black py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg shadow-lg
             hover:bg-yellow-400 hover:shadow-yellow-500/40 hover:scale-[1.02] transition-all duration-300">
              Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;