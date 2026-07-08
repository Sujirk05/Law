import { useState } from "react";
import { motion } from "framer-motion";

function Test() {
  const test = [
    {
      name: "Priya S",
      service: "Family Law Client",
      star: 5,
      image: "./images/img1.jpg",
      description:
        "The legal guidance and support I received were exceptional. Every step of the process was handled with professionalism, clarity, and dedication. I felt confident knowing my case was in trusted hands.",
    },
    {
      name: "Rajesh K",
      service: "Civil Litigation Client",
      star: 4,
      image: "./images/img2.jpg",
      description:
        "The professionalism and dedication shown throughout my case were truly remarkable. Every concern was addressed with clarity, and I always felt supported during the legal process.",
    },
    {
      name: "Meena R",
      service: "Property Dispute Client",
      star: 5,
      image: "./images/img3.jpg",
      description:
        "I highly appreciate the commitment and legal expertise provided. Their strategic guidance helped me navigate a complex situation with confidence and peace of mind.",
    },
    {
      name: "Arun V",
      service: "Corporate Legal Client",
      star: 5,
      image: "./images/img4.jpg",
      description:
        "From the initial consultation to the final resolution, the entire experience was smooth and reassuring. Their expertise helped me navigate a complex legal matter with ease.",
    },
    {
      name: "Kavitha M",
      service: "Legal Advisory Client",
      star: 4,
      image: "./images/img5.jpg",
      description:
        "The support and dedication shown were truly outstanding. Every question was answered patiently, and I always felt that my best interests were being protected.",
    },
    {
      name: "Suresh P",
      service: "Criminal Defense Client",
      star: 5,
      image: "./images/img6.jpg",
      description:
        "Their professionalism, responsiveness, and legal expertise exceeded my expectations. I felt supported at every stage, and the outcome of my case reflected their strong dedication.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const active = test[current];

  function nextSlide() {
    setCurrent((current + 1) % test.length);
  }

  function prevSlide() {
    setCurrent((current - 1 + test.length) % test.length);
  }

 return (
  <section  id="Test" className="bg-gradient-to-r from-slate-950 via-gray-900 to-black py-20 px-4 lg:px-6 overflow-hidden">
    {/* Heading */}
    <div className="text-center mb-14">
      <h1 className="text-white text-3xl lg:text-5xl font-medium p-4">
        What Our Clients Say
      </h1>

      <h2 className="text-gray-300 mt-2 text-sm lg:text-xl px-2">
        Our commitment to justice is reflected in the experiences of those we
        represent.
      </h2>
    </div>

    {/* ================= MOBILE VIEW ================= */}
<div className="block lg:hidden">
  <div className="max-w-sm mx-auto px-4 space-y-8">
    {test.slice(0, 4).map((item, index) => {
      const isLeft = index % 2 === 0;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          className={`relative ${isLeft ? "mr-6" : "ml-6"}`}
        >
        
          <img
            src={item.image}
            alt={item.name}
            className={`absolute top-6 z-20 w-14 h-14 rounded-full object-cover border-4 border-slate-900 ${
              isLeft ? "-left-6" : "-right-6"
            }`}
          />

          {/* Card */}
          <div
            className={`bg-white rounded-[28px] shadow-xl py-5 ${
              isLeft ? "pl-16 pr-5" : "pl-5 pr-16"
            }`}
          >
            {/* Name */}
            <h3 className="text-sm font-bold text-gray-900">
              {item.name}
            </h3>

            {/* Service */}
            <p className="text-[11px] text-gray-400 mt-1">
              {item.service}
            </p>

            {/* Stars */}
            <div className="text-yellow-500 text-sm mt-2">
              {"★".repeat(item.star)}
            </div>

            {/* Review */}
            <p className="text-xs text-gray-600 leading-5 mt-3">
              {item.description}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>

    {/* ================= DESKTOP VIEW ================= */}
    <div className="hidden lg:flex justify-center">
      <div className="relative w-full lg:w-[1250px] pb-24 lg:pb-20">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute right-24 bottom-0 z-40 w-16 h-16 rounded-full bg-gray-800 text-white border border-yellow-500/30 shadow-lg 
          flex justify-center items-center text-4xl hover:scale-110 transition duration-300" >
          <img src="./images/arrowleft.png"/>
        </button>

        {/* Desktop Card */}
        <motion.div
          key={current}
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
          }}
          className="w-[1250px] h-[500px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-yellow-500/20 
          shadow-[0_20px_80px_rgba(0,0,0,0.55)] overflow-hidden flex" >
          {/* Left Image */}
          <div className="w-[35%]">
            <img  src={active.image}  alt={active.name} className="w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="w-[65%] px-14 py-16 flex flex-col justify-center">
            <div className="w-20 h-20 rounded-full bg-yellow-500 text-white flex items-center justify-center text-5xl mb-8 shadow-lg">
               <img src="./images/quotes.png" alt="Quote" className="w-10 h-10"/>
            </div>

            <h3 className="text-4xl font-bold text-white">
              {active.name}
            </h3>

            <p className="text-gray-300 mt-2 text-lg">
              {active.service}
            </p>

            <p className="text-yellow-400 text-2xl mt-4 mb-6">
              {"★".repeat(active.star)}
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              {active.description}
            </p>
          </div>
        </motion.div>

        {/* Next Button */}
        <button onClick={nextSlide}  className="absolute right-0 bottom-0 z-40 w-16 h-16 rounded-full bg-yellow-500 text-white shadow-lg 
             flex justify-center items-center text-4xl hover:scale-110 transition duration-300"  >
           <img src="./images/arrowright.png"/>
        </button>
        
      </div>
    </div>
  </section>
);
}

export default Test;