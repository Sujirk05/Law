function Appointpage(){
    return(
        <section className="bg-gray-100 py-16">
            <div className="text-center">
         <h1 className="text-4xl text-slate-600 font-bold">Book Appointment</h1>
         <p  className="text-slate-600 mt-4  text-xl">Schedule a consultation with our legal experts.</p>
         </div>
            <form className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl mt-4">
                <div >
          <div className="flex items-center gap-4">
             <label className="mb-2 font-medium w-32 mt-6">Name</label>
              <input type="text" placeholder="Full Name" className=" flex-1 p-2  border border-gray-300 rounded-lg outline-none"></input>
              </div>
              <div className="flex items-center gap-4" >
            <label className="mb-2 font-medium w-32 mt-6">Phone Number</label>  
            <input type="tel" placeholder="Phone Number"  className=" flex-1 p-2  border border-gray-300 rounded-lg outline-none"></input>
             </div>
             <div className="flex items-center gap-4">
             <label className="mb-2 font-medium w-32 mt-6">Email Address </label>
             <input type="email" placeholder="Email Address"  className="flex-1 p-2   border border-gray-300 rounded-lg outline-none"></input>
             </div>
             <div className="flex items-center gap-4">
           <label className="mb-2 font-medium w-32 mt-6">  Date</label>
            <input type="date" placeholder="date"  className=" flex-1 p-2 border border-gray-300 rounded-lg outline-none"></input>
             </div>
             <div className="flex items-center gap-4">
               <label className="mb-2 font-medium w-32 mt-6">Time</label> 
                <input  type="time" placeholder="time"  className=" flex-1 p-2 border border-gray-300 rounded-lg outline-none"></input>
               </div>
               <div className="flex items-center gap-4">
         <label className="mb-2 font-medium w-32 mt-6" >   Consulation Mode </label>
          <select className="flex-1 p-2  border border-gray-300 rounded-lg outline-none" defaultValue={""}>
            <option value="" disabled>Select</option>
                <option>In-person</option>
                <option>Phone call</option>
                <option>Video call</option>
             </select>
             </div>
             </div>
             <div className="flex items-center gap-4">
          <label className="mb-2 font-medium w-32 mt-6">   Select Legal Service</label>
          <select  className="flex-1 p-2  border border-gray-300 rounded-lg outline-none" defaultValue={""} >
            <option value="" disabled>Select</option>
                <option >Civil Law</option>
               <option>Criminal Law</option>
               <option>Family Law</option>
               <option>Divorce Cases</option>
               <option>Property Disputes</option>
               <option>Corporate Law</option>
               <option>Legal Consultation</option>
               <option>Documentation & Agreements</option>
             </select>
             </div>
             <div className="flex items-center gap-4">
            <label className="mb-2 font-medium w-32 mt-6">Case Description</label>
            <textarea rows="5" className=" flex-1 p-3   border border-gray-300 rounded-lg outline-none"></textarea>
             </div>
               <div className="flex items-center mt-6">
             <label className=" font-medium ">  Have You Consulted Another Lawyer Before? </label>
             <div className="flex gap-6 ml-6">
               <label ><input type="radio" name="select" className="mr-2"></input>Yes</label>
              <label > <input type="radio" name="select" className="mr-2"></input>No</label>
              </div>
              </div>
              <div >
              <label className="mb-2 font-medium mt-6 flex items-center gap-4 ">
                <input type="checkbox"></input>
                I agree to share my information for consultation purposes.
              </label>
            </div>
            <div>
              <button className="py-4 w-full bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-600 transition mt-12"style={{ fontFamily: "Poppins" }}>Book Appointment</button>
           </div>
          
           </form>
        </section>
    )
}
export default Appointpage