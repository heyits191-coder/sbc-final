
import React from 'react';

const FeaturedVideo: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] bg-[#F6F3EE] overflow-hidden flex items-center justify-center">
      {/* Full Bleed Cinematic Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-living-room-interior-41559-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Subtle Airy Overlay to unify with the brand palette */}
        <div className="absolute inset-0 bg-[#F6F3EE]/15 pointer-events-none"></div>
        
        {/* Soft Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/20 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Subtle Corner Detail */}
      <div className="absolute bottom-12 right-12 z-10 flex flex-col items-end gap-3 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
        <div className="w-12 h-[1px] bg-white/40"></div>
        <p className="text-[10px] uppercase tracking-[0.6em] text-white font-bold drop-shadow-sm">
          Signature Interior Projects
        </p>
      </div>

      {/* Centered Brand Mark - very subtle */}
      <div className="relative z-10 pointer-events-none opacity-20">
        <span className="font-serif text-white text-9xl tracking-[0.2em] font-light italic select-none">SBC</span>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s ease-in-out infinite alternate;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedVideo;
