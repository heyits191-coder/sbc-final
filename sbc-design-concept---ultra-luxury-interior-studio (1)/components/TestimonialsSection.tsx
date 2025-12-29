
import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Our home feels elegant, warm, and thoughtfully designed. SBC Design Concept understood our vision perfectly and delivered beyond expectations.",
    name: "Aditi & Rahul Mehta",
    project: "Luxury Villa, Koregaon Park"
  },
  {
    id: 2,
    text: "The attention to detail and the choice of materials were impeccable. They didn't just design a house; they created a sanctuary for our family.",
    name: "Vikram Singhania",
    project: "Minimalist Penthouse, Baner"
  },
  {
    id: 3,
    text: "From the first consultation to the final handover, the process was seamless. Their ability to blend functionality with high-end aesthetics is rare.",
    name: "Priya Deshmukh",
    project: "Contemporary Apartment, Viman Nagar"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFading(false);
    }, 500);
  }, []);

  const prevSlide = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="py-32 md:py-48 px-8 md:px-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="reveal-on-scroll mb-20">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#2B2B2B]/40 font-semibold mb-6">Client Experiences</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B]">Words From Our Clients</h2>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {/* Testimonial Card */}
          <div 
            className={`w-full max-w-4xl transition-all duration-700 ease-in-out px-4 md:px-12 py-16 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[#E8E1D9]/20 reveal-on-scroll ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            <div className="flex flex-col items-center gap-8">
              <p className="text-xl md:text-3xl font-light leading-relaxed text-[#2B2B2B]/80 italic max-w-3xl">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-[#C6A75E] mb-6"></div>
                <h4 className="font-serif text-2xl text-[#2B2B2B] mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#2B2B2B]/40">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-2">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto p-4 text-[#2B2B2B]/30 hover:text-[#C6A75E] transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto p-4 text-[#2B2B2B]/30 hover:text-[#C6A75E] transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mt-16 flex justify-center gap-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsFading(false);
                }, 500);
              }}
              className={`h-[2px] transition-all duration-700 ${currentIndex === idx ? 'w-12 bg-[#C6A75E]' : 'w-4 bg-[#2B2B2B]/10'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
