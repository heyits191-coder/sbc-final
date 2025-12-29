import React from 'react';

const instagramItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687940-4e2003554b2a?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: true
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: false
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: true
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1615876234582-27a23df93f25?auto=format&fit=crop&q=80&w=800",
    link: "https://instagram.com/sbcdesignconcept",
    isReel: false
  }
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#F6F3EE]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20 reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#2B2B2B]/40 font-semibold mb-6">Social Presence</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B]">Follow Our Design Journey</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {instagramItems.map((item, idx) => (
            <a 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="reveal-on-scroll group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#E8E1D9]"
              style={{ transitionDelay: `${(idx % 3) * 0.15 + (Math.floor(idx / 3) * 0.2)}s` }}
            >
              <img 
                src={item.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white scale-90 group-hover:scale-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                  </svg>
                </div>
              </div>

              {item.isReel && (
                <div className="absolute top-4 right-4 text-white drop-shadow-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                   </svg>
                </div>
              )}
            </a>
          ))}
        </div>

        <div className="mt-20 text-center reveal-on-scroll">
          <a 
            href="https://instagram.com/sbcdesignconcept" 
            className="group relative inline-block text-[11px] uppercase tracking-[0.4em] font-bold text-[#2B2B2B] transition-all duration-700"
          >
            Follow @sbcdesignconcept
            <span className="absolute -bottom-2 left-0 w-8 h-[1.5px] bg-[#C6A75E] transition-all duration-700 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;