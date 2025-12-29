
import React from 'react';

const projects = [
  {
    title: "The Ivory Villa",
    location: "Koregaon Park, Pune",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    title: "Minimalist Penthouse",
    location: "Baner",
    image: "https://images.unsplash.com/photo-1600607687940-4e2003554b2a?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Serene Studio",
    location: "Viman Nagar",
    image: "https://images.unsplash.com/photo-1616486341351-70252447c574?auto=format&fit=crop&q=80&w=800",
    size: "small"
  }
];

const ProjectGallery: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 bg-[#E8E1D9]">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16 reveal-on-scroll">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#C9A24D] font-semibold mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B]">Selected Works</h2>
          </div>
          <button className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-bold text-[#2B2B2B] hover:text-[#C9A24D] transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden bg-white reveal-on-scroll ${project.size === 'large' ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="aspect-video lg:aspect-auto lg:h-[600px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-2">{project.location}</p>
                <h3 className="font-serif text-3xl text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
