import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      image: "/images/civil.webp",
      title: "Civil Law",
      description:
        "Contract disputes, compensation, property conflicts, and civil rights.",
    },
    {
      image: "/images/criminal.webp",
      title: "Criminal Law",
      description:
        "Strong legal defense and representation in criminal matters.",
    },
    {
      image: "/images/family.webp",
      title: "Family Law",
      description:
        "Support for guardianship, domestic issues, and family disputes.",
    },
    {
      image: "/images/divorce.webp",
      title: "Divorce Cases",
      description:
        "Legal guidance for divorce, custody, and alimony matters.",
    },
    {
      image: "/images/property.webp",
      title: "Property Disputes",
      description:
        "Land ownership conflicts, inheritance, and property claims.",
    },
    {
      image: "/images/corporate.webp",
      title: "Corporate Law",
      description:
        "Business compliance, advisory, and corporate dispute resolution.",
    },
    {
      image: "/images/legal.webp",
      title: "Legal Consultation",
      description:
        "Expert consultation to understand your legal rights.",
    },
    {
      image: "/images/doc.webp",
      title: "Documentation & Agreements",
      description:
        "Drafting and reviewing contracts and legal documents.",
    },
  ];

  return (
    <section  id="Services"
      className="w-full py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-100 scroll-mt-24" >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-yellow-600 font-semibold tracking-[4px] text-center text-xl">  OUR SERVICES  </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mt-4 text-slate-900"> Comprehensive Legal Solutions</h2>

        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-base lg:text-lg leading-relaxed">
          We provide expert legal guidance and strategic representation across
          multiple legal domains to protect your rights and interests.
        </p>

        {/* ================= Desktop ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            className="group relative h-[360px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden shadow-lg cursor-pointer 
            transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl " >
              <img src={service.image} alt={service.title}   loading="lazy"
               className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"/>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white">  {service.title} </h3>

                <p className="text-gray-200 mt-4 text-lg leading-relaxed">  {service.description}</p>

                <Link to="/Appointpage">
               <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-serif font-semibold rounded-xl hover:scale-105 transition duration-300">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Mobile ================= */}
        <div className="grid grid-cols-2 gap-4 mt-10 md:hidden">
          {services.map((service, index) => (
            <Link  key={index} to="/Servicepage"
              data-aos="fade-up"  data-aos-delay={index * 80}   className="group" >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-48">
                <img src={service.image} alt={service.title}   loading="lazy"
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-500" />

                <div className="px-3 py-3">
                  <h3 className="text-sm font-semibold text-gray-900 leading-5 min-h-[44px]">  {service.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="md:hidden mt-8 flex justify-center">
          <Link to="/Servicepage">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold font-serif rounded-full hover:scale-105 transition duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;