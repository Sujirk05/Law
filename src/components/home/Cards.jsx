function Cards() {
  const cards = [
    {
      image: "/images/civil.jpg",
      title: "Civil Law",
      description:
        "Handling disputes related to contracts, property, compensation, and civil rights.",
    },
    {
      image: "/images/criminal.jpg",
      title: "Criminal Law",
      description:
        "Providing strong defense and legal assistance in criminal matters.",
    },
    {
      image: "/images/family.jpg",
      title: "Family Law",
      description:
        "Legal support for guardianship, domestic matters, and family disputes.",
    },
    {
      image: "/images/divorce.jpg",
      title: "Divorce Cases",
      description:
        "Professional assistance for divorce, custody, and alimony cases.",
    },
    {
      image: "/images/property.jpg",
      title: "Property Disputes",
      description:
        "Resolving land disputes, ownership conflicts, and inheritance matters.",
    },
    {
      image: "/images/corporate.jpg",
      title: "Corporate Law",
      description:
        "Legal advisory for businesses, compliance, and corporate disputes.",
    },
    {
      image: "/images/legal.jpg",
      title: "Legal Consultation",
      description:
        "Expert consultation to understand legal rights and available actions.",
    },
    {
      image: "/images/doc.jpg",
      title: "Documentation & Agreements",
      description:
        "Drafting and reviewing contracts, agreements, and legal documents.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-3">
          Our Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Legal Services We Offer
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-relaxed">
          We provide comprehensive legal assistance across multiple practice
          areas, delivering trusted advice, strong representation, and
          practical legal solutions tailored to every client.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                border-t-4 border-yellow-500
                hover:shadow-2xl
                hover:-translate-y-3
                transition duration-300
                flex flex-col
              "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 min-h-[48px]">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed flex-grow">
                  {card.description}
                </p>

                <a href="/Appointpage" className="mt-5">
                  <button className="w-full bg-yellow-500 text-black py-2.5 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300">
                    Book Appointment
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;