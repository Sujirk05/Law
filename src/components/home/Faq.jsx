import { useState } from "react";
function Faq() {
    const faq=[
        {
            question:"What types of legal services do you provide?",
            answer:"We offer legal services in family law, civil litigation, property disputes, corporate legal matters, and general legal advisory services tailored to individual and business needs.",
        },
        {
            question:"How can I schedule a consultation?",
            answer:"You can schedule a consultation by contacting us through phone, email, or by filling out the contact form on our website. Our team will get back to you promptly.",
        },
        {
            question:"Is my consultation confidential?",
            answer:"Yes. All consultations and client communications are handled with strict confidentiality in accordance with professional legal ethics and privacy standards.",
        },
        {
            question:"How are legal fees and charges determined?",
            answer:"Legal fees depend on the complexity, scope, and nature of the case. We provide transparent fee discussions during the initial consultation so clients understand the costs involved.",
        },
        {
            question:" How long will it take to resolve my case?",
            answer:"The timeline varies depending on the complexity of the matter, legal procedures, and court schedules. After reviewing your case, we provide a realistic estimate of the expected duration.",
        },
    ]
    const [openIndex, setOpenIndex] = useState(null);
    return(
<section className="bg-gray-50">
   <div className="text-center mt-8">
<h1 className="text-4xl font-black text-slate-600">Frequently Asked Questions</h1>
<p className="font-semibold text-slate-600 mt-4">Find answers to common legal questions and learn how we can assist you with confidence and clarity.</p>
   </div>

<div className="max-w-4xl mx-auto mt-10 space-y-4 p-6 ">
  {faq.map((faq, index) => (
    <div key={index}   className="bg-white rounded-xl shadow-md p-5">
  <div className="cursor-pointer" onClick={()=> setOpenIndex(openIndex === index ? null : index) }> <p className="text-xl  text-slate-900">{faq.question}</p></div>
   {openIndex === index && ( 
    <p className=" text-slate-900">{faq.answer}</p> 
   
   )} 
    </div>
  ))}
</div>

</section>

    )
}
export default Faq