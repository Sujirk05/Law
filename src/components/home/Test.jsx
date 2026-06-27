

function Test() {
const test=[
    {
     name: "Priya S",
     service: "Family Law Client",
     star:5,
     description:" “The legal guidance and support I received were exceptional. Every step of the process was handled with professionalism,clarity, and dedication. I felt confident knowing my case was in trusted hands.“",
    },
    {
        name:"Rajesh K",
        service:"Civil Litigation Client",
        star:4,
        description:" “The professionalism and dedication shown throughout my case were truly remarkable. Every concern was addressed with clarity, and I always felt supported during the legal process.”",
    },
    {
        name:"Meena R",
        service:"Property Dispute Client",
        star:5,
        description:"“I highly appreciate the commitment and legal expertise provided. Their strategic guidance helped me navigate a complex situation with confidence and peace of mind.”",
    },
    {
        name:"Arun V",
        service:"Corporate Legal Client",
        star:5,
        description:"“From the initial consultation to the final resolution, the entire experience was smooth and reassuring. Their expertise helped me navigate a complex legal matter with ease.”",
    },
    {
        name:"Kavitha M",
        service:"Legal Advisory Client",
        star:4,
        description:"“The support and dedication shown were truly outstanding. Every question was answered patiently, and I always felt that my best interests were being protected.”",
    },
    {
        name:"Suresh P",
        service:"Criminal Defense Client",
        star:5,
        description:"“Their professionalism, responsiveness, and legal expertise exceeded my expectations. I felt supported at every stage, and the outcome of my case reflected their strong dedication.”",
    },
];




   return(
    <section id="Test" className="bg-slate-100">
        <div className="text-center">
    <h1 className="text-slate-900 text-4xl font-bold p-4">What Our Clients Say</h1>
    <h1 className="text-slate-600 mt-4  text-xl">Our commitment to justice is reflected in the experiences of those we represent.</h1>
</div>
<div className="flex gap-6 overflow-hidden mt-8 p-8">


    {test.map((test,index) => (
        <div 
        key={index}
       className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto " >
               <h3 className="text-xl font-semibold text-slate-900">{test.name}</h3> 
                 <p className="text-gray-500">{test.service}</p>
                  <p className="flex mb-4 text-yellow-500 text-xl">{"★".repeat (test.star)}</p>           
     <p className="text-gray-600 text-lg leading-relaxed mb-6">{test.description}</p>


        </div>
     ) )

    }
</div>

    </section>

    )
}
export default Test