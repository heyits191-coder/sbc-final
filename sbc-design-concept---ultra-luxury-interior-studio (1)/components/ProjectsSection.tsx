
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Modern 3BHK Residence",
    type: "Residential Interior",
    video: "/videos/sbcproject1.mp4"
  },
  {
    id: 2,
    title: "Luxury Villa Interior",
    type: "Bespoke Styling",
    video: "/videos/sbcproject2.mp4"
  },
  {
    id: 3,
    title: "Elegant Apartment Styling",
    type: "Modern Minimalist",
    video: "/videos/sbcproject3.mp4"
  },
  {
    id: 4,
    title: "Contemporary Penthouse",
    type: "Penthouse Suite",
    video: "/videos/sbcproject4.mp4"
  },
  {
    id: 5,
    title: "Bespoke Office Space",
    type: "Commercial Interior",
    video: "/videos/sbcproject5.mp4"
  },
  {
    id: 6,
    title: "Minimalist Studio",
    type: "Interior Styling",
    video: "/videos/sbcproject6.mp4"
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
  return (
    <div 
      className="reveal-on-scroll group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer bg-[#F6F4F0] shadow-sm hover:shadow-2xl transition-all duration-1000"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Autoplaying Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
      >
        <source src={project.video} type="video/mp4" />
      </video>

      {/* Elegant Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

      {/* Project Details Overlay */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
        <div className="overflow-hidden">
           <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
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
