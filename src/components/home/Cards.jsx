function Card() {
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
    <section className="py-16 px-6 ">
      {/* Section Heading */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group relative
              w-[280px] h-[360px]
              mx-auto
              rounded-2xl
              overflow-hidden
              shadow-xl
              flex items-end
              p-6
              transition-all duration-500
              hover:-translate-y-4
            "
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute inset-0
                bg-black/70
                opacity-0
                group-hover:opacity-100
                transition duration-500
              "
            ></div>

            {/* Content */}
            <div
              className="
                relative z-10 text-white
                opacity-0
                translate-y-8
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>

              <p className="text-sm mt-3 leading-relaxed">
                {card.description}
              </p>

              <a href="/Appointpage">
                <button
                  className="
                    mt-5 px-4 py-2
                    bg-yellow-500
                    text-black
                    rounded-md
                    font-semibold
                    hover:bg-yellow-600
                    transition
                  "
                >
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;