import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,} from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

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
    <section id="Contact" className="  w-full py-14 lg:py-20 px-4 lg:px-6 bg-gradient-to-b from-[#F8F6F1] to-[#E2E8F0] text-slate-900 scroll-mt-24" >
      <div className="w-[90%] max-w-[1500px] mx-auto">
        {/* Small Heading */}
        <p className=" text-yellow-500 font-semibold text-lg lg:text-2xl tracking-widest text-center" >
          CONTACT US
        </p>

        {/* Main Heading */}
        <h2 className=" text-3xl lg:text-5xl font-bold text-center mt-4 text-[#0B1628]" >
          Get Expert Legal Assistance
        </h2>

        {/* Description */}
        <p className=" text-slate-600 text-center mt-4 max-w-3xl mx-auto text-sm lg:text-lg leading-relaxed px-2" >
          Have legal questions or need professional representation? Contact us
          today for trusted legal guidance and consultation.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-10 lg:mt-16 items-center">
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className=" bg-white border border-yellow-500/20 rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300" >
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon */}
                  <div className="text-yellow-500">{item.icon}</div>

                  {/* Title */}
                  <h3  className=" text-lg lg:text-2xl font-semibold text-[#0B1628]" >
                    {item.title}
                  </h3>
                </div>

                {/* Value */}
                <p  className=" text-slate-600 ml-8 lg:ml-10 text-sm lg:text-base" >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className=" hidden md:block bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 shadow-xl space-y-5" >
            <input type="text" placeholder="Full Name" className=" w-full p-3 lg:p-4
            rounded-xl border border-gray-300 text-black text-sm lg:text-base focus:outline-none focus:border-yellow-500" />

            <input type="email"  placeholder="Email Address" className="  w-full p-3 lg:p-4
              rounded-xl  border border-gray-300 text-black text-sm lg:text-base focus:outline-none focus:border-yellow-500" />

            <input  type="text" placeholder="Phone Number" className=" w-full p-3 lg:p-4 rounded-xl border border-gray-300 text-black
              text-sm lg:text-base focus:outline-none focus:border-yellow-500" />

            <textarea rows="5" placeholder="Your Message" className=" w-full p-3 lg:p-4 rounded-xl  border border-gray-300
              text-black text-sm lg:text-base focus:outline-none focus:border-yellow-500 resize-none" />

            <button className=" w-full bg-yellow-500 text-black py-3 lg:py-4 rounded-xl font-semibold font-serif text-base
                lg:text-lg shadow-lg hover:bg-yellow-600 hover:shadow-yellow-500/40 hover:scale-[1.02] transition-all  duration-300" >
              Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
