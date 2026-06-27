function Contact() {
  return (
    <section
      id="Contact"
      className="w-full py-20 px-10 bg-slate-600 text-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        
        <p className="text-yellow-600 font-semibold text-2xl tracking-widest  text-center">
          CONTACT US
        </p>

        <h2 className="text-4xl font-bold text-center mt-4">
          Get Expert Legal Assistance
        </h2>

        <p className="text-gray-300 text-center mt-4 max-w-3xl mx-auto">
          Have legal questions or need professional representation?
          Contact us today for trusted legal guidance and consultation.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-14">

       
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 "style={{ fontFamily:"Rubik"}}>
                Office Address
              </h3>
              <p className="text-gray-300 mt-2">
                123 Gandhi Street, Chennai, Tamil Nadu
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400" style={{fontFamily:"Rubik"}}>
                Phone
              </h3>
              <p className="text-gray-300 mt-2">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400" style={{fontFamily:"Rubik"}}>
                Email
              </h3>
              <p className="text-gray-300 mt-2">
                contact@elitejusticefirm.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-yellow-400" style={{fontFamily:"Rubik"}}>
                Office Hours
              </h3>
              <p className="text-gray-300 mt-2">
                Mon - Sat : 9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

        
          <form className="bg-white rounded-xl p-8 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg border text-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg border text-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg border text-black"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border text-black"
            ></textarea>

            <button
              className="bg-yellow-500 text-black px-6 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;

