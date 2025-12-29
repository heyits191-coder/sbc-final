import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#2B2B2B]/40 font-semibold mb-6">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B] max-w-3xl mx-auto">
            Let’s Design Your Space Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column: Contact Details */}
          <div className="space-y-16">
            <div className="space-y-10">
              <div className="reveal-on-scroll">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A75E] font-bold mb-4">Studio Address</p>
                <p className="text-[#2B2B2B]/70 font-light text-lg leading-relaxed max-w-sm">
                  Office 520, Gera Imperium Alpha,<br />
                  Grant Road, Kharadi,<br />
                  Pune, Maharashtra – 411014
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
                <div className="reveal-on-scroll stagger-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A75E] font-bold mb-4">Phone</p>
                  <a href="tel:+919890405577" className="text-[#2B2B2B]/70 font-light text-lg hover:text-[#C6A75E] transition-colors">
                    +91 98904 05577
                  </a>
                </div>
                <div className="reveal-on-scroll stagger-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A75E] font-bold mb-4">Email</p>
                  <a href="mailto:stylebychandni@gmail.com" className="text-[#2B2B2B]/70 font-light text-lg hover:text-[#C6A75E] transition-colors">
                    stylebychandni@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal-on-scroll stagger-3 w-full h-64 bg-[#F6F3EE] rounded-sm overflow-hidden relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3551532462374!2d73.9431932759247!3d18.558000468026132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c6f0000001%3A0x8603673523f3a8b!2sGera%20Imperium%20Alpha!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SBC Design Concept Studio Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="space-y-8">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 reveal-on-scroll stagger-1">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B]/40 font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#F6F3EE]/50 border-b border-[#E8E1D9] py-4 px-1 focus:border-[#C6A75E] focus:outline-none transition-colors font-light text-[#2B2B2B]" 
                    placeholder="E.g. Rohan Sharma"
                  />
                </div>
                <div className="space-y-2 reveal-on-scroll stagger-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B]/40 font-bold ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-[#F6F3EE]/50 border-b border-[#E8E1D9] py-4 px-1 focus:border-[#C6A75E] focus:outline-none transition-colors font-light text-[#2B2B2B]" 
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2 reveal-on-scroll stagger-3">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B]/40 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#F6F3EE]/50 border-b border-[#E8E1D9] py-4 px-1 focus:border-[#C6A75E] focus:outline-none transition-colors font-light text-[#2B2B2B]" 
                  placeholder="name@email.com"
                />
              </div>

              <div className="space-y-2 reveal-on-scroll stagger-4">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-[#2B2B2B]/40 font-bold ml-1">Your Vision</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#F6F3EE]/50 border-b border-[#E8E1D9] py-4 px-1 focus:border-[#C6A75E] focus:outline-none transition-colors font-light text-[#2B2B2B] resize-none" 
                  placeholder="Tell us about your space..."
                ></textarea>
              </div>

              <div className="pt-6 reveal-on-scroll stagger-5">
                <button 
                  type="submit" 
                  className="group relative w-full py-6 bg-[#C6A75E] text-white rounded-full overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(198,167,94,0.4)]"
                >
                  <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold">Book Consultation</span>
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;