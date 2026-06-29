import Services from "../components/home/Services"
function Servicepage(){
    return(
        <section>
            < div className="bg-gray-400 text-white py-10 ">  
              <h1 className="text-4xl font-bold mb-4 text-center text-yellow-500" style={{fontFamily:"cinzel"}}>Our Service</h1> 
              </div> 
              
             <div className="bg-gray-100 ">
                  <div className="grid md:grid-cols-2 items-center gap-10 p-16">
                    <div>
                <h1 className="text-4xl font-bold mb-4 text-slate-900">Trusted Legal Guidance for Every Challenge </h1>
                      <h1 className="text-4xl font-bold mb-4 text-yellow-500">
  Protecting Your Rights with Confidence
</h1>        
                <p className="text-lg text-gray-700 font-semibold ">At Incredible Law Chamber, we are committed to delivering exceptional legal services with integrity, professionalism, and a client-centered approach. We understand that legal matters can be complex and emotionally challenging, which is why we focus on providing clear guidance, practical solutions, and strong representation at every stage. Whether you require legal consultation, dispute resolution, documentation, or courtroom advocacy, our experienced team works diligently to protect your rights and help you make informed decisions with confidence.</p>
     <button className="mt-5 bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:scale-105 transition">
      <a href="/Appointpage">  Book Appointment </a></button>
      </div>

      <div className= " flex justify-center">
                 <img src="/images/bg.png" className="w-300 h-auto"/>      
             </div>
</div>
             </div>
            <Services/>

</section>
    )
} 
export default Servicepage