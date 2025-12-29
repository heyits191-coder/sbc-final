import React from 'react';
import ScrollIndicator from './ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F3EE] flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Left Column: Text Content */}
      <div className="relative z-10 w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 py-24 lg:py-0">
        <div className="max-w-xl reveal-on-scroll visible">
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-8 overflow-hidden">
            <span className="h-[1px] bg-[#C6A75E] draw-line visible w-8"></span>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-[#C6A75E] text-reveal-up">
              ULTRA-LUXURY INTERIOR STUDIO
            </p>
          </div>
          
          {/* Main Editorial Heading */}
          <div className="space-y-0 mb-8 overflow-hidden">
            <h1 className="font-serif text-[18vw] lg:text-[10rem] xl:text-[12rem] leading-[0.8] tracking-tight text-[#1E1E1E] text-reveal-up">
              SBC
            </h1>
            <h2 className="font-serif text-[8vw] lg:text-[4.5rem] xl:text-[5.5rem] italic font-light text-[#1E1E1E]/80 -mt-2 lg:-mt-6 text-reveal-up" style={{ transitionDelay: '0.2s' }}>
              Design Concept
            </h2>
          </div>
          
          <div className="overflow-hidden mb-12">
            <p className="text-base md:text-lg font-light text-[#1E1E1E]/60 tracking-wide max-w-md leading-relaxed text-reveal-up" style={{ transitionDelay: '0.4s' }}>
              End-to-End Interior Solutions Crafted for Timeless Living. We define luxury through meticulous craftsmanship and architectural elegance.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <button className="group relative px-10 py-5 bg-[#C6A75E] text-white overflow-hidden rounded-full transition-all duration-700 hover:scale-[1.03] shadow-xl shadow-[#C6A75E]/20">
              <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold">Book Free Consultation</span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </button>
            <button className="group px-10 py-5 border border-[#1E1E1E] text-[#1E1E1E] rounded-full transition-all duration-700 hover:scale-[1.03] hover:bg-[#1E1E1E] hover:text-white">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">View Our Projects</span>
            </button>
          </div>

          <p className="mt-16 text-[9px] uppercase tracking-[0.4em] text-[#1E1E1E]/30 font-semibold opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
            Interior Studio &middot; Pune, India
          </p>
        </div>
      </div>

      {/* Right Column: Visible Video Container */}
      <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-[85vh] px-8 lg:pr-16 flex items-center justify-center">
        <div className="relative w-full h-full rounded-[2.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-[#1E1E1E]/5 opacity-0 animate-[fadeIn_2s_ease-out_0.3s_forwards]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover ken-burns"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-luxury-modern-living-room-41560-large.mp4" 
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3EE]/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-10 left-10 z-10 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-[8px] uppercase tracking-[0.4em] text-white font-bold">Featured Concept</span>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;