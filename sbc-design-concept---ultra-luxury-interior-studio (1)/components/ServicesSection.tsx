import React from 'react';

const services = [
  {
    title: "Full Home Interior",
    desc: "Comprehensive design solutions for every corner of your home.",
    icon: (
      <svg className="w-8 h-8 stroke-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    )
  },
  {
    title: "Residential Interior Design",
    desc: "Elegant living spaces crafted with precision and passion.",
    icon: (
      <svg className="w-8 h-8 stroke-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z" />
        <path d="M3 10h18M9 3v18" />
      </svg>
    )
  },
  {
    title: "Styling & Décor",
    desc: "Curating fine art and accessories to elevate your atmosphere.",
    icon: (
      <svg className="w-8 h-8 stroke-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    )
  },
  {
    title: "Turnkey Interior Solutions",
    desc: "From initial concept to final handover, handled flawlessly.",
    icon: (
      <svg className="w-8 h-8 stroke-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 7l-9 5-9-5 9-5 9 5zM3 17l9 5 9-5M3 12l9 5 9-5" />
      </svg>
    )
  },
  {
    title: "Space Planning & Custom Furniture",
    desc: "Optimized layouts paired with bespoke artisanal pieces.",
    icon: (
      <svg className="w-8 h-8 stroke-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-48 px-8 md:px-24 bg-[#F6F3EE]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#2B2B2B]/40 font-semibold mb-6">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B]">End-to-End Interior Services</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof services[0];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <div 
      className="reveal-on-scroll w-full md:w-[calc(50%-1rem)] lg:w-[calc(30%-2rem)] bg-white p-12 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 group cursor-pointer border border-[#E8E1D9]/30"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="text-[#C6A75E] mb-8 group-hover:scale-110 transition-transform duration-700 ease-out inline-block">
        {service.icon}
      </div>
      
      <h3 className="font-serif text-2xl mb-4 text-[#2B2B2B] relative inline-block">
        {service.title}
        <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#C6A75E] transition-all duration-700 group-hover:w-full"></span>
      </h3>
      
      <p className="text-[#2B2B2B]/60 font-light text-sm leading-relaxed mt-4">
        {service.desc}
      </p>
    </div>
  );
};

export default ServicesSection;