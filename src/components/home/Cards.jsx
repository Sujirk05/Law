import { useRef, useEffect } from "react";

function Cards() {

  const cards = [
    {
      image: "/images/civil.webp",
      title: "Civil Law",
      description:
        "Handling disputes related to contracts, property, compensation, and civil rights.",
    },
    {
      image: "/images/criminal.webp",
      title: "Criminal Law",
      description:
        "Providing strong defense and legal assistance in criminal matters.",
    },
    {
      image: "/images/family.webp",
      title: "Family Law",
      description:
        "Legal support for guardianship, domestic matters, and family disputes.",
    },
    {
      image: "/images/divorce.webp",
      title: "Divorce Cases",
      description:
        "Professional assistance for divorce, custody, and alimony cases.",
    },
    {
      image: "/images/property.webp",
      title: "Property Disputes",
      description:
        "Resolving land disputes, ownership conflicts, and inheritance matters.",
    },
    {
      image: "/images/corporate.webp",
      title: "Corporate Law",
      description:
        "Legal advisory for businesses, compliance, and corporate disputes.",
    },
    {
      image: "/images/legal.webp",
      title: "Legal Consultation",
      description:
        "Expert consultation to understand legal rights and available actions.",
    },
    {
      image: "/images/doc.webp",
      title: "Documentation & Agreements",
      description:
        "Drafting and reviewing contracts, agreements, and legal documents.",
    },
  ];
const infiniteCards = [...cards, ...cards];

const scrollRef = useRef(null);
const intervalRef = useRef(null);

const stopAutoScroll = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};

const startAutoScroll = () => {
  stopAutoScroll();
  intervalRef.current = setInterval(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth =
      container.firstChild.offsetWidth + 20;
    container.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
    if (
      container.scrollLeft >=
      container.scrollWidth / 2
    ) {
    setTimeout(() => {
        container.style.scrollBehavior = "auto";
        container.scrollLeft =
          container.scrollLeft -
          container.scrollWidth / 2;
        container.style.scrollBehavior = "smooth";
      }, 400);
    }
  }, 2200);
};

useEffect(() => {
  startAutoScroll();
  return () => {
    stopAutoScroll();
  };
}, []);
return (
    <section className="py-12 lg:py-20 px-4 lg:px-6 bg-white">
      {/* Heading */}
      <div className="text-center mb-10 lg:mb-14">
        <p className="text-yellow-500 font-semibold uppercase tracking-[2px] lg:tracking-[3px] text-sm lg:text-base mb-3">
          Our Expertise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Legal Services We Offer
        </h2>
        <p className="max-w-3xl mx-auto mt-4 lg:mt-6 text-base lg:text-lg text-gray-600 leading-relaxed px-2">
          We provide comprehensive legal assistance across multiple practice
          areas, delivering trusted advice, strong representation, and
          practical legal solutions tailored to every client.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* MOBILE */}
{/* MOBILE */}
<div className="md:hidden">

  <div ref={scrollRef}  onTouchStart={stopAutoScroll}  onTouchEnd={() => { setTimeout(() => {  startAutoScroll();  }, 800);}}
    className=" flex gap-5 overflow-x-auto snap-x snap-mandatoryscroll-smoothpb-3 px-1 scrollbar-hide " >

    {infiniteCards.map((card, index) => (
      <div key={index} className="snap-center shrink-0  w-[88%] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100" >

        <img src={card.image}alt={card.title} loading="lazy" className="  w-full h-56 object-cover" />
        <div className="p-5">
          <h3 className=" text-xl font-bold text-slate-900 ">  {card.title} </h3>
          <p className="  mt-3 text-gray-600 text-[15px] leading-7 "> {card.description} </p>
           <a href="/Appointpage">
          <button className=" mt-6 w-full rounded-2xl bg-yellow-500 py-3 font-semibold font-serif hover:bg-yellow-400 transition " >
              Book Appointment </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card,index)=>(
            <div key={index} className=" bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-yellow-500 hover:shadow-2xl 
             hover:-translate-y-3 transition duration-300 flex flex-col "  >

              <img src={card.image} alt={card.title} loading="lazy" className="w-full h-52 lg:h-44 object-cover" />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 min-h-[48px]">
                  {card.title}
                </h3>
                <p className="text-gray-600 mt-4 leading-relaxed flex-grow">
                  {card.description}
                </p>
                <a href="/Appointpage" className="mt-5">
                  <button className=" w-full bg-yellow-500text-black py-3 rounded-xl font-semibold font-serif hover:bg-yellow-400 transition " >
                    Book Appointment </button> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Cards;