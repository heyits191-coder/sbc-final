import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 md:py-48 px-8 md:px-16 lg:px-24 bg-[#F6F3EE] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT COLUMN: Founder Portrait Image Block */}
          <div className="reveal-on-scroll relative group">
            <div className="relative z-10 aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-black/5">
              <img 
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=1200" 
                alt="Chandni - Founder & Principal Interior Designer of SBC Design Concept" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -top-6 -left-6 w-full h-full border-[0.5px] border-[#C6A75E]/30 rounded-[2rem] md:rounded-[3rem] -z-0"></div>
            
            <div className="absolute top-12 -right-4 bg-[#C6A75E] text-white px-6 py-2 rotate-90 origin-right rounded-sm shadow-lg">
              <p className="text-[8px] uppercase tracking-[0.4em] font-bold whitespace-nowrap">Est. 2014</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="reveal-on-scroll delay-200 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[1px] bg-[#C6A75E] draw-line reveal-on-scroll w-12"></span>
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#1E1E1E]/40 overflow-hidden">
                  <span className="text-reveal-up">Founder</span>
                </p>
              </div>
              
              <div className="space-y-4 overflow-hidden">
                <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1E1E1E] tracking-tighter text-reveal-up">
                  Chandni
                </h2>
                <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#C6A75E] font-medium text-reveal-up" style={{ transitionDelay: '0.2s' }}>
                  Founder & Principal Interior Designer
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden">
                <p className="text-[#1E1E1E]/80 font-light text-xl leading-relaxed max-w-xl text-reveal-up" style={{ transitionDelay: '0.4s' }}>
                  “With an eye for timeless elegance and a passion for refined craftsmanship, Chandni founded SBC Design Concept to create interiors that feel personal, purposeful, and enduring. Each space is thoughtfully curated to balance luxury, comfort, and architectural harmony.”
                </p>
              </div>
              
              {/* Instagram Element */}
              <div className="pt-2 reveal-on-scroll" style={{ transitionDelay: '0.6s' }}>
                <a 
                  href="https://instagram.com/stylebychandnii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-[#1E1E1E]/60 transition-colors hover:text-[#C6A75E]"
                >
                  <span className="relative">
                    Instagram · @stylebychandnii
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C6A75E] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-12 reveal-on-scroll" style={{ transitionDelay: '0.8s' }}>
              <button className="group relative px-12 py-5 bg-[#1E1E1E] text-white overflow-hidden rounded-full transition-all duration-700 hover:scale-[1.05] hover:bg-[#C6A75E] shadow-xl shadow-black/10">
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">Meet the Founder</span>
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>
              
              <div className="flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A75E]">Enquiries</p>
                <a href="mailto:stylebychandni@gmail.com" className="text-sm font-light border-b border-[#1E1E1E]/10 hover:border-[#C6A75E] transition-all py-1">
                  stylebychandni@gmail.com
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FounderSection;