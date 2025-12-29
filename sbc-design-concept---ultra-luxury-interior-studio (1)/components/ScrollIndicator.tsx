import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-0 animate-[fadeIn_1.5s_ease-out_1.5s_forwards]">
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#1E1E1E]/10 to-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#C6A75E] animate-scroll-down"></div>
      </div>
      <span className="text-[9px] uppercase tracking-[0.6em] text-[#1E1E1E]/40 font-bold">Scroll</span>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-down {
          animation: scroll-down 3s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollIndicator;