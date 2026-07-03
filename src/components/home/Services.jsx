import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      image: "/images/civil.jpg",
      title: "Civil Law",
      description:
        "Contract disputes, compensation, property conflicts, and civil rights.",
    },
    {
      image: "/images/criminal.jpg",
      title: "Criminal Law",
      description:
        "Strong legal defense and representation in criminal matters.",
    },
    {
      image: "/images/family.jpg",
      title: "Family Law",
      description:
        "Support for guardianship, domestic issues, and family disputes.",
    },
    {
      image: "/images/divorce.jpg",
      title: "Divorce Cases",
      description:
        "Legal guidance for divorce, custody, and alimony matters.",
    },
    {
      image: "/images/property.jpg",
      title: "Property Disputes",
      description:
        "Land ownership conflicts, inheritance, and property claims.",
    },
    {
      image: "/images/corporate.jpg",
      title: "Corporate Law",
      description:
        "Business compliance, advisory, and corporate dispute resolution.",
    },
    {
      image: "/images/legal.jpg",
      title: "Legal Consultation",
      description:
        "Expert consultation to understand your legal rights.",
    },
    {
      image: "/images/doc.jpg",
      title: "Documentation & Agreements",
      description:
        "Drafting and reviewing contracts and legal documents.",
    },
  ];

  return (
    <section
      id="Services"
      className="w-full py-24 px-6 bg-gradient-to-b from-white to-slate-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-yellow-600 font-semibold tracking-[4px] text-center text-xl">
          OUR SERVICES
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 text-slate-900">
          Comprehensive Legal Solutions
        </h2>

        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          We provide expert legal guidance and strategic representation across
          multiple legal domains to protect your rights and interests.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-[440px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-200 mt-4 text-lg leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to="/Appointpage"
                  className="mt-6 inline-flex items-center gap-2 text-yellow-400 font-semibold text-lg group-hover:gap-3 transition-all duration-300"
                >
                  Book Consultation →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;