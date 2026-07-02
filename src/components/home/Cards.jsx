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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
            max-w-[340px] w-full mx-auto
            bg-white rounded-xl shadow-md p-5
            border-t-4 border-transparent
            hover:border-yellow-500
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300
            group
          "
        >
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={card.image}
              alt={card.title}
              className="
                w-full h-44 object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mt-4 min-h-[64px]">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mt-4 min-h-[120px] leading-relaxed">
            {card.description}
          </p>

          {/* Button */}
          <button className="mt-5 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:scale-105 transition">
            <a href="/Appointpage">Book Appointment</a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;