
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-8 md:px-24 bg-[#F6F4F0]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A24D] font-semibold mb-6">The Studio</p>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-[#2B2B2B]">
            Crafting Spaces That <br /><span className="italic">Tell Your Story</span>
          </h2>
          <div className="space-y-6 text-[#2B2B2B]/70 leading-relaxed font-light text-lg">
            <p>
              Based in the heart of Pune, SBC Design Concept is an award-winning interior styling firm dedicated to creating bespoke residences that transcend trends.
            </p>
            <p>
              We believe luxury is a feeling—the seamless integration of form, function, and a whisper of the unexpected. From sprawling villas to minimalist penthouses, our team brings meticulous craftsmanship to every square inch.
            </p>
            <button className="pt-4 text-[10px] uppercase tracking-[0.4em] font-bold text-[#2B2B2B] border-b border-[#2B2B2B] hover:text-[#C9A24D] hover:border-[#C9A24D] transition-all">
              Discover Our Process
            </button>
          </div>
        </div>
        <div className="relative reveal-on-scroll delay-200">
          <div className="aspect-[4/5] overflow-hidden bg-[#E8E1D9]">
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Living" 
              className="w-full h-full object-cover grayscale-[20%] hover:scale-110 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#C9A24D] hidden md:flex items-center justify-center p-8 text-white">
            <p className="font-serif text-center italic text-lg leading-tight">
              A decade of excellence in Pune
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
