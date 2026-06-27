function About() {
  return (
    <section id="About"className="w-full py-20 px-10 bg-gray-300 scroll-mt-24" >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-16">

     
        <div className="w-1/2 flex justify-center">
          <img src="/images/lawyer2.png" alt="Lawyer" className="h-125 object-contain" />
        </div>

       
        <div className="w-1/2">
          <p className="text-yellow-600 font-semibold tracking-widest text-2xl">   ABOUT US</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Dedicated to Justice, Committed to Excellence
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            At Incredible Law Chamber, we are committed to delivering exceptional
            legal services with integrity, professionalism, and unwavering
            dedication to justice.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We provide strategic legal solutions tailored to individuals,
            families, and businesses while protecting rights and ensuring
            strong representation.
          </p>

         
          <div className="flex gap-10 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-yellow-500">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
              <p className="text-gray-600">Cases Handled</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-500">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About