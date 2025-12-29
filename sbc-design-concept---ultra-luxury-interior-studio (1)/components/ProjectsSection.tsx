import React, { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Modern 3BHK Residence",
    type: "Residential Interior",
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-living-room-interior-41559-large.mp4",
    poster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Luxury Villa Interior",
    type: "Bespoke Styling",
    video: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-41561-large.mp4",
    poster: "https://images.unsplash.com/photo-1600607687940-4e2003554b2a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Elegant Apartment Styling",
    type: "Modern Minimalist",
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-interior-design-panning-41558-large.mp4",
    poster: "https://images.unsplash.com/photo-1616486341351-70252447c574?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Contemporary Penthouse",
    type: "Penthouse Suite",
    video: "https://assets.mixkit.co/videos/preview/mixkit-luxury-modern-living-room-41560-large.mp4",
    poster: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Bespoke Office Space",
    type: "Commercial Interior",
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-large-window-41562-large.mp4",
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Minimalist Studio",
    type: "Interior Styling",
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-interior-design-41563-large.mp4",
    poster: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-24 reveal-on-scroll">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#2B2B2B]/40 font-semibold mb-6">Selected Works</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2B2B2B]">Signature Interior Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delay={idx * 0.15} />
          ))}
        </div>

        <div className="mt-24 text-center reveal-on-scroll">
          <a href="#" className="group relative inline-block text-[11px] uppercase tracking-[0.4em] font-bold text-[#2B2B2B] transition-all duration-700">
            View All Projects
            <span className="absolute -bottom-2 left-0 w-8 h-[1.5px] bg-[#C6A75E] transition-all duration-700 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0]; delay: number }> = ({ project, delay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div 
      className="reveal-on-scroll group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bg-[#F6F4F0]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${delay}s`, transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
    >
      <img 
        src={project.poster} 
        alt={project.title} 
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
      />

      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={project.poster}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
      >
        <source src={project.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        <div className="overflow-hidden">
           <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 mb-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
             {project.type}
           </p>
        </div>
        <div className="overflow-hidden">
          <h3 className="font-serif text-2xl md:text-3xl leading-tight translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out delay-75">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;