import { useState } from "react";
import { motion } from "framer-motion";

function Test() {
const test=[
    {
     name: "Priya S",
     service: "Family Law Client",
     star:5,
     image:"./images/img1.jpg",
     description:" “The legal guidance and support I received were exceptional. Every step of the process was handled with professionalism,clarity, and dedication. I felt confident knowing my case was in trusted hands.“",
    },
    {
        name:"Rajesh K",
        service:"Civil Litigation Client",
        star:4,
        image:"./images/img2.jpg",
        description:" “The professionalism and dedication shown throughout my case were truly remarkable. Every concern was addressed with clarity, and I always felt supported during the legal process.”",
    },
    {
        name:"Meena R",
        service:"Property Dispute Client",
        star:5,
        image:"./images/img3.jpg",
        description:"“I highly appreciate the commitment and legal expertise provided. Their strategic guidance helped me navigate a complex situation with confidence and peace of mind.”",
    },
    {
        name:"Arun V",
        service:"Corporate Legal Client",
        star:5,
        image:"./images/img4.jpg ",
        description:"“From the initial consultation to the final resolution, the entire experience was smooth and reassuring. Their expertise helped me navigate a complex legal matter with ease.”",
    },
    {
        name:"Kavitha M",
        service:"Legal Advisory Client",
        star:4,
        image:"./images/img5.jpg",
        description:"“The support and dedication shown were truly outstanding. Every question was answered patiently, and I always felt that my best interests were being protected.”",
    },
    {
        name:"Suresh P",
        service:"Criminal Defense Client",
        star:5,
        image:"./images/img6.jpg",
        description:"“Their professionalism, responsiveness, and legal expertise exceeded my expectations. I felt supported at every stage, and the outcome of my case reflected their strong dedication.”",
    },
];


const[current,setCurrent]= useState(0)

const active = test[current];


function nextSlide() {
    setCurrent((current+1) % test.length)
}
function prevSlide() {
   setCurrent((current - 1 + test.length) % test.length)
}
   return(
   <section id="Test" className="bg-slate-100 py-20 px-6 overflow-hidden">
        <div className="text-center mb-14">
    <h1 className="text-slate-900 text-4xl font-bold p-4">What Our Clients Say</h1>
    <h1 className="text-slate-600 mt-4  text-xl">Our commitment to justice is reflected in the experiences of those we represent.</h1>
</div>

<div className="flex justify-center">
  <div className="relative w-[1100px] pb-32">
   <button
  onClick={prevSlide}
  className="absolute right-20 bottom-8 z-40 w-16 h-16 bg-white shadow-lg flex justify-center items-center text-4xl hover:bg-gray-100 transition"
>
  ‹
</button>

<motion.div
  key={current}
 initial={{ x: 120, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: -120, opacity: 0 }}
transition={{
  type: "spring",
  stiffness: 120,
  damping: 18
}}
className=" w-[1100px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden z-30 flex"
>
<div className="w-[42%]">
  <img src={active.image}alt=""  className="w-full h-full object-cover"/>
</div>

<div className="w-[58%] p-14 flex flex-col justify-center">
<div className="w-20 h-20 rounded-full bg-yellow-500 text-white flex items-center justify-center text-5xl mb-8">
    ❝
    </div>

  <h3 className="text-3xl font-bold"> {active.name}</h3>

  <p className="text-gray-500 mt-2">{active.service}</p>

  <p className="text-yellow-500 text-2xl mt-4 mb-6"> {"★".repeat(active.star)}</p>

  <p className="text-lg text-gray-600 leading-relaxed">  {active.description} </p>
</div>

</motion.div>


  <button
  onClick={nextSlide}
  className="absolute right-0 bottom-8 z-40 w-16 h-16 bg-black text-white shadow-lg flex justify-center items-center text-4xl hover:scale-105 transition"
>
  ›
</button>
</div>
 
    
 </div>

    </section>

    )
}
export default Test
