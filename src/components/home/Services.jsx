  
   function Services() {
  const services = [
    {
       image: "/images/civil.jpg",
      title: "Civil Law",
      description:
        "Handling disputes related to contracts, property, compensation, and civil rights.",
    },
    {
      image:"/images/criminal.jpg",
      title: "Criminal Law",
      description:
        "Providing strong defense and legal assistance in criminal matters.",
    },
    {
       image:"/images/family.jpg",
      title: "Family Law",
      description:
        "Legal support for guardianship, domestic matters, and family disputes.",
    },
    {
       image:"/images/divorce.jpg",
      title: "Divorce Cases",
      description:
        "Professional assistance for divorce, custody, and alimony cases.",
    },
    {
       image:"/images/property.jpg",
      title: "Property Disputes",
      description:
        "Resolving land disputes, ownership conflicts, and inheritance matters.",
    },
    {
       image:"/images/corporate.jpg",
      title: "Corporate Law",
      description:
        "Legal advisory for businesses, compliance, and corporate disputes.",
    },
    {
       image:"/images/legal.jpg",
      title: "Legal Consultation",
      description:
        "Expert consultation to understand legal rights and available actions.",
    },
    {
       image:"/images/doc.jpg",
      title: "Documentation & Agreements",
      description:
        "Drafting and reviewing contracts, agreements, and legal documents.",
    },
  ];

  return (
    
    <section id="Services" className="w-full py-20 px-10 bg-white scroll-mt-24"  >
      <div className="max-w-7xl mx-auto">
        <p className="text-yellow-600 font-semibold tracking-widest text-center text-2xl">
          OUR SERVICES
        </p>

        <h2 className="text-4xl font-bold text-center mt-4 text-slate-900">
          Comprehensive Legal Solutions
        </h2>

        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
          We provide expert legal guidance and strategic representation across
          multiple legal domains to protect your rights and interests.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
               <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-slate-900 h-16">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed h-30">
                {service.description}
              </p>
              <button className="mt-5 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:scale-105 transition">
      <a href="/Appointpage">  Book Appointment</a>
    </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Services