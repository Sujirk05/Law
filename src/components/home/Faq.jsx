import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { DiVim } from "react-icons/di";
function Faq() {
  const faq = [
    {
      question: "What types of legal services do you provide?",
      answer:
        "We offer legal services in family law, civil litigation, property disputes, corporate legal matters, and general legal advisory services tailored to individual and business needs.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by contacting us through phone, email, or by filling out the contact form on our website. Our team will get back to you promptly.",
    },
    {
      question: "Is my consultation confidential?",
      answer:
        "Yes. All consultations and client communications are handled with strict confidentiality in accordance with professional legal ethics and privacy standards.",
    },
    {
      question: "How are legal fees and charges determined?",
      answer:
        "Legal fees depend on the complexity, scope, and nature of the case. We provide transparent fee discussions during the initial consultation so clients understand the costs involved.",
    },
    {
      question: "How long will it take to resolve my case?",
      answer:
        "The timeline varies depending on the complexity of the matter, legal procedures, and court schedules. After reviewing your case, we provide a realistic estimate of the expected duration.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
const handleToggle = (index) => {
  if (openIndex === index) {
    setOpenIndex(null);
    return;
  }
  if (openIndex !== null) {
    setOpenIndex(null);

    setTimeout(() => {
      setOpenIndex(index);
    }, 500); // wait for closing animation
  } else {
    setOpenIndex(index);
  }
};
  return (
  <section className="bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] py-14 lg:py-20 px-4 lg:px-6">
     
      <div className="text-center">
     <h1 className="text-3xl lg:text-5xl font-bold text-slate-900">
          Frequently Asked Questions
        </h1>

       <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-sm lg:text-lg leading-relaxed px-2">
          Find answers to common legal questions and learn how we can assist
          you with confidence and clarity.
        </p>
      </div>

    <div className="max-w-5xl mx-auto mt-10 lg:mt-14 space-y-4 lg:space-y-5">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300" >
           
              <div  onClick={() => handleToggle(index)}
           className="cursor-pointer px-4 py-4 lg:px-8 lg:py-6 flex justify-between items-center gap-3" >
               <p className="text-base lg:text-xl text-slate-900 font-semibold">
                  {item.question}
                </p>

                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-md shrink-0">
                  {isOpen ? (
                      <FiMinus className="text-black text-lg lg:text-xl" />
                     ) : (
                         <FiPlus className="text-black text-lg lg:text-xl" />
                          )}
                   </div>
              </div>

              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.div
                   initial={{ height: 0 }}
                   animate={{ height: "auto" }}
                   exit={{ height: 0 }}
                    transition={{
                     duration: 0.5,
                     ease: "easeInOut",
                     }}
                    className="overflow-hidden">
                  <div className="px-4 pb-4 lg:px-8 lg:pb-6">
                      <div className="h-[1px] bg-yellow-500/20 mb-5"></div>

                      <p className="text-slate-600 leading-relaxed text-sm lg:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;