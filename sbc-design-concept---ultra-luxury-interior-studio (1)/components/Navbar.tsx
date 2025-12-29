import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 md:px-16 py-8 ${scrolled ? 'bg-[#F6F3EE]/95 backdrop-blur-sm border-b border-[#E8E1D9]/30 py-6' : 'bg-transparent'}`}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-serif text-3xl tracking-[0.2em] font-bold text-[#1E1E1E]">
          SBC
          <span className="block text-[8px] tracking-[0.5em] uppercase font-light opacity-50 -mt-1">Design Concept</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-semibold hover:text-[#C6A75E] transition-colors">Studio</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-semibold hover:text-[#C6A75E] transition-colors">Projects</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-semibold hover:text-[#C6A75E] transition-colors">Services</a>
          <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-semibold hover:text-[#C6A75E] transition-colors">Contact</a>
          <div className="w-[1px] h-4 bg-[#1E1E1E]/20 mx-2"></div>
          <button className="px-6 py-3 bg-[#1E1E1E] text-white text-[9px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-[#C6A75E] transition-all duration-500">Inquiry</button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button className="p-2">
            <div className="w-6 h-[1px] bg-[#1E1E1E] mb-1.5"></div>
            <div className="w-4 h-[1px] bg-[#1E1E1E]"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;