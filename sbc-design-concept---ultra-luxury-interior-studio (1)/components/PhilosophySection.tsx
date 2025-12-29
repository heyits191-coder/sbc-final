
import React from 'react';

const philosophyPoints = [
  {
    title: "Meticulous Execution",
    description: "End-to-end interior execution with an uncompromising attention to every detail."
  },
  {
    title: "Functional Aesthetics",
    description: "Thoughtful layouts that masterfully balance visual beauty with everyday functionality."
  },
  {
    title: "Curated Materials",
    description: "Sourcing premium materials and refined finishes to ensure a timeless tactile experience."
  },
  {
    title: "Transparent Partnership",
    description: "A client-first approach defined by transparent processes and collaborative design."
  }
];

const PhilosophySection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-8 md:px-24 bg-[#F6F3EE] border-t border-[#E8E1D9]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Statement */}
          <div className="lg:col-span-6 reveal-on-scroll">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A24D] font-semibold mb-8">Our Philosophy</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#2B2B2B] font-medium">
              Design is not just how a space looks — <span className="italic font-light opacity-80">it’s how it feels.</span>
            </h2>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block lg:col-span-1 h-full py-4 justify-self-center">
            <div className="w-[1px] h-full bg-[#C6A75E]/30 min-h-[300px]"></div>
          </div>

          {/* Right Column: Key Points */}
          <div className="lg:col-span-5 space-y-16">
            {philosophyPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="reveal-on-scroll" 
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl mb-4 text-[#2B2B2B] flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-[#C6A75E]"></span>
                  {point.title}
                </h3>
                <p className="text-[#2B2B2B]/60 font-light leading-relaxed text-lg max-w-md">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
